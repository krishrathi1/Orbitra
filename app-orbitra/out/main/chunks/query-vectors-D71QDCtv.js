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
      (e._sentryDebugIds[r] = "251e7fca-cc5e-4115-9ceb-945b8555ab95"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-251e7fca-cc5e-4115-9ceb-945b8555ab95"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const s = require("./unicode-CSAGP0Z8.js"),
  c = require("valibot"),
  t = require("../main-app.js"),
  a = require("./embedding-Dugvo4EV.js");
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
function l(e) {
  const r = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const u in e)
      if (u !== "default") {
        const n = Object.getOwnPropertyDescriptor(e, u);
        Object.defineProperty(
          r,
          u,
          n.get ? n : { enumerable: !0, get: () => e[u] },
        );
      }
  }
  return ((r.default = e), Object.freeze(r));
}
const d = l(c);
async function b(e, r) {
  const u = AbortSignal.timeout(r.timeoutMs),
    n = r.signal ? AbortSignal.any([r.signal, u]) : u;
  try {
    const i = await t.authFetch(
      `${t.config.app.apiUrl}/api/memory/optmem-query-embedding`,
      {
        method: "POST",
        accountId: r.accountId,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: s.sanitizeUnpairedSurrogates(
            e.slice(0, a.OPTMEM_QUERY_EMBEDDING_MAX_CHARS),
          ),
        }),
        signal: n,
      },
    );
    if (!i.ok) {
      const o = i.status === 403 || i.status === 404 ? "debug" : "warn";
      return (
        t.logger[o]("[OptMem] Query vector unavailable", {
          outcome: "unavailable",
          reason: "refused",
          status: i.status,
        }),
        { kind: "unavailable", reason: "refused", status: i.status }
      );
    }
    const q = d.safeParse(
      a.OptMemQueryEmbeddingResponseSchema,
      await i.json().catch(() => {}),
    );
    return q.success
      ? { kind: "vector", vector: q.output }
      : (t.logger.warn("[OptMem] Query vector unavailable", {
          outcome: "unavailable",
          reason: "protocol",
        }),
        { kind: "unavailable", reason: "protocol" });
  } catch {
    r.signal?.throwIfAborted();
    const i = u.aborted ? "timeout" : "network";
    return (
      t.logger.info("[OptMem] Query vector unavailable", {
        outcome: "unavailable",
        reason: i,
      }),
      { kind: "unavailable", reason: i }
    );
  }
}
exports.embedOptMemQuery = b;
