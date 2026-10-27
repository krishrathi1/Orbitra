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
      n = new t.Error().stack;
    n &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[n] = "11db75b7-7c6b-4244-a463-c68aa0fec99f"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-11db75b7-7c6b-4244-a463-c68aa0fec99f"));
  })();
} catch {}
const kt = require("valibot");
function Wt(t) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (t) {
    for (const i in t)
      if (i !== "default") {
        const r = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(
          n,
          i,
          r.get ? r : { enumerable: !0, get: () => t[i] },
        );
      }
  }
  return ((n.default = t), Object.freeze(n));
}
const e = Wt(kt),
  Yt = 8192,
  Bt = /[\x00-\x1f\x7f]/,
  qt =
    "URL not allowed: file:// cannot be opened via browser tools. To read a local file (including PDFs), use file_read or file_query with the absolute path — those go through the sandboxed file system.",
  Ht = (t) =>
    `URL not allowed: only http and https URLs can be opened via browser tools (got ${t}).`,
  Qt = "URL not allowed: URLs containing 'user:password@' are rejected.",
  $ = "URL not allowed: malformed or oversized URL.";
function se(t) {
  if (typeof t != "string") return { ok: !1, reason: $ };
  const n = t.trim();
  if (n.length === 0) return { ok: !1, reason: $ };
  if (n.length > Yt) return { ok: !1, reason: $ };
  if (Bt.test(n)) return { ok: !1, reason: $ };
  let i;
  try {
    i = new URL(n);
  } catch {
    return { ok: !1, reason: $ };
  }
  const r = i.protocol;
  return r !== "http:" && r !== "https:"
    ? r === "file:"
      ? { ok: !1, reason: qt }
      : { ok: !1, reason: Ht(r) }
    : i.username !== "" || i.password !== ""
      ? { ok: !1, reason: Qt }
      : { ok: !0, normalized: i.href };
}
function Xt(t) {
  return se(t.url);
}
const d = e.pipe(e.number(), e.finite()),
  x = e.pipe(e.number(), e.safeInteger()),
  Ke = e.custom((t) => typeof t == "object" && t !== null && !Array.isArray(t)),
  Jt = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?Z$/;
function Zt(t) {
  const n = Jt.exec(t);
  if (!n) return !1;
  const i = Number(n[1]),
    r = Number(n[2]),
    o = Number(n[3]),
    a = Number(n[4]),
    s = Number(n[5]),
    l = Number(n[6] ?? 0);
  if (r < 1 || r > 12 || a > 23 || s > 59 || l > 59) return !1;
  const f = [
    31,
    i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  return o >= 1 && o <= (f[r - 1] ?? 0);
}
const c = e.pipe(e.string(), e.check(Zt, "Invalid datetime"));
function M(t) {
  return t === null || typeof t == "string" || typeof t == "boolean"
    ? !0
    : typeof t == "number"
      ? Number.isFinite(t)
      : Array.isArray(t)
        ? t.every(M)
        : ke(t)
          ? Object.values(t).every(M)
          : !1;
}
function ke(t) {
  if (typeof t != "object" || t === null || Array.isArray(t)) return !1;
  const n = Object.getPrototypeOf(t);
  return n === Object.prototype || n === null;
}
e.custom((t) => M(t));
const en = e.custom((t) => ke(t) && Object.values(t).every(M)),
  We = e.optional(en, () => ({})),
  tn = [
    "heartbeat",
    "focus_change",
    "tab_switch",
    "route_navigation",
    "scroll",
    "click",
    "input_commit",
    "form_submit",
    "keyboard_submit",
    "modal_toast_mutation",
  ],
  W = e.picklist(tn),
  nn = [
    "browsing",
    "profile_view",
    "message_composition",
    "message_send_attempt",
    "form_workflow",
    "research",
    "document_work",
    "puzzle_solving",
    "unknown",
  ],
  I = e.picklist(nn),
  rn = ["active", "closed"],
  ce = e.picklist(rn),
  on = ["append", "start", "ignore_duplicate", "close_and_start", "close_only"],
  le = e.picklist(on),
  an = [
    "url",
    "adapter",
    "dom",
    "screenshot",
    "user_action",
    "browser_event",
    "llm",
    "system",
  ],
  Ye = e.picklist(an),
  sn = [
    "person",
    "organization",
    "place",
    "resource",
    "collection",
    "content",
    "input",
    "file",
    "concept",
    "value",
    "unknown",
  ],
  cn = e.picklist(sn),
  ln = [
    "actor",
    "owner",
    "recipient",
    "participant",
    "container",
    "topic",
    "form",
    "control",
    "unknown",
  ],
  pn = e.fallback(e.picklist(ln), "unknown"),
  un = [
    "view",
    "open",
    "navigate",
    "scroll",
    "search",
    "filter",
    "compare",
    "compose",
    "send",
    "submit",
    "comment",
    "edit",
    "select",
    "configure",
    "cancel",
    "purchase",
    "download",
    "upload",
    "attach",
    "solve",
    "play",
    "click",
    "unknown",
  ],
  Be = e.picklist(un),
  mn = ["observed", "started", "updated", "attempted", "confirmed"],
  qe = e.picklist(mn),
  dn = e.picklist([
    "url",
    "surface",
    "profile",
    "thread",
    "resource",
    "query",
    "intent",
    "model",
  ]),
  fn = e.picklist(["surface", "entity", "operation", "relation", "state"]),
  He = e.picklist([
    "message_thread",
    "profile_resource",
    "search_results",
    "media_resource",
    "document_resource",
    "record_resource",
    "generic_page",
    "unknown_resource",
  ]),
  Qe = e.picklist([
    "passive_observation",
    "navigation",
    "draft_update",
    "submit",
    "high_value_click",
    "low_value_click",
    "unknown_action",
  ]),
  Xe = e.object({
    resourceClass: He,
    resourceSignature: e.pipe(e.string(), e.minLength(1), e.maxLength(120)),
    pageSignature: e.pipe(e.string(), e.minLength(1), e.maxLength(120)),
    actionClass: Qe,
    actionSignature: e.pipe(e.string(), e.minLength(1), e.maxLength(120)),
  }),
  gn = e.pipe(e.string(), e.minLength(1)),
  w = e.pipe(d, e.minValue(0), e.maxValue(1)),
  hn = e.pipe(d, e.minValue(0)),
  E = e.pipe(x, e.minValue(0)),
  pe = e.object({
    kind: cn,
    name: e.pipe(e.string(), e.minLength(1), e.maxLength(180)),
    typeLabel: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
    anchors: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
        e.maxLength(12),
      ),
      () => [],
    ),
    confidence: e.optional(w, 0.7),
  }),
  Je = e.strictObject({ role: pn, entity: pe }),
  Ze = e.strictObject({
    verb: Be,
    stage: qe,
    label: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
    textPreview: e.optional(
      e.pipe(e.string(), e.minLength(1), e.maxLength(240)),
    ),
    textLength: e.optional(E),
    confidence: e.optional(w, 0.7),
  }),
  yn = e.strictObject({
    kind: dn,
    value: e.pipe(e.string(), e.minLength(1), e.maxLength(180)),
    provider: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(80))),
    label: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(160))),
    confidence: e.optional(w, 0.7),
  }),
  et = e.object({
    evidenceId: e.pipe(e.string(), e.minLength(1), e.maxLength(160)),
    kind: fn,
    source: Ye,
    confidence: w,
    surface: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
    anchors: e.optional(e.pipe(e.array(yn), e.maxLength(12))),
    entity: e.optional(pe),
    relatedEntities: e.optional(e.pipe(e.array(Je), e.maxLength(12))),
    action: e.optional(Ze),
    description: e.optional(
      e.pipe(e.string(), e.minLength(1), e.maxLength(240)),
    ),
  }),
  An = e.strictObject({
    sources: e.pipe(e.array(Ye), e.minLength(1), e.maxLength(8)),
    confidence: w,
    confirmationSignals: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
        e.maxLength(12),
      ),
      () => [],
    ),
    notes: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(240))),
        e.maxLength(8),
      ),
      () => [],
    ),
    screenshotArtifactIds: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
        e.maxLength(4),
      ),
      () => [],
    ),
    sparseDom: e.optional(e.boolean(), !1),
  }),
  Y = e.object({
    frameId: e.pipe(e.string(), e.minLength(1), e.maxLength(120)),
    chunkId: gn,
    capturedAt: c,
    action: Ze,
    target: e.optional(pe),
    relatedEntities: e.optional(e.pipe(e.array(Je), e.maxLength(12)), () => []),
    anchors: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
        e.maxLength(24),
      ),
      () => [],
    ),
    surface: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
    evidence: An,
  }),
  ue = e.pipe(
    Ke,
    e.object({
      frameIds: e.optional(
        e.pipe(
          e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
          e.maxLength(80),
        ),
        () => [],
      ),
      badges: e.optional(
        e.pipe(
          e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
          e.maxLength(16),
        ),
        () => [],
      ),
      outcomeSafetyEvents: e.optional(
        e.pipe(
          e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
          e.maxLength(16),
        ),
        () => [],
      ),
    }),
  ),
  bn = e.strictObject({
    windowId: e.pipe(e.string(), e.minLength(1), e.maxLength(120)),
    title: e.pipe(e.string(), e.minLength(1), e.maxLength(160)),
    activityKind: I,
    status: ce,
    urlDomain: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
    updatedAt: c,
    decision: e.picklist(["accept", "reject", "needs_model"]),
    accepted: e.boolean(),
    score: d,
    confidence: w,
    support: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
        e.maxLength(16),
      ),
      () => [],
    ),
    blockers: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
        e.maxLength(16),
      ),
      () => [],
    ),
    selectedByDecisionId: e.optional(
      e.pipe(e.string(), e.minLength(1), e.maxLength(120)),
    ),
    selectedAction: e.optional(le),
    finalState: e.optional(e.picklist(["selected", "closed", "not_selected"])),
  }),
  tt = e.strictObject({
    eventId: e.pipe(e.string(), e.minLength(1), e.maxLength(160)),
    createdAt: e.optional(c),
    logicalDate: e.optional(e.pipe(e.string(), e.regex(/^\d{4}-\d{2}-\d{2}$/))),
    chunkId: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(160))),
    traceId: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(160))),
    phase: e.picklist([
      "capture_persistence",
      "screenshot_capture",
      "screenshot_attachment",
      "local_shortcut",
      "candidate_match",
      "model_path",
      "model_value",
      "grouping_response",
      "safety",
    ]),
    outcome: e.pipe(e.string(), e.minLength(1), e.maxLength(120)),
    reasonCodes: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
        e.maxLength(16),
      ),
      () => [],
    ),
    decisionId: e.optional(
      e.pipe(e.string(), e.minLength(1), e.maxLength(120)),
    ),
    windowId: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
    decisionAction: e.optional(le),
    triggerKind: e.optional(W),
    urlDomain: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
    resourceClass: e.optional(He),
    resourceSignature: e.optional(
      e.pipe(e.string(), e.minLength(1), e.maxLength(120)),
    ),
    pageSignature: e.optional(
      e.pipe(e.string(), e.minLength(1), e.maxLength(120)),
    ),
    actionClass: e.optional(Qe),
    actionSignature: e.optional(
      e.pipe(e.string(), e.minLength(1), e.maxLength(120)),
    ),
    source: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
    model: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
    llmCalled: e.optional(e.boolean()),
    inputTokens: e.optional(E),
    outputTokens: e.optional(E),
    costUsd: e.optional(hn),
    durationMs: e.optional(E),
    screenshotArtifactId: e.optional(
      e.pipe(e.string(), e.minLength(1), e.maxLength(160)),
    ),
    score: e.optional(d),
    confidence: e.optional(w),
    label: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
  }),
  nt = e.pipe(
    Ke,
    e.object({
      requestBytes: e.optional(E),
      newestCandidateFrame: e.optional(e.boolean()),
      acceptedFrameCount: e.optional(E),
      screenshotIncludedForModel: e.optional(e.boolean()),
      screenshotBase64Chars: e.optional(E),
      safetyEvents: e.optional(
        e.pipe(
          e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
          e.maxLength(24),
        ),
        () => [],
      ),
      rendererBadges: e.optional(
        e.pipe(
          e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
          e.maxLength(24),
        ),
        () => [],
      ),
      candidateEvaluations: e.optional(
        e.pipe(e.array(bn), e.maxLength(8)),
        () => [],
      ),
      decisionEvents: e.optional(
        e.pipe(e.array(tt), e.maxLength(32)),
        () => [],
      ),
    }),
  ),
  _n = 80,
  it = 12,
  rt = 16,
  ot = 12,
  at = 12,
  st = 7e5,
  me = 200,
  m = e.pipe(e.string(), e.minLength(1)),
  ct = e.pipe(d, e.minValue(0)),
  v = e.pipe(x, e.minValue(0)),
  ie = e.pipe(x, e.minValue(1)),
  lt = e.pipe(d, e.minValue(0), e.maxValue(1)),
  Ee = e.strictObject({
    blockId: m,
    tagName: m,
    text: e.pipe(e.string(), e.maxLength(1e3)),
    role: e.optional(e.string()),
    ariaLabel: e.optional(e.string()),
    href: e.optional(e.string()),
    inputType: e.optional(e.string()),
    contentEditable: e.optional(e.boolean()),
    bounds: e.optional(e.tuple([d, d, d, d])),
    selector: e.optional(e.string()),
    salience: lt,
  }),
  pt = e.strictObject({
    extractorVersion: m,
    title: e.pipe(e.string(), e.maxLength(300)),
    url: e.string(),
    headings: e.pipe(
      e.array(e.pipe(e.string(), e.maxLength(240))),
      e.maxLength(12),
    ),
    visibleText: e.pipe(e.array(Ee), e.maxLength(80)),
    interactive: e.pipe(e.array(Ee), e.maxLength(80)),
    viewport: e.strictObject({
      width: v,
      height: v,
      scrollY: ct,
      deviceScaleFactor: e.pipe(d, e.gtValue(0)),
    }),
  }),
  Ln = e.strictObject({
    adapterId: m,
    adapterVersion: m,
    surface: e.optional(m),
    label: m,
    confidence: lt,
    facts: We,
    semanticEvidence: e.optional(e.pipe(e.array(et), e.maxLength(16))),
  }),
  F = e.strictObject({
    artifactId: m,
    contentRef: m,
    contentHash: m,
    byteSize: v,
    width: ie,
    height: ie,
  }),
  ut = e.strictObject({
    kind: W,
    label: e.optional(e.pipe(e.string(), e.maxLength(300))),
    textPreview: e.optional(e.pipe(e.string(), e.maxLength(500))),
    textLength: e.optional(v),
    typingSessionId: e.optional(m),
    typingStartedAt: e.optional(c),
    typingCommittedAt: e.optional(c),
    typingDurationMs: e.optional(v),
    inputEventCount: e.optional(ie),
    initialTextLength: e.optional(v),
    finalTextLength: e.optional(v),
    beforeScreenshotAvailable: e.optional(e.boolean()),
    elementTag: e.optional(e.pipe(e.string(), e.maxLength(80))),
    elementRole: e.optional(e.pipe(e.string(), e.maxLength(120))),
    href: e.optional(e.pipe(e.string(), e.maxLength(1e3))),
    scrollY: e.optional(ct),
  }),
  Sn = e.strictObject({
    chunkId: m,
    logicalDate: e.pipe(e.string(), e.regex(/^\d{4}-\d{2}-\d{2}$/)),
    capturedAt: c,
    triggerKind: W,
    tabId: m,
    focused: e.boolean(),
    url: e.string(),
    urlDomain: e.string(),
    urlPath: e.string(),
    title: e.pipe(e.string(), e.maxLength(300)),
    appName: m,
    compactDom: pt,
    adapterHints: e.pipe(e.array(Ln), e.maxLength(_n)),
    beforeScreenshot: e.optional(F),
    screenshot: e.optional(F),
    userAction: e.optional(ut),
    signatures: e.optional(Xe),
    contentSignature: m,
    duplicateOfChunkId: e.optional(m),
  }),
  de = "qwen/qwen3-embedding-8b",
  B = 1536,
  xn = "openrouter",
  fe = "semantic_normalizer_v1",
  mt = "qwen3_document_v1",
  In = "qwen3_open_semantic_plain_query_v1",
  dt = "gia_activity_source_card_v1",
  q = "gia_activity_source_card_index_v1",
  ft = e.pipe(e.string(), e.minLength(1)),
  vn = e.pipe(d, e.minValue(0)),
  h = e.pipe(x, e.minValue(0)),
  j = e.pipe(x, e.minValue(1)),
  gt = e.pipe(d, e.minValue(0), e.maxValue(1)),
  En = e.picklist(["document", "open_semantic_query"]),
  Tn = e.strictObject({
    model: e.literal(de),
    dims: e.literal(B),
    provider: e.literal(xn),
    normalizerVersion: e.literal(fe),
    inputTemplateVersion: e.union([e.literal(mt), e.literal(In)]),
    indexVersion: e.literal(q),
  });
e.strictObject({
  texts: e.pipe(
    e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(6e3))),
    e.minLength(1),
    e.maxLength(64),
  ),
  inputType: En,
});
const Cn = e.strictObject({
    vectors: e.pipe(
      e.array(e.pipe(e.array(d), e.length(B))),
      e.minLength(1),
      e.maxLength(64),
    ),
    contract: Tn,
    latencyMs: e.optional(h),
  }),
  ge = e.picklist(["chunk", "frame", "window"]),
  wn = e.picklist(["draft", "attempted", "sent"]),
  ht = {
    sourceCardId: e.pipe(e.string(), e.minLength(1), e.maxLength(180)),
    cardType: ge,
    schemaVersion: e.literal(dt),
    indexVersion: e.literal(q),
    subjectId: e.pipe(e.string(), e.minLength(1), e.maxLength(180)),
    title: e.pipe(e.string(), e.minLength(1), e.maxLength(220)),
    summary: e.pipe(e.string(), e.minLength(1), e.maxLength(1400)),
    searchText: e.pipe(e.string(), e.minLength(1), e.maxLength(6e3)),
    logicalDate: e.pipe(e.string(), e.regex(/^\d{4}-\d{2}-\d{2}$/)),
    observedAt: c,
    updatedAt: c,
    url: e.optional(e.pipe(e.string(), e.maxLength(1200))),
    urlDomain: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
    activityKind: e.optional(I),
    actionVerb: e.optional(Be),
    actionStage: e.optional(qe),
    messageStatus: e.optional(wn),
    recipients: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
        e.maxLength(12),
      ),
    ),
    confidence: gt,
    chunkIds: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
        e.maxLength(200),
      ),
      () => [],
    ),
    frameIds: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
        e.maxLength(80),
      ),
      () => [],
    ),
    windowId: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
    screenshotArtifactIds: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
        e.maxLength(16),
      ),
      () => [],
    ),
    evidenceLabels: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
        e.maxLength(24),
      ),
      () => [],
    ),
  },
  yt = e.strictObject(ht),
  At = e.strictObject({ ...ht, cardType: e.literal("window") }),
  Rn = e.picklist(["fts", "embedding"]),
  Gn = e.strictObject({
    query: e.pipe(e.string(), e.minLength(1), e.maxLength(500)),
    limit: e.optional(e.pipe(j, e.maxValue(50)), 12),
    fromIso: e.optional(c),
    toIso: e.optional(c),
    urlDomain: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
    activityKind: e.optional(I),
    cardTypes: e.optional(e.pipe(e.array(ge), e.maxLength(3))),
    includeScreenshots: e.optional(e.boolean(), !1),
  }),
  bt = e.strictObject({
    chunkIds: e.pipe(
      e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
      e.maxLength(200),
    ),
    frameIds: e.pipe(
      e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
      e.maxLength(80),
    ),
    windowId: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
    screenshotArtifactIds: e.pipe(
      e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
      e.maxLength(16),
    ),
  }),
  $n = e.strictObject({
    mode: e.literal("timeline"),
    fromIso: c,
    toIso: c,
    limit: e.optional(e.pipe(j, e.maxValue(50)), 24),
    urlDomain: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
    activityKind: e.optional(I),
    includeScreenshots: e.optional(e.boolean(), !1),
  }),
  Nn = e.strictObject({
    sourceCard: yt,
    score: vn,
    matchSources: e.pipe(e.array(Rn), e.minLength(1), e.maxLength(2)),
    ftsRank: e.optional(j),
    embeddingRank: e.optional(j),
    vectorSimilarity: e.optional(gt),
    evidence: bt,
    screenshotArtifacts: e.optional(e.pipe(e.array(F), e.maxLength(16))),
  }),
  _t = e.strictObject({
    sourceCardCount: h,
    embeddedSourceCardCount: h,
    pendingEmbeddingJobCount: h,
    failedEmbeddingJobCount: h,
    abandonedEmbeddingJobCount: e.optional(h),
    embeddingModel: e.literal(de),
    embeddingDims: e.literal(B),
    normalizerVersion: e.literal(fe),
    indexVersion: e.literal(q),
    semanticIndexBackend: e.optional(e.picklist(["sqlite_vec", "exact_js"])),
    semanticIndexVersion: e.optional(
      e.pipe(e.string(), e.minLength(1), e.maxLength(80)),
    ),
    semanticVectorIndexedCount: e.optional(h),
    semanticVectorRetainedCount: e.optional(h),
    lastSemanticIndexError: e.optional(e.pipe(e.string(), e.maxLength(300))),
    lastEmbeddingError: e.optional(e.pipe(e.string(), e.maxLength(300))),
  }),
  U = e.object({
    inRangeCaptureCount: h,
    totalCaptureCount: h,
    firstInRangeCaptureIso: e.nullable(c),
    lastInRangeCaptureIso: e.nullable(c),
  }),
  Lt = e.variant("rangeKind", [
    e.strictObject({
      ...U.entries,
      rangeKind: e.literal("all"),
      nearestBeforeIso: e.null(),
      nearestAfterIso: e.null(),
    }),
    e.strictObject({
      ...U.entries,
      rangeKind: e.literal("after"),
      fromIso: c,
      nearestBeforeIso: e.nullable(c),
      nearestAfterIso: e.null(),
    }),
    e.strictObject({
      ...U.entries,
      rangeKind: e.literal("before"),
      toIso: c,
      nearestBeforeIso: e.null(),
      nearestAfterIso: e.nullable(c),
    }),
    e.strictObject({
      ...U.entries,
      rangeKind: e.literal("between"),
      fromIso: c,
      toIso: c,
      nearestBeforeIso: e.nullable(c),
      nearestAfterIso: e.nullable(c),
    }),
  ]),
  On = e.strictObject({
    matchingWindowCount: h,
    returnedWindowCount: h,
    truncated: e.boolean(),
    latestWindowUpdatedAt: e.nullable(c),
  }),
  Dn = e.strictObject({
    sourceCard: At,
    evidence: bt,
    screenshotArtifacts: e.optional(e.pipe(e.array(F), e.maxLength(16))),
  }),
  zn = e.strictObject({
    profileId: ft,
    generatedAt: c,
    fromIso: c,
    toIso: c,
    results: e.pipe(e.array(Dn), e.maxLength(50)),
    readiness: _t,
    coverage: Lt,
    summary: On,
    embeddingUsed: e.literal(!1),
    fallbackReason: e.optional(
      e.pipe(e.string(), e.minLength(1), e.maxLength(160)),
    ),
  }),
  Pn = e.strictObject({
    profileId: ft,
    generatedAt: c,
    query: e.pipe(e.string(), e.minLength(1), e.maxLength(500)),
    results: e.pipe(e.array(Nn), e.maxLength(50)),
    readiness: _t,
    coverage: Lt,
    embeddingUsed: e.boolean(),
    fallbackReason: e.optional(
      e.pipe(e.string(), e.minLength(1), e.maxLength(160)),
    ),
  }),
  Un = e.strictObject({
    sourceCardId: e.pipe(e.string(), e.minLength(1), e.maxLength(180)),
    includeScreenshots: e.optional(e.boolean(), !1),
  }),
  Mn =
    /[\u{00AD}\u{200B}-\u{200F}\u{202A}-\u{202E}\u{2060}-\u{2064}\u{2066}-\u{2069}\u{206A}-\u{206F}\u{FEFF}]/gu,
  Fn =
    /[\u{0000}-\u{0008}\u{000B}\u{000C}\u{000E}-\u{001F}\u{007F}-\u{009F}]/gu;
function jn(t) {
  return typeof t != "string"
    ? ""
    : t
        .normalize("NFC")
        .replace(Mn, "")
        .replace(Fn, " ")
        .replace(/ {2,}/g, " ")
        .trim();
}
const Vn = 120,
  Te = 180,
  Kn = new Set([
    "conversation list",
    "linkedin",
    "linkedin messaging",
    "linkedin profile",
    "message",
    "message composer",
    "messaging",
    "notifications",
    "profile",
    "search",
    "send",
    "submit",
    "type a message",
    "view profile",
    "write a message",
  ]);
function y(t, n = Vn) {
  const i = qn(t.replace(/\s+/g, " ").trim());
  return !i || Bn(i)
    ? null
    : i.length <= n
      ? i
      : `${i.slice(0, n - 3).trimEnd()}...`;
}
function he(t) {
  const n = t.replace(/\s+/g, " ").trim();
  if (!n) return !0;
  const r = n
    .toLowerCase()
    .normalize("NFD")
    .replace(new RegExp("\\p{Diacritic}", "gu"), "");
  return (
    /\b(?:threadid|thread|url|path|domain|surface)\s*:/i.test(n) ||
    /\b(?:\d+|zero|no)\s+(?:unread\s+)?notifications?(?:\s+total)?\b/i.test(
      n,
    ) ||
    /\b(?:\d+|zero|no)\s+(?:unread\s+)?(?:powiadomien|powiadomienia)(?:\s+total)?\b/i.test(
      r,
    ) ||
    /\b(?:try|wyprobuj)\s+premium\b/i.test(r)
  );
}
function ye(t) {
  const n = t.replace(/\s+/g, " ").trim();
  return n ? (n.length <= Te ? n : n.slice(0, Te)) : null;
}
function T(t) {
  const n = t.trim();
  if (!n || n === "/") return "/";
  const i = n.replace(/^\/+(https?:\/\/)/i, "$1");
  if (/^https?:\/\//i.test(i))
    try {
      return T(new URL(i).pathname);
    } catch {}
  const r = i.replace(/^\/+/, "");
  if (/^(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:\/|$)/i.test(r)) {
    const s = r.indexOf("/");
    return s === -1 ? "/" : T(r.slice(s));
  }
  const o = i.split(/[?#]/)[0] ?? i;
  return (o.startsWith("/") ? o : `/${o}`).replace(/\/+$/, "") || "/";
}
function V(t) {
  const n = t.trim();
  if (!n) return null;
  try {
    const i = n.startsWith("http") ? new URL(n) : new URL(`https://${n}`);
    ((i.hash = ""), (i.search = ""));
    const r = i.hostname.replace(/^www\./, "").toLowerCase(),
      o = T(i.pathname);
    return `${r}${o === "/" ? "" : o}`;
  } catch {
    return n
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .split(/[?#]/)[0]
      .replace(/\/+$/, "");
  }
}
function K(t, n) {
  const i = t.replace(/\s+/g, "").trim().toLowerCase();
  if (!i) return null;
  const r = T(n || "/");
  return ye(`url:${i}${r}`);
}
function kn(t) {
  return t.startsWith("surface:");
}
function Wn(t) {
  const n = t.trim().toLowerCase();
  return !n || kn(n) || n.startsWith("intent:") ? !1 : !Yn(n);
}
function Yn(t) {
  const n = t.trim().toLowerCase();
  return n.startsWith("url:")
    ? Ce(we(n))
    : n.startsWith("resource:url:")
      ? !n.includes("?") && Ce(we(n))
      : !1;
}
function Ce(t) {
  const n = T(t);
  return (
    n === "/" ||
    n === "/search" ||
    n === "/results" ||
    n === "/watch" ||
    n === "/feed" ||
    n === "/home"
  );
}
function Bn(t) {
  const n = t.toLowerCase(),
    i = n.normalize("NFD").replace(new RegExp("\\p{Diacritic}", "gu"), "");
  return Kn.has(n) ||
    he(t) ||
    /^(?:threadid|thread|url|path|domain|surface)\s*:/i.test(t) ||
    /^(?:\d+|zero|no)\s+(?:unread\s+)?notifications?(?:\s+total)?$/i.test(t) ||
    /^(?:\d+|zero|no)\s+(?:unread\s+)?(?:powiadomien|powiadomienia)(?:\s+total)?$/i.test(
      i,
    ) ||
    /^\d+\s+(?:endorsements?|followers?|connections?)$/i.test(t) ||
    /^(?:try|wyprobuj)\s+premium\b/i.test(i) ||
    /^show all\b/i.test(t) ||
    /^[\d\s.,]+$/.test(t)
    ? !0
    : Hn(t);
}
function qn(t) {
  return t
    .replace(/^messaging\s+with\s+/i, "")
    .replace(/^message\s+thread\s+with\s+/i, "")
    .trim();
}
function Hn(t) {
  return t.startsWith("/") || /^[a-z][a-z0-9+.-]*:\/\//i.test(t)
    ? !0
    : /^[a-z0-9][a-z0-9.-]*\.[a-z]{2,}(?:\/.*)?$/i.test(t);
}
function we(t) {
  const n = t.replace(/^(?:resource:)?url:/, "");
  try {
    return new URL(`https://${n}`).pathname;
  } catch {
    const i = n.indexOf("/");
    return i < 0 ? "/" : (n.slice(i).split(/[?#]/)[0] ?? "/");
  }
}
const Qn =
    /(?:^|[_-])(?:access[_-]?token|id[_-]?token|refresh[_-]?token|token|auth|authorization|bearer|jwt|secret|client[_-]?secret|password|pass|passwd|pwd|credential|signature|sig|session|sessionid|session[_-]?id|code|state|saml|assertion|ticket|api[_-]?key|apikey|key)(?:$|[_-])/i,
  Xn = new Set([
    "fbclid",
    "gclid",
    "igshid",
    "mc_cid",
    "mc_eid",
    "msclkid",
    "ref",
    "ref_src",
    "spm",
    "utm_campaign",
    "utm_content",
    "utm_medium",
    "utm_source",
    "utm_term",
  ]),
  Jn = /^(?:x-amz-|x-goog-|x-ms-|awsaccesskeyid$)/i,
  Zn =
    /^(?:utm_|_hs|hsa_|vero_|pk_|sc_|yclid|ga_|mkt_tok|session|sid|cache|timestamp|ts$)/i,
  ei = /^eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
  ti = /^[A-Za-z0-9+/=_-]{48,}$/,
  ni = /^[a-f0-9]{48,}$/i,
  ii = /^(?:[a-z0-9]+-){3,}[a-z0-9]+$/;
function z(t) {
  const n = se(t);
  if (!n.ok) return n;
  const i = new URL(n.normalized);
  return (
    (i.hash = ""),
    (i.search = si(i.searchParams)),
    (i.pathname = oi(i.pathname)),
    { ok: !0, url: i.href, hostname: i.hostname, pathname: i.pathname || "/" }
  );
}
const ri = "~redacted~";
function oi(t) {
  if (!t || t === "/") return t;
  let n = !1;
  const i = t
    .split("/")
    .map((r) => (!r || ai(r) || !St(r) ? r : ((n = !0), ri)));
  return n ? i.join("/") : t;
}
function ai(t) {
  return ii.test(xt(t));
}
function si(t) {
  const n = new URLSearchParams();
  for (const [i, r] of t.entries()) Ae(i, r) || n.append(i, r);
  return n.toString();
}
function Ae(t, n) {
  const i = t.trim().toLowerCase();
  return i ? Qn.test(i) || Xn.has(i) || Jn.test(i) || Zn.test(i) || St(n) : !0;
}
function St(t) {
  const n = xt(t).trim();
  return n.length < 48 || /\s/.test(n)
    ? !1
    : ei.test(n) || ni.test(n) || ti.test(n);
}
function xt(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}
function H(t) {
  const n = gi(t);
  return n ? `resource:url:${n}` : null;
}
function ci(t) {
  const n = wt(t.pageContext?.activityAnchors ?? []),
    i = D([It(n), vt(n, t.urlPath), H(t.url)].filter((a) => !!a).map(Rt), 12),
    r = i.filter((a) => Et(a, Re(t, n))),
    o = n.filter((a) => a.startsWith("url:"));
  return {
    resourceClass: Re(t, n),
    exactAnchors: i,
    broadAnchors: o,
    conflictAnchors: r,
    highCardinalitySurface: Tt(t.urlPath),
    confidence: i.length > 0 ? 0.86 : 0.42,
  };
}
function li(t) {
  const n = wt(t.activityAnchors ?? []),
    i = Gt(t.urlPatterns),
    r = yi(t, n),
    o = D(
      [
        It(n),
        Ai(n, i),
        ...n.filter((l) => l.startsWith("resource:")),
        ...bi(t, i),
      ]
        .filter((l) => !!l)
        .map(Rt),
      16,
    ),
    a = o.filter((l) => Et(l, r)),
    s = D([...n.filter((l) => l.startsWith("url:")), ..._i(t, i)], 16);
  return {
    resourceClass: r,
    exactAnchors: o,
    broadAnchors: s,
    conflictAnchors: a,
    highCardinalitySurface: i.some(Tt),
    confidence: o.length > 0 ? 0.78 : 0.38,
  };
}
function pi(t, n) {
  return Q(t.exactAnchors, n.exactAnchors);
}
function ui(t, n) {
  return Q(t.broadAnchors, n.broadAnchors);
}
function mi(t, n) {
  return t.conflictAnchors.length === 0 ||
    n.conflictAnchors.length === 0 ||
    !(t.resourceClass === n.resourceClass)
    ? !1
    : !Q(t.conflictAnchors, n.conflictAnchors);
}
function di(t, n) {
  if (
    t.resourceClass !== "search_results" ||
    n.resourceClass !== "search_results"
  )
    return !1;
  const i = Ge(t.exactAnchors),
    r = Ge(n.exactAnchors);
  return i.length === 0 || r.length === 0 ? !1 : !Q(i, r);
}
function fi(t) {
  return (
    t === "profile_resource" ||
    t === "message_thread" ||
    t === "media_resource" ||
    t === "document_resource" ||
    t === "record_resource"
  );
}
function gi(t) {
  try {
    const n = new URL(t),
      i = n.hostname.replace(/^www\./i, "").toLowerCase();
    if (!i) return null;
    const r = R(n.pathname),
      o = hi(n.searchParams);
    return o ? `${i}${r}?${o}` : `${i}${r}`;
  } catch {
    return null;
  }
}
function hi(t) {
  const n = [];
  for (const [i, r] of t.entries()) {
    const o = i.trim().toLowerCase(),
      a = r.trim();
    !o ||
      !a ||
      Ae(o, a) ||
      n.push(`${encodeURIComponent(o)}=${encodeURIComponent(a)}`);
  }
  return n.sort().join("&");
}
function Re(t, n) {
  if (n.some((r) => r.startsWith("thread:"))) return "message_thread";
  if (vt(n, t.urlPath)) return "profile_resource";
  const i = R(t.urlPath);
  return i.startsWith("/messaging")
    ? "message_thread"
    : i === "/search" || i.endsWith("/search")
      ? "search_results"
      : t.signatures?.resourceClass === "media_resource" || be(i)
        ? "media_resource"
        : /\b(documents?|docs?|files?)\b/i.test(i)
          ? "document_resource"
          : /\b(records?|accounts?|customers?|contacts?)\b/i.test(i)
            ? "record_resource"
            : "generic_page";
}
function yi(t, n) {
  if (n.some((r) => r.startsWith("thread:"))) return "message_thread";
  if (t.activityKind === "profile_view") return "profile_resource";
  if (
    t.activityKind === "message_composition" ||
    t.activityKind === "message_send_attempt"
  )
    return "message_thread";
  const i = Gt(t.urlPatterns);
  return i.some((r) => r === "/search" || r.endsWith("/search"))
    ? "search_results"
    : i.some(be) || Li(n)
      ? "media_resource"
      : i.some((r) => /\b(documents?|docs?|files?)\b/i.test(r))
        ? "document_resource"
        : i.some((r) =>
              /\b(records?|accounts?|customers?|contacts?)\b/i.test(r),
            )
          ? "record_resource"
          : "generic_page";
}
function It(t) {
  const n = t.find((i) => i.startsWith("thread:"));
  return n ? `resource:${n}` : null;
}
function vt(t, n) {
  const i = R(n);
  for (const r of t) {
    if (!r.startsWith("profile:")) continue;
    const o = Ct(r);
    if (o && o === i) return `resource:${r}`;
  }
  return null;
}
function Ai(t, n) {
  for (const i of t) {
    if (!i.startsWith("profile:")) continue;
    const r = Ct(i);
    if (r && n.includes(r)) return `resource:${i}`;
  }
  return null;
}
function bi(t, n) {
  const i = t.urlDomain?.replace(/^www\./i, "").toLowerCase();
  return i ? n.map((r) => `resource:url:${i}${r}`) : [];
}
function _i(t, n) {
  const i = t.urlDomain?.toLowerCase();
  return i ? n.map((r) => `url:${i}${r}`) : [];
}
function Et(t, n) {
  return n === "profile_resource"
    ? t.startsWith("resource:profile:")
    : n === "message_thread"
      ? t.startsWith("resource:thread:")
      : n === "media_resource" ||
          n === "document_resource" ||
          n === "record_resource"
        ? t.startsWith("resource:url:")
        : !1;
}
function Li(t) {
  return t.some((n) => (n.startsWith("resource:url:") ? be(Si(n)) : !1));
}
function Si(t) {
  try {
    const n = t.replace(/^resource:url:/, "");
    return new URL(`https://${n}`).pathname;
  } catch {
    const n = t.indexOf("/");
    return n < 0 ? "" : (t.slice(n).split("?")[0] ?? "");
  }
}
function be(t) {
  const n = R(t);
  return (
    n === "/watch" ||
    n === "/video" ||
    n === "/videos" ||
    n === "/player" ||
    n.endsWith("/watch") ||
    n.endsWith("/video") ||
    n.endsWith("/videos") ||
    n.endsWith("/player")
  );
}
function Tt(t) {
  const n = R(t);
  return (
    n === "/" ||
    n === "/search" ||
    n === "/watch" ||
    n === "/results" ||
    n === "/feed" ||
    n === "/home"
  );
}
function Ct(t) {
  const n = /profile:[^/]+(\/in\/[^/]+)/.exec(t);
  return n?.[1] ? R(n[1]) : null;
}
function wt(t) {
  return D(
    t.map((n) => n.trim().toLowerCase()).filter((n) => n.length > 0),
    32,
  );
}
function Rt(t) {
  return t.trim().toLowerCase();
}
function Gt(t) {
  return D(t.map(R), 20);
}
function R(t) {
  return T(t);
}
function Q(t, n) {
  if (t.length === 0 || n.length === 0) return !1;
  const i = new Set(n);
  return t.some((r) => i.has(r));
}
function Ge(t) {
  return t.filter((n) => n.startsWith("resource:url:") && n.includes("?"));
}
function D(t, n) {
  const i = [],
    r = new Set();
  for (const o of t)
    if (!r.has(o) && (r.add(o), i.push(o), i.length >= n)) break;
  return i;
}
const xi = 4;
function Ii(t, n = xi) {
  return (t ?? []).slice(0, Math.max(0, Math.floor(n)));
}
function $t(t) {
  const n = [];
  t.entity && $e(n, t.entity.name);
  for (const i of t.relatedEntities ?? []) Ri(i.role) && $e(n, i.entity.name);
  return Le(n, 12);
}
function Nt(t) {
  const n = [];
  for (const i of t.anchors ?? []) {
    const r = Ti(i);
    r && n.push(r);
  }
  t.entity && n.push(...t.entity.anchors);
  for (const i of t.relatedEntities ?? []) n.push(...i.entity.anchors);
  return Le(n, 24);
}
function vi(t, n) {
  for (const i of t) {
    const r = i.relatedEntities?.find((o) => o.role === "recipient")?.entity;
    if (
      r &&
      (n.actionVerb === "send" ||
        n.actionVerb === "compose" ||
        n.actionVerb === "click")
    )
      return Ne(r, n.fallbackAnchors);
    if (i.kind === "entity" && i.entity) return Ne(i.entity, n.fallbackAnchors);
  }
}
function Ei(t) {
  const n = [];
  for (const i of t) {
    for (const r of i.relatedEntities ?? []) Oe(n, r);
    i.kind === "entity" &&
      i.entity &&
      (i.relatedEntities ?? []).length === 0 &&
      Oe(n, { role: "participant", entity: i.entity });
  }
  return n;
}
function _e(t) {
  if (t.action?.stage === "confirmed")
    return t.action.verb === "send"
      ? "adapter:sent_message_confirmed"
      : t.action.verb === "comment"
        ? "adapter:comment_confirmed"
        : t.action.verb === "submit"
          ? "adapter:submit_confirmed"
          : `adapter:${t.action.verb}_confirmed`;
}
function Ot(t) {
  return [
    t.kind,
    t.surface ?? "",
    t.action?.verb ?? "",
    t.action?.stage ?? "",
    t.entity?.name ?? "",
    ...(t.relatedEntities ?? []).map((n) => n.entity.name),
    t.description ?? "",
  ]
    .filter((n) => n.length > 0)
    .join(" ");
}
function Ti(t) {
  if (Ci(t.value)) return t.value;
  if (t.kind === "url" || t.kind === "resource") {
    const n = V(t.value);
    return n ? `url:${n}` : null;
  }
  if (t.kind === "profile") {
    const n = V(t.value);
    return n ? `profile:${n}` : null;
  }
  if (t.kind === "thread") {
    const n = t.value.replace(/\s+/g, " ").trim();
    return n ? `thread:${n}` : null;
  }
  if (t.kind === "surface") {
    const n = ne(t.value);
    return n ? `surface:${n}` : null;
  }
  if (t.kind === "intent") {
    const n = ne(t.value);
    return n ? `intent:${n}` : null;
  }
  if (t.kind === "query") {
    const n = wi(t.value);
    return n ? `query:${n}` : null;
  }
  if (t.kind === "model") {
    const n = ne(t.value);
    return n ? `model:${n}` : null;
  }
  return null;
}
function Ci(t) {
  return /^(?:url|surface|profile|thread|query|intent|model):/i.test(t.trim());
}
function ne(t) {
  return (
    t
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "") || null
  );
}
function wi(t) {
  return (
    t
      .toLowerCase()
      .replace(/[^a-z0-9.+-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim() || null
  );
}
function Ri(t) {
  return (
    t === "recipient" || t === "participant" || t === "actor" || t === "owner"
  );
}
function $e(t, n) {
  const i = y(n, 160);
  i && t.push(i);
}
function Ne(t, n) {
  return { ...t, anchors: Le([...t.anchors, ...n], 12) };
}
function Oe(t, n) {
  t.some((i) => i.role === n.role && i.entity.name === n.entity.name) ||
    t.push(n);
}
function Le(t, n) {
  const i = [],
    r = new Set();
  for (const o of t) {
    const a = o.replace(/\s+/g, " ").trim().slice(0, 180);
    if (!a) continue;
    const s = a.toLowerCase();
    if (!r.has(s) && (r.add(s), i.push(a), i.length >= n)) break;
  }
  return i;
}
function C(t, n) {
  const i = [],
    r = new Set();
  for (const o of t) {
    const a = _(o, 180);
    if (!a) continue;
    const s = a.toLowerCase();
    if (!r.has(s) && (r.add(s), i.push(a), i.length >= n)) break;
  }
  return i;
}
function Gi(t) {
  return t.length > 0 ? t[t.length - 1] : void 0;
}
function _(t, n) {
  return t.replace(/\s+/g, " ").trim().slice(0, n);
}
function $i(t) {
  return _(t, 160) || "Browser activity";
}
function Ni(t) {
  return t.length > 0 ? `${t[0]?.toUpperCase() ?? ""}${t.slice(1)}` : t;
}
const L = 180,
  Dt = 24,
  Oi = 20,
  zt = new Set([
    "send",
    "submit",
    "comment",
    "configure",
    "cancel",
    "purchase",
    "download",
    "upload",
    "attach",
  ]);
function Pt(t) {
  const n = [
    K(t.urlDomain, t.urlPath || "/"),
    ...(t.pageContext?.activityAnchors ?? []),
  ]
    .filter((i) => !!i)
    .map((i) => ye(i))
    .filter((i) => !!i);
  return C(n, Dt);
}
function Di(t) {
  const n = [];
  for (const i of t.pageContext?.contextSignals ?? []) {
    const r = /^hint:[^:]+:(.+)$/.exec(i);
    r?.[1] && n.push(r[1]);
  }
  return C(
    n.map((i) => _(i, 180)).filter((i) => !!i),
    8,
  );
}
function X(t) {
  const n = [...(t.pageContext?.contextSignals ?? [])].filter((i) =>
    /confirmed|created|success|receipt|completed|sent/i.test(i),
  );
  for (const i of J(t)) {
    const r = _e(i);
    r && n.push(r);
  }
  for (const i of t.adapterHints)
    (i.facts.sentMessageConfirmed === !0 &&
      n.push("adapter:sent_message_confirmed"),
      i.facts.commentConfirmed === !0 && n.push("adapter:comment_confirmed"),
      i.facts.submitConfirmed === !0 && n.push("adapter:submit_confirmed"));
  return C(n, 12);
}
function zi(t) {
  const n = [
    t.pageContext?.actionSummary,
    t.pageContext?.semanticSummary,
    t.screenshot ? "screenshot available for visual reasoning" : "",
  ].filter((i) => !!i);
  return C(
    n.map((i) => _(i, 240)),
    8,
  );
}
function Pi(t) {
  let n = 0.55;
  return (
    t.adapterHints.length > 0 && (n += 0.12),
    t.pageContext?.keyEntities.length && (n += 0.1),
    t.screenshot && (n += 0.1),
    t.pageContext?.contextSignals.includes("capture_sparse_dom") && (n -= 0.18),
    X(t).length > 0 && (n += 0.16),
    Math.max(0.25, Math.min(n, 0.95))
  );
}
function S(t, n) {
  for (const i of t.adapterHints) {
    const r = i.facts[n];
    if (typeof r == "string" && r.trim().length > 0) return r.trim();
  }
}
function Ut(t) {
  try {
    const n = new URL(t);
    return n.searchParams.get("q") ?? n.searchParams.get("query") ?? void 0;
  } catch {
    return;
  }
}
function Se(t) {
  const n = k(t);
  if (/\bsubscription\b|\bbilling\b/i.test(n)) return "subscription";
  if (/\bpuzzles?\b|\bgames?\b|\bboard\b|\bcanvas\b/i.test(n))
    return "visual activity";
  if (/\bthread\b|\bmessaging\b/i.test(n)) return "message thread";
  if (/\bprofile\b/i.test(n)) return "profile";
}
function k(t) {
  return [
    t.urlDomain,
    t.urlPath,
    t.title,
    t.pageContext?.surface ?? "",
    t.pageContext?.semanticSummary ?? "",
    t.pageContext?.actionSummary ?? "",
    ...(t.pageContext?.contextSignals ?? []),
    ...t.adapterHints.map((n) => `${n.surface ?? ""} ${n.label}`),
    ...J(t).map(Ot),
  ].join(" ");
}
function J(t) {
  return t.adapterHints.flatMap((n) => n.semanticEvidence ?? []);
}
function Ui(t) {
  const n = k(t);
  return /\bmessaging\b|\bmessage_composer\b|\bmessage composer\b|\bthread\b/.test(
    n.toLowerCase(),
  );
}
function Mi(t) {
  const n = t.userAction?.label,
    i = t.userAction?.textPreview,
    r = [t.triggerKind, n, t.userAction?.elementRole, i]
      .filter(Boolean)
      .join(" ")
      .toLowerCase(),
    o = Fi(t, r);
  return {
    verb: o,
    stage: ji(t, o),
    ...(n ? { label: _(n, 180) } : {}),
    ...(i ? { textPreview: _(i, 240) } : {}),
    ...(t.userAction?.textLength !== void 0
      ? { textLength: t.userAction.textLength }
      : {}),
    confidence: Vi(t, o),
  };
}
function Fi(t, n) {
  return /\bsend\b/.test(n) ||
    (X(t).some((i) => /sent_message|message_sent|sent/i.test(i)) &&
      /\bmessaging\b|\bmessage\b/i.test(k(t)))
    ? "send"
    : /\bsubmit\b|\bcreate ticket\b/.test(n)
      ? "submit"
      : /\bcomment\b|\breply\b|\bpost\b/.test(n)
        ? "comment"
        : /\bcancel\b/.test(n)
          ? "cancel"
          : /\bpurchase\b|\bbuy\b|\bcheckout\b|\bpay\b/.test(n)
            ? "purchase"
            : /\bdownload\b/.test(n)
              ? "download"
              : /\bupload\b/.test(n)
                ? "upload"
                : /\battach\b/.test(n)
                  ? "attach"
                  : /\bsearch\b/.test(n) || t.urlPath === "/search"
                    ? "search"
                    : /\bfilter\b/.test(n)
                      ? "filter"
                      : /\bcompare\b|\bcomparison\b/.test(k(t))
                        ? "compare"
                        : t.triggerKind === "input_commit"
                          ? "compose"
                          : t.triggerKind === "scroll"
                            ? "scroll"
                            : t.triggerKind === "route_navigation"
                              ? "navigate"
                              : t.triggerKind === "click"
                                ? "click"
                                : t.triggerKind === "form_submit" ||
                                    t.triggerKind === "keyboard_submit"
                                  ? "submit"
                                  : "view";
}
function ji(t, n) {
  return X(t).length > 0
    ? "confirmed"
    : zt.has(n)
      ? "attempted"
      : t.triggerKind === "input_commit"
        ? "updated"
        : t.triggerKind === "route_navigation" || t.triggerKind === "scroll"
          ? "observed"
          : "updated";
}
function Vi(t, n) {
  return n === "send" || n === "submit" || n === "comment"
    ? t.userAction
      ? 0.78
      : 0.64
    : t.userAction
      ? 0.72
      : 0.58;
}
function Ki(t, n, i) {
  const r = Hi(t, n, i);
  if (r) return r;
  if (Ui(t) && (n === "send" || n === "compose" || n === "click")) return;
  const o = ki(t, n);
  if (o) return o;
  const a = S(t, "searchQuery") ?? Ut(t.url);
  if (a && (n === "search" || n === "filter" || n === "compare"))
    return A("input", a, {
      typeLabel: "search query",
      anchors: i.filter((l) => l.startsWith("query:")),
      confidence: 0.76,
    });
  const s = y(t.title, L);
  if (s && !he(s))
    return A("resource", s, {
      typeLabel: Se(t),
      anchors: i.slice(0, 6),
      confidence: 0.55,
    });
}
function ki(t, n) {
  if (n !== "click" || !t.userAction?.href) return;
  let i, r;
  try {
    ((i = new URL(t.userAction.href)), (r = new URL(t.url)));
  } catch {
    return;
  }
  if (Yi(i, r)) return;
  const o = y(t.userAction.label ?? Wi(i.pathname) ?? "", L),
    a = y(`${i.hostname.replace(/^www\./i, "")}${i.pathname}`, L),
    s = o ?? a;
  if (s)
    return A("resource", s, {
      typeLabel: Se(t),
      anchors: Bi(i),
      confidence: 0.74,
    });
}
function Wi(t) {
  const n = t.split("/").filter(Boolean);
  return n[n.length - 1] ?? null;
}
function Yi(t, n) {
  return (
    t.hostname.replace(/^www\./i, "").toLowerCase() ===
      n.hostname.replace(/^www\./i, "").toLowerCase() &&
    t.pathname.replace(/\/+$/, "") === n.pathname.replace(/\/+$/, "")
  );
}
function Bi(t) {
  return [K(t.hostname, t.pathname || "/"), H(t.href)].filter((n) => !!n);
}
function qi(t, n) {
  const i = [];
  for (const a of Ei(J(t))) N(i, a.role, a.entity);
  (N(i, "recipient", De(t, "recipientName")),
    N(i, "participant", De(t, "profileName")));
  const r = S(t, "threadId");
  r &&
    N(
      i,
      "container",
      A("resource", `Thread ${r}`, {
        typeLabel: "message thread",
        anchors: [`thread:${r}`],
        confidence: 0.82,
      }),
    );
  const o = S(t, "searchQuery") ?? Ut(t.url);
  return (
    o &&
      N(
        i,
        "topic",
        A("input", o, {
          typeLabel: "search query",
          anchors: [`query:${_(o.toLowerCase(), 120)}`],
          confidence: 0.76,
        }),
      ),
    n ? i.filter((a) => a.entity.name !== n.name) : i
  );
}
function Hi(t, n, i) {
  const r = vi(J(t), { actionVerb: n, fallbackAnchors: i });
  if (r) return r;
  const o = S(t, "recipientName");
  if (o) {
    const u = y(o, L);
    if (u)
      return A("person", u, {
        anchors: i.filter((f) => f.startsWith("profile:")).slice(0, 4),
        confidence: 0.88,
      });
  }
  const a = S(t, "profileName");
  if (a) {
    const u = y(a, L);
    if (u)
      return A("person", u, {
        anchors: i.filter((f) => f.startsWith("profile:")).slice(0, 4),
        typeLabel: "profile",
        confidence: 0.86,
      });
  }
  const s = S(t, "recordTitle");
  if (s) {
    const u = y(s, L);
    if (u)
      return A("resource", u, {
        typeLabel: Se(t),
        anchors: i.slice(0, 8),
        confidence: 0.78,
      });
  }
  const l = S(t, "threadTitle");
  if (l && (n === "send" || n === "compose")) {
    const u = y(l, L);
    if (u)
      return A("resource", u, {
        typeLabel: "message thread",
        anchors: i.filter((f) => f.startsWith("thread:")).slice(0, 4),
        confidence: 0.68,
      });
  }
}
function N(t, n, i) {
  i &&
    (t.some((r) => r.role === n && r.entity.name === i.name) ||
      t.push({ role: n, entity: i }));
}
function De(t, n) {
  const i = S(t, n);
  if (!i) return;
  const r = y(i, L);
  if (r)
    return A("person", r, {
      anchors: Pt(t)
        .filter((o) => o.startsWith("profile:"))
        .slice(0, 4),
      confidence: n === "recipientName" ? 0.88 : 0.84,
    });
}
function A(t, n, i = {}) {
  return {
    kind: t,
    name: _(n, L),
    ...(i.typeLabel ? { typeLabel: _(i.typeLabel, 120) } : {}),
    anchors: Qi(i.anchors ?? [], 12),
    confidence: i.confidence ?? 0.7,
  };
}
function Qi(t, n) {
  const i = [],
    r = new Set();
  for (const o of t) {
    const a = _(o, 180);
    if (!a) continue;
    const s = a.toLowerCase();
    if (!r.has(s) && (r.add(s), i.push(a), i.length >= n)) break;
  }
  return i;
}
function Mt(t) {
  const n = Mi(t),
    i = Di(t),
    r = C([...Pt(t), ...i], Dt),
    o = Ki(t, n.verb, r),
    a = qi(t, o),
    s = C(
      [
        "url",
        t.userAction ? "user_action" : "",
        t.adapterHints.length > 0 ? "adapter" : "",
        t.pageContext ? "dom" : "",
        t.screenshot ? "screenshot" : "",
      ].filter((G) => !!G),
      8,
    ),
    l = X(t),
    u = n.stage === "confirmed" || l.length === 0 ? n.stage : "confirmed";
  return {
    frameId: Ji(t.chunkId),
    chunkId: t.chunkId,
    capturedAt: t.capturedAt,
    action: { ...n, stage: u },
    ...(o ? { target: o } : {}),
    relatedEntities: a,
    anchors: r,
    ...(t.pageContext?.surface ? { surface: t.pageContext.surface } : {}),
    evidence: {
      sources: s.length > 0 ? s : ["system"],
      confidence: Pi(t),
      confirmationSignals: l,
      notes: zi(t),
      screenshotArtifactIds: [
        t.beforeScreenshot?.artifactId,
        t.screenshot?.artifactId,
      ]
        .filter((G) => !!G)
        .slice(0, 4),
      sparseDom:
        t.pageContext?.contextSignals.includes("capture_sparse_dom") ?? !1,
    },
  };
}
function Xi(t) {
  return t.candidateFrame ?? Mt(t);
}
function Ji(t) {
  return `gia_frame_${t}`.replace(/\s+/g, " ").trim().slice(0, 120);
}
function Z(t, n, i) {
  const r = [],
    o = new Set();
  for (const a of t) {
    const s = b(a, i);
    if (!s) continue;
    const l = s.toLowerCase();
    if (!o.has(l) && (o.add(l), r.push(s), r.length >= n)) break;
  }
  return r;
}
function Zi(t) {
  return t.filter((n) => {
    const i = re(n);
    return i.split(" ").filter(Boolean).length !== 1
      ? !0
      : !t.some((o) => {
          if (o === n) return !1;
          const a = re(o);
          return new RegExp(`(^| )${er(i)}( |$)`).test(a);
        });
  });
}
function re(t) {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(new RegExp("\\p{Diacritic}", "gu"), "")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function b(t, n) {
  return t.replace(/\s+/g, " ").trim().slice(0, n);
}
function er(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const ee = 180,
  tr = ["profileName", "recipientName", "threadTitle", "recordTitle"],
  nr = 3;
function ir(t, n, i) {
  const r = rr(n),
    o = or(n),
    a = ar(t, n, r),
    s = _r(t.userAction),
    l = ur(t, n),
    u = [
      `Page "${b(t.title, 180)}" on ${t.urlDomain}${t.urlPath}`,
      r ? `surface ${r}` : "",
      o.length > 0 ? `entities ${o.join(", ")}` : "",
      a.length > 0 ? `anchors ${a.join(", ")}` : "",
      s ? `latest action ${s}` : `trigger ${t.triggerKind}`,
      t.screenshot ? "screenshot available" : "no screenshot",
    ].filter((f) => f.length > 0);
  return {
    semanticSummary: b(u.join(". "), 900),
    ...(s ? { actionSummary: s } : {}),
    ...(r ? { surface: r } : {}),
    keyEntities: o,
    activityAnchors: a,
    contextSignals: l,
    screenshotAvailable: !!t.screenshot,
    screenshotIncludedForModel: i,
  };
}
function rr(t) {
  return t.find((i) => i.surface)?.surface;
}
function or(t) {
  const n = [];
  for (const i of t) {
    for (const r of i.semanticEvidence ?? []) n.push(...$t(r));
    for (const r of tr) {
      const o = i.facts[r];
      if (typeof o == "string") {
        const a = y(o, 160);
        a && n.push(a);
      }
    }
  }
  return Zi(Z(n, at, 160));
}
function ar(t, n, i) {
  const r = [],
    o = K(t.urlDomain, t.urlPath || "/");
  o && r.push(o);
  const a = H(t.url);
  (a && r.push(a), i && r.push(`surface:${i}`));
  for (const s of n) {
    for (const g of s.semanticEvidence ?? []) r.push(...Nt(g));
    const l = s.facts.threadId;
    if (typeof l == "string") {
      const g = l.replace(/\s+/g, " ").trim();
      g && r.push(`thread:${g}`);
    }
    const u = s.facts.profileUrl;
    if (typeof u == "string") {
      const g = V(u);
      g && r.push(`profile:${g}`);
    }
    const f = s.facts.recipientProfileUrls;
    if (Array.isArray(f)) {
      for (const g of f)
        if (typeof g == "string") {
          const ve = V(g);
          ve && r.push(`profile:${ve}`);
        }
    }
    const G = s.facts.domain,
      Ie = s.facts.path;
    if (typeof G == "string" && typeof Ie == "string") {
      const g = K(G, Ie || "/");
      g && r.push(g);
    }
    sr(r, s);
  }
  return Z(
    r.map((s) => ye(s)).filter((s) => !!s),
    rt,
    ee,
  );
}
function sr(t, n) {
  const i = n.facts.activityIntent;
  if (typeof i == "string") {
    const a = ze(i);
    a && t.push(`intent:${a}`);
  }
  const r = n.facts.controlKind;
  if (typeof r == "string") {
    const a = ze(r);
    a && t.push(`intent:${a}`);
  }
  const o = n.facts.searchQuery;
  if (typeof o == "string" && cr(n)) {
    const a = lr(o);
    (a && t.push(`query:${a}`), t.push(...pr(o)));
  }
}
function cr(t) {
  const n =
    `${t.surface ?? ""} ${t.label} ${t.facts.controlKind ?? ""}`.toLowerCase();
  return /\b(search|filter|model|ranking|pricing|compare|comparison)\b/.test(n);
}
function ze(t) {
  return (
    t
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "") || null
  );
}
function lr(t) {
  const n = t
    .toLowerCase()
    .replace(/[^a-z0-9.+-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return n ? b(n, ee) : null;
}
function pr(t) {
  const n = [],
    i = t.toLowerCase().replace(/[_/]+/g, " "),
    r =
      /\b(gpt|claude|gemini|llama|mistral|qwen|deepseek|grok|glm|kimi|minimax)\s*[- ]?\s*([0-9]+(?:[.\- ][0-9]+)*)(?:\s*[- ]?\s*(mini|nano|pro|flash|sonnet|opus|haiku|turbo|preview|thinking|coder|instruct|base))?/g;
  for (const o of i.matchAll(r)) {
    const a = o[1],
      s = o[2]?.replace(/[.\- ]+/g, "."),
      l = o[3];
    !a || !s || n.push(`model:${[a, s, l].filter(Boolean).join("-")}`);
  }
  return Z(n, 4, ee);
}
function ur(t, n) {
  const i = [
    `trigger:${t.triggerKind}`,
    `focused:${t.focused}`,
    `url_path:${t.urlPath || "/"}`,
  ];
  (t.userAction?.elementTag &&
    i.push(`action_element:${t.userAction.elementTag}`),
    t.userAction?.elementRole &&
      i.push(`action_role:${t.userAction.elementRole}`),
    t.screenshot &&
      i.push(`screenshot:${t.screenshot.width}x${t.screenshot.height}`),
    t.beforeScreenshot &&
      i.push(
        `before_screenshot:${t.beforeScreenshot.width}x${t.beforeScreenshot.height}`,
      ),
    t.userAction?.typingStartedAt && i.push("typing_episode"),
    t.userAction?.beforeScreenshotAvailable &&
      i.push("typing_before_screenshot_available"),
    mr(i, t, n));
  for (const r of n.slice(0, 4))
    i.push(`hint:${r.surface ?? r.adapterId}:${r.label}`);
  return Z(i, ot, ee);
}
function mr(t, n, i) {
  (dr(n.compactDom) && t.push("capture_sparse_dom"),
    fr(n, i) && t.push("page_has_text_input"),
    gr(n, i) && t.push("page_has_search_input"),
    hr(n, i) && t.push("page_has_message_composer"),
    yr(n, i) && t.push("page_has_send_or_submit_control"),
    Ar(i) && t.push("message_sent_confirmed"),
    br(n, i) && t.push("page_has_visual_state"));
}
function dr(t) {
  return t.visibleText.length + t.interactive.length <= nr;
}
function fr(t, n) {
  if (t.triggerKind === "input_commit") return !0;
  const i = n.map((o) => `${o.surface ?? ""} ${o.label}`).join(" ");
  if (
    /\b(text_input|search_input|filter_input|message_composer|textbox|textarea)\b/i.test(
      i,
    )
  )
    return !0;
  const r = `${t.userAction?.label ?? ""} ${t.userAction?.textPreview ?? ""} ${t.userAction?.elementRole ?? ""}`;
  return /\btextbox|textarea|search|filter|email\b/i.test(r);
}
function gr(t, n) {
  const i = n.map((o) => `${o.surface ?? ""} ${o.label}`).join(" "),
    r = `${t.userAction?.label ?? ""} ${t.userAction?.textPreview ?? ""} ${t.userAction?.elementRole ?? ""}`;
  return (
    /\b(search_input|search_control|filter_input|filter|search)\b/i.test(
      `${i} ${r}`,
    ) || t.urlPath === "/search"
  );
}
function hr(t, n) {
  const i = n.map((a) => `${a.surface ?? ""} ${a.label}`).join(" "),
    r = `${t.userAction?.label ?? ""} ${t.userAction?.textPreview ?? ""} ${t.userAction?.elementRole ?? ""}`,
    o = `${i} ${r}`;
  return /\bfeedback\b/i.test(o)
    ? !1
    : /\b(messaging|message_composer|message composer|reply|comment|write a message|send message)\b/i.test(
        o,
      );
}
function yr(t, n) {
  const i = `${t.userAction?.label ?? ""} ${t.userAction?.textPreview ?? ""}`;
  if (/\bsend|submit|post|reply\b/i.test(i)) return !0;
  const r = n.map((o) => `${o.surface ?? ""} ${o.label}`).join(" ");
  return /\bsend|submit|post|reply\b/i.test(r);
}
function Ar(t) {
  return t.some(
    (n) =>
      n.facts.sentMessageConfirmed === !0 ||
      (n.semanticEvidence ?? []).some(
        (i) => _e(i) === "adapter:sent_message_confirmed",
      ),
  );
}
function br(t, n) {
  const i = [
    t.urlDomain,
    t.urlPath,
    t.title,
    t.userAction?.label ?? "",
    ...n.map((r) => `${r.surface ?? ""} ${r.label}`),
  ].join(" ");
  return /\b(puzzles?|games?|canvas|whiteboard|board|player|map|editor)\b/i.test(
    i,
  );
}
function _r(t) {
  if (!t) return;
  const n = [
    t.kind,
    t.label ? `label "${b(t.label, 180)}"` : "",
    t.textPreview ? `text "${b(t.textPreview, 180)}"` : "",
    t.textLength !== void 0 ? `textLength ${t.textLength}` : "",
    t.typingDurationMs !== void 0
      ? `typingDurationMs ${t.typingDurationMs}`
      : "",
    t.inputEventCount !== void 0 ? `inputEvents ${t.inputEventCount}` : "",
    t.beforeScreenshotAvailable ? "before screenshot available" : "",
    t.elementTag ? `element ${t.elementTag}` : "",
  ].filter((i) => i.length > 0);
  return b(n.join(", "), 500);
}
const Lr = 8,
  Sr = 4,
  Pe = 240,
  xr = new Set(["bounds", "selector", "blockId"]),
  Ir = [
    "profileName",
    "recipientName",
    "threadTitle",
    "recordTitle",
    "profileUrl",
    "recipientProfileUrls",
    "threadId",
    "sentMessageConfirmed",
    "latestOwnMessageText",
    "domain",
    "path",
    "url",
  ],
  vr =
    /\b(message|send|submit|profile|recipient|thread|feed|puzzle|game|button|canvas|whiteboard|search|filter|research|model)\b/i;
function Er(t) {
  const n = new Map();
  for (const i of t) {
    const r = `${i.adapterId}:${i.surface ?? ""}:${i.label}`.toLowerCase(),
      o = n.get(r);
    (!o || i.confidence > o.confidence) && n.set(r, i);
  }
  return Array.from(n.values())
    .sort((i, r) => Ue(r) - Ue(i))
    .slice(0, it)
    .map((i) => {
      const r = Ii(i.semanticEvidence);
      return {
        adapterId: i.adapterId,
        adapterVersion: i.adapterVersion,
        ...(i.surface ? { surface: i.surface } : {}),
        label: b(i.label, 240),
        confidence: i.confidence,
        facts: Ft(i.facts),
        ...(r.length > 0 ? { semanticEvidence: r } : {}),
      };
    });
}
function Ue(t) {
  const n = `${t.surface ?? ""} ${t.label}`;
  return t.confidence + (vr.test(n) ? 1 : 0);
}
function Ft(t) {
  const n = Object.entries(t)
    .filter(([i]) => !xr.has(i))
    .sort(([i], [r]) => Me(r) - Me(i) || i.localeCompare(r))
    .slice(0, Lr);
  return Object.fromEntries(n.map(([i, r]) => [i, jt(r, 0, i)]));
}
function jt(t, n = 0, i = "") {
  return typeof t == "string"
    ? Tr(i, t)
    : Array.isArray(t)
      ? t.slice(0, Sr).map((r) => jt(r, n + 1, i))
      : t !== null && typeof t == "object"
        ? n >= 2
          ? "[nested facts omitted]"
          : Ft(t)
        : t;
}
function Tr(t, n) {
  return Cr(t) ? b(wr(n), Pe) : b(n, Pe);
}
function Cr(t) {
  return /(?:urls?|hrefs?)$/i.test(t);
}
function wr(t) {
  const n = t.trim();
  if (!n) return n;
  const i = Rr(n);
  if (!i) return n.split(/[?#]/)[0] || "";
  const r = z(i);
  return r.ok ? Gr(r.url, n) : n.split(/[?#]/)[0] || "";
}
function Rr(t) {
  return /^https?:\/\//i.test(t)
    ? t
    : /^(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:\/|$)/i.test(t)
      ? `https://${t}`
      : null;
}
function Gr(t, n) {
  return /^https?:\/\//i.test(n) ? t : t.replace(/^https:\/\//i, "");
}
function Me(t) {
  return Ir.includes(t)
    ? 3
    : /title|name|label|url|href|path|domain/i.test(t)
      ? 2
      : 0;
}
function $r(t, n = {}) {
  const i = Nr(t),
    r = Er(i.adapterHints),
    o = Pr(n.screenshotBase64),
    a = !!(i.screenshot && o),
    s = ir(i, r, a),
    l = {
      chunkId: i.chunkId,
      logicalDate: i.logicalDate,
      capturedAt: i.capturedAt,
      triggerKind: i.triggerKind,
      tabId: i.tabId,
      focused: i.focused,
      url: i.url,
      urlDomain: i.urlDomain,
      urlPath: i.urlPath,
      title: i.title,
      appName: i.appName,
      adapterHints: r,
      pageContext: s,
      ...(i.beforeScreenshot
        ? { beforeScreenshot: Fe(i.beforeScreenshot) }
        : {}),
      ...(i.screenshot ? { screenshot: Fe(i.screenshot, o) } : {}),
      ...(i.userAction ? { userAction: i.userAction } : {}),
      ...(i.signatures ? { signatures: i.signatures } : {}),
      contentSignature: i.contentSignature,
      ...(i.duplicateOfChunkId
        ? { duplicateOfChunkId: i.duplicateOfChunkId }
        : {}),
    };
  return { ...l, candidateFrame: Mt(l) };
}
function Fe(t, n) {
  return {
    artifactId: t.artifactId,
    contentHash: t.contentHash,
    byteSize: t.byteSize,
    width: t.width,
    height: t.height,
    mediaType: "image/jpeg",
    ...(n ? { base64: n } : {}),
  };
}
function Nr(t) {
  const n = z(t.url),
    i = n.ok ? n.url : zr(t),
    r = n.ok ? n.hostname : t.urlDomain,
    o = n.ok ? n.pathname : t.urlPath || "/",
    a = Or(t.userAction, i);
  return {
    ...t,
    url: i,
    urlDomain: r,
    urlPath: o,
    ...(a ? { userAction: a } : {}),
  };
}
function Or(t, n) {
  if (!t?.href) return t;
  const i = Dr(t.href, n);
  if (i === t.href) return t;
  if (!i) {
    const r = { ...t };
    return (delete r.href, r);
  }
  return { ...t, href: i };
}
function Dr(t, n) {
  const i = t.trim();
  if (!(!i || i.startsWith("#")))
    try {
      const r = new URL(i, n).href,
        o = z(r);
      return o.ok ? o.url : void 0;
    } catch {
      return;
    }
}
function zr(t) {
  const n = t.urlDomain.trim(),
    i = t.urlPath.startsWith("/") ? t.urlPath : `/${t.urlPath || ""}`;
  if (!n) return "https://invalid.example/";
  const r = z(`https://${n}${i || "/"}`);
  return r.ok ? r.url : "https://invalid.example/";
}
function Pr(t) {
  if (!t) return;
  const n = t.indexOf(","),
    i = n >= 0 ? t.slice(n + 1) : t;
  if (!(i.length === 0 || i.length > st)) return i;
}
const p = e.pipe(e.string(), e.minLength(1)),
  te = e.pipe(e.string(), e.regex(/^\d{4}-\d{2}-\d{2}$/)),
  P = e.pipe(d, e.minValue(0), e.maxValue(1)),
  Ur = e.pipe(d, e.minValue(0)),
  O = e.pipe(x, e.minValue(0)),
  oe = e.pipe(x, e.minValue(1)),
  Mr = e.object({
    adapterId: p,
    adapterVersion: p,
    surface: e.optional(p),
    label: e.pipe(e.string(), e.minLength(1), e.maxLength(240)),
    confidence: P,
    facts: We,
    semanticEvidence: e.optional(e.pipe(e.array(et), e.maxLength(16))),
  }),
  Fr = e.strictObject({
    semanticSummary: e.pipe(e.string(), e.minLength(1), e.maxLength(900)),
    actionSummary: e.optional(e.pipe(e.string(), e.maxLength(500))),
    surface: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(120))),
    keyEntities: e.pipe(
      e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(160))),
      e.maxLength(at),
    ),
    activityAnchors: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
        e.maxLength(rt),
      ),
      () => [],
    ),
    contextSignals: e.pipe(
      e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
      e.maxLength(ot),
    ),
    screenshotAvailable: e.boolean(),
    screenshotIncludedForModel: e.boolean(),
  }),
  je = e.object({
    artifactId: p,
    contentHash: p,
    byteSize: O,
    width: oe,
    height: oe,
    mediaType: e.optional(e.literal("image/jpeg"), "image/jpeg"),
    base64: e.optional(e.pipe(e.string(), e.maxLength(st))),
  }),
  Ve = e.object({
    chunkId: p,
    logicalDate: te,
    capturedAt: c,
    triggerKind: W,
    tabId: p,
    focused: e.boolean(),
    url: e.string(),
    urlDomain: e.string(),
    urlPath: e.string(),
    title: e.pipe(e.string(), e.maxLength(300)),
    appName: p,
    adapterHints: e.pipe(e.array(Mr), e.maxLength(it)),
    pageContext: e.optional(Fr),
    beforeScreenshot: e.optional(je),
    screenshot: e.optional(je),
    userAction: e.optional(ut),
    signatures: e.optional(Xe),
    candidateFrame: e.optional(Y),
    contentSignature: p,
    duplicateOfChunkId: e.optional(p),
  }),
  xe = e.object({
    windowId: p,
    logicalDate: te,
    status: ce,
    activityKind: I,
    title: e.pipe(e.string(), e.minLength(1), e.maxLength(160)),
    summary: e.pipe(e.string(), e.minLength(1), e.maxLength(1200)),
    startedAt: c,
    updatedAt: c,
    endedAt: e.optional(c),
    urlDomain: e.optional(e.string()),
    urlPatterns: e.pipe(e.array(e.string()), e.maxLength(20)),
    activityAnchors: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
        e.maxLength(32),
      ),
    ),
    keyEntities: e.pipe(
      e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(me))),
      e.maxLength(20),
    ),
    frames: e.optional(e.pipe(e.array(Y), e.maxLength(80))),
    renderDebug: e.optional(ue),
    chunkIds: e.pipe(e.array(p), e.maxLength(200)),
    chunkCount: O,
    lastContentSignature: e.optional(e.string()),
    confidence: P,
  }),
  jr = e.object({
    windowId: p,
    status: e.optional(ce),
    activityKind: e.optional(I),
    title: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(160))),
    summary: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(1200))),
    updatedAt: c,
    endedAt: e.optional(c),
    urlPatterns: e.optional(e.pipe(e.array(e.string()), e.maxLength(20))),
    activityAnchors: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
        e.maxLength(32),
      ),
    ),
    keyEntities: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(me))),
        e.maxLength(20),
      ),
    ),
    frames: e.optional(e.pipe(e.array(Y), e.maxLength(20))),
    renderDebug: e.optional(ue),
    appendChunkId: e.optional(p),
    lastContentSignature: e.optional(e.string()),
    confidence: e.optional(P),
  }),
  Vr = e.object({
    windowId: p,
    logicalDate: te,
    activityKind: I,
    title: e.pipe(e.string(), e.minLength(1), e.maxLength(160)),
    summary: e.pipe(e.string(), e.minLength(1), e.maxLength(1200)),
    startedAt: c,
    updatedAt: c,
    urlDomain: e.optional(e.string()),
    urlPatterns: e.pipe(e.array(e.string()), e.maxLength(20)),
    activityAnchors: e.optional(
      e.pipe(
        e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(180))),
        e.maxLength(32),
      ),
    ),
    keyEntities: e.pipe(
      e.array(e.pipe(e.string(), e.minLength(1), e.maxLength(me))),
      e.maxLength(20),
    ),
    frames: e.optional(e.pipe(e.array(Y), e.maxLength(20))),
    renderDebug: e.optional(ue),
    firstChunkId: p,
    lastContentSignature: e.optional(e.string()),
    confidence: P,
  }),
  ae = e.strictObject({
    decisionId: p,
    action: le,
    targetWindowId: e.optional(p),
    closeWindowIds: e.optional(e.array(p), () => []),
    newWindow: e.optional(Vr),
    patch: e.optional(jr),
    rationale: e.pipe(e.string(), e.minLength(1), e.maxLength(800)),
    confidence: P,
  }),
  Kr = e.strictObject({
    profileTimezone: p,
    nowIso: e.optional(c),
    newestChunk: Ve,
    recentChunks: e.pipe(e.array(Ve), e.maxLength(12)),
    openWindows: e.pipe(e.array(xe), e.maxLength(8)),
    maxOpenWindows: e.optional(e.pipe(x, e.minValue(1), e.maxValue(8)), 4),
  }),
  Vt = e.strictObject({
    decisions: e.pipe(e.array(ae), e.minLength(1), e.maxLength(4)),
    rejectedReasons: e.optional(e.array(e.string()), () => []),
    rawModelResponse: e.optional(
      e.strictObject({
        decisions: e.pipe(e.array(ae), e.minLength(1), e.maxLength(4)),
        rejectedReasons: e.optional(e.array(e.string()), () => []),
      }),
    ),
    usage: e.strictObject({
      model: e.string(),
      inputTokens: O,
      outputTokens: O,
      costUsd: Ur,
      durationMs: O,
      llmCalled: e.boolean(),
    }),
    debug: e.optional(nt),
  }),
  kr = e.picklist([
    "api",
    "deterministic_shortcut",
    "deterministic_fallback",
    "learned_model_suppression",
    "budget_model_suppression",
    "api_error_fallback",
  ]),
  Wr = e.strictObject({
    traceId: p,
    logicalDate: te,
    createdAt: c,
    chunkId: p,
    source: kr,
    apiStatus: e.optional(oe),
    apiError: e.optional(e.pipe(e.string(), e.maxLength(1e3))),
    observability: e.optional(nt),
    request: Kr,
    response: Vt,
    nextOpenWindows: e.pipe(e.array(xe), e.maxLength(8)),
  }),
  Yr = 3e4;
function Br(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    "id" in t &&
    "method" in t &&
    "args" in t &&
    typeof t.id == "string" &&
    typeof t.method == "string" &&
    Array.isArray(t.args)
  );
}
function Kt(t) {
  return typeof t == "object" && t !== null && "type" in t;
}
function qr(t) {
  return Kt(t) && t.type === "shutdown";
}
exports.GIA_ACTIVITY_DOCUMENT_INPUT_TEMPLATE_VERSION = mt;
exports.GIA_ACTIVITY_EMBEDDING_DIMS = B;
exports.GIA_ACTIVITY_EMBEDDING_MODEL = de;
exports.GIA_ACTIVITY_SEMANTIC_NORMALIZER_VERSION = fe;
exports.GIA_ACTIVITY_SOURCE_CARD_INDEX_VERSION = q;
exports.GIA_ACTIVITY_SOURCE_CARD_SCHEMA_VERSION = dt;
exports.GIA_ACTIVITY_WORKER_TIMEOUT_MS = Yr;
exports.GiaActivityCaptureChunkSchema = Sn;
exports.GiaActivityCompactDomSchema = pt;
exports.GiaActivityDecisionEventSchema = tt;
exports.GiaActivityEmbeddingResponseSchema = Cn;
exports.GiaActivityGroupResponseSchema = Vt;
exports.GiaActivityGroupingTraceSchema = Wr;
exports.GiaActivityKindSchema = I;
exports.GiaActivitySearchRequestSchema = Gn;
exports.GiaActivitySearchResponseSchema = Pn;
exports.GiaActivitySourceCardLookupRequestSchema = Un;
exports.GiaActivitySourceCardSchema = yt;
exports.GiaActivitySourceCardTypeSchema = ge;
exports.GiaActivityTimelineRequestSchema = $n;
exports.GiaActivityTimelineResponseSchema = zn;
exports.GiaActivityWindowDecisionSchema = ae;
exports.GiaActivityWindowSchema = xe;
exports.GiaActivityWindowSourceCardSchema = At;
exports.MAX_RENDER_KEY_ENTITIES = Oi;
exports.OUTCOME_VERBS = zt;
exports.assertSafeLLMUrl = se;
exports.assertTabUrlSafeForLLM = Xt;
exports.buildGiaActivityExactResourceAnchorForUrl = H;
exports.buildGiaActivityResourceIdentityForChunk = ci;
exports.buildGiaActivityResourceIdentityForWindow = li;
exports.candidateFrameForChunk = Xi;
exports.capitalize = Ni;
exports.clampTitle = $i;
exports.giaActivityAnchorsFromAdapterEvidence = Nt;
exports.giaActivityBroadResourceAnchorsOverlap = ui;
exports.giaActivityConfirmationSignalFromAdapterEvidence = _e;
exports.giaActivityContextTextFromAdapterEvidence = Ot;
exports.giaActivityEntityNamesFromAdapterEvidence = $t;
exports.giaActivityResourceClassIsExclusive = fi;
exports.giaActivityResourceIdentitiesConflict = mi;
exports.giaActivityResourceIdentitiesOverlap = pi;
exports.giaActivitySearchResultQueryResourcesDiffer = di;
exports.isGiaActivityDurableIdentityAnchor = Wn;
exports.isGiaActivityMemoryShutdownMessage = qr;
exports.isGiaActivityMemoryWorkerControlMessage = Kt;
exports.isGiaActivityMemoryWorkerRequest = Br;
exports.isNoisyGiaActivityTextFragment = he;
exports.lastItem = Gi;
exports.mergeUnique = C;
exports.normalizeGiaActivityDisplayEntity = y;
exports.normalizeGiaActivityUrlPattern = T;
exports.normalizedTextKey = re;
exports.sanitizeGiaActivityMemoryUrl = z;
exports.sanitizeIndexedText = jn;
exports.shouldDropGiaActivityQueryParam = Ae;
exports.toGiaActivityGroupingChunk = $r;
