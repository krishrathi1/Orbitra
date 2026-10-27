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
      (n._sentryDebugIds[t] = "2e4e0b7d-c2fb-48ae-8c6f-0524d96bb064"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-2e4e0b7d-c2fb-48ae-8c6f-0524d96bb064"));
  })();
} catch {}
const l = require("node:fs/promises"),
  h = require("node:path"),
  k = require("./appPaths-eBQvtv9Z.js"),
  C = require("valibot"),
  f = require("./unicode-CSAGP0Z8.js");
function T(n) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (n) {
    for (const a in n)
      if (a !== "default") {
        const i = Object.getOwnPropertyDescriptor(n, a);
        Object.defineProperty(
          t,
          a,
          i.get ? i : { enumerable: !0, get: () => n[a] },
        );
      }
  }
  return ((t.default = n), Object.freeze(t));
}
const e = T(C),
  o = e.pipe(e.number(), e.finite()),
  _ = e.object({
    cacheKey: e.string(),
    companionId: e.string(),
    appearanceKey: e.string(),
    presetKey: e.literal("typing-body-front"),
    renderVersion: o,
    codec: e.literal("webm-vp9-alpha"),
    outputSize: o,
    filePath: e.string(),
    createdAt: o,
    lastUsedAt: o,
    failure: e.optional(
      e.object({ attempts: o, retryAfter: o, lastError: e.string() }),
    ),
  }),
  A = e.object({ version: e.literal(2), entries: e.array(_) }),
  E = /^[a-zA-Z0-9_-]+$/;
function u(n, t) {
  if (!E.test(n)) throw new Error(`Invalid companion animation ${t}`);
  return n;
}
function K(n) {
  const [t, a, i, s, c, d, p] = n.split("|");
  if (
    p !== void 0 ||
    !t ||
    !a ||
    i !== "typing-body-front" ||
    !s?.startsWith("v") ||
    c !== "webm-vp9-alpha" ||
    !d
  )
    throw new Error("Invalid companion animation cache key");
  const r = Number(s.slice(1)),
    m = Number(d);
  if (!Number.isInteger(r) || r < 0 || !Number.isInteger(m) || m <= 0)
    throw new Error("Invalid companion animation cache key");
  return {
    companionId: t,
    appearanceKey: u(a, "appearanceKey"),
    presetKey: i,
    renderVersion: r,
    codec: c,
    outputSize: m,
  };
}
class L {
  baseDir;
  indexPath;
  #e = new Map();
  #n = !1;
  #i = Promise.resolve();
  constructor(t = h.join(k.getAppDataPath(), "images", "uni-agent")) {
    ((this.baseDir = t),
      (this.indexPath = h.join(t, "companion-animation-cache.json")));
  }
  async init() {
    this.#n ||
      (await l.mkdir(this.baseDir, { recursive: !0 }),
      await this.#r(),
      (this.#n = !0));
  }
  buildVideoPath(t) {
    const a = u(t.appearanceKey, "appearanceKey"),
      i = u(t.presetKey, "presetKey");
    if (!Number.isInteger(t.renderVersion) || t.renderVersion < 0)
      throw new Error("Invalid companion animation renderVersion");
    return h.join(
      this.baseDir,
      "companions",
      a,
      "animations",
      i,
      `v${t.renderVersion}`,
      "video.webm",
    );
  }
  async getValidEntry(t) {
    return (
      await this.init(),
      await this.#a(async () => {
        const a = this.#e.get(t);
        if (!a) return;
        if (!(await O(a.filePath))) {
          if (a.failure?.retryAfter && Date.now() < a.failure.retryAfter)
            return a;
          (this.#e.delete(t), await this.#t());
          return;
        }
        const i = { ...a, lastUsedAt: Date.now() };
        return (this.#e.set(t, i), await this.#t(), i);
      })
    );
  }
  async upsert(t) {
    (await this.init(),
      await this.#a(async () => {
        (this.#e.set(t.cacheKey, t), await this.#t());
      }));
  }
  async markFailure(t) {
    return (
      await this.init(),
      await this.#a(async () => {
        const a = Date.now(),
          i = this.#e.get(t.cacheKey);
        let s;
        if (i) s = i;
        else {
          const r = K(t.cacheKey);
          s = {
            cacheKey: t.cacheKey,
            companionId: r.companionId,
            appearanceKey: r.appearanceKey,
            presetKey: r.presetKey,
            renderVersion: r.renderVersion,
            codec: r.codec,
            outputSize: r.outputSize,
            filePath: this.buildVideoPath({
              appearanceKey: r.appearanceKey,
              presetKey: r.presetKey,
              renderVersion: r.renderVersion,
            }),
            createdAt: a,
            lastUsedAt: a,
          };
        }
        const c = (s.failure?.attempts ?? 0) + 1,
          d = Date.now() + Math.min(6e4, 3e3 * Math.pow(2, c - 1)),
          p = {
            ...s,
            lastUsedAt: a,
            failure: { attempts: c, retryAfter: d, lastError: t.errorMessage },
          };
        return (this.#e.set(t.cacheKey, p), await this.#t(), p);
      })
    );
  }
  async #a(t) {
    const a = this.#i;
    let i;
    ((this.#i = new Promise((s) => {
      i = s;
    })),
      await a);
    try {
      return await t();
    } finally {
      i();
    }
  }
  async #r() {
    try {
      const t = await l.readFile(this.indexPath, "utf8"),
        a = e.safeParse(A, JSON.parse(t));
      if (!a.success) {
        this.#e.clear();
        return;
      }
      this.#e = new Map(a.output.entries.map((i) => [i.cacheKey, i]));
    } catch (t) {
      if (t.code === "ENOENT") {
        this.#e.clear();
        return;
      }
      throw t;
    }
  }
  async #t() {
    (await l.mkdir(h.dirname(this.indexPath), { recursive: !0 }),
      await l.writeFile(
        this.indexPath,
        JSON.stringify({ version: 2, entries: [...this.#e.values()] }, null, 2),
        "utf8",
      ));
  }
}
async function O(n) {
  try {
    return (await l.access(n), !0);
  } catch {
    return !1;
  }
}
const N = 2,
  v = 3,
  y = 16,
  b = [
    "apps",
    "microphone",
    "palette",
    "search",
    "brand-linkedin",
    "calendar-repeat",
    "mail",
    "users",
    "building-community",
    "bulb",
    "browser-check",
    "gift",
    "coin",
    "user-circle",
  ],
  w = "bulb",
  I = e.picklist(b),
  x = e.object({
    label: e.pipe(
      e.string(),
      e.maxLength(120),
      e.transform(f.sanitizeUnpairedSurrogates),
      e.trim(),
      e.minLength(1),
      e.maxLength(120),
    ),
    prompt: e.pipe(
      e.string(),
      e.maxLength(1200),
      e.transform(f.sanitizeUnpairedSurrogates),
      e.trim(),
      e.minLength(1),
      e.maxLength(1200),
    ),
    infoText: e.optional(
      e.pipe(
        e.string(),
        e.maxLength(300),
        e.transform(f.sanitizeUnpairedSurrogates),
        e.trim(),
        e.minLength(1),
        e.maxLength(300),
      ),
    ),
  }),
  S = e.object({
    id: e.pipe(
      e.string(),
      e.maxLength(80),
      e.regex(/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/),
      e.check(
        (n) =>
          ![
            "import-browser-data",
            "set-default-browser",
            "invite-friend",
            "learn-credit-usage",
            "learn-companions",
            "learn-team-collaboration",
          ].includes(n),
        "Chat items cannot replace built-in actions or resources",
      ),
    ),
    iconId: e.optional(
      e.pipe(
        I,
        e.description(
          "Choose the preset icon that best matches this task. Use an exact ID from the enum.",
        ),
      ),
      w,
    ),
    ...x.entries,
  }),
  D = e.pipe(
    e.array(S),
    e.maxLength(y),
    e.check(
      (n) => new Set(n.map(({ id: t }) => t)).size === n.length,
      "Item IDs must be unique",
    ),
  ),
  g = [
    {
      id: "connect-apps",
      iconId: "apps",
      label: "Connect my apps",
      prompt:
        "Help me choose and connect the apps that would be most useful for my work. Check what is already connected and guide me through connecting the rest in this chat.",
      infoText: "Give Orbitra context from the apps you use for work.",
    },
    {
      id: "transcribe-meeting",
      iconId: "microphone",
      label: "Transcribe a meeting",
      prompt:
        "Help me transcribe my next meeting and turn it into useful notes and action items. Guide me through any setup I need. Keep your instructions concise, easy to follow, and clear at a glance.",
      infoText:
        "Capture a meeting and turn the conversation into useful notes.",
    },
    {
      id: "create-visual-artifact",
      iconId: "palette",
      label: "Create a presentation or dashboard",
      prompt:
        "Help me create a presentation, dashboard, or chart for my work. Suggest something useful based on my goals and help me make it.",
      infoText:
        "Turn your work into a presentation, dashboard, or shareable visual.",
    },
    {
      id: "research-online",
      iconId: "search",
      label: "Do online research",
      prompt:
        "Help me research a topic relevant to my work. Suggest a useful question, find reliable sources, and turn the findings into a clear summary.",
      infoText: "Research a question and get findings with sources.",
    },
    {
      id: "login-linkedin",
      iconId: "brand-linkedin",
      label: "Log in to LinkedIn",
      prompt:
        "Help me sign in to LinkedIn in Orbitra. Check whether I am already signed in and guide me through any sign-in steps myself.",
      infoText: "Use your LinkedIn account in Orbitra.",
    },
    {
      id: "setup-routine",
      iconId: "calendar-repeat",
      label: "Set up a routine",
      prompt:
        "Help me set up a useful recurring routine, such as a daily work summary. Suggest what it should include and help me choose its schedule.",
      infoText: "Have Orbitra help with recurring work on a schedule.",
    },
    {
      id: "manage-email",
      iconId: "mail",
      label: "Help me manage my email",
      prompt:
        "Help me manage my work email. Check which email accounts I have connected, then help me prioritize messages, draft replies, or organize my inbox.",
      infoText: "Find important messages and make progress on your inbox.",
    },
    {
      id: "source-leads-candidates",
      iconId: "users",
      label: "Help me source leads or candidates",
      prompt:
        "Help me source leads or candidates for my work. Ask about my criteria, suggest useful sources, and help me build a relevant shortlist.",
      infoText: "Find people who fit your sales or recruiting goals.",
    },
    {
      id: "suggest-use-cases",
      iconId: "bulb",
      label: "Suggest more use cases for Orbitra",
      prompt:
        "Based on what you know about my work and goals, suggest more useful ways I can use Orbitra. Help me choose one and get started.",
      infoText: "Discover other ways Orbitra can help with your work.",
    },
    {
      id: "team-workspace",
      iconId: "building-community",
      label: "Get started with the team workspace",
      prompt:
        "Help me get started with my team workspace in Orbitra. Show me where to find shared files, companions, and skills, and help me choose a useful first step with my team.",
      infoText:
        "Find and use the files, companions, and skills shared with your team.",
    },
  ];
function H(n, t) {
  const a = n
    .filter(
      ({ id: i }) =>
        !(i === "login-linkedin" && t.linkedInSignedIn) &&
        !(i === "team-workspace" && !t.teams?.length),
    )
    .map((i) => ({ ...i }));
  if (t.teams?.length && !a.some(({ id: i }) => i === "team-workspace")) {
    const i = g.find(({ id: s }) => s === "team-workspace");
    (a.splice(y - 1), a.push({ ...i }));
  }
  return a;
}
const P = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      ONBOARDING_CHECKLIST_CHAT_TEMPLATE: g,
      getOnboardingChecklistChatItems: H,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
exports.CHECKLIST_ICON_IDS = b;
exports.CompanionAnimationCacheStore = L;
exports.DEFAULT_CHECKLIST_ICON_ID = w;
exports.ONBOARDING_CHECKLIST_CATALOG_VERSION = v;
exports.ONBOARDING_CHECKLIST_CHAT_ITEM_LIMIT = y;
exports.ONBOARDING_CHECKLIST_CHAT_TEMPLATE = g;
exports.ONBOARDING_CHECKLIST_SCHEMA_VERSION = N;
exports.checklistChatItemSchema = S;
exports.checklistChatItemsSchema = D;
exports.checklistIconSchema = I;
exports.sanitizeCompanionAnimationPathToken = u;
exports.template = P;
