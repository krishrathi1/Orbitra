"use strict";
(function () {
  try {
    var a =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    a.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var a =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new a.Error().stack;
    e &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[e] = "d26ed8e1-2add-4f83-93fb-377218efd865"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-d26ed8e1-2add-4f83-93fb-377218efd865"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const h = require("./replica-files-CUHDGfIt.js"),
  v = require("../main-app.js");
require("node:fs/promises");
require("node:path");
require("node:crypto");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
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
const y = 50,
  O = 864e5,
  b = { kind: "unavailable", reason: "timeout", cursor: null };
function m(a) {
  return {
    ...(a.from ? { fromMs: Date.parse(`${a.from}T00:00:00.000Z`) } : {}),
    ...(a.to ? { toMs: Date.parse(`${a.to}T00:00:00.000Z`) + O } : {}),
  };
}
function p(a, e) {
  const r = new Map();
  for (let i = 0; i < Math.max(a.length, e.length); i += 1)
    for (const t of [a[i], e[i]])
      t &&
        r.size < v.OPTMEM_RELEVANCE_MAX_MEMORIES &&
        !r.has(t.id) &&
        r.set(t.id, t);
  return [...r.values()];
}
function w(a) {
  return {
    limit: v.OPTMEM_RELEVANCE_MAX_MEMORIES,
    tokenBudget: 1 / 0,
    ...m(a),
  };
}
class M {
  constructor(e) {
    this.store = e;
  }
  #e = new Map();
  async relevant(e, r, i, t = null, u, o) {
    return (
      u?.throwIfAborted(),
      (typeof i == "string" ? i : i.text).trim()
        ? (o || this.#n(e, r, t),
          this.#i(u, (n, s) =>
            this.store
              .getOpen(e, t)
              .then(async (l) => {
                if (o) {
                  n.throwIfAborted();
                  const { relevantSharedOptMem: c } =
                    await Promise.resolve().then(() =>
                      require("./shared-memory-s9w_2juE.js"),
                    );
                  return (
                    n.throwIfAborted(),
                    c(
                      {
                        profileId: e,
                        companionId: r,
                        accountId: t,
                        sourceWorkspaceId: o,
                      },
                      i,
                      n,
                    )
                  );
                }
                return (
                  n.throwIfAborted(),
                  s()
                    ? b
                    : (await l.prepareSearchIndex(r)) === "building"
                      ? {
                          kind: "unavailable",
                          reason: "index-building",
                          cursor: null,
                        }
                      : (n.throwIfAborted(), await l.relevant(r, i, n))
                );
              })
              .catch(
                (l) => (
                  n.throwIfAborted(),
                  l instanceof h.OptMemReplicaClosedError
                    ? { kind: "unavailable", reason: "closed", cursor: null }
                    : { kind: "unavailable", reason: "storage", cursor: null }
                ),
              ),
          ))
        : { kind: "result", value: { matches: [] } }
    );
  }
  async similar({
    profileId: e,
    companionId: r,
    accountId: i,
    sourceWorkspaceId: t,
    query: u,
    budgeted: o,
    signal: n,
    userId: s,
    contributorId: l,
    ...c
  }) {
    n?.throwIfAborted();
    const d = (q) =>
      this.store
        .getOpen(e, i)
        .then(async (f) => {
          if ((q?.throwIfAborted(), t)) {
            const { similarSharedOptMem: g } = await Promise.resolve().then(
              () => require("./shared-memory-s9w_2juE.js"),
            );
            return (
              q?.throwIfAborted(),
              g(
                {
                  profileId: e,
                  companionId: r,
                  accountId: i,
                  sourceWorkspaceId: t,
                },
                u,
                { ...c, userId: s, contributorId: l },
                q,
              )
            );
          }
          return await f.similar(r, u, c, q);
        })
        .catch(
          (f) => (
            q?.throwIfAborted(),
            f instanceof h.OptMemReplicaClosedError
              ? { kind: "unavailable", reason: "closed", cursor: null }
              : { kind: "unavailable", reason: "storage", cursor: null }
          ),
        );
    return o ? this.#i(n, (q) => d(q)) : d(n);
  }
  async #i(e, r) {
    const i = performance.now() + y,
      t = new AbortController(),
      u = e ? AbortSignal.any([e, t.signal]) : t.signal,
      o = () => (performance.now() < i ? !1 : (t.abort(), !0));
    let n = () => {};
    const s = new Promise((c, d) => {
        ((n = () => {
          e?.aborted
            ? d(new DOMException("OptMem lookup cancelled", "AbortError"))
            : c(b);
        }),
          u.addEventListener("abort", n, { once: !0 }));
      }),
      l = setTimeout(() => t.abort(), y);
    try {
      const c = await Promise.race([r(u, o), s]);
      return (e?.throwIfAborted(), o() ? b : c);
    } finally {
      (clearTimeout(l), u.removeEventListener("abort", n));
    }
  }
  #n(e, r, i) {
    const t = JSON.stringify([i, e, r]),
      u = this.#e.get(t);
    if (u) return u;
    const o = this.#a(e, r, i).finally(() => {
      this.#e.get(t) === o && this.#e.delete(t);
    });
    return (this.#e.set(t, o), o);
  }
  async #a(e, r, i) {
    try {
      if ((await this.#r(e, i)).kind === "unavailable") return;
      await (await this.store.getOpen(e, i)).prepareSearchIndex(r);
    } catch {}
  }
  async recall(e, r, i, t = null, u) {
    if ("query" in i) return this.#u(e, r, i, t, u);
    if (u) {
      const { recallSharedOptMem: n } = await Promise.resolve().then(() =>
        require("./shared-memory-s9w_2juE.js"),
      );
      try {
        return await n(
          { profileId: e, companionId: r, accountId: t, sourceWorkspaceId: u },
          i,
        );
      } catch {
        return { kind: "unavailable", reason: "storage", cursor: null };
      }
    }
    if (i.userId)
      return {
        kind: "error",
        reason: "not-shared",
        message:
          "Searching by user is available only when your companion is shared.",
      };
    const o = await this.#r(e, t);
    if (o.kind === "unavailable") return o;
    try {
      return await (await this.store.getOpen(e, t)).recall(r, i);
    } catch (n) {
      if (n instanceof h.OptMemReplicaClosedError)
        return { kind: "unavailable", reason: "closed", cursor: null };
      const s = await this.#t(e, t);
      if (s.kind === "unavailable") return s;
      try {
        return await (await this.store.getOpen(e, t)).recall(r, i);
      } catch (l) {
        return l instanceof h.OptMemReplicaClosedError
          ? { kind: "unavailable", reason: "closed", cursor: null }
          : { kind: "unavailable", reason: "storage", cursor: s.cursor };
      }
    }
  }
  async #u(e, r, i, t, u) {
    if (u) {
      const { searchSharedOptMem: n } = await Promise.resolve().then(() =>
        require("./shared-memory-s9w_2juE.js"),
      );
      try {
        return await n(
          { profileId: e, companionId: r, accountId: t, sourceWorkspaceId: u },
          i,
          w(i),
        );
      } catch {
        return { kind: "unavailable", reason: "storage", cursor: null };
      }
    }
    if (i.userId)
      return {
        kind: "error",
        reason: "not-shared",
        message:
          "Searching by user is available only when your companion is shared.",
      };
    const o = await this.#r(e, t);
    if (o.kind === "unavailable") return o;
    try {
      const n = await this.store.getOpen(e, t);
      await n.prepareSearchIndex(r, void 0, "wait");
      const s = await n.relevant(r, i.query, void 0, void 0, w(i));
      return s.kind !== "result"
        ? s
        : { kind: "result", value: { matches: s.value.matches, next: [] } };
    } catch (n) {
      return n instanceof h.OptMemReplicaClosedError
        ? { kind: "unavailable", reason: "closed", cursor: null }
        : { kind: "unavailable", reason: "storage", cursor: null };
    }
  }
  async zoom(e, r, i, t = null, u) {
    if (u) {
      const { zoomSharedOptMem: s } = await Promise.resolve().then(() =>
        require("./shared-memory-s9w_2juE.js"),
      );
      try {
        return await s(
          { profileId: e, companionId: r, accountId: t, sourceWorkspaceId: u },
          i,
        );
      } catch {
        return { kind: "unavailable", reason: "storage", cursor: null };
      }
    }
    const o = await this.#r(e, t);
    if (o.kind === "unavailable") return o;
    try {
      const s = await (await this.store.getOpen(e, t)).zoom(r, i);
      if (s.kind !== "error" || s.reason !== "corrupt") return s;
    } catch (s) {
      if (s instanceof h.OptMemReplicaClosedError)
        return { kind: "unavailable", reason: "closed", cursor: null };
    }
    const n = await this.#t(e, t);
    if (n.kind === "unavailable") return n;
    try {
      return await (await this.store.getOpen(e, t)).zoom(r, i);
    } catch (s) {
      return s instanceof h.OptMemReplicaClosedError
        ? { kind: "unavailable", reason: "closed", cursor: null }
        : { kind: "unavailable", reason: "storage", cursor: n.cursor };
    }
  }
  rebuild(e, r) {
    return this.#t(e, r);
  }
  async #r(e, r) {
    try {
      return await this.store.syncProfile(e, r);
    } catch {
      return { kind: "unavailable", reason: "storage", cursor: null };
    }
  }
  async #t(e, r) {
    try {
      return await this.store.rebuildProfile(e, r);
    } catch {
      return { kind: "unavailable", reason: "storage", cursor: null };
    }
  }
}
const E = {
    async getOpen(a, e) {
      const { optMemReplicaRegistry: r } = await Promise.resolve().then(() =>
        require("./OptMemReplicaRegistry-DUxGLqg7.js"),
      );
      return r.getOpen(a, e);
    },
    async rebuildProfile(a, e) {
      const { optMemReplicaRegistry: r } = await Promise.resolve().then(() =>
        require("./OptMemReplicaRegistry-DUxGLqg7.js"),
      );
      return r.rebuildProfile(a, e);
    },
    async syncProfile(a, e) {
      const { optMemReplicaRegistry: r } = await Promise.resolve().then(() =>
        require("./OptMemReplicaRegistry-DUxGLqg7.js"),
      );
      return r.syncProfile(a, e);
    },
  },
  A = new M(E);
exports.OptMemQueryService = M;
exports.interleaveOptMemMatches = p;
exports.optMemQueryService = A;
exports.optMemTopicRecallBounds = m;
