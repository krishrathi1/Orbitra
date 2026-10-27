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
      (i._sentryDebugIds[e] = "5546b654-f9be-43b5-9e34-bc8301819a89"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-5546b654-f9be-43b5-9e34-bc8301819a89"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const V = require("node:crypto"),
  W = require("electron"),
  n = require("../main-app.js"),
  Y = require("valibot");
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
function J(i) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (i) {
    for (const t in i)
      if (t !== "default") {
        const s = Object.getOwnPropertyDescriptor(i, t);
        Object.defineProperty(
          e,
          t,
          s.get ? s : { enumerable: !0, get: () => i[t] },
        );
      }
  }
  return ((e.default = i), Object.freeze(e));
}
const o = J(Y),
  Q = o.strictObject({
    firstObservedRelease: n.normalizedReleaseSchema,
    lastObservedRelease: n.normalizedReleaseSchema,
  }),
  M = o.pipe(o.number(), o.safeInteger(), o.minValue(1)),
  j = o.custom((i) => {
    if (typeof i != "object" || i === null || Array.isArray(i)) return !1;
    const e = Object.getPrototypeOf(i);
    return e === Object.prototype || e === null;
  }),
  D = o.pipe(
    o.string(),
    o.regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
    o.check((i) => {
      const e = Date.parse(i);
      return Number.isFinite(e) && new Date(e).toISOString() === i;
    }),
  ),
  G = o.pipe(
    o.strictObject({
      campaignId: n.campaignIdSchema,
      revision: M,
      targetRelease: n.normalizedReleaseSchema,
      firstViewedAt: D,
      lastViewedAt: D,
      viewCount: M,
    }),
    o.check(
      (i) => i.firstViewedAt <= i.lastViewedAt,
      "First-view timestamp is after last-view timestamp",
    ),
  ),
  K = o.pipe(
    j,
    o.record(n.campaignIdSchema, G),
    o.check(
      (i) => Object.keys(i).length <= n.IN_APP_MESSAGE_MAX_SEEN_CAMPAIGN_IDS,
      "View history exceeds the supported limit",
    ),
    o.check(
      (i) => Object.entries(i).every(([e, t]) => e === t.campaignId),
      "View key does not match campaign identity",
    ),
  ),
  Z = o.pipe(
    o.strictObject({
      normalReleaseWatermark: o.nullable(n.normalizedReleaseSchema),
      activeNormalCohortRelease: o.nullable(n.normalizedReleaseSchema),
      updateReadyNotificationWatermark: o.optional(
        o.nullable(n.normalizedReleaseSchema),
        null,
      ),
      views: K,
    }),
    o.check((i) => {
      const e = i.activeNormalCohortRelease,
        t = i.normalReleaseWatermark;
      return e !== null && t === null
        ? !1
        : e === null || t === null || n.compareReleases(e, t) <= 0;
    }, "Active cohort must not exceed its watermark"),
  ),
  ee = o.pipe(j, o.record(o.pipe(o.string(), o.regex(/^[0-9a-f]{64}$/)), Z)),
  te = o.strictObject({
    campaignId: n.campaignIdSchema,
    revision: M,
    targetRelease: n.normalizedReleaseSchema,
    viewedAt: D,
  });
function y(i) {
  return { status: "success", value: i };
}
function h(i) {
  return { status: "suppress_for_launch", reason: i };
}
function A() {
  return {
    normalReleaseWatermark: null,
    activeNormalCohortRelease: null,
    updateReadyNotificationWatermark: null,
    views: {},
  };
}
function b(i) {
  return V.createHash("sha256").update(i, "utf8").digest("hex");
}
function ie(i, e, t = null) {
  let s;
  try {
    s = n.normalizeRelease(i);
  } catch {
    return { status: "failure", reason: "invalid_input" };
  }
  if (e === null) {
    let l = null;
    if (t !== null)
      try {
        l = n.normalizeRelease(t);
      } catch {
        return { status: "failure", reason: "invalid_input" };
      }
    const u = l ?? s,
      c =
        l === null
          ? "fresh"
          : n.classifyInstallationTransition({
              currentRelease: s,
              firstObservedRelease: u,
              lastObservedRelease: l,
            });
    return {
      status: "success",
      value: {
        snapshot: {
          currentRelease: s,
          previousRelease: l,
          firstObservedRelease: u,
          installationTransition: c,
        },
        nextHistory: { firstObservedRelease: u, lastObservedRelease: s },
      },
    };
  }
  const r = o.safeParse(Q, e);
  if (!r.success) return { status: "failure", reason: "corrupt_state" };
  const a = r.output.lastObservedRelease;
  return {
    status: "success",
    value: {
      snapshot: {
        currentRelease: s,
        previousRelease: a,
        firstObservedRelease: r.output.firstObservedRelease,
        installationTransition: n.classifyInstallationTransition({
          currentRelease: s,
          firstObservedRelease: r.output.firstObservedRelease,
          lastObservedRelease: a,
        }),
      },
      nextHistory: {
        firstObservedRelease: r.output.firstObservedRelease,
        lastObservedRelease: s,
      },
    },
  };
}
function se(i, e) {
  return Object.values(i).every((t) => {
    const s =
        t.normalReleaseWatermark === null ||
        n.compareReleases(t.normalReleaseWatermark, e) >= 0,
      r =
        t.activeNormalCohortRelease === null ||
        n.compareReleases(t.activeNormalCohortRelease, e) >= 0;
    return s && r;
  });
}
function re(i, e) {
  const t = o.safeParse(ee, i);
  return !t.success || !se(t.output, e.firstObservedRelease)
    ? { status: "failure", reason: "corrupt_state" }
    : { status: "success", value: structuredClone(t.output) };
}
function ae(i) {
  const {
    snapshot: e,
    previous: t,
    normalReleaseWatermark: s,
    activeNormalCohortRelease: r,
  } = i;
  if (
    n.compareReleases(s, e.firstObservedRelease) < 0 ||
    n.compareReleases(s, e.currentRelease) > 0
  )
    return !1;
  const a = t.normalReleaseWatermark;
  if (a !== null && n.compareReleases(s, a) < 0) return !1;
  if (r === null) return !0;
  if (
    n.compareReleases(r, e.firstObservedRelease) < 0 ||
    n.compareReleases(r, e.currentRelease) > 0 ||
    n.compareReleases(r, s) > 0
  )
    return !1;
  if (r === t.activeNormalCohortRelease || r === e.currentRelease) return !0;
  const l = a ?? e.firstObservedRelease;
  return n.compareReleases(r, l) > 0;
}
function ne(i, e, t) {
  const s = o.safeParse(n.inAppMessageResolutionStateSchema, t);
  return !s.success ||
    !ae({
      snapshot: i,
      previous: e,
      normalReleaseWatermark: s.output.normalReleaseWatermark,
      activeNormalCohortRelease: s.output.activeNormalCohortRelease,
    })
    ? { status: "failure", reason: "invalid_input" }
    : {
        status: "success",
        value: {
          normalReleaseWatermark: s.output.normalReleaseWatermark,
          activeNormalCohortRelease: s.output.activeNormalCohortRelease,
          updateReadyNotificationWatermark: e.updateReadyNotificationWatermark,
          views: structuredClone(e.views),
        },
      };
}
function le(i, e, t) {
  const s = o.safeParse(te, t);
  if (
    !s.success ||
    n.compareReleases(s.output.targetRelease, i.firstObservedRelease) < 0 ||
    n.compareReleases(s.output.targetRelease, i.currentRelease) > 0
  )
    return { status: "failure", reason: "invalid_input" };
  const r = e.views[s.output.campaignId];
  let a;
  if (r === void 0) {
    if (Object.keys(e.views).length >= n.IN_APP_MESSAGE_MAX_SEEN_CAMPAIGN_IDS)
      return { status: "failure", reason: "history_limit" };
    a = {
      campaignId: s.output.campaignId,
      revision: s.output.revision,
      targetRelease: s.output.targetRelease,
      firstViewedAt: s.output.viewedAt,
      lastViewedAt: s.output.viewedAt,
      viewCount: 1,
    };
  } else {
    if (
      s.output.viewedAt < r.lastViewedAt ||
      r.viewCount === Number.MAX_SAFE_INTEGER
    )
      return { status: "failure", reason: "invalid_input" };
    a = {
      ...structuredClone(r),
      lastViewedAt: s.output.viewedAt,
      viewCount: r.viewCount + 1,
    };
  }
  const l = structuredClone(e);
  return (
    (l.views[a.campaignId] = a),
    { status: "success", value: { account: l, view: structuredClone(a) } }
  );
}
function oe(i) {
  const e = i.current.updateReadyNotificationWatermark;
  if (e !== null && n.compareReleases(i.targetRelease, e) <= 0)
    return structuredClone(i.current);
  const t = structuredClone(i.current);
  return (
    (t.updateReadyNotificationWatermark = i.targetRelease),
    i.campaignView !== void 0 &&
      (t.views[i.campaignView.campaignId] = structuredClone(i.campaignView)),
    t
  );
}
class ue {
  constructor(e) {
    this.options = e;
  }
  installationSnapshot = null;
  initializationPromise = null;
  async initializeInstallation(e, t = null) {
    if (this.installationSnapshot !== null)
      return y(structuredClone(this.installationSnapshot));
    if (this.initializationPromise !== null)
      return structuredClone(await this.initializationPromise);
    const s = this.performInstallationInitialization(e, t);
    this.initializationPromise = s;
    try {
      return structuredClone(await s);
    } finally {
      this.initializationPromise === s && (this.initializationPromise = null);
    }
  }
  async performInstallationInitialization(e, t) {
    try {
      await this.options.whenAppReady();
    } catch {
      return h("not_ready");
    }
    let s;
    try {
      s = this.options.settings.readInstallation();
    } catch {
      return h("read_failed");
    }
    const r = ie(e, s, t);
    if (r.status === "failure") return h(r.reason);
    try {
      if (!this.options.settings.writeInstallation(r.value.nextHistory))
        return h("write_failed");
    } catch {
      return h("write_failed");
    }
    return (
      (this.installationSnapshot = structuredClone(r.value.snapshot)),
      y(structuredClone(r.value.snapshot))
    );
  }
  async readAccount(e) {
    const t = this.readAccounts();
    return t.status === "suppress_for_launch"
      ? t
      : y(structuredClone(t.value[b(e)] ?? A()));
  }
  async persistResolutionState(e) {
    const t = this.installationSnapshot;
    if (t === null) return h("not_ready");
    const s = this.readAccounts();
    if (s.status === "suppress_for_launch") return s;
    const r = b(e.userId),
      a = ne(t, s.value[r] ?? A(), {
        normalReleaseWatermark: e.normalReleaseWatermark,
        activeNormalCohortRelease: e.activeNormalCohortRelease,
      });
    if (a.status === "failure") return h(a.reason);
    const l = structuredClone(s.value);
    return (
      (l[r] = a.value),
      this.writeAccounts(l) ? y(structuredClone(a.value)) : h("write_failed")
    );
  }
  async recordView(e) {
    const t = this.installationSnapshot;
    if (t === null) return h("not_ready");
    const s = this.readAccounts();
    if (s.status === "suppress_for_launch") return s;
    const r = b(e.userId),
      a = le(t, s.value[r] ?? A(), {
        campaignId: e.campaignId,
        revision: e.revision,
        targetRelease: e.targetRelease,
        viewedAt: e.viewedAt,
      });
    if (a.status === "failure") return h(a.reason);
    const l = structuredClone(s.value);
    return (
      (l[r] = a.value.account),
      this.writeAccounts(l)
        ? y(structuredClone(a.value.view))
        : h("write_failed")
    );
  }
  async recordUpdateReadyImpression(e) {
    if (this.installationSnapshot === null) return h("not_ready");
    const t = this.readAccounts();
    if (t.status === "suppress_for_launch") return t;
    const s = b(e.userId),
      r = t.value[s] ?? A(),
      a = r.updateReadyNotificationWatermark;
    if (a !== null && n.compareReleases(e.targetRelease, a) <= 0)
      return y(structuredClone(r));
    if (e.campaignView !== void 0) {
      const c = o.safeParse(G, e.campaignView);
      if (!c.success || c.output.targetRelease !== e.targetRelease)
        return h("invalid_input");
      if (
        r.views[c.output.campaignId] === void 0 &&
        Object.keys(r.views).length >= n.IN_APP_MESSAGE_MAX_SEEN_CAMPAIGN_IDS
      )
        return h("history_limit");
    }
    const l = oe({
        current: r,
        targetRelease: e.targetRelease,
        campaignView: e.campaignView,
      }),
      u = structuredClone(t.value);
    return (
      (u[s] = l),
      this.writeAccounts(u) ? y(structuredClone(l)) : h("write_failed")
    );
  }
  readAccounts() {
    const e = this.installationSnapshot;
    if (e === null) return h("not_ready");
    let t;
    try {
      t = this.options.settings.readAccounts();
    } catch {
      return h("read_failed");
    }
    const s = re(t, e);
    return s.status === "failure" ? h(s.reason) : y(s.value);
  }
  writeAccounts(e) {
    try {
      return this.options.settings.writeAccounts(structuredClone(e));
    } catch {
      return !1;
    }
  }
}
function ce() {
  return {
    phase: "awaiting_mount",
    dismissalReason: null,
    imageFailureEmitted: !1,
    windowClosedAfterAcknowledgement: !1,
  };
}
function de(i, e) {
  if (i.phase === "terminal") return { state: i, effects: [] };
  const t = { ...i };
  if (e.type === "mounted")
    return t.phase !== "awaiting_mount"
      ? { state: i, effects: [] }
      : ((t.phase = "recording_view"), { state: t, effects: ["record_view"] });
  if (e.type === "view_recorded") {
    if (t.phase !== "recording_view") return { state: i, effects: [] };
    t.phase = "impressed";
    const s = ["impression"];
    return (
      t.dismissalReason !== null
        ? ((t.phase = "terminal"), s.push("dismissal"))
        : t.windowClosedAfterAcknowledgement && (t.phase = "terminal"),
      { state: t, effects: s }
    );
  }
  return e.type === "image_failed"
    ? t.imageFailureEmitted
      ? { state: i, effects: [] }
      : ((t.imageFailureEmitted = !0), { state: t, effects: ["image_failed"] })
    : e.type === "window_closed"
      ? t.phase === "awaiting_mount"
        ? ((t.phase = "terminal"), { state: t, effects: ["window_closed"] })
        : t.phase === "recording_view"
          ? ((t.windowClosedAfterAcknowledgement = !0),
            { state: t, effects: [] })
          : ((t.phase = "terminal"), { state: t, effects: [] })
      : t.dismissalReason !== null
        ? { state: i, effects: [] }
        : ((t.dismissalReason = e.reason),
          t.phase === "awaiting_mount"
            ? ((t.phase = "terminal"),
              { state: t, effects: ["dialog_rejected"] })
            : t.phase === "recording_view"
              ? { state: t, effects: [] }
              : ((t.phase = "terminal"), { state: t, effects: ["dismissal"] }));
}
function pe(i) {
  return (
    i.hasCompletedOnboarding &&
    i.hasFocusedWindow &&
    !i.isDestroyed &&
    i.isVisible &&
    !i.isIncognito &&
    !i.isOnboardingWindow
  );
}
const he = 50;
class fe {
  current = null;
  nextId = 1;
  startupOpened = !1;
  appInactive = !1;
  disposed = !1;
  openStartup() {
    return this.disposed || this.startupOpened
      ? null
      : ((this.startupOpened = !0), this.issue("startup"));
  }
  markAppInactive() {
    this.disposed ||
      ((this.appInactive = !0),
      this.current?.phase !== "mounted" &&
        ((this.current?.phase === "available" &&
          this.current.opportunity.context === "startup") ||
          (this.current = null)));
  }
  openRefocus() {
    return this.disposed || !this.appInactive
      ? null
      : ((this.appInactive = !1),
        this.current?.phase === "available" &&
        this.current.opportunity.context === "startup"
          ? this.current.opportunity
          : this.current?.phase === "mounted" || this.current
            ? null
            : this.issue("app_refocus"));
  }
  available() {
    return this.current?.phase !== "available"
      ? null
      : this.current.opportunity;
  }
  claim(e) {
    return !this.matchesCurrent(e) || this.current?.phase !== "available"
      ? !1
      : ((this.current.phase = "claimed"), !0);
  }
  markMounted(e) {
    return !this.matchesCurrent(e) || this.current?.phase !== "claimed"
      ? !1
      : ((this.current.phase = "mounted"), !0);
  }
  finishMounted(e) {
    this.matchesCurrent(e) &&
      this.current?.phase === "mounted" &&
      (this.current = null);
  }
  isCurrent(e) {
    return this.matchesCurrent(e);
  }
  dispose() {
    ((this.current = null), (this.appInactive = !1), (this.disposed = !0));
  }
  issue(e) {
    const t = { id: this.nextId, context: e };
    return (
      (this.nextId += 1),
      (this.current = { opportunity: t, phase: "available" }),
      t
    );
  }
  matchesCurrent(e) {
    return (
      this.current?.opportunity.id === e.id &&
      this.current.opportunity.context === e.context
    );
  }
}
function me() {
  return {
    started: !1,
    disposed: !1,
    startupReady: !1,
    installationInitializing: !1,
    installation: null,
    attemptConsumed: !1,
    launchSuppressed: !1,
    authGeneration: 0,
    authenticatedUserId: null,
    nextCheckId: 0,
    eligibilityCheck: null,
    activeAttempt: null,
    reservation: null,
  };
}
function f(i) {
  return { state: i, effects: [] };
}
function v(i) {
  if (
    !i.started ||
    !i.startupReady ||
    i.installation === null ||
    i.disposed ||
    i.attemptConsumed ||
    i.launchSuppressed
  )
    return f(i);
  if (i.eligibilityCheck !== null)
    return i.eligibilityCheck.recheckRequested
      ? f(i)
      : {
          state: {
            ...i,
            eligibilityCheck: { ...i.eligibilityCheck, recheckRequested: !0 },
          },
          effects: [],
        };
  const e = i.nextCheckId + 1;
  return {
    state: {
      ...i,
      nextCheckId: e,
      eligibilityCheck: {
        checkId: e,
        authGeneration: i.authGeneration,
        recheckRequested: !1,
      },
    },
    effects: [
      {
        type: "check_eligibility",
        checkId: e,
        authGeneration: i.authGeneration,
      },
    ],
  };
}
function ge(i, e, t) {
  const s = i.eligibilityCheck;
  if (s?.checkId !== e || s.authGeneration !== t) return f(i);
  const r = { ...i, eligibilityCheck: null };
  return s.recheckRequested ? v(r) : f(r);
}
function N(i) {
  return {
    deliveryAttemptId: i.deliveryAttemptId,
    authGeneration: i.authGeneration,
    userId: i.userId,
    currentRelease: i.currentRelease,
    windowId: i.windowId,
    presentationOpportunity: i.presentationOpportunity,
  };
}
function I(i, e) {
  return q(i, e) ? i.activeAttempt : null;
}
function k(i, e, t) {
  return i?.deliveryAttemptId === e && i.dialogId === t;
}
function F(i, e) {
  if (i.disposed) return f(i);
  switch (e.type) {
    case "start":
      return i.started ? f(i) : { state: { ...i, started: !0 }, effects: [] };
    case "dispose": {
      const t = [];
      return (
        i.reservation !== null &&
          t.push({ type: "cancel_dialog", reservation: i.reservation }),
        {
          state: {
            ...i,
            disposed: !0,
            installationInitializing: !1,
            installation: null,
            authenticatedUserId: null,
            eligibilityCheck: null,
            activeAttempt: null,
            reservation: null,
          },
          effects: t,
        }
      );
    }
    case "startup_restored":
      return !i.started || i.startupReady || i.installationInitializing
        ? f(i)
        : { state: { ...i, installationInitializing: !0 }, effects: [] };
    case "installation_initialized":
      return i.installationInitializing
        ? v({
            ...i,
            startupReady: !0,
            installationInitializing: !1,
            installation: e.installation,
          })
        : f(i);
    case "installation_suppressed":
      return i.installationInitializing
        ? {
            state: { ...i, installationInitializing: !1, launchSuppressed: !0 },
            effects: [
              { type: "report_installation_failure", reason: e.reason },
            ],
          }
        : f(i);
    case "eligibility_requested":
      return v(i);
    case "update_ready_claimed": {
      const t =
          i.reservation === null
            ? []
            : [{ type: "cancel_dialog", reservation: i.reservation }],
        s = i.activeAttempt !== null && i.activeAttempt.phase !== "complete";
      return {
        state: {
          ...i,
          attemptConsumed: s ? !1 : i.attemptConsumed,
          eligibilityCheck: null,
          activeAttempt: null,
          reservation: null,
        },
        effects: t,
      };
    }
    case "eligibility_rejected":
      return ge(i, e.checkId, e.authGeneration);
    case "auth_changed": {
      if (
        e.isAuthenticated &&
        e.userId !== null &&
        e.userId === i.authenticatedUserId
      )
        return v(i);
      const t = i.reservation
          ? [{ type: "cancel_dialog", reservation: i.reservation }]
          : [],
        s =
          e.isAuthenticated && i.eligibilityCheck !== null
            ? { ...i.eligibilityCheck, recheckRequested: !0 }
            : i.eligibilityCheck,
        r = {
          ...i,
          authGeneration: i.authGeneration + 1,
          authenticatedUserId: null,
          eligibilityCheck: s,
          activeAttempt: null,
          reservation: null,
        };
      if (!e.isAuthenticated) return { state: r, effects: t };
      const a = v(r);
      return { state: a.state, effects: [...t, ...a.effects] };
    }
    case "attempt_started": {
      const t = i.eligibilityCheck;
      return t?.checkId !== e.checkId ||
        t.authGeneration !== e.authGeneration ||
        i.authGeneration !== e.authGeneration ||
        e.attempt.authGeneration !== e.authGeneration ||
        i.installation === null
        ? f(i)
        : {
            state: {
              ...i,
              authenticatedUserId: e.attempt.userId,
              eligibilityCheck: null,
              attemptConsumed: !0,
              activeAttempt: {
                ...e.attempt,
                phase: "running",
                candidate: null,
              },
            },
            effects: [
              {
                type: "run_attempt",
                attempt: e.attempt,
                installation: i.installation,
              },
            ],
          };
    }
    case "attempt_suppressed":
      return I(i, e.attempt) === null
        ? f(i)
        : {
            state: {
              ...i,
              attemptConsumed: !1,
              launchSuppressed: !0,
              activeAttempt: null,
            },
            effects: [],
          };
    case "attempt_completed": {
      const t = I(i, e.attempt);
      return t === null
        ? f(i)
        : {
            state: { ...i, activeAttempt: { ...t, phase: "complete" } },
            effects: [],
          };
    }
    case "resolution_ready": {
      const t = I(i, e.attempt);
      return t === null || t.phase !== "running"
        ? f(i)
        : {
            state: {
              ...i,
              activeAttempt: {
                ...t,
                phase: "persisting_resolution",
                candidate: e.presentationCandidate,
              },
            },
            effects: [
              {
                type: "persist_resolution",
                attempt: N(t),
                resolutionState: e.resolutionState,
              },
            ],
          };
    }
    case "resolution_persisted": {
      const t = I(i, e.attempt);
      return t === null || t.phase !== "persisting_resolution"
        ? f(i)
        : t.candidate === null
          ? {
              state: { ...i, activeAttempt: { ...t, phase: "complete" } },
              effects: [],
            }
          : {
              state: {
                ...i,
                activeAttempt: { ...t, phase: "ready_to_present" },
              },
              effects: [
                {
                  type: "present_campaign",
                  attempt: N(t),
                  candidate: t.candidate,
                },
              ],
            };
    }
    case "dialog_reserved": {
      const t = i.activeAttempt;
      return t === null ||
        t.deliveryAttemptId !== e.deliveryAttemptId ||
        t.windowId !== e.windowId ||
        t.phase !== "ready_to_present" ||
        i.reservation !== null ||
        !q(i, e.deliveryAttemptId)
        ? f(i)
        : {
            state: {
              ...i,
              activeAttempt: { ...t, phase: "presenting" },
              reservation: {
                deliveryAttemptId: e.deliveryAttemptId,
                dialogId: e.dialogId,
                windowId: e.windowId,
                disposition: "reserving",
              },
            },
            effects: [],
          };
    }
    case "dialog_accepted":
      return k(i.reservation, e.deliveryAttemptId, e.dialogId)
        ? {
            state: {
              ...i,
              reservation: { ...i.reservation, disposition: e.disposition },
            },
            effects: [],
          }
        : f(i);
    case "presentation_deferred":
      return !k(i.reservation, e.deliveryAttemptId, e.dialogId) ||
        i.reservation.disposition !== "queued"
        ? f(i)
        : {
            state: {
              ...i,
              attemptConsumed: !1,
              activeAttempt: null,
              reservation: null,
            },
            effects: [{ type: "cancel_dialog", reservation: i.reservation }],
          };
    case "reservation_finished": {
      if (!k(i.reservation, e.deliveryAttemptId, e.dialogId)) return f(i);
      const t = i.activeAttempt;
      return {
        state: {
          ...i,
          activeAttempt:
            t?.deliveryAttemptId === e.deliveryAttemptId
              ? { ...t, phase: "complete" }
              : t,
          reservation: null,
        },
        effects: [],
      };
    }
  }
}
function q(i, e) {
  const t = i.activeAttempt;
  return t === null ||
    i.disposed ||
    t.authGeneration !== i.authGeneration ||
    t.userId !== i.authenticatedUserId
    ? !1
    : typeof e == "string"
      ? t.deliveryAttemptId === e
      : t.deliveryAttemptId === e.deliveryAttemptId &&
        t.authGeneration === e.authGeneration &&
        t.userId === e.userId &&
        t.currentRelease === e.currentRelease &&
        t.windowId === e.windowId &&
        t.presentationOpportunity.id === e.presentationOpportunity.id &&
        t.presentationOpportunity.context === e.presentationOpportunity.context;
}
function U(i, e, t) {
  return !i.disposed && k(i.reservation, e, t) && q(i, e);
}
class L {
  constructor(e) {
    this.callbacks = e;
  }
  presentationState = ce();
  persistenceIdentity = null;
  finished = !1;
  mounted() {
    this.dispatch({ type: "mounted" });
  }
  acknowledge(e) {
    this.dispatch({ type: "dismissed", reason: e });
  }
  imageFailed() {
    this.dispatch({ type: "image_failed" });
  }
  windowClosed() {
    this.dispatch({ type: "window_closed" });
  }
  dialogRejected() {
    this.presentationState.phase !== "terminal" &&
      (this.callbacks.emitFailure({ type: "dialog_rejected" }), this.finish());
  }
  terminate() {
    this.finish();
  }
  dispatch(e) {
    if (this.presentationState.phase === "terminal") return;
    const t = de(this.presentationState, e);
    ((this.presentationState = t.state),
      this.executeEffects(t.effects),
      this.presentationState.phase === "terminal" && this.finish());
  }
  executeEffects(e) {
    for (const t of e) this.executeEffect(t);
  }
  executeEffect(e) {
    if (e === "record_view") {
      this.beginPersistence();
      return;
    }
    if (e === "impression") {
      this.callbacks.emitImpression();
      return;
    }
    if (e === "dismissal") {
      const t = this.presentationState.dismissalReason;
      t !== null && this.callbacks.emitAcknowledgement(t);
      return;
    }
    if (e === "image_failed") {
      this.callbacks.emitImageFailure();
      return;
    }
    this.callbacks.emitFailure({ type: e });
  }
  beginPersistence() {
    const e = Symbol("presentation-persistence");
    ((this.persistenceIdentity = e), this.persistView(e));
  }
  async persistView(e) {
    const t = await this.callbacks.persistView();
    if (
      !(
        this.persistenceIdentity !== e ||
        this.presentationState.phase === "terminal"
      )
    ) {
      if (((this.persistenceIdentity = null), !t.success)) {
        (this.callbacks.emitFailure({
          type: "persistence_failed",
          failure: t.failure,
        }),
          this.finish());
        return;
      }
      this.dispatch({ type: "view_recorded" });
    }
  }
  finish() {
    this.finished ||
      ((this.finished = !0),
      (this.presentationState = {
        ...this.presentationState,
        phase: "terminal",
      }),
      (this.persistenceIdentity = null),
      this.callbacks.finish());
  }
}
const z = 5e3,
  ye = o.looseObject({ resolutionState: o.unknown() });
function B(i) {
  const e = JSON.stringify(i);
  return Buffer.byteLength(e, "utf8") >
    n.IN_APP_MESSAGE_RESOLVE_REQUEST_MAX_BYTES
    ? {
        status: "failure",
        failure: {
          failure_stage: "resolver",
          failure_reason: "request_too_large",
        },
      }
    : { status: "success", body: e };
}
function _e(i) {
  if (
    Buffer.byteLength(i, "utf8") > n.IN_APP_MESSAGE_RESOLVE_RESPONSE_MAX_BYTES
  )
    return {
      status: "failure",
      failure: {
        failure_stage: "response_validation",
        failure_reason: "response_too_large",
      },
    };
  let e;
  try {
    e = JSON.parse(i);
  } catch {
    return {
      status: "failure",
      failure: {
        failure_stage: "response_validation",
        failure_reason: "invalid_response",
      },
    };
  }
  const t = o.safeParse(n.inAppMessageResolveResponseSchema, e),
    s = o.safeParse(ye, e);
  return s.success
    ? o.safeParse(n.inAppMessageResolutionStateSchema, s.output.resolutionState)
        .success
      ? t.success
        ? "resolutionState" in t.output
          ? { status: "success", value: t.output }
          : {
              status: "failure",
              failure: {
                failure_stage: "response_validation",
                failure_reason: "invalid_response",
              },
            }
        : {
            status: "failure",
            failure: {
              failure_stage: "response_validation",
              failure_reason: "invalid_response",
            },
          }
      : {
          status: "failure",
          failure: {
            failure_stage: "response_validation",
            failure_reason: "invalid_resolution_state",
          },
        }
    : {
        status: "failure",
        failure: {
          failure_stage: "response_validation",
          failure_reason: "invalid_response",
        },
      };
}
function O(i) {
  return i.name === "AbortError" || i.name === "TimeoutError";
}
function E(i, e) {
  return new Promise((t, s) => {
    let r = !1;
    const a = () => e.removeEventListener("abort", c),
      l = (p) => {
        r || ((r = !0), a(), t(p));
      },
      u = (p) => {
        r || ((r = !0), a(), s(p));
      },
      c = () =>
        u(new DOMException("Resolver deadline reached", "TimeoutError"));
    if (
      (i.then(l, (p) => {
        u(p instanceof Error ? p : new Error("Resolver operation failed"));
      }),
      e.aborted)
    ) {
      c();
      return;
    }
    e.addEventListener("abort", c, { once: !0 });
  });
}
async function Re(
  i,
  e = { createDeadlineSignal: (t) => AbortSignal.timeout(t) },
) {
  const t = B(i.request);
  if (t.status === "failure") return t;
  const s = e.createDeadlineSignal(z);
  let r;
  try {
    r = await E(
      i.authFetch(`${i.apiUrl}/api/in-app-messages/resolve`, {
        method: "POST",
        body: t.body,
        signal: s,
      }),
      s,
    );
  } catch (a) {
    return {
      status: "failure",
      failure: {
        failure_stage: "resolver",
        failure_reason: a instanceof Error && O(a) ? "timeout" : "offline",
      },
    };
  }
  if (!r.ok)
    return {
      status: "failure",
      failure: { failure_stage: "resolver", failure_reason: "http_error" },
    };
  try {
    return _e(await E(r.text(), s));
  } catch (a) {
    return a instanceof Error && O(a)
      ? {
          status: "failure",
          failure: { failure_stage: "resolver", failure_reason: "timeout" },
        }
      : {
          status: "failure",
          failure: {
            failure_stage: "response_validation",
            failure_reason: "invalid_response",
          },
        };
  }
}
async function we(
  i,
  e = { createDeadlineSignal: (t) => AbortSignal.timeout(t) },
) {
  const t = {
      context: { type: "update_ready" },
      currentRelease: i.currentRelease,
      targetRelease: i.targetRelease,
      updateReadyNotificationWatermark: i.updateReadyNotificationWatermark,
      seenCampaignIds: i.seenCampaignIds,
    },
    s = B(t);
  if (s.status === "failure")
    return { type: "fallback", reason: "invalid_response" };
  const r = e.createDeadlineSignal(z);
  let a;
  try {
    a = await E(
      i.authFetch(`${i.apiUrl}/api/in-app-messages/resolve`, {
        method: "POST",
        body: s.body,
        signal: r,
      }),
      r,
    );
  } catch (p) {
    return {
      type: "fallback",
      reason: p instanceof Error && O(p) ? "timeout" : "offline",
    };
  }
  if (!a.ok) return { type: "fallback", reason: "http_error" };
  let l;
  try {
    l = await E(a.text(), r);
  } catch (p) {
    return {
      type: "fallback",
      reason: p instanceof Error && O(p) ? "timeout" : "invalid_response",
    };
  }
  if (
    Buffer.byteLength(l, "utf8") > n.IN_APP_MESSAGE_RESOLVE_RESPONSE_MAX_BYTES
  )
    return { type: "fallback", reason: "invalid_response" };
  let u;
  try {
    u = JSON.parse(l);
  } catch {
    return { type: "fallback", reason: "invalid_response" };
  }
  const c = o.safeParse(n.inAppMessageResolveResponseSchema, u);
  return !c.success ||
    !("context" in c.output) ||
    c.output.context.type !== "update_ready"
    ? { type: "fallback", reason: "invalid_response" }
    : c.output.campaign === null
      ? { type: "fallback", reason: "no_campaign" }
      : c.output.campaign.targetRelease !== i.targetRelease ||
          n.compareReleases(
            c.output.campaign.targetRelease,
            i.currentRelease,
          ) <= 0
        ? { type: "fallback", reason: "invalid_response" }
        : { type: "custom", campaign: c.output.campaign };
}
function x(i) {
  const e = {
    message_source: "custom",
    message_key: i.slug,
    campaign_id: i.id,
    campaign_slug: i.slug,
    campaign_revision: i.revision,
    target_release: i.targetRelease,
  };
  return i.deliveryReason === "update_ready"
    ? { ...e, trigger_type: "update_ready", delivery_reason: "update_ready" }
    : { ...e, trigger_type: "release", delivery_reason: i.deliveryReason };
}
function ve(i) {
  return `update-ready-default-${i.replaceAll(".", "-")}`;
}
function Ae(i) {
  return {
    trigger_type: "update_ready",
    target_release: i.targetRelease,
    delivery_reason: "update_ready",
    message_source: "default",
    message_key: ve(i.targetRelease),
    fallback_reason: i.fallbackReason,
  };
}
function T(i) {
  return i === "corrupt_state" ? "corrupt_state" : "read_failed";
}
function be(i) {
  return i === "write_failed" ? "installation_write_failed" : T(i);
}
function Ie(i) {
  let e;
  try {
    e = n.normalizeRelease(i.currentVersion);
  } catch {
    return null;
  }
  return {
    current_release: e,
    delivery_attempt_id: i.deliveryAttemptId,
    failure_stage: "local_persistence",
    failure_reason: be(i.reason),
  };
}
function H(i) {
  return i === "corrupt_state"
    ? "corrupt_state"
    : i === "read_failed"
      ? "read_failed"
      : "view_write_failed";
}
const w = "InAppMessagingManager.ts";
class Ce {
  constructor(e, t) {
    ((this.deps = e), (this.host = t));
    const s = F(me(), { type: "start" }).state;
    this.orchestrationState = F(s, { type: "startup_restored" }).state;
  }
  orchestrationState;
  reservation = null;
  initializationRequested = !1;
  async initializeInstallation() {
    if (!(this.initializationRequested || this.orchestrationState.disposed)) {
      this.initializationRequested = !0;
      try {
        const e = await this.deps.getPreviousAppVersion();
        if (this.orchestrationState.disposed) return;
        const t = await this.deps.localState.initializeInstallation(
          this.deps.getAppVersion(),
          e,
        );
        if (this.orchestrationState.disposed) return;
        if (t.status === "suppress_for_launch") {
          this.dispatch({ type: "installation_suppressed", reason: t.reason });
          return;
        }
        (this.dispatch({
          type: "installation_initialized",
          installation: t.value,
        }),
          this.host.requestEligibilityRecheck());
      } catch {
        this.orchestrationState.disposed ||
          this.dispatch({
            type: "installation_suppressed",
            reason: "read_failed",
          });
      }
    }
  }
  requestEligibilityCheck() {
    if (
      !this.orchestrationState.disposed &&
      (this.invalidateAttemptForStaleWindow(),
      this.host.getPresentationOpportunity() !== null)
    ) {
      if (this.orchestrationState.installation === null) {
        this.dispatch({ type: "eligibility_requested" });
        return;
      }
      if (this.host.updateReadyOwnsDelivery()) {
        this.host.requestEligibilityRecheck();
        return;
      }
      this.dispatch({ type: "eligibility_requested" });
    }
  }
  invalidateIdentity() {
    this.orchestrationState.disposed ||
      this.dispatch({
        type: "auth_changed",
        isAuthenticated: !1,
        userId: null,
      });
  }
  cancelForUpdateReady() {
    this.orchestrationState.disposed ||
      this.reservation?.mounted ||
      (this.dispatch({ type: "update_ready_claimed" }),
      this.orchestrationState.installation !== null &&
        this.host.requestEligibilityRecheck());
  }
  dispose() {
    this.dispatch({ type: "dispose" });
  }
  dispatch(e) {
    const t = F(this.orchestrationState, e);
    ((this.orchestrationState = t.state), this.executeEffects(t.effects));
  }
  executeEffects(e) {
    for (const t of e) {
      if (t.type === "report_installation_failure") {
        this.reportInstallationFailure(t.reason);
        continue;
      }
      if (t.type === "check_eligibility") {
        this.checkEligibilityAndDeliver(t.checkId, t.authGeneration);
        continue;
      }
      if (t.type === "run_attempt") {
        const s = this.currentAttemptWindow(t.attempt);
        if (s === null) {
          this.completeAttemptForRecheck(t.attempt);
          continue;
        }
        this.performAttempt(t.attempt, s, t.installation);
        continue;
      }
      if (t.type === "persist_resolution") {
        this.persistResolution(t);
        continue;
      }
      if (t.type === "present_campaign") {
        const s = this.currentAttemptWindow(t.attempt);
        if (s === null || s.id !== t.candidate.windowId) {
          this.completeAttemptForRecheck(t.attempt);
          continue;
        }
        this.presentCampaign(t.attempt, s, t.candidate.campaign);
        continue;
      }
      t.type === "cancel_dialog" && this.cancelReservedDialog(t.reservation);
    }
  }
  reportInstallationFailure(e) {
    let t;
    try {
      t = this.deps.getAppVersion();
    } catch {
      return;
    }
    const s = Ie({
      currentVersion: t,
      deliveryAttemptId: this.deps.randomUUID(),
      reason: e,
    });
    s !== null &&
      this.deps.telemetry.sendEvent("in_app_message_delivery_failed", s, w);
  }
  rejectEligibilityCheck(e, t) {
    this.dispatch({
      type: "eligibility_rejected",
      checkId: e,
      authGeneration: t,
    });
  }
  async checkEligibilityAndDeliver(e, t) {
    if (this.releaseDeliveryIsBlocked(e, t)) return;
    const s = this.host.getPresentationOpportunity();
    if (s === null) {
      this.rejectEligibilityCheck(e, t);
      return;
    }
    const r = this.host.getEligibleFocusedWindow();
    if (r === null) {
      this.rejectEligibilityCheck(e, t);
      return;
    }
    let a = null;
    try {
      a = (await this.deps.auth.getUser()).user?.id ?? null;
    } catch {
      this.rejectEligibilityCheck(e, t);
      return;
    }
    if (this.releaseDeliveryIsBlocked(e, t)) return;
    if (t !== this.orchestrationState.authGeneration || a === null) {
      this.rejectEligibilityCheck(e, t);
      return;
    }
    if (this.host.getEligibleFocusedWindow() !== r) {
      this.rejectEligibilityCheck(e, t);
      return;
    }
    if (
      !this.host.isPresentationOpportunityCurrent(s) ||
      this.host.getPresentationOpportunity() !== s
    ) {
      this.rejectEligibilityCheck(e, t);
      return;
    }
    const l = this.orchestrationState.installation;
    if (l === null) {
      this.rejectEligibilityCheck(e, t);
      return;
    }
    if (this.releaseDeliveryIsBlocked(e, t)) return;
    const u = {
      deliveryAttemptId: this.deps.randomUUID(),
      currentRelease: l.currentRelease,
      authGeneration: t,
      userId: a,
      windowId: r.id,
      presentationOpportunity: s,
    };
    if (!this.host.claimPresentationOpportunity(s)) {
      this.rejectEligibilityCheck(e, t);
      return;
    }
    this.dispatch({
      type: "attempt_started",
      checkId: e,
      authGeneration: t,
      attempt: u,
    });
  }
  releaseDeliveryIsBlocked(e, t) {
    return this.host.updateReadyOwnsDelivery()
      ? (this.host.requestEligibilityRecheck(),
        this.rejectEligibilityCheck(e, t),
        !0)
      : !1;
  }
  async performAttempt(e, t, s) {
    if (s.installationTransition === "downgraded") {
      this.suppressDowngrade(e);
      return;
    }
    let r;
    try {
      r = await this.deps.localState.readAccount(e.userId);
    } catch {
      r = { status: "suppress_for_launch", reason: "read_failed" };
    }
    if (!this.isAttemptActive(e) || !this.attemptWindowIsCurrent(e, t)) return;
    if (r.status === "suppress_for_launch") {
      this.emitFailure(e, null, {
        failure_stage: "local_persistence",
        failure_reason: T(r.reason),
      });
      return;
    }
    const a = r.value;
    if (
      n.compareReleases(s.firstObservedRelease, s.currentRelease) > 0 ||
      (a.normalReleaseWatermark !== null &&
        n.compareReleases(a.normalReleaseWatermark, s.currentRelease) > 0)
    ) {
      this.suppressDowngrade(e);
      return;
    }
    const u = Object.keys(a.views);
    if (u.length > n.IN_APP_MESSAGE_MAX_SEEN_CAMPAIGN_IDS) {
      this.emitFailure(e, null, {
        failure_stage: "resolver",
        failure_reason: "seen_history_too_large",
      });
      return;
    }
    const c = {
        currentRelease: s.currentRelease,
        previousRelease: s.previousRelease,
        firstObservedRelease: s.firstObservedRelease,
        installationTransition: s.installationTransition,
        normalReleaseWatermark: a.normalReleaseWatermark,
        activeNormalCohortRelease: a.activeNormalCohortRelease,
        seenCampaignIds: u,
      },
      p = await Re({
        authFetch: this.deps.authFetch,
        apiUrl: this.deps.apiUrl,
        request: c,
      });
    if (!this.isAttemptActive(e) || !this.attemptWindowIsCurrent(e, t)) return;
    if (p.status === "failure") {
      this.emitFailure(e, null, p.failure);
      return;
    }
    const d = p.value;
    this.dispatch({
      type: "resolution_ready",
      attempt: e,
      resolutionState: d.resolutionState,
      presentationCandidate:
        d.campaign === null ? null : { campaign: d.campaign, windowId: t.id },
    });
  }
  async persistResolution(e) {
    let t;
    try {
      t = await this.deps.localState.persistResolutionState({
        userId: e.attempt.userId,
        normalReleaseWatermark: e.resolutionState.normalReleaseWatermark,
        activeNormalCohortRelease: e.resolutionState.activeNormalCohortRelease,
      });
    } catch {
      t = { status: "suppress_for_launch", reason: "write_failed" };
    }
    if (
      this.isAttemptActive(e.attempt) &&
      this.attemptWindowIsCurrent(e.attempt)
    ) {
      if (t.status === "suppress_for_launch") {
        if (t.reason === "invalid_input") {
          (this.emitFailure(e.attempt, null, {
            failure_stage: "response_validation",
            failure_reason: "invalid_resolution_state",
          }),
            this.dispatch({ type: "attempt_completed", attempt: e.attempt }));
          return;
        }
        (this.emitFailure(e.attempt, null, {
          failure_stage: "local_persistence",
          failure_reason:
            t.reason === "write_failed"
              ? "resolution_write_failed"
              : T(t.reason),
        }),
          this.dispatch({ type: "attempt_completed", attempt: e.attempt }));
        return;
      }
      this.dispatch({ type: "resolution_persisted", attempt: e.attempt });
    }
  }
  presentCampaign(e, t, s) {
    if (!this.isAttemptActive(e) || this.reservation !== null) return;
    const r = e.deliveryAttemptId;
    if (
      (this.dispatch({
        type: "dialog_reserved",
        deliveryAttemptId: e.deliveryAttemptId,
        dialogId: r,
        windowId: t.id,
      }),
      !U(this.orchestrationState, e.deliveryAttemptId, r))
    )
      return;
    const a = { current: null },
      l = new L({
        persistView: () => this.persistCampaignView(e, s),
        emitImpression: () => {
          const d = a.current;
          d === null ||
            !this.isCurrentReservation(d) ||
            this.deps.telemetry.sendEvent(
              "in_app_message_impression",
              this.presentationTelemetry(d),
              w,
            );
        },
        emitAcknowledgement: (d) => {
          const R = a.current;
          R === null ||
            !this.isCurrentReservation(R) ||
            this.emitDismissal(R, d);
        },
        emitImageFailure: () => {
          const d = a.current;
          d === null ||
            !this.isCurrentReservation(d) ||
            this.emitImageFailure(d);
        },
        emitFailure: (d) => {
          const R = a.current;
          R !== null && this.emitPresentationFailure(R, d);
        },
        finish: () => {
          const d = a.current;
          d !== null && this.completeReservation(d);
        },
      }),
      u = {
        attempt: e,
        dialogId: r,
        campaign: s,
        window: t,
        transaction: l,
        stopWatchingClose: null,
        mounted: !1,
      };
    ((a.current = u),
      (this.reservation = u),
      (u.stopWatchingClose = t.onClosed(() =>
        this.handleReservedWindowClosed(u),
      )),
      this.deps.telemetry.sendEvent(
        "in_app_message_selected",
        this.presentationTelemetry(u),
        w,
      ));
    const c = {
      id: r,
      title: s.title,
      description: s.description,
      contentType: "in_app_message",
      buttons: [
        {
          title: "Got it",
          variant: "default",
          callback: () => this.handleDismissal(u, "got_it"),
        },
      ],
      metaData: {
        inAppMessage: { imageUrl: s.imageUrl, imageAlt: s.imageAlt },
      },
      onClose: (d) => this.handleDismissal(u, d),
      onMounted: () => this.handleMounted(u),
      onImageFailed: () => this.handleImageFailed(u),
    };
    let p;
    try {
      p = this.deps.dialogs.showDialog(t, c);
    } catch {
      u.transaction.dialogRejected();
      return;
    }
    if (p === "duplicate") {
      u.transaction.dialogRejected();
      return;
    }
    if (p === "queued") {
      (this.dispatch({
        type: "dialog_accepted",
        deliveryAttemptId: e.deliveryAttemptId,
        dialogId: r,
        disposition: "queued",
      }),
        this.dispatch({
          type: "presentation_deferred",
          deliveryAttemptId: e.deliveryAttemptId,
          dialogId: r,
        }));
      return;
    }
    this.dispatch({
      type: "dialog_accepted",
      deliveryAttemptId: e.deliveryAttemptId,
      dialogId: r,
      disposition: "active",
    });
  }
  handleMounted(e) {
    this.isCurrentReservation(e) &&
      this.host.markPresentationMounted(e.attempt.presentationOpportunity) &&
      ((e.mounted = !0), e.transaction.mounted());
  }
  async persistCampaignView(e, t) {
    const s = this.deps.now();
    let r;
    try {
      r = await this.deps.localState.recordView({
        userId: e.userId,
        campaignId: t.id,
        revision: t.revision,
        targetRelease: t.targetRelease,
        viewedAt: s,
      });
    } catch {
      return { success: !1, failure: "write_failed" };
    }
    return r.status === "suppress_for_launch"
      ? { success: !1, failure: r.reason }
      : { success: !0 };
  }
  handleImageFailed(e) {
    this.isCurrentReservation(e) && e.transaction.imageFailed();
  }
  emitImageFailure(e) {
    this.deps.telemetry.sendEvent(
      "in_app_message_image_failed",
      {
        ...this.presentationTelemetry(e),
        failure_reason: "load_or_decode_error",
      },
      w,
    );
  }
  handleDismissal(e, t) {
    this.isCurrentReservation(e) && e.transaction.acknowledge(t);
  }
  emitDismissal(e, t) {
    this.deps.telemetry.sendEvent(
      "in_app_message_dismissed",
      { ...this.presentationTelemetry(e), dismissal_reason: t },
      w,
    );
  }
  emitPresentationFailure(e, t) {
    if (t.type === "persistence_failed") {
      this.emitFailure(e.attempt, e.campaign, {
        failure_stage: "local_persistence",
        failure_reason: H(t.failure),
      });
      return;
    }
    this.emitFailure(e.attempt, e.campaign, {
      failure_stage: "render_acknowledgement",
      failure_reason: t.type,
    });
  }
  handleReservedWindowClosed(e) {
    this.isCurrentReservation(e) &&
      ((e.stopWatchingClose = null),
      this.cancelReservationDialog(e),
      e.transaction.windowClosed());
  }
  presentationTelemetry(e) {
    return {
      ...x(e.campaign),
      current_release: e.attempt.currentRelease,
      delivery_attempt_id: e.attempt.deliveryAttemptId,
      presentation_context: e.attempt.presentationOpportunity.context,
    };
  }
  emitFailure(e, t, s) {
    if (!this.isAttemptActive(e)) return;
    const r = {
        current_release: e.currentRelease,
        delivery_attempt_id: e.deliveryAttemptId,
        failure_stage: s.failure_stage,
        failure_reason: s.failure_reason,
      },
      a =
        t === null
          ? r
          : {
              ...r,
              ...x(t),
              presentation_context: e.presentationOpportunity.context,
            };
    this.deps.telemetry.sendEvent("in_app_message_delivery_failed", a, w);
  }
  isAttemptActive(e) {
    return (
      q(this.orchestrationState, e) &&
      this.host.isPresentationOpportunityCurrent(e.presentationOpportunity)
    );
  }
  currentAttemptWindow(e) {
    if (!this.host.isPresentationOpportunityCurrent(e.presentationOpportunity))
      return null;
    const t = this.host.getEligibleFocusedWindow();
    return t?.id === e.windowId ? t : null;
  }
  attemptWindowIsCurrent(e, t) {
    const s = this.currentAttemptWindow(e);
    return s !== null && (t === void 0 || s === t)
      ? !0
      : (this.completeAttemptForRecheck(e), !1);
  }
  completeAttemptForRecheck(e) {
    if (this.isAttemptActive(e)) {
      if (
        (this.dispatch({ type: "update_ready_claimed" }),
        this.host.updateReadyOwnsDelivery())
      ) {
        this.host.requestEligibilityRecheck();
        return;
      }
      this.dispatch({ type: "eligibility_requested" });
    }
  }
  invalidateAttemptForStaleWindow() {
    const e = this.orchestrationState.activeAttempt;
    if (e === null || this.reservation?.mounted) return;
    const t = this.host.getEligibleFocusedWindow(),
      s = this.reservation?.window ?? null;
    (this.host.isPresentationOpportunityCurrent(e.presentationOpportunity) &&
      t?.id === e.windowId &&
      (s === null || s === t)) ||
      this.dispatch({ type: "update_ready_claimed" });
  }
  isCurrentReservation(e) {
    return (
      this.reservation === e &&
      U(this.orchestrationState, e.attempt.deliveryAttemptId, e.dialogId) &&
      this.isAttemptActive(e.attempt)
    );
  }
  finishReservation(e) {
    e !== null && e.transaction.terminate();
  }
  completeReservation(e) {
    (e.stopWatchingClose?.(),
      (e.stopWatchingClose = null),
      e.mounted &&
        this.host.finishMountedPresentation(e.attempt.presentationOpportunity),
      this.reservation === e && (this.reservation = null),
      this.dispatch({
        type: "reservation_finished",
        deliveryAttemptId: e.attempt.deliveryAttemptId,
        dialogId: e.dialogId,
      }));
  }
  suppressDowngrade(e) {
    this.isAttemptActive(e) &&
      this.dispatch({ type: "attempt_suppressed", attempt: e });
  }
  cancelReservationDialog(e) {
    if (e !== null)
      try {
        this.deps.dialogs.cancelDialog(e.window, e.dialogId);
      } catch {}
  }
  cancelReservedDialog(e) {
    const t = this.reservation;
    t === null ||
      t.attempt.deliveryAttemptId !== e.deliveryAttemptId ||
      t.dialogId !== e.dialogId ||
      t.window.id !== e.windowId ||
      (this.cancelReservationDialog(t), this.finishReservation(t));
  }
}
function ke() {
  return {
    targetRelease: null,
    accountWatermarkLoaded: !1,
    updateReadyNotificationWatermark: null,
    eligible: !1,
    automaticDeliveryDisabled: !1,
    fallbackAttempted: !1,
    phase: "idle",
  };
}
function m(i) {
  return { state: i, effects: [] };
}
function X(i) {
  if (!i.accountWatermarkLoaded || i.targetRelease === null) return !1;
  const e = i.updateReadyNotificationWatermark;
  return e !== null && n.compareReleases(e, i.targetRelease) >= 0;
}
function C(i) {
  return i.automaticDeliveryDisabled ||
    !i.eligible ||
    !i.accountWatermarkLoaded ||
    i.targetRelease === null ||
    i.phase !== "idle"
    ? m(i)
    : X(i)
      ? { state: { ...i, phase: "consumed" }, effects: [] }
      : {
          state: { ...i, phase: "resolving" },
          effects: [{ type: "resolve", targetRelease: i.targetRelease }],
        };
}
function g(i, e) {
  return i.targetRelease === e.targetRelease;
}
function S(i) {
  return i.phase === "awaiting_custom_mount" || i.phase === "persisting_custom"
    ? [{ type: "close_custom" }]
    : i.phase === "awaiting_fallback_mount" || i.phase === "persisting_fallback"
      ? [{ type: "close_fallback" }]
      : [];
}
function P(i) {
  return i.targetRelease === null || i.fallbackAttempted
    ? m(i)
    : {
        state: {
          ...i,
          fallbackAttempted: !0,
          phase: "awaiting_fallback_mount",
        },
        effects: [{ type: "present_fallback", targetRelease: i.targetRelease }],
      };
}
function Se(i) {
  return {
    state: { ...i, automaticDeliveryDisabled: !0, phase: "disabled" },
    effects: S(i),
  };
}
function Oe(i, e) {
  switch (e.type) {
    case "ready": {
      if (i.targetRelease === e.targetRelease) return C(i);
      const t = {
        ...i,
        targetRelease: e.targetRelease,
        fallbackAttempted: !1,
        phase: "idle",
      };
      return C(t);
    }
    case "account_loaded": {
      const t = {
        ...i,
        accountWatermarkLoaded: !0,
        updateReadyNotificationWatermark: e.updateReadyNotificationWatermark,
      };
      if (X(t)) return { state: { ...t, phase: "consumed" }, effects: S(i) };
      const s = t.phase === "consumed" ? { ...t, phase: "idle" } : t;
      return C(s);
    }
    case "local_read_failed":
    case "local_write_failed":
      return Se(i);
    case "identity_changed":
      return {
        state: {
          ...i,
          accountWatermarkLoaded: !1,
          updateReadyNotificationWatermark: null,
          eligible: !1,
          fallbackAttempted: !1,
          phase: i.automaticDeliveryDisabled ? "disabled" : "idle",
        },
        effects: S(i),
      };
    case "eligibility_changed": {
      const t = { ...i, eligible: e.eligible };
      return !e.eligible && i.phase === "resolving"
        ? { state: { ...t, phase: "idle" }, effects: [] }
        : C(t);
    }
    case "resolve_succeeded":
      return !g(i, e) || i.phase !== "resolving"
        ? m(i)
        : e.campaign === null
          ? P(i)
          : {
              state: { ...i, phase: "awaiting_custom_mount" },
              effects: [{ type: "present_custom", campaign: e.campaign }],
            };
    case "resolve_failed":
      return !g(i, e) || i.phase !== "resolving" ? m(i) : P(i);
    case "custom_rejected":
      return !g(i, e) || i.phase !== "awaiting_custom_mount"
        ? m(i)
        : P({ ...i, phase: "idle" });
    case "custom_window_closed":
      return !g(i, e) || i.phase !== "awaiting_custom_mount"
        ? m(i)
        : { state: { ...i, eligible: !1, phase: "idle" }, effects: [] };
    case "fallback_window_closed":
      return !g(i, e) || i.phase !== "awaiting_fallback_mount"
        ? m(i)
        : {
            state: { ...i, eligible: !1, fallbackAttempted: !1, phase: "idle" },
            effects: [],
          };
    case "custom_mounted":
      return !g(i, e) || i.phase !== "awaiting_custom_mount"
        ? m(i)
        : { state: { ...i, phase: "persisting_custom" }, effects: [] };
    case "fallback_mounted":
      return !g(i, e) || i.phase !== "awaiting_fallback_mount"
        ? m(i)
        : { state: { ...i, phase: "persisting_fallback" }, effects: [] };
    case "custom_persisted":
      return !g(i, e) || i.phase !== "persisting_custom"
        ? m(i)
        : {
            state: {
              ...i,
              updateReadyNotificationWatermark: e.targetRelease,
              phase: "consumed",
            },
            effects: [],
          };
    case "fallback_persisted":
      return !g(i, e) || i.phase !== "persisting_fallback"
        ? m(i)
        : {
            state: {
              ...i,
              updateReadyNotificationWatermark: e.targetRelease,
              phase: "consumed",
            },
            effects: [],
          };
    case "readiness_cleared":
      return {
        state: {
          ...i,
          targetRelease: null,
          fallbackAttempted: !1,
          eligible: !1,
          phase: i.automaticDeliveryDisabled ? "disabled" : "idle",
        },
        effects: S(i),
      };
  }
}
function Ee(i, e) {
  return (
    i.deliveryAttemptId === e.deliveryAttemptId &&
    i.authGeneration === e.authGeneration &&
    i.userId === e.userId &&
    i.windowId === e.windowId &&
    i.currentRelease === e.currentRelease &&
    i.targetRelease === e.targetRelease &&
    i.presentationOpportunity.id === e.presentationOpportunity.id &&
    i.presentationOpportunity.context === e.presentationOpportunity.context
  );
}
const _ = "InAppMessagingManager.ts";
class qe {
  constructor(e, t) {
    ((this.deps = e), (this.host = t));
  }
  updateReadyState = ke();
  disposed = !1;
  authGeneration = 0;
  currentRelease = null;
  activeAttempt = null;
  activeAccount = null;
  reservation = null;
  fallbackReason = null;
  eligibilityInFlight = !1;
  eligibilityRecheckRequested = !1;
  reportedOwnership = !1;
  setSnapshot(e) {
    if (!this.disposed) {
      if (e === null) {
        (this.clearActiveDelivery(),
          (this.eligibilityRecheckRequested = !1),
          this.dispatch({ type: "readiness_cleared" }),
          this.reportOwnership());
        return;
      }
      (this.updateReadyState.targetRelease !== e.targetRelease &&
        (this.clearActiveDelivery(),
        this.dispatch({ type: "identity_changed" })),
        this.dispatch({ type: "ready", targetRelease: e.targetRelease }),
        this.reportOwnership());
    }
  }
  requestEligibilityCheck() {
    if (this.disposed) return;
    if (!this.ownsDelivery()) {
      this.reportOwnership();
      return;
    }
    const e = this.host.getPresentationOpportunity();
    if (e !== null) {
      if (
        (this.activeAttempt !== null &&
          this.reservation?.mounted !== !0 &&
          !this.preMountContextIsCurrent(
            this.activeAttempt,
            this.reservation?.window,
          ) &&
          this.invalidateAttemptForStaleContext(),
        this.eligibilityInFlight || this.activeAttempt !== null)
      ) {
        this.eligibilityRecheckRequested = !0;
        return;
      }
      this.captureCurrentRelease() && this.checkEligibility(e);
    }
  }
  ownsDelivery() {
    if (this.disposed) return !1;
    const e = this.activeAttempt !== null || this.reservation !== null;
    return (
      this.updateReadyState.targetRelease !== null &&
      !this.updateReadyState.automaticDeliveryDisabled &&
      (this.updateReadyState.phase !== "consumed" || e)
    );
  }
  invalidateIdentity() {
    this.disposed ||
      ((this.authGeneration += 1),
      this.clearActiveDelivery(),
      this.dispatch({ type: "identity_changed" }),
      this.reportOwnership());
  }
  dispose() {
    this.disposed ||
      (this.clearActiveDelivery(),
      this.dispatch({ type: "readiness_cleared" }),
      (this.disposed = !0),
      this.reportOwnership());
  }
  dispatch(e) {
    const t = Oe(this.updateReadyState, e);
    ((this.updateReadyState = t.state), this.executeEffects(t.effects));
  }
  executeEffects(e) {
    for (const t of e) {
      const s = this.activeAttempt;
      if (t.type === "resolve") {
        s?.targetRelease === t.targetRelease && this.resolveAttempt(s);
        continue;
      }
      if (t.type === "present_custom") {
        s?.targetRelease === t.campaign.targetRelease &&
          this.presentCustom(s, t.campaign);
        continue;
      }
      if (t.type === "present_fallback") {
        s?.targetRelease === t.targetRelease && this.presentFallback(s);
        continue;
      }
      const r = t.type === "close_custom" ? "custom" : "default";
      this.reservation?.source === r &&
        this.cancelReservation(this.reservation);
    }
  }
  captureCurrentRelease() {
    if (this.currentRelease !== null) return !0;
    try {
      return (
        (this.currentRelease = n.normalizeRelease(this.deps.getAppVersion())),
        !0
      );
    } catch {
      return !1;
    }
  }
  async checkEligibility(e) {
    const t = this.updateReadyState.targetRelease,
      s = this.currentRelease;
    if (t === null || s === null || !this.ownsDelivery()) return;
    const r = this.host.getEligibleFocusedWindow();
    if (r !== null) {
      this.eligibilityInFlight = !0;
      try {
        const a = this.authGeneration;
        let l = null;
        try {
          l = (await this.deps.auth.getUser()).user?.id ?? null;
        } catch {
          return;
        }
        if (
          l === null ||
          !this.eligibilityContextIsCurrent(a, t, r, e) ||
          this.host.getPresentationOpportunity() !== e ||
          !this.host.claimPresentationOpportunity(e)
        )
          return;
        let u = null;
        try {
          u = await this.deps.localState.readAccount(l);
        } catch {
          u = null;
        }
        if (!this.eligibilityContextIsCurrent(a, t, r, e)) return;
        if (u === null || u.status === "suppress_for_launch") {
          this.disableForLocalReadFailure();
          return;
        }
        const c = {
          deliveryAttemptId: this.deps.randomUUID(),
          authGeneration: a,
          userId: l,
          windowId: r.id,
          currentRelease: s,
          targetRelease: t,
          presentationOpportunity: e,
        };
        ((this.activeAccount = u.value),
          this.dispatch({ type: "eligibility_changed", eligible: !1 }),
          this.dispatch({
            type: "account_loaded",
            updateReadyNotificationWatermark:
              u.value.updateReadyNotificationWatermark,
          }),
          (this.activeAttempt = c),
          this.dispatch({ type: "eligibility_changed", eligible: !0 }),
          this.updateReadyState.phase === "consumed" &&
            (this.clearAttempt(),
            this.drainEligibilityRecheck(),
            this.reportOwnership()));
      } finally {
        ((this.eligibilityInFlight = !1),
          this.activeAttempt !== null
            ? (this.eligibilityRecheckRequested = !1)
            : this.drainEligibilityRecheck());
      }
    }
  }
  eligibilityContextIsCurrent(e, t, s, r) {
    return (
      !this.disposed &&
      this.authGeneration === e &&
      this.updateReadyState.targetRelease === t &&
      this.host.getEligibleFocusedWindow() === s &&
      this.host.isPresentationOpportunityCurrent(r)
    );
  }
  disableForLocalReadFailure() {
    (this.dispatch({ type: "local_read_failed" }),
      this.clearAttempt(),
      this.reportOwnership());
  }
  async resolveAttempt(e) {
    const t = this.activeAccount;
    if (t === null || !this.preMountContextIsCurrent(e)) return;
    const s = await we({
      authFetch: this.deps.authFetch,
      apiUrl: this.deps.apiUrl,
      currentRelease: e.currentRelease,
      targetRelease: e.targetRelease,
      updateReadyNotificationWatermark: t.updateReadyNotificationWatermark,
      seenCampaignIds: Object.keys(t.views),
    });
    if (!this.preMountContextIsCurrent(e)) {
      (this.invalidateAttemptForStaleContext(), this.drainEligibilityRecheck());
      return;
    }
    if (s.type === "custom") {
      ((this.fallbackReason = null),
        this.dispatch({
          type: "resolve_succeeded",
          targetRelease: e.targetRelease,
          campaign: s.campaign,
        }),
        this.reportOwnership());
      return;
    }
    if (s.reason === "no_campaign") {
      ((this.fallbackReason = "no_campaign"),
        this.dispatch({
          type: "resolve_succeeded",
          targetRelease: e.targetRelease,
          campaign: null,
        }),
        this.reportOwnership());
      return;
    }
    ((this.fallbackReason = s.reason),
      this.emitResolverFailure(e, s.reason),
      this.dispatch({
        type: "resolve_failed",
        targetRelease: e.targetRelease,
        reason: s.reason,
      }),
      this.reportOwnership());
  }
  presentCustom(e, t) {
    const s = this.findWindow(e.windowId);
    if (
      s === null ||
      this.host.getEligibleFocusedWindow() !== s ||
      !this.preMountContextIsCurrent(e) ||
      this.reservation !== null
    ) {
      this.dispatch({
        type: "custom_rejected",
        targetRelease: e.targetRelease,
      });
      return;
    }
    const r = this.createReservation({
      attempt: e,
      dialogId: e.deliveryAttemptId,
      source: "custom",
      campaign: t,
      telemetry: this.customTelemetry(e, t),
      window: s,
    });
    this.reserve(r);
    const a = {
      id: r.dialogId,
      title: t.title,
      description: t.description,
      contentType: "in_app_message",
      buttons: [
        {
          title: "Restart Now",
          variant: "default",
          callback: async () => {
            this.acknowledgeAction(r, "restart_now") &&
              (await this.deps.updates.installReadyUpdate());
          },
        },
        {
          title: "Later",
          variant: "secondary",
          callback: () => {
            this.acknowledgeAction(r, "later");
          },
        },
      ],
      metaData: {
        inAppMessage: { imageUrl: t.imageUrl, imageAlt: t.imageAlt },
      },
      onClose: () => this.acknowledgeDismissal(r),
      onMounted: () => this.mountReservation(r),
      onImageFailed: () => r.transaction.imageFailed(),
    };
    let l;
    try {
      l = this.deps.dialogs.showDialog(s, a);
    } catch {
      r.transaction.dialogRejected();
      return;
    }
    if (l === "duplicate") {
      r.transaction.dialogRejected();
      return;
    }
    if (l === "queued") {
      this.deferQueuedPresentation(r);
      return;
    }
    r.renderAccepted = !0;
  }
  presentFallback(e) {
    const t = this.findWindow(e.windowId);
    if (
      t === null ||
      this.host.getEligibleFocusedWindow() !== t ||
      !this.preMountContextIsCurrent(e) ||
      this.reservation !== null
    ) {
      this.retryAfterPreMountClose(e, "default");
      return;
    }
    const s = this.createReservation({
      attempt: e,
      dialogId: `${e.deliveryAttemptId}-fallback`,
      source: "default",
      campaign: null,
      telemetry: this.defaultTelemetry(e, this.fallbackReason ?? "no_campaign"),
      window: t,
    });
    this.reserve(s);
    let r;
    try {
      r = this.deps.updates.showReadyToInstallPrompt(
        e.targetRelease,
        () => this.mountReservation(s),
        s.dialogId,
        () => this.acknowledgeDismissal(s),
        (a) => {
          this.acknowledgeAction(s, a);
        },
      );
    } catch {
      r = "unavailable";
    }
    if (r === "duplicate" || r === "unavailable") {
      s.transaction.dialogRejected();
      return;
    }
    if (r === "queued") {
      this.deferQueuedPresentation(s);
      return;
    }
    s.renderAccepted = !0;
  }
  createReservation(e) {
    let t;
    const s = new L({
      persistView: () => this.persistReservation(t),
      emitImpression: () => {
        this.isReservationCurrent(t) &&
          this.deps.telemetry.sendEvent(
            "in_app_message_impression",
            t.telemetry,
            _,
          );
      },
      emitAcknowledgement: (r) => {
        this.emitAcknowledgement(t, r);
      },
      emitImageFailure: () => {
        this.emitImageFailure(t);
      },
      emitFailure: (r) => {
        this.handlePresentationFailure(t, r);
      },
      finish: () => {
        this.finishReservation(t);
      },
    });
    return (
      (t = {
        ...e,
        transaction: s,
        mounted: !1,
        acknowledged: !1,
        renderAccepted: !1,
        releaseAttemptOnFinish: !1,
        stopWatchingClose: null,
      }),
      t
    );
  }
  reserve(e) {
    const t = () => {
      this.reservation === e &&
        ((e.stopWatchingClose = null),
        (e.releaseAttemptOnFinish = !0),
        e.transaction.windowClosed());
    };
    ((this.reservation = e),
      (e.stopWatchingClose = e.window.onClosed(t)),
      this.deps.telemetry.sendEvent("in_app_message_selected", e.telemetry, _),
      this.reportOwnership());
  }
  mountReservation(e) {
    if (!this.preMountContextIsCurrent(e.attempt, e.window)) {
      (this.invalidateAttemptForStaleContext(),
        (this.eligibilityRecheckRequested = !0),
        this.drainEligibilityRecheck());
      return;
    }
    if (!this.host.markPresentationMounted(e.attempt.presentationOpportunity)) {
      (this.invalidateAttemptForStaleContext(),
        (this.eligibilityRecheckRequested = !0),
        this.drainEligibilityRecheck());
      return;
    }
    ((e.mounted = !0),
      this.dispatch({
        type: e.source === "custom" ? "custom_mounted" : "fallback_mounted",
        targetRelease: e.attempt.targetRelease,
      }),
      e.transaction.mounted());
  }
  async persistReservation(e) {
    const t = e.campaign,
      s = this.deps.now(),
      r =
        t === null
          ? void 0
          : {
              campaignId: t.id,
              revision: t.revision,
              targetRelease: e.attempt.targetRelease,
              firstViewedAt: s,
              lastViewedAt: s,
              viewCount: 1,
            };
    let a = null;
    try {
      a = await this.deps.localState.recordUpdateReadyImpression({
        userId: e.attempt.userId,
        targetRelease: e.attempt.targetRelease,
        campaignView: r,
      });
    } catch {
      a = null;
    }
    return this.isReservationCurrent(e)
      ? a === null
        ? { success: !1, failure: "write_failed" }
        : a.status === "suppress_for_launch"
          ? { success: !1, failure: a.reason }
          : (this.dispatch({
              type:
                e.source === "custom"
                  ? "custom_persisted"
                  : "fallback_persisted",
              targetRelease: e.attempt.targetRelease,
            }),
            this.reportOwnership(),
            { success: !0 })
      : { success: !0 };
  }
  acknowledgeAction(e, t) {
    return !this.isReservationCurrent(e) || !e.mounted || e.acknowledged
      ? !1
      : ((e.acknowledged = !0),
        e.transaction.acknowledge({ type: "action", action: t }),
        !0);
  }
  acknowledgeDismissal(e) {
    !this.isReservationCurrent(e) ||
      e.acknowledged ||
      ((e.acknowledged = !0), e.transaction.acknowledge({ type: "dismissed" }));
  }
  emitAcknowledgement(e, t) {
    this.isReservationCurrent(e) &&
      (t.type === "action" &&
        this.deps.telemetry.sendEvent(
          "in_app_message_action",
          { ...e.telemetry, action: t.action },
          _,
        ),
      (e.releaseAttemptOnFinish = !0));
  }
  emitImageFailure(e) {
    !this.isReservationCurrent(e) ||
      e.campaign === null ||
      this.deps.telemetry.sendEvent(
        "in_app_message_image_failed",
        {
          ...this.customTelemetry(e.attempt, e.campaign),
          failure_reason: "load_or_decode_error",
        },
        _,
      );
  }
  handlePresentationFailure(e, t) {
    if (this.isReservationCurrent(e)) {
      if (t.type === "persistence_failed") {
        (this.emitPersistenceFailure(e.telemetry, t.failure),
          this.dispatch({ type: "local_write_failed" }),
          this.clearAttempt(),
          (this.fallbackReason = null),
          this.drainEligibilityRecheck(),
          this.reportOwnership());
        return;
      }
      if (
        (t.type === "dialog_rejected" &&
          !e.renderAccepted &&
          this.emitRenderRejection(e),
        t.type === "window_closed" && (e.releaseAttemptOnFinish = !1),
        this.finishReservation(e),
        t.type === "dialog_rejected" && e.source === "custom")
      ) {
        (e.renderAccepted || (this.fallbackReason = "invalid_response"),
          this.dispatch({
            type: "custom_rejected",
            targetRelease: e.attempt.targetRelease,
          }),
          this.reportOwnership());
        return;
      }
      ((e.releaseAttemptOnFinish = !0),
        this.retryAfterPreMountClose(e.attempt, e.source));
    }
  }
  retryAfterPreMountClose(e, t) {
    this.isAttemptCurrent(e) &&
      (this.dispatch({
        type:
          t === "custom" ? "custom_window_closed" : "fallback_window_closed",
        targetRelease: e.targetRelease,
      }),
      this.clearAttempt(),
      this.drainEligibilityRecheck(),
      this.reportOwnership());
  }
  deferQueuedPresentation(e) {
    if (!this.isReservationCurrent(e)) return;
    const t = e.attempt;
    ((this.eligibilityRecheckRequested = !1),
      this.cancelReservation(e),
      this.dispatch({
        type:
          e.source === "custom"
            ? "custom_window_closed"
            : "fallback_window_closed",
        targetRelease: t.targetRelease,
      }),
      this.clearAttempt(),
      this.reportOwnership());
  }
  findWindow(e) {
    return (
      this.deps.windowManager
        .getOpenedWindowsForAllProfiles()
        .find((t) => t.id === e) ?? null
    );
  }
  isAttemptCurrent(e) {
    const t = this.activeAttempt;
    return (
      t !== null &&
      !this.disposed &&
      this.authGeneration === e.authGeneration &&
      this.updateReadyState.targetRelease === e.targetRelease &&
      Ee(t, e)
    );
  }
  isReservationCurrent(e) {
    return this.reservation === e && this.isAttemptCurrent(e.attempt);
  }
  preMountContextIsCurrent(e, t) {
    if (
      !this.isAttemptCurrent(e) ||
      !this.host.isPresentationOpportunityCurrent(e.presentationOpportunity)
    )
      return !1;
    const s = this.host.getEligibleFocusedWindow();
    return s?.id === e.windowId && (t === void 0 || s === t);
  }
  invalidateAttemptForStaleContext() {
    const e = this.activeAttempt;
    e !== null &&
      (this.reservation?.mounted ||
        this.preMountContextIsCurrent(e, this.reservation?.window) ||
        (this.clearActiveDelivery(),
        this.dispatch({ type: "identity_changed" }),
        this.reportOwnership()));
  }
  clearActiveDelivery() {
    (this.clearAttempt(),
      (this.fallbackReason = null),
      this.reservation !== null && this.cancelReservation(this.reservation));
  }
  clearAttempt() {
    ((this.activeAttempt = null), (this.activeAccount = null));
  }
  cancelReservation(e) {
    try {
      this.deps.dialogs.cancelDialog(e.window, e.dialogId);
    } catch {}
    e.transaction.terminate();
  }
  finishReservation(e) {
    (e.stopWatchingClose?.(),
      (e.stopWatchingClose = null),
      e.mounted &&
        this.host.finishMountedPresentation(e.attempt.presentationOpportunity),
      this.reservation === e && (this.reservation = null),
      e.releaseAttemptOnFinish &&
        this.isAttemptCurrent(e.attempt) &&
        (this.clearAttempt(),
        (this.fallbackReason = null),
        this.drainEligibilityRecheck()),
      this.reportOwnership());
  }
  drainEligibilityRecheck() {
    this.eligibilityRecheckRequested &&
      ((this.eligibilityRecheckRequested = !1), this.requestEligibilityCheck());
  }
  reportOwnership() {
    const e = this.ownsDelivery();
    e !== this.reportedOwnership &&
      ((this.reportedOwnership = e), this.host.onOwnershipChanged(e));
  }
  customTelemetry(e, t) {
    return {
      trigger_type: "update_ready",
      message_source: "custom",
      message_key: t.slug,
      campaign_id: t.id,
      campaign_slug: t.slug,
      campaign_revision: t.revision,
      target_release: e.targetRelease,
      delivery_reason: "update_ready",
      current_release: e.currentRelease,
      delivery_attempt_id: e.deliveryAttemptId,
      presentation_context: e.presentationOpportunity.context,
    };
  }
  defaultTelemetry(e, t) {
    return {
      ...Ae({ targetRelease: e.targetRelease, fallbackReason: t }),
      current_release: e.currentRelease,
      delivery_attempt_id: e.deliveryAttemptId,
      presentation_context: e.presentationOpportunity.context,
    };
  }
  emitRenderRejection(e) {
    this.deps.telemetry.sendEvent(
      "in_app_message_delivery_failed",
      {
        ...e.telemetry,
        failure_stage: "render_acknowledgement",
        failure_reason: "dialog_rejected",
      },
      _,
    );
  }
  emitResolverFailure(e, t) {
    let s;
    (t === "invalid_response"
      ? (s = {
          failure_stage: "response_validation",
          failure_reason: "invalid_response",
        })
      : (s = { failure_stage: "resolver", failure_reason: t }),
      this.deps.telemetry.sendEvent(
        "in_app_message_delivery_failed",
        { ...this.defaultTelemetry(e, t), ...s },
        _,
      ));
  }
  emitPersistenceFailure(e, t) {
    this.deps.telemetry.sendEvent(
      "in_app_message_delivery_failed",
      { ...e, failure_stage: "local_persistence", failure_reason: H(t) },
      _,
    );
  }
}
class $ {
  constructor(e) {
    ((this.deps = e),
      (this.releaseController = new Ce(e, {
        getEligibleFocusedWindow: () => this.eligibleFocusedWindow(),
        updateReadyOwnsDelivery: () =>
          this.updateReadyController.ownsDelivery(),
        requestEligibilityRecheck: () => this.handleReleaseEligibilityRecheck(),
        getPresentationOpportunity: () => this.getPresentationOpportunity(),
        claimPresentationOpportunity: (t) =>
          this.claimPresentationOpportunity(t),
        markPresentationMounted: (t) => this.markPresentationMounted(t),
        finishMountedPresentation: (t) => this.finishMountedPresentation(t),
        isPresentationOpportunityCurrent: (t) =>
          this.isPresentationOpportunityCurrent(t),
      })),
      (this.updateReadyController = new qe(e, {
        getEligibleFocusedWindow: () => this.eligibleFocusedWindow(),
        onOwnershipChanged: (t) => this.handleUpdateReadyOwnership(t),
        getPresentationOpportunity: () => this.getPresentationOpportunity(),
        claimPresentationOpportunity: (t) =>
          this.claimPresentationOpportunity(t),
        markPresentationMounted: (t) => this.markPresentationMounted(t),
        finishMountedPresentation: (t) => this.finishMountedPresentation(t),
        isPresentationOpportunityCurrent: (t) =>
          this.isPresentationOpportunityCurrent(t),
      })));
  }
  started = !1;
  disposed = !1;
  authenticatedUserId = null;
  authIdentityEstablished = !1;
  authIdentityRevision = 0;
  updateReadyStartupSucceeded = !1;
  releaseAuthBootstrapWaiter = null;
  presentationGate = new fe();
  appBlurTimer = null;
  releaseController;
  updateReadyController;
  lifecycleCleanups = [];
  windowListenerCleanups = new Map();
  authStateListener = (e) => {
    this.authIdentityRevision += 1;
    const t = e.isAuthenticated ? e.userId : null,
      s = this.authIdentityEstablished && t !== this.authenticatedUserId;
    ((this.authIdentityEstablished = !0),
      (this.authenticatedUserId = t),
      this.releaseAuthBootstrapWaiter?.(),
      s &&
        (this.releaseController.invalidateIdentity(),
        this.updateReadyController.invalidateIdentity()),
      t !== null && this.requestDeliveryChecks());
  };
  start() {
    this.started ||
      this.disposed ||
      ((this.started = !0), this.registerLifecycle(), this.waitForStartup());
  }
  dispose() {
    if (this.disposed) return;
    this.disposed = !0;
    const e = this.releaseAuthBootstrapWaiter;
    ((this.releaseAuthBootstrapWaiter = null),
      e?.(),
      this.clearAppBlurTimer(),
      this.presentationGate.dispose(),
      this.releaseController.dispose(),
      this.updateReadyController.dispose(),
      this.cleanupLifecycle());
  }
  registerLifecycle() {
    (this.deps.auth.on("auth-state-changed", this.authStateListener),
      this.lifecycleCleanups.push(() => {
        this.deps.auth.off("auth-state-changed", this.authStateListener);
      }),
      this.lifecycleCleanups.push(
        this.deps.windowManager.onWindowRegistered((e) => {
          (this.attachWindow(e), this.requestDeliveryChecks());
        }),
      ));
    for (const e of this.deps.windowManager.getOpenedWindowsForAllProfiles())
      this.attachWindow(e);
  }
  registerUpdateReadyLifecycle() {
    const e = this.deps.updates.subscribeToUpdateReady((t) => {
      (this.updateReadyController.setSnapshot(t),
        this.requestUpdateReadyEligibilityCheck());
    });
    this.lifecycleCleanups.push(e);
  }
  cleanupLifecycle() {
    for (const e of this.windowListenerCleanups.values()) e();
    this.windowListenerCleanups.clear();
    for (const e of this.lifecycleCleanups.splice(0).toReversed()) e();
  }
  async waitForStartup() {
    try {
      if ((await this.deps.whenAppReady(), this.disposed)) return;
      (this.registerUpdateReadyLifecycle(),
        await this.deps.whenStartupRestored());
    } catch {
      return;
    }
    if (
      this.disposed ||
      (await this.establishInitialAuthIdentity(), this.disposed)
    )
      return;
    (this.presentationGate.openStartup(),
      this.deps.windowManager
        .getOpenedWindowsForAllProfiles()
        .some((t) => t.isFocused()) || this.presentationGate.markAppInactive(),
      await this.releaseController.initializeInstallation());
  }
  async establishInitialAuthIdentity() {
    if (this.authIdentityEstablished) return;
    const e = this.authIdentityRevision,
      t = Promise.withResolvers();
    ((this.releaseAuthBootstrapWaiter = t.resolve),
      this.loadInitialAuthIdentity(e, t.resolve),
      await t.promise,
      this.releaseAuthBootstrapWaiter === t.resolve &&
        (this.releaseAuthBootstrapWaiter = null));
  }
  async loadInitialAuthIdentity(e, t) {
    try {
      const s = await this.deps.auth.getUser();
      if (
        this.disposed ||
        this.authIdentityRevision !== e ||
        this.authIdentityEstablished
      )
        return;
      ((this.authenticatedUserId = s.user?.id ?? null),
        (this.authIdentityEstablished = !0));
    } catch {
    } finally {
      t();
    }
  }
  attachWindow(e) {
    if (this.disposed || this.windowListenerCleanups.has(e)) return;
    let t = !1,
      s = () => {},
      r = () => {};
    const a = () => {
      t ||
        ((t = !0),
        s(),
        r(),
        this.windowListenerCleanups.delete(e),
        this.disposed || this.scheduleAppInactiveCheck());
    };
    ((s = e.onFocusChanged((l) => {
      l ? this.handleWindowFocus() : this.scheduleAppInactiveCheck();
    })),
      (r = e.onClosed(a)),
      this.windowListenerCleanups.set(e, a),
      e.isFocused() && this.handleWindowFocus());
  }
  handleWindowFocus() {
    (this.clearAppBlurTimer(),
      this.presentationGate.openRefocus(),
      this.requestUpdateReadyEligibilityCheck(),
      this.presentationGate.available() !== null &&
        this.releaseController.requestEligibilityCheck());
  }
  scheduleAppInactiveCheck() {
    (this.clearAppBlurTimer(),
      (this.appBlurTimer = setTimeout(() => {
        ((this.appBlurTimer = null),
          this.deps.windowManager
            .getOpenedWindowsForAllProfiles()
            .some((t) => t.isFocused()) ||
            this.presentationGate.markAppInactive());
      }, he)));
  }
  clearAppBlurTimer() {
    this.appBlurTimer !== null &&
      (clearTimeout(this.appBlurTimer), (this.appBlurTimer = null));
  }
  getPresentationOpportunity() {
    return this.presentationGate.available();
  }
  claimPresentationOpportunity(e) {
    return this.presentationGate.claim(e);
  }
  markPresentationMounted(e) {
    return this.presentationGate.markMounted(e);
  }
  finishMountedPresentation(e) {
    this.presentationGate.finishMounted(e);
  }
  isPresentationOpportunityCurrent(e) {
    return this.presentationGate.isCurrent(e);
  }
  requestDeliveryChecks() {
    (this.requestUpdateReadyEligibilityCheck(),
      this.releaseController.requestEligibilityCheck());
  }
  requestUpdateReadyEligibilityCheck() {
    this.updateReadyStartupSucceeded &&
      this.updateReadyController.requestEligibilityCheck();
  }
  handleReleaseEligibilityRecheck() {
    ((this.updateReadyStartupSucceeded = !0),
      this.updateReadyController.requestEligibilityCheck());
  }
  handleUpdateReadyOwnership(e) {
    if (e) {
      this.presentationGate.available() !== null &&
        this.releaseController.cancelForUpdateReady();
      return;
    }
    this.releaseController.requestEligibilityCheck();
  }
  eligibleFocusedWindow() {
    if (!this.authIdentityEstablished || this.authenticatedUserId === null)
      return null;
    const e = this.deps.windowManager.getFocusedWindow();
    return !pe({
      hasCompletedOnboarding: this.deps.hasCompletedOnboarding(),
      hasFocusedWindow: e !== null,
      isDestroyed: e ? !e.isAlive() : !1,
      isVisible: e?.isShowing() ?? !1,
      isIncognito: e?.isIncognito ?? !1,
      isOnboardingWindow: e?.surface === "onboarding",
    }) || e === null
      ? null
      : e;
  }
}
function We(i) {
  const e = new ue({
    settings: {
      readInstallation: () =>
        n.globalSettings.get("inAppMessaging.installation"),
      writeInstallation: (t) =>
        n.globalSettings.set("inAppMessaging.installation", t),
      readAccounts: () => n.globalSettings.get("inAppMessaging.accounts"),
      writeAccounts: (t) => n.globalSettings.set("inAppMessaging.accounts", t),
    },
    whenAppReady: () => W.app.whenReady(),
  });
  return new $({
    whenAppReady: () => W.app.whenReady(),
    whenStartupRestored: () => Promise.resolve(),
    getAppVersion: () => W.app.getVersion(),
    getPreviousAppVersion: () => n.updateManager.getPreviousVersion(),
    auth: n.authManager,
    windowManager: {
      getOpenedWindowsForAllProfiles: () => [...i.getManagedWindows()],
      getFocusedWindow: () => i.getFocusedManagedWindow() ?? null,
      onWindowRegistered: (t) => i.onManagedWindowRegistered(t),
    },
    hasCompletedOnboarding: () =>
      n.globalSettings.get("hasCompletedOnboarding"),
    localState: e,
    updates: {
      subscribeToUpdateReady: (t) => n.updateManager.subscribeToUpdateReady(t),
      showReadyToInstallPrompt: (t, s, r, a, l) =>
        n.updateManager.showReadyToInstallPrompt(t, s, r, a, l),
      installReadyUpdate: () => n.updateManager.installReadyUpdate(),
    },
    authFetch: n.authFetch,
    apiUrl: n.config.app.apiUrl,
    dialogs: {
      showDialog: (t, s) => n.dialogManager.showDialog(t.dialogs, s),
      cancelDialog: (t, s) => void n.dialogManager.cancelDialog(t.dialogs, s),
    },
    now: () => new Date().toISOString(),
    randomUUID: V.randomUUID,
    telemetry: n.telemetryManager,
  });
}
exports.InAppMessagingManager = $;
exports.createInAppMessagingManager = We;
