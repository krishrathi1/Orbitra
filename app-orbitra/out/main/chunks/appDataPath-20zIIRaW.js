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
      (e._sentryDebugIds[t] = "64c041cd-519b-4c95-9045-325d21a553f6"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-64c041cd-519b-4c95-9045-325d21a553f6"));
  })();
} catch {}
const n = require("node:path"),
  i = /^orbitra-e2e(?:$|-)/;
function d(e) {
  return (
    e.replace(/[^a-zA-Z0-9_-]/g, "").replace(/^[-_]+|[-_]+$/g, "") ||
    "orbitra"
  );
}
function f(e) {
  const t = n.resolve(e),
    r = n.basename(t);
  if (!i.test(r))
    throw new Error(
      `Unsafe ORBITRA_E2E_DATA_DIR "${e}" — expected basename to start with orbitra-e2e`,
    );
  return t;
}
function l(e, t, r = process.env) {
  const s = n.dirname(e);
  if (r.ELECTRON_IS_E2E === "true")
    return r.ORBITRA_E2E_DATA_DIR
      ? f(r.ORBITRA_E2E_DATA_DIR)
      : n.join(s, "orbitra-e2e");
  const o = r.ORBITRA_APP_ID;
  let a;
  return (
    o ? (a = d(o)) : t ? (a = "orbitra-dev") : (a = "orbitra"),
    n.join(s, a)
  );
}
exports.resolveAppDataPath = l;
exports.sanitizeAppId = d;
