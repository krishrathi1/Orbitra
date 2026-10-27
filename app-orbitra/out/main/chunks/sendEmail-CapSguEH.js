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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "039c6afd-bd55-4111-a19f-0ea2ac53d2b1"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-039c6afd-bd55-4111-a19f-0ea2ac53d2b1"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const t = require("../main-app.js"),
  d = require("./unicode-CSAGP0Z8.js"),
  m = require("valibot");
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
function b(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const r in e)
      if (r !== "default") {
        const u = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(
          n,
          r,
          u.get ? u : { enumerable: !0, get: () => e[r] },
        );
      }
  }
  return ((n.default = e), Object.freeze(n));
}
const i = b(m);
function y(e) {
  return e.toLowerCase().trim();
}
function h(e) {
  return e.replace(/[\r\n]/g, "").trim();
}
function I(e) {
  const n = [];
  for (const r of e)
    if (
      !(
        r.toolProvider !== "native" ||
        !r.connectionId ||
        r.isAuthenticated === !1 ||
        r.lastErrorKind === "auth_expired"
      )
    )
      for (const u of ["gmail", "outlook"])
        t.isConnectionConnectedToApp(r, u) &&
          n.push({
            connectionId: r.connectionId,
            provider: u,
            label: r.accountName || r.label || r.name,
            isDefault: r.defaultAppIds?.includes(u) === !0,
          });
  return n;
}
const v = i.object({
  provider: i.picklist(["gmail", "outlook"]),
  connectionId: i.pipe(i.string(), i.trim(), i.minLength(1)),
  to: i.pipe(i.string(), i.transform(y), i.email()),
  subject: i.pipe(i.string(), i.transform(h), i.minLength(1)),
  body: i.pipe(
    i.string(),
    i.check((e) => e.trim().length > 0),
  ),
});
async function w(e, n) {
  const r = i.safeParse(v, n);
  if (!r.success)
    return (
      t.logger.warn("[email] send rejected", {
        userId: e.accountId,
        profileId: e.id,
        outcome: "denied",
        reason: "invalid-draft",
      }),
      { success: !1, error: "Add a valid recipient, subject, and message." }
    );
  if (!e.accountId)
    return (
      t.logger.warn("[email] send rejected", {
        profileId: e.id,
        outcome: "denied",
        reason: "not-signed-in",
      }),
      { success: !1, error: "Sign in to send this email." }
    );
  let u = !1;
  try {
    const q = await t.integrationConnectionStoreRegistry
        .get(e.id)
        ?.fetchConnections(),
      { provider: o, connectionId: a, to: l, subject: f, body: g } = r.output;
    if (!I(q ?? []).find((s) => s.connectionId === a && s.provider === o))
      return (
        t.logger.warn("[email] send rejected", {
          userId: e.accountId,
          profileId: e.id,
          outcome: "denied",
          reason: "sender-unavailable",
        }),
        {
          success: !1,
          error:
            "This email account is unavailable. Choose another account or reconnect it in Apps.",
        }
      );
    const p = t
      .escapeXml(d.sanitizeUnpairedSurrogates(g))
      .replace(/\r\n|\r|\n/g, "<br>");
    u = !0;
    const c = await t.authFetch(`${t.config.app.apiUrl}/api/${o}/share-file`, {
      accountId: e.accountId,
      method: "POST",
      body: JSON.stringify({
        profileId: e.id,
        accountIdOrEmail: a,
        to: [l],
        subject: d.sanitizeUnpairedSurrogates(f),
        body: `<div>${p}</div>`,
        bodyIsHtml: !0,
      }),
    });
    if (c.ok && (await c.json()).success === !0) return { success: !0 };
  } catch {}
  return (
    t.logger.warn("[email] send could not be completed", {
      userId: e.accountId,
      profileId: e.id,
      outcome: "failed",
      reason: u ? "delivery-unconfirmed" : "connections-unavailable",
    }),
    {
      success: !1,
      error: u
        ? "Could not confirm delivery. Check your Sent folder before trying again."
        : "Could not load your email accounts. Close this dialog and try again.",
    }
  );
}
exports.sendEmail = w;
