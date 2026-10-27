"use strict";
(function () {
  try {
    var e =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    e.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "3239bf85-b427-4721-aa05-a153205637f5"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-3239bf85-b427-4721-aa05-a153205637f5"));
  })();
} catch {}
let s = null;
function n() {
  if (s) return s;
  try {
    const e = require("@shared/logger/logger");
    if (typeof e == "object" && e !== null && "activityMemoryLogger" in e) {
      const t = e.activityMemoryLogger;
      if (
        typeof t == "object" &&
        t !== null &&
        "info" in t &&
        typeof t.info == "function" &&
        "error" in t &&
        typeof t.error == "function"
      )
        return ((s = t), s);
    }
  } catch {}
  return (
    (s = { info: (e) => console.log(e), error: (e, t) => console.error(e, t) }),
    s
  );
}
const o = [
  {
    id: 1,
    name: "initial_schema",
    up: (e) => {
      e.exec(`
        -- Migrations tracking
        CREATE TABLE IF NOT EXISTS migrations (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL UNIQUE,
          executed_at INTEGER NOT NULL
        );

        -- Day task memories table
        CREATE TABLE IF NOT EXISTS day_task_memories (
          date TEXT PRIMARY KEY,
          created_at INTEGER NOT NULL,
          updated_at INTEGER NOT NULL,
          data TEXT NOT NULL
        );
        
        CREATE INDEX IF NOT EXISTS idx_date ON day_task_memories(date DESC);
        CREATE INDEX IF NOT EXISTS idx_updated_at ON day_task_memories(updated_at DESC);
      `);
    },
  },
  {
    id: 2,
    name: "add_week_month_summaries",
    up: (e) => {
      e.exec(`
        -- Week summaries table
        CREATE TABLE IF NOT EXISTS week_summaries (
          week_start TEXT PRIMARY KEY,  -- "2024-12-09" (Monday)
          summary TEXT NOT NULL,
          generated_at INTEGER NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_week_start ON week_summaries(week_start DESC);

        -- Month summaries table
        CREATE TABLE IF NOT EXISTS month_summaries (
          month TEXT PRIMARY KEY,  -- "2024-12"
          summary TEXT NOT NULL,
          generated_at INTEGER NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_month ON month_summaries(month DESC);
      `);
    },
  },
  {
    id: 3,
    name: "add_activity_sessions",
    up: (e) => {
      e.exec(`
        -- 15-minute activity sessions table
        CREATE TABLE IF NOT EXISTS activity_sessions (
          id TEXT PRIMARY KEY,
          profile_id TEXT NOT NULL,
          date TEXT NOT NULL,           -- YYYY-MM-DD (for quick day queries)
          block_start TEXT NOT NULL,    -- ISO timestamp (15-min boundary)
          block_end TEXT NOT NULL,      -- ISO timestamp
          session_json TEXT NOT NULL,   -- Serialized ActivitySession
          generated_at TEXT NOT NULL,   -- ISO timestamp
          UNIQUE(profile_id, date, block_start)
        );

        CREATE INDEX IF NOT EXISTS idx_sessions_profile_date ON activity_sessions(profile_id, date);
        CREATE INDEX IF NOT EXISTS idx_sessions_profile_time ON activity_sessions(profile_id, block_start);
      `);
    },
  },
  {
    id: 4,
    name: "unify_summaries_table",
    up: (e) => {
      e.exec(`
        -- Unified summaries table for day/week/month summaries
        -- All summary types retained indefinitely (tiered retention policy)
        CREATE TABLE IF NOT EXISTS summaries (
          type TEXT NOT NULL,           -- 'day', 'week', 'month'
          period TEXT NOT NULL,         -- YYYY-MM-DD (day/week) or YYYY-MM (month)
          summary TEXT NOT NULL,
          generated_at INTEGER NOT NULL,
          PRIMARY KEY (type, period)
        );

        CREATE INDEX IF NOT EXISTS idx_summaries_type_period ON summaries(type, period DESC);
      `);
      const t = e
          .prepare(
            "SELECT week_start, summary, generated_at FROM week_summaries",
          )
          .all(),
        i = e.prepare(
          "INSERT OR REPLACE INTO summaries (type, period, summary, generated_at) VALUES (?, ?, ?, ?)",
        );
      for (const r of t) i.run("week", r.week_start, r.summary, r.generated_at);
      const a = e
        .prepare("SELECT month, summary, generated_at FROM month_summaries")
        .all();
      for (const r of a) i.run("month", r.month, r.summary, r.generated_at);
      e.exec(`
        DROP TABLE IF EXISTS week_summaries;
        DROP TABLE IF EXISTS month_summaries;
      `);
    },
  },
  {
    id: 5,
    name: "remove_redundant_profile_id_from_sessions",
    up: (e) => {
      e.exec(`
        -- Create new table without profile_id
        CREATE TABLE activity_sessions_new (
          id TEXT PRIMARY KEY,
          date TEXT NOT NULL,
          block_start TEXT NOT NULL,
          block_end TEXT NOT NULL,
          session_json TEXT NOT NULL,
          generated_at TEXT NOT NULL,
          UNIQUE(date, block_start)
        );

        -- Copy data (excluding profile_id)
        INSERT INTO activity_sessions_new (id, date, block_start, block_end, session_json, generated_at)
        SELECT id, date, block_start, block_end, session_json, generated_at
        FROM activity_sessions;

        -- Drop old table and indexes
        DROP TABLE activity_sessions;

        -- Rename new table
        ALTER TABLE activity_sessions_new RENAME TO activity_sessions;

        -- Recreate indexes without profile_id
        CREATE INDEX idx_sessions_date ON activity_sessions(date);
        CREATE INDEX idx_sessions_block_start ON activity_sessions(block_start);
      `);
    },
  },
  {
    id: 6,
    name: "add_last_included_day_date_to_summaries",
    up: (e) => {
      e.exec(`
        ALTER TABLE summaries ADD COLUMN last_included_day_date TEXT;
      `);
    },
  },
  {
    id: 7,
    name: "add_session_verbatim_artifact_tables",
    up: (e) => {
      e.exec(`
        CREATE TABLE IF NOT EXISTS session_verbatim_artifact_runs (
          run_id TEXT PRIMARY KEY,
          session_id TEXT NOT NULL,
          logical_date TEXT NOT NULL,
          block_start TEXT NOT NULL,
          block_end TEXT NOT NULL,
          status TEXT NOT NULL,
          prompt_version TEXT NOT NULL,
          attempted_at TEXT NOT NULL,
          artifact_count INTEGER NOT NULL,
          source_ocr_digest TEXT NOT NULL,
          source_summary_digest TEXT NOT NULL,
          last_error_code TEXT NULL,
          UNIQUE(session_id, attempted_at)
        );

        CREATE TABLE IF NOT EXISTS session_verbatim_artifacts (
          id TEXT PRIMARY KEY,
          run_id TEXT NOT NULL REFERENCES session_verbatim_artifact_runs(run_id) ON DELETE CASCADE,
          ordinal INTEGER NOT NULL,
          kind TEXT NOT NULL,
          title TEXT NOT NULL,
          observed_at TEXT NOT NULL,
          source_window TEXT NOT NULL,
          verbatim_text TEXT NOT NULL,
          why_important TEXT NOT NULL,
          confidence REAL NOT NULL,
          created_at TEXT NOT NULL,
          UNIQUE(run_id, ordinal)
        );

        CREATE INDEX IF NOT EXISTS idx_session_verbatim_artifact_runs_logical_date_attempted_at
          ON session_verbatim_artifact_runs(logical_date, attempted_at);
      `);
    },
  },
  {
    id: 8,
    name: "drop_redundant_session_verbatim_artifact_indexes",
    up: (e) => {
      e.exec(`
        DROP INDEX IF EXISTS idx_session_verbatim_artifact_runs_session_attempted_at;
        DROP INDEX IF EXISTS idx_session_verbatim_artifacts_run_id;
      `);
    },
  },
];
function T(e) {
  try {
    e.exec(`
      CREATE TABLE IF NOT EXISTS migrations (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        executed_at INTEGER NOT NULL
      );
    `);
    const t = e.prepare("SELECT name FROM migrations").all(),
      i = new Set(t.map((a) => a.name));
    for (const a of o) {
      if (i.has(a.name)) continue;
      (n().info(`Running migration: ${a.name}`),
        e.transaction(() => {
          (a.up(e),
            e
              .prepare(
                "INSERT INTO migrations (id, name, executed_at) VALUES (?, ?, ?)",
              )
              .run(a.id, a.name, Date.now()));
        })(),
        n().info(`Migration completed: ${a.name}`));
    }
  } catch (t) {
    throw (n().error("Migration failed:", t), t);
  }
}
function E(e) {
  return Number.isFinite(e) && e >= 0 && e <= 1;
}
function d(e) {
  return Number.isInteger(e) && e >= 1;
}
function _(e, t) {
  if (!Number.isInteger(e.artifactCount) || e.artifactCount < 0)
    throw new Error(
      `Invalid artifact count for run ${e.runId}: ${e.artifactCount}`,
    );
  if (t.length !== e.artifactCount)
    throw new Error(
      `Artifact count mismatch for run ${e.runId}: expected ${e.artifactCount}, received ${t.length}`,
    );
  for (const i of t) {
    if (i.runId !== e.runId)
      throw new Error(
        `Artifact ${i.id} has runId ${i.runId}, expected ${e.runId}`,
      );
    if (!d(i.ordinal))
      throw new Error(`Artifact ${i.id} has invalid ordinal ${i.ordinal}`);
    if (!E(i.confidence))
      throw new Error(
        `Artifact ${i.id} has invalid confidence ${i.confidence}`,
      );
  }
}
const N = 5e3;
function m(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "id" in e &&
    "method" in e &&
    "args" in e &&
    typeof e.id == "string" &&
    typeof e.method == "string" &&
    Array.isArray(e.args)
  );
}
function c(e) {
  return (
    typeof e == "object" && e !== null && "type" in e && e.type === "shutdown"
  );
}
exports.DEFAULT_WORKER_TIMEOUT_MS = N;
exports.assertValidArtifactAttemptPayload = _;
exports.isShutdownMessage = c;
exports.isWorkerRequest = m;
exports.runMigrations = T;
