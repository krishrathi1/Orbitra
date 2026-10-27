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
      (r._sentryDebugIds[e] = "91332442-cc9d-4622-8353-bb9775daea7b"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-91332442-cc9d-4622-8353-bb9775daea7b"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const E = require("node:child_process"),
  R = require("node:crypto"),
  s = require("node:fs/promises"),
  n = require("node:path"),
  M = require("node:timers/promises"),
  b = require("./process-tree-DTtONxmb.js"),
  p = require("./path-utils-C0Z_XuIf.js");
require("cross-spawn");
function h(r) {
  process.parentPort?.postMessage({ type: "python-runtime-diagnostic", ...r });
}
const S = [1, 2, 3, 4, 5],
  U = /^python-runtime-v\d+(?:-[0-9a-f]{12})?$/,
  v = ".orbitra-last-used",
  T = 10080 * 60 * 1e3;
class A {
  uvPath;
  basePythonPath;
  sandboxBinDir;
  pkgCacheDir;
  isWindows;
  runtime;
  signal;
  constructor(e, t) {
    ((this.uvPath = e.uvPath),
      (this.basePythonPath = e.basePythonPath),
      (this.sandboxBinDir = e.sandboxBinDir),
      (this.pkgCacheDir = e.pkgCacheDir),
      (this.isWindows = e.isWindows),
      (this.runtime = e.runtime),
      (this.signal = t));
  }
  async ensureReady() {
    const e = performance.now();
    try {
      if (
        (this.signal?.throwIfAborted(),
        !(await p.pathExists(this.uvPath)) ||
          !(await p.pathExists(this.basePythonPath)))
      )
        return (
          h({
            phase: "prepare",
            outcome: "not-staged",
            elapsedMs: Math.round(performance.now() - e),
          }),
          !1
        );
      if (await p.pathExists(this.runtimePythonPath()))
        return (
          await this.removeLegacyPrewarmArtifacts(),
          await this.markRuntimeUsed(),
          this.retireSupersededRuntimes(),
          h({
            phase: "prepare",
            outcome: "ready",
            elapsedMs: Math.round(performance.now() - e),
          }),
          !0
        );
      (await s.mkdir(this.pkgCacheDir, { recursive: !0 }),
        await s.mkdir(this.sandboxBinDir, { recursive: !0 }));
      const t = this.runtimeDir(),
        i = n.join(
          this.sandboxBinDir,
          `.python-runtime-v${this.runtime.tag}-${process.pid}-${R.randomUUID()}`,
        );
      await s.rm(i, { recursive: !0, force: !0 });
      try {
        (this.signal?.throwIfAborted(),
          await this.runUvVenv(i),
          await this.runUvInstall(this.runtimePythonPath(i)),
          await this.addWindowsPython3Alias(i),
          await this.verifyRuntime(this.runtimePythonPath(i)),
          await s.writeFile(
            n.join(i, ".orbitra-runtime.json"),
            JSON.stringify({
              version: this.runtime.version,
              packages: this.runtime.requirements,
              stagedAt: new Date().toISOString(),
            }),
          ));
        const m = this.isWindows ? [100, 200, 400, 800, 1600] : [];
        for (let o = 0; ; o++) {
          this.signal?.throwIfAborted();
          try {
            await s.rename(i, t);
            break;
          } catch (d) {
            if (await p.pathExists(this.runtimePythonPath())) break;
            const u = d.code,
              a = m[o];
            if (
              a === void 0 ||
              (u !== "EPERM" && u !== "EACCES" && u !== "EBUSY")
            )
              throw d;
            await M.setTimeout(a, void 0, { signal: this.signal });
          }
        }
        return (
          h({
            phase: "prepare",
            outcome: "ready",
            elapsedMs: Math.round(performance.now() - e),
          }),
          await this.removeLegacyPrewarmArtifacts(),
          await this.markRuntimeUsed(),
          this.retireSupersededRuntimes(),
          !0
        );
      } finally {
        await s.rm(i, {
          recursive: !0,
          force: !0,
          maxRetries: this.isWindows ? 5 : 0,
          retryDelay: 100,
        });
      }
    } catch (t) {
      return (
        h({
          phase: "prepare",
          outcome: this.signal?.aborted ? "cancelled" : "failed",
          elapsedMs: Math.round(performance.now() - e),
          code: t instanceof Error ? f(t) : "UNKNOWN",
        }),
        !1
      );
    }
  }
  runtimeDir() {
    return n.join(this.sandboxBinDir, `python-runtime-v${this.runtime.tag}`);
  }
  runtimePythonPath(e = this.runtimeDir()) {
    return this.isWindows
      ? n.join(e, "Scripts", "python.exe")
      : n.join(e, "bin", "python");
  }
  runUvVenv(e) {
    return this.runUv("venv", [
      "venv",
      "--no-project",
      "--no-python-downloads",
      "--relocatable",
      "--python",
      this.basePythonPath,
      e,
    ]);
  }
  runUvInstall(e) {
    return this.runUv("install", [
      "pip",
      "install",
      "--verify-hashes",
      "--python",
      e,
      ...this.runtime.requirements,
    ]);
  }
  async addWindowsPython3Alias(e) {
    this.isWindows &&
      (await s.copyFile(
        n.join(e, "Scripts", "python.exe"),
        n.join(e, "Scripts", "python3.exe"),
      ));
  }
  verifyRuntime(e) {
    const t = this.runtime.imports.map((i) => `import ${i}`).join("; ");
    return this.runProcess("verify", e, ["-c", t], {});
  }
  async markRuntimeUsed() {
    const e = performance.now();
    try {
      await s.writeFile(n.join(this.runtimeDir(), v), new Date().toISOString());
    } catch (t) {
      h({
        phase: "record-use",
        outcome: "failed",
        elapsedMs: Math.round(performance.now() - e),
        code: t instanceof Error ? f(t) : "UNKNOWN",
      });
    }
  }
  async retireSupersededRuntimes() {
    const e = n.basename(this.runtimeDir()),
      t = performance.now();
    try {
      const i = await s.readdir(this.sandboxBinDir, { withFileTypes: !0 }),
        m = Date.now() - T;
      await Promise.allSettled(
        i
          .filter((o) => o.isDirectory() && o.name !== e)
          .filter((o) => U.test(o.name))
          .map(async (o) => {
            const d = n.join(this.sandboxBinDir, o.name);
            (await this.lastUsedAt(d)) > m ||
              (await s.rm(d, { recursive: !0, force: !0 }));
          }),
      );
    } catch (i) {
      h({
        phase: "cleanup",
        outcome: "failed",
        elapsedMs: Math.round(performance.now() - t),
        code: i instanceof Error ? f(i) : "UNKNOWN",
      });
    }
  }
  async lastUsedAt(e) {
    for (const t of [v, ".orbitra-runtime.json"])
      try {
        return (await s.stat(n.join(e, t))).mtimeMs;
      } catch {}
    try {
      return (await s.stat(e)).mtimeMs;
    } catch {
      return 0;
    }
  }
  async removeLegacyPrewarmArtifacts() {
    await Promise.allSettled([
      s.rm(n.join(this.pkgCacheDir, "python-envs"), {
        recursive: !0,
        force: !0,
      }),
      ...S.map((e) =>
        s.rm(n.join(this.pkgCacheDir, `.prewarm-v${e}`), { force: !0 }),
      ),
    ]);
  }
  runUv(e, t) {
    return this.runProcess(e, this.uvPath, t, {
      UV_CACHE_DIR: n.join(this.pkgCacheDir, "uv"),
      UV_PYTHON: this.basePythonPath,
      UV_PYTHON_INSTALL_DIR: n.join(this.pkgCacheDir, "uv-python"),
    });
  }
  runProcess(e, t, i, m) {
    return new Promise((o, d) => {
      this.signal?.throwIfAborted();
      const u = performance.now(),
        a = E.spawn(t, i, {
          env: { ...process.env, ...m },
          stdio: ["ignore", "ignore", "pipe"],
          windowsHide: !0,
          detached: !this.isWindows,
        });
      h({
        phase: e,
        outcome: "spawned",
        elapsedMs: Math.round(performance.now() - u),
      });
      let y = "",
        l,
        P;
      const w = () => {
        ((l = Object.assign(new Error("Python runtime preparation cancelled"), {
          code: "ABORT_ERR",
        })),
          b.killProcessTree(a, (c) => {
            h({
              phase: e,
              outcome: "failed",
              elapsedMs: Math.round(performance.now() - u),
              code: D(c),
            });
            try {
              a.kill();
            } catch {}
          }));
      };
      (this.signal?.addEventListener("abort", w, { once: !0 }),
        this.signal?.aborted && w(),
        a.stderr?.on("data", (c) => {
          y = (y + c.toString()).slice(-2e3);
        }),
        a.once("error", (c) => {
          l = c;
        }),
        a.once("exit", () => {
          if (this.signal?.aborted) {
            a.stderr?.destroy();
            return;
          }
          P = setTimeout(() => {
            (d(
              new Error(
                `${t} exited but stderr did not close within 5 seconds`,
              ),
            ),
              b.killProcessTree(a),
              a.stderr?.destroy());
          }, 5e3);
        }),
        a.once("close", (c) => {
          (clearTimeout(P),
            this.signal?.removeEventListener("abort", w),
            b.killProcessTree(a));
          let g = "ready";
          if (
            (this.signal?.aborted
              ? (g = "cancelled")
              : (l || c !== 0) && (g = "failed"),
            h({
              phase: e,
              outcome: g,
              elapsedMs: Math.round(performance.now() - u),
              exitCode: c,
              ...(l ? { code: f(l) } : {}),
            }),
            l)
          ) {
            d(l);
            return;
          }
          if (c === 0) {
            o();
            return;
          }
          d(new Error(`${t} ${i.join(" ")} exited ${c ?? "?"}: ${y}`));
        }));
    });
  }
}
function f(r) {
  return !("code" in r) || typeof r.code != "string" ? "UNKNOWN" : D(r.code);
}
function D(r) {
  return /^[A-Z][A-Z0-9_]{0,31}$/.test(r) ? r : "UNKNOWN";
}
exports.SandboxPythonRuntimeManager = A;
