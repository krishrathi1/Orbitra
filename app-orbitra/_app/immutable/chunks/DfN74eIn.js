function y(t) {
  return t.flatMap((r) =>
    r.kind === "page"
      ? [r.pageId]
      : r.panes.flatMap((n) => (n.kind === "page" ? [n.pageId] : [])),
  );
}
function T(t, r) {
  return t.find((n) => n.id === r);
}
function o(t) {
  const r = t.views.find((n) => n.id === t.selectedViewId);
  if (!r) throw new Error("A proven chat column has no selected view.");
  return r;
}
function g(t, r) {
  const n = t.chats[r];
  if (!n) throw new Error("A proven layout is missing a Chat working set.");
  return n;
}
function E(t) {
  return "root" in t;
}
function m(t) {
  return "root" in t && t.root.kind === "newTab";
}
function M(t) {
  return "root" in t && t.root.kind === "newTab" && t.root.hasDraft === !0;
}
function A(t) {
  return "root" in t && t.root.kind === "chat";
}
function f(t) {
  return "track" in t;
}
function l(t) {
  return "root" in t && t.root.kind === "page" ? t.root.pageId : void 0;
}
function s(t, r) {
  if (r === "sidebar")
    return "chatSidebar" in t ? t.chatSidebar?.column : void 0;
  if ("root" in t) return t.root.kind === "chat" ? t.root.column : void 0;
}
function S(t) {
  return ["root", "sidebar"].flatMap((r) =>
    (s(t, r)?.views ?? []).map((n) => ({
      column: { kind: r, entryId: t.id },
      view: n,
    })),
  );
}
function D(t) {
  const r = s(t, "root");
  return r ? o(r).chatId : void 0;
}
function R(t) {
  const r = s(t, "root");
  if (r) return o(r).layout;
  if ("layout" in t) return t.layout;
  throw new Error("A proven entry has no root layout.");
}
function x(t, r) {
  if (f(r)) return r.track;
  const n = s(r, "root");
  return n ? g(t, o(n).chatId).track : [];
}
function C(t) {
  const r = l(t),
    n = f(t) ? y(t.track) : [];
  return r === void 0 ? n : [r, ...n];
}
function d(t) {
  return t.kind === "tab" || t.kind === "group";
}
function N(t) {
  return t === "pinned" ? 0 : 1;
}
function p(t) {
  return t.kind === "tab" ? [t.tab] : t.kind === "group" ? t.tabs : [t.entry];
}
function _(t) {
  return t.kind === "tab" ? [t.tab] : t.kind === "group" ? t.tabs : [];
}
const h = [
    "chatHistory",
    "routines",
    "workspace",
    "apps",
    "skills",
    "databases",
    "timeline",
    "meetings",
  ],
  I = {
    chatHistory: { url: "orbitra://chat-history", title: "Chat History" },
    routines: { url: "orbitra://routines", title: "Routines" },
    workspace: { url: "orbitra://library", title: "Library" },
    apps: { url: "orbitra://apps", title: "Apps" },
    skills: { url: "orbitra://skills", title: "Skills" },
    databases: { url: "orbitra://databases", title: "Databases" },
    timeline: { url: "orbitra://timeline", title: "Timeline" },
    meetings: { url: "orbitra://meetings", title: "Meetings" },
  };
function B(t) {
  return I[t];
}
const L = 0;
function O(t, r) {
  return t.entries.slice(0, r).filter(d).length;
}
function v(t) {
  return t.entries.flatMap(p);
}
function w(t, r) {
  for (const n of t.entries)
    if (n.kind === "group") {
      const e = n.tabs.find((i) => i.id === r);
      if (e) return e;
    } else {
      const e = n.kind === "tab" ? n.tab : n.entry;
      if (e.id === r) return e;
    }
}
const a = new WeakMap();
function H(t) {
  if (a.has(t)) return a.get(t);
  const r = w(t, t.activeEntryId);
  return (a.set(t, r), r);
}
function P(t, r) {
  for (const [n, e] of t.entries.entries()) {
    const i = p(e).find((k) => k.id === r);
    if (i) return { item: e, node: i, entryIndex: n };
  }
}
function V(t, r) {
  return t.entries.find((n) => n.kind === "group" && n.id === r);
}
function W(t) {
  const r = new Set();
  for (const n of v(t))
    for (const e of s(n, "sidebar")?.views ?? []) r.add(e.chatId);
  return r;
}
function F(t) {
  return t.entries.filter(d);
}
function X(t) {
  return t.entries.flatMap((r) =>
    r.kind === "tab"
      ? [{ tab: r.tab, pinned: r.category === "pinned", visible: !0 }]
      : r.kind === "group"
        ? r.tabs.map((n) => ({ tab: n, pinned: !1, visible: !r.collapsed }))
        : [],
  );
}
const u = new WeakMap();
function j(t) {
  const r = u.get(t.entries);
  if (r) return r;
  const n = t.entries.flatMap((e) => {
    if (e.kind !== "tab" || e.category !== "pinned") return [];
    const i = l(e.tab);
    return i === void 0
      ? []
      : [{ tab: e.tab, pageId: i, pinnedId: e.tab.pinnedId ?? e.tab.id }];
  });
  return (u.set(t.entries, n), n);
}
const c = new WeakMap();
function b(t) {
  const r = c.get(t.entries);
  if (r) return r;
  const n = t.entries.flatMap((e) => (e.kind === "rail" ? [e.entry] : []));
  return (c.set(t.entries, n), n);
}
function q(t) {
  const r = b(t);
  return h.flatMap((n) => r.filter((e) => e.destination === n));
}
function z(t, r) {
  return b(t).find((n) => n.destination === r);
}
export {
  N as A,
  P as B,
  O as C,
  A as D,
  z as E,
  j as F,
  h as R,
  L as T,
  H as a,
  o as b,
  s as c,
  l as d,
  w as e,
  C as f,
  W as g,
  B as h,
  F as i,
  V as j,
  v as k,
  R as l,
  x as m,
  m as n,
  E as o,
  y as p,
  p as q,
  D as r,
  X as s,
  _ as t,
  S as u,
  T as v,
  g as w,
  q as x,
  M as y,
  d as z,
};
