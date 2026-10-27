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
      (i._sentryDebugIds[e] = "3c4af43d-1a32-49af-8eb9-9cd632484682"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-3c4af43d-1a32-49af-8eb9-9cd632484682"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const c = require("node:crypto"),
  l = require("node:os"),
  n = require("../main-app.js"),
  o = require("electron");
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
const h = 45e3,
  p = 5e3,
  u = "OnboardingStuckWatchdog.ts";
function d(i) {
  return {
    windowId: i.windowId,
    profileId: i.profileId,
    watchId: i.watchId,
    owner: i.owner,
    clock: i.clock,
    waitingForAccount: i.waitingForAccount,
    probe: i.probe,
    loadFailed: i.loadFailed,
  };
}
function g(i) {
  return i.waitingForAccount
    ? "profile_account_unavailable"
    : i.probe
      ? i.loadFailed
        ? "setup_load_failed"
        : "setup_never_requested"
      : "setup_service_missing";
}
function q(i) {
  switch (i.name) {
    case "onboarding_opened":
      return {};
    case "onboarding_stuck":
      return {
        cause: i.data.cause,
        ended: i.data.ended,
        step: i.data.step,
        secondsWaited: i.data.seconds_waited,
      };
    case "onboarding_stuck_recovered":
      return { secondsToLoad: i.data.seconds_to_load };
    case "onboarding_quit":
      return {
        step: i.data.step,
        endedBy: i.data.ended_by,
        secondsInSetup: i.data.seconds_in_setup,
      };
    default:
      return { unknownEvent: String(i) };
  }
}
function w(i) {
  switch (i) {
    case "user":
      return "window_closed";
    case "quit":
      return "app_quit";
    case "setup":
      return null;
    default:
      return i;
  }
}
class f {
  constructor(e) {
    this.deps = e;
  }
  watches = new Map();
  suspended = !1;
  lastOwner = 0;
  arm(e, r) {
    let t = -1;
    return (
      this.guard("arm", () => {
        (this.wake(), (t = ++this.lastOwner));
        const s = this.watches.get(e);
        if (s && s.phase !== "loaded") {
          s.owner = t;
          return;
        }
        const a = {
          phase: "loading",
          windowId: e,
          profileId: r,
          watchId: this.deps.newId(),
          owner: t,
          clock: {
            awakeMs: 0,
            awakeSince: this.suspended ? null : this.deps.now(),
          },
          waitingForAccount: !1,
          probe: null,
          loadFailed: !1,
          cancelTimer: null,
        };
        (this.watches.set(e, a),
          this.scheduleStuckCheck(a),
          this.emit(a, { name: "onboarding_opened", data: this.common(a) }));
      }),
      t
    );
  }
  waitingForAccount(e) {
    this.guard("waitingForAccount", () => {
      const r = this.watches.get(e);
      r && (r.waitingForAccount = !0);
    });
  }
  accountWaitEnded(e) {
    this.guard("accountWaitEnded", () => {
      const r = this.watches.get(e);
      r && (r.waitingForAccount = !1);
    });
  }
  serviceStarted(e, r) {
    this.guard("serviceStarted", () => {
      const t = this.watches.get(e);
      t && ((t.probe = r), (t.waitingForAccount = !1));
    });
  }
  loadAnswered(e, r) {
    this.guard("loadAnswered", () => {
      this.wake();
      const t = this.watches.get(e);
      if (!(!t || t.phase === "loaded")) {
        if (!r) {
          t.loadFailed = !0;
          return;
        }
        (this.stopTimer(t),
          t.phase === "stuck" &&
            this.emit(t, {
              name: "onboarding_stuck_recovered",
              data: {
                ...this.common(t),
                seconds_to_load: this.awakeSeconds(t),
              },
            }),
          this.watches.set(e, { ...d(t), phase: "loaded" }));
      }
    });
  }
  finished(e) {
    this.guard("finished", () => {
      const r = this.watches.get(e);
      r && (this.stopTimer(r), this.watches.delete(e));
    });
  }
  windowClosed(e, r, t) {
    this.guard("windowClosed", () => {
      const s = this.watches.get(e);
      !s ||
        s.owner !== t ||
        (this.stopTimer(s),
        this.watches.delete(e),
        this.reportLeaving(s, this.closer(r)));
    });
  }
  appQuitting() {
    this.guard("appQuitting", () => {
      const e = [...this.watches.values()];
      this.watches.clear();
      for (const r of e)
        this.guard("appQuittingWindow", () => {
          (this.stopTimer(r), this.reportLeaving(r, "quit"));
        });
    });
  }
  systemSuspended() {
    this.guard("systemSuspended", () => {
      if (this.suspended) return;
      this.suspended = !0;
      const e = this.deps.now();
      for (const r of this.watches.values())
        ((r.clock = { awakeMs: this.awakeMs(r, e), awakeSince: null }),
          this.stopTimer(r));
    });
  }
  systemResumed() {
    this.guard("systemResumed", () => this.wake());
  }
  wake() {
    if (!this.suspended) return;
    this.suspended = !1;
    const e = this.deps.now();
    for (const r of this.watches.values())
      ((r.clock = { awakeMs: r.clock.awakeMs, awakeSince: e }),
        r.phase === "loading" && this.scheduleStuckCheck(r));
  }
  closer(e) {
    return this.deps.isQuitting() ? "quit" : e ? "user" : "setup";
  }
  scheduleStuckCheck(e) {
    if (e.clock.awakeSince === null) return;
    const r = Math.max(0, h - this.awakeMs(e, this.deps.now()));
    (e.cancelTimer?.(),
      (e.cancelTimer = this.deps.setTimer(
        () => this.guard("stuckCheck", () => this.onStuckCheck(e.windowId)),
        r,
      )));
  }
  onStuckCheck(e) {
    const r = this.watches.get(e);
    !r ||
      r.phase !== "loading" ||
      ((r.cancelTimer = null),
      this.reportStuck(r, "timeout"),
      this.watches.set(e, { ...d(r), phase: "stuck" }));
  }
  reportLeaving(e, r) {
    switch (e.phase) {
      case "loading": {
        if (this.awakeMs(e, this.deps.now()) < p) return;
        this.reportStuck(e, this.leavingEnding(r));
        return;
      }
      case "stuck":
        return;
      case "loaded": {
        const t = w(r);
        t && this.reportQuit(e, t);
        return;
      }
      default:
        return e;
    }
  }
  leavingEnding(e) {
    return e === "setup" && this.deps.hasCompletedOnboarding()
      ? "skipped"
      : "closed";
  }
  reportStuck(e, r) {
    this.emit(e, {
      name: "onboarding_stuck",
      data: {
        ...this.common(e),
        cause: g(e),
        ended: r,
        seconds_waited: this.awakeSeconds(e),
        step: e.probe?.step() ?? "not_loaded",
      },
    });
  }
  reportQuit(e, r) {
    const t = e.probe?.step();
    if (!t) {
      this.deps.log("[OnboardingWatchdog] quit without a known step", {
        windowId: e.windowId,
        outcome: "skipped",
        reason: "step_unknown",
      });
      return;
    }
    this.emit(e, {
      name: "onboarding_quit",
      data: {
        ...this.common(e),
        step: t,
        seconds_in_setup: this.awakeSeconds(e),
        ended_by: r,
      },
    });
  }
  emit(e, r) {
    (this.deps.send(r),
      this.deps.log(
        `[OnboardingWatchdog] ${r.name.replace("onboarding_", "")}`,
        { windowId: e.windowId, runId: r.data.onboarding_run_id, ...q(r) },
      ));
  }
  common(e) {
    return {
      ...this.deps.context(e.profileId),
      onboarding_run_id: e.probe?.runId() ?? e.watchId,
      onboarding_flow_version: n.ONBOARDING_FLOW_VERSION,
    };
  }
  awakeMs(e, r) {
    const t = e.clock.awakeSince === null ? 0 : r - e.clock.awakeSince;
    return Math.max(0, e.clock.awakeMs + t);
  }
  awakeSeconds(e) {
    return Math.round(this.awakeMs(e, this.deps.now()) / 1e3);
  }
  stopTimer(e) {
    e.phase === "loading" && (e.cancelTimer?.(), (e.cancelTimer = null));
  }
  guard(e, r) {
    try {
      r();
    } catch (t) {
      try {
        this.deps.log("[OnboardingWatchdog] failed", {
          operation: e,
          outcome: "failed",
          errorName: t instanceof Error ? t.name : "unknown",
        });
      } catch {}
    }
  }
}
function m() {
  return o.app.isPackaged
    ? n.isDevelopmentBuildVersion(o.app.getVersion())
      ? "dev"
      : "stable"
    : "local";
}
function _(i, e) {
  const r = e(i);
  return {
    install_id: n.getClientId(),
    build: m(),
    os_version: l.release().slice(0, 64) || "unknown",
    arch: process.arch,
    is_authenticated: r !== null && n.cachedSessionUserId(r) !== null,
    profile_has_account: r !== null,
  };
}
function k(i) {
  switch (i.name) {
    case "onboarding_opened":
      return n.telemetryManager.sendEvent(i.name, i.data, u, null);
    case "onboarding_stuck":
      return n.telemetryManager.sendEvent(i.name, i.data, u, null);
    case "onboarding_stuck_recovered":
      return n.telemetryManager.sendEvent(i.name, i.data, u, null);
    case "onboarding_quit":
      return n.telemetryManager.sendEvent(i.name, i.data, u, null);
    default: {
      const e = i;
      n.logger.warn("[OnboardingWatchdog] unknown event", { event: String(e) });
    }
  }
}
function b(i) {
  const e = new f({
    now: Date.now,
    setTimer: (r, t) => {
      const s = setTimeout(r, t);
      return (s.unref(), () => clearTimeout(s));
    },
    newId: c.randomUUID,
    context: (r) => _(r, i),
    send: k,
    log: (r, t) => n.logger.info(r, t),
    hasCompletedOnboarding: () =>
      n.globalSettings.get("hasCompletedOnboarding") === !0,
    isQuitting: () => n.cleanupManager.willQuit,
  });
  return (
    n.cleanupManager.addHandlerToRunAtCleanup(async () => e.appQuitting()),
    o.powerMonitor.on("suspend", () => e.systemSuspended()),
    o.powerMonitor.on("resume", () => e.systemResumed()),
    e
  );
}
exports.createOnboardingWatchdog = b;
