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
      t = new r.Error().stack;
    t &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[t] = "9cb9e775-f6b9-47f4-9035-4dd44337f0d8"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-9cb9e775-f6b9-47f4-9035-4dd44337f0d8"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const b = require("node:fs/promises"),
  x = require("node:path"),
  $ = require("./errors-DsbnElf-.js"),
  q = require("../main-app.js");
require("node:process");
require("electron");
require("child_process");
require("crypto");
require("os");
require("./appPaths-eBQvtv9Z.js");
require("path");
require("better-sqlite3");
const j = require("./windowChat-OLnWTvHU.js"),
  P = require("valibot");
require("node:os");
require("./savedCertificateBlocklist-BUtmL3xA.js");
require("node:fs");
require("node:crypto");
require("node:tls");
require("./appDataPath-20zIIRaW.js");
require("node:events");
require("@electron-toolkit/utils");
require("node:util");
require("node:worker_threads");
require("node:http");
require("node:https");
require("./protocol-BGN1BQCi.js");
require("events");
require("util");
require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("@reflect/auth/workos-session");
require("@reflect/auth/device-policy");
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
require("./boot-B3ykpiVV.js");
require("node:url");
require("./suggestion-utils-CLM94tkM.js");
require("./profileLayoutLifecycle-BDYjrhKu.js");
require("./commitRecord-DR9i1ecT.js");
require("./storageObjectCache-ClYu2auD.js");
require("./routine-suggestion-store-Bb2MYDKl.js");
require("fastest-levenshtein");
require("./workspace-surface-model-CMo0ac7-.js");
require("./UserRequests-cRpr0CFi.js");
require("node:stream/promises");
require("fzstd");
require("./ContentExtractionService-D9pFX80C.js");
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
function I(r) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (r) {
    for (const n in r)
      if (n !== "default") {
        const i = Object.getOwnPropertyDescriptor(r, n);
        Object.defineProperty(
          t,
          n,
          i.get ? i : { enumerable: !0, get: () => r[n] },
        );
      }
  }
  return ((t.default = r), Object.freeze(t));
}
const e = I(P),
  N = { nodes: 2e3, chars: 1e5 },
  A = /^[A-Za-z_$][\w$]*$/,
  R = String.raw`
const __devV8 = require('v8')
const __devFs = require('fs')
const __devLogs = []
let __devDroppedLogs = 0
const __devRestoreFailures = []
const __devLogBudget = { nodes: 2000, chars: 60000 }

function __devMessage(error) {
  return error instanceof Error ? error.message : String(error)
}

function __devTypeName(value) {
  try {
    const proto = Object.getPrototypeOf(value)
    const name = proto === null ? 'Object' : proto.constructor && proto.constructor.name
    return typeof name === 'string' && name ? name : 'Object'
  } catch {
    return 'Object'
  }
}

function __devFunctionHead(fn) {
  try {
    const head = Function.prototype.toString.call(fn).split('\n')[0]
    return head.length > 120 ? head.slice(0, 120) + '...' : head
  } catch {
    return 'function'
  }
}

// Keeps the message and the entry's own frames. Positions point into the
// rewritten program rather than what was typed, so they are left out, and runner
// frames are dropped.
function __devCleanStack(stack) {
  return stack
    .split('\n')
    .filter((line) => !/^\s+at /.test(line) || /<anonymous>:\d+:\d+\)$/.test(line))
    .map((line) =>
      line
        .replace(/ \((?:eval at [^)]*\), )?<anonymous>:\d+:\d+\)$/, '')
        .replace(/^(\s+at )eval$/, '$1<console>')
    )
    .join('\n')
}

function __devSerialize(root, budget) {
  const onPath = new Set()
  const walk = (value, depth) => {
    budget.nodes -= 1
    if (budget.nodes < 0) return { t: 'more' }
    if (value === undefined) return { t: 'undefined' }
    if (value === null) return { t: 'null' }
    const kind = typeof value
    if (kind === 'boolean') return { t: 'boolean', v: value }
    if (kind === 'number') return { t: 'number', v: Object.is(value, -0) ? '-0' : String(value) }
    if (kind === 'bigint') return { t: 'bigint', v: String(value) }
    if (kind === 'symbol') return { t: 'symbol', v: String(value) }
    if (kind === 'string') {
      const keep = Math.max(0, Math.min(value.length, budget.chars))
      budget.chars -= keep
      if (keep < value.length) return { t: 'string', v: value.slice(0, keep), cut: value.length - keep }
      return { t: 'string', v: value }
    }
    if (kind === 'function') return { t: 'function', name: value.name || '', head: __devFunctionHead(value) }
    if (onPath.has(value)) return { t: 'circular' }
    if (value instanceof Date) {
      return { t: 'date', v: Number.isNaN(value.getTime()) ? 'Invalid Date' : value.toISOString() }
    }
    if (value instanceof RegExp) return { t: 'regexp', v: String(value) }
    if (value instanceof Error) {
      const stack = typeof value.stack === 'string' ? __devCleanStack(value.stack) : undefined
      return { t: 'error', name: String(value.name), message: String(value.message), stack }
    }
    if (value instanceof Promise) return { t: 'promise' }
    if (depth >= 8) return { t: 'more' }
    onPath.add(value)
    try {
      if (Array.isArray(value) || (ArrayBuffer.isView(value) && typeof value.length === 'number')) {
        const items = []
        for (let index = 0; index < Math.min(value.length, 100); index += 1) {
          items.push(walk(value[index], depth + 1))
        }
        const plain = Array.isArray(value) && Object.getPrototypeOf(value) === Array.prototype
        return { t: 'array', name: plain ? '' : __devTypeName(value), length: value.length, items }
      }
      if (value instanceof Map) {
        const entries = []
        for (const [key, item] of value) {
          if (entries.length >= 100) break
          entries.push([walk(key, depth + 1), walk(item, depth + 1)])
        }
        return { t: 'map', size: value.size, entries }
      }
      if (value instanceof Set) {
        const items = []
        for (const item of value) {
          if (items.length >= 100) break
          items.push(walk(item, depth + 1))
        }
        return { t: 'set', size: value.size, items }
      }
      const keys = Object.keys(value)
      const entries = []
      for (const key of keys.slice(0, 100)) {
        let item
        try {
          item = walk(value[key], depth + 1)
        } catch (error) {
          item = { t: 'error', name: 'Error', message: 'Reading this property threw: ' + __devMessage(error) }
        }
        entries.push([key, item])
      }
      return { t: 'object', name: __devTypeName(value), entries, more: Math.max(0, keys.length - 100) }
    } finally {
      onPath.delete(value)
    }
  }
  try {
    return walk(root, 0)
  } catch (error) {
    return { t: 'error', name: 'Error', message: 'This value could not be displayed: ' + __devMessage(error) }
  }
}

function __devRecord(level, args) {
  if (__devLogs.length >= 500) {
    __devDroppedLogs += 1
    return
  }
  __devLogs.push({ level, args: args.map((arg) => __devSerialize(arg, __devLogBudget)) })
}

// Set while a console call forwards, so a console that writes through the stream
// is not recorded twice.
let __devForwarding = false

for (const __devLevel of ['log', 'info', 'warn', 'error', 'debug']) {
  const __devForward = console[__devLevel]
  console[__devLevel] = (...args) => {
    __devRecord(__devLevel, args)
    __devForwarding = true
    try {
      return __devForward.apply(console, args)
    } finally {
      __devForwarding = false
    }
  }
}

for (const [__devStream, __devLevel] of [[process.stdout, 'log'], [process.stderr, 'error']]) {
  const __devForward = __devStream.write
  __devStream.write = function (chunk, ...rest) {
    if (!__devForwarding) {
      __devRecord(__devLevel, [typeof chunk === 'string' ? chunk : Buffer.from(chunk).toString('utf8')])
    }
    return __devForward.call(this, chunk, ...rest)
  }
}

let __devStore = new Map()
try {
  __devStore = __devV8.deserialize(__devFs.readFileSync(__devStorePath))
} catch {}

// An arrow function, so a restored function sees the entry's scope and no
// arguments object of its own.
const __devEvalSource = (__devSource) => eval(__devSource)

function __devRestore(name) {
  const entry = __devStore.get(name)
  if (!entry) return undefined
  try {
    if (entry.kind === 'data') return __devV8.deserialize(entry.bytes)
    return __devEvalSource('(' + entry.source + ')')
  } catch (error) {
    __devRestoreFailures.push({ name, reason: 'Could not be restored: ' + __devMessage(error) })
    return undefined
  }
}

async function __devFinish(threw, error, value, read) {
  if (!threw && value instanceof Promise) {
    try {
      value = await value
    } catch (caught) {
      threw = true
      error = caught
      value = undefined
    }
  }
  const entries = new Map()
  const kept = []
  const lost = [...__devRestoreFailures]
  for (const [name, get] of read) {
    const current = name === '$_' && !threw ? value : get()
    if (typeof current === 'function') {
      const source = Function.prototype.toString.call(current)
      if (/\[native code\]\s*\}$/.test(source)) {
        lost.push({ name, reason: 'Built-in and bound functions cannot be kept between entries.' })
        continue
      }
      entries.set(name, { kind: 'source', source })
      kept.push(name)
      continue
    }
    try {
      const bytes = __devV8.serialize(current)
      if (bytes.length > 8388608) {
        lost.push({ name, reason: 'Larger than 8 MB, so it was not kept.' })
        continue
      }
      entries.set(name, { kind: 'data', bytes })
      kept.push(name)
    } catch (caught) {
      lost.push({ name, reason: 'Holds functions or handles, so it cannot be kept between entries.' })
    }
  }
  try {
    __devFs.writeFileSync(__devStorePath, __devV8.serialize(entries), { mode: 0o600 })
  } catch (caught) {
    for (const name of kept.splice(0)) {
      lost.push({ name, reason: 'Variables could not be saved: ' + __devMessage(caught) })
    }
  }
  const envelope = {
    __orbitraDevConsole: 1,
    logs: __devLogs,
    droppedLogs: __devDroppedLogs,
    kept: kept.filter((name) => name !== '$_'),
    lost: lost.filter((entry) => entry.name !== '$_')
  }
  // The runner encodes an undefined property as null, so leave the unused one out.
  if (threw) envelope.thrown = __devSerialize(error, { nodes: 200, chars: 20000 })
  else envelope.value = __devSerialize(value, ${JSON.stringify(N)})
  return envelope
}
`;
function z(r, t, n) {
  const i = B(r, t),
    s = [],
    u = [],
    m = [],
    c = new Set(),
    g = new Set(),
    d = i.statements,
    a = d.at(-1);
  for (const o of d) {
    if (r.isImportDeclaration(o) || r.isImportEqualsDeclaration(o)) {
      (u.push(o.getText()),
        s.push({ start: o.getStart(), end: o.getEnd(), text: "" }));
      continue;
    }
    if (r.isFunctionDeclaration(o) && o.name && o.body) {
      (g.add(o.name.text),
        m.push(o.getText()),
        s.push({ start: o.getStart(), end: o.getEnd(), text: "" }));
      continue;
    }
    if (r.isClassDeclaration(o) && o.name) {
      c.add(o.name.text);
      const v = o
        .getText()
        .replace(/^(?:export\s+)?(?:default\s+)?(?:abstract\s+)?/, "");
      s.push({
        start: o.getStart(),
        end: o.getEnd(),
        text: `${o.name.text} = ${v};`,
      });
      continue;
    }
    if (r.isVariableStatement(o)) {
      const v = [];
      for (const _ of o.declarationList.declarations) {
        F(r, _.name, c);
        const S = _.initializer?.getText() ?? "undefined";
        v.push(`(${_.name.getText()} = ${S});`);
      }
      s.push({ start: o.getStart(), end: o.getEnd(), text: v.join(" ") });
      continue;
    }
    if (o === a && r.isExpressionStatement(o)) {
      s.push({
        start: o.getStart(),
        end: o.getEnd(),
        text: `__devValue = (${o.expression.getText()});`,
      });
      continue;
    }
    D(r, o, s);
  }
  const p = V(i.getFullText(), s),
    l = new Set([...c, ...g]),
    f = [...new Set([...n.restore, "$_"])].filter(
      (o) => A.test(o) && !l.has(o),
    ),
    E = [...f, ...c, ...g]
      .map((o) => `[${JSON.stringify(o)}, () => ${o}]`)
      .join(", ");
  return [
    ...u,
    `const __devStorePath = ${JSON.stringify(n.storePath)}`,
    R,
    `let ${f.map((o) => `${o} = __devRestore(${JSON.stringify(o)})`).join(", ")}`,
    c.size > 0 ? `let ${[...c].join(", ")}` : "",
    ...m,
    "let __devValue",
    "let __devError",
    "let __devThrew = false",
    "__devMain: try {",
    p,
    "} catch (__devCaught) {",
    "  __devThrew = true",
    "  __devError = __devCaught",
    "}",
    `return await __devFinish(__devThrew, __devError, __devValue, new Map([${E}]))`,
  ].join(`
`);
}
function B(r, t) {
  const n = t.trim().replace(/;$/, "");
  if (n.startsWith("{") && n.endsWith("}")) {
    const i = `(${n})`,
      { diagnostics: s } = r.transpileModule(i, { reportDiagnostics: !0 });
    if (!s?.some((u) => u.category === r.DiagnosticCategory.Error))
      return r.createSourceFile(
        "entry.ts",
        i,
        r.ScriptTarget.ES2022,
        !0,
        r.ScriptKind.TS,
      );
  }
  return r.createSourceFile(
    "entry.ts",
    t,
    r.ScriptTarget.ES2022,
    !0,
    r.ScriptKind.TS,
  );
}
function F(r, t, n) {
  if (r.isIdentifier(t)) {
    n.add(t.text);
    return;
  }
  for (const i of t.elements) r.isOmittedExpression(i) || F(r, i.name, n);
}
function D(r, t, n) {
  if (!(r.isFunctionLike(t) || r.isClassLike(t))) {
    if (r.isReturnStatement(t)) {
      const i = t.expression?.getText() ?? "undefined";
      n.push({
        start: t.getStart(),
        end: t.getEnd(),
        text: `{ __devValue = (${i}); break __devMain }`,
      });
      return;
    }
    r.forEachChild(t, (i) => D(r, i, n));
  }
}
function V(r, t) {
  let n = r;
  for (const i of [...t].sort((s, u) => u.start - s.start))
    n = n.slice(0, i.start) + i.text + n.slice(i.end);
  return n;
}
function U(r, t) {
  return process.platform === "win32"
    ? r
    : [
        `__dev_cwd_file=${`'${t.replaceAll("'", "'\\''")}'`}; [ -r "$__dev_cwd_file" ] && cd -- "$(cat -- "$__dev_cwd_file")" 2>/dev/null; trap 'pwd > "$__dev_cwd_file" 2>/dev/null' EXIT`,
        r,
      ].join(`
`);
}
const h = e.lazy(() =>
    e.variant("t", [
      e.object({ t: e.literal("undefined") }),
      e.object({ t: e.literal("null") }),
      e.object({ t: e.literal("boolean"), v: e.boolean() }),
      e.object({ t: e.literal("number"), v: e.string() }),
      e.object({ t: e.literal("bigint"), v: e.string() }),
      e.object({
        t: e.literal("string"),
        v: e.string(),
        cut: e.optional(e.number()),
      }),
      e.object({ t: e.literal("symbol"), v: e.string() }),
      e.object({
        t: e.literal("function"),
        name: e.string(),
        head: e.string(),
      }),
      e.object({ t: e.literal("date"), v: e.string() }),
      e.object({ t: e.literal("regexp"), v: e.string() }),
      e.object({
        t: e.literal("error"),
        name: e.string(),
        message: e.string(),
        stack: e.optional(e.string()),
      }),
      e.object({ t: e.literal("promise") }),
      e.object({
        t: e.literal("array"),
        name: e.string(),
        length: e.number(),
        items: e.array(h),
      }),
      e.object({
        t: e.literal("object"),
        name: e.string(),
        entries: e.array(e.tuple([e.string(), h])),
        more: e.number(),
      }),
      e.object({
        t: e.literal("map"),
        size: e.number(),
        entries: e.array(e.tuple([h, h])),
      }),
      e.object({ t: e.literal("set"), size: e.number(), items: e.array(h) }),
      e.object({ t: e.literal("circular") }),
      e.object({ t: e.literal("more") }),
    ]),
  ),
  H = e.object({
    __orbitraDevConsole: e.literal(1),
    value: e.optional(h),
    thrown: e.optional(h),
    logs: e.array(
      e.object({
        level: e.picklist(["log", "info", "warn", "error", "debug"]),
        args: e.array(h),
      }),
    ),
    droppedLogs: e.number(),
    kept: e.array(e.string()),
    lost: e.array(e.object({ name: e.string(), reason: e.string() })),
  });
function J(r) {
  if (!r) return null;
  try {
    const t = e.safeParse(H, JSON.parse(r));
    return t.success ? t.output : null;
  } catch {
    return null;
  }
}
const L = 12e4,
  O = 2e5,
  M = 16384;
async function W(r) {
  const { entry: t } = r,
    n = x.join(
      r.toolEnvironment.syncedFilePaths.session(r.session.fsBasePath),
      "network",
      "dev-console",
    );
  await b.mkdir(n, { recursive: !0, mode: 448 });
  let i;
  try {
    i = await r.getSandbox(r.signal);
  } catch (s) {
    if (!r.signal.aborted) throw s;
    return t.interpreter === "shell"
      ? { interpreter: "shell", status: "stopped", output: [], truncated: !1 }
      : w(t.scope, "stopped");
  }
  switch (t.interpreter) {
    case "typescript":
      return K(r, i, t, x.join(n, "scope.v8"));
    case "shell":
      return Y(r, i, t.code, x.join(n, "cwd"));
  }
}
function w(r, t) {
  return {
    interpreter: "typescript",
    status: t,
    logs: [],
    droppedLogs: 0,
    output: "",
    scope: r,
    lost: [],
    sdkCalls: [],
  };
}
async function K(r, t, n, i) {
  try {
    await q.transpileSandboxTypeScript(n.code);
  } catch (d) {
    const a = d instanceof Error ? d.message : String(d);
    return {
      ...w(n.scope, "failed"),
      thrown: { t: "error", name: "SyntaxError", message: a },
    };
  }
  const s = z(await q.loadCompiler(), n.code, {
    restore: n.scope,
    storePath: i,
  });
  let u;
  const m = Object.assign(Object.create(r.session), {
      updateToolCallResult: (d, a) => {
        u = {
          ...u,
          ...a,
          orbitraToolMetadata: {
            ...u?.orbitraToolMetadata,
            ...a.orbitraToolMetadata,
          },
        };
      },
      save: () => {},
      addOwnSessionCredits: () => {},
    }),
    c = new j.ExecuteCodeHandler({
      toolCallPart: {
        type: "tool-call",
        toolName: "execute_code",
        toolCallId: `dev-console-${crypto.randomUUID()}`,
        input: { interpreter: "typescript", code: s },
      },
      activeSession: m,
      sandbox: t,
      integrationManager: r.integrationManager,
      tabsServiceFallback: r.tabsService,
      sendAsAliasMap: r.integrationManager.getSendAsAliasMap(
        r.session.getUserProfile().id,
      ),
      parentAbortSignal: r.signal,
      toolEnvironment: r.toolEnvironment,
    }),
    g = () => {
      c.cancel().catch(() => {});
    };
  r.signal.addEventListener("abort", g, { once: !0 });
  try {
    const d = r.signal.aborted ? "stopped" : await c.step(),
      a = u?.orbitraToolMetadata,
      p = (a?.subToolCalls ?? []).map((f) => ({
        name: `${f.appId}.${f.actionName}`,
        status: f.status,
      }));
    if (d === "waiting_feedback")
      return (
        await c.cancel(),
        { ...w(n.scope, "needs-approval"), notice: G(a), sdkCalls: p }
      );
    if (d === "stopped") return { ...w(n.scope, "stopped"), sdkCalls: p };
    const l = J(a?.returnValue);
    if (!l) {
      const f = [a?.stdout, a?.stderr].filter(Boolean).join(`
`),
        y = a?.error ?? a?.output ?? "The entry returned no result.";
      return {
        ...w(n.scope, "failed"),
        thrown: { t: "error", name: "Error", message: y },
        output: f,
        sdkCalls: p,
      };
    }
    return {
      interpreter: "typescript",
      status: l.thrown ? "failed" : "complete",
      value: l.value,
      thrown: l.thrown,
      logs: l.logs,
      droppedLogs: l.droppedLogs,
      output: "",
      scope: l.kept,
      lost: l.lost,
      sdkCalls: p,
    };
  } finally {
    r.signal.removeEventListener("abort", g);
  }
}
async function Y(r, t, n, i) {
  const { session: s, signal: u } = r,
    m = t.sessionId ?? s.id,
    { toAgentPath: c } = $.createAgentRootMask(
      $.accountRootOfWorkspaceRoot(r.toolEnvironment.syncedFilePaths.root),
    );
  let g;
  const d = Date.now(),
    a = [];
  let p = 0,
    l = !1;
  try {
    const y =
        (
          await q.raceAbort(
            t.execStream(
              U(n, i),
              {
                timeoutMs: L,
                signal: u,
                network: j.networkPolicyForInteractiveApproval(
                  q.localSandboxManager.getNativeSessionConfig(m)?.network,
                ),
                networkApproval: {
                  onApprovalNeeded: async (v) => {
                    const _ = j.checkSandboxNetworkPermission(
                      q.agentPermissionManager,
                      {
                        profileId: s.getUserProfile().id,
                        host: v.host,
                        sessionId: m,
                        permissionMode: s.permissionMode,
                      },
                    );
                    if (_ === "allow") {
                      v.resolve(!0);
                      return;
                    }
                    (_ !== "deny" && (g = v.host), v.resolve(!1, !1));
                  },
                },
              },
              (v, _) => {
                const S = a.at(-1);
                for (
                  S?.stream === v
                    ? (S.text += _)
                    : a.push({ stream: v, text: _ }),
                    p += _.length;
                  p > O && a.length > 0;

                ) {
                  const k = a[0],
                    T = p - O;
                  ((l = !0),
                    k.text.length > T
                      ? ((k.text = k.text.slice(T)), (p -= T))
                      : (a.shift(), (p -= k.text.length)));
                }
              },
            ),
            u,
          )
        ).exitCode ?? void 0,
      E = y === 124 && Date.now() - d >= L;
    let o;
    return (
      E
        ? (o = "Timed out after 2 minutes.")
        : g && (o = `Network access to ${g} needs approval.`),
      {
        interpreter: "shell",
        status: y === 0 ? "complete" : "failed",
        output: a,
        truncated: l,
        exitCode: y,
        cwd: await C(i, c),
        notice: o,
      }
    );
  } catch (f) {
    if (!q.isAbortError(f)) throw f;
    return {
      interpreter: "shell",
      status: "stopped",
      output: a,
      truncated: l,
      cwd: await C(i, c),
    };
  }
}
async function C(r, t) {
  let n;
  try {
    if (
      ((n = await b.open(
        r,
        b.constants.O_RDONLY | b.constants.O_NOFOLLOW | b.constants.O_NONBLOCK,
      )),
      !(await n.stat()).isFile())
    )
      return;
    const { buffer: i, bytesRead: s } = await n.read(Buffer.alloc(M), 0, M, 0),
      u = i.toString("utf8", 0, s).trim();
    return u ? t(u) : void 0;
  } catch {
    return;
  } finally {
    await n?.close().catch(() => {});
  }
}
function G(r) {
  const t = r?.approvalRequest?.host;
  if (t) return `Network access to ${t} needs approval.`;
  const n = r?.subToolCalls?.find((i) => i.status === "waiting_permission");
  return n
    ? `${n.appId}.${n.actionName} needs approval.`
    : "The entry needs approval.";
}
exports.runDevConsoleEntry = W;
