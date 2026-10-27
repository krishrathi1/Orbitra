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
      (e._sentryDebugIds[n] = "a124a917-8d15-4a6f-aefe-38483a9905d1"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-a124a917-8d15-4a6f-aefe-38483a9905d1"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Z = require("node:timers/promises"),
  a = require("../main-app.js"),
  x = require("electron"),
  ee = require("valibot"),
  ne = require("node:http");
require("node:crypto");
require("node:path");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
require("node:fs/promises");
require("node:os");
require("node:fs");
require("node:https");
require("./protocol-BGN1BQCi.js");
require("events");
require("child_process");
require("util");
require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("@reflect/auth/workos-session");
require("crypto");
require("./errors-DsbnElf-.js");
require("./savedCertificateBlocklist-BUtmL3xA.js");
require("node:tls");
require("@reflect/auth/device-policy");
require("node:process");
require("node:assert");
require("node:stream");
require("./_commonjsHelpers-DJP3_Dvh.js");
require("./index-CSlo9i6Z.js");
require("tty");
require("node-machine-id");
require("fs/promises");
require("./config-CdpnFYk6.js");
require("./contracts-rChhtF3C.js");
require("@reflect/auth/desktop");
require("./worker-protocol-CFgWGf-A.js");
require("./unicode-CSAGP0Z8.js");
require("fs");
require("better-sqlite3");
require("node:child_process");
require("url");
require("stream");
require("zlib");
require("electron-updater");
require("@reflect/auth/last-login-method");
require("@reflect/auth/oauth-state");
require("@reflect/auth/session-identity");
require("./settled-read-r0Yf0ORp.js");
require("module");
require("./fs-native-KvxiM8hl.js");
require("node:module");
require("tldts");
require("node:buffer");
require("./rustImageLimits-zqqoE-LA.js");
require("mime-types");
require("./resourcePolicy-DcbBChq3.js");
require("./resourcePolicy-BX-8H2Pm.js");
require("http");
require("@ghostery/adblocker-electron");
require("./wav-DElqHA--.js");
require("js-yaml");
require("stream/promises");
require("https");
require("net");
require("tls");
require("buffer");
require("electron-chrome-web-store");
require("./ids-B2sWlG17.js");
require("@modelcontextprotocol/sdk/client/auth.js");
require("@modelcontextprotocol/sdk/client/index.js");
require("@modelcontextprotocol/sdk/client/sse.js");
require("@modelcontextprotocol/sdk/client/streamableHttp.js");
require("@modelcontextprotocol/sdk/client/stdio.js");
require("@modelcontextprotocol/sdk/shared/stdio.js");
require("./process-tree-DTtONxmb.js");
require("cross-spawn");
require("piscina");
require("@modelcontextprotocol/sdk/shared/auth-utils.js");
require("@modelcontextprotocol/sdk/server/auth/errors.js");
require("@modelcontextprotocol/sdk/shared/auth.js");
require("node:readline");
require("async-mutex");
require("node:net");
require("electron-dl");
require("tar");
require("node:inspector/promises");
require("node:v8");
require("tokenx");
require("marked");
require("lodash/debounce");
require("./worker-protocol-CcOBX8D2.js");
require("node:zlib");
require("node:diagnostics_channel");
require("worker_threads");
require("diagnostics_channel");
require("./singleInstance-CuMDgUKt.js");
function te(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const t in e)
      if (t !== "default") {
        const r = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(
          n,
          t,
          r.get ? r : { enumerable: !0, get: () => e[t] },
        );
      }
  }
  return ((n.default = e), Object.freeze(n));
}
const T = te(ee),
  re = "https://auth.openai.com",
  ie = [1455, 1457],
  l = "Something went wrong. Try again.";
function oe(e) {
  return e?.usageEnabled
    ? (e.connections.find((n) => n.selected) ?? null)
    : null;
}
class $ extends Error {
  constructor() {
    (super("The ChatGPT sign-in ports are in use"),
      (this.name = "LoopbackPortsBusyError"));
  }
}
function M(e, n) {
  return e.writableEnded || e.socket?.destroyed !== !1
    ? Promise.resolve()
    : new Promise((t) => {
        (e.once("close", () => t()),
          e
            .writeHead(302, {
              Location: n,
              "Cache-Control": "no-store",
              "Referrer-Policy": "no-referrer",
            })
            .end(() => t()));
      });
}
function ae(e, n) {
  return new Promise((t, r) => {
    const i = (s) => {
        (e.off("listening", o),
          s.code === "EADDRINUSE" || s.code === "EACCES" ? t(!1) : r(s));
      },
      o = () => {
        (e.off("error", i), t(!0));
      };
    (e.once("error", i), e.once("listening", o), e.listen(n, "127.0.0.1"));
  });
}
async function se(e, n) {
  for (const t of n) {
    if (!(await ae(e, t))) continue;
    const r = e.address();
    return typeof r == "object" && r !== null ? r.port : t;
  }
  return null;
}
function E(e) {
  (e.close(), e.closeAllConnections());
}
async function ue({ signal: e, resultPageUrl: n, ports: t = ie }) {
  const r = new URL(n),
    i = (c) => {
      const f = new URL(r);
      return (f.searchParams.set("outcome", c), f.toString());
    };
  let o = null,
    s = !1,
    d = null,
    u = () => {};
  const P = new Promise((c) => {
      u = c;
    }),
    A = (c) => {
      s || ((s = !0), u(c));
    },
    y = ne.createServer((c, f) => {
      const S = URL.parse(c.url ?? "/", "http://127.0.0.1");
      if (S?.pathname !== "/auth/callback") {
        f.writeHead(404).end();
        return;
      }
      if (s || o === null || S.searchParams.get("state") !== o) {
        M(f, i("sign_in_failed"));
        return;
      }
      d = f;
      const U = S.searchParams.get("code");
      A(
        U
          ? { kind: "code", code: U }
          : {
              kind: "error",
              error: S.searchParams.get("error") ?? "missing_code",
            },
      );
    }),
    L = await se(y, t);
  if (L === null) throw (E(y), new $());
  const m = () => {
    s || (A({ kind: "cancelled" }), E(y));
  };
  return (
    e.aborted ? m() : e.addEventListener("abort", m, { once: !0 }),
    {
      port: L,
      expectState: (c) => {
        o = c;
      },
      result: P,
      finish: async (c) => {
        (e.removeEventListener("abort", m), A({ kind: "cancelled" }));
        const f = d;
        ((d = null), f && (await M(f, i(c))), E(y));
      },
    }
  );
}
const j = `${a.config.app.apiUrl}/api/chatgpt-plan`,
  ce = "/api/chatgpt-plan/oauth/begin",
  le = new URL(a.config.app.apiUrl).origin,
  de = new Set([
    `api.${a.config.app.apiBaseDomain}`,
    `staging-api.${a.config.app.apiBaseDomain}`,
  ]),
  fe = `${j}/oauth/result`,
  ge = 15e3,
  B = 5 * 6e4,
  he = 1500,
  pe = 5e3,
  Pe = 2 * 6e4,
  we = "chatgptPlanFirstUse:",
  Ce =
    "Orbitra couldn't reach the server. Check your connection and try again.",
  qe = "Orbitra didn't hear back from the server. Try again.",
  H = "Orbitra couldn't open your browser. Try again.",
  X = "The sign-in expired. Try again.",
  Te =
    "Another app is using the ChatGPT sign-in port. Close Codex or other ChatGPT sign-ins and try again.",
  _e = { status: "failed", reason: "expired", message: X };
function k(e) {
  return { status: "failed", reason: "sign_in_failed", message: e };
}
function G(e) {
  return e === "TimeoutError" ? qe : Ce;
}
const ye = new Set([
    a.CHATGPT_PLAN_API_ERRORS.unavailable,
    a.CHATGPT_PLAN_API_ERRORS.connection_not_found,
    a.CHATGPT_PLAN_API_ERRORS.loopback_port_required,
  ]),
  K = {
    status: { kind: "loading" },
    connect: { kind: "idle" },
    firstUseNoticePending: !1,
  },
  b = new Map();
function _(e) {
  const n = b.get(e);
  if (n) return n;
  const t = {
    accountId: e,
    view: K,
    generation: 0,
    changeCount: 0,
    statusReadAtMs: 0,
    pendingRead: null,
    connectAttempt: null,
  };
  return (
    b.set(e, t),
    a.authManager.forAccount(e).registerSignOutCleanup(() => Se(t)),
    t
  );
}
function z(e) {
  for (const n of a.eventManager.getOpenProfileIds())
    a.authManager.forProfile(n).accountId === e.accountId &&
      a.eventManager.publishIPCState("settings.chatgptPlan", n, e.view);
}
function p(e, n) {
  ((e.view = { ...e.view, ...n }), z(e));
}
function Se(e) {
  ((e.generation += 1), O(e), (e.pendingRead = null), (e.view = K), z(e));
}
function ke(e) {
  return e.view.status.kind === "ready" ? e.view.status.status : null;
}
function v(e) {
  e.view.connect.kind === "failed" && p(e, { connect: { kind: "idle" } });
}
function J(e) {
  return `${we}${e}`;
}
function be(e) {
  return a.globalSettings.get("dismissedPrompts")[J(e)]?.dontShowAgain === !0;
}
function W(e, n) {
  ((e.statusReadAtMs = Date.now()),
    p(e, {
      status: { kind: "ready", status: n },
      firstUseNoticePending: oe(n) !== null && !be(e.accountId),
    }));
}
function Re(e, n) {
  try {
    return new URL(e).origin === n;
  } catch {
    return !1;
  }
}
function Ae(e) {
  const n = URL.parse(e);
  return n?.pathname !== ce
    ? !1
    : n.origin === le || (n.protocol === "https:" && de.has(n.host));
}
function Y(e) {
  const n = T.safeParse(a.ChatGPTPlanStatusSchema, e);
  return n.success ? n.output : null;
}
function w(e, n, t = {}) {
  const r = AbortSignal.timeout(ge);
  return a.authFetch(`${j}${n}`, {
    method: t.method,
    body: t.body,
    cache: "no-store",
    accountId: e.accountId,
    signal: t.signal ? AbortSignal.any([t.signal, r]) : r,
  });
}
async function R(e) {
  const n = T.safeParse(
    a.ChatGPTPlanApiErrorSchema,
    await e.json().catch(() => null),
  );
  return n.success ? n.output : null;
}
async function me(e, n) {
  const t = e.generation,
    r = e.changeCount;
  e.view.status.kind !== "ready" && p(e, { status: { kind: "loading" } });
  let i = null,
    o = "invalid_response";
  try {
    const s = await w(e, "/status");
    s.ok ? (i = Y(await s.json())) : (o = `http_${s.status}`);
  } catch (s) {
    o = s instanceof Error ? s.name : "unknown";
  }
  return t !== e.generation
    ? !1
    : (i ||
        a.logger.warn("[ChatGPTPlan] Status read failed", {
          userId: e.accountId,
          outcome: "failed",
          reason: o,
        }),
      r !== e.changeCount
        ? !0
        : i
          ? (W(e, i), !0)
          : ((n === "replace" || e.view.status.kind !== "ready") &&
              p(e, { status: { kind: "failed" } }),
            !1));
}
function g(e, n) {
  const t = me(e, n).finally(() => {
    e.pendingRead === t && (e.pendingRead = null);
  });
  return ((e.pendingRead = t), t);
}
async function Ee(e) {
  const n = _(e);
  (n.view.status.kind === "ready" && Date.now() - n.statusReadAtMs < B) ||
    (await (n.pendingRead ?? g(n, "keep")));
  const { status: r } = n.view;
  return r.kind === "ready" ? r.status.connections.length > 0 : null;
}
async function Ie(e, n, t) {
  const r = _(e);
  if (
    (t && v(r),
    !(
      !t &&
      r.view.status.kind === "ready" &&
      (a.eventManager.publishIPCState("settings.chatgptPlan", n, r.view),
      Date.now() - r.statusReadAtMs < B)
    ))
  ) {
    if (!t && r.pendingRead) {
      await r.pendingRead;
      return;
    }
    await g(r, "keep");
  }
}
function I(e, n) {
  n && ye.has(n.error) && g(e, "keep");
}
async function Q(e, n, t) {
  const r = e.generation;
  try {
    const i = await t();
    if (!i.ok) {
      const s = await R(i);
      return (
        a.logger.warn("[ChatGPTPlan] Connection change refused", {
          userId: e.accountId,
          operation: n,
          outcome: "denied",
          reason: s?.error ?? `http_${i.status}`,
        }),
        r === e.generation &&
          (s === null || i.status >= 500 ? g(e, "replace") : I(e, s)),
        { success: !1, error: s?.message ?? l }
      );
    }
    const o = Y(await i.json().catch(() => null));
    return (
      r === e.generation &&
        ((e.changeCount += 1), o ? (W(e, o), v(e)) : g(e, "replace")),
      o ? { success: !0 } : { success: !1, error: l }
    );
  } catch (i) {
    const o = i instanceof Error ? i.name : "unknown";
    return (
      a.logger.warn("[ChatGPTPlan] Connection change failed", {
        userId: e.accountId,
        operation: n,
        outcome: "failed",
        reason: o,
      }),
      r === e.generation && g(e, "replace"),
      { success: !1, error: G(o) }
    );
  }
}
function Ge(e, n) {
  const t = _(e);
  return Q(t, "select", () =>
    w(t, "/selection", {
      method: "PUT",
      body: JSON.stringify({ connectionId: n }),
    }),
  );
}
function ve(e, n) {
  const t = _(e);
  return Q(t, "disconnect", () =>
    w(t, `/connections/${encodeURIComponent(n)}`, { method: "DELETE" }),
  );
}
function C(e) {
  return e.account.connectAttempt === e;
}
function O(e) {
  (e.connectAttempt?.controller.abort(), (e.connectAttempt = null));
}
function q(e, n) {
  C(e) && ((e.account.connectAttempt = null), p(e.account, { connect: n }));
}
function h(e, n, t) {
  return (
    a.logger.warn("[ChatGPTPlan] ChatGPT sign-in could not start", {
      userId: e.account.accountId,
      outcome: "failed",
      reason: t,
    }),
    e.loopback?.finish("sign_in_failed"),
    q(e, { kind: "idle" }),
    { success: !1, error: n }
  );
}
async function N(e) {
  e.loopback = await ue({ signal: e.controller.signal, resultPageUrl: fe });
}
async function D(e, n) {
  const t = await w(e.account, "/connect", {
    method: "POST",
    body: JSON.stringify({
      ...(n ? { reconnectConnectionId: n } : {}),
      ...(e.loopback ? { loopbackPort: e.loopback.port } : {}),
    }),
    signal: e.controller.signal,
  });
  if (!t.ok)
    return { kind: "refused", httpStatus: t.status, refusal: await R(t) };
  const r = T.safeParse(
    a.ChatGPTPlanConnectStartSchema,
    await t.json().catch(() => null),
  );
  if (!r.success) return { kind: "invalid" };
  const i = Date.now() + r.output.expiresInSeconds * 1e3;
  return { kind: "started", start: r.output, deadlineMs: i };
}
function V(e, n) {
  n.then((t) => Oe(e, t)).catch((t) => {
    (a.logger.warn("[ChatGPTPlan] ChatGPT sign-in failed unexpectedly", {
      userId: e.account.accountId,
      outcome: "failed",
      reason: t instanceof Error ? t.name : "unknown",
    }),
      q(e, { kind: "failed", message: l }));
  });
}
async function Oe(e, n) {
  const { account: t } = e;
  if (!(n === null || e.generation !== t.generation)) {
    if (n.status === "connected") {
      (a.logger.info("[ChatGPTPlan] ChatGPT account connected", {
        userId: t.accountId,
        connectionId: n.connectionId,
        outcome: "connected",
      }),
        (t.changeCount += 1));
      const r = await g(t, "keep");
      if (e.generation !== t.generation) return;
      (r || (await g(t, "replace")), v(t), q(e, { kind: "idle" }));
      return;
    }
    ((t.changeCount += 1),
      (t.statusReadAtMs = 0),
      g(t, "keep"),
      C(e) &&
        (a.logger.info(
          "[ChatGPTPlan] ChatGPT sign-in ended without a connection",
          { userId: t.accountId, outcome: "failed", reason: n.reason },
        ),
        q(e, { kind: "failed", message: n.message })));
  }
}
function F(e) {
  C(e) &&
    (a.logger.info("[ChatGPTPlan] ChatGPT sign-in ended without a connection", {
      userId: e.account.accountId,
      outcome: "failed",
      reason: "expired",
    }),
    q(e, { kind: "failed", message: X }));
}
async function Le(e, n, t) {
  const { account: r } = e,
    i = t + Pe;
  let o = he;
  for (; Date.now() < i; ) {
    if (
      (Date.now() >= t && F(e),
      await Z.setTimeout(Math.min(o, i - Date.now())),
      e.generation !== r.generation)
    )
      return null;
    o = Math.min(o * 1.5, pe);
    let s;
    try {
      s = await w(r, `/connect/${encodeURIComponent(n)}`);
    } catch {
      continue;
    }
    if (e.generation !== r.generation) return null;
    if (s.status >= 400 && s.status < 500) {
      const P = await R(s);
      return k(P?.message ?? l);
    }
    if (!s.ok) continue;
    const d = await s.json().catch(() => null),
      u = T.safeParse(a.ChatGPTPlanConnectResultSchema, d);
    if (u.success && u.output.status !== "pending") return u.output;
  }
  return (F(e), null);
}
async function Ue(e, n, t, r) {
  let i;
  try {
    i = await a.withTimeout(n.result, Math.max(0, r - Date.now()));
  } catch {
    return _e;
  }
  if (i.kind === "cancelled") return null;
  let o;
  try {
    o = await w(
      e.account,
      `/connect/${encodeURIComponent(t.transactionId)}/complete`,
      {
        method: "POST",
        body: JSON.stringify({
          state: t.state,
          ...(i.kind === "code" ? { code: i.code } : { error: i.error }),
        }),
      },
    );
  } catch (u) {
    const P = u instanceof Error ? u.name : "unknown";
    return (
      a.logger.warn(
        "[ChatGPTPlan] ChatGPT sign-in could not be handed to the API",
        { userId: e.account.accountId, outcome: "failed", reason: P },
      ),
      k(G(P))
    );
  }
  if (!o.ok) {
    const u = await R(o);
    return k(u?.message ?? l);
  }
  const s = await o.json().catch(() => null),
    d = T.safeParse(a.ChatGPTPlanConnectResultSchema, s);
  return !d.success || d.output.status === "pending" ? k(l) : d.output;
}
async function Me(e, n, t, r) {
  let i = "sign_in_failed";
  try {
    const o = await Ue(e, n, t, r);
    return (
      o === null
        ? (i = "cancelled")
        : (i = o.status === "connected" ? "connected" : o.reason),
      o
    );
  } finally {
    await n.finish(i);
  }
}
async function Ne(e, n, t) {
  if ((e.loopback?.finish("cancelled"), (e.loopback = null), !Ae(n.beginUrl)))
    return h(e, l, "invalid_start_response");
  try {
    await x.shell.openExternal(n.beginUrl);
  } catch (r) {
    return h(e, H, r instanceof Error ? r.name : "unknown");
  }
  return (V(e, Le(e, n.transactionId, t)), { success: !0 });
}
async function De(e, n, t) {
  const r = e.loopback;
  if (!r || !Re(n.authorizationUrl, re))
    return h(e, l, "invalid_start_response");
  r.expectState(n.state);
  try {
    await x.shell.openExternal(n.authorizationUrl);
  } catch (i) {
    return h(e, H, i instanceof Error ? i.name : "unknown");
  }
  return (V(e, Me(e, r, n, t)), { success: !0 });
}
async function Fe(e, n) {
  const t = _(e);
  O(t);
  const r = {
    account: t,
    generation: t.generation,
    controller: new AbortController(),
    loopback: null,
  };
  ((t.connectAttempt = r), p(t, { connect: { kind: "waiting" } }));
  let i;
  try {
    (ke(t)?.signIn.kind === "loopback" && (await N(r)),
      (i = await D(r, n)),
      i.kind === "refused" &&
        i.refusal?.error === a.CHATGPT_PLAN_API_ERRORS.loopback_port_required &&
        !r.loopback &&
        (I(t, i.refusal), await N(r), (i = await D(r, n))));
  } catch (o) {
    if (!C(r)) return { success: !0 };
    if (o instanceof $) return h(r, Te, "loopback_ports_busy");
    const s = o instanceof Error ? o.name : "unknown";
    return h(r, G(s), s);
  }
  if (!C(r)) return { success: !0 };
  switch (i.kind) {
    case "refused":
      return (
        I(t, i.refusal),
        h(
          r,
          i.refusal?.message ?? l,
          i.refusal?.error ?? `http_${i.httpStatus}`,
        )
      );
    case "invalid":
      return h(r, l, "invalid_start_response");
    case "started":
      return i.start.flow === "browser"
        ? Ne(r, i.start, i.deadlineMs)
        : De(r, i.start, i.deadlineMs);
    default:
      return i;
  }
}
function xe(e) {
  const n = b.get(e);
  n && (O(n), p(n, { connect: { kind: "idle" } }));
}
function $e(e) {
  const n = J(e),
    t = a.globalSettings.get("dismissedPrompts");
  a.globalSettings.set("dismissedPrompts", {
    ...t,
    [n]: {
      dismissedAt: new Date().toISOString(),
      dismissCount: (t[n]?.dismissCount ?? 0) + 1,
      dontShowAgain: !0,
    },
  }) ||
    a.logger.warn(
      "[ChatGPTPlan] First-use notice acknowledgement was not saved",
      { userId: e, outcome: "failed", reason: "persistence_failed" },
    );
  const i = b.get(e);
  i?.view.firstUseNoticePending && p(i, { firstUseNoticePending: !1 });
}
exports.acknowledgeChatGPTPlanFirstUse = $e;
exports.cancelChatGPTPlanConnect = xe;
exports.connectChatGPTPlan = Fe;
exports.disconnectChatGPTPlanConnection = ve;
exports.hasChatGPTPlanConnection = Ee;
exports.loadChatGPTPlan = Ie;
exports.selectChatGPTPlanConnection = Ge;
