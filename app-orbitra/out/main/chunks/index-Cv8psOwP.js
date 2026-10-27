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
      (i._sentryDebugIds[e] = "d2953bf8-844e-412a-9329-b21f12ab3667"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-d2953bf8-844e-412a-9329-b21f12ab3667"));
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
const d = 10080 * 60 * 1e3;
function l(i, e, r = Date.now()) {
  if (e || !i) return !1;
  const s = Date.parse(i);
  return Number.isFinite(s) && r - s >= d;
}
class n {
  constructor(e) {
    this.deps = e;
  }
  cleanups = [];
  windowCleanups = new Map();
  presenting = !1;
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
    const s = e.onFocusChanged((o) => {
        if (!o) {
          r = !0;
          return;
        }
        r && ((r = !1), this.evaluate(e));
      }),
      a = e.onClosed(() => t()),
      t = () => {
        (s(), a(), this.windowCleanups.delete(e));
      };
    this.windowCleanups.set(e, t);
  }
  async evaluate(e) {
    if (
      this.presenting ||
      this.disposed ||
      this.deps.isSuppressed() ||
      e.surface !== "browser" ||
      e.isIncognito ||
      !e.isAlive() ||
      !e.isShowing() ||
      !e.isFocused() ||
      this.deps.hasDialog(e)
    )
      return;
    const r = this.deps.accountIdFor(e);
    if (!(!r || !this.deps.isDue(r))) {
      this.presenting = !0;
      try {
        (await this.deps.present(e, r)) && this.deps.track("impression");
      } finally {
        this.presenting = !1;
      }
    }
  }
}
const c = "invite-nudge",
  p = "InviteNudgeManager";
function g(i, e) {
  return new n({
    windows: {
      getAll: () => [...i.getManagedWindows()],
      onRegistered: (r) => i.onManagedWindowRegistered(r),
    },
    isSuppressed: () =>
      u.getAutomationLaunchPolicy({ isPackaged: q.app.isPackaged })
        .suppressInviteNudge || !u.globalSettings.get("hasCompletedOnboarding"),
    accountIdFor: (r) => e.getLoadedProfile(r.profileId)?.accountId ?? null,
    isDue: (r) =>
      l(
        u.globalSettings.get("accountOnboardingCompletions")[r]?.completedAt ??
          null,
        u.hasOpenedInviteDialog(r),
      ),
    hasDialog: (r) => u.dialogManager.getActiveDialog(r.dialogs.id) !== void 0,
    present: async (r, s) =>
      (await u.presentInviteDialog(r.dialogs, s)) === "presented",
    track: () => {
      u.telemetryManager.sendEvent(
        "newtab_notice_impression",
        { notice_id: c },
        p,
      );
    },
  });
}
exports.InviteNudgeManager = n;
exports.createInviteNudgeManager = g;
