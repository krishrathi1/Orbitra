"use strict";
(function () {
  try {
    var t =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    t.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      u = new t.Error().stack;
    u &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[u] = "50945073-5e7b-4219-885b-110701460716"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-50945073-5e7b-4219-885b-110701460716"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const v = require("node:crypto"),
  U = require("@reflect/auth/desktop"),
  y = require("electron"),
  s = require("../main-app.js");
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
const h = new Map();
function P(t, u) {
  const f = h.get(t);
  f?.requestId === u && f.cancel();
}
function T(t, u, f) {
  const l = y.BaseWindow.fromId(t);
  if (!l || l.isDestroyed())
    return Promise.resolve({
      success: !1,
      error: "The browser window was closed.",
    });
  if (h.has(t))
    return Promise.resolve({
      success: !1,
      error: "An account sign-in is already open.",
    });
  const D = l;
  return new Promise((C) => {
    const d = y.session.fromPartition(`add-account-${v.randomUUID()}`, {
      cache: !1,
    });
    (d.setPermissionRequestHandler((e, r, n) => n(!1)),
      d.setPermissionCheckHandler(() => !1),
      d.on("will-download", (e) => e.preventDefault()));
    const q = new AbortController();
    let i = null,
      g = "waiting",
      b = 0,
      m = null;
    function a(e) {
      g !== "finished" &&
        ((g = "finished"),
        q.abort(),
        h.delete(t),
        D.removeListener("closed", o),
        s.safeWithWebContents(f, (r) => {
          (r.removeListener("destroyed", o),
            r.removeListener("render-process-gone", o),
            r.removeListener("did-start-navigation", A));
        }),
        w.cancel(!1),
        i && !i.isDestroyed() && i.destroy(),
        Promise.all([
          d.clearStorageData(),
          d.clearCache(),
          d.closeAllConnections(),
        ]).catch(() =>
          s.logger.warn("[AddAccount] Temporary session cleanup failed"),
        ),
        C(e));
    }
    function o() {
      g === "waiting" && a({ success: !0, accountId: null });
    }
    function A(e, r, n, c) {
      c && !n && o();
    }
    function p(e) {
      const r = new URL(e);
      if (r.protocol === "orbitra:") {
        if (r.hostname === "auth" && r.pathname === "/callback") {
          const n = r.searchParams.get("attempt");
          n && w.handleCallbackAttempt(n);
        } else
          r.hostname === "auth" &&
            r.pathname === "/retry" &&
            w.handleRetryUrl(e);
        return !1;
      }
      return (
        r.protocol === "https:" ||
        (r.protocol === "http:" &&
          new URL(s.config.app.webBaseUrl).protocol === "http:" &&
          (r.hostname === "localhost" || r.hostname === "127.0.0.1"))
      );
    }
    const w = new s.DesktopOnboardingAuthCoordinator({
      authApiUrl: `${s.config.app.apiUrl}/api/auth`,
      accountWindow: {
        signal: q.signal,
        open: async (e) => {
          q.signal.aborted ||
            l.isDestroyed() ||
            ((!i || i.isDestroyed()) &&
              ((i = new y.BrowserWindow({
                ...s.popupWindowOptions,
                title: "Add a Orbitra account",
                parent:
                  process.platform === "darwin" && l.isFullScreen()
                    ? void 0
                    : l,
                width: 520,
                height: 760,
                show: !1,
                webPreferences: {
                  session: d,
                  sandbox: !0,
                  contextIsolation: !0,
                  nodeIntegration: !1,
                },
              })),
              s.installAuthWindowChrome(i, i.webContents),
              i.on("closed", o),
              i.once("ready-to-show", () => {
                i && !i.isDestroyed() && i.show();
              }),
              s.safeWithWebContents(i.webContents, (r) => {
                (r.on("did-fail-load", (n, c, S, W, _) => {
                  _ &&
                    c !== -3 &&
                    a({
                      success: !1,
                      error: "Could not load sign-in. Please try again.",
                    });
                }),
                  r.on("render-process-gone", () => {
                    a({
                      success: !1,
                      error:
                        "The sign-in window closed unexpectedly. Try again.",
                    });
                  }),
                  r.on("will-navigate", (n, c) => {
                    p(c) || n.preventDefault();
                  }),
                  r.on("will-redirect", (n, c) => {
                    p(c) || n.preventDefault();
                  }),
                  r.setWindowOpenHandler(
                    ({ url: n }) => (
                      p(n) &&
                        i?.loadURL(n).catch(() => {
                          a({
                            success: !1,
                            error: "Could not open sign-in. Please try again.",
                          });
                        }),
                      { action: "deny" }
                    ),
                  ),
                  r.setUserAgent(s.transformUserAgentHeader(r.getUserAgent())));
              }),
              await s.applyChromeUserAgentMetadata(i.webContents)),
            !q.signal.aborted && !i.isDestroyed() && (await i.loadURL(e)));
        },
      },
      beginAuthAttempt: () => ++b,
      isBrowserAuthEnabled: () => !0,
      fetch: async (e, r) => {
        const n = new Headers(r.headers);
        return (
          await s.addDeviceIdentityHeaders(n, e, { includeHardware: !0 }),
          fetch(e, { ...r, headers: n, signal: r.signal ?? q.signal })
        );
      },
      installSession: async (e, r) =>
        q.signal.aborted || r !== b
          ? "stale"
          : ((g = "saving"),
            await s.addSession({
              kind: e.session.kind,
              accessToken: e.session.access_token,
              refreshToken: e.session.refresh_token,
              expiresAt: Date.now() + e.session.expires_in * 1e3,
              userId: e.user.id,
              email: e.user.email,
            }),
            (m = e.user.id),
            "installed"),
      publishState: (e) => {
        e.status === "complete"
          ? a({ success: !0, accountId: m })
          : e.status === "failed"
            ? a({ success: !1, error: e.error })
            : e.status === "expired" &&
              a({ success: !1, error: "Sign-in expired. Please try again." });
      },
    });
    if (
      (h.set(t, { requestId: u, cancel: o }),
      l.once("closed", o),
      !s.safeWithWebContents(f, (e) => {
        (e.once("destroyed", o),
          e.once("render-process-gone", o),
          e.on("did-start-navigation", A));
      }).ok)
    ) {
      o();
      return;
    }
    w.start(v.randomUUID(), !0, U.DEFAULT_DESKTOP_AUTH_COMPANION_COLOR).catch(
      () => {
        a({ success: !1, error: "Could not start sign-in. Please try again." });
      },
    );
  });
}
exports.addAccount = T;
exports.cancelAddAccount = P;
