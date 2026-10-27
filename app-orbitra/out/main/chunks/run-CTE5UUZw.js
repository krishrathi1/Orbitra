"use strict";
(function () {
  try {
    var n =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    n.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      t = new n.Error().stack;
    t &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[t] = "2633f9df-3d67-4fc1-9a02-c9234060b270"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-2633f9df-3d67-4fc1-9a02-c9234060b270"));
  })();
} catch {}
const y = require("node:fs/promises"),
  X = require("node:path"),
  K = require("valibot"),
  m = require("./onboarding-BugjMquY.js"),
  k = require("./onboarding-BMM5mweS.js"),
  N = require("../main-app.js");
function Z(n) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (n) {
    for (const i in n)
      if (i !== "default") {
        const r = Object.getOwnPropertyDescriptor(n, i);
        Object.defineProperty(
          t,
          i,
          r.get ? r : { enumerable: !0, get: () => n[i] },
        );
      }
  }
  return ((t.default = n), Object.freeze(t));
}
const e = Z(K),
  O = e.pipe(e.number(), e.finite(), e.minValue(0), e.maxValue(1)),
  W = e.object({
    type: e.literal("choice"),
    choice: e.picklist(["classic", "modern"]),
    probabilities: e.object({ classic: O, modern: O }),
    confidence: O,
  }),
  j = e.object({
    ...W.entries,
    model: e.string(),
    evaluatedAt: e.number(),
    elapsedMs: e.number(),
    inputTokens: e.number(),
    outputTokens: e.number(),
  }),
  R = 48e3;
e.object({ context: e.pipe(e.string(), e.minLength(1), e.maxLength(R)) });
const $ = e.variant("status", [
    e.object({ status: e.literal("ready"), recommendation: j }),
    e.object({ status: e.literal("unavailable") }),
  ]),
  _ = 6e3,
  D = e.variant("kind", [
    e.object({ kind: e.literal("confirm") }),
    e.object({
      kind: e.literal("option"),
      index: e.pipe(e.number(), e.integer(), e.minValue(0)),
    }),
    e.pipe(
      e.object({
        kind: e.literal("options"),
        indices: e.pipe(
          e.array(e.pipe(e.number(), e.integer(), e.minValue(0))),
          e.minLength(1),
          e.maxLength(5),
          e.check(
            (n) => new Set(n).size === n.length,
            "Choose each option once.",
          ),
        ),
        other: e.optional(
          e.pipe(e.string(), e.trim(), e.minLength(1), e.maxLength(_)),
        ),
      }),
      e.transform((n) => ({
        ...n,
        indices: n.indices.toSorted((t, i) => t - i),
      })),
    ),
    e.object({
      kind: e.literal("text"),
      value: e.pipe(e.string(), e.trim(), e.minLength(1), e.maxLength(_)),
    }),
    e.object({ kind: e.literal("layout"), choice: k.onboardingLayoutSchema }),
    e.object({ kind: e.literal("dismiss") }),
    e.object({ kind: e.literal("acknowledge") }),
  ]),
  ee = e.object({
    content: e.variant("kind", [
      e.object({
        kind: e.literal("question"),
        ...k.onboardingQuestionSchema.entries,
      }),
      e.object({
        kind: e.literal("information"),
        ...k.presentOnboardingInformationSchema.entries,
        title: e.pipe(e.string(), e.trim(), e.minLength(1), e.maxLength(400)),
        body: e.pipe(e.string(), e.trim(), e.minLength(1), e.maxLength(1600)),
      }),
    ]),
    createdAt: e.number(),
    held: e.optional(e.boolean()),
    connections: e.optional(
      e.array(
        e.object({
          offerId: e.string(),
          appId: e.string(),
          connectionId: e.string(),
        }),
      ),
    ),
    resolution: e.optional(
      e.object({ answer: D, text: e.string(), answeredAt: e.number() }),
    ),
  }),
  ne = e.object({
    runId: e.string(),
    id: e.string(),
    answer: D,
    replaceAnsweredAt: e.optional(e.number()),
  }),
  te = e.object({
    runId: e.pipe(e.string(), e.minLength(1), e.maxLength(128)),
    cardId: e.pipe(e.string(), e.minLength(1), e.maxLength(80)),
    offerId: e.pipe(e.string(), e.minLength(1), e.maxLength(1024)),
    appId: e.pipe(e.string(), e.minLength(1), e.maxLength(80)),
    connectionId: e.pipe(e.string(), e.minLength(1), e.maxLength(256)),
  }),
  oe = e.object({
    runId: e.pipe(e.string(), e.minLength(1), e.maxLength(128)),
    cardId: e.pipe(e.string(), e.minLength(1), e.maxLength(80)),
    attemptId: e.pipe(e.string(), e.minLength(1), e.maxLength(128)),
  }),
  ie = { quick: 12, interview: 20 },
  S = [
    { path: "interview", label: "Interview me", recommended: !0 },
    { path: "quick", label: "I just want to get started", recommended: !1 },
  ],
  re = [
    { source: "friend_or_colleague", label: "A friend or colleague" },
    { source: "linkedin", label: "LinkedIn" },
    {
      source: "other_social",
      label: "Other social media (X, YouTube, TikTok)",
    },
    { source: "search_or_ai", label: "Google or an AI assistant like ChatGPT" },
    {
      source: "newsletter_podcast_article",
      label: "Newsletter, podcast or article",
    },
  ],
  P = ["path", "aiHistory", "discovery"],
  ae = ["aiHistory", "discovery"];
function se(n) {
  return n.kind === "question" && P.some((t) => n[t]);
}
function T(n) {
  return n.kind === "question" && ae.some((t) => n[t]);
}
function ce(n) {
  return (
    !!(n.confirmation || n.discovery || n.path || n.firstTask) ||
    n.selectionMode === "single"
  );
}
function de(n) {
  const i = n?.find(({ content: r }) => r.kind === "question" && r.path)
    ?.resolution?.answer;
  if (i)
    return i.kind === "option"
      ? (S[i.index]?.path ?? "quick")
      : i.kind === "options"
        ? (S[i.indices[0]]?.path ?? "quick")
        : "quick";
}
const le = 3,
  ue = new Set(["google", "microsoft"]);
function pe(n, t, i) {
  const r = ie[de(n) ?? "quick"],
    a =
      t.kind === "questions"
        ? t.questions.map((o) => ({ kind: "question", ...o }))
        : [t],
    s = [...n];
  for (const o of a) {
    if (o.kind === "information" && o.question && o.connectAppIds?.length)
      throw new Error(
        "A connection offer uses Skip as its second button. Leave out question.",
      );
    if (o.kind === "information") {
      const c = (o.connectAppIds ?? []).filter((f) => typeof f != "string");
      if (new Set(c.map(q)).size !== c.length)
        throw new Error(
          "Each named account needs a distinct provider and name.",
        );
      const h = (o.connectAppIds ?? []).map((f) =>
          typeof f == "string" ? f : f.id,
        ),
        u = h.filter((f) => ue.has(f));
      if (
        o.emailCalendar
          ? !h.length || u.length !== h.length
          : u.length > 0 && u.length !== h.length
      )
        throw new Error(
          "Offer email and calendar on their own card with emailCalendar set and only google or microsoft, then other apps on a separate card.",
        );
    }
    const l = s.find((c) => c.content.id === o.id);
    if (l && z(s).includes(l) && fe(l.content, o)) {
      s[s.indexOf(l)] = { ...l, content: o };
      continue;
    }
    if (l) {
      if (JSON.stringify(l.content) !== JSON.stringify(o))
        throw new Error(
          "This card is already in front of the user or answered, so it cannot change. Retry with its original content. Use a new ID only for a different card; do not repeat the same question.",
        );
      continue;
    }
    if (o.kind === "information") {
      const c = new Set(
        s.flatMap(({ content: u, resolution: f }) =>
          u.kind === "information" && !f
            ? (u.connectAppIds ?? []).map((b) =>
                typeof b == "string" ? b : b.id,
              )
            : [],
        ),
      );
      if (
        (o.connectAppIds ?? []).some((u) =>
          c.has(typeof u == "string" ? u : u.id),
        )
      )
        throw new Error(
          "The first connection request for this provider has not been answered yet. Wait until it is completed or skipped before publishing another. Continue other research while you wait. If skipped, only offer it again with a better, specific use case grounded in what you have learned. Do not ask to reconnect an account that is already connected.",
        );
    }
    if (o.kind === "question" && o.placeholder?.trim().endsWith("?"))
      throw new Error(
        'The placeholder shows how to answer this question in their own words, e.g. "Revenue targets, markets, team size…". Ask any other question on its own card.',
      );
    if (
      o.kind === "question" &&
      o.options?.length &&
      !o.selectionMode &&
      !o.confirmation &&
      !o.firstTask
    )
      throw new Error(
        "Set selectionMode with options: multiple unless the replies truly exclude each other, then single.",
      );
    if ((o.kind === "question" ? o.prompt : o.title).trim().length < 4)
      throw new Error(
        "The user sees every card you publish right away. Write the full question or message, and never publish a test card.",
      );
    if (
      o.kind === "question" &&
      o.confirmation &&
      (o.field || o.options?.length)
    )
      throw new Error(
        "A confirmation uses its own field and the standard confirmation buttons.",
      );
    if (
      o.kind === "question" &&
      o.firstTask &&
      (o.confirmation || o.field || (o.options?.length ?? 0) < 2)
    )
      throw new Error(
        "A first-task question needs at least two task options and no profile field.",
      );
    if (
      o.kind === "question" &&
      o.layout &&
      (o.confirmation || o.field || o.firstTask || o.options?.length)
    )
      throw new Error(
        "The layout question shows its own two choices. Leave out the other fields.",
      );
    if (
      o.kind === "question" &&
      o.layout &&
      s.some((c) => c.content.kind === "question" && c.content.layout)
    )
      throw new Error("The layout question was already asked.");
    if (o.onlyAfter) {
      const { questionId: c, option: h } = o.onlyAfter,
        u = s.find(({ content: b }) => b.id === c)?.content;
      if (
        u?.kind !== "question" ||
        (o.kind === "question" &&
          (o.firstTask || o.layout || o.path || o.confirmation || T(o)))
      )
        throw new Error(
          "onlyAfter needs a question published earlier or in the same call, on an ordinary card.",
        );
      const f = u.confirmation ? 1 : I(u).length;
      if (h >= f)
        throw new Error(
          "onlyAfter names an option that question does not have.",
        );
    }
    const p = o.kind === "question" ? P.filter((c) => o[c]) : [];
    for (const c of p) {
      if (
        o.kind !== "question" ||
        p.length > 1 ||
        o.confirmation ||
        o.field ||
        o.firstTask ||
        o.layout ||
        o.options?.length
      )
        throw new Error(
          "This question shows its own choices. Leave out the other fields.",
        );
      if (s.some((h) => h.content.kind === "question" && h.content[c]))
        throw new Error("This question was already asked.");
    }
    if (
      o.kind === "question" &&
      !o.firstTask &&
      !o.layout &&
      !p.length &&
      s.filter(
        (c) =>
          c.content.kind === "question" &&
          !c.content.firstTask &&
          !c.content.layout &&
          !se(c.content),
      ).length >= r
    )
      throw new Error(
        `You have asked ${r} questions. Continue with what you know and present findings instead.`,
      );
    if (s.filter((c) => !c.resolution && E(c, s)).length >= le)
      throw new Error(
        "Three cards are already waiting. Keep researching, and publish the next card once their answers show what to ask.",
      );
    s.push({ content: o, createdAt: i, ...(T(o) ? { held: !0 } : {}) });
  }
  return s;
}
function z(n) {
  const t = ge(n).filter((r) => !r.resolution),
    i = t.find((r) => E(r, n));
  return t.filter((r) => r !== i);
}
function fe(n, t) {
  return n.kind !== t.kind ||
    JSON.stringify(n.onlyAfter) !== JSON.stringify(t.onlyAfter)
    ? !1
    : n.kind === "information" || t.kind === "information"
      ? !0
      : [
          "path",
          "layout",
          "firstTask",
          "aiHistory",
          "discovery",
          "confirmation",
        ].every((r) => !!n[r] == !!t[r]);
}
function he(n) {
  const t = n
      .flatMap(({ content: d, resolution: p }) =>
        p ? [{ content: d, at: p.answeredAt }] : [],
      )
      .toSorted((d, p) => d.at - p.at)
      .at(-1),
    i = t !== void 0 && !T(t.content),
    r = n.some((d) => !d.resolution && E(d, n)),
    a = n.some(({ content: d }) => d.kind === "question" && d.firstTask),
    s = n.find((d) => d.held);
  if (!i || r || a || !s) return [...n];
  const { held: o, ...l } = s;
  return [...n.filter((d) => d !== s), l];
}
function ge(n) {
  const t = [],
    i = (r) => {
      t.push(r);
      for (const a of n)
        a.content.onlyAfter?.questionId === r.content.id && i(a);
    };
  for (const r of n) {
    const a = r.content.onlyAfter?.questionId;
    (a && n.some(({ content: s }) => s.id === a)) || i(r);
  }
  return t;
}
function E(n, t) {
  if (n.held) return !1;
  if (!n.content.onlyAfter) return !0;
  const { questionId: i, option: r } = n.content.onlyAfter,
    a = t.find(({ content: s }) => s.id === i)?.resolution?.answer;
  return a?.kind === "confirm"
    ? r === 0
    : a?.kind === "option"
      ? a.index === r
      : a?.kind === "options"
        ? a.indices.includes(r)
        : !1;
}
function me(n, t, i, r) {
  if (n.resolution) {
    if (JSON.stringify(n.resolution.answer) === JSON.stringify(t))
      return { card: n };
    if (r !== n.resolution.answeredAt)
      throw new Error(
        "This card was already answered. Refresh to see the latest result.",
      );
  }
  const a = n.content;
  let s, o;
  switch (t.kind) {
    case "dismiss":
      s = "Skipped";
      break;
    case "acknowledge":
      if (a.kind !== "information")
        throw new Error("This card needs an answer.");
      s = "Seen";
      break;
    case "layout":
      if (a.kind !== "question" || !a.layout)
        throw new Error("This card is not the layout question.");
      s = t.choice === "modern" ? "Modern" : "Classic";
      break;
    case "confirm":
      if (a.kind !== "question" || !a.confirmation)
        throw new Error("This card is not a confirmation.");
      ((o = a.confirmation.field), (s = a.confirmation.value));
      break;
    case "option": {
      if (a.kind !== "question" || a.confirmation)
        throw new Error("This card has no quick replies.");
      const l = I(a)[t.index];
      if (!l) throw new Error("This option is unavailable.");
      ((o = a.field), (s = l));
      break;
    }
    case "options": {
      if (a.kind !== "question" || a.confirmation || a.layout)
        throw new Error("This card has no quick replies.");
      if (ce(a) && t.indices.length !== 1)
        throw new Error("Choose one option, or write your own answer instead.");
      if (!t.indices.length || new Set(t.indices).size !== t.indices.length)
        throw new Error("Choose each option once.");
      const l = t.indices.map((d) => {
        const p = I(a)[d];
        if (!p) throw new Error("This option is unavailable.");
        return p;
      });
      (t.other && l.push(t.other), (o = a.field), (s = l.join("; ")));
      break;
    }
    case "text":
      if (a.kind !== "question" || a.layout)
        throw new Error("This card does not take a typed answer.");
      ((o = a.confirmation?.field ?? a.field), (s = t.value));
      break;
  }
  return {
    card: {
      ...n,
      resolution: {
        answer: t,
        text: s,
        answeredAt: Math.max(i, (n.resolution?.answeredAt ?? 0) + 1),
      },
    },
    field: o,
    value: o ? s : void 0,
  };
}
function I(n) {
  return n.path
    ? S.map((t) => t.label)
    : n.discovery
      ? re.map((t) => t.label)
      : (n.options ?? []);
}
function be(n, t) {
  if (
    n.content.kind !== "information" ||
    !n.content.connectAppIds?.some(
      (r) => typeof r != "string" && q(r) === t.offerId && r.id === t.appId,
    )
  )
    throw new Error("This account offer is unavailable.");
  const i = n.connections?.find((r) => r.offerId === t.offerId);
  if (i) {
    if (i.appId === t.appId && i.connectionId === t.connectionId) return n;
    throw new Error("This offer already has an account.");
  }
  if (n.resolution) throw new Error("This card was already answered.");
  if (n.connections?.some((r) => r.connectionId === t.connectionId))
    throw new Error(
      "That account is already connected to another button. Choose a different account.",
    );
  return { ...n, connections: [...(n.connections ?? []), t] };
}
function q(n) {
  return JSON.stringify([n.id, n.name]);
}
const w = e.pipe(e.number(), e.finite(), e.minValue(0), e.maxValue(1)),
  g = e.pipe(e.string(), e.trim(), e.minLength(1), e.maxLength(1e3)),
  C = e.pipe(e.array(g), e.minLength(1), e.maxLength(8)),
  F = e.object({
    organization: e.optional(
      e.object({
        company: g,
        description: e.optional(g),
        headcount: e.optional(g),
        observedAt: g,
        sources: C,
      }),
    ),
    role: e.optional(
      e.object({ roleTitle: g, responsibilities: g, sources: C }),
    ),
  }),
  we = e.object({
    company: e.pipe(e.string(), e.maxLength(300)),
    roleTitle: e.pipe(e.string(), e.maxLength(300)),
    evidence: F,
  }),
  L = [
    ...m.ORGANIZATION_TYPE_DEFINITIONS.map(({ id: n }) => n),
    "insufficient-evidence",
  ],
  x = [
    ...m.ORGANIZATION_SIZE_DEFINITIONS.map(({ id: n }) => n),
    "insufficient-evidence",
  ],
  M = m.ONBOARDING_ROLE_DEFINITIONS.map(({ id: n }) => n),
  ye = e.object({
    organizationType: e.object({
      type: e.literal("choice"),
      choice: e.picklist(L),
      probabilities: e.record(e.picklist(L), w),
      confidence: w,
    }),
    organizationSize: e.object({
      type: e.literal("choice"),
      choice: e.picklist(x),
      probabilities: e.record(e.picklist(x), w),
      confidence: w,
    }),
    roles: e.record(
      e.picklist(M),
      e.object({ type: e.literal("noul"), noul: w }),
    ),
  }),
  G = e.object({
    answers: ye,
    selections: e.object({
      organizationTypeId: e.optional(
        e.picklist(m.ORGANIZATION_TYPE_DEFINITIONS.map(({ id: n }) => n)),
      ),
      organizationSizeId: e.optional(
        e.picklist(m.ORGANIZATION_SIZE_DEFINITIONS.map(({ id: n }) => n)),
      ),
      roleIds: e.pipe(e.array(e.picklist(M)), e.maxLength(3)),
    }),
    model: e.string(),
    evaluatedAt: e.number(),
    elapsedMs: e.number(),
    inputTokens: e.number(),
    outputTokens: e.number(),
  });
e.object({
  context: e.pipe(e.string(), e.minLength(1), e.maxLength(48e3)),
  facts: we,
});
const ke = e.variant("status", [
    e.object({ status: e.literal("ready"), recommendation: G }),
    e.object({ status: e.literal("unavailable") }),
  ]),
  Ie = e.pipe(
    e.object({
      name: e.string(),
      accountName: e.string(),
      accountEmail: e.string(),
      roleTitle: e.string(),
      role: e.optional(e.string()),
      roleIds: e.array(e.string()),
      roleMatches: e.array(
        e.object({ roleId: e.string(), matchedKeyword: e.string() }),
      ),
      company: e.string(),
      organizationTypeId: e.nullable(e.string()),
      organizationSizeId: e.nullable(e.string()),
      organizationTypeOther: e.string(),
      selectedOfficialSkillIds: e.array(e.string()),
      officialSkillMessage: e.string(),
      officialSkillMessageEdited: e.boolean(),
      targetProfileId: e.nullable(e.string()),
      mainBrowserProfileId: e.nullable(e.string()),
      aiHistoryImportSources: e.array(e.string()),
      stepsCompleted: e.number(),
      wentBackCount: e.number(),
    }),
    e.transform((n) => m.normalizeOnboardingFormData(n)),
  ),
  Oe = e.object({
    step: e.string(),
    id: e.string(),
    text: e.string(),
    survivePastCompactions: e.boolean(),
    delivery: e.optional(e.picklist(["queue", "interrupt"])),
    timestamp: e.number(),
    requestId: e.optional(e.string()),
    status: e.picklist(["pending", "sent"]),
  }),
  B = e.object({
    version: e.literal(1),
    id: e.string(),
    accountId: e.string(),
    profileId: e.string(),
    sessionId: e.string(),
    companionId: e.string(),
    startedAt: e.number(),
    model: e.picklist([
      "anthropic/claude-opus-5-5",
      "gpt-6-sol",
      "gpt-6-astra",
      "gpt-6-luna",
    ]),
    phase: e.picklist(["background", "handoff", "complete"]),
    checklistTeams: e.optional(
      e.array(e.object({ id: e.string(), name: e.string() })),
    ),
    linkedInSignedIn: e.optional(e.boolean()),
    cards: e.optional(e.array(ee)),
    questionCardIds: e.optional(e.array(e.string())),
    editedProfileFields: e.optional(e.array(k.onboardingProfileFieldSchema)),
    activeStep: e.picklist(N.ONBOARDING_STEP_IDS),
    completedSteps: e.array(e.picklist(N.ONBOARDING_STEP_IDS)),
    formData: e.nullable(Ie),
    contexts: e.array(Oe),
    connectedApps: e.optional(
      e.array(
        e.object({
          id: e.string(),
          name: e.string(),
          connectionId: e.string(),
          accountName: e.optional(e.string()),
          label: e.optional(e.string()),
          enabledServices: e.array(e.string()),
        }),
      ),
    ),
    layoutRecommendation: e.optional(j),
    profileChoiceRecommendation: e.optional(
      e.object({ inputKey: e.string(), recommendation: G }),
    ),
    visibleFromIndex: e.optional(
      e.pipe(e.number(), e.integer(), e.minValue(0)),
    ),
    recommendedApps: e.optional(
      e.array(
        e.object({
          id: e.string(),
          name: e.string(),
          logoUrls: e.array(e.string()),
          lastUsedAt: e.nullable(e.number()),
        }),
      ),
    ),
  });
async function v(n) {
  try {
    return e.parse(B, JSON.parse(await y.readFile(n, "utf8")));
  } catch (t) {
    if (t instanceof Error && "code" in t && t.code === "ENOENT") return null;
    throw t;
  }
}
async function H(n, t) {
  const i = await v(n);
  if (!i) return null;
  if (i.accountId !== t.accountId || i.profileId !== t.profileId)
    throw new Error(
      "The saved onboarding belongs to another account or profile",
    );
  return i.phase === "complete" ? null : i;
}
async function U(n, t) {
  await y.mkdir(X.dirname(n), { recursive: !0 });
  const i = `${n}.tmp`;
  (await y.writeFile(i, JSON.stringify(t), { mode: 384 }),
    await y.rename(i, n));
}
function J(n, t) {
  const i = n.contexts.findLast((r) => r.step === t.step);
  (i?.text === t.text &&
    i.survivePastCompactions === t.survivePastCompactions) ||
    n.contexts.push({
      ...t,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      status: "pending",
    });
}
function A(n) {
  const t = n.contexts.filter(
    (i) =>
      i.status === "pending" &&
      (n.phase === "background" || i.step === "handoff"),
  );
  return t.every((i) => i.step === "progress" && !i.requestId) ? [] : t;
}
function V(n) {
  return A(n).length > 0;
}
function Y(n, t, i) {
  if (n.phase !== "background") return !1;
  const r = A(n);
  return (
    r.length > 0 &&
    r.every(
      (a) => a.delivery !== "interrupt" && !a.requestId && t - a.timestamp < i,
    )
  );
}
function Q(n) {
  const t = A(n),
    i = t[0];
  if (!i) return [];
  const r = t.filter((s) => s.requestId === i.requestId),
    a = i.requestId ?? i.id;
  for (const s of r) s.requestId = a;
  return r;
}
const Se = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      addOnboardingContext: J,
      canHoldOnboardingContexts: Y,
      hasUnsentOnboardingContext: V,
      loadOnboardingRun: v,
      loadPendingOnboardingRun: H,
      onboardingRunSchema: B,
      prepareOnboardingContextBatch: Q,
      saveOnboardingRun: U,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
exports.LAYOUT_CONTEXT_MAX_LENGTH = R;
exports.addOnboardingContext = J;
exports.canHoldOnboardingContexts = Y;
exports.enqueueOnboardingCards = pe;
exports.hasUnsentOnboardingContext = V;
exports.layoutRecommendationResponseSchema = $;
exports.loadOnboardingRun = v;
exports.loadPendingOnboardingRun = H;
exports.onboardingAccountOfferId = q;
exports.onboardingEvidenceSchema = F;
exports.onboardingQuestionOptions = I;
exports.prepareOnboardingContextBatch = Q;
exports.profileChoiceResponseSchema = ke;
exports.recordOnboardingConnection = be;
exports.recordOnboardingConnectionSchema = te;
exports.releaseOnboardingFiller = he;
exports.reportOnboardingConnectionFailureSchema = oe;
exports.resolveOnboardingCard = me;
exports.respondToOnboardingCardSchema = ne;
exports.run = Se;
exports.saveOnboardingRun = U;
exports.waitingOnboardingCards = z;
