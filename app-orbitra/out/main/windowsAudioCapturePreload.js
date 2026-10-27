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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "68113852-bac3-4b89-8ea4-1eb3aeea3fcf"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-68113852-bac3-4b89-8ea4-1eb3aeea3fcf"));
  })();
} catch {}
const d = require("electron");
d.contextBridge.exposeInMainWorld("winAudioCapture", {
  sendFrame(e, n) {
    d.ipcRenderer.send("win-audio-capture:frame", e, n);
  },
  sendReady() {
    d.ipcRenderer.send("win-audio-capture:ready");
  },
  sendError(e) {
    d.ipcRenderer.send("win-audio-capture:error", e);
  },
  sendDevices(e) {
    d.ipcRenderer.send("win-audio-capture:devices", e);
  },
  onCommand(e) {
    d.ipcRenderer.on("win-audio-capture:cmd", (n, i) => {
      e(i);
    });
  },
});
