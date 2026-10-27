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
      (e._sentryDebugIds[i] = "584dc9d2-603b-4b42-a513-02570b312f9d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-584dc9d2-603b-4b42-a513-02570b312f9d"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const w = require("node:child_process"),
  _ = require("node:crypto"),
  N = require("node:fs/promises"),
  q = require("node:path"),
  a = require("../main-app.js"),
  D = require("./appPaths-eBQvtv9Z.js"),
  d = require("./windowsSandboxSetupSpec-Ib0cbc2S.js");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("node:util");
require("node:worker_threads");
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
function h(e) {
  const i = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const r in e)
      if (r !== "default") {
        const t = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(
          i,
          r,
          t.get ? t : { enumerable: !0, get: () => e[r] },
        );
      }
  }
  return ((i.default = e), Object.freeze(i));
}
const s = h(N);
function O(e, i) {
  return e.length !== i.length ? !1 : e.every((r, t) => r === i[t]);
}
function P(e) {
  return (
    O(e.proxy_ports ?? [], d.WINDOWS_SANDBOX_PROXY_PORTS) &&
    e.allow_local_binding === !1
  );
}
function I() {
  return a.getWindowsSandboxHome({ appDataPath: D.getAppDataPath() });
}
async function m(e) {
  const i = await b(q.join(e, ".sandbox", "setup_marker.json"));
  if (i === "missing") return "marker-missing";
  if (i === "unreadable") return "marker-unreadable";
  if (i.version !== d.WINDOWS_SANDBOX_SETUP_VERSION)
    return "marker-version-mismatch";
  if (!P(i)) return "proxy-settings-mismatch";
  const r = await b(q.join(e, ".sandbox-secrets", "sandbox_users.json"));
  return r === "missing"
    ? "users-missing"
    : r === "unreadable"
      ? "users-unreadable"
      : r.version !== d.WINDOWS_SANDBOX_SETUP_VERSION
        ? "users-version-mismatch"
        : null;
}
async function b(e) {
  let i;
  try {
    i = await s.readFile(e, "utf8");
  } catch (r) {
    return r.code === "ENOENT" ? "missing" : "unreadable";
  }
  try {
    const r = JSON.parse(i);
    return typeof r == "object" && r !== null ? r : "unreadable";
  } catch {
    return "unreadable";
  }
}
async function v(e) {
  const i =
      e.mkdir ??
      (async (n) => {
        await s.mkdir(n, { recursive: !0 });
      }),
    r = e.findSetupProblem ?? m;
  await i(e.codexHome);
  const t = await r(e.codexHome);
  return t === null
    ? { kind: "ready", codexHome: e.codexHome }
    : { kind: "repair-required", codexHome: e.codexHome, reason: t };
}
function E(e, i, r) {
  const t = i
    .trim()
    .split(
      `
`,
    )
    .map((c) => c.trim())
    .filter(Boolean)
    .pop();
  if (t === "UAC_DECLINED")
    return {
      ok: !1,
      code: "SETUP_UAC_DECLINED",
      message: a.sandboxCopy.repairPermissionDeclined,
    };
  if (e !== 0)
    return {
      ok: !1,
      code: "SETUP_PS_FAILED",
      message: a.sandboxCopy.repairFailed,
      detail: `PowerShell exited ${e ?? "?"}; stderr=${r.slice(0, 300)}`,
    };
  const n = t?.startsWith("EXITCODE:") ? t.slice(9) : void 0,
    u = n != null ? parseInt(n, 10) : NaN;
  return Number.isNaN(u) || u !== 0
    ? {
        ok: !1,
        code: "SETUP_ELEVATED_NONZERO",
        message: a.sandboxCopy.repairFailed,
        detail: `orbitra-helper setup exited ${n ?? "<no exit code>"}; stderr=${r.slice(0, 300)}`,
      }
    : { ok: !0 };
}
async function $(e) {
  const { helperPath: i, codexHome: r, policyCwd: t } = e;
  await s.mkdir(r, { recursive: !0 });
  const n = JSON.stringify(
      d.buildElevatedSetupSpec({ codexHome: r, policyCwd: t }),
    ),
    u = q.join(r, `.setup-spec-${_.randomUUID()}.json`);
  await s.writeFile(u, n, "utf8");
  const c = (l) => l.replace(/'/g, "''"),
    y = c(i),
    g = c(u),
    x = `$psi = New-Object System.Diagnostics.ProcessStartInfo; $psi.FileName = '${y}'; $psi.Arguments = 'setup --spec-file "${g}"'; $psi.Verb = 'runas'; $psi.UseShellExecute = $true; $psi.WindowStyle = 'Hidden'; try { $p = [System.Diagnostics.Process]::Start($psi); $p.WaitForExit(); Write-Output ('EXITCODE:' + $p.ExitCode) } catch { $ex = $_.Exception; while ($ex.InnerException) { $ex = $ex.InnerException }; if ($ex -is [System.ComponentModel.Win32Exception] -and $ex.NativeErrorCode -eq 1223) { Write-Output 'UAC_DECLINED' } else { Write-Error $_; exit 1 } }`;
  return new Promise((l) => {
    const p = w.spawn(
      a.getWindowsPowerShellPath(),
      ["-NoProfile", "-NonInteractive", "-Command", x],
      {
        stdio: ["ignore", "pipe", "pipe"],
        windowsHide: !0,
        env: {
          ...process.env,
          SystemRoot: process.env.SystemRoot || "C:\\Windows",
        },
      },
    );
    let S = "",
      f = "";
    (p.stdout.on("data", (o) => {
      S += o.toString("utf8");
    }),
      p.stderr.on("data", (o) => {
        f += o.toString("utf8");
      }),
      p.on("exit", (o) => {
        (s.unlink(u).catch(() => {}), l(E(o, S, f)));
      }),
      p.on("error", (o) => {
        (s.unlink(u).catch(() => {}),
          l({
            ok: !1,
            code: "SETUP_SPAWN_FAILED",
            message: a.sandboxCopy.repairFailed,
            detail: o.message,
          }));
      }));
  });
}
exports.WINDOWS_SANDBOX_SETUP_VERSION = d.WINDOWS_SANDBOX_SETUP_VERSION;
exports.buildElevatedSetupSpec = d.buildElevatedSetupSpec;
exports.findWindowsSandboxSetupProblem = m;
exports.getWindowsSandboxSetupState = v;
exports.parseElevatedSetupResult = E;
exports.runElevatedSetup = $;
exports.orbitraSandboxHome = I;
