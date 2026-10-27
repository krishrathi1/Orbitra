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
      d = new e.Error().stack;
    d &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[d] = "36df6012-48a5-4ddb-8911-c5650bdd64b3"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-36df6012-48a5-4ddb-8911-c5650bdd64b3"));
  })();
} catch {}
function n(e) {
  if (!(!(e instanceof Error) || !("code" in e) || typeof e.code != "string"))
    return /^SQLITE_[A-Z_]+$/.test(e.code) ? e.code : void 0;
}
exports.sqliteCodeOf = n;
