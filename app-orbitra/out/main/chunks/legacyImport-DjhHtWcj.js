"use strict";
(function () {
  try {
    var n =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    n.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      i = new n.Error().stack;
    i &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[i] = "9be74e07-8a87-4f2d-862d-8ee2fce7d58b"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-9be74e07-8a87-4f2d-862d-8ee2fce7d58b"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const F = require("./profileLayoutLifecycle-BDYjrhKu.js"),
  de = require("./workspace-surface-model-CMo0ac7-.js"),
  ue = require("valibot"),
  O = require("./commitRecord-DR9i1ecT.js"),
  T = require("./ids-B2sWlG17.js"),
  ce = require("../main-app.js");
require("node:crypto");
require("node:fs/promises");
require("node:path");
require("./protocol-BGN1BQCi.js");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
require("node:os");
require("node:fs");
require("node:http");
require("node:https");
require("events");
require("child_process");
require("util");
require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("@reflect/auth/workos-session");
require("crypto");
require("./errors-DsbnElf-.js");
require("./savedCertificateBlocklist-BUtmL3xA.js");
require("node:tls");
require("@reflect/auth/device-policy");
require("node:process");
require("node:assert");
require("node:stream");
require("./_commonjsHelpers-DJP3_Dvh.js");
require("./index-CSlo9i6Z.js");
require("tty");
require("node-machine-id");
require("fs/promises");
require("node:timers/promises");
require("./config-CdpnFYk6.js");
require("./contracts-rChhtF3C.js");
require("@reflect/auth/desktop");
require("./worker-protocol-CFgWGf-A.js");
require("./unicode-CSAGP0Z8.js");
require("fs");
require("better-sqlite3");
require("node:child_process");
require("url");
require("stream");
require("zlib");
require("electron-updater");
require("@reflect/auth/last-login-method");
require("@reflect/auth/oauth-state");
require("@reflect/auth/session-identity");
require("./settled-read-r0Yf0ORp.js");
require("module");
require("./fs-native-KvxiM8hl.js");
require("node:module");
require("tldts");
require("node:buffer");
require("./rustImageLimits-zqqoE-LA.js");
require("mime-types");
require("./resourcePolicy-DcbBChq3.js");
require("./resourcePolicy-BX-8H2Pm.js");
require("http");
require("@ghostery/adblocker-electron");
require("./wav-DElqHA--.js");
require("js-yaml");
require("stream/promises");
require("https");
require("net");
require("tls");
require("buffer");
require("electron-chrome-web-store");
require("@modelcontextprotocol/sdk/client/auth.js");
require("@modelcontextprotocol/sdk/client/index.js");
require("@modelcontextprotocol/sdk/client/sse.js");
require("@modelcontextprotocol/sdk/client/streamableHttp.js");
require("@modelcontextprotocol/sdk/client/stdio.js");
require("@modelcontextprotocol/sdk/shared/stdio.js");
require("./process-tree-DTtONxmb.js");
require("cross-spawn");
require("piscina");
require("@modelcontextprotocol/sdk/shared/auth-utils.js");
require("@modelcontextprotocol/sdk/server/auth/errors.js");
require("@modelcontextprotocol/sdk/shared/auth.js");
require("node:readline");
require("async-mutex");
require("node:net");
require("electron-dl");
require("tar");
require("node:inspector/promises");
require("node:v8");
require("tokenx");
require("marked");
require("lodash/debounce");
require("./worker-protocol-CcOBX8D2.js");
require("node:zlib");
require("node:diagnostics_channel");
require("worker_threads");
require("diagnostics_channel");
require("./singleInstance-CuMDgUKt.js");
function le(n) {
  const i = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (n) {
    for (const a in n)
      if (a !== "default") {
        const c = Object.getOwnPropertyDescriptor(n, a);
        Object.defineProperty(
          i,
          a,
          c.get ? c : { enumerable: !0, get: () => n[a] },
        );
      }
  }
  return ((i.default = n), Object.freeze(i));
}
const t = le(ue),
  k = t.pipe(t.string(), t.minLength(1)),
  v = t.fallback(t.optional(k), void 0),
  Y = t.pipe(t.number(), t.finite()),
  y = t.fallback(t.optional(Y), void 0),
  K = t.fallback(Y, 0),
  x = t.fallback(t.string(), ""),
  H = t.object({
    id: k,
    url: t.string(),
    title: x,
    faviconUrl: t.fallback(t.optional(t.string()), void 0),
    openedAt: K,
    lastShownAt: y,
    lastActivityAt: y,
    windowId: v,
    groupId: v,
    pinnedId: v,
    isPinned: t.fallback(t.boolean(), !1),
    chatRole: t.fallback(t.optional(t.string()), void 0),
    claimedByChatWithSessionId: v,
    wasInitiatedByAgent: t.fallback(t.boolean(), !1),
    navigationHistory: t.fallback(
      t.optional(
        t.object({
          entries: t.fallback(
            t.array(
              t.fallback(
                t.nullable(t.object({ url: t.string(), title: x })),
                null,
              ),
            ),
            () => [],
          ),
        }),
      ),
      void 0,
    ),
    chatSidebar: t.fallback(
      t.optional(
        t.object({
          chatSessionId: k,
          isOpen: t.fallback(t.boolean(), !1),
          widthPercent: y,
        }),
      ),
      void 0,
    ),
    chatPanel: t.fallback(
      t.optional(
        t.object({
          presentedTabId: v,
          mode: t.fallback(t.picklist(["split", "page"]), "split"),
          widthPercent: y,
        }),
      ),
      void 0,
    ),
  }),
  V = t.object({ x: y, y }),
  fe = t.object({
    id: k,
    lastShownAt: K,
    closedAt: y,
    tabOrder: t.fallback(
      t.optional(
        t.pipe(
          t.array(t.fallback(t.nullable(t.string()), null)),
          t.transform((n) => n.filter((i) => i !== null)),
        ),
      ),
      void 0,
    ),
    bounds: t.fallback(
      t.optional(
        t.object({
          position: t.fallback(t.optional(V), void 0),
          size: t.fallback(t.optional(V), void 0),
        }),
      ),
      void 0,
    ),
  }),
  pe = t.object({
    tabs: t.fallback(t.array(t.fallback(t.nullable(H), null)), () => []),
    windows: t.fallback(t.array(t.fallback(t.nullable(fe), null)), () => []),
    tabGroups: t.fallback(
      t.array(
        t.fallback(
          t.nullable(
            t.object({
              id: k,
              title: x,
              collapsed: t.fallback(t.boolean(), !1),
            }),
          ),
          null,
        ),
      ),
      () => [],
    ),
    pinnedTabList: t.fallback(
      t.array(t.fallback(t.nullable(t.object({ pinnedId: k, tab: H })), null)),
      () => [],
    ),
  });
function he(n) {
  const i = t.parse(pe, n),
    a = i.tabs.filter((p) => p !== null),
    c = i.pinnedTabList.filter((p) => p !== null);
  return {
    tabs: a,
    windows: i.windows.filter((p) => p !== null),
    tabGroups: i.tabGroups.filter((p) => p !== null),
    pinnedTabList: c,
    skippedTabs: i.tabs.length - a.length + i.pinnedTabList.length - c.length,
  };
}
const I = { x: 0, y: 0, width: 1280, height: 800 },
  M = "migrated-window",
  be = "gray",
  X = "orbitra://newtab",
  ge = 1e3,
  we = 9e3;
function Z(n) {
  const i = 1 - F.normalizeWorkspaceSurfaceWidthPercent(n),
    a = T.ratioOfLength(i, 1);
  return Math.min(we, Math.max(ge, a));
}
function J(n) {
  const i = `legacy-chat-view-${n.position}-${n.tabId}`;
  return {
    views: [{ id: i, chatId: n.chatId, layout: n.layout }],
    selectedViewId: i,
  };
}
function Q(n) {
  const i = de.classifyWorkspaceRootSurfaceUrl(n.url);
  return i?.kind === "chat" ? i.sessionId : void 0;
}
function qe(n) {
  return Q(n) !== void 0
    ? "chat"
    : n.url === "" || n.url.startsWith(X)
      ? "newTab"
      : "page";
}
function ye(n, i, a) {
  return i !== void 0
    ? {
        kind: "chat",
        column: J({ tabId: n.id, position: "root", chatId: i, layout: a }),
      }
    : n.url === "" || n.url.startsWith(X)
      ? { kind: "newTab" }
      : { kind: "page", pageId: n.id };
}
function z(n) {
  const i = n.navigationHistory?.entries ?? [];
  return {
    id: n.id,
    url: n.url,
    title: n.title,
    faviconUrl: n.faviconUrl || void 0,
    navigationHistory: i.filter((a) => a !== null).slice(-O.NAV_HISTORY_CAP),
    openedAt: n.openedAt,
    lastShownAt: n.lastShownAt ?? 0,
    lastActivityAt: n.lastActivityAt ?? n.lastShownAt ?? 0,
    origin: (n.wasInitiatedByAgent && n.claimedByChatWithSessionId) || void 0,
  };
}
function Ie(n) {
  const i = n.chatSidebar;
  if (i?.chatSessionId)
    return {
      column: J({
        tabId: n.id,
        position: "sidebar",
        chatId: i.chatSessionId,
        layout: { kind: "root-full" },
      }),
      side: "trailing",
      ratio: Z(i.widthPercent),
      mode: i.isOpen ? "side-by-side" : "closed",
    };
}
function ke(n) {
  const i = (a) => (a.kind === "tab" && a.category === "pinned" ? 0 : 1);
  return n
    .map((a, c) => ({ entry: a, index: c }))
    .sort((a, c) => {
      const p = i(a.entry) - i(c.entry);
      return p === 0 ? a.index - c.index : p;
    })
    .map(({ entry: a }) => a);
}
function Se(n, i) {
  let a,
    c = Number.NEGATIVE_INFINITY;
  const p = n.flatMap((g) =>
    g.kind === "tab" ? [g.tab] : g.kind === "group" ? g.tabs : [],
  );
  for (const g of p) {
    const S = i.get(g.id) ?? 0;
    S <= c || ((a = g.id), (c = S));
  }
  return a;
}
function ve(n) {
  let i;
  for (const a of n) (i && a.lastShownAt <= i.lastShownAt) || (i = a);
  return i;
}
function Ae(n) {
  const i = n.filter((a) => a.closedAt === void 0);
  return i.length > 0 || n.length === 0
    ? i
    : [n.reduce((a, c) => ((c.closedAt ?? 0) > (a.closedAt ?? 0) ? c : a))];
}
function me(n) {
  const i = he(n),
    a = new Map(),
    c = {},
    p = new Map(),
    g = new Set(),
    S = new Set(),
    ee = ce.parseTabOrientation(n.tabOrientation) === "activity-sidebar";
  function _(e) {
    const r = c[e];
    if (r) return r;
    const o = { track: [], state: "ready" };
    return ((c[e] = o), o);
  }
  function P(e) {
    return e.isPinned === !0;
  }
  const w = new Map();
  for (const e of i.tabs)
    e.chatRole !== "chat-status-entry-tab" && (w.has(e.id) || w.set(e.id, e));
  const E = new Set([
    ...[...w.values()].filter((e) => !P(e)).map((e) => e.id),
    ...i.windows.map((e) => e.id),
    ...i.tabGroups.map((e) => e.id),
    M,
  ]);
  function j(e) {
    let r = e,
      o = 0;
    for (; E.has(r); ) ((o += 1), (r = `${e}-${o}`));
    return (E.add(r), r);
  }
  for (const e of [...w.values()].sort(
    (r, o) => (r.lastShownAt ?? 0) - (o.lastShownAt ?? 0),
  )) {
    const r = e.claimedByChatWithSessionId;
    if (!r || P(e) || qe(e) !== "page") continue;
    (_(r).track.push({ kind: "page", id: `slot-${e.id}`, pageId: e.id }),
      a.set(e.id, z(e)),
      g.add(e.id));
  }
  function te(e, r) {
    const o = e.chatPanel;
    if (!r || !o?.presentedTabId) return { kind: "root-full" };
    const d = `slot-${o.presentedTabId}`;
    return (c[r]?.track ?? []).some((l) => l.id === d)
      ? o.mode === "page"
        ? { kind: "slot-full", presentedSlotId: d }
        : {
            kind: "beside",
            leading: "root",
            ratio: Z(o.widthPercent),
            presentedSlotId: d,
          }
      : { kind: "root-full" };
  }
  function C(e) {
    const r = Q(e);
    r && _(r);
    const o = e.chatSidebar?.chatSessionId;
    o && _(o);
    const d = te(e, r),
      u = ye(e, r, d);
    (u.kind === "page" && a.set(e.id, z(e)),
      p.set(e.id, e.lastShownAt ?? 0),
      g.add(e.id));
    const l = Ie(e),
      f = e.pinnedId ? { pinnedId: e.pinnedId } : {},
      s = e.lastActivityAt ?? e.lastShownAt;
    return u.kind === "chat"
      ? { id: e.id, ...f, root: u, chatSidebar: l, lastActivityAt: s }
      : {
          id: e.id,
          openedAt: e.openedAt,
          ...(u.kind === "newTab" ? { lastActivityAt: s } : {}),
          ...f,
          root: u,
          layout: d,
          track: [],
          chatSidebar: l,
        };
  }
  function D(e) {
    const r = [],
      o = new Map();
    for (const d of e) {
      if (g.has(d.id) || P(d)) continue;
      const u = C(d),
        l = d.groupId;
      if (l == null) {
        r.push({ kind: "tab", tab: u, category: "ordinary" });
        continue;
      }
      const f = o.get(l);
      if (f) {
        f.tabs.push(u);
        continue;
      }
      if (S.has(l)) {
        r.push({ kind: "tab", tab: u, category: "ordinary" });
        continue;
      }
      (S.add(l), E.add(l));
      const s = i.tabGroups.find((b) => b.id === l),
        h = {
          kind: "group",
          id: l,
          label: s?.title ?? "",
          collapsed: s?.collapsed ?? !1,
          color: be,
          tabs: [u],
        };
      (o.set(l, h), r.push(h));
    }
    return r;
  }
  function ne(e) {
    const r = [...w.values()].filter((f) => f.windowId === e.id),
      o = e.tabOrder;
    if (!o) return r;
    const d = [],
      u = new Set();
    for (const f of o) {
      const s = w.get(f);
      !s || u.has(f) || (u.add(f), d.push(s));
    }
    const l = r
      .filter((f) => !u.has(f.id))
      .sort((f, s) => (f.lastShownAt ?? 0) - (s.lastShownAt ?? 0));
    return [...d, ...l];
  }
  const ie = Ae(i.windows),
    re = new Set(i.windows.map((e) => e.id)),
    q = [],
    B = new Set();
  for (const e of ie) {
    if (B.has(e.id)) continue;
    B.add(e.id);
    const r = D(ne(e)),
      o = e.bounds?.size?.x,
      d = e.bounds?.size?.y;
    q.push({
      id: e.id,
      bounds: {
        x: e.bounds?.position?.x ?? I.x,
        y: e.bounds?.position?.y ?? I.y,
        width: o !== void 0 && o > 0 ? o : I.width,
        height: d !== void 0 && d > 0 ? d : I.height,
      },
      lastShownAt: e.lastShownAt,
      entries: r,
    });
  }
  const R = D(
    [...w.values()].filter((e) => !e.windowId || !re.has(e.windowId)),
  );
  if (R.length > 0) {
    const e = ve(q);
    e
      ? e.entries.push(...R)
      : q.push({ id: M, bounds: I, lastShownAt: 0, entries: R });
  }
  const L = [],
    G = new Set();
  for (const e of i.pinnedTabList) {
    const r = e.tab;
    r.chatRole !== "chat-status-entry-tab" &&
      (G.has(e.pinnedId) ||
        (G.add(e.pinnedId),
        L.push({ pinnedId: e.pinnedId, category: "pinned", tab: r })));
  }
  const N = new Map(),
    U = new Map();
  for (const e of w.values()) {
    if (!e.pinnedId) continue;
    if (!e.windowId) {
      U.set(e.pinnedId, e);
      continue;
    }
    const r = N.get(e.windowId) ?? new Map();
    (r.set(e.pinnedId, e), N.set(e.windowId, r));
  }
  function oe(e, r) {
    return L.map((o) => {
      const d = N.get(e.id)?.get(o.pinnedId) ?? U.get(o.pinnedId),
        u = j(r ? o.tab.id : `${o.tab.id}-${e.id}`),
        l = C({
          ...o.tab,
          ...(d
            ? {
                claimedByChatWithSessionId: d.claimedByChatWithSessionId,
                chatPanel: d.chatPanel,
                chatSidebar: d.chatSidebar,
              }
            : {}),
          id: u,
          pinnedId: o.pinnedId,
        });
      return (
        p.set(u, d?.lastShownAt ?? 0),
        {
          kind: "tab",
          tab: { ...l, pinnedId: o.pinnedId },
          category: o.category,
        }
      );
    });
  }
  L.length > 0 &&
    q.length === 0 &&
    q.push({ id: M, bounds: I, lastShownAt: 0, entries: [] });
  for (const [e, r] of q.entries()) r.entries.unshift(...oe(r, e === 0));
  function se(e, r) {
    const o = new Map();
    let d = r;
    function u(s) {
      if (s.root.kind !== "page") return;
      const h = a.get(s.root.pageId),
        b = h ? T.fixedRailDestinationForUrl(h.url) : void 0;
      if (b && "track" in s)
        return (
          a.delete(s.root.pageId),
          {
            kind: "rail",
            entry: {
              id: s.id,
              destination: b,
              layout: s.layout,
              track: s.track,
              chatSidebar: s.chatSidebar,
            },
          }
        );
    }
    function l(s) {
      const h = o.get(s.entry.destination);
      if (!h) return (o.set(s.entry.destination, s), s);
      const b = {
        ...h,
        entry: { ...h.entry, track: [...h.entry.track, ...s.entry.track] },
      };
      return (o.set(s.entry.destination, b), b);
    }
    const f = e.entries.flatMap((s) => {
      if (s.kind === "tab") {
        const b = u(s.tab);
        if (!b) return [s];
        const m = l(b);
        return (s.tab.id === r && (d = m.entry.id), []);
      }
      if (s.kind !== "group") return [s];
      const h = s.tabs.filter((b) => {
        const m = u(b);
        if (!m) return !0;
        const ae = l(m);
        return (b.id === r && (d = ae.entry.id), !1);
      });
      return h.length === 0 ? [] : [{ ...s, tabs: h }];
    });
    for (const s of T.RAIL_DESTINATIONS)
      o.has(s) ||
        o.set(s, {
          kind: "rail",
          entry: {
            id: j(`rail-${e.id}-${s}`),
            destination: s,
            layout: { kind: "root-full" },
            track: [],
          },
        });
    return {
      entries: [
        ...f,
        ...T.RAIL_DESTINATIONS.map((s) => o.get(s)).filter((s) => s !== void 0),
      ],
      activeEntryId: d,
    };
  }
  const $ = [];
  for (const e of q) {
    const r = ke(e.entries),
      o = Se(r, p);
    if (o === void 0) continue;
    const d = { ...e, entries: r },
      u = ee ? se(d, o) : { entries: r, activeEntryId: o };
    $.push({
      id: e.id,
      bounds: e.bounds,
      entries: u.entries,
      activeEntryId: u.activeEntryId,
    });
  }
  const A = t.safeParse(t.array(O.PageEntity), [...a.values()]);
  if (!A.success) return { ok: !1, issues: O.toLayoutIssues(A.issues) };
  const W = F.LayoutState.parse(
    { schemaVersion: 3, windows: $, chats: c },
    O.pageIndexOf(A.output),
  );
  return W.ok
    ? { ok: !0, state: W.state, pages: A.output, skippedTabs: i.skippedTabs }
    : { ok: !1, issues: W.issues };
}
exports.migrateProfileSettings = me;
