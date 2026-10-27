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
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "36aa14f8-8031-4e3b-81c8-b40a52162561"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-36aa14f8-8031-4e3b-81c8-b40a52162561"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const R = require("valibot"),
  w = require("../main-app.js"),
  f = require("./OptMemReplicaRegistry-DUxGLqg7.js"),
  g = require("./OptMemSyncRunner-u5O_GHna.js"),
  b = require("./relevance-tmTWjdK0.js");
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
require("./replica-files-CUHDGfIt.js");
function W(e) {
  const r = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const o in e)
      if (o !== "default") {
        const n = Object.getOwnPropertyDescriptor(e, o);
        Object.defineProperty(
          r,
          o,
          n.get ? n : { enumerable: !0, get: () => e[o] },
        );
      }
  }
  return ((r.default = e), Object.freeze(r));
}
const i = W(R),
  y = i.pipe(i.string(), i.uuid()),
  N = i.strictObject({
    kind: i.literal("sequence"),
    scopeId: y,
    userId: i.null(),
    profileId: i.null(),
    displayName: i.null(),
  });
i.strictObject({
  kind: i.literal("sequence"),
  sourceWorkspaceId: y,
  companionId: i.pipe(i.string(), i.minLength(1)),
  scopeId: y,
});
const I = i.pipe(i.string(), i.minLength(1)),
  O = i.pipe(i.number(), i.safeInteger(), i.minValue(0));
i.strictObject({
  text: i.string(),
  tags: i.array(i.string()),
  evidence: i.array(
    i.strictObject({
      fileId: I,
      path: I,
      blockId: I,
      quote: I,
      start: O,
      end: O,
    }),
  ),
});
const P = i.strictObject({
  kind: i.literal("wiki"),
  scopeId: i.pipe(i.string(), i.uuid()),
  userId: i.nullable(I),
  profileId: i.null(),
  displayName: i.nullable(i.string()),
});
i.strictObject({
  kind: i.literal("wiki"),
  sourceWorkspaceId: i.pipe(i.string(), i.uuid()),
  companionId: I,
  scopeId: i.pipe(i.string(), i.uuid()),
});
const j = i.union([
    P,
    N,
    i.strictObject({
      userId: i.string(),
      profileId: i.string(),
      scopeId: i.string(),
      displayName: i.nullable(i.string()),
    }),
  ]),
  C = i.strictObject({
    contributors: i.array(j),
    isShared: i.optional(i.boolean(), !1),
  });
async function h(e, { assertOpen: r, userId: o } = {}) {
  try {
    const n = await w.authFetch(
      `${w.config.app.apiUrl}/api/memory/optmem-contributors`,
      {
        accountId: e.accountId,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profileId: e.profileId,
          sourceWorkspaceId: e.sourceWorkspaceId,
          companionId: e.companionId,
          includeSharing: !0,
          userId: o,
          includeWiki: !0,
          includeSequence: !0,
        }),
      },
    );
    if (!n.ok)
      return (
        (n.status === 401 || n.status === 403) &&
          (r?.(),
          await f.optMemReplicaRegistry.pruneSharedCompanion(
            e.profileId,
            e.accountId,
            e.sourceWorkspaceId,
            e.companionId,
            new Set(),
          )),
        {
          kind: "unavailable",
          reason: n.status === 401 || n.status === 403 ? "auth" : "network",
          cursor: null,
        }
      );
    const a = i.safeParse(C, await n.json());
    return a.success
      ? (r?.(),
        o ||
          (await f.optMemReplicaRegistry.pruneSharedCompanion(
            e.profileId,
            e.accountId,
            e.sourceWorkspaceId,
            e.companionId,
            new Set(a.output.contributors.map((u) => u.scopeId)),
          )),
        {
          kind: "result",
          contributors: a.output.contributors.sort(
            (u, t) =>
              +(u.userId === e.accountId) - +(t.userId === e.accountId) ||
              (u.userId ?? "").localeCompare(t.userId ?? "") ||
              (u.profileId ?? "").localeCompare(t.profileId ?? "") ||
              u.scopeId.localeCompare(t.scopeId),
          ),
          isShared: a.output.isShared,
        })
      : { kind: "unavailable", reason: "protocol", cursor: null };
  } catch {
    return { kind: "unavailable", reason: "network", cursor: null };
  }
}
async function q(e, r) {
  const o = f.optMemReplicaRegistry.sharedLane(
      {
        sourceWorkspaceId: e.sourceWorkspaceId,
        companionId: e.companionId,
        ...("kind" in r
          ? { kind: r.kind }
          : { contributorUserId: r.userId, contributorProfileId: r.profileId }),
        scopeId: r.scopeId,
      },
      { userId: r.userId, displayName: r.displayName },
    ),
    n = await o.syncProfile(e.profileId, e.accountId);
  return n.kind === "unavailable"
    ? (n.reason === "auth" && (await o.purgeProfile(e.profileId, e.accountId)),
      n)
    : {
        kind: "result",
        headRevision: n.headRevision,
        cursor: n.cursor,
        replica: await o.getOpen(e.profileId, e.accountId),
      };
}
async function A(e) {
  const r = await h(e);
  if (r.kind !== "result") return { kind: "unavailable", reason: r.reason };
  const o = r.contributors.find((s) => "kind" in s && s.kind === "sequence"),
    n = o ? [o] : r.contributors.filter((s) => !("kind" in s)),
    a = [];
  for (const s of n) {
    const u = await q(e, s);
    if (u.kind !== "result") return { kind: "unavailable", reason: u.reason };
    a.push({
      replica: u.replica,
      authorName: s.displayName ?? null,
      authorUserId: "kind" in s ? null : s.userId,
    });
  }
  return { kind: "result", lanes: a };
}
function L(e) {
  return "kind" in e
    ? e.kind === "sequence"
      ? "companion"
      : "imported"
    : "own";
}
async function E(e) {
  const r = await h(e);
  if (r.kind !== "result")
    throw new Error(`OptMem debug discovery is unavailable (${r.reason})`);
  const o = [];
  for (const n of r.contributors) {
    if (
      !("kind" in n) &&
      (n.userId !== e.accountId || n.profileId !== e.profileId)
    )
      continue;
    const a = await q(e, n);
    if (a.kind !== "result")
      throw new Error(`OptMem debug sync is unavailable (${a.reason})`);
    o.push({
      scopeId: n.scopeId,
      lane: L(n),
      snapshot: await a.replica.inspectDebug(
        e.companionId,
        a.headRevision,
        a.cursor,
        e.sourceWorkspaceId,
      ),
    });
  }
  return {
    observations: o.flatMap(({ lane: n, snapshot: a }) =>
      a.observations.map((s) => ({ ...s, lane: n })),
    ),
    nodes: o.flatMap(({ snapshot: n }) => n.nodes),
    cover: o[0]?.snapshot.cover ?? null,
    companionCovers: o.map(({ scopeId: n, lane: a, snapshot: s }) => ({
      scopeId: n,
      lane: a,
      cover: s.cover,
    })),
  };
}
function k(e, r) {
  return e.map((o) => ({
    ...o,
    ...(r.kind === "sequence"
      ? {}
      : { author: { userId: r.userId, displayName: r.displayName } }),
    contributorId: r.scopeId,
  }));
}
function T(e) {
  return e.some((r) => "kind" in r && r.kind === "sequence")
    ? e.filter((r) => "kind" in r)
    : [...e];
}
async function v(e, r) {
  const o = await h(e, { userId: r.userId });
  if (o.kind !== "result") return o;
  if (r.userId && !o.isShared)
    return {
      kind: "error",
      reason: "not-shared",
      message:
        "Searching by user is available only when your companion is shared.",
    };
  const n = T(o.contributors).filter(
    (a) =>
      (!r.userId ||
        a.userId === r.userId ||
        ("kind" in a && a.kind === "sequence")) &&
      (!r.contributorId || a.scopeId === r.contributorId),
  );
  return r.contributorId && n.length === 0
    ? {
        kind: "error",
        reason: "not-found",
        message:
          "No memory history matches that contributorId for this search. Use a contributorId from recall.",
      }
    : { kind: "contributors", contributors: n };
}
async function _(e, r) {
  const o = await v(e, r);
  if (o.kind !== "contributors") return o;
  const { contributors: n } = o;
  if (r.before !== void 0 && n.length > 1)
    return {
      kind: "error",
      reason: "contributor-required",
      message:
        "Several memory histories are available. Pass the contributorId that recall returned with before.",
    };
  const a = [],
    s = r.limit ?? 20;
  for (const [u, t] of n.entries()) {
    const d = await q(e, t);
    if (d.kind !== "result") return d;
    const p = await d.replica.recall(
      e.companionId,
      { ...r, limit: s - a.length },
      e.sourceWorkspaceId,
      "kind" in t && t.kind === "sequence" ? r.userId : void 0,
    );
    if (p.kind !== "result") return p;
    if ((a.push(...k(p.value.matches, t)), a.length === s)) {
      const c = [
        ...p.value.next.map((l) => ({ ...l, contributorId: t.scopeId })),
        ...n.slice(u + 1).map(({ scopeId: l }) => ({ contributorId: l })),
      ];
      return { kind: "result", value: { matches: a, next: c } };
    }
  }
  return { kind: "result", value: { matches: a, next: [] } };
}
async function D(e, r, o) {
  const n = await v(e, r);
  if (n.kind !== "contributors") return n;
  const a = [];
  for (let s = 0; s < n.contributors.length; s += 4) {
    const u = await Promise.all(
      n.contributors.slice(s, s + 4).map(async (t) => {
        const d = await q(e, t);
        if (d.kind !== "result") return d;
        const { replica: p } = d;
        await p.prepareSearchIndex(e.companionId, e.sourceWorkspaceId, "wait");
        const c = await p.relevant(
          e.companionId,
          r.query,
          void 0,
          e.sourceWorkspaceId,
          o,
        );
        if (c.kind !== "result") return c;
        const l =
          "kind" in t && t.kind === "sequence" && r.userId
            ? c.value.matches.filter((m) => m.author?.userId === r.userId)
            : c.value.matches;
        return { kind: "result", matches: k(l, t) };
      }),
    );
    for (const t of u) {
      if (t.kind !== "result") return t;
      a.push(...t.matches);
    }
  }
  return (
    a.sort(b.compareOptMemMatches),
    {
      kind: "result",
      value: {
        matches: b.selectOptMemEvidence(a, o.limit, o.tokenBudget),
        next: [],
      },
    }
  );
}
async function z(e, r) {
  r?.throwIfAborted();
  const o = f.optMemReplicaRegistry.get(e.profileId, e.accountId),
    n = f.optMemReplicaRegistry.guardOpenProfile(e.profileId, e.accountId);
  await o;
  const a = () => {
    (r?.throwIfAborted(), n());
  };
  a();
  const s = await h(e, { assertOpen: a });
  if ((a(), s.kind !== "result"))
    throw new g.OptMemRefreshError("discovery", s.reason);
  for (let u = 0; u < s.contributors.length; u += 4)
    (a(),
      await Promise.all(
        s.contributors.slice(u, u + 4).map(async (t) => {
          a();
          const d = await q(e, t);
          if ((a(), d.kind !== "result"))
            throw new g.OptMemRefreshError("lane", d.reason);
          await d.replica.prepareSearchIndex(
            e.companionId,
            e.sourceWorkspaceId,
          );
        }),
      ));
}
async function U(e, r, o) {
  o?.throwIfAborted();
  const n = f.optMemReplicaRegistry.guardOpenProfile(e.profileId, e.accountId),
    a = f.optMemReplicaRegistry.openSharedLanes(
      e.profileId,
      e.accountId,
      e.sourceWorkspaceId,
      e.companionId,
    ),
    s = a.some(({ contributor: d }) => d.kind === "sequence")
      ? a.filter(({ contributor: d }) => d.kind !== void 0)
      : a,
    u = await Promise.all(
      s.map(async ({ contributor: d, registry: p }) => {
        o?.throwIfAborted();
        const c = p.guardOpenProfile(e.profileId, e.accountId),
          l = await p.getOpen(e.profileId, e.accountId);
        o?.throwIfAborted();
        const m = await l.relevant(e.companionId, r, o, e.sourceWorkspaceId);
        return (
          c(),
          m.kind !== "result"
            ? m
            : { kind: "result", matches: k(m.value.matches, d) }
        );
      }),
    );
  (o?.throwIfAborted(), n());
  const t = [];
  for (const d of u) {
    if (d.kind !== "result") return d;
    t.push(...d.matches);
  }
  return (
    t.sort(b.compareOptMemMatches),
    { kind: "result", value: { matches: b.selectOptMemEvidence(t) } }
  );
}
async function $(e, r, { userId: o, contributorId: n, ...a }, s) {
  s?.throwIfAborted();
  const u = f.optMemReplicaRegistry.guardOpenProfile(e.profileId, e.accountId),
    t = f.optMemReplicaRegistry
      .openSharedLanes(
        e.profileId,
        e.accountId,
        e.sourceWorkspaceId,
        e.companionId,
      )
      .filter(
        ({ contributor: c }) =>
          (!o || c.userId === o) && (!n || c.scopeId === n),
      ),
    d = await Promise.all(
      t.map(async ({ contributor: c, registry: l }) => {
        s?.throwIfAborted();
        const m = l.guardOpenProfile(e.profileId, e.accountId),
          S = await l.getOpen(e.profileId, e.accountId);
        s?.throwIfAborted();
        const M = await S.similar(e.companionId, r, a, s, e.sourceWorkspaceId);
        return (m(), k(M.value.matches, c));
      }),
    );
  return (
    s?.throwIfAborted(),
    u(),
    {
      kind: "result",
      value: {
        matches: d
          .flat()
          .sort(
            (c, l) => l.similarity - c.similarity || c.id.localeCompare(l.id),
          )
          .slice(0, a.limit),
      },
    }
  );
}
async function B(e, r) {
  const o = await h(e);
  if (o.kind !== "result") return o;
  const n = o.contributors.filter((t) =>
    r.contributorId
      ? t.scopeId === r.contributorId
      : t.userId === e.accountId && t.profileId === e.profileId,
  );
  if (n.length > 1)
    return {
      kind: "error",
      reason: "contributor-required",
      message:
        "Several memory histories are available. Use recall to find the contributorId, then pass it to zoom.",
    };
  const a = n[0];
  if (!a)
    return {
      kind: "error",
      reason: "not-found",
      message:
        "The memory contributor was not found. Use a contributorId from recall.",
    };
  const s = await q(e, a);
  if (s.kind !== "result") return s;
  const u = await s.replica.zoom(e.companionId, r, e.sourceWorkspaceId);
  return u.kind !== "result"
    ? u
    : { ...u, author: { userId: a.userId, displayName: a.displayName } };
}
exports.inspectOwnOptMem = E;
exports.openOptMemCompanionNoteLanes = A;
exports.recallSharedOptMem = _;
exports.relevantSharedOptMem = U;
exports.searchSharedOptMem = D;
exports.similarSharedOptMem = $;
exports.syncSharedOptMem = z;
exports.zoomSharedOptMem = B;
