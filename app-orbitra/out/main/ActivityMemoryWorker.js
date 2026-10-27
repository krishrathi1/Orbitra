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
      (e._sentryDebugIds[t] = "3b81b428-624a-4adc-87da-bc2898ecf92f"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-3b81b428-624a-4adc-87da-bc2898ecf92f"));
  })();
} catch {}
const R = require("fs"),
  A = require("path"),
  F = require("better-sqlite3"),
  b = require("./chunks/worker-protocol-CcOBX8D2.js");
process.on("SIGINT", () => {});
let _ = null,
  T = !1;
const m = new Map();
function N(e) {
  if (!_) throw new Error("Worker not initialized: appDataPath not set");
  const t = `profile_${e}`;
  return A.join(_, "Partitions", t);
}
function u(e, t, ...n) {
  const s = `[${new Date().toISOString()}] [ActivityMemoryWorker] [${e.toUpperCase()}]`;
  n.length > 0 ? console[e](s, t, ...n) : console[e](s, t);
}
function f(e) {
  return typeof e == "object" && e !== null;
}
const D = { work: 0, learning: 0, entertainment: 0, life: 0, other: 1 };
function k(e) {
  if (!f(e)) return D;
  const { work: t, learning: n, entertainment: r, life: s, other: a } = e;
  return typeof t != "number" ||
    typeof n != "number" ||
    typeof r != "number" ||
    typeof s != "number" ||
    typeof a != "number"
    ? D
    : { work: t, learning: n, entertainment: r, life: s, other: a };
}
const x = {
  potentialTodos: [],
  tips: [],
  keyEntities: [],
  workPatterns: { continuousWorkTime: 0, taskSwitchingCount: 0 },
};
function $(e) {
  return (
    f(e) && typeof e.content == "string" && typeof e.description == "string"
  );
}
function h(e) {
  if (!f(e)) return x;
  const { potentialTodos: t, tips: n, keyEntities: r, workPatterns: s } = e,
    a = Array.isArray(t)
      ? t
          .filter($)
          .map((y) => ({ content: y.content, description: y.description }))
      : [],
    i = Array.isArray(n) ? n.filter((y) => typeof y == "string") : [],
    c = Array.isArray(r) ? r.filter((y) => typeof y == "string") : [];
  let p = 0,
    l = 0;
  return (
    f(s) &&
      (typeof s.continuousWorkTime == "number" && (p = s.continuousWorkTime),
      typeof s.taskSwitchingCount == "number" && (l = s.taskSwitchingCount)),
    {
      potentialTodos: a,
      tips: i,
      keyEntities: c,
      workPatterns: { continuousWorkTime: p, taskSwitchingCount: l },
    }
  );
}
function W(e) {
  return (
    f(e) && typeof e.timestamp == "number" && typeof e.thumbnail == "string"
  );
}
function j(e) {
  if (!Array.isArray(e)) return;
  const t = e
    .filter(W)
    .map((n) => ({ timestamp: n.timestamp, thumbnail: n.thumbnail }));
  return t.length > 0 ? t : void 0;
}
function P(e, t) {
  if (e) return Array.isArray(t) ? t.length : 0;
}
function S(e, t = {}) {
  try {
    const n = JSON.parse(e);
    if (!f(n)) return null;
    const r = n;
    return typeof r.id != "string" ||
      typeof r.startTime != "string" ||
      typeof r.endTime != "string" ||
      typeof r.title != "string" ||
      typeof r.description != "string" ||
      typeof r.eventCount != "number"
      ? null
      : {
          id: r.id,
          startTime: r.startTime,
          endTime: r.endTime,
          title: r.title,
          description: r.description,
          categoryDistribution: k(r.categoryDistribution),
          extractedInsights: h(r.extractedInsights),
          eventCount: r.eventCount,
          detailedActivityLog: Array.isArray(r.detailedActivityLog)
            ? r.detailedActivityLog.filter((a) => typeof a == "string")
            : void 0,
          importantQuotes: Array.isArray(r.importantQuotes)
            ? r.importantQuotes.filter((a) => typeof a == "string")
            : void 0,
          duration:
            r.duration === "15min" ||
            r.duration === "30min" ||
            r.duration === "60min"
              ? r.duration
              : void 0,
          factExtractionText:
            typeof r.factExtractionText == "string"
              ? r.factExtractionText
              : void 0,
          hasScreenshots:
            typeof r.hasScreenshots == "boolean" ? r.hasScreenshots : !1,
          thumbnails: t.excludeThumbnails ? void 0 : j(r.thumbnails),
          thumbnailCount: P(t.excludeThumbnails, r.thumbnails),
        };
  } catch {
    return null;
  }
}
function O(e) {
  const t = m.get(e);
  t && (t.close(), m.delete(e));
  const n = N(e),
    r = A.join(n, "activity-memory.db");
  R.mkdirSync(n, { recursive: !0 });
  const s = new F(r);
  (s.pragma("journal_mode = WAL"),
    s.pragma("synchronous = NORMAL"),
    s.pragma("foreign_keys = ON"),
    b.runMigrations(s),
    m.set(e, s),
    u("info", `Database initialized for profile ${e}`));
}
function v(e) {
  const t = m.get(e);
  t && (t.close(), m.delete(e), u("info", `Database closed for profile ${e}`));
}
function C() {
  const e = Array.from(m.keys());
  for (const t of e) v(t);
}
function d(e) {
  let t = m.get(e);
  if (!t && (O(e), (t = m.get(e)), !t))
    throw new Error(`Failed to initialize database for profile ${e}`);
  return t;
}
function E(e) {
  const t = e.getFullYear(),
    n = String(e.getMonth() + 1).padStart(2, "0"),
    r = String(e.getDate()).padStart(2, "0");
  return `${t}-${n}-${r}`;
}
function U(e, t, n = {}) {
  return d(e)
    .prepare(
      "SELECT session_json FROM activity_sessions WHERE date = ? ORDER BY block_start ASC",
    )
    .all(t)
    .map((a) => S(a.session_json, n))
    .filter((a) => a !== null);
}
function G(e, t, n, r = { excludeThumbnails: !0 }) {
  const a = d(e)
      .prepare(
        `SELECT session_json, date FROM activity_sessions
       WHERE date BETWEEN ? AND ?
       ORDER BY date ASC, block_start ASC`,
      )
      .all(t, n),
    i = {};
  for (const c of a) {
    const p = S(c.session_json, r);
    p && (i[c.date] || (i[c.date] = []), i[c.date].push(p));
  }
  return i;
}
function H(e, t, n) {
  const s = d(e)
      .prepare(
        `SELECT
        date,
        json_extract(session_json, '$.id') as id,
        json_extract(session_json, '$.startTime') as startTime,
        json_extract(session_json, '$.endTime') as endTime,
        json_extract(session_json, '$.title') as title,
        json_extract(session_json, '$.description') as description,
        json_extract(session_json, '$.categoryDistribution') as categoryDistributionJson,
        json_extract(session_json, '$.eventCount') as eventCount,
        json_extract(session_json, '$.extractedInsights') as extractedInsightsJson
      FROM activity_sessions
      WHERE date BETWEEN ? AND ?
      ORDER BY date ASC, block_start ASC`,
      )
      .all(t, n),
    a = {};
  for (const i of s)
    try {
      const c = i.categoryDistributionJson
          ? k(JSON.parse(i.categoryDistributionJson))
          : D,
        p = i.extractedInsightsJson
          ? h(JSON.parse(i.extractedInsightsJson)).keyEntities
          : void 0,
        l = {
          startTime: i.startTime,
          endTime: i.endTime,
          title: i.title,
          description: i.description,
          categoryDistribution: c,
          eventCount: i.eventCount,
          keyEntities: p,
        };
      (a[i.date] || (a[i.date] = []), a[i.date].push(l));
    } catch (c) {
      u(
        "warn",
        "[ActivityMemoryWorker] Skipping malformed session digest row",
        { date: i.date, error: c instanceof Error ? c.message : String(c) },
      );
    }
  return a;
}
function B(e, t) {
  const r = d(e)
    .prepare("SELECT session_json FROM activity_sessions WHERE id = ? LIMIT 1")
    .get(t);
  return r ? S(r.session_json) : null;
}
function Y(e, t) {
  const n = d(e),
    r = new Date(t.startTime),
    a = r.getHours() < 4 ? new Date(r.getTime() - 1440 * 60 * 1e3) : r,
    i = E(a);
  try {
    return (
      n.transaction(() => {
        n.prepare(
          `INSERT OR REPLACE INTO activity_sessions
         (id, date, block_start, block_end, session_json, generated_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
        ).run(
          t.id,
          i,
          t.startTime,
          t.endTime,
          JSON.stringify(t),
          new Date().toISOString(),
        );
      })(),
      { success: !0 }
    );
  } catch (c) {
    const p = c instanceof Error ? c.message : String(c),
      l = c instanceof Error ? c.stack : void 0;
    return { success: !1, error: { message: p, stack: l } };
  }
}
function J(e, t, n) {
  const r = d(e);
  try {
    b.assertValidArtifactAttemptPayload(t, n);
    const s = r.prepare(`INSERT INTO session_verbatim_artifact_runs
       (run_id, session_id, logical_date, block_start, block_end, status, prompt_version,
        attempted_at, artifact_count, source_ocr_digest, source_summary_digest, last_error_code)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`),
      a = r.prepare(`INSERT INTO session_verbatim_artifacts
       (id, run_id, ordinal, kind, title, observed_at, source_window,
        verbatim_text, why_important, confidence, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
    return (
      r.transaction(() => {
        s.run(
          t.runId,
          t.sessionId,
          t.logicalDate,
          t.blockStart,
          t.blockEnd,
          t.status,
          t.promptVersion,
          t.attemptedAt,
          t.artifactCount,
          t.sourceOcrDigest,
          t.sourceSummaryDigest,
          t.lastErrorCode ?? null,
        );
        for (const c of n)
          a.run(
            c.id,
            t.runId,
            c.ordinal,
            c.kind,
            c.title,
            c.observedAt,
            c.sourceWindow,
            c.verbatimText,
            c.whyImportant,
            c.confidence,
            c.createdAt,
          );
      })(),
      { success: !0 }
    );
  } catch (s) {
    const a = s instanceof Error ? s.message : String(s),
      i = s instanceof Error ? s.stack : void 0;
    return { success: !1, error: { message: a, stack: i } };
  }
}
function V(e, t) {
  const r = d(e)
    .prepare(
      `SELECT run_id, session_id, logical_date, block_start, block_end, status, prompt_version,
              attempted_at, artifact_count, source_ocr_digest, source_summary_digest, last_error_code
       FROM session_verbatim_artifact_runs
       WHERE session_id = ? AND status = 'generated'
       ORDER BY attempted_at DESC
       LIMIT 1`,
    )
    .get(t);
  return r
    ? {
        runId: r.run_id,
        sessionId: r.session_id,
        logicalDate: r.logical_date,
        blockStart: r.block_start,
        blockEnd: r.block_end,
        status: r.status,
        promptVersion: r.prompt_version,
        attemptedAt: r.attempted_at,
        artifactCount: r.artifact_count,
        sourceOcrDigest: r.source_ocr_digest,
        sourceSummaryDigest: r.source_summary_digest,
        ...(r.last_error_code ? { lastErrorCode: r.last_error_code } : {}),
      }
    : null;
}
function q(e, t) {
  return d(e)
    .prepare(
      `SELECT id, run_id, ordinal, kind, title, observed_at, source_window,
              verbatim_text, why_important, confidence, created_at
       FROM session_verbatim_artifacts
       WHERE run_id = ?
       ORDER BY ordinal ASC`,
    )
    .all(t)
    .map((s) => ({
      id: s.id,
      runId: s.run_id,
      ordinal: s.ordinal,
      kind: s.kind,
      title: s.title,
      observedAt: s.observed_at,
      sourceWindow: s.source_window,
      verbatimText: s.verbatim_text,
      whyImportant: s.why_important,
      confidence: s.confidence,
      createdAt: s.created_at,
    }));
}
function z(e, t) {
  const n = d(e);
  return n.transaction(() => {
    const s = n
      .prepare(
        `SELECT DISTINCT session_id
         FROM session_verbatim_artifact_runs
         WHERE logical_date < ?
         ORDER BY session_id ASC`,
      )
      .all(t);
    return (
      n
        .prepare(
          "DELETE FROM session_verbatim_artifact_runs WHERE logical_date < ?",
        )
        .run(t),
      s.map((a) => a.session_id)
    );
  })();
}
function Q(e, t) {
  return d(e)
    .prepare("DELETE FROM session_verbatim_artifact_runs WHERE session_id = ?")
    .run(t).changes;
}
function K(e, t, n) {
  return d(e)
    .prepare(
      `SELECT DISTINCT date FROM day_task_memories
       WHERE date >= ? AND date <= ?
       ORDER BY date DESC`,
    )
    .all(t, n)
    .map((a) => a.date);
}
function X(e) {
  return (
    d(e).prepare("SELECT MIN(date) as oldest_date FROM activity_sessions").get()
      ?.oldest_date ?? null
  );
}
function Z(e) {
  return d(e)
    .prepare("SELECT DISTINCT date FROM activity_sessions ORDER BY date DESC")
    .all()
    .map((r) => r.date);
}
function ee(e) {
  const t = d(e),
    n = { day: [], week: [], month: [] },
    r = t
      .prepare(
        `SELECT type, period FROM summaries
       WHERE type IN ('day', 'week', 'month')
       ORDER BY type ASC, period DESC`,
      )
      .all();
  for (const s of r) n[s.type].push(s.period);
  return n;
}
function te(e) {
  return d(e)
    .prepare("SELECT date FROM day_task_memories ORDER BY date DESC")
    .all()
    .map((r) => r.date);
}
function re(e) {
  const t = d(e);
  try {
    const n = t
        .prepare("SELECT COUNT(*) as count FROM day_task_memories")
        .get(),
      r = t
        .prepare("SELECT date FROM day_task_memories ORDER BY date ASC LIMIT 1")
        .get(),
      s = t
        .prepare(
          "SELECT date FROM day_task_memories ORDER BY date DESC LIMIT 1",
        )
        .get(),
      a = t.name;
    let i = 0;
    try {
      i = R.statSync(a).size;
    } catch {}
    return {
      totalDays: n.count,
      oldestDate: r?.date ?? null,
      newestDate: s?.date ?? null,
      dbSizeBytes: i,
    };
  } catch {
    return null;
  }
}
function ne(e, t, n) {
  return d(e)
    .prepare(
      `SELECT session_json FROM activity_sessions
       WHERE block_start >= ? AND block_start < ?
       ORDER BY block_start ASC`,
    )
    .all(t, n)
    .map((a) => S(a.session_json))
    .filter((a) => a !== null);
}
function se(e, t) {
  return (
    d(e)
      .prepare("SELECT 1 FROM activity_sessions WHERE block_start = ? LIMIT 1")
      .get(t) !== void 0
  );
}
function oe(e, t) {
  return d(e).prepare("DELETE FROM activity_sessions WHERE date = ?").run(t)
    .changes;
}
function ae(e, t) {
  return d(e)
    .prepare(
      "SELECT block_start FROM activity_sessions WHERE date = ? ORDER BY block_start ASC",
    )
    .all(t)
    .map((s) => s.block_start);
}
function ie(e, t, n) {
  d(e)
    .prepare(
      "INSERT OR REPLACE INTO summaries (type, period, summary, generated_at) VALUES ('day', ?, ?, ?)",
    )
    .run(t, n, Date.now());
}
function ce(e, t) {
  const r = d(e)
    .prepare(
      "SELECT summary, generated_at FROM summaries WHERE type = ? AND period = ?",
    )
    .get("day", t);
  if (r) return { summary: r.summary, generatedAt: r.generated_at };
}
function de(e, t, n, r) {
  d(e)
    .prepare(
      "INSERT OR REPLACE INTO summaries (type, period, summary, generated_at, last_included_day_date) VALUES ('week', ?, ?, ?, ?)",
    )
    .run(t, n, Date.now(), r ?? null);
}
function ue(e, t) {
  const r = d(e)
    .prepare(
      "SELECT summary, generated_at, last_included_day_date FROM summaries WHERE type = ? AND period = ?",
    )
    .get("week", t);
  if (r)
    return {
      summary: r.summary,
      generatedAt: r.generated_at,
      ...(r.last_included_day_date
        ? { lastIncludedDayDate: r.last_included_day_date }
        : {}),
    };
}
function pe(e, t) {
  const n = d(e),
    [r, s] = t.split("-").map(Number),
    a = new Date(r, s - 1, 1),
    i = a.getDay(),
    c = a.getDate() - i + (i === 0 ? -6 : 1),
    p = new Date(a);
  p.setDate(c);
  const l = new Date(r, s, 0),
    y = l.getDay(),
    L = l.getDate() - y + (y === 0 ? -6 : 1),
    g = new Date(l);
  return (
    g.setDate(L),
    n
      .prepare(
        `SELECT period, summary FROM summaries
       WHERE type = 'week' AND period >= ? AND period <= ?
       ORDER BY period ASC`,
      )
      .all(E(p), E(g))
      .map((I) => ({ weekStart: I.period, summary: I.summary }))
  );
}
function le(e, t, n, r) {
  d(e)
    .prepare(
      "INSERT OR REPLACE INTO summaries (type, period, summary, generated_at, last_included_day_date) VALUES ('month', ?, ?, ?, ?)",
    )
    .run(t, n, Date.now(), r ?? null);
}
function fe(e, t) {
  const r = d(e)
    .prepare(
      "SELECT summary, generated_at, last_included_day_date FROM summaries WHERE type = ? AND period = ?",
    )
    .get("month", t);
  if (r)
    return {
      summary: r.summary,
      generatedAt: r.generated_at,
      ...(r.last_included_day_date
        ? { lastIncludedDayDate: r.last_included_day_date }
        : {}),
    };
}
function ye(e, t) {
  return (
    d(e).prepare("DELETE FROM day_task_memories WHERE date = ?").run(t)
      .changes > 0
  );
}
function me(e) {
  return d(e).prepare("DELETE FROM day_task_memories").run().changes;
}
function M(e) {
  const t = new Date(e);
  return (t.getHours() < 4 && t.setDate(t.getDate() - 1), E(t));
}
function Ee() {
  return M(Date.now());
}
function be(e, t) {
  if (!f(e))
    throw new Error(`${t}: dayMemory must be an object, got ${typeof e}`);
  if (typeof e.createdAt != "number" || typeof e.lastUpdated != "number")
    throw new Error(
      `${t}: dayMemory must have createdAt and lastUpdated number properties`,
    );
  if (!f(e.eventTimeline))
    throw new Error(`${t}: dayMemory must have eventTimeline object property`);
  return e;
}
function _e(e, t) {
  const n = d(e),
    r = M(t.createdAt);
  try {
    const s = JSON.stringify(t),
      a = t.daySummary;
    return (
      n.transaction(() => {
        (n
          .prepare(
            "INSERT OR REPLACE INTO day_task_memories (date, created_at, updated_at, data) VALUES (?, ?, ?, ?)",
          )
          .run(r, t.createdAt, t.lastUpdated, s),
          a &&
            n
              .prepare(
                "INSERT OR REPLACE INTO summaries (type, period, summary, generated_at) VALUES ('day', ?, ?, ?)",
              )
              .run(r, a, Date.now()));
      })(),
      u("info", `Saved day activity memory for date ${r}`),
      { success: !0 }
    );
  } catch (s) {
    const a = s instanceof Error ? s.message : String(s),
      i = s instanceof Error ? s.stack : void 0;
    return (
      u("error", `Failed to save day activity memory: ${a}`),
      { success: !1, error: { message: a, stack: i } }
    );
  }
}
function Se(e) {
  const t = d(e),
    n = Ee();
  try {
    const r = t
      .prepare("SELECT data FROM day_task_memories WHERE date = ?")
      .get(n);
    if (!r) return { success: !1 };
    const s = JSON.parse(r.data);
    if (!f(s))
      return {
        success: !1,
        error: { message: "Invalid day memory JSON structure" },
      };
    const a = {
      createdAt:
        typeof s.createdAt == "number"
          ? s.createdAt
          : new Date(s.createdAt).getTime(),
      lastUpdated:
        typeof s.lastUpdated == "number"
          ? s.lastUpdated
          : new Date(s.lastUpdated).getTime(),
      eventTimeline: s.eventTimeline,
      daySummary: typeof s.daySummary == "string" ? s.daySummary : void 0,
      summaryGeneratedAt:
        typeof s.summaryGeneratedAt == "number" ? s.summaryGeneratedAt : void 0,
      lastIncludedSessionTimestamp:
        typeof s.lastIncludedSessionTimestamp == "number"
          ? s.lastIncludedSessionTimestamp
          : void 0,
    };
    return (
      u("info", `Recovered day activity memory for date ${n}`),
      { success: !0, data: a }
    );
  } catch (r) {
    const s = r instanceof Error ? r.message : String(r),
      a = r instanceof Error ? r.stack : void 0;
    return (
      u("error", `Failed to recover day activity memory: ${s}`),
      { success: !1, error: { message: s, stack: a } }
    );
  }
}
function De(e, t) {
  const n = d(e);
  try {
    const r = n
      .prepare("SELECT data FROM day_task_memories WHERE date = ?")
      .get(t);
    if (!r) return;
    const s = JSON.parse(r.data);
    return f(s)
      ? {
          createdAt:
            typeof s.createdAt == "number"
              ? s.createdAt
              : new Date(s.createdAt).getTime(),
          lastUpdated:
            typeof s.lastUpdated == "number"
              ? s.lastUpdated
              : new Date(s.lastUpdated).getTime(),
          eventTimeline: s.eventTimeline,
          daySummary: typeof s.daySummary == "string" ? s.daySummary : void 0,
          summaryGeneratedAt:
            typeof s.summaryGeneratedAt == "number"
              ? s.summaryGeneratedAt
              : void 0,
          lastIncludedSessionTimestamp:
            typeof s.lastIncludedSessionTimestamp == "number"
              ? s.lastIncludedSessionTimestamp
              : void 0,
        }
      : void 0;
  } catch (r) {
    u(
      "error",
      `Failed to get day activity memory for ${t}: ${r instanceof Error ? r.message : String(r)}`,
    );
    return;
  }
}
function ge(e, t = 30) {
  const n = d(e),
    r = { deletedEventDays: 0, extractedSummaries: 0, parseFailures: 0 };
  try {
    const s = new Date();
    s.setDate(s.getDate() - t);
    const a = E(s),
      i = n
        .prepare("SELECT date, data FROM day_task_memories WHERE date < ?")
        .all(a);
    for (const p of i)
      try {
        const l = JSON.parse(p.data);
        f(l) &&
          typeof l.daySummary == "string" &&
          l.daySummary.length > 0 &&
          (n
            .prepare(
              "INSERT OR IGNORE INTO summaries (type, period, summary, generated_at) VALUES ('day', ?, ?, ?)",
            )
            .run(p.date, l.daySummary, Date.now()),
          (r.extractedSummaries = (r.extractedSummaries ?? 0) + 1));
      } catch {
        r.parseFailures = (r.parseFailures ?? 0) + 1;
      }
    const c = n.prepare("DELETE FROM day_task_memories WHERE date < ?").run(a);
    return (
      (r.deletedEventDays = c.changes),
      u(
        "info",
        `Cleanup complete: deleted ${r.deletedEventDays} days, extracted ${r.extractedSummaries} summaries`,
      ),
      r
    );
  } catch (s) {
    const a = s instanceof Error ? s.message : String(s),
      i = s instanceof Error ? s.stack : void 0;
    return (
      u("error", `Failed to cleanup old memories: ${a}`),
      { ...r, error: { message: a, stack: i } }
    );
  }
}
function o(e, t, n) {
  if (typeof e != "string" || e.length === 0)
    throw new Error(`${n}: ${t} must be a non-empty string, got ${typeof e}`);
  return e;
}
function w(e, t) {
  if (e == null) return;
  if (typeof e != "object")
    throw new Error(
      `${t}: options must be an object or undefined, got ${typeof e}`,
    );
  const n = e;
  if (n.excludeThumbnails !== void 0 && typeof n.excludeThumbnails != "boolean")
    throw new Error(
      `${t}: options.excludeThumbnails must be a boolean, got ${typeof n.excludeThumbnails}`,
    );
  return { excludeThumbnails: n.excludeThumbnails };
}
function Ie(e, t) {
  if (!f(e))
    throw new Error(`${t}: session must be an object, got ${typeof e}`);
  if (typeof e.id != "string" || typeof e.startTime != "string")
    throw new Error(
      `${t}: session must have id and startTime string properties`,
    );
  return e;
}
function Te(e, t) {
  if (!f(e)) throw new Error(`${t}: run must be an object, got ${typeof e}`);
  if (
    typeof e.runId != "string" ||
    typeof e.sessionId != "string" ||
    typeof e.logicalDate != "string" ||
    typeof e.blockStart != "string" ||
    typeof e.blockEnd != "string" ||
    !Re(e.status) ||
    e.promptVersion !== "v1" ||
    typeof e.attemptedAt != "string" ||
    typeof e.artifactCount != "number" ||
    typeof e.sourceOcrDigest != "string" ||
    typeof e.sourceSummaryDigest != "string"
  )
    throw new Error(
      `${t}: run is missing required SessionVerbatimArtifactRun properties`,
    );
  return {
    runId: e.runId,
    sessionId: e.sessionId,
    logicalDate: e.logicalDate,
    blockStart: e.blockStart,
    blockEnd: e.blockEnd,
    status: e.status,
    promptVersion: e.promptVersion,
    attemptedAt: e.attemptedAt,
    artifactCount: e.artifactCount,
    sourceOcrDigest: e.sourceOcrDigest,
    sourceSummaryDigest: e.sourceSummaryDigest,
    ...(typeof e.lastErrorCode == "string"
      ? { lastErrorCode: e.lastErrorCode }
      : {}),
  };
}
function we(e, t) {
  if (!Array.isArray(e))
    throw new Error(`${t}: artifacts must be an array, got ${typeof e}`);
  return e.map((n, r) => {
    if (!f(n))
      throw new Error(`${t}: artifact at index ${r} must be an object`);
    if (
      typeof n.id != "string" ||
      typeof n.runId != "string" ||
      typeof n.ordinal != "number" ||
      !Ae(n.kind) ||
      typeof n.title != "string" ||
      typeof n.observedAt != "string" ||
      typeof n.sourceWindow != "string" ||
      typeof n.verbatimText != "string" ||
      typeof n.whyImportant != "string" ||
      typeof n.confidence != "number" ||
      typeof n.createdAt != "string"
    )
      throw new Error(
        `${t}: artifact at index ${r} is missing required properties`,
      );
    return {
      id: n.id,
      runId: n.runId,
      ordinal: n.ordinal,
      kind: n.kind,
      title: n.title,
      observedAt: n.observedAt,
      sourceWindow: n.sourceWindow,
      verbatimText: n.verbatimText,
      whyImportant: n.whyImportant,
      confidence: n.confidence,
      createdAt: n.createdAt,
    };
  });
}
function Re(e) {
  return e === "generated" || e === "none" || e === "failed";
}
function Ae(e) {
  return (
    e === "email" ||
    e === "slack" ||
    e === "sms" ||
    e === "chat" ||
    e === "notification" ||
    e === "prompt" ||
    e === "ui_text" ||
    e === "other"
  );
}
async function ke(e, t) {
  switch (e) {
    case "initialize": {
      const n = o(t[0], "profileId", e);
      O(n);
      return;
    }
    case "closeProfileDatabase": {
      const n = o(t[0], "profileId", e);
      v(n);
      return;
    }
    case "cleanup":
      C();
      return;
    case "getSessionsForDay": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "date", e),
        s = w(t[2], e);
      return U(n, r, s);
    }
    case "getSessionsForDateRange": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "startDate", e),
        s = o(t[2], "endDate", e),
        a = w(t[3], e);
      return G(n, r, s, a);
    }
    case "getSessionDigestsForDateRange": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "startDate", e),
        s = o(t[2], "endDate", e);
      return H(n, r, s);
    }
    case "getSessionById": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "sessionId", e);
      return B(n, r);
    }
    case "saveSession": {
      const n = o(t[0], "profileId", e),
        r = Ie(t[1], e);
      return Y(n, r);
    }
    case "saveArtifactAttempt": {
      const n = o(t[0], "profileId", e),
        r = Te(t[1], e),
        s = we(t[2], e);
      return J(n, r, s);
    }
    case "getLatestSuccessfulArtifactRunForSession": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "sessionId", e);
      return V(n, r);
    }
    case "getArtifactsForRun": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "runId", e);
      return q(n, r);
    }
    case "deleteArtifactsOlderThan": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "cutoffLogicalDate", e);
      return z(n, r);
    }
    case "deleteArtifactsForSession": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "sessionId", e);
      return Q(n, r);
    }
    case "getDayDatesInRange": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "fromDate", e),
        s = o(t[2], "toDate", e);
      return K(n, r, s);
    }
    case "getOldestSessionDate": {
      const n = o(t[0], "profileId", e);
      return X(n);
    }
    case "getSessionDates": {
      const n = o(t[0], "profileId", e);
      return Z(n);
    }
    case "getSummaryPeriods": {
      const n = o(t[0], "profileId", e);
      return ee(n);
    }
    case "getAllDayDates": {
      const n = o(t[0], "profileId", e);
      return te(n);
    }
    case "getStats": {
      const n = o(t[0], "profileId", e);
      return re(n);
    }
    case "getSessionsForTimeRange": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "startIso", e),
        s = o(t[2], "endIso", e);
      return ne(n, r, s);
    }
    case "hasSessionForBlock": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "blockStartIso", e);
      return se(n, r);
    }
    case "deleteSessionsForDay": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "date", e);
      return oe(n, r);
    }
    case "getProcessedBlocksForDay": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "date", e);
      return ae(n, r);
    }
    case "saveDaySummary": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "date", e),
        s = o(t[2], "summary", e);
      ie(n, r, s);
      return;
    }
    case "getDaySummary": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "date", e);
      return ce(n, r);
    }
    case "saveWeekSummary": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "weekStart", e),
        s = o(t[2], "summary", e),
        a = typeof t[3] == "string" ? t[3] : void 0;
      de(n, r, s, a);
      return;
    }
    case "getWeekSummary": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "weekStart", e);
      return ue(n, r);
    }
    case "getWeekSummariesForMonth": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "month", e);
      return pe(n, r);
    }
    case "saveMonthSummary": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "month", e),
        s = o(t[2], "summary", e),
        a = typeof t[3] == "string" ? t[3] : void 0;
      le(n, r, s, a);
      return;
    }
    case "getMonthSummary": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "month", e);
      return fe(n, r);
    }
    case "saveDayActivityMemory": {
      const n = o(t[0], "profileId", e),
        r = be(t[1], e);
      return _e(n, r);
    }
    case "recoverDayActivityMemory": {
      const n = o(t[0], "profileId", e);
      return Se(n);
    }
    case "getDayActivityMemory": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "date", e);
      return De(n, r);
    }
    case "cleanupOldMemories": {
      const n = o(t[0], "profileId", e),
        r = typeof t[1] == "number" ? t[1] : void 0;
      return ge(n, r);
    }
    case "deleteDayMemory": {
      const n = o(t[0], "profileId", e),
        r = o(t[1], "date", e);
      return ye(n, r);
    }
    case "deleteAllDayMemories": {
      const n = o(t[0], "profileId", e);
      return me(n);
    }
    default:
      throw new Error(`Unknown worker method: ${e}`);
  }
}
async function he(e) {
  if (b.isShutdownMessage(e)) {
    (u("info", "Received shutdown signal, closing databases..."), C());
    const t = { type: "ready" };
    (process.parentPort?.postMessage(t),
      u("info", "Shutdown complete, exiting"),
      process.exit(0));
    return;
  }
  if (b.isWorkerRequest(e)) {
    const t = e;
    let n;
    try {
      const r = await ke(t.method, t.args);
      n = { id: t.id, success: !0, result: r };
    } catch (r) {
      const s = r instanceof Error ? r : new Error(String(r));
      ((n = {
        id: t.id,
        success: !1,
        error: {
          message: s.message,
          stack: s.stack,
          code: "code" in s ? String(s.code) : void 0,
        },
      }),
        u("error", `Method ${t.method} failed:`, s.message));
    }
    process.parentPort?.postMessage(n);
    return;
  }
  if (f(e) && e.type === "init") {
    ((_ = e.appDataPath),
      (T = e.isDev),
      u("info", `Worker initialized with appDataPath: ${_}, isDev: ${T}`));
    const t = { type: "ready" };
    process.parentPort?.postMessage(t);
    return;
  }
  u("warn", "Unknown message received:", e);
}
process.parentPort
  ? (u("info", "ActivityMemoryWorker starting..."),
    process.parentPort.on("message", (e) => {
      he(e.data);
    }),
    process.on("uncaughtException", (e) => {
      u("error", "Uncaught exception:", e.message, e.stack);
      const t = {
        type: "error",
        error: { message: e.message, stack: e.stack },
      };
      process.parentPort?.postMessage(t);
    }),
    process.on("unhandledRejection", (e) => {
      const t = e instanceof Error ? e.message : String(e),
        n = e instanceof Error ? e.stack : void 0;
      u("error", "Unhandled rejection:", t);
      const r = { type: "error", error: { message: t, stack: n } };
      process.parentPort?.postMessage(r);
    }),
    u("info", "ActivityMemoryWorker ready, waiting for init message..."))
  : (console.error(
      "[ActivityMemoryWorker] No parentPort available - not running as utilityProcess",
    ),
    process.exit(1));
