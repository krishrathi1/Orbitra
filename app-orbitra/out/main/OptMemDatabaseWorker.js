"use strict";
(function () {
  try {
    var o =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    o.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var o =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new o.Error().stack;
    e &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[e] = "1c1b82e2-460e-4339-a983-9cb62981275c"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-1c1b82e2-460e-4339-a983-9cb62981275c"));
  })();
} catch {}
const W = require("node:worker_threads"),
  ce = require("valibot"),
  ne = require("./chunks/sqliteErrorCode-BHE49al-.js"),
  de = require("fs/promises"),
  w = require("node:timers/promises"),
  ue = require("path"),
  le = require("better-sqlite3"),
  A = require("./chunks/relevance-tmTWjdK0.js"),
  T = require("./chunks/contracts-rChhtF3C.js"),
  k = require("./chunks/replica-files-CUHDGfIt.js"),
  D = require("./chunks/embedding-Dugvo4EV.js"),
  G = require("./chunks/format-DF0x_pJ9.js");
require("node:crypto");
require("tokenx");
require("node:fs/promises");
require("node:path");
function _e(o) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (o) {
    for (const t in o)
      if (t !== "default") {
        const n = Object.getOwnPropertyDescriptor(o, t);
        Object.defineProperty(
          e,
          t,
          n.get ? n : { enumerable: !0, get: () => o[t] },
        );
      }
  }
  return ((e.default = o), Object.freeze(e));
}
const O = _e(ce);
function M(o) {
  return `${o.lo}:${o.hi}`;
}
function pe(o) {
  return Array.from({ length: o }, (e, t) => ({ lo: t, hi: t + 1 }));
}
function J(o, e) {
  let t = 1;
  for (; t < o; ) t *= 2;
  const n = [],
    s = [{ lo: 0, hi: t }];
  for (; s.length > 0; ) {
    const i = s.pop();
    if (!i || i.lo >= o) continue;
    const a = i.hi - i.lo;
    if (a > 1 && (i.hi > o || a > e * (o - i.lo))) {
      const c = (i.lo + i.hi) / 2;
      s.push({ lo: c, hi: i.hi }, { lo: i.lo, hi: c });
      continue;
    }
    n.push(i);
  }
  return n.sort((i, a) => i.lo - a.lo);
}
function me(o, e) {
  if (o === 0) return [];
  if (o <= e) return pe(o);
  let t = 0,
    n = 1;
  for (let i = 0; i < 60; i += 1) {
    const a = (t + n) / 2;
    J(o, a).length > e ? (t = a) : (n = a);
  }
  const s = J(o, n);
  for (; s.length < e; ) {
    let i = -1;
    for (let u = s.length - 1; u >= 0; u -= 1) {
      const d = s[u];
      if (d && d.hi - d.lo > 1) {
        i = u;
        break;
      }
    }
    if (i === -1) break;
    const a = s[i];
    if (!a) break;
    const c = (a.lo + a.hi) / 2;
    s.splice(i, 1, { lo: a.lo, hi: c }, { lo: c, hi: a.hi });
  }
  return s;
}
function K(o) {
  if (!Number.isSafeInteger(o.observationCount) || o.observationCount < 0)
    throw new Error(
      "OptMem observation count must be a non-negative safe integer",
    );
  const e = new Map();
  for (const s of o.nodes) {
    const i = T.parseInternalOptMemRange(s.range, !0),
      a = i.hi - i.lo,
      c = a === 1 ? "observation" : "summary",
      u =
        a === 1
          ? T.OPTMEM_OBSERVATION_TOKEN_LIMIT
          : T.OPTMEM_SUMMARY_TOKEN_LIMIT;
    if (
      s.id.length === 0 ||
      s.kind !== c ||
      i.hi > o.observationCount ||
      !Number.isSafeInteger(s.tokenCount) ||
      s.tokenCount < 1 ||
      s.tokenCount > u ||
      (s.promptTokenCount !== void 0 &&
        (!Number.isSafeInteger(s.promptTokenCount) ||
          s.promptTokenCount < 1 ||
          s.promptTokenCount > s.tokenCount))
    )
      throw new Error("Invalid OptMem cover node");
    const d = M(i);
    if (e.has(d)) throw new Error("Duplicate OptMem cover range");
    e.set(d, s);
  }
  const t = new Set();
  for (const s of o.absentSummaries) {
    const i = T.parseInternalOptMemRange(s, !1);
    if (i.hi > o.observationCount)
      throw new Error(
        "Missing OptMem summary cannot extend beyond the observation count",
      );
    const a = M(i);
    if (e.has(a) || t.has(a))
      throw new Error("Duplicate OptMem summary availability");
    t.add(a);
  }
  const n = new Set();
  for (const s of o.unavailableSummaries ?? []) {
    const i = T.parseInternalOptMemRange(s, !1),
      a = M(i);
    if (!t.has(a) || n.has(a))
      throw new Error(
        "Unavailable OptMem summary must have one matching absent summary",
      );
    n.add(a);
  }
  return {
    observationCount: o.observationCount,
    nodes: e,
    absentSummaries: t,
    unavailableSummaries: n,
    lines: o.lines ?? "plain",
  };
}
function P(o, e, t) {
  return G.estimateOptMemNodePromptTokens(e, t, o.lines);
}
function B(o, e, t) {
  const n = o.nodes.get(M(e));
  if (n) {
    const d = Math.min(n.tokenCount, t);
    return {
      kind: "ready",
      nodes: [d === n.tokenCount ? n : { ...n, promptTokenCount: d }],
      cost: P(o, e, d),
      blocksParentCompaction: !1,
    };
  }
  if (!o.absentSummaries.has(M(e)))
    return {
      kind: "pending",
      cost: P(o, e, 1),
      loadRequests: [e],
      missingSummaries: [],
      blocksParentCompaction: !1,
    };
  const s = (e.lo + e.hi) / 2,
    i = [B(o, { lo: e.lo, hi: s }, t), B(o, { lo: s, hi: e.hi }, t)],
    a = i.flatMap((d) => (d.kind === "pending" ? d.loadRequests : [])),
    c = i.flatMap((d) => (d.kind === "pending" ? d.missingSummaries : [])),
    u =
      o.unavailableSummaries.has(M(e)) ||
      i.some((d) => d.blocksParentCompaction);
  if (u) {
    const d = i.reduce((_, l) => _ + l.cost, 0);
    return a.length > 0 || c.length > 0
      ? {
          kind: "pending",
          cost: d,
          loadRequests: a,
          missingSummaries: c,
          blocksParentCompaction: u,
        }
      : {
          kind: "ready",
          nodes: i.flatMap((_) => (_.kind === "ready" ? _.nodes : [])),
          cost: d,
          blocksParentCompaction: u,
        };
  }
  return {
    kind: "pending",
    cost: P(o, e, t),
    loadRequests: a,
    missingSummaries: a.length === 0 && c.length === 0 ? [e] : c,
    blocksParentCompaction: u,
  };
}
function ie(o, e, t) {
  const n = me(o.observationCount, e).map((s) => B(o, s, t));
  return { nodes: n, tokenCount: n.reduce((s, i) => s + i.cost, 0) };
}
function x(o, e, t) {
  if (o.observationCount === 0) return { nodes: [], tokenCount: 0 };
  let n = 1,
    s = Math.min(o.observationCount, Math.max(1, e)),
    i;
  for (; n <= s; ) {
    const a = Math.floor((n + s) / 2),
      c = ie(o, a, t);
    c.tokenCount <= e ? ((i = c), (n = a + 1)) : (s = a - 1);
  }
  if (!i)
    throw new Error(
      "OptMem scope cannot fit a gapless cover within its token budget",
    );
  return i;
}
function I(o, e) {
  return o.observationCount === 0 ? 0 : ie(o, 1, e).tokenCount;
}
function Y(o, e, t) {
  if (o.unavailableSummaries.size + e.unavailableSummaries.size === 0)
    return !1;
  const n = (s) => ({ ...s, unavailableSummaries: new Set() });
  return I(n(o), 1) + I(n(e), 1) <= t;
}
function z(o, e) {
  return e.nodes.flatMap((t) =>
    t.kind === "pending"
      ? t.loadRequests.map((n) => ({ scope: o, range: n }))
      : [],
  );
}
function V(o, e) {
  return e.nodes.flatMap((t) =>
    t.kind === "pending"
      ? t.missingSummaries.map((n) => ({ scope: o, range: n }))
      : [],
  );
}
function Z(o) {
  return o.nodes.flatMap((e) => (e.kind === "ready" ? e.nodes : []));
}
function he(o) {
  const e = o.tokenBudget;
  if (!Number.isSafeInteger(e) || e < 1)
    throw new Error(
      "OptMem prompt token budget must be a positive safe integer",
    );
  const t = G.estimateOptMemFixedPromptTokens(),
    n = e - t;
  if (n < 0)
    throw new Error("OptMem prompt token budget cannot fit its fixed section");
  const s = K(o.profile),
    i = K(o.companion);
  let a = Math.max(
    T.OPTMEM_OBSERVATION_TOKEN_LIMIT,
    T.OPTMEM_SUMMARY_TOKEN_LIMIT,
  );
  if (I(s, a) + I(i, a) > n) {
    let v = 1,
      N = a,
      y = 0;
    for (; v <= N; ) {
      const L = Math.floor((v + N) / 2);
      I(s, L) + I(i, L) <= n ? ((y = L), (v = L + 1)) : (N = L - 1);
    }
    if (y === 0) {
      if (Y(s, i, n)) return { kind: "unavailable" };
      throw new Error(
        "OptMem scopes cannot fit gapless covers within the prompt token budget",
      );
    }
    a = y;
  }
  const c = I(s, a),
    u = I(i, a);
  if (c + u > n) {
    if (Y(s, i, n)) return { kind: "unavailable" };
    throw new Error(
      "OptMem scopes cannot fit gapless covers within the prompt token budget",
    );
  }
  let d = Math.floor(n / 2),
    _ = n - d;
  (d < c && ((d = c), (_ = n - d)), _ < u && ((_ = u), (d = n - _)));
  const l = x(s, d, a),
    m = x(i, _, a),
    p = n - l.tokenCount - m.tokenCount,
    r = x(s, l.tokenCount + p, a),
    f = n - r.tokenCount - m.tokenCount,
    E = x(i, m.tokenCount + f, a),
    h = [...z("profile", r), ...z("companion", E)];
  if (h.length > 0) return { kind: "needs-load", nodes: h };
  const g = [...V("profile", r), ...V("companion", E)];
  return g.length > 0
    ? { kind: "needs-compaction", missingSummaries: g }
    : {
        kind: "ready",
        profile: Z(r),
        companion: Z(E),
        tokenCount: t + r.tokenCount + E.tokenCount,
      };
}
const re = 1,
  Ee = [
    {
      version: 1,
      up(o) {
        o.exec(`
        CREATE TABLE metadata (
          singleton INTEGER PRIMARY KEY CHECK (singleton = 1),
          protocol_version INTEGER NOT NULL,
          cursor TEXT NOT NULL
        );

        CREATE TABLE scopes (
          id TEXT PRIMARY KEY,
          kind TEXT NOT NULL CHECK (kind IN ('profile', 'companion')),
          companion_id TEXT,
          next_position INTEGER NOT NULL CHECK (next_position >= 0),
          CHECK (
            (kind = 'profile' AND companion_id IS NULL) OR
            (kind = 'companion' AND companion_id IS NOT NULL)
          )
        );

        CREATE TABLE observations (
          id TEXT PRIMARY KEY,
          scope_id TEXT NOT NULL REFERENCES scopes(id) ON DELETE CASCADE,
          position INTEGER NOT NULL CHECK (position >= 0),
          revision TEXT NOT NULL,
          observed_at_ms INTEGER NOT NULL CHECK (observed_at_ms >= 0),
          text TEXT NOT NULL,
          provenance_json TEXT NOT NULL,
          UNIQUE (scope_id, position)
        );

        CREATE TABLE summaries (
          id TEXT PRIMARY KEY,
          scope_id TEXT NOT NULL REFERENCES scopes(id) ON DELETE CASCADE,
          lo INTEGER NOT NULL CHECK (lo >= 0),
          hi INTEGER NOT NULL CHECK (hi > lo),
          level INTEGER NOT NULL CHECK (level > 0),
          revision TEXT NOT NULL,
          text TEXT NOT NULL,
          child_ids_json TEXT NOT NULL,
          child_hashes_json TEXT NOT NULL,
          UNIQUE (scope_id, lo, hi)
        );

        INSERT INTO metadata (singleton, protocol_version, cursor)
        VALUES (1, ${re}, '0');
      `);
      },
    },
    {
      version: 2,
      up(o) {
        (o.exec("ALTER TABLE scopes ADD COLUMN source_workspace_id TEXT"),
          o.exec("UPDATE metadata SET cursor = '0' WHERE singleton = 1"));
      },
    },
    {
      version: 3,
      up(o) {
        o.exec(`
        ALTER TABLE observations ADD COLUMN search_document_json TEXT;
        CREATE INDEX observations_missing_search_document ON observations(scope_id)
          WHERE search_document_json IS NULL;
      `);
      },
    },
    {
      version: 4,
      up(o) {
        o.exec(`
        DROP INDEX observations_missing_search_document;
        -- Avoid rewriting all observation payloads at startup. Backfill clears the legacy cache.
        ALTER TABLE observations ADD COLUMN search_indexed INTEGER NOT NULL DEFAULT 0;
        CREATE INDEX observations_missing_search_index ON observations(scope_id)
          WHERE search_indexed = 0 AND json_extract(provenance_json, '$.origin') IS NOT 'forgotten';

        ALTER TABLE scopes ADD COLUMN search_document_count INTEGER NOT NULL DEFAULT 0;
        ALTER TABLE scopes ADD COLUMN search_token_count INTEGER NOT NULL DEFAULT 0;

        CREATE TABLE search_documents (
          observation_id TEXT PRIMARY KEY REFERENCES observations(id) ON DELETE CASCADE,
          scope_id TEXT NOT NULL REFERENCES scopes(id) ON DELETE CASCADE,
          token_count INTEGER NOT NULL CHECK (token_count >= 0),
          tags_json TEXT NOT NULL
        );
        CREATE INDEX search_documents_by_scope ON search_documents(scope_id);
        CREATE TABLE search_postings (
          scope_id TEXT NOT NULL,
          term TEXT NOT NULL,
          observation_id TEXT NOT NULL REFERENCES search_documents(observation_id) ON DELETE CASCADE,
          frequency INTEGER NOT NULL CHECK (frequency > 0),
          tagged INTEGER NOT NULL CHECK (tagged IN (0, 1)),
          PRIMARY KEY (scope_id, term, observation_id)
        ) WITHOUT ROWID;
        CREATE INDEX search_postings_by_observation ON search_postings(observation_id);
        CREATE INDEX search_postings_in_tags ON search_postings(scope_id, term, observation_id)
          WHERE tagged = 1;
        CREATE TABLE search_term_stats (
          scope_id TEXT NOT NULL REFERENCES scopes(id) ON DELETE CASCADE,
          term TEXT NOT NULL,
          document_count INTEGER NOT NULL CHECK (document_count >= 0),
          PRIMARY KEY (scope_id, term)
        ) WITHOUT ROWID;

        -- Derived rows and counts change in the same transaction as their source.
        CREATE TRIGGER search_document_insert AFTER INSERT ON search_documents
        WHEN NEW.token_count > 0 BEGIN
          UPDATE scopes SET search_document_count = search_document_count + 1,
            search_token_count = search_token_count + NEW.token_count
          WHERE id = NEW.scope_id;
        END;
        CREATE TRIGGER search_document_delete AFTER DELETE ON search_documents
        WHEN OLD.token_count > 0 BEGIN
          UPDATE scopes SET search_document_count = search_document_count - 1,
            search_token_count = search_token_count - OLD.token_count
          WHERE id = OLD.scope_id;
        END;
        CREATE TRIGGER search_posting_insert AFTER INSERT ON search_postings BEGIN
          INSERT INTO search_term_stats (scope_id, term, document_count)
          VALUES (NEW.scope_id, NEW.term, 1)
          ON CONFLICT (scope_id, term) DO UPDATE SET document_count = document_count + 1;
        END;
        CREATE TRIGGER search_posting_delete AFTER DELETE ON search_postings BEGIN
          UPDATE search_term_stats SET document_count = document_count - 1
          WHERE scope_id = OLD.scope_id AND term = OLD.term;
          DELETE FROM search_term_stats
          WHERE scope_id = OLD.scope_id AND term = OLD.term AND document_count = 0;
        END;
        CREATE TRIGGER search_observation_update BEFORE UPDATE OF text, provenance_json, scope_id
        ON observations BEGIN
          DELETE FROM search_documents WHERE observation_id = OLD.id;
        END;
      `);
      },
    },
    {
      version: 5,
      up(o) {
        o.exec(`
        ALTER TABLE observations ADD COLUMN embedding_model TEXT;
        ALTER TABLE observations ADD COLUMN embedding BLOB;
      `);
      },
    },
    {
      version: 6,
      up(o) {
        o.exec(`
        ALTER TABLE search_documents ADD COLUMN words TEXT;
        ALTER TABLE search_documents ADD COLUMN subjects_json TEXT;
        ALTER TABLE search_documents ADD COLUMN text_tokens INTEGER;
        ALTER TABLE search_documents ADD COLUMN text_key TEXT;
        CREATE INDEX search_documents_missing_text ON search_documents(scope_id)
          WHERE text_key IS NULL;
      `);
      },
    },
  ];
function fe(o) {
  o.exec(`
    CREATE TABLE IF NOT EXISTS optmem_replica_migrations (
      version INTEGER PRIMARY KEY,
      applied_at_ms INTEGER NOT NULL
    )
  `);
  const e = o.prepare(
      "SELECT version FROM optmem_replica_migrations WHERE version = ?",
    ),
    t = o.prepare(
      "INSERT INTO optmem_replica_migrations (version, applied_at_ms) VALUES (?, ?)",
    );
  for (const n of Ee)
    e.get(n.version) ||
      o.transaction(() => {
        (n.up(o), t.run(n.version, Date.now()));
      })();
}
const Q = 512,
  ge = new Set(["", "i", "m", "s", "im", "is", "ms", "ims"]);
class j {
  constructor(e) {
    this.expression = e;
  }
  static compile(e) {
    const t = e.flags ?? "";
    if (!ge.has(t))
      return {
        kind: "error",
        reason: "invalid-flags",
        message: "Flags must be one of i, m, s, im, is, ms, or ims",
      };
    if (e.pattern.length > Q)
      return {
        kind: "error",
        reason: "pattern-too-long",
        message: `Pattern must be at most ${Q} characters`,
      };
    try {
      return { kind: "ready", matcher: new j(new RegExp(e.pattern, t)) };
    } catch {
      return {
        kind: "error",
        reason: "syntax",
        message: "Pattern is not valid regular expression syntax",
      };
    }
  }
  matches(e) {
    return this.expression.test(e);
  }
}
function ae(o, e, t) {
  return o
    .prepare(
      `
    SELECT id, search_document_count, search_token_count FROM scopes
    WHERE kind = 'companion' AND companion_id = ? AND source_workspace_id IS ?
  `,
    )
    .all(e, t ?? null);
}
function Ne(o, e, t) {
  return o
    .prepare(
      `
    SELECT o.id FROM scopes s
    CROSS JOIN observations o INDEXED BY observations_missing_search_index
    WHERE s.kind = 'companion' AND s.companion_id = ? AND s.source_workspace_id IS ?
      AND o.scope_id = s.id AND o.search_indexed = 0
      AND json_extract(o.provenance_json, '$.origin') IS NOT 'forgotten'
    LIMIT 1
  `,
    )
    .get(e, t ?? null)
    ? !1
    : o
        .prepare(
          `
    SELECT d.observation_id FROM scopes s
    CROSS JOIN search_documents d INDEXED BY search_documents_missing_text
    WHERE s.kind = 'companion' AND s.companion_id = ? AND s.source_workspace_id IS ?
      AND d.scope_id = s.id AND d.text_key IS NULL
    LIMIT 1
  `,
        )
        .get(e, t ?? null) === void 0;
}
async function Te(o, e, t, n) {
  const s = JSON.stringify(ae(o, e, n).map(({ id: l }) => l)),
    i = o.prepare(`
    SELECT o.id, o.scope_id, o.text,
      json_extract(o.provenance_json, '$.tags') AS tags_json
    FROM json_each(?) AS scope
    CROSS JOIN observations o INDEXED BY observations_missing_search_index
    WHERE o.scope_id = scope.value AND o.search_indexed = 0
      AND json_extract(o.provenance_json, '$.origin') IS NOT 'forgotten'
    LIMIT 100
  `),
    a = o.prepare(`
    INSERT INTO search_documents
      (observation_id, scope_id, token_count, tags_json, words, subjects_json, text_tokens, text_key)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `),
    c = o.prepare(`
    INSERT INTO search_postings (scope_id, observation_id, term, frequency, tagged)
    SELECT ?, ?, json_extract(value, '$[0]'), json_extract(value, '$[1]'), json_extract(value, '$[2]')
    FROM json_each(?)
  `),
    u = o.prepare(
      "UPDATE observations SET search_indexed = 1, search_document_json = NULL WHERE id = ?",
    );
  for (;;) {
    t?.throwIfAborted();
    const l = i.all(s);
    if (l.length === 0) break;
    const m = l.map((p) => ({
      row: p,
      document: A.createOptMemSearchDocument({
        text: p.text,
        tags:
          p.tags_json === null
            ? []
            : O.parse(T.OptMemTagsSchema, JSON.parse(p.tags_json)),
      }),
    }));
    (o.transaction(() => {
      for (const { row: p, document: r } of m) {
        const f = new Set(r.tags.flat()),
          E = r.frequencies.map(([h, g]) => [h, g, Number(f.has(h))]);
        (a.run(
          p.id,
          p.scope_id,
          r.length,
          JSON.stringify(r.tags),
          r.words.join(" "),
          JSON.stringify(r.subjects),
          r.textTokens,
          r.textKey,
        ),
          c.run(p.scope_id, p.id, JSON.stringify(E)),
          u.run(p.id));
      }
    })(),
      await w.setImmediate());
  }
  const d = o.prepare(`
    SELECT d.observation_id, o.text
    FROM json_each(?) AS scope
    CROSS JOIN search_documents d INDEXED BY search_documents_missing_text
    JOIN observations o ON o.id = d.observation_id
    WHERE d.scope_id = scope.value AND d.text_key IS NULL
    LIMIT 100
  `),
    _ = o.prepare(`
    UPDATE search_documents SET words = ?, subjects_json = ?, text_tokens = ?, text_key = ?
    WHERE observation_id = ?
  `);
  for (;;) {
    t?.throwIfAborted();
    const l = d.all(s);
    if (l.length === 0) break;
    const m = l.map((p) => ({
      id: p.observation_id,
      text: A.optMemSearchText(p.text),
    }));
    (o.transaction(() => {
      for (const { id: p, text: r } of m)
        _.run(
          r.words.join(" "),
          JSON.stringify(r.subjects),
          r.textTokens,
          r.textKey,
          p,
        );
    })(),
      await w.setImmediate());
  }
}
async function Oe(o, e, t, n, s, i) {
  const a = A.createOptMemRetrievalQuery(t),
    c = a.terms;
  if (c.size === 0) return [];
  n?.throwIfAborted();
  const u = ae(o, e, s),
    d = JSON.stringify(u.map(({ id: g }) => g)),
    _ = JSON.stringify([...c]),
    l = o
      .prepare(
        `
    SELECT stats.term, sum(stats.document_count) AS document_count
    FROM json_each(?) AS scope CROSS JOIN json_each(?) AS term
    CROSS JOIN search_term_stats stats
    WHERE stats.scope_id = scope.value AND stats.term = term.value
    GROUP BY stats.term
  `,
      )
      .all(d, _),
    m = {
      query: a,
      terms: c,
      documentCount: u.reduce((g, v) => g + v.search_document_count, 0),
      tokenCount: u.reduce((g, v) => g + v.search_token_count, 0),
      documentFrequencies: new Map(l.map((g) => [g.term, g.document_count])),
    };
  if (m.documentCount === 0) return [];
  const p = o.prepare(`
    -- Every meaningful query term can retrieve a note, including common names.
    WITH candidate_ids AS MATERIALIZED (
      SELECT DISTINCT scope.value AS scope_id, hit.value AS observation_id
      FROM json_each(@scopes) AS scope CROSS JOIN json_each(@candidateTerms) AS term
      CROSS JOIN json_each((
        SELECT json_group_array(observation_id) FROM (
          SELECT p.observation_id FROM search_postings p
          WHERE p.scope_id = scope.value AND p.term = term.value
            AND p.observation_id >= @afterId
            AND (@includeCursor = 1 OR p.observation_id > @afterId)
          ORDER BY p.observation_id LIMIT 100
        )
      )) AS hit
      ORDER BY observation_id LIMIT 100
    )
    SELECT c.observation_id,
      -- Read the note's postings once and test each against the query terms. Unary + stops
      -- SQLite from seeking once per query term, which a long message or follow-up multiplies.
      (SELECT json_group_array(json_array(p.term, p.frequency))
       FROM search_postings p
       WHERE p.scope_id = c.scope_id AND p.observation_id = c.observation_id
         AND +p.term IN (SELECT value FROM json_each(@terms))
      ) AS frequencies_json,
      d.token_count, d.tags_json, d.words, d.subjects_json, d.text_tokens, d.text_key,
      o.observed_at_ms
    FROM candidate_ids c
    JOIN search_documents d ON d.observation_id = c.observation_id
    JOIN observations o ON o.id = c.observation_id
    WHERE json_extract(o.provenance_json, '$.origin') IS NOT 'forgotten'
    ORDER BY c.observation_id
  `),
    r = Date.now(),
    f = JSON.stringify(A.optMemCandidateTerms(m));
  let E = null,
    h = [];
  for (;;) {
    n?.throwIfAborted();
    const g = p.all({
        scopes: d,
        terms: _,
        candidateTerms: f,
        afterId: E ?? "",
        includeCursor: E === null ? 1 : 0,
      }),
      v = g.at(-1);
    if (!v) break;
    for (const N of g)
      (i?.fromMs !== void 0 && N.observed_at_ms < i.fromMs) ||
        (i?.toMs !== void 0 && N.observed_at_ms >= i.toMs) ||
        h.push({
          memory: {
            id: N.observation_id,
            date: new Date(N.observed_at_ms).toISOString().slice(0, 10),
          },
          document: O.parse(A.OptMemSearchDocumentSchema, {
            length: N.token_count,
            frequencies: JSON.parse(N.frequencies_json),
            tags: JSON.parse(N.tags_json),
            words: N.words === "" ? [] : N.words.split(" "),
            subjects: JSON.parse(N.subjects_json),
            textTokens: N.text_tokens,
            textKey: N.text_key,
          }),
        });
    ((h = A.retainOptMemCandidates(m, h, r)),
      (E = v.observation_id),
      await w.setImmediate());
  }
  return (n?.throwIfAborted(), A.selectRelevantOptMemMemories(m, h, r, i));
}
function $(o) {
  if (o.kind !== "profile" && o.kind !== "companion")
    throw new Error("OptMem replica scope kind is invalid");
  const e =
    o.tags_json === null
      ? []
      : O.parse(T.OptMemTagsSchema, JSON.parse(o.tags_json));
  return {
    id: o.id,
    date: new Date(o.observed_at_ms).toISOString().slice(0, 10),
    scope: o.kind,
    position: o.position,
    text: o.text,
    ...(o.author_user_id || o.author_name
      ? { author: { userId: o.author_user_id, displayName: o.author_name } }
      : {}),
    ...(e.length > 0 ? { tags: e } : {}),
    chatId: o.source_session_id,
    messageIds: X(o.source_message_ids),
  };
}
const q = `id, text,
  json_extract(provenance_json, '$.sessionId') AS source_session_id,
  json_extract(provenance_json, '$.sourceMessageIds') AS source_message_ids,
  json_extract(provenance_json, '$.sourceToolCallId') AS source_tool_call_id,
  json_extract(provenance_json, '$.origin') AS origin,
  json_extract(provenance_json, '$.authorUserId') AS author_user_id,
  json_extract(provenance_json, '$.authorName') AS author_name`;
function ee(o, e) {
  return {
    id: o.id,
    kind: "observation",
    range: e,
    text: o.text,
    chatId: o.source_session_id,
    messageIds: X(o.source_message_ids),
    ...(o.source_tool_call_id ? { toolCallId: o.source_tool_call_id } : {}),
    ...(o.origin === "companion"
      ? { author: { userId: o.author_user_id, displayName: o.author_name } }
      : {}),
  };
}
const ve = 1e4;
class F extends Error {
  constructor(e) {
    (super(
      e === "integrity"
        ? "OptMem replica integrity check failed"
        : "OptMem replica protocol version is incompatible",
    ),
      (this.reason = e));
  }
}
function Se(o) {
  if (
    (o.pragma("journal_mode = WAL"),
    o.pragma("foreign_keys = ON"),
    fe(o),
    o.pragma("quick_check", { simple: !0 }) !== "ok")
  )
    throw new F("integrity");
  const t = o
    .prepare(
      "SELECT protocol_version, cursor FROM metadata WHERE singleton = 1",
    )
    .get();
  if (!t || t.protocol_version !== re) throw new F("protocol-version");
}
function oe(o) {
  const e = new le(o);
  try {
    return (Se(e), e);
  } catch (t) {
    throw (e.close(), t);
  }
}
function te(o) {
  const e = o.split(":", 1)[0];
  if (!e || !/^(0|[1-9]\d*)$/.test(e))
    throw new Error("OptMem replica cursor is invalid");
  return BigInt(e);
}
function Ie(o) {
  const e = BigInt(o.capturedHeadRevision);
  let t = -1n;
  for (const s of o.entries) {
    const i = BigInt(s.revision);
    if (i <= t || i > e) throw new Error("OptMem sync revisions are invalid");
    t = i;
  }
  const n = o.entries.at(-1);
  if (o.hasMore) {
    if (!n || o.nextCursor !== `${n.revision}:${n.changeId}`)
      throw new Error("OptMem sync continuation is invalid");
  } else if (o.nextCursor !== null)
    throw new Error("OptMem final sync page has a continuation cursor");
}
function Ae(o, e) {
  const t = e - o,
    n = Math.log2(t);
  if (o < 0 || t < 2 || !Number.isInteger(n) || o % t !== 0)
    throw new Error("OptMem summary range is invalid");
  return n;
}
function Re(o, e) {
  const t = new Set(e.map((s) => `${s.lo}:${s.hi}`)),
    n = [];
  for (let s = 2; s <= o; s *= 2)
    for (let i = 0; i + s <= o; i += s)
      t.has(`${i}:${i + s}`) || n.push({ lo: i, hi: i + s });
  return n;
}
function X(o) {
  if (!o) return [];
  const e = O.safeParse(O.array(O.string()), JSON.parse(o));
  return e.success ? e.output : [];
}
const Me = 512,
  R = D.OPTMEM_EMBEDDING_DIMENSIONS * 2;
function Le(o) {
  if (o.model !== D.OPTMEM_EMBEDDING_FORMAT) return null;
  try {
    return D.decodeOptMemEmbedding(o.vector);
  } catch {
    return null;
  }
}
function be(o) {
  if (!o) return null;
  const e = Buffer.from(o.vector, "base64");
  return e.length === R ? e : null;
}
function De(o, e) {
  switch (e.kind) {
    case "scope-upsert":
      o.prepare(
        `
          INSERT INTO scopes (id, kind, companion_id, source_workspace_id, next_position)
          VALUES (?, ?, ?, ?, 0)
          ON CONFLICT (id) DO UPDATE SET
            kind = excluded.kind,
            companion_id = excluded.companion_id,
            source_workspace_id = excluded.source_workspace_id
        `,
      ).run(
        e.scopeId,
        e.scope.kind,
        e.scope.kind === "companion" ? e.scope.companionId : null,
        e.scope.kind === "companion"
          ? (e.scope.sourceWorkspaceId ?? null)
          : null,
      );
      return;
    case "observation-upsert": {
      const t = JSON.stringify(e.provenance),
        n = be(e.embedding),
        s = n ? (e.embedding?.model ?? null) : null;
      (o
        .prepare(
          "SELECT id FROM observations WHERE id = ? AND scope_id = ? AND text = ? AND provenance_json = ?",
        )
        .get(e.id, e.scopeId, e.text, t)
        ? o
            .prepare(
              `
            UPDATE observations
            SET position = ?, revision = ?, observed_at_ms = ?, embedding_model = ?, embedding = ?
            WHERE id = ?
          `,
            )
            .run(e.position, e.revision, e.observedAtMs, s, n, e.id)
        : o
            .prepare(
              `
            INSERT INTO observations (
              id, scope_id, position, revision, observed_at_ms, text, provenance_json,
              embedding_model, embedding
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT (id) DO UPDATE SET
              scope_id = excluded.scope_id,
              position = excluded.position,
              revision = excluded.revision,
              observed_at_ms = excluded.observed_at_ms,
              text = excluded.text,
              provenance_json = excluded.provenance_json,
              search_document_json = NULL,
              search_indexed = 0,
              embedding_model = excluded.embedding_model,
              embedding = excluded.embedding
          `,
            )
            .run(
              e.id,
              e.scopeId,
              e.position,
              e.revision,
              e.observedAtMs,
              e.text,
              t,
              s,
              n,
            ),
        o
          .prepare(
            `
          UPDATE scopes
          SET next_position = max(next_position, ?)
          WHERE id = ?
        `,
          )
          .run(e.position + 1, e.scopeId));
      return;
    }
    case "summary-upsert":
      o.prepare(
        `
          INSERT INTO summaries (
            id, scope_id, lo, hi, level, revision, text, child_ids_json, child_hashes_json
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT (id) DO UPDATE SET
            scope_id = excluded.scope_id,
            lo = excluded.lo,
            hi = excluded.hi,
            level = excluded.level,
            revision = excluded.revision,
            text = excluded.text,
            child_ids_json = excluded.child_ids_json,
            child_hashes_json = excluded.child_hashes_json
        `,
      ).run(
        e.id,
        e.scopeId,
        e.range.lo,
        e.range.hi,
        Ae(e.range.lo, e.range.hi),
        e.revision,
        e.text,
        JSON.stringify(e.childIds),
        JSON.stringify(e.childHashes),
      );
      return;
    case "scope-delete":
      o.prepare("DELETE FROM scopes WHERE id = ?").run(e.scopeId);
      return;
    case "observation-tombstone":
      o.prepare(
        "DELETE FROM observations WHERE id = ? AND scope_id = ? AND position = ?",
      ).run(e.id, e.scopeId, e.position);
      return;
    case "summary-tombstone":
      o.prepare(
        "DELETE FROM summaries WHERE id = ? AND scope_id = ? AND lo = ? AND hi = ?",
      ).run(e.id, e.scopeId, e.range.lo, e.range.hi);
      return;
  }
}
class U {
  constructor(e, t) {
    ((this.reset = t), (this.#e = e));
  }
  #e;
  #s = !1;
  #a = new AbortController();
  #t = null;
  #n = null;
  #i = Promise.resolve();
  #r = new Map();
  static async open(e, t = {}) {
    const n = await k.resolveProfilePath(e, t.getProfilePath),
      s = ue.join(n, k.DATABASE_FILE_NAME);
    await de.mkdir(n, { recursive: !0 });
    try {
      return new U(oe(s), null);
    } catch (i) {
      await k.removeDatabaseFiles(s);
      const a = ne.sqliteCodeOf(i);
      return new U(oe(s), {
        reason: i instanceof F ? i.reason : "open-failed",
        ...(a ? { code: a } : {}),
      });
    }
  }
  getCursor() {
    return this.#o(() => {
      if (this.#n) throw this.#n;
      const e = this.#e
        .prepare("SELECT cursor FROM metadata WHERE singleton = 1")
        .get();
      if (!e) throw new Error("OptMem replica metadata is missing");
      return e.cursor;
    });
  }
  async prepareSearchIndex(e, t, n = "background") {
    for (;;) {
      const s =
        this.#t && !this.#s ? "building" : await this.#o(() => this.#c(e, t));
      if (s === "ready" || n === "background") return s;
      await this.#t;
    }
  }
  #c(e, t) {
    if (this.#n) throw this.#n;
    return this.#t
      ? "building"
      : Ne(this.#e, e, t)
        ? "ready"
        : ((this.#t = this.#o(() => Te(this.#e, e, this.#a.signal, t)).then(
            () => {
              this.#t = null;
            },
            () => {
              ((this.#t = null),
                this.#s ||
                  (this.#n = new Error("OptMem search index build failed")));
            },
          )),
          "building");
  }
  relevant(e, t, n, s, i) {
    n?.throwIfAborted();
    const a = { kind: "unavailable", reason: "index-building", cursor: null };
    return this.#t && !this.#s
      ? Promise.resolve(a)
      : this.#o(async () => {
          if ((n?.throwIfAborted(), this.#c(e, s) === "building")) return a;
          const c = await Oe(this.#e, e, t, n, s, i),
            u = this.#e.prepare(`
        SELECT o.id, s.kind, o.position, o.observed_at_ms, o.text,
          json_extract(o.provenance_json, '$.sessionId') AS source_session_id,
          json_extract(o.provenance_json, '$.sourceMessageIds') AS source_message_ids,
          json_extract(o.provenance_json, '$.authorUserId') AS author_user_id,
          json_extract(o.provenance_json, '$.authorName') AS author_name,
          json_extract(o.provenance_json, '$.tags') AS tags_json
        FROM observations o JOIN scopes s ON s.id = o.scope_id
        WHERE o.id = ? AND s.kind = 'companion' AND s.companion_id = ? AND s.source_workspace_id IS ?
          AND json_extract(o.provenance_json, '$.origin') IS NOT 'forgotten'
      `);
          return {
            kind: "result",
            value: {
              matches: c.map((_) => {
                const l = u.get(_.id, e, s ?? null);
                if (!l)
                  throw new Error(
                    "OptMem search index references an unavailable observation",
                  );
                return { ...$(l), ..._ };
              }),
            },
          };
        });
  }
  similar(e, t, n, s, i) {
    s?.throwIfAborted();
    const a = Le(t);
    return a
      ? this.#o(async () => {
          s?.throwIfAborted();
          const c = this.#l(e, i),
            u = [];
          for (let l = 0; l < c.ids.length; l += 1) {
            l > 0 &&
              l % Me === 0 &&
              (await w.setImmediate(), s?.throwIfAborted());
            const m = c.observedAtMs[l] ?? 0;
            if (
              (n.fromMs !== void 0 && m < n.fromMs) ||
              (n.toMs !== void 0 && m >= n.toMs)
            )
              continue;
            const p = l * R,
              r = D.optMemEmbeddingSimilarity(a, c.vectors.subarray(p, p + R)),
              f = u.at(-1);
            if (
              Number.isNaN(r) ||
              (u.length === n.limit && f && r <= f.similarity)
            )
              continue;
            let E = u.length;
            for (; E > 0 && (u[E - 1]?.similarity ?? 0) < r; ) E -= 1;
            (u.splice(E, 0, { id: c.ids[l] ?? "", similarity: r }),
              u.length > n.limit && u.pop());
          }
          const d = this.#e.prepare(`
        SELECT o.id, s.kind, o.position, o.observed_at_ms, o.text,
          json_extract(o.provenance_json, '$.sessionId') AS source_session_id,
          json_extract(o.provenance_json, '$.sourceMessageIds') AS source_message_ids,
          json_extract(o.provenance_json, '$.authorUserId') AS author_user_id,
          json_extract(o.provenance_json, '$.authorName') AS author_name,
          json_extract(o.provenance_json, '$.tags') AS tags_json
        FROM observations o JOIN scopes s ON s.id = o.scope_id
        WHERE o.id = ?
      `);
          return {
            kind: "result",
            value: {
              matches: u.flatMap(({ id: l, similarity: m }) => {
                const p = d.get(l);
                return p ? [{ ...$(p), similarity: m }] : [];
              }),
            },
          };
        })
      : Promise.resolve({ kind: "result", value: { matches: [] } });
  }
  #l(e, t) {
    const n = JSON.stringify([e, t ?? null]),
      s = this.#r.get(n);
    if (s) return s;
    const i = this.#e
        .prepare(
          `
        SELECT o.id, o.observed_at_ms, o.embedding
        FROM observations o JOIN scopes s ON s.id = o.scope_id
        WHERE s.kind = 'companion' AND s.companion_id = @companionId
          AND s.source_workspace_id IS @sourceWorkspaceId
          AND o.embedding_model = @model AND length(o.embedding) = @bytes
          AND json_extract(o.provenance_json, '$.origin') IS NOT 'forgotten'
      `,
        )
        .all({
          companionId: e,
          sourceWorkspaceId: t ?? null,
          model: D.OPTMEM_EMBEDDING_FORMAT,
          bytes: R,
        }),
      a = new Uint8Array(i.length * R);
    i.forEach((u, d) => a.set(u.embedding, d * R));
    const c = {
      ids: i.map((u) => u.id),
      observedAtMs: Float64Array.from(i, (u) => u.observed_at_ms),
      vectors: a,
    };
    return (this.#r.set(n, c), c);
  }
  recall(e, t, n, s) {
    return this.#o(() => {
      const i = j.compile(t);
      if (i.kind === "error") return i;
      if (t.ids?.length === 0)
        return { kind: "result", value: { matches: [], next: [] } };
      const a = {
        companionId: e,
        sourceWorkspaceId: n ?? null,
        before: t.before ?? null,
        authorUserId: s ?? null,
        fromMs: t.from ? Date.parse(`${t.from}T00:00:00.000Z`) : null,
        toMs: t.to ? Date.parse(`${t.to}T00:00:00.000Z`) + 864e5 : null,
      };
      let c = "";
      t.ids &&
        (c = `AND o.id IN (${t.ids
          .map((r, f) => {
            const E = `id${f}`;
            return ((a[E] = r), `@${E}`);
          })
          .join(", ")})`);
      const u = this.#e
          .prepare(
            `
          SELECT
            o.id,
            s.kind,
            o.position,
            o.observed_at_ms,
            o.text,
            json_extract(o.provenance_json, '$.sessionId') AS source_session_id,
            json_extract(o.provenance_json, '$.sourceMessageIds') AS source_message_ids,
            json_extract(o.provenance_json, '$.authorUserId') AS author_user_id,
            json_extract(o.provenance_json, '$.authorName') AS author_name,
            json_extract(o.provenance_json, '$.tags') AS tags_json
          FROM observations o
          JOIN scopes s ON s.id = o.scope_id
          WHERE s.kind = 'companion' AND s.companion_id = @companionId
            AND s.source_workspace_id IS @sourceWorkspaceId
            AND json_extract(o.provenance_json, '$.origin') IS NOT 'forgotten'
            AND (@fromMs IS NULL OR o.observed_at_ms >= @fromMs)
            AND (@toMs IS NULL OR o.observed_at_ms < @toMs)
            ${c}
            AND (@before IS NULL OR o.position < @before)
            AND (@authorUserId IS NULL
              OR json_extract(o.provenance_json, '$.authorUserId') = @authorUserId)
          ORDER BY o.position DESC
        `,
          )
          .iterate(a),
        d = [],
        _ = t.limit ?? 20;
      let l = !1;
      for (const p of u) {
        const r = $(p);
        if (
          !(
            !i.matcher.matches(r.text) &&
            !r.tags?.some((f) => i.matcher.matches(f))
          )
        ) {
          if (d.length === _) {
            l = !0;
            break;
          }
          d.push(r);
        }
      }
      const m = d.at(-1);
      return {
        kind: "result",
        value: { matches: d, next: l && m ? [{ before: m.position }] : [] },
      };
    });
  }
  dreamNotes(e) {
    return this.#o(() => {
      let t = () => !0;
      if (e.match?.kind === "regex") {
        const c = j.compile(e.match);
        if (c.kind === "error") return c;
        t = (u, d) =>
          c.matcher.matches(u) || d.some((_) => c.matcher.matches(_));
      } else if (e.match?.kind === "words") {
        const c = e.match.words.map((u) => u.toLocaleLowerCase());
        t = (u, d) => {
          const _ = [u, ...d]
            .join(
              `
`,
            )
            .toLocaleLowerCase();
          return c.every((l) => _.includes(l));
        };
      }
      const n = this.#e
          .prepare(
            `
          SELECT
            o.id,
            o.observed_at_ms,
            o.text,
            json_extract(o.provenance_json, '$.sessionId') AS source_session_id,
            s.companion_id,
            json_extract(o.provenance_json, '$.authorUserId') AS author_user_id,
            json_extract(o.provenance_json, '$.authorName') AS author_name,
            json_extract(o.provenance_json, '$.tags') AS tags_json
          FROM observations o
          JOIN scopes s ON s.id = o.scope_id
          WHERE s.kind = 'companion'
            AND (@companionId IS NULL OR s.companion_id = @companionId)
            AND (@authorName IS NULL
              OR json_extract(o.provenance_json, '$.authorName') = @authorName COLLATE NOCASE)
            AND (@authorUserId IS NULL
              OR json_extract(o.provenance_json, '$.authorUserId') = @authorUserId)
            AND json_extract(o.provenance_json, '$.origin') IS NOT 'forgotten'
            AND (@afterMs IS NULL OR o.observed_at_ms > @afterMs)
            AND (@beforeMs IS NULL OR o.observed_at_ms < @beforeMs)
          ORDER BY o.observed_at_ms ${e.order === "oldest" ? "ASC" : "DESC"}, o.id
        `,
          )
          .iterate({
            companionId: e.companionId ?? null,
            authorName: e.authorName ?? null,
            authorUserId: e.authorUserId ?? null,
            afterMs: e.afterMs,
            beforeMs: e.beforeMs,
          }),
        s = [],
        i = [];
      let a = !1;
      for (const c of n) {
        const u =
          c.tags_json === null
            ? []
            : O.parse(T.OptMemTagsSchema, JSON.parse(c.tags_json));
        if (!t(c.text, u)) continue;
        if (i.length === ve) {
          a = !0;
          break;
        }
        const d = {
          observedAtMs: c.observed_at_ms,
          companionId: c.companion_id,
          authorUserId: c.author_user_id,
          authorName: c.author_name,
        };
        (i.push(d),
          s.length < e.limit &&
            s.push({
              ...d,
              id: c.id,
              text: c.text,
              sourceSessionId: c.source_session_id,
            }));
      }
      return { kind: "result", value: { notes: s, matches: i, truncated: a } };
    });
  }
  zoom(e, t, n) {
    return this.#o(() => {
      const s = T.parseOptMemZoomRange(t.range),
        i = this.#e
          .prepare(
            "SELECT id, next_position FROM scopes WHERE kind = 'companion' AND companion_id = ? AND source_workspace_id IS ?",
          )
          .get(e, n ?? null);
      if (!i)
        return {
          kind: "error",
          reason: "not-found",
          message: "OptMem scope was not found",
        };
      if (s.hi > i.next_position)
        return {
          kind: "error",
          reason: "not-found",
          message: "OptMem observation range was not found",
        };
      if (s.hi - s.lo === 1) {
        const m = this.#d(i.id, s.lo);
        return m
          ? { kind: "result", value: m }
          : {
              kind: "error",
              reason: "not-found",
              message: "OptMem observation was not found",
            };
      }
      const a = this.#e.prepare(`
        SELECT lo, hi,
          json_extract(child_ids_json, '$[0]') AS left_child_id,
          json_extract(child_ids_json, '$[1]') AS right_child_id
        FROM summaries
        WHERE scope_id = ? AND lo = ? AND hi <= ?
        ORDER BY hi DESC
        LIMIT 1
      `),
        c = a.get(i.id, s.lo, s.hi);
      if (c?.hi === s.hi) return this.#u(i.id, s, c);
      const u = t.limit ?? T.OPTMEM_ZOOM_DEFAULT_LIMIT,
        d = [];
      let _ = s.lo;
      for (; _ < s.hi && d.length < u; ) {
        const m = a.get(i.id, _, s.hi);
        if (m) {
          const p = this.#u(i.id, { lo: m.lo, hi: m.hi }, m);
          if (p.kind === "error") return p;
          for (const r of p.value.children) {
            if (d.length === u) break;
            (d.push(r), (_ = r.range.hi));
          }
        } else {
          const p = this.#d(i.id, _);
          if (!p)
            return {
              kind: "error",
              reason: "corrupt",
              message: "OptMem range observation is missing",
            };
          (d.push(p), (_ += 1));
        }
      }
      let l = null;
      return (
        _ < s.hi && (l = _ === s.hi - 1 ? `#${_}` : `#${_}-${s.hi - 1}`),
        { kind: "result", value: { range: s, nodes: d, nextRange: l } }
      );
    });
  }
  #d(e, t) {
    const n = this.#e
      .prepare(
        `
        SELECT ${q}
        FROM observations
        WHERE scope_id = ? AND position = ?
      `,
      )
      .get(e, t);
    return n ? ee(n, { lo: t, hi: t + 1 }) : null;
  }
  #u(e, t, n) {
    if (!n.left_child_id || !n.right_child_id)
      return {
        kind: "error",
        reason: "corrupt",
        message: "OptMem summary children are invalid",
      };
    const s = t.lo + (t.hi - t.lo) / 2,
      i = [
        { lo: t.lo, hi: s },
        { lo: s, hi: t.hi },
      ],
      a = [n.left_child_id, n.right_child_id],
      c = [];
    for (const [u, d] of i.entries()) {
      const _ = a[u];
      if (!_)
        return {
          kind: "error",
          reason: "corrupt",
          message: "OptMem summary children are invalid",
        };
      if (d.hi - d.lo === 1) {
        const m = this.#e
          .prepare(
            `
          SELECT ${q}
          FROM observations
          WHERE id = ? AND scope_id = ? AND position = ?
        `,
          )
          .get(_, e, d.lo);
        if (!m)
          return {
            kind: "error",
            reason: "corrupt",
            message: "OptMem summary child is missing",
          };
        c.push(ee(m, d));
        continue;
      }
      const l = this.#e
        .prepare(
          `
        SELECT id, text
        FROM summaries
        WHERE id = ? AND scope_id = ? AND lo = ? AND hi = ?
      `,
        )
        .get(_, e, d.lo, d.hi);
      if (!l)
        return {
          kind: "error",
          reason: "corrupt",
          message: "OptMem summary child is missing",
        };
      c.push({ id: l.id, kind: "summary", range: d, text: l.text });
    }
    return c.length !== 2
      ? {
          kind: "error",
          reason: "corrupt",
          message: "OptMem summary children are invalid",
        }
      : { kind: "result", value: { parent: t, children: [c[0], c[1]] } };
  }
  inspectDebug(e, t, n, s) {
    return this.#o(() => {
      const i = this.#e
          .prepare(
            `
          SELECT id, kind, next_position
          FROM scopes
          WHERE kind = 'companion' AND companion_id = ? AND source_workspace_id IS ?
        `,
          )
          .all(e, s ?? null),
        a = new Set(i.map((r) => r.id)),
        c = this.#e
          .prepare(
            `
          SELECT
            o.id,
            o.scope_id,
            s.kind AS scope_kind,
            o.position,
            o.revision,
            o.observed_at_ms,
            o.text,
            json_extract(o.provenance_json, '$.origin') AS origin,
            json_extract(o.provenance_json, '$.authorName') AS author_name,
            json_extract(o.provenance_json, '$.sessionId') AS source_session_id,
            json_extract(o.provenance_json, '$.sourceMessageIds') AS source_message_ids,
            json_extract(o.provenance_json, '$.sourceToolCallId') AS source_tool_call_id
          FROM observations o
          JOIN scopes s ON s.id = o.scope_id
          WHERE s.kind = 'companion' AND s.companion_id = ? AND s.source_workspace_id IS ?
          ORDER BY length(o.revision) DESC, o.revision DESC, o.id DESC
        `,
          )
          .all(e, s ?? null),
        u = this.#e
          .prepare(
            `
          SELECT
            n.id,
            n.scope_id,
            s.kind AS scope_kind,
            n.lo,
            n.hi,
            n.revision,
            n.text,
            json_extract(n.child_ids_json, '$[0]') AS left_child_id,
            json_extract(n.child_ids_json, '$[1]') AS right_child_id
          FROM summaries n
          JOIN scopes s ON s.id = n.scope_id
          WHERE s.kind = 'companion' AND s.companion_id = ? AND s.source_workspace_id IS ?
          ORDER BY n.lo, n.hi
        `,
          )
          .all(e, s ?? null);
      if (u.some((r) => !a.has(r.scope_id)))
        throw new Error("OptMem debug summary has no visible scope");
      const d = [
          ...c.map((r) => ({
            id: r.id,
            scope: r.scope_kind,
            kind: "observation",
            lo: r.position,
            hi: r.position + 1,
            revision: r.revision,
            text: r.text,
            childIds: null,
          })),
          ...u.map((r) => ({
            id: r.id,
            scope: r.scope_kind,
            kind: "summary",
            lo: r.lo,
            hi: r.hi,
            revision: r.revision,
            text: r.text,
            childIds:
              r.left_child_id && r.right_child_id
                ? [r.left_child_id, r.right_child_id]
                : null,
          })),
        ],
        _ = (r) => {
          const f = i.find((h) => h.kind === r),
            E = u.filter((h) => h.scope_kind === r);
          return {
            observationCount: f?.next_position ?? 0,
            nodes: d
              .filter((h) => h.scope === r)
              .map((h) => ({
                id: h.id,
                kind: h.kind,
                range: { lo: h.lo, hi: h.hi },
                tokenCount: G.estimateOptMemTokens(h.text),
              })),
            absentSummaries: Re(f?.next_position ?? 0, E),
          };
        },
        l = he({
          profile: _("profile"),
          companion: _("companion"),
          tokenBudget: T.OPTMEM_PROMPT_TOKEN_BUDGET,
        });
      let m;
      const p = new Set();
      if (l.kind === "ready") {
        for (const r of [...l.profile, ...l.companion]) p.add(r.id);
        m = {
          kind: "ready",
          headRevision: t,
          cursor: n,
          tokenBudget: T.OPTMEM_PROMPT_TOKEN_BUDGET,
          tokenCount: l.tokenCount,
          profileNodeIds: l.profile.map((r) => r.id),
          companionNodeIds: l.companion.map((r) => r.id),
        };
      } else if (l.kind === "needs-compaction")
        m = {
          kind: "needs-compaction",
          headRevision: t,
          cursor: n,
          tokenBudget: T.OPTMEM_PROMPT_TOKEN_BUDGET,
          missing: l.missingSummaries.map((r) => ({
            scope: r.scope,
            lo: r.range.lo,
            hi: r.range.hi,
          })),
        };
      else if (l.kind === "needs-load")
        m = {
          kind: "incomplete",
          headRevision: t,
          cursor: n,
          tokenBudget: T.OPTMEM_PROMPT_TOKEN_BUDGET,
          missing: l.nodes.map((r) => ({
            scope: r.scope,
            lo: r.range.lo,
            hi: r.range.hi,
          })),
        };
      else throw new Error("Local OptMem cover cannot be unavailable");
      return {
        nodes: d,
        cover: m,
        observations: c
          .filter((r) => r.origin !== "forgotten")
          .map((r) => {
            let f = "automatic";
            return (
              r.origin === "wiki" && (f = "legacy"),
              r.origin === "explicit" && (f = "explicit"),
              {
                id: r.id,
                scope: r.scope_kind,
                position: r.position,
                revision: r.revision,
                observedAtMs: r.observed_at_ms,
                text: r.text,
                origin: f,
                sourceSessionId: r.source_session_id,
                sourceMessageIds: X(r.source_message_ids),
                sourceToolCallId: r.source_tool_call_id,
                inCurrentCover: p.has(r.id),
                reflected: null,
                ...(r.origin === "companion" ? { author: r.author_name } : {}),
              }
            );
          }),
      };
    });
  }
  applyPage(e) {
    return this.#o(() => {
      Ie(e);
      let t = 0;
      (this.#e.transaction(() => {
        const n = this.#e
          .prepare("SELECT cursor FROM metadata WHERE singleton = 1")
          .get();
        if (!n) throw new Error("OptMem replica metadata is missing");
        const s = te(n.cursor);
        let i = n.cursor;
        for (const a of e.entries)
          BigInt(a.revision) <= s ||
            (De(this.#e, a), (t += 1), (i = `${a.revision}:${a.changeId}`));
        (!e.hasMore &&
          te(i) < BigInt(e.capturedHeadRevision) &&
          (i = `${e.capturedHeadRevision}:head`),
          this.#e
            .prepare("UPDATE metadata SET cursor = ? WHERE singleton = 1")
            .run(i));
      })(),
        t > 0 && this.#r.clear());
    });
  }
  close() {
    if (this.#s) return this.#i;
    ((this.#s = !0), this.#a.abort());
    const e = this.#i.then(() => {
      this.#e.close();
    });
    return (
      (this.#i = e.then(
        () => {},
        () => {},
      )),
      e
    );
  }
  #o(e) {
    if (this.#s) return Promise.reject(new k.OptMemReplicaClosedError());
    const t = this.#i.then(e);
    return (
      (this.#i = t.then(
        () => {},
        () => {},
      )),
      t
    );
  }
}
if (!W.parentPort)
  throw new Error("OptMem database worker requires a parent port");
const S = W.parentPort,
  se = O.parse(
    O.object({ profileId: O.string(), profilePath: O.string() }),
    W.workerData,
  ),
  b = new Map();
let C = !1;
function H(o, e) {
  const t = ne.sqliteCodeOf(e);
  return {
    type: "fatal",
    method: o,
    errorName: e instanceof Error ? e.name : "Error",
    ...(t ? { code: t } : {}),
  };
}
async function ke(o, e, t) {
  switch (e.method) {
    case "prepareSearchIndex":
      return { method: e.method, value: await o.prepareSearchIndex(...e.args) };
    case "getCursor":
      return { method: e.method, value: await o.getCursor(...e.args) };
    case "applyPage":
      return { method: e.method, value: await o.applyPage(...e.args) };
    case "recall":
      return { method: e.method, value: await o.recall(...e.args) };
    case "dreamNotes":
      return { method: e.method, value: await o.dreamNotes(...e.args) };
    case "zoom":
      return { method: e.method, value: await o.zoom(...e.args) };
    case "inspectDebug":
      return { method: e.method, value: await o.inspectDebug(...e.args) };
    case "relevant":
      return {
        method: e.method,
        value: await o.relevant(e.args[0], e.args[1], t, e.args[2], e.args[3]),
      };
    case "similar":
      return {
        method: e.method,
        value: await o.similar(e.args[0], e.args[1], e.args[2], t, e.args[3]),
      };
  }
}
async function xe(o, e) {
  if (e.method === "cancel") {
    b.get(e.id)?.abort();
    return;
  }
  if (e.method === "close") {
    C = !0;
    for (const n of b.values()) n.abort();
    (await o.close(), S.close());
    return;
  }
  if (C) return;
  const t = new AbortController();
  b.set(e.id, t);
  try {
    const n = await ke(o, e, t.signal);
    S.postMessage({ type: "result", id: e.id, result: n });
  } catch (n) {
    if (t.signal.aborted || C) S.postMessage({ type: "error", id: e.id });
    else {
      ((C = !0), S.postMessage(H(e.method, n)));
      for (const s of b.values()) s.abort();
      (await o.close(), S.close());
    }
  } finally {
    b.delete(e.id);
  }
}
U.open(se.profileId, { getProfilePath: () => se.profilePath }).then(
  (o) => {
    (S.on("message", (e) => {
      xe(o, e).catch((t) => {
        S.postMessage(H(e.method, t));
      });
    }),
      S.postMessage({ type: "ready", ...(o.reset ? { reset: o.reset } : {}) }));
  },
  (o) => {
    (S.postMessage(H("open", o)), S.close());
  },
);
