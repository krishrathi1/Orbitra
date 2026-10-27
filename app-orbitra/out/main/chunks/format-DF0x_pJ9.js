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
      (e._sentryDebugIds[t] = "2c84c503-7d17-4b0f-a2ed-a20efa993469"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-2c84c503-7d17-4b0f-a2ed-a20efa993469"));
  })();
} catch {}
const i = require("./contracts-rChhtF3C.js"),
  l = `Your OptMem own cover contains the current user's contributions in this browser profile;
the shared cover combines contributors, including this user, across profiles. In memory_contributor
groups, names and IDs identify whose conversation supplied each history. Resolve original-user "User", "I", and "my"
against that contributor, who may be reporting about someone else; preserve named subjects and speakers.
"Memories from active user" means the current user, not your companion identity;
do not apply another person's history to them. Memory without an author has no recorded contributor;
never assume it came from the current user.
Covers are bounded facts and summaries without ranges. Recall searches all authorized contributors,
including details absent here; recall a topic, then zoom its returned contributorId and #range.
Only the root chat uses memory helpers. Bounded child executions return useful findings to their parent.`,
  d = `Your OptMem own cover contains the current user's contributions in this browser profile. The
shared cover's companion_memory holds every contributor's memory of this companion, including this
user's, in the order it was saved, so it can repeat the own cover. Its lines show #positions. A note
names its author in brackets; a summary of a #start-end range names authors in its text. Resolve
original-user "User", "I", and "my" against that author, who may be reporting about someone else;
preserve named subjects and speakers. A memory_contributor group is a separate history whose name and
IDs identify who supplied it. "Memories from active user" means the current user, not your companion
identity; do not apply another person's history to them. Memory without an author has no recorded
contributor; never assume it came from the current user.
The own cover has no ranges. Zoom or forget a companion_memory #range with its contributorId. Recall
searches all authorized contributors, including details absent here; recall a topic, then zoom its
returned contributorId and #range.
Only the root chat uses memory helpers. Bounded child executions return useful findings to their parent.`,
  m = `OptMem keeps observations saved from conversations. Recall lists them under "Memories from"
headings with each history's contributorId, which identify whose conversation supplied them. Resolve
original-user "User", "I", and "my" against that contributor, who may be reporting about someone else;
preserve named subjects and speakers. "Memories from active user" means the current user, not your
companion identity; do not apply another person's history to them. Memory without an author has no
recorded contributor; never assume it came from the current user.
Recall searches all authorized contributors; recall a topic, then zoom a returned #position with its
contributorId.
Only the root chat uses memory helpers. Bounded child executions return useful findings to their parent.`,
  h = `Save new durable context with orbitra.note as you encounter each source, even without a
remembering request: user details and habits, preferences, projects, decisions, blockers, outcomes,
work history, and reusable processes. No background observer will save these later. Before your final
reply, check that every useful new fact was saved in a successful note or PROFILE.md identity entry as below.
A file remaining available does not save its findings in OptMem.

Keep sources separate: a user report, email, and invite each need their own note when they add findings.
Begin each note with its specific source: the named user "reported...", an email's sender, or
"Calendar invite schedules..."; "Project files show..." is too vague. Save unconfirmed user reports
as reports. Retain pending reviews and decisions; distinguish plans from events and receipt from approval.
Expected dates do not imply completion.

Save a named project's purpose, audience, and state when known; save a habit separately with what the
user did and how often. Past behavior is not a standing preference or instruction to you. Mark inferred
preferences as tentative and include their basis. Use additional notes to retain all useful findings.
For each skill you create, save its exact name, path, and when it applies; keep steps, commands, and
pitfalls in the skill. Without a skill, briefly note what worked. Ordinary safe notes need no permission.`;
function p(e, t, r) {
  return `orbitra.recall({ query, ${e ? "userId?, " : ""}from?, to?, limit?, contributorId? }) finds observations about a
topic: name the people, projects, or terms involved in plain words. It returns up to limit (default 10,
at most 30) ${t ? "matches that a relevance check kept, most relevant first" : "matches without a relevance check, best first; some may be unrelated"}. Matches share ${r ? "words, names, or meaning" : "at least one word or name"} with
the query; use pattern for exact wording, ids, or paging.`;
}
const f = `MEMORY-FIRST RETRIEVAL: For prior user-specific context, including vague follow-ups, inspect
the cover before searching chats, transcripts, files, apps, or the web. When the user names a person,
company, or project, recall that name before searching files, apps, or the web. Recall distinctive topic
terms for missing facts, then zoom for detail or sources. Reconstruct prior plans, decisions,
meetings, lessons, corrections, or unfinished tasks from raw observations, not summaries alone.
A visible raw observation can answer directly. Consult primary sources when memory is missing,
ambiguous, contradictory, stale, or the task needs comprehensive, source-grounded work or verification.`,
  b = `orbitra.zoom({ range, contributorId?, limit? }) reads a #position or inclusive #start-end range.
Summaries expand one level; keep zooming until you reach the needed observations and source references.
Unrecorded sources are marked. Pages default to 20 nodes; limit is 2-100. Continue with nextRange and
the same contributorId. Positions repeat across memory sequences, even for one person: pass recall's
contributorId to zoom or forget. Omit it only when the current user has exactly one sequence in this profile.

For explicit forgetting, locate the intended observations, then call
orbitra.forget({ target: 'observations', range, contributorId? }). The range deletes EVERY underlying
observation and derived summary, even when displayed as a summary. Preserve unrelated memories.
Only the current user's observations in this profile and memory without an author can be deleted; source chats remain. Never
resave forgotten content from this turn or its source. To repair a generated summary, inspect its raw
observations, then use orbitra.forget({ target: 'summary', range, contributorId? }) with the exact
summary range. This rebuilds summaries without deleting observations; explain the discrepancy.
Users can review or forget observations at orbitra://settings/memory. Report helper failures;
never claim success or invent a fallback.`,
  y = `MEMORY-FIRST RETRIEVAL: For prior user-specific context, including vague follow-ups, recall
before searching chats, transcripts, files, apps, or the web. When the user names a person,
company, or project, recall that name before searching files, apps, or the web. Recall distinctive topic
terms for missing facts, then zoom for detail or sources. Reconstruct prior plans, decisions,
meetings, lessons, corrections, or unfinished tasks from raw observations. A recalled raw
observation can answer directly. Consult primary sources when memory is missing, ambiguous,
contradictory, stale, or the task needs comprehensive, source-grounded work or verification.`,
  v = `orbitra.zoom({ range, contributorId? }) reads the observation at a #position, with its ID and
source. For one of the current user's own observations, zoom also shows the chat messages it came
from when that chat is on this device; orbitra.zoom({ chatId, offset }) then reads on through that
chat. Unrecorded sources are marked. Positions repeat across memory sequences, even for one person:
pass recall's contributorId to zoom or forget. Omit it only when the current user has exactly one
sequence in this profile.

For explicit forgetting, locate the intended observations, then call
orbitra.forget({ target: 'observations', range, contributorId? }) with each one's #position.
Preserve unrelated memories. Only the current user's observations in this profile and memory without
an author can be deleted; source chats remain. Never resave forgotten content from this turn or its
source. Users can review or forget observations at orbitra://settings/memory. Report helper
failures; never claim success or invent a fallback.`;
function g(e, t, r, o) {
  return [
    o ? f : y,
    `orbitra.recall({ pattern, ${e ? "userId?, " : ""}flags?, from?, to?, ids?, limit?, contributorId?, before? }) searches raw observations and tags by
regex, not semantic search. Use literals or simple alternatives; escape literal punctuation. Avoid nested
quantifiers, lookarounds, backreferences, and chains of .*. Dates use YYYY-MM-DD; ids are observation
UUIDs shown by zoom. contributorId limits recall to one memory history. Each history's matches run
newest first; before: n starts below #n. When recall reports more results, repeat it with each
contributorId and before it lists.`,
    ...(t || r ? [p(e, t, r)] : []),
    o ? b : v,
  ].join(`

`);
}
const w = `orbitra.note({ text, label, tags? }) requires non-empty text and label; use a short past-tense label.
Keep each note self-contained, under 400 characters, and specific about its subject. Optional tags
are an array of strings naming relevant people, projects, topics, and aliases. Use the supplied conversation
user name for their reports, actions, and preferences ("X reported...") and a name tag of at most
80 characters; use "User reported..." only when unnamed. Never guess identities or replace a named
sender, third party, or quoted speaker with the conversation user. Preserve source versus subject.
Only claim a save or promise future recall after a successful note call.

Write only global user identity (name, workplaces, roles) to PROFILE.md, as compact key: value lines.
Correct a line that is wrong and leave the other lines alone; a nightly dream may keep more there.
Read it before editing; use its filesystem-context path and character limit, shortening when warned.
Keep projects, tasks, general memories, and other contributors' identities out of what you write.
Skip transient chatter, tool mechanics, unaccepted suggestions, accurately saved facts, and secrets
(passwords, PINs, tokens, keys, payment details, authentication material).
While OptMem is active, $MEMORY_DIR, companion-memory.md, global-memory.md, observation files, and
reflection files are legacy: you may read them when a detail is missing from your memory, but they
can be outdated, your current memory wins where they disagree, and you never write to them.`,
  R = `A background observer saves durable facts from this conversation. Use orbitra.note only for
explicit requests to remember, never automatic capture or a pre-reply checklist. The observer sees
successful notes and avoids duplicates. Do not claim background capture has completed without a
confirmed save. Continue using recall, zoom, and forget as described below.`,
  O = `You are shared. orbitra.listCollaborators({ query?, limit?, after? }) lists current access,
including people without memories. query matches display names; omit it for everyone. Results contain
userId, displayName, isCurrentUser, permission, and hasMore. While hasMore is true, call it again with
after set to the last userId and the same query before claiming a complete list. Resolve ambiguous
names before selecting a person.
Pass their userId to recall to filter contributions across their profiles; omit it to search everyone.
Use pattern: '.' to browse notes. This filters who supplied memories, not whom they describe; search
a person's name across contributors for claims about them. Former collaborators can have saved
contributions despite being absent from the roster. Recall dates filter recording time, not event
time. Preserve event dates; saved notes may not be an exhaustive activity report.`,
  I = `In your answers, preserve who reported a claim and its certainty when that source matters.
X reporting that Y paused a launch is not independent confirmation. Do not turn a report,
plan, or inference into a confirmed event. Attribute the claim clearly without repeating a qualifier
in every sentence.`;
function E(e) {
  return e === "off" ? m : e === "sequence" ? d : l;
}
function c(e, t = !1, r = !1, o = !1, n = !1, s = "plain") {
  return [
    E(s),
    e ? R : h,
    g(t && r, o, n, s !== "off"),
    ...(t ? [I] : []),
    ...(t && r ? [O] : []),
    w,
  ].join(`

`);
}
const M = "Memories",
  k = "(empty)",
  _ = `<optmem_cover status="unavailable">
Your durable memory cover could not be loaded. This does not mean your memory is empty. Use targeted
orbitra.recall calls when prior memory could matter. Follow the capture guidance above for
when to use orbitra.note.
</optmem_cover>`,
  T = `<optmem_cover status="partial">
This cover contains available memory only. Missing observations are not forgotten. Use targeted
orbitra.recall when a prior detail could matter.
</optmem_cover>`,
  A = "0".repeat(43);
function a(e) {
  return e.length === 0 ? 0 : Math.ceil(e.length / 4);
}
function U(e, t) {
  return e.hi - e.lo === 1 ? `- ${t}` : `- Summary: ${t}`;
}
const N = 32;
function P(e, t, r) {
  return e.hi - e.lo > 1
    ? `- #${e.lo}-${e.hi - 1} Summary: ${t}`
    : r
      ? `- #${e.lo} [${r}] ${t}`
      : `- #${e.lo} ${t}`;
}
function C(e, t, r, o = !1, n = !1, s) {
  const u = `${M}
${
  e.length > 0
    ? e.join(`
`)
    : k
}`;
  return [
    c(
      n,
      s?.isSharedCompanion,
      s?.canListCollaborators,
      s?.canRecallByQuery,
      s?.canRecallByMeaning,
      "plain",
    ),
    ...(o ? [T] : []),
    r,
    i.untrusted("optmem_memory", u, t),
  ].join(`

`);
}
function D(e = !1, t = !1, r = !1, o = !1, n = !1) {
  return [c(e, t, r, o, n), _].join(`

`);
}
function x(e = !1) {
  return a(C([], A, i.UNTRUSTED_CONTENT_BOUNDARY, e));
}
function Y(e, t, r = "plain") {
  const o = r === "sequence" ? P(e, "", "x".repeat(N)) : U(e, "");
  return (
    a(`${o}
`) + t
  );
}
exports.buildOptMemUnavailablePromptContent = D;
exports.estimateOptMemFixedPromptTokens = x;
exports.estimateOptMemNodePromptTokens = Y;
exports.estimateOptMemTokens = a;
