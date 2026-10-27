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
      (e._sentryDebugIds[t] = "02bec445-130e-4dcf-85ac-c493c19f1f2b"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-02bec445-130e-4dcf-85ac-c493c19f1f2b"));
  })();
} catch {}
const c = require("./settled-read-r0Yf0ORp.js"),
  a = require("node:fs/promises"),
  l = require("node:path"),
  p = require("./config-CdpnFYk6.js"),
  k = { state: "stopped", generation: 0 };
function y(e, t) {
  const n = c.MACHINE[e],
    s = n.edges[t];
  return s !== void 0
    ? { kind: "transition", to: s }
    : n.accepts.includes(t)
      ? { kind: "accept" }
      : { kind: "reject", reason: n.rejectsSpecifically?.[t] ?? n.rejects };
}
function w(e, t) {
  const n = y(e.state, t);
  switch (n.kind) {
    case "transition": {
      const s = t === "stop" ? e.generation + 1 : e.generation;
      return {
        kind: "moved",
        from: e.state,
        to: n.to,
        trigger: t,
        position: { state: n.to, generation: s },
      };
    }
    case "accept":
      return { kind: "accepted", trigger: t, position: e };
    case "reject":
      return { kind: "refused", trigger: t, reason: n.reason, position: e };
  }
}
function h(e, t) {
  return e === "" ? t : `${e}/${t}`;
}
function b(e, t) {
  return t.some((n) => e === n || e.startsWith(`${n}${l.sep}`));
}
async function g(e) {
  const t = l.join(e.root, e.path);
  let n;
  try {
    n = await a.readdir(t, { withFileTypes: !0 });
  } catch {
    return [];
  }
  const s = new Map(e.stored.map((i) => [`${i.kind}:${i.name}`, i]));
  return (
    await Promise.all(
      n.map(async (i) => {
        if (!p.isSyncedFileBrowserVisiblePath(h(e.path, i.name))) return null;
        const r = l.join(t, i.name);
        if (i.isDirectory()) {
          if (b(r, e.excludedRoots)) return null;
          const d = s.get(`folder:${i.name}`);
          return d?.kind === "folder" && d.modifiedAtMs !== null
            ? { ...d, modifiedAtMs: d.modifiedAtMs }
            : I(r, i.name, e.markers);
        }
        const u = s.get(`file:${i.name}`);
        if (u?.kind === "file") return u;
        const f = await a.stat(r).catch(() => null);
        return f?.isFile()
          ? {
              kind: "file",
              name: i.name,
              sizeBytes: f.size,
              modifiedAtMs: f.mtimeMs,
            }
          : null;
      }),
    )
  ).filter((i) => i !== null);
}
async function I(e, t, n) {
  const [s, o] = await Promise.all([
    a.stat(e).catch(() => null),
    a.readdir(e, { withFileTypes: !0 }).catch(() => null),
  ]);
  if (s === null || o === null) return null;
  const i = o.filter(
    (r) => !p.isSyncIgnoredName(r.name) && !r.name.startsWith("."),
  );
  return {
    kind: "folder",
    name: t,
    modifiedAtMs: s.mtimeMs,
    folders: i.filter((r) => r.isDirectory()).length,
    files: i.filter((r) => !r.isDirectory()).length,
    markers: o
      .filter((r) => !r.isDirectory() && n.includes(r.name))
      .map((r) => r.name),
  };
}
function v(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function A(e, t) {
  const n = [c.fileNameKey(e.name), e.name];
  switch (t) {
    case "name":
      return n;
    case "modified":
      return [e.modifiedAtMs, ...n];
    case "extension":
      return [e.kind === "folder" ? "" : c.fileExtension(e.name), ...n];
  }
}
function M(e, t) {
  for (let n = 0; n < e.length; n++) {
    const s = e[n],
      o = t[n],
      i =
        typeof s == "number" && typeof o == "number"
          ? s - o
          : v(String(s), String(o));
    if (i !== 0) return i;
  }
  return 0;
}
function m(e, t) {
  return t.some((n) => e === n || e.startsWith(`${n}/`));
}
function x(e, t, n) {
  if (n.kinds !== void 0) {
    if (e.kind === "folder" && !n.kinds.folders) return !1;
    if (e.kind === "file") {
      const o = c.fileExtension(e.name),
        i = n.kinds.extensions;
      if (!("only" in i ? i.only.includes(o) : !i.except.includes(o)))
        return !1;
    }
  }
  if (
    (n.modifiedFrom !== void 0 && e.modifiedAtMs < n.modifiedFrom) ||
    (n.modifiedBefore !== void 0 && e.modifiedAtMs >= n.modifiedBefore)
  )
    return !1;
  const s = h(t, e.name);
  return !(
    (n.within !== void 0 && !m(s, n.within)) ||
    (n.outside !== void 0 && m(s, n.outside))
  );
}
function F(e, t, n, s = {}) {
  const o = n.direction === "asc" ? 1 : -1;
  return e
    .filter((i) => x(i, t, s))
    .map((i) => ({ entry: i, keys: A(i, n.by) }))
    .sort((i, r) => o * M(i.keys, r.keys))
    .map(({ entry: i }) => i);
}
exports.INITIAL = k;
exports.orderFolder = F;
exports.readFolder = g;
exports.resolve = y;
exports.step = w;
