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
      (e._sentryDebugIds[n] = "a901ca3a-1c9e-4992-90c9-c22c422953b2"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-a901ca3a-1c9e-4992-90c9-c22c422953b2"));
  })();
} catch {}
const o = { GOOGLE: ".google." };
function d(e) {
  return e.includes(o.GOOGLE) ? "google_domains" : null;
}
exports.shouldIgnoreDomain = d;
