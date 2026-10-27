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
      (e._sentryDebugIds[u] = "8378a026-e985-40d1-affb-8a20dfeef610"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-8378a026-e985-40d1-affb-8a20dfeef610"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const l = require("node:worker_threads"),
  n = require("../main-app.js"),
  f = require("./appPaths-eBQvtv9Z.js");
require("node:crypto");
require("node:path");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("node:util");
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
require("./appDataPath-20zIIRaW.js");
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
function s(e) {
  if (e.aborted) return Promise.resolve(null);
  const u = performance.now();
  return new Promise((d) => {
    let i;
    try {
      i = new l.Worker(n.getWorkerPath("WindowsHardwareIdWorker"), {
        workerData: {
          addonPath: f.getResourcePath(
            "hardware-id",
            "native_hardware_id.node",
          ),
        },
      });
    } catch {
      (n.logger.warn("[hardware-id] Worker could not start"), d(null));
      return;
    }
    let o = !1;
    const q = (r) => {
        o ||
          ((o = !0),
          e.removeEventListener("abort", a),
          i.terminate().catch(() => {}),
          d(r));
      },
      a = () => q(null);
    (e.addEventListener("abort", a, { once: !0 }),
      i.once("message", (r) => {
        if (o) return;
        const t = Math.round(performance.now() - u);
        if (r.status === "failed") {
          (n.logger.warn("[hardware-id] Native lookup failed", {
            phase: r.phase,
            elapsedMs: t,
          }),
            q(null));
          return;
        }
        (n.logger.info("[hardware-id] Native lookup finished", {
          elapsedMs: t,
          loadMs: r.loadMs,
          lookupMs: r.lookupMs,
          available: r.uuid !== null,
        }),
          q(r.uuid));
      }),
      i.once("error", () => {
        o || (n.logger.warn("[hardware-id] Worker failed"), q(null));
      }),
      i.once("exit", () => q(null)),
      i.unref(),
      e.aborted && a());
  });
}
exports.readWindowsHardwareUuid = s;
