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
      (t._sentryDebugIds[e] = "99fea71b-1e76-4715-9a40-b28335a2610f"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-99fea71b-1e76-4715-9a40-b28335a2610f"));
  })();
} catch {}
const Jn = require("valibot"),
  d = require("./ids-B2sWlG17.js");
function qn(t) {
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
const r = qn(Jn);
function G(t, e, n) {
  const i = t.views.map((o) => (o.id === e ? n(o) : o));
  return i.every((o, a) => o === t.views[a]) ? t : { ...t, views: i };
}
function Ht(t, e) {
  const n = t.views.filter(e);
  if (n.length === t.views.length) return t;
  if (n.length === 0) return;
  const i = n.some((o) => o.id === t.selectedViewId)
    ? t.selectedViewId
    : n[0].id;
  return { ...t, views: n, selectedViewId: i };
}
function q(t, e) {
  if (d.isTab(t) && t.root.kind === "chat")
    return e === t.root.column ? t : { ...t, root: { ...t.root, column: e } };
  throw new Error("A proven entry without a root column cannot take one.");
}
function $e(t, e) {
  if (!("chatSidebar" in t) || !t.chatSidebar)
    throw new Error(
      "A proven entry without a chat sidebar cannot take a sidebar column.",
    );
  return e
    ? e === t.chatSidebar.column
      ? t
      : { ...t, chatSidebar: { ...t.chatSidebar, column: e } }
    : { ...t, chatSidebar: void 0 };
}
function me(t, e) {
  const n = d.chatColumn(t, "root");
  if (n)
    return q(
      t,
      G(n, n.selectedViewId, (i) => ({ ...i, layout: e })),
    );
  if ("layout" in t) return e === t.layout ? t : { ...t, layout: e };
  throw new Error("A proven entry has no root layout.");
}
function Kn(t, e) {
  return { ...t, track: e };
}
function h(t, e, n) {
  return { ...t, windows: t.windows.map((i) => (i.id === e ? n : i)) };
}
function Le(t, e) {
  return { ...t, windows: t.windows.filter((n) => n.id !== e) };
}
function K(t, e, n = "ready") {
  let i;
  for (const o of e)
    t.chats[o] ||
      i?.[o] ||
      ((i ??= { ...t.chats }), (i[o] = { track: [], state: n }));
  return i ? { ...t, chats: i } : t;
}
function ct(t, e) {
  return K(
    t,
    d.chatViews(e).map(({ view: n }) => n.chatId),
  );
}
function bt(t, e, n) {
  if (e.kind === "chat") {
    const a = d.workingSet(t, e.chatId);
    return { ...t, chats: { ...t.chats, [e.chatId]: { ...a, track: n } } };
  }
  const i = d.entry$1(t, e.entryId);
  if (!i || !d.ownsTrack(i.node))
    throw new Error("A track owner names an entry that holds a track.");
  const o = Kn(i.node, n);
  return h(t, i.window.id, d.withEntry(i.window, e.entryId, o));
}
function j(t, e, n) {
  let i;
  if (e.ref.kind === "sidebar") i = $e(e.node, n);
  else {
    if (!n) throw new Error("A root column is replaced, never removed.");
    i = q(e.node, n);
  }
  return h(t, e.window.id, d.withEntry(e.window, e.node.id, i));
}
function We(t, e, n) {
  return t.map((i) => (i.id === e ? n : i));
}
const Xn = new Set([
  "active-entry-missing",
  "chat-working-set-missing",
  "duplicate-chat-entry",
  "duplicate-chat-in-column",
  "duplicate-chat-view-id",
  "duplicate-id",
  "duplicate-rail-destination",
  "focused-pane-missing",
  "page-placed-twice",
  "page-record-missing",
  "presented-slot-missing",
  "root-destination-with-sidebar",
  "selected-chat-view-missing",
  "strip-categories-out-of-order",
]);
function Qn(t) {
  return t.replace(/(^|\.)chats\.[^.]+(?=\.|$)/g, "$1chats.<chat>");
}
function Zn(t) {
  return {
    code: Xn.has(t.message) ? t.message : "invalid-shape",
    path: Qn(t.path),
  };
}
class ti extends Error {
  paths;
  diagnostics;
  constructor(e) {
    const n = e.map(Zn),
      i = n.map((a) => a.path),
      o = n.map((a) => `${a.code} at ${a.path || "<root>"}`).join(", ");
    (super(`layout transaction produced an invalid state: ${o}`),
      (this.name = "LayoutInternalDefectError"),
      (this.paths = i),
      (this.diagnostics = n));
  }
}
function yt(t) {
  return t.map((e) => ({
    message: e.message,
    path: (e.path ?? [])
      .map((n, i, o) =>
        n.key === void 0
          ? ""
          : i > 0 && o[i - 1]?.key === "chats"
            ? "<chat>"
            : String(n.key),
      )
      .join("."),
  }));
}
const Bt = 50,
  M = r.object({ url: r.string(), title: r.string() }),
  _e = r.object({
    url: r.string(),
    title: r.string(),
    faviconUrl: r.optional(r.string()),
    openedAt: r.number(),
    lastShownAt: r.number(),
    lastActivityAt: r.number(),
    origin: r.optional(d.ChatId),
  }),
  ht = r.object({ id: d.PageId, ..._e.entries }),
  ei = r.object({
    ...ht.entries,
    navigationHistory: r.pipe(r.array(M), r.maxLength(Bt)),
  });
function ni(t) {
  return Object.freeze({ ...t });
}
function ii(t) {
  return {
    id: t.id,
    url: t.url,
    title: t.title,
    faviconUrl: t.faviconUrl,
    openedAt: t.openedAt,
    lastShownAt: t.lastShownAt,
    lastActivityAt: t.lastActivityAt,
    origin: t.origin,
  };
}
function ri(t) {
  return new Map(t.map((e) => [e.id, ii(e)]));
}
function vt(t) {
  return new Set(t).size === t.length;
}
function oi(t) {
  return vt(d.placedPageIds(t));
}
function Ne(t, e) {
  return e.kind === "root-full" ? !0 : d.slot(t, e.presentedSlotId) !== void 0;
}
function pe(t, e) {
  return e.views.every((n) => {
    const i = t.chats[n.chatId];
    return i !== void 0 && Ne(i.track, n.layout);
  });
}
function di(t) {
  return t.windows.every((e) =>
    d.entries(e).every((n) => {
      const i = d.chatColumn(n, "root");
      if (!(i ? pe(t, i) : Ne(d.track$1(t, n), d.rootLayout(n)))) return !1;
      const a = d.chatColumn(n, "sidebar");
      return a ? pe(t, a) : !0;
    }),
  );
}
function ai(t) {
  return t.windows.every((e) => d.activeEntry$1(e) !== void 0);
}
function ci(t) {
  return t.windows.every((e) => {
    const n = d.rail(e).map((i) => i.destination);
    return vt(n);
  });
}
function si(t) {
  return t.windows.every(
    (e) =>
      e.tabLayout !== "modern" ||
      vt(d.openChats(e).map(({ view: n }) => n.chatId)),
  );
}
function ui(t) {
  return t.windows.every((e) =>
    d
      .entries(e)
      .every(
        (n) =>
          !d.isTab(n) || n.root.kind === "page" || n.chatSidebar === void 0,
      ),
  );
}
function li(t) {
  return vt(d.ids(t));
}
function fi(t) {
  return t.windows.every((e) => {
    let n = 0;
    for (const i of d.strip(e)) {
      const o = d.stripRank(i);
      if (o < n) return !1;
      n = o;
    }
    return !0;
  });
}
const Rt = {
    pageIdsPlacedAtMostOnce: { code: "page-placed-twice", holds: oi },
    presentedSlotsReachable: { code: "presented-slot-missing", holds: di },
    activeEntriesExist: { code: "active-entry-missing", holds: ai },
    railDestinationsUnique: { code: "duplicate-rail-destination", holds: ci },
    modernChatsOpenOnce: { code: "chat-open-twice", holds: si },
    rootDestinationsHaveNoSidebar: {
      code: "root-destination-with-sidebar",
      holds: ui,
    },
    stripCategoriesOrdered: {
      code: "strip-categories-out-of-order",
      holds: fi,
    },
    idsUnique: { code: "duplicate-id", holds: li },
  },
  Ii = {
    [Rt.rootDestinationsHaveNoSidebar.code]: ki,
    [Rt.activeEntriesExist.code]: wi,
  };
function wi(t) {
  return {
    ...t,
    windows: t.windows.map((e) => {
      if (d.activeEntry$1(e)) return e;
      const n = d.firstTab(e) ?? d.entries(e)[0];
      return n ? { ...e, activeEntryId: n.id } : e;
    }),
  };
}
function pi(t, e) {
  const n = e.flatMap((i) => Ii[i] ?? []);
  if (n.length !== 0) return n.reduce((i, o) => o(i), t);
}
function ke(t) {
  if (t.root.kind === "page" || t.chatSidebar === void 0) return t;
  const { chatSidebar: e, ...n } = t;
  return n;
}
function Me(t) {
  return t.kind === "group"
    ? { ...t, tabs: t.tabs.map(ke) }
    : { ...t, tab: ke(t.tab) };
}
function De(t) {
  return {
    ...t,
    entries: t.entries.map((e) =>
      e.kind === "tab" || e.kind === "group" ? Me(e) : e,
    ),
  };
}
function ki(t) {
  return { ...t, windows: t.windows.map(De) };
}
const xt = r.object({
    kind: r.literal("page"),
    id: d.PaneId,
    pageId: d.PageId,
  }),
  bi = r.object({ kind: r.literal("chooser"), id: d.PaneId }),
  be = r.variant("kind", [xt, bi]),
  Ge = r.picklist(["horizontal", "vertical"]),
  yi = r.union([r.tuple([xt, be]), r.tuple([be, xt])]),
  hi = r.object({ kind: r.literal("page"), id: d.SlotId, pageId: d.PageId }),
  vi = r.object({
    kind: r.literal("split"),
    id: d.SlotId,
    axis: Ge,
    panes: yi,
    ratio: d.Ratio,
    focusedPaneId: d.PaneId,
  }),
  gi = r.variant("kind", [hi, vi]);
function Ei(t) {
  if (t.kind !== "split") return !0;
  const [e, n] = t.panes;
  return t.focusedPaneId === e.id || t.focusedPaneId === n.id;
}
const gt = r.pipe(gi, r.check(Ei, "focused-pane-missing")),
  X = r.variant("kind", [
    r.object({ kind: r.literal("root-full") }),
    r.object({
      kind: r.literal("beside"),
      leading: r.picklist(["root", "track"]),
      ratio: d.Ratio,
      presentedSlotId: d.SlotId,
      focused: r.optional(r.literal("root")),
    }),
    r.object({ kind: r.literal("slot-full"), presentedSlotId: d.SlotId }),
  ]),
  Fe = r.object({
    kind: r.literal("newTab"),
    hasDraft: r.optional(r.boolean()),
  }),
  Si = r.strictObject({ id: d.ChatViewId, chatId: d.ChatId, layout: X }),
  Oi = r.strictObject({
    views: r.pipe(r.array(Si), r.minLength(1)),
    selectedViewId: d.ChatViewId,
  });
function Ti(t) {
  return t.views.some((e) => e.id === t.selectedViewId);
}
function Ci(t) {
  return new Set(t.views.map((e) => e.chatId)).size === t.views.length;
}
function ji(t) {
  return new Set(t.views.map((e) => e.id)).size === t.views.length;
}
const Q = r.pipe(
    Oi,
    r.check(Ti, "selected-chat-view-missing"),
    r.check(ji, "duplicate-chat-view-id"),
    r.check(Ci, "duplicate-chat-in-column"),
  ),
  E = r.variant("kind", [
    r.strictObject({ kind: r.literal("root"), entryId: d.EntryId }),
    r.strictObject({ kind: r.literal("sidebar"), entryId: d.EntryId }),
  ]),
  Ue = r.object({ kind: r.literal("chat"), column: Q }),
  He = r.object({ kind: r.literal("page"), pageId: d.PageId }),
  Ai = r.variant("kind", [Fe, Ue, He]),
  st = r.picklist(["leading", "trailing"]),
  Pi = r.picklist(["closed", "side-by-side"]),
  Z = r.strictObject({ column: Q, side: st, ratio: d.Ratio, mode: Pi }),
  Ri = r.variant("kind", [
    r.strictObject({ kind: r.literal("ordinary") }),
    r.strictObject({ kind: r.literal("group"), groupId: d.GroupId }),
  ]),
  Be = r.strictObject({
    scope: Ri,
    sortAt: r.number(),
    sourceActivityAt: r.number(),
  }),
  Yt = r.strictObject({
    id: d.EntryId,
    pinnedId: r.optional(r.string()),
    lastActivityAt: r.optional(r.number()),
    activitySidebarSortOverride: r.optional(Be),
    root: Ue,
    chatSidebar: r.optional(Z),
  }),
  Ye = r.strictObject({
    id: d.EntryId,
    openedAt: r.optional(r.number()),
    lastActivityAt: r.optional(r.number()),
    pinnedId: r.optional(r.string()),
    activitySidebarSortOverride: r.optional(Be),
    root: r.variant("kind", [Fe, He]),
    layout: X,
    track: r.array(gt),
    chatSidebar: r.optional(Z),
  }),
  ze = r.variant("root", [Yt, Ye]),
  _ = r.pipe(
    r.picklist(["ordinary", "pinned", "favorite"]),
    r.transform((t) => (t === "favorite" ? "pinned" : t)),
  ),
  Et = r.picklist(d.RAIL_DESTINATIONS),
  xi = r.object({
    id: d.EntryId,
    destination: Et,
    layout: X,
    track: r.array(gt),
    chatSidebar: r.optional(Z),
  }),
  F = r.pipe(r.string(), r.minLength(1)),
  Je = r.strictObject({ kind: r.literal("tab"), tab: ze, category: _ }),
  zt = r.strictObject({
    kind: r.literal("group"),
    id: d.GroupId,
    label: r.string(),
    color: F,
    collapsed: r.optional(r.boolean(), !1),
    tabs: r.array(ze),
  }),
  qe = r.strictObject({ kind: r.literal("rail"), entry: xi }),
  Ke = r.variant("kind", [Je, zt, qe]),
  N = r.pipe(
    r.object({
      x: r.number(),
      y: r.number(),
      width: r.pipe(r.number(), r.minValue(0)),
      height: r.pipe(r.number(), r.minValue(0)),
    }),
    r.brand("WindowBounds"),
  ),
  Vi = r.object({
    kind: r.literal("rail"),
    entry: r.object({
      destination: r.pipe(
        r.string(),
        r.check((t) => !r.is(Et, t)),
      ),
    }),
  });
function Xe(t) {
  return r.is(Vi, t);
}
function $i(t) {
  return t.filter((e) => !Xe(e));
}
const mi = r.picklist(["classic", "modern"]),
  Jt = r.object({
    id: d.WindowId,
    bounds: N,
    tabLayout: r.optional(mi),
    entries: r.pipe(r.array(r.unknown()), r.transform($i), r.array(Ke)),
    activeEntryId: d.EntryId,
  }),
  Vt = r.picklist(["ready", "awaiting-server-init-ack"]),
  Li = r.object({ track: r.array(gt), state: r.fallback(Vt, "ready") }),
  Qe = 3,
  Ze = r.object({
    schemaVersion: r.literal(Qe),
    windows: r.array(Jt),
    chats: r.record(d.ChatId, Li),
  }),
  Wi = r.strictObject({
    ...Yt.entries,
    activitySidebarSection: r.optional(r.literal("tabs")),
  }),
  qt = r.variant("root", [Wi, Ye]),
  tn = r.strictObject({ ...Je.entries, tab: qt }),
  en = r.strictObject({ ...zt.entries, tabs: r.array(qt) }),
  _i = r.strictObject({
    kind: r.literal("chat"),
    entry: r.strictObject({ id: d.EntryId, column: Q }),
  });
function Ni(t, e) {
  const n = new Map(
      d.openChats(t).map(({ tab: c, view: s }) => [s.chatId, c.id]),
    ),
    i = n.get(d.selectedView(e.column).chatId);
  if (i) return { ...t, activeEntryId: i };
  const o = e.column.views.filter((c) => !n.has(c.chatId)),
    a = { id: e.id, root: { kind: "chat", column: { ...e.column, views: o } } };
  return {
    ...t,
    entries: [...t.entries, { kind: "tab", category: "ordinary", tab: a }],
    activeEntryId: e.id,
  };
}
const ye = r.strictObject({
  kind: r.literal("rail"),
  entry: r.object({
    id: d.EntryId,
    destination: r.literal("newTab"),
    layout: X,
    track: r.array(gt),
    chatSidebar: r.optional(Z),
    hasDraft: r.optional(r.boolean()),
  }),
});
function Mi(t, e) {
  if (!e.hasDraft && t.activeEntryId !== e.id) return t;
  const n = {
      id: e.id,
      root: e.hasDraft ? { kind: "newTab", hasDraft: !0 } : { kind: "newTab" },
      layout: e.layout,
      track: e.track,
      ...(e.chatSidebar ? { chatSidebar: e.chatSidebar } : {}),
    },
    i = t.entries.findIndex((c) => c.kind !== "tab" || c.category !== "pinned"),
    o = i === -1 ? t.entries.length : i,
    a = { kind: "tab", category: "ordinary", tab: n };
  return {
    ...t,
    entries: [...t.entries.slice(0, o), a, ...t.entries.slice(o)],
  };
}
function $t(t) {
  if (!("activitySidebarSection" in t)) return t;
  const { activitySidebarSection: e, ...n } = t;
  return n;
}
const Di = r.pipe(qt, r.transform($t));
function nn(t) {
  return t.kind === "tab"
    ? { ...t, tab: $t(t.tab) }
    : { ...t, tabs: t.tabs.map($t) };
}
const rn = r.pipe(r.variant("kind", [tn, en]), r.transform(nn)),
  Kt = r.pipe(
    r.object({
      ...Jt.entries,
      entries: r.pipe(
        r.array(r.unknown()),
        r.transform((t) => t.filter((e) => r.is(ye, e) || !Xe(e))),
        r.array(r.variant("kind", [tn, en, ye, qe, _i])),
      ),
    }),
    r.transform((t) => {
      const e = [];
      let n;
      for (const c of t.entries)
        c.kind !== "chat" &&
          (c.kind !== "rail"
            ? e.push(nn(c))
            : c.entry.destination === "newTab"
              ? (n = c.entry)
              : e.push({ kind: "rail", entry: c.entry }));
      const i = n ? Mi({ ...t, entries: e }, n) : { ...t, entries: e },
        o = t.entries.find(
          (c) => c.kind === "chat" && c.entry.id === t.activeEntryId,
        );
      if (o?.kind === "chat") return Ni(i, o.entry);
      if (d.entry$2(i, i.activeEntryId)) return i;
      const a = d.firstTab(i) ?? d.entries(i)[0];
      return a ? { ...i, activeEntryId: a.id } : i;
    }),
  ),
  Gi = r.object({ ...Ze.entries, windows: r.array(Kt) });
function he(t) {
  if (!d.ownsTrack(t)) return;
  const { chatSidebar: e, ...n } = t;
  return n;
}
function mt(t) {
  switch (t.kind) {
    case "tab": {
      const e = he(t.tab);
      return e ? [{ ...t, tab: e }] : [];
    }
    case "group": {
      const e = t.tabs.flatMap((n) => he(n) ?? []);
      return e.length ? [{ ...t, tabs: e }] : [];
    }
    case "rail": {
      const { chatSidebar: e, ...n } = t.entry;
      return [{ ...t, entry: n }];
    }
  }
}
function Fi(t) {
  if (t.kind === "entries") {
    const n = t.entries.flatMap((i) =>
      mt(i).flatMap((o) => (o.kind === "tab" || o.kind === "group" ? [o] : [])),
    );
    return n.length === 0 ? void 0 : { ...t, entries: n };
  }
  const e = d.withEntries(t.window, t.window.entries.flatMap(mt));
  return e ? { kind: "window", window: e } : void 0;
}
function Ui(t) {
  const e = t.windows.map((n) => {
    const i = n.entries.flatMap(mt),
      o = d.entries({ ...n, entries: i }),
      a =
        o.length > 0
          ? i
          : [
              ...i,
              {
                kind: "tab",
                category: "ordinary",
                tab: {
                  id: n.activeEntryId,
                  root: { kind: "newTab" },
                  layout: { kind: "root-full" },
                  track: [],
                },
              },
            ],
      c = o.some((s) => s.id === n.activeEntryId)
        ? n.activeEntryId
        : (o[0]?.id ?? n.activeEntryId);
    return { ...n, entries: a, activeEntryId: c };
  });
  return { ok: !0, data: { ...t, windows: e, chats: {} } };
}
const Hi = 50,
  D = { kind: "none" };
function f(t) {
  return { ok: !1, rejection: t };
}
function Bi(t, e, n) {
  return t.kind === "root-full" || t.presentedSlotId !== e || n?.id === e
    ? t
    : n
      ? t.kind === "beside"
        ? { ...t, presentedSlotId: n.id }
        : { kind: "slot-full", presentedSlotId: n.id }
      : { kind: "root-full" };
}
function ve(t, e) {
  const n = t.views.map((i) =>
    i.layout.kind === "root-full" || i.layout.presentedSlotId !== e
      ? i
      : { ...i, layout: { kind: "root-full" } },
  );
  return n.every((i, o) => i === t.views[o]) ? t : { ...t, views: n };
}
function Yi(t, e, n) {
  const i = d.chatColumn(t, "root");
  let o;
  if (i) o = q(t, ve(i, e));
  else if ("layout" in t) o = me(t, Bi(t.layout, e, n));
  else throw new Error("A proven entry has no root presentation owner.");
  const a = d.chatColumn(o, "sidebar");
  return a ? $e(o, ve(a, e)) : o;
}
function on(t, e, n) {
  const i = t.windows.map((o) => d.mapEntries(o, (a) => Yi(a, e, n)));
  return i.every((o, a) => o === t.windows[a]) ? t : { ...t, windows: i };
}
function zi(t, e) {
  return on(t, e.id, e);
}
function Xt(t, e) {
  const n = d.slot$1(t, e);
  if (!n) return f({ kind: "slot-not-found", slotId: e });
  const i = n.track.filter((c) => c.id !== e),
    o = i.at(n.index) ?? i.at(-1),
    a = bt(t, n.owner, i);
  return { ok: !0, data: on(a, e, o) };
}
function A(t, e, n) {
  return n === void 0 || n < 0 || n > t.length
    ? [...t, e]
    : [...t.slice(0, n), e, ...t.slice(n)];
}
function L(t, e) {
  return {
    summary: { id: t, ...e.detail },
    navigationHistory: e.initialEntry ? [e.initialEntry] : [],
  };
}
function x(...t) {
  return { kind: "created", pages: t };
}
function Ji(t, e, n, i) {
  return e.has(n)
    ? f({ kind: "duplicate-id", id: n })
    : { ok: !0, data: t, pageChanges: x(L(n, i)) };
}
function qi(t, e, n) {
  return e.has(n)
    ? d.isPagePlaced(t, n)
      ? f({ kind: "page-still-referenced", pageId: n })
      : { ok: !0, data: t, pageChanges: { kind: "deleted", pageIds: [n] } }
    : f({ kind: "page-record-missing", pageId: n });
}
function Ki(t) {
  return {
    order: t.tabSidebarOrder,
    chats: t.chatSidebarView === "tabs-and-chats" ? "shown" : "hidden",
  };
}
function Xi(t) {
  return (e) => {
    if (d.isChatTab(e))
      return e.lastActivityAt !== void 0
        ? e.lastActivityAt
        : (t.chatCreatedAt(d.selectedView(e.root.column).chatId) ?? 0);
    const n = e.root.kind === "page" ? t.page(e.root.pageId) : void 0;
    return (
      n?.lastActivityAt ??
      e.lastActivityAt ??
      e.openedAt ??
      n?.openedAt ??
      n?.lastShownAt ??
      0
    );
  };
}
function Qi(t, e) {
  return t.kind === "ordinary"
    ? e.kind === "ordinary"
    : e.kind === "group" && t.groupId === e.groupId;
}
function Zi(t, e, n) {
  return n && Qi(n.scope, t) && n.sourceActivityAt === e ? n.sortAt : e;
}
function dn(t, e, n, i = {}) {
  const o = e.chats === "shown",
    a = (p) => (o && d.isChatTab(p) ? tr : er),
    c = (p, v, g, T) => ({
      kind: "tab",
      tab: p,
      section: v,
      ...(T ? { groupId: T.id } : {}),
      globalOffset: g,
      activityAt: n(p),
      drawn: !T?.collapsed,
      dropTargets: a(p),
    }),
    s = (p, v) =>
      Zi(
        v,
        p.activityAt,
        i.overrides
          ? i.overrides.get(p.tab.id)
          : p.tab.activitySidebarSortOverride,
      ),
    u = (p, v) =>
      p
        .map((g) => ({ tab: g, score: s(g, v) }))
        .sort((g, T) => T.score - g.score)
        .map(({ tab: g }) => g),
    l = [],
    I = [],
    w = [];
  for (const [p, v] of d.strip(t).entries())
    if (v.kind === "group") {
      const g = v.tabs.map((T) => c(T, "tabs", p, v));
      w.push({
        kind: "group",
        group: v,
        globalOffset: p,
        tabs: e.order === "manual" ? g : u(g, { kind: "group", groupId: v.id }),
      });
    } else
      v.category === "pinned"
        ? l.push(c(v.tab, "pinned", p))
        : o && d.isChatTab(v.tab)
          ? I.push(c(v.tab, "chats", p))
          : w.push(c(v.tab, "tabs", p));
  I.sort(
    (p, v) => (i.rankChats?.(p.tab, v.tab) ?? 0) || v.activityAt - p.activityAt,
  );
  const k =
      e.order === "manual"
        ? { kind: "manual", items: w }
        : {
            kind: "recent-activity",
            groups: w.filter((p) => p.kind === "group"),
            recents: u(
              w.filter((p) => p.kind === "tab"),
              { kind: "ordinary" },
            ),
          },
    y = k.kind === "manual" ? w : [...k.groups, ...k.recents],
    b = [...l, ...I, ...y.flatMap((p) => (p.kind === "group" ? p.tabs : [p]))];
  return {
    pinned: l,
    chats: o ? { kind: "shown", tabs: I } : { kind: "hidden" },
    tabs: k,
    rows: b,
  };
}
const tr = ["pinned", "group", "chats"],
  er = ["pinned", "group", "tabs"],
  Qt = { kind: "classic" };
function Zt(t, e) {
  return e.kind === "modern"
    ? dn(t, e.sidebar, e.clock, e.options).rows
    : nr(d.strip(t));
}
function nr(t) {
  return t.flatMap((e) =>
    e.kind === "group"
      ? e.tabs.map((n) => ({
          tab: n,
          section: "tabs",
          groupId: e.id,
          drawn: !e.collapsed,
        }))
      : [
          {
            tab: e.tab,
            section: e.category === "pinned" ? "pinned" : "tabs",
            drawn: !0,
          },
        ],
  );
}
function an(t) {
  return t.flatMap((e) =>
    e.drawn && e.section !== "pinned" ? [e.tab.id] : [],
  );
}
const ir = new Set();
function rr(t, e, n = ir) {
  return t.filter((i) => i.drawn && (i.tab.id === e || !n.has(i.tab.id)));
}
function or(t, e, n, i) {
  const o = rr(t, e, i).map((s) => s.tab.id);
  if (o.length === 0) return;
  const a = o.findIndex((s) => s === e);
  if (a === -1) return n.direction === "next" ? o[0] : o.at(-1);
  const c = n.direction === "next" ? 1 : -1;
  return o[(a + c + o.length) % o.length];
}
function dr(t) {
  return t.selection
    ? { kind: "history", selection: t.selection }
    : { kind: "recorded", recentEntryIds: t.recentEntryIds ?? [] };
}
const ut = (t) => ({ recentEntryIds: [t], returnToRecent: !1 });
function ar(t, e) {
  return new Map(
    t.windows.map((n) => [
      n.id,
      { ...ut(n.activeEntryId), entryLastShownAt: { [n.activeEntryId]: e } },
    ]),
  );
}
function Tt(t, e, n) {
  const i = e.get(t.id) ?? ut(t.activeEntryId),
    o = n?.(t);
  return {
    recentEntryIds: [...i.recentEntryIds],
    returnToRecent: i.returnToRecent,
    ...(o ? { tabOrder: [...o] } : {}),
  };
}
function cr(t, e, n, i) {
  switch (t.kind) {
    case "reconcileActivityPresentations":
      return {
        ...t,
        args: t.args.map((o) => {
          const a = d.window$1(e, o.windowId),
            s = (a ? n.get(a.id) : void 0)?.recentEntryIds.find(
              (I) => I !== a?.activeEntryId,
            ),
            { returnEntryId: u, ...l } = o;
          return { ...l, ...(s ? { returnEntryId: s } : {}) };
        }),
      };
    case "closeActiveTab": {
      const o = d.window$1(e, t.args.windowId);
      if (!o) return t;
      const { recentEntryIds: a, ...c } = t.args;
      return { ...t, args: { ...c, selection: Tt(o, n, i) } };
    }
    case "closeEntries": {
      const o = t.entryIds[0],
        a = o ? d.entry$1(e, o)?.window : void 0;
      return a ? { ...t, selection: Tt(a, n, i) } : t;
    }
    case "closeEntry": {
      const o = d.entry$1(e, t.entryId)?.window;
      if (!o) return t;
      const a = Tt(o, n, i),
        c = { kind: "history", selection: a };
      return { ...t, selection: a, recentEntryIds: [...te(o, t.entryId, c)] };
    }
    default:
      return t;
  }
}
function sr(t, e) {
  let n;
  const i = () =>
      (n ??= Object.fromEntries(
        [...t.values()].flatMap((a) => Object.entries(a.entryLastShownAt)),
      )),
    o = new Map();
  for (const a of e.after.windows) {
    const c = d.window$1(e.before, a.id),
      s = t.get(a.id),
      u = ur(s, c, a, e),
      l = lr(s, c, a, e, i);
    s &&
    u.recentEntryIds === s.recentEntryIds &&
    u.returnToRecent === s.returnToRecent &&
    l === s.entryLastShownAt
      ? o.set(a.id, s)
      : o.set(a.id, { ...u, entryLastShownAt: l });
  }
  return o;
}
function ur(t, e, n, i) {
  const { command: o } = i;
  if (!o) return ut(n.activeEntryId);
  const a = i.selectedIn === n.id,
    c =
      e !== void 0 &&
      (e.entries === n.entries ||
        i.changes.get(n.id)?.kind === "window-content");
  if (t && e && e.activeEntryId === n.activeEntryId && c)
    return a ? { ...t, returnToRecent: !1 } : t;
  const s = t ?? ut((e ?? n).activeEntryId),
    u = c ? void 0 : new Set(d.entries(n).map((y) => y.id)),
    l = e && e.activeEntryId !== n.activeEntryId ? e.activeEntryId : void 0,
    I = l !== void 0 && !c && !d.entry$1(i.before, n.activeEntryId),
    w = l !== void 0 && u !== void 0 && !u.has(l),
    k =
      o.kind === "closeActiveTab" &&
      o.args.windowId === n.id &&
      e !== void 0 &&
      u !== void 0 &&
      d.entries(e).some((y) => !u.has(y.id));
  return {
    recentEntryIds: [
      n.activeEntryId,
      ...s.recentEntryIds.filter(
        (y) => y !== n.activeEntryId && (!u || u.has(y)),
      ),
    ],
    returnToRecent: !w && !k && (I || (s.returnToRecent && !a)),
  };
}
function lr(t, e, n, i, o) {
  const a = i.changes.get(n.id);
  if (t && !a) return t.entryLastShownAt;
  const c = e?.activeEntryId !== n.activeEntryId;
  if (t && a?.kind === "window-content")
    return c
      ? { ...t.entryLastShownAt, [n.activeEntryId]: i.now }
      : t.entryLastShownAt;
  const s = o(),
    u = {};
  for (const l of d.entries(n)) {
    const I = s[l.id];
    I !== void 0 && (u[l.id] = I);
  }
  return (c && (u[n.activeEntryId] = i.now), u);
}
const fr = (t) => t.visible,
  cn = (t) => t.visible && !t.pinned;
function sn(t, e, n, i) {
  for (const o of n) {
    if (o === e) continue;
    const a = t.find((c) => i(c) && c.tab.id === o);
    if (a) return a.tab;
  }
}
function tt(t, e, n, i) {
  const o = d.stripTabs(t),
    a = i === "closable" ? cn : fr,
    c = sn(o, e, n, a);
  if (c) return c;
  const s = o.findIndex(({ tab: l }) => l.id === e);
  if (s === -1) return;
  const u = o.slice(s + 1).find(a);
  return u ? u.tab : o.slice(0, s).toReversed().find(a)?.tab;
}
function te(t, e, n) {
  if (n.kind === "recorded") return n.recentEntryIds;
  const { selection: i } = n,
    o = i.returnToRecent ? i.recentEntryIds : [],
    a = i.tabOrder ?? an(Zt(t, Qt)),
    c = a.indexOf(e);
  return [
    ...o.filter((s) => s !== e),
    ...(c < 0 ? [] : [...a.slice(c + 1), ...a.slice(0, c).toReversed()]),
  ];
}
function un(t, e, n) {
  return n.kind === "recorded"
    ? tt(t, e, n.recentEntryIds, "closable")
    : sn(d.stripTabs(t), e, n.selection.recentEntryIds, cn);
}
function ln(t, e, n) {
  const { landedOn: i, closedActive: o } = e;
  if (t.kind === "recorded") {
    const s = t.recentEntryIds,
      u = i === void 0 ? -1 : s.indexOf(i);
    return { kind: "recorded", recentEntryIds: u === -1 ? [] : s.slice(u + 1) };
  }
  const { selection: a } = t,
    c = new Set(n.windows.flatMap(d.entries).map((s) => s.id));
  return {
    kind: "history",
    selection: {
      ...a,
      returnToRecent: o ? !1 : a.returnToRecent,
      recentEntryIds: i
        ? [i, ...a.recentEntryIds.filter((s) => s !== i && c.has(s))]
        : [],
    },
  };
}
function Ir(t, e, n = []) {
  const i = d.entries(t);
  if (i.every((s) => s.id === e)) return null;
  if (t.activeEntryId !== e) return t;
  const o = tt(t, e, n, "visible");
  if (o) return { ...t, activeEntryId: o.id };
  const a = i.findIndex((s) => s.id === e),
    c = i.at(a + 1) ?? i[a - 1];
  return { ...t, activeEntryId: c.id };
}
function S(t, e) {
  let n = 0;
  for (const [i, o] of t.entries())
    if (o.kind !== "rail") {
      if (o.kind === "group") {
        if (d.categoryRank(e) < d.categoryRank("ordinary")) return i;
        n = i + 1;
        continue;
      }
      if (d.categoryRank(o.category) > d.categoryRank(e)) return i;
      n = i + 1;
    }
  return n;
}
function et(t, e) {
  const n = S(t, "pinned");
  return e === void 0 ? S(t, "ordinary") : Math.max(n, fn(t, e));
}
function wr(t, e) {
  const n = S(t, "pinned");
  return Math.max(0, Math.min(e ?? n, n));
}
function fn(t, e) {
  const n = t.flatMap((i, o) => (d.isStripItem(i) ? [o] : []));
  return n.length === 0
    ? t.length
    : e <= 0
      ? n[0]
      : e >= n.length
        ? n[n.length - 1] + 1
        : n[e];
}
function nt(t, e, n, i = []) {
  const o = Ir(e, n, i);
  return o ? h(t, e.id, d.withoutEntry(o, n)) : Le(t, e.id);
}
function z(t, e, n, i) {
  if (i.groupId === void 0) {
    const o = { kind: "tab", tab: e, category: n },
      a = S(t.entries, n),
      c = n === "ordinary" ? et(t.entries, i.index) : Math.min(i.index ?? a, a);
    return { ...t, entries: A(t.entries, o, c) };
  }
  return d.withGroup(t, i.groupId, (o) => ({
    ...o,
    tabs: A(o.tabs, e, i.index),
  }));
}
function ee(t, e, n) {
  const i = { kind: "root-full" };
  return e.kind === "chat"
    ? { id: t, root: e, ...(n ? { lastActivityAt: n } : {}) }
    : {
        id: t,
        root: e,
        layout: i,
        track: [],
        ...(n === void 0 ? {} : { openedAt: n }),
      };
}
function In(t, e) {
  if (e.root.kind !== "page") return { ok: !0, pageChanges: D };
  const n = e.root.pageId;
  return e.page
    ? t.has(n)
      ? f({ kind: "duplicate-id", id: n })
      : { ok: !0, pageChanges: x(L(n, e.page)) }
    : t.has(n)
      ? { ok: !0, pageChanges: D }
      : f({ kind: "page-record-missing", pageId: n });
}
function m(t, e, n) {
  const { pinnedId: i, ...o } = t,
    a = e === "pinned" ? { ...t, pinnedId: n ?? i ?? t.id } : o;
  return { kind: "tab", category: e, tab: a };
}
function lt(t, e, n) {
  const i = d.entry$1(t, e);
  if (!i) return f({ kind: "entry-not-found", entryId: e });
  const o = i.node;
  if (!d.isTab(o)) return f({ kind: "entry-not-closable", entryId: e });
  const a = d.window$1(t, n.windowId);
  if (!a) return f({ kind: "window-not-found", windowId: n.windowId });
  if (n.groupId !== void 0 && !d.group(a, n.groupId))
    return f({ kind: "group-not-found", groupId: n.groupId });
  if (i.window.id === n.windowId) {
    const I = d.category(i.window, e),
      w = d.withoutEntry(i.window, e);
    if (n.groupId !== void 0 && !d.group(w, n.groupId))
      return { ok: !0, data: t };
    const k = n.groupId ? o : m(o, I).tab,
      y = z(w, k, I, n);
    return { ok: !0, data: h(t, n.windowId, y) };
  }
  const c = nt(t, i.window, e),
    s = n.groupId ? "ordinary" : d.category(i.window, e),
    u = n.groupId ? o : m(o, s).tab,
    l = z(a, u, s, n);
  return { ok: !0, data: h(c, n.windowId, l) };
}
function pr(t, e) {
  const n = d.window$1(t, e.target.windowId);
  if (!n) return f({ kind: "window-not-found", windowId: e.target.windowId });
  if (e.target.kind === "group" && !d.group(n, e.target.groupId))
    return f({ kind: "group-not-found", groupId: e.target.groupId });
  const i = new Set();
  for (const s of e.entryIds) {
    if (i.has(s)) return f({ kind: "duplicate-id", id: s });
    i.add(s);
    const u = d.entry$1(t, s);
    if (!u) return f({ kind: "entry-not-found", entryId: s });
    if (u.window.id !== n.id || !d.isTab(u.node))
      return f({ kind: "entry-not-in-window", entryId: s, windowId: n.id });
    const l = n.entries.find((w) =>
      w.kind === "tab"
        ? w.tab.id === s
        : w.kind === "group" && w.tabs.some((k) => k.id === s),
    );
    if (
      !(e.target.kind === "group"
        ? l?.kind === "group" ||
          (l?.kind === "tab" && l.category === "ordinary")
        : l?.kind === "group")
    )
      return f({ kind: "entry-not-in-window", entryId: s, windowId: n.id });
  }
  if (i.size === 0) return { ok: !0, data: t };
  if (e.target.kind === "strip") {
    const s = n.entries.flatMap((u) => {
      if (u.kind !== "group") return [u];
      const l = u.tabs.filter((w) => !i.has(w.id)),
        I = u.tabs.filter((w) => i.has(w.id)).map((w) => m(w, "ordinary"));
      return [...(l.length > 0 ? [{ ...u, tabs: l }] : []), ...I];
    });
    return { ok: !0, data: h(t, n.id, { ...n, entries: s }) };
  }
  const o = n.entries.flatMap((s) =>
      s.kind === "tab"
        ? i.has(s.tab.id)
          ? [s.tab]
          : []
        : s.kind === "group"
          ? s.tabs.filter((u) => i.has(u.id))
          : [],
    ),
    a = e.target.groupId,
    c = n.entries.flatMap((s) => {
      if (s.kind === "tab") return i.has(s.tab.id) ? [] : [s];
      if (s.kind !== "group") return [s];
      const u = s.tabs.filter((l) => !i.has(l.id));
      return s.id === a
        ? [{ ...s, tabs: [...u, ...o] }]
        : u.length > 0
          ? [{ ...s, tabs: u }]
          : [];
    });
  return { ok: !0, data: h(t, n.id, { ...n, entries: c }) };
}
function U(t, e) {
  const { entryId: n, category: i, index: o, pinnedId: a } = e,
    c = d.entry$1(t, n);
  if (!c) return f({ kind: "entry-not-found", entryId: n });
  const s = c.node;
  if (!d.isTab(s)) return f({ kind: "entry-not-closable", entryId: n });
  const u = d.item(c.window, n)?.item.kind === "tab";
  if (!u && i === "ordinary") return { ok: !0, data: t };
  if (
    u &&
    d.category(c.window, n) === i &&
    o === void 0 &&
    (i !== "pinned" || a === void 0 || s.pinnedId === a)
  )
    return { ok: !0, data: t };
  const l = m(s, i, a),
    I = d.withoutEntry(c.window, n),
    w = i === "ordinary" ? et(I.entries, o) : wr(I.entries, o),
    k = A(I.entries, l, w);
  return { ok: !0, data: h(t, c.window.id, { ...c.window, entries: k }) };
}
function kr(t, e) {
  const n = new Set();
  let i = t;
  for (const { entryId: o, pinnedId: a } of e.entries) {
    if (n.has(o)) return f({ kind: "duplicate-id", id: o });
    n.add(o);
    const c = U(i, {
      entryId: o,
      category: e.category,
      ...(a === void 0 ? {} : { pinnedId: a }),
    });
    if (!c.ok) return c;
    i = c.data;
  }
  return { ok: !0, data: i };
}
function br(t, e, n) {
  const i = U(t, n);
  return i.ok ? St(i.data, e, n.entryId) : i;
}
function it(t, e, n) {
  const i = d.window$1(t, e);
  return i
    ? d.entry$2(i, n) === void 0
      ? f({ kind: "entry-not-in-window", entryId: n, windowId: e })
      : i.activeEntryId === n
        ? { ok: !0, data: t }
        : { ok: !0, data: h(t, e, { ...i, activeEntryId: n }) }
    : f({ kind: "window-not-found", windowId: e });
}
function rt(t, e) {
  return e.ok ? { ...e, selectedIn: t } : e;
}
function wn(t, e, n) {
  return rt(e, it(t, e, n));
}
function St(t, e, n) {
  const i = it(t, e, n);
  return d.window$1(t, e)?.activeEntryId !== n ? rt(e, i) : i;
}
function yr(t, e, n) {
  const i = d.window$1(t, e);
  if (!i) return f({ kind: "window-not-found", windowId: e });
  const o = or(Zt(i, Qt), i.activeEntryId, { direction: n });
  return o ? wn(t, e, o) : rt(e, { ok: !0, data: t });
}
function hr(t, e, n) {
  const i = d.window$1(t, e);
  if (!i) return f({ kind: "window-not-found", windowId: e });
  const o = i.activeEntryId,
    a = i.entries.find(
      (l) => l.kind === "group" && l.tabs.some((I) => I.id === o),
    );
  if (a?.kind === "group") {
    const l = a.tabs.findIndex((w) => w.id === o),
      I = n === "left" ? l - 1 : l + 1;
    return I < 0 || I >= a.tabs.length
      ? { ok: !0, data: t }
      : lt(t, o, { windowId: e, groupId: a.id, index: d.tabIndex(I) });
  }
  const c = d.strip(i),
    s = c.findIndex((l) => l.kind === "tab" && l.tab.id === o);
  if (s === -1) return { ok: !0, data: t };
  const u = n === "left" ? s - 1 : s + 1;
  return u < 0 || u >= c.length
    ? { ok: !0, data: t }
    : lt(t, o, { windowId: e, index: d.tabIndex(u) });
}
function ne(t, e, n, i) {
  return h(t, e.id, d.withEntry(e, n.id, me(n, i)));
}
function ot(t, e) {
  return t.kind === "slot-full"
    ? { kind: "slot-full", presentedSlotId: e }
    : t.kind === "beside"
      ? t.presentedSlotId === e
        ? t
        : {
            kind: "beside",
            leading: t.leading,
            ratio: t.ratio,
            presentedSlotId: e,
          }
      : {
          kind: "beside",
          leading: "root",
          ratio: d.DEFAULT_ROOT_SHARE_WITH_PRESENTED_PAGE,
          presentedSlotId: e,
        };
}
function vr(t) {
  switch (t.kind) {
    case "root-full":
      return t;
    case "beside":
      return { kind: "slot-full", presentedSlotId: t.presentedSlotId };
    case "slot-full":
      return {
        kind: "beside",
        leading: "root",
        ratio: d.DEFAULT_ROOT_SHARE_WITH_PRESENTED_PAGE,
        presentedSlotId: t.presentedSlotId,
      };
  }
}
function pn(t, e, n) {
  if (d.idIsTaken(t, n.slotId))
    return f({ kind: "duplicate-id", id: n.slotId });
  if (d.isPagePlaced(t, n.pageId))
    return f({ kind: "page-already-placed", pageId: n.pageId });
  const i = { kind: "page", id: n.slotId, pageId: n.pageId },
    o = A(d.track$1(t, e.node), i, n.index),
    a = bt(t, d.owner(e.node), o);
  return n.present === !1 ? { ok: !0, data: a } : ie(a, e.node.id, n.slotId);
}
function gr(t, e, n, i) {
  const o = d.entry$1(t, n);
  return o
    ? e.has(i.pageId)
      ? pn(t, o, i)
      : f({ kind: "page-record-missing", pageId: i.pageId })
    : f({ kind: "entry-not-found", entryId: n });
}
function Er(t, e, n, i) {
  const o = d.entry$1(t, n);
  if (!o) return f({ kind: "entry-not-found", entryId: n });
  if (e.has(i.pageId)) return f({ kind: "duplicate-id", id: i.pageId });
  const a = pn(t, o, i);
  return a.ok
    ? {
        ...a,
        pageChanges: x(
          L(i.pageId, { detail: i.detail, initialEntry: i.initialEntry }),
        ),
      }
    : a;
}
function kn(t, e) {
  return Xt(t, e);
}
function ie(t, e, n) {
  const i = d.entry$1(t, e);
  if (!i) return f({ kind: "entry-not-found", entryId: e });
  if (!d.slot(d.track$1(t, i.node), n))
    return f({ kind: "slot-not-reachable", entryId: e, slotId: n });
  const o = ot(d.rootLayout(i.node), n);
  return { ok: !0, data: ne(t, i.window, i.node, o) };
}
function bn(t, e, n, i) {
  const o = St(t, e, n);
  if (!o.ok) return o;
  const a = ie(o.data, n, i);
  return o.selectedIn ? rt(o.selectedIn, a) : a;
}
function J(t, e, n) {
  const i = d.entry$1(t, e);
  if (!i) return f({ kind: "entry-not-found", entryId: e });
  if (n.kind !== "root-full") {
    const o = n.presentedSlotId;
    if (!d.slot(d.track$1(t, i.node), o))
      return f({ kind: "slot-not-reachable", entryId: e, slotId: o });
  }
  return { ok: !0, data: ne(t, i.window, i.node, n) };
}
function Sr(t, e, n) {
  const i = d.entry$1(t, e);
  if (!i) return f({ kind: "entry-not-found", entryId: e });
  const o = d.rootLayout(i.node);
  return o.kind !== "beside"
    ? f({ kind: "layout-not-beside", entryId: e })
    : o.ratio === n
      ? { ok: !0, data: t }
      : { ok: !0, data: ne(t, i.window, i.node, { ...o, ratio: n }) };
}
function Lt(t) {
  return t.kind === "window"
    ? `window:${t.window.id}`
    : `entries:${t.entries
        .flatMap(d.tabs)
        .map((e) => e.id)
        .join(",")}`;
}
function Or(t) {
  return t.kind === "window" ? [...d.strip(t.window)] : [...t.entries];
}
function Tr(t) {
  return (
    t.kind === "window" ? d.entries(t.window) : t.entries.flatMap(d.tabs)
  ).flatMap(d.placedPageIds$1);
}
function yn(t) {
  return (
    d.ownsTrack(t) &&
    t.root.kind === "newTab" &&
    !t.root.hasDraft &&
    t.track.length === 0 &&
    t.chatSidebar === void 0
  );
}
function Cr(t) {
  return Or(t).some((e) => e.kind === "group" || !yn(e.tab));
}
function hn(t, e) {
  return t.entries.flatMap((n) => {
    if (n.kind === "tab") return e.has(n.tab.id) ? [n] : [];
    if (n.kind !== "group") return [];
    const i = n.tabs.filter((o) => e.has(o.id));
    return i.length === 0 ? [] : [{ ...n, tabs: i }];
  });
}
function ft(t, e, n) {
  return d.window$1(t, e.id)
    ? { kind: "entries", windowId: e.id, entries: hn(e, n) }
    : { kind: "window", window: e };
}
function jr(t) {
  return t.flatMap((e) =>
    (e.kind === "window"
      ? [e]
      : e.entries.flatMap((i) =>
          i.kind === "tab"
            ? [{ ...e, entries: [i] }]
            : i.tabs.map((o) => ({ ...e, entries: [{ ...i, tabs: [o] }] })),
        )
    ).filter(Cr),
  );
}
function Ar(t, e, n) {
  if (d.idIsTaken(t, n.windowId))
    return f({ kind: "duplicate-id", id: n.windowId });
  if (d.idIsTaken(t, n.tab.entryId))
    return f({ kind: "duplicate-id", id: n.tab.entryId });
  const i = n.tab.root;
  if (i.kind === "chat") {
    const u = new Set();
    for (const I of i.column.views) {
      if (u.has(I.id) || d.idIsTaken(t, I.id))
        return f({ kind: "duplicate-id", id: I.id });
      u.add(I.id);
    }
    const l = d.unreachableSlot(t, i.column);
    if (l)
      return f({
        kind: "slot-not-reachable",
        entryId: n.tab.entryId,
        slotId: l.slotId,
      });
  }
  if (i.kind === "page" && d.isPagePlaced(t, i.pageId))
    return f({ kind: "page-already-placed", pageId: i.pageId });
  const o = In(e, {
    entryId: n.tab.entryId,
    root: i,
    page: "page" in n.tab ? n.tab.page : void 0,
  });
  if (!o.ok) return o;
  let a;
  i.kind === "page"
    ? "page" in n.tab
      ? (a = n.tab.page?.detail.openedAt)
      : (a = void 0)
    : (a = n.occurredAt);
  const c = ee(n.tab.entryId, i, a),
    s = {
      id: n.windowId,
      bounds: n.bounds,
      entries: [{ kind: "tab", tab: c, category: "ordinary" }],
      activeEntryId: c.id,
    };
  return {
    ok: !0,
    data: ct({ ...t, windows: [...t.windows, s] }, c),
    pageChanges: o.pageChanges,
  };
}
function vn(t, e, n) {
  const i = d.window$1(t, n);
  return i
    ? { ok: !0, data: Le(t, n), closed: [{ kind: "window", window: i }] }
    : f({ kind: "window-not-found", windowId: n });
}
function Pr(t, e, n) {
  const i = d.window$1(t, e);
  return i
    ? { ok: !0, data: h(t, e, { ...i, bounds: n }) }
    : f({ kind: "window-not-found", windowId: e });
}
function Rr(t, e) {
  const n = d.entry$1(t, e.entryId);
  if (!n) return f({ kind: "entry-not-found", entryId: e.entryId });
  if (d.idIsTaken(t, e.windowId))
    return f({ kind: "duplicate-id", id: e.windowId });
  if (!d.isTab(n.node))
    return f({ kind: "entry-not-closable", entryId: e.entryId });
  const i = nt(t, n.window, e.entryId),
    o = { kind: "tab", tab: n.node, category: d.category(n.window, e.entryId) },
    a = {
      id: e.windowId,
      bounds: e.bounds,
      ...(n.window.tabLayout ? { tabLayout: n.window.tabLayout } : {}),
      entries: [o],
      activeEntryId: n.node.id,
    };
  return { ok: !0, data: { ...i, windows: [...i.windows, a] } };
}
function xr(t, e) {
  if (t.tabLayout !== "modern") return { entries: e };
  const n = new Map(
    d.openChats(t).map(({ tab: a, view: c }) => [c.chatId, a.id]),
  );
  let i;
  const o = (a) => {
    if (!d.isChatTab(a)) return a;
    const c = Ht(a.root.column, (s) => {
      const u = n.get(s.chatId);
      return ((i ??= u), u === void 0);
    });
    if (c)
      return c === a.root.column ? a : { ...a, root: { ...a.root, column: c } };
  };
  return {
    entries: e.flatMap((a) => {
      if (a.kind === "tab") {
        const s = o(a.tab);
        return s ? [{ ...a, tab: s }] : [];
      }
      const c = a.tabs.flatMap((s) => o(s) ?? []);
      return c.length > 0 ? [{ ...a, tabs: c }] : [];
    }),
    focus: i,
  };
}
function Vr(t, e, n) {
  const i = n.kind === "entries" ? d.window$1(t, n.into) : void 0;
  if (n.kind === "entries" && !i)
    return f({ kind: "window-not-found", windowId: n.into });
  const o = i && n.kind === "entries" ? xr(i, n.entries) : void 0;
  if (i && o?.entries.length === 0 && o.focus) return it(t, i.id, o.focus);
  const a = o?.entries ?? [],
    c = n.kind === "window" ? d.entries(n.window) : a.flatMap(d.tabs);
  if (c.length === 0) return f({ kind: "closed-entry-not-restorable" });
  const s = new Set(),
    u = [
      ...(n.kind === "window" ? [String(n.window.id)] : []),
      ...c.flatMap(d.ids$1),
      ...$r(t, a),
    ];
  for (const y of u) {
    if (s.has(y) || d.idIsTaken(t, y))
      return f({ kind: "duplicate-id", id: y });
    s.add(y);
  }
  for (const y of c.flatMap(d.placedPageIds$1)) {
    if (!e.has(y)) return f({ kind: "page-record-missing", pageId: y });
    if (d.isPagePlaced(t, y))
      return f({ kind: "page-already-placed", pageId: y });
  }
  let l = t;
  for (const y of c) l = ct(l, y);
  if (n.kind === "window")
    return { ok: !0, data: { ...l, windows: [...l.windows, n.window] } };
  for (const y of a) {
    const b = d.window$1(l, n.into);
    if (!b) return f({ kind: "window-not-found", windowId: n.into });
    l = mr(l, b, y);
  }
  const I = d.window$1(l, n.into);
  if (!I) return f({ kind: "window-not-found", windowId: n.into });
  const w = new Set(d.entries(I).map((y) => y.id)),
    k = c.filter((y) => w.has(y.id)).at(-1);
  return k
    ? { ok: !0, data: h(l, I.id, { ...I, activeEntryId: k.id }) }
    : { ok: !0, data: l };
}
function $r(t, e) {
  return e.flatMap((n) =>
    n.kind === "group" && !d.group$1(t, n.id) ? [String(n.id)] : [],
  );
}
function mr(t, e, n) {
  if (n.kind === "tab") {
    const a = z(e, n.tab, n.category, { windowId: e.id });
    return h(t, e.id, a);
  }
  const i = d.group$1(t, n.id)?.window;
  if (i) {
    const a = d.withGroup(i, n.id, (c) => ({
      ...c,
      tabs: [...c.tabs, ...n.tabs],
    }));
    return h(t, i.id, a);
  }
  const o = et(e.entries, void 0);
  return h(t, e.id, { ...e, entries: A(e.entries, n, o) });
}
function R(t, e, n, i) {
  const o = d.window$1(t, n);
  if (!o) return f({ kind: "window-not-found", windowId: n });
  if (d.idIsTaken(t, i.entryId))
    return f({ kind: "duplicate-id", id: i.entryId });
  if (i.root.kind === "chat") {
    const I = new Set();
    for (const k of i.root.column.views) {
      if (I.has(k.id) || d.idIsTaken(t, k.id))
        return f({ kind: "duplicate-id", id: k.id });
      I.add(k.id);
    }
    const w = d.unreachableSlot(t, i.root.column);
    if (w)
      return f({
        kind: "slot-not-reachable",
        entryId: i.entryId,
        slotId: w.slotId,
      });
  }
  if (i.root.kind === "page" && d.isPagePlaced(t, i.root.pageId))
    return f({ kind: "page-already-placed", pageId: i.root.pageId });
  const a = In(e, i);
  if (!a.ok) return a;
  const c = i.root.kind === "page" ? i.page?.detail.openedAt : i.occurredAt,
    s = ee(i.entryId, i.root, c);
  if (i.groupId !== void 0) {
    if (!d.group(o, i.groupId))
      return f({ kind: "group-not-found", groupId: i.groupId });
    const w = {
      ...z(o, s, "ordinary", { groupId: i.groupId, index: i.index }),
      activeEntryId: i.activate === !1 ? o.activeEntryId : s.id,
    };
    return { ok: !0, data: ct(h(t, n, w), s), pageChanges: a.pageChanges };
  }
  const l = {
    ...z(o, s, "ordinary", { index: i.index }),
    activeEntryId: i.activate === !1 ? o.activeEntryId : s.id,
  };
  return { ok: !0, data: ct(h(t, n, l), s), pageChanges: a.pageChanges };
}
function Lr(t, e, n, i) {
  let o = t;
  const a = [];
  for (const c of i.tabs) {
    const s = R(o, e, n, { ...c, occurredAt: i.occurredAt });
    if (!s.ok) return s;
    ((o = s.data),
      s.pageChanges?.kind === "created" && a.push(...s.pageChanges.pages));
  }
  return { ok: !0, data: o, pageChanges: a.length === 0 ? D : x(...a) };
}
function Wr(t, e, n, i) {
  const o = d.entry$1(t, n);
  if (!o) return f({ kind: "entry-not-found", entryId: n });
  const a = o.node;
  if (!d.isTab(a) || !d.ownsTrack(a) || a.root.kind !== "newTab")
    return f({ kind: "entry-not-new-tab", entryId: n });
  if (d.isPagePlaced(t, i.pageId))
    return f({ kind: "page-already-placed", pageId: i.pageId });
  if (e.has(i.pageId)) return f({ kind: "duplicate-id", id: i.pageId });
  const c = { ...a, root: { kind: "page", pageId: i.pageId } },
    s = d.withEntry(o.window, n, c);
  return {
    ok: !0,
    data: h(t, o.window.id, s),
    pageChanges: x(L(i.pageId, i.page)),
  };
}
function _r(t, e, n, i) {
  const o = d.entry$1(t, n);
  if (!o) return f({ kind: "entry-not-found", entryId: n });
  const a = o.node;
  if (!d.isTab(a) || !d.isChatTab(a))
    return f({ kind: "chat-column-not-found", entryId: n });
  if (d.isPagePlaced(t, i.pageId))
    return f({ kind: "page-already-placed", pageId: i.pageId });
  if (e.has(i.pageId)) return f({ kind: "duplicate-id", id: i.pageId });
  const c = {
      id: a.id,
      ...(a.lastActivityAt === void 0
        ? {}
        : { lastActivityAt: a.lastActivityAt }),
      ...(a.pinnedId !== void 0 ? { pinnedId: a.pinnedId } : {}),
      ...(a.activitySidebarSortOverride
        ? { activitySidebarSortOverride: a.activitySidebarSortOverride }
        : {}),
      root: { kind: "page", pageId: i.pageId },
      layout: { kind: "root-full" },
      track: [],
      ...(a.chatSidebar ? { chatSidebar: a.chatSidebar } : {}),
    },
    s = d.withEntry(o.window, n, c);
  return {
    ok: !0,
    data: h(t, o.window.id, s),
    pageChanges: x(L(i.pageId, i.page)),
  };
}
function Nr(t, e, n) {
  const i = d.entry$1(t, n.source.entryId);
  if (!i) return f({ kind: "entry-not-found", entryId: n.source.entryId });
  if (i.window.activeEntryId !== n.source.entryId)
    return f({ kind: "entry-not-active", entryId: n.source.entryId });
  if (n.source.kind === "new-tab-or-promoted-page") {
    if (d.isNewTab(i.node)) return { ok: !0, data: t };
    if (!d.isTab(i.node) || i.node.root.kind !== "page")
      return f({ kind: "entry-not-new-tab", entryId: n.source.entryId });
  } else if (n.source.kind === "chat") {
    if (!d.isTab(i.node) || !d.isChatTab(i.node))
      return f({ kind: "chat-column-not-found", entryId: n.source.entryId });
  } else if (
    !d.isTab(i.node) ||
    i.node.root.kind !== "page" ||
    i.node.root.pageId !== n.source.pageId
  )
    return f({
      kind: "entry-not-page-root",
      entryId: n.source.entryId,
      pageId: n.source.pageId,
    });
  if (n.entryId !== n.source.entryId && d.idIsTaken(t, n.entryId))
    return f({ kind: "duplicate-id", id: n.entryId });
  const o = P(t, e, n.source.entryId);
  if (!o.ok) return o;
  const a = {
      id: n.entryId,
      ...(n.occurredAt === void 0 ? {} : { openedAt: n.occurredAt }),
      ...(i.node.pinnedId !== void 0 ? { pinnedId: i.node.pinnedId } : {}),
      ...(i.node.activitySidebarSortOverride
        ? { activitySidebarSortOverride: i.node.activitySidebarSortOverride }
        : {}),
      root: { kind: "newTab" },
      layout: { kind: "root-full" },
      track: [],
      ...(i.node.chatSidebar ? { chatSidebar: i.node.chatSidebar } : {}),
    },
    s = {
      ...d.withEntry(i.window, n.source.entryId, a),
      activeEntryId:
        i.window.activeEntryId === n.source.entryId
          ? n.entryId
          : i.window.activeEntryId,
    };
  return {
    ok: !0,
    data: h(t, i.window.id, s),
    ...gn(i.node, n.entryId, o.closed),
  };
}
function gn(t, e, n) {
  const i = d.placedPageIds$1(t);
  return i.length === 0
    ? {}
    : e === t.id
      ? { pageChanges: { kind: "deleted", pageIds: i } }
      : n
        ? { closed: n }
        : {};
}
function re(t, e) {
  let n = !1;
  for (const i of t.entries)
    if (i.kind === "tab") {
      if (i.category !== "ordinary") continue;
      if (i.tab.id !== e) return !1;
      n = !0;
    } else if (i.kind === "group")
      for (const o of i.tabs) {
        if (o.id !== e) return !1;
        n = !0;
      }
  return n;
}
function Mr(t, e, n) {
  const i = d.entry$1(t, e);
  if (!i) return f({ kind: "entry-not-found", entryId: e });
  const o = i.node;
  if (!d.isTab(o) || !d.ownsTrack(o) || o.root.kind !== "newTab")
    return f({ kind: "entry-not-new-tab", entryId: e });
  if ((o.root.hasDraft ?? !1) === n) return { ok: !0, data: t };
  const a = d.withEntry(i.window, e, {
    ...o,
    root: n ? { kind: "newTab", hasDraft: !0 } : { kind: "newTab" },
  });
  return { ok: !0, data: h(t, a.id, a) };
}
function P(t, e, n, i = {}) {
  const o = d.entry$1(t, n);
  if (!o) return f({ kind: "entry-not-found", entryId: n });
  const a = o.node;
  if (!d.isTab(a)) return f({ kind: "entry-not-closable", entryId: n });
  const c = re(o.window, n),
    s =
      o.window.activeEntryId === n &&
      tt(o.window, n, i.recentEntryIds ?? [], "visible") === void 0,
    u = i.selection ? yn(a) : a.root.kind === "newTab";
  if (c && i.fallbackEntryId && u) return vn(t, e, o.window.id);
  let l;
  if ((c || s) && i.fallbackEntryId) {
    const I = h(t, o.window.id, d.withoutEntry(o.window, n)),
      w = R(I, e, o.window.id, {
        entryId: i.fallbackEntryId,
        root: { kind: "newTab" },
        occurredAt: i.occurredAt,
      });
    if (!w.ok) return w;
    l = w.data;
  } else l = nt(t, o.window, n, i.recentEntryIds ?? []);
  return { ok: !0, data: l, closed: [ft(l, o.window, new Set([n]))] };
}
function Dr(t, e, n, i) {
  const o = d.window$1(t, n.windowId);
  if (!o)
    return {
      kind: "rejected",
      rejection: { kind: "window-not-found", windowId: n.windowId },
    };
  const a = d.activeEntry$1(o);
  if (!a)
    return {
      kind: "rejected",
      rejection: { kind: "entry-not-found", entryId: o.activeEntryId },
    };
  if (!d.isTab(a))
    return {
      kind: "rejected",
      rejection: { kind: "entry-not-closable", entryId: a.id },
    };
  if (d.category(o, a.id) !== "ordinary") {
    const I = un(o, a.id, i);
    return I
      ? { kind: "handover", data: h(t, o.id, { ...o, activeEntryId: I.id }) }
      : { kind: "settled" };
  }
  const c = te(o, a.id, i);
  if (re(o, a.id)) {
    const I = P(t, e, a.id, {
      selection: i.kind === "history" ? i.selection : void 0,
      fallbackEntryId: n.fallbackEntryId,
      recentEntryIds: c,
      occurredAt: n.occurredAt,
    });
    return I.ok
      ? { kind: "closed", data: I.data, entryId: a.id }
      : { kind: "rejected", rejection: I.rejection };
  }
  const s = tt(o, a.id, c, "visible"),
    u = d.withoutEntry(o, a.id);
  if (s)
    return {
      kind: "closed",
      data: h(t, o.id, { ...u, activeEntryId: s.id }),
      entryId: a.id,
    };
  const l = R(h(t, o.id, u), e, o.id, {
    entryId: n.fallbackEntryId,
    root: { kind: "newTab" },
    occurredAt: n.occurredAt,
  });
  return l.ok
    ? { kind: "closed", data: l.data, entryId: a.id }
    : { kind: "rejected", rejection: l.rejection };
}
function Gr(t, e, n) {
  const i = d.window$1(t, n.windowId);
  if (!i) return f({ kind: "window-not-found", windowId: n.windowId });
  const o = Math.max(1, Math.trunc(n.repeat ?? 1)),
    a = new Set(),
    c = [],
    s = dr(n);
  let u = s,
    l = t;
  for (let I = 0; I < o; I++) {
    const w = d.window$1(l, n.windowId);
    if (!w) break;
    const k = Dr(l, e, n, u);
    if (k.kind === "rejected") {
      if (l === t) return f(k.rejection);
      break;
    }
    if (k.kind === "settled") break;
    l = k.data;
    const y = d.window$1(l, n.windowId)?.activeEntryId;
    ((u = ln(u, { landedOn: y, closedActive: k.kind === "closed" }, l)),
      k.kind === "closed" &&
        (k.entryId !== n.fallbackEntryId && a.add(k.entryId),
        s.kind === "history" &&
          (k.entryId !== n.fallbackEntryId || !y) &&
          c.push(ft(l, w, new Set([k.entryId])))));
  }
  return l === t
    ? { ok: !0, data: t }
    : s.kind === "history"
      ? { ok: !0, data: l, closed: c }
      : a.size === 0
        ? { ok: !0, data: l }
        : { ok: !0, data: l, closed: [ft(l, i, a)] };
}
function Fr(t, e, n, i = {}) {
  if (n.length === 0) return { ok: !0, data: t };
  const o = new Set(n),
    a = n.map((w) => ({ entryId: w, found: d.entry$1(t, w) }));
  for (const w of a) {
    if (!w.found) return f({ kind: "entry-not-found", entryId: w.entryId });
    if (!d.isTab(w.found.node))
      return f({ kind: "entry-not-closable", entryId: w.entryId });
  }
  const c = a[0]?.found?.window;
  if (!c) return { ok: !0, data: t };
  for (const w of a)
    if (w.found?.window.id !== c.id)
      return f({
        kind: "entry-not-in-window",
        entryId: w.entryId,
        windowId: c.id,
      });
  const s = d.entries(c).filter((w) => d.isTab(w) && o.has(w.id));
  let u = t,
    l = i.selection ? { kind: "history", selection: i.selection } : void 0;
  const I = [];
  for (const w of s) {
    const k = d.entry$1(u, w.id);
    if (k) {
      if (l) {
        const y = P(u, e, w.id, {
          ...i,
          recentEntryIds: te(k.window, w.id, l),
        });
        if (!y.ok) return y;
        if (
          ((u = y.data),
          I.push(...(y.closed ?? [])),
          k.window.activeEntryId === w.id)
        ) {
          const b = d.window$1(u, k.window.id)?.activeEntryId;
          l = ln(l, { landedOn: b, closedActive: !0 }, u);
        }
        continue;
      }
      if (i.fallbackEntryId && re(k.window, w.id)) {
        const y = P(u, e, w.id, i);
        if (!y.ok) return y;
        u = y.data;
      } else u = nt(u, k.window, w.id);
    }
  }
  return { ok: !0, data: u, closed: i.selection ? I : [ft(u, c, o)] };
}
function O(t, e) {
  const n = d.column(t, e);
  return (
    n ||
    (d.entry$1(t, e.entryId)
      ? f({ kind: "chat-column-not-found", entryId: e.entryId })
      : f({ kind: "entry-not-found", entryId: e.entryId }))
  );
}
function Ur(t, e) {
  return t.kind !== e.kind
    ? !1
    : t.kind === "root-full" || e.kind === "root-full"
      ? !0
      : t.presentedSlotId !== e.presentedSlotId
        ? !1
        : t.kind === "slot-full" || e.kind === "slot-full"
          ? !0
          : t.leading === e.leading && t.ratio === e.ratio;
}
function Hr(t, e) {
  return (
    t.selectedViewId === e.selectedViewId &&
    t.views.length === e.views.length &&
    t.views.every((n, i) => {
      const o = e.views[i];
      return n.id === o?.id && n.chatId === o.chatId && Ur(n.layout, o.layout);
    })
  );
}
function Br(t, e) {
  return !t || !e
    ? t === e
    : Hr(t.column, e.column) &&
        t.side === e.side &&
        t.ratio === e.ratio &&
        t.mode === e.mode;
}
function Wt(t, e, n) {
  const i = d.entry$1(t, e);
  if (!i) return f({ kind: "entry-not-found", entryId: e });
  const o = new Set(
      "chatSidebar" in i.node
        ? (i.node.chatSidebar?.column.views.map((I) => I.id) ?? [])
        : [],
    ),
    a = new Set();
  for (const I of n?.column.views ?? []) {
    if (a.has(I.id) || (!o.has(I.id) && d.idIsTaken(t, I.id)))
      return f({ kind: "duplicate-id", id: I.id });
    a.add(I.id);
  }
  const c = n
    ? K(
        t,
        n.column.views.map((I) => I.chatId),
      )
    : t;
  if (n) {
    const I = d.unreachableSlot(c, n.column);
    if (I)
      return f({ kind: "slot-not-reachable", entryId: e, slotId: I.slotId });
  }
  const s = Br(i.node.chatSidebar, n),
    u = n?.column.views.every((I) => t.chats[I.chatId]) ?? !0;
  if (s && u) return { ok: !0, data: t };
  const l = d.withEntry(i.window, e, { ...i.node, chatSidebar: n });
  return { ok: !0, data: h(c, i.window.id, l) };
}
function Yr(t, e) {
  switch (e.kind) {
    case "open":
      return t
        ? t.mode === "closed"
          ? { ok: !0, sidebar: { ...t, mode: "side-by-side" } }
          : { ok: !0, sidebar: t }
        : e.seed
          ? { ok: !0, sidebar: { ...e.seed, mode: "side-by-side" } }
          : { ok: !1 };
    case "close":
      return t
        ? t.mode === "closed"
          ? { ok: !0, sidebar: t }
          : { ok: !0, sidebar: { ...t, mode: "closed" } }
        : { ok: !1 };
    case "side":
      return t
        ? t.side === e.side
          ? { ok: !0, sidebar: t }
          : { ok: !0, sidebar: { ...t, side: e.side } }
        : { ok: !1 };
    case "ratio":
      return t
        ? t.ratio === e.ratio
          ? { ok: !0, sidebar: t }
          : { ok: !0, sidebar: { ...t, ratio: e.ratio } }
        : { ok: !1 };
    case "mode":
      return t
        ? t.mode === e.mode
          ? { ok: !0, sidebar: t }
          : { ok: !0, sidebar: { ...t, mode: e.mode } }
        : { ok: !1 };
    default:
      throw new Error("Unhandled chat sidebar transition.");
  }
}
function dt(t, e, n) {
  const i = d.entry$1(t, e);
  if (!i) return f({ kind: "entry-not-found", entryId: e });
  const o = Yr(i.node.chatSidebar, n);
  return o.ok
    ? Wt(t, e, o.sidebar)
    : f({ kind: "chat-column-not-found", entryId: e });
}
function oe(t, e, n, i = "ready") {
  const o = dt(t, e, { kind: "open", seed: n });
  if (!o.ok || i === "ready" || !n) return o;
  let a = o.data.chats;
  for (const { chatId: c } of n.column.views)
    t.chats[c] || (a = { ...a, [c]: { track: a[c]?.track ?? [], state: i } });
  return { ...o, data: { ...o.data, chats: a } };
}
function zr(t, e) {
  const n = d.entry$1(t, e.entryId);
  if (!n) return f({ kind: "entry-not-found", entryId: e.entryId });
  const i = n.node.chatSidebar;
  if (!i)
    return Wt(t, e.entryId, {
      column: {
        views: [
          { id: e.viewId, chatId: e.chatId, layout: { kind: "root-full" } },
        ],
        selectedViewId: e.viewId,
      },
      side: e.side,
      ratio: e.ratio,
      mode: "side-by-side",
    });
  const o = i.column.views.find((s) => s.chatId === e.chatId);
  if (!o && d.idIsTaken(t, e.viewId))
    return f({ kind: "duplicate-id", id: e.viewId });
  const a = o?.id ?? e.viewId,
    c = o
      ? i.column.views
      : [
          ...i.column.views,
          { id: e.viewId, chatId: e.chatId, layout: { kind: "root-full" } },
        ];
  return Wt(t, e.entryId, {
    ...i,
    column: { views: c, selectedViewId: a },
    mode: i.mode === "closed" ? "side-by-side" : i.mode,
  });
}
function Jr(t) {
  let e = t;
  for (const n of t.windows) {
    let i = n;
    for (const o of n.entries) {
      if (o.kind !== "tab" || o.category !== "pinned" || !o.tab.chatSidebar)
        continue;
      const { chatSidebar: a, ...c } = o.tab;
      i = d.withEntry(i, c.id, c);
    }
    i !== n && (e = h(e, n.id, i));
  }
  return { ok: !0, data: e };
}
function qr(t, e) {
  return dt(t, e, { kind: "close" });
}
function Kr(t, e, n) {
  return dt(t, e, { kind: "side", side: n });
}
function Xr(t, e) {
  return dt(t, e, { kind: "mode", mode: "side-by-side" });
}
function Qr(t, e, n) {
  return dt(t, e, { kind: "ratio", ratio: n });
}
function de(t, e, n, i) {
  const o = d.window$1(t, e),
    a = o?.tabLayout === "modern" ? d.openChat(o, n) : void 0;
  if (!o || !a) return;
  const { column: c } = a.tab.root,
    s =
      c.selectedViewId === a.view.id ? c : { ...c, selectedViewId: a.view.id },
    { presentedSlotId: u } = i,
    l = u ? G(s, a.view.id, (k) => ({ ...k, layout: ot(k.layout, u) })) : s,
    I = q(a.tab, l),
    w = h(t, e, d.withEntry(o, a.tab.id, I));
  return i.activate ? it(w, e, a.tab.id) : { ok: !0, data: w };
}
function En(t, e, n, i) {
  const o = de(t, n, i.chatId, {
    activate: i.activate !== !1,
    presentedSlotId: i.presentedSlotId,
  });
  if (o) return o;
  const a = R(t, e, n, {
    entryId: i.entryId,
    root: {
      kind: "chat",
      column: {
        views: [
          {
            id: i.viewId,
            chatId: i.chatId,
            layout: i.presentedSlotId
              ? ot({ kind: "root-full" }, i.presentedSlotId)
              : { kind: "root-full" },
          },
        ],
        selectedViewId: i.viewId,
      },
    },
    index: i.index,
    activate: i.activate,
    occurredAt: i.occurredAt,
  });
  return !a.ok || !i.category || i.category === "ordinary"
    ? a
    : U(a.data, { entryId: i.entryId, category: i.category, index: i.index });
}
function Zr(t, e, n) {
  const i = d.entry$1(t, n.sourceEntryId);
  if (!i) return f({ kind: "entry-not-found", entryId: n.sourceEntryId });
  const o = i.node;
  if (!d.isTab(o)) return f({ kind: "entry-not-closable", entryId: o.id });
  if (o.id === n.entryId && o.root.kind === "chat") {
    const I = d.selectedView(o.root.column);
    if (I.id === n.viewId && I.chatId === n.chatId) return { ok: !0, data: t };
  }
  const a = de(t, i.window.id, n.chatId, {
    activate: i.window.activeEntryId === n.sourceEntryId,
  });
  if (a) return a;
  if (n.entryId !== n.sourceEntryId && d.idIsTaken(t, n.entryId))
    return f({ kind: "duplicate-id", id: n.entryId });
  if (String(n.viewId) === String(n.entryId) || d.idIsTaken(t, n.viewId))
    return f({ kind: "duplicate-id", id: n.viewId });
  const c = P(t, e, n.sourceEntryId);
  if (!c.ok) return c;
  const s = {
      id: n.entryId,
      ...(n.occurredAt ? { lastActivityAt: n.occurredAt } : {}),
      ...(o.pinnedId !== void 0 ? { pinnedId: o.pinnedId } : {}),
      ...(o.activitySidebarSortOverride
        ? { activitySidebarSortOverride: o.activitySidebarSortOverride }
        : {}),
      root: {
        kind: "chat",
        column: {
          views: [
            { id: n.viewId, chatId: n.chatId, layout: { kind: "root-full" } },
          ],
          selectedViewId: n.viewId,
        },
      },
      ...(o.chatSidebar ? { chatSidebar: o.chatSidebar } : {}),
    },
    l = {
      ...d.withEntry(i.window, n.sourceEntryId, s),
      activeEntryId:
        i.window.activeEntryId === n.sourceEntryId
          ? n.entryId
          : i.window.activeEntryId,
    };
  return {
    ok: !0,
    data: K(h(t, i.window.id, l), [n.chatId]),
    ...gn(o, n.entryId, c.closed),
  };
}
function to(t, e) {
  const n = O(t, e.column);
  if (!("column" in n)) return n;
  const { column: i } = n,
    o = d.viewOfChat(i, e.chatId);
  if (o) return Ot(t, { column: e.column, viewId: o.id });
  const a =
    e.column.kind === "root"
      ? de(t, n.window.id, e.chatId, {
          activate: n.window.activeEntryId === e.column.entryId,
        })
      : void 0;
  if (a) return a;
  if (d.idIsTaken(t, e.viewId))
    return f({ kind: "duplicate-id", id: e.viewId });
  const c = Math.max(0, Math.min(e.index ?? i.views.length, i.views.length)),
    s = [...i.views];
  s.splice(c, 0, {
    id: e.viewId,
    chatId: e.chatId,
    layout: { kind: "root-full" },
  });
  const u = K(t, [e.chatId]);
  return { ok: !0, data: j(u, n, { views: s, selectedViewId: e.viewId }) };
}
function eo(t, e) {
  const n = O(t, e.column);
  if (!("column" in n)) return n;
  const { column: i } = n,
    o = d.view(i, e.viewId);
  if (!o) return f({ kind: "chat-view-not-found", viewId: e.viewId });
  if (o.chatId !== e.expectedChatId)
    return f({ kind: "chat-not-found", chatId: e.expectedChatId });
  const a = G(i, e.viewId, () => ({
    id: e.viewId,
    chatId: e.chatId,
    layout: { kind: "root-full" },
  }));
  return { ok: !0, data: j(K(t, [e.chatId], e.chatState), n, a) };
}
function Ot(t, e) {
  const n = O(t, e.column);
  if (!("column" in n)) return n;
  const { column: i } = n;
  return d.view(i, e.viewId)
    ? i.selectedViewId === e.viewId
      ? { ok: !0, data: t }
      : { ok: !0, data: j(t, n, { ...i, selectedViewId: e.viewId }) }
    : f({ kind: "chat-view-not-found", viewId: e.viewId });
}
function no(t, e, n) {
  const i = Ot(t, n);
  if (!i.ok) return i;
  const o =
    n.openSidebar && n.column.kind === "sidebar"
      ? oe(i.data, n.column.entryId)
      : i;
  return o.ok ? St(o.data, e, n.column.entryId) : o;
}
function ae(t, e, n) {
  const i = O(t, n.column);
  if (!("column" in i)) return i;
  const { column: o } = i,
    a = d.view(o, n.viewId);
  if (!a) return f({ kind: "chat-view-not-found", viewId: n.viewId });
  const c = o.views.indexOf(a),
    s = o.views.filter((l) => l.id !== n.viewId);
  if (s.length === 0)
    return n.column.kind === "sidebar"
      ? { ok: !0, data: j(t, i, void 0) }
      : P(t, e, n.column.entryId, {
          fallbackEntryId: n.fallbackEntryId,
          occurredAt: n.occurredAt,
        });
  let u = o.selectedViewId;
  return (
    u === n.viewId && (u = s[Math.min(c, s.length - 1)]?.id ?? s[0].id),
    { ok: !0, data: j(t, i, { views: s, selectedViewId: u }) }
  );
}
function Sn(t, e) {
  const n = O(t, e.column);
  if (!("column" in n)) return n;
  const { column: i } = n,
    o = d.view(i, e.viewId);
  if (!o) return f({ kind: "chat-view-not-found", viewId: e.viewId });
  const a = i.views.indexOf(o),
    c = [...i.views],
    [s] = c.splice(a, 1),
    u = Math.max(0, Math.min(e.index, c.length));
  return (
    c.splice(u, 0, s),
    c.every((l, I) => l.id === i.views[I]?.id)
      ? { ok: !0, data: t }
      : { ok: !0, data: j(t, n, { ...i, views: c }) }
  );
}
function io(t, e, n) {
  if (n.source.kind === n.target.kind && n.source.entryId === n.target.entryId)
    return Sn(t, { column: n.source, viewId: n.viewId, index: n.index });
  const i = O(t, n.source);
  if (!("column" in i)) return i;
  const o = i.column,
    a = d.view(o, n.viewId);
  if (!a) return f({ kind: "chat-view-not-found", viewId: n.viewId });
  const c = O(t, n.target);
  if (!("column" in c)) return c;
  const s = c.column;
  if (d.viewOfChat(s, a.chatId))
    return f({
      kind: "chat-already-in-column",
      entryId: n.target.entryId,
      chatId: a.chatId,
    });
  const u = Math.max(0, Math.min(n.index, s.views.length)),
    l = [...s.views];
  l.splice(u, 0, a);
  const I = j(t, c, { views: l, selectedViewId: a.id }),
    w = ae(I, e, {
      column: n.source,
      viewId: n.viewId,
      fallbackEntryId: n.fallbackEntryId,
      occurredAt: n.occurredAt,
    });
  return w.ok ? { ok: !0, data: w.data } : w;
}
function ge(t, e) {
  const n = d.chatView(t, e);
  return n ? { column: n.column, viewId: n.view.id } : void 0;
}
function _t(t, e) {
  return Ht(t, (n) => n.chatId !== e);
}
function Ee(t, e) {
  if (t.root.kind === "chat") {
    const o = _t(t.root.column, e);
    return o ? { ...t, root: { ...t.root, column: o } } : void 0;
  }
  const n = t.chatSidebar && _t(t.chatSidebar.column, e),
    i = n && t.chatSidebar ? { ...t.chatSidebar, column: n } : void 0;
  return { ...t, chatSidebar: i };
}
function Se(t, e) {
  if (t.kind === "tab") {
    const o = Ee(t.tab, e);
    return o ? [{ ...t, tab: o }] : [];
  }
  if (t.kind === "group") {
    const o = t.tabs.flatMap((a) => Ee(a, e) ?? []);
    return o.length ? [{ ...t, tabs: o }] : [];
  }
  const n = t.entry.chatSidebar?.column,
    i = n && _t(n, e);
  return [
    {
      ...t,
      entry: {
        ...t.entry,
        chatSidebar:
          i && t.entry.chatSidebar
            ? { ...t.entry.chatSidebar, column: i }
            : void 0,
      },
    },
  ];
}
function ro(t, e) {
  if (t.kind === "entries") {
    const i = t.entries.flatMap((o) =>
      Se(o, e).flatMap((a) =>
        a.kind === "tab" || a.kind === "group" ? [a] : [],
      ),
    );
    return i.length ? { ...t, entries: i } : void 0;
  }
  const n = d.withEntries(
    t.window,
    t.window.entries.flatMap((i) => Se(i, e)),
  );
  return n ? { kind: "window", window: n } : void 0;
}
function oo(t, e, n, i = {}) {
  const o = d.pageIds(t.chats[n]?.track ?? []);
  let a = t;
  for (let s = ge(a, n); s; s = ge(a, n)) {
    const u = ae(a, e, { ...s, fallbackEntryId: s.column.entryId, ...i });
    if (!u.ok) return u;
    a = u.data;
  }
  const c = { ...a.chats };
  return (
    delete c[n],
    {
      ok: !0,
      data: { ...a, chats: c },
      ...(o.length ? { pageChanges: { kind: "deleted", pageIds: o } } : {}),
    }
  );
}
const On = d.ratioOfLength(1, 2);
function Nt(t) {
  return d.isTab(t) && "track" in t && t.root.kind === "page";
}
function ao(t) {
  return d.isTab(t) && "track" in t;
}
function Tn(t, e) {
  return !t || !Nt(t)
    ? { kind: "unavailable", reason: "invariant-blocked" }
    : !e || e.id === t.id || !Nt(e)
      ? { kind: "unavailable", reason: "no-receiver" }
      : e.layout.kind !== "root-full"
        ? { kind: "unavailable", reason: "receiver-already-split" }
        : t.layout.kind !== "root-full" || t.track.length !== 0
          ? { kind: "unavailable", reason: "invariant-blocked" }
          : { kind: "available", source: t, receiver: e };
}
function Cn(t, e, n, i) {
  const o = d.window$1(t, e);
  if (!o) return { kind: "unavailable", reason: "no-receiver" };
  const a = Tn(d.entry$2(o, n), d.entry$2(o, i));
  return a.kind === "available" ? { ...a, window: o } : a;
}
function co(t, e, n) {
  const i = d.window$1(t, e);
  if (!i) return [];
  const o = d.entry$2(i, n);
  return d.entries(i).flatMap((a) => {
    const c = Tn(a, o);
    return c.kind === "available"
      ? [{ entryId: c.source.id, pageId: c.source.root.pageId }]
      : [];
  });
}
function so(t, e) {
  const n = d.entry$2(t, e);
  return !!(n && Nt(n) && n.layout.kind === "root-full");
}
function uo(t, e, n) {
  const i = d.window$1(t, e);
  if (!i) return { kind: "unavailable", reason: "no-receiver" };
  const o = Cn(t, e, n, i.activeEntryId);
  return o.kind === "available" ? { kind: "available" } : o;
}
function jn(t, e) {
  if (d.idIsTaken(t, e.slotId))
    return f({ kind: "duplicate-id", id: e.slotId });
  const n = Cn(t, e.windowId, e.entryId, e.receiverEntryId);
  if (n.kind !== "available")
    return f({ kind: "entry-not-splittable", entryId: e.entryId });
  const i = { kind: "page", id: e.slotId, pageId: n.source.root.pageId },
    o = {
      ...n.receiver,
      track: [...n.receiver.track, i],
      layout: {
        kind: "beside",
        leading: e.side === "left" ? "track" : "root",
        ratio: On,
        presentedSlotId: e.slotId,
      },
    },
    a = d.withoutEntry(n.window, n.source.id),
    c = { ...d.withEntry(a, o.id, o), activeEntryId: o.id };
  return { ok: !0, data: h(t, n.window.id, c) };
}
function lo(t, e, n) {
  const i = R(t, e, n.windowId, { ...n.tab, activate: !1 });
  if (!i.ok) return i;
  const o = jn(i.data, {
    windowId: n.windowId,
    entryId: n.tab.entryId,
    receiverEntryId: n.receiverEntryId,
    slotId: n.slotId,
    side: n.side,
  });
  return o.ok ? { ...o, pageChanges: i.pageChanges } : o;
}
function An(t, e) {
  if (d.idIsTaken(t, e.newEntryId))
    return f({ kind: "duplicate-id", id: e.newEntryId });
  const n = d.entry$1(t, e.entryId);
  if (!n || !ao(n.node) || n.node.layout.kind !== "beside")
    return f({ kind: "entry-not-splittable", entryId: e.entryId });
  const i = n.node.layout.presentedSlotId,
    o = d.slot(n.node.track, i);
  if (!o || o.kind !== "page")
    return f({ kind: "entry-not-splittable", entryId: e.entryId });
  const a = {
      ...n.node,
      layout: { kind: "root-full" },
      track: n.node.track.filter((u) => u.id !== o.id),
    },
    c = {
      id: e.newEntryId,
      root: { kind: "page", pageId: o.pageId },
      layout: { kind: "root-full" },
      track: [],
    },
    s = n.window.entries.flatMap((u) =>
      u.kind === "tab" && u.tab.id === n.node.id
        ? [
            { ...u, tab: a },
            { kind: "tab", tab: c, category: "ordinary" },
          ]
        : u.kind !== "group" || !u.tabs.some((l) => l.id === n.node.id)
          ? [u]
          : [
              {
                ...u,
                tabs: u.tabs.flatMap((l) =>
                  l.id === n.node.id ? [a, c] : [l],
                ),
              },
            ],
    );
  return { ok: !0, data: h(t, n.window.id, { ...n.window, entries: s }) };
}
function fo(t, e, n) {
  const i = An(t, n);
  return i.ok
    ? n.side === "track"
      ? P(i.data, e, n.newEntryId, { occurredAt: n.occurredAt })
      : P(i.data, e, n.entryId, {
          recentEntryIds: [n.newEntryId],
          occurredAt: n.occurredAt,
        })
    : i;
}
function at(t, e, n) {
  const i = e.track[e.index],
    o = We(e.track, i.id, n);
  return { ok: !0, data: bt(t, e.owner, o) };
}
function Pn(t, e) {
  const n = d
    .tracks(t)
    .flat()
    .find((c) => c.kind === "split" && c.panes.some((s) => s.id === e));
  if (!n) return;
  const i = d.slot$1(t, n.id);
  if (!i) return;
  const [o, a] = n.panes;
  return o.id === e
    ? { location: i, slot: n, pane: o, sibling: a }
    : { location: i, slot: n, pane: a, sibling: o };
}
function Io(t, e, n) {
  const i = d.slot$1(t, e);
  if (!i) return f({ kind: "slot-not-found", slotId: e });
  const o = i.track[i.index];
  if (o.kind === "split") return f({ kind: "already-split", slotId: e });
  if (d.idIsTaken(t, n.firstPaneId))
    return f({ kind: "duplicate-id", id: n.firstPaneId });
  if (d.idIsTaken(t, n.chooserPaneId) || n.chooserPaneId === n.firstPaneId)
    return f({ kind: "duplicate-id", id: n.chooserPaneId });
  const a = {
    kind: "split",
    id: o.id,
    axis: n.axis,
    panes: [
      { kind: "page", id: n.firstPaneId, pageId: o.pageId },
      { kind: "chooser", id: n.chooserPaneId },
    ],
    ratio: On,
    focusedPaneId: n.firstPaneId,
  };
  return at(t, i, a);
}
function wo(t, e, n, i) {
  const o = Pn(t, n);
  if (!o) return f({ kind: "pane-not-found", paneId: n });
  if (o.pane.kind !== "chooser") return f({ kind: "not-a-chooser", paneId: n });
  if (!e.has(i)) return f({ kind: "page-record-missing", pageId: i });
  if (d.isPagePlaced(t, i))
    return f({ kind: "page-already-placed", pageId: i });
  const a = { kind: "page", id: n, pageId: i },
    [c, s] = o.slot.panes,
    u = c.id === n ? [a, s] : [c, a];
  return at(t, o.location, { ...o.slot, panes: u });
}
function ce(t, e, n) {
  const i = d.slot$1(t, e);
  if (!i) return f({ kind: "slot-not-found", slotId: e });
  const o = i.track[i.index];
  return o.kind !== "split"
    ? f({ kind: "not-a-split", slotId: e })
    : o.panes.some((a) => a.id === n)
      ? at(t, i, { ...o, focusedPaneId: n })
      : f({ kind: "pane-not-found", paneId: n });
}
function po(t, e, n) {
  const i = d.window$1(t, e);
  if (!i) return f({ kind: "window-not-found", windowId: e });
  const o = d.activeEntry$1(i);
  if (!o) return { ok: !0, data: t };
  const a = d.rootLayout(o);
  if (a.kind === "root-full") return { ok: !0, data: t };
  if (a.kind === "beside" && d.rootPageId(o) === n)
    return a.focused === "root"
      ? { ok: !0, data: t }
      : J(t, o.id, { ...a, focused: "root" });
  const c = d.track$1(t, o),
    s = d.slot(c, a.presentedSlotId);
  let u = t;
  if (s?.kind === "split") {
    const y = s.panes.find((b) => b.kind === "page" && b.pageId === n);
    if (!y) return { ok: !0, data: t };
    if (y.id !== s.focusedPaneId) {
      const b = We(c, s.id, { ...s, focusedPaneId: y.id });
      u = bt(t, d.owner(o), b);
    }
  } else if (s?.pageId !== n) return { ok: !0, data: t };
  if (a.kind !== "beside" || a.focused !== "root") return { ok: !0, data: u };
  const { kind: l, leading: I, ratio: w, presentedSlotId: k } = a;
  return J(u, o.id, { kind: l, leading: I, ratio: w, presentedSlotId: k });
}
function ko(t, e, n) {
  const i = d.slot$1(t, e);
  if (!i) return f({ kind: "slot-not-found", slotId: e });
  const o = i.track[i.index];
  return o.kind !== "split"
    ? f({ kind: "not-a-split", slotId: e })
    : o.ratio === n
      ? { ok: !0, data: t }
      : at(t, i, { ...o, ratio: n });
}
function Rn(t, e) {
  const n = Pn(t, e);
  if (!n) return f({ kind: "pane-not-found", paneId: e });
  if (n.sibling.kind !== "page") return kn(t, n.slot.id);
  const i = { kind: "page", id: n.slot.id, pageId: n.sibling.pageId },
    o = at(t, n.location, i);
  return !o.ok || n.pane.kind !== "page" || n.slot.focusedPaneId !== n.pane.id
    ? o
    : { ...o, data: zi(o.data, i) };
}
function bo(t, e) {
  for (const n of t.windows)
    for (const i of d.entries(n)) if (d.rootPageId(i) === e) return i.id;
}
function yo(t, e) {
  return e.kind === "slot" ? Xt(t, e.slotId) : Rn(t, e.paneId);
}
function ho(t, e, n) {
  const i = bo(t, n);
  if (i) {
    const a = P(t, e, i);
    return (a.ok, a);
  }
  const o = d.findPage(t, n);
  return o ? yo(t, o) : { ok: !0, data: t };
}
function xn(t, e, n) {
  const i = t.chats[e],
    o = [...(i?.track ?? []), n];
  return {
    ...t,
    chats: { ...t.chats, [e]: { track: o, state: i?.state ?? "ready" } },
  };
}
function vo(t, e) {
  const n = t.chats[e];
  return !n || n.state === "ready"
    ? { ok: !0, data: t }
    : {
        ok: !0,
        data: { ...t, chats: { ...t.chats, [e]: { ...n, state: "ready" } } },
      };
}
function go(t, e, n, i, o) {
  if (!e.has(i)) return f({ kind: "page-record-missing", pageId: i });
  const a = ho(t, e, i);
  if (!a.ok) return a;
  if (d.idIsTaken(a.data, o.slotId))
    return f({ kind: "duplicate-id", id: o.slotId });
  const c = { kind: "page", id: o.slotId, pageId: i };
  return {
    ok: !0,
    data: xn(a.data, n, c),
    ...(a.closed ? { closed: a.closed } : {}),
  };
}
function se(t, e, n, i) {
  if (e.has(i.pageId)) return f({ kind: "duplicate-id", id: i.pageId });
  if (d.idIsTaken(t, i.slotId))
    return f({ kind: "duplicate-id", id: i.slotId });
  const o = { kind: "page", id: i.slotId, pageId: i.pageId };
  return {
    ok: !0,
    data: xn(t, n, o),
    pageChanges: x(
      L(i.pageId, { detail: i.detail, initialEntry: i.initialEntry }),
    ),
  };
}
function Eo(t, e, n) {
  const i = O(t, n.column);
  if (!("column" in i)) return i;
  const { column: o } = i,
    a = d.view(o, n.viewId);
  if (!a) return f({ kind: "chat-view-not-found", viewId: n.viewId });
  if (a.chatId !== n.expectedChatId)
    return f({ kind: "chat-not-found", chatId: n.expectedChatId });
  const c = se(t, e, a.chatId, n);
  if (!c.ok) return c;
  const s = n.present === !1 ? a.layout : ot(a.layout, n.slotId),
    u = G(o, a.id, (l) => ({ ...l, layout: s }));
  return { ...c, data: j(c.data, i, u) };
}
function Vn(t, e) {
  const n = O(t, e.column);
  if (!("column" in n)) return n;
  const { column: i } = n,
    o = d.view(i, e.viewId);
  if (!o) return f({ kind: "chat-view-not-found", viewId: e.viewId });
  if (!d.slot(d.track(t, o.chatId), e.slotId))
    return f({
      kind: "slot-not-reachable",
      entryId: e.column.entryId,
      slotId: e.slotId,
    });
  const a = G(i, o.id, (c) => ({ ...c, layout: ot(c.layout, e.slotId) }));
  return { ok: !0, data: j(t, n, a) };
}
function ue(t, e, n) {
  const i = Vn(t, n);
  if (!i.ok) return i;
  const o = Ot(i.data, n);
  if (!o.ok) return o;
  const a = n.column.kind === "sidebar" ? oe(o.data, n.column.entryId) : o;
  return a.ok ? St(a.data, e, n.column.entryId) : a;
}
function le(t, e) {
  const n = O(t, e.column);
  if (!("column" in n)) return n;
  const { column: i } = n,
    o = d.view(i, e.viewId);
  if (!o) return f({ kind: "chat-view-not-found", viewId: e.viewId });
  const a = G(i, o.id, (c) => ({ ...c, layout: { kind: "root-full" } }));
  return { ok: !0, data: j(t, n, a) };
}
function So(t, e) {
  const n = O(t, e.column);
  if (!("column" in n)) return n;
  const i = d.view(n.column, e.viewId);
  if (!i) return f({ kind: "chat-view-not-found", viewId: e.viewId });
  const o = d.track(t, i.chatId),
    a = o.findIndex((w) => w.id === e.slotId);
  if (a === -1)
    return f({
      kind: "slot-not-reachable",
      entryId: e.column.entryId,
      slotId: e.slotId,
    });
  const c = Xt(t, e.slotId);
  if (!c.ok) return c;
  const s = o[a + 1] ?? o[a - 1],
    u = i.layout;
  if (!s || u.kind === "root-full" || u.presentedSlotId !== e.slotId) return c;
  const l = O(c.data, e.column);
  if (!("column" in l)) return l;
  const I = G(l.column, i.id, (w) => ({
    ...w,
    layout: { ...u, presentedSlotId: s.id },
  }));
  return { ...c, data: j(c.data, l, I) };
}
function $n(t, e) {
  const n = d.pageEntry(t, e.pageId);
  if (n)
    return {
      ok: !0,
      target: { kind: "root", windowId: n.windowId, entryId: n.entryId },
    };
  const i = d.findPage(t, e.pageId),
    o = i ? d.slot$1(t, i.slotId)?.owner : void 0;
  if (!i || !o) return f({ kind: "page-record-missing", pageId: e.pageId });
  if (o.kind === "entry") {
    const u = d.entry$1(t, o.entryId);
    if (!u) return f({ kind: "entry-not-found", entryId: o.entryId });
    const l = o.entryId;
    return {
      ok: !0,
      target: {
        kind: "entry-slot",
        windowId: u.window.id,
        entryId: l,
        placement: i,
      },
    };
  }
  const a = e.from && Co(t, o.chatId, e.from);
  if (a) {
    const { layout: u } = a.view,
      l =
        e.from?.toggle === !0 &&
        u.kind !== "root-full" &&
        u.presentedSlotId === i.slotId,
      I = { column: a.column, viewId: a.view.id };
    return {
      ok: !0,
      target: {
        kind: "source-view",
        windowId: a.windowId,
        view: I,
        placement: i,
        hide: l,
      },
    };
  }
  const c = d.window$1(t, e.windowId);
  if (!c) return f({ kind: "window-not-found", windowId: e.windowId });
  const s = jo(c, o.chatId);
  return s
    ? {
        ok: !0,
        target: { kind: "chat-view", windowId: c.id, view: s, placement: i },
      }
    : {
        ok: !0,
        target: {
          kind: "chat-tab",
          windowId: c.id,
          chatId: o.chatId,
          placement: i,
        },
      };
}
function It(t, e, n) {
  const i = $n(t, n);
  if (!i.ok) return i;
  const { target: o } = i,
    a = Oo(t, e, n, o);
  if (!a.ok) return a;
  const { selectedIn: c, ...s } = a;
  return o.kind === "source-view" ? s : rt(o.windowId, s);
}
function Oo(t, e, n, i) {
  switch (i.kind) {
    case "root":
      return To(t, i.windowId, i.entryId);
    case "entry-slot":
      return Mt(bn(t, i.windowId, i.entryId, i.placement.slotId), i.placement);
    case "source-view":
      return i.hide ? le(t, i.view) : Oe(t, i);
    case "chat-view":
      return Oe(t, i);
    case "chat-tab": {
      const o = d.window$1(t, i.windowId),
        a = o ? d.item(o, o.activeEntryId) : void 0;
      return Mt(
        En(t, e, i.windowId, {
          ...n.chatTab,
          chatId: i.chatId,
          index: o && a ? d.tabIndexAt(o, a.entryIndex + 1) : void 0,
          activate: !0,
          presentedSlotId: i.placement.slotId,
          occurredAt: n.occurredAt,
        }),
        i.placement,
      );
    }
  }
}
function To(t, e, n) {
  const i = d.entry$1(t, n)?.node;
  if (!i) return f({ kind: "entry-not-found", entryId: n });
  let o = { ok: !0, data: t };
  if (
    d.rootLayout(i).kind === "slot-full" &&
    ((o = J(t, n, { kind: "root-full" })), !o.ok)
  )
    return o;
  if (
    d.rootLayout(i).kind !== "beside" &&
    "chatSidebar" in i &&
    i.chatSidebar?.mode === "side-by-side"
  ) {
    const a = d.selectedView(i.chatSidebar.column);
    if (
      a.layout.kind !== "root-full" &&
      ((o = le(o.data, {
        column: { kind: "sidebar", entryId: n },
        viewId: a.id,
      })),
      !o.ok)
    )
      return o;
  }
  return it(o.data, e, n);
}
function Oe(t, e) {
  const { slotId: n } = e.placement;
  return Mt(ue(t, e.windowId, { ...e.view, slotId: n }), e.placement);
}
function Mt(t, e) {
  return !t.ok || e.kind === "slot" ? t : ce(t.data, e.slotId, e.paneId);
}
function Co(t, e, n) {
  if (n.column.kind !== "root") return;
  const i = d.column(t, n.column),
    o = i ? d.view(i.column, n.viewId) : void 0;
  if (!(!i || o?.chatId !== e))
    return { windowId: i.window.id, column: n.column, view: o };
}
function jo(t, e) {
  for (const n of d.entries(t)) {
    const i = d.chatColumn(n, "root"),
      o = i ? d.viewOfChat(i, e) : void 0;
    if (o) return { column: { kind: "root", entryId: n.id }, viewId: o.id };
  }
}
function Ao(t, e, n) {
  const i = d.entry$1(t, e);
  if (!i) return f({ kind: "entry-not-found", entryId: e });
  if (!d.isTab(i.node)) return f({ kind: "entry-not-closable", entryId: e });
  const o = d.withEntry(i.window, e, {
    ...i.node,
    activitySidebarSortOverride: n,
  });
  return { ok: !0, data: h(t, i.window.id, o) };
}
function Po(t, e, n) {
  const i = d.entry$1(t, e);
  if (!i) return f({ kind: "entry-not-found", entryId: e });
  if (!d.isTab(i.node) || i.node.root.kind !== "chat")
    return f({ kind: "chat-column-not-found", entryId: e });
  const o = d.withEntry(i.window, e, { ...i.node, lastActivityAt: n });
  return { ok: !0, data: h(t, i.window.id, o) };
}
function Ro(t, e) {
  const n = e.anchor;
  if (n.kind === "empty") return;
  const i = t.findIndex(
    (o) =>
      o.kind === "tab" && o.category === e.category && o.tab.id === n.entryId,
  );
  if (i !== -1) return n.kind === "before" ? i : i + 1;
}
function xo(t, e) {
  if (e.kind === "empty") return;
  const n = t.findIndex((i) => i.id === e.entryId);
  if (n !== -1) return e.kind === "before" ? n : n + 1;
}
function Vo(t, e, n) {
  const i = d.entry$1(t, e);
  if (!i) return f({ kind: "entry-not-found", entryId: e });
  if (!d.isTab(i.node)) return f({ kind: "entry-not-closable", entryId: e });
  const o = d.withoutEntry(i.window, e);
  if (n.kind === "group") {
    const w = d.group(o, n.groupId);
    if (!w) return { ok: !0, data: t };
    const k = xo(w.tabs, n.anchor),
      y = Math.max(0, Math.min(k ?? n.blockOffset, w.tabs.length)),
      b = i.node,
      p = d.withGroup(o, w.id, (v) => ({ ...v, tabs: A(v.tabs, b, y) }));
    return { ok: !0, data: h(t, i.window.id, p) };
  }
  const a = Ro(o.entries, n),
    c = fn(o.entries, n.globalOffset),
    s = n.category === "pinned" ? 0 : S(o.entries, "pinned"),
    u = S(o.entries, n.category),
    l = Math.max(s, Math.min(a ?? c, u)),
    I = A(o.entries, m(i.node, n.category), l);
  return { ok: !0, data: h(t, i.window.id, { ...o, entries: I }) };
}
function $o(t, e) {
  const n = Vo(t, e.entryId, e.placement);
  return !n.ok || e.order.kind === "manual"
    ? n
    : Ao(n.data, e.entryId, {
        ...e.order.override,
        scope:
          e.placement.kind === "category"
            ? { kind: "ordinary" }
            : { kind: "group", groupId: e.placement.groupId },
      });
}
function mn(t, e, n) {
  const i = d.window$1(t, e);
  if (!i) return f({ kind: "window-not-found", windowId: e });
  if (d.idIsTaken(t, n.groupId))
    return f({ kind: "duplicate-id", id: n.groupId });
  for (const l of n.tabIds) {
    if (!d.entry$1(t, l)) return f({ kind: "entry-not-found", entryId: l });
    const I = d.item(i, l);
    if (I?.item.kind !== "tab" || I.item.category !== "ordinary")
      return f({ kind: "entry-not-in-window", entryId: l, windowId: e });
  }
  const o = new Set(n.tabIds),
    a = i.entries.flatMap((l) =>
      l.kind === "tab" && o.has(l.tab.id) ? [l.tab] : [],
    ),
    c = {
      kind: "group",
      id: n.groupId,
      label: n.label,
      color: n.color,
      collapsed: !1,
      tabs: a,
    },
    s = i.entries.filter((l) => !(l.kind === "tab" && o.has(l.tab.id))),
    u = { ...i, entries: A(s, c, et(s, n.index)) };
  return { ok: !0, data: h(t, e, u) };
}
function mo(t, e) {
  const n = d.window$1(t, e.windowId);
  if (!n) return f({ kind: "window-not-found", windowId: e.windowId });
  if (e.target.kind === "new" && d.idIsTaken(t, e.target.groupId))
    return f({ kind: "duplicate-id", id: e.target.groupId });
  if (e.target.kind === "existing" && !d.group(n, e.target.groupId))
    return f({ kind: "group-not-found", groupId: e.target.groupId });
  const i = new Set();
  for (const b of e.entryIds) {
    if (i.has(b)) return f({ kind: "duplicate-id", id: b });
    i.add(b);
    const p = d.entry$1(t, b);
    if (!p) return f({ kind: "entry-not-found", entryId: b });
    const v = d.item(p.window, b);
    if (!d.isTab(p.node) || !v || !d.isStripItem(v.item))
      return f({
        kind: "entry-not-in-window",
        entryId: b,
        windowId: p.window.id,
      });
  }
  if (i.size === 0) return { ok: !0, data: t };
  let o = t;
  const a = new Set();
  for (const b of e.entryIds) {
    if (d.entry$1(o, b)?.window.id === e.windowId) continue;
    const p = lt(o, b, { windowId: e.windowId });
    if (!p.ok) return p;
    ((o = p.data), a.add(b));
  }
  const c = d.window$1(o, e.windowId);
  if (!c) return f({ kind: "window-not-found", windowId: e.windowId });
  const s = new Map();
  let u = c.entries.length;
  for (const [b, p] of c.entries.entries())
    for (const v of d.tabs(p)) {
      if (!i.has(v.id)) continue;
      const g = p.kind === "tab" && p.category === "pinned";
      (s.set(v.id, { node: g ? m(v, "ordinary").tab : v, index: b }),
        a.has(v.id) || (u = Math.min(u, b)));
    }
  const l = [...s.entries()].filter(([b]) => !a.has(b)),
    I = e.entryIds.flatMap((b) => {
      const p = a.has(b) ? s.get(b) : void 0;
      return p ? [p.node] : [];
    }),
    w = (b) => {
      if (b.kind === "tab") return i.has(b.tab.id) ? [] : [b];
      if (b.kind !== "group") return [b];
      const p = b.tabs.filter((v) => !i.has(v.id));
      return p.length === 0 ? [] : [{ ...b, tabs: p }];
    },
    k = e.target;
  let y;
  if (k.kind === "new") {
    const b = [];
    let p = S(c.entries, "ordinary");
    for (const [g, T] of c.entries.entries())
      (b.push(...w(T)), g === u && (p = b.length));
    const v = {
      kind: "group",
      id: k.groupId,
      label: k.label,
      color: k.color,
      collapsed: !1,
      tabs: [...l.map(([, g]) => g.node), ...I],
    };
    y = A(b, v, Math.max(S(b, "pinned"), p));
  } else {
    const b = d.group(c, k.groupId),
      p = d.item(c, b?.tabs[0]?.id ?? "")?.entryIndex ?? -1;
    y = c.entries.flatMap((v) => {
      if (v.kind !== "group" || v.id !== k.groupId) return w(v);
      const g = l.filter(([, W]) => W.index < p),
        T = l.filter(([, W]) => W.index > p);
      return [
        {
          ...v,
          tabs: [
            ...g.map(([, W]) => W.node),
            ...v.tabs,
            ...T.map(([, W]) => W.node),
            ...I,
          ],
        },
      ];
    });
  }
  return { ok: !0, data: h(o, e.windowId, { ...c, entries: y }) };
}
function Lo(t, e) {
  let n = t;
  for (const i of new Set(e)) {
    const o = d.entry$1(n, i);
    if (!o) return f({ kind: "entry-not-found", entryId: i });
    const a = d.item(o.window, i);
    if (a?.item.kind !== "group") continue;
    const c = a.item,
      s = c.tabs.findIndex((k) => k.id === i),
      u = m(c.tabs[s], "ordinary"),
      l = { ...c, tabs: c.tabs.filter((k) => k.id !== i) },
      I = s * 2 < c.tabs.length - 1,
      w = o.window.entries.flatMap((k) =>
        k !== c ? [k] : l.tabs.length === 0 ? [u] : I ? [u, l] : [l, u],
      );
    n = h(n, o.window.id, { ...o.window, entries: w });
  }
  return { ok: !0, data: n };
}
function Wo(t, e, n, i) {
  let o = t;
  const a = [];
  for (const s of i.tabs) {
    const u = R(o, e, n, {
      entryId: s.entryId,
      root: { kind: "page", pageId: s.pageId },
      page: s.page,
      activate: !1,
      occurredAt: i.occurredAt,
    });
    if (!u.ok) return u;
    ((o = u.data),
      u.pageChanges?.kind === "created" && a.push(...u.pageChanges.pages));
  }
  const c = mn(o, n, {
    groupId: i.groupId,
    label: i.label,
    color: i.color,
    tabIds: i.tabs.map((s) => s.entryId),
  });
  return c.ok ? { ...c, pageChanges: { kind: "created", pages: a } } : c;
}
function _o(t, e) {
  const n = d.group$1(t, e);
  if (!n) return f({ kind: "group-not-found", groupId: e });
  const { window: i } = n,
    o = i.entries.flatMap((a) =>
      a.kind !== "group" || a.id !== e
        ? [a]
        : a.tabs.map((c) => m(c, "ordinary")),
    );
  return { ok: !0, data: h(t, i.id, { ...i, entries: o }) };
}
function No(t, e, n) {
  const i = d.group$1(t, e);
  if (!i) return f({ kind: "group-not-found", groupId: e });
  const { window: o } = i,
    a = d.withGroup(o, e, (c) => ({
      ...c,
      ...(n.label === void 0 ? {} : { label: n.label }),
      ...(n.color === void 0 ? {} : { color: n.color }),
      ...(n.collapsed === void 0 ? {} : { collapsed: n.collapsed }),
    }));
  return { ok: !0, data: h(t, o.id, a) };
}
function Mo(t, e, n) {
  const i = d.group$1(t, e);
  if (!i) return f({ kind: "group-not-found", groupId: e });
  const { window: o } = i,
    a = d.withGroup(o, e, (c) => ({ ...c, label: n }));
  return { ok: !0, data: h(t, o.id, a) };
}
function Do(t, e, n) {
  const i = d.group$1(t, e);
  if (!i) return f({ kind: "group-not-found", groupId: e });
  const { window: o } = i,
    a = d.withGroup(o, e, (c) => ({ ...c, collapsed: n }));
  return { ok: !0, data: h(t, o.id, a) };
}
function Go(t, e) {
  const n = d.group$1(t, e.groupId);
  if (!n) return f({ kind: "group-not-found", groupId: e.groupId });
  const i = d.window$1(t, e.windowId);
  if (!i) return f({ kind: "window-not-found", windowId: e.windowId });
  const { before: o } = e;
  if (o !== void 0) {
    const u = d.item(i, o),
      l = u?.item.kind !== "group" || u.item.tabs[0]?.id === o,
      I = u?.item.kind === "group" && u.item.id === e.groupId;
    if (!u || !d.isStripItem(u.item) || !l || I)
      return f({
        kind: "entry-not-in-window",
        entryId: o,
        windowId: e.windowId,
      });
  }
  const a = (u) => {
    const l = u.entries.filter((k) => k.kind !== "group" || k.id !== e.groupId),
      I =
        o === void 0
          ? S(l, "ordinary")
          : l.findIndex((k) => d.tabs(k).some((y) => y.id === o)),
      w = A(l, n.group, Math.max(S(l, "pinned"), I));
    return { ...u, entries: w };
  };
  if (n.window.id === e.windowId)
    return { ok: !0, data: h(t, e.windowId, a(i)) };
  let c = t;
  for (const u of n.group.tabs) {
    const l = d.window$1(c, n.window.id);
    if (!l) break;
    c = nt(c, l, u.id);
  }
  const s = d.window$1(c, e.windowId);
  return s
    ? { ok: !0, data: h(c, e.windowId, a(s)) }
    : f({ kind: "window-not-found", windowId: e.windowId });
}
function Fo(t, e, n) {
  const i = d.group$1(t, e);
  if (!i) return f({ kind: "group-not-found", groupId: e });
  const { window: o } = i,
    { group: a } = i,
    c = o.entries.filter((u) => u.kind !== "group" || u.id !== e),
    s = A(c, a, et(c, n));
  return { ok: !0, data: h(t, o.id, { ...o, entries: s }) };
}
function Uo(t, e, n) {
  if (n.tabs.length === 0) return { ok: !0, data: t };
  const i = d.window$1(t, n.windowId),
    o = new Set(),
    a = [],
    c = [],
    s = new Map(),
    u = [];
  if (!i && d.idIsTaken(t, n.windowId))
    return f({ kind: "duplicate-id", id: n.windowId });
  o.add(n.windowId);
  for (const p of n.groups) {
    if (o.has(p.groupId) || d.idIsTaken(t, p.groupId))
      return f({ kind: "duplicate-id", id: p.groupId });
    (o.add(p.groupId),
      s.set(p.groupId, {
        kind: "group",
        id: p.groupId,
        label: p.label,
        color: "gray",
        collapsed: p.collapsed,
        tabs: [],
      }));
  }
  for (const p of n.tabs) {
    for (const g of [p.entryId, p.pageId]) {
      if (o.has(g) || d.idIsTaken(t, g))
        return f({ kind: "duplicate-id", id: g });
      o.add(g);
    }
    if (e.has(p.pageId)) return f({ kind: "duplicate-id", id: p.pageId });
    const v = ee(
      p.entryId,
      { kind: "page", pageId: p.pageId },
      p.page.detail.openedAt,
    );
    if ((u.push(L(p.pageId, p.page)), p.pinnedId))
      c.push({
        kind: "tab",
        category: "pinned",
        tab: { ...v, pinnedId: p.pinnedId },
      });
    else if (p.groupId) {
      const g = s.get(p.groupId);
      if (!g) return f({ kind: "group-not-found", groupId: p.groupId });
      (g.tabs.length === 0 && a.push(g), g.tabs.push(v));
    } else a.push({ kind: "tab", category: "ordinary", tab: v });
  }
  const l = c[0] ?? a[0],
    I = l && d.tabs(l)[0];
  if (!I) return { ok: !0, data: t };
  let w = i?.entries ?? [];
  const k = S(w, "pinned");
  w = [...w.slice(0, k), ...c, ...w.slice(k)];
  const y = S(w, "ordinary");
  w = [...w.slice(0, y), ...a, ...w.slice(y)];
  const b = {
    ...(i ?? { id: n.windowId, bounds: n.bounds, activeEntryId: I.id }),
    entries: w,
  };
  return {
    ok: !0,
    data: i ? h(t, b.id, b) : { ...t, windows: [...t.windows, b] },
    pageChanges: { kind: "created", pages: u },
  };
}
function Ln(t, e, n) {
  let i = t;
  const o = [];
  for (const s of n.tabs) {
    if (s.kind === "existing") continue;
    const u = R(i, e, n.windowId, {
      entryId: s.entryId,
      root: { kind: "page", pageId: s.pageId },
      activate: !1,
      page: s.page,
    });
    if (!u.ok) return u;
    ((i = u.data), o.push(L(s.pageId, s.page)));
  }
  const a = d.window$1(i, n.windowId);
  if (!a) return f({ kind: "window-not-found", windowId: n.windowId });
  const c = new Set(n.tabs.map((s) => s.entryId));
  for (const s of a.entries) {
    if (
      s.kind !== "tab" ||
      s.category !== "pinned" ||
      c.has(s.tab.id) ||
      s.tab.root.kind !== "page"
    )
      continue;
    const u = U(i, { entryId: s.tab.id, category: "ordinary" });
    if (!u.ok) return u;
    i = u.data;
  }
  for (const [s, u] of n.tabs.entries()) {
    const l = U(i, {
      entryId: u.entryId,
      category: "pinned",
      index: d.tabIndex(s),
      pinnedId: u.pinnedId,
    });
    if (!l.ok) return l;
    i = l.data;
  }
  return { ok: !0, data: i, pageChanges: o.length === 0 ? D : x(...o) };
}
function Ho(t, e, n) {
  let i = t;
  const o = new Map(e),
    a = [];
  for (const c of n) {
    const s = Ln(i, o, c);
    if (!s.ok) return s;
    if (((i = s.data), s.pageChanges?.kind === "created"))
      for (const u of s.pageChanges.pages)
        (a.push(u), o.set(u.summary.id, u.summary));
  }
  return { ok: !0, data: i, pageChanges: a.length === 0 ? D : x(...a) };
}
function Bo(t, e, n) {
  const i = d.window$1(t, n.windowId);
  if (!i) return f({ kind: "window-not-found", windowId: n.windowId });
  const o = d.activeEntry$1(i);
  if (!o) return f({ kind: "entry-not-found", entryId: i.activeEntryId });
  if (!("destination" in o))
    return f({ kind: "entry-not-rail", entryId: o.id });
  const a = n.returnEntryId
    ? d.entries(i).find((c) => c.id === n.returnEntryId && d.isTab(c))
    : void 0;
  return a
    ? { ok: !0, data: h(t, n.windowId, { ...i, activeEntryId: a.id }) }
    : _n(t, e, n.windowId, n.fallbackEntryId, n.occurredAt);
}
function Wn(t, e, n, i) {
  const o = d.window$1(t, e);
  if (!o) return f({ kind: "window-not-found", windowId: e });
  if (d.railEntry(o, n)) return { ok: !0, data: t };
  if (d.idIsTaken(t, i)) return f({ kind: "duplicate-id", id: i });
  const a = {
      kind: "rail",
      entry: {
        id: i,
        destination: n,
        layout: { kind: "root-full" },
        track: [],
      },
    },
    c = { ...o, entries: [...o.entries, a] };
  return { ok: !0, data: h(t, e, c) };
}
function Dt(t, e) {
  if (t.root.kind !== "page") return;
  const n = e.get(t.root.pageId)?.url;
  return n ? d.fixedRailDestinationForUrl(n) : void 0;
}
function _n(t, e, n, i, o) {
  const a = d.window$1(t, n);
  if (!a) return f({ kind: "window-not-found", windowId: n });
  const c = d.firstTab(a);
  return c
    ? a.activeEntryId === c.id
      ? { ok: !0, data: t }
      : { ok: !0, data: h(t, n, { ...a, activeEntryId: c.id }) }
    : R(t, e, n, { entryId: i, root: { kind: "newTab" }, occurredAt: o });
}
function Yo(t, e, n) {
  const i = d.window$1(t, n.windowId);
  if (!i) return f({ kind: "window-not-found", windowId: n.windowId });
  const o = d.activeEntry$1(i);
  if (!o || d.isTab(o)) return { ok: !0, data: t };
  const a = d.entries(i).find((s) => d.isTab(s) && Dt(s, e) === o.destination);
  if (a)
    return { ok: !0, data: h(t, n.windowId, { ...i, activeEntryId: a.id }) };
  const c = n.presentation.destinationSeeds[o.destination];
  return c
    ? R(t, e, n.windowId, {
        entryId: c.entryId,
        root: { kind: "page", pageId: c.pageId },
        page: c.page,
      })
    : f({ kind: "rail-page-seed-missing", destination: o.destination });
}
function zo(t, e) {
  let n,
    i = !1;
  const o = [],
    a = new Set(d.rail(t).map((s) => s.destination)),
    c = t.entries.flatMap((s) => {
      if (s.kind === "tab") {
        const l = Dt(s.tab, e);
        return !l || !a.has(l)
          ? [s]
          : ((i = !0),
            s.tab.id === t.activeEntryId && (n = l),
            o.push(s.tab),
            []);
      }
      if (s.kind !== "group") return [s];
      const u = s.tabs.filter((l) => {
        const I = Dt(l, e);
        return !I || !a.has(I)
          ? !0
          : (l.id === t.activeEntryId && (n = I), o.push(l), !1);
      });
      return (
        u.length !== s.tabs.length && (i = !0),
        u.length === 0 ? [] : [{ ...s, tabs: u }]
      );
    });
  return {
    window: i ? { ...t, entries: c } : t,
    removed: o,
    activeDestination: n,
  };
}
function Jo(t, e, n) {
  if (!t.ok || n.length === 0) return t;
  const i = new Set(n.map((o) => o.id));
  return {
    ...t,
    closed: [{ kind: "entries", windowId: e.id, entries: hn(e, i) }],
  };
}
function qo(t, e, n) {
  let i = t;
  for (const o of d.RAIL_DESTINATIONS) {
    const a = n[o];
    if (!a) continue;
    const c = Wn(i, e, o, a);
    if (!c.ok) return c;
    i = c.data;
  }
  return { ok: !0, data: i };
}
function Ko(t) {
  const e = d
      .stripTabs(t)
      .flatMap(({ tab: a, pinned: c }) =>
        d.isChatTab(a) ? [{ tab: a, pinned: c }] : [],
      ),
    n = ({ tab: a, pinned: c }) => (a.id === t.activeEntryId ? 0 : c ? 1 : 2),
    i = new Set();
  let o = t;
  for (const { tab: a } of [...e].sort((c, s) => n(c) - n(s))) {
    const c = Ht(a.root.column, (s) => !i.has(s.chatId));
    for (const s of c?.views ?? []) i.add(s.chatId);
    c !== a.root.column &&
      (o = c ? d.withEntry(o, a.id, q(a, c)) : d.withoutEntry(o, a.id));
  }
  return o;
}
function Xo(t) {
  const e = Ko(t);
  return e.tabLayout === "modern" ? e : { ...e, tabLayout: "modern" };
}
function Qo(t, e, n) {
  if (!t.ok) return t;
  const i = d.window$1(t.data, e);
  return !i || i.tabLayout === n
    ? t
    : { ...t, data: h(t.data, e, { ...i, tabLayout: n }) };
}
function Nn(t, e, n) {
  const { presentation: i } = n;
  if (i.kind === "classic")
    return Qo(Yo(t, e, { ...n, presentation: i }), n.windowId, "classic");
  const o = d.window$1(t, n.windowId);
  if (!o) return f({ kind: "window-not-found", windowId: n.windowId });
  const a = d.activeEntry$1(o),
    c = qo(t, n.windowId, i.railEntryIds);
  if (!c.ok) return c;
  const s = d.window$1(c.data, n.windowId);
  if (!s) return f({ kind: "window-not-found", windowId: n.windowId });
  const u = zo(s, e),
    l = i.kind === "modern" ? Xo(u.window) : u.window,
    I = (b) => Jo(b, s, u.removed),
    w = l === s ? c.data : h(c.data, n.windowId, l),
    k = (b) =>
      I({ ok: !0, data: h(w, n.windowId, { ...l, activeEntryId: b }) });
  if (u.activeDestination) {
    const b = d.railEntry(l, u.activeDestination);
    if (b) return k(b.id);
  }
  if (a && d.entry$2(l, a.id) !== void 0) return I({ ok: !0, data: w });
  const y = n.returnEntryId ? d.entry$2(l, n.returnEntryId) : void 0;
  return y ? k(y.id) : I(_n(w, e, n.windowId, n.fallbackEntryId, n.occurredAt));
}
function Zo(t, e, n) {
  let i = t;
  const o = new Map(e),
    a = [],
    c = [];
  for (const s of n) {
    const u = Nn(i, o, s);
    if (!u.ok) return u;
    if (((i = u.data), u.pageChanges?.kind === "created"))
      for (const l of u.pageChanges.pages)
        (a.push(l), o.set(l.summary.id, l.summary));
    u.closed && c.push(...u.closed);
  }
  return {
    ok: !0,
    data: i,
    pageChanges: a.length === 0 ? D : { kind: "created", pages: a },
    ...(c.length === 0 ? {} : { closed: c }),
  };
}
function td(t, e) {
  switch (e.kind) {
    case "moveGroupTo":
      return Go(t, e.args);
    case "moveActivitySidebarTab":
      return $o(t, e.args);
    case "setActiveEntry":
      return wn(t, e.windowId, e.entryId);
  }
}
function ed(t) {
  if (t.kind === "clearAccountChats") return Fi;
  if (t.kind === "restoreClosed") {
    const e = Lt(t.args);
    return (n) => (Lt(n) === e ? void 0 : n);
  }
  if (t.kind === "deleteChat") {
    const e = t.chatId;
    return (n) => ro(n, e);
  }
}
function nd(t) {
  return t.kind;
}
function fe(t, e, n) {
  return t.settle(id(t, e, n));
}
function id(t, e, n) {
  const i = { occurredAt: n },
    o = t.read.pages();
  switch (e.kind) {
    case "importBrowserTabs":
      return Uo(t.data, o, e.args);
    case "clearAccountChats":
      return Ui(t.data);
    case "deleteChat":
      return oo(t.data, o, e.chatId, i);
    case "newWindow":
      return Ar(t.data, o, { ...e.args, ...i });
    case "closeWindow":
      return vn(t.data, o, e.windowId);
    case "setWindowBounds":
      return Pr(t.data, e.windowId, e.bounds);
    case "newTab":
      return R(t.data, o, e.windowId, { ...e.args, ...i });
    case "newTabs":
      return Lr(t.data, o, e.windowId, { tabs: e.tabs, ...i });
    case "replaceNewTabWithPage":
      return Wr(t.data, o, e.entryId, e.args);
    case "replaceChatTabWithPage":
      return _r(t.data, o, e.entryId, e.args);
    case "replaceTabWithNewTab":
      return Nr(t.data, o, { ...e.args, ...i });
    case "setNewTabDraftState":
      return Mr(t.data, e.entryId, e.hasDraft);
    case "closeEntry":
      return P(t.data, o, e.entryId, {
        selection: e.selection,
        fallbackEntryId: e.fallbackEntryId,
        recentEntryIds: e.recentEntryIds,
        ...i,
      });
    case "closeActiveTab":
      return Gr(t.data, o, { ...e.args, ...i });
    case "closeEntries":
      return Fr(t.data, o, e.entryIds, {
        selection: e.selection,
        fallbackEntryId: e.fallbackEntryId,
        ...i,
      });
    case "restoreClosed":
      return Vr(t.data, o, e.args);
    case "setActiveEntry":
    case "moveGroupTo":
    case "moveActivitySidebarTab":
      return td(t.data, e);
    case "moveTab":
      return lt(t.data, e.entryId, e.target);
    case "moveGroup":
      return Fo(t.data, e.groupId, e.index);
    case "revealPage":
      return It(t.data, o, { ...e.args, ...i });
    case "selectAdjacentTab":
      return yr(t.data, e.windowId, e.direction);
    case "moveActiveTab":
      return hr(t.data, e.windowId, e.direction);
    case "dismissActiveRail":
      return Bo(t.data, o, { ...e.args, ...i });
    case "ensureRailEntry":
      return Wn(t.data, e.windowId, e.destination, e.entryId);
    case "moveTabs":
      return pr(t.data, e.args);
    case "recordChatTabActivity":
      return Po(t.data, e.entryId, e.at);
    case "reconcilePinnedTabs":
      return Ln(t.data, o, e.args);
    case "reconcilePinnedTabsAcrossWindows":
      return Ho(t.data, o, e.args);
    case "setTabCategory":
      return U(t.data, e);
    case "setTabsCategory":
      return kr(t.data, e);
    case "setTabCategoryAndActivate":
      return br(t.data, e.windowId, e);
    case "reconcileActivityPresentation":
      return Nn(t.data, o, { ...e, ...i });
    case "reconcileActivityPresentations":
      return Zo(
        t.data,
        o,
        e.args.map((a) => ({ ...a, ...i })),
      );
    case "createGroup":
      return mn(t.data, e.windowId, e.args);
    case "newPageGroup":
      return Wo(t.data, o, e.windowId, { ...e.args, ...i });
    case "groupTabs":
      return mo(t.data, e.args);
    case "ungroupTabs":
      return Lo(t.data, e.entryIds);
    case "dissolveGroup":
      return _o(t.data, e.groupId);
    case "updateGroup":
      return No(t.data, e.groupId, e.changes);
    case "renameGroup":
      return Mo(t.data, e.groupId, e.label);
    case "setGroupCollapsed":
      return Do(t.data, e.groupId, e.collapsed);
    case "detachEntryToWindow":
      return Rr(t.data, e.args);
    case "placeExistingPage":
      return gr(t.data, o, e.entryId, e.args);
    case "createAndPlacePage":
      return Er(t.data, o, e.entryId, e.args);
    case "moveTabBesideActivePage":
      return jn(t.data, e.args);
    case "openPageBesideTab":
      return lo(t.data, o, e.args);
    case "separateTabSplit":
      return An(t.data, e.args);
    case "closeTabSplitSide":
      return fo(t.data, o, { ...e.args, ...i });
    case "createPage":
      return Ji(t.data, o, e.pageId, e.page);
    case "deletePage":
      return qi(t.data, o, e.pageId);
    case "closeSlot":
      return kn(t.data, e.slotId);
    case "presentSlot":
      return ie(t.data, e.entryId, e.slotId);
    case "presentEntrySlot":
      return bn(t.data, e.windowId, e.entryId, e.slotId);
    case "setLayout":
      return J(t.data, e.entryId, e.layout);
    case "setColumnRatio":
      return Sr(t.data, e.entryId, e.ratio);
    case "splitSlot":
      return Io(t.data, e.slotId, e.args);
    case "fillChooser":
      return wo(t.data, o, e.paneId, e.pageId);
    case "setFocusedPane":
      return ce(t.data, e.slotId, e.paneId);
    case "focusPagePane":
      return po(t.data, e.windowId, e.pageId);
    case "setSplitRatio":
      return ko(t.data, e.slotId, e.ratio);
    case "closePane":
      return Rn(t.data, e.paneId);
    case "openChatTab":
      return En(t.data, o, e.windowId, { ...e.args, ...i });
    case "replaceTabWithChat":
      return Zr(t.data, o, { ...e.args, ...i });
    case "openChatInColumn":
      return to(t.data, e.args);
    case "replaceChatView":
      return eo(t.data, e.args);
    case "selectChatView":
      return Ot(t.data, e.args);
    case "selectChatViewAndActivateEntry":
      return no(t.data, e.windowId, e.args);
    case "closeChatView":
      return ae(t.data, o, { ...e.args, ...i });
    case "reorderChatView":
      return Sn(t.data, e.args);
    case "moveChatView":
      return io(t.data, o, { ...e.args, ...i });
    case "createAndPlacePageInChat":
      return Eo(t.data, o, e.args);
    case "createPageInChat": {
      const a = se(t.data, o, e.chatId, e.args);
      if (!a.ok || !e.reveal) return a;
      const c = It(a.data, o, { ...e.reveal, pageId: e.args.pageId, ...i });
      return c.ok ? { ...a, data: c.data } : c;
    }
    case "presentChatViewSlot":
      return Vn(t.data, e.args);
    case "revealChatViewSlot":
      return ue(t.data, e.windowId, e.args);
    case "clearChatViewPresentation":
      return le(t.data, e.args);
    case "closeChatViewSlot":
      return So(t.data, e.args);
    case "addPageToChat":
      return go(t.data, o, e.chatId, e.pageId, e.args);
    case "openChatSidebar":
      return oe(t.data, e.entryId, e.sidebar, e.chatState);
    case "markChatReady":
      return vo(t.data, e.chatId);
    case "showChatInSidebar":
      return zr(t.data, e);
    case "closeChatSidebar":
      return qr(t.data, e.entryId);
    case "clearPinnedChatSidebars":
      return Jr(t.data);
    case "setChatSidebarSide":
      return Kr(t.data, e.entryId, e.side);
    case "showChatSidebarSideBySide":
      return Xr(t.data, e.entryId);
    case "setChatSidebarRatio":
      return Qr(t.data, e.entryId, e.ratio);
    default: {
      const a = e;
      throw new Error(`unhandled layout command: ${nd(a)}`);
    }
  }
}
const C = (t) => r.pipe(r.array(t), r.readonly()),
  Ct = r.optional(r.number()),
  Te = r.strictObject({
    windowId: d.WindowId,
    chatTab: r.strictObject({ entryId: d.EntryId, viewId: d.ChatViewId }),
  }),
  jt = r.strictObject({
    recentEntryIds: r.array(d.EntryId),
    returnToRecent: r.boolean(),
    tabOrder: r.optional(r.array(d.EntryId)),
  }),
  B = r.strictObject(_e.entries),
  $ = r.strictObject({ detail: B, initialEntry: r.optional(M) }),
  V = r.strictObject({
    entryId: d.EntryId,
    pageId: d.PageId,
    page: r.strictObject({ detail: B, initialEntry: M }),
  }),
  rd = r.strictObject({
    chatHistory: V,
    routines: V,
    workspace: V,
    apps: V,
    skills: r.optional(V),
    databases: r.optional(V),
    timeline: r.optional(V),
    meetings: r.optional(V),
  }),
  At = r.strictObject({
    chatHistory: d.EntryId,
    routines: d.EntryId,
    workspace: d.EntryId,
    apps: d.EntryId,
    skills: r.optional(d.EntryId),
    databases: r.optional(d.EntryId),
    timeline: r.optional(d.EntryId),
    meetings: r.optional(d.EntryId),
  }),
  od = r.variant("kind", [
    r.strictObject({ kind: r.literal("window"), window: Kt }),
    r.strictObject({
      kind: r.literal("entries"),
      into: d.WindowId,
      entries: C(rn),
    }),
  ]),
  Pt = r.strictObject({
    entryId: d.EntryId,
    root: Ai,
    index: r.optional(d.TabIndex),
    groupId: r.optional(d.GroupId),
    activate: r.optional(r.boolean()),
    page: r.optional($),
  }),
  dd = r.variant("kind", [
    r.strictObject({
      kind: r.literal("existing"),
      entryId: d.EntryId,
      pinnedId: r.string(),
    }),
    r.strictObject({
      kind: r.literal("new-page"),
      entryId: d.EntryId,
      pageId: d.PageId,
      pinnedId: r.string(),
      page: $,
    }),
  ]),
  Ce = r.strictObject({ windowId: d.WindowId, tabs: C(dd) }),
  je = r.union([
    r.strictObject({ kind: r.literal("classic"), destinationSeeds: rd }),
    r.strictObject({ kind: r.literal("modern"), railEntryIds: At }),
    r.strictObject({ kind: r.literal("activity-tabs"), railEntryIds: At }),
    r.pipe(
      r.strictObject({
        kind: r.literal("activity-tabs-and-chats"),
        railEntryIds: At,
        chatEntries: r.array(
          r.strictObject({
            entryId: d.EntryId,
            viewId: d.ChatViewId,
            chatId: d.ChatId,
          }),
        ),
      }),
      r.transform(({ railEntryIds: t }) => ({
        kind: "activity-tabs",
        railEntryIds: t,
      })),
    ),
  ]),
  Mn = [
    r.strictObject({
      kind: r.literal("importBrowserTabs"),
      args: r.strictObject({
        windowId: d.WindowId,
        bounds: N,
        tabs: C(
          r.strictObject({
            entryId: d.EntryId,
            pageId: d.PageId,
            page: $,
            pinnedId: r.optional(r.string()),
            groupId: r.optional(d.GroupId),
          }),
        ),
        groups: C(
          r.strictObject({
            groupId: d.GroupId,
            label: r.string(),
            collapsed: r.boolean(),
          }),
        ),
      }),
    }),
    r.strictObject({ kind: r.literal("clearAccountChats") }),
    r.strictObject({ kind: r.literal("deleteChat"), chatId: d.ChatId }),
    r.strictObject({
      kind: r.literal("newWindow"),
      args: r.strictObject({
        windowId: d.WindowId,
        bounds: N,
        tab: r.union([
          r.strictObject({
            entryId: d.EntryId,
            root: r.strictObject({ kind: r.literal("newTab") }),
          }),
          r.strictObject({
            entryId: d.EntryId,
            root: r.strictObject({ kind: r.literal("page"), pageId: d.PageId }),
            page: r.optional($),
          }),
          r.strictObject({
            entryId: d.EntryId,
            root: r.strictObject({ kind: r.literal("chat"), column: Q }),
          }),
        ]),
      }),
    }),
    r.strictObject({ kind: r.literal("closeWindow"), windowId: d.WindowId }),
    r.strictObject({
      kind: r.literal("setWindowBounds"),
      windowId: d.WindowId,
      bounds: N,
    }),
    r.strictObject({
      kind: r.literal("newTab"),
      windowId: d.WindowId,
      args: Pt,
    }),
    r.strictObject({
      kind: r.literal("newTabs"),
      windowId: d.WindowId,
      tabs: C(Pt),
    }),
    r.strictObject({
      kind: r.literal("setNewTabDraftState"),
      entryId: d.EntryId,
      hasDraft: r.boolean(),
    }),
    r.strictObject({
      kind: r.literal("closeEntry"),
      entryId: d.EntryId,
      selection: r.optional(jt),
      fallbackEntryId: r.optional(d.EntryId),
      recentEntryIds: r.optional(r.array(d.EntryId)),
    }),
    r.strictObject({
      kind: r.literal("closeActiveTab"),
      args: r.strictObject({
        windowId: d.WindowId,
        fallbackEntryId: d.EntryId,
        recentEntryIds: r.optional(r.array(d.EntryId)),
        repeat: r.optional(r.pipe(r.number(), r.integer(), r.minValue(1))),
        selection: r.optional(jt),
      }),
    }),
    r.strictObject({
      kind: r.literal("closeEntries"),
      entryIds: r.array(d.EntryId),
      selection: r.optional(jt),
      fallbackEntryId: r.optional(d.EntryId),
    }),
    r.strictObject({ kind: r.literal("restoreClosed"), args: od }),
    r.strictObject({
      kind: r.literal("replaceNewTabWithPage"),
      entryId: d.EntryId,
      args: r.strictObject({ pageId: d.PageId, page: $ }),
    }),
    r.strictObject({
      kind: r.literal("replaceChatTabWithPage"),
      entryId: d.EntryId,
      args: r.strictObject({ pageId: d.PageId, page: $ }),
    }),
    r.strictObject({
      kind: r.literal("replaceTabWithNewTab"),
      args: r.strictObject({
        source: r.variant("kind", [
          r.strictObject({
            kind: r.literal("new-tab-or-promoted-page"),
            entryId: d.EntryId,
          }),
          r.strictObject({
            kind: r.literal("page"),
            entryId: d.EntryId,
            pageId: d.PageId,
          }),
          r.strictObject({ kind: r.literal("chat"), entryId: d.EntryId }),
        ]),
        entryId: d.EntryId,
      }),
    }),
    r.strictObject({
      kind: r.literal("setActiveEntry"),
      windowId: d.WindowId,
      entryId: d.EntryId,
    }),
    r.strictObject({
      kind: r.literal("revealPage"),
      args: r.strictObject({
        ...Te.entries,
        pageId: d.PageId,
        from: r.optional(
          r.strictObject({
            column: E,
            viewId: d.ChatViewId,
            toggle: r.optional(r.boolean()),
          }),
        ),
      }),
    }),
    r.strictObject({
      kind: r.literal("selectAdjacentTab"),
      windowId: d.WindowId,
      direction: r.picklist(["next", "previous"]),
    }),
    r.strictObject({
      kind: r.literal("moveActiveTab"),
      windowId: d.WindowId,
      direction: r.picklist(["left", "right"]),
    }),
    r.strictObject({
      kind: r.literal("dismissActiveRail"),
      args: r.strictObject({
        windowId: d.WindowId,
        returnEntryId: r.optional(d.EntryId),
        fallbackEntryId: d.EntryId,
      }),
    }),
    r.strictObject({
      kind: r.literal("ensureRailEntry"),
      windowId: d.WindowId,
      destination: Et,
      entryId: d.EntryId,
    }),
    r.strictObject({
      kind: r.literal("moveTab"),
      entryId: d.EntryId,
      target: r.strictObject({
        windowId: d.WindowId,
        index: r.optional(d.TabIndex),
        groupId: r.optional(d.GroupId),
      }),
    }),
    r.strictObject({
      kind: r.literal("moveTabs"),
      args: r.strictObject({
        entryIds: C(d.EntryId),
        target: r.variant("kind", [
          r.strictObject({
            kind: r.literal("group"),
            windowId: d.WindowId,
            groupId: d.GroupId,
          }),
          r.strictObject({ kind: r.literal("strip"), windowId: d.WindowId }),
        ]),
      }),
    }),
    r.strictObject({
      kind: r.literal("recordChatTabActivity"),
      entryId: d.EntryId,
      at: r.number(),
    }),
    r.strictObject({
      kind: r.literal("moveActivitySidebarTab"),
      args: r.strictObject({
        entryId: d.EntryId,
        placement: r.variant("kind", [
          r.strictObject({
            kind: r.literal("category"),
            category: _,
            globalOffset: r.number(),
            blockOffset: r.number(),
            anchor: r.variant("kind", [
              r.strictObject({ kind: r.literal("before"), entryId: d.EntryId }),
              r.strictObject({ kind: r.literal("after"), entryId: d.EntryId }),
              r.strictObject({ kind: r.literal("empty") }),
            ]),
          }),
          r.strictObject({
            kind: r.literal("group"),
            category: r.literal("ordinary"),
            groupId: d.GroupId,
            globalOffset: r.number(),
            blockOffset: r.number(),
            anchor: r.variant("kind", [
              r.strictObject({ kind: r.literal("before"), entryId: d.EntryId }),
              r.strictObject({ kind: r.literal("after"), entryId: d.EntryId }),
              r.strictObject({ kind: r.literal("empty") }),
            ]),
          }),
        ]),
        order: r.variant("kind", [
          r.strictObject({ kind: r.literal("manual") }),
          r.strictObject({
            kind: r.literal("recent"),
            override: r.strictObject({
              sortAt: r.number(),
              sourceActivityAt: r.number(),
            }),
          }),
        ]),
      }),
    }),
    r.strictObject({ kind: r.literal("reconcilePinnedTabs"), args: Ce }),
    r.strictObject({
      kind: r.literal("reconcilePinnedTabsAcrossWindows"),
      args: C(Ce),
    }),
    r.strictObject({
      kind: r.literal("setTabCategory"),
      entryId: d.EntryId,
      category: _,
      index: r.optional(d.TabIndex),
      pinnedId: r.optional(r.string()),
    }),
    r.strictObject({
      kind: r.literal("setTabsCategory"),
      entries: C(
        r.strictObject({
          entryId: d.EntryId,
          pinnedId: r.optional(r.string()),
        }),
      ),
      category: _,
    }),
    r.strictObject({
      kind: r.literal("setTabCategoryAndActivate"),
      windowId: d.WindowId,
      entryId: d.EntryId,
      category: _,
      index: r.optional(d.TabIndex),
      pinnedId: r.optional(r.string()),
    }),
    r.strictObject({
      kind: r.literal("reconcileActivityPresentation"),
      windowId: d.WindowId,
      presentation: je,
      fallbackEntryId: d.EntryId,
    }),
    r.strictObject({
      kind: r.literal("reconcileActivityPresentations"),
      args: C(
        r.pipe(
          r.strictObject({
            windowId: d.WindowId,
            presentation: je,
            fallbackEntryId: d.EntryId,
            returnEntryId: r.optional(d.EntryId),
            chatNeighborFirst: r.optional(r.boolean()),
          }),
          r.transform(({ chatNeighborFirst: t, ...e }) => e),
        ),
      ),
    }),
    r.strictObject({
      kind: r.literal("createGroup"),
      windowId: d.WindowId,
      args: r.strictObject({
        groupId: d.GroupId,
        label: r.string(),
        color: F,
        tabIds: r.array(d.EntryId),
        index: r.optional(d.TabIndex),
      }),
    }),
    r.strictObject({
      kind: r.literal("groupTabs"),
      args: r.strictObject({
        windowId: d.WindowId,
        entryIds: C(d.EntryId),
        target: r.variant("kind", [
          r.strictObject({
            kind: r.literal("new"),
            groupId: d.GroupId,
            label: r.string(),
            color: F,
          }),
          r.strictObject({ kind: r.literal("existing"), groupId: d.GroupId }),
        ]),
      }),
    }),
    r.strictObject({ kind: r.literal("ungroupTabs"), entryIds: C(d.EntryId) }),
    r.strictObject({ kind: r.literal("dissolveGroup"), groupId: d.GroupId }),
    r.strictObject({
      kind: r.literal("newPageGroup"),
      windowId: d.WindowId,
      args: r.strictObject({
        groupId: d.GroupId,
        label: r.string(),
        color: F,
        tabs: r.pipe(
          r.array(
            r.strictObject({ entryId: d.EntryId, pageId: d.PageId, page: $ }),
          ),
          r.minLength(1),
        ),
      }),
    }),
    r.strictObject({
      kind: r.literal("updateGroup"),
      groupId: d.GroupId,
      changes: r.strictObject({
        label: r.optional(r.string()),
        color: r.optional(F),
        collapsed: r.optional(r.boolean()),
      }),
    }),
    r.strictObject({
      kind: r.literal("renameGroup"),
      groupId: d.GroupId,
      label: r.string(),
    }),
    r.strictObject({
      kind: r.literal("setGroupCollapsed"),
      groupId: d.GroupId,
      collapsed: r.boolean(),
    }),
    r.strictObject({
      kind: r.literal("moveGroup"),
      groupId: d.GroupId,
      index: r.number(),
    }),
    r.strictObject({
      kind: r.literal("moveGroupTo"),
      args: r.strictObject({
        groupId: d.GroupId,
        windowId: d.WindowId,
        before: r.optional(d.EntryId),
      }),
    }),
    r.strictObject({
      kind: r.literal("detachEntryToWindow"),
      args: r.strictObject({
        entryId: d.EntryId,
        windowId: d.WindowId,
        bounds: N,
      }),
    }),
    r.strictObject({
      kind: r.literal("placeExistingPage"),
      entryId: d.EntryId,
      args: r.strictObject({
        slotId: d.SlotId,
        pageId: d.PageId,
        index: Ct,
        present: r.optional(r.boolean()),
      }),
    }),
    r.strictObject({
      kind: r.literal("createAndPlacePage"),
      entryId: d.EntryId,
      args: r.strictObject({
        slotId: d.SlotId,
        pageId: d.PageId,
        detail: B,
        initialEntry: r.optional(M),
        index: Ct,
        present: r.optional(r.boolean()),
      }),
    }),
    r.strictObject({
      kind: r.literal("createPage"),
      pageId: d.PageId,
      page: $,
    }),
    r.strictObject({ kind: r.literal("deletePage"), pageId: d.PageId }),
    r.strictObject({
      kind: r.literal("moveTabBesideActivePage"),
      args: r.strictObject({
        windowId: d.WindowId,
        entryId: d.EntryId,
        receiverEntryId: d.EntryId,
        slotId: d.SlotId,
        side: r.picklist(["left", "right"]),
      }),
    }),
    r.strictObject({
      kind: r.literal("openPageBesideTab"),
      args: r.strictObject({
        windowId: d.WindowId,
        receiverEntryId: d.EntryId,
        slotId: d.SlotId,
        side: r.picklist(["left", "right"]),
        tab: Pt,
      }),
    }),
    r.strictObject({
      kind: r.literal("separateTabSplit"),
      args: r.strictObject({ entryId: d.EntryId, newEntryId: d.EntryId }),
    }),
    r.strictObject({
      kind: r.literal("closeTabSplitSide"),
      args: r.strictObject({
        entryId: d.EntryId,
        newEntryId: d.EntryId,
        side: r.picklist(["root", "track"]),
      }),
    }),
    r.strictObject({ kind: r.literal("closeSlot"), slotId: d.SlotId }),
    r.strictObject({
      kind: r.literal("presentSlot"),
      entryId: d.EntryId,
      slotId: d.SlotId,
    }),
    r.strictObject({
      kind: r.literal("presentEntrySlot"),
      windowId: d.WindowId,
      entryId: d.EntryId,
      slotId: d.SlotId,
    }),
    r.strictObject({
      kind: r.literal("setLayout"),
      entryId: d.EntryId,
      layout: X,
    }),
    r.strictObject({
      kind: r.literal("setColumnRatio"),
      entryId: d.EntryId,
      ratio: d.Ratio,
    }),
    r.strictObject({
      kind: r.literal("splitSlot"),
      slotId: d.SlotId,
      args: r.strictObject({
        axis: Ge,
        firstPaneId: d.PaneId,
        chooserPaneId: d.PaneId,
      }),
    }),
    r.strictObject({
      kind: r.literal("fillChooser"),
      paneId: d.PaneId,
      pageId: d.PageId,
    }),
    r.strictObject({
      kind: r.literal("setFocusedPane"),
      slotId: d.SlotId,
      paneId: d.PaneId,
    }),
    r.strictObject({
      kind: r.literal("focusPagePane"),
      windowId: d.WindowId,
      pageId: d.PageId,
    }),
    r.strictObject({
      kind: r.literal("setSplitRatio"),
      slotId: d.SlotId,
      ratio: d.Ratio,
    }),
    r.strictObject({ kind: r.literal("closePane"), paneId: d.PaneId }),
    r.strictObject({
      kind: r.literal("openChatTab"),
      windowId: d.WindowId,
      args: r.strictObject({
        entryId: d.EntryId,
        viewId: d.ChatViewId,
        chatId: d.ChatId,
        category: r.optional(_),
        index: r.optional(d.TabIndex),
        activate: r.optional(r.boolean()),
        presentedSlotId: r.optional(d.SlotId),
      }),
    }),
    r.strictObject({
      kind: r.literal("replaceTabWithChat"),
      args: r.strictObject({
        sourceEntryId: d.EntryId,
        entryId: d.EntryId,
        viewId: d.ChatViewId,
        chatId: d.ChatId,
      }),
    }),
    r.strictObject({
      kind: r.literal("openChatInColumn"),
      args: r.strictObject({
        column: E,
        viewId: d.ChatViewId,
        chatId: d.ChatId,
        index: Ct,
      }),
    }),
    r.strictObject({
      kind: r.literal("selectChatView"),
      args: r.strictObject({ column: E, viewId: d.ChatViewId }),
    }),
    r.strictObject({
      kind: r.literal("selectChatViewAndActivateEntry"),
      windowId: d.WindowId,
      args: r.strictObject({
        column: E,
        viewId: d.ChatViewId,
        openSidebar: r.optional(r.boolean()),
      }),
    }),
    r.strictObject({
      kind: r.literal("closeChatView"),
      args: r.strictObject({
        column: E,
        viewId: d.ChatViewId,
        fallbackEntryId: d.EntryId,
      }),
    }),
    r.strictObject({
      kind: r.literal("reorderChatView"),
      args: r.strictObject({
        column: E,
        viewId: d.ChatViewId,
        index: r.number(),
      }),
    }),
    r.strictObject({
      kind: r.literal("moveChatView"),
      args: r.strictObject({
        source: E,
        target: E,
        viewId: d.ChatViewId,
        index: r.number(),
        fallbackEntryId: d.EntryId,
      }),
    }),
    r.strictObject({
      kind: r.literal("createAndPlacePageInChat"),
      args: r.strictObject({
        column: E,
        viewId: d.ChatViewId,
        expectedChatId: d.ChatId,
        slotId: d.SlotId,
        pageId: d.PageId,
        detail: B,
        initialEntry: r.optional(M),
        present: r.optional(r.boolean()),
      }),
    }),
    r.strictObject({
      kind: r.literal("createPageInChat"),
      chatId: d.ChatId,
      reveal: r.optional(Te),
      args: r.strictObject({
        slotId: d.SlotId,
        pageId: d.PageId,
        detail: B,
        initialEntry: r.optional(M),
      }),
    }),
    r.strictObject({
      kind: r.literal("presentChatViewSlot"),
      args: r.strictObject({
        column: E,
        viewId: d.ChatViewId,
        slotId: d.SlotId,
      }),
    }),
    r.strictObject({
      kind: r.literal("revealChatViewSlot"),
      windowId: d.WindowId,
      args: r.strictObject({
        column: E,
        viewId: d.ChatViewId,
        slotId: d.SlotId,
      }),
    }),
    r.strictObject({
      kind: r.literal("closeChatViewSlot"),
      args: r.strictObject({
        column: E,
        viewId: d.ChatViewId,
        slotId: d.SlotId,
      }),
    }),
    r.strictObject({
      kind: r.literal("clearChatViewPresentation"),
      args: r.strictObject({ column: E, viewId: d.ChatViewId }),
    }),
    r.strictObject({
      kind: r.literal("addPageToChat"),
      chatId: d.ChatId,
      pageId: d.PageId,
      args: r.strictObject({ slotId: d.SlotId }),
    }),
    r.strictObject({
      kind: r.literal("showChatInSidebar"),
      entryId: d.EntryId,
      viewId: d.ChatViewId,
      chatId: d.ChatId,
      side: st,
      ratio: d.Ratio,
    }),
    r.strictObject({ kind: r.literal("closeChatSidebar"), entryId: d.EntryId }),
    r.strictObject({ kind: r.literal("clearPinnedChatSidebars") }),
    r.strictObject({
      kind: r.literal("setChatSidebarSide"),
      entryId: d.EntryId,
      side: st,
    }),
    r.strictObject({
      kind: r.literal("showChatSidebarSideBySide"),
      entryId: d.EntryId,
    }),
    r.strictObject({
      kind: r.literal("setChatSidebarRatio"),
      entryId: d.EntryId,
      ratio: d.Ratio,
    }),
  ],
  Dn = {
    kind: r.literal("openChatSidebar"),
    entryId: d.EntryId,
    sidebar: r.optional(
      r.strictObject({ column: Q, side: st, ratio: d.Ratio }),
    ),
  },
  Gn = {
    column: E,
    viewId: d.ChatViewId,
    expectedChatId: d.ChatId,
    chatId: d.ChatId,
  },
  ad = r.variant("kind", [
    ...Mn,
    r.strictObject({ ...Dn, chatState: r.optional(Vt) }),
    r.strictObject({
      kind: r.literal("replaceChatView"),
      args: r.strictObject({ ...Gn, chatState: r.optional(Vt) }),
    }),
    r.strictObject({ kind: r.literal("markChatReady"), chatId: d.ChatId }),
  ]),
  cd = r.variant("kind", [
    ...Mn,
    r.strictObject(Dn),
    r.strictObject({
      kind: r.literal("replaceChatView"),
      args: r.strictObject(Gn),
    }),
  ]);
function sd(t) {
  const e = r.safeParse(cd, t);
  return e.success
    ? { ok: !0, command: e.output }
    : { ok: !1, issues: yt(e.issues) };
}
const ud = r.looseObject({ formatVersion: r.number() }),
  ld = r.looseObject({
    formatVersion: r.literal(5),
    command: r.looseObject({
      kind: r.literal("createAndPlacePageInChat"),
      args: r.looseObject({ column: E, viewId: d.ChatViewId }),
    }),
  });
function fd(t, e) {
  const n = { ...e, formatVersion: 6 },
    i = r.safeParse(ld, e);
  if (!i.success) return n;
  const { column: o, viewId: a } = i.output.command.args,
    c = d.column(t.data, o)?.column,
    s = c ? d.view(c, a) : void 0;
  return s
    ? {
        ...i.output,
        formatVersion: 6,
        command: {
          ...i.output.command,
          args: { ...i.output.command.args, expectedChatId: s.chatId },
        },
      }
    : n;
}
function Id(t) {
  return { ...t, formatVersion: 7, occurredAt: 0 };
}
function wd(t) {
  return { ...t, formatVersion: 8 };
}
const pd = r.object({
    id: d.GroupId,
    label: r.string(),
    color: F,
    collapsed: r.boolean(),
  }),
  kd = r.object({
    entryId: r.string(),
    category: _,
    placement: Di,
    pages: r.array(r.object(ht.entries)),
    group: r.optional(pd),
  }),
  wt = r.object({
    windowId: d.WindowId,
    entries: r.array(kd),
    savedWindow: r.optional(r.object({ id: d.WindowId, bounds: N })),
  });
function Ie(t) {
  const e = [];
  for (const o of t.entries) {
    if (!o.group) {
      e.push({ kind: "tab", tab: o.placement, category: o.category });
      continue;
    }
    const a = o.group,
      c = e.find((s) => s.kind === "group" && s.id === a.id);
    if (c?.kind === "group") {
      c.tabs.push(o.placement);
      continue;
    }
    e.push({ kind: "group", ...a, tabs: [o.placement] });
  }
  const n = e.sort((o, a) => Ae(o) - Ae(a));
  if (!t.savedWindow)
    return { kind: "entries", windowId: t.windowId, entries: n };
  const i = t.entries.at(-1);
  if (i)
    return {
      kind: "window",
      window: { ...t.savedWindow, entries: n, activeEntryId: i.placement.id },
    };
}
function Ae(t) {
  return t.kind === "tab" && t.category === "pinned" ? 0 : 1;
}
const bd = r.looseObject({
    closedResult: r.optional(wt),
    closedResults: r.optional(r.array(wt)),
    command: r.looseObject({ kind: r.string() }),
  }),
  yd = r.looseObject({
    kind: r.literal("restoreClosedEntries"),
    args: r.object({ targetWindowId: d.WindowId, record: wt }),
  });
function hd(t) {
  const e = r.safeParse(bd, t);
  if (!e.success) return { ...t, formatVersion: 9 };
  const { closedResult: n, closedResults: i, ...o } = e.output,
    a = [...(n ? [n] : []), ...(i ?? [])].flatMap((u) => {
      const l = Ie(u);
      return l ? [l] : [];
    }),
    c = r.safeParse(yd, o.command),
    s = c.success
      ? { kind: "restoreClosed", args: vd(c.output.args) }
      : o.command;
  return {
    ...o,
    formatVersion: 9,
    command: s,
    ...(a.length ? { closed: a } : {}),
  };
}
function vd(t) {
  const e = Ie(t.record);
  return e?.kind === "window"
    ? e
    : { kind: "entries", into: t.targetWindowId, entries: e?.entries ?? [] };
}
function gd(t, e, n) {
  const i = t.read.pages();
  if (e.kind === "revealPage")
    return t.settle(Pe(t.data, i, { ...e.args, occurredAt: n }));
  if (e.kind === "createPageInChat" && e.reveal) {
    const o = se(t.data, i, e.chatId, e.args);
    if (!o.ok) return t.settle(o);
    const a = Pe(o.data, i, {
      ...e.reveal,
      pageId: e.args.pageId,
      occurredAt: n,
    });
    return a.ok ? t.settle({ ...o, data: a.data }) : t.settle(a);
  }
  return fe(t, e, n);
}
function Pe(t, e, n) {
  const i = d.pageEntry(t, n.pageId) ? void 0 : d.pageInTrack(t, n.pageId);
  if (i?.presenter.kind !== "chat-view") return It(t, e, n);
  const { column: o, viewId: a } = i.presenter;
  if (o.kind === "root")
    return It(t, e, { ...n, from: { column: o, viewId: a } });
  const c = J(t, o.entryId, { kind: "root-full" });
  if (!c.ok) return c;
  const s = ue(c.data, i.window.id, {
    column: o,
    viewId: a,
    slotId: i.placement.slotId,
  });
  return !s.ok || i.placement.kind === "slot"
    ? s
    : ce(s.data, i.placement.slotId, i.placement.paneId);
}
const Ed = r.object({
    windows: r.array(
      r.object({
        id: d.WindowId,
        activeEntryId: d.EntryId,
        entries: r.array(
          r.looseObject({
            kind: r.string(),
            entry: r.optional(r.looseObject({ id: r.string() })),
          }),
        ),
      }),
    ),
  }),
  Sd = r.object({
    kind: r.literal("chat"),
    entry: r.object({
      id: r.string(),
      column: r.object({ views: r.array(r.object({ id: r.string() })) }),
    }),
  }),
  Od = r.object({
    kind: r.literal("activity-tabs-and-chats"),
    chatEntries: r.array(r.object({ entryId: r.string(), viewId: r.string() })),
  });
function pt(t, e) {
  if (Array.isArray(t)) {
    for (const o of t) pt(o, e);
    return;
  }
  if (typeof t != "object" || t === null) return;
  const n = r.safeParse(Sd, t);
  if (n.success) {
    e.add(n.output.entry.id);
    for (const o of n.output.entry.column.views) e.add(o.id);
    return;
  }
  const i = r.safeParse(Od, t);
  if (i.success) {
    for (const { entryId: o, viewId: a } of i.output.chatEntries)
      (e.add(o), e.add(a));
    return;
  }
  for (const o of Object.values(t)) pt(o, e);
}
function Td(t) {
  return Object.entries(t).flatMap(([e, n]) =>
    e !== "kind" && typeof n == "string" ? [n] : [],
  );
}
function Re(t) {
  if (t.kind === "setActiveEntry")
    return { windowId: t.windowId, entryId: t.entryId };
  if (t.kind === "selectChatViewAndActivateEntry")
    return { windowId: t.windowId, entryId: t.args.column.entryId };
}
class Fn {
  #t = new Map();
  #e = new Set();
  constructor(e) {
    pt(e, this.#e);
    const n = r.safeParse(Ed, e);
    if (n.success)
      for (const i of n.output.windows)
        i.entries.some(
          (a) => a.kind === "chat" && a.entry?.id === i.activeEntryId,
        ) && this.#t.set(i.id, i.activeEntryId);
  }
  commandFor(e, n) {
    switch (n.kind) {
      case "closeActiveTab": {
        const { windowId: i, selection: o, recentEntryIds: a = [] } = n.args,
          c = this.#t.get(i),
          s = c ? d.window$1(e.data, i) : void 0;
        if (!c || !s) return n;
        const u = o
          ? un(s, c, { kind: "history", selection: o })
          : (tt(s, c, a, "visible") ?? d.firstTab(s));
        return u
          ? { kind: "setActiveEntry", windowId: i, entryId: u.id }
          : void 0;
      }
      case "selectAdjacentTab": {
        const i = this.#t.get(n.windowId),
          o = i ? d.window$1(e.data, n.windowId) : void 0;
        if (!o) return n;
        const a = d
            .stripTabs(o)
            .filter(({ tab: s, visible: u }) => u && s.id !== i),
          c = n.direction === "next" ? a[0] : a.at(-1);
        return c
          ? { kind: "setActiveEntry", windowId: n.windowId, entryId: c.tab.id }
          : void 0;
      }
      case "moveActiveTab":
      case "focusPagePane":
        return this.#t.has(n.windowId) ? void 0 : n;
      default:
        return n;
    }
  }
  read(e) {
    pt(e, this.#e);
  }
  dropped(e, n, i) {
    if (!Td(i).some((c) => this.#e.has(c))) return !1;
    const o = Re(n),
      a = o ? d.window$1(e.data, o.windowId) : void 0;
    return (
      o && a && !d.entry$2(a, o.entryId) && this.#t.set(o.windowId, o.entryId),
      !0
    );
  }
  settled(e, n, i) {
    const o = Re(i);
    o && o.entryId !== this.#t.get(o.windowId) && this.#t.delete(o.windowId);
    for (const a of this.#t.keys()) {
      const c = d.window$1(e.data, a),
        s = d.window$1(n.data, a);
      (!s || c?.activeEntryId !== s.activeEntryId) && this.#t.delete(a);
    }
  }
}
const Cd = r.object({
    kind: r.literal("rail"),
    entry: r.object({ id: r.string(), destination: r.literal("newTab") }),
  }),
  jd = r.looseObject({
    kind: r.literal("ensureRailEntry"),
    windowId: r.string(),
    destination: r.string(),
    entryId: r.string(),
    activate: r.optional(r.boolean()),
  }),
  Ad = r.looseObject({
    kind: r.picklist(["replaceTabWithChat", "replaceNewTabWithPage"]),
    args: r.looseObject({ nextNewTabEntryId: r.string() }),
  }),
  Pd = r.looseObject({ railEntryIds: r.looseObject({ newTab: r.string() }) }),
  Rd = r.variant("kind", [
    r.looseObject({
      kind: r.literal("reconcileActivityPresentation"),
      presentation: r.unknown(),
    }),
    r.looseObject({
      kind: r.literal("reconcileActivityPresentations"),
      args: r.array(r.looseObject({ presentation: r.unknown() })),
    }),
  ]);
function Gt(t, e) {
  if (Array.isArray(t)) {
    for (const i of t) Gt(i, e);
    return;
  }
  if (typeof t != "object" || t === null) return;
  const n = r.safeParse(Cd, t);
  if (n.success) {
    e.add(n.output.entry.id);
    return;
  }
  for (const i of Object.values(t)) Gt(i, e);
}
function xd(t) {
  return Object.entries(t).flatMap(([e, n]) =>
    e !== "kind" && typeof n == "string" ? [n] : [],
  );
}
class Un {
  #t = new Set();
  constructor(e) {
    Gt(e, this.#t);
  }
  read(e) {
    const n = this.#e(e.command);
    return n === void 0 ? void 0 : { ...e, command: n };
  }
  #e(e) {
    const n = r.safeParse(jd, e);
    if (n.success) {
      const { activate: a, ...c } = n.output;
      return c.destination !== "newTab"
        ? c
        : (this.#t.add(c.entryId),
          n.output.activate
            ? {
                kind: "setActiveEntry",
                windowId: c.windowId,
                entryId: c.entryId,
              }
            : void 0);
    }
    const i = r.safeParse(Ad, e);
    if (i.success) {
      const { nextNewTabEntryId: a, ...c } = i.output.args;
      return (this.#t.add(a), { ...i.output, args: c });
    }
    const o = r.safeParse(Rd, e);
    return o.success
      ? o.output.kind === "reconcileActivityPresentation"
        ? { ...o.output, presentation: this.#n(o.output.presentation) }
        : {
            ...o.output,
            args: o.output.args.map((a) => ({
              ...a,
              presentation: this.#n(a.presentation),
            })),
          }
      : e;
  }
  #n(e) {
    const n = r.safeParse(Pd, e);
    if (!n.success) return e;
    const { newTab: i, ...o } = n.output.railEntryIds;
    return (this.#t.add(i), { ...n.output, railEntryIds: o });
  }
  commandFor(e, n) {
    if (n.kind === "setActiveEntry" && this.#t.has(n.entryId))
      return this.#i(e, n.windowId, n.entryId);
    if (n.kind !== "dismissActiveRail") return n;
    const { windowId: i, returnEntryId: o } = n.args,
      a = d.window$1(e.data, i),
      c = a ? d.activeEntry$1(a) : void 0;
    if (!a || !c || !this.#t.has(c.id)) return n;
    const s =
      (o !== void 0 && o !== c.id ? d.entry$2(a, o) : void 0) ??
      d.stripTabs(a).find(({ tab: u }) => u.id !== c.id)?.tab;
    return s ? { kind: "setActiveEntry", windowId: i, entryId: s.id } : void 0;
  }
  #i(e, n, i) {
    const o = d.window$1(e.data, n);
    return o && d.entry$2(o, i)
      ? { kind: "setActiveEntry", windowId: n, entryId: i }
      : {
          kind: "newTab",
          windowId: n,
          args: {
            entryId: i,
            root: { kind: "newTab" },
            index: d.TOP_TAB_INDEX,
          },
        };
  }
  dropped(e) {
    return xd(e).some((n) => this.#t.has(n));
  }
}
const H = 17,
  Ft = 5,
  Hn = 6,
  Vd = 7,
  Bn = 8,
  Yn = 9,
  $d = 10,
  md = 11,
  Ld = 12,
  Wd = 13,
  _d = 14,
  Nd = 15,
  Md = 16;
function Dd(t) {
  return (
    t === Ft ||
    t === Hn ||
    t === Vd ||
    t === Bn ||
    t === Yn ||
    t === $d ||
    t === md ||
    t === Ld ||
    t === Wd ||
    t === _d ||
    t === Nd ||
    t === Md ||
    t === H
  );
}
const Y = (t) => r.pipe(r.array(t), r.readonly()),
  Gd = r.strictObject(ht.entries),
  Fd = r.pipe(r.array(M), r.maxLength(Bt), r.readonly()),
  Ud = r.strictObject({ summary: Gd, navigationHistory: Fd }),
  Hd = r.variant("kind", [
    r.strictObject({ kind: r.literal("none") }),
    r.strictObject({ kind: r.literal("created"), pages: Y(Ud) }),
    r.strictObject({ kind: r.literal("deleted"), pageIds: Y(d.PageId) }),
    r.strictObject({
      kind: r.literal("metadataTouched"),
      pageIds: Y(d.PageId),
    }),
  ]),
  zn = r.variant("kind", [
    r.strictObject({ kind: r.literal("window"), window: Kt }),
    r.strictObject({
      kind: r.literal("entries"),
      windowId: d.WindowId,
      entries: Y(rn),
    }),
  ]);
function Bd(t) {
  const e = r.safeParse(zn, t);
  if (e.success) return { kind: "fragment", fragment: xe(e.output) };
  const n = r.safeParse(wt, t);
  if (!n.success) return { kind: "invalid" };
  const i = Ie(n.output);
  return i ? { kind: "fragment", fragment: xe(i) } : { kind: "nothing" };
}
function xe(t) {
  return t.kind === "window"
    ? { ...t, window: De(t.window) }
    : { ...t, entries: t.entries.map(Me) };
}
const kt = r.pipe(r.number(), r.integer(), r.minValue(0)),
  Yd = r.pipe(
    r.strictObject({
      formatVersion: r.literal(H),
      baseRevision: kt,
      revision: kt,
      occurredAt: r.number(),
      command: ad,
      pageChanges: Hd,
      closed: r.optional(Y(zn)),
    }),
    r.forward(
      r.check(
        (t) => t.revision === t.baseRevision + 1,
        "revision-not-after-base",
      ),
      ["revision"],
    ),
  );
function we(t) {
  const e = r.safeParse(Yd, t);
  return e.success
    ? { ok: !0, record: e.output }
    : { ok: !1, issues: yt(e.issues) };
}
function zd(t, e, n) {
  return Ut(t, e, n, { formatVersion: H });
}
function Ut(t, e, n, i) {
  if (e.baseRevision !== n)
    return {
      ok: !1,
      stop: { kind: "revision-gap", expected: n, found: e.baseRevision },
    };
  let o;
  return (
    i.formatVersion < 13
      ? (o = gd(t, e.command, e.occurredAt))
      : (o = fe(t, e.command, e.occurredAt)),
    o.ok
      ? { ok: !0, state: o.state, revision: e.revision }
      : { ok: !1, stop: { kind: "rejected", rejection: o.rejection } }
  );
}
function Ve(t, e, n) {
  const i = we(e);
  return i.ok
    ? zd(t, i.record, n)
    : { ok: !1, stop: { kind: "invalid-record", issues: i.issues } };
}
function Jd(t) {
  const e = r.safeParse(ud, t.rawValue);
  if (!e.success) return Ve(t.state, t.rawValue, t.expectedBaseRevision);
  if (e.output.formatVersion !== t.formatVersion)
    return { ok: !1, unsupportedFormatVersion: e.output.formatVersion };
  if (t.formatVersion === H)
    return Ve(t.state, t.rawValue, t.expectedBaseRevision);
  const n = t.formatVersion === Ft ? fd(t.state, e.output) : e.output,
    i = t.formatVersion === Ft || t.formatVersion === Hn ? Id(n) : e.output,
    o = t.formatVersion >= Bn ? e.output : wd(i),
    a = t.formatVersion >= Yn ? e.output : hd(o),
    c = t.retiredChatEntries ?? new Fn();
  c.read(a);
  const s = t.retiredNewTabRails ?? new Un(),
    u = s.read(a);
  if (!u) return Kd(t.state, a, t.expectedBaseRevision);
  const l = we({ ...u, formatVersion: H });
  return l.ok
    ? Xd(t.state, l.record, t.expectedBaseRevision, t, c, s)
    : { ok: !1, stop: { kind: "invalid-record", issues: l.issues } };
}
const qd = r.looseObject({ baseRevision: kt, revision: kt });
function Kd(t, e, n) {
  const i = r.safeParse(qd, e);
  if (!i.success || i.output.revision !== i.output.baseRevision + 1)
    return {
      ok: !1,
      stop: { kind: "invalid-record", issues: i.success ? [] : yt(i.issues) },
    };
  const { baseRevision: o, revision: a } = i.output;
  return o !== n
    ? { ok: !1, stop: { kind: "revision-gap", expected: n, found: o } }
    : { ok: !0, state: t, revision: a };
}
function Xd(t, e, n, i, o, a) {
  if (e.baseRevision !== n) return Ut(t, e, n, i);
  const c = o.commandFor(t, e.command),
    s = c && a.commandFor(t, c);
  if (!s) return { ok: !0, state: t, revision: e.revision };
  const u = Ut(t, { ...e, command: s }, n, i);
  if (u.ok) return (o.settled(t, u.state, s), u);
  if (u.stop.kind !== "rejected") return u;
  const { rejection: l } = u.stop;
  return !o.dropped(t, e.command, l) && !a.dropped(l)
    ? u
    : { ok: !0, state: t, revision: e.revision };
}
exports.CLASSIC_TABS = Qt;
exports.ChatRootedTab = Yt;
exports.ChatSidebar = Z;
exports.ChatViewRef = E;
exports.EntryListItem = Ke;
exports.GroupItem = zt;
exports.LAYOUT_JOURNAL_FORMAT_VERSION = H;
exports.LAYOUT_SCHEMA_VERSION = Qe;
exports.LayoutInternalDefectError = ti;
exports.NAV_HISTORY_CAP = Bt;
exports.PageEntity = ei;
exports.PageSummary = ht;
exports.ProfileLayoutShape = Ze;
exports.RECENTLY_CLOSED_LIMIT = Hi;
exports.RailDestination = Et;
exports.RetiredChatEntryReplay = Fn;
exports.RetiredNewTabRailReplay = Un;
exports.StoredProfileLayout = Gi;
exports.WindowBounds = N;
exports.WindowNode = Jt;
exports.activityClock = Xi;
exports.activitySidebarSettings = Ki;
exports.applyCommand = fe;
exports.arrangeActivitySidebar = dn;
exports.arrangeTabs = Zt;
exports.closeHistoryAfter = sr;
exports.closeOrder = an;
exports.closedHistoryRewriteOf = ed;
exports.closedKeyOf = Lt;
exports.fragmentPageIds = Tr;
exports.freezePageSummary = ni;
exports.isReadableLayoutJournalFormat = Dd;
exports.layoutInvariants = Rt;
exports.layoutTogglingPresentedSize = vr;
exports.noPageChanges = D;
exports.pageIndexOf = ri;
exports.pageRevealTarget = $n;
exports.parseClosedFragment = Bd;
exports.parseLayoutCommand = sd;
exports.parseLayoutCommitRecord = we;
exports.recoverInvariants = pi;
exports.rejected = f;
exports.reopenableFragments = jr;
exports.replayStoredRecordValue = Jd;
exports.stampCloseHistory = cr;
exports.startCloseHistory = ar;
exports.tabCanReceiveSplit = so;
exports.tabSplitDropAvailability = uo;
exports.tabSplitDropCandidates = co;
exports.toLayoutIssues = yt;
