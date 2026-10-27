"use strict";
(function () {
  try {
    var i =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    i.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var i =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new i.Error().stack;
    e &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[e] = "96efbcc0-76ed-42ac-bfa6-a6a4be3976c7"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-96efbcc0-76ed-42ac-bfa6-a6a4be3976c7"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const I = require("electron"),
  s = require("../main-app.js");
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
const D = { width: 640, height: 360 };
class P extends s.UIComponent {
  constructor(e, r, t, n) {
    const u = n?.getLayer() ?? null;
    (super(
      "screen_picker_dialog",
      {
        position: {
          horizontalAlign: "center",
          verticalAlign: "center",
          relativeTo: u ? "tab" : "window",
        },
        size: "full",
        outsidePressPolicy: { kind: "ignore" },
        pageModal: !0,
        workspaceTransitionPolicy: u
          ? { kind: "followOwner" }
          : { kind: "fixed" },
      },
      e,
      u ?? void 0,
    ),
      (this.getTabSources = r),
      (this.audioRequested = t),
      this.registerEventHandlers());
  }
  resolveCallback = null;
  registerEventHandlers() {
    (this.componentLayer.handleInvoke("screen:get-sources", async () => ({
      sources: await this.getDesktopSources(),
    })),
      this.componentLayer.handleInvoke("screen:get-tab-sources", async () => ({
        sources: this.getTabSources(),
        audioRequested: this.audioRequested,
      })),
      this.componentLayer.onUIEvent(
        "screen-picker-dialog:source-selected",
        (e) => {
          (this.resolveSelection({
            sourceId: e.sourceId,
            shareAudio: e.shareAudio,
          }),
            this.detach());
        },
      ),
      this.componentLayer.onUIEvent("screen-picker-dialog:cancelled", () => {
        (this.resolveSelection(null), this.detach());
      }));
  }
  resolveSelection(e) {
    this.resolveCallback &&
      (this.resolveCallback(e), (this.resolveCallback = null));
  }
  async pickScreenSource() {
    return (
      this.attach(),
      new Promise((e) => {
        this.resolveCallback = e;
      })
    );
  }
  detach() {
    (this.resolveSelection(null), super.detach());
  }
  close() {
    (this.resolveSelection(null), super.close());
  }
  async getDesktopSources() {
    try {
      return (
        await I.desktopCapturer.getSources({
          types: ["window", "screen"],
          thumbnailSize: D,
          fetchWindowIcons: !0,
        })
      ).map((r) => {
        const t = r.appIcon ? r.appIcon.toDataURL() : void 0,
          n = r.id.startsWith("screen:") ? "screen" : "window";
        return {
          id: r.id,
          sourceType: n,
          name: r.name,
          thumbnailURL: r.thumbnail.toDataURL(),
          hasThumbnail: !r.thumbnail.isEmpty(),
          appIcon: t,
        };
      });
    } catch (e) {
      return (
        s.logger.warn(
          "[ScreenPicker] Failed to load desktop capture sources",
          e,
        ),
        []
      );
    }
  }
}
const b = "tab:";
class E {
  constructor(e, r) {
    this.requestingWindow = e;
    const t = s.safeGetWebContentsForFrame(r.frame);
    this.requestingWebContents = t.ok ? t.value : null;
  }
  requestingWebContents;
  getSources() {
    return this.getCandidates().map((e) => e.source);
  }
  getRequestingTab() {
    const e = s.safeGetWebContentsId(this.requestingWebContents);
    return e.ok
      ? (this.requestingWindow.rendererFor(e.value)?.page ?? null)
      : null;
  }
  getRequestingLayers() {
    const e = s.safeGetWebContentsId(this.requestingWebContents);
    return e.ok
      ? (this.requestingWindow.rendererFor(e.value)?.layers ?? null)
      : null;
  }
  refreshShownPreviews() {
    for (const { page: e } of this.getCandidates())
      e.isActive() && e.captureAndSaveScreenshot("thumbnail-refresh");
  }
  async holdCaptureTab(e) {
    const r = k(e),
      t = this.getCandidates().find((u) => u.page.id === r);
    if (!t) return null;
    const n = await t.window.holdPageDrawable(t.page.id);
    return n
      ? this.isCaptureReady(n.renderer.page)
        ? n
        : (n.release(), null)
      : null;
  }
  isCaptureReady(e) {
    if (!v(e) || !e.isInitialized || e.isDormant || !e.layer?.hasWebContents())
      return !1;
    try {
      const r = s.safeGetWebContentsSession(e.layer.getWebContents());
      if (!r.ok) return !1;
      const t = s.safeGetWebContentsSession(this.requestingWebContents);
      return !(t.ok && r.value !== t.value);
    } catch {
      return !1;
    }
  }
  getCandidates() {
    return this.getProfileWindows()
      .flatMap((e) => this.getWindowCandidates(e))
      .sort((e, r) => r.page.lastShownAt - e.page.lastShownAt);
  }
  getProfileWindows() {
    const e = this.requestingWindow.profileId,
      r = this.requestingWindow.isIncognito,
      t = s.managedWindows.byProfile(e).filter((n) => n.isIncognito === r);
    return [
      this.requestingWindow,
      ...t.filter((n) => n.id !== this.requestingWindow.id),
    ];
  }
  getWindowCandidates(e) {
    return e
      .pages()
      .map(({ page: r }) => this.getCandidate(e, r))
      .filter((r) => r !== null);
  }
  getCandidate(e, r) {
    if (!v(r) || (r.isInitialized && !r.isDormant && !this.isCaptureReady(r)))
      return null;
    const t = r.screenshotPath ?? "";
    return {
      page: r,
      window: e,
      source: L(r.id, r.title.trim() || r.url, t, r.faviconUrl),
    };
  }
}
function k(i) {
  if (!i.startsWith(b)) return null;
  const e = i.slice(b.length);
  return e.length > 0 ? e : null;
}
function A(i) {
  return k(i) !== null;
}
function v(i) {
  return !(
    i.tabType !== "website" ||
    !i.isInTabStrip ||
    s.getPageControlMode(i) === "agent"
  );
}
function L(i, e, r, t) {
  return {
    id: `${b}${i}`,
    sourceType: "tab",
    name: e,
    thumbnailURL: r,
    hasThumbnail: r.length > 0,
    appIcon: t || void 0,
  };
}
const _ = 1e3,
  M = 1e4;
function T(i, e, r) {
  const t = {};
  return (
    e.videoRequested && (t.video = i),
    e.audioRequested && r && ((t.audio = i), (t.enableLocalEcho = !0)),
    t
  );
}
function U(i, e) {
  const r = Date.now();
  let t = !1;
  const n = () => {
      (clearInterval(u), e?.off("tab:did-release", n), i.release());
    },
    u = setInterval(() => {
      const g = e?.hasLiveMediaCaptureActivity() === !0;
      (g && (t = !0), !(g || (!t && Date.now() - r < M)) && n());
    }, _);
  e?.on("tab:did-release", n);
}
async function F(i, e) {
  const r = i.frame;
  if (!r) return {};
  const t = s.safeGetWebContentsForFrame(r);
  if (!t.ok) return {};
  const n = s.browserRequestDocumentSource(r),
    u = r.url,
    g = r.frameToken,
    a = () => {
      try {
        return (
          !r.detached &&
          !r.isDestroyed() &&
          r.url === u &&
          r.frameToken === g &&
          n?.isCurrent?.() !== !1
        );
      } catch {
        return !1;
      }
    };
  if (!a()) return {};
  const c = new E(e, i),
    o = c.getRequestingTab();
  let y = !1;
  const d = () =>
    !o || s.getPageControlMode(o) !== "agent"
      ? !1
      : (!y &&
          n &&
          a() &&
          ((y = !0),
          s.recordBrowserRequest(
            t.value,
            {
              kind: "screen-share",
              disposition: "human-required",
              message:
                "Screen sharing requires you to ask the user to take over and choose what to share.",
            },
            n,
          )),
        !0);
  if (d()) return {};
  const w = c.getRequestingLayers();
  if (!w) return {};
  const p = new P(w, () => c.getSources(), i.audioRequested, o);
  c.refreshShownPreviews();
  let h = !1;
  const q = () => {
      ((h = !0), p.close());
    },
    C = () => {
      (!a() || d()) && q();
    };
  (o?.on("tab:did-update-ai-controlled-tab", C),
    o?.on("tab:did-navigate", q),
    o?.on("tab:did-release", q));
  try {
    const f = await p.pickScreenSource();
    if (!f || h || !a() || d()) return {};
    if (A(f.sourceId)) {
      const l = await c.holdCaptureTab(f.sourceId);
      if (!l) return {};
      const m = s.safeWithLayerWebContents(
        l.renderer.page.layer,
        (W) => W.mainFrame,
      );
      return h || !a() || d() || !m.ok
        ? (l.release(), {})
        : (U(l, o), T(m.value, i, f.shareAudio));
    }
    const R = await I.desktopCapturer.getSources({
      types: ["window", "screen"],
    });
    if (h || !a() || d()) return {};
    const S = R.find((l) => l.id === f.sourceId);
    return S ? { video: S } : {};
  } finally {
    (o?.off("tab:did-update-ai-controlled-tab", C),
      o?.off("tab:did-navigate", q),
      o?.off("tab:did-release", q),
      p.close());
  }
}
async function G(i, e, r) {
  let t;
  try {
    t = await F(i, r);
  } catch (n) {
    (s.logger.warn("Display media picker failed; denying request", n),
      (t = {}));
  }
  try {
    e(t);
  } catch (n) {
    (t.video || t.audio) &&
      s.logger.warn("Display media request could not be completed", n);
  }
}
exports.buildTabCaptureStreams = T;
exports.handleDisplayMediaRequest = G;
