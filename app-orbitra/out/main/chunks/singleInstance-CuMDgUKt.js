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
      (e._sentryDebugIds[n] = "9b804e1c-f6b7-4628-852a-90ab990d29a7"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-9b804e1c-f6b7-4628-852a-90ab990d29a7"));
  })();
} catch {}
const s = require("electron");
let o;
const d = [];
function i(e) {
  return s.app.requestSingleInstanceLock(e ? { instanceId: e } : void 0)
    ? (s.app.on("second-instance", (n, t) => {
        o ? o(t) : d.push(t);
      }),
      !0)
    : !1;
}
function f(e) {
  o = e;
  for (const n of d.splice(0)) e(n);
}
exports.onSecondInstance = f;
exports.requestSingleInstanceLock = i;
