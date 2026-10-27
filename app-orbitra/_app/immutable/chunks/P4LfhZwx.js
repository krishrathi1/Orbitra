import { W as a } from "./CQlQX8Zd.js";
function o(r) {
  return 1 - Math.pow(1 - r, 4);
}
function t(r) {
  return r * r;
}
const e = Math.round(a * 0.72);
function i(r) {
  return {
    duration: a,
    easing: o,
    css: (n) =>
      `opacity:${n};transform:translateY(${(1 - n) * -3}px) scaleX(${0.985 + 0.015 * n}) scaleY(${0.96 + 0.04 * n});transform-origin:top center`,
  };
}
function c(r) {
  return {
    duration: e,
    easing: t,
    css: (n) =>
      `opacity:${n};transform:translateY(${(1 - n) * -2}px) scaleX(${0.995 + 0.005 * n}) scaleY(${0.985 + 0.015 * n});transform-origin:top center`,
  };
}
export { c as a, i as w };
