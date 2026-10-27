"use strict";
(function () {
  try {
    var d =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    d.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var d =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new d.Error().stack;
    e &&
      ((d._sentryDebugIds = d._sentryDebugIds || {}),
      (d._sentryDebugIds[e] = "f1f5bc20-8d03-4b77-8e63-457f059304a1"),
      (d._sentryDebugIdIdentifier =
        "sentry-dbid-f1f5bc20-8d03-4b77-8e63-457f059304a1"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const n = require("../main-app.js"),
  L = require("./unicode-CSAGP0Z8.js"),
  T = require("./OptMemQueryService-1Nw8Jpet.js"),
  V = require("./query-vectors-D71QDCtv.js"),
  _ = require("./relevance-tmTWjdK0.js"),
  g = require("./relevance-check-D4m2kws0.js"),
  x = require("./embedding-Dugvo4EV.js");
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
const D = 10,
  X = 4096,
  H = 1e4,
  W = 5e3,
  G = 32,
  j = 3,
  Q = { matches: [], trace: { status: "off" } };
function S(d) {
  return d
    .filter((e) => !e.hidden && (e.role === "user" || e.role === "assistant"))
    .map((e) => ({
      message: e,
      text: n.stripQueuedUserMessageTags(n.getMessageText(e)).trim(),
    }))
    .filter(({ text: e }) => e.length > 0);
}
class b {
  constructor(
    e = T.optMemQueryService,
    o = V.embedOptMemQuery,
    r = g.checkOptMemRelevance,
    t = n.optMemRecallTraces,
  ) {
    ((this.queries = e),
      (this.embed = o),
      (this.checkRelevance = r),
      (this.traces = t));
  }
  #e = new Map();
  take(e, o, r, t) {
    const a = this.#e.get(e) ?? {
      owner: o,
      ownerMessageId: t.id,
      prepared: new Map(),
      injected: new Map(),
    };
    ((a.owner = o),
      (a.ownerMessageId = t.id),
      this.#e.delete(e),
      this.#e.set(e, a));
    for (const u of this.#e.keys()) {
      if (this.#e.size <= G) break;
      this.#e.delete(u);
    }
    const p = r.findIndex((u) => u.id === t.id),
      s = S(p === -1 ? r : r.slice(0, p)).at(-1)?.message;
    if (s?.role !== "assistant") {
      const u = s ? "no-reply" : "first-message";
      return (this.traces.delivered(e, t.id, null, u), u);
    }
    const c = a.prepared.get(s.id);
    if (!c || c === "pending") {
      const u = c ? "still-preparing" : "not-prepared";
      return (this.traces.delivered(e, t.id, s.id, u), u);
    }
    return (
      this.traces.delivered(e, t.id, s.id, null),
      a.injected.set(
        t.id,
        c.map(({ id: u }) => u),
      ),
      c
    );
  }
  prepareAfterReply(e, o) {
    const r = this.#e.get(e);
    if (!r) return Promise.resolve();
    const t = S(o),
      a = t.at(-1)?.message,
      p = t.findLast(({ message: s }) => s.role === "user")?.message;
    if (
      a?.role !== "assistant" ||
      p?.id !== r.ownerMessageId ||
      r.prepared.has(a.id)
    )
      return Promise.resolve();
    r.prepared.set(a.id, "pending");
    for (const s of r.prepared.keys()) {
      if (r.prepared.size <= j) break;
      r.prepared.delete(s);
    }
    return (
      this.traces.preparing(
        e,
        a.id,
        t
          .slice(-n.OPTMEM_RELEVANCE_CONVERSATION_MESSAGES)
          .map(({ message: s }) => s.id),
      ),
      this.#r(r, t).then(
        ({ matches: s, search: c }) => {
          (this.traces.prepared(e, a.id, c),
            r.prepared.has(a.id) && r.prepared.set(a.id, s),
            n.logger.debug("[OptMem] Prepared recall ready", {
              profileId: r.owner.profileId,
              companionId: r.owner.companionId,
              sessionId: e,
              sourceWorkspaceId: r.owner.sourceWorkspaceId ?? null,
              matches: s.length,
              ...(c
                ? {
                    words: c.words,
                    meaning: c.meaning,
                    check: c.check,
                    alreadyShown: c.candidates.filter(
                      ({ outcome: u }) => u === "already-shown",
                    ).length,
                    durationMs: c.durationMs,
                  }
                : {}),
            }));
        },
        (s) => {
          (this.traces.failed(e, a.id, s),
            r.prepared.delete(a.id),
            n.logger.info("[OptMem] Prepared recall unavailable", {
              profileId: r.owner.profileId,
              companionId: r.owner.companionId,
              sessionId: e,
              outcome: "skipped",
              reason: "failed",
            }));
        },
      )
    );
  }
  async #r(e, o) {
    const r = performance.now(),
      { owner: t } = e,
      a = o.findLastIndex(({ message: i }) => i.role === "user"),
      p = o[a]?.text,
      s = o.at(-1)?.text;
    if (!p || !s) return { matches: [], search: null };
    const c = new Set(o.map(({ message: i }) => i.id)),
      u = new Set();
    for (const [i, q] of e.injected)
      if (!c.has(i)) e.injected.delete(i);
      else for (const M of q) u.add(M);
    const O = o
        .slice(0, a)
        .map(({ text: i }) => i.slice(0, n.OPTMEM_RELEVANCE_CONTEXT_MAX_CHARS)),
      h = await this.queries.relevant(
        t.profileId,
        t.companionId,
        {
          text: p,
          recentMessages: [
            s.slice(0, n.OPTMEM_RELEVANCE_CONTEXT_MAX_CHARS),
            ...O.reverse(),
          ].slice(0, n.OPTMEM_RELEVANCE_CONTEXT_MESSAGES),
        },
        t.accountId,
        void 0,
        ...(t.sourceWorkspaceId ? [t.sourceWorkspaceId] : []),
      ),
      k = n.elapsedMs(r),
      C =
        h.kind === "result"
          ? { status: "result", count: h.value.matches.length, durationMs: k }
          : { status: "unavailable", reason: h.reason, durationMs: k },
      R = h.kind === "result" ? h.value.matches : [],
      m = R.filter(({ id: i }) => !u.has(i)),
      I = t.semanticRecall
        ? await this.#t(
            t,
            `${p}

${s}`,
          )
        : Q,
      v = new Set(m.map(({ id: i }) => i)),
      w = I.matches.filter(({ id: i }) => !v.has(i) && !u.has(i)),
      f = [...m, ...w].slice(0, n.OPTMEM_RELEVANCE_MAX_MEMORIES),
      E = (i, q, M) => ({
        words: C,
        meaning: I.trace,
        check: i,
        candidates: n.traceRecallCandidates({
          words: R,
          meaning: I.matches,
          shown: u,
          sent: f,
          probabilities: q,
          used: M,
          meaningNeedsCheck: t.relevanceCheck,
        }),
        durationMs: n.elapsedMs(r),
      });
    if (f.length === 0)
      return { matches: [], search: E({ status: "no-candidates" }, null, []) };
    if (!t.relevanceCheck) {
      const i = _.fitOptMemMemories(T.interleaveOptMemMatches(m, w));
      return { matches: i, search: E({ status: "off" }, null, i) };
    }
    const N = performance.now(),
      l = await this.checkRelevance(
        {
          kind: "next",
          messages: o
            .slice(-n.OPTMEM_RELEVANCE_CONVERSATION_MESSAGES)
            .map(({ message: i, text: q }, M, P) => ({
              from: i.role === "user" ? "person" : "assistant",
              text: L.sanitizeUnpairedSurrogates(
                q.slice(
                  0,
                  M >= P.length - 2 ? X : n.OPTMEM_RELEVANCE_CONTEXT_MAX_CHARS,
                ),
              ),
            })),
          memories: f.map(g.optMemRelevanceMemory),
        },
        { accountId: t.accountId, timeoutMs: W },
      ),
      y = n.elapsedMs(N);
    if (l.kind === "checked") {
      const i = g.rankRelevantMemories(f, l.probabilities),
        q = _.fitOptMemMemories(i);
      return {
        matches: q,
        search: E(
          {
            status: "checked",
            sent: f.length,
            kept: i.length,
            threshold: n.OPTMEM_RELEVANCE_THRESHOLD,
            durationMs: y,
          },
          l.probabilities,
          q,
        ),
      };
    }
    n.logger[g.relevanceCheckLogLevel(l)](
      "[OptMem] Relevance check unavailable; preparing unfiltered memories",
      {
        profileId: t.profileId,
        companionId: t.companionId,
        outcome: "unfiltered",
        reason: l.reason,
        ...(l.status ? { status: l.status } : {}),
      },
    );
    const A = _.fitOptMemMemories(m);
    return {
      matches: A,
      search: E(
        {
          status: "unavailable",
          sent: f.length,
          reason: l.reason,
          ...(l.status ? { httpStatus: l.status } : {}),
          durationMs: y,
        },
        null,
        A,
      ),
    };
  }
  async #t(e, o) {
    return n.searchByMeaning(
      await n.timed(
        this.embed(o.slice(0, x.OPTMEM_QUERY_EMBEDDING_MAX_CHARS), {
          accountId: e.accountId,
          timeoutMs: H,
        }),
      ),
      (r) =>
        this.queries.similar({
          profileId: e.profileId,
          companionId: e.companionId,
          accountId: e.accountId,
          ...(e.sourceWorkspaceId
            ? { sourceWorkspaceId: e.sourceWorkspaceId }
            : {}),
          query: r,
          limit: D,
          budgeted: !1,
        }),
    );
  }
}
const U = new b();
exports.OptMemRecallPrefetch = b;
exports.optMemRecallPrefetch = U;
