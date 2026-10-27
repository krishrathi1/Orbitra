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
      (e._sentryDebugIds[t] = "b66fe229-b974-49b2-8870-6be54e5c857b"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-b66fe229-b974-49b2-8870-6be54e5c857b"));
  })();
} catch {}
const U = require("node:crypto"),
  R = require("tokenx"),
  G = require("valibot");
function X(e) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const s in e)
      if (s !== "default") {
        const c = Object.getOwnPropertyDescriptor(e, s);
        Object.defineProperty(
          t,
          s,
          c.get ? c : { enumerable: !0, get: () => e[s] },
        );
      }
  }
  return ((t.default = e), Object.freeze(t));
}
const d = X(G),
  K = new Intl.Segmenter(void 0, { granularity: "word" }),
  z = new Set(
    `a an and are as at be been but by can could did do does for from had has have how
  i if in is it its me my no not of on or our please s should so some t than that the
  their them then there these they this those to us was we were what when where which
  who why will with would you your about tell know remember memories memory just
  really right now latest news thanks thank okay ok yes
  summarize summarise explain show find search look help hey hello hi
  är att av de den det du en ett från för har hur i jag kan med mig min nej ni och om
  på senaste som till vad var vem vi är
  à au aux avec ce ces c est dans de des du elle en et il je la le les leur lui ma
  me mes mon ne nouvelles nous ou par pas pour qu quelle quelles quel quels qui sa
  se ses son sont sur ta te tes toi ton tu un une vos votre vous dernières disponibles`.split(
      /\s+/,
    ),
  ),
  Z = new Set(
    "he him his she her hers it its they them their that this those these han honom hans hon henne hennes den det dem il lui elle leur ça cela".split(
      " ",
    ),
  ),
  J = new Set(
    "draft write send email message ask contact schedule create build compare".split(
      " ",
    ),
  );
function T(e) {
  const t = [];
  for (const s of K.segment(e.normalize("NFKC")))
    s.isWordLike &&
      t.push(...s.segment.split(/[\p{P}\p{S}]+/u).filter(Boolean));
  return t;
}
function A(e) {
  const t = [];
  let s = [],
    c = 0;
  const l = e.normalize("NFKC");
  for (const i of K.segment(l)) {
    if (!i.isWordLike) continue;
    s.length > 0 && /[^\s]/u.test(l.slice(c, i.index)) && (t.push(s), (s = []));
    const u = c === 0 || /[.!?\n]/u.test(l.slice(c, i.index));
    for (const o of i.segment.split(/[\p{P}\p{S}]+/u).filter(Boolean)) {
      const r = o.toLowerCase();
      (u && J.has(r)) ||
        (new RegExp("^\\p{Lu}", "u").test(o) &&
        (!z.has(r) || (!u && o.length > 1 && o !== o.toUpperCase()))
          ? s.push(r)
          : s.length > 0 && (t.push(s), (s = [])));
    }
    c = i.index + i.segment.length;
  }
  return (s.length > 0 && t.push(s), t);
}
function I(e) {
  const t = T(e).map((c) => c.toLowerCase());
  let s = A(e);
  return (
    t.length === 1 &&
      new RegExp("^\\p{Lu}", "u").test(e.trim()) &&
      !["thanks", "thank", "okay", "ok", "yes", "no"].includes(t[0]) &&
      (s = [t]),
    {
      words: t,
      terms: new Set([...t.filter((c) => !z.has(c)), ...s.flat()]),
      subjects: s,
    }
  );
}
function ee(e) {
  const t = typeof e == "string" ? e : e.text,
    s = I(t.slice(0, 8192)),
    c =
      typeof e == "string"
        ? []
        : e.recentMessages.slice(0, 4).map((o) => I(o.slice(0, 1024))),
    l =
      s.subjects.length === 0 &&
      s.words.some(
        (o) =>
          Z.has(o) &&
          (!["this", "that", "those", "these"].includes(o) ||
            s.terms.size <= 2),
      );
  let i = s.subjects;
  i.length === 0 &&
    l &&
    (i = c.find((o) => o.subjects.length > 0)?.subjects ?? []);
  const u = new Set(s.terms);
  if (l) for (const o of c) for (const r of o.terms) u.add(r);
  return { current: s, context: c, subjects: i, terms: u, useContext: l };
}
function v(e, t) {
  return t.length > 0 && e.some((s, c) => t.every((l, i) => e[c + i] === l));
}
const _ = 5,
  D = 800,
  L = 50,
  te = 60,
  N = 864e5,
  ne = d.object({
    length: d.pipe(d.number(), d.integer(), d.minValue(0)),
    frequencies: d.array(
      d.tuple([d.string(), d.pipe(d.number(), d.integer(), d.minValue(1))]),
    ),
    tags: d.array(d.array(d.string())),
    words: d.array(d.string()),
    subjects: d.array(d.array(d.string())),
    textTokens: d.pipe(d.number(), d.integer(), d.minValue(0)),
    textKey: d.string(),
  });
function se(e) {
  let t = 0;
  const s = new Map(),
    c = P(e.text),
    l = (e.tags ?? []).map((i) => [...T(i)].map((u) => u.toLowerCase()));
  for (const [i, u] of [
    [c.words, 1],
    [l.flat(), 2],
  ])
    for (const o of i) ((t += 1), s.set(o, (s.get(o) ?? 0) + u));
  return { length: t, frequencies: [...s], tags: l, ...c };
}
function P(e) {
  return { words: T(e).map((t) => t.toLowerCase()), subjects: A(e), ...$(e) };
}
function oe(e) {
  return "textKey" in e ? e : $(e.text);
}
function $(e) {
  const t = e.normalize("NFKC").replace(/\s+/g, " ").trim().toLowerCase();
  return {
    textKey: U.createHash("sha256").update(t).digest("base64url"),
    textTokens: R.estimateTokenCount(e),
  };
}
function re(e) {
  return [...e.terms].filter((t) => e.documentFrequencies.has(t));
}
function B(e, t, s) {
  const c = e.tokenCount / Math.max(1, e.documentCount),
    l = [e.query.current, ...(e.query.useContext ? e.query.context : [])],
    i = [...new Map(t.map((r) => [r.memory.id, r])).values()].filter(
      ({ document: r }) => r.frequencies.some(([a]) => e.terms.has(a)),
    );
  let u = e.query.current.subjects;
  if (u.length === 0) {
    const r = i
        .flatMap(({ document: n }) => [...n.subjects, ...n.tags])
        .flatMap((n) =>
          v(e.query.current.words, n)
            ? [n]
            : n[0] && e.query.current.terms.has(n[0])
              ? [[n[0]]]
              : [],
        ),
      a = [...new Map(r.map((n) => [n.join(" "), n])).values()];
    ((u = a.filter((n) => !a.some((m) => m.length > n.length && v(m, n)))),
      u.length === 0 && (u = e.query.subjects));
  }
  const o = [];
  for (const r of i) {
    const { memory: a, document: n } = r,
      m = [n.words, ...n.tags],
      f = new Set(m.flat()),
      g = (h) => m.some((p) => v(p, h)),
      w = u.filter(g);
    if (u.length > 0 && w.length === 0) continue;
    const j = new Map(n.frequencies),
      q = (h) => {
        let p = 0;
        for (const y of h.terms) {
          const S = j.get(y) ?? 0;
          if (S === 0) continue;
          const E = e.documentFrequencies.get(y) ?? 0,
            Y = Math.log1p((e.documentCount - E + 0.5) / (E + 0.5)),
            H = 1.2 * (0.25 + (0.75 * n.length) / Math.max(1, c));
          p += (Y * S * 2.2) / (S + H);
        }
        return p;
      },
      b = l.map(q),
      x = b.findIndex((h) => h > 0);
    if (x === -1) continue;
    const M = l[x] ?? e.query.current;
    let C = 0;
    for (let h = 0; h < M.words.length; h += 1)
      if (M.terms.has(M.words[h]))
        for (let p = 1; p <= Math.min(6, M.words.length - h); p += 1) {
          const y = M.words.slice(h, h + p);
          if (!y.every((S) => M.terms.has(S)) || !g(y)) break;
          C = Math.max(C, p);
        }
    const Q = [...n.subjects, ...n.tags]
        .filter((h) => w.some((p) => v(h, p)))
        .map((h) => h.join(" ")),
      W = Math.max(
        0,
        Math.floor(s / N) - Date.parse(`${a.date}T00:00:00Z`) / N,
      );
    o.push({
      ...a,
      textKey: n.textKey,
      textTokens: n.textTokens,
      candidate: r,
      priority: x,
      subjectMatch: Math.max(0, ...w.map((h) => h.length)),
      subjects: [...new Set(Q)],
      phraseMatch: C,
      relevanceScore: b[x] ?? 0,
      contextScore: e.query.context.reduce(
        (h, p) => h + [...p.terms].filter((y) => f.has(y)).length,
        0,
      ),
      recencyScore: 2 ** (-W / 30),
      score: 0,
    });
  }
  return o;
}
function O(e, t) {
  return e.priority - t.priority || t.subjectMatch - e.subjectMatch;
}
function F(e, t) {
  return (
    O(e, t) ||
    t.score - e.score ||
    t.contextScore - e.contextScore ||
    t.date.localeCompare(e.date) ||
    e.id.localeCompare(t.id)
  );
}
function V(e) {
  return e + 24;
}
function ce(e, t = _, s = D) {
  const c = [];
  let l = 0;
  for (const i of e) {
    if (c.length === t) break;
    const u = V(R.estimateTokenCount(i.text));
    l + u > s || ((l += u), c.push(i));
  }
  return c;
}
function k(e, t = _, s = D) {
  const c = [],
    l = new Set(),
    i = new Set();
  let u = 0;
  const o = (r) => {
    const a = oe(r),
      n = `${r.contributorId ?? ""}:${a.textKey}`,
      m = V(a.textTokens);
    if (!(l.has(n) || u + m > s || c.length >= t)) {
      (l.add(n), (u += m), c.push(r));
      for (const f of r.subjects) i.add(f);
    }
  };
  for (const r of [
    ...new Set(e.map((a) => `${a.priority}:${a.subjectMatch}`)),
  ]) {
    const a = e.filter((n) => `${n.priority}:${n.subjectMatch}` === r);
    for (const n of a)
      (c.length === 0 || n.subjects.some((m) => !i.has(m))) && o(n);
    for (const n of a) o(n);
  }
  return c;
}
function ae(e, t, s) {
  const c = B(e, t, s),
    l = [...c].sort(
      (o, r) =>
        O(o, r) ||
        r.relevanceScore - o.relevanceScore ||
        r.contextScore - o.contextScore ||
        r.date.localeCompare(o.date) ||
        o.id.localeCompare(r.id),
    ),
    i = [...c].sort(
      (o, r) =>
        O(o, r) ||
        r.phraseMatch - o.phraseMatch ||
        r.relevanceScore - o.relevanceScore ||
        r.contextScore - o.contextScore ||
        r.date.localeCompare(o.date) ||
        o.id.localeCompare(r.id),
    ),
    u = [...k(l, L, 1 / 0), ...k(i, L, 1 / 0)];
  return [...new Map(u.map((o) => [o.id, o.candidate])).values()];
}
function ie(e, t, s, c = { limit: _, tokenBudget: D }) {
  const l = B(e, t, s),
    i = [...l]
      .filter((a) => a.relevanceScore > 0)
      .sort(
        (a, n) =>
          n.relevanceScore - a.relevanceScore || a.id.localeCompare(n.id),
      ),
    u = [...l]
      .filter((a) => a.phraseMatch > 0)
      .sort(
        (a, n) =>
          n.phraseMatch - a.phraseMatch ||
          n.relevanceScore - a.relevanceScore ||
          a.id.localeCompare(n.id),
      ),
    o = new Map();
  for (const [a, n] of [
    [i, (m, f) => m.relevanceScore === f.relevanceScore],
    [
      u,
      (m, f) =>
        m.phraseMatch === f.phraseMatch &&
        m.relevanceScore === f.relevanceScore,
    ],
  ]) {
    let m = 1;
    for (const [f, g] of a.entries())
      (f > 0 && !n(g, a[f - 1]) && (m = f + 1),
        o.set(g.id, (o.get(g.id) ?? 0) + 1 / (te + m)));
  }
  const r = l.map((a) => ({ ...a, score: o.get(a.id) ?? 0 }));
  return (
    r.sort(F),
    k(r, c.limit, c.tokenBudget).map(
      ({
        id: a,
        date: n,
        relevanceScore: m,
        recencyScore: f,
        score: g,
        contextScore: w,
        priority: j,
        subjectMatch: q,
        subjects: b,
      }) => ({
        id: a,
        date: n,
        relevanceScore: m,
        recencyScore: f,
        score: g,
        contextScore: w,
        priority: j,
        subjectMatch: q,
        subjects: b,
      }),
    )
  );
}
exports.OptMemSearchDocumentSchema = ne;
exports.compareOptMemMatches = F;
exports.createOptMemRetrievalQuery = ee;
exports.createOptMemSearchDocument = se;
exports.fitOptMemMemories = ce;
exports.optMemCandidateTerms = re;
exports.optMemSearchText = P;
exports.retainOptMemCandidates = ae;
exports.selectOptMemEvidence = k;
exports.selectRelevantOptMemMemories = ie;
