"use strict";
(function () {
  try {
    var d =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    d.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var d =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new d.Error().stack;
    e &&
      ((d._sentryDebugIds = d._sentryDebugIds || {}),
      (d._sentryDebugIds[e] = "ac5bae71-6185-4fe2-acac-43e8de4b8d3a"),
      (d._sentryDebugIdIdentifier =
        "sentry-dbid-ac5bae71-6185-4fe2-acac-43e8de4b8d3a"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const O = require("valibot"),
  c = require("../main-app.js"),
  R = require("./protocol-BGN1BQCi.js"),
  h = require("./ids-B2sWlG17.js"),
  b = require("./profileLayoutLifecycle-BDYjrhKu.js"),
  D = require("./workspace-surface-model-CMo0ac7-.js");
require("node:crypto");
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
require("node:fs");
require("node:http");
require("node:https");
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
require("./commitRecord-DR9i1ecT.js");
function j(d) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (d) {
    for (const r in d)
      if (r !== "default") {
        const t = Object.getOwnPropertyDescriptor(d, r);
        Object.defineProperty(
          e,
          r,
          t.get ? t : { enumerable: !0, get: () => d[r] },
        );
      }
  }
  return ((e.default = d), Object.freeze(e));
}
const s = j(O);
function L(d, e) {
  const r = h.findPage(d, e.pageId);
  return r?.kind !== "slot" ||
    r.slotId !== e.slotId ||
    h.holding(d, e.pageId) !== e.chatId ||
    d.windows
      .flatMap((i) => h.entries(i))
      .flatMap((i) => h.chatViews(i))
      .some(
        ({ view: i }) =>
          i.chatId === e.chatId &&
          i.layout.kind !== "root-full" &&
          i.layout.presentedSlotId === e.slotId,
      )
    ? void 0
    : e.slotId;
}
const W = s.object({
    chatSessionId: h.ChatId,
    target: s.variant("kind", [
      s.object({ kind: s.literal("page"), pageId: h.PageId }),
      s.object({ kind: s.literal("url"), url: s.pipe(s.string(), s.url()) }),
    ]),
  }),
  v = s.pipe(s.number(), s.finite(), s.minValue(1)),
  k = s.pipe(s.number(), s.finite(), s.minValue(0)),
  _ = s.object({
    endpoint: s.object({
      rendererGeneration: s.number(),
      treeRevision: s.number(),
      geometryRevision: s.number(),
    }),
    revision: s.pipe(s.number(), s.integer(), s.minValue(1)),
    pageId: h.PageId,
    reducedMotion: s.boolean(),
    resize: s.object({ insetX: k, insetY: k }),
    rect: s.object({ x: k, y: k, width: v, height: v }),
    viewport: s.object({ width: v, height: v }),
  });
class A extends c.UIComponent {
  constructor(e, r) {
    (super(
      "peek",
      {
        position: { top: 0, left: 0, relativeTo: "window" },
        size: "full",
        outsidePressPolicy: { kind: "ignore" },
        workspaceTransitionPolicy: { kind: "dismissOnTransition" },
      },
      e.layers,
    ),
      this.setWorkspaceTransitionDismissHandler(r));
  }
}
class x {
  constructor(e) {
    this.deps = e;
  }
  active;
  request = 0;
  disposed = !1;
  cleanup = Promise.resolve();
  opening = Promise.resolve();
  async open(e, r) {
    this.dismiss();
    const t = this.request,
      i = this.opening;
    let n = () => {};
    ((this.opening = new Promise((o) => {
      n = o;
    })),
      await i);
    try {
      return await this.openRequested(e, r, t);
    } finally {
      n();
    }
  }
  async openRequested(e, r, t) {
    if ((await this.cleanup, this.disposed || t !== this.request))
      throw new Error("This peek was dismissed.");
    const i = s.parse(W, r),
      { window: n, windowId: o, runtime: p, pages: w } = this.deps,
      I = this.sourceChat(e, i.chatSessionId);
    if (
      !I ||
      this.disposed ||
      n.layers.isLegalGateOverlayActive() ||
      n.layers.isPageFullscreen()
    )
      throw new Error("Peek is not available in this Chat right now.");
    const S = p.store.state.data.chats[i.chatSessionId]?.track,
      T = S ? h.pageIds(S) : [];
    let g, q;
    if (i.target.kind === "page") {
      const a = p.store.state.data,
        l = h.pageEntry(a, i.target.pageId),
        f = h.pageInTrack(a, i.target.pageId);
      if (
        !T.includes(i.target.pageId) &&
        l?.windowId !== o &&
        f?.window.id !== o
      )
        throw new Error("This page is not available in this window.");
      g = i.target.pageId;
    } else {
      const a = i.target.url,
        l = new URL(a);
      if (
        !["https:", "http:", "orbitra:", "file:"].includes(l.protocol) ||
        !D.isWorkspaceChildPageUrl(a)
      )
        throw new Error("This link cannot open in peek.");
      if (
        ((g = T.find((f) => {
          const m = w.get(f)?.url ?? p.store.summaryOf(f)?.url;
          return m === l.href || m === a;
        })),
        !g)
      ) {
        const f = b.newPageInChat({
          column: I.view,
          viewId: I.viewId,
          expectedChatId: I.chatId,
          url: l.href,
          present: !1,
          now: Date.now(),
        });
        if (
          ((g = f.args.pageId),
          (q = f.args.slotId),
          w.prepareVisit(g, R.VisitType.LINK),
          !(await p.dispatch(f)).ok)
        )
          throw (
            w.cancelPreparedPage(g),
            new Error("The page could not be opened.")
          );
      }
    }
    if (
      this.disposed ||
      t !== this.request ||
      !this.sourceChat(e, i.chatSessionId)
    )
      throw (
        q && (await this.closeTemporary(g, q, i.chatSessionId)),
        new Error("This peek was dismissed.")
      );
    if (w.all().find((a) => a.pageId === g && a.windowId !== o))
      throw new Error("This page is open in another window.");
    w.prefetchHistories([g]);
    let y;
    try {
      y = new A(n, () => this.dismiss());
    } catch (a) {
      throw (q && (await this.closeTemporary(g, q, i.chatSessionId)), a);
    }
    const C = Promise.withResolvers(),
      u = {
        component: y,
        pageId: g,
        chatId: i.chatSessionId,
        sourceLayerId: e,
        returnFocus: n.layers.focus.focusOwner(),
        temporarySlotId: q,
        stop: [],
        stage: { kind: "measuring" },
        measurementRevision: 0,
        shown: C.resolve,
      };
    ((this.active = u), this.publish(u));
    const P = { windowId: o, layerId: y.getLayer().id };
    return (
      u.stop.push(
        p.placement.subscribe(o, () => this.publish(u)),
        p.store.subscribeMetadata(({ pages: a }) => {
          a.some((l) => l.id === u.pageId) && this.publish(u);
        }),
        c.eventManager.onIPCCommand(
          "tabs",
          "closePeek",
          () => this.dismiss(),
          P,
        ),
        c.eventManager.onIPCCommand(
          "tabs",
          "preparePeek",
          ({ command: a }) => {
            const l = s.safeParse(b.TransitionPreparedAckSchema, a.payload);
            l.success &&
              this.active === u &&
              u.stage.kind === "revealing" &&
              u.stage.reveal.acknowledge(l.output);
          },
          P,
        ),
        c.eventManager.onIPCCommand(
          "tabs",
          "measurePeek",
          ({ command: a }) => this.measure(a.payload),
          P,
        ),
        p.store.subscribe(() => {
          const a = p.store.state.data,
            l = a.chats[u.chatId],
            f = l && h.pageIds(l.track).includes(u.pageId),
            m = h.pageEntry(a, u.pageId) ?? h.pageInTrack(a, u.pageId),
            E = p.store.summaryOf(u.pageId) !== void 0,
            M = !m || ("windowId" in m ? m.windowId === o : m.window.id === o);
          (!f && !m) || !E || !M || !this.sourceChat(u.sourceLayerId, u.chatId)
            ? this.dismiss()
            : this.publish(u);
        }),
      ),
      this.watchLayer(u, y.getLayer()),
      y.attach(!0),
      y
        .getLayer()
        .waitForLoadResult()
        .then((a) => {
          this.active === u && a !== "ready" && this.dismiss();
        }),
      await C.promise,
      g
    );
  }
  sourceChat(e, r) {
    const { runtime: t, windowId: i } = this.deps,
      n = c.windowLayoutModel(t.store.state.data, i);
    if (!(!n || n.chatSidebar?.mode !== "side-by-side")) {
      for (const o of c.expectedTargets(n))
        if (
          o.kind === "chat" &&
          o.view.kind === "sidebar" &&
          o.chatId === r &&
          c.targetKey(o) === e
        )
          return o;
    }
  }
  measure(e) {
    const r = this.active;
    if (!r) return;
    const t = s.safeParse(_, e);
    if (!t.success) return;
    const { window: i, windowId: n, runtime: o } = this.deps,
      p = this.sourceChat(r.sourceLayerId, r.chatId)
        ? b.acceptPeekMeasurement(
            t.output,
            { pageId: r.pageId, revision: r.measurementRevision },
            {
              placement: o.placement.current(n),
              layoutRevision: o.store.windowLayoutOf(n)?.revision ?? 0,
              contentBounds: i.nativeWindow.getContentBounds(),
            },
          )
        : void 0;
    if (!p) {
      this.publish(r);
      return;
    }
    ((r.measurementRevision = t.output.revision),
      r.stage.kind === "measuring" &&
        (r.stage = {
          kind: "revealing",
          reveal: this.revealWhenPlaced(r, t.output.reducedMotion),
        }),
      this.raise(r),
      o.placement.present(n, p).then((w) => {
        w === "placed" && r.shown();
      }));
  }
  revealWhenPlaced(e, r) {
    const { windowId: t, runtime: i, pages: n } = this.deps;
    return i.placement.revealWhenPlaced(t, {
      key: c.targetKey({ kind: "page", pageId: e.pageId }),
      reducedMotion: r,
      publish: (o) => {
        if (this.active === e) {
          if (o.kind === "idle" && o.settlement.kind === "invalidated") {
            this.dismiss();
            return;
          }
          ((e.transition = o), this.publish(e));
        }
      },
      reveal: () => {
        this.active === e &&
          ((e.stage = { kind: "visible" }),
          this.raise(e),
          n.reconcileDriveChrome(),
          n.get(e.pageId)?.getLayer().focus("user-activation"));
      },
    });
  }
  raise(e) {
    e.stage.kind !== "measuring" &&
      this.deps.window.layers.setPeekPresentation({
        pageLayerId: c.targetKey({ kind: "page", pageId: e.pageId }),
        componentId: e.component.getLayer().id,
        phase: e.stage.kind === "visible" ? "visible" : "preparing",
        dismiss: () => this.dismiss(),
      });
  }
  watchLayer(e, r) {
    const t = () => {
      this.active === e && this.dismiss();
    };
    (c.safeWithLayerWebContents(r, (i) => {
      (i.once("destroyed", t), i.once("render-process-gone", t));
    }),
      e.stop.push(() => {
        c.safeWithLayerWebContents(r, (i) => {
          (i.off("destroyed", t), i.off("render-process-gone", t));
        });
      }));
  }
  dismiss() {
    this.request += 1;
    const e = this.active;
    if (((this.active = void 0), !e)) return;
    for (const n of e.stop) n();
    (e.shown(), e.stage.kind === "revealing" && e.stage.reveal.cancel());
    const { runtime: r, windowId: t } = this.deps;
    if (this.disposed) {
      (r.overlay.setPresentation(t, void 0), this.finishDismiss(e, "skipped"));
      return;
    }
    const i = r.overlay.presentationOf(t)
      ? r.placement.present(t, void 0)
      : Promise.resolve("skipped");
    this.cleanup = this.cleanup
      .then(() => i)
      .then((n) => this.finishDismiss(e, n))
      .then(() =>
        e.temporarySlotId
          ? this.closeTemporary(e.pageId, e.temporarySlotId, e.chatId)
          : void 0,
      )
      .catch(() => {
        c.layoutLogger.warn("[peek] dismissal cleanup failed", {
          pageId: e.pageId,
        });
      });
  }
  finishDismiss(e, r) {
    const { window: t, pages: i } = this.deps;
    t.layers.focus.beginTransition();
    try {
      (t.layers.setPeekPresentation(void 0),
        i.reconcileDriveChrome(),
        c.ipcStateRegistry.invalidate(
          "ipc:state",
          c.toIPCStateSubscriptionKey("ui.peek", e.component.getLayer().id),
        ),
        e.component.close(),
        r === "placed" &&
          e.returnFocus &&
          t.layers.getLayer(e.returnFocus)?.focus("window-restore"));
    } finally {
      t.layers.focus.endTransition();
    }
  }
  dismissAction(e, r, t) {
    if (!r) return "hide";
    const i = this.deps.runtime.store.state.data;
    return L(i, { pageId: e, slotId: r, chatId: t }) ? "close" : "hide";
  }
  publish(e) {
    const r = this.deps.runtime.placement.current(this.deps.windowId),
      t = r ? b.endpointOf(r) : void 0;
    c.eventManager.publishIPCState("ui.peek", e.component.getLayer().id, {
      dismissAction: this.dismissAction(e.pageId, e.temporarySlotId, e.chatId),
      pageId: e.pageId,
      url: this.deps.runtime.store.summaryOf(e.pageId)?.url ?? "",
      endpoint: t,
      transition: e.transition,
    });
  }
  async closeTemporary(e, r, t) {
    const i = Symbol("kept");
    try {
      const n = await this.deps.runtime.store.dispatchCurrent((o) => {
        const p = L(o, { pageId: e, slotId: r, chatId: t });
        if (!p) throw i;
        return { kind: "closeSlot", slotId: p };
      });
      n.ok ||
        c.layoutLogger.warn("[peek] temporary page close refused", {
          pageId: e,
          reason: n.reason,
        });
    } catch (n) {
      if (n !== i) throw n;
    }
  }
  dispose() {
    ((this.disposed = !0), this.dismiss());
  }
}
exports.WindowPeek = x;
