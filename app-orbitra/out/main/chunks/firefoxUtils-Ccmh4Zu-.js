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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "e98f5f2a-4120-41ca-b30a-ab328764d296"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-e98f5f2a-4120-41ca-b30a-ab328764d296"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const S = require("crypto"),
  x = require("fs/promises"),
  y = require("path"),
  w = require("better-sqlite3"),
  A = require("lz4js"),
  h = require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("node:fs/promises");
require("node:os");
require("node:path");
function C(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const t in e)
      if (t !== "default") {
        const o = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(
          n,
          t,
          o.get ? o : { enumerable: !0, get: () => e[t] },
        );
      }
  }
  return ((n.default = e), Object.freeze(n));
}
const L = C(A);
function j(e) {
  return typeof e != "number" || !Number.isFinite(e) || e <= 0
    ? null
    : Math.floor(e / 1e3);
}
async function N(e) {
  if (!(await h.fileExists(e))) return null;
  const n = await h.copySourceDatabase(e);
  let t = null;
  try {
    t = new w(n, { readonly: !0 });
    const o = t
        .prepare(
          "SELECT id, type, fk, parent, title, dateAdded, lastModified FROM moz_bookmarks",
        )
        .all(),
      d = t
        .prepare(
          "SELECT id, url, title, visit_count, last_visit_date FROM moz_places",
        )
        .all(),
      a = new Map();
    for (const s of d) a.set(s.id, s);
    const i = new Map();
    for (const s of o) {
      const f = i.get(s.parent) || [];
      (f.push(s), i.set(s.parent, f));
    }
    const r = new Set();
    for (const s of o)
      if (s.parent === 1 && (s.title || "").trim().toLowerCase() === "tags") {
        const f = [s.id];
        for (; f.length; ) {
          const l = f.shift();
          r.add(l);
          const c = i.get(l) || [];
          for (const k of c) f.push(k.id);
        }
      }
    const u = (s) => {
        const f = s.fk ? a.get(s.fk) : void 0,
          l = f?.url;
        return l
          ? {
              id: String(s.id),
              guid: String(s.id),
              name: s.title || f?.title || l,
              type: "url",
              url: l,
              date_added: String(s.dateAdded || Date.now()),
              date_modified: String(
                s.lastModified || s.dateAdded || Date.now(),
              ),
              date_last_used: "0",
            }
          : null;
      },
      m = (s) => s.charAt(0).toUpperCase() + s.slice(1),
      g = (s) => {
        const f = (s.title || "").trim().toLowerCase();
        let l = s.title || "";
        (f === "mobile" || f === "tags" || f === "menu") && (l = m(f));
        const c = (i.get(s.id) || [])
          .filter((k) => !r.has(k.id))
          .map((k) => (k.type === 2 ? g(k) : u(k)))
          .filter((k) => k !== null);
        return c.length === 0
          ? null
          : {
              id: String(s.id),
              guid: String(s.id),
              name: l,
              type: "folder",
              children: c,
              date_added: String(s.dateAdded || Date.now()),
              date_modified: String(
                s.lastModified || s.dateAdded || Date.now(),
              ),
              date_last_used: "0",
            };
      },
      p = {
        bookmark_bar: {
          id: "1",
          guid: "1",
          name: "Bookmarks bar",
          type: "folder",
          children: [],
          date_added: "",
          date_modified: "",
          date_last_used: "0",
        },
        other: {
          id: "2",
          guid: "2",
          name: "Other bookmarks",
          type: "folder",
          children: [],
          date_added: "",
          date_modified: "",
          date_last_used: "0",
        },
        synced: {
          id: "3",
          guid: "3",
          name: "Mobile bookmarks",
          type: "folder",
          children: [],
          date_added: "",
          date_modified: "",
          date_last_used: "0",
        },
      },
      b = (i.get(1) || []).filter((s) => !r.has(s.id));
    for (const s of b) {
      const f = (s.title || "").trim().toLowerCase();
      if (s.type === 2)
        if (f === "toolbar") {
          const l = (i.get(s.id) || [])
            .filter((c) => !r.has(c.id))
            .map((c) => (c.type === 2 ? g(c) : u(c)))
            .filter((c) => c !== null);
          p.bookmark_bar.children.push(...l);
        } else if (f === "unfiled") {
          const l = (i.get(s.id) || [])
            .filter((c) => !r.has(c.id))
            .map((c) => (c.type === 2 ? g(c) : u(c)))
            .filter((c) => c !== null);
          p.other.children.push(...l);
        } else if (f === "mobile") {
          const l = (i.get(s.id) || [])
            .filter((c) => !r.has(c.id))
            .map((c) => (c.type === 2 ? g(c) : u(c)))
            .filter((c) => c !== null);
          p.synced.children.push(...l);
        } else if (f === "tags" || f === "menu") {
          const l = g(s);
          l && ((l.name = m(f)), p.other.children.push(l));
        } else {
          const l = g(s);
          l && p.other.children.push(l);
        }
    }
    return { checksum: String(Date.now()), roots: p, version: 1 };
  } catch {
    return null;
  } finally {
    try {
      (t?.close(), await h.removeSourceDatabase(n));
    } catch {}
  }
}
async function Z(e) {
  if (!(await h.fileExists(e))) return null;
  const n = await h.copySourceDatabase(e);
  let t = null;
  try {
    return (
      (t = new w(n, { readonly: !0 })),
      {
        urls: t
          .prepare(
            "SELECT p.id, p.url, p.title, p.visit_count, p.last_visit_date as last_visit_time, p.frecency FROM moz_places p",
          )
          .all(),
      }
    );
  } catch {
    return null;
  } finally {
    try {
      (t?.close(), await h.removeSourceDatabase(n));
    } catch {}
  }
}
function E(e) {
  return e
    .prepare(
      "SELECT 1 FROM pragma_table_info('moz_cookies') WHERE name = 'originAttributes'",
    )
    .get()
    ? " WHERE originAttributes NOT LIKE '%partitionKey=%' ORDER BY originAttributes = '' DESC"
    : "";
}
async function R(e) {
  const n = [];
  if (!(await h.fileExists(e))) return n;
  const t = await h.copySourceDatabase(e);
  let o = null;
  try {
    o = new w(t, { readonly: !0 });
    const d = o
      .prepare(
        `SELECT name, value, host as domain, path, expiry, isSecure as secure, isHttpOnly as httpOnly FROM moz_cookies${E(o)}`,
      )
      .all();
    for (const a of d)
      n.push({
        name: a.name,
        value: String(a.value ?? ""),
        domain: a.domain,
        path: a.path || "/",
        secure: !!a.secure,
        httpOnly: !!a.httpOnly,
        expiry: v(a.expiry),
      });
  } catch {
  } finally {
    try {
      (o?.close(), await h.removeSourceDatabase(t));
    } catch {}
  }
  return n;
}
function v(e) {
  if (e != null) return e >= 1e11 ? e / 1e3 : e;
}
async function U(e) {
  const n = y.join(e, "cookies.sqlite");
  if (!(await h.fileExists(n))) return [];
  const t = await h.copySourceDatabase(n);
  let o = null;
  try {
    return (
      (o = new w(t, { readonly: !0 })),
      o
        .prepare(
          `SELECT host, name, isHttpOnly AS httpOnly, expiry FROM moz_cookies${E(o)}`,
        )
        .all()
        .map((a) => {
          const i = v(a.expiry);
          return {
            host: a.host,
            name: a.name,
            httpOnly: a.httpOnly === 1,
            expiresAt: i === void 0 ? null : i * 1e3,
          };
        })
    );
  } finally {
    (o?.close(), await h.removeSourceDatabase(t));
  }
}
async function W(e) {
  try {
    const n = y.join(e, "sessionstore-backups"),
      t = y.join(n, "recovery.jsonlz4");
    if (await h.fileExists(t)) return t;
    const o = y.join(e, "sessionstore.jsonlz4");
    if (await h.fileExists(o)) return o;
    const d = y.join(n, "previous.jsonlz4");
    return (await h.fileExists(d)) ? d : null;
  } catch {
    return null;
  }
}
async function _(e) {
  const n = await x.readFile(e);
  if (!n.slice(0, 8).toString("ascii").startsWith("mozLz40"))
    throw new Error("Invalid mozLz4 header");
  const o = n.readUInt32LE(8),
    d = n.slice(12),
    a = new Uint8Array(o),
    i = L.decompressBlock(new Uint8Array(d), a, 0, d.length, 0);
  return i !== o
    ? Buffer.from(a.subarray(0, i)).toString("utf8")
    : Buffer.from(a).toString("utf8");
}
async function B(e) {
  try {
    if (!(await h.fileExists(e))) return null;
    const n = await x.readFile(e);
    let t = null;
    try {
      n.slice(0, 8).toString("ascii").startsWith("mozLz40") && (t = await _(e));
    } catch {}
    if (t == null)
      try {
        t = n.toString("utf8");
      } catch {}
    if (!t) return null;
    try {
      const o = JSON.parse(t),
        d = o.windows || [],
        a = [],
        i = [],
        r = new Map(),
        u = (m) => {
          m.id &&
            r.set(m.id, {
              firefoxId: m.id,
              title: m.name || m.title || void 0,
              collapsed: !!m.collapsed,
            });
        };
      for (const m of o.savedGroups || []) u(m);
      for (const m of d) {
        for (const p of m.groups || []) u(p);
        const g = [];
        for (const p of m.tabs || []) {
          const b = p.entries || [];
          if (!b || b.length === 0) continue;
          const s = typeof p.index == "number" ? p.index : b.length,
            f = Math.max(1, Math.min(b.length, s)),
            l = b[f - 1];
          if (l && l.url) {
            const c = {
              lastActiveAt:
                typeof p.lastAccessed == "number" &&
                Number.isFinite(p.lastAccessed) &&
                p.lastAccessed > 0
                  ? p.lastAccessed
                  : void 0,
              url: l.url,
              title: l.title || l.url,
              pinned: !!p.pinned,
              groupId: typeof p.groupId == "string" ? p.groupId : void 0,
              zenEssential: !!p.zenEssential,
              zenWorkspace:
                typeof p.zenWorkspace == "string" ? p.zenWorkspace : void 0,
              index: g.length,
            };
            (a.push(c), g.push(c));
          }
        }
        i.push(...q(m, g));
      }
      return { tabs: a, groups: [...r.values()], zenPinBookmarks: i };
    } catch {
      return null;
    }
  } catch {
    return null;
  }
}
function q(e, n) {
  const t = n.filter((r) => r.pinned && !r.zenEssential && !Q(r.url));
  if (t.length === 0) return [];
  const o = H(e),
    d = new Map();
  for (const r of o.values()) {
    if (!r.parentId) continue;
    const u = d.get(r.parentId) || [];
    (u.push(r), d.set(r.parentId, u));
  }
  const a = new Map();
  for (const r of t) {
    if (!r.groupId) continue;
    const u = a.get(r.groupId) || [];
    (u.push(r), a.set(r.groupId, u));
  }
  return P(e, t, o)
    .map((r) => {
      const u = $(r.id, t, o, d, a);
      return u.length === 0 ? null : O(r.name, u);
    })
    .filter((r) => r !== null);
}
function H(e) {
  const n = new Map();
  for (const t of e.groups || [])
    !t.id ||
      t.pinned !== !0 ||
      n.set(t.id, { id: t.id, name: F(t), parentId: null });
  for (const t of e.folders || []) {
    if (!t.id || t.pinned !== !0) continue;
    const o = n.get(t.id);
    n.set(t.id, {
      id: t.id,
      name: F(t) || o?.name || "Untitled Folder",
      parentId: t.parentId || null,
      workspaceId: t.workspaceId || o?.workspaceId,
    });
  }
  return n;
}
function P(e, n, t) {
  const o = new Map(),
    d = [];
  for (const r of e.spaces || []) {
    const u = r.uuid || r.id;
    u && (o.set(u, Y(r)), d.push(u));
  }
  const a = new Set();
  for (const r of n) r.zenWorkspace && a.add(r.zenWorkspace);
  for (const r of t.values()) r.workspaceId && a.add(r.workspaceId);
  const i = d
    .filter((r) => a.has(r))
    .map((r) => ({ id: r, name: o.get(r) || "Zen Pins" }));
  for (const r of a) o.has(r) || i.push({ id: r, name: "Zen Pins" });
  return i.length > 0 ? i : [{ id: null, name: "Zen Pins" }];
}
function $(e, n, t, o, d) {
  const a = n.filter((r) => !r.groupId && K(r) === e),
    i = [...t.values()].filter((r) => !r.parentId && J(r, d) === e);
  return D([
    ...a.map((r) => ({ sortIndex: r.index, bookmark: T(r) })),
    ...i.map((r) => ({
      sortIndex: I(r, o, d),
      bookmark: z(r, o, d, new Set()),
    })),
  ]);
}
function z(e, n, t, o) {
  if (o.has(e.id)) return null;
  o.add(e.id);
  const d = t.get(e.id) || [],
    a = n.get(e.id) || [],
    i = D([
      ...d.map((r) => ({ sortIndex: r.index, bookmark: T(r) })),
      ...a.map((r) => ({
        sortIndex: I(r, n, t),
        bookmark: z(r, n, t, new Set(o)),
      })),
    ]);
  return i.length === 0 ? null : O(e.name, i);
}
function D(e) {
  return e
    .filter((n) => n.bookmark !== null)
    .sort((n, t) => n.sortIndex - t.sortIndex)
    .map((n) => n.bookmark);
}
function I(e, n, t) {
  const o = (t.get(e.id) || []).map((i) => i.index),
    d = (n.get(e.id) || []).map((i) => I(i, n, t)),
    a = [...o, ...d];
  return a.length === 0 ? Number.MAX_SAFE_INTEGER : Math.min(...a);
}
function J(e, n) {
  return e.workspaceId
    ? e.workspaceId
    : n.get(e.id)?.find((o) => o.zenWorkspace)?.zenWorkspace || null;
}
function K(e) {
  return e.zenWorkspace || null;
}
function F(e) {
  return e.name?.trim() || e.title?.trim() || "Untitled Folder";
}
function Y(e) {
  return e.name?.trim() || e.title?.trim() || "Zen Pins";
}
function T(e) {
  const n = Date.now().toString();
  return {
    id: M(),
    guid: S.randomUUID(),
    name: e.title || e.url,
    type: "url",
    url: e.url,
    date_added: n,
    date_modified: n,
    date_last_used: "0",
  };
}
function O(e, n) {
  const t = Date.now().toString();
  return {
    id: M(),
    guid: S.randomUUID(),
    name: e,
    type: "folder",
    children: n,
    date_added: t,
    date_modified: t,
    date_last_used: "0",
  };
}
function M() {
  return `zen-${S.randomUUID()}`;
}
function Q(e) {
  return e.startsWith("about:");
}
async function X(e) {
  const n = [];
  try {
    if (!(await h.fileExists(e))) return n;
    const t = await x.readFile(e);
    let o = null;
    try {
      t.slice(0, 8).toString("ascii").startsWith("mozLz40") && (o = await _(e));
    } catch {}
    if (!o)
      try {
        o = t.toString("utf8");
      } catch {}
    if (!o) return n;
    const d = JSON.parse(o),
      a = Array.isArray(d.cookies) ? d.cookies : [];
    for (const i of a) {
      const r = typeof i.host == "string" ? i.host : "",
        u = typeof i.name == "string" ? i.name : "",
        m = typeof i.value == "string" ? i.value : "",
        g = typeof i.path == "string" ? i.path : "/";
      !u ||
        !r ||
        n.push({
          name: u,
          value: m,
          domain: r,
          path: g,
          secure: !!i.secure,
          httpOnly: !!i.httponly,
        });
    }
  } catch {}
  return n;
}
function V(e, n) {
  try {
    const t = new URL(n.startsWith("http") ? n : `https://${n}`),
      o = `${t.protocol.replace(":", "")}+++${t.host}`,
      d = y.join(e, "storage", "default", o);
    return {
      localStoragePath: y.join(d, "ls"),
      indexedDbPath: y.join(d, "idb"),
    };
  } catch {
    const t = y.join(e, "storage", "default", n);
    return {
      localStoragePath: y.join(t, "ls"),
      indexedDbPath: y.join(t, "idb"),
    };
  }
}
exports.convertFirefoxTimestamp = j;
exports.decompressMozLz4 = _;
exports.findFirefoxSessionFile = W;
exports.firefoxOriginStoragePaths = V;
exports.readFirefoxBookmarks = N;
exports.readFirefoxCookieNames = U;
exports.readFirefoxCookies = R;
exports.readFirefoxHistory = Z;
exports.readFirefoxSessionCookies = X;
exports.readFirefoxTabsFromSession = B;
