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
      (e._sentryDebugIds[t] = "15d0ac1e-d83e-4094-b07c-b72f3cfdcd8a"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-15d0ac1e-d83e-4094-b07c-b72f3cfdcd8a"));
  })();
} catch {}
const s = require("valibot");
function u(e) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const n in e)
      if (n !== "default") {
        const r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(
          t,
          n,
          r.get ? r : { enumerable: !0, get: () => e[n] },
        );
      }
  }
  return ((t.default = e), Object.freeze(t));
}
const i = u(s),
  g = "gemini-embedding-001",
  o = 768,
  f = `${g}:${o}:f16`,
  c = 8192;
i.strictObject({
  text: i.pipe(i.string(), i.trim(), i.minLength(1), i.maxLength(c)),
});
function b(e) {
  try {
    return atob(e).length === o * 2;
  } catch {
    return !1;
  }
}
const E = i.strictObject({
    model: i.literal(f),
    vector: i.pipe(
      i.string(),
      i.maxLength(8192),
      i.check(b, `OptMem query vectors have ${o} values`),
    ),
  }),
  m = new Float32Array(1);
new Uint32Array(m.buffer);
let d = null;
function l(e) {
  const t = e & 32768 ? -1 : 1,
    n = (e >>> 10) & 31,
    r = e & 1023;
  return n === 0
    ? t * r * 2 ** -24
    : n === 31
      ? r === 0
        ? t * (1 / 0)
        : Number.NaN
      : t * (1024 + r) * 2 ** (n - 25);
}
function M(e) {
  const t = atob(e);
  if (t.length !== o * 2)
    throw new Error("OptMem embedding has the wrong length");
  const n = new DataView(Uint8Array.from(t, (r) => r.charCodeAt(0)).buffer);
  return Float32Array.from({ length: o }, (r, a) => l(n.getUint16(a * 2, !0)));
}
function h() {
  if (!d) {
    d = new Float32Array(65536);
    for (let e = 0; e < d.length; e += 1) d[e] = l(e);
  }
  return d;
}
function p(e, t) {
  if (e.length !== o || t.length !== o * 2)
    throw new Error("OptMem embedding has the wrong length");
  const n = h();
  let r = 0;
  for (let a = 0; a < o; a += 1) r += e[a] * n[t[2 * a] | (t[2 * a + 1] << 8)];
  return r;
}
exports.OPTMEM_EMBEDDING_DIMENSIONS = o;
exports.OPTMEM_EMBEDDING_FORMAT = f;
exports.OPTMEM_QUERY_EMBEDDING_MAX_CHARS = c;
exports.OptMemQueryEmbeddingResponseSchema = E;
exports.decodeOptMemEmbedding = M;
exports.optMemEmbeddingSimilarity = p;
