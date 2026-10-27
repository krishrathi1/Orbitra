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
      (e._sentryDebugIds[r] = "6b16420d-288a-43ca-bc56-f10420648008"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-6b16420d-288a-43ca-bc56-f10420648008"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Q = require("node:crypto"),
  Z = require("./settled-read-r0Yf0ORp.js"),
  ee = require("valibot"),
  R = require("./CompanionManagerRegistry-CqhzzsGy.js"),
  d = require("../main-app.js"),
  oe = require("./errors-DsbnElf-.js"),
  re = require("./CompanionFolderStore-BW078c_O.js");
require("node:fs/promises");
require("node:path");
require("events");
require("fs/promises");
require("node:fs");
require("node:os");
require("./config-CdpnFYk6.js");
require("fs");
require("path");
require("electron");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("./onboarding-BugjMquY.js");
require("os");
require("node:events");
require("@electron-toolkit/utils");
require("node:util");
require("node:worker_threads");
require("node:http");
require("node:https");
require("./protocol-BGN1BQCi.js");
require("child_process");
require("util");
require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("@reflect/auth/workos-session");
require("crypto");
require("@reflect/auth/device-policy");
require("node:process");
require("node:assert");
require("node:stream");
require("./_commonjsHelpers-DJP3_Dvh.js");
require("./index-CSlo9i6Z.js");
require("tty");
require("node-machine-id");
require("node:timers/promises");
require("./contracts-rChhtF3C.js");
require("@reflect/auth/desktop");
require("./worker-protocol-CFgWGf-A.js");
require("./unicode-CSAGP0Z8.js");
require("better-sqlite3");
require("node:child_process");
require("url");
require("stream");
require("zlib");
require("electron-updater");
require("@reflect/auth/last-login-method");
require("@reflect/auth/oauth-state");
require("@reflect/auth/session-identity");
require("module");
require("./fs-native-KvxiM8hl.js");
require("node:module");
require("node:tls");
require("tldts");
require("node:buffer");
require("./savedCertificateBlocklist-BUtmL3xA.js");
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
function ne(e) {
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
const m = ne(ee),
  $ = 1440 * 60 * 1e3;
function te(e) {
  return (
    e.hasUserMessage === !0 &&
    !e.isHidden &&
    !e.isIncognito &&
    !e.isScheduledTask &&
    !e.isWebhookTriggered &&
    !e.isMemoryReflection &&
    !e.isOnboardingChat &&
    !e.isUserJourneySuggestionChat &&
    !e.isCompanionInsightsOfferChat &&
    !e.parentSessionId &&
    !e.benchmarkId
  );
}
function H(e, r) {
  if (e.length === 0)
    throw new Error("A companion without a copy has no canonical copy.");
  const o = new Set(e.map((t) => t.profileId));
  let n = null;
  for (const t of r)
    o.has(t.profileId) && (!n || t.updatedAt > n.updatedAt) && (n = t);
  if (n) return { profileId: n.profileId, basis: "chat" };
  const [i] = [...e].sort(
    (t, s) =>
      (s.updatedAt ?? -1 / 0) - (t.updatedAt ?? -1 / 0) ||
      t.profileId.localeCompare(s.profileId),
  );
  return { profileId: i.profileId, basis: "changes" };
}
function ie(e, r, o) {
  const n = new Map();
  for (const t of r) {
    const s = Math.max(0, o - t.updatedAt);
    if (s > 90 * $) continue;
    const c = n.get(t.profileId) ?? { latest: 0, frequency: 0 };
    ((c.latest = Math.max(c.latest, Math.min(o, t.updatedAt))),
      (c.frequency += 2 ** (-s / (30 * $))),
      n.set(t.profileId, c));
  }
  const i = (t) => {
    const s = n.get(t);
    if (!s) return 0;
    const c = 2 ** (-(o - s.latest) / (14 * $)),
      l = 1 - Math.exp(-s.frequency / 6);
    return 60 * c + 35 * l;
  };
  return e
    .map((t, s) => ({ profileId: t, order: s, score: i(t) }))
    .sort((t, s) => s.score - t.score || t.order - s.order)
    .map(({ profileId: t }) => t);
}
function ae(e, r) {
  const o = e.sourceProfileId !== r;
  return {
    copiesIntoTarget: o,
    replacesTargetCopy: o && e.copyProfileIds.includes(r),
    removeProfileIds: e.copyProfileIds.filter((n) => n !== r).sort(),
  };
}
function Y(e, r) {
  return e.createdAt !== void 0 && e.createdAt > r.claimedAt;
}
function se(e, r, o) {
  const n = o.placed.get(e);
  return n !== void 0
    ? r.some((i) => i.profileId === n)
      ? { profileId: n, basis: "placed" }
      : null
    : o.mode === "consolidate" && !r.some((i) => Y(i, o))
      ? H(
          r,
          o.chats.filter((i) => i.companionId === e),
        )
      : r.some((i) => i.profileId === o.homeProfileId)
        ? { profileId: o.homeProfileId, basis: "home" }
        : H(r, []);
}
function ce(e) {
  const r = [],
    o = [...e.copies.keys()].sort();
  for (const n of o) {
    const i = e.copies.get(n) ?? [];
    if (i.length === 0 || e.pinnedCompanionIds.has(n)) continue;
    if (i.length === 1) {
      const [s] = i;
      if (
        s.profileId === e.homeProfileId ||
        e.placed.get(n) === s.profileId ||
        e.mode === "maintain" ||
        Y(s, e)
      )
        continue;
    }
    const t = se(n, i, e);
    t &&
      r.push({
        companionId: n,
        sourceProfileId: t.profileId,
        basis: t.basis,
        copyProfileIds: i.map((s) => s.profileId).sort(),
      });
  }
  return r;
}
const M = ".orbitra/companion-home.json",
  le = 1440 * 60 * 1e3,
  ue = 3e4,
  de = 40,
  fe = 10 * 6e4,
  pe = 5,
  me = 3,
  y = "[CompanionConsolidation]",
  ge = m.looseObject({
    version: m.literal(1),
    owner: m.pipe(m.string(), m.minLength(1)),
    homeWorkspaceId: m.pipe(m.string(), m.minLength(1)),
    createdAt: m.number(),
    completedAt: m.optional(m.number()),
    placed: m.record(m.string(), m.string()),
  }),
  S = new Map();
function he(e) {
  const r = e.companionManager.accountId;
  if (!r) return;
  let o = S.get(r);
  (o ||
    ((o = {
      contexts: new Map(),
      running: null,
      timer: null,
      attempts: 0,
      finished: !1,
      lastRunAt: 0,
      unresolvedIds: new Set(),
      removedCopies: new Set(),
    }),
    S.set(r, o)),
    o.contexts.has(e.companionManager) ||
      (o.contexts.set(e.companionManager, e),
      e.companionManager.on("duplicate-companions-found", (n) => ye(r, n))),
    o.finished || L(r, 0));
}
function ye(e, r) {
  const o = S.get(e);
  o?.finished &&
    (r.every((n) => o.unresolvedIds.has(n)) ||
      ((o.finished = !1),
      (o.attempts = 0),
      L(e, Math.max(0, o.lastRunAt + fe - Date.now()))));
}
function L(e, r) {
  const o = S.get(e);
  !o ||
    o.running ||
    o.timer ||
    ((o.timer = setTimeout(() => {
      ((o.timer = null), we(e));
    }, r)),
    o.timer.unref?.());
}
function Ie(e, r) {
  for (const [o, n] of r.contexts) {
    if (
      R.companionManagerRegistry.getCompanionManager(n.profileId) === o &&
      o.accountId === e
    )
      return n;
    r.contexts.delete(o);
  }
  return null;
}
function we(e) {
  const r = S.get(e);
  if (!r || r.running) return;
  const o = Ie(e, r);
  if (!o) return;
  let n = !1;
  r.running = qe(e, o, r)
    .then((i) => {
      n = i;
    })
    .finally(() => {
      ((r.running = null), n && L(e, ue));
    });
}
async function qe(e, r, o) {
  let n;
  try {
    n = await Ae(e, r, o.removedCopies);
  } catch (t) {
    (d.logger.warn(`${y} Run failed`, {
      userId: e,
      outcome: "deferred",
      errorName: t instanceof Error ? t.name : "Error",
    }),
      (n = { kind: "finished", complete: !1, unresolvedIds: [] }));
  }
  if (((o.lastRunAt = Date.now()), n.kind === "finished" && n.complete))
    return (
      (o.finished = !0),
      (o.attempts = 0),
      (o.unresolvedIds = new Set(n.unresolvedIds)),
      !1
    );
  o.attempts += 1;
  const i = o.attempts < de;
  return (
    i ||
      d.logger.warn(`${y} Deferred until the next launch`, {
        userId: e,
        outcome: "deferred",
        reason: n.kind === "not-ready" ? n.reason : "incomplete",
      }),
    i
  );
}
function Ce(e) {
  return (
    e?.phase === "synced" &&
    e.lastSyncedAt !== null &&
    !e.downloads.active &&
    e.downloads.completed === e.downloads.total &&
    e.recovery === null &&
    e.problem === null
  );
}
function T(e) {
  return new re.CompanionFolderStore(oe.getSyncedFilePaths(e.rootDir));
}
async function be(e) {
  const o = (await e.getControlPlane().listFiles(M)).find((n) => n.path === M);
  if (!o || o.status === "deleted") return { lock: null, version: 0 };
  if (o.status === "pending_upload")
    throw new Error("The companion home lock is still uploading.");
  return x(e, o.version);
}
async function x(e, r) {
  const o = await e.readFileVersion(M, r);
  if (!o) throw new Error("The companion home lock could not be read.");
  let n;
  try {
    n = JSON.parse(o.toString("utf-8"));
  } catch {
    n = null;
  }
  const i = m.safeParse(ge, n);
  if (!i.success) throw new Error("The companion home lock is unreadable.");
  return { lock: i.output, version: r };
}
async function _(e, r, o) {
  const n = Object.fromEntries(
      Object.entries(r.placed).sort(([t], [s]) => t.localeCompare(s)),
    ),
    i = Buffer.from(
      `${JSON.stringify({ ...r, placed: n }, null, 2)}
`,
      "utf-8",
    );
  try {
    return {
      written: !0,
      version: await e.fs.writeFile(M, i, { baseVersion: o }),
    };
  } catch (t) {
    if (t instanceof Z.FSConflictError)
      return { written: !1, currentVersion: t.currentVersion };
    throw t;
  }
}
function B(e) {
  return `companion-home-claim:${e}`;
}
async function J(e, r, o) {
  let n = !1;
  return (
    await e.companionManager.updateProfileDatabase(r, (i) => {
      n = i.getMigrationFlag(B(o));
    }),
    n
  );
}
async function Pe(e, r, o, n, i, t) {
  const s = Date.now(),
    c =
      n.length > 1
        ? await z(r, { updatedSince: s - 90 * le }, pe, G(e, n))
        : [],
    l = Se(n, t, c, s),
    p = i.get(l);
  if (!p) throw new Error("The home profile has no workspace yet.");
  const h = {
    version: 1,
    owner: Q.randomUUID(),
    homeWorkspaceId: p,
    createdAt: s,
    placed: {},
  };
  if (
    (await r.companionManager.updateProfileDatabase(l, (I) =>
      I.setMigrationFlag(B(h.owner), !0),
    ),
    !(await J(r, l, h.owner)))
  )
    throw new Error(
      "The home profile could not record the companion home claim.",
    );
  const g = await _(o, h, 0);
  return g.written
    ? (d.logger.info(`${y} Claimed the companion home`, {
        userId: e,
        profileId: l,
        outcome: "claimed",
      }),
      { lock: h, version: g.version })
    : x(o, g.currentVersion);
}
async function ke(e) {
  const r = d.syncedFSManagerRegistry.forAccount(e),
    o = r.getRootManager() ?? r.getAllManagers().values().next().value;
  if (!o) throw new Error("No synced workspace can list shares.");
  const n = await o.getControlPlane().listShares(),
    i = new Set();
  for (const t of n.outgoing) {
    const s = R.parseCompanionShareRoot(t.sourcePath)?.companionId;
    s && i.add(s);
  }
  return i;
}
async function ve(e, r, o) {
  const n =
    d.syncedFSManagerRegistry.forAccount(e).get(o)?.workspaceProfileId ?? o;
  try {
    const i = await d.authFetch(
      `${d.config.app.apiUrl}/api/companion-profiles/${encodeURIComponent(r)}/manage?profileId=${encodeURIComponent(n)}`,
      { accountId: e },
    );
    return i.ok ? (await i.json()).published === !0 : null;
  } catch {
    return null;
  }
}
function G(e, r) {
  const o = d.syncedFSManagerRegistry.forAccount(e),
    n = new Set(r.map((i) => i.profileId));
  return (i) => {
    const t = i && o.resolveStorageProfileId(i);
    return t && n.has(t) ? t : null;
  };
}
async function z(e, r, o, n, i) {
  const t = [];
  let s;
  for (let c = 0; c < o; c += 1) {
    const l = await e.listChats({
      filter: {
        ...r,
        chatType: "normal",
        isHidden: !1,
        hasUserMessage: !0,
        parentSessionId: null,
      },
      order: { field: "updatedAt", direction: "desc" },
      ...(s ? { cursor: s } : {}),
      limit: 100,
    });
    for (const p of l.sessions) {
      if (!p.companionId || !te(p)) continue;
      const h = n(p.storageProfileId);
      h &&
        t.push({
          companionId: p.companionId,
          profileId: h,
          updatedAt: p.updatedAt,
        });
    }
    if (!l.hasMore || !l.nextCursor || i?.(t)) break;
    s = l.nextCursor;
  }
  return t;
}
function Se(e, r, o, n) {
  const i = new Map();
  for (const c of r.values())
    for (const { profileId: l } of c) i.set(l, (i.get(l) ?? 0) + 1);
  const t = d.globalSettings.get("lastActiveProfileId"),
    s = e
      .map(({ profileId: c }) => c)
      .sort(
        (c, l) =>
          +(l === t) - +(c === t) ||
          (i.get(l) ?? 0) - (i.get(c) ?? 0) ||
          c.localeCompare(l),
      );
  return ie(s, o, n)[0];
}
async function Ae(e, r, o) {
  if (!d.globalSettings.get("hasCompletedOnboarding"))
    return { kind: "not-ready", reason: "onboarding" };
  const n = d.syncedFSManagerRegistry.forAccount(e);
  try {
    await n.startAccountSync();
  } catch {
    return { kind: "not-ready", reason: "discovery" };
  }
  const i = n.getRootManager();
  if (!i) return { kind: "not-ready", reason: "no-root-workspace" };
  const t = n
    .getProfileWorkspaceRoots()
    .sort((a, u) => a.profileId.localeCompare(u.profileId));
  if (t.length === 0) return { kind: "not-ready", reason: "no-profiles" };
  if (t.some(({ profileId: a }) => !Ce(n.get(a)?.syncEngine.status)))
    return { kind: "not-ready", reason: "sync" };
  const s = new Map(t.map((a) => [a.profileId, a])),
    c = new Map(),
    l = new Map();
  for (const { profileId: a } of t) {
    const u = n.getWorkspaceIdForProfile(a);
    if (!u) return { kind: "not-ready", reason: "sync" };
    (c.set(a, u), l.set(u, a));
  }
  const p = new Map();
  for (const a of t)
    for (const { companionId: u, createdAt: w, updatedAt: q } of await T(
      a,
    ).listCompanionCopies()) {
      const f = p.get(u) ?? [];
      (f.push({ profileId: a.profileId, createdAt: w, updatedAt: q }),
        p.set(u, f));
    }
  const h = [...p].filter(([, a]) => a.length > 1).map(([a]) => a);
  let g = await be(i);
  g.lock || (g = await Pe(e, r, i, t, c, p));
  const I = g.lock;
  if (!I) return { kind: "not-ready", reason: "lock-unavailable" };
  const P = l.get(I.homeWorkspaceId);
  if (!P || !(await J(r, P, I.owner)))
    return { kind: "finished", complete: !0, unresolvedIds: h };
  if (!s.get(P)) return { kind: "not-ready", reason: "home-unavailable" };
  const E = I.completedAt === void 0 ? "consolidate" : "maintain",
    O = await ke(e),
    N = new Map(Object.entries(I.placed).map(([a, u]) => [a, l.get(u) ?? u])),
    U = [];
  if (E === "consolidate") {
    const a = G(e, t);
    for (const u of h) {
      if (O.has(u) || N.has(u)) continue;
      const w = new Set(p.get(u)?.map(({ profileId: q }) => q));
      U.push(
        ...(await z(r, { companionId: u }, me, a, (q) =>
          q.some((f) => w.has(f.profileId)),
        )),
      );
    }
  }
  const j = ce({
      homeProfileId: P,
      mode: E,
      claimedAt: I.createdAt,
      copies: p,
      pinnedCompanionIds: O,
      placed: N,
      chats: U,
    }),
    W = new Set();
  let C = !0;
  for (const a of j)
    try {
      const u = await Me(e, a, P),
        w = u ? s.get(u) : void 0,
        q = u ? c.get(u) : void 0;
      if (!w || !q) {
        ((C = !1),
          d.logger.info(
            `${y} Could not tell whether a companion has hosted memory`,
            { userId: e, companionId: a.companionId, outcome: "deferred" },
          ));
        continue;
      }
      const f = ae(a, w.profileId);
      if (f.removeProfileIds.some((b) => o.has(`${a.companionId}:${b}`))) {
        d.logger.info(
          `${y} Left a copy that came back after this launch removed it`,
          { userId: e, companionId: a.companionId, outcome: "skipped" },
        );
        continue;
      }
      if (f.copiesIntoTarget || f.removeProfileIds.length > 0) {
        const b = [
            ...f.removeProfileIds,
            ...(f.replacesTargetCopy ? [w.profileId] : []),
          ],
          k = await V(b, (v) => ve(e, a.companionId, v));
        if (k !== !1) {
          (k === null && (C = !1),
            d.logger.info(`${y} Left a published companion in place`, {
              userId: e,
              companionId: a.companionId,
              outcome: k === null ? "deferred" : "skipped",
            }));
          continue;
        }
        const F = await V(
          f.removeProfileIds.filter((v) => v !== a.sourceProfileId),
          (v) => K(e, a.companionId, v),
        );
        if (F !== !1) {
          (F === null && (C = !1),
            d.logger.info(
              `${y} Left a companion whose other copy has hosted memory in place`,
              {
                userId: e,
                companionId: a.companionId,
                outcome: F === null ? "deferred" : "skipped",
              },
            ));
          continue;
        }
      }
      await Te(r, a, f, w, s);
      const D = g.lock ?? I;
      if (D.placed[a.companionId] !== q) {
        const b = { ...D, placed: { ...D.placed, [a.companionId]: q } },
          k = await _(i, b, g.version);
        if (!k.written) {
          ((C = !1),
            d.logger.warn(
              `${y} Stopped: the companion home lock changed during a step`,
              { userId: e, companionId: a.companionId, outcome: "deferred" },
            ));
          break;
        }
        g = { lock: b, version: k.version };
      }
      await Re(r, a.companionId, f, s);
      for (const b of f.removeProfileIds) o.add(`${a.companionId}:${b}`);
      (W.add(a.companionId),
        d.logger.info(`${y} Consolidated companion`, {
          userId: e,
          companionId: a.companionId,
          basis: a.basis,
          keptInPlace: w.profileId !== P,
          movedFromProfile: f.copiesIntoTarget,
          removedCopies: f.removeProfileIds.length,
        }));
    } catch (u) {
      ((C = !1),
        d.logger.warn(`${y} Could not consolidate companion`, {
          userId: e,
          companionId: a.companionId,
          outcome: "deferred",
          errorName: u instanceof Error ? u.name : "Error",
          error: u,
        }));
    }
  if (E === "consolidate" && C) {
    const a = { ...(g.lock ?? I), completedAt: Date.now() };
    (await _(i, a, g.version)).written || (C = !1);
  }
  j.length > 0 &&
    (await Promise.allSettled(
      t.map(({ profileId: a }) =>
        R.companionManagerRegistry.getCompanionManager(a)?.loadCompanions(),
      ),
    ));
  const A = h.filter((a) => !W.has(a));
  return (
    A.length > 0 &&
      d.logger.warn(`${y} Companions keep more than one copy`, {
        userId: e,
        companionIds: A,
        sharedCompanionIds: A.filter((a) => O.has(a)),
      }),
    { kind: "finished", complete: C, unresolvedIds: A }
  );
}
async function V(e, r) {
  for (const o of e) {
    const n = await r(o);
    if (n !== !1) return n;
  }
  return !1;
}
async function K(e, r, o) {
  const n = d.syncedFSManagerRegistry.forAccount(e).getWorkspaceIdForProfile(o);
  if (!n) return null;
  try {
    const i = await d.authFetch(
      `${d.config.app.apiUrl}/api/memory/optmem-contributors`,
      {
        accountId: e,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profileId: o,
          sourceWorkspaceId: n,
          companionId: r,
          includeWiki: !0,
        }),
      },
    );
    if (!i.ok) return null;
    const t = await i.json();
    return Array.isArray(t.contributors) ? t.contributors.length > 0 : null;
  } catch {
    return null;
  }
}
async function Me(e, r, o) {
  if (r.basis === "placed" || r.sourceProfileId === o) return r.sourceProfileId;
  const n = await K(e, r.companionId, r.sourceProfileId);
  return n === null ? null : n ? r.sourceProfileId : o;
}
async function X(e, r, o) {
  (R.companionManagerRegistry.getCompanionManager(r)?.releaseOwnedCompanion(o),
    await e.companionManager.updateProfileDatabase(r, (n) =>
      n.releaseCompanion(o),
    ));
}
async function Te(e, r, o, n, i) {
  if (!o.copiesIntoTarget) return;
  const { companionId: t } = r,
    s = T(n),
    c = i.get(r.sourceProfileId);
  if (!c) throw new Error("The canonical companion copy is unavailable.");
  const l = T(c).getCompanionRootPath(t);
  try {
    if (
      (o.replacesTargetCopy
        ? (await s.companionDirectoryMatchesSource(l, t)) ||
          (await X(e, n.profileId, t), await s.replaceCompanionDirectory(l, t))
        : await s.copyNewCompanionDirectory(l, t),
      !(await s.companionDirectoryMatchesSource(l, t)))
    )
      throw new Error(
        "The companion copy in the target profile does not match its source.",
      );
  } finally {
    await Ee(e, n.profileId, s, t);
  }
}
async function Re(e, r, o, n) {
  for (const i of o.removeProfileIds) {
    const t = n.get(i);
    t && (await X(e, i, r), await T(t).deleteCompanion(r));
  }
}
async function Ee(e, r, o, n) {
  const i = await o.readCompanion(n);
  i &&
    (await e.companionManager.updateProfileDatabase(r, (t) => {
      if (t.getCompanion(n)) return;
      const s = t.getSharedCompanionLocalState(n);
      s?.latestUsageDate !== void 0 && t.upsertCompanion({ ...i, ...s });
    }));
}
exports.scheduleCompanionConsolidation = he;
