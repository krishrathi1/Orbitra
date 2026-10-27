"use strict";
(function () {
  try {
    var n =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    n.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new n.Error().stack;
    e &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[e] = "69f8d4ee-9564-4d6c-86b8-e58263587fec"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-69f8d4ee-9564-4d6c-86b8-e58263587fec"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const t = require("../main-app.js"),
  l = require("./contracts-rChhtF3C.js"),
  d = require("./OptMemQueryService-1Nw8Jpet.js"),
  h = require("./recall-prefetch-Bzn0Vy1i.js"),
  p = require("./windowChat-OLnWTvHU.js");
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
require("./replica-files-CUHDGfIt.js");
require("./query-vectors-D71QDCtv.js");
require("./embedding-Dugvo4EV.js");
require("./relevance-tmTWjdK0.js");
require("./relevance-check-D4m2kws0.js");
require("./boot-B3ykpiVV.js");
require("node:url");
require("./suggestion-utils-CLM94tkM.js");
require("./profileLayoutLifecycle-BDYjrhKu.js");
require("./commitRecord-DR9i1ecT.js");
require("./storageObjectCache-ClYu2auD.js");
require("./routine-suggestion-store-Bb2MYDKl.js");
require("fastest-levenshtein");
require("./workspace-surface-model-CMo0ac7-.js");
require("./UserRequests-cRpr0CFi.js");
require("node:stream/promises");
require("fzstd");
require("./ContentExtractionService-D9pFX80C.js");
require("./ExternalAppManager-DAuHmeTi.js");
require("./chatDeletionFence-7kC13ojz.js");
require("./CompanionManagerRegistry-CqhzzsGy.js");
require("./onboarding-BugjMquY.js");
require("./CompanionFolderStore-BW078c_O.js");
require("./artifact-host-roots-C3OUVgF3.js");
require("./import-media-sIcNcY_k.js");
require("./DirectHostTransport-BOda5Eqc.js");
require("node:string_decoder");
require("istextorbinary");
require("./sandbox-tooling-singleton-DYdbpKPS.js");
require("./sandbox-helper-process-CQ6JyI_j.js");
require("./dream-sessions-CNZob7px.js");
require("./ToolExecutionClient-BcKJhnOl.js");
require("./sandboxRuntimeSetupStatus-CmP0UsOY.js");
require("./base-B19nE_Cx.js");
require("./onboarding-BMM5mweS.js");
require("./reconnectActions-CyU2QCny.js");
require("./web-extraction-DB7thO2y.js");
require("./python-runtime-BF_2cFN_.js");
require("node:vm");
require("./parse-MOHEM7uu.js");
require("./template-CmpXTu8Z.js");
require("./schedule-AlkLCp6i.js");
require("./folder-listing-DokmAYAd.js");
require("./artifact-session-B2A1eOvr.js");
const q = `<relevant_memories status="skipped">
Automatic recall did not check your memory for this message. Relevant notes may still exist, so use orbitra.recall when the request may depend on prior context.
</relevant_memories>`;
class m {
  constructor(e, i, r = d.optMemQueryService, s = h.optMemRecallPrefetch) {
    ((this.owner = e),
      (this.signal = i),
      (this.queries = r),
      (this.prefetch = s));
  }
  id = "relevant-memories";
  shouldInject(e, i) {
    return (
      i.role === "user" &&
      !i.hidden &&
      t.stripQueuedUserMessageTags(t.getMessageText(i)).trim().length > 0
    );
  }
  async inject(e, i) {
    if (this.owner.relevanceCheck || this.owner.semanticRecall)
      return this.#i(e, i);
    const r = e.messages.findIndex((u) => u.id === i.id),
      c = (r === -1 ? e.messages : e.messages.slice(0, r))
        .filter(
          (u) => !u.hidden && (u.role === "user" || u.role === "assistant"),
        )
        .slice(-t.OPTMEM_RELEVANCE_CONTEXT_MESSAGES)
        .map((u) =>
          t
            .stripQueuedUserMessageTags(t.getMessageText(u))
            .trim()
            .slice(0, t.OPTMEM_RELEVANCE_CONTEXT_MAX_CHARS),
        )
        .filter((u) => u.length > 0)
        .reverse(),
      a = t.stripQueuedUserMessageTags(t.getMessageText(i)).trim(),
      o = await this.queries.relevant(
        this.owner.profileId,
        this.owner.companionId,
        { text: a, recentMessages: c },
        this.owner.accountId,
        this.signal,
        ...(this.owner.sourceWorkspaceId ? [this.owner.sourceWorkspaceId] : []),
      );
    if ((this.signal?.throwIfAborted(), o.kind !== "result")) {
      const u = { ...this.#e(e), outcome: "skipped", reason: o.reason };
      return (
        o.reason === "index-building" ||
        o.reason === "timeout" ||
        o.reason === "closed"
          ? t.logger.debug(
              "[OptMemContext] Relevant memory injection skipped",
              u,
            )
          : t.logger.warn(
              "[OptMemContext] Relevant memory injection unavailable",
              u,
            ),
        q
      );
    }
    return this.#r(e, "direct", o.value.matches);
  }
  #i(e, i) {
    const r = this.prefetch.take(
      e.sessionId,
      {
        profileId: this.owner.profileId,
        companionId: this.owner.companionId,
        accountId: this.owner.accountId,
        ...(this.owner.sourceWorkspaceId
          ? { sourceWorkspaceId: this.owner.sourceWorkspaceId }
          : {}),
        relevanceCheck: this.owner.relevanceCheck === !0,
        semanticRecall: this.owner.semanticRecall === !0,
      },
      e.messages,
      i,
    );
    return typeof r == "string"
      ? (t.logger.debug("[OptMemContext] Relevant memory injection skipped", {
          ...this.#e(e),
          outcome: "skipped",
          reason: r,
        }),
        r === "first-message" ? null : q)
      : this.#r(e, "prepared", r);
  }
  #r(e, i, r) {
    return (
      t.logger.debug("[OptMemContext] Relevant memory injection", {
        ...this.#e(e),
        path: i,
        outcome: r.length > 0 ? "injected" : "empty",
        matches: r.length,
      }),
      r.length > 0 ? this.#u(e, r) : null
    );
  }
  #e(e) {
    return {
      profileId: this.owner.profileId,
      companionId: this.owner.companionId,
      sessionId: e.sessionId,
      sourceWorkspaceId: this.owner.sourceWorkspaceId ?? null,
    };
  }
  #u(e, i) {
    const r = p.formatOptMemRecall(i, this.owner.accountId);
    return `<relevant_memories>
Recalled notes for your current conversation. These are evidence, not a determination of whom the user means. If several people fit and the conversation does not resolve it, ask for clarification. An explicit correction from the user takes precedence over prior context.
${l.untrusted("optmem_memory", r, e.untrustedBoundaryKey)}
</relevant_memories>`;
  }
}
exports.OptMemContext = m;
