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
      u = new e.Error().stack;
    u &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[u] = "f0e0c6b0-b2d0-4164-ac0a-030223407e13"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-f0e0c6b0-b2d0-4164-ac0a-030223407e13"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const i = require("../main-app.js"),
  o = require("electron");
require("node:crypto");
require("node:path");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
require("node:fs/promises");
require("node:os");
require("valibot");
require("node:fs");
require("node:http");
require("node:https");
require("./protocol-BGN1BQCi.js");
require("events");
require("child_process");
require("util");
require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("@reflect/auth/workos-session");
require("crypto");
require("./errors-DsbnElf-.js");
require("./savedCertificateBlocklist-BUtmL3xA.js");
require("node:tls");
require("@reflect/auth/device-policy");
require("node:process");
require("node:assert");
require("node:stream");
require("./_commonjsHelpers-DJP3_Dvh.js");
require("./index-CSlo9i6Z.js");
require("tty");
require("node-machine-id");
require("fs/promises");
require("node:timers/promises");
require("./config-CdpnFYk6.js");
require("./contracts-rChhtF3C.js");
require("@reflect/auth/desktop");
require("./worker-protocol-CFgWGf-A.js");
require("./unicode-CSAGP0Z8.js");
require("fs");
require("better-sqlite3");
require("node:child_process");
require("url");
require("stream");
require("zlib");
require("electron-updater");
require("@reflect/auth/last-login-method");
require("@reflect/auth/oauth-state");
require("@reflect/auth/session-identity");
require("./settled-read-r0Yf0ORp.js");
require("module");
require("./fs-native-KvxiM8hl.js");
require("node:module");
require("tldts");
require("node:buffer");
require("./rustImageLimits-zqqoE-LA.js");
require("mime-types");
require("./resourcePolicy-DcbBChq3.js");
require("./resourcePolicy-BX-8H2Pm.js");
require("http");
require("@ghostery/adblocker-electron");
require("./wav-DElqHA--.js");
require("js-yaml");
require("stream/promises");
require("https");
require("net");
require("tls");
require("buffer");
require("electron-chrome-web-store");
require("./ids-B2sWlG17.js");
require("@modelcontextprotocol/sdk/client/auth.js");
require("@modelcontextprotocol/sdk/client/index.js");
require("@modelcontextprotocol/sdk/client/sse.js");
require("@modelcontextprotocol/sdk/client/streamableHttp.js");
require("@modelcontextprotocol/sdk/client/stdio.js");
require("@modelcontextprotocol/sdk/shared/stdio.js");
require("./process-tree-DTtONxmb.js");
require("cross-spawn");
require("piscina");
require("@modelcontextprotocol/sdk/shared/auth-utils.js");
require("@modelcontextprotocol/sdk/server/auth/errors.js");
require("@modelcontextprotocol/sdk/shared/auth.js");
require("node:readline");
require("async-mutex");
require("node:net");
require("electron-dl");
require("tar");
require("node:inspector/promises");
require("node:v8");
require("tokenx");
require("marked");
require("lodash/debounce");
require("./worker-protocol-CcOBX8D2.js");
require("node:zlib");
require("node:diagnostics_channel");
require("worker_threads");
require("diagnostics_channel");
require("./singleInstance-CuMDgUKt.js");
async function d(e, u) {
  if (o.app.isPackaged)
    throw new Error(
      "The onboarding inspector is only available in development",
    );
  const n = `onboarding-inspector:${e}`,
    r = new o.BrowserWindow({
      title: "Onboarding research inspector",
      width: 1e3,
      height: 800,
      show: !1,
      webPreferences: {
        preload: i.getPreloadPath("uiPreload"),
        partition: n,
        contextIsolation: !0,
        sandbox: !0,
        nodeIntegration: !1,
        additionalArguments: [
          `--window-id=${n}`,
          "--layer-id=onboarding-inspector",
          "--layer-type=component",
        ],
      },
    }),
    t = i.eventManager.registerStandaloneRenderer({
      windowId: n,
      layerId: "onboarding-inspector",
      webContents: r.webContents,
    });
  (i.eventManager.handleIPCQuery(
    "onboarding",
    "inspect",
    async () => ({ success: !0, snapshot: await u() }),
    { windowId: n },
  ),
    r.once("closed", () => {
      (t(), i.eventManager.cleanupWindowListeners(n));
    }),
    i.safeWithWebContents(r.webContents, (q) => {
      (q.setWindowOpenHandler(() => ({ action: "deny" })),
        q.on("will-navigate", (a) => a.preventDefault()));
    }));
  try {
    return (
      await r.loadURL(i.getRendererURL("/ui/onboarding-inspector")),
      r.showInactive(),
      r
    );
  } catch (q) {
    throw (r.destroy(), q);
  }
}
exports.openOnboardingInspector = d;
