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
      (t._sentryDebugIds[e] = "12c3b08b-85ec-4f40-b93f-1627428226eb"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-12c3b08b-85ec-4f40-b93f-1627428226eb"));
  })();
} catch {}
const k = require("node:crypto"),
  d = require("node:fs/promises"),
  F = require("node:module"),
  l = require("node:path"),
  $ = require("esbuild-wasm/lib/browser"),
  o = require("./chunks/typescript-BP_-BHbN.js");
require("./chunks/_commonjsHelpers-DJP3_Dvh.js");
require("fs");
require("path");
require("os");
require("inspector");
const I = [".ts", ".tsx", ".mts", ".js", ".jsx", ".mjs", ".json"];
function h(t) {
  return l.resolve(t);
}
function M(t) {
  return o.ts.isIdentifier(t) ||
    o.ts.isStringLiteral(t) ||
    o.ts.isNumericLiteral(t)
    ? t.text
    : null;
}
function K(t) {
  return (
    t.modifiers?.some((e) => e.kind === o.ts.SyntaxKind.ExportKeyword) ?? !1
  );
}
function _(t, e) {
  const r = o.ts.createSourceFile(t, e, o.ts.ScriptTarget.ESNext, !0),
    n = new Map(),
    i = new Map();
  let s;
  for (const a of r.statements) {
    if (o.ts.isVariableStatement(a)) {
      for (const u of a.declarationList.declarations)
        !o.ts.isIdentifier(u.name) ||
          !u.initializer ||
          (n.set(u.name.text, u.initializer),
          K(a) && i.set(u.name.text, u.name.text));
      continue;
    }
    if (o.ts.isExportAssignment(a) && !a.isExportEquals) {
      s = a.expression;
      continue;
    }
    if (o.ts.isExportDeclaration(a) && !a.moduleSpecifier) {
      const u = a.exportClause;
      if (!u || !o.ts.isNamedExports(u)) continue;
      for (const c of u.elements)
        i.set(c.name.text, c.propertyName?.text ?? c.name.text);
    }
  }
  return {
    sourcePath: t,
    sourceFile: r,
    declarations: n,
    imports: new Map(),
    namedExports: i,
    ...(s ? { defaultExport: s } : {}),
    ...(l.extname(t) === ".json" ? { jsonDefault: JSON.parse(e) } : {}),
  };
}
function q(t, e) {
  const r = l.resolve(l.dirname(t), e);
  if (l.extname(r)) return [h(r)];
  const n = I.map((i) => h(`${r}${i}`));
  for (const i of I) n.push(h(l.join(r, `index${i}`)));
  return n;
}
function z(t, e, r) {
  if (!e.startsWith("./") && !e.startsWith("../"))
    throw new Error(`Integration metadata imports must be local: "${e}".`);
  const n = q(t, e).find((i) => r.has(i));
  if (!n)
    throw new Error(`Could not resolve integration metadata import "${e}".`);
  return n;
}
function C(t, e) {
  for (const r of t.sourceFile.statements) {
    if (
      !o.ts.isImportDeclaration(r) ||
      !o.ts.isStringLiteral(r.moduleSpecifier)
    )
      continue;
    const n = r.importClause;
    if (!n) continue;
    const i = z(t.sourcePath, r.moduleSpecifier.text, e);
    n.name &&
      t.imports.set(n.name.text, { modulePath: i, exportName: "default" });
    const s = n.namedBindings;
    if (!(!s || !o.ts.isNamedImports(s)))
      for (const a of s.elements)
        t.imports.set(a.name.text, {
          modulePath: i,
          exportName: a.propertyName?.text ?? a.name.text,
        });
  }
}
function R(t) {
  let e = t;
  for (;;) {
    if (
      o.ts.isParenthesizedExpression(e) ||
      o.ts.isAsExpression(e) ||
      o.ts.isSatisfiesExpression(e) ||
      o.ts.isTypeAssertionExpression(e) ||
      o.ts.isNonNullExpression(e)
    ) {
      e = e.expression;
      continue;
    }
    return e;
  }
}
function A(t, e) {
  if (e === "default") {
    if (!t.defaultExport)
      throw new Error(
        `Integration module "${t.sourcePath}" has no default export.`,
      );
    return t.defaultExport;
  }
  const r = t.namedExports.get(e),
    n = r ? t.declarations.get(r) : void 0;
  if (!n)
    throw new Error(
      `Integration module "${t.sourcePath}" has no static export "${e}".`,
    );
  return n;
}
function B(t, e) {
  return `${t.sourcePath}:${e.pos}:${e.end}`;
}
function T(t, e, r) {
  const n = t.declarations.get(e.text);
  if (n) return m(t, n, r);
  const i = t.imports.get(e.text);
  if (i) {
    const s = r.modules.get(i.modulePath);
    if (!s)
      throw new Error(
        `Integration metadata module "${i.modulePath}" is unavailable.`,
      );
    return i.exportName === "default" && s.jsonDefault !== void 0
      ? s.jsonDefault
      : m(s, A(s, i.exportName), r);
  }
  throw new Error(
    `Integration metadata identifier "${e.text}" must resolve to a static local value.`,
  );
}
function W(t, e, r) {
  let n = e.head.text;
  for (const i of e.templateSpans) {
    const s = m(t, i.expression, r);
    if (typeof s == "object" && s !== null)
      throw new Error(
        "Integration metadata template values must resolve to static primitives.",
      );
    n += `${s ?? ""}${i.literal.text}`;
  }
  return n;
}
function U(t, e, r) {
  const n = Object.create(null);
  for (const i of e.properties) {
    if (o.ts.isMethodDeclaration(i)) continue;
    if (o.ts.isSpreadAssignment(i)) {
      const a = m(t, i.expression, r);
      if (typeof a != "object" || a === null || Array.isArray(a))
        throw new Error(
          "Integration metadata object spreads must resolve to static objects.",
        );
      Object.assign(n, a);
      continue;
    }
    if (o.ts.isShorthandPropertyAssignment(i)) {
      n[i.name.text] = T(t, i.name, r);
      continue;
    }
    if (!o.ts.isPropertyAssignment(i)) continue;
    const s = M(i.name);
    !s || s === "execute" || (n[s] = m(t, i.initializer, r));
  }
  return n;
}
function m(t, e, r) {
  const n = R(e),
    i = B(t, n);
  if (r.resolving.has(i))
    throw new Error(
      "Integration metadata contains a circular static reference.",
    );
  r.resolving.add(i);
  try {
    if (o.ts.isStringLiteral(n) || o.ts.isNoSubstitutionTemplateLiteral(n))
      return n.text;
    if (o.ts.isTemplateExpression(n)) return W(t, n, r);
    if (n.kind === o.ts.SyntaxKind.TrueKeyword) return !0;
    if (n.kind === o.ts.SyntaxKind.FalseKeyword) return !1;
    if (n.kind === o.ts.SyntaxKind.NullKeyword) return null;
    if (o.ts.isNumericLiteral(n)) return Number(n.text);
    if (o.ts.isPrefixUnaryExpression(n) && o.ts.isNumericLiteral(n.operand)) {
      const s = Number(n.operand.text);
      if (n.operator === o.ts.SyntaxKind.MinusToken) return -s;
      if (n.operator === o.ts.SyntaxKind.PlusToken) return s;
    }
    if (o.ts.isIdentifier(n)) return T(t, n, r);
    if (o.ts.isArrayLiteralExpression(n))
      return n.elements.map((s) => m(t, s, r));
    if (o.ts.isObjectLiteralExpression(n)) return U(t, n, r);
  } finally {
    r.resolving.delete(i);
  }
  throw new Error(
    `Integration metadata in "${t.sourcePath}" must use static literals, objects, arrays, or imported constants.`,
  );
}
async function V(t, e) {
  const r = h(await d.realpath(t)),
    n = await Promise.all(
      e.map(async (c) => {
        const f = h(c);
        return [f, await d.readFile(f, "utf8")];
      }),
    ),
    i = new Map(n.map(([c, f]) => [c, _(c, f)]));
  for (const c of i.values()) C(c, i);
  const s = i.get(r);
  if (!s)
    throw new Error(
      "Dynamic integration bundle did not include its entrypoint.",
    );
  const a = A(s, "default"),
    u = m(s, a, { modules: i, resolving: new Set() });
  if (typeof u != "object" || u === null || Array.isArray(u))
    throw new Error("Expected a default-exported integration metadata object.");
  return u;
}
function D(t) {
  return o.ts.isIdentifier(t) ||
    o.ts.isStringLiteral(t) ||
    o.ts.isNumericLiteral(t)
    ? t.text
    : null;
}
function p(t, e) {
  for (const r of t.properties)
    if (o.ts.isPropertyAssignment(r) && D(r.name) === e) return r.initializer;
}
function g(t) {
  if (o.ts.isStringLiteral(t) || o.ts.isNoSubstitutionTemplateLiteral(t))
    return t.text;
  if (t.kind === o.ts.SyntaxKind.TrueKeyword) return !0;
  if (t.kind === o.ts.SyntaxKind.FalseKeyword) return !1;
  if (t.kind === o.ts.SyntaxKind.NullKeyword) return null;
  if (o.ts.isNumericLiteral(t)) return Number(t.text);
  if (o.ts.isArrayLiteralExpression(t)) {
    const e = [];
    for (const r of t.elements) {
      const n = g(r);
      if (n === void 0) return;
      e.push(n);
    }
    return e;
  }
  if (o.ts.isObjectLiteralExpression(t)) {
    const e = {};
    for (const r of t.properties) {
      if (!o.ts.isPropertyAssignment(r)) continue;
      const n = D(r.name);
      if (!n) continue;
      const i = g(r.initializer);
      i !== void 0 && (e[n] = i);
    }
    return e;
  }
}
function H(t) {
  const e = new Map();
  for (const r of t.statements)
    if (o.ts.isVariableStatement(r))
      for (const n of r.declarationList.declarations)
        o.ts.isIdentifier(n.name) &&
          n.initializer &&
          o.ts.isObjectLiteralExpression(n.initializer) &&
          e.set(n.name.text, n.initializer);
  return e;
}
function J(t, e) {
  for (const r of t.statements)
    if (o.ts.isExportAssignment(r)) {
      if (o.ts.isObjectLiteralExpression(r.expression)) return r.expression;
      if (o.ts.isIdentifier(r.expression))
        return e.get(r.expression.text) ?? null;
    }
  return null;
}
function X(t, e) {
  return o.ts.isObjectLiteralExpression(t)
    ? t
    : o.ts.isIdentifier(t)
      ? (e.get(t.text) ?? null)
      : null;
}
function Y(t) {
  if (t && (o.ts.isStringLiteral(t) || o.ts.isNoSubstitutionTemplateLiteral(t)))
    return t.text;
}
function G(t, e) {
  const r = o.ts.createSourceFile(e, t, o.ts.ScriptTarget.ESNext, !0),
    n = H(r),
    i = J(r, n);
  if (!i) return [];
  const s = p(i, "tools"),
    a = [];
  return (
    s && o.ts.isArrayLiteralExpression(s)
      ? s.elements.forEach((u, c) => {
          const f = X(u, n);
          f && a.push({ object: f, path: `tools[${c}]` });
        })
      : p(i, "name") && a.push({ object: i, path: "default" }),
    a.map(({ object: u, path: c }, f) => {
      const w =
          p(u, "inputJsonSchema") ?? p(u, "inputSchema") ?? p(u, "schema"),
        x = p(u, "agentInputJsonSchema") ?? p(u, "agentInputSchema"),
        v = w ? g(w) : void 0,
        P = x ? g(x) : void 0;
      return {
        toolName: Y(p(u, "name"))?.trim() || `tool[${f}]`,
        path: c,
        ...(v !== void 0 ? { inputSchema: v } : {}),
        ...(P !== void 0 ? { agentInputSchema: P } : {}),
      };
    })
  );
}
function Q(t) {
  const e = new Set(),
    r = /\bfetch\s*\(\s*['"](https?:\/\/[^/'"]+)/g;
  for (const n of t.matchAll(r)) {
    const i = n[1]?.replace(/^https?:\/\//, "");
    i && e.add(i);
  }
  return [...e];
}
async function Z(t) {
  return (
    await Promise.all(
      t.map(async (r) => {
        if (l.extname(r).toLowerCase() === ".json") return null;
        const n = await d.readFile(r, "utf8");
        return {
          sourcePath: r,
          tools: G(n, r),
          fetchHosts: Q(n),
          referencesRuntimeIdentifiers:
            /tab_id|contactId|recordId|workspaceId|siteId|tenantId|revision/.test(
              n,
            ),
        };
      }),
    )
  ).filter((r) => r !== null);
}
const tt = F.createRequire(require("url").pathToFileURL(__filename).href),
  et = tt.resolve("esbuild-wasm/esbuild.wasm"),
  b = "orbitra-integration",
  j = 256,
  N = 2 * 1024 * 1024,
  L = [".ts", ".tsx", ".mts", ".js", ".jsx", ".mjs", ".json"];
let E = null;
function rt() {
  return (
    E ||
    (Object.defineProperty(globalThis, "self", {
      configurable: !0,
      value: globalThis,
    }),
    (E = d
      .readFile(et)
      .then((t) => WebAssembly.compile(t))
      .then((t) => $.initialize({ wasmModule: t, worker: !1 }))),
    E)
  );
}
function y(t, e) {
  const r = l.relative(t, e);
  return r === ""
    ? !0
    : r === ".." || r.startsWith(`..${l.sep}`)
      ? !1
      : !l.isAbsolute(r);
}
function O(t, e) {
  return l.relative(t, e).split(l.sep).join("/");
}
function S(t) {
  const e = l.extname(t).toLowerCase();
  if (e === ".ts" || e === ".mts") return "ts";
  if (e === ".tsx") return "tsx";
  if (e === ".js" || e === ".mjs") return "js";
  if (e === ".jsx") return "jsx";
  if (e === ".json") return "json";
  throw new Error(
    `Unsupported integration source extension "${e || "(none)"}".`,
  );
}
function nt(t) {
  if (l.extname(t)) return [t];
  const e = L.map((r) => `${t}${r}`);
  for (const r of L) e.push(l.join(t, `index${r}`));
  return e;
}
async function it(t) {
  try {
    const e = await d.realpath(t);
    return (await d.stat(e)).isFile() ? e : null;
  } catch {
    return null;
  }
}
async function ot(t, e, r) {
  const n = t.modulePaths.get(e);
  if (!n) throw new Error(`Could not resolve parent module "${e}".`);
  const i = l.resolve(l.dirname(n), r);
  if (!y(t.rootPath, i))
    throw new Error(
      `Integration path "${r}" escapes the integration directory.`,
    );
  for (const s of nt(i)) {
    if (!y(t.rootPath, s)) continue;
    const a = await it(s);
    if (a) {
      if (!y(t.rootPath, a))
        throw new Error(
          `Integration path "${r}" resolves outside the integration directory.`,
        );
      return (S(a), { id: O(t.rootPath, a), sourcePath: a });
    }
  }
  throw new Error(`Could not resolve integration path "${r}" for "${e}".`);
}
function st(t) {
  if (t.kind === "dynamic-import")
    throw new Error(
      `Dynamic integration imports are not supported: "${t.path}".`,
    );
  if (t.kind !== "import-statement")
    throw new Error(
      `Integration modules must use static import/export statements, not ${t.kind}: "${t.path}".`,
    );
  if (!t.path.startsWith("./") && !t.path.startsWith("../"))
    throw new Error(
      `Integration imports must be relative paths inside the integration directory: "${t.path}".`,
    );
}
function at(t, e, r) {
  return {
    name: "orbitra-integration-source",
    setup(n) {
      (n.onResolve({ filter: /.*/ }, async (i) => {
        if (i.kind === "entry-point")
          return (t.modulePaths.set(e, r), { namespace: b, path: e });
        st(i);
        const s = await ot(t, i.importer, i.path);
        return (
          t.modulePaths.set(s.id, s.sourcePath),
          { namespace: b, path: s.id }
        );
      }),
        n.onLoad({ filter: /.*/, namespace: b }, async (i) => {
          const s = t.modulePaths.get(i.path);
          if (!s)
            throw new Error(`Could not load integration module "${i.path}".`);
          if (!y(t.rootPath, s))
            throw new Error(
              `Integration module "${i.path}" is outside the integration directory.`,
            );
          const a = await d.readFile(s, "utf8");
          if (
            (t.loadedPaths.has(s) ||
              (t.loadedPaths.add(s),
              t.sourceDigests.set(
                s,
                k.createHash("sha256").update(a).digest("hex"),
              ),
              (t.totalBytes += Buffer.byteLength(a, "utf8"))),
            t.loadedPaths.size > j)
          )
            throw new Error(`Integration source exceeds the ${j}-file limit.`);
          if (t.totalBytes > N)
            throw new Error(`Integration source exceeds the ${N}-byte limit.`);
          return { contents: a, loader: S(s), resolveDir: l.dirname(s) };
        }));
    },
  };
}
async function ut(t) {
  const e = await d.realpath(t.integrationDir),
    r = await d.realpath(t.entryPath);
  if (!y(e, r))
    throw new Error(
      "Dynamic integration entrypoint is outside the integration directory.",
    );
  if (!(await d.stat(r)).isFile())
    throw new Error("Dynamic integration entrypoint is not a file.");
  return (S(r), { rootPath: e, entryPath: r });
}
async function lt(t) {
  await rt();
  const { rootPath: e, entryPath: r } = await ut(t),
    n = O(e, r),
    i = {
      rootPath: e,
      modulePaths: new Map(),
      loadedPaths: new Set(),
      sourceDigests: new Map(),
      totalBytes: 0,
    },
    a = (
      await $.build({
        bundle: !0,
        charset: "utf8",
        entryPoints: [n],
        format: "cjs",
        legalComments: "none",
        logLevel: "silent",
        logOverride: {
          "unsupported-dynamic-import": "error",
          "unsupported-require-call": "error",
        },
        platform: "neutral",
        plugins: [at(i, n, r)],
        sourcemap: "inline",
        sourcesContent: !0,
        target: "node22",
        treeShaking: !0,
        write: !1,
      })
    ).outputFiles[0];
  if (!a)
    throw new Error(
      "Dynamic integration bundler produced no JavaScript output.",
    );
  const u = Array.from(i.loadedPaths),
    [c, f] = await Promise.all([V(r, u), Z(u)]);
  return {
    code: a.text,
    metadata: c,
    sourceAnalysis: f,
    sourcePaths: u,
    sourceDigests: Array.from(i.sourceDigests, ([w, x]) => ({
      path: w,
      sha256: x,
    })),
  };
}
module.exports = lt;
