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
        (e._sentryDebugIds[n] = "52f280c1-67bf-4b21-9f6b-d587b0759611"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-52f280c1-67bf-4b21-9f6b-d587b0759611"));
    })();
  } catch (e) {}
}
const electron = require("electron");
const REMOTE_EXTENSION_API_HANDLERS = [
  "browserAction.getState",
  "browserAction.activate",
  "browserAction.getIconDataURL",
  "browserAction.addObserver",
  "browserAction.removeObserver",
];
const remoteExtensionApiHandlerSet = new Set(REMOTE_EXTENSION_API_HANDLERS);
function isRemoteExtensionApiHandler(handlerName) {
  return remoteExtensionApiHandlerSet.has(handlerName);
}
function assertRemoteExtensionApiHandler(handlerName) {
  if (isRemoteExtensionApiHandler(handlerName)) return;
  throw new Error(
    `remote extension API handler is not exposed: ${handlerName}`,
  );
}
const preloadModuleStartedAt =
  typeof performance === "undefined" ? 0 : performance.now();
const newWindowTimingEnabled = process.env.ORBITRA_NEW_WINDOW_TIMING === "1";
const newWindowTimingLogsEnabled =
  process.env.ORBITRA_NEW_WINDOW_TIMING_LOGS === "1";
function getPoolContext() {
  try {
    return electron.ipcRenderer.sendSync("preload:get-context");
  } catch {
    return null;
  }
}
function argvValue(prefix) {
  return process.argv.find((a) => a.startsWith(prefix))?.split("=")[1] ?? "";
}
function argvAssetServerPort() {
  const p = process.argv.find((a) => a.startsWith("--asset-server-port="));
  return p ? parseInt(p.split("=")[1], 10) : null;
}
function argvNumber(prefix, fallback) {
  const value = Number(argvValue(prefix));
  return Number.isFinite(value) ? value : fallback;
}
const poolContextStartedAt =
  typeof performance === "undefined" ? 0 : performance.now();
const poolCtx = getPoolContext();
const poolContextDurationMs =
  typeof performance === "undefined"
    ? 0
    : performance.now() - poolContextStartedAt;
let windowId = poolCtx?.windowId ?? argvValue("--window-id=");
let layerId = poolCtx?.layerId ?? argvValue("--layer-id=");
let profileId = poolCtx?.profileId ?? argvValue("--profile-id=");
let layerType = poolCtx?.layerType ?? argvValue("--layer-type=");
const initialTheme = poolCtx?.initialTheme ?? argvValue("--initial-theme=");
let initialThemeHue =
  poolCtx?.initialThemeHue ?? argvNumber("--initial-theme-hue=", 266);
let initialThemeChroma =
  poolCtx?.initialThemeChroma ?? argvNumber("--initial-theme-chroma=", 0.025);
const assetServerPort = poolCtx?.assetServerPort ?? argvAssetServerPort();
window.addEventListener(
  "wheel",
  (event) => {
    if (layerType !== "ui-tab" || !event.ctrlKey) return;
    event.preventDefault();
  },
  { capture: true, passive: false },
);
function sanitizePreloadTimingMetadata(metadata) {
  const sanitized = {};
  for (const [key, value] of Object.entries(metadata)) {
    if (value === void 0) continue;
    sanitized[key] = value;
  }
  return sanitized;
}
function markPreloadNewWindowTiming(name, metadata = {}) {
  if (!newWindowTimingEnabled || !newWindowTimingLogsEnabled) return;
  if (typeof performance === "undefined") return;
  const fullName = name.startsWith("new-window.") ? name : `new-window.${name}`;
  const elapsedMs = roundPerfNumber(performance.now());
  const cleanMetadata = sanitizePreloadTimingMetadata({
    ...metadata,
    layerId,
    layerType,
    windowId,
    documentReadyState:
      typeof document === "undefined" ? null : document.readyState,
  });
  console.info(
    `[NewWindowTiming] ${JSON.stringify({
      name: fullName,
      processType: "preload",
      elapsedMs,
      epochMs: roundPerfNumber(performance.timeOrigin + elapsedMs),
      metadata: cleanMetadata,
    })}`,
  );
}
markPreloadNewWindowTiming("preload.context.resolved", {
  hasPoolContext: Boolean(poolCtx),
  hasAssetServerPort: Boolean(assetServerPort),
  moduleElapsedBeforeContextMs:
    typeof performance === "undefined"
      ? 0
      : roundPerfNumber(poolContextStartedAt - preloadModuleStartedAt),
  poolContextDurationMs: roundPerfNumber(poolContextDurationMs),
});
if (typeof document !== "undefined") {
  document.addEventListener("readystatechange", () => {
    markPreloadNewWindowTiming("preload.document.ready-state-change");
  });
  window.addEventListener(
    "DOMContentLoaded",
    () => {
      markPreloadNewWindowTiming("preload.dom-content-loaded");
    },
    { once: true },
  );
  window.addEventListener(
    "load",
    () => {
      markPreloadNewWindowTiming("preload.window-load");
    },
    { once: true },
  );
}
electron.ipcRenderer.on("pool:context-update", (_, ctx) => {
  windowId = ctx.windowId;
  layerId = ctx.layerId;
  profileId = ctx.profileId;
  layerType = ctx.layerType;
  if (
    typeof ctx.initialThemeHue === "number" &&
    Number.isFinite(ctx.initialThemeHue)
  ) {
    initialThemeHue = ctx.initialThemeHue;
  }
  if (
    typeof ctx.initialThemeChroma === "number" &&
    Number.isFinite(ctx.initialThemeChroma)
  ) {
    initialThemeChroma = ctx.initialThemeChroma;
  }
  document.documentElement.style.setProperty(
    "--theme-hue",
    String(initialThemeHue),
  );
  document.documentElement.style.setProperty(
    "--theme-chroma",
    String(initialThemeChroma),
  );
  markPreloadNewWindowTiming("preload.pool-context-updated");
});
const getWebpageAPI = () => ({
  getShortcutOverrideConfig: () => {
    try {
      if (windowId && layerId) {
        return electron.ipcRenderer.invoke("dendrite-invoke", {
          payload: {
            windowId,
            layerId,
            eventName: "shortcut:get-override-config",
          },
        });
      } else {
        return Promise.resolve({ overrideShortcuts: {} });
      }
    } catch {
      return Promise.resolve({ overrideShortcuts: {} });
    }
  },
});
const webpageAPI = getWebpageAPI();
const DEFAULT_IPC_SIGNAL_SUBSCRIPTION_KEY = "";
const ipcSignalCallbacks = /* @__PURE__ */ new Map();
const ipcStateCallbacks = /* @__PURE__ */ new Map();
let ipcSignalTransportAttached = false;
let ipcStateTransportAttached = false;
function addMappedCallback(map, key, callback) {
  const callbacks = map.get(key) ?? /* @__PURE__ */ new Set();
  callbacks.add(callback);
  map.set(key, callbacks);
  return () => {
    callbacks.delete(callback);
    if (callbacks.size === 0) {
      map.delete(key);
    }
  };
}
function addIPCSignalMappedCallback(filter, callback) {
  const subscriptionKey =
    filter.subscriptionKey ?? DEFAULT_IPC_SIGNAL_SUBSCRIPTION_KEY;
  let domainCallbacks = ipcSignalCallbacks.get(subscriptionKey);
  if (!domainCallbacks) {
    domainCallbacks = /* @__PURE__ */ new Map();
    ipcSignalCallbacks.set(subscriptionKey, domainCallbacks);
  }
  let typeCallbacks = domainCallbacks.get(filter.domain);
  if (!typeCallbacks) {
    typeCallbacks = /* @__PURE__ */ new Map();
    domainCallbacks.set(filter.domain, typeCallbacks);
  }
  let callbacks = typeCallbacks.get(filter.type);
  if (!callbacks) {
    callbacks = /* @__PURE__ */ new Set();
    typeCallbacks.set(filter.type, callbacks);
  }
  callbacks.add(callback);
  return () => {
    callbacks.delete(callback);
    if (callbacks.size > 0) return;
    typeCallbacks.delete(filter.type);
    if (typeCallbacks.size > 0) return;
    domainCallbacks.delete(filter.domain);
    if (domainCallbacks.size > 0) return;
    ipcSignalCallbacks.delete(subscriptionKey);
  };
}
function dispatchCallbacks(callbacks, payload) {
  if (!callbacks) return;
  for (const callback of callbacks) {
    callback(payload);
  }
}
function ensureIPCSignalTransport() {
  if (ipcSignalTransportAttached) return;
  ipcSignalTransportAttached = true;
  electron.ipcRenderer.on("ipc:signal", (_, payload) => {
    const signal = payload.signal;
    const subscriptionKey =
      payload.subscriptionKey ?? DEFAULT_IPC_SIGNAL_SUBSCRIPTION_KEY;
    const domainCallbacks = ipcSignalCallbacks.get(subscriptionKey);
    const typeCallbacks = domainCallbacks?.get(signal.domain);
    dispatchCallbacks(typeCallbacks?.get(signal.type), signal);
  });
}
function ensureIPCStateTransport() {
  if (ipcStateTransportAttached) return;
  ipcStateTransportAttached = true;
  electron.ipcRenderer.on("ipc:state", (_, payload) => {
    dispatchCallbacks(ipcStateCallbacks.get(payload.subscriptionKey), payload);
  });
}
function addIPCSignalCallback(filter, callback) {
  ensureIPCSignalTransport();
  return addIPCSignalMappedCallback(filter, callback);
}
function addIPCStateCallback(subscriptionKey, callback) {
  ensureIPCStateTransport();
  return addMappedCallback(ipcStateCallbacks, subscriptionKey, callback);
}
function isPerfVitalsEnabled() {
  return (
    process.env.PERF_MODE === "true" || argvValue("--perf-mode=") === "true"
  );
}
function roundPerfNumber(value) {
  return Math.round(value * 100) / 100;
}
function snapshotRect(rect) {
  if (!rect) return void 0;
  return {
    x: roundPerfNumber(rect.x),
    y: roundPerfNumber(rect.y),
    width: roundPerfNumber(rect.width),
    height: roundPerfNumber(rect.height),
  };
}
function describePerfNode(node) {
  if (!node || node.nodeType !== Node.ELEMENT_NODE) return void 0;
  const element = node;
  const tagName = element.tagName.toLowerCase();
  const testId = element.getAttribute("data-testid");
  if (testId) {
    return `${tagName}[data-testid="${testId.slice(0, 80)}"]`;
  }
  const id = element.id ? `#${element.id.slice(0, 80)}` : "";
  const classes = Array.from(element.classList)
    .slice(0, 4)
    .map((className) => `.${className.slice(0, 48)}`)
    .join("");
  const role = element.getAttribute("role");
  const roleSelector = role ? `[role="${role.slice(0, 48)}"]` : "";
  return `${tagName}${id}${classes}${roleSelector}`;
}
function createPerfVitalsTracker() {
  const enabled = isPerfVitalsEnabled();
  const startedAt =
    typeof performance === "undefined" ? 0 : roundPerfNumber(performance.now());
  const paints = [];
  const layoutShifts = [];
  const marks = [];
  const unsupportedEntryTypes = [];
  let largestContentfulPaint = null;
  let cumulativeLayoutShift = 0;
  const observeEntryType = (entryType, callback) => {
    if (typeof PerformanceObserver === "undefined") {
      unsupportedEntryTypes.push(entryType);
      return;
    }
    const supportedEntryTypes = PerformanceObserver.supportedEntryTypes;
    if (supportedEntryTypes && !supportedEntryTypes.includes(entryType)) {
      unsupportedEntryTypes.push(entryType);
      return;
    }
    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      observer.observe({ type: entryType, buffered: true });
    } catch {
      unsupportedEntryTypes.push(entryType);
    }
  };
  if (enabled && typeof performance !== "undefined") {
    observeEntryType("paint", (entries) => {
      for (const entry of entries) {
        paints.push({
          name: entry.name,
          startTime: roundPerfNumber(entry.startTime),
        });
      }
    });
    observeEntryType("largest-contentful-paint", (entries) => {
      for (const entry of entries) {
        const lcpEntry = entry;
        largestContentfulPaint = {
          startTime: roundPerfNumber(lcpEntry.startTime),
          renderTime: roundPerfNumber(lcpEntry.renderTime ?? 0),
          loadTime: roundPerfNumber(lcpEntry.loadTime ?? 0),
          size: Math.round(lcpEntry.size ?? 0),
          element: describePerfNode(lcpEntry.element),
          url: lcpEntry.url,
        };
      }
    });
    observeEntryType("layout-shift", (entries) => {
      for (const entry of entries) {
        const shiftEntry = entry;
        const value = shiftEntry.value ?? 0;
        const hadRecentInput = shiftEntry.hadRecentInput === true;
        if (!hadRecentInput) {
          cumulativeLayoutShift += value;
        }
        const sources = (shiftEntry.sources ?? []).map((source) => ({
          node: describePerfNode(source.node),
          previousRect: snapshotRect(source.previousRect),
          currentRect: snapshotRect(source.currentRect),
        }));
        layoutShifts.push({
          startTime: roundPerfNumber(shiftEntry.startTime),
          value: roundPerfNumber(value),
          hadRecentInput,
          sources,
        });
      }
    });
  }
  return {
    snapshot: () => ({
      available: typeof performance !== "undefined",
      enabled,
      startedAt,
      now:
        typeof performance === "undefined"
          ? 0
          : roundPerfNumber(performance.now()),
      url: typeof location === "undefined" ? "" : location.href,
      readyState: typeof document === "undefined" ? "" : document.readyState,
      layerId,
      layerType,
      paints: [...paints],
      largestContentfulPaint,
      cumulativeLayoutShift: roundPerfNumber(cumulativeLayoutShift),
      layoutShifts: [...layoutShifts],
      marks: [...marks],
      unsupportedEntryTypes: [...new Set(unsupportedEntryTypes)],
    }),
    mark: (name, metadata) => {
      if (!enabled || typeof performance === "undefined") return;
      marks.push({
        name,
        startTime: roundPerfNumber(performance.now()),
        ...(metadata ? { metadata } : {}),
      });
    },
  };
}
const perfVitals = createPerfVitalsTracker();
class PreloadAPI {
  constructor() {
    markPreloadNewWindowTiming("preload.api.initialize.begin");
    this.initializeAPI();
    markPreloadNewWindowTiming("preload.api.initialize.end");
  }
  initializeAPI() {
    const api = {
      platform: process.platform,
      windowsUiSimulation:
        process.platform === "darwin" &&
        process.env.ORBITRA_DEV_WINDOWS_UI === "true",
      invokeExtensionsApi: (name, partition, ...args) => {
        assertRemoteExtensionApiHandler(name);
        return electron.ipcRenderer.invoke(
          "crx-msg-remote",
          partition,
          name,
          ...args,
        );
      },
      getFilePath: (file) => {
        try {
          return electron.webUtils.getPathForFile(file);
        } catch {
          return null;
        }
      },
      sendUIEvent: (eventName, payload) => {
        electron.ipcRenderer.send("dendrite-event", {
          name: eventName,
          payload,
        });
      },
      sendIPCCommand: (command) => {
        electron.ipcRenderer.send("dendrite-event", {
          name: "ipc:command",
          payload: {
            windowId,
            layerId,
            command,
          },
        });
      },
      onEvent: (eventName, callback) => {
        const handler = (_, payload) => {
          callback(payload);
        };
        electron.ipcRenderer.on(eventName, handler);
        return () => electron.ipcRenderer.removeListener(eventName, handler);
      },
      subscribeMainEvent: (eventName, subscriptionKey) => {
        if (!subscriptionKey) return;
        electron.ipcRenderer.send("dendrite-event", {
          name: "events:subscribe",
          payload: {
            windowId,
            layerId,
            eventName,
            subscriptionKey,
          },
        });
      },
      unsubscribeMainEvent: (eventName, subscriptionKey) => {
        if (!subscriptionKey) return;
        electron.ipcRenderer.send("dendrite-event", {
          name: "events:unsubscribe",
          payload: {
            windowId,
            layerId,
            eventName,
            subscriptionKey,
          },
        });
      },
      onIPCSignal: (filter, callback) => {
        return addIPCSignalCallback(filter, callback);
      },
      onIPCState: (subscriptionKey, callback) => {
        return addIPCStateCallback(subscriptionKey, callback);
      },
      subscribeIPCSignal: (subscriptionKey) => {
        if (!subscriptionKey) return;
        electron.ipcRenderer.send("dendrite-event", {
          name: "events:subscribe",
          payload: {
            windowId,
            layerId,
            eventName: "ipc:signal",
            subscriptionKey,
          },
        });
      },
      unsubscribeIPCSignal: (subscriptionKey) => {
        if (!subscriptionKey) return;
        electron.ipcRenderer.send("dendrite-event", {
          name: "events:unsubscribe",
          payload: {
            windowId,
            layerId,
            eventName: "ipc:signal",
            subscriptionKey,
          },
        });
      },
      subscribeIPCState: (topic, key) => {
        if (!key) return;
        electron.ipcRenderer.send("dendrite-event", {
          name: "events:subscribe",
          payload: {
            windowId,
            layerId,
            eventName: "ipc:state",
            subscriptionKey: `${topic}:${key}`,
          },
        });
      },
      unsubscribeIPCState: (topic, key) => {
        if (!key) return;
        electron.ipcRenderer.send("dendrite-event", {
          name: "events:unsubscribe",
          payload: {
            windowId,
            layerId,
            eventName: "ipc:state",
            subscriptionKey: `${topic}:${key}`,
          },
        });
      },
      getWindowId: () => windowId,
      getLayerType: () => layerType,
      getLayerId: () => layerId,
      getProfileId: () => profileId,
      getAssetServerPort: () => assetServerPort,
      getInitialTheme: () => {
        return initialTheme === "light" || initialTheme === "dark"
          ? initialTheme
          : "dark";
      },
      getInitialProfileTheme: () => ({
        hue: initialThemeHue,
        chroma: initialThemeChroma,
      }),
      isNewWindowTimingEnabled: () => newWindowTimingEnabled,
      getPerfVitals: () => perfVitals.snapshot(),
      markPerf: (name, metadata) => perfVitals.mark(name, metadata),
      invoke: async (eventName, payload) => {
        try {
          return await electron.ipcRenderer.invoke("dendrite-invoke", {
            payload: { ...payload, windowId, layerId, eventName },
          });
        } catch (error) {
          let errorMessage;
          if (error instanceof Error) {
            errorMessage = error.message;
          } else if (error === null) {
            errorMessage = "null";
          } else if (error === void 0) {
            errorMessage = "undefined";
          } else {
            errorMessage = String(error);
          }
          console.warn(
            `[uiPreload] IPC invoke failed for "${String(eventName)}": ${errorMessage}`,
            error,
          );
          return null;
        }
      },
      invokeIPCQuery: async (query) => {
        return electron.ipcRenderer.invoke("dendrite-invoke", {
          payload: {
            windowId,
            layerId,
            eventName: "ipc:query",
            query,
          },
        });
      },
      onElementClicked: (jsonEvent) => {
        electron.ipcRenderer.send("element-clicked", jsonEvent);
      },
      onTextSelected: () => {},
      // Clipboard API via IPC - main process handles clipboard operations
      clipboard: {
        writeText: (text) => {
          electron.ipcRenderer.send("clipboard:write-text", text);
        },
        readText: () => {
          return electron.ipcRenderer.invoke("clipboard:read-text");
        },
      },
      calendarDebug: {
        status: () => electron.ipcRenderer.invoke("calendar:status"),
        poll: () => electron.ipcRenderer.invoke("calendar:poll"),
        scheduled: () => electron.ipcRenderer.invoke("calendar:scheduled"),
        triggerTest: (meetingUrl, title) =>
          electron.ipcRenderer.invoke(
            "calendar:trigger-test",
            meetingUrl,
            title ?? "Test Meeting",
          ),
        triggerPermissionsTest: (meetingUrl, title, force) =>
          electron.ipcRenderer.invoke(
            "calendar:trigger-permissions-test",
            meetingUrl,
            title ?? "Test Meeting",
            force,
          ),
      },
    };
    electron.contextBridge.exposeInMainWorld("electronAPI", api);
  }
}
new PreloadAPI();
try {
  electron.contextBridge.exposeInMainWorld("__dialogBridge", {
    showConfirm: (message) => {
      try {
        return electron.ipcRenderer.sendSync("webpage:dialog-confirm", message);
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error("Dialog confirm IPC failed");
      }
    },
    showAlert: (message) => {
      try {
        electron.ipcRenderer.sendSync("webpage:dialog-alert", message);
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error("Dialog alert IPC failed");
      }
    },
    showPrompt: (message, defaultValue) => {
      try {
        return electron.ipcRenderer.sendSync("webpage:dialog-prompt", {
          message,
          defaultValue,
        });
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error("Dialog prompt IPC failed");
      }
    },
  });
} catch {}
const uiDialogOverrideScript = `
  (function() {
    if (window._dialogOverrideInitialized) return;
    window._dialogOverrideInitialized = true;

    var bridge = window.__dialogBridge;
    if (!bridge) return;

    var origAlert = window.alert;
    var origConfirm = window.confirm;
    var origPrompt = window.prompt;

    window.alert = function(message) {
      try {
        bridge.showAlert(String(message != null ? message : ''));
        return undefined;
      } catch(e) {
        return origAlert.call(window, message);
      }
    };

    window.confirm = function(message) {
      try {
        return bridge.showConfirm(String(message != null ? message : ''));
      } catch(e) {
        return origConfirm.call(window, message);
      }
    };

    window.prompt = function(message, defaultValue) {
      try {
        return bridge.showPrompt(
          String(message != null ? message : ''),
          String(defaultValue != null ? defaultValue : '')
        );
      } catch(e) {
        return origPrompt.call(window, message, defaultValue);
      }
    };
  })();
`;
try {
  electron.webFrame
    .executeJavaScript(uiDialogOverrideScript, true)
    .catch(() => {});
} catch {}
class ConsoleForwarder {
  layerId;
  layerType;
  originalConsole;
  constructor() {
    this.layerId = layerId;
    this.layerType = layerType ?? "";
    this.originalConsole = { ...console };
    if (
      this.layerType === "component" &&
      process.env.NODE_ENV !== "production"
    ) {
      this.overrideConsole();
    }
  }
  overrideConsole() {
    const self2 = this;
    console.log = (...args) => {
      self2.originalConsole.log(...args);
      self2.forwardLog("log", args);
    };
    console.info = (...args) => {
      self2.originalConsole.info(...args);
      self2.forwardLog("info", args);
    };
    console.warn = (...args) => {
      self2.originalConsole.warn(...args);
      self2.forwardLog("warn", args);
    };
    console.error = (...args) => {
      self2.originalConsole.error(...args);
      self2.forwardLog("error", args);
    };
  }
  forwardLog(level, args) {
    try {
      const message = args
        .map((arg) => {
          if (typeof arg === "object") {
            try {
              return JSON.stringify(arg);
            } catch {
              return String(arg);
            }
          }
          return String(arg);
        })
        .join(" ");
      electron.ipcRenderer.send("dendrite-event", {
        name: "console:forward",
        payload: {
          layerId: this.layerId,
          level,
          message,
        },
      });
    } catch {}
  }
}
new ConsoleForwarder();
const editableShortcutInputTypes = /* @__PURE__ */ new Set([
  "date",
  "datetime-local",
  "email",
  "month",
  "number",
  "password",
  "search",
  "tel",
  "text",
  "time",
  "url",
  "week",
]);
function isEditableShortcutElement(element) {
  if (element instanceof HTMLTextAreaElement) {
    return true;
  }
  if (element instanceof HTMLInputElement) {
    return editableShortcutInputTypes.has(element.type.toLowerCase());
  }
  if (element instanceof HTMLElement) {
    if (element.isContentEditable) {
      return true;
    }
    const contentEditable = element.getAttribute("contenteditable");
    if (contentEditable !== null && contentEditable.toLowerCase() !== "false") {
      return true;
    }
  }
  const role = element.getAttribute("role")?.toLowerCase();
  return role === "textbox" || role === "searchbox";
}
function shouldSkipShortcutOverrideForEvent(shortcutString, event) {
  if (shortcutString !== "cmd+left" && shortcutString !== "cmd+right") {
    return false;
  }
  for (const target of event.composedPath()) {
    if (target instanceof Element && isEditableShortcutElement(target)) {
      return true;
    }
  }
  return false;
}
class ShortcutOverrideHandler {
  overrideConfig = {};
  isInitialized = false;
  async initialize() {
    if (!this.isInitialized) {
      window.addEventListener("keydown", this.handleKeyDown.bind(this), true);
      this.isInitialized = true;
    }
    await this.refresh();
  }
  async refresh() {
    try {
      const config = await webpageAPI.getShortcutOverrideConfig();
      this.overrideConfig = config.overrideShortcuts;
    } catch {}
  }
  /**
   * Generate a shortcut string that matches the format used by GlobalShortcutManager
   */
  generateShortcutString(key, ctrlKey, metaKey, shiftKey, altKey) {
    const modifiers = [];
    if (ctrlKey) modifiers.push("ctrl");
    if (metaKey) modifiers.push("cmd");
    if (altKey) modifiers.push("alt");
    if (shiftKey) modifiers.push("shift");
    return [...modifiers, key.toLowerCase()].join("+");
  }
  handleKeyDown(event) {
    const { ctrlKey, metaKey, key, code, shiftKey, altKey } = event;
    const originalKey = key;
    let normalizedKey = key.toLowerCase();
    switch (normalizedKey) {
      case "arrowleft":
        normalizedKey = "left";
        break;
      case "arrowright":
        normalizedKey = "right";
        break;
      case "arrowup":
        normalizedKey = "up";
        break;
      case "arrowdown":
        normalizedKey = "down";
        break;
      case " ":
        normalizedKey = "space";
        break;
      case "+":
      case "add":
      case "numpad+":
      case "numpadadd":
      case "plus":
        normalizedKey = "plus";
        break;
      case "subtract":
      case "numpadsubtract":
        normalizedKey = "-";
        break;
    }
    if ((ctrlKey || metaKey) && (code === "Equal" || code === "NumpadAdd")) {
      normalizedKey = "plus";
    }
    if ((ctrlKey || metaKey) && code === "NumpadSubtract") {
      normalizedKey = "-";
    }
    if (normalizedKey === "+" && shiftKey && (ctrlKey || metaKey)) {
      normalizedKey = "=";
    }
    if (normalizedKey === "plus" && shiftKey && (ctrlKey || metaKey)) {
      normalizedKey = "=";
    }
    const shortcutString = this.generateShortcutString(
      normalizedKey,
      ctrlKey,
      metaKey,
      shiftKey,
      altKey,
    );
    const shouldOverride = Boolean(this.overrideConfig[shortcutString]);
    const shouldSkipOverride = shouldSkipShortcutOverrideForEvent(
      shortcutString,
      event,
    );
    const isZoomCandidateKey =
      normalizedKey === "+" ||
      normalizedKey === "=" ||
      normalizedKey === "plus" ||
      normalizedKey === "add" ||
      normalizedKey === "numpadadd" ||
      normalizedKey === "numpad+" ||
      normalizedKey === "subtract" ||
      normalizedKey === "numpadsubtract" ||
      normalizedKey === "-";
    const isZoomCombo = (ctrlKey || metaKey) && isZoomCandidateKey;
    const shouldForceZoomRouting =
      (ctrlKey || metaKey) &&
      (normalizedKey === "plus" ||
        normalizedKey === "=" ||
        normalizedKey === "-" ||
        normalizedKey === "0");
    const shouldRouteToMain =
      !shouldSkipOverride && (shouldOverride || shouldForceZoomRouting);
    if (isZoomCombo) {
      console.warn("[ShortcutDebug][uiPreload]", {
        phase: "keydown",
        originalKey,
        code,
        normalizedKey,
        ctrlKey,
        metaKey,
        shiftKey,
        altKey,
        shortcutString,
        shouldOverride,
        shouldSkipOverride,
        shouldForceZoomRouting,
        shouldRouteToMain,
      });
    }
    if (shouldRouteToMain) {
      event.preventDefault();
      event.stopPropagation();
      try {
        const windowId2 =
          process.argv
            .find((arg) => arg.startsWith("--window-id="))
            ?.split("=")[1] || "";
        const layerId2 =
          process.argv
            .find((arg) => arg.startsWith("--layer-id="))
            ?.split("=")[1] || "";
        return electron.ipcRenderer.send("dendrite-event", {
          name: "shortcut:pressed",
          payload: {
            windowId: windowId2,
            layerId: layerId2,
            key: normalizedKey,
            ctrlKey,
            metaKey,
            shiftKey,
            altKey,
          },
        });
      } catch {}
    }
  }
}
const shortcutHandler = new ShortcutOverrideHandler();
void shortcutHandler.initialize();
electron.ipcRenderer.on("pool:context-update", () => {
  void shortcutHandler.refresh();
});
