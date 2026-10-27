"use strict";
(function () {
  try {
    var a =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    a.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var a =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new a.Error().stack;
    e &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[e] = "bf1ebed0-02c8-4113-88d3-96472f3ac286"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-bf1ebed0-02c8-4113-88d3-96472f3ac286"));
  })();
} catch {}
const y = require("node:crypto"),
  q = require("node:fs/promises"),
  f = require("../main-app.js"),
  S = require("./savedCertificateBlocklist-BUtmL3xA.js"),
  T = require("valibot");
function A(a) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (a) {
    for (const t in a)
      if (t !== "default") {
        const i = Object.getOwnPropertyDescriptor(a, t);
        Object.defineProperty(
          e,
          t,
          i.get ? i : { enumerable: !0, get: () => a[t] },
        );
      }
  }
  return ((e.default = a), Object.freeze(e));
}
const n = A(T);
function C(a) {
  return a
    .replace(/!?\[([^[\]]*)\]\([^()]*\)/g, "$1")
    .replace(/\*\*|__|`/g, "");
}
const R = `
  const roots = [document];
  for (let index = 0; index < roots.length; index++) {
    for (const element of roots[index].querySelectorAll('*')) {
      if (element.shadowRoot) roots.push(element.shadowRoot);
    }
  }
  const all = selector => roots.flatMap(root => [...root.querySelectorAll(selector)]);
`,
  U = `(() => {
  ${R}
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
  if (!setter) return false;
  const clear = input => setter.call(input, '');
  const sensitive = all('input[type="password"],input[autocomplete~="one-time-code"]');
  for (const input of sensitive) clear(input);
  return sensitive.every(input => input.value === '');
})()`,
  E = { sessionId: n.string(), requestId: n.string() },
  k = n.pipe(n.string(), n.trim(), n.minLength(1), n.maxLength(1e4)),
  I = n.union([k, n.pipe(n.array(k), n.minLength(1))]);
function P(a, e) {
  return typeof a == "string"
    ? !e.multiSelect
    : !!e.multiSelect &&
        new Set(a).size === a.length &&
        a.filter((t) => !e.options.includes(t)).length <= 1;
}
function Q(a, e, t, i) {
  let s;
  if (t) s = { ...a, purpose: "question", questions: e };
  else {
    const o = e[0];
    ((s = { ...a, purpose: "question", reason: o.prompt, options: o.options }),
      o.placeholder && (s.placeholder = o.placeholder),
      o.multiSelect && (s.multiSelect = !0));
  }
  return (i.length && ((s.pages = i), (s.pageIds = i.map((o) => o.id))), s);
}
const D = n.object({
  ...E,
  answer: n.variant("action", [
    n.object({ action: n.literal("reply"), reply: I }),
    n.object({
      action: n.literal("reply-all"),
      replies: n.pipe(n.array(n.union([I, n.null()])), n.minLength(2)),
    }),
    n.object({
      action: n.literal("take-over"),
      pageId: n.optional(n.pipe(n.string(), n.minLength(1), n.maxLength(256))),
    }),
    n.object({ action: n.literal("return") }),
    n.object({ action: n.literal("failed") }),
    n.object({ action: n.literal("cancel") }),
    n.object({ action: n.literal("skip") }),
  ]),
});
function b(a, e) {
  return a.kind === "page"
    ? a.view.pageId === e
    : a.kind === "question"
      ? a.tabs.some(({ tab: t }) => t.id === e)
      : !1;
}
function m(a) {
  const e = new URL(a.url);
  return {
    id: a.id,
    title: a.title.trim() || e.host || "Page",
    origin: e.origin === "null" ? "" : e.origin,
    faviconUrl: a.faviconUrl,
    ...(a.screenshotPath ? { screenshotPath: a.screenshotPath } : {}),
    ...(a.screenshotUpdatedAt != null
      ? { screenshotUpdatedAt: a.screenshotUpdatedAt }
      : {}),
  };
}
class L {
  pending = new Map();
  scriptedQuestionResponders = new Map();
  skippedCaptchaSessions = new Set();
  skipCaptchaHelpForSession(e) {
    if (this.skippedCaptchaSessions.has(e))
      throw new Error("This session already skips CAPTCHA help.");
    return (
      this.skippedCaptchaSessions.add(e),
      () => this.skippedCaptchaSessions.delete(e)
    );
  }
  shouldSkipCaptchaHelp(e, t) {
    return (
      this.skippedCaptchaSessions.has(e) || this.skippedCaptchaSessions.has(t)
    );
  }
  setScriptedQuestionResponder(e, t) {
    if (this.scriptedQuestionResponders.has(e))
      throw new Error(
        "This session already has a scripted question responder.",
      );
    return (
      this.scriptedQuestionResponders.set(e, t),
      () => {
        this.scriptedQuestionResponders.get(e) === t &&
          this.scriptedQuestionResponders.delete(e);
      }
    );
  }
  publish(e) {
    const t = [...this.pending.values()]
      .filter((i) => i.view.profileId === e)
      .map((i) => i.view);
    f.eventManager.publishIPCState("chat.userRequests", e, { requests: t });
  }
  hasPending(e, t, i) {
    const s = this.pending.get(i);
    return s?.view.profileId === e && s.view.sessionId === t;
  }
  hasPendingQuestion(e, t) {
    return [...this.pending.values()].some(
      (i) =>
        i.kind === "question" &&
        i.view.profileId === e &&
        (i.view.sessionId === t || i.view.rootSessionId === t),
    );
  }
  async skipPendingQuestions(e, t) {
    const i = [...this.pending.values()].filter(
      (s) =>
        s.kind === "question" &&
        s.view.profileId === e &&
        (s.view.sessionId === t || s.view.rootSessionId === t),
    );
    return (
      await Promise.all(
        i.map(
          (s) =>
            s.finishingTask ?? this.finishQuestion(s, { status: "skipped" }),
        ),
      ),
      i.length > 0
    );
  }
  async requestQuestion(e) {
    if (e.signal.aborted) return { status: "cancelled" };
    const t = this.scriptedQuestionResponders.get(e.session.id);
    if (t) return t(e.questions, e.signal, !!e.tabs?.length);
    if (e.session.isBenchmarkRun || e.session.overrideFeedback)
      return e.grouped
        ? {
            status: "answered",
            replies: e.questions.map((l) =>
              l.multiSelect ? ["[auto-continue]"] : "[auto-continue]",
            ),
          }
        : {
            status: "answered",
            reply: e.questions[0].multiSelect
              ? ["[auto-continue]"]
              : "[auto-continue]",
          };
    const i = y.randomUUID(),
      s = e.session.getUserProfile().id,
      o =
        e.session.toMetadata?.().rootSessionId ??
        e.session.parentSessionId ??
        e.session.id,
      r = e.tabs ?? [];
    for (const { tab: l } of r) {
      if ([...this.pending.values()].some((u) => b(u, l.id)))
        throw new Error("This page already has a pending request.");
      if (
        l.pageControl.kind !== "agent" ||
        l.pageControl.agentId !== e.session.id
      )
        throw new Error("Attach only pages controlled by this agent.");
      if (l.getAuthFillTarget().getProfile().id !== s)
        throw new Error("The page belongs to another profile.");
    }
    for (const { tab: l } of r) {
      if (e.signal.aborted) return { status: "cancelled" };
      try {
        await l.captureAndSaveScreenshot("thumbnail-refresh");
      } catch {}
    }
    const c = r.map(({ tab: l }) => m(l)),
      h = [];
    try {
      for (const { tab: l } of r) {
        if (e.signal.aborted) break;
        if ((await l.pauseDriveForUserTakeover(i)) !== e.session.id)
          throw new Error(
            "The page changed control before the question started.",
          );
        h.push(l);
      }
      if (e.signal.aborted)
        return (
          await Promise.all(h.map((u) => u.resumeDriveAfterUserTakeover(i)))
        ).every(Boolean)
          ? { status: "cancelled" }
          : {
              status: "failed",
              reason: "An attached page could not be returned to the agent.",
            };
    } catch (l) {
      throw (
        await Promise.all(h.map((v) => v.resumeDriveAfterUserTakeover(i)))
      ).every(Boolean)
        ? l
        : new Error("An attached page could not be returned to the agent.");
    }
    const d = new Promise((l) => {
      const u = () => {
          this.finishQuestion(v, { status: "cancelled" });
        },
        v = {
          kind: "question",
          tabs: r,
          resolve: l,
          removeAbort: () => e.signal.removeEventListener("abort", u),
          view: Q(
            {
              id: i,
              profileId: s,
              sessionId: e.session.id,
              rootSessionId: o,
              toolCallId: e.toolCallId,
              subToolId: e.subToolId,
            },
            e.questions,
            e.grouped,
            c,
          ),
        };
      (this.pending.set(i, v),
        e.signal.addEventListener("abort", u, { once: !0 }),
        this.publish(s));
      try {
        const p = f.WindowManager.getInstance();
        e.notificationOwner !== "chat-actions" &&
          e.session.notificationsEnabled !== !1 &&
          !p.isSessionChatFocused(o, s) &&
          !p.isSessionChatFocused(e.session.id, s) &&
          f.notificationManager
            .showChatStatusPopup({
              id: i,
              profileId: s,
              sessionId: o,
              agentId: e.session.id === o ? void 0 : e.session.id,
              preferChat: !0,
              kind: "question",
              title: e.session.title || "Question from Orbitra",
              body: C(e.questions[0].prompt),
            })
            .then(() => {
              this.pending.get(i) !== v &&
                f.notificationManager.dismissPopup(i);
            })
            .catch((g) => {
              f.logger.warn("Could not show question notification", {
                requestId: i,
                error: g,
              });
            });
      } catch (p) {
        f.logger.warn("Could not check question notification visibility", {
          requestId: i,
          error: p,
        });
      }
      e.signal.aborted && u();
    });
    try {
      await e.onPending?.(c);
    } catch (l) {
      const u = this.pending.get(i);
      throw (
        u?.kind === "question" &&
          (await this.finishQuestion(u, { status: "cancelled" })),
        l
      );
    }
    return d;
  }
  finishQuestion(e, t) {
    return this.pending.get(e.view.id) !== e || e.finishingTask
      ? Promise.resolve(!1)
      : ((e.finishingTask = this.completeQuestion(e, t)), e.finishingTask);
  }
  async completeQuestion(e, t) {
    let i = !0;
    for (const { tab: s } of e.tabs)
      try {
        s.pageControl.kind === "user" && s.pageControl.requestId === e.view.id
          ? (i = !!(await s.resumeDriveAfterUserTakeover(e.view.id)) && i)
          : (i = !1);
      } catch {
        i = !1;
      }
    return (
      this.pending.delete(e.view.id),
      f.notificationManager.dismissPopup(e.view.id),
      e.removeAbort(),
      this.publish(e.view.profileId),
      e.resolve(
        i
          ? t
          : {
              status: "failed",
              reason: "An attached page could not be returned to the agent.",
            },
      ),
      !0
    );
  }
  update(e, t) {
    this.pending.get(e.view.id) === e &&
      ((e.view = { ...e.view, stage: t }), this.publish(e.view.profileId));
  }
  async requestPage(e) {
    const { tab: t, session: i, pages: s, purpose: o, signal: r } = e;
    if (r.aborted) return { status: "cancelled" };
    if ([...this.pending.values()].some((p) => b(p, t.id)))
      throw new Error("This page already has a pending request.");
    if (t.pageControl.kind !== "agent" || t.pageControl.agentId !== i.id)
      throw new Error("Request control of your own page only.");
    if (t.getAuthFillTarget().getProfile().id !== i.getUserProfile().id)
      throw new Error("The page belongs to another profile.");
    const h = new URL(t.url).origin;
    if (o === "sign-in" && !h.startsWith("https://"))
      throw new Error("Private sign-in requires an HTTPS page.");
    const d = y.randomUUID();
    if (
      !(o === "sign-in"
        ? t.beginPrivateSignIn(d)
        : await t.pauseDriveForUserTakeover(d))
    )
      throw new Error("The page changed control before the request started.");
    o === "sign-in" && t.captcha.reset();
    const u = i.getUserProfile().id,
      v = new Promise((p) => {
        const g = () => {
            this.enqueue(w, () => this.finish(w, "cancelled"));
          },
          w = {
            kind: "page",
            tab: t,
            pages: s,
            resolve: p,
            operation: Promise.resolve(),
            removeAbort: () => r.removeEventListener("abort", g),
            view: {
              id: d,
              sessionId: i.id,
              toolCallId: e.toolCallId,
              profileId: u,
              pageId: t.id,
              origin: h,
              reason: e.reason,
              purpose: o,
              stage: { kind: "waiting" },
            },
          };
        if (
          (this.pending.set(d, w),
          r.addEventListener("abort", g, { once: !0 }),
          this.publish(u),
          r.aborted)
        ) {
          g();
          return;
        }
        o === "sign-in" &&
          this.enqueue(w, async () => (await this.prepareSignIn(w), !0));
      });
    try {
      this.pending.has(d) && (await e.onPending?.());
    } catch (p) {
      const g = this.pending.get(d);
      throw (
        g?.kind === "page" &&
          (await this.enqueue(g, () => this.finish(g, "cancelled"))),
        p
      );
    }
    return v;
  }
  requestCaptcha(e) {
    const {
        tab: t,
        pages: i,
        profileId: s,
        sessionId: o,
        toolCallId: r,
        challengeId: c,
        result: h,
      } = e,
      d = URL.canParse(t.url) ? new URL(t.url) : void 0,
      l = {
        kind: "captcha",
        tab: t,
        pages: i,
        challengeId: c,
        view: {
          id: c,
          sessionId: o,
          toolCallId: r,
          profileId: s,
          pageId: t.id,
          origin: d?.origin ?? "",
          reason:
            "Solve the CAPTCHA so your companion can keep reading this page.",
          purpose: "captcha",
          stage: { kind: "user" },
          page: d ? m(t) : void 0,
        },
      };
    (this.pending.set(c, l),
      this.publish(s),
      h.finally(() => {
        this.pending.get(c) === l && (this.pending.delete(c), this.publish(s));
      }));
  }
  async answerCaptcha({ tab: e, pages: t, challengeId: i }, s, o) {
    switch (s.action) {
      case "take-over":
        return t.showCaptchaPage(e.id, i, o);
      case "return":
        return e.captcha.resolve(i, "confirmed");
      case "skip":
      case "cancel":
        return e.captcha.resolve(i, "skipped");
      default:
        return !1;
    }
  }
  async prepareSignIn(e) {
    try {
      const t = await this.reload(e);
      if (
        (f.logger.info("[private-sign-in] protected reload finished", {
          pageId: e.tab.id,
          requestId: e.view.id,
          ok: t.ok,
          error: t.ok ? void 0 : t.error,
          hasWebContents: e.tab.layer?.hasWebContents(),
        }),
        !t.ok)
      )
        throw new Error("Page unavailable");
      if (!this.pending.has(e.view.id)) return;
      if (new URL(e.tab.url).origin !== e.view.origin) {
        await this.finish(
          e,
          "failed",
          "The sign-in site changed during preparation.",
        );
        return;
      }
      let i;
      try {
        i = (
          await e.tab.getViewportBase64WithMetadata(void 0, 1, {
            maxDimension: 640,
            maxSizeBytes: 131072,
            includeAgentCursor: !1,
          })
        )?.base64;
      } catch {}
      if (!i && e.tab.screenshotPath)
        try {
          const s = f.resolveTabScreenshotFilePath(e.tab.screenshotPath);
          if (s) {
            const o = S.mimeFromExt(s),
              r = await q.readFile(s);
            o &&
              r.length > 0 &&
              (i = `data:${o};base64,${r.toString("base64")}`);
          }
        } catch {}
      if (!this.pending.has(e.view.id)) return;
      if (!e.tab.takeOverPrivateSignIn(e.view.id)) {
        await this.finish(
          e,
          "failed",
          "The page changed control before sign-in began.",
        );
        return;
      }
      ((e.view = {
        ...e.view,
        page: { ...m(e.tab), screenshotPath: i, screenshotUpdatedAt: void 0 },
      }),
        this.update(e, { kind: "user" }));
    } catch (t) {
      (f.logger.warn("[private-sign-in] preparation failed", {
        pageId: e.tab.id,
        requestId: e.view.id,
        message: t instanceof Error ? t.message : String(t),
      }),
        this.pending.has(e.view.id) &&
          (await this.finish(
            e,
            "failed",
            "Private sign-in could not prepare this page.",
          )));
    }
  }
  enqueue(e, t) {
    const i = e.operation.then(t, t);
    return (
      (e.operation = i.then(
        () => {},
        () => {},
      )),
      i.catch(() => !1)
    );
  }
  async answer(e, t, i, s, o) {
    const r = this.pending.get(i);
    if (!r || r.view.profileId !== e || r.view.sessionId !== t) return !1;
    if (r.kind === "captcha") return this.answerCaptcha(r, s, o);
    if (r.kind === "question") {
      if (s.action === "take-over") {
        if (!r.tabs.length) return !1;
        const c = "pageId" in s ? s.pageId : void 0;
        if (c && !r.tabs.some(({ tab: d }) => d.id === c)) return !1;
        const h = [...r.tabs].reverse();
        if (c) {
          const d = h.findIndex(({ tab: u }) => u.id === c),
            [l] = h.splice(d, 1);
          h.push(l);
        }
        for (const { tab: d, pages: l } of h)
          if (
            this.pending.get(i) !== r ||
            !(await l.presentForUserRequest(d.id, i, o))
          )
            return !1;
        return this.pending.get(i) === r;
      }
      return s.action === "cancel"
        ? this.finishQuestion(r, { status: "cancelled" })
        : s.action === "skip"
          ? this.finishQuestion(r, { status: "skipped" })
          : s.action === "return" && r.tabs.length
            ? this.finishQuestion(r, { status: "returned" })
            : r.view.questions
              ? s.action !== "reply-all" ||
                s.replies.length !== r.view.questions.length ||
                !s.replies.some((c) => c !== null) ||
                s.replies.some(
                  (c, h) => c !== null && !P(c, r.view.questions[h]),
                )
                ? !1
                : this.finishQuestion(r, {
                    status: "answered",
                    replies: s.replies,
                  })
              : s.action !== "reply" ||
                  !P(s.reply, {
                    prompt: r.view.reason,
                    options: r.view.options,
                    multiSelect: r.view.multiSelect,
                  })
                ? !1
                : this.finishQuestion(r, {
                    status: "answered",
                    reply: s.reply,
                  });
    }
    return s.action === "reply" ||
      s.action === "reply-all" ||
      s.action === "skip"
      ? !1
      : this.enqueue(r, () => this.applyAnswer(e, t, i, s, o));
  }
  async answerForPage(e, t, i) {
    const s = [...this.pending.values()].find((r) => b(r, e));
    if (!s) return;
    const o = t === "return" ? { action: "return" } : { action: "take-over" };
    return this.answer(s.view.profileId, s.view.sessionId, s.view.id, o, i);
  }
  async applyAnswer(e, t, i, s, o) {
    const r = this.pending.get(i);
    if (
      !r ||
      r.kind !== "page" ||
      r.view.profileId !== e ||
      r.view.sessionId !== t
    )
      return !1;
    const c = r.tab.pageControl;
    if ((c.kind !== "user" && c.kind !== "sign-in") || c.requestId !== i)
      return !1;
    switch (s.action) {
      case "cancel":
        return this.finish(r, "cancelled");
      case "take-over":
        return (c.kind === "sign-in" &&
          (!(await this.clear(r)) || !r.tab.takeOverPrivateSignIn(i))) ||
          (r.tab.captcha.reset(),
          !(await r.pages.presentForUserRequest(r.tab.id, i, o)))
          ? !1
          : (this.update(r, { kind: "user" }), !0);
      case "return":
        return r.view.stage.kind !== "user" ? !1 : this.finish(r, "returned");
      case "failed":
        return r.view.purpose !== "sign-in" || r.view.stage.kind !== "user"
          ? !1
          : this.finish(
              r,
              "failed",
              "The user could not complete sign-in on the page.",
            );
    }
  }
  async reload(e) {
    try {
      const t = await e.tab.layer.waitForLoadResult(15e3);
      return t !== "ready"
        ? (f.logger.warn(
            "[private-sign-in] page did not settle before protected reload",
            { pageId: e.tab.id, requestId: e.view.id, initialLoad: t },
          ),
          { ok: !1, error: "unavailable" })
        : await f.withTimeout(
            e.tab.layer.loadURLReplacingPendingNavigation(e.tab.url),
            2e4,
            "Private page navigation timed out",
          );
    } catch (t) {
      return (
        f.logger.warn("[private-sign-in] protected reload rejected", {
          pageId: e.tab.id,
          requestId: e.view.id,
          message: t instanceof Error ? t.message : String(t),
        }),
        f.safeWithLayerWebContents(e.tab.layer, (i) => i.stop()),
        { ok: !1, error: "unavailable" }
      );
    }
  }
  async execute(e, t) {
    try {
      return await f.withTimeout(
        f.safeWithLayerWebContentsAsync(e.tab.layer, (i) =>
          i.mainFrame.executeJavaScript(t, !0),
        ),
        1e4,
        "Private page operation timed out",
      );
    } catch {
      return { ok: !1, error: "unavailable" };
    }
  }
  async clear(e) {
    const t = await this.execute(e, U);
    return t.ok && t.value === !0;
  }
  async finish(e, t, i) {
    if (this.pending.get(e.view.id) !== e) return !1;
    const s =
      e.view.stage.kind === "user" &&
      (t === "returned" || t === "failed" || t === "cancelled");
    if (e.view.purpose === "sign-in" && !(await this.clear(e)) && !s)
      return this.failAfterDiscard(
        e,
        "The protected document could not be cleared.",
      );
    if (e.view.purpose === "sign-in" && !s)
      try {
        if (!(await this.reload(e)).ok || !(await this.clear(e)))
          throw new Error("Page unavailable");
      } catch {
        return this.failAfterDiscard(
          e,
          "The protected document could not be cleared.",
        );
      }
    if (this.pending.get(e.view.id) !== e) return !1;
    const o = e.tab.pageControl;
    return (o.kind !== "sign-in" && o.kind !== "user") ||
      o.requestId !== e.view.id
      ? s
        ? this.failPreservingPage(
            e,
            "The page changed control before sign-in ended.",
          )
        : this.failAfterDiscard(
            e,
            "The page changed control before sign-in ended.",
          )
      : (
            o.kind === "sign-in"
              ? e.tab.finishPrivateSignIn(e.view.id)
              : !!(await e.tab.resumeDriveAfterUserTakeover(e.view.id))
          )
        ? (this.pending.delete(e.view.id),
          e.removeAbort(),
          this.publish(e.view.profileId),
          e.resolve(
            t === "failed"
              ? { status: t, reason: i ?? "Sign-in could not be completed." }
              : { status: t },
          ),
          !0)
        : s
          ? this.failPreservingPage(
              e,
              "The page could not be returned to the agent.",
            )
          : this.failAfterDiscard(
              e,
              "The page could not be returned to the agent.",
            );
  }
  failPreservingPage(e, t) {
    return this.pending.get(e.view.id) !== e
      ? !1
      : (this.pending.delete(e.view.id),
        e.removeAbort(),
        this.publish(e.view.profileId),
        e.resolve({ status: "failed", reason: t }),
        !0);
  }
  async failAfterDiscard(e, t) {
    if (this.pending.get(e.view.id) !== e) return !1;
    const i = e.tab.discardPrivateSignInDocument(e.view.id),
      s = e.tab.pageControl;
    let o;
    return (
      i
        ? s.kind === "sign-in"
          ? (o = e.tab.finishPrivateSignIn(e.view.id))
          : s.kind === "user"
            ? (o = !!(await e.tab.resumeDriveAfterUserTakeover(e.view.id)))
            : (o = !1)
        : (o = !1),
      this.pending.delete(e.view.id),
      e.removeAbort(),
      this.publish(e.view.profileId),
      e.resolve({
        status: "failed",
        reason: o
          ? `${t} The page was reset and returned to the agent.`
          : `${t} The page could not be reset safely and remains unavailable to the agent; close it before retrying.`,
      }),
      !0
    );
  }
  pageClosed(e) {
    for (const t of this.pending.values()) {
      if (t.kind === "question") {
        if (!t.tabs.some(({ tab: i }) => i.id === e)) continue;
        ((t.tabs = t.tabs.filter(({ tab: i }) => i.id !== e)),
          (t.view = {
            ...t.view,
            pageIds: t.tabs.map(({ tab: i }) => i.id),
            pages: t.view.pages?.filter((i) => i.id !== e),
          }),
          this.publish(t.view.profileId));
        continue;
      }
      t.kind !== "page" ||
        t.view.pageId !== e ||
        (this.pending.delete(t.view.id),
        t.removeAbort(),
        this.publish(t.view.profileId),
        t.resolve({ status: "page-closed" }));
    }
  }
}
const F = new L();
exports.userRequestAnswerSchema = D;
exports.userRequests = F;
