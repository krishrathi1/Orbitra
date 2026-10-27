import { a as S } from "./CjyQo--N.js";
import { j as T } from "./D3UE_Iy2.js";
import { g as z } from "./DjdRlHSY.js";
import {
  l as f,
  p as N,
  j,
  o as h,
  h as n,
  G as p,
  s as i,
  A as w,
} from "./De_xxbuH.js";
import {
  B as C,
  h as M,
  i as U,
  v as B,
  c as v,
  d as c,
  r as u,
  t as x,
  j as k,
  w as g,
  z as y,
  f as I,
} from "./BY3kRY6U.js";
const G = h({ cronSchedule: n(i()), timezone: n(i()), eventId: n(i()) }),
  O = N(
    h({ once: n(w()), until: n(p(i())), runLimit: n(T), endsAt: n(p(i())) }),
    j((e) => ({
      runLimit: e.once === !0 ? 1 : (e.runLimit ?? null),
      endsAt: e.until !== void 0 ? e.until : e.endsAt,
    })),
  ),
  P = h({
    eventName: n(i()),
    companionId: n(i()),
    routineId: n(i()),
    taskId: n(i()),
    eventId: n(i()),
    integration: n(i()),
    status: n(i()),
  });
function Q(e) {
  const t = f(P, e ?? {});
  return t.success ? t.output : {};
}
function _(e) {
  const t = f(G, e ?? {});
  return t.success ? t.output : {};
}
function V(e) {
  if (e?.schedule?.type === "once") return { kind: "once", at: e.schedule.at };
  if (e?.schedule?.type === "cron")
    return {
      kind: "cron",
      expression: e.schedule.expression,
      timezone: e.schedule.timezone ?? z(),
    };
  const t = _(e);
  if (t.cronSchedule)
    return {
      kind: "cron",
      expression: t.cronSchedule,
      timezone: t.timezone ?? "UTC",
    };
  let o;
  return (
    Array.isArray(e?.eventName)
      ? (o = e.eventName)
      : e?.eventName
        ? (o = [e.eventName])
        : (o = []),
    o.length > 0
      ? { kind: "provider", eventIdentifiers: o, config: S(e?.extraConfig) }
      : { kind: "none" }
  );
}
function W(e) {
  const t = f(O, e ?? {});
  return t.success ? t.output : { runLimit: null, endsAt: void 0 };
}
function X(e, t) {
  const o = e?.taskId ?? t.taskId;
  if (o) return { kind: "oneOff", id: o };
  const d = e?.routineId ?? t.routineId ?? _(e).eventId ?? t.eventId;
  return d ? { kind: "routine", id: d } : { kind: "unknown" };
}
var q = I(
    '<div class="px-5 py-4"><div class="mb-2 text-sm font-medium text-primary"> </div> <!></div>',
  ),
  D = I(
    '<div class="flex items-start justify-between gap-6 px-5 py-3.5"><div class="shrink-0 text-sm font-medium text-primary"> </div> <div class="min-w-0 text-right"><!></div></div>',
  );
function Y(e, t) {
  let o = C(t, "layout", 3, "row");
  var d = M(),
    R = U(d);
  {
    var b = (s) => {
        var r = q(),
          a = c(r),
          m = c(a, !0);
        u(a);
        var l = x(a, 2);
        (k(l, () => t.children), u(r), g(() => y(m, t.label)), v(s, r));
      },
      A = (s) => {
        var r = D(),
          a = c(r),
          m = c(a, !0);
        u(a);
        var l = x(a, 2),
          L = c(l);
        (k(L, () => t.children), u(l), u(r), g(() => y(m, t.label)), v(s, r));
      };
    B(R, (s) => {
      o() === "stack" ? s(b) : s(A, -1);
    });
  }
  v(e, d);
}
export { Y as R, V as a, W as b, Q as c, X as r };
