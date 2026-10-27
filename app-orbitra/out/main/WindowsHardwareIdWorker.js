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
      o = new e.Error().stack;
    o &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[o] = "ef0d3c9a-7c49-4b68-bfd5-b041aa15620e"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-ef0d3c9a-7c49-4b68-bfd5-b041aa15620e"));
  })();
} catch {}
const a = require("node:module"),
  t = require("node:worker_threads");
if (!t.parentPort)
  throw new Error("Hardware identity requires a worker thread");
const n = t.parentPort,
  s = a.createRequire(t.workerData.addonPath),
  i = performance.now();
let d = "load";
try {
  const e = s(t.workerData.addonPath),
    o = performance.now();
  d = "lookup";
  const r = e.getSystemUuid();
  n.postMessage({
    status: "done",
    uuid: r,
    loadMs: Math.round(o - i),
    lookupMs: Math.round(performance.now() - o),
  });
} catch {
  n.postMessage({ status: "failed", phase: d });
}
