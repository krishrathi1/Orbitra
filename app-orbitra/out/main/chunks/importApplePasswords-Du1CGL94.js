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
      (r._sentryDebugIds[e] = "66402d01-a077-4411-952e-ba9a6a4c45aa"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-66402d01-a077-4411-952e-ba9a6a4c45aa"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const C = require("node:util"),
  g = require("../main-app.js"),
  E = require("electron"),
  T = require("valibot"),
  S = require("./appPaths-eBQvtv9Z.js");
require("node:crypto");
require("node:path");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
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
function j(r) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (r) {
    for (const t in r)
      if (t !== "default") {
        const o = Object.getOwnPropertyDescriptor(r, t);
        Object.defineProperty(
          e,
          t,
          o.get ? o : { enumerable: !0, get: () => r[t] },
        );
      }
  }
  return ((e.default = r), Object.freeze(e));
}
const n = j(T);
let w;
function h() {
  if (process.platform !== "darwin") return null;
  if (w) return w;
  try {
    return (
      (w = require(
        S.getResourcePath("credential-exchange/credential-exchange.node"),
      )),
      w
    );
  } catch {
    return null;
  }
}
let i, d;
function s(r, e, t) {
  return (
    g.logger.warn("Apple password transfer refused", {
      profileId: r,
      reason: e,
    }),
    { success: !1, error: e, message: t }
  );
}
function l(r, e) {
  if (!e.isWindowOpen() || e.windowId !== r.windowId) return !1;
  const t = e.getCurrentProfile();
  return (
    t.id === r.sourceProfileId &&
    t.accountId === r.accountId &&
    e.getTargetAccount(r.profileId) === r.accountId
  );
}
function c(r) {
  (r.abort.abort(), clearTimeout(r.timeout), i === r && h()?.stopReceiving());
}
async function y() {
  try {
    return (
      await E.shell.openExternal("file:///System/Applications/Passwords.app", {
        activate: !0,
      }),
      !0
    );
  } catch {
    return !1;
  }
}
const k = n.object({
  passwords: n.pipe(
    n.array(
      n.object({
        originUrl: n.string(),
        username: n.string(),
        password: n.string(),
      }),
    ),
    n.maxLength(2e4),
  ),
  skippedCount: n.pipe(n.number(), n.integer(), n.minValue(0)),
});
async function D(r, e, t, o) {
  if (!(i !== e || e.state.status !== "waiting")) {
    e.state = { status: "importing" };
    try {
      if (!l(e, t)) throw new Error("profile-changed");
      const p = await new Promise((I, P) => {
        o.importCredentials(r, (A, m) => {
          A || !m ? P(new Error("transfer-failed")) : I(m);
        });
      });
      e.abort.signal.throwIfAborted();
      const a = n.parse(k, JSON.parse(p)),
        u = await t.loadTargetProfile(e.profileId);
      if (!u || u.accountId !== e.accountId || !l(e, t))
        throw new Error("profile-changed");
      const q = u.getAutofillEntries("passwords"),
        f = await g.mergeSafariPasswords(q, a.passwords, e.abort.signal);
      if (
        (e.abort.signal.throwIfAborted(),
        u.accountId !== e.accountId || !l(e, t))
      )
        throw new Error("profile-changed");
      if (!C.isDeepStrictEqual(q, u.getAutofillEntries("passwords")))
        throw new Error("vault-changed");
      (f.importCount && u.setAutofillEntries("passwords", f.passwords),
        (e.state = {
          status: "completed",
          importedCount: f.acceptedCount,
          skippedCount: a.skippedCount + a.passwords.length - f.acceptedCount,
        }),
        g.logger.info("Apple password transfer completed", {
          profileId: e.profileId,
          importedCount: e.state.importedCount,
          changedCount: f.importCount,
          skippedCount: e.state.skippedCount,
        }));
    } catch {
      e.abort.signal.aborted ||
        ((e.state = {
          status: "failed",
          message:
            "Your passwords could not be imported. You can continue setup and try again later.",
        }),
        g.logger.warn("Apple password transfer failed", {
          profileId: e.profileId,
          reason: "transfer-failed",
        }));
    } finally {
      c(e);
    }
  }
}
function b(r, e) {
  const t = h()?.availability() ?? "not-configured";
  let o = { status: "idle" };
  return (
    i?.profileId === r &&
      i.windowId === e.windowId &&
      (l(i, e)
        ? (o = i.state)
        : (c(i),
          (i = void 0),
          (o = {
            status: "failed",
            message:
              "Your profile changed. Continue setup to choose your account.",
          }))),
    { success: !0, availability: t, state: o }
  );
}
function Y(r, e) {
  return (
    d?.profileId === r && d.windowId === e.windowId && (d = void 0),
    i?.profileId === r && i.windowId === e.windowId && (c(i), (i = void 0)),
    b(r, e)
  );
}
async function v(r, e) {
  const t = h();
  if (!t || t.availability() !== "available")
    return s(
      r,
      "unavailable",
      "Direct password transfer is not available on this Mac.",
    );
  if (!d && i?.state.status === "waiting" && i.profileId === r && l(i, e))
    return (await y())
      ? b(r, e)
      : s(
          r,
          "open-failed",
          "Apple Passwords could not open. You can continue setup.",
        );
  if (d || i?.state.status === "waiting" || i?.state.status === "importing")
    return s(
      r,
      "busy",
      "A password transfer is already open. Finish or skip it first.",
    );
  const o = e.getCurrentProfile(),
    p = o.accountId;
  if (!p || e.getTargetAccount(r) !== p)
    return s(
      r,
      "wrong-profile",
      "Your profile changed. Continue setup to choose your account.",
    );
  const a = {
    windowId: e.windowId,
    sourceProfileId: o.id,
    profileId: r,
    accountId: p,
  };
  d = a;
  try {
    if (!(await e.authenticate()))
      return s(
        r,
        "authentication-cancelled",
        "The Mac permission check was cancelled.",
      );
    if (d !== a)
      return s(
        r,
        "authentication-cancelled",
        "Password transfer was cancelled.",
      );
    if (!l(a, e))
      return s(
        r,
        "wrong-profile",
        "Your profile changed. Continue setup to choose your account.",
      );
    const u = {
      ...a,
      state: { status: "waiting" },
      abort: new AbortController(),
      timeout: setTimeout(() => {
        ((u.state = {
          status: "failed",
          message: "Password transfer timed out. You can continue setup.",
        }),
          c(u));
      }, 10 * 6e4),
    };
    return (
      u.timeout.unref(),
      (i = u),
      t.startReceiving((q) => {
        D(q, u, e, t);
      }),
      (await y())
        ? b(r, e)
        : (c(u),
          (i = void 0),
          s(
            r,
            "open-failed",
            "Apple Passwords could not open. You can continue setup.",
          ))
    );
  } catch {
    return (
      i && c(i),
      (i = void 0),
      s(
        r,
        "unavailable",
        "Direct password transfer is not available on this Mac.",
      )
    );
  } finally {
    d === a && (d = void 0);
  }
}
exports.cancelApplePasswordImport = Y;
exports.getApplePasswordImport = b;
exports.startApplePasswordImport = v;
