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
      (e._sentryDebugIds[n] = "6226f5c6-a94b-4426-aa71-d36255248f82"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-6226f5c6-a94b-4426-aa71-d36255248f82"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let t = null,
  o = null;
function a(e) {
  ((t = e), (o = null));
}
function d() {
  return t;
}
function i(e) {
  o = e;
}
function l() {
  return o;
}
exports.getSandboxToolingManager = d;
exports.getSandboxToolingStartupReadiness = l;
exports.setSandboxToolingManager = a;
exports.setSandboxToolingStartupReadiness = i;
