"use strict";
(function () {
  try {
    var e =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    e.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      i = new e.Error().stack;
    i &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[i] = "84166325-0ac5-46c7-95d0-276eee9fb968"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-84166325-0ac5-46c7-95d0-276eee9fb968"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const o = require("../main-app.js"),
  C = require("electron"),
  O = require("./debugFixtureDir-ByciY_uH.js");
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
function G({
  layers: e,
  profileService: i,
  loadCompanionIcon: I,
  resolveCompanionProvenance: q,
}) {
  (e.handleInvoke(
    "channel:list-slack-installations",
    async ({ companionId: a, connectedAccountId: r }) => {
      const n = i.getCurrentProfile()?.id;
      if (!n) return { success: !1, error: "No active profile" };
      try {
        const s = await q(a);
        if (!s)
          return { success: !1, error: "Companion location is unavailable" };
        const u = new URLSearchParams({
          profileId: n,
          companionId: a,
          companionSourceWorkspaceId: s.sourceWorkspaceId,
          companionSourcePath: s.sourcePath,
        });
        r && u.set("connectedAccountId", r);
        const y = await o.authFetch(
            `${o.config.app.apiUrl}/api/channels/slack/installations?${u.toString()}`,
            { accountId: o.authManager.forProfile(n).accountId },
          ),
          p = await y.json();
        return y.ok
          ? {
              success: !0,
              workspaceInstallEnabled: p.workspaceInstallEnabled ?? !1,
              installations: p.installations ?? [],
            }
          : { success: !1, error: p.error ?? "Could not load Slack channels" };
      } catch (s) {
        return {
          success: !1,
          error: s instanceof Error ? s.message : "Request failed",
        };
      }
    },
  ),
    e.handleInvoke(
      "channel:list-accessible-slack-installations",
      async ({ companionId: a, connectedAccountId: r }) => {
        const n = i.getCurrentProfile()?.id;
        if (!n) return { success: !1, error: "No active profile" };
        try {
          const s = await q(a);
          if (!s)
            return { success: !1, error: "Companion location is unavailable" };
          const u = new URLSearchParams({
            profileId: n,
            companionId: a,
            companionSourceWorkspaceId: s.sourceWorkspaceId,
            companionSourcePath: s.sourcePath,
          });
          r && u.set("connectedAccountId", r);
          const y = await o.authFetch(
              `${o.config.app.apiUrl}/api/channels/slack/accessible-installations?${u.toString()}`,
              { accountId: o.authManager.forProfile(n).accountId },
            ),
            p = await y.json();
          return y.ok
            ? { success: !0, installations: p.installations ?? [] }
            : { success: !1, error: p.error ?? "Could not load Slack access" };
        } catch (s) {
          return {
            success: !1,
            error: s instanceof Error ? s.message : "Request failed",
          };
        }
      },
    ),
    e.handleInvoke(
      "channel:link-slack-identity",
      async ({ installationId: a, companionId: r, connectedAccountId: n }) => {
        const s = i.getCurrentProfile()?.id;
        if (!s) return { success: !1, error: "No active profile" };
        try {
          const u = await q(r);
          if (!u)
            return { success: !1, error: "Companion location is unavailable" };
          const y = await o.authFetch(
              `${o.config.app.apiUrl}/api/channels/slack/user-links`,
              {
                accountId: o.authManager.forProfile(s).accountId,
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                  installationId: a,
                  profileId: s,
                  companionId: r,
                  companionSourceWorkspaceId: u.sourceWorkspaceId,
                  companionSourcePath: u.sourcePath,
                  connectedAccountId: n,
                }),
              },
            ),
            p = await y.json();
          return y.ok
            ? { success: !0, linkId: p.linkId, created: p.created }
            : {
                success: !1,
                error: p.error ?? "Could not link your Slack identity",
              };
        } catch (u) {
          return {
            success: !1,
            error: u instanceof Error ? u.message : "Request failed",
          };
        }
      },
    ),
    e.handleInvoke("channel:unlink-slack-identity", async ({ linkId: a }) => {
      const r = i.getCurrentProfile()?.id;
      if (!r) return { success: !1, error: "No active profile" };
      try {
        const n = new URLSearchParams({ profileId: r }),
          s = await o.authFetch(
            `${o.config.app.apiUrl}/api/channels/slack/user-links/${encodeURIComponent(a)}?${n.toString()}`,
            {
              accountId: o.authManager.forProfile(r).accountId,
              method: "DELETE",
            },
          ),
          u = await s.json();
        return s.ok
          ? { success: !0 }
          : {
              success: !1,
              error: u.error ?? "Could not unlink your Slack identity",
            };
      } catch (n) {
        return {
          success: !1,
          error: n instanceof Error ? n.message : "Request failed",
        };
      }
    }),
    e.handleInvoke(
      "channel:start-slack-workspace-install",
      async ({ connectedAccountId: a }) => {
        const r = i.getCurrentProfile()?.id;
        if (!r) return { success: !1, error: "No active profile" };
        try {
          const n = await o.authFetch(
              `${o.config.app.apiUrl}/api/channels/slack/workspace-install-sessions`,
              {
                accountId: o.authManager.forProfile(r).accountId,
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ profileId: r, connectedAccountId: a }),
              },
            ),
            s = await n.json();
          return n.ok
            ? { success: !0, ...s }
            : {
                success: !1,
                error: s.error ?? "Could not start Slack installation",
              };
        } catch (n) {
          return {
            success: !1,
            error: n instanceof Error ? n.message : "Request failed",
          };
        }
      },
    ),
    e.handleInvoke(
      "channel:get-slack-workspace-install-session",
      async ({ sessionToken: a }) => {
        const r = i.getCurrentProfile()?.id;
        if (!r) return { success: !1, error: "No active profile" };
        try {
          const n = new URLSearchParams({ profileId: r }),
            s = await o.authFetch(
              `${o.config.app.apiUrl}/api/channels/slack/workspace-install-sessions/${encodeURIComponent(a)}?${n.toString()}`,
              { accountId: o.authManager.forProfile(r).accountId },
            ),
            u = await s.json();
          return s.ok
            ? { success: !0, ...u }
            : {
                success: !1,
                error: u.error ?? "Could not check Slack installation",
              };
        } catch (n) {
          return {
            success: !1,
            error: n instanceof Error ? n.message : "Request failed",
          };
        }
      },
    ),
    e.handleInvoke(
      "channel:list-slack-channels",
      async ({ installationId: a }) => {
        const r = i.getCurrentProfile()?.id;
        if (!r) return { success: !1, error: "No active profile" };
        try {
          const n = new URLSearchParams({ profileId: r }),
            s = await o.authFetch(
              `${o.config.app.apiUrl}/api/channels/slack/installations/${encodeURIComponent(a)}/channels?${n.toString()}`,
              { accountId: o.authManager.forProfile(r).accountId },
            ),
            u = await s.json();
          return s.ok
            ? { success: !0, channels: u.channels ?? [] }
            : {
                success: !1,
                error: u.error ?? "Could not load channels",
                neededScope: u.neededScope,
              };
        } catch (n) {
          return {
            success: !1,
            error: n instanceof Error ? n.message : "Request failed",
          };
        }
      },
    ),
    e.handleInvoke(
      "channel:create-slack-space",
      async ({
        installationId: a,
        companionId: r,
        channelId: n,
        triggerMode: s,
        handle: u,
        displayName: y,
      }) => {
        const p = i.getCurrentProfile()?.id;
        if (!p) return { success: !1, error: "No active profile" };
        try {
          const S = await q(r);
          if (!S)
            return { success: !1, error: "Companion location is unavailable" };
          const b = await I(r),
            k = new FormData();
          (k.set("profileId", p),
            k.set("companionId", r),
            k.set("companionSourceWorkspaceId", S.sourceWorkspaceId),
            k.set("companionSourcePath", S.sourcePath),
            k.set("channelId", n),
            k.set("triggerMode", s),
            k.set("handle", u),
            k.set("displayName", y),
            b &&
              k.set(
                "icon",
                new Blob([b], { type: "image/png" }),
                "companion.png",
              ));
          const T = await o.authFetch(
              `${o.config.app.apiUrl}/api/channels/slack/installations/${encodeURIComponent(a)}/spaces`,
              {
                accountId: o.authManager.forProfile(p).accountId,
                method: "POST",
                body: k,
              },
            ),
            t = await T.json();
          return T.ok
            ? { success: !0 }
            : { success: !1, error: t.error ?? "Could not add channel" };
        } catch (S) {
          return {
            success: !1,
            error: S instanceof Error ? S.message : "Request failed",
          };
        }
      },
    ),
    e.handleInvoke(
      "channel:update-slack-space",
      async ({ spaceId: a, triggerMode: r }) => {
        const n = i.getCurrentProfile()?.id;
        if (!n) return { success: !1, error: "No active profile" };
        try {
          const s = await o.authFetch(
              `${o.config.app.apiUrl}/api/channels/slack/spaces/${encodeURIComponent(a)}`,
              {
                accountId: o.authManager.forProfile(n).accountId,
                method: "PATCH",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ profileId: n, triggerMode: r }),
              },
            ),
            u = await s.json();
          return s.ok
            ? { success: !0 }
            : { success: !1, error: u.error ?? "Could not update channel" };
        } catch (s) {
          return {
            success: !1,
            error: s instanceof Error ? s.message : "Request failed",
          };
        }
      },
    ),
    e.handleInvoke("channel:delete-slack-space", async ({ spaceId: a }) => {
      const r = i.getCurrentProfile()?.id;
      if (!r) return { success: !1, error: "No active profile" };
      try {
        const n = new URLSearchParams({ profileId: r }),
          s = await o.authFetch(
            `${o.config.app.apiUrl}/api/channels/slack/spaces/${encodeURIComponent(a)}?${n.toString()}`,
            {
              accountId: o.authManager.forProfile(r).accountId,
              method: "DELETE",
            },
          ),
          u = await s.json();
        return s.ok
          ? { success: !0 }
          : { success: !1, error: u.error ?? "Could not remove channel" };
      } catch (n) {
        return {
          success: !1,
          error: n instanceof Error ? n.message : "Request failed",
        };
      }
    }),
    e.handleInvoke(
      "channel:delete-slack-installation",
      async ({ installationId: a }) => {
        const r = i.getCurrentProfile()?.id;
        if (!r) return { success: !1, error: "No active profile" };
        try {
          const n = new URLSearchParams({ profileId: r }),
            s = await o.authFetch(
              `${o.config.app.apiUrl}/api/channels/slack/installations/${encodeURIComponent(a)}?${n.toString()}`,
              {
                accountId: o.authManager.forProfile(r).accountId,
                method: "DELETE",
              },
            ),
            u = await s.json();
          return s.ok
            ? {
                success: !0,
                ...(u.revocationPending
                  ? {
                      warning:
                        "Slack was disconnected. Token revocation is retrying in the background.",
                    }
                  : {}),
              }
            : { success: !1, error: u.error ?? "Could not disconnect Slack" };
        } catch (n) {
          return {
            success: !1,
            error: n instanceof Error ? n.message : "Request failed",
          };
        }
      },
    ));
}
function z({
  layers: e,
  meetingTranscriptionOrchestrator: i,
  transcriptionFloatingWindowManager: I,
  meetingToastWindowManager: q,
}) {
  (e.handleInvoke(
    "meeting:continue-recording",
    async () => await i.continueRecordingFromUI(),
  ),
    e.handleInvoke(
      "meeting:finish-recording",
      async () =>
        await i.finishRecordingFromUI({ finishSource: "floating-recorder" }),
    ),
    e.handleInvoke(
      "meeting:open-post-meeting-chat",
      async ({ companionId: a }) => (await i.confirmPostMeetingChat(a), {}),
    ),
    e.handleInvoke(
      "meeting:open-post-meeting-page",
      async ({ destination: a }) =>
        a !== "summary" && a !== "recordings"
          ? {}
          : (await i.openPostMeetingPage(a), {}),
    ),
    e.handleInvoke(
      "meeting:open-panel",
      async ({
        meetingUrl: a,
        meetingTitle: r,
        scheduledStart: n,
        panelMode: s,
        windowId: u,
      }) => (
        await i.requestStart(
          {
            source: "meeting_url",
            meetingUrl: a,
            meetingTitle: r,
            scheduledStart: n,
            panelMode: s ?? "join",
            windowId: u,
          },
          { autoStart: !1, showPanel: !0 },
        ),
        { success: !0 }
      ),
    ),
    e.handleInvoke("transcription-window:close", async () => {
      await i.handlePanelAction({ type: "close" });
    }),
    e.handleInvoke(
      "transcription-window:set-size",
      async ({ width: a, height: r, windowId: n }) => {
        const s = n || e.getWindowId();
        I.resize(s, { width: a, height: r });
      },
    ),
    e.handleInvoke(
      "transcription-window:drag-move",
      async ({ dx: a, dy: r, windowId: n }) => {
        const s = n || e.getWindowId();
        I.moveBy(s, a, r);
      },
    ),
    e.handleInvoke("transcription:show-floating-window", async () => ({
      success: await i.showPanelForActiveSession(),
    })),
    e.handleInvoke("meeting-toast:record", async () => (q.handleRecord(), {})),
    e.handleInvoke(
      "meeting-toast:join-only",
      async () => (q.handleJoinOnly(), {}),
    ),
    e.handleInvoke(
      "meeting-toast:join-and-record",
      async () => (q.handleJoinAndRecord(), {}),
    ),
    e.handleInvoke(
      "meeting-toast:dismiss",
      async () => (q.handleDismiss(), {}),
    ),
    e.handleInvoke(
      "meeting-toast:show-settings-menu",
      async () => (q.showSettingsMenu(), {}),
    ),
    e.handleInvoke(
      "meeting-toast:open-settings",
      async () => (q.handleOpenSettings(), {}),
    ),
    e.handleInvoke(
      "meeting-toast:set-dont-show-again",
      async ({ dontShowAgain: a }) => (q.handleSetDontShowAgain(a), {}),
    ));
}
function U(e) {
  return e === "granted"
    ? "authorized"
    : e === "denied"
      ? "denied"
      : e === "restricted"
        ? "restricted"
        : "not_determined";
}
async function W(e, i) {
  if (i)
    return {
      microphone: U(C.systemPreferences.getMediaAccessStatus("microphone")),
      audio: "not_determined",
    };
  const I = await e();
  return {
    microphone: I?.microphone ?? "not_determined",
    audio: I?.audio ?? "not_determined",
  };
}
function x(e) {
  return {
    id: e.id,
    created: e.created.toISOString(),
    formattedDuration: e.formattedDuration(),
    lengthSeconds: e.lengthSeconds,
    hasTranscription: e.hasTranscription,
    canTranscribe: e.canTranscribe ?? !1,
    notes: void 0,
    tags: e.tags,
    lastAccessed: e.lastAccessed?.toISOString(),
    meetingTitle: e.meetingTitle,
    origin: e.origin,
    stage: e.stage ?? "recording",
    meetingPath: e.meetingPath ?? null,
    ingestLastError: e.ingestLastError ?? null,
    processedAt: e.processedAt ?? null,
    searchSnippets: e.searchSnippets,
  };
}
function j(e, i) {
  return i?.folder.summary.frontmatter.title ?? e.meetingTitle?.trim() ?? null;
}
function F(e) {
  const i = e?.trim();
  return i || void 0;
}
function V() {
  return !C.app.isPackaged || process.env.ELECTRON_IS_E2E === "true";
}
function M(e, i) {
  const I = new Date(i.getFullYear(), i.getMonth(), i.getDate()),
    q = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
    a = Math.round((I.getTime() - q.getTime()) / 864e5),
    r = e.toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
  return a === 0
    ? `Today, ${r}`
    : a === 1
      ? `Yesterday, ${r}`
      : `${e.toLocaleDateString(void 0, { month: "short", day: "numeric" })}, ${r}`;
}
function B(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "isUsageLimit" in e &&
    e.isUsageLimit === !0
  );
}
function J({
  layers: e,
  profileService: i,
  window: I,
  windowManager: q,
  meetingTranscriptionOrchestrator: a,
  transcriptionManager: r,
  shell: n,
  isMac: s,
}) {
  const u = new o.TranscriptionEventBridge(),
    y = async () =>
      s
        ? U(C.systemPreferences.getMediaAccessStatus("microphone"))
        : ((await r.getAudioPermissions())?.microphone ?? "not_determined"),
    p = async () => {
      if (!s)
        return (
          (await r.requestAudioPermissions("microphone"))?.microphone ??
          "not_determined"
        );
      const t = U(C.systemPreferences.getMediaAccessStatus("microphone"));
      return t === "authorized"
        ? t
        : (await C.systemPreferences.askForMediaAccess("microphone"))
          ? "authorized"
          : U(C.systemPreferences.getMediaAccessStatus("microphone"));
    },
    S = async () => {
      const t = await y();
      return t === "authorized"
        ? !0
        : t === "not_determined"
          ? (await p()) === "authorized"
          : !1;
    },
    b = (t) => {
      u.publishTranscriptionCreditsToast({ ...t, windowId: e.getWindowId() });
    },
    k = async () => {
      try {
        return await o.hasTranscriptionCreditsAvailable(
          i.getCurrentProfile()?.accountId ?? null,
        );
      } catch {
        return !0;
      }
    },
    T = async () =>
      (await k())
        ? !0
        : (b({
            source: "transcription-preflight",
            message: o.PRE_TRANSCRIPTION_CREDITS_MESSAGE,
          }),
          !1);
  (e.handleInvoke(
    "transcription:start",
    async ({
      source: t,
      chatSessionId: c,
      tabId: l,
      meetingUrl: f,
      meetingTitle: P,
      companionId: h,
      layerId: m,
    }) => {
      if (!(await S())) return null;
      const w = T(),
        g = e.getWindowId(),
        R = q.getManagedWindowById(g),
        A = t === "chat-input" || t === "inline-input" || t === "sidebar",
        v = F(m),
        D = F(l),
        _ = F(R?.permissionOwner()?.page.id);
      let E;
      t === "chat-input"
        ? (E = D ?? v ?? _)
        : A
          ? (E = D ?? v)
          : (E = D ?? _ ?? v);
      const N = {
          source: t,
          windowId: g,
          layerId: v,
          chatSessionId: c,
          tabId: E,
          meetingUrl: f,
          meetingTitle: P,
          companionId: h,
        },
        $ = o.getCaptureModeForOrigin(N);
      (o.transcriptionLogger.info(
        "[TranscriptionInvocations] Starting transcription session",
        {
          source: t,
          windowId: g,
          captureMode: $,
          hasLiveLayerId: !!v,
          hasDurableTabId: !!D,
          hasActiveTabId: !!_,
          hasResolvedTabId: !!E,
          hasChatSessionId: !!c,
        },
      ),
        await a.takeOverRecorder());
      const L = await r.startSession({ ...N, captureMode: $ });
      return (
        L && !(await w) && r.skipTranscriptionForUsageLimit(L.recordingId),
        L
      );
    },
  ),
    e.handleInvoke(
      "transcription:stop",
      async ({ chatContext: t, existingInputText: c, recordingId: l } = {}) =>
        l && r.getActiveSession()?.recordingId !== l
          ? null
          : await a.finishRecordingFromUI({
              chatContext: t,
              existingInputText: c,
              finishSource: "composer",
            }),
    ),
    e.handleInvoke("transcription:get-session-state", async () => {
      const t = r.getActiveSession();
      return t
        ? {
            active: !0,
            recordingId: t.recordingId,
            isRecording: !t.isPaused,
            isPaused: t.isPaused,
            originSource: t.origin.source,
            chatSessionId: t.origin.chatSessionId ?? null,
            originLayerId: o.getLiveTranscriptionLayerId(t.origin) ?? null,
            panelVisible: a.isPanelVisible(),
            startedAt: t.startedAt.toISOString(),
          }
        : {
            active: !1,
            recordingId: null,
            isRecording: !1,
            isPaused: !1,
            originSource: null,
            chatSessionId: null,
            originLayerId: null,
            panelVisible: a.isPanelVisible(),
            startedAt: null,
          };
    }),
    e.handleInvoke(
      "audio:stop-recording",
      async () => await a.stopRecordingFromUI(),
    ),
    e.handleInvoke("audio:get-permissions", async () =>
      W(() => r.getAudioPermissions(), s),
    ),
    e.handleInvoke("audio:get-manager-state", async () => ({
      isInitialized: r.isAudioManagerInitialized(),
    })),
    e.handleInvoke("audio:list-input-devices", async () => ({
      devices: r.listInputDevices(),
    })),
    e.handleInvoke(
      "audio:set-preferred-input-device",
      async ({ deviceId: t }) => ({ success: r.setPreferredInputDevice(t) }),
    ),
    e.handleInvoke("audio:request-permissions", async ({ deviceType: t }) => {
      if (t === "microphone") {
        const [c, l] = await Promise.all([r.getAudioPermissions(), p()]);
        return { microphone: l, audio: c?.audio ?? "not_determined" };
      }
      return await r.requestAudioPermissions(t);
    }),
    e.handleInvoke("audio:get-recordings", async () => {
      const t = i.getCurrentProfile();
      return t ? { recordings: await r.getRecordings(t) } : { recordings: [] };
    }),
    e.handleInvoke(
      "audio:search-recordings",
      async ({ query: t, limit: c }) => {
        const l = i.getCurrentProfile();
        if (!l) return { recordings: [] };
        const f = t.trim();
        return f
          ? {
              recordings: (
                await r.getRecordingStorage(l).searchRecordings(f, c ?? 50)
              ).map(x),
            }
          : { recordings: [] };
      },
    ),
    e.handleInvoke("audio:delete-recording", async ({ recordingId: t }) => {
      const c = i.getCurrentProfile();
      return c
        ? r.isRecordingInUse(t)
          ? { success: !1 }
          : { success: await r.getRecordingStorage(c).deleteRecording(t) }
        : { success: !1 };
    }),
    e.handleInvoke("audio:transcribe-recording", async ({ recordingId: t }) => {
      const c = i.getCurrentProfile();
      if (!c) return { success: !1, reason: "No active profile" };
      const P = (await r.getRecordingStorage(c).getAllRecordings()).find(
        (m) => m.id === t,
      );
      if (!P) return { success: !1, reason: "Recording not found" };
      if (P.hasTranscription) return { success: !0 };
      if (!P.canTranscribe)
        return {
          success: !1,
          reason: "This recording does not have saved audio to transcribe.",
        };
      if (!(await k()))
        return (
          b({
            source: "recording-transcribe",
            recordingId: t,
            message: o.SAVED_RECORDING_CREDITS_MESSAGE,
          }),
          { success: !1, reason: o.SAVED_RECORDING_CREDITS_MESSAGE }
        );
      try {
        return await r.transcribeRecording(c, t);
      } catch (m) {
        return B(m)
          ? (b({
              source: "recording-transcribe",
              recordingId: t,
              message: o.SAVED_RECORDING_CREDITS_MESSAGE,
            }),
            { success: !1, reason: o.SAVED_RECORDING_CREDITS_MESSAGE })
          : {
              success: !1,
              reason:
                m instanceof Error
                  ? m.message
                  : "Could not transcribe this recording.",
            };
      }
    }),
    e.handleInvoke(
      "audio:attach-recording-to-chat",
      async ({ recordingId: t, chatSessionId: c }) => {
        const l = i.getCurrentProfile();
        if (!l) return { success: !1, reason: "No active profile" };
        if (!I.chat) return { success: !1, reason: "Chat is not available" };
        const f = r.getRecordingStorage(l),
          h = (await f.getAllRecordings()).find((g) => g.id === t);
        let m;
        if (h) {
          if (!h.hasTranscription)
            return {
              success: !1,
              reason: "This recording does not have a transcript yet",
            };
          const g = await f.loadMeeting(h.id);
          m = o.buildMeetingAttachment({
            recordingId: h.id,
            meetingPath: g?.meetingPath ?? h.meetingPath ?? null,
            title: j(h, g),
            created: h.created,
            lengthSeconds: h.lengthSeconds,
            stage: h.stage ?? (g ? "raw" : "transcribing"),
            summary: g?.folder.summary.frontmatter ?? null,
          });
        } else {
          const g = await f.loadSyncedMeeting(t);
          if (!g) return { success: !1, reason: "Recording not found" };
          m = o.buildSyncedMeetingAttachment({
            meetingPath: g.meetingPath,
            summary: g.folder.summary.frontmatter,
          });
        }
        const d =
          c && c.trim().length > 0
            ? { id: c }
            : await I.chat.createNewSession();
        return (
          (await I.chat.getDraftController(d.id)).editComposer({
            text: null,
            file: m,
          }),
          I.tabs.openOrSwitchToChatTab?.(d.id),
          { success: !0, sessionId: d.id }
        );
      },
    ),
    e.handleInvoke(
      "transcription:get-recording-files",
      async ({ recordingId: t }) => {
        const c = i.getCurrentProfile();
        return c
          ? {
              files: await r
                .getRecordingStorage(c)
                .listRecordingFileLocations(t),
            }
          : { files: [] };
      },
    ),
    e.handleInvoke(
      "transcription:open-recording-file",
      async ({ recordingId: t, fileId: c }) => {
        const l = i.getCurrentProfile();
        if (!l) return { success: !1 };
        const h = (
          await r.getRecordingStorage(l).listRecordingFileLocations(t)
        ).find((m) => m.id === c);
        return h
          ? (h.isDirectory
              ? await n.openPath(h.path)
              : n.showItemInFolder(h.path),
            { success: !0 })
          : { success: !1 };
      },
    ),
    e.handleInvoke(
      "transcription:levels-test:start",
      async ({ windowId: t }) => {
        const c = t || e.getWindowId();
        return await r.startLevelTest(c);
      },
    ),
    e.handleInvoke(
      "transcription:levels-test:stop",
      async () => await r.stopLevelTest(),
    ),
    e.handleInvoke("meetings:transcribe-fixture", async ({ fixture: t }) => {
      if (!V())
        return {
          success: !1,
          reason: "Fixture meetings are only available in development.",
        };
      const c = i.getCurrentProfile();
      if (!c) return { success: !1, reason: "No active profile" };
      const l = O.resolveDebugFixtureDir(t);
      if (!l) return { success: !1, reason: "Unknown fixture" };
      try {
        return {
          success: !0,
          recordingId: (await r.transcribeFakeMeeting(c, l)).recordingId,
        };
      } catch (f) {
        return {
          success: !1,
          reason:
            f instanceof Error
              ? f.message
              : "Could not import the fixture meeting.",
        };
      }
    }),
    e.handleInvoke("meetings:get-recent", async () => {
      const t = i.getCurrentProfile();
      if (!t) return { meetings: [] };
      const c = r.getRecordingStorage(t),
        l = await c.getAllRecordings(),
        f = new Date(),
        P = new Date(f.getTime() - 720 * 60 * 60 * 1e3),
        h = l
          .filter((d) =>
            !d.stage || d.created < P
              ? !1
              : d.stage === "ready" ||
                d.stage === "raw" ||
                o.IN_FLIGHT_RECORDING_STAGES.includes(d.stage),
          )
          .sort((d, w) => w.created.getTime() - d.created.getTime()),
        m = [];
      for (const d of h) {
        const w = await c.loadMeeting(d.id),
          g = j(d, w),
          R = o.buildMeetingAttachment({
            recordingId: d.id,
            meetingPath: w?.meetingPath ?? d.meetingPath ?? null,
            title: g,
            created: d.created,
            lengthSeconds: d.lengthSeconds,
            stage: d.stage ?? "raw",
            summary: w?.folder.summary.frontmatter ?? null,
            now: f,
          }),
          A = d.formattedDuration(),
          v = g ? [M(d.created, f), A] : [A];
        (R.metadata?.meetingState === "processing" && v.push("Processing"),
          m.push({
            created: d.created,
            attachment: { ...R, displaySubtitle: v.join(" ") },
          }));
      }
      for (const {
        meetingPath: d,
        summary: w,
      } of await c.listSyncedMeetings()) {
        const g = new Date(w.started_at);
        if (g < P) continue;
        const R = [M(g, f), o.formatAttachmentDuration(w.duration_seconds)];
        m.push({
          created: g,
          attachment: {
            ...o.buildSyncedMeetingAttachment({
              meetingPath: d,
              summary: w,
              now: f,
            }),
            displaySubtitle: R.join(" "),
          },
        });
      }
      return {
        meetings: m
          .sort((d, w) => w.created.getTime() - d.created.getTime())
          .map(({ attachment: d }) => d),
      };
    }));
}
function Y({ transcription: e, meetingSurface: i, channels: I }) {
  (J(e), z(i), G(I));
}
exports.registerUIRendererSplitInvocations = Y;
