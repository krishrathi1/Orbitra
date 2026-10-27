"use strict";
(function () {
  try {
    var o =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    o.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var o =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new o.Error().stack;
    e &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[e] = "9d22e0c0-523a-4a5c-8af4-389a3ecf574d"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-9d22e0c0-523a-4a5c-8af4-389a3ecf574d"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const te = require("node:crypto"),
  H = require("node:fs/promises"),
  C = require("node:path"),
  d = require("../main-app.js"),
  Se = require("./errors-DsbnElf-.js"),
  xe = require("./savedCertificateBlocklist-BUtmL3xA.js");
require("node:child_process");
require("electron");
require("fs");
require("path");
require("url");
require("stream");
require("zlib");
const Re = require("istextorbinary"),
  D = require("./sandboxRuntimeSetupStatus-CmP0UsOY.js"),
  M = require("./sandbox-tooling-singleton-DYdbpKPS.js"),
  j = require("./windowsSandboxSetupSpec-Ib0cbc2S.js"),
  A = require("./sandbox-helper-process-CQ6JyI_j.js");
require("os");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
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
require("better-sqlite3");
require("electron-updater");
require("@reflect/auth/last-login-method");
require("@reflect/auth/oauth-state");
require("@reflect/auth/session-identity");
require("./settled-read-r0Yf0ORp.js");
require("module");
require("./fs-native-KvxiM8hl.js");
require("node:module");
require("node:tls");
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
const $ = new Map();
class Ee {
  constructor(e) {
    this.runSetupRefresh = e;
  }
  sessions = new Map();
  request(e, t) {
    this.requestState(e, t);
  }
  async ensure(e, t) {
    const r = this.sessions.get(e) ?? this.requestState(e, t);
    (r.completedVersion < r.desiredVersion &&
      !r.running &&
      this.startDrain(e, r),
      await r.running);
  }
  async wait(e) {
    await this.sessions.get(e)?.running;
  }
  remove(e) {
    this.sessions.delete(e);
  }
  requestState(e, t) {
    const i = this.sessions.get(e) ?? {
      desiredSpec: t,
      desiredVersion: 0,
      completedVersion: 0,
      running: null,
    };
    return (
      (i.desiredSpec = t),
      (i.desiredVersion += 1),
      this.sessions.set(e, i),
      this.startDrain(e, i),
      i
    );
  }
  startDrain(e, t) {
    t.running ||
      ((t.running = this.drain(e, t).finally(() => {
        t.running = null;
      })),
      t.running.catch(() => {}));
  }
  async drain(e, t) {
    for (; t.completedVersion < t.desiredVersion; ) {
      const r = t.desiredSpec.codexHome;
      await Pe(r, async () => {
        const i = t.desiredSpec;
        if (Z(i.codexHome) !== Z(r)) return;
        const n = t.desiredVersion;
        (await this.runSetupRefresh(e, i), (t.completedVersion = n));
      });
    }
  }
}
function Pe(o, e) {
  const t = Z(o),
    i = ($.get(t) ?? Promise.resolve()).catch(() => {}).then(e),
    n = i.then(
      () => {},
      () => {},
    );
  return (
    $.set(t, n),
    n.finally(() => {
      $.get(t) === n && $.delete(t);
    }),
    i
  );
}
function Z(o) {
  const e = o.replace(/\\/g, "/").replace(/\/+$/, "");
  return process.platform === "win32" || /^[a-zA-Z]:\//.test(e)
    ? e.toLowerCase()
    : e;
}
const qe = `'use strict'
const fs = require('node:fs')
const fsp = require('node:fs/promises')

const req = JSON.parse(process.argv[process.argv.length - 1])

function requireNonNegativeInteger(value, name) {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new Error(name + ' must be a non-negative integer')
  }
}

function writeChunk(data) {
  return new Promise(function (resolve, reject) {
    process.stdout.write(data, function (error) {
      if (error) reject(error)
      else resolve()
    })
  })
}

async function main() {
  requireNonNegativeInteger(req.expectedSizeBytes, 'expectedSizeBytes')
  if (!Number.isSafeInteger(req.chunkSizeBytes) || req.chunkSizeBytes <= 0) {
    throw new Error('chunkSizeBytes must be a positive integer')
  }
  if (req.maxSizeBytes !== undefined) {
    requireNonNegativeInteger(req.maxSizeBytes, 'maxSizeBytes')
  }
  if (req.expectedModifiedAtMs !== undefined && !Number.isFinite(req.expectedModifiedAtMs)) {
    throw new Error('expectedModifiedAtMs must be finite')
  }

  const beforeOpen = await fsp.lstat(req.path)
  if (beforeOpen.isSymbolicLink()) {
    const error = new Error('Upload source must not be a symbolic link')
    error.code = 'ELOOP'
    throw error
  }

  const noFollow = fs.constants.O_NOFOLLOW || 0
  const fileHandle = await fsp.open(req.path, fs.constants.O_RDONLY | noFollow)
  try {
    const info = await fileHandle.stat()
    if (!info.isFile()) {
      const error = new Error('Upload source must be a regular file')
      error.code = 'EISDIR'
      throw error
    }
    if (req.maxSizeBytes !== undefined && info.size > req.maxSizeBytes) {
      const error = new Error(
        'File too large (' + info.size + ' bytes, max ' + req.maxSizeBytes + ')'
      )
      error.code = 'EFBIG'
      throw error
    }
    if (info.size !== req.expectedSizeBytes) {
      throw new Error('Upload source size changed before streaming')
    }
    if (req.expectedModifiedAtMs !== undefined && info.mtimeMs !== req.expectedModifiedAtMs) {
      throw new Error('Upload source changed before streaming')
    }

    let position = 0
    const buffer = Buffer.allocUnsafe(req.chunkSizeBytes)
    while (position < info.size) {
      const requestedBytes = Math.min(buffer.byteLength, info.size - position)
      let bytesRead = 0
      while (bytesRead < requestedBytes) {
        const result = await fileHandle.read(
          buffer,
          bytesRead,
          requestedBytes - bytesRead,
          position + bytesRead
        )
        if (result.bytesRead === 0) break
        bytesRead += result.bytesRead
      }
      if (bytesRead !== requestedBytes) {
        throw new Error('Upload source became shorter while streaming')
      }
      await writeChunk(buffer.subarray(0, bytesRead))
      position += bytesRead
    }

    const trailingByte = Buffer.allocUnsafe(1)
    const trailingRead = await fileHandle.read(trailingByte, 0, 1, info.size)
    const finalInfo = await fileHandle.stat()
    const identityChanged =
      trailingRead.bytesRead !== 0 ||
      finalInfo.dev !== info.dev ||
      finalInfo.ino !== info.ino ||
      finalInfo.size !== info.size ||
      finalInfo.mtimeMs !== info.mtimeMs
    if (identityChanged) throw new Error('Upload source changed while streaming')
  } finally {
    await fileHandle.close()
  }
}

function fail(error) {
  process.exitCode = 1
  const code = error && error.code ? String(error.code) : ''
  const message = error && error.message ? error.message : String(error)
  process.stderr.write(JSON.stringify({ code: code, message: message }))
}

main().catch(fail)
`,
  ke = `'use strict'
const fs = require('node:fs')
const path = require('node:path')

const req = JSON.parse(process.argv[process.argv.length - 1])

function direntType(d) {
  if (d.isDirectory()) return 'directory'
  if (d.isFile()) return 'file'
  if (d.isSymbolicLink()) return 'symlink'
  return 'other'
}

function byName(a, b) {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
}

function listDir(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true })
  const entries = dirents.map(function (d) {
    let size = 0
    let modifiedAtMs
    const type = direntType(d)
    if (type === 'file') {
      try {
        const info = fs.statSync(path.join(dir, d.name))
        size = info.size
        modifiedAtMs = info.mtimeMs
      } catch (e) {
        size = 0
      }
    }
    const entry = { name: d.name, type: type, size: size }
    if (modifiedAtMs !== undefined) entry.modifiedAtMs = modifiedAtMs
    return entry
  })
  entries.sort(byName)
  return entries
}

function fileTree(root, maxEntries) {
  const out = [root]
  const queue = [root]
  while (queue.length > 0 && out.length < maxEntries) {
    const dir = queue.shift()
    let kids
    try { kids = fs.readdirSync(dir, { withFileTypes: true }) } catch (e) { continue }
    kids.sort(byName)
    for (let i = 0; i < kids.length; i++) {
      if (out.length >= maxEntries) break
      const full = path.join(dir, kids[i].name)
      out.push(full)
      // Do not descend into symlinked directories — matches \`find\` default.
      if (kids[i].isDirectory()) queue.push(full)
    }
  }
  const limited = out.slice(0, maxEntries)
  limited.sort()
  return limited
}

function fileTrees(requests) {
  const result = {}
  for (let i = 0; i < requests.length; i++) {
    const request = requests[i]
    result[request.path] = fileTree(request.path, request.maxEntries)
  }
  return result
}

function readPaths(paths, maxSizeBytes) {
  // Binary-safe batch read: base64 per path, or the filesystem error when the
  // sandbox denies/misses it. Text decoding, line slicing, and MIME detection
  // are the transport's job (its npm deps are not available to a bare node -e
  // payload).
  const result = {}
  for (let i = 0; i < paths.length; i++) {
    try {
      if (typeof maxSizeBytes === 'number') {
        const stat = fs.statSync(paths[i])
        if (stat.size > maxSizeBytes) {
          result[paths[i]] = {
            ok: false,
            code: 'EFBIG',
            message:
              'File too large (' +
              stat.size +
              ' bytes, max ' +
              maxSizeBytes +
              '): ' +
              paths[i]
          }
          continue
        }
      }
      result[paths[i]] = { ok: true, data: fs.readFileSync(paths[i]).toString('base64') }
    } catch (e) {
      result[paths[i]] = {
        ok: false,
        code: e && e.code ? e.code : '',
        message: e && e.message ? e.message : String(e)
      }
    }
  }
  return result
}

// Why writes transiently fail on Windows, and how we recover:
//
//   (a) Filter drivers (Defender, the search indexer) briefly hold a
//       freshly-created file — a time-based backoff rides that out.
//   (b) Cross-principal ACL race: the synced-fs engine writes/replaces objects
//       in the same tree as the MAIN user. A file it just created can carry a
//       DACL that lacks the capability SID in THIS sandbox's restricted token
//       (the inheritable grant hasn't reached it, or inheritance was broken by
//       an atomic rename from outside the tree). Opening that existing file for
//       write then fails EPERM/EACCES no matter how long we wait, because the
//       file's own ACL — not a transient lock — is the problem.
//
// For (a) we back off and retry. For (b), on the first transient failure we
// delete the offending EXISTING file (the parent grants delete-child to the
// same capability that lets us create files there) so the subsequent write
// recreates it fresh, inheriting the parent's CURRENT inheritable capabilities.
// Sleep is synchronous (Atomics.wait) so this stays a single-shot program with
// no event loop. tries/retriedCodes/recreated are reported back so the
// transport can log the rate and how often the stale-DACL recovery fired.
const WRITE_RETRY_DELAYS_MS = [20, 40, 80, 160, 320, 640, 1280]

function isTransientWriteError(code) {
  return code === 'EPERM' || code === 'EACCES' || code === 'EBUSY'
}

function sleepSync(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
}

// Best-effort: clear a stale-DACL existing file so the next write recreates it
// with fresh inherited ACLs. Swallows failures so the caller still retries the
// plain write (e.g. when the failure was on mkdir, not an existing file).
function tryClearStaleFile(dest) {
  try {
    if (fs.existsSync(dest)) {
      fs.rmSync(dest, { force: true })
      return true
    }
  } catch (e) {}
  return false
}

function writeOneWithRetry(dest, bytes) {
  let tries = 0
  const retriedCodes = []
  let recreated = false
  for (;;) {
    try {
      fs.mkdirSync(path.dirname(dest), { recursive: true })
      fs.writeFileSync(dest, bytes)
      tries++
      return { dest: dest, tries: tries, retriedCodes: retriedCodes, recreated: recreated }
    } catch (e) {
      tries++
      const code = e && e.code ? e.code : ''
      if (isTransientWriteError(code) && retriedCodes.length < WRITE_RETRY_DELAYS_MS.length) {
        // First transient hit: if a stale-DACL file is blocking us, drop it so
        // the recreate inherits current capabilities (case (b) above).
        if (!recreated) recreated = tryClearStaleFile(dest)
        sleepSync(WRITE_RETRY_DELAYS_MS[retriedCodes.length])
        retriedCodes.push(code)
        continue
      }
      throw e
    }
  }
}

function writeManyFromStdin(files, allBytes) {
  const writes = []
  let offset = 0
  for (let i = 0; i < files.length; i++) {
    const length = files[i].length
    const slice = allBytes.subarray(offset, offset + length)
    offset += length
    writes.push(writeOneWithRetry(files[i].dest, slice))
  }
  return writes
}

try {
  let output
  if (req.op === 'list') {
    output = listDir(req.path)
  } else if (req.op === 'tree') {
    output = fileTree(req.path, req.maxEntries)
  } else if (req.op === 'trees') {
    output = fileTrees(req.requests)
  } else if (req.op === 'exists') {
    output = { exists: fs.existsSync(req.path) }
  } else if (req.op === 'delete') {
    // force: true → removing a missing path is a no-op, matching \`rm -f\`.
    fs.rmSync(req.path, { recursive: !!req.recursive, force: true })
    output = { ok: true }
  } else if (req.op === 'read') {
    output = readPaths(req.paths, req.maxSizeBytes)
  } else if (req.op === 'write') {
    // This helper is a short-lived sandboxed child process, not Electron's main
    // thread. Sync I/O keeps stdin handling deterministic and exits immediately.
    // The payload arrives streamed on stdin (fd 0). The write to the
    // agent-chosen \`dest\` is what the OS sandbox enforces. writeOneWithRetry
    // mkdir -p's the parent (callers don't pre-create nested dirs) and rides out
    // transient Windows write locks.
    const bytes = fs.readFileSync(0)
    output = { ok: true, writes: [writeOneWithRetry(req.dest, bytes)] }
  } else if (req.op === 'writeMany') {
    // Batched write: one sandboxed spawn writes every file, collapsing N
    // ACL-grant / Defender-scan windows into one. The JSON request lists each
    // file's \`dest\` and byte \`length\`; the concatenated payloads arrive on
    // stdin in the same order and are sliced apart by length (so embedded
    // newlines/binary survive — we never split on a delimiter).
    const allBytes = fs.readFileSync(0)
    output = { ok: true, writes: writeManyFromStdin(req.files, allBytes) }
  } else {
    throw new Error('unknown fs op: ' + req.op)
  }
  process.stdout.write(JSON.stringify(output))
} catch (e) {
  // Prefix ENOENT/EISDIR so the transport can map them to clean errors.
  const code = e && e.code ? e.code : ''
  let msg = e && e.message ? e.message : String(e)
  if (code === 'ENOENT') msg = 'file_not_found: ' + msg
  else if (code === 'EISDIR') msg = 'is_directory: ' + msg
  process.stderr.write(msg)
  process.exit(1)
}
`,
  _ = 1e3,
  pe = "__windows-base-setup__",
  fe = 3e5,
  Ce = 5e3;
function Te(o, e) {
  return o === pe
    ? "base"
    : e.previousReadRoots?.length || e.previousWriteRoots?.length
      ? "policy-reconcile"
      : "policy-refresh";
}
const Fe = 64 * 1024,
  Ae = 256 * 1024;
function V(o) {
  return new Promise((e) => {
    const t = (i) => {
        (o.removeListener("exit", r), e({ kind: "error", error: i }));
      },
      r = (i, n) => {
        (o.removeListener("error", t), e({ kind: "exit", code: i, signal: n }));
      };
    (o.once("error", t), o.once("exit", r));
  });
}
function K(o) {
  if (!Number.isInteger(o.pid) || o.pid == null || o.pid <= 0)
    throw new Error("sandbox helper did not expose a process id");
  return o.pid;
}
function Y() {
  if (process.platform !== "win32") return {};
  const o = {
      SystemRoot: process.env.SystemRoot ?? "C:\\Windows",
      windir: process.env.windir ?? process.env.SystemRoot ?? "C:\\Windows",
      ComSpec: process.env.ComSpec ?? "C:\\Windows\\System32\\cmd.exe",
    },
    e = process.env.PATH ?? process.env.Path;
  return ((o.PATH = e ?? "C:\\Windows\\System32;C:\\Windows"), o);
}
function Le(o) {
  switch (o.op) {
    case "read":
      return o.paths[0] ?? null;
    case "write":
      return o.dest;
    case "writeMany":
      return o.files[0]?.dest ?? null;
    case "trees":
      return o.requests[0]?.path ?? null;
    case "list":
    case "tree":
    case "exists":
    case "delete":
      return o.path;
  }
}
function Me(o, e) {
  const t =
    e
      .trim()
      .split(
        `
`,
      )
      .pop() ?? "";
  try {
    const i = JSON.parse(t);
    if (i.message)
      return i.code ? he(o, i.code, i.message) : new Error(i.message);
  } catch {}
  const r = t.slice(0, 300);
  return new Error(
    r ? `Native file stream failed: ${r}` : "Native file stream failed",
  );
}
function he(o, e, t) {
  if (e === "ENOENT")
    return new Error(`file_not_found: ${o}
${t}`);
  if (e === "EISDIR")
    return new Error(`is_directory: ${o}
${t}`);
  if (e === "EACCES" || e === "EPERM")
    return new Error(`permission_denied: ${o}
${t}`);
  if (e === "EFBIG") return new Error(t);
  const r = e || "unknown";
  return new Error(`file_read_failed:${r}: ${o}
${t}`);
}
function re(o, e) {
  const t = o[e];
  if (!t) throw new Error(`file_not_found: ${e}`);
  if (t.ok) return t.data;
  throw he(e, t.code, t.message);
}
function We(o, e) {
  const t = Le(o);
  if (!t || !e)
    return {
      targetPath: t,
      resolvedTargetPath: null,
      coveredByWritableRoot: null,
      coveringWritableRoot: null,
    };
  const r = C.isAbsolute(t) ? t : C.resolve(e.cwd, t),
    i = e.policy.writableRoots.find((n) => we(r, n)) ?? null;
  return {
    targetPath: t,
    resolvedTargetPath: r,
    coveredByWritableRoot: i !== null,
    coveringWritableRoot: i,
  };
}
function oe(o, e, t) {
  if (!o || !e || !t) return null;
  const { toAgentPath: r } = Se.getAgentRootMask();
  return { requested: r(o), resolved: r(e), workingDirectory: r(t) };
}
function Ne(o, e) {
  if (!e || !d.formatSandboxPathResolution(e)) return o;
  const t = o instanceof Error ? o.message : String(o);
  return d.sandboxPathError(t, e);
}
function we(o, e) {
  const t = ie(o),
    r = ie(e);
  if (t === r) return !0;
  const i = r.endsWith("/") ? r : `${r}/`;
  return t.startsWith(i);
}
function ie(o) {
  const e = C.normalize(o).replace(/\\/g, "/").replace(/\/+$/, "");
  return process.platform === "win32" || /^[a-zA-Z]:\//.test(e)
    ? e.toLowerCase()
    : e;
}
function Be(o) {
  return o === null ? "unknown" : o ? "covered" : "not-covered";
}
function _e(o, e, t) {
  const r = C.isAbsolute(e) ? e : C.resolve(t.cwd, e),
    i = C.isAbsolute(o) ? o : C.resolve(r, o);
  if (!t.policy.writableRoots.find((s) => we(i, s)))
    throw new Error(`outputPath is outside writable sandbox roots: ${o}`);
  return i;
}
async function He(o, e, t, r) {
  if (!e) return null;
  const i = _e(e, t, r);
  (await H.mkdir(C.dirname(i), { recursive: !0 }),
    await H.writeFile(i, "", "utf8"));
  let n = Promise.resolve(),
    s = !1;
  return {
    get result() {
      return s ? { status: "failed" } : { status: "saved", path: e };
    },
    append(a) {
      a.length !== 0 &&
        (n = n
          .then(() => H.appendFile(i, a, "utf8"))
          .catch((l) => {
            s ||
              ((s = !0),
              d.sandboxLogger.warn(
                "[NativeSandboxTransport] bash output file append failed",
                {
                  sessionId: o,
                  outputPath: i,
                  error: l instanceof Error ? l.message : String(l),
                },
              ));
          }));
    },
    async flush() {
      await n;
    },
  };
}
class De {
  constructor(e, t = fe) {
    ((this.helperPath = e), (this.setupRefreshTimeoutMs = t));
  }
  activeSignal = null;
  retired = !1;
  defaultWindowsSandboxLevel =
    process.platform === "win32" ? "elevated" : void 0;
  sessions = new Map();
  liveProcs = new Map();
  liveExitListeners = new Set();
  setupRefreshCoordinator = new Ee((e, t) => this.runSetupRefreshPrewarm(e, t));
  spawnHelper(e = []) {
    const t = se(this.helperPath) === "node-script",
      r = t ? process.execPath : this.helperPath,
      i = t ? [this.helperPath, ...e] : e,
      n = M.getSandboxToolingManager()?.getSandboxRootPath(),
      s = process.env.ORBITRA_EVAL_RUN_ID
        ? d.filterSandboxEnv(process.env)
        : process.env,
      a = n ? { ...s, [d.WINDOWS_SANDBOX_HOME_ENV]: n } : s,
      l = A.spawnSandboxHelper(r, i, { env: a });
    return (
      l.stdin?.on("error", (c) => {
        d.sandboxLogger.warn("[NativeSandboxTransport] helper stdin error", {
          error: c.message,
          code: c.code,
        });
      }),
      l
    );
  }
  retire() {
    this.retired = !0;
  }
  escalateIfWindowsRuntimeFailure(e) {
    if (this.retired) return;
    const t = d.getSandboxErrorCode(e);
    d.isWindowsSandboxEscalationCode(t) && ae(t);
  }
  scheduleSetupRefreshPrewarm(e, t) {
    if (this.retired || !O(t)) return;
    let r;
    try {
      r = this.buildSetupRefreshSpec(t);
    } catch (i) {
      d.sandboxLogger.warn(
        "[NativeSandboxTransport] setup refresh prewarm could not build spec",
        { sessionId: e, error: i instanceof Error ? i.message : String(i) },
      );
      return;
    }
    this.setupRefreshCoordinator.request(e, r);
  }
  async waitForSetupRefreshPrewarm(e) {
    await this.setupRefreshCoordinator.wait(e);
  }
  async prewarmWindowsBaseSetup() {
    if (this.defaultWindowsSandboxLevel !== "elevated") return;
    const e = M.getSandboxToolingManager();
    if (!e)
      throw new d.SandboxError(
        "native-tooling-unavailable",
        "Windows sandbox setup requires staged tooling",
      );
    const t = e.getSandboxRootPath(),
      r = e.getSandboxBinDir(),
      i = e.getPkgCacheDir();
    await Promise.all([
      H.mkdir(t, { recursive: !0 }),
      H.mkdir(r, { recursive: !0 }),
      H.mkdir(i, { recursive: !0 }),
    ]);
    const n = j.buildElevatedSetupSpec({
      codexHome: t,
      policyCwd: t,
      readRoots: [r, i],
      writeRoots: [i],
    });
    await this.setupRefreshCoordinator.ensure(pe, n);
  }
  async ensureSetupRefreshReady(e) {
    const t = this.sessions.get(e);
    if (!(!t || !O(t)))
      try {
        const r = this.buildSetupRefreshSpec(t);
        await this.setupRefreshCoordinator.ensure(e, r);
      } catch (r) {
        throw (
          r instanceof Error && this.escalateIfWindowsRuntimeFailure(r),
          r instanceof d.SandboxError
            ? new d.SandboxError(r.code, r.message, {
                ...r.diagnostics,
                executionState: "not-started",
              })
            : r
        );
      }
  }
  buildSetupRefreshSpec(e) {
    if (e.policy.requiresExactReadIsolation)
      throw new d.SandboxError(
        "windows-runtime-prep-failed",
        "This policy requires exact readable-root isolation, which Windows compatibility sandbox mode cannot provide",
      );
    const t = M.getSandboxToolingManager();
    if (!t)
      throw new d.SandboxError(
        "native-tooling-unavailable",
        "Windows sandbox setup requires staged tooling",
      );
    const r = t.getSandboxRootPath(),
      i = W([
        ...e.policy.readableRoots,
        ...e.policy.writableRoots,
        t.getSandboxBinDir(),
        t.getPkgCacheDir(),
      ]),
      n = W([...e.policy.writableRoots, t.getPkgCacheDir()]),
      s = e.previousPolicyRoots
        ? W([
            ...e.previousPolicyRoots.readableRoots,
            ...e.previousPolicyRoots.writableRoots,
          ])
        : void 0;
    try {
      return j.buildElevatedSetupSpec({
        codexHome: r,
        policyCwd: e.cwd,
        readRoots: i,
        writeRoots: n,
        denyReadPaths: W([
          ...e.policy.deniedPaths,
          ...(e.policy.denyReadPaths ?? []),
        ]),
        denyWritePaths: e.policy.deniedPaths,
        previousReadRoots: s,
        previousWriteRoots: e.previousPolicyRoots?.writableRoots,
      });
    } catch (a) {
      throw new d.SandboxError(
        "windows-runtime-prep-failed",
        `Windows sandbox setup spec could not be built: ${a instanceof Error ? a.message : String(a)}`,
      );
    }
  }
  async runSetupRefreshPrewarm(e, t) {
    const r = D.beginSandboxRuntimeSetup("Setting up sandbox access...");
    try {
      await this.spawnSetupRefresh(e, {
        ...t,
        readRoots: await this.includeWindowsRunnerRoot(t.readRoots),
      });
    } finally {
      r();
    }
  }
  async spawnSetupRefresh(e, t) {
    const r = te.randomUUID(),
      i = j.setupRequestPolicyFingerprint(t),
      n = Te(e, t),
      s = {
        ...t,
        setupRunId: r,
        setupPolicyFingerprint: i,
        setupPayloadCategory: n,
      },
      a = Date.now(),
      l = this.setupRefreshTimeoutMs,
      c = this.spawnHelper(["setup-refresh"]);
    let f = "",
      p = "";
    (c.stdout?.on("data", (w) => {
      ((f += w.toString()), f.length > _ && (f = f.slice(-_)));
    }),
      c.stderr?.on("data", (w) => {
        ((p += w.toString()), p.length > _ && (p = p.slice(-_)));
      }));
    try {
      c.stdin?.end(`${JSON.stringify(s)}
`);
      const w = await new Promise((m, R) => {
        let b = !1,
          T = null;
        const k = setTimeout(() => {
          ((b = !0),
            d.sandboxLogger.error(
              "[NativeSandboxTransport] setup refresh timed out",
              {
                sessionId: e,
                setupRunId: r,
                setupPolicyFingerprint: i,
                setupPayloadCategory: n,
                timeoutMs: l,
              },
            ),
            A.killSandboxHelperTree(c),
            (T = setTimeout(() => {
              R(
                new d.SandboxError(
                  "windows-runtime-prep-failed",
                  `Windows sandbox setup refresh exceeded ${l}ms and did not exit during teardown`,
                  {
                    setupRunId: r,
                    setupPolicyFingerprint: i,
                    setupPayloadCategory: n,
                    setupCacheResult: "timeout",
                    setupTimeoutMs: l,
                    setupElapsedMs: Date.now() - a,
                  },
                ),
              );
            }, Ce)));
        }, l);
        k.unref?.();
        const h = () => {
          (clearTimeout(k), T && clearTimeout(T));
        };
        (c.once("error", (x) => {
          (h(), R(x));
        }),
          c.once("close", (x, P) => {
            if ((h(), b)) {
              R(
                new d.SandboxError(
                  "windows-runtime-prep-failed",
                  `Windows sandbox setup refresh exceeded ${l}ms`,
                  {
                    setupRunId: r,
                    setupPolicyFingerprint: i,
                    setupPayloadCategory: n,
                    setupCacheResult: "timeout",
                    setupTimeoutMs: l,
                    setupElapsedMs: Date.now() - a,
                  },
                ),
              );
              return;
            }
            m({ code: x, signal: P });
          }));
      });
      if (w.code === 0) {
        d.sandboxLogger.info(
          "[NativeSandboxTransport] setup refresh completed",
          {
            sessionId: e,
            setupRunId: r,
            setupPolicyFingerprint: i,
            setupPayloadCategory: n,
            setupTotalMs: Date.now() - a,
          },
        );
        return;
      }
      const E = Ke(f);
      E?.code !== void 0 &&
        d.isUnrecoverableWindowsSetupCode(E.code) &&
        ae("windows-native-setup-required");
      const S = [E?.message, p.trim(), f.trim()].filter((m) => !!m).join(`
`),
        g = new d.SandboxError(
          d.classifyHelperFailureText(S) ?? "windows-runtime-prep-failed",
          `Windows sandbox setup refresh failed (exit=${String(w.code)}, signal=${String(w.signal)})${
            S
              ? `
${S}`
              : ""
          }`,
          {
            setupRunId: r,
            setupPolicyFingerprint: i,
            setupPayloadCategory: n,
            setupCacheResult: "failed",
            setupElapsedMs: Date.now() - a,
          },
        );
      throw (
        d.sandboxLogger.warn(
          "[NativeSandboxTransport] setup refresh prewarm failed",
          {
            sessionId: e,
            exitCode: w.code,
            signal: w.signal,
            setupRunId: r,
            setupPolicyFingerprint: i,
            setupPayloadCategory: n,
            setupTotalMs: Date.now() - a,
            stdout: f.trim(),
            stderr: p.trim(),
          },
        ),
        g
      );
    } catch (w) {
      throw w instanceof d.SandboxError
        ? w
        : (d.sandboxLogger.warn(
            "[NativeSandboxTransport] setup refresh prewarm errored",
            {
              sessionId: e,
              error: w instanceof Error ? w.message : String(w),
              stdout: f.trim(),
              stderr: p.trim(),
            },
          ),
          new d.SandboxError(
            "windows-runtime-prep-failed",
            `Windows sandbox setup refresh could not run: ${w instanceof Error ? w.message : String(w)}`,
            {
              setupRunId: r,
              setupPolicyFingerprint: i,
              setupPayloadCategory: n,
              setupCacheResult: "spawn-error",
              setupElapsedMs: Date.now() - a,
            },
          ));
    }
  }
  registerSession(e, t) {
    const r = this.mergeWindowsLevel(t);
    (this.sessions.set(e, r), this.scheduleSetupRefreshPrewarm(e, r));
  }
  updateSession(e, t) {
    const r = this.sessions.get(e);
    if (!r) throw new Error(`updateSession: unknown session "${e}"`);
    const i = this.mergeWindowsLevel(t),
      n = ge(r.policy, i.policy),
      s = O(r) || O(i),
      a =
        !s || n.kind === "none"
          ? r.previousPolicyRoots
          : ze(r.previousPolicyRoots, r.policy),
      l = a ? { ...i, previousPolicyRoots: a } : i;
    (n.kind !== "none" && s && this.killLiveProcessesForSession(e),
      this.sessions.set(e, l),
      n.kind !== "none" && s && this.scheduleSetupRefreshPrewarm(e, l));
  }
  getSessionConfig(e) {
    return this.sessions.get(e);
  }
  async withClaimedPreviousPolicyRoots(e, t) {
    await this.ensureSetupRefreshReady(e);
    const r = this.claimPreviousPolicyRoots(e);
    try {
      return await t(r);
    } catch (i) {
      throw (r && this.restorePreviousPolicyRoots(e, r), i);
    }
  }
  claimPreviousPolicyRoots(e) {
    const t = this.sessions.get(e),
      r = t?.previousPolicyRoots;
    if (!t || !r) return;
    const i = { ...t };
    return (delete i.previousPolicyRoots, this.sessions.set(e, i), $e(r));
  }
  restorePreviousPolicyRoots(e, t) {
    const r = this.sessions.get(e);
    r &&
      this.sessions.set(e, {
        ...r,
        previousPolicyRoots: be(r.previousPolicyRoots, t),
      });
  }
  mergeWindowsLevel(e) {
    return e.windowsSandboxLevel != null ||
      this.defaultWindowsSandboxLevel == null
      ? e
      : { ...e, windowsSandboxLevel: this.defaultWindowsSandboxLevel };
  }
  killLiveProcessesForSession(e) {
    for (const [t, r] of this.liveProcs)
      r.sessionId === e && (U(r), this.liveProcs.delete(t));
  }
  bashToolingFields() {
    const e = M.getSandboxToolingManager();
    return e
      ? {
          sandboxBinDir: e.getSandboxBinDir(),
          pkgCacheDir: e.getPkgCacheDir(),
          bundledPythonPath: e.getEffectivePythonPath(),
        }
      : {};
  }
  async includeWindowsRunnerRoot(e) {
    const t = M.getSandboxToolingManager();
    if (!t) return e;
    const r = await t.ensureRunnerStaged(D.runnerScriptPath());
    return W([...e, C.dirname(r)]);
  }
  async prepareNetworkForExec(e, t, r, i = "user-interactive") {
    return i === "internal-deny"
      ? D.prepareSandboxNetworkPlan({
          baseEnv: t,
          proxyManager: d.getEgressProxyManager(),
          intent: { kind: "internal-deny" },
        })
      : i === "trusted-direct"
        ? D.prepareSandboxNetworkPlan({
            baseEnv: t,
            proxyManager: d.getEgressProxyManager(),
            intent: { kind: "trusted-direct", network: e },
          })
        : D.prepareSandboxNetworkPlan({
            baseEnv: t,
            proxyManager: d.getEgressProxyManager(),
            intent: {
              kind: "user-interactive",
              network: e,
              onApprovalNeeded: r ? (n) => r.onApprovalNeeded(n) : void 0,
            },
          });
  }
  async destroySession(e) {
    for (const [t, r] of this.liveProcs)
      r.sessionId === e && (U(r), this.liveProcs.delete(t));
    (this.sessions.delete(e), this.setupRefreshCoordinator.remove(e));
  }
  async exec(e, t, r) {
    if (!this.sessions.has(e)) throw new Error(`exec: unknown session "${e}"`);
    const i = r?.signal ?? this.activeSignal;
    if (i?.aborted) {
      const s = new Error("Exec aborted");
      throw ((s.name = "AbortError"), s);
    }
    const n = ue(t);
    return await this.withClaimedPreviousPolicyRoots(e, async (s) => {
      const a = this.sessions.get(e);
      if (!a) throw new Error(`exec: unknown session "${e}"`);
      const l = a,
        c = r?.network ?? l.network;
      let f;
      try {
        f = await this.prepareNetworkForExec(
          c,
          { ...Y(), ...l.shellSnapshot?.env, ...l.env },
          r?.networkApproval,
          r?.networkIntent,
        );
      } catch (p) {
        const w = p instanceof Error ? p : new Error(String(p));
        throw (
          await d.captureSandboxFailure(w, {
            area: "native-exec",
            operation: "network-prepare",
            sessionId: e,
            extra: {
              permissionProfile: l.permissionProfile,
              networkKind: c.kind,
            },
          }),
          p
        );
      }
      return this.runOneshot({
        sessionId: e,
        cfg: l,
        argv: n,
        network: c,
        preparedNetwork: f,
        previousPolicyRoots: s,
        options: r,
        signal: i,
      });
    });
  }
  async runOneshot(e) {
    const {
      sessionId: t,
      cfg: r,
      argv: i,
      network: n,
      preparedNetwork: s,
      previousPolicyRoots: a,
      options: l,
      signal: c,
    } = e;
    let f = !1,
      p,
      w,
      E = "",
      S = "",
      g = null,
      m = null,
      R;
    try {
      R = {
        mode: "oneshot",
        argv: i,
        cwd: l?.workdir ?? r.cwd,
        env: s.env,
        policy: G(r)
          ? {
              ...r.policy,
              readableRoots: await this.includeWindowsRunnerRoot(
                r.policy.readableRoots,
              ),
            }
          : r.policy,
        network: s.network,
        permissionProfile: r.permissionProfile,
        timeoutMs: l?.timeoutMs,
        proxyPorts: s.proxyPorts,
        windowsSandboxLevel: r.windowsSandboxLevel,
        forwardStdin: l?.input !== void 0,
        previousReadableRoots: a?.readableRoots,
        previousWritableRoots: a?.writableRoots,
        ...this.bashToolingFields(),
      };
      const b = this.spawnHelper(),
        T = V(b);
      p = b;
      let k = !1;
      ((w = () => {
        ((k = !0), A.killSandboxHelperTree(b));
      }),
        c && c.addEventListener("abort", w, { once: !0 }),
        b.stdout?.setEncoding("utf8"),
        b.stdout?.on("data", (L) => {
          E += L;
        }),
        b.stderr?.setEncoding("utf8"),
        b.stderr?.on("data", (L) => {
          S += L;
        }),
        await s.activate(K(b)));
      const h =
        JSON.stringify(R) +
        `
`;
      l?.input ? (b.stdin?.write(h), b.stdin?.end(l.input)) : b.stdin?.end(h);
      const x = await T;
      if (x.kind === "error") throw x.error;
      if (((g = x.code), (m = x.signal), k || c?.aborted)) {
        const L = new Error("Exec aborted");
        throw ((L.name = "AbortError"), L);
      }
      E.endsWith(`
`) || (await ce(b));
      const P =
        E.trim()
          .split(
            `
`,
          )
          .pop() ?? "";
      if (!P) throw z("helper produced no output", S);
      const q = JSON.parse(P);
      if (q.type === "error")
        throw z(`helper reported error: ${Q(q.message)}`, S, q.message);
      if (!Oe(q)) throw z("helper produced non-oneshot result", S);
      return (
        (f = !0),
        {
          exitCode: q.exitCode,
          stdout: q.stdout ?? "",
          stderr: q.stderr ?? "",
          durationMs: q.durationMs,
          readAccessPending: q.readAccessPending,
        }
      );
    } catch (b) {
      if (!(b instanceof Error && b.name === "AbortError")) {
        const T = b instanceof Error ? b : new Error(String(b)),
          k = R?.cwd ?? l?.workdir ?? r.cwd,
          h = I(E),
          x = I(S),
          P = Ye(E);
        (this.escalateIfWindowsRuntimeFailure(T),
          await d.captureSandboxFailure(T, {
            area: "native-exec",
            operation: "oneshot",
            sessionId: t,
            extra: {
              permissionProfile: r.permissionProfile,
              networkKind: n.kind,
              helperExit: Ge(E, P),
              helperErrorMessagePreview: P === null ? null : Q(P),
              helperExitCode: g,
              helperExitSignal: m,
              helperPathKind: se(this.helperPath),
              sandboxCwdSource:
                l?.workdir === void 0 ? "session" : "exec-options",
              sandboxCwdIsAbsolute: C.isAbsolute(k),
              argv0Kind: Je(i[0]),
              argvLength: i.length,
              helperStdoutBytes: h.bytes,
              helperStderrBytes: x.bytes,
              helperStdoutLineCount: h.lineCount,
              helperStderrLineCount: x.lineCount,
              helperStdoutHadContent: h.hadContent,
              helperStderrHadContent: x.hadContent,
              helperStderrPreview: me(S),
              helperFailureFingerprints: ee(S),
              readableRootCount:
                R?.policy.readableRoots.length ?? r.policy.readableRoots.length,
              writableRootCount:
                R?.policy.writableRoots.length ?? r.policy.writableRoots.length,
              previousReadableRootCount: R?.previousReadableRoots?.length ?? 0,
              previousWritableRootCount: R?.previousWritableRoots?.length ?? 0,
              windowsSandboxLevel:
                R?.windowsSandboxLevel ?? r.windowsSandboxLevel,
              fsHelperOp: l?.diagnostics?.fsHelperOp,
              isFsHelper: l?.diagnostics?.fsHelperOp !== void 0,
            },
          }));
      }
      throw b;
    } finally {
      (w && c?.removeEventListener("abort", w),
        p && !p.killed && !f && A.killSandboxHelperTree(p),
        s.cleanup());
    }
  }
  async execStream(e, t, r, i) {
    if (!this.sessions.has(e))
      throw new Error(`execStream: unknown session "${e}"`);
    const n = r.signal ?? this.activeSignal,
      s = te.randomUUID(),
      a = ue(t);
    await this.ensureSetupRefreshReady(e);
    const l = this.sessions.get(e);
    if (!l) throw new Error(`execStream: unknown session "${e}"`);
    const c = r.workdir ?? l.cwd,
      f = await He(e, r.outputPath, c, l),
      p = r.network ?? l.network,
      w = this.claimPreviousPolicyRoots(e);
    let E = !1;
    const S = () => {
      !w || E || ((E = !0), this.restorePreviousPolicyRoots(e, w));
    };
    let g;
    try {
      g = await this.prepareNetworkForExec(
        p,
        { ...Y(), ...l.shellSnapshot?.env, ...l.env },
        r.networkApproval,
        r.networkIntent,
      );
    } catch (u) {
      const y = u instanceof Error ? u : new Error(String(u));
      throw (
        await d.captureSandboxFailure(y, {
          area: "native-exec-stream",
          operation: "network-prepare",
          sessionId: e,
          extra: {
            permissionProfile: l.permissionProfile,
            networkKind: p.kind,
          },
        }),
        S(),
        u
      );
    }
    let m, R;
    try {
      const u = {
        mode: "stream",
        argv: a,
        cwd: c,
        env: g.env,
        policy: G(l)
          ? {
              ...l.policy,
              readableRoots: await this.includeWindowsRunnerRoot(
                l.policy.readableRoots,
              ),
            }
          : l.policy,
        network: g.network,
        permissionProfile: l.permissionProfile,
        timeoutMs: r.timeoutMs,
        pty: !1,
        proxyPorts: g.proxyPorts,
        windowsSandboxLevel: l.windowsSandboxLevel,
        previousReadableRoots: w?.readableRoots,
        previousWritableRoots: w?.writableRoots,
        ...this.bashToolingFields(),
      };
      ((m = this.spawnHelper()),
        (R = V(m)),
        await g.activate(K(m)),
        m.stdin?.write(
          JSON.stringify(u) +
            `
`,
        ));
    } catch (u) {
      if (
        (m && !m.killed && A.killSandboxHelperTree(m),
        g.cleanup(),
        S(),
        !(u instanceof Error && u.name === "AbortError"))
      ) {
        const y = u instanceof Error ? u : new Error(String(u));
        await d.captureSandboxFailure(y, {
          area: "native-exec-stream",
          operation: "start",
          sessionId: e,
          extra: {
            permissionProfile: l.permissionProfile,
            networkKind: p.kind,
          },
        });
      }
      throw u;
    }
    if (!m || R === void 0) throw new Error("sandbox helper did not start");
    let b = !1;
    const T = () => {
      ((b = !0), A.killSandboxHelperTree(m));
    };
    n && n.addEventListener("abort", T, { once: !0 });
    const k = new A.LiveBuffer({ maxBytes: 10 * 1024 * 1024 }),
      h = { yielded: !1, done: null, helperError: null };
    let x = null;
    const P = R.then((u) => (u.kind === "error" && (x = u.error), u));
    let q = "";
    const L = (u) => {
        const y = u.trim();
        if (!y) return;
        let v;
        try {
          v = JSON.parse(y);
        } catch {
          return;
        }
        if (v.type === "stdout" || v.type === "stderr") {
          const F = { type: v.type, data: v.data ?? "" };
          (k.append(F), f?.append(F.data), h.yielded || i(F.type, F.data));
        } else
          v.type === "done"
            ? (h.done = {
                exitCode: v.exitCode ?? null,
                durationMs: v.durationMs,
                readAccessPending: v.readAccessPending,
              })
            : v.type === "error" &&
              (h.helperError = { message: v.message ?? "" });
      },
      ve = (u) => {
        q += u;
        let y;
        for (
          ;
          (y = q.indexOf(`
`)) !== -1;

        ) {
          const v = q.slice(0, y);
          ((q = q.slice(y + 1)), L(v));
        }
      };
    (m.stdout?.setEncoding("utf8"), m.stdout?.on("data", ve));
    let N = "";
    (m.stderr?.setEncoding("utf8"),
      m.stderr?.on("data", (u) => {
        N.length < Fe && (N += u);
      }));
    let J = null;
    if (
      (r.yieldMs != null &&
        (J = setTimeout(() => {
          h.yielded = !0;
        }, r.yieldMs)),
      await new Promise((u) => {
        let y = !1;
        const v = () => {
          y || ((y = !0), J != null && clearTimeout(J), u());
        };
        P.then(() => {
          (clearInterval(F), clearInterval(B), v());
        });
        const F = setInterval(() => {
            h.yielded && (clearInterval(F), v());
          }, 20),
          B = setInterval(() => {
            h.done && !h.yielded && (clearInterval(B), clearInterval(F), v());
          }, 20);
      }),
      n?.removeEventListener("abort", T),
      x)
    )
      throw (
        g.cleanup(),
        S(),
        await f?.flush(),
        await d.captureSandboxFailure(x, {
          area: "native-exec-stream",
          operation: "child-error",
          sessionId: e,
          extra: {
            permissionProfile: l.permissionProfile,
            networkKind: p.kind,
          },
        }),
        x
      );
    if (b || n?.aborted) {
      (g.cleanup(), S(), await f?.flush());
      const u = new Error("Exec aborted");
      throw ((u.name = "AbortError"), u);
    }
    if (h.yielded && h.done === null) {
      await f?.flush();
      const u = {
        child: m,
        buf: k,
        sessionId: e,
        exited: null,
        cleanup: g.cleanup,
        outputFile: f,
      };
      if ((this.liveProcs.set(s, u), n)) {
        const y = () => {
          (U(u), this.liveProcs.delete(s));
        };
        if (
          (n.addEventListener("abort", y, { once: !0 }),
          (u.detachAbort = () => n.removeEventListener("abort", y)),
          n.aborted)
        ) {
          (y(), g.cleanup(), S());
          const v = new Error("Exec aborted");
          throw ((v.name = "AbortError"), v);
        }
      }
      return (
        P.then((y) => {
          const v = y.kind === "exit" ? y.code : null;
          if (
            (u.exited === null &&
              ((u.exited = { exitCode: v ?? null }),
              s &&
                this.emitLiveSessionExit({
                  sessionId: e,
                  liveSessionId: s,
                  exitCode: u.exited.exitCode,
                })),
            h.done === null && S(),
            h.done === null && !u.killed)
          ) {
            const F = y.kind === "error" ? y.error : le(h.helperError, N);
            let B = "yielded-without-done";
            (y.kind === "error"
              ? (B = "child-error")
              : h.helperError && (B = "helper-error"),
              this.escalateIfWindowsRuntimeFailure(F),
              d.captureSandboxFailure(F, {
                area: "native-exec-stream",
                operation: B,
                sessionId: e,
                extra: {
                  permissionProfile: l.permissionProfile,
                  networkKind: p.kind,
                  exitCode: v ?? null,
                  ...de(N),
                },
              }));
          }
          (u.detachAbort?.(), u.cleanup?.(), f?.flush());
        }),
        {
          exitCode: null,
          stdout: k.stdout,
          outputFile: f?.result,
          stderr: k.stderr,
          liveSessionId: s,
        }
      );
    }
    if ((h.done || S(), !h.done)) {
      await ce(m);
      const u = le(h.helperError, N);
      if (
        (this.escalateIfWindowsRuntimeFailure(u),
        await d.captureSandboxFailure(u, {
          area: "native-exec-stream",
          operation: h.helperError ? "helper-error" : "stream",
          sessionId: e,
          extra: {
            permissionProfile: l.permissionProfile,
            networkKind: p.kind,
            ...de(N),
          },
        }),
        h.helperError)
      )
        throw (g.cleanup(), await f?.flush(), u);
    }
    return (
      g.cleanup(),
      await f?.flush(),
      {
        exitCode: h.done?.exitCode ?? null,
        stdout: k.stdout,
        outputFile: f?.result,
        stderr: k.stderr,
        durationMs: h.done?.durationMs,
        readAccessPending: h.done?.readAccessPending,
      }
    );
  }
  async readFileRaw(e, t, r) {
    const i = await this.runFsHelper(e, {
      op: "read",
      paths: [t],
      maxSizeBytes: r?.maxSizeBytes,
    });
    let n;
    try {
      n = re(i, t);
    } catch (f) {
      const p = this.sessions.get(e)?.cwd;
      throw Ne(f, oe(t, p ? C.resolve(p, t) : null, p));
    }
    const s = Buffer.from(n, "base64"),
      a = await xe.detectMime({ buffer: s, path: t });
    return {
      mimeType:
        (Re.isText(C.basename(t), s) ?? !1) && d.isBinaryMime(a)
          ? "text/plain"
          : a,
      size: s.length,
      data: s,
    };
  }
  async streamFile(e, t, r, i) {
    const n = r.signal ?? this.activeSignal;
    if (n?.aborted) {
      const c = new Error("File stream aborted");
      throw ((c.name = "AbortError"), c);
    }
    const s = await this.loadFileRuntime(e);
    n?.throwIfAborted();
    const a = {
        path: t,
        expectedSizeBytes: r.expectedSizeBytes,
        chunkSizeBytes: Ae,
        ...(r.maxSizeBytes !== void 0 ? { maxSizeBytes: r.maxSizeBytes } : {}),
        ...(r.expectedModifiedAtMs !== void 0
          ? { expectedModifiedAtMs: r.expectedModifiedAtMs }
          : {}),
      },
      l = [s, "-e", qe, JSON.stringify(a)];
    await this.withClaimedPreviousPolicyRoots(e, async (c) => {
      const f = this.sessions.get(e);
      if (!f) throw new Error(`streamFile: unknown session "${e}"`);
      const p = f,
        w = G(p)
          ? {
              ...p.policy,
              readableRoots: await this.includeWindowsRunnerRoot(
                p.policy.readableRoots,
              ),
            }
          : p.policy,
        E = await this.prepareNetworkForExec(
          p.network,
          { ...Y(), ...p.shellSnapshot?.env, ...p.env },
          void 0,
          "internal-deny",
        ),
        S = {
          mode: "raw-stream",
          argv: l,
          cwd: p.cwd,
          env: E.env,
          policy: w,
          network: E.network,
          permissionProfile: p.permissionProfile,
          proxyPorts: E.proxyPorts,
          windowsSandboxLevel: p.windowsSandboxLevel,
          previousReadableRoots: c?.readableRoots,
          previousWritableRoots: c?.writableRoots,
          ...this.bashToolingFields(),
        },
        g = this.spawnHelper(),
        m = V(g);
      let R = "",
        b = !1,
        T = !1;
      const k = () => {
        ((T = !0),
          g.exitCode === null &&
            g.signalCode === null &&
            !g.killed &&
            A.killSandboxHelperTree(g));
      };
      (g.stderr?.on("data", (h) => {
        R = (R + h.toString("utf8")).slice(-65536);
      }),
        n && n.addEventListener("abort", k, { once: !0 }));
      try {
        if (
          (await E.activate(K(g)),
          g.stdin?.end(
            JSON.stringify(S) +
              `
`,
          ),
          !g.stdout)
        )
          throw new Error("Sandbox file stream did not expose stdout");
        let h = 0;
        for await (const P of g.stdout) {
          if (T || n?.aborted) {
            const q = new Error("File stream aborted");
            throw ((q.name = "AbortError"), q);
          }
          if (P.byteLength !== 0) {
            if (((h += P.byteLength), h > r.expectedSizeBytes))
              throw new Error("Upload source grew while streaming");
            await i(P);
          }
        }
        const x = await m;
        if (T || n?.aborted) {
          const P = new Error("File stream aborted");
          throw ((P.name = "AbortError"), P);
        }
        if (x.kind === "error") throw x.error;
        if (x.code !== 0) throw Me(t, R);
        if (h !== r.expectedSizeBytes)
          throw new Error("Upload source became shorter while streaming");
        b = !0;
      } finally {
        (n && n.removeEventListener("abort", k),
          b ||
            (g.exitCode === null &&
              g.signalCode === null &&
              !g.killed &&
              A.killSandboxHelperTree(g),
            await m),
          E.cleanup());
      }
    });
  }
  async writeBinaryFile(e, t, r) {
    const i = await this.runFsHelper(e, { op: "write", dest: t }, r);
    return (this.reportWriteRetries(e, "write", i.writes), r.length);
  }
  async writeManyFiles(e, t) {
    if (t.length === 0) return [];
    const r = t.length === 1 ? t[0].data : Buffer.concat(t.map((n) => n.data)),
      i = await this.runFsHelper(
        e,
        {
          op: "writeMany",
          files: t.map((n) => ({ dest: n.dest, length: n.data.length })),
        },
        r,
      );
    return (
      this.reportWriteRetries(e, "writeMany", i.writes),
      t.map((n) => n.data.length)
    );
  }
  reportWriteRetries(e, t, r) {
    if (!r || r.length === 0) return;
    const i = r.filter(
      (a) =>
        (Array.isArray(a.retriedCodes) && a.retriedCodes.length > 0) ||
        a.recreated === !0,
    );
    if (i.length === 0) return;
    const n = i.map((a) => ({
        file: C.basename(a.dest),
        tries: a.tries,
        codes: a.retriedCodes,
        recreated: a.recreated === !0,
      })),
      s = n.filter((a) => a.recreated).length;
    (d.sandboxLogger.warn(
      "[NativeSandboxTransport] native fs write recovered after transient retry",
      {
        sessionId: e,
        op: t,
        platform: process.platform,
        recreatedCount: s,
        files: n,
      },
    ),
      d.captureMessage(
        "sandbox native fs write recovered after transient retry",
        {
          level: "warning",
          tags: {
            feature: d.SANDBOX_SENTRY_FEATURE_TAG,
            area: "native-fs",
            operation: "write-retry-recovered",
            platform: process.platform,
          },
          extra: {
            sessionId: e,
            op: t,
            platform: process.platform,
            recreatedCount: s,
            files: n,
          },
        },
      ));
  }
  get nativeFs() {
    return this;
  }
  async loadFileRuntime(e) {
    const t = M.getSandboxToolingManager();
    if (!t) {
      const n = new d.SandboxError(
        "native-tooling-unavailable",
        "native fs: bundled Node unavailable (sandbox tooling not staged)",
      );
      throw (
        await d.captureSandboxFailure(n, {
          area: "native-fs",
          operation: "tooling-unavailable",
          sessionId: e,
        }),
        n
      );
    }
    const r = await t.ensureBundledNodeAvailable();
    if (r) return r;
    const i = new d.SandboxError(
      "native-tooling-unavailable",
      `native fs: bundled Node missing at ${t.getBundledNodePath()} after sandbox tooling repair`,
    );
    throw (
      await d.captureSandboxFailure(i, {
        area: "native-fs",
        operation: "tooling-unavailable",
        sessionId: e,
        extra: { nodePath: t.getBundledNodePath() },
      }),
      i
    );
  }
  async runFsHelper(e, t, r) {
    const i = this.activeSignal,
      n = await this.loadFileRuntime(e);
    i?.throwIfAborted();
    const s = [n, "-e", ke, JSON.stringify(t)],
      a = await this.exec(e, JSON.stringify(s), {
        ...(r ? { input: r } : {}),
        signal: i ?? void 0,
        networkIntent: "internal-deny",
        diagnostics: { fsHelperOp: t.op },
      });
    if (a.exitCode !== 0) {
      const l = this.sessions.get(e),
        c = We(t, l);
      d.sandboxLogger.error(
        "[NativeSandboxTransport] native fs helper failed",
        {
          sessionId: e,
          op: String(t.op),
          exitCode: a.exitCode,
          cwd: l?.cwd ?? null,
          targetPath: c.targetPath,
          resolvedTargetPath: c.resolvedTargetPath,
          coveredByWritableRoot: c.coveredByWritableRoot,
          coveringWritableRoot: c.coveringWritableRoot,
          writableRoots: l?.policy.writableRoots ?? [],
          readableRoots: l?.policy.readableRoots ?? [],
          stderr: a.stderr.slice(0, 1e3),
        },
      );
      const f = Be(c.coveredByWritableRoot),
        p = oe(c.targetPath, c.resolvedTargetPath, l?.cwd),
        w = d.sandboxPathError(
          `native fs op "${String(t.op)}" failed (exit ${a.exitCode}, policy=${f}): ${a.stderr.slice(0, 300)}`,
          p,
        );
      throw (
        c.coveredByWritableRoot !== !1 &&
          (await d.captureSandboxFailure(w, {
            area: "native-fs",
            operation: String(t.op),
            sessionId: e,
            extra: {
              exitCode: a.exitCode,
              targetFile: c.targetPath ? C.basename(c.targetPath) : null,
              coveredByWritableRoot: c.coveredByWritableRoot,
              policyCoverage: f,
              stderr: a.stderr.slice(0, 1e3),
            },
          })),
        w
      );
    }
    return JSON.parse(a.stdout);
  }
  listDir(e, t) {
    return this.runFsHelper(e, { op: "list", path: t });
  }
  fileTree(e, t, r) {
    return this.runFsHelper(e, { op: "tree", path: t, maxEntries: r });
  }
  async fileTrees(e, t) {
    const r = await this.runFsHelper(e, { op: "trees", requests: t });
    return new Map(t.map((i) => [i.path, r[i.path] ?? []]));
  }
  async exists(e, t) {
    return (await this.runFsHelper(e, { op: "exists", path: t })).exists;
  }
  async remove(e, t, r) {
    await this.runFsHelper(e, { op: "delete", path: t, recursive: r });
  }
  async readBinaryFiles(e, t, r) {
    const i = new Map();
    if (t.length === 0) return i;
    const n = await this.runFsHelper(e, {
      op: "read",
      paths: t,
      maxSizeBytes: r?.maxSizeBytes,
    });
    for (const s of t) {
      const a = re(n, s);
      i.set(s, Buffer.from(a, "base64"));
    }
    return i;
  }
  async readFiles(e, t, r, i) {
    const n = new Map();
    if (t.length === 0) return n;
    const s = await this.runFsHelper(e, { op: "read", paths: t });
    for (const a of t) {
      const l = s[a];
      if (!l || !l.ok) continue;
      const c = l.data,
        f = Buffer.from(c, "base64").toString("utf-8").split(`
`);
      (f.length > 0 && f[f.length - 1] === "" && f.pop(),
        n.set(
          a,
          f.slice(r, r + i).join(`
`),
        ));
    }
    return n;
  }
  async search(e, t, r, i) {
    const n = [await Ue("rg"), "--json"];
    (i.isRegex || n.push("--fixed-strings"),
      i.glob && n.push("--glob", i.glob),
      n.push(t, r));
    const s = await this.exec(e, JSON.stringify(n));
    if (s.exitCode !== 0 && s.exitCode !== 1 && s.exitCode !== null)
      throw new Error(
        `search failed (exit ${s.exitCode}): ${s.stderr.slice(0, 300)}`,
      );
    return d
      .parseRipgrepJson(s.stdout)
      .map((a) => ({ path: a.path, line: a.lineNumber, content: a.lineText }));
  }
  async writeLiveInput(e, t, r) {
    const i = this.liveProcs.get(t);
    if (!i) throw new Error(`writeLiveInput: unknown live session "${t}"`);
    i.child.stdin?.write(r);
  }
  async readLiveOutput(e, t) {
    const r = this.liveProcs.get(t);
    if (!r) throw new Error(`readLiveOutput: unknown live session "${t}"`);
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
  async killLiveSession(e, t) {
    const r = this.liveProcs.get(t);
    return r ? (U(r), this.liveProcs.delete(t), !0) : !1;
  }
  onLiveSessionExit(e) {
    return (
      this.liveExitListeners.add(e),
      () => this.liveExitListeners.delete(e)
    );
  }
  emitLiveSessionExit(e) {
    for (const t of this.liveExitListeners)
      try {
        t(e);
      } catch {}
  }
}
function U(o) {
  ((o.killed = !0),
    o.detachAbort?.(),
    A.killSandboxHelperTree(o.child),
    o.cleanup?.());
}
function Oe(o) {
  return o.exitCode === null || typeof o.exitCode == "number";
}
function O(o) {
  return o.windowsSandboxLevel === "elevated";
}
function G(o) {
  return o.windowsSandboxLevel !== void 0;
}
function X(o) {
  const e = o.replace(/\\/g, "/"),
    t = /^[a-z]:\//i.exec(e);
  if (t === null) return null;
  const r = t[0].slice(0, 2).toLowerCase(),
    i = e.slice(r.length),
    n = [];
  for (const s of i.replace(/\/+/g, "/").split("/"))
    if (!(s === "" || s === ".")) {
      if (s === "..") {
        n.pop();
        continue;
      }
      n.push(s);
    }
  return n.length === 0 ? `${r}/` : `${r}/${n.join("/")}`.toLowerCase();
}
function ge(o, e) {
  const t = ne(o),
    r = ne(e);
  for (const [i, n] of t) {
    const s = r.get(i);
    if (s == null || s < n) return { kind: "shrunk-or-downgraded" };
  }
  for (const [i, n] of r) {
    const s = t.get(i);
    if (s == null || n > s) return { kind: "expanded" };
  }
  return { kind: "none" };
}
function ne(o) {
  const e = new Map();
  for (const t of o.readableRoots) {
    const r = X(t);
    r != null && e.set(r, 1);
  }
  for (const t of o.writableRoots) {
    const r = X(t);
    r != null && e.set(r, 2);
  }
  return e;
}
function ze(o, e) {
  return be(o, {
    readableRoots: e.readableRoots,
    writableRoots: e.writableRoots,
  });
}
function be(o, e) {
  return {
    readableRoots: W([...(o?.readableRoots ?? []), ...e.readableRoots]),
    writableRoots: W([...(o?.writableRoots ?? []), ...e.writableRoots]),
  };
}
function W(o) {
  return [...new Set(o)];
}
function $e(o) {
  if (o)
    return {
      readableRoots: [...o.readableRoots],
      writableRoots: [...o.writableRoots],
    };
}
async function Ue(o) {
  const e = M.getSandboxToolingManager();
  if (!e)
    throw new d.SandboxError(
      "native-tooling-unavailable",
      `native sandbox: bundled tool "${o}" unavailable (tooling not staged)`,
    );
  const t = await e.ensureBundledToolAvailable(o);
  if (!t)
    throw new d.SandboxError(
      "native-tooling-unavailable",
      `native sandbox: bundled tool "${o}" unavailable after tooling repair`,
    );
  return t;
}
function Ie(o) {
  return C.basename(o.replace(/\\/g, "/"));
}
function Je(o) {
  if (!o) return "missing";
  const e = Ie(o).toLowerCase();
  return e === "bash" ||
    e === "sh" ||
    e === "zsh" ||
    e === "powershell.exe" ||
    e === "pwsh.exe"
    ? "shell"
    : C.isAbsolute(o) || /^[a-zA-Z]:[\\/]/.test(o)
      ? "absolute-path"
      : "command";
}
function se(o) {
  return /\.(mjs|cjs|js)$/i.test(o) ? "node-script" : "native-executable";
}
function I(o) {
  const e = o.trim();
  return {
    bytes: Buffer.byteLength(o, "utf8"),
    lineCount: e ? e.split(/\r?\n/).length : 0,
    hadContent: e.length > 0,
  };
}
function je(o, e) {
  const t = I(e),
    r = ee(e);
  if (r.length === 0) return `${o}; stderrBytes=${t.bytes}`;
  const n = r.some((s) => /^CreateProcess(?:AsUserW|WithLogonW):/.test(s))
    ? " Windows could not start the local execution process. This is a local runtime problem, not an app authorization failure. Do not reconnect the app or repeat the same helper command. Use a direct app action or the page if available. Otherwise explain that local execution is unavailable on this device and include the launch error code when reporting the problem."
    : "";
  return `${o}; stderrBytes=${t.bytes}; fingerprints=${r.join(",")}${n}`;
}
const Ve = "Elevated sandbox setup has not been completed.";
function z(o, e, t) {
  const r = je(o, e);
  if (t?.startsWith(Ve))
    return new d.SandboxError("windows-native-setup-required", r, {
      executionState: "not-started",
    });
  const i =
    d.classifyHelperFailureText(`${t ?? ""}
${e}`) ?? "native-helper-protocol";
  return new d.SandboxError(i, r);
}
function ae(o) {
  Promise.resolve()
    .then(() => require("../main-app.js"))
    .then((e) => e.initSandbox)
    .then(({ escalateWindowsSandboxRuntimeFailure: e }) => e(o))
    .catch((e) => {
      d.sandboxLogger.warn(
        "[NativeSandboxTransport] failed to escalate Windows runtime failure",
        { error: e instanceof Error ? e.message : String(e) },
      );
    });
}
function me(o) {
  const e = o.trim();
  return e ? ye(e) : null;
}
function ye(o) {
  const e =
    o.length > _
      ? `${o.slice(0, _)}
[truncated]`
      : o;
  return Ze(e);
}
function Q(o) {
  const e = o?.trim();
  return e ? ye(e) : "(no message)";
}
function Ke(o) {
  const e =
    o
      .trim()
      .split(
        `
`,
      )
      .pop() ?? "";
  if (!e) return null;
  try {
    const t = JSON.parse(e);
    return typeof t?.ok != "boolean"
      ? null
      : {
          ok: t.ok,
          code: typeof t.code == "string" ? t.code : void 0,
          message: typeof t.message == "string" ? t.message : void 0,
        };
  } catch {
    return null;
  }
}
function Ye(o) {
  const e =
    o
      .trim()
      .split(
        `
`,
      )
      .pop() ?? "";
  if (!e) return null;
  try {
    const t = JSON.parse(e);
    return t.type === "error" && typeof t.message == "string"
      ? t.message
      : null;
  } catch {
    return null;
  }
}
function Ge(o, e) {
  return e !== null
    ? "reported-error"
    : o.trim()
      ? "invalid-output"
      : "no-output";
}
function le(o, e) {
  return o
    ? z(`helper reported error: ${Q(o.message)}`, e, o.message)
    : z("sandbox stream helper exited without done event", e);
}
function de(o) {
  const e = I(o);
  return {
    helperStderrBytes: e.bytes,
    helperStderrLineCount: e.lineCount,
    helperStderrHadContent: e.hadContent,
    helperStderrPreview: me(o),
    helperFailureFingerprints: ee(o),
  };
}
function ce(o, e = 500) {
  return new Promise((t) => {
    const r = o.stdout == null || o.stdout.readableEnded,
      i = o.stderr == null || o.stderr.readableEnded;
    if (r && i) {
      t();
      return;
    }
    const n = setTimeout(t, e);
    o.once("close", () => {
      (clearTimeout(n), t());
    });
  });
}
function Ze(o) {
  let e = o;
  return (
    (e = e.replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "<email>")),
    (e = e.replace(
      /\b(authorization:\s*(?:bearer|basic)\s+)[^\s]+/gi,
      "$1<redacted>",
    )),
    (e = e.replace(
      /\b(api[_-]?key|token|secret|password)(\s*[=:]\s*)[^\s]+/gi,
      "$1$2<redacted>",
    )),
    (e = e.replace(/\b(sk-[A-Za-z0-9_-]{20,})\b/g, "<redacted>")),
    e
  );
}
function ee(o) {
  const e = [],
    t = (a) => {
      e.includes(a) || e.push(a);
    },
    r =
      /\b(CreateProcessAsUserW|CreateProcessWithLogonW|SetNamedSecurityInfoW)\s+failed:\s+(\d+)\b/g;
  let i = r.exec(o);
  for (; i !== null; ) {
    const a = i[1],
      l = i[2];
    (a && l && t(`${a}:${l}`), (i = r.exec(o)));
  }
  const n = /\bsetup refresh failed with status exit code:\s+(\d+)\b/gi;
  let s = n.exec(o);
  for (; s !== null; ) {
    const a = s[1];
    (a && t(`setup-refresh-exit:${a}`), (s = n.exec(o)));
  }
  return (
    /\brun_windows_sandbox_capture_elevated failed\b/i.test(o) &&
      t("run-windows-sandbox-capture-elevated"),
    e.slice(0, 8)
  );
}
function ue(o) {
  if (o.startsWith("["))
    try {
      const e = JSON.parse(o);
      if (
        Array.isArray(e) &&
        e.length > 0 &&
        e.every((t) => typeof t == "string")
      )
        return e;
    } catch {}
  return process.platform === "win32"
    ? [
        d.getWindowsPowerShellPath(),
        "-NoLogo",
        "-NoProfile",
        "-NonInteractive",
        "-Command",
        d.withPowerShellAgentRoot(o),
      ]
    : ["/bin/bash", "-c", o];
}
exports.NativeSandboxTransport = De;
exports.WINDOWS_SETUP_REFRESH_TIMEOUT_MS = fe;
exports.classifyPolicyRootChange = ge;
exports.isWindowsElevatedConfig = O;
exports.normalizePolicyRootForCompare = X;
