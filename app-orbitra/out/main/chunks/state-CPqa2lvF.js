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
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "47d19c20-28ba-4ad7-a117-a37fb24f3eba"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-47d19c20-28ba-4ad7-a117-a37fb24f3eba"));
  })();
} catch {}
const O = require("valibot"),
  c = require("./parse-MOHEM7uu.js"),
  A = require("./template-CmpXTu8Z.js");
function D(t) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (t) {
    for (const n in t)
      if (n !== "default") {
        const i = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(
          e,
          n,
          i.get ? i : { enumerable: !0, get: () => t[n] },
        );
      }
  }
  return ((e.default = t), Object.freeze(e));
}
const g = D(O);
function C(t, e) {
  return t !== null && e - t > 720 * 60 * 60 * 1e3;
}
function y(t, e) {
  return t ? (e ? (Date.parse(t) <= Date.parse(e) ? t : e) : t) : e;
}
function l(t, e) {
  return t ? (e ? (Date.parse(t) >= Date.parse(e) ? t : e) : t) : e;
}
function m(t, e) {
  for (const n of t.sections) {
    const i = n.items.find((s) => s.id === e);
    if (i) return i;
  }
  throw new Error(`Unknown onboarding checklist item: ${e}`);
}
function I(t) {
  return {
    ...t,
    enrollment: { ...t.enrollment },
    visibility: { ...t.visibility },
    sections: t.sections.map((e) => ({
      ...e,
      items: e.items.map((n) => ({
        ...n,
        ...(n.chat ? { chat: { ...n.chat } } : {}),
        completion: n.completion ? { ...n.completion } : null,
      })),
    })),
  };
}
function _(t, e) {
  const n = t.toISOString();
  return {
    schemaVersion: A.ONBOARDING_CHECKLIST_SCHEMA_VERSION,
    catalogVersion: c.ONBOARDING_CHECKLIST_CATALOG.version,
    enrollment: { id: e, enrolledAt: n, source: "onboarding_completion" },
    updatedAt: n,
    visibility: { status: "visible", changedAt: n },
    sections: c.ONBOARDING_CHECKLIST_CATALOG.sections.map((i) => ({
      id: i.id,
      items: i.items.map((s) => ({
        id: s.id,
        iconId: s.iconId,
        ...("chat" in s ? { chat: { ...s.chat } } : {}),
        firstOpenedAt: null,
        lastOpenedAt: null,
        dismissedAt: null,
        completion: null,
      })),
    })),
  };
}
function w(t, e) {
  const n = c.getChecklistItemDefinition(t);
  if (!n) throw new Error(`Unknown onboarding checklist item: ${t.id}`);
  if (e.mode === "manual" || e.mode === "manual_after_open") {
    if (n.kind !== "self_serve")
      throw new Error(`${t.id} does not support manual completion`);
    if (e.mode === "manual_after_open" && !t.firstOpenedAt)
      throw new Error(`${t.id} must be opened before manual completion`);
    return;
  }
  if (n.kind !== "automatic")
    throw new Error(`${t.id} does not support automatic completion`);
  if (!c.isChecklistCompletionValidForItem({ ...t, completion: e }))
    throw new Error(`${t.id} has invalid completion metadata`);
}
function v(t, e) {
  const n = e.type === "item_completed" ? e.completion.completedAt : e.at;
  if (!Number.isFinite(Date.parse(n)))
    throw new Error("Checklist mutation timestamp is invalid");
  const i = I(t);
  if (e.type === "items_personalized") {
    const s = g.parse(A.checklistChatItemsSchema, e.items);
    if (i.personalizedAt && Date.parse(e.at) < Date.parse(i.personalizedAt))
      return t;
    const r = i.sections.find(({ id: o }) => o === "getting-started");
    if (!r) throw new Error("Checklist has no getting-started section");
    const p = new Map(r.items.map((o) => [o.id, o])),
      u = r.items.filter(
        (o) => c.getChecklistItemDefinition(o)?.kind === "automatic",
      ),
      f = r.items.flatMap(({ id: o, iconId: a, chat: d }) =>
        d ? [{ id: o, iconId: a, ...d }] : [],
      );
    if (JSON.stringify(f) === JSON.stringify(s)) return t;
    ((r.items = [
      ...s.map(({ id: o, iconId: a, ...d }) => ({
        id: o,
        firstOpenedAt: null,
        lastOpenedAt: null,
        dismissedAt: null,
        completion: null,
        ...p.get(o),
        iconId: a,
        chat: d,
      })),
      ...u,
    ]),
      (i.personalizedAt = e.at));
  } else if (e.type === "item_opened") {
    const s = m(i, e.itemId);
    ((s.firstOpenedAt = y(s.firstOpenedAt, e.at)),
      (s.lastOpenedAt = l(s.lastOpenedAt, e.at)));
  } else if (e.type === "item_completed") {
    const s = m(i, e.itemId);
    if (
      (w(s, e.completion),
      s.completion &&
        Date.parse(e.completion.completedAt) >=
          Date.parse(s.completion.completedAt))
    )
      return t;
    s.completion = { ...e.completion };
  } else if (e.type === "item_dismissed") {
    const s = m(i, e.itemId);
    s.dismissedAt = l(s.dismissedAt, e.at);
  } else if (e.type === "snoozed") {
    if (Date.parse(e.at) < Date.parse(i.visibility.changedAt)) return t;
    i.visibility = {
      status: "snoozed",
      changedAt: e.at,
      until: e.until,
      timeZone: e.timeZone,
    };
  } else {
    if (
      i.visibility.status === "hidden" &&
      Date.parse(e.at) < Date.parse(i.visibility.changedAt)
    )
      return t;
    i.visibility = { status: "hidden", changedAt: e.at, reason: e.reason };
  }
  return ((i.updatedAt = l(i.updatedAt, n) ?? n), i);
}
function k(t, e) {
  return t
    ? e
      ? { ...(Date.parse(t.completedAt) <= Date.parse(e.completedAt) ? t : e) }
      : { ...t }
    : e
      ? { ...e }
      : null;
}
function E(t, e) {
  return {
    id: t.id,
    iconId: t.iconId,
    ...(t.chat ? { chat: { ...t.chat } } : {}),
    firstOpenedAt: y(t.firstOpenedAt, e.firstOpenedAt),
    lastOpenedAt: l(t.lastOpenedAt, e.lastOpenedAt),
    dismissedAt: l(t.dismissedAt, e.dismissedAt),
    completion: k(t.completion, e.completion),
  };
}
function S(t, e) {
  return t.status === "hidden" && e.status !== "hidden"
    ? { ...t }
    : e.status === "hidden" && t.status !== "hidden"
      ? { ...e }
      : { ...(Date.parse(t.changedAt) >= Date.parse(e.changedAt) ? t : e) };
}
function h(t) {
  return JSON.stringify(
    t.sections.map(({ id: e, items: n }) => ({
      id: e,
      items: n.map(({ id: i, iconId: s, chat: r }) => ({
        id: i,
        iconId: s,
        chat: r,
      })),
    })),
  );
}
function N(t, e) {
  const n = t.personalizedAt ? Date.parse(t.personalizedAt) : 0,
    i = e.personalizedAt ? Date.parse(e.personalizedAt) : 0,
    s = n > i || (n === i && h(t) >= h(e)),
    r = s ? t : e,
    p = s ? e : t,
    u = new Map(p.sections.flatMap((a) => a.items.map((d) => [d.id, d]))),
    f = r.sections.map((a) => ({
      id: a.id,
      items: a.items.map((d) => {
        const b = u.get(d.id);
        return b ? E(d, b) : { ...d };
      }),
    })),
    o =
      Date.parse(t.enrollment.enrolledAt) <= Date.parse(e.enrollment.enrolledAt)
        ? t.enrollment
        : e.enrollment;
  return {
    schemaVersion: A.ONBOARDING_CHECKLIST_SCHEMA_VERSION,
    catalogVersion: c.ONBOARDING_CHECKLIST_CATALOG.version,
    enrollment: { ...o },
    updatedAt: l(t.updatedAt, e.updatedAt) ?? t.updatedAt,
    ...(r.personalizedAt ? { personalizedAt: r.personalizedAt } : {}),
    visibility: S(t.visibility, e.visibility),
    sections: f,
  };
}
function R(t, e) {
  const n = t.sections.every((i) =>
    i.items.every((s) =>
      c.getChecklistItemDefinition(s)?.kind === "informational"
        ? !0
        : !!(s.completion || s.dismissedAt),
    ),
  );
  return { eligible: !0, visible: !n, finished: n, record: t };
}
exports.applyChecklistMutation = v;
exports.createOnboardingChecklistRecord = _;
exports.getChecklistReadModel = R;
exports.isChecklistPastFirstMonth = C;
exports.mergeOnboardingChecklistRecords = N;
