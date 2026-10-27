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
      (e._sentryDebugIds[t] = "d5ee51a0-240c-43dc-a791-c3a429ec9b72"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d5ee51a0-240c-43dc-a791-c3a429ec9b72"));
  })();
} catch {}
const m = require("node:fs"),
  c = require("node:fs/promises"),
  l = require("node:path"),
  b = require("node:stream/promises"),
  g = require("yauzl"),
  _ = 61440,
  S = 32768,
  f = 16384,
  I = 40960,
  y = 0,
  N = 16,
  u = 5e4;
function T(e) {
  return new Promise((t, i) => {
    g.open(
      e,
      {
        autoClose: !1,
        lazyEntries: !0,
        strictFileNames: !0,
        validateEntrySizes: !0,
      },
      (r, n) => {
        r ? i(r) : t(n);
      },
    );
  });
}
function M(e) {
  return e.entryCount > u
    ? Promise.reject(
        new Error(`Zip declares ${e.entryCount} entries, above the ${u} limit`),
      )
    : new Promise((t, i) => {
        const r = [];
        (e.once("error", i),
          e.on("entry", (n) => {
            (r.push(n), e.readEntry());
          }),
          e.once("end", () => t(r)),
          e.readEntry());
      });
}
function R(e, t) {
  return new Promise((i, r) => {
    e.openReadStream(t, (n, o) => {
      n ? r(n) : i(o);
    });
  });
}
function w(e) {
  return e.versionMadeBy >> 8 === y
    ? 0
    : (e.externalFileAttributes >>> 16) & 65535;
}
function x(e) {
  const t = w(e) & _;
  if (t === I) throw new Error(`Zip entry is a symlink: ${e.fileName}`);
  if (t !== 0 && t !== S && t !== f)
    throw new Error(`Zip entry has an unsupported file type: ${e.fileName}`);
  return t === f || e.fileName.endsWith("/") || A(e) ? "directory" : "file";
}
function A(e) {
  return e.versionMadeBy >> 8 === y && (e.externalFileAttributes & N) !== 0;
}
function D(e, t) {
  const i = w(e) & 511;
  return i !== 0 ? i : t === "directory" ? 493 : 420;
}
function k(e) {
  const t = new Set(),
    i = [];
  for (const r of e) {
    if (v(r)) continue;
    const n = x(r),
      o = n === "directory" ? r.fileName.replace(/\/+$/, "") : r.fileName;
    if (t.has(o)) throw new Error(`Zip contains a duplicate path: ${o}`);
    (t.add(o), i.push({ entry: r, kind: n }));
  }
  return i;
}
function v(e) {
  return e.fileName.startsWith("__MACOSX/");
}
async function d(e, t, i, r = 493) {
  let n = e;
  for (const o of t)
    if (((n = l.join(n, o)), !i.has(n))) {
      try {
        await c.mkdir(n, { mode: r });
      } catch (s) {
        if (s.code !== "EEXIST") throw s;
        const a = await c.lstat(n);
        if (a.isSymbolicLink())
          throw new Error(
            `Zip entry path crosses a symlink at the destination: ${n}`,
          );
        if (!a.isDirectory())
          throw new Error(
            `Zip entry path collides with an existing file: ${n}`,
          );
      }
      i.add(n);
    }
  return n;
}
async function Z(e, t, i, r, n) {
  const o = D(t, i),
    s = t.fileName.split("/").filter((E) => E !== "");
  if (i === "directory") {
    await d(r, s, n, o);
    return;
  }
  const a = await d(r, s.slice(0, -1), n),
    p = l.join(a, s[s.length - 1]),
    h = await R(e, t);
  await b.pipeline(h, m.createWriteStream(p, { flags: "wx", mode: o }));
}
async function $(e, t) {
  await c.mkdir(t, { recursive: !0 });
  const i = await c.realpath(t),
    r = await T(e);
  try {
    const n = k(await M(r)),
      o = new Set([i]);
    for (const { entry: s, kind: a } of n) await Z(r, s, a, i, o);
  } finally {
    r.close();
  }
}
exports.extractZipArchive = $;
