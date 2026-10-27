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
      (e._sentryDebugIds[r] = "4ad7f282-2cde-476a-8aa4-a66581b7c273"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-4ad7f282-2cde-476a-8aa4-a66581b7c273"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const o = require("./unicode-CSAGP0Z8.js"),
  s = require("valibot"),
  t = require("../main-app.js");
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
    for (const i in e)
      if (i !== "default") {
        const u = Object.getOwnPropertyDescriptor(e, i);
        Object.defineProperty(
          r,
          i,
          u.get ? u : { enumerable: !0, get: () => e[i] },
        );
      }
  }
  return ((r.default = e), Object.freeze(r));
}
const c = l(s);
function d(e) {
  return {
    text: o.sanitizeUnpairedSurrogates(
      e.text.slice(0, t.OPTMEM_RELEVANCE_MEMORY_MAX_CHARS),
    ),
    ...(e.tags?.length ? { tags: e.tags } : {}),
    date: e.date,
  };
}
async function f(e, r) {
  const i = AbortSignal.timeout(r.timeoutMs),
    u = r.signal ? AbortSignal.any([r.signal, i]) : i;
  try {
    const n = await t.authFetch(
      `${t.config.app.apiUrl}/api/memory/optmem-relevance`,
      {
        method: "POST",
        accountId: r.accountId,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...e, deadlineMs: r.timeoutMs }),
        signal: u,
      },
    );
    if (n.status === 504)
      return { kind: "unavailable", reason: "timeout", status: 504 };
    if (!n.ok)
      return { kind: "unavailable", reason: "refused", status: n.status };
    const q = await n.json().catch(() => {}),
      a = c.safeParse(t.OptMemRelevanceResponseSchema, q);
    return !a.success || a.output.probabilities.length !== e.memories.length
      ? { kind: "unavailable", reason: "protocol" }
      : { kind: "checked", probabilities: a.output.probabilities };
  } catch {
    return (
      r.signal?.throwIfAborted(),
      { kind: "unavailable", reason: i.aborted ? "timeout" : "network" }
    );
  }
}
function b(e) {
  return e.reason === "timeout"
    ? "info"
    : e.reason === "refused" && (e.status === 403 || e.status === 404)
      ? "debug"
      : "warn";
}
function p(e, r) {
  return e
    .map((i, u) => ({ candidate: i, probability: r[u] ?? 0 }))
    .filter(({ probability: i }) => i >= t.OPTMEM_RELEVANCE_THRESHOLD)
    .sort((i, u) => u.probability - i.probability)
    .map(({ candidate: i }) => i);
}
exports.checkOptMemRelevance = f;
exports.optMemRelevanceMemory = d;
exports.rankRelevantMemories = p;
exports.relevanceCheckLogLevel = b;
