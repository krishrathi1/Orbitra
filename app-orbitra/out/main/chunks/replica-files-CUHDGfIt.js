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
      (e._sentryDebugIds[t] = "2c99c9ac-837a-490e-bdcc-6ee72fed7a67"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-2c99c9ac-837a-490e-bdcc-6ee72fed7a67"));
  })();
} catch {}
const s = require("node:fs/promises"),
  i = require("node:path"),
  o = "optmem-v1.sqlite";
async function r(e, t) {
  return t
    ? t(e)
    : (
        await Promise.resolve().then(() => require("./appPaths-eBQvtv9Z.js"))
      ).getProfilePath(e);
}
async function n(e) {
  await Promise.all(
    ["", "-wal", "-shm"].map((t) => s.rm(`${e}${t}`, { force: !0 })),
  );
}
async function l(e, t = {}) {
  const a = await r(e, t.getProfilePath);
  await n(i.join(a, o));
}
class c extends Error {
  constructor() {
    (super("OptMem replica closed"), (this.name = "OptMemReplicaClosedError"));
  }
}
exports.DATABASE_FILE_NAME = o;
exports.OptMemReplicaClosedError = c;
exports.removeDatabaseFiles = n;
exports.removeOptMemReplicaFiles = l;
exports.resolveProfilePath = r;
