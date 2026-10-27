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
      i = new e.Error().stack;
    i &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[i] = "b53ded56-3629-4318-8b8d-8c0866010c2e"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-b53ded56-3629-4318-8b8d-8c0866010c2e"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const y = require("node:diagnostics_channel"),
  w = require("node:path"),
  h = require("electron"),
  t = require("../main-app.js");
require("node:crypto");
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
require("worker_threads");
require("diagnostics_channel");
require("./singleInstance-CuMDgUKt.js");
const L = "[MainThreadStall]",
  M = 1e3,
  S = 2e3,
  T = 30,
  E = 3600 * 1e3;
let b = !1;
function m() {
  if (b) return;
  b = !0;
  let e = performance.now(),
    i = process.threadCpuUsage(),
    l = t.getLastLaunchTimelineEvent(),
    o = !1,
    s = null,
    f = e,
    c = 0,
    a = 0;
  y.subscribe("child_process", (r) => {
    const u = r.process,
      n = performance.now();
    queueMicrotask(() => {
      u.spawnfile && (s = { file: w.basename(u.spawnfile), elapsedMs: n });
    });
  });
  const p = () => {
    o = !0;
  };
  (h.powerMonitor.on("suspend", p), h.powerMonitor.on("resume", p));
  const g = (r, u, n) => {
    if ((r - f >= E && ((f = r), (c = 0)), c >= T)) {
      a++;
      return;
    }
    c++;
    const q = {
        blockedMs: Math.round(u),
        elapsedMs: t.roundLaunchTimelineMs(r),
        cpuMs: Math.round((n.user - i.user + n.system - i.system) / 1e3),
        lastLaunchEvent: l?.event ?? null,
        lastLaunchEventElapsedMs: l?.elapsedMs ?? null,
      },
      d = t.getLastLaunchTimelineEvent();
    (d && d !== l && (q.nextLaunchEvent = d.event),
      s &&
        s.elapsedMs >= e &&
        ((q.spawn = s.file),
        (q.spawnElapsedMs = t.roundLaunchTimelineMs(s.elapsedMs))),
      a > 0 && (q.suppressed = a),
      (a = 0),
      t.logger.warn(`${L} ${JSON.stringify(q)}`));
  };
  setInterval(() => {
    const r = performance.now(),
      u = process.threadCpuUsage(),
      n = r - e - M;
    (n >= S && !o && g(r, n, u),
      (e = r),
      (i = u),
      (l = t.getLastLaunchTimelineEvent()),
      (o = !1));
  }, M).unref();
}
exports.startMainThreadStallMonitor = m;
