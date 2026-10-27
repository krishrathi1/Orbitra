"use strict";
(function () {
  try {
    var o =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    o.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var o =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new o.Error().stack;
    e &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[e] = "cc69f1f3-156a-4f8f-9ede-93f14230ccc6"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-cc69f1f3-156a-4f8f-9ede-93f14230ccc6"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const l = require("node:crypto"),
  u = require("electron"),
  t = require("../main-app.js");
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
const d = 2e3,
  h = 6e4,
  q = 96;
class f {
  constructor(e, s) {
    ((this.windowId = e),
      (this.parent = s),
      (this.layerId = `download-arrival-${e}`));
    const a = s,
      i = [
        "hide",
        "minimize",
        "move",
        "resize",
        "enter-full-screen",
        "leave-full-screen",
        "closed",
      ];
    for (const r of i) a.on(r, this.finishAll);
    this.stopParent = () => {
      for (const r of i) a.off(r, this.finishAll);
    };
  }
  overlay = null;
  flights = new Map();
  releaseTimer;
  layerId;
  stopParent;
  prepare() {
    if (!this.parent.isDestroyed())
      try {
        (this.overlay ?? this.createOverlay(), this.scheduleRelease());
      } catch (e) {
        t.uiLogger.warn("[download-arrival] Could not prepare overlay window", {
          error: e,
        });
      }
  }
  async play(e) {
    const s = await t.getFileTypeIcon(e.filename, q).catch(() => null),
      a = this.parent;
    if (a.isDestroyed() || !a.isVisible() || a.isMinimized()) return;
    let i;
    try {
      i = this.overlay ?? this.createOverlay();
    } catch (r) {
      t.uiLogger.warn("[download-arrival] Could not create overlay window", {
        error: r,
      });
      return;
    }
    return new Promise((r) => {
      (clearTimeout(this.releaseTimer), (this.releaseTimer = void 0));
      const n = l.randomUUID();
      (this.flights.set(n, {
        flight: { flightId: n, from: e.from, to: e.to, iconUrl: s },
        timer: setTimeout(() => this.finish(n), d),
        finish: r,
      }),
        this.flights.size === 1 &&
          (i.setBounds(a.getContentBounds()),
          i.setIgnoreMouseEvents(!0),
          i.showInactive()),
        this.publish());
    });
  }
  dispose() {
    (this.stopParent(), this.destroyOverlay());
  }
  finishAll = () => {
    for (const e of this.flights.keys()) this.finish(e);
  };
  finish(e) {
    const s = this.flights.get(e);
    s &&
      (clearTimeout(s.timer),
      this.flights.delete(e),
      this.flights.size === 0 &&
        this.overlay &&
        !this.overlay.isDestroyed() &&
        (this.overlay.hide(), this.scheduleRelease()),
      this.publish(),
      s.finish());
  }
  publish() {
    t.eventManager.publishIPCState("downloads.arrival", this.layerId, {
      flights: [...this.flights.values()].map(({ flight: e }) => e),
    });
  }
  scheduleRelease() {
    (clearTimeout(this.releaseTimer),
      (this.releaseTimer = setTimeout(() => this.destroyOverlay(), h)));
  }
  createOverlay() {
    const e = new u.BrowserWindow({
      parent: this.parent,
      show: !1,
      frame: !1,
      transparent: !0,
      backgroundColor: "#00000000",
      focusable: !1,
      skipTaskbar: !0,
      hasShadow: !1,
      movable: !1,
      resizable: !1,
      minimizable: !1,
      maximizable: !1,
      fullscreenable: !1,
      webPreferences: {
        preload: t.getPreloadPath("uiPreload"),
        partition: "persist:ui-partition-ui",
        contextIsolation: !0,
        nodeIntegration: !1,
        focusOnNavigation: !1,
        backgroundThrottling: !1,
        zoomFactor: 1,
        additionalArguments: [
          `--window-id=${this.windowId}`,
          `--layer-id=${this.layerId}`,
          "--layer-type=component",
        ],
      },
    });
    ((this.overlay = e), e.setIgnoreMouseEvents(!0));
    const s = t.eventManager.registerStandaloneRenderer({
        windowId: this.windowId,
        layerId: this.layerId,
        webContents: e.webContents,
      }),
      a = t.eventManager.onIPCCommand(
        "downloads",
        "arrivalFinished",
        ({ command: r }) => {
          this.overlay === e && this.finish(r.payload.flightId);
        },
        { windowId: this.windowId, layerId: this.layerId },
      );
    e.once("closed", () => {
      (a(),
        s(),
        t.ipcStateRegistry.invalidate(
          "ipc:state",
          t.toIPCStateSubscriptionKey("downloads.arrival", this.layerId),
        ),
        this.overlay === e && ((this.overlay = null), this.finishAll()));
    });
    const i = () => {
      this.overlay === e &&
        (t.uiLogger.warn(
          "[download-arrival] Overlay renderer unavailable, destroying window",
        ),
        this.destroyOverlay());
    };
    return (
      t.safeWithWebContents(e.webContents, (r) => {
        (r.on("render-process-gone", i),
          r.on("unresponsive", i),
          r.on("will-navigate", (n) => {
            (n.preventDefault(), i());
          }),
          r.setWindowOpenHandler(() => ({ action: "deny" })));
      }),
      e.loadURL(t.getRendererURL("/ui/download-arrival")).catch(i),
      e
    );
  }
  destroyOverlay() {
    (clearTimeout(this.releaseTimer), (this.releaseTimer = void 0));
    const e = this.overlay;
    ((this.overlay = null),
      this.finishAll(),
      e && !e.isDestroyed() && e.destroy());
  }
}
exports.DownloadArrivalWindow = f;
