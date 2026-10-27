"use strict";
(function () {
  try {
    var u =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    u.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var u =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new u.Error().stack;
    e &&
      ((u._sentryDebugIds = u._sentryDebugIds || {}),
      (u._sentryDebugIds[e] = "cf74f59a-1603-494d-825f-e6e66cb3ce3e"),
      (u._sentryDebugIdIdentifier =
        "sentry-dbid-cf74f59a-1603-494d-825f-e6e66cb3ce3e"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const o = require("../main-app.js"),
  l = require("./ids-B2sWlG17.js"),
  b = require("valibot"),
  m = require("./UserRequests-cRpr0CFi.js"),
  k = require("./commitRecord-DR9i1ecT.js"),
  S = require("./boot-B3ykpiVV.js");
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
require("node:url");
require("./suggestion-utils-CLM94tkM.js");
require("./profileLayoutLifecycle-BDYjrhKu.js");
require("./storageObjectCache-ClYu2auD.js");
require("./routine-suggestion-store-Bb2MYDKl.js");
require("fastest-levenshtein");
require("./workspace-surface-model-CMo0ac7-.js");
function P(u) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (u) {
    for (const r in u)
      if (r !== "default") {
        const t = Object.getOwnPropertyDescriptor(u, r);
        Object.defineProperty(
          e,
          r,
          t.get ? t : { enumerable: !0, get: () => u[r] },
        );
      }
  }
  return ((e.default = u), Object.freeze(e));
}
const C = P(b);
async function T(u, e, r) {
  const t = new Promise((i, s) => {
    setTimeout(() => s(new Error(r)), e);
  });
  return Promise.race([u, t]);
}
class O {
  constructor(e) {
    this.deps = e;
  }
  controlTransitions = new Set();
  openPages() {
    const e = this.deps.data(),
      r = new Map();
    for (const n of this.deps.runtimes()) r.set(n.pageId, n.tab);
    const t = new Map();
    for (const [n, a] of Object.entries(e.chats))
      for (const d of l.pageIds(a.track)) {
        const c = t.get(d) ?? new Set();
        (c.add(n), t.set(d, c));
      }
    const i = new Map(
        S.placedPages(e, this.deps.summaryOf).map((n) => [n.id, n.placement]),
      ),
      s = [];
    for (const n of new Set(l.placedPageIds(e))) {
      const a = this.deps.summaryOf(n);
      if (!a) continue;
      const d = A(t.get(n));
      s.push({
        id: a.id,
        title: a.title,
        url: a.url,
        faviconUrl: a.faviconUrl,
        openedAt: a.openedAt,
        lastShownAt: a.lastShownAt,
        lastActivityAt: a.lastActivityAt,
        placement: i.get(n) ?? "chat",
        scope: M(a, d, r.get(n)),
      });
    }
    return s;
  }
  isChatWorkingSetPage(e, r) {
    const t = this.deps.data().chats[r];
    return !!t && l.pageIds(t.track).some((i) => i === e);
  }
  owningSession(e) {
    const r = e.isBrowserAgentControlledTab;
    if (!r) return null;
    const t = this.deps.sessions();
    if (!t) return null;
    const i = t.get(r.agentId);
    if (i) return i;
    for (const s of t.values()) if (s.fsBasePath === r.agentId) return s;
    return null;
  }
  async create(e, r, t = 600 * 1e3, i) {
    const s = e.tabSurfaceIntent === "background-extraction";
    (!e.isBrowserAgentControlledTab &&
      !(s && e.url === "about:blank") &&
      (await T(
        o.agentRateLimiter.waitForTurn(e.url ?? "", this.deps.profileId, i),
        t,
        `LayoutPageRuntime creation timed out after ${t / 1e3 / 60} minutes`,
      )),
      i?.throwIfAborted());
    const n = e.url ?? "about:blank",
      a = e.claimedByChatWithSessionId ?? e.sessionId ?? r.viewedChatId,
      d = await this.deps.agent.start(
        s
          ? { kind: "extraction", url: n, windowId: r.windowId }
          : {
              kind: "tab",
              url: n,
              activate: e.setActive === !0,
              windowId: r.windowId,
              ...(a
                ? {
                    intoChat: a,
                    driver: { chatSessionId: a, agentSessionId: a },
                  }
                : {}),
            },
      );
    if (!d.ok) throw new Error(d.message);
    const c = d.runtime;
    return (
      e.visitType !== void 0 && (c.visitType = e.visitType),
      e.tabSurfaceIntent !== void 0 &&
        (c.tabSurfaceIntent = e.tabSurfaceIntent),
      e.onlyMarkdownNeeded !== void 0 &&
        (c.onlyMarkdownNeeded = e.onlyMarkdownNeeded),
      s && a && c.extractFor(a),
      c
    );
  }
  async close(e) {
    const r = this.runtimeOf(e),
      t =
        r?.isAIControlledTab && r.tabSurfaceIntent === "background-extraction";
    await this.deps.agent.end(e, t ? "extraction" : "page");
  }
  async finishExtraction(e, r) {
    const t = o.asPageId(e);
    if (!t) return;
    const i = this.runtimeOf(t);
    if (r === "completed" && i && !i.hasReleased && this.isShown(t)) {
      ((i.tabSurfaceIntent = void 0), i.followDrive());
      return;
    }
    await this.deps.agent.end(t, "extraction");
  }
  async closeChatPages(e) {
    const r = [...this.deps.runtimes()]
        .filter(({ tab: s }) => s.drivingChat === e)
        .map(({ pageId: s }) => s),
      t = o.asChatId(e),
      i = t ? l.pageIds(l.track(this.deps.data(), t)) : [];
    for (const s of new Set([...r, ...i])) await this.close(s);
  }
  async closeDeletedChat(e) {
    const r = o.asChatId(e);
    if (!r) throw new Error("The deleted Chat has an invalid session id.");
    const t = await this.send({ kind: "deleteChat", chatId: r });
    if (t)
      throw new Error(
        `The deleted Chat could not be removed from the layout: ${t}`,
      );
  }
  releaseDriven(e) {
    for (const { pageId: r, tab: t } of this.deps.runtimes()) {
      const i = t.isBrowserAgentControlledTab?.agentId;
      if (!i) continue;
      const s = this.owningSession(t);
      if (!(e.has(i) || (s !== null && (e.has(s.id) || e.has(s.fsBasePath)))))
        continue;
      const a = o.pageIsProtected(t.pageControl),
        d = l.holding(this.deps.data(), r) !== void 0,
        c = t.wasInitiatedByAgent && !a && !d;
      (t.removeCursor(), a || this.deps.agent.release(r), c && this.close(r));
    }
  }
  async takeOver(e, r, t) {
    const i = I(e),
      s = o.asPageId(r),
      n = s ? this.runtimeOf(s) : void 0;
    if (
      !i ||
      !s ||
      !n ||
      n.hasReleased ||
      this.controlTransitions.has(n) ||
      (t && !o.samePageControl(n.pageControl, t))
    )
      return !1;
    const a = await m.userRequests.answerForPage(s, "take-over", i);
    if (a !== void 0) return a;
    if (
      (t && !o.samePageControl(n.pageControl, t)) ||
      (n.pageControl.kind !== "agent" && n.pageControl.kind !== "paused")
    )
      return !1;
    const d = this.viewedSurface(i);
    if (!d) return !1;
    const c = this.isShownIn(i, s),
      f = this.owningSession(n);
    this.controlTransitions.add(n);
    let w = Promise.resolve();
    try {
      if (!(await n.pauseDriveForUserTakeover()) || !this.isCurrent(n))
        return !1;
      if ((f && (w = this.pauseSessionLineage(f)), await n.removeCursor(), c))
        return this.isShownIn(i, s);
      const g = this.viewedSurface(i);
      if (!g || g.model.entryId !== d.model.entryId) return !1;
      const p = d.context.chat;
      return p && (n.chatMembership ?? n.drivingChat) === p.chatId
        ? g.context.chat?.viewId !== p.viewId
          ? !1
          : (await this.revealFromChat(i, d.model.entryId, p.chatId, s)) &&
            this.isCurrent(n)
        : g.context.pageId === s;
    } finally {
      (await w, this.controlTransitions.delete(n));
    }
  }
  async handBack(e, r, t) {
    const i = I(e),
      s = o.asPageId(r),
      n = s ? this.runtimeOf(s) : void 0;
    if (
      !i ||
      !s ||
      !n ||
      n.hasReleased ||
      this.controlTransitions.has(n) ||
      (t && !o.samePageControl(n.pageControl, t))
    )
      return !1;
    const a = await m.userRequests.answerForPage(s, "return", i);
    if (a !== void 0) return a;
    if (
      (t && !o.samePageControl(n.pageControl, t)) ||
      n.pageControl.kind !== "user"
    )
      return !1;
    const d = n.pageControl.requestId,
      c = this.owningSession(n);
    this.controlTransitions.add(n);
    try {
      if (!(await n.agentOperations.waitForIdle())) return !1;
      const f = this.viewedSurface(i)?.context.chat;
      return (this.deps.presentation()[i]?.pageId !== s &&
        f &&
        (n.chatMembership ?? n.drivingChat) === f.chatId &&
        this.chatViewPresents(f.view, f.viewId, f.chatId, s) &&
        (await this.send({
          kind: "clearChatViewPresentation",
          args: { column: f.view, viewId: f.viewId },
        }))) ||
        !this.isCurrent(n) ||
        (!this.isShown(s) && !this.deps.hold(s)) ||
        !this.isCurrent(n) ||
        !(await n.resumeDriveAfterUserTakeover(d))
        ? !1
        : (c && (await this.resumeSessionLineage(c)), !0);
    } finally {
      this.controlTransitions.delete(n);
    }
  }
  async revealFromChat(e, r, t, i, s = {}) {
    const n = I(e),
      a = o.asPageId(i);
    if (!n || !a) return !1;
    if (this.deps.presentation()[n]?.pageId === a)
      return this.runtimeOf(a)?.hasReleased === !1;
    const d = y(this.deps.data(), n, t, r);
    if (!d) return !1;
    if (!this.isChatWorkingSetPage(a, t)) {
      const c = this.runtimeOf(a);
      if (
        !c ||
        c.hasReleased ||
        c.drivingChat !== t ||
        c.tabSurfaceIntent === "background-extraction"
      )
        return !1;
    }
    return (await this.reveal(a, n, { ...d, toggle: s.toggle })) !== void 0;
  }
  async show(e, r) {
    const t = I(r),
      i = o.asPageId(e);
    if (!t || !i) return !1;
    const s = this.runtimeOf(e);
    if (s) return (await this.showToUser(s, t)) !== void 0;
    const n = l.holding(this.deps.data(), i),
      a = n ? y(this.deps.data(), t, n) : void 0;
    return (await this.reveal(i, t, a)) !== void 0;
  }
  async presentForUserRequest(e, r, t) {
    const i = I(t),
      s = this.runtimeOf(e);
    if (
      !i ||
      !s ||
      s.hasReleased ||
      s.pageControl.kind !== "user" ||
      s.pageControl.requestId !== r
    )
      return !1;
    const n = await this.showToUser(s, i);
    return n ? (this.deps.focusWindow(n), !0) : !1;
  }
  async showCaptchaPage(e, r, t) {
    const i = I(t),
      s = this.runtimeOf(e);
    return !i ||
      !s ||
      s.hasReleased ||
      s.captcha.state.kind !== "waiting" ||
      s.captcha.state.challengeId !== r
      ? !1
      : (await this.showToUser(s, i)) !== void 0;
  }
  async awaitCaptchaHelp(e, r) {
    const { source: t, signal: i, expiresAt: s, invocation: n } = r;
    if (i?.aborted) return !1;
    const a = this.runtimeOf(e);
    if (!a || a.hasReleased) return !1;
    const d = n?.sessionId ?? a.chatSessionId,
      c = this.deps.sessions(),
      f = c?.get(d),
      w = f?.toMetadata().rootSessionId ?? f?.parentSessionId ?? d;
    if (
      f?.isBenchmarkRun ||
      c?.get(w)?.isBenchmarkRun ||
      m.userRequests.shouldSkipCaptchaHelp(d, w)
    )
      return !1;
    const h = a.captcha.start(i, s);
    if (!h) return !1;
    o.agentRateLimiter.incrementCaptchaQueue();
    const g = ({ isInPage: q }) => {
        q === !1 && a.captcha.resolve(h.challengeId, "confirmed");
      },
      p = () => a.captcha.reset();
    (a.on("tab:did-navigate", g), a.on("tab:did-release", p));
    try {
      (n &&
        o
          .createChatAction({
            profileId: this.deps.profileId,
            sessionId: n.sessionId,
            invocation: n,
            occurrence: h.challengeId,
            ref: a.id,
            action: { type: "captcha", tabId: a.id, url: a.url ?? "" },
          })
          .then(async (v) => {
            v &&
              (await h.result,
              await o.deleteChatAction({
                profileId: this.deps.profileId,
                handle: v,
              }));
          })
          .catch((v) => {
            o.layoutLogger.warn("[layout] CAPTCHA action persistence failed", {
              pageId: a.id,
              errorName: v instanceof Error ? v.name : "error",
            });
          }),
        await this.placeExtractionInChat(a, d),
        m.userRequests.requestCaptcha({
          tab: a,
          pages: this,
          profileId: this.deps.profileId,
          sessionId: d,
          toolCallId: n?.toolCallId,
          challengeId: h.challengeId,
          result: h.result,
        }));
      const q = await h.result;
      return (
        o.telemetryManager.sendEvent(
          "captcha_detected",
          { source: t, solved: q },
          "chatPages.ts at awaitCaptchaHelp",
          o.authManager.forProfile(this.deps.profileId).accountId ?? null,
        ),
        q
      );
    } finally {
      (a.captcha.resolve(h.challengeId, "skipped"),
        a.off("tab:did-navigate", g),
        a.off("tab:did-release", p),
        o.agentRateLimiter.decrementCaptchaQueue());
    }
  }
  async placeExtractionInChat(e, r) {
    const t = o.asPageId(e.id);
    if (
      !t ||
      e.tabSurfaceIntent !== "background-extraction" ||
      l.isPagePlaced(this.deps.data(), t)
    )
      return;
    const i = this.deps.sessions()?.get(r),
      s = o.asChatId(i?.toMetadata().rootSessionId ?? i?.parentSessionId ?? r);
    s &&
      (await this.send({
        kind: "addPageToChat",
        chatId: s,
        pageId: t,
        args: { slotId: C.parse(l.SlotId, t) },
      }));
  }
  async showToUser(e, r) {
    const t = o.asPageId(e.id);
    if (!t) return;
    if (this.isShownIn(r, t) && !e.hasReleased) return r;
    const i = e.chatMembership ?? e.drivingChat ?? e.chatSessionId,
      s = i ? y(this.deps.data(), r, i) : void 0;
    return this.reveal(t, r, s);
  }
  async reveal(e, r, t) {
    const i = this.deps.data(),
      s = S.presentCommandFor(i, e, r, t ? { from: t } : {});
    if (s?.kind !== "revealPage") return;
    const n = k.pageRevealTarget(i, s.args);
    if (!(!n.ok || (await this.send(s)))) return n.target.windowId;
  }
  async pauseSessionLineage(e) {
    const r = [e, ...this.ancestorsOf(e)];
    (await Promise.all(r.map((t) => t.pauseGeneratingSelf())),
      e.emitSessionMetadataUpdated());
  }
  async resumeSessionLineage(e) {
    const r = [e, ...this.ancestorsOf(e)].filter(
      (t) => !this.sessionOwnsTakenOverPage(t),
    );
    (await Promise.all(r.map((t) => t.resumeGeneratingSelf())),
      e.emitSessionMetadataUpdated());
  }
  ancestorsOf(e) {
    const r = [],
      t = this.deps.sessions();
    let i = e.parentSessionId ? t?.get(e.parentSessionId) : void 0;
    for (; i && r.length < R; )
      (r.push(i), (i = i.parentSessionId ? t?.get(i.parentSessionId) : void 0));
    return r;
  }
  sessionOwnsTakenOverPage(e) {
    for (const { tab: r } of this.deps.runtimes()) {
      if (!o.pageIsProtected(r.pageControl)) continue;
      const t = this.owningSession(r);
      if (t) {
        for (const i of [t, ...this.ancestorsOf(t)])
          if (i.id === e.id || i.fsBasePath === e.fsBasePath) return !0;
      }
    }
    return !1;
  }
  chatViewPresents(e, r, t, i) {
    const s = this.deps.data(),
      n = l.entry$1(s, e.entryId)?.node,
      a = n ? l.chatColumn(n, e.kind) : void 0,
      d = a ? l.view(a, r) : void 0;
    if (!d || d.layout.kind === "root-full") return !1;
    const c = l.slot(l.track(s, t), d.layout.presentedSlotId);
    return c !== void 0 && l.pageIds([c]).includes(i);
  }
  runtimeOf(e) {
    return this.deps.agent.runtimeOf(e);
  }
  isCurrent(e) {
    return !e.hasReleased && this.runtimeOf(e.id) === e;
  }
  isShown(e) {
    const r = this.deps.data();
    return (
      o.windowPresenting(
        r,
        r.windows.map((t) => t.id),
        e,
        this.deps.presentation(),
      ) !== void 0
    );
  }
  isShownIn(e, r) {
    return (
      o.windowPresenting(this.deps.data(), [e], r, this.deps.presentation()) !==
      void 0
    );
  }
  viewedSurface(e) {
    const r = o.windowLayoutModel(this.deps.data(), e);
    return r ? { model: r, context: o.viewedSurfaceContextOf(r) } : void 0;
  }
  async send(e) {
    const r = await this.deps.dispatch(e);
    if (!r.ok)
      return (
        o.layoutLogger.warn(
          "[layout] a chat asked for something the layout refused",
          { kind: e.kind, reason: r.reason },
        ),
        r.reason
      );
  }
}
const R = 16;
function y(u, e, r, t) {
  const i = o.windowLayoutModel(u, e);
  if (!i || (t !== void 0 && i.entryId !== t)) return;
  const s = o.viewedSurfaceContextOf(i).chat;
  if (s?.chatId === r) return { column: s.view, viewId: s.viewId };
}
function I(u) {
  const e = C.safeParse(l.WindowId, u);
  return e.success ? e.output : void 0;
}
function A(u) {
  if (!u || u.size === 0) return { kind: "none" };
  if (u.size > 1) return { kind: "ambiguous" };
  for (const e of u) return { kind: "unique", chatSessionId: e };
  return { kind: "none" };
}
function M(u, e, r) {
  const t = r?.isBrowserAgentControlledTab?.agentId;
  if (e.kind === "ambiguous") return { kind: "generic-excluded" };
  if (e.kind === "unique") {
    const { chatSessionId: i } = e;
    return t
      ? { kind: "chat-member", chatSessionId: i, ownerAgentId: t }
      : { kind: "chat-member", chatSessionId: i };
  }
  return u.url.startsWith("orbitra://")
    ? { kind: "generic-excluded" }
    : r?.isAIControlledTab && !r.isBrowserAgentControlledTab
      ? { kind: "generic-excluded" }
      : t
        ? { kind: "ordinary", ownerAgentId: t }
        : { kind: "ordinary" };
}
exports.ChatPages = O;
