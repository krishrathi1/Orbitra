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
      (e._sentryDebugIds[t] = "0c04afb8-505c-42f8-891c-f21a8403e80a"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-0c04afb8-505c-42f8-891c-f21a8403e80a"));
  })();
} catch {}
const c = require("node:fs/promises"),
  w = require("./unicode-CSAGP0Z8.js"),
  S = require("valibot"),
  d = require("../main-app.js");
function b(e) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const o in e)
      if (o !== "default") {
        const i = Object.getOwnPropertyDescriptor(e, o);
        Object.defineProperty(
          t,
          o,
          i.get ? i : { enumerable: !0, get: () => e[o] },
        );
      }
  }
  return ((t.default = e), Object.freeze(t));
}
const n = b(S),
  g = 8;
function a(e, t) {
  return n.pipe(
    n.string(),
    n.maxLength(e),
    n.description(t),
    n.transform(w.sanitizeUnpairedSurrogates),
    n.trim(),
    n.minLength(1),
    n.maxLength(e),
  );
}
const l = n.object({
    id: n.pipe(
      n.string(),
      n.maxLength(80),
      n.regex(/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/),
    ),
    emoji: n.optional(a(16, "One emoji that fits it.")),
    label: a(80, "A short name, e.g. Summarize my week."),
    schedule: a(80, "When it runs, e.g. Every weekday morning."),
    prompt: a(
      600,
      "What it does on each run, in the first person and self-contained.",
    ),
  }),
  u = [
    {
      id: "manage-inbox",
      emoji: "📬",
      label: "Manage my inbox",
      schedule: "Every weekday morning",
      prompt:
        "Go through my new email, flag what needs my attention, draft replies for me to review, and tidy up the rest.",
    },
    {
      id: "morning-priorities",
      emoji: "✅",
      label: "Plan my top priorities",
      schedule: "Every weekday morning",
      prompt:
        "Put together a short list of my highest-priority to-dos for today from my email, calendar, and open work.",
    },
    {
      id: "industry-news",
      emoji: "📰",
      label: "Summarize industry news",
      schedule: "Every Monday morning",
      prompt:
        "Summarize the most important news and developments in my industry from the past week and what they mean for my work.",
    },
    {
      id: "week-summary",
      emoji: "🗓️",
      label: "Summarize my week",
      schedule: "Every Friday afternoon",
      prompt:
        "Summarize my week: to-dos I finished and still have open, important emails and conversations, and progress on my initiatives. End with what to focus on next week.",
    },
    {
      id: "orbitra-tips",
      emoji: "🍓",
      label: "Personalized Orbitra tips",
      schedule: "Once a week",
      prompt:
        "Suggest one or two new ways I could use Orbitra, based on my work and what I have been doing lately.",
    },
    {
      id: "follow-ups",
      emoji: "🔁",
      label: "Catch open follow-ups",
      schedule: "Every weekday afternoon",
      prompt:
        "Find emails and conversations waiting on my reply or worth chasing, and draft follow-ups for me to review.",
    },
  ],
  v = n.pipe(
    n.array(l),
    n.maxLength(g),
    n.check(
      (e) => new Set(e.map(({ id: t }) => t)).size === e.length,
      "Routine IDs must be unique",
    ),
    n.description(
      `Recurring routines the user may want, shown to them later as ideas. Tailor the label, schedule, and prompt of these defaults to what you learned, keeping their IDs: ${u.map(({ id: e, label: t, schedule: o }) => `${e} (${t}, ${o})`).join("; ")}. Drop defaults that do not fit, add up to two of your own for recurring work they mentioned, and keep an even count. Do not create these routines or mention them to the user.`,
    ),
  );
function E(e) {
  const t = e?.length ? [...e] : [...u];
  if (t.length % 2 === 0) return t;
  if (t.length > 1) return t.slice(0, -1);
  const o = u.find(({ id: i }) => i !== t[0].id);
  return [...t, o];
}
const I = n.object({
  ...l.entries,
  resolvedAt: n.optional(n.pipe(n.string(), n.isoTimestamp())),
});
function m(e) {
  return e instanceof Error && "code" in e && e.code === "ENOENT";
}
async function f(e) {
  let t;
  try {
    t = await c.readFile(e, "utf8");
  } catch (i) {
    if (m(i)) return { version: 1, suggestions: [] };
    throw i;
  }
  const o = await Promise.try(() => JSON.parse(t)).catch(() => null);
  return typeof o != "object" ||
    o === null ||
    !("version" in o) ||
    o.version !== 1 ||
    !("suggestions" in o) ||
    !Array.isArray(o.suggestions)
    ? null
    : {
        version: 1,
        suggestions: o.suggestions.flatMap((i) => {
          const r = n.safeParse(I, i);
          return r.success ? [r.output] : [];
        }),
      };
}
function p(e) {
  return (e?.suggestions ?? []).flatMap(({ resolvedAt: t, ...o }) =>
    t ? [] : [o],
  );
}
function y(e, t) {
  return d.atomicWriteFile(
    e,
    `${JSON.stringify(t, null, 2)}
`,
  );
}
async function k(e) {
  return p(await f(e));
}
function O(e, t) {
  return d.queueFileWrite(e, async () =>
    (await c.access(e).then(
      () => !0,
      (i) => {
        if (m(i)) return !1;
        throw i;
      },
    ))
      ? !1
      : (await y(e, { version: 1, suggestions: E(t) }), !0),
  );
}
function T(e, t) {
  return d.queueFileWrite(e, async () => {
    const o = await f(e);
    if (!o) return null;
    const i = new Date().toISOString(),
      r = {
        version: 1,
        suggestions: o.suggestions.map((s) =>
          s.id === t && !s.resolvedAt ? { ...s, resolvedAt: i } : s,
        ),
      };
    return (
      r.suggestions.some((s, h) => s !== o.suggestions[h]) && (await y(e, r)),
      p(r)
    );
  });
}
exports.ROUTINE_SUGGESTION_LIMIT = g;
exports.loadRoutineSuggestions = k;
exports.resolveRoutineSuggestion = T;
exports.routineSuggestionSchema = l;
exports.routineSuggestionsSchema = v;
exports.saveOnboardingRoutineSuggestions = O;
