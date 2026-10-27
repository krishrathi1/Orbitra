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
      (t._sentryDebugIds[e] = "9f96ba30-4da7-46af-a7a2-c88ce57de7d4"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-9f96ba30-4da7-46af-a7a2-c88ce57de7d4"));
  })();
} catch {}
const H = {
    navigation: 1.5,
    input: 0.6,
    visibleMedia: 0.06,
    hiddenMedia: 0.01,
  },
  c = 0.5,
  E = 3600 * 1e3,
  b = 24 * E,
  _ = 2 * E,
  g = 0.984,
  I = 8 * E,
  N = 9 * E;
function R(t, e) {
  const n = new Date(t),
    r = new Date(e);
  return (
    n.getFullYear() === r.getFullYear() &&
    n.getMonth() === r.getMonth() &&
    n.getDate() === r.getDate()
  );
}
function p(t, e) {
  const n = Math.max(0, Math.floor((e - t.lastEngagementTime) / _));
  return t.rawScore * g ** n;
}
function Q(t) {
  if (t.rawScore <= c) return Number.MIN_SAFE_INTEGER;
  let e = Math.ceil(Math.log(c / t.rawScore) / Math.log(g));
  for (; t.rawScore * g ** e > c; ) e++;
  for (; t.rawScore * g ** (e - 1) <= c; ) e--;
  return t.lastEngagementTime + e * _;
}
function U(t, e) {
  return R(t.lastEngagementTime, e) ? t.pointsAddedToday : 0;
}
function S(t, e, n) {
  const r = n
    ? n.format(t.lastEngagementTime) === n.format(e)
    : R(t.lastEngagementTime, e);
  return {
    ...t,
    pointsAddedToday: r ? t.pointsAddedToday : 0,
    lastEngagementTime: e,
  };
}
function K(t, e) {
  return t !== null && (e < t || e - t >= N);
}
function j(t, e, n, r) {
  const s = n - I,
    i = Math.min(e, n);
  return t.lastEngagementTime > s
    ? S(t, n, r)
    : t.lastEngagementTime > i
      ? S(t, s, r)
      : S(t, s - (i - t.lastEngagementTime), r);
}
function O(t, e, n, r = !0) {
  const s = t ? p(t, n) : 0,
    i = t ? U(t, n) : 0,
    a = Math.min(e + (r && i === 0 ? 1.5 : 0), 100 - s, 15 - i);
  return { rawScore: s + a, pointsAddedToday: i + a, lastEngagementTime: n };
}
function W(t) {
  try {
    const e = new URL(t);
    return e.protocol !== "http:" && e.protocol !== "https:" ? null : e.origin;
  } catch {
    return null;
  }
}
function M(t, e, n) {
  if (!(n - e < N))
    for (const [r, s] of t) {
      const i = n - I - (e - s.lastEngagementTime);
      t.set(r, S(s, i));
    }
}
function q(t, e) {
  const n = new Map(),
    r = t
      .filter((o) => Number.isFinite(o.lastVisit))
      .sort((o, a) => o.lastVisit - a.lastVisit);
  if (r.length === 0) return { scores: n, lastEngagementTime: null };
  const s = r[r.length - 1].lastVisit - 30 * b;
  let i = r[0].lastVisit;
  for (const o of r) {
    if (o.lastVisit < s) continue;
    M(n, i, o.lastVisit);
    const a = W(o.url);
    a && (n.set(a, O(n.get(a), 0.5, o.lastVisit, !1)), (i = o.lastVisit));
  }
  M(n, i, e);
  for (const [o, a] of n) p(a, e) <= c && n.delete(o);
  return { scores: n, lastEngagementTime: e };
}
function X(t, e, n) {
  const { deletedUrls: r, remainingUrls: s, lastVisit: i } = e;
  if (r === 0) return t;
  if (s === 0) return null;
  const o = i === null || i > n ? n - 28 * b : i,
    a = (p(t, n) * s) / (s + r),
    f = Math.floor((n - o) / _);
  return {
    rawScore: a === 0 ? 0 : Math.min(100, a * (1 / g) ** f),
    pointsAddedToday: 0,
    lastEngagementTime: o,
  };
}
function x(t) {
  return t.trim().split(/\s+/).filter(Boolean);
}
const B = /^[\p{L}\p{N}]{3,32}$/u,
  $ = /[\p{L}\p{N}]+/gu;
function T(t) {
  return B.test(t);
}
function h(t, e) {
  return e + ((t.codePointAt(e) ?? 0) > 65535 ? 2 : 1);
}
function z(t, e) {
  if (!T(t) || e.startsWith(t)) return !1;
  let n = 0;
  for (; n < t.length && t.codePointAt(n) === e.codePointAt(n); ) n = h(t, n);
  const r = h(t, n),
    s = h(e, n),
    i = t.slice(r);
  if (e.slice(n).startsWith(i)) return !0;
  if (n >= e.length) return !1;
  if (e.slice(s).startsWith(t.slice(n)) || e.slice(s).startsWith(i)) return !0;
  const o = h(t, r);
  return (
    r < t.length &&
    t.codePointAt(n) === e.codePointAt(s) &&
    t.codePointAt(r) === e.codePointAt(n) &&
    e.slice(h(e, s)).startsWith(t.slice(o))
  );
}
function C(t, e) {
  if (!T(e)) return !1;
  let n = 0;
  for (const r of t.slice(0, 1024).matchAll($)) {
    if (++n > 64) return !1;
    if (z(e, r[0])) return !0;
  }
  return !1;
}
function J(t, e) {
  let n = 0;
  for (const r of t.slice(0, 1024).matchAll($)) {
    if (++n > 64) return !1;
    if (r[0].startsWith(e)) return !0;
  }
  return !1;
}
const l = {
  full: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/,
  simple: /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
  domain: /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:\d+)?$/,
  withProtocol: /^(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:\d+)?(\/.*)?$/,
  localhost: /^(https?:\/\/)?localhost(:\d+)?(\/.*)?$/,
  ipAddress:
    /^(https?:\/\/)?((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:\d+)?(\/.*)?$/,
  orbitra: /^orbitra:\/\/[a-zA-Z0-9.-]+(\/.*)?$/,
  chromeExtension: /^chrome-extension:\/\/[a-zA-Z0-9]+(\/.*)?$/,
  dotLocal:
    /^(https?:\/\/)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.local(:\d+)?(\/.*)?$/,
  file: /^file:\/\/.+$/,
  filesystemPathUnix: /^\//,
};
function y(t) {
  return l.localhost.test(t) || l.ipAddress.test(t) || l.dotLocal.test(t);
}
function D(t) {
  return /^[a-zA-Z][a-zA-Z0-9+.-]*:(?:\/\/|[^\s])/.test(t.trim());
}
function V(t) {
  const e = t.trim(),
    n = e.match(/^(https?):\/\//i);
  if (!n) return e;
  const r = n[1].toLowerCase(),
    s = e.slice(n[0].length);
  if (!/^https?:?\/?\/?/i.test(s)) return e;
  let i = e;
  for (; /^https?:\/\//i.test(i); ) i = i.replace(/^https?:\/\//i, "");
  return (
    (i = i.replace(/^https?\/+/i, "")),
    i.length > 0 && !i.startsWith("://")
      ? y(i)
        ? `${r}://${i}`
        : `https://${i}`
      : i
  );
}
function Z(t, e) {
  const n = V(t);
  return D(n)
    ? !0
    : l.full.test(n) ||
        l.simple.test(n) ||
        l.localhost.test(n) ||
        l.ipAddress.test(n) ||
        l.dotLocal.test(n) ||
        l.orbitra.test(n) ||
        l.chromeExtension.test(n) ||
        l.file.test(n) ||
        l.filesystemPathUnix.test(n);
}
function tt(t) {
  return (
    l.domain.test(t) ||
    l.withProtocol.test(t) ||
    l.localhost.test(t) ||
    l.ipAddress.test(t) ||
    l.dotLocal.test(t) ||
    l.orbitra.test(t) ||
    l.chromeExtension.test(t) ||
    l.file.test(t) ||
    l.filesystemPathUnix.test(t)
  );
}
function m(t, e) {
  const n = V(t);
  return /^https?:\/\//i.test(n) ||
    l.orbitra.test(n) ||
    l.chromeExtension.test(n) ||
    l.file.test(n) ||
    D(n) ||
    l.filesystemPathUnix.test(n)
    ? n
    : y(n)
      ? n.startsWith("http")
        ? n
        : `http://${n}`
      : `https://${n}`;
}
const et = [
  /^(https?:\/\/)?(localhost|127\.0\.0\.1)(:[0-9]{1,5})?((\?|\/|#).*)?$/,
  /^(https?:\/\/)?(([0-9]{1,3})\.){3}([0-9]{1,3})(:[0-9]{1,5})?((\?|\/|#).*)?$/,
  /^(https?:\/\/)?(([a-z0-9-]+)\.)+[a-z]{2,}(:[0-9]{1,5})?((\?|\/|#).*)?$/,
  /^(chrome|file):\/\/.*$/,
];
function F(t) {
  return t
    .replace(/^[\t \u00a0\u1680\u2000-\u200a\u202f\u205f\u3000]+/, "")
    .replace(
      /^[\u0000-\u001f\u007f-\u009f\u2028\u2029]+|[\u0000-\u001f\u007f-\u009f\u2028\u2029]+$/g,
      "",
    );
}
function nt(t) {
  const e = F(t),
    n = e.toLowerCase();
  if (
    !(
      et.some((s) => s.test(n)) ||
      /^(orbitra|chrome-extension):\/\//i.test(e) ||
      e.startsWith("/") ||
      (Z(e) && !e.includes(" "))
    )
  )
    return null;
  try {
    return e.startsWith("/")
      ? `file://${encodeURI(e)}`
      : new URL(m(e.replace(/ /g, "%20"))).href;
  } catch {
    return null;
  }
}
function rt(t) {
  return F(t).includes(" ") && nt(t) === null;
}
const it = /^(https?:\/\/)?(www\.)?/;
function u(t) {
  return t.replace(it, "");
}
function st(t) {
  const e = u(t),
    n = e.indexOf("?"),
    r = n === -1 ? e : e.slice(0, n),
    s = n === -1 ? "" : e.slice(n + 1),
    i = r.indexOf("/");
  return {
    stripped: e,
    host: i === -1 ? r : r.slice(0, i),
    path: i === -1 ? "" : r.slice(i),
    queryString: s,
  };
}
function G(t) {
  try {
    const e = m(t);
    return new URL(e).hostname.replace(/^www\./, "");
  } catch {
    return u(t).split("/")[0].split(":")[0];
  }
}
function v(t) {
  try {
    const e = m(t),
      n = new URL(e),
      r = n.pathname,
      s = n.search.length > 0,
      i = n.hash.length > 0;
    return (r === "/" || r === "") && !s && !i;
  } catch {
    const e = u(t);
    return !e.includes("/") || e.endsWith("/");
  }
}
const ot = new Set(["co", "com", "org", "net", "ac", "gov", "edu"]),
  at = 10080 * 60 * 1e3,
  lt = 1440 * 60 * 1e3,
  ct = 2160 * 60 * 60 * 1e3,
  ut = 256;
function ft(t) {
  const e = t.split(".");
  if (e.length <= 2) return t;
  const n = e[e.length - 2];
  return n.length <= 3 && ot.has(n)
    ? e.slice(-3).join(".")
    : e.slice(-2).join(".");
}
function dt(t, e) {
  const n = e.toLowerCase();
  return t.filter((r) => r.value.toLowerCase() !== n);
}
function ht(t, e) {
  if (Y(t, e) || (e - (t.lastVisitTime ?? 0) <= at && (t.visitCount ?? 0) >= 3))
    return !0;
  const r = t.typedCount ?? 0,
    s = (t.url || t.value).slice(0, 8192);
  return v(s) ? r >= 1 : r >= 2;
}
function gt(t) {
  return t.trim().toLowerCase().replace(/\s+/g, " ");
}
function Y(t, e = Date.now()) {
  return (
    t.queryLastSelectedAt !== void 0 &&
    Math.abs(e - t.queryLastSelectedAt) <= lt
  );
}
function k(t, e) {
  if (!e || e.length > 8192) return;
  const n = e.toLowerCase(),
    r = t.url;
  if (r && r.length > e.length && r.slice(0, 8192).toLowerCase().startsWith(n))
    return r;
  if (
    t.value.length > e.length &&
    t.value.slice(0, 8192).toLowerCase().startsWith(n)
  )
    return t.value;
}
function L(t) {
  try {
    return new URL(m(t)).href;
  } catch {
    return t;
  }
}
function mt(t, e) {
  if (t.type !== e.type || t.entryId !== e.entryId) return !1;
  const n = t.url,
    r = e.url;
  return !n || !r ? t.value === e.value : L(n) === L(r);
}
function St(t, e, n = Date.now()) {
  if (e.length > 8192) return;
  const r = e.toLowerCase(),
    s = t.find((o) => {
      if (!o.url || o.url.length > 8192) return !1;
      const a = o.url.toLowerCase(),
        f = a.replace(/\/$/, ""),
        d = r.replace(/\/$/, "");
      return f === d || a === r || a === r + "/";
    });
  if (s) return s;
  const i = T(r);
  return t.find((o) => {
    if (!o.url || !ht(o, n)) return !1;
    if (k(o, e) !== void 0) return !0;
    if (!i) return !1;
    const { host: a } = st(o.url.slice(0, 8192).toLowerCase());
    return z(r, a.split(".")[0]);
  });
}
function P(t) {
  if (t.type !== "url") return;
  const e = t.url || t.value;
  if (!e || y(e)) return;
  const n = G(e).toLowerCase();
  if (n.includes(".")) return ft(n);
}
function Et(t, e) {
  if (e.size === 0) return { suggestions: t, dismissedKeysToClear: [] };
  const n = new Set();
  for (const s of t) {
    const i = s.dismissalKey ?? P(s);
    if (!i) continue;
    const o = e.get(i);
    o !== void 0 &&
      s.lastVisitTime !== void 0 &&
      s.lastVisitTime > o &&
      n.add(i);
  }
  return {
    suggestions: t.filter((s) => {
      const i = s.dismissalKey ?? P(s);
      return !!(!i || n.has(i) || e.get(i) === void 0);
    }),
    dismissedKeysToClear: Array.from(n),
  };
}
function pt(t) {
  if (t.length > 8192) return { terms: [], allowFuzzy: !1 };
  const e = t.trim().toLowerCase(),
    n = /\s/u.test(e) ? e : u(e),
    r = [...new Set(x(n))];
  let s;
  if (r.length > 4 && r.every((i) => i.length === 1)) {
    s = new Uint16Array(65536);
    for (let i = 0; i < r.length; i++) s[r[i].charCodeAt(0)] = i + 1;
  }
  return {
    terms: r,
    allowFuzzy: t.length <= 128 && r.length <= 4,
    singleCharacterTerms: s,
  };
}
function Tt(t, { terms: e, allowFuzzy: n, singleCharacterTerms: r }) {
  if (e.length === 0) return !1;
  const s = u((t.url || t.value).slice(0, 8192)).toLowerCase(),
    i = (t.title ?? "").slice(0, 8192).toLowerCase();
  if (r) {
    const a = new Uint8Array(e.length + 1);
    let f = e.length;
    for (const d of [s, i])
      for (let A = 0; A < d.length; A++) {
        const w = r[d.charCodeAt(A)];
        if (!(w === 0 || a[w]) && ((a[w] = 1), --f === 0)) return !0;
      }
    return !1;
  }
  let o = !1;
  for (const a of e)
    if (!(s.includes(a) || i.includes(a))) {
      if (!n || o || (!C(s, a) && !C(i, a))) return !1;
      o = !0;
    }
  return !0;
}
exports.MAX_SELECTION_QUERY_LENGTH = ut;
exports.SELECTION_RETENTION_MS = ct;
exports.SITE_ENGAGEMENT_CLEANUP_THRESHOLD = c;
exports.SITE_ENGAGEMENT_POINTS = H;
exports.addSiteEngagementPoints = O;
exports.applySuggestionDismissals = Et;
exports.canFuzzyMatchTerm = T;
exports.createSuggestionQuery = pt;
exports.extractRootDomain = G;
exports.filterExactMatches = dt;
exports.findUrlLikeHistorySuggestion = St;
exports.getInlineAutocompleteValue = k;
exports.getSiteEngagementCleanupTime = Q;
exports.getSiteEngagementOrigin = W;
exports.getSiteEngagementPointsAddedToday = U;
exports.getSiteEngagementScore = p;
exports.getSuggestionDismissalKey = P;
exports.getSuggestionUrlKey = L;
exports.hasRecentQuerySelection = Y;
exports.hasUrlProtocol = D;
exports.hasWordPrefixMatch = J;
exports.importSiteEngagementScores = q;
exports.isDomainLike = tt;
exports.isEligibleSuggestion = Tt;
exports.isFuzzyTermMatch = z;
exports.isLocalAddress = y;
exports.isRootDomain = v;
exports.isSameSuggestionTarget = mt;
exports.isSiteEngagementStale = K;
exports.isUrlLike = Z;
exports.normalizeSelectionQuery = gt;
exports.normalizeUrl = m;
exports.prefersTypedSearch = rt;
exports.rebaseSiteEngagementScore = j;
exports.reduceSiteEngagementForDeletion = X;
exports.stripProtocolAndWww = u;
exports.tokenizeSearchQuery = x;
