"use strict";
(function () {
  try {
    var n =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    n.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new n.Error().stack;
    e &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[e] = "e3e52ac7-7de4-4108-84ed-75c841088309"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-e3e52ac7-7de4-4108-84ed-75c841088309"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const S = require("electron"),
  M = require("valibot"),
  h = require("../main-app.js");
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
function O(n) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (n) {
    for (const s in n)
      if (s !== "default") {
        const u = Object.getOwnPropertyDescriptor(n, s);
        Object.defineProperty(
          e,
          s,
          u.get ? u : { enumerable: !0, get: () => n[s] },
        );
      }
  }
  return ((e.default = n), Object.freeze(e));
}
const t = O(M),
  W = 10;
function L(n) {
  const { anchor: e, windowSize: s, sideOffset: u, align: r } = n,
    i = Math.min(n.size.width, s.width),
    a = Math.min(n.size.height, s.height);
  let o = n.side;
  const d = {
      top: e.y,
      bottom: s.height - e.y - e.height,
      left: e.x,
      right: s.width - e.x - e.width,
    },
    c = { top: "bottom", bottom: "top", left: "right", right: "left" },
    b = (o === "top" || o === "bottom" ? a : i) + u;
  d[o] < b && d[c[o]] > d[o] && (o = c[o]);
  function l(g, m, w) {
    return r === "start" ? g : r === "end" ? g + m - w : g + (m - w) / 2;
  }
  let f = l(e.x, e.width, i),
    p = l(e.y, e.height, a);
  return (
    o === "top" && (p = e.y - a - u),
    o === "bottom" && (p = e.y + e.height + u),
    o === "left" && (f = e.x - i - u),
    o === "right" && (f = e.x + e.width + u),
    {
      x: Math.round(Math.max(0, Math.min(f, s.width - i))),
      y: Math.round(Math.max(0, Math.min(p, s.height - a))),
      width: Math.ceil(i),
      height: Math.ceil(a),
    }
  );
}
const y = t.pipe(t.number(), t.finite(), t.minValue(1), t.maxValue(1e5)),
  x = t.pipe(t.number(), t.finite(), t.minValue(-1e5), t.maxValue(1e5)),
  T = t.pipe(t.string(), t.minLength(1), t.maxLength(80)),
  C = t.variant("phase", [
    t.object({
      phase: t.literal("show"),
      requestId: T,
      text: t.pipe(t.string(), t.minLength(1), t.maxLength(1024)),
      shortcut: t.pipe(t.string(), t.maxLength(128)),
      side: t.picklist(["top", "bottom", "left", "right"]),
      align: t.picklist(["start", "center", "end"]),
      sideOffset: t.pipe(t.number(), t.finite(), t.minValue(0), t.maxValue(48)),
      anchor: t.object({ x, y: x, width: y, height: y }),
      viewport: t.object({ width: y, height: y }),
    }),
    t.object({ phase: t.literal("renew"), requestId: T }),
    t.object({ phase: t.literal("hide"), requestId: T }),
  ]),
  z = t.object({ requestId: T, width: y, height: y });
class D {
  constructor(e) {
    ((this.layers = e), (this.layerId = `native-tooltip-${e.getWindowId()}`));
    const s = e.getWindow();
    if (!s) throw new Error("Tooltip parent window is unavailable");
    this.parent = s;
    const u = s,
      r = [
        "blur",
        "hide",
        "minimize",
        "move",
        "resize",
        "enter-full-screen",
        "leave-full-screen",
      ];
    for (const i of r) u.on(i, this.hide);
    this.stopParent = () => {
      for (const i of r) u.off(i, this.hide);
    };
  }
  overlay = null;
  active = null;
  stopSource = null;
  leaseTimer;
  readyTimer;
  releaseTimer;
  layerId;
  parent;
  stopParent;
  handle(e, s) {
    const u = t.safeParse(C, s);
    if (!u.success) {
      h.uiLogger.warn("[tooltip] Refused invalid tooltip intent");
      return;
    }
    const r = u.output;
    if (r.phase !== "show") {
      if (
        this.active?.source.id !== e ||
        this.active.intent.requestId !== r.requestId
      )
        return;
      r.phase === "hide"
        ? this.hide()
        : this.sourceIsPresented(this.active.source)
          ? this.renewLease()
          : this.hide();
      return;
    }
    this.hide();
    const i = this.layers.getLayer(e);
    if (!i || !this.sourceIsPresented(i)) return;
    const a = i.getBounds(),
      d = this.parent.getContentBounds(),
      c = a.width / r.viewport.width,
      b = a.height / r.viewport.height,
      l = {
        x: a.x + r.anchor.x * c,
        y: a.y + r.anchor.y * b,
        width: r.anchor.width * c,
        height: r.anchor.height * b,
      };
    if (
      !(
        l.x < 0 ||
        l.y < 0 ||
        l.x + l.width > d.width + 1 ||
        l.y + l.height > d.height + 1
      )
    ) {
      (clearTimeout(this.releaseTimer),
        (this.releaseTimer = void 0),
        (this.active = {
          source: i,
          intent: r,
          anchor: l,
          maxWidth: Math.min(360, d.width),
          maxHeight: Math.min(200, d.height),
        }));
      try {
        const f = this.overlay ?? this.createOverlay();
        (f.hide(), f.setSize(this.active.maxWidth, this.active.maxHeight));
        let p = "windows";
        (process.platform === "darwin" && (p = "macos"),
          process.platform === "linux" && (p = "linux"),
          h.eventManager.publishIPCState("ui.tooltip", this.layerId, {
            tooltip: {
              requestId: r.requestId,
              text: r.text,
              shortcut: r.shortcut,
              platform: p,
              maxWidth: this.active.maxWidth,
              maxHeight: this.active.maxHeight,
            },
          }));
        const g = i.onBoundsPlaced(this.hide),
          m = ({ isAttached: q }) => {
            q || this.hide();
          };
        i.on("state-changed", m);
        const w = h.safeWithLayerWebContents(i, (q) => {
          const I = (v, _, j, P) => {
            P && this.hide();
          };
          return (
            q.on("destroyed", this.hide),
            q.on("render-process-gone", this.hide),
            q.on("unresponsive", this.hide),
            q.on("did-start-navigation", I),
            () => {
              h.safeWithWebContents(q, (v) => {
                (v.off("destroyed", this.hide),
                  v.off("render-process-gone", this.hide),
                  v.off("unresponsive", this.hide),
                  v.off("did-start-navigation", I));
              });
            }
          );
        });
        ((this.stopSource = () => {
          (g(), i.off("state-changed", m), w.ok && w.value());
        }),
          this.renewLease(),
          (this.readyTimer = setTimeout(() => this.destroyOverlay(), 3e3)));
      } catch (f) {
        (h.uiLogger.warn("[tooltip] Could not prepare tooltip window", {
          error: f,
        }),
          this.destroyOverlay());
      }
    }
  }
  sourceIsPresented(e) {
    const s = this.parent;
    return s.isDestroyed() ||
      !s.isFocused() ||
      !s.isVisible() ||
      !e.hasWebContents() ||
      !e.isAttached() ||
      (e.layerType !== "ui" &&
        e.layerType !== "ui-tab" &&
        e.layerType !== "component") ||
      (e.isTab() && !this.layers.isInteractiveTabSurface(e.id))
      ? !1
      : e.getNativeView().getVisible();
  }
  createOverlay() {
    const e = new S.BrowserWindow({
      parent: this.parent,
      width: 360,
      height: 200,
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
        preload: h.getPreloadPath("uiPreload"),
        partition: "persist:ui-partition-ui",
        contextIsolation: !0,
        nodeIntegration: !1,
        focusOnNavigation: !1,
        backgroundThrottling: !0,
        zoomFactor: 1,
        additionalArguments: [
          `--window-id=${this.layers.getWindowId()}`,
          `--layer-id=${this.layerId}`,
          "--layer-type=component",
        ],
      },
    });
    ((this.overlay = e), e.setIgnoreMouseEvents(!0));
    const s = h.eventManager.registerStandaloneRenderer({
        windowId: this.layers.getWindowId(),
        layerId: this.layerId,
        webContents: e.webContents,
      }),
      u = h.eventManager.onIPCCommand(
        "ui",
        "tooltipMeasured",
        ({ command: i }) => {
          const a = t.safeParse(z, i.payload);
          if (!a.success) return;
          const o = this.active;
          if (
            !o ||
            a.output.requestId !== o.intent.requestId ||
            this.overlay !== e
          )
            return;
          if (!this.sourceIsPresented(o.source)) {
            this.hide();
            return;
          }
          if (a.output.width > o.maxWidth || a.output.height > o.maxHeight)
            return;
          (clearTimeout(this.readyTimer), (this.readyTimer = void 0));
          const d = this.parent.getContentBounds(),
            c = L({
              anchor: o.anchor,
              size: a.output,
              windowSize: d,
              side: o.intent.side,
              align: o.intent.align,
              sideOffset: o.intent.sideOffset - W,
            });
          (e.setBounds({ ...c, x: d.x + c.x, y: d.y + c.y }),
            e.setIgnoreMouseEvents(!0),
            e.showInactive());
        },
        { windowId: this.layers.getWindowId(), layerId: this.layerId },
      );
    e.once("closed", () => {
      (u(),
        s(),
        h.ipcStateRegistry.invalidate(
          "ipc:state",
          h.toIPCStateSubscriptionKey("ui.tooltip", this.layerId),
        ),
        this.overlay === e && ((this.overlay = null), this.hide()));
    });
    const r = () => {
      this.overlay === e &&
        (h.uiLogger.warn(
          "[tooltip] Tooltip renderer unavailable, destroying window",
        ),
        this.destroyOverlay());
    };
    return (
      h.safeWithWebContents(e.webContents, (i) => {
        (i.on("render-process-gone", r),
          i.on("unresponsive", r),
          i.on("destroyed", r),
          i.on("will-navigate", (a) => {
            (a.preventDefault(), r());
          }),
          i.setWindowOpenHandler(() => ({ action: "deny" })));
      }),
      e.loadURL(h.getRendererURL("/ui/tooltip")).catch(r),
      e
    );
  }
  renewLease() {
    (clearTimeout(this.leaseTimer),
      (this.leaseTimer = setTimeout(this.hide, 1200)));
  }
  hide = () => {
    (clearTimeout(this.leaseTimer),
      clearTimeout(this.readyTimer),
      (this.leaseTimer = void 0),
      (this.readyTimer = void 0),
      this.stopSource?.(),
      (this.stopSource = null),
      (this.active = null),
      !(!this.overlay || this.overlay.isDestroyed()) &&
        (this.overlay.hide(),
        h.eventManager.publishIPCState("ui.tooltip", this.layerId, {
          tooltip: null,
        }),
        clearTimeout(this.releaseTimer),
        (this.releaseTimer = setTimeout(() => this.destroyOverlay(), 3e4))));
  };
  destroyOverlay() {
    (this.hide(),
      clearTimeout(this.releaseTimer),
      (this.releaseTimer = void 0));
    const e = this.overlay;
    ((this.overlay = null), e && !e.isDestroyed() && e.destroy());
  }
  dispose() {
    (this.stopParent(), this.destroyOverlay());
  }
}
exports.NativeTooltipWindow = D;
