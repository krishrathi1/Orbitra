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
      (e._sentryDebugIds[i] = "40d9d666-cec8-421c-ab31-0d13cd04873e"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-40d9d666-cec8-421c-ab31-0d13cd04873e"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const r = require("../main-app.js"),
  o = require("valibot");
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
function q(e) {
  const i = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const u in e)
      if (u !== "default") {
        const s = Object.getOwnPropertyDescriptor(e, u);
        Object.defineProperty(
          i,
          u,
          s.get ? s : { enumerable: !0, get: () => e[u] },
        );
      }
  }
  return ((i.default = e), Object.freeze(i));
}
const t = q(o);
async function d(e) {
  if (!e.accountId)
    return {
      success: !1,
      error: "signed_out",
      message: "Sign in to change account settings.",
    };
  const i = r.captureAuthSessionSnapshot(e.accountId),
    u =
      e.change === void 0
        ? void 0
        : t.safeParse(r.FeatureFlagPreferenceSchema, e.change);
  if (u && !u.success)
    return {
      success: !1,
      error: "invalid_request",
      message: "Choose enabled or disabled for this setting.",
    };
  try {
    const s = await r.authFetch(
        `${r.config.app.apiUrl}/api/user/feature-flags/preferences`,
        {
          accountId: e.accountId,
          method: u ? "POST" : "GET",
          ...(u ? { body: JSON.stringify(u.output) } : {}),
          signal: AbortSignal.timeout(15e3),
        },
      ),
      n = await s.json();
    if (!r.isAuthSessionSnapshotCurrent(i))
      return {
        success: !1,
        error: "account_changed",
        message: "Your sign-in changed. Reload this setting and try again.",
      };
    if (!s.ok) {
      const c = t.safeParse(r.FeatureFlagPreferenceErrorSchema, n);
      return (
        r.logger.warn("[feature-flags] Account preference request refused", {
          userId: e.accountId,
          outcome: "denied",
          reason: "server_refused",
          status: s.status,
        }),
        c.success
          ? { success: !1, ...c.output }
          : {
              success: !1,
              error: "preference_unavailable",
              message:
                "Account settings are unavailable on this server. Please try again later.",
            }
      );
    }
    const a = t.parse(r.FeatureFlagPreferencesResponseSchema, n);
    return (
      r.applyGlobalOverrides(r.sanitizeFeatureFlagValues(a.globalOverrides)),
      r.applyServerOverrides(
        r.sanitizeFeatureFlagValues(a.userOverrides),
        e.accountId,
      ),
      { success: !0, values: a.values }
    );
  } catch {
    return (
      r.logger.warn("[feature-flags] Account preference request failed", {
        userId: e.accountId,
        outcome: "unavailable",
        reason: "request_failed",
      }),
      {
        success: !1,
        error: "request_failed",
        message:
          "Could not reach the server. Check your connection and try again.",
      }
    );
  }
}
exports.requestFeatureFlagPreferences = d;
