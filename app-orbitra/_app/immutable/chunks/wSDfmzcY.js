const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "/_app/immutable/chunks/UtFdZ35K.js",
      "/_app/immutable/chunks/DTXohiFx.js",
      "/_app/immutable/chunks/CiH_9U7y.js",
      "/_app/immutable/chunks/De_xxbuH.js",
      "/_app/immutable/chunks/_1AjPVLo.js",
      "/_app/immutable/chunks/CTcbhTPi.js",
    ]),
) => i.map((i) => d[i]);
import { _ as Oe } from "./Ct5FWWRu.js";
import {
  s as u,
  g as c,
  a as d,
  u as N,
  p as X,
  m as Ae,
  P as Ne,
} from "./BY3kRY6U.js";
import { w as x } from "./BdybKhPG.js";
import { i as Ee } from "./C2KPdfqw.js";
import {
  o as g,
  h as m,
  p as l,
  d as v,
  A as E,
  w as T,
  f as y,
  m as S,
  t as _,
  s as C,
  g as O,
  n as A,
  i as $,
  c as V,
  a as he,
  D as xe,
  v as K,
  u as k,
  j as De,
  e as Me,
  E as Y,
  z as Re,
  P as Fe,
} from "./De_xxbuH.js";
import { O as B, a as Q } from "./PguyChvs.js";
import { O as pe } from "./CHKKC-yH.js";
import { c as ze } from "./CRmD-k7_.js";
import { b as Le } from "./DnrzzN-F.js";
import { e as h, c as He } from "./IjCjKoYp.js";
import { a as z } from "./cQfgFqsf.js";
import { p as Ge } from "./CxXej7Ec.js";
import { d as qe, r as Ve } from "./BIWBP4zd.js";
import { trackEvent as Be } from "./YVTBX9jf.js";
const L = l(C(), S(1), y(80)),
  W = l(C(), _(), S(1), y(400)),
  me = l(C(), _(), S(1), y(300)),
  ge = l(C(), _(), S(1), y(24)),
  Z = T(["name", "company", "roleTitle"]),
  fe = T(["classic", "modern"]),
  we = m(
    l(
      g({ questionId: L, option: l(A(), $(), V(0), he(4)) }),
      v(
        "Show this card only once the user picks this option (0-based) on that question, right after it and without waiting for you. On a confirmation, option 0 is Yes. Publish one card per option to branch the conversation; cards for options the user did not pick are never shown.",
      ),
    ),
  ),
  be = g({
    id: l(
      L,
      v(
        "Stable ID for this question. Reusing it does not create another card.",
      ),
    ),
    intro: m(
      l(
        O(me),
        y(2),
        v(
          "Speech bubbles shown before the question when it reads better in turns, e.g. why you ask or what you can do with the answer. One or two short spoken sentences each.",
        ),
      ),
    ),
    prompt: l(
      W,
      v(
        "The question itself, your last speech bubble before the choices. Plain text.",
      ),
    ),
    skipLabel: m(
      l(
        ge,
        v(
          "The button that skips the question, when Skip does not fit, e.g. Not now.",
        ),
      ),
    ),
    options: m(l(O(W), y(5))),
    placeholder: m(
      l(
        C(),
        _(),
        S(1),
        y(80),
        v(
          'An example answer to this same question, shown in the reply field above your choices where the user can type or speak, e.g. "Revenue targets, markets, team size…" or "Tell me in your own words". Never a second question or a finding.',
        ),
      ),
    ),
    selectionMode: m(
      l(
        T(["single", "multiple"]),
        v(
          "Required whenever you supply options, except on first tasks, which are always one pick. Choose multiple unless the answers truly exclude each other, then single. Older cards without a mode allow multiple answers.",
        ),
      ),
    ),
    confirmation: m(g({ field: Z, value: W })),
    firstTask: m(
      l(
        E(),
        v(
          "Set when the options are first tasks for you to do, at least two. The user picks one, which ends setup, and you start it together in the visible chat.",
        ),
      ),
    ),
    layout: m(
      l(
        fe,
        v(
          "Set to make this the tab layout question, naming the layout you recommend for this user. The UI shows both layouts as pictures with yours selected, so leave out options. Classic is a traditional horizontal tab bar with tabs kept in a stable manual order. Modern keeps tabs in a sidebar sorted by recent use.",
        ),
      ),
    ),
    aiHistory: m(
      l(
        E(),
        v(
          "Set to make this the AI tools question, asking which other AI tools they have tried and what worked and what did not. The UI shows a long written answer with ChatGPT, Claude, Gemini, and Copilot as pills that each start a sentence about that tool, so leave out options.",
        ),
      ),
    ),
    path: m(
      l(
        E(),
        v(
          "Set to make this the card that offers the interview. The prompt is your pitch; the UI shows Interview me, marked as recommended, and I just want to get started, so leave out options.",
        ),
      ),
    ),
    onlyAfter: we,
    discovery: m(
      l(
        E(),
        v(
          "Set to make this the question about how they found Orbitra. The UI shows fixed choices, so leave out options.",
        ),
      ),
    ),
    field: m(
      l(
        Z,
        v(
          "Profile field to save when answered. Omit for general questions about goals or preferences.",
        ),
      ),
    ),
  }),
  Ue = g({ questions: l(O(be), S(1), y(5)) }),
  Ye = g({
    id: l(
      L,
      v(
        "Exact provider ID from the supplied catalog, such as google or microsoft.",
      ),
    ),
    name: l(
      C(),
      _(),
      S(1),
      y(80),
      v(
        "Account purpose, such as Work account. Shown as Connect <name> and saved as the account label automatically.",
      ),
    ),
  }),
  We = m(
    l(
      O(xe([L, Ye])),
      y(4),
      v(
        "Provider IDs for ordinary Connect buttons, or { id, name } objects for independent named accounts. Two objects may use the same provider with different names. Use the real provider ID, never an invented ID such as google-work. This does not connect or grant access.",
      ),
    ),
  ),
  ye = g({
    id: L,
    title: l(
      C(),
      _(),
      S(1),
      y(140),
      v("First speech bubble: one short spoken sentence, not a heading."),
    ),
    connectAppIds: We,
    emailCalendar: m(
      l(
        E(),
        v(
          "Set on the card that offers their email and calendar, with only google, microsoft, or both when you cannot tell which they use. The UI adds logos of teams that use Orbitra. Offer other apps on a separate card.",
        ),
      ),
    ),
    addAccount: m(
      l(
        E(),
        v(
          "Set when the user already connected these apps and this card offers connecting another account of them. Name the account in one of your two messages.",
        ),
      ),
    ),
    body: l(
      C(),
      _(),
      S(1),
      y(300),
      v(
        "Second speech bubble: one or two short spoken sentences with the useful next point.",
      ),
    ),
    more: m(
      l(
        O(me),
        y(2),
        v(
          "Further speech bubbles after body, when the point reads better in short turns.",
        ),
      ),
    ),
    continueLabel: m(
      l(
        ge,
        v(
          "The button that continues, when the card offers no connection. Keep it neutral, such as Next, never an opinion like Love it. Defaults to Continue.",
        ),
      ),
    ),
    question: m(
      l(
        g({
          label: l(C(), _(), S(1), y(40)),
          answer: l(C(), _(), S(1), y(200)),
        }),
        v(
          "A second button for a question the user may have about the card, and your one or two sentence spoken answer, shown in your speech bubble when they press it. For example, under a research finding, How do you do that? answered with how you research the web and read pages for them.",
        ),
      ),
    ),
    onlyAfter: we,
  });
K("kind", [
  g({ kind: k("questions"), ...Ue.entries }),
  g({ kind: k("information"), ...ye.entries }),
]);
const J = 6e3,
  je = K("kind", [
    g({ kind: k("confirm") }),
    g({ kind: k("option"), index: l(A(), $(), V(0)) }),
    l(
      g({
        kind: k("options"),
        indices: l(
          O(l(A(), $(), V(0))),
          S(1),
          y(5),
          Me((n) => new Set(n).size === n.length, "Choose each option once."),
        ),
        other: m(l(C(), _(), S(1), y(J))),
      }),
      De((n) => ({ ...n, indices: n.indices.toSorted((e, t) => e - t) })),
    ),
    g({ kind: k("text"), value: l(C(), _(), S(1), y(J)) }),
    g({ kind: k("layout"), choice: fe }),
    g({ kind: k("dismiss") }),
    g({ kind: k("acknowledge") }),
  ]);
g({
  content: K("kind", [
    g({ kind: k("question"), ...be.entries }),
    g({
      kind: k("information"),
      ...ye.entries,
      title: l(C(), _(), S(1), y(400)),
      body: l(C(), _(), S(1), y(1600)),
    }),
  ]),
  createdAt: A(),
  held: m(E()),
  connections: m(O(g({ offerId: C(), appId: C(), connectionId: C() }))),
  resolution: m(g({ answer: je, text: C(), answeredAt: A() })),
});
const $e = [
    { path: "interview", label: "Interview me", recommended: !0 },
    { path: "quick", label: "I just want to get started", recommended: !1 },
  ],
  Wt = ["ChatGPT", "Claude", "Gemini", "Copilot"],
  ve = [
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
  Ke = ["aiHistory", "discovery"];
function Qe(n) {
  return n.kind === "question" && Ke.some((e) => n[e]);
}
function jt(n) {
  return (
    !!(n.confirmation || n.discovery || n.path || n.firstTask) ||
    n.selectionMode === "single"
  );
}
function Xe(n) {
  const e = [],
    t = (i) => {
      e.push(i);
      for (const o of n)
        o.content.onlyAfter?.questionId === i.content.id && t(o);
    };
  for (const i of n) {
    const o = i.content.onlyAfter?.questionId;
    (o && n.some(({ content: s }) => s.id === o)) || t(i);
  }
  return e;
}
function Ze(n, e) {
  if (n.held) return !1;
  if (!n.content.onlyAfter) return !0;
  const { questionId: t, option: i } = n.content.onlyAfter,
    o = e.find(({ content: s }) => s.id === t)?.resolution?.answer;
  return o?.kind === "confirm"
    ? i === 0
    : o?.kind === "option"
      ? o.index === i
      : o?.kind === "options"
        ? o.indices.includes(i)
        : !1;
}
function Je(n) {
  return n.path
    ? $e.map((e) => e.label)
    : n.discovery
      ? ve.map((e) => e.label)
      : (n.options ?? []);
}
function $t(n) {
  return JSON.stringify([n.id, n.name]);
}
const R = l(A(), Re(), V(0), he(1)),
  D = l(C(), _(), S(1), y(1e3)),
  ee = l(O(D), S(1), y(8)),
  Ce = g({
    organization: m(
      g({
        company: D,
        description: m(D),
        headcount: m(D),
        observedAt: D,
        sources: ee,
      }),
    ),
    role: m(g({ roleTitle: D, responsibilities: D, sources: ee })),
  }),
  te = [...B.map(({ id: n }) => n), "insufficient-evidence"],
  ie = [...Q.map(({ id: n }) => n), "insufficient-evidence"],
  Se = pe.map(({ id: n }) => n),
  et = g({
    organizationType: g({
      type: k("choice"),
      choice: T(te),
      probabilities: Y(T(te), R),
      confidence: R,
    }),
    organizationSize: g({
      type: k("choice"),
      choice: T(ie),
      probabilities: Y(T(ie), R),
      confidence: R,
    }),
    roles: Y(T(Se), g({ type: k("noul"), noul: R })),
  });
g({
  answers: et,
  selections: g({
    organizationTypeId: m(T(B.map(({ id: n }) => n))),
    organizationSizeId: m(T(Q.map(({ id: n }) => n))),
    roleIds: l(O(T(Se)), y(3)),
  }),
  model: C(),
  evaluatedAt: A(),
  elapsedMs: A(),
  inputTokens: A(),
  outputTokens: A(),
});
const tt = 5,
  it = [
    "google",
    "microsoft",
    "notion",
    "slack",
    "github",
    "linear",
    "asana",
    "airtable",
    "dropbox",
    "figma",
    "hubspot",
    "salesforce",
    "zoom",
    "other",
  ];
function nt(n) {
  return it.find((e) => e === n) ?? "other";
}
const Ie = [
    "onboarding_opened",
    "onboarding_stuck",
    "onboarding_stuck_recovered",
    "onboarding_quit",
  ],
  Kt = ["free", "freelance", "part_time"],
  ot = [
    "onboarding_run_started",
    "onboarding_step_viewed",
    "onboarding_step_exited",
    "onboarding_card_event",
    "onboarding_wait_event",
    "onboarding_error_event",
    "onboarding_auth_event",
    "onboarding_auth_handoff_event",
    "onboarding_companion_event",
    "onboarding_capability_event",
    "onboarding_role_event",
    "onboarding_organization_event",
    "onboarding_appearance_event",
    "onboarding_browser_import_event",
    "onboarding_ai_history_event",
    "onboarding_integration_event",
    "onboarding_skill_event",
    "onboarding_plan_offer_event",
    "onboarding_handoff_event",
    "onboarding_skip_all_event",
    "onboarding_activation_milestone",
    "onboarding_completed",
    ...Ie,
  ],
  st = [
    "onboarding/state.svelte.ts",
    "AiHistoryImport.svelte",
    "Appearance.svelte",
    "Final.svelte",
    "Integrations.svelte",
    "Migration.svelte",
    "OfficialSkills.svelte",
    "OrganizationDetails.svelte",
    "RoleSelection.svelte",
    "StoryCapabilitiesVisual.svelte",
    "StoryFeaturesCarousel.svelte",
    "DynamicSetup.svelte",
    "OnboardingAccountConnections.svelte",
    "OnboardingConnection.svelte",
    "onboarding-ai-history-importer.ts",
    "OnboardingService.ts",
    "DesktopOnboardingAuthCoordinator.ts",
    "AuthManager.ts",
    "TelemetryManager.ts",
    "OnboardingStuckWatchdog.ts",
  ];
new Set(ot);
new Set(st);
new Set(Ie);
const ke = {
    name: "",
    roleTitle: "",
    roleIds: [],
    roleMatches: [],
    company: "",
    organizationTypeId: null,
    organizationSizeId: null,
    organizationTypeOther: "",
    selectedOfficialSkillIds: [],
    officialSkillMessage: "",
    officialSkillMessageEdited: !1,
    accountName: "",
    accountEmail: "",
    targetProfileId: null,
    mainBrowserProfileId: null,
    aiHistoryImportSources: [],
    stepsCompleted: 0,
    wentBackCount: 0,
  },
  _e = l(C(), _(), S(1), y(300)),
  at = 25,
  q = l(O(l(C(), _(), S(1), y(1e3))), S(1), y(8));
function H(n) {
  return m(g({ value: l(_e, v(n)), sources: q }));
}
const F = g({
  version: k(1),
  checklist: m(ze),
  routines: m(Le),
  notes: m(
    l(
      O(_e),
      y(at),
      v(
        "What you learned about the user that later chats should know, one short fact per note: their goals and initiatives, fires, the tools they use and where things live, what they tried in other AI tools and how it went, their preferences, and the plan you put together. Only what they told you or what you verified. Saved to their memory when setup ends.",
      ),
    ),
  ),
  browserDataImported: m(
    l(
      E(),
      v(
        "Set true only when a successful browser-data import during onboarding has been confirmed. Finding a browser profile or starting an import is not completion.",
      ),
    ),
  ),
  evidence: m(Ce),
  fields: g({
    name: H("Preferred name for the user."),
    company: H(
      "Current employer or organization, supported by explicit current-employment evidence.",
    ),
    roleTitle: H(
      "Exact current job title, separate from broad role categories.",
    ),
    organizationTypeOther: H(
      "Description of the organization type, only when organizationTypeId is other.",
    ),
    organizationTypeId: m(g({ value: T(B.map(({ id: n }) => n)), sources: q })),
    organizationSizeId: m(
      g({
        value: l(
          T(Q.map(({ id: n }) => n)),
          v(
            "Current organization headcount. 1-10: one to ten people; 11-100: eleven to one hundred; 101-1000: one hundred one to one thousand; 1000-plus: more than one thousand. Only for company, agency, or consulting. Use dated organization evidence; do not infer size from job title or browsing. Omit if unknown or if the evidence spans multiple ranges.",
          ),
        ),
        sources: q,
      }),
    ),
    roleIds: m(
      g({ value: l(O(T(pe.map(({ id: n }) => n))), S(1), y(3)), sources: q }),
    ),
  }),
});
g({
  version: k(1),
  checklist: F.entries.checklist,
  routines: F.entries.routines,
  notes: F.entries.notes,
  browserDataImported: F.entries.browserDataImported,
  fields: Fe(F.entries.fields, [
    "name",
    "company",
    "roleTitle",
    "organizationTypeOther",
  ]),
  evidence: m(Ce),
});
const ne = {
  name: "user-name",
  company: "workplace",
  organizationTypeId: "workplace",
  organizationSizeId: "workplace",
  organizationTypeOther: "workplace",
  roleTitle: "role-selection",
  roleIds: "role-selection",
};
function rt(n, e, t, i = [], o) {
  const s = {};
  for (const a of Object.keys(ne)) {
    if (
      t.has(a) ||
      i.includes(ne[a]) ||
      ([
        "organizationTypeId",
        "organizationSizeId",
        "organizationTypeOther",
      ].includes(a) &&
        t.has("company") &&
        n.company !== e.fields.company?.value) ||
      (a === "roleIds" &&
        t.has("roleTitle") &&
        n.roleTitle !== e.fields.roleTitle?.value)
    )
      continue;
    const p = e.fields[a];
    p
      ? Object.assign(s, { [a]: p.value })
      : o?.fields[a] && Object.assign(s, { [a]: ke[a] });
  }
  const r =
    "organizationTypeId" in s ? s.organizationTypeId : n.organizationTypeId;
  return (
    (!r || !B.find(({ id: a }) => a === r)?.collectsSize) &&
      (delete s.organizationSizeId,
      n.organizationSizeId &&
        !t.has("organizationSizeId") &&
        !i.includes("workplace") &&
        (s.organizationSizeId = null)),
    r !== "other" &&
      (delete s.organizationTypeOther,
      n.organizationTypeOther &&
        !t.has("organizationTypeOther") &&
        !i.includes("workplace") &&
        (s.organizationTypeOther = "")),
    s
  );
}
function oe(n, e) {
  const t = n.content;
  let i = "information",
    o = 0,
    s = 0,
    r = "none";
  if (t.kind === "information")
    ((s = t.connectAppIds?.length ?? 0), s && (i = "app_connection"));
  else {
    ((i = "question"),
      (o = Je(t).length),
      o &&
        (r =
          t.discovery || t.path ? "single" : (t.selectionMode ?? "multiple")));
    const a = t.confirmation?.field ?? t.field;
    (a === "name" && (i = "name"),
      a === "company" && (i = "company"),
      a === "roleTitle" && (i = "role"),
      t.layout && (i = "layout"),
      t.firstTask && (i = "first_task"),
      t.path && (i = "path"),
      t.aiHistory && (i = "ai_history"),
      t.discovery && (i = "discovery"));
  }
  return {
    card_index: e,
    card_type: i,
    option_count: o,
    connection_offer_count: s,
    selection_mode: r,
  };
}
function dt(n) {
  let e = [],
    t = !1;
  return (
    n.kind === "option" && (e = [n.index]),
    n.kind === "options" && ((e = n.indices), (t = !!n.other)),
    n.kind === "text" && (t = !0),
    {
      answer_kind: n.kind,
      selected_option_count: e.length,
      selected_option_indices: e,
      has_custom_answer: t,
    }
  );
}
function ct(n, e) {
  if (n.content.kind !== "question" || !n.content.discovery) return {};
  let t;
  return (
    e.kind === "option"
      ? (t = e.index)
      : e.kind === "options"
        ? (t = e.indices[0])
        : (t = void 0),
    t !== void 0
      ? { discovery_source: ve[t]?.source ?? "other" }
      : e.kind === "text"
        ? { discovery_source: "other" }
        : {}
  );
}
const se = (n, e, t) => {
    ((e /= 100), (t /= 100));
    const i = (1 - Math.abs(2 * t - 1)) * e,
      o = i * (1 - Math.abs(((n / 60) % 2) - 1)),
      s = t - i / 2;
    let r = 0,
      a = 0,
      p = 0;
    (0 <= n && n < 60
      ? ((r = i), (a = o), (p = 0))
      : 60 <= n && n < 120
        ? ((r = o), (a = i), (p = 0))
        : 120 <= n && n < 180
          ? ((r = 0), (a = i), (p = o))
          : 180 <= n && n < 240
            ? ((r = 0), (a = o), (p = i))
            : 240 <= n && n < 300
              ? ((r = o), (a = 0), (p = i))
              : 300 <= n && n < 360 && ((r = i), (a = 0), (p = o)),
      (r = Math.round((r + s) * 255)),
      (a = Math.round((a + s) * 255)),
      (p = Math.round((p + s) * 255)));
    const w = (f) => f.toString(16).padStart(2, "0");
    return `#${w(r)}${w(a)}${w(p)}`;
  },
  ut = (n, e = "dark", t) => {
    const o = (n === "default" || !n ? "default" : n)
      .replace(/\s+/g, "")
      .toLowerCase();
    let s = "";
    if (o.length >= 6) s = o.slice(0, 6);
    else for (let p = 0; p < Math.min(6, o.length); p++) s += o[p % o.length];
    let r = 0;
    for (let p = 0; p < s.length; p++) {
      const w = s.charCodeAt(p);
      ((r = (r << 5) - r + w), (r = r & r));
    }
    r = Math.abs(r);
    const a = r % 360;
    return e === "bright" ? se(a, 56, 86) : se(a, 40, 56);
  },
  lt = (n, e) => ut(n, "dark"),
  ht = [
    { label: "Coral", prefixes: ["00120a", "00001c", "002389"] },
    { label: "Amber", prefixes: ["00002d", "00210c", "0010e0"] },
    { label: "Lime", prefixes: ["0010f9", "000211", "00209e"] },
    { label: "Mint", prefixes: ["000075", "002019", "001128"] },
    { label: "Blue", prefixes: ["001006", "000115", "002032"] },
    { label: "Violet", prefixes: ["001024", "000133", "002050"] },
    { label: "Pink", prefixes: ["0020e7", "00116f", "000011"] },
  ],
  ae = ht.map((n) => ({ ...n, color: lt(n.prefixes[0]) }));
function pt(n, e) {
  return {
    tint: e?.color.head ?? Ge(n).color,
    accent: e?.color.body ?? ft(n, ae)?.color ?? ae[0].color,
  };
}
function mt(n) {
  let e = 0;
  for (const t of n) ((e = (e << 5) - e + t.charCodeAt(0)), (e &= e));
  return Math.abs(e);
}
function re(n) {
  return mt(n) % 360;
}
function gt(n, e) {
  const t = Math.abs(n - e);
  return Math.min(t, 360 - t);
}
function ft(n, e) {
  const t = e.find((r) => r.prefixes.some((a) => n.startsWith(a)));
  if (t) return t;
  const i = re(n.slice(0, 6));
  let o,
    s = Number.POSITIVE_INFINITY;
  for (const r of e) {
    const a = gt(i, re(r.prefixes[0]));
    a >= s || ((o = r), (s = a));
  }
  return o;
}
const wt = 220,
  bt = 32,
  yt = 1100,
  Qt = 27,
  Xt = "cubic-bezier(0.16, 1, 0.3, 1)",
  Zt = "49%",
  Jt = -24;
function de(n) {
  return n !== "guide";
}
function vt(n, e) {
  e.hide();
  let t = null;
  const i = globalThis.setTimeout(() => {
    (e.place(n),
      (t = globalThis.setTimeout(() => {
        (e.show(), e.complete());
      }, bt)));
  }, wt);
  return () => {
    (globalThis.clearTimeout(i), t !== null && globalThis.clearTimeout(t));
  };
}
function ce(n, e) {
  return n === "launch" && e === "ready";
}
function Ct(n, e, t, i) {
  const o = [...new Set([...n.completedItems, ...e])],
    s = o.length - n.completedItems.length,
    r = Math.max(1, t - o.length);
  let a = n.frontier;
  for (let w = 0; w < s; w++) a += (100 - a) / (r + s - w);
  i.finished ? (a = 100) : (a = Math.max(n.frontier, Math.min(95, a)));
  let p = n.positions[i.key];
  return (
    i.finished
      ? (p = 100)
      : p === void 0 &&
        ((p = a),
        (i.direction === "backward" || o.includes(i.key)) &&
          (p = Math.min(a, (Math.max(0, i.index) / t) * 100))),
    i.direction === "forward" && (p = Math.max(n.value, p)),
    {
      value: p,
      frontier: a,
      completedItems: o,
      positions: { ...n.positions, [i.key]: p },
    }
  );
}
const P = [
  { id: "welcome", phase: "story", contentLayout: "story" },
  {
    id: "authentication",
    phase: "story",
    contentLayout: "story",
    guideMessage: "Sign in so I can find the right companion for you.",
  },
  { id: "team", phase: "story", contentLayout: "story", optional: !0 },
  { id: "tabs", phase: "story", contentLayout: "story" },
  {
    id: "browser-import",
    phase: "setup",
    contentLayout: "story",
    optional: !0,
  },
  { id: "companion-name", phase: "personalize", contentLayout: "story" },
  { id: "workplace", phase: "personalize", contentLayout: "story" },
  { id: "use-cases", phase: "personalize", contentLayout: "story" },
  {
    id: "ai-history-import",
    phase: "setup",
    contentLayout: "wide",
    optional: !0,
    guideMessage:
      "Import your chats and memory so we don't have to start from scratch.",
  },
  {
    id: "integrations",
    phase: "setup",
    contentLayout: "wide",
    optional: !0,
    guideMessage: "Connect the work apps you want me to work with",
  },
  { id: "launch", phase: "start", contentLayout: "centered" },
];
function ue(n) {
  if (n === "user-name") return P.findIndex((t) => t.id === "companion-name");
  const e = P.findIndex((t) => t.id === n);
  return e >= 0 ? e : P.findIndex((t) => t.id === "workplace");
}
function M(n) {
  return P[n] ?? P[0];
}
const Te = () => !0;
function le(n, e = Te) {
  return P.findIndex((t, i) => i > n && e(t));
}
function St(n, e = Te) {
  for (let t = n - 1; t >= 0; t--) if (e(P[t])) return t;
  return -1;
}
class It {
  #s = u(null);
  get offer() {
    return c(this.#s);
  }
  set offer(e) {
    d(this.#s, e, !0);
  }
  #n = u("idle");
  get action() {
    return c(this.#n);
  }
  set action(e) {
    d(this.#n, e, !0);
  }
  #g = u(null);
  get error() {
    return c(this.#g);
  }
  set error(e) {
    d(this.#g, e, !0);
  }
  #f = u(null);
  get planWarning() {
    return c(this.#f);
  }
  set planWarning(e) {
    d(this.#f, e, !0);
  }
  #e = 0;
  #r = null;
  #i = null;
  get shouldShowStep() {
    return (
      this.offer !== null &&
      this.action !== "accepted" &&
      this.action !== "requested"
    );
  }
  reset() {
    (this.#e++,
      (this.#r = null),
      (this.#i = null),
      (this.offer = null),
      (this.action = "idle"),
      (this.error = null),
      (this.planWarning = null));
  }
  async load(e) {
    if (
      this.#r === e &&
      (this.action === "accepted" || this.action === "requested")
    )
      return;
    if (this.#r === e && this.#i !== null) return this.#i;
    (this.reset(), (this.#r = e));
    const t = this.#e;
    return (
      (this.#i = x(this.#k(t), 1e4)
        .then((i) => {
          !i && t === this.#e && (this.#i = null);
        })
        .catch(() => {
          t === this.#e &&
            (this.#e++,
            (this.#i = null),
            this.offer?.kind !== "invite" && (this.offer = null),
            (this.planWarning = null));
        })),
      this.#i
    );
  }
  async #k(e) {
    const t = h.invoke("team:pending-invite", {}).catch(() => null),
      i = h.invoke("team:discover", {}).catch(() => null),
      o = await t;
    if (e !== this.#e) return !1;
    const s = o?.success ? o.invite : null;
    if (s) {
      this.offer = { kind: "invite", name: s.organizationName, token: s.token };
      try {
        const a = await h.invoke("account:get", { forceRefresh: !0 });
        return e !== this.#e || !a
          ? !1
          : ((this.planWarning = qe(a?.subscriptionAccess?.sources)), !0);
      } catch {
        return !1;
      }
    }
    const r = await i;
    return e !== this.#e
      ? !1
      : (r?.teamExists &&
          r.teamName &&
          !r.isGenericDomain &&
          !r.alreadyInTeam &&
          (this.offer = { kind: "discovery", name: r.teamName }),
        o?.success === !0 && r !== null);
  }
  async submit() {
    const e = this.offer;
    if (!e || this.action !== "idle") return;
    const t = this.#e;
    ((this.action = "submitting"), (this.error = null));
    try {
      if (e.kind === "invite") {
        const i = await h.invoke("team:accept-invite", { token: e.token });
        if (t !== this.#e) return;
        i.success || i.reason === "already_member"
          ? (this.action = "accepted")
          : ((this.error = Ve(i.reason, i.error)), (this.action = "idle"));
      } else {
        const i = await h.invoke("team:request-join", {});
        if (t !== this.#e) return;
        i.success
          ? (this.action = "requested")
          : ((this.error = i.error), (this.action = "idle"));
      }
    } catch {
      if (t !== this.#e) return;
      ((this.error =
        "I couldn't reach your team just now. Try again, or skip and join later from Settings."),
        (this.action = "idle"));
    }
  }
}
function I(n, e, t, i) {
  n &&
    Be(
      e,
      {
        ...t,
        onboarding_run_id: n.runId,
        onboarding_flow_version: tt,
        is_authenticated: z.isAuthenticated,
      },
      i,
    );
}
function ei(n, e, t, i) {
  const { appId: o, ...s } = e,
    r = i.filter((a) => a.connectionId);
  I(
    n,
    "onboarding_integration_event",
    {
      ...s,
      ...(o ? { provider: nt(o) } : {}),
      connected_provider_count: new Set(r.map((a) => a.id)).size,
      connected_account_count: new Set(r.map((a) => a.connectionId)).size,
    },
    t,
  );
}
const kt = 240,
  _t = kt + 32,
  Tt = 500,
  Pt = 1500,
  Ot = 25e3,
  At = 3e4;
function j(n, e, t) {
  const i = n?.questionCardIds,
    o = n?.cards ?? [],
    s = o.some(({ content: r }) => r.kind === "question" && r.firstTask);
  return Xe(o)
    .filter((r) =>
      !Ze(r, o) || (s && !r.resolution && Qe(r.content) && r.content.id !== t)
        ? !1
        : e === "workplace"
          ? r.content.kind === "question" && r.content.firstTask
            ? !1
            : !i || i.includes(r.content.id)
          : e === "use-cases" && i
            ? !i.includes(r.content.id)
            : !0,
    )
    .toSorted((r, a) => {
      const p = r.content.kind === "question" && r.content.firstTask === !0,
        w = a.content.kind === "question" && a.content.firstTask === !0;
      return Number(p) - Number(w);
    });
}
class G extends Error {
  constructor(e, t) {
    (super(e), (this.accessDenied = t));
  }
}
class Nt {
  #s = u(0);
  get stepIndex() {
    return c(this.#s);
  }
  set stepIndex(e) {
    d(this.#s, e, !0);
  }
  #n = N(() => M(this.stepIndex));
  get step() {
    return c(this.#n);
  }
  set step(e) {
    d(this.#n, e);
  }
  #g = u(!1);
  get completed() {
    return c(this.#g);
  }
  set completed(e) {
    d(this.#g, e, !0);
  }
  #f = u(!1);
  get setupReady() {
    return c(this.#f);
  }
  set setupReady(e) {
    d(this.#f, e, !0);
  }
  #e = u(!1);
  get isLoading() {
    return c(this.#e);
  }
  set isLoading(e) {
    d(this.#e, e, !0);
  }
  #r = u(!1);
  get isNavigating() {
    return c(this.#r);
  }
  set isNavigating(e) {
    d(this.#r, e, !0);
  }
  #i = u("forward");
  get direction() {
    return c(this.#i);
  }
  set direction(e) {
    d(this.#i, e, !0);
  }
  #k = u(!1);
  get handoffPreparationFailed() {
    return c(this.#k);
  }
  set handoffPreparationFailed(e) {
    d(this.#k, e, !0);
  }
  #$ = u(!1);
  get customizationOpen() {
    return c(this.#$);
  }
  set customizationOpen(e) {
    d(this.#$, e, !0);
  }
  #E = u(!1);
  #K = u("story");
  get companionPlacement() {
    return c(this.#K);
  }
  set companionPlacement(e) {
    d(this.#K, e, !0);
  }
  #Q = u(!0);
  get companionVisible() {
    return c(this.#Q);
  }
  set companionVisible(e) {
    d(this.#Q, e, !0);
  }
  #X = u(!1);
  get companionMotionPaused() {
    return c(this.#X);
  }
  set companionMotionPaused(e) {
    d(this.#X, e, !0);
  }
  #Z = u(!1);
  get storyContinueReady() {
    return c(this.#Z);
  }
  set storyContinueReady(e) {
    d(this.#Z, e, !0);
  }
  #J = u(!1);
  get guideMessageShouldPlay() {
    return c(this.#J);
  }
  set guideMessageShouldPlay(e) {
    d(this.#J, e, !0);
  }
  #ee = u(!1);
  get guideMessageShouldAnimate() {
    return c(this.#ee);
  }
  set guideMessageShouldAnimate(e) {
    d(this.#ee, e, !0);
  }
  #te = u(!1);
  get guideMessageSpeaking() {
    return c(this.#te);
  }
  set guideMessageSpeaking(e) {
    d(this.#te, e, !0);
  }
  #ie = u(!1);
  get guideCompanionExpanded() {
    return c(this.#ie);
  }
  set guideCompanionExpanded(e) {
    d(this.#ie, e, !0);
  }
  #ne = u(!0);
  get guideCompanionScaleTransitionEnabled() {
    return c(this.#ne);
  }
  set guideCompanionScaleTransitionEnabled(e) {
    d(this.#ne, e, !0);
  }
  #oe = u(!1);
  get guidePageExiting() {
    return c(this.#oe);
  }
  set guidePageExiting(e) {
    d(this.#oe, e, !0);
  }
  #se = u(null);
  get guideContentPendingStepId() {
    return c(this.#se);
  }
  set guideContentPendingStepId(e) {
    d(this.#se, e, !0);
  }
  #ae = u(null);
  get progressDisplayStepId() {
    return c(this.#ae);
  }
  set progressDisplayStepId(e) {
    d(this.#ae, e, !0);
  }
  #re = u(
    X({
      value: 0,
      frontier: 0,
      completedItems: [],
      positions: { "step:welcome": 0 },
    }),
  );
  get progress() {
    return c(this.#re);
  }
  set progress(e) {
    d(this.#re, e, !0);
  }
  #_ = !1;
  #x = null;
  #d = !1;
  #de = null;
  #w;
  #b;
  #y;
  #T = null;
  #D = new Set();
  #M = new Set();
  #h = null;
  #R = null;
  #ce = 0;
  #F = 0;
  #z = 0;
  #L = new Map();
  #P = 0;
  #H = new Map();
  #a = null;
  #G = 0;
  #q = 0;
  #O = null;
  #ue = u(X({ ...ke }));
  get formData() {
    return c(this.#ue);
  }
  set formData(e) {
    d(this.#ue, e, !0);
  }
  layoutChoiceSource = "default";
  #o = new Set();
  #p;
  #le = u(!1);
  get receptionOpen() {
    return c(this.#le);
  }
  set receptionOpen(e) {
    d(this.#le, e, !0);
  }
  #he = u(!1);
  get receivedSharedCompanion() {
    return c(this.#he);
  }
  set receivedSharedCompanion(e) {
    d(this.#he, e, !0);
  }
  #pe = u(!1);
  get hiredOfficialCompanion() {
    return c(this.#pe);
  }
  set hiredOfficialCompanion(e) {
    d(this.#pe, e, !0);
  }
  #me = u(null);
  get pendingHireId() {
    return c(this.#me);
  }
  set pendingHireId(e) {
    d(this.#me, e, !0);
  }
  #ge = u("published");
  get pendingHireKind() {
    return c(this.#ge);
  }
  set pendingHireKind(e) {
    d(this.#ge, e, !0);
  }
  #fe = u(null);
  get pendingIntentId() {
    return c(this.#fe);
  }
  set pendingIntentId(e) {
    d(this.#fe, e, !0);
  }
  #we = u(null);
  get pendingHireReview() {
    return c(this.#we);
  }
  set pendingHireReview(e) {
    d(this.#we, e, !0);
  }
  team = new It();
  #be = u("idle");
  get pendingHireLoadStatus() {
    return c(this.#be);
  }
  set pendingHireLoadStatus(e) {
    d(this.#be, e, !0);
  }
  #ye = u(null);
  get pendingHireMode() {
    return c(this.#ye);
  }
  set pendingHireMode(e) {
    d(this.#ye, e, !0);
  }
  #c = 0;
  #ve = u(null);
  get onboardingCompanionId() {
    return c(this.#ve);
  }
  set onboardingCompanionId(e) {
    d(this.#ve, e, !0);
  }
  #Ce = u(null);
  get onboardingCompanionVisualsSeed() {
    return c(this.#Ce);
  }
  set onboardingCompanionVisualsSeed(e) {
    d(this.#Ce, e, !0);
  }
  #Se = u(null);
  get onboardingCompanionAppearance() {
    return c(this.#Se);
  }
  set onboardingCompanionAppearance(e) {
    d(this.#Se, e, !0);
  }
  #Ie = u(null);
  get companionPreviewError() {
    return c(this.#Ie);
  }
  set companionPreviewError(e) {
    d(this.#Ie, e, !0);
  }
  #ke = u(null);
  get companionName() {
    return c(this.#ke);
  }
  set companionName(e) {
    d(this.#ke, e, !0);
  }
  #_e = u(!1);
  get companionNameSelected() {
    return c(this.#_e);
  }
  set companionNameSelected(e) {
    d(this.#_e, e, !0);
  }
  #Te = u(null);
  get companionPersonality() {
    return c(this.#Te);
  }
  set companionPersonality(e) {
    d(this.#Te, e, !0);
  }
  #Pe = u(null);
  get introFlow() {
    return c(this.#Pe);
  }
  set introFlow(e) {
    d(this.#Pe, e, !0);
  }
  #Oe = u(!1);
  get answeringCard() {
    return c(this.#Oe);
  }
  set answeringCard(e) {
    d(this.#Oe, e, !0);
  }
  #Ae = u(void 0);
  get shownCardId() {
    return c(this.#Ae);
  }
  set shownCardId(e) {
    d(this.#Ae, e, !0);
  }
  #Ne = N(() => j(this.introFlow, this.step.id, this.shownCardId));
  get setupCards() {
    return c(this.#Ne);
  }
  set setupCards(e) {
    d(this.#Ne, e);
  }
  #Ee = N(() => this.setupCards.filter((e) => !e.resolution));
  get pendingSetupCards() {
    return c(this.#Ee);
  }
  set pendingSetupCards(e) {
    d(this.#Ee, e);
  }
  #xe = N(() => {
    if (c(this.#E)) return null;
    if (this.shownCardId === void 0) return this.setupCards[0] ?? null;
    const e = this.setupCards.find((t) => t.content.id === this.shownCardId);
    return e || (this.pendingSetupCards[0] ?? null);
  });
  get activeCard() {
    return c(this.#xe);
  }
  set activeCard(e) {
    d(this.#xe, e);
  }
  #De = N(() =>
    (this.step.id !== "workplace" && this.step.id !== "use-cases") ||
    this.activeCard ||
    this.backgroundError ||
    this.handoffPreparationFailed ||
    (this.introFlow?.handoffPhase ?? "idle") !== "idle"
      ? !1
      : !this.introFlow?.cards?.some(
          ({ content: t, resolution: i }) =>
            t.kind === "question" &&
            t.firstTask &&
            (i?.answer.kind === "option" ||
              i?.answer.kind === "options" ||
              i?.answer.kind === "text"),
        ) && this.introFlow?.research?.active !== !1,
  );
  get waitingForResearch() {
    return c(this.#De);
  }
  set waitingForResearch(e) {
    d(this.#De, e);
  }
  #Me = u(!1);
  get companionRendererReady() {
    return c(this.#Me);
  }
  set companionRendererReady(e) {
    d(this.#Me, e, !0);
  }
  #Re = u(!1);
  get companionIntroComplete() {
    return c(this.#Re);
  }
  set companionIntroComplete(e) {
    d(this.#Re, e, !0);
  }
  #Fe = u(!1);
  get welcomeGreetingCarried() {
    return c(this.#Fe);
  }
  set welcomeGreetingCarried(e) {
    d(this.#Fe, e, !0);
  }
  #ze = u(!1);
  get welcomeGreetingLanded() {
    return c(this.#ze);
  }
  set welcomeGreetingLanded(e) {
    d(this.#ze, e, !0);
  }
  #Le = u(!1);
  get welcomeCompanionThumbsUpPlaying() {
    return c(this.#Le);
  }
  set welcomeCompanionThumbsUpPlaying(e) {
    d(this.#Le, e, !0);
  }
  #He = u(!1);
  get reactionThumbsUpPlaying() {
    return c(this.#He);
  }
  set reactionThumbsUpPlaying(e) {
    d(this.#He, e, !0);
  }
  #A = null;
  #m = null;
  #V = null;
  #B = !1;
  #Ge = Promise.resolve();
  #qe = N(() =>
    pt(
      this.onboardingCompanionVisualsSeed ||
        this.onboardingCompanionId ||
        "default",
      this.onboardingCompanionAppearance,
    ),
  );
  get companionColors() {
    return c(this.#qe);
  }
  set companionColors(e) {
    d(this.#qe, e);
  }
  steps = P;
  #Ve = N(() => this.step.contentLayout === "centered");
  get isCenteredSetup() {
    return c(this.#Ve);
  }
  set isCenteredSetup(e) {
    d(this.#Ve, e);
  }
  #Be = N(() =>
    (this.step.guideMessage ? [this.step.guideMessage] : []).map((t) =>
      t
        .replace("{name}", this.formData.name.trim() || "there")
        .replace("{companionName}", this.companionName?.trim() || "That name")
        .replace(
          "{organization}",
          this.formData.company.trim() || "your workplace",
        ),
    ),
  );
  get guideMessages() {
    return c(this.#Be);
  }
  set guideMessages(e) {
    d(this.#Be, e);
  }
  constructor() {
    setTimeout(() => {
      (this.#Ue(), this.#et());
    }, 0);
  }
  #Ue() {
    if (!this.#de) {
      if (!h.isReady || !h.windowId) {
        setTimeout(() => this.#Ue(), 50);
        return;
      }
      this.#de = h.subscribeState("onboarding.flow", h.windowId, (e) => {
        if (this.step.id === "workplace" || this.step.id === "use-cases") {
          const t = this.activeCard;
          t && (this.shownCardId = t.content.id);
        }
        (this.#x &&
          this.#x !== e.runId &&
          (this.progress = {
            value: 0,
            frontier: 0,
            completedItems: [],
            positions: { "step:welcome": 0 },
          }),
          (this.#x = e.runId),
          (this.introFlow = e),
          this.#S(),
          this.#Ze(),
          this.#at(e),
          e.handoffPhase === "ready"
            ? ((this.handoffPreparationFailed = !1),
              (this.#d || ce(this.step.id, e.handoffPhase)) &&
                h.command({
                  domain: "onboarding",
                  action: "completeHandoff",
                  payload: {},
                }))
            : e.handoffPhase === "failed"
              ? ((this.#d = !1),
                (this.#_ = !1),
                (this.handoffPreparationFailed = !0))
              : e.handoffPhase === "complete" && (this.completed = !0),
          this.continueAfterQuestions());
      });
    }
  }
  async #et() {
    try {
      const { value: e } = await h.invoke("settings:get", {
        key: "hasCompletedOnboarding",
      });
      if (e) {
        this.completed = !0;
        return;
      }
    } catch (e) {
      console.error("[Onboarding] Failed to initialize onboarding:", e);
    }
    try {
      await this.resumeSetup();
    } catch {
      this.backgroundError =
        "Your browser setup could not load. Continue to retry.";
    }
    this.prepareCompanionPreview().catch(() => {});
  }
  #U = null;
  resumeSetup() {
    return (
      (this.#U ??= this.#tt()
        .catch((e) => {
          throw ((this.#U = null), e);
        })
        .finally(() => {
          this.setupReady = !0;
        })),
      this.#U
    );
  }
  async #tt() {
    const e = await h.query({
      domain: "onboarding",
      action: "resumeSetup",
      payload: {},
    });
    if (!e.success) throw new Error(e.error);
    (e.formData && (this.formData = e.formData),
      (this.backgroundError = null),
      e.activeStep !== this.step.id && this.goToStep(e.activeStep, void 0));
  }
  prepareCompanionPreview() {
    return ((this.#O ??= this.#it()), this.#O);
  }
  async #it() {
    this.companionPreviewError = null;
    try {
      const e = await h.query({
        domain: "onboarding",
        action: "getCompanionPreview",
        payload: {},
      });
      if (e.success === !1) throw new Error(e.error);
      if (this.restoredAccount) return;
      if (e.companion) {
        ((this.onboardingCompanionId = e.companion.id),
          (this.onboardingCompanionVisualsSeed = e.companion.visualsSeed),
          (this.onboardingCompanionAppearance = e.companion.appearance),
          (this.companionName = e.companion.name),
          (this.receivedSharedCompanion = e.companion.shared ?? !1));
        return;
      }
      const t = e.draft.visualsSeed;
      let i = e.draft.appearance;
      if (!i) {
        const { createOnboardingCompanionAppearance: o } = await Oe(
          async () => {
            const { createOnboardingCompanionAppearance: s } = await import(
              "./UtFdZ35K.js"
            );
            return { createOnboardingCompanionAppearance: s };
          },
          __vite__mapDeps([0, 1, 2, 3, 4, 5]),
          import.meta.url,
        );
        i = await o(t);
      }
      if (this.restoredAccount) return;
      if (
        ((this.onboardingCompanionVisualsSeed = t),
        (this.onboardingCompanionAppearance = i),
        (this.companionName = e.draft.name),
        (this.companionNameSelected = e.draft.name !== null),
        (this.companionPersonality = "normal"),
        i !== e.draft.appearance && !(await this.saveCompanionPreview()))
      )
        throw new Error("Your companion could not be saved.");
    } catch (e) {
      if (this.restoredAccount) return;
      throw (
        (this.#O = null),
        this.#v("prepare_companion"),
        (this.companionPreviewError =
          "Your companion could not load. Try again."),
        e
      );
    }
  }
  async saveCompanionPreview() {
    const e = this.onboardingCompanionVisualsSeed;
    if (!e) return !1;
    const t = await h.query({
      domain: "onboarding",
      action: "saveCompanionPreview",
      payload: {
        visualsSeed: e,
        appearance: this.onboardingCompanionAppearance,
        name: this.companionNameSelected ? this.companionName : null,
      },
    });
    return (t.success || this.#v("save_companion"), t.success);
  }
  #N() {
    return ((this.#A ??= this.#nt()), this.#A);
  }
  async #nt() {
    try {
      await this.prepareCompanionPreview();
      const e = this.companionNameSelected ? this.companionName : null,
        {
          id: t,
          visualsSeed: i,
          appearance: o,
          name: s,
        } = await h.invoke("onboarding:ensure-onboarding-companion", {
          visualsSeed: this.onboardingCompanionVisualsSeed ?? void 0,
          appearance: this.onboardingCompanionAppearance ?? void 0,
        });
      ((this.onboardingCompanionId = t),
        (this.onboardingCompanionVisualsSeed = i || t),
        (this.onboardingCompanionAppearance = o),
        (this.companionName = e ?? s));
    } catch (e) {
      throw ((this.#A = null), e);
    }
  }
  #Ye = u(null);
  get backgroundError() {
    return c(this.#Ye);
  }
  set backgroundError(e) {
    d(this.#Ye, e, !0);
  }
  #We = u(null);
  get backgroundAccessDenied() {
    return c(this.#We);
  }
  set backgroundAccessDenied(e) {
    d(this.#We, e, !0);
  }
  #t = null;
  #u = null;
  #l = null;
  #je(e) {
    ((this.onboardingCompanionId = e?.id ?? null),
      (this.onboardingCompanionVisualsSeed = e?.visualsSeed ?? null),
      (this.onboardingCompanionAppearance = e?.appearance ?? null),
      (this.companionName = e?.name ?? null));
  }
  #ot(e) {
    const t = window.electronAPI?.getProfileId();
    if (!t) return;
    let i = !0,
      o = !1,
      s = !1;
    const r = () =>
        i &&
        this.restoredAccount &&
        !this.completed &&
        this.#t === e &&
        z.user?.id === e &&
        window.electronAPI?.getProfileId() === t,
      a = async () => {
        if (!o) {
          o = !0;
          try {
            for (; s && r(); ) {
              s = !1;
              const w = await h.query({
                domain: "onboarding",
                action: "restoreAccount",
                payload: { choice: "check" },
              });
              if (!r()) return;
              if (w.success && w.restored && w.companion) {
                (this.#je(w.companion), this.#l?.(), (this.#l = null));
                return;
              }
            }
          } catch {
          } finally {
            ((o = !1), s && r() && a());
          }
        }
      },
      p = h.subscribeState("companions.list", t, (w) => {
        const f =
          w.chatCompanions?.map(({ companion: b }) => b) ?? w.companions;
        !r() ||
          !f.some((b) => !b.isTemporary && !b.isDraft && Ee(b)) ||
          ((s = !0), a());
      });
    this.#l = () => {
      ((i = !1), p());
    };
  }
  get canRetryBackground() {
    return (
      this.backgroundError !== null &&
      !this.isLoading &&
      this.#t !== null &&
      this.#u === null
    );
  }
  resumeBackground(e) {
    return this.#t === e && this.#u !== null
      ? this.#u
      : (this.#l?.(),
        (this.#l = null),
        this.#t &&
          this.#t !== e &&
          ((this.backgroundAccessDenied = null),
          this.#o.clear(),
          (this.layoutChoiceSource = "default"),
          (this.#p = void 0)),
        (this.restoredAccount = !1),
        (this.returningImportProfileId = null),
        (this.#t = e),
        (this.isLoading = !0),
        (this.#u = this.#st(e)
          .catch((t) => {
            this.#t === e &&
              ((this.backgroundAccessDenied =
                t instanceof G ? (t.accessDenied ?? null) : null),
              (this.backgroundError =
                t instanceof G
                  ? t.message
                  : "Your setup could not load. Try again."),
              (this.#u = null),
              this.#v("resume"));
          })
          .finally(() => {
            this.#t === e && (this.isLoading = !1);
          })),
        this.#u);
  }
  #$e = u(!1);
  get restoredAccount() {
    return c(this.#$e);
  }
  set restoredAccount(e) {
    d(this.#$e, e, !0);
  }
  #Ke = u(null);
  get returningImportProfileId() {
    return c(this.#Ke);
  }
  set returningImportProfileId(e) {
    d(this.#Ke, e, !0);
  }
  async #st(e) {
    await this.resumeSetup();
    const t = await h.query({
      domain: "onboarding",
      action: "restoreAccount",
      payload: { choice: "check" },
    });
    if (!t.success) throw new G(t.error, t.accessDenied);
    if (this.#t !== e) return;
    if (((this.restoredAccount = t.restored), t.restored)) {
      (this.#je(t.companion),
        (this.companionPreviewError = null),
        (this.#O = Promise.resolve()),
        (this.backgroundError = null),
        (this.backgroundAccessDenied = null),
        this.goToStep("authentication", "forward"),
        t.companion || this.#ot(e));
      return;
    }
    await this.#N();
    const i = await h.query({
      domain: "onboarding",
      action: "resumeBackground",
      payload: {},
    });
    if (!i.success) throw new G(i.error, i.accessDenied);
    ((i.activeStep === "authentication" || i.activeStep === "team") &&
      (await Promise.all([this.team.load(e), this.loadPendingHireReview()])),
      this.#t === e &&
        ((this.backgroundError = null),
        (this.backgroundAccessDenied = null),
        i.formData && (this.formData = i.formData),
        this.#Ze(),
        i.activeStep !== this.step.id &&
          this.goToStep(i.activeStep, "forward")));
  }
  async chooseReturningAccount(e) {
    const t = this.#t;
    if (!t || !this.restoredAccount)
      throw new Error("Sign in to load your saved setup.");
    const i = h.query({
      domain: "onboarding",
      action: "restoreAccount",
      payload: { choice: e },
    });
    if (e === "continue") {
      try {
        const s = await x(i, 3e4, "Saved setup timed out");
        if (s.success && s.restored) return;
      } catch {}
      this.#t === t &&
        h.command({ domain: "onboarding", action: "openBrowser", payload: {} });
      return;
    }
    const o = await i;
    if (!o.success) throw new Error(o.error);
    if (this.#t === t) {
      if (e === "import") {
        if (!o.restored || !o.importProfileId)
          throw new Error("Your saved profile could not load. Try again.");
        ((this.returningImportProfileId = o.importProfileId),
          (this.backgroundError = null),
          this.goToStep("browser-import", "forward"));
        return;
      }
      if (
        e === "review" &&
        !o.restored &&
        ((this.#u = null), await this.resumeBackground(t), this.backgroundError)
      )
        throw new Error(this.backgroundError);
    }
  }
  #Qe = u(!1);
  get skippingRemainingSetup() {
    return c(this.#Qe);
  }
  set skippingRemainingSetup(e) {
    d(this.#Qe, e, !0);
  }
  async skipRemainingSetup() {
    if (!this.skippingRemainingSetup) {
      ((this.skippingRemainingSetup = !0),
        this.trackSkipAll("confirmed"),
        this.endSetupTelemetry("skip"),
        this.#Y("skip", null),
        await x(this.flushCompanionCustomization(), 5e3).catch(() => !1));
      try {
        h.command({
          domain: "onboarding",
          action: "skipRemaining",
          payload: {
            companionPersonality: this.companionPersonality ?? void 0,
          },
        });
      } catch {
        this.exitSetup();
      }
      (window.setTimeout(() => this.exitSetup(), Ot),
        window.setTimeout(() => (this.skippingRemainingSetup = !1), At));
    }
  }
  trackSkipAll(e) {
    I(
      this.introFlow,
      "onboarding_skip_all_event",
      { action: e, step_id: this.step.id },
      "onboarding/state.svelte.ts",
    );
  }
  exitSetup() {
    h.command({ domain: "onboarding", action: "exitSetup", payload: {} });
  }
  restart() {
    this.isLoading ||
      this.isNavigating ||
      this.answeringCard ||
      ((this.isNavigating = !0),
      this.#l?.(),
      (this.#l = null),
      h.command({ domain: "onboarding", action: "restart", payload: {} }));
  }
  async recommendLayout() {
    const e = await h.query({
      domain: "onboarding",
      action: "recommendLayout",
      payload: {},
    });
    return e.success ? e.recommendation : null;
  }
  async applePasswordImport(e, t) {
    return h.query({ domain: "profile", action: e, payload: { profileId: t } });
  }
  async importBrowserProfile(e) {
    const t =
      e.browser === "safari"
        ? { dataTypes: ["bookmarks", "history"], includeZoom: !1 }
        : {};
    if (this.restoredAccount) {
      if (!this.returningImportProfileId)
        throw new Error(
          "Your saved profile could not load. Go back and try again.",
        );
      return h.invoke("profile:import-to-existing", {
        browserProfile: e,
        targetProfileId: this.returningImportProfileId,
        ...t,
      });
    }
    return h.invoke("profile:import-profile", {
      browserProfile: e,
      onboardingRunId: this.introFlow?.runId,
      ...t,
    });
  }
  async saveCurrentStep(e) {
    const t = z.isAuthenticated ? z.user?.id : void 0,
      i = this.step.id;
    try {
      if (t) {
        if (
          (await this.resumeBackground(t), this.step.id !== i || this.#t !== t)
        )
          return !1;
      } else {
        if (i !== "welcome") return !0;
        if ((await this.resumeSetup(), this.step.id !== i)) return !1;
      }
      this.formData.stepsCompleted = this.stepIndex + 1;
      const o = await h.query({
        domain: "onboarding",
        action: "saveStep",
        payload: {
          step: i,
          nextStep: e,
          formData: this.formData,
          editedProfileFields: ["name", "company", "roleTitle"].filter((s) =>
            this.#o.has(s),
          ),
        },
      });
      return (
        (this.backgroundError = o.success ? null : o.error),
        o.success || this.#v("save_step"),
        o.success
      );
    } catch {
      return (
        (this.backgroundError =
          "Your onboarding progress could not be saved. Try again."),
        this.#v("save_step"),
        !1
      );
    }
  }
  #at(e) {
    if (this.#R === e.runId) return;
    const t = this.#R ? "restarted" : "first_launch";
    ((this.#R = e.runId),
      this.#L.clear(),
      this.#H.clear(),
      (this.#a = null),
      (this.#P = 0),
      (this.#G = 0),
      (this.#q = 0),
      I(
        e,
        "onboarding_run_started",
        { entry_point: e.completedSteps?.length ? "resumed" : t },
        "onboarding/state.svelte.ts",
      ),
      this.#Xe());
  }
  #Xe() {
    if (!this.introFlow) return;
    const e = (this.#L.get(this.step.id) ?? 0) + 1;
    (this.#L.set(this.step.id, e),
      (this.#F = e),
      (this.#ce = Date.now()),
      (this.#z = this.#P++),
      I(
        this.introFlow,
        "onboarding_step_viewed",
        {
          step_id: this.step.id,
          step_index: this.stepIndex,
          phase: this.step.phase,
          presentation_mode: "content",
          visit_number: e,
          view_index: this.#z,
        },
        "onboarding/state.svelte.ts",
      ));
  }
  #Y(e, t) {
    !this.introFlow ||
      this.#F === 0 ||
      I(
        this.introFlow,
        "onboarding_step_exited",
        {
          step_id: this.step.id,
          step_index: this.stepIndex,
          phase: this.step.phase,
          action: e,
          next_step_id: t,
          dwell_ms: Math.max(0, Date.now() - this.#ce),
          visit_number: this.#F,
          view_index: this.#z,
        },
        "onboarding/state.svelte.ts",
      );
  }
  trackSetupScreen(e, t) {
    if (
      this.introFlow &&
      !(this.step.id !== "workplace" && this.step.id !== "use-cases") &&
      !(e && this.#a?.kind === "card" && this.#a.id === e.content.id) &&
      !(!e && t && this.#a?.kind === "waiting")
    ) {
      if (
        (this.endSetupTelemetry(
          this.direction === "backward" ? "back" : "next",
        ),
        e)
      ) {
        const i =
          this.introFlow.cards?.findIndex(
            (r) => r.content.id === e.content.id,
          ) ?? -1;
        if (i < 0) return;
        const o = (this.#H.get(e.content.id) ?? 0) + 1;
        this.#H.set(e.content.id, o);
        const s = {
          ...oe(e, i),
          action: "viewed",
          step_id: this.step.id,
          view_index: this.#P++,
          visit_number: o,
          already_answered: !!e.resolution,
        };
        ((this.#a = {
          kind: "card",
          id: e.content.id,
          data: s,
          startedAt: Date.now(),
          stepId: this.step.id,
        }),
          I(
            this.introFlow,
            "onboarding_card_event",
            s,
            "onboarding/state.svelte.ts",
          ));
      } else if (t) {
        const i = this.step.id === "use-cases" ? "suggestions" : "questions",
          o = this.#P++;
        ((this.#a = {
          kind: "waiting",
          stage: i,
          viewIndex: o,
          startedAt: Date.now(),
          stepId: this.step.id,
        }),
          I(
            this.introFlow,
            "onboarding_wait_event",
            { action: "started", stage: i, view_index: o, duration_ms: 0 },
            "onboarding/state.svelte.ts",
          ));
      }
    }
  }
  endSetupTelemetry(e, t) {
    const i = this.#a;
    if (!i || (t && t !== i.stepId)) return;
    this.#a = null;
    const o = Math.max(0, Date.now() - i.startedAt);
    if (i.kind === "card")
      I(
        this.introFlow,
        "onboarding_card_event",
        { ...i.data, action: "exited", exit_action: e, dwell_ms: o },
        "onboarding/state.svelte.ts",
      );
    else {
      let s = "navigated";
      (this.activeCard && (s = "card_ready"),
        this.backgroundError && (s = "error"),
        e === "complete" && (s = "handoff"),
        I(
          this.introFlow,
          "onboarding_wait_event",
          {
            action: "finished",
            stage: i.stage,
            view_index: i.viewIndex,
            duration_ms: o,
            outcome: s,
          },
          "onboarding/state.svelte.ts",
        ));
    }
  }
  #v(e) {
    I(
      this.introFlow,
      "onboarding_error_event",
      { operation: e, step_id: this.step.id },
      "onboarding/state.svelte.ts",
    );
  }
  #Ze() {
    const e = this.introFlow?.prefill,
      t = new Set(this.#o);
    for (const o of this.introFlow?.confirmedFields ?? []) t.add(o);
    if (
      (!t.has("name") &&
        !this.introFlow?.completedSteps?.includes("user-name") &&
        this.introFlow?.firstName !== void 0 &&
        (this.formData.name = this.introFlow.firstName ?? ""),
      t.add("name"),
      !e)
    )
      return;
    const i = rt(this.formData, e, t, [], this.#p);
    ((this.#p = e), (this.formData = { ...this.formData, ...i }));
  }
  async reportConnectionFailure(e, t) {
    const i = this.introFlow?.runId;
    if (i) {
      try {
        if (
          (
            await h.query({
              domain: "onboarding",
              action: "reportConnectionFailure",
              payload: { runId: i, cardId: e, attemptId: t },
            })
          ).success
        )
          return;
      } catch {}
      console.warn("[Onboarding] Connection error handoff failed", {
        userId: z.user?.id,
        runId: i,
        attemptId: t,
        outcome: "failed",
        reason: "connection_failure_handoff_failed",
      });
    }
  }
  async recordConnection(e, t, i, o) {
    return this.introFlow
      ? h.query({
          domain: "onboarding",
          action: "recordConnection",
          payload: {
            runId: this.introFlow.runId,
            cardId: e,
            offerId: t,
            appId: i,
            connectionId: o,
          },
        })
      : {
          success: !1,
          error: "This onboarding run is unavailable.",
          retry: "connect",
        };
  }
  async answerCard(e, t) {
    if (!this.introFlow || this.answeringCard)
      return { success: !1, error: "An answer is already being saved." };
    const i = this.introFlow.cards?.find((a) => a.content.id === e),
      o = this.introFlow.cards?.findIndex((a) => a.content.id === e) ?? -1,
      s = Date.now(),
      r = (a) => {
        !i ||
          o < 0 ||
          I(
            this.introFlow,
            "onboarding_card_event",
            {
              ...oe(i, o),
              ...dt(t),
              ...(a === "answered" ? ct(i, t) : {}),
              action: a,
              step_id: this.step.id,
              changed_answer: !!i.resolution,
              save_duration_ms: Math.max(0, Date.now() - s),
            },
            "onboarding/state.svelte.ts",
          );
      };
    ((this.shownCardId = e),
      (this.direction = "forward"),
      (this.answeringCard = !0));
    try {
      const a = await h.query({
        domain: "onboarding",
        action: "respondToCard",
        payload: {
          runId: this.introFlow.runId,
          id: e,
          answer: t,
          replaceAnsweredAt: i?.resolution?.answeredAt,
        },
      });
      if (!a.success) return (r("answer_failed"), a);
      if (
        (r("answered"),
        (this.reactionThumbsUpPlaying =
          t.kind === "confirm" &&
          (this.introFlow.cards ?? []).some(
            ({ content: b }) => b.onlyAfter?.questionId === e,
          )),
        (this.introFlow = {
          ...this.introFlow,
          cards: (this.introFlow.cards ?? []).map((b) =>
            b.content.id !== e ||
            (b.resolution?.answeredAt ?? 0) >
              (a.card.resolution?.answeredAt ?? 0)
              ? b
              : a.card,
          ),
        }),
        i?.content.kind === "question" && t.kind !== "dismiss" && a.formData)
      ) {
        const b = i.content.confirmation?.field ?? i.content.field;
        if (b) {
          const U =
            b === "company" && a.formData.company !== this.formData.company;
          (this.updateForm({ [b]: a.formData[b] }),
            U &&
              (this.#o.delete("roleTitle"),
              (this.formData = {
                ...this.formData,
                organizationTypeId: a.formData.organizationTypeId,
                organizationSizeId: a.formData.organizationSizeId,
                organizationTypeOther: a.formData.organizationTypeOther,
                role: a.formData.role,
                roleTitle: a.formData.roleTitle,
                roleIds: a.formData.roleIds,
                roleMatches: a.formData.roleMatches,
              })));
        }
      }
      const p = this.setupCards.findIndex((b) => b.content.id === e),
        w = this.setupCards.slice(p + 1),
        f = i?.resolution ? w[0] : w.find((b) => !b.resolution);
      return (
        this.endSetupTelemetry(t.kind === "dismiss" ? "skip" : "next"),
        (this.shownCardId = f?.content.id ?? null),
        this.#S([`card:${e}`]),
        { success: !0 }
      );
    } catch {
      return (
        r("answer_failed"),
        {
          success: !1,
          error: "Your answer could not be saved. Please try again.",
        }
      );
    } finally {
      ((this.answeringCard = !1), this.continueAfterQuestions());
    }
  }
  updateForm(e) {
    e.company !== void 0 &&
      e.company !== this.formData.company &&
      ((this.formData.role = ""),
      (this.formData.roleTitle = ""),
      (this.formData.roleIds = []),
      (this.formData.roleMatches = []),
      this.#o.delete("roleTitle"),
      !this.#o.has("organizationTypeId") &&
        this.#p?.fields.organizationTypeId &&
        (this.formData.organizationTypeId = null),
      !this.#o.has("organizationSizeId") &&
        this.#p?.fields.organizationSizeId &&
        (this.formData.organizationSizeId = null),
      !this.#o.has("organizationTypeOther") &&
        this.#p?.fields.organizationTypeOther &&
        (this.formData.organizationTypeOther = ""));
    for (const t of Object.keys(e)) this.#o.add(t);
    this.formData = { ...this.formData, ...e };
  }
  notifyCompanionReady() {
    this.companionRendererReady = !0;
    const e = Array.from(this.#D);
    this.#D.clear();
    for (const t of e) t();
  }
  waitForCompanionRenderer() {
    return this.companionRendererReady
      ? Promise.resolve()
      : new Promise((e) => this.#D.add(e));
  }
  notifyCompanionIntroComplete() {
    if (this.companionIntroComplete) return;
    this.companionIntroComplete = !0;
    const e = Array.from(this.#M);
    this.#M.clear();
    for (const t of e) t();
  }
  waitForCompanionIntro() {
    return this.companionIntroComplete
      ? Promise.resolve()
      : new Promise((e) => this.#M.add(e));
  }
  carryWelcomeGreeting() {
    this.welcomeGreetingCarried = !0;
  }
  landWelcomeGreeting() {
    this.welcomeGreetingLanded = !0;
  }
  requestWelcomeCompanionThumbsUp() {
    this.step.id !== "welcome" ||
      !this.companionIntroComplete ||
      (this.welcomeCompanionThumbsUpPlaying = !0);
  }
  finishWelcomeCompanionThumbsUp() {
    this.welcomeCompanionThumbsUpPlaying = !1;
  }
  finishReactionThumbsUp() {
    this.reactionThumbsUpPlaying = !1;
  }
  prepareCompanion() {
    return this.#N();
  }
  async loadPendingHireReview() {
    if (this.pendingHireReview) return this.pendingHireReview;
    if (this.#m !== null) return this.#m;
    const e = this.#c,
      t = x(this.#rt(e), 1e4).catch(
        () => (
          e === this.#c &&
            ((this.#c += 1), (this.pendingHireLoadStatus = "error")),
          null
        ),
      );
    this.#m = t;
    try {
      return await t;
    } finally {
      this.#m === t && (this.#m = null);
    }
  }
  async #rt(e) {
    this.pendingHireLoadStatus = "loading";
    try {
      const t = await h.invoke("onboarding:get-pending-hire", {});
      if (e !== this.#c) return null;
      if (!t) throw new Error("The requested companion could not be checked.");
      const i = t.intent ?? null,
        o = i && "officialCompanionId" in i ? i.officialCompanionId : null;
      if (
        ((this.pendingHireKind = o ? "official" : "published"),
        (this.pendingHireId = o ?? t.companionId),
        (this.pendingIntentId = i?.id ?? null),
        (this.pendingHireMode =
          i && "companionId" in i ? (i.mode ?? null) : null),
        !this.pendingHireId)
      )
        return ((this.pendingHireLoadStatus = "none"), null);
      const s = await h.query({
        domain: "companions",
        action: "getHireReview",
        payload: o
          ? { officialCompanionId: o }
          : {
              companionId: this.pendingHireId,
              ...(this.pendingHireMode
                ? { expectedMode: this.pendingHireMode }
                : {}),
            },
      });
      if (e !== this.#c) return null;
      if (s.success === !1) throw new Error(s.error);
      return (
        (this.pendingHireReview = {
          companionId: s.profile.companionId,
          creatorName: s.profile.creator?.name,
          description:
            s.profile.profile.summary ?? s.profile.profile.about?.slice(0, 240),
          skillCount: s.profile.profile.templateSkills?.length ?? 0,
          contentHash: s.profile.contentHash,
          runtime: {
            name: s.profile.runtime.name,
            appearance: s.profile.runtime.appearance,
            visualsSeed: s.profile.runtime.visualsSeed,
          },
          mode: s.mode,
        }),
        (this.pendingHireLoadStatus = "ready"),
        this.pendingHireReview
      );
    } catch {
      return (e === this.#c && (this.pendingHireLoadStatus = "error"), null);
    }
  }
  resetPendingHireReview() {
    (this.cancelPendingHireLoad(),
      (this.pendingHireId = null),
      (this.pendingHireKind = "published"),
      (this.pendingIntentId = null),
      (this.pendingHireMode = null),
      (this.pendingHireReview = null),
      (this.pendingHireLoadStatus = "idle"));
  }
  cancelPendingHireLoad() {
    ((this.#c += 1),
      (this.#m = null),
      (this.pendingHireLoadStatus = this.pendingHireReview ? "ready" : "idle"));
  }
  async clearPendingHireReview() {
    try {
      await h.invoke("onboarding:clear-pending-hire", {});
    } finally {
      this.resetPendingHireReview();
    }
  }
  #dt(e, t = () => {}) {
    if ((this.#h?.(), this.companionPlacement === e && this.companionVisible)) {
      ((this.companionMotionPaused = !1), (this.#h = null), t());
      return;
    }
    if (de(this.companionPlacement) && de(e)) {
      ((this.companionMotionPaused = !1),
        (this.companionVisible = !0),
        (this.companionPlacement = e));
      const i = globalThis.setTimeout(() => {
        ((this.#h = null), t());
      }, yt);
      this.#h = () => globalThis.clearTimeout(i);
      return;
    }
    this.#h = vt(e, {
      hide: () => {
        ((this.companionMotionPaused = !1), (this.companionVisible = !1));
      },
      place: (i) => {
        ((this.companionMotionPaused = !0), (this.companionPlacement = i));
      },
      show: () => {
        ((this.companionMotionPaused = !1), (this.companionVisible = !0));
      },
      complete: () => {
        ((this.#h = null), t());
      },
    });
  }
  setStoryContinueReady(e) {
    this.storyContinueReady = e;
  }
  #W() {
    this.#w !== void 0 && (window.clearTimeout(this.#w), (this.#w = void 0));
  }
  #j() {
    this.#b !== void 0 && (window.clearTimeout(this.#b), (this.#b = void 0));
  }
  #Je(e, t = !1) {
    const o = !!P[ue(e)]?.guideMessage;
    if ((this.#W(), !o)) {
      ((this.guideMessageShouldPlay = !1),
        (this.guideMessageShouldAnimate = !1),
        (this.guideMessageSpeaking = !1),
        (this.guideCompanionExpanded = !1),
        (this.guideCompanionScaleTransitionEnabled = !0));
      return;
    }
    if (((this.guideCompanionScaleTransitionEnabled = !0), t)) {
      ((this.guideMessageShouldPlay = !0),
        (this.guideMessageShouldAnimate = !0),
        (this.guideMessageSpeaking = !0),
        (this.guideCompanionExpanded = !0));
      return;
    }
    ((this.guideMessageShouldPlay = !1),
      (this.guideMessageShouldAnimate = !1),
      (this.guideMessageSpeaking = !1),
      (this.guideCompanionExpanded = !1),
      (this.#w = window.setTimeout(() => {
        ((this.#w = void 0),
          !(this.step.id !== e || this.companionPlacement !== "guide") &&
            ((this.guideCompanionExpanded = !0),
            (this.guideMessageShouldAnimate = !0),
            (this.guideMessageShouldPlay = !0)));
      }, Tt)));
  }
  enableGuideCompanionScaleTransition(e) {
    this.step.id === e && (this.guideCompanionScaleTransitionEnabled = !0);
  }
  setGuideMessageSpeaking(e, t) {
    this.step.id === e && (this.guideMessageSpeaking = t);
  }
  revealGuideContent(e) {
    this.step.id === e &&
      (this.#j(),
      (this.#b = window.setTimeout(() => {
        ((this.#b = void 0),
          this.step.id === e &&
            ((this.guideMessageSpeaking = !1),
            (this.guideCompanionExpanded = !1),
            (this.guideContentPendingStepId = null)));
      }, Pt)));
  }
  collapseGuideCompanion(e) {
    this.step.id === e &&
      ((this.guideMessageSpeaking = !1), (this.guideCompanionExpanded = !1));
  }
  openCustomization() {
    this.receivedSharedCompanion ||
      (d(this.#E, this.waitingForResearch, !0),
      (this.customizationOpen = !0),
      I(
        this.introFlow,
        "onboarding_companion_event",
        { action: "customization_opened" },
        "onboarding/state.svelte.ts",
      ));
  }
  closeCustomization() {
    ((this.customizationOpen = !1),
      d(this.#E, !1),
      I(
        this.introFlow,
        "onboarding_companion_event",
        { action: "customization_closed", appearance_change_count: this.#G },
        "onboarding/state.svelte.ts",
      ));
  }
  retryHandoff() {
    (this.introFlow?.handoffPhase !== "failed" &&
      !this.handoffPreparationFailed) ||
      (I(
        this.introFlow,
        "onboarding_handoff_event",
        {
          action: "retry",
          duration_ms: Math.max(
            0,
            Date.now() - (this.introFlow?.onboardingStartedAt ?? Date.now()),
          ),
        },
        "onboarding/state.svelte.ts",
      ),
      (this.#d = !1),
      (this.handoffPreparationFailed = !1),
      this.complete());
  }
  trackAuthEvent(e, t, i) {
    I(
      this.introFlow,
      "onboarding_auth_event",
      { action: e, mode: t, method: i },
      "onboarding/state.svelte.ts",
    );
  }
  #C(e) {
    return (
      (e.id !== "team" ||
        (!this.receivedSharedCompanion && this.team.shouldShowStep)) &&
      (e.id !== "companion-name" ||
        (!this.receivedSharedCompanion && !this.hiredOfficialCompanion)) &&
      (e.id !== "workplace" ||
        !this.receivedSharedCompanion ||
        !this.formData.company.trim())
    );
  }
  #S(e = []) {
    const t = P.filter(
        (f) => f.id !== "workplace" && f.id !== "use-cases" && this.#C(f),
      ),
      i = this.introFlow?.cards ?? [],
      o = (this.introFlow?.completedSteps ?? []).filter((f) =>
        t.some((b) => b.id === f),
      ),
      s = i.filter((f) => f.resolution),
      r = this.activeCard?.content,
      a =
        this.step.id === "launch" ||
        this.#d ||
        (this.step.id === "use-cases" &&
          r?.kind === "question" &&
          r.firstTask === !0);
    let p = `step:${this.step.id}`;
    (this.step.id === "workplace" || this.step.id === "use-cases") &&
      (p = this.activeCard
        ? `card:${this.activeCard.content.id}`
        : `waiting:${this.step.id}:${i.length}`);
    const w = P.filter((f) => this.#C(f)).flatMap((f) =>
      f.id === "workplace" || f.id === "use-cases"
        ? j(this.introFlow, f.id).map((b) => `card:${b.content.id}`)
        : [`step:${f.id}`],
    );
    this.progress = Ct(
      this.progress,
      [
        ...o.map((f) => `step:${f}`),
        ...s.map((f) => `card:${f.content.id}`),
        ...e,
      ],
      t.length + Math.max(4, i.length),
      {
        key: p,
        index: [...new Set(w)].indexOf(p),
        direction: this.direction,
        finished: a,
      },
    );
  }
  goToStep(e, t, i) {
    let o = ue(e);
    if (
      ((this.receivedSharedCompanion || this.hiredOfficialCompanion) &&
        M(o).id === "companion-name" &&
        (o = le(o, (f) => this.#C(f))),
      (e = M(o).id),
      o < 0 || o >= P.length)
    )
      return !1;
    const s =
        this.companionPlacement === "guide" &&
        this.guideMessageSpeaking &&
        this.guideCompanionExpanded,
      r = o !== this.stepIndex,
      a = [];
    if (
      (r &&
        o > this.stepIndex &&
        this.step.id !== "workplace" &&
        this.step.id !== "use-cases" &&
        a.push(`step:${this.step.id}`),
      r)
    ) {
      this.progressDisplayStepId = null;
      const f = i ?? (o >= this.stepIndex ? "next" : "back");
      (this.endSetupTelemetry(f), this.#Y(f, e));
    }
    if (
      (r && this.#j(),
      r && (this.isNavigating = !0),
      r && (this.welcomeCompanionThumbsUpPlaying = !1),
      (this.direction = t ?? (o >= this.stepIndex ? "forward" : "backward")),
      e !== "launch" && (this.handoffPreparationFailed = !1),
      (this.stepIndex = o),
      r)
    ) {
      const f = j(this.introFlow, e),
        b = this.direction === "backward" ? f.at(-1) : f[0];
      this.shownCardId = b?.content.id;
    }
    if (((this.storyContinueReady = !1), r)) {
      const f = M(o),
        b = !!f.guideMessage,
        U = f.contentLayout !== "story" && f.contentLayout !== "centered";
      this.guideContentPendingStepId = U && b ? e : null;
    }
    const p = M(o).contentLayout;
    let w = "guide";
    return (
      p === "story" && (w = "story"),
      p === "centered" && (w = "center"),
      w === "guide"
        ? this.#Je(e, s)
        : (this.#W(),
          (this.guideMessageShouldPlay = !1),
          (this.guideMessageShouldAnimate = !1),
          (this.guideMessageSpeaking = !1),
          (this.guideCompanionExpanded = !1),
          (this.guideCompanionScaleTransitionEnabled = !0)),
      this.companionPlacement !== w &&
        this.#dt(w, () => {
          w !== "guide" && (this.isNavigating = !1);
        }),
      (this.completed = !1),
      (this.isLoading = !1),
      this.#S(a),
      r || (this.isNavigating = !1),
      ce(e, this.introFlow?.handoffPhase ?? "idle") &&
        h.command({
          domain: "onboarding",
          action: "completeHandoff",
          payload: {},
        }),
      r && this.#Xe(),
      !0
    );
  }
  finishNavigation() {
    ((this.isNavigating = !1), this.continueAfterQuestions());
  }
  async continueAfterQuestions() {
    if (
      this.step.id !== "workplace" ||
      this.direction !== "forward" ||
      this.isNavigating ||
      this.answeringCard ||
      this.activeCard
    )
      return;
    const e = this.introFlow?.cards ?? [],
      t = e.some(
        (s) =>
          s.content.kind === "question" && !s.content.firstTask && s.resolution,
      ),
      i = e.some((s) => s.content.kind === "question" && s.content.firstTask),
      o = this.introFlow?.research?.active === !1;
    (t || i || o || this.backgroundError) && (await this.next());
  }
  async next(e = "next") {
    if (this.isLoading || this.isNavigating || this.answeringCard) return;
    if (
      ((this.isNavigating = !0),
      this.restoredAccount && this.step.id === "browser-import")
    ) {
      this.backgroundError = null;
      try {
        await this.chooseReturningAccount("continue");
      } catch {
        this.backgroundError = "Your saved setup could not open. Try again.";
      } finally {
        this.isNavigating = !1;
      }
      return;
    }
    const t = le(this.stepIndex, (o) => this.#C(o));
    if (t < 0) {
      this.complete();
      return;
    }
    const i = M(t);
    if (i && !(await this.saveCurrentStep(i.id))) {
      this.isNavigating = !1;
      return;
    }
    if (!i || !this.goToStep(i.id, "forward", e)) {
      this.isNavigating = !1;
      return;
    }
  }
  back() {
    if (this.isNavigating || this.answeringCard || this.stepIndex === 0) return;
    if (this.step.id === "workplace" || this.step.id === "use-cases") {
      const s = this.activeCard
          ? this.setupCards.findIndex(
              (a) => a.content.id === this.activeCard?.content.id,
            )
          : this.setupCards.length,
        r = this.setupCards[s - 1];
      if (r) {
        (this.endSetupTelemetry("back"),
          (this.shownCardId = r.content.id),
          (this.direction = "backward"),
          this.#S(),
          this.formData.wentBackCount++);
        return;
      }
    }
    if (
      ((this.isNavigating = !0),
      this.formData.wentBackCount++,
      this.restoredAccount && this.step.id === "browser-import")
    ) {
      this.goToStep("authentication", "backward", "back");
      return;
    }
    const e = St(this.stepIndex, (s) => this.#C(s)),
      t = P[e],
      i = this.step.contentLayout === "wide",
      o = t?.contentLayout === "wide";
    if (t && i && o) {
      (this.#W(),
        this.#j(),
        (this.#T = t.id),
        (this.direction = "backward"),
        (this.guidePageExiting = !0),
        (this.guideMessageShouldPlay = !1));
      const s = this.step.id;
      this.#y = window.setTimeout(() => {
        ((this.#y = void 0), this.finishGuidePageExit(s));
      }, _t);
      return;
    }
    if (!t || !this.goToStep(t.id, "backward", "back")) {
      this.isNavigating = !1;
      return;
    }
  }
  finishGuidePageExit(e) {
    if (!this.guidePageExiting || this.step.id !== e || !this.#T) return;
    this.#y !== void 0 && (window.clearTimeout(this.#y), (this.#y = void 0));
    const t = this.#T;
    if (
      ((this.#T = null),
      (this.guidePageExiting = !1),
      !this.goToStep(t, "backward", "back"))
    ) {
      this.isNavigating = !1;
      return;
    }
    this.#Je(t, !0);
  }
  async complete() {
    if (!(this.#_ || this.#d)) {
      ((this.#_ = !0), (this.handoffPreparationFailed = !1));
      try {
        (await x(this.prepareCompletion(), 3e4, "Setup preparation timed out"),
          h.send("onboarding:finalize", {
            onboardingCompanionId: this.onboardingCompanionId || void 0,
            companionPersonality: this.companionPersonality ?? void 0,
          }),
          (this.#d = !0),
          this.#Y("complete", null),
          this.endSetupTelemetry("complete"),
          this.#S());
      } catch (e) {
        ((this.handoffPreparationFailed = !0),
          console.error("[Onboarding] Failed to complete onboarding:", e),
          (this.#d = !0),
          h.command({
            domain: "onboarding",
            action: "openBrowser",
            payload: {},
          }));
      } finally {
        this.#_ = !1;
      }
    }
  }
  async prepareCompletion() {
    if (!(await this.saveCurrentStep("launch")))
      throw new Error("Onboarding progress could not be saved");
    if (
      (await this.#N(),
      await this.waitForCompanionName(),
      !(await this.flushCompanionCustomization()))
    )
      throw new Error(
        "[Onboarding] Companion customization could not be saved",
      );
    if (!this.onboardingCompanionId)
      throw new Error("[Onboarding] Companion setup completed without an id");
  }
  async resolveCompanionName() {
    try {
      const { name: e } = await h.invoke("onboarding:generate-companion-name", {
        onboardingData: { ...this.formData },
      });
      return this.#B && this.companionName?.trim()
        ? this.companionName
        : ((this.companionName = e), e);
    } catch (e) {
      return (
        console.error("[Onboarding] Failed to generate companion name:", e),
        null
      );
    }
  }
  async waitForCompanionName() {
    const e = this.companionName?.trim();
    return e && e.toLocaleLowerCase() !== "your assistant"
      ? e
      : (this.#V === null && (this.#V = this.resolveCompanionName()), this.#V);
  }
  updateCompanionName(e) {
    ((this.#B = e.trim().length > 0),
      (this.companionNameSelected = !0),
      (this.companionName = e));
  }
  recordCompanionSuggestionSelected(e) {
    I(
      this.introFlow,
      "onboarding_companion_event",
      {
        action: "suggestion_selected",
        name_source: "suggestion",
        suggestion_rank: e,
      },
      "onboarding/state.svelte.ts",
    );
  }
  recordCompanionNameConfirmed(e) {
    I(
      this.introFlow,
      "onboarding_companion_event",
      { action: "name_confirmed", name_source: e },
      "onboarding/state.svelte.ts",
    );
  }
  refreshCompanionSuggestions() {
    (this.#q++,
      I(
        this.introFlow,
        "onboarding_companion_event",
        { action: "suggestions_refreshed", refresh_count: this.#q },
        "onboarding/state.svelte.ts",
      ));
  }
  previewCompanionVisuals(e) {
    (e !== this.onboardingCompanionVisualsSeed && this.#G++,
      (this.onboardingCompanionVisualsSeed = e));
  }
  previewCompanionAppearance(e) {
    this.onboardingCompanionAppearance = e;
  }
  selectCompanionPersonality(e) {
    this.companionPersonality = e;
  }
  async #I(e) {
    const t = this.#Ge.then(async () => {
      try {
        return (
          this.onboardingCompanionId || (await this.#N()),
          this.onboardingCompanionId
            ? await h.invoke("onboarding:update-companion-customization", {
                companionId: this.onboardingCompanionId,
                ...e,
              })
            : null
        );
      } catch (i) {
        return (
          console.error(
            "[Onboarding] Failed to save companion customization:",
            i,
          ),
          null
        );
      }
    });
    return ((this.#Ge = t.then(() => {})), t);
  }
  async persistCompanionName(e) {
    const t = await this.#I({ name: e });
    return t ? (e.trim() && (this.companionName = t.name), !0) : !1;
  }
  async persistCompanionIdentity(
    e,
    t,
    i = this.onboardingCompanionAppearance ?? void 0,
  ) {
    const o = await this.#I({
      name: e,
      visualsSeed: t,
      ...(i ? { appearance: i } : {}),
    });
    return o
      ? ((this.companionName = o.name),
        (this.onboardingCompanionVisualsSeed = o.visualsSeed),
        (this.onboardingCompanionAppearance = o.appearance),
        (this.companionNameSelected = !0),
        !0)
      : !1;
  }
  async persistStagedIntroIdentity() {
    if (this.receivedSharedCompanion || !this.companionNameSelected) return !0;
    const e = this.companionName?.trim(),
      t = this.onboardingCompanionVisualsSeed || this.onboardingCompanionId;
    return !e || !t ? !1 : this.persistCompanionIdentity(e, t);
  }
  async skipPendingHireCompanion() {
    const e = this.pendingIntentId ?? void 0;
    if (
      !(
        await x(h.invoke("onboarding:clear-pending-hire", { intentId: e }), 1e4)
      )?.success
    )
      throw new Error("Your choice could not be saved. Please try again.");
    if (
      (await this.prepareCompanion(),
      !(await this.persistStagedIntroIdentity()))
    )
      throw new Error("Your companion could not be saved. Please try again.");
  }
  async acceptPendingHireCompanion() {
    const e = this.pendingHireReview,
      t = this.pendingHireId;
    if (!e || !t)
      throw new Error("The received companion is not ready. Please try again.");
    const i = this.pendingIntentId ?? void 0,
      o = await h.query({
        domain: "companions",
        action: "hireProfile",
        payload:
          this.pendingHireKind === "official"
            ? { officialCompanionId: t, forOnboarding: !0, acquisitionId: i }
            : {
                companionId: t,
                contentHash: e.contentHash,
                forOnboarding: !0,
                acquisitionId: i,
                expectedMode: e.mode,
              },
      });
    if (o.success === !1) throw new Error(o.error);
    const s = await h.invoke("onboarding:adopt-hired-companion", {
      companionId: o.installedCompanionId,
    });
    if (!s)
      throw new Error(
        "Your companion could not be prepared. Please try again.",
      );
    this.adoptHiredCompanion(s);
  }
  async acknowledgePendingHireCompanion() {
    if (
      !(
        await x(
          h.invoke("onboarding:clear-pending-hire", {
            intentId: this.pendingIntentId ?? void 0,
            accepted: !0,
          }),
          1e4,
        )
      )?.success
    )
      throw new Error(
        "Your companion is ready, but your choice could not be saved. Please try again.",
      );
  }
  adoptHiredCompanion(e) {
    ((this.receivedSharedCompanion = e.shared ?? !1),
      (this.hiredOfficialCompanion = this.pendingHireKind === "official"),
      (this.onboardingCompanionId = e.id),
      (this.onboardingCompanionVisualsSeed = e.visualsSeed),
      (this.onboardingCompanionAppearance = e.appearance),
      (this.companionName = e.name),
      (this.companionNameSelected = !0),
      (this.#B = !0),
      (this.#A = Promise.resolve()));
  }
  async regenerateCompanionVisuals(e) {
    const t = this.onboardingCompanionVisualsSeed,
      i = e ?? crypto.randomUUID();
    this.onboardingCompanionVisualsSeed = i;
    const o = await this.#I({ visualsSeed: i });
    return o
      ? ((this.onboardingCompanionVisualsSeed = o.visualsSeed),
        (this.onboardingCompanionAppearance = o.appearance),
        o.visualsSeed)
      : ((this.onboardingCompanionVisualsSeed = t), null);
  }
  async persistCompanionAppearance(
    e,
    t = this.onboardingCompanionVisualsSeed ?? crypto.randomUUID(),
  ) {
    const i = this.onboardingCompanionVisualsSeed,
      o = this.onboardingCompanionAppearance;
    ((this.onboardingCompanionVisualsSeed = t),
      (this.onboardingCompanionAppearance = e));
    const s = await this.#I({ visualsSeed: t, appearance: e });
    return s
      ? ((this.onboardingCompanionVisualsSeed = s.visualsSeed),
        (this.onboardingCompanionAppearance = s.appearance),
        !0)
      : ((this.onboardingCompanionVisualsSeed = i),
        (this.onboardingCompanionAppearance = o),
        !1);
  }
  async flushCompanionCustomization() {
    if (this.receivedSharedCompanion) return !0;
    const e = await this.#I({
      ...(this.companionName !== null ? { name: this.companionName } : {}),
      ...(this.onboardingCompanionVisualsSeed
        ? { visualsSeed: this.onboardingCompanionVisualsSeed }
        : {}),
      ...(this.onboardingCompanionAppearance
        ? { appearance: this.onboardingCompanionAppearance }
        : {}),
    });
    return e
      ? (this.companionName?.trim() && (this.companionName = e.name),
        (this.onboardingCompanionVisualsSeed = e.visualsSeed),
        (this.onboardingCompanionAppearance = e.appearance),
        !0)
      : !1;
  }
}
const ti = He("onboardingState", () => new Nt()),
  Pe = Symbol("onboarding-step-actions");
class Et {
  #s = u(null);
  get current() {
    return c(this.#s);
  }
  set current(e) {
    d(this.#s, e, !0);
  }
  #n = null;
  register(e, t) {
    const i = Symbol("onboarding-step-action-owner");
    return (
      (this.#n = i),
      (this.current = { stepId: e, ...t }),
      () => {
        this.#n === i && ((this.#n = null), (this.current = null));
      }
    );
  }
  forStep(e) {
    return this.current?.stepId !== e ? null : this.current;
  }
}
function ii() {
  const n = new Et();
  return (Ae(Pe, n), n);
}
function ni() {
  return Ne(Pe);
}
export {
  yt as C,
  Jt as F,
  J as M,
  Wt as O,
  ei as a,
  Je as b,
  $e as c,
  $t as d,
  Kt as e,
  Zt as f,
  Xt as g,
  ue as h,
  jt as i,
  Qt as j,
  ti as o,
  ii as p,
  I as t,
  ni as u,
};
