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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "d2226f7e-c521-48c3-95f0-d7d0ed43d2d2"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d2226f7e-c521-48c3-95f0-d7d0ed43d2d2"));
  })();
} catch {}
const f = 3,
  D = 40,
  _ = 1080 * 6e4,
  T = 336 * 60 * 6e4,
  y = 60 * 6e4;
function s(e, n) {
  const t = new Intl.DateTimeFormat("en-US", {
      timeZone: n,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hourCycle: "h23",
    }).formatToParts(new Date(e)),
    o = (r) => Number(t.find((a) => a.type === r)?.value);
  return {
    year: o("year"),
    month: o("month"),
    day: o("day"),
    hour: o("hour"),
    minute: o("minute"),
    second: o("second"),
  };
}
function M(e, n) {
  const t = s(e, n);
  return (
    Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute, t.second) -
    Math.floor(e / 1e3) * 1e3
  );
}
function c(e, n, t) {
  const o = Date.UTC(e.year, e.month - 1, e.day, n),
    r = o - M(o, t);
  let a = o - M(r, t);
  const u = Date.UTC(e.year, e.month - 1, e.day);
  for (let i = 0; i < 12; i += 1) {
    const d = s(a, t),
      l = Date.UTC(d.year, d.month - 1, d.day);
    if (l > u || (l === u && d.hour >= n)) break;
    a += 15 * 6e4;
  }
  return a;
}
function m(e, n) {
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
  if (!t) return null;
  const o = { year: Number(t[1]), month: Number(t[2]), day: Number(t[3]) },
    r = new Date(Date.UTC(o.year, o.month - 1, o.day));
  return r.getUTCMonth() !== o.month - 1 || r.getUTCDate() !== o.day
    ? null
    : c(o, 0, n);
}
function g(e, n) {
  const t = m(e, n);
  if (t === null) return null;
  const o = s(t + 36 * y, n);
  return c(o, 0, n);
}
function h(e, n) {
  const t = s(e, n),
    o = c(t, f, n);
  return o <= e ? o : c(s(e - 12 * y, n), f, n);
}
function E(e) {
  const n = Math.min(h(e.nowMs, e.timeZone), e.nowMs - _);
  if (e.lastFinishedAtMs === null || e.lastFinishedAtMs < n)
    return { kind: "due", trigger: "nightly", dueSinceMs: n };
  const t = e.newNoteTimes[D - 1];
  return t !== void 0
    ? {
        kind: "due",
        trigger: "notes",
        dueSinceMs: Math.min(Math.max(t, e.lastFinishedAtMs + 1), e.nowMs),
      }
    : { kind: "not-due" };
}
exports.OPTMEM_DREAM_FIRST_NIGHT_MS = T;
exports.optMemDreamDayEndMs = g;
exports.optMemDreamDayStartMs = m;
exports.optMemDreamDue = E;
exports.optMemDreamNightStartMs = h;
