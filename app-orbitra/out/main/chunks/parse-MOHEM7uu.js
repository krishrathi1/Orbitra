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
      (e._sentryDebugIds[t] = "834b4acd-b2b6-4662-9226-ddb69515fa52"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-834b4acd-b2b6-4662-9226-ddb69515fa52"));
  })();
} catch {}
const C = require("valibot"),
  s = require("./template-CmpXTu8Z.js");
function y(e) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const n in e)
      if (n !== "default") {
        const o = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(
          t,
          n,
          o.get ? o : { enumerable: !0, get: () => e[n] },
        );
      }
  }
  return ((t.default = e), Object.freeze(t));
}
const g = y(C),
  b = {
    version: s.ONBOARDING_CHECKLIST_CATALOG_VERSION,
    sections: [
      {
        id: "getting-started",
        title: "Your first week in Orbitra",
        items: [
          ...s.ONBOARDING_CHECKLIST_CHAT_TEMPLATE.filter(
            ({ id: e }) =>
              e !== "source-leads-candidates" && e !== "team-workspace",
          ).map(({ id: e, iconId: t, ...n }) => ({
            id: e,
            iconId: t,
            label: n.label,
            kind: "self_serve",
            infoText: n.infoText ?? null,
            href: null,
            chat: n,
          })),
          {
            id: "import-browser-data",
            iconId: "browser-check",
            label: "Import browser data",
            kind: "automatic",
            infoText:
              "Bring your logins, bookmarks, and other browser data into Orbitra. Choose which browser and data to import in Settings.",
            href: null,
          },
          {
            id: "set-default-browser",
            iconId: "browser-check",
            label: "Set as default browser",
            kind: "automatic",
            infoText:
              "Orbitra has everything you need from a modern browser. You can migrate your passwords, tabs and cookies from other browsers in settings.",
            href: null,
          },
          {
            id: "invite-friend",
            iconId: "gift",
            label: "Invite a friend, earn 250 credits",
            kind: "automatic",
            infoText:
              "Invite a friend to grant both of you 250 credits each when they sign up",
            href: null,
          },
        ],
      },
      {
        id: "learn-about",
        title: "Learn about",
        items: [
          {
            id: "learn-credit-usage",
            iconId: "coin",
            label: "Credit usage",
            kind: "informational",
            infoText: null,
            href: "https://docs.strawberrybrowser.com/ai/credits-usage",
          },
          {
            id: "learn-companions",
            iconId: "user-circle",
            label: "Companions",
            kind: "informational",
            infoText: null,
            href: "https://docs.strawberrybrowser.com/ai/companions",
          },
          {
            id: "learn-team-collaboration",
            iconId: "building-community",
            label: "Team collaboration",
            kind: "informational",
            infoText: null,
            href: "https://docs.strawberrybrowser.com/billing/teams",
          },
        ],
      },
    ],
  };
function u(e) {
  for (const t of b.sections) {
    const n = t.items.find((o) => o.id === e);
    if (n) return n;
  }
  return null;
}
function h(e) {
  return e.chat
    ? {
        id: e.id,
        iconId: e.iconId,
        label: e.chat.label,
        kind: "self_serve",
        infoText: e.chat.infoText ?? null,
        href: null,
        chat: e.chat,
      }
    : u(e.id);
}
function l(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function c(e) {
  return typeof e == "string" && Number.isFinite(Date.parse(e));
}
function p(e) {
  return e === null || c(e);
}
function O(e) {
  if (e === null) return null;
  if (!l(e) || !c(e.completedAt)) return !1;
  if (e.mode === "manual" || e.mode === "manual_after_open")
    return { completedAt: e.completedAt, mode: e.mode };
  if (
    e.mode !== "automatic" ||
    (e.signal !== "suite_connected" &&
      e.signal !== "slack_connected" &&
      e.signal !== "transcription_permissions_qualified" &&
      e.signal !== "default_browser_confirmed" &&
      e.signal !== "browser_data_imported" &&
      e.signal !== "invite_shared") ||
    (e.provider !== void 0 &&
      e.provider !== "google" &&
      e.provider !== "microsoft") ||
    (e.method !== void 0 &&
      e.method !== "copied_invite_link" &&
      e.method !== "native_share") ||
    (e.platform !== void 0 &&
      e.platform !== "darwin" &&
      e.platform !== "win32" &&
      e.platform !== "linux") ||
    (e.grantedPermissions !== void 0 && !Array.isArray(e.grantedPermissions))
  )
    return !1;
  const t = Array.isArray(e.grantedPermissions)
    ? e.grantedPermissions.filter(
        (n) => n === "microphone" || n === "system_audio",
      )
    : void 0;
  return t?.length !== e.grantedPermissions?.length
    ? !1
    : {
        completedAt: e.completedAt,
        mode: "automatic",
        signal: e.signal,
        ...(e.provider ? { provider: e.provider } : {}),
        ...(e.method ? { method: e.method } : {}),
        ...(e.platform ? { platform: e.platform } : {}),
        ...(t ? { grantedPermissions: t } : {}),
      };
}
function _(e) {
  const t = e.completion;
  if (!t) return !0;
  const n = e.id === "login-linkedin" || e.id === "create-visual-artifact";
  if (t.mode === "manual") return n;
  if (t.mode === "manual_after_open") return n && e.firstOpenedAt !== null;
  if (n || e.id.startsWith("learn-")) return !1;
  if (e.id === "connect-suite")
    return (
      t.signal === "suite_connected" &&
      !!t.provider &&
      !t.method &&
      !t.platform &&
      !t.grantedPermissions
    );
  if (e.id === "connect-slack" || e.id === "set-default-browser") {
    const r =
      e.id === "connect-slack"
        ? "slack_connected"
        : "default_browser_confirmed";
    return (
      t.signal === r &&
      !t.provider &&
      !t.method &&
      !t.platform &&
      !t.grantedPermissions
    );
  }
  if (e.id === "invite-friend")
    return (
      t.signal === "invite_shared" &&
      !!t.method &&
      !t.provider &&
      !t.platform &&
      !t.grantedPermissions
    );
  if (
    e.id !== "setup-transcription" ||
    t.signal !== "transcription_permissions_qualified" ||
    t.provider ||
    t.method
  )
    return !1;
  const o =
    t.platform === "win32" ? ["microphone"] : ["microphone", "system_audio"];
  return (
    !!t.platform &&
    t.grantedPermissions?.length === o.length &&
    o.every((r) => t.grantedPermissions?.includes(r))
  );
}
function A(e) {
  const t = e.completion;
  if (!t) return !0;
  const n = h(e);
  return n
    ? t.mode === "manual"
      ? n.kind === "self_serve"
      : t.mode === "manual_after_open"
        ? n.kind === "self_serve" && e.firstOpenedAt !== null
        : n.kind !== "automatic"
          ? !1
          : e.id === "import-browser-data"
            ? t.signal === "browser_data_imported" &&
              !t.provider &&
              !t.method &&
              !t.platform &&
              !t.grantedPermissions
            : _(e)
    : !1;
}
const w = {
    "getting-started": [
      "connect-suite",
      "connect-slack",
      "login-linkedin",
      "setup-transcription",
      "set-default-browser",
      "invite-friend",
      "create-visual-artifact",
    ],
    "learn-about": [
      "learn-credit-usage",
      "learn-companions",
      "learn-team-collaboration",
    ],
  },
  T = {
    "connect-suite": "connect-apps",
    "connect-slack": "connect-apps",
    "setup-transcription": "transcribe-meeting",
  };
function k(e, t) {
  if (
    !l(e) ||
    typeof e.id != "string" ||
    !p(e.firstOpenedAt) ||
    !p(e.lastOpenedAt) ||
    !p(e.dismissedAt)
  )
    return null;
  const n = O(e.completion);
  if (n === !1) return null;
  const o = g.safeParse(
    s.checklistIconSchema,
    e.iconId === void 0
      ? (u(e.id)?.iconId ?? s.DEFAULT_CHECKLIST_ICON_ID)
      : e.iconId,
  );
  if (!o.success) return null;
  const r = {
    id: e.id,
    iconId: o.output,
    firstOpenedAt: e.firstOpenedAt,
    lastOpenedAt: e.lastOpenedAt,
    dismissedAt: e.dismissedAt,
    completion: n,
  };
  if (t) {
    if (!_(r)) return null;
    const i = T[r.id] ?? r.id,
      d = s.ONBOARDING_CHECKLIST_CHAT_TEMPLATE.find(({ id: m }) => m === i);
    if (d) {
      const { id: m, iconId: a, ...f } = d;
      ((r.iconId = a),
        (r.chat = f),
        r.id === "connect-slack" &&
          (r.chat = {
            label: "Connect Slack",
            prompt:
              "Help me connect Slack and choose useful ways to use it for my work.",
          }),
        n?.mode === "automatic" &&
          (r.completion = { mode: "manual", completedAt: n.completedAt }));
    }
  } else if (e.chat !== void 0) {
    if (!l(e.chat)) return null;
    const i = g.safeParse(s.checklistChatItemSchema, {
      ...e.chat,
      id: e.id,
      iconId: r.iconId,
    });
    if (!i.success) return null;
    const { id: d, iconId: m, ...a } = i.output;
    r.chat = a;
  } else {
    const i = u(e.id);
    if (!i || i.kind === "self_serve") return null;
  }
  return A(r) ? r : null;
}
function S(e, t) {
  if (!Array.isArray(e) || e.length !== 2) return null;
  const n = [],
    o = new Set(),
    r = new Set();
  for (const i of e) {
    if (
      !l(i) ||
      (i.id !== "getting-started" && i.id !== "learn-about") ||
      o.has(i.id) ||
      !Array.isArray(i.items) ||
      i.items.length > 32
    )
      return null;
    const d = w[i.id];
    if (t && i.items.length !== d.length) return null;
    const m = [];
    for (const a of i.items) {
      if (t && (!l(a) || typeof a.id != "string" || !d.includes(a.id)))
        return null;
      const f = k(a, t);
      if (!f || r.has(f.id)) return null;
      const I = h(f);
      if ((i.id === "learn-about") != (I?.kind === "informational"))
        return null;
      (r.add(f.id), m.push(f));
    }
    (o.add(i.id), n.push({ id: i.id, items: m }));
  }
  return n;
}
function E(e) {
  return !l(e) || !c(e.changedAt)
    ? null
    : e.status === "visible"
      ? { status: "visible", changedAt: e.changedAt }
      : e.status === "snoozed" && c(e.until) && typeof e.timeZone == "string"
        ? {
            status: "snoozed",
            changedAt: e.changedAt,
            until: e.until,
            timeZone: e.timeZone,
          }
        : e.status === "hidden" &&
            (e.reason === "user_hide" || e.reason === "finished_hide")
          ? { status: "hidden", changedAt: e.changedAt, reason: e.reason }
          : null;
}
function N(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return { status: "malformed" };
  }
  if (!l(t) || typeof t.schemaVersion != "number")
    return { status: "malformed" };
  if (t.schemaVersion > s.ONBOARDING_CHECKLIST_SCHEMA_VERSION)
    return { status: "unsupported_schema", schemaVersion: t.schemaVersion };
  if (
    (t.schemaVersion !== 1 &&
      t.schemaVersion !== s.ONBOARDING_CHECKLIST_SCHEMA_VERSION) ||
    (t.schemaVersion === 1
      ? t.catalogVersion !== 1
      : t.catalogVersion !== 2 &&
        t.catalogVersion !== s.ONBOARDING_CHECKLIST_CATALOG_VERSION) ||
    (t.personalizedAt !== void 0 && !c(t.personalizedAt)) ||
    !l(t.enrollment) ||
    typeof t.enrollment.id != "string" ||
    !c(t.enrollment.enrolledAt) ||
    t.enrollment.source !== "onboarding_completion" ||
    !c(t.updatedAt)
  )
    return { status: "malformed" };
  const n = E(t.visibility),
    o = S(t.sections, t.schemaVersion === 1);
  if (!n || !o) return { status: "malformed" };
  if (t.catalogVersion !== s.ONBOARDING_CHECKLIST_CATALOG_VERSION) {
    const i = o.find(({ id: d }) => d === "getting-started");
    i.items.some(({ id: d }) => d === "import-browser-data") ||
      i.items.push({
        id: "import-browser-data",
        iconId: u("import-browser-data").iconId,
        firstOpenedAt: null,
        lastOpenedAt: null,
        dismissedAt: null,
        completion: null,
      });
  }
  return {
    status: "valid",
    record: {
      schemaVersion: s.ONBOARDING_CHECKLIST_SCHEMA_VERSION,
      catalogVersion: s.ONBOARDING_CHECKLIST_CATALOG_VERSION,
      enrollment: {
        id: t.enrollment.id,
        enrolledAt: t.enrollment.enrolledAt,
        source: "onboarding_completion",
      },
      updatedAt: t.updatedAt,
      ...(c(t.personalizedAt) ? { personalizedAt: t.personalizedAt } : {}),
      visibility: n,
      sections: o,
    },
  };
}
exports.ONBOARDING_CHECKLIST_CATALOG = b;
exports.getChecklistItemDefinition = h;
exports.isChecklistCompletionValidForItem = A;
exports.parseOnboardingChecklistRecord = N;
