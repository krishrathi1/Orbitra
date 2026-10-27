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
      (e._sentryDebugIds[t] = "3518afbd-b797-466b-be70-e9b9962e9832"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-3518afbd-b797-466b-be70-e9b9962e9832"));
  })();
} catch {}
const s = require("./chunks/fs-native-KvxiM8hl.js");
require("node:module");
if (!process.parentPort)
  throw new Error(
    "ExecutablePrewarmWorker must run in an Electron utility process.",
  );
const o = s.loadFsNativeAddon("prewarmExecutable");
async function d(e) {
  if (!o) return { status: "unavailable" };
  const t = performance.now(),
    n = () => Math.round(performance.now() - t);
  try {
    return (await o.prewarmExecutable(e), { status: "done", durationMs: n() });
  } catch (r) {
    const a = r instanceof Error ? r.message : String(r);
    return { status: "failed", durationMs: n(), error: a };
  }
}
process.parentPort.once("message", (e) => {
  d(e.data.executablePath).then((t) => {
    process.parentPort?.postMessage(t);
  });
});
