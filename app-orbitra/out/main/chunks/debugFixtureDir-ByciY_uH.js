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
      (e._sentryDebugIds[t] = "3ec09280-1602-43e6-ad65-349c0788fe6c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-3ec09280-1602-43e6-ad65-349c0788fe6c"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const o = require("path"),
  u = require("electron");
function f(e) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const n in e)
      if (n !== "default") {
        const r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(
          t,
          n,
          r.get ? r : { enumerable: !0, get: () => e[n] },
        );
      }
  }
  return ((t.default = e), Object.freeze(t));
}
const i = f(o);
function l(e) {
  const t = e.trim();
  return t
    ? i.isAbsolute(t)
      ? t
      : /^[a-z0-9-]+$/.test(t)
        ? i.join(
            u.app.getAppPath(),
            "src",
            "main",
            "managers",
            "transcription",
            "debug-fixture",
            t,
          )
        : null
    : null;
}
exports.resolveDebugFixtureDir = l;
