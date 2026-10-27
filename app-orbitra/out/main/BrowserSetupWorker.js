"use strict";
var d = Object.create;
var l = Object.defineProperty;
var c = Object.getOwnPropertyDescriptor;
var b = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf,
  f = Object.prototype.hasOwnProperty;
var u = (n, e, t, o) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let s of b(e))
      !f.call(n, s) &&
        s !== t &&
        l(n, s, {
          get: () => e[s],
          enumerable: !(o = c(e, s)) || o.enumerable,
        });
  return n;
};
var g = (n, e, t) => (
  (t = n != null ? d(p(n)) : {}),
  u(
    e || !n || !n.__esModule
      ? l(t, "default", { value: n, enumerable: !0 })
      : t,
    n,
  )
);
(function () {
  try {
    var n =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    n.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new n.Error().stack;
    e &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[e] = "d1b4e02c-fa96-4a63-b046-bdb59515430a"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-d1b4e02c-fa96-4a63-b046-bdb59515430a"));
  })();
} catch {}
const r = process.parentPort;
if (!r) throw new Error("Browser setup requires an Electron utility process");
const i = new AbortController(),
  a = new Set();
async function y({ id: n, request: e }) {
  try {
    let t = null;
    switch (e.type) {
      case "stage-tool": {
        const { installSandboxTool: o } = await Promise.resolve().then(() =>
          require("./chunks/installSandboxTool-WYmbNpn4.js"),
        );
        await o(e.tool, e.binDir, e.platformKey);
        break;
      }
      case "build-adblock": {
        const { FiltersEngine: o } = await import(
            "@ghostery/adblocker-electron"
          ),
          s = o.parse(
            e.lists.join(`
`),
            { enableCompression: e.enableCompression },
          );
        (s.updateResources(e.resources, String(e.resources.length)),
          (t = s.serialize()));
        break;
      }
      case "prepare-python-runtime": {
        const { SandboxPythonRuntimeManager: o } = await Promise.resolve().then(
          () => require("./chunks/SandboxPythonRuntimeManager-BIfItR--.js"),
        );
        t = await new o(e.options, i.signal).ensureReady();
        break;
      }
    }
    r?.postMessage({ type: "result", id: n, result: t });
  } catch (t) {
    r?.postMessage({
      type: "error",
      id: n,
      message: t instanceof Error ? t.message : String(t),
    });
  }
}
r.on("message", (n) => {
  const e = n.data;
  if ("type" in e) {
    (i.abort(new Error("Browser setup is shutting down")),
      Promise.allSettled(a).then(() => process.exit(0)));
    return;
  }
  if (i.signal.aborted) return;
  const t = y(e);
  (a.add(t), t.finally(() => a.delete(t)));
});
r.postMessage({ type: "ready" });
