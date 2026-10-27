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
      (n._sentryDebugIds[e] = "9dd27739-0e18-4494-b875-97c3ee636c06"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-9dd27739-0e18-4494-b875-97c3ee636c06"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const m = require("node:crypto"),
  o = require("../main-app.js");
require("node:path");
require("electron");
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
class S {
  constructor(e, i) {
    ((this.tabs = e), (this.layers = i));
  }
  previews = new Map();
  disposed = !1;
  async start(e, i, d) {
    if (this.disposed)
      return { success: !1, error: "This Chat preview has closed." };
    const r = this.resolveSource(e, i, d);
    if (!r)
      return {
        success: !1,
        error: "This page is not available to this Chat preview.",
      };
    const { tab: t, receiverLayer: s, chatSessionId: c } = r;
    if (this.previews.size >= 4)
      return {
        success: !1,
        error: "The visible page previews are already streaming.",
      };
    const C = this.tabs.pages.isChatWorkingSetPage(d, c)
      ? "preview"
      : "preserve";
    if (!(await t.layer.prepareVideoCapture(C)))
      return {
        success: !1,
        error: "The page could not prepare a live capture surface.",
      };
    if (
      this.disposed ||
      this.resolveSource(e, i, d)?.tab !== t ||
      this.previews.size >= 4
    )
      return {
        success: !1,
        error: "This page is no longer available to this Chat preview.",
      };
    const q = e.sender,
      l = m.randomUUID();
    let h = () => {};
    const g = o.safeWithLayerWebContents(
      t.layer,
      (a) => (
        (h = o.registerTabVideoPreviewPermission(a, l)),
        a.getMediaSourceId(q)
      ),
    );
    if (!g.ok)
      return (
        h(),
        { success: !1, error: "The page has no live capture surface." }
      );
    const u = () => this.stop(l),
      b = () => {
        (!t.isBrowserAgentControlledTab ||
          t.isBrowserAgentControlledTab.paused ||
          o.pageIsProtected(t.pageControl) ||
          t.hasReleased) &&
          u();
      },
      y = ({ isAttached: a }) => {
        a || u();
      },
      p = setTimeout(u, 2e4);
    if (
      !o.safeWithWebContents(q, (a) => {
        (a.once("destroyed", u),
          a.once("did-navigate", u),
          a.once("render-process-gone", u));
      }).ok
    )
      return (
        clearTimeout(p),
        h(),
        { success: !1, error: "This Chat preview has closed." }
      );
    (s.on("state-changed", y),
      t.on("tab:did-update-ai-controlled-tab", b),
      t.once("tab:did-release", u));
    const v = o.safeWithLayerWebContents(
      t.layer,
      (a) => (
        a.once("destroyed", u),
        a.once("render-process-gone", u),
        () => {
          o.safeWithWebContents(a, (T) => {
            (T.off("destroyed", u), T.off("render-process-gone", u));
          });
        }
      ),
    );
    this.previews.set(l, {
      tab: t,
      receiver: q,
      layerId: i,
      timer: p,
      captureStarted: !1,
      cleanup: () => {
        (clearTimeout(p),
          h(),
          o.safeWithWebContents(q, (a) => {
            (a.off("destroyed", u),
              a.off("did-navigate", u),
              a.off("render-process-gone", u));
          }),
          s.off("state-changed", y),
          t.off("tab:did-update-ai-controlled-tab", b),
          t.off("tab:did-release", u),
          v.ok && v.value());
      },
    });
    const f = t.layer.getBounds(),
      w = Math.min(1, 1280 / Math.max(1, f.width), 720 / Math.max(1, f.height));
    return {
      success: !0,
      previewId: l,
      sourceId: g.value,
      width: Math.max(1, Math.round(f.width * w)),
      height: Math.max(1, Math.round(f.height * w)),
    };
  }
  renew(e, i, d) {
    const r = this.previews.get(d);
    if (!r || r.receiver !== e.sender || r.layerId !== i) return !1;
    if (this.resolveSource(e, i, r.tab.id)?.tab !== r.tab)
      return (this.stop(d), !1);
    if (!r.captureStarted) {
      if (
        !o.safeWithLayerWebContents(r.tab.layer, (s) => {
          s.invalidate();
        }).ok
      )
        return (this.stop(d), !1);
      r.captureStarted = !0;
    }
    return (r.timer.refresh(), !0);
  }
  stopForReceiver(e, i) {
    this.previews.get(i)?.receiver === e.sender && this.stop(i);
  }
  dispose() {
    this.disposed = !0;
    for (const e of this.previews.keys()) this.stop(e);
  }
  stop(e) {
    const i = this.previews.get(e);
    i &&
      (this.previews.delete(e),
      i.cleanup(),
      o.eventManager.publishIPCSignalToLayer(
        {
          domain: "tabs",
          type: "videoPreviewStopped",
          payload: { previewId: e },
        },
        this.layers.getWindowId(),
        i.layerId,
      ));
  }
  resolveSource(e, i, d) {
    const r = this.layers.getLayer(i);
    if (
      !r ||
      !r.isAttached() ||
      (r.layerType !== "ui-tab" && r.layerType !== "ui")
    )
      return null;
    const t = o.safeWithLayerWebContents(
      r,
      (c) => c === e.sender && e.senderFrame === c.mainFrame,
    );
    if (!t.ok || !t.value) return null;
    const s = this.tabs.getTab(d);
    return !s ||
      s.tabType !== "website" ||
      !s.drivingChat ||
      !this.tabs.isChatSessionTarget(i, s.drivingChat) ||
      !s.isBrowserAgentControlledTab ||
      s.isBrowserAgentControlledTab.paused ||
      o.pageIsProtected(s.pageControl) ||
      s.hasReleased ||
      !s.isInitialized ||
      s.isDormant ||
      !s.layer.isAttached()
      ? null
      : { tab: s, receiverLayer: r, chatSessionId: s.drivingChat };
  }
}
exports.TabVideoPreviews = S;
