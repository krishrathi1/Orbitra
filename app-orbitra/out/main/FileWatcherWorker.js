"use strict";
var P = Object.create;
var y = Object.defineProperty;
var D = Object.getOwnPropertyDescriptor;
var T = Object.getOwnPropertyNames;
var N = Object.getPrototypeOf,
  _ = Object.prototype.hasOwnProperty;
var I = (t, e, s, i) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let r of T(e))
      !_.call(t, r) &&
        r !== s &&
        y(t, r, {
          get: () => e[r],
          enumerable: !(i = D(e, r)) || i.enumerable,
        });
  return t;
};
var k = (t, e, s) => (
  (s = t != null ? P(N(t)) : {}),
  I(
    e || !t || !t.__esModule
      ? y(s, "default", { value: t, enumerable: !0 })
      : s,
    t,
  )
);
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
      (t._sentryDebugIds[e] = "21bd5088-98aa-4998-9534-4b6cbc094393"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-21bd5088-98aa-4998-9534-4b6cbc094393"));
  })();
} catch {}
const M = require("node:fs"),
  v = require("node:fs/promises"),
  E = require("node:path"),
  R = require("./chunks/index-C4t9jrSl.js"),
  W = require("./chunks/config-CdpnFYk6.js"),
  G = require("./chunks/fs-native-KvxiM8hl.js");
require("./chunks/_commonjsHelpers-DJP3_Dvh.js");
require("node:module");
const w = "[FileWatcher]",
  m = process.platform === "darwin" ? "parcel" : "node",
  A = process.platform === "win32",
  C = process.platform === "win32" ? 500 : 200,
  o = process.platform === "win32" ? E.win32 : E.posix;
class F {
  opts;
  subscription = null;
  pendingEvents = [];
  debounceTimer = null;
  expectedWrites = new Map();
  _isWatching = !1;
  parcel = null;
  watchGeneration = 0;
  constructor(e) {
    this.opts = {
      ...e,
      debounceMs: e.debounceMs ?? 100,
      suppressionWindowMs: e.suppressionWindowMs ?? C,
    };
  }
  async getParcel() {
    return (
      this.parcel || (this.parcel = await import("@parcel/watcher")),
      this.parcel
    );
  }
  async start() {
    if (this._isWatching) return;
    (console.info(`${w} Startup phase: resolving root`),
      (this.opts.rootDir = await v
        .realpath(this.opts.rootDir)
        .catch(() => this.opts.rootDir)),
      console.info(`${w} Startup phase complete: root resolved`));
    const e = [
      ...W.syncedFSConfig.WATCHER_IGNORE_GLOBS,
      ...(this.opts.ignore ?? []),
    ];
    if (m === "node") {
      (this.watchGeneration++,
        (this.subscription =
          this.opts.nativeWatch === void 0
            ? this.startNodeSubscription(e, this.watchGeneration)
            : this.startNativeSubscription(
                this.opts.nativeWatch,
                e,
                this.watchGeneration,
              )),
        (this._isWatching = !0));
      return;
    }
    console.info(`${w} Startup phase: loading Parcel`);
    const s = await this.getParcel();
    if (
      (console.info(`${w} Startup phase complete: Parcel loaded`),
      this.opts.snapshotPath)
    )
      try {
        const i = await s.getEventsSince(
          this.opts.rootDir,
          this.opts.snapshotPath,
          { ignore: e },
        );
        if (i.length > 0) {
          const r = i.map((a) => this.toFileEvent(a));
          this.opts.onChange(r);
        }
      } catch {}
    (console.info(`${w} Startup phase: starting Parcel subscription`),
      (this.subscription = await s.subscribe(
        this.opts.rootDir,
        (i, r) => {
          if (i) {
            this.opts.onError?.(i);
            return;
          }
          this.handleRawEvents(r);
        },
        { ignore: e },
      )),
      console.info(`${w} Startup phase complete: Parcel subscribed`),
      (this._isWatching = !0));
  }
  async stop() {
    if (!(!this._isWatching && !this.subscription)) {
      (this.watchGeneration++,
        this.debounceTimer &&
          (clearTimeout(this.debounceTimer), (this.debounceTimer = null)),
        this.pendingEvents.length > 0 && this.flush());
      for (const e of this.expectedWrites.values()) clearTimeout(e);
      if (
        (this.expectedWrites.clear(),
        this.subscription &&
          (await this.subscription.unsubscribe(), (this.subscription = null)),
        this.opts.snapshotPath && m === "parcel")
      )
        try {
          await (
            await this.getParcel()
          ).writeSnapshot(this.opts.rootDir, this.opts.snapshotPath, {
            ignore: [
              ...W.syncedFSConfig.WATCHER_IGNORE_GLOBS,
              ...(this.opts.ignore ?? []),
            ],
          });
        } catch {}
      this._isWatching = !1;
    }
  }
  isWatching() {
    return this._isWatching;
  }
  expectWrite(e) {
    const s = o.resolve(e),
      i = this.expectedWrites.get(s);
    i && clearTimeout(i);
    const r = setTimeout(() => {
      this.expectedWrites.delete(s);
    }, this.opts.suppressionWindowMs);
    this.expectedWrites.set(s, r);
  }
  clearExpected(e) {
    const s = o.resolve(e),
      i = this.expectedWrites.get(s);
    i && (clearTimeout(i), this.expectedWrites.delete(s));
  }
  get expectedWriteCount() {
    return this.expectedWrites.size;
  }
  startNodeSubscription(e, s) {
    const i = this.createNodeIgnoreMatcher(e),
      r = M.watch(this.opts.rootDir, { recursive: !0 }, (a, n) => {
        if (typeof n != "string") {
          this.opts.onError?.(
            new Error("Recursive file watcher dropped an event without a path"),
          );
          return;
        }
        this.handleNodeEvent(a, n, i, s).catch((p) => {
          this.opts.onError?.(p);
        });
      });
    return (
      r.on("error", (a) => {
        s === this.watchGeneration &&
          (this.watchGeneration++,
          (this._isWatching = !1),
          this.opts.onError?.(
            new Error(
              `Recursive file watcher stopped after dropping events: ${a.message}`,
              { cause: a },
            ),
          ));
      }),
      {
        unsubscribe: async () => {
          r.close();
        },
      }
    );
  }
  startNativeSubscription(e, s, i) {
    const r = this.createNodeIgnoreMatcher(s),
      a = this.opts.rootDir,
      n = e(o.toNamespacedPath(a), (p, l) => {
        if (i !== this.watchGeneration) return;
        if (p !== null || l === void 0) {
          (this.watchGeneration++,
            (this._isWatching = !1),
            this.opts.onError?.(
              new Error(
                `Recursive file watcher stopped after dropping events: ${p?.message ?? "no batch"}`,
                { cause: p },
              ),
            ));
          return;
        }
        l.overflow &&
          this.opts.onError?.(
            new Error("Recursive file watcher dropped an event without a path"),
          );
        const f = [];
        for (const u of l.events) {
          const g = o.join(a, u.path),
            x = u.path.split(o.sep).join("/");
          if (r(g, x)) continue;
          let b;
          switch (u.action) {
            case "added":
            case "renamed-to":
              b = "create";
              break;
            case "modified":
              b = "update";
              break;
            case "removed":
            case "renamed-from":
              b = "delete";
              break;
          }
          f.push({ type: b, path: g });
        }
        f.length > 0 && this.handleRawEvents(f);
      });
    return {
      unsubscribe: async () => {
        n.close();
      },
    };
  }
  createNodeIgnoreMatcher(e) {
    const s = (n) => (A ? n.toLowerCase() : n),
      i = e.filter((n) => o.isAbsolute(n)).map((n) => s(o.normalize(n))),
      r = e.filter((n) => !o.isAbsolute(n)),
      a = R.ignore().add(r);
    return (n, p) => {
      const l = s(o.normalize(n));
      return (
        i.some((u) => {
          const g = u.endsWith(o.sep) ? u : `${u}${o.sep}`;
          return l === u || l.startsWith(g);
        }) || a.ignores(p)
      );
    };
  }
  async handleNodeEvent(e, s, i, r) {
    if (r !== this.watchGeneration) return;
    const a = o.resolve(this.opts.rootDir, s),
      n = o.relative(this.opts.rootDir, a).split(o.sep).join("/");
    if (!n || n.startsWith("../") || i(a, n)) return;
    let p = "update";
    if (e === "rename")
      p = await v.lstat(a).then(
        () => "create",
        (l) => {
          if (l.code === "ENOENT") return "delete";
          throw l;
        },
      );
    else if (
      process.platform === "win32" &&
      (await v.lstat(a).then(
        (f) => f.isDirectory(),
        () => !1,
      ))
    )
      return;
    r === this.watchGeneration && this.handleRawEvents([{ type: p, path: a }]);
  }
  handleRawEvents(e) {
    for (const s of e) {
      const i = o.resolve(s.path);
      if (this.expectedWrites.has(i)) {
        if (m === "parcel") {
          const r = this.expectedWrites.get(i);
          (clearTimeout(r), this.expectedWrites.delete(i));
        }
        continue;
      }
      this.pendingEvents.push(this.toFileEvent(s));
    }
    this.pendingEvents.length > 0 && this.scheduleFlush();
  }
  toFileEvent(e) {
    const s = o.resolve(e.path),
      i = o.relative(this.opts.rootDir, s).split(o.sep).join("/");
    return { type: e.type, path: s, relativePath: i, timestamp: Date.now() };
  }
  scheduleFlush() {
    this.debounceTimer ||
      (this.debounceTimer = setTimeout(() => {
        this.flush();
      }, this.opts.debounceMs));
  }
  flush() {
    if (((this.debounceTimer = null), this.pendingEvents.length === 0)) return;
    const e = this.pendingEvents;
    ((this.pendingEvents = []), this.opts.onChange(e));
  }
}
process.on("SIGINT", () => {});
let c = null;
const S = G.loadFsNativeAddon("watchDirectory")?.watchDirectory;
function d(t) {
  process.parentPort?.postMessage(t);
}
function h(t, ...e) {
  const s = "[FileWatcherWorker]";
  t === "error"
    ? console.error(s, ...e)
    : t === "warn"
      ? console.warn(s, ...e)
      : console.log(s, ...e);
}
async function z(t) {
  (h("info", "Init received"),
    c &&
      (h("warn", "Already initialized, stopping existing watcher first"),
      await c.stop(),
      (c = null)),
    (c = new F({
      rootDir: t.rootDir,
      ignore: t.ignore,
      snapshotPath: t.snapshotPath,
      debounceMs: t.debounceMs,
      suppressionWindowMs: t.suppressionWindowMs,
      nativeWatch: S,
      onChange: (e) => {
        d({ type: "events", events: e });
      },
      onError: (e) => {
        const s = { message: e.message, stack: e.stack };
        if (!c?.isWatching()) {
          d({ type: "watcher-failed", error: s });
          return;
        }
        d({ type: "error", error: s });
      },
    })),
    await c.start(),
    h("info", `Watching ${t.rootDir}`),
    d({ type: "ready" }));
}
async function $() {
  (c && (await c.stop(), (c = null), h("info", "Stopped")),
    d({ type: "stopped" }));
}
async function q() {
  (c && (await c.stop(), (c = null)),
    h("info", "Shutdown complete"),
    d({ type: "stopped" }),
    process.exit(0));
}
async function j(t) {
  if (typeof t != "object" || t === null || !("type" in t)) {
    h("warn", "Unknown message:", t);
    return;
  }
  const e = t;
  switch (e.type) {
    case "init":
      try {
        await z(e);
      } catch (s) {
        const i = s instanceof Error ? s : new Error(String(s));
        (h("error", "Init failed:", i.message),
          d({
            type: "watcher-failed",
            error: { message: i.message, stack: i.stack },
          }));
      }
      break;
    case "expectWrite":
      c?.expectWrite(e.absolutePath);
      break;
    case "clearExpected":
      c?.clearExpected(e.absolutePath);
      break;
    case "stop":
      await $();
      break;
    case "shutdown":
      await q();
      break;
    default:
      h("warn", "Unhandled message type:", e.type);
  }
}
process.parentPort
  ? (h("info", "Starting..."),
    process.parentPort.on("message", (t) => {
      j(t.data);
    }),
    process.on("uncaughtException", (t) => {
      (h("error", "Uncaught exception:", t.message, t.stack),
        d({ type: "error", error: { message: t.message, stack: t.stack } }));
    }),
    process.on("unhandledRejection", (t) => {
      const e = t instanceof Error ? t.message : String(t),
        s = t instanceof Error ? t.stack : void 0;
      (h("error", "Unhandled rejection:", e),
        d({ type: "error", error: { message: e, stack: s } }));
    }),
    h("info", "Ready, waiting for init message..."),
    d({
      type: "loaded",
      uptimeMs: Math.round(process.uptime() * 1e3),
      nativeWatch: S !== void 0,
    }))
  : (console.error(
      "[FileWatcherWorker] No parentPort available — not running as utilityProcess",
    ),
    process.exit(1));
