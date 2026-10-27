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
      (i._sentryDebugIds[r] = "5bef0663-577c-4667-a76e-93d6475bbaa9"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-5bef0663-577c-4667-a76e-93d6475bbaa9"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const q = require("electron"),
  u = require("../main-app.js");
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
class l {
  constructor(r) {
    this.deps = r;
  }
  disposed = !1;
  start() {
    this.deps
      .whenLaunchWindowShown()
      .then(() => this.evaluate())
      .catch((r) => this.deps.logFailure(r));
  }
  dispose() {
    this.disposed = !0;
  }
  canPresentIn(r) {
    return (
      !this.disposed &&
      r !== null &&
      r.surface === "browser" &&
      !r.isIncognito &&
      r.isAlive() &&
      r.isShowing()
    );
  }
  async evaluate() {
    if (this.deps.isSuppressed()) return;
    const r = this.deps.launchWindow();
    if (!this.canPresentIn(r)) return;
    const e = this.deps.accountIdFor(r);
    if (!e || this.deps.isCoolingDown(e)) return;
    const n = await this.deps.getLastUse(e).catch(() => null);
    if (
      !u.isWelcomeBackDue(n) ||
      !this.canPresentIn(r) ||
      this.deps.accountIdFor(r) !== e ||
      !this.deps.claim(e)
    )
      return;
    this.deps.present(r, (c) => this.deps.track(c)) &&
      this.deps.track("impression");
  }
}
const t = "welcome-back",
  s = "WelcomeBackManager";
function a(i, r, e = () => {}) {
  return (
    u.dialogManager.showDialog(
      r.dialogs,
      u.welcomeBackDialog({
        onContinue: () => e("continue"),
        onSetUpAgain: () => {
          (e("set-up-again"),
            i.restartOnboardingWithNewCompanion("keep-account").catch((o) => {
              u.logger.error("[WelcomeBack] Could not start setup again", o);
            }));
        },
        onClose: () => e("close"),
      }),
    ) !== "duplicate"
  );
}
function d(i, r) {
  return new l({
    whenLaunchWindowShown: () => i.whenLaunchWindowShown(),
    launchWindow: () => i.getLastFocusedManagedWindow() ?? null,
    isSuppressed: () =>
      u.getAutomationLaunchPolicy({ isPackaged: q.app.isPackaged })
        .suppressWelcomeBack || !u.globalSettings.get("hasCompletedOnboarding"),
    accountIdFor: (e) => r.getLoadedProfile(e.profileId)?.accountId ?? null,
    isCoolingDown: (e) => u.isWelcomeBackCoolingDown(e),
    getLastUse: (e) => u.accountManager.forAccount(e).getCreditLastUse(),
    claim: (e) => {
      const n = u.claimWelcomeBack(e);
      return n.success && n.claimed;
    },
    present: (e, n) => a(i, e, n),
    logFailure: (e) => {
      u.logger.error("[WelcomeBack] Could not show the welcome back screen", {
        outcome: "failed",
        reason: "present_failed",
        errorName: e instanceof Error ? e.name : void 0,
      });
    },
    track: (e) => {
      e === "impression"
        ? u.telemetryManager.sendEvent(
            "newtab_notice_impression",
            { notice_id: t },
            s,
          )
        : e === "set-up-again"
          ? u.telemetryManager.sendEvent(
              "newtab_notice_click",
              { notice_id: t, action: e },
              s,
            )
          : u.telemetryManager.sendEvent(
              "newtab_notice_dismissed",
              { notice_id: t },
              s,
            );
    },
  });
}
exports.createWelcomeBackManager = d;
exports.presentWelcomeBack = a;
