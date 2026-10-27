"use strict";
(function () {
  try {
    var i =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    i.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var i =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new i.Error().stack;
    e &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[e] = "c82a1d3d-61ed-4371-9ece-98aedd04eb66"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-c82a1d3d-61ed-4371-9ece-98aedd04eb66"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const n = require("../main-app.js");
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
const u = 1e3,
  o = 3e4,
  l = 0.25;
class q {
  constructor(e, r) {
    ((this.device = e), (this.opts = r));
  }
  registration = null;
  pendingProfileIds = new Set();
  retryTimer = null;
  retryDelayMs = u;
  attemptController = null;
  stopped = !1;
  generation = 0;
  register(e) {
    if (this.stopped) return Promise.resolve();
    for (const r of e) r && this.pendingProfileIds.add(r);
    return this.pendingProfileIds.size === 0
      ? Promise.resolve()
      : this.startFlush();
  }
  start() {
    this.stopped = !1;
  }
  stop() {
    ((this.stopped = !0),
      (this.generation += 1),
      this.pendingProfileIds.clear(),
      this.attemptController?.abort(),
      (this.attemptController = null),
      this.retryTimer &&
        (clearTimeout(this.retryTimer), (this.retryTimer = null)),
      (this.retryDelayMs = u));
  }
  startFlush() {
    return this.registration
      ? this.registration
      : this.retryTimer
        ? Promise.resolve()
        : ((this.registration = this.flush().finally(() => {
            ((this.registration = null),
              !this.stopped &&
                this.pendingProfileIds.size > 0 &&
                !this.retryTimer &&
                this.startFlush());
          })),
          this.registration);
  }
  async flush() {
    for (; !this.stopped && this.pendingProfileIds.size > 0; ) {
      const e = [...this.pendingProfileIds];
      this.pendingProfileIds.clear();
      const r = new AbortController(),
        s = this.generation;
      this.attemptController = r;
      try {
        const t = await this.opts.sendRegistration(
          { ...this.device, profileIds: e },
          r.signal,
        );
        if (this.stopped || this.generation !== s) return;
        if (t.ok) this.retryDelayMs = u;
        else if (
          (n.logger.warn("[ConduitDeviceRegistry] Device registration failed", {
            status: t.status,
            profileCount: e.length,
          }),
          this.shouldRetry(t.status))
        ) {
          (this.requeue(e), this.scheduleRetry());
          return;
        }
      } catch (t) {
        if (this.stopped || this.generation !== s) return;
        (n.logger.warn("[ConduitDeviceRegistry] Device registration failed", {
          profileCount: e.length,
          errorName: t instanceof Error ? t.name : "unknown",
        }),
          this.requeue(e),
          this.scheduleRetry());
        return;
      } finally {
        this.attemptController === r && (this.attemptController = null);
      }
    }
  }
  shouldRetry(e) {
    return e === 401 || e === 408 || e === 425 || e === 429 || e >= 500;
  }
  requeue(e) {
    for (const r of e) this.pendingProfileIds.add(r);
  }
  scheduleRetry() {
    if (this.stopped || this.retryTimer) return;
    const e = this.opts.random?.() ?? Math.random(),
      r = 1 - l + e * l * 2,
      s = Math.min(o, Math.round(this.retryDelayMs * r));
    ((this.retryDelayMs = Math.min(this.retryDelayMs * 2, o)),
      (this.retryTimer = setTimeout(() => {
        ((this.retryTimer = null), this.stopped || this.startFlush());
      }, s)));
  }
}
exports.ConduitDeviceRegistry = q;
