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
      r = new i.Error().stack;
    r &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[r] = "04dbede5-87d3-4aed-9ded-6702d2b93660"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-04dbede5-87d3-4aed-9ded-6702d2b93660"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const q = require("electron"),
  t = require("../main-app.js"),
  c = require("./chatgptPlanService-CQSeNVg5.js");
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
function p(i) {
  return !t.isFreePersonalPlanKey(i) && i !== "team_plan";
}
function h(i) {
  const r = i.products?.find((e) => e.id === i.currentPlan);
  return r
    ? t.getPlanDisplayName(r)
    : (i.currentPlanTerms?.name ?? "your new plan");
}
class d {
  constructor(r) {
    this.deps = r;
  }
  stop = null;
  welcoming = new Set();
  disposed = !1;
  start() {
    this.stop ??= this.deps.onAccountSnapshot((r, e) => this.observe(r, e));
  }
  dispose() {
    ((this.disposed = !0), this.stop?.(), (this.stop = null));
  }
  observe(r, e) {
    const n = r.currentPlan,
      s = this.deps.lastSeenPlan(e);
    if (s === n) return;
    if (!(s !== null && t.isFreePersonalPlanKey(s) && p(n))) {
      this.deps.recordPlan(e, n);
      return;
    }
    this.welcome(r, e, s);
  }
  windowFor(r) {
    const e = this.deps.windows
      .getAll()
      .filter(
        (n) =>
          n.surface === "browser" &&
          !n.isIncognito &&
          n.isAlive() &&
          n.isShowing() &&
          this.deps.accountIdFor(n) === r,
      );
    return e.find((n) => n.isFocused()) ?? e[0];
  }
  async welcome(r, e, n) {
    if (
      !(this.welcoming.has(e) || this.deps.isSuppressed()) &&
      this.windowFor(e)
    ) {
      this.welcoming.add(e);
      try {
        const s =
          !r.team &&
          (await this.deps.hasChatGPTPlanConnection(e).catch(() => null)) !==
            !0;
        if (this.disposed || this.deps.lastSeenPlan(e) !== n) return;
        const u = this.windowFor(e);
        if (
          !u ||
          !this.deps.present(
            u,
            { planName: h(r), offerChatGPTPlan: s },
            (l) => {
              (this.deps.track(l),
                l === "connect-chatgpt" && this.deps.openAIProvider(u));
            },
          )
        )
          return;
        (this.deps.track("impression"), this.deps.recordPlan(e, r.currentPlan));
      } finally {
        this.welcoming.delete(e);
      }
    }
  }
}
const o = "plan-welcome",
  a = "PlanWelcomeManager";
function g(i, r) {
  return new d({
    windows: { getAll: () => [...i.getManagedWindows()] },
    accountIdFor: (e) => r.getLoadedProfile(e.profileId)?.accountId ?? null,
    onAccountSnapshot: t.onAccountSnapshot,
    isSuppressed: () =>
      t.getAutomationLaunchPolicy({ isPackaged: q.app.isPackaged })
        .suppressPlanWelcome,
    lastSeenPlan: (e) => t.getLastSeenPlan(e),
    recordPlan: (e, n) => t.recordLastSeenPlan(e, n),
    hasChatGPTPlanConnection: c.hasChatGPTPlanConnection,
    present: (e, n, s) => (
      t.dialogManager.showDialog(
        e.dialogs,
        t.planWelcomeDialog({
          ...n,
          onConnectChatGPT: () => s("connect-chatgpt"),
          onClose: () => s("close"),
        }),
      ),
      !0
    ),
    openAIProvider: (e) => {
      e.commands.openUrl({
        url: "orbitra://settings/ai-provider",
        source: "renderer-ui",
        disposition: "foreground-new",
        tabType: "app",
        userInitiated: !0,
      });
    },
    track: (e) => {
      e === "impression"
        ? t.telemetryManager.sendEvent(
            "newtab_notice_impression",
            { notice_id: o },
            a,
          )
        : e === "connect-chatgpt"
          ? t.telemetryManager.sendEvent(
              "newtab_notice_click",
              { notice_id: o, action: e },
              a,
            )
          : t.telemetryManager.sendEvent(
              "newtab_notice_dismissed",
              { notice_id: o },
              a,
            );
    },
  });
}
exports.PlanWelcomeManager = d;
exports.createPlanWelcomeManager = g;
