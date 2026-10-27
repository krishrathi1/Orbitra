"use strict";
(function () {
  try {
    var s =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    s.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var s =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new s.Error().stack;
    e &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[e] = "0df25e8a-f931-49c1-b2bd-bec330876531"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-0df25e8a-f931-49c1-b2bd-bec330876531"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const q = require("electron"),
  i = require("../main-app.js");
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
class c {
  constructor(e) {
    this.deps = e;
  }
  cleanups = [];
  windowCleanups = new Map();
  evaluating = !1;
  disposed = !1;
  start() {
    this.cleanups.push(this.deps.windows.onRegistered((e) => this.attach(e)));
    for (const e of this.deps.windows.getAll()) this.attach(e);
  }
  dispose() {
    this.disposed = !0;
    for (const e of this.windowCleanups.values()) e();
    this.windowCleanups.clear();
    for (const e of this.cleanups.splice(0)) e();
  }
  attach(e) {
    if (this.disposed || this.windowCleanups.has(e)) return;
    let r = !1;
    const t = e.onFocusChanged((d) => {
        if (!d) {
          r = !0;
          return;
        }
        r && ((r = !1), this.evaluate(e));
      }),
      a = e.onClosed(() => u()),
      u = () => {
        (t(), a(), this.windowCleanups.delete(e));
      };
    this.windowCleanups.set(e, u);
  }
  canPresentIn(e) {
    return (
      !this.disposed &&
      e.surface === "browser" &&
      !e.isIncognito &&
      e.isAlive() &&
      e.isShowing() &&
      e.isFocused() &&
      !this.deps.hasDialog(e)
    );
  }
  async evaluate(e) {
    if (this.evaluating || this.deps.isSuppressed() || !this.canPresentIn(e))
      return;
    const r = this.deps.accountIdFor(e);
    if (!(!r || this.deps.isCoolingDown(r))) {
      this.evaluating = !0;
      try {
        const [t, a] = await Promise.all([
            this.deps.getAccount(r).catch(() => null),
            this.deps.getCreditSnapshot(r).catch(() => null),
          ]),
          u = i.getUpgradeTakeoverOffer(t, a);
        if (
          !u ||
          !this.canPresentIn(e) ||
          this.deps.accountIdFor(e) !== r ||
          !this.deps.claim(r)
        )
          return;
        this.deps.present(e, u, (n) => {
          (this.deps.track(n),
            n === "team-plans" && this.deps.openTeamPlans(e),
            n === "compare-plans" && this.deps.openPlans(e));
        }) && this.deps.track("impression");
      } finally {
        this.evaluating = !1;
      }
    }
  }
}
const o = "upgrade-takeover",
  l = "UpgradeTakeoverManager";
function p(s, e) {
  return new c({
    windows: {
      getAll: () => [...s.getManagedWindows()],
      onRegistered: (r) => s.onManagedWindowRegistered(r),
    },
    isSuppressed: () =>
      i.getAutomationLaunchPolicy({ isPackaged: q.app.isPackaged })
        .suppressUpgradeTakeover ||
      !i.globalSettings.get("hasCompletedOnboarding"),
    accountIdFor: (r) => e.getLoadedProfile(r.profileId)?.accountId ?? null,
    isCoolingDown: (r) => i.isUpgradeTakeoverCoolingDown(r),
    getAccount: (r) => i.accountManager.forAccount(r).getAccount(),
    getCreditSnapshot: async (r) => {
      const t = await i.fetchCreditState(void 0, r);
      return t.status === "available" ? t.snapshot : null;
    },
    claim: (r) => {
      const t = i.claimUpgradeTakeover(r);
      return t.success && t.claimed;
    },
    hasDialog: (r) => i.dialogManager.getActiveDialog(r.dialogs.id) !== void 0,
    present: (r, t, a) =>
      i.dialogManager.showDialog(
        r.dialogs,
        i.upgradeTakeoverDialog({
          creditsUsed: t.creditsUsed,
          onNotNow: () => a("not-now"),
          onTeamPlans: () => a("team-plans"),
          onComparePlans: () => a("compare-plans"),
          onClose: () => a("close"),
        }),
      ) === "displayed",
    openPlans: (r) => {
      i.dialogManager.showDialog(r.dialogs, i.pricingPlanDialog());
    },
    openTeamPlans: (r) => {
      r.commands.openUrl({
        url: "orbitra://settings/team",
        source: "renderer-ui",
        disposition: "foreground-new",
        tabType: "app",
        userInitiated: !0,
      });
    },
    track: (r) => {
      r === "impression"
        ? i.telemetryManager.sendEvent(
            "newtab_notice_impression",
            { notice_id: o },
            l,
          )
        : r === "team-plans" || r === "compare-plans"
          ? i.telemetryManager.sendEvent(
              "newtab_notice_click",
              { notice_id: o, action: r },
              l,
            )
          : i.telemetryManager.sendEvent(
              "newtab_notice_dismissed",
              { notice_id: o },
              l,
            );
    },
  });
}
exports.UpgradeTakeoverManager = c;
exports.createUpgradeTakeoverManager = p;
