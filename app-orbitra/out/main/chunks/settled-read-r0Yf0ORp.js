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
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "4060b4c9-b893-4dbb-94c6-73147759864f"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-4060b4c9-b893-4dbb-94c6-73147759864f"));
  })();
} catch {}
const O = require("node:crypto"),
  T = require("node:fs/promises"),
  z = require("node:path");
function P(e) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const n in e)
      if (n !== "default") {
        const i = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(
          t,
          n,
          i.get ? i : { enumerable: !0, get: () => e[n] },
        );
      }
  }
  return ((t.default = e), Object.freeze(t));
}
const y = P(z),
  q = 2,
  G = 1,
  Y = "x-orbitra-fs-protocol",
  U = { frontierMaxDirectories: 1e4, frontierMaxChildrenPerDirectory: 1e4 },
  x = 1024 * 1024 * 1024;
function V(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
const W = 200;
class K extends Error {
  constructor(t, n, i) {
    (super(`Conflict in adapter "${i}": server is at version ${t}`),
      (this.currentVersion = t),
      (this.currentContent = n),
      (this.adapterId = i),
      (this.name = "FSConflictError"));
  }
}
class J extends Error {
  constructor(t, n) {
    (super(n ? `${n}: ${t}` : `Forbidden (403): ${t}`),
      (this.endpoint = t),
      (this.name = "FSForbiddenError"));
  }
}
class X extends Error {
  constructor(t) {
    (super(`File not found: ${t}`),
      (this.path = t),
      (this.name = "FSNotFoundError"));
  }
}
class Z extends Error {
  constructor(t, n) {
    (super(`Workspace uses sync protocol v${t} but this client speaks v${n}`),
      (this.workspaceProtocolVersion = t),
      (this.clientProtocolVersion = n),
      (this.name = "FSProtocolMismatchError"));
  }
}
class Q extends Error {
  constructor(t, n) {
    (super(`Adapter "${n}" failed: ${t.message}`, { cause: t }),
      (this.adapterId = n),
      (this.name = "FSAdapterError"));
  }
}
const ee = 1;
class te extends Error {
  constructor(t) {
    (super("This profile was deleted from the account"),
      (this.workspaceId = t),
      (this.name = "FSWorkspaceDeletedError"));
  }
}
const ne = 3 * 1024 * 1024;
function ie(e) {
  return O.createHash("sha256").update(e).digest("hex");
}
function re(e) {
  return O.createHash("md5").update(e).digest("base64");
}
const ae = {
    now: () => Date.now(),
    setTimer: (e, t) => {
      const n = setTimeout(t, e);
      n.unref?.();
      let i = !1;
      return () => {
        i || ((i = !0), clearTimeout(n));
      };
    },
  },
  oe = { draw: (e) => (e <= 0 ? 0 : Math.random() * e) };
function A(e, t) {
  return { class: "cancelled", reason: e, message: t };
}
function se(e, t, n) {
  return { class: "retryable", reason: e, message: t, retryAfterMs: n };
}
function le(e, t, n) {
  return { class: "auth-blocked", reason: e, message: t, authRevision: n };
}
function ce(e, t, n) {
  return { class: "reconcile", reason: e, message: t, path: n };
}
function de(e, t, n) {
  return { class: "reconcile", reason: t, message: n, after: e };
}
function fe(e, t, n) {
  return {
    class: "reconcile",
    reason: e,
    message: t,
    exhausted: !0,
    evidence: n,
  };
}
function pe(e, t, n, i) {
  return { class: "permission", reason: e, scope: t, message: n, path: i };
}
function D(e, t, n, i) {
  return { class: "integrity", reason: e, fingerprint: t, message: n, path: i };
}
function ue(e, t) {
  return {
    class: "integrity",
    reason: e,
    fingerprint: `download:${t.path}:${t.expectedHash}`,
    message: `download verification failed after same-version recovery: version=${t.version} expectedHash=${t.expectedHash} actualHash=${t.actualHash} expectedBytes=${t.expectedBytes} actualBytes=${t.actualBytes}`,
    path: t.path,
    held: { reason: "unverified", ...t },
  };
}
function ge(e, t, n) {
  return {
    class: "integrity",
    reason: e,
    fingerprint: `${e}:${t.path}:${t.version}:${t.expectedHash}`,
    message: `${n}: version=${t.version} expectedHash=${t.expectedHash}`,
    path: t.path,
    held: t,
  };
}
function j(e, t, n) {
  return { class: "local-environment", reason: e, message: t, path: n };
}
function he(e, t) {
  return { class: "invariant", reason: e, message: t };
}
function me(e) {
  const t = e instanceof Error ? e : null;
  return {
    class: "invariant",
    reason: "unclassified",
    message: t ? t.message : String(e),
    cause: t?.name,
  };
}
function ye(e) {
  switch (e.class) {
    case "invariant":
      return !0;
    case "permission":
      return e.scope === "workspace";
    case "reconcile":
      return e.exhausted === !0;
    case "cancelled":
    case "retryable":
    case "auth-blocked":
    case "integrity":
    case "local-environment":
      return !1;
  }
}
const ke = 2;
function be(e) {
  const t = [`class=${e.class}`, `reason=${e.reason}`];
  switch (e.class) {
    case "retryable":
      e.retryAfterMs !== void 0 && t.push(`retryAfterMs=${e.retryAfterMs}`);
      break;
    case "auth-blocked":
      t.push(`authRevision=${e.authRevision}`);
      break;
    case "reconcile":
      (e.exhausted === !0 && t.push("exhausted=true"),
        e.after !== void 0 && t.push(`after=${e.after}`),
        e.path !== void 0 && t.push(`path=${e.path}`));
      break;
    case "permission":
      (t.push(`scope=${e.scope}`),
        e.path !== void 0 && t.push(`path=${e.path}`));
      break;
    case "integrity":
      (t.push(`fingerprint=${e.fingerprint}`),
        e.path !== void 0 && t.push(`path=${e.path}`));
      break;
    case "local-environment":
      e.path !== void 0 && t.push(`path=${e.path}`);
      break;
  }
  return (
    e.cause !== void 0 && t.push(`cause=${e.cause}`),
    t.push(`message="${e.message}"`),
    t.join(" ")
  );
}
function we(e) {
  const t = {
      treeCheck: e.treeCheck,
      trackedFiles: e.trackedFiles,
      keptOffDiskFiles: e.keptOffDiskFiles,
      manifestDifferences: e.manifestDifferences,
      frontierStop: e.frontier.kind,
    },
    n = e.frontier;
  switch (n.kind) {
    case "none":
      return t;
    case "stopped":
      return {
        ...t,
        frontierStopDepth: n.depth,
        frontierStopDifferingEntries: n.differingEntries,
      };
    default:
      return { ...t, frontierStop: `unknown (${String(n)})` };
  }
}
function ve(e) {
  if (e === null) return null;
  const t = "path" in e && e.path !== void 0 ? e.path : "";
  return `${e.class}:${e.reason}:${t}`;
}
function Se(e) {
  return e.slice(e.lastIndexOf("/") + 1).toLowerCase();
}
function Ee(e) {
  const t = e.slice(e.lastIndexOf("/") + 1),
    n = t.lastIndexOf(".");
  return n <= 0 ? "" : t.slice(n + 1).toLowerCase();
}
function je(e, t) {
  return JSON.stringify([t ?? null, e]);
}
async function C(e, t) {
  const n = y.relative(e, t);
  if (n === ".." || n.startsWith(`..${y.sep}`) || y.isAbsolute(n))
    throw new Error("the path is not under the root");
  if (n === "") return !1;
  let i = e;
  for (const s of n.split(y.sep)) {
    i = y.join(i, s);
    try {
      if ((await T.lstat(i)).isSymbolicLink()) return !0;
    } catch (o) {
      if (o instanceof Error && "code" in o && o.code === "ENOENT") return !1;
      throw o;
    }
  }
  return !1;
}
const R = 2e3,
  S = {
    maxFileBytes: x,
    maxScanBytes: x,
    maxScanEntries: 25e4,
    maxPlanningRecords: 25e4,
    eventCoalescingDelayMs: R,
    publishHoldMinMs: 2 * R,
    publishHoldMaxMs: 3e4,
    retryMaxDelayMs: 3e4,
    retryJitterMaxMs: 2e3,
    maxPublishAttempts: 8,
    staleLocalEditMs: 3600 * 1e3,
    settledReadWindowMs: 1,
    scanWorkerCount: 8,
    outboxPageSize: 200,
  },
  _e = [
    "stopped",
    "starting.opening-stores",
    "starting.hydrating",
    "starting.reconciling",
    "starting.attaching-sources",
    "starting.auditing",
    "starting.rolling-back",
    "operational.idle",
    "operational.working.inspecting-local",
    "operational.working.committing-local",
    "operational.working.reviewing-drafts",
    "operational.working.direct-mutation",
    "operational.working.flushing-outbox",
    "operational.working.applying-delta",
    "operational.working.reading-journal",
    "operational.working.descending-frontier",
    "operational.working.reconciling-manifest",
    "operational.working.applying-remote",
    "operational.working.verifying-root",
    "operational.working.auditing",
    "operational.recovering",
    "operational.reconcile.reading-journal",
    "operational.reconcile.descending-frontier",
    "operational.reconcile.reconciling-manifest",
    "operational.reconcile.applying-remote",
    "operational.reconcile.verifying-root",
    "operational.reconcile.recovering",
    "stopping.quiescing-sources",
    "stopping.draining",
    "stopping.persisting",
    "stopping.closing",
    "start-failed",
    "faulted",
  ],
  Ne = ["stopped", "start-failed", "faulted"],
  Oe = [
    "start",
    "stop",
    "stores-opened",
    "journal-replayed",
    "hydrated",
    "startup-reconciled",
    "sources-attached",
    "startup-audited",
    "rollback-complete",
    "sources-quiesced",
    "effects-joined",
    "state-persisted",
    "stores-closed",
    "begin.inspect-local",
    "begin.commit-local",
    "begin.review-drafts",
    "begin.direct-mutation",
    "begin.flush-outbox",
    "begin.apply-delta",
    "begin.read-journal",
    "begin.audit",
    "effect.done",
    "fail.cancelled",
    "fail.retryable",
    "fail.auth-blocked",
    "fail.reconcile.journal",
    "fail.reconcile.frontier",
    "fail.reconcile.manifest",
    "fail.reconcile.exhausted",
    "fail.permission.path",
    "fail.permission.workspace",
    "fail.integrity.exhausted",
    "fail.local-environment.recoverable",
    "fail.local-environment.fatal",
    "fail.invariant",
    "retry-deadline",
    "local-events",
    "trigger-sync",
    "rescan",
    "commit-local-file",
    "flush-path-for-publish",
    "direct-mutation",
    "draft-decision",
    "set-auth",
    "set-connectivity",
  ],
  a = [
    "local-events",
    "trigger-sync",
    "rescan",
    "commit-local-file",
    "flush-path-for-publish",
    "direct-mutation",
    "draft-decision",
  ],
  r = ["set-auth", "set-connectivity"],
  E = [
    "effect.done",
    "fail.cancelled",
    "fail.retryable",
    "fail.auth-blocked",
    "fail.reconcile.journal",
    "fail.reconcile.frontier",
    "fail.reconcile.manifest",
    "fail.reconcile.exhausted",
    "fail.permission.path",
    "fail.permission.workspace",
    "fail.integrity.exhausted",
    "fail.local-environment.recoverable",
    "fail.local-environment.fatal",
    "fail.invariant",
  ],
  k = {
    "fail.cancelled": "starting.rolling-back",
    "fail.retryable": "starting.rolling-back",
    "fail.auth-blocked": "starting.rolling-back",
    "fail.reconcile.journal": "starting.rolling-back",
    "fail.reconcile.frontier": "starting.rolling-back",
    "fail.reconcile.manifest": "starting.rolling-back",
    "fail.reconcile.exhausted": "starting.rolling-back",
    "fail.permission.path": "starting.rolling-back",
    "fail.permission.workspace": "starting.rolling-back",
    "fail.integrity.exhausted": "starting.rolling-back",
    "fail.local-environment.recoverable": "starting.rolling-back",
    "fail.local-environment.fatal": "starting.rolling-back",
    "fail.invariant": "starting.rolling-back",
    stop: "stopping.quiescing-sources",
  },
  c = {
    "fail.cancelled": "operational.idle",
    "fail.retryable": "operational.recovering",
    "fail.auth-blocked": "operational.idle",
    "fail.permission.path": "operational.idle",
    "fail.permission.workspace": "faulted",
    "fail.reconcile.exhausted": "faulted",
    "fail.integrity.exhausted": "faulted",
    "fail.local-environment.recoverable": "operational.recovering",
    "fail.local-environment.fatal": "faulted",
    "fail.invariant": "faulted",
    stop: "stopping.quiescing-sources",
  },
  b = {
    "fail.cancelled": "operational.idle",
    "fail.retryable": "operational.reconcile.recovering",
    "fail.auth-blocked": "operational.idle",
    "fail.permission.path": "operational.reconcile.recovering",
    "fail.permission.workspace": "faulted",
    "fail.reconcile.exhausted": "faulted",
    "fail.integrity.exhausted": "faulted",
    "fail.local-environment.recoverable": "operational.reconcile.recovering",
    "fail.local-environment.fatal": "faulted",
    "fail.invariant": "faulted",
    stop: "stopping.quiescing-sources",
  },
  F = Object.fromEntries(E.map((e) => [e, "no-effect-in-flight"])),
  u = {
    "fail.reconcile.frontier": "no-level-skip",
    "fail.reconcile.manifest": "no-level-skip",
  },
  Te = {
    stopped: {
      note: "Sources detached, effects joined, durable state persisted, stores closed.",
      edges: { start: "starting.opening-stores" },
      accepts: [...r, "stop"],
      rejects: "not-running",
    },
    "starting.opening-stores": {
      note: "Opening the outbox and version cache, exclusively.",
      edges: { ...k, "stores-opened": "starting.hydrating" },
      accepts: [...r, ...a],
      rejects: "starting",
      rejectsSpecifically: { start: "already-running" },
    },
    "starting.hydrating": {
      note: "Replaying incomplete journal records, then bulk-loading the cache and the outbox off the main thread. Journal replay runs before hydration so a half-finished effect is finished or compensated before anything reads it.",
      edges: {
        ...k,
        "journal-replayed": "starting.hydrating",
        hydrated: "starting.reconciling",
      },
      accepts: [...r, ...a],
      rejects: "starting",
      rejectsSpecifically: { start: "already-running" },
    },
    "starting.reconciling": {
      note: "Remote-first bootstrap. Without a durable checkpoint this blocks local publication until the authoritative manifest is read and checkpointed.",
      edges: { ...k, "startup-reconciled": "starting.attaching-sources" },
      accepts: [...r, ...a],
      rejects: "starting",
      rejectsSpecifically: { start: "already-running" },
    },
    "starting.attaching-sources": {
      note: "Attaching the watcher bridge and the conduit change source.",
      edges: { ...k, "sources-attached": "starting.auditing" },
      accepts: [...r, ...a],
      rejects: "starting",
      rejectsSpecifically: { start: "already-running" },
    },
    "starting.auditing": {
      note: "First complete local walk, proving the scan before anything may prune.",
      edges: { ...k, "startup-audited": "operational.idle" },
      accepts: [...r, ...a],
      rejects: "starting",
      rejectsSpecifically: { start: "already-running" },
    },
    "starting.rolling-back": {
      note: "Unwinding a partial startup: detach what attached, close what opened.",
      edges: { "rollback-complete": "start-failed" },
      accepts: [...r, ...a, "stop", ...E],
      rejects: "starting",
      rejectsSpecifically: { start: "already-running" },
    },
    "operational.idle": {
      note: "Started, nothing in flight. The scheduler picks the next lane from here.",
      edges: {
        "begin.inspect-local": "operational.working.inspecting-local",
        "begin.commit-local": "operational.working.committing-local",
        "begin.review-drafts": "operational.working.reviewing-drafts",
        "begin.direct-mutation": "operational.working.direct-mutation",
        "begin.flush-outbox": "operational.working.flushing-outbox",
        "begin.apply-delta": "operational.working.applying-delta",
        "begin.read-journal": "operational.working.reading-journal",
        "begin.audit": "operational.working.auditing",
        stop: "stopping.quiescing-sources",
      },
      accepts: [...r, ...a, "retry-deadline"],
      rejects: "illegal-trigger",
      rejectsSpecifically: { start: "already-running", ...F },
    },
    "operational.working.inspecting-local": {
      note: "Settled-reading watcher events and turning them into canonical intents.",
      edges: {
        ...c,
        "effect.done": "operational.idle",
        "fail.reconcile.journal": "operational.reconcile.reading-journal",
      },
      accepts: [...r, ...a],
      rejects: "illegal-trigger",
      rejectsSpecifically: { start: "already-running", ...u },
    },
    "operational.working.committing-local": {
      note: "Committing one named local file at a proven hash, for a publish barrier.",
      edges: {
        ...c,
        "effect.done": "operational.idle",
        "fail.reconcile.journal": "operational.reconcile.reading-journal",
      },
      accepts: [...r, ...a],
      rejects: "illegal-trigger",
      rejectsSpecifically: { start: "already-running", ...u },
    },
    "operational.working.reviewing-drafts": {
      note: "Applying a draft decision: publish the verified bytes, or retract them.",
      edges: {
        ...c,
        "effect.done": "operational.idle",
        "fail.reconcile.journal": "operational.reconcile.reading-journal",
      },
      accepts: [...r, ...a],
      rejects: "illegal-trigger",
      rejectsSpecifically: { start: "already-running", ...u },
    },
    "operational.working.direct-mutation": {
      note: "A write, move or delete the adapter asked for, journalled before the disk moves.",
      edges: {
        ...c,
        "effect.done": "operational.idle",
        "fail.reconcile.journal": "operational.reconcile.reading-journal",
      },
      accepts: [...r, ...a],
      rejects: "illegal-trigger",
      rejectsSpecifically: { start: "already-running", ...u },
    },
    "operational.working.flushing-outbox": {
      note: "Publishing one bounded page of durable intents. Returns through idle with a coalesced `remaining` item when work is left, so a lower-priority rescan that a blocked intent depends on can run between pages.",
      edges: {
        ...c,
        "effect.done": "operational.idle",
        "fail.reconcile.journal": "operational.reconcile.reading-journal",
      },
      accepts: [...r, ...a],
      rejects: "illegal-trigger",
      rejectsSpecifically: { start: "already-running", ...u },
    },
    "operational.working.applying-delta": {
      note: "Applying an exact delta carried inline on a change hint.",
      edges: {
        ...c,
        "effect.done": "operational.working.applying-remote",
        "fail.reconcile.journal": "operational.working.reading-journal",
      },
      accepts: [...r, ...a],
      rejects: "illegal-trigger",
      rejectsSpecifically: { start: "already-running", ...u },
    },
    "operational.working.reading-journal": {
      note: "Reading ordered changes since the durable sequence.",
      edges: {
        ...c,
        "effect.done": "operational.working.applying-remote",
        "fail.reconcile.frontier": "operational.working.descending-frontier",
      },
      accepts: [...r, ...a],
      rejects: "illegal-trigger",
      rejectsSpecifically: {
        start: "already-running",
        "fail.reconcile.journal": "no-level-skip",
        "fail.reconcile.manifest": "no-level-skip",
      },
    },
    "operational.working.descending-frontier": {
      note: "Descending only the directories whose hashes disagree. Reachable only by escalation: every edge into this state is a `fail.reconcile.frontier`.",
      edges: {
        ...c,
        "effect.done": "operational.working.applying-remote",
        "fail.reconcile.manifest": "operational.working.reconciling-manifest",
      },
      accepts: [...r, ...a],
      rejects: "illegal-trigger",
      rejectsSpecifically: {
        start: "already-running",
        "fail.reconcile.journal": "no-level-skip",
        "fail.reconcile.frontier": "no-level-skip",
      },
    },
    "operational.working.reconciling-manifest": {
      note: "Last resort. The listing follows a workspace that moves while it is paged and replays the journal over what it paged across; one that keeps moving backs off and retries. Reachable only by escalation, and there is no level below it: a manifest that will not reconcile faults rather than re-entering the chain it just fell out of.",
      edges: {
        ...c,
        "effect.done": "operational.working.applying-remote",
        "fail.reconcile.journal": "faulted",
        "fail.reconcile.frontier": "faulted",
        "fail.reconcile.manifest": "faulted",
      },
      accepts: [...r, ...a],
      rejects: "illegal-trigger",
      rejectsSpecifically: { start: "already-running" },
    },
    "operational.working.applying-remote": {
      note: "Downloading, verifying and atomically landing remote changes.",
      edges: {
        ...c,
        "effect.done": "operational.working.verifying-root",
        "fail.reconcile.journal": "operational.reconcile.reading-journal",
      },
      accepts: [...r, ...a],
      rejects: "illegal-trigger",
      rejectsSpecifically: { start: "already-running", ...u },
    },
    "operational.working.verifying-root": {
      note: "The checkpoint gate. Advances only when every change is durably applied, no journal record is incomplete, the recomputed root equals the server root, and sequence and root persist together. A mismatch here enters the repair lane rather than retrying the same cycle, unless the same complete manifest has already failed this check once: then no level is left and the workspace faults.",
      edges: {
        ...c,
        "effect.done": "operational.idle",
        "fail.reconcile.journal": "operational.reconcile.reading-journal",
      },
      accepts: [...r, ...a],
      rejects: "illegal-trigger",
      rejectsSpecifically: { start: "already-running", ...u },
    },
    "operational.working.auditing": {
      note: "A complete local walk. An incomplete walk may not authorize pruning.",
      edges: {
        ...c,
        "effect.done": "operational.idle",
        "fail.reconcile.journal": "operational.reconcile.reading-journal",
      },
      accepts: [...r, ...a],
      rejects: "illegal-trigger",
      rejectsSpecifically: { start: "already-running", ...u },
    },
    "operational.recovering": {
      note: "Backing off against the single per-workspace timer. A direct mutation preempts, because priority 2 outranks a wait for a class that failed.",
      edges: {
        "retry-deadline": "operational.idle",
        "begin.direct-mutation": "operational.working.direct-mutation",
        stop: "stopping.quiescing-sources",
      },
      accepts: [...r, ...a],
      rejects: "backing-off",
      rejectsSpecifically: { start: "already-running", ...F },
    },
    "operational.reconcile.reading-journal": {
      note: "Repair lane. Cheapest repair first; the lane admits no new publication.",
      edges: {
        ...b,
        "effect.done": "operational.reconcile.applying-remote",
        "fail.reconcile.frontier": "operational.reconcile.descending-frontier",
      },
      accepts: [...r, ...a],
      rejects: "repair-lane-closed",
      rejectsSpecifically: {
        start: "already-running",
        "fail.reconcile.journal": "no-level-skip",
        "fail.reconcile.manifest": "no-level-skip",
      },
    },
    "operational.reconcile.descending-frontier": {
      note: "Repair lane. One level below the journal.",
      edges: {
        ...b,
        "effect.done": "operational.reconcile.applying-remote",
        "fail.reconcile.manifest": "operational.reconcile.reconciling-manifest",
      },
      accepts: [...r, ...a],
      rejects: "repair-lane-closed",
      rejectsSpecifically: {
        start: "already-running",
        "fail.reconcile.journal": "no-level-skip",
        "fail.reconcile.frontier": "no-level-skip",
      },
    },
    "operational.reconcile.reconciling-manifest": {
      note: "Repair lane floor. Below this there is only a fault.",
      edges: {
        ...b,
        "effect.done": "operational.reconcile.applying-remote",
        "fail.reconcile.journal": "faulted",
        "fail.reconcile.frontier": "faulted",
        "fail.reconcile.manifest": "faulted",
      },
      accepts: [...r, ...a],
      rejects: "repair-lane-closed",
      rejectsSpecifically: { start: "already-running" },
    },
    "operational.reconcile.applying-remote": {
      note: "Repair lane. Landing what the repair found.",
      edges: {
        ...b,
        "effect.done": "operational.reconcile.verifying-root",
        "fail.reconcile.frontier": "operational.reconcile.descending-frontier",
      },
      accepts: [...r, ...a],
      rejects: "repair-lane-closed",
      rejectsSpecifically: {
        start: "already-running",
        "fail.reconcile.journal": "no-level-skip",
        "fail.reconcile.manifest": "no-level-skip",
      },
    },
    "operational.reconcile.verifying-root": {
      note: "Repair lane exit. A verified root commits the checkpoint and releases the lane. A root that does not match steps down from the level that fed the check: after a journal answer the frontier, which derives the deletes a journal could not deliver from the listing of each directory the server reports; after a descent the manifest, because the descent was the level that just ran. A root that does not match after the same complete manifest has been applied twice is one the server cannot reproduce from its own manifest. The effect asks the server to check its tree once per cycle; a server that repaired it or moved gives the manifest a new root, and the check steps down to the manifest again. Otherwise the effect reports `fail.reconcile.exhausted` and the workspace faults rather than paging the manifest until the chain bound reports an invariant.",
      edges: {
        ...b,
        "effect.done": "operational.idle",
        "fail.reconcile.frontier": "operational.reconcile.descending-frontier",
        "fail.reconcile.manifest": "operational.reconcile.reconciling-manifest",
      },
      accepts: [...r, ...a],
      rejects: "repair-lane-closed",
      rejectsSpecifically: {
        start: "already-running",
        "fail.reconcile.journal": "no-level-skip",
      },
    },
    "operational.reconcile.recovering": {
      note: "Repair lane backoff. The deadline restarts the lane at its cheapest level rather than resuming mid-chain, so a repair that was interrupted cannot resume against a snapshot that moved underneath it.",
      edges: {
        "retry-deadline": "operational.reconcile.reading-journal",
        stop: "stopping.quiescing-sources",
      },
      accepts: [...r, ...a],
      rejects: "repair-lane-closed",
      rejectsSpecifically: { start: "already-running" },
    },
    "stopping.quiescing-sources": {
      note: "Detaching the watcher and change source so no new observation arrives.",
      edges: { "sources-quiesced": "stopping.draining" },
      accepts: [...r, "stop", ...E],
      rejects: "already-stopping",
    },
    "stopping.draining": {
      note: "Joining every in-flight effect. Nothing survives this untracked.",
      edges: { "effects-joined": "stopping.persisting" },
      accepts: [...r, "stop", ...E],
      rejects: "already-stopping",
    },
    "stopping.persisting": {
      note: "Writing durable state. A failure here is not a warning — losing a pending write on shutdown loses user work — so it faults rather than closing.",
      edges: {
        "state-persisted": "stopping.closing",
        "fail.retryable": "faulted",
        "fail.local-environment.recoverable": "faulted",
        "fail.local-environment.fatal": "faulted",
        "fail.integrity.exhausted": "faulted",
        "fail.permission.path": "faulted",
        "fail.permission.workspace": "faulted",
        "fail.invariant": "faulted",
      },
      accepts: [...r, "stop", "fail.cancelled"],
      rejects: "already-stopping",
    },
    "stopping.closing": {
      note: "Closing both stores and releasing their handles for the next mount.",
      edges: {
        "stores-closed": "stopped",
        "fail.retryable": "faulted",
        "fail.local-environment.recoverable": "faulted",
        "fail.local-environment.fatal": "faulted",
        "fail.integrity.exhausted": "faulted",
        "fail.permission.path": "faulted",
        "fail.permission.workspace": "faulted",
        "fail.invariant": "faulted",
      },
      accepts: [...r, "stop", "fail.cancelled"],
      rejects: "already-stopping",
    },
    "start-failed": {
      note: "Fully rolled back: stores closed, sources detached. A fresh start can succeed.",
      edges: { start: "starting.opening-stores", stop: "stopped" },
      accepts: r,
      rejects: "not-running",
    },
    faulted: {
      note: "Stable typed cause, no background mutation. Only a stop is honoured; a restart is a new mount, so the cause cannot be cleared by retrying.",
      edges: { stop: "stopping.quiescing-sources" },
      accepts: r,
      rejects: "faulted",
    },
  },
  I = 8,
  M = (e) => new Promise((t) => setTimeout(t, e));
async function _(e) {
  try {
    return { kind: "stats", stats: await T.lstat(e, { bigint: !0 }) };
  } catch (t) {
    return { kind: "failed", outcome: N(t) };
  }
}
async function L(e, t) {
  try {
    return (await C(e, t)) ? { kind: "missing" } : null;
  } catch (n) {
    return N(n);
  }
}
function N(e) {
  const t = e instanceof Error && "code" in e ? e.code : null;
  return t === "ENOENT"
    ? { kind: "missing" }
    : t === "EISDIR"
      ? { kind: "directory" }
      : t === "ENOSPC"
        ? { kind: "unreadable", failure: j("disk-full", "no space left") }
        : {
            kind: "unreadable",
            failure: j("root-unreadable", "a tracked path could not be read"),
          };
}
async function $(e, t, n = S.settledReadWindowMs) {
  const i = typeof n == "number" ? { kind: "content" } : n,
    s = typeof n == "number" ? n : S.settledReadWindowMs,
    o = i.kind === "hash" ? i.signal : void 0,
    g = await L(e, t);
  if (g !== null) return g;
  for (let m = 1; m <= I; m++) {
    if (o?.aborted)
      return {
        kind: "unreadable",
        failure: A("stop-requested", "the read was cancelled"),
      };
    const l = await _(t);
    if (l.kind === "failed") return l.outcome;
    const d = l.stats;
    if (d.isDirectory()) return { kind: "directory" };
    if (!d.isFile()) return { kind: "missing" };
    const w = Number(d.size);
    if (w > S.maxScanBytes) return { kind: "too-large", sizeBytes: w };
    const f = await Re(t, d, i);
    if (f.kind === "outcome") return f.outcome;
    s > 0 && (await M(s));
    const h = await _(t);
    if (h.kind === "failed") return h.outcome;
    const p = h.stats;
    if (
      p.isFile() &&
      p.ino === d.ino &&
      p.dev === d.dev &&
      p.size === d.size &&
      p.mtimeMs === d.mtimeMs &&
      Number(p.size) === f.sizeBytes
    )
      return {
        kind: "file",
        ...(f.kind === "bytes" ? { content: f.content } : {}),
        contentHash: f.contentHash,
        sizeBytes: f.sizeBytes,
        mtimeMs: Number(p.mtimeMs),
        inode: p.ino.toString(),
      };
    await M(Math.min(2 ** m, 64));
  }
  return { kind: "unsettled", attempts: I };
}
async function B(e, t) {
  if (t.mtimeMs === null) return { kind: "changed" };
  const n = await _(e);
  if (n.kind === "failed") return n.outcome;
  const i = n.stats;
  return i.isDirectory()
    ? { kind: "directory" }
    : i.isFile()
      ? H(
          {
            sizeBytes: Number(i.size),
            mtimeMs: Number(i.mtimeMs),
            inode: i.ino.toString(),
          },
          t,
        )
      : { kind: "missing" };
}
function H(e, t) {
  return t.mtimeMs === null
    ? { kind: "changed" }
    : e.sizeBytes !== t.sizeBytes || e.mtimeMs !== t.mtimeMs
      ? { kind: "changed" }
      : {
          kind: "file",
          contentHash: t.contentHash,
          sizeBytes: t.sizeBytes,
          mtimeMs: t.mtimeMs,
          inode: e.inode,
        };
}
async function xe(e, t, n, i) {
  if (n !== null) {
    const s = await L(e, t);
    if (s !== null) return s;
    const o = await B(t, n);
    if (o.kind !== "changed") return o;
  }
  return $(e, t, i);
}
async function Re(e, t, n) {
  const i = Number(t.size);
  let s;
  try {
    s = await T.open(e, "r");
  } catch (o) {
    return { kind: "outcome", outcome: N(o) };
  }
  try {
    const o = await s.stat({ bigint: !0 });
    if (o.ino !== t.ino || o.dev !== t.dev)
      return { kind: "outcome", outcome: { kind: "unsettled", attempts: 1 } };
    const g = n.kind === "content" ? new Uint8Array(i) : n.buffer,
      m = O.createHash("sha256");
    let l = 0;
    for (; l < i; ) {
      if (n.kind === "hash" && n.signal?.aborted)
        return {
          kind: "outcome",
          outcome: {
            kind: "unreadable",
            failure: A("stop-requested", "the read was cancelled"),
          },
        };
      const h = n.kind === "content" ? l : 0,
        p = Math.min(g.length - h, i - l),
        { bytesRead: v } = await s.read(g, h, p, l);
      if (v === 0) break;
      (m.update(g.subarray(h, h + v)), (l += v));
    }
    if (l < i)
      return { kind: "outcome", outcome: { kind: "unsettled", attempts: 1 } };
    const d = n.kind === "hash" ? g : new Uint8Array(1),
      { bytesRead: w } = await s.read(d, 0, 1, i);
    if (w > 0)
      return { kind: "outcome", outcome: { kind: "unsettled", attempts: 1 } };
    const f = m.digest("hex");
    return n.kind === "content"
      ? { kind: "bytes", content: g, contentHash: f, sizeBytes: l }
      : { kind: "hash", contentHash: f, sizeBytes: l };
  } catch (o) {
    return { kind: "outcome", outcome: N(o) };
  } finally {
    await s.close().catch(() => {});
  }
}
async function Fe(e, t) {
  const n = await _(e);
  if (n.kind === "failed")
    return {
      ok: !1,
      failure: j("root-unreadable", "the path is no longer there"),
    };
  const i = n.stats;
  return Number(i.mtimeMs) !== t.mtimeMs || Number(i.size) !== t.sizeBytes
    ? {
        ok: !1,
        failure: D(
          "content-hash-mismatch",
          `stale-snapshot:${t.contentHash}`,
          "the file changed after its snapshot was taken",
        ),
      }
    : { ok: !0 };
}
exports.DELETED_FILES_LIMIT = W;
exports.ENGINE_BOUNDS = S;
exports.FSAdapterError = Q;
exports.FSConflictError = K;
exports.FSForbiddenError = J;
exports.FSNotFoundError = X;
exports.FSProtocolMismatchError = Z;
exports.FSWorkspaceDeletedError = te;
exports.FS_SYNC_PROTOCOL_HEADER = Y;
exports.INLINE_SIZE_THRESHOLD = ne;
exports.INTEGRITY_FAILURES_BEFORE_FAULT = ke;
exports.LEGACY_SYNC_PROTOCOL_VERSION = G;
exports.MACHINE = Te;
exports.RESTING_STATES = Ne;
exports.STATES = _e;
exports.SYNC_PROTOCOL_VERSION = ee;
exports.SYNC_PROTOCOL_VERSION_V2 = q;
exports.SYNC_V2_BOUNDS = U;
exports.TRIGGERS = Oe;
exports.authBlocked = le;
exports.compareSyncPaths = V;
exports.crossesLink = C;
exports.describeFailure = be;
exports.failureIdentity = ve;
exports.fileExtension = Ee;
exports.fileNameKey = Se;
exports.integrity = D;
exports.invariant = he;
exports.isTerminal = ye;
exports.judgeListed = H;
exports.localEnvironment = j;
exports.md5Base64 = re;
exports.permission = pe;
exports.readSettled = $;
exports.readUnlessKnown = xe;
exports.reconcile = ce;
exports.reconcileAfter = de;
exports.reconcileExhausted = fe;
exports.retryable = se;
exports.rootMismatchFields = we;
exports.sha256 = ie;
exports.statKnown = B;
exports.stillDescribes = Fe;
exports.systemClock = ae;
exports.unclassified = me;
exports.uniformJitter = oe;
exports.unlandableVersion = ge;
exports.unverifiableDownload = ue;
exports.workspaceMountKey = je;
