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
      (e._sentryDebugIds[n] = "0f9b5e52-d796-46b3-b5d1-aaeeb458df67"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-0f9b5e52-d796-46b3-b5d1-aaeeb458df67"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const t = "__synced-fs__:";
function d(e) {
  return `${t}${encodeURIComponent(e)}`;
}
function o(e) {
  if (!e.startsWith(t)) return null;
  try {
    return decodeURIComponent(e.slice(t.length)) || null;
  } catch {
    return null;
  }
}
exports.syncedFsArtifactProfileId = o;
exports.syncedFsArtifactSessionId = d;
