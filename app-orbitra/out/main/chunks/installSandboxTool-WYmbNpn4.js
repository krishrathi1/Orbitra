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
      (e._sentryDebugIds[t] = "834d5aa6-0338-409b-abae-6156caa54468"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-834d5aa6-0338-409b-abae-6156caa54468"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const y = require("node:crypto"),
  b = require("node:fs"),
  n = require("node:fs/promises"),
  c = require("node:path"),
  v = require("tar"),
  T = require("./safeUnzip-Cao1Ew3K.js"),
  g = require("./tool-file-name-B5D34MJH.js");
require("node:stream/promises");
require("yauzl");
function x(e) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const a in e)
      if (a !== "default") {
        const r = Object.getOwnPropertyDescriptor(e, a);
        Object.defineProperty(
          t,
          a,
          r.get ? r : { enumerable: !0, get: () => e[a] },
        );
      }
  }
  return ((t.default = e), Object.freeze(t));
}
const S = x(v),
  d = console,
  k = 12e4;
async function j(e, t, a) {
  await n.mkdir(t, { recursive: !0 });
  const r = e.platforms[a];
  if (!r) {
    d.warn("SandboxToolingManager: no asset for platform", {
      tool: e.name,
      platform: a,
    });
    return;
  }
  if (!(await $(e, r, t, a))) {
    if (r.archive) {
      const s = r.archive.format === "zip" ? "zip" : "tar.gz",
        o = c.join(t, `.tmp-${e.name}-${process.pid}.${s}`);
      (await _(r, o), await A(e.name, o, r.archive, t, a));
    } else {
      const s = await O(r);
      await F(e.name, s, t, a);
    }
    (await P(e, r, t),
      d.info("SandboxToolingManager: staged tool", {
        tool: e.name,
        version: e.version,
      }));
  }
}
async function $(e, t, a, r) {
  if (t.archive) {
    const i = p(a, e.name);
    if (!(await u(i))) return !1;
    try {
      const f = JSON.parse(await n.readFile(i, "utf-8"));
      return f.sha256 !== t.sha256 || f.version !== e.version
        ? !1
        : (await E(t, a))
          ? !0
          : (d.warn(
              "SandboxToolingManager: archive sentinel matched but payload was missing",
              { tool: e.name },
            ),
            !1);
    } catch {
      return !1;
    }
  }
  const s = c.join(a, g.getToolBinaryFileName(e.name, r));
  return (await u(s))
    ? y
        .createHash("sha256")
        .update(await n.readFile(s))
        .digest("hex") === t.sha256
      ? !0
      : (d.warn(
          "SandboxToolingManager: staged binary hash mismatch, re-fetching",
          { tool: e.name },
        ),
        !1)
    : !1;
}
async function E(e, t) {
  if (!e.archive) return !0;
  for (const a of e.archive.extract) {
    const r = c.join(t, a.to.replace(/\/+$/, ""));
    if (!(await u(r))) return !1;
  }
  for (const a of e.archive.symlinks ?? []) {
    const r = c.join(t, a.from);
    if (!(await u(r))) return !1;
  }
  for (const a of e.archive.inlineFiles ?? []) {
    const r = c.join(t, a.to);
    if (
      !(await u(r)) ||
      (await n.readFile(r, "utf8")) !== a.content ||
      (a.executable && !(await q(r)))
    )
      return !1;
  }
  return !0;
}
async function m(e, t) {
  const a = new AbortController();
  let r;
  const s = () => {
      (clearTimeout(r),
        (r = setTimeout(
          () =>
            a.abort(new Error("Sandbox tool download stopped making progress")),
          k,
        )));
    },
    o = y.createHash("sha256");
  s();
  try {
    const i = await fetch(e.url, { signal: a.signal });
    if (!i.ok) throw new Error(`Tool download failed: HTTP ${i.status}`);
    if ((s(), i.body)) {
      const l = i.body.getReader();
      try {
        for (;;) {
          const h = await l.read();
          if (h.done) break;
          const w = Buffer.from(h.value);
          (w.byteLength > 0 && s(), o.update(w), await t(w));
        }
      } finally {
        l.releaseLock();
      }
    } else {
      const l = Buffer.from(await i.arrayBuffer());
      (o.update(l), await t(l));
    }
    const f = o.digest("hex");
    if (f !== e.sha256)
      throw new Error(`SHA256 mismatch: expected ${e.sha256}, got ${f}`);
  } finally {
    (clearTimeout(r), a.abort());
  }
}
async function O(e) {
  const t = [];
  return (
    await m(e, async (a) => {
      t.push(a);
    }),
    Buffer.concat(t)
  );
}
async function _(e, t) {
  await n.rm(t, { force: !0 });
  const a = await n.open(t, "w");
  let r = 0;
  try {
    await m(e, async (s) => {
      let o = 0;
      for (; o < s.byteLength; ) {
        const i = await a.write(s, o, s.byteLength - o, r + o);
        if (i.bytesWritten === 0)
          throw new Error("Archive download stopped making progress");
        o += i.bytesWritten;
      }
      r += s.byteLength;
    });
  } catch (s) {
    throw (await a.close(), await n.rm(t, { force: !0 }), s);
  }
  await a.close();
}
async function F(e, t, a, r) {
  const s = g.getToolBinaryFileName(e, r),
    o = c.join(a, s),
    i = `${o}.tmp-${process.pid}-${Date.now()}`;
  (await n.writeFile(i, t),
    process.platform !== "win32" && (await n.chmod(i, 493)),
    await n.rm(o, { force: !0 }),
    s !== e && (await n.rm(c.join(a, e), { force: !0 })),
    await n.rename(i, o));
}
async function A(e, t, a, r, s) {
  const o = c.join(r, `.staging-${e}-${process.pid}-${y.randomUUID()}`);
  await n.mkdir(o, { recursive: !0 });
  try {
    a.format === "tar.gz"
      ? await S.x({ file: t, cwd: o })
      : await T.extractZipArchive(t, o);
    for (const i of a.extract) {
      const f = c.join(o, i.from),
        l = c.join(r, i.to.replace(/\/+$/, ""));
      (await n.rm(l, { recursive: !0, force: !0 }),
        await n.mkdir(c.dirname(l), { recursive: !0 }),
        await n.rename(f, l));
    }
    for (const i of a.inlineFiles ?? []) {
      const f = c.join(r, i.to);
      (await n.rm(f, { recursive: !0, force: !0 }),
        await n.mkdir(c.dirname(f), { recursive: !0 }),
        await n.writeFile(f, i.content),
        i.executable && !s.startsWith("win32-") && (await n.chmod(f, 493)));
    }
    if (a.symlinks)
      for (const i of a.symlinks) {
        const f = c.join(r, i.from);
        (await n.rm(f, { force: !0 }), await n.symlink(i.to, f));
      }
  } finally {
    (await n.rm(o, { recursive: !0, force: !0 }), await n.rm(t, { force: !0 }));
  }
}
async function P(e, t, a) {
  const r = p(a, e.name);
  (await n.mkdir(c.dirname(r), { recursive: !0 }),
    await n.writeFile(
      r,
      JSON.stringify({
        sha256: t.sha256,
        version: e.version,
        stagedAt: new Date().toISOString(),
      }),
    ));
}
function p(e, t) {
  return c.join(e, ".staged", `${t}.json`);
}
async function u(e) {
  try {
    return (await n.access(e), !0);
  } catch {
    return !1;
  }
}
async function q(e) {
  try {
    return (await n.access(e, b.constants.X_OK), !0);
  } catch {
    return !1;
  }
}
exports.installSandboxTool = j;
