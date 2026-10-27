"use strict";
(function () {
  try {
    var s =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    s.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var s =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new s.Error().stack;
    e &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[e] = "a879ecbe-2039-4ab3-b7f5-eb1db22218ff"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-a879ecbe-2039-4ab3-b7f5-eb1db22218ff"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const d = require("../main-app.js"),
  y = require("node:crypto"),
  b = require("node:util"),
  c = require("./savedCertificateBlocklist-BUtmL3xA.js"),
  w = require("./settled-read-r0Yf0ORp.js"),
  h = require("./state-CPqa2lvF.js"),
  S = require("./parse-MOHEM7uu.js");
require("node:path");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
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
require("module");
require("./fs-native-KvxiM8hl.js");
require("node:module");
require("node:tls");
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
const g = 4,
  C = 4;
function p(s) {
  return Buffer.from(`${JSON.stringify(s, null, 2)}
`);
}
function q(s) {
  return !s || s.length === 0
    ? { status: "absent" }
    : S.parseOnboardingChecklistRecord(s.toString("utf8"));
}
function f(s) {
  return s.status === "unsupported_schema"
    ? new Error(
        `existing file uses newer onboarding checklist schema ${s.schemaVersion}`,
      )
    : new Error("existing onboarding checklist is malformed");
}
class O {
  constructor(e, t = {}) {
    ((this.store = e),
      (this.now = t.now ?? (() => new Date())),
      (this.createId = t.createId ?? y.randomUUID),
      (this.stopWatching = e.onFileChanged(
        c.SYNCED_FS_LAYOUT.userOnboardingChecklist,
        () => {
          this.disposed ||
            this.enqueue((r) => this.reloadFromStore(!0, r)).catch(() => {});
        },
      )));
  }
  now;
  createId;
  listeners = new Set();
  stopWatching;
  current = null;
  mutationQueue = Promise.resolve();
  disposed = !1;
  lifecycleGeneration = 0;
  load() {
    return this.enqueue((e) => this.reloadFromStore(!0, e));
  }
  getSnapshot() {
    return (this.assertActive(this.lifecycleGeneration), this.current);
  }
  ensureEnrolled() {
    return this.enqueue(async (e) => {
      let t = await this.readStableSnapshot(e);
      if (t.reserved && t.version > 0) {
        const r = q(
          await this.store.readFileVersion(
            c.SYNCED_FS_LAYOUT.userOnboardingChecklist,
            t.version,
          ),
        );
        if ((this.assertActive(e), r.status === "valid"))
          return {
            status: "valid",
            record: await this.writeWithConflicts(r.record, t.version, e),
          };
        if (r.status !== "absent") throw f(r);
      }
      for (let r = 0; r < g; r += 1) {
        const i = t.result;
        if (i.status === "valid") return (this.publish(i), i);
        if (i.status !== "absent") throw f(i);
        const u = h.createOnboardingChecklistRecord(
          this.now(),
          this.createId(),
        );
        try {
          (this.assertActive(e),
            await this.store.writeFile(
              c.SYNCED_FS_LAYOUT.userOnboardingChecklist,
              p(u),
              { baseVersion: t.version },
            ),
            this.assertActive(e));
          const n = { status: "valid", record: u };
          return (this.publish(n), n);
        } catch (n) {
          if (!(n instanceof w.FSConflictError)) throw n;
          this.assertActive(e);
          const o = await this.store.readFileVersion(
            c.SYNCED_FS_LAYOUT.userOnboardingChecklist,
            n.currentVersion,
          );
          this.assertActive(e);
          const a = q(o);
          if (a.status === "valid") return (this.publish(a), a);
          if (a.status === "absent") {
            t = { result: a, version: n.currentVersion, reserved: !1 };
            continue;
          }
          throw f(a);
        }
      }
      throw new Error(
        "Onboarding checklist enrollment exceeded conflict retry limit",
      );
    });
  }
  mutate(e) {
    return this.enqueue(async (t) => {
      const r = await this.readStableSnapshot(t),
        i = r.result;
      if (i.status !== "valid")
        throw new Error(
          `Cannot update onboarding checklist with status ${i.status}`,
        );
      const u = Array.isArray(e) ? e : [e];
      let n = i.record;
      for (const o of u) n = h.applyChecklistMutation(n, o);
      return n === i.record
        ? i.record
        : this.writeWithConflicts(n, r.version, t);
    });
  }
  subscribe(e) {
    return (
      this.assertActive(this.lifecycleGeneration),
      this.listeners.add(e),
      this.current && e(this.current),
      () => this.listeners.delete(e)
    );
  }
  dispose() {
    this.disposed ||
      ((this.disposed = !0),
      (this.lifecycleGeneration += 1),
      this.stopWatching(),
      this.listeners.clear());
  }
  enqueue(e) {
    if (this.disposed)
      return Promise.reject(
        new Error("Onboarding checklist service is disposed"),
      );
    const t = this.lifecycleGeneration,
      r = () => (this.assertActive(t), e(t)),
      i = this.mutationQueue.then(r, r);
    return (
      (this.mutationQueue = i.then(
        () => {},
        () => {},
      )),
      i
    );
  }
  assertActive(e) {
    if (this.disposed || e !== this.lifecycleGeneration)
      throw new Error("Onboarding checklist service is disposed");
  }
  async readStableSnapshot(e) {
    for (let t = 0; t < C; t += 1) {
      this.assertActive(e);
      const r = await this.store.getVersion(
        c.SYNCED_FS_LAYOUT.userOnboardingChecklist,
      );
      this.assertActive(e);
      const i = await this.store.readFileOrNull(
        c.SYNCED_FS_LAYOUT.userOnboardingChecklist,
      );
      this.assertActive(e);
      const u = await this.store.getVersion(
        c.SYNCED_FS_LAYOUT.userOnboardingChecklist,
      );
      if ((this.assertActive(e), r === u))
        return {
          result: q(i),
          version: u,
          reserved: i !== null && i.length === 0,
        };
    }
    throw new Error("Onboarding checklist changed repeatedly while reading");
  }
  async reloadFromStore(e, t) {
    const r = await this.readStableSnapshot(t),
      i = r.result;
    if (
      e &&
      this.current?.status === "valid" &&
      i.status === "valid" &&
      !b.isDeepStrictEqual(this.current.record, i.record)
    ) {
      const u = h.mergeOnboardingChecklistRecords(
        this.current.record,
        i.record,
      );
      if (!b.isDeepStrictEqual(u, i.record))
        return {
          status: "valid",
          record: await this.writeWithConflicts(u, r.version, t),
        };
    }
    return (this.publish(i), i);
  }
  async writeWithConflicts(e, t, r) {
    let i = e,
      u = t;
    for (let n = 0; n < g; n += 1)
      try {
        return (
          this.assertActive(r),
          await this.store.writeFile(
            c.SYNCED_FS_LAYOUT.userOnboardingChecklist,
            p(i),
            { baseVersion: u },
          ),
          this.assertActive(r),
          this.publish({ status: "valid", record: i }),
          i
        );
      } catch (o) {
        if (!(o instanceof w.FSConflictError)) throw o;
        this.assertActive(r);
        const a = await this.store.readFileVersion(
          c.SYNCED_FS_LAYOUT.userOnboardingChecklist,
          o.currentVersion,
        );
        this.assertActive(r);
        const l = q(a);
        if (l.status !== "valid")
          throw l.status === "absent"
            ? new Error(
                "Onboarding checklist update conflicted without a winning file",
              )
            : f(l);
        ((i = h.mergeOnboardingChecklistRecords(i, l.record)),
          (u = o.currentVersion));
      }
    throw new Error(
      "Onboarding checklist update exceeded conflict retry limit",
    );
  }
  publish(e) {
    this.current = e;
    for (const t of this.listeners) t(e);
  }
}
class v {
  entries = new Map();
  constructor() {
    d.onAuthAccountAvailabilityChanged(({ userId: e, session: t }) => {
      if (!t)
        for (const r of this.entries.keys())
          d.authManager.forProfile(r).accountId === e && this.dispose(r);
    });
  }
  async getOrCreate(e, t) {
    const r = await d.syncedFSManagerRegistry.getOrCreate(e, t);
    process.platform === "win32" &&
      (await d.repairChecklistDirectory(r.rootDir));
    const i = this.entries.get(e);
    if (i?.manager === r) return i.service;
    i?.service.dispose();
    const u = {
        readFileOrNull: (o) => r.fs.readFileOrNull(o),
        readFileVersion: (o, a) => r.readFileVersion(o, a),
        getVersion: (o) => r.fs.getVersion(o),
        writeFile: (o, a, l) => r.fs.writeFile(o, a, l),
        onFileChanged: (o, a) => r.onFileChanged(o, a),
      },
      n = new O(u);
    return (this.entries.set(e, { manager: r, service: n }), n);
  }
  dispose(e) {
    (this.entries.get(e)?.service.dispose(),
      this.entries.delete(e),
      d.ipcStateRegistry.invalidate(
        "ipc:state",
        d.toIPCStateSubscriptionKey("onboarding.checklist", e),
      ));
  }
  disposeAll() {
    for (const e of this.entries.keys()) this.dispose(e);
  }
}
const A = new v();
exports.UserOnboardingChecklistRegistry = v;
exports.userOnboardingChecklistRegistry = A;
