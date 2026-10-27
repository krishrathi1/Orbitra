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
      o = new e.Error().stack;
    o &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[o] = "831cefe2-ca1f-4927-8def-7fd3255f4f51"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-831cefe2-ca1f-4927-8def-7fd3255f4f51"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _ = require("../main-app.js"),
  q = require("./dream-client-BJEEwUCf.js"),
  N = require("./schedule-AlkLCp6i.js"),
  $ = require("node:fs/promises"),
  F = require("./contracts-rChhtF3C.js"),
  d = require("./dream-sessions-CNZob7px.js"),
  H = require("./OptMemReplicaRegistry-DUxGLqg7.js"),
  z = require("./shared-memory-s9w_2juE.js"),
  U = require("./errors-DsbnElf-.js"),
  T = require("node:path"),
  R = require("./savedCertificateBlocklist-BUtmL3xA.js"),
  Y = require("./contracts-D11OCoTk.js");
require("node:crypto");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
require("node:os");
require("valibot");
require("node:fs");
require("node:http");
require("node:https");
require("./protocol-BGN1BQCi.js");
require("events");
require("child_process");
require("util");
require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("@reflect/auth/workos-session");
require("crypto");
require("@reflect/auth/device-policy");
require("node:process");
require("node:assert");
require("node:stream");
require("./_commonjsHelpers-DJP3_Dvh.js");
require("./index-CSlo9i6Z.js");
require("tty");
require("node-machine-id");
require("fs/promises");
require("node:timers/promises");
require("./config-CdpnFYk6.js");
require("@reflect/auth/desktop");
require("./worker-protocol-CFgWGf-A.js");
require("./unicode-CSAGP0Z8.js");
require("fs");
require("better-sqlite3");
require("node:child_process");
require("url");
require("stream");
require("zlib");
require("electron-updater");
require("@reflect/auth/last-login-method");
require("@reflect/auth/oauth-state");
require("@reflect/auth/session-identity");
require("./settled-read-r0Yf0ORp.js");
require("module");
require("./fs-native-KvxiM8hl.js");
require("node:module");
require("node:tls");
require("tldts");
require("node:buffer");
require("./rustImageLimits-zqqoE-LA.js");
require("mime-types");
require("./resourcePolicy-DcbBChq3.js");
require("./resourcePolicy-BX-8H2Pm.js");
require("http");
require("@ghostery/adblocker-electron");
require("./wav-DElqHA--.js");
require("js-yaml");
require("stream/promises");
require("https");
require("net");
require("tls");
require("buffer");
require("electron-chrome-web-store");
require("./ids-B2sWlG17.js");
require("@modelcontextprotocol/sdk/client/auth.js");
require("@modelcontextprotocol/sdk/client/index.js");
require("@modelcontextprotocol/sdk/client/sse.js");
require("@modelcontextprotocol/sdk/client/streamableHttp.js");
require("@modelcontextprotocol/sdk/client/stdio.js");
require("@modelcontextprotocol/sdk/shared/stdio.js");
require("./process-tree-DTtONxmb.js");
require("cross-spawn");
require("piscina");
require("@modelcontextprotocol/sdk/shared/auth-utils.js");
require("@modelcontextprotocol/sdk/server/auth/errors.js");
require("@modelcontextprotocol/sdk/shared/auth.js");
require("node:readline");
require("async-mutex");
require("node:net");
require("electron-dl");
require("tar");
require("node:inspector/promises");
require("node:v8");
require("tokenx");
require("marked");
require("lodash/debounce");
require("./worker-protocol-CcOBX8D2.js");
require("node:zlib");
require("node:diagnostics_channel");
require("worker_threads");
require("diagnostics_channel");
require("./singleInstance-CuMDgUKt.js");
require("./replica-files-CUHDGfIt.js");
require("./OptMemSyncRunner-u5O_GHna.js");
require("./relevance-tmTWjdK0.js");
const Q = 100,
  j = 300,
  ee = 12e4,
  G = 600,
  te = 12e4,
  C = (e) => e.toLocaleString("en-US"),
  V = 1e5,
  oe = 600;
function re(e) {
  const o = V - oe;
  if (e.length <= o) return [e];
  const n = [];
  let s = "";
  for (const r of e.split(`
`))
    for (let t = 0; t < Math.max(r.length, 1); t += o) {
      const i = r.slice(t, t + o);
      (s && s.length + i.length + 1 > o && (n.push(s), (s = "")),
        (s = s
          ? `${s}
${i}`
          : i));
    }
  return (s && n.push(s), n);
}
function b(e, o, n, s) {
  const r = re(n);
  return r.map((t, i) => {
    const a = r.length === 1;
    return `${e(a ? null : { index: i + 1, total: r.length })}
${F.untrusted(o, t, { sessionKey: s.sessionKey, id: a ? s.id : `${s.id}:${i + 1}` })}`;
  });
}
const x = (e) => (e ? `, part ${e.index} of ${e.total}` : "");
function ne(e, o = { maxNotes: G, maxChars: te }) {
  let n = 0,
    s = 0;
  for (; n < e.length && n < o.maxNotes; ) {
    const t = s + (e[n]?.text.length ?? 0);
    if (n > 0 && t > o.maxChars) break;
    ((s = t), (n += 1));
  }
  if (n < e.length && n > 0) {
    const t = e[n]?.savedAtMs;
    let i = n;
    for (; i > 0 && e[i - 1]?.savedAtMs === t; ) i -= 1;
    if (i > 0) n = i;
    else for (; n < e.length && e[n]?.savedAtMs === t; ) n += 1;
  }
  const r = e.slice(0, n);
  return {
    notes: r,
    notesLeft: e.length - n,
    notesThroughMs: r.at(-1)?.savedAtMs ?? null,
  };
}
function se(e) {
  const o = e.kind === "profile" ? "PROFILE.md" : "COMPANION.md",
    n = e.files.get(o);
  if (n === void 0)
    return [
      `${e.folder}${o} does not exist yet. Create it if the notes hold anything worth keeping.`,
    ];
  const s = `${C(d.optMemDreamCharacters(n))} of ${C(d.optMemDreamFileLimit(o))} characters`;
  return b((r) => `${e.folder}${o}, ${s}${x(r)}:`, "file", n, {
    sessionKey: e.sessionKey,
    id: `dream-file:${o}`,
  });
}
const O = (e) => JSON.stringify(e.replace(/\s+/g, " ").trim().slice(0, 80));
function ie(e) {
  const o = e.earlierMemories ?? [];
  if (o.length === 0) return [];
  const n = e.kind === "profile" ? "PROFILE.md" : "COMPANION.md",
    s = o.flatMap((r, t) => {
      const i =
        r.companionName === void 0
          ? ""
          : `, the earlier memory of the companion ${O(r.companionName)}`;
      return b((a) => `${r.path}${i}${x(a)}:`, "file", r.content, {
        sessionKey: e.sessionKey,
        id: `dream-earlier-memory:${t}`,
      });
    });
  return [
    `${o.length === 1 ? "This file holds" : "These files hold"} memory from Orbitra's earlier memory system that ${n} has not taken in yet. Take it in tonight, as the instructions say for the old layout.`,
    ...s,
  ];
}
function ae(e) {
  if (e.kind === "profile")
    return `You keep the profile of ${O(e.subjectName)}. Their profile folder is ${e.folder}.`;
  const o =
    e.people.length > 0 ? ` It works with ${e.people.map(O).join(", ")}.` : "";
  return `You keep the memory of the companion ${O(e.subjectName)}.${o} Its folder is ${e.folder}.`;
}
function ce(e) {
  const o = e.kind === "profile" ? "PROFILE.md" : "COMPANION.md",
    n = e.kind === "profile" ? "the person" : "the companion",
    s = [...(e.skills ?? [])]
      .sort((i, a) => (i.id < a.id ? -1 : 1))
      .slice(0, Q);
  if (s.length === 0)
    return [
      e.kind === "profile"
        ? "The person has no skills of their own, so PROFILE.md names none."
        : "The companion has no skills of its own, so COMPANION.md names none.",
    ];
  const r = s.map((i) => {
      const a = [...i.description.replace(/\s+/g, " ").trim()],
        l = a.length > j ? `${a.slice(0, j - 1).join("")}…` : a.join("");
      return `- ${i.id}: ${l || "No description."}`;
    }),
    t =
      (e.skills?.length ?? 0) > s.length
        ? ` The first ${C(s.length)} of ${C(e.skills?.length ?? 0)} are listed.`
        : "";
  return b(
    (i) =>
      `The skills of ${n} that ${o} may name, by id, with what each is for${x(i)}.${t}`,
    "file",
    r.join(`
`),
    { sessionKey: e.sessionKey, id: "dream-skills" },
  );
}
function le(e) {
  if (e.notes.length === 0) return ["There are no new notes tonight."];
  const o =
      e.sinceMs === null
        ? "This is the first dream, so these are the notes from the last two weeks; search_notes finds older ones"
        : `These notes were saved since the last dream, ${d.optMemDreamDay(e.sinceMs, e.timeZone)} at ${d.optMemDreamTime(e.sinceMs, e.timeZone)}`,
    n =
      e.notesLeft > 0
        ? ` ${C(e.notesLeft)} newer notes are left for the next dream.`
        : "",
    s = e.notes.map(
      (t) =>
        `- ${d.optMemDreamStamp(t.savedAtMs, e.timeZone)}, ${t.source}: ${t.text.replace(/\s+/g, " ").trim()}`,
    );
  return b(
    (t) =>
      t
        ? `${o}, oldest first, part ${t.index} of ${t.total}.${n}`
        : `${o}, oldest first.${n}`,
    "optmem_memory",
    s.join(`
`),
    { sessionKey: e.sessionKey, id: "dream-notes" },
  );
}
function de(e) {
  const o = e.chatLines ?? [];
  return e.kind !== "profile" || o.length === 0
    ? null
    : `Chats wrote these lines into PROFILE.md after the earlier memory was copied into it, so they are newer than it:
${F.untrusted(
  "file",
  o.map((n) => `- ${n}`).join(`
`),
  { sessionKey: e.sessionKey, id: "dream-chat-lines" },
)}`;
}
function me(e) {
  const o = d.optMemDreamWarnings(e.kind, e.files),
    n = de(e),
    s = [
      `It is ${d.optMemDreamDay(e.nowMs, e.timeZone)}, ${d.optMemDreamTime(e.nowMs, e.timeZone)} in ${e.timeZone}.`,
      ae(e),
      ...se(e),
      ...ce(e),
      ...(n ? [n] : []),
      ...ie(e),
      ...(o.length > 0
        ? [
            `Fix these problems tonight:
${o.map((i) => `- ${i}`).join(`
`)}`,
          ]
        : []),
      ...le(e),
    ],
    r = [];
  let t = "";
  for (const i of s)
    (t && t.length + i.length + 2 > V && (r.push(t), (t = "")),
      (t = t
        ? `${t}

${i}`
        : i));
  return (r.push(t), r);
}
const fe =
  "Before you finish, go through the old file in the first message once more, section by section. Check that COMPANION.md keeps the standing rules that matter in the most chats, and that no line points to one of the earlier memory system's own files. Then check that no line in COMPANION.md is a fact about one person, such as their preferences, permissions, interests, holdings or background, even when the companion works only with them: that person's profile takes those from the same old file. Fix what you find, then reply with a short summary.";
function ue(e, o, n = !1) {
  if (e !== "companion") return null;
  const s = o.get("COMPANION.md");
  return (s !== void 0 && d.lacksOptMemCompanionSections(s)) || n ? fe : null;
}
const he = 30 * 6e4,
  pe = 2 * 6e4,
  ge = 6e4,
  Z = 120 * 6e4,
  Ie = 10080 * 6e4,
  v = 5 * 6e4,
  Me = 30 * 6e4;
async function D(e, o, n) {
  let s;
  const r = new Promise((t, i) => {
    ((s = setTimeout(
      () => i(new Error(`${e} took longer than ${o / 6e4} minutes`)),
      o,
    )),
      s.unref?.());
  });
  try {
    return await Promise.race([n, r]);
  } finally {
    clearTimeout(s);
  }
}
function we(e) {
  return e.kind === "profile"
    ? `profile:${e.workspaceId}`
    : `companion:${e.workspaceId}:${e.companionId}`;
}
class ye {
  constructor(o) {
    this.deps = o;
  }
  stopped = !0;
  timer = null;
  recheckTimer = null;
  stopWatchingHealth = null;
  checking = null;
  checkAgain = !1;
  lifetime = new AbortController();
  restingUntil = new Map();
  start() {
    this.stopped &&
      ((this.stopped = !1),
      (this.lifetime = new AbortController()),
      (this.stopWatchingHealth = this.deps.watchHealth(
        () => void this.checkSoon(),
      )),
      this.armTimer(),
      this.checkSoon());
  }
  stop() {
    this.stopped ||
      ((this.stopped = !0),
      this.lifetime.abort(),
      this.timer && clearTimeout(this.timer),
      (this.timer = null),
      this.recheckTimer && clearTimeout(this.recheckTimer),
      (this.recheckTimer = null),
      this.stopWatchingHealth?.(),
      (this.stopWatchingHealth = null));
  }
  checkSoon() {
    return this.checking
      ? ((this.checkAgain = !0), this.checking)
      : ((this.checking = this.checkAll()
          .catch((o) => {
            _.logger.warn("[memory:dream] dream check failed", {
              error: o instanceof Error ? o.message : String(o),
            });
          })
          .finally(() => {
            ((this.checking = null),
              this.checkAgain &&
                !this.stopped &&
                ((this.checkAgain = !1), this.checkSoon()));
          })),
        this.checking);
  }
  armTimer() {
    this.timer && clearTimeout(this.timer);
    const o = he + Math.floor(Math.random() * pe);
    ((this.timer = setTimeout(() => {
      ((this.timer = null), this.checkSoon(), this.armTimer());
    }, o)),
      this.timer.unref?.());
  }
  recheckSoon() {
    this.recheckTimer ||
      this.stopped ||
      ((this.recheckTimer = setTimeout(() => {
        ((this.recheckTimer = null), this.checkSoon());
      }, ge)),
      this.recheckTimer.unref?.());
  }
  isReady() {
    return (
      !this.stopped && this.deps.dreamingEnabled() && this.deps.canRunAgents()
    );
  }
  async checkAll() {
    if (!this.isReady()) return;
    const o = this.deps.openProfileIds();
    let n = o.length === 0;
    for (const s of o) {
      if (!this.isReady()) return;
      const r = await D("Listing the dreams", v, this.deps.listTargets(s));
      if (r.kind === "not-ready") {
        ((n = !0),
          _.logger.debug("[memory:dream] profile not ready to dream yet", {
            reason: r.reason,
          }));
        continue;
      }
      for (const t of r.targets) {
        if (!this.isReady()) return;
        await this.checkTarget(t);
      }
    }
    n && this.recheckSoon();
  }
  async checkTarget(o) {
    const n = we(o.target),
      s = this.deps.now();
    if (
      !(
        o.target.kind === "companion" &&
        (o.lastUsedAtMs === null || o.lastUsedAtMs <= s - Ie)
      ) &&
      !((this.restingUntil.get(n) ?? 0) > s)
    )
      try {
        const r = await q.readOptMemDreamState(this.deps.accountId, o.target);
        if (r.running) return;
        const t = await D(
          "Reading the notes",
          v,
          o.newNoteTimes(r.lastCompleted?.notesThroughMs ?? null, s),
        );
        if (
          t.length === 0 &&
          (r.lastCompleted !== null ||
            !(await D("Reading the files", v, o.hasFilesToFix())))
        )
          return;
        const i = N.optMemDreamDue({
          nowMs: s,
          timeZone: this.deps.timeZone(),
          lastFinishedAtMs: r.lastCompleted?.finishedAtMs ?? null,
          newNoteTimes: t,
        });
        if (i.kind === "not-due") return;
        const a = await q.claimOptMemDream(this.deps.accountId, {
          target: o.target,
          clientId: this.deps.clientId,
          trigger: i.trigger,
          dueSinceMs: i.dueSinceMs,
        });
        if (a.kind !== "claimed") return;
        _.logger.info("[memory:dream] dream started", {
          dreamId: a.dreamId,
          kind: o.target.kind,
          trigger: i.trigger,
        });
        const l = new AbortController(),
          m = await D(
            "The dream",
            Me,
            o.run(
              { dreamId: a.dreamId, notesSinceMs: a.notesSinceMs },
              AbortSignal.any([this.lifetime.signal, l.signal]),
            ),
          ).catch((u) => {
            throw (l.abort(), u);
          });
        if (
          (_.logger.info("[memory:dream] dream ended", {
            dreamId: a.dreamId,
            outcome: m.status,
            ...(m.status === "failed" ? { reason: m.reason } : {}),
            ...(m.status === "complete"
              ? { filesChanged: m.filesChanged.length }
              : {}),
          }),
          m.status === "failed")
        ) {
          const u =
            N.optMemDreamNightStartMs(this.deps.now(), this.deps.timeZone()) +
            864e5;
          this.restingUntil.set(
            n,
            m.reason === "insufficient_credits" ? u : this.deps.now() + Z,
          );
        }
      } catch (r) {
        if (r instanceof q.OptMemDreamRequestError && r.code === "dreaming_off")
          return;
        (this.restingUntil.set(n, this.deps.now() + Z),
          _.logger.warn("[memory:dream] dream check failed", {
            kind: o.target.kind,
            error: r instanceof Error ? r.message : String(r),
          }));
      }
  }
}
const W = 100,
  P = 280;
function Ee(e) {
  const o = (t) => d.transcriptPath(e.profileRoot, t),
    n = (t) =>
      t !== null &&
      t.isHidden !== !0 &&
      (e.companionId === void 0 || t.companionId === e.companionId),
    s = (t) =>
      `"${d.shorten(t.title || "Untitled", 80)}", with ${e.companionName(t.companionId)}`,
    r = (t, i) =>
      F.untrusted("transcript", i, { sessionKey: e.sessionKey, id: t });
  return {
    async list({ fromMs: t, toMs: i, limit: a }) {
      const l = await e.source.listChats({
        fromMs: t,
        toMs: i,
        limit: a,
        ...(e.companionId ? { companionId: e.companionId } : {}),
      });
      if (l.length === 0) return "No chats were started in that range.";
      const m = l.map(
        (u) =>
          `- ${u.id}, started ${d.optMemDreamStamp(u.createdAt, e.timeZone)}, ${s(u)}`,
      );
      return `${l.length} ${l.length === 1 ? "chat" : "chats"}, oldest first. Read one with its chat id:
${r(
  "dream-chat-list",
  m.join(`
`),
)}`;
    },
    async read({ chatId: t, offset: i, maxChars: a }) {
      if (!d.CHAT_ID.test(t))
        return "Error: that is not a chat id search_chats returned.";
      const l = o(t);
      try {
        await $.access(l);
      } catch {
        return "That chat is not on this device, or is not one this dream may read.";
      }
      const m = [];
      let u = 0,
        w = null;
      const y = await d.readTranscript(l, (h) => {
        if (h.index < i) return !0;
        const E =
            h.ts === null ? "" : ` ${d.optMemDreamStamp(h.ts, e.timeZone)}`,
          f = `#${h.index}${E} ${h.role}: ${h.text}`;
        return m.length > 0 && u + f.length > a
          ? ((w = h.index), !1)
          : (m.push(f.length > a ? `${f.slice(0, a - 1)}…` : f),
            (u += f.length),
            !0);
      });
      if (!n(y))
        return "That chat is not on this device, or is not one this dream may read.";
      const I = `Chat ${t}, ${s(y ?? {})}${y?.createdAt ? `, started ${d.optMemDreamStamp(y.createdAt, e.timeZone)}` : ""}${y?.messageCount ? `, ${y.messageCount} messages` : ""}.`,
        c =
          m.length === 0
            ? `${I}
No messages from offset ${i}.`
            : [I, ...m].join(`
`),
        M =
          w === null
            ? ""
            : `
Continue with offset ${w}.`;
      return `${r(`dream-chat:${t}:${i}`, c)}${M}`;
    },
    async search({ words: t, fromMs: i, toMs: a, limit: l, signal: m }) {
      const u = [...new Set(t.map((h) => h.toLocaleLowerCase()))].filter(
        Boolean,
      );
      if (u.length === 0) return "Error: give at least one word to search for.";
      const y =
          (await e.source.searchChats(u.join(" "), m)) ??
          (await e.source.listChats({
            fromMs: i,
            toMs: a,
            limit: W,
            ...(e.companionId ? { companionId: e.companionId } : {}),
          })),
        I = [];
      for (const h of y.slice(0, W)) {
        if (
          (m?.throwIfAborted(),
          (e.companionId !== void 0 && h.companionId !== e.companionId) ||
            (a !== null && h.createdAt >= a) ||
            (i !== null && h.updatedAt < i))
        )
          continue;
        const E = o(h.id);
        try {
          await $.access(E);
        } catch {
          continue;
        }
        const f = [],
          p = await d.readTranscript(E, (g) => {
            if (
              (g.ts !== null && i !== null && g.ts < i) ||
              (g.ts !== null && a !== null && g.ts >= a)
            )
              return;
            const S = g.text.toLocaleLowerCase();
            u.every((A) => S.includes(A)) && f.push(g);
          });
        if (n(p))
          for (const g of f)
            I.push({ chatId: h.id, chat: p ?? {}, message: g });
      }
      if (I.length === 0) return "No messages match.";
      I.sort((h, E) => (E.message.ts ?? 0) - (h.message.ts ?? 0));
      const c = I.slice(0, l).map(({ chatId: h, chat: E, message: f }) => {
          const p = f.text.toLocaleLowerCase().indexOf(u[0] ?? ""),
            g = Math.max(0, p - P / 2),
            S = d.shorten(f.text.slice(g, g + P), P);
          return `- ${f.ts === null ? "undated" : d.optMemDreamStamp(f.ts, e.timeZone)}, chat ${h} (${s(E)}), message #${f.index}, ${f.role}: ${g > 0 ? "…" : ""}${S}`;
        }),
        M = Math.min(l, I.length);
      return `${I.length} ${I.length === 1 ? "message matches" : "messages match"}; the newest ${M}. Read around one with its chat id and an offset a few messages before it:
${r(
  "dream-chat-search",
  c.join(`
`),
)}`;
    },
  };
}
const B = (e, o) => e.localeCompare(o, void 0, { sensitivity: "accent" }) === 0;
async function _e(e) {
  const o = new Map(e.companions.map((t) => [t.id, t.name]));
  let n;
  if (e.kind === "profile") {
    const t = await H.optMemReplicaRegistry.syncProfile(
      e.profileId,
      e.accountId,
    );
    if (t.kind !== "synced")
      throw new Error(`Notes are unavailable (${t.reason})`);
    n = [
      {
        replica: await H.optMemReplicaRegistry.getOpen(
          e.profileId,
          e.accountId,
        ),
        authorName: null,
      },
    ];
  } else {
    const t = e.companions[0];
    if (!t || !e.sourceWorkspaceId)
      throw new Error("The companion has no memory yet");
    const i = await z.openOptMemCompanionNoteLanes({
      profileId: e.profileId,
      accountId: e.accountId,
      companionId: t.id,
      sourceWorkspaceId: e.sourceWorkspaceId,
    });
    if (i.kind !== "result")
      throw new Error(`Notes are unavailable (${i.reason})`);
    n = i.lanes.map((a) => ({ ...a, companionId: t.id }));
  }
  const s = (t, i) =>
      e.kind === "profile"
        ? (o.get(i.companionId) ?? "a companion")
        : (i.authorName ?? t.authorName ?? "someone"),
    r = (t, i) =>
      i === void 0
        ? [{ companionId: t.companionId }]
        : e.kind === "profile"
          ? e.companions
              .filter((l) => B(l.name, i))
              .map((l) => ({ companionId: l.id }))
          : t.authorName !== null
            ? B(t.authorName, i)
              ? [{ companionId: t.companionId }]
              : null
            : [{ companionId: t.companionId, authorName: i }];
  return {
    async read({ source: t, ...i }) {
      const a = [],
        l = [];
      let m = !1;
      for (const w of n)
        for (const y of r(w, t) ?? []) {
          const I = await w.replica.dreamNotes({ ...i, ...y });
          if (I.kind === "error") return { kind: "error", message: I.message };
          m ||= I.value.truncated;
          for (const c of I.value.matches)
            l.push({ savedAtMs: c.observedAtMs, source: s(w, c) });
          for (const c of I.value.notes)
            a.push({
              savedAtMs: c.observedAtMs,
              source: s(w, c),
              text: c.text,
            });
        }
      const u = i.order === "oldest" ? 1 : -1;
      return (
        a.sort((w, y) => u * (w.savedAtMs - y.savedAtMs)),
        { kind: "result", notes: a.slice(0, i.limit), hits: l, truncated: m }
      );
    },
  };
}
async function Se(e) {
  const o = [
      {
        from: T.join(e.profileRoot, R.SYNCED_FS_LAYOUT.globalMemory),
        to: T.join(e.profileRoot, "PROFILE.md"),
      },
      ...e.companionIds.map((s) => ({
        from: T.join(e.profileRoot, R.SYNCED_FS_LAYOUT.companionMemoryFile(s)),
        to: T.join(
          e.profileRoot,
          R.SYNCED_FS_LAYOUT.companion(s),
          "COMPANION.md",
        ),
      })),
    ],
    n = [];
  for (const s of o) {
    if (
      await $.access(s.to).then(
        () => !0,
        () => !1,
      )
    )
      continue;
    const r = await $.readFile(s.from, "utf8").catch(() => null);
    if (!(r === null || !d.hasOptMemLegacyContent(r)))
      try {
        (await $.writeFile(s.to, r, { encoding: "utf8", flag: "wx" }),
          n.push(s.to));
      } catch (t) {
        if (t instanceof Error && "code" in t && t.code === "EEXIST") continue;
        _.logger.warn(
          "[memory:dream] could not carry over an earlier memory file",
          { error: t instanceof Error ? t.message : String(t) },
        );
      }
  }
  return n;
}
async function L(e) {
  const o = await $.readFile(e, "utf8").catch(() => null);
  return o !== null && d.hasOptMemLegacyContent(o) ? o : null;
}
async function J(e) {
  const o = [],
    n = T.join(
      e.profileRoot,
      e.kind === "profile"
        ? R.SYNCED_FS_LAYOUT.globalMemory
        : R.SYNCED_FS_LAYOUT.companionMemoryFile(e.companionId),
    ),
    s = await L(n),
    r = e.files.get(e.kind === "profile" ? "PROFILE.md" : "COMPANION.md");
  if (
    (s !== null && !r?.includes(s.trim()) && o.push({ path: n, content: s }),
    e.kind !== "profile")
  )
    return o;
  let t = ee;
  for (const i of e.companions) {
    const a = T.join(
        e.profileRoot,
        R.SYNCED_FS_LAYOUT.companionMemoryFile(i.id),
      ),
      l = await L(a);
    l === null ||
      l.length > t ||
      ((t -= l.length), o.push({ path: a, content: l, companionName: i.name }));
  }
  return o;
}
async function ke(e) {
  if (e.profile === void 0) return [];
  const o = await L(T.join(e.profileRoot, R.SYNCED_FS_LAYOUT.globalMemory));
  if (o === null) return [];
  const n = new Set(
      o
        .split(
          `
`,
        )
        .map((r) => r.trim()),
    ),
    s = e.profile
      .split(
        `
`,
      )
      .map((r) => r.trim());
  return s.some((r) => r !== "" && n.has(r))
    ? s.filter((r) => r !== "" && !r.startsWith("#") && !n.has(r))
    : [];
}
const Te = 3 * 6e4,
  X = 6e4,
  Re = [2e3, 1e4],
  qe = 20 * 6e4,
  $e = 64,
  Ae = new Set([
    "LIMIT_EXCEEDED",
    "CREDIT_RATE_LIMIT",
    "SUBSCRIPTION_EXPIRED",
    "CREDIT_PERIOD_PREPARING",
    "CREDIT_PERIOD_BLOCKED",
  ]);
function Ce(e) {
  return Ae.has(e.code)
    ? "insufficient_credits"
    : e.httpStatus === 403 || e.code === "ACCESS_DENIED"
      ? "lease_lost"
      : e.code === "cloud_terminal_timeout"
        ? "timed_out"
        : e.code === "cloud_terminal_wait_cancelled" ||
            e.code === "ended_aborted" ||
            e.code === "ended_killed"
          ? "cancelled"
          : "chat_failed";
}
async function k(e, o, n) {
  for (let s = 0; ; s += 1)
    try {
      await q.finishOptMemDream(e.accountId, e.dreamId, {
        clientId: e.clientId,
        sessionId: o,
        outcome: n,
      });
      break;
    } catch (r) {
      const t = Re[s];
      if (t === void 0) {
        _.logger.warn("[memory:dream] could not report how the dream ended", {
          dreamId: e.dreamId,
          outcome: n.status,
          error: r instanceof Error ? r.message : String(r),
        });
        break;
      }
      await new Promise((i) => setTimeout(i, t));
    }
  return n.status === "complete"
    ? { status: "complete", filesChanged: n.filesChanged }
    : { status: "failed", reason: n.reason };
}
async function De(e) {
  const o = d.dreamFolder(e.profileRoot, e.kind, e.chatCompanionId);
  if (!o) return k(e, null, { status: "failed", reason: "files_unavailable" });
  let n;
  try {
    n = await d.readDreamFiles(e.kind, o);
  } catch {
    return k(e, null, { status: "failed", reason: "files_unavailable" });
  }
  if (e.signal.aborted)
    return k(e, null, { status: "failed", reason: "cancelled" });
  const s = await e.openNotes().catch(() => null);
  if (!s) return k(e, null, { status: "failed", reason: "notes_unavailable" });
  const r = await s
    .read({
      afterMs: e.notesSinceMs ?? e.nowMs - N.OPTMEM_DREAM_FIRST_NIGHT_MS,
      beforeMs: e.nowMs,
      order: "oldest",
      limit: G + 1,
    })
    .catch(() => null);
  if (!r || r.kind === "error")
    return k(e, null, { status: "failed", reason: "notes_unavailable" });
  const t = ne(r.notes),
    i =
      e.notesSinceMs === null
        ? await J({
            profileRoot: e.profileRoot,
            kind: e.kind,
            companionId: e.chatCompanionId,
            companions: e.companions,
            files: n,
          }).catch(() => [])
        : [],
    a =
      e.notesSinceMs === null && e.kind === "profile"
        ? await ke({
            profileRoot: e.profileRoot,
            profile: n.get("PROFILE.md"),
          }).catch(() => [])
        : [];
  if (
    t.notes.length === 0 &&
    i.length === 0 &&
    d.optMemDreamWarnings(e.kind, n).length === 0
  )
    return k(e, null, {
      status: "complete",
      notesThroughMs: e.nowMs - 1,
      filesChanged: [],
    });
  const l = await d
      .readDreamSkills(e.profileRoot, e.kind, e.chatCompanionId)
      .catch(() => []),
    m = U.createAgentRootMask(U.accountRootOfWorkspaceRoot(e.profileRoot)),
    u =
      e.kind === "companion"
        ? [...new Set([...e.people, ...t.notes.map((p) => p.source)])]
        : [],
    w = new AbortController();
  let y = null,
    I = () => {},
    c = null;
  const M = (p) => {
      w.signal.aborted || ((y = p), I(), w.abort());
    },
    h = () => M("cancelled");
  (e.signal.addEventListener("abort", h, { once: !0 }),
    e.signal.aborted && h());
  const E = setInterval(() => {
    const p = Date.now();
    q.renewOptMemDream(e.accountId, e.dreamId, e.clientId)
      .then((g) => {
        g
          ? c && (c.heldUntilMs = p + Y.OPTMEM_DREAM_LEASE_MS - X)
          : M("lease_lost");
      })
      .catch((g) => {
        g instanceof q.OptMemDreamRequestError &&
          g.status === 403 &&
          M("lease_lost");
      });
  }, Te);
  let f = null;
  try {
    const p = await e.chatService.runHiddenMemoryDream({
      companionId: e.chatCompanionId,
      dream: { dreamId: e.dreamId, kind: e.kind },
      signal: w.signal,
      timeoutMs: qe,
      followUp: ue(e.kind, n, i.length > 0) ?? void 0,
      prepare: (S) => {
        ((f = S.id),
          (c = {
            kind: e.kind,
            timeZone: e.timeZone,
            sessionKey: S.untrustedBoundaryKey,
            notes: s,
            chats: e.openChats({
              timeZone: e.timeZone,
              sessionKey: S.untrustedBoundaryKey,
            }),
            heldUntilMs: Date.now() + Y.OPTMEM_DREAM_LEASE_MS - X,
            seen: [],
          }),
          w.signal.aborted || (I = d.registerDreamSession(S.id, c)));
        const A = me({
          kind: e.kind,
          nowMs: e.nowMs,
          timeZone: e.timeZone,
          subjectName: e.subjectName,
          people: u,
          folder: `${m.toAgentPath(o)}/`,
          files: n,
          notes: t.notes,
          notesLeft: Math.max(0, r.hits.length - t.notes.length),
          sinceMs: e.notesSinceMs,
          sessionKey: S.untrustedBoundaryKey,
          chatLines: a,
          skills: l,
          earlierMemories: i.map((K) => ({
            ...K,
            path: m.toAgentPath(K.path),
          })),
        });
        return (c.seen.push(...A), A);
      },
    });
    if (((f = p.sessionId), p.outcome.kind === "failed"))
      return (
        _.logger.warn("[memory:dream] dream chat ended early", {
          dreamId: e.dreamId,
          code: p.outcome.code,
        }),
        k(e, f, { status: "failed", reason: y ?? Ce(p.outcome) })
      );
    const g = await d.readDreamFiles(e.kind, o);
    return k(e, f, {
      status: "complete",
      notesThroughMs: t.notesThroughMs ?? e.nowMs - 1,
      filesChanged: d.changedOptMemDreamFiles(n, g).slice(0, $e),
    });
  } catch (p) {
    return (
      _.logger.warn("[memory:dream] dream chat failed", {
        dreamId: e.dreamId,
        error: p instanceof Error ? p.message : String(p),
      }),
      k(e, f, { status: "failed", reason: y ?? "chat_failed" })
    );
  } finally {
    (clearInterval(E), e.signal.removeEventListener("abort", h), I());
  }
}
function Oe(e, o) {
  const n = e.chatSessionManager;
  return {
    async listChats({ fromMs: s, toMs: r, companionId: t, limit: i }) {
      const a = [];
      let l = s === null ? void 0 : { value: s - 1, id: "~" };
      for (; a.length < i; ) {
        const m = await n.listSessionMetadata({
          filter: {
            parentSessionId: null,
            isHidden: !1,
            hasUserMessage: !0,
            ...(t ? { companionId: t } : {}),
          },
          order: { field: "createdAt", direction: "asc" },
          cursor: l,
          limit: 100,
        });
        for (const u of m.sessions) {
          if (r !== null && u.createdAt >= r) return a;
          if (
            !(u.storageProfileId && u.storageProfileId !== o) &&
            (a.push(u), a.length === i)
          )
            return a;
        }
        if (!m.hasMore || !m.nextCursor) break;
        l = m.nextCursor;
      }
      return a;
    },
    async searchChats(s, r) {
      const t = await n.searchSessionsPaged(
        s,
        void 0,
        100,
        !1,
        "desc",
        r,
        "local",
      );
      return t.success ? t.sessions : null;
    },
  };
}
async function Ne(e) {
  const o = _.chatServiceRegistry.get(e.profileId);
  if (!o) return { kind: "not-ready", reason: "chats" };
  const n = _.memoryService.getRegistration(e.profileId);
  if (!n) return { kind: "not-ready", reason: "memory" };
  if (n.selection.kind !== "optmem-v1") return { kind: "ready", targets: [] };
  const s = _.syncedFSManagerRegistry
    .forAccount(e.accountId)
    .getWorkspaceIdForProfile(e.profileId);
  if (!s) return { kind: "not-ready", reason: "synced folder" };
  const r = o.chatSessionManager.userProfile,
    t = o.companionManager,
    i = t.getDefaultCompanionForNewChat();
  if (!t.resolveCompanionById(i.id))
    return { kind: "not-ready", reason: "companions" };
  const a = t
      .listDiscoverableCompanions()
      .map((c) => ({ id: c.id, name: c.name })),
    l = (c) => a.find((M) => M.id === c)?.name ?? "a companion",
    u =
      (
        await _.authManager
          .forProfile(e.profileId)
          .getUser()
          .catch(() => null)
      )?.user?.fullName?.trim() ||
      r.name?.trim() ||
      "the user",
    w = (c) =>
      c === "profile" ? I.map((M) => ({ id: M.id, name: M.name })) : [],
    y = (c, M) => {
      const h = () =>
        _e({
          kind: c,
          profileId: e.profileId,
          accountId: e.accountId,
          companions: c === "profile" ? a : [M],
          sourceWorkspaceId: s,
        });
      return {
        target:
          c === "profile"
            ? { kind: "profile", workspaceId: s }
            : { kind: "companion", workspaceId: s, companionId: M.id },
        lastUsedAtMs: c === "companion" ? (M.latestUsageDate ?? null) : null,
        async hasFilesToFix() {
          const E = d.dreamFolder(r.syncedRoot, c, M.id);
          if (!E) return !1;
          const f = await d.readDreamFiles(c, E);
          return d.optMemDreamWarnings(c, f).length > 0
            ? !0
            : (
                await J({
                  profileRoot: r.syncedRoot,
                  kind: c,
                  companionId: M.id,
                  companions: w(c),
                  files: f,
                })
              ).length > 0;
        },
        async newNoteTimes(E, f) {
          const p = await (
            await h()
          ).read({
            afterMs: E ?? f - N.OPTMEM_DREAM_FIRST_NIGHT_MS,
            beforeMs: f,
            order: "oldest",
            limit: 0,
          });
          if (p.kind === "error") throw new Error(p.message);
          return p.hits.map((g) => g.savedAtMs).sort((g, S) => g - S);
        },
        async run(E, f) {
          return De({
            accountId: e.accountId,
            clientId: e.clientId,
            dreamId: E.dreamId,
            notesSinceMs: E.notesSinceMs,
            kind: c,
            profileRoot: r.syncedRoot,
            chatCompanionId: M.id,
            subjectName: c === "profile" ? u : M.name,
            people: c === "companion" ? [u] : [],
            companions: w(c),
            openNotes: h,
            openChats: ({ timeZone: p, sessionKey: g }) =>
              Ee({
                source: Oe(o, e.profileId),
                profileRoot: r.syncedRoot,
                ...(c === "companion" ? { companionId: M.id } : {}),
                companionName: l,
                timeZone: p,
                sessionKey: g,
              }),
            chatService: o,
            timeZone: e.timeZone(),
            nowMs: Date.now(),
            signal: f,
          });
        },
      };
    },
    I = t.listDiscoverableOwnedCompanions().filter((c) => {
      const M = _.resolveCompanionSource(t, c.id);
      return M?.kind === "owned" && M.workspaceId === s;
    });
  return (
    await Se({ profileRoot: r.syncedRoot, companionIds: I.map((c) => c.id) }),
    {
      kind: "ready",
      targets: [y("profile", i), ...I.map((c) => y("companion", c))],
    }
  );
}
function be(e) {
  const o = () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    n = new ye({
      accountId: e.accountId,
      clientId: e.clientId,
      openProfileIds: e.openProfileIds,
      canRunAgents: e.canRunAgents,
      watchHealth: e.watchHealth,
      dreamingEnabled: () =>
        _.getFeatureFlags(e.accountId).optmemDreamingEnabled,
      listTargets: (r) =>
        Ne({
          profileId: r,
          accountId: e.accountId,
          clientId: e.clientId,
          timeZone: o,
        }),
      timeZone: o,
      now: () => Date.now(),
    }),
    s = (r) => {
      r === e.accountId && n.checkSoon();
    };
  return (
    _.featureFlagsEmitter.on("account-change", s),
    n.start(),
    () => {
      (_.featureFlagsEmitter.off("account-change", s), n.stop());
    }
  );
}
exports.startOptMemDreams = be;
