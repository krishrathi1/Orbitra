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
      (n._sentryDebugIds[e] = "2eafba1d-e17e-4536-af85-9c494399d725"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-2eafba1d-e17e-4536-af85-9c494399d725"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const h = require("../main-app.js"),
  b = require("./dream-client-BJEEwUCf.js"),
  k = require("./shared-memory-s9w_2juE.js"),
  C = require("./schedule-AlkLCp6i.js");
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
require("./contracts-D11OCoTk.js");
require("./OptMemReplicaRegistry-DUxGLqg7.js");
require("./replica-files-CUHDGfIt.js");
require("./OptMemSyncRunner-u5O_GHna.js");
require("./relevance-tmTWjdK0.js");
const w = 50,
  y = "Notes could not be loaded. Try again.";
async function S(n, e) {
  const r = n.chatSessionManager.userProfile.id,
    t = h.authManager.forProfile(r).accountId;
  return t
    ? h.memoryService.getRegistration(r)?.selection.kind !== "optmem-v1"
      ? { kind: "refused", error: "Memory is not on for this profile." }
      : (await n.companionManager.ensureCompanionLocation(e),
        {
          kind: "ready",
          profileId: r,
          accountId: t,
          companionId: e,
          source: h.resolveCompanionSource(n.companionManager, e),
        })
    : { kind: "refused", error: "Sign in to see memory." };
}
async function E(n, e, r) {
  let t = 0;
  for (const s of n) {
    const a = await s.replica.dreamNotes({
      companionId: e,
      afterMs: r,
      beforeMs: null,
      order: "oldest",
      limit: 0,
    });
    if (a.kind === "error") return null;
    t += a.value.matches.length;
  }
  return t;
}
async function _(n, e) {
  const r = await S(n, e);
  if (r.kind === "refused") return { success: !1, error: r.error };
  const t = r.source?.workspaceId ?? null;
  if (
    !(
      r.source?.kind === "owned" &&
      t !== null &&
      t ===
        h.syncedFSManagerRegistry
          .forAccount(r.accountId)
          .getWorkspaceIdForProfile(r.profileId)
    ) ||
    t === null
  )
    return {
      success: !0,
      owned: !1,
      running: !1,
      waitingNotes: null,
      dreams: [],
    };
  const a = { kind: "companion", workspaceId: t, companionId: e },
    [l, c, f] = await Promise.all([
      b.listOptMemDreams(r.accountId).catch(() => null),
      b.readOptMemDreamState(r.accountId, a).catch(() => null),
      k
        .openOptMemCompanionNoteLanes({
          profileId: r.profileId,
          accountId: r.accountId,
          companionId: e,
          sourceWorkspaceId: t,
        })
        .catch(() => null),
    ]),
    d = f?.kind === "result" ? f.lanes : null,
    p =
      c && d
        ? await E(
            d,
            e,
            c.lastCompleted?.notesThroughMs ??
              Date.now() - C.OPTMEM_DREAM_FIRST_NIGHT_MS,
          )
        : null;
  return {
    success: !0,
    owned: !0,
    running: c !== null && c.running !== null,
    waitingNotes: p,
    dreams: (l?.dreams ?? [])
      .filter(
        (o) =>
          o.kind === "companion" &&
          o.companionId === e &&
          o.workspaceId === t &&
          o.status !== "running",
      )
      .map((o) => ({
        id: o.id,
        startedAtMs: o.startedAtMs,
        status: o.status === "failed" ? "failed" : "complete",
        error: o.error,
        changed: o.filesChanged.length > 0,
        hadNotes: o.sessionId !== null || o.filesChanged.length > 0,
      })),
  };
}
function M(n, e, r) {
  const t = e.authorUserId ?? n.authorUserId,
    s = e.authorName ?? n.authorName ?? "Someone";
  return t === null
    ? { key: `name:${s}`, name: s, you: !1 }
    : { key: t === r ? "you" : t, name: s, you: t === r };
}
function D(n, e, r) {
  if (e === null) return {};
  if (e.startsWith("name:"))
    return n.authorUserId === null ? { authorName: e.slice(5) } : null;
  const t = e === "you" ? r : e;
  return n.authorUserId !== null
    ? n.authorUserId === t
      ? {}
      : null
    : { authorUserId: t };
}
async function O(n, e) {
  const r = await S(n, e.companionId);
  if (r.kind === "refused") return { success: !1, error: r.error };
  if (!r.source)
    return {
      success: !0,
      total: 0,
      matching: 0,
      truncated: !1,
      authors: [],
      notes: [],
      hasMore: !1,
    };
  const t = await k.openOptMemCompanionNoteLanes({
    profileId: r.profileId,
    accountId: r.accountId,
    companionId: e.companionId,
    sourceWorkspaceId: r.source.workspaceId,
  });
  if (t.kind !== "result") return { success: !1, error: y };
  const s = e.search.trim().split(/\s+/).filter(Boolean),
    a = new Map(),
    l = [];
  let c = 0,
    f = 0,
    d = !1;
  for (const i of t.lanes) {
    const u = await i.replica.dreamNotes({
      companionId: e.companionId,
      afterMs: null,
      beforeMs: null,
      order: "newest",
      limit: 0,
    });
    if (u.kind === "error") return { success: !1, error: y };
    ((c += u.value.matches.length), (d ||= u.value.truncated));
    for (const I of u.value.matches) {
      const g = M(i, I, r.accountId);
      a.has(g.key) || a.set(g.key, g);
    }
    const q = D(i, e.author, r.accountId);
    if (q === null) continue;
    const m = await i.replica.dreamNotes({
      companionId: e.companionId,
      ...q,
      afterMs: null,
      beforeMs: e.beforeMs,
      order: "newest",
      limit: w + 1,
      ...(s.length > 0 ? { match: { kind: "words", words: s } } : {}),
    });
    if (m.kind === "error") return { success: !1, error: y };
    ((f += m.value.matches.length),
      (d ||= m.value.truncated),
      l.push(...m.value.notes.map((I) => ({ lane: i, note: I }))));
  }
  l.sort((i, u) => u.note.observedAtMs - i.note.observedAtMs);
  const p = l.slice(0, w),
    o = p.filter(({ lane: i, note: u }) => M(i, u, r.accountId).you),
    N = [
      ...new Set(
        o.flatMap(({ note: i }) =>
          i.sourceSessionId ? [i.sourceSessionId] : [],
        ),
      ),
    ],
    v = await n.chatSessionManager.listSessionMetadataByIds(N).catch(() => []),
    A = new Map(v.map((i) => [i.id, i.title])),
    T = p.map(({ lane: i, note: u }) => {
      const q = M(i, u, r.accountId);
      return {
        id: u.id,
        text: u.text,
        savedAtMs: u.observedAtMs,
        author: q.you ? null : q.name,
        chatTitle:
          q.you && u.sourceSessionId
            ? (A.get(u.sourceSessionId) ?? null)
            : null,
      };
    });
  return {
    success: !0,
    total: c,
    matching: f,
    truncated: d,
    authors: [...a.values()].sort((i, u) => Number(u.you) - Number(i.you)),
    notes: T,
    hasMore: l.length > w,
  };
}
exports.listCompanionDreams = _;
exports.listCompanionNotes = O;
