"use strict";
(function () {
  try {
    var o =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    o.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var o =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      t = new o.Error().stack;
    t &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[t] = "40d31b39-a786-456e-a52c-a621f3358487"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-40d31b39-a786-456e-a52c-a621f3358487"));
  })();
} catch {}
const A = require("electron"),
  j = (o) => o?.startsWith("chrome-extension://") === !0;
function ee({
  isServiceWorkerGlobal: o,
  locationHref: t,
  processType: r,
  serviceWorkerScope: e,
}) {
  return j(e) || j(t)
    ? !0
    : r === "service-worker" || o
      ? !((t !== void 0 || e !== void 0) && !j(t) && !j(e))
      : !1;
}
const J = new Set([
    "alarms.onAlarm",
    "bookmarks.onChanged",
    "bookmarks.onCreated",
    "bookmarks.onMoved",
    "bookmarks.onRemoved",
    "browserAction.onClicked",
    "commands.onCommand",
    "contextMenus.onClicked",
    "cookies.onChanged",
    "debugger.onDetach",
    "debugger.onEvent",
    "declarativeNetRequest.onRuleMatchedDebug",
    "downloads.onChanged",
    "downloads.onCreated",
    "downloads.onDeterminingFilename",
    "downloads.onErased",
    "history.onVisited",
    "history.onVisitRemoved",
    "identity.onSignInChanged",
    "idle.onStateChanged",
    "notifications.onButtonClicked",
    "notifications.onClicked",
    "notifications.onClosed",
    "permissions.onAdded",
    "permissions.onRemoved",
    "privacy.services.autofillAddressEnabled.onChange",
    "privacy.services.autofillCreditCardEnabled.onChange",
    "privacy.services.passwordSavingEnabled.onChange",
    "runtime.onInstalled",
    "runtime.onStartup",
    "sidePanel.onClosed",
    "sidePanel.onOpened",
    "storage.onChanged",
    "tabCapture.onStatusChanged",
    "tabGroups.onCreated",
    "tabGroups.onMoved",
    "tabGroups.onRemoved",
    "tabGroups.onUpdated",
    "tabs.onActivated",
    "tabs.onAttached",
    "tabs.onCreated",
    "tabs.onDetached",
    "tabs.onMoved",
    "tabs.onRemoved",
    "tabs.onReplaced",
    "tabs.onUpdated",
    "webNavigation.onBeforeNavigate",
    "webNavigation.onCommitted",
    "webNavigation.onCompleted",
    "webNavigation.onCreatedNavigationTarget",
    "webNavigation.onDOMContentLoaded",
    "webNavigation.onErrorOccurred",
    "webNavigation.onHistoryStateUpdated",
    "webNavigation.onReferenceFragmentUpdated",
    "webNavigation.onTabReplaced",
    "webRequest.onBeforeRequest",
    "webRequest.onCompleted",
    "webRequest.onErrorOccurred",
    "webRequest.onHeadersReceived",
    "windows.onBoundsChanged",
    "windows.onCreated",
    "windows.onFocusChanged",
    "windows.onRemoved",
    "webRequest.onAuthRequired",
    "webRequest.onResponseStarted",
  ]),
  X = (o) => J.has(o),
  W = (o) => `crx-${o}`,
  O = new Map(),
  U = new Map(),
  te = 5e3,
  ne = 50,
  Z = new Set(),
  I = new Map(),
  $ = new Map(),
  D = new Map(),
  V = new Map();
let B = { state: "off" };
const oe = (o, t, r) => {
    if (!X(t)) throw new Error(`Unknown extension event: ${t}`);
    const e = O.get(t) || 0;
    (e === 0 && A.ipcRenderer.send("crx-add-listener", o, t), O.set(t, e + 1));
    const n = (g, ...u) => {
      Reflect.apply(r, void 0, u);
    };
    let i = U.get(t);
    if (
      (i || ((i = new Map()), U.set(t, i)),
      i.set(r, n),
      A.ipcRenderer.addListener(W(t), n),
      Z.add(t),
      !Q())
    )
      return;
    const b = I.get(t);
    b && (I.delete(t), Promise.resolve().then(() => re(t, b)));
  },
  se = (o, t, r) => {
    if (!X(t)) throw new Error(`Unknown extension event: ${t}`);
    if (O.has(t)) {
      const i = O.get(t) || 0;
      i <= 1
        ? (O.delete(t), A.ipcRenderer.send("crx-remove-listener", o, t))
        : O.set(t, i - 1);
    }
    const e = U.get(t);
    if (!e) return;
    const n = e.get(r);
    n &&
      (A.ipcRenderer.removeListener(W(t), n),
      e.delete(r),
      e.size === 0 && U.delete(t));
  },
  q = (o, t, r) => {
    o.set(t, (o.get(t) ?? 0) + r);
  },
  re = (o, t) => {
    const r = [...(U.get(o)?.keys() ?? [])];
    if (r.length === 0) {
      q(D, o, t.length);
      return;
    }
    for (const e of t) for (const n of r) Reflect.apply(n, void 0, e);
    q($, o, t.length);
  },
  H = (o) => [...o].map(([t, r]) => `${t}×${r}`).join(", ") || "none",
  ae = () => {
    B = { state: "closed" };
    for (const [o, t] of V) A.ipcRenderer.removeListener(W(o), t);
    V.clear();
    for (const [o, t] of I) q(D, o, t.length);
    (I.clear(),
      !($.size === 0 && D.size === 0) &&
        console.info(
          `[crx-events] early events: replayed ${H($)}; dropped ${H(D)}`,
        ));
  },
  Q = () =>
    B.state !== "holding" ? !1 : Date.now() < B.until ? !0 : (ae(), !1),
  ie = (o = te) => {
    if (B.state === "off") {
      B = { state: "holding", until: Date.now() + o };
      for (const t of J) {
        const r = (e, ...n) => {
          if (!Q() || Z.has(t)) return;
          const i = I.get(t) ?? [];
          if (i.length >= ne) {
            q(D, t, 1);
            return;
          }
          (i.push(n), I.set(t, i));
        };
        (V.set(t, r), A.ipcRenderer.addListener(W(t), r));
      }
    }
  },
  K = /^Error invoking remote method '[^']*': (?:[A-Za-z]*Error: )?/;
function ce() {
  const o = async (e, n, i = {}, ...b) => {
    if (i.noop)
      return (console.warn(`${n} is not yet implemented.`), i.defaultResponse);
    const g = i.serialize ? i.serialize(...b) : b;
    try {
      return await A.ipcRenderer.invoke("crx-msg", e, n, ...g);
    } catch (u) {
      throw (
        console.error(u),
        u instanceof Error && K.test(u.message)
          ? new Error(u.message.replace(K, ""))
          : u
      );
    }
  };
  return {
    invokeExtension: o,
    addExtensionListener: oe,
    removeExtensionListener: se,
    connectNative: (e, n, i, b, g) => {
      const u = A.contextBridge.executeInMainWorld({
        func: () => crypto.randomUUID(),
      });
      o(e, "runtime.connectNative", {}, u, n).catch(() => {});
      const h = (f, l) => {
        i(l);
      };
      (A.ipcRenderer.on(`crx-native-msg-${u}`, h),
        A.ipcRenderer.once(`crx-native-msg-${u}-disconnect`, () => {
          (A.ipcRenderer.off(`crx-native-msg-${u}`, h), b());
        }),
        g(u, (f) => {
          A.ipcRenderer.send(`crx-native-msg-${u}`, f);
        }));
    },
    disconnectNative: (e, n) => {
      o(e, "runtime.disconnectNative", {}, n).catch(() => {});
    },
  };
}
function de() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.action = {
    apply({
      chrome: r,
      electron: e,
      extensionId: n,
      call: i,
      event: b,
      utils: g,
      world: u,
    }) {
      if (
        u === "content-script" ||
        r.runtime.getManifest().manifest_version !== 3
      )
        return;
      const h = g.installNamespace(r, "action", {}),
        f = Symbol.for("orbitra.extensions.actionPatched");
      if (Reflect.has(h, f)) return;
      const l = async (s) => {
        try {
          const d = await e.invokeExtension(n, "action.getUserSettings", {}, s);
          if (
            d &&
            typeof d == "object" &&
            "isOnToolbar" in d &&
            typeof d.isOnToolbar == "boolean"
          )
            return d;
        } catch {}
        return { isOnToolbar: !1 };
      };
      (g.patchNamespace(h, {
        setTitle: i("browserAction.setTitle"),
        getTitle: i("browserAction.getTitle"),
        setIcon: (s, ...d) => (
          s.imageData &&
            console.warn(
              "action.setIcon with imageData is not yet supported by electron-chrome-extensions",
            ),
          e.invokeExtension(
            n,
            "browserAction.setIcon",
            {},
            { ...s, imageData: void 0 },
            ...d,
          )
        ),
        setPopup: i("browserAction.setPopup"),
        getPopup: i("browserAction.getPopup"),
        setBadgeText: i("browserAction.setBadgeText"),
        getBadgeText: i("browserAction.getBadgeText"),
        setBadgeBackgroundColor: i("browserAction.setBadgeBackgroundColor"),
        getBadgeBackgroundColor: i("browserAction.getBadgeBackgroundColor"),
        getUserSettings: l,
        enable: (...s) =>
          e.invokeExtension(n, "browserAction.enable", { noop: !0 }, ...s),
        disable: (...s) =>
          e.invokeExtension(n, "browserAction.disable", { noop: !0 }, ...s),
        openPopup: i("browserAction.openPopup"),
        onClicked: b("browserAction.onClicked"),
      }),
        Object.defineProperty(h, f, { value: !0 }));
      const m = () => {
        const s = r.action;
        if (!(!s || s === h))
          try {
            Object.defineProperty(s, "getUserSettings", {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            });
          } catch {
            Reflect.set(s, "getUserSettings", l);
          }
      };
      (queueMicrotask(m), setTimeout(m, 0));
    },
  }),
    (o.extensionNamespacePatches = t));
}
function le() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.alarms = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      b !== "content-script" &&
        i.installNamespace(r, "alarms", {
          create: e("alarms.create"),
          get: e("alarms.get"),
          getAll: e("alarms.getAll"),
          clear: e("alarms.clear"),
          clearAll: e("alarms.clearAll"),
          onAlarm: n("alarms.onAlarm"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function pe() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.bookmarks = {
    apply({ chrome: r, event: e, utils: n, world: i }) {
      i !== "content-script" &&
        n.installNamespace(r, "bookmarks", {
          get: () => Promise.resolve([]),
          getChildren: () => Promise.resolve([]),
          getRecent: () => Promise.resolve([]),
          getTree: () => Promise.resolve([]),
          getSubTree: () => Promise.resolve([]),
          search: () => Promise.resolve([]),
          create: () => Promise.resolve({}),
          update: () => Promise.resolve({}),
          move: () => Promise.resolve({}),
          remove: () => Promise.resolve(),
          removeTree: () => Promise.resolve(),
          onCreated: e("bookmarks.onCreated"),
          onRemoved: e("bookmarks.onRemoved"),
          onChanged: e("bookmarks.onChanged"),
          onMoved: e("bookmarks.onMoved"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function ue() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.browserAction = {
    apply({
      chrome: r,
      electron: e,
      extensionId: n,
      call: i,
      event: b,
      utils: g,
      world: u,
    }) {
      if (
        u === "content-script" ||
        r.runtime.getManifest().manifest_version !== 2
      )
        return;
      const h = g.installNamespace(r, "browserAction", {}),
        f = Symbol.for("orbitra.extensions.browserActionPatched");
      if (Reflect.has(h, f)) return;
      const l = (d) => {
          const y = document.createElement("canvas"),
            N = y.getContext("2d");
          return N
            ? ((y.width = d.width),
              (y.height = d.height),
              N.putImageData(d, 0, 0),
              y.toDataURL())
            : null;
        },
        m = async (d) => {
          try {
            const y = await e.invokeExtension(
              n,
              "browserAction.getUserSettings",
              {},
              d,
            );
            if (
              y &&
              typeof y == "object" &&
              "isOnToolbar" in y &&
              typeof y.isOnToolbar == "boolean"
            )
              return y;
          } catch {}
          return { isOnToolbar: !1 };
        };
      (g.patchNamespace(h, {
        setTitle: i("browserAction.setTitle"),
        getTitle: i("browserAction.getTitle"),
        setIcon: (d, ...y) => {
          let N;
          return (
            d.imageData && d.imageData instanceof ImageData
              ? (N = l(d.imageData))
              : d.imageData &&
                (N = Object.fromEntries(
                  Object.entries(d.imageData).map(([v, c]) => [v, l(c)]),
                )),
            e.invokeExtension(
              n,
              "browserAction.setIcon",
              {},
              { ...d, imageData: N },
              ...y,
            )
          );
        },
        setPopup: i("browserAction.setPopup"),
        getPopup: i("browserAction.getPopup"),
        setBadgeText: i("browserAction.setBadgeText"),
        getBadgeText: i("browserAction.getBadgeText"),
        setBadgeBackgroundColor: i("browserAction.setBadgeBackgroundColor"),
        getBadgeBackgroundColor: i("browserAction.getBadgeBackgroundColor"),
        getUserSettings: m,
        enable: (...d) =>
          e.invokeExtension(n, "browserAction.enable", { noop: !0 }, ...d),
        disable: (...d) =>
          e.invokeExtension(n, "browserAction.disable", { noop: !0 }, ...d),
        openPopup: i("browserAction.openPopup"),
        onClicked: b("browserAction.onClicked"),
      }),
        Object.defineProperty(h, f, { value: !0 }));
      const s = () => {
        const d = r.browserAction;
        if (!(!d || d === h))
          try {
            Object.defineProperty(d, "getUserSettings", {
              value: m,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            });
          } catch {
            Reflect.set(d, "getUserSettings", m);
          }
      };
      (queueMicrotask(s), setTimeout(s, 0));
    },
  }),
    (o.extensionNamespacePatches = t));
}
function ge() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.commands = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      b !== "content-script" &&
        i.installNamespace(r, "commands", {
          getAll: e("commands.getAll"),
          onCommand: n("commands.onCommand"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function fe() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.contextMenus = {
    apply({
      chrome: r,
      electron: e,
      extensionId: n,
      event: i,
      utils: b,
      world: g,
    }) {
      if (g === "content-script") return;
      const u = new Map();
      let h = 0;
      const f = r.contextMenus?.onClicked ?? i("contextMenus.onClicked"),
        l = (d, y) => {
          y && u.get(String(d.menuItemId))?.(d, y);
        },
        m = (d, y) => {
          (y ? u.set(d, y) : u.delete(d),
            u.size > 0 && !f.hasListener(l) && f.addListener(l),
            u.size === 0 && f.hasListener(l) && f.removeListener(l));
        },
        s = (d, y) =>
          y
            ? d.then(y, (N) => {
                (console.error(N), y());
              })
            : d;
      b.installNamespace(r, "contextMenus", {
        create(d, y) {
          const { onclick: N, ...v } = d;
          v.id === void 0 && (v.id = `${++h}`);
          const c = v.id,
            p = e
              .invokeExtension(n, "contextMenus.create", {}, v)
              .then(() => m(c, N));
          return (s(p, y).catch((a) => console.error(a)), c);
        },
        update(d, y, N) {
          const { onclick: v, ...c } = y;
          return s(
            e
              .invokeExtension(n, "contextMenus.update", {}, String(d), c)
              .then(() => {
                "onclick" in y && m(String(d), v);
              }),
            N,
          );
        },
        remove(d, y) {
          return s(
            e
              .invokeExtension(n, "contextMenus.remove", {}, String(d))
              .then(() => m(String(d), void 0)),
            y,
          );
        },
        removeAll(d) {
          return s(
            e.invokeExtension(n, "contextMenus.removeAll", {}).then(() => {
              (u.clear(), f.hasListener(l) && f.removeListener(l));
            }),
            d,
          );
        },
        refresh: async () => {},
        onClicked: f,
      });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function me() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.cookies = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      b !== "content-script" &&
        i.installNamespace(r, "cookies", {
          get: e("cookies.get"),
          getAll: e("cookies.getAll"),
          getAllCookieStores: e("cookies.getAllCookieStores"),
          remove: e("cookies.remove"),
          set: e("cookies.set"),
          onChanged: n("cookies.onChanged"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function he() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.debugger = {
    apply({
      chrome: r,
      electron: e,
      extensionId: n,
      event: i,
      utils: b,
      world: g,
    }) {
      if (g === "content-script") return;
      const u = r.runtime.getManifest();
      if (
        ![...(u.permissions ?? []), ...(u.optional_permissions ?? [])].includes(
          "debugger",
        )
      )
        return;
      const f = (a) =>
          a && typeof a == "object" && "message" in a
            ? String(a.message)
            : String(a),
        l = (a, w) => {
          try {
            Object.defineProperty(r.runtime, "lastError", {
              value: { message: w },
              configurable: !0,
              writable: !0,
            });
          } catch {
            Reflect.set(r.runtime, "lastError", { message: w });
          }
          try {
            a();
          } finally {
            Reflect.deleteProperty(r.runtime, "lastError") ||
              Reflect.set(r.runtime, "lastError", null);
          }
        },
        m = (a) => !!a && typeof a == "object" && "ok" in a,
        s = { name: "callback", kind: "function", optional: !0 },
        d = {
          attach: {
            text: "debugger.attach(debugger.Debuggee target, string requiredVersion, optional function callback)",
            parameters: [
              { name: "target", kind: "debuggee" },
              { name: "requiredVersion", kind: "string" },
              s,
            ],
          },
          detach: {
            text: "debugger.detach(debugger.Debuggee target, optional function callback)",
            parameters: [{ name: "target", kind: "debuggee" }, s],
          },
          getTargets: {
            text: "debugger.getTargets(optional function callback)",
            parameters: [s],
          },
          sendCommand: {
            text: "debugger.sendCommand(debugger.DebuggerSession target, string method, optional object commandParams, optional function callback)",
            parameters: [
              { name: "target", kind: "session" },
              { name: "method", kind: "string" },
              { name: "commandParams", kind: "object", optional: !0 },
              s,
            ],
          },
        },
        y = (a, w) =>
          w === "string"
            ? typeof a == "string"
            : w === "function"
              ? typeof a == "function"
              : typeof a == "object" && a !== null,
        N = (a) =>
          a === null
            ? "null"
            : Array.isArray(a)
              ? "array"
              : typeof a == "number"
                ? Number.isInteger(a) && a >= -2147483648 && a <= 2147483647
                  ? "integer"
                  : "number"
                : typeof a,
        v = (a, w) => {
          const P = {
            extensionId: "string",
            ...(w === "session" ? { sessionId: "string" } : {}),
            tabId: "integer",
            targetId: "string",
          };
          for (const C of Object.keys(P).sort()) {
            const E = Reflect.get(a, C);
            if (E == null) continue;
            const x = N(E);
            if (x !== P[C])
              return `Error at property '${C}': Invalid type: expected ${P[C]}, found ${x}.`;
          }
          for (const C of Object.keys(a))
            if (!(C in P) && Reflect.get(a, C) !== void 0)
              return `Unexpected property: '${C}'.`;
        },
        c = (a, w) => {
          const { text: P, parameters: C } = d[a],
            E = (k) => {
              throw new TypeError(`Error in invocation of ${P}: ${k}`);
            },
            x = [];
          let R = 0;
          for (const k of C) {
            const T = w[R];
            if (R < w.length && y(T, k.kind)) {
              (x.push(T), (R += 1));
              continue;
            }
            (k.optional || E("No matching signature."),
              R < w.length && T == null && (R += 1),
              x.push(void 0));
          }
          (R !== w.length && E("No matching signature."),
            C.forEach((k, T) => {
              const M = x[T];
              if (
                (k.kind !== "debuggee" && k.kind !== "session") ||
                typeof M != "object" ||
                M === null
              )
                return;
              const z = v(M, k.kind);
              z && E(`Error at parameter '${k.name}': ${z}`);
            }));
          const S = x.at(-1),
            L = typeof S == "function" ? S : void 0;
          return { values: x.slice(0, -1), callback: L };
        },
        p =
          (a) =>
          (...w) => {
            const { values: P, callback: C } = c(a, w),
              E = e.invokeExtension(n, `debugger.${a}`, {}, ...P).then((x) => {
                if (!m(x)) throw new Error(f(x));
                if (x.ok) return x.value;
                throw new Error(x.error);
              });
            if (!C) return E;
            E.then(
              (x) => {
                x === void 0 ? C() : C(x);
              },
              (x) => l(C, f(x)),
            );
          };
      b.installNamespace(r, "debugger", {
        DetachReason: {
          CANCELED_BY_USER: "canceled_by_user",
          TARGET_CLOSED: "target_closed",
        },
        TargetInfoType: {
          BACKGROUND_PAGE: "background_page",
          OTHER: "other",
          PAGE: "page",
          WORKER: "worker",
        },
        attach: p("attach"),
        detach: p("detach"),
        getTargets: p("getTargets"),
        sendCommand: p("sendCommand"),
        onDetach: i("debugger.onDetach"),
        onEvent: i("debugger.onEvent"),
      });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function be() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.declarativeNetRequest = {
    apply({ chrome: r, event: e, utils: n, world: i }) {
      i !== "content-script" &&
        n.installNamespace(r, "declarativeNetRequest", {
          updateDynamicRules: () => Promise.resolve(),
          getDynamicRules: () => Promise.resolve([]),
          updateSessionRules: () => Promise.resolve(),
          getSessionRules: () => Promise.resolve([]),
          updateEnabledRulesets: () => Promise.resolve(),
          getEnabledRulesets: () => Promise.resolve([]),
          getAvailableStaticRuleCount: () => Promise.resolve(0),
          isRegexSupported: () => Promise.resolve({ isSupported: !0 }),
          onRuleMatchedDebug: e("declarativeNetRequest.onRuleMatchedDebug"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function we() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.desktopCapture = {
    apply({ chrome: r, call: e, utils: n, world: i }) {
      if (i !== "content-script") {
        if (typeof navigator < "u" && navigator.mediaDevices) {
          const b = navigator.mediaDevices,
            g = Symbol.for("orbitra.extensions.capturePatched");
          if (!Reflect.has(b, g)) {
            const u = (m) => {
                const s = m?.video;
                return !!(
                  s &&
                  typeof s == "object" &&
                  (s.chromeMediaSource || s.mandatory?.chromeMediaSource)
                );
              },
              h = b.getUserMedia.bind(b);
            b.getUserMedia = (m) =>
              u(m) ? b.getDisplayMedia({ video: !0, audio: !!m?.audio }) : h(m);
            const f = navigator,
              l = f.getUserMedia?.bind(navigator);
            ((f.getUserMedia = (m, s, d) => {
              u(m)
                ? b.getDisplayMedia({ video: !0, audio: !!m.audio }).then(s, d)
                : l
                  ? l(m, s, d)
                  : b.getUserMedia(m).then(s, d);
            }),
              Object.defineProperty(b, g, { value: !0 }));
          }
        }
        n.installNamespace(r, "desktopCapture", {
          chooseDesktopMedia: e("desktopCapture.chooseDesktopMedia"),
        });
      }
    },
  }),
    (o.extensionNamespacePatches = t));
}
function ye() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.downloads = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      b !== "content-script" &&
        i.installNamespace(r, "downloads", {
          acceptDanger: e("downloads.acceptDanger", { noop: !0 }),
          cancel: e("downloads.cancel"),
          download: e("downloads.download"),
          erase: e("downloads.erase"),
          getFileIcon: e("downloads.getFileIcon"),
          open: e("downloads.open"),
          pause: e("downloads.pause"),
          removeFile: e("downloads.removeFile"),
          resume: e("downloads.resume"),
          search: e("downloads.search"),
          setUiOptions: e("downloads.setUiOptions", { noop: !0 }),
          show: e("downloads.show"),
          showDefaultFolder: e("downloads.showDefaultFolder"),
          onChanged: n("downloads.onChanged"),
          onCreated: n("downloads.onCreated"),
          onDeterminingFilename: n("downloads.onDeterminingFilename"),
          onErased: n("downloads.onErased"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function ve() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.extension = {
    apply({ chrome: r, call: e, utils: n, world: i }) {
      i !== "content-script" &&
        n.installNamespace(r, "extension", {
          isAllowedFileSchemeAccess: e("extension.isAllowedFileSchemeAccess", {
            noop: !0,
            defaultResponse: !1,
          }),
          isAllowedIncognitoAccess: e("extension.isAllowedIncognitoAccess", {
            noop: !0,
            defaultResponse: !1,
          }),
          getViews: () => [],
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Pe() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.history = {
    apply({ chrome: r, event: e, utils: n, world: i }) {
      i !== "content-script" &&
        n.installNamespace(r, "history", {
          search: () => Promise.resolve([]),
          getVisits: () => Promise.resolve([]),
          addUrl: () => Promise.resolve(),
          deleteUrl: () => Promise.resolve(),
          deleteRange: () => Promise.resolve(),
          deleteAll: () => Promise.resolve(),
          onVisited: e("history.onVisited"),
          onVisitRemoved: e("history.onVisitRemoved"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Ne() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.i18n = {
    apply({ chrome: r, call: e, utils: n, world: i }) {
      if (r.runtime.getManifest().manifest_version !== 3) return;
      const b = Reflect.get(r, "i18n");
      if (
        b !== null &&
        (typeof b == "object" || typeof b == "function") &&
        "getMessage" in b
      )
        return;
      let g = null;
      const u = () => {
        if (g) return g;
        try {
          g = e("i18n.getMessages")();
        } catch {
          g = {};
        }
        return g;
      };
      n.installNamespace(r, "i18n", {
        getUILanguage: () => "en-US",
        getAcceptLanguages: (h) => {
          const f = ["en-US"];
          return (h && queueMicrotask(() => h(f)), Promise.resolve(f));
        },
        getMessage: (h, f) => {
          if (!h) return "";
          const l = u(),
            m = h.toLowerCase(),
            s = Object.keys(l).find((c) => c.toLowerCase() === m);
          if (!s) return h;
          const d = Reflect.get(l, s);
          let y = d.message,
            N;
          f ? (N = Array.isArray(f) ? f : [f]) : (N = []);
          for (let c = 0; c < N.length; c++)
            y = y.split("$" + (c + 1)).join(N[c]);
          const v = d.placeholders;
          if (v)
            for (const [c, p] of Object.entries(v)) {
              let a = p.content;
              const w = a.match(/^\$(\d+)$/);
              if (w) {
                const P = parseInt(w[1], 10) - 1;
                P >= 0 && P < N.length && (a = N[P]);
              }
              y = y.replace(new RegExp("\\$" + c + "\\$", "gi"), a);
            }
          return y;
        },
      });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function xe() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.identity = {
    apply({
      chrome: r,
      extensionId: e,
      call: n,
      event: i,
      utils: b,
      world: g,
    }) {
      g !== "content-script" &&
        b.installNamespace(r, "identity", {
          getRedirectURL(u) {
            return `https://${e}.chromiumapp.org/${u || ""}`;
          },
          launchWebAuthFlow: n("identity.launchWebAuthFlow"),
          getAuthToken: n("identity.getAuthToken"),
          removeCachedAuthToken: n("identity.removeCachedAuthToken"),
          clearAllCachedAuthTokens: n("identity.clearAllCachedAuthTokens"),
          getProfileUserInfo: n("identity.getProfileUserInfo"),
          getAccounts: n("identity.getAccounts"),
          onSignInChanged: i("identity.onSignInChanged"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Ee() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.idle = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      b !== "content-script" &&
        i.installNamespace(r, "idle", {
          getAutoLockDelay: e("idle.getAutoLockDelay"),
          queryState: e("idle.queryState"),
          setDetectionInterval: e("idle.setDetectionInterval"),
          onStateChanged: n("idle.onStateChanged"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Ce() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.notifications = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      b !== "content-script" &&
        i.installNamespace(r, "notifications", {
          clear: e("notifications.clear"),
          create: e("notifications.create"),
          getAll: e("notifications.getAll"),
          getPermissionLevel: e("notifications.getPermissionLevel"),
          update: e("notifications.update"),
          onButtonClicked: n("notifications.onButtonClicked"),
          onClicked: n("notifications.onClicked"),
          onClosed: n("notifications.onClosed"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Re() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.permissions = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      b !== "content-script" &&
        i.installNamespace(r, "permissions", {
          contains: e("permissions.contains"),
          getAll: e("permissions.getAll"),
          remove: e("permissions.remove"),
          request: e("permissions.request"),
          onAdded: n("permissions.onAdded"),
          onRemoved: n("permissions.onRemoved"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function ke() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.privacy = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      if (b === "content-script") return;
      const g = e("privacy.get"),
        u = e("privacy.set"),
        h = e("privacy.clear"),
        f = {
          addListener: () => {},
          removeListener: () => {},
          hasListener: () => !1,
        };
      class l {
        constructor(s, { writable: d = !1 } = {}) {
          ((this.settingPath = s),
            (this.onChange = d ? n(`privacy.${s}.onChange`) : f));
        }
        onChange;
        get(...s) {
          return i.withCallback(r.runtime, s, ([d]) =>
            g(this.settingPath, d).catch(() => ({
              value: void 0,
              levelOfControl: "not_controllable",
            })),
          );
        }
        set(...s) {
          return u(this.settingPath, ...s);
        }
        clear(...s) {
          return h(this.settingPath, ...s);
        }
      }
      i.installNamespace(r, "privacy", {
        network: {
          networkPredictionEnabled: new l("network.networkPredictionEnabled"),
          webRTCIPHandlingPolicy: new l("network.webRTCIPHandlingPolicy"),
        },
        services: {
          passwordSavingEnabled: new l("services.passwordSavingEnabled", {
            writable: !0,
          }),
          autofillAddressEnabled: new l("services.autofillAddressEnabled", {
            writable: !0,
          }),
          autofillCreditCardEnabled: new l(
            "services.autofillCreditCardEnabled",
            { writable: !0 },
          ),
          safeBrowsingEnabled: new l("services.safeBrowsingEnabled"),
          safeBrowsingExtendedReportingEnabled: new l(
            "services.safeBrowsingExtendedReportingEnabled",
          ),
          searchSuggestEnabled: new l("services.searchSuggestEnabled"),
          spellingServiceEnabled: new l("services.spellingServiceEnabled"),
          translationServiceEnabled: new l(
            "services.translationServiceEnabled",
          ),
          alternateErrorPagesEnabled: new l(
            "services.alternateErrorPagesEnabled",
          ),
        },
        websites: {
          hyperlinkAuditingEnabled: new l("websites.hyperlinkAuditingEnabled"),
          thirdPartyCookiesAllowed: new l("websites.thirdPartyCookiesAllowed"),
          doNotTrackEnabled: new l("websites.doNotTrackEnabled"),
          referrersEnabled: new l("websites.referrersEnabled"),
          protectedContentEnabled: new l("websites.protectedContentEnabled"),
        },
      });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Ae() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.runtime = {
    apply({
      chrome: r,
      electron: e,
      extensionId: n,
      call: i,
      event: b,
      utils: g,
      world: u,
    }) {
      if (u === "content-script") return;
      const h = g.installNamespace(r, "runtime", {}),
        f = Symbol.for("orbitra.extensions.runtimePatched");
      if (Reflect.has(h, f)) return;
      const l = h.sendMessage;
      l &&
        g.patchNamespace(h, {
          sendMessage: (...s) => {
            const d = s.at(-1);
            if (typeof d != "function") return l.apply(h, s);
            s.pop();
            const y = (v) => {
              const c =
                v && typeof v == "object" && "message" in v
                  ? String(v.message)
                  : String(v ?? "Could not establish connection.");
              try {
                Object.defineProperty(h, "lastError", {
                  value: { message: c },
                  configurable: !0,
                  writable: !0,
                });
              } catch {
                Reflect.set(h, "lastError", { message: c });
              }
              try {
                d(void 0);
              } finally {
                Reflect.deleteProperty(h, "lastError") ||
                  Reflect.set(h, "lastError", null);
              }
            };
            let N;
            try {
              N = l.apply(h, s);
            } catch (v) {
              queueMicrotask(() => y(v instanceof Error ? v : String(v)));
              return;
            }
            Promise.resolve(N).then((v) => d(v), y);
          },
        });
      const m = h.onMessage;
      if (m?.addListener) {
        const s = m.addListener.bind(m),
          d = m.removeListener.bind(m),
          y = m.hasListener.bind(m),
          N = new WeakMap();
        ((m.addListener = (v) => {
          let c = N.get(v);
          (c ||
            ((c = function (p, a, w) {
              const P = a.tab;
              if (P && typeof P.id == "number") {
                const E = (
                  r.tabs &&
                  Reflect.get(
                    r.tabs,
                    Symbol.for("orbitra.extensions.tabDetails"),
                  )
                )?.get(P.id);
                !E || typeof E.windowId != "number" || E.windowId === 0
                  ? !(typeof a.frameId == "number" && a.frameId > 0) &&
                    (P.url?.startsWith("chrome-extension://") ||
                      a.url?.startsWith("chrome-extension://")) &&
                    ((a = { ...a }), delete a.tab)
                  : (typeof P.windowId != "number" || P.windowId === 0) &&
                    (a = { ...a, tab: { ...E, ...P, windowId: E.windowId } });
              }
              return v(p, a, w);
            }),
            N.set(v, c)),
            s(c));
        }),
          (m.removeListener = (v) => d(N.get(v) ?? v)),
          (m.hasListener = (v) => y(N.get(v) ?? v)));
      }
      (g.patchNamespace(h, {
        onInstalled: b("runtime.onInstalled"),
        onStartup: b("runtime.onStartup"),
      }),
        g.patchNamespace(h, {
          getContexts: async () => [],
          ContextType: {
            TAB: "TAB",
            POPUP: "POPUP",
            BACKGROUND: "BACKGROUND",
            OFFSCREEN_DOCUMENT: "OFFSCREEN_DOCUMENT",
            SIDE_PANEL: "SIDE_PANEL",
            DEVELOPER_TOOLS: "DEVELOPER_TOOLS",
          },
          connectNative(s) {
            const d = [],
              y = [],
              N = [];
            let v,
              c,
              p = !1;
            const a = {
              name: s,
              postMessage(w) {
                if (p)
                  throw new Error("Attempting to use a disconnected port.");
                c ? c(w) : N.push(w);
              },
              disconnect() {
                if (!p) {
                  ((p = !0), v && e.disconnectNative(n, v));
                  for (const w of y.slice()) w(a);
                }
              },
              onMessage: {
                addListener(w) {
                  d.includes(w) || d.push(w);
                },
                removeListener(w) {
                  const P = d.indexOf(w);
                  P !== -1 && d.splice(P, 1);
                },
                hasListener(w) {
                  return d.includes(w);
                },
                hasListeners() {
                  return d.length > 0;
                },
              },
              onDisconnect: {
                addListener(w) {
                  y.includes(w) || y.push(w);
                },
                removeListener(w) {
                  const P = y.indexOf(w);
                  P !== -1 && y.splice(P, 1);
                },
                hasListener(w) {
                  return y.includes(w);
                },
                hasListeners() {
                  return y.length > 0;
                },
              },
            };
            return (
              e.connectNative(
                n,
                s,
                (w) => {
                  for (const P of d.slice()) P(w, a);
                },
                () => {
                  if (!p) {
                    p = !0;
                    for (const w of y.slice()) w(a);
                  }
                },
                (w, P) => {
                  if (p) {
                    e.disconnectNative(n, w);
                    return;
                  }
                  ((v = w), (c = P));
                  for (const C of N.splice(0)) P(C);
                },
              ),
              a
            );
          },
          openOptionsPage: i("runtime.openOptionsPage"),
          sendNativeMessage: i("runtime.sendNativeMessage"),
        }),
        Object.defineProperty(h, f, { value: !0 }));
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Se() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.scripting = {
    apply({ chrome: r, world: e }) {
      if (e === "content-script") return;
      const n = Reflect.get(r, "scripting"),
        i = n?.executeScript,
        b = Symbol.for("orbitra.extensions.scriptingPatched");
      if (
        !n ||
        !i ||
        Reflect.has(n, b) ||
        !Reflect.set(n, "executeScript", (c, p) => {
          const a = () => (p ? i.call(n, c, p) : i.call(n, c));
          if (
            c.world === "MAIN" ||
            (!c.files?.length && typeof c.func != "function")
          )
            return a();
          const w = function () {
            try {
              const E = globalThis,
                x = typeof window < "u" ? window : E,
                R = (k, T, M) => {
                  try {
                    Object.defineProperty(k, T, {
                      value: M,
                      writable: !0,
                      configurable: !0,
                      enumerable: !1,
                    });
                  } catch {
                    try {
                      Object.assign(k, { [T]: M });
                    } catch {}
                  }
                };
              if (E.__crxCompatibilityShimRan) return;
              if (
                ((E.__crxCompatibilityShimRan = !0),
                typeof x.Node == "function")
              )
                typeof E.Node != "function" && R(E, "Node", x.Node);
              else if (typeof E.Node == "function") R(x, "Node", E.Node);
              else {
                const k = function () {};
                (R(
                  k,
                  Symbol.hasInstance,
                  (T) =>
                    !!T &&
                    "nodeType" in T &&
                    typeof T.nodeType == "number" &&
                    "nodeName" in T &&
                    typeof T.nodeName == "string",
                ),
                  R(k, "ELEMENT_NODE", 1),
                  R(k, "TEXT_NODE", 3),
                  R(k, "DOCUMENT_NODE", 9),
                  R(k, "DOCUMENT_FRAGMENT_NODE", 11),
                  R(E, "Node", k),
                  R(x, "Node", k));
              }
              const S = E.chrome?.storage,
                L = S?.local;
              if (!S || !L) return;
              try {
                S.sync = L;
              } catch {}
              try {
                S.managed = L;
              } catch {}
              if (S.sync !== L)
                try {
                  Object.defineProperty(S, "sync", {
                    value: L,
                    writable: !0,
                    configurable: !0,
                    enumerable: !0,
                  });
                } catch {}
              if (S.managed !== L)
                try {
                  Object.defineProperty(S, "managed", {
                    value: L,
                    writable: !0,
                    configurable: !0,
                    enumerable: !0,
                  });
                } catch {}
            } catch {}
          };
          let P;
          try {
            P = i.call(n, { target: c.target, func: w });
          } catch {
            return a();
          }
          const C = Promise.resolve(P).catch(() => {});
          if (p) {
            C.then(a);
            return;
          }
          return C.then(a);
        })
      )
        return;
      Object.defineProperty(n, b, { value: !0 });
      const u = "orbitra-content-script-compatibility.js",
        h = (c) =>
          Array.isArray(c.js) ? { ...c, js: c.js.filter((p) => p !== u) } : c,
        f = (c, p = c.world) => {
          const a = h(c);
          return p === "MAIN" || !a.js?.length ? a : { ...a, js: [u, ...a.js] };
        },
        l = (c, p, a) => (a ? c.call(n, p, a) : c.call(n, p)),
        m = (c, p, a, w) =>
          w
            ? c.call(n, p, () => {
                r.runtime.lastError ? c.call(n, a, w) : w();
              })
            : Promise.resolve(c.call(n, p)).catch(() => c.call(n, a)),
        s = n.registerContentScripts;
      s &&
        Reflect.set(n, "registerContentScripts", (p, a) => {
          if (!Array.isArray(p)) return l(s, p, a);
          const w = p.map((P) => f(P));
          return m(s, w, p, a);
        });
      const d = n.getRegisteredContentScripts;
      if (!d) return;
      const y = (c, p) =>
        typeof c == "function"
          ? y(void 0, c)
          : p
            ? d.call(n, c, (a) => p(a?.map(h)))
            : Promise.resolve(d.call(n, c)).then((a) => (a ?? []).map(h));
      Reflect.set(n, "getRegisteredContentScripts", y);
      const N = n.updateContentScripts;
      if (!N) return;
      Reflect.set(n, "updateContentScripts", (c, p) => {
        if (!Array.isArray(c)) return l(N, c, p);
        const a = (P) => {
            const C = new Map(P.map((x) => [x.id, x])),
              E = c.map((x) => {
                const R = C.get(x.id),
                  S = x.js ?? (x.world ? R?.js : void 0);
                return S ? f({ ...x, js: S }, x.world ?? R?.world) : x;
              });
            return m(N, E, c, p);
          },
          w = Promise.resolve(d.call(n, { ids: c.map((P) => P.id) })).then(
            (P) => P ?? [],
            () => [],
          );
        if (p) {
          w.then(a);
          return;
        }
        return w.then(a);
      });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Te() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.sidePanel = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      b !== "content-script" &&
        i.installNamespace(r, "sidePanel", {
          getOptions: e("sidePanel.getOptions"),
          getPanelBehavior: e("sidePanel.getPanelBehavior"),
          open: e("sidePanel.open"),
          setOptions: e("sidePanel.setOptions"),
          setPanelBehavior: e("sidePanel.setPanelBehavior"),
          onClosed: n("sidePanel.onClosed"),
          onOpened: n("sidePanel.onOpened"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Le() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.storage = {
    apply({
      chrome: r,
      electron: e,
      extensionId: n,
      event: i,
      utils: b,
      world: g,
    }) {
      if (!r.storage) return;
      const u = b.installNamespace(r, "storage", {}),
        h = Symbol.for("orbitra.storageOnChangedWorkaround");
      if (Reflect.get(u, h) === !0) return;
      const f = r.storage.onChanged,
        l = r.storage.local,
        m = r.storage.session,
        s = (c, p, a) => {
          try {
            Object.defineProperty(c, p, {
              value: a,
              configurable: !0,
              writable: !0,
            });
          } catch {
            Reflect.set(c, p, a);
          }
        };
      if (g === "service-worker") {
        const c = i("storage.onChanged");
        s(u, "onChanged", c);
        const p = (a, w) => {
          if (!a) return;
          const P = new Map();
          s(a, "onChanged", {
            addListener(E) {
              if (P.has(E)) return;
              const x = (R, S) => {
                S === w && E(R);
              };
              (P.set(E, x), c.addListener(x));
            },
            removeListener(E) {
              const x = P.get(E);
              x && (c.removeListener(x), P.delete(E));
            },
            hasListener: (E) => P.has(E),
            hasListeners: () => P.size > 0,
          });
        };
        (p(l, "local"), p(m, "session"));
      } else
        g === "extension-page" &&
          f?.addListener &&
          f.addListener((c, p) => {
            e.invokeExtension(
              n,
              "storage.forwardNativeChange",
              {},
              { areaName: p, changes: c },
            ).catch(() => {});
          });
      (l && s(u, "sync", l), r.storage.managed === l && s(u, "managed", {}));
      const d = b.installNamespace(u, "managed", {}),
        y = (c, p) => {
          const a = typeof c == "function" ? c : p;
          if (a) {
            queueMicrotask(() => a({}));
            return;
          }
          return Promise.resolve({});
        },
        N = (c, p) => {
          const a = typeof c == "function" ? c : p;
          if (a) {
            queueMicrotask(() => a(0));
            return;
          }
          return Promise.resolve(0);
        },
        v = () =>
          Promise.reject(new Error("chrome.storage.managed is read-only"));
      (s(d, "get", y),
        s(d, "getBytesInUse", N),
        s(d, "set", v),
        s(d, "remove", v),
        s(d, "clear", v),
        s(d, "onChanged", {
          addListener: () => {},
          removeListener: () => {},
          hasListener: () => !1,
          hasListeners: () => !1,
        }),
        Object.defineProperty(u, h, { value: !0, configurable: !0 }));
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Me() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.tabCapture = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      b !== "content-script" &&
        i.installNamespace(r, "tabCapture", {
          capture: e("tabCapture.capture"),
          getCapturedTabs: e("tabCapture.getCapturedTabs"),
          getMediaStreamId: e("tabCapture.getMediaStreamId"),
          onStatusChanged: n("tabCapture.onStatusChanged"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Oe() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.tabGroups = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      b !== "content-script" &&
        i.installNamespace(r, "tabGroups", {
          Color: {
            GREY: "grey",
            BLUE: "blue",
            RED: "red",
            YELLOW: "yellow",
            GREEN: "green",
            PINK: "pink",
            PURPLE: "purple",
            CYAN: "cyan",
            ORANGE: "orange",
          },
          TAB_GROUP_ID_NONE: -1,
          get: e("tabGroups.get"),
          move: e("tabGroups.move"),
          query: e("tabGroups.query"),
          update: e("tabGroups.update"),
          onCreated: n("tabGroups.onCreated"),
          onMoved: n("tabGroups.onMoved"),
          onRemoved: n("tabGroups.onRemoved"),
          onUpdated: n("tabGroups.onUpdated"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Ie() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.tabs = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      if (b === "content-script") return;
      const g = i.installNamespace(r, "tabs", {}),
        u = Symbol.for("orbitra.extensions.tabDetails");
      if (Reflect.has(g, u)) return;
      const h = new Map(),
        f = (c) => {
          if (Array.isArray(c)) for (const p of c) f(p);
          else if (c && typeof c == "object") {
            const p = c;
            typeof p.id == "number" && h.set(p.id, { ...h.get(p.id), ...p });
          }
        },
        l = (c) => {
          const p = e(c);
          return (...a) =>
            i.withCallback(r.runtime, a, async (w) => {
              const P = await p(...w);
              return (f(P), P);
            });
        },
        m = Reflect.get(g, "executeScript"),
        s = Reflect.get(g, "sendMessage"),
        d = Reflect.get(g, "connect"),
        y = l("tabs.query"),
        N = (c, p, a) => {
          if (!m) return;
          const w = () => m.call(g, c, p, a);
          if (!p || typeof p != "object" || !("code" in p || "file" in p))
            return w();
          const { code: P, file: C, ...E } = p;
          return new Promise((x) => {
            try {
              m.call(
                g,
                c,
                { ...E, file: "orbitra-content-script-compatibility.js" },
                () => {
                  (r.runtime.lastError, x(w()));
                },
              );
            } catch {
              x(w());
            }
          });
        };
      let v = s;
      (s &&
        (v = (...c) =>
          typeof c.at(-1) != "function"
            ? s.apply(g, c)
            : i.withCallback(r.runtime, c, async (p) => {
                const a = await s.apply(g, p);
                if (a === void 0)
                  throw new Error(
                    "The message port closed before a response was received.",
                  );
                return a;
              })),
        r.runtime.getManifest().manifest_version === 2 &&
          i.patchNamespace(g, {
            insertCSS: e("tabs.insertCSS"),
            removeCSS: e("tabs.removeCSS"),
          }),
        i.patchNamespace(g, {
          MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND: 2,
          SPLIT_VIEW_ID_NONE: -1,
          TAB_ID_NONE: -1,
          TAB_INDEX_NONE: -1,
          captureVisibleTab: e("tabs.captureVisibleTab"),
          create: l("tabs.create"),
          get: l("tabs.get"),
          getCurrent: l("tabs.getCurrent"),
          getAllInWindow: l("tabs.getAllInWindow"),
          query: y,
          reload: e("tabs.reload"),
          update: l("tabs.update"),
          remove: e("tabs.remove"),
          goBack: e("tabs.goBack"),
          goForward: e("tabs.goForward"),
          discard: l("tabs.discard"),
          duplicate: l("tabs.duplicate"),
          getZoom: e("tabs.getZoom"),
          detectLanguage: e("tabs.detectLanguage"),
          group: e("tabs.group"),
          move: l("tabs.move"),
          ungroup: e("tabs.ungroup"),
          async executeScript(c, p, a) {
            if (c !== null && typeof c == "object") {
              const w = await y({
                  active: !0,
                  windowId: r.windows.WINDOW_ID_CURRENT,
                }),
                [P] = w;
              return N(P.id, c, p);
            }
            return N(c, p, a);
          },
          onAttached: n("tabs.onAttached"),
          onCreated: n("tabs.onCreated"),
          onDetached: n("tabs.onDetached"),
          onMoved: n("tabs.onMoved"),
          onRemoved: n("tabs.onRemoved"),
          onUpdated: n("tabs.onUpdated"),
          onActivated: n("tabs.onActivated"),
          onReplaced: n("tabs.onReplaced"),
          sendMessage: v,
          connect: d,
        }),
        Object.defineProperty(g, u, { value: h }));
    },
  }),
    (o.extensionNamespacePatches = t));
}
function De() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.topSites = {
    apply({ chrome: r, call: e, utils: n, world: i }) {
      i !== "content-script" &&
        n.installNamespace(r, "topSites", {
          get: e("topSites.get", { noop: !0, defaultResponse: [] }),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Ue() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.webNavigation = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      if (b === "content-script") return;
      const g = (s) => {
          if (s === void 0) return JSON.stringify({ url: [] });
          if (!s || typeof s != "object" || Array.isArray(s))
            throw new TypeError("Expected a navigation filter");
          if (s.url === void 0) return JSON.stringify({ url: [] });
          if (!Array.isArray(s.url))
            throw new TypeError("Expected a URL filter array");
          const d = ["host", "path", "query", "url"],
            y = ["Contains", "Equals", "Prefix", "Suffix"],
            N = ["urlMatches", "originAndPathMatches"];
          for (const p of d) for (const a of y) N.push(p + a);
          N.sort();
          const v = s.url.map((p) => {
              if (!p || typeof p != "object" || Array.isArray(p))
                throw new TypeError("Expected a URL filter");
              for (const w of Object.keys(p)) {
                if (w === "cidrBlocks") {
                  if (p.cidrBlocks !== void 0)
                    throw new TypeError(
                      "webNavigation CIDR filters are not supported",
                    );
                  continue;
                }
                if (!N.includes(w) && w !== "schemes" && w !== "ports")
                  throw new TypeError("Unknown URL filter condition");
              }
              const a = {};
              for (const w of N) {
                const P = Reflect.get(p, w);
                if (P !== void 0) {
                  if (typeof P != "string")
                    throw new TypeError("Expected a URL filter string");
                  if (w.startsWith("host") && /[A-Z]/.test(P))
                    throw new TypeError("Host filters must be lowercase");
                  a[w] = P;
                }
              }
              return a;
            }),
            c = JSON.stringify({ url: v });
          if (c.length > 32768)
            throw new TypeError("Navigation filter is too large");
          return c;
        },
        u = crypto.randomUUID(),
        h = e("webNavigation.registerListener"),
        f = e("webNavigation.unregisterListener"),
        l = e("webNavigation.matchListener"),
        m = (s) => {
          const d = n(s),
            y = new Map(),
            N = new Map();
          return {
            ...d,
            addListener(v, c) {
              if (typeof v != "function")
                throw new TypeError("Expected a listener function");
              if (y.has(v)) return;
              const p = g(c),
                a = (w, P, C) => {
                  !P ||
                    typeof P != "object" ||
                    (P[p] === !0
                      ? v(w)
                      : C !== "unfiltered" &&
                        !Object.prototype.hasOwnProperty.call(P, p) &&
                        l(s, u, p, w.url)
                          .then((E) => {
                            E === !0 && y.get(v) === a && v(w);
                          })
                          .catch(() => {}));
                };
              (h(s, u, p).catch(() => {
                y.get(v) === a &&
                  (d.removeListener(a), y.delete(v), N.delete(v));
              }),
                d.addListener(a),
                y.set(v, a),
                N.set(v, p));
            },
            removeListener(v) {
              const c = y.get(v);
              if (!c) return;
              (d.removeListener(c), y.delete(v));
              const p = N.get(v);
              (N.delete(v), f(s, u, p).catch(() => {}));
            },
            hasListener(v) {
              return y.has(v);
            },
            hasListeners() {
              return y.size > 0;
            },
          };
        };
      i.installNamespace(r, "webNavigation", {
        getFrame: e("webNavigation.getFrame"),
        getAllFrames: e("webNavigation.getAllFrames"),
        onCreatedNavigationTarget: m("webNavigation.onCreatedNavigationTarget"),
        onErrorOccurred: m("webNavigation.onErrorOccurred"),
        onReferenceFragmentUpdated: m(
          "webNavigation.onReferenceFragmentUpdated",
        ),
        onTabReplaced: n("webNavigation.onTabReplaced"),
        onBeforeNavigate: m("webNavigation.onBeforeNavigate"),
        onCommitted: m("webNavigation.onCommitted"),
        onCompleted: m("webNavigation.onCompleted"),
        onDOMContentLoaded: m("webNavigation.onDOMContentLoaded"),
        onHistoryStateUpdated: m("webNavigation.onHistoryStateUpdated"),
      });
    },
  }),
    (o.extensionNamespacePatches = t));
}
function Be() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.webRequest = {
    apply({ chrome: r, event: e, utils: n, world: i }) {
      if (i === "content-script") return;
      const b = n.installNamespace(r, "webRequest", {}),
        g = Symbol.for("orbitra.extensions.webRequestPatched");
      if (Reflect.has(b, g)) return;
      const u = (h) => {
        const f = e(h);
        return {
          ...f,
          addListener(l, m, s) {
            f.addListener(l);
          },
        };
      };
      (n.patchNamespace(b, {
        onAuthRequired: u("webRequest.onAuthRequired"),
        onResponseStarted: u("webRequest.onResponseStarted"),
        onBeforeRequest: u("webRequest.onBeforeRequest"),
        onCompleted: u("webRequest.onCompleted"),
        onErrorOccurred: u("webRequest.onErrorOccurred"),
        onHeadersReceived: u("webRequest.onHeadersReceived"),
      }),
        Object.defineProperty(b, g, { value: !0 }));
    },
  }),
    (o.extensionNamespacePatches = t));
}
function je() {
  const o = globalThis,
    t = o.extensionNamespacePatches ?? {};
  ((t.windows = {
    apply({ chrome: r, call: e, event: n, utils: i, world: b }) {
      b !== "content-script" &&
        i.installNamespace(r, "windows", {
          WINDOW_ID_NONE: -1,
          WINDOW_ID_CURRENT: -2,
          get: e("windows.get"),
          getCurrent: e("windows.getCurrent"),
          getLastFocused: e("windows.getLastFocused"),
          getAll: e("windows.getAll"),
          create: e("windows.create"),
          update: e("windows.update"),
          remove: e("windows.remove"),
          onCreated: n("windows.onCreated"),
          onRemoved: n("windows.onRemoved"),
          onFocusChanged: n("windows.onFocusChanged"),
          onBoundsChanged: n("windows.onBoundsChanged"),
        });
    },
  }),
    (o.extensionNamespacePatches = t));
}
const F = [
  de,
  le,
  pe,
  ue,
  ge,
  fe,
  me,
  he,
  be,
  we,
  ye,
  ve,
  Pe,
  Ne,
  xe,
  Ee,
  Ce,
  Re,
  ke,
  Ae,
  Se,
  Te,
  Le,
  Me,
  Oe,
  Ie,
  De,
  Ue,
  Be,
  je,
];
function G() {
  const o = (g, u) => {
      const h = Object.getOwnPropertyDescriptors(u);
      for (const f of Reflect.ownKeys(h)) {
        if (f in g) continue;
        const l = Reflect.get(h, f);
        l && Object.defineProperty(g, f, l);
      }
    },
    t = (g, u, h) => {
      const f = new Set(),
        l = () => {
          throw new Error("Method not implemented.");
        };
      return {
        addListener(m) {
          f.has(m) || (f.add(m), g.addExtensionListener(u, h, m));
        },
        removeListener(m) {
          f.delete(m) && g.removeExtensionListener(u, h, m);
        },
        hasListener(m) {
          return f.has(m);
        },
        hasListeners() {
          return f.size > 0;
        },
        addRules: l,
        getRules: l,
        removeRules: l,
      };
    },
    r = (g, u, h) => {
      const f =
        h && typeof h == "object" && "message" in h
          ? String(h.message)
          : String(h);
      try {
        Object.defineProperty(g, "lastError", {
          value: { message: f },
          configurable: !0,
          writable: !0,
        });
      } catch {
        Reflect.set(g, "lastError", { message: f });
      }
      try {
        u();
      } finally {
        Reflect.deleteProperty(g, "lastError") ||
          Reflect.set(g, "lastError", null);
      }
    },
    e = (g, u, h) => {
      const f = u.at(-1),
        l = (m) => {
          try {
            return Promise.resolve(h(m));
          } catch (s) {
            return Promise.reject(s);
          }
        };
      if (typeof f != "function") return l(u);
      l(u.slice(0, -1)).then(
        (m) => f(m),
        (m) => r(g, f, m),
      );
    },
    n = () => globalThis.chrome?.runtime ?? {},
    i = (g, u, h, f, l) => e(n(), l, (m) => g.invokeExtension(u, h, f, ...m)),
    b = {
      createEvent: t,
      createMethod(g, u, h, f = {}) {
        return (...l) => i(g, u, h, f, l);
      },
      withCallback: e,
      withCallbacks(g) {
        return {
          ...g,
          invokeExtension: (u, h, f = {}, ...l) => i(g, u, h, f, l),
        };
      },
      installNamespace(g, u, h) {
        const f = Reflect.get(g, u),
          l =
            f !== null && (typeof f == "object" || typeof f == "function")
              ? f
              : {};
        return (
          o(l, h),
          l !== f &&
            Object.defineProperty(g, u, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
          l
        );
      },
      patchNamespace(g, u) {
        return (
          Object.defineProperties(g, Object.getOwnPropertyDescriptors(u)),
          g
        );
      },
    };
  return ((globalThis.createExtensionRendererUtils = G), b);
}
function _(o) {
  const t = globalThis,
    r = t.electron,
    e = t.chrome,
    n = e?.runtime?.id,
    i = t.browser,
    b = t.createExtensionRendererUtils,
    g = t.extensionNamespacePatches;
  if (!r || !e || !b || !n || !/^[a-p]{32}$/.test(n)) {
    (delete t.extensionNamespacePatches,
      delete t.createExtensionRendererUtils,
      delete t.electron);
    return;
  }
  const u = b(),
    h = u.withCallbacks(r),
    f = (m, s) => u.createMethod(r, n, m, s),
    l = (m) => u.createEvent(r, n, m);
  try {
    for (const [m, s] of Object.entries(g ?? {}))
      try {
        s?.apply({
          chrome: e,
          electron: h,
          extensionId: n,
          call: f,
          event: l,
          utils: u,
          world: o,
        });
      } catch {
        console.error(`Failed to patch chrome.${m}.`);
      }
    i !== e &&
      Object.defineProperty(globalThis, "browser", {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      });
  } finally {
    (delete t.extensionNamespacePatches,
      delete t.createExtensionRendererUtils,
      delete t.electron);
  }
}
function _e() {
  const o = typeof location > "u" ? void 0 : location.href,
    t = globalThis.registration?.scope,
    r =
      (typeof process < "u" && process.type === "service-worker") || t
        ? "service-worker"
        : "extension-page";
  if (r === "service-worker")
    try {
      ie();
    } catch (s) {
      console.error(
        "injectExtensionAPIs: could not hold early extension events.",
        s,
      );
    }
  const e = ce();
  if (!(typeof process > "u" || process.contextIsolated)) {
    G();
    for (const s of F) s();
    ((globalThis.electron = e), _(r));
    return;
  }
  const i = `(${G.toString()})();`,
    b = F.map((s) => `(${s.toString()})();`).join(""),
    g = `${i}${b}`,
    u = `${g}(${_.toString()})(${JSON.stringify(r)});`,
    h = `${g}(${_.toString()})('content-script');`,
    f = o?.startsWith("chrome-extension://") === !0;
  let l = !1,
    m;
  try {
    (A.contextBridge.exposeInMainWorld("electron", e),
      A.contextBridge.executeInMainWorld({
        func: (s) => {
          globalThis.electron = s;
        },
        args: [e],
      }),
      A.contextBridge.executeInMainWorld({ func: G }));
    for (const s of F) A.contextBridge.executeInMainWorld({ func: s });
    (A.contextBridge.executeInMainWorld({ func: _, args: [r] }), (l = !0));
  } catch (s) {
    m = s instanceof Error ? s : new Error(String(s));
  }
  if (!l || f) {
    const s = (d) => {
      l ||
        console.error(
          "injectExtensionAPIs: contextBridge and webFrame injection failed.",
          { contextBridgeError: m, webFrameError: d },
        );
    };
    try {
      A.webFrame.executeJavaScript(u).catch((d) => {
        s(d);
      });
    } catch (d) {
      s(d instanceof Error ? d : new Error(String(d)));
    }
  }
  return (s) => {
    try {
      (A.contextBridge.exposeInIsolatedWorld(s, "electron", e),
        A.webFrame
          .executeJavaScriptInIsolatedWorld(s, [{ code: h }])
          .catch(() => {}));
    } catch {}
  };
}
const Ge = typeof location < "u" ? location.href : void 0,
  qe = globalThis.registration?.scope,
  We = typeof process < "u" ? process.type : void 0,
  Y = globalThis.ServiceWorkerGlobalScope,
  Fe = typeof Y == "function" && globalThis instanceof Y,
  $e = ee({
    isServiceWorkerGlobal: Fe,
    locationHref: Ge,
    processType: We,
    serviceWorkerScope: qe,
  });
$e && _e();
