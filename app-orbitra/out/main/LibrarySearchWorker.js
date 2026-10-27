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
      (e._sentryDebugIds[t] = "69a730c3-7252-4f72-8dbb-0d5d9b116450"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-69a730c3-7252-4f72-8dbb-0d5d9b116450"));
  })();
} catch {}
const C = require("node:child_process"),
  v = require("node:fs/promises"),
  h = require("node:path"),
  x = require("./chunks/config-CdpnFYk6.js");
function L(e) {
  const t = e.replace(/\\/g, "/").replace(/^\.\//, "");
  return !t ||
    t.startsWith("/") ||
    t.includes("\0") ||
    t.split("/").some((r) => r === "..")
    ? null
    : t;
}
function S(e, t) {
  const r = e.relativePath.toLowerCase(),
    i = h.posix.basename(r),
    c = t.toLowerCase();
  return i === c
    ? 0
    : i.startsWith(c)
      ? 1
      : i.includes(c)
        ? 2
        : r.includes(c)
          ? 3
          : 4;
}
function A(e, t, r) {
  const i = new Map();
  for (const a of e) {
    const n = L(a.relativePath);
    if (!n) continue;
    const s = i.get(n);
    if (!s) {
      i.set(n, { ...a, relativePath: n });
      continue;
    }
    !s.contentMatch && a.contentMatch && (s.contentMatch = a.contentMatch);
  }
  const c = [...i.values()].sort((a, n) => {
    const s = S(a, t) - S(n, t);
    return s !== 0 ? s : a.relativePath.localeCompare(n.relativePath);
  });
  return {
    hits: c.slice(0, r).map((a) => {
      const n = [],
        s = t.toLowerCase(),
        u = h.posix.basename(a.relativePath).toLowerCase(),
        l = a.relativePath.toLowerCase();
      return (
        u.includes(s)
          ? n.push({ field: "name" })
          : l.includes(s) && n.push({ field: "path" }),
        a.contentMatch &&
          n.push({
            field: "content",
            line: a.contentMatch.line,
            snippet: a.contentMatch.snippet,
          }),
        { relativePath: a.relativePath, matches: n }
      );
    }),
    truncated: c.length > r,
  };
}
const E = 5e3,
  z = 240,
  P = new Map();
function N(e) {
  return [
    ...x.SYNCED_FILE_BROWSER_SEARCH_IGNORE_GLOBS,
    ...(e.ignoreGlobs ?? []),
  ].flatMap((t) => ["--glob", `!${t}`]);
}
function m(e) {
  process.parentPort?.postMessage(e);
}
function M(e) {
  e.cancelled = !0;
  for (const t of e.children) t.kill();
  e.children.clear();
}
function _(e, t, r, i, c) {
  return new Promise((y, a) => {
    if (r.cancelled) {
      y();
      return;
    }
    const n = C.spawn(e.rgPath, t, {
      cwd: e.rootPath,
      shell: !1,
      windowsHide: !0,
    });
    r.children.add(n);
    let s = "";
    (n.stderr.setEncoding("utf8"),
      n.stderr.on("data", (l) => {
        s.length < 1e3 && (s += l.slice(0, 1e3 - s.length));
      }));
    let u = "";
    (n.stdout.setEncoding("utf8"),
      n.stdout.on("data", (l) => {
        u += l;
        let f;
        for (; (f = u.indexOf(i)) !== -1; )
          (c(u.slice(0, f)), (u = u.slice(f + 1)));
      }),
      n.stdout.on("end", () => {
        u && c(u);
      }),
      n.once("error", (l) => {
        (r.children.delete(n), a(l));
      }),
      n.once("close", (l, f) => {
        if ((r.children.delete(n), r.cancelled || f)) {
          y();
          return;
        }
        if (l === 0 || l === 1) {
          y();
          return;
        }
        a(new Error(s.trim() || `ripgrep exited with code ${l}`));
      }));
  });
}
async function T(e, t) {
  const r = new Set(),
    i = new Map();
  let c = !1;
  const y = e.directoryPath || ".",
    a = N(e),
    n = _(
      e,
      [
        "--files",
        "--null",
        "--threads",
        "2",
        "--hidden",
        "--no-ignore",
        ...a,
        "--",
        y,
      ],
      t,
      "\0",
      (o) => {
        const d = e.query.toLowerCase();
        if (o.toLowerCase().includes(d)) {
          if (r.size >= E) {
            c = !0;
            return;
          }
          r.add(o);
        }
      },
    ),
    s = _(
      e,
      [
        "--json",
        "--fixed-strings",
        "--ignore-case",
        "--threads",
        "2",
        "--hidden",
        "--no-ignore",
        ...a,
        "--max-filesize",
        "4M",
        "--max-columns",
        "1000",
        "--max-count",
        "1",
        "--",
        e.query,
        y,
      ],
      t,
      `
`,
      (o) => {
        if (o.includes('"type":"match"'))
          try {
            const d = JSON.parse(o);
            if (d.type !== "match") return;
            const p = d.data.path.text,
              w = d.data.lines.text,
              g = d.data.line_number;
            if (!p || !w || !g || i.has(p)) return;
            if (i.size >= E) {
              c = !0;
              return;
            }
            i.set(p, { line: g, snippet: w.trim().slice(0, z) });
          } catch {}
      },
    );
  await Promise.all([n, s]);
  const u = [
      ...[...r].map((o) => ({ relativePath: o })),
      ...[...i].map(([o, d]) => ({ relativePath: o, contentMatch: d })),
    ],
    l = A(u, e.query, e.limit),
    f = await v.realpath(e.rootPath);
  return {
    hits: (
      await Promise.all(
        l.hits.map(async (o) => {
          if (t.cancelled || !x.isSyncedFileBrowserVisiblePath(o.relativePath))
            return null;
          const d = h.resolve(f, o.relativePath),
            p = h.relative(f, d);
          if (!p || p === ".." || p.startsWith(`..${h.sep}`) || h.isAbsolute(p))
            return null;
          try {
            const [w, g] = await Promise.all([v.realpath(d), v.stat(d)]),
              b = h.relative(f, w);
            return b === ".." ||
              b.startsWith(`..${h.sep}`) ||
              h.isAbsolute(b) ||
              !g.isFile()
              ? null
              : { ...o, size: g.size, updatedAtMs: g.mtimeMs };
          } catch {
            return null;
          }
        }),
      )
    ).filter((o) => o !== null),
    truncated: l.truncated || c,
  };
}
async function D(e, t) {
  const r = { cancelled: !1, children: new Set() };
  P.set(e, r);
  try {
    const i = await T(t, r);
    if (r.cancelled) {
      m({ type: "cancelled", requestId: e });
      return;
    }
    m({ type: "result", requestId: e, result: i });
  } catch (i) {
    if (r.cancelled) {
      m({ type: "cancelled", requestId: e });
      return;
    }
    m({
      type: "error",
      requestId: e,
      message: i instanceof Error ? i.message : String(i),
    });
  } finally {
    (M(r), P.delete(e));
  }
}
function R(e) {
  if (e.type === "search") {
    D(e.requestId, e.request);
    return;
  }
  if (e.type === "cancel") {
    const t = P.get(e.requestId);
    t && M(t);
    return;
  }
  for (const t of P.values()) M(t);
  process.exit(0);
}
process.parentPort ||
  (console.error("[LibrarySearchWorker] No parentPort available"),
  process.exit(1));
process.parentPort.on("message", (e) => {
  R(e.data);
});
m({ type: "ready" });
