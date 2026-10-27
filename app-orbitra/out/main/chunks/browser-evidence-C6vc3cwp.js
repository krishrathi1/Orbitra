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
      i = new e.Error().stack;
    i &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[i] = "ca474f7b-2ed5-407a-9a4c-3b3fc533490d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-ca474f7b-2ed5-407a-9a4c-3b3fc533490d"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const T = require("node:fs"),
  y = require("node:fs/promises"),
  b = require("node:path"),
  V = require("./errors-DsbnElf-.js"),
  S = require("./unicode-CSAGP0Z8.js"),
  B = require("valibot");
require("node:os");
require("./savedCertificateBlocklist-BUtmL3xA.js");
require("node:crypto");
require("node:tls");
require("./appDataPath-20zIIRaW.js");
function O(e) {
  const i = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const c in e)
      if (c !== "default") {
        const l = Object.getOwnPropertyDescriptor(e, c);
        Object.defineProperty(
          i,
          c,
          l.get ? l : { enumerable: !0, get: () => e[c] },
        );
      }
  }
  return ((i.default = e), Object.freeze(i));
}
const n = O(B),
  A = n.object({
    kind: n.picklist(["history", "tab", "bookmark", "cookie-domain"]),
    url: n.string(),
    title: n.optional(n.string()),
    lastVisitedAt: n.optional(n.number()),
    visitCount: n.optional(n.number()),
    lastActiveAt: n.optional(n.number()),
    importedAt: n.number(),
  });
function E(e) {
  try {
    const i = new URL(e);
    return (i.protocol !== "https:" && i.protocol !== "http:") ||
      /\/(?:oauth|callback|reset-password|sign-in|login)(?:\/|$)/i.test(
        i.pathname,
      )
      ? null
      : ((i.username = ""),
        (i.password = ""),
        (i.search = ""),
        (i.hash = ""),
        i.toString());
  } catch {
    return null;
  }
}
function C(e, i) {
  const c = [];
  function l(o) {
    const r = E(o.url);
    r &&
      c.push({
        ...o,
        url: r,
        title: o.title ? S.sanitizeUnpairedSurrogates(o.title) : void 0,
        importedAt: i,
      });
  }
  function d(o) {
    o.url && l({ kind: "bookmark", url: o.url, title: o.name });
    for (const r of o.children ?? []) d(r);
  }
  switch (e.type) {
    case "zoom":
    case "passwords":
    case "extensions":
      return [];
    case "cookies":
      for (const o of e.data) {
        const r = E(o.url),
          v = o.domain?.replace(/^\./, "") || (r ? new URL(r).hostname : null);
        v && l({ kind: "cookie-domain", url: `https://${v}/` });
      }
      break;
    case "history":
      for (const o of e.data.urls)
        l({
          kind: "history",
          url: o.url,
          title: o.title,
          lastVisitedAt: o.last_visit_time,
          visitCount: o.visit_count,
        });
      break;
    case "tabs":
      for (const o of e.data.evidenceTabs ?? e.data.migratedTabs ?? [])
        l({
          kind: "tab",
          url: o.url,
          title: o.title,
          lastActiveAt: o.lastActiveAt,
        });
      break;
    case "bookmarks":
      if (e.data.bookmarks)
        for (const o of Object.values(e.data.bookmarks.roots)) d(o);
      break;
  }
  return c;
}
function h(e, i) {
  return b.join(e, "onboarding", n.parse(n.pipe(n.string(), n.uuid()), i));
}
async function U(e, i, c) {
  const l = h(e, c);
  let d;
  try {
    d = await y.readdir(l);
  } catch (r) {
    if (r instanceof Error && "code" in r && r.code === "ENOENT") return;
    throw r;
  }
  const o = h(i, c);
  await y.mkdir(o, { recursive: !0 });
  for (const r of d)
    r.endsWith(".jsonl") &&
      (n.parse(n.pipe(n.string(), n.uuid()), r.slice(0, -6)),
      await y.copyFile(b.join(l, r), b.join(o, r)));
}
async function x(e, i, c, l) {
  const d = C(l, Date.now());
  if (!d.length) return;
  const o = h(e, i);
  await y.mkdir(o, { recursive: !0 });
  const r = b.join(o, `${n.parse(n.pipe(n.string(), n.uuid()), c)}.jsonl`);
  await y.appendFile(
    r,
    d.map((v) => JSON.stringify(v)).join(`
`) +
      `
`,
    { mode: 384 },
  );
}
async function* j(e) {
  let i = "";
  for await (const c of T.createReadStream(e, { encoding: "utf8" })) {
    i += c;
    let l;
    for (
      ;
      (l = i.indexOf(`
`)) !== -1;

    )
      (yield n.parse(A, JSON.parse(i.slice(0, l))), (i = i.slice(l + 1)));
  }
  i && (yield n.parse(A, JSON.parse(i)));
}
async function q(e, i) {
  const c = h(e, i),
    l = await y.readdir(c).catch((a) => {
      if (a.code === "ENOENT") return [];
      throw a;
    }),
    d = new Map(),
    o = new Set(),
    r = new Map(),
    v = new Map(),
    g = l.filter((a) => a.endsWith(".jsonl")).sort();
  for (const a of g)
    for await (const t of j(b.join(c, a))) {
      const f = new URL(t.url).hostname;
      if (t.kind === "cookie-domain") o.add(f);
      else {
        const s = v.get(t.url);
        v.set(t.url, {
          url: t.url,
          lastVisitedAt: Math.max(s?.lastVisitedAt ?? 0, t.lastVisitedAt ?? 0),
          lastActiveAt: Math.max(s?.lastActiveAt ?? 0, t.lastActiveAt ?? 0),
          visitCount: Math.max(s?.visitCount ?? 0, t.visitCount ?? 0),
          hasHistory: s?.hasHistory === !0 || t.kind === "history",
          hasTab: s?.hasTab === !0 || t.kind === "tab",
          hasBookmark: s?.hasBookmark === !0 || t.kind === "bookmark",
        });
      }
      const p = d.get(f);
      if (((!p || u(t) > u(p)) && d.set(f, t), d.size > 100)) {
        const s = [...d].sort((m, M) => u(m[1]) - u(M[1]))[0];
        d.delete(s[0]);
      }
      if (t.kind === "tab") {
        const s = r.get(t.url);
        (!s || u(t) > u(s)) && r.set(t.url, t);
      }
    }
  const w = [...d.values()].sort((a, t) => u(t) - u(a)),
    k = new Map(
      w.slice(0, 20).map((a) => [new URL(a.url).hostname, new Map()]),
    );
  for (const a of g)
    for await (const t of j(b.join(c, a))) {
      const f = k.get(new URL(t.url).hostname);
      if (f && t.kind !== "cookie-domain") {
        const s = f.get(t.url);
        f.set(
          t.url,
          s
            ? {
                ...(u(t) > u(s) ? t : s),
                lastVisitedAt:
                  Math.max(t.lastVisitedAt ?? 0, s.lastVisitedAt ?? 0) ||
                  void 0,
                lastActiveAt:
                  Math.max(t.lastActiveAt ?? 0, s.lastActiveAt ?? 0) || void 0,
                visitCount:
                  t.visitCount === void 0 && s.visitCount === void 0
                    ? void 0
                    : Math.max(t.visitCount ?? 0, s.visitCount ?? 0),
              }
            : t,
        );
      }
      const p = r.get(t.url);
      p &&
        t.lastVisitedAt &&
        t.lastVisitedAt > (p.lastVisitedAt ?? 0) &&
        (p.lastVisitedAt = t.lastVisitedAt);
    }
  return {
    files: g.map((a) => V.getAgentRootMask().maskText(b.join(c, a))),
    cookieDomains: [...o].sort((a, t) => {
      const f = d.get(a),
        p = d.get(t);
      return (p ? u(p) : 0) - (f ? u(f) : 0) || a.localeCompare(t);
    }),
    recentActivity: w,
    appActivity: [...v.values()],
    topSites: [...k].map(([a, t]) => {
      const f = [...t.values()],
        p = f.flatMap((s) => (s.visitCount === void 0 ? [] : [s.visitCount]));
      return {
        hostname: a,
        lastActivityAt: u(d.get(a)),
        historyUrlCount: f.filter((s) => s.lastVisitedAt !== void 0).length,
        recordedVisits: p.length ? p.reduce((s, m) => s + m, 0) : null,
        commonUrls: f
          .sort(
            (s, m) => (m.visitCount ?? 0) - (s.visitCount ?? 0) || u(m) - u(s),
          )
          .slice(0, 3),
      };
    }),
    recentTabs: [...r.values()].sort((a, t) => u(t) - u(a)).slice(0, 50),
  };
}
function u(e) {
  return Math.max(e.lastActiveAt ?? 0, e.lastVisitedAt ?? 0);
}
exports.copyBrowserEvidence = U;
exports.evidenceRecency = u;
exports.extractBrowserEvidence = C;
exports.readBrowserEvidence = q;
exports.saveBrowserEvidence = x;
