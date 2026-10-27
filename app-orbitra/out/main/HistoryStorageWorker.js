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
      (e._sentryDebugIds[t] = "de827ef1-3c20-4228-907b-b49f6c5147cd"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-de827ef1-3c20-4228-907b-b49f6c5147cd"));
  })();
} catch {}
const le = require("path"),
  T = require("./chunks/protocol-BGN1BQCi.js"),
  he = require("async-lock"),
  Ie = require("better-sqlite3"),
  _ = require("./chunks/suggestion-utils-CLM94tkM.js"),
  j = require("fs"),
  W = require("node:timers/promises");
function Ne(e) {
  e.exec(`
    CREATE TABLE IF NOT EXISTS address_bar_selections (
      query TEXT NOT NULL,
      place_id INTEGER NOT NULL REFERENCES places(id) ON DELETE CASCADE,
      use_count REAL NOT NULL,
      last_selected INTEGER NOT NULL,
      PRIMARY KEY (query, place_id)
    );
    CREATE INDEX IF NOT EXISTS address_bar_selections_last_selected
      ON address_bar_selections(last_selected);
    CREATE INDEX IF NOT EXISTS address_bar_selections_place_id
      ON address_bar_selections(place_id);
    CREATE TRIGGER IF NOT EXISTS address_bar_selections_delete_visit
    AFTER DELETE ON visits BEGIN
      DELETE FROM address_bar_selections WHERE place_id = old.place_id;
    END;
  `);
}
function Oe(e, t) {
  e.prepare("DELETE FROM address_bar_selections WHERE last_selected >= ?").run(
    t,
  );
}
function Ae(e, t) {
  e.prepare("DELETE FROM address_bar_selections WHERE query = ?").run(
    _.normalizeSelectionQuery(t),
  );
}
function Le(e, t, i, a = Date.now()) {
  const n = _.normalizeSelectionQuery(t);
  if (!n || n.length > _.MAX_SELECTION_QUERY_LENGTH) return;
  const s = e.prepare("SELECT id FROM places WHERE url = ?").get(i);
  s &&
    e.transaction(() => {
      (e.prepare("DELETE FROM address_bar_selections WHERE query = ?").run(n),
        e
          .prepare(
            "INSERT INTO address_bar_selections (query, place_id, use_count, last_selected) VALUES (?, ?, 1, ?)",
          )
          .run(n, s.id, a));
    })();
}
function ve(e, t, i = Date.now()) {
  e.prepare("DELETE FROM address_bar_selections WHERE last_selected <= ?").run(
    i - _.SELECTION_RETENTION_MS,
  );
  const a = e
    .prepare(
      `SELECT p.url, s.last_selected
    FROM address_bar_selections s JOIN places p ON p.id = s.place_id WHERE s.query = ?
    ORDER BY s.last_selected DESC, s.place_id DESC LIMIT 1`,
    )
    .get(_.normalizeSelectionQuery(t));
  return new Map(a ? [[a.url, a.last_selected]] : []);
}
const Ee = {
    [T.VisitType.LINK]: 100,
    [T.VisitType.TYPED]: 2e3,
    [T.VisitType.BOOKMARK]: 1800,
    [T.VisitType.EMBED]: 100,
    [T.VisitType.REDIRECT_PERMANENT]: 50,
    [T.VisitType.REDIRECT_TEMPORARY]: 0,
    [T.VisitType.DOWNLOAD]: 0,
    [T.VisitType.FRAMED_LINK]: 100,
    [T.VisitType.RELOAD]: 0,
    [T.VisitType.IGNORE]: 0,
    [T.VisitType.SEARCHED]: 100,
  },
  de = 100,
  b = [
    { maxAge: 1, weight: 100 },
    { maxAge: 4, weight: 90 },
    { maxAge: 14, weight: 70 },
    { maxAge: 31, weight: 50 },
    { maxAge: 90, weight: 30 },
    { maxAge: 180, weight: 10 },
    { maxAge: 1 / 0, weight: 5 },
  ],
  pe = 20;
function De(e, t = Date.now()) {
  if (e.length === 0) return 0;
  let i = 0;
  for (const a of e) {
    const n = Ee[a.visit_type] ?? de;
    if (n === 0) continue;
    const s = (t - a.visit_date) / (1e3 * 60 * 60 * 24),
      r = b.find((E) => s <= E.maxAge),
      o = r ? r.weight : 5;
    i += n * o;
  }
  return Math.round(i);
}
const Ce = 1440 * 60 * 1e3;
function k() {
  const e = Object.entries(Ee)
      .map(([a, n]) => `WHEN ${a} THEN ${n}`)
      .join(" "),
    t = b
      .filter((a) => a.maxAge !== 1 / 0)
      .map(
        (a) =>
          `WHEN (@now - v.visit_date) <= ${a.maxAge * Ce} THEN ${a.weight}`,
      )
      .join(" "),
    i = b[b.length - 1].weight;
  return `COALESCE((
    SELECT CAST(ROUND(SUM(
      (CASE v.visit_type ${e} ELSE ${de} END)
      *
      (CASE ${t} ELSE ${i} END)
    )) AS INTEGER)
    FROM (
      SELECT visit_date, visit_type FROM visits
      WHERE visits.place_id = places.id
      ORDER BY visit_date DESC
      LIMIT ${pe}
    ) v
  ), 0)`;
}
const J = 100,
  Me = 64,
  Q = 32,
  ee = new WeakMap();
function we(e) {
  const t = ee.get(e);
  if (t) return t;
  e.exec(
    "CREATE VIRTUAL TABLE IF NOT EXISTS temp.address_bar_vocabulary USING fts5vocab(main, places_fts, instance)",
  );
  const i = {
    vocabulary: e.prepare(`
      SELECT substr(term, 1, 33) AS term FROM temp.address_bar_vocabulary
      WHERE term >= ? AND term < ? LIMIT 1
    `),
    frequent: e.prepare(`
      WITH frequent_places AS MATERIALIZED (
        SELECT id, substr(url, 1, 4096) AS url, substr(title, 1, 1024) AS title, hidden
        FROM places ORDER BY frecency DESC LIMIT 400
      )
      SELECT id, url, title FROM frequent_places
      WHERE hidden = 0 AND url NOT LIKE 'orbitra://%'
    `),
    matches: e.prepare(`
      WITH fuzzy_places AS MATERIALIZED (
        SELECT rowid FROM places_fts WHERE places_fts MATCH ? LIMIT 1024
      )
      SELECT p.id, substr(p.url, 1, 4096) AS url, substr(p.title, 1, 1024) AS title
      FROM fuzzy_places f JOIN places p ON p.id = f.rowid
      WHERE p.hidden = 0 AND p.url NOT LIKE 'orbitra://%'
      ORDER BY p.frecency DESC
    `),
  };
  return (ee.set(e, i), i);
}
function Fe(e) {
  return `"${e.replace(/"/g, '""')}"`;
}
function te(e) {
  const t = Array.from(e);
  for (; t.length > 0; ) {
    const i = t.pop().codePointAt(0);
    if (i < 1114111) return t.join("") + String.fromCodePoint(i + 1);
  }
  return e + "";
}
function ie(e, t) {
  return _.isEligibleSuggestion(
    { value: e.url, url: e.url, title: e.title ?? "" },
    t,
  );
}
function Ue(e, t, i) {
  if (t.length > 128) return [];
  const a = _.tokenizeSearchQuery(t.toLowerCase());
  if (a.length > 4 || !a.some(_.canFuzzyMatchTerm)) return [];
  const n = [...new Set(a)],
    s = _.createSuggestionQuery(t),
    r = we(e),
    o = new Set(),
    E = r.frequent.all();
  for (const c of E)
    if (!i.has(c.id) && ie(c, s) && (o.add(c.id), o.size >= J)) return [...o];
  const d = new Set();
  for (const c of n) {
    if (!_.canFuzzyMatchTerm(c)) continue;
    const p = Array.from(c),
      m = new Set([p.slice(0, 3).join(""), p.slice(0, 2).join(""), p[0]]),
      u = new Set();
    for (const S of m) {
      const g = te(S);
      let y = S;
      for (let R = 0; R < Me; R++) {
        const h = r.vocabulary.get(y, g);
        if (
          !h ||
          ((y = Array.from(h.term).length === 33 ? te(h.term) : h.term + ""),
          _.isFuzzyTermMatch(c, h.term) && u.add(h.term),
          u.size >= Q)
        )
          break;
      }
      if (u.size >= Q) break;
    }
    for (const S of u) d.add(Fe(S));
  }
  if (d.size > 0) {
    const c = r.matches.all([...d].join(" OR "));
    for (const p of c)
      if ((!i.has(p.id) && ie(p, s) && o.add(p.id), o.size >= J)) break;
  }
  return [...o];
}
let M = () => {};
function He(e) {
  M = e;
}
const l = {
    debug: (e, ...t) => M("debug", e, t),
    info: (e, ...t) => M("info", e, t),
    warn: (e, ...t) => M("warn", e, t),
    error: (e, ...t) => M("error", e, t),
  },
  ue = `
  p.id as place_id,
  p.last_visit_id as visit_id,
  p.url,
  p.title,
  p.frecency,
  p.typed_count,
  p.visit_count,
  p.favicon_url,
  p.last_visit_time as timestamp,
  '' as summary,
  '' as summary_title,
  '' as tab_id
`,
  ae = `
  v.id as visit_id,
  p.id as place_id,
  p.url,
  p.title,
  p.frecency,
  p.typed_count,
  p.favicon_url,
  v.visit_date as timestamp,
  v.summary,
  v.summary_title,
  v.tab_id
`,
  me = `
  FROM places p
  JOIN visits v ON p.id = v.place_id
`,
  x = "WHERE p.hidden = 0 AND p.url NOT LIKE 'orbitra://%'";
function be(e) {
  return e.replace(/[\\%_]/g, (t) => `\\${t}`);
}
function ge(e) {
  const t = _.tokenizeSearchQuery(e),
    i = t.map(() => "(p.url LIKE ? ESCAPE '\\' OR p.title LIKE ? ESCAPE '\\')"),
    a = t.flatMap((n) => {
      const s = `%${be(n)}%`;
      return [s, s];
    });
  return { conditions: i, params: a };
}
function fe(e) {
  return _.tokenizeSearchQuery(e)
    .map((t) => `"${t.replace(/"/g, '""')}"*`)
    .join(" AND ");
}
function xe(e, t) {
  const i = ge(e);
  return !t || i.conditions.length === 0
    ? i
    : {
        conditions: [
          `(p.id IN (SELECT rowid FROM places_fts WHERE places_fts MATCH ?) OR (${i.conditions.join(" AND ")}))`,
        ],
        params: [fe(e), ...i.params],
      };
}
function Pe(e = "p.frecency DESC") {
  return `
    SELECT
      ${ue}
    FROM places_fts f
    JOIN places p ON p.id = f.rowid
    ${x} AND places_fts MATCH ?
    ORDER BY ${e}
    LIMIT ? OFFSET ?
  `;
}
function Y(e) {
  return e.length > 0 ? `${x} AND ${e.join(" AND ")}` : x;
}
function U(e = []) {
  const t = e.length > 0 ? "+p.frecency" : "p.frecency";
  return `
    SELECT
      ${ue}
    FROM places p
    ${Y(e)}
    ORDER BY ${t} DESC
    LIMIT ? OFFSET ?
  `;
}
function Be() {
  return `SELECT COUNT(*) AS total FROM places p ${x}`;
}
function We(e = [], { fewMatches: t = !1 } = {}) {
  const i = Y(e);
  return t
    ? `
      WITH matched_places AS MATERIALIZED (SELECT p.id FROM places p ${i})
      SELECT ${ae}
      FROM visits v JOIN places p ON p.id = v.place_id
      WHERE v.place_id IN (SELECT id FROM matched_places)
      ORDER BY v.visit_date DESC, v.id DESC
      LIMIT ? OFFSET ?
    `
    : `
    SELECT ${ae}
    ${me}
    ${i}
    ORDER BY v.visit_date DESC, v.id DESC
    LIMIT ? OFFSET ?
  `;
}
function ze(e = []) {
  return `SELECT COUNT(*) AS total ${me} ${Y(e)}`;
}
async function Ve(e) {
  const t = Date.now(),
    i = { min: Date.UTC(1990, 0, 1) * 1e3, max: t * 1e3 };
  e.prepare("BEGIN TRANSACTION").run();
  try {
    (e.exec(
      "CREATE TEMP TABLE history_timestamp_repairs (id INTEGER PRIMARY KEY)",
    ),
      e
        .prepare(
          `INSERT INTO history_timestamp_repairs (id)
       SELECT id FROM places WHERE last_visit_time BETWEEN @min AND @max
       UNION
       SELECT place_id FROM visits WHERE visit_date BETWEEN @min AND @max`,
        )
        .run(i));
    const a = e
        .prepare(
          `UPDATE visits SET visit_date = CAST(visit_date / 1000 AS INTEGER)
         WHERE visit_date BETWEEN @min AND @max`,
        )
        .run(i),
      n = e
        .prepare(
          `UPDATE places SET
           last_visit_time = MAX(
             CASE WHEN last_visit_time BETWEEN @min AND @max
               THEN CAST(last_visit_time / 1000 AS INTEGER)
               ELSE COALESCE(last_visit_time, 0) END,
             COALESCE((SELECT MAX(visit_date) FROM visits WHERE place_id = places.id), 0)
           ),
           last_visit_id = (
             SELECT id FROM visits WHERE place_id = places.id
             ORDER BY visit_date DESC, id DESC LIMIT 1
           ),
           frecency = CASE
             WHEN EXISTS (SELECT 1 FROM visits WHERE place_id = places.id)
             THEN ${k()}
             ELSE frecency END
         WHERE id IN (SELECT id FROM history_timestamp_repairs)`,
        )
        .run({ ...i, now: t });
    (e.exec("DROP TABLE history_timestamp_repairs"),
      e.prepare("COMMIT").run(),
      l.info("Repaired imported history timestamps", {
        visits: a.changes,
        places: n.changes,
      }));
  } catch (a) {
    throw (e.prepare("ROLLBACK").run(), a);
  }
}
const _e = 100,
  H = new WeakMap(),
  w = new WeakMap(),
  P = new WeakMap();
function K(e, t) {
  const i = P.get(e);
  return () => {
    const a = P.get(e);
    return a && a !== i ? Math.max(t, a.time) : t;
  };
}
function z(e, t) {
  const i = (H.get(e) ?? Promise.resolve()).then(() => {
      if (!e.open) throw new Error("History database closed");
      return t();
    }),
    a = i.then(
      () => {},
      () => {},
    );
  return (
    H.set(e, a),
    a.then(() => {
      H.get(e) === a && H.delete(e);
    }),
    i
  );
}
function F(e, t) {
  const i = e.pragma("busy_timeout", { simple: !0 });
  e.pragma("busy_timeout = 0");
  try {
    return e.transaction(t).immediate();
  } finally {
    e.open && e.pragma(`busy_timeout = ${i}`);
  }
}
function Te(e) {
  e.exec(`CREATE TABLE IF NOT EXISTS site_engagement_rebase (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    last_engagement_time INTEGER NOT NULL,
    source_offset INTEGER NOT NULL,
    source_time_zone TEXT,
    target_time INTEGER NOT NULL,
    target_offset INTEGER NOT NULL,
    target_time_zone TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_site_engagement_offset ON site_engagement(time_offset);`);
}
function B(e) {
  return e
    .prepare(
      `SELECT last_engagement_time AS lastEngagementTime,
    source_offset AS sourceOffset, source_time_zone AS sourceTimeZone, target_time AS now,
    target_offset AS targetOffset, target_time_zone AS targetTimeZone
    FROM site_engagement_rebase WHERE id = 1`,
    )
    .get();
}
const A = `origin, raw_score AS rawScore, points_added_today AS pointsAddedToday,
  last_engagement_time AS lastEngagementTime, time_offset AS timeOffset`;
function Ge(e) {
  e.exec(`
    CREATE TABLE IF NOT EXISTS site_engagement (
      origin TEXT PRIMARY KEY,
      raw_score REAL NOT NULL,
      points_added_today REAL NOT NULL,
      last_engagement_time INTEGER NOT NULL,
      time_offset INTEGER NOT NULL DEFAULT 0,
      cleanup_time INTEGER
    );
    CREATE TABLE IF NOT EXISTS site_engagement_metadata (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      last_engagement_time INTEGER NOT NULL,
      time_offset INTEGER NOT NULL DEFAULT 0,
      rebase_time_zone TEXT
    );
  `);
}
async function $e(e) {
  const t = e.prepare("PRAGMA table_info(site_engagement)").all(),
    i = e.prepare("PRAGMA table_info(site_engagement_metadata)").all();
  (t.some((s) => s.name === "time_offset") ||
    e.exec(
      "ALTER TABLE site_engagement ADD COLUMN time_offset INTEGER NOT NULL DEFAULT 0",
    ),
    t.some((s) => s.name === "cleanup_time") ||
      e.exec("ALTER TABLE site_engagement ADD COLUMN cleanup_time INTEGER"),
    i.some((s) => s.name === "time_offset") ||
      e.exec(
        "ALTER TABLE site_engagement_metadata ADD COLUMN time_offset INTEGER NOT NULL DEFAULT 0",
      ),
    i.some((s) => s.name === "rebase_time_zone") ||
      e.exec(
        "ALTER TABLE site_engagement_metadata ADD COLUMN rebase_time_zone TEXT",
      ),
    e.exec(`CREATE INDEX IF NOT EXISTS idx_site_engagement_last_time
      ON site_engagement(last_engagement_time);
    CREATE INDEX IF NOT EXISTS idx_site_engagement_cleanup_time ON site_engagement(cleanup_time);`),
    Te(e));
  const a = e.prepare(
      `SELECT ${A} FROM site_engagement WHERE cleanup_time IS NULL LIMIT 500`,
    ),
    n = e.prepare(
      "UPDATE site_engagement SET cleanup_time = ? WHERE origin = ?",
    );
  for (;;) {
    const s = a.all();
    if (s.length === 0) return;
    (e.transaction(() => {
      for (const r of s) n.run(_.getSiteEngagementCleanupTime(r), r.origin);
    })(),
      await W.setImmediate());
  }
}
function L(e) {
  return e
    .prepare(
      `SELECT last_engagement_time AS lastEngagementTime, time_offset AS timeOffset,
      rebase_time_zone AS rebaseTimeZone FROM site_engagement_metadata WHERE id = 1`,
    )
    .get();
}
function C(e, t) {
  e.prepare(
    `INSERT INTO site_engagement_metadata (id, last_engagement_time, time_offset, rebase_time_zone)
     VALUES (1, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET
       last_engagement_time = excluded.last_engagement_time,
       time_offset = excluded.time_offset,
       rebase_time_zone = excluded.rebase_time_zone`,
  ).run(t.lastEngagementTime, t.timeOffset, t.rebaseTimeZone);
}
function V(e) {
  if (
    !(!e?.timeOffset || !e.rebaseTimeZone) &&
    e.rebaseTimeZone !== Intl.DateTimeFormat().resolvedOptions().timeZone
  )
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: e.rebaseTimeZone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
}
function G(e, t, i) {
  const a = e.lastEngagementTime + t;
  let n = e.pointsAddedToday;
  if (e.timeOffset !== t) {
    const s = e.lastEngagementTime + e.timeOffset;
    i
      ? i.format(s) !== i.format(a) && (n = 0)
      : (n = _.getSiteEngagementPointsAddedToday(
          { ...e, lastEngagementTime: s },
          a,
        ));
  }
  return { rawScore: e.rawScore, pointsAddedToday: n, lastEngagementTime: a };
}
function $(e, t, i, a) {
  const n = { ...i, lastEngagementTime: i.lastEngagementTime - a };
  e.prepare(
    `INSERT INTO site_engagement
      (origin, raw_score, points_added_today, last_engagement_time, time_offset, cleanup_time)
     VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(origin) DO UPDATE SET
       raw_score = excluded.raw_score,
       points_added_today = excluded.points_added_today,
       last_engagement_time = excluded.last_engagement_time,
       time_offset = excluded.time_offset,
       cleanup_time = excluded.cleanup_time`,
  ).run(
    t,
    n.rawScore,
    n.pointsAddedToday,
    n.lastEngagementTime,
    a,
    _.getSiteEngagementCleanupTime(n),
  );
}
function ye(e) {
  const t = new Intl.DateTimeFormat("en-CA", {
      timeZone: e.targetTimeZone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
    i =
      e.sourceOffset && e.sourceTimeZone
        ? new Intl.DateTimeFormat("en-CA", {
            timeZone: e.sourceTimeZone,
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })
        : t;
  return (a) =>
    _.rebaseSiteEngagementScore(
      G(a, e.sourceOffset, i),
      e.lastEngagementTime,
      e.now,
      t,
    );
}
async function ne(e) {
  const t = B(e);
  if (!t) return;
  const i = ye(t),
    a = e.prepare(`SELECT ${A} FROM site_engagement
    WHERE time_offset < ? LIMIT ?`),
    n = e.prepare("DELETE FROM site_engagement WHERE origin = ?");
  for (;;) {
    if (!e.open) throw new Error("History database closed");
    if (B(e)?.targetOffset !== t.targetOffset) return;
    const s = a.all(t.targetOffset, _e);
    if (s.length === 0) {
      F(e, () => e.prepare("DELETE FROM site_engagement_rebase").run());
      return;
    }
    (F(e, () => {
      const r = performance.now();
      for (const o of s) {
        const E = i(o);
        if (
          (_.getSiteEngagementScore(E, t.now) <=
          _.SITE_ENGAGEMENT_CLEANUP_THRESHOLD
            ? n.run(o.origin)
            : $(e, o.origin, E, t.targetOffset),
          performance.now() - r >= 4)
        )
          break;
      }
    }),
      await W.setImmediate());
  }
}
async function Se(e, t) {
  await ne(e);
  const i = t(),
    a = L(e);
  if (a)
    for (
      _.isSiteEngagementStale(a.lastEngagementTime, i) &&
      (F(e, () => {
        const n = Intl.DateTimeFormat().resolvedOptions().timeZone,
          s = V(a),
          r = e
            .prepare(
              "SELECT MAX(last_engagement_time) AS time FROM site_engagement",
            )
            .get();
        if (r.time === null) return;
        if (
          i >= a.lastEngagementTime &&
          r.time + a.timeOffset <= a.lastEngagementTime &&
          !s
        ) {
          const d = _.rebaseSiteEngagementScore(
              {
                rawScore: 0,
                pointsAddedToday: 0,
                lastEngagementTime: a.lastEngagementTime,
              },
              a.lastEngagementTime,
              i,
            ),
            c = a.timeOffset + d.lastEngagementTime - a.lastEngagementTime;
          C(e, {
            lastEngagementTime: r.time + c,
            timeOffset: c,
            rebaseTimeZone: n,
          });
          return;
        }
        const o = a.timeOffset + 1,
          E = _.rebaseSiteEngagementScore(
            {
              rawScore: 0,
              pointsAddedToday: 0,
              lastEngagementTime: r.time + a.timeOffset,
            },
            a.lastEngagementTime,
            i,
          );
        (e
          .prepare(
            `INSERT INTO site_engagement_rebase
        (id, last_engagement_time, source_offset, source_time_zone, target_time, target_offset, target_time_zone)
        VALUES (1, ?, ?, ?, ?, ?, ?)`,
          )
          .run(a.lastEngagementTime, a.timeOffset, a.rebaseTimeZone, i, o, n),
          C(e, {
            lastEngagementTime: E.lastEngagementTime,
            timeOffset: o,
            rebaseTimeZone: n,
          }));
      }),
      await ne(e));
      ;

    ) {
      if (!e.open) throw new Error("History database closed");
      const n = L(e)?.timeOffset ?? 0,
        s = e
          .prepare(
            "SELECT origin FROM site_engagement WHERE cleanup_time <= ? LIMIT ?",
          )
          .all(t() - n, _e);
      if (s.length === 0) return;
      (F(e, () => {
        const r = e.prepare("DELETE FROM site_engagement WHERE origin = ?");
        for (const o of s) r.run(o.origin);
      }),
        await W.setImmediate());
    }
}
async function q(e, t) {
  (B(e) || _.isSiteEngagementStale(L(e)?.lastEngagementTime ?? null, t())) &&
    (await Se(e, t));
}
function Xe(e, t = Date.now()) {
  const i = K(e, t);
  return z(e, () => Se(e, i));
}
function ke(e, t, i, a = Date.now()) {
  const n = _.getSiteEngagementOrigin(t);
  if (!n) return Promise.resolve(void 0);
  const s = { origin: n, cancelled: !1 };
  let r = w.get(e);
  return (
    r || ((r = new Set()), w.set(e, r)),
    r.add(s),
    z(e, async () => {
      if (!s.cancelled && (await q(e, () => a), !s.cancelled))
        return F(e, () => {
          const o = L(e),
            E = o?.timeOffset ?? 0,
            d = e
              .prepare(`SELECT ${A} FROM site_engagement WHERE origin = ?`)
              .get(n),
            c = d ? G(d, E, V(o)) : void 0,
            p = c ? _.getSiteEngagementScore(c, a) : 0,
            m = _.addSiteEngagementPoints(c, _.SITE_ENGAGEMENT_POINTS[i], a);
          if (
            ($(e, n, m, E),
            C(e, {
              lastEngagementTime: a,
              timeOffset: E,
              rebaseTimeZone: o?.rebaseTimeZone ?? null,
            }),
            p !== m.rawScore)
          )
            return { origin: n, previousScore: p, score: m.rawScore };
        });
    }).finally(() => {
      (r.delete(s), r.size === 0 && w.delete(e));
    })
  );
}
function Re(e, t) {
  const i = L(e),
    a = i?.timeOffset ?? 0,
    n = V(i);
  let s;
  if (t) {
    const r = new Set(t),
      o = [...r];
    if (
      e
        .prepare(
          "SELECT COUNT(*) AS count FROM (SELECT 1 FROM site_engagement LIMIT ?)",
        )
        .get(o.length + 1).count <= o.length
    )
      s = e
        .prepare(`SELECT ${A} FROM site_engagement LIMIT ?`)
        .all(o.length)
        .filter((d) => r.has(d.origin));
    else {
      s = [];
      for (let d = 0; d < o.length; d += 900) {
        const c = o.slice(d, d + 900),
          p = c.map(() => "?").join(", "),
          m = e.prepare(
            `SELECT ${A} FROM site_engagement WHERE origin IN (${p})`,
          );
        s.push(...m.all(...c));
      }
    }
  } else s = e.prepare(`SELECT ${A} FROM site_engagement`).all();
  return s.map((r) => ({ origin: r.origin, ...G(r, a, n) }));
}
function Ye(e, t = Date.now(), i) {
  const a = K(e, t);
  return z(e, async () => {
    await q(e, a);
    const n = a();
    return new Map(
      Re(e, i).map((s) => [s.origin, _.getSiteEngagementScore(s, n)]),
    );
  });
}
function Ke(e, t = Date.now()) {
  const i = K(e, t);
  return z(e, async () => {
    await q(e, i);
    const a = i();
    return Re(e).map((n) => ({
      ...n,
      score: _.getSiteEngagementScore(n, a),
      pointsAddedToday: _.getSiteEngagementPointsAddedToday(n, a),
    }));
  });
}
function qe(e, t, i = Date.now()) {
  if (t.length === 0 || L(e)) return;
  const a = _.importSiteEngagementScores(t, i);
  e.transaction(() => {
    for (const [n, s] of a.scores) $(e, n, s, 0);
    a.lastEngagementTime !== null &&
      C(e, {
        lastEngagementTime: a.lastEngagementTime,
        timeOffset: 0,
        rebaseTimeZone: null,
      });
  })();
}
function Ze(e, t = Date.now()) {
  for (const i of w.get(e) ?? []) i.cancelled = !0;
  (e.transaction(() => {
    (e.prepare("DELETE FROM site_engagement_rebase").run(),
      e.prepare("DELETE FROM site_engagement").run(),
      C(e, { lastEngagementTime: t, timeOffset: 0, rebaseTimeZone: null }));
  })(),
    P.set(e, { time: t }));
}
function se(e, t, i = Date.now()) {
  const a = new Map();
  for (const m of t) {
    const u = _.getSiteEngagementOrigin(m);
    u && a.set(u, (a.get(u) ?? 0) + 1);
  }
  if (a.size === 0) return;
  for (const m of w.get(e) ?? []) a.has(m.origin) && (m.cancelled = !0);
  const n = L(e),
    s = n?.timeOffset ?? 0,
    r = V(n),
    o = B(e),
    E = o ? ye(o) : void 0,
    d = e.prepare(`SELECT ${A} FROM site_engagement WHERE origin = ?`),
    c = e.prepare(`
    SELECT COUNT(*) AS count,
      MAX(COALESCE(
        (SELECT visit_date FROM visits WHERE place_id = p.id ORDER BY visit_date DESC LIMIT 1),
        p.last_visit_time
      )) AS lastVisit
    FROM places p WHERE engagement_origin = ?
  `),
    p = e.prepare("DELETE FROM site_engagement WHERE origin = ?");
  for (const [m, u] of a) {
    const S = d.get(m);
    if (!S) continue;
    const g = o && E && S.timeOffset < o.targetOffset ? E(S) : G(S, s, r);
    if (
      o &&
      _.getSiteEngagementScore(g, o.now) <= _.SITE_ENGAGEMENT_CLEANUP_THRESHOLD
    ) {
      p.run(m);
      continue;
    }
    const y = c.get(m),
      R = _.reduceSiteEngagementForDeletion(
        g,
        { deletedUrls: u, remainingUrls: y.count, lastVisit: y.lastVisit },
        i,
      );
    R ? $(e, m, R, s) : p.run(m);
  }
  (C(e, {
    lastEngagementTime: i,
    timeOffset: s,
    rebaseTimeZone: n?.rebaseTimeZone ?? null,
  }),
    P.set(e, { time: i }));
}
const je = [
  { id: 1, name: "json_to_sqlite", run: at },
  { id: 2, name: "recalculate_frecency_scores", run: nt },
  { id: 3, name: "drop_history_vector_data", run: st },
  { id: 4, name: "unique_places_url_and_frecency_fix", run: rt },
  { id: 5, name: "add_places_typed_count", run: re },
  { id: 6, name: "create_places_fts_index", run: ot },
  { id: 7, name: "repair_imported_history_timestamps", run: Ve },
  { id: 8, name: "repair_imported_typed_counts", run: re },
  { id: 9, name: "address_bar_selections", run: async (e) => Ne(e) },
  { id: 10, name: "site_engagement", run: async (e) => Ge(e) },
  { id: 11, name: "index_history_engagement_origins", run: Je },
  { id: 12, name: "lazy_site_engagement_rebasing", run: async (e) => $e(e) },
  {
    id: 13,
    name: "resumable_site_engagement_rebasing",
    run: async (e) => Te(e),
  },
];
async function Je(e) {
  e
    .prepare("PRAGMA table_info(places)")
    .all()
    .some((r) => r.name === "engagement_origin") ||
    e.exec("ALTER TABLE places ADD COLUMN engagement_origin TEXT");
  const i = e.prepare(
      "SELECT id, url FROM places WHERE id > ? AND engagement_origin IS NULL ORDER BY id LIMIT 250",
    ),
    a = e.prepare("UPDATE places SET engagement_origin = ? WHERE id = ?"),
    n = e.transaction((r) => {
      for (const o of r) a.run(_.getSiteEngagementOrigin(o.url), o.id);
    });
  let s = Number.MIN_SAFE_INTEGER;
  for (;;) {
    const r = i.all(s);
    if (r.length === 0) break;
    (n(r), (s = r[r.length - 1].id), await new Promise((o) => setImmediate(o)));
  }
  e.exec(`CREATE INDEX IF NOT EXISTS idx_places_engagement_origin
    ON places(engagement_origin) WHERE engagement_origin IS NOT NULL`);
}
function Qe(e) {
  e.exec(`
    CREATE TABLE IF NOT EXISTS migrations (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      executed_at INTEGER NOT NULL
    )
  `);
}
function et(e, t) {
  return !!e.prepare("SELECT 1 FROM migrations WHERE id = ?").get(t);
}
function tt(e, t) {
  e.prepare(
    "INSERT INTO migrations (id, name, executed_at) VALUES (?, ?, ?)",
  ).run(t.id, t.name, Date.now());
}
async function it(e, t) {
  if (!e) return !1;
  try {
    Qe(e);
    let i = !1;
    for (const a of je)
      if (et(e, a.id))
        l.debug(`Migration ${a.name} already completed, skipping`);
      else {
        l.info(`Running migration: ${a.name}`);
        try {
          (await a.run(e, t),
            tt(e, a),
            (i = !0),
            l.info(`Successfully completed migration: ${a.name}`));
        } catch (n) {
          throw (l.error(`Migration ${a.name} failed:`, n), n);
        }
      }
    return i;
  } catch (i) {
    throw (l.error("Error during migrations:", i), i);
  }
}
async function at(e, t) {
  try {
    const i = le.join(t.path, "timeline-index");
    if (!j.existsSync(i)) {
      l.info("No JSON file found, skipping JSON to SQLite migration");
      return;
    }
    if (e.prepare("SELECT COUNT(*) as count FROM places").get().count > 0) {
      l.info("Database already has entries, skipping JSON migration");
      return;
    }
    l.info("Migrating from JSON file history to SQLite...");
    let s;
    try {
      const o = j.readFileSync(i, "utf8");
      (l.info(`Read JSON file of size: ${o.length} bytes`),
        (s = JSON.parse(o)));
    } catch (o) {
      const { errorName: E, errorCode: d } = T.getSafeErrorLogMetadata(o);
      throw new Error(
        `Legacy history JSON file could not be read or parsed (${d ?? E})`,
      );
    }
    const r = Object.values(s);
    if ((l.info(`Found ${r.length} entries to migrate`), r.length === 0))
      return;
    e.prepare("BEGIN TRANSACTION").run();
    try {
      const o = e.prepare(`
        INSERT INTO places (url, title, visit_count, last_visit_time, favicon_url)
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(url) DO UPDATE SET
          title = COALESCE(excluded.title, title),
          last_visit_time = MAX(excluded.last_visit_time, last_visit_time),
          favicon_url = COALESCE(excluded.favicon_url, favicon_url)
        RETURNING id
      `),
        E = e.prepare("PRAGMA table_info(visits)").all(),
        d = new Set(E.map((S) => S.name));
      let c = `
        INSERT INTO visits (place_id, visit_date, visit_type`;
      (d.has("summary") && (c += ", summary"),
        d.has("content") && (c += ", content"),
        d.has("tab_id") && (c += ", tab_id"),
        (c += ") VALUES (?, ?, ?"),
        d.has("summary") && (c += ", ?"),
        d.has("content") && (c += ", ?"),
        d.has("tab_id") && (c += ", ?"),
        (c += ")"));
      const p = e.prepare(c);
      let m = 0,
        u = 0;
      for (const [S, g] of r.entries())
        try {
          if (!g.url) {
            l.warn("Skipping entry with no URL");
            continue;
          }
          let y, R;
          try {
            g.timestamp
              ? (y =
                  g.timestamp instanceof Date
                    ? g.timestamp.getTime()
                    : new Date(g.timestamp).getTime())
              : (y = Date.now());
          } catch (f) {
            (l.error(`Error parsing timestamp for legacy entry ${S}:`, f),
              (y = Date.now()));
          }
          try {
            g.lastVisit
              ? (R =
                  g.lastVisit instanceof Date
                    ? g.lastVisit.getTime()
                    : new Date(g.lastVisit).getTime())
              : (R = y);
          } catch (f) {
            (l.error(`Error parsing lastVisit for legacy entry ${S}:`, f),
              (R = y));
          }
          const h = o.get(g.url, g.title || "", 1, R, g.faviconUrl || "");
          if (h?.id) {
            const f = [h.id, y, T.VisitType.LINK];
            (d.has("summary") && f.push(g.summary || ""),
              d.has("content") && f.push(g.content || ""),
              d.has("tab_id") && f.push(g.id || ""),
              p.run(...f),
              m++,
              m % 100 === 0 && l.info(`Migrated ${m} entries so far...`));
          }
        } catch (y) {
          if ((u++, l.error(`Error migrating legacy entry ${S}:`, y), u > 50))
            throw (
              l.error("Too many errors during migration, aborting"),
              new Error("Migration aborted due to excessive errors")
            );
        }
      (e.prepare("COMMIT").run(),
        l.info(
          `Migrated ${m} of ${r.length} history entries to SQLite database (${u} errors)`,
        ));
    } catch (o) {
      throw (e.prepare("ROLLBACK").run(), o);
    }
  } catch (i) {
    throw (l.error("Failed to migrate from JSON file:", i), i);
  }
}
async function nt() {}
async function st(e) {
  try {
    l.info("Starting history vector data cleanup migration...");
    const i = e
      .prepare("PRAGMA table_info(visits)")
      .all()
      .some((a) => a.name === "embedding");
    i &&
      (l.info("Dropping visits.embedding column"),
      e.exec("ALTER TABLE visits DROP COLUMN embedding"));
    try {
      e.exec("DROP TABLE IF EXISTS vss_visits");
    } catch (a) {
      l.warn("Could not drop vss_visits table during vector cleanup", {
        error: a,
      });
    }
    (i && e.exec("VACUUM"),
      l.info("Finished history vector data cleanup migration"));
  } catch (t) {
    throw (l.error("Failed to clean up history vector data:", t), t);
  }
}
async function rt(e) {
  e.prepare("BEGIN TRANSACTION").run();
  try {
    const t = e
      .prepare("SELECT url FROM places GROUP BY url HAVING COUNT(*) > 1")
      .all();
    if (t.length > 0) {
      l.info(`Merging ${t.length} duplicate place URLs`);
      const a = e.prepare(
          "SELECT id, visit_count, last_visit_time FROM places WHERE url = ? ORDER BY last_visit_time DESC, id ASC",
        ),
        n = e.prepare("UPDATE visits SET place_id = ? WHERE place_id = ?"),
        s = e.prepare("DELETE FROM places WHERE id = ?"),
        r = e.prepare(`UPDATE places SET
           visit_count = ?,
           last_visit_time = ?,
           last_visit_id = (SELECT id FROM visits WHERE place_id = ? ORDER BY visit_date DESC LIMIT 1)
         WHERE id = ?`);
      for (const { url: o } of t) {
        const E = a.all(o),
          [d, ...c] = E;
        let p = d.visit_count,
          m = d.last_visit_time ?? 0;
        for (const u of c)
          ((p += u.visit_count),
            (m = Math.max(m, u.last_visit_time ?? 0)),
            n.run(d.id, u.id),
            s.run(u.id));
        r.run(p, m, d.id, d.id);
      }
    }
    (e.exec("DROP INDEX IF EXISTS idx_places_url"),
      e.exec("CREATE UNIQUE INDEX idx_places_url ON places(url)"));
    const i = e
      .prepare(`UPDATE places SET frecency = ${k()}`)
      .run({ now: Date.now() });
    (e.prepare("COMMIT").run(),
      l.info(
        `Enforced unique places.url and recalculated frecency for ${i.changes} places`,
      ));
  } catch (t) {
    throw (e.prepare("ROLLBACK").run(), t);
  }
}
async function re(e) {
  (e
    .prepare("PRAGMA table_info(places)")
    .all()
    .some((i) => i.name === "typed_count") ||
    e.exec(
      "ALTER TABLE places ADD COLUMN typed_count INTEGER NOT NULL DEFAULT 0",
    ),
    e
      .prepare(
        `UPDATE places SET typed_count =
       (SELECT COUNT(*) FROM visits
        WHERE visits.place_id = places.id AND visits.visit_type = ?)`,
      )
      .run(T.VisitType.TYPED),
    l.info("Backfilled places.typed_count from typed visits"));
}
async function ot(e) {
  try {
    e.exec(`
      CREATE VIRTUAL TABLE IF NOT EXISTS places_fts USING fts5(
        url, title,
        content='places', content_rowid='id',
        tokenize="unicode61 remove_diacritics 2",
        prefix='2 3 4'
      )
    `);
  } catch (t) {
    l.warn("FTS5 unavailable; history search will use LIKE matching only", {
      error: t,
    });
    return;
  }
  (e.exec(`
    DROP TRIGGER IF EXISTS places_fts_after_insert;
    DROP TRIGGER IF EXISTS places_fts_after_delete;
    DROP TRIGGER IF EXISTS places_fts_after_update;

    CREATE TRIGGER places_fts_after_insert AFTER INSERT ON places BEGIN
      INSERT INTO places_fts(rowid, url, title) VALUES (new.id, new.url, new.title);
    END;

    CREATE TRIGGER places_fts_after_delete AFTER DELETE ON places BEGIN
      INSERT INTO places_fts(places_fts, rowid, url, title)
      VALUES ('delete', old.id, old.url, old.title);
    END;

    CREATE TRIGGER places_fts_after_update AFTER UPDATE OF url, title ON places BEGIN
      INSERT INTO places_fts(places_fts, rowid, url, title)
      VALUES ('delete', old.id, old.url, old.title);
      INSERT INTO places_fts(rowid, url, title) VALUES (new.id, new.url, new.title);
    END;
  `),
    e.exec("INSERT INTO places_fts(places_fts) VALUES ('rebuild')"),
    l.info("Created places_fts full-text index"));
}
const oe = 500,
  ct = 1e4;
class lt {
  profileDatabaseMap = new Map();
  initializations = new Map();
  transactionStates = new Map();
  frecencyUpdateIntervals = new Map();
  ftsAvailable = new Map();
  urlLock = new he();
  TRANSACTION_LOCK_TIMEOUT_MS = 6e4;
  getDatabaseForProfile(t) {
    return this.profileDatabaseMap.get(t);
  }
  getAddressBarSelections(t, i) {
    const a = this.profileDatabaseMap.get(t.id);
    return a ? ve(a, i) : new Map();
  }
  recordAddressBarSelection(t, i, a, n = Date.now()) {
    this.withInitializedDatabase(t, (s) => {
      try {
        Le(s, i, a, n);
      } catch {
        l.warn("Could not remember an address bar selection");
      }
    });
  }
  forgetAddressBarSelection(t, i) {
    this.withInitializedDatabase(t, (a) => {
      try {
        Ae(a, i);
      } catch {
        l.warn("Could not forget an address bar selection");
      }
    });
  }
  recordSiteEngagement(t, i, a, n = Date.now()) {
    return new Promise((s) => {
      this.withInitializedDatabase(
        t,
        (r) => {
          ke(r, i, a, n)
            .then((o) =>
              s(this.profileDatabaseMap.get(t.id) === r ? o : void 0),
            )
            .catch((o) => {
              (l.warn("Could not record site engagement", {
                profileId: t.id,
                ...T.getSafeErrorLogMetadata(o),
              }),
                s(void 0));
            });
        },
        () => s(void 0),
      );
    });
  }
  withInitializedDatabase(t, i, a) {
    const n = this.profileDatabaseMap.get(t.id);
    if (n) {
      i(n);
      return;
    }
    const s = this.initializations.get(t.id);
    if (!s) {
      a?.();
      return;
    }
    s.promise
      .then(() => {
        this.profileDatabaseMap.get(t.id) === s.db ? i(s.db) : a?.();
      })
      .catch((r) => {
        (l.warn("Could not finish queued history operation", {
          profileId: t.id,
          ...T.getSafeErrorLogMetadata(r),
        }),
          a?.());
      });
  }
  async getInitializedDatabase(t) {
    const i = this.initializations.get(t);
    if (!i) return this.profileDatabaseMap.get(t);
    try {
      await i.promise;
    } catch {
      return;
    }
    return this.profileDatabaseMap.get(t) === i.db ? i.db : void 0;
  }
  async getSiteEngagementScores(t, i = Date.now(), a) {
    const n = this.profileDatabaseMap.get(t.id);
    if (!n) return new Map();
    try {
      const s = await Ye(n, i, a);
      return this.profileDatabaseMap.get(t.id) === n ? s : new Map();
    } catch (s) {
      return (
        l.warn("Could not read site engagement", {
          profileId: t.id,
          ...T.getSafeErrorLogMetadata(s),
        }),
        new Map()
      );
    }
  }
  initializeSiteEngagementFromHistory(t, i) {
    const a = this.initializations.has(t.id) ? [...i] : i;
    this.withInitializedDatabase(t, (n) => qe(n, a));
  }
  async getSiteEngagementDetails(t, i = Date.now()) {
    const a = this.profileDatabaseMap.get(t.id);
    if (!a) return null;
    try {
      const n = await Ke(a, i);
      return this.profileDatabaseMap.get(t.id) === a ? n : null;
    } catch (n) {
      return (
        l.warn("Could not read site engagement details", {
          profileId: t.id,
          ...T.getSafeErrorLogMetadata(n),
        }),
        null
      );
    }
  }
  getRecentVisits(t, i) {
    const a = this.profileDatabaseMap.get(t.id);
    return a
      ? a
          .prepare(
            `SELECT p.url, v.tab_id AS tabId, v.visit_date AS visitedAt, v.visit_type AS visitType
         FROM visits v JOIN places p ON p.id = v.place_id
         WHERE v.visit_date >= ? AND v.tab_id IS NOT NULL`,
          )
          .all(i)
      : [];
  }
  async initialize(t) {
    if (!t) {
      l.error("No profile provided to initialize history");
      return;
    }
    const i = this.initializations.get(t.id);
    if (i) return i.promise;
    if (this.profileDatabaseMap.has(t.id)) return;
    let a;
    try {
      a = new Ie(le.join(t.path, "history.db"));
    } catch (s) {
      throw (l.error("Failed to initialize history database:", s), s);
    }
    const n = this.initializeProfileDatabase(t, a);
    this.initializations.set(t.id, { db: a, promise: n });
    try {
      await n;
    } finally {
      this.initializations.get(t.id)?.promise === n &&
        this.initializations.delete(t.id);
    }
  }
  async initializeProfileDatabase(t, i) {
    try {
      (i.pragma("journal_mode = WAL"), this.initializeDatabase(t, i));
      const a = await it(i, t);
      if (!i.open) return;
      a && l.info("Migrations completed successfully");
      const n = i
        .prepare(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='places_fts'",
        )
        .get();
      (this.profileDatabaseMap.set(t.id, i),
        this.transactionStates.set(t.id, !1),
        this.ftsAvailable.set(t.id, !!n),
        Xe(i).catch((r) => {
          l.warn("Could not clean up site engagement", {
            profileId: t.id,
            ...T.getSafeErrorLogMetadata(r),
          });
        }));
      const s = setInterval(
        () => void this.updateAllFrecencyScores(t),
        3600 * 1e3,
      );
      (this.frecencyUpdateIntervals.set(t.id, s),
        l.info(`History database initialized for profile: ${t.id}`, {
          migrationsPerformed: a,
        }));
    } catch (a) {
      if (!i.open) return;
      throw (
        l.error("Failed to initialize history database:", a),
        this.profileDatabaseMap.get(t.id) === i
          ? this.cleanupProfileResources(t.id)
          : i.close(),
        a
      );
    }
  }
  cleanupProfileResources(t) {
    const i = this.initializations.get(t);
    i &&
      (this.initializations.delete(t),
      i.db.open && this.profileDatabaseMap.get(t) !== i.db && i.db.close());
    const a = this.profileDatabaseMap.get(t);
    if (a) {
      try {
        a.close();
      } catch (s) {
        l.error(`Error closing database for profile ${t}:`, s);
      }
      this.profileDatabaseMap.delete(t);
    }
    (this.transactionStates.delete(t), this.ftsAvailable.delete(t));
    const n = this.frecencyUpdateIntervals.get(t);
    n && (clearInterval(n), this.frecencyUpdateIntervals.delete(t));
  }
  initializeDatabase(t, i) {
    try {
      (i
        .prepare(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='visits'",
        )
        .get() ||
        i.exec(`
          -- Places table for URLs and basic metadata
          CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url TEXT NOT NULL,
            title TEXT,
            visit_count INTEGER DEFAULT 0,
            last_visit_time INTEGER,
            frecency INTEGER DEFAULT -1,
            favicon_url TEXT,
            is_bookmarked BOOLEAN DEFAULT 0,
            hidden BOOLEAN DEFAULT 0
          );

          -- Visit history for detailed tracking with content metadata
          CREATE TABLE IF NOT EXISTS visits (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            place_id INTEGER NOT NULL,
            visit_date INTEGER NOT NULL,
            visit_type INTEGER NOT NULL,
            summary TEXT,
            summary_title TEXT,
            content TEXT,
            tab_id TEXT,
            FOREIGN KEY(place_id) REFERENCES places(id) ON DELETE CASCADE
          );

          -- Create needed indexes
          CREATE INDEX IF NOT EXISTS idx_places_url ON places(url);
          CREATE INDEX IF NOT EXISTS idx_places_frecency ON places(frecency);
          CREATE INDEX IF NOT EXISTS idx_places_visit_count ON places(visit_count);
          CREATE INDEX IF NOT EXISTS idx_places_last_visit ON places(last_visit_time);
          CREATE INDEX IF NOT EXISTS idx_visits_date ON visits(visit_date);
          CREATE INDEX IF NOT EXISTS idx_visits_place_id ON visits(place_id);
          CREATE INDEX IF NOT EXISTS idx_visits_tab_id ON visits(tab_id);
        `),
        i.pragma("journal_mode = WAL"));
      const s = i
        .prepare("PRAGMA table_info(visits)")
        .all()
        .map((E) => E.name);
      (s.includes("summary") ||
        (i.exec("ALTER TABLE visits ADD COLUMN summary TEXT"),
        l.info("Added summary column to visits table")),
        s.includes("content") ||
          (i.exec("ALTER TABLE visits ADD COLUMN content TEXT"),
          l.info("Added content column to visits table")),
        s.includes("tab_id") ||
          (i.exec("ALTER TABLE visits ADD COLUMN tab_id TEXT"),
          i.exec(
            "CREATE INDEX IF NOT EXISTS idx_visits_tab_id ON visits(tab_id)",
          ),
          l.info("Added tab_id column and index to visits table")),
        s.includes("summary_title") ||
          (i.exec("ALTER TABLE visits ADD COLUMN summary_title TEXT"),
          l.info("Added summary_title column to visits table")),
        i
          .prepare("PRAGMA table_info(places)")
          .all()
          .map((E) => E.name)
          .includes("last_visit_id") ||
          (i.exec("ALTER TABLE places ADD COLUMN last_visit_id INTEGER"),
          l.info("Added last_visit_id column to places table"),
          i.exec(`
          UPDATE places SET last_visit_id = (
            SELECT v.id FROM visits v 
            WHERE v.place_id = places.id 
            ORDER BY v.visit_date DESC 
            LIMIT 1
          )
        `),
          l.info("Backfilled last_visit_id for existing places")),
        i.exec(
          "CREATE INDEX IF NOT EXISTS idx_visits_place_date ON visits(place_id, visit_date DESC)",
        ));
    } catch (a) {
      this.handleDatabaseError("initializing database schema", a, t);
    }
  }
  async addHistoryVisit(t, i, a) {
    if (t.isAIControlledTab || t.visitType === T.VisitType.IGNORE) return;
    if (!(await this.getInitializedDatabase(i.id))?.open) {
      l.error("Cannot add history entry: Database not initialized");
      return;
    }
    try {
      return await this.executeInTransaction(
        i,
        "add history visit",
        async (s) => {
          const r = Date.now(),
            o = t.visitType || T.VisitType.LINK,
            E = t.tabType === "website" ? null : t.faviconUrl || null,
            d = t.title?.trim() ? t.title : null,
            c = (p, m) => {
              const u = m === T.VisitType.TYPED ? 1 : 0,
                S = s
                  .prepare(
                    `
            INSERT INTO places (url, title, visit_count, typed_count, last_visit_time, favicon_url, engagement_origin)
            VALUES (?, ?, 1, ?, ?, ?, ?)
            ON CONFLICT(url) DO UPDATE SET
              title = COALESCE(excluded.title, places.title),
              visit_count = places.visit_count + 1,
              typed_count = places.typed_count + excluded.typed_count,
              last_visit_time = excluded.last_visit_time,
              favicon_url = excluded.favicon_url,
              engagement_origin = excluded.engagement_origin
            RETURNING id
          `,
                  )
                  .get(p, d, u, r, E, _.getSiteEngagementOrigin(p));
              if (!S || S.id === void 0)
                throw new Error("Failed to get place ID after upsert");
              const g = S.id,
                y = s
                  .prepare(
                    `
          INSERT INTO visits (place_id, visit_date, visit_type, tab_id, summary, summary_title, content)
          VALUES (?, ?, ?, ?, NULL, NULL, NULL)
          RETURNING id
          `,
                  )
                  .get(g, r, m, t.id);
              if (!y || y.id === void 0)
                throw new Error("Failed to get visit ID after insert");
              (s
                .prepare("UPDATE places SET last_visit_id = ? WHERE id = ?")
                .run(y.id, g),
                this.updateFrecencyScore(g, i));
            };
          return (
            a && c(a, T.VisitType.TYPED),
            c(t.url, o),
            { url: t.url, tabId: t.id, visitedAt: r, visitType: o }
          );
        },
        t.url,
      );
    } catch (s) {
      this.handleDatabaseError("adding history entry", s, i);
      return;
    }
  }
  async updateHistoryVisit(t, i, a, n) {
    if (!(await this.getInitializedDatabase(n.id))?.open) {
      l.error("Cannot update history entry: Database not initialized");
      return;
    }
    try {
      await this.executeInTransaction(
        n,
        "update history entry",
        async (r) => {
          const o = r.prepare("SELECT id FROM places WHERE url = ?").get(i);
          if (!o) {
            l.debug("No place found for history update", {
              profileId: n.id,
              tabId: t,
              ...T.getSafeUrlLogMetadata(i),
            });
            return;
          }
          const E = o.id;
          if (
            (a.title &&
              r
                .prepare("UPDATE places SET title = ? WHERE id = ?")
                .run(a.title, E),
            a.summary || a.content || a.summaryTitle)
          ) {
            const d = [],
              c = [];
            if (
              (a.summary && (d.push("summary = ?"), c.push(a.summary)),
              a.summaryTitle &&
                (d.push("summary_title = ?"), c.push(a.summaryTitle)),
              a.content && (d.push("content = ?"), c.push(a.content)),
              d.length > 0)
            ) {
              const p = r
                .prepare(
                  "SELECT id FROM visits WHERE place_id = ? AND tab_id = ? ORDER BY visit_date DESC LIMIT 1",
                )
                .get(E, t);
              p &&
                (c.push(p.id),
                r
                  .prepare(`UPDATE visits SET ${d.join(", ")} WHERE id = ?`)
                  .run(...c));
            }
          }
        },
        i,
      );
    } catch (r) {
      this.handleDatabaseError("updating history entry", r, n);
    }
  }
  updateFrecencyScore(t, i) {
    const a = this.profileDatabaseMap.get(i.id);
    if (a)
      try {
        const n = this.calculateFrecency(t, i);
        a.prepare("UPDATE places SET frecency = ? WHERE id = ?").run(n, t);
      } catch (n) {
        this.handleDatabaseError("updating frecency score", n, i);
      }
  }
  calculateFrecency(t, i) {
    const a = this.profileDatabaseMap.get(i.id);
    if (!a) return -1;
    try {
      const n = a
        .prepare(
          `
        SELECT visit_date, visit_type
        FROM visits
        WHERE place_id = ?
        ORDER BY visit_date DESC
        LIMIT ?
      `,
        )
        .all(t, pe);
      return De(n);
    } catch (n) {
      return (this.handleDatabaseError("calculating frecency", n, i), -1);
    }
  }
  async updateAllFrecencyScores(t) {
    const i = await this.getInitializedDatabase(t.id);
    if (i?.open)
      try {
        const a = i.prepare(
            `UPDATE places SET frecency = ${k()} WHERE id >= @from AND id < @to`,
          ),
          { maxId: n } = i.prepare("SELECT MAX(id) AS maxId FROM places").get(),
          s = Date.now();
        let r = 0;
        for (let o = 0; o <= (n ?? 0); o += oe) {
          if (this.profileDatabaseMap.get(t.id) !== i) return;
          ((r += a.run({ now: s, from: o, to: o + oe }).changes),
            await new Promise((E) => setImmediate(E)));
        }
        l.info(`Updated frecency scores for ${r} places`);
      } catch (a) {
        this.handleDatabaseError("updating all frecency scores", a, t);
      }
  }
  async executeInTransaction(t, i, a, n) {
    const s = await this.getInitializedDatabase(t.id);
    if (!s?.open) throw new Error("Database not initialized");
    const r = async () => {
      if (!s.open || this.profileDatabaseMap.get(t.id) !== s)
        throw new Error("History database closed before operation");
      if (this.transactionStates.get(t.id))
        return (
          l.warn(
            `Transaction already in progress for profile ${t.id} during ${i}`,
          ),
          a(s)
        );
      try {
        (this.transactionStates.set(t.id, !0), s.prepare("BEGIN").run());
        const o = await a(s);
        return (s.prepare("COMMIT").run(), o);
      } catch (o) {
        try {
          s.open && s.prepare("ROLLBACK").run();
        } catch (E) {
          l.error(`Failed to rollback transaction during ${i}:`, E);
        }
        throw o;
      } finally {
        this.profileDatabaseMap.get(t.id) === s &&
          this.transactionStates.set(t.id, !1);
      }
    };
    if (n && n.length > 0) {
      const o = `${t.id}:${n}`;
      try {
        return await this.urlLock.acquire(o, async () => await r(), {
          timeout: this.TRANSACTION_LOCK_TIMEOUT_MS,
        });
      } catch (E) {
        return (
          l.warn("Lock acquire timeout. Proceeding without lock.", {
            profileId: t.id,
            operation: i,
            ...T.getSafeUrlLogMetadata(n),
            ...T.getSafeErrorLogMetadata(E),
          }),
          await r()
        );
      }
    }
    return await r();
  }
  searchPlaceCandidates(t, i, a, n) {
    let s = [];
    if (this.ftsAvailable.get(i))
      try {
        s = t.prepare(Pe()).all(fe(a), n, 0);
      } catch (c) {
        l.warn("places_fts query failed, falling back to LIKE search", {
          profileId: i,
          ...T.getSafeErrorLogMetadata(c),
        });
      }
    if (s.length >= n) return s;
    const { conditions: r, params: o } = ge(a),
      E = t.prepare(U(r)).all(...o, n, 0);
    if (s.length === 0) return E;
    const d = new Map();
    for (const c of [...s, ...E]) d.has(c.place_id) || d.set(c.place_id, c);
    return [...d.values()].sort((c, p) => p.frecency - c.frecency);
  }
  async getHistoryResults(t, i, a = 0, n = 5, s, r = !1) {
    const o = await this.getInitializedDatabase(i.id);
    if (!o?.open)
      return (
        l.error("Cannot search autocomplete: Database not initialized"),
        { suggestions: [], totalAmount: 0 }
      );
    try {
      let E, d;
      if (t?.trim()) {
        const c = this.searchPlaceCandidates(o, i.id, t, a + n);
        if (s) {
          const p = o.prepare(U(["p.url = ?"])).get(s, 1, 0);
          if (p) {
            const m = c.findIndex((u) => u.place_id === p.place_id);
            (m !== -1 && c.splice(m, 1), c.unshift(p));
          }
        }
        if (
          ((E = c.slice(a, a + n)),
          (d = c.length),
          r && this.ftsAvailable.get(i.id))
        )
          try {
            const p = Ue(o, t, new Set(c.map((m) => m.place_id)));
            if (p.length > 0) {
              const m = o
                .prepare(U([`p.id IN (${p.map(() => "?").join(",")})`]))
                .all(...p, p.length, 0);
              (E.push(...m), (d += m.length));
            }
          } catch (p) {
            l.warn("Could not retrieve fuzzy history suggestions", {
              profileId: i.id,
              ...T.getSafeErrorLogMetadata(p),
            });
          }
      } else {
        const { total: c } = o.prepare(Be()).get();
        ((E = o.prepare(U()).all(n, a)), (d = E.length > 0 ? c : 0));
      }
      return {
        suggestions: E.map((c) => ({
          url: c.url,
          title: c.title || c.url,
          frecency: c.frecency,
          typedCount: c.typed_count ?? 0,
          visitCount: c.visit_count ?? 0,
          summary: c.summary || "",
          faviconUrl: c.favicon_url || "",
          entry: {
            id: (c.visit_id ?? c.place_id).toString(),
            url: c.url,
            title: c.title || c.url,
            timestamp: new Date(c.timestamp),
            lastVisit: new Date(c.timestamp),
            summary: c.summary || "",
            summaryTitle: c.summary_title || "",
            faviconUrl: c.favicon_url || "",
            tabId: c.tab_id || "",
          },
        })),
        totalAmount: d,
      };
    } catch (E) {
      return (
        l.error("Error in history search:", {
          ...T.getSafeErrorLogMetadata(E),
          queryLength: t?.length ?? 0,
          offset: a,
          limit: n,
          profileId: i.id,
        }),
        { suggestions: [], totalAmount: 0 }
      );
    }
  }
  async getHistoryResultsChronological(t, i, a = 0, n = 5) {
    if (!(await this.getInitializedDatabase(i.id))?.open)
      return (
        l.error(
          "Cannot search history chronologically: Database not initialized",
        ),
        { suggestions: [], totalAmount: 0 }
      );
    try {
      return await this.executeInTransaction(
        i,
        "chronological history search",
        async (r) => {
          const { conditions: o, params: E } = t?.trim()
              ? xe(t, this.ftsAvailable.get(i.id) ?? !1)
              : { conditions: [], params: [] },
            { total: d } = r.prepare(ze(o)).get(...E);
          if (d === 0) return { suggestions: [], totalAmount: 0 };
          const c = o.length > 0 && d <= ct,
            p = r.prepare(We(o, { fewMatches: c })).all(...E, n, a),
            m = p.length > 0 ? d : 0;
          return {
            suggestions: p.map((u) => ({
              url: u.url,
              title: u.title || u.url,
              frecency: u.frecency,
              typedCount: u.typed_count ?? 0,
              summary: u.summary || "",
              faviconUrl: u.favicon_url || "",
              entry: {
                id: (u.visit_id ?? u.place_id).toString(),
                url: u.url,
                title: u.title || u.url,
                timestamp: new Date(u.timestamp),
                lastVisit: new Date(u.timestamp),
                summary: u.summary || "",
                summaryTitle: u.summary_title || "",
                faviconUrl: u.favicon_url || "",
                tabId: u.tab_id || "",
              },
            })),
            totalAmount: m,
          };
        },
      );
    } catch (r) {
      return (
        l.error("Error in chronological history search:", {
          ...T.getSafeErrorLogMetadata(r),
          queryLength: t?.length ?? 0,
          offset: a,
          limit: n,
          profileId: i.id,
        }),
        { suggestions: [], totalAmount: 0 }
      );
    }
  }
  async clearHistory(t, i = 0) {
    const a = await this.getInitializedDatabase(t.id);
    if (!a?.open) {
      l.error("Cannot clear history: Database not initialized");
      return;
    }
    try {
      if (i === 0)
        (a.prepare("BEGIN").run(),
          a.prepare("DELETE FROM visits").run(),
          a.prepare("DELETE FROM places").run(),
          Ze(a),
          a.prepare("COMMIT").run(),
          a.exec("VACUUM"),
          l.info("All history cleared successfully"));
      else {
        (a.prepare("BEGIN").run(),
          Oe(a, i),
          a.prepare("DELETE FROM visits WHERE visit_date >= ?").run(i));
        const n = a
          .prepare(
            `
          SELECT DISTINCT places.id, places.url FROM places
          LEFT JOIN visits ON places.id = visits.place_id
          WHERE visits.id IS NULL
        `,
          )
          .all();
        if (n && n.length > 0) {
          for (const s of n)
            a.prepare("DELETE FROM places WHERE id = ?").run(s.id);
          l.info(`Deleted ${n.length} orphaned places`);
        }
        (se(
          a,
          n.map((s) => s.url),
        ),
          a.prepare("COMMIT").run(),
          a.exec("VACUUM;"),
          l.info(
            `History cleared successfully for entries after ${new Date(i).toISOString()}`,
          ));
      }
    } catch (n) {
      (a && a.prepare("ROLLBACK").run(),
        this.handleDatabaseError("clearing history", n, t));
    }
  }
  async deleteHistoryEntry(t, i) {
    const a = await this.getInitializedDatabase(i.id);
    if (!a?.open) {
      l.error("Cannot delete history entry: Database not initialized");
      return;
    }
    try {
      const n = parseInt(t, 10);
      if (isNaN(n)) {
        l.error(`Invalid visit ID: ${t}`);
        return;
      }
      (l.info(`Starting deletion process for visit ID ${n}`),
        a.prepare("BEGIN").run(),
        l.info("Transaction started"));
      try {
        const s = a
          .prepare(
            `
          SELECT v.id, v.place_id, p.url,
          (SELECT COUNT(*) FROM visits WHERE place_id = v.place_id) as visit_count
          FROM visits v
          JOIN places p ON v.place_id = p.id
          WHERE v.id = ?
        `,
          )
          .get(n);
        if (!s) {
          (l.error(`Visit ID ${n} not found in database`),
            a.prepare("ROLLBACK").run());
          return;
        }
        l.info(
          `Found visit ${n} for place ${s.place_id} with ${s.visit_count} total visits`,
        );
        const r = a.prepare("DELETE FROM visits WHERE id = ?").run(n);
        l.info(`Delete visit result: ${JSON.stringify(r)}`);
        const o = a
          .prepare("SELECT COUNT(*) as count FROM visits WHERE place_id = ?")
          .get(s.place_id);
        if (
          (l.info(`Remaining visits for place ${s.place_id}: ${o.count}`),
          o.count === 0)
        ) {
          const E = a
            .prepare("DELETE FROM places WHERE id = ?")
            .run(s.place_id);
          (l.info(`Place deletion result: ${JSON.stringify(E)}`),
            l.info(
              `Deleted place ID ${s.place_id} after deleting its last visit`,
            ),
            se(a, [s.url]));
        } else {
          const E = a
            .prepare(
              "SELECT id FROM visits WHERE place_id = ? ORDER BY visit_date DESC LIMIT 1",
            )
            .get(s.place_id);
          E &&
            (a
              .prepare("UPDATE places SET last_visit_id = ? WHERE id = ?")
              .run(E.id, s.place_id),
            l.info(`Updated last_visit_id to ${E.id} for place ${s.place_id}`));
        }
        (a.prepare("COMMIT").run(),
          l.info(`Successfully deleted history entry with visit ID ${n}`));
      } catch (s) {
        throw (
          a.prepare("ROLLBACK").run(),
          l.error(`Error during deletion process: ${s}`),
          s
        );
      }
    } catch (n) {
      (a && a.prepare("ROLLBACK").run(),
        this.handleDatabaseError("deleting history entry", n, i));
    }
  }
  handleDatabaseError(t, i, a) {
    (l.error(`Database error while ${t} for profile ${a.id}:`, i),
      i instanceof Error &&
        i.message.includes("database is locked") &&
        l.warn("Database is locked. This might be due to concurrent access."),
      i instanceof Error &&
        i.message.includes("database disk image is malformed") &&
        l.error(
          "Database appears to be corrupted. Consider backing up and recreating it.",
        ));
  }
  closeAllDatabases() {
    for (const t of new Set([
      ...this.profileDatabaseMap.keys(),
      ...this.initializations.keys(),
    ]))
      this.cleanupProfileResources(t);
  }
  getRecentlyVisitedPlaces(t, i = 10) {
    const a = this.profileDatabaseMap.get(t.id);
    if (!a)
      return (
        l.error("Cannot get recently visited: Database not initialized"),
        []
      );
    try {
      return a
        .prepare(
          `
        SELECT 
          p.id as place_id,
          p.url, 
          p.title, 
          p.frecency,
          p.favicon_url,
          p.last_visit_time as timestamp
        FROM places p
        WHERE p.hidden = 0 AND p.url NOT LIKE 'orbitra://%'
        ORDER BY p.last_visit_time DESC
        LIMIT ?
      `,
        )
        .all(i)
        .map((r) => ({
          url: r.url,
          title: r.title || r.url,
          frecency: r.frecency,
          summary: "",
          faviconUrl: r.favicon_url || "",
          entry: {
            id: r.place_id.toString(),
            url: r.url,
            title: r.title || r.url,
            timestamp: new Date(r.timestamp),
            lastVisit: new Date(r.timestamp),
            summary: "",
            summaryTitle: "",
            faviconUrl: r.favicon_url || "",
            tabId: "",
          },
        }));
    } catch (n) {
      return (l.error("Error getting recently visited sync:", n), []);
    }
  }
}
function Et(e, t, i, a) {
  e.prepare("BEGIN TRANSACTION").run();
  try {
    let n = 0,
      s = 0,
      r = 0;
    const o = e.prepare(`
      INSERT OR IGNORE INTO places (url, title, visit_count, typed_count, last_visit_time, favicon_url, frecency, engagement_origin)
      VALUES (?, ?, ?, ?, ?, '', COALESCE(?, -1), ?)
    `),
      E = e.prepare(`
      UPDATE places
      SET title = COALESCE(?, title),
          visit_count = visit_count + ?,
          typed_count = MAX(typed_count, ?),
          last_visit_time = MAX(last_visit_time, ?),
          frecency = COALESCE(?, frecency),
          engagement_origin = ?
      WHERE url = ?
    `),
      d = e.prepare("SELECT id FROM places WHERE url = ?"),
      { urlMapping: c, importedFrecencyPlaceIds: p } = a;
    for (const f of t)
      try {
        const N = f.last_visit_time,
          I = _.getSiteEngagementOrigin(f.url),
          Z = o.run(
            f.url,
            f.title || "",
            f.visit_count || 1,
            f.typed_count || 0,
            N,
            typeof f.frecency == "number" ? f.frecency : null,
            I,
          ),
          O = d.get(f.url);
        O &&
          (a.engagementRows.push({ url: f.url, lastVisit: N }),
          c.set(f.id, O.id),
          typeof f.frecency == "number" && p.add(O.id),
          Z.changes > 0
            ? n++
            : (E.run(
                f.title || null,
                f.visit_count || 0,
                f.typed_count || 0,
                N,
                typeof f.frecency == "number" ? f.frecency : null,
                I,
                f.url,
              ),
              r++));
      } catch {
        r++;
      }
    const m = e.prepare(`
      INSERT INTO visits (place_id, visit_date, visit_type, summary, summary_title, content, tab_id)
      VALUES (?, ?, ?, NULL, NULL, NULL, NULL)
    `),
      u = e.prepare(`
      SELECT id, visit_date, visit_type FROM visits
      WHERE place_id = ?
        AND visit_date BETWEEN ? AND ?
      ORDER BY ABS(visit_date - ?) ASC
      LIMIT 1
    `),
      S = e.prepare(`
      SELECT id FROM visits
      WHERE place_id = ? AND visit_date = ?
      LIMIT 1
    `),
      g = e.prepare(`
      UPDATE visits
      SET visit_date = ?, visit_type = ?
      WHERE id = ?
    `);
    let y = 0,
      R = 0;
    const h = 60 * 1e3;
    for (const f of i)
      try {
        const N = c.get(f.url);
        if (!N) continue;
        const I = f.visit_time;
        if (S.get(N, I)) {
          y++;
          continue;
        }
        const O = u.get(N, I - h, I + h, I);
        if (O) {
          let v;
          (f.transition === 1
            ? (v = 2)
            : f.transition === 2
              ? (v = 3)
              : (v = 1),
            v > O.visit_type ||
            (v === O.visit_type &&
              Math.abs(I - Date.now()) < Math.abs(O.visit_date - Date.now()))
              ? (g.run(I, v, O.id), R++)
              : y++);
          continue;
        }
        let X = 1;
        (f.transition === 1 ? (X = 2) : f.transition === 2 && (X = 3),
          m.run(N, I, X),
          s++);
      } catch {}
    return (
      e.prepare("COMMIT").run(),
      {
        importedUrls: n,
        skippedUrls: r,
        importedVisits: s,
        skippedVisits: y,
        mergedVisits: R,
      }
    );
  } catch (n) {
    throw (e.inTransaction && e.prepare("ROLLBACK").run(), n);
  }
}
function dt(e, t, i, a, n) {
  const s = new Set(t.visits.map((c) => c.url));
  let r = 0,
    o = 0,
    E = 0;
  const d = [];
  e.prepare("BEGIN TRANSACTION").run();
  try {
    const c = e.prepare(`
          INSERT OR IGNORE INTO places (url, title, visit_count, last_visit_time, favicon_url, frecency, engagement_origin)
          VALUES (?, ?, ?, ?, '', -1, ?)
        `),
      p = e.prepare(`
          UPDATE places
          SET title = COALESCE(?, title),
              visit_count = visit_count + ?,
              last_visit_time = MAX(last_visit_time, ?),
              engagement_origin = ?
          WHERE url = ?
        `),
      m = e.prepare("SELECT id FROM places WHERE url = ?"),
      u = e.prepare(`
          INSERT INTO visits (place_id, visit_date, visit_type, summary, summary_title, content, tab_id)
          VALUES (?, ?, ?, NULL, NULL, NULL, NULL)
        `),
      S = e.prepare(`
          SELECT id FROM visits
          WHERE place_id = ? AND visit_date = ?
          LIMIT 1
        `);
    for (const g of t.urls)
      try {
        if (!g.url) {
          E++;
          continue;
        }
        const y = g.last_visit_time,
          R = _.getSiteEngagementOrigin(g.url);
        i.has(g.url) ||
          (c.run(g.url, g.title || "", g.visit_count || 1, y, R).changes > 0 &&
            r++,
          i.add(g.url));
        const h = m.get(g.url);
        if (h) {
          n.push({ url: g.url, lastVisit: y });
          const f = h.id;
          (a.add(f),
            p.run(g.title || null, 0, y, R, g.url),
            s.has(g.id) && (S.get(f, y) || (u.run(f, y, 1), o++)));
        }
      } catch (y) {
        (d.push(
          `Failed to import ${g.url}: ${y instanceof Error ? y.message : "Unknown error"}`,
        ),
          E++);
      }
    return (
      e.prepare("COMMIT").run(),
      { success: r > 0 || o > 0, importCount: r, skippedCount: E, errors: d }
    );
  } catch (c) {
    throw (e.prepare("ROLLBACK").run(), c);
  }
}
class pt {
  constructor(t) {
    this.history = t;
  }
  sessions = new Map();
  start(t) {
    this.sessions.set(t, {
      state: {
        urlMapping: new Map(),
        importedFrecencyPlaceIds: new Set(),
        engagementRows: [],
      },
      safariUrls: new Set(),
      aborted: !1,
    });
  }
  async importChromiumBatch(t, i, a, n) {
    const { db: s, session: r } = await this.open(t, i);
    return Et(s, a, n, r.state);
  }
  async importSafariBatch(t, i, a) {
    const { db: n, session: s } = await this.open(t, i),
      r = new Set(),
      o = dt(n, a, s.safariUrls, r, s.state.engagementRows);
    for (const E of r) this.history.updateFrecencyScore(E, t);
    return o;
  }
  async finish(t, i) {
    const a = this.running(i);
    try {
      const {
        urlMapping: n,
        importedFrecencyPlaceIds: s,
        engagementRows: r,
      } = a.state;
      let o = 0;
      for (const E of new Set(n.values())) {
        if ((++o % 100 === 0 && (await W.setImmediate()), a.aborted))
          throw ce();
        s.has(E) || this.history.updateFrecencyScore(E, t);
      }
      this.history.initializeSiteEngagementFromHistory(t, r);
    } finally {
      this.sessions.get(i) === a && this.sessions.delete(i);
    }
  }
  abort(t) {
    const i = this.sessions.get(t);
    i && ((i.aborted = !0), this.sessions.delete(t));
  }
  abortAll() {
    for (const t of this.sessions.keys()) this.abort(t);
  }
  async open(t, i) {
    const a = this.running(i);
    if ((await this.history.initialize(t), a.aborted)) throw ce();
    const n = this.history.getDatabaseForProfile(t.id);
    if (!n)
      throw new Error(`History database not initialized for profile ${t.id}`);
    return { db: n, session: a };
  }
  running(t) {
    const i = this.sessions.get(t);
    if (!i) throw new Error("History import is not running in this worker");
    return i;
  }
}
function ce() {
  return Object.assign(new Error("Import aborted"), {
    name: T.HISTORY_IMPORT_ABORTED,
  });
}
function ut() {
  const e = new lt(),
    t = new pt(e);
  return {
    initialize: (i) => e.initialize(i),
    closeAllDatabases: () => {
      (t.abortAll(), e.closeAllDatabases());
    },
    getAddressBarSelections: (...i) => e.getAddressBarSelections(...i),
    recordAddressBarSelection: (...i) => e.recordAddressBarSelection(...i),
    forgetAddressBarSelection: (...i) => e.forgetAddressBarSelection(...i),
    recordSiteEngagement: (...i) => e.recordSiteEngagement(...i),
    getSiteEngagementScores: (...i) => e.getSiteEngagementScores(...i),
    getSiteEngagementDetails: (...i) => e.getSiteEngagementDetails(...i),
    getRecentVisits: (...i) => e.getRecentVisits(...i),
    addHistoryVisit: (...i) => e.addHistoryVisit(...i),
    updateHistoryVisit: (...i) => e.updateHistoryVisit(...i),
    getHistoryResults: (...i) => e.getHistoryResults(...i),
    getHistoryResultsChronological: (...i) =>
      e.getHistoryResultsChronological(...i),
    clearHistory: (...i) => e.clearHistory(...i),
    deleteHistoryEntry: (...i) => e.deleteHistoryEntry(...i),
    getRecentlyVisitedPlaces: (...i) => e.getRecentlyVisitedPlaces(...i),
    startImport: (i) => t.start(i),
    importChromiumBatch: (...i) => t.importChromiumBatch(...i),
    importSafariBatch: (...i) => t.importSafariBatch(...i),
    finishImport: (...i) => t.finish(...i),
    abortImport: (i) => t.abort(i),
  };
}
function mt(e, t) {
  if (typeof e != "object" || e === null) return !1;
  const i = { ...e };
  return (
    typeof i.id == "string" &&
    typeof i.method == "string" &&
    Object.hasOwn(t, i.method) &&
    Array.isArray(i.args)
  );
}
async function gt(e, t) {
  if (!mt(t, e)) return null;
  const i = e[t.method];
  try {
    return { id: t.id, ok: !0, result: await i(...t.args) };
  } catch (a) {
    return {
      id: t.id,
      ok: !1,
      error:
        a instanceof Error
          ? { name: a.name, message: a.message }
          : { name: "Error", message: String(a) },
    };
  }
}
const D = process.parentPort;
D || process.exit(1);
He((e, t, i) => {
  try {
    D.postMessage({
      log: { level: e, message: t, args: i.map(T.encodeLogArg) },
    });
  } catch {
    D.postMessage({ log: { level: e, message: t, args: [] } });
  }
});
const ft = ut();
D.on("message", (e) => {
  gt(ft, e.data).then((t) => {
    if (t)
      try {
        D.postMessage(t);
      } catch {
        D.postMessage({
          id: t.id,
          ok: !1,
          error: {
            name: "DataCloneError",
            message: "History storage answer could not be sent",
          },
        });
      }
  });
});
