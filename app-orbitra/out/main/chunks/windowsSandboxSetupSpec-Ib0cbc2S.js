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
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "60f40071-0a28-4a47-9c72-106c4f8a4645"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-60f40071-0a28-4a47-9c72-106c4f8a4645"));
  })();
} catch {}
const l = require("node:crypto"),
  i = 11,
  o = 3128,
  d = 8081,
  R = Array.from({ length: 32 }, (e, t) => 8082 + t),
  u = [o, d, ...R];
function n(e) {
  return [
    ...new Set((e ?? []).map((t) => t.replaceAll("/", "\\").toLowerCase())),
  ].sort();
}
function c(e) {
  const t = {
    setupVersion: e.setupVersion,
    codexHome: e.codexHome.replaceAll("/", "\\").toLowerCase(),
    commandCwd: e.commandCwd.replaceAll("/", "\\").toLowerCase(),
    realUser: e.realUser.toLowerCase(),
    readRoots: n(e.readRoots),
    writeRoots: n(e.writeRoots),
    denyReadPaths: n(e.denyReadPaths),
    denyWritePaths: n(e.denyWritePaths),
  };
  return `sha256:${l.createHash("sha256").update(JSON.stringify(t)).digest("hex")}`;
}
function S() {
  const e = process.env.USERNAME,
    t = process.env.USERDOMAIN,
    r = process.env.COMPUTERNAME;
  if (e && t && t.toLowerCase() !== "workgroup") return `${t}\\${e}`;
  if (e && r) return `${r}\\${e}`;
  if (e) return e;
  throw new Error(
    "USERNAME env var not set — unable to resolve Windows sandbox real user",
  );
}
function P(e) {
  const { codexHome: t, policyCwd: r } = e;
  return {
    setupVersion: i,
    policy: "workspace-write",
    policyCwd: r,
    commandCwd: r,
    env: {
      ...Object.fromEntries(
        [
          "USERPROFILE",
          "USERNAME",
          "USERDOMAIN",
          "COMPUTERNAME",
          "APPDATA",
          "LOCALAPPDATA",
          "TEMP",
          "TMP",
          "SystemRoot",
        ].flatMap((s) => {
          const a = process.env[s];
          return a != null ? [[s, a]] : [];
        }),
      ),
      HTTP_PROXY: `http://127.0.0.1:${o}`,
      HTTPS_PROXY: `http://127.0.0.1:${o}`,
      WS_PROXY: `http://127.0.0.1:${o}`,
      WSS_PROXY: `http://127.0.0.1:${o}`,
      ws_proxy: `http://127.0.0.1:${o}`,
      wss_proxy: `http://127.0.0.1:${o}`,
      ALL_PROXY: `socks5h://127.0.0.1:${d}`,
      ORBITRA_PROXY_UDP_RELAY_PORTS: R.join(","),
    },
    codexHome: t,
    readRoots: e.readRoots ?? [],
    readRootsIncludePlatformDefaults: !1,
    writeRoots: e.writeRoots ?? [],
    denyReadPaths: e.denyReadPaths ?? [],
    denyWritePaths: e.denyWritePaths ?? [],
    previousReadRoots: e.previousReadRoots,
    previousWriteRoots: e.previousWriteRoots,
    realUser: e.realUser ?? S(),
  };
}
exports.WINDOWS_SANDBOX_PROXY_PORTS = u;
exports.WINDOWS_SANDBOX_SETUP_VERSION = i;
exports.buildElevatedSetupSpec = P;
exports.setupRequestPolicyFingerprint = c;
