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
      (e._sentryDebugIds[n] = "07a336ef-8c85-4b93-a5df-7d6e1a68357c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-07a336ef-8c85-4b93-a5df-7d6e1a68357c"));
  })();
} catch {}
const a = require("node:module"),
  t = "ORBITRA_FS_NATIVE_ADDON",
  f = a.createRequire(require("url").pathToFileURL(__filename).href);
function c(e, n = process.env[t]) {
  if (process.platform !== "win32" || n === void 0) return null;
  let d;
  const r = performance.now(),
    s = () => `${Math.round(performance.now() - r)}ms`;
  try {
    d = f(n);
  } catch (o) {
    const i = o instanceof Error && "code" in o ? o.code : null;
    if (i === "MODULE_NOT_FOUND")
      console.log(
        "[fs-native] This build has no Windows filesystem addon; using Node",
      );
    else {
      const l =
        o instanceof Error ? o.message.split(n).join("<addon>") : String(o);
      console.warn(
        `[fs-native] The Windows filesystem addon did not load after ${s()}; using Node`,
        { code: i, message: l },
      );
    }
    return null;
  }
  return typeof d[e] != "function"
    ? (console.warn(
        `[fs-native] The Windows filesystem addon has no ${e}; using Node`,
      ),
      null)
    : (console.log(`[fs-native] Loaded the Windows filesystem addon in ${s()}`),
      d);
}
exports.FS_NATIVE_ADDON_ENV = t;
exports.loadFsNativeAddon = c;
