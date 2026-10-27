"use strict";
(function () {
  try {
    var s =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    s.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var s =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new s.Error().stack;
    e &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[e] = "ea67a061-2047-4b57-8152-cc838d14e8f1"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-ea67a061-2047-4b57-8152-cc838d14e8f1"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const I = require("./unicode-CSAGP0Z8.js"),
  w = 64;
function E(s, e) {
  return s.map((n, u) => ({
    id: n.id,
    messageIndex: e + u,
    role: n.role,
    hidden: n.hidden === !0,
    content: I.sanitizeUnpairedSurrogates(
      typeof n.content == "string"
        ? n.content
        : n.content.flatMap((r) =>
            r.type === "text" &&
            !(
              "metadata" in r &&
              typeof r.metadata == "object" &&
              r.metadata !== null &&
              "filename" in r.metadata
            )
              ? [r.text]
              : [],
          ).join(`
`),
    ),
  }));
}
async function b(s) {
  const { session: e, index: n, store: u, cursor: r, signal: a } = s,
    o = e.getTranscriptWindow(),
    f = e.forkedFromMessageCount ?? 0,
    t = {
      transcriptRevision: r?.transcriptRevision ?? o.transcriptRevision,
      transcriptRewriteEpoch:
        r?.transcriptRewriteEpoch ?? o.transcriptRewriteEpoch,
    };
  if (t.transcriptRewriteEpoch !== o.transcriptRewriteEpoch)
    return { success: !1, error: "changed" };
  const i = I.sanitizeUnpairedSurrogates(s.query);
  if (!r || r.source === "local") {
    const c = await n.find(
      {
        source: "local",
        sessionId: e.id,
        path: s.transcriptPath ?? `sessions/${e.fsBasePath}/transcript.jsonl`,
        query: i,
        transcriptRevision: t.transcriptRevision,
        cursor: r?.file,
      },
      a,
    );
    return a?.aborted ||
      e.getTranscriptWindow().transcriptRewriteEpoch !==
        t.transcriptRewriteEpoch
      ? { success: !1, error: "changed" }
      : c.status === "ok"
        ? {
            success: !0,
            matches: c.matches.filter((h) => h.messageIndex >= f),
            transcriptRewriteEpoch: t.transcriptRewriteEpoch,
            cursor: c.cursor
              ? { ...t, source: "local", file: c.cursor }
              : { ...t, source: "live", offset: o.fromIndex },
          }
        : {
            success: !0,
            matches: [],
            reset: !0,
            transcriptRewriteEpoch: t.transcriptRewriteEpoch,
            cursor:
              o.fromIndex > f
                ? { ...t, source: "remote", beforeIndex: o.fromIndex }
                : { ...t, source: "live", offset: o.fromIndex },
          };
  }
  if (r.source === "remote") {
    const c = await u.loadOlderMessages({
      id: e.id,
      beforeIndex: r.beforeIndex,
      transcriptRewriteEpoch: t.transcriptRewriteEpoch,
      rowLimit: w,
      signal: a,
    });
    if (!c) return { success: !1, error: "unavailable" };
    if (c.status === "changed") return { success: !1, error: "changed" };
    const h = await n.find(
      {
        source: "messages",
        query: i,
        messages: E(c.page.messages, c.page.window.fromIndex),
      },
      a,
    );
    if (h.status !== "ok") return { success: !1, error: "unavailable" };
    if (
      a?.aborted ||
      e.getTranscriptWindow().transcriptRewriteEpoch !==
        t.transcriptRewriteEpoch
    )
      return { success: !1, error: "changed" };
    const m = c.page.window.fromIndex;
    return m >= r.beforeIndex
      ? { success: !1, error: "changed" }
      : {
          success: !0,
          matches: h.matches.filter((R) => R.count > 0 && R.messageIndex >= f),
          transcriptRewriteEpoch: t.transcriptRewriteEpoch,
          cursor:
            m > f
              ? { ...t, source: "remote", beforeIndex: m }
              : { ...t, source: "live", offset: o.fromIndex },
        };
  }
  const l = e.getMessages(),
    d = r.offset - o.fromIndex;
  if (d < 0) return { success: !1, error: "changed" };
  const p = l.slice(d, d + w),
    g = await n.find(
      { source: "messages", query: i, messages: E(p, r.offset) },
      a,
    );
  return g.status !== "ok"
    ? { success: !1, error: "unavailable" }
    : a?.aborted ||
        e.getTranscriptWindow().transcriptRewriteEpoch !==
          t.transcriptRewriteEpoch
      ? { success: !1, error: "changed" }
      : {
          success: !0,
          matches: g.matches.filter((c) => c.messageIndex >= f),
          transcriptRewriteEpoch: t.transcriptRewriteEpoch,
          ...(d + p.length < l.length
            ? { cursor: { ...t, source: "live", offset: r.offset + p.length } }
            : {}),
        };
}
async function x(s) {
  const { session: e, store: n } = s;
  if (
    e.getTranscriptWindow().transcriptRewriteEpoch !== s.transcriptRewriteEpoch
  )
    return { success: !1, error: "changed" };
  const r = await n.loadOlderMessages({
    id: e.id,
    beforeIndex: s.messageIndex + 1,
    transcriptRewriteEpoch: s.transcriptRewriteEpoch,
    rowLimit: w,
    signal: s.signal,
  });
  return r
    ? r.status === "changed" ||
      e.getTranscriptWindow().transcriptRewriteEpoch !==
        s.transcriptRewriteEpoch
      ? { success: !1, error: "changed" }
      : { success: !0, ...r.page }
    : { success: !1, error: "unavailable" };
}
async function y(s) {
  const { session: e, store: n, messageId: u, signal: r } = s,
    a = e.getTranscriptWindow(),
    o = a.transcriptRewriteEpoch,
    f = e.forkedFromMessageCount ?? 0;
  let t = e.getMessages(),
    i = a.fromIndex;
  for (; !r?.aborted; ) {
    if (e.getTranscriptWindow().transcriptRewriteEpoch !== o)
      return { success: !1, error: "changed" };
    const l = t.findIndex((p, g) => p.id === u && i + g >= f);
    if (l >= 0)
      return {
        success: !0,
        anchor: {
          messageId: u,
          messageIndex: i + l,
          transcriptRewriteEpoch: o,
        },
      };
    if (i <= f) return { success: !1, error: "unavailable" };
    const d = await n.loadOlderMessages({
      id: e.id,
      beforeIndex: i,
      transcriptRewriteEpoch: o,
      rowLimit: w,
      signal: r,
    });
    if (!d) return { success: !1, error: "unavailable" };
    if (d.status === "changed" || d.page.window.fromIndex >= i)
      return { success: !1, error: "changed" };
    ((t = d.page.messages), (i = d.page.window.fromIndex));
  }
  return { success: !1, error: "unavailable" };
}
exports.findChatMessageAnchor = y;
exports.findChatTextPage = b;
exports.loadChatFindMessage = x;
