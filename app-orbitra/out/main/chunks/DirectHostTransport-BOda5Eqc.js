"use strict";
(function () {
  try {
    var t =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    t.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "45ed3755-9385-420d-af3f-0a8ac115ea9d"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-45ed3755-9385-420d-af3f-0a8ac115ea9d"));
  })();
} catch {}
const he = require("node:crypto"),
  Y = require("node:fs"),
  h = require("node:fs/promises"),
  we = require("node:os"),
  u = require("node:path"),
  O = require("node:string_decoder"),
  R = require("../main-app.js"),
  me = require("./savedCertificateBlocklist-BUtmL3xA.js"),
  re = require("istextorbinary"),
  ne = require("./sandbox-tooling-singleton-DYdbpKPS.js"),
  P = require("./sandbox-helper-process-CQ6JyI_j.js");
function pe() {
  return process.platform === "win32"
    ? "C:\\Windows\\System32;C:\\Windows"
    : "/usr/bin:/bin:/usr/sbin:/sbin";
}
function ge(t) {
  return process.platform === "win32"
    ? [t, u.join(t, "node-dist"), u.join(t, "python-dist")]
    : [t, u.join(t, "node-dist", "bin"), u.join(t, "python-dist", "bin")];
}
function ye(t) {
  const e = u.join(t, "tmp"),
    n = u.join(t, "home");
  return [
    e,
    n,
    u.join(t, "appdata", "roaming"),
    u.join(t, "appdata", "local"),
    u.join(n, ".matplotlib"),
  ];
}
function be(t) {
  const e = t.PATH ?? t.Path;
  return e && e.length > 0 ? e : void 0;
}
function ve(t, e) {
  ((t.PATH = e), "Path" in t && (t.Path = e));
}
function ie(t, e, n) {
  if (!e) return t;
  const r = { ...t },
    i = ge(e.getSandboxBinDir()),
    o = e.getEffectivePythonRuntimeBinDir(),
    s = be(r) ?? pe(),
    a = n === "prepend" ? [...i, s] : [s, ...i];
  (o && a.unshift(o), ve(r, a.join(u.delimiter)));
  const l = e.getPkgCacheDir();
  return (
    (r.UV_CACHE_DIR = u.join(l, "uv")),
    (r.npm_config_cache = u.join(l, "npm")),
    (r.npm_config_store_dir = u.join(l, "pnpm-store")),
    (r.UV_PYTHON_INSTALL_DIR = u.join(l, "uv-python")),
    (r.UV_PYTHON = e.getEffectivePythonPath()),
    r
  );
}
const Se = 10 * 1024 * 1024,
  Ee = 256 * 1024,
  G = 124,
  Te = 125;
class se {
  nativeFs = this;
  activeSignal = null;
  sessions = new Map();
  liveProcs = new Map();
  liveExitListeners = new Set();
  registerSession(e, n) {
    this.sessions.set(e, n);
  }
  updateSession(e, n) {
    (this.requireSession(e, "updateSession"), this.sessions.set(e, n));
  }
  getSessionConfig(e) {
    return this.sessions.get(e);
  }
  async withClaimedPreviousPolicyRoots(e, n) {
    return n(void 0);
  }
  async destroySession(e) {
    for (const [n, r] of this.liveProcs)
      r.sessionId === e && (H(r), this.liveProcs.delete(n));
    this.sessions.delete(e);
  }
  async exec(e, n, r) {
    const i = this.requireSession(e, "exec"),
      o = r?.signal ?? this.activeSignal;
    L(o);
    const s = J(n),
      a = Q(i, r?.workdir),
      l = K(s, i, a),
      c = Date.now();
    let d = "",
      f = "",
      m = !1,
      w = !1,
      S = null;
    const b = () => {
      ((m = !0), P.killSandboxHelperTree(l));
    };
    (o && o.addEventListener("abort", b, { once: !0 }),
      r?.timeoutMs != null &&
        (S = setTimeout(() => {
          ((w = !0), P.killSandboxHelperTree(l));
        }, r.timeoutMs)));
    const D = new O.StringDecoder("utf8"),
      E = new O.StringDecoder("utf8");
    try {
      const y = await new Promise((p, F) => {
        (l.stdout?.on("data", (x) => {
          d += D.write(x);
        }),
          l.stderr?.on("data", (x) => {
            f += E.write(x);
          }),
          l.once("error", F),
          l.once("close", (x) => {
            ((d += D.end()), (f += E.end()), p(x ?? null));
          }),
          l.stdin?.end());
      });
      if (m || o?.aborted) throw C("Exec aborted");
      return w
        ? { exitCode: G, stdout: d, stderr: f, durationMs: Date.now() - c }
        : { exitCode: y, stdout: d, stderr: f, durationMs: Date.now() - c };
    } finally {
      (S && clearTimeout(S), o && o.removeEventListener("abort", b));
    }
  }
  async execStream(e, n, r, i) {
    const o = this.requireSession(e, "execStream"),
      s = r.signal ?? this.activeSignal;
    L(s);
    const a = J(n),
      l = Q(o, r.workdir);
    let c;
    try {
      c = await Le(r.outputPath, l);
    } catch (T) {
      throw (L(s), T);
    }
    L(s);
    const d = K(a, o, l),
      f = Date.now(),
      m = he.randomUUID(),
      w = new P.LiveBuffer({ maxBytes: Se });
    let S = !1,
      b = !1,
      D = !1,
      E = !1,
      y = null,
      p = null,
      F = null,
      x = null,
      A = null,
      g = null;
    const B = () => {
        F && (clearTimeout(F), (F = null));
      },
      k = () => {
        x && (clearTimeout(x), (x = null));
      },
      M = () => {
        (B(), A && (clearTimeout(A), (A = null)), k());
      },
      ce = () => {
        (M(), ee(c));
      },
      z = (T) =>
        p !== null
          ? !1
          : ((p = T),
            g && g.exited === null && (g.exited = { exitCode: T }),
            !0),
      I = () => {
        r.idleTimeoutMs != null &&
          (r.idleTimeoutMs <= 0 ||
            (p === null &&
              (k(),
              (x = setTimeout(() => {
                z(Te) && ((E = !0), B(), P.killSandboxHelperTree(d));
              }, r.idleTimeoutMs)))));
      },
      _ = () => {
        ((b = !0), P.killSandboxHelperTree(d), g && this.liveProcs.delete(m));
      };
    (s && s.addEventListener("abort", _, { once: !0 }),
      r.timeoutMs != null &&
        (F = setTimeout(() => {
          z(G) && ((D = !0), k(), P.killSandboxHelperTree(d));
        }, r.timeoutMs)),
      I());
    const $ = new O.StringDecoder("utf8"),
      W = new O.StringDecoder("utf8");
    (d.stdout?.on("data", (T) => {
      (q(w, c, S, i, "stdout", $.write(T)), I());
    }),
      d.stderr?.on("data", (T) => {
        (q(w, c, S, i, "stderr", W.write(T)), I());
      }));
    try {
      if (
        (await new Promise((ue, de) => {
          let U = !1;
          const V = (N) => {
            U || ((U = !0), ue(N));
          };
          (d.once("error", de),
            d.once("close", (N, fe) => {
              (q(w, c, S, i, "stdout", $.end()),
                q(w, c, S, i, "stderr", W.end()),
                (y = oe(N, p, fe)),
                g &&
                  ((g.exited = { exitCode: y }),
                  g.detachAbort?.(),
                  g.cleanup?.(),
                  this.emitLiveSessionExit({
                    sessionId: e,
                    liveSessionId: m,
                    exitCode: y,
                  })),
                V("closed"));
            }),
            r.yieldMs != null &&
              (A = setTimeout(() => {
                ((S = !0), V("yielded"));
              }, r.yieldMs)));
        })) === "yielded" &&
        y === null &&
        !b &&
        !D &&
        !E
      ) {
        if ((await c?.flush(), b || s?.aborted))
          throw (P.killSandboxHelperTree(d), C("Exec aborted"));
        if (D || E)
          return (
            M(),
            s && s.removeEventListener("abort", _),
            {
              exitCode: y ?? p,
              stdout: w.stdout,
              outputFile: c?.result,
              stderr: w.stderr,
              durationMs: Date.now() - f,
            }
          );
        if (y !== null)
          return (
            M(),
            s && s.removeEventListener("abort", _),
            {
              exitCode: y,
              stdout: w.stdout,
              outputFile: c?.result,
              stderr: w.stderr,
              durationMs: Date.now() - f,
            }
          );
        if (
          ((g = {
            child: d,
            buf: w,
            sessionId: e,
            exited: null,
            cleanup: ce,
            outputFile: c,
          }),
          this.liveProcs.set(m, g),
          s && (g.detachAbort = () => s.removeEventListener("abort", _)),
          s?.aborted)
        )
          throw (H(g), this.liveProcs.delete(m), C("Exec aborted"));
        return {
          exitCode: null,
          stdout: w.stdout,
          outputFile: c?.result,
          stderr: w.stderr,
          liveSessionId: m,
        };
      }
      if (b || s?.aborted) throw C("Exec aborted");
      return (
        M(),
        await c?.flush(),
        s && s.removeEventListener("abort", _),
        {
          exitCode: y ?? p,
          stdout: w.stdout,
          outputFile: c?.result,
          stderr: w.stderr,
          durationMs: Date.now() - f,
        }
      );
    } catch (T) {
      throw (
        M(),
        s && s.removeEventListener("abort", _),
        g
          ? (H(g), this.liveProcs.delete(m))
          : (P.killSandboxHelperTree(d), ee(c)),
        T
      );
    }
  }
  async writeLiveInput(e, n, r) {
    this.requireLiveEntry(e, n, "writeLiveInput").child.stdin?.write(r);
  }
  async readLiveOutput(e, n) {
    const r = this.requireLiveEntry(e, n, "readLiveOutput");
    return (
      await r.outputFile?.flush(),
      {
        stdout: r.buf.stdout,
        outputFile: r.outputFile?.result,
        stderr: r.buf.stderr,
        exitCode: r.exited?.exitCode ?? null,
      }
    );
  }
  async killLiveSession(e, n) {
    const r = this.liveProcs.get(n);
    if (!r) return !1;
    if (r.sessionId !== e)
      throw new Error(
        `killLiveSession: live session "${n}" belongs to another session`,
      );
    return (H(r), this.liveProcs.delete(n), !0);
  }
  onLiveSessionExit(e) {
    return (
      this.liveExitListeners.add(e),
      () => this.liveExitListeners.delete(e)
    );
  }
  emitLiveSessionExit(e) {
    for (const n of this.liveExitListeners)
      try {
        n(e);
      } catch {}
  }
  async readFileRaw(e, n, r) {
    const i = this.requireSession(e, "readFileRaw"),
      o = v(i, n);
    await Z(o, n, r?.maxSizeBytes);
    const s = await h.readFile(o),
      a = await me.detectMime({ buffer: s, path: o });
    return {
      mimeType:
        (re.isText(u.basename(o), s) ?? !1) && R.isBinaryMime(a)
          ? "text/plain"
          : a,
      size: s.length,
      data: s,
    };
  }
  async streamFile(e, n, r, i) {
    const o = this.requireSession(e, "streamFile"),
      s = r.signal ?? this.activeSignal;
    L(s);
    const a = v(o, n);
    if ((await h.lstat(a)).isSymbolicLink())
      throw new Error("Upload source must not be a symbolic link");
    const c = Y.constants.O_NOFOLLOW ?? 0,
      d = await h.open(a, Y.constants.O_RDONLY | c);
    try {
      const f = await d.stat();
      if (!f.isFile()) throw new Error("Upload source must be a regular file");
      if (r.maxSizeBytes !== void 0 && f.size > r.maxSizeBytes)
        throw new Error(
          `File too large (${f.size} bytes, max ${r.maxSizeBytes}): ${n}`,
        );
      if (f.size !== r.expectedSizeBytes)
        throw new Error("Upload source size changed before streaming");
      if (
        r.expectedModifiedAtMs !== void 0 &&
        f.mtimeMs !== r.expectedModifiedAtMs
      )
        throw new Error("Upload source changed before streaming");
      let m = 0;
      for (; m < f.size; ) {
        L(s);
        const E = Math.min(Ee, f.size - m),
          y = Buffer.allocUnsafe(E);
        let p = 0;
        for (; p < E; ) {
          const F = await d.read(y, p, E - p, m + p);
          if (F.bytesRead === 0) break;
          p += F.bytesRead;
        }
        if (p !== E)
          throw new Error("Upload source became shorter while streaming");
        (await i(y), (m += p));
      }
      L(s);
      const w = Buffer.allocUnsafe(1),
        S = await d.read(w, 0, 1, f.size),
        b = await d.stat();
      if (
        S.bytesRead !== 0 ||
        b.dev !== f.dev ||
        b.ino !== f.ino ||
        b.size !== f.size ||
        b.mtimeMs !== f.mtimeMs
      )
        throw new Error("Upload source changed while streaming");
    } finally {
      await d.close();
    }
  }
  async writeBinaryFile(e, n, r) {
    const i = this.requireSession(e, "writeBinaryFile"),
      o = v(i, n);
    return (
      await h.mkdir(u.dirname(o), { recursive: !0 }),
      await h.writeFile(o, r),
      r.length
    );
  }
  async writeManyFiles(e, n) {
    const r = this.requireSession(e, "writeManyFiles"),
      i = [];
    for (const o of n) {
      const s = v(r, o.dest);
      (await h.mkdir(u.dirname(s), { recursive: !0 }),
        await h.writeFile(s, o.data),
        i.push(o.data.length));
    }
    return i;
  }
  async listDir(e, n) {
    const r = this.requireSession(e, "listDir"),
      i = v(r, n),
      o = await h.readdir(i, { withFileTypes: !0 }),
      s = [];
    for (const a of o) {
      const l = _e(a);
      let c = 0,
        d;
      if (l === "file")
        try {
          const m = await h.stat(u.join(i, a.name));
          ((c = m.size), (d = m.mtimeMs));
        } catch {
          c = 0;
        }
      const f = { name: a.name, type: l, size: c };
      (d !== void 0 && (f.modifiedAtMs = d), s.push(f));
    }
    return (s.sort(Re), s);
  }
  async exists(e, n) {
    const r = this.requireSession(e, "exists"),
      i = v(r, n);
    try {
      return (await h.access(i), !0);
    } catch {
      return !1;
    }
  }
  async remove(e, n, r) {
    const i = this.requireSession(e, "remove"),
      o = v(i, n);
    await h.rm(o, { recursive: r, force: !0 });
  }
  async readBinaryFiles(e, n, r) {
    const i = this.requireSession(e, "readBinaryFiles"),
      o = new Map();
    for (const s of n) {
      const a = v(i, s);
      (await Z(a, s, r?.maxSizeBytes), o.set(s, await h.readFile(a)));
    }
    return o;
  }
  async readFiles(e, n, r, i) {
    const o = this.requireSession(e, "readFiles"),
      s = new Map();
    for (const a of n)
      try {
        const c = (await h.readFile(v(o, a), "utf8")).split(`
`);
        (c.length > 0 && c[c.length - 1] === "" && c.pop(),
          s.set(
            a,
            c.slice(r, r + i).join(`
`),
          ));
      } catch {
        continue;
      }
    return s;
  }
  async fileTree(e, n, r) {
    const i = this.requireSession(e, "fileTree");
    return te(v(i, n), r);
  }
  async fileTrees(e, n) {
    const r = this.requireSession(e, "fileTrees"),
      i = new Map();
    for (const o of n) i.set(o.path, await te(v(r, o.path), o.maxEntries));
    return i;
  }
  async search(e, n, r, i) {
    const o = this.requireSession(e, "search"),
      s = v(o, r),
      a = await Me();
    if (a)
      try {
        return await this.searchWithRipgrep(e, a, n, s, i);
      } catch (l) {
        if (!(l instanceof Error) || !Ce(l)) throw l;
      }
    if (i.isRegex)
      throw new Error(
        "Regex search needs the bundled ripgrep tool, which is unavailable on this machine right now. Retry with a plain-text (non-regex) query.",
      );
    return Ae(s, n, i);
  }
  async searchWithRipgrep(e, n, r, i, o) {
    const s = [n, "--json"];
    (o.isRegex || s.push("--fixed-strings"),
      o.glob && s.push("--glob", o.glob),
      s.push("-e", r, "--", i));
    const a = await this.exec(e, JSON.stringify(s));
    if (a.exitCode !== 0 && a.exitCode !== 1 && a.exitCode !== null)
      throw new Error(
        `search failed (exit ${a.exitCode}): ${a.stderr.slice(0, 300)}`,
      );
    return R.parseRipgrepJson(a.stdout).map((l) => ({
      path: l.path,
      line: l.lineNumber,
      content: l.lineText,
    }));
  }
  requireSession(e, n) {
    const r = this.sessions.get(e);
    if (!r) throw new Error(`${n}: unknown session "${e}"`);
    return r;
  }
  requireLiveEntry(e, n, r) {
    const i = this.liveProcs.get(n);
    if (!i) throw new Error(`${r}: unknown live session "${n}"`);
    if (i.sessionId !== e)
      throw new Error(`${r}: live session "${n}" belongs to another session`);
    return i;
  }
}
function q(t, e, n, r, i, o) {
  o.length !== 0 &&
    (t.append({ type: i, data: o }), e?.append(o), n || r(i, o));
}
function J(t) {
  if (t.startsWith("["))
    try {
      const e = JSON.parse(t);
      if (
        Array.isArray(e) &&
        e.length > 0 &&
        e.every((n) => typeof n == "string")
      )
        return e;
    } catch {
      return X(t);
    }
  return X(t);
}
function X(t) {
  return process.platform === "win32"
    ? [
        R.getWindowsPowerShellPath(),
        "-NoLogo",
        "-NoProfile",
        "-NonInteractive",
        "-Command",
        R.withPowerShellAgentRoot(t),
      ]
    : ["/bin/bash", "-c", t];
}
function K(t, e, n) {
  const r = t[0];
  if (!r) throw new Error("direct host command has no executable");
  const i = P.spawnSandboxHelper(r, t.slice(1), { cwd: n, env: Pe(e) });
  return (xe(i), i);
}
function xe(t) {
  (t.stdin?.on("error", (e) => j("stdin", e)),
    t.stdout?.on("error", (e) => j("stdout", e)),
    t.stderr?.on("error", (e) => j("stderr", e)));
}
function j(t, e) {
  R.sandboxLogger.warn("[DirectHostTransport] direct host stdio stream error", {
    stream: t,
    error: e.message,
    code: e.code,
  });
}
function Pe(t) {
  const e = { ...Fe(process.env), ...De(), ...t.shellSnapshot?.env, ...t.env };
  return ie(e, ne.getSandboxToolingManager(), "append");
}
function Fe(t) {
  return Object.fromEntries(
    Object.entries(t).filter(
      ([e]) => !e.startsWith("ELECTRON_") && e !== "NODE_OPTIONS",
    ),
  );
}
function De() {
  if (process.platform !== "win32") return {};
  const t = {
      SystemRoot: process.env.SystemRoot ?? "C:\\Windows",
      windir: process.env.windir ?? process.env.SystemRoot ?? "C:\\Windows",
      ComSpec: process.env.ComSpec ?? "C:\\Windows\\System32\\cmd.exe",
    },
    e = process.env.PATH ?? process.env.Path;
  return ((t.PATH = e ?? "C:\\Windows\\System32;C:\\Windows"), t);
}
function Q(t, e) {
  return e ? (u.isAbsolute(e) ? e : u.resolve(t.cwd, e)) : t.cwd;
}
async function Z(t, e, n) {
  if (n == null) return;
  const r = await h.stat(t);
  if (r.size > n)
    throw new Error(`File too large (${r.size} bytes, max ${n}): ${e}`);
}
function v(t, e) {
  return u.isAbsolute(e) ? e : u.resolve(t.cwd, e);
}
function L(t) {
  if (t?.aborted) throw C("Exec aborted");
}
function C(t) {
  const e = new Error(t);
  return ((e.name = "AbortError"), e);
}
function oe(t, e, n) {
  return e !== null
    ? e
    : t !== null
      ? t
      : 128 + ((n ? we.constants.signals[n] : void 0) ?? 9);
}
function H(t) {
  (t.detachAbort?.(), P.killSandboxHelperTree(t.child), t.cleanup?.());
}
function ee(t) {
  t && t.flush();
}
async function Le(t, e) {
  if (!t) return null;
  const n = u.isAbsolute(t) ? t : u.resolve(e, t);
  (await h.mkdir(u.dirname(n), { recursive: !0 }),
    await h.writeFile(n, "", "utf8"));
  let r = Promise.resolve(),
    i = !1;
  return {
    get result() {
      return i ? { status: "failed" } : { status: "saved", path: t };
    },
    append(o) {
      o.length !== 0 &&
        (r = r
          .then(() => h.appendFile(n, o, "utf8"))
          .catch((s) => {
            i ||
              ((i = !0),
              R.sandboxLogger.warn(
                "[DirectHostTransport] stream output file append failed",
                {
                  outputPath: n,
                  error: s instanceof Error ? s.message : String(s),
                },
              ));
          }));
    },
    async flush() {
      await r;
    },
  };
}
function _e(t) {
  return t.isDirectory()
    ? "directory"
    : t.isFile()
      ? "file"
      : t.isSymbolicLink()
        ? "symlink"
        : "other";
}
function Re(t, e) {
  return t.name < e.name ? -1 : t.name > e.name ? 1 : 0;
}
function ae(t, e) {
  return t.name < e.name ? -1 : t.name > e.name ? 1 : 0;
}
async function te(t, e) {
  if (e <= 0) return [];
  const n = [t],
    r = [t];
  for (; r.length > 0 && n.length < e; ) {
    const i = r.shift();
    if (!i) break;
    let o;
    try {
      o = await h.readdir(i, { withFileTypes: !0 });
    } catch {
      continue;
    }
    o.sort(ae);
    for (const s of o) {
      if (n.length >= e) break;
      const a = u.join(i, s.name);
      (n.push(a), s.isDirectory() && r.push(a));
    }
  }
  return n.slice(0, e).sort();
}
async function Me() {
  const t = ne.getSandboxToolingManager();
  if (!t) return null;
  try {
    return await t.ensureBundledToolAvailable("rg");
  } catch {
    return null;
  }
}
function Ce(t) {
  return t.message.includes("ENOENT") || t.message.includes("spawn");
}
async function Ae(t, e, n) {
  const r = n.glob ? ke(n.glob) : null,
    i = [],
    o = await He(t, r);
  for (const s of o) {
    let a;
    try {
      a = await h.readFile(s);
    } catch {
      continue;
    }
    if ((re.isText(u.basename(s), a) ?? !1) === !1) continue;
    const l = a.toString("utf8").split(`
`);
    for (let c = 0; c < l.length; c++) {
      const d = qe(l[c]),
        f = Oe(d, e);
      f !== null && i.push({ path: s, line: c + 1, content: d, column: f });
    }
  }
  return i;
}
function Oe(t, e) {
  const n = t.indexOf(e);
  return n === -1 ? null : n + 1;
}
function qe(t) {
  return t.endsWith("\r") ? t.slice(0, -1) : t;
}
async function He(t, e) {
  const n = [],
    r = [t];
  for (; r.length > 0; ) {
    const i = r.shift();
    if (!i) break;
    let o;
    try {
      o = await h.readdir(i, { withFileTypes: !0 });
    } catch {
      continue;
    }
    o.sort(ae);
    for (const s of o) {
      const a = u.join(i, s.name);
      if (s.isDirectory()) {
        r.push(a);
        continue;
      }
      if (!s.isFile()) continue;
      const l = le(u.relative(t, a));
      (e && !e(l, s.name)) || n.push(a);
    }
  }
  return n;
}
function ke(t) {
  const e = le(t),
    n = Ie(e),
    r = !e.includes("/");
  return (i, o) => !!(n.test(i) || (r && n.test(o)));
}
function Ie(t) {
  let e = "^";
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (r === "*") {
      if (t[n + 1] === "*") {
        if (t[n + 2] === "/") {
          ((e += "(?:.*/)?"), (n += 2));
          continue;
        }
        ((e += ".*"), n++);
        continue;
      }
      e += "[^/]*";
      continue;
    }
    if (r === "?") {
      e += "[^/]";
      continue;
    }
    e += Ne(r);
  }
  return ((e += "$"), new RegExp(e));
}
function Ne(t) {
  return /[-/\\^$+?.()|[\]{}]/.test(t) ? `\\${t}` : t;
}
function le(t) {
  return t.replace(/\\/g, "/");
}
const je = Object.freeze(
  Object.defineProperty(
    { __proto__: null, DirectHostTransport: se, resolveTerminalExitCode: oe },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
exports.DirectHostTransport = se;
exports.DirectHostTransport$1 = je;
exports.applyBundledToolingEnv = ie;
exports.windowsDirectHostToolingDirs = ye;
