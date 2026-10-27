"use strict";
(function () {
  try {
    var t =
      typeof l < "u"
        ? l
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
        typeof l < "u"
          ? l
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
      (t._sentryDebugIds[n] = "b5ef5f8a-3007-4d83-a57c-95591237c2dc"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-b5ef5f8a-3007-4d83-a57c-95591237c2dc"));
  })();
} catch {}
const Bt = require("valibot");
function zt(t) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (t) {
    for (const r in t)
      if (r !== "default") {
        const e = Object.getOwnPropertyDescriptor(t, r);
        Object.defineProperty(
          n,
          r,
          e.get ? e : { enumerable: !0, get: () => t[r] },
        );
      }
  }
  return ((n.default = t), Object.freeze(n));
}
const u = zt(Bt);
function y(t) {
  return t.flatMap((n) =>
    n.kind === "page"
      ? [n.pageId]
      : n.panes.flatMap((r) => (r.kind === "page" ? [r.pageId] : [])),
  );
}
function J(t) {
  return t.flatMap((n) =>
    n.kind === "split" ? [n.id, ...n.panes.map((r) => r.id)] : [n.id],
  );
}
function g(t, n) {
  for (const r of t) {
    if (r.kind === "page") {
      if (r.pageId === n) return { kind: "slot", slotId: r.id };
      continue;
    }
    const e = r.panes.find((o) => o.kind === "page" && o.pageId === n);
    if (e) return { kind: "pane", slotId: r.id, paneId: e.id };
  }
}
function K(t, n) {
  return t.find((r) => r.id === n);
}
function p(t) {
  const n = t.views.find((r) => r.id === t.selectedViewId);
  if (!n) throw new Error("A proven chat column has no selected view.");
  return n;
}
function Q(t, n) {
  return t.views.find((r) => r.id === n);
}
function Z(t, n) {
  return t.views.find((r) => r.chatId === n);
}
function E(t, n) {
  const r = t.chats[n];
  if (!r) throw new Error("A proven layout is missing a Chat working set.");
  return r;
}
function C(t, n) {
  return t.chats[n]?.track ?? [];
}
function tt(t, n) {
  for (const [r, e] of Object.entries(t.chats))
    if (y(e.track).includes(n)) return r;
}
function nt(t, n) {
  for (const r of n.views) {
    if (r.layout.kind === "root-full") continue;
    const e = r.layout.presentedSlotId;
    if (!K(E(t, r.chatId).track, e)) return { viewId: r.id, slotId: e };
  }
}
const Xt = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      holding: tt,
      selectedView: p,
      track: C,
      unreachableSlot: nt,
      view: Q,
      viewOfChat: Z,
      workingSet: E,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function h(t) {
  return "root" in t;
}
function A(t) {
  return "root" in t && t.root.kind === "newTab";
}
function qt(t) {
  return "root" in t && t.root.kind === "newTab" && t.root.hasDraft === !0;
}
function D(t) {
  return "root" in t && t.root.kind === "chat";
}
function f(t) {
  return "track" in t;
}
function b(t) {
  return "root" in t && t.root.kind === "page" ? t.root.pageId : void 0;
}
function s(t, n) {
  if (n === "sidebar")
    return "chatSidebar" in t ? t.chatSidebar?.column : void 0;
  if ("root" in t) return t.root.kind === "chat" ? t.root.column : void 0;
}
function Yt(t) {
  const n = s(t, "root"),
    r = s(t, "sidebar");
  return [...(n ? [n] : []), ...(r ? [r] : [])];
}
function k(t) {
  return ["root", "sidebar"].flatMap((n) =>
    (s(t, n)?.views ?? []).map((r) => ({
      column: { kind: n, entryId: t.id },
      view: r,
    })),
  );
}
function rt(t) {
  const n = s(t, "root");
  return n ? p(n).chatId : void 0;
}
function et(t) {
  const n = s(t, "root");
  if (n) return p(n).layout;
  if ("layout" in t) return t.layout;
  throw new Error("A proven entry has no root layout.");
}
function ot(t, n) {
  if (f(n)) return n.track;
  const r = s(n, "root");
  return r ? E(t, p(r).chatId).track : [];
}
function it(t) {
  if (f(t)) return { kind: "entry", entryId: t.id };
  const n = s(t, "root");
  if (!n) throw new Error("A trackless entry has no chat column.");
  return { kind: "chat", chatId: p(n).chatId };
}
function x(t) {
  const n = k(t).map(({ view: e }) => e.id),
    r = f(t) ? J(t.track) : [];
  return [t.id, ...n, ...r];
}
function m(t) {
  const n = b(t),
    r = f(t) ? y(t.track) : [];
  return n === void 0 ? r : [n, ...r];
}
const Jt = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      chatColumn: s,
      chatColumns: Yt,
      chatViews: k,
      hasNewTabDraft: qt,
      ids: x,
      isChatTab: D,
      isNewTab: A,
      isTab: h,
      owner: it,
      ownsTrack: f,
      placedPageIds: m,
      rootChatId: rt,
      rootLayout: et,
      rootPageId: b,
      track: ot,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function j(t) {
  return t.kind === "tab" || t.kind === "group";
}
function at(t) {
  return t === "pinned" ? 0 : 1;
}
function Kt(t) {
  return t.kind === "group" ? 1 : at(t.category);
}
function v(t) {
  return t.kind === "tab" ? [t.tab] : t.kind === "group" ? t.tabs : [t.entry];
}
function L(t) {
  return t.kind === "tab" ? [t.tab] : t.kind === "group" ? t.tabs : [];
}
const st = [
    "chatHistory",
    "routines",
    "workspace",
    "apps",
    "skills",
    "databases",
    "timeline",
    "meetings",
  ],
  Qt = {
    chatHistory: { url: "orbitra://chat-history", title: "Chat History" },
    routines: { url: "orbitra://routines", title: "Routines" },
    workspace: { url: "orbitra://library", title: "Library" },
    apps: { url: "orbitra://apps", title: "Apps" },
    skills: { url: "orbitra://skills", title: "Skills" },
    databases: { url: "orbitra://databases", title: "Databases" },
    timeline: { url: "orbitra://timeline", title: "Timeline" },
    meetings: { url: "orbitra://meetings", title: "Meetings" },
  };
function Zt(t) {
  return Qt[t];
}
function ct(t) {
  let n;
  try {
    n = new URL(t);
  } catch {
    return;
  }
  if (n.protocol !== "orbitra:" || n.username || n.password || n.port)
    return;
  const r = nn(n.hostname);
  if (r)
    return {
      destination: r,
      atRoot: n.pathname === "" && !n.search && !n.hash,
    };
}
function tn(t) {
  const n = ct(t);
  return n?.atRoot ? n.destination : void 0;
}
function nn(t) {
  switch (t) {
    case "chat-history":
      return "chatHistory";
    case "routines":
      return "routines";
    case "workspace":
    case "library":
      return "workspace";
    case "apps":
      return "apps";
    case "skills":
    case "databases":
    case "timeline":
    case "meetings":
      return t;
    default:
      return;
  }
}
function rn(t) {
  return t;
}
const en = 0;
function dt(t, n) {
  return t.entries.slice(0, n).filter(j).length;
}
function d(t) {
  return t.entries.flatMap(v);
}
function N(t, n) {
  for (const r of t.entries)
    if (r.kind === "group") {
      const e = r.tabs.find((o) => o.id === n);
      if (e) return e;
    } else {
      const e = r.kind === "tab" ? r.tab : r.entry;
      if (e.id === n) return e;
    }
}
const R = new WeakMap();
function T(t) {
  if (R.has(t)) return R.get(t);
  const n = N(t, t.activeEntryId);
  return (R.set(t, n), n);
}
function V(t, n) {
  for (const [r, e] of t.entries.entries()) {
    const o = v(e).find((i) => i.id === n);
    if (o) return { item: e, node: o, entryIndex: r };
  }
}
function H(t, n) {
  return t.entries.find((r) => r.kind === "group" && r.id === n);
}
function ut(t, n) {
  const r = V(t, n);
  return r?.item.kind === "tab" ? r.item.category : "ordinary";
}
function ft(t) {
  return d(t).find(h);
}
function S(t, n) {
  for (const r of d(t)) {
    const e = k(r).find(({ view: o }) => o.chatId === n);
    if (e) return e;
  }
}
function lt(t) {
  const n = new Set();
  for (const r of d(t)) for (const { view: e } of k(r)) n.add(e.chatId);
  return n;
}
function pt(t) {
  const n = new Set();
  for (const r of d(t))
    for (const e of s(r, "sidebar")?.views ?? []) n.add(e.chatId);
  return n;
}
function ht(t) {
  const n = T(t);
  if (n)
    return h(n)
      ? { entryId: n.id, shows: n.root.kind }
      : { entryId: n.id, shows: A(n) ? "newTab" : "destination" };
}
function bt(t, n) {
  return t === void 0 || n === void 0
    ? !1
    : t.entryId !== n.entryId || t.shows !== n.shows;
}
function _(t) {
  return t.entries.filter(j);
}
function M(t) {
  return t.entries.flatMap((n) =>
    n.kind === "tab"
      ? [{ tab: n.tab, pinned: n.category === "pinned", visible: !0 }]
      : n.kind === "group"
        ? n.tabs.map((r) => ({ tab: r, pinned: !1, visible: !n.collapsed }))
        : [],
  );
}
function wt(t) {
  return M(t).flatMap((n) => (n.pinned ? [] : [n.tab]));
}
const B = new WeakMap();
function It(t) {
  const n = B.get(t.entries);
  if (n) return n;
  const r = t.entries.flatMap((e) => {
    if (e.kind !== "tab" || e.category !== "pinned") return [];
    const o = b(e.tab);
    return o === void 0
      ? []
      : [{ tab: e.tab, pageId: o, pinnedId: e.tab.pinnedId ?? e.tab.id }];
  });
  return (B.set(t.entries, r), r);
}
const z = new WeakMap();
function kt(t) {
  const n = z.get(t.entries);
  if (n) return n;
  const r = t.entries.flatMap((e) => (e.kind === "rail" ? [e.entry] : []));
  return (z.set(t.entries, r), r);
}
function yt(t) {
  const n = kt(t);
  return st.flatMap((r) => n.filter((e) => e.destination === r));
}
function gt(t, n) {
  return kt(t).find((r) => r.destination === n);
}
function W(t) {
  return M(t).flatMap(({ tab: n }) =>
    D(n) ? n.root.column.views.map((r) => ({ tab: n, view: r })) : [],
  );
}
function vt(t, n) {
  return W(t).find(({ view: r }) => r.chatId === n);
}
const on = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      activeEntry: T,
      activeSelection: ht,
      category: ut,
      chatView: S,
      dockedChatIds: pt,
      entries: d,
      entry: N,
      firstTab: ft,
      group: H,
      item: V,
      openChat: vt,
      openChats: W,
      ordinaryTabs: wt,
      pinnedTabs: It,
      rail: yt,
      railEntry: gt,
      selectionSwitched: bt,
      shownChatIds: lt,
      strip: _,
      stripTabs: M,
      tabIndexAt: dt,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function l(t, n) {
  return t.windows.find((r) => r.id === n);
}
function F(t, n) {
  for (const r of t.windows) {
    const e = d(r).find((o) => o.id === n);
    if (e) return { window: r, node: e };
  }
}
function Tt(t, n) {
  for (const r of t.windows) {
    const e = H(r, n);
    if (e) return { window: r, group: e };
  }
}
function Et(t, n) {
  const r = F(t, n.entryId);
  if (!r) return;
  const e = s(r.node, n.kind);
  return e ? { ...r, column: e, ref: n } : void 0;
}
function mt(t, n) {
  for (const r of t.windows) {
    const e = S(r, n);
    if (e) return { ...e, window: r };
  }
}
function St(t, n) {
  for (const r of t.windows)
    for (const e of d(r)) {
      if (!f(e)) continue;
      const o = e.track.findIndex((i) => i.id === n);
      if (o !== -1)
        return {
          owner: { kind: "entry", entryId: e.id },
          track: e.track,
          index: o,
        };
    }
  for (const [r, e] of Object.entries(t.chats)) {
    const o = e.track.findIndex((i) => i.id === n);
    if (o !== -1)
      return { owner: { kind: "chat", chatId: r }, track: e.track, index: o };
  }
}
function U(t) {
  const n = t.windows.flatMap((e) =>
      d(e).flatMap((o) => (f(o) ? [o.track] : [])),
    ),
    r = Object.values(t.chats).map((e) => e.track);
  return [...n, ...r];
}
function _t(t, n) {
  return (
    t.chats === n.chats &&
    t.windows.length === n.windows.length &&
    t.windows.every(
      (r, e) => r.id === n.windows[e].id && r.entries === n.windows[e].entries,
    )
  );
}
function Mt(t) {
  const n = t.windows.flatMap((e) => d(e).flatMap(m)),
    r = Object.values(t.chats).flatMap((e) => y(e.track));
  return [...n, ...r];
}
function $t(t) {
  return new Set(t.windows.flatMap((n) => [...pt(n)]));
}
function Rt(t) {
  return t.windows.flatMap((n) => _(n).flatMap(L).flatMap(m));
}
function Ot(t, n) {
  for (const r of t.windows)
    for (const e of r.entries)
      for (const o of v(e))
        if (b(o) === n || (f(o) && g(o.track, n))) return !0;
  for (const r in t.chats)
    if (Object.hasOwn(t.chats, r) && g(t.chats[r].track, n)) return !0;
  return !1;
}
function Pt(t, n) {
  for (const r of U(t)) {
    const e = g(r, n);
    if (e) return e;
  }
}
function Ct(t, n) {
  for (const r of t.windows)
    for (const e of d(r)) {
      if (f(e)) {
        const o = g(e.track, n);
        if (o)
          return {
            window: r,
            presenter: { kind: "entry", entryId: e.id },
            placement: o,
          };
      }
      for (const { column: o, view: i } of k(e)) {
        const a = g(C(t, i.chatId), n);
        if (a)
          return {
            window: r,
            presenter: { kind: "chat-view", column: o, viewId: i.id },
            placement: a,
          };
      }
    }
}
function At(t, n) {
  for (const r of t.windows)
    for (const [e, o] of r.entries.entries()) {
      const i = L(o).find((a) => b(a) === n);
      if (i)
        return {
          windowId: r.id,
          entryId: i.id,
          groupId: o.kind === "group" ? o.id : null,
          category: o.kind === "tab" ? o.category : "ordinary",
          pinnedId:
            o.kind === "tab" && o.category === "pinned"
              ? (i.pinnedId ?? i.id)
              : void 0,
          entryIndex: e,
        };
    }
}
function Dt(t) {
  const n = t.windows.flatMap((e) => [
      e.id,
      ...e.entries.flatMap((o) => (o.kind === "group" ? [o.id] : [])),
      ...d(e).flatMap(x),
    ]),
    r = Object.values(t.chats).flatMap((e) => J(e.track));
  return [...n, ...r];
}
function xt(t, n) {
  for (const r of t.windows) {
    if (r.id === n) return !0;
    for (const e of r.entries) {
      if (e.kind === "group" && e.id === n) return !0;
      for (const o of v(e))
        if (
          o.id === n ||
          s(o, "root")?.views.some((c) => c.id === n) ||
          s(o, "sidebar")?.views.some((c) => c.id === n) ||
          (f(o) && X(o.track, n))
        )
          return !0;
    }
  }
  for (const r in t.chats)
    if (Object.hasOwn(t.chats, r) && X(t.chats[r].track, n)) return !0;
  return !1;
}
function X(t, n) {
  return t.some(
    (r) =>
      r.id === n || (r.kind === "split" && r.panes.some((e) => e.id === n)),
  );
}
function jt(t, n) {
  return t.flatMap((r, e) => {
    const o = `${n}.${e}`;
    return r.kind === "page"
      ? [{ pageId: r.pageId, path: o }]
      : r.panes.flatMap((i, a) =>
          i.kind === "page"
            ? [{ pageId: i.pageId, path: `${o}.panes.${a}` }]
            : [],
        );
  });
}
function O(t, n) {
  const r = b(t),
    e = r === void 0 ? [] : [{ pageId: r, path: `${n}.root` }],
    o = f(t) ? jt(t.track, `${n}.track`) : [];
  return [...e, ...o];
}
function Lt(t) {
  const n = t.windows.flatMap((e, o) =>
      e.entries.flatMap((i, a) => {
        const c = `windows.${o}.entries.${a}`;
        return i.kind === "tab"
          ? O(i.tab, `${c}.tab`)
          : i.kind === "rail"
            ? O(i.entry, `${c}.entry`)
            : i.tabs.flatMap((I, $) => O(I, `${c}.tabs.${$}`));
      }),
    ),
    r = Object.values(t.chats).flatMap((e) =>
      jt(e.track, "chats.<chat>.track"),
    );
  return [...n, ...r];
}
function q(t, n) {
  return t.views.map((r, e) => ({
    chatId: r.chatId,
    path: `${n}.views.${e}.chatId`,
  }));
}
function P(t, n) {
  const r = s(t, "root"),
    e = s(t, "sidebar");
  return [
    ...(r ? q(r, `${n}.root.column`) : []),
    ...(e ? q(e, `${n}.chatSidebar.column`) : []),
  ];
}
function an(t, n) {
  return t.kind === "tab"
    ? P(t.tab, `${n}.tab`)
    : t.kind === "rail"
      ? P(t.entry, `${n}.entry`)
      : t.tabs.flatMap((r, e) => P(r, `${n}.tabs.${e}`));
}
function Nt(t) {
  return t.windows.flatMap((n, r) =>
    n.entries.flatMap((e, o) => an(e, `windows.${r}.entries.${o}`)),
  );
}
function Vt(t, n) {
  const r = l(t, n);
  if (!r) return;
  const e = {},
    o = new Set();
  for (const i of d(r)) {
    const a = b(i);
    a !== void 0 && o.add(a);
    for (const { view: c } of k(i)) {
      const I = t.chats[c.chatId];
      if (I) {
        e[c.chatId] = I;
        for (const $ of y(I.track)) o.add($);
      }
    }
    if (f(i)) for (const c of y(i.track)) o.add(c);
  }
  return { window: r, chats: e, pageIds: [...o] };
}
function sn(t, n) {
  const r = l(t, n);
  return r ? _(r) : [];
}
function Ht(t, n) {
  const r = l(t, n);
  return r ? T(r) : void 0;
}
function Wt(t, n) {
  const r = l(t, n);
  return r ? ht(r) : void 0;
}
function Ft(t, n, r) {
  let e, o;
  for (const i of n) {
    const a = l(t, i);
    if (!a) continue;
    const c = T(a);
    if (c && Y(c, r)) return a.id;
    (e === void 0 && d(a).some((I) => Y(I, r)) && (e = a.id),
      o === void 0 && S(a, r) && (o = a.id));
  }
  return e ?? o;
}
function Y(t, n) {
  if (!h(t)) return !1;
  const r = s(t, "root");
  if (r && p(r).chatId === n) return !0;
  const e = t.chatSidebar;
  return e !== void 0 && e.mode !== "closed" && p(e.column).chatId === n;
}
const cn = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      activeEntry: Ht,
      activeSelection: Wt,
      chatHomeWindow: Ft,
      chatReferences: Nt,
      chatView: mt,
      column: Et,
      dockedChatIds: $t,
      entry: F,
      findPage: Pt,
      group: Tt,
      idIsTaken: xt,
      ids: Dt,
      isPagePlaced: Ot,
      pageEntry: At,
      pageInTrack: Ct,
      placedPageIds: Mt,
      placedPages: Lt,
      sameLists: _t,
      slot: St,
      strip: sn,
      tabStripPageIds: Rt,
      tracks: U,
      window: l,
      windowContents: Vt,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function dn(t, n) {
  if (t.kind === "tab") {
    const e = n(t.tab);
    return h(e) && e !== t.tab ? { ...t, tab: e } : t;
  }
  if (t.kind === "rail") {
    const e = n(t.entry);
    return "destination" in e && e !== t.entry ? { ...t, entry: e } : t;
  }
  const r = t.tabs.map((e) => {
    const o = n(e);
    return h(o) ? o : e;
  });
  return r.every((e, o) => e === t.tabs[o]) ? t : { ...t, tabs: r };
}
function Ut(t, n) {
  const r = t.entries.map((e) => dn(e, n));
  return r.every((e, o) => e === t.entries[o]) ? t : { ...t, entries: r };
}
function un(t, n, r) {
  return Ut(t, (e) => (e.id === n ? r : e));
}
function fn(t, n) {
  const r = t.entries.flatMap((e) => {
    if (e.kind === "tab") return e.tab.id === n ? [] : [e];
    if (e.kind === "rail") return [e];
    if (!e.tabs.some((i) => i.id === n)) return [e];
    const o = e.tabs.filter((i) => i.id !== n);
    return o.length === 0 ? [] : [{ ...e, tabs: o }];
  });
  return { ...t, entries: r };
}
function ln(t, n, r) {
  const e = t.entries.map((o) => (o.kind === "group" && o.id === n ? r(o) : o));
  return e.every((o, i) => o === t.entries[i]) ? t : { ...t, entries: e };
}
function pn(t, n) {
  const r = d({ ...t, entries: n });
  if (!r.some(h)) return;
  const e = r.some((o) => o.id === t.activeEntryId) ? t.activeEntryId : r[0].id;
  return { ...t, entries: n, activeEntryId: e };
}
const Gt = 1e4;
function G(t, n) {
  const e = n > 0 && Number.isFinite(t) ? Math.min(1, Math.max(0, t / n)) : 0;
  return Math.round(e * Gt);
}
const hn = G(2, 5),
  bn = G(36, 100),
  w = (t) => u.pipe(u.string(), u.minLength(1), u.brand(t)),
  wn = w("PageId"),
  In = w("EntryId"),
  kn = w("SlotId"),
  yn = w("PaneId"),
  gn = w("GroupId"),
  vn = w("WindowId"),
  Tn = w("ChatId"),
  En = w("ChatViewId"),
  mn = u.pipe(
    u.number(),
    u.integer(),
    u.minValue(0),
    u.maxValue(Gt),
    u.brand("Ratio"),
  ),
  Sn = u.pipe(u.number(), u.brand("TabIndex"));
exports.ChatId = Tn;
exports.ChatViewId = En;
exports.DEFAULT_CHAT_SIDEBAR_RATIO = bn;
exports.DEFAULT_ROOT_SHARE_WITH_PRESENTED_PAGE = hn;
exports.EntryId = In;
exports.GroupId = gn;
exports.PageId = wn;
exports.PaneId = yn;
exports.RAIL_DESTINATIONS = st;
exports.Ratio = mn;
exports.SlotId = kn;
exports.TOP_TAB_INDEX = en;
exports.TabIndex = Sn;
exports.WindowId = vn;
exports.activeEntry = Ht;
exports.activeEntry$1 = T;
exports.activeSelection = Wt;
exports.category = ut;
exports.categoryRank = at;
exports.chat = Xt;
exports.chatColumn = s;
exports.chatHomeWindow = Ft;
exports.chatReferences = Nt;
exports.chatView = mt;
exports.chatView$1 = S;
exports.chatViews = k;
exports.column = Et;
exports.dockedChatIds = $t;
exports.entries = d;
exports.entry = Jt;
exports.entry$1 = F;
exports.entry$2 = N;
exports.findPage = Pt;
exports.firstTab = ft;
exports.fixedRailDestinationForUrl = tn;
exports.fixedRailDestinationRoute = Zt;
exports.fixedRailRouteForUrl = ct;
exports.group = H;
exports.group$1 = Tt;
exports.holding = tt;
exports.idIsTaken = xt;
exports.ids = Dt;
exports.ids$1 = x;
exports.isChatTab = D;
exports.isNewTab = A;
exports.isPagePlaced = Ot;
exports.isStripItem = j;
exports.isTab = h;
exports.item = V;
exports.mapEntries = Ut;
exports.nodes = v;
exports.openChat = vt;
exports.openChats = W;
exports.ordinaryTabs = wt;
exports.owner = it;
exports.ownsTrack = f;
exports.pageEntry = At;
exports.pageIds = y;
exports.pageInTrack = Ct;
exports.pinnedTabs = It;
exports.placedPageIds = Mt;
exports.placedPageIds$1 = m;
exports.placedPages = Lt;
exports.profile = cn;
exports.rail = yt;
exports.railEntry = gt;
exports.ratioOfLength = G;
exports.rootChatId = rt;
exports.rootLayout = et;
exports.rootPageId = b;
exports.sameLists = _t;
exports.selectedView = p;
exports.selectionSwitched = bt;
exports.shownChatIds = lt;
exports.slot = K;
exports.slot$1 = St;
exports.strip = _;
exports.stripRank = Kt;
exports.stripTabs = M;
exports.tabIndex = rn;
exports.tabIndexAt = dt;
exports.tabStripPageIds = Rt;
exports.tabs = L;
exports.track = C;
exports.track$1 = ot;
exports.tracks = U;
exports.unreachableSlot = nt;
exports.view = Q;
exports.viewOfChat = Z;
exports.window = on;
exports.window$1 = l;
exports.windowContents = Vt;
exports.withEntries = pn;
exports.withEntry = un;
exports.withGroup = ln;
exports.withoutEntry = fn;
exports.workingSet = E;
