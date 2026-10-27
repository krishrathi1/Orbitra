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
      (t._sentryDebugIds[e] = "fdab27eb-e70e-487c-a34a-57d9868bdf36"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-fdab27eb-e70e-487c-a34a-57d9868bdf36"));
  })();
} catch {}
const E = require("./ids-B2sWlG17.js"),
  S = require("../main-app.js"),
  se = require("node:crypto"),
  mn = require("valibot"),
  A = require("./commitRecord-DR9i1ecT.js"),
  G = require("node:fs/promises"),
  re = require("node:path"),
  kn = require("./protocol-BGN1BQCi.js");
function bn(t) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (t) {
    for (const n in t)
      if (n !== "default") {
        const r = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(
          e,
          n,
          r.get ? r : { enumerable: !0, get: () => t[n] },
        );
      }
  }
  return ((e.default = t), Object.freeze(e));
}
const w = bn(mn),
  In = [
    ["/newtab", "New Tab"],
    ["/history", "History"],
    ["/site-engagement", "Site Engagement"],
    ["/first-week", "Your first week"],
    ["/bookmarks", "Bookmarks"],
    ["/chat-history", "Chat History"],
    ["/chat", "Chat"],
    ["/companion", "Companion"],
    ["/report", "Report"],
    ["/timeline", "Timeline"],
    ["/meetings", "Meetings"],
    ["/workspace-home", "Library"],
    ["/workspace", "Workspace"],
    ["/use-cases", "Use Cases"],
    ["/apps", "Apps"],
    ["/skills", "Skills"],
    ["/library/transcriptions", "Meetings"],
    ["/library/workflows", "Use Cases"],
    ["/library/skills", "Skills"],
    ["/library/apps", "Apps"],
    ["/library/files", "Files"],
    ["/library", "Library"],
    ["/routines", "Routines"],
    ["/downloads", "Downloads"],
    ["/passwords", "Passwords"],
    ["/integrations", "Integrations"],
    ["/logs", "Logs"],
  ],
  Pn = "Settings",
  Sn = [
    ["/settings/account", "Account"],
    ["/settings/credits", "Plan & Credit Usage"],
    ["/settings/team/members", "Team members"],
    ["/settings/team/leaderboard", "Leaderboard"],
    ["/settings/team", "Team settings"],
    ["/settings/integrations", "Connected Apps"],
    ["/settings/ai-permissions", "AI Permissions"],
    ["/settings/transcription", "Transcriptions"],
    ["/settings/voice", "Voice commands"],
    ["/settings/profiles", "Browser Profiles"],
    ["/settings/theme", "Appearance"],
    ["/settings/search-engine", "Search Engine"],
    ["/settings/languages", "Languages"],
    ["/settings/default-browser", "Default Browser"],
    ["/settings/notifications", "Notifications"],
    ["/settings/extensions", "Extensions"],
    ["/settings/privacy", "Privacy & Security"],
    ["/settings/password", "Autofill & Passwords"],
    ["/settings/storage", "Storage"],
    ["/settings/memory", "Memory"],
    ["/settings/activity-memory", "Activity memory"],
    ["/settings/downloads", "Downloads"],
    ["/settings/sandbox", "Sandbox"],
    ["/settings/companion-visual-lab", "Companion Visual Lab"],
    ["/settings/companion-migration", "Companion Migration"],
    ["/settings/about", "About Orbitra"],
    ["/settings/synced-fs", "Synced FS"],
    ["/settings/conduits", "Conduits"],
    ["/settings/benchmarks", "Benchmarks"],
  ];
function Lt(t) {
  const e = Cn(t);
  return e
    ? e.pathname === "/folder-viewer"
      ? Mn(e.searchParams)
      : He(e.pathname, "/settings")
        ? Rn(e.pathname)
        : (In.find(([r]) => He(e.pathname, r))?.[1] ?? null)
    : null;
}
function Rn(t) {
  return Sn.find(([n]) => He(t, n))?.[1] ?? Pn;
}
function He(t, e) {
  return t === e || t.startsWith(`${e}/`);
}
function Cn(t) {
  try {
    const e = new URL(t);
    return e.protocol !== "orbitra:"
      ? null
      : e.hostname === "-"
        ? { pathname: e.pathname || "/", searchParams: e.searchParams }
        : {
            pathname: `/${e.hostname}${e.pathname}`,
            searchParams: e.searchParams,
          };
  } catch {
    return null;
  }
}
function Mn(t) {
  const e = t.get("name")?.trim();
  if (e) return e;
  const n = t.get("path")?.trim();
  return n ? En(n) : "folder";
}
function En(t) {
  const e = t.replace(/\\/g, "/").replace(/\/+$/, "");
  return e.split("/").filter(Boolean).pop() || e || t;
}
function Ot(t, e) {
  try {
    return new URL(t).href === new URL(e).href;
  } catch {
    return t === e;
  }
}
function le(t) {
  try {
    const e = new URL(t);
    return e.protocol === "http:" || e.protocol === "https:"
      ? !0
      : e.href === "about:blank";
  } catch {
    return !1;
  }
}
function An(t) {
  if (!t.entries.length) return null;
  const e = Math.max(0, Math.min(t.activeIndex, t.entries.length - 1)),
    n = t.entries[e];
  if (!n || !le(n.url)) return null;
  const r = [];
  let s = -1;
  return (
    t.entries.forEach((o, i) => {
      le(o.url) && (i === e && (s = r.length), r.push(o));
    }),
    s < 0 ? null : { entries: r, activeIndex: s }
  );
}
function Tn(t, e) {
  if (!t.entries.length) return null;
  const n = Math.max(0, Math.min(t.activeIndex, t.entries.length - 1)),
    r = t.entries
      .map((i, a) => ({ entry: i, originalIndex: a }))
      .filter(({ entry: i }) => !Ot(i.url, e));
  if (r.length === t.entries.length) return t;
  if (r.length === 0) return null;
  const o =
    r.find(({ originalIndex: i }) => i === n) ??
    r
      .slice()
      .reverse()
      .find(({ originalIndex: i }) => i < n) ??
    r.find(({ originalIndex: i }) => i > n);
  return o
    ? { entries: r.map(({ entry: i }) => i), activeIndex: r.indexOf(o) }
    : null;
}
const Ln = 4,
  On = "tab-",
  xt = Ln * 3,
  Dt = 10 ** xt,
  Ge = new Set();
function xn(t) {
  return (
    Ge.add(t),
    () => {
      Ge.delete(t);
    }
  );
}
function Dn(t) {
  for (const e of Ge) if (e(t)) return !0;
  return !1;
}
function ve() {
  for (;;) {
    const t = _t(se.randomInt(Dt));
    if (!Dn(t)) return t;
  }
}
function _n(t) {
  if (!(!Number.isSafeInteger(t) || t < 0 || t >= Dt)) return _t(t);
}
function _t(t) {
  return w.parse(E.PageId, `${On}${String(t).padStart(xt, "0")}`);
}
function Wt(t, e) {
  const n = t.tabLayout === "modern",
    r = t.entries.findIndex((o) => E.tabs(o).some((i) => i.id === e)),
    s = t.entries[r];
  return !s || (s.kind === "tab" && s.category === "pinned")
    ? n
      ? E.TOP_TAB_INDEX
      : void 0
    : E.tabIndexAt(t, n ? r : r + 1);
}
function Wn(t, e) {
  const n = t.entries.find(
    (o) => o.kind === "group" && o.tabs.some((i) => i.id === e),
  );
  if (n?.kind !== "group") return { index: Wt(t, e) };
  const r = n.tabs.findIndex((o) => o.id === e),
    s = t.tabLayout === "modern";
  return { groupId: n.id, index: E.tabIndex(s ? r : r + 1) };
}
function Nn(t, e) {
  if (e.kind === "end") return {};
  const n = t.entries.findIndex((s) =>
      E.tabs(s).some((o) => o.id === e.entryId),
    ),
    r = t.entries[n];
  return r
    ? r.kind === "group" && r.id === e.groupId
      ? {
          groupId: r.id,
          index: E.tabIndex(r.tabs.findIndex((s) => s.id === e.entryId)),
        }
      : { index: E.tabIndexAt(t, n) }
    : {};
}
function xe(t) {
  return Lt(t) ?? "";
}
function Nt(t) {
  const e = t.pageId ?? ve();
  return {
    kind: "newTab",
    windowId: t.windowId,
    args: {
      entryId: w.parse(E.EntryId, e),
      root: { kind: "page", pageId: e },
      index: t.index,
      ...(t.groupId === void 0 ? {} : { groupId: t.groupId }),
      activate: t.activate,
      page: {
        detail: {
          url: t.url,
          title: xe(t.url),
          openedAt: t.now,
          lastShownAt: t.activate ? t.now : 0,
          lastActivityAt: t.now,
        },
      },
    },
  };
}
function Fn(t) {
  const e = ve();
  return {
    kind: "createAndPlacePageInChat",
    args: {
      column: t.column,
      viewId: t.viewId,
      expectedChatId: t.expectedChatId,
      slotId: w.parse(E.SlotId, e),
      pageId: e,
      present: t.present,
      detail: {
        url: t.url,
        title: xe(t.url),
        openedAt: t.now,
        lastShownAt: 0,
        lastActivityAt: t.now,
        ...(t.origin ? { origin: t.origin } : {}),
      },
    },
  };
}
function Bn(t) {
  const e = t.pageId ?? ve(),
    n = t.revealIn ? w.parse(E.EntryId, se.randomUUID()) : void 0;
  return {
    kind: "createPageInChat",
    chatId: t.chatId,
    ...(t.revealIn && n
      ? {
          reveal: {
            windowId: t.revealIn,
            chatTab: { entryId: n, viewId: S.chatViewIdForEntry(n, "root") },
          },
        }
      : {}),
    args: {
      slotId: w.parse(E.SlotId, e),
      pageId: e,
      detail: {
        url: t.url,
        title: xe(t.url),
        openedAt: t.now,
        lastShownAt: 0,
        lastActivityAt: t.now,
        origin: t.chatId,
      },
    },
  };
}
function qn(t) {
  return { ...Ft(t), kind: "replaceNewTabWithPage" };
}
function Un(t) {
  return { ...Ft(t), kind: "replaceChatTabWithPage" };
}
function Ft(t) {
  const e = t.pageId ?? ve();
  return {
    entryId: t.entryId,
    args: {
      pageId: e,
      page: {
        detail: {
          url: t.url,
          title: xe(t.url),
          openedAt: t.now,
          lastShownAt: t.now,
          lastActivityAt: t.now,
        },
      },
    },
  };
}
function Hn(t) {
  return {
    kind: "replaceTabWithNewTab",
    args: { source: t.source, entryId: t.source.entryId },
  };
}
function De(t, e) {
  return {
    kind: "newWindow",
    args: {
      windowId: t,
      bounds: e ?? w.parse(A.WindowBounds, S.DEFAULT_BROWSER_WINDOW_BOUNDS),
      tab: {
        entryId: w.parse(E.EntryId, se.randomUUID()),
        root: { kind: "newTab" },
      },
    },
  };
}
function Gn(t) {
  const e = Nt({
    windowId: t.windowId,
    pageId: t.pageId,
    url: t.url,
    activate: !0,
    now: t.now,
  });
  if (e.args.root.kind !== "page" || !e.args.page)
    throw new Error("A new page window must carry its page root and record.");
  return {
    kind: "newWindow",
    args: {
      windowId: t.windowId,
      bounds:
        t.bounds ?? w.parse(A.WindowBounds, S.DEFAULT_BROWSER_WINDOW_BOUNDS),
      tab: { entryId: e.args.entryId, root: e.args.root, page: e.args.page },
    },
  };
}
function jn(t) {
  if (!(!t || t.length === 0))
    return { entries: t.map((e) => ({ ...e })), activeIndex: t.length - 1 };
}
function Kn(t) {
  if (t.kind === "already-loaded") return { kind: "none" };
  const e = t.history?.entries[t.history.activeIndex]?.url;
  if (!t.url && e && !le(e)) return { kind: "none" };
  const n = t.url || e;
  return n
    ? t.history && e && le(n) && le(e)
      ? { kind: "restore", history: t.history }
      : {
          kind: "navigate",
          url: n,
          visitType: t.visitType ?? kn.VisitType.TYPED,
          ...(e === n ? { resumesHistory: !0 } : {}),
          referrer: t.referrer,
        }
    : { kind: "none" };
}
function $n(t) {
  return {
    pageId: t.pageId,
    url: t.url,
    faviconUrl: t.faviconUrl,
    lastActivityAt: t.lastActivityAt,
    ...(t.landing ? {} : { navEntry: { url: t.url, title: t.title } }),
  };
}
async function Ve(t, e = !0, n, r) {
  if (t.lifecycle.kind === "blocked") return t.lifecycle;
  if (t.lifecycle.kind === "old")
    return { kind: "blocked", reason: "initial-layout-unavailable" };
  if (t.store.state.data.windows.length > 0) return { kind: "ready" };
  if (!e) return { kind: "dormant" };
  if (!r) {
    const i = await t.store.reopenLastClosed({ kind: "new-window" });
    if (i.ok) return { kind: "ready" };
    if (i.reason !== "not-found")
      return { kind: "blocked", reason: "no-window" };
  }
  const s = r ?? w.parse(E.WindowId, se.randomUUID());
  return (await t.store.dispatch(De(s, n))).ok
    ? { kind: "ready" }
    : { kind: "blocked", reason: "no-window" };
}
function j(t, e) {
  return `${t}:${e}`;
}
function Be(t, e, n) {
  if (t === e) {
    const o =
      t.length === 0 ? [] : [{ kind: "retain", index: 0, count: t.length }];
    return { baseLength: t.length, parts: o };
  }
  const r = new Map();
  for (let o = 0; o < t.length; o++) r.set(t[o], o);
  const s = [];
  for (const o of e) {
    const i = r.get(o),
      a = s.at(-1);
    i !== void 0
      ? a?.kind === "retain" && a.index + a.count === i
        ? (a.count += 1)
        : s.push({ kind: "retain", index: i, count: 1 })
      : a?.kind === "insert"
        ? a.values.push(n(o))
        : s.push({ kind: "insert", values: [n(o)] });
  }
  return { baseLength: t.length, parts: s };
}
function nt(t, e) {
  if (t === e) return { set: {}, remove: [] };
  const n = [],
    r = [];
  for (const s in e) Object.hasOwn(e, s) && t[s] !== e[s] && n.push([s, e[s]]);
  for (const s in t) Object.hasOwn(t, s) && !Object.hasOwn(e, s) && r.push(s);
  return { set: Object.fromEntries(n), remove: r };
}
function zn(t) {
  const e = new Map();
  for (const n of t) n.kind === "group" && e.set(n.id, n.tabs);
  return e;
}
function Vn(t, e) {
  if (
    t.window.id !== e.window.id ||
    t.revision >= e.revision ||
    t.metadataRevision !== e.metadataRevision
  )
    return;
  let n;
  const { entries: r, ...s } = e.window;
  return {
    kind: "structure-update",
    windowId: e.window.id,
    baseRevision: t.revision,
    revision: e.revision,
    metadataRevision: e.metadataRevision,
    fields: s,
    entries: Be(t.window.entries, r, (o) => {
      if (o.kind !== "group") return o;
      n ??= zn(t.window.entries);
      const { tabs: i, ...a } = o;
      return {
        kind: "group",
        header: a,
        tabs: Be(n.get(o.id) ?? [], i, (c) => c),
      };
    }),
    chats: nt(t.chats, e.chats),
    pages: Be(t.pages, e.pages, (o) => o),
    entryLastShownAt: nt(t.entryLastShownAt, e.entryLastShownAt),
    ...(e.chrome ? { chrome: e.chrome } : {}),
  };
}
function Yn(t, e, n, r) {
  for (const s of n)
    t.publishIPCSignal(
      { domain: "layout", type: "pageClosed", payload: { pageId: r } },
      j(e, s),
    );
}
function Xn(t, e, n, r) {
  const s = new Map(),
    o = new Map(),
    i = new Map();
  function a(m) {
    for (const P of i.get(m)?.keys() ?? []) {
      const k = o.get(P);
      (k?.delete(m), k?.size === 0 && o.delete(P));
    }
    i.delete(m);
  }
  function c(m) {
    const P = m.window.id;
    a(P);
    const k = new Map();
    (m.pages.forEach((h, y) => {
      k.set(h.id, y);
      let M = o.get(h.id);
      (M || o.set(h.id, (M = new Set())), M.add(P));
    }),
      i.set(P, k));
  }
  function f(m) {
    const P = [];
    for (const k of m.pageIds) {
      const h = t.summaryOf(k);
      h && P.push(h);
    }
    return P;
  }
  function l(m, P, k) {
    return {
      revision: m.revision,
      metadataRevision: t.metadataRevision,
      window: m.window,
      chats: m.chats,
      pages: P,
      entryLastShownAt: m.entryLastShownAt,
      ...(k ? { chrome: k } : {}),
    };
  }
  function I(m) {
    const P = new Set();
    for (const k of t.state.data.windows) {
      P.add(k.id);
      const h = s.get(k.id),
        y = t.windowLayoutOf(k.id);
      if (!y || (h && h.revision >= y.revision)) continue;
      const M = m?.get(k.id),
        W =
          h !== void 0 &&
          M?.kind === "window-content" &&
          h.window === M.previousWindow &&
          h.metadataRevision === t.metadataRevision,
        N = l(y, W ? h.pages : f(y), r?.(k.id));
      (s.set(k.id, N), W || c(N));
      const D = j(e, k.id),
        H = h && Vn(h, N);
      if (H)
        try {
          n.publishIPCState("layout.tree", D, H);
        } finally {
          n.cacheIPCState("layout.tree", D, N);
        }
      else n.publishIPCState("layout.tree", D, N);
    }
    for (const k of s.keys()) {
      if (P.has(k)) continue;
      (s.delete(k), a(k));
      const h = j(e, k);
      (n.forgetIPCState("layout.tree", h),
        n.forgetIPCState("layout.pageMetadata", h));
    }
  }
  I();
  const b = t.subscribe((m, P, k) => I(k)),
    C = t.subscribeMetadata((m) => {
      const P = new Map();
      for (const k of m.pages)
        for (const h of o.get(k.id) ?? []) {
          let y = P.get(h);
          (y || P.set(h, (y = [])), y.push(k));
        }
      try {
        for (const k of s.keys())
          n.publishIPCState("layout.pageMetadata", j(e, k), {
            baseRevision: m.baseRevision,
            revision: m.revision,
            pages: P.get(k) ?? [],
          });
      } finally {
        for (const [k, h] of s) {
          const y = P.get(k);
          let M = h.pages;
          if (y) {
            const N = M.slice(),
              D = i.get(k);
            for (const H of y) {
              const Q = D?.get(H.id);
              Q !== void 0 && (N[Q] = H);
            }
            M = N;
          }
          const W = { ...h, metadataRevision: m.revision, pages: M };
          (s.set(k, W), n.cacheIPCState("layout.tree", j(e, k), W));
        }
      }
    });
  return {
    readWindow: (m) => s.get(m),
    publishWindow: (m) => {
      const P = t.windowLayoutOf(m);
      if (!P) return;
      const k = l(P, f(P), r?.(m));
      (s.set(m, k), c(k), n.publishIPCState("layout.tree", j(e, m), k));
    },
    stop: () => {
      (b(), C());
    },
  };
}
function Zn(t, e, n, r) {
  const s = (l) => {
      for (const I of e.state.data.windows)
        r.publishIPCState("layout.overlay", j(n, I.id), l);
    },
    o = (l) => {
      for (const I of e.state.data.windows)
        r.publishIPCState("layout.cursor", j(n, I.id), l);
    };
  (s(t.snapshot()), o(t.cursorSnapshot()));
  const i = t.subscribe((l) => {
      s(l);
    }),
    a = t.subscribeCursor((l) => {
      o(l);
    });
  let c = new Set(e.state.data.windows.map((l) => l.id));
  const f = e.subscribe(() => {
    const l = new Set(e.state.data.windows.map((m) => m.id)),
      I = [...l].filter((m) => !c.has(m));
    if (((c = l), I.length === 0)) return;
    const b = t.snapshot(),
      C = t.cursorSnapshot();
    for (const m of I) {
      const P = j(n, m);
      (r.publishIPCState("layout.overlay", P, b),
        r.publishIPCState("layout.cursor", P, C));
    }
  });
  return () => {
    (i(), a(), f());
  };
}
const je = 1 / 64,
  $ = 1;
function Bt(t, e) {
  return (
    e.x >= t.x - $ &&
    e.y >= t.y - $ &&
    e.x + e.width <= t.x + t.width + $ &&
    e.y + e.height <= t.y + t.height + $
  );
}
function rt(t) {
  const e = [...new Set(t)].sort((s, o) => s - o),
    n = new Map();
  let r = 0;
  for (; r < e.length; ) {
    let s = r;
    for (; s + 1 < e.length && e[s + 1] - e[r] <= je; ) s++;
    const o = Math.round((e[r] + e[s]) / 2);
    for (let i = r; i <= s; i++) n.set(e[i], o);
    r = s + 1;
  }
  return n;
}
function Pe(t, e) {
  return t.get(e) ?? Math.round(e);
}
const Jn = w.variant("kind", [
    w.strictObject({ kind: w.literal("page"), pageId: E.PageId }),
    w.strictObject({ kind: w.literal("newTab"), entryId: E.EntryId }),
    w.strictObject({
      kind: w.literal("chat"),
      chatId: E.ChatId,
      viewId: E.ChatViewId,
      entryId: E.EntryId,
      view: A.ChatViewRef,
    }),
    w.strictObject({
      kind: w.literal("destination"),
      destination: A.RailDestination,
      entryId: E.EntryId,
    }),
    w.strictObject({
      kind: w.literal("chooser"),
      paneId: E.PaneId,
      entryId: E.EntryId,
    }),
  ]),
  Ee = w.strictObject({
    x: w.pipe(w.number(), w.finite()),
    y: w.pipe(w.number(), w.finite()),
    width: w.pipe(w.number(), w.finite(), w.minValue(0)),
    height: w.pipe(w.number(), w.finite(), w.minValue(0)),
  }),
  Qn = w.strictObject({
    presentation: w.union([w.literal("classic"), w.literal("activity")]),
    bounds: Ee,
  }),
  er = w.pipe(w.number(), w.integer(), w.minValue(0)),
  st = w.pipe(w.number(), w.integer(), w.minValue(1)),
  tr = w.strictObject({
    windowId: E.WindowId,
    rendererGeneration: st,
    treeRevision: er,
    geometryRevision: st,
    viewport: Ee,
    addressBar: w.optional(Qn),
    targets: w.array(w.strictObject({ target: Jn, rect: Ee })),
  });
function qt(t, e, n = () => e) {
  if (t.length === 0) return [];
  const r = { start: Math.round(e.x), end: Math.round(e.x + e.width) },
    s = { start: Math.round(e.y), end: Math.round(e.y + e.height) };
  if (![r.start, r.end, s.start, s.end].every((b) => Number.isFinite(b)))
    return;
  const i = t.map(({ target: b }) => n(b)),
    a = [
      ...t.flatMap(({ rect: b }) => [b.x, b.x + b.width]),
      ...i.flatMap((b) => [b.x, b.x + b.width]),
    ],
    c = [
      ...t.flatMap(({ rect: b }) => [b.y, b.y + b.height]),
      ...i.flatMap((b) => [b.y, b.y + b.height]),
    ];
  if (!a.every(Number.isFinite) || !c.every(Number.isFinite)) return;
  const f = rt([...a, r.start, r.end]),
    l = rt([...c, s.start, s.end]),
    I = [];
  for (const [b, { target: C, rect: m }] of t.entries()) {
    const P = i[b] ?? e,
      k = ot(
        { start: Pe(f, m.x), end: Pe(f, m.x + m.width) },
        { start: Math.round(P.x), end: Math.round(P.x + P.width) },
      ),
      h = ot(
        { start: Pe(l, m.y), end: Pe(l, m.y + m.height) },
        { start: Math.round(P.y), end: Math.round(P.y + P.height) },
      );
    if (k.end <= k.start || h.end <= h.start) return;
    I.push({
      target: C,
      rect: {
        x: k.start,
        y: h.start,
        width: k.end - k.start,
        height: h.end - h.start,
      },
    });
  }
  return I;
}
function ot(t, e) {
  return {
    start: Math.min(Math.max(t.start, e.start), e.end),
    end: Math.min(Math.max(t.end, e.start), e.end),
  };
}
const nr = [
    "invalid-shape",
    "foreign-sender",
    "stale-generation",
    "stale-tree-revision",
    "stale-geometry-revision",
    "target-mismatch",
    "unstable-bounds",
    "unsafe-viewport",
    "unsafe-containment",
  ],
  Ye = "UI-LAYER";
function Ut() {
  return {
    "invalid-shape": 0,
    "foreign-sender": 0,
    "stale-generation": 0,
    "stale-tree-revision": 0,
    "stale-geometry-revision": 0,
    "target-mismatch": 0,
    "unstable-bounds": 0,
    "unsafe-viewport": 0,
    "unsafe-containment": 0,
  };
}
function rr(t, e) {
  if (e.sender.layerId !== Ye)
    return { accepted: !1, reason: "foreign-sender" };
  const n = w.safeParse(tr, t);
  if (!n.success)
    return {
      accepted: !1,
      reason: "invalid-shape",
      paths: n.issues.map((l) => w.getDotPath(l) ?? ""),
    };
  const r = n.output;
  if (r.windowId !== e.sender.windowId)
    return { accepted: !1, reason: "foreign-sender" };
  const s = e.rendererOf(r.windowId);
  if (!s || s.generation !== r.rendererGeneration)
    return { accepted: !1, reason: "stale-generation" };
  const o = e.windowRevisionOf(r.windowId);
  if (o === void 0 || r.treeRevision < o || r.treeRevision > e.treeRevision)
    return { accepted: !1, reason: "stale-tree-revision" };
  const i = s.accepted;
  if (
    i &&
    i.rendererGeneration === r.rendererGeneration &&
    r.geometryRevision <= i.geometryRevision
  )
    return { accepted: !1, reason: "stale-geometry-revision" };
  if (
    !we(r.viewport) ||
    !r.targets.every((l) => we(l.rect)) ||
    (r.addressBar !== void 0 && !we(r.addressBar.bounds))
  )
    return { accepted: !1, reason: "unstable-bounds" };
  if (!ir(r.viewport, e.contentBoundsOf(r.windowId)))
    return { accepted: !1, reason: "unsafe-viewport" };
  if (r.addressBar !== void 0 && !it(r.viewport, r.addressBar.bounds))
    return { accepted: !1, reason: "unsafe-containment" };
  const a = or(r, e);
  if (!a.complete) return a.mismatch;
  if (!a.regions.every((l) => it(r.viewport, l.rect)))
    return { accepted: !1, reason: "unsafe-containment" };
  const c = Ae(r.viewport),
    f = qt(a.regions, c, () => c);
  return f
    ? {
        accepted: !0,
        placement: {
          windowId: r.windowId,
          treeRevision: r.treeRevision,
          rendererGeneration: r.rendererGeneration,
          geometryRevision: r.geometryRevision,
          viewport: c,
          ...(r.addressBar
            ? {
                addressBar: {
                  presentation: r.addressBar.presentation,
                  bounds: Ae(r.addressBar.bounds),
                },
              }
            : {}),
          regions: f.map((l) => ({
            target: l.target,
            key: S.targetKey(l.target),
            rect: l.rect,
          })),
        },
      }
    : { accepted: !1, reason: "unstable-bounds" };
}
function sr(t, e) {
  const n = Ae(e);
  if (!we(t.viewport) || !we(n)) return;
  const r = dt(
      t.regions.map(({ rect: a }) => ({ start: a.x, end: a.x + a.width })),
      { start: t.viewport.x, end: t.viewport.x + t.viewport.width },
      { start: n.x, end: n.x + n.width },
    ),
    s = dt(
      t.regions.map(({ rect: a }) => ({ start: a.y, end: a.y + a.height })),
      { start: t.viewport.y, end: t.viewport.y + t.viewport.height },
      { start: n.y, end: n.y + n.height },
    ),
    o = t.regions.map((a) => ({ target: a.target, rect: at(a.rect, r, s) })),
    i = qt(o, n, (a) => {
      const c = t.regions.find((f) => S.targetKey(f.target) === S.targetKey(a));
      return c
        ? c.rect.x + c.rect.width <= t.viewport.x + je
          ? { ...n, x: n.x - n.width }
          : c.rect.x >= t.viewport.x + t.viewport.width - je
            ? { ...n, x: n.x + n.width }
            : n
        : n;
    });
  if (i)
    return {
      windowId: t.windowId,
      treeRevision: t.treeRevision,
      rendererGeneration: t.rendererGeneration,
      geometryRevision: t.geometryRevision,
      viewport: n,
      ...(t.addressBar
        ? {
            addressBar: {
              presentation: t.addressBar.presentation,
              bounds: Ae(at(t.addressBar.bounds, r, s)),
            },
          }
        : {}),
      regions: i.map((a) => ({
        target: a.target,
        key: S.targetKey(a.target),
        rect: a.rect,
      })),
    };
}
function or(t, e) {
  const n = S.windowLayoutModel(e.data, t.windowId),
    r = n ? S.expectedTargets(n) : [],
    s = new Map();
  let o = 0;
  for (const f of t.targets) {
    const l = S.targetKey(f.target);
    s.has(l) ? (o += 1) : s.set(l, f.rect);
  }
  const i = [];
  let a = 0;
  for (const f of r) {
    const l = S.targetKey(f),
      I = s.get(l);
    if (!I) {
      a += 1;
      continue;
    }
    (s.delete(l), i.push({ target: f, rect: I }));
  }
  const c = o + s.size;
  return a > 0 || c > 0
    ? {
        complete: !1,
        mismatch: {
          accepted: !1,
          reason: "target-mismatch",
          missingCount: a,
          extraCount: c,
        },
      }
    : { complete: !0, regions: i };
}
function Ae(t) {
  const e = Math.round(t.x),
    n = Math.round(t.y);
  return {
    x: e,
    y: n,
    width: Math.round(t.x + t.width) - e,
    height: Math.round(t.y + t.height) - n,
  };
}
function we(t) {
  return t.width > 0 && t.height > 0;
}
function ir(t, e) {
  return e
    ? Math.abs(t.x) <= $ &&
        Math.abs(t.y) <= $ &&
        Math.abs(t.width - e.width) <= $ &&
        Math.abs(t.height - e.height) <= $
    : !1;
}
function it(t, e) {
  return Bt(t, e);
}
function at(t, e, n) {
  const r = e(t.x),
    s = n(t.y);
  return {
    x: r,
    y: s,
    width: e(t.x + t.width) - r,
    height: n(t.y + t.height) - s,
  };
}
function dt(t, e, n) {
  const r = (n.end - n.start) / (e.end - e.start),
    s = (C) => n.start + (C - e.start) * r,
    o = new Set([e.start, e.end]);
  for (const C of t)
    for (const m of [C.start, C.end]) m > e.start && m < e.end && o.add(m);
  const i = [...o].sort((C, m) => C - m),
    a = i.slice(0, -1).map((C, m) => {
      const P = i[m + 1],
        k = (C + P) / 2;
      return {
        start: C,
        end: P,
        covered: t.some((h) => h.start < k && h.end > k),
      };
    }),
    c = a.reduce((C, m) => (m.covered ? C + (m.end - m.start) : C), 0),
    f = n.end - n.start - (e.end - e.start);
  if (c <= 0 || c + f <= 0) return s;
  const l = (c + f) / c,
    I = new Map();
  let b = n.start;
  I.set(e.start, b);
  for (const C of a) {
    const m = C.end - C.start;
    ((b += C.covered ? m * l : m), I.set(C.end, b));
  }
  return (C) => {
    const m = I.get(C);
    if (m !== void 0) return m;
    if (C <= e.start || C >= e.end) return s(C);
    const P = a.find((M) => C > M.start && C < M.end),
      k = P ? I.get(P.start) : void 0,
      h = P ? I.get(P.end) : void 0;
    if (!P || k === void 0 || h === void 0) return s(C);
    const y = (C - P.start) / (P.end - P.start);
    return k + (h - k) * y;
  };
}
function Ht(t) {
  if (t.regions.length === 0) return;
  let e = Number.POSITIVE_INFINITY,
    n = Number.POSITIVE_INFINITY,
    r = Number.NEGATIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY;
  for (const { rect: o } of t.regions)
    o.width <= 0 ||
      o.height <= 0 ||
      ((e = Math.min(e, o.x)),
      (n = Math.min(n, o.y)),
      (r = Math.max(r, o.x + o.width)),
      (s = Math.max(s, o.y + o.height)));
  return e > r || n > s
    ? { x: 0, y: 0, width: 0, height: 0 }
    : { x: e, y: n, width: r - e, height: s - n };
}
function Me(t) {
  return new Set(
    t.regions.flatMap(({ target: e }) => (e.kind === "page" ? [e.pageId] : [])),
  );
}
function ue(t) {
  return {
    rendererGeneration: t.rendererGeneration,
    treeRevision: t.treeRevision,
    geometryRevision: t.geometryRevision,
  };
}
function Xe(t, e) {
  return (
    t.rendererGeneration === e.rendererGeneration &&
    t.treeRevision === e.treeRevision &&
    t.geometryRevision === e.geometryRevision
  );
}
const Ke = 100,
  Gt = 150,
  ar = 34,
  dr = "ease-out",
  cr = "cubic-bezier(0.3333333333, 0.6666666667, 0.6666666667, 1)",
  ur = 0.64,
  ct = 0.4,
  ut = 0.82,
  lt = 16 / 9,
  lr = 12,
  ft = 40;
function jt(t) {
  return !Number.isFinite(t) || t <= 0 ? 0 : t >= 1 ? 1 : 1 - (1 - t) ** 2;
}
function fr(t) {
  return typeof t != "number" || !Number.isFinite(t)
    ? ur
    : t < ct
      ? ct
      : t > ut
        ? ut
        : hr(t);
}
function hr(t) {
  return Math.round(t * 1e3) / 1e3;
}
function gr(t, e, n) {
  const { placement: r } = n,
    { rect: s, viewport: o, resize: i } = t,
    a = { x: 0, y: 0, ...o };
  if (
    !(
      !r ||
      t.pageId !== e.pageId ||
      t.revision <= e.revision ||
      !Xe(t.endpoint, r) ||
      r.treeRevision < n.layoutRevision ||
      !$e(r.viewport, o) ||
      !$e(n.contentBounds, o) ||
      !yr(s, Kt(o, i)) ||
      !Bt(a, s)
    )
  )
    return { pageId: e.pageId, resize: i, rect: $t(s), viewport: a };
}
function pr(t, e) {
  const n = e.width === t.viewport.width && e.height === t.viewport.height,
    r = { kind: "page", pageId: t.pageId };
  return {
    target: r,
    key: S.targetKey(r),
    rect: n ? t.rect : $t(Kt(e, t.resize)),
    borderRadius: lr,
  };
}
function Kt(t, e) {
  const n = Math.max(
      1,
      Math.min(t.width - 2 * e.insetX, (t.height - 2 * e.insetY) * lt),
    ),
    r = Math.max(1, n / lt);
  return {
    x: (t.width - n) / 2,
    y: (t.height - r) / 2 + ft / 2,
    width: n,
    height: Math.max(1, r - ft),
  };
}
function $t(t) {
  const e = Math.round(t.x),
    n = Math.round(t.y);
  return {
    x: e,
    y: n,
    width: Math.round(t.x + t.width) - e,
    height: Math.round(t.y + t.height) - n,
  };
}
function $e(t, e) {
  return Math.abs(t.width - e.width) <= $ && Math.abs(t.height - e.height) <= $;
}
function yr(t, e) {
  return Math.abs(t.x - e.x) <= $ && Math.abs(t.y - e.y) <= $ && $e(t, e);
}
const ne = { ok: !1, refusal: { kind: "not-allowed" } };
function zt(t, e) {
  if (e.kind === "grant") {
    const o = w.safeParse(E.ChatId, e.driver);
    if (!o.success) return { ok: !1, refusal: { kind: "unknown-driver" } };
    const i = t?.driver ?? e.member;
    return i !== void 0 && i !== o.output
      ? { ok: !1, refusal: { kind: "held", by: i } }
      : t && S.pageIsProtected(t.control)
        ? { ok: !1, refusal: { kind: "protected" } }
        : {
            ok: !0,
            drive: {
              driver: o.output,
              control: { kind: "agent", agentId: e.agentId },
            },
          };
  }
  if (!t) return ne;
  const { driver: n, control: r } = t,
    { agentId: s } = r;
  switch (e.kind) {
    case "pause":
      return r.kind !== "agent"
        ? ne
        : {
            ok: !0,
            drive: { driver: n, control: { kind: "paused", agentId: s } },
          };
    case "take-over":
      return r.kind !== "agent" && r.kind !== "paused"
        ? ne
        : {
            ok: !0,
            drive: {
              driver: n,
              control: { kind: "user", agentId: s, requestId: e.requestId },
            },
          };
    case "hand-back":
      return r.kind !== "user" || (e.requestId && r.requestId !== e.requestId)
        ? ne
        : {
            ok: !0,
            drive: { driver: n, control: { kind: "agent", agentId: s } },
          };
    case "begin-sign-in":
      return r.kind !== "agent" && r.kind !== "paused"
        ? ne
        : {
            ok: !0,
            drive: {
              driver: n,
              control: { kind: "sign-in", agentId: s, requestId: e.requestId },
            },
          };
    case "take-over-sign-in":
      return r.kind !== "sign-in" || r.requestId !== e.requestId
        ? ne
        : { ok: !0, drive: { driver: n, control: { ...r, kind: "user" } } };
    case "finish-sign-in":
      return r.kind !== "sign-in" || r.requestId !== e.requestId
        ? ne
        : {
            ok: !0,
            drive: { driver: n, control: { kind: "agent", agentId: s } },
          };
  }
}
function wr(t, e) {
  const n = t[e];
  return n?.control.kind === "agent" ? n.driver : void 0;
}
const vr = 10;
class mr {
  presentation = new Map();
  setPresentation(e, n) {
    (n ? this.presentation.set(e, n) : this.presentation.delete(e),
      this.notify());
  }
  presentationOf(e) {
    return this.presentation.get(e);
  }
  presentedPages(e, n) {
    return S.presentedPageIds(e, n, Object.fromEntries(this.presentation));
  }
  windowPresenting(e, n, r) {
    return S.windowPresenting(e, n, r, Object.fromEntries(this.presentation));
  }
  projectPlacement(e) {
    const n = this.presentation.get(e.windowId);
    if (!n) return e;
    const r = pr(n, e.viewport);
    return {
      ...e,
      contentRegion: e.contentRegion ?? Ht(e),
      regions: [...e.regions.filter((s) => s.key !== r.key), r],
    };
  }
  liveness = new Map();
  drive = new Map();
  chrome = new Map();
  routeHistory = new Map();
  routeScreenshots = new Map();
  cursors = new Map();
  listeners = new Set();
  cursorListeners = new Set();
  driveListeners = new Set();
  report;
  notifying = !1;
  dirty = !1;
  constructor(e) {
    this.report = e ?? (() => {});
  }
  getLiveness(e) {
    return this.liveness.get(e);
  }
  setLiveness(e, n) {
    this.liveness.get(e) !== n && (this.liveness.set(e, n), this.notify());
  }
  clearLiveness(e) {
    this.liveness.delete(e) && this.notify();
  }
  setChrome(e, n) {
    const r = this.chrome.get(e);
    (r?.appTabId === n.appTabId &&
      r.tabSurfaceIntent === n.tabSurfaceIntent &&
      r.canGoBack === n.canGoBack &&
      r.canGoForward === n.canGoForward &&
      r.loading === n.loading &&
      r.audio === n.audio &&
      r.hasCertificateBypassed === n.hasCertificateBypassed &&
      r.isWaitingForCaptcha === n.isWaitingForCaptcha &&
      r.captchaExpiresAt === n.captchaExpiresAt &&
      r.screenshotPath === n.screenshotPath &&
      r.screenshotUpdatedAt === n.screenshotUpdatedAt) ||
      (this.chrome.set(e, n), this.notify());
  }
  clearChrome(e) {
    this.chrome.delete(e) && this.notify();
  }
  setRouteHistory(e, n) {
    if (!n) {
      this.routeHistory.delete(e) && this.notify();
      return;
    }
    const r = this.routeHistory.get(e);
    (r?.canGoBack === n.canGoBack &&
      r.canGoForward === n.canGoForward &&
      r.url === n.url) ||
      (this.routeHistory.set(e, n), this.notify());
  }
  getRouteScreenshot(e) {
    return this.routeScreenshots.get(e);
  }
  setRouteScreenshot(e, n) {
    if (!n) {
      this.routeScreenshots.delete(e) && this.notify();
      return;
    }
    (this.routeScreenshots.set(e, n), this.notify());
  }
  getCursor(e) {
    return this.cursors.get(e);
  }
  setCursor(e, n) {
    const r = this.cursors.get(e);
    if (n === void 0) {
      if (!this.cursors.delete(e)) return;
    } else {
      if (
        r?.xRatio === n.xRatio &&
        r.yRatio === n.yRatio &&
        r.viewportAspectRatio === n.viewportAspectRatio &&
        r.label === n.label
      )
        return;
      this.cursors.set(e, n);
    }
    this.notifyCursor();
  }
  getDrive(e) {
    return this.drive.get(e);
  }
  moveDrive(e, n) {
    const r = this.drive.get(e),
      s = zt(r, n);
    return s.ok
      ? r && S.samePageControl(r.control, s.drive.control)
        ? { ok: !0, drive: r }
        : (this.drive.set(e, s.drive), this.notifyDrive(e), s)
      : s;
  }
  undoGrant(e, n, r) {
    const s = this.drive.get(e);
    if (!(s?.driver !== n.driver || !S.samePageControl(s.control, n.control))) {
      if (!r) {
        this.releaseDrive(e);
        return;
      }
      S.samePageControl(s.control, r.control) ||
        (this.drive.set(e, r), this.notifyDrive(e));
    }
  }
  grantedDriver(e) {
    const n = this.drive.get(e);
    return n?.control.kind === "agent" ? n.driver : void 0;
  }
  captureOwner(e) {
    const n = this.drive.get(e),
      r = n?.control.kind;
    return r === "agent" || r === "sign-in" ? n?.driver : void 0;
  }
  releaseDrive(e) {
    this.drive.delete(e) && this.notifyDrive(e);
  }
  snapshot() {
    const e = {};
    for (const [s, o] of this.liveness) e[s] = o;
    const n = {};
    for (const [s, o] of this.drive) n[s] = o;
    const r = {};
    for (const [s, o] of this.chrome) r[s] = o;
    return {
      ...(this.presentation.size
        ? { presentation: Object.fromEntries(this.presentation) }
        : {}),
      liveness: e,
      drive: n,
      chrome: r,
      ...(this.routeHistory.size > 0
        ? { routeHistory: Object.fromEntries(this.routeHistory) }
        : {}),
      ...(this.routeScreenshots.size > 0
        ? { routeScreenshots: Object.fromEntries(this.routeScreenshots) }
        : {}),
    };
  }
  cursorSnapshot() {
    const e = {};
    for (const [n, r] of this.cursors) e[n] = r;
    return { cursors: e };
  }
  subscribe(e) {
    return (
      this.listeners.add(e),
      () => {
        this.listeners.delete(e);
      }
    );
  }
  subscribeDrive(e) {
    return (
      this.driveListeners.add(e),
      () => {
        this.driveListeners.delete(e);
      }
    );
  }
  subscribeCursor(e) {
    return (
      this.cursorListeners.add(e),
      () => {
        this.cursorListeners.delete(e);
      }
    );
  }
  notify() {
    if (this.notifying) {
      this.dirty = !0;
      return;
    }
    this.notifying = !0;
    try {
      let e = this.snapshot();
      for (let n = 0; ; n++) {
        if (n > vr)
          throw new Error(
            "LayoutOverlay.notify: a listener kept mutating the overlay past the coalescing cap",
          );
        this.dirty = !1;
        for (const r of this.listeners)
          try {
            r(e);
          } catch (s) {
            this.report({ kind: "listener-threw", error: s });
          }
        if (!this.dirty) break;
        e = this.snapshot();
      }
    } finally {
      this.notifying = !1;
    }
  }
  notifyDrive(e) {
    for (const n of this.driveListeners)
      try {
        n(e);
      } catch (r) {
        this.report({ kind: "listener-threw", error: r });
      }
    this.notify();
  }
  notifyCursor() {
    const e = this.cursorSnapshot();
    for (const n of this.cursorListeners)
      try {
        n(e);
      } catch (r) {
        this.report({ kind: "listener-threw", error: r });
      }
  }
}
const ht = 1800 * 1e3,
  gt = 300 * 1e3,
  kr = 5e3;
function br(t) {
  const e = t.ORBITRA_DORMANT_THRESHOLD_MS;
  if (!e) return ht;
  const n = Number(e);
  return !Number.isFinite(n) || n < 0 ? ht : Math.floor(n);
}
function Ir(t) {
  const e = t.ORBITRA_DORMANCY_CHECK_INTERVAL_MS;
  if (!e) return gt;
  const n = Number(e);
  return !Number.isFinite(n) || n < kr ? gt : Math.floor(n);
}
function pt(t, e) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function Pr(t, e, n) {
  const r = [];
  for (const s of Object.keys(e.liveness)) {
    const o = s;
    if (e.liveness[o] !== "live") continue;
    const i = t.get(o);
    r.push({
      id: o,
      lastShownAt: i?.lastShownAt ?? 0,
      isGhost: i === void 0 && !n.has(o),
    });
  }
  return r;
}
function Sr(t) {
  const {
      pages: e,
      overlay: n,
      placedPageIds: r,
      now: s,
      thresholdMs: o,
      keepRecentCount: i,
    } = t,
    a = Pr(e, n, r),
    c = new Set(
      a
        .filter((l) => !l.isGhost)
        .sort((l, I) => I.lastShownAt - l.lastShownAt || pt(l.id, I.id))
        .slice(0, i)
        .map((l) => l.id),
    ),
    f = [];
  for (const l of a) {
    if (r.has(l.id) || wr(n.drive, l.id) !== void 0) continue;
    if (l.isGhost) {
      f.push(l);
      continue;
    }
    const I = n.drive[l.id]?.control;
    (I && S.pageIsProtected(I)) ||
      c.has(l.id) ||
      (s - l.lastShownAt > o && f.push(l));
  }
  return f
    .sort((l, I) => l.lastShownAt - I.lastShownAt || pt(l.id, I.id))
    .map((l) => l.id);
}
const yt = new Set(),
  Rr = 10,
  Cr = (t, e) => {
    const n = setInterval(t, e);
    return (n.unref(), () => clearInterval(n));
  };
function Mr(t) {
  const e = new Set();
  for (const n of t.windows)
    for (const { pageId: r } of E.pinnedTabs(n)) e.add(r);
  return e;
}
function Er(t) {
  const e = br(t.env),
    n = t.now ?? Date.now;
  function r() {
    const s = t.overlay.snapshot(),
      o = S.presentedPageIds(
        t.store.state.data,
        t.openWindowIds(),
        s.presentation,
      );
    if (o.kind === "incomplete") return;
    const i = o.pageIds,
      a = new Map(t.store.summaries().map((b) => [b.id, b])),
      c = Sr({
        pages: a,
        overlay: s,
        placedPageIds: i,
        now: n(),
        thresholdMs: e,
        keepRecentCount: Rr,
      }),
      f = t.retainedPageIds?.() ?? yt,
      l = t.busyPageIds?.() ?? yt,
      I = Mr(t.store.state.data);
    for (const b of c) {
      if (I.has(b) || f.has(b)) continue;
      const C = !a.has(b);
      (!C && l.has(b)) ||
        (t.applier.releaseLayer(b), C && t.overlay.clearLiveness(b));
    }
  }
  return (t.startTimer ?? Cr)(r, Ir(t.env));
}
const Vt = "[layout-diagnostics]",
  Ar = 100;
function K(t) {
  console.info(`${Vt} ${t}`);
}
function Te(t, e = 5e3) {
  S.logThrottled(`layout:${t}`, e, () => K(t));
}
function Tr(t, e) {
  const n = performance.now();
  return e.finally(() => {
    const r = Math.round(performance.now() - n);
    r >= Ar && K(`${t} took ${r}ms`);
  });
}
const Lr = 3,
  Or = 6e4;
class Yt {
  recent = new Map();
  admit(e) {
    const n = this.recentOf(e);
    return n.length >= Lr ? !1 : (this.recent.set(e, [...n, Date.now()]), !0);
  }
  isRecovering(e) {
    return this.recentOf(e).length > 0;
  }
  recentOf(e) {
    const n = Date.now() - Or,
      r = (this.recent.get(e) ?? []).filter((s) => s > n);
    return (r.length > 0 ? this.recent.set(e, r) : this.recent.delete(e), r);
  }
}
function ze(t) {
  if (t.kind !== "chooser") return t;
}
function xr(t, e, n) {
  const r = t.filter((a) => !Br(a.from, a.to));
  if (r.length === 0) return { kind: "refused" };
  const s = r.filter((a) => a.wipe);
  if (s.length > 0 && !wt(s, e)) return { kind: "refused" };
  const o = r.filter((a) => !a.wipe);
  return o.length === 0
    ? { kind: "running", driver: "native", stop: () => {} }
    : o.some((a) => !Ze(a.from, a.to)) && n.steps
      ? {
          kind: "running",
          driver: "stepped",
          stop: Nr(o, e.durationMs, n.displayRefreshRate),
        }
      : wt(o, e)
        ? { kind: "running", driver: "native", stop: () => {} }
        : { kind: "refused" };
}
function wt(t, e) {
  for (const r of t) {
    const s = r.getBounds();
    if (!Ze(s, r.to)) continue;
    const o = r.to.width > 1 ? r.to.width - 1 : r.to.width + 1;
    if (!r.setBounds({ ...s, width: o })) return !1;
  }
  const n = { animate: { duration: e.durationMs, easing: e.easing } };
  return t.every((r) => r.setBounds(r.to, n));
}
const Dr = 30,
  _r = 120,
  Wr = 60;
function Nr(t, e, n) {
  const r = n !== void 0 && Number.isFinite(n) && n > 0 ? n : Wr,
    o = 1e3 / Math.min(Math.max(r, Dr), _r),
    i = performance.now();
  let a = !1,
    c;
  const f = () => {
    const l = Math.min(1, (performance.now() - i) / e),
      I = jt(l);
    for (const b of t) if (!b.setBounds(Fr(b.from, b.to, I))) return;
    !a && l < 1 && (c = setTimeout(f, o));
  };
  return (
    (c = setTimeout(f, o)),
    () => {
      ((a = !0), clearTimeout(c));
    }
  );
}
function Fr(t, e, n) {
  const r = (i, a) => Math.round(i + (a - i) * n),
    s = r(t.x, e.x),
    o = r(t.y, e.y);
  return {
    x: s,
    y: o,
    width: r(t.x + t.width, e.x + e.width) - s,
    height: r(t.y + t.height, e.y + e.height) - o,
  };
}
function Br(t, e) {
  return Ze(t, e) && t.x === e.x && t.y === e.y;
}
function Ze(t, e) {
  return t.width === e.width && t.height === e.height;
}
const qr = 6e4;
function ie(t) {
  return (Te(`native ${t} failed`), "failed");
}
function Se(t, e) {
  return (
    t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
  );
}
class Ur {
  windows = new Map();
  contentRegions = new Map();
  pendingBoundsNotices = new Set();
  animatedLayerKeys = new Map();
  stopMotion = new Map();
  crashRecoveries = new Yt();
  port;
  overlay;
  contentBoundsOf;
  displayRefreshRateOf;
  ownedAppTargetKeys;
  held;
  captureDepartingRoute;
  constructor(e) {
    ((this.port = e.port),
      (this.overlay = e.overlay),
      (this.contentBoundsOf = e.contentBoundsOf),
      (this.displayRefreshRateOf = e.displayRefreshRateOf ?? (() => {})),
      (this.ownedAppTargetKeys = e.ownedAppTargetKeys),
      (this.held = e.held),
      (this.captureDepartingRoute = e.captureDepartingRoute));
  }
  inFocusTransition(e, n) {
    this.port.beginFocusTransition(e);
    try {
      return n();
    } finally {
      this.port.endFocusTransition(e);
    }
  }
  applyWindow(e, n) {
    return this.inFocusTransition(e, () => this.applyWindowLayers(e, n));
  }
  applyWindowLayers(e, n) {
    const r = performance.now();
    this.stopRunningMotion(e);
    const s = this.windowLayers(e),
      o = this.animatedLayerKeys.get(e),
      i = o !== void 0,
      a = vt(n),
      c = new Set(a.map((h) => h.key));
    this.startRouteDepartures(e, s, c);
    const f = this.captureHeldLayerKeys(s, c);
    let l = !this.holdObservedLayers(e, s, f);
    if ((l && ie("capture placement"), o))
      for (const h of o) c.has(h) || o.delete(h);
    this.releaseUnwanted(e, s, c, f, "settle") || (l = !0);
    let I = !1;
    a.forEach((h) => {
      const y = o?.has(h.key) ?? !1,
        M = this.place(
          this.liveLayer(s, h.target, h.key, e),
          h.rect,
          h.borderRadius,
          e,
          y,
        );
      ((l ||= M === "failed"),
        (I = M === "moved" || M === "shown" || I),
        y && M !== "failed" && o?.delete(h.key));
    });
    const b = this.port.setPresentedLayerStack(
      e,
      a.map((h) => h.key),
      l ? "incomplete" : "ready",
    );
    (b || ie("stack order"), (l ||= !b));
    const C = n.contentRegion ?? Ht(n),
      m = this.rememberContentRegion(e, C),
      P = l || (o !== void 0 && o.size > 0);
    (i && !P && this.animatedLayerKeys.delete(e),
      (l || I || i || m) && this.pendingBoundsNotices.add(e),
      !P &&
        this.pendingBoundsNotices.delete(e) &&
        this.port.notifyBoundsChanged(e, C));
    const k = Math.round(performance.now() - r);
    return (
      k >= 50 && K(`native placement took ${k}ms`),
      P ? "incomplete" : "settled"
    );
  }
  releaseUnwanted(e, n, r, s, o) {
    let i = !0,
      a;
    for (const [c, f] of n)
      if (!r.has(c)) {
        if (f.handle.isDestroyed()) {
          n.delete(c);
          continue;
        }
        if (!s.has(c)) {
          if (
            o === "settle" &&
            f.target.kind !== "page" &&
            ((a ??= this.ownedAppTargetKeys(e)),
            !a.has(c) && f.handle.destroy())
          ) {
            n.delete(c);
            continue;
          }
          this.holdDeparting(e, n, f) || (i = this.background(n, c, f) && i);
        }
      }
    return i;
  }
  background(e, n, r) {
    switch (r.handle.background().kind) {
      case "gone":
        return (e.delete(n), !0);
      case "failed":
        return (ie("background"), !1);
      case "detached":
      case "retained":
        return !0;
      default:
        return !1;
    }
  }
  startRouteDepartures(e, n, r) {
    const s = this.captureDepartingRoute;
    if (!s) return;
    let o;
    for (const [i, a] of n) {
      if (a.target.kind === "page") continue;
      if (r.has(i)) {
        a.departure = void 0;
        continue;
      }
      if (
        a.departure ||
        !a.handle.isAttached() ||
        !a.handle.getVisible() ||
        ((o ??= this.ownedAppTargetKeys(e)),
        !o.has(i) || this.port.focusOwner(e) === i)
      )
        continue;
      const c = s(e, i);
      if (!c) continue;
      const f = { held: !1 };
      ((a.departure = f),
        c.then(() => {
          a.departure === f &&
            ((a.departure = void 0),
            f.held &&
              this.inFocusTransition(e, () => this.background(n, i, a)));
        }));
    }
  }
  holdDeparting(e, n, r) {
    const s = r.departure;
    if (!s) return !1;
    if (s.held) return !0;
    const o = [...n.values()].filter(
      (i) => this.parked(i) && i.handle.isAttached(),
    ).length;
    return (
      (s.held = r.handle.holdForCapture(e, r.handle.getBounds(), o)),
      s.held || (r.departure = void 0),
      s.held
    );
  }
  focusTarget(e, n) {
    const r = this.windows.get(e)?.get(S.targetKey(n));
    return !r ||
      r.handle.isDestroyed() ||
      !r.handle.isAttached() ||
      !r.handle.getVisible()
      ? !1
      : r.handle.focus();
  }
  animateWindow(e, n) {
    return this.inFocusTransition(e, () =>
      this.animateWindowLayers(e, n) === "running"
        ? "running"
        : this.applyWindowLayers(e, n.next),
    );
  }
  animateWindowLayers(e, n) {
    this.stopRunningMotion(e);
    const r = this.windowLayers(e),
      s = new Map(),
      o = new Map(n.participants.map((h) => [h.key, h]));
    for (const h of n.participants) {
      if (h.start.kind !== "current" || !ze(h.target)) continue;
      const y = r.get(h.key);
      if (
        !y ||
        y.handle.isDestroyed() ||
        !y.handle.isAttached() ||
        !y.handle.getVisible()
      )
        return "refused";
      s.set(h.key, { ...y.handle.getBounds() });
    }
    const i = vt(n.next),
      a = new Set(i.map(({ key: h }) => h));
    this.startRouteDepartures(e, r, a);
    const c = n.participants.flatMap((h) => {
        if (h.settle.kind !== "absent" || a.has(h.key)) return [];
        const y = ze(h.target);
        return y ? [{ key: h.key, target: y }] : [];
      }),
      f = new Set([...a, ...c.map(({ key: h }) => h)]),
      l = this.captureHeldLayerKeys(r, f);
    if (
      !this.holdObservedLayers(e, r, l) ||
      !this.releaseUnwanted(e, r, f, l, "animate")
    )
      return "refused";
    const I = [...n.overlays],
      b = new Map();
    for (const h of i)
      b.set(h.key, { kind: "desired", ...h, participant: o.get(h.key) });
    for (const h of c)
      b.set(h.key, { kind: "leaving", ...h, participant: o.get(h.key) });
    const C = n.stackOrder.flatMap((h) => {
      const y = b.get(h);
      return y ? [y] : [];
    });
    for (const h of C) {
      const y = h.participant,
        M = this.liveLayer(r, h.target, h.key, e);
      if (!y) {
        if (
          h.kind === "desired" &&
          this.place(M, h.rect, h.borderRadius, e) === "failed"
        )
          return "refused";
        continue;
      }
      if (
        h.kind === "desired" &&
        h.borderRadius > 0 &&
        !M.handle.ensureBorderRadius(h.borderRadius)
      )
        return "refused";
      const W = y.start.kind === "current" ? s.get(h.key) : y.start.bounds;
      if (
        !W ||
        M.handle.isDestroyed() ||
        !M.handle.attach(e) ||
        (!Se(M.handle.getBounds(), W) && !M.handle.setBounds(W)) ||
        (!M.handle.getVisible() && !M.handle.setVisible(!0))
      )
        return "refused";
      const N = y.end.bounds;
      I.push({
        key: y.key,
        from: W,
        to: { ...N },
        wipe: y.wipe === !0,
        getBounds: () => (M.handle.isDestroyed() ? N : M.handle.getBounds()),
        setBounds: (D, H) =>
          M.handle.isDestroyed() || !M.handle.isAttached()
            ? !0
            : M.handle.setBounds(D, H),
      });
    }
    if (
      I.every((h) => Se(h.from, h.to)) ||
      !this.port.setPresentedLayerStack(
        e,
        C.map((h) => h.key),
      )
    )
      return "refused";
    const m = Hr(n, s);
    n.start(m);
    const P = this.animatedLayerKeys.get(e) ?? new Set();
    for (const { key: h } of I) a.has(h) && P.add(h);
    this.animatedLayerKeys.set(e, P);
    const k = xr(
      I,
      { durationMs: m, easing: n.easing },
      {
        steps: process.platform !== "win32",
        displayRefreshRate: this.displayRefreshRateOf(e),
      },
    );
    return k.kind === "refused"
      ? "refused"
      : (this.stopMotion.set(e, k.stop), "running");
  }
  holdPages(e) {
    for (const [n, r] of e) {
      let s = 0;
      for (const o of r) this.holdPage(o, n, s) && (s += 1);
    }
  }
  holdPage(e, n, r = 0) {
    const s = { kind: "page", pageId: e },
      o = S.targetKey(s),
      i = this.liveLayer(this.windowLayers(n), s, o, n),
      a = this.captureRect(n);
    return a !== void 0 && i.handle.holdForCapture(n, a, r);
  }
  windowOf(e) {
    const n = S.targetKey({ kind: "page", pageId: e });
    for (const [r, s] of this.windows) {
      const o = s.get(n);
      if (o && !o.handle.isDestroyed()) return r;
    }
  }
  prepareBackground(e, n) {
    const r = { kind: "page", pageId: e },
      s = this.liveLayer(this.windowLayers(n), r, S.targetKey(r), n);
    if (s.handle.isDestroyed()) return;
    if (this.parked(s)) {
      this.park(s, n);
      return;
    }
    const o = s.handle.background();
    o.kind === "gone" ||
      o.kind === "failed" ||
      (o.kind === "retained" && o.reason === "picture-in-picture") ||
      (s.handle.attach(n) && s.handle.background());
  }
  prepareExtraction(e, n) {
    const r = { kind: "page", pageId: e },
      s = this.liveLayer(this.windowLayers(n), r, S.targetKey(r), n, {
        kind: "extraction",
      });
    if (s.handle.isDestroyed() || s.handle.isAttached()) return !1;
    const o = this.captureRect(n);
    return o && this.held.holdOf(e) === "capture"
      ? s.handle.holdForCapture(n, o, 0)
      : !(
          !o ||
          !s.handle.setBounds(o) ||
          (s.handle.getVisible() && !s.handle.setVisible(!1))
        );
  }
  releaseLayer(e) {
    const n = S.targetKey({ kind: "page", pageId: e });
    for (const r of this.windows.values()) {
      const s = r.get(n);
      if (s) {
        if (
          !s.handle.isDestroyed() &&
          (this.overlay.setLiveness(e, "dormant"), !s.handle.destroy())
        )
          break;
        r.delete(n);
        break;
      }
    }
    this.overlay.setLiveness(e, "dormant");
  }
  releaseContentRegion(e) {
    this.rememberContentRegion(e, void 0) &&
      this.port.notifyBoundsChanged(e, void 0);
  }
  movePagesFromClosingWindow(e, n) {
    for (const r of this.windows.get(e)?.values() ?? []) {
      if (r.target.kind !== "page") continue;
      const s = n(r.target.pageId);
      s !== void 0 && s !== e && this.prepareBackground(r.target.pageId, s);
    }
  }
  destroyWindow(e, n) {
    (this.overlay.setPresentation(e, void 0),
      this.stopRunningMotion(e),
      this.animatedLayerKeys.delete(e),
      this.contentRegions.delete(e),
      this.pendingBoundsNotices.delete(e));
    const r = this.windows.get(e);
    if (!r) return;
    const s = this.held.outlivesWindow();
    for (const [o, i] of r) {
      if (
        n !== void 0 &&
        n !== e &&
        (this.parked(i)
          ? this.park(i, n)
          : i.target.kind === "page" &&
            s.has(i.target.pageId) &&
            !i.handle.isDestroyed() &&
            i.handle.moveDetached(n))
      ) {
        (r.delete(o), this.windowLayers(n).set(o, i));
        continue;
      }
      i.handle.destroy() &&
        (i.target.kind === "page" &&
          this.overlay.clearLiveness(i.target.pageId),
        r.delete(o));
    }
    r.size === 0 && this.windows.delete(e);
  }
  parked(e) {
    return e.target.kind !== "page" || e.handle.isDestroyed()
      ? !1
      : this.held.holdOf(e.target.pageId) !== void 0;
  }
  observed(e) {
    return (
      e.target.kind === "page" &&
      this.held.holdOf(e.target.pageId) === "observed"
    );
  }
  captureHeldLayerKeys(e, n) {
    const r = new Set();
    for (const [s, o] of e)
      n.has(s) ||
        (this.parked(o) &&
          (o.handle.isAttached() || this.observed(o)) &&
          r.add(s));
    return r;
  }
  park(e, n, r = 0) {
    const s = this.captureRect(n);
    return s ? e.handle.holdForCapture(n, s, r) : !1;
  }
  holdObservedLayers(e, n, r) {
    let s = 0;
    for (const o of [...r].sort()) {
      const i = n.get(o);
      if (i) {
        if (this.observed(i) && !this.park(i, e, s)) return !1;
        s += 1;
      }
    }
    return !0;
  }
  destroyAll() {
    for (const e of this.windows.keys()) this.destroyWindow(e);
  }
  liveLayer(e, n, r, s, o) {
    const i = e.get(r) ?? this.adopt(e, n, r);
    if (i) {
      const l = i.handle.isDestroyed();
      if (
        !l &&
        !this.replacesCrashedPage(n, r, i.handle) &&
        i.handle.reconcile(n)
      )
        return (
          (i.target = n),
          n.kind === "page" &&
            this.overlay.getLiveness(n.pageId) === "dormant" &&
            this.overlay.setLiveness(n.pageId, "live"),
          i
        );
      (l || i.handle.destroy(), e.delete(r));
    }
    const a = n.kind === "page" ? this.overlay.grantedDriver(n.pageId) : void 0,
      c = o ?? (a === void 0 ? void 0 : { kind: "interaction", chatId: a }),
      f = { target: n, handle: this.port.create(n, s, c) };
    return (
      e.set(r, f),
      n.kind === "page" && this.overlay.setLiveness(n.pageId, "live"),
      f
    );
  }
  replacesCrashedPage(e, n, r) {
    return e.kind !== "page" || this.overlay.getLiveness(e.pageId) !== "crashed"
      ? !1
      : r.isRendererCrashed()
        ? this.crashRecoveries.admit(n)
          ? !0
          : (Te(`page renderer keeps dying; not recreating ${n}`, qr), !1)
        : (this.overlay.setLiveness(e.pageId, "live"), !1);
  }
  adopt(e, n, r) {
    if (n.kind === "page")
      for (const s of this.windows.values()) {
        if (s === e) continue;
        const o = s.get(r);
        if (o) return (s.delete(r), e.set(r, o), o);
      }
  }
  place(e, n, r, s, o = !1) {
    if (!e.handle.attach(s)) return ie("attach");
    let i = !1;
    if (o || !Se(e.handle.getBounds(), n)) {
      if (!e.handle.setBounds(n)) return ie("bounds");
      i = !0;
    }
    return r > 0 && !e.handle.ensureBorderRadius(r)
      ? ie("clipping")
      : e.handle.getVisible()
        ? i
          ? "moved"
          : "unchanged"
        : e.handle.setVisible(!0)
          ? "shown"
          : ie("visibility");
  }
  stopRunningMotion(e) {
    (this.stopMotion.get(e)?.(), this.stopMotion.delete(e));
  }
  windowLayers(e) {
    const n = this.windows.get(e);
    if (n) return n;
    const r = new Map();
    return (this.windows.set(e, r), r);
  }
  rememberContentRegion(e, n) {
    const r = this.contentRegions.has(e),
      s = this.contentRegions.get(e);
    return (
      this.contentRegions.set(e, n),
      r ? (!s || !n ? s !== n : !Se(s, n)) : !0
    );
  }
  captureRect(e) {
    const n = this.contentBoundsOf(e);
    if (!(!n || n.width <= 0 || n.height <= 0))
      return { x: 0, y: 0, width: n.width, height: n.height };
  }
}
function vt(t) {
  return t.regions.flatMap((e) => {
    const n = ze(e.target);
    return n
      ? [
          {
            key: e.key,
            target: n,
            rect: e.rect,
            borderRadius: e.borderRadius ?? 0,
          },
        ]
      : [];
  });
}
function Hr(t, e) {
  if (t.duration.kind === "fixed") return Math.max(1, t.duration.milliseconds);
  const n = new Map(t.previous.regions.map((a) => [a.key, a.rect])),
    r = new Map(t.next.regions.map((a) => [a.key, a.rect]));
  let s = 0,
    o = 0;
  for (const a of t.participants) {
    if (a.start.kind !== "current") continue;
    const c = n.get(a.key),
      f = r.get(a.key),
      l = e.get(a.key);
    if (!c || !f || !l) continue;
    const I = mt(f, c);
    I !== 0 && ((s += I), (o += Math.min(I, mt(f, l))));
  }
  if (s === 0) return Math.max(1, t.duration.baseMilliseconds);
  const i = Math.max(0, Math.min(1, o / s));
  return Math.max(1, Math.round(t.duration.baseMilliseconds * i));
}
function mt(t, e) {
  return (
    Math.abs(t.x - e.x) +
    Math.abs(t.y - e.y) +
    Math.abs(t.width - e.width) +
    Math.abs(t.height - e.height)
  );
}
function kt(t, e, n, r) {
  const s = r && E.chatHomeWindow(t, e, r);
  if (s) return s;
  const o = E.pageEntry(t, n)?.windowId ?? Gr(t, n);
  if (o !== void 0) return e.includes(o) ? o : void 0;
  const i = E.holding(t, n);
  return i && E.chatHomeWindow(t, e, i);
}
function Gr(t, e) {
  const n = E.pageInTrack(t, e);
  return n?.presenter.kind === "entry" ? n.window.id : void 0;
}
function jr(t) {
  const e = new Map(),
    n = () => [...t.windows()];
  function r(s) {
    const o = n(),
      i = t.overlay.getDrive(s)?.driver;
    return kt(t.data(), o, s, i) ?? t.layers().windowOf(s) ?? o[0];
  }
  return {
    holdOf(s) {
      if (e.has(s)) return "observed";
      if (
        t.overlay.captureOwner(s) !== void 0 ||
        (t.compositedExtraction && t.pages.extractionPageIds().includes(s))
      )
        return "capture";
    },
    outlivesWindow: () => t.pages.retainedPageIds(),
    homes(s) {
      const o = new Set();
      for (const a of Object.keys(t.overlay.snapshot().drive)) {
        const c = a;
        t.overlay.captureOwner(c) !== void 0 && o.add(c);
      }
      for (const a of e.keys()) t.layers().windowOf(a) !== void 0 && o.add(a);
      const i = new Map();
      for (const a of o) {
        if (s.has(a)) continue;
        const c = r(a);
        if (c === void 0) continue;
        const f = i.get(c) ?? [];
        (f.push(a), i.set(c, f));
      }
      for (const a of i.values()) a.sort();
      return i;
    },
    observe(s) {
      e.set(s, (e.get(s) ?? 0) + 1);
      let o = !1;
      const i = () => {
          if (o) return;
          o = !0;
          const c = (e.get(s) ?? 1) - 1;
          if (c > 0) {
            e.set(s, c);
            return;
          }
          if ((e.delete(s), t.isPresented(s))) return;
          const f = t.layers().windowOf(s);
          f !== void 0 && t.layers().prepareBackground(s, f);
        },
        a = r(s);
      if (!t.isPresented(s) && (a === void 0 || !t.layers().holdPage(s, a))) {
        i();
        return;
      }
      return i;
    },
    observedPageIds: () => new Set(e.keys()),
    hold(s) {
      if (t.isPresented(s)) return !0;
      const o = r(s);
      return o !== void 0 && t.layers().holdPage(s, o);
    },
    windowClosing(s) {
      const o = n(),
        i = t.data();
      t.layers().movePagesFromClosingWindow(s, (a) => kt(i, o, a, void 0));
    },
  };
}
function Kr(t, e, n) {
  if (n) return { kind: "page", pageId: n };
  const r = S.windowLayoutModel(t, e);
  return r ? S.contentFocusTargetOf(r) : void 0;
}
function $r(t) {
  const e = () => {
    const n = t.peekedPageId();
    if (n) return { kind: "page", pageId: n };
    const r = S.windowLayoutModel(t.data(), t.windowId);
    if (!r) return;
    const s = S.commandPageIdOf(r);
    if (s) return { kind: "page", pageId: s };
    const o = S.contentFocusTargetOf(r);
    if (!(o?.kind !== "newTab" && o?.kind !== "chat"))
      return { kind: o.kind, layerId: S.targetKey(o) };
  };
  return {
    command: e,
    commandPage: () => {
      const n = e();
      return n?.kind === "page" ? n.pageId : void 0;
    },
    focusedPage: () => {
      const n = S.windowLayoutModel(t.data(), t.windowId);
      return n ? S.commandPageIdOf(n) : void 0;
    },
    keyboard: () => {
      const n = t.peekedPageId();
      if (n) return { kind: "page", pageId: n };
      const r = S.windowLayoutModel(t.data(), t.windowId);
      if (r)
        return (
          S.expectedTargets(r).find((s) => t.layerHoldsFocus(S.targetKey(s))) ??
          S.contentFocusTargetOf(r)
        );
    },
  };
}
function zr({ previous: t, next: e, cause: n, allowance: r }) {
  if (r !== "allowed") return Re(r);
  if (n !== "layout-change") return Re(n);
  if (Vr(t.placement, e.placement)) return Re("full-page-chat-swap");
  const s = Yr({ previous: t.placement, next: e.placement });
  return s.participants.length === 0
    ? Re("nothing-moves")
    : { kind: "animate", durationMs: Ke, plan: s };
}
function Re(t) {
  return { kind: "snap", reason: t };
}
function Vr(t, e) {
  const n = bt(t),
    r = bt(e);
  return n === r
    ? !1
    : (n ? e : t).regions.some((o) => o.target.kind === "page");
}
function bt(t) {
  if (t.regions.length !== 1) return !1;
  const e = t.regions[0]?.target;
  return e?.kind === "chat" && e.view.kind === "root";
}
function Yr(t) {
  const e = new Map(t.previous.regions.map((c) => [c.key, c])),
    n = new Map(t.next.regions.map((c) => [c.key, c])),
    r = [],
    s = [],
    o = new Set();
  for (const c of t.next.regions) {
    if (e.get(c.key)) {
      r.push({
        key: c.key,
        target: c.target,
        start: { kind: "current" },
        end: { kind: "placement", bounds: { ...c.rect } },
        settle: { kind: "present" },
      });
      continue;
    }
    const l = Zt(c, t.next);
    if (l) {
      r.push({
        key: c.key,
        target: c.target,
        start: { kind: "synthetic", bounds: l },
        end: { kind: "placement", bounds: { ...c.rect } },
        settle: { kind: "present" },
      });
      continue;
    }
    if (c.target.kind !== "chat") {
      s.push(c.key);
      continue;
    }
    const I = Xt(c, t.next);
    if (!I) {
      o.add(c.key);
      continue;
    }
    (s.push(c.key),
      r.push({
        key: c.key,
        target: c.target,
        start: { kind: "synthetic", bounds: I },
        end: { kind: "placement", bounds: { ...c.rect } },
        settle: { kind: "present" },
        wipe: !0,
      }));
  }
  for (const c of t.previous.regions) {
    if (n.has(c.key)) continue;
    const f = Xr(c, t.previous);
    f && r.push(f);
  }
  const i = r.flatMap((c) => (c.settle.kind === "absent" ? [c.key] : [])),
    a = new Set([...i, ...s]);
  return {
    participants: r,
    stackOrder: [
      ...i,
      ...s,
      ...t.next.regions.flatMap((c) =>
        a.has(c.key) || o.has(c.key) ? [] : [c.key],
      ),
    ],
  };
}
function Xr(t, e) {
  const n = { key: t.key, target: t.target, start: { kind: "current" } },
    r = Zt(t, e);
  if (r)
    return {
      ...n,
      end: { kind: "synthetic", bounds: r },
      settle: { kind: "absent" },
    };
  if (t.target.kind !== "chat") return;
  const s = Xt(t, e);
  if (s)
    return {
      ...n,
      end: { kind: "synthetic", bounds: s },
      settle: { kind: "absent" },
      wipe: !0,
    };
}
function Xt(t, e) {
  const { rect: n } = t,
    r = n.x + n.width;
  return e.regions.some((o) => o.key !== t.key && o.rect.x >= r - Zr)
    ? { ...n, width: 0 }
    : void 0;
}
const Zr = 16;
function Jr(t, e) {
  const { target: n, rect: r } = t;
  if (n.kind !== "chat" || n.view.kind !== "sidebar") return;
  const s = e.viewport,
    o = r.x === s.x,
    i = r.x + r.width === s.x + s.width;
  if (o !== i) return o ? "leading" : "trailing";
}
function Zt(t, e) {
  const n = Jr(t, e);
  if (!n) return;
  const r = e.viewport;
  return { ...t.rect, x: n === "leading" ? r.x - t.rect.width : r.x + r.width };
}
const Qr = w.pipe(w.number(), w.integer(), w.minValue(0)),
  qe = w.pipe(w.number(), w.integer(), w.minValue(1)),
  es = w.strictObject({
    generation: qe,
    endpoint: w.strictObject({
      rendererGeneration: qe,
      treeRevision: Qr,
      geometryRevision: qe,
    }),
  });
function It(t, e) {
  let n = 0,
    r;
  function s() {
    (r && e.cancel(r.timer), (r = void 0));
  }
  function o(a) {
    n += 1;
    const c = { kind: "idle", generation: n, settlement: a };
    return (t(c), c);
  }
  function i(a, c, f) {
    s();
    const l = {
      leg: a,
      timer: e.schedule(() => {
        r === l && ((r = void 0), f());
      }, c),
    };
    r = l;
  }
  return {
    get generation() {
      return n;
    },
    get outstanding() {
      return r?.leg;
    },
    leg(a, c) {
      return ((n += 1), { generation: n, endpoint: a, correlation: c });
    },
    prepare(a, c, f) {
      (i({ phase: "preparing", leg: a, work: c }, Gt, f),
        t({
          kind: "preparing",
          generation: a.generation,
          endpoint: a.endpoint,
          correlation: a.correlation,
        }));
    },
    acknowledge(a) {
      const c = r?.leg;
      if (
        !(
          c?.phase !== "preparing" ||
          c.leg.generation !== a.generation ||
          !Xe(c.leg.endpoint, a.endpoint)
        )
      )
        return (s(), c);
    },
    run(a, c, f, l) {
      (i(
        { phase: "running", leg: a, work: c, timing: f },
        Math.max(0, f.deadlineEpochMs - e.now()) + ar,
        l,
      ),
        t({
          kind: "running",
          generation: a.generation,
          endpoint: a.endpoint,
          correlation: a.correlation,
          startedAtEpochMs: f.startedAtEpochMs,
          durationMs: f.durationMs,
          rendererEasing: cr,
        }));
    },
    settle(a) {
      return (s(), o(a));
    },
    answer: o,
    drop: s,
  };
}
const ts = 2e4,
  ns = { kind: "redraw" };
function Pt(t, e) {
  return !t || t.length !== e.length ? !1 : t.every((n, r) => n === e[r]);
}
function rs(t) {
  if (
    t?.kind === "revealPage" ||
    (t?.kind === "createAndPlacePageInChat" && t.args.present)
  )
    return t.args.pageId;
}
function ss(t, e) {
  return t?.kind !== "accepted" || e.kind !== "accepted" || e.cause !== void 0
    ? e
    : { ...e, cause: t.cause };
}
const os = (t, e) => {
  const n = setInterval(t, e);
  return (n.unref(), () => clearInterval(n));
};
function is(t) {
  const e = new Map(),
    n = Ut(),
    r = t.preparers ?? [],
    s = {
      now: () => Date.now(),
      schedule: (d, u) => {
        const g = setTimeout(d, u);
        return (g.unref?.(), g);
      },
      cancel: (d) => clearTimeout(d),
    };
  let o = t.store.state.data,
    i = t.overlay.snapshot().liveness,
    a = t.overlay.snapshot().drive,
    c = !1;
  function f() {
    return t.store.state.data;
  }
  function l(d, u = o) {
    const g = e.get(d);
    if (g) return g;
    const p = {
      id: d,
      generation: void 0,
      measured: void 0,
      desired: void 0,
      drawn: void 0,
      ownedAppTargets: S.ownedAppTargetKeys(u, d),
      selection: E.activeSelection(u, d),
      model: S.windowLayoutModel(u, d),
      resizing: !1,
      fullscreen: void 0,
      pendingCause: void 0,
      unmeasured: void 0,
      waiting: void 0,
      presented: [],
      focus: void 0,
      transition: void 0,
      listeners: new Set(),
    };
    return (e.set(d, p), p);
  }
  function I(d) {
    const u = c;
    c = !0;
    try {
      return d();
    } finally {
      c = u;
    }
  }
  function b(d) {
    const u = S.windowLayoutModel(f(), d);
    return u ? S.expectedTargetKeys(u) : [];
  }
  function C(d, u) {
    ((d.drawn = u ?? b(d.id)),
      t.onMeasuring?.(t.overlay.presentedPages(f(), [d.id]).pageIds));
  }
  function m(d, u) {
    const g = d.presented;
    d.presented = [];
    for (const p of g) p(u);
  }
  function P(d) {
    ((d.waiting = void 0), m(d, "skipped"));
  }
  function k(d, u, g = ns) {
    if (d.fullscreen !== void 0) return (m(d, "skipped"), !1);
    const p = t.overlay.presentationOf(d.id),
      R = d.waiting;
    if (R?.placement === u && R.presentation === p) return !1;
    const T = t.overlay.projectPlacement(u),
      F = r.flatMap(({ waitsFor: L, prepare: X }) => {
        const _ = X(T);
        return _ ? [{ waitsFor: L, ready: _ }] : [];
      });
    if (F.length > 0) {
      const L = {
          placement: u,
          presentation: p,
          application: ss(R?.application, g),
        },
        X = d.desired;
      d.waiting = L;
      const _ = performance.now();
      return (
        Promise.allSettled(F.map(({ ready: x }) => x)).then(() => {
          if (d.waiting !== L) return;
          d.waiting = void 0;
          const x = Math.round(performance.now() - _);
          if (x >= 100) {
            const B = F.map(({ waitsFor: ee }) => ee).join(", ");
            K(`placement waited ${x}ms for ${B}`);
          }
          if (d.desired !== X || !t.windows().has(d.id)) {
            m(d, "skipped");
            return;
          }
          k(d, u, L.application);
        }),
        !1
      );
    }
    return (
      (d.waiting = void 0),
      I(() => {
        (ke(d, T, g), N());
      }),
      m(d, "placed"),
      !0
    );
  }
  function h(d) {
    return d.desired ? k(d, d.desired) : !1;
  }
  function y(d, u) {
    I(() =>
      t.applier.inFocusTransition(d.id, () =>
        M(d, u, t.applier.applyWindow(d.id, u)),
      ),
    );
  }
  function M(d, u, g) {
    g === "settled" &&
      (t.onPlaced?.(d.id, Me(u)), t.windows().get(d.id)?.notePlacementShown());
    const p = d.focus;
    if (p && !(!d.desired || !Xe(d.desired, u))) {
      if (d.model?.entryId !== p.entryId) {
        d.focus = void 0;
        return;
      }
      u.regions.some((R) => R.key === S.targetKey(p.target)) &&
        ((d.focus = void 0), t.applier.focusTarget(d.id, p.target));
    }
  }
  function W() {
    I(N);
  }
  function N() {
    const d = t.overlay.presentedPages(f(), t.windows().keys()).pageIds;
    t.applier.holdPages(t.held.homes(d));
  }
  function D(d) {
    return t.overlay.windowPresenting(f(), t.windows().keys(), d);
  }
  function H(d, u) {
    const g = d.unmeasured;
    if (g && u.treeRevision >= g.revision) {
      d.unmeasured = void 0;
      const R = Math.round(performance.now() - g.changedAt);
      R >= 100 && K(`renderer measured layout change after ${R}ms`);
    }
    ((d.resizing = !1), (d.desired = u));
    const p = d.pendingCause;
    ((d.pendingCause = void 0),
      k(d, u, { kind: "accepted", model: d.model, cause: p }));
  }
  function Q(d, u) {
    if (!(!d.desired || !d.measured))
      return sr(d.measured, { x: 0, y: 0, width: u.width, height: u.height });
  }
  function fe(d) {
    return (
      (d.transition ??= {
        channel: It((u) => _e(d, u), s),
        reveal: void 0,
        requestSequence: 0,
        lastAccepted: void 0,
        request: void 0,
      }),
      d.transition
    );
  }
  function _e(d, u) {
    for (const g of d.listeners) g();
    (t.windows().get(d.id)?.applyChromeTransition(u),
      t.shell.publishTransition(d.id, u));
  }
  function he(d) {
    return t.windows().get(d)?.motionAllowance() ?? "hidden";
  }
  function ke(d, u, g) {
    const p = fe(d);
    if (g.kind === "redraw") {
      (Z(p), ce(d, p, u, { kind: "automatic" }));
      return;
    }
    const R = p.lastAccepted,
      T = p.channel.outstanding,
      F = v(p, u),
      L = { placement: u, model: g.model };
    p.lastAccepted = L;
    const X =
        R !== void 0 &&
        R.placement.rendererGeneration === u.rendererGeneration &&
        R.placement.treeRevision < u.treeRevision,
      _ = F ? { kind: "request", requestId: F.id } : { kind: "automatic" },
      x = T?.phase === "preparing" ? T.work : void 0,
      B = T?.work.destination,
      ee =
        B !== void 0 &&
        B.rendererGeneration === u.rendererGeneration &&
        B.treeRevision === u.treeRevision,
      te = x?.previous ?? R;
    if (!te || (x && Jt(x.previous.placement, u))) {
      ce(d, p, u, _);
      return;
    }
    const oe =
        g.cause ?? (X || ee || F !== void 0 ? "layout-change" : "reflow"),
      pe = zr({ previous: te, next: L, cause: oe, allowance: he(d.id) });
    if (pe.kind === "snap") {
      (oe === "layout-change" &&
        Te(`layout change placed without motion: ${pe.reason}`),
        ce(d, p, u, _));
      return;
    }
    const { plan: q, durationMs: J } = pe,
      Ie = T?.phase === "running" ? T : void 0,
      Ne = {
        previous: te,
        destination: u,
        plan: q,
        timing: as(Ie, te.placement, u, J, s.now()),
        superseded: !1,
      };
    p.channel.drop();
    const Fe = p.channel.leg(ue(u), _);
    if (Ie) {
      be(d, p, Fe, Ne);
      return;
    }
    p.channel.prepare(Fe, Ne, () => {
      if (Ne.superseded) {
        p.channel.settle({ kind: "invalidated" });
        return;
      }
      (K("transition preparation timed out, placing without animation"),
        ce(d, p, u, Fe.correlation));
    });
  }
  function ce(d, u, g, p) {
    (u.channel.drop(),
      y(d, g),
      t.addressBar?.(d.id)?.applyPlacement(g.addressBar),
      u.channel.settle({
        kind: "endpoint",
        endpoint: ue(g),
        correlation: p,
        presentation: "exact",
      }),
      et(d, u, g));
  }
  function be(d, u, g, p) {
    const { timing: R, destination: T } = p,
      F =
        R.keepDeadline && R.duration.kind === "fixed"
          ? {
              kind: "fixed",
              milliseconds: Math.max(1, R.deadlineEpochMs - s.now()),
            }
          : R.duration,
      L = () => {
        if (p.superseded) {
          u.channel.settle({ kind: "invalidated" });
          return;
        }
        (y(d, T),
          t.addressBar?.(d.id)?.applyPlacement(T.addressBar),
          u.channel.settle({
            kind: "endpoint",
            endpoint: ue(T),
            correlation: g.correlation,
            presentation: "finished",
          }));
      },
      X = (B) => {
        const ee = s.now(),
          te = R.keepDeadline ? R.deadlineEpochMs : ee + B;
        u.channel.run(
          g,
          p,
          { startedAtEpochMs: ee, durationMs: B, deadlineEpochMs: te },
          L,
        );
      },
      _ = t.addressBar?.(d.id)?.motionSurface(T.addressBar),
      x = I(() =>
        t.applier.inFocusTransition(d.id, () => {
          const B = t.applier.animateWindow(d.id, {
            previous: p.previous.placement,
            next: T,
            participants: p.plan.participants,
            stackOrder: p.plan.stackOrder,
            overlays: _ ? [_] : [],
            duration: F,
            easing: dr,
            start: X,
          });
          return (B !== "running" && M(d, T, B), B);
        }),
      );
    (et(d, u, T),
      x !== "running" &&
        (t.addressBar?.(d.id)?.applyPlacement(T.addressBar),
        u.channel.settle({
          kind: "endpoint",
          endpoint: g.endpoint,
          correlation: g.correlation,
          presentation: "exact",
        })));
  }
  function Z(d) {
    const u = d.request;
    return ((d.request = void 0), u && s.cancel(u.timer), u);
  }
  function ge(d) {
    const u = Z(d);
    u &&
      d.channel.answer({
        kind: "endpoint",
        endpoint: u.request.baseline,
        correlation: { kind: "request", requestId: u.request.id },
        presentation: "exact",
      });
  }
  function v(d, u) {
    const g = d.request?.request;
    if (g) {
      if (
        g.expected.rendererGeneration !== u.rendererGeneration ||
        g.expected.treeRevision !== u.treeRevision
      ) {
        ge(d);
        return;
      }
      if (!(u.geometryRevision <= g.expected.geometry.revision))
        return (Z(d), g);
    }
  }
  function O(d) {
    const u = d.transition;
    if (!u) return;
    Z(u);
    const g = u.channel.outstanding;
    g && (g.work.superseded = !0);
  }
  function U(d) {
    const u = d.transition;
    u && (Qe(u), Z(u), u.channel.settle({ kind: "invalidated" }));
  }
  function Y(d) {
    const u = d.reveal;
    return ((d.reveal = void 0), u?.channel.drop(), u);
  }
  function Qe(d) {
    Y(d)?.channel.settle({ kind: "invalidated" });
  }
  function We(d, u, g, p) {
    d.reveal === u &&
      ((d.reveal = void 0),
      u.channel.settle({
        kind: "endpoint",
        endpoint: g.endpoint,
        correlation: g.correlation,
        presentation: p,
      }),
      u.participant.reveal());
  }
  function et(d, u, g) {
    const p = u.reveal;
    if (
      p?.phase !== "awaiting" ||
      !g.regions.some((T) => T.key === p.participant.key)
    )
      return;
    p.phase = "started";
    const R = p.channel.leg(ue(g), { kind: "automatic" });
    if (p.participant.reducedMotion || he(d.id) !== "allowed") {
      We(u, p, R, "exact");
      return;
    }
    p.channel.prepare(R, void 0, () => {
      (K("deferred reveal timed out, revealing without animation"),
        We(u, p, R, "exact"));
    });
  }
  function rn(d, u, g) {
    if (d.reveal !== u) return;
    const p = u.channel.acknowledge(g);
    if (!p) return;
    const R = s.now();
    u.channel.run(
      p.leg,
      void 0,
      { startedAtEpochMs: R, durationMs: Ke, deadlineEpochMs: R + Ke },
      () => We(d, u, p.leg, "finished"),
    );
  }
  function sn(d, u) {
    const g = rr(d, {
      data: f(),
      treeRevision: t.store.revision,
      sender: u,
      windowRevisionOf: (R) => t.store.windowLayoutOf(R)?.revision,
      contentBoundsOf: (R) => t.windows().get(R)?.contentBounds(),
      rendererOf: (R) => {
        const T = e.get(R);
        return T?.generation === void 0
          ? void 0
          : { generation: T.generation, accepted: T.measured };
      },
    });
    if (!g.accepted) {
      ((n[g.reason] += 1), Te(`measurement rejected: ${g.reason}`));
      return;
    }
    const p = l(g.placement.windowId);
    ((p.measured = g.placement), H(p, g.placement));
  }
  function on(d, u) {
    const g = e.get(d),
      p = g?.transition,
      R = p?.channel.outstanding;
    if (!g || !p || R?.phase !== "preparing" || R.work.superseded) return;
    const T = p.channel.acknowledge(u);
    T && be(g, p, T.leg, T.work);
  }
  function an(d, u) {
    const g = o,
      p = f();
    o = p;
    for (const [R, T] of t.windows()) {
      const F = t.store.windowLayoutOf(R);
      if (F && F.revision !== d) continue;
      const L = l(R, g);
      L.unmeasured === void 0 &&
        T.isShowing() &&
        (L.unmeasured = { revision: d, changedAt: performance.now() });
      const X = b(R),
        _ = !Pt(L.drawn, X);
      _ && (L.desired = void 0);
      const x = S.windowLayoutModel(p, R);
      L.fullscreen !== void 0 &&
        (!x || !S.presentedPageIdsOf(x).has(L.fullscreen)) &&
        tt(L);
      const B = S.ownedAppTargetKeys(p, R),
        ee = [...L.ownedAppTargets].some((q) => !B.has(q));
      L.ownedAppTargets = B;
      const te = L.model,
        oe = E.activeSelection(p, R),
        pe = oe !== void 0 && E.selectionSwitched(L.selection, oe);
      if (((L.selection = oe), pe)) {
        (U(L), (L.pendingCause = _ ? "tab-switch" : void 0));
        const q = x ? S.contentFocusTargetOf(x) : void 0;
        q && q.kind !== "newTab" && _
          ? (L.focus = { entryId: oe.entryId, target: q })
          : ((L.focus = void 0),
            q && q.kind !== "newTab" && t.applier.focusTarget(R, q));
      } else {
        O(L);
        const q = x?.chatSidebar;
        if (
          x &&
          (q?.mode === "side-by-side") !=
            (te?.chatSidebar?.mode === "side-by-side")
        ) {
          const J =
            q?.mode === "side-by-side" ? q.chat : S.contentFocusTargetOf(x);
          L.focus = J ? { entryId: x.entryId, target: J } : void 0;
        } else if (x) {
          const J = S.contentFocusTargetOf(x),
            Ie = rs(u);
          J?.kind === "page" &&
            J.pageId === Ie &&
            (_
              ? (L.focus = { entryId: x.entryId, target: J })
              : t.applier.focusTarget(R, J));
        }
      }
      if (
        (u?.kind === "reconcileActivityPresentations" &&
          (L.pendingCause = "tab-layout-switch"),
        (L.model = x),
        !_)
      ) {
        ee && !L.resizing && h(L);
        continue;
      }
      (C(L, X), t.shell.requestMeasure(R));
    }
  }
  function dn(d, u) {
    const g = l(d);
    switch (u.kind) {
      case "resize": {
        const p = Q(g, u.contentBounds);
        (p && ((g.resizing = !0), k(g, p)), t.shell.requestMeasure(d));
        return;
      }
      case "settled":
        ((g.resizing = !1), t.shell.requestMeasure(d));
        return;
      case "focused":
      case "shown":
      case "display-changed":
        ((g.resizing = !1), h(g), t.shell.requestMeasure(d));
        return;
      case "shell-loaded": {
        (P(g), U(g));
        const p = f();
        ((g.model = S.windowLayoutModel(p, d) ?? g.model),
          (g.selection = E.activeSelection(p, d)),
          (g.ownedAppTargets = S.ownedAppTargetKeys(p, d)),
          (g.generation = u.generation),
          t.shell.noteGeneration(d, u.generation),
          C(g),
          t.shell.requestMeasure(d));
        return;
      }
      case "shell-gone":
        P(g);
        return;
    }
  }
  function cn(d) {
    const u = e.get(d);
    if (u) {
      P(u);
      const p = u.transition;
      (p && (Z(p), p.channel.drop(), Y(p)), e.delete(d));
    }
    const g = [...t.windows().keys()].find((p) => p !== d);
    (t.applier.destroyWindow(d, g), g !== void 0 && W(), t.shell.forget(d));
  }
  function un(d, u, g) {
    const p = l(d);
    if (g) {
      if (p.fullscreen !== void 0) return;
      (U(p),
        (p.fullscreen = u),
        t.windows().get(d)?.noteEnteredPageFullscreen(),
        t.applier.releaseContentRegion(d));
      return;
    }
    if (p.fullscreen !== u) return;
    p.fullscreen = void 0;
    const R = t.windows().get(d);
    R?.noteLeftPageFullscreen();
    const T = R?.contentBounds(),
      F = T ? Q(p, T) : void 0;
    (F && k(p, F),
      (p.pendingCause = "page-fullscreen-left"),
      t.shell.requestMeasure(d));
  }
  function tt(d) {
    d.fullscreen !== void 0 &&
      ((d.fullscreen = void 0), t.windows().get(d.id)?.leavePageFullscreen());
  }
  function ln(d) {
    for (const u of e.values()) u.fullscreen === d && tt(u);
    if (D(d)) {
      t.overlay.setLiveness(d, "crashed");
      return;
    }
    (t.applier.releaseLayer(d), t.overlay.clearLiveness(d));
  }
  function fn(d) {
    for (const u of e.values())
      u.desired?.regions.some((g) => g.key === d) && h(u);
  }
  function hn(d) {
    const u = D(d.pageId);
    if (u === void 0) {
      W();
      return;
    }
    const g = e.get(u);
    if (!g || !h(g) || !d.wasFocused) return;
    const p = Kr(f(), u, t.overlay.presentationOf(u)?.pageId);
    p?.kind === "page" && p.pageId === d.pageId && t.applier.focusTarget(u, p);
  }
  function gn(d, u) {
    t.overlay.setPresentation(d, u);
    const g = l(d),
      p = g.desired;
    if (!p || g.fullscreen !== void 0 || !Pt(g.drawn, b(d)))
      return (t.shell.requestMeasure(d), Promise.resolve("skipped"));
    const R = new Promise((T) => g.presented.push(T));
    return (
      k(g, p, {
        kind: "accepted",
        model: g.model,
        cause: "transient-presentation",
      }),
      R
    );
  }
  function pn(d) {
    const u = fe(l(d)),
      g = u.lastAccepted?.placement;
    if (!g) return;
    ge(u);
    const p = ue(g);
    u.requestSequence += 1;
    const R = {
        kind: "geometry",
        id: `${d}:${u.requestSequence}`,
        baseline: p,
        expected: {
          rendererGeneration: p.rendererGeneration,
          treeRevision: p.treeRevision,
          geometry: { kind: "newer-than", revision: p.geometryRevision },
        },
      },
      T = {
        request: R,
        timer: s.schedule(() => {
          u.request === T &&
            (K("geometry transition timed out waiting for a measurement"),
            ge(u));
        }, Gt),
      };
    return ((u.request = T), R);
  }
  function yn(d, u) {
    const g = fe(l(d));
    Qe(g);
    const p = { participant: u, channel: It(u.publish, s), phase: "awaiting" };
    return (
      (g.reveal = p),
      {
        acknowledge: (R) => rn(g, p, R),
        cancel: () => {
          g.reveal === p && Y(g);
        },
      }
    );
  }
  const wn = t.overlay.subscribe((d) => {
      const u = i,
        g = a;
      if (((i = d.liveness), (a = d.drive), !c)) {
        g !== d.drive && W();
        for (const p of t.windows().keys())
          if (S.windowLayoutModel(f(), p))
            for (const R of t.overlay.presentedPages(f(), [p]).pageIds) {
              if (u[R] === d.liveness[R]) continue;
              const T = e.get(p);
              T && h(T);
              break;
            }
      }
    }),
    vn = (t.startWatchdog ?? os)(() => {
      for (const [d, u] of t.windows()) {
        const g = e.get(d),
          p = g?.desired;
        if (
          !g ||
          !p ||
          g.resizing ||
          g.fullscreen !== void 0 ||
          g.waiting ||
          !u.isShowing()
        )
          continue;
        const R = u.contentBounds();
        if (
          R &&
          (p.viewport.width !== R.width || p.viewport.height !== R.height)
        ) {
          (u.fitShell(), t.shell.requestMeasure(d));
          continue;
        }
        g.transition?.channel.outstanding ||
          y(g, t.overlay.projectPlacement(p));
      }
    }, ts);
  return {
    report: sn,
    acknowledge: on,
    committed: an,
    windowEvent: dn,
    windowClosed: cn,
    pageCrashed: ln,
    routeLayerGone: fn,
    pageRendererChanged: hn,
    pageFullscreen: un,
    isPageFullscreen: (d, u) => e.get(d)?.fullscreen === u,
    requestGeometryTransition: pn,
    restoreAddressBar(d) {
      const u = e.get(d)?.transition?.lastAccepted?.placement;
      u && t.addressBar?.(d)?.applyPlacement(u.addressBar);
    },
    current: (d) => e.get(d)?.measured,
    present: gn,
    revealWhenPlaced: yn,
    subscribe(d, u) {
      const { listeners: g } = l(d);
      return (
        g.add(u),
        () => {
          g.delete(u);
        }
      );
    },
    rejectionCounts: () => ({ ...n }),
    stop() {
      (vn(), wn());
      for (const d of e.values()) {
        ((d.focus = void 0), P(d));
        const u = d.transition;
        u && (Z(u), u.channel.drop(), Y(u));
      }
    },
  };
}
function as(t, e, n, r, s) {
  const o = {
    source: e,
    duration: { kind: "fixed", milliseconds: r },
    startedAtEpochMs: s,
    deadlineEpochMs: s + r,
    keepDeadline: !1,
  };
  if (!t) return o;
  const { destination: i, timing: a } = t.work;
  return i.rendererGeneration === n.rendererGeneration &&
    i.treeRevision === n.treeRevision
    ? {
        source: a.source,
        duration: {
          kind: "fixed",
          milliseconds: Math.max(1, t.timing.deadlineEpochMs - s),
        },
        startedAtEpochMs: s,
        deadlineEpochMs: t.timing.deadlineEpochMs,
        keepDeadline: !0,
      }
    : Jt(a.source, n)
      ? {
          source: i,
          duration: { kind: "reversal", baseMilliseconds: r },
          startedAtEpochMs: s,
          deadlineEpochMs: s + r,
          keepDeadline: !1,
        }
      : o;
}
function Jt(t, e) {
  return !Ue(t.viewport, e.viewport) ||
    t.regions.length !== e.regions.length ||
    t.addressBar?.presentation !== e.addressBar?.presentation ||
    (t.addressBar !== void 0 &&
      (e.addressBar === void 0 ||
        !Ue(t.addressBar.bounds, e.addressBar.bounds)))
    ? !1
    : t.regions.every((n, r) => {
        const s = e.regions[r];
        return s?.key === n.key && Ue(s.rect, n.rect);
      });
}
function Ue(t, e) {
  return (
    t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
  );
}
function me(t) {
  return re.join(t, "layout", "layout.db");
}
function ds(t, e) {
  return re.join(re.dirname(t), "backwards-compatibility", `layout-${e}.db`);
}
function Le(t, e, n) {
  const r = n ? cs(n) : A.StoredProfileLayout;
  let s = w.safeParse(r, t);
  if (
    (!s.success && n && (s = w.safeParse(A.ProfileLayoutShape, t)), !s.success)
  )
    return { ok: !1, kind: "invalid", issues: A.toLayoutIssues(s.issues) };
  const o = s.output,
    i = E.chatReferences(o).filter((l) => o.chats[l.chatId] === void 0);
  if (i.length > 0)
    return {
      ok: !1,
      kind: "invalid",
      issues: i.map((l) => ({
        message: "chat-working-set-missing",
        path: l.path,
      })),
    };
  const [a, ...c] = Object.values(A.layoutInvariants)
    .filter(({ holds: l }) => !l(o))
    .map(({ code: l }) => l);
  if (a !== void 0)
    return { ok: !1, kind: "invariant", invariants: [a, ...c], tree: o };
  const f = E.placedPages(o).filter((l) => !e.has(l.pageId));
  return f.length > 0
    ? {
        ok: !1,
        kind: "invalid",
        issues: f.map((l) => ({
          message: "page-record-missing",
          path: l.path,
        })),
      }
    : { ok: !0, tree: o };
}
function cs(t) {
  const e = new WeakSet();
  for (const o of t.data.windows) for (const i of o.entries) e.add(i);
  const n = w.custom((o) => typeof o == "object" && o !== null && e.has(o)),
    r = w.union([n, A.EntryListItem]),
    s = w.object({ ...A.WindowNode.entries, entries: w.array(r) });
  return w.object({ ...A.ProfileLayoutShape.entries, windows: w.array(s) });
}
const us = w.strictObject(
    w.omit(A.ProfileLayoutShape, ["windows", "chats"]).entries,
  ),
  ls = w.strictObject(w.omit(A.WindowNode, ["entries"]).entries),
  fs = w.omit(A.GroupItem, ["tabs"]),
  Qt = w.pick(A.ChatRootedTab, [
    "id",
    "lastActivityAt",
    "activitySidebarSortOverride",
  ]),
  hs = w.strictObject(w.omit(A.ChatSidebar, ["column"]).entries),
  St = new Set([...Object.keys(Qt.entries), "chatSidebar"]);
function gs(t, e) {
  const n = Object.keys(t).filter((s) => !St.has(s)),
    r = Object.keys(e).filter((s) => !St.has(s));
  return (
    n.length === r.length &&
    n.every(
      (s) => Object.hasOwn(e, s) && Reflect.get(t, s) === Reflect.get(e, s),
    )
  );
}
function Rt(t, e) {
  if (t === e) return !0;
  if (!e || t.id !== e.id || !gs(t, e)) return !1;
  if (t.chatSidebar !== e.chatSidebar) {
    if (!t.chatSidebar || !e.chatSidebar) return !1;
    const { column: r, ...s } = t.chatSidebar;
    if (r !== e.chatSidebar.column || !w.safeParse(hs, s).success) return !1;
  }
  const n = {
    id: t.id,
    lastActivityAt: t.lastActivityAt,
    activitySidebarSortOverride: t.activitySidebarSortOverride,
  };
  return w.safeParse(Qt, n).success;
}
function ps(t, e) {
  const { entries: n, ...r } = e;
  if (
    !(!w.safeParse(ls, r).success || !Array.isArray(n)) &&
    n.length === t.entries.length
  ) {
    if (n !== t.entries)
      for (let s = 0; s < n.length; s++) {
        const o = n[s],
          i = t.entries[s];
        if (o === i) continue;
        if (
          o?.kind === "tab" &&
          i.kind === "tab" &&
          o.category === i.category
        ) {
          if (!Rt(o.tab, i.tab)) return;
          continue;
        }
        if (
          !o ||
          o.kind !== "group" ||
          i.kind !== "group" ||
          o.id !== i.id ||
          o.tabs.length !== i.tabs.length
        )
          return;
        const { tabs: a, ...c } = o;
        if (!w.safeParse(fs, c).success || !a.every((f, l) => Rt(f, i.tabs[l])))
          return;
      }
    if (
      !(
        e.activeEntryId !== t.activeEntryId &&
        E.entry$2(t, e.activeEntryId) === void 0
      )
    )
      return { kind: "window-content", previousWindow: t };
  }
}
function ys(t, e, n) {
  const r = new Map(),
    { windows: s, chats: o, ...i } = e;
  if (!Array.isArray(s) || !w.safeParse(us, i).success) return Ct(t, e, n);
  const a = o === t.data.chats;
  let c = n === t.read.pages() && a;
  const f = new Set();
  for (const l of s) {
    if (!l || typeof l != "object") return Ct(t, e, n);
    f.add(l.id);
    const I = t.read.windowContents(l.id);
    if (!I) {
      (r.set(l.id, { kind: "structure" }), (c = !1));
      continue;
    }
    const b = a || Object.entries(I.chats).every(([P, k]) => o?.[P] === k),
      C =
        n === t.read.pages() ||
        I.pageIds.every((P) => n.get(P) === t.read.page(P));
    if (l === I.window && b && C) continue;
    const m = l.id === I.window.id ? ps(I.window, l) : void 0;
    (m && b && C ? r.set(l.id, m) : r.set(l.id, { kind: "structure" }),
      m || (c = !1));
  }
  f.size !== s.length && (c = !1);
  for (const l of t.data.windows)
    f.has(l.id) || (r.set(l.id, { kind: "removed" }), (c = !1));
  if (!c) {
    const l = Le(e, n, t);
    if (!l.ok) return l;
  }
  return { ok: !0, changes: r };
}
function Ct(t, e, n) {
  const r = Le(e, n);
  if (!r.ok) return r;
  const s = new Map();
  for (const o of r.tree.windows) s.set(o.id, { kind: "structure" });
  for (const o of t.data.windows)
    s.has(o.id) || s.set(o.id, { kind: "removed" });
  return { ok: !0, changes: s };
}
function ws(t) {
  return t !== null && typeof t == "object";
}
const Mt = new WeakSet();
function ye(t) {
  if (ws(t) && !Mt.has(t)) {
    (Object.freeze(t), Mt.add(t));
    for (const e of Object.values(t)) ye(e);
  }
  return t;
}
function Oe(t) {
  const e = {
    get size() {
      return t.size;
    },
    get(n) {
      return t.get(n);
    },
    has(n) {
      return t.has(n);
    },
    entries() {
      return t.entries();
    },
    keys() {
      return t.keys();
    },
    values() {
      return t.values();
    },
    forEach(n, r) {
      t.forEach((s, o) => n.call(r, s, o, e));
    },
    [Symbol.iterator]() {
      return t[Symbol.iterator]();
    },
  };
  return Object.freeze(e);
}
function vs(t) {
  return Oe(new Map([...t].map(([e, n]) => [e, A.freezePageSummary(n)])));
}
function ms(t, e) {
  if (e.kind === "created") {
    const n = new Map(t);
    for (const r of e.pages)
      n.set(r.summary.id, A.freezePageSummary(r.summary));
    return Oe(n);
  }
  if (e.kind === "deleted") {
    const n = new Map(t);
    for (const r of e.pageIds) n.delete(r);
    return Oe(n);
  }
  return t;
}
class de {
  constructor(e, n, r, s) {
    ((this.data = e), (this.#e = n));
    const o = new Map();
    for (const i of e.windows) {
      const a = r?.read.windowContents(i.id),
        c = s?.get(i.id);
      let f;
      (a && c?.kind !== "structure"
        ? c
          ? (f = { ...a, window: i })
          : (f = a)
        : (f = E.windowContents(e, i.id)),
        f && o.set(i.id, ye(f)));
    }
    this.read = new ks(n, o);
  }
  #e;
  static parse(e, n) {
    const r = vs(n),
      s = Le(e, r),
      o =
        !s.ok && s.kind === "invariant"
          ? A.recoverInvariants(s.tree, s.invariants)
          : void 0,
      i = o ? Le(o, r) : s;
    return i.ok
      ? { ok: !0, state: new de(ye(i.tree), r) }
      : {
          ok: !1,
          issues:
            i.kind === "invalid"
              ? i.issues
              : i.invariants.map((c) => ({ message: c, path: "" })),
        };
  }
  static empty() {
    return new de(
      ye({ schemaVersion: A.LAYOUT_SCHEMA_VERSION, windows: [], chats: {} }),
      Oe(new Map()),
    );
  }
  settle(e) {
    if (!e.ok) return e;
    const n = e.pageChanges ?? A.noPageChanges,
      r = ms(this.#e, n);
    if (
      e.data === this.data &&
      r === this.#e &&
      n.kind === "none" &&
      e.closed === void 0
    )
      return {
        ok: !0,
        state: this,
        changes: new Map(),
        pageChanges: n,
        closed: e.closed,
        selectedIn: e.selectedIn,
      };
    const s = ys(this, e.data, r);
    if (!s.ok && s.kind === "invariant")
      return A.rejected({
        kind: "invariant-violated",
        invariant: s.invariants[0],
      });
    if (!s.ok) throw new A.LayoutInternalDefectError(s.issues);
    return {
      ok: !0,
      state: new de(ye(e.data), r, this, s.changes),
      changes: s.changes,
      pageChanges: n,
      closed: e.closed,
      selectedIn: e.selectedIn,
    };
  }
  read;
}
class ks {
  constructor(e, n) {
    ((this.pageIndex = e), (this.windows = n));
  }
  windowContents(e) {
    return this.windows.get(e);
  }
  page(e) {
    return this.pageIndex.get(e);
  }
  hasPage(e) {
    return this.pageIndex.has(e);
  }
  pages() {
    return this.pageIndex;
  }
}
function bs() {
  let t = 0,
    e = !1;
  const n = new Map(),
    r = {
      commit: async (s) => {
        if (e) return { ok: !1, reason: "closed" };
        if (s.baseRevision !== t)
          return { ok: !1, reason: "revision-conflict" };
        if (((t = s.revision), s.pageChanges.kind === "created"))
          for (const o of s.pageChanges.pages)
            n.set(o.summary.id, [...o.navigationHistory]);
        if (s.pageChanges.kind === "deleted")
          for (const o of s.pageChanges.pageIds) n.delete(o);
        return { ok: !0 };
      },
      reconcile: async () => {},
      updatePageMetadata: (s) => {
        if (!e)
          for (const o of s) {
            if (!o.navEntry) continue;
            const i = n.get(o.pageId);
            i && n.set(o.pageId, [...i, o.navEntry].slice(-A.NAV_HISTORY_CAP));
          }
      },
      loadNavigationHistory: async (s) => {
        if (e) return;
        const o = n.get(s);
        return o ? [...o] : void 0;
      },
      rotate: async (s, o) =>
        e
          ? { ok: !1, reason: "closed" }
          : o !== t
            ? { ok: !1, reason: "stale-rotate" }
            : { ok: !0 },
      flush: async () => {},
      accountRevision: async () => {},
      markAccountRevision: async () => {},
      close: async () => {
        e || ((e = !0), n.clear(), (t = 0));
      },
    };
  return {
    state: de.empty(),
    revision: t,
    storage: "usable",
    lifecycle: { kind: "ephemeral" },
    persistence: r,
    recentlyClosed: [],
  };
}
class en extends Error {
  constructor(e) {
    (super("The chat session is no longer available."), (this.chatId = e));
  }
  name = "ChatUnavailableError";
}
function Is(t, e) {
  if (t.kind === "window") return { kind: "window", window: t.window };
  if (e.kind !== "new-window")
    return { kind: "entries", into: e.windowId, entries: t.entries };
}
const Ps = 50,
  Ss = 10;
function Rs(t, e, n, r) {
  if (t.notifying) {
    t.dirty = !0;
    return;
  }
  t.notifying = !0;
  try {
    let s = e();
    for (let o = 0; ; o++) {
      if (o > Ss) throw new Error(r);
      if (((t.dirty = !1), n(s), !t.dirty)) break;
      s = e();
    }
  } finally {
    t.notifying = !1;
  }
}
function Cs(t, e) {
  const n = { ...t };
  let r = !1;
  return (
    e.url !== void 0 && e.url !== t.url && ((n.url = e.url), (r = !0)),
    e.title !== void 0 &&
      e.title !== t.title &&
      ((n.title = e.title), (r = !0)),
    e.faviconUrl !== void 0 &&
      e.faviconUrl !== t.faviconUrl &&
      ((n.faviconUrl = e.faviconUrl), (r = !0)),
    e.lastShownAt !== void 0 &&
      e.lastShownAt !== t.lastShownAt &&
      ((n.lastShownAt = e.lastShownAt), (r = !0)),
    e.lastActivityAt !== void 0 &&
      e.lastActivityAt !== t.lastActivityAt &&
      ((n.lastActivityAt = e.lastActivityAt), (r = !0)),
    r ? n : void 0
  );
}
function Ms(t) {
  return t.kind !== "closeEntry" && t.kind !== "closeEntries"
    ? t
    : { ...t, fallbackEntryId: w.parse(E.EntryId, se.randomUUID()) };
}
class tn {
  currentState;
  currentRevision;
  currentMetadataRevision = 0;
  windowLayouts = new Map();
  rotatedAt;
  metadata = new Map();
  userMuted;
  stateListeners = new Set();
  metadataListeners = new Set();
  metadataGate = { notifying: !1, dirty: !1 };
  pendingMetadata = [];
  persistence;
  ensureChatDurable;
  rotateEveryCommits;
  report;
  recentlyClosed;
  closedRevision = 0;
  expiredPageIds = new Set();
  closeHistory;
  tabOrder;
  queue = Promise.resolve();
  constructor(e) {
    ((this.currentState = e.state),
      (this.currentRevision = e.revision),
      (this.rotatedAt = e.snapshotRevision ?? e.revision),
      (this.userMuted = new Set(e.userMutedPageIds)),
      (this.persistence = e.persistence),
      (this.ensureChatDurable = e.ensureChatDurable ?? (async () => {})),
      (this.recentlyClosed = [...(e.recentlyClosed ?? [])].slice(
        -A.RECENTLY_CLOSED_LIMIT,
      )),
      (this.rotateEveryCommits = e.rotateEveryCommits ?? Ps),
      (this.report = e.onReport ?? (() => {})),
      (this.tabOrder = e.tabOrder),
      (this.closeHistory = A.startCloseHistory(e.state.data, Date.now())),
      this.updateWindowRevisions(e.state, e.revision, this.closeHistory));
  }
  get state() {
    return this.currentState;
  }
  get revision() {
    return this.currentRevision;
  }
  windowLayoutOf(e) {
    return this.windowLayouts.get(e);
  }
  get metadataRevision() {
    return this.currentMetadataRevision;
  }
  summaryOf(e) {
    return this.metadata.get(e) ?? this.currentState.read.page(e);
  }
  userMutedOf(e) {
    return this.userMuted.has(e);
  }
  summaries() {
    const e = [];
    for (const [n, r] of this.currentState.read.pages())
      e.push(this.metadata.get(n) ?? r);
    return e;
  }
  dispatch(e) {
    return this.dispatchCurrent(() => e);
  }
  dispatchCurrent(e) {
    const n = Date.now(),
      r = this.queue.then(async () => {
        const s = e(this.currentState.data),
          o = s
            ? await this.runCommand(s, n)
            : { ok: !0, outcome: "no-op", revision: this.currentRevision };
        return (await this.deleteExpiredPages(), o);
      });
    return (
      (this.queue = r.then(
        () => {},
        () => {},
      )),
      r
    );
  }
  dispatchPrepared(e, n) {
    const r = Date.now(),
      s = this.queue.then(async () => {
        const o = this.currentRevision;
        let i = !0;
        const a = () => {
          i && ((i = !1), n.rollback());
        };
        try {
          n.apply();
          const c = await this.runCommand(e, r, a);
          return (c.ok ? (i = !1) : a(), await this.deleteExpiredPages(), c);
        } catch (c) {
          throw (this.currentRevision === o && a(), c);
        }
      });
    return (
      (this.queue = s.then(
        () => {},
        () => {},
      )),
      s
    );
  }
  canReopenLastClosed(e) {
    return this.recentlyClosed.some((n) => this.restoreCommandOf(n, e));
  }
  get recentlyClosedRevision() {
    return this.closedRevision;
  }
  reopenableClosed(e, n) {
    const r = [];
    for (let s = this.recentlyClosed.length - 1; s >= 0 && r.length < n; s--) {
      const o = this.recentlyClosed[s];
      this.restoreCommandOf(o, e) && r.push(o);
    }
    return r;
  }
  reopenLastClosed(e) {
    return this.reopenNewest(e, () => !0);
  }
  reopenClosed(e, n) {
    return this.reopenNewest(n, (r) => A.closedKeyOf(r) === e);
  }
  restoreCommandOf(e, n) {
    const r = Is(e, n);
    if (!r) return;
    const s = { kind: "restoreClosed", args: r };
    return A.applyCommand(this.currentState, s).ok ? s : void 0;
  }
  reopenNewest(e, n) {
    const r = Date.now(),
      s = this.queue.then(async () => {
        for (let o = this.recentlyClosed.length - 1; o >= 0; o--) {
          const i = this.recentlyClosed[o];
          if (!n(i)) continue;
          const a = this.restoreCommandOf(i, e);
          if (!a) continue;
          const c = await this.runCommand(a, r);
          return (await this.deleteExpiredPages(), c);
        }
        return { ok: !1, reason: "not-found" };
      });
    return (
      (this.queue = s.then(
        () => {},
        () => {},
      )),
      s
    );
  }
  async runCommand(e, n, r) {
    const s = Date.now(),
      o = await this.applyAndCommit(e, n, r),
      i = Date.now() - s,
      a = o.ok ? o.outcome : o.reason;
    return (
      (a !== "no-op" || i >= 100) &&
        K(`command ${e.kind} ${a} in ${i}ms, queued ${s - n}ms`),
      o
    );
  }
  async applyAndCommit(e, n, r) {
    const s = this.currentState.data,
      o = A.stampCloseHistory(Ms(e), s, this.closeHistory, this.tabOrder),
      i = A.applyCommand(this.currentState, o, n);
    if (!i.ok) return { ok: !1, reason: "rejected", rejection: i.rejection };
    if (i.state === this.currentState)
      return (
        (this.closeHistory = this.historyAfter(s, i, o)),
        { ok: !0, outcome: "no-op", revision: this.currentRevision }
      );
    const a = this.currentState.data.chats,
      c = i.state.data.chats,
      f = c === a ? [] : Object.entries(c);
    let l;
    try {
      for (const [h, y] of f) {
        if (y.state !== "ready") continue;
        l = h;
        const M = w.parse(E.ChatId, h);
        a[M]?.state !== "ready" && (await this.ensureChatDurable(M));
      }
    } catch (h) {
      const y = h instanceof Error ? `${h.name}: ${h.message}` : String(h);
      return (
        K(`command ${e.kind} named chat ${l} that is not durable: ${y}`),
        h instanceof en
          ? {
              ok: !1,
              reason: "rejected",
              rejection: {
                kind: "chat-unavailable",
                chatId: w.parse(E.ChatId, h.chatId),
              },
            }
          : { ok: !1, reason: "persistence" }
      );
    }
    const I = this.currentRevision + 1,
      b = i.closed ? A.reopenableFragments(i.closed) : void 0,
      C = {
        formatVersion: A.LAYOUT_JOURNAL_FORMAT_VERSION,
        baseRevision: this.currentRevision,
        revision: I,
        occurredAt: n,
        command: o,
        pageChanges: i.pageChanges,
        ...(b?.length ? { closed: b } : {}),
      },
      m = await this.persistence.commit(C);
    if (!m.ok)
      return (
        K(`command ${e.kind} journal commit failed: ${m.reason}`),
        m.reason === "revision-conflict" && (r?.(), await this.catchUpToHead()),
        { ok: !1, reason: "persistence" }
      );
    if (i.pageChanges.kind === "created")
      for (const h of i.pageChanges.pages) this.metadata.delete(h.summary.id);
    if (i.pageChanges.kind === "deleted") {
      for (const h of i.pageChanges.pageIds) this.metadata.delete(h);
      this.forgetUserMuted(i.pageChanges.pageIds);
    }
    for (const h of b ?? []) this.forgetUserMuted(A.fragmentPageIds(h));
    const P = A.closedHistoryRewriteOf(o);
    P &&
      ((this.closedRevision += 1),
      this.recentlyClosed.splice(
        0,
        this.recentlyClosed.length,
        ...this.recentlyClosed.flatMap((h) => {
          const y = P(h);
          return y ? [y] : [];
        }),
      ));
    const k = this.install(
      i.state,
      I,
      i.changes,
      this.historyAfter(s, i, o),
      o,
    );
    for (const h of b ?? []) this.retainClosed(h);
    return (
      await this.rotateIfDue(k),
      { ok: !0, outcome: "changed", revision: I }
    );
  }
  historyAfter(e, n, r) {
    return A.closeHistoryAfter(this.closeHistory, {
      before: e,
      after: n.state.data,
      changes: n.changes,
      command: r,
      selectedIn: n.selectedIn,
      now: Date.now(),
    });
  }
  forgetUserMuted(e) {
    const n = [];
    for (const r of e)
      this.userMuted.delete(r) && n.push({ pageId: r, userMuted: !1 });
    n.length > 0 && this.persistence.updatePageMetadata(n);
  }
  retainClosed(e) {
    ((this.closedRevision += 1), this.recentlyClosed.push(e));
    const n = this.recentlyClosed.splice(
      0,
      Math.max(0, this.recentlyClosed.length - A.RECENTLY_CLOSED_LIMIT),
    );
    for (const r of n)
      for (const s of A.fragmentPageIds(r)) this.expiredPageIds.add(s);
  }
  async deleteExpiredPages() {
    if (this.expiredPageIds.size === 0) return;
    const e = new Set();
    for (const r of this.recentlyClosed)
      for (const s of A.fragmentPageIds(r)) e.add(s);
    const n = new Set(E.placedPageIds(this.currentState.data));
    for (const r of this.expiredPageIds) {
      if (e.has(r) || n.has(r)) {
        this.expiredPageIds.delete(r);
        continue;
      }
      if (!this.currentState.read.hasPage(r)) {
        this.expiredPageIds.delete(r);
        continue;
      }
      const s = await this.runCommand(
        { kind: "deletePage", pageId: r },
        Date.now(),
      );
      (s.ok || s.reason === "rejected") && this.expiredPageIds.delete(r);
    }
  }
  async catchUpToHead() {
    const e = await this.persistence.reconcile();
    if (!e) {
      this.report({ kind: "reconcile-failed", revision: this.currentRevision });
      return;
    }
    if (e.revision <= this.currentRevision) return;
    const n = this.currentRevision;
    this.metadata.clear();
    const r = new Set(E.placedPageIds(e.state.data));
    for (const i of this.userMuted) r.has(i) || this.userMuted.delete(i);
    const s = new Map([
        ...e.state.data.windows.flatMap((i) =>
          e.state.read.windowContents(i.id) !==
          this.currentState.read.windowContents(i.id)
            ? [[i.id, { kind: "structure" }]]
            : [],
        ),
        ...this.currentState.data.windows.flatMap((i) =>
          e.state.read.windowContents(i.id)
            ? []
            : [[i.id, { kind: "removed" }]],
        ),
      ]),
      o = A.closeHistoryAfter(this.closeHistory, {
        before: this.currentState.data,
        after: e.state.data,
        changes: s,
        now: Date.now(),
      });
    (this.install(e.state, e.revision, s, o),
      this.report({ kind: "reconciled", from: n, to: e.revision }));
  }
  install(e, n, r, s, o) {
    ((this.closeHistory = s),
      this.updateWindowRevisions(e, n, s, r),
      (this.currentState = e),
      (this.currentRevision = n));
    for (const i of this.stateListeners)
      try {
        i(e, n, r, o);
      } catch (a) {
        this.report({
          kind: "listener-threw",
          stream: "tree",
          revision: n,
          error: a,
        });
      }
    return { state: e, revision: n };
  }
  updateWindowRevisions(e, n, r, s) {
    const o = new Set();
    for (const i of e.data.windows) {
      if ((o.add(i.id), !s?.get(i.id) && this.windowLayouts.has(i.id)))
        continue;
      const a = e.read.windowContents(i.id);
      if (!a) continue;
      const c = r.get(i.id)?.entryLastShownAt ?? {};
      this.windowLayouts.set(i.id, { ...a, revision: n, entryLastShownAt: c });
    }
    for (const i of this.windowLayouts.keys())
      o.has(i) || this.windowLayouts.delete(i);
  }
  async rotateIfDue(e) {
    if (e.revision - this.rotatedAt < this.rotateEveryCommits) return;
    (await this.persistence.rotate(e.state, e.revision)).ok &&
      (this.rotatedAt = e.revision);
  }
  updatePageMetadata(e) {
    const n = [],
      r = [];
    for (const o of e) {
      const i = this.summaryOf(o.pageId);
      if (!i) continue;
      const a = Cs(i, o);
      if (a) {
        const f = A.freezePageSummary(a);
        (this.metadata.set(o.pageId, f), r.push(f));
      }
      const c =
        o.userMuted !== void 0 && o.userMuted !== this.userMuted.has(o.pageId);
      (o.userMuted === !0 && this.userMuted.add(o.pageId),
        o.userMuted === !1 && this.userMuted.delete(o.pageId),
        (a || o.navEntry || c) && n.push(o));
    }
    if (
      (n.length > 0 && this.persistence.updatePageMetadata(n), r.length === 0)
    )
      return;
    const s = this.currentMetadataRevision;
    ((this.currentMetadataRevision += 1),
      this.notifyMetadataListeners({
        baseRevision: s,
        revision: this.currentMetadataRevision,
        pages: r,
      }));
  }
  notifyMetadataListeners(e) {
    (this.pendingMetadata.push(e),
      Rs(
        this.metadataGate,
        () => this.takePendingMetadata(),
        (n) => {
          if (n)
            for (const r of this.metadataListeners)
              try {
                r(n);
              } catch (s) {
                this.report({
                  kind: "listener-threw",
                  stream: "metadata",
                  revision: n.revision,
                  error: s,
                });
              }
        },
        "LayoutStore.updatePageMetadata: a listener kept updating metadata past the coalescing cap",
      ));
  }
  takePendingMetadata() {
    const e = this.pendingMetadata.splice(0),
      n = e[0],
      r = e.at(-1);
    if (!n || !r) return;
    if (e.length === 1) return n;
    const s = new Map();
    for (const o of e) for (const i of o.pages) s.set(i.id, i);
    return {
      baseRevision: n.baseRevision,
      revision: r.revision,
      pages: [...s.values()],
    };
  }
  subscribe(e) {
    return (
      this.stateListeners.add(e),
      () => {
        this.stateListeners.delete(e);
      }
    );
  }
  subscribeMetadata(e) {
    return (
      this.metadataListeners.add(e),
      () => {
        this.metadataListeners.delete(e);
      }
    );
  }
}
const Es = "windowless",
  As = ["", "-wal", "-shm"];
function Ts(t) {
  return t instanceof Error && "code" in t && t.code === "ENOENT";
}
async function Et(t) {
  const e = await Promise.all(
    As.map(async (n) => {
      try {
        const r = await G.stat(`${t}${n}`, { bigint: !0 });
        return `${r.ino}:${r.size}:${r.mtimeNs}`;
      } catch (r) {
        if (Ts(r)) return "-";
        throw r;
      }
    }),
  );
  return e[0] === "-" ? void 0 : e.join(" ");
}
function Je(t) {
  const e = re.join(re.dirname(t), Es);
  return {
    async holds() {
      try {
        const [n, r] = await Promise.all([G.readFile(e, "utf8"), Et(t)]);
        return r !== void 0 && n.trim() === r;
      } catch {
        return !1;
      }
    },
    async record() {
      const n = await Et(t);
      if (n === void 0) return;
      const r = `${e}.${se.randomUUID()}.pending`;
      try {
        (await G.writeFile(
          r,
          `${n}
`,
          { encoding: "utf8", flag: "wx" },
        ),
          await G.rename(r, e));
      } catch (s) {
        throw (await G.rm(r, { force: !0 }), s);
      }
    },
    async clear() {
      await G.rm(e, { force: !0 });
    },
  };
}
function Ls(t) {
  return Je(me(t)).holds();
}
async function Os(t) {
  const e = t.deps ?? (await nn()),
    { id: n, profileId: r } = t.runtime,
    s = e.report,
    o = {
      callbacks: {
        onRecovery: (v) => s({ source: "recovery", report: v }),
        onReplayStop: (v) => s({ source: "replay-stop", report: v }),
        onReconcile: (v) => s({ source: "reconcile", report: v }),
        onLegacyImport: (v) => s({ source: "legacy-import", report: v }),
        onMetadataWriteFailure: (v) =>
          s({ source: "metadata-write-failure", report: v }),
      },
    },
    i = t.storage.kind === "ephemeral" ? bs() : await Ds(t.storage, e, o),
    a = t.windows,
    c = t.tabOrder,
    f = new tn({
      state: i.state,
      revision: i.revision,
      persistence: i.persistence,
      ensureChatDurable: t.ensureChatDurable,
      ...(c ? { tabOrder: (v) => c(v, f) } : {}),
      recentlyClosed: i.recentlyClosed,
      snapshotRevision: i.snapshotRevision,
      userMutedPageIds: i.userMutedPageIds,
      onReport: (v) => s({ source: "store", report: v }),
    }),
    l = new mr((v) => s({ source: "overlay", report: v })),
    I = (v) => l.windowPresenting(f.state.data, a.keys(), v) !== void 0,
    b = t.pages({
      store: f,
      overlay: l,
      isPresented: I,
      loadHistory: (v) => i.persistence.loadNavigationHistory(v),
      releaseLayer: (v) => {
        (k.releaseLayer(v), l.clearLiveness(v));
      },
      placement: {
        pageFullscreen: (v, O, U) => D.pageFullscreen(v, O, U),
        isPageFullscreen: (v, O) => D.isPageFullscreen(v, O),
      },
    }),
    C = t.layers({
      events: {
        pageCrashed: (v) => D.pageCrashed(v),
        routeLayerGone: (v) => D.routeLayerGone(v),
        pageRendererChanged: (v) => D.pageRendererChanged(v),
      },
      pages: b,
      store: f,
      overlay: l,
    }),
    m = jr({
      data: () => f.state.data,
      overlay: l,
      windows: () => a.keys(),
      isPresented: I,
      pages: b,
      compositedExtraction:
        process.platform === "win32" || process.platform === "linux",
      layers: () => k,
    }),
    P = () => new Set([...b.busyPageIds(), ...m.observedPageIds()]),
    k = new Ur({
      port: C.port,
      overlay: l,
      contentBoundsOf: (v) => a.get(v)?.contentBounds(),
      displayRefreshRateOf: (v) => a.get(v)?.displayRefreshRate(),
      ownedAppTargetKeys: (v) => S.ownedAppTargetKeys(f.state.data, v),
      held: m,
      captureDepartingRoute: C.captureDepartingRoute,
    }),
    h = xn((v) => f.state.read.hasPage(v) || b.get(v) !== void 0),
    y = {
      noteGeneration: (v, O) => {
        const U = j(r, v);
        (e.statePort.publishIPCState("layout.shell", U, { generation: O }),
          M.publishWindow(v),
          e.statePort.publishIPCState("layout.overlay", U, l.snapshot()),
          e.statePort.publishIPCState("layout.cursor", U, l.cursorSnapshot()));
      },
      requestMeasure: (v) => {
        e.statePort.publishIPCSignalToLayer(
          {
            domain: "layout",
            type: "measureRequested",
            payload: { windowId: v },
          },
          v,
          Ye,
        );
      },
      publishTransition: (v, O) => {
        e.statePort.publishIPCState("layout.transition", j(r, v), O);
      },
      forget: (v) => {
        const O = j(r, v);
        (e.statePort.forgetIPCState("layout.tree", O),
          e.statePort.forgetIPCState("layout.pageMetadata", O),
          e.statePort.forgetIPCState("layout.overlay", O),
          e.statePort.forgetIPCState("layout.cursor", O),
          e.statePort.forgetIPCState("layout.shell", O),
          e.statePort.forgetIPCState("layout.transition", O));
      },
    },
    M = Xn(f, r, e.statePort, (v) => a.get(v)?.windowChrome()),
    W = Zn(l, f, r, e.statePort),
    N = Er({
      store: f,
      overlay: l,
      applier: k,
      openWindowIds: () => [...a.keys()],
      retainedPageIds: () => b.retainedPageIds(),
      busyPageIds: P,
      env: process.env,
    }),
    D = is({
      store: f,
      overlay: l,
      applier: k,
      held: m,
      shell: y,
      windows: () => a,
      ...(t.addressBar ? { addressBar: t.addressBar } : {}),
      preparers: [
        { waitsFor: "zoom repaint", prepare: (v) => b.awaitZoomRepaint(Me(v)) },
        {
          waitsFor: "extension page history",
          prepare: (v) => b.awaitExtensionPageHistories(Me(v)),
        },
        {
          waitsFor: "page presentation",
          prepare: (v) => b.preparePresentation(v.windowId, Me(v)),
        },
      ],
      onMeasuring: (v) => {
        (b.prefetchHistories(v), b.reconcileDriveChrome());
      },
      onPlaced: (v, O) => b.notifyPresentation(v, O),
    });
  let H;
  const Q = (v) => {
    const O = H;
    ((H = v),
      !(O !== void 0 && E.sameLists(O, v)) &&
        (b.syncPlacedPages(new Set(E.placedPageIds(v))),
        b.syncTabStripPages(new Set(E.tabStripPageIds(v)))));
  };
  Q(f.state.data);
  const fe = f.subscribe((v, O, U, Y) => {
      (Q(v.data), D.committed(O, Y));
    }),
    _e = l.subscribeDrive((v) => b.followDrive(v));
  let he = !1;
  const ke = () => {
    he || ((he = !0), M.stop(), W(), N());
  };
  async function ce() {
    ke();
    const v = f.state.data.windows.map((O) => O.id);
    (_e(), h(), b.releaseAll(), fe(), D.stop());
    for (const O of v) y.forget(O);
    await i.persistence.flush();
    try {
      await i.persistence.rotate(f.state, f.revision);
    } catch {}
    if (
      (await i.persistence.close(),
      t.storage.kind === "durable" && xs(i, f.state) && !t.isProfileDeleted?.())
    )
      try {
        await Je(me(t.storage.profilePath)).record();
      } catch {}
    k.destroyAll();
  }
  const be = (v) => {
      if (v.kind === "newTab") return a.get(v.windowId)?.prepareNewTab(v);
    },
    Z = async (v) => {
      const O = be(v);
      if (!O) return await f.dispatch(v);
      let U = !1;
      try {
        const Y = await f.dispatch(v);
        return ((U = Y.ok && Y.outcome !== "no-op"), Y);
      } finally {
        O(U);
      }
    };
  let ge;
  return {
    runtime: {
      id: n,
      profileId: r,
      store: f,
      readWindow: M.readWindow,
      dispatch: Z,
      overlay: l,
      applier: k,
      held: m,
      busyPageIds: P,
      placement: D,
      storage: i.storage,
      lifecycle: i.lifecycle,
    },
    pages: b,
    persistence: i.persistence,
    quiesce: ke,
    close: () => (ge ??= ce()),
  };
}
function xs(t, e) {
  return (
    t.storage === "usable" &&
    t.lifecycle.kind === "declarative" &&
    e.data.windows.length === 0
  );
}
async function Ds(t, e, n) {
  return (
    t.initialLayout && (n.initialLayout = t.initialLayout),
    t.completionFact && (n.completionFact = t.completionFact),
    await e.openPersistence(me(t.profilePath), n)
  );
}
function _s(t) {
  switch (t.source) {
    case "store":
      return t.report.kind === "reconciled" ? "info" : "error";
    case "overlay":
    case "metadata-write-failure":
      return "error";
    case "recovery":
      return t.report.step === "blocked" || t.report.step === "recovery-failed"
        ? "error"
        : "warn";
    case "replay-stop":
      return t.report.settled ? "warn" : "error";
    case "reconcile":
      return "warn";
    case "legacy-import":
      return t.report.step === "imported" ? "info" : "error";
    case "boot":
      return t.report.outcome === "blocked" ? "error" : "info";
  }
}
async function nn() {
  const [t, e, n, r, s, o] = await Promise.all([
      Promise.resolve()
        .then(() => require("../main-app.js"))
        .then((c) => c.EventManager),
      Promise.resolve()
        .then(() => require("../main-app.js"))
        .then((c) => c.IPCStateRegistry),
      Promise.resolve()
        .then(() => require("../main-app.js"))
        .then((c) => c.base),
      Promise.resolve().then(() => require("./index-DqqmkDVg.js")),
      Promise.resolve()
        .then(() => require("../main-app.js"))
        .then((c) => c.logger$1),
      Promise.resolve().then(() => require("./telemetry-BfDg9swG.js")),
    ]),
    i = t.eventManager,
    a = (c, f) => {
      e.ipcStateRegistry.invalidate(
        "ipc:state",
        n.toIPCStateSubscriptionKey(c, f),
      );
    };
  return {
    statePort: {
      publishIPCState: i.publishIPCState.bind(i),
      cacheIPCState: i.cacheIPCState.bind(i),
      publishIPCSignalToLayer: i.publishIPCSignalToLayer.bind(i),
      publishIPCSignal: i.publishIPCSignal.bind(i),
      forgetIPCState: a,
    },
    handleIPCQuery: i.handleIPCQuery.bind(i),
    onIPCCommand: i.onIPCCommand.bind(i),
    answerNothingElse: i.answerNothingElse.bind(i),
    openPersistence: r.openLayoutPersistence,
    report: (c) => {
      (s.layoutLogger[_s(c)]("[layout] runtime", c.source, c.report),
        c.source === "recovery" && o.reportLayoutRecovery(c.report),
        c.source === "legacy-import" && o.reportLayoutLegacyImport(c.report),
        c.source === "boot" && o.reportLayoutBoot(c.report));
    },
  };
}
async function Ws(t, e, n) {
  const {
      revision: r,
      layoutRevision: s,
      linkedAccountIds: o,
      selectedAccountId: i,
    } = e,
    a = i === null && o.length > 0,
    c = await t.persistence.accountRevision();
  if ((o.length > 1 || a) && (c ?? s) !== r) {
    if (!(await t.store.dispatch({ kind: "clearAccountChats" })).ok)
      throw new Error("Could not clear chats before switching account");
    (await t.persistence.flush(), await n());
  }
  c !== r && (await t.persistence.markAccountRevision(r));
}
function Ns(t) {
  switch (t.kind) {
    case "openChatSidebar":
      return t.sidebar.column.views[0].chatId;
    case "replaceChatView":
      return t.args.chatId;
  }
}
function Fs(t) {
  switch (t.kind) {
    case "openChatSidebar":
      return { ...t, chatState: "awaiting-server-init-ack" };
    case "replaceChatView":
      return {
        ...t,
        args: { ...t.args, chatState: "awaiting-server-init-ack" },
      };
  }
}
async function Bs(t, e) {
  const n = Ns(e),
    r = t.isUnsaved(n),
    s = await t.dispatch(r ? Fs(e) : e);
  return s.ok
    ? (r && qs(t, n), !0)
    : (S.layoutLogger.warn("[layout] a chat could not be opened", {
        chatId: n,
        kind: e.kind,
        unsaved: r,
        reason: s.reason,
      }),
      !1);
}
async function qs(t, e) {
  try {
    await t.save(e);
  } catch (r) {
    t.reportSaveFailure(r instanceof Error ? r : new Error(String(r)));
    const s = await t.dispatch({ kind: "deleteChat", chatId: e });
    (s.ok ||
      S.layoutLogger.warn("[layout] an unsaved chat could not be removed", {
        chatId: e,
        reason: s.reason,
      }),
      await t.discard(e).catch(() => {}));
    return;
  }
  const n = await t.dispatch({ kind: "markChatReady", chatId: e });
  n.ok ||
    S.layoutLogger.warn("[layout] a saved chat could not be marked ready", {
      chatId: e,
      reason: n.reason,
    });
}
async function Us(t, e) {
  for (const [n, r] of Object.entries(t.state.data.chats)) {
    if (r.state === "ready") continue;
    const s = await t.dispatch({
      kind: "deleteChat",
      chatId: w.parse(E.ChatId, n),
    });
    s.ok ||
      S.layoutLogger.warn("[layout] an unsaved chat could not be removed", {
        profileId: e,
        chatId: n,
        reason: s.reason,
      });
  }
}
function Hs(t) {
  const e = new Set(t.desired()),
    n = t.open();
  for (const s of n) e.has(s) || t.closeWindow(s);
  const r = new Set(t.open());
  for (const s of e) r.has(s) || t.openWindow(s);
}
function Gs(t, e) {
  let n = { kind: "all" };
  const r = () =>
      Hs({
        ...e,
        desired: () => {
          const o = e.desired();
          return n.kind === "all" ? o : o.filter(n.includes);
        },
      }),
    s = t(r);
  return {
    reconcile: r,
    setOpening: (o) => {
      n = o;
    },
    ensureWindow: async () => {
      (r(), !(e.open().length > 0) && (await e.openDefaultWindow(), r()));
    },
    stop: s,
  };
}
const z = new Map(),
  ae = new Map(),
  V = {
    get(t) {
      return z.get(t)?.session;
    },
    serving(t) {
      const e = z.get(t);
      return e && !e.closing ? e.session : void 0;
    },
    all() {
      return [...z.values()].map(({ session: t }) => t);
    },
    has(t) {
      return z.has(t) || ae.has(t);
    },
    close(t, e) {
      const n = z.get(t);
      if (n) return n.session.close(e);
      const r = ae.get(t);
      return r ? (r.abandon(e), r.done) : Promise.resolve();
    },
    async closeProfile(t, e) {
      const n = new Set([
        ...[...ae].filter(([, r]) => r.profileId === t).map(([r]) => r),
        ...V.all()
          .filter((r) => r.profileId === t)
          .map((r) => r.id),
      ]);
      await Promise.all([...n].map((r) => V.close(r, e)));
    },
    async closeAll() {
      const t = new Set([...ae.keys(), ...z.keys()]);
      await Promise.all([...t].map((e) => V.close(e)));
    },
  },
  js = {
    get(t) {
      return V.get(t)?.runtime;
    },
    serving(t) {
      return V.serving(t)?.runtime;
    },
    all() {
      return V.all().map((t) => t.runtime);
    },
    servingAll() {
      return [...z.values()]
        .filter(({ closing: t }) => !t)
        .map(({ session: t }) => t.runtime);
    },
    close: (t) => V.close(t),
    closeAll: () => V.closeAll(),
  };
let At = !1;
function Ks(t) {
  At ||
    ((At = !0),
    t.addHandlerToRunAtCleanup(() => V.closeAll()),
    t.addHandlerToRunOnProfileDelete((e) => {
      V.closeProfile(e, { profileDeleted: !0 });
    }));
}
async function $s(t) {
  if (ae.has(t.id) || z.has(t.id))
    throw new Error("A layout session with this id is already open.");
  const e = { abandoned: !1, profileDeleted: !1 },
    n = zs(t, e);
  ae.set(t.id, {
    profileId: t.profileId,
    abandon: (r) => {
      ((e.abandoned = !0), (e.profileDeleted ||= r?.profileDeleted ?? !1));
    },
    done: n.then(
      () => {},
      () => {},
    ),
  });
  try {
    return await n;
  } finally {
    ae.delete(t.id);
  }
}
async function zs(t, e) {
  const n = (y) => t.deps.report({ source: "boot", report: y }),
    r = new Map();
  let s;
  try {
    s = await Os({
      runtime: { id: t.id, profileId: t.profileId },
      storage: t.storage,
      isProfileDeleted: () => e.profileDeleted,
      pages: (y) => t.pages(y, r),
      layers: (y) => t.layers({ ...y, windows: r }),
      windows: r,
      ...(t.addressBar ? { addressBar: t.addressBar } : {}),
      ensureChatDurable: t.ensureChatDurable,
      ...(t.tabOrder ? { tabOrder: t.tabOrder } : {}),
      deps: t.deps,
    });
  } catch (y) {
    return (
      await t.release(),
      S.layoutLogger.error("[layout] a profile could not open its layout", {
        profileId: t.profileId,
        error: y,
      }),
      n({ outcome: "blocked", reason: "open-failed" }),
      { kind: "blocked", reason: "open-failed" }
    );
  }
  const { runtime: o, pages: i } = s,
    a = o.store,
    c = async (y) => {
      try {
        await s.close();
      } finally {
        await t.release();
      }
      return (
        n({ outcome: "blocked", reason: y }),
        { kind: "blocked", reason: y }
      );
    };
  let f;
  try {
    f = await Vs(t, s);
  } catch (y) {
    return (
      S.layoutLogger.error(
        "[layout] a profile layout could not be prepared to show",
        { profileId: t.profileId, error: y },
      ),
      await c("open-failed")
    );
  }
  if (f.kind === "blocked") return await c(f.reason);
  if (e.abandoned) return await c("open-failed");
  let l;
  try {
    l = t.attach({ runtime: o, pages: i, windows: r });
  } catch (y) {
    return (
      S.layoutLogger.error(
        "[layout] a profile layout could not be connected to its windows",
        { profileId: t.profileId, error: y },
      ),
      await c("open-failed")
    );
  }
  const I = new Set(),
    b = (y) => {
      (I.add(y),
        a
          .dispatch({ kind: "closeWindow", windowId: y })
          .finally(() => I.delete(y))
          .then(
            (M) => {
              if (!M.ok) {
                S.layoutLogger.warn(
                  "[layout] the layout kept a window the user closed",
                  { windowId: y, reason: M.reason },
                );
                return;
              }
              t.endsWithLastWindow &&
                a.state.data.windows.length === 0 &&
                k.close();
            },
            (M) => {
              S.layoutLogger.error(
                "[layout] could not close a window in the layout",
                { windowId: y, error: M },
              );
            },
          ));
    },
    C = Gs((y) => a.subscribe(y), {
      desired: () =>
        a.state.data.windows.map((y) => y.id).filter((y) => !I.has(y)),
      open: () => [...r.keys()],
      openWindow: (y) =>
        l.openWindow({
          windowId: y,
          register: (M) => {
            r.set(y, M);
          },
          closed: (M) => {
            (r.delete(y), o.placement.windowClosed(y), M.userInitiated && b(y));
          },
        }),
      closeWindow: (y) => {
        (o.held.windowClosing(y), r.get(y)?.close());
      },
      openDefaultWindow: async () => {
        const y = await Ve(o, !0, t.windowBounds);
        y.kind !== "ready" &&
          S.layoutLogger.warn(
            "[layout] a profile with no window could not be given one",
            {
              profileId: t.profileId,
              reason: y.kind === "blocked" ? y.reason : "no-window",
            },
          );
      },
    });
  let m;
  const P = async () => {
      try {
        (s.quiesce(), C.stop());
        for (const y of Array.from(r.values())) y.close();
        l.dispose();
      } finally {
        try {
          await s.close();
        } finally {
          (z.delete(t.id), await t.release());
        }
      }
    },
    k = {
      id: t.id,
      profileId: t.profileId,
      runtime: o,
      windows: r,
      setOpening: (y) => C.setOpening(y),
      reconcile: () => C.reconcile(),
      ensureWindow: () => C.ensureWindow(),
      close: (y) => {
        e.profileDeleted ||= y?.profileDeleted ?? !1;
        const M = z.get(t.id);
        return (M && (M.closing = !0), (m ??= P()));
      },
    };
  (z.set(t.id, { session: k, closing: !1 }),
    C.setOpening(t.opening ?? { kind: "all" }),
    C.reconcile());
  const h = a.state.data.windows[0]?.id;
  return !h || r.size === 0
    ? f.kind === "dormant"
      ? (n({ outcome: "dormant" }), { kind: "dormant", session: k })
      : (S.layoutLogger.warn("[layout] a profile opened no window", {
          profileId: t.profileId,
        }),
        await k.close(),
        n({ outcome: "blocked", reason: "no-window" }),
        { kind: "blocked", reason: "no-window" })
    : (n({ outcome: "started" }), { kind: "started", windowId: h, session: k });
}
async function Vs(t, { runtime: e, persistence: n }) {
  const r = e.store;
  if (t.account)
    try {
      await Ws(
        { store: r, persistence: n },
        t.account.accounts,
        t.account.markLayoutReady,
      );
    } catch (i) {
      return (
        S.layoutLogger.error("[layout] Account switch layout cleanup failed", {
          profileId: t.profileId,
          error: i,
        }),
        { kind: "blocked", reason: "open-failed" }
      );
    }
  const s = await Ve(
    e,
    t.ensureWindow || e.storage === "compatibility",
    t.windowBounds,
    t.initialWindow?.id,
  );
  if (s.kind === "blocked")
    return (
      S.layoutLogger.warn("[layout] a profile layout is blocked", {
        profileId: t.profileId,
        reason: s.reason,
      }),
      s
    );
  const o = await r.dispatch({ kind: "clearPinnedChatSidebars" });
  if (
    (o.ok ||
      S.layoutLogger.warn(
        "[layout] pinned chat sidebars could not be cleared",
        { profileId: t.profileId, reason: o.reason },
      ),
    await Us(r, t.profileId),
    await t.tidyRestoredLayout?.(r),
    t.initialWindow)
  ) {
    const i = t.initialWindow.reuse?.(r.state.data) ?? t.initialWindow.id;
    if (
      E.window$1(r.state.data, i) === void 0 &&
      !(await r.dispatch(De(i, t.windowBounds))).ok
    )
      return { kind: "blocked", reason: "no-window" };
  }
  return s;
}
const Ys = w.parse(A.WindowBounds, { x: 0, y: 0, width: 1280, height: 800 }),
  Xs = "import-complete",
  Tt = /^[a-f0-9]{64}$/;
class Ce extends Error {
  constructor(e) {
    (super("The retained profile settings could not be imported."),
      (this.issueCount = e),
      (this.name = "InitialLayoutImportError"));
  }
}
function Zs(t) {
  const e = t.settings.migratedTabs ?? [],
    n = new Set((t.settings.tabs ?? []).map((s) => s.id)),
    r = Math.max(
      0,
      ...(t.settings.tabs ?? []).map((s) =>
        Number.isFinite(s.lastShownAt) ? s.lastShownAt : 0,
      ),
    );
  return e.flatMap((s, o) => {
    if (s.isPinned) return [];
    const i = `migrated-tab-${o}`;
    let a = i,
      c = 0;
    for (; n.has(a); ) ((c += 1), (a = `${i}-${c}`));
    n.add(a);
    const f = r + o + 1;
    return [
      {
        id: a,
        profileId: t.id,
        title: s.title,
        url: s.url,
        tabType: s.tabType,
        faviconUrl: s.faviconUrl ?? "",
        isAIControlledTab: !1,
        isTakeover: !1,
        isBrowserAgentControlledTab: null,
        isWaitingForCaptcha: void 0,
        captchaExpiresAt: null,
        canGoBack: !1,
        canGoForward: !1,
        isPinned: !1,
        groupId: s.groupId,
        openedAt: f,
        lastShownAt: f,
        isLoading: !1,
        isFailedToLoad: !1,
        isFailedToLoadReason: "",
        visitType: void 0,
        isAudioMuted: !1,
        hasAudioActivity: !1,
        wasInitiatedByAgent: !1,
      },
    ];
  });
}
function Js(t) {
  const e = re.join(re.dirname(me(t)), Xs);
  return {
    async read() {
      try {
        const n = (await G.readFile(e, "utf8")).trim();
        if (!Tt.test(n)) throw new Error("Invalid layout completion fact.");
        return n;
      } catch (n) {
        if (n instanceof Error && "code" in n && n.code === "ENOENT") return;
        throw n;
      }
    },
    async clear() {
      await G.rm(e, { force: !0 });
    },
    async write(n) {
      if (!Tt.test(n)) throw new Error("Invalid layout fingerprint.");
      await G.mkdir(re.dirname(e), { recursive: !0 });
      const r = `${e}.${se.randomUUID()}.pending`;
      try {
        (await G.writeFile(
          r,
          `${n}
`,
          { encoding: "utf8", flag: "wx" },
        ),
          await G.rename(r, e));
      } catch (s) {
        throw (await G.rm(r, { force: !0 }), s);
      }
    },
  };
}
async function Qs(t, e, n) {
  await e();
  const { migrateProfileSettings: r } = await Promise.resolve().then(() =>
    require("./legacyImport-DjhHtWcj.js"),
  );
  let s = de.empty(),
    o = [],
    i = "snapshot";
  try {
    const a = t.settings,
      c = structuredClone({
        tabs: [...(a.tabs ?? []), ...Zs(t)],
        windows: a.windows ?? [],
        tabGroups: a.tabGroups ?? [],
        pinnedTabList: a.pinnedTabList ?? [],
        tabOrientation: a.tabOrientation,
      });
    (S.layoutLogger.info("[layout] legacy import input", {
      profileId: t.id,
      tabs: c.tabs.length,
      windows: c.windows.length,
      groups: c.tabGroups.length,
      pins: c.pinnedTabList.length,
    }),
      (i = "migration"));
    const f = r(c);
    if (!f.ok) throw new Ce(f.issues.length);
    ((s = f.state),
      (o = f.pages),
      f.skippedTabs > 0 &&
        S.layoutLogger.warn("[layout] skipped unreadable legacy tabs", {
          profileId: t.id,
          reason: "invalid-legacy-tabs",
          skippedTabs: f.skippedTabs,
        }));
  } catch (a) {
    const c =
      a instanceof Error &&
      [
        "Error",
        "TypeError",
        "RangeError",
        "ReferenceError",
        "SyntaxError",
        "DataCloneError",
        "ValiError",
        "InitialLayoutImportError",
      ].includes(a.name)
        ? a.name
        : "UnrecognizedError";
    S.layoutLogger.warn(
      "[layout] starting a fresh layout after legacy import failed",
      {
        profileId: t.id,
        reason:
          a instanceof Ce ? "invalid-legacy-layout" : "legacy-import-threw",
        stage: i,
        errorName: c,
        issueCount: a instanceof Ce ? a.issueCount : void 0,
      },
    );
  }
  if (s.data.windows.length === 0) {
    const a = A.applyCommand(
      s,
      De(n?.id ?? w.parse(E.WindowId, se.randomUUID()), n?.bounds ?? Ys),
      Date.now(),
    );
    if (!a.ok) throw new Ce(1);
    s = a.state;
  }
  return { state: s, pages: [...o].sort((a, c) => a.id.localeCompare(c.id)) };
}
exports.ChatUnavailableError = en;
exports.CrashRecoveries = Yt;
exports.LAYOUT_LOG_PREFIX = Vt;
exports.LayoutState = de;
exports.LayoutStore = tn;
exports.MeasuredRectSchema = Ee;
exports.PLACEMENT_REJECTION_REASONS = nr;
exports.SHELL_LAYER_ID = Ye;
exports.TransitionPreparedAckSchema = es;
exports.acceptPeekMeasurement = gr;
exports.admitChat = Bs;
exports.announcePageClosed = Yn;
exports.applyWorkspaceTransitionEasing = jt;
exports.areNavigationHistoryUrlsEqual = Ot;
exports.checkLayoutForBoot = Ve;
exports.compatibilityDatabasePath = ds;
exports.completionFactFor = Js;
exports.connectLayoutSessionHost = Ks;
exports.createWindowTargets = $r;
exports.endpointOf = ue;
exports.getAppTabTitle = Lt;
exports.hasWindowlessLayout = Ls;
exports.historyToRestore = jn;
exports.isRestorableNavigationHistoryUrl = le;
exports.layoutDatabasePath = me;
exports.layoutRuntimes = js;
exports.layoutSessions = V;
exports.logLayout = K;
exports.logWhenSlow = Tr;
exports.newPageId = ve;
exports.newPageInChat = Fn;
exports.newPageInChatWorkingSet = Bn;
exports.newPageTab = Nt;
exports.newTabIntentForTab = Hn;
exports.newTabPosition = Nn;
exports.newWindowWithPage = Gn;
exports.newWindowWithTab = De;
exports.nextDrive = zt;
exports.noPlacementRejections = Ut;
exports.normalizeWorkspaceSurfaceWidthPercent = fr;
exports.openProfileLayoutSession = $s;
exports.openedPagePosition = Wn;
exports.openedTabIndex = Wt;
exports.pageForChatTab = Un;
exports.pageForNewTab = qn;
exports.pageIdOfNumber = _n;
exports.pageInitialNavigation = Kn;
exports.pageNavigationChange = $n;
exports.prepareInitialLayout = Qs;
exports.removeUrlFromNavigationHistory = Tn;
exports.resolveLayoutDeps = nn;
exports.sanitizeRestoredNavigationHistory = An;
exports.windowlessFactFor = Je;
