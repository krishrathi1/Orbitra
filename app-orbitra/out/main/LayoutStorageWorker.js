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
      (e._sentryDebugIds[t] = "788fe8c5-6d4a-4cf0-aed1-36ddfc28511e"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-788fe8c5-6d4a-4cf0-aed1-36ddfc28511e"));
  })();
} catch {}
const ne = require("better-sqlite3"),
  re = require("drizzle-orm/better-sqlite3"),
  ie = require("./chunks/sqliteErrorCode-BHE49al-.js"),
  A = require("./chunks/commitRecord-DR9i1ecT.js"),
  R = require("node:fs/promises"),
  oe = require("node:path"),
  l = require("drizzle-orm"),
  a = require("drizzle-orm/sqlite-core"),
  se = require("valibot");
require("./chunks/ids-B2sWlG17.js");
function ae(e) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const r in e)
      if (r !== "default") {
        const u = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(
          t,
          r,
          u.get ? u : { enumerable: !0, get: () => e[r] },
        );
      }
  }
  return ((t.default = e), Object.freeze(t));
}
const n = ae(se),
  f = a.sqliteTable("pages", {
    id: a.text("id").primaryKey(),
    url: a.text("url").notNull(),
    title: a.text("title").notNull(),
    faviconUrl: a.text("favicon_url"),
    origin: a.text("origin"),
    openedAt: a.integer("opened_at").notNull(),
    lastShownAt: a.integer("last_shown_at").notNull(),
    lastActivityAt: a.integer("last_activity_at").notNull(),
    navigationHistory: a.text("navigation_history").notNull(),
  }),
  h = a.sqliteTable("layout_snapshots", {
    revision: a.integer("revision").primaryKey(),
    tree: a.text("tree").notNull(),
    pageIndex: a.text("page_index").notNull(),
    formatVersion: a.integer("format_version").notNull(),
    createdAt: a.integer("created_at").notNull(),
  }),
  v = a.sqliteTable("layout_commits", {
    revision: a.integer("revision").primaryKey(),
    baseRevision: a.integer("base_revision").notNull(),
    record: a.text("record").notNull(),
    formatVersion: a.integer("format_version").notNull(),
    createdAt: a.integer("created_at").notNull(),
  }),
  ce = a.sqliteTable("quarantined_commits", {
    id: a.integer("id").primaryKey({ autoIncrement: !0 }),
    revision: a.integer("revision").notNull(),
    baseRevision: a.integer("base_revision").notNull(),
    record: a.text("record").notNull(),
    formatVersion: a.integer("format_version").notNull(),
    createdAt: a.integer("created_at").notNull(),
    quarantinedAt: a.integer("quarantined_at").notNull(),
  }),
  y = a.sqliteTable("recently_closed", {
    id: a.integer("id").primaryKey({ autoIncrement: !0 }),
    record: a.text("record").notNull(),
    closedAt: a.integer("closed_at").notNull(),
  }),
  N = a.sqliteTable("meta", {
    key: a.text("key").primaryKey(),
    value: a.text("value").notNull(),
  }),
  I = "head_revision",
  S = "format_version",
  q = "import_fingerprint",
  x = "account_revision",
  P = "user_muted_page:",
  le =
    "CREATE TABLE `layout_commits` (\n	`revision` integer PRIMARY KEY,\n	`base_revision` integer NOT NULL,\n	`record` text NOT NULL,\n	`format_version` integer NOT NULL,\n	`created_at` integer NOT NULL\n);\n--> statement-breakpoint\nCREATE TABLE `layout_snapshots` (\n	`revision` integer PRIMARY KEY,\n	`tree` text NOT NULL,\n	`page_index` text NOT NULL,\n	`format_version` integer NOT NULL,\n	`created_at` integer NOT NULL\n);\n--> statement-breakpoint\nCREATE TABLE `meta` (\n	`key` text PRIMARY KEY,\n	`value` text NOT NULL\n);\n--> statement-breakpoint\nCREATE TABLE `pages` (\n	`id` text PRIMARY KEY,\n	`url` text NOT NULL,\n	`title` text NOT NULL,\n	`favicon_url` text,\n	`origin` text,\n	`opened_at` integer NOT NULL,\n	`last_shown_at` integer NOT NULL,\n	`last_activity_at` integer NOT NULL,\n	`navigation_history` text NOT NULL\n);\n--> statement-breakpoint\nCREATE TABLE `quarantined_commits` (\n	`id` integer PRIMARY KEY AUTOINCREMENT,\n	`revision` integer NOT NULL,\n	`base_revision` integer NOT NULL,\n	`record` text NOT NULL,\n	`format_version` integer NOT NULL,\n	`created_at` integer NOT NULL,\n	`quarantined_at` integer NOT NULL\n);\n--> statement-breakpoint\nCREATE TABLE `recently_closed` (\n	`id` integer PRIMARY KEY AUTOINCREMENT,\n	`record` text NOT NULL,\n	`closed_at` integer NOT NULL\n);\n",
  ue = "--> statement-breakpoint",
  de = Object.assign({
    "./migrations/20260820131400_initial-layout-schema/migration.sql": le,
  }),
  F = Object.entries(de)
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([, e]) =>
      e
        .split(ue)
        .map((t) => t.trim())
        .filter((t) => t.length > 0),
    );
class z extends Error {
  constructor() {
    (super("layout database is not open"),
      (this.name = "LayoutDatabaseNotOpenError"));
  }
}
function M(e) {
  return `${e}.backup`;
}
const W = ["-wal", "-shm"];
async function U(e) {
  try {
    return (await R.stat(e), !0);
  } catch {
    return !1;
  }
}
async function j(e, t) {
  if (await U(e)) {
    await R.rename(e, t);
    for (const r of W)
      (await U(`${e}${r}`)) && (await R.rename(`${e}${r}`, `${t}${r}`));
  }
}
async function $(e) {
  for (const t of W) await R.rm(`${e}${t}`, { force: !0 });
}
function E(e, t) {
  return e.select({ value: N.value }).from(N).where(l.eq(N.key, t)).get()
    ?.value;
}
function b(e, t, r) {
  e.insert(N)
    .values({ key: t, value: r })
    .onConflictDoUpdate({ target: N.key, set: { value: r } })
    .run();
}
function X(e) {
  return `${P}${e}`;
}
const Q = l.sql`substr(${N.key}, 1, ${P.length}) = ${P}`,
  Z = l.sql`substr(${N.key}, ${P.length + 1})`;
function fe(e) {
  return e
    .select({ pageId: Z })
    .from(N)
    .where(Q)
    .all()
    .map((t) => t.pageId);
}
const K = 1e4;
function ee(e, t) {
  for (let r = 0; r < e.length; r += K) t(e.slice(r, r + K));
}
function Y(e, t) {
  ee(t, (r) => {
    e.delete(N)
      .where(l.inArray(N.key, r.map(X)))
      .run();
  });
}
function ge(e) {
  e.delete(N)
    .where(l.and(Q, l.notInArray(Z, e.select({ id: f.id }).from(f))))
    .run();
}
function w(e) {
  const t = E(e, I);
  if (t === void 0) return 0;
  const r = Number.parseInt(t, 10);
  return Number.isSafeInteger(r) && r >= 0 ? r : 0;
}
function G(e) {
  const t = E(e, S);
  if (t === void 0) return A.LAYOUT_JOURNAL_FORMAT_VERSION;
  const r = Number.parseInt(t, 10);
  return Number.isSafeInteger(r) ? r : 0;
}
function pe(e) {
  const r = e.get(
    l.sql.raw(
      "SELECT CASE WHEN json_valid(tree) THEN json_extract(tree, '$.schemaVersion') END AS version FROM layout_snapshots ORDER BY revision DESC LIMIT 1",
    ),
  )?.version;
  return typeof r == "number" && Number.isSafeInteger(r) ? r : void 0;
}
function me(e) {
  const t = e.get(l.sql.raw("PRAGMA user_version"))?.user_version ?? 0;
  if (t > 0) return t;
  if (
    !e.get(
      l.sql.raw(
        "SELECT 1 AS found FROM sqlite_master WHERE type = 'table' AND name = '__layout_migrations'",
      ),
    )
  )
    return 0;
  const u =
    e.get(l.sql.raw("SELECT COUNT(*) AS count FROM __layout_migrations"))
      ?.count ?? 0;
  if (!Number.isSafeInteger(u) || u < 0 || u > F.length)
    throw new Error("invalid legacy layout schema version");
  return (e.run(l.sql.raw(`PRAGMA user_version = ${u}`)), u);
}
function ve(e, t, r) {
  for (const [u, p] of t.entries())
    e.transaction((_) => {
      for (const T of p) _.run(l.sql.raw(T));
      _.run(l.sql.raw(`PRAGMA user_version = ${r + u + 1}`));
    });
}
function J(e) {
  const t = e.length > A.NAV_HISTORY_CAP ? e.slice(-A.NAV_HISTORY_CAP) : e;
  return JSON.stringify(t);
}
function ye(e) {
  const t = JSON.parse(e);
  if (!Array.isArray(t)) return [];
  const r = [];
  for (const u of t) {
    if (typeof u != "object" || u === null) continue;
    const p = { ...u };
    typeof p.url != "string" ||
      typeof p.title != "string" ||
      r.push({ url: p.url, title: p.title });
  }
  return r;
}
function Ae(e, t) {
  if (t.kind === "created") {
    for (const r of t.pages)
      e.insert(f)
        .values({
          id: r.summary.id,
          url: r.summary.url,
          title: r.summary.title,
          faviconUrl: r.summary.faviconUrl ?? null,
          origin: r.summary.origin ?? null,
          openedAt: r.summary.openedAt,
          lastShownAt: r.summary.lastShownAt,
          lastActivityAt: r.summary.lastActivityAt,
          navigationHistory: J(r.navigationHistory),
        })
        .run();
    return;
  }
  if (t.kind === "deleted") {
    (ee(t.pageIds, (r) => {
      e.delete(f).where(l.inArray(f.id, r)).run();
    }),
      Y(e, t.pageIds));
    return;
  }
}
function ke(e, t, r) {
  e.insert(y).values({ record: t, closedAt: r }).run();
  const u = e
    .select({ id: y.id })
    .from(y)
    .orderBy(l.desc(y.id))
    .limit(A.RECENTLY_CLOSED_LIMIT)
    .all()
    .map((p) => p.id);
  e.delete(y).where(l.notInArray(y.id, u)).run();
}
function be(e, t, r) {
  if (!r) {
    Y(e, [t]);
    return;
  }
  e.select({ id: f.id }).from(f).where(l.eq(f.id, t)).get() && b(e, X(t), "1");
}
function Ne(e, t = Date.now) {
  let r = null,
    u = null;
  function p() {
    if (!r) throw new z();
    return r.db;
  }
  function _(i) {
    try {
      i.close();
    } catch {
      return;
    }
  }
  function T() {
    if (!r) return;
    const i = r;
    ((r = null), _(i));
  }
  async function V(i) {
    (T(), (u = i));
    const d = await U(i);
    let o;
    try {
      (await R.mkdir(oe.dirname(i), { recursive: !0 }),
        (o = e(i)),
        o.exec(
          "PRAGMA journal_mode = WAL; PRAGMA synchronous = NORMAL; PRAGMA foreign_keys = ON;",
        ));
    } catch {
      return (o && _(o), { ok: !1, failure: { kind: "unreadable" } });
    }
    try {
      const s = me(o.db);
      if (s > F.length)
        return (
          _(o),
          {
            ok: !1,
            failure: { kind: "unsupported-schema-version", storedVersion: s },
          }
        );
      if (s > 0) {
        const g = pe(o.db);
        if (g !== void 0 && g > A.LAYOUT_SCHEMA_VERSION)
          return (
            _(o),
            {
              ok: !1,
              failure: { kind: "unsupported-schema-version", storedVersion: g },
            }
          );
      }
      const c = F.slice(s);
      if (c.length > 0 && d) {
        const g = `${i}.before-schema-${s}`;
        (await U(g)) || (await B(o, g));
      }
      ve(o.db, c, s);
    } catch {
      return (_(o), { ok: !1, failure: { kind: "migration-failed" } });
    }
    try {
      (E(o.db, I) === void 0 && b(o.db, I, "0"),
        E(o.db, S) === void 0 &&
          b(o.db, S, String(A.LAYOUT_JOURNAL_FORMAT_VERSION)));
    } catch {
      return (_(o), { ok: !1, failure: { kind: "unreadable" } });
    }
    return ((r = o), { ok: !0 });
  }
  async function B(i, d) {
    const o = `${d}.tmp`;
    (await R.rm(o, { force: !0 }), await $(o));
    try {
      (await i.backupTo(o), await $(d), await R.rename(o, d));
    } finally {
      (await R.rm(o, { force: !0 }).catch(() => {}),
        await $(o).catch(() => {}));
    }
  }
  return {
    open: V,
    async recoverFromBackup() {
      const i = u;
      if (i === null) return { ok: !1, failure: { kind: "unreadable" } };
      T();
      const d = M(i);
      if (!(await U(d))) return { ok: !1, failure: { kind: "no-backup" } };
      try {
        (await j(i, `${i}.corrupt-${t()}`), await R.copyFile(d, i));
      } catch {
        return { ok: !1, failure: { kind: "unreadable" } };
      }
      return V(i);
    },
    async resetAside(i) {
      const d = u;
      if (d === null) return { ok: !1, failure: { kind: "unreadable" } };
      T();
      const o = t();
      try {
        (await j(d, `${d}.${i}-${o}`), await j(M(d), `${M(d)}.${i}-${o}`));
      } catch {
        return { ok: !1, failure: { kind: "unreadable" } };
      }
      return V(d);
    },
    load() {
      const i = p(),
        d = w(i),
        o = G(i),
        s = i
          .select()
          .from(h)
          .where(l.lte(h.revision, d))
          .orderBy(l.desc(h.revision))
          .limit(1)
          .get(),
        c = s
          ? {
              revision: s.revision,
              formatVersion: s.formatVersion,
              treeJson: s.tree,
              pageIndexJson: s.pageIndex,
            }
          : null,
        g = i
          .select({
            revision: v.revision,
            formatVersion: v.formatVersion,
            record: v.record,
          })
          .from(v)
          .where(
            l.and(l.gt(v.revision, c?.revision ?? 0), l.lte(v.revision, d)),
          )
          .orderBy(l.asc(v.revision))
          .all()
          .map((k) => ({
            revision: k.revision,
            formatVersion: k.formatVersion,
            recordJson: k.record,
          })),
        m = i
          .select({
            id: f.id,
            url: f.url,
            title: f.title,
            faviconUrl: f.faviconUrl,
            origin: f.origin,
            openedAt: f.openedAt,
            lastShownAt: f.lastShownAt,
            lastActivityAt: f.lastActivityAt,
          })
          .from(f)
          .all(),
        L = i
          .select({ id: y.id, record: y.record, closedAt: y.closedAt })
          .from(y)
          .orderBy(l.asc(y.id))
          .all()
          .map((k) => ({
            id: k.id,
            recordJson: k.record,
            closedAt: k.closedAt,
          }));
      return {
        headRevision: d,
        formatVersion: o,
        importFingerprint: E(i, q) ?? null,
        snapshot: c,
        commits: g,
        pages: m,
        userMutedPageIds: fe(i),
        recentlyClosed: L,
      };
    },
    head() {
      return w(p());
    },
    commit(i) {
      return p().transaction((o) => {
        const s = w(o);
        if (s !== i.baseRevision)
          return { ok: !1, reason: "revision-conflict", headRevision: s };
        const c = t();
        (o
          .insert(v)
          .values({
            revision: i.revision,
            baseRevision: i.baseRevision,
            record: JSON.stringify(i),
            formatVersion: i.formatVersion,
            createdAt: c,
          })
          .run(),
          Ae(o, i.pageChanges));
        const g = A.closedHistoryRewriteOf(i.command);
        if (g)
          for (const m of o.select().from(y).all()) {
            const L = A.parseClosedFragment(JSON.parse(m.record)),
              k = L.kind === "fragment" ? g(L.fragment) : void 0;
            k
              ? o
                  .update(y)
                  .set({ record: JSON.stringify(k) })
                  .where(l.eq(y.id, m.id))
                  .run()
              : o.delete(y).where(l.eq(y.id, m.id)).run();
          }
        for (const m of i.closed ?? [])
          (ke(o, JSON.stringify(m), c), Y(o, A.fragmentPageIds(m)));
        return (
          b(o, S, String(A.LAYOUT_JOURNAL_FORMAT_VERSION)),
          b(o, I, String(i.revision)),
          { ok: !0 }
        );
      });
    },
    importInitial(i, d, o) {
      return p().transaction((c) => {
        const g = w(c),
          m = c.select({ revision: h.revision }).from(h).all(),
          L = c.select({ revision: v.revision }).from(v).all(),
          k = c.select({ id: f.id }).from(f).limit(1).all();
        if (g !== 0 || m.length > 0 || L.length > 0 || k.length > 0)
          return { ok: !1, reason: "revision-conflict", headRevision: g };
        for (const O of d)
          c.insert(f)
            .values({
              id: O.id,
              url: O.url,
              title: O.title,
              faviconUrl: O.faviconUrl,
              origin: O.origin,
              openedAt: O.openedAt,
              lastShownAt: O.lastShownAt,
              lastActivityAt: O.lastActivityAt,
              navigationHistory: J(O.navigationHistory),
            })
            .run();
        return (
          H(c, i, t()),
          b(c, I, String(i.revision)),
          b(c, S, String(A.LAYOUT_JOURNAL_FORMAT_VERSION)),
          b(c, q, o),
          { ok: !0 }
        );
      });
    },
    adoptDeclarative(i, d) {
      return p().transaction((s) => {
        const c = w(s);
        if (c !== i || c === 0)
          return { ok: !1, reason: "revision-conflict", headRevision: c };
        const g = E(s, q);
        return g !== void 0 && g !== d
          ? { ok: !1, reason: "revision-conflict", headRevision: c }
          : (b(s, q, d), { ok: !0 });
      });
    },
    updatePageMetadata(i) {
      if (i.length === 0) return;
      p().transaction((o) => {
        for (const s of i) {
          s.userMuted !== void 0 && be(o, s.pageId, s.userMuted);
          const c = {};
          if (
            (s.url !== void 0 && (c.url = s.url),
            s.title !== void 0 && (c.title = s.title),
            s.faviconUrl !== void 0 && (c.faviconUrl = s.faviconUrl),
            s.lastShownAt !== void 0 && (c.lastShownAt = s.lastShownAt),
            s.lastActivityAt !== void 0 &&
              (c.lastActivityAt = s.lastActivityAt),
            s.navEntries && s.navEntries.length > 0)
          ) {
            const g = o
              .select({ navigationHistory: f.navigationHistory })
              .from(f)
              .where(l.eq(f.id, s.pageId))
              .get();
            if (!g) continue;
            const m = ye(g.navigationHistory);
            (m.push(...s.navEntries), (c.navigationHistory = J(m)));
          }
          Object.keys(c).length !== 0 &&
            o.update(f).set(c).where(l.eq(f.id, s.pageId)).run();
        }
      });
    },
    loadNavigationHistory(i) {
      return (
        p()
          .select({ navigationHistory: f.navigationHistory })
          .from(f)
          .where(l.eq(f.id, i))
          .get()?.navigationHistory ?? null
      );
    },
    rotate(i) {
      return p().transaction((o) => {
        const s = w(o);
        return s !== i.revision
          ? { ok: !1, reason: "revision-conflict", headRevision: s }
          : (H(o, i, t()),
            o.delete(v).where(l.lte(v.revision, i.revision)).run(),
            o
              .delete(h)
              .where(l.lte(h.revision, i.revision - 1))
              .run(),
            ge(o),
            b(o, S, String(A.LAYOUT_JOURNAL_FORMAT_VERSION)),
            { ok: !0 });
      });
    },
    settleAt(i) {
      return p().transaction((o) => {
        const s = w(o);
        if (i.revision > s)
          return { ok: !1, reason: "revision-conflict", headRevision: s };
        H(o, i, t(), G(o));
        const c = t(),
          g = o
            .select()
            .from(v)
            .where(l.gt(v.revision, i.revision))
            .orderBy(l.asc(v.revision))
            .all();
        for (const m of g)
          o.insert(ce)
            .values({
              revision: m.revision,
              baseRevision: m.baseRevision,
              record: m.record,
              formatVersion: m.formatVersion,
              createdAt: m.createdAt,
              quarantinedAt: c,
            })
            .run();
        return (
          o.delete(v).where(l.gt(v.revision, i.revision)).run(),
          b(o, I, String(i.revision)),
          { ok: !0 }
        );
      });
    },
    accountRevision() {
      const i = E(p(), x);
      return i === void 0 ? null : Number.parseInt(i, 10);
    },
    markAccountRevision(i) {
      b(p(), x, String(i));
    },
    async backup(i = !1) {
      !r || u === null || (i && (await U(M(u)))) || (await B(r, M(u)));
    },
    close() {
      T();
    },
  };
}
function H(e, t, r, u = A.LAYOUT_JOURNAL_FORMAT_VERSION) {
  e.insert(h)
    .values({
      revision: t.revision,
      tree: t.treeJson,
      pageIndex: t.pageIndexJson,
      formatVersion: u,
      createdAt: r,
    })
    .onConflictDoUpdate({
      target: h.revision,
      set: {
        tree: t.treeJson,
        pageIndex: t.pageIndexJson,
        formatVersion: u,
        createdAt: r,
      },
    })
    .run();
}
const _e = n.picklist(["corrupt", "stale"]),
  te = n.object({ url: n.string(), title: n.string() }),
  Oe = n.strictObject({
    pageId: n.pipe(n.string(), n.minLength(1)),
    url: n.optional(n.string()),
    title: n.optional(n.string()),
    faviconUrl: n.optional(n.string()),
    lastShownAt: n.optional(n.number()),
    lastActivityAt: n.optional(n.number()),
    navEntries: n.optional(n.array(te)),
    userMuted: n.optional(n.boolean()),
  }),
  D = n.strictObject({
    revision: n.pipe(n.number(), n.integer(), n.minValue(0)),
    treeJson: n.string(),
    pageIndexJson: n.string(),
  }),
  he = n.strictObject({
    id: n.pipe(n.string(), n.minLength(1)),
    url: n.string(),
    title: n.string(),
    faviconUrl: n.nullable(n.string()),
    origin: n.nullable(n.string()),
    openedAt: n.number(),
    lastShownAt: n.number(),
    lastActivityAt: n.number(),
    navigationHistory: n.array(te),
  }),
  Re = n.variant("kind", [
    n.strictObject({
      kind: n.literal("open"),
      dbPath: n.pipe(n.string(), n.minLength(1)),
    }),
    n.strictObject({ kind: n.literal("recoverFromBackup") }),
    n.strictObject({ kind: n.literal("resetAside"), keptAs: _e }),
    n.strictObject({ kind: n.literal("load") }),
    n.strictObject({ kind: n.literal("head") }),
    n.strictObject({ kind: n.literal("commit"), record: n.looseObject({}) }),
    n.strictObject({
      kind: n.literal("updatePageMetadata"),
      updates: n.array(Oe),
    }),
    n.strictObject({
      kind: n.literal("loadNavigationHistory"),
      pageId: n.pipe(n.string(), n.minLength(1)),
    }),
    n.strictObject({
      kind: n.literal("importInitial"),
      snapshot: D,
      pages: n.array(he),
      fingerprint: n.pipe(n.string(), n.regex(/^[a-f0-9]{64}$/)),
    }),
    n.strictObject({
      kind: n.literal("adoptDeclarative"),
      expectedHeadRevision: n.pipe(n.number(), n.integer(), n.minValue(1)),
      fingerprint: n.pipe(n.string(), n.regex(/^[a-f0-9]{64}$/)),
    }),
    n.strictObject({ kind: n.literal("rotate"), snapshot: D }),
    n.strictObject({ kind: n.literal("settleAt"), snapshot: D }),
    n.strictObject({
      kind: n.literal("backup"),
      preserveExisting: n.optional(n.boolean()),
    }),
    n.strictObject({ kind: n.literal("accountRevision") }),
    n.strictObject({
      kind: n.literal("markAccountRevision"),
      revision: n.pipe(n.number(), n.integer()),
    }),
    n.strictObject({ kind: n.literal("close") }),
  ]);
function we(e) {
  const t = n.safeParse(Re, e);
  return t.success ? t.output : void 0;
}
async function Ee(e, t) {
  const r = we(t);
  if (!r) return { ok: !1, failure: "bad-request" };
  try {
    return await Te(e, r);
  } catch (u) {
    return u instanceof z
      ? { ok: !1, failure: "not-open" }
      : { ok: !1, failure: "sql-failed", sqliteCode: ie.sqliteCodeOf(u) };
  }
}
async function Te(e, t) {
  switch (t.kind) {
    case "open":
      return {
        ok: !0,
        response: { kind: "open", outcome: await e.open(t.dbPath) },
      };
    case "recoverFromBackup":
      return {
        ok: !0,
        response: { kind: "open", outcome: await e.recoverFromBackup() },
      };
    case "resetAside":
      return {
        ok: !0,
        response: { kind: "open", outcome: await e.resetAside(t.keptAs) },
      };
    case "load":
      return { ok: !0, response: { kind: "load", outcome: e.load() } };
    case "head":
      return { ok: !0, response: { kind: "head", revision: e.head() } };
    case "commit": {
      const r = A.parseLayoutCommitRecord(t.record);
      return r.ok
        ? { ok: !0, response: { kind: "commit", outcome: e.commit(r.record) } }
        : { ok: !1, failure: "invalid-record" };
    }
    case "updatePageMetadata":
      return (
        e.updatePageMetadata(t.updates),
        { ok: !0, response: { kind: "ack" } }
      );
    case "loadNavigationHistory":
      return {
        ok: !0,
        response: {
          kind: "navigationHistory",
          entriesJson: e.loadNavigationHistory(t.pageId),
        },
      };
    case "importInitial":
      return {
        ok: !0,
        response: {
          kind: "commit",
          outcome: e.importInitial(t.snapshot, t.pages, t.fingerprint),
        },
      };
    case "adoptDeclarative":
      return {
        ok: !0,
        response: {
          kind: "commit",
          outcome: e.adoptDeclarative(t.expectedHeadRevision, t.fingerprint),
        },
      };
    case "rotate":
      return {
        ok: !0,
        response: { kind: "commit", outcome: e.rotate(t.snapshot) },
      };
    case "settleAt":
      return {
        ok: !0,
        response: { kind: "commit", outcome: e.settleAt(t.snapshot) },
      };
    case "backup":
      return (
        await e.backup(t.preserveExisting),
        { ok: !0, response: { kind: "ack" } }
      );
    case "accountRevision":
      return {
        ok: !0,
        response: { kind: "accountRevision", revision: e.accountRevision() },
      };
    case "markAccountRevision":
      return (
        e.markAccountRevision(t.revision),
        { ok: !0, response: { kind: "ack" } }
      );
    case "close":
      return (e.close(), { ok: !0, response: { kind: "ack" } });
  }
}
function Le(e) {
  const t = new ne(e);
  return {
    db: re.drizzle({ client: t }),
    exec: (r) => t.exec(r),
    backupTo: async (r) => {
      await t.backup(r);
    },
    close: () => t.close(),
  };
}
const Ie = Ne(Le);
function Se(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = { ...e };
  return typeof t.id == "string" && typeof t.request == "object";
}
async function Ue(e) {
  const t = await Ee(Ie, e.request);
  return t.ok
    ? { id: e.id, ok: !0, response: t.response }
    : { id: e.id, ok: !1, failure: t.failure, sqliteCode: t.sqliteCode };
}
const C = process.parentPort;
C
  ? C.on("message", (e) => {
      if (!Se(e.data)) return;
      const t = e.data;
      Ue(t).then(
        (r) => C.postMessage(r),
        () => C.postMessage({ id: t.id, ok: !1, failure: "unknown" }),
      );
    })
  : process.exit(1);
