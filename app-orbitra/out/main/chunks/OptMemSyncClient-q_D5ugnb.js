"use strict";
(function () {
  try {
    var r =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    r.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var r =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new r.Error().stack;
    e &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[e] = "9fe2ab1b-dfe0-4b68-81cd-e9556de0e6a8"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-9fe2ab1b-dfe0-4b68-81cd-e9556de0e6a8"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const c = require("valibot"),
  o = require("../main-app.js"),
  a = require("./contracts-rChhtF3C.js");
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
function d(r) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (r) {
    for (const i in r)
      if (i !== "default") {
        const u = Object.getOwnPropertyDescriptor(r, i);
        Object.defineProperty(
          e,
          i,
          u.get ? u : { enumerable: !0, get: () => r[i] },
        );
      }
  }
  return ((e.default = r), Object.freeze(e));
}
const q = d(c);
function l(r) {
  const e = q.parse(a.OptMemSyncPageSchema, r),
    i = BigInt(e.capturedHeadRevision);
  let u = -1n;
  for (const s of e.entries) {
    const t = BigInt(s.revision);
    if (t <= u || t > i)
      throw new Error(
        "OptMem sync revisions must be increasing and no newer than the head",
      );
    u = t;
  }
  const n = e.entries.at(-1);
  if (e.hasMore) {
    if (!n || e.nextCursor !== `${n.revision}:${n.changeId}`)
      throw new Error(
        "OptMem sync continuation must identify the final page entry",
      );
  } else if (e.nextCursor !== null)
    throw new Error("Final OptMem sync page cannot have a continuation cursor");
  return e;
}
class f {
  constructor(e, i = null, u) {
    ((this.profileId = e), (this.accountId = i), (this.companion = u));
  }
  async loadPage(e) {
    const i = await o.authFetch(
      `${o.config.app.apiUrl}/api/memory/optmem-sync`,
      {
        accountId: this.accountId,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profileId: this.profileId,
          ...e,
          includeEmbeddings: !0,
          ...(this.companion
            ? { companion: this.companion }
            : { includeSourceWorkspace: !0 }),
        }),
      },
    );
    if (i.status === 401 || i.status === 403)
      return { kind: "unavailable", reason: "auth" };
    if (!i.ok) return { kind: "unavailable", reason: "network" };
    try {
      return {
        kind: "page",
        page: l(q.parse(a.JsonValueSchema, await i.json())),
      };
    } catch {
      return { kind: "unavailable", reason: "protocol" };
    }
  }
}
exports.AuthenticatedOptMemSyncClient = f;
