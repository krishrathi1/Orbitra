"use strict";
var Xe = Object.create;
var ye = Object.defineProperty;
var Qe = Object.getOwnPropertyDescriptor;
var et = Object.getOwnPropertyNames;
var tt = Object.getPrototypeOf,
  rt = Object.prototype.hasOwnProperty;
var ot = (s, e, t, r) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let o of et(e))
      !rt.call(s, o) &&
        o !== t &&
        ye(s, o, {
          get: () => e[o],
          enumerable: !(r = Qe(e, o)) || r.enumerable,
        });
  return s;
};
var V = (s, e, t) => (
  (t = s != null ? Xe(tt(s)) : {}),
  ot(
    e || !s || !s.__esModule
      ? ye(t, "default", { value: s, enumerable: !0 })
      : t,
    s,
  )
);
(function () {
  try {
    var s =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    s.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var s =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new s.Error().stack;
    e &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[e] = "01b38236-b05d-4879-9b08-008c5a0d0ba4"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-01b38236-b05d-4879-9b08-008c5a0d0ba4"));
  })();
} catch {}
const we = require("node:worker_threads"),
  O = require("fs/promises"),
  T = require("os"),
  g = require("path"),
  m = require("./chunks/sourceTypes-BtnpKV6Z.js"),
  j = require("better-sqlite3"),
  st = require("valibot"),
  D = require("node:crypto"),
  R = require("node:fs/promises"),
  q = require("node:os"),
  _ = require("node:path"),
  x = require("crypto"),
  Ae = require("./chunks/cookieDomains-BgGsnrv8.js"),
  Ue = require("./chunks/automaticBrowserAccess-jJ30EWyw.js"),
  Fe = require("node:child_process"),
  Be = require("node:util"),
  it = require("csv-parse/sync"),
  nt = require("fast-xml-parser"),
  K = require("./chunks/unicode-CSAGP0Z8.js");
require("node:async_hooks");
function ie(s) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (s) {
    for (const t in s)
      if (t !== "default") {
        const r = Object.getOwnPropertyDescriptor(s, t);
        Object.defineProperty(
          e,
          t,
          r.get ? r : { enumerable: !0, get: () => s[t] },
        );
      }
  }
  return ((e.default = s), Object.freeze(e));
}
const at = ie(O),
  d = ie(st),
  le = ie(R),
  be = ie(_);
function N() {
  return { skippedReasons: {}, failedReasons: {}, samples: {} };
}
function I(s, e, t) {
  ((s.skippedReasons[e] = (s.skippedReasons[e] || 0) + 1),
    t &&
      (s.samples.skipped || (s.samples.skipped = []),
      s.samples.skipped.length < 5 && s.samples.skipped.push(t)));
}
function B(s, e, t) {
  ((s.failedReasons[e] = (s.failedReasons[e] || 0) + 1),
    t &&
      (s.samples.failed || (s.samples.failed = []),
      s.samples.failed.length < 5 && s.samples.failed.push(t)));
}
function z(s, e) {
  (s.samples.imported || (s.samples.imported = []),
    s.samples.imported.length < 5 && s.samples.imported.push(e));
}
function X(s) {
  let e;
  try {
    e = new URL(s);
  } catch {
    return !1;
  }
  return (
    (e.protocol === "https:" || e.protocol === "http:") &&
    (e.hostname === "strawberrybrowser.com" ||
      e.hostname === "www.strawberrybrowser.com") &&
    (e.pathname === "/auth/desktop/complete" ||
      e.pathname === "/auth/desktop/complete/")
  );
}
class ve {
  constructor(e) {
    this.buf = e;
  }
  off = 0;
  ensure(e) {
    if (this.off + e > this.buf.length) throw new Error("Unexpected EOF");
  }
  u8() {
    return (this.ensure(1), this.buf[this.off++]);
  }
  u16() {
    return (this.ensure(2), this.buf.readUInt16LE((this.off += 2) - 2));
  }
  u32() {
    return (this.ensure(4), this.buf.readUInt32LE((this.off += 4) - 4));
  }
  u64() {
    return (this.ensure(8), this.buf.readBigUInt64LE((this.off += 8) - 8));
  }
  bytes(e) {
    return (this.ensure(e), this.buf.subarray((this.off += e) - e, this.off));
  }
  str() {
    const e = this.u32(),
      t = e + ((4 - (e % 4)) & 3);
    return this.bytes(t).subarray(0, e).toString("utf8");
  }
  str16() {
    const e = this.u32(),
      t = e * 2,
      r = t + ((4 - (t % 4)) & 3),
      o = this.bytes(r).subarray(0, t),
      i = Buffer.allocUnsafe(t);
    o.copy(i, 0, 0, t);
    const n = new Uint16Array(i.buffer, i.byteOffset, e);
    return String.fromCodePoint(...n);
  }
}
async function ct(s) {
  const e = await le.readFile(s),
    t = new ve(e),
    r = t.bytes(4).toString("ascii"),
    o = t.u32();
  if (r !== "SNSS" || (o !== 1 && o !== 3))
    throw new Error(`Invalid session file (version ${o}, magic ${r})`);
  const i = new Map(),
    n = new Map();
  let c = null;
  const a = new Map(),
    l = new Map(),
    f = new Map(),
    u = (h) => {
      let y = i.get(h);
      return (
        y ||
          ((y = {
            id: h,
            win: 0,
            idx: 0,
            history: [],
            currentHistoryIdx: 0,
            deleted: !1,
          }),
          i.set(h, y)),
        y
      );
    },
    p = (h) => {
      let y = n.get(h);
      return (
        y ||
          ((y = { id: h, activeTabIdx: 0, tabs: [], deleted: !1 }),
          n.set(h, y)),
        y
      );
    };
  for (; t.off < e.length; ) {
    const h = t.u16() - 1,
      y = t.u8(),
      P = t.bytes(h),
      b = new ve(P);
    switch (y) {
      case 6: {
        b.u32();
        const C = b.u32(),
          E = b.u32(),
          A = b.str(),
          v = b.str16(),
          U = u(C);
        let L = U.history.find((J) => J.idx === E);
        L
          ? ((L.url = A), (L.title = v))
          : ((L = { idx: E, url: A, title: v }), U.history.push(L));
        break;
      }
      case 8: {
        const C = b.u32(),
          E = b.u32();
        p(C).activeTabIdx = E;
        break;
      }
      case 0: {
        const C = b.u32(),
          E = b.u32();
        u(E).win = C;
        break;
      }
      case 2: {
        const C = b.u32(),
          E = b.u32();
        u(C).idx = E;
        break;
      }
      case 20: {
        const C = b.u32();
        c = p(C);
        break;
      }
      case 21: {
        if (P.length !== 12 && P.length !== 16) break;
        const C = b.u32();
        P.length === 16 && b.u32();
        const E = Number(b.u64() / 1000n - 11644473600000n);
        Number.isSafeInteger(E) && E > 0 && (u(C).lastActiveAt = E);
        break;
      }
      case 16: {
        const C = b.u32();
        u(C).deleted = !0;
        break;
      }
      case 17: {
        const C = b.u32();
        p(C).deleted = !0;
        break;
      }
      case 7: {
        const C = b.u32(),
          E = b.u32();
        u(C).currentHistoryIdx = E;
        break;
      }
      case 12: {
        const C = b.u32(),
          E = b.u32();
        a.set(C, E !== 0);
        break;
      }
      case 25: {
        try {
          const C = b.u32();
          b.u32();
          const E = b.bytes(16);
          b.u32() ? l.set(C, E.toString("hex")) : l.delete(C);
        } catch {}
        break;
      }
      case 27: {
        try {
          b.u32();
          const E = b.bytes(16).toString("hex"),
            A = b.str16(),
            v = b.u32() !== 0;
          b.u32();
          const U = b.u32();
          f.set(E, { title: A, colorId: U, collapsed: v });
        } catch {}
        break;
      }
    }
  }
  for (const h of i.values()) {
    if (h.deleted) continue;
    p(h.win).tabs.push(h);
  }
  for (const h of n.values()) h.tabs.sort((y, P) => y.idx - P.idx);
  const k = [],
    w = [];
  for (const h of n.values()) {
    if (h.deleted) continue;
    const y = { id: h.id, active: c?.id === h.id, tabs: [] };
    (h.tabs.forEach((P, b) => {
      const C =
          P.history.find((A) => A.idx === P.currentHistoryIdx) ??
          P.history[P.history.length - 1],
        E = {
          url: C?.url ?? "about:blank",
          title: C?.title ?? "",
          favicon: void 0,
          pinned: a.get(P.id) ?? !1,
          active: h.activeTabIdx === b && y.active,
          windowId: h.id,
          index: b,
          groupTokenHex: l.get(P.id),
          lastActiveAt: P.lastActiveAt,
        };
      (y.tabs.push(E), w.push(E));
    }),
      k.push(y));
  }
  const S = [];
  for (const [h, y] of f) S.push({ tokenHex: h, ...y });
  return { windows: k, tabs: w, tabGroups: S };
}
async function lt(s) {
  const e = [];
  for (const t of [be.join(s, "Sessions"), s]) {
    const r = await le.readdir(t, { withFileTypes: !0 }).catch(() => null);
    if (r)
      for (const o of r) {
        if (!o.isFile() || !o.name.startsWith("Session_")) continue;
        const i = be.join(t, o.name),
          n = await le.stat(i).catch(() => null);
        n && e.push({ path: i, mtime: n.mtimeMs });
      }
  }
  return e.sort((t, r) => r.mtime - t.mtime).map((t) => t.path);
}
async function Le(s) {
  let e;
  try {
    e = await lt(s.path);
  } catch (t) {
    return (console.error("Failed to find Chrome sessions:", t), null);
  }
  for (const t of e)
    try {
      return await ct(t);
    } catch (r) {
      console.error("Failed to parse Chrome session:", r);
    }
  return null;
}
const de = {
    id: d.string(),
    guid: d.optional(d.string(), () => D.randomUUID()),
    name: d.string(),
    date_added: d.optional(d.string(), "0"),
    date_modified: d.optional(d.string(), "0"),
    date_last_used: d.optional(d.string(), "0"),
  },
  ue = d.lazy(() =>
    d.variant("type", [
      d.looseObject({
        ...de,
        type: d.literal("url"),
        url: d.string(),
        children: d.optional(d.array(ue)),
      }),
      d.looseObject({
        ...de,
        type: d.literal("folder"),
        children: d.optional(d.array(ue), () => []),
      }),
    ]),
  ),
  ne = d.looseObject({
    ...de,
    type: d.literal("folder"),
    children: d.optional(d.array(ue), () => []),
  }),
  dt = d.object({
    checksum: d.optional(d.string(), ""),
    version: d.number(),
    roots: d.object({
      bookmark_bar: d.optional(ne, () => ae("1", "Bookmarks Bar")),
      other: d.optional(ne, () => ae("2", "Other Bookmarks")),
      synced: d.optional(ne, () => ae("3", "Mobile Bookmarks")),
    }),
  });
function _e(s) {
  try {
    return d.parse(dt, typeof s == "string" ? JSON.parse(s) : s, {
      abortEarly: !0,
    });
  } catch {
    throw new Error("Invalid Chromium bookmark data");
  }
}
function ae(s, e) {
  return {
    id: s,
    guid: D.randomUUID(),
    name: e,
    type: "folder",
    children: [],
    date_added: "0",
    date_modified: "0",
    date_last_used: "0",
  };
}
function Se(s) {
  return Math.floor(s / 1e3) - 116444736e5;
}
function ut(s) {
  return s
    .prepare(
      `
      SELECT id, url, title, visit_count, typed_count, last_visit_time
      FROM urls
      WHERE url IS NOT NULL AND url != ''
      ORDER BY last_visit_time DESC
    `,
    )
    .all();
}
function ft(s) {
  return s
    .prepare(
      `
      SELECT id, url, visit_time, from_visit, transition
      FROM visits
      WHERE visit_time IS NOT NULL
      ORDER BY visit_time DESC
    `,
    )
    .all();
}
async function pt(s) {
  try {
    await R.access(s);
  } catch (r) {
    if (r instanceof Error && "code" in r && r.code === "ENOENT") return null;
    throw r;
  }
  const e = await m.copySourceDatabase(s);
  let t;
  try {
    return ((t = new j(e, { readonly: !0 })), { urls: ut(t), visits: ft(t) });
  } finally {
    (t?.close(), await m.removeSourceDatabase(e));
  }
}
function mt(s, e) {
  return g.join(e, "History");
}
const ht = [
    {
      id: "linkedin",
      name: "LinkedIn",
      domain: "linkedin.com",
      weight: 8,
      url: "https://www.linkedin.com/in/me/",
      icon: "https://www.linkedin.com/favicon.ico",
      description: "Your professional profile and network connections",
      cookies: [
        { host: ".linkedin.com", name: "li_at" },
        { host: ".www.linkedin.com", name: "li_at" },
      ],
    },
    {
      id: "github",
      name: "GitHub",
      domain: "github.com",
      weight: 9,
      url: "https://github.com",
      icon: "https://github.com/favicon.ico",
      description: "Your repositories, contributions, and developer activity",
      cookies: [
        { host: ".github.com", name: "logged_in" },
        { host: ".github.com", name: "_gh_sess" },
      ],
    },
    {
      id: "notion",
      name: "Notion",
      domain: "notion.so",
      weight: 9,
      url: "https://www.notion.so",
      icon: "https://www.notion.so/favicon.ico",
      description: "Your workspace, notes, and documents",
      cookies: [{ host: ".notion.so", name: "token_v2" }],
    },
    {
      id: "linear",
      name: "Linear",
      domain: "linear.app",
      weight: 9,
      url: "https://linear.app",
      icon: "https://linear.app/favicon.ico",
      description: "Your issues, projects, and team workflows",
      cookies: [{ host: ".linear.app", name: "session:", prefix: !0 }],
    },
    {
      id: "twitter",
      name: "X / Twitter",
      domain: "x.com",
      weight: 5,
      url: "https://x.com/home",
      icon: "https://x.com/favicon.ico",
      description: "Your posts, interests, and social network",
      cookies: [
        { host: ".x.com", name: "auth_token" },
        { host: ".twitter.com", name: "auth_token" },
      ],
    },
    {
      id: "chatgpt",
      name: "ChatGPT",
      domain: "chatgpt.com",
      weight: 7,
      url: "https://chatgpt.com/",
      icon: "https://chatgpt.com/favicon.ico",
      description: "Your conversations and usage patterns",
      cookies: [
        { host: ".chatgpt.com", name: "__Secure-next-auth.session-token" },
      ],
    },
    {
      id: "reddit",
      name: "Reddit",
      domain: "reddit.com",
      weight: 4,
      url: "https://www.reddit.com/user/me/",
      icon: "https://www.reddit.com/favicon.ico",
      description: "Your posts, comments, and community activity",
      cookies: [
        { host: ".reddit.com", name: "reddit_session" },
        { host: ".reddit.com", name: "token_v2" },
      ],
    },
    {
      id: "figma",
      name: "Figma",
      domain: "figma.com",
      weight: 9,
      url: "https://www.figma.com/files/recents",
      icon: "https://www.figma.com/favicon.ico",
      description: "Your design files and recent projects",
      cookies: [{ host: ".figma.com", name: "__Host-figma.authn" }],
    },
    {
      id: "slack",
      name: "Slack",
      domain: "slack.com",
      weight: 8,
      url: "https://app.slack.com/",
      icon: "https://slack.com/favicon.ico",
      description: "Your workspace messages and channels",
      cookies: [{ host: ".slack.com", name: "d" }],
    },
    {
      id: "gitlab",
      name: "GitLab",
      domain: "gitlab.com",
      weight: 9,
      url: "https://gitlab.com/",
      icon: "https://gitlab.com/favicon.ico",
      description: "Your repositories, merge requests, and CI/CD activity",
      cookies: [{ host: "gitlab.com", name: "_gitlab_session" }],
    },
    {
      id: "atlassian",
      name: "Atlassian",
      domain: "atlassian.com",
      weight: 8,
      url: "https://start.atlassian.com/",
      icon: "https://start.atlassian.com/favicon.ico",
      description: "Your Jira issues, Confluence pages, and team projects",
      cookies: [{ host: ".atlassian.com", name: "cloud.session.token" }],
    },
    {
      id: "spotify",
      name: "Spotify",
      domain: "spotify.com",
      weight: 3,
      url: "https://open.spotify.com/",
      icon: "https://open.spotify.com/favicon.ico",
      description: "Your listening history and playlists",
      cookies: [{ host: ".spotify.com", name: "sp_dc" }],
    },
    {
      id: "facebook",
      name: "Facebook",
      domain: "facebook.com",
      weight: 4,
      url: "https://www.facebook.com/me",
      icon: "https://www.facebook.com/favicon.ico",
      description: "Your profile and social activity",
      cookies: [{ host: ".facebook.com", name: "c_user" }],
    },
    {
      id: "instagram",
      name: "Instagram",
      domain: "instagram.com",
      weight: 3,
      url: "https://www.instagram.com/",
      icon: "https://www.instagram.com/favicon.ico",
      description: "Your profile and posts",
      cookies: [{ host: ".instagram.com", name: "sessionid" }],
    },
    {
      id: "google-mail",
      name: "Gmail",
      domain: "mail.google.com",
      weight: 10,
      url: "https://mail.google.com/mail/u/0/",
      icon: "https://mail.google.com/favicon.ico",
      description: "Your emails, contacts, and communication patterns",
      cookies: [{ host: ".google.com", name: "SID" }],
    },
    {
      id: "google-calendar",
      name: "Google Calendar",
      domain: "calendar.google.com",
      weight: 10,
      url: "https://calendar.google.com/calendar/u/0/r",
      icon: "https://calendar.google.com/favicon.ico",
      description: "Your schedule, events, and meeting patterns",
      cookies: [{ host: ".google.com", name: "SID" }],
    },
    {
      id: "google-drive",
      name: "Google Drive",
      domain: "drive.google.com",
      weight: 10,
      url: "https://drive.google.com/drive/u/0/my-drive",
      icon: "https://drive.google.com/favicon.ico",
      description: "Your files, folders, and document activity",
      cookies: [{ host: ".google.com", name: "SID" }],
    },
    {
      id: "google-docs",
      name: "Google Docs",
      domain: "docs.google.com",
      weight: 10,
      url: "https://docs.google.com/document/u/0/",
      icon: "https://docs.google.com/favicon.ico",
      description: "Your documents and writing activity",
      cookies: [{ host: ".google.com", name: "SID" }],
    },
  ],
  Ee = [
    ...ht,
    {
      id: "google",
      name: "Google",
      domain: "google.com",
      weight: 10,
      cookies: [
        { host: ".google.com", name: "SID" },
        { host: ".google.com", name: "SSID" },
      ],
    },
    {
      id: "discord",
      name: "Discord",
      domain: "discord.com",
      weight: 5,
      cookies: [
        { host: ".discord.com", name: "__dcfduid" },
        { host: ".discord.com", name: "__sdcfduid" },
      ],
    },
    {
      id: "amazon",
      name: "Amazon",
      domain: "amazon.com",
      weight: 2,
      cookies: [
        { host: ".amazon.com", name: "session-id" },
        { host: ".amazon.com", name: "x-main" },
      ],
    },
    {
      id: "netflix",
      name: "Netflix",
      domain: "netflix.com",
      weight: 2,
      cookies: [{ host: ".netflix.com", name: "NetflixId" }],
    },
    {
      id: "twitch",
      name: "Twitch",
      domain: "twitch.tv",
      weight: 3,
      cookies: [{ host: ".twitch.tv", name: "auth-token" }],
    },
    {
      id: "microsoft",
      name: "Microsoft",
      domain: "microsoft.com",
      weight: 7,
      cookies: [{ host: ".microsoft.com", name: "MUID" }],
    },
    {
      id: "vercel",
      name: "Vercel",
      domain: "vercel.com",
      weight: 8,
      cookies: [{ host: ".vercel.com", name: "authorization" }],
    },
    {
      id: "stripe",
      name: "Stripe",
      domain: "stripe.com",
      weight: 7,
      cookies: [{ host: ".stripe.com", name: "session" }],
    },
    {
      id: "dropbox",
      name: "Dropbox",
      domain: "dropbox.com",
      weight: 5,
      cookies: [{ host: ".dropbox.com", name: "jar" }],
    },
    {
      id: "trello",
      name: "Trello",
      domain: "trello.com",
      weight: 7,
      cookies: [{ host: ".trello.com", name: "token" }],
    },
    {
      id: "asana",
      name: "Asana",
      domain: "asana.com",
      weight: 8,
      cookies: [{ host: ".asana.com", name: "recent_projects" }],
    },
    {
      id: "pinterest",
      name: "Pinterest",
      domain: "pinterest.com",
      weight: 2,
      cookies: [{ host: ".pinterest.com", name: "_pinterest_sess" }],
    },
    {
      id: "stackoverflow",
      name: "StackOverflow",
      domain: "stackoverflow.com",
      weight: 6,
      cookies: [{ host: ".stackoverflow.com", name: "acct" }],
    },
    {
      id: "zoom",
      name: "Zoom",
      domain: "zoom.us",
      weight: 6,
      cookies: [{ host: ".zoom.us", name: "_zm_ssid" }],
    },
    {
      id: "canva",
      name: "Canva",
      domain: "canva.com",
      weight: 5,
      cookies: [{ host: ".canva.com", name: "canva_session" }],
    },
    {
      id: "whatsapp",
      name: "WhatsApp Web",
      domain: "web.whatsapp.com",
      weight: 4,
      cookies: [{ host: ".whatsapp.com", name: "wa_lang" }],
    },
    {
      id: "telegram",
      name: "Telegram Web",
      domain: "web.telegram.org",
      weight: 4,
      cookies: [{ host: ".telegram.org", name: "stel_ssid" }],
    },
  ],
  Oe = 11644473600,
  Re = 1e6,
  Ce = { V10_CBC: "v10", V11_GCM: "v11" },
  gt = { 1: "lax", 2: "strict", [-1]: "no_restriction" };
function Me(s) {
  return Math.round(s / Re - Oe);
}
function wt(s) {
  return gt[s];
}
function kt(s, e, t) {
  const r = t ? "https" : "http",
    o = s.startsWith(".") ? s.slice(1) : s;
  return `${r}://${o}${e}`;
}
function yt(s) {
  try {
    const e = s.prepare("SELECT value FROM meta WHERE key = 'version'").get();
    return e ? parseInt(e.value, 10) : 0;
  } catch {
    return 0;
  }
}
function bt(s) {
  const e = `
    SELECT
      creation_utc,
      host_key as domain,
      name,
      value,
      encrypted_value,
      path,
      expires_utc as expires,
      is_secure as secure,
      is_httponly as httpOnly,
      last_access_utc,
      has_expires,
      is_persistent,
      priority,
      samesite,
      source_scheme
    FROM cookies
  `;
  try {
    return s.prepare(e).all();
  } catch {
    return [];
  }
}
async function je(s) {
  return m.copySourceDatabase(s);
}
async function Ne(s) {
  await m.removeSourceDatabase(s);
}
function fe(s, e) {
  const t = e >= 24 ? 32 : 0;
  return s.slice(t).toString("utf8");
}
function vt(s, e, t) {
  if (e.length < 32)
    return { success: !1, error: "v11_insufficient_key_length" };
  if (s.length < 28) return { success: !1, error: "v11_too_short" };
  try {
    const r = s.slice(0, 12),
      o = s.slice(12, -16),
      i = s.slice(-16);
    if (i.length !== 16)
      return { success: !1, error: `v11_invalid_tag_length:${i.length}` };
    const n = e.slice(0, 32),
      c = x.createDecipheriv("aes-256-gcm", n, r);
    c.setAuthTag(i);
    const a = Buffer.concat([c.update(o), c.final()]);
    return { success: !0, value: fe(a, t) };
  } catch (r) {
    return {
      success: !1,
      error: `v11_decrypt_failed:${r instanceof Error ? r.message : "decryption-failed"}`,
    };
  }
}
function _t(s, e, t) {
  if (m.isWindows) {
    if (e.length < 32)
      return { success: !1, error: "v10_windows_insufficient_key_length" };
    if (s.length < 28) return { success: !1, error: "v10_windows_too_short" };
    try {
      const o = s.slice(0, 12),
        i = s.slice(12, -16),
        n = s.slice(-16);
      if (n.length !== 16)
        return {
          success: !1,
          error: `v10_windows_invalid_tag_length:${n.length}`,
        };
      const c = x.createDecipheriv("aes-256-gcm", e, o);
      c.setAuthTag(n);
      const a = Buffer.concat([c.update(i), c.final()]);
      return { success: !0, value: fe(a, t) };
    } catch (o) {
      return {
        success: !1,
        error: `v10_windows_decrypt_failed:${o instanceof Error ? o.message : "decryption-failed"}`,
      };
    }
  }
  const r = [
    {
      key: e.slice(0, 16),
      iv: Buffer.from(" ".repeat(16)),
      name: "standard_space_iv",
    },
    { key: e.slice(0, 16), iv: Buffer.alloc(16), name: "standard_zero_iv" },
    ...(e.length >= 32
      ? [
          { key: e.slice(0, 16), iv: e.slice(16, 32), name: "key_derived_iv" },
          {
            key: e.slice(16, 32),
            iv: Buffer.from(" ".repeat(16)),
            name: "offset_key_space_iv",
          },
          {
            key: e.slice(16, 32),
            iv: Buffer.alloc(16),
            name: "offset_key_zero_iv",
          },
        ]
      : []),
    ...(e.length === 16
      ? [
          {
            key: e,
            iv: Buffer.from(" ".repeat(16)),
            name: "full_key_space_iv",
          },
          { key: e, iv: Buffer.alloc(16), name: "full_key_zero_iv" },
        ]
      : []),
  ];
  for (const { key: o, iv: i } of r)
    if (!(o.length !== 16 || i.length !== 16))
      try {
        const n = x.createDecipheriv("aes-128-cbc", o, i);
        n.setAutoPadding(!0);
        const c = Buffer.concat([n.update(s), n.final()]),
          a = fe(c, t);
        if (a && a.length > 0) return { success: !0, value: a };
      } catch {
        continue;
      }
  return { success: !1, error: "v10_all_attempts_failed" };
}
function St(s, e, t) {
  if (s.length < 3) return { success: !1, error: "invalid_format_too_short" };
  const r = s.slice(0, 3).toString(),
    o = s.slice(3);
  switch (r) {
    case Ce.V11_GCM:
      return vt(o, e, t);
    case Ce.V10_CBC:
      return _t(o, e, t);
    default:
      return { success: !1, error: `unsupported_format:${r}` };
  }
}
function Et(s, e, t) {
  return s.value && s.value.trim()
    ? { success: !0, value: s.value }
    : s.encrypted_value && s.encrypted_value.length > 0
      ? St(s.encrypted_value, e, t)
      : { success: !1, error: "no_value_available" };
}
function Ct(s, e) {
  const t = s.source_scheme !== 1,
    o = {
      url: kt(s.domain, s.path, t),
      name: s.name,
      value: e,
      path: s.path,
      secure: !!s.secure || s.samesite === -1,
      httpOnly: !!s.httpOnly,
      expirationDate: Me(s.expires),
    };
  s.domain.startsWith(".") &&
    !s.name.startsWith("__Host-") &&
    (o.domain = s.domain);
  const i = wt(s.samesite);
  return (i && (o.sameSite = i), o);
}
function Dt() {
  const s = {
    successful: 0,
    ignored: 0,
    failed: 0,
    total: 0,
    ignoredBreakdown: {},
    failedBreakdown: {},
  };
  return {
    stats: s,
    trackSuccess: () => {
      (s.successful++, s.total++);
    },
    trackIgnored: (e, t) => {
      (s.ignored++,
        s.total++,
        s.ignoredBreakdown[e] ||
          (s.ignoredBreakdown[e] = { count: 0, domains: [] }),
        s.ignoredBreakdown[e].count++,
        s.ignoredBreakdown[e].domains.includes(t) ||
          s.ignoredBreakdown[e].domains.push(t));
    },
    trackFailure: (e, t) => {
      (s.failed++,
        s.total++,
        s.failedBreakdown[e] ||
          (s.failedBreakdown[e] = { count: 0, domains: [] }),
        s.failedBreakdown[e].count++,
        s.failedBreakdown[e].domains.includes(t) ||
          s.failedBreakdown[e].domains.push(t));
    },
  };
}
function Pt(s, e, t) {
  const { stats: r, trackSuccess: o, trackIgnored: i, trackFailure: n } = Dt(),
    c = [];
  for (const a of s) {
    const l = Ae.shouldIgnoreDomain(a.domain);
    if (l) {
      i(l, a.domain);
      continue;
    }
    const f = Et(a, e, t);
    if (!f.success) {
      n(f.error, a.domain);
      continue;
    }
    if (!f.value.trim()) {
      n("empty_decrypted_value", a.domain);
      continue;
    }
    const u = Ct(a, f.value);
    (c.push(u), o());
  }
  return { cookies: c, stats: r };
}
async function It(s, e) {
  const t = g.join(s.path, "Network", "Cookies"),
    r = (await m.fileExists(t)) ? t : g.join(s.path, "Cookies");
  if (!(await m.fileExists(r)))
    return {
      cookies: [],
      stats: {
        successful: 0,
        ignored: 0,
        failed: 0,
        total: 0,
        ignoredBreakdown: {},
        failedBreakdown: {},
      },
    };
  let o = null,
    i = null;
  try {
    ((o = await je(r)), (i = new j(o, { readonly: !0 })));
    const n = yt(i),
      c = bt(i),
      { cookies: a, stats: l } = Pt(c, e, n);
    return { cookies: a, stats: l };
  } finally {
    if (i)
      try {
        i.close();
      } catch {}
    o && (await Ne(o));
  }
}
async function Tt(s) {
  const e = g.join(s, "Network", "Cookies");
  try {
    return (await O.access(e), e);
  } catch {}
  const t = g.join(s, "Cookies");
  try {
    return (await O.access(t), t);
  } catch {
    return null;
  }
}
async function We(s, e) {
  const t = await Tt(s);
  if (!t) return null;
  let r = null,
    o = null;
  try {
    return ((r = await je(t)), (o = new j(r, { readonly: !0 })), e(o));
  } finally {
    if (o)
      try {
        o.close();
      } catch {}
    r && (await Ne(r));
  }
}
async function xt(s, e = 8) {
  try {
    return (
      (await We(s, (r) => {
        const o = Ee.flatMap((p) =>
            p.cookies.map((k) => ({
              host: k.host,
              name: k.name,
              prefix: k.prefix,
            })),
          ),
          i = o
            .map(
              (p, k) =>
                `(host_key = @host${k} AND name ${p.prefix ? "LIKE" : "="} @name${k})`,
            )
            .join(" OR "),
          n = {};
        o.forEach((p, k) => {
          ((n[`host${k}`] = p.host),
            (n[`name${k}`] = p.prefix ? `${p.name}%` : p.name));
        });
        const c = r
            .prepare(
              `SELECT host_key, name, last_access_utc FROM cookies WHERE ${i}`,
            )
            .all(n),
          a = r
            .prepare(
              `SELECT
             CASE
               WHEN host_key LIKE '.%' THEN SUBSTR(host_key, 2)
               ELSE host_key
             END AS root_domain,
             COUNT(*) AS cookie_count
           FROM cookies
           GROUP BY root_domain`,
            )
            .all(),
          l = new Map(a.map((p) => [p.root_domain, p.cookie_count])),
          f = Date.now() * 1e3 + Oe * Re,
          u = [];
        for (const p of Ee) {
          const k = c.filter((A) =>
            p.cookies.some(
              (v) =>
                A.host_key === v.host &&
                (v.prefix ? A.name.startsWith(v.name) : A.name === v.name),
            ),
          );
          if (k.length === 0) continue;
          const w = p.weight ?? 5,
            S = Math.max(...k.map((A) => A.last_access_utc)),
            y = (f - S) / 1e3 / (1e3 * 60 * 60 * 24),
            P = Math.max(0, 5 - y / 18),
            b = p.domain,
            C = l.get(b) ?? 0;
          let E;
          (C >= 200 ? (E = 3) : C >= 50 ? (E = 2) : C >= 10 ? (E = 1) : (E = 0),
            u.push({ domain: p.domain, score: w + P + E }));
        }
        return (
          u.sort((p, k) => k.score - p.score),
          u.slice(0, e).map((p) => p.domain)
        );
      })) ?? []
    );
  } catch {
    return [];
  }
}
async function At(s) {
  return (
    (await We(s, (t) =>
      t
        .prepare(
          "SELECT host_key AS host, name, is_httponly AS httpOnly, has_expires AS hasExpires, expires_utc AS expires FROM cookies",
        )
        .all(),
    )) ?? []
  ).map((t) => ({
    host: t.host,
    name: t.name,
    httpOnly: t.httpOnly === 1,
    expiresAt: t.hasExpires === 1 && t.expires > 0 ? Me(t.expires) * 1e3 : null,
  }));
}
async function Ut(s, e) {
  const t = await It(s, e);
  return { cookies: t.cookies, failureCount: t.stats.failed };
}
async function Ft(s, e) {
  try {
    if (!s || s.length < 3) return "";
    const t = s.slice(0, 3).toString();
    if (t !== "v10" && t !== "v11") return "";
    if (m.isWindows) {
      const r = s.slice(3, 15),
        o = s.slice(15, -16),
        i = s.slice(-16),
        n = x.createDecipheriv("aes-256-gcm", e, r);
      return (
        n.setAuthTag(i),
        Buffer.concat([n.update(o), n.final()]).toString("utf8")
      );
    } else {
      const r = s.slice(3);
      if (e.length >= 32 && r.length > 28)
        try {
          const a = r.slice(0, 12),
            l = r.slice(-16),
            f = r.slice(12, -16),
            u = x.createDecipheriv("aes-256-gcm", e.slice(0, 32), a);
          return (
            u.setAuthTag(l),
            Buffer.concat([u.update(f), u.final()]).toString("utf8")
          );
        } catch {}
      const o = Buffer.alloc(16, " ");
      let i;
      e.length >= 16
        ? (i = e.slice(0, 16))
        : ((i = Buffer.alloc(16)), e.copy(i, 0));
      const n = x.createDecipheriv("aes-128-cbc", i, o);
      return Buffer.concat([n.update(r), n.final()]).toString("utf8");
    }
  } catch {
    return "";
  }
}
async function De(s, e, t) {
  if (!(await m.fileExists(s))) return [];
  let r;
  try {
    if (((r = await m.copySourceDatabase(s)), !(await m.fileExists(r))))
      throw new Error(
        `Temporary database file was not created successfully for ${e}`,
      );
  } catch (i) {
    throw i instanceof Error &&
      "code" in i &&
      (i.code === "EBUSY" || i.code === "EPERM" || i.code === "EACCES")
      ? new Error(`Unable to access ${e}.`)
      : i;
  }
  let o = null;
  try {
    o = new j(r, { readonly: !0 });
    const n = o
      .prepare(
        `SELECT origin_url, username_value, password_value, date_created 
                             FROM logins`,
      )
      .all();
    return (
      await Promise.all(
        n.map(async (a) => {
          const l = await Ft(a.password_value, t);
          return {
            originUrl: a.origin_url,
            username: a.username_value,
            password: l,
            dateCreated: new Date(a.date_created / 1e3),
          };
        }),
      )
    ).filter((a) => a.password !== "");
  } finally {
    if (o)
      try {
        o.close();
      } catch {}
    try {
      await m.removeSourceDatabase(r);
    } catch {}
  }
}
async function Bt(s, e) {
  const t = g.join(s.path, "Login Data"),
    r = g.join(s.path, "Login Data For Account"),
    [o, i] = await Promise.all([
      De(t, "Login Data", e),
      De(r, "Login Data For Account", e),
    ]);
  return [...o, ...i].filter(
    (a, l, f) =>
      l ===
      f.findIndex(
        (u) => u.originUrl === a.originUrl && u.username === a.username,
      ),
  );
}
const Lt = [
  "nmmhkkegccagdldgiimedpiccmgmieda",
  "gndmhdcefbhlchkhipcnnbkcmicncehk",
];
class ke {
  constructor(e) {
    this.profile = e;
  }
  async getPasswords(e) {
    const t = this.profile,
      r = N(),
      o = { imported: 0, skipped: 0, errors: [], details: r };
    try {
      const i = Buffer.from(e.key ?? []);
      return { data: await Bt(t, i), result: o };
    } catch (i) {
      const n = i instanceof Error ? i.message : "Unknown error";
      return (o.errors.push(n), B(r, n), { data: null, result: o });
    }
  }
  async getBookmarks(e) {
    const t = this.profile,
      r = { imported: 0, skipped: 0, errors: [] };
    try {
      const o = [
          _.join(t.path, "Bookmarks"),
          _.join(t.path, "AccountBookmarks"),
        ],
        i = [];
      for (const l of o)
        try {
          const f = await R.readFile(l, "utf8");
          i.push(_e(f));
        } catch (f) {
          if (f instanceof Error && "code" in f && f.code === "ENOENT")
            continue;
          r.errors.push(
            `Could not read Chrome bookmarks from ${_.basename(l)}`,
          );
        }
      if (i.length === 0)
        return (
          r.errors.length === 0 &&
            r.errors.push("Chrome bookmarks files not found"),
          { data: null, result: r }
        );
      const n = e.bookmarks ? _e(e.bookmarks) : null;
      let c = n || i[0];
      const a = n ? i : i.slice(1);
      for (const l of a) c = this.mergeBookmarks(c, l);
      return (
        (c.roots.bookmark_bar = this.filterChromeBookmarks(
          c.roots.bookmark_bar,
        )),
        (c.roots.other = this.filterChromeBookmarks(c.roots.other)),
        (c.roots.synced = this.filterChromeBookmarks(c.roots.synced)),
        (r.imported = this.countBookmarks(c)),
        { data: { bookmarks: c }, result: r }
      );
    } catch (o) {
      const i = o instanceof Error ? o.message : "Unknown error";
      return (r.errors.push(i), { data: null, result: r });
    }
  }
  async getHistory(e) {
    const t = m.emptyResult();
    try {
      const r = this.profile,
        o = await pt(mt(r.browser, r.path));
      return o
        ? {
            data: {
              merge: "nearby",
              urls: o.urls.map((i) => ({
                ...i,
                last_visit_time: Se(i.last_visit_time),
              })),
              visits: o.visits.map((i) => ({
                ...i,
                visit_time: Se(i.visit_time),
              })),
            },
            result: t,
          }
        : { data: null, result: t };
    } catch {
      return (
        t.errors.push("Could not read browser history"),
        { data: null, result: t }
      );
    }
  }
  async getCookies(e) {
    const t = this.profile,
      r = N(),
      o = { imported: 0, skipped: 0, errors: [], details: r };
    try {
      const i = Buffer.from(e.key ?? []),
        { cookies: n, failureCount: c } = await Ut(t, i);
      c > 0 &&
        ((o.skipped += c),
        I(r, "decryption failed"),
        (r.skippedReasons["decryption failed"] = c));
      const a = [];
      for (const l of n)
        try {
          if (l.domain?.includes("chrome://")) {
            (o.skipped++, I(r, "chrome:// URL", l.domain));
            continue;
          }
          if (l.domain?.includes("chrome-extension://")) {
            (o.skipped++, I(r, "chrome-extension:// URL", l.domain));
            continue;
          }
          (l.name?.startsWith("__Host-") &&
            ((l.secure = !0), (l.path = "/"), delete l.domain),
            a.push(l),
            z(r, `${l.name}@${l.domain}`));
        } catch (f) {
          const u = f instanceof Error ? f.message : "Unknown error";
          (o.errors.push(
            `Failed to set cookie ${l.name} for ${l.domain}: ${u}`,
          ),
            o.skipped++,
            B(r, "cookie set failed", `${l.name}@${l.domain}`));
        }
      return { data: a, result: o };
    } catch (i) {
      const n = i instanceof Error ? i.message : "Unknown error";
      return (o.errors.push(n), B(r, n), { data: null, result: o });
    }
  }
  async getTabs(e) {
    const t = this.profile,
      r = N(),
      o = { imported: 0, skipped: 0, errors: [], details: r };
    try {
      const i = await Le(t);
      if (!i || i.tabs.length === 0) return { data: null, result: o };
      const n = new Map(),
        c = Date.now(),
        a = i.tabGroups.map((w) => {
          const S = D.randomUUID();
          return (
            n.set(w.tokenHex, S),
            {
              id: S,
              collapsed: w.collapsed,
              title: w.title || void 0,
              createdAt: c,
              updatedAt: c,
            }
          );
        }),
        l = `${t.browser.toLowerCase()}://`,
        f = i.tabs
          .map((w) => ({
            url: w.url,
            title: w.title,
            tabType: "website",
            isPinned: w.pinned,
            groupId: w.groupTokenHex ? (n.get(w.groupTokenHex) ?? null) : null,
            openedByHuman: !0,
            faviconUrl: "",
          }))
          .filter((w) => {
            const S = w.url || "";
            return X(S)
              ? (o.skipped++, I(r, "Orbitra sign-in completion page"), !1)
              : S === "about:blank"
                ? (o.skipped++, I(r, "about:blank page"), !1)
                : S.startsWith("chrome://")
                  ? (o.skipped++, I(r, "chrome:// URL", S), !1)
                  : l !== "chrome://" && S.startsWith(l)
                    ? (o.skipped++, I(r, `${l} URL`, S), !1)
                    : (o.imported++, z(r, w.title || S), !0);
          }),
        u = f.filter((w) => !w.isPinned),
        k = f
          .filter((w) => w.isPinned)
          .flatMap((w) => {
            const S = {
                id: D.randomUUID(),
                profileId: "",
                title: w.title,
                url: w.url,
                tabType: w.tabType,
                faviconUrl: "",
                isAIControlledTab: !1,
                isTakeover: !1,
                isBrowserAgentControlledTab: null,
                isWaitingForCaptcha: void 0,
                captchaExpiresAt: null,
                canGoBack: !1,
                canGoForward: !1,
                isPinned: !0,
                pinnedId: D.randomUUID(),
                groupId: null,
                openedAt: c,
                lastShownAt: 0,
                isLoading: !1,
                isFailedToLoad: !1,
                isFailedToLoadReason: "",
                visitType: void 0,
                isAudioMuted: !1,
                hasAudioActivity: !1,
                wasInitiatedByAgent: !1,
                openedByHuman: !0,
              },
              h = m.capturePinnedTabSnapshot(S, S.pinnedId ?? "");
            return h ? [h] : [];
          });
      return {
        data: {
          evidenceTabs: i.tabs.map(({ url: w, title: S, lastActiveAt: h }) => ({
            url: w,
            title: S,
            lastActiveAt: h,
          })),
          migratedTabs: u,
          pinnedTabList: k,
          tabGroups: a,
        },
        result: o,
      };
    } catch (i) {
      const n = i instanceof Error ? i.message : "Unknown error";
      return (o.errors.push(n), B(r, n), { data: null, result: o });
    }
  }
  async getExtensions(e) {
    const r = this.profile.path,
      o = _.join(r, "Extensions"),
      i = await R.readdir(o).catch(() => []),
      n = { imported: 0, skipped: 0, errors: [] },
      c = [];
    for (const a of i) {
      const l = _.join(o, a);
      if (Lt.includes(a)) {
        n.skipped++;
        continue;
      }
      if (!(await m.isDirectory(l))) continue;
      const f = await R.readdir(l);
      let u = null;
      for (const h of f) {
        const y = _.join(l, h);
        if (await m.isDirectory(y)) {
          u = y;
          break;
        }
      }
      if (!u) {
        n.errors.push(`Extension directory not found in holder ${l}`);
        continue;
      }
      const p = _.join(u, "manifest.json"),
        k = await R.readFile(p, "utf8").catch(() => null);
      if (!k) {
        n.errors.push(`Manifest not found in ${p}`);
        continue;
      }
      let w = null;
      try {
        w = JSON.parse(k);
      } catch (h) {
        n.errors.push(`Failed to parse manifest: ${h}`);
        continue;
      }
      if (!w) {
        n.errors.push(`Failed to parse manifest of extension ${a}`);
        continue;
      }
      let S = !0;
      if (
        (w.key || (S = !1),
        w.update_url !== "https://clients2.google.com/service/update2/crx" &&
          (S = !1),
        !S)
      ) {
        n.skipped++;
        continue;
      }
      c.push(a);
    }
    return { data: c, result: n };
  }
  mergeBookmarks(e, t) {
    return {
      checksum: this.generateChecksum(),
      roots: {
        bookmark_bar: this.mergeBookmarkFolders(
          e.roots.bookmark_bar,
          t.roots.bookmark_bar,
        ),
        other: this.mergeBookmarkFolders(e.roots.other, t.roots.other),
        synced: this.mergeBookmarkFolders(e.roots.synced, t.roots.synced),
      },
      version: t.version,
    };
  }
  filterChromeBookmarks(e) {
    return e.type === "url" && e.url?.startsWith("chrome://")
      ? null
      : (e.children &&
          (e.children = e.children
            .map((t) => this.filterChromeBookmarks(t))
            .filter((t) => t !== null)),
        e);
  }
  mergeBookmarkFolders(e, t) {
    const r = new Set(this.extractUrls(e)),
      o = [...(e.children || [])];
    return (
      t.children?.forEach((i) => {
        if (i.type === "url" && i.url)
          r.has(i.url) ||
            o.push({
              ...i,
              id: this.generateBookmarkId(),
              guid: D.randomUUID(),
              date_added: Date.now().toString(),
              date_modified: Date.now().toString(),
            });
        else if (i.type === "folder") {
          const n = e.children?.find(
            (c) => c.type === "folder" && c.name === i.name,
          );
          if (n) {
            const c = this.mergeBookmarkFolders(n, i),
              a = o.findIndex((l) => l.id === n.id);
            a !== -1 && (o[a] = c);
          } else
            o.push({
              ...i,
              id: this.generateBookmarkId(),
              guid: D.randomUUID(),
              date_added: Date.now().toString(),
              date_modified: Date.now().toString(),
            });
        }
      }),
      { ...e, children: o, date_modified: Date.now().toString() }
    );
  }
  extractUrls(e) {
    const t = [];
    return (
      e.type === "url" && e.url && t.push(e.url),
      e.children &&
        e.children.forEach((r) => {
          t.push(...this.extractUrls(r));
        }),
      t
    );
  }
  countBookmarks(e) {
    let t = 0;
    return (
      (t += this.countBookmarksInFolder(e.roots.bookmark_bar)),
      (t += this.countBookmarksInFolder(e.roots.other)),
      (t += this.countBookmarksInFolder(e.roots.synced)),
      t
    );
  }
  countBookmarksInFolder(e) {
    let t = 0;
    return (
      e.type === "url" && (t = 1),
      e.children &&
        e.children.forEach((r) => {
          t += this.countBookmarksInFolder(r);
        }),
      t
    );
  }
  generateBookmarkId() {
    return D.randomUUID();
  }
  generateChecksum() {
    return D.randomUUID();
  }
}
async function Ot() {
  if (process.platform !== "darwin") return [];
  const s = _.join(q.homedir(), "Library/Application Support/orbitra"),
    e = await R.readFile(_.join(s, "profiles.json"), "utf8").catch((o) => {
      if (o.code === "ENOENT") return null;
      throw o;
    });
  if (e === null) return [];
  const t = d.parse(
      d.object({
        profiles: d.array(
          d.object({
            id: d.pipe(d.string(), d.regex(/^[a-zA-Z0-9_-]+$/)),
            name: d.string(),
            lastUsed: d.optional(d.string()),
          }),
        ),
      }),
      JSON.parse(e),
    ),
    r = [];
  for (const o of t.profiles) {
    const i = _.join(s, "Partitions", `profile_${o.id}`);
    if (!(await m.isDirectory(i))) continue;
    const n = o.lastUsed ? Date.parse(o.lastUsed) : NaN;
    r.push({
      name: o.name,
      path: i,
      browser: "orbitra",
      lastModified: Number.isFinite(n) ? new Date(n) : (await R.stat(i)).mtime,
    });
  }
  return r;
}
class Rt extends ke {
  constructor(e) {
    (super(e), (this.sourceProfile = e));
  }
  async getPasswords(e) {
    const t = m.emptyResult();
    try {
      const r = await R.readFile(
          _.join(this.sourceProfile.path, "autofill.json"),
          "utf8",
        ).catch((u) => {
          if (u.code === "ENOENT") return "{}";
          throw u;
        }),
        o = d.parse(
          d.object({ passwords: d.optional(d.string()) }),
          JSON.parse(r),
        );
      if (!o.passwords) return { data: [], result: t };
      const i = Buffer.from(o.passwords, "base64");
      if (
        i.subarray(0, 3).toString("ascii") !== "v10" ||
        !e.key ||
        e.key.length < 16
      )
        throw new Error("Orbitra password storage cannot be decrypted");
      const c = D.createDecipheriv(
          "aes-128-cbc",
          e.key.subarray(0, 16),
          Buffer.alloc(16, " "),
        ),
        a = Buffer.concat([c.update(i.subarray(3)), c.final()]),
        l = d.parse(
          d.array(
            d.object({
              username: d.string(),
              password: d.string(),
              hostname: d.string(),
            }),
          ),
          JSON.parse(a.toString("utf8")),
        ),
        f = [];
      for (const u of l) {
        const p = URL.parse(`https://${u.hostname}`);
        if (!p || !p.hostname || p.username || p.password || !u.password) {
          t.skipped++;
          continue;
        }
        f.push({
          originUrl: p.origin,
          username: u.username,
          password: u.password,
        });
      }
      return { data: f, result: t };
    } catch {
      return (
        t.errors.push(
          "Orbitra passwords could not be read with the source Safe Storage key",
        ),
        { data: null, result: t }
      );
    }
  }
  async getHistory() {
    const e = await m.copySourceDatabase(
      _.join(this.sourceProfile.path, "history.db"),
    );
    let t;
    try {
      t = new j(e, { readonly: !0, fileMustExist: !0 });
      const r = d.parse(
          d.array(
            d.object({
              id: d.number(),
              url: d.string(),
              title: d.string(),
              visit_count: d.number(),
              typed_count: d.number(),
              last_visit_time: d.number(),
              frecency: d.number(),
            }),
          ),
          t
            .prepare(
              `SELECT id, url, COALESCE(title, '') AS title,
        COALESCE(visit_count, 0) AS visit_count, COALESCE(typed_count, 0) AS typed_count,
        COALESCE(last_visit_time, 0) AS last_visit_time, COALESCE(frecency, 0) AS frecency
        FROM places WHERE url LIKE 'http://%' OR url LIKE 'https://%' ORDER BY last_visit_time DESC`,
            )
            .all(),
        ),
        o = d.parse(
          d.array(
            d.object({
              id: d.number(),
              url: d.number(),
              visit_time: d.number(),
              transition: d.number(),
            }),
          ),
          t
            .prepare(
              `SELECT v.id, v.place_id AS url, v.visit_date AS visit_time, v.visit_type AS transition
        FROM visits v JOIN places p ON p.id = v.place_id
        WHERE p.url LIKE 'http://%' OR p.url LIKE 'https://%' ORDER BY v.visit_date DESC`,
            )
            .all(),
        );
      return {
        data: { urls: r, visits: o, merge: "nearby" },
        result: m.emptyResult(),
      };
    } finally {
      (t?.close(), await m.removeSourceDatabase(e));
    }
  }
  async getTabs() {
    const e = await m.copySourceDatabase(
      _.join(this.sourceProfile.path, "layout", "layout.db"),
    );
    let t;
    try {
      t = new j(e, { readonly: !0, fileMustExist: !0 });
      const r = d.parse(
          d.array(
            d.object({
              url: d.string(),
              title: d.string(),
              faviconUrl: d.nullable(d.string()),
              lastActiveAt: d.number(),
            }),
          ),
          t
            .prepare(
              `SELECT url, title, favicon_url AS faviconUrl,
        MAX(last_activity_at, last_shown_at) AS lastActiveAt FROM pages
        WHERE url LIKE 'http://%' OR url LIKE 'https://%' ORDER BY lastActiveAt DESC`,
            )
            .all(),
        ),
        o = r.filter((i) => !X(i.url));
      return {
        data: {
          evidenceTabs: o,
          migratedTabs: o.map((i) => ({
            ...i,
            faviconUrl: i.faviconUrl ?? "",
            tabType: "website",
            isPinned: !1,
            groupId: null,
            openedByHuman: !0,
          })),
        },
        result: {
          imported: o.length,
          skipped: r.length - o.length,
          errors: [],
        },
      };
    } finally {
      (t?.close(), await m.removeSourceDatabase(e));
    }
  }
}
const Mt = new Set(["__ARC_SYSTEM_PROFILE", "__DIA_SYSTEM_PROFILE"]);
class G {
  static instance;
  static getInstance() {
    return (G.instance || (G.instance = new G()), G.instance);
  }
  constructor() {}
  async findAllBrowserProfiles(e = !1, t) {
    return this.findProfiles(e, (r) => !t || r === t);
  }
  async findAutomaticBrowserProfiles(e = !1) {
    return this.findProfiles(e, Ue.canReadBrowserAutomatically);
  }
  async findProfiles(e, t) {
    const r = {
        orbitra: () => (e ? Ot() : Promise.resolve([])),
        chrome: () => this.discoverChromeProfiles(),
        arc: () => this.discoverArcProfiles(),
        dia: () => this.discoverDiaProfiles(),
        brave: () => this.discoverBraveProfiles(),
        comet: () => this.discoverCometProfiles(),
        edge: () => this.discoverEdgeProfiles(),
        firefox: () => this.discoverFirefoxProfiles(),
        zen: () => this.discoverZenProfiles(),
        safari: () => this.discoverSafariProfiles(),
      },
      o = [];
    for (const i of Object.keys(r)) t(i) && o.push(...(await r[i]()));
    return o.sort((i, n) =>
      i.browser < n.browser
        ? -1
        : i.browser > n.browser
          ? 1
          : n.lastModified.getTime() - i.lastModified.getTime(),
    );
  }
  async discoverChromeProfiles() {
    const e = await this.getChromePath();
    return e ? await this.readChromiumProfiles(e, "chrome") : [];
  }
  async discoverArcProfiles() {
    const e = this.getArcPath();
    return e ? await this.readChromiumProfiles(e, "arc") : [];
  }
  async discoverDiaProfiles() {
    const e = this.getDiaPath();
    return e ? await this.readChromiumProfiles(e, "dia") : [];
  }
  async discoverBraveProfiles() {
    const e = this.getBravePath();
    return e ? await this.readChromiumProfiles(e, "brave") : [];
  }
  async discoverCometProfiles() {
    const e = this.getCometPath();
    return e ? await this.readChromiumProfiles(e, "comet") : [];
  }
  async discoverEdgeProfiles() {
    const e = this.getEdgePath();
    return e ? await this.readChromiumProfiles(e, "edge") : [];
  }
  async discoverSafariProfiles() {
    if (!m.isMac) return [];
    const e = [],
      t = g.join(
        T.homedir(),
        "Library",
        "Containers",
        "com.apple.Safari",
        "Data",
        "Library",
        "Safari",
      ),
      r = await this.readSafariProfileRows(g.join(t, "SafariTabs.db")),
      o = g.join(T.homedir(), "Library/Safari");
    (await this.isSafariImportableProfilePath(o)) &&
      e.push({
        name: this.getSafariDefaultProfileName(r),
        path: o,
        lastModified: (await O.stat(o)).mtime,
        browser: "safari",
      });
    const i = g.join(t, "Profiles");
    for (const n of r) {
      if (n.external_uuid === "DefaultProfile") continue;
      const c = g.join(i, n.external_uuid);
      (await this.isSafariImportableProfilePath(c)) &&
        e.push({
          name: n.title?.trim() || "Safari Profile",
          path: c,
          lastModified: (await O.stat(c)).mtime,
          browser: "safari",
        });
    }
    return e;
  }
  async readSafariProfileRows(e) {
    if (!(await m.fileExists(e))) return [];
    let t = null,
      r;
    try {
      return (
        (r = await m.copySourceDatabase(e)),
        (t = new j(r, { readonly: !0, fileMustExist: !0 })),
        t
          .prepare(
            `SELECT title, external_uuid
           FROM bookmarks
           WHERE type = 1
             AND subtype = 2
             AND deleted = 0
             AND external_uuid IS NOT NULL
             AND external_uuid <> ''
           ORDER BY order_index, title`,
          )
          .all()
      );
    } catch {
      return [];
    } finally {
      (t?.close(), r && (await m.removeSourceDatabase(r)));
    }
  }
  getSafariDefaultProfileName(e) {
    return (
      e.find((r) => r.external_uuid === "DefaultProfile")?.title?.trim() ||
      "Personal"
    );
  }
  async isSafariImportableProfilePath(e) {
    return (await m.fileExists(e))
      ? (await m.fileExists(g.join(e, "History.db"))) ||
          (await m.fileExists(g.join(e, "Bookmarks.plist"))) ||
          (await m.fileExists(g.join(e, "TopSites.plist")))
      : !1;
  }
  async discoverFirefoxProfiles() {
    const e = this.getFirefoxProfilesRoot();
    return e
      ? await this.readFirefoxProfilesFromProfilesDirectory(e, "firefox")
      : [];
  }
  async readFirefoxProfilesFromProfilesDirectory(e, t) {
    const r = g.join(e, "Profiles");
    if (!(await m.fileExists(r))) return [];
    try {
      const o = [],
        i = await this.readFirefoxProfileGroupNames(e),
        n = await this.readFirefoxProfilesIniNames(e),
        c = (await O.readdir(r, { withFileTypes: !0 }))
          .filter((a) => a.isDirectory())
          .sort((a, l) => a.name.localeCompare(l.name));
      for (const a of c) {
        const l = g.join(r, a.name);
        (await this.isRealFirefoxProfile(l)) &&
          o.push({
            name:
              i.get(g.normalize(l)) ??
              n.get(g.normalize(l)) ??
              this.inferFirefoxProfileName(a.name),
            path: l,
            lastModified: await this.readFirefoxLastUsed(l),
            browser: t,
          });
      }
      return o;
    } catch {
      return [];
    }
  }
  async readFirefoxLastUsed(e) {
    let t, r;
    try {
      ((t = await m.copySourceDatabase(g.join(e, "places.sqlite"))),
        (r = new j(t, { readonly: !0, fileMustExist: !0 })));
      const o = d.parse(
        d.object({ lastUsed: d.nullable(d.number()) }),
        r
          .prepare("SELECT MAX(last_visit_date) AS lastUsed FROM moz_places")
          .get(),
      );
      if (o.lastUsed !== null) return new Date(o.lastUsed / 1e3);
    } catch {
    } finally {
      (r?.close(), t && (await m.removeSourceDatabase(t)));
    }
    return (await O.stat(e)).mtime;
  }
  async readFirefoxProfileGroupNames(e) {
    const t = new Map(),
      r = g.join(e, "Profile Groups");
    if (!(await m.fileExists(r))) return t;
    try {
      const o = (await O.readdir(r, { withFileTypes: !0 }))
        .filter((i) => i.isFile() && i.name.endsWith(".sqlite"))
        .sort((i, n) => i.name.localeCompare(n.name));
      for (const i of o) {
        const n = g.join(r, i.name);
        let c = null,
          a;
        try {
          ((a = await m.copySourceDatabase(n)),
            (c = new j(a, { readonly: !0, fileMustExist: !0 })));
          const l = c
            .prepare(
              "SELECT path, name FROM Profiles WHERE path IS NOT NULL AND name IS NOT NULL",
            )
            .all();
          for (const f of l) {
            const u = this.resolveFirefoxProfileGroupPath(e, f.path),
              p = f.name.trim();
            p.length > 0 && t.set(u, p);
          }
        } catch {
        } finally {
          (c?.close(), a && (await m.removeSourceDatabase(a)));
        }
      }
    } catch {}
    return t;
  }
  async readFirefoxProfilesIniNames(e) {
    const t = new Map(),
      r = g.join(e, "profiles.ini");
    if (!(await m.fileExists(r))) return t;
    try {
      const i = (await O.readFile(r, "utf8")).split(/\r?\n/);
      let n = {};
      const c = () => {
        const a = n.Name?.trim(),
          l = n.Path?.trim();
        if (a && l) {
          const f = this.resolveFirefoxIniProfilePath(
            e,
            l,
            n.IsRelative === "1",
          );
          t.set(f, a);
        }
        n = {};
      };
      for (const a of i) {
        if (a.startsWith("[")) {
          c();
          continue;
        }
        const l = a.indexOf("=");
        if (l > 0) {
          const f = a.slice(0, l).trim(),
            u = a.slice(l + 1).trim();
          n[f] = u;
        }
      }
      c();
    } catch {}
    return t;
  }
  resolveFirefoxProfileGroupPath(e, t) {
    const r = g.isAbsolute(t) ? t : g.join(e, t);
    return g.normalize(r);
  }
  resolveFirefoxIniProfilePath(e, t, r) {
    const o = r ? g.join(e, t) : t;
    return g.normalize(o);
  }
  async isRealFirefoxProfile(e) {
    const t = g.join(e, "times.json");
    if (!(await m.fileExists(t))) return !1;
    try {
      return JSON.parse(await O.readFile(t, "utf8")).firstUse != null;
    } catch {
      return !1;
    }
  }
  inferFirefoxProfileName(e) {
    const t = e.indexOf(".");
    return t < 0 || t === e.length - 1 ? e : e.slice(t + 1);
  }
  async discoverZenProfiles() {
    const e = this.getZenProfilesRoots(),
      t = [];
    for (const r of e)
      r &&
        t.push(
          ...(await this.readFirefoxProfilesFromProfilesDirectory(r, "zen")),
        );
    return t;
  }
  getZenProfilesRoots() {
    switch (process.platform) {
      case "win32":
        return [g.join(process.env.APPDATA || "", "zen")];
      case "darwin":
        return [
          g.join(T.homedir(), "Library/Application Support/zen"),
          g.join(T.homedir(), "Library/Application Support/zenbrowser"),
        ];
      case "linux":
        return [
          g.join(T.homedir(), ".zen"),
          g.join(T.homedir(), ".config/zen"),
          g.join(T.homedir(), ".config/zenbrowser"),
        ];
      default:
        return [];
    }
  }
  getFirefoxProfilesRoot() {
    switch (process.platform) {
      case "win32":
        return g.join(process.env.APPDATA || "", "Mozilla", "Firefox");
      case "darwin":
        return g.join(T.homedir(), "Library/Application Support/Firefox");
      case "linux":
        return g.join(T.homedir(), ".mozilla/firefox");
      default:
        return null;
    }
  }
  async getChromePath() {
    switch (process.platform) {
      case "win32": {
        const e = "C:\\TestChromeProfile";
        return process.env.NODE_ENV !== "production" && (await m.fileExists(e))
          ? e
          : g.join(
              process.env.LOCALAPPDATA || "",
              "Google",
              "Chrome",
              "User Data",
            );
      }
      case "darwin":
        return g.join(T.homedir(), "Library/Application Support/Google/Chrome");
      case "linux":
        return g.join(T.homedir(), ".config/google-chrome");
      default:
        return null;
    }
  }
  getArcPath() {
    switch (process.platform) {
      case "win32":
        return g.join(
          process.env.LOCALAPPDATA || "",
          "Packages",
          "TheBrowserCompany.Arc_ttt1ap7aakyb4",
          "LocalCache",
          "Local",
          "Arc",
          "User Data",
        );
      case "darwin":
        return g.join(T.homedir(), "Library/Application Support/Arc/User Data");
      case "linux":
        return g.join(T.homedir(), ".config/arc");
      default:
        return null;
    }
  }
  getDiaPath() {
    switch (process.platform) {
      case "win32":
        return g.join(process.env.LOCALAPPDATA || "", "Dia", "User Data");
      case "darwin":
        return g.join(T.homedir(), "Library/Application Support/Dia/User Data");
      case "linux":
        return g.join(T.homedir(), ".config/dia");
      default:
        return null;
    }
  }
  getBravePath() {
    switch (process.platform) {
      case "win32":
        return g.join(
          process.env.LOCALAPPDATA || "",
          "BraveSoftware",
          "Brave-Browser",
          "User Data",
        );
      case "darwin":
        return g.join(
          T.homedir(),
          "Library/Application Support/BraveSoftware/Brave-Browser",
        );
      case "linux":
        return g.join(T.homedir(), ".config/BraveSoftware/Brave-Browser");
      default:
        return null;
    }
  }
  getCometPath() {
    switch (process.platform) {
      case "win32":
        return g.join(
          process.env.LOCALAPPDATA || "",
          "Perplexity",
          "Comet",
          "User Data",
        );
      case "darwin":
        return g.join(T.homedir(), "Library/Application Support/Comet");
      default:
        return null;
    }
  }
  getEdgePath() {
    switch (process.platform) {
      case "win32":
        return g.join(
          process.env.LOCALAPPDATA || "",
          "Microsoft",
          "Edge",
          "User Data",
        );
      case "darwin":
        return g.join(
          T.homedir(),
          "Library/Application Support/Microsoft Edge",
        );
      case "linux":
        return g.join(T.homedir(), ".config/microsoft-edge");
      default:
        return null;
    }
  }
  async readChromiumProfiles(e, t) {
    const r = [];
    try {
      if (!(await m.fileExists(e))) return r;
      const o = g.join(e, "Local State");
      if (!(await m.fileExists(o))) return r;
      let i;
      try {
        i = JSON.parse(await O.readFile(o, "utf8"));
      } catch {
        return r;
      }
      const n = i.profile?.info_cache || {},
        c = g.join(e, "Default");
      (await m.fileExists(c)) &&
        r.push({
          name: "Default",
          path: c,
          lastModified: (await O.stat(c)).mtime,
          browser: t,
        });
      for (const [a, l] of Object.entries(n))
        if (a !== "Default") {
          if (Mt.has(l.name ?? "")) continue;
          const f = g.join(e, a);
          (await m.fileExists(f)) &&
            r.push({
              name: l.name || a,
              path: f,
              lastModified: (await O.stat(f)).mtime,
              browser: t,
            });
        }
    } catch {}
    return r;
  }
}
const Pe = G.getInstance();
class jt {
  constructor(e) {
    ((this.profile = e), (this.chromiumSource = new ke(e)));
  }
  chromiumSource;
  async getPasswords(e) {
    return this.chromiumSource.getPasswords(e);
  }
  async getBookmarks(e) {
    const t = this.profile,
      r = { imported: 0, skipped: 0, errors: [] };
    try {
      const o = _.join(t.path, "..", "..", "StorableSidebar.json");
      if (!(await m.fileExists(o))) {
        const p = `Arc StorableSidebar.json file not found at expected path: ${o}`;
        return (r.errors.push(p), { data: null, result: r });
      }
      const i = await R.readFile(o, "utf8");
      let n;
      try {
        n = JSON.parse(i);
      } catch (p) {
        const k = `Failed to parse Arc StorableSidebar.json: ${p instanceof Error ? p.message : "Invalid JSON"}`;
        return (r.errors.push(k), { data: null, result: r });
      }
      const { bookmarks: c, pinnedTabs: a } = this.convertArcSidebarData(n, t),
        l = e.bookmarks;
      let f = c;
      l && (f = this.mergeBookmarks(l, c));
      const u = a.flatMap((p) => {
        const k = m.capturePinnedTabSnapshot(p, p.pinnedId ?? "");
        return k ? [k] : [];
      });
      return (
        (r.imported = this.countBookmarks(c) + u.length),
        { data: { bookmarks: f, pinnedTabList: u }, result: r }
      );
    } catch (o) {
      const i = o instanceof Error ? o.message : "Unknown error";
      return (r.errors.push(i), { data: null, result: r });
    }
  }
  async getHistory(e) {
    return this.chromiumSource.getHistory(e);
  }
  async getTabs(e) {
    const t = this.profile,
      r = N(),
      o = { imported: 0, skipped: 0, errors: [], details: r };
    try {
      const i = await Le(t);
      return !i || i.tabs.length === 0
        ? { data: null, result: o }
        : {
            data: {
              migratedTabs: i.tabs
                .map((c) => ({
                  url: c.url,
                  title: c.title,
                  tabType: "website",
                  isPinned: c.pinned,
                  groupId: null,
                  openedByHuman: !0,
                  faviconUrl: "",
                }))
                .filter((c) =>
                  X(c.url || "")
                    ? (o.skipped++,
                      I(r, "Orbitra sign-in completion page"),
                      !1)
                    : c.url === "about:blank"
                      ? (o.skipped++, I(r, "about:blank page"), !1)
                      : c.url?.startsWith("arc://")
                        ? (o.skipped++, I(r, "arc:// URL", c.url), !1)
                        : (o.imported++, z(r, c.title || c.url || ""), !0),
                ),
            },
            result: o,
          };
    } catch (i) {
      const n = i instanceof Error ? i.message : "Unknown error";
      return (o.errors.push(n), B(r, n), { data: null, result: o });
    }
  }
  async getCookies(e) {
    return this.chromiumSource.getCookies(e);
  }
  async getExtensions(e) {
    return this.chromiumSource.getExtensions(e);
  }
  convertArcSidebarData(e, t) {
    const r = this.createEmptyBookmarksRoot(),
      o = this.getCurrentArcSidebarContainer(e);
    if (!o) return { bookmarks: r, pinnedTabs: [] };
    const i = o.items.filter((f) => typeof f == "object" && f !== null),
      n = new Map(i.map((f) => [f.id, f])),
      c = this.groupArcItemsByParentId(i);
    r.roots.bookmark_bar.children =
      this.convertCurrentArcSpacesToBookmarkFolders(o, t, n, c);
    const a = this.getFavoriteContainerIdsForProfile(
        o.topAppsContainerIDs || [],
        t,
      ),
      l = this.convertFavoriteContainersToPinnedTabs(a, n, c);
    return { bookmarks: r, pinnedTabs: l };
  }
  createEmptyBookmarksRoot() {
    return {
      checksum: this.generateChecksum(),
      roots: {
        bookmark_bar: {
          id: "1",
          guid: D.randomUUID(),
          name: "Bookmarks bar",
          type: "folder",
          children: [],
          date_added: Date.now().toString(),
          date_modified: Date.now().toString(),
          date_last_used: "0",
        },
        other: {
          id: "2",
          guid: D.randomUUID(),
          name: "Other bookmarks",
          type: "folder",
          children: [],
          date_added: Date.now().toString(),
          date_modified: Date.now().toString(),
          date_last_used: "0",
        },
        synced: {
          id: "3",
          guid: D.randomUUID(),
          name: "Mobile bookmarks",
          type: "folder",
          children: [],
          date_added: Date.now().toString(),
          date_modified: Date.now().toString(),
          date_last_used: "0",
        },
      },
      version: 1,
    };
  }
  getCurrentArcSidebarContainer(e) {
    const t = e.sidebar?.containers;
    return (
      (Array.isArray(t) &&
        t.find((r) => Array.isArray(r.spaces) && Array.isArray(r.items))) ||
      null
    );
  }
  convertCurrentArcSpacesToBookmarkFolders(e, t, r, o) {
    const i = [],
      n = _.basename(t.path);
    for (const c of e.spaces || []) {
      if (
        typeof c != "object" ||
        c === null ||
        !this.isArcSpaceForSourceProfile(c, n, t.name)
      )
        continue;
      const a = this.convertCurrentArcSpaceToBookmarkFolder(c, r, o);
      a.children && a.children.length > 0 && i.push(a);
    }
    return i;
  }
  isArcSpaceForSourceProfile(e, t, r) {
    return e.title === r
      ? !0
      : e.profile
        ? this.isArcProfileMarkerForSourceProfile(e.profile, t)
        : !1;
  }
  groupArcItemsByParentId(e) {
    const t = new Map();
    for (const r of e) {
      if (!r.parentID) continue;
      const o = t.get(r.parentID) || [];
      (o.push(r), t.set(r.parentID, o));
    }
    return t;
  }
  convertCurrentArcSpaceToBookmarkFolder(e, t, r) {
    const o = this.createBookmarkFolder(e.title || "Unnamed Space"),
      i = this.getCurrentArcPinnedContainerIds(e),
      n = new Set();
    for (const c of i) {
      const a = this.getArcContainerChildren(c, t, r);
      for (const l of a) {
        const f = this.convertCurrentArcItemToBookmark(l, t, n, r);
        f && o.children.push(f);
      }
    }
    return o;
  }
  getCurrentArcPinnedContainerIds(e) {
    const t = this.getContainerIdsAfterMarker(
      e.newContainerIDs || [],
      "pinned",
    );
    if (t.length > 0) return t;
    const r = e.containerIDs || [],
      o = this.getContainerIdsAfterMarker(r, "pinned");
    return o.length > 0
      ? o
      : r.filter((i) => i !== "pinned" && i !== "unpinned");
  }
  getContainerIdsAfterMarker(e, t) {
    const r = [];
    for (let o = 0; o < e.length - 1; o++) {
      const i = e[o],
        n = e[o + 1];
      this.isArcContainerMarker(i, t) && typeof n == "string" && r.push(n);
    }
    return r;
  }
  isArcContainerMarker(e, t) {
    return typeof e == "string" ? e === t : this.hasObjectKey(e, t);
  }
  getFavoriteContainerIdsForProfile(e, t) {
    const r = _.basename(t.path),
      o = [];
    for (let i = 0; i < e.length - 1; i++) {
      const n = e[i],
        c = e[i + 1];
      this.isArcProfileMarkerForSourceProfile(n, r) &&
        typeof c == "string" &&
        o.push(c);
    }
    return o;
  }
  isArcProfileMarkerForSourceProfile(e, t) {
    if (typeof e == "string") return !1;
    if (t === "Default" && this.hasObjectKey(e, "default")) return !0;
    const r = this.getObjectProperty(e, "custom");
    if (typeof r != "object") return !1;
    const o = this.getObjectProperty(r, "_0");
    return typeof o != "object"
      ? !1
      : this.getObjectProperty(o, "directoryBasename") === t;
  }
  hasObjectKey(e, t) {
    return e !== void 0 && Object.prototype.hasOwnProperty.call(e, t);
  }
  getObjectProperty(e, t) {
    return !e || !Object.prototype.hasOwnProperty.call(e, t) ? void 0 : e[t];
  }
  convertFavoriteContainersToPinnedTabs(e, t, r) {
    const o = [],
      i = new Set();
    for (const n of e) {
      const c = this.getArcContainerChildren(n, t, r);
      for (const a of c)
        o.push(...this.convertCurrentArcItemToPinnedTabs(a, t, i, r));
    }
    return o;
  }
  getArcContainerChildren(e, t, r) {
    const o = t.get(e);
    return o ? this.getArcItemChildren(o, t, r) : r.get(e) || [];
  }
  convertCurrentArcItemToPinnedTabs(e, t, r, o) {
    if (r.has(e.id)) return [];
    r.add(e.id);
    const i = e.data?.tab;
    if (i?.savedURL && !this.isArcInternalUrl(i.savedURL))
      return [this.createPinnedTabState(i.savedURL, this.getArcItemTitle(e))];
    if (!e.data?.list) return [];
    const n = [];
    for (const c of this.getArcItemChildren(e, t, o))
      n.push(...this.convertCurrentArcItemToPinnedTabs(c, t, r, o));
    return n;
  }
  createPinnedTabState(e, t) {
    const r = Date.now();
    return {
      id: D.randomUUID(),
      profileId: "",
      title: t,
      url: e,
      tabType: "website",
      faviconUrl: "",
      isAIControlledTab: !1,
      isTakeover: !1,
      isBrowserAgentControlledTab: null,
      isWaitingForCaptcha: void 0,
      captchaExpiresAt: null,
      canGoBack: !1,
      canGoForward: !1,
      isPinned: !0,
      pinnedId: D.randomUUID(),
      groupId: null,
      openedAt: r,
      lastShownAt: 0,
      isLoading: !1,
      isFailedToLoad: !1,
      isFailedToLoadReason: "",
      visitType: void 0,
      isAudioMuted: !1,
      hasAudioActivity: !1,
      wasInitiatedByAgent: !1,
    };
  }
  convertCurrentArcItemToBookmark(e, t, r, o) {
    if (r.has(e.id)) return null;
    r.add(e.id);
    const i = e.data?.tab;
    if (i?.savedURL && !this.isArcInternalUrl(i.savedURL))
      return {
        id: this.generateBookmarkId(),
        guid: D.randomUUID(),
        name: this.getArcItemTitle(e),
        type: "url",
        url: i.savedURL,
        date_added: Date.now().toString(),
        date_modified: Date.now().toString(),
        date_last_used: "0",
      };
    if (e.data?.list) {
      const n = this.createBookmarkFolder(e.title || "Unnamed Folder");
      for (const c of this.getArcItemChildren(e, t, o)) {
        const a = this.convertCurrentArcItemToBookmark(c, t, r, o);
        a && n.children.push(a);
      }
      if (n.children && n.children.length > 0) return n;
    }
    return null;
  }
  getArcItemTitle(e) {
    const t = e.data?.tab;
    return (
      e.title?.trim() || t?.savedTitle?.trim() || t?.savedURL || "Untitled"
    );
  }
  getArcItemChildren(e, t, r) {
    const o = [],
      i = new Set();
    for (const c of e.childrenIds || []) {
      const a = t.get(c);
      a && (o.push(a), i.add(a.id));
    }
    const n = r?.get(e.id) || Array.from(t.values());
    for (const c of n) c.parentID !== e.id || i.has(c.id) || o.push(c);
    return o;
  }
  createBookmarkFolder(e) {
    return {
      id: this.generateBookmarkId(),
      guid: D.randomUUID(),
      name: e,
      type: "folder",
      children: [],
      date_added: Date.now().toString(),
      date_modified: Date.now().toString(),
      date_last_used: "0",
    };
  }
  isArcInternalUrl(e) {
    return (
      e.startsWith("arc://") ||
      e.includes("thebrowser.company") ||
      e.includes("arc.net") ||
      e.startsWith("chrome://") ||
      e.startsWith("about:")
    );
  }
  mergeBookmarks(e, t) {
    return {
      checksum: this.generateChecksum(),
      roots: {
        bookmark_bar: this.mergeBookmarkFolders(
          e.roots.bookmark_bar,
          t.roots.bookmark_bar,
        ),
        other: this.mergeBookmarkFolders(e.roots.other, t.roots.other),
        synced: this.mergeBookmarkFolders(e.roots.synced, t.roots.synced),
      },
      version: t.version,
    };
  }
  mergeBookmarkFolders(e, t) {
    const r = new Set(this.extractUrls(e)),
      o = [...(e.children || [])];
    return (
      t.children?.forEach((i) => {
        if (i.type === "url" && i.url)
          r.has(i.url) ||
            o.push({
              ...i,
              id: this.generateBookmarkId(),
              guid: D.randomUUID(),
              date_added: Date.now().toString(),
              date_modified: Date.now().toString(),
            });
        else if (i.type === "folder") {
          const n = e.children?.find(
            (c) => c.type === "folder" && c.name === i.name,
          );
          if (n) {
            const c = this.mergeBookmarkFolders(n, i),
              a = o.findIndex((l) => l.id === n.id);
            a !== -1 && (o[a] = c);
          } else
            o.push({
              ...i,
              id: this.generateBookmarkId(),
              guid: D.randomUUID(),
              date_added: Date.now().toString(),
              date_modified: Date.now().toString(),
            });
        }
      }),
      { ...e, children: o, date_modified: Date.now().toString() }
    );
  }
  extractUrls(e) {
    const t = [];
    return (
      e.type === "url" && e.url && t.push(e.url),
      e.children &&
        e.children.forEach((r) => {
          t.push(...this.extractUrls(r));
        }),
      t
    );
  }
  countBookmarks(e) {
    let t = 0;
    return (
      (t += this.countBookmarksInFolder(e.roots.bookmark_bar)),
      (t += this.countBookmarksInFolder(e.roots.other)),
      (t += this.countBookmarksInFolder(e.roots.synced)),
      t
    );
  }
  countBookmarksInFolder(e) {
    let t = 0;
    return (
      e.type === "url" && (t = 1),
      e.children &&
        e.children.forEach((r) => {
          t += this.countBookmarksInFolder(r);
        }),
      t
    );
  }
  generateBookmarkId() {
    return D.randomUUID();
  }
  generateChecksum() {
    return D.randomUUID();
  }
}
class Nt {
  constructor(e) {
    this.profile = e;
  }
  generateChecksum() {
    return Date.now().toString();
  }
  generateBookmarkId() {
    return D.randomUUID();
  }
  createPinnedTabState(e, t, r, o) {
    return {
      id: D.randomUUID(),
      profileId: "",
      title: t,
      url: e,
      tabType: r,
      faviconUrl: "",
      isAIControlledTab: !1,
      isTakeover: !1,
      isBrowserAgentControlledTab: null,
      isWaitingForCaptcha: void 0,
      captchaExpiresAt: null,
      canGoBack: !1,
      canGoForward: !1,
      isPinned: !0,
      pinnedId: D.randomUUID(),
      groupId: null,
      openedAt: o,
      lastShownAt: 0,
      isLoading: !1,
      isFailedToLoad: !1,
      isFailedToLoadReason: "",
      visitType: void 0,
      isAudioMuted: !1,
      hasAudioActivity: !1,
      wasInitiatedByAgent: !1,
    };
  }
  async getPasswords(e) {
    const t = this.profile,
      r = N(),
      o = { imported: 0, skipped: 0, errors: [], details: r };
    try {
      const i = _.join(t.path, "logins.json"),
        n = _.join(t.path, "key4.db");
      if (!(await m.fileExists(i)) || !(await m.fileExists(n)))
        return (I(r, "password files not found"), { data: null, result: o });
      const { getAllFirefoxPasswords: c } = await Promise.resolve().then(() =>
        require("./chunks/firefoxPasswordUtil-DDTJcVmf.js"),
      );
      let a;
      try {
        a = await c(t);
      } catch (l) {
        if (
          (l instanceof Error ? l.message : String(l)).includes(
            "FIREFOX_PRIMARY_PASSWORD_REQUIRED",
          )
        )
          return (
            o.errors.push(
              "Firefox Primary Password required. Password migration is not yet supported for Firefox profiles with Primary Password protection.",
            ),
            I(r, "Firefox Primary Password required"),
            (o.skipped = 1),
            { data: null, result: o }
          );
        throw l;
      }
      return { data: a, result: o };
    } catch (i) {
      const n = i instanceof Error ? i.message : "Unknown error";
      return (o.errors.push(n), B(r, n), { data: null, result: o });
    }
  }
  async getBookmarks(e) {
    const t = this.profile,
      r = { imported: 0, skipped: 0, errors: [] };
    try {
      const o = _.join(t.path, "places.sqlite");
      if (!(await m.fileExists(o))) return { data: null, result: r };
      const { readFirefoxBookmarks: i } = await Promise.resolve().then(() =>
          require("./chunks/firefoxUtils-Ccmh4Zu-.js"),
        ),
        n = await i(o);
      if (!n) return { data: null, result: r };
      const c = (u) =>
          (u.children || []).reduce(
            (p, k) => p + (k.type === "url" ? 1 : c(k)),
            0,
          ),
        a = e.bookmarks,
        l = {
          ...a,
          checksum: this.generateChecksum(),
          roots: {
            bookmark_bar: this.mergeBookmarkFolders(
              a.roots.bookmark_bar,
              n.roots.bookmark_bar,
            ),
            other: this.mergeBookmarkFolders(a.roots.other, n.roots.other),
            synced: this.mergeBookmarkFolders(a.roots.synced, n.roots.synced),
          },
        },
        f = (u) => Object.values(u.roots).reduce((p, k) => p + c(k), 0);
      return (
        (r.imported = f(l) - f(a)),
        (r.skipped = f(n) - r.imported),
        { data: { bookmarks: l }, result: r }
      );
    } catch (o) {
      const i = o instanceof Error ? o.message : "Unknown error";
      return (r.errors.push(i), { data: null, result: r });
    }
  }
  async getHistory(e) {
    const t = this.profile,
      r = { imported: 0, skipped: 0, errors: [] };
    try {
      const o = _.join(t.path, "places.sqlite");
      if (!(await m.fileExists(o))) return { data: null, result: r };
      const { readFirefoxHistory: i, convertFirefoxTimestamp: n } =
          await Promise.resolve().then(() =>
            require("./chunks/firefoxUtils-Ccmh4Zu-.js"),
          ),
        c = await i(o);
      if (!c) return { data: null, result: r };
      const a = [];
      for (const u of c.urls) {
        const p = n(u.last_visit_time);
        p !== null &&
          a.push({
            url: u.url,
            title: u.title || "",
            visit_count: u.visit_count || 1,
            last_visit_time: p,
            frecency: typeof u.frecency == "number" ? u.frecency : void 0,
          });
      }
      const l = a.map((u, p) => ({
          id: p + 1,
          url: u.url,
          title: u.title,
          visit_count: u.visit_count,
          typed_count: 0,
          last_visit_time: u.last_visit_time,
          frecency: u.frecency,
        })),
        f = l.map((u, p) => ({
          id: p + 1,
          url: u.id,
          visit_time: u.last_visit_time,
          transition: 1,
        }));
      return (
        (r.skipped = c.urls.length - l.length),
        { data: { urls: l, visits: f, merge: "nearby" }, result: r }
      );
    } catch (o) {
      const i = o instanceof Error ? o.message : "Unknown error";
      return (r.errors.push(i), { data: null, result: r });
    }
  }
  async getCookies(e) {
    const t = this.profile,
      r = N(),
      o = { imported: 0, skipped: 0, errors: [], details: r };
    try {
      const i = _.join(t.path, "cookies.sqlite"),
        n = [];
      if (await m.fileExists(i)) {
        const { readFirefoxCookies: f } = await Promise.resolve().then(() =>
            require("./chunks/firefoxUtils-Ccmh4Zu-.js"),
          ),
          u = await f(i);
        for (const p of u) {
          const k = p.domain?.startsWith(".")
            ? `http${p.secure ? "s" : ""}://${p.domain.substring(1)}${p.path || "/"}`
            : `http${p.secure ? "s" : ""}://${p.domain}${p.path || "/"}`;
          n.push({
            url: k,
            name: p.name,
            value: p.value,
            domain: p.domain,
            path: p.path || "/",
            secure: !!p.secure,
            httpOnly: !!p.httpOnly,
            expirationDate: p.expiry ? Number(p.expiry) : void 0,
          });
        }
      } else I(r, "cookies.sqlite not found");
      {
        const { findFirefoxSessionFile: f, readFirefoxSessionCookies: u } =
            await Promise.resolve().then(() =>
              require("./chunks/firefoxUtils-Ccmh4Zu-.js"),
            ),
          p = await f(t.path);
        if (p) {
          const k = await u(p);
          for (const w of k) {
            const S = w.domain?.startsWith(".")
              ? `http${w.secure ? "s" : ""}://${w.domain.substring(1)}${w.path || "/"}`
              : `http${w.secure ? "s" : ""}://${w.domain}${w.path || "/"}`;
            n.push({
              url: S,
              name: w.name,
              value: w.value,
              domain: w.domain,
              path: w.path || "/",
              secure: !!w.secure,
              httpOnly: !!w.httpOnly,
            });
          }
        }
      }
      const c = new Map(),
        a = [];
      for (const f of n) {
        const u = `${f.name}|${f.domain || ""}|${f.path || "/"}`,
          p = c.get(u);
        if (p == null) c.set(u, a.push(f) - 1);
        else {
          const k = a[p];
          !!f.expirationDate && !k.expirationDate && (a[p] = f);
        }
      }
      const l = [];
      for (const f of a)
        try {
          if (Ae.shouldIgnoreDomain(f.domain || "")) {
            (o.skipped++,
              I(r, "filtered domain (Google, etc.)", f.domain || ""));
            continue;
          }
          const u = { ...f };
          (u.name?.startsWith("__Host-") &&
            ((u.secure = !0), (u.path = "/"), delete u.domain),
            u.domain?.startsWith(".") || delete u.domain,
            l.push(u),
            z(r, `${f.name}@${f.domain}`));
        } catch (u) {
          const p = u instanceof Error ? u.message : String(u);
          (o.errors.push(p),
            o.skipped++,
            B(r, "cookie set failed", `${f.name}@${f.domain}`));
        }
      return { data: l, result: o };
    } catch (i) {
      const n = i instanceof Error ? i.message : "Unknown error";
      return (o.errors.push(n), B(r, n), { data: null, result: o });
    }
  }
  async getTabs(e) {
    const t = this.profile,
      r = N(),
      o = { imported: 0, skipped: 0, errors: [], details: r };
    try {
      const { findFirefoxSessionFile: i, readFirefoxTabsFromSession: n } =
          await Promise.resolve().then(() =>
            require("./chunks/firefoxUtils-Ccmh4Zu-.js"),
          ),
        c = await i(t.path);
      let a = null;
      if ((c && (a = await n(c)), !a)) return { data: null, result: o };
      const l = Date.now(),
        f = new Map(a.groups.map((v) => [v.firefoxId, v])),
        u = [],
        p = new Map(),
        k = (v) => {
          const U = p.get(v);
          if (U) return U;
          const L = f.get(v),
            J = D.randomUUID();
          return (
            p.set(v, J),
            u.push({
              id: J,
              collapsed: L?.collapsed ?? !1,
              title: L?.title?.trim() || void 0,
              createdAt: l,
              updatedAt: l,
            }),
            J
          );
        },
        w = a.tabs.filter((v) =>
          X(v.url || "")
            ? (o.skipped++, I(r, "Orbitra sign-in completion page"), !1)
            : v.url?.startsWith("about:")
              ? (o.skipped++, I(r, "about: URL", v.url), !1)
              : (o.imported++, z(r, v.title || v.url), !0),
        ),
        S = t.browser === "zen",
        h = w
          .filter((v) => !S || !v.pinned || v.zenEssential)
          .map((v) => {
            const U = S ? !!v.zenEssential : !!v.pinned;
            return {
              url: v.url,
              title: v.title,
              tabType: "website",
              isPinned: U,
              groupId: !U && v.groupId ? k(v.groupId) : null,
              openedByHuman: !0,
              faviconUrl: "",
            };
          }),
        y = h.filter((v) => !v.isPinned),
        P = h.filter((v) => v.isPinned),
        b = { bookmarks: e.bookmarks },
        C = P.flatMap((v) => {
          const U = this.createPinnedTabState(v.url, v.title, v.tabType, l),
            L = m.capturePinnedTabSnapshot(U, U.pinnedId ?? "");
          return L ? [L] : [];
        }),
        E = S ? a.zenPinBookmarks : [],
        A =
          E.length > 0
            ? this.appendBookmarksToBookmarkBar(b.bookmarks, E)
            : b.bookmarks;
      return {
        data: {
          evidenceTabs: w.map(({ url: v, title: U, lastActiveAt: L }) => ({
            url: v,
            title: U,
            lastActiveAt: L,
          })),
          migratedTabs: y,
          pinnedTabList: C,
          tabGroups: u,
          ...(E.length > 0 ? { bookmarks: A } : {}),
        },
        result: o,
      };
    } catch (i) {
      const n = i instanceof Error ? i.message : "Unknown error";
      return (o.errors.push(n), B(r, n), { data: null, result: o });
    }
  }
  async getExtensions() {
    return { data: [], result: m.emptyResult() };
  }
  appendBookmarksToBookmarkBar(e, t) {
    return {
      checksum: this.generateChecksum(),
      roots: {
        ...e.roots,
        bookmark_bar: this.mergeBookmarkFolders(e.roots.bookmark_bar, {
          ...e.roots.bookmark_bar,
          children: t,
        }),
      },
      version: e.version,
    };
  }
  mergeBookmarkFolders(e, t) {
    const r = new Set(this.extractUrls(e)),
      o = [...(e.children || [])];
    for (const i of t.children || []) {
      if (i.type === "url" && i.url) {
        r.has(i.url) || (o.push(this.rekeyBookmark(i)), r.add(i.url));
        continue;
      }
      if (i.type !== "folder") continue;
      const n = o.find((c) => c.type === "folder" && c.name === i.name);
      if (n) {
        const c = this.mergeBookmarkFolders(n, i),
          a = o.findIndex((l) => l.id === n.id);
        a !== -1 && (o[a] = c);
      } else o.push(this.rekeyBookmark(i));
    }
    return { ...e, children: o, date_modified: Date.now().toString() };
  }
  rekeyBookmark(e) {
    return {
      ...e,
      id: this.generateBookmarkId(),
      guid: D.randomUUID(),
      children: e.children?.map((t) => this.rekeyBookmark(t)),
      date_added: Date.now().toString(),
      date_modified: Date.now().toString(),
    };
  }
  extractUrls(e) {
    const t = [];
    e.type === "url" && e.url && t.push(e.url);
    for (const r of e.children || []) t.push(...this.extractUrls(r));
    return t;
  }
}
const Wt = Be.promisify(Fe.execFile);
function ee(s, e = "") {
  const t = Array.isArray(s) ? s[0] : s;
  return typeof t == "string" ? t : (t?.["#text"] ?? e);
}
async function $t(s) {
  try {
    const e =
        s.split(`
`)[0] || "",
      t = (e.match(/,/g) || []).length,
      o = (e.match(/;/g) || []).length > t ? ";" : ",",
      i = it.parse(s, {
        columns: !0,
        skip_empty_lines: !0,
        trim: !0,
        delimiter: o,
      });
    if (i.length === 0)
      return {
        passwords: [],
        skippedCount: 0,
        errors: ["CSV file appears to be empty or malformed"],
      };
    const n = Object.keys(i[0]);
    if (
      !n.some((u) =>
        [
          "Title",
          "URL",
          "Username",
          "Password",
          "title",
          "url",
          "username",
          "password",
        ].includes(u),
      )
    )
      return {
        passwords: [],
        skippedCount: 0,
        errors: [
          `CSV format not recognized. Expected columns like Title, URL, Username, Password. Found: ${n.join(", ")}`,
        ],
      };
    let a = 0;
    const l = [],
      f = [];
    for (const u of i)
      try {
        const p =
            u.URL ||
            u.Website ||
            u.url ||
            u.website ||
            u.URLString ||
            u["Web Site"] ||
            u.Site ||
            "",
          k =
            u.Username ||
            u["User Name"] ||
            u.username ||
            u["user name"] ||
            u.Login ||
            u.login ||
            u.Email ||
            u.email ||
            "",
          w = u.Password || u.password || u.Pass || u.pass || "";
        if (!p) {
          a++;
          continue;
        }
        const S = p.startsWith("http") ? p : `https://${p}`;
        if (!k || !w) {
          a++;
          continue;
        }
        f.push({ server: S, username: k, password: w });
      } catch (p) {
        (l.push(
          `Failed to import entry: ${p instanceof Error ? p.message : "Unknown error"}`,
        ),
          a++);
      }
    return {
      passwords: f.map((u) => ({
        originUrl: u.server,
        username: u.username,
        password: u.password,
      })),
      skippedCount: a,
      errors: l,
    };
  } catch (e) {
    return {
      passwords: [],
      skippedCount: 0,
      errors: [
        `CSV parsing failed: ${e instanceof Error ? e.message : "Unknown error"}`,
      ],
    };
  }
}
async function Ht(s, e, t) {
  try {
    let r;
    if ((e === "xml" ? (r = He(s)) : (r = await qt(s)), !r || r.length === 0))
      return { success: !1, importCount: 0 };
    const o = Ge(r, e);
    let i = o;
    t && (i = Ze(t, o));
    const n = Y(i) - (t ? Y(t) : 0);
    return { success: Y(o) > 0, importCount: n, bookmarks: i };
  } catch {
    return { success: !1, importCount: 0 };
  }
}
async function zt(s, e) {
  try {
    if (!(await m.fileExists(s))) return { success: !1, importCount: 0 };
    let t;
    try {
      t = (
        await Wt("plutil", ["-convert", "xml1", "-o", "-", s], {
          encoding: "utf-8",
          maxBuffer: 50 * 1024 * 1024,
        })
      ).stdout;
    } catch {
      return { success: !1, importCount: 0 };
    }
    const r = He(t);
    if (!r || r.length === 0) return { success: !1, importCount: 0 };
    const o = Ge(r, "xml");
    let i = o;
    e && (i = Ze(e, o));
    const n = Y(i) - (e ? Y(e) : 0);
    return { success: Y(o) > 0, importCount: n, bookmarks: i };
  } catch {
    return { success: !1, importCount: 0 };
  }
}
function $e(s) {
  const r = new nt.XMLParser({
    ignoreAttributes: !1,
    attributeNamePrefix: "@_",
    textNodeName: "#text",
    parseAttributeValue: !1,
    parseTagValue: !1,
    trimValues: !0,
    preserveOrder: !0,
  })
    .parse(s)
    .find((i) => i.plist);
  if (!r) throw new Error("No plist element found in Safari bookmark XML");
  const o = r.plist?.find((i) => i.dict);
  if (!o?.dict) throw new Error("No root dict found in Safari plist");
  return pe(o.dict);
}
function He(s) {
  const e = $e(s);
  if (!e.Children || !Array.isArray(e.Children)) return [];
  const t = [];
  for (const r of e.Children) {
    const o = ze(r);
    o && t.push(o);
  }
  return t;
}
function pe(s) {
  const e = [];
  let t = null;
  for (const r of s)
    if (r.key !== void 0) t = ee(r.key);
    else if (t !== null) {
      const o = Gt(r);
      (e.push([t, o]), (t = null));
    }
  return Object.fromEntries(e);
}
function Gt(s) {
  return s.string !== void 0
    ? ee(s.string)
    : s.array !== void 0
      ? s.array.flatMap((e) => (e.dict ? [pe(e.dict)] : []))
      : s.dict !== void 0
        ? pe(s.dict)
        : s.true !== void 0
          ? !0
          : s.false !== void 0
            ? !1
            : s.integer !== void 0
              ? parseInt(ee(s.integer, "0"), 10)
              : s.real !== void 0
                ? parseFloat(ee(s.real, "0"))
                : null;
}
function ze(s) {
  if (typeof s != "object" || s === null || Array.isArray(s)) return null;
  const e = s.WebBookmarkType;
  if (!e || e === "WebBookmarkTypeProxy") return null;
  let t = typeof s.Title == "string" ? s.Title : "";
  const r = s.URIDictionary;
  (!t &&
    r &&
    typeof r == "object" &&
    !Array.isArray(r) &&
    typeof r.title == "string" &&
    (t = r.title),
    t || (t = "Untitled"));
  const o = {
    Title: t,
    WebBookmarkType: e,
    WebBookmarkUUID:
      typeof s.WebBookmarkUUID == "string" && s.WebBookmarkUUID
        ? s.WebBookmarkUUID
        : x.randomUUID(),
  };
  if (
    (e === "WebBookmarkTypeLeaf" &&
      typeof s.URLString == "string" &&
      (o.URLString = s.URLString),
    e === "WebBookmarkTypeList" && Array.isArray(s.Children))
  ) {
    o.Children = [];
    for (const i of s.Children) {
      const n = ze(i);
      n && o.Children.push(n);
    }
  }
  return o;
}
async function qt(s) {
  const r = (await import("cheerio")).load(s, { xmlMode: !1 })("DL").first();
  if (!r.length) throw new Error("No DL element found in HTML bookmark file");
  return te(r);
}
function te(s) {
  const e = [],
    t = s.children();
  for (let r = 0; r < t.length; r++) {
    const o = t.eq(r),
      i = o.prop("tagName")?.toLowerCase();
    if (i !== "p")
      if (i === "dt") {
        const n = o.children("H3").first(),
          c = o.children("A").first();
        if (n.length) {
          const a = n.text() || "Untitled Folder",
            l = t.eq(r + 1),
            f = { title: a, type: "folder", children: [] },
            u = o.children("DL").first();
          (u.length
            ? (f.children = te(u))
            : l.length &&
              l.prop("tagName")?.toLowerCase() === "dl" &&
              ((f.children = te(l)), r++),
            e.push(f));
        } else if (c.length) {
          const a = c.attr("HREF") || c.attr("href") || "",
            l = c.text() || "Untitled";
          a && e.push({ title: l, url: a, type: "url" });
        }
      } else i === "dl" && e.push(...te(o));
  }
  return e;
}
function Ge(s, e) {
  const t = {
    checksum: "",
    roots: {
      bookmark_bar: {
        id: "1",
        guid: x.randomUUID(),
        name: "Bookmarks Bar",
        type: "folder",
        children: [],
        date_added: Date.now().toString(),
        date_modified: Date.now().toString(),
        date_last_used: "0",
      },
      other: {
        id: "2",
        guid: x.randomUUID(),
        name: "Other Bookmarks",
        type: "folder",
        children: [],
        date_added: Date.now().toString(),
        date_modified: Date.now().toString(),
        date_last_used: "0",
      },
      synced: {
        id: "3",
        guid: x.randomUUID(),
        name: "Mobile Bookmarks",
        type: "folder",
        children: [],
        date_added: Date.now().toString(),
        date_modified: Date.now().toString(),
        date_last_used: "0",
      },
    },
    version: 1,
  };
  return (
    (t.roots.bookmark_bar.children = e === "xml" ? Yt(s) : s.map(qe)),
    (t.checksum = Ye()),
    t
  );
}
function Yt(s) {
  const e = [];
  for (const t of s) {
    if (t.Title === "BookmarksBar") {
      e.push(...(t.Children?.map(me) ?? []));
      continue;
    }
    const r = t.Children ?? [];
    Zt(t, r) || e.push(me({ ...t, Title: Jt(t.Title) }));
  }
  return e;
}
function Zt(s, e) {
  return (
    s.WebBookmarkType === "WebBookmarkTypeList" &&
    e.length === 0 &&
    (s.Title === "BookmarksMenu" || s.Title === "com.apple.ReadingList")
  );
}
function Jt(s) {
  return s === "BookmarksMenu"
    ? "Bookmarks Menu"
    : s === "com.apple.ReadingList"
      ? "Reading List"
      : s;
}
function me(s) {
  return s.WebBookmarkType === "WebBookmarkTypeLeaf"
    ? {
        id: Z(),
        guid: x.randomUUID(),
        name: s.Title,
        type: "url",
        url: s.URLString || "",
        date_added: Date.now().toString(),
        date_modified: Date.now().toString(),
        date_last_used: "0",
      }
    : {
        id: Z(),
        guid: x.randomUUID(),
        name: s.Title,
        type: "folder",
        children: s.Children?.map(me) || [],
        date_added: Date.now().toString(),
        date_modified: Date.now().toString(),
        date_last_used: "0",
      };
}
function qe(s) {
  return s.type === "url"
    ? {
        id: Z(),
        guid: x.randomUUID(),
        name: s.title,
        type: "url",
        url: s.url || "",
        date_added: Date.now().toString(),
        date_modified: Date.now().toString(),
        date_last_used: "0",
      }
    : {
        id: Z(),
        guid: x.randomUUID(),
        name: s.title,
        type: "folder",
        children: s.children?.map(qe) || [],
        date_added: Date.now().toString(),
        date_modified: Date.now().toString(),
        date_last_used: "0",
      };
}
function Z() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}
function Ye() {
  return x.randomUUID();
}
function Y(s) {
  let e = 0;
  return (
    (e += re(s.roots.bookmark_bar)),
    (e += re(s.roots.other)),
    (e += re(s.roots.synced)),
    e
  );
}
function re(s) {
  let e = 0;
  return (
    s.type === "url" && (e = 1),
    s.children &&
      s.children.forEach((t) => {
        e += re(t);
      }),
    e
  );
}
function Ze(s, e) {
  return {
    checksum: Ye(),
    roots: {
      bookmark_bar: oe(s.roots.bookmark_bar, e.roots.bookmark_bar),
      other: oe(s.roots.other, e.roots.other),
      synced: oe(s.roots.synced, e.roots.synced),
    },
    version: e.version,
  };
}
function oe(s, e) {
  const t = new Set(Je(s)),
    r = [...(s.children || [])];
  return (
    e.children?.forEach((o) => {
      try {
        if (o.type === "url" && o.url)
          t.has(o.url) ||
            r.push({
              ...o,
              id: Z(),
              guid: x.randomUUID(),
              date_added: Date.now().toString(),
              date_modified: Date.now().toString(),
            });
        else if (o.type === "folder") {
          const i = s.children?.find(
            (n) => n.type === "folder" && n.name === o.name,
          );
          if (i) {
            const n = oe(i, o),
              c = r.findIndex((a) => a.id === i.id);
            c !== -1 && (r[c] = n);
          } else
            r.push({
              ...o,
              id: Z(),
              guid: x.randomUUID(),
              date_added: Date.now().toString(),
              date_modified: Date.now().toString(),
            });
        }
      } catch {}
    }),
    { ...s, children: r, date_modified: Date.now().toString() }
  );
}
function Je(s) {
  const e = [];
  return (
    s.type === "url" && s.url && e.push(s.url),
    s.children &&
      s.children.forEach((t) => {
        e.push(...Je(t));
      }),
    e
  );
}
async function Vt(s) {
  try {
    if (!(await m.fileExists(s))) return [];
    const e = (await import("better-sqlite3")).default,
      t = await m.copySourceDatabase(s),
      r = new e(t, { readonly: !0 });
    try {
      const i = r
        .prepare(
          `
        SELECT
          hi.url,
          hi.visit_count,
          hv.visit_time,
          hv.title
        FROM history_items hi
        LEFT JOIN history_visits hv ON hi.id = hv.history_item
        WHERE hi.url IS NOT NULL AND hi.url != ''
        ORDER BY hv.visit_time DESC
      `,
        )
        .all();
      return i.length === 0 ? [] : i;
    } finally {
      r.close();
      try {
        await m.removeSourceDatabase(t);
      } catch {}
    }
  } catch {
    return [];
  }
}
async function Kt(s) {
  const e = [];
  try {
    if (!(await m.fileExists(s))) return e;
    const t = await at.readFile(s);
    let r = 0;
    if (t.toString("ascii", r, r + 4) !== "cook") return e;
    r += 4;
    const i = t.readUInt32BE(r);
    r += 4;
    const n = [];
    for (let c = 0; c < i; c++) (n.push(t.readUInt32BE(r)), (r += 4));
    for (let c = 0; c < i; c++) {
      const a = r,
        l = n[c];
      try {
        const f = Xt(t, a, l);
        e.push(...f);
      } catch {}
      r += l;
    }
    return e;
  } catch {
    return e;
  }
}
function Xt(s, e, t) {
  const r = [];
  let o = e;
  if (s.readUInt32BE(o) !== 256) return r;
  o += 4;
  const n = s.readUInt32LE(o);
  o += 4;
  const c = [];
  for (let a = 0; a < n; a++) (c.push(s.readUInt32LE(o)), (o += 4));
  for (const a of c)
    try {
      const l = e + a,
        f = Qt(s, l);
      f && r.push(f);
    } catch {}
  return r;
}
function Qt(s, e) {
  let t = e;
  (s.readUInt32LE(t), (t += 4), (t += 4));
  const r = s.readUInt32LE(t);
  ((t += 4), (t += 4));
  const o = s.readUInt32LE(t);
  t += 4;
  const i = s.readUInt32LE(t);
  t += 4;
  const n = s.readUInt32LE(t);
  t += 4;
  const c = s.readUInt32LE(t);
  ((t += 4), (t += 8));
  const a = s.readDoubleLE(t);
  t += 8;
  const l = s.readDoubleLE(t);
  t += 8;
  const f = 978307200,
    u = a > 0 ? Math.floor(a + f) : 0,
    p = l > 0 ? Math.floor(l + f) : 0,
    k = Q(s, e + o),
    w = Q(s, e + i),
    S = Q(s, e + n),
    h = Q(s, e + c);
  return w
    ? {
        name: w,
        value: h,
        domain: k,
        path: S || "/",
        expiration: u,
        creation: p,
        flags: r,
        isSecure: (r & 1) !== 0,
        isHttpOnly: (r & 4) !== 0,
      }
    : null;
}
function Q(s, e) {
  const t = [];
  let r = e;
  for (; r < s.length; ) {
    const o = s[r];
    if (o === 0 || (t.push(o), r++, t.length > 1e4)) break;
  }
  return Buffer.from(t).toString("utf-8");
}
const er = Buffer.from("DateAdded", "utf8");
async function tr(s) {
  const e = await import("path"),
    t = await import("os");
  try {
    const r = e.join(
      process.env.HOME || t.homedir(),
      "Library",
      "Containers",
      "com.apple.Safari",
      "Data",
      "Library",
      "Safari",
      "SafariTabs.db",
    );
    if (!(await m.fileExists(r))) return null;
    const o = (await import("better-sqlite3")).default,
      i = await m.copySourceDatabase(r),
      n = new o(i, { readonly: !0 });
    try {
      const c = or(n, s, e);
      return sr(n, c);
    } finally {
      n.close();
      try {
        await m.removeSourceDatabase(i);
      } catch {}
    }
  } catch {
    return null;
  }
}
function rr(s, e) {
  const r = e.normalize(s).split(e.sep),
    o = r.lastIndexOf("Profiles");
  return o < 0 || o >= r.length - 1 ? null : r[o + 1];
}
function or(s, e, t) {
  const r = rr(e, t);
  if (r) return Ve(s, r);
  const o = ir(s);
  return o.length > 0 ? o : Ke(s, [22, 2]);
}
function sr(s, e) {
  if (e.length === 0) return { tabs: [], tabGroups: [] };
  const r = `
    WITH RECURSIVE tab_tree(
      id,
      parent,
      subtype,
      type,
      title,
      url,
      order_index,
      deleted,
      depth,
      root_id,
      is_pinned
    ) AS (
      SELECT
        id,
        parent,
        subtype,
        type,
        title,
        url,
        order_index,
        deleted,
        0,
        id,
        CASE WHEN id = 2 THEN 1 ELSE 0 END
      FROM bookmarks
      WHERE id IN (${e.map(() => "?").join(", ")})
      UNION ALL
      SELECT
        b.id,
        b.parent,
        b.subtype,
        b.type,
        b.title,
        b.url,
        b.order_index,
        b.deleted,
        tab_tree.depth + 1,
        tab_tree.root_id,
        tab_tree.is_pinned
      FROM bookmarks b
      JOIN tab_tree ON b.parent = tab_tree.id
      WHERE b.deleted = 0
    )
  `,
    o = `
    ${r}
    SELECT DISTINCT folder.id, folder.title
    FROM tab_tree folder
    WHERE folder.type = 1
      AND folder.depth > 0
      AND folder.subtype = 0
      AND folder.parent = folder.root_id
      AND folder.root_id <> 2
      AND folder.title IS NOT NULL
      AND folder.title <> ''
      AND folder.deleted = 0
      AND EXISTS (
        SELECT 1
        FROM bookmarks child
        WHERE child.parent = folder.id
          AND child.type = 0
          AND child.deleted = 0
          AND child.url IS NOT NULL
          AND child.url <> ''
      )
    ORDER BY folder.order_index, folder.title
  `,
    i = s.prepare(o).all(...e),
    n = `
    ${r}
    SELECT
      id,
      parent,
      title,
      url,
      order_index,
      is_pinned
    FROM tab_tree
    WHERE type = 0
      AND url IS NOT NULL
      AND url <> ''
      AND deleted = 0
    ORDER BY root_id, parent, order_index
  `;
  return {
    tabs: s
      .prepare(n)
      .all(...e)
      .map((a) => ({
        url: a.url,
        title: a.title || "",
        isPinned: a.is_pinned === 1,
        parentId: a.parent,
        orderId: a.order_index,
      })),
    tabGroups: i.map((a) => ({ id: a.id, title: a.title })),
  };
}
function Ve(s, e) {
  return s
    .prepare(
      `SELECT id
       FROM bookmarks
       WHERE external_uuid = ?
         AND deleted = 0
       ORDER BY id`,
    )
    .all(e)
    .map((t) => t.id);
}
function ir(s) {
  const e = Ve(s, "DefaultProfile");
  return e.length === 0 ? [] : [...e, ...Ke(s, [2]), ...nr(s)];
}
function Ke(s, e) {
  if (e.length === 0) return [];
  const t = e.map(() => "?").join(", ");
  return s
    .prepare(
      `SELECT id
       FROM bookmarks
       WHERE id IN (${t})
         AND deleted = 0
       ORDER BY id`,
    )
    .all(...e)
    .map((r) => r.id);
}
function nr(s) {
  return s
    .prepare(
      `SELECT id, extra_attributes
       FROM bookmarks
       WHERE parent IS NULL
         AND title = 'Local'
         AND deleted = 0
       ORDER BY id`,
    )
    .all()
    .filter((e) => ar(e.extra_attributes))
    .map((e) => e.id);
}
function ar(s) {
  return s?.includes(er) ?? !1;
}
class cr {
  constructor(e) {
    this.profile = e;
  }
  async getPasswords(e) {
    const t = m.emptyResult();
    if (!e.files.passwords)
      return {
        data: null,
        result: {
          ...t,
          errors: ["No password file provided for Safari migration"],
        },
      };
    const r = await $t(e.files.passwords);
    return (
      (t.skipped = r.skippedCount),
      (t.errors = r.errors),
      { data: r.passwords, result: t }
    );
  }
  async getBookmarks(e) {
    const t = this.profile,
      r = m.emptyResult(),
      o = e.files.bookmarks,
      i = o ? null : await this.getSafariBookmarksPath(t);
    let n;
    return (
      o
        ? (n = await Ht(
            o,
            /<(?:!DOCTYPE\s+NETSCAPE-Bookmark-file-1|html|dl)\b/i.test(o)
              ? "html"
              : "xml",
            e.bookmarks,
          ))
        : i
          ? (n = await zt(i, e.bookmarks))
          : (n = null),
      !n?.success || !n.bookmarks
        ? (r.errors.push("Safari bookmarks not found or could not be parsed"),
          { data: null, result: r })
        : ((r.imported = n.importCount),
          { data: { bookmarks: n.bookmarks }, result: r })
    );
  }
  async getSafariBookmarksPath(e) {
    const t = _.join(q.homedir(), "Library", "Safari", "Bookmarks.plist");
    if (await m.fileExists(t)) return t;
    const r = _.join(e.path, "Bookmarks.plist");
    return (await m.fileExists(r)) ? r : null;
  }
  getSafariContainerProfileUuid(e) {
    const r = _.normalize(e).split(_.sep),
      o = r.lastIndexOf("Profiles");
    return o < 0 || o >= r.length - 1 ? null : r[o + 1];
  }
  async getHistory(e) {
    const t = this.profile,
      r = m.emptyResult(),
      o = await Vt(_.join(t.path, "History.db"));
    o.length === 0 && r.errors.push("No Safari history entries found");
    const i = [],
      n = [],
      c = Date.now();
    for (const [a, l] of o.entries()) {
      const f =
        l.visit_time === null
          ? c
          : Math.floor((l.visit_time + 978307200) * 1e3);
      if (f < 9466848e5 || f > c + 864e5) {
        r.skipped++;
        continue;
      }
      const u = a + 1;
      (i.push({
        id: u,
        url: l.url,
        title: l.title || "",
        visit_count: l.visit_count || 1,
        typed_count: 0,
        last_visit_time: f,
      }),
        l.visit_time !== null &&
          n.push({ id: u, url: u, visit_time: f, transition: 0 }));
    }
    return { data: { urls: i, visits: n, merge: "exact" }, result: r };
  }
  async getCookies(e) {
    const t = this.profile,
      r = N(),
      o = { imported: 0, skipped: 0, errors: [], details: r };
    try {
      const i = await this.getSafariCookiesPath(t);
      if (!i)
        return (
          o.errors.push("Safari Cookies.binarycookies not found"),
          B(r, "Cookies.binarycookies not found"),
          { data: null, result: o }
        );
      const n = await Kt(i);
      if (n.length === 0)
        return (
          o.errors.push("No cookies found in Safari cookies file"),
          B(r, "No cookies found"),
          { data: null, result: o }
        );
      const c = [];
      for (const a of n)
        try {
          if (a.expiration > 0 && a.expiration < Date.now() / 1e3) {
            (o.skipped++, I(r, "expired", `${a.name}@${a.domain}`));
            continue;
          }
          const l = a.isSecure ? "https" : "http",
            f = a.domain.startsWith(".") ? a.domain.slice(1) : a.domain,
            p = {
              url: `${l}://${f}${a.path}`,
              name: a.name,
              value: a.value,
              path: a.path,
              secure: a.isSecure,
              httpOnly: a.isHttpOnly,
              expirationDate: a.expiration > 0 ? a.expiration : void 0,
            };
          (a.domain.startsWith(".") && (p.domain = a.domain),
            a.name.startsWith("__Host-") &&
              ((p.secure = !0), (p.path = "/"), delete p.domain),
            c.push(p),
            z(r, `${a.name}@${a.domain}`));
        } catch (l) {
          const f = l instanceof Error ? l.message : "Unknown error";
          (o.errors.push(
            `Failed to set cookie ${a.name} for ${a.domain}: ${f}`,
          ),
            o.skipped++,
            B(r, "cookie set failed", `${a.name}@${a.domain}`));
        }
      return { data: c, result: o };
    } catch (i) {
      const n = i instanceof Error ? i.message : "Unknown error";
      return (o.errors.push(n), B(r, n), { data: null, result: o });
    }
  }
  async getSafariCookiesPath(e) {
    const t = process.env.HOME || q.homedir(),
      r = this.getSafariContainerProfileUuid(e.path);
    if (r) {
      const i = _.join(
        t,
        "Library",
        "Containers",
        "com.apple.Safari",
        "Data",
        "Library",
        "WebKit",
        "WebsiteDataStore",
        r.toLowerCase(),
        "Cookies",
        "Cookies.binarycookies",
      );
      if (await m.fileExists(i)) return i;
    }
    const o = [
      _.join(
        t,
        "Library",
        "Containers",
        "com.apple.Safari",
        "Data",
        "Library",
        "Cookies",
        "Cookies.binarycookies",
      ),
      _.join(t, "Library", "Cookies", "Cookies.binarycookies"),
    ];
    for (const i of o) if (await m.fileExists(i)) return i;
    return null;
  }
  async getTabs(e) {
    const t = this.profile,
      r = N(),
      o = { imported: 0, skipped: 0, errors: [], details: r };
    try {
      const i = await tr(t.path);
      if (!i || i.tabs.length === 0) return { data: null, result: o };
      const n = Date.now(),
        c = new Map(i.tabGroups.map((h) => [h.id, h])),
        a = new Map(),
        l = [],
        f = (h) => {
          const y = a.get(h);
          if (y) return y;
          const P = c.get(h),
            b = crypto.randomUUID();
          return (
            a.set(h, b),
            l.push({
              id: b,
              collapsed: !1,
              title: P?.title?.trim() || void 0,
              createdAt: n,
              updatedAt: n,
            }),
            b
          );
        },
        u = i.tabs.filter((h) => {
          const y = h.url || "";
          return X(y)
            ? (o.skipped++, I(r, "Orbitra sign-in completion page"), !1)
            : y === "about:blank"
              ? (o.skipped++, I(r, "about:blank page"), !1)
              : y.startsWith("safari-reader://")
                ? (o.skipped++, I(r, "safari-reader:// URL", y), !1)
                : y.startsWith("safari://")
                  ? (o.skipped++, I(r, "safari:// URL", y), !1)
                  : y.startsWith("webkit://")
                    ? (o.skipped++, I(r, "webkit:// URL", y), !1)
                    : (o.imported++, z(r, h.title || y), !0);
        }),
        p = u.map((h) => {
          const y = c.has(h.parentId) ? h.parentId : null,
            P = !h.isPinned && y !== null ? f(y) : null;
          return {
            url: h.url,
            title: h.title,
            tabType: "website",
            isPinned: h.isPinned,
            groupId: P,
            openedByHuman: !0,
          };
        }),
        k = p.filter((h) => !h.isPinned),
        S = p
          .filter((h) => h.isPinned)
          .flatMap((h) => {
            const y = {
                id: crypto.randomUUID(),
                profileId: "",
                title: h.title,
                url: h.url,
                tabType: h.tabType,
                faviconUrl: "",
                isAIControlledTab: !1,
                isTakeover: !1,
                isBrowserAgentControlledTab: null,
                isWaitingForCaptcha: void 0,
                captchaExpiresAt: null,
                canGoBack: !1,
                canGoForward: !1,
                isPinned: !0,
                pinnedId: crypto.randomUUID(),
                groupId: null,
                openedAt: n,
                lastShownAt: 0,
                isLoading: !1,
                isFailedToLoad: !1,
                isFailedToLoadReason: "",
                visitType: void 0,
                isAudioMuted: !1,
                hasAudioActivity: !1,
                wasInitiatedByAgent: !1,
                openedByHuman: !0,
              },
              P = m.capturePinnedTabSnapshot(y, y.pinnedId ?? "");
            return P ? [P] : [];
          });
      return {
        data: {
          evidenceTabs: u.map(({ url: h, title: y }) => ({ url: h, title: y })),
          migratedTabs: k,
          pinnedTabList: S,
          tabGroups: l,
        },
        result: o,
      };
    } catch (i) {
      const n = i instanceof Error ? i.message : "Unknown error";
      return (o.errors.push(n), B(r, n), { data: null, result: o });
    }
  }
  async getExtensions() {
    return { data: [], result: m.emptyResult() };
  }
}
function lr(s, e = !1) {
  switch (s.browser) {
    case "orbitra":
      if (!e)
        throw new Error("Orbitra import is only available in development");
      return new Rt(s);
    case "chrome":
    case "edge":
    case "brave":
    case "comet":
    case "dia":
      return new ke(s);
    case "arc":
      return new jt(s);
    case "firefox":
    case "zen":
      return new Nt(s);
    case "safari":
      return new cr(s);
    default:
      throw new Error("Unsupported browser import source");
  }
}
const dr = Be.promisify(Fe.execFile),
  se = d.fallback(d.optional(d.number()), void 0),
  Ie = d.fallback(
    d.optional(d.union([d.number(), d.object({ zoom_level: d.number() })])),
    void 0,
  ),
  ur = d.object({
    partition: d.optional(
      d.object({
        default_zoom_level: d.optional(d.record(d.string(), se)),
        per_host_zoom_levels: d.optional(
          d.record(d.string(), d.record(d.string(), Ie)),
        ),
      }),
    ),
    profile: d.optional(
      d.object({
        default_zoom_level: d.optional(se),
        per_host_zoom_levels: d.optional(d.record(d.string(), Ie)),
      }),
    ),
  }),
  Te = d.object({
    DefaultPageZoom: d.optional(se),
    MapOfHostnamesToZoomPreferences: d.optional(
      d.record(
        d.string(),
        d.fallback(
          d.optional(d.object({ PageZoomFactor: d.optional(se) })),
          void 0,
        ),
      ),
    ),
  });
async function he(s) {
  try {
    return await R.readFile(s, "utf8");
  } catch (e) {
    if (e instanceof Error && "code" in e && e.code === "ENOENT") return null;
    throw e;
  }
}
function fr(s, e = !1) {
  const t = d.parse(ur, JSON.parse(s)),
    r = t.partition?.default_zoom_level,
    o = t.partition?.per_host_zoom_levels;
  let i = ["x", "0", ""].find(
    (l) => Object.hasOwn(r ?? {}, l) || Object.hasOwn(o ?? {}, l),
  );
  if (e) {
    const l = new Set([...Object.keys(r ?? {}), ...Object.keys(o ?? {})]);
    l.size === 1 && (i = [...l][0]);
  }
  const n = i === void 0 ? t.profile?.default_zoom_level : r?.[i],
    c = i === void 0 ? t.profile?.per_host_zoom_levels : o?.[i],
    a = [];
  for (const [l, f] of Object.entries(c ?? {})) {
    const u = m.parseWebsiteZoomHost(K.sanitizeUnpairedSurrogates(l)),
      p = typeof f == "number" ? f : f?.zoom_level,
      k = p === void 0 ? void 0 : m.parseWebsiteZoomFactor(1.2 ** p);
    u && k !== void 0 && a.push([u, k]);
  }
  return {
    defaultFactor: m.parseWebsiteZoomFactor(1.2 ** (n ?? 0)) ?? 1,
    hosts: Object.fromEntries(a),
  };
}
function pr(s, e) {
  const t = d.parse(Te, JSON.parse(s)),
    r = e === null ? void 0 : d.parse(Te, JSON.parse(e)),
    o = [];
  for (const [i, n] of Object.entries(
    t.MapOfHostnamesToZoomPreferences ?? {},
  )) {
    const c = m.parseWebsiteZoomHost(K.sanitizeUnpairedSurrogates(i)),
      a =
        n?.PageZoomFactor === void 0
          ? void 0
          : m.parseWebsiteZoomFactor(n.PageZoomFactor);
    c && a !== void 0 && o.push([c, a]);
  }
  return {
    defaultFactor:
      m.parseWebsiteZoomFactor(r?.DefaultPageZoom ?? t.DefaultPageZoom ?? 1) ??
      1,
    hosts: Object.fromEntries(o),
  };
}
async function xe(s) {
  try {
    await R.access(s);
  } catch (t) {
    if (t instanceof Error && "code" in t && t.code === "ENOENT") return null;
    throw t;
  }
  const { stdout: e } = await dr(
    "/usr/bin/plutil",
    ["-convert", "xml1", "-o", "-", s],
    { maxBuffer: 16 * 1024 * 1024 },
  );
  return JSON.stringify($e(K.sanitizeUnpairedSurrogates(e)));
}
async function mr(s) {
  const e = _.join(q.homedir(), "Library", "Safari"),
    t = _.join(
      q.homedir(),
      "Library",
      "Containers",
      "com.apple.Safari",
      "Data",
      "Library",
    );
  let r = null;
  for (const i of new Set([s, e, _.join(t, "Safari")]))
    if (
      i &&
      ((r = await xe(_.join(i, "PerSiteZoomPreferences.plist"))), r !== null)
    )
      break;
  let o = null;
  for (const i of [
    _.join(t, "Preferences", "com.apple.Safari.plist"),
    _.join(q.homedir(), "Library", "Preferences", "com.apple.Safari.plist"),
  ])
    if (((o = await xe(i)), o !== null)) break;
  return r === null && o === null ? null : pr(r ?? "{}", o);
}
async function hr(s) {
  const e = _.join(s, "content-prefs.sqlite");
  try {
    await R.access(e);
  } catch (o) {
    if (o instanceof Error && "code" in o && o.code === "ENOENT") return null;
    throw o;
  }
  const t = await m.copySourceDatabase(e);
  let r;
  try {
    r = new j(t, { readonly: !0, fileMustExist: !0 });
    const o = d.parse(
        d.array(d.object({ host: d.nullable(d.string()), factor: d.number() })),
        r
          .prepare(
            `
      SELECT groups.name AS host, prefs.value AS factor
      FROM prefs JOIN settings ON settings.id = prefs.settingID
      LEFT JOIN groups ON groups.id = prefs.groupID
      WHERE settings.name = 'browser.content.full-zoom'
    `,
          )
          .all(),
      ),
      i = await he(_.join(s, "prefs.js")),
      n =
        !/user_pref\(\s*["']browser\.zoom\.siteSpecific["']\s*,\s*false\s*\)/.test(
          i ?? "",
        ),
      c = [];
    let a = 1;
    for (const l of o) {
      const f = m.parseWebsiteZoomFactor(l.factor);
      if (f !== void 0) {
        if (l.host === null) a = f;
        else if (n) {
          const u = m.parseWebsiteZoomHost(
            K.sanitizeUnpairedSurrogates(l.host),
          );
          u && c.push([u, f]);
        }
      }
    }
    return { defaultFactor: a, hosts: Object.fromEntries(c) };
  } finally {
    (r?.close(), await m.removeSourceDatabase(t));
  }
}
async function gr(s) {
  const e = m.emptyResult();
  try {
    let t;
    switch (s.browser) {
      case "firefox":
      case "zen":
        t = await hr(s.path);
        break;
      case "safari":
        t = await mr(s.path);
        break;
      case "chrome":
      case "edge":
      case "brave":
      case "arc":
      case "dia":
      case "comet":
      case "orbitra": {
        if (s.browser === "orbitra") {
          const o = await he(_.join(s.path, "..", "..", "profiles.json"));
          if (o !== null) {
            const n = d
              .parse(
                d.object({
                  profiles: d.array(
                    d.object({
                      id: d.string(),
                      settings: d.object({
                        websiteZoom: d.optional(
                          d.object({
                            defaultFactor: d.optional(d.number()),
                            hosts: d.record(d.string(), d.number()),
                          }),
                        ),
                      }),
                    }),
                  ),
                }),
                JSON.parse(o),
              )
              .profiles.find((c) => `profile_${c.id}` === _.basename(s.path))
              ?.settings.websiteZoom;
            if (n) {
              const c = [];
              for (const [a, l] of Object.entries(n.hosts)) {
                const f = m.parseWebsiteZoomHost(
                    K.sanitizeUnpairedSurrogates(a),
                  ),
                  u = m.parseWebsiteZoomFactor(l);
                f && u !== void 0 && c.push([f, u]);
              }
              return {
                data: {
                  defaultFactor:
                    m.parseWebsiteZoomFactor(n.defaultFactor ?? 1) ?? 1,
                  hosts: Object.fromEntries(c),
                },
                result: e,
              };
            }
          }
        }
        const r = await he(_.join(s.path, "Preferences"));
        t = r === null ? null : fr(r, s.browser === "orbitra");
        break;
      }
    }
    return { data: t, result: e };
  } catch {
    return (
      e.errors.push("Could not read browser website zoom settings"),
      { data: null, result: e }
    );
  }
}
if (!we.parentPort)
  throw new Error("BrowserImportWorker requires a parent port");
const F = we.parentPort,
  $ = we.workerData,
  H = $.profile ? lr($.profile, $.allowDevelopmentSources) : null;
let ge,
  ce = !1;
const M = 200;
async function W(s) {
  const e = new Promise((t) => {
    ge = t;
  });
  (F.postMessage({ action: "chunk", chunk: s }), await e);
}
async function wr(s) {
  if (ce) throw new Error("An import read is already in progress");
  ce = !0;
  try {
    await m.withSourceDirectory($.directory, async () => {
      if (s.action === "discoverAutomatic") {
        const r = await Pe.findAutomaticBrowserProfiles(
          $.allowDevelopmentSources,
        );
        F.postMessage({ action: "profiles", profiles: r });
        return;
      }
      if (s.action === "discover") {
        const r = await Pe.findAllBrowserProfiles(
          $.allowDevelopmentSources,
          s.browser,
        );
        F.postMessage({ action: "profiles", profiles: r });
        return;
      }
      if (s.action === "domains") {
        const r = await xt(s.profilePath);
        F.postMessage({ action: "domains", domains: r });
        return;
      }
      if (s.action === "automaticCookieNames") {
        if (!Ue.canReadBrowserAutomatically(s.browser)) {
          F.postMessage({ action: "cookieNames", cookies: [] });
          return;
        }
        const o =
          s.browser === "firefox" || s.browser === "zen"
            ? await (
                await Promise.resolve().then(() =>
                  require("./chunks/firefoxUtils-Ccmh4Zu-.js"),
                )
              ).readFirefoxCookieNames(s.profilePath)
            : await At(s.profilePath);
        F.postMessage({ action: "cookieNames", cookies: o });
        return;
      }
      if (!H) throw new Error("No browser source selected");
      const { type: e, context: t } = s;
      switch (e) {
        case "zoom": {
          if (!$.profile) throw new Error("No browser source selected");
          const r = await gr($.profile);
          (r.data && (await W({ type: e, data: r.data })),
            F.postMessage({ action: "done", result: r.result }));
          break;
        }
        case "passwords":
        case "cookies":
        case "extensions": {
          if (e === "passwords") {
            const r = await H.getPasswords(t);
            for (let o = 0; o < (r.data?.length ?? 0); o += M)
              await W({ type: e, data: r.data.slice(o, o + M) });
            F.postMessage({ action: "done", result: r.result });
          } else if (e === "cookies") {
            const r = await H.getCookies(t);
            for (let o = 0; o < (r.data?.length ?? 0); o += M)
              await W({ type: e, data: r.data.slice(o, o + M) });
            F.postMessage({ action: "done", result: r.result });
          } else {
            const r = await H.getExtensions(t);
            for (let o = 0; o < (r.data?.length ?? 0); o += M)
              await W({ type: e, data: r.data.slice(o, o + M) });
            F.postMessage({ action: "done", result: r.result });
          }
          break;
        }
        case "bookmarks":
        case "tabs": {
          const r =
            e === "bookmarks" ? await H.getBookmarks(t) : await H.getTabs(t);
          (r.data && (await W({ type: e, data: r.data })),
            F.postMessage({ action: "done", result: r.result }));
          break;
        }
        case "history": {
          const r = await H.getHistory(t);
          if (r.data) {
            const { urls: o, visits: i, merge: n } = r.data;
            if (n === "exact") {
              const c = new Map(i.map((a) => [a.url, a]));
              for (let a = 0; a < o.length; a += M) {
                const l = o.slice(a, a + M);
                await W({
                  type: e,
                  data: {
                    urls: l,
                    visits: l.flatMap((f) => {
                      const u = c.get(f.id);
                      return u ? [u] : [];
                    }),
                    merge: n,
                  },
                });
              }
            } else {
              for (let c = 0; c < o.length; c += M)
                await W({
                  type: e,
                  data: { urls: o.slice(c, c + M), visits: [], merge: n },
                });
              for (let c = 0; c < i.length; c += M)
                await W({
                  type: e,
                  data: { urls: [], visits: i.slice(c, c + M), merge: n },
                });
            }
          }
          F.postMessage({ action: "done", result: r.result });
          break;
        }
      }
    });
  } finally {
    ce = !1;
  }
}
F.on("message", (s) => {
  if (s.action === "next") {
    const e = ge;
    ((ge = void 0), e?.());
    return;
  }
  wr(s).catch(() => {
    F.postMessage({
      action: "error",
      message: "Browser source could not be read",
    });
  });
});
