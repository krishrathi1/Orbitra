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
      o = new t.Error().stack;
    o &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[o] = "27e4f71c-6e00-4cbb-94ca-476e64eab58a"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-27e4f71c-6e00-4cbb-94ca-476e64eab58a"));
  })();
} catch {}
const g = require("valibot");
function f(t) {
  const o = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (t) {
    for (const i in t)
      if (i !== "default") {
        const c = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(
          o,
          i,
          c.get ? c : { enumerable: !0, get: () => t[i] },
        );
      }
  }
  return ((o.default = t), Object.freeze(o));
}
const e = f(g),
  r = e.object({
    isError: e.literal(!0),
    error: e.pipe(e.string(), e.description("Why the call failed.")),
  }),
  n = e.pipe(e.string(), e.minLength(1), e.maxLength(80)),
  a = e.pipe(e.string(), e.trim(), e.minLength(1), e.maxLength(400)),
  h = e.pipe(e.string(), e.trim(), e.minLength(1), e.maxLength(300)),
  p = e.pipe(e.string(), e.trim(), e.minLength(1), e.maxLength(24)),
  s = e.picklist(["name", "company", "roleTitle"]),
  d = e.picklist(["classic", "modern"]),
  l = e.optional(
    e.pipe(
      e.object({
        questionId: n,
        option: e.pipe(e.number(), e.integer(), e.minValue(0), e.maxValue(4)),
      }),
      e.description(
        "Show this card only once the user picks this option (0-based) on that question, right after it and without waiting for you. On a confirmation, option 0 is Yes. Publish one card per option to branch the conversation; cards for options the user did not pick are never shown.",
      ),
    ),
  ),
  u = e.object({
    id: e.pipe(
      n,
      e.description(
        "Stable ID for this question. Reusing it does not create another card.",
      ),
    ),
    intro: e.optional(
      e.pipe(
        e.array(h),
        e.maxLength(2),
        e.description(
          "Speech bubbles shown before the question when it reads better in turns, e.g. why you ask or what you can do with the answer. One or two short spoken sentences each.",
        ),
      ),
    ),
    prompt: e.pipe(
      a,
      e.description(
        "The question itself, your last speech bubble before the choices. Plain text.",
      ),
    ),
    skipLabel: e.optional(
      e.pipe(
        p,
        e.description(
          "The button that skips the question, when Skip does not fit, e.g. Not now.",
        ),
      ),
    ),
    options: e.optional(e.pipe(e.array(a), e.maxLength(5))),
    placeholder: e.optional(
      e.pipe(
        e.string(),
        e.trim(),
        e.minLength(1),
        e.maxLength(80),
        e.description(
          'An example answer to this same question, shown in the reply field above your choices where the user can type or speak, e.g. "Revenue targets, markets, team size…" or "Tell me in your own words". Never a second question or a finding.',
        ),
      ),
    ),
    selectionMode: e.optional(
      e.pipe(
        e.picklist(["single", "multiple"]),
        e.description(
          "Required whenever you supply options, except on first tasks, which are always one pick. Choose multiple unless the answers truly exclude each other, then single. Older cards without a mode allow multiple answers.",
        ),
      ),
    ),
    confirmation: e.optional(e.object({ field: s, value: a })),
    firstTask: e.optional(
      e.pipe(
        e.boolean(),
        e.description(
          "Set when the options are first tasks for you to do, at least two. The user picks one, which ends setup, and you start it together in the visible chat.",
        ),
      ),
    ),
    layout: e.optional(
      e.pipe(
        d,
        e.description(
          "Set to make this the tab layout question, naming the layout you recommend for this user. The UI shows both layouts as pictures with yours selected, so leave out options. Classic is a traditional horizontal tab bar with tabs kept in a stable manual order. Modern keeps tabs in a sidebar sorted by recent use.",
        ),
      ),
    ),
    aiHistory: e.optional(
      e.pipe(
        e.boolean(),
        e.description(
          "Set to make this the AI tools question, asking which other AI tools they have tried and what worked and what did not. The UI shows a long written answer with ChatGPT, Claude, Gemini, and Copilot as pills that each start a sentence about that tool, so leave out options.",
        ),
      ),
    ),
    path: e.optional(
      e.pipe(
        e.boolean(),
        e.description(
          "Set to make this the card that offers the interview. The prompt is your pitch; the UI shows Interview me, marked as recommended, and I just want to get started, so leave out options.",
        ),
      ),
    ),
    onlyAfter: l,
    discovery: e.optional(
      e.pipe(
        e.boolean(),
        e.description(
          "Set to make this the question about how they found Orbitra. The UI shows fixed choices, so leave out options.",
        ),
      ),
    ),
    field: e.optional(
      e.pipe(
        s,
        e.description(
          "Profile field to save when answered. Omit for general questions about goals or preferences.",
        ),
      ),
    ),
  }),
  b = e.object({
    questions: e.pipe(e.array(u), e.minLength(1), e.maxLength(5)),
  }),
  w = e.object({
    id: e.pipe(
      n,
      e.description(
        "Exact provider ID from the supplied catalog, such as google or microsoft.",
      ),
    ),
    name: e.pipe(
      e.string(),
      e.trim(),
      e.minLength(1),
      e.maxLength(80),
      e.description(
        "Account purpose, such as Work account. Shown as Connect <name> and saved as the account label automatically.",
      ),
    ),
  }),
  y = e.optional(
    e.pipe(
      e.array(e.union([n, w])),
      e.maxLength(4),
      e.description(
        "Provider IDs for ordinary Connect buttons, or { id, name } objects for independent named accounts. Two objects may use the same provider with different names. Use the real provider ID, never an invented ID such as google-work. This does not connect or grant access.",
      ),
    ),
  ),
  m = e.object({
    id: n,
    title: e.pipe(
      e.string(),
      e.trim(),
      e.minLength(1),
      e.maxLength(140),
      e.description(
        "First speech bubble: one short spoken sentence, not a heading.",
      ),
    ),
    connectAppIds: y,
    emailCalendar: e.optional(
      e.pipe(
        e.boolean(),
        e.description(
          "Set on the card that offers their email and calendar, with only google, microsoft, or both when you cannot tell which they use. The UI adds logos of teams that use Orbitra. Offer other apps on a separate card.",
        ),
      ),
    ),
    addAccount: e.optional(
      e.pipe(
        e.boolean(),
        e.description(
          "Set when the user already connected these apps and this card offers connecting another account of them. Name the account in one of your two messages.",
        ),
      ),
    ),
    body: e.pipe(
      e.string(),
      e.trim(),
      e.minLength(1),
      e.maxLength(300),
      e.description(
        "Second speech bubble: one or two short spoken sentences with the useful next point.",
      ),
    ),
    more: e.optional(
      e.pipe(
        e.array(h),
        e.maxLength(2),
        e.description(
          "Further speech bubbles after body, when the point reads better in short turns.",
        ),
      ),
    ),
    continueLabel: e.optional(
      e.pipe(
        p,
        e.description(
          "The button that continues, when the card offers no connection. Keep it neutral, such as Next, never an opinion like Love it. Defaults to Continue.",
        ),
      ),
    ),
    question: e.optional(
      e.pipe(
        e.object({
          label: e.pipe(e.string(), e.trim(), e.minLength(1), e.maxLength(40)),
          answer: e.pipe(
            e.string(),
            e.trim(),
            e.minLength(1),
            e.maxLength(200),
          ),
        }),
        e.description(
          "A second button for a question the user may have about the card, and your one or two sentence spoken answer, shown in your speech bubble when they press it. For example, under a research finding, How do you do that? answered with how you research the web and read pages for them.",
        ),
      ),
    ),
    onlyAfter: l,
  });
e.variant("kind", [
  e.object({ kind: e.literal("questions"), ...b.entries }),
  e.object({ kind: e.literal("information"), ...m.entries }),
]);
const k = e.object({
  text: e.pipe(
    e.string(),
    e.trim(),
    e.minLength(1),
    e.maxLength(120),
    e.description(
      "What you are working toward right now, in one short sentence addressed to the user.",
    ),
  ),
});
e.union([
  e.object({ status: e.literal("queued"), ids: e.array(e.string()) }),
  r,
]);
e.union([e.object({ status: e.literal("shown") }), r]);
exports.askOnboardingQuestionsSchema = b;
exports.codeToolErrorSchema = r;
exports.onboardingLayoutSchema = d;
exports.onboardingProfileFieldSchema = s;
exports.onboardingQuestionSchema = u;
exports.presentOnboardingInformationSchema = m;
exports.showOnboardingFocusSchema = k;
