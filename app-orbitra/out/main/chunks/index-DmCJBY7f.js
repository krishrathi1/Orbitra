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
      (e._sentryDebugIds[n] = "4cbe4a2c-a7f8-420b-973f-fa1f0d4c91ca"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-4cbe4a2c-a7f8-420b-973f-fa1f0d4c91ca"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const a = require("./ExternalAppManager-DAuHmeTi.js"),
  r = require("../main-app.js");
require("fs");
require("path");
require("electron");
require("./protocol-BGN1BQCi.js");
require("child_process");
require("util");
require("node:crypto");
require("node:path");
require("os");
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
require("events");
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
function s(e) {
  r.eventManager.sendToRenderer("external-apps:windows-changed", {
    windows: e,
  });
}
function u(e) {
  r.eventManager.sendToRenderer("external-apps:permissions-changed", e);
}
function p() {
  if (!r.isFeatureEnabledForAnyAccount("externalAppsEnabled")) {
    r.logger.info(
      "[ExternalAppsHandler] External apps disabled by feature flag - skipping IPC handler registration",
    );
    return;
  }
  (r.logger.info("[ExternalAppsHandler] Registering IPC handlers"),
    r.eventManager.handleInvoke("external-apps:check-permissions", async () => {
      const e = await a.externalAppManager.checkPermissions();
      return (u(e), e);
    }),
    r.eventManager.handleInvoke(
      "external-apps:request-screen-recording-permission",
      async () => {
        try {
          await a.externalAppManager.requestScreenRecordingPermission();
          const e = await a.externalAppManager.checkPermissions();
          return (u(e), { success: !0 });
        } catch (e) {
          return (
            r.logger.error(
              "[ExternalAppsHandler] Failed to request screen recording permission:",
              e,
            ),
            { success: !1 }
          );
        }
      },
    ),
    r.eventManager.handleInvoke(
      "external-apps:request-accessibility-permission",
      async () => {
        try {
          await a.externalAppManager.requestAccessibilityPermission();
          const e = await a.externalAppManager.checkPermissions();
          return (u(e), { success: !0 });
        } catch (e) {
          return (
            r.logger.error(
              "[ExternalAppsHandler] Failed to request accessibility permission:",
              e,
            ),
            { success: !1 }
          );
        }
      },
    ),
    r.eventManager.handleInvoke("external-apps:get-apps", async () => ({
      apps: await a.externalAppManager.getApps(),
    })),
    r.eventManager.handleInvoke("external-apps:get-windows", async (e) => {
      if (
        (r.logger.info("[ExternalAppsHandler] get-windows invoked", {
          withThumbnails: e?.withThumbnails,
          preferCached: e?.preferCached,
        }),
        !e?.withThumbnails && e?.preferCached)
      ) {
        const t = a.externalAppManager.getCachedWindows();
        if (t)
          return (
            r.logger.info(
              "[ExternalAppsHandler] get-windows returning cached result",
              { count: t.length },
            ),
            a.externalAppManager
              .getWindows()
              .then((i) => s(i))
              .catch((i) => {
                r.logger.warn(
                  "[ExternalAppsHandler] Background window refresh failed:",
                  i,
                );
              }),
            { windows: t }
          );
      }
      const n = e?.withThumbnails
        ? await a.externalAppManager.getWindowsWithThumbnails()
        : await a.externalAppManager.getWindows();
      return (
        r.logger.info("[ExternalAppsHandler] get-windows returning", {
          count: n.length,
        }),
        s(n),
        { windows: n }
      );
    }),
    r.eventManager.handleInvoke(
      "external-apps:get-window-by-id",
      async (e) => ({
        window: await a.externalAppManager.getWindowById(e.windowId),
      }),
    ),
    r.eventManager.handleInvoke(
      "external-apps:find-windows-by-app-name",
      async (e) => ({
        windows: await a.externalAppManager.findWindowsByAppName(e.appName),
      }),
    ),
    r.eventManager.handleInvoke("external-apps:take-screenshot", async (e) => {
      const n = await a.externalAppManager.takeScreenshot(e.windowId, {
        width: e.width,
        height: e.height,
      });
      if (n) {
        const t = await a.externalAppManager.getWindows();
        s(t);
      }
      return { result: n };
    }),
    r.eventManager.handleInvoke(
      "external-apps:take-screenshot-by-app-name",
      async (e) => ({
        result: await a.externalAppManager.takeScreenshotByAppName(e.appName, {
          width: e.width,
          height: e.height,
        }),
      }),
    ),
    r.eventManager.handleInvoke("external-apps:extract-content", async (e) => {
      r.logger.info("[ExternalAppsHandler] extract-content invoked", {
        windowId: e.windowId,
      });
      const n = await a.externalAppManager.extractContent(e.windowId);
      return (
        r.logger.info("[ExternalAppsHandler] extract-content result", {
          hasResult: !!n,
          textLength: n?.textContent?.length || 0,
          elementsCount: n?.elements?.length || 0,
        }),
        { result: n }
      );
    }),
    r.eventManager.handleInvoke(
      "external-apps:extract-content-by-app",
      async (e) => {
        r.logger.info("[ExternalAppsHandler] extract-content-by-app invoked", {
          appName: e.appName,
        });
        const n = await a.externalAppManager.extractContentByAppName(e.appName);
        return (
          r.logger.info("[ExternalAppsHandler] extract-content-by-app result", {
            hasResult: !!n,
            textLength: n?.textContent?.length || 0,
            elementsCount: n?.elements?.length || 0,
          }),
          { result: n }
        );
      },
    ),
    r.eventManager.handleInvoke("external-apps:get-menu-bar", async (e) => ({
      menuBar: await a.externalAppManager.getMenuBar(e.appName),
    })),
    r.eventManager.handleInvoke("external-apps:send-shortcut", async (e) => ({
      success: await a.externalAppManager.sendShortcut({
        processId: e.processId,
        key: e.key,
        modifiers: e.modifiers,
        activate: e.activate,
      }),
    })),
    r.eventManager.handleInvoke(
      "external-apps:send-shortcut-to-app",
      async (e) => ({
        success: await a.externalAppManager.sendShortcutToApp(
          e.appName,
          e.key,
          e.modifiers,
        ),
      }),
    ),
    r.logger.info(
      "[ExternalAppsHandler] IPC handlers registered successfully",
    ));
}
function o() {
  r.logger.info("[ExternalAppsHandler] IPC handlers cleanup requested");
}
exports.ExternalAppManager = a.ExternalAppManager;
exports.JxaRunner = a.JxaRunner;
exports.SendKeysRunner = a.SendKeysRunner;
exports.externalAppManager = a.externalAppManager;
exports.registerExternalAppsHandlers = p;
exports.unregisterExternalAppsHandlers = o;
