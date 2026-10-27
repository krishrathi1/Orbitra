"use strict";
(function () {
  try {
    var u =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    u.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var u =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      a = new u.Error().stack;
    a &&
      ((u._sentryDebugIds = u._sentryDebugIds || {}),
      (u._sentryDebugIds[a] = "ebfd5a28-eb9b-41d4-920c-cddf66cd9622"),
      (u._sentryDebugIdIdentifier =
        "sentry-dbid-ebfd5a28-eb9b-41d4-920c-cddf66cd9622"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const w = require("node:crypto"),
  f = require("../main-app.js"),
  y = require("./worker-protocol-CFgWGf-A.js"),
  b = require("electron");
require("node:path");
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
async function m(u, a, q) {
  const t = b.session.fromPartition(`print-capture-${w.randomUUID()}`, {
      cache: !1,
    }),
    c = `https://print-capture.invalid/${w.randomUUID()}`;
  let n = !1;
  const p = async (e) => {
    let r = e.url;
    for (
      let i = 0;
      i <= 5 && !(!y.assertSafeLLMUrl(r).ok || !/^https?:/.test(r));
      i++
    ) {
      const o = await a
        .fetch(r, {
          method: "GET",
          redirect: "manual",
          credentials: "include",
          signal: q,
        })
        .catch(() => null);
      if (!o) return ((n = !0), new Response("", { status: 502 }));
      if (o.status >= 300 && o.status < 400) {
        const h = o.headers.get("location");
        if ((await o.body?.cancel(), !h)) break;
        r = new URL(h, r).href;
        continue;
      }
      return (o.ok || (n = !0), o);
    }
    return ((n = !0), new Response("", { status: 403 }));
  };
  (await t.protocol.handle("https", (e) =>
    e.url === c
      ? new Response(u, {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Content-Security-Policy":
              "default-src 'none'; script-src 'none'; style-src http: https: data: 'unsafe-inline'; img-src http: https: data:; font-src http: https: data:; form-action 'none'",
          },
        })
      : p(e),
  ),
    await t.protocol.handle("http", p),
    t.setPermissionRequestHandler((e, r, i) => i(!1)),
    t.webRequest.onBeforeRequest((e, r) => {
      const i = e.resourceType === "mainFrame" && e.url === c,
        l =
          ["image", "stylesheet", "font"].includes(e.resourceType) &&
          (/^https?:/.test(e.url) || e.url.startsWith("data:"));
      (!i && !l && (n = !0), r({ cancel: !i && !l }));
    }),
    t.webRequest.onErrorOccurred(() => {
      n = !0;
    }));
  const s = new b.BrowserWindow({
    show: !1,
    webPreferences: {
      session: t,
      javascript: !0,
      sandbox: !0,
      contextIsolation: !0,
      nodeIntegration: !1,
      webSecurity: !0,
      offscreen: !0,
    },
  });
  f.safeWithWebContents(s.webContents, (e) => {
    (e.setWindowOpenHandler(() => ({ action: "deny" })),
      e.on("will-navigate", (r) => r.preventDefault()),
      e.on("console-message", (r) => {
        r.level === "error" && (n = !0);
      }));
  });
  const d = () => {
    s.isDestroyed() || s.destroy();
  };
  q.addEventListener("abort", d, { once: !0 });
  try {
    if (
      (q.throwIfAborted(),
      await s.loadURL(c),
      !(
        await f.safeWithWebContentsAsync(s.webContents, (i) =>
          i.executeJavaScriptInIsolatedWorld(999, [
            {
              code: "Promise.all(Array.from(document.images, image => image.decode())).then(() => true)",
            },
          ]),
        )
      ).ok)
    )
      throw new Error("Print snapshot images could not be decoded");
    const r = await f.safeWithWebContentsAsync(s.webContents, (i) =>
      i.printToPDF({ printBackground: !0, preferCSSPageSize: !0 }),
    );
    if ((q.throwIfAborted(), !r.ok || n))
      throw new Error("Print snapshot could not be rendered completely");
    return r.value;
  } finally {
    (q.removeEventListener("abort", d),
      d(),
      t.webRequest.onBeforeRequest(null),
      t.webRequest.onErrorOccurred(null),
      t.protocol.unhandle("https"),
      t.protocol.unhandle("http"),
      await t.closeAllConnections());
  }
}
exports.renderPrintSnapshot = m;
