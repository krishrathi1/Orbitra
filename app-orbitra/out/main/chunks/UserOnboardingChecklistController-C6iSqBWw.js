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
      (i._sentryDebugIds[e] = "59b5a0f5-144f-4685-aa84-3c3b2e193c1a"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-59b5a0f5-144f-4685-aa84-3c3b2e193c1a"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const a = require("../main-app.js"),
  f = require("./loginImport-BxVLJ6oK.js"),
  m = require("./parse-MOHEM7uu.js"),
  d = require("./state-CPqa2lvF.js");
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
require("./template-CmpXTu8Z.js");
function h(i, e) {
  const t = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    }),
    r = new Map(t.formatToParts(i).map((s) => [s.type, s.value]));
  return {
    year: Number(r.get("year")),
    month: Number(r.get("month")),
    day: Number(r.get("day")),
    hour: Number(r.get("hour")),
    minute: Number(r.get("minute")),
    second: Number(r.get("second")),
  };
}
function p(i, e) {
  const t = Date.UTC(i.year, i.month - 1, i.day, i.hour, i.minute, i.second);
  let r = t;
  for (let s = 0; s < 4; s += 1) {
    const o = h(new Date(r), e),
      n = Date.UTC(o.year, o.month - 1, o.day, o.hour, o.minute, o.second),
      c = t - n;
    if (c === 0) break;
    r += c;
  }
  return new Date(r);
}
function b(i, e) {
  const t = h(i, e),
    r = new Date(Date.UTC(t.year, t.month - 1, t.day + 1));
  return p(
    {
      year: r.getUTCFullYear(),
      month: r.getUTCMonth() + 1,
      day: r.getUTCDate(),
      hour: 9,
      minute: 0,
      second: 0,
    },
    e,
  );
}
const l = {
  disabled: {
    status: "disabled",
    eligible: !1,
    visible: !1,
    finished: !1,
    record: null,
  },
  absent: {
    status: "absent",
    eligible: !1,
    visible: !1,
    finished: !1,
    record: null,
  },
  invalid: {
    status: "invalid",
    eligible: !1,
    visible: !1,
    finished: !1,
    record: null,
  },
};
function u(i, e) {
  for (const t of i.sections) {
    const r = t.items.find((s) => s.id === e);
    if (r) return r;
  }
  return null;
}
class g {
  constructor(e) {
    ((this.options = e),
      (this.now = e.now ?? (() => new Date())),
      e.defaultBrowserSource.on(
        "status-changed",
        this.handleDefaultBrowserStatus,
      ),
      this.cleanups.push(() =>
        e.defaultBrowserSource.off(
          "status-changed",
          this.handleDefaultBrowserStatus,
        ),
      ),
      this.registerIPCQueries());
  }
  now;
  cleanups = [];
  subscribedChecklistService = null;
  stopChecklistSubscription = null;
  refreshTimer = null;
  disposed = !1;
  handleDefaultBrowserStatus = (e) => {
    e && this.requestRefresh();
  };
  async refresh() {
    if (!this.options.featureEnabled()) return this.publish(l.disabled);
    const e = await this.getService(),
      t = await e.load(),
      r = t.status === "absent" ? await e.ensureEnrolled() : t;
    if (r.status !== "valid") return this.publish(this.stateForLoadResult(r));
    const s = await this.reconcileAutomaticCompletion(r.record);
    return this.publish(this.readyState(s));
  }
  async activateItem(e, t) {
    try {
      const { service: r, record: s } =
          await this.loadInteractiveChecklist("cached"),
        o = u(s, e),
        n = o ? m.getChecklistItemDefinition(o) : null;
      if (!n) return { success: !1, error: "Unknown checklist item" };
      if (
        (r
          .mutate({
            type: "item_opened",
            itemId: e,
            at: this.now().toISOString(),
          })
          .then(() => this.requestRefresh())
          .catch(() => {
            a.logger.warn("[OnboardingChecklist] Could not save opened item", {
              profileId: this.options.profileId,
              outcome: "failed",
              reason: "progress_save_failed",
            });
          }),
        n.chat)
      ) {
        if (!t)
          return {
            success: !1,
            error: "Select a companion before starting this chat",
          };
        await this.options.startChecklistChat(t, { id: e, ...n.chat });
      } else if (e === "import-browser-data")
        await this.options.openTrustedUrl(f.loginImportSettingsUrl());
      else if (e === "set-default-browser") {
        if (!(await this.options.defaultBrowserSource.setAsDefaultBrowser()))
          return {
            success: !1,
            error: "Orbitra is not the default browser yet",
          };
      } else
        e === "invite-friend"
          ? await this.options.openInviteDialog()
          : n.kind === "informational" &&
            n.href &&
            (await this.options.openTrustedUrl(n.href));
      return {
        success: !0,
        state: this.stateForLoadResult(
          r.getSnapshot() ?? { status: "valid", record: s },
        ),
      };
    } catch (r) {
      return {
        success: !1,
        error:
          r instanceof Error ? r.message : "Onboarding checklist action failed",
      };
    }
  }
  async completeInviteShare() {
    try {
      const { service: e, record: t } = await this.loadInteractiveChecklist();
      if (u(t, "invite-friend")?.completion)
        return { success: !0, state: this.publish(this.readyState(t)) };
      const r = await e.mutate({
        type: "item_completed",
        itemId: "invite-friend",
        completion: {
          completedAt: this.now().toISOString(),
          mode: "automatic",
          signal: "invite_shared",
          method: "copied_invite_link",
        },
      });
      return { success: !0, state: this.publish(this.readyState(r)) };
    } catch (e) {
      return {
        success: !1,
        error:
          e instanceof Error ? e.message : "Onboarding checklist action failed",
      };
    }
  }
  dismissItem(e) {
    const t = this.now().toISOString();
    return this.runMutation({ type: "item_dismissed", itemId: e, at: t });
  }
  async dismissAllItems() {
    const e = this.now();
    if (
      !d.isChecklistPastFirstMonth(
        this.options.getOnboardingCompletedAt(),
        e.getTime(),
      )
    )
      return {
        success: !1,
        error:
          "You can dismiss all setup steps after your first month in Orbitra.",
      };
    try {
      const { service: t, record: r } = await this.loadInteractiveChecklist(),
        s = r.sections
          .filter(({ id: n }) => n === "getting-started")
          .flatMap(({ items: n }) => n)
          .filter((n) => !n.completion && !n.dismissedAt)
          .map(({ id: n }) => ({
            type: "item_dismissed",
            itemId: n,
            at: e.toISOString(),
          })),
        o = s.length ? await t.mutate(s) : r;
      return { success: !0, state: this.publish(this.readyState(o)) };
    } catch (t) {
      return {
        success: !1,
        error:
          t instanceof Error
            ? t.message
            : "Could not dismiss the onboarding checklist",
      };
    }
  }
  snooze(e) {
    const t = this.now();
    let r;
    try {
      r = b(t, e);
    } catch {
      return Promise.resolve({ success: !1, error: "Invalid local time zone" });
    }
    return this.runMutation({
      type: "snoozed",
      until: r.toISOString(),
      timeZone: e,
      at: t.toISOString(),
    });
  }
  async hide(e) {
    if (e === "finished_hide") {
      const t = await this.refresh();
      if (t.status !== "ready" || !t.finished)
        return { success: !1, error: "Checklist is not finished" };
    }
    return this.runMutation({
      type: "hidden",
      reason: e,
      at: this.now().toISOString(),
    });
  }
  dispose() {
    if (!this.disposed) {
      ((this.disposed = !0),
        this.refreshTimer && clearTimeout(this.refreshTimer),
        (this.refreshTimer = null),
        this.stopChecklistSubscription?.(),
        (this.stopChecklistSubscription = null),
        (this.subscribedChecklistService = null));
      for (const e of this.cleanups) e();
      this.cleanups.length = 0;
    }
  }
  registerIPCQueries() {
    const e = { windowId: this.options.windowId };
    this.cleanups.push(
      a.eventManager.handleIPCQuery(
        "onboarding",
        "activateChecklistItem",
        async ({ query: t }) =>
          this.activateItem(t.payload.itemId, t.payload.currentCompanionId),
        e,
      ),
      a.eventManager.handleIPCQuery(
        "onboarding",
        "refreshChecklist",
        async () => ({ success: !0, state: await this.refresh() }),
        e,
      ),
      a.eventManager.handleIPCQuery(
        "onboarding",
        "dismissChecklistItem",
        async ({ query: t }) => this.dismissItem(t.payload.itemId),
        e,
      ),
      a.eventManager.handleIPCQuery(
        "onboarding",
        "dismissAllChecklistItems",
        async () => this.dismissAllItems(),
        e,
      ),
      a.eventManager.handleIPCQuery(
        "onboarding",
        "snoozeChecklist",
        async ({ query: t }) => this.snooze(t.payload.timeZone),
        e,
      ),
      a.eventManager.handleIPCQuery(
        "onboarding",
        "hideChecklist",
        async ({ query: t }) => this.hide(t.payload.reason),
        e,
      ),
    );
  }
  async getService() {
    if (this.disposed)
      throw new Error("Onboarding checklist controller is disposed");
    const e = await this.options.getChecklistService();
    if (this.disposed)
      throw new Error("Onboarding checklist controller is disposed");
    if (e === this.subscribedChecklistService) return e;
    const t = e.subscribe((r) => {
      if (!this.options.featureEnabled()) {
        this.publish(l.disabled);
        return;
      }
      this.publish(this.stateForLoadResult(r));
    });
    return (
      this.stopChecklistSubscription?.(),
      (this.subscribedChecklistService = e),
      (this.stopChecklistSubscription = t),
      e
    );
  }
  async reconcileAutomaticCompletion(e) {
    const t = await this.options.defaultBrowserSource
        .checkIsDefaultBrowser()
        .catch(() => !1),
      r = this.now().toISOString(),
      s = [];
    t &&
      u(e, "set-default-browser") &&
      !u(e, "set-default-browser")?.completion &&
      s.push({
        type: "item_completed",
        itemId: "set-default-browser",
        completion: {
          completedAt: r,
          mode: "automatic",
          signal: "default_browser_confirmed",
        },
      });
    const o = this.options.getBrowserImportCompletedAt(),
      n = u(e, "import-browser-data");
    return (
      o !== null &&
        n &&
        !n.completion &&
        s.push({
          type: "item_completed",
          itemId: "import-browser-data",
          completion: {
            completedAt: new Date(o).toISOString(),
            mode: "automatic",
            signal: "browser_data_imported",
          },
        }),
      s.length === 0 ? e : (await this.getService()).mutate(s)
    );
  }
  async runMutation(e) {
    try {
      const { service: t } = await this.loadInteractiveChecklist(),
        r = await t.mutate(e);
      return { success: !0, state: this.publish(this.readyState(r)) };
    } catch (t) {
      return {
        success: !1,
        error:
          t instanceof Error ? t.message : "Onboarding checklist action failed",
      };
    }
  }
  async loadInteractiveChecklist(e = "fresh") {
    if (!this.options.featureEnabled())
      throw new Error("Onboarding checklist is unavailable");
    const t = await this.getService(),
      r =
        e === "cached" ? (t.getSnapshot() ?? (await t.load())) : await t.load();
    if (r.status !== "valid")
      throw new Error("Onboarding checklist is unavailable");
    return { service: t, record: r.record };
  }
  stateForLoadResult(e) {
    return e.status === "valid"
      ? this.readyState(e.record)
      : e.status === "absent"
        ? l.absent
        : e.status === "malformed"
          ? l.invalid
          : {
              status: "unsupported_schema",
              schemaVersion: e.schemaVersion,
              eligible: !1,
              visible: !1,
              finished: !1,
              record: null,
            };
  }
  readyState(e) {
    return {
      status: "ready",
      ...d.getChecklistReadModel(e, this.now()),
      onboardingCompletedAt: this.options.getOnboardingCompletedAt(),
    };
  }
  publish(e) {
    return (
      this.scheduleRefresh(e),
      a.eventManager.publishIPCState(
        "onboarding.checklist",
        this.options.profileId,
        e,
      ),
      e
    );
  }
  scheduleRefresh(e) {
    if (
      (this.refreshTimer && clearTimeout(this.refreshTimer),
      (this.refreshTimer = null),
      this.disposed || e.status !== "ready")
    )
      return;
    const t = this.now().getTime();
    let r = null;
    (e.record.visibility.status === "snoozed" &&
      !e.visible &&
      (r = Math.max(0, Date.parse(e.record.visibility.until) - t)),
      r !== null &&
        ((this.refreshTimer = setTimeout(() => {
          ((this.refreshTimer = null), this.requestRefresh());
        }, r)),
        typeof this.refreshTimer != "number" && this.refreshTimer.unref()));
  }
  requestRefresh() {
    this.disposed ||
      this.refresh().catch(() => {
        a.logger.warn("[OnboardingChecklist] Background refresh failed");
      });
  }
}
exports.UserOnboardingChecklistController = g;
