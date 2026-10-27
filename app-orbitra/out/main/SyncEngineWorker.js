"use strict";
(function () {
  try {
    var t =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    t.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "1894b322-1fd0-4f3a-b9cc-0e3a961af196"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-1894b322-1fd0-4f3a-b9cc-0e3a961af196"));
  })();
} catch {}
const ee = require("./chunks/savedCertificateBlocklist-BUtmL3xA.js"),
  d = require("./chunks/settled-read-r0Yf0ORp.js"),
  S = require("node:fs/promises"),
  H = require("node:path"),
  dt = require("better-sqlite3"),
  Z = require("node:crypto"),
  $ = require("./chunks/config-CdpnFYk6.js"),
  Zn = require("./chunks/index-C4t9jrSl.js"),
  te = require("./chunks/folder-listing-DokmAYAd.js"),
  es = require("valibot"),
  ts = require("path"),
  ns = require("istextorbinary"),
  ss = require("./chunks/fs-native-KvxiM8hl.js"),
  rs = require("./chunks/_commonjsHelpers-DJP3_Dvh.js");
require("node:fs");
require("node:tls");
require("node:module");
function ht(t) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (t) {
    for (const n in t)
      if (n !== "default") {
        const s = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(
          e,
          n,
          s.get ? s : { enumerable: !0, get: () => t[n] },
        );
      }
  }
  return ((e.default = t), Object.freeze(e));
}
const is = ht(S),
  as = ht(H),
  u = ht(es);
function Nt(t, e) {
  switch (t) {
    case "operational.reconcile.reading-journal":
    case "operational.reconcile.applying-remote":
      return "fail.reconcile.frontier";
    case "operational.reconcile.verifying-root":
      return e === "journal"
        ? "fail.reconcile.frontier"
        : "fail.reconcile.manifest";
    case "operational.working.reading-journal":
      return "fail.reconcile.frontier";
    case "operational.working.descending-frontier":
    case "operational.reconcile.descending-frontier":
      return "fail.reconcile.manifest";
    case "operational.working.reconciling-manifest":
    case "operational.reconcile.reconciling-manifest":
      return "fail.reconcile.manifest";
    default:
      return "fail.reconcile.journal";
  }
}
function Ve(t, e, n) {
  switch (t.class) {
    case "cancelled":
      return "fail.cancelled";
    case "retryable":
      return "fail.retryable";
    case "auth-blocked":
      return "fail.auth-blocked";
    case "reconcile":
      return t.exhausted === !0 ? "fail.reconcile.exhausted" : Nt(e, t.after);
    case "permission":
      return t.scope === "workspace"
        ? "fail.permission.workspace"
        : "fail.permission.path";
    case "integrity":
      return n.integrityRepaired === !0
        ? "fail.retryable"
        : n.integrityRepeatsForFingerprint + 1 >=
            d.INTEGRITY_FAILURES_BEFORE_FAULT
          ? "fail.integrity.exhausted"
          : Nt(e);
    case "local-environment":
      return t.reason === "disk-full"
        ? "fail.local-environment.fatal"
        : "fail.local-environment.recoverable";
    case "invariant":
      return "fail.invariant";
  }
}
class D extends Error {
  constructor(e, n = null) {
    (super(e.message),
      (this.failure = e),
      (this.openCause = n),
      (this.name = "StoreError"));
  }
}
const os = 5e3,
  ls = 250;
class cs extends Error {
  code = "QUICK_CHECK_FAILED";
}
function us(t) {
  return t instanceof Error && "code" in t && typeof t.code == "string"
    ? t.code
    : null;
}
const ds = [
    "SQLITE_CANTOPEN",
    "SQLITE_IOERR",
    "SQLITE_PERM",
    "SQLITE_READONLY",
    "SQLITE_AUTH",
    "SQLITE_PROTOCOL",
    "SQLITE_NOMEM",
    "SQLITE_NOLFS",
  ],
  hs = new Set([
    "EACCES",
    "EPERM",
    "EROFS",
    "EIO",
    "EBUSY",
    "EMFILE",
    "ENFILE",
  ]);
function ps(t, e) {
  if (t instanceof D) return { kind: "incompatible", phase: e, code: null };
  const n = us(t);
  return n === null
    ? { kind: "unknown", phase: e, code: n }
    : n.startsWith("SQLITE_BUSY") || n.startsWith("SQLITE_LOCKED")
      ? { kind: "held", phase: e, code: n }
      : n.startsWith("SQLITE_CORRUPT") ||
          n === "SQLITE_NOTADB" ||
          n === "QUICK_CHECK_FAILED"
        ? { kind: "corrupt", phase: e, code: n }
        : n === "SQLITE_FULL" || n === "ENOSPC"
          ? { kind: "disk-full", phase: e, code: n }
          : hs.has(n) || ds.some((s) => n.startsWith(s))
            ? { kind: "unavailable", phase: e, code: n }
            : { kind: "unknown", phase: e, code: n };
}
function Te(t) {
  return `${t.code ?? "no code"} during ${t.phase}`;
}
function fs(t, e) {
  return `${t}.corrupt-${e}`;
}
async function Le(t) {
  const e = H.join(t.directory, t.fileName),
    n = { phase: "connect" };
  try {
    return (
      await S.mkdir(t.directory, { recursive: !0 }),
      { db: Ct(e, t, n), path: e, quarantinedTo: null }
    );
  } catch (s) {
    const r = ps(s, n.phase);
    switch (r.kind) {
      case "held":
        throw new D(
          d.localEnvironment(
            "store-unavailable",
            `${t.fileName} is already open by another connection`,
          ),
          r,
        );
      case "unavailable":
        throw new D(
          d.localEnvironment(
            "store-unavailable",
            `${t.fileName} could not be reached: ${Te(r)}`,
          ),
          r,
        );
      case "disk-full":
        throw new D(
          d.localEnvironment(
            "disk-full",
            `${t.fileName} could not be opened: ${Te(r)}`,
          ),
          r,
        );
    }
    if (t.onCorruption === "fault")
      throw s instanceof D
        ? new D(s.failure, r)
        : r.kind === "unknown"
          ? new D(
              d.invariant(
                "unclassified",
                `${t.fileName} could not be opened: ${Te(r)}`,
              ),
              r,
            )
          : new D(
              d.integrity(
                "store-corrupt",
                `store:${t.fileName}`,
                `${t.fileName} is damaged and holds work that cannot be rebuilt: ${Te(r)}`,
              ),
              r,
            );
    const i = await vs(t.directory, t.fileName);
    return { db: Ct(e, t, { phase: "connect" }), path: e, quarantinedTo: i };
  }
}
function Ct(t, e, n) {
  const s = gs(t, e, n);
  try {
    return (
      (n.phase = "v1-stamp"),
      e.v1Schema !== void 0 && ms(s, e.v1Schema),
      (n.phase = "migrate"),
      ws(s, e.migrations),
      s
    );
  } catch (r) {
    throw (s.close(), r);
  }
}
function Ht(t, e) {
  return (
    t
      .prepare("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?")
      .get(e) !== void 0
  );
}
function ms(t, e) {
  Ht(t, e.ourFirstTable) ||
    !Ht(t, e.table) ||
    (Number(t.pragma("user_version", { simple: !0 })) !== 0 &&
      t.pragma("user_version = 0"));
}
function gs(t, e, n) {
  n.phase = "connect";
  const s = new dt(t);
  try {
    if (
      (s.pragma(`busy_timeout = ${e.lockTimeoutMs ?? ls}`),
      (n.phase = "journal-mode"),
      s.pragma("journal_mode = WAL"),
      (n.phase = "settings"),
      s.pragma(`synchronous = ${e.durability === "full" ? "FULL" : "NORMAL"}`),
      s.pragma("foreign_keys = ON"),
      s.pragma("locking_mode = EXCLUSIVE"),
      (n.phase = "lock"),
      s.exec("BEGIN IMMEDIATE; COMMIT;"),
      s.pragma(`busy_timeout = ${e.busyTimeoutMs ?? os}`),
      (n.phase = "quick-check"),
      s.pragma("quick_check", { simple: !0 }) !== "ok")
    )
      throw new cs("the integrity check did not return ok");
    return s;
  } catch (r) {
    throw (s.close(), r);
  }
}
async function Ae(t) {
  try {
    return (await S.access(t), !0);
  } catch {
    return !1;
  }
}
async function pt(t, e) {
  for (let n = 1; n <= 10; n++) {
    const s = fs(e, n);
    if (!(await Ae(H.join(t, s)))) return s;
  }
  throw new D(
    d.localEnvironment(
      "store-unavailable",
      `${e} has been quarantined too many times`,
    ),
  );
}
async function ft(t, e, n) {
  if (!(await Ae(H.join(t, n))))
    for (const s of ["-wal", "-shm", ""]) {
      const r = H.join(t, `${e}${s}`),
        i = H.join(t, `${n}${s}`);
      !(await Ae(r)) || (await Ae(i)) || (await S.rename(r, i));
    }
}
async function vs(t, e) {
  const n = await pt(t, e);
  return (await ft(t, e, n), n);
}
function ws(t, e) {
  for (const [s, r] of e.entries())
    if (r.version !== s + 1)
      throw new D(
        d.integrity(
          "impossible-version",
          `migration:${r.name}`,
          `migration ${r.name} declares version ${r.version} at position ${s + 1}`,
        ),
      );
  const n = Number(t.pragma("user_version", { simple: !0 }));
  if (n > e.length)
    throw new D(
      d.integrity(
        "impossible-version",
        "migration:downgrade",
        `database is at user_version ${n} but this build knows ${e.length}`,
      ),
    );
  for (const s of e) {
    if (s.version <= n) continue;
    t.transaction(() => {
      if ((t.exec(s.up), s.backfill?.(t), s.verify !== void 0)) {
        const i = s.verify(t);
        if (i !== s.expect)
          throw new D(
            d.integrity(
              "impossible-version",
              `migration:${s.name}`,
              `migration ${s.name} verified as ${i}, expected ${s.expect}`,
            ),
          );
      }
      t.pragma(`user_version = ${s.version}`);
    })();
  }
}
function ue(t, e, n) {
  const s = n
      .map((i) => `COALESCE(CAST(${i} AS TEXT), '')`)
      .join(" || '|' || "),
    r = t
      .prepare(
        `SELECT COUNT(*) AS n, COALESCE(group_concat(row, '
'), '') AS joined
       FROM (SELECT ${s} AS row FROM ${e} ORDER BY ${n.join(", ")})`,
      )
      .get();
  return `${r.n}:${r.joined.length}`;
}
class Es {
  ignoresByDir = new Map();
  scannedDirs = new Set();
  async scanDir(e, n, s) {
    if (this.scannedDirs.has(n)) return;
    this.scannedDirs.add(n);
    const r = Zn.ignore();
    let i = !1;
    for (const a of $.syncedFSConfig.ignoreConfigs) {
      const o = a.toLowerCase();
      if (s !== void 0 && !s.some((c) => c.toLowerCase() === o)) continue;
      const l = as.join(e, a);
      try {
        const c = await is.readFile(l, "utf-8");
        (r.add(c), (i = !0));
      } catch {}
    }
    i &&
      (r.add([...$.syncedFSConfig.folderIdentityFiles].map((a) => `!${a}`)),
      this.ignoresByDir.set(n, r));
  }
  isIgnored(e) {
    const n = e.split("/");
    let s = "";
    for (let r = 0; r < n.length; r++) {
      const i = this.ignoresByDir.get(s);
      if (i) {
        const a = n.slice(r).join("/");
        if (i.ignores(a)) return !0;
      }
      r < n.length - 1 && (s = s ? s + "/" + n[r] : n[r]);
    }
    return !1;
  }
  invalidate(e) {
    (this.ignoresByDir.delete(e), this.scannedDirs.delete(e));
  }
  clear() {
    (this.ignoresByDir.clear(), this.scannedDirs.clear());
  }
}
const ks = 500;
function mt(t, e, n) {
  const s = Math.min(
      ks * 2 ** Math.max(0, e.attempt - 1),
      d.ENGINE_BOUNDS.retryMaxDelayMs,
    ),
    r = Math.max(s, e.retryAfterMs ?? 0);
  return t + r + n.draw(d.ENGINE_BOUNDS.retryJitterMaxMs);
}
function Ge(t, e = []) {
  if (t != null && t.trim() !== "") {
    const s = Number(t.trim());
    return !Number.isFinite(s) || s < 0
      ? { kind: "rejected", reason: "malformed-header" }
      : { kind: "delay", ms: Math.round(s * 1e3) };
  }
  if (e.length === 0) return { kind: "absent" };
  if (e.length > 1) return { kind: "rejected", reason: "duplicate-body-value" };
  const [n] = e;
  return n === null || typeof n != "number" || !Number.isFinite(n) || n < 0
    ? { kind: "rejected", reason: "malformed-body" }
    : { kind: "delay", ms: Math.round(n * 1e3) };
}
class bs {
  constructor(e) {
    this.workspaceId = e;
  }
  generation = 0;
  sequence = 0;
  active = null;
  currentGeneration() {
    return this.generation;
  }
  hasActiveEffect() {
    return this.active !== null;
  }
  activeToken() {
    return this.active?.token ?? null;
  }
  open(e) {
    if (this.active !== null)
      throw new Error(
        "a second top-level effect was opened while one was already running",
      );
    const n = new AbortController();
    this.sequence += 1;
    const s = {
      workspaceId: this.workspaceId,
      generation: this.generation,
      effectId: `${this.generation}:${this.sequence}`,
      expectedState: e,
      signal: n.signal,
    };
    return ((this.active = { token: s, controller: n }), s);
  }
  admit(e, n) {
    return e.workspaceId !== this.workspaceId
      ? { kind: "stale", reason: "wrong-workspace" }
      : e.generation !== this.generation
        ? { kind: "stale", reason: "old-generation" }
        : this.active === null || this.active.token.effectId !== e.effectId
          ? { kind: "stale", reason: "unknown-effect" }
          : e.expectedState !== n
            ? { kind: "stale", reason: "wrong-state" }
            : { kind: "current" };
  }
  close(e) {
    this.active?.token.effectId === e && (this.active = null);
  }
  supersede() {
    return (
      this.active?.controller.abort(),
      (this.active = null),
      (this.generation += 1),
      this.generation
    );
  }
}
const ys = 5e3,
  _s = d.ENGINE_BOUNDS.eventCoalescingDelayMs,
  we = [
    "direct-mutation",
    "publish-barrier",
    "draft-review",
    "outbox",
    "local-events",
    "remote",
    "audit",
    "poll",
  ],
  Ts = {
    "direct-mutation": "begin.direct-mutation",
    "publish-barrier": "begin.commit-local",
    "draft-review": "begin.review-drafts",
    outbox: "begin.flush-outbox",
    "local-events": "begin.inspect-local",
    remote: "begin.apply-delta",
    audit: "begin.audit",
    poll: "begin.read-journal",
  };
function Ss(t) {
  return t.workClass === "remote"
    ? t.changeHint?.inlineContent != null && t.changeHint.inlineContent !== ""
      ? "begin.apply-delta"
      : "begin.read-journal"
    : Ts[t.workClass];
}
class Rs {
  constructor(e) {
    this.now = e;
  }
  singletons = new Map();
  localEvents = new Map();
  localEventsDueAt = 0;
  barriers = new Map();
  directMutations = [];
  draftReviews = [];
  size() {
    return (
      this.singletons.size +
      this.barriers.size +
      this.directMutations.length +
      this.draftReviews.length +
      (this.localEvents.size > 0 ? 1 : 0)
    );
  }
  isEmpty() {
    return this.size() === 0;
  }
  localChangeCount() {
    return this.localEvents.size;
  }
  has(e) {
    return this.head(e) !== null;
  }
  hasBarrier(e) {
    return this.barriers.has(e);
  }
  hasDueWork() {
    const e = this.now();
    return we.some((n) => this.peek(n, e) !== null);
  }
  nextDueAt() {
    const e = this.now();
    let n = null;
    for (const s of we) {
      const r = this.head(s);
      r === null ||
        r.dueAt <= e ||
        ((n === null || r.dueAt < n) && (n = r.dueAt));
    }
    return n;
  }
  push(e) {
    const n = this.now();
    switch (e.workClass) {
      case "direct-mutation":
        this.directMutations.push({ item: e, dueAt: n });
        return;
      case "draft-review":
        this.draftReviews.push({ item: e, dueAt: n });
        return;
      case "publish-barrier": {
        const s = this.barriers.get(e.path);
        this.barriers.set(e.path, { item: e, dueAt: s?.dueAt ?? n });
        return;
      }
      case "local-events": {
        this.localEvents.size === 0 && (this.localEventsDueAt = n + _s);
        for (const s of e.events) this.localEvents.set(s.relativePath, s);
        return;
      }
      case "remote": {
        this.singletons.delete("poll");
        const s = this.singletons.get("remote"),
          r = s?.item.workClass === "remote" ? s.item : null;
        this.singletons.set("remote", {
          item: {
            workClass: "remote",
            reason: e.reason,
            rootHashHint: e.rootHashHint ?? r?.rootHashHint,
            sequenceHint:
              e.sequenceHint === void 0 || r?.sequenceHint === void 0
                ? (e.sequenceHint ?? r?.sequenceHint)
                : Math.max(e.sequenceHint, r.sequenceHint),
            changeHint: e.changeHint ?? r?.changeHint,
          },
          dueAt: s?.dueAt ?? n,
        });
        return;
      }
      case "poll":
        if (this.singletons.has("remote")) return;
        this.singletons.set("poll", {
          item: e,
          dueAt: this.singletons.get("poll")?.dueAt ?? n,
        });
        return;
      case "outbox": {
        const s = this.singletons.get("outbox");
        this.singletons.set("outbox", {
          item: { workClass: "outbox" },
          dueAt: Math.min(s?.dueAt ?? 1 / 0, e.notBefore ?? n),
        });
        return;
      }
      case "audit": {
        const s = this.singletons.get("audit");
        this.singletons.set("audit", { item: e, dueAt: s?.dueAt ?? n });
        return;
      }
    }
  }
  head(e) {
    switch (e) {
      case "direct-mutation":
        return this.directMutations[0] ?? null;
      case "draft-review":
        return this.draftReviews[0] ?? null;
      case "publish-barrier": {
        let n = null;
        for (const s of this.barriers.values())
          (n === null || s.dueAt < n.dueAt) && (n = s);
        return n;
      }
      case "local-events":
        return this.localEvents.size === 0
          ? null
          : {
              item: {
                workClass: "local-events",
                events: [...this.localEvents.values()],
              },
              dueAt: this.localEventsDueAt,
            };
      default:
        return this.singletons.get(e) ?? null;
    }
  }
  peek(e, n) {
    const s = this.head(e);
    return s !== null && s.dueAt <= n ? s : null;
  }
  drop(e) {
    switch (e.item.workClass) {
      case "direct-mutation":
        this.directMutations.shift();
        return;
      case "draft-review":
        this.draftReviews.shift();
        return;
      case "publish-barrier":
        this.barriers.delete(e.item.path);
        return;
      case "local-events":
        (this.localEvents.clear(), (this.localEventsDueAt = 0));
        return;
      default:
        this.singletons.delete(e.item.workClass);
    }
  }
  take() {
    const e = this.now();
    let n = null;
    for (const s of we) {
      const r = this.peek(s, e);
      r !== null &&
        (e - r.dueAt < ys || ((n === null || r.dueAt < n.dueAt) && (n = r)));
    }
    if (n !== null) return (this.drop(n), n.item);
    for (const s of we) {
      const r = this.peek(s, e);
      if (r !== null) return (this.drop(r), r.item);
    }
    return null;
  }
  oldestWaitMs() {
    const e = this.now();
    let n = 0;
    for (const s of we) {
      const r = this.peek(s, e);
      r !== null && (n = Math.max(n, e - r.dueAt));
    }
    return n;
  }
  clear() {
    (this.singletons.clear(),
      this.barriers.clear(),
      this.localEvents.clear(),
      (this.localEventsDueAt = 0),
      (this.directMutations.length = 0),
      (this.draftReviews.length = 0));
  }
}
const At = 16;
function Is(t) {
  return d.invariant("impossible-journal-state", t);
}
class Ns {
  constructor(e) {
    ((this.options = e),
      (this.fence = new bs(e.workspaceId)),
      (this.queue = new Rs(() => e.clock.now())));
  }
  position = te.INITIAL;
  fence;
  queue;
  deadline = null;
  cancelTimer = null;
  armed = null;
  pumping = !1;
  stopping = null;
  lastFailure = null;
  retryAttempt = 0;
  retryingFrom = null;
  state() {
    return this.position.state;
  }
  generation() {
    return this.position.generation;
  }
  failure() {
    return this.lastFailure;
  }
  queuedWork() {
    return this.queue.size();
  }
  queuedLocalChanges() {
    return this.queue.localChangeCount();
  }
  hasQueued(e) {
    return this.queue.has(e);
  }
  hasBarrierFor(e) {
    return (
      this.queue.hasBarrier(e) ||
      this.position.state === "operational.working.committing-local"
    );
  }
  hasDueWork() {
    return this.queue.hasDueWork();
  }
  dispatch(e, n) {
    const s = te.step(this.position, e);
    return (
      this.applyStep(s),
      s.kind === "refused"
        ? { kind: "refused", reason: s.reason }
        : (n !== void 0 && this.queue.push(n),
          this.wake(),
          { kind: "accepted" })
    );
  }
  enqueue(e, n) {
    if (n.workClass !== e)
      throw new Error(`work item ${n.workClass} queued under ${e}`);
    this.options.holds?.(e) !== !0 && (this.queue.push(n), this.wake());
  }
  async stop() {
    if (this.stopping !== null) return this.stopping;
    this.stopping = (async () => {
      (this.clearTimer(),
        (this.deadline = null),
        this.fence.supersede(),
        this.queue.clear(),
        this.applyStep(te.step(this.position, "stop")));
      for (const e of [
        "sources-quiesced",
        "effects-joined",
        "state-persisted",
        "stores-closed",
      ]) {
        if (this.position.state === "stopped") break;
        this.applyStep(te.step(this.position, e));
      }
    })();
    try {
      await this.stopping;
    } finally {
      this.stopping = null;
    }
  }
  wake() {
    this.pumping || this.pump();
  }
  async pump() {
    if (!this.pumping) {
      this.pumping = !0;
      try {
        for (
          await this.driveChain();
          this.position.state === "operational.idle" && !this.queue.isEmpty();

        ) {
          const e = this.queue.take();
          if (e === null) break;
          const n = Ss(e),
            s = te.step(this.position, n);
          if (s.kind !== "moved") {
            this.applyStep(s);
            continue;
          }
          this.applyStep(s);
          const r = this.fence.open(s.to),
            i = this.options.clock.now(),
            a = await this.runOne(e, r);
          (this.settle(e.workClass, r, a, {
            startedAt: i,
            from: s.to,
            reason: "reason" in e ? e.reason : void 0,
          }),
            await this.driveChain());
        }
      } finally {
        ((this.pumping = !1), this.schedule());
      }
    }
  }
  async runOne(e, n) {
    try {
      return await this.options.effects.run(e, n);
    } catch (s) {
      return { kind: "failed", failure: d.unclassified(s) };
    }
  }
  async driveChain() {
    for (let e = 0; e < At; e++) {
      if (!this.isChainState(this.position.state)) return;
      const n = this.position.state,
        s = this.fence.open(n),
        r = this.options.clock.now();
      let i;
      try {
        i = await this.options.effects.continue(n, s);
      } catch (a) {
        i = { kind: "failed", failure: d.unclassified(a) };
      }
      this.settle("chain", s, i, { startedAt: r, from: n });
    }
    this.isChainState(this.position.state) &&
      ((this.lastFailure = Is(
        `the reconciliation chain did not terminate within ${At} steps`,
      )),
      this.applyStep(te.step(this.position, "fail.invariant")));
  }
  isChainState(e) {
    return (
      e.startsWith("operational.working.") ||
      (e.startsWith("operational.reconcile.") &&
        e !== "operational.reconcile.recovering")
    );
  }
  settle(e, n, s, r) {
    const i = this.fence.admit(n, this.position.state);
    if (i.kind === "stale") {
      this.options.publish({
        kind: "telemetry",
        workspaceId: this.options.workspaceId,
        span: {
          name: "syncengine.effect.discarded",
          startedAt: this.options.clock.now(),
          durationMs: 0,
          attributes: { reason: i.reason, workClass: e },
        },
      });
      return;
    }
    if ((this.fence.close(n.effectId), s.kind === "failed")) {
      const a = this.classify(s.failure);
      ((this.lastFailure = a.failure),
        this.applyStep(te.step(this.position, a.trigger)),
        this.position.state.endsWith("recovering") &&
          ((this.retryingFrom = r.from), this.armRetry(a.failure)),
        this.publishEffectSpan(e, s, r));
      return;
    }
    ((this.lastFailure = null),
      (this.retryingFrom === null || this.retryingFrom === r.from) &&
        ((this.retryAttempt = 0), (this.retryingFrom = null)),
      this.publishEffectSpan(e, s, r),
      "remainingWork" in s &&
        s.remainingWork &&
        (this.queue.push({ workClass: "outbox", notBefore: s.notBefore }),
        s.nextAuditStage === !0 && this.queue.push({ workClass: "audit" }),
        s.moreRemote === !0 &&
          this.queue.push({ workClass: "remote", reason: "remote-hint" })),
      this.applyStep(te.step(this.position, "effect.done")));
  }
  classify(e) {
    if (e.class !== "integrity")
      return {
        trigger: Ve(e, this.position.state, {
          integrityRepeatsForFingerprint: 0,
        }),
        failure: e,
      };
    const n = this.options.integrityRepeats?.(e) ?? 0,
      s = Ve(e, this.position.state, { integrityRepeatsForFingerprint: n }),
      r =
        s === "fail.integrity.exhausted"
          ? (this.options.repairIntegrity?.(e) ?? null)
          : null;
    return (
      this.options.noteIntegrity?.(e),
      r === null
        ? { trigger: s, failure: e }
        : {
            trigger: Ve(e, this.position.state, {
              integrityRepeatsForFingerprint: n,
              integrityRepaired: !0,
            }),
            failure: r,
          }
    );
  }
  applyStep(e) {
    e.kind === "moved" &&
      ((this.position = e.position),
      this.options.publish({
        kind: "transition",
        workspaceId: this.options.workspaceId,
        from: e.from,
        to: e.to,
        trigger: e.trigger,
      }),
      e.to === "faulted" &&
        this.lastFailure !== null &&
        this.options.publish({
          kind: "fault",
          workspaceId: this.options.workspaceId,
          cause: this.lastFailure,
        }));
  }
  publishEffectSpan(e, n, s) {
    const r = {
      ...n.telemetry,
      workClass: e,
      from: s.from,
      to: this.position.state,
      outcome: n.kind === "failed" ? "failed" : "done",
    };
    (s.reason !== void 0 && (r.reason = s.reason),
      "remainingWork" in n && n.remainingWork && (r.remainingWork = !0),
      n.kind === "failed" &&
        ((r.failureClass = n.failure.class),
        (r.failureReason = n.failure.reason),
        (r.retryAttempt = this.retryAttempt)),
      this.options.publish({
        kind: "telemetry",
        workspaceId: this.options.workspaceId,
        span: {
          name: `syncengine.effect.${e}`,
          startedAt: s.startedAt,
          durationMs: Math.max(0, this.options.clock.now() - s.startedAt),
          attributes: r,
        },
      }));
  }
  armRetry(e) {
    const n = e.class === "retryable" ? e.retryAfterMs : void 0;
    this.retryAttempt += 1;
    const s = mt(
      this.options.clock.now(),
      { attempt: this.retryAttempt, retryAfterMs: n },
      this.options.jitter,
    );
    this.armTimerAt(s);
  }
  retryAttempts() {
    return this.retryAttempt;
  }
  armTimerAt(e) {
    ((this.deadline = e), this.schedule());
  }
  hasTimer() {
    return this.deadline !== null;
  }
  schedule() {
    const e =
        this.position.state === "operational.idle"
          ? this.queue.nextDueAt()
          : null,
      n = e !== null && (this.deadline === null || e < this.deadline),
      s = n ? e : this.deadline;
    if (
      (s === (this.armed?.at ?? null) && n === (this.armed?.forQueue ?? !1)) ||
      (this.clearTimer(), s === null)
    )
      return;
    this.armed = { at: s, forQueue: n };
    const r = Math.max(0, s - this.options.clock.now());
    this.cancelTimer = this.options.clock.setTimer(r, () => {
      ((this.cancelTimer = null),
        (this.armed = null),
        n ||
          ((this.deadline = null),
          this.applyStep(te.step(this.position, "retry-deadline")),
          this.options.onTimer?.()),
        this.wake());
    });
  }
  clearTimer() {
    (this.cancelTimer?.(), (this.cancelTimer = null), (this.armed = null));
  }
}
const Cs = 30,
  Hs = 1440 * 60 * 1e3;
function Lt(t) {
  return {
    conflictId: t.conflict_id,
    path: t.path,
    resolvedAt: t.resolved_at,
    outcome: t.outcome,
    remoteVersion: t.remote_version,
    localContentHash: t.local_content_hash,
    remoteContentHash: t.remote_content_hash,
    seenAt: t.seen_at,
  };
}
class As {
  constructor(e, n) {
    ((this.db = e), (this.now = n));
  }
  record(e) {
    const n = `${e.path}@${e.remoteVersion}:${e.outcome}`;
    this.db
      .prepare(
        `INSERT INTO conflicts (
           conflict_id, path, resolved_at, outcome, remote_version,
           local_content_hash, remote_content_hash, seen_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, NULL)
         ON CONFLICT (conflict_id) DO NOTHING`,
      )
      .run(
        n,
        e.path,
        e.resolvedAt,
        e.outcome,
        e.remoteVersion,
        e.localContentHash,
        e.remoteContentHash,
      );
    const s = this.db
      .prepare("SELECT * FROM conflicts WHERE conflict_id = ?")
      .get(n);
    if (s === void 0)
      throw new Error("a conflict vanished inside its own insert");
    return Lt(s);
  }
  recent(e = 100) {
    return this.db
      .prepare(
        "SELECT * FROM conflicts ORDER BY resolved_at DESC, conflict_id LIMIT ?",
      )
      .all(e)
      .map(Lt);
  }
  unseenCount() {
    return this.db
      .prepare("SELECT COUNT(*) AS n FROM conflicts WHERE seen_at IS NULL")
      .get().n;
  }
  markSeen(e) {
    if (e.length === 0) return 0;
    const n = e.map(() => "?").join(",");
    return this.db
      .prepare(
        `UPDATE conflicts SET seen_at = ?
         WHERE seen_at IS NULL AND conflict_id IN (${n})`,
      )
      .run(this.now(), ...e).changes;
  }
  prune(e = Cs) {
    const n = this.now() - e * Hs;
    return this.db.prepare("DELETE FROM conflicts WHERE resolved_at < ?").run(n)
      .changes;
  }
}
function Ot(t, e, n) {
  return {
    draftId: t.draftId,
    path: t.path,
    operation: t.operation,
    baseVersion: t.baseVersion,
    baseHash: t.baseHash,
    draftHash: t.draftHash,
    state: "publishing",
    operationId: e,
    updatedAt: n,
  };
}
function kn(t, e, n) {
  return { ...t, state: "published", publishedVersion: e, updatedAt: n };
}
function Ls(t, e) {
  return {
    draftId: t.draftId,
    path: t.path,
    operation: t.operation,
    baseVersion: t.baseVersion,
    baseHash: t.baseHash,
    draftHash: t.draftHash,
    state: "discarded",
    updatedAt: e,
  };
}
function Dt(t, e) {
  return {
    draftId: t.draftId,
    path: t.path,
    operation: t.operation,
    baseVersion: t.baseVersion,
    baseHash: t.baseHash,
    draftHash: t.draftHash,
    state: "discarded",
    updatedAt: e,
  };
}
function bn(t) {
  switch (t.state) {
    case "active":
    case "ready-to-publish":
    case "conflicted":
    case "needs-review":
      return !0;
    case "publishing":
    case "published":
    case "discarded":
      return !1;
  }
}
function Os(t, e, n) {
  return e.has(t.draftId) ? !1 : t.state !== "publishing" || !n;
}
function Ds(t, e) {
  return e.kind === "publish"
    ? t.state === "ready-to-publish" || t.state === "conflicted"
      ? { kind: "publish", from: t }
      : t.state === "published"
        ? { kind: "already", state: t.state }
        : t.state === "needs-review"
          ? {
              kind: "refused",
              failure: d.permission(
                "read-only-policy",
                "path",
                "this draft needs a person to look at it before it can be published",
                t.path,
              ),
            }
          : {
              kind: "refused",
              failure: d.permission(
                "read-only-policy",
                "path",
                `a draft in ${t.state} cannot be published`,
                t.path,
              ),
            }
    : t.state === "discarded"
      ? { kind: "already", state: t.state }
      : t.state === "active" ||
          t.state === "ready-to-publish" ||
          t.state === "publishing" ||
          t.state === "conflicted"
        ? { kind: "retract", from: t }
        : {
            kind: "refused",
            failure: d.permission(
              "read-only-policy",
              "path",
              `a draft in ${t.state} cannot be retracted`,
              t.path,
            ),
          };
}
function Xe(t) {
  const e = Fs(t.detail_json),
    n = {
      draftId: t.draft_id,
      path: t.path,
      operation: t.operation,
      baseVersion: t.base_version,
      baseHash: t.base_hash,
      draftHash: t.draft_hash,
      updatedAt: t.updated_at,
    };
  switch (t.state) {
    case "publishing":
      return { ...n, state: "publishing", operationId: e.operationId ?? "" };
    case "published":
      return {
        ...n,
        state: "published",
        publishedVersion: e.publishedVersion ?? 0,
      };
    case "conflicted":
      return {
        ...n,
        state: "conflicted",
        remoteVersionSeen: e.remoteVersionSeen ?? 0,
        remoteHashSeen: e.remoteHashSeen ?? null,
        remoteDeleted: e.remoteDeleted ?? !1,
      };
    case "needs-review":
      return {
        ...n,
        state: "needs-review",
        reason: e.reason ?? "recovered-after-crash",
      };
    default:
      return { ...n, state: t.state };
  }
}
function Ms(t) {
  switch (t.state) {
    case "publishing":
      return { operationId: t.operationId };
    case "published":
      return { publishedVersion: t.publishedVersion };
    case "conflicted":
      return {
        remoteVersionSeen: t.remoteVersionSeen,
        remoteHashSeen: t.remoteHashSeen,
        remoteDeleted: t.remoteDeleted,
      };
    case "needs-review":
      return { reason: t.reason };
    default:
      return {};
  }
}
function Fs(t) {
  try {
    const e = JSON.parse(t);
    return e !== null && typeof e == "object" ? e : {};
  } catch {
    return {};
  }
}
class Ps {
  constructor(e) {
    this.db = e;
  }
  save(e) {
    this.db
      .prepare(
        `INSERT INTO drafts (
           draft_id, path, operation, state, base_version, base_hash, draft_hash,
           detail_json, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT (draft_id) DO UPDATE SET
           state = excluded.state,
           draft_hash = excluded.draft_hash,
           detail_json = excluded.detail_json,
           updated_at = excluded.updated_at`,
      )
      .run(
        e.draftId,
        e.path,
        e.operation,
        e.state,
        e.baseVersion,
        e.baseHash,
        e.draftHash,
        JSON.stringify(Ms(e)),
        e.updatedAt,
      );
  }
  get(e) {
    const n = this.db.prepare("SELECT * FROM drafts WHERE draft_id = ?").get(e);
    return n === void 0 ? null : Xe(n);
  }
  openForPath(e) {
    const n = this.db
      .prepare(
        `SELECT * FROM drafts
         WHERE path = ? AND state NOT IN ('published','discarded')`,
      )
      .get(e);
    return n === void 0 ? null : Xe(n);
  }
  open() {
    return this.db
      .prepare(
        `SELECT * FROM drafts
         WHERE state NOT IN ('published','discarded')
         ORDER BY updated_at`,
      )
      .all()
      .map(Xe);
  }
  pruneSettled() {
    return this.db
      .prepare("DELETE FROM drafts WHERE state IN ('published','discarded')")
      .run().changes;
  }
}
async function yn(t) {
  try {
    const e = await S.stat(t, { bigint: !0 });
    return e.isDirectory()
      ? { device: e.dev.toString(), inode: e.ino.toString() }
      : d.localEnvironment(
          "root-replaced",
          "the synced root is not a directory",
        );
  } catch (e) {
    return (e instanceof Error && "code" in e ? e.code : null) === "ENOENT"
      ? d.localEnvironment("root-missing", "the synced root is not there")
      : d.localEnvironment(
          "root-unreadable",
          "the synced root could not be read",
        );
  }
}
function Us(t) {
  return "class" in t;
}
async function Mt(t, e) {
  const n = await yn(t);
  return Us(n)
    ? { kind: "unavailable", failure: n }
    : e === null
      ? { kind: "unbound", observed: n }
      : n.device === e.device && n.inode === e.inode
        ? e.resolvedRoot === t
          ? { kind: "same", observed: n }
          : { kind: "moved", observed: n, fromPath: e.resolvedRoot, toPath: t }
        : {
            kind: "replaced",
            observed: n,
            failure: d.localEnvironment(
              "root-replaced",
              "the directory at the synced root is not the one this workspace was bound to",
            ),
          };
}
function Ft(t) {
  return t.kind === "same" || t.kind === "moved";
}
class Bs {
  byPath = new Map();
  currentGeneration = 0;
  size() {
    let e = 0;
    for (const n of this.byPath.values()) e += n.length;
    return e;
  }
  advanceGeneration() {
    return (
      (this.currentGeneration += 1),
      this.byPath.clear(),
      this.currentGeneration
    );
  }
  generation() {
    return this.currentGeneration;
  }
  expect(e, n, s) {
    const r = {
        operationId: e,
        path: n,
        expected: s,
        generation: this.currentGeneration,
      },
      i = this.byPath.get(n);
    return (i === void 0 ? this.byPath.set(n, [r]) : i.push(r), r);
  }
  cancel(e, n) {
    const s = this.byPath.get(n);
    if (s === void 0) return;
    const r = s.filter((i) => i.operationId !== e);
    r.length === 0 ? this.byPath.delete(n) : this.byPath.set(n, r);
  }
  judge(e) {
    const n = this.byPath.get(e.path);
    if (n === void 0) return { kind: "deliver" };
    const s = n.findIndex((i) =>
      i.generation !== this.currentGeneration
        ? !1
        : i.expected.kind === "delete"
          ? e.kind === "delete"
          : e.kind === "delete"
            ? !1
            : e.contentHash !== null &&
              e.contentHash === i.expected.contentHash,
    );
    if (s === -1) return { kind: "deliver" };
    const [r] = n.splice(s, 1);
    return (
      n.length === 0 && this.byPath.delete(e.path),
      { kind: "echo", operationId: r.operationId }
    );
  }
}
const ce = "0".repeat(64);
function _n(t) {
  return Z.createHash("sha256").update(t).digest("hex");
}
function Ye(t, e) {
  const n = Buffer.from(t, "hex"),
    s = Buffer.from(e, "hex"),
    r = Buffer.allocUnsafe(n.length);
  for (let i = 0; i < n.length; i++) r[i] = n[i] ^ s[i];
  return r.toString("hex");
}
function Tn(t, e) {
  return _n(
    t +
      `
` +
      e,
  );
}
function ie(t) {
  const e = t.lastIndexOf("/");
  return e === -1 ? "" : t.substring(0, e);
}
function Ke(t) {
  const e = t.lastIndexOf("/");
  return e === -1 ? t : t.substring(e + 1);
}
function pe(t, e) {
  return _n(t + e);
}
class Oe {
  fileHashes = new Map();
  dirHashes = new Map();
  childCounts = new Map();
  getRootHash() {
    return this.dirHashes.get("") ?? ce;
  }
  getDirHashes() {
    return new Map(this.dirHashes);
  }
  getDirHashRecord() {
    const e = {};
    for (const [n, s] of this.dirHashes) e[n] = s;
    return e;
  }
  get fileCount() {
    return this.fileHashes.size;
  }
  get dirCount() {
    return this.dirHashes.size;
  }
  hasFile(e) {
    return this.fileHashes.has(e);
  }
  getFileHash(e) {
    return this.fileHashes.get(e);
  }
  setFile(e, n) {
    const s = Tn(e, n),
      r = this.fileHashes.get(e);
    if (r === s) return;
    this.fileHashes.set(e, s);
    const i = Ke(e),
      a = ie(e);
    let o;
    (r
      ? (o = Ye(pe(i, r), pe(i, s)))
      : ((o = pe(i, s)), this.ensureAncestorDirs(a), this.noteChildAdded(a)),
      this.applyDelta(a, o));
  }
  removeFile(e) {
    const n = this.fileHashes.get(e);
    if (!n) return;
    this.fileHashes.delete(e);
    const s = Ke(e),
      r = ie(e);
    this.noteChildRemoved(r);
    const i = pe(s, n);
    (this.applyDelta(r, i), this.cleanupEmptyDirs(r));
  }
  clear() {
    (this.fileHashes.clear(), this.dirHashes.clear(), this.childCounts.clear());
  }
  applyDelta(e, n) {
    let s = e,
      r = n;
    for (;;) {
      const i = this.dirHashes.get(s) ?? ce,
        a = Ye(i, r);
      if (
        (a === ce ? this.dirHashes.delete(s) : this.dirHashes.set(s, a),
        s === "")
      )
        break;
      const o = Ke(s),
        l = ie(s);
      ((r = Ye(pe(o, i), pe(o, a))), (s = l));
    }
  }
  ensureAncestorDirs(e) {
    let n = e;
    for (; n !== "" && !this.dirHashes.has(n); )
      (this.dirHashes.set(n, ce), (n = ie(n)));
    this.dirHashes.has("") || this.dirHashes.set("", ce);
  }
  noteChildAdded(e) {
    let n = e;
    for (;;) {
      const s = this.childCounts.get(n) ?? 0;
      if ((this.childCounts.set(n, s + 1), s > 0 || n === "")) return;
      n = ie(n);
    }
  }
  noteChildRemoved(e) {
    let n = e;
    for (;;) {
      const s = this.childCounts.get(n) ?? 0;
      if (s > 1) {
        this.childCounts.set(n, s - 1);
        return;
      }
      if ((this.childCounts.delete(n), n === "")) return;
      n = ie(n);
    }
  }
  cleanupEmptyDirs(e) {
    let n = e;
    for (; n !== ""; ) {
      const s = this.dirHashes.get(n);
      if ((s && s !== ce) || this.hasChildrenInDir(n)) break;
      (this.dirHashes.delete(n), (n = ie(n)));
    }
    this.dirHashes.has("") &&
      this.dirHashes.get("") === ce &&
      (this.hasChildrenInDir("") || this.dirHashes.delete(""));
  }
  hasChildrenInDir(e) {
    return (this.childCounts.get(e) ?? 0) > 0;
  }
  static fromFiles(e) {
    const n = new Oe();
    for (const s of e) n.setFile(s.path, s.contentHash);
    return n;
  }
}
const qs = [
  {
    version: 1,
    name: "remote-versions-checkpoint-and-identity",
    up: `
      CREATE TABLE remote_versions (
        path         TEXT PRIMARY KEY,
        version      INTEGER NOT NULL,
        content_hash TEXT NOT NULL,
        size_bytes   INTEGER NOT NULL DEFAULT 0,
        synced_at    INTEGER NOT NULL,
        -- Local mtime observed when this version landed. Lets a walk skip
        -- re-hashing an unchanged file; never used to decide conflict ownership.
        mtime_ms     REAL
      );

      -- Sequence and root live in one row so they are written together. Two
      -- rows, or two tables, would allow a checkpoint whose sequence advanced
      -- and whose root did not.
      CREATE TABLE checkpoint (
        id           INTEGER PRIMARY KEY CHECK (id = 1),
        sequence     INTEGER NOT NULL,
        root_hash    TEXT    NOT NULL,
        committed_at INTEGER NOT NULL
      );

      -- Platform file identity of the synced root, bound durably. A path is not
      -- identity: the root moves in §7's relocation and must stay the same root
      -- across that move without triggering a rescan.
      CREATE TABLE root_identity (
        id            INTEGER PRIMARY KEY CHECK (id = 1),
        device        TEXT    NOT NULL,
        inode         TEXT    NOT NULL,
        resolved_root TEXT    NOT NULL,
        bound_at      INTEGER NOT NULL
      );
    `,
    verify: (t) => ue(t, "remote_versions", ["path"]),
    expect: "0:0",
  },
  {
    version: 2,
    name: "staged-scan-pass",
    up: `
      -- A local walk too large to hold at once runs in stages. What the
      -- finished stages saw is kept here rather than in memory, because the
      -- point of staging is that the whole inventory never has to fit, and
      -- because a restart then resumes the pass instead of walking a
      -- six-figure tree from the top again.
      --
      -- It belongs in this store and not the outbox: like everything else
      -- here it is derivable, and losing it costs one more walk.
      CREATE TABLE scan_pass (
        id           INTEGER PRIMARY KEY CHECK (id = 1),
        started_at   INTEGER NOT NULL,
        -- The last directory a finished stage read files from.
        resume_after TEXT    NOT NULL,
        stages       INTEGER NOT NULL
      );

      CREATE TABLE scan_seen (
        path      TEXT PRIMARY KEY,
        -- 1 for a directory the walk did not enter, such as a child
        -- workspace: nothing under it may be read as missing.
        directory INTEGER NOT NULL DEFAULT 0
      ) WITHOUT ROWID;
    `,
    verify: (t) => ue(t, "scan_seen", ["path"]),
    expect: "0:0",
  },
  {
    version: 3,
    name: "scan-pass-position-in-directory",
    up: `
      -- The last of that directory's own files the stage read, or null when
      -- it read them all. A stage can stop inside a directory because one
      -- directory can hold more files than a whole stage, and a cursor that
      -- could only sit between directories never got through one that did.
      --
      -- A pass recorded before this column existed reads as null, which is
      -- what its cursor meant: that directory's files were all read.
      ALTER TABLE scan_pass ADD COLUMN resume_after_name TEXT;
    `,
    verify: (t) =>
      t
        .prepare("SELECT sql FROM sqlite_master WHERE name = 'scan_pass'")
        .get()
        .sql.includes("resume_after_name")
        ? "added"
        : "missing",
    expect: "added",
  },
  {
    version: 4,
    name: "remote-file-metadata",
    up: `
      -- What the server holds as each file's metadata, for files that have
      -- any. Its own table rather than a column on remote_versions: metadata
      -- is the server's, and a version row the client withdraws for local
      -- reasons must not take the server's metadata with it.
      CREATE TABLE remote_metadata (
        path     TEXT PRIMARY KEY,
        -- JSON object text, never '{}'.
        metadata TEXT NOT NULL
      ) WITHOUT ROWID;

      -- A listing in progress. Swapped into remote_metadata in one
      -- transaction once complete, so a listing cut short never leaves
      -- metadata half replaced.
      CREATE TABLE remote_metadata_listing (
        path     TEXT PRIMARY KEY,
        metadata TEXT NOT NULL
      ) WITHOUT ROWID;

      -- Whether the metadata still has to be read whole. Set by a repair,
      -- whose content comparison cannot see metadata, and set here: a cache
      -- from before this table holds none of what the server has.
      CREATE TABLE metadata_state (
        id           INTEGER PRIMARY KEY CHECK (id = 1),
        listing_owed INTEGER NOT NULL
      );
      INSERT INTO metadata_state (id, listing_owed) VALUES (1, 1);
    `,
    verify: (t) =>
      String(
        t.prepare("SELECT listing_owed FROM metadata_state WHERE id = 1").get()
          ?.listing_owed ?? "missing",
      ),
    expect: "1",
  },
  {
    version: 5,
    name: "remote-file-metadata-keys",
    up: `
      -- Which top-level keys each file's metadata holds, so the files with
      -- one key are found without reading every file's metadata. Derived
      -- from remote_metadata and written in the same transaction.
      CREATE TABLE remote_metadata_keys (
        key         TEXT NOT NULL,
        path        TEXT NOT NULL,
        -- The file's modified time as a listing shows it: the local mtime
        -- last observed, else when its version was recorded. Null while the
        -- cache holds no version of the file. Copied from remote_versions so
        -- the newest files with a key are a range of an index, not a sort of
        -- every file that has it.
        modified_at REAL,
        PRIMARY KEY (key, path)
      ) WITHOUT ROWID;

      -- A file's keys are replaced together when its metadata changes.
      CREATE INDEX remote_metadata_keys_by_path ON remote_metadata_keys (path);
      CREATE INDEX remote_metadata_keys_by_modified
        ON remote_metadata_keys (key, modified_at, path);

      -- The copied time follows the version row through every write to it.
      -- Triggers rather than each writer: a copy that drifts sorts wrong with
      -- nothing to show for it.
      CREATE TRIGGER remote_metadata_keys_version_inserted
        AFTER INSERT ON remote_versions
      BEGIN
        UPDATE remote_metadata_keys SET modified_at = COALESCE(NEW.mtime_ms, NEW.synced_at)
          WHERE path = NEW.path;
      END;
      CREATE TRIGGER remote_metadata_keys_version_updated
        AFTER UPDATE OF mtime_ms, synced_at ON remote_versions
      BEGIN
        UPDATE remote_metadata_keys SET modified_at = COALESCE(NEW.mtime_ms, NEW.synced_at)
          WHERE path = NEW.path;
      END;
      CREATE TRIGGER remote_metadata_keys_version_deleted
        AFTER DELETE ON remote_versions
      BEGIN
        UPDATE remote_metadata_keys SET modified_at = NULL WHERE path = OLD.path;
      END;

      INSERT INTO remote_metadata_keys (key, path, modified_at)
        SELECT j.key, m.path, COALESCE(v.mtime_ms, v.synced_at)
        FROM remote_metadata m
        JOIN json_each(m.metadata) j
        LEFT JOIN remote_versions v ON v.path = m.path;
    `,
    verify: (t) =>
      String(
        t
          .prepare(
            `SELECT (SELECT COUNT(*) FROM remote_metadata_keys) =
                      (SELECT COUNT(*) FROM remote_metadata m, json_each(m.metadata)) AS indexed`,
          )
          .get().indexed,
      ),
    expect: "1",
  },
  {
    version: 6,
    name: "remote-versions-folded-path",
    up: `
      -- Each path as a volume that ignores case would file it, so the tracked
      -- paths that may share one file on this disk are found by an index
      -- rather than a scan of every row. Written by application code, never by
      -- a function SQL calls: an index over a registered function fails to open
      -- on any connection that did not register it.
      ALTER TABLE remote_versions ADD COLUMN folded_path TEXT;
      CREATE INDEX remote_versions_by_folded_path ON remote_versions (folded_path);
    `,
    backfill: (t) => {
      const e = t.prepare("SELECT path FROM remote_versions").all(),
        n = t.prepare(
          "UPDATE remote_versions SET folded_path = ? WHERE path = ?",
        );
      for (const s of e) n.run(ke(s.path), s.path);
    },
    verify: (t) =>
      String(
        t
          .prepare(
            "SELECT COUNT(*) AS n FROM remote_versions WHERE folded_path IS NULL",
          )
          .get().n,
      ),
    expect: "0",
  },
];
function ke(t) {
  return t.toUpperCase().toLowerCase().normalize("NFC");
}
function $s(t, e) {
  switch (t) {
    case "path":
      return [e.path];
    case "modified":
      return [e.modified, e.path];
    case "name":
      return [`name_key(${e.path})`, e.path];
    case "extension":
      return [`file_extension(${e.path})`, `name_key(${e.path})`, e.path];
  }
}
function Ws(t, e) {
  switch (t) {
    case "path":
      return [e.path];
    case "modified":
      return [e.modifiedAtMs, e.path];
    case "name":
      return [d.fileNameKey(e.path), e.path];
    case "extension":
      return [d.fileExtension(e.path), d.fileNameKey(e.path), e.path];
  }
}
function Pt(t, e, n, s) {
  const { path: r, modified: i } = t,
    a = `(${r} = f.value OR substr(${r}, 1, length(f.value) + 1) = f.value || '/')`,
    o = [],
    l = [];
  if (
    (e.within !== void 0 &&
      (o.push(`EXISTS (SELECT 1 FROM json_each(?) f WHERE ${a})`),
      l.push(JSON.stringify(e.within))),
    e.outside !== void 0 &&
      (o.push(`NOT EXISTS (SELECT 1 FROM json_each(?) f WHERE ${a})`),
      l.push(JSON.stringify(e.outside))),
    e.names !== void 0 &&
      (o.push(`name_key(${r}) IN (SELECT value FROM json_each(?))`),
      l.push(JSON.stringify(e.names.map((m) => m.toLowerCase())))),
    e.extensions !== void 0)
  ) {
    const [m, R] =
      "only" in e.extensions
        ? ["IN", e.extensions.only]
        : ["NOT IN", e.extensions.except];
    (o.push(`file_extension(${r}) ${m} (SELECT value FROM json_each(?))`),
      l.push(JSON.stringify(R)));
  }
  (e.modifiedFrom !== void 0 && (o.push(`${i} >= ?`), l.push(e.modifiedFrom)),
    e.modifiedBefore !== void 0 &&
      (o.push(`${i} < ?`), l.push(e.modifiedBefore)),
    e.matching !== void 0 &&
      (o.push(
        `(instr(fold_case(${r}), ?) > 0 OR ${r} IN (SELECT value FROM json_each(?)))`,
      ),
      l.push(e.matching.text.toLowerCase(), JSON.stringify(e.matching.paths))));
  const c = $s(n.by, t);
  if (s !== null) {
    const m = n.direction === "asc" ? ">" : "<";
    (o.push(`(${c.join(", ")}) ${m} (${c.map(() => "?").join(", ")})`),
      l.push(...Ws(n.by, s)));
  }
  const p = n.direction === "asc" ? "ASC" : "DESC";
  return {
    conditions: o,
    params: l,
    orderBy: c.map((m) => `${m} ${p}`).join(", "),
  };
}
function xe(t) {
  const e = JSON.parse(t);
  if (e === null || typeof e != "object" || Array.isArray(e))
    throw new D(
      d.invariant(
        "impossible-journal-state",
        "a stored file metadata value is not an object",
      ),
    );
  return e;
}
function Ut(t) {
  return t === null || Object.keys(t).length === 0;
}
function zs(t, e) {
  return !t.hasContent && t.contentHash !== ""
    ? { kind: "stale" }
    : e === null
      ? t.version === 0
        ? { kind: "recreate" }
        : { kind: "apply" }
      : t.version > e.version
        ? { kind: "apply" }
        : t.version < e.version
          ? { kind: "stale" }
          : t.contentHash === e.contentHash
            ? { kind: "idempotent" }
            : { kind: "diverged", cachedHash: e.contentHash };
}
function Sn(t, e, n, s) {
  return `version-diverged:${t}:${e}:${n}:${s}`;
}
function Qe(t) {
  return {
    path: t.path,
    version: t.version,
    contentHash: t.content_hash,
    sizeBytes: t.size_bytes,
    syncedAt: t.synced_at,
    mtimeMs: t.mtime_ms,
  };
}
class js {
  constructor(e, n) {
    ((this.db = e),
      (this.now = n),
      e.function("name_key", { deterministic: !0 }, (s) => d.fileNameKey(s)),
      e.function("file_extension", { deterministic: !0 }, (s) =>
        d.fileExtension(s),
      ),
      e.function("fold_case", { deterministic: !0 }, (s) => s.toLowerCase()));
  }
  statements = new Map();
  statement(e) {
    let n = this.statements.get(e);
    return (
      n === void 0 && ((n = this.db.prepare(e)), this.statements.set(e, n)),
      n
    );
  }
  get(e) {
    const n = this.statement(
      "SELECT * FROM remote_versions WHERE path = ?",
    ).get(e);
    return n === void 0 ? null : Qe(n);
  }
  page(e, n) {
    return (
      e === null
        ? this.statement(
            "SELECT * FROM remote_versions ORDER BY path LIMIT ?",
          ).all(n)
        : this.statement(
            "SELECT * FROM remote_versions WHERE path > ? ORDER BY path LIMIT ?",
          ).all(e, n)
    ).map(Qe);
  }
  pageUnder(e, n, s) {
    const r = `${e}/`;
    return this.statement(
      `SELECT * FROM remote_versions
         WHERE path > ? AND path < ?
         ORDER BY path LIMIT ?`,
    )
      .all(n ?? r, `${r}￿`, s)
      .filter((a) => a.path.startsWith(r))
      .map(Qe);
  }
  count() {
    return this.statement("SELECT COUNT(*) AS n FROM remote_versions").get().n;
  }
  put(e) {
    const n = this.get(e.path);
    if (n !== null && e.version < n.version)
      throw new D(
        d.invariant(
          "impossible-journal-state",
          "a version older than the cached one reached the cache",
        ),
      );
    if (
      n !== null &&
      e.version === n.version &&
      e.contentHash !== n.contentHash
    )
      throw new D(
        d.integrity(
          "version-diverged",
          Sn(e.path, e.version, n.contentHash, e.contentHash),
          "same version, different hash reached the cache",
        ),
      );
    this.statement(
      `INSERT INTO remote_versions
           (path, version, content_hash, size_bytes, synced_at, mtime_ms, folded_path)
         VALUES (?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT (path) DO UPDATE SET
           version = excluded.version,
           content_hash = excluded.content_hash,
           size_bytes = excluded.size_bytes,
           synced_at = excluded.synced_at,
           mtime_ms = excluded.mtime_ms,
           folded_path = excluded.folded_path`,
    ).run(
      e.path,
      e.version,
      e.contentHash,
      e.sizeBytes,
      this.now(),
      e.mtimeMs,
      ke(e.path),
    );
  }
  otherSpellings(e) {
    return this.statement(
      `SELECT path FROM remote_versions
         WHERE folded_path = ? AND path <> ? AND content_hash <> ''
         ORDER BY path`,
    )
      .all(ke(e), e)
      .map((s) => s.path);
  }
  observeFile(e, n, s) {
    this.statement(
      "UPDATE remote_versions SET mtime_ms = ?, size_bytes = ? WHERE path = ?",
    ).run(n, s, e);
  }
  remove(e) {
    this.statement("DELETE FROM remote_versions WHERE path = ?").run(e);
  }
  checkpoint() {
    const e = this.statement("SELECT * FROM checkpoint WHERE id = 1").get();
    return e === void 0
      ? null
      : {
          sequence: e.sequence,
          rootHash: e.root_hash,
          committedAt: e.committed_at,
        };
  }
  commitCheckpoint(e, n) {
    const s = this.checkpoint();
    if (s !== null && e < s.sequence)
      throw new D(
        d.invariant(
          "impossible-journal-state",
          "a checkpoint tried to move backwards",
        ),
      );
    const r = this.now();
    return (
      this.statement(
        `INSERT INTO checkpoint (id, sequence, root_hash, committed_at)
         VALUES (1, ?, ?, ?)
         ON CONFLICT (id) DO UPDATE SET
           sequence = excluded.sequence,
           root_hash = excluded.root_hash,
           committed_at = excluded.committed_at`,
      ).run(e, n, r),
      { sequence: e, rootHash: n, committedAt: r }
    );
  }
  rootIdentity() {
    const e = this.statement("SELECT * FROM root_identity WHERE id = 1").get();
    return e === void 0
      ? null
      : {
          device: e.device,
          inode: e.inode,
          resolvedRoot: e.resolved_root,
          boundAt: e.bound_at,
        };
  }
  bindRootIdentity(e, n, s) {
    const r = this.now();
    return (
      this.statement(
        `INSERT INTO root_identity (id, device, inode, resolved_root, bound_at)
         VALUES (1, ?, ?, ?, ?)
         ON CONFLICT (id) DO UPDATE SET
           device = excluded.device,
           inode = excluded.inode,
           resolved_root = excluded.resolved_root,
           bound_at = excluded.bound_at`,
      ).run(e, n, s, r),
      { device: e, inode: n, resolvedRoot: s, boundAt: r }
    );
  }
  rebindRootPath(e) {
    if (
      this.statement(
        "UPDATE root_identity SET resolved_root = ? WHERE id = 1",
      ).run(e).changes !== 1
    )
      throw new D(
        d.invariant(
          "impossible-journal-state",
          "rebinding a root that was never bound",
        ),
      );
  }
  scanPass() {
    const e = this.statement(
      "SELECT started_at, resume_after, resume_after_name, stages FROM scan_pass WHERE id = 1",
    ).get();
    return e === void 0
      ? null
      : {
          startedAt: e.started_at,
          resumeAfter: {
            directory: e.resume_after,
            afterName: e.resume_after_name,
          },
          stages: e.stages,
        };
  }
  recordScanStage(e) {
    const n = this
      .statement(`INSERT INTO scan_seen (path, directory) VALUES (?, ?)
       ON CONFLICT (path) DO UPDATE SET directory = excluded.directory`);
    this.db.transaction(() => {
      for (const s of e.seen) n.run(s, 0);
      for (const s of e.skippedDirectories) n.run(s, 1);
      e.resumeAfter !== null &&
        this.statement(
          `INSERT INTO scan_pass (id, started_at, resume_after, resume_after_name, stages)
           VALUES (1, ?, ?, ?, 1)
           ON CONFLICT (id) DO UPDATE SET
             resume_after = excluded.resume_after,
             resume_after_name = excluded.resume_after_name,
             stages = scan_pass.stages + 1`,
        ).run(this.now(), e.resumeAfter.directory, e.resumeAfter.afterName);
    })();
  }
  scanSaw(e) {
    return (
      this.statement("SELECT 1 FROM scan_seen WHERE path = ?").get(e) !== void 0
    );
  }
  scanSkippedDirectories() {
    return this.statement("SELECT path FROM scan_seen WHERE directory = 1")
      .all()
      .map((n) => n.path);
  }
  clearScanPass() {
    this.db.transaction(() => {
      (this.statement("DELETE FROM scan_pass").run(),
        this.statement("DELETE FROM scan_seen").run());
    })();
  }
  metadata(e) {
    const n = this.statement(
      "SELECT metadata FROM remote_metadata WHERE path = ?",
    ).get(e);
    return n === void 0 ? null : xe(n.metadata);
  }
  metadataValues(e, n, s, r, i) {
    const a = Pt({ path: "k.path", modified: "k.modified_at" }, s, n, r);
    return this.statement(
      `SELECT k.path, k.modified_at, v.size_bytes, m.metadata FROM remote_metadata_keys k
         JOIN remote_metadata m ON m.path = k.path
         JOIN remote_versions v ON v.path = k.path
         WHERE ${["k.key = ?", "k.modified_at IS NOT NULL", ...a.conditions].join(" AND ")}
         ORDER BY ${a.orderBy}
         LIMIT ?`,
    )
      .all(e, ...a.params, i)
      .map((l) => ({
        path: l.path,
        value: xe(l.metadata)[e],
        modifiedAtMs: l.modified_at,
        sizeBytes: l.size_bytes,
      }));
  }
  findFiles(e, n, s, r) {
    const i = "coalesce(v.mtime_ms, v.synced_at)",
      a = Pt({ path: "v.path", modified: i }, e, n, s),
      o = a.conditions.length > 0 ? `WHERE ${a.conditions.join(" AND ")}` : "";
    return this.statement(
      `SELECT v.path, ${i} AS modified, v.size_bytes FROM remote_versions v
         ${o}
         ORDER BY ${a.orderBy}
         LIMIT ?`,
    )
      .all(...a.params, r)
      .map((c) => ({
        path: c.path,
        modifiedAtMs: c.modified,
        sizeBytes: c.size_bytes,
      }));
  }
  folderChildren(e, n) {
    const s =
      e === ""
        ? "SELECT path AS rest, size_bytes, coalesce(mtime_ms, synced_at) AS modified FROM remote_versions"
        : `SELECT substr(path, length(@low) + 1) AS rest, size_bytes,
             coalesce(mtime_ms, synced_at) AS modified
             FROM remote_versions WHERE path >= @low AND path < @high`;
    return this.statement(
      `WITH inside AS (${s}),
       split AS (
         SELECT
           CASE WHEN instr(rest, '/') = 0 THEN rest ELSE substr(rest, 1, instr(rest, '/') - 1) END
             AS name,
           CASE WHEN instr(rest, '/') = 0 THEN NULL ELSE substr(rest, instr(rest, '/') + 1) END
             AS below,
           rest LIKE '.%' OR instr(rest, '/.') > 0 AS hidden,
           size_bytes, modified
         FROM inside
       )
       SELECT
         name,
         below IS NOT NULL AS is_folder,
         SUM(size_bytes) AS size_bytes,
         MAX(CASE WHEN hidden AND below IS NOT NULL THEN NULL ELSE modified END) AS modified,
         COUNT(DISTINCT CASE WHEN NOT hidden AND instr(below, '/') > 0
           THEN substr(below, 1, instr(below, '/') - 1) END) AS folders,
         SUM(CASE WHEN NOT hidden AND below IS NOT NULL AND instr(below, '/') = 0 THEN 1 ELSE 0 END)
           AS files,
         json_group_array(CASE WHEN below IN (SELECT value FROM json_each(@markers))
           THEN below END) AS markers
       FROM split
       GROUP BY name, below IS NOT NULL`,
    )
      .all({
        ...(e === "" ? {} : { low: `${e}/`, high: `${e}0` }),
        markers: JSON.stringify(n),
      })
      .map((i) => {
        if (i.is_folder === 0)
          return {
            kind: "file",
            name: i.name,
            sizeBytes: i.size_bytes,
            modifiedAtMs: i.modified ?? 0,
          };
        const a = JSON.parse(i.markers);
        return {
          kind: "folder",
          name: i.name,
          modifiedAtMs: i.modified,
          folders: i.folders,
          files: i.files,
          markers: a.filter((o) => o !== null),
        };
      });
  }
  applyMetadata(e) {
    const n = this.statement(
        "SELECT metadata FROM remote_metadata WHERE path = ?",
      ),
      s = this
        .statement(`INSERT INTO remote_metadata (path, metadata) VALUES (?, ?)
       ON CONFLICT (path) DO UPDATE SET metadata = excluded.metadata`),
      r = this.statement("DELETE FROM remote_metadata WHERE path = ?"),
      i = this.statement("DELETE FROM remote_metadata_keys WHERE path = ?"),
      a = this
        .statement(`INSERT INTO remote_metadata_keys (key, path, modified_at)
       SELECT j.key, ?, (SELECT COALESCE(mtime_ms, synced_at) FROM remote_versions WHERE path = ?)
       FROM json_each(?) j`);
    return this.db.transaction(() => {
      const o = [];
      for (const [l, c] of e) {
        const p = n.get(l);
        if (Ut(c)) {
          if (p === void 0) continue;
          (r.run(l), i.run(l), o.push({ path: l, metadata: null }));
          continue;
        }
        const m = JSON.stringify(c);
        p?.metadata !== m &&
          (s.run(l, m),
          i.run(l),
          a.run(l, l, m),
          o.push({ path: l, metadata: c }));
      }
      return o;
    })();
  }
  metadataListingOwed() {
    return (
      this.statement(
        "SELECT listing_owed FROM metadata_state WHERE id = 1",
      ).get()?.listing_owed === 1
    );
  }
  oweMetadataListing() {
    this.statement(
      "UPDATE metadata_state SET listing_owed = 1 WHERE id = 1",
    ).run();
  }
  beginMetadataListing() {
    this.statement("DELETE FROM remote_metadata_listing").run();
  }
  stageMetadata(e) {
    const n = this
      .statement(`INSERT INTO remote_metadata_listing (path, metadata) VALUES (?, ?)
       ON CONFLICT (path) DO UPDATE SET metadata = excluded.metadata`);
    this.db.transaction(() => {
      for (const s of e)
        Ut(s.metadata) || n.run(s.path, JSON.stringify(s.metadata));
    })();
  }
  finishMetadataListing() {
    return this.db.transaction(() => {
      const e = this.statement(
          `SELECT path FROM remote_metadata
         WHERE path NOT IN (SELECT path FROM remote_metadata_listing)
         ORDER BY path`,
        ).all(),
        n = this.statement(
          `SELECT l.path, l.metadata FROM remote_metadata_listing l
         LEFT JOIN remote_metadata m ON m.path = l.path
         WHERE m.metadata IS NULL OR m.metadata <> l.metadata
         ORDER BY l.path`,
        ).all();
      return (
        this.statement("DELETE FROM remote_metadata").run(),
        this.statement(
          "INSERT INTO remote_metadata (path, metadata) SELECT path, metadata FROM remote_metadata_listing",
        ).run(),
        this.statement("DELETE FROM remote_metadata_keys").run(),
        this.statement(
          `INSERT INTO remote_metadata_keys (key, path, modified_at)
         SELECT j.key, m.path, COALESCE(v.mtime_ms, v.synced_at)
         FROM remote_metadata m
         JOIN json_each(m.metadata) j
         LEFT JOIN remote_versions v ON v.path = m.path`,
        ).run(),
        this.statement("DELETE FROM remote_metadata_listing").run(),
        this.statement(
          "UPDATE metadata_state SET listing_owed = 0 WHERE id = 1",
        ).run(),
        [
          ...e.map((s) => ({ path: s.path, metadata: null })),
          ...n.map((s) => ({ path: s.path, metadata: xe(s.metadata) })),
        ]
      );
    })();
  }
  transaction(e) {
    return this.db.transaction(e)();
  }
}
const Se = 2e3;
class Vs {
  constructor(e) {
    this.cache = e;
  }
  tree = new Oe();
  rootHash() {
    return this.tree.getRootHash();
  }
  fileCount() {
    return this.tree.fileCount;
  }
  directoryHashes() {
    return this.tree.getDirHashes();
  }
  hasFile(e) {
    return this.tree.hasFile(e);
  }
  version(e) {
    return this.cache.get(e);
  }
  async hydrate(e, n) {
    this.tree.clear();
    let s = null,
      r = 0,
      i = 0,
      a = 0;
    const o = [];
    for (;;) {
      const l = performance.now(),
        c = this.cache.page(s, Se);
      if (c.length === 0) break;
      for (const p of c) {
        if ($.parseRemoteSyncPath(p.path) === null) {
          o.push(p.path);
          continue;
        }
        p.contentHash !== "" && this.tree.setFile(p.path, p.contentHash);
      }
      if (
        ((r += c.length),
        (i += 1),
        (s = c[c.length - 1].path),
        (a = Math.max(a, performance.now() - l)),
        n?.({ filesLoaded: r, pages: i }),
        c.length < Se)
      )
        break;
      await e();
    }
    return (
      o.length > 0 &&
        this.cache.transaction(() => {
          for (const l of o) this.cache.remove(l);
        }),
      {
        filesLoaded: r,
        pages: i,
        rootHash: this.tree.getRootHash(),
        longestPageMs: a,
      }
    );
  }
  apply(e) {
    return this.cache.transaction(() => {
      const n = this.cache.get(e.path),
        s = zs(
          {
            path: e.path,
            version: e.version,
            contentHash: e.kind === "upsert" ? e.contentHash : "",
            hasContent: e.kind === "upsert",
          },
          n,
        );
      switch (s.kind) {
        case "stale":
          return { kind: "stale" };
        case "idempotent":
          return { kind: "idempotent" };
        case "diverged":
          throw new D(
            d.integrity(
              "version-diverged",
              Sn(
                e.path,
                e.version,
                s.cachedHash,
                e.kind === "upsert" ? e.contentHash : "",
              ),
              "the server reports different content at a version the cache already holds",
              e.path,
            ),
          );
      }
      return (
        e.kind === "delete"
          ? (this.cache.remove(e.path), this.tree.removeFile(e.path))
          : (this.cache.put({
              path: e.path,
              version: e.version,
              contentHash: e.contentHash,
              sizeBytes: e.sizeBytes,
              mtimeMs: e.mtimeMs,
            }),
            this.tree.setFile(e.path, e.contentHash)),
        { kind: "applied" }
      );
    });
  }
  prune(e) {
    if (e.length > d.ENGINE_BOUNDS.maxPlanningRecords)
      throw new D(
        d.integrity(
          "impossible-root",
          `prune:oversized:${e.length}`,
          "a prune batch exceeded the planning bound",
        ),
      );
    return this.cache.transaction(() => {
      let n = 0;
      for (const s of e)
        (!this.tree.hasFile(s) && this.cache.get(s) === null) ||
          (this.cache.remove(s), this.tree.removeFile(s), (n += 1));
      return n;
    });
  }
  forget(e) {
    return this.cache.transaction(() =>
      !this.tree.hasFile(e) && this.cache.get(e) === null
        ? !1
        : (this.cache.remove(e), this.tree.removeFile(e), !0),
    );
  }
  recomputeRootFromCache() {
    const e = [];
    let n = null;
    for (;;) {
      const s = this.cache.page(n, Se);
      if (s.length === 0) break;
      for (const r of s)
        r.contentHash !== "" &&
          e.push({ path: r.path, contentHash: r.contentHash });
      if (((n = s[s.length - 1].path), s.length < Se)) break;
    }
    return Oe.fromFiles(e).getRootHash();
  }
}
function Bt(t) {
  return Math.min(
    d.ENGINE_BOUNDS.publishHoldMinMs * 2 ** t,
    d.ENGINE_BOUNDS.publishHoldMaxMs,
  );
}
class Gs {
  paths = new Map();
  lastSweepAt = null;
  size() {
    return this.paths.size;
  }
  admit(e, n) {
    this.sweep(n);
    const s = this.paths.get(e);
    if (s === void 0)
      return (
        this.paths.set(e, {
          level: 0,
          lastWriteAt: n,
          lastPublishedAt: null,
          hot: !1,
        }),
        null
      );
    const r = Bt(s.level),
      i = n - s.lastWriteAt < r;
    if (((s.lastWriteAt = n), !i || s.lastPublishedAt === null)) return null;
    s.hot = !0;
    const a = s.lastPublishedAt + r;
    return a > n ? a : null;
  }
  published(e, n) {
    const s = this.paths.get(e);
    s !== void 0 &&
      (s.hot
        ? Bt(s.level) < d.ENGINE_BOUNDS.publishHoldMaxMs && (s.level += 1)
        : (s.level = 0),
      (s.hot = !1),
      (s.lastPublishedAt = n));
  }
  sweep(e) {
    if (
      !(
        this.lastSweepAt !== null &&
        e - this.lastSweepAt < d.ENGINE_BOUNDS.publishHoldMaxMs
      )
    ) {
      this.lastSweepAt = e;
      for (const [n, s] of this.paths)
        e - s.lastWriteAt >= d.ENGINE_BOUNDS.publishHoldMaxMs &&
          this.paths.delete(n);
    }
  }
}
const me = { companionManifest: 30, skill: 20, companion: 10, other: 0 },
  Xs = "shared-with-me";
function gt(t) {
  const e = t.split("/");
  if (e[0] === ee.SYNCED_FS_LAYOUT.skills && e.length > 1) return me.skill;
  const n = Ys(e);
  return n === null
    ? me.other
    : n.length === 1 && n[0] === "companion.json"
      ? me.companionManifest
      : n[0] === "skills" && n.length > 1
        ? me.skill
        : me.companion;
}
function Ys(t) {
  let e = -1;
  if (
    (t[0] === ee.SYNCED_FS_LAYOUT.companions
      ? (e = 0)
      : t[0] === Xs && (e = t.indexOf(ee.SYNCED_FS_LAYOUT.companions, 1)),
    e === -1)
  )
    return null;
  const n = t.slice(e + 2);
  return n.length > 0 ? n : null;
}
const Ks = [
  {
    version: 1,
    name: "operations-and-journal",
    up: `
      CREATE TABLE operations (
        operation_id      TEXT PRIMARY KEY,
        operation_kind    TEXT    NOT NULL CHECK (operation_kind IN ('write','delete','move')),
        state             TEXT    NOT NULL CHECK (state IN ('pending','in-flight','blocked','complete')),
        path              TEXT    NOT NULL,
        source_path       TEXT,
        expected_hash     TEXT    NOT NULL,
        base_version      INTEGER NOT NULL,
        committed_version INTEGER,
        batch_id          TEXT,
        attempt_count     INTEGER NOT NULL DEFAULT 0,
        next_attempt_at   INTEGER NOT NULL DEFAULT 0,
        last_error_code   TEXT,
        created_at        INTEGER NOT NULL,
        updated_at        INTEGER NOT NULL,
        CHECK (operation_kind <> 'move' OR source_path IS NOT NULL)
      );

      -- One active canonical intent per destination path. The partial index is
      -- the arbiter rather than an application-level check, so two admissions
      -- racing cannot both win.
      CREATE UNIQUE INDEX operations_active_path
        ON operations(path) WHERE state <> 'complete';

      -- Moves also carry a unique source-path index: two moves out of one file
      -- would leave the second with nothing to move.
      CREATE UNIQUE INDEX operations_active_source
        ON operations(source_path)
        WHERE source_path IS NOT NULL AND state <> 'complete';

      CREATE INDEX operations_ready
        ON operations(next_attempt_at) WHERE state = 'pending';

      CREATE TABLE batches (
        batch_id   TEXT PRIMARY KEY,
        state      TEXT NOT NULL CHECK (state IN ('open','in-flight','complete')),
        created_at INTEGER NOT NULL
      );

      -- One row per (operation, step). Replayed on startup before hydration:
      -- recovery proves whether each step happened and finishes or compensates
      -- it, and never guesses.
      CREATE TABLE journal (
        operation_id TEXT NOT NULL,
        step         TEXT NOT NULL,
        status       TEXT NOT NULL CHECK (status IN ('started','done')),
        detail_json  TEXT NOT NULL,
        created_at   INTEGER NOT NULL,
        updated_at   INTEGER NOT NULL,
        PRIMARY KEY (operation_id, step)
      );

      CREATE INDEX journal_incomplete ON journal(operation_id) WHERE status = 'started';
    `,
    verify: (t) => ue(t, "operations", ["operation_id"]),
    expect: "0:0",
  },
  {
    version: 2,
    name: "conflict-log",
    up: `
      -- Conflicts live here, beside the intents, rather than in the version
      -- cache: the cache is quarantined and rebuilt when it will not open,
      -- and a record of what the engine decided about somebody's edit is not
      -- derivable from anything. It is user work, and it is kept like the rest
      -- of it.
      CREATE TABLE conflicts (
        conflict_id         TEXT PRIMARY KEY,
        path                TEXT    NOT NULL,
        resolved_at         INTEGER NOT NULL,
        outcome             TEXT    NOT NULL
          CHECK (outcome IN ('merged-text','kept-local-binary','kept-remote')),
        -- The load-bearing column. It is what makes the superseded content
        -- recoverable from immutable server history, and without it "what did I
        -- lose yesterday" has no answer.
        remote_version      INTEGER NOT NULL,
        local_content_hash  TEXT    NOT NULL,
        remote_content_hash TEXT    NOT NULL,
        seen_at             INTEGER
      );

      CREATE INDEX conflicts_recent ON conflicts(resolved_at DESC);
      CREATE INDEX conflicts_unseen ON conflicts(resolved_at DESC) WHERE seen_at IS NULL;
    `,
    verify: (t) => ue(t, "conflicts", ["conflict_id"]),
    expect: "0:0",
  },
  {
    version: 3,
    name: "agent-drafts",
    up: `
      -- Drafts live beside the intents for the same reason conflicts do: they
      -- are work somebody has not decided about yet, and a store that is
      -- rebuilt when it will not open would lose them. A draft the engine
      -- forgets is a draft that gets silently overwritten by the next remote
      -- change for its path.
      CREATE TABLE drafts (
        draft_id       TEXT PRIMARY KEY,
        path           TEXT    NOT NULL,
        operation      TEXT    NOT NULL CHECK (operation IN ('write','delete')),
        state          TEXT    NOT NULL CHECK (state IN (
          'active','ready-to-publish','publishing','published','discarded',
          'conflicted','needs-review'
        )),
        base_version   INTEGER NOT NULL,
        base_hash      TEXT,
        draft_hash     TEXT,
        detail_json    TEXT    NOT NULL DEFAULT '{}',
        updated_at     INTEGER NOT NULL
      );

      -- One open draft per path. Two agents editing the same file is a product
      -- question, not something the engine should resolve by keeping both.
      CREATE UNIQUE INDEX drafts_open_path
        ON drafts(path) WHERE state NOT IN ('published','discarded');
    `,
    verify: (t) => ue(t, "drafts", ["draft_id"]),
    expect: "0:0",
  },
  {
    version: 4,
    name: "version-comment",
    up: `
      -- The message an agent writes about its own change, carried to the
      -- server with the write it describes. Durable rather than held in main
      -- memory: the comment is the only record of *why* a version exists, and a
      -- restart between deciding to publish and publishing would lose it while
      -- the write itself survived — leaving an unexplained version in a user's
      -- history.
      ALTER TABLE operations ADD COLUMN version_comment TEXT;
    `,
    verify: (t) => ue(t, "operations", ["operation_id"]),
    expect: "0:0",
  },
  {
    version: 5,
    name: "conflict-kept-local",
    up: `
      -- A fourth outcome: a text file both sides hold with no common ancestor
      -- keeps the local bytes and publishes them over the remote version. The
      -- outcome set is a CHECK constraint, and SQLite cannot widen one in
      -- place, so the table is rebuilt around the wider set with its rows
      -- carried across. Recording an outcome the constraint refuses threw out
      -- of the effect and faulted the workspace — every workspace that reached
      -- the case, at once.
      CREATE TABLE conflicts_widened (
        conflict_id         TEXT PRIMARY KEY,
        path                TEXT    NOT NULL,
        resolved_at         INTEGER NOT NULL,
        outcome             TEXT    NOT NULL
          CHECK (outcome IN ('merged-text','kept-local-binary','kept-local','kept-remote')),
        remote_version      INTEGER NOT NULL,
        local_content_hash  TEXT    NOT NULL,
        remote_content_hash TEXT    NOT NULL,
        seen_at             INTEGER
      );
      INSERT INTO conflicts_widened
        SELECT conflict_id, path, resolved_at, outcome, remote_version,
               local_content_hash, remote_content_hash, seen_at
        FROM conflicts;
      DROP TABLE conflicts;
      ALTER TABLE conflicts_widened RENAME TO conflicts;
      CREATE INDEX conflicts_recent ON conflicts(resolved_at DESC);
      CREATE INDEX conflicts_unseen ON conflicts(resolved_at DESC) WHERE seen_at IS NULL;
    `,
    verify: (t) => {
      const e = t
        .prepare(
          "SELECT sql FROM sqlite_master WHERE type = 'table' AND name = 'conflicts'",
        )
        .get();
      return e !== void 0 && e.sql.includes("'kept-local'")
        ? "widened"
        : "unchanged";
    },
    expect: "widened",
  },
  {
    version: 6,
    name: "store-recovery",
    up: `
      -- One row per time this store replaced a damaged one. It lives in the
      -- replacement rather than beside it, so the record of what was lost and
      -- the work that followed commit together, and it survives a restart in
      -- the middle of the comparison that proves the recovery.
      CREATE TABLE recoveries (
        recovery_id   TEXT PRIMARY KEY,
        started_at    INTEGER NOT NULL,
        cause_code    TEXT,
        cause_phase   TEXT    NOT NULL,
        -- The damaged store, moved aside and never deleted.
        preserved_as  TEXT    NOT NULL,
        -- Never 'complete'. Rows read back from a damaged image say nothing
        -- about the rows that were not.
        salvage       TEXT    NOT NULL CHECK (salvage IN ('none','partial')),
        salvaged_json TEXT    NOT NULL,
        -- Whether anything but the binding says this folder is this workspace's.
        folder        TEXT    NOT NULL CHECK (folder IN ('proven','unproven','confirmed')),
        -- A complete local walk finished after the recovery began.
        audited_at    INTEGER,
        -- A root verified against the server after that walk, with nothing
        -- left to send. Opening this store is not evidence of recovery; this is.
        verified_at   INTEGER
      );

      -- What the engine would not decide from a damaged record. A queued
      -- delete or move read back from the old store is not replayed: the file
      -- comes back from the server, and a person is told which ones did.
      CREATE TABLE recovery_items (
        item_id     TEXT PRIMARY KEY,
        recovery_id TEXT    NOT NULL,
        path        TEXT    NOT NULL,
        kind        TEXT    NOT NULL
          CHECK (kind IN ('deletion-not-replayed','move-not-replayed')),
        created_at  INTEGER NOT NULL,
        reviewed_at INTEGER
      );

      CREATE INDEX recovery_items_open ON recovery_items(created_at) WHERE reviewed_at IS NULL;
    `,
    verify: (t) => ue(t, "recoveries", ["recovery_id"]),
    expect: "0:0",
  },
  {
    version: 7,
    name: "sync-priority",
    up: `
      -- How far ahead of other work the intent publishes: the weight
      -- syncPriority gives its path when the intent is admitted, higher first.
      -- A column rather than a question asked of every pending path on every
      -- page, so selection reads a page straight off an index.
      ALTER TABLE operations ADD COLUMN sync_priority INTEGER NOT NULL DEFAULT 0;

      -- The order selection reads a page in. Ending in created_at is what lets
      -- it stop at the page bound: without it, every pending intent sharing a
      -- deadline is sorted on every page.
      CREATE INDEX operations_ready_by_priority
        ON operations(sync_priority DESC, next_attempt_at, created_at) WHERE state = 'pending';
    `,
    backfill: (t) => {
      const e = t
          .prepare(
            "SELECT operation_id, path FROM operations WHERE state <> 'complete'",
          )
          .all(),
        n = t.prepare(
          "UPDATE operations SET sync_priority = ? WHERE operation_id = ?",
        );
      for (const s of e) {
        const r = gt(s.path);
        r !== me.other && n.run(r, s.operation_id);
      }
    },
    verify: (t) =>
      t
        .prepare("SELECT sql FROM sqlite_master WHERE name = 'operations'")
        .get()
        .sql.includes("sync_priority")
        ? "added"
        : "missing",
    expect: "added",
  },
  {
    version: 8,
    name: "ceiling-attempts",
    up: `
      -- The failed attempts that count toward the retry ceiling: every one but
      -- the retryable ones, which say nothing about the write. attempt_count
      -- still counts them all and paces the backoff; see recordAttempt.
      --
      -- Rows already queued start from none: their attempt counts mix both
      -- kinds, and nothing records which was which.
      ALTER TABLE operations ADD COLUMN ceiling_attempts INTEGER NOT NULL DEFAULT 0;
    `,
    verify: (t) =>
      t
        .prepare("SELECT sql FROM sqlite_master WHERE name = 'operations'")
        .get()
        .sql.includes("ceiling_attempts")
        ? "added"
        : "missing",
    expect: "added",
  },
  {
    version: 9,
    name: "group-attempts",
    up: `
      -- The failed attempts that send an intent up on its own instead of in a
      -- pack or a delete batch: the ones that point at the request. Counted
      -- from attempt_count, an outage that failed a pack three times sent
      -- every member up alone once the server came back.
      --
      -- Rows already queued start from their ceiling attempts, the failures
      -- already known to be about the request.
      ALTER TABLE operations ADD COLUMN group_attempts INTEGER NOT NULL DEFAULT 0;
      UPDATE operations SET group_attempts = ceiling_attempts WHERE state <> 'complete';
    `,
    verify: (t) =>
      t
        .prepare("SELECT sql FROM sqlite_master WHERE name = 'operations'")
        .get()
        .sql.includes("group_attempts")
        ? "added"
        : "missing",
    expect: "added",
  },
];
function fe(t) {
  return {
    operationId: t.operation_id,
    kind: t.operation_kind,
    state: t.state,
    path: t.path,
    sourcePath: t.source_path,
    expectedHash: t.expected_hash,
    baseVersion: t.base_version,
    committedVersion: t.committed_version,
    batchId: t.batch_id,
    attemptCount: t.attempt_count,
    ceilingAttempts: t.ceiling_attempts,
    groupAttempts: t.group_attempts,
    nextAttemptAt: t.next_attempt_at,
    lastErrorCode: t.last_error_code,
    versionComment: t.version_comment,
    syncPriority: t.sync_priority,
    createdAt: t.created_at,
    updatedAt: t.updated_at,
  };
}
function qt(t) {
  return t === ""
    ? { sql: "1", params: [] }
    : {
        sql: "(path = ? OR (path >= ? AND path < ?))",
        params: [t, `${t}/`, `${t}0`],
      };
}
function $t(t) {
  return t.startsWith("retryable:");
}
class xs {
  constructor(e, n) {
    ((this.db = e), (this.now = n));
  }
  admit(e) {
    return this.db.transaction(() => {
      const s = this.activeForPath(e.path);
      if (
        s !== null &&
        s.kind === e.kind &&
        s.expectedHash === e.expectedHash &&
        s.baseVersion === e.baseVersion &&
        s.sourcePath === (e.sourcePath ?? null)
      )
        return { kind: "unchanged", record: s };
      if (e.sourcePath !== void 0) {
        const a = this.activeForSource(e.sourcePath);
        if (a !== null && a.path !== e.path)
          throw new D(
            d.retryable(
              "local-intent-collision",
              "another active move already claims that source path",
            ),
          );
      }
      s !== null && this.markComplete(s.operationId);
      const r = this.now();
      this.db
        .prepare(
          `INSERT INTO operations (
             operation_id, operation_kind, state, path, source_path, expected_hash,
             base_version, committed_version, batch_id, attempt_count, next_attempt_at,
             last_error_code, version_comment, sync_priority, created_at, updated_at
           ) VALUES (?, ?, 'pending', ?, ?, ?, ?, NULL, NULL, 0, ?, NULL, ?, ?, ?, ?)`,
        )
        .run(
          e.operationId,
          e.kind,
          e.path,
          e.sourcePath ?? null,
          e.expectedHash,
          e.baseVersion,
          e.notBefore ?? 0,
          e.versionComment ?? null,
          gt(e.path),
          r,
          r,
        );
      const i = this.require(e.operationId);
      return s === null
        ? { kind: "admitted", record: i }
        : { kind: "replaced", record: i, retired: s };
    })();
  }
  activeForPath(e) {
    const n = this.db
      .prepare(
        "SELECT * FROM operations WHERE path = ? AND state <> 'complete'",
      )
      .get(e);
    return n === void 0 ? null : fe(n);
  }
  activeForSource(e) {
    const n = this.db
      .prepare(
        "SELECT * FROM operations WHERE source_path = ? AND state <> 'complete'",
      )
      .get(e);
    return n === void 0 ? null : fe(n);
  }
  get(e) {
    const n = this.db
      .prepare("SELECT * FROM operations WHERE operation_id = ?")
      .get(e);
    return n === void 0 ? null : fe(n);
  }
  require(e) {
    const n = this.get(e);
    if (n === null)
      throw new D(
        d.invariant(
          "impossible-journal-state",
          "operation vanished inside its own transaction",
        ),
      );
    return n;
  }
  selectDue(e, n = d.ENGINE_BOUNDS.outboxPageSize) {
    return this.db
      .prepare(
        `SELECT o.* FROM operations o
         LEFT JOIN batches b ON b.batch_id = o.batch_id
         WHERE o.state = 'pending'
           AND o.next_attempt_at <= ?
           AND (o.batch_id IS NULL OR b.state = 'complete')
         ORDER BY o.sync_priority DESC, o.next_attempt_at, o.created_at
         LIMIT ?`,
      )
      .all(e, n)
      .map(fe);
  }
  contentlessWrites(e, n = d.ENGINE_BOUNDS.outboxPageSize) {
    return this.db
      .prepare(
        `SELECT * FROM operations
         WHERE state IN ('pending', 'blocked')
           AND operation_kind = 'write'
           AND expected_hash = ''
           AND base_version = 0
           AND path > ?
         ORDER BY path
         LIMIT ?`,
      )
      .all(e, n)
      .map(fe);
  }
  hasPendingAfter(e, n) {
    const s = n.map(() => "?").join(","),
      r = n.length > 0 ? `AND operation_id NOT IN (${s})` : "";
    return (
      this.db
        .prepare(
          `SELECT 1 FROM operations
         WHERE state = 'pending' AND next_attempt_at <= ? ${r} LIMIT 1`,
        )
        .get(e, ...n) !== void 0
    );
  }
  dueSummary(e) {
    const n = this.db
        .prepare(
          `SELECT COUNT(*) AS due FROM operations
         WHERE state = 'pending' AND next_attempt_at <= ?`,
        )
        .get(e),
      s = this.db
        .prepare(
          `SELECT MIN(next_attempt_at) AS at FROM operations
         WHERE state = 'pending' AND next_attempt_at > ?`,
        )
        .get(e);
    return { due: n.due, earliestAt: s.at };
  }
  nextHoldAt(e) {
    return this.db
      .prepare(
        `SELECT MIN(next_attempt_at) AS at FROM operations
         WHERE state = 'pending' AND attempt_count = 0 AND next_attempt_at > ?`,
      )
      .get(e).at;
  }
  counts() {
    const e = this.db
        .prepare(
          "SELECT state, COUNT(*) AS n FROM operations WHERE state <> 'complete' GROUP BY state",
        )
        .all(),
      n = { pending: 0, inFlight: 0, blocked: 0 };
    for (const s of e)
      (s.state === "pending" && (n.pending = s.n),
        s.state === "in-flight" && (n.inFlight = s.n),
        s.state === "blocked" && (n.blocked = s.n));
    return n;
  }
  blocked() {
    return this.db
      .prepare(
        "SELECT * FROM operations WHERE state = 'blocked' ORDER BY updated_at",
      )
      .all()
      .map(fe);
  }
  markInFlight(e) {
    if (
      this.db
        .prepare(
          `UPDATE operations SET state = 'in-flight', updated_at = ?
         WHERE operation_id = ? AND state = 'pending'`,
        )
        .run(this.now(), e).changes !== 1
    )
      throw new D(
        d.retryable(
          "local-intent-collision",
          "intent was no longer pending when claimed",
        ),
      );
    return this.require(e);
  }
  markComplete(e, n) {
    if (
      this.db
        .prepare(
          `UPDATE operations SET state = 'complete', committed_version = ?, updated_at = ?
         WHERE operation_id = ?`,
        )
        .run(n ?? null, this.now(), e).changes !== 1
    )
      throw new D(
        d.invariant(
          "impossible-journal-state",
          "completing an operation that is not there",
        ),
      );
  }
  liftHold(e, n) {
    const s = qt(e);
    this.db
      .prepare(
        `UPDATE operations SET next_attempt_at = ?, updated_at = ?
         WHERE ${s.sql} AND state = 'pending' AND attempt_count = 0 AND next_attempt_at > ?`,
      )
      .run(n, n, ...s.params, n);
  }
  hasPendingUnder(e) {
    const n = qt(e);
    return (
      this.db
        .prepare(
          `SELECT 1 FROM operations
         WHERE ${n.sql} AND state IN ('pending', 'in-flight')
         LIMIT 1`,
        )
        .get(...n.params) !== void 0
    );
  }
  prune() {
    return this.db
      .prepare("DELETE FROM operations WHERE state = 'complete'")
      .run().changes;
  }
  recordAttempt(e, n, s, r = !$t(s)) {
    const i = this.get(e);
    if (i === null)
      throw new D(
        d.invariant(
          "impossible-journal-state",
          "recording an attempt against nothing",
        ),
      );
    const a = i.attemptCount + 1,
      o = i.ceilingAttempts + ($t(s) ? 0 : 1),
      l = i.groupAttempts + (r ? 1 : 0),
      c = o >= d.ENGINE_BOUNDS.maxPublishAttempts ? "blocked" : "pending";
    return (
      this.db
        .prepare(
          `UPDATE operations
         SET state = ?, attempt_count = ?, ceiling_attempts = ?, group_attempts = ?,
             next_attempt_at = ?, last_error_code = ?, updated_at = ?
         WHERE operation_id = ?`,
        )
        .run(c, a, o, l, n, s, this.now(), e),
      this.require(e)
    );
  }
  recordRefusal(e, n, s) {
    const r = this.get(e);
    if (r === null)
      throw new D(
        d.invariant(
          "impossible-journal-state",
          "recording a refusal against nothing",
        ),
      );
    return (
      this.db
        .prepare(
          `UPDATE operations
         SET state = 'pending', attempt_count = ?, next_attempt_at = ?, last_error_code = ?, updated_at = ?
         WHERE operation_id = ?`,
        )
        .run(r.attemptCount + 1, n, s, this.now(), e),
      this.require(e)
    );
  }
  releaseClaim(e) {
    this.db
      .prepare(
        `UPDATE operations SET state = 'pending', updated_at = ?
         WHERE operation_id = ? AND state = 'in-flight'`,
      )
      .run(this.now(), e);
  }
  unblock(e, n) {
    return (
      this.db
        .prepare(
          `UPDATE operations
         SET state = 'pending', attempt_count = 0, ceiling_attempts = 0, group_attempts = 0,
             next_attempt_at = ?, updated_at = ?
         WHERE operation_id = ? AND state = 'blocked'`,
        )
        .run(n, this.now(), e),
      this.require(e)
    );
  }
  releaseParkedOn(e, n) {
    return this.db
      .prepare(
        `UPDATE operations
         SET state = 'pending', next_attempt_at = ?, attempt_count = 0, ceiling_attempts = 0,
             group_attempts = 0, updated_at = ?
         WHERE state IN ('pending','blocked')
           AND last_error_code LIKE ? || '%'`,
      )
      .run(n, this.now(), e).changes;
  }
  releaseBlockedOn(e, n) {
    return this.db
      .prepare(
        `UPDATE operations
         SET state = 'pending', next_attempt_at = ?, attempt_count = 0, ceiling_attempts = 0,
             group_attempts = 0, updated_at = ?
         WHERE state = 'blocked'
           AND last_error_code LIKE ? || '%'`,
      )
      .run(n, this.now(), e).changes;
  }
  reclaimInFlight() {
    return this.db
      .prepare(
        "UPDATE operations SET state = 'pending', updated_at = ? WHERE state = 'in-flight'",
      )
      .run(this.now()).changes;
  }
  beginStep(e, n, s) {
    const r = this.now();
    this.db
      .prepare(
        `INSERT INTO journal (operation_id, step, status, detail_json, created_at, updated_at)
         VALUES (?, ?, 'started', ?, ?, ?)
         ON CONFLICT (operation_id, step) DO UPDATE
           SET detail_json = excluded.detail_json, updated_at = excluded.updated_at
           WHERE journal.status = 'started'`,
      )
      .run(e, n, JSON.stringify(s), r, r);
  }
  completeStep(e, n) {
    if (
      this.db
        .prepare(
          `UPDATE journal SET status = 'done', updated_at = ?
         WHERE operation_id = ? AND step = ?`,
        )
        .run(this.now(), e, n).changes !== 1
    )
      throw new D(
        d.invariant(
          "impossible-journal-state",
          "completing a journal step that was never started",
        ),
      );
  }
  incompleteSteps() {
    return this.db
      .prepare(
        "SELECT * FROM journal WHERE status = 'started' ORDER BY created_at",
      )
      .all()
      .map((n) => ({
        operationId: n.operation_id,
        step: n.step,
        status: n.status,
        detail: Qs(n.detail_json),
        createdAt: n.created_at,
        updatedAt: n.updated_at,
      }));
  }
  pruneJournal() {
    return this.db
      .prepare(
        `DELETE FROM journal
         WHERE status = 'done'
           AND operation_id NOT IN (SELECT operation_id FROM operations WHERE state <> 'complete')`,
      )
      .run().changes;
  }
  transaction(e) {
    return this.db.transaction(e)();
  }
}
function Qs(t) {
  try {
    const e = JSON.parse(t);
    return e === null || typeof e != "object" || Array.isArray(e) ? {} : e;
  } catch {
    throw new D(
      d.invariant(
        "impossible-journal-state",
        "journal detail is not an object",
      ),
    );
  }
}
function Js(t) {
  try {
    const e = JSON.parse(t);
    if (e === null || typeof e != "object" || Array.isArray(e)) return {};
    const n = {};
    for (const [s, r] of Object.entries(e)) {
      if (r === null || typeof r != "object") continue;
      const i = "rows" in r && typeof r.rows == "number" ? r.rows : 0,
        a = "rejected" in r && typeof r.rejected == "number" ? r.rejected : 0,
        o = "endedEarly" in r && r.endedEarly === !0;
      n[s] = { rows: i, rejected: a, endedEarly: o };
    }
    return n;
  } catch {
    return {};
  }
}
function Wt(t) {
  return {
    recoveryId: t.recovery_id,
    startedAt: t.started_at,
    causeCode: t.cause_code,
    causePhase: t.cause_phase,
    preservedAs: t.preserved_as,
    salvage: t.salvage,
    salvaged: Js(t.salvaged_json),
    folder: t.folder,
    auditedAt: t.audited_at,
    verifiedAt: t.verified_at,
  };
}
function Zs(t) {
  return {
    itemId: t.item_id,
    recoveryId: t.recovery_id,
    path: t.path,
    kind: t.kind,
    createdAt: t.created_at,
    reviewedAt: t.reviewed_at,
  };
}
class Rn {
  constructor(e, n) {
    ((this.db = e), (this.now = n));
  }
  has(e) {
    return (
      this.db
        .prepare("SELECT 1 FROM recoveries WHERE recovery_id = ?")
        .get(e) !== void 0
    );
  }
  begin(e) {
    this.db
      .prepare(
        `INSERT INTO recoveries (
           recovery_id, started_at, cause_code, cause_phase, preserved_as,
           salvage, salvaged_json, folder, audited_at, verified_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NULL, NULL)
         ON CONFLICT (recovery_id) DO NOTHING`,
      )
      .run(
        e.recoveryId,
        e.startedAt,
        e.causeCode,
        e.causePhase,
        e.preservedAs,
        e.salvage,
        JSON.stringify(e.salvaged),
        e.folder,
      );
  }
  addItem(e) {
    this.db
      .prepare(
        `INSERT INTO recovery_items (item_id, recovery_id, path, kind, created_at, reviewed_at)
         VALUES (?, ?, ?, ?, ?, NULL)
         ON CONFLICT (item_id) DO NOTHING`,
      )
      .run(e.itemId, e.recoveryId, e.path, e.kind, e.createdAt);
  }
  latest() {
    const e = this.db
      .prepare(
        "SELECT * FROM recoveries ORDER BY started_at DESC, recovery_id DESC LIMIT 1",
      )
      .get();
    return e === void 0 ? null : Wt(e);
  }
  all() {
    return this.db
      .prepare(
        "SELECT * FROM recoveries ORDER BY started_at DESC, recovery_id DESC",
      )
      .all()
      .map(Wt);
  }
  confirmFolder(e) {
    return (
      this.db
        .prepare(
          "UPDATE recoveries SET folder = 'confirmed' WHERE recovery_id = ? AND folder = 'unproven'",
        )
        .run(e).changes === 1
    );
  }
  noteAudited(e) {
    this.db
      .prepare(
        "UPDATE recoveries SET audited_at = ? WHERE recovery_id = ? AND audited_at IS NULL",
      )
      .run(this.now(), e);
  }
  noteVerified(e) {
    return (
      this.db
        .prepare(
          `UPDATE recoveries SET verified_at = ?
           WHERE recovery_id = ? AND audited_at IS NOT NULL AND verified_at IS NULL`,
        )
        .run(this.now(), e).changes === 1
    );
  }
  openItemCount() {
    return this.db
      .prepare(
        "SELECT COUNT(*) AS n FROM recovery_items WHERE reviewed_at IS NULL",
      )
      .get().n;
  }
  openItems(e) {
    return this.db
      .prepare(
        `SELECT * FROM recovery_items WHERE reviewed_at IS NULL
         ORDER BY created_at, item_id LIMIT ?`,
      )
      .all(e)
      .map(Zs);
  }
  markReviewed(e) {
    if (e.length === 0) return 0;
    const n = this.now(),
      s = this.db.prepare(
        "UPDATE recovery_items SET reviewed_at = ? WHERE item_id = ? AND reviewed_at IS NULL",
      );
    return this.db.transaction(() => {
      let r = 0;
      for (const i of e) r += s.run(n, i).changes;
      return r;
    })();
  }
}
const er = u.object({
    version: u.literal(1),
    recoveryId: u.string(),
    startedAt: u.number(),
    causeCode: u.nullable(u.string()),
    causePhase: u.string(),
    preservedAs: u.string(),
  }),
  tr = u.object({
    conflict_id: u.string(),
    path: u.string(),
    resolved_at: u.number(),
    outcome: u.picklist([
      "merged-text",
      "kept-local-binary",
      "kept-local",
      "kept-remote",
    ]),
    remote_version: u.number(),
    local_content_hash: u.string(),
    remote_content_hash: u.string(),
    seen_at: u.nullable(u.number()),
  }),
  nr = u.object({
    draft_id: u.string(),
    path: u.string(),
    operation: u.picklist(["write", "delete"]),
    state: u.picklist([
      "active",
      "ready-to-publish",
      "publishing",
      "published",
      "discarded",
      "conflicted",
      "needs-review",
    ]),
    base_version: u.number(),
    base_hash: u.nullable(u.string()),
    draft_hash: u.nullable(u.string()),
    detail_json: u.string(),
    updated_at: u.number(),
  }),
  sr = u.object({
    operation_id: u.string(),
    operation_kind: u.picklist(["write", "delete", "move"]),
    state: u.picklist(["pending", "in-flight", "blocked", "complete"]),
    path: u.string(),
    source_path: u.nullable(u.string()),
  }),
  rr = u.object({
    item_id: u.string(),
    recovery_id: u.string(),
    path: u.string(),
    kind: u.picklist(["deletion-not-replayed", "move-not-replayed"]),
    created_at: u.number(),
    reviewed_at: u.nullable(u.number()),
  }),
  zt = { tables: {}, conflicts: [], drafts: [], operations: [], items: [] };
function ir(t) {
  return H.join(t.directory, `${t.fileName}.recovery.json`);
}
async function ar(t) {
  let e;
  try {
    e = await S.readFile(t, "utf8");
  } catch (n) {
    if (n instanceof Error && "code" in n && n.code === "ENOENT") return null;
    throw n;
  }
  try {
    return u.parse(er, JSON.parse(e));
  } catch {
    return null;
  }
}
async function or(t) {
  const e = ir(t.store);
  let n = await ar(e);
  if (n === null)
    try {
      return { ...(await Le(t.store)), began: null };
    } catch (r) {
      if (!(r instanceof D) || r.openCause?.kind !== "corrupt") throw r;
      ((n = {
        version: 1,
        recoveryId: t.newRecoveryId(),
        startedAt: t.now(),
        causeCode: r.openCause.code,
        causePhase: r.openCause.phase,
        preservedAs: await pt(t.store.directory, t.store.fileName),
      }),
        await S.writeFile(e, JSON.stringify(n), { mode: 384, flush: !0 }));
    }
  await ft(t.store.directory, t.store.fileName, n.preservedAs);
  const s = await lr(t.store);
  try {
    const r = new Rn(s.db, t.now);
    if (!r.has(n.recoveryId)) {
      const i = await ur(t.store.directory, n.preservedAs),
        a = await t.folderEvidence();
      cr(s.db, r, n, i, a, t.now());
    }
    return (
      t.onReplaced(),
      await S.rm(e, { force: !0 }),
      { ...s, began: r.latest() }
    );
  } catch (r) {
    throw (s.db.close(), r);
  }
}
async function lr(t) {
  try {
    return await Le(t);
  } catch (e) {
    if (!(e instanceof D) || e.openCause?.kind !== "corrupt") throw e;
    const n = await pt(t.directory, t.fileName);
    return (await ft(t.directory, t.fileName, n), Le(t));
  }
}
function cr(t, e, n, s, r, i) {
  const a = t.prepare(`INSERT OR IGNORE INTO conflicts (
       conflict_id, path, resolved_at, outcome, remote_version,
       local_content_hash, remote_content_hash, seen_at
     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`),
    o = t.prepare(`INSERT OR IGNORE INTO drafts (
       draft_id, path, operation, state, base_version, base_hash, draft_hash,
       detail_json, updated_at
     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
  t.transaction(() => {
    e.begin({
      recoveryId: n.recoveryId,
      startedAt: n.startedAt,
      causeCode: n.causeCode,
      causePhase: n.causePhase,
      preservedAs: n.preservedAs,
      salvage: Object.values(s.tables).some((l) => l.rows > 0)
        ? "partial"
        : "none",
      salvaged: s.tables,
      folder: r,
    });
    for (const l of s.conflicts)
      a.run(
        l.conflict_id,
        l.path,
        l.resolved_at,
        l.outcome,
        l.remote_version,
        l.local_content_hash,
        l.remote_content_hash,
        l.seen_at,
      );
    for (const l of s.drafts)
      o.run(
        l.draft_id,
        l.path,
        l.operation,
        l.state,
        l.base_version,
        l.base_hash,
        l.draft_hash,
        l.detail_json,
        l.updated_at,
      );
    for (const l of s.operations)
      l.operation_kind !== "write" &&
        e.addItem({
          itemId: `${n.recoveryId}:${l.operation_id}`,
          recoveryId: n.recoveryId,
          path:
            l.operation_kind === "move" ? (l.source_path ?? l.path) : l.path,
          kind:
            l.operation_kind === "move"
              ? "move-not-replayed"
              : "deletion-not-replayed",
          createdAt: i,
        });
    for (const l of s.items)
      e.addItem({
        itemId: l.item_id,
        recoveryId: l.recovery_id,
        path: l.path,
        kind: l.kind,
        createdAt: l.created_at,
      });
  })();
}
async function ur(t, e) {
  const n = H.join(t, e),
    s = H.join(t, `${e}.reading`);
  try {
    (await S.copyFile(n, s),
      await S.copyFile(`${n}-wal`, `${s}-wal`).catch(() => {}));
  } catch {
    return (await jt(s), zt);
  }
  try {
    return dr(s);
  } catch {
    return zt;
  } finally {
    await jt(s);
  }
}
async function jt(t) {
  for (const e of ["", "-wal", "-shm"]) await S.rm(`${t}${e}`, { force: !0 });
}
function dr(t) {
  const e = new dt(t, { readonly: !0, fileMustExist: !0 });
  try {
    (e.unsafeMode(!0), e.pragma("writable_schema = ON"));
    const n = new Set(
        e
          .prepare("SELECT name FROM sqlite_master WHERE type = 'table'")
          .all()
          .map((c) => c.name),
      ),
      s = {},
      r = (c, p, m) => {
        if (!n.has(c)) return [];
        const R = [];
        return (
          (s[c] = hr(e, c, (h) => {
            const g = u.safeParse(p, h);
            return g.success ? (m(g.output) || R.push(g.output), !0) : !1;
          })),
          R
        );
      },
      i = r("conflicts", tr, () => !1),
      a = r(
        "drafts",
        nr,
        (c) => c.state === "published" || c.state === "discarded",
      ),
      o = r("operations", sr, (c) => c.state === "complete"),
      l = r("recovery_items", rr, (c) => c.reviewed_at !== null);
    return (
      r("outbox_entries", u.looseObject({}), () => !0),
      { tables: s, conflicts: i, drafts: a, operations: o, items: l }
    );
  } finally {
    e.close();
  }
}
function hr(t, e, n) {
  const s = new Set();
  let r = 0,
    i = 0,
    a = !1;
  for (const o of ["ASC", "DESC"])
    try {
      const l = t.prepare(
        `SELECT rowid AS salvage_rowid, * FROM ${e} NOT INDEXED ORDER BY rowid ${o}`,
      );
      for (const c of l.iterate()) {
        const { salvage_rowid: p, ...m } = c;
        if (!(typeof p != "number" && typeof p != "bigint")) {
          if (s.has(p)) break;
          (s.add(p), n(m) ? (r += 1) : (i += 1));
        }
      }
      if (o === "ASC") break;
    } catch {
      a = !0;
    }
  return { rows: r, rejected: i, endedEarly: a };
}
const pr = u.object({ version: u.literal(1), accountId: u.string() }),
  fr = u.object({
    device: u.string(),
    inode: u.string(),
    resolved_root: u.string(),
  }),
  Re = new Map();
async function Je(t) {
  try {
    return (await S.access(t), !0);
  } catch (e) {
    if (e instanceof Error && "code" in e && e.code === "ENOENT") return !1;
    throw e;
  }
}
async function mr(t) {
  if (t.accountId === void 0) return t.stateDir;
  if (
    !ee.isUsableAccountId(t.accountId) ||
    !ee.isUsableAccountId(t.workspaceId)
  )
    throw new Error(
      "Invalid account or workspace identifier for local sync state",
    );
  const e = H.join(t.stateDir, t.workspaceId),
    n = Re.get(e) ?? Promise.resolve();
  let s = () => {};
  const r = new Promise((i) => {
    s = i;
  });
  (Re.set(e, r), await n);
  try {
    return await wr({ ...t, accountId: t.accountId });
  } finally {
    (s(), Re.get(e) === r && Re.delete(e));
  }
}
function gr(t) {
  const e = t instanceof Error && "code" in t ? t.code : null;
  return (
    typeof e == "string" &&
    (e.startsWith("SQLITE_CORRUPT") || e === "SQLITE_NOTADB")
  );
}
function vr(t, e) {
  const n = new dt(t, { readonly: !0, fileMustExist: !0, timeout: 0 });
  try {
    if (
      n
        .prepare(
          "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'root_identity'",
        )
        .get()
    )
      return u.parse(
        fr,
        n
          .prepare(
            "SELECT device, inode, resolved_root FROM root_identity WHERE id = 1",
          )
          .get(),
      );
    const r = n
      .prepare(
        "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'version_cache' AND NOT EXISTS (SELECT 1 FROM sqlite_master WHERE name = 'remote_versions')",
      )
      .get();
    if (!e || !r)
      throw new Error(
        "Legacy sync state has no verified root; recovery is required",
      );
    return null;
  } finally {
    n.close();
  }
}
async function wr(t) {
  const e = H.join(t.stateDir, "sync-state", t.accountId),
    n = H.join(t.stateDir, `sync-state-owner-${t.workspaceId}.json`);
  if (await Je(n))
    return u.parse(pr, JSON.parse(await S.readFile(n, "utf8"))).accountId ===
      t.accountId
      ? t.stateDir
      : e;
  if (t.preserveLegacyState === !1) return e;
  const s = H.join(t.stateDir, `version-cache-${t.workspaceId}.db`),
    r = H.join(t.stateDir, `outbox-${t.workspaceId}.db`);
  if (!(await Je(s))) {
    if (await Je(r))
      throw new Error(
        "Legacy sync outbox has no verified account owner; recovery is required",
      );
    return t.preserveLegacyState
      ? (await S.mkdir(t.stateDir, { recursive: !0 }),
        await S.writeFile(
          n,
          JSON.stringify({ version: 1, accountId: t.accountId }),
          { flag: "wx", mode: 384, flush: !0 },
        ),
        t.stateDir)
      : e;
  }
  let i = null;
  try {
    i = vr(s, t.preserveLegacyState === !0);
  } catch (a) {
    if (!gr(a)) throw a;
    if (!t.preserveLegacyState) return e;
  }
  if (i) {
    const a = await yn(t.root);
    if ("class" in a)
      throw new Error(
        "Cannot verify the account directory for legacy sync state",
      );
    if (
      !(a.device === i.device && a.inode === i.inode) &&
      i.resolved_root !== t.root
    )
      return e;
  }
  return (
    await S.mkdir(t.stateDir, { recursive: !0 }),
    await S.writeFile(
      n,
      JSON.stringify({ version: 1, accountId: t.accountId }),
      { flag: "wx", mode: 384, flush: !0 },
    ),
    t.stateDir
  );
}
function Er(t) {
  if (
    !t ||
    $.containsControlChars(t) ||
    t.includes("\\") ||
    t.startsWith("/") ||
    t.startsWith("//") ||
    /^[a-zA-Z]:/.test(t)
  )
    return !1;
  const e = t.split("/");
  for (const n of e) if (n === "..") return !1;
  return !0;
}
const { packHeaderSize: Vt, packMagic: kr, packVersion: br } = $.syncedFSConfig;
function rt(t, e) {
  const n = t.getUint32(e, !0),
    s = t.getUint32(e + 4, !0);
  return n + s * 4294967296;
}
function yr(t) {
  if (t.length < Vt)
    throw new Error(`Pack header too short: ${t.length} < ${Vt}`);
  for (let i = 0; i < 4; i++)
    if (t[i] !== kr[i]) throw new Error("Invalid pack magic bytes");
  const e = new DataView(t.buffer, t.byteOffset, t.byteLength),
    n = e.getUint8(4);
  if (n !== br) throw new Error(`Unsupported pack version: ${n}`);
  const s = e.getUint32(5, !0);
  if (s > $.syncedFSConfig.packMaxFileCount)
    throw new Error(
      `Pack fileCount ${s} exceeds maximum of ${$.syncedFSConfig.packMaxFileCount}`,
    );
  const r = rt(e, 9);
  return { fileCount: s, tocOffset: r };
}
function _r(t, e) {
  const n = new DataView(t.buffer, t.byteOffset, t.byteLength),
    s = new TextDecoder(),
    r = [];
  let i = 0;
  for (let a = 0; a < e; a++) {
    if (i + 2 > t.byteLength)
      throw new Error(
        `Pack TOC truncated at entry ${a}: need 2 bytes at offset ${i}, have ${t.byteLength}`,
      );
    const o = n.getUint16(i, !0);
    if (((i += 2), i + o + 16 > t.byteLength))
      throw new Error(
        `Pack TOC truncated at entry ${a}: need ${o + 16} bytes at offset ${i}, have ${t.byteLength}`,
      );
    const l = s.decode(t.subarray(i, i + o));
    if (!Er(l)) throw new Error(`Pack TOC entry ${a}: unsafe path "${l}"`);
    i += o;
    const c = rt(n, i);
    i += 8;
    const p = rt(n, i);
    ((i += 8), r.push({ path: l, offset: c, size: p }));
  }
  return r;
}
const {
  packHeaderSize: ge,
  packMagic: Tr,
  packTargetSize: Sr,
  packVersion: Rr,
  packRequestMaxFileCount: Ir,
} = $.syncedFSConfig;
function Ze(t, e, n) {
  (t.setUint32(e, n >>> 0, !0), t.setUint32(e + 4, (n / 4294967296) >>> 0, !0));
}
function Nr(t) {
  const e = [],
    n = new TextEncoder();
  let s = ge;
  for (const m of t)
    (e.push({ path: m.path, offset: s, size: m.data.length }),
      (s += m.data.length));
  const r = s,
    i = [];
  for (const m of e) {
    const R = n.encode(m.path),
      h = new ArrayBuffer(2 + R.length + 16),
      g = new DataView(h);
    (g.setUint16(0, R.length, !0), new Uint8Array(h, 2, R.length).set(R));
    const E = 2 + R.length;
    (Ze(g, E, m.offset), Ze(g, E + 8, m.size), i.push(new Uint8Array(h)));
  }
  const a = new ArrayBuffer(ge),
    o = new DataView(a);
  (new Uint8Array(a, 0, 4).set(Tr),
    o.setUint8(4, Rr),
    o.setUint32(5, t.length, !0),
    Ze(o, 9, r));
  const l =
      ge +
      t.reduce((m, R) => m + R.data.length, 0) +
      i.reduce((m, R) => m + R.length, 0),
    c = new Uint8Array(l);
  let p = 0;
  (c.set(new Uint8Array(a), p), (p += ge));
  for (const m of t) (c.set(m.data, p), (p += m.data.length));
  for (const m of i) (c.set(m, p), (p += m.length));
  return { blob: c, toc: e };
}
function Cr(t, e = Sr, n = Ir) {
  const s = [...t].sort((c, p) => c.path.localeCompare(p.path)),
    r = new TextEncoder(),
    i = Math.max(1, n),
    a = [];
  let o = [],
    l = ge;
  for (const c of s) {
    const p = 2 + r.encode(c.path).length + 16,
      m = c.data.length + p;
    (o.length > 0 &&
      (l + m > e || o.length >= i) &&
      (a.push(o), (o = []), (l = ge)),
      o.push(c),
      (l += m));
  }
  return (o.length > 0 && a.push(o), a);
}
class Hr {
  constructor(e) {
    this.directory = e;
  }
  next() {
    return H.join(this.directory, Z.randomUUID());
  }
  async reset() {
    (await S.rm(this.directory, { recursive: !0, force: !0 }),
      await S.mkdir(this.directory, { recursive: !0 }));
  }
}
const In = 1024 * 1024,
  Ar = 64 * 1024 * 1024;
async function it(t, e, n) {
  if (t.sha256 === e.contentHash && t.sizeBytes === e.sizeBytes)
    return { kind: "verified", staged: t };
  const s = { kind: "mismatch", actualHash: t.sha256, actualSize: t.sizeBytes };
  if (
    t.sizeBytes < $.syncedFSConfig.packHeaderSize ||
    t.sizeBytes > $.syncedFSConfig.packMaxBytes
  )
    return s;
  const r = await S.open(t.file, "r");
  try {
    const i = await Lr(r, t.sizeBytes, e);
    if (i === null) return s;
    const a = n();
    return (
      await Dr(r, i.offset, i.size, a),
      {
        kind: "verified",
        staged: { file: a, sizeBytes: i.size, sha256: e.contentHash },
      }
    );
  } finally {
    await r.close().catch(() => {});
  }
}
async function Lr(t, e, n) {
  try {
    const { fileCount: s, tocOffset: r } = yr(
      await De(t, 0, $.syncedFSConfig.packHeaderSize),
    );
    if (
      !Number.isSafeInteger(r) ||
      r < $.syncedFSConfig.packHeaderSize ||
      r > e ||
      e - r > Ar
    )
      return null;
    const i = _r(await De(t, r, e - r), s).sort((o, l) => o.offset - l.offset);
    let a = $.syncedFSConfig.packHeaderSize;
    for (const o of i) {
      const l = o.offset + o.size;
      if (
        !Number.isSafeInteger(o.offset) ||
        !Number.isSafeInteger(o.size) ||
        !Number.isSafeInteger(l) ||
        o.offset < a ||
        o.size < 0 ||
        l > r
      )
        return null;
      a = l;
    }
    for (const o of i)
      if (
        o.size === n.sizeBytes &&
        (await Or(t, o.offset, o.size)) === n.contentHash
      )
        return { offset: o.offset, size: o.size };
  } catch {}
  return null;
}
async function De(t, e, n) {
  const s = new Uint8Array(n);
  let r = 0;
  for (; r < n; ) {
    const { bytesRead: i } = await t.read(s, r, n - r, e + r);
    if (i === 0) throw new Error("the staged download ended early");
    r += i;
  }
  return s;
}
async function Or(t, e, n) {
  const s = Z.createHash("sha256");
  for (let r = 0; r < n; ) {
    const i = await De(t, e + r, Math.min(In, n - r));
    (s.update(i), (r += i.byteLength));
  }
  return s.digest("hex");
}
async function Dr(t, e, n, s) {
  const r = await S.open(s, "w");
  let i = !1;
  try {
    for (let a = 0; a < n; ) {
      const o = await De(t, e + a, Math.min(In, n - a));
      for (let l = 0; l < o.byteLength; ) {
        const c = await r.write(o, l, o.byteLength - l);
        l += c.bytesWritten;
      }
      a += o.byteLength;
    }
    i = !0;
  } finally {
    (await r.close().catch(() => {}),
      i || (await S.rm(s, { force: !0 }).catch(() => {})));
  }
}
class Mr {
  held = new Map();
  hold(e) {
    const n = this.held.get(e.path);
    return n !== void 0 &&
      n.version === e.version &&
      n.expectedHash === e.expectedHash
      ? !1
      : (this.held.set(e.path, e), !0);
  }
  withholds(e, n, s) {
    const r = this.held.get(e);
    return r === void 0
      ? !1
      : n < r.version
        ? r.reason === "unlandable"
        : n === r.version && s === r.expectedHash
          ? !0
          : (this.held.delete(e), !1);
  }
  list(e) {
    const n = [];
    for (const [s, r] of this.held) {
      const i = e(s);
      if (i !== null && i >= r.version) {
        this.held.delete(s);
        continue;
      }
      n.push(r);
    }
    return n;
  }
}
async function Fr(t, e) {
  return (await ee.fileTypeFromBuffer(e))
    ? !1
    : (ns.isText(ts.basename(t), e) ?? !1);
}
const Pr = /[\x00-\x1f<>:"|?*]/;
function Ur(t) {
  return process.platform !== "win32"
    ? !1
    : t.split("/").some((n) => Pr.test(n));
}
const Br = { 2: "ENOENT", 3: "ENOENT", 5: "EACCES" },
  Gt = new Set();
function qr(t) {
  return async (e, n) => {
    try {
      return await t.listDirectory(H.toNamespacedPath(e), n);
    } catch (s) {
      const r = s instanceof Error ? /win32 error (\d+)/.exec(s.message) : null,
        i = r === null ? null : Number(r[1]),
        a = i === null ? void 0 : Br[i];
      if (a !== void 0)
        throw Object.assign(
          new Error("The directory could not be listed", { cause: s }),
          { code: a },
        );
      return (
        i !== null &&
          !Gt.has(i) &&
          (Gt.add(i),
          console.warn(
            `[fs-native] A listing failed with win32 error ${i}; using opendir`,
          )),
        null
      );
    }
  };
}
const Xt = ss.loadFsNativeAddon("listDirectory"),
  $r = Xt === null ? null : qr(Xt),
  et = 1e4,
  Wr = 8,
  zr = 32,
  jr = 1e3,
  Vr = 1e3;
function* Gr(t) {
  for (const e of t.entries)
    yield {
      name: e.name,
      kind: e.kind,
      listed:
        e.kind === "file"
          ? { sizeBytes: e.size, mtimeMs: e.mtimeMs, inode: e.ino }
          : null,
    };
}
async function* Xr(t) {
  for await (const e of t) {
    let n = "other";
    (e.isDirectory() ? (n = "directory") : e.isFile() && (n = "file"),
      yield { name: e.name, kind: n, listed: null });
  }
}
function Yr(t, e) {
  return H.relative(t, e).split(H.sep).join("/");
}
function ae(t, e) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function Yt(t, e) {
  const n = t === "" ? [] : t.split("/"),
    s = e === "" ? [] : e.split("/");
  for (let r = 0; r < n.length && r < s.length; r++) {
    const i = ae(n[r], s[r]);
    if (i !== 0) return i;
  }
  return n.length - s.length;
}
function Kr(t, e) {
  return t === "" || t === e || e.startsWith(`${t}/`);
}
async function vt(t) {
  const e = performance.now(),
    n = t.concurrency ?? d.ENGINE_BOUNDS.scanWorkerCount,
    s = new Set(t.excludedRoots ?? []),
    r = [],
    i = [],
    a = [],
    o = [],
    l = t.listDirectory === void 0 ? $r : t.listDirectory,
    c = new Map(),
    p = (O) => {
      l === null ||
        c.size >= zr ||
        c.has(O) ||
        s.has(O) ||
        c.set(
          O,
          l(O, jr).then(
            (N) => ({ listing: N, listedAt: performance.now() }),
            (N) => ({ error: N, listedAt: performance.now() }),
          ),
        );
    },
    m = async (O) => {
      if (l === null) return null;
      const N = c.get(O);
      if (N === void 0) return l(O, et);
      c.delete(O);
      const B = await N;
      if (performance.now() - B.listedAt > Vr) return l(O, et);
      if ("error" in B) throw B.error;
      return B.listing === null || B.listing.complete ? B.listing : l(O, et);
    },
    R = [];
  let h = 0,
    g = 0,
    E = 0,
    v = !1;
  const f = () => t.signal?.aborted === !0,
    k =
      t.subtree === void 0 || t.subtree === ""
        ? t.root
        : H.join(t.root, ...t.subtree.split("/")),
    b = async () => {
      let O = 0;
      const N = async (B) => {
        for (;;) {
          const z = O++;
          if ((f() && (v = !0), z >= o.length || v)) return;
          const M = o[z],
            F = t.known?.(M.relative) ?? null;
          let A = { kind: "changed" };
          (F !== null && M.listed !== null
            ? (A = d.judgeListed(M.listed, F))
            : F !== null && (A = await d.statKnown(M.absolute, F)),
            A.kind === "changed" && (g += 1));
          const U =
            A.kind === "changed"
              ? await d.readSettled(t.root, M.absolute, {
                  kind: "hash",
                  buffer: B,
                  signal: t.signal,
                })
              : A;
          switch (U.kind) {
            case "file":
              a.push({
                path: M.relative,
                contentHash: U.contentHash,
                sizeBytes: U.sizeBytes,
                mtimeMs: U.mtimeMs,
                inode: U.inode,
              });
              break;
            case "missing":
              r.push({
                path: M.relative,
                failure: d.localEnvironment(
                  "root-unreadable",
                  "a file vanished during the walk",
                ),
              });
              break;
            case "directory":
              break;
            case "too-large":
              i.push({ path: M.relative, reason: "too-large" });
              break;
            case "unsettled":
              i.push({ path: M.relative, reason: "unsettled" });
              break;
            case "unreadable":
              r.push({ path: M.relative, failure: U.failure });
              break;
          }
        }
      };
      (await Promise.all(
        Array.from({ length: Math.min(n, o.length) }, (B, z) => {
          const M = (R[z] ??= new Uint8Array(262144));
          return N(M);
        }),
      ),
        (o.length = 0));
    },
    _ = t.stage?.after ?? null,
    C = t.maxEntries ?? d.ENGINE_BOUNDS.maxScanEntries;
  let w = _,
    T = !1;
  const P = async (O) => {
    if (v || f()) {
      v = !0;
      return;
    }
    const N = Yr(t.root, O);
    if (s.has(O)) {
      i.push({ path: N, reason: "excluded-workspace" });
      return;
    }
    let B;
    try {
      if (O === k && (await d.crossesLink(t.root, k))) return;
      const I = await m(O);
      B = I?.complete === !0 ? Gr(I) : Xr(await S.opendir(O));
    } catch (I) {
      const q = I instanceof Error && "code" in I ? I.code : null;
      if (q === "ENOENT" && O !== k) {
        r.push({
          path: N,
          failure: d.localEnvironment(
            "root-unreadable",
            "a directory vanished during the walk",
          ),
        });
        return;
      }
      r.push({
        path: N,
        failure: d.localEnvironment(
          q === "ENOENT" ? "root-missing" : "root-unreadable",
          "a directory could not be enumerated",
        ),
      });
      return;
    }
    h += 1;
    const z = _ === null ? 1 : Yt(N, _.directory);
    let M;
    z > 0 ? (M = "") : z === 0 ? (M = _?.afterName ?? null) : (M = null);
    const F = C - E,
      A = [];
    let U = !1;
    const K = [],
      j = [],
      X = new Map();
    try {
      for await (const I of B) {
        if (f()) {
          v = !0;
          return;
        }
        if ($.isSyncIgnoredName(I.name)) continue;
        if (I.kind === "directory") {
          K.push(I.name);
          continue;
        }
        if (
          ($.isIgnoreConfigName(I.name) && j.push(I.name),
          I.kind !== "file" || M === null || ae(I.name, M) <= 0)
        )
          continue;
        const q = A[F - 1];
        (U && q !== void 0 && ae(I.name, q) > 0) ||
          (A.push(I.name),
          I.listed !== null && X.set(I.name, I.listed),
          A.length >= Math.max(1, F) * 2 &&
            (A.sort(ae), (A.length = F), (U = !0)));
      }
    } catch {
      r.push({
        path: N,
        failure: d.localEnvironment(
          "root-unreadable",
          "a directory listing failed part way through",
        ),
      });
      return;
    }
    ((B = null),
      await t.onEnterDirectory?.(O, N, j),
      A.sort(ae),
      A.length > F && ((A.length = F), (U = !0)),
      (E += A.length));
    for (const I of A) {
      const q = N === "" ? I : `${N}/${I}`;
      if (t.isIgnored?.(q) === !0) {
        i.push({ path: q, reason: "ignored" });
        continue;
      }
      if (
        (o.push({
          absolute: H.join(O, I),
          relative: q,
          listed: X.get(I) ?? null,
        }),
        o.length >= n * 16 && (await b()),
        v)
      )
        return;
    }
    if ((X.clear(), U)) {
      const I = A[A.length - 1];
      if (
        (I !== void 0 && (w = { directory: N, afterName: I }),
        t.stage !== void 0)
      ) {
        T = !0;
        return;
      }
      (await b(),
        r.push({
          path: N,
          failure: d.localEnvironment(
            "scan-incomplete",
            "the walk exceeded its entry bound",
          ),
        }),
        (v = !0));
      return;
    }
    (M !== null && (w = { directory: N, afterName: null }), K.sort(ae));
    const x = [];
    for (const I of K) {
      const q = N === "" ? I : `${N}/${I}`;
      (_ !== null && Yt(q, _.directory) < 0 && !Kr(q, _.directory)) ||
        x.push(H.join(O, I));
    }
    for (let I = 0; I < x.length; I++) {
      for (const q of x.slice(I, I + Wr)) p(q);
      if ((await P(x[I]), v || T)) return;
    }
  };
  (await P(k),
    await Promise.all(c.values()),
    c.clear(),
    await b(),
    f() &&
      ((v = !0),
      r.push({
        path: "",
        failure: d.localEnvironment(
          "scan-incomplete",
          "the walk was cancelled",
        ),
      })));
  const Y = performance.now() - e;
  return r.length > 0 || v
    ? {
        complete: !1,
        staged: !1,
        failures: r,
        found: a,
        directoriesScanned: h,
        filesHashed: g,
        durationMs: Y,
      }
    : (a.sort((O, N) => ae(O.path, N.path)),
      i.sort((O, N) => ae(O.path, N.path)),
      T || _ !== null
        ? {
            complete: !1,
            staged: !0,
            found: a,
            skipped: i,
            next: T ? w : null,
            directoriesScanned: h,
            filesHashed: g,
            durationMs: Y,
          }
        : {
            complete: !0,
            files: a,
            skipped: i,
            directoriesScanned: h,
            filesHashed: g,
            durationMs: Y,
          });
}
function xr(t, e) {
  const n = new Set(t.files.map((i) => i.path)),
    s = new Set(t.skipped.map((i) => i.path)),
    r = [];
  for (const i of e) n.has(i) || s.has(i) || Qr(i, s) || r.push(i);
  return r;
}
function Qr(t, e) {
  let n = t.indexOf("/");
  for (; n !== -1; ) {
    if (e.has(t.slice(0, n))) return !0;
    n = t.indexOf("/", n + 1);
  }
  return !1;
}
function Jr(t) {
  return t === "journal_gap"
    ? "journal-compacted"
    : t === "cursor_ahead"
      ? "sequence-gap"
      : "root-mismatch";
}
function Nn(t, e) {
  switch (t.status) {
    case "current":
      return {
        kind: "converged",
        at: { sequence: t.currentSeq, rootHash: t.serverRootHash },
      };
    case "repair_required":
      return {
        kind: "escalate",
        failure: d.reconcile(
          Jr(t.reason),
          `the journal cannot answer: ${t.reason}`,
        ),
      };
    case "changes": {
      if (t.events.length === 0)
        return {
          kind: "escalate",
          failure: d.reconcile(
            "sequence-gap",
            "the journal reported changes and returned none",
          ),
        };
      let n = e.sequence,
        s = e.rootHash;
      const r = [];
      for (const i of t.events) {
        if (i.prevSeq !== n || i.prevRootHash !== s)
          return {
            kind: "escalate",
            failure: d.reconcile(
              "root-mismatch",
              "the journal events do not chain from here",
            ),
          };
        if (i.newSeq <= i.prevSeq)
          return {
            kind: "escalate",
            failure: d.reconcile(
              "sequence-gap",
              "a journal event did not advance the sequence",
            ),
          };
        for (const a of i.changes) r.push(a);
        ((n = i.newSeq), (s = i.newRootHash));
      }
      return {
        kind: "apply",
        changes: r,
        to: { sequence: n, rootHash: s },
        more: t.hasMore,
      };
    }
  }
}
function Zr(t, e) {
  const n = new Map();
  for (const s of t) {
    if (s.op === "delete") {
      n.set(s.path, null);
      continue;
    }
    if (
      s.op === "move" &&
      s.previousPath !== void 0 &&
      s.previousPath !== s.path
    ) {
      const r = n.has(s.previousPath)
        ? (n.get(s.previousPath) ?? null)
        : e(s.previousPath);
      (n.set(s.previousPath, null), n.set(s.path, s.metadata ?? r));
      continue;
    }
    s.metadata !== void 0 && n.set(s.path, s.metadata);
  }
  return n;
}
function ei(t, e, n, s) {
  if (t.status === "stale_snapshot")
    return Ie({ kind: "restart", reason: "stale_snapshot" });
  if (t.status === "manifest_required")
    return Ie({
      kind: "escalate",
      failure: d.reconcile(
        t.reason === "version_proof_unavailable"
          ? "version-proof-unavailable"
          : "stale-snapshot",
        `the descent cannot answer: ${t.reason}`,
      ),
    });
  const r = [],
    i = [],
    a = [],
    o = [];
  let l = { kind: "none" };
  const c = Hn(e.keys());
  for (const m of t.childrenByDirectory) {
    if (m.children.length > d.SYNC_V2_BOUNDS.frontierMaxChildrenPerDirectory)
      return Ie({
        kind: "escalate",
        failure: d.integrity(
          "impossible-root",
          `frontier:oversized:${m.path}`,
          "a frontier directory exceeded the children bound",
        ),
      });
    const R = new Set();
    let h = null,
      g = 0,
      E = 0;
    for (const v of m.children) {
      if (h !== null && d.compareSyncPaths(h, v.path) >= 0)
        return Ie({
          kind: "escalate",
          failure: d.integrity(
            "impossible-root",
            `frontier:unordered:${m.path}`,
            "frontier children were not in bytewise path order",
          ),
        });
      ((h = v.path),
        R.add(`${v.type}:${v.path}`),
        v.type === "directory"
          ? n.get(v.path) !== v.hash && (r.push(v.path), (g += 1))
          : e.get(v.path) !== v.leafHash && (i.push(v.path), (E += 1)));
    }
    for (const v of c.get(m.path) ?? [])
      R.has(`file:${v}`) || (a.push(v), (E += 1));
    for (const v of s.get(m.path) ?? [])
      R.has(`directory:${v}`) || (o.push(v), (E += 1));
    g === 0 &&
      (l = Cn(l, {
        kind: "stopped",
        depth: m.path === "" ? 0 : m.path.split("/").length,
        differingEntries: E,
      }));
  }
  (r.sort(d.compareSyncPaths),
    i.sort(d.compareSyncPaths),
    a.sort(d.compareSyncPaths),
    o.sort(d.compareSyncPaths));
  let p;
  return (
    r.length > 0
      ? (p = { kind: "descend", directories: r })
      : i.length > 0
        ? (p = { kind: "read", paths: i })
        : (p = {
            kind: "converged",
            at: { sequence: t.currentSeq, rootHash: t.serverRootHash },
          }),
    { step: p, descend: r, diverged: i, gone: a, goneDirectories: o, stop: l }
  );
}
function Ie(t) {
  return {
    step: t,
    descend: [],
    diverged: [],
    gone: [],
    goneDirectories: [],
    stop: { kind: "none" },
  };
}
function Cn(t, e) {
  return e.kind === "none" ? t : t.kind === "none" || e.depth < t.depth ? e : t;
}
function Hn(t) {
  const e = new Map();
  for (const n of t) {
    if (n === "") continue;
    const s = ie(n);
    let r = e.get(s);
    (r === void 0 && ((r = []), e.set(s, r)), r.push(n));
  }
  return e;
}
function ti(t) {
  if (t.status === "stale_snapshot")
    return { kind: "restart", reason: "stale_snapshot" };
  let e = null;
  for (const n of t.entries) {
    if (e !== null && d.compareSyncPaths(e, n.path) >= 0)
      return {
        kind: "escalate",
        failure: d.integrity(
          "impossible-root",
          "manifest:unordered",
          "manifest entries were not in bytewise path order",
        ),
      };
    e = n.path;
  }
  return t.nextCursor !== null
    ? { kind: "page", cursor: t.nextCursor }
    : {
        kind: "converged",
        at: { sequence: t.currentSeq, rootHash: t.serverRootHash },
      };
}
var Ne = {},
  Kt;
function ni() {
  if (Kt) return Ne;
  ((Kt = 1),
    Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne.default = R));
  const t = "diff-sequences",
    e = 0,
    n = (h, g, E, v, f) => {
      let k = 0;
      for (; h < g && E < v && f(h, E); ) ((h += 1), (E += 1), (k += 1));
      return k;
    },
    s = (h, g, E, v, f) => {
      let k = 0;
      for (; h <= g && E <= v && f(g, v); ) ((g -= 1), (v -= 1), (k += 1));
      return k;
    },
    r = (h, g, E, v, f, k, b) => {
      let _ = 0,
        C = -h,
        w = k[_],
        T = w;
      k[_] += n(w + 1, g, v + w - C + 1, E, f);
      const P = h < b ? h : b;
      for (_ += 1, C += 2; _ <= P; _ += 1, C += 2) {
        if (_ !== h && T < k[_]) w = k[_];
        else if (((w = T + 1), g <= w)) return _ - 1;
        ((T = k[_]), (k[_] = w + n(w + 1, g, v + w - C + 1, E, f)));
      }
      return b;
    },
    i = (h, g, E, v, f, k, b) => {
      let _ = 0,
        C = h,
        w = k[_],
        T = w;
      k[_] -= s(g, w - 1, E, v + w - C - 1, f);
      const P = h < b ? h : b;
      for (_ += 1, C -= 2; _ <= P; _ += 1, C -= 2) {
        if (_ !== h && k[_] < T) w = k[_];
        else if (((w = T - 1), w < g)) return _ - 1;
        ((T = k[_]), (k[_] = w - s(g, w - 1, E, v + w - C - 1, f)));
      }
      return b;
    },
    a = (h, g, E, v, f, k, b, _, C, w, T) => {
      const P = v - g,
        Y = E - g,
        N = f - v - Y,
        B = -N - (h - 1),
        z = -N + (h - 1);
      let M = e;
      const F = h < _ ? h : _;
      for (let A = 0, U = -h; A <= F; A += 1, U += 2) {
        const K = A === 0 || (A !== h && M < b[A]),
          j = K ? b[A] : M,
          X = K ? j : j + 1,
          x = P + X - U,
          I = n(X + 1, E, x + 1, f, k),
          q = X + I;
        if (((M = b[A]), (b[A] = q), B <= U && U <= z)) {
          const le = (h - 1 - (U + N)) / 2;
          if (le <= w && C[le] - 1 <= q) {
            const se = P + j - (K ? U + 1 : U - 1),
              J = s(g, j, v, se, k),
              re = j - J,
              _e = se - J,
              he = re + 1,
              je = _e + 1;
            ((T.nChangePreceding = h - 1),
              h - 1 === he + je - g - v
                ? ((T.aEndPreceding = g), (T.bEndPreceding = v))
                : ((T.aEndPreceding = he), (T.bEndPreceding = je)),
              (T.nCommonPreceding = J),
              J !== 0 && ((T.aCommonPreceding = he), (T.bCommonPreceding = je)),
              (T.nCommonFollowing = I),
              I !== 0 &&
                ((T.aCommonFollowing = X + 1), (T.bCommonFollowing = x + 1)));
            const Rt = q + 1,
              It = x + I + 1;
            return (
              (T.nChangeFollowing = h - 1),
              h - 1 === E + f - Rt - It
                ? ((T.aStartFollowing = E), (T.bStartFollowing = f))
                : ((T.aStartFollowing = Rt), (T.bStartFollowing = It)),
              !0
            );
          }
        }
      }
      return !1;
    },
    o = (h, g, E, v, f, k, b, _, C, w, T) => {
      const P = f - E,
        Y = E - g,
        N = f - v - Y,
        B = N - h,
        z = N + h;
      let M = e;
      const F = h < w ? h : w;
      for (let A = 0, U = h; A <= F; A += 1, U -= 2) {
        const K = A === 0 || (A !== h && C[A] < M),
          j = K ? C[A] : M,
          X = K ? j : j - 1,
          x = P + X - U,
          I = s(g, X - 1, v, x - 1, k),
          q = X - I;
        if (((M = C[A]), (C[A] = q), B <= U && U <= z)) {
          const le = (h + (U - N)) / 2;
          if (le <= _ && q - 1 <= b[le]) {
            const se = x - I;
            if (
              ((T.nChangePreceding = h),
              h === q + se - g - v
                ? ((T.aEndPreceding = g), (T.bEndPreceding = v))
                : ((T.aEndPreceding = q), (T.bEndPreceding = se)),
              (T.nCommonPreceding = I),
              I !== 0 && ((T.aCommonPreceding = q), (T.bCommonPreceding = se)),
              (T.nChangeFollowing = h - 1),
              h === 1)
            )
              ((T.nCommonFollowing = 0),
                (T.aStartFollowing = E),
                (T.bStartFollowing = f));
            else {
              const J = P + j - (K ? U - 1 : U + 1),
                re = n(j, E, J, f, k);
              ((T.nCommonFollowing = re),
                re !== 0 &&
                  ((T.aCommonFollowing = j), (T.bCommonFollowing = J)));
              const _e = j + re,
                he = J + re;
              h - 1 === E + f - _e - he
                ? ((T.aStartFollowing = E), (T.bStartFollowing = f))
                : ((T.aStartFollowing = _e), (T.bStartFollowing = he));
            }
            return !0;
          }
        }
      }
      return !1;
    },
    l = (h, g, E, v, f, k, b, _, C) => {
      const w = v - g,
        T = f - E,
        P = E - g,
        Y = f - v,
        O = Y - P;
      let N = P,
        B = P;
      if (((b[0] = g - 1), (_[0] = E), O % 2 === 0)) {
        const z = (h || O) / 2,
          M = (P + Y) / 2;
        for (let F = 1; F <= M; F += 1)
          if (((N = r(F, E, f, w, k, b, N)), F < z)) B = i(F, g, v, T, k, _, B);
          else if (o(F, g, E, v, f, k, b, N, _, B, C)) return;
      } else {
        const z = ((h || O) + 1) / 2,
          M = (P + Y + 1) / 2;
        let F = 1;
        for (N = r(F, E, f, w, k, b, N), F += 1; F <= M; F += 1)
          if (((B = i(F - 1, g, v, T, k, _, B)), F < z))
            N = r(F, E, f, w, k, b, N);
          else if (a(F, g, E, v, f, k, b, N, _, B, C)) return;
      }
      throw new Error(
        `${t}: no overlap aStart=${g} aEnd=${E} bStart=${v} bEnd=${f}`,
      );
    },
    c = (h, g, E, v, f, k, b, _, C, w) => {
      if (f - v < E - g) {
        if (((k = !k), k && b.length === 1)) {
          const { foundSubsequence: q, isCommon: le } = b[0];
          b[1] = {
            foundSubsequence: (se, J, re) => {
              q(se, re, J);
            },
            isCommon: (se, J) => le(J, se),
          };
        }
        const x = g,
          I = E;
        ((g = v), (E = f), (v = x), (f = I));
      }
      const { foundSubsequence: T, isCommon: P } = b[k ? 1 : 0];
      l(h, g, E, v, f, P, _, C, w);
      const {
        nChangePreceding: Y,
        aEndPreceding: O,
        bEndPreceding: N,
        nCommonPreceding: B,
        aCommonPreceding: z,
        bCommonPreceding: M,
        nCommonFollowing: F,
        aCommonFollowing: A,
        bCommonFollowing: U,
        nChangeFollowing: K,
        aStartFollowing: j,
        bStartFollowing: X,
      } = w;
      (g < O && v < N && c(Y, g, O, v, N, k, b, _, C, w),
        B !== 0 && T(B, z, M),
        F !== 0 && T(F, A, U),
        j < E && X < f && c(K, j, E, X, f, k, b, _, C, w));
    },
    p = (h, g) => {
      if (typeof g != "number")
        throw new TypeError(`${t}: ${h} typeof ${typeof g} is not a number`);
      if (!Number.isSafeInteger(g))
        throw new RangeError(`${t}: ${h} value ${g} is not a safe integer`);
      if (g < 0)
        throw new RangeError(`${t}: ${h} value ${g} is a negative integer`);
    },
    m = (h, g) => {
      const E = typeof g;
      if (E !== "function")
        throw new TypeError(`${t}: ${h} typeof ${E} is not a function`);
    };
  function R(h, g, E, v) {
    (p("aLength", h),
      p("bLength", g),
      m("isCommon", E),
      m("foundSubsequence", v));
    const f = n(0, h, 0, g, E);
    if ((f !== 0 && v(f, 0, 0), h !== f || g !== f)) {
      const k = f,
        b = f,
        _ = s(k, h - 1, b, g - 1, E),
        C = h - _,
        w = g - _,
        T = f + _;
      (h !== T &&
        g !== T &&
        c(0, k, C, b, w, !1, [{ foundSubsequence: v, isCommon: E }], [e], [e], {
          aCommonFollowing: e,
          aCommonPreceding: e,
          aEndPreceding: e,
          aStartFollowing: e,
          bCommonFollowing: e,
          bCommonPreceding: e,
          bEndPreceding: e,
          bStartFollowing: e,
          nChangeFollowing: e,
          nChangePreceding: e,
          nCommonFollowing: e,
          nCommonPreceding: e,
        }),
        _ !== 0 && v(_, C, w));
    }
  }
  return Ne;
}
var si = ni();
const ri = rs.getDefaultExportFromCjs(si);
function ii(t, e) {
  const n = [];
  let s = 0,
    r = 0;
  const i = (a, o) => {
    (a > s || o > r) && n.push({ buffer1: [s, a - s], buffer2: [r, o - r] });
  };
  return (
    ri(
      t.length,
      e.length,
      (a, o) => t[a] === e[o],
      (a, o, l) => {
        (i(o, l), (s = o + a), (r = l + a));
      },
    ),
    i(t.length, e.length),
    n
  );
}
function ai(t, e, n) {
  const s = [],
    r = (c, p) => {
      for (const m of ii(e, p))
        s.push({
          side: c,
          oStart: m.buffer1[0],
          oLength: m.buffer1[1],
          sideStart: m.buffer2[0],
          sideLength: m.buffer2[1],
        });
    };
  (r("a", t), r("b", n), s.sort((c, p) => c.oStart - p.oStart));
  const i = [];
  let a = 0;
  const o = (c) => {
    c > a &&
      (i.push({
        stable: !0,
        buffer: "o",
        bufferStart: a,
        bufferLength: c - a,
        bufferContent: e.slice(a, c),
      }),
      (a = c));
  };
  let l = 0;
  for (; l < s.length; ) {
    const c = s[l];
    l += 1;
    const p = c.oStart;
    let m = c.oStart + c.oLength;
    const R = [c];
    for (o(p); l < s.length && s[l].oStart <= m; ) {
      const h = s[l];
      ((l += 1), (m = Math.max(m, h.oStart + h.oLength)), R.push(h));
    }
    if (R.length === 1) {
      if (c.sideLength > 0) {
        const h = c.side === "a" ? t : n;
        i.push({
          stable: !0,
          buffer: c.side,
          bufferStart: c.sideStart,
          bufferLength: c.sideLength,
          bufferContent: h.slice(c.sideStart, c.sideStart + c.sideLength),
        });
      }
    } else {
      const h = {
        a: [t.length, -1, e.length, -1],
        b: [n.length, -1, e.length, -1],
      };
      for (const k of R) {
        const b = h[k.side];
        ((b[0] = Math.min(k.sideStart, b[0])),
          (b[1] = Math.max(k.sideStart + k.sideLength, b[1])),
          (b[2] = Math.min(k.oStart, b[2])),
          (b[3] = Math.max(k.oStart + k.oLength, b[3])));
      }
      const g = h.a[0] + (p - h.a[2]),
        E = h.a[1] + (m - h.a[3]),
        v = h.b[0] + (p - h.b[2]),
        f = h.b[1] + (m - h.b[3]);
      i.push({
        stable: !1,
        aStart: g,
        aLength: E - g,
        aContent: t.slice(g, E),
        oStart: p,
        oLength: m - p,
        oContent: e.slice(p, m),
        bStart: v,
        bLength: f - v,
        bContent: n.slice(v, f),
      });
    }
    a = m;
  }
  return (o(e.length), i);
}
function oi(t, e, n) {
  const s = [];
  let r = [];
  const i = (l) => {
      for (const c of l) r.push(c);
    },
    a = () => {
      r.length > 0 && (s.push({ ok: r }), (r = []));
    },
    o = (l, c) => l.length === c.length && l.every((p, m) => p === c[m]);
  for (const l of ai(t, e, n)) {
    if (l.stable) {
      i(l.bufferContent);
      continue;
    }
    if (o(l.aContent, l.bContent)) {
      i(l.aContent);
      continue;
    }
    (a(),
      s.push({ conflict: { a: l.aContent, o: l.oContent, b: l.bContent } }));
  }
  return (a(), s);
}
function li(t, e) {
  if (e.cachedVersion !== null) {
    if (t.version < e.cachedVersion) return { kind: "stale" };
    if (t.version === e.cachedVersion && t.contentHash === e.cachedHash)
      return { kind: "idempotent" };
  }
  return e.draftOpen
    ? { kind: "keep-local", reason: "draft-open", remoteVersion: t.version }
    : e.pendingIntent === "delete" || e.pendingIntent === "move"
      ? {
          kind: "keep-local",
          reason:
            e.pendingIntent === "delete" ? "pending-delete" : "pending-move",
          remoteVersion: t.version,
        }
      : t.op !== "delete" &&
          e.localHash !== null &&
          e.localHash === t.contentHash
        ? { kind: "adopt" }
        : e.localHash !== null && e.localHash !== e.cachedHash
          ? e.localEditStale
            ? t.op !== "delete" && e.mergeable
              ? { kind: "merge", remoteVersion: t.version }
              : { kind: "discard-local", remoteVersion: t.version }
            : t.op === "delete"
              ? { kind: "recreate", remoteVersion: t.version }
              : e.mergeable
                ? { kind: "merge", remoteVersion: t.version }
                : e.pendingIntent === "blocked-write"
                  ? { kind: "rebase", remoteVersion: t.version }
                  : {
                      kind: "keep-local",
                      reason:
                        e.pendingIntent === "write"
                          ? "pending-write"
                          : "binary",
                      remoteVersion: t.version,
                    }
          : e.pendingIntent === null
            ? { kind: "apply" }
            : e.pendingIntent === "blocked-write"
              ? { kind: "supersede" }
              : {
                  kind: "keep-local",
                  reason: "pending-write",
                  remoteVersion: t.version,
                };
}
function ci(t, e, n) {
  const s = [];
  let r = 0;
  for (const i of oi(
    e.split(`
`),
    t.split(`
`),
    n.split(`
`),
  ))
    if ("ok" in i) for (const a of i.ok) s.push(a);
    else {
      r += 1;
      for (const a of i.conflict.a) s.push(a);
    }
  return {
    merged: s.join(`
`),
    overlaps: r,
  };
}
function An(t, e, n, s, r = 0) {
  return t.kind === "merge"
    ? r === 0
      ? null
      : {
          path: e.path,
          resolvedAt: s,
          outcome: "merged-text",
          remoteVersion: t.remoteVersion,
          localContentHash: e.localHash ?? "",
          remoteContentHash: n.contentHash,
        }
    : t.kind === "keep-local" && t.reason === "binary"
      ? {
          path: e.path,
          resolvedAt: s,
          outcome: "kept-local-binary",
          remoteVersion: t.remoteVersion,
          localContentHash: e.localHash ?? "",
          remoteContentHash: n.contentHash,
        }
      : t.kind === "discard-local"
        ? {
            path: e.path,
            resolvedAt: s,
            outcome: "kept-remote",
            remoteVersion: t.remoteVersion,
            localContentHash: e.localHash ?? "",
            remoteContentHash: n.contentHash,
          }
        : null;
}
function Ln(t, e) {
  return e - t >= d.ENGINE_BOUNDS.staleLocalEditMs;
}
const ui = {
  lookahead: 400,
  transfers: 8,
  batchReads: 2,
  batchSize: 50,
  batchInlineBytes: 4 * 1024 * 1024,
  stagedBytes: 256 * 1024 * 1024,
};
function di(t) {
  return t.class === "retryable" || t.class === "auth-blocked";
}
function hi(t) {
  return Z.createHash("sha256").update(t).digest("hex");
}
class pi {
  constructor(e) {
    ((this.options = e),
      (this.bounds = { ...ui, ...e.bounds }),
      e.signal.aborted
        ? this.controller.abort()
        : e.signal.addEventListener("abort", this.onAbort, { once: !0 }),
      this.pump());
  }
  bounds;
  entries = new Map();
  controller = new AbortController();
  stagedFiles = new Set();
  tasks = new Set();
  busyPaths = new Set();
  resolveQueue = [];
  cursor = 0;
  planned = 0;
  planning = !1;
  transferScan = 0;
  activeTransfers = 0;
  activeBatches = 0;
  committedBytes = 0;
  batchesDisabled = !1;
  transfersDisabled = !1;
  closed = !1;
  onAbort = () => this.controller.abort();
  async take(e) {
    if (this.closed) return null;
    this.cursor = Math.max(this.cursor, e);
    const n = this.entryAt(e);
    return ((n.waiting = !0), this.pump(), await n.done, n.result);
  }
  async release(e) {
    const n = this.entries.get(e);
    n !== void 0 &&
      (this.entries.delete(e),
      n.staged !== null &&
        (this.stagedFiles.delete(n.staged.file),
        await S.rm(n.staged.file, { force: !0 }).catch(() => {})),
      this.uncommit(n),
      this.pump());
  }
  async dispose() {
    if (!this.closed) {
      ((this.closed = !0),
        this.options.signal.removeEventListener("abort", this.onAbort),
        this.controller.abort());
      for (const e of this.entries.values()) this.settle(e, null);
      for (this.resolveQueue = []; this.tasks.size > 0; )
        await Promise.allSettled(this.tasks);
      (await Promise.all(
        [...this.stagedFiles].map((e) =>
          S.rm(e, { force: !0 }).catch(() => {}),
        ),
      ),
        this.stagedFiles.clear());
    }
  }
  entryAt(e) {
    const n = this.entries.get(e);
    if (n !== void 0) return n;
    let s = () => {};
    const i = {
      plan: null,
      stage: "unplanned",
      resolved: null,
      transfer: null,
      staged: null,
      committed: 0,
      busy: !1,
      waiting: !1,
      result: null,
      done: new Promise((a) => {
        s = a;
      }),
      settle: s,
    };
    return (this.entries.set(e, i), i);
  }
  settle(e, n) {
    e.stage !== "settled" &&
      ((e.stage = "settled"), (e.result = n), e.settle());
  }
  uncommit(e) {
    ((this.committedBytes -= e.committed),
      (e.committed = 0),
      e.busy &&
        e.transfer !== null &&
        (this.busyPaths.delete(e.transfer.path), (e.busy = !1)));
  }
  track(e) {
    const n = e.catch(() => {}).finally(() => this.tasks.delete(n));
    this.tasks.add(n);
  }
  windowEnd() {
    return Math.min(
      this.options.changes.length,
      this.cursor + this.bounds.lookahead,
    );
  }
  pump() {
    this.closed ||
      (this.planAhead(), this.dispatchBatches(), this.startTransfers());
  }
  planAhead() {
    this.planning ||
      this.planned >= this.windowEnd() ||
      ((this.planning = !0),
      this.track(
        (async () => {
          try {
            for (; !this.closed && this.planned < this.windowEnd(); ) {
              const e = this.planned,
                n = this.options.changes[e];
              let s;
              try {
                s = await this.options.plan(n);
              } catch {
                s = { kind: "none" };
              }
              if (this.closed) return;
              ((this.planned = e + 1),
                this.admit(this.entryAt(e), s),
                this.dispatchBatches(),
                this.startTransfers());
            }
          } finally {
            this.planning = !1;
          }
          this.pump();
        })(),
      ));
  }
  admit(e, n) {
    if (((e.plan = n), n.kind === "none")) {
      this.settle(e, null);
      return;
    }
    if (n.kind === "fetch") {
      ((e.transfer = {
        path: n.path,
        url: n.url,
        range: n.range,
        sizeBytes: n.sizeBytes,
        contentHash: n.contentHash,
      }),
        (e.stage = "ready"));
      return;
    }
    if (this.batchesDisabled) {
      this.settle(e, null);
      return;
    }
    ((e.stage = "resolving"), this.resolveQueue.push(e));
  }
  dispatchBatches() {
    for (
      ;
      !this.closed &&
      this.activeBatches < this.bounds.batchReads &&
      this.resolveQueue.length > 0;

    ) {
      const e = this.resolveQueue.length >= this.bounds.batchSize,
        n = !this.planning && this.planned >= this.windowEnd();
      if (!e && !n) return;
      const s = this.resolveQueue.splice(0, this.bounds.batchSize);
      ((this.activeBatches += 1),
        this.track(
          this.runBatch(s).finally(() => {
            ((this.activeBatches -= 1), this.pump());
          }),
        ));
    }
  }
  async runBatch(e) {
    const n = e.map((i) => i.plan),
      s = await this.options.transport.readFiles(
        n.map((i) => i.path),
        this.bounds.batchInlineBytes,
        this.controller.signal,
      );
    if (!s.ok) {
      this.batchesDisabled = !0;
      for (const i of e) this.settle(i, null);
      for (const i of this.resolveQueue) this.settle(i, null);
      this.resolveQueue = [];
      return;
    }
    const r = s.value.files;
    for (let i = 0; i < e.length; i += 1) {
      const a = e[i],
        o = n[i];
      if (this.closed) return;
      const l = r[i],
        c = fi(l, o);
      if (l === void 0 || c === null) {
        this.settle(a, null);
        continue;
      }
      if (!o.stageBytes) {
        this.settle(a, { kind: "resolved", read: c, staged: null });
        continue;
      }
      if (typeof l.content == "string") {
        await this.stageInline(a, o.path, c, l.content);
        continue;
      }
      if (c.presignedReadUrl !== void 0) {
        ((a.resolved = c),
          (a.transfer = {
            path: o.path,
            url: c.presignedReadUrl,
            range:
              c.packOffset !== void 0 && c.packSize !== void 0
                ? { start: c.packOffset, end: c.packOffset + c.packSize - 1 }
                : void 0,
            sizeBytes: c.sizeBytes,
            contentHash: c.contentHash,
          }),
          (a.stage = "ready"));
        continue;
      }
      this.settle(a, { kind: "resolved", read: c, staged: null });
    }
    this.startTransfers();
  }
  async stageInline(e, n, s, r) {
    const i = Buffer.from(r, "base64");
    if (
      (this.options.recordDownload(n, i.byteLength),
      hi(i) !== s.contentHash || i.byteLength !== s.sizeBytes)
    ) {
      this.settle(e, null);
      return;
    }
    const a = this.options.stagingPath();
    this.stagedFiles.add(a);
    try {
      await S.writeFile(a, i);
    } catch {
      (this.stagedFiles.delete(a),
        await S.rm(a, { force: !0 }).catch(() => {}),
        this.settle(e, { kind: "resolved", read: s, staged: null }));
      return;
    }
    ((e.staged = { file: a, sizeBytes: i.byteLength, sha256: s.contentHash }),
      (e.committed = i.byteLength),
      (this.committedBytes += i.byteLength),
      !this.closed &&
        (this.options.progress.beginDownload(n, i.byteLength),
        this.options.progress.finishDownload(n),
        this.settle(e, { kind: "resolved", read: s, staged: e.staged })));
  }
  startTransfers() {
    for (let e = this.transferScan; e < this.planned && !this.closed; e += 1) {
      const n = this.entries.get(e);
      if (n === void 0 || n.stage === "settled" || n.stage === "transferring") {
        e === this.transferScan && (this.transferScan += 1);
        continue;
      }
      if (n.stage !== "ready") return;
      const r = n.transfer;
      if (this.transfersDisabled) {
        (this.settle(n, this.withoutBytes(n)),
          e === this.transferScan && (this.transferScan += 1));
        continue;
      }
      if (
        !n.waiting &&
        (this.activeTransfers >= this.bounds.transfers ||
          (this.committedBytes > 0 &&
            this.committedBytes + r.sizeBytes > this.bounds.stagedBytes) ||
          this.busyPaths.has(r.path))
      )
        return;
      (this.begin(n, r), e === this.transferScan && (this.transferScan += 1));
    }
  }
  withoutBytes(e) {
    return e.resolved === null
      ? null
      : { kind: "resolved", read: e.resolved, staged: null };
  }
  begin(e, n) {
    ((e.stage = "transferring"),
      (e.committed = n.sizeBytes),
      (this.committedBytes += n.sizeBytes),
      (this.activeTransfers += 1),
      this.busyPaths.has(n.path) ||
        (this.busyPaths.add(n.path), (e.busy = !0)));
    const s = this.options.stagingPath();
    (this.stagedFiles.add(s),
      this.options.progress.beginDownload(n.path, n.sizeBytes),
      this.track(
        (async () => {
          const r = await this.options.transport.fetchToFile(
            n.url,
            n.range,
            s,
            this.controller.signal,
            (a) => this.options.progress.progressDownload(n.path, a),
          );
          ((this.activeTransfers -= 1),
            !r.ok && di(r.failure) && (this.transfersDisabled = !0),
            r.ok && this.options.recordDownload(n.path, r.value.sizeBytes),
            r.ok &&
            r.value.sha256 === n.contentHash &&
            r.value.sizeBytes === n.sizeBytes &&
            !this.closed
              ? ((e.staged = {
                  file: s,
                  sizeBytes: r.value.sizeBytes,
                  sha256: r.value.sha256,
                }),
                this.options.progress.finishDownload(n.path),
                this.settle(
                  e,
                  e.resolved === null
                    ? { kind: "staged", staged: e.staged }
                    : { kind: "resolved", read: e.resolved, staged: e.staged },
                ))
              : (this.options.progress.abandonDownload(n.path),
                this.stagedFiles.delete(s),
                await S.rm(s, { force: !0 }).catch(() => {}),
                this.uncommit(e),
                this.settle(e, this.withoutBytes(e))),
            this.pump());
        })(),
      ));
  }
}
function fi(t, e) {
  if (
    t === void 0 ||
    t.path !== e.path ||
    t.notFound === !0 ||
    !Number.isSafeInteger(t.version) ||
    t.version <= 0 ||
    typeof t.contentHash != "string" ||
    t.contentHash === "" ||
    !Number.isSafeInteger(t.sizeBytes) ||
    t.sizeBytes < 0 ||
    (e.expect !== null &&
      (t.version !== e.expect.version ||
        t.contentHash !== e.expect.contentHash))
  )
    return null;
  const n =
    Number.isSafeInteger(t.packOffset) && Number.isSafeInteger(t.packSize)
      ? { packOffset: t.packOffset, packSize: t.packSize }
      : {};
  return {
    version: t.version,
    contentHash: t.contentHash,
    sizeBytes: t.sizeBytes,
    ...(typeof t.presignedReadUrl == "string"
      ? { presignedReadUrl: t.presignedReadUrl }
      : {}),
    ...n,
  };
}
function mi(t, e) {
  const n = H.relative(t, e);
  return (
    n === "" || (n !== ".." && !n.startsWith(`..${H.sep}`) && !H.isAbsolute(n))
  );
}
function qe(t, e) {
  if (e.length === 0 || e.includes("\\")) return null;
  const n = H.resolve(t),
    s = H.resolve(n, e);
  return mi(n, s) ? s : null;
}
async function gi(t, e) {
  const n = $.parseRemoteSyncPath(e);
  if (n === null) return { kind: "unsafe" };
  const s = qe(t, n);
  if (s === null) return { kind: "unsafe" };
  try {
    await S.stat(t);
  } catch {
    return { kind: "unavailable" };
  }
  try {
    if (await d.crossesLink(t, s)) return { kind: "unsafe" };
  } catch (r) {
    const i = r instanceof Error && "code" in r ? r.code : void 0;
    return { kind: "unavailable", code: typeof i == "string" ? i : void 0 };
  }
  return { kind: "resolved", relative: n, absolute: s };
}
const at = "0".repeat(64);
class vi {
  uploading = new Set();
  uploadsCompleted = 0;
  uploadsTotal = 0;
  downloadsActive = 0;
  downloadsCompleted = 0;
  downloadsTotal = 0;
  downloading = new Map();
  listener = null;
  onChange(e) {
    this.listener = e;
  }
  expectUploads(e) {
    ((this.uploadsTotal = Math.max(
      this.uploadsTotal,
      this.uploadsCompleted + e,
    )),
      this.changed());
  }
  beginUpload(e) {
    (this.uploading.add(e),
      (this.uploadsTotal = Math.max(
        this.uploadsTotal,
        this.uploadsCompleted + this.uploading.size,
      )),
      this.changed());
  }
  finishUpload(e) {
    this.uploading.delete(e) && ((this.uploadsCompleted += 1), this.changed());
  }
  releaseUpload(e) {
    this.uploading.delete(e) && this.changed();
  }
  expectDownloads(e) {
    ((this.downloadsTotal = Math.max(
      this.downloadsTotal,
      this.downloadsCompleted + e,
    )),
      this.changed());
  }
  trimExpectedDownloads() {
    this.downloadsActive > 0 ||
      ((this.downloadsTotal = this.downloadsCompleted), this.changed());
  }
  beginDownload(e, n) {
    (this.downloading.has(e) ||
      ((this.downloadsActive += 1),
      (this.downloadsTotal = Math.max(
        this.downloadsTotal,
        this.downloadsCompleted + this.downloadsActive,
      ))),
      this.downloading.set(e, { sizeBytes: n, receivedBytes: 0 }),
      this.changed());
  }
  progressDownload(e, n) {
    const s = this.downloading.get(e);
    s !== void 0 &&
      ((s.receivedBytes = Math.min(n, s.sizeBytes)), this.changed());
  }
  finishDownload(e) {
    this.downloading.delete(e) &&
      ((this.downloadsActive = Math.max(0, this.downloadsActive - 1)),
      (this.downloadsCompleted += 1),
      this.changed());
  }
  abandonDownload(e) {
    this.downloading.delete(e) &&
      ((this.downloadsActive = Math.max(0, this.downloadsActive - 1)),
      this.changed());
  }
  settle(e) {
    (this.uploading.clear(),
      this.downloading.clear(),
      (this.downloadsActive = 0),
      e.uploads || ((this.uploadsCompleted = 0), (this.uploadsTotal = 0)),
      e.downloads ||
        ((this.downloadsCompleted = 0), (this.downloadsTotal = 0)));
  }
  snapshot(e) {
    let n = 0;
    const s = [];
    for (const [r, i] of this.downloading)
      (i.sizeBytes > 0 && (n += i.receivedBytes / i.sizeBytes),
        s.push({
          path: r,
          sizeBytes: i.sizeBytes,
          receivedBytes: i.receivedBytes,
        }));
    return (
      s.sort((r, i) => i.sizeBytes - r.sizeBytes),
      {
        outbox: {
          active: this.uploading.size,
          completed: this.uploadsCompleted,
          total: this.uploadsTotal,
        },
        downloads: {
          active: this.downloadsActive,
          completed: this.downloadsCompleted,
          total: this.downloadsTotal,
          inFlightFraction: n,
          currentFiles: s.slice(0, e),
        },
      }
    );
  }
  changed() {
    this.listener?.();
  }
}
function On(t) {
  const e = t.versionMetadata;
  return e === void 0 || e.presignedReadUrl === void 0
    ? null
    : e.packOffset !== null &&
        e.packOffset !== void 0 &&
        e.packSize !== null &&
        e.packSize !== void 0
      ? {
          sizeBytes: e.sizeBytes,
          presignedReadUrl: e.presignedReadUrl,
          packOffset: e.packOffset,
          packSize: e.packSize,
        }
      : { sizeBytes: e.sizeBytes, presignedReadUrl: e.presignedReadUrl };
}
function tt(t) {
  return {
    changes: [],
    target: null,
    more: !1,
    startupSequence: null,
    serverSequence: null,
    hintedSequence: null,
    descend: [],
    failedManifest: null,
    treeChecked: !1,
    frontierStop: { kind: "none" },
    withheld: 0,
    admittedLocalWork: !1,
    readThrough: t,
  };
}
function Dn(t) {
  const e = t.outbox.counts();
  return e.pending + e.inFlight > 0;
}
function $e(t) {
  ((t.position = null), t.held.clear());
}
function xt(t, e, n) {
  if (!n) {
    t.readThrough.held.delete(e.path);
    return;
  }
  t.readThrough.held.set(e.path, e.kind === "known" ? { ...e, read: null } : e);
}
const Qt = 64,
  wi = 3,
  Jt = 1e5,
  Ei = 64,
  ki = 3,
  bi = 200,
  yi = 1024 * 1024,
  Zt = 500,
  en = 500,
  tn = 3,
  y = (t) => ({ kind: "failed", failure: t }),
  W = { kind: "done" };
function Q(t, e) {
  const n = qe(t.root, e);
  if (n === null) throw new Error("invalid workspace-relative path");
  return n;
}
const Mn = new Set([
  "ENAMETOOLONG",
  "ENOTDIR",
  "EISDIR",
  "ENOTEMPTY",
  "EEXIST",
]);
function Fn(t, e) {
  return d.unlandableVersion(
    "path-unwritable",
    {
      reason: "unlandable",
      path: t.path,
      version: t.version,
      expectedHash: t.contentHash,
    },
    `this device refused the path (${e})`,
  );
}
async function Me(t, e) {
  const n = await gi(t.root, e.path);
  return n.kind === "resolved"
    ? { kind: "resolved", absolute: n.absolute }
    : n.kind === "unsafe"
      ? {
          kind: "unlandable",
          failure: d.unlandableVersion(
            "unsafe-path",
            {
              reason: "unlandable",
              path: e.path,
              version: e.version,
              expectedHash: e.contentHash,
            },
            "the path leads outside the workspace or through a link",
          ),
        }
      : n.code !== void 0 && Mn.has(n.code)
        ? { kind: "unlandable", failure: Fn(e, n.code) }
        : {
            kind: "failed",
            outcome: y(
              d.localEnvironment(
                "root-unreadable",
                "the workspace path could not be resolved safely",
              ),
            ),
          };
}
function ot(t, e) {
  return d.unlandableVersion(
    "content-unavailable",
    {
      reason: "unreadable",
      path: t,
      version: e.version,
      expectedHash: e.contentHash,
    },
    "the server has no content for this version",
  );
}
function Pn(t, e) {
  return (
    e.class === "integrity" &&
    e.held !== void 0 &&
    t.quarantine.withholds(e.held.path, e.held.version, e.held.expectedHash)
  );
}
function ve(t, e, n) {
  return Pn(t, n) ? (e !== null && (e.withheld += 1), null) : y(n);
}
function be(t) {
  return $.isSyncIgnoredPath(t) || Ur(t);
}
function Ce(t, e) {
  try {
    t.remote.apply(
      e.op === "delete"
        ? { kind: "delete", path: e.path, version: e.version }
        : {
            kind: "upsert",
            path: e.path,
            version: e.version,
            contentHash: e.contentHash,
            sizeBytes: e.read?.sizeBytes ?? 0,
            mtimeMs: null,
          },
    );
  } catch (n) {
    return y(L(n));
  }
  return null;
}
async function wt(t, e) {
  const n = t.cache.otherSpellings(e);
  if (n.length === 0) return [];
  const s = await nn(t, e);
  if (s === null) return [];
  const r = [];
  for (const i of n) (await nn(t, i)) === s && r.push(i);
  return r;
}
async function nn(t, e) {
  const n = qe(t.root, e);
  if (n === null) return null;
  const s = await S.lstat(n, { bigint: !0 }).catch(() => null);
  return s === null || !s.isFile() || s.ino === 0n ? null : `${s.dev}:${s.ino}`;
}
async function sn(t) {
  const e = await S.lstat(t, { bigint: !0 }).catch(() => null);
  return e === null || e.ino === 0n ? null : `${e.dev}:${e.ino}`;
}
async function rn(t, e) {
  let n = t;
  for (const s of e.split("/")) {
    const r = await S.readdir(n).catch(() => null);
    if (r === null || !r.includes(s)) return !1;
    n = H.join(n, s);
  }
  return !0;
}
async function oe(t, e) {
  const n = await wt(t, e);
  if (n.length === 0 || (await rn(t.root, e))) return null;
  for (const s of n) if (await rn(t.root, s)) return s;
  return null;
}
async function _i(t, e) {
  if (qe(t.root, e) === null) return e;
  const n = t.cache.get(e);
  if (n !== null && n.contentHash !== "") return (await oe(t, e)) ?? e;
  const s = e.split("/"),
    r = [];
  let i = t.root;
  for (const a of s) {
    const o = await Ti(i, a);
    if (o === null) break;
    (r.push(o), (i = H.join(i, o)));
  }
  return [...r, ...s.slice(r.length)].join("/");
}
async function Ti(t, e) {
  const n = await S.readdir(t).catch(() => null);
  if (n === null) return null;
  if (n.includes(e)) return e;
  const s = await sn(H.join(t, e));
  if (s === null) return null;
  const r = ke(e);
  for (const i of n)
    if (ke(i) === r && (await sn(H.join(t, i))) === s) return i;
  return null;
}
function Un(t, e) {
  for (const n of e) if (t === n || t.startsWith(n + H.sep)) return !0;
  return !1;
}
function L(t) {
  return t instanceof D
    ? t.failure
    : d.invariant(
        "impossible-journal-state",
        t instanceof Error ? t.message : String(t),
      );
}
function Si(t) {
  const e = { position: null, held: new Map() };
  let n = tt(e);
  const s = {
    run: async (r, i) => {
      switch (r.workClass) {
        case "local-events":
          return Ri(t, r, i);
        case "publish-barrier":
          return Ii(t, r, i);
        case "outbox":
          return Ci(t, i);
        case "direct-mutation":
          return Bi(t, r, i);
        case "remote":
          return (
            (n = tt(e)),
            (n.hintedSequence = r.sequenceHint ?? null),
            r.rootHashHint !== void 0 &&
            r.rootHashHint === t.remote.rootHash() &&
            (r.sequenceHint === void 0 ||
              r.sequenceHint <= (t.cache.checkpoint()?.sequence ?? 0))
              ? W
              : Ee(t, n, i)
          );
        case "poll":
          return ((n = tt(e)), Ee(t, n, i));
        case "audit":
          return oa(t, i);
        case "draft-review":
          return W;
      }
    },
    continue: async (r, i) => {
      switch (r) {
        case "operational.working.reading-journal":
        case "operational.reconcile.reading-journal":
          return Ee(t, n, i);
        case "operational.working.applying-delta":
          return Ee(t, n, i);
        case "operational.working.applying-remote":
        case "operational.reconcile.applying-remote":
          return Vi(t, n, i);
        case "operational.working.verifying-root":
        case "operational.reconcile.verifying-root":
          return Ki(t, n, i);
        case "operational.working.descending-frontier":
        case "operational.reconcile.descending-frontier":
          return qi(t, n, i);
        case "operational.working.reconciling-manifest":
        case "operational.reconcile.reconciling-manifest":
          return Wi(t, n, i);
        default:
          return W;
      }
    },
  };
  return {
    run: async (r, i) => an(t, await s.run(r, i)),
    continue: async (r, i) => an(t, await s.continue(r, i)),
  };
}
function an(t, e) {
  const n = t.transfer.drain();
  return Object.keys(n).length === 0
    ? e
    : { ...e, telemetry: { ...e.telemetry, ...n } };
}
async function Ri(t, e, n) {
  let s = !1;
  const r = [],
    i = [],
    a = t.excludedRoots(),
    o = new Uint8Array(256 * 1024),
    l = async (h) => {
      const g = await vt({
        root: t.root,
        subtree: h,
        excludedRoots: a,
        isIgnored: t.isIgnored,
        onEnterDirectory: t.onEnterDirectory,
        known: (E) => t.cache.get(E),
        signal: n.signal,
      });
      if (n.signal.aborted) return y(G());
      for (const E of g.complete ? g.files : g.found) {
        const v = t.cache.get(E.path);
        if (v !== null && v.contentHash === E.contentHash) {
          try {
            t.cache.observeFile(E.path, E.mtimeMs, E.sizeBytes);
          } catch (f) {
            return y(L(f));
          }
          continue;
        }
        (await oe(t, E.path)) === null &&
          i.push({
            path: E.path,
            contentHash: E.contentHash,
            sizeBytes: E.sizeBytes,
            mtimeMs: E.mtimeMs,
            cachedVersion: v?.version ?? null,
          });
      }
      return null;
    };
  for (const h of e.events) {
    if (n.signal.aborted) return y(G());
    if (Un(Q(t, h.relativePath), a)) continue;
    const g = (await t.loadIgnoreRulesFor?.(h.relativePath)) ?? null;
    if (t.isIgnored(h.relativePath)) continue;
    if (g !== null) {
      const f = await l(g);
      if (f !== null) return f;
    }
    const E = t.cache.get(h.relativePath),
      v = await d.readUnlessKnown(t.root, Q(t, h.relativePath), E, {
        kind: "hash",
        buffer: o,
        signal: n.signal,
      });
    if (v.kind === "missing") {
      if (E === null) {
        let f = null;
        for (;;) {
          const k = t.cache.pageUnder(h.relativePath, f, Zt);
          if (k.length === 0) break;
          for (const b of k)
            r.push({
              path: b.path,
              contentHash: b.contentHash,
              version: b.version,
            });
          if (((f = k[k.length - 1]?.path ?? null), k.length < Zt)) break;
        }
        continue;
      }
      r.push({
        path: h.relativePath,
        contentHash: E.contentHash,
        version: E.version,
      });
      continue;
    }
    if (v.kind === "directory") {
      const f = await l(h.relativePath);
      if (f !== null) return f;
      continue;
    }
    if (
      v.kind === "file" &&
      !(v.sizeBytes > d.ENGINE_BOUNDS.maxFileBytes) &&
      (await oe(t, h.relativePath)) === null
    ) {
      if (E !== null && E.contentHash === v.contentHash) {
        if (E.mtimeMs !== v.mtimeMs || E.sizeBytes !== v.sizeBytes)
          try {
            t.cache.observeFile(h.relativePath, v.mtimeMs, v.sizeBytes);
          } catch (f) {
            return y(L(f));
          }
        continue;
      }
      i.push({
        path: h.relativePath,
        contentHash: v.contentHash,
        sizeBytes: v.sizeBytes,
        mtimeMs: v.mtimeMs,
        cachedVersion: E?.version ?? null,
      });
    }
  }
  const c = new Map();
  for (const h of r) {
    const g = c.get(h.contentHash) ?? [];
    (g.push(h), c.set(h.contentHash, g));
  }
  const p = new Map(i.map((h) => [h.path, h])),
    m = new Set(),
    R = new Set();
  try {
    for (const h of p.values()) {
      if (h.cachedVersion !== null) continue;
      const g = c.get(h.contentHash)?.shift();
      g !== void 0 &&
        (t.outbox.admit({
          operationId: t.newOperationId(),
          kind: "move",
          path: h.path,
          sourcePath: g.path,
          expectedHash: h.contentHash,
          baseVersion: g.version,
        }),
        m.add(g.path),
        R.add(h.path),
        (s = !0));
    }
    for (const h of r)
      m.has(h.path) ||
        (t.outbox.admit({
          operationId: t.newOperationId(),
          kind: "delete",
          path: h.path,
          expectedHash: h.contentHash,
          baseVersion: h.version,
        }),
        (s = !0));
    for (const h of p.values())
      R.has(h.path) ||
        (Et(t, {
          path: h.path,
          expectedHash: h.contentHash,
          baseVersion: h.cachedVersion ?? 0,
        }),
        (s = !0));
  } catch (h) {
    return y(L(h));
  }
  return s ? { kind: "done", remainingWork: !0 } : W;
}
function Et(t, e) {
  const n = t.outbox.activeForPath(e.path);
  if (n !== null && n.kind === "write" && n.expectedHash === e.expectedHash)
    return;
  const s = t.holds.admit(e.path, t.clock());
  t.outbox.admit({
    operationId: t.newOperationId(),
    kind: "write",
    path: e.path,
    expectedHash: e.expectedHash,
    baseVersion: e.baseVersion,
    ...(s === null ? {} : { notBefore: s }),
  });
}
async function Ii(t, e, n) {
  const s = await d.readSettled(t.root, Q(t, e.path));
  if (n.signal.aborted) return y(G());
  if (s.kind === "directory" && e.expectedHash === void 0)
    return Ni(t, e.path, n);
  if (s.kind !== "file" || (await oe(t, e.path)) !== null) return W;
  if (e.expectedHash !== void 0 && s.contentHash !== e.expectedHash)
    return y(
      d.integrity(
        "content-hash-mismatch",
        `barrier:${e.path}:${e.expectedHash}`,
        "the file changed between the caller reading it and the barrier running",
        e.path,
      ),
    );
  try {
    const r = t.cache.get(e.path);
    (t.outbox.admit({
      operationId: t.newOperationId(),
      kind: "write",
      path: e.path,
      expectedHash: s.contentHash,
      baseVersion: r?.version ?? 0,
    }),
      t.outbox.liftHold(e.path, t.clock()));
  } catch (r) {
    return y(L(r));
  }
  return { kind: "done", remainingWork: !0 };
}
async function Ni(t, e, n) {
  if (e !== "" && t.isIgnored(e)) return W;
  const s = await vt({
    root: t.root,
    subtree: e,
    excludedRoots: t.excludedRoots(),
    isIgnored: t.isIgnored,
    onEnterDirectory: t.onEnterDirectory,
    known: (r) => t.cache.get(r),
    signal: n.signal,
  });
  if (n.signal.aborted) return y(G());
  try {
    for (const r of s.complete ? s.files : s.found) {
      const i = t.cache.get(r.path);
      (i !== null && i.contentHash === r.contentHash) ||
        ((await oe(t, r.path)) === null &&
          t.outbox.admit({
            operationId: t.newOperationId(),
            kind: "write",
            path: r.path,
            expectedHash: r.contentHash,
            baseVersion: i?.version ?? 0,
          }));
    }
    t.outbox.liftHold(e, t.clock());
  } catch (r) {
    return y(L(r));
  }
  return { kind: "done", remainingWork: !0 };
}
async function Ci(t, e) {
  if (!t.remoteLanded()) return W;
  let n;
  try {
    n = t.outbox.selectDue(t.clock());
  } catch (l) {
    return y(L(l));
  }
  if (n.length === 0) return on(t, []);
  const s = n[0].syncPriority;
  n = n.filter((l) => l.syncPriority === s);
  const r = t.outbox.counts();
  t.progress.expectUploads(r.pending + r.inFlight);
  const i = [],
    a = [],
    o = [];
  for (const l of n)
    l.kind === "write" && l.groupAttempts < tn
      ? i.push(l)
      : l.kind === "delete" && l.groupAttempts < tn
        ? a.push(l)
        : o.push(l);
  if (i.length > 1) {
    const l = await Ai(t, i, e, o);
    if (l !== null) {
      for (const c of i) Bn(t, c.operationId);
      return l;
    }
  } else o.unshift(...i);
  if (a.length > 1) {
    const l = await Hi(t, a, e);
    if (l !== null) return l;
  } else o.unshift(...a);
  for (const l of o) {
    if (e.signal.aborted) return y(G());
    const c = await Li(t, l, e);
    if (c !== null) return c;
  }
  return on(
    t,
    n.map((l) => l.operationId),
  );
}
function on(t, e) {
  try {
    const n = t.clock();
    if (e.length > 0 && t.outbox.hasPendingAfter(n, e))
      return { kind: "done", remainingWork: !0 };
    const s = t.outbox.nextHoldAt(n);
    return s === null ? W : { kind: "done", remainingWork: !0, notBefore: s };
  } catch {
    return W;
  }
}
async function Hi(t, e, n) {
  const s = [];
  for (const a of e)
    try {
      (t.outbox.markInFlight(a.operationId), s.push(a));
    } catch {
      continue;
    }
  if (s.length === 0) return null;
  for (const a of s) t.progress.beginUpload(a.operationId);
  const r = await t.transport.batchDelete(
    { items: s.map((a) => ({ path: a.path, baseVersion: a.baseVersion })) },
    n.signal,
  );
  if (!r.ok) {
    const a = Gn(t, s, r.failure);
    let o = null;
    for (const l of s) o = ne(t, l, r.failure, a) ?? o;
    return o;
  }
  const i = new Map(r.value.results.map((a) => [a.path, a]));
  for (const a of s) {
    const o = i.get(a.path);
    if (o?.ok === !0) {
      try {
        (t.remote.apply({
          kind: "delete",
          path: a.path,
          version: o.version ?? a.baseVersion + 1,
        }),
          t.outbox.markComplete(a.operationId),
          t.progress.finishUpload(a.operationId));
      } catch (l) {
        return y(L(l));
      }
      continue;
    }
    if (o?.conflict === !0) {
      const l = Wn(t, a, o.currentVersion);
      if (l !== null) return l;
      continue;
    }
    ne(
      t,
      a,
      d.reconcile("write-conflict", `batch delete refused ${a.path}`, a.path),
    );
  }
  return { kind: "done", remainingWork: !0 };
}
async function Ai(t, e, n, s) {
  const r = [];
  for (const o of e) {
    if (n.signal.aborted) return y(G());
    const l = qn(t, o);
    if (l !== null) {
      const p = $n(t, o, l);
      if (p !== null) return p;
      continue;
    }
    const c = await d.readSettled(t.root, Q(t, o.path));
    if (c.kind === "missing") {
      try {
        (t.outbox.markComplete(o.operationId),
          t.progress.finishUpload(o.operationId));
      } catch (p) {
        return y(L(p));
      }
      continue;
    }
    if (c.kind !== "file" || c.sizeBytes > yi) {
      s.push(o);
      continue;
    }
    try {
      t.outbox.markInFlight(o.operationId);
    } catch {
      continue;
    }
    r.push({
      record: o,
      content: c.content,
      contentHash: c.contentHash,
      sizeBytes: c.sizeBytes,
      mtimeMs: c.mtimeMs,
    });
  }
  if (r.length === 0) return null;
  for (const o of r) t.progress.beginUpload(o.record.operationId);
  const i = new Map(r.map((o) => [o.record.path, o])),
    a = Cr(
      r.map((o) => ({
        path: o.record.path,
        data: o.content,
        contentHash: o.contentHash,
      })),
    );
  for (const o of a) {
    if (n.signal.aborted) return y(G());
    const { blob: l, toc: c } = Nr(o),
      p = Z.createHash("sha256").update(l).digest("hex"),
      m = d.md5Base64(l),
      R = o.map((f) => {
        const k = i.get(f.path);
        return {
          path: f.path,
          contentHash: k?.contentHash ?? "",
          sizeBytes: f.data.length,
          baseVersion: k?.record.baseVersion ?? 0,
        };
      }),
      h = await t.transport.packPresign(
        {
          contentHash: p,
          contentMd5: m,
          totalBytes: l.length,
          fileCount: o.length,
          files: R,
        },
        n.signal,
      );
    if (!h.ok) {
      const f = nt(t, o, i, h.failure);
      if (f !== null) return f;
      continue;
    }
    const g = await t.transport.putBytes(
      h.value.presignedPutUrl,
      l,
      m,
      n.signal,
    );
    if (!g.ok) {
      const f = nt(t, o, i, g.failure);
      if (f !== null) return f;
      continue;
    }
    for (const f of R) t.transfer.recordUpload(f.path, f.sizeBytes);
    const E = await t.transport.packConfirm(
      {
        packId: h.value.packId,
        files: c.map((f) => {
          const k = i.get(f.path);
          return {
            path: f.path,
            contentHash: k?.contentHash ?? "",
            sizeBytes: f.size,
            packOffset: f.offset,
            packSize: f.size,
            baseVersion: k?.record.baseVersion ?? 0,
            mimeType: ee.mimeFromExt(f.path) ?? void 0,
            versionComment: k?.record.versionComment ?? void 0,
          };
        }),
      },
      n.signal,
    );
    if (!E.ok) {
      const f = nt(t, o, i, E.failure);
      if (f !== null) return f;
      continue;
    }
    for (const f of E.value.versions) {
      const k = i.get(f.path);
      if (k === void 0) continue;
      const b = kt(
        t,
        k.record,
        f.version,
        k.contentHash,
        k.sizeBytes,
        k.mtimeMs,
      );
      if (b !== null) return b;
    }
    const v = E.value.conflicts ?? [];
    for (const f of v) {
      const k = i.get(f.path);
      if (k === void 0) continue;
      let b;
      try {
        b = t.outbox.get(k.record.operationId);
      } catch (C) {
        return y(L(C));
      }
      if (b?.state !== "in-flight") {
        t.progress.releaseUpload(k.record.operationId);
        continue;
      }
      const _ = await zn(t, k.record, f.currentVersion, n);
      if (_ !== null) return _;
    }
    for (const f of o) {
      if (
        E.value.versions.some((b) => b.path === f.path) ||
        v.some((b) => b.path === f.path)
      )
        continue;
      const k = i.get(f.path);
      k !== void 0 && Bn(t, k.record.operationId);
    }
  }
  return null;
}
function nt(t, e, n, s) {
  const r = Gn(
    t,
    e.flatMap((a) => n.get(a.path)?.record ?? []),
    s,
  );
  let i = null;
  for (const a of e) {
    const o = n.get(a.path);
    if (o === void 0) continue;
    let l;
    try {
      l = t.outbox.get(o.record.operationId);
    } catch (c) {
      return y(L(c));
    }
    if (l?.state !== "in-flight") {
      t.progress.releaseUpload(o.record.operationId);
      continue;
    }
    i = ne(t, o.record, s, r) ?? i;
  }
  return i;
}
function Bn(t, e) {
  t.progress.releaseUpload(e);
  try {
    t.outbox.releaseClaim(e);
  } catch {}
}
function qn(t, e) {
  if (e.kind !== "write") return null;
  const n = t.cache.get(e.path);
  return n !== null &&
    n.version === e.baseVersion &&
    n.contentHash === e.expectedHash
    ? n.version
    : null;
}
function $n(t, e, n) {
  try {
    t.outbox.transaction(() => {
      (t.outbox.markComplete(e.operationId, n), We(t, e, n));
    });
  } catch (s) {
    return y(L(s));
  }
  return (t.progress.finishUpload(e.operationId), null);
}
async function Li(t, e, n) {
  try {
    t.outbox.markInFlight(e.operationId);
  } catch {
    return null;
  }
  t.progress.beginUpload(e.operationId);
  const s = qn(t, e);
  if (s !== null) return $n(t, e, s);
  if (e.kind === "delete") {
    const l = await t.transport.deleteFile(
      { path: e.path, baseVersion: e.baseVersion, operationId: e.operationId },
      n.signal,
    );
    return ln(t, e, l, n);
  }
  if (e.kind === "move") {
    const l = await t.transport.moveFile(
      {
        items: [
          {
            fromPath: e.sourcePath ?? "",
            toPath: e.path,
            baseVersion: e.baseVersion,
          },
        ],
      },
      n.signal,
    );
    if (!l.ok) return ne(t, e, l.failure);
    const c = l.value.results[0];
    return c === void 0
      ? ne(t, e, d.reconcile("write-conflict", "the move was refused", e.path))
      : c.ok
        ? kt(
            t,
            e,
            c.version ?? e.baseVersion + 1,
            e.expectedHash,
            (e.sourcePath === null ? null : t.cache.get(e.sourcePath))
              ?.sizeBytes ?? 0,
          )
        : Fi(
            t,
            e,
            c.reason === "destination_exists" ? c.currentVersion : void 0,
          );
  }
  const r = await d.readSettled(t.root, Q(t, e.path));
  if (r.kind === "missing") {
    try {
      (t.outbox.markComplete(e.operationId),
        t.progress.finishUpload(e.operationId));
    } catch (l) {
      return y(L(l));
    }
    return null;
  }
  if (r.kind === "directory" && e.expectedHash === "" && e.baseVersion === 0)
    try {
      const l = await jn(t, e, n);
      if (l.kind === "retired")
        return (t.progress.finishUpload(e.operationId), null);
      if (l.kind === "failed") return ne(t, e, l.failure);
    } catch (l) {
      return y(L(l));
    }
  if (r.kind !== "file") return ne(t, e, Pi(r));
  if (r.contentHash !== e.expectedHash) {
    try {
      Et(t, {
        path: e.path,
        expectedHash: r.contentHash,
        baseVersion: e.baseVersion,
      });
    } catch (l) {
      return y(L(l));
    }
    return null;
  }
  const i = await d.stillDescribes(Q(t, e.path), {
    contentHash: r.contentHash,
    mtimeMs: r.mtimeMs,
    sizeBytes: r.sizeBytes,
  });
  if (!i.ok) return ne(t, e, i.failure);
  const a = ee.mimeFromExt(e.path) ?? void 0,
    o =
      r.sizeBytes > d.INLINE_SIZE_THRESHOLD
        ? await Di(t, e, r, a, n)
        : await Oi(t, e, r, a, n);
  return ln(t, e, o, n, r.contentHash, r.sizeBytes, r.mtimeMs);
}
async function Oi(t, e, n, s, r) {
  const i = await t.transport.writeFile(
    {
      path: e.path,
      baseVersion: e.baseVersion,
      content: Buffer.from(n.content).toString("base64"),
      contentHash: n.contentHash,
      operationId: e.operationId,
      mimeType: s,
      versionComment: e.versionComment ?? void 0,
    },
    r.signal,
  );
  return (i.ok && t.transfer.recordUpload(e.path, n.sizeBytes), i);
}
async function Di(t, e, n, s, r) {
  const i = d.md5Base64(n.content),
    a = await t.transport.presignWrite(
      {
        path: e.path,
        baseVersion: e.baseVersion,
        contentHash: n.contentHash,
        contentMd5: i,
        sizeBytes: n.sizeBytes,
        operationId: e.operationId,
        mimeType: s,
        versionComment: e.versionComment ?? void 0,
      },
      r.signal,
    );
  if (!a.ok) return a;
  const o = a.value;
  if (o.conflict === !0)
    return {
      ok: !0,
      value: { ok: !1, conflict: !0, currentVersion: o.currentVersion },
    };
  if (o.reservedVersion === void 0)
    return {
      ok: !1,
      failure: d.integrity(
        "impossible-version",
        `presign:${e.path}`,
        "the server reserved no version for a large write",
      ),
    };
  if (o.presignedPutUrl === void 0 || o.uploadId === void 0)
    return { ok: !0, value: { ok: !0, version: o.reservedVersion } };
  const l = await t.transport.putBytes(
    o.presignedPutUrl,
    n.content,
    i,
    r.signal,
  );
  if (!l.ok) return l;
  t.transfer.recordUpload(e.path, n.sizeBytes);
  const c = await t.transport.confirmWrite(
    {
      uploadId: o.uploadId,
      reservedVersion: o.reservedVersion,
      versionComment: e.versionComment ?? void 0,
    },
    r.signal,
  );
  return c.ok ? { ok: !0, value: c.value } : c;
}
async function ln(t, e, n, s, r = "", i = 0, a = null) {
  return n.ok
    ? n.value.conflict === !0
      ? e.kind === "delete"
        ? Wn(t, e, n.value.currentVersion)
        : zn(t, e, n.value.currentVersion, s)
      : n.value.ok !== !0 || n.value.version === void 0
        ? ne(
            t,
            e,
            d.reconcile(
              "write-conflict",
              "the server refused the write",
              e.path,
            ),
          )
        : kt(t, e, n.value.version, r, i, a)
    : ne(t, e, n.failure);
}
function kt(t, e, n, s, r, i = null) {
  try {
    t.outbox.transaction(() => {
      (e.kind === "delete"
        ? t.remote.apply({ kind: "delete", path: e.path, version: n })
        : (e.kind === "move" &&
            e.sourcePath !== null &&
            t.remote.apply({ kind: "delete", path: e.sourcePath, version: n }),
          t.remote.apply({
            kind: "upsert",
            path: e.path,
            version: n,
            contentHash: s,
            sizeBytes: r,
            mtimeMs: i,
          })),
        t.outbox.markComplete(e.operationId, n),
        We(t, e, n));
    });
  } catch (a) {
    return y(L(a));
  }
  return (
    t.progress.finishUpload(e.operationId),
    e.kind === "write" && t.holds.published(e.path, t.clock()),
    null
  );
}
function We(t, e, n) {
  const s = t.drafts.openForPath(e.path);
  s === null || s.state !== "publishing" || t.drafts.save(kn(s, n, t.clock()));
}
function Wn(t, e, n) {
  try {
    (t.outbox.markComplete(e.operationId),
      t.progress.finishUpload(e.operationId));
  } catch (s) {
    return y(L(s));
  }
  return (
    t.onConflict({
      path: e.path,
      resolvedAt: t.clock(),
      outcome: "kept-remote",
      remoteVersion: n ?? e.baseVersion + 1,
      localContentHash: "",
      remoteContentHash: "",
    }),
    null
  );
}
async function zn(t, e, n, s) {
  const r = t.cache.get(e.path);
  if (r !== null && r.contentHash === e.expectedHash) {
    try {
      t.outbox.transaction(() => {
        (t.outbox.markComplete(e.operationId, r.version), We(t, e, r.version));
      });
    } catch (a) {
      return y(L(a));
    }
    return (t.progress.finishUpload(e.operationId), null);
  }
  if (n === void 0 || n === e.baseVersion || e.attemptCount === 0) {
    t.progress.releaseUpload(e.operationId);
    try {
      t.outbox.recordRefusal(
        e.operationId,
        mt(t.clock(), { attempt: e.attemptCount + 1 }, t.jitter),
        "reconcile:write-conflict",
      );
    } catch (a) {
      return y(L(a));
    }
    return null;
  }
  const i = e.baseVersion > 0 ? await Kn(Q(t, e.path)) : null;
  if (i !== null && Ln(i, t.clock())) {
    const a = await ye(
      t,
      { path: e.path, version: n, contentHash: "", read: null },
      s,
    );
    if (a.kind === "failed") return ne(t, e, a.failure);
    if (a.kind === "not-found") return _t(t, e.path);
    if (a.kind === "staged") return Tt(t, e.path, e.expectedHash, a, null);
  }
  try {
    t.outbox.admit({
      operationId: t.newOperationId(),
      kind: "write",
      path: e.path,
      expectedHash: e.expectedHash,
      baseVersion: n,
      ...(e.versionComment === null
        ? {}
        : { versionComment: e.versionComment }),
    });
  } catch (a) {
    return y(L(a));
  }
  return (
    t.progress.finishUpload(e.operationId),
    t.onConflict({
      path: e.path,
      resolvedAt: t.clock(),
      outcome: "kept-local",
      remoteVersion: n,
      localContentHash: e.expectedHash,
      remoteContentHash: "",
    }),
    null
  );
}
async function jn(t, e, n) {
  const s = Q(t, e.path);
  if (!(await cn(s))) return { kind: "kept" };
  if (t.drafts.openForPath(e.path) !== null) return { kind: "kept" };
  const r = await t.transport.readFile(e.path, n.signal);
  return r.ok
    ? r.value.notFound !== !0
      ? { kind: "kept" }
      : (await cn(s))
        ? t.outbox.activeForPath(e.path)?.operationId !== e.operationId
          ? { kind: "kept" }
          : t.drafts.openForPath(e.path) !== null
            ? { kind: "kept" }
            : (t.outbox.markComplete(e.operationId), { kind: "retired" })
        : { kind: "kept" }
    : { kind: "failed", failure: r.failure };
}
async function Mi(t, e) {
  let n = 0,
    s = "";
  for (;;) {
    const r = t.outbox.contentlessWrites(s);
    for (const i of r) {
      if (e.signal.aborted) return n;
      const a = await jn(t, i, e);
      if (a.kind === "failed") return n;
      a.kind === "retired" && (n += 1);
    }
    if (r.length < d.ENGINE_BOUNDS.outboxPageSize) return n;
    s = r[r.length - 1]?.path ?? s;
  }
}
async function cn(t) {
  return (await S.lstat(t).catch(() => null))?.isDirectory() === !0;
}
function Fi(t, e, n) {
  try {
    t.outbox.transaction(() => {
      (t.outbox.markComplete(e.operationId),
        t.progress.finishUpload(e.operationId),
        t.outbox.admit({
          operationId: t.newOperationId(),
          kind: "write",
          path: e.path,
          expectedHash: e.expectedHash,
          baseVersion: n ?? t.cache.get(e.path)?.version ?? 0,
        }),
        e.sourcePath !== null &&
          t.outbox.admit({
            operationId: t.newOperationId(),
            kind: "delete",
            path: e.sourcePath,
            expectedHash: e.expectedHash,
            baseVersion: e.baseVersion,
          }));
    });
  } catch (s) {
    return y(L(s));
  }
  return null;
}
function Pi(t) {
  switch (t.kind) {
    case "unreadable":
      return t.failure;
    case "unsettled":
      return d.retryable(
        "path-temporarily-unavailable",
        "the file was still being written",
      );
    case "directory":
      return d.localEnvironment(
        "root-unreadable",
        "the path is a directory now",
      );
    case "too-large":
      return d.localEnvironment(
        "root-unreadable",
        "the file is larger than the engine will sync",
      );
  }
}
function ne(t, e, n, s = Vn(t, e.attemptCount, n)) {
  t.progress.releaseUpload(e.operationId);
  try {
    t.outbox.recordAttempt(e.operationId, s, `${n.class}:${n.reason}`, Ui(n));
  } catch (r) {
    return y(L(r));
  }
  return n.class === "retryable" || n.class === "auth-blocked" ? y(n) : null;
}
function Vn(t, e, n) {
  return mt(
    t.clock(),
    {
      attempt: e + 1,
      retryAfterMs: n.class === "retryable" ? n.retryAfterMs : void 0,
    },
    t.jitter,
  );
}
function Gn(t, e, n) {
  const s = e.reduce((r, i) => Math.max(r, i.attemptCount), 0);
  return Vn(t, s, n);
}
function Ui(t) {
  return t.class !== "retryable" ? !0 : t.serverAnswering === !0;
}
async function Bi(t, e, n) {
  const s = t.newOperationId(),
    r = Q(t, e.op.path);
  try {
    if (e.op.op === "delete")
      return (
        t.suppression.expect(s, e.op.path, { kind: "delete" }),
        await S.unlink(r).catch(() => {}),
        t.outbox.admit({
          operationId: s,
          kind: "delete",
          path: e.op.path,
          expectedHash: t.cache.get(e.op.path)?.contentHash ?? "",
          baseVersion: e.op.baseVersion,
        }),
        { kind: "done", remainingWork: !0 }
      );
    if (e.op.op === "move")
      return (
        t.suppression.expect(s, e.op.path, {
          kind: "content",
          contentHash: t.cache.get(e.op.sourcePath)?.contentHash ?? "",
        }),
        await S.mkdir(H.dirname(r), { recursive: !0 }),
        await S.rename(Q(t, e.op.sourcePath), r),
        t.outbox.admit({
          operationId: s,
          kind: "move",
          path: e.op.path,
          sourcePath: e.op.sourcePath,
          expectedHash: t.cache.get(e.op.sourcePath)?.contentHash ?? "",
          baseVersion: e.op.baseVersion,
        }),
        { kind: "done", remainingWork: !0 }
      );
    (t.suppression.expect(s, e.op.path, {
      kind: "content",
      contentHash: e.op.contentHash,
    }),
      await S.mkdir(H.dirname(r), { recursive: !0 }));
    const i = `${r}.partial-${s}`;
    return (
      await S.writeFile(i, e.op.content),
      await S.rename(i, r),
      t.outbox.admit({
        operationId: s,
        kind: "write",
        path: e.op.path,
        expectedHash: e.op.contentHash,
        baseVersion: e.op.baseVersion,
      }),
      n.signal.aborted ? y(G()) : { kind: "done", remainingWork: !0 }
    );
  } catch (i) {
    if ((t.suppression.cancel(s, e.op.path), i instanceof D))
      return y(i.failure);
    const a = i instanceof Error && "code" in i ? i.code : null;
    return y(
      a === "ENOSPC"
        ? d.localEnvironment("disk-full", "no space left for a direct mutation")
        : d.localEnvironment(
            "root-unreadable",
            "a direct mutation could not be written",
          ),
    );
  }
}
async function Ee(t, e, n, s) {
  e.target = null;
  const r = t.cache.checkpoint(),
    i =
      s === void 0 &&
      e.readThrough.position !== null &&
      e.readThrough.position.sequence > (r?.sequence ?? -1)
        ? e.readThrough.position
        : null;
  if (s === void 0 && r === null && i === null)
    return y(
      d.reconcile(
        "no-checkpoint",
        "a store with no checkpoint reads the tree, not the journal",
      ),
    );
  s === void 0 && t.cache.metadataListingOwed() && (await Yn(t, n));
  const a = s ??
      i ?? { sequence: r?.sequence ?? 0, rootHash: r?.rootHash ?? at },
    o = await t.transport.journal(
      {
        sinceSeq: a.sequence,
        rootHash: a.rootHash,
        known: {
          seq: Math.max(
            a.sequence,
            e.serverSequence ?? 0,
            e.hintedSequence ?? 0,
          ),
          rootHash: t.remote.rootHash(),
        },
      },
      n.signal,
    );
  if (!o.ok) return y(o.failure);
  ((e.startupSequence ??= o.value.currentSeq),
    (e.serverSequence = o.value.currentSeq));
  const l = Nn(o.value, a);
  switch (l.kind) {
    case "converged": {
      if (
        ((e.changes = []),
        (e.target = null),
        (e.more = !1),
        s === void 0 && e.readThrough.held.size > 0)
      )
        return (
          (e.changes = [...e.readThrough.held.values()]),
          (e.target = { source: "journal", ...l.at, converged: !0 }),
          W
        );
      if (t.remote.rootHash() !== l.at.rootHash)
        return Dn(t)
          ? { kind: "done", remainingWork: !0 }
          : y(
              d.reconcile(
                "root-mismatch",
                "the server reports a root this client does not hold",
              ),
            );
      try {
        (r === null || r.sequence !== l.at.sequence) &&
          t.cache.commitCheckpoint(l.at.sequence, l.at.rootHash);
      } catch (c) {
        return y(L(c));
      }
      return ($e(e.readThrough), Qi());
    }
    case "escalate":
      return y(l.failure);
    case "restart":
      return y(
        d.reconcile("stale-snapshot", "the snapshot moved during the cycle"),
      );
    case "apply": {
      e.changes = [];
      try {
        const p = t.cache.applyMetadata(
          Zr(l.changes, (m) => t.cache.metadata(m)),
        );
        p.length > 0 && t.onMetadataChange(p);
      } catch (p) {
        return y(L(p));
      }
      const c = new Map();
      for (const p of l.changes) {
        if (p.metadataOnly === !0) {
          const m = c.get(p.path) ?? t.cache.get(p.path);
          if (
            m !== null &&
            m.version === p.version &&
            m.contentHash === p.contentHash
          )
            continue;
        }
        if (
          p.op === "move" &&
          p.previousPath !== void 0 &&
          p.previousPath !== p.path
        ) {
          const m = c.get(p.previousPath) ?? t.cache.get(p.previousPath);
          m !== null &&
            m.contentHash === p.contentHash &&
            m.version < p.version &&
            (e.changes.push(Fe({ path: p.previousPath, version: m.version })),
            c.set(p.previousPath, { version: m.version + 1, contentHash: "" }));
        }
        (e.changes.push({
          kind: "known",
          path: p.path,
          version: p.version,
          contentHash: p.contentHash,
          op: p.op,
          read: On(p),
        }),
          c.set(p.path, { version: p.version, contentHash: p.contentHash }));
      }
      return (
        s === void 0 &&
          !l.more &&
          e.readThrough.held.size > 0 &&
          (e.changes = [...e.readThrough.held.values(), ...e.changes]),
        (e.target = { source: "journal", ...l.to }),
        (e.more = l.more),
        W
      );
    }
    default:
      return y(
        d.invariant(
          "illegal-trigger",
          "the journal produced a step it cannot produce",
        ),
      );
  }
}
async function qi(t, e, n) {
  e.target = null;
  const s = t.cache.checkpoint(),
    r = t.remote.rootHash();
  let i = e.serverSequence ?? s?.sequence ?? 0,
    a = e.serverSequence !== null;
  ((e.descend = [""]),
    (e.frontierStop = { kind: "none" }),
    (e.changes = []),
    (e.withheld = 0),
    $e(e.readThrough));
  const o = t.remote.directoryHashes(),
    l = Hn(o.keys());
  let c = 0,
    p = 0;
  for (; e.descend.length > 0; ) {
    if (n.signal.aborted) return y(G());
    if (c === Qt)
      return y(
        d.invariant(
          "impossible-journal-state",
          `the frontier descent did not converge within ${Qt} rounds`,
        ),
      );
    c += 1;
    const m = e.descend
        .slice(0, d.SYNC_V2_BOUNDS.frontierMaxDirectories)
        .map((f) => ({ path: f, hash: o.get(f) ?? at })),
      R = e.descend.slice(d.SYNC_V2_BOUNDS.frontierMaxDirectories),
      h = await t.transport.frontier(
        { rootHash: r, sinceSeq: i, directories: m },
        n.signal,
      );
    if (!h.ok) return y(h.failure);
    const g = !a;
    a = !0;
    const E = new Map();
    for (const f of m) for (const [k, b] of $i(t, f.path)) E.set(k, Tn(k, b));
    const v = ei(h.value, E, o, l);
    if (v.step.kind === "escalate") return y(v.step.failure);
    if (v.step.kind === "restart") {
      if (!g) {
        if (p === wi)
          return y(
            d.reconcile(
              "stale-snapshot",
              "the snapshot kept moving during the descent",
            ),
          );
        p += 1;
      }
      ((c = 0),
        (i = h.value.currentSeq),
        (e.serverSequence = i),
        (e.target = null),
        (e.descend = [""]),
        (e.changes = []),
        (e.frontierStop = { kind: "none" }));
      continue;
    }
    ((e.frontierStop = Cn(e.frontierStop, v.stop)),
      (e.target = {
        source: "frontier",
        sequence: h.value.currentSeq,
        rootHash: h.value.serverRootHash,
      }));
    for (const f of v.diverged) e.changes.push({ kind: "discover", path: f });
    if (h.value.serverRootHash !== at) {
      for (const f of v.gone) {
        const k = t.cache.get(f);
        k !== null && e.changes.push(Fe(k));
      }
      for (const f of v.goneDirectories)
        for (const k of bt(t, f)) e.changes.push(Fe(k));
    }
    if (
      ((e.descend = [...R, ...v.descend]),
      v.step.kind === "converged" && ((e.descend = R), R.length === 0))
    )
      return W;
  }
  return W;
}
function $i(t, e) {
  const n = e === "" ? "" : `${e}/`,
    s = [];
  for (const r of bt(t, e))
    r.path.slice(n.length).includes("/") || s.push([r.path, r.contentHash]);
  return s;
}
function* bt(t, e) {
  let n = null;
  for (;;) {
    const s = e === "" ? t.cache.page(n, 1e3) : t.cache.pageUnder(e, n, 1e3);
    if (s.length === 0) break;
    yield* s;
    const r = s[s.length - 1];
    if (r === void 0 || ((n = r.path), s.length < 1e3)) break;
  }
}
function Fe(t) {
  return {
    kind: "known",
    path: t.path,
    version: t.version + 1,
    contentHash: "",
    op: "delete",
    read: null,
  };
}
async function Wi(t, e, n) {
  ((e.target = null), (e.changes = []), (e.withheld = 0), $e(e.readThrough));
  for (let s = 0; s < ki; s++) {
    const r = await zi(t, n);
    if (r.kind === "failed") return y(r.failure);
    if (r.kind !== "moved")
      return (
        (e.changes = r.changes),
        (e.target = {
          source: "manifest",
          ...r.at,
          differences: r.changes.length,
          keptOffDisk: r.keptOffDisk,
        }),
        W
      );
  }
  return y(
    d.retryable(
      "snapshot-moving",
      "the workspace kept changing while its manifest was read",
    ),
  );
}
async function zi(t, e) {
  let n = null,
    s = null,
    r = null,
    i = 0,
    a = 0;
  const o = new Set(),
    l = new Map();
  for (let c = 0; c < Jt; c++) {
    if (e.signal.aborted) return { kind: "failed", failure: G() };
    const p = await t.transport.manifest(
      { cursor: n, snapshotSeq: r?.sequence, snapshotRootHash: r?.rootHash },
      e.signal,
    );
    if (!p.ok) return { kind: "failed", failure: p.failure };
    const m = ti(p.value);
    if (m.kind === "escalate") return { kind: "failed", failure: m.failure };
    if (m.kind === "restart") {
      if (i === Ei) return { kind: "moved" };
      ((i += 1),
        (r = {
          sequence: p.value.currentSeq,
          rootHash: p.value.serverRootHash,
        }));
      continue;
    }
    if (p.value.status !== "page")
      return {
        kind: "failed",
        failure: d.invariant(
          "impossible-journal-state",
          "the manifest returned no page",
        ),
      };
    ((r = { sequence: p.value.currentSeq, rootHash: p.value.serverRootHash }),
      (s ??= r));
    for (const g of p.value.entries) {
      if (o.size >= d.ENGINE_BOUNDS.maxPlanningRecords)
        return {
          kind: "failed",
          failure: d.integrity(
            "impossible-root",
            "manifest:oversized",
            "the manifest exceeded the planning bound",
          ),
        };
      (o.add(g.path), be(g.path) && (a += 1), Xn(t, l, g, null));
    }
    if (m.kind === "page") {
      n = m.cursor;
      continue;
    }
    if (m.kind !== "converged")
      return {
        kind: "failed",
        failure: d.invariant(
          "impossible-journal-state",
          "the manifest finished without converging",
        ),
      };
    let R = m.at;
    if (s !== null && s.sequence !== R.sequence) {
      const g = await ji(t, s, o, l, e);
      if (g.kind !== "caught-up") return g;
      R = g.at;
    }
    const h = [...l.values()];
    for (const g of bt(t, "")) o.has(g.path) || h.push(Fe(g));
    return { kind: "listed", changes: h, at: R, keptOffDisk: a };
  }
  return {
    kind: "failed",
    failure: d.invariant(
      "impossible-journal-state",
      `the manifest did not finish within ${Jt} pages`,
    ),
  };
}
async function ji(t, e, n, s, r) {
  let i = e;
  for (let a = 0; a < bi; a++) {
    if (r.signal.aborted) return { kind: "failed", failure: G() };
    const o = await t.transport.journal(
      { sinceSeq: i.sequence, rootHash: i.rootHash },
      r.signal,
    );
    if (!o.ok) return { kind: "failed", failure: o.failure };
    const l = Nn(o.value, i);
    if (l.kind === "converged") return { kind: "caught-up", at: l.at };
    if (l.kind !== "apply") return { kind: "moved" };
    for (const c of l.changes) {
      if (
        (c.op === "move" &&
          c.previousPath !== void 0 &&
          c.previousPath !== c.path &&
          (n.delete(c.previousPath), s.delete(c.previousPath)),
        c.op === "delete")
      ) {
        (n.delete(c.path), s.delete(c.path));
        continue;
      }
      (n.add(c.path), Xn(t, s, c, On(c)));
    }
    if (((i = l.to), !l.more)) return { kind: "caught-up", at: i };
  }
  return { kind: "moved" };
}
function Xn(t, e, n, s) {
  const r = t.cache.get(n.path);
  if (
    r !== null &&
    r.version === n.version &&
    r.contentHash === n.contentHash
  ) {
    e.delete(n.path);
    return;
  }
  e.set(n.path, {
    kind: "known",
    path: n.path,
    version: n.version,
    contentHash: n.contentHash,
    op: "write",
    read: s,
  });
}
async function Vi(t, e, n) {
  for (;;) {
    (t.progress.expectDownloads(
      e.changes.filter(
        (o) => o.kind !== "known" || (o.op !== "delete" && o.op !== "move"),
      ).length,
    ),
      (e.changes = e.changes
        .map((o) => ({ change: o, priority: gt(o.path) }))
        .sort((o, l) => l.priority - o.priority)
        .map(({ change: o }) => o)));
    const s = e.changes,
      r = new pi({
        changes: s,
        plan: (o) => Gi(t, o),
        transport: t.transport,
        stagingPath: () => t.staging.next(),
        progress: t.progress,
        recordDownload: (o, l) => t.transfer.recordDownload(o, l),
        signal: n.signal,
      });
    try {
      for (let o = 0; o < s.length; o += 1) {
        if (n.signal.aborted) return y(G());
        const l = Xi(s[o], await r.take(o)),
          c = e.withheld;
        try {
          if (l.kind === "known") {
            const m = await lt(t, l, e, n);
            if (m !== null) return m;
            xt(e, l, e.withheld > c);
            continue;
          }
          const p = await Yi(t, l.path, e, n);
          if (p !== null) return p;
          xt(e, l, e.withheld > c);
        } finally {
          await r.release(o);
        }
      }
    } finally {
      await r.dispose();
    }
    e.changes = [];
    const i = e.target;
    if (
      t.remoteLanded() ||
      !e.more ||
      i?.source !== "journal" ||
      e.startupSequence === null ||
      i.sequence >= e.startupSequence
    )
      return W;
    if (n.signal.aborted) return y(G());
    const a = await Ee(t, e, n, i);
    if (a.kind === "failed") return a;
  }
}
async function Gi(t, e) {
  const n = { kind: "none" };
  if (be(e.path) || (await oe(t, e.path)) !== null) return n;
  if (e.kind === "discover")
    return {
      kind: "resolve",
      path: e.path,
      stageBytes: await un(t, e.path),
      expect: null,
    };
  if (
    e.op === "delete" ||
    e.read?.staged !== void 0 ||
    t.quarantine.withholds(e.path, e.version, e.contentHash) ||
    t.cache.get(e.path)?.contentHash === e.contentHash ||
    !(await un(t, e.path))
  )
    return n;
  const s = e.read;
  return s === null
    ? {
        kind: "resolve",
        path: e.path,
        stageBytes: !0,
        expect: { version: e.version, contentHash: e.contentHash },
      }
    : s.presignedReadUrl === void 0
      ? n
      : {
          kind: "fetch",
          path: e.path,
          url: s.presignedReadUrl,
          range:
            s.packOffset !== void 0 && s.packSize !== void 0
              ? { start: s.packOffset, end: s.packOffset + s.packSize - 1 }
              : void 0,
          sizeBytes: s.sizeBytes,
          contentHash: e.contentHash,
        };
}
async function un(t, e) {
  try {
    if (t.outbox.activeForPath(e) !== null || t.drafts.openForPath(e) !== null)
      return !1;
    const n = await S.lstat(Q(t, e)).catch(() => null);
    if (n === null) return !0;
    if (!n.isFile()) return !1;
    const s = t.cache.get(e);
    return (
      s !== null &&
      s.sizeBytes === n.size &&
      (s.mtimeMs === null || s.mtimeMs === n.mtimeMs)
    );
  } catch {
    return !1;
  }
}
function Xi(t, e) {
  return e === null
    ? t
    : t.kind === "discover"
      ? e.kind !== "resolved"
        ? t
        : {
            kind: "known",
            path: t.path,
            version: e.read.version,
            contentHash: e.read.contentHash,
            op: "write",
            read: dn(e.read, e.staged),
          }
      : e.kind === "staged"
        ? {
            ...t,
            read: {
              ...(t.read ?? { sizeBytes: e.staged.sizeBytes }),
              staged: e.staged,
            },
          }
        : { ...t, read: dn(e.read, e.staged) };
}
function dn(t, e) {
  return {
    sizeBytes: t.sizeBytes,
    ...(t.presignedReadUrl === void 0
      ? {}
      : { presignedReadUrl: t.presignedReadUrl }),
    ...(t.packOffset === void 0 || t.packSize === void 0
      ? {}
      : { packOffset: t.packOffset, packSize: t.packSize }),
    ...(e === null ? {} : { staged: e }),
  };
}
async function Yi(t, e, n, s) {
  const r = await t.transport.readFile(e, s.signal);
  if (!r.ok) return ve(t, n, r.failure);
  if (r.value.notFound === !0) {
    if (r.value.version > 0) return ve(t, n, ot(e, r.value));
    const i = t.cache.get(e);
    return i === null
      ? null
      : lt(
          t,
          {
            kind: "known",
            path: e,
            version: i.version + 1,
            contentHash: "",
            op: "delete",
            read: null,
          },
          n,
          s,
        );
  }
  return lt(
    t,
    {
      kind: "known",
      path: e,
      version: r.value.version,
      contentHash: r.value.contentHash,
      op: "write",
      read: r.value,
    },
    n,
    s,
  );
}
async function Pe(t) {
  t.kind === "staged" && (await S.rm(t.file, { force: !0 }).catch(() => {}));
}
async function ye(t, e, n) {
  const s = (l) => {
      t.progress.progressDownload(e.path, l);
    },
    r = e.read;
  if (r?.staged !== void 0)
    return {
      kind: "staged",
      file: r.staged.file,
      version: e.version,
      contentHash: e.contentHash,
      sizeBytes: r.sizeBytes,
      actualHash: r.staged.sha256,
      actualSize: r.staged.sizeBytes,
    };
  if (r !== null && (r.content !== void 0 || r.presignedReadUrl !== void 0)) {
    t.progress.beginDownload(e.path, r.sizeBytes);
    const l = await Ue(t, e.path, r, n, s);
    if (l.ok)
      return hn(
        t,
        e.path,
        {
          staged: l.value,
          version: e.version,
          contentHash: e.contentHash,
          sizeBytes: r.sizeBytes,
        },
        n,
      );
    if (n.signal.aborted || l.failure.class === "local-environment")
      return (
        t.progress.abandonDownload(e.path),
        { kind: "failed", failure: l.failure }
      );
  }
  const i = (l) => (
      t.progress.abandonDownload(e.path),
      Pn(t, l) ? { kind: "quarantined" } : { kind: "failed", failure: l }
    ),
    a = await t.transport.readFile(e.path, n.signal);
  if (!a.ok) return i(a.failure);
  if (a.value.notFound === !0)
    return a.value.version > 0
      ? i(ot(e.path, a.value))
      : (t.progress.abandonDownload(e.path), { kind: "not-found" });
  if (t.quarantine.withholds(e.path, a.value.version, a.value.contentHash))
    return (t.progress.abandonDownload(e.path), { kind: "quarantined" });
  t.progress.beginDownload(e.path, a.value.sizeBytes);
  const o = await Ue(t, e.path, a.value, n, s);
  if (!o.ok) {
    const l = o.failure;
    return i(
      l.class === "integrity" &&
        l.reason === "content-unavailable" &&
        l.held === void 0
        ? ot(e.path, a.value)
        : l,
    );
  }
  return hn(
    t,
    e.path,
    {
      staged: o.value,
      version: a.value.version,
      contentHash: a.value.contentHash,
      sizeBytes: a.value.sizeBytes,
    },
    n,
  );
}
async function hn(t, e, n, s) {
  const r = () => t.staging.next(),
    i = (l, c) => ({
      kind: "staged",
      file: l.file,
      version: n.version,
      contentHash: n.contentHash,
      sizeBytes: n.sizeBytes,
      actualHash: c,
      actualSize: l.sizeBytes,
    }),
    a = [n.staged];
  let o = null;
  try {
    const l = await it(n.staged, n, r);
    if (l.kind !== "mismatch")
      return (
        a.push(l.staged),
        (o = l.staged),
        t.progress.finishDownload(e),
        i(l.staged, n.contentHash)
      );
    const c = await t.transport.readVersion(e, n.version, s.signal);
    if (!c.ok)
      return (
        t.progress.abandonDownload(e),
        { kind: "failed", failure: c.failure }
      );
    const p = c.value;
    if (
      p.notFound !== !0 &&
      p.version === n.version &&
      p.contentHash === n.contentHash &&
      p.sizeBytes === n.sizeBytes
    ) {
      const R = await Ue(t, e, p, s, (g) => {
        t.progress.progressDownload(e, g);
      });
      if (!R.ok)
        return (
          t.progress.abandonDownload(e),
          { kind: "failed", failure: R.failure }
        );
      a.push(R.value);
      const h = await it(R.value, n, r);
      if (h.kind !== "mismatch")
        return (
          a.push(h.staged),
          (o = h.staged),
          t.progress.finishDownload(e),
          i(h.staged, n.contentHash)
        );
      if (h.actualHash === l.actualHash && h.actualSize === l.actualSize)
        return (
          t.progress.finishDownload(e),
          t.onUnverifiedDownload({
            path: e,
            version: n.version,
            expectedHash: n.contentHash,
            actualHash: l.actualHash,
            expectedBytes: n.sizeBytes,
            actualBytes: l.actualSize,
          }),
          (o = R.value),
          i(R.value, l.actualHash)
        );
    }
    t.progress.abandonDownload(e);
    const m = l.actualHash !== n.contentHash;
    return {
      kind: "failed",
      failure: d.unverifiableDownload(
        m ? "content-hash-mismatch" : "declared-length-mismatch",
        {
          path: e,
          version: n.version,
          expectedHash: n.contentHash,
          actualHash: l.actualHash,
          expectedBytes: n.sizeBytes,
          actualBytes: l.actualSize,
        },
      ),
    };
  } catch (l) {
    return (
      t.progress.abandonDownload(e),
      { kind: "failed", failure: ze(l, e) }
    );
  } finally {
    for (const l of a)
      l !== o && (await S.rm(l.file, { force: !0 }).catch(() => {}));
  }
}
function ze(t, e) {
  return (t instanceof Error && "code" in t ? t.code : null) === "ENOSPC"
    ? d.localEnvironment("disk-full", "no space left to stage a download")
    : d.localEnvironment(
        "root-unreadable",
        "a download could not be staged",
        e,
      );
}
async function Ki(t, e, n) {
  const s = e.target;
  if (s === null) return W;
  if (e.withheld > 0 || e.readThrough.held.size > 0) {
    const a = e.more;
    if (s.source !== "journal")
      try {
        t.cache.oweMetadataListing();
      } catch (o) {
        return y(L(o));
      }
    return (
      (e.readThrough.position = { sequence: s.sequence, rootHash: s.rootHash }),
      (e.target = null),
      (e.more = !1),
      (e.withheld = 0),
      (e.admittedLocalWork = !1),
      a
        ? { kind: "done", remainingWork: !0, moreRemote: !0 }
        : { kind: "done", remainingWork: !0 }
    );
  }
  if (t.remote.rootHash() !== s.rootHash) {
    if (s.source === "journal" && s.converged === !0 && Dn(t))
      return ((e.target = null), { kind: "done", remainingWork: !0 });
    if (s.source === "manifest") {
      if (
        e.failedManifest !== null &&
        e.failedManifest.sequence === s.sequence &&
        e.failedManifest.rootHash === s.rootHash
      ) {
        const o = await xi(t, e, s, n);
        if (n.signal.aborted) return y(G());
        if (o.moved)
          return {
            ...y(
              d.reconcileAfter(
                "manifest",
                "root-mismatch",
                "the server is on a new root since the manifest failed to reach its old one",
              ),
            ),
            telemetry: { treeCheck: o.answer },
          };
        const l = {
          treeCheck: o.answer,
          trackedFiles: t.remote.fileCount(),
          keptOffDiskFiles: s.keptOffDisk,
          manifestDifferences: s.differences,
          frontier: e.frontierStop,
        };
        return {
          ...y(
            d.reconcileExhausted(
              "root-mismatch",
              "the recomputed root does not match a server root a complete manifest already failed to reach",
              l,
            ),
          ),
          telemetry: d.rootMismatchFields(l),
        };
      }
      e.failedManifest = s;
    }
    return y(
      d.reconcileAfter(
        s.source,
        "root-mismatch",
        `the recomputed root does not match the one the ${s.source} reached`,
      ),
    );
  }
  try {
    t.cache.transaction(() => {
      (t.cache.commitCheckpoint(s.sequence, s.rootHash),
        s.source !== "journal" && t.cache.oweMetadataListing());
    });
  } catch (a) {
    return y(L(a));
  }
  ($e(e.readThrough), s.source !== "journal" && (await Yn(t, n)));
  const i = e.more;
  return (
    (e.target = null),
    (e.more = !1),
    i ? { kind: "done", remainingWork: !0, moreRemote: !0 } : W
  );
}
async function xi(t, e, n, s) {
  if (e.treeChecked) return { moved: !1, answer: "already-asked" };
  e.treeChecked = !0;
  const r = await t.transport.verifyTree(
    { snapshotSeq: n.sequence, snapshotRootHash: n.rootHash },
    s.signal,
  );
  if (!r.ok) return { moved: !1, answer: "unavailable" };
  const i = r.value,
    a = i.currentSeq !== n.sequence || i.serverRootHash !== n.rootHash;
  return {
    moved: (i.status === "repaired" || i.status === "stale_snapshot") && a,
    answer: i.status,
  };
}
function Qi(t) {
  return W;
}
const Ji = 2e4;
async function Yn(t, e) {
  try {
    t.cache.beginMetadataListing();
    let n = null;
    for (let s = 0; s < Ji; s++) {
      if (e.signal.aborted) return;
      const r = await t.transport.metadataPage({ cursor: n }, e.signal);
      if (!r.ok) return;
      if (
        (t.cache.stageMetadata(r.value.entries), r.value.nextCursor === null)
      ) {
        const i = t.cache.finishMetadataListing();
        i.length > 0 && t.onMetadataChange(i);
        return;
      }
      if (
        n !== null &&
        Buffer.compare(
          Buffer.from(r.value.nextCursor, "utf8"),
          Buffer.from(n, "utf8"),
        ) <= 0
      )
        return;
      n = r.value.nextCursor;
    }
  } catch (n) {
    if (!(n instanceof D)) throw n;
  }
}
async function lt(t, e, n, s) {
  const r = Zi(t, e, n);
  if (r !== null) return r;
  if (be(e.path) || (await oe(t, e.path)) !== null) return Ce(t, e);
  if (t.quarantine.withholds(e.path, e.version, e.contentHash))
    return ((n.withheld += 1), null);
  const i = await Me(t, e);
  if (i.kind === "unlandable")
    return e.op === "delete" ? Ce(t, e) : ve(t, n, i.failure);
  if (i.kind === "failed") return i.outcome;
  const a = {
      path: e.path,
      version: e.version,
      contentHash: e.contentHash,
      op:
        e.op === "delete" || e.op === "move" || e.op === "restore"
          ? e.op
          : "write",
    },
    o = await d.readSettled(t.root, i.absolute),
    l = t.cache.get(e.path);
  let c = null;
  try {
    const _ = t.outbox.activeForPath(e.path);
    _ === null || _.state !== "blocked"
      ? (c = _?.kind ?? null)
      : (c = _.kind === "write" ? "blocked-write" : null);
  } catch (_) {
    return y(L(_));
  }
  const p = t.drafts.openForPath(e.path),
    m = p !== null && bn(p),
    R = o.kind === "file" ? o.contentHash : null,
    h =
      !m &&
      e.op === "write" &&
      c !== "delete" &&
      c !== "move" &&
      R !== null &&
      R !== (l?.contentHash ?? null) &&
      R !== e.contentHash;
  let g = null;
  h &&
    o.kind === "file" &&
    (g = await S.readFile(i.absolute).catch(() => null));
  let E = null;
  o.kind === "file" &&
    l !== null &&
    R !== l.contentHash &&
    (E = await Kn(i.absolute));
  const v = {
      path: e.path,
      cachedVersion: l?.version ?? null,
      cachedHash: l?.contentHash ?? null,
      localHash: R,
      pendingIntent: c,
      draftOpen: m,
      mergeable: g !== null && (await Fr(e.path, g)),
      localEditStale: E !== null && Ln(E, t.clock()),
    },
    f = li(a, v);
  if (f.kind === "adopt" && o.kind === "file") return sa(t, e, o);
  if (f.kind === "merge" && g !== null) return ia(t, e, a, v, f, g, n, s);
  if (f.kind === "recreate" || f.kind === "rebase") return xn(t, e, v, n);
  if (f.kind === "supersede" || f.kind === "discard-local") {
    const _ = _t(t, e.path);
    if (_ !== null) return _;
  }
  const k = An(f, v, a, t.clock());
  if (
    (k !== null && t.onConflict(k),
    f.kind !== "apply" && f.kind !== "supersede" && f.kind !== "discard-local")
  )
    return (
      (f.kind === "keep-local" || f.kind === "merge") && (n.withheld += 1),
      null
    );
  if (a.op === "delete") {
    const _ = await Me(t, e);
    if (_.kind === "unlandable") return Ce(t, e);
    if (_.kind === "failed") return _.outcome;
    const C = await wt(t, e.path);
    try {
      if (C.some((T) => ea(t, T))) return ((n.withheld += 1), null);
    } catch (T) {
      return y(L(T));
    }
    const w = t.newOperationId();
    (t.suppression.expect(w, e.path, { kind: "delete" }),
      await S.unlink(_.absolute).catch(() => {}));
    try {
      t.remote.apply({ kind: "delete", path: e.path, version: e.version });
    } catch (T) {
      return y(L(T));
    }
    return (
      t.onFileChange({
        path: e.path,
        version: e.version,
        contentHash: "",
        source: "remote",
      }),
      C.length > 0 ? ta(t, C, n, s) : null
    );
  }
  const b = await ye(t, e, s);
  return b.kind === "failed"
    ? y(b.failure)
    : b.kind === "not-found"
      ? null
      : b.kind === "quarantined"
        ? ((n.withheld += 1), null)
        : yt(t, e.path, b, n, o.kind === "directory");
}
function Zi(t, e, n) {
  const s = n.target;
  if (s === null || s.source !== "manifest") return null;
  const r = n.failedManifest;
  if (r === null || r.sequence !== s.sequence || r.rootHash !== s.rootHash)
    return null;
  try {
    const i = t.cache.get(e.path);
    if (i === null || e.version >= i.version || !t.remote.forget(e.path))
      return null;
    t.onCacheRowDropped({
      reason: "version-ahead",
      fingerprint: `version-ahead:${e.path}:${e.version}:${i.version}`,
    });
  } catch (i) {
    return y(L(i));
  }
  return null;
}
function ea(t, e) {
  const n = t.outbox.activeForPath(e);
  if (n !== null && n.state !== "blocked") return !0;
  const s = t.drafts.openForPath(e);
  return s !== null && bn(s);
}
async function ta(t, e, n, s) {
  const [r] = e,
    i = r === void 0 ? null : t.cache.get(r);
  let a = null;
  if (r !== void 0 && i !== null) {
    const o = await ye(
      t,
      { path: r, version: i.version, contentHash: i.contentHash, read: null },
      s,
    );
    o.kind === "staged"
      ? (a = await yt(t, r, o, n, !1))
      : o.kind === "failed" && (a = y(o.failure));
    const l = await S.lstat(Q(t, r)).then(
      (c) => c.isFile(),
      () => !1,
    );
    if (a === null && l) return null;
  }
  try {
    t.remote.prune(e);
  } catch (o) {
    return y(L(o));
  }
  return a;
}
async function yt(t, e, n, s, r) {
  const i = n.actualHash,
    a = await Me(t, {
      path: e,
      version: n.version,
      contentHash: n.contentHash,
    });
  if (a.kind !== "resolved")
    return (
      await Pe(n),
      a.kind === "unlandable" ? ve(t, s, a.failure) : a.outcome
    );
  const o = t.newOperationId();
  t.suppression.expect(o, e, { kind: "content", contentHash: i });
  const l = a.absolute;
  try {
    (await S.mkdir(H.dirname(l), { recursive: !0 }),
      r && (await S.rmdir(l)),
      await na(n.file, l, `${l}.incoming-${o}`));
  } catch (c) {
    (t.suppression.cancel(o, e), await Pe(n));
    const p = c instanceof Error && "code" in c ? c.code : null;
    if (typeof p == "string" && Mn.has(p))
      return ve(
        t,
        s,
        Fn({ path: e, version: n.version, contentHash: n.contentHash }, p),
      );
    const m = String(c);
    return y(
      p === "ENOSPC"
        ? d.localEnvironment(
            "disk-full",
            `no space left to land a remote change: ${m}`,
          )
        : d.localEnvironment(
            "root-unreadable",
            `a remote change could not be written: ${m}`,
            e,
          ),
    );
  }
  try {
    (t.remote.apply({
      kind: "upsert",
      path: e,
      version: n.version,
      contentHash: n.contentHash,
      sizeBytes: n.actualSize,
      mtimeMs: null,
    }),
      n.actualHash !== n.contentHash &&
        (t.outbox.admit({
          operationId: t.newOperationId(),
          kind: "write",
          path: e,
          expectedHash: n.actualHash,
          baseVersion: n.version,
        }),
        s !== null && ((s.withheld += 1), (s.admittedLocalWork = !0))));
  } catch (c) {
    return y(L(c));
  }
  return (
    t.onFileChange({
      path: e,
      version: n.version,
      contentHash: i,
      source: "remote",
    }),
    null
  );
}
async function na(t, e, n) {
  try {
    await S.rename(t, e);
    return;
  } catch (s) {
    if ((s instanceof Error && "code" in s ? s.code : null) !== "EXDEV")
      throw s;
  }
  try {
    (await S.copyFile(t, n), await S.rename(n, e));
  } catch (s) {
    throw (await S.rm(n, { force: !0 }).catch(() => {}), s);
  } finally {
    await S.rm(t, { force: !0 }).catch(() => {});
  }
}
function sa(t, e, n) {
  try {
    t.outbox.transaction(() => {
      const s = t.outbox.activeForPath(e.path);
      (s !== null &&
        s.kind === "write" &&
        (s.expectedHash === e.contentHash || s.state === "blocked") &&
        (t.outbox.markComplete(s.operationId, e.version), We(t, s, e.version)),
        t.remote.apply({
          kind: "upsert",
          path: e.path,
          version: e.version,
          contentHash: e.contentHash,
          sizeBytes: n.sizeBytes,
          mtimeMs: n.mtimeMs,
        }));
    });
  } catch (s) {
    return y(L(s));
  }
  return null;
}
async function ra(t, e, n, s) {
  const r = await Ue(t, e, n, s);
  if (!r.ok) return r;
  const i = [r.value.file];
  try {
    const a = await it(r.value, n, () => t.staging.next());
    return a.kind === "mismatch"
      ? {
          ok: !1,
          failure: d.integrity(
            "content-hash-mismatch",
            `merge-base:${e}:${n.contentHash}`,
            "the merge ancestor does not match its committed hash and length",
            e,
          ),
        }
      : (i.push(a.staged.file),
        { ok: !0, value: (await S.readFile(a.staged.file)).toString("utf8") });
  } catch (a) {
    return { ok: !1, failure: ze(a, e) };
  } finally {
    for (const a of i) await S.rm(a, { force: !0 }).catch(() => {});
  }
}
async function ia(t, e, n, s, r, i, a, o) {
  const l = s.cachedVersion ?? 0;
  if (l <= 0) return pn(t, e, s, a, o);
  const c = await t.transport.readVersion(e.path, l, o.signal);
  if (!c.ok) return y(c.failure);
  if (c.value.notFound === !0) return pn(t, e, s, a, o);
  const p = await ra(t, e.path, c.value, o);
  if (!p.ok) return y(p.failure);
  const m = await ye(t, e, o);
  if (m.kind === "failed") return y(m.failure);
  if (m.kind === "not-found") return null;
  if (m.kind === "quarantined") return ((a.withheld += 1), null);
  let R;
  try {
    R = (await S.readFile(m.file)).toString("utf8");
  } catch (w) {
    return (await Pe(m), y(ze(w, e.path)));
  }
  const h = ci(p.value, i.toString("utf8"), R);
  if (h.overlaps > 0 && s.localEditStale)
    return Tt(t, e.path, s.localHash, m, a);
  await Pe(m);
  const g = Buffer.from(h.merged, "utf8"),
    E = Z.createHash("sha256").update(g).digest("hex"),
    v = E === m.contentHash,
    f = await Me(t, e);
  if (f.kind === "unlandable") return ve(t, a, f.failure);
  if (f.kind === "failed") return f.outcome;
  const k = t.newOperationId();
  t.suppression.expect(k, e.path, { kind: "content", contentHash: E });
  const b = f.absolute,
    _ = `${b}.merged-${k}`;
  try {
    (await S.mkdir(H.dirname(b), { recursive: !0 }),
      await S.writeFile(_, g),
      await S.rename(_, b));
  } catch (w) {
    (t.suppression.cancel(k, e.path),
      await S.rm(_, { force: !0 }).catch(() => {}));
    const T = w instanceof Error && "code" in w ? w.code : null;
    return y(
      T === "ENOSPC"
        ? d.localEnvironment("disk-full", "no space left to land a merge")
        : d.localEnvironment(
            "root-unreadable",
            "a merge could not be written",
            e.path,
          ),
    );
  }
  try {
    (t.remote.apply({
      kind: "upsert",
      path: e.path,
      version: m.version,
      contentHash: m.contentHash,
      sizeBytes: m.sizeBytes,
      mtimeMs: null,
    }),
      v ||
        (t.outbox.admit({
          operationId: t.newOperationId(),
          kind: "write",
          path: e.path,
          expectedHash: E,
          baseVersion: m.version,
        }),
        (a.withheld += 1),
        (a.admittedLocalWork = !0)));
  } catch (w) {
    return y(L(w));
  }
  t.onFileChange({
    path: e.path,
    version: m.version,
    contentHash: E,
    source: "remote",
  });
  const C = An(r, s, n, t.clock(), h.overlaps);
  return (C !== null && t.onConflict(C), null);
}
function _t(t, e) {
  try {
    const n = t.outbox.activeForPath(e);
    if (n === null) return null;
    (t.outbox.markComplete(n.operationId),
      t.progress.finishUpload(n.operationId));
  } catch (n) {
    return y(L(n));
  }
  return null;
}
async function pn(t, e, n, s, r) {
  if (!n.localEditStale) return xn(t, e, n, s);
  const i = await ye(t, e, r);
  return i.kind === "failed"
    ? y(i.failure)
    : i.kind === "not-found"
      ? null
      : i.kind === "quarantined"
        ? ((s.withheld += 1), null)
        : Tt(t, e.path, n.localHash, i, s);
}
async function Kn(t) {
  const e = await S.lstat(t).catch(() => null);
  return e === null || !e.isFile() ? null : Math.max(e.mtimeMs, e.ctimeMs);
}
async function Tt(t, e, n, s, r) {
  const i = _t(t, e);
  if (i !== null) return i;
  const a = await yt(t, e, s, r, !1);
  return a !== null
    ? a
    : (t.onConflict({
        path: e,
        resolvedAt: t.clock(),
        outcome: "kept-remote",
        remoteVersion: s.version,
        localContentHash: n ?? "",
        remoteContentHash: s.contentHash,
      }),
      null);
}
function xn(t, e, n, s) {
  const r = n.localHash;
  if (r === null)
    return y(
      d.invariant(
        "illegal-trigger",
        "a merge was decided for a path with no local bytes",
      ),
    );
  const i = e.op === "delete";
  try {
    t.outbox.transaction(() => {
      (t.remote.apply(
        i
          ? { kind: "delete", path: e.path, version: e.version }
          : {
              kind: "upsert",
              path: e.path,
              version: e.version,
              contentHash: e.contentHash,
              sizeBytes: 0,
              mtimeMs: null,
            },
      ),
        t.outbox.admit({
          operationId: t.newOperationId(),
          kind: "write",
          path: e.path,
          expectedHash: r,
          baseVersion: i ? 0 : e.version,
        }));
    });
  } catch (a) {
    return y(L(a));
  }
  return (
    (s.withheld += 1),
    (s.admittedLocalWork = !0),
    t.onConflict({
      path: e.path,
      resolvedAt: t.clock(),
      outcome: "kept-local",
      remoteVersion: e.version,
      localContentHash: r,
      remoteContentHash: e.contentHash,
    }),
    null
  );
}
async function Ue(t, e, n, s, r) {
  const i = t.staging.next();
  if (n.content !== void 0) {
    const l = Buffer.from(n.content, "base64");
    t.transfer.recordDownload(e, l.byteLength);
    try {
      await S.writeFile(i, l);
    } catch (c) {
      return (
        await S.rm(i, { force: !0 }).catch(() => {}),
        { ok: !1, failure: ze(c, e) }
      );
    }
    return {
      ok: !0,
      value: {
        file: i,
        sizeBytes: l.byteLength,
        sha256: Z.createHash("sha256").update(l).digest("hex"),
      },
    };
  }
  if (n.presignedReadUrl === void 0)
    return {
      ok: !1,
      failure: d.integrity(
        "malformed-pack",
        "read:no-content",
        "the server returned no way to read the file",
      ),
    };
  const a =
      n.packOffset !== void 0 && n.packSize !== void 0
        ? { start: n.packOffset, end: n.packOffset + n.packSize - 1 }
        : void 0,
    o = await t.transport.fetchToFile(n.presignedReadUrl, a, i, s.signal, r);
  return o.ok
    ? (t.transfer.recordDownload(e, o.value.sizeBytes),
      { ok: !0, value: { file: i, ...o.value } })
    : { ok: !1, failure: o.failure };
}
const aa = 1440 * 60 * 1e3,
  Be = 2e3;
async function oa(t, e) {
  let n = t.cache.scanPass();
  n !== null &&
    t.clock() - n.startedAt > aa &&
    (t.cache.clearScanPass(), (n = null));
  const s = await vt({
    root: t.root,
    excludedRoots: t.excludedRoots(),
    isIgnored: t.isIgnored,
    onEnterDirectory: t.onEnterDirectory,
    known: (o) => t.cache.get(o),
    signal: e.signal,
    stage: { after: n?.resumeAfter ?? null },
  });
  if (e.signal.aborted) return y(G());
  const r = {
      filesSeen: s.complete ? s.files.length : s.found.length,
      filesHashed: s.filesHashed,
      writesQueued: 0,
      deletesQueued: 0,
      contentlessWritesRetired: 0,
      pruned: 0,
      tracked: 0,
      missing: 0,
    },
    i = {};
  if (s.complete || s.staged)
    for (const o of s.skipped) {
      const l = `skipped_${o.reason.replace(/-/g, "_")}`;
      i[l] = (i[l] ?? 0) + 1;
    }
  const a = () => ({
    ...i,
    ...r,
    complete: s.complete,
    staged: !s.complete && s.staged,
    stage: (n?.stages ?? 0) + 1,
    directoriesScanned: s.directoriesScanned,
    walkMs: s.durationMs,
    failures: s.complete || s.staged ? 0 : s.failures.length,
    mayDeleteMissing: t.mayDeleteMissing(),
  });
  try {
    for (const o of s.complete ? s.files : s.found) {
      const l = t.cache.get(o.path);
      if (l !== null && l.contentHash === o.contentHash) {
        (l.mtimeMs !== o.mtimeMs || l.sizeBytes !== o.sizeBytes) &&
          t.cache.observeFile(o.path, o.mtimeMs, o.sizeBytes);
        continue;
      }
      (Et(t, {
        path: o.path,
        expectedHash: o.contentHash,
        baseVersion: l?.version ?? 0,
      }),
        (r.writesQueued += 1));
    }
  } catch (o) {
    return { kind: "failed", failure: L(o), telemetry: a() };
  }
  if (!s.complete && !s.staged)
    return {
      kind: "failed",
      failure:
        s.failures[0]?.failure ??
        d.localEnvironment("scan-incomplete", "the walk did not finish"),
      telemetry: a(),
    };
  try {
    if (s.complete) n !== null && t.cache.clearScanPass();
    else if (
      (n === null && t.cache.clearScanPass(),
      t.cache.recordScanStage({
        seen: [
          ...s.found.map((c) => c.path),
          ...s.skipped
            .filter((c) => c.reason !== "excluded-workspace")
            .map((c) => c.path),
        ],
        skippedDirectories: s.skipped
          .filter((c) => c.reason === "excluded-workspace")
          .map((c) => c.path),
        resumeAfter: s.next,
      }),
      s.next !== null)
    )
      return {
        kind: "done",
        remainingWork: !0,
        nextAuditStage: !0,
        telemetry: a(),
      };
    if (
      t.remoteLanded() &&
      ((r.contentlessWritesRetired = await Mi(t, e)), e.signal.aborted)
    )
      return { kind: "failed", failure: G(), telemetry: a() };
    const o = s.complete ? await la(t, s) : await ua(t, e);
    if (o === null) return { kind: "failed", failure: G(), telemetry: a() };
    s.complete || t.cache.clearScanPass();
    const l = o.missing.filter((c) => !be(c));
    if (((r.tracked = o.tracked), (r.missing = l.length), t.mayDeleteMissing()))
      for (const c of l) {
        const p = t.cache.get(c);
        p !== null &&
          (t.outbox.admit({
            operationId: t.newOperationId(),
            kind: "delete",
            path: c,
            expectedHash: p.contentHash,
            baseVersion: p.version,
          }),
          (r.deletesQueued += 1));
      }
    else if (l.length > 0) {
      for (let c = 0; c < l.length; c += en) t.remote.prune(l.slice(c, c + en));
      r.pruned = l.length;
    }
  } catch (o) {
    return { kind: "failed", failure: L(o), telemetry: a() };
  }
  return (
    t.onAudit({
      queued: r.writesQueued + r.deletesQueued + r.pruned,
      tracked: r.tracked,
      missing: r.missing,
    }),
    { kind: "done", remainingWork: !0, telemetry: a() }
  );
}
async function la(t, e) {
  const n = [];
  let s = null;
  for (;;) {
    const r = t.cache.page(s, Be);
    if (r.length === 0) break;
    for (const i of r) n.push(i.path);
    if (((s = r[r.length - 1]?.path ?? null), r.length < Be)) break;
  }
  return { tracked: n.length, missing: await ca(t, xr(e, n), e) };
}
async function ca(t, e, n) {
  let s = null;
  const r = [];
  for (const i of e) {
    const a = await wt(t, i);
    if (a.length > 0) {
      const o = (s ??= new Set(n.files.map((l) => l.path)));
      if (a.some((l) => o.has(l))) continue;
    }
    r.push(i);
  }
  return r;
}
async function ua(t, e) {
  const n = t.cache.scanSkippedDirectories(),
    s = (o) => n.some((l) => o.startsWith(`${l}/`)),
    r = [];
  let i = 0,
    a = null;
  for (;;) {
    if (e.signal.aborted) return null;
    const o = t.cache.page(a, Be);
    if (o.length === 0) break;
    for (const l of o) {
      if (((i += 1), t.cache.scanSaw(l.path) || s(l.path))) continue;
      (await S.lstat(Q(t, l.path)).then(
        () => "present",
        (p) =>
          p instanceof Error && "code" in p && p.code === "ENOENT"
            ? "absent"
            : "unknown",
      )) === "absent" && r.push(l.path);
    }
    if (((a = o[o.length - 1]?.path ?? null), o.length < Be)) break;
    await new Promise((l) => setImmediate(l));
  }
  return { tracked: i, missing: r };
}
function G() {
  return {
    class: "cancelled",
    reason: "stop-requested",
    message: "the effect was cancelled",
  };
}
const Qn = $.syncedFSConfig.localSafetyScanIntervalMs,
  da = $.syncedFSConfig.localSafetyScanBackoffCapMs,
  ha = $.syncedFSConfig.onBatteryCadenceMultiplier;
function pa(t, e, n) {
  return !n || e.queued > 0 ? Qn : Math.min(t * 2, da);
}
function fa(t, e, n) {
  return !n || e !== "battery" ? t : t * ha;
}
const ma = { transcript: "Transcript", observation: "Observation" },
  ga = ["transcript", "observation", "other"];
class va {
  tallies = new Map();
  recordUpload(e, n) {
    this.record("upload", e, n);
  }
  recordDownload(e, n) {
    this.record("download", e, n);
  }
  drain() {
    const e = {};
    for (const n of ["upload", "download"]) {
      let s = 0,
        r = 0;
      for (const i of ga) {
        const a = this.tallies.get(`${n}:${i}`);
        a !== void 0 &&
          ((s += a.bytes),
          (r += a.files),
          i !== "other" && (e[`${n}Bytes${ma[i]}`] = a.bytes));
      }
      r > 0 && ((e[`${n}Bytes`] = s), (e[`${n}Files`] = r));
    }
    return (this.tallies.clear(), e);
  }
  record(e, n, s) {
    const r = `${e}:${ee.syncedPathClass(n)}`,
      i = this.tallies.get(r) ?? { bytes: 0, files: 0 };
    ((i.bytes += s), (i.files += 1), this.tallies.set(r, i));
  }
}
const V = u.pipe(u.number(), u.safeInteger(), u.minValue(0)),
  St = u.pipe(u.number(), u.safeInteger(), u.minValue(1)),
  de = u.custom(
    (t) => typeof t == "string" && $.parseRemoteSyncPath(t) !== null,
    "Expected a canonical workspace-relative path",
  ),
  wa = u.union([u.literal(""), de]),
  Ea = u.object({
    sizeBytes: V,
    mimeType: u.optional(u.nullable(u.string())),
    writtenBy: u.optional(u.nullable(u.string())),
    packR2Key: u.optional(u.nullable(u.string())),
    packOffset: u.optional(u.nullable(V)),
    packSize: u.optional(u.nullable(V)),
    presignedReadUrl: u.optional(u.string()),
  }),
  ct = u.lazy(() =>
    u.union([
      u.null(),
      u.boolean(),
      u.number(),
      u.string(),
      u.array(ct),
      u.record(u.string(), ct),
    ]),
  ),
  Jn = u.record(u.string(), ct),
  ka = u.object({
    path: de,
    version: St,
    contentHash: u.string(),
    op: u.picklist(["write", "delete", "restore", "move"]),
    previousPath: u.optional(de),
    versionMetadata: u.optional(Ea),
    inlineContent: u.optional(u.string()),
    metadata: u.optional(Jn),
    metadataOnly: u.optional(u.literal(!0)),
  }),
  ba = u.object({
    workspaceId: u.string(),
    prevSeq: V,
    newSeq: St,
    prevRootHash: u.string(),
    newRootHash: u.string(),
    changes: u.array(ka),
    truncated: u.optional(u.boolean()),
  }),
  ya = u.variant("status", [
    u.object({
      status: u.literal("current"),
      serverRootHash: u.string(),
      currentSeq: V,
    }),
    u.object({
      status: u.literal("changes"),
      serverRootHash: u.string(),
      currentSeq: V,
      events: u.array(ba),
      hasMore: u.boolean(),
    }),
    u.object({
      status: u.literal("repair_required"),
      serverRootHash: u.string(),
      currentSeq: V,
      reason: u.picklist(["cursor_ahead", "journal_gap", "root_mismatch"]),
    }),
  ]),
  _a = u.variant("type", [
    u.object({ type: u.literal("file"), path: de, leafHash: u.string() }),
    u.object({
      type: u.literal("directory"),
      path: de,
      hash: u.string(),
      childCount: V,
    }),
  ]),
  Ta = u.variant("status", [
    u.object({
      status: u.literal("manifest_required"),
      serverRootHash: u.string(),
      currentSeq: V,
      reason: u.picklist([
        "version_proof_unavailable",
        "directory_budget_exceeded",
        "children_budget_exceeded",
        "response_budget_exceeded",
      ]),
    }),
    u.object({
      status: u.literal("stale_snapshot"),
      serverRootHash: u.string(),
      currentSeq: V,
    }),
    u.object({
      status: u.literal("frontier"),
      serverRootHash: u.string(),
      currentSeq: V,
      versionProof: u.literal("manifest_required"),
      childrenByDirectory: u.array(
        u.object({ path: wa, children: u.array(_a) }),
      ),
    }),
  ]),
  Sa = u.variant("status", [
    u.object({
      status: u.literal("page"),
      serverRootHash: u.string(),
      currentSeq: V,
      entries: u.array(
        u.object({
          path: de,
          version: St,
          contentHash: u.string(),
          sizeBytes: V,
        }),
      ),
      nextCursor: u.nullable(u.string()),
    }),
    u.object({
      status: u.literal("stale_snapshot"),
      serverRootHash: u.string(),
      currentSeq: V,
    }),
  ]),
  Ra = u.object({
    status: u.literal("page"),
    serverRootHash: u.string(),
    currentSeq: V,
    entries: u.array(u.object({ path: de, metadata: Jn })),
    nextCursor: u.nullable(u.string()),
  }),
  Ia = u.variant("status", [
    u.object({
      status: u.picklist(["consistent", "repaired", "stale_snapshot"]),
      serverRootHash: u.string(),
      currentSeq: V,
    }),
    u.object({
      status: u.literal("deferred"),
      serverRootHash: u.string(),
      currentSeq: V,
      retryAfterMs: V,
    }),
  ]),
  Na = 3e4,
  Ca = 12e4,
  fn = 6e4,
  Ha = 256 * 1024;
function mn(t, e) {
  const n = new AbortController();
  let s;
  const r = () => {
    (clearTimeout(s),
      (s = setTimeout(() => {
        n.abort(new DOMException(`no bytes moved for ${t}ms`, "TimeoutError"));
      }, t)));
  };
  return (
    r(),
    {
      signal: e === void 0 ? n.signal : AbortSignal.any([n.signal, e]),
      restart: r,
      stop: () => clearTimeout(s),
    }
  );
}
function st(t, e, n, s, r, i) {
  return t === 401
    ? d.authBlocked("credentials-expired", `${e} rejected the credentials`, 0)
    : t === 403
      ? d.permission("path-forbidden", "path", `${e} refused access${s}`)
      : t === 409
        ? r?.code === "protocol-pinned-elsewhere"
          ? d.permission(
              "protocol-pinned-elsewhere",
              "workspace",
              `${e} will not serve protocol v${d.SYNC_PROTOCOL_VERSION_V2} to a workspace pinned to v${r.pinned}`,
            )
          : d.reconcile("write-conflict", `${e} reported a conflict${s}`)
        : t === 412
          ? d.reconcile("stale-snapshot", `${e} reported a stale snapshot${s}`)
          : t === 429
            ? d.retryable("rate-limited", `${e} rate limited`, n)
            : t === 503 && i !== null
              ? d.unlandableVersion(
                  "content-unavailable",
                  {
                    reason: "unreadable",
                    path: i.path,
                    version: i.version,
                    expectedHash: i.contentHash,
                  },
                  `${e} has no content for this version`,
                )
              : t >= 500
                ? d.retryable("server-unavailable", `${e} returned ${t}`, n)
                : d.integrity(
                    "impossible-version",
                    `http:${e}:${t}`,
                    `${e} returned ${t}${s}`,
                  );
}
function Aa(t, e, n) {
  return t instanceof Error && "syscall" in t && "code" in t
    ? t.code === "ENOSPC"
      ? d.localEnvironment("disk-full", "no space left to stage a download")
      : d.localEnvironment(
          "root-unreadable",
          "a download could not be staged",
          n,
        )
    : ut(t, e);
}
async function La(t, e) {
  let n = 0;
  for (; n < e.byteLength; ) {
    const { bytesWritten: s } = await t.write(e, n, e.byteLength - n);
    n += s;
  }
}
function ut(t, e) {
  if (t instanceof Error) {
    if (t.name === "TimeoutError" || t.name === "AbortError")
      return d.retryable("network-timeout", `${e} timed out`);
    if (t.name === "TypeError")
      return d.retryable("offline", `${e} could not be reached`);
  }
  return d.unclassified(t);
}
class Oa {
  constructor(e) {
    this.options = e;
  }
  authState = { revision: 0, token: null };
  online = !0;
  answeredSinceFault = !1;
  setAuth(e) {
    return e.revision <= this.authState.revision
      ? !1
      : ((this.authState = e), !0);
  }
  authRevision() {
    return this.authState.revision;
  }
  setConnectivity(e) {
    this.online = e;
  }
  fault(e) {
    if (
      e.class !== "retryable" ||
      (e.reason !== "server-unavailable" && e.reason !== "network-timeout")
    )
      return e;
    const n = this.answeredSinceFault;
    return ((this.answeredSinceFault = !1), { ...e, serverAnswering: n });
  }
  storageFault(e) {
    return e.class !== "retryable" || e.reason === "rate-limited"
      ? e
      : { ...e, serverAnswering: this.answeredSinceFault };
  }
  async request(e, n, s, r, i = this.options.timeoutMs ?? Na) {
    if (!this.online)
      return {
        ok: !1,
        failure: d.retryable("offline", "the device reports no connectivity"),
      };
    const a = this.authState.token;
    if (a === null || a.trim() === "")
      return {
        ok: !1,
        failure: d.authBlocked(
          "credentials-missing",
          "no session",
          this.authState.revision,
        ),
      };
    const o = AbortSignal.timeout(i),
      l = s === void 0 ? o : AbortSignal.any([o, s]);
    let c;
    try {
      c = await this.options.fetchFn(`${this.options.baseUrl}${e}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${a}`,
          [d.FS_SYNC_PROTOCOL_HEADER]: String(d.SYNC_PROTOCOL_VERSION_V2),
        },
        body: JSON.stringify({ workspaceId: this.options.workspaceId, ...n }),
        signal: l,
      });
    } catch (p) {
      return { ok: !1, failure: this.fault(ut(p, e)) };
    }
    if (!c.ok) {
      const p = await Da(c);
      if (c.status === 409 && Ma(p))
        return ((this.answeredSinceFault = !0), { ok: !0, value: p });
      const m = Ge(c.headers.get("Retry-After")),
        R = Fa(p),
        h = st(
          c.status,
          e,
          m.kind === "delay" ? m.ms : void 0,
          R,
          Ua(p),
          Pa(p),
        );
      return (
        h.class !== "retryable" && (this.answeredSinceFault = !0),
        {
          ok: !1,
          failure:
            h.class === "auth-blocked"
              ? { ...h, authRevision: this.authState.revision }
              : this.fault(h),
        }
      );
    }
    this.answeredSinceFault = !0;
    try {
      const p = await c.json();
      if (r === void 0) return { ok: !0, value: p };
      const m = u.safeParse(r, p);
      return m.success
        ? { ok: !0, value: m.output }
        : {
            ok: !1,
            failure: d.integrity(
              "malformed-response",
              `body:${e}`,
              `${e} returned a response outside the sync protocol contract`,
            ),
          };
    } catch (p) {
      return {
        ok: !1,
        failure: d.integrity(
          "malformed-pack",
          `body:${e}`,
          `${e} returned a body that could not be read: ${p instanceof Error ? p.message : String(p)}`,
        ),
      };
    }
  }
  journal(e, n) {
    return this.request("/api/fs/sync-v2/journal", { ...e }, n, ya);
  }
  frontier(e, n) {
    return this.request("/api/fs/sync-v2/frontier", { ...e }, n, Ta);
  }
  manifest(e, n) {
    return this.request("/api/fs/sync-v2/manifest", { ...e }, n, Sa);
  }
  verifyTree(e, n) {
    return this.request("/api/fs/sync-v2/verify-tree", { ...e }, n, Ia, Ca);
  }
  metadataPage(e, n) {
    return this.request("/api/fs/sync-v2/metadata", { ...e }, n, Ra);
  }
  readFile(e, n) {
    return this.request("/api/fs/read", { path: e }, n);
  }
  readVersion(e, n, s) {
    return this.request("/api/fs/versions/read", { path: e, version: n }, s);
  }
  writeFile(e, n) {
    return this.request(
      "/api/fs/write",
      e.versionComment === void 0
        ? e
        : { ...e, versionCommentSource: "agent_draft_publish" },
      n,
    );
  }
  presignWrite(e, n) {
    return this.request(
      "/api/fs/presign/write",
      e.versionComment === void 0
        ? e
        : { ...e, versionCommentSource: "agent_draft_publish" },
      n,
    );
  }
  confirmWrite(e, n) {
    return this.request(
      "/api/fs/confirm",
      e.versionComment === void 0
        ? e
        : { ...e, versionCommentSource: "agent_draft_publish" },
      n,
    );
  }
  deleteFile(e, n) {
    return this.request("/api/fs/delete", e, n);
  }
  batchDelete(e, n) {
    return this.request("/api/fs/batch-delete", e, n);
  }
  moveFile(e, n) {
    return this.request("/api/fs/move", e, n);
  }
  packPresign(e, n) {
    return this.request("/api/fs/pack-presign", e, n);
  }
  packConfirm(e, n) {
    return this.request(
      "/api/fs/pack-confirm",
      {
        ...e,
        files: e.files.map((s) =>
          s.versionComment === void 0
            ? s
            : { ...s, versionCommentSource: "agent_draft_publish" },
        ),
      },
      n,
    );
  }
  readFiles(e, n, s) {
    return this.request(
      "/api/fs/batch-read",
      { paths: e, maxInlineBytes: n },
      s,
    );
  }
  async fetchToFile(e, n, s, r, i) {
    if (!this.online)
      return {
        ok: !1,
        failure: d.retryable("offline", "the device reports no connectivity"),
      };
    const a = mn(this.options.transferStallTimeoutMs ?? fn, r);
    let o = null,
      l = !1;
    try {
      const c = await this.options.fetchFn(e, {
        headers: n === void 0 ? {} : { Range: `bytes=${n.start}-${n.end}` },
        signal: a.signal,
      });
      if (!c.ok) {
        if (
          (await c.body?.cancel().catch(() => {}),
          c.status === 404 || c.status === 410)
        )
          return {
            ok: !1,
            failure: d.integrity(
              "content-unavailable",
              `http:presigned-read:${c.status}`,
              `presigned-read returned ${c.status}`,
            ),
          };
        const R = Ge(c.headers.get("Retry-After"));
        return {
          ok: !1,
          failure: st(
            c.status,
            "presigned-read",
            R.kind === "delay" ? R.ms : void 0,
            "",
            null,
            null,
          ),
        };
      }
      o = await S.open(s, "w");
      const p = Z.createHash("sha256");
      let m = 0;
      if (c.body !== null) {
        const R = c.body.getReader();
        try {
          for (;;) {
            const { done: h, value: g } = await R.read();
            if (h) break;
            (a.restart(),
              p.update(g),
              await La(o, g),
              (m += g.byteLength),
              i?.(m));
          }
        } catch (h) {
          throw (await R.cancel().catch(() => {}), h);
        }
      }
      return (
        await o.close(),
        (o = null),
        (l = !0),
        { ok: !0, value: { sizeBytes: m, sha256: p.digest("hex") } }
      );
    } catch (c) {
      return { ok: !1, failure: Aa(c, "presigned-read", s) };
    } finally {
      (a.stop(),
        await o?.close().catch(() => {}),
        l || (await S.rm(s, { force: !0 }).catch(() => {})));
    }
  }
  async putBytes(e, n, s, r) {
    if (!this.online)
      return {
        ok: !1,
        failure: d.retryable("offline", "the device reports no connectivity"),
      };
    const i = mn(this.options.transferStallTimeoutMs ?? fn, r);
    let a = 0;
    const o = new ReadableStream({
        pull(c) {
          if (a >= n.byteLength) {
            c.close();
            return;
          }
          const p = Math.min(a + Ha, n.byteLength);
          (c.enqueue(n.subarray(a, p)), (a = p), i.restart());
        },
      }),
      l = {
        method: "PUT",
        headers: {
          "Content-Length": String(n.byteLength),
          ...(s === void 0 ? {} : { "Content-MD5": s }),
        },
        body: o,
        duplex: "half",
        signal: i.signal,
      };
    try {
      const c = await this.options.fetchFn(e, l);
      if (!c.ok) {
        const p = Ge(c.headers.get("Retry-After"));
        return {
          ok: !1,
          failure: this.storageFault(
            st(
              c.status,
              "presigned-put",
              p.kind === "delay" ? p.ms : void 0,
              "",
              null,
              null,
            ),
          ),
        };
      }
      return { ok: !0, value: void 0 };
    } catch (c) {
      return { ok: !1, failure: this.storageFault(ut(c, "presigned-put")) };
    } finally {
      i.stop();
    }
  }
}
async function Da(t) {
  try {
    const e = await t.json();
    return typeof e == "object" && e !== null ? e : null;
  } catch {
    return null;
  }
}
function Ma(t) {
  return t !== null && t.conflict === !0;
}
function Fa(t) {
  return t !== null && typeof t.error == "string"
    ? `: ${t.error.slice(0, 200)}`
    : "";
}
function Pa(t) {
  if (t === null || t.code !== "content-unavailable") return null;
  const { error: e, path: n, version: s, contentHash: r } = t;
  return typeof e != "string" ||
    typeof n != "string" ||
    n === "" ||
    typeof s != "number" ||
    !Number.isSafeInteger(s) ||
    s <= 0 ||
    typeof r != "string"
    ? null
    : {
        code: "content-unavailable",
        error: e,
        path: n,
        version: s,
        contentHash: r,
      };
}
function Ua(t) {
  return t === null || typeof t.error != "string"
    ? null
    : t.code === "protocol-malformed"
      ? { code: "protocol-malformed", error: t.error }
      : t.code === "protocol-pinned-elsewhere" && typeof t.pinned == "number"
        ? {
            code: "protocol-pinned-elsewhere",
            pinned: t.pinned,
            error: t.error,
          }
        : null;
}
const Ba = 1e4,
  qa = 6e4,
  gn = 100;
function $a(t, e) {
  return t === null ? e : e === null ? t : Math.max(t, e);
}
function vn(t) {
  return (
    t === "operational.working.verifying-root" ||
    t === "operational.reconcile.verifying-root"
  );
}
const Wa = 5,
  wn = 500,
  za = {
    unverified: "could not be verified",
    unreadable: "has no content on the server",
    unlandable: "cannot be written at its path on this device",
  },
  En = ".orbitra-workspace";
class ja {
  constructor(e) {
    ((this.options = e), (this.accountId = e.accountId));
  }
  outboxHandle = null;
  cacheHandle = null;
  actor = null;
  transport = null;
  conflicts = null;
  outbox = null;
  cache = null;
  progress = new vi();
  statusRevision = 0;
  lastVerifiedAtMs = null;
  progressPublishedAt = 0;
  cancelProgressPublish = null;
  drafts = null;
  recoveries = null;
  openRecovery = null;
  remote = null;
  clock = d.systemClock;
  integrityRepeats = new Map();
  repairedDivergences = new Set();
  quarantine = new Mr();
  ignoreRules = new Es();
  rootIsBound = !1;
  replacedRoot = null;
  scanCompleted = !1;
  remoteLanded = !1;
  changeFeedConnected = !1;
  power = "plugged-in";
  online = !0;
  lastScanAt = 0;
  safetyScanIntervalMs = Qn;
  excludedRoots = [];
  accountId;
  state() {
    return this.actor?.state() ?? "stopped";
  }
  async start() {
    const e = this.options.clock ?? d.systemClock;
    ((this.clock = e),
      (this.excludedRoots = this.options.config.excludedRoots));
    const n = this.options.jitter ?? d.uniformJitter;
    try {
      const s = await mr({
          stateDir: this.options.config.stateDir,
          workspaceId: this.options.workspaceId,
          accountId: this.options.accountId,
          preserveLegacyState: this.options.config.preserveLegacyState,
          root: this.options.root,
        }),
        r = await Le({
          directory: s,
          fileName: `version-cache-${this.options.workspaceId}.db`,
          durability: "normal",
          migrations: qs,
          onCorruption: "quarantine",
          v1Schema: {
            table: "version_cache",
            ourFirstTable: "remote_versions",
          },
        });
      this.cacheHandle = r.db;
      const i = new js(r.db, () => e.now());
      this.cache = i;
      const a = await or({
        store: {
          directory: s,
          fileName: `outbox-${this.options.workspaceId}.db`,
          durability: "full",
          migrations: Ks,
          onCorruption: "fault",
          v1Schema: { table: "outbox_entries", ourFirstTable: "operations" },
        },
        now: () => e.now(),
        newRecoveryId: () => Z.randomUUID(),
        folderEvidence: () => this.folderEvidence(i, r.quarantinedTo !== null),
        onReplaced: () => i.clearScanPass(),
      });
      ((this.outboxHandle = a.db),
        this.options.publish({
          kind: "storage",
          workspaceId: this.options.workspaceId,
          stateDir: s,
        }),
        r.quarantinedTo !== null &&
          this.options.publish({
            kind: "telemetry",
            workspaceId: this.options.workspaceId,
            span: {
              name: "syncengine.store.quarantined",
              startedAt: e.now(),
              durationMs: 0,
              attributes: {
                store: "version-cache",
                quarantinedTo: H.basename(r.quarantinedTo),
              },
            },
          }),
        a.began !== null &&
          this.options.publish({
            kind: "telemetry",
            workspaceId: this.options.workspaceId,
            span: {
              name: "syncengine.store.recovered",
              startedAt: e.now(),
              durationMs: 0,
              attributes: {
                store: "outbox",
                preservedAs: a.began.preservedAs,
                causeCode: a.began.causeCode ?? "none",
                causePhase: a.began.causePhase,
                salvage: a.began.salvage,
                folder: a.began.folder,
              },
            },
          }));
      const o = new xs(a.db, () => e.now());
      this.outbox = o;
      const l = new Rn(a.db, () => e.now());
      this.recoveries = l;
      const c = l.latest();
      this.openRecovery = c?.verifiedAt === null ? c : null;
      const p = new Vs(i);
      ((this.remote = p), (this.conflicts = new As(a.db, () => e.now())));
      const m = new Ps(a.db);
      ((this.drafts = m),
        o.reclaimInFlight(),
        o.releaseParkedOn("reconcile:write-conflict", e.now()),
        o.releaseBlockedOn("retryable:", e.now()),
        o.pruneJournal(),
        this.conflicts.prune());
      const R = new Set();
      for (const w of m.open())
        (w.state === "active" || w.state === "ready-to-publish") &&
          R.add(w.draftId);
      (this.releaseOrphanedDrafts(R), m.pruneSettled());
      const h = new Oa({
        baseUrl: this.options.config.apiBaseUrl,
        workspaceId: this.options.workspaceId,
        fetchFn: this.options.fetchFn ?? globalThis.fetch.bind(globalThis),
      });
      ((this.transport = h), h.setConnectivity(this.online));
      const g = new Hr(
        H.join(s, `incoming-${encodeURIComponent(this.options.workspaceId)}`),
      );
      await g.reset();
      const E = new Bs(),
        v = new Gs(),
        f = new Ns({
          workspaceId: this.options.workspaceId,
          clock: e,
          jitter: n,
          publish: (w) => {
            if ((this.options.publish(w), w.kind === "transition")) {
              w.from === "operational.working.auditing" &&
                (this.lastScanAt = e.now());
              const T = w.trigger === "effect.done" && vn(w.from);
              if (
                (T &&
                  ((this.lastVerifiedAtMs = e.now()),
                  this.integrityRepeats.clear(),
                  this.repairedDivergences.clear(),
                  this.closeRecoveryIfProved()),
                w.trigger === "effect.done" &&
                  (w.from === "operational.working.applying-remote" ||
                    w.from === "operational.reconcile.applying-remote") &&
                  this.progress.trimExpectedDownloads(),
                w.to === "operational.idle" && T && !this.remoteLanded)
              ) {
                this.remoteLanded = !0;
                const P = o.counts();
                (P.pending > 0 &&
                  this.actor?.enqueue("outbox", { workClass: "outbox" }),
                  P.blocked > 0 &&
                    this.actor?.enqueue("audit", { workClass: "audit" }));
              }
              if (
                (this.publishStatus(w.to, "transition"),
                w.to === "operational.idle")
              ) {
                const P = this.actor;
                this.progress.settle({
                  uploads: P?.hasQueued("outbox") ?? !1,
                  downloads:
                    (P?.hasQueued("poll") || P?.hasQueued("remote")) ?? !1,
                });
              }
            }
            w.kind === "transition" &&
              w.to === "operational.idle" &&
              this.actor?.hasDueWork() === !1 &&
              (this.actor.hasTimer() === !1 || vn(w.from)) &&
              this.actor.armTimerAt(e.now() + this.pollIntervalMs());
          },
          onTimer: () => {
            (e.now() - this.lastScanAt >=
              this.paced(this.safetyScanIntervalMs) &&
              this.actor?.enqueue("audit", { workClass: "audit" }),
              this.actor?.enqueue("poll", {
                workClass: "poll",
                reason: "periodic-poll",
              }),
              this.actor?.enqueue("outbox", { workClass: "outbox" }));
          },
          holds: (w) =>
            this.openRecovery?.folder === "unproven" &&
            (w === "remote" || w === "poll" || w === "audit"),
          integrityRepeats: (w) =>
            w.class === "integrity"
              ? (this.integrityRepeats.get(w.fingerprint) ?? 0)
              : 0,
          noteIntegrity: (w) => this.noteIntegrity(w.fingerprint),
          repairIntegrity: (w) => this.repairIntegrity(w),
          effects: Si({
            workspaceId: this.options.workspaceId,
            root: this.options.root,
            staging: g,
            excludedRoots: () => this.excludedRoots,
            outbox: o,
            cache: i,
            remote: p,
            transport: h,
            suppression: E,
            holds: v,
            drafts: m,
            clock: () => e.now(),
            jitter: n,
            mayDeleteMissing: () =>
              this.rootIsBound &&
              this.scanCompleted &&
              this.openRecovery === null,
            remoteLanded: () => this.remoteLanded,
            isIgnored: (w) =>
              $.isSyncIgnoredPath(w) || this.ignoreRules.isIgnored(w),
            onEnterDirectory: (w, T, P) => this.ignoreRules.scanDir(w, T, P),
            loadIgnoreRulesFor: (w) => this.loadIgnoreRulesFor(w),
            onAudit: (w) => {
              ((this.scanCompleted = !0),
                this.openRecovery !== null &&
                  this.openRecovery.auditedAt === null &&
                  (l.noteAudited(this.openRecovery.recoveryId),
                  this.refreshRecovery()),
                (this.safetyScanIntervalMs = pa(
                  this.safetyScanIntervalMs,
                  w,
                  this.options.config.watched,
                )),
                this.replacedRoot !== null &&
                  w.missing === 0 &&
                  this.bindReplacedRoot(i, this.replacedRoot, w.tracked));
            },
            onConflict: (w) => {
              (this.conflicts?.record(w),
                this.options.publish({
                  kind: "conflict",
                  workspaceId: this.options.workspaceId,
                  resolution: w,
                }));
            },
            onCacheRowDropped: (w) =>
              this.publishCacheRepaired(w.reason, w.fingerprint),
            onUnverifiedDownload: (w) => {
              this.options.publish({
                kind: "unverifiedDownload",
                workspaceId: this.options.workspaceId,
                download: w,
              });
            },
            quarantine: this.quarantine,
            onFileChange: (w) => {
              this.options.publish({
                kind: "fileChange",
                workspaceId: this.options.workspaceId,
                event: w,
              });
            },
            onMetadataChange: (w) => {
              for (let T = 0; T < w.length; T += wn)
                this.options.publish({
                  kind: "metadataChange",
                  workspaceId: this.options.workspaceId,
                  changes: w.slice(T, T + wn),
                });
            },
            newOperationId: () => Z.randomUUID(),
            progress: this.progress,
            transfer: new va(),
          }),
        });
      ((this.actor = f),
        this.progress.onChange(() => this.publishProgress()),
        f.dispatch("start"),
        f.dispatch("stores-opened"));
      const k = i.rootIdentity(),
        b = await Mt(
          this.options.root,
          k === null
            ? null
            : {
                device: k.device,
                inode: k.inode,
                resolvedRoot: k.resolvedRoot,
              },
        );
      (b.kind === "unbound"
        ? i.bindRootIdentity(
            b.observed.device,
            b.observed.inode,
            this.options.root,
          )
        : b.kind === "moved" && i.rebindRootPath(this.options.root),
        (this.rootIsBound = b.kind === "unbound" || Ft(b)),
        (this.replacedRoot = b.kind === "replaced" ? b.observed : null),
        this.rootIsBound ||
          this.options.publish({
            kind: "fault",
            workspaceId: this.options.workspaceId,
            cause:
              b.kind === "unavailable" || b.kind === "replaced"
                ? b.failure
                : d.localEnvironment(
                    "root-replaced",
                    "the synced root could not be confirmed",
                  ),
          }));
      const _ = e.now(),
        C = await p.hydrate(() => new Promise((w) => setImmediate(w)));
      return (
        this.options.publish({
          kind: "telemetry",
          workspaceId: this.options.workspaceId,
          span: {
            name: "syncengine.hydrate",
            startedAt: _,
            durationMs: Math.max(0, e.now() - _),
            attributes: {
              filesLoaded: C.filesLoaded,
              pages: C.pages,
              longestPageMs: C.longestPageMs,
              rootBound: this.rootIsBound,
            },
          },
        }),
        f.dispatch("hydrated"),
        f.dispatch("startup-reconciled"),
        f.dispatch("sources-attached"),
        f.dispatch("startup-audited"),
        f.enqueue("remote", { workClass: "remote", reason: "startup" }),
        f.enqueue("audit", { workClass: "audit" }),
        null
      );
    } catch (s) {
      return (
        await this.closeStores(),
        s instanceof D
          ? s.failure
          : {
              class: "invariant",
              reason: "unclassified",
              message: s instanceof Error ? s.message : String(s),
            }
      );
    }
  }
  async folderEvidence(e, n) {
    const s = await S.readFile(H.join(this.options.root, En), "utf8")
      .then((o) => JSON.parse(o))
      .catch(() => null);
    if (
      s !== null &&
      typeof s == "object" &&
      "workspaceId" in s &&
      s.workspaceId === this.options.workspaceId
    )
      return "proven";
    const r = n ? null : e.rootIdentity();
    if (r !== null) {
      const o = await Mt(this.options.root, {
        device: r.device,
        inode: r.inode,
        resolvedRoot: r.resolvedRoot,
      });
      if (Ft(o)) return "proven";
    }
    const i = await S.readdir(this.options.root).catch(() => null);
    return i === null || i.some((o) => o !== En && !$.isSyncIgnoredName(o))
      ? "unproven"
      : "proven";
  }
  refreshRecovery() {
    const e = this.recoveries?.latest() ?? null;
    this.openRecovery = e?.verifiedAt === null ? e : null;
  }
  closeRecoveryIfProved() {
    const e = this.openRecovery,
      n = this.recoveries,
      s = this.outbox,
      r = this.cache?.checkpoint() ?? null;
    if (
      e === null ||
      n === null ||
      s === null ||
      this.remote === null ||
      e.auditedAt === null ||
      r === null ||
      this.actor?.hasQueued("audit") === !0
    )
      return;
    const i = s.counts();
    i.pending > 0 ||
      i.inFlight > 0 ||
      (this.remote.rootHash() === r.rootHash &&
        n.noteVerified(e.recoveryId) &&
        (this.refreshRecovery(),
        this.options.publish({
          kind: "telemetry",
          workspaceId: this.options.workspaceId,
          span: {
            name: "syncengine.store.recovery-verified",
            startedAt: this.clock.now(),
            durationMs: Math.max(0, this.clock.now() - e.startedAt),
            attributes: { store: "outbox", reviewOpen: n.openItemCount() },
          },
        })));
  }
  recoveryStatus() {
    const e = this.recoveries;
    if (e === null) return null;
    const n = this.openRecovery,
      s = e.openItemCount();
    if (n === null) {
      if (s === 0) return null;
      const i = e.latest();
      return i === null
        ? null
        : {
            recoveryId: i.recoveryId,
            startedAtMs: i.startedAt,
            stage: "recovered",
            reviewCount: s,
          };
    }
    let r;
    return (
      n.folder === "unproven"
        ? (r = "confirm-folder")
        : n.auditedAt === null
          ? (r = "comparing")
          : (r = "finishing"),
      {
        recoveryId: n.recoveryId,
        startedAtMs: n.startedAt,
        stage: r,
        reviewCount: s,
      }
    );
  }
  bindReplacedRoot(e, n, s) {
    const r = (i) => {
      this.options.publish({
        kind: "telemetry",
        workspaceId: this.options.workspaceId,
        span: {
          name: "syncengine.root.rebound",
          startedAt: this.clock.now(),
          durationMs: 0,
          attributes: { tracked: s, ...i },
        },
      });
    };
    try {
      e.bindRootIdentity(n.device, n.inode, this.options.root);
    } catch (i) {
      r({
        outcome: "failed",
        failureReason: i instanceof D ? i.failure.reason : "unclassified",
      });
      return;
    }
    ((this.replacedRoot = null),
      (this.rootIsBound = !0),
      r({ outcome: "done" }));
  }
  async loadIgnoreRulesFor(e) {
    const n = e.split("/").filter((o) => o.length > 0),
      s = n.slice(0, -1),
      r = n[n.length - 1],
      i = r !== void 0 && $.isIgnoreConfigName(r);
    (i && this.ignoreRules.invalidate(s.join("/")),
      await this.ignoreRules.scanDir(this.options.root, ""));
    let a = "";
    for (const o of s)
      ((a = a === "" ? o : `${a}/${o}`),
        await this.ignoreRules.scanDir(H.join(this.options.root, a), a));
    return i ? s.join("/") : null;
  }
  setChangeFeed(e) {
    this.changeFeedConnected = e;
  }
  setPowerSource(e) {
    this.power = e;
  }
  pollIntervalMs() {
    return this.paced(this.changeFeedConnected ? qa : Ba);
  }
  paced(e) {
    return fa(e, this.power, this.options.config.watched);
  }
  setConnectivity(e) {
    const n = e && !this.online;
    ((this.online = e),
      this.transport?.setConnectivity(e),
      n &&
        (this.actor?.enqueue("poll", {
          workClass: "poll",
          reason: "connectivity-restored",
        }),
        this.actor?.enqueue("outbox", { workClass: "outbox" })));
  }
  noteIntegrity(e) {
    this.integrityRepeats.set(e, (this.integrityRepeats.get(e) ?? 0) + 1);
  }
  repairIntegrity(e) {
    if (e.held !== void 0) return this.quarantineVersion(e, e.held);
    const n = this.remote,
      s = e.path;
    return n === null ||
      s === void 0 ||
      e.reason !== "version-diverged" ||
      this.repairedDivergences.has(e.fingerprint) ||
      !n.forget(s)
      ? null
      : (this.repairedDivergences.add(e.fingerprint),
        this.publishCacheRepaired(e.reason, e.fingerprint),
        d.retryable(
          "cache-row-dropped",
          `the cache row for ${s} could not be reconciled and was dropped`,
        ));
  }
  publishCacheRepaired(e, n) {
    this.options.publish({
      kind: "telemetry",
      workspaceId: this.options.workspaceId,
      span: {
        name: "syncengine.cache.repaired",
        startedAt: this.clock.now(),
        durationMs: 0,
        attributes: { failureReason: e, fingerprint: n },
      },
    });
  }
  quarantineVersion(e, n) {
    return this.quarantine.hold(n)
      ? (this.options.publish({
          kind: "telemetry",
          workspaceId: this.options.workspaceId,
          span: {
            name: "syncengine.download.quarantined",
            startedAt: this.clock.now(),
            durationMs: 0,
            attributes: {
              failureReason: e.reason,
              path: n.path,
              version: n.version,
              expectedHash: n.expectedHash,
              ...(n.reason === "unverified"
                ? {
                    actualHash: n.actualHash,
                    expectedBytes: n.expectedBytes,
                    actualBytes: n.actualBytes,
                  }
                : {}),
            },
          },
        }),
        d.retryable(
          "download-quarantined",
          `${n.path} version ${n.version} ${za[n.reason]} and is held back until the server changes it`,
        ))
      : null;
  }
  handle(e) {
    const n = this.actor;
    if (n === null)
      return { accepted: !1, reason: "the workspace is not mounted" };
    switch (e.kind) {
      case "start":
        return { accepted: !0 };
      case "triggerSync":
        return (
          n.enqueue("remote", {
            workClass: "remote",
            reason: e.reason,
            rootHashHint: e.rootHashHint,
            sequenceHint: e.sequenceHint,
            changeHint: e.changeHint,
          }),
          { accepted: !0 }
        );
      case "localEvents":
        return (
          n.enqueue("local-events", {
            workClass: "local-events",
            events: e.events,
          }),
          { accepted: !0 }
        );
      case "commitLocalFile":
      case "flushPathForPublish": {
        const s = {
          workClass: "publish-barrier",
          path: e.path,
          expectedHash: e.kind === "commitLocalFile" ? e.expectedHash : void 0,
        };
        return (n.enqueue("publish-barrier", s), { accepted: !0 });
      }
      case "directMutation":
        return (
          n.enqueue("direct-mutation", {
            workClass: "direct-mutation",
            op: e.op,
          }),
          { accepted: !0 }
        );
      case "openDraft": {
        const s = this.drafts,
          r = this.outbox;
        if (s === null || r === null)
          return { accepted: !1, reason: "no draft store" };
        const i = this.clock.now();
        return (
          r.transaction(() => {
            const a = s.openForPath(e.draft.path);
            (a !== null &&
              a.draftId !== e.draft.draftId &&
              a.state !== "published" &&
              a.state !== "discarded" &&
              s.save(Dt(a, i)),
              s.save({
                draftId: e.draft.draftId,
                path: e.draft.path,
                operation: e.draft.operation,
                baseVersion: e.draft.baseVersion,
                baseHash: e.draft.baseHash,
                draftHash: e.draft.draftHash,
                state: e.draft.turnComplete ? "ready-to-publish" : "active",
                updatedAt: i,
              }));
          }),
          { accepted: !0 }
        );
      }
      case "releaseOrphanedDrafts":
        return (
          this.releaseOrphanedDrafts(new Set(e.liveDraftIds)) > 0 &&
            n.enqueue("remote", { workClass: "remote", reason: "manual" }),
          { accepted: !0 }
        );
      case "draftDecision":
        return this.decideDraft(n, e.decision);
      case "rescan":
        return (n.enqueue("audit", { workClass: "audit" }), { accepted: !0 });
      case "setExcludedRoots":
        return ((this.excludedRoots = e.excludedRoots), { accepted: !0 });
      case "setAuth":
        return (
          (this.transport?.setAuth({ revision: e.revision, token: e.token }) ??
            !1) &&
            (this.outbox?.releaseParkedOn("auth-blocked", this.clock.now()),
            n.enqueue("outbox", { workClass: "outbox" }),
            n.enqueue("remote", {
              workClass: "remote",
              reason: "auth-refreshed",
            })),
          { accepted: !0 }
        );
      case "markConflictsSeen":
        return (this.conflicts?.markSeen(e.conflictIds), { accepted: !0 });
      case "setCachedVersion": {
        const s = this.remote;
        return s === null
          ? { accepted: !1, reason: "the workspace has no cache" }
          : s.apply(
                e.contentHash === ""
                  ? { kind: "delete", path: e.path, version: e.version }
                  : {
                      kind: "upsert",
                      path: e.path,
                      version: e.version,
                      contentHash: e.contentHash,
                      sizeBytes: e.sizeBytes,
                      mtimeMs: null,
                    },
              ).kind === "stale"
            ? { accepted: !1, reason: "a newer version is already cached" }
            : { accepted: !0 };
      }
      case "confirmRecoveryFolder": {
        const s = this.openRecovery;
        return s === null || s.recoveryId !== e.recoveryId
          ? { accepted: !1, reason: "no recovery is waiting on that answer" }
          : this.recoveries?.confirmFolder(s.recoveryId) !== !0
            ? { accepted: !0 }
            : (this.refreshRecovery(),
              n.enqueue("remote", { workClass: "remote", reason: "startup" }),
              n.enqueue("audit", { workClass: "audit" }),
              this.publishStatus(n.state(), "transition"),
              { accepted: !0 });
      }
      case "markRecoveryReviewed":
        return (
          this.recoveries?.markReviewed(e.itemIds),
          this.publishStatus(n.state(), "transition"),
          { accepted: !0 }
        );
      default:
        return {
          accepted: !1,
          reason: `the workspace does not handle ${e.kind}`,
        };
    }
  }
  releaseOrphanedDrafts(e) {
    const n = this.drafts,
      s = this.outbox;
    if (n === null || s === null) return 0;
    const r = this.clock.now();
    let i = 0;
    return (
      s.transaction(() => {
        for (const a of n.open()) {
          if (a.state === "published" || a.state === "discarded") continue;
          const o =
            a.state === "publishing" && s.activeForPath(a.path) !== null;
          Os(a, e, o) && (n.save(Dt(a, r)), (i += 1));
        }
      }),
      i > 0 &&
        this.options.publish({
          kind: "telemetry",
          workspaceId: this.options.workspaceId,
          span: {
            name: "syncengine.drafts.released",
            startedAt: r,
            durationMs: 0,
            attributes: { released: i },
          },
        }),
      i
    );
  }
  decideDraft(e, n) {
    const s = this.drafts;
    if (s === null) return { accepted: !1, reason: "no draft store" };
    const r = s.get(n.draftId);
    if (r === null) return { accepted: !1, reason: `no draft ${n.draftId}` };
    const i = Ds(
      r,
      n.kind === "publish" ? { kind: "publish" } : { kind: "retract" },
    );
    if (i.kind === "already") return { accepted: !0 };
    if (i.kind === "refused")
      return { accepted: !1, reason: i.failure.message };
    if (i.kind === "retract")
      return (s.save(Ls(i.from, this.clock.now())), { accepted: !0 });
    const a = this.outbox;
    if (a === null) return { accepted: !1, reason: "no outbox" };
    if (n.kind !== "publish")
      return { accepted: !1, reason: "not a publish decision" };
    const o = this.cache?.get(i.from.path) ?? null;
    if (
      i.from.operation === "write"
        ? o !== null && o.contentHash === n.expectedHash
        : o === null
    ) {
      const p = this.clock.now();
      return (
        s.save(
          kn(
            Ot(i.from, Z.randomUUID(), p),
            o?.version ?? i.from.baseVersion,
            p,
          ),
        ),
        { accepted: !0 }
      );
    }
    const c = Z.randomUUID();
    return (
      a.admit({
        operationId: c,
        kind: i.from.operation,
        path: i.from.path,
        expectedHash: n.expectedHash,
        baseVersion: o?.version ?? 0,
        versionComment: n.versionComment,
      }),
      s.save(Ot(i.from, c, this.clock.now())),
      e.enqueue("draft-review", { workClass: "draft-review", decision: n }),
      e.enqueue("outbox", { workClass: "outbox" }),
      { accepted: !0 }
    );
  }
  snapshot(e) {
    const n = this.outbox,
      s = this.cache,
      r = this.remote;
    if (n === null || s === null || r === null) return null;
    const i = n.counts(),
      a = s.checkpoint(),
      o = this.progress.snapshot(Wa),
      l = this.clock.now(),
      c = n.dueSummary(l);
    return (
      (this.statusRevision += 1),
      {
        state: e,
        pendingCount: i.pending + i.inFlight,
        blockedCount: i.blocked,
        dueCount: c.due,
        nextAttemptInMs:
          c.earliestAt === null ? null : Math.max(0, c.earliestAt - l),
        retryAttempt: this.actor?.retryAttempts() ?? 0,
        lastCheckpointSeq: a?.sequence ?? 0,
        lastCheckpointRootHash: a?.rootHash ?? "",
        online: this.online,
        failure: this.actor?.failure() ?? null,
        revision: this.statusRevision,
        filesTracked: r.fileCount(),
        outbox: o.outbox,
        downloads: o.downloads,
        pendingLocalChanges: this.actor?.queuedLocalChanges() ?? 0,
        lastSyncedAtMs: $a(a?.committedAt ?? null, this.lastVerifiedAtMs),
        recovery: this.recoveryStatus(),
        quarantinedDownloads: this.quarantine.list(
          (p) => s.get(p)?.version ?? null,
        ),
      }
    );
  }
  publishStatus(e, n) {
    (this.cancelProgressPublish?.(), (this.cancelProgressPublish = null));
    const s = this.snapshot(e);
    s !== null &&
      ((this.progressPublishedAt = n === "progress" ? this.clock.now() : 0),
      this.options.publish({
        kind: "status",
        workspaceId: this.options.workspaceId,
        snapshot: s,
      }));
  }
  publishProgress() {
    const e = this.actor;
    if (e === null) return;
    const n = this.clock.now() - this.progressPublishedAt;
    if (n >= gn) {
      this.publishStatus(e.state(), "progress");
      return;
    }
    this.cancelProgressPublish === null &&
      (this.cancelProgressPublish = this.clock.setTimer(gn - n, () => {
        this.cancelProgressPublish = null;
        const s = this.actor;
        s !== null && this.publishStatus(s.state(), "progress");
      }));
  }
  async onDisk(e, n) {
    const s = [];
    for (const r of n)
      be(r.path) ||
        Un(H.join(this.options.root, r.path), this.excludedRoots) ||
        ((await oe({ root: this.options.root, cache: e }, r.path)) === null &&
          s.push(r));
    return s;
  }
  async answer(e) {
    const n = this.cache,
      s = this.outbox;
    if (n === null || s === null) return null;
    switch (e.kind) {
      case "fileMetadata":
        return { kind: "fileMetadata", metadata: n.metadata(e.path) };
      case "metadataValues": {
        const r = n.metadataValues(
            e.key,
            e.order,
            e.filter ?? {},
            e.after,
            e.limit,
          ),
          i = r[r.length - 1];
        return {
          kind: "metadataValues",
          entries: await this.onDisk(n, r),
          next:
            r.length === e.limit && i !== void 0
              ? { path: i.path, modifiedAtMs: i.modifiedAtMs }
              : null,
        };
      }
      case "findFiles": {
        const r = n.findFiles(e.filter, e.order, e.after, e.limit),
          i = r[r.length - 1];
        return {
          kind: "findFiles",
          entries: await this.onDisk(n, r),
          next:
            r.length === e.limit && i !== void 0
              ? { path: i.path, modifiedAtMs: i.modifiedAtMs }
              : null,
        };
      }
      case "folder": {
        const r = e.markers ?? [],
          i = await te.readFolder({
            root: this.options.root,
            path: e.path,
            stored: n.folderChildren(e.path, r),
            markers: r,
            excludedRoots: this.excludedRoots,
          }),
          a = te.orderFolder(i, e.path, e.order, e.filter);
        return {
          kind: "folder",
          entries: a.slice(e.offset, e.offset + e.limit),
          total: a.length,
        };
      }
      case "folderStats": {
        const r = e.markers ?? [];
        return {
          kind: "folderStats",
          folders: e.paths.map((i) => {
            const a = n.folderChildren(i, []),
              o = a.filter((c) => !c.name.startsWith(".")),
              l = o.flatMap((c) =>
                c.modifiedAtMs === null ? [] : [c.modifiedAtMs],
              );
            return {
              path: i,
              modifiedAtMs: l.length > 0 ? Math.max(...l) : null,
              folders: o.filter((c) => c.kind === "folder").length,
              files: o.filter((c) => c.kind === "file").length,
              markers: a
                .filter((c) => c.kind === "file" && r.includes(c.name))
                .map((c) => c.name),
            };
          }),
        };
      }
      case "cachedVersion": {
        const r = n.get(e.path);
        return {
          kind: "cachedVersion",
          version: r?.version ?? null,
          contentHash: r?.contentHash ?? null,
          sizeBytes: r?.sizeBytes ?? null,
          mtimeMs: r?.mtimeMs ?? null,
        };
      }
      case "writeSpelling":
        return {
          kind: "writeSpelling",
          path: await _i({ root: this.options.root, cache: n }, e.path),
        };
      case "trackedPaths": {
        const r = [];
        let i = e.prefix === "" ? null : e.prefix,
          a = !1;
        for (;;) {
          const o = n.page(i, 1e3);
          if (o.length === 0) break;
          for (const c of o)
            if (c.path.startsWith(e.prefix)) {
              if (r.length >= e.limit) {
                a = !0;
                break;
              }
              r.push(c.path);
            }
          if (a) break;
          const l = o[o.length - 1];
          if (l === void 0 || ((i = l.path), o.length < 1e3)) break;
        }
        return { kind: "trackedPaths", paths: r, more: a };
      }
      case "pendingPaths": {
        const r = this.clock.now(),
          i = [...s.blocked(), ...s.selectDue(r, e.limit)],
          a = new Set(),
          o = [];
        for (const c of i)
          if (!a.has(c.path)) {
            if ((a.add(c.path), o.length >= e.limit)) break;
            o.push({
              path: c.path,
              kind: c.kind,
              state: c.state === "blocked" ? "blocked" : "pending",
              attempts: c.attemptCount,
              lastErrorCode: c.lastErrorCode,
              nextAttemptInMs:
                c.state === "blocked" ? null : Math.max(0, c.nextAttemptAt - r),
            });
          }
        const l = o.map((c) => c.path);
        return {
          kind: "pendingPaths",
          paths: l,
          more: l.length >= e.limit,
          entries: o,
        };
      }
      case "pendingUnder":
        return {
          kind: "pendingUnder",
          pending:
            (this.actor?.hasBarrierFor(e.path) ?? !1) ||
            s.hasPendingUnder(e.path),
        };
      case "recentConflicts": {
        const r = this.conflicts;
        return r === null
          ? { kind: "recentConflicts", conflicts: [], unseen: 0 }
          : {
              kind: "recentConflicts",
              conflicts: r.recent(e.limit),
              unseen: r.unseenCount(),
            };
      }
      case "recoveryReview": {
        const r = this.recoveries;
        return r === null
          ? { kind: "recoveryReview", items: [], open: 0, recoveries: [] }
          : {
              kind: "recoveryReview",
              items: r
                .openItems(e.limit)
                .map((i) => ({
                  itemId: i.itemId,
                  path: i.path,
                  kind: i.kind,
                  createdAt: i.createdAt,
                })),
              open: r.openItemCount(),
              recoveries: r.all(),
            };
      }
    }
  }
  async stop() {
    await this.actor?.stop();
  }
  async unmount() {
    (await this.stop(),
      this.cancelProgressPublish?.(),
      (this.cancelProgressPublish = null),
      await this.closeStores(),
      (this.actor = null),
      (this.transport = null),
      (this.conflicts = null),
      (this.outbox = null),
      (this.cache = null),
      (this.drafts = null),
      this.ignoreRules.clear(),
      (this.remote = null));
  }
  async closeStores() {
    (this.outboxHandle?.close(),
      this.cacheHandle?.close(),
      (this.outboxHandle = null),
      (this.cacheHandle = null),
      (this.recoveries = null),
      (this.openRecovery = null));
  }
}
class Va {
  constructor(e) {
    this.options = e;
  }
  workspaces = new Map();
  online = !0;
  changeFeeds = new Map();
  power = "plugged-in";
  listen() {
    (this.options.channel.on("message", (e) => {
      this.receive(e).catch((n) => {
        this.publish({
          kind: "fault",
          workspaceId: "",
          cause: d.unclassified(n),
        });
      });
    }),
      this.options.channel.postMessage({ kind: "ready" }));
  }
  mountedCount() {
    return this.workspaces.size;
  }
  publish(e) {
    this.options.channel.postMessage({ kind: "publication", publication: e });
  }
  async receive(e) {
    const n = Ga(e);
    if (n !== null && n.kind === "query") {
      const a =
        (await this.workspaces
          .get(
            d.workspaceMountKey(
              n.envelope.payload.workspaceId,
              n.envelope.accountId,
            ),
          )
          ?.answer(n.envelope.payload)) ?? null;
      this.options.channel.postMessage({
        kind: "result",
        requestId: n.envelope.requestId,
        result:
          a === null
            ? {
                kind: "rejected",
                reason: "the workspace cannot answer that yet",
              }
            : { kind: "value", value: a },
      });
      return;
    }
    const s = n === null ? null : n.envelope;
    if (s === null) {
      this.publish({
        kind: "fault",
        workspaceId: "",
        cause: {
          class: "invariant",
          reason: "corrupt-message",
          message: "the host sent a message this worker cannot read",
        },
      });
      return;
    }
    const r = await this.execute(s.payload, s.accountId);
    this.options.channel.postMessage({
      kind: "result",
      requestId: s.requestId,
      result: r,
    });
  }
  async execute(e, n) {
    if (e.kind === "setConnectivity") {
      this.online = e.online;
      for (const i of this.workspaces.values()) i.setConnectivity(e.online);
      return { kind: "ok" };
    }
    if (e.kind === "setChangeFeed") {
      this.changeFeeds.set(n, e.connected);
      for (const i of this.workspaces.values())
        i.accountId === n && i.setChangeFeed(e.connected);
      return { kind: "ok" };
    }
    if (e.kind === "setPowerSource") {
      this.power = e.power;
      for (const i of this.workspaces.values()) i.setPowerSource(e.power);
      return { kind: "ok" };
    }
    const s = d.workspaceMountKey(e.workspaceId, n);
    if (e.kind === "mount") {
      if (this.workspaces.has(s)) return { kind: "ok" };
      if (e.config.protocolVersion > d.SYNC_PROTOCOL_VERSION_V2)
        return {
          kind: "rejected",
          reason: `workspace ${e.workspaceId} is pinned to sync protocol v${e.config.protocolVersion}, past this build's v${d.SYNC_PROTOCOL_VERSION_V2}`,
        };
      const i = new ja({
        accountId: n,
        workspaceId: e.workspaceId,
        root: e.root,
        config: e.config,
        publish: (o) => this.publish({ ...o, accountId: n }),
        fetchFn: this.options.fetchFn,
      });
      (this.workspaces.set(s, i),
        i.setChangeFeed(this.changeFeeds.get(n) ?? !1),
        i.setConnectivity(this.online),
        i.setPowerSource(this.power));
      const a = await i.start();
      return a !== null
        ? (this.workspaces.delete(s),
          await i.unmount(),
          this.publish({
            kind: "fault",
            workspaceId: e.workspaceId,
            accountId: n,
            cause: a,
          }),
          { kind: "failed", cause: a })
        : { kind: "ok" };
    }
    const r = this.workspaces.get(s);
    if (r === void 0)
      return {
        kind: "rejected",
        reason: `workspace ${e.workspaceId} is not mounted`,
      };
    if (e.kind === "unmount")
      return (this.workspaces.delete(s), await r.unmount(), { kind: "ok" });
    if (e.kind === "stop") return (await r.stop(), { kind: "ok" });
    try {
      const i = r.handle(e);
      return i.accepted
        ? { kind: "ok" }
        : { kind: "rejected", reason: i.reason ?? "refused" };
    } catch (i) {
      return {
        kind: "failed",
        cause: i instanceof D ? i.failure : d.unclassified(i),
      };
    }
  }
  async shutdown() {
    const e = [...this.workspaces.values()];
    this.workspaces.clear();
    for (const n of e) await n.unmount();
  }
  isOnline() {
    return this.online;
  }
}
function Ga(t) {
  if (typeof t != "object" || t === null || !("kind" in t)) return null;
  const e = t;
  if (e.kind !== "command" && e.kind !== "query") return null;
  const n = e.envelope;
  return typeof n != "object" ||
    n === null ||
    typeof n.requestId != "string" ||
    typeof n.payload != "object" ||
    n.payload === null ||
    (n.accountId !== void 0 && typeof n.accountId != "string")
    ? null
    : e.kind === "query"
      ? { kind: "query", envelope: n }
      : { kind: "command", envelope: n };
}
ee.blockCompromisedKeysInNodeTls();
ee.followSavedCertificateBlocklist(
  process.env[ee.SAVED_CERTIFICATE_BLOCKLIST_DIR_ENV],
);
const He = process.parentPort;
if (He !== void 0) {
  const t = new Va({
    channel: {
      postMessage: (e) => He.postMessage(e),
      on: (e, n) => {
        He.on("message", (s) => {
          n(s?.data ?? s);
        });
      },
    },
  });
  t.listen();
  for (const e of ["uncaughtException", "unhandledRejection"])
    process.on(e, (n) => {
      const s = n instanceof Error ? n : null;
      try {
        He.postMessage({
          kind: "publication",
          publication: {
            kind: "fault",
            workspaceId: "",
            cause: {
              class: "invariant",
              reason: "unclassified",
              message: `${e} in the engine worker: ${s ? s.message : String(n)}`,
              cause: s?.name,
            },
          },
        });
      } catch {}
      process.exit(1);
    });
  for (const e of ["SIGTERM", "SIGINT"])
    process.once(e, () => {
      t.shutdown().finally(() => process.exit(0));
    });
}
