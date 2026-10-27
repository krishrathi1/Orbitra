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
      u = new e.Error().stack;
    u &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[u] = "4a683039-530d-487d-83b2-5e28e0f7fb12"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-4a683039-530d-487d-83b2-5e28e0f7fb12"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const y = require("../main-app.js"),
  g = require("./OptMemSyncRunner-u5O_GHna.js"),
  I = require("./replica-files-CUHDGfIt.js");
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
function l(e) {
  return JSON.stringify([
    e.accountId,
    e.profileId,
    e.sourceWorkspaceId,
    e.companionId,
  ]);
}
function h(e) {
  const u = new AbortController(),
    s = new Map(),
    c = new Set(),
    d = new Set(),
    p = () => {
      if (!u.signal.aborted)
        for (const [r, o] of s) {
          if (c.size >= 4) break;
          c.has(r) ||
            (s.delete(r),
            e.contexts().some((n) => l(n) === r) &&
              (c.add(r),
              e
                .sync(o, u.signal)
                .catch((n) => {
                  if (
                    u.signal.aborted ||
                    n instanceof I.OptMemReplicaClosedError
                  )
                    return;
                  const { stage: q, reason: a } =
                    n instanceof g.OptMemRefreshError
                      ? n
                      : { stage: "open", reason: "unexpected" };
                  y.logThrottled(
                    `optmem-refresh:${r}:${q}:${a}`,
                    10 * 6e4,
                    (i) =>
                      y.logger.warn(
                        "[OptMem] Live memory refresh unavailable",
                        {
                          userId: o.accountId,
                          profileId: o.profileId,
                          companionId: o.companionId,
                          sourceWorkspaceId: o.sourceWorkspaceId,
                          outcome: "degraded",
                          stage: q,
                          reason: a,
                          errorName: n instanceof Error ? n.name : "Error",
                          ...(i > 0 ? { suppressed: i } : {}),
                        },
                      ),
                  );
                })
                .finally(() => {
                  (c.delete(r), p());
                })));
        }
    },
    t = (r, o, n = !1) => {
      if (u.signal.aborted) return;
      const q = e.contexts(),
        a = new Set(q.map(l));
      for (const i of d) a.has(i) || d.delete(i);
      for (const i of q) {
        if (
          (o && i.profileId !== o) ||
          (r &&
            (i.sourceWorkspaceId !== r.sourceWorkspaceId ||
              i.companionId !== r.companionId))
        )
          continue;
        const f = l(i);
        (n && d.has(f)) || (d.add(f), s.set(f, i));
      }
      p();
    },
    b = {
      onMessage: (r) => {
        "companionId" in r ? t(r) : r.affectsMounts && t();
      },
      onSnapshotRequired: () => t(),
      onReplayUnavailable: () => t(),
    },
    m = [
      e.conduit.subscribe("optmem.changes", b),
      e.conduit.subscribe("synced-fs.share-events", b),
    ];
  return {
    refresh: () => t(),
    discover: (r) => t(void 0, r, !0),
    stop: () => {
      (u.abort(), s.clear());
      for (const r of m) r.unsubscribe();
    },
  };
}
exports.startOptMemConduitSync = h;
