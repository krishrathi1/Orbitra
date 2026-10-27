"use strict";
(function () {
  try {
    var l =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    l.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var l =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new l.Error().stack;
    e &&
      ((l._sentryDebugIds = l._sentryDebugIds || {}),
      (l._sentryDebugIds[e] = "6b532930-0b90-4e4c-98cd-4ac05b024b9c"),
      (l._sentryDebugIdIdentifier =
        "sentry-dbid-6b532930-0b90-4e4c-98cd-4ac05b024b9c"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const v = require("node:crypto"),
  y = require("node:fs/promises"),
  d = require("node:path"),
  p = require("../main-app.js"),
  M = require("node:worker_threads"),
  h = require("./replica-files-CUHDGfIt.js"),
  P = require("./OptMemSyncRunner-u5O_GHna.js");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
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
class f {
  constructor(e, r) {
    ((this.worker = e),
      (this.profileId = r),
      (this.ready = new Promise((t, i) => {
        const s = setTimeout(() => {
          const o = new Error("OptMem database worker did not start");
          (this.#o(o, { cause: "start-timeout" }), i(o), e.terminate());
        }, 1e4);
        (e.on("message", (o) => {
          if (o.type === "ready")
            (clearTimeout(s),
              o.reset &&
                p.logger.warn("[OptMem] Local memory database reset on open", {
                  profileId: this.profileId,
                  outcome: "reset",
                  reason: o.reset.reason,
                  ...(o.reset.code ? { code: o.reset.code } : {}),
                }),
              t());
          else if (o.type === "fatal") {
            clearTimeout(s);
            const n = new Error("OptMem database worker failed");
            (this.#o(n, {
              cause: "fatal",
              method: o.method,
              errorName: o.errorName,
              ...(o.code ? { code: o.code } : {}),
            }),
              i(n),
              e.terminate());
          } else {
            const n = this.#e.get(o.id);
            if (!n) return;
            (this.#e.delete(o.id),
              n.cleanup(),
              o.type === "result"
                ? n.resolve(o.result)
                : n.reject(new Error("OptMem database operation failed")));
          }
        }),
          e.once("error", (o) => {
            clearTimeout(s);
            const n = new Error("OptMem database worker failed");
            (this.#o(n, { cause: "thread-error", errorName: o.name }), i(n));
          }),
          e.once("exit", (o) => {
            clearTimeout(s);
            const n = new Error("OptMem database worker closed");
            (this.#o(n, { cause: "thread-exit", exitCode: o }), i(n));
          }));
      })));
  }
  ready;
  #e = new Map();
  #r = 0;
  #i = null;
  #s = null;
  static async open(e, r = {}) {
    const t = await h.resolveProfilePath(e, r.getProfilePath),
      { getWorkerPath: i } = await Promise.resolve()
        .then(() => require("../main-app.js"))
        .then((o) => o.runtimeAssetPath),
      s = new f(
        new M.Worker(i("OptMemDatabaseWorker"), {
          workerData: { profileId: e, profilePath: t },
        }),
        e,
      );
    return (await s.ready, s);
  }
  async prepareSearchIndex(...e) {
    const r = await this.#t({
      id: ++this.#r,
      method: "prepareSearchIndex",
      args: e,
    });
    if (r.method !== "prepareSearchIndex")
      throw new Error("Unexpected OptMem worker response");
    return r.value;
  }
  async getCursor() {
    const e = await this.#t({ id: ++this.#r, method: "getCursor", args: [] });
    if (e.method !== "getCursor")
      throw new Error("Unexpected OptMem worker response");
    return e.value;
  }
  async applyPage(...e) {
    await this.#t({ id: ++this.#r, method: "applyPage", args: e });
  }
  async recall(...e) {
    const r = await this.#t({ id: ++this.#r, method: "recall", args: e });
    if (r.method !== "recall")
      throw new Error("Unexpected OptMem worker response");
    return r.value;
  }
  async dreamNotes(...e) {
    const r = await this.#t({ id: ++this.#r, method: "dreamNotes", args: e });
    if (r.method !== "dreamNotes")
      throw new Error("Unexpected OptMem worker response");
    return r.value;
  }
  async zoom(...e) {
    const r = await this.#t({ id: ++this.#r, method: "zoom", args: e });
    if (r.method !== "zoom")
      throw new Error("Unexpected OptMem worker response");
    return r.value;
  }
  async inspectDebug(...e) {
    const r = await this.#t({ id: ++this.#r, method: "inspectDebug", args: e });
    if (r.method !== "inspectDebug")
      throw new Error("Unexpected OptMem worker response");
    return r.value;
  }
  async relevant(e, r, t, i, s) {
    const o = await this.#t(
      { id: ++this.#r, method: "relevant", args: [e, r, i, s] },
      t,
    );
    if (o.method !== "relevant")
      throw new Error("Unexpected OptMem worker response");
    return o.value;
  }
  async similar(e, r, t, i, s) {
    const o = await this.#t(
      { id: ++this.#r, method: "similar", args: [e, r, t, s] },
      i,
    );
    if (o.method !== "similar")
      throw new Error("Unexpected OptMem worker response");
    return o.value;
  }
  close() {
    return this.#s
      ? this.#s
      : (this.#o(new h.OptMemReplicaClosedError()),
        this.worker.threadId === -1
          ? Promise.resolve()
          : ((this.#s = new Promise((e) => {
              const r = setTimeout(() => {
                this.worker.terminate().then(() => e());
              }, 1e3);
              (this.worker.once("exit", () => {
                (clearTimeout(r), e());
              }),
                this.worker.postMessage({ method: "close" }));
            })),
            this.#s));
  }
  #t(e, r) {
    return (
      r?.throwIfAborted(),
      this.#i
        ? Promise.reject(this.#i)
        : new Promise((t, i) => {
            const s = () => {
              (this.#e.delete(e.id),
                this.worker.postMessage({ method: "cancel", id: e.id }),
                i(new DOMException("OptMem lookup cancelled", "AbortError")));
            };
            r?.addEventListener("abort", s, { once: !0 });
            const o = () => r?.removeEventListener("abort", s);
            this.#e.set(e.id, { resolve: t, reject: i, cleanup: o });
            try {
              this.worker.postMessage(e);
            } catch {
              (o(),
                this.#e.delete(e.id),
                i(new Error("OptMem database request could not be sent")));
            }
          })
    );
  }
  #o(e, r) {
    (!this.#i &&
      r &&
      p.logger.warn("[OptMem] Local memory database stopped", {
        profileId: this.profileId,
        ...r,
        pendingRequests: this.#e.size,
      }),
      (this.#i ??= e));
    for (const t of this.#e.values()) (t.cleanup(), t.reject(this.#i));
    this.#e.clear();
  }
}
async function O(l, e, r) {
  const { AuthenticatedOptMemSyncClient: t } = await Promise.resolve().then(
    () => require("./OptMemSyncClient-q_D5ugnb.js"),
  );
  return new t(l, e, r);
}
class m {
  constructor(e = {}, r = O, t = (s, o) => f.open(s, o), i) {
    ((this.options = e),
      (this.createSyncClient = r),
      (this.open = t),
      (this.companion = i));
  }
  #e = new Map();
  #r = new Map();
  #i = new Map();
  #s = null;
  #t = new Map();
  sharedLane(e, r) {
    const t = JSON.stringify(e);
    let i = this.#i.get(t);
    return (
      i ||
        ((i = new m(this.options, this.createSyncClient, this.open, e)),
        this.#i.set(t, i)),
      r !== void 0 && (i.#s = r),
      i
    );
  }
  openSharedLanes(e, r, t, i) {
    const s = [],
      o = a(e, r);
    for (const n of this.#i.values()) {
      const u = n.companion;
      u?.sourceWorkspaceId !== t ||
        u.companionId !== i ||
        !n.#e.has(o) ||
        s.push({
          contributor: {
            ...(n.#s ?? {
              userId: "kind" in u ? null : u.contributorUserId,
              displayName: null,
            }),
            scopeId: u.scopeId,
            ...("kind" in u ? { kind: u.kind } : {}),
          },
          registry: n,
        });
    }
    return s;
  }
  openSharedContexts(e) {
    const r = new Map();
    for (const t of this.#i.values()) {
      const i = t.companion;
      if (i)
        for (const s of t.#e.values()) {
          if (s.accountId !== e) continue;
          const o = {
            accountId: e,
            profileId: s.profileId,
            sourceWorkspaceId: i.sourceWorkspaceId,
            companionId: i.companionId,
          };
          r.set(JSON.stringify(o), o);
        }
    }
    return [...r.values()];
  }
  async pruneSharedCompanion(e, r, t, i, s) {
    for (const c of this.#i.values()) {
      const w = c.companion;
      w?.sourceWorkspaceId === t &&
        w.companionId === i &&
        !s.has(w.scopeId) &&
        (await c.closeProfile(e, r));
    }
    const n = (await this.replicaOptions(r)).getProfilePath?.(e);
    if (!n) throw new Error("OptMem replica path is unavailable");
    const u = d.join(n, "companions", a(JSON.stringify([t, i]), null)),
      b = new Set([...s].map((c) => a(c, null)));
    let q;
    try {
      q = await y.readdir(u);
    } catch (c) {
      if (c instanceof Error && "code" in c && c.code === "ENOENT") return;
      throw c;
    }
    await Promise.all(
      q
        .filter((c) => !b.has(c))
        .map((c) => y.rm(d.join(u, c), { recursive: !0, force: !0 })),
    );
  }
  get(e, r = null) {
    const t = this.#r.get(a(e, r));
    return t
      ? t.result.then((i) => {
          if (t.lifetime.signal.aborted) throw new h.OptMemReplicaClosedError();
          if (i.kind !== "synced")
            throw new Error("OptMem rebuild unavailable");
          const s = this.#e.get(a(e, r));
          if (!s) throw new h.OptMemReplicaClosedError();
          return s.replica;
        })
      : this.#o(e, r);
  }
  getOpen(e, r = null) {
    return (
      this.#e.get(a(e, r))?.replica ??
      Promise.reject(new h.OptMemReplicaClosedError())
    );
  }
  guardOpenProfile(e, r) {
    const t = a(e, r),
      i = this.#e.get(t);
    if (!i) throw new h.OptMemReplicaClosedError();
    return () => {
      if (this.#e.get(t) !== i) throw new h.OptMemReplicaClosedError();
    };
  }
  #o(e, r) {
    const t = this.#e.get(a(e, r));
    if (t) return t.replica;
    const i = a(e, r),
      s = this.openReplica(e, r).then(
        async (o) => {
          if (this.#e.get(i)?.replica !== s)
            throw (await o.close(), new h.OptMemReplicaClosedError());
          return o;
        },
        (o) => {
          throw this.#e.get(i)?.replica !== s
            ? new h.OptMemReplicaClosedError()
            : o;
        },
      );
    return (this.#e.set(i, { profileId: e, accountId: r, replica: s }), s);
  }
  async replicaOptions(e) {
    if (this.options.getProfilePath) {
      const t = this.options.getProfilePath;
      return {
        getProfilePath: (i) =>
          this.companion ? g(t(i), this.companion) : t(i),
      };
    }
    const { getAppDataPath: r } = await Promise.resolve().then(() =>
      require("./appPaths-eBQvtv9Z.js"),
    );
    return {
      ...this.options,
      getProfilePath: (t) => {
        const i = d.join(r(), "optmem-replicas", a(t, e));
        return this.companion ? g(i, this.companion) : i;
      },
    };
  }
  async openReplica(e, r) {
    return this.open(e, await this.replicaOptions(r));
  }
  async closeProfile(e, r = null) {
    const t = a(e, r);
    (this.#t.delete(t),
      this.#r.get(t)?.lifetime.abort(),
      this.#r.delete(t),
      await Promise.all([
        this.#a(e, r),
        ...[...this.#i.values()].map((i) => i.closeProfile(e, r)),
      ]));
  }
  async #a(e, r) {
    const t = this.#e.get(a(e, r));
    (this.#e.delete(a(e, r)),
      t &&
        (await t.replica.then(
          (i) => i.close(),
          () => {},
        )));
  }
  async purgeProfile(e, r = null) {
    const t = this.closeProfile(e, r);
    (await Promise.all([
      t,
      ...[...this.#i.values()].map((i) => i.purgeProfile(e, r)),
    ]),
      await h.removeOptMemReplicaFiles(e, await this.replicaOptions(r)));
  }
  async closeAll() {
    this.#t.clear();
    const e = [...this.#i.values()];
    this.#i.clear();
    for (const t of this.#r.values()) t.lifetime.abort();
    this.#r.clear();
    const r = [...this.#e.values()];
    (this.#e.clear(),
      await Promise.all([
        ...e.map((t) => t.closeAll()),
        ...r.map(({ replica: t }) =>
          t.then(
            (i) => i.close(),
            () => {},
          ),
        ),
      ]));
  }
  syncProfile(e, r = null) {
    const t = a(e, r),
      i = this.#t.get(t);
    if (i) return (i.refresh(), i.result);
    const s = this.#r.get(t);
    if (s) return s.result;
    this.#o(e, r);
    let o = !1;
    const n = Promise.resolve()
      .then(async () => {
        let u;
        do {
          if (((o = !1), this.#t.get(t)?.result !== n))
            return { kind: "unavailable", reason: "closed", cursor: null };
          u = await this.#u(e, r);
        } while (o && u.kind === "synced");
        return u;
      })
      .finally(() => {
        this.#t.get(t)?.result === n && this.#t.delete(t);
      });
    return (
      this.#t.set(t, {
        result: n,
        refresh: () => {
          o = !0;
        },
      }),
      n
    );
  }
  async #u(e, r) {
    const t = this.#r.get(a(e, r));
    if (t) return t.result;
    const i = this.#o(e, r),
      s = await this.#l(e, r);
    return this.#e.get(a(e, r))?.replica !== i
      ? { kind: "unavailable", reason: "closed", cursor: s.cursor }
      : s.kind === "unavailable" &&
          (s.reason === "protocol" || s.reason === "storage")
        ? (p.logger.warn("[OptMem] Rebuilding local memory copy", {
            userId: r,
            profileId: e,
            ...this.#n(),
            outcome: "rebuilding",
            reason: s.reason,
          }),
          this.rebuildProfile(e, r))
        : s;
  }
  rebuildProfile(e, r = null) {
    const t = a(e, r),
      i = this.#r.get(t);
    if (i) return i.result;
    if (!this.#e.has(t))
      return Promise.resolve({
        kind: "unavailable",
        reason: "closed",
        cursor: null,
      });
    const s = new AbortController(),
      o = this.#c(e, r, s.signal).finally(() => {
        this.#r.get(t)?.result === o && this.#r.delete(t);
      });
    return (this.#r.set(t, { result: o, lifetime: s }), o);
  }
  async #c(e, r, t) {
    const i = performance.now();
    let s = "close";
    try {
      (await this.#a(e, r),
        t.throwIfAborted(),
        (s = "remove"),
        await h.removeOptMemReplicaFiles(e, await this.replicaOptions(r)),
        t.throwIfAborted(),
        (s = "sync"));
      const o = await this.#l(e, r);
      return (
        t.throwIfAborted(),
        p.logger[o.kind === "synced" ? "info" : "warn"](
          "[OptMem] Local memory copy rebuild finished",
          {
            userId: r,
            profileId: e,
            ...this.#n(),
            outcome: o.kind === "synced" ? "rebuilt" : "empty",
            ...(o.kind === "unavailable" ? { reason: o.reason } : {}),
            durationMs: Math.round(performance.now() - i),
          },
        ),
        o
      );
    } catch (o) {
      return (
        t.aborted ||
          p.logger.warn("[OptMem] Local memory copy rebuild finished", {
            userId: r,
            profileId: e,
            ...this.#n(),
            outcome: "failed",
            failedStep: s,
            errorName: o instanceof Error ? o.name : "Error",
            durationMs: Math.round(performance.now() - i),
          }),
        {
          kind: "unavailable",
          reason: t.aborted ? "closed" : "storage",
          cursor: null,
        }
      );
    }
  }
  #n() {
    return this.companion
      ? {
          lane: "kind" in this.companion ? this.companion.kind : "shared",
          companionId: this.companion.companionId,
          sourceWorkspaceId: this.companion.sourceWorkspaceId,
          scopeId: this.companion.scopeId,
        }
      : { lane: "own" };
  }
  async #l(e, r = null) {
    try {
      const [t, i] = await Promise.all([
        this.#o(e, r),
        this.createSyncClient(e, r, this.companion),
      ]);
      return await new P.OptMemSyncRunner(t, i).syncToStableHead();
    } catch {
      return { kind: "unavailable", reason: "storage", cursor: null };
    }
  }
}
function a(l, e) {
  return v
    .createHash("sha256")
    .update(JSON.stringify([e, l]))
    .digest("hex");
}
function g(l, e) {
  return d.join(
    l,
    "companions",
    a(JSON.stringify([e.sourceWorkspaceId, e.companionId]), null),
    a(e.scopeId, null),
  );
}
const k = new m();
exports.OptMemReplicaRegistry = m;
exports.optMemReplicaRegistry = k;
