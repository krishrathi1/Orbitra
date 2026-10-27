"use strict";
(function () {
  try {
    var t =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    t.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      n = new t.Error().stack;
    n &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[n] = "32e351f5-ebf5-45de-a01b-2e8232d89e0f"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-32e351f5-ebf5-45de-a01b-2e8232d89e0f"));
  })();
} catch {}
const p = require("valibot"),
  d = require("./errors-DsbnElf-.js");
function f(t) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (t) {
    for (const o in t)
      if (o !== "default") {
        const r = Object.getOwnPropertyDescriptor(t, o);
        Object.defineProperty(
          n,
          o,
          r.get ? r : { enumerable: !0, get: () => t[o] },
        );
      }
  }
  return ((n.default = t), Object.freeze(n));
}
const e = f(p);
function b(t) {
  if (typeof t != "object" || t === null || Array.isArray(t)) return !1;
  const n = Object.getPrototypeOf(t);
  return n === Object.prototype || n === null;
}
function s(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function i(t, n) {
  const o = t["~run"],
    r = (a, l) =>
      n(a.value) ? o.call(t, a, l) : o.call(t, { typed: !1, value: null }, l);
  return (
    Object.defineProperty(t, "~run", {
      ...Object.getOwnPropertyDescriptor(t, "~run"),
      value: r,
    }),
    t
  );
}
function c(t) {
  return i(e.record(e.string(), t), b);
}
function y(t) {
  return i(e.object(t), s);
}
function g(t) {
  return i(e.strictObject(t), s);
}
const u = e.object({
  source: e.picklist(["default", "explicit"]),
  alias: e.custom((t) => typeof t == "string" && /^account-\d+$/.test(t)),
});
function j(t) {
  return e.variant("isError", [
    e.object({
      isError: e.literal(!1),
      data: t,
      accountResolution: e.optional(u),
    }),
    e.object({
      isError: e.literal(!0),
      error: e.string(),
      data: e.optional(t),
      accountResolution: e.optional(u),
      errorCode: e.optional(e.string()),
      statusCode: e.optional(e.pipe(e.number(), e.safeInteger())),
      retryable: e.optional(e.boolean()),
      retryAfterMs: e.optional(
        e.pipe(e.number(), e.safeInteger(), e.minValue(0)),
      ),
      errorDetails: e.optional(
        c(
          e.union([
            e.string(),
            e.pipe(e.number(), e.finite()),
            e.boolean(),
            e.null(),
          ]),
        ),
      ),
      notConnectedToIntegration: e.optional(e.boolean()),
      kind: e.optional(e.picklist(Object.keys(d.INTEGRATION_ERROR_TRAITS))),
      providerStatus: e.optional(e.pipe(e.number(), e.finite())),
      missingScopes: e.optional(e.array(e.string())),
      safeUserMessage: e.optional(e.string()),
      errorType: e.optional(e.string()),
      needsScopes: e.optional(e.array(e.string())),
    }),
  ]);
}
function O(t) {
  return {
    description: t.description,
    inputSchema: t.inputSchema,
    pagination: t.pagination,
    outputSchema: j(t.outputSchema),
    dataOutputSchema: t.outputSchema,
    async execute(n, o, r) {
      return t.execute
        ? t.execute(n, o, r)
        : {
            isError: !0,
            error:
              "Integration tools must be executed through the provider with user context.",
          };
    },
  };
}
exports.defineIntegrationTool = O;
exports.valibotObject = y;
exports.valibotPlainRecord = c;
exports.valibotStrictObject = g;
