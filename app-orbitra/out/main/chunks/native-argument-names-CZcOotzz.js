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
      (e._sentryDebugIds[n] = "66a85731-ba9b-4663-99d3-39c850a5adce"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-66a85731-ba9b-4663-99d3-39c850a5adce"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const l = new Set([
    "account",
    "accountId",
    "connectedAccountId",
    "clientTime",
    "clientTimezone",
  ]),
  f = {
    avatarUrl: ["avatarURL"],
    subject: ["Subject"],
    startDateTime: ["StartDateTime"],
    endDateTime: ["EndDateTime"],
    durationInMinutes: ["DurationInMinutes"],
    isAllDayEvent: ["IsAllDayEvent"],
    whoId: ["WhoId"],
    whatId: ["WhatId"],
    description: ["Description"],
    location: ["Location"],
    ownerId: ["OwnerId"],
    eventSubtype: ["EventSubtype"],
    abSelected: ["ABSelected"],
    cursor: ["_cursor"],
    limit: ["_limit"],
    skip: ["_skip"],
    authorDate: ["author__date"],
    authorEmail: ["author__email"],
    authorName: ["author__name"],
    committerDate: ["committer__date"],
    committerEmail: ["committer__email"],
    committerName: ["committer__name"],
    dateCreatedGte: ["date_created__gte"],
    dateCreatedLt: ["date_created__lt"],
  };
function u(e) {
  return e
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "")
    .toLowerCase();
}
function d(e) {
  if (e.startsWith("__")) return e;
  const n = u(e).replace(/_([a-z0-9])/g, (a, o) => o.toUpperCase());
  return n !== e && l.has(n) ? e : n;
}
function m(e) {
  const n = new Map();
  for (const a of e) {
    const o = d(a),
      r = a.startsWith("__") ? [a] : [a, o, u(o), ...(f[o] ?? [])];
    for (const t of r) {
      if ((t !== a && l.has(t)) || (t !== a && e.includes(t) && l.has(a)))
        continue;
      const i = n.get(t);
      if (i !== void 0 && i !== a)
        throw new Error(
          `Ambiguous argument spelling "${t}" for "${i}" and "${a}".`,
        );
      n.set(t, a);
    }
  }
  return n;
}
function _(e, n) {
  const a = m(n),
    o = new Map();
  let r = !1;
  for (const [t, i] of Object.entries(e)) {
    const s = a.get(t) ?? t,
      c = o.get(s);
    if (c && !Object.is(c.value, i))
      return {
        ok: !1,
        error: `Conflicting arguments "${c.spelling}" and "${t}". Use one spelling for "${d(s)}".`,
      };
    (o.set(s, { spelling: t, value: i }), (s !== t || c) && (r = !0));
  }
  return {
    ok: !0,
    args: r
      ? Object.fromEntries(Array.from(o, ([t, { value: i }]) => [t, i]))
      : e,
  };
}
exports.canonicalNativeArgumentName = d;
exports.normalizeNativeArgumentNames = _;
