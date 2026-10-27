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
      a = new t.Error().stack;
    a &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[a] = "575d942e-0967-4d96-a9a2-82229d0c941f"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-575d942e-0967-4d96-a9a2-82229d0c941f"));
  })();
} catch {}
const F = require("node:events"),
  T = require("node:worker_threads"),
  g = require("node:fs"),
  f = require("node:fs/promises"),
  h = require("node:path"),
  b = 128 * 1024,
  v = async (t) => {
    const a = h.dirname(t.logFile),
      p = `${h.basename(t.logFile)}.`;
    await f.mkdir(a, { recursive: !0 });
    let o = await f.stat(t.logFile).then(
        (e) => e.size,
        (e) => {
          if (e.code === "ENOENT") return 0;
          throw e;
        },
      ),
      $ = 0,
      m = null,
      r = t.consoleOutput
        ? g.createWriteStream("", {
            fd: 1,
            autoClose: !1,
            highWaterMark: b,
            fs: { write: g.write, writev: g.writev, close: (e, i) => i(null) },
          })
        : null,
      y = 0;
    r?.on("error", () => {});
    const _ = async () => {
        const e = await f.readdir(a, { withFileTypes: !0 }),
          i = await Promise.all(
            e
              .filter((n) => n.isFile() && n.name.startsWith(p))
              .map(async (n) => {
                const s = h.join(a, n.name);
                return { name: s, modifiedAt: (await f.stat(s)).mtimeMs };
              }),
          );
        (i.sort(
          (n, s) =>
            s.modifiedAt - n.modifiedAt ||
            s.name.localeCompare(n.name, "en", { numeric: !0 }),
        ),
          await Promise.all(i.slice(t.maxFiles).map((n) => f.unlink(n.name))));
      },
      A = async () => {
        const e = g.createWriteStream(t.logFile, {
          flags: "a",
          highWaterMark: b,
        });
        return (e.on("error", () => {}), await F.once(e, "open"), e);
      },
      k = async () => {
        if (!m) return;
        const e = m;
        if (((m = null), e.closed)) return;
        const i = F.once(e, "close");
        (e.end(), await i);
      },
      E = async (e) => {
        const i = Buffer.byteLength(e);
        if (o > 0 && o + i > t.maxFileBytes) {
          await k();
          const s = new Date().toISOString().replace(/[:.]/g, "-");
          (await f.rename(t.logFile, `${t.logFile}.${s}.${process.pid}.${$++}`),
            (o = 0),
            await _());
        }
        m ??= await A();
        const n = m;
        (await new Promise((s, c) => {
          n.write(e, (l) => (l ? c(l) : s()));
        }),
          (o += i));
      };
    return (
      await _(),
      {
        async write(e) {
          let i = "",
            n = 0;
          for (const s of e) {
            const c = `${JSON.stringify(s)}
`,
              l = Buffer.byteLength(c);
            (n > 0 &&
              n + l > Math.min(b, t.maxFileBytes) &&
              (await E(i), (i = ""), (n = 0)),
              (i += c),
              (n += l));
          }
          if ((i && (await E(i)), r)) {
            const s = r;
            if (s.writableNeedDrain) {
              y += e.length;
              return;
            }
            const c = y
              ? `[logger] skipped ${y} console entries while output was busy; file logs retained
`
              : "";
            y = 0;
            const l =
              c +
              e
                .map(
                  (d) => `${d.timestamp} ${d.level} [${d.flag}]: ${d.message}
`,
                )
                .join("");
            s.write(l, (d) => {
              d && ((r = null), s.destroy());
            });
          }
        },
        async close() {
          if ((await k(), r)) {
            const e = r;
            ((r = null),
              await new Promise((i) => {
                const n = setTimeout(() => {
                  (e.destroy(), i());
                }, 100);
                e.end(() => {
                  (clearTimeout(n), i());
                });
              }));
          }
        },
      }
    );
  },
  u = T.parentPort;
if (!u) throw new Error("Log writer requires a worker message port");
let w = null;
const I = async () => {
  const t = F.on(u, "message"),
    a = await v(T.workerData);
  try {
    for await (const p of t) {
      const o = p[0];
      if (o.type === "close") {
        ((w = new Int32Array(o.completion)),
          await a.write(o.logs),
          await a.close(),
          Atomics.store(w, 0, 1),
          Atomics.notify(w, 0),
          u.close());
        return;
      }
      (await a.write(o.logs),
        u.postMessage({ type: "written", through: o.through }));
    }
  } finally {
    await a.close();
  }
};
I().catch((t) => {
  (w && (Atomics.store(w, 0, 2), Atomics.notify(w, 0)),
    u.postMessage({ type: "failed", code: t.code ?? "ERR_LOG_WRITE" }),
    u.close());
});
