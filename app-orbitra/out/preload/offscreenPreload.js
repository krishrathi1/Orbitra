"use strict";
!(function () {
  try {
    var e =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
              ? self
              : {};
    e.SENTRY_RELEASE = { id: "1.0.3" };
  } catch (e2) {}
})();
{
  try {
    (function () {
      var e =
          "undefined" != typeof window
            ? window
            : "undefined" != typeof global
              ? global
              : "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof self
                  ? self
                  : {},
        n = new e.Error().stack;
      n &&
        ((e._sentryDebugIds = e._sentryDebugIds || {}),
        (e._sentryDebugIds[n] = "4ca8bbe1-7a7a-4254-b1ff-c78a4b71cac3"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-4ca8bbe1-7a7a-4254-b1ff-c78a4b71cac3"));
    })();
  } catch (e) {}
}
const electron = require("electron");
function ipcSignalMatchesFilter(filter, envelope) {
  const filterKey = filter.subscriptionKey ?? "";
  const envelopeKey = envelope.subscriptionKey ?? "";
  return (
    filterKey === envelopeKey &&
    filter.domain === envelope.signal.domain &&
    filter.type === envelope.signal.type
  );
}
function getPreloadContext() {
  try {
    return electron.ipcRenderer.sendSync("preload:get-context");
  } catch {
    return null;
  }
}
function argvValue(prefix) {
  return (
    process.argv.find((arg) => arg.startsWith(prefix))?.split("=")[1] ?? ""
  );
}
function argvAssetServerPort() {
  const value = argvValue("--asset-server-port=");
  if (!value) return null;
  const port = Number.parseInt(value, 10);
  return Number.isFinite(port) ? port : null;
}
function argvAllowedInvocations() {
  const value = argvValue("--offscreen-allowed-invocations=");
  if (!value) return [];
  try {
    return decodeURIComponent(value)
      .split(",")
      .map((eventName) => eventName.trim())
      .filter((eventName) => eventName.length > 0);
  } catch {
    return value
      .split(",")
      .map((eventName) => eventName.trim())
      .filter((eventName) => eventName.length > 0);
  }
}
const preloadContext = getPreloadContext();
const windowId = preloadContext?.windowId ?? argvValue("--window-id=");
const layerId = preloadContext?.layerId ?? argvValue("--layer-id=");
const profileId = preloadContext?.profileId ?? argvValue("--profile-id=");
const layerType = preloadContext?.layerType ?? argvValue("--layer-type=");
const initialTheme =
  preloadContext?.initialTheme ?? argvValue("--initial-theme=");
const assetServerPort =
  preloadContext?.assetServerPort ?? argvAssetServerPort();
const allowedInvocations = new Set(
  preloadContext?.offscreen?.allowedInvocations ?? argvAllowedInvocations(),
);
const ipcSignalListeners = /* @__PURE__ */ new Set();
let ipcSignalTransportAttached = false;
function ensureIPCSignalTransport() {
  if (ipcSignalTransportAttached) return;
  ipcSignalTransportAttached = true;
  electron.ipcRenderer.on("ipc:signal", (_event, payload) => {
    for (const entry of ipcSignalListeners) {
      if (ipcSignalMatchesFilter(entry.filter, payload)) {
        entry.callback(payload.signal);
      }
    }
  });
}
function blockedInvokeResult() {
  return null;
}
const api = {
  sendUIEvent: () => {},
  onEvent: (eventName, callback) => {
    const handler = (_event, payload) => {
      callback(payload);
    };
    electron.ipcRenderer.on(String(eventName), handler);
    return () =>
      electron.ipcRenderer.removeListener(String(eventName), handler);
  },
  onIPCSignal: (filter, callback) => {
    ensureIPCSignalTransport();
    const entry = { filter, callback };
    ipcSignalListeners.add(entry);
    return () => {
      ipcSignalListeners.delete(entry);
    };
  },
  // Key-scoped signal routing needs a renderer-to-main registration channel,
  // which this bridge intentionally does not expose. Offscreen renderers only
  // receive signals that main targets at them directly via
  // sendToOffscreenRenderers, so these registrations have nothing to do.
  subscribeIPCSignal: () => {},
  unsubscribeIPCSignal: () => {},
  getWindowId: () => windowId,
  getProfileId: () => profileId,
  getLayerType: () => layerType,
  getLayerId: () => layerId,
  getAssetServerPort: () => assetServerPort,
  getInitialTheme: () => {
    return initialTheme === "light" || initialTheme === "dark"
      ? initialTheme
      : "dark";
  },
  getInitialProfileTheme: () => ({ hue: 266, chroma: 0.025 }),
  invoke: async (eventName, payload) => {
    if (!allowedInvocations.has(String(eventName))) {
      return blockedInvokeResult();
    }
    try {
      return await electron.ipcRenderer.invoke("dendrite-invoke", {
        payload: {
          ...payload,
          windowId,
          layerId,
          eventName,
        },
      });
    } catch {
      return blockedInvokeResult();
    }
  },
};
electron.contextBridge.exposeInMainWorld("electronAPI", api);
