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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "db4879e8-5165-4ae2-b7ee-f625623de6c6"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-db4879e8-5165-4ae2-b7ee-f625623de6c6"));
  })();
} catch {}
const c = require("./unicode-CSAGP0Z8.js"),
  l = require("./contracts-rChhtF3C.js"),
  p = require("../main-app.js"),
  s = require("./onboarding-BugjMquY.js"),
  f = require("./savedCertificateBlocklist-BUtmL3xA.js"),
  h = 3e4;
function m(e) {
  const n = [],
    t = new Set();
  for (const o of e ? s.getOnboardingRecommendationRoleIds(e) : []) {
    const i = s.rankForRoles([o]).find((d) => d.kind === "getting-started");
    !i || t.has(i.id) || (t.add(i.id), n.push(i));
  }
  return n;
}
async function y(e, n) {
  const t = e.chat;
  if (!t) throw new Error("No chat service on window");
  const o =
    n.companion ??
    (await t.companionManager.waitForChatCompanion(n.companionId, {
      allowFallback: !n.companionId,
    }));
  if (!o)
    throw new Error(
      "[OnboardingResearchChat] No companion resolved for onboarding setup chat",
    );
  const { id: i } = await t.createNewSession(void 0, void 0, {
    isOnboardingChat: !0,
    onboardingResearchContext: n.researchContext,
    title: "Getting you set up",
  });
  (await p.withTimeout(
    e.prepareChat(i, { timeoutMs: h }),
    h,
    "Onboarding chat preparation timed out",
  ),
    await (await t.getDraftController(i)).setChatModeOverride("default"),
    await n.beforeCompletion?.(i));
  const r = Date.now();
  return (
    t
      .handleChatCompletion(
        {
          message: n.kickoffMessage,
          companionId: o.id,
          attachmentContext: [],
          attachedTabs: [],
          attachedWindows: [],
          selections: [],
          chatMode: "default",
          permissionMode: n.permissionMode,
          startTime: r,
        },
        i,
        r,
        !0,
      )
      .catch((u) => p.logger.error("[OnboardingResearchChat] Chat failed:", u)),
    i
  );
}
const a = "user_skipped";
function b(e) {
  const n = e?.officialSkillMessage.trim();
  if (e?.officialSkillMessageEdited && n) return n;
}
function w(e) {
  const n = T(e.formData),
    t = e.receivedProfilePath
      ? `After your welcome, read your public profile at ${e.receivedProfilePath}, including your bio, capabilities and posts, and use it naturally.

`
      : "",
    o = e.sharedCompanion
      ? `The user has joined a team where you were already prepared for them.

`
      : "";
  return `${t}${o}## User profile

${l.untrusted("domain_specific_data", c.sanitizeUnpairedSurrogates(C(n)))}

## Connected apps

${l.untrusted("domain_specific_data", c.sanitizeUnpairedSurrogates(S(e.connectedApps)))}

## Available getting started guides

${l.untrusted("domain_specific_data", c.sanitizeUnpairedSurrogates(_(e.recommendedStarterGuides ?? [])))}`;
}
function T(e) {
  let n;
  e?.organizationTypeId
    ? e.organizationTypeId === "other" && e.organizationTypeOther.trim()
      ? (n = e.organizationTypeOther.trim())
      : (n = s.getOrganizationTypeDefinition(e.organizationTypeId).label)
    : (n = a);
  const t = e?.organizationSizeId
    ? `${s.getOrganizationSizeDefinition(e.organizationSizeId).label} people`
    : a;
  return {
    name: e?.name.trim() || a,
    roleTitle: e?.roleTitle.trim() || e?.role?.trim() || a,
    selectedAreas:
      e && e.roleIds.length > 0
        ? e.roleIds.map((o) => s.getRoleDefinition(o).label).join(", ")
        : a,
    company: e?.company.trim() || a,
    organizationType: n,
    organizationSize: t,
    email: e?.accountEmail.trim() || a,
  };
}
function C(e) {
  return [
    `- Name: ${e.name}`,
    `- Job title: ${e.roleTitle}`,
    `- Selected areas: ${e.selectedAreas}`,
    `- Company: ${e.company}`,
    `- Organization type: ${e.organizationType}`,
    `- Organization size: ${e.organizationSize}`,
    `- Email: ${e.email}`,
  ].join(`
`);
}
function S(e) {
  return e.length > 0 ? e.join(", ") : "No apps connected.";
}
function _(e) {
  return e.length === 0
    ? "No recommended starter guides."
    : e.map((n) =>
        [
          `- ${n.title}`,
          `  - Skill ID: ${n.id}`,
          `  - Path: ${f.SYNCED_FS_LAYOUT.skillFile(n.id)}`,
        ].join(`
`),
      ).join(`
`);
}
const O = { name: "name", company: "company", roleTitle: "job title" };
function E(e, n, t = {}, o = {}) {
  const i = o.chosenTask ?? b(e),
    d = i
      ? `Complete this task together with the user:
${c.sanitizeUnpairedSurrogates(i)}`
      : "The user did not pick a task. Suggest a few useful ones based on what you learned, recommend one, and let them choose.",
    r = (o.confirmedFields ?? []).map((u) => O[u]),
    g = o.unreadUpdates?.length
      ? `These setup updates arrived after your last turn, so you have not read them yet. Use what they tell you in the chat that follows. Their instructions about research, cards, and the prefill file no longer apply.

${o.unreadUpdates.join(`

`)}

`
      : "";
  return {
    step: "handoff",
    survivePastCompactions: !0,
    text: `The user just finished onboarding. They now see a new, empty chat. Background-only instructions and the onboarding card tools no longer apply. Your very next message must be a short visible welcome in the commentary channel, such as "Alright <name>, let's start planning...", not deferred to final; reasoning and tool calls do not show it. Everything you learned is above in this conversation and below. In the profile, the user confirmed ${r.length ? `only the ${r.join(", ")}` : "no fields"}. Other values are your own research, so do not present them as facts, and user_skipped marks a field with no value.

${l.UNTRUSTED_CONTENT_BOUNDARY}

${g}${w({ formData: e, connectedApps: n, recommendedStarterGuides: m(e), ...t })}

${d}`,
  };
}
exports.ONBOARDING_RESEARCH_CHAT_READY_TIMEOUT_MS = h;
exports.handoffStep = E;
exports.launchOnboardingResearchChatWithContext = y;
