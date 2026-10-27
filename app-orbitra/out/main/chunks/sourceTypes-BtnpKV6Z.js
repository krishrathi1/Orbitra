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
      (e._sentryDebugIds[t] = "f4f2ab8a-5abe-4883-bc52-a111578850c2"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-f4f2ab8a-5abe-4883-bc52-a111578850c2"));
  })();
} catch {}
const f = require("node:async_hooks"),
  a = require("node:fs/promises"),
  b = require("node:os"),
  s = require("node:path"),
  y = process.platform === "darwin",
  h = process.platform === "win32",
  n = 0.25,
  c = 5;
function p(e) {
  if (!(!Number.isFinite(e) || e <= 0)) return Math.max(n, Math.min(c, e));
}
function w(e) {
  if (!(!e || /[\s\\/?#@]/.test(e)))
    try {
      const t = new URL(`https://${e}`);
      return t.username ||
        t.password ||
        t.port ||
        t.pathname !== "/" ||
        t.search ||
        t.hash ||
        (t.hostname !== e.toLowerCase() && !/[^\u0000-\u007f]/.test(e))
        ? void 0
        : t.hostname;
    } catch {
      return;
    }
}
function d(e) {
  try {
    const t = new URL(e);
    return t.protocol !== "https:" && t.protocol !== "http:"
      ? void 0
      : t.hostname;
  } catch {
    return;
  }
}
function m(e, t) {
  const o = d(t);
  if (o) return Object.hasOwn(e.hosts, o) ? e.hosts[o] : e.defaultFactor;
}
function v(e, t) {
  return {
    defaultFactor: t?.defaultFactor ?? e.defaultFactor,
    hosts: { ...e.hosts, ...t?.hosts },
  };
}
function S(e) {
  const {
    activitySidebarFavoriteId: t,
    claimedByChatWithSessionId: o,
    chatPanel: i,
    chatSidebar: r,
    isActivitySidebarFavorite: D,
    ...u
  } = e;
  return u;
}
function T(e) {
  return {
    id: e.id,
    profileId: e.profileId,
    title: e.title,
    url: e.url,
    tabType: e.tabType ?? "website",
    faviconUrl: e.faviconUrl ?? "",
    isAIControlledTab: !1,
    isTakeover: !1,
    isBrowserAgentControlledTab: null,
    isWaitingForCaptcha: void 0,
    captchaExpiresAt: null,
    canGoBack: !1,
    canGoForward: !1,
    isPinned: !0,
    groupId: null,
    openedAt: e.openedAt ?? 0,
    lastShownAt: e.lastShownAt ?? 0,
    lastActivityAt: e.lastActivityAt ?? 0,
    isLoading: !1,
    isFailedToLoad: !1,
    isFailedToLoadReason: "",
    visitType: void 0,
    isAudioMuted: !1,
    hasAudioActivity: !1,
    wasInitiatedByAgent: !1,
  };
}
function A(e, t) {
  const { isBrowserAgentControlledTab: o, isAIControlledTab: i, ...r } = S(e);
  return {
    snapshotVersion: 1,
    pinnedId: t,
    tab: {
      ...r,
      pinnedId: t,
      isPinned: !0,
      isAIControlledTab: !1,
      isBrowserAgentControlledTab: null,
    },
  };
}
const l = new f.AsyncLocalStorage();
async function g(e) {
  try {
    return (await a.access(e), !0);
  } catch {
    return !1;
  }
}
async function I(e) {
  try {
    return (await a.stat(e)).isDirectory();
  } catch {
    return !1;
  }
}
function _(e, t) {
  return l.run(e, t);
}
async function E(e) {
  const t = await a.mkdtemp(
      s.join(l.getStore() ?? b.tmpdir(), "browser-import-db-"),
    ),
    o = s.join(t, "source.sqlite");
  try {
    await a.copyFile(e, o);
    for (const i of ["-wal", "-shm"])
      try {
        await a.copyFile(e + i, o + i);
      } catch (r) {
        if (!(r instanceof Error && "code" in r && r.code === "ENOENT"))
          throw r;
      }
    return o;
  } catch (i) {
    throw (await a.rm(t, { recursive: !0, force: !0 }), i);
  }
}
async function F(e) {
  await a.rm(s.dirname(e), { recursive: !0, force: !0 });
}
function W() {
  return { imported: 0, skipped: 0, errors: [] };
}
exports.WEBSITE_MAX_ZOOM = c;
exports.WEBSITE_MIN_ZOOM = n;
exports.capturePinnedTabSnapshot = A;
exports.copySourceDatabase = E;
exports.emptyResult = W;
exports.fileExists = g;
exports.getWebsiteZoomFactor = m;
exports.isDirectory = I;
exports.isMac = y;
exports.isWindows = h;
exports.mergeWebsiteZoom = v;
exports.parseWebsiteZoomFactor = p;
exports.parseWebsiteZoomHost = w;
exports.removeSourceDatabase = F;
exports.unplacedTabState = T;
exports.websiteZoomHost = d;
exports.withSourceDirectory = _;
