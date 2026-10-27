const R = 40,
  A = 100,
  T = 150,
  P = "cubic-bezier(0.3333333333, 0.6666666667, 0.6666666667, 1)";
const S = 0.4,
  C = 0.82,
  n = 1.7777777777777777,
  I = 12,
  t = 40;
function W(E) {
  return typeof E != "number" || !Number.isFinite(E)
    ? 0.64
    : E < 0.4
      ? 0.4
      : E > 0.82
        ? 0.82
        : _(E);
}
function _(E) {
  return Math.round(E * 1e3) / 1e3;
}
export {
  S as M,
  t as P,
  T as W,
  R as a,
  P as b,
  A as c,
  I as d,
  n as e,
  C as f,
  W as n,
};
