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
      (e._sentryDebugIds[r] = "3b9b0dd0-0f6b-48e6-a9bd-b55f36c56968"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-3b9b0dd0-0f6b-48e6-a9bd-b55f36c56968"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const o = require("../main-app.js"),
  f = require("./automaticBrowserAccess-jJ30EWyw.js"),
  m = require("node:child_process"),
  w = require("node:fs/promises"),
  b = require("node:os"),
  l = require("node:path"),
  y = require("node:util");
require("node:crypto");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:worker_threads");
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
const p = y.promisify(m.execFile);
async function g() {
  if (process.platform !== "darwin") return [];
  const e = {
      chrome: "Google Chrome.app",
      arc: "Arc.app",
      dia: "Dia.app",
      comet: "Comet.app",
      brave: "Brave Browser.app",
      edge: "Microsoft Edge.app",
      firefox: "Firefox.app",
      zen: "Zen.app",
      safari: "Safari.app",
      orbitra: "Orbitra.app",
    },
    r = await p("/bin/ps", ["-axo", "comm="], {
      timeout: 2e3,
      maxBuffer: 1024 * 1024,
    }).then(
      ({ stdout: i }) =>
        i
          .split(
            `
`,
          )
          .map((u) => u.trim()),
      () => null,
    );
  return (
    await Promise.all(
      Object.keys(e).map(async (i) => {
        if (i === "orbitra" && process.env.NODE_ENV !== "development")
          return null;
        for (const u of [
          "/Applications",
          "/System/Applications",
          l.join(b.homedir(), "Applications"),
        ]) {
          const s = l.join(u, e[i]);
          if (
            !(await w.access(s).then(
              () => !0,
              () => !1,
            ))
          )
            continue;
          let n = null;
          try {
            const { stdout: a } = await p(
                "/usr/bin/mdls",
                ["-raw", "-name", "kMDItemLastUsedDate", s],
                { timeout: 2e3, maxBuffer: 4096 },
              ),
              q = a.trim();
            if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} [+-]\d{4}$/.test(q)) {
              const c = Date.parse(q);
              Number.isFinite(c) && (n = new Date(c).toISOString());
            }
          } catch {}
          return {
            browser: i,
            running:
              r?.some((a) => a.startsWith(`${s}/Contents/MacOS/`)) ?? null,
            lastUsedAt: n,
          };
        }
        return null;
      }),
    )
  ).filter((i) => i !== null);
}
async function d() {
  const e = await o.ImportWorkerClient.create(
    o.getWorkerPath("BrowserImportWorker"),
  );
  try {
    for await (const r of e.request(
      { action: "discoverAutomatic" },
      new AbortController().signal,
    ))
      if (r.action === "profiles") return r.profiles;
    throw new Error("Automatic browser discovery did not return profiles");
  } finally {
    await e.dispose();
  }
}
async function h(e) {
  if (!f.canReadBrowserAutomatically(e.browser)) return [];
  const r = await o.ImportWorkerClient.create(
    o.getWorkerPath("BrowserImportWorker"),
  );
  try {
    for await (const t of r.request(
      {
        action: "automaticCookieNames",
        browser: e.browser,
        profilePath: e.path,
      },
      new AbortController().signal,
    ))
      if (t.action === "cookieNames") return t.cookies;
    throw new Error("Automatic cookie metadata was not returned");
  } finally {
    await r.dispose();
  }
}
async function A() {
  const [e, r] = await Promise.all([d(), g()]),
    t = new Set(e.map((i) => i.browser));
  for (const i of r) t.add(i.browser);
  return { profiles: e, browsers: [...t], applications: r };
}
exports.discoverAutomaticBrowserProfiles = d;
exports.getAutomaticBrowserSources = A;
exports.getAutomaticCookieNames = h;
