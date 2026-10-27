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
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "ef4d576a-1648-4b82-962a-b6dce45d374f"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-ef4d576a-1648-4b82-962a-b6dce45d374f"));
  })();
} catch {}
const n = require("./chunks/rustImageWorker-B3ny-C4r.js");
require("@napi-rs/image");
require("heic-decode");
require("./chunks/rustImageLimits-zqqoE-LA.js");
if (!process.parentPort)
  throw new Error(
    "RustImageProcessWorker must run in an Electron utility process",
  );
process.parentPort.on("message", (e) => {
  n.processImageTask(e.data.task).then((r) => {
    const s = { id: e.data.id, result: r };
    process.parentPort?.postMessage(s);
  });
});
