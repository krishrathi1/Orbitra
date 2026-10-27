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
      (e._sentryDebugIds[n] = "d9151773-6f17-475c-a3c3-9e8ccaaf8c57"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d9151773-6f17-475c-a3c3-9e8ccaaf8c57"));
  })();
} catch {}
const c = require("node:path"),
  He = require("node:os"),
  S = require("./savedCertificateBlocklist-BUtmL3xA.js"),
  y = require("node:fs/promises"),
  Ze = require("valibot"),
  Ke = require("./appDataPath-20zIIRaW.js");
function fe(e) {
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
const m = fe(y),
  s = fe(Ze),
  he = "synced-account-folders.json",
  Je = s.object({
    version: s.number(),
    folders: s.record(
      s.pipe(s.string(), s.check(S.isUsableAccountId)),
      s.pipe(s.string(), s.regex(/^[1-9][0-9]{0,8}$/)),
    ),
  });
async function Y(e) {
  try {
    return (await y.stat(e), !0);
  } catch {
    return !1;
  }
}
async function Ve(e) {
  let n;
  try {
    n = await y.readFile(c.join(e, he), "utf8");
  } catch (t) {
    if (t instanceof Error && "code" in t && t.code === "ENOENT")
      return new Map();
    throw t;
  }
  return new Map(Object.entries(s.parse(Je, JSON.parse(n)).folders));
}
async function Xe(e, n) {
  await y.mkdir(e, { recursive: !0 });
  const t = c.join(e, he),
    o = `${t}.partial`,
    a = { version: 1, folders: Object.fromEntries(n) };
  (await y.writeFile(o, JSON.stringify(a, null, 2), {
    encoding: "utf8",
    flush: !0,
  }),
    await y.rename(o, t));
}
async function Qe(e, n) {
  const t = new Set(n.values());
  for (let o = 1; ; o++) {
    const a = String(o);
    if (!t.has(a) && !(await Y(c.join(e, a)))) return a;
  }
}
async function et(e) {
  if (!S.isUsableAccountId(e.userId))
    throw new Error(
      "a synced folder cannot be assigned to an account id that is not a plain id",
    );
  const n = c.join(e.appDataPath, S.SYNCED_CONTAINER);
  let t;
  try {
    t = await Ve(e.appDataPath);
  } catch {
    return { kind: "held", folder: e.userId, reason: "record-unreadable" };
  }
  let o = t.get(e.userId);
  o === void 0 &&
    ((o = await Qe(n, t)), t.set(e.userId, o), await Xe(e.appDataPath, t));
  const a = c.join(n, o),
    i = c.join(n, e.userId);
  if ((await Y(a)) || !(await Y(i))) return { kind: "recorded", folder: o };
  try {
    await (e.moveDirectory ?? y.rename)(i, a);
  } catch (r) {
    const l = r instanceof Error && "code" in r ? r.code : null;
    return {
      kind: "held",
      folder: e.userId,
      reason: typeof l == "string" ? l : "rename-failed",
    };
  }
  return (
    await y.symlink(a, i, "junction").catch(() => {}),
    { kind: "moved", folder: o }
  );
}
let ce = Promise.resolve();
function tt(e) {
  const n = ce.then(() => et(e));
  return ((ce = n.catch(() => {})), n);
}
const pe = "synced-relocation.json";
async function q(e) {
  try {
    return (await y.stat(e), !0);
  } catch {
    return !1;
  }
}
async function nt(e) {
  try {
    const n = await y.readFile(c.join(e, pe), "utf8"),
      t = JSON.parse(n);
    if (t === null || typeof t != "object") return null;
    const o = t;
    return typeof o.resolvedRoot != "string" || typeof o.userId != "string"
      ? null
      : {
          userId: o.userId,
          from: o.from ?? "",
          to: o.to ?? "",
          resolvedRoot: o.resolvedRoot,
          completedAt: o.completedAt ?? 0,
          heldForCrossDevice: o.heldForCrossDevice ?? !1,
        };
  } catch {
    return null;
  }
}
async function j(e, n) {
  await y.mkdir(e, { recursive: !0 });
  const t = c.join(e, pe),
    o = `${t}.partial`;
  (await y.writeFile(o, JSON.stringify(n, null, 2), "utf8"),
    await y.rename(o, t));
}
async function ot(e) {
  const n = await nt(e.markerDirectory);
  if (n !== null && (e.userId === null || n.userId === e.userId)) {
    const a = n.resolvedRoot !== e.legacyRoot;
    return {
      kind: "not-needed",
      resolvedRoot: n.resolvedRoot,
      legacyTreePresent: a && (await q(e.legacyRoot)),
    };
  }
  const t = await q(e.legacyRoot);
  if (e.userId === null || !S.isUsableAccountId(e.userId))
    return {
      kind: "deferred",
      reason: "unknown-account",
      resolvedRoot: t ? e.legacyRoot : e.accountRoot,
    };
  if (!t)
    return (
      await j(e.markerDirectory, {
        userId: e.userId,
        from: e.legacyRoot,
        to: e.accountRoot,
        resolvedRoot: e.accountRoot,
        completedAt: e.clock(),
        heldForCrossDevice: !1,
      }),
      { kind: "not-needed", resolvedRoot: e.accountRoot, legacyTreePresent: !1 }
    );
  if (await q(e.accountRoot))
    return (
      await j(e.markerDirectory, {
        userId: e.userId,
        from: e.legacyRoot,
        to: e.accountRoot,
        resolvedRoot: e.accountRoot,
        completedAt: e.clock(),
        heldForCrossDevice: !1,
      }),
      { kind: "not-needed", resolvedRoot: e.accountRoot, legacyTreePresent: !0 }
    );
  try {
    (await y.mkdir(c.dirname(e.accountRoot), { recursive: !0 }),
      await (e.moveDirectory ?? y.rename)(e.legacyRoot, e.accountRoot));
  } catch (a) {
    const i = a instanceof Error && "code" in a ? a.code : null;
    if (i === "EXDEV") {
      const r = {
        userId: e.userId,
        from: e.legacyRoot,
        to: e.accountRoot,
        resolvedRoot: e.legacyRoot,
        completedAt: e.clock(),
        heldForCrossDevice: !0,
      };
      return (
        await j(e.markerDirectory, r),
        { kind: "held", reason: "cross-device", resolvedRoot: e.legacyRoot }
      );
    }
    return {
      kind: "failed",
      reason: typeof i == "string" ? i : "rename-failed",
      resolvedRoot: e.legacyRoot,
    };
  }
  const o = {
    userId: e.userId,
    from: e.legacyRoot,
    to: e.accountRoot,
    resolvedRoot: e.accountRoot,
    completedAt: e.clock(),
    heldForCrossDevice: !1,
  };
  return (await j(e.markerDirectory, o), { kind: "moved", record: o });
}
const rt = { profile: "profile", org: "team" },
  at = /^([0-9a-f]{8})-([0-9a-f]{4})-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function ge(e) {
  const n = e.toLowerCase(),
    [, t, o] = at.exec(n) ?? [];
  if (t === void 0 || o === void 0)
    throw new Error(
      "a workspace folder cannot be named for an id that is not a UUID",
    );
  return { firstGroup: t, secondGroup: o, whole: n.replaceAll("-", "") };
}
const le = 9,
  it = 39;
function F(e, n) {
  const { firstGroup: t, secondGroup: o, whole: a } = ge(n),
    i = rt[e],
    r = String(Number.parseInt(t, 16) % 10 ** le).padStart(le, "0"),
    l = String((Number.parseInt(o, 16) % 999) + 1).padStart(3, "0"),
    h = BigInt(`0x${a}`).toString(10).padStart(it, "0");
  return [`${i}-${r}`, `${i}-${r}${l}`, `${i}-${h}`];
}
function me(e, n, t) {
  const { whole: o } = ge(n),
    a = F(e, n),
    i = [];
  for (const l of t)
    if (l.toLowerCase().replaceAll("-", "") !== o)
      try {
        i.push(F(e, l));
      } catch {
        continue;
      }
  const r = a.findIndex((l, h) => i.every((f) => f[h] !== l));
  return a[r] ?? a[2];
}
const J = ".orbitra-workspace",
  st = 500;
async function _(e) {
  const n = await m.readFile(c.join(e, J), "utf-8").catch(() => null);
  if (!n) return null;
  try {
    return JSON.parse(n);
  } catch {
    return null;
  }
}
async function V(e, n) {
  const [t, o] = await Promise.all([
    m.realpath(c.join(e, n)).catch(() => null),
    m.realpath(e).catch(() => null),
  ]);
  return t === null || o === null || c.dirname(t) !== o ? null : c.basename(t);
}
async function N(e, n) {
  return n.isDirectory()
    ? !0
    : n.isSymbolicLink() && (await V(e, n.name)) === null;
}
async function ye(e) {
  let n = 0;
  const t = [e];
  for (let o = t.pop(); o !== void 0; o = t.pop()) {
    const a = await m.readdir(o, { withFileTypes: !0 }).catch(() => []);
    for (const i of a) {
      if (i.isDirectory()) {
        t.push(c.join(o, i.name));
        continue;
      }
      if (!(o === e && i.name === J) && ((n += 1), n >= st))
        return { count: n, capped: !0 };
    }
  }
  return { count: n, capped: !1 };
}
async function ct(e) {
  const n = await m.readdir(e.rootDir, { withFileTypes: !0 }).catch(() => []),
    t = [];
  for (const o of n) {
    if (o.name === e.activeDirName || !(await N(e.rootDir, o))) continue;
    const a = c.join(e.rootDir, o.name),
      i = await _(a);
    if (i?.type !== "org" || i.organizationId !== e.organizationId) continue;
    const { count: r, capped: l } = await ye(a);
    t.push({
      name: o.name,
      path: a,
      fileCount: r,
      fileCountCapped: l,
      team: e.teamName,
    });
  }
  return t;
}
async function lt(e) {
  const n = await m.readdir(e.rootDir, { withFileTypes: !0 }).catch(() => []),
    t = [];
  for (const o of n) {
    if (!(await N(e.rootDir, o))) continue;
    const a = c.join(e.rootDir, o.name),
      i = await m.realpath(a).catch(() => a);
    if (i === e.activeDir || a === e.activeDir) continue;
    const r = await _(i);
    if (r?.type !== "profile" || r.profileId !== e.profileId) continue;
    const { count: l, capped: h } = await ye(i);
    t.push({ name: o.name, path: i, fileCount: l, fileCountCapped: h });
  }
  return t;
}
function X(e) {
  return (
    e
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "") || "default"
  );
}
class L extends Error {
  constructor(n, t = []) {
    (super(n),
      (this.candidates = t),
      (this.name = "OrgWorkspaceDirectoryConflictError"));
  }
}
const dt = 24,
  ut = 8,
  ft =
    /^team-(.+)--([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i;
function we(e) {
  return e.replace(/-/g, "").slice(0, ut).toLowerCase();
}
function $(e, n) {
  return `team-${X(e).slice(0, dt).replace(/_+$/, "")}-${we(n)}`;
}
function C(e) {
  const n = ft.exec(e);
  return !n?.[1] || !n[2] ? null : $(n[1], n[2]);
}
function ht(e, n) {
  return (C(e) ?? e) === (C(n) ?? n);
}
function ke(e, n) {
  const t = [`--${n}`, `-${we(n)}`].find((a) => e.endsWith(a)),
    o = t ? e.slice(0, -t.length) : e;
  return o.startsWith("team-") ? o.slice(5) : o;
}
function pt(e, n) {
  if (e.type === "profile") return [e.name];
  const t = e.organizationId;
  if (e.type !== "org" || t === void 0) return [];
  const o = new Set([e.name]);
  for (const a of [ke(e.name, t), n]) a && o.add($(a, t));
  return [...o];
}
async function gt(e) {
  const n = `team-${X(e.organizationName)}`,
    t = me("org", e.workspaceId, e.teamWorkspaceIds ?? []),
    o = [$(e.organizationName, e.organizationId), `${n}--${e.organizationId}`],
    a = await m.readdir(e.rootDir, { withFileTypes: !0 }).catch(() => []),
    i = [];
  for (const d of a) (await N(e.rootDir, d)) && i.push(d.name);
  const r = [];
  for (const d of i) {
    const g = await _(c.join(e.rootDir, d));
    g?.type === "org" && g.organizationId === e.organizationId && r.push(d);
  }
  if (r.length > 1) {
    const d = e.recordedDirectory;
    if (d !== void 0 && i.includes(d)) {
      const g = await _(c.join(e.rootDir, d));
      if (!g?.organizationId || g.organizationId === e.organizationId) return d;
    }
    throw new L(
      `Multiple local folders claim team ${e.organizationName}. Keep the correct folder and move the other aside, then retry.`,
      r,
    );
  }
  if (r[0]) return r[0];
  const l = async (d) => {
      if (e.takenDirectories?.has(d)) return !0;
      if (!i.includes(d)) return !1;
      const g = await _(c.join(e.rootDir, d));
      return (
        (g?.organizationId !== void 0 &&
          g.organizationId !== e.organizationId) ||
        (g?.workspaceId !== void 0 && g.workspaceId !== e.workspaceId)
      );
    },
    h = F("org", e.workspaceId);
  let f;
  for (const d of h.slice(h.indexOf(t)))
    if (!(await l(d))) {
      f = d;
      break;
    }
  if (f === void 0)
    throw new L(
      `The local folder ${t} belongs to another workspace. Move it aside, then retry.`,
    );
  for (const d of [f, ...o]) {
    if (!i.includes(d)) continue;
    const g = await _(c.join(e.rootDir, d));
    if (g?.organizationId && g.organizationId !== e.organizationId)
      throw new L(
        `The local folder ${d} belongs to another team. Move it aside, then retry.`,
      );
    return d;
  }
  if (i.includes(n) && !e.takenDirectories?.has(n)) {
    const d = await _(c.join(e.rootDir, n));
    if (!d?.organizationId || d.organizationId === e.organizationId) return n;
  }
  return f;
}
const T = new Map();
function x(e) {
  return e instanceof Error && "code" in e && typeof e.code == "string"
    ? e.code
    : void 0;
}
async function be(e) {
  let n;
  try {
    n = await m.readdir(e, { withFileTypes: !0 });
  } catch (o) {
    if (x(o) !== "ENOENT") throw o;
    n = [];
  }
  const t = [];
  for (const o of n) {
    if (!o.isDirectory()) continue;
    const a = await _(c.join(e, o.name)),
      i = a?.type;
    !a?.workspaceId ||
      (i !== "profile" && i !== "org") ||
      t.push({ name: o.name, workspaceId: a.workspaceId, type: i });
  }
  return { entries: n, marked: t };
}
function ve(e) {
  const n = new Map();
  for (const o of e) n.set(o.workspaceId, n.has(o.workspaceId) ? null : o);
  const t = new Map();
  for (const [o, a] of n) a && t.set(o, a);
  return t;
}
function mt(e, n) {
  try {
    return F(e, n);
  } catch {
    return [];
  }
}
function _e(e) {
  const n = { profile: new Set(), org: new Set() };
  for (const t of e) n[t.type].add(t.workspaceId);
  return n;
}
function Re(e, n, t) {
  try {
    return me(e, n, t[e]);
  } catch {
    return null;
  }
}
function P(e) {
  const n = new Set();
  for (const t of ["profile", "org"])
    for (const o of [0, 1]) {
      const a = new Set();
      for (const i of e[t]) {
        let r;
        try {
          r = F(t, i)[o];
        } catch {
          continue;
        }
        (a.has(r) && n.add(r), a.add(r));
      }
    }
  return n;
}
async function de(e, n, t) {
  process.platform === "win32"
    ? await m.symlink(c.join(e, t), c.join(e, n), "junction")
    : await m.symlink(t, c.join(e, n), "dir");
}
async function yt(e, n) {
  const { entries: t, marked: o } = await be(e),
    a = new Set(t.map((u) => u.name)),
    i = ve(o),
    r = _e(o),
    l = P(r),
    h = new Map();
  for (const u of t) {
    if (!u.isSymbolicLink()) continue;
    const p = await V(e, u.name);
    p !== null && h.set(u.name, p);
  }
  const f = [],
    d = new Map();
  let g = 0;
  for (const [u] of h)
    l.has(u) &&
      (await m.unlink(c.join(e, u)).then(
        () => a.delete(u),
        () => {},
      ),
      h.delete(u));
  for (const u of i.values()) {
    const { workspaceId: p } = u,
      b = Re(u.type, p, r);
    if (b !== null) {
      if (b !== u.name) {
        if (a.has(b)) {
          f.push({ workspaceId: p, reason: "name-taken" });
          continue;
        }
        try {
          await m.rename(c.join(e, u.name), c.join(e, b));
        } catch (w) {
          f.push({ workspaceId: p, reason: "rename-failed", code: x(w) });
          continue;
        }
        (a.delete(u.name), a.add(b), (g += 1));
        for (const [w, U] of h)
          if (U === u.name) {
            d.set(w, b);
            try {
              (await m.unlink(c.join(e, w)), await de(e, w, b), h.set(w, b));
            } catch (Ge) {
              f.push({ workspaceId: p, reason: "link-failed", code: x(Ge) });
            }
          }
      }
      for (const w of new Set([u.name, n.get(p)]))
        if (!(w === void 0 || a.has(w) || l.has(w))) {
          d.set(w, b);
          try {
            (await de(e, w, b), a.add(w));
          } catch (U) {
            f.push({ workspaceId: p, reason: "link-failed", code: x(U) });
          }
        }
    }
  }
  return (await Se(e, d), { moved: g, failures: f });
}
async function wt(e) {
  T.has(e) || (await Se(e));
}
async function Se(e, n = new Map()) {
  const { entries: t, marked: o } = await be(e),
    a = await m.realpath(e).catch(() => e),
    i = new Set(t.map((u) => u.name)),
    r = new Map();
  for (const u of t) {
    if (!u.isSymbolicLink()) continue;
    const p = await V(e, u.name);
    p !== null && r.set(u.name, p);
  }
  const l = ve(o),
    h = _e(o),
    f = P(h),
    d = new Map([...r].filter(([u]) => !f.has(u)));
  for (const [u, p] of n)
    i.has(p) && !i.has(u) && !f.has(u) && !d.has(u) && d.set(u, p);
  for (const u of l.values())
    for (const p of mt(u.type, u.workspaceId))
      !i.has(p) && !f.has(p) && !d.has(p) && d.set(p, u.name);
  for (const u of [...i, ...d.keys()]) {
    const p = C(u);
    p === null || i.has(p) || d.has(p) || d.set(p, d.get(u) ?? u);
  }
  const g = new Map();
  for (const [u, p] of l) g.set(u, p.name);
  T.set(e, {
    realRoot: a,
    byWorkspaceId: g,
    workspaceOf: new Map(o.map((u) => [u.name, u.workspaceId])),
    links: r,
    aliases: d,
    names: i,
    namesElsewhere: new Map(),
    profileFolders: new Map(),
    known: h,
  });
}
function kt(e, n) {
  return z(e)?.byWorkspaceId.get(n);
}
function bt(e, n) {
  const t = z(e);
  if (t) {
    for (const { type: o, id: a } of n)
      (o === "profile" || o === "org") && t.known[o].add(a);
    for (const o of P(t.known))
      (t.aliases.delete(o), t.namesElsewhere.delete(o));
  }
}
function z(e) {
  const n = T.get(e);
  if (n) return n;
  for (const t of T.values()) if (t.realRoot === e) return t;
}
function Ae(e, n) {
  const t = z(e);
  if (!t) return n;
  const o = (i) =>
      t.aliases.get(i) ?? (t.names.has(i) ? i : t.namesElsewhere.get(i)),
    a = C(n);
  return o(n) ?? (a === null ? void 0 : o(a)) ?? n;
}
function vt(e, n, t) {
  const o = z(e);
  if (!o) return;
  const a = new Set([
      ...n,
      ...o.names,
      ...t.map((r) => r.folder),
      ...P(o.known),
    ]),
    i = new Map();
  for (const { folder: r, formerNames: l } of t)
    for (const h of l) {
      if (a.has(h)) continue;
      const f = i.get(h);
      i.set(h, f === void 0 || f === r ? r : null);
    }
  o.namesElsewhere.clear();
  for (const [r, l] of i) l !== null && o.namesElsewhere.set(r, l);
}
function G(e, n) {
  if (!c.isAbsolute(e)) return e;
  for (const [t, o] of T)
    if (!(n !== void 0 && t !== n))
      for (const a of new Set([t, o.realRoot])) {
        const i = c.relative(a, e);
        if (!i || i === ".." || i.startsWith(`..${c.sep}`) || c.isAbsolute(i))
          continue;
        const [r = "", ...l] = i.split(c.sep),
          h = Ae(t, r);
        return h === r ? e : c.join(a, h, ...l);
      }
  return e;
}
async function _t(e) {
  const n = c.resolve(e),
    t = c.dirname(n),
    o = c.basename(n);
  for (const [a, i] of T) {
    if (t !== a && t !== i.realRoot) continue;
    for (const [l, h] of i.links)
      h === o &&
        (await m.unlink(c.join(a, l)).catch(() => {}),
        i.links.delete(l),
        i.names.delete(l));
    for (const l of [i.aliases, i.namesElsewhere])
      for (const [h, f] of l) f === o && l.delete(h);
    const r = i.workspaceOf.get(o);
    (r !== void 0 && i.byWorkspaceId.get(r) === o && i.byWorkspaceId.delete(r),
      i.workspaceOf.delete(o),
      i.names.delete(o));
    return;
  }
}
function Ie(e, n) {
  const t = T.get(e);
  if (!t) return n.syncedDirName;
  let o = t.profileFolders.get(n.profileId);
  return (
    o === void 0 &&
      ((o = Rt(t, n)),
      t.profileFolders.set(n.profileId, o),
      t.links.has(o) ||
        (t.names.add(o), t.aliases.delete(o), t.namesElsewhere.delete(o))),
    o
  );
}
function Rt(e, { syncedDirName: n, workspaceId: t }) {
  if (t !== void 0) {
    const r = e.byWorkspaceId.get(t);
    if (r !== void 0) return r;
  }
  const o = (r) => {
      const l = e.workspaceOf.get(r);
      return t !== void 0 && l !== void 0 && l !== t;
    },
    a = e.aliases.get(n);
  if (a !== void 0 && !o(a)) return a;
  if ((e.names.has(n) && !e.links.has(n) && !o(n)) || t === void 0) return n;
  const i = Re("profile", t, e.known);
  return i === null || e.names.has(i) ? n : i;
}
let A = null;
const R = new Map();
let I = null;
const St = "Synced-signed-out",
  H = new Set();
function Q(e) {
  return (H.add(e), () => H.delete(e));
}
function ee(e, n) {
  for (const t of H)
    try {
      t(e, n);
    } catch (o) {
      console.warn("[file-paths] synced layout listener failed:", o);
    }
}
function Te(e) {
  const n = c.join(e, St);
  return (
    (I = {
      accountRoot: n,
      sharedWithMe: c.join(n, "shared-with-me"),
      shared: c.join(n, "shared"),
    }),
    A === null && ee(I),
    I
  );
}
const W = new Map();
function At(e, n) {
  const t = `${e}\0${n}`,
    o = W.get(t);
  if (o !== void 0) return o;
  const a = tt({ appDataPath: e, userId: n }).then(
    (i) => (
      i.kind === "moved"
        ? console.info(
            "[file-paths] Moved the synced tree into its short folder",
            { userId: n },
          )
        : i.kind === "held" &&
          console.warn(
            "[file-paths] Synced tree stays in its id-named folder until next start",
            { userId: n, reason: i.reason },
          ),
      i.folder
    ),
  );
  return (
    W.set(t, a),
    a.catch(() => {
      W.get(t) === a && W.delete(t);
    }),
    a
  );
}
async function Fe(e, n) {
  await wt(n).catch((t) => {
    console.warn(
      "[file-paths] Could not read the workspace folders of a synced tree",
      { userId: e, error: t },
    );
  });
}
const O = new Map();
function Ee(e, n) {
  const t = (O.get(e) ?? Promise.resolve()).then(n, n);
  O.set(e, t);
  const o = () => {
    O.get(e) === t && O.delete(e);
  };
  return (t.then(o, o), t);
}
function Me(e, n, t) {
  const o = R.get(e),
    a = o?.accountRoot === n.accountRoot ? o : n;
  return (
    R.set(e, a),
    t.select !== !1 && (A = a),
    o?.accountRoot !== a.accountRoot && ee(a, e),
    a
  );
}
async function je(e, n) {
  if (!S.isUsableAccountId(n))
    throw new Error(
      "a synced root cannot be resolved for an account id that is not a plain id",
    );
  return S.resolveSyncedLayout(e, await At(e, n));
}
async function We(e, n, t = {}) {
  const o = await je(e, n);
  return Ee(
    o.accountRoot,
    async () => (await Fe(n, o.accountRoot), Me(n, o, t)),
  );
}
async function Oe(e, n, t = {}) {
  const o = await je(e, n),
    a = await ot({
      legacyRoot:
        t.ownsHomeDirectoryTree === !0
          ? c.join(
              He.homedir(),
              process.env.NODE_ENV === "development"
                ? "Orbitra-Dev"
                : "Orbitra",
            )
          : c.join(e, "no-home-directory-tree"),
      accountRoot: o.accountRoot,
      markerDirectory: e,
      userId: n,
      clock: () => Date.now(),
    });
  return (
    await Ee(o.accountRoot, async () => {
      (await t.beforeBind?.(o), await Fe(n, o.accountRoot), Me(n, o, t));
    }),
    {
      layout: o,
      relocated: a.kind === "moved",
      legacyTreePresent: a.kind === "not-needed" && a.legacyTreePresent,
    }
  );
}
function Le(e) {
  const n = e ?? [...R].find(([, o]) => o === A)?.[0];
  if (n === void 0) return;
  const t = R.get(n);
  (R.delete(n), t === A && (A = null), ee(null, n));
}
function M(e) {
  return e !== void 0
    ? e === null
      ? I !== null
      : R.has(e)
    : A !== null || I !== null;
}
async function xe(e, n) {
  for (n.throwIfAborted(); !M(e); )
    (await new Promise((t, o) => {
      const a = Q(() => {
          M(e) && (a(), n.removeEventListener("abort", i), t());
        }),
        i = () => {
          (a(),
            o(
              new DOMException(
                "Waiting for the profile account was cancelled.",
                "AbortError",
              ),
            ));
        };
      n.addEventListener("abort", i, { once: !0 });
    }),
      n.throwIfAborted());
}
function E(e) {
  let n;
  if (
    (e === void 0
      ? (n = A ?? I)
      : e === null
        ? (n = I)
        : (n = R.get(e) ?? null),
    n === null)
  )
    throw new Error("no synced root: the app has no signed-in account yet");
  return n;
}
function Ce(e) {
  return E(e).accountRoot;
}
function te(e, n) {
  if (!c.isAbsolute(e) || n === null) return e;
  if (n !== void 0) {
    const t = R.get(n);
    return t ? ue(e, n, t) : e;
  }
  for (const [t, o] of R) {
    const a = ue(e, t, o);
    if (a !== e) return a;
  }
  return G(e);
}
function ue(e, n, t) {
  const o = c.join(c.dirname(t.accountRoot), n),
    a = c.relative(o, e);
  return a === ".." || a.startsWith(`..${c.sep}`) || c.isAbsolute(a)
    ? G(e, t.accountRoot)
    : G(c.join(t.accountRoot, a), t.accountRoot);
}
function ne(e) {
  return E(e).sharedWithMe;
}
function De(e, n) {
  const t = e.trim(),
    o = t.replace(/\\/g, "/"),
    a = c.posix.resolve("/", o).slice(1);
  if (a === "shared-with-me" || a.startsWith("shared-with-me/")) return !0;
  if (!c.isAbsolute(t)) return !1;
  const i = (g) => c.resolve(g).replace(/\\/g, "/").replace(/\/+$/, ""),
    r = i(ne(n)),
    l = i(t),
    h = process.platform === "darwin" || process.platform === "win32",
    f = h ? r.toLowerCase() : r,
    d = h ? l.toLowerCase() : l;
  return d === f || d.startsWith(`${f}/`);
}
function Ne(e, n, t) {
  const o = E(n),
    a = t ? Ie(o.accountRoot, { ...t, syncedDirName: e }) : e;
  return S.resolveProfileRoot(o, a);
}
function oe(e, n) {
  const t = S.SYNCED_FS_LAYOUT,
    o = (r) => c.join(e, r),
    a = (r, l) => c.join(n?.(r) ?? e, l),
    i = (r) => c.join(a(r, t.session(r)), "final-report.md");
  return {
    root: e,
    sessions: o(t.sessions),
    session: (r) => a(r, t.session(r)),
    sessionPlan: (r) => c.join(a(r, t.session(r)), "PLAN.md"),
    sessionFinalReport: i,
    sessionAgentFinalReport: (r, l) => i(`${r}/agents/${l}`),
    sessionUploads: (r) => a(r, t.sessionUploads(r)),
    sessionData: (r) => a(r, t.sessionData(r)),
    bashOutput: (r, l) =>
      c.join(a(r, t.sessionData(r)), "tool-results", `${l}-output.txt`),
    sessionNetwork: (r) => a(r, t.sessionNetwork(r)),
    sessionDownloads: (r) => a(r, t.sessionDownloads(r)),
    sessionTranscripts: (r) => a(r, t.sessionTranscripts(r)),
    sessionMount: (r) => a(r, t.sessionMount(r)),
    tabs: o(t.tabs),
    tab: (r) => o(t.tab(r)),
    tabNetwork: (r) => o(t.tabNetwork(r)),
    companions: o(t.companions),
    companion: (r) => o(t.companion(r)),
    companionRoot: (r) => o(t.companion(r)),
    companionManifest: (r) => o(t.companionManifest(r)),
    companionMemories: (r) => o(t.companionMemories(r)),
    companionMemoryFile: (r) => o(t.companionMemoryFile(r)),
    companionActivityLog: (r) => o(t.companionActivityLog(r)),
    companionActivityLogForDay: (r, l) => o(t.companionActivityLogForDay(r, l)),
    companionMemory: (r) => o(t.companionMemory(r)),
    companionSkills: (r) => o(t.companionSkills(r)),
    companionSkillFile: (r, l) => o(t.companionSkillFile(r, l)),
    companionWorkspace: (r, l) => o(t.companionWorkspace(r, l)),
    companionObservations: (r) => o(t.companionObservations(r)),
    companionObservationsForDay: (r, l) =>
      o(t.companionObservationsForDay(r, l)),
    skills: o(t.skills),
    skill: (r) => o(t.skill(r)),
    skillFile: (r) => o(t.skillFile(r)),
    orbitraSkill: (r) => o(t.orbitraSkill(r)),
    integrations: o(t.integrations),
    integration: (r) => o(t.integration(r)),
    integrationCode: (r) => o(t.integrationCode(r)),
    shared: o(t.shared),
    sharedMemory: o(t.sharedMemory),
    entities: o(t.entities),
    entity: (r, l) => o(t.entity(r, l)),
    bestPractices: o(t.bestPractices),
    orbitraDoc: (r) => o(t.orbitraDoc(r)),
    sharedTranscript: (r) => o(t.transcript(r)),
    meetings: o(t.meetings),
    meetingsIgnoreFile: o(t.meetingsIgnoreFile),
    meetingProcessingTranscript: (r) => o(t.meetingProcessingTranscript(r)),
    meetingFolder: (r, l) => o(t.meetingFolder(r, l)),
    meetingFile: (r, l) => o(t.meetingFile(r, l)),
    globalMemory: o(t.globalMemory),
    sharedObservations: o(t.sharedObservations),
    sharedObservationsForDay: (r) => o(t.sharedObservationsForDay(r)),
    userJourney: o(t.userJourney),
    userOnboardingChecklist: o(t.userOnboardingChecklist),
    inviteCandidates: o(t.inviteCandidates),
    routineSuggestions: o(t.routineSuggestions),
    activityMemory: o(t.activityMemory),
  };
}
function $e(e, n, t) {
  const o = oe(e, t),
    a = {
      root: n,
      officialSkills: c.join(n, "official-skills"),
      chatSessionsDb: c.join(n, "chat-sessions.db"),
      profileDataDb: c.join(n, "profile-data.db"),
      audioRecordings: c.join(n, "audio-recordings"),
      agentLogs: c.join(n, "uni-agent-logs"),
      tempDownloads: c.join(n, "agent_temp_downloads"),
    };
  return { synced: o, appData: a };
}
const It = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        SYNCED_FS_LAYOUT: S.SYNCED_FS_LAYOUT,
        bindSyncedAccount: We,
        clearActiveSyncedAccount: Le,
        currentSyncedPath: te,
        getFilePaths: $e,
        getProfileSyncedRoot: Ne,
        getSharedWithMeDir: ne,
        getSyncedFilePaths: oe,
        getSyncedLayout: E,
        getSyncedRootDir: Ce,
        hasSyncedLayout: M,
        isSharedWithMePath: De,
        onSyncedLayoutChanged: Q,
        sanitizeAppId: Ke.sanitizeAppId,
        setActiveSyncedAccount: Oe,
        setSignedOutSyncedLayout: Te,
        waitForSyncedLayout: xe,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  v = "$ORBITRA";
function Tt(...e) {
  const n = e
    .flatMap((t) => t.split("/"))
    .filter(Boolean)
    .join("/");
  return n ? `${v}/${n}` : v;
}
function Ft(e) {
  return e;
}
function re(e) {
  const n = e.trim().replace(/\\/g, "/");
  return n === v
    ? ""
    : n.startsWith(`${v}/`)
      ? n
          .slice(v.length + 1)
          .split("/")
          .filter(Boolean)
          .join("/")
      : null;
}
function Et(e) {
  return re(e) !== null;
}
function Mt(e) {
  return /^[A-Za-z]:[\\/]/.test(e) || e.startsWith("\\\\");
}
function jt(e) {
  return e.replace(/[\\/]+$/, "");
}
function Pe(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Wt(e) {
  return e.split(/[\\/]/).map(Pe).join("[\\\\/]+");
}
function Ot(e) {
  const n = e.replace(/\\/g, "/"),
    t = encodeURI(n);
  return t === n ? null : Pe(t);
}
const Lt = String.raw`(?=$|[\\/]|[^A-Za-z0-9._-])`,
  xt = String.raw`((?:[\\/][^\s"'\x60<>|]*)?)`;
function ze(e) {
  const n = jt(e.trim());
  if (!n) return { accountRoot: e, toAgentPath: (f) => f, maskText: (f) => f };
  const t = Mt(n),
    o = [Wt(n)],
    a = Ot(n);
  a && o.push(a);
  const r = `${t ? String.raw`(?:\\\\\?\\)?` : ""}(?:${o.join("|")})${Lt}`,
    l = new RegExp(t ? `${r}${xt}` : r, t ? "gi" : "g"),
    h = new RegExp(`^${r}`, t ? "i" : "");
  return {
    accountRoot: e,
    toAgentPath: (f) => {
      const d = h.exec(f);
      if (!d) return f;
      const g = f.slice(d[0].length).split(/[\\/]/).filter(Boolean);
      return g.length > 0 ? `${v}/${g.join("/")}` : v;
    },
    maskText: (f) =>
      t
        ? f.replace(l, (d, g) => `${v}${g.replace(/\\/g, "/")}`)
        : f.replace(l, v),
  };
}
function Ue(e) {
  return /^[A-Za-z]:[\\/]/.test(e) || e.startsWith("\\\\") ? c.win32 : c.posix;
}
function Ct(e) {
  return Ue(e).dirname(e);
}
function Dt(e, n) {
  const t = re(e);
  if (t === null) return null;
  const o = t.split("/").filter(Boolean);
  if (o.includes("..")) return null;
  const a = Ue(n);
  return o.length > 0 ? te(a.join(n, ...o)) : a.normalize(n);
}
function Nt() {
  return ze(M() ? E().accountRoot : "");
}
const ae = {
  auth_expired: {
    tier: "expected",
    retryable: !1,
    safeUserMessage:
      "The integration authorization expired. For an ongoing task, continue on the website without asking permission to switch. If the task is only app setup, explain how to reconnect.",
    uiLabel: "Needs reconnect",
    uiTone: "provider",
  },
  missing_scopes: {
    tier: "expected",
    retryable: !1,
    safeUserMessage: "The connected account is missing required permissions.",
    uiLabel: "Failed",
    uiTone: "failed",
  },
  not_connected: {
    tier: "expected",
    retryable: !1,
    safeUserMessage:
      "The integration is not connected. For an ongoing task, continue on the website without asking permission to switch. If the task is only app setup, explain how to connect.",
    uiLabel: "Failed",
    uiTone: "failed",
  },
  account_unknown: {
    tier: "expected",
    retryable: !1,
    safeUserMessage:
      "The selected connected account is no longer available. Refresh the app's accounts and retry with a current account alias.",
    uiLabel: "Account unavailable",
    uiTone: "failed",
  },
  rate_limited: {
    tier: "transient",
    retryable: !0,
    safeUserMessage:
      "The integration provider is rate limiting requests. Continue the authorized task on the website without asking permission to switch. Respect any retry delay before calling the integration again.",
    uiLabel: "Retryable issue",
    uiTone: "retryable",
  },
  timeout: {
    tier: "transient",
    retryable: !0,
    safeUserMessage:
      "The integration request timed out. Continue the authorized task on the website without asking permission to switch. A write may have completed; inspect the affected resource before repeating it.",
    uiLabel: "Retryable issue",
    uiTone: "retryable",
  },
  network: {
    tier: "transient",
    retryable: !0,
    safeUserMessage:
      "The integration connection failed. Continue the authorized task on the website without asking permission to switch. If this was a write, verify whether it completed before repeating it.",
    uiLabel: "Retryable issue",
    uiTone: "retryable",
  },
  provider_permission: {
    tier: "expected",
    retryable: !1,
    safeUserMessage:
      "The provider rejected this action because the connected account lacks permission.",
    uiLabel: "Provider issue",
    uiTone: "provider",
  },
  provider_limit: {
    tier: "expected",
    retryable: !1,
    safeUserMessage:
      "The connected app has reached its usage or credit limit. Stop remaining calls that consume this allowance. Explain the limit and check when usage can resume.",
    uiLabel: "Provider limit",
    uiTone: "provider",
  },
  provider_validation: {
    tier: "expected",
    retryable: !1,
    safeUserMessage:
      "The provider rejected the action input. Check the parameters and try again.",
    uiLabel: "Needs different input",
    uiTone: "provider",
  },
  unsupported_action: {
    tier: "expected",
    retryable: !1,
    safeUserMessage:
      "This action is not available through the connected app. Check its actions with orbitra.help and use an advertised action. If that action still fails or none supports the task, continue on the website without asking permission to switch. Reconnecting does not add missing actions.",
    uiLabel: "Action unavailable",
    uiTone: "provider",
  },
  partial_completion: {
    tier: "error",
    retryable: !1,
    safeUserMessage:
      "Part of this action completed. Explain what was saved and what failed. Inspect the saved resource and resume it instead of repeating the whole action.",
    uiLabel: "Partly completed",
    uiTone: "failed",
  },
  write_unconfirmed: {
    tier: "error",
    retryable: !1,
    safeUserMessage:
      "The provider did not confirm whether this change completed. Check the affected resource before retrying; repeating the write could create duplicates.",
    uiLabel: "Outcome unconfirmed",
    uiTone: "failed",
  },
  provider_4xx: {
    tier: "error",
    retryable: !1,
    safeUserMessage: "The provider rejected the integration request.",
    uiLabel: "Provider issue",
    uiTone: "provider",
  },
  provider_5xx: {
    tier: "error",
    retryable: !0,
    safeUserMessage:
      "The integration provider reported a server error. Continue the authorized task on the website without asking permission to switch. If this was a write, verify whether it completed before repeating it.",
    uiLabel: "Retryable issue",
    uiTone: "retryable",
  },
  eval_infrastructure: {
    tier: "error",
    retryable: !1,
    safeUserMessage:
      "The eval connector harness failed. This is a run configuration fault, not a provider or account problem.",
    uiLabel: "Eval harness",
    uiTone: "failed",
  },
  unknown: {
    tier: "error",
    retryable: !1,
    safeUserMessage:
      "The action failed for an undetermined reason. Explain the reported detail and continue the authorized task on the website without asking permission to switch. Do not ask the user to reconnect unless the error identifies an authorization problem. If this was a write, check whether it completed before repeating it.",
    uiLabel: "Failed",
    uiTone: "failed",
  },
};
function ie(e) {
  return Object.hasOwn(ae, e);
}
function $t(e) {
  return ie(e) ? e : "unknown";
}
function Pt(e) {
  if (!(!e || !ie(e))) return ae[e];
}
function zt(e) {
  const n = e.safeUserMessage?.trim(),
    t = Ut(e.error?.trim() ?? "");
  if (e.kind === "missing_scopes" && t) return t;
  let o = t;
  if (
    (n && (!t || t === n)
      ? (o = n)
      : n &&
        (o = `${n}

The provider reported: ${t}`),
    (e.kind === "rate_limited" || e.kind === "provider_5xx") &&
      e.retryAfterMs !== void 0 &&
      Number.isSafeInteger(e.retryAfterMs) &&
      e.retryAfterMs > 0)
  ) {
    const i = Math.ceil(e.retryAfterMs / 1e3);
    o += `

The provider requested a wait of at least ${i} seconds. Pause remaining calls to this integration for that interval. Do not repeat a write without checking whether it completed.`;
  }
  const a = e.accountResolution?.alias;
  return !a || (e.kind !== "auth_expired" && e.kind !== "not_connected")
    ? o
    : `${o}

The failing action used ${a}. If reconnecting is needed, reconnect the same account with manage_apps using reconnect=true and accountId="${a}". Otherwise continue the authorized task on the website without asking permission to switch.`;
}
function Ut(e) {
  return e
    .replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, "Bearer [redacted]")
    .replace(
      /\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g,
      "[redacted-jwt]",
    )
    .replace(
      /(["']?(?:access_?token|refresh_?token|id_?token|token|client_?secret|authorization|api_?key|password|secret|cookie|set-cookie)["']?\s*[:=]\s*)("[^"]*"|'[^']*'|[^,\s}]+)/gi,
      '$1"[redacted]"',
    )
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted-email]");
}
const qt = 9e4,
  Z = 1e3,
  k = s.pipe(s.string(), s.uuid()),
  K = s.pipe(s.string(), s.regex(/^[a-f0-9]{64}$/)),
  se = s.pipe(s.string(), s.minLength(1), s.maxLength(2 * 1024 * 1024)),
  D = s.pipe(s.number(), s.integer(), s.minValue(0)),
  qe = s.object({
    version: s.literal(1),
    auth: se,
    linked: s.boolean(),
    displayName: s.nullable(s.pipe(s.string(), s.maxLength(512))),
    keyIndexSecret: s.pipe(s.string(), s.regex(/^[a-f0-9]{64}$/)),
  });
s.variant("operation", [
  s.object({
    operation: s.literal("acquire"),
    leaseId: k,
    create: s.boolean(),
  }),
  s.object({ operation: s.literal("summary") }),
  s.object({ operation: s.literal("renew"), leaseId: k, accountId: k }),
  s.object({ operation: s.literal("release"), leaseId: k, accountId: k }),
  s.object({ operation: s.literal("disconnect"), accountId: k }),
  s.object({
    operation: s.literal("getKeys"),
    leaseId: k,
    accountId: k,
    revision: D,
    ids: s.pipe(s.array(K), s.maxLength(Z)),
  }),
  s.object({
    operation: s.literal("save"),
    leaseId: k,
    accountId: k,
    revision: D,
    credentials: s.optional(qe),
    keys: s.pipe(
      s.array(s.object({ id: K, value: s.nullable(se) })),
      s.maxLength(Z),
    ),
  }),
]);
const B = {
    accountId: k,
    linked: s.boolean(),
    displayName: s.nullable(s.string()),
  },
  Bt = s.variant("status", [
    s.object({ status: s.literal("missing") }),
    s.object({ status: s.literal("busy"), ...B }),
    s.object({ status: s.literal("summary"), ...B }),
    s.object({
      status: s.literal("acquired"),
      ...B,
      revision: D,
      credentials: s.nullable(qe),
    }),
    s.object({ status: s.literal("saved"), revision: D }),
    s.object({
      status: s.literal("keys"),
      keys: s.array(s.object({ id: K, value: se })),
    }),
    s.object({ status: s.literal("ok") }),
    s.object({ status: s.literal("lost") }),
  ]);
class Be extends Error {}
const Yt = [
  "credential_session_closed",
  "credential_lease_expired",
  "credential_lease_lost",
  "credential_revision_changed",
  "credential_request_failed",
  "credential_transport_failed",
  "credential_request_timeout",
  "credential_response_invalid",
  "credential_data_invalid",
  "credential_update_too_large",
  "credential_operation_failed",
  "credential_busy",
  "credential_recovery_backoff",
];
function Gt(e) {
  return Yt.find((n) => n === e);
}
class Ye extends Be {
  constructor(n, t) {
    let o =
      "The WhatsApp connection closed while accessing saved credentials. Stop the remaining WhatsApp calls in this batch. Orbitra will try to resume the saved connection on the next request. If this was a send, keep its request_id and check get_send_status before retrying.";
    (n === "credential_busy" &&
      (o =
        "WhatsApp is active on another Orbitra desktop. Close it there and wait a moment before connecting here."),
      n === "credential_recovery_backoff" &&
        (o =
          "WhatsApp could not resume its saved connection. Stop the remaining WhatsApp calls in this batch. Wait 30 seconds before trying again, or choose Reconnect in Settings > Integrations. Keep the original request_id for any interrupted send."),
      (n === "credential_data_invalid" ||
        n === "credential_response_invalid") &&
        (o =
          "WhatsApp could not read its saved connection. Stop the remaining WhatsApp calls in this batch and contact Orbitra support. Your saved link and synchronized history are kept. Check any interrupted send before trying again."),
      n === "credential_update_too_large" &&
        (o =
          "WhatsApp could not save a messaging-key update. Stop the remaining WhatsApp calls in this batch and contact Orbitra support. Your saved link and synchronized history are kept. Check any interrupted send before trying again."),
      super(o),
      (this.reason = n),
      (this.statusCode = t));
  }
  get kind() {
    return this.reason === "credential_busy" ? "not_connected" : "network";
  }
}
function Ht(e) {
  return e instanceof Ye
    ? e.reason === "credential_transport_failed" ||
      e.reason === "credential_request_timeout"
      ? !0
      : e.reason === "credential_request_failed" &&
        e.statusCode !== void 0 &&
        (e.statusCode === 408 ||
          e.statusCode === 429 ||
          (e.statusCode >= 500 && e.statusCode < 600))
    : !1;
}
exports.AGENT_ROOT = v;
exports.INTEGRATION_ERROR_TRAITS = ae;
exports.OrgWorkspaceDirectoryConflictError = L;
exports.WHATSAPP_KEY_BATCH_SIZE = Z;
exports.WHATSAPP_LEASE_MS = qt;
exports.WORKSPACE_META_FILE = J;
exports.WhatsAppCredentialError = Ye;
exports.WhatsAppOperationError = Be;
exports.accountRootOfWorkspaceRoot = Ct;
exports.agentRootPath = Tt;
exports.agentRootRelativePath = re;
exports.bindSyncedAccount = We;
exports.buildModelFacingToolError = zt;
exports.canRetryWhatsAppRenewal = Ht;
exports.clearActiveSyncedAccount = Le;
exports.createAgentRootMask = ze;
exports.currentSyncedPath = te;
exports.currentWorkspaceFolder = Ae;
exports.expandAgentRootPath = Dt;
exports.filePaths = It;
exports.findDuplicateProfileMirrors = lt;
exports.findDuplicateTeamFolders = ct;
exports.forgetWorkspaceFolder = _t;
exports.formerWorkspaceFolderNames = pt;
exports.getAgentRootMask = Nt;
exports.getFilePaths = $e;
exports.getIntegrationErrorTraits = Pt;
exports.getProfileSyncedRoot = Ne;
exports.getSharedWithMeDir = ne;
exports.getSyncedFilePaths = oe;
exports.getSyncedLayout = E;
exports.getSyncedRootDir = Ce;
exports.hasSyncedLayout = M;
exports.isAgentRootPath = Et;
exports.isFolderEntry = N;
exports.isIntegrationErrorType = ie;
exports.isSameTeamFolder = ht;
exports.isSharedWithMePath = De;
exports.knowWorkspaces = bt;
exports.markedWorkspaceFolder = kt;
exports.moveWorkspaceFolders = yt;
exports.onSyncedLayoutChanged = Q;
exports.orgNameFromWorkspaceName = ke;
exports.parseWhatsAppCredentialFailure = Gt;
exports.profileWorkspaceFolder = Ie;
exports.readWorkspaceMeta = _;
exports.resolveOrgWorkspaceDirectory = gt;
exports.sanitizeProfileName = X;
exports.setActiveSyncedAccount = Oe;
exports.setSignedOutSyncedLayout = Te;
exports.setWorkspaceFolderNamesElsewhere = vt;
exports.storagePath = Ft;
exports.teamFolderName = $;
exports.toIntegrationErrorType = $t;
exports.waitForSyncedLayout = xe;
exports.whatsappSessionResponseSchema = Bt;
exports.workspaceFolderNames = F;
