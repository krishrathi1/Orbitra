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
      (e._sentryDebugIds[n] = "116bf693-0c99-484b-aa9f-266d45697552"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-116bf693-0c99-484b-aa9f-266d45697552"));
  })();
} catch {}
const t = require("node:fs/promises");
async function d(e) {
  try {
    return (await t.access(e), !0);
  } catch {
    return !1;
  }
}
exports.pathExists = d;
