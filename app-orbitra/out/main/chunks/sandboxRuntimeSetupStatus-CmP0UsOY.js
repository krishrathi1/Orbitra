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
      (e._sentryDebugIds[n] = "a4015651-1827-48cd-9cf4-47a32c202a22"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-a4015651-1827-48cd-9cf4-47a32c202a22"));
  })();
} catch {}
const m = require("node:fs"),
  l = require("node:path"),
  f = require("electron"),
  O = require("node:crypto"),
  b = require("../main-app.js");
function E(e) {
  for (const n of e) if (m.existsSync(n)) return n;
  return e[e.length - 1] ?? "";
}
function _() {
  if (f.app.isPackaged)
    return l.join(
      process.resourcesPath,
      "sandbox-helper",
      "runner",
      "agent-runner.mjs",
    );
  const e = f.app.getAppPath();
  return E([
    l.join(e, "resources", "sandbox-helper", "runner", "agent-runner.mjs"),
    l.join(
      e,
      "..",
      "..",
      "resources",
      "sandbox-helper",
      "runner",
      "agent-runner.mjs",
    ),
    l.join(e, "..", "sandbox-helper", "runner", "agent-runner.mjs"),
    l.join(e, "..", "..", "..", "sandbox-helper", "runner", "agent-runner.mjs"),
  ]);
}
const N = ["--use-system-ca"];
function R(e) {
  return [process.env.NODE_OPTIONS?.trim(), e?.trim(), ...N]
    .filter((n) => !!n)
    .join(" ");
}
function P(e) {
  return { ...e, NODE_OPTIONS: R(e.NODE_OPTIONS) };
}
function U(e) {
  const n = D(e.intent),
    o = P(e.baseEnv),
    S = A(n, o);
  if (n.kind !== "allowList") return S;
  const r = e.proxyManager;
  if (!r)
    throw new Error(
      "Sandbox egress proxy is unavailable for allowList network execution",
    );
  const s = O.randomUUID(),
    c = r.preparePolicyForExec({ execId: s, policySnapshot: j(e.intent, n) }),
    d = I(c),
    g = T(c),
    x =
      e.intent.kind === "user-interactive" && e.intent.onBlocked
        ? r.onBlocked(s, e.intent.onBlocked)
        : () => {},
    w = r.onApprovalNeeded(s, (t) => {
      if (e.intent.kind !== "user-interactive" || !e.intent.onApprovalNeeded) {
        r.resolveApproval(t.requestId, !1, !1);
        return;
      }
      const i = {
        requestId: t.requestId,
        host: t.host,
        resolve: (a, k = !0) => {
          r.resolveApproval(t.requestId, a, k);
        },
      };
      Promise.resolve(e.intent.onApprovalNeeded(i)).catch((a) => {
        (b.logger.warn(
          "[sandbox-network-plan] network approval handler failed",
          { err: a.message, host: t.host },
        ),
          r.resolveApproval(t.requestId, !1, !1));
      });
    });
  let p = !1;
  return {
    network: n,
    env: { ...o, ...d },
    envOverlay: d,
    proxyPorts: g,
    activate: (t) => r.activatePolicyForExec(s, t),
    cleanup: () => {
      p || ((p = !0), x(), w(), r.releasePolicyForExec(s));
    },
    resolveApproval: (t, i, a = !0) => {
      r.resolveApproval(t, i, a);
    },
  };
}
function I(e) {
  return {
    HTTP_PROXY: e.httpUrl,
    HTTPS_PROXY: e.httpUrl,
    WS_PROXY: e.httpUrl,
    WSS_PROXY: e.httpUrl,
    ws_proxy: e.httpUrl,
    wss_proxy: e.httpUrl,
    ALL_PROXY: e.socksUrl,
    ORBITRA_PROXY_UDP_RELAY_PORTS: e.socksUdpRelayPorts.join(","),
    NO_PROXY: "",
    NODE_USE_ENV_PROXY: "1",
  };
}
function T(e) {
  return {
    http: Number(new URL(e.httpUrl).port),
    socks: Number(new URL(e.socksUrl).port),
    socksUdpRelay: e.socksUdpRelayPorts,
  };
}
function A(e, n) {
  return {
    network: e,
    env: n,
    envOverlay: {},
    activate: async () => {},
    cleanup: () => {},
    resolveApproval: () => {},
  };
}
function D(e) {
  return e.kind === "internal-deny"
    ? { kind: "deny" }
    : (e.kind === "trusted-direct", e.network);
}
function j(e, n) {
  return e.kind === "internal-deny"
    ? { defaultDecision: "deny", rules: [] }
    : e.kind === "user-interactive" && e.policySnapshot
      ? e.policySnapshot
      : b.buildExecOnlySandboxNetworkPolicySnapshot(n.allow, n.deny);
}
const u = new Map();
let h = null,
  Y = 0;
function L(e) {
  if (process.platform !== "win32") return () => {};
  const n = Y++;
  (u.set(n, { message: e }), y());
  let o = !1;
  return () => {
    o || ((o = !0), u.delete(n), y());
  };
}
function y() {
  const e = Array.from(u.values()),
    n = e[e.length - 1];
  if (!n) {
    v({ status: "idle" });
    return;
  }
  v({ status: "running", message: n.message });
}
function v(e) {
  ((h ??= Promise.resolve()
    .then(() => require("../main-app.js"))
    .then((n) => n.EventManager)),
    h
      .then(({ eventManager: n }) => {
        n.publishGlobal("sandbox:runtime-setup-changed", e);
      })
      .catch(() => {}));
}
exports.beginSandboxRuntimeSetup = L;
exports.prepareSandboxNetworkPlan = U;
exports.runnerScriptPath = _;
exports.withSandboxNodeTlsEnv = P;
