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
      (e._sentryDebugIds[n] = "211d8cbb-cad3-4624-be52-7f4879fc01d0"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-211d8cbb-cad3-4624-be52-7f4879fc01d0"));
  })();
} catch {}
const s = require("../main-app.js"),
  T = require("./contracts-rChhtF3C.js");
function M(e) {
  return e.reconnect === !0
    ? { kind: "reconnect", ...(e.accountId ? { accountId: e.accountId } : {}) }
    : e.addAccount === !0
      ? { kind: "add-account" }
      : { kind: "connect" };
}
function C(e) {
  const n = s.deriveConnectionHealth(e);
  return n.healthKind === "needs-reconnect" ||
    n.tokenState === "expired" ||
    n.tokenState === "revoked" ||
    e.lastErrorKind === "auth_expired" ||
    e.lastErrorKind === "not_connected"
    ? !0
    : e.requiresAuth === !0 && e.isAuthenticated === !1;
}
function k(e) {
  return C(e) ? !0 : e.lastErrorKind !== void 0;
}
function l(e, n) {
  if (e.lastErrorKind === "missing_scopes") return !1;
  if (e.toolProvider !== "native" || e.enabledServices === void 0) return !0;
  const t = s.getConnectorManifest(n);
  if (
    t?.kind !== "native-oauth" ||
    t.auth.kind !== "oauth" ||
    e.id !== t.auth.oauth.providerId
  )
    return !0;
  const c = s.getNativeProvider(t.auth.oauth.providerId);
  if (!c) return !0;
  const o = c.services.find((i) => i.id === n || i.runtimeAppId === n);
  let r = t.auth.oauth.scopeKeys;
  t.auth.oauth.scopeGranularity !== "allOrNothing" &&
    (o
      ? (r = [o.oauthScopeKey])
      : t.auth.oauth.scopeKeys.length !== 1 && (r = []));
  const a = r.flatMap((i) => {
    const d = c.services.find((h) => h.oauthScopeKey === i);
    return d ? [d.name] : [];
  });
  if (a.length !== r.length) return !0;
  const u = new Set(e.enabledServices);
  return a.every((i) => u.has(i));
}
function I(e, n) {
  if (!(!e.connectionId || (!C(e) && l(e, n)))) return f(e);
}
function f(e) {
  if (e.connectionId)
    return {
      connectionId: e.connectionId,
      ...(e.accountName !== void 0 ? { accountName: e.accountName } : {}),
    };
}
function N(e, n, t) {
  const c = s.buildAccountAliasesForApp(n, e),
    o = s.resolveAccountAlias(c, t);
  if (!o) return;
  const r = e.find((a) => a.connectionId === o);
  return r ? f(r) : void 0;
}
function q(e, n) {
  return e.connectionId
    ? s.isMcpProviderAppId(n)
      ? s.mcpIdsMatch(e.id, n)
      : s.connectionMatchesAppId(e.id, n)
    : !1;
}
function E(e, n, t) {
  const c = n.length > 0;
  for (const o of e)
    if (k(o) || (c && (!s.isConnectionConnectedToApp(o, t) || !l(o, t))))
      return f(o);
}
function m(e, n, t) {
  const c = e.filter((i) => q(i, n)),
    o = s.isOutlookServiceAppId(n),
    r = e.filter((i) => s.isConnectionConnectedToApp(i, n)),
    u = r.map((i) => I(i, n)).filter((i) => i !== void 0)[0];
  if (t.kind === "add-account")
    return { verdict: "add-account", brokenConnections: [] };
  if (t.kind === "reconnect") {
    const i = t.accountId;
    if (i) {
      const y = N(o ? c : r, n, i);
      return y
        ? { verdict: "reconnect", brokenConnections: [y] }
        : { verdict: "reconnect", brokenConnections: [] };
    }
    const d = E(c, r, n);
    if (d) return { verdict: "reconnect", brokenConnections: [d] };
    const h = r[0],
      b = h ? f(h) : void 0;
    return { verdict: "reconnect", brokenConnections: b ? [b] : [] };
  }
  if (r.length === 0) {
    if (o && c.length === 1) {
      const i = f(c[0]);
      if (i) return { verdict: "reconnect", brokenConnections: [i] };
    }
    return { verdict: "connect", brokenConnections: [] };
  }
  return u
    ? { verdict: "reconnect", brokenConnections: [u] }
    : { verdict: "already-connected", brokenConnections: [] };
}
function R(e, n, t) {
  const c = t[0];
  if (c) {
    const r = e.find((i) => i.connectionId === c.connectionId);
    if (
      !r &&
      e.some((d) => s.isConnectionConnectedToApp(d, n) && !C(d) && l(d, n))
    )
      return { verified: !0, stillBrokenConnections: [] };
    const u =
      !r || k(r) || !s.isConnectionConnectedToApp(r, n) || !l(r, n) ? [c] : [];
    return { verified: u.length === 0, stillBrokenConnections: u };
  }
  const o = m(e, n, { kind: "connect" });
  return {
    verified: o.verdict === "already-connected",
    stillBrokenConnections: o.brokenConnections,
  };
}
function g(e) {
  const n = e.map((t) => {
    const c = t.accountName?.trim() || t.connectionId;
    return T.untrusted("domain_specific_data", c);
  });
  return n.length === 0
    ? "the selected account"
    : n.length === 1
      ? `"${n[0]}"`
      : n.length === 2
        ? `"${n[0]}" and "${n[1]}"`
        : `${n
            .slice(0, -1)
            .map((t) => `"${t}"`)
            .join(", ")}, and "${n.at(-1)}"`;
}
function P(e, n, t = {}) {
  let c =
    "Account connection has started. Ask the user to complete the connection prompt in chat.";
  (e.verdict === "add-account" &&
    (c =
      "Adding another account has started. Ask the user to sign in with the account they want to add — the provider will offer an account chooser."),
    e.verdict === "reconnect" &&
      (c = `Re-authentication has started${e.brokenConnections.length > 0 ? ` for ${g(e.brokenConnections)}` : ""}. Ask the user to complete the connection prompt in chat.`));
  const o = { toolSlug: "manage_apps", appId: n, status: "needs_to_connect" };
  return (
    t.services !== void 0 && (o.services = t.services),
    t.accountLabel !== void 0 &&
      e.verdict !== "reconnect" &&
      (o.accountLabel = t.accountLabel),
    t.integrationName !== void 0 && (o.integrationName = t.integrationName),
    t.logoUrl !== void 0 && (o.logoUrl = t.logoUrl),
    t.logoPageUrl !== void 0 && (o.logoPageUrl = t.logoPageUrl),
    e.brokenConnections.length > 0 &&
      (o.reconnectConnections = e.brokenConnections),
    e.verdict === "reconnect" && (o.forceReauth = !0),
    e.verdict === "add-account" && (o.addAccount = !0),
    { output: c, metadata: o }
  );
}
function B(e, n, t) {
  const c = new Set(t);
  return e.find(
    (o) =>
      o.connectionId !== void 0 &&
      !c.has(o.connectionId) &&
      s.isConnectionConnectedToApp(o, n) &&
      !C(o),
  );
}
function $(e) {
  const n = e.length === 1 ? "that account" : "those accounts",
    t = e.length === 1 ? "needs" : "need";
  return `${g(e)} still ${t} re-authentication. For an ongoing task, continue on the website without asking permission to switch. For app setup, retry the connection prompt with ${n} before retrying the app action.`;
}
async function x(e, n) {
  try {
    return { source: "fresh", connections: await e() };
  } catch {
    const t = n();
    return t
      ? { source: "cached", connections: t }
      : { source: "unavailable", connections: [] };
  }
}
const v = new Map(),
  K = 6e4,
  w = (s.CHAT_CLIENT_ACTION_TTL_MS.reconnect * 2) / 3;
function S(e, n) {
  return !e.connectionId || !n.some((t) => t.connectionId === e.connectionId)
    ? !1
    : R(n, e.appId, [{ connectionId: e.connectionId }]).verified;
}
function A(e, n) {
  const t = v.get(e);
  return t
    ? ((t.queue = t.queue.then(async () => {
        for (const [c, o] of t.actions) {
          o.state !== "resolved" &&
            n &&
            (o.state = S(o.payload, n) ? "resolved" : "waiting");
          try {
            if (o.state === "resolved")
              (await s.deleteChatAction({ profileId: e, handle: o.handle }),
                t.actions.delete(c));
            else if (o.handle.expiresAtMs <= Date.now()) t.actions.delete(c);
            else if (
              n &&
              o.state === "waiting" &&
              o.payload.connectionId &&
              o.handle.expiresAtMs - Date.now() <= w
            ) {
              const r = await s.renewChatAction({
                profileId: e,
                handle: o.handle,
              });
              r === null ? t.actions.delete(c) : (o.handle.expiresAtMs = r);
            }
          } catch {
            s.logger.warn(
              "[ReconnectActions] action update failed; retained for retry",
              { profileId: e, actionId: c },
            );
          }
        }
      })),
      t.queue)
    : Promise.resolve();
}
function p(e, n, t) {
  const c = v.get(e);
  c && c.actions.set(n.id, { handle: n, payload: t, state: "unverified" });
}
function _(e, n) {
  if (v.has(e)) return;
  const t = { actions: new Map(), recovered: !1, queue: Promise.resolve() };
  (v.set(e, t),
    n.subscribeConnections((o, r) => {
      r === "fetch" && A(e, o);
    }));
  const c = async () => {
    try {
      if (!t.recovered) {
        const r = await s.listDeviceChatActions(e);
        for (const a of r)
          a.payload?.type !== "reconnect" ||
            a.expiresAtMs === null ||
            t.actions.has(a.id) ||
            p(e, { ...a, expiresAtMs: a.expiresAtMs }, a.payload);
        t.recovered = !0;
      }
      [...t.actions.values()].some(
        (r) =>
          r.payload.connectionId &&
          (r.state === "unverified" ||
            (r.state === "waiting" && r.handle.expiresAtMs - Date.now() <= w)),
      )
        ? (await n.refreshAfterMutation("refresh"), await t.queue)
        : await A(e);
    } catch {
      s.logger.warn("[ReconnectActions] recovery failed; will retry", {
        profileId: e,
      });
    } finally {
      setTimeout(() => void c(), K).unref();
    }
  };
  c();
}
const O = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      isReconnectResolved: S,
      reconcileReconnectActions: A,
      startReconnectActionRecovery: _,
      trackReconnectAction: p,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
exports.buildConnectAuthCard = P;
exports.connectionHasRequiredAppAuthorization = l;
exports.fetchConnectAuthConnections = x;
exports.findAddedConnection = B;
exports.formatBrokenConnectionAccounts = g;
exports.parseConnectAuthRequest = M;
exports.reconcileReconnectActions = A;
exports.reconnectActions = O;
exports.resolveConnectAuthGate = m;
exports.startReconnectActionRecovery = _;
exports.stillBrokenConnectionOutput = $;
exports.trackReconnectAction = p;
exports.verifyReconnectConnections = R;
