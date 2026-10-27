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
      (e._sentryDebugIds[n] = "0171579e-24d8-41d1-81ab-308d11028194"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-0171579e-24d8-41d1-81ab-308d11028194"));
  })();
} catch {}
function d(e, n = process.platform) {
  return n !== "darwin"
    ? !0
    : e === "arc" || e === "dia" || e === "comet" || e === "zen";
}
exports.canReadBrowserAutomatically = d;
