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
      (o._sentryDebugIds[e] = "c4dc248e-e773-4b9f-b341-c02d697b7a87"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-c4dc248e-e773-4b9f-b341-c02d697b7a87"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const N = require("node:child_process"),
  W = require("node:crypto"),
  g = require("node:fs/promises"),
  b = require("node:path"),
  z = require("node:util"),
  Q = require("valibot"),
  y = require("./windowChat-OLnWTvHU.js"),
  h = require("../main-app.js"),
  E = require("./appPaths-eBQvtv9Z.js"),
  T = require("./ContentExtractionService-D9pFX80C.js"),
  O = require("node:url"),
  H = require("node:os"),
  X = require("./safeUnzip-Cao1Ew3K.js"),
  M = require("./unicode-CSAGP0Z8.js"),
  J = require("jszip"),
  G = require("node:buffer");
require("./boot-B3ykpiVV.js");
require("./ids-B2sWlG17.js");
require("electron");
require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("./savedCertificateBlocklist-BUtmL3xA.js");
require("node:fs");
require("node:tls");
require("fs/promises");
require("path");
require("better-sqlite3");
require("url");
require("./worker-protocol-CFgWGf-A.js");
require("./protocol-BGN1BQCi.js");
require("./suggestion-utils-CLM94tkM.js");
require("@reflect/auth/desktop");
require("crypto");
require("./profileLayoutLifecycle-BDYjrhKu.js");
require("./commitRecord-DR9i1ecT.js");
require("./errors-DsbnElf-.js");
require("./appDataPath-20zIIRaW.js");
require("@electron-toolkit/utils");
require("os");
require("child_process");
require("util");
require("node:process");
require("fs");
require("stream");
require("zlib");
require("marked");
require("./storageObjectCache-ClYu2auD.js");
require("node:events");
require("node:worker_threads");
require("node:http");
require("node:https");
require("events");
require("@reflect/auth/workos-session");
require("@reflect/auth/device-policy");
require("node:assert");
require("node:stream");
require("./_commonjsHelpers-DJP3_Dvh.js");
require("./index-CSlo9i6Z.js");
require("tty");
require("node-machine-id");
require("node:timers/promises");
require("./config-CdpnFYk6.js");
require("./contracts-rChhtF3C.js");
require("electron-updater");
require("@reflect/auth/last-login-method");
require("@reflect/auth/oauth-state");
require("@reflect/auth/session-identity");
require("./settled-read-r0Yf0ORp.js");
require("module");
require("./fs-native-KvxiM8hl.js");
require("node:module");
require("tldts");
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
require("lodash/debounce");
require("./worker-protocol-CcOBX8D2.js");
require("node:zlib");
require("node:diagnostics_channel");
require("worker_threads");
require("diagnostics_channel");
require("./singleInstance-CuMDgUKt.js");
require("./routine-suggestion-store-Bb2MYDKl.js");
require("fastest-levenshtein");
require("./workspace-surface-model-CMo0ac7-.js");
require("./UserRequests-cRpr0CFi.js");
require("node:stream/promises");
require("fzstd");
require("./ExternalAppManager-DAuHmeTi.js");
require("./chatDeletionFence-7kC13ojz.js");
require("./CompanionManagerRegistry-CqhzzsGy.js");
require("./onboarding-BugjMquY.js");
require("./CompanionFolderStore-BW078c_O.js");
require("./artifact-host-roots-C3OUVgF3.js");
require("./import-media-sIcNcY_k.js");
require("./DirectHostTransport-BOda5Eqc.js");
require("node:string_decoder");
require("istextorbinary");
require("./sandbox-tooling-singleton-DYdbpKPS.js");
require("./sandbox-helper-process-CQ6JyI_j.js");
require("./OptMemQueryService-1Nw8Jpet.js");
require("./replica-files-CUHDGfIt.js");
require("./dream-sessions-CNZob7px.js");
require("./ToolExecutionClient-BcKJhnOl.js");
require("./sandboxRuntimeSetupStatus-CmP0UsOY.js");
require("./base-B19nE_Cx.js");
require("./onboarding-BMM5mweS.js");
require("./reconnectActions-CyU2QCny.js");
require("./web-extraction-DB7thO2y.js");
require("./python-runtime-BF_2cFN_.js");
require("node:vm");
require("./parse-MOHEM7uu.js");
require("./template-CmpXTu8Z.js");
require("./schedule-AlkLCp6i.js");
require("./folder-listing-DokmAYAd.js");
require("./artifact-session-B2A1eOvr.js");
require("yauzl");
function V(o) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (o) {
    for (const t in o)
      if (t !== "default") {
        const a = Object.getOwnPropertyDescriptor(o, t);
        Object.defineProperty(
          e,
          t,
          a.get ? a : { enumerable: !0, get: () => o[t] },
        );
      }
  }
  return ((e.default = o), Object.freeze(e));
}
const p = V(Q),
  I = p.pipe(p.string(), p.trim(), p.minLength(1)),
  Y = p.custom((o) => {
    if (typeof o != "object" || o === null || Array.isArray(o)) return !1;
    const e = Object.getPrototypeOf(o);
    return e !== Object.prototype && e !== null
      ? !1
      : Object.values(o).every((t) => typeof t == "string");
  }),
  K = p.object({
    id: I,
    required: p.boolean(),
    intent: I,
    whenToAsk: p.optional(I),
  }),
  Z = p.object({
    mode: p.literal("llm_simulated_user"),
    maxTurns: p.pipe(
      p.number(),
      p.safeInteger(),
      p.minValue(1),
      p.maxValue(12),
    ),
    simulatorModel: p.optional(I, y.DEFAULT_INTERACTIVE_SIMULATOR_MODEL),
    userPersona: I,
    facts: Y,
    completionPolicy: p.optional(I),
  }),
  ee = p.object({
    type: p.literal("interactive"),
    interaction: Z,
    question_expectations: p.optional(p.array(K), () => []),
  });
function te(o) {
  const e = p.safeParse(ee, o);
  return e.success ? e.output : null;
}
class D extends Error {
  constructor() {
    (super("Benchmark task credit limit exceeded"),
      (this.name = "CreditLimitExceededError"));
  }
}
async function re(o, e) {
  let t,
    a,
    r = !1;
  const s = o.run().finally(() => {
      r = !0;
    }),
    i = new Promise((n, c) => {
      t = setInterval(() => {
        if (r || a) return;
        const l = o.getActiveCreditsUsed();
        l === void 0 ||
          l < e ||
          ((a = new D()),
          t && (clearInterval(t), (t = void 0)),
          o
            .abort("Benchmark task credit limit exceeded")
            .catch((d) =>
              console.warn(
                "[BenchmarkManager] Failed to stop credit-limited task",
                d,
              ),
            )
            .finally(() => c(a)));
      }, 1e3);
    });
  try {
    await Promise.race([s, i]);
  } catch (n) {
    throw a ? (await s.catch(() => {}), a) : n;
  } finally {
    t && clearInterval(t);
  }
}
class ae {
  baseline;
  active = !1;
  begin(e) {
    ((this.baseline = e), (this.active = !0));
  }
  finish() {
    this.active = !1;
  }
  measureActive(e) {
    if (this.active) return this.measure(e);
  }
  measure(e) {
    return this.baseline === void 0 ? 0 : Math.max(0, e - this.baseline);
  }
}
const j = ".orbitra-workspace";
function F(o, e) {
  const t = b.relative(e, o);
  return (
    t === "" || (!t.startsWith(`..${b.sep}`) && t !== ".." && !b.isAbsolute(t))
  );
}
async function se(o) {
  const e = [],
    t = [];
  async function a(r) {
    const s = b.join(o, r),
      i = await g.readdir(s, { withFileTypes: !0 });
    i.sort((n, c) => n.name.localeCompare(c.name));
    for (const n of i) {
      const c = b.join(r, n.name);
      if (c === j) continue;
      if (n.isSymbolicLink())
        throw new Error(
          `Benchmark directories cannot contain symbolic links: ${c}`,
        );
      if (n.isDirectory()) {
        (e.push(c), await a(c));
        continue;
      }
      if (!n.isFile())
        throw new Error(
          `Benchmark directories can only contain files and directories: ${c}`,
        );
      const l = b.join(o, c),
        [d, m] = await Promise.all([g.readFile(l), g.stat(l)]);
      t.push({ relativePath: c, content: d, mode: m.mode });
    }
  }
  return (await a(""), { directories: e, files: t });
}
async function ne(o) {
  const e = await g.readdir(o, { withFileTypes: !0 });
  await Promise.all(
    e
      .filter((t) => t.name !== j)
      .map((t) => g.rm(b.join(o, t.name), { recursive: !0, force: !0 })),
  );
}
async function ie(o, e) {
  let t;
  try {
    t = new URL(o);
  } catch {
    throw new Error("Benchmark directory URL must be a valid file: URL");
  }
  if (t.protocol !== "file:")
    throw new Error("Only file: directory URLs are supported");
  const a = O.fileURLToPath(t),
    r = await g.realpath(a);
  if (!(await g.stat(r)).isDirectory())
    throw new Error("Benchmark directory URL must point to a directory");
  await g.mkdir(e, { recursive: !0 });
  const i = await g.realpath(e);
  if (F(r, i) || F(i, r))
    throw new Error(
      "Benchmark directory and SyncFS root must not contain each other",
    );
  const n = await se(r);
  await ne(i);
  for (const c of n.directories) await g.mkdir(b.join(i, c), { recursive: !0 });
  for (const c of n.files) {
    const l = b.join(i, c.relativePath);
    (await g.mkdir(b.dirname(l), { recursive: !0 }),
      await g.writeFile(l, c.content, { mode: c.mode }));
  }
}
const U = 200 * 1024 * 1024,
  oe = "r2:",
  ce = async () => {};
async function le(o, e) {
  if (o.startsWith("file:")) return { directoryUrl: o, cleanup: ce };
  let t;
  if (o.startsWith(oe)) t = await e.resolvePresignedUrl(o);
  else if (o.startsWith("http://") || o.startsWith("https://")) t = o;
  else throw new Error("Unsupported benchmark directory reference");
  const a = await g.mkdtemp(b.join(H.tmpdir(), "benchmark-dir-")),
    r = async () => {
      await g.rm(a, { recursive: !0, force: !0 }).catch(() => {});
    };
  try {
    const s = b.join(a, "archive.zip"),
      i = b.join(a, "contents");
    await g.mkdir(i, { recursive: !0 });
    const n = await fetch(t);
    if (!n.ok)
      throw new Error(`Failed to download benchmark directory (${n.status})`);
    const c = Number(n.headers.get("content-length") ?? "");
    if (Number.isFinite(c) && c > U)
      throw new Error("Benchmark directory archive exceeds the size limit");
    const l = Buffer.from(await n.arrayBuffer());
    if (l.byteLength > U)
      throw new Error("Benchmark directory archive exceeds the size limit");
    return (
      await g.writeFile(s, l),
      await X.extractZipArchive(s, i),
      { directoryUrl: O.pathToFileURL(i).href, cleanup: r }
    );
  } catch (s) {
    throw (await r(), s);
  }
}
const x = new Map();
function he(o) {
  const e = x.get(o);
  if (e) return e;
  const t = new ue();
  return (x.set(o, t), t);
}
class ue {
  activeReaders = 0;
  writerActive = !1;
  waiters = [];
  async run(e, t) {
    const a = await this.acquire(e);
    try {
      return await t();
    } finally {
      a();
    }
  }
  acquire(e) {
    return new Promise((t) => {
      (this.waiters.push({ exclusive: e, resolve: t }),
        this.startEligibleWaiters());
    });
  }
  startEligibleWaiters() {
    if (this.writerActive) return;
    const e = this.waiters[0];
    if (e) {
      if (e.exclusive) {
        if (this.activeReaders > 0) return;
        (this.waiters.shift(),
          (this.writerActive = !0),
          e.resolve(() => {
            ((this.writerActive = !1), this.startEligibleWaiters());
          }));
        return;
      }
      for (; this.waiters[0] && !this.waiters[0].exclusive; ) {
        const t = this.waiters.shift();
        if (!t) return;
        ((this.activeReaders += 1),
          t.resolve(() => {
            ((this.activeReaders -= 1), this.startEligibleWaiters());
          }));
      }
    }
  }
}
const de = 32 * 1024 * 1024,
  me = 8 * 1024 * 1024,
  fe = 12e4,
  ge = 2e3;
function pe(o) {
  return o
    .replace(/&#x([0-9a-f]+);/gi, (e, t) => {
      const a = Number.parseInt(t, 16);
      return Number.isSafeInteger(a) && a <= 1114111
        ? String.fromCodePoint(a)
        : "�";
    })
    .replace(/&#([0-9]+);/g, (e, t) => {
      const a = Number.parseInt(t, 10);
      return Number.isSafeInteger(a) && a <= 1114111
        ? String.fromCodePoint(a)
        : "�";
    })
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}
function we(o) {
  const e = [],
    t =
      /<w:(t|delText)\b[^>]*>([\s\S]*?)<\/w:\1>|<w:tab\b[^>]*\/>|<w:(?:br|cr)\b[^>]*\/>|<\/w:(?:p|tr)>/g;
  for (const a of o.matchAll(t)) {
    if (a[1]) {
      e.push(pe(a[2] ?? ""));
      continue;
    }
    e.push(
      a[0].startsWith("<w:tab")
        ? "	"
        : `
`,
    );
  }
  return e
    .join("")
    .replace(
      /\n{3,}/g,
      `

`,
    )
    .trim();
}
function B(o, e) {
  return o.match(new RegExp(`<w:${e}\\b`, "g"))?.length ?? 0;
}
function be(o) {
  return (
    o === "word/document.xml" ||
    /^word\/header\d+\.xml$/.test(o) ||
    /^word\/footer\d+\.xml$/.test(o) ||
    o === "word/comments.xml" ||
    o === "word/footnotes.xml" ||
    o === "word/endnotes.xml"
  );
}
async function ke(o) {
  const e = await J.loadAsync(o, { checkCRC32: !0, createFolders: !1 }),
    t = Object.values(e.files);
  if (t.length > 1e4) throw new Error("DOCX contains too many package parts");
  if (!e.file("[Content_Types].xml") || !e.file("word/document.xml"))
    throw new Error("DOCX is missing required package parts");
  const a = t.filter((f) => !f.dir && be(f.name));
  let r = 0,
    s = 0,
    i = 0,
    n = 0,
    c = 0,
    l = 0;
  const d = [];
  for (const f of a) {
    const u = await f.async("string");
    if (((r += u.length), r > me))
      throw new Error("DOCX content XML exceeds the benchmark evidence limit");
    ((s += B(u, "p")),
      (i += B(u, "tbl")),
      (c += B(u, "ins")),
      (l += B(u, "del")),
      f.name === "word/comments.xml" && (n += B(u, "comment")));
    const k = we(u);
    k &&
      d.push(`## ${f.name}
${k}`);
  }
  return {
    textContent: M.sanitizeUnpairedSurrogates(
      d
        .join(
          `

`,
        )
        .slice(0, fe),
    ),
    paragraphCount: s,
    tableCount: i,
    commentCount: n,
    insertedTextCount: c,
    deletedTextCount: l,
  };
}
function _(o) {
  return o.split(/[\\/]/).filter(Boolean);
}
function ye(o, e) {
  const t = o.filter((a) => _(a).at(-1) === e);
  return (
    t.sort((a, r) => {
      const s = _(a).includes("uploads"),
        i = _(r).includes("uploads");
      return s !== i ? (s ? 1 : -1) : a.length - r.length;
    }),
    t[0] ?? null
  );
}
async function ve(o) {
  const e = await Promise.all(
    [".", "/home"].map((t) => o.getFileTree(t, ge).catch(() => [])),
  );
  return [...new Set(e.flat())];
}
function P(o) {
  return {
    name: M.sanitizeUnpairedSurrogates(o),
    path: null,
    found: !1,
    size: 0,
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    textContent: "",
    paragraphCount: 0,
    tableCount: 0,
    commentCount: 0,
    insertedTextCount: 0,
    deletedTextCount: 0,
    error: "Expected deliverable was not found",
  };
}
async function Se(o, e) {
  const t = await ve(o);
  return Promise.all(
    e.map(async (a) => {
      const r = ye(t, a);
      if (!r) return P(a);
      try {
        const s = await o.readBinaryFile(r, { maxSizeBytes: de }),
          i = await ke(s.data);
        return {
          name: M.sanitizeUnpairedSurrogates(a),
          path: M.sanitizeUnpairedSurrogates(r),
          found: !0,
          size: s.size,
          mimeType: M.sanitizeUnpairedSurrogates(s.mimeType),
          ...i,
        };
      } catch (s) {
        const i = s instanceof Error ? s.message : String(s);
        return {
          ...P(a),
          path: M.sanitizeUnpairedSurrogates(r),
          found: !0,
          error: M.sanitizeUnpairedSurrogates(i),
        };
      }
    }),
  );
}
const Me = 5e3,
  Re = 2 * 1024 * 1024;
function Ie(o) {
  return G.Buffer.byteLength(JSON.stringify(o), "utf8");
}
class Be {
  constructor(e, t, a = null) {
    ((this.accountId = a),
      (this.benchmarkId = e.id),
      (this.benchmarkTitle = e.title),
      (this.localRun = t));
  }
  benchmarkId;
  benchmarkTitle;
  localRun;
  startedAt = new Date().toISOString();
  logs = [];
  logSizes = [];
  byteSize = 0;
  droppedEntries = 0;
  runId;
  sessionId;
  active = !1;
  handleLog = (e) => {
    this.active && this.addLog(e);
  };
  start() {
    this.active ||
      ((this.active = !0), h.logEventEmitter.on("log", this.handleLog));
  }
  setSessionId(e) {
    this.sessionId = e;
  }
  setRunId(e) {
    this.runId = e;
  }
  async finish(e, t) {
    if (
      !this.active ||
      ((this.active = !1),
      h.logEventEmitter.off("log", this.handleLog),
      await h.flushLogsForReport().catch((s) => {
        console.warn(
          "[BenchmarkHarnessLogCapture] Failed to flush logs before upload:",
          s,
        );
      }),
      !this.runId || !this.sessionId)
    )
      return;
    const a = {
        benchmarkId: this.benchmarkId,
        benchmarkTitle: this.benchmarkTitle,
        localRun: this.localRun,
        sessionId: this.sessionId,
        startedAt: this.startedAt,
        endedAt: new Date().toISOString(),
        status: e,
        error: t,
        droppedEntries: this.droppedEntries,
        logs: [...this.logs],
      },
      r = await h.fetchWithRetry(
        `${h.config.app.apiUrl}/api/benchmarks/runs/${this.runId}/harness-log`,
        { accountId: this.accountId, method: "POST", body: JSON.stringify(a) },
        1,
        1e3,
      );
    r.ok ||
      console.warn(
        `[BenchmarkHarnessLogCapture] Failed to upload harness log for run ${this.runId}: ${r.status}`,
      );
  }
  addLog(e) {
    const t = {
        level: e.level,
        message: e.message,
        timestamp: e.timestamp,
        flag: e.flag,
      },
      a = Ie(t);
    for (
      this.logs.push(t), this.logSizes.push(a), this.byteSize += a;
      this.logs.length > Me || this.byteSize > Re;

    ) {
      this.logs.shift();
      const r = this.logSizes.shift();
      ((this.byteSize -= r ?? 0), (this.droppedEntries += 1));
    }
  }
}
const Ce = z.promisify(N.execFile),
  L = 3e4,
  A = 1800 * 1e3,
  Te = 1e3;
function _e(o, e = "default") {
  return e === "exclude" ? !1 : e === "include" ? !0 : o.category === "memory";
}
class $e extends h.BaseManager {
  benchmarks = [];
  benchMarkRuns = [];
  runQueue = [];
  isProcessingQueue = !1;
  runResults = [];
  activeLocalRuns = new Map();
  localRunQueue = [];
  deferredLocalRuns = [];
  completedLocalRuns = new Set();
  MAX_CONCURRENT_LOCAL_RUNS = 10;
  _pendingSandboxTransport = null;
  _lastSessionMessages = [];
  _lastSessionId = null;
  _activeSession = null;
  _activeBatchId;
  currentTemplateRun = null;
  tabsService;
  layers;
  chatService;
  get accountId() {
    return this.chatSessionManager?.userProfile.accountId ?? null;
  }
  fetchWithRetry = (e, t, a, r) =>
    h.fetchWithRetry(e, { ...t, accountId: this.accountId }, a, r);
  chatSessionManager;
  constructor(e, t, a, r) {
    (super(),
      (this.layers = e),
      (this.chatSessionManager = a),
      (this.chatService = r),
      (this.tabsService = t),
      this.fetchBenchmarkRuns().catch((s) => {
        console.warn("Failed to fetch benchmark runs:", s);
      }),
      this.setupEventHandlers());
  }
  setupEventHandlers() {
    (this.layers.handleInvoke("benchmark:get-all-runs", async () => ({
      runs: this.benchMarkRuns,
    })),
      this.layers.handleInvoke("benchmark:run-by-id", async (e) =>
        this.runBenchmarkById(e.benchmarkId, {
          companionId: e.companionId,
          pinnedMemoryMode: e.pinnedMemoryMode,
          creditLimit: e.creditLimit,
        }),
      ),
      this.layers.handleInvoke("benchmark:run-in-new-window", async (e) =>
        h.benchmarkRunLauncher.launch(e.benchmarkId, e.taskTitle, {
          pinnedMemoryMode: e.pinnedMemoryMode,
          creditLimit: e.creditLimit,
        }),
      ),
      this.layers.handleInvoke("benchmark:run-package", async (e) =>
        this.runPackage(e.packageId),
      ),
      this.layers.handleInvoke("benchmark:get-running-state", async () => ({
        isRunning: this.isProcessingQueue,
        queueLength: this.runQueue.length,
      })),
      this.layers.handleInvoke(
        "benchmark:get-template-run-state",
        async () => ({ templateRun: this.currentTemplateRun }),
      ),
      this.layers.onUIEvent("benchmark:start-single-test", (e) => {
        try {
          (console.log("Adding single benchmark test to queue:", e.task.title),
            this.addToQueue([e.task]));
        } catch (t) {
          console.error("Failed to add single benchmark test to queue:", t);
        }
      }),
      this.layers.onUIEvent("benchmark:start-batch", (e) => {
        try {
          (console.log(
            "Adding benchmark batch to queue:",
            e.tasks.length,
            "tasks",
          ),
            this.addToQueue(e.tasks));
        } catch (t) {
          console.error("Failed to add benchmark batch to queue:", t);
        }
      }),
      this.layers.onUIEvent("benchmark:abort-queue", () => {
        try {
          (console.log("Clearing benchmark run queue"),
            (this.runQueue = []),
            this.layers.sendEventToRenderer("benchmark:queue-cleared", {}));
        } catch (e) {
          console.error("Failed to clear benchmark queue:", e);
        }
      }),
      this.layers.handleInvoke("benchmark:get-templates", async (e) => {
        try {
          return { templates: await this.fetchTemplates(e.category) };
        } catch (t) {
          return (
            console.error("Failed to fetch templates:", t),
            { templates: [] }
          );
        }
      }),
      this.layers.handleInvoke("benchmark:run-template", async (e) => {
        try {
          return await this.runTemplateWithPrompt(
            e.templateId,
            e.prompt,
            e.companionId,
            e.useLocalApi,
            e.pinnedMemoryMode,
          );
        } catch (t) {
          return (
            console.error("Failed to run template:", t),
            {
              success: !1,
              error: t instanceof Error ? t.message : "Unknown error",
            }
          );
        }
      }),
      this.layers.handleInvoke("benchmark:create-template", async (e) => {
        try {
          return await this.createTemplateFromSession(
            e.sessionId,
            e.title,
            e.category,
            e.description,
            e.isPrivate,
          );
        } catch (t) {
          return (
            console.error("Failed to create template:", t),
            {
              success: !1,
              error: t instanceof Error ? t.message : "Unknown error",
            }
          );
        }
      }),
      this.layers.handleInvoke("benchmark:get-datasets", async (e) => {
        try {
          return { datasets: await this.fetchDatasets(e.category, e.type) };
        } catch (t) {
          return (
            console.error("Failed to fetch datasets:", t),
            { datasets: [] }
          );
        }
      }),
      this.layers.handleInvoke("benchmark:delete-dataset", async (e) => {
        try {
          return await this.deleteDataset(e.id);
        } catch (t) {
          return (
            console.error("Failed to delete dataset:", t),
            {
              success: !1,
              error: t instanceof Error ? t.message : "Unknown error",
            }
          );
        }
      }),
      this.layers.handleInvoke("benchmark:run-dataset", async (e) => {
        try {
          return await this.runDataset(
            e.dataset,
            e.companionId,
            e.useLocalApi,
            e.copiesPerTest,
            e.pinnedMemoryMode,
          );
        } catch (t) {
          return (
            console.error("Failed to run dataset:", t),
            {
              success: !1,
              error: t instanceof Error ? t.message : "Unknown error",
            }
          );
        }
      }),
      this.layers.handleInvoke("benchmark:get-dataset-runs", async (e) => {
        try {
          return { batches: await this.fetchDatasetRuns(e.dataset) };
        } catch (t) {
          return (
            console.error("Failed to fetch dataset runs:", t),
            { batches: [] }
          );
        }
      }),
      this.layers.handleInvoke("benchmark:create-dataset-entry", async (e) => {
        try {
          return await this.createDatasetEntry(e);
        } catch (t) {
          return (
            console.error("Failed to create dataset entry:", t),
            {
              success: !1,
              error: t instanceof Error ? t.message : "Unknown error",
            }
          );
        }
      }),
      this.layers.handleInvoke("benchmark:get-test-cases", async (e) => {
        try {
          return { testCases: await this.fetchTestCases(e.category) };
        } catch (t) {
          return (
            console.error("Failed to fetch test cases:", t),
            { testCases: [] }
          );
        }
      }),
      this.layers.handleInvoke("benchmark:create-test-case", async (e) => {
        try {
          return await this.createTestCaseFromSession(e);
        } catch (t) {
          return (
            console.error("Failed to create test case:", t),
            {
              success: !1,
              error: t instanceof Error ? t.message : "Unknown error",
            }
          );
        }
      }),
      this.layers.handleInvoke("benchmark:run-test-case", async (e) => {
        try {
          return await this.runTestCaseWithCompanion(
            e.benchmarkId,
            e.companionId,
            e.useLocalApi,
            e.pinnedMemoryMode,
          );
        } catch (t) {
          return (
            console.error("Failed to run test case:", t),
            {
              success: !1,
              error: t instanceof Error ? t.message : "Unknown error",
            }
          );
        }
      }),
      this.layers.handleInvoke("benchmark:load-test-case", async (e) => {
        try {
          return await this.loadTestCaseChat(e.benchmarkId, e.companionId);
        } catch (t) {
          return (
            console.error("Failed to load test case chat:", t),
            {
              success: !1,
              error: t instanceof Error ? t.message : "Unknown error",
            }
          );
        }
      }));
  }
  getRunResults() {
    return this.runResults;
  }
  clearRunResults() {
    this.runResults = [];
  }
  getBenchmarkCompanionComparisonContext(e) {
    const t = e
      ? (this.chatSessionManager?.companionManager.resolveCompanionById(e) ??
        null)
      : (this.chatSessionManager?.companionManager.getCurrentSidebarCompanion() ??
        null);
    if (!t) throw new Error("Benchmark companion is unavailable");
    const a = W.createHash("sha256")
      .update(
        JSON.stringify([
          t.id,
          t.systemPrompt,
          t.memories,
          t.provider,
          t.agentSmartModel ?? null,
          t.agentFastModel ?? null,
          t.agentSmartReasoningEffort ?? null,
          t.agentFastReasoningEffort ?? null,
          t.defaultChatMode ?? null,
          t.effort,
          t.temperature ?? null,
          t.maxOutputTokens ?? null,
          Array.from(t.skillIds ?? []).sort(),
        ]),
      )
      .digest("hex");
    return {
      companionId: t.id,
      companionConfigurationHash: a,
      companionProvider: t.provider,
      agentSmartModel: t.agentSmartModel ?? null,
      agentFastModel: t.agentFastModel ?? null,
      agentSmartReasoningEffort: t.agentSmartReasoningEffort ?? null,
      agentFastReasoningEffort: t.agentFastReasoningEffort ?? null,
    };
  }
  setPendingSandboxTransport(e) {
    this._pendingSandboxTransport = e;
  }
  getLastSessionId() {
    return this._lastSessionId;
  }
  getLastSessionMessages() {
    return this._activeSession
      ? [...this._activeSession.messages]
      : this._lastSessionMessages;
  }
  async abortActiveBenchmark(e) {
    (console.warn(`[BenchmarkManager] Aborting active benchmark: ${e}`),
      (this.runQueue = []));
    const t = this._activeSession;
    t && (await t.stopGenerating());
  }
  addRunResult(e) {
    this.runResults.push(e);
  }
  async clearAllBrowsingData() {
    console.log("[BenchmarkManager] Clearing all browsing data...");
    try {
      const e = this.tabsService.profileService.getSession();
      (await e.clearStorageData({
        storages: [
          "cookies",
          "localstorage",
          "indexdb",
          "shadercache",
          "serviceworkers",
          "cachestorage",
        ],
      }),
        console.log(
          "[BenchmarkManager] Cleared storage data (cookies, localStorage, etc.)",
        ),
        await e.clearCache(),
        console.log("[BenchmarkManager] Cleared HTTP cache"),
        await e.clearHostResolverCache(),
        console.log("[BenchmarkManager] Cleared DNS cache"),
        console.log(
          "[BenchmarkManager] All browsing data cleared successfully",
        ));
    } catch (e) {
      console.error("[BenchmarkManager] Failed to clear browsing data:", e);
    }
  }
  async closeBenchmarkTabs() {
    const e = this.tabsService.getTabsState();
    console.log(`[BenchmarkManager] Cleaning up ${e.length} tabs`);
    for (const t of e)
      if (
        t.url !== "orbitra://newtab" &&
        !t.url.startsWith("orbitra://newtab")
      )
        try {
          this.tabsService.pages.close(t.id);
        } catch (a) {
          console.warn(`[BenchmarkManager] Failed to close tab ${t.id}:`, a);
        }
    console.log(
      `[BenchmarkManager] Tab cleanup complete. ${this.tabsService.getTabsState().length} tabs remaining`,
    );
  }
  async cleanupTabsForBenchmark() {
    (await this.runCleanupStep("clear browsing data", () =>
      this.clearAllBrowsingData(),
    ),
      await this.runCleanupStep("close benchmark tabs", () =>
        this.closeBenchmarkTabs(),
      ));
  }
  async runCleanupStep(e, t) {
    let a;
    try {
      await Promise.race([
        t(),
        new Promise((r, s) => {
          a = setTimeout(() => s(new Error(`${e} timed out after ${L}ms`)), L);
        }),
      ]);
    } catch (r) {
      console.warn(`[BenchmarkManager] Benchmark cleanup step failed: ${e}`, r);
    } finally {
      a && clearTimeout(a);
    }
  }
  async fetchBenchmarks(e) {
    try {
      const t = new URL(`${h.config.app.apiUrl}/api/benchmarks`);
      (e && t.searchParams.set("category", e),
        console.log(
          `[BenchmarkManager] Fetching benchmarks from: ${t.toString()}`,
        ));
      const a = await this.fetchWithRetry(t.toString());
      console.log(`[BenchmarkManager] Fetch response status: ${a.status}`);
      const r = await a.json();
      if (r && typeof r == "object" && "error" in r) {
        const s = r.error?.message || "Unknown error";
        return (
          console.error(`Failed to fetch benchmarks: ${s}`),
          console.error(
            "Note: The /api/benchmarks endpoint requires admin access",
          ),
          []
        );
      }
      return Array.isArray(r)
        ? ((this.benchmarks = r), this.benchmarks)
        : (console.error(
            "Unexpected response format from /api/benchmarks:",
            typeof r,
          ),
          []);
    } catch (t) {
      return (console.error("Failed to fetch benchmarks:", t), []);
    }
  }
  async fetchBenchmarkRuns() {
    const e = await this.fetchWithRetry(
      `${h.config.app.apiUrl}/api/benchmarks/runs`,
    );
    if (!e.ok)
      return (
        console.warn(
          `[BenchmarkManager] Failed to fetch benchmark runs: ${e.status}`,
        ),
        this.benchMarkRuns
      );
    const t = await e.json();
    return Array.isArray(t)
      ? ((this.benchMarkRuns = t), this.benchMarkRuns)
      : (console.warn(
          "[BenchmarkManager] Unexpected response shape for benchmark runs",
        ),
        this.benchMarkRuns);
  }
  async fetchRunById(e) {
    try {
      const t = await this.fetchWithRetry(
        `${h.config.app.apiUrl}/api/benchmarks/runs/${e}`,
      );
      return t.ok
        ? await t.json()
        : (console.error(`Failed to fetch run ${e}: ${t.status}`), null);
    } catch (t) {
      return (console.error("Failed to fetch benchmark run:", t), null);
    }
  }
  async fetchDatasets(e, t) {
    try {
      const a = new URL(`${h.config.app.apiUrl}/api/benchmarks/test-cases`);
      (e && a.searchParams.set("category", e),
        t && a.searchParams.set("type", t));
      const s = await (await this.fetchWithRetry(a.toString())).json();
      if (s && typeof s == "object" && "error" in s) {
        const i = s.error?.message || "Unknown error";
        return (console.error(`Failed to fetch datasets: ${i}`), []);
      }
      return Array.isArray(s)
        ? s
        : (console.error(
            "Unexpected response format from /api/benchmarks/test-cases:",
            typeof s,
          ),
          []);
    } catch (a) {
      return (console.error("Failed to fetch datasets:", a), []);
    }
  }
  async deleteDataset(e) {
    try {
      const a = await (
        await this.fetchWithRetry(
          `${h.config.app.apiUrl}/api/benchmarks/test-cases`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: e }),
          },
        )
      ).json();
      return a && typeof a == "object" && "error" in a
        ? { success: !1, error: a.error?.message || "Failed to delete dataset" }
        : { success: !0 };
    } catch (t) {
      return (
        console.error("Failed to delete dataset:", t),
        { success: !1, error: t instanceof Error ? t.message : "Unknown error" }
      );
    }
  }
  async runDataset(e, t, a, r, s) {
    try {
      const i = Math.max(1, Math.floor(r ?? 1)),
        n = await this.fetchDatasets(e);
      if (n.length === 0)
        return { success: !1, error: "No entries found in this dataset" };
      const c = n.flatMap((f) => Array.from({ length: i }, () => f.id)),
        l = await this.fetchWithRetry(
          `${h.config.app.apiUrl}/api/benchmarks/dataset-runs`,
          {
            method: "POST",
            body: JSON.stringify({
              dataset: e,
              benchmarkIds: c,
              name: `${e} - ${new Date().toLocaleString()}`,
            }),
          },
        );
      if (!l.ok)
        return {
          success: !1,
          error:
            (await l.json().catch(() => ({})))?.error?.message ||
            "Failed to create batch",
        };
      const m = (await l.json()).id;
      (console.log(
        `[BenchmarkManager] Starting dataset run "${e}" - batch ${m} with ${n.length} entries x ${i} copies (${c.length} total runs)`,
        a ? "(local API)" : "",
      ),
        (this._activeBatchId = m),
        this.updateBatchStatus(m, "running").catch((f) =>
          console.error(
            "[BenchmarkManager] Failed to update batch status to running:",
            f,
          ),
        ));
      for (const f of n)
        for (let u = 0; u < i; u++) {
          const k = {
            ...f,
            _isLocalRun: !0,
            _apiUrlOverride: a ? "http://localhost:3000" : void 0,
            _companionIdOverride: t,
            _pinnedMemoryModeOverride: s,
            _chatMode: "expert",
            _continueExistingSession: !!f.shared_chat_url,
          };
          this.runBenchmarkLocally(k);
        }
      return { success: !0, batchId: m };
    } catch (i) {
      return (
        console.error("Failed to run dataset:", i),
        { success: !1, error: i instanceof Error ? i.message : "Unknown error" }
      );
    }
  }
  async fetchDatasetRuns(e) {
    try {
      const t = new URL(`${h.config.app.apiUrl}/api/benchmarks/dataset-runs`);
      e && t.searchParams.set("dataset", e);
      const r = await (await this.fetchWithRetry(t.toString())).json();
      return r && typeof r == "object" && "error" in r
        ? (console.error("Failed to fetch dataset runs:", r.error?.message), [])
        : r.batches || [];
    } catch (t) {
      return (console.error("Failed to fetch dataset runs:", t), []);
    }
  }
  async updateBatchStatus(e, t) {
    await this.fetchWithRetry(
      `${h.config.app.apiUrl}/api/benchmarks/dataset-runs/${e}/status`,
      { method: "PATCH", body: JSON.stringify({ status: t }) },
    );
  }
  async fetchTestCases(e) {
    try {
      const t = new URL(`${h.config.app.apiUrl}/api/benchmarks/test-cases`);
      e && t.searchParams.set("category", e);
      const r = await (await this.fetchWithRetry(t.toString())).json();
      if (r && typeof r == "object" && "error" in r) {
        const s = r.error?.message || "Unknown error";
        return (console.error(`Failed to fetch test cases: ${s}`), []);
      }
      return Array.isArray(r)
        ? r
        : (console.error(
            "Unexpected response format from /api/benchmarks/test-cases:",
            typeof r,
          ),
          []);
    } catch (t) {
      return (console.error("Failed to fetch test cases:", t), []);
    }
  }
  async fetchTemplates(e) {
    try {
      const t = new URL(`${h.config.app.apiUrl}/api/benchmarks/templates`);
      e && t.searchParams.set("category", e);
      const r = await (await this.fetchWithRetry(t.toString())).json();
      if (r && typeof r == "object" && "error" in r) {
        const s = r.error?.message || "Unknown error";
        return (console.error(`Failed to fetch templates: ${s}`), []);
      }
      return Array.isArray(r)
        ? r
        : (console.error(
            "Unexpected response format from /api/benchmarks/templates:",
            typeof r,
          ),
          []);
    } catch (t) {
      return (console.error("Failed to fetch templates:", t), []);
    }
  }
  async runTemplateWithPrompt(e, t, a, r, s) {
    const n = (await this.fetchTemplates()).find((d) => d.id === e);
    if (!n) return { success: !1, error: "Template not found" };
    if (!n.shared_chat_url)
      return { success: !1, error: "Template has no shared chat URL" };
    const c = { ...n, task: t, is_template: !1 };
    (console.log(
      "[BenchmarkManager] Running template locally:",
      n.title,
      e,
      r ? "(local API)" : "",
    ),
      (this.currentTemplateRun = {
        templateId: e,
        templateTitle: n.title || "Untitled",
        benchmarkId: n.id,
        status: "queued",
      }),
      this.emitTemplateRunState());
    const l = {
      ...c,
      _isLocalRun: !0,
      _apiUrlOverride: r ? "http://localhost:3000" : void 0,
      _companionIdOverride: a,
      _pinnedMemoryModeOverride: s,
      _chatMode: "expert",
    };
    return (this.runBenchmarkLocally(l, e), { success: !0 });
  }
  emitTemplateRunState() {
    this.currentTemplateRun &&
      this.layers.sendEventToRenderer("benchmark:template-run-state", {
        templateId: this.currentTemplateRun.templateId,
        templateTitle: this.currentTemplateRun.templateTitle,
        status: this.currentTemplateRun.status,
        runId: this.currentTemplateRun.runId,
        sessionId: this.currentTemplateRun.sessionId,
        error: this.currentTemplateRun.error,
      });
  }
  updateTemplateRunStatus(e, t) {
    this.currentTemplateRun &&
      ((this.currentTemplateRun.status = e),
      t?.runId && (this.currentTemplateRun.runId = t.runId),
      t?.sessionId && (this.currentTemplateRun.sessionId = t.sessionId),
      t?.error && (this.currentTemplateRun.error = t.error),
      this.emitTemplateRunState());
  }
  async runBenchmarkById(e, t) {
    try {
      if (
        t?.creditLimit !== void 0 &&
        (!Number.isFinite(t.creditLimit) || t.creditLimit <= 0)
      )
        return { success: !1, error: "Credit limit must be greater than zero" };
      const a = await this.fetchWithRetry(
        `${h.config.app.apiUrl}/api/benchmarks?id=${e}`,
      );
      if (!a.ok) return { success: !1, error: "Failed to fetch benchmark" };
      const r = await a.json();
      if (!r || r.error)
        return {
          success: !1,
          error: r?.error?.message || "Benchmark not found",
        };
      console.log(
        "[BenchmarkManager] Running benchmark locally:",
        r.title,
        r.id,
      );
      const s = {
        ...r,
        _isLocalRun: !0,
        _companionIdOverride: t?.companionId,
        _pinnedMemoryModeOverride: t?.pinnedMemoryMode,
        _creditLimitOverride: t?.creditLimit,
        _batchIdOverride: t?.batchId,
      };
      return (this.runBenchmarkLocally(s), { success: !0 });
    } catch (a) {
      return (
        console.error("Failed to run benchmark:", a),
        { success: !1, error: a instanceof Error ? a.message : "Unknown error" }
      );
    }
  }
  async runPackage(e) {
    if (!h.config.app.isDev)
      return {
        success: !1,
        error: "Package runs are only available in dev mode",
      };
    try {
      const t = await this.resolveCurrentCommitSha();
      if (!t)
        return {
          success: !1,
          error: "Could not resolve the current git commit",
        };
      const a = await this.fetchWithRetry(
        `${h.config.app.apiUrl}/api/benchmarks/packages`,
      );
      if (!a.ok)
        return { success: !1, error: "Failed to load benchmark packages" };
      const r = (await a.json()).find((n) => n.id === e);
      if (!r) return { success: !1, error: "Benchmark package not found" };
      if (r.benchmarkIds.length === 0)
        return { success: !1, error: "Benchmark package has no benchmarks" };
      const s = await this.fetchWithRetry(
        `${h.config.app.apiUrl}/api/benchmarks/batches/create`,
        {
          method: "POST",
          body: JSON.stringify({
            branch: "dev",
            commitSha: t,
            packageId: r.id,
            benchmarkIds: r.benchmarkIds,
          }),
        },
      );
      if (!s.ok)
        return { success: !1, error: "Failed to create benchmark batch" };
      const i = await s.json();
      for (const n of r.benchmarkIds) {
        const c = await h.benchmarkRunLauncher.launch(n, r.name, {
          batchId: i.id,
        });
        if (!c.success)
          return {
            success: !1,
            error: c.error ?? "Failed to launch a package benchmark",
            batchId: i.id,
          };
      }
      return { success: !0, batchId: i.id };
    } catch (t) {
      return (
        console.error("[BenchmarkManager] Failed to run package:", t),
        { success: !1, error: t instanceof Error ? t.message : "Unknown error" }
      );
    }
  }
  async resolveCurrentCommitSha() {
    try {
      const { stdout: e } = await Ce("git", ["rev-parse", "HEAD"], {
          timeout: 5e3,
        }),
        t = e.trim();
      return t.length > 0 ? t : void 0;
    } catch (e) {
      console.error("[BenchmarkManager] Failed to resolve commit sha:", e);
      return;
    }
  }
  runBenchmarkLocally(e, t) {
    if (e.builds_on_task) {
      const r = e.builds_on_task;
      if ([...this.activeLocalRuns.values()].includes(r)) {
        (console.log(
          `[BenchmarkManager] Deferring "${e.title}" - waiting for parent benchmark to complete`,
        ),
          this.deferredLocalRuns.push(e));
        return;
      }
      if (this.localRunQueue.some((s) => s.id === r)) {
        (console.log(
          `[BenchmarkManager] Deferring "${e.title}" - parent benchmark is queued`,
        ),
          this.deferredLocalRuns.push(e));
        return;
      }
    }
    if (this.activeLocalRuns.size >= this.MAX_CONCURRENT_LOCAL_RUNS) {
      (console.log(
        `[BenchmarkManager] Local run queued (${this.activeLocalRuns.size}/${this.MAX_CONCURRENT_LOCAL_RUNS} active): ${e.title}`,
      ),
        this.localRunQueue.push(e));
      return;
    }
    const a = crypto.randomUUID();
    (this.activeLocalRuns.set(a, e.id),
      console.log(
        `[BenchmarkManager] Starting local run (${this.activeLocalRuns.size}/${this.MAX_CONCURRENT_LOCAL_RUNS}): ${e.title}`,
      ),
      t &&
        this.currentTemplateRun?.templateId === t &&
        this.updateTemplateRunStatus("running"),
      this.executeLocalBenchmark(e)
        .then((r) => {
          t &&
            this.currentTemplateRun?.templateId === t &&
            this.updateTemplateRunStatus("completed", { runId: r });
        })
        .catch((r) => {
          (console.error(`[BenchmarkManager] Local run failed: ${e.title}`, r),
            t &&
              this.currentTemplateRun?.templateId === t &&
              this.updateTemplateRunStatus("failed", {
                error: r instanceof Error ? r.message : "Unknown error",
              }));
        })
        .finally(() => {
          if (
            (this.activeLocalRuns.delete(a),
            this.completedLocalRuns.add(e.id),
            console.log(
              `[BenchmarkManager] Local run completed (${this.activeLocalRuns.size}/${this.MAX_CONCURRENT_LOCAL_RUNS} active): ${e.title}`,
            ),
            this.processDeferredRuns(e.id),
            this.processLocalQueue(),
            this._activeBatchId &&
              this.activeLocalRuns.size === 0 &&
              this.localRunQueue.length === 0 &&
              this.deferredLocalRuns.length === 0)
          ) {
            const r = this._activeBatchId;
            ((this._activeBatchId = void 0),
              console.log(`[BenchmarkManager] Dataset batch ${r} completed`),
              this.updateBatchStatus(r, "completed").catch((s) =>
                console.error(
                  "[BenchmarkManager] Failed to update batch status:",
                  s,
                ),
              ),
              this.layers.sendEventToRenderer(
                "benchmark:dataset-run-completed",
                { batchId: r },
              ));
          }
        }));
  }
  processDeferredRuns(e) {
    const t = [],
      a = [];
    for (const r of this.deferredLocalRuns)
      r.builds_on_task === e ? t.push(r) : a.push(r);
    this.deferredLocalRuns = a;
    for (const r of t)
      (console.log(
        `[BenchmarkManager] Parent completed, now running: ${r.title}`,
      ),
        this.runBenchmarkLocally(r));
  }
  processLocalQueue() {
    if (
      this.localRunQueue.length === 0 ||
      this.activeLocalRuns.size >= this.MAX_CONCURRENT_LOCAL_RUNS
    )
      return;
    const e = this.localRunQueue.shift();
    (console.log(
      `[BenchmarkManager] Dequeuing local run (${this.localRunQueue.length} remaining): ${e.title}`,
    ),
      this.runBenchmarkLocally(e));
  }
  async executeLocalBenchmark(e) {
    return await this.executeBenchmark(e, { skipCleanup: !0 });
  }
  async createDatasetEntry(e) {
    if (!this.chatSessionManager)
      return { success: !1, error: "ChatSessionManager not available" };
    try {
      let t;
      if (e.cutOffMessageId) {
        const n = await y.uploadTruncatedChatSession(this.chatSessionManager, {
          sessionId: e.sessionId,
          upToMessageId: e.cutOffMessageId,
          makePublic: !e.isPrivate,
        });
        if (!n.success || !n.sharedChatId)
          return {
            success: !1,
            error: n.error || "Failed to upload truncated session",
          };
        t = n.sharedChatId;
      } else {
        const n = await y.uploadChatSession(this.chatSessionManager, {
          sessionId: e.sessionId,
          makePublic: !e.isPrivate,
        });
        if (!n.success || !n.sharedChatId)
          return { success: !1, error: n.error || "Failed to upload session" };
        t = n.sharedChatId;
      }
      const a = `orbitra://shared-chat/${t}`,
        r = !e.cutOffMessageId,
        s = await this.fetchWithRetry(
          `${h.config.app.apiUrl}/api/benchmarks/test-cases`,
          {
            method: "POST",
            body: JSON.stringify({
              title: e.title,
              category: e.dataset,
              expected: e.expected || null,
              sharedChatUrl: a,
              task: e.description || e.title,
              isPrivate: e.isPrivate ?? !1,
              isTemplate: r,
            }),
          },
        );
      if (!s.ok)
        return {
          success: !1,
          error:
            (await s.json().catch(() => ({})))?.error?.message ||
            "Failed to create dataset entry",
        };
      const i = await s.json();
      return (
        this.benchmarks.push(i),
        console.log(
          `[BenchmarkManager] Created dataset entry "${e.title}" in dataset "${e.dataset}"${e.cutOffMessageId ? ` (cut-off: ${e.cutOffMessageId})` : " (all messages)"}`,
        ),
        { success: !0, benchmarkId: i.id, sharedChatId: t }
      );
    } catch (t) {
      return (
        console.error("Failed to create dataset entry:", t),
        { success: !1, error: t instanceof Error ? t.message : "Unknown error" }
      );
    }
  }
  async createTemplateFromSession(e, t, a, r, s) {
    if (!this.chatSessionManager)
      return { success: !1, error: "ChatSessionManager not available" };
    try {
      const i = await y.uploadChatSession(this.chatSessionManager, {
        sessionId: e,
        makePublic: !s,
      });
      if (!i.success || !i.sharedChatId)
        return { success: !1, error: i.error || "Failed to share session" };
      const n = `orbitra://shared-chat/${i.sharedChatId}`,
        c = await this.fetchWithRetry(
          `${h.config.app.apiUrl}/api/benchmarks/templates`,
          {
            method: "POST",
            body: JSON.stringify({
              title: t,
              category: a,
              description: r,
              sharedChatUrl: n,
              isPrivate: s ?? !1,
            }),
          },
        );
      return c.ok
        ? { success: !0, templateId: (await c.json()).id }
        : {
            success: !1,
            error:
              (await c.json().catch(() => ({})))?.error?.message ||
              "Failed to create template",
          };
    } catch (i) {
      return (
        console.error("Failed to create template:", i),
        { success: !1, error: i instanceof Error ? i.message : "Unknown error" }
      );
    }
  }
  async createTestCaseFromSession(e) {
    if (!this.chatSessionManager)
      return { success: !1, error: "ChatSessionManager not available" };
    const t = await y.uploadTruncatedChatSession(this.chatSessionManager, {
      sessionId: e.sessionId,
      upToMessageId: e.cutOffMessageId,
      makePublic: !e.isPrivate,
    });
    if (!t.success || !t.sharedChatId)
      return {
        success: !1,
        error: t.error || "Failed to upload truncated session",
      };
    const a = `orbitra://shared-chat/${t.sharedChatId}`,
      r = await this.fetchWithRetry(
        `${h.config.app.apiUrl}/api/benchmarks/test-cases`,
        {
          method: "POST",
          body: JSON.stringify({
            title: e.title,
            category: e.category,
            expected: e.expected,
            sharedChatUrl: a,
            task: e.description || e.title,
            isPrivate: e.isPrivate ?? !1,
          }),
        },
      );
    if (!r.ok)
      return {
        success: !1,
        error:
          (await r.json().catch(() => ({})))?.error?.message ||
          "Failed to create test case",
      };
    const s = await r.json();
    return (
      this.benchmarks.push(s),
      console.log(
        `[BenchmarkManager] Created test case "${e.title}" with ${e.cutOffMessageId} cut-off`,
      ),
      { success: !0, benchmarkId: s.id, sharedChatId: t.sharedChatId }
    );
  }
  async runTestCaseWithCompanion(e, t, a, r) {
    const s = await this.fetchWithRetry(
      `${h.config.app.apiUrl}/api/benchmarks?id=${e}`,
    );
    if (!s.ok) return { success: !1, error: "Failed to fetch benchmark" };
    const i = await s.json();
    if (!i || !i.shared_chat_url)
      return {
        success: !1,
        error: "Benchmark not found or has no shared chat",
      };
    const n = this.extractSharedChatId(i.shared_chat_url);
    if (!n) return { success: !1, error: "Could not extract shared chat ID" };
    const c = await y.importSharedChat(this.chatService, { sharedChatId: n });
    if (!c.success)
      return { success: !1, error: "Failed to download shared chat session" };
    const l = await this.chatService.ensureSessionLoaded(c.localSessionId);
    (await this.chatService.chatSessionManager.setSessionCompanion(l, t),
      (l.benchmarkId = e),
      await l.save(),
      console.log(
        `[BenchmarkManager] Running test case "${i.title}" with companion ${t}`,
        a ? "(local API)" : "",
      ));
    const d = {
      ...i,
      _isLocalRun: !0,
      _apiUrlOverride: a ? "http://localhost:3000" : void 0,
      _companionIdOverride: t,
      _pinnedMemoryModeOverride: r,
      _chatMode: "expert",
      _continueExistingSession: !!i.shared_chat_url,
    };
    return (
      this.runBenchmarkLocally(d),
      { success: !0, sessionId: c.localSessionId }
    );
  }
  async loadTestCaseChat(e, t) {
    const a = await this.fetchWithRetry(
      `${h.config.app.apiUrl}/api/benchmarks?id=${e}`,
    );
    if (!a.ok) return { success: !1, error: "Failed to fetch benchmark" };
    const r = await a.json();
    if (!r || !r.shared_chat_url)
      return {
        success: !1,
        error: "Benchmark not found or has no shared chat",
      };
    const s = this.extractSharedChatId(r.shared_chat_url);
    if (!s) return { success: !1, error: "Could not extract shared chat ID" };
    const i = await y.importSharedChat(this.chatService, { sharedChatId: s });
    if (!i.success)
      return {
        success: !1,
        error: `Failed to download shared chat session: ${i.error}`,
      };
    const n = await this.chatService.ensureSessionLoaded(i.localSessionId);
    return (
      await this.chatService.chatSessionManager.setSessionCompanion(n, t),
      (n.benchmarkId = e),
      await n.save(),
      console.log(
        `[BenchmarkManager] Loaded test case chat "${r.title}" into new session ${n.id} with companion ${t} (no turn started)`,
      ),
      { success: !0, sessionId: n.id }
    );
  }
  async uploadBenchmark(e) {
    const a = await (
      await this.fetchWithRetry(
        `${h.config.app.apiUrl}/api/benchmarks/upload`,
        { method: "POST", body: JSON.stringify(e) },
      )
    ).json();
    return (this.benchmarks.push(a), a);
  }
  async startBenchmarkRun(e, t) {
    const r = await (
      await this.fetchWithRetry(
        `${h.config.app.apiUrl}/api/benchmarks/runs/start`,
        {
          method: "POST",
          body: JSON.stringify({ benchmarkId: e.id, sessionId: t.id }),
        },
      )
    ).json();
    return (this.benchMarkRuns.unshift(r), r);
  }
  addToQueue(e) {
    return (
      this.runQueue.push(...e),
      console.log(
        `Added ${e.length} tasks to queue. Queue length: ${this.runQueue.length}`,
      ),
      this.isProcessingQueue
        ? new Promise((t) => {
            const a = setInterval(() => {
              !this.isProcessingQueue &&
                this.runQueue.length === 0 &&
                (clearInterval(a), t());
            }, 1e3);
          })
        : this.processQueue()
    );
  }
  groupBenchmarksByCategory(e) {
    const t = new Map();
    for (const a of e) {
      const r = a.category || "uncategorized",
        s = t.get(r) || [];
      (s.push(a), t.set(r, s));
    }
    return t;
  }
  async processCategoryQueue(e, t) {
    console.log(
      `[BenchmarkManager] [${e}] Starting queue with ${t.length} benchmarks`,
    );
    for (let a = 0; a < t.length; a++) {
      const r = t[a];
      console.log(
        `[BenchmarkManager] [${e}] Running ${a + 1}/${t.length}: ${r.title}`,
      );
      try {
        (await this.startBenchmarkRunViaAPI(r),
          console.log(
            `[BenchmarkManager] [${e}] Completed ${a + 1}/${t.length}: ${r.title}`,
          ));
      } catch (s) {
        console.error(
          `[BenchmarkManager] [${e}] Failed ${a + 1}/${t.length}: ${r.title}`,
          s,
        );
      }
    }
    console.log(`[BenchmarkManager] [${e}] Queue complete`);
  }
  async processQueue() {
    if (this.isProcessingQueue || this.runQueue.length === 0) return;
    ((this.isProcessingQueue = !0),
      console.log(
        "[BenchmarkManager] Starting queue processing with parallel category queues...",
      ));
    const e = this.groupBenchmarksByCategory(this.runQueue);
    this.runQueue = [];
    const t = Array.from(e.keys());
    (console.log(
      `[BenchmarkManager] Found ${t.length} parallel category queues:`,
    ),
      t.forEach((r) => {
        const s = e.get(r)?.length || 0;
        console.log(`[BenchmarkManager]   - ${r}: ${s} benchmarks`);
      }));
    const a = t.map((r) => {
      const s = e.get(r) || [];
      return this.processCategoryQueue(r, s);
    });
    (await Promise.allSettled(a),
      (this.isProcessingQueue = !1),
      console.log("[BenchmarkManager] All category queues completed"),
      this.layers.sendEventToRenderer("benchmark:queue-completed", {}));
  }
  getLatestRunForBenchmark(e) {
    const t = this.benchMarkRuns.filter((r) => r.benchmark_id === e);
    if (t.length === 0) return null;
    const a = (r) =>
      r.completed_at
        ? new Date(r.completed_at).getTime()
        : r.started_at
          ? new Date(r.started_at).getTime()
          : new Date(r.created_at).getTime();
    return t.slice().sort((r, s) => a(s) - a(r))[0];
  }
  getCheckpointMessageId(e) {
    return e.checkpoint_message_id ?? null;
  }
  extractSharedChatId(e) {
    if (!e) return null;
    const t = e.match(/^orbitra:\/\/shared-chat\/([a-f0-9-]+)$/i);
    if (t) return t[1];
    const a = e.match(/shared[-/]chat\/([a-f0-9-]+)$/i);
    if (a) return a[1];
    const r = e.match(
      /([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$/i,
    );
    return r ? r[1] : null;
  }
  getUserMessageText(e) {
    if (typeof e.content != "string") return null;
    const t = e.content.match(/^<user_message>([\s\S]*)<\/user_message>$/);
    return t ? t[1] : e.content;
  }
  findLastUserMessageAfterCheckpoint(e, t) {
    const a = e.messages.findIndex((r) => r.id === t);
    if (a === -1) return null;
    for (let r = e.messages.length - 1; r > a; r--) {
      const s = e.messages[r];
      if (s.role === "user") return s;
    }
    return null;
  }
  async startBenchmarkRunViaAPI(e) {
    await this.executeBenchmark(e, { skipCleanup: !1 });
  }
  async executeBenchmark(e, t) {
    if (!this.chatSessionManager)
      throw new Error(
        "ChatSessionManager not available for benchmark execution",
      );
    const a = !!e.directory_url?.trim();
    return await he(this.chatSessionManager.filePaths.synced.root).run(
      a,
      async () => await this.executeBenchmarkAfterFilesystemAccess(e, t),
    );
  }
  async executeBenchmarkAfterFilesystemAccess(e, t) {
    const a = Date.now(),
      { skipCleanup: r } = t,
      s = r ? "[Local]" : "";
    let i,
      n,
      c,
      l,
      d = "completed",
      m;
    const f = new Be(e, r, this.accountId);
    f.start();
    try {
      (r || (await this.cleanupTabsForBenchmark()),
        await this.initializeBenchmarkDirectory(e));
      const u = await this.setupBenchmarkSession(e);
      ((n = u.session),
        (this._activeSession = n),
        (this._lastSessionId = n.id),
        f.setSessionId(n.id));
      const k = u.followupMessageText;
      n.setBenchmarkMode(!0);
      const v =
        "_pinnedMemoryModeOverride" in e ? e._pinnedMemoryModeOverride : void 0;
      if ((n.setMemoryEnabled(_e(e, v)), this._pendingSandboxTransport)) {
        const w = new h.LocalSandbox(this._pendingSandboxTransport, n.id);
        (h.localSandboxManager.setOverride(n.id, w),
          (this._pendingSandboxTransport = null));
      }
      if (
        ("_apiUrlOverride" in e &&
          e._apiUrlOverride &&
          ((n.apiUrlOverride = e._apiUrlOverride),
          console.log(
            `[BenchmarkManager] ${s} Using API override: ${e._apiUrlOverride}`,
          )),
        "_companionIdOverride" in e &&
          e._companionIdOverride &&
          (await this.chatService.chatSessionManager.setSessionCompanion(
            n,
            e._companionIdOverride,
          ),
          console.log(
            `[BenchmarkManager] ${s} Using companion override: ${e._companionIdOverride}`,
          )),
        console.log(
          `[BenchmarkManager] ${s} Enabled benchmark mode for session ${n.id}`,
        ),
        this.currentTemplateRun &&
          this.currentTemplateRun.benchmarkId === e.id &&
          ((this.currentTemplateRun.sessionId = n.id),
          this.emitTemplateRunState()),
        (c = await this.registerBenchmarkRun(e, n.id)),
        (i = c?.id),
        f.setRunId(i),
        n && this.chatService && this.chatSessionManager)
      ) {
        const w = n,
          R = "_creditLimitOverride" in e ? e._creditLimitOverride : void 0,
          S = new ae(),
          C = Date.now();
        let $ = !1;
        S.begin(w.totalCredits);
        try {
          R === void 0
            ? await this.runBenchmarkChat(e, w, k, s)
            : await re(
                {
                  run: () => this.runBenchmarkChat(e, w, k, s),
                  abort: () => w.stopGenerating(),
                  getActiveCreditsUsed: () => S.measureActive(w.totalCredits),
                },
                R,
              );
        } catch (q) {
          throw (($ = q instanceof D), q);
        } finally {
          ((l = {
            measurementStartedAt: C,
            executionDurationMs: Date.now() - C,
            taskCredits: S.measure(w.totalCredits),
            creditCapped: $,
          }),
            S.finish());
        }
        ((this._lastSessionMessages = [...n.messages]),
          e.eval_config?.type === "gdpval" &&
            (console.log(`[BenchmarkManager] ${s} GDPval session completed`),
            console.log(`[BenchmarkManager] ${s} Session ID: ${n.id}`),
            console.log(
              `[BenchmarkManager] ${s} Grade with: pnpm eval:grade:gdpval --session ~/Orbitra-Dev/<profile>/sessions/${n.id} --benchmark ${e.id}`,
            )),
          await this.evaluateAndRecordResult(e, c, n, a, l));
      }
      return i;
    } catch (u) {
      if (
        ((d = "failed"),
        (m = u instanceof Error ? u.message : "Unknown error"),
        n && (this._lastSessionMessages = [...n.messages]),
        c && u instanceof y.BenchmarkCloudTurnError)
      )
        await this.markBenchmarkRunFailed(c, "execution_failed");
      else if (n && c)
        try {
          (console.log(
            `[BenchmarkManager] ${s} Recording partial results after error...`,
          ),
            await this.evaluateAndRecordResult(e, c, n, a, l));
        } catch (k) {
          (console.warn(
            `[BenchmarkManager] ${s} Failed to record partial results:`,
            k,
          ),
            await this.markBenchmarkRunFailed(c, "evaluation_failed"));
        }
      throw (
        this.addRunResult({
          benchmarkId: e.id,
          title: e.title,
          passed: !1,
          score: null,
          durationMs: Date.now() - a,
          error: u instanceof Error ? u.message : "Unknown error",
        }),
        console.error(
          `[BenchmarkManager] ${s} Failed to execute benchmark:`,
          u,
        ),
        u
      );
    } finally {
      (n &&
        (h.localSandboxManager.removeOverride(n.id),
        await h.localSandboxManager.destroy(n.id)),
        (this._activeSession = null),
        console.log(
          `[BenchmarkManager] Closing tabs after benchmark: ${e.title}`,
        ),
        await this.runCleanupStep("close benchmark tabs", () =>
          this.closeBenchmarkTabs(),
        ),
        r ||
          (await this.runCleanupStep("clear browsing data", () =>
            this.clearAllBrowsingData(),
          )),
        await f.finish(d, m).catch((u) => {
          console.warn(
            "[BenchmarkManager] Failed to upload benchmark harness log:",
            u,
          );
        }));
    }
  }
  async initializeBenchmarkDirectory(e) {
    const t = e.directory_url?.trim();
    if (!t) return;
    if (!this.chatSessionManager)
      throw new Error(
        "ChatSessionManager not available for benchmark directory initialization",
      );
    const a = await le(t, {
      resolvePresignedUrl: (r) => this.resolveBenchmarkDirectoryDownloadUrl(r),
    });
    try {
      await ie(a.directoryUrl, this.chatSessionManager.filePaths.synced.root);
    } finally {
      await a.cleanup();
    }
    console.log(
      "[BenchmarkManager] Replaced SyncFS root from benchmark directory",
    );
  }
  async resolveBenchmarkDirectoryDownloadUrl(e) {
    const t = await this.fetchWithRetry(
      `${h.config.app.apiUrl}/api/admin/benchmarks/directory-download-url?storedUrl=${encodeURIComponent(e)}`,
    );
    if (!t.ok)
      throw new Error(`Failed to resolve benchmark directory (${t.status})`);
    const a = await t.json();
    if (!a.url) throw new Error("Benchmark directory download URL missing");
    return a.url;
  }
  async setupBenchmarkSession(e) {
    let t = null,
      a;
    const r = e.shared_chat_url
      ? this.extractSharedChatId(e.shared_chat_url)
      : null;
    if (r) {
      const s = await y.importSharedChat(this.chatService, { sharedChatId: r });
      if (!s.success) throw new Error(`Failed to download shared chat: ${r}`);
      ((a = await this.chatService.ensureSessionLoaded(s.localSessionId)),
        a.setBenchmarkId(e.id),
        await a.save());
    } else if (e.builds_on_task) {
      if (!this.chatSessionManager)
        throw new Error(
          "ChatSessionManager not available for benchmark chaining",
        );
      await this.fetchBenchmarkRuns();
      const s = this.getLatestRunForBenchmark(e.builds_on_task),
        i = s?.session_id ?? null,
        n = i
          ? await this.chatSessionManager.getCompleteLoadedSession(i)
          : await this.chatSessionManager.getLatestSessionByBenchmarkId(
              e.builds_on_task,
            );
      if (!n)
        throw new Error(
          `No prior session found for buildsOnTask: ${e.builds_on_task}`,
        );
      const c = s ? this.getCheckpointMessageId(s) : null;
      if (c) {
        const l = this.findLastUserMessageAfterCheckpoint(n, c);
        ((t = l ? this.getUserMessageText(l) : null),
          (await n.truncateAfterMessage(c)) && (await n.save()));
      }
      (n.benchmarkId !== e.id && (n.setBenchmarkId(e.id), await n.save()),
        (a = await this.chatService.ensureSessionLoaded(n.id)));
    } else
      ((a = await this.chatService.createNewSession()),
        (a.benchmarkId = e.id),
        await a.save());
    return { session: a, followupMessageText: t };
  }
  async registerBenchmarkRun(e, t) {
    try {
      const r =
          ("_batchIdOverride" in e && typeof e._batchIdOverride == "string"
            ? e._batchIdOverride
            : void 0) ||
          this._activeBatchId ||
          process.env.BENCHMARK_BATCH_ID,
        s = await this.fetchWithRetry(
          `${h.config.app.apiUrl}/api/benchmarks/runs/start`,
          {
            method: "POST",
            body: JSON.stringify({
              benchmarkId: e.id,
              sessionId: t,
              batchId: r || void 0,
            }),
          },
        );
      if (!s.ok) throw new Error(`Failed to start benchmark: ${s.statusText}`);
      const i = await s.json();
      return (
        this.benchMarkRuns.unshift(i),
        this.layers.sendEventToRenderer("benchmark:run-status-updated", i),
        i
      );
    } catch (a) {
      console.warn(
        "[BenchmarkManager] Benchmark run start API failed; proceeding locally.",
        a,
      );
      return;
    }
  }
  async runBenchmarkChat(e, t, a, r) {
    const s =
        t.getCompanionId() ||
        this.chatSessionManager.companionManager.getCurrentSidebarCompanion()
          .id,
      i = t.id,
      n = await this.createStartTabs(e, i);
    if (n.length > 0) {
      const u = await this.chatService.getDraftController(i);
      await Promise.all(n.map((k) => u.addTab(k.getState(), !1)));
    }
    const c = e.start_attachment_urls || [],
      l = [];
    if (c.length > 0) {
      const u = this.chatSessionManager.filePaths.synced.sessionUploads(i);
      await g.mkdir(u, { recursive: !0 });
      const k = await Promise.allSettled(
        c.map(async (v) => {
          const { filename: w, hostPath: R } =
              await this.downloadRefFileOnly(v),
            S = b.join(u, w);
          return (await g.copyFile(R, S), y.buildBenchmarkAttachmentPath(w));
        }),
      );
      for (let v = 0; v < k.length; v++) {
        const w = k[v];
        w.status === "fulfilled"
          ? (l.push(w.value),
            console.log(
              `[BenchmarkManager] ${r} Mounted ref file in sandbox: ${w.value}`,
            ))
          : console.error(
              `[BenchmarkManager] ${r} Failed to mount ref file ${c[v]}:`,
              w.reason,
            );
      }
      await new Promise((v) => setTimeout(v, 1e3));
    }
    const d = te(e.eval_config);
    let m;
    "_continueExistingSession" in e && e._continueExistingSession && !a?.trim()
      ? (m = "")
      : a?.trim()
        ? (m = a.trim())
        : (m = y.buildBenchmarkPrompt({
            task: e.task,
            sandboxAttachmentPaths: l,
            allowClarifyingQuestions: d !== null,
          }));
    const f = async (u) => {
      const k = Date.now(),
        v = {
          message: u,
          companionId: s,
          attachmentContext: [],
          attachedTabs: n.map((S) => ({ ...S.getState(), manuallyAdded: !1 })),
          attachedWindows: [],
          selections: [],
          autoTrackedTabId: void 0,
          startTime: Date.now(),
          chatMode: "_chatMode" in e ? (e._chatMode ?? "expert") : "expert",
        },
        w = await this.chatService.getOrCreateSessionCoordinator(i),
        R = t.apiUrlOverride ?? h.config.app.apiUrl;
      await y.runBenchmarkCloudTurn({
        waitForTerminalEvent: () => w.waitForNextCloudTerminalEvent(A),
        submitTurn: async () => {
          await this.chatService.handleChatCompletion(v, i, k);
        },
        waitForTreeQuiescent: () =>
          y.waitForBenchmarkTreeQuiescent({
            fetchRootPhase: () =>
              this.fetchSessionPhase(
                R,
                i,
                this.chatSessionManager.getProfileId(),
              ),
            sleep: (S) => new Promise((C) => setTimeout(C, S)),
            now: () => Date.now(),
            timeoutMs: A,
            pollIntervalMs: Te,
          }),
        reloadFinalMessages: () => w.reloadCloudTail(0),
      });
    };
    if (d) {
      await y.runInteractiveBenchmarkConversation({
        accountId: this.accountId,
        initialMessage: m,
        taskText: e.task || e.title,
        interaction: d.interaction,
        getMessages: () => t.messages,
        sendUserMessage: f,
      });
      return;
    }
    await f(m);
  }
  async evaluateAndRecordResult(e, t, a, r, s) {
    const i = s?.executionDurationMs ?? Date.now() - r;
    if (!t) {
      this.addRunResult({
        benchmarkId: e.id,
        title: e.title,
        passed: !1,
        score: null,
        durationMs: i,
        error: "Failed to create benchmark run",
      });
      return;
    }
    const n = await this.evaluateBenchmarkTest(t, a, s, e);
    if (n) {
      ((this.benchMarkRuns = this.benchMarkRuns.map((m) =>
        m.id === t.id ? n : m,
      )),
        this.layers.sendEventToRenderer("benchmark:run-status-updated", n));
      const c = n.passed === !0 || n.evaluation === "Passed",
        l = n.session_cost ?? null,
        d = n.eval_cost ?? null;
      this.addRunResult({
        benchmarkId: e.id,
        runId: n.id,
        title: e.title,
        passed: c,
        score: n.score ?? null,
        durationMs: i,
        sessionCost: l,
        evalCost: d,
        totalCost: l !== null || d !== null ? (l ?? 0) + (d ?? 0) : null,
      });
    } else
      (await this.markBenchmarkRunFailed(t, "evaluation_failed"),
        this.addRunResult({
          benchmarkId: e.id,
          title: e.title,
          passed: !1,
          score: null,
          durationMs: i,
          error: "Evaluation failed",
        }));
  }
  async markBenchmarkRunFailed(e, t) {
    try {
      const a = await this.fetchWithRetry(
        `${h.config.app.apiUrl}/api/benchmarks/runs/fail`,
        { method: "POST", body: JSON.stringify({ runId: e.id, reason: t }) },
      );
      if (!a.ok) {
        console.warn(
          `[BenchmarkManager] Failed to mark benchmark run ${e.id} as failed: ${a.status}`,
        );
        return;
      }
      const r = await a.json(),
        s = { ...e, ...r };
      ((this.benchMarkRuns = this.benchMarkRuns.map((i) =>
        i.id === e.id ? s : i,
      )),
        this.layers.sendEventToRenderer("benchmark:run-status-updated", s));
    } catch (a) {
      console.warn(
        `[BenchmarkManager] Failed to mark benchmark run ${e.id} as failed:`,
        a,
      );
    }
  }
  async fetchSessionPhase(e, t, a) {
    try {
      const r = await this.fetchWithRetry(
        `${e}/api/chat/sessions/${encodeURIComponent(t)}/phase?profileId=${encodeURIComponent(a)}`,
      );
      return r.ok ? (await r.json()).phase : "running";
    } catch (r) {
      return (
        console.warn(
          "[BenchmarkManager] Failed to read session phase; treating as busy",
          r,
        ),
        "running"
      );
    }
  }
  async evaluateBenchmarkTest(e, t, a, r) {
    const s = t.messages;
    s.filter((i) => i.role === "assistant").pop();
    try {
      let i;
      if (this.chatSessionManager) {
        const m = await y.uploadChatSession(this.chatSessionManager, {
          sessionId: t.id,
          makePublic: !1,
        });
        m.success && (i = m.sharedChatId);
      }
      let n;
      const c = r?.eval_config;
      if (
        c?.type === "gdpval" &&
        c.deliverable_names &&
        c.deliverable_names.length > 0
      ) {
        const m = h.localSandboxManager.get(t.id);
        m && (n = await Se(m, c.deliverable_names));
      }
      const l = await this.fetchWithRetry(
        `${h.config.app.apiUrl}/api/benchmarks/runs/evaluate`,
        {
          method: "POST",
          body: JSON.stringify({
            runId: e.id,
            messages: s,
            ...a,
            ...(i ? { sharedChatId: i } : {}),
            ...(n ? { deliverableEvidence: n } : {}),
          }),
        },
      );
      if (!l.ok) {
        const m = await l.text().catch(() => "");
        throw new Error(
          `Failed to evaluate benchmark: ${l.status} ${l.statusText} — ${m}`,
        );
      }
      return await l.json();
    } catch (i) {
      console.error("Failed to evaluate benchmark test:", i);
    }
  }
  async createStartTabs(e, t) {
    if (
      (console.log(
        `[BenchmarkManager] createStartTabs called for task: ${e.title}`,
      ),
      console.log("[BenchmarkManager] Task has start_urls:", e.start_urls),
      !e.start_urls ||
        (Array.isArray(e.start_urls) && e.start_urls.length === 0))
    )
      return (
        console.log(
          `[BenchmarkManager] No start URLs found for task: ${e.title}`,
        ),
        []
      );
    const a = [];
    try {
      for (const r of e.start_urls) {
        console.log(`[BenchmarkManager] Creating tab for URL: ${r}`);
        const s = await this.tabsService.createTabWithRateLimit({
          tabType: "website",
          url: r,
          setActive: !1,
          isAIControlledTab: !1,
          sessionId: t,
        });
        (a.push(s),
          console.log(
            `[BenchmarkManager] Created start tab ${s.id} with URL: ${r} for benchmark test: ${e.title}`,
          ));
      }
    } catch (r) {
      console.error(
        `[BenchmarkManager] Failed to create start tabs for benchmark test ${e.title}:`,
        r,
      );
    }
    return a;
  }
  async downloadRefFileOnly(e) {
    const t = T.filenameFromUrl(e, "attachment"),
      a = E.getAppDataPath(),
      r = b.join(a, "benchmarks", "attachments");
    await g.mkdir(r, { recursive: !0 });
    const s = b.join(r, t);
    try {
      if ((await g.stat(s)).size > 0)
        return (
          console.log(`[BenchmarkManager] Ref file already cached: ${s}`),
          { filename: t, hostPath: s }
        );
    } catch {}
    console.log(`[BenchmarkManager] Downloading ref file: ${e}`);
    const n =
      !e.includes("orbitrabrowser.com") && !e.includes("localhost")
        ? await fetch(e)
        : await this.fetchWithRetry(e);
    if (!n.ok) throw new Error(`Failed to download file: ${n.statusText}`);
    const l = await (await n.blob()).arrayBuffer();
    return (
      await g.writeFile(s, Buffer.from(l)),
      console.log(`[BenchmarkManager] Downloaded ref file: ${e} -> ${s}`),
      { filename: t, hostPath: s }
    );
  }
  async downloadOrFindAttachment(e) {
    try {
      const t = T.filenameFromUrl(e, "attachment"),
        a = E.getAppDataPath(),
        r = b.join(a, "benchmarks", "attachments");
      await g.mkdir(r, { recursive: !0 });
      const s = b.join(r, t);
      let i;
      try {
        (await g.access(s),
          console.log(`[BenchmarkManager] File already exists: ${s}`),
          (i = await g.readFile(s)));
      } catch {
        console.log(`[BenchmarkManager] Downloading: ${e}`);
        const d =
          !e.includes("orbitrabrowser.com") && !e.includes("localhost")
            ? await fetch(e)
            : await this.fetchWithRetry(e);
        if (!d.ok) throw new Error(`Failed to download file: ${d.statusText}`);
        const f = await (await d.blob()).arrayBuffer();
        ((i = Buffer.from(f)),
          await g.writeFile(s, i),
          console.log(`[BenchmarkManager] Downloaded and saved: ${e} -> ${s}`));
      }
      const n = T.inferMimeFromUrl(s) || "text/plain",
        c = await g.stat(s);
      return await this.createAttachmentData(t, n, s, i, c);
    } catch (t) {
      throw (
        console.error(
          `[BenchmarkManager] Failed to download attachment from ${e}:`,
          t,
        ),
        t
      );
    }
  }
  async createAttachmentData(e, t, a, r, s) {
    const i = r.toString("base64"),
      n = `data:${t};base64,${i}`,
      c = crypto.randomUUID();
    let l,
      d = "attachment_document";
    try {
      const u = await y.processFile({
        data: i,
        mediaType: t,
        filename: e,
        itemId: c,
        chatId: "",
      });
      (u.wasProcessed &&
        u.text &&
        ((l = u.text),
        console.log(`[BenchmarkManager] Processed ${e}: ${l.length} chars`)),
        u.sourceType && (d = u.sourceType));
    } catch (u) {
      console.error(`[BenchmarkManager] Failed to process file ${e}:`, u);
    }
    const m = h.CollapseDecisionService.getInitialCollapseState(d, 1, {
        bytes: s.size,
      }),
      f = {
        id: c,
        filename: e,
        mimeType: t,
        filepath: a,
        data: n,
        attachmentSource: T.determineAttachmentSource(t),
        size: s.size,
        lastModified: s.mtime.getTime(),
        collapseState: m,
      };
    return (l && (f.text = l), f);
  }
}
exports.BenchmarkManager = $e;
