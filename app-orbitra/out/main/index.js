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
      a = new e.Error().stack;
    a &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[a] = "bf373d5e-7031-4405-b604-780a76f63db1"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-bf373d5e-7031-4405-b604-780a76f63db1"));
  })();
} catch {}
const t = require("node:module"),
  r = require("node:path"),
  n = require("electron"),
  s = require("./chunks/appDataPath-20zIIRaW.js"),
  c = require("./chunks/singleInstance-CuMDgUKt.js");
if (!n.app.isPackaged && process.env.ORBITRA_DEV_BUNDLE_ID) {
  const e = s.sanitizeAppId(process.env.ORBITRA_APP_ID ?? "");
  if (e === "orbitra" || e === "orbitra-dev")
    throw new Error(
      "An isolated macOS identity requires a separate app data and Keychain name",
    );
  n.app.setName(e);
}
const o = s.resolveAppDataPath(
  n.app.getPath("userData"),
  process.env.NODE_ENV === "development",
);
n.app.setPath("userData", o);
c.requestSingleInstanceLock(process.env.ORBITRA_APP_ID) ||
  (n.app.quit(), process.exit(0));
let i = !1;
try {
  const e = r.join(o, "node-compile-cache"),
    a = t.enableCompileCache(e);
  ((i = a.directory !== void 0),
    a.message &&
      console.warn("[Main] V8 compile cache unavailable:", a.message));
} catch (e) {
  console.warn("[Main] V8 compile cache setup failed:", e);
}
require("./main-app.js");
i && n.app.once("before-quit", () => t.flushCompileCache());
