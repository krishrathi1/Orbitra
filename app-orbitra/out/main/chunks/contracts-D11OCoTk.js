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
      s = new t.Error().stack;
    s &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[s] = "bf13315b-dda5-46f9-8f04-d9598b885c97"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-bf13315b-dda5-46f9-8f04-d9598b885c97"));
  })();
} catch {}
const d = require("valibot");
function m(t) {
  const s = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (t) {
    for (const a in t)
      if (a !== "default") {
        const o = Object.getOwnPropertyDescriptor(t, a);
        Object.defineProperty(
          s,
          a,
          o.get ? o : { enumerable: !0, get: () => t[a] },
        );
      }
  }
  return ((s.default = t), Object.freeze(s));
}
const e = m(d),
  p = 10 * 6e4,
  i = e.pipe(e.string(), e.uuid()),
  b = e.pipe(e.string(), e.minLength(1), e.maxLength(200)),
  r = e.pipe(e.string(), e.minLength(1), e.maxLength(200)),
  u = e.pipe(e.string(), e.minLength(1), e.maxLength(200)),
  n = e.pipe(e.number(), e.safeInteger(), e.minValue(0)),
  f = e.pipe(e.string(), e.regex(/^(?:PROFILE|COMPANION)\.md$/)),
  l = e.variant("kind", [
    e.strictObject({ kind: e.literal("profile"), workspaceId: i }),
    e.strictObject({
      kind: e.literal("companion"),
      workspaceId: i,
      companionId: b,
    }),
  ]),
  c = e.picklist(["nightly", "notes"]);
e.strictObject({ target: l });
const g = e.object({
  lastCompleted: e.nullable(
    e.object({ finishedAtMs: n, notesThroughMs: e.nullable(n) }),
  ),
  running: e.nullable(e.object({ leaseExpiresAtMs: n })),
});
e.strictObject({ target: l, clientId: r, trigger: c, dueSinceMs: n });
const h = e.variant("kind", [
  e.object({
    kind: e.literal("claimed"),
    dreamId: i,
    leaseExpiresAtMs: n,
    notesSinceMs: e.nullable(n),
  }),
  e.object({ kind: e.literal("not-due"), finishedAtMs: n }),
  e.object({ kind: e.literal("busy"), leaseExpiresAtMs: n }),
]);
e.strictObject({ clientId: r });
const M = e.object({ renewed: e.boolean() }),
  O = [
    "insufficient_credits",
    "chat_failed",
    "timed_out",
    "lease_lost",
    "cancelled",
    "files_unavailable",
    "notes_unavailable",
  ];
e.strictObject({
  clientId: r,
  sessionId: e.nullable(u),
  outcome: e.variant("status", [
    e.strictObject({
      status: e.literal("complete"),
      notesThroughMs: n,
      filesChanged: e.pipe(e.array(f), e.maxLength(64)),
    }),
    e.strictObject({ status: e.literal("failed"), reason: e.picklist(O) }),
  ]),
});
const S = e.object({ finished: e.boolean() }),
  _ = e.object({ dreamId: i, kind: e.picklist(["profile", "companion"]) }),
  j = e.object({
    dreams: e.array(
      e.object({
        id: i,
        kind: e.picklist(["profile", "companion"]),
        workspaceId: i,
        companionId: e.nullable(e.string()),
        trigger: c,
        status: e.picklist(["running", "complete", "failed"]),
        clientId: e.string(),
        sessionId: e.nullable(e.string()),
        filesChanged: e.array(e.string()),
        error: e.nullable(e.string()),
        startedAtMs: n,
        finishedAtMs: e.nullable(n),
        costUsd: e.nullable(e.number()),
      }),
    ),
  });
exports.OPTMEM_DREAM_LEASE_MS = p;
exports.OptMemDreamChatSchema = _;
exports.OptMemDreamClaimResponseSchema = h;
exports.OptMemDreamFinishResponseSchema = S;
exports.OptMemDreamListResponseSchema = j;
exports.OptMemDreamRenewResponseSchema = M;
exports.OptMemDreamStateResponseSchema = g;
