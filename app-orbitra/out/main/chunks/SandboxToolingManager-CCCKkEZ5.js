"use strict";
(function () {
  try {
    var a =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    a.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var a =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new a.Error().stack;
    e &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[e] = "2a26bf74-241a-4064-bfca-28c6c63f3eae"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-2a26bf74-241a-4064-bfca-28c6c63f3eae"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const f = require("node:crypto"),
  p = require("node:fs"),
  n = require("node:fs/promises"),
  i = require("node:path"),
  c = require("./python-runtime-BF_2cFN_.js"),
  s = require("../main-app.js"),
  P = require("./tool-file-name-B5D34MJH.js");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
require("node:os");
require("valibot");
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
const m = [
  "agent-runner.mjs",
  "orbitra-proxy.mjs",
  "tab-command-builders.mjs",
];
class b {
  sandboxRootPath;
  sandboxBinDir;
  pkgCacheDir;
  platformKey;
  ensureStagedPromise = null;
  toolStagePromises = new Map();
  runnerStagePromises = new Map();
  pythonRuntimePromise = null;
  pythonRuntimeReady = !1;
  constructor(e) {
    const r = s.getSandboxToolingPaths(e);
    ((this.sandboxRootPath = r.sandboxRootPath),
      (this.sandboxBinDir = r.sandboxBinDir),
      (this.pkgCacheDir = r.pkgCacheDir),
      (this.platformKey =
        e.platformKey ??
        s.resolvePlatformKey(
          e.platform ?? process.platform,
          e.arch ?? process.arch,
        )));
  }
  getSandboxRootPath() {
    return this.sandboxRootPath;
  }
  getSandboxBinDir() {
    return this.sandboxBinDir;
  }
  getPkgCacheDir() {
    return this.pkgCacheDir;
  }
  getBasePythonPath() {
    const e = this.getSandboxBinDir();
    return this.platformKey.startsWith("win32-")
      ? i.join(e, "python-dist", "python.exe")
      : i.join(e, "python-dist", "bin", "python3");
  }
  getBundledPythonPath() {
    return this.getBasePythonPath();
  }
  getPythonRuntimeDir() {
    return i.join(
      this.getSandboxBinDir(),
      `python-runtime-v${c.PYTHON_RUNTIME_TAG}`,
    );
  }
  getPythonRuntimeBinDir() {
    return this.platformKey.startsWith("win32-")
      ? i.join(this.getPythonRuntimeDir(), "Scripts")
      : i.join(this.getPythonRuntimeDir(), "bin");
  }
  getPythonRuntimePath() {
    return this.platformKey.startsWith("win32-")
      ? i.join(this.getPythonRuntimeBinDir(), "python.exe")
      : i.join(this.getPythonRuntimeBinDir(), "python");
  }
  getEffectivePythonPath() {
    return this.pythonRuntimeReady
      ? this.getPythonRuntimePath()
      : this.getBasePythonPath();
  }
  getEffectivePythonRuntimeBinDir() {
    return this.pythonRuntimeReady ? this.getPythonRuntimeBinDir() : void 0;
  }
  async ensurePythonRuntimeReady() {
    if (this.pythonRuntimePromise) return this.pythonRuntimePromise;
    const e = this.preparePythonRuntime();
    this.pythonRuntimePromise = e;
    const r = await e;
    return (
      !r &&
        this.pythonRuntimePromise === e &&
        (this.pythonRuntimePromise = null),
      r
    );
  }
  async preparePythonRuntime() {
    if (this.ensureStagedPromise)
      try {
        await this.ensureStagedPromise;
      } catch {
        return !1;
      }
    try {
      this.pythonRuntimeReady = await s.runBrowserSetupTask({
        type: "prepare-python-runtime",
        options: {
          uvPath: this.getBundledUvPath(),
          basePythonPath: this.getBasePythonPath(),
          sandboxBinDir: this.getSandboxBinDir(),
          pkgCacheDir: this.getPkgCacheDir(),
          isWindows: this.platformKey.startsWith("win32-"),
          runtime: {
            tag: c.PYTHON_RUNTIME_TAG,
            version: c.PYTHON_RUNTIME_VERSION,
            requirements: c.PYTHON_RUNTIME_REQUIREMENTS,
            imports: c.PYTHON_RUNTIME_PACKAGES.map((e) => e.importName),
          },
        },
      });
    } catch (e) {
      (s.logger.warn("SandboxToolingManager: Python setup process failed", {
        reason: e instanceof Error ? e.message : String(e),
      }),
        (this.pythonRuntimeReady = !1));
    }
    return this.pythonRuntimeReady;
  }
  getBundledUvPath() {
    const e = this.getSandboxBinDir();
    return this.platformKey.startsWith("win32-")
      ? i.join(e, "uv.exe")
      : i.join(e, "uv");
  }
  getBundledNodePath() {
    const e = this.getSandboxBinDir();
    return this.platformKey.startsWith("win32-")
      ? i.join(e, "node-dist", "node.exe")
      : i.join(e, "node");
  }
  async ensureRunnerStaged(e) {
    const r = this.runnerStagePromises.get(e);
    if (r) return r;
    const t = this.stageRunner(e);
    this.runnerStagePromises.set(e, t);
    try {
      return await t;
    } finally {
      this.runnerStagePromises.get(e) === t &&
        this.runnerStagePromises.delete(e);
    }
  }
  async stageRunner(e) {
    const r = i.dirname(e),
      t = await q(r),
      o = `runner-${t.slice(0, 16)}`,
      u = i.join(this.getSandboxBinDir(), o),
      l = i.join(u, "agent-runner.mjs");
    if (await g(u, t)) return l;
    const d = i.join(
      this.getSandboxBinDir(),
      `.staging-${o}-${process.pid}-${f.randomUUID()}`,
    );
    await n.mkdir(d, { recursive: !0 });
    try {
      for (const h of m)
        await n.writeFile(i.join(d, h), await n.readFile(i.join(r, h)));
      if (!(await g(d, t)))
        throw new Error("Sandbox runner source changed during staging");
      if (await g(u, t)) return l;
      try {
        await n.rename(d, u);
      } catch {
        if (await g(u, t)) return l;
        await n.mkdir(u, { recursive: !0 });
        for (const h of m) await n.rename(i.join(d, h), i.join(u, h));
      }
      if (!(await g(u, t)))
        throw new Error("Sandbox runner verification failed after staging");
      return l;
    } catch (h) {
      if (await g(u, t)) return l;
      throw h;
    } finally {
      await n.rm(d, { recursive: !0, force: !0 });
    }
  }
  getBundledNpmCliPath() {
    const e = this.getSandboxBinDir();
    return this.platformKey.startsWith("win32-")
      ? i.join(e, "node-dist", "node_modules", "npm", "bin", "npm-cli.js")
      : i.join(
          e,
          "node-dist",
          "lib",
          "node_modules",
          "npm",
          "bin",
          "npm-cli.js",
        );
  }
  async ensureBundledNodeAvailable() {
    return this.ensureBundledToolAvailable("node");
  }
  async ensureBundledToolAvailable(e) {
    const r = this.getBundledToolPath(e),
      t = s.TOOL_MANIFEST.find((o) => o.name === e || o.provides?.includes(e));
    if (!t)
      return (
        s.logger.warn(
          "SandboxToolingManager: bundled tool missing from manifest",
          { tool: e, path: r },
        ),
        null
      );
    if (
      !this.toolStagePromises.has(t.name) &&
      t.delivery !== "on-demand" &&
      (await y(r))
    )
      return r;
    try {
      await this.ensureToolStaged(t);
    } catch (o) {
      return (
        s.logger.error(
          "SandboxToolingManager: failed to stage requested tool",
          {
            tool: e,
            owner: t.name,
            err: o instanceof Error ? o.message : String(o),
          },
        ),
        null
      );
    }
    return (await y(r)) ? r : null;
  }
  getBundledToolPath(e) {
    return e === "node"
      ? this.getBundledNodePath()
      : e === "python3"
        ? this.getBundledPythonPath()
        : e === "uv"
          ? this.getBundledUvPath()
          : i.join(
              this.getSandboxBinDir(),
              P.getToolBinaryFileName(e, this.platformKey),
            );
  }
  async ensureStaged() {
    return this.ensureStagedPromise
      ? this.ensureStagedPromise
      : ((this.ensureStagedPromise = this.ensureStagedOnce().finally(() => {
          this.ensureStagedPromise = null;
        })),
        this.ensureStagedPromise);
  }
  async ensureStartupToolsReady() {
    const e = this.getSandboxBinDir();
    (await n.mkdir(e, { recursive: !0 }),
      await n.mkdir(this.getPkgCacheDir(), { recursive: !0 }));
    const r = s.TOOL_MANIFEST.filter(
      (t) => t.delivery === "startup-background",
    );
    await Promise.all(
      r.map(async (t) => {
        try {
          await this.ensureToolStaged(t, e);
        } catch (o) {
          s.logger.error(
            "SandboxToolingManager: failed to stage startup tool",
            { tool: t.name, err: o.message },
          );
        }
      }),
    );
  }
  async ensureStagedOnce() {
    const e = this.getSandboxBinDir();
    (await n.mkdir(e, { recursive: !0 }),
      await n.mkdir(this.getPkgCacheDir(), { recursive: !0 }));
    for (const r of s.TOOL_MANIFEST)
      if (!(r.delivery === "on-demand" || r.delivery === "startup-background"))
        try {
          await this.ensureToolStaged(r, e);
        } catch (t) {
          s.logger.error("SandboxToolingManager: failed to stage tool", {
            tool: r.name,
            err: t.message,
          });
        }
  }
  async ensureToolStaged(e, r) {
    const t = this.toolStagePromises.get(e.name);
    if (t) return t;
    const o = this.stageTool(e, r).finally(() => {
      this.toolStagePromises.get(e.name) === o &&
        this.toolStagePromises.delete(e.name);
    });
    return (this.toolStagePromises.set(e.name, o), o);
  }
  async stageTool(e, r) {
    const t = r ?? this.getSandboxBinDir();
    (await n.mkdir(t, { recursive: !0 }),
      await n.mkdir(this.getPkgCacheDir(), { recursive: !0 }),
      await s.runBrowserSetupTask({
        type: "stage-tool",
        tool: e,
        binDir: t,
        platformKey: this.platformKey,
      }));
  }
  async clearPackageCache() {
    (await n.rm(this.getPkgCacheDir(), { recursive: !0, force: !0 }),
      await n.mkdir(this.getPkgCacheDir(), { recursive: !0 }));
  }
}
async function y(a) {
  try {
    return (await n.access(a, p.constants.X_OK), !0);
  } catch {
    return !1;
  }
}
async function q(a) {
  const e = f.createHash("sha256");
  for (const r of m) (e.update(r), e.update(await n.readFile(i.join(a, r))));
  return e.digest("hex");
}
async function g(a, e) {
  try {
    return (await q(a)) === e;
  } catch {
    return !1;
  }
}
exports.SandboxToolingManager = b;
