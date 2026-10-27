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
      (e._sentryDebugIds[t] = "aad9abd1-84d2-4e3f-91dc-c65573dad387"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-aad9abd1-84d2-4e3f-91dc-c65573dad387"));
  })();
} catch {}
const m = require("../main-app.js"),
  p = require("valibot"),
  a = require("./contracts-D11OCoTk.js");
function f(e) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const r in e)
      if (r !== "default") {
        const n = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(
          t,
          r,
          n.get ? n : { enumerable: !0, get: () => e[r] },
        );
      }
  }
  return ((t.default = e), Object.freeze(t));
}
const s = f(p),
  l = 15e3,
  h = s.object({ error: s.string(), message: s.string() });
class d extends Error {
  constructor(t, r, n) {
    (super(n),
      (this.status = t),
      (this.code = r),
      (this.name = "OptMemDreamRequestError"));
  }
}
async function o(e, t, r, n) {
  const i = await m.authFetch(
      `${m.config.app.apiUrl}/api/memory/optmem-dreams${t}`,
      {
        accountId: e,
        method: n === void 0 ? "GET" : "POST",
        ...(n === void 0
          ? {}
          : {
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(n),
            }),
        signal: AbortSignal.timeout(l),
      },
    ),
    u = await i.json().catch(() => null);
  if (!i.ok) {
    const c = s.safeParse(h, u);
    throw new d(
      i.status,
      c.success ? c.output.error : null,
      c.success
        ? c.output.message
        : `Memory dream request returned status ${i.status}`,
    );
  }
  return s.parse(r, u);
}
function O(e, t) {
  return o(e, "/state", a.OptMemDreamStateResponseSchema, { target: t });
}
function g(e, t) {
  return o(e, "/claim", a.OptMemDreamClaimResponseSchema, t);
}
async function y(e, t, r) {
  return (
    await o(e, `/${t}/renew`, a.OptMemDreamRenewResponseSchema, { clientId: r })
  ).renewed;
}
async function D(e, t, r) {
  return (await o(e, `/${t}/finish`, a.OptMemDreamFinishResponseSchema, r))
    .finished;
}
function b(e) {
  return o(e, "", a.OptMemDreamListResponseSchema);
}
exports.OptMemDreamRequestError = d;
exports.claimOptMemDream = g;
exports.finishOptMemDream = D;
exports.listOptMemDreams = b;
exports.readOptMemDreamState = O;
exports.renewOptMemDream = y;
