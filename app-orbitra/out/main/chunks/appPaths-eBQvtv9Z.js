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
      (e._sentryDebugIds[t] = "b03291f9-c680-4a4e-af43-aa28165bd600"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-b03291f9-c680-4a4e-af43-aa28165bd600"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const n = require("path"),
  a = require("electron"),
  f = require("./appDataPath-20zIIRaW.js");
require("node:path");
const o = n.join(n.sep, "out", "main");
function u() {
  const e = a.app.getAppPath();
  return e.endsWith(o) ? e.slice(0, -o.length) : e;
}
function s(...e) {
  const t = a.app.isPackaged ? process.resourcesPath : n.join(u(), "resources");
  return n.join(t, ...e);
}
function p() {
  if (process.platform === "win32")
    return s("fs-native", "orbitra_fs_native.node");
}
function r(e = process.env.NODE_ENV === "development") {
  return f.resolveAppDataPath(a.app.getPath("userData"), e);
}
function c(e = process.env.NODE_ENV === "development") {
  if (
    process.env.VITEST ||
    process.env.ELECTRON_IS_E2E === "true" ||
    (!a.app.isPackaged && !e)
  )
    return !1;
  const t = a.app.getPath("userData"),
    i = n.dirname(t),
    d = n.join(i, e ? "orbitra-dev" : "orbitra");
  return r(e) === d;
}
function l(e) {
  return n.join(r(), "Partitions", `profile_${e}`);
}
exports.getAppDataPath = r;
exports.getFsNativeAddonPath = p;
exports.getProfilePath = l;
exports.getResourcePath = s;
exports.ownsHomeDirectorySyncedTree = c;
