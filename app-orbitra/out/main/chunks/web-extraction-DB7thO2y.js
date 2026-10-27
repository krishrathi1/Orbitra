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
      (e._sentryDebugIds[n] = "6c01eec6-fd60-408b-9192-0acdca452941"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-6c01eec6-fd60-408b-9192-0acdca452941"));
  })();
} catch {}
const C = require("../main-app.js");
function N(e, n, p, i) {
  const g = i ?? e.objectKey;
  return {
    page: e.markdown,
    transcript: e.transcript,
    screenshot: e.screenshot,
    fileObjectKey: g,
    fileMimeType: e.mimeType,
    filename: e.title,
    extract: n,
    chatId: p,
  };
}
const H = {
  0: "text",
  3: "error",
  9: "tool_call",
  a: "tool_result",
  b: "tool_call_start",
  c: "tool_call_delta",
  d: "finish_message",
  e: "finish_step",
  f: "start_step",
  g: "reasoning_text",
  j: "reasoning_signature",
  "provider-info": "provider_info",
  "billing-committed": "billing_committed",
  "usage-cost": "usage_cost",
  "auto-topup": "auto_topup",
};
function $(e) {
  return { text: e, phase: "delta" };
}
async function R(e, n, p) {
  const i = e.body?.getReader();
  if (!i) throw new Error("No reader available");
  const g = new TextDecoder();
  let s = "";
  const h = p?.stallTimeoutMs,
    c = p?.abortSignal,
    r = () => {
      if (c?.aborted) {
        i.cancel().catch(() => {});
        const l = new Error("Stream aborted");
        throw ((l.name = "AbortError"), l);
      }
    },
    _ = () => (
      r(),
      !h && !c
        ? i.read()
        : new Promise((l, m) => {
            let x, y;
            const d = () => {
              (x && clearTimeout(x),
                y && c && c.removeEventListener("abort", y));
            };
            (h &&
              (x = setTimeout(() => {
                (d(),
                  i.cancel().catch(() => {}),
                  m(
                    new Error(
                      `Stream stalled - no data received for ${h / 1e3} seconds`,
                    ),
                  ));
              }, h)),
              c &&
                ((y = () => {
                  (d(), i.cancel().catch(() => {}));
                  const b = new Error("Stream aborted");
                  ((b.name = "AbortError"), m(b));
                }),
                c.addEventListener("abort", y)),
              i.read().then(
                (b) => {
                  (d(), l(b));
                },
                (b) => {
                  (d(), m(b));
                },
              ));
          })
    );
  try {
    for (;;) {
      r();
      const { value: l, done: m } = await _(),
        x = m ? g.decode() : g.decode(l, { stream: !0 });
      s += x;
      const y = s.split(`
`);
      ((s = y.pop() || ""), m && s && (y.push(s), (s = "")));
      for (const d of y)
        if (d)
          if (d.startsWith("data:")) {
            const b = d.slice(5).trim();
            if (b === "[DONE]") continue;
            try {
              const t = JSON.parse(b);
              let o, a;
              const u = t.providerMetadata,
                f = t.type;
              if (typeof f != "string" || f.startsWith("data-")) continue;
              const S = f;
              switch (S) {
                case "start":
                case "text-start":
                case "text-end":
                  continue;
                case "text-delta":
                case "text":
                  ((o = "text"), (a = t.delta || t.text || ""));
                  break;
                case "reasoning":
                case "reasoning-delta": {
                  ((o = "reasoning_text"),
                    (a = {
                      text: t.delta || t.text || "",
                      id: typeof t.id == "string" ? t.id : void 0,
                      phase: "delta",
                    }));
                  const v = u?.anthropic?.signature;
                  if (typeof v == "string") {
                    (await Promise.resolve(
                      n({ typeName: o, content: a, providerOptions: u }),
                    ),
                      await Promise.resolve(
                        n({
                          typeName: "reasoning_signature",
                          content: { signature: v },
                          providerOptions: u,
                        }),
                      ));
                    continue;
                  }
                  break;
                }
                case "reasoning-start":
                case "reasoning-end":
                  ((o = "reasoning_text"),
                    (a = {
                      text: "",
                      id: typeof t.id == "string" ? t.id : void 0,
                      phase: S === "reasoning-start" ? "start" : "end",
                    }));
                  break;
                case "reasoning-signature":
                  ((o = "reasoning_signature"),
                    (a = {
                      signature: t.signature || "",
                      title: t.title,
                      content: t.content,
                    }));
                  break;
                case "custom":
                  ((o = "custom"), (a = { kind: t.kind, providerMetadata: u }));
                  break;
                case "tool-call":
                  ((o = "tool_call"),
                    (a = {
                      toolCallId: t.toolCallId ?? t.id,
                      toolName: t.toolName,
                      args: t.input,
                    }));
                  break;
                case "tool-call-streaming-start":
                case "tool-input-start":
                  ((o = "tool_call_start"),
                    (a = {
                      toolCallId: t.toolCallId ?? t.id,
                      toolName: t.toolName,
                    }));
                  break;
                case "tool-call-delta":
                case "tool-input-delta":
                  ((o = "tool_call_delta"),
                    (a = {
                      toolCallId: t.toolCallId ?? t.id,
                      toolName: t.toolName,
                      argsTextDelta:
                        t.argsTextDelta || t.inputTextDelta || t.delta || "",
                    }));
                  break;
                case "tool-input-available":
                  ((o = "tool_call"),
                    (a = {
                      toolCallId: t.toolCallId ?? t.id,
                      toolName: t.toolName,
                      args: t.input,
                    }));
                  break;
                case "tool-result":
                case "tool-output-available":
                  ((o = "tool_result"),
                    (a = {
                      toolCallId: t.toolCallId,
                      toolName: t.toolName || "unknown_tool",
                      result: t.output,
                    }));
                  break;
                case "source-url":
                case "source-document":
                case "file":
                case "metadata":
                  continue;
                case "tool-input-error":
                  ((o = "tool_input_error"),
                    (a = {
                      toolCallId: t.toolCallId,
                      toolName: t.toolName,
                      input: t.input,
                      errorText: t.errorText || "",
                    }));
                  break;
                case "tool-output-error":
                  ((o = "tool_output_error"),
                    (a = {
                      toolCallId: t.toolCallId,
                      errorText: t.errorText || "",
                    }));
                  break;
                case "start-step":
                  ((o = "start_step"), (a = t));
                  break;
                case "finish-step":
                  ((o = "finish_step"), (a = t));
                  break;
                case "finish":
                  ((o = "finish_message"), (a = t));
                  break;
                case "error":
                  o = "error";
                  let E = t.errorText || t.error;
                  if (typeof E == "string")
                    try {
                      E = JSON.parse(E);
                    } catch {}
                  a = E;
                  break;
                case "provider-info":
                  ((o = "provider_info"), (a = { provider: t.provider }));
                  break;
                case "billing-committed":
                  ((o = "billing_committed"),
                    (a = {
                      requestId:
                        typeof t.requestId == "string" ? t.requestId : null,
                    }));
                  break;
                case "usage-cost":
                  ((o = "usage_cost"),
                    (a = {
                      credits: t.credits,
                      totalSessionCredits: t.totalSessionCredits,
                      monthlyLimit: t.monthlyLimit,
                      monthlyUsed: t.monthlyUsed,
                      monthlyRemaining: t.monthlyRemaining,
                      topupRemaining: t.topupRemaining,
                      totalRemaining: t.totalRemaining,
                      subscriptionAccess: t.subscriptionAccess,
                      balanceSource: t.balanceSource,
                      billingAccount: t.billingAccount,
                      creditState: t.creditState,
                      usage: t.usage,
                      contextBreakdown: t.contextBreakdown,
                      cache: t.cache,
                    }));
                  break;
                case "auto-topup":
                  ((o = "auto_topup"),
                    (a = { credits: t.credits, amountUsd: t.amountUsd }));
                  break;
                default:
                  console.warn("Unhandled SSE stream part type:", S);
                  continue;
              }
              await Promise.resolve(
                n({ typeName: o, content: a, providerOptions: u }),
              );
            } catch (t) {
              if (t instanceof Error && t.name !== "SyntaxError") throw t;
              console.error("Error parsing SSE data:", t, "from line:", d);
              continue;
            }
          } else {
            const [b, ...t] = d.split(":");
            if (!b) continue;
            const o = t.join(":");
            if (!o) continue;
            const a = b.trim(),
              u = H[a] || "text";
            let f;
            try {
              f = JSON.parse(o.trim());
            } catch (S) {
              console.error(
                "Error parsing JSON content:",
                S,
                "from string:",
                o,
              );
              continue;
            }
            (u === "reasoning_text" && (f = $(f)),
              await Promise.resolve(n({ typeName: u, content: f })));
          }
      if (m) break;
    }
  } finally {
    i.releaseLock();
  }
}
const T = 4,
  A = /\*\*([^*]+?)\*\*/g,
  P = /^#{1,6}\s+(.+)$/,
  k = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
  I = /https?:\/\/[^\s)]+/g,
  U = /^https?:\/\//,
  j = "--force-captcha",
  W = "ORBITRA_FORCE_CAPTCHA";
function w(e) {
  const n = e.trim().replace(/[),.;]+$/, "");
  if (!n) return null;
  try {
    return new URL(n).hostname.replace(/^www\./, "");
  } catch {
    return n;
  }
}
function O(e) {
  return w(e) || e;
}
function F() {
  return process.env[W] === "true" || process.argv.includes(j);
}
function M(e, n) {
  return `<source_scope>
This extraction call processes exactly one source. Use the overall task only as
context for relevance. Answer only the goal for this source. Do not report other
requested sources as missing, absent, failed, or unverified.
</source_scope>

<overall_task>
${e}
</overall_task>

<source_goal>
${n}
</source_goal>`;
}
function B(e) {
  const n = e.includes("**"),
    p = e.startsWith("#"),
    i = e.includes("http"),
    g = i && e.includes("[") && e.includes("](");
  if (!n && !p && !i) return null;
  const s = [],
    h = new Set(),
    c = (r, _ = !1) => {
      if (!r) return !1;
      let l = r.trim();
      return !l || (_ && ((l = l.replace(/:$/, "")), !l)) || h.has(l)
        ? !1
        : (h.add(l), s.push(l), s.length >= T);
    };
  if (n) {
    A.lastIndex = 0;
    let r = null;
    for (; (r = A.exec(e)) !== null && !c(r[1], !0); );
  }
  if (s.length < T && p) {
    const r = e.match(P);
    r?.[1] && c(r[1]);
  }
  if (s.length < T && g) {
    k.lastIndex = 0;
    let r = null;
    for (; s.length < T && (r = k.exec(e)) !== null; ) {
      const _ = r[1]?.trim(),
        l = r[2]?.trim();
      if ((_ && !U.test(_) && c(_), s.length >= T)) break;
      if (l) {
        const m = w(l);
        if (m && c(m)) break;
      }
    }
  }
  if (s.length < T && i) {
    I.lastIndex = 0;
    let r = null;
    for (; s.length < T && (r = I.exec(e)) !== null; ) {
      const _ = w(r[0]);
      if (_ && c(_)) break;
    }
  }
  return s.length === 0 ? null : { texts: s };
}
function D(e, n) {
  if (!e || n <= 0) return [];
  const p = [];
  let i = e.length;
  for (; i >= 0 && p.length < n; ) {
    const g = e.lastIndexOf(
        `
`,
        i - 1,
      ),
      s = g === -1 ? 0 : g + 1;
    let h = e.slice(s, i);
    h.endsWith("\r") && (h = h.slice(0, -1));
    const c = h.trim();
    if (c.length > 0) {
      const r = B(c);
      r && p.unshift(r);
    }
    if (g === -1) break;
    i = g;
  }
  return p;
}
async function L(e) {
  const {
      page: n,
      transcript: p,
      screenshot: i,
      fileObjectKey: g,
      fileMimeType: s,
      filename: h,
      extractionGoal: c,
      context: r,
      sourceValue: _,
      onTextUpdate: l,
      allowForceCaptcha: m,
    } = e,
    x = C.config.app.apiUrl + "/api/chat/extract";
  !n &&
    !p &&
    !g &&
    C.logger.warn(
      `[web-extraction] No content from source: "${_}", proceeding anyway`,
    );
  const y = {
      page: n,
      transcript: p,
      screenshot: i,
      fileObjectKey: g,
      fileMimeType: s,
      filename: h,
      extract: c,
      chatId: r.chatId,
      agentId: r.agentId,
    },
    d = await C.fetchWithRetryLargePayload(x, {
      accountId: e.context.accountId,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(y),
      signal: r.abortSignal,
    });
  if (!d.ok) {
    const u = await d.text();
    throw new Error(`Extraction API failed for "${_}": ${d.status} ${u}`);
  }
  const b = d.headers.get("content-type") || "",
    t = m !== !1 && F();
  if (b.includes("application/json")) {
    const u = await d.json(),
      f = u.extractedcontent || u.extractedContent || "";
    return (
      l?.(f),
      {
        extractedContent: f,
        isCaptcha: t || f.includes("IS_CAPTCHA"),
        forcedCaptcha: t || void 0,
        cost: u.cost,
        duration: u.duration,
      }
    );
  }
  let o = "",
    a;
  return (
    await R(
      d,
      ({ typeName: u, content: f }) => {
        switch (u) {
          case "text":
            ((o += f), l?.(o));
            break;
          case "usage_cost":
            ((a = f.credits),
              f.totalSessionCredits && r.onCostUpdate?.(f.totalSessionCredits));
            break;
        }
      },
      { stallTimeoutMs: 180 * 1e3 },
    ),
    {
      extractedContent: o,
      isCaptcha: t || o.includes("IS_CAPTCHA"),
      forcedCaptcha: t || void 0,
      cost: a,
      duration: void 0,
    }
  );
}
const G = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      BOLD_STATUS_PATTERN: A,
      HEADING_STATUS_PATTERN: P,
      MARKDOWN_LINK_STATUS_PATTERN: k,
      MAX_STATUS_TOKENS_PER_LINE: T,
      RAW_URL_STATUS_PATTERN: I,
      URL_SCHEME_STATUS_PATTERN: U,
      buildExtractionGoal: M,
      callExtractionAPI: L,
      extractRecentBoldLineStatuses: D,
      getStatusTargetFromUrl: O,
      getUrlToken: w,
      toExtractionPayload: N,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
exports.buildExtractionGoal = M;
exports.callExtractionAPI = L;
exports.extractRecentBoldLineStatuses = D;
exports.getStatusTargetFromUrl = O;
exports.processStream = R;
exports.toExtractionPayload = N;
exports.webExtraction = G;
