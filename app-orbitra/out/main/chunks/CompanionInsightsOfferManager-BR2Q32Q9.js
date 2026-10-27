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
      t = new a.Error().stack;
    t &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[t] = "3f546298-8b83-441e-ba61-be36dd372e76"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-3f546298-8b83-441e-ba61-be36dd372e76"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const r = require("../main-app.js");
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
const n = {
    offerId: "companion_insights_v1",
    credits: 200,
    chatTitle: "Companion Insights Offer",
  },
  b = `I'd like your help with a thorough self-assessment of how I use Orbitra — the team is using these to make the product better, so put in real effort and be as detailed and specific as you can.

Draw on everything you have access to: our full chat history, your memories about me, and any activity context. The more concrete and specific you can be, the more useful this is. Cover all of the following:

**Who I am**
- My role / what I work as (job title, seniority, kind of team)
- My industry and what kind of company / project I'm part of
- My company / organization name, website or domain, and company LinkedIn URL if known. Do not include personal LinkedIn URLs.
- The kinds of people I collaborate with (anonymized roles, never names)
- How I like to communicate with you, my AI fluency, my working pattern

**What I do**
- My recurring workflows — what I do day-to-day and week-to-week
- Goals I'm pushing toward, pain points I keep hitting
- Which tools, apps, and integrations I rely on (categories, not specific URLs)

**My relationship with Orbitra**
- What I use Orbitra for specifically — top use cases, repeated patterns
- Orbitra features I clearly use a lot — and ones I'd benefit from but don't seem to use
- **Where Orbitra has worked well for me** — concrete moments where it really helped, wins I've had, things it does that I rely on
- **Where Orbitra has fallen short** — places it's been less useful, frustrating, or where I've had to work around it
- Anything else worth knowing

Then call the \`submit_user_usage_summary\` tool exactly once.

The most important output is the open-ended writeup and concrete lists: \`rawSummary\`, \`useCases\`, \`orbitraWins\`, \`orbitraShortcomings\`, \`workflows\`, \`goals\`, and \`painPoints\`. Make these specific, nuanced, and evidence-based.

Treat enum/classification fields as rough tags, not the main answer. Only fill a classification field when it is strongly supported by repeated evidence. Leave it blank or mark confidence low/unknown when the user is a generalist, when multiple labels fit, or when you are inferring from a single recent task. Do not force-fit someone into a narrow workflow category just because one activity was concrete.

If the user appears to be a Orbitra employee/founder/team member, set \`audienceType\` to \`internal_team\`, do not treat their usage as external customer case-study evidence, and keep GTM/team-expansion labels conservative.

Set per-field confidence in \`confidence\` so the team knows what to trust.

**Privacy:** Company names, company domains/websites, company LinkedIn URLs, and job titles are fine when relevant. Do not include personal names, emails, phone numbers, or personal profile URLs.

You don't need to ask me anything — just do your best with what you already know about me. This is a hidden system-initiated offer chat, not a visible conversation.`;
class k extends r.BaseManager {
  accepting = new Set();
  initialize(t) {
    (t.layers.handleInvoke(
      "offers:companion-insights:eligibility",
      async () =>
        await this.fetchEligibility(
          r.authManager.forProfile(t.layers.getProfileId()).accountId ?? null,
        ),
    ),
      t.layers.handleInvoke(
        "offers:companion-insights:accept",
        async () => await this.accept(t),
      ),
      t.layers.handleInvoke(
        "offers:companion-insights:dismiss",
        async () =>
          await this.dismiss(
            r.authManager.forProfile(t.layers.getProfileId()).accountId ?? null,
          ),
      ),
      r.logger.info("[CompanionInsightsOffer] window listeners registered"));
  }
  reportFailure(t, e, i) {
    r.authFetch(
      `${r.config.app.apiUrl}/api/account/offers/companion-insights/report-failure`,
      {
        accountId: t,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stage: e, reason: i.slice(0, 200) }),
      },
    ).catch((o) => {
      r.logger.warn(
        `[CompanionInsightsOffer] report-failure swallow: ${o instanceof Error ? o.message : "unknown"}`,
      );
    });
  }
  async claimCredits(t) {
    try {
      const e = await r.authFetch(
        `${r.config.app.apiUrl}/api/account/offers/companion-insights/claim`,
        {
          accountId: t,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: "{}",
        },
      );
      if (!e.ok) {
        const o = await e.text().catch(() => e.statusText);
        return (
          r.logger.warn(
            `[CompanionInsightsOffer] claim ${e.status}: ${o.slice(0, 200)}`,
          ),
          { ok: !1, error: `http_${e.status}` }
        );
      }
      const i = await e.json();
      return i.ok
        ? { ok: !0, creditsGranted: i.creditsGranted }
        : { ok: !1, error: i.reason };
    } catch (e) {
      const i = e instanceof Error ? e.message : "unknown error";
      return (
        r.logger.warn(`[CompanionInsightsOffer] claim threw: ${i}`),
        { ok: !1, error: i }
      );
    }
  }
  async fetchEligibility(t) {
    try {
      const e = await r.authFetch(
        `${r.config.app.apiUrl}/api/account/offers/companion-insights/eligibility`,
        { accountId: t, method: "GET" },
      );
      if (!e.ok) {
        const o = await e.text().catch(() => e.statusText);
        return (
          r.logger.warn(
            `[CompanionInsightsOffer] eligibility ${e.status}: ${o.slice(0, 200)}`,
          ),
          {
            shouldShow: !1,
            offerId: n.offerId,
            credits: n.credits,
            error: `http_${e.status}`,
          }
        );
      }
      const i = await e.json();
      return i.shouldShow
        ? { ...i, shouldShow: !0, error: null }
        : { ...i, shouldShow: !1, error: null };
    } catch (e) {
      const i = e instanceof Error ? e.message : "unknown error";
      return (
        r.logger.warn(`[CompanionInsightsOffer] eligibility threw: ${i}`),
        { shouldShow: !1, offerId: n.offerId, credits: n.credits, error: i }
      );
    }
  }
  async accept(t) {
    const e =
      r.authManager.forProfile(t.layers.getProfileId()).accountId ?? null;
    if (this.accepting.has(e)) return { ok: !1, error: "already_in_flight" };
    if (!t.layers.getWindow()) return { ok: !1, error: "window_closed" };
    const { chatService: i, chatSessionManager: o, layers: h } = t,
      p = h.getProfileId();
    this.accepting.add(e);
    let g = !1,
      m = !1,
      u = "eligibility";
    try {
      if (!(await this.fetchEligibility(e)).shouldShow)
        return { ok: !1, error: "no_longer_eligible" };
      if (!h.getWindow()) return { ok: !1, error: "window_closed" };
      u = "companion_lookup";
      const l = o.companionManager.getCurrentSidebarCompanion().id;
      u = "claim";
      const d = await this.claimCredits(e);
      if (!d.ok) return { ok: !1, error: d.error ?? "claim_failed" };
      ((g = !0),
        r.authManager
          .forAccount(e)
          .publishEvent("ipc:signal", {
            signal: {
              domain: "offers",
              type: "companionInsightsClaimed",
              payload: { offerId: n.offerId, creditsGranted: d.creditsGranted },
            },
          }),
        (u = "session_create"));
      const s = await o.createSession(void 0, {
        title: n.chatTitle,
        isHidden: !0,
        isCompanionInsightsOfferChat: !0,
      });
      (s.setNotificationsEnabled(!1),
        s.setTitle(n.chatTitle),
        await (await i.ensureSessionLoaded(s.id)).save());
      const q = r.createHiddenSystemUserMessage({
          text: b,
          id: "companion-insights-offer-context",
          contextTrackKeys: ["companion-insights-offer-context"],
        }),
        y = Date.now(),
        I = {
          message: "",
          companionId: l,
          attachmentContext: [],
          attachedTabs: [],
          attachedWindows: [],
          selections: [],
          autoTrackedTabId: void 0,
          startTime: y,
        };
      return (
        (m = !0),
        i
          .handleChatCompletion(I, s.id, y, {
            hidden: !0,
            source: "system",
            outboxMessages: [q],
          })
          .catch((f) => {
            const w = f instanceof Error ? f.message : "chat_completion_failed";
            (r.logger.error(
              "[CompanionInsightsOffer] chat completion failed",
              f,
            ),
              this.reportFailure(e, "chat_completion", w),
              r.eventManager.publishIPCSignal(
                {
                  domain: "offers",
                  type: "companionInsightsFailed",
                  payload: { offerId: n.offerId, reason: w },
                },
                p,
              ));
          })
          .finally(() => {
            this.accepting.delete(e);
          }),
        r.logger.info(
          `[CompanionInsightsOffer] launched hidden session ${s.id} for offer ${n.offerId}`,
        ),
        { ok: !0, sessionId: s.id }
      );
    } catch (c) {
      const l = c instanceof Error ? c.message : "unknown error";
      return (
        r.logger.error(`[CompanionInsightsOffer] accept failed (${u})`, c),
        g &&
          (this.reportFailure(e, u, l),
          r.eventManager.publishIPCSignal(
            {
              domain: "offers",
              type: "companionInsightsFailed",
              payload: { offerId: n.offerId, reason: l },
            },
            p,
          )),
        { ok: !1, error: l }
      );
    } finally {
      m || this.accepting.delete(e);
    }
  }
  async dismiss(t) {
    try {
      const e = await r.authFetch(
        `${r.config.app.apiUrl}/api/account/offers/companion-insights/dismiss`,
        {
          accountId: t,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: "{}",
        },
      );
      if (!e.ok) {
        const o = await e.text().catch(() => e.statusText);
        return (
          r.logger.warn(
            `[CompanionInsightsOffer] dismiss ${e.status}: ${o.slice(0, 200)}`,
          ),
          { ok: !1, error: `http_${e.status}` }
        );
      }
      const i = await e.json();
      return (
        i.ok &&
          r.authManager
            .forAccount(t)
            .publishEvent("ipc:signal", {
              signal: {
                domain: "offers",
                type: "companionInsightsDismissed",
                payload: { offerId: n.offerId },
              },
            }),
        i.ok ? { ok: !0 } : { ok: !1, error: i.reason }
      );
    } catch (e) {
      const i = e instanceof Error ? e.message : "unknown error";
      return (
        r.logger.warn(`[CompanionInsightsOffer] dismiss threw: ${i}`),
        { ok: !1, error: i }
      );
    }
  }
}
const S = new k();
exports.companionInsightsOfferManager = S;
