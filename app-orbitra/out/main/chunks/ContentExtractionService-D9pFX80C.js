"use strict";
var xe = Object.create;
var Q = Object.defineProperty;
var Ee = Object.getOwnPropertyDescriptor;
var Se = Object.getOwnPropertyNames;
var Ce = Object.getPrototypeOf,
  ve = Object.prototype.hasOwnProperty;
var Fe = (n, e, t, r) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let o of Se(e))
      !ve.call(n, o) &&
        o !== t &&
        Q(n, o, {
          get: () => e[o],
          enumerable: !(r = Ee(e, o)) || r.enumerable,
        });
  return n;
};
var A = (n, e, t) => (
  (t = n != null ? xe(Ce(n)) : {}),
  Fe(
    e || !n || !n.__esModule
      ? Q(t, "default", { value: n, enumerable: !0 })
      : t,
    n,
  )
);
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
      e = new n.Error().stack;
    e &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[e] = "92106ffd-1128-4a3a-9020-aa239e99bc13"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-92106ffd-1128-4a3a-9020-aa239e99bc13"));
  })();
} catch {}
const c = require("../main-app.js"),
  V = require("path"),
  se = require("electron"),
  De = require("valibot"),
  S = require("./protocol-BGN1BQCi.js"),
  _ = require("./savedCertificateBlocklist-BUtmL3xA.js"),
  Le = require("./unicode-CSAGP0Z8.js"),
  ke = require("fs"),
  ce = require("url"),
  Ie = require("node:timers/promises"),
  G = require("./worker-protocol-CFgWGf-A.js");
function le(n) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (n) {
    for (const t in n)
      if (t !== "default") {
        const r = Object.getOwnPropertyDescriptor(n, t);
        Object.defineProperty(
          e,
          t,
          r.get ? r : { enumerable: !0, get: () => n[t] },
        );
      }
  }
  return ((e.default = n), Object.freeze(e));
}
const R = le(V),
  v = le(De),
  Ae = [
    "text/plain",
    "text/markdown",
    "text/csv",
    "text/xml",
    "application/json",
    "application/xml",
    "application/x-ndjson",
    "text/x-json",
  ],
  Pe = [
    "raw.githubusercontent.com",
    "gist.githubusercontent.com",
    "pastebin.com",
    "hastebin.com",
  ],
  Me = [
    ".json",
    ".jsonl",
    ".ndjson",
    ".csv",
    ".tsv",
    ".txt",
    ".md",
    ".markdown",
    ".xml",
    ".yaml",
    ".yml",
    ".log",
  ],
  _e = {
    json: "json",
    jsonl: "json",
    ndjson: "json",
    csv: "csv",
    tsv: "csv",
    xml: "xml",
    md: "markdown",
    markdown: "markdown",
    txt: "",
    log: "",
    yaml: "yaml",
    yml: "yaml",
    toml: "toml",
    ini: "ini",
    conf: "ini",
    sh: "bash",
    bash: "bash",
    zsh: "bash",
    py: "python",
    js: "javascript",
    ts: "typescript",
    tsx: "tsx",
    jsx: "jsx",
    rs: "rust",
    go: "go",
    rb: "ruby",
    sql: "sql",
  };
function K(n) {
  if (!n) return !1;
  const e = n.toLowerCase();
  return Ae.some((t) => e.includes(t));
}
function X(n) {
  try {
    const e = new URL(n),
      t = e.hostname.toLowerCase();
    if (Pe.some((o) => t === o || t.endsWith("." + o))) return !0;
    const r = e.pathname.toLowerCase();
    return !!Me.some((o) => r.endsWith(o));
  } catch {
    return !1;
  }
}
function de(n) {
  const e = n?.split(";")[0]?.trim().toLowerCase();
  return e === "text/html" || e === "application/xhtml+xml";
}
function ue(n, e) {
  return de(n) ? !1 : K(n) || X(e);
}
function Ue(n) {
  let e = n;
  if (n.includes("/") || n.includes("."))
    try {
      e = new URL(n).pathname.split(".").pop()?.toLowerCase() || "";
    } catch {
      e = n.split(".").pop()?.toLowerCase() || "";
    }
  return _e[e] ?? null;
}
async function fe(n) {
  const {
    session: e,
    url: t,
    logPrefix: r = "[plainTextUtils]",
    timeout: o = 3e4,
  } = n;
  let a;
  if (e)
    try {
      const l = await e.cookies.get({ url: t });
      l.length > 0 &&
        ((a = l.map((u) => `${u.name}=${u.value}`).join("; ")),
        c.logger.info(
          `${r} Forwarding ${l.length} cookies for authenticated fetch`,
          { url: S.getSafeUrlLogMetadata(t) },
        ));
    } catch (l) {
      c.logger.warn(`${r} Failed to get cookies, proceeding without auth`, {
        url: S.getSafeUrlLogMetadata(t),
        error: l,
      });
    }
  const i = new AbortController(),
    s = setTimeout(() => i.abort(), o),
    d = { signal: i.signal };
  a && (d.headers = { Cookie: a });
  try {
    const l = await fetch(t, d);
    if ((clearTimeout(s), !l.ok))
      throw new Error(`HTTP ${l.status}: ${l.statusText}`);
    return { text: await l.text(), authenticated: !!a };
  } catch (l) {
    throw (
      clearTimeout(s),
      l instanceof Error && l.name === "AbortError"
        ? new Error(`Request timeout after ${o}ms`)
        : l
    );
  }
}
async function Re(n, e, t) {
  let r;
  const o = e.getActiveTab();
  let a;
  if (o) {
    const d = o.getLayer()?.getWebContents();
    if (((a = d && !d.isDestroyed() ? d.session : void 0), a))
      try {
        const l = await a.cookies.get({ url: n });
        (l.length > 0 && (r = l.map((u) => `${u.name}=${u.value}`).join("; ")),
          console.log("[userCookieFetch]", {
            url: S.getSafeUrlLogMetadata(n),
            cookieCount: l.length,
            hasCookieHeader: !!r,
          }));
      } catch {
        console.log(
          "[userCookieFetch] Cookie error for:",
          S.formatUrlForLog(n),
        );
      }
    else
      console.log(
        "[userCookieFetch] No session available for:",
        S.formatUrlForLog(n),
      );
  } else
    console.log("[userCookieFetch] No active tab for:", S.formatUrlForLog(n));
  if (a)
    try {
      const d = await a.fetch(n, { signal: t });
      return (
        console.log("[userCookieFetch] session.fetch response:", {
          initialUrl: S.getSafeUrlLogMetadata(n),
          finalUrl: S.getSafeUrlLogMetadata(d.url),
          redirected: d.redirected,
          status: d.status,
        }),
        d
      );
    } catch (d) {
      if (t?.aborted) throw d;
      const l = d instanceof Error ? d.message : "unknown";
      console.log(
        "[userCookieFetch] session.fetch failed, falling back to fetch:",
        { url: S.getSafeUrlLogMetadata(n), reason: l },
      );
    }
  const i = {
      ...(r ? { headers: { Cookie: r } } : {}),
      ...(t ? { signal: t } : {}),
    },
    s = await fetch(n, i);
  return (
    console.log("[userCookieFetch] fallback fetch response:", {
      initialUrl: S.getSafeUrlLogMetadata(n),
      finalUrl: S.getSafeUrlLogMetadata(s.url),
      redirected: s.redirected,
      status: s.status,
    }),
    s
  );
}
function me(n, e) {
  const t = Ue(e);
  return t
    ? `\`\`\`${t}
${n}
\`\`\``
    : n;
}
function he(n, e) {
  if (n.length <= e) return n;
  const t = c.safeSlice(n, 0, e),
    r = n.length - t.length;
  return (
    t +
    `

...[${r} chars truncated]`
  );
}
class ge {
  async canHandle(e) {
    try {
      const t = e.getLayer(),
        r = await c.safeExecuteJavaScriptInLayer(
          t,
          `
        document.contentType === 'application/pdf' ||
        document.querySelector('embed[type="application/pdf"]') !== null ||
        window.location.href.toLowerCase().endsWith('.pdf')
      `,
        ),
        o = r.ok ? r.value : !1;
      return (
        c.logger.info("[PDFContextStrategy] canHandle check:", {
          url: S.getSafeUrlLogDetail(e.url),
          isPdf: o,
          contentType: e.contentType,
        }),
        o === !0
      );
    } catch (t) {
      return (
        c.logger.error("[PDFContextStrategy] Error checking PDF status:", t),
        !1
      );
    }
  }
  async extractContext(e, t) {
    const r = await this.getPDFAsBase64(e);
    let o = 0;
    if (r)
      try {
        ((o = (await c.estimatePdfTokens(r)).pageCount),
          c.logger.info(`[PDFContextStrategy] PDF has ${o} pages`));
      } catch (i) {
        c.logger.warn("[PDFContextStrategy] Failed to get page count:", i);
      }
    let a;
    if (r)
      try {
        ((a = (
          await new c.StorageService(
            e.profileService.getCurrentProfile().accountId,
          ).uploadFile({
            fileData: r,
            fileExtension: "pdf",
            contentType: "application/pdf",
          })
        ).objectKey),
          c.logger.info(
            `[PDFContextStrategy] Uploaded PDF to S3: ${a} (tab ${e.id})`,
          ));
      } catch (i) {
        c.logger.error("[PDFContextStrategy] Failed to upload PDF to S3:", i);
      }
    return {
      id: e.id,
      displayUrl: t,
      title: e.title,
      rawUrl: e.url,
      type: "pdf",
      data: r || "",
      objectKey: a,
      pageCount: o,
      media_type: "application/pdf",
      collapseState: { isFullyCollapsed: !1, wasAutoCollapsed: !1 },
    };
  }
  async getPDFAsBase64(e) {
    const t = e.url;
    if (
      (c.logger.info("[PDFContextStrategy] getPDFAsBase64 starting:", {
        url: S.getSafeUrlLogDetail(t),
      }),
      t.startsWith("file://"))
    )
      try {
        const r = ce.fileURLToPath(t),
          o = await ke.promises.readFile(r),
          a = o.toString("base64");
        return (
          c.logger.info(
            `[PDFContextStrategy] Read local PDF file: ${r} (${o.length} bytes)`,
          ),
          a
        );
      } catch (r) {
        return (
          c.logger.error(
            "[PDFContextStrategy] Error reading local PDF file:",
            r,
          ),
          null
        );
      }
    try {
      const r = e.getLayer();
      c.logger.info(
        "[PDFContextStrategy] Attempting to fetch PDF via renderer...",
        { url: S.getSafeUrlLogDetail(t) },
      );
      const o = await c.safeExecuteJavaScriptInLayer(
          r,
          `
        (async function() {
          try {
            console.log('[PDFContextStrategy] Starting PDF extraction in renderer');
            
            // First try to get from embed element
            const pdfEmbed = document.querySelector('embed[type="application/pdf"]');
            console.log('[PDFContextStrategy] Embed found:', !!pdfEmbed);
            
            if (pdfEmbed && pdfEmbed.src.startsWith('data:application/pdf;base64,')) {
              console.log('[PDFContextStrategy] Using embed src');
              return pdfEmbed.src.split(',')[1];
            }

            // If not found in embed, fetch the PDF directly
            console.log('[PDFContextStrategy] Fetching URL:', window.location.href);
            const response = await fetch(window.location.href);
            console.log('[PDFContextStrategy] Fetch response:', response.status, response.headers.get('content-type'));
            
            const blob = await response.blob();
            console.log('[PDFContextStrategy] Blob type:', blob.type, 'size:', blob.size);
            
            if (blob.type === 'application/pdf') {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                  console.log('[PDFContextStrategy] FileReader loaded, result length:', reader.result?.length);
                  resolve(reader.result.split(',')[1]);
                };
                reader.onerror = (e) => {
                  console.error('[PDFContextStrategy] FileReader error:', e);
                  reject(e);
                };
                reader.readAsDataURL(blob);
              });
            }
            console.log('[PDFContextStrategy] Blob is not PDF type:', blob.type);
            return null;
          } catch (error) {
            console.error('[PDFContextStrategy] Error getting PDF as base64:', error);
            return null;
          }
        })()
      `,
        ),
        a = o.ok ? o.value : null;
      return (
        c.logger.info("[PDFContextStrategy] PDF extraction result:", {
          url: S.getSafeUrlLogDetail(t),
          hasBase64: !!a,
          base64Length: a?.length ?? 0,
        }),
        a
      );
    } catch (r) {
      return (
        c.logger.error(
          "[PDFContextStrategy] Error executing PDF base64 extraction:",
          r,
        ),
        null
      );
    }
  }
}
const J = 100;
class I {
  static instance;
  API_BASE_URL = `${c.config.app.apiUrl}/api/chat`;
  requestQueue = [];
  isProcessingQueue = !1;
  lastRequestTime = 0;
  static getInstance() {
    return (I.instance || (I.instance = new I()), I.instance);
  }
  isYouTubeUrl(e) {
    return /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(?:-nocookie)?\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|live\/|v\/)?)([\w-]+)(\S+)?$/.test(
      e,
    );
  }
  extractYouTubeId(e) {
    try {
      const t = ce.parse(e, !0);
      if (t.hostname === "youtu.be") return t.pathname?.substring(1);
      if (t.query.v) return t.query.v;
      const r = t.pathname?.match(/\/embed\/([a-zA-Z0-9_-]+)/);
      if (r) return r[1];
    } catch {}
  }
  async extractTranscript(e, t) {
    if (!this.isYouTubeUrl(e)) throw new Error("Invalid YouTube URL");
    return new Promise((r, o) => {
      (this.requestQueue.push({ url: e, resolve: r, reject: o, options: t }),
        c.logger.info(
          `[YouTubeTranscriptService] Queued request for ${S.formatUrlForLog(e)} (queue size: ${this.requestQueue.length})`,
        ),
        this.processQueue());
    });
  }
  async processQueue() {
    if (!this.isProcessingQueue) {
      for (this.isProcessingQueue = !0; this.requestQueue.length > 0; ) {
        const e = this.requestQueue.shift();
        if (e)
          try {
            const t = Date.now() - this.lastRequestTime;
            if (t < J && this.lastRequestTime > 0) {
              const o = J - t;
              (c.logger.info(
                `[YouTubeTranscriptService] Rate limiting: waiting ${o}ms before next request`,
              ),
                await new Promise((a) => setTimeout(a, o)));
            }
            this.lastRequestTime = Date.now();
            const r = await this.extractTranscriptViaApi(e.url, e.options);
            e.resolve(r);
          } catch (t) {
            e.reject(t instanceof Error ? t : new Error(String(t)));
          }
      }
      this.isProcessingQueue = !1;
    }
  }
  async extractTranscriptViaApi(e, t) {
    try {
      c.logger.info(
        `[YouTubeTranscriptService] Using API (Supadata) for ${S.formatUrlForLog(e)}${t?.skipMetadata ? " (skip metadata)" : ""}`,
      );
      const r = { url: e, skipMetadata: t?.skipMetadata },
        o = await c.authFetch(`${this.API_BASE_URL}/youtube-transcript`, {
          accountId: t?.accountId ?? null,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(r),
        });
      if (!o.ok) {
        const s = await o.text();
        throw new Error(`API error (${o.status}): ${s}`);
      }
      const a = await o.json();
      c.logger.info(
        `[YouTubeTranscriptService] Transcript received via ${a.source || "api"}${a.cached ? " (cached)" : ""}, length: ${a.transcript.length}`,
      );
      const i = {
        url: e,
        title: a.metadata?.title,
        thumbnail: a.metadata?.thumbnail,
      };
      return { transcript: a.transcript, metadata: i };
    } catch (r) {
      return (
        c.logger.error("[YouTubeTranscriptService] API extraction failed:", r),
        {
          transcript: `--- Transcript extraction failed for ${e}: ${r instanceof Error ? r.message : String(r)} ---`,
          metadata: { url: e, title: void 0, thumbnail: void 0 },
        }
      );
    }
  }
  async extractMultipleTranscripts(e, t) {
    return Promise.all(
      e.map(async (r) => {
        try {
          return await this.extractTranscript(r, { accountId: t });
        } catch (o) {
          return (
            c.logger.error("YouTube transcript flow failed", o),
            {
              transcript: `--- Transcript failed for ${r}: ${o instanceof Error ? o.message : String(o)} ---`,
              metadata: { url: r, title: void 0, thumbnail: void 0 },
            }
          );
        }
      }),
    );
  }
}
const W = 2e3,
  $e = 5e3;
function Z(n, e, t) {
  return {
    networkIdleThreshold: 2,
    networkIdleTimeMs: 500,
    domStableTimeMs: 400,
    minWaitTimeMs: W,
    networkBusyFallbackMs: t === "linkedin-profile" ? W : $e,
    timeoutMs: n,
    abortSignal: e,
  };
}
const We = 45e3,
  ee = 500,
  k =
    "LinkedIn profile sections did not finish loading. Open the profile to continue reading.";
function N(n) {
  const e = URL.parse(n);
  return !e ||
    e.protocol !== "https:" ||
    !(e.hostname === "linkedin.com" || e.hostname.endsWith(".linkedin.com"))
    ? null
    : e;
}
function O(n) {
  const e = N(n);
  return !e || !/^\/in\/[^/]+\/?$/.test(e.pathname) ? null : e;
}
function Oe(n) {
  const e = N(n);
  return !e ||
    e.pathname.startsWith("/voyager/api/li/track") ||
    e.pathname.startsWith("/voyager/api/clientSystemTracking")
    ? !1
    : e.pathname === "/flagship-web/rsc-action/actions/component" ||
        e.pathname.startsWith("/voyager/api/");
}
const qe = v.object({
    page: v.string(),
    hasProfileContent: v.boolean(),
    top: v.pipe(v.number(), v.finite()),
    left: v.pipe(v.number(), v.finite()),
    height: v.pipe(v.number(), v.finite()),
    viewport: v.pipe(v.number(), v.finite()),
    x: v.pipe(v.number(), v.finite()),
    y: v.pipe(v.number(), v.finite()),
    elements: v.number(),
    textLength: v.number(),
    loading: v.boolean(),
  }),
  pe = `
  const main = document.querySelector('main, [role="main"]');
  function scrollRootFor(element) {
    while (element && !(element.clientHeight > 0 &&
      element.scrollHeight > element.clientHeight + 1 &&
      /auto|scroll/.test(getComputedStyle(element).overflowY))) {
      element = element.parentElement;
    }
    return element || document.scrollingElement;
  }
  const scroll = scrollRootFor(main);
`,
  Ne = `(() => {
  ${pe}
  const bounds = main?.getBoundingClientRect();
  const left = Math.max(0, bounds?.left ?? 0);
  const right = Math.min(innerWidth, bounds?.right ?? innerWidth);
  const top = Math.max(0, bounds?.top ?? 0);
  const bottom = Math.min(innerHeight, bounds?.bottom ?? innerHeight);
  let x = (left + right) / 2;
  let y = (top + bottom) / 2;
  // Vary the origin by at most 12 CSS pixels per axis, within the visible main.
  // An overlay or nested scroller must not redirect the gesture.
  const candidateX = Math.max(left + 1, Math.min(right - 1, x + (Math.random() * 2 - 1) * 12));
  const candidateY = Math.max(top + 1, Math.min(bottom - 1, y + (Math.random() * 2 - 1) * 12));
  if (scrollRootFor(document.elementFromPoint(candidateX, candidateY)) === scroll) {
    x = candidateX;
    y = candidateY;
  }
  const loading = main && (main.getAttribute('aria-busy') === 'true' || Array.from(main.querySelectorAll(
    '[aria-busy="true"], [role="progressbar"], [class*="skeleton"], [class*="shimmer"], .artdeco-loader'
  )).some(element => {
    const style = getComputedStyle(element);
    const bounds = element.getBoundingClientRect();
    const viewport = main.getBoundingClientRect();
    return bounds.bottom > Math.max(0, viewport.top) &&
      bounds.top < Math.min(innerHeight, viewport.bottom) && style.display !== 'none' &&
      style.visibility !== 'hidden' && style.opacity !== '0';
  }));
  return {
    page: location.origin + location.pathname,
    hasProfileContent: !!main && Array.from(main.querySelectorAll(
      'h1, h2, h3, [role="heading"]'
    )).some(element => !!element.textContent?.trim()),
    top: scroll?.scrollTop ?? 0,
    left: scroll?.scrollLeft ?? 0,
    height: scroll?.scrollHeight ?? 0,
    viewport: scroll?.clientHeight ?? 0,
    x,
    y,
    elements: main?.getElementsByTagName('*').length ?? 0,
    textLength: main?.textContent?.length ?? 0,
    loading: !!loading
  };
})()`;
async function te(n, e) {
  const t = O(n.url);
  if (!t) return;
  e?.throwIfAborted();
  const r = c.unsafeGetLiveLayerWebContents(n.getLayer());
  if (!r.ok) throw new Error(k);
  const o = r.value,
    a = new AbortController(),
    i = e ? AbortSignal.any([e, a.signal]) : a.signal,
    s = setTimeout(() => a.abort(new Error(k)), We),
    d = Promise.withResolvers(),
    l = () => d.reject(i.reason);
  i.addEventListener("abort", l, { once: !0 });
  const u = new Map();
  let p = Date.now(),
    m = !1,
    f = !1,
    w,
    y;
  const h = (g, x, b) => {
      if (b.requestId) {
        if (
          x === "Network.requestWillBeSent" &&
          (b.type === "Fetch" || b.type === "XHR") &&
          b.request?.url &&
          Oe(b.request.url)
        )
          (u.set(b.requestId, "requested"), (p = Date.now()));
        else if (u.has(b.requestId)) {
          if (x === "Network.responseReceived") {
            const F = b.response?.status ?? 0;
            (F >= 400 && (m = !0),
              F >= 200 && F < 300 && u.set(b.requestId, "responded"));
          }
          (x === "Network.loadingFinished" || x === "Network.loadingFailed") &&
            (x === "Network.loadingFailed" &&
              (!b.canceled || u.get(b.requestId) !== "responded") &&
              (m = !0),
            u.delete(b.requestId),
            (p = Date.now()));
        }
      }
    },
    T = async () => {
      i.throwIfAborted();
      const g = await Promise.race([
        c.safeExecuteJavaScriptInWebContents(o, Ne),
        d.promise,
      ]);
      if ((i.throwIfAborted(), !g.ok)) throw new Error(k);
      return v.parse(qe, g.value);
    };
  try {
    const g = c.safeWithWebContents(o, (E) => {
      const U = E.debugger.isAttached();
      return (U || E.debugger.attach("1.3"), E.debugger.on("message", h), !U);
    });
    if (!g.ok) throw new Error(k);
    if (
      ((f = g.value),
      !(
        await Promise.race([
          c.safeSendWebContentsDebuggerCommand(o, "Network.enable"),
          d.promise,
        ])
      ).ok)
    )
      throw new Error(k);
    w = await T();
    let b = w,
      F = Date.now(),
      C = Date.now(),
      D;
    const P = t.origin + t.pathname;
    for (;;) {
      i.throwIfAborted();
      const E = await T();
      if (E.page !== P) {
        if (O(E.page)) throw new Error(k);
        break;
      }
      if (m) throw new Error(k);
      if (D !== void 0 && E.top <= D + 0.5) throw new Error(k);
      ((D = void 0),
        (E.height !== b.height ||
          E.elements !== b.elements ||
          E.textLength !== b.textLength ||
          E.loading !== b.loading) &&
          (F = Date.now()),
        (b = E));
      const U = Date.now() - Math.max(F, p) >= ee;
      if (
        E.hasProfileContent &&
        E.viewport > 0 &&
        !E.loading &&
        u.size === 0 &&
        U
      ) {
        if (E.top + E.viewport < E.height - 2) {
          const Te = Math.min(E.viewport * 0.7, E.height - E.viewport - E.top);
          if (
            !(
              await Promise.race([
                c.safeSendWebContentsDebuggerCommand(
                  o,
                  "Input.synthesizeScrollGesture",
                  {
                    x: E.x,
                    y: E.y,
                    yDistance: -Te,
                    speed: 1400,
                    gestureSourceType: "mouse",
                    preventFling: !0,
                  },
                ),
                d.promise,
              ])
            ).ok
          )
            throw new Error(k);
          ((D = E.top), (C = Date.now()));
        } else if (Date.now() - Math.max(C, p) >= W) break;
      }
      await Ie.setTimeout(ee, void 0, { signal: i });
    }
  } catch (g) {
    throw (i.throwIfAborted(), g);
  } finally {
    if (
      (clearTimeout(s), i.removeEventListener("abort", l), !o.isDestroyed())
    ) {
      o.debugger.removeListener("message", h);
      try {
        w &&
          !(
            await c
              .withTimeout(
                c.safeExecuteJavaScriptInWebContents(
                  o,
                  `(() => {
              if (location.origin + location.pathname !== ${JSON.stringify(w.page)}) return;
              ${pe}
              scroll?.scrollTo({ top: ${w.top}, left: ${w.left}, behavior: 'instant' });
              // Scroll position updates before the compositor paints it. Let
              // one frame paint before a caller captures a screenshot.
              return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
            })()`,
                ),
                1e3,
                k,
              )
              .catch(() => ({ ok: !1 }))
          ).ok &&
          !i.aborted &&
          (y = new Error(k));
      } finally {
        f && o.debugger.isAttached() && o.debugger.detach();
      }
    }
  }
  if (y) throw y;
}
function He(n, e) {
  const t = n.elapsedMs >= e.minWaitTimeMs,
    r = n.networkIdleForMs >= e.networkIdleTimeMs,
    o = n.domIsStable || n.elapsedMs >= e.timeoutMs / 2;
  return t && r && o;
}
const Be = 5e3;
async function je(n) {
  let e;
  const t = new Promise((r, o) => {
    e = setTimeout(() => {
      o(new Error("Timed out enabling debugger network tracking"));
    }, Be);
  });
  try {
    await Promise.race([
      c.safeSendWebContentsDebuggerCommand(n, "Network.enable").then((r) => {
        if (!r.ok) throw new Error(`WebContents is ${r.error}`);
      }),
      t,
    ]);
  } finally {
    e && clearTimeout(e);
  }
}
class M {
  constructor(e) {
    this.tab = e;
  }
  inFlightRequests = new Map();
  async waitForReady(e = {}) {
    const {
        networkIdleThreshold: t = 2,
        networkIdleTimeMs: r = 500,
        domStableTimeMs: o = 400,
        minWaitTimeMs: a = 300,
        networkBusyFallbackMs: i,
        timeoutMs: s = 15e3,
        abortSignal: d,
      } = e,
      l = Date.now();
    let u = null,
      p = !1;
    if (d?.aborted) return { success: !1, waitedMs: 0, reason: "aborted" };
    try {
      const m = this.tab.getLayer();
      if (!m || m.isDestroyed())
        return { success: !1, waitedMs: 0, reason: "error" };
      const f = c.unsafeGetLiveLayerWebContents(m);
      if (!f.ok) return { success: !1, waitedMs: 0, reason: "error" };
      const w = f.value;
      return w.isDestroyed()
        ? { success: !1, waitedMs: 0, reason: "error" }
        : ((u = w),
          w.debugger.isAttached() || (w.debugger.attach("1.3"), (p = !0)),
          await je(w),
          await this.runWaitLoop(w, {
            networkIdleThreshold: t,
            networkIdleTimeMs: r,
            domStableTimeMs: o,
            minWaitTimeMs: a,
            networkBusyFallbackMs: i,
            timeoutMs: s,
            abortSignal: d,
            startTime: l,
          }));
    } catch (m) {
      const f = Date.now() - l;
      return (
        c.chatExecutionLogger.error(
          `[PageReadinessWaiter] Error for tab ${this.tab.id}:`,
          m,
          { waitedMs: f },
        ),
        { success: !1, waitedMs: f, reason: "error" }
      );
    } finally {
      u && this.cleanup(u, p);
    }
  }
  async runWaitLoop(e, t) {
    const {
      networkIdleThreshold: r,
      networkIdleTimeMs: o,
      domStableTimeMs: a,
      minWaitTimeMs: i,
      networkBusyFallbackMs: s,
      timeoutMs: d,
      abortSignal: l,
      startTime: u,
    } = t;
    return new Promise((p) => {
      let m = !1,
        f = null,
        w = !1,
        y = null,
        h = null,
        T = null;
      const g = () => {
          !T ||
            e.isDestroyed() ||
            (e.debugger.removeListener("message", T), (T = null));
        },
        x = (b) => {
          if (m) return;
          ((m = !0),
            g(),
            y && (clearInterval(y), (y = null)),
            h && (clearTimeout(h), (h = null)));
          const F = Date.now() - u;
          p({ success: b === "ready", waitedMs: F, reason: b });
        };
      if (e.isDestroyed()) {
        const b = Date.now() - u;
        p({ success: !1, waitedMs: b, reason: "error" });
        return;
      }
      (l && l.addEventListener("abort", () => x("aborted"), { once: !0 }),
        (h = setTimeout(() => {
          (c.chatExecutionLogger.warn(
            `[PageReadinessWaiter] Timeout for tab ${this.tab.id} after ${d}ms (${this.inFlightRequests.size} requests pending)`,
          ),
            x("timeout"));
        }, d)),
        (T = (b, F, C) => {
          if (F === "Network.requestWillBeSent") {
            if (!C.requestId || !C.request?.url) return;
            const D = this.isPersistentConnection(C);
            !D &&
              !C.request.url.startsWith("data:") &&
              (this.inFlightRequests.set(C.requestId, {
                id: C.requestId,
                url: C.request.url,
                type: C.type,
                isPersistent: D,
              }),
              (f = null));
          } else if (
            F === "Network.loadingFinished" ||
            F === "Network.loadingFailed"
          ) {
            if (!C.requestId) return;
            this.inFlightRequests.delete(C.requestId);
          }
        }),
        e.debugger.on("message", T),
        this.setupDomStabilityCheck(e, a)
          .then(() => {
            w = !0;
          })
          .catch(() => {
            w = !0;
          }),
        (y = setInterval(() => {
          if (m) return;
          const b = Date.now(),
            F = b - u,
            C = this.inFlightRequests.size;
          C <= r ? f === null && (f = b) : (f = null);
          const D = f ? b - f : 0,
            P = !e.isDestroyed() && !e.isLoadingMainFrame(),
            E = typeof s == "number" && F >= s && w && P;
          if (
            He(
              { elapsedMs: F, networkIdleForMs: D, domIsStable: w },
              { networkIdleTimeMs: o, minWaitTimeMs: i, timeoutMs: d },
            )
          ) {
            x("ready");
            return;
          }
          E &&
            (c.chatExecutionLogger.debug(
              `[PageReadinessWaiter] Using DOM-stable fallback for tab ${this.tab.id} after ${F}ms (${C} requests pending)`,
            ),
            x("ready"));
        }, 100)));
    });
  }
  isPersistentConnection(e) {
    const t = e.request?.url || "",
      r = e.type || "";
    return !!(
      r === "WebSocket" ||
      r === "EventSource" ||
      (t.includes("/events") &&
        e.request?.headers?.Accept?.includes("text/event-stream")) ||
      e.request?.headers?.Accept === "text/event-stream" ||
      t.includes("/poll") ||
      t.includes("/long-poll") ||
      t.includes("/comet") ||
      [
        "/analytics",
        "/beacon",
        "/heartbeat",
        "/ping",
        "google-analytics.com",
        "googletagmanager.com",
        "facebook.com/tr",
        "segment.io",
        "mixpanel.com",
      ].some((a) => t.includes(a))
    );
  }
  async setupDomStabilityCheck(e, t) {
    if (e.isDestroyed()) return;
    const r = `
      new Promise((resolve) => {
        let debounceTimer;
        const stableTime = ${t};
        
        const observer = new MutationObserver(() => {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            observer.disconnect();
            resolve();
          }, stableTime);
        });
        
        const target = document.querySelector('#app, #root, main, [role="main"]') || document.body;
        if (target) {
          observer.observe(target, { 
            childList: true, 
            subtree: true,
            // Ignore attribute changes (often just animations/styles)
            attributes: false
          });
        }
        
        // Initial check - if DOM is already stable
        debounceTimer = setTimeout(() => {
          observer.disconnect();
          resolve();
        }, stableTime);
        
        // Safety timeout
        setTimeout(() => {
          observer.disconnect();
          resolve();
        }, 10000);
      });
    `;
    try {
      const o = await c.safeExecuteJavaScriptInWebContents(e, r);
      return o.ok ? o.value : void 0;
    } catch {
      return;
    }
  }
  cleanup(e, t) {
    if (!e.isDestroyed() && t && e.debugger.isAttached())
      try {
        e.debugger.detach();
      } catch {}
    this.inFlightRequests.clear();
  }
}
async function re(n, e) {
  const t = G.assertSafeLLMUrl(n);
  if (!t.ok) throw new Error(t.reason);
  e.signal?.throwIfAborted();
  const r = se.net.request({
    url: t.normalized,
    session: e.session,
    method: e.method,
    credentials: "include",
    redirect: "manual",
  });
  return new Promise((o, a) => {
    let i = !1,
      s = t.normalized;
    const d = [],
      l = setTimeout(
        () =>
          p(
            new Error(
              `Page request timed out after ${e.timeoutMs / 1e3} seconds`,
            ),
          ),
        e.timeoutMs,
      ),
      u = () => {
        (clearTimeout(l), e.signal?.removeEventListener("abort", m));
      },
      p = (f) => {
        i || ((i = !0), u(), (d.length = 0), a(f), r.abort());
      },
      m = () => {
        p(new DOMException("Page request aborted", "AbortError"));
      };
    if (
      (r.on("error", p),
      r.on("abort", m),
      r.on("redirect", (f, w, y) => {
        if (i) return;
        const h = G.assertSafeLLMUrl(y);
        if (!h.ok) {
          p(new Error(h.reason));
          return;
        }
        ((s = h.normalized), r.followRedirect());
      }),
      r.on("response", (f) => {
        if (
          (f.on("error", p),
          f.on("aborted", () => p(new Error("Page response was interrupted"))),
          !i)
        ) {
          if (f.statusCode < 200 || f.statusCode >= 300) {
            p(new Error(`Page returned HTTP ${f.statusCode}`));
            return;
          }
          (f.on("data", (w) => {
            !i && e.method !== "HEAD" && d.push(w);
          }),
            f.on("end", () => {
              if (i) return;
              ((i = !0), u());
              const w = Object.fromEntries(
                Object.entries(f.headers).map(([y, h]) => [
                  y.toLowerCase(),
                  Array.isArray(h) ? h : [h],
                ]),
              );
              (o({ url: s, headers: w, body: Buffer.concat(d) }),
                (d.length = 0));
            }));
        }
      }),
      e.signal?.addEventListener("abort", m, { once: !0 }),
      e.signal?.aborted)
    ) {
      m();
      return;
    }
    r.end();
  });
}
const Ye = "background-extraction";
function ze(n) {
  return {
    setActive: !1,
    onlyMarkdownNeeded: !(n?.includeScreenshot === !0),
    useBrowserAgentSurface: !1,
    tabSurfaceIntent: Ye,
  };
}
function Ve(n) {
  const e =
      typeof n.includeScreenshot == "boolean"
        ? { includeScreenshot: n.includeScreenshot }
        : void 0,
    t = ze(e),
    r = {
      tabType: "website",
      url: n.url,
      isAIControlledTab: !0,
      isBrowserAgentControlledTab: null,
      onlyMarkdownNeeded: t.onlyMarkdownNeeded,
      setActive: t.setActive,
      openedByHuman: !1,
      visitType: S.VisitType.IGNORE,
      tabSurfaceIntent: t.tabSurfaceIntent,
    };
  return (typeof n.sessionId == "string" && (r.sessionId = n.sessionId), r);
}
function B(n) {
  const e = n
    .replace(/\\/g, "/")
    .split("/")
    .pop()
    ?.replace(/[\u0000-\u001f\u007f]/g, "")
    .trim();
  return !e || e === "." || e === ".." ? null : e;
}
function ne(n) {
  if (n.length < 2) return n;
  const e = n[0],
    t = n[n.length - 1];
  return (e === '"' && t === '"') || (e === "'" && t === "'")
    ? n.slice(1, -1)
    : n;
}
function j(n) {
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}
function Y(n) {
  const e = n.toLowerCase(),
    t = e.lastIndexOf(".");
  if (t === -1) return null;
  const o = e.slice(t + 1).split(/[?#]/)[0];
  return o ? _.mimeFromExt(o) : null;
}
function we(n) {
  return n?.split(";")[0]?.trim().toLowerCase() || "";
}
function ye(n) {
  if (!n) return null;
  const e = n.match(/filename\*\s*=\s*([^;]+)/i);
  if (e?.[1]) {
    const r = ne(e[1].trim()),
      a = r.match(/^[^']*'[^']*'(.*)$/)?.[1] ?? r,
      i = j(a),
      s = B(i);
    if (s) return s;
  }
  const t = n.match(/filename\s*=\s*("(?:[^"\\]|\\.)*"|[^;]+)/i);
  if (t?.[1]) {
    const r = ne(t[1].trim()).replace(/\\"/g, '"'),
      o = j(r),
      a = B(o);
    if (a) return a;
  }
  return null;
}
function Ke(n) {
  return (
    c.createAttachmentSource(n) ?? {
      attachmentType: "document",
      mediaType: "text/plain",
    }
  );
}
function be(n, e = "file") {
  try {
    const t = new URL(n),
      r = t.pathname.substring(t.pathname.lastIndexOf("/") + 1);
    return B(j(r)) || e || e;
  } catch {
    return e;
  }
}
const oe = [
    "attachment_pdf",
    "attachment_image",
    "attachment_document",
    "attachment_csv",
    "attachment_excel",
    "attachment_word",
    "attachment_powerpoint",
    "attachment_audio",
  ],
  Xe = new Set(["attachment_document", "attachment_csv"]);
function ae(n) {
  return n === "text/html" || n === "application/xhtml+xml";
}
function q(n) {
  const e = n?.split(";")[0]?.trim().toLowerCase() ?? "";
  return (
    !e ||
    e === "application/octet-stream" ||
    e === "binary/octet-stream" ||
    e === "application/download"
  );
}
function Qe(n) {
  return V.extname(n).replace(/^\./, "").toLowerCase();
}
function ie(n, e, t) {
  const r = c.getHandler(n)?.fileTypes;
  return r
    ? !!(
        r.mimeTypes.includes(t) ||
        r.mimePatterns?.some((o) => o.test(t)) ||
        (e && r.extensions.includes(e))
      )
    : !1;
}
function z(n, e) {
  const t = e.split(";")[0]?.trim().toLowerCase() ?? "",
    r = Qe(n),
    o = c.getContextSourceType("attachment", t);
  if (oe.includes(o) && ie(o, r, t)) return o;
  for (const a of oe) if (ie(a, r, t)) return a;
  return null;
}
function H(n) {
  const e = n.contentDisposition ?? "",
    t = e.toLowerCase().includes("attachment"),
    r = ye(e),
    o = be(n.url, "download"),
    a = we(n.contentType),
    i = r ? Y(r) : null,
    s = Y(n.url);
  let d = a;
  ((q(d) || (t && ae(d))) && (d = i ?? s ?? d),
    !d && i && (d = i),
    !d && s && (d = s),
    d || (d = "application/octet-stream"));
  const l = _.ensureFilenameExtensionFromMime(r ?? o, d),
    u = V.extname(l).toLowerCase(),
    p = u ? (_.mimeFromExt(u.slice(1)) ?? "") : "",
    m = z(l, d) ?? z(l, p);
  return m
    ? t
      ? {
          filename: l,
          mimeType: d,
          handlerType: m,
          reason: "attachment",
          isAttachment: !0,
        }
      : ae(d)
        ? null
        : Xe.has(m)
          ? q(a) && (i || s)
            ? {
                filename: l,
                mimeType: d,
                handlerType: m,
                reason: "generic-readable",
                isAttachment: !1,
              }
            : null
          : {
              filename: l,
              mimeType: d,
              handlerType: m,
              reason: "inline-readable",
              isAttachment: !1,
            }
    : null;
}
async function Ge(n, e, t, r) {
  if ((t?.throwIfAborted(), n.isDestroyed()))
    throw new Error("Extraction renderer is closed");
  const { width: o, height: a } = e;
  if (o <= 0 || a <= 0)
    throw new Error("Extraction requires a positive viewport");
  if (
    (await c.withTimeout(
      n.loadURL("about:blank"),
      5e3,
      "Extraction bootstrap timed out",
    ),
    t?.throwIfAborted(),
    n.isDestroyed())
  )
    throw new Error("Extraction renderer closed during bootstrap");
  n.debugger.isAttached() || n.debugger.attach("1.3");
  let i;
  const s = async () => {
      if (!n.isDestroyed() && n.debugger.isAttached())
        try {
          await c.withTimeout(
            n.debugger.sendCommand("Emulation.setFocusEmulationEnabled", {
              enabled: !1,
            }),
            5e3,
            "Extraction frame cleanup timed out",
          );
        } finally {
          !n.isDestroyed() &&
            n.debugger.isAttached() &&
            (await c
              .withTimeout(
                n.debugger.sendCommand("Emulation.clearDeviceMetricsOverride"),
                5e3,
                "Extraction viewport cleanup timed out",
              )
              .catch((l) => {
                if (!n.isDestroyed() && n.debugger.isAttached()) throw l;
              }));
        }
    },
    d = () => ((i ??= s()), i);
  try {
    (await c.withTimeout(
      n.debugger.sendCommand("Emulation.setDeviceMetricsOverride", {
        width: o,
        height: a,
        deviceScaleFactor: 0,
        mobile: !1,
      }),
      5e3,
      "Extraction viewport timed out",
    ),
      await c.withTimeout(
        n.debugger.sendCommand("Emulation.setFocusEmulationEnabled", {
          enabled: !0,
        }),
        5e3,
        "Extraction frame activation timed out",
      ),
      t?.throwIfAborted());
    const l = await r(d);
    return (t?.throwIfAborted(), l);
  } finally {
    await d();
  }
}
class $ extends Error {
  constructor(e, t, r, o, a) {
    (super(e),
      (this.errorDescription = t),
      (this.errorUrl = r),
      (this.wasDestroyed = o),
      (this.wasCrashed = a),
      (this.name = "TabLoadError"));
  }
}
class L {
  tabsService;
  cache = new Map();
  youtubeService;
  static DEFAULT_LOAD_TIMEOUT = 2e4;
  static DEFAULT_CACHE_TTL = 120 * 1e3;
  static DEFAULT_MAX_MARKDOWN_LENGTH = 4e5;
  static ABORT_CHECK_INTERVAL = 100;
  static CONTENT_TYPE_TIMEOUT_MS = 7e3;
  static DOWNLOAD_TIMEOUT_MS = 6e4;
  static URL_CAPTURE_TIMEOUT_MS = 9e4;
  constructor(e) {
    ((this.tabsService = e), (this.youtubeService = I.getInstance()));
  }
  isTabFinishedLoading(e) {
    const t = c.safeWithLayerWebContents(
      e.layer,
      (r) => !r.isLoading() && !r.isLoadingMainFrame(),
    );
    return t.ok ? t.value : !1;
  }
  getTabSession(e) {
    const t = c.safeWithLayerWebContents(e.layer, (r) => r.session);
    return t.ok ? t.value : void 0;
  }
  async waitForPageReady(e, t = {}) {
    const { priority: r = "normal", timeout: o, abortSignal: a } = t;
    switch (r) {
      case "fast":
        return this.waitFast(e, { timeout: o ?? 5e3, abortSignal: a });
      case "normal":
        return this.waitNormal(e, { timeout: o ?? 1e4, abortSignal: a });
      case "thorough":
        return this.waitThorough(e, { timeout: o ?? 2e4, abortSignal: a });
      default:
        return this.waitNormal(e, { timeout: o ?? 1e4, abortSignal: a });
    }
  }
  async extract(e, t) {
    switch (e.type) {
      case "tab":
        return this.extractFromTabId(e.tabId, t);
      case "url":
        return (await this.extractFromUrl(e.url, t)).content;
      case "file":
        return this.extractFromFile(e.path, t);
      case "attachment":
        return this.extractFromAttachment(e.attachmentId, e.objectKey, t);
      default:
        throw new Error(`Unknown source type: ${e.type}`);
    }
  }
  async extractFromTabId(e, t) {
    const r = this.tabsService.getTab(e);
    if (!r) throw new Error(`Tab not found: ${e}`);
    return this.extractFromTab(r, t);
  }
  async extractFromTab(e, t, r = "cached") {
    const o = `tab:${e.id}:${e.url}`,
      a = this.getFromCache(o);
    if (a && r === "cached") return a;
    if (r === "fresh") {
      const d = await new M(e).waitForReady(
        Z(
          t?.loadTimeout ?? 15e3,
          t?.abortSignal ?? AbortSignal.timeout(t?.loadTimeout ?? 15e3),
          O(e.url) ? "linkedin-profile" : void 0,
        ),
      );
      if ((t?.abortSignal?.throwIfAborted(), !d.success))
        throw new Error("The page did not become ready after the CAPTCHA.");
      await te(e, t?.abortSignal);
    }
    const i = this.validateTabState(e);
    if (!i.isValid) throw new Error(i.error);
    const s = await this.doExtraction(e, t);
    return (this.setCache(o, s), s);
  }
  async extractFromUrl(e, t) {
    return this.withUrlExtractionPage(e, t, async (r) => ({
      content: r.content,
      tab: null,
      ...(r.downloadedFilePath
        ? { downloadedFilePath: r.downloadedFilePath }
        : {}),
    }));
  }
  async withUrlExtractionPage(e, t, r) {
    const o = this.tabsService.profileService.getCurrentProfile().id,
      a = t?.schedulerOwnerId ?? t?.sessionId ?? "content-extraction";
    t?.onProgress?.({ phase: "queued", url: e });
    const i = await c.agentRateLimiter.acquirePageLease(
      e,
      o,
      a,
      t?.abortSignal,
    );
    let s = null,
      d,
      l = "ended";
    try {
      t?.onProgress?.({ phase: "loading", url: e });
      const u = AbortSignal.timeout(600 * 1e3),
        p = t?.abortSignal ? AbortSignal.any([t.abortSignal, u]) : u;
      (await c.agentRateLimiter.waitForTurn(e, o, p, t?.siteSpacing),
        p.throwIfAborted());
      const m = await this.tabsService.createTabWithRateLimit(
        Ve({
          url: "about:blank",
          includeScreenshot: t?.includeScreenshot,
          sessionId: t?.sessionId,
        }),
        void 0,
        t?.abortSignal,
      );
      ((s = m), (d = m.id), t?.onTabCreated?.(m));
      const f = m.layers.getFullWindowViewBounds(),
        w = await c.safeWithLayerWebContentsAsync(m.layer, (y) =>
          Ge(y, f, t?.abortSignal, async (h) => {
            if (!m.navigateTo(e, S.VisitType.IGNORE))
              throw new Error("Could not start extraction navigation");
            const T = new AbortController(),
              g = t?.abortSignal
                ? AbortSignal.any([t.abortSignal, T.signal])
                : T.signal,
              x = Promise.withResolvers(),
              b = () => {
                x.reject(
                  g.reason instanceof Error
                    ? g.reason
                    : new DOMException("Page extraction aborted", "AbortError"),
                );
              },
              F = setTimeout(
                () =>
                  T.abort(
                    new Error("Page extraction timed out after 90 seconds"),
                  ),
                L.URL_CAPTURE_TIMEOUT_MS,
              );
            g.addEventListener("abort", b, { once: !0 });
            let C;
            try {
              (g.throwIfAborted(),
                (C = await Promise.race([
                  this.extractFromUrlInOwnedPage(e, m, {
                    ...t,
                    abortSignal: g,
                  }),
                  x.promise,
                ])),
                g.throwIfAborted());
            } finally {
              (clearTimeout(F), g.removeEventListener("abort", b), T.abort());
            }
            return r({ ...C, prepareForPresentation: h });
          }),
        );
      if (!w.ok)
        throw new Error("Extraction renderer closed before completion");
      return ((l = "completed"), w.value);
    } finally {
      try {
        s && (await this.finishOwnedExtractionTab(s, l));
      } catch (u) {
        c.logger.error({
          message:
            "[ContentExtractionService] Failed to clean up owned extraction page",
          tabId: d,
          error: u,
        });
      } finally {
        i.release();
      }
    }
  }
  async extractFromUrlInOwnedPage(e, t, r) {
    const o = `url:${e}`,
      a = this.getFromCache(o),
      s = this.isTabFinishedLoading(t)
        ? {
            type: "headers",
            contentType: t.contentType,
            contentDisposition: t.contentDisposition,
            url: t.url,
            statusCode: void 0,
          }
        : await this.waitForContentOrDownload(t, r?.abortSignal);
    if (s.type === "load_failed")
      return (
        c.logger.warn(
          `[ContentExtractionService] Early load failure: ${s.errorDescription}`,
        ),
        {
          content: {
            sourceType: "url",
            sourceId: e,
            handlerType: "tab_web",
            markdown: `Failed to load page: ${s.errorDescription} (URL: ${s.errorUrl})`,
            url: e,
            title: "Load Failed",
            extractedAt: Date.now(),
          },
          tab: t,
        }
      );
    if (s.type === "download")
      return this.handleDownloadExtraction(t, e, s.item, s.savePath, r);
    if (N(e) && s.statusCode === 429)
      throw new Error(
        "LinkedIn has limited page reads. Stop reading LinkedIn for now.",
      );
    if (s.statusCode !== void 0 && s.statusCode > 599)
      throw new Error(`Page returned HTTP ${s.statusCode}`);
    let d = H({
      url: s.url ?? t.url ?? e,
      contentType: s.contentType ?? t.contentType,
      contentDisposition: s.contentDisposition ?? t.contentDisposition,
    });
    !d &&
      q(s.contentType ?? t.contentType) &&
      (d = await this.resolveUrlFileHintFromHead(t, e, r));
    let l;
    if (d) {
      const f = await this.tryDirectFileExtraction(t, e, d, r);
      if (f === "html") l = "text/html";
      else if (f) return f;
    }
    if (s.type === "attachment_headers") {
      await this.closeExtractionTab(t);
      const f = s.contentType || "unknown content type";
      throw new Error(
        `Attachment response from "${e}" did not identify a supported readable file (${f})`,
      );
    }
    r?.onProgress?.({ phase: "stabilizing", url: t.url || e });
    const u = await this.waitForTabLoadRobust(t, r);
    if (!u.success)
      return {
        content: {
          sourceType: "url",
          sourceId: e,
          handlerType: "tab_web",
          markdown: this.formatLoadError(u),
          url: e,
          title: "Load Failed",
          extractedAt: Date.now(),
        },
        tab: t,
      };
    const p = this.validateTabState(t);
    if (!p.isValid)
      return {
        content: {
          sourceType: "url",
          sourceId: e,
          handlerType: "tab_web",
          markdown: `Page loaded but content unavailable: ${p.error}`,
          url: e,
          title: "Extraction Failed",
          extractedAt: Date.now(),
        },
        tab: t,
      };
    if (a && !r?.includeScreenshot) return { content: a, tab: t };
    await te(t, r?.abortSignal);
    const m = await this.doExtraction(t, r, "already-observed", l);
    return (
      r?.abortSignal?.throwIfAborted(),
      this.setCache(o, m),
      { content: m, tab: t }
    );
  }
  async extractFromFile(e, t, r) {
    const o = `file:${e}`,
      a = this.getFromCache(o);
    if (a) return a;
    const i = await import("fs"),
      s = await import("path");
    try {
      await i.promises.access(e);
    } catch {
      throw new Error(`File not found: ${e}`);
    }
    if (!(await i.promises.stat(e)).isFile())
      throw new Error(`Path is not a file: ${e}`);
    const l = s.extname(e).toLowerCase(),
      u = s.basename(e),
      p = r?.split(";")[0]?.trim().toLowerCase(),
      m = this.getMimeTypeForExtension(l || u),
      f = p && !q(p) ? p : m,
      w = z(u, f);
    let y;
    if (!w)
      throw new Error(
        `Unsupported file type: ${l || "(no extension)"} with MIME ${f}. Supported: PDF, text, image, spreadsheet, word, presentation, and audio/video formats`,
      );
    switch (w) {
      case "attachment_pdf": {
        const T = (await i.promises.readFile(e)).toString("base64"),
          g = await c.getPdfPageCountFromBase64(T);
        y = {
          sourceType: "file",
          sourceId: e,
          handlerType: "tab_pdf",
          pdfBase64: T,
          title: u,
          mimeType: f,
          pageCount: g || 1,
          extractedAt: Date.now(),
        };
        break;
      }
      case "attachment_document":
      case "attachment_csv": {
        const h = await i.promises.readFile(e, "utf-8");
        y = {
          sourceType: "file",
          sourceId: e,
          handlerType: "tab_web",
          markdown: h,
          title: u,
          mimeType: f,
          extractedAt: Date.now(),
        };
        break;
      }
      case "attachment_image": {
        const h = await i.promises.readFile(e);
        y = {
          sourceType: "file",
          sourceId: e,
          handlerType: "attachment_image",
          imageBase64: h.toString("base64"),
          title: u,
          mimeType: f,
          extractedAt: Date.now(),
        };
        break;
      }
      case "attachment_excel": {
        const h = await i.promises.readFile(e);
        y = {
          sourceType: "file",
          sourceId: e,
          handlerType: "attachment_excel",
          pdfBase64: h.toString("base64"),
          title: u,
          mimeType: f,
          extractedAt: Date.now(),
        };
        break;
      }
      case "attachment_word": {
        const h = await i.promises.readFile(e);
        y = {
          sourceType: "file",
          sourceId: e,
          handlerType: "attachment_word",
          pdfBase64: h.toString("base64"),
          title: u,
          mimeType: f,
          extractedAt: Date.now(),
        };
        break;
      }
      case "attachment_powerpoint": {
        const h = await i.promises.readFile(e);
        y = {
          sourceType: "file",
          sourceId: e,
          handlerType: "attachment_powerpoint",
          pdfBase64: h.toString("base64"),
          title: u,
          mimeType: f,
          extractedAt: Date.now(),
        };
        break;
      }
      case "attachment_audio": {
        const h = await i.promises.readFile(e);
        y = {
          sourceType: "file",
          sourceId: e,
          handlerType: "attachment_audio",
          audioBase64: h.toString("base64"),
          title: u,
          mimeType: f,
          extractedAt: Date.now(),
        };
        break;
      }
      default:
        throw new Error(`Unsupported file handler type: ${w}`);
    }
    return (this.setCache(o, y), y);
  }
  async extractFromAttachment(e, t, r) {
    const o = `attachment:${e}`,
      a = this.getFromCache(o);
    if (a) return a;
    throw new Error(
      `Attachment extraction not yet implemented. AttachmentId: ${e}, objectKey: ${t}`,
    );
  }
  isYouTubeUrl(e) {
    if (!e || typeof e != "string") return !1;
    try {
      const r = new URL(e).hostname.toLowerCase();
      return [
        "youtube.com",
        "www.youtube.com",
        "youtu.be",
        "m.youtube.com",
      ].includes(r);
    } catch {
      return !1;
    }
  }
  waitForContentOrDownload(e, t) {
    const r = e.getLayer(),
      o = c.safeWithLayerWebContents(r, (s) => ({
        id: s.id,
        session: s.session,
      })),
      a = o.ok ? o.value.id : null,
      i = o.ok ? o.value.session : null;
    return new Promise((s, d) => {
      let l = !1,
        u = null,
        p = null;
      const m = () => {
        (clearTimeout(f),
          p && clearInterval(p),
          i?.removeListener("will-download", h),
          e.off("tab:main-frame-content-type", T),
          e.off("tab:did-fail-load", w));
      };
      p = setInterval(() => {
        if (l) {
          p && clearInterval(p);
          return;
        }
        if (this.isTabFinishedLoading(e)) {
          if ((p && clearInterval(p), l)) return;
          ((l = !0), m());
          const g = this.getAttachmentHeadersFromTab(e),
            x = u ?? g;
          if (x) {
            s(x);
            return;
          }
          (c.logger.debug(
            "[ContentExtractionService] Page loaded before content-type event, skipping wait",
          ),
            s({
              type: "headers",
              contentType: e.contentType,
              contentDisposition: e.contentDisposition,
              url: e.url,
              statusCode: void 0,
            }));
        }
      }, 200);
      const f = setTimeout(() => {
          if (l) return;
          ((l = !0), m());
          const g = this.getAttachmentHeadersFromTab(e),
            x = u ?? g;
          if (x) {
            (c.logger.debug(
              "[ContentExtractionService] Attachment headers detected without will-download; using direct fetch fallback",
            ),
              s(x));
            return;
          }
          (c.logger.debug(
            "[ContentExtractionService] Content-type/download timeout, assuming web content",
          ),
            s({
              type: "headers",
              contentType: e.contentType,
              contentDisposition: e.contentDisposition,
              url: e.url,
              statusCode: void 0,
            }));
        }, L.CONTENT_TYPE_TIMEOUT_MS),
        w = (g) => {
          l ||
            ((l = !0),
            m(),
            c.logger.warn(
              `[ContentExtractionService] Load failed during content-type detection: ${g.errorDescription}`,
            ),
            s({
              type: "load_failed",
              errorDescription: g.errorDescription,
              errorUrl: g.url,
            }));
        };
      e.on("tab:did-fail-load", w);
      const y = () => {
        l || ((l = !0), m(), d(new Error("Operation aborted")));
      };
      t?.addEventListener("abort", y, { once: !0 });
      const h = (g, x, b) => {
        if (b && a !== null) {
          const C = c.safeWithWebContents(b, (D) => D.id);
          if (!C.ok || C.value !== a) return;
        } else if (b) return;
        if (l) return;
        let F = x.getSavePath();
        if (!F) {
          const C = this.tabsService.profileService.createTempDownloadFolder(),
            D = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-`,
            P = _.ensureFilenameExtensionFromMime(
              R.basename(x.getFilename() || "download"),
              x.getMimeType(),
              { maxLength: 255 - D.length },
            ),
            E = `${D}${P}`;
          ((F = R.join(C, E)), x.setSavePath(F));
        }
        ((l = !0),
          m(),
          t?.removeEventListener("abort", y),
          s({ type: "download", item: x, savePath: F }));
      };
      i?.prependListener("will-download", h);
      const T = (g) => {
        if (!(g.statusCode >= 300 && g.statusCode < 400)) {
          if (g.contentDisposition?.toLowerCase().includes("attachment")) {
            ((u = {
              type: "attachment_headers",
              contentType: g.contentType,
              contentDisposition: g.contentDisposition,
              url: g.url,
              statusCode: g.statusCode,
            }),
              c.logger.debug(
                "[ContentExtractionService] Content-Disposition: attachment detected, waiting for download",
              ));
            return;
          }
          l ||
            ((l = !0),
            m(),
            t?.removeEventListener("abort", y),
            s({
              type: "headers",
              contentType: g.contentType,
              contentDisposition: g.contentDisposition,
              url: g.url,
              statusCode: g.statusCode,
            }));
        }
      };
      if ((e.on("tab:main-frame-content-type", T), t?.aborted)) {
        (m(), d(new Error("Operation aborted")));
        return;
      }
    });
  }
  getAttachmentHeadersFromTab(e) {
    return e.contentDisposition?.toLowerCase().includes("attachment")
      ? {
          type: "attachment_headers",
          contentType: e.contentType,
          contentDisposition: e.contentDisposition,
          url: e.url,
          statusCode: void 0,
        }
      : null;
  }
  async resolveUrlFileHintFromHead(e, t, r) {
    const o = this.getTabSession(e);
    if (!o) throw new Error("Extraction renderer session is unavailable");
    const a = e.url || t;
    try {
      const i = await re(a, {
        session: o,
        method: "HEAD",
        timeoutMs: L.CONTENT_TYPE_TIMEOUT_MS,
        signal: r?.abortSignal,
      });
      return H({
        url: i.url || a,
        contentType: i.headers["content-type"]?.[0],
        contentDisposition: i.headers["content-disposition"]?.[0],
      });
    } catch (i) {
      const s = this.hostForLog(a);
      return (
        c.logger.debug(
          `[ContentExtractionService] HEAD file-hint probe failed for ${s}: ${i instanceof Error ? i.message : String(i)}`,
        ),
        null
      );
    }
  }
  hostForLog(e) {
    try {
      return new URL(e).hostname;
    } catch {
      return "invalid-url";
    }
  }
  async tryDirectFileExtraction(e, t, r, o) {
    try {
      o?.onProgress?.({ phase: "downloading", url: e.url || t });
      const a = await this.fetchUrlToTempFile(e, t, r, o);
      if (!a) return "html";
      (await this.closeExtractionTab(e),
        o?.onProgress?.({ phase: "parsing_file", url: a.finalUrl || t }));
      const i = await this.extractFromFile(a.path, o, a.mimeType);
      return (
        (i.sourceType = "url"),
        (i.sourceId = t),
        (i.url = a.finalUrl || t),
        { content: i, tab: null, downloadedFilePath: a.path }
      );
    } catch (a) {
      const i = a instanceof Error ? a.message : String(a);
      return (
        c.logger.warn(
          `[ContentExtractionService] Direct readable-file extraction failed: ${i}`,
          { url: S.getSafeUrlLogDetail(t) },
        ),
        r.isAttachment
          ? (await this.closeExtractionTab(e),
            {
              content: {
                sourceType: "url",
                sourceId: t,
                handlerType: "tab_web",
                markdown: `Failed to download and extract attachment from URL: ${i}`,
                url: t,
                title: "Download Failed",
                extractedAt: Date.now(),
              },
              tab: null,
            })
          : null
      );
    }
  }
  async fetchUrlToTempFile(e, t, r, o) {
    const a = this.getTabSession(e);
    if (!a) throw new Error("Extraction renderer session is unavailable");
    const i = e.url || t,
      s = await re(i, {
        session: a,
        method: "GET",
        timeoutMs: L.DOWNLOAD_TIMEOUT_MS,
        signal: o?.abortSignal,
      }),
      d = s.url || i,
      l = s.headers["content-type"]?.[0],
      u = H({
        url: d,
        contentType: l ?? r.mimeType,
        contentDisposition: s.headers["content-disposition"]?.[0],
      });
    if (!u && de(l)) return null;
    const p = u ?? r,
      m = s.body,
      f = await import("fs/promises"),
      w =
        o?.tempDownloadPath ??
        this.tabsService.profileService.createTempDownloadFolder();
    await f.mkdir(w, { recursive: !0 });
    const y = this.buildTempDownloadFilename(p.filename),
      h = R.join(w, y);
    return (
      await f.writeFile(h, m),
      {
        path: h,
        filename: y,
        size: m.length,
        mimeType: p.mimeType,
        finalUrl: d,
      }
    );
  }
  buildTempDownloadFilename(e) {
    const t =
      R.basename(e)
        .replace(/[\u0000-\u001f\u007f]/g, "")
        .trim() || "download";
    return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${t}`;
  }
  async finishOwnedExtractionTab(e, t) {
    (e.captcha.reset(), await this.tabsService.pages.finishExtraction(e.id, t));
  }
  async closeExtractionTab(e) {
    try {
      await this.tabsService.pages.finishExtraction(e.id, "ended");
    } catch {}
  }
  async handleDownloadExtraction(e, t, r, o, a) {
    try {
      a?.onProgress?.({ phase: "downloading", url: t });
      const i = await this.waitForDownloadCompletion(e, r, o, a?.abortSignal);
      (await this.closeExtractionTab(e),
        a?.onProgress?.({ phase: "parsing_file", url: t }));
      const s = await this.extractFromFile(i.path, a, i.mimeType);
      return (
        (s.sourceType = "url"),
        (s.sourceId = t),
        (s.url = t),
        { content: s, tab: null, downloadedFilePath: i.path }
      );
    } catch (i) {
      await this.closeExtractionTab(e);
      const s = i instanceof Error ? i.message : String(i);
      return (
        c.logger.error(
          `[ContentExtractionService] Download extraction failed: ${s}`,
        ),
        {
          content: {
            sourceType: "url",
            sourceId: t,
            handlerType: "tab_web",
            markdown: `Failed to download and extract file from URL: ${s}`,
            url: t,
            title: "Download Failed",
            extractedAt: Date.now(),
          },
          tab: null,
        }
      );
    }
  }
  waitForDownloadCompletion(e, t, r, o) {
    return new Promise((a, i) => {
      if (o?.aborted) {
        (t.cancel(), i(new Error("Operation aborted")));
        return;
      }
      const s = setTimeout(() => {
          (c.logger.warn(
            "[ContentExtractionService] Download completion timeout reached",
          ),
            t.cancel(),
            i(
              new Error(
                `Download timeout: Download did not complete within ${L.DOWNLOAD_TIMEOUT_MS / 1e3} seconds`,
              ),
            ));
        }, L.DOWNLOAD_TIMEOUT_MS),
        d = () => {
          (clearTimeout(s),
            t.cancel(),
            i(new Error("Operation aborted during download")));
        };
      (o?.addEventListener("abort", d, { once: !0 }),
        t.on("updated", (l, u) => {
          c.logger.debug(`[ContentExtractionService] Download state: ${u}`);
        }),
        t.once("done", (l, u) => {
          (clearTimeout(s),
            o?.removeEventListener("abort", d),
            u === "completed"
              ? setTimeout(() => {
                  (async () => {
                    try {
                      const m = t.getFilename();
                      let f = r || t.getSavePath();
                      if (!f) {
                        const { app: T } = await import("electron");
                        ((f = `${T.getPath("downloads")}/${m}`),
                          c.logger.debug(
                            `[ContentExtractionService] Using constructed path: ${f}`,
                          ));
                      }
                      (f.endsWith(".crdownload") || f.endsWith(".part")) &&
                        (f = f.replace(/\.(crdownload|part)$/, ""));
                      const w = await import("fs/promises"),
                        y = await import("path");
                      let h = !0;
                      try {
                        await w.access(f);
                      } catch {
                        h = !1;
                      }
                      if (!h && !r) {
                        const T = y.dirname(f),
                          g = await w.readdir(T),
                          x = m.replace(/\.[^/.]+$/, ""),
                          b = m.split(".").pop(),
                          F = g.find(
                            (C) =>
                              C === m ||
                              (C.startsWith(x) && C.endsWith(`.${b}`)),
                          );
                        F &&
                          ((f = `${T}/${F}`),
                          c.logger.debug(
                            `[ContentExtractionService] Found matching file: ${f}`,
                          ));
                      }
                      try {
                        await w.access(f);
                      } catch {
                        throw new Error(`Downloaded file not found at ${f}`);
                      }
                      a({
                        path: f,
                        filename: m,
                        size: t.getTotalBytes(),
                        mimeType: t.getMimeType(),
                      });
                    } catch (m) {
                      i(m);
                    }
                  })();
                }, 200)
              : i(new Error(`Download failed with state: ${u}`)));
        }));
    });
  }
  async waitFast(e, t) {
    const r = Date.now();
    return new Promise((o) => {
      let a = !1,
        i = null,
        s = null;
      const d = (u) => {
        if (a) return;
        ((a = !0),
          i && (clearTimeout(i), (i = null)),
          s && (e.off("tab:did-stop-loading", s), (s = null)));
        const p = Date.now() - r;
        o({ success: u === "ready", waitedMs: p, reason: u });
      };
      if (t.abortSignal?.aborted) {
        d("aborted");
        return;
      }
      (t.abortSignal?.addEventListener("abort", () => d("aborted"), {
        once: !0,
      }),
        (i = setTimeout(() => d("timeout"), t.timeout)));
      const l = c.safeWithLayerWebContents(e.layer, (u) => u.isLoading());
      if (l.ok && !l.value) {
        setTimeout(() => d("ready"), 200);
        return;
      }
      ((s = () => {
        setTimeout(() => d("ready"), 200);
      }),
        e.once("tab:did-stop-loading", s));
    });
  }
  async waitNormal(e, t) {
    return new M(e).waitForReady({
      networkIdleThreshold: 2,
      networkIdleTimeMs: 300,
      domStableTimeMs: 200,
      minWaitTimeMs: 200,
      timeoutMs: t.timeout,
      abortSignal: t.abortSignal,
    });
  }
  async waitThorough(e, t) {
    return new M(e).waitForReady({
      networkIdleThreshold: 2,
      networkIdleTimeMs: 500,
      domStableTimeMs: 400,
      minWaitTimeMs: 500,
      timeoutMs: t.timeout,
      abortSignal: t.abortSignal,
    });
  }
  validateTabState(e) {
    const t = c.safeWithLayerWebContents(e.layer, (r) =>
      r.isCrashed()
        ? { isValid: !1, error: "WebContents has crashed" }
        : r.isLoadingMainFrame()
          ? { isValid: !1, error: "Page is still loading main frame" }
          : { isValid: !0 },
    );
    return t.ok
      ? t.value.isValid
        ? e.isFailedToLoad
          ? {
              isValid: !1,
              error: `Page failed to load: ${e.isFailedToLoadReason || "Unknown error"}`,
            }
          : { isValid: !0 }
        : t.value
      : {
          isValid: !1,
          error:
            t.error === "destroyed"
              ? "WebContents has been destroyed"
              : "WebContents not available - tab layer not initialized",
        };
  }
  async waitForTabLoadRobust(e, t) {
    const r = t?.loadTimeout ?? L.DEFAULT_LOAD_TIMEOUT,
      o = new AbortController();
    let a = null,
      i = null,
      s = !1,
      d = "",
      l = "";
    const u = () => {
        (a && (clearInterval(a), (a = null)),
          i && (e.removeListener("tab:did-fail-load", i), (i = null)));
      },
      p = () => {
        o.abort();
      };
    if (t?.abortSignal) {
      if (t.abortSignal.aborted)
        throw new $("Extraction aborted before load started");
      t.abortSignal.addEventListener("abort", p);
    }
    try {
      ((i = (h) => {
        ((s = !0),
          (d = h.errorDescription),
          c.logger.warn(
            `[ContentExtractionService] Tab load failed: ${h.errorDescription} at ${S.formatUrlForLog(h.url)}`,
          ));
      }),
        e.on("tab:did-fail-load", i),
        (a = setInterval(() => {
          const h = c.safeWithLayerWebContents(e.layer, (T) =>
            T.isCrashed() ? "crashed" : "ok",
          );
          h.ok
            ? h.value === "crashed" && ((l = "WebContents crashed"), o.abort())
            : ((l =
                h.error === "destroyed"
                  ? "WebContents was destroyed"
                  : "WebContents became unavailable"),
              o.abort());
        }, 500)));
      const m = Date.now();
      if (
        (this.isTabFinishedLoading(e)
          ? c.logger.debug(
              `[ContentExtractionService] Page already loaded for ${S.formatUrlForLog(e.url)}, skipping initial load wait`,
            )
          : await new Promise((h) => {
              let T = !1;
              const g = () => {
                  T ||
                    ((T = !0),
                    e.off("tab:did-stop-loading", g),
                    c.logger.debug(
                      `[ContentExtractionService] Initial document load completed for ${S.formatUrlForLog(e.url)} (${Date.now() - m}ms)`,
                    ),
                    h());
                },
                x = () => {
                  T ||
                    ((T = !0),
                    e.off("tab:did-stop-loading", g),
                    c.logger.warn(
                      `[ContentExtractionService] Initial document load failed for ${S.formatUrlForLog(e.url)}`,
                    ),
                    h());
                };
              if (
                (e.once("tab:did-stop-loading", g),
                e.once("tab:did-fail-load", x),
                this.isTabFinishedLoading(e))
              ) {
                T ||
                  ((T = !0),
                  e.off("tab:did-stop-loading", g),
                  c.logger.debug(
                    `[ContentExtractionService] Page already loaded for ${S.formatUrlForLog(e.url)} (detected after listener setup, ${Date.now() - m}ms)`,
                  ),
                  h());
                return;
              }
              (setTimeout(() => {
                T ||
                  ((T = !0),
                  e.off("tab:did-stop-loading", g),
                  c.logger.warn(
                    `[ContentExtractionService] Initial document load timeout for ${S.formatUrlForLog(e.url)} after 10s`,
                  ),
                  h());
              }, 1e4),
                o.signal.aborted && h(),
                o.signal.addEventListener("abort", () => h(), { once: !0 }));
            }),
        o.signal.aborted)
      ) {
        if ((u(), t?.abortSignal?.removeEventListener("abort", p), l))
          return {
            success: !1,
            errorDescription: l,
            errorUrl: e.url,
            wasDestroyed: !0,
          };
        throw new $("Extraction aborted during initial load wait");
      }
      const w = await new M(e).waitForReady(
        Z(r, o.signal, O(e.url) ? "linkedin-profile" : void 0),
      );
      if ((u(), t?.abortSignal?.removeEventListener("abort", p), s))
        return { success: !1, errorDescription: d, errorUrl: e.url };
      if (w.reason === "aborted") {
        if (l)
          return {
            success: !1,
            errorDescription: l,
            errorUrl: e.url,
            wasDestroyed: !0,
          };
        throw new $("Extraction aborted during page readiness wait");
      }
      const y = this.validateTabState(e);
      return y.isValid
        ? { success: !0 }
        : (c.logger.warn(
            `[ContentExtractionService] Tab validation failed after readiness check: ${y.error}`,
          ),
          { success: !1, errorDescription: y.error, errorUrl: e.url });
    } catch (m) {
      if (
        (u(), t?.abortSignal?.removeEventListener("abort", p), m instanceof $)
      )
        throw m;
      return this.validateTabState(e).isValid
        ? (c.logger.warn(
            `[ContentExtractionService] Readiness check error but tab valid, proceeding: ${m}`,
          ),
          { success: !0 })
        : {
            success: !1,
            errorDescription: `Load error: ${m instanceof Error ? m.message : String(m)}`,
            errorUrl: e.url,
          };
    }
  }
  formatLoadError(e) {
    let t = "Failed to load page";
    return (
      e.errorDescription && (t += `: ${e.errorDescription}`),
      e.errorUrl && (t += ` (URL: ${e.errorUrl})`),
      e.wasDestroyed && (t += " [Tab was destroyed]"),
      e.wasCrashed && (t += " [Tab crashed]"),
      t
    );
  }
  async doExtraction(e, t, r = "observe", o) {
    const a = t?.maxMarkdownLength ?? L.DEFAULT_MAX_MARKDOWN_LENGTH;
    if (
      (r === "observe" && (await new Promise((u) => setTimeout(u, W))),
      this.isYouTubeUrl(e.url))
    )
      return this.extractYouTubeContent(e, t);
    const i = new ge();
    if (await i.canHandle(e)) return this.extractPdfContent(e, i);
    const s = o ?? e.contentType,
      d = K(s),
      l = X(e.url);
    return ue(s, e.url)
      ? (c.logger.debug(
          "[ContentExtractionService] Detected plain text content",
          {
            url: S.getSafeUrlLogDetail(e.url),
            contentType: e.contentType,
            byContentType: d,
            byUrl: l,
          },
        ),
        this.extractPlainTextContent(e, a))
      : this.extractWebContent(e, a, t);
  }
  async extractYouTubeContent(e, t) {
    const r = t?.maxMarkdownLength ?? L.DEFAULT_MAX_MARKDOWN_LENGTH,
      [o, a] = await Promise.all([
        this.youtubeService
          .extractTranscript(e.url, {
            accountId:
              c.authManager.forProfile(e.profileService.getCurrentProfile().id)
                .accountId ?? null,
            skipMetadata: t?.skipYouTubeMetadata,
          })
          .catch(
            (i) => (
              c.logger.warn(
                "[ContentExtractionService] YouTube transcript failed:",
                i,
              ),
              {
                transcript: `Transcript extraction failed: ${i instanceof Error ? i.message : String(i)}`,
                metadata: { url: e.url, title: void 0, thumbnail: void 0 },
              }
            ),
          ),
        e.markdownPage.getFullMarkdownWithImages(r).catch((i) => {
          c.logger.warn(
            "[ContentExtractionService] YouTube page markdown failed:",
            i,
          );
        }),
      ]);
    return {
      sourceType: "tab",
      sourceId: e.id,
      handlerType: "tab_youtube",
      transcript: o.transcript,
      markdown: a,
      title: o.metadata?.title ?? e.title,
      url: e.url,
      extractedAt: Date.now(),
    };
  }
  async extractPdfContent(e, t) {
    const r = await t.extractContext(e, e.url);
    return (
      c.logger.debug("[ContentExtractionService] PDF extraction result:", {
        url: S.getSafeUrlLogDetail(e.url),
        hasData: !!r.data,
        dataLength: r.data?.length ?? 0,
        hasObjectKey: !!r.objectKey,
        objectKey: r.objectKey ?? "NOT SET",
        pageCount: r.pageCount,
      }),
      {
        sourceType: "tab",
        sourceId: e.id,
        handlerType: "tab_pdf",
        pdfBase64: r.data,
        objectKey: r.objectKey,
        title: e.title,
        url: e.url,
        mimeType: "application/pdf",
        pageCount: r.pageCount,
        extractedAt: Date.now(),
      }
    );
  }
  async extractWebContent(e, t, r) {
    const o = await e.markdownPage.getFullMarkdownWithImages(t),
      a = r?.includeScreenshot ? await this.captureScreenshot(e) : void 0;
    return {
      sourceType: "tab",
      sourceId: e.id,
      handlerType: "tab_web",
      markdown: o,
      screenshot: a,
      title: e.title,
      url: e.url,
      extractedAt: Date.now(),
    };
  }
  async extractPlainTextContent(e, t) {
    let r = null,
      o = !1;
    try {
      const u = await c.safeExecuteJavaScriptInLayer(
        e.layer,
        `
          (() => {
            const pre = document.querySelector('pre');
            if (pre) return pre.textContent || pre.innerText || '';
            return document.body?.textContent || document.body?.innerText || '';
          })()
        `,
        !0,
      );
      ((r = u.ok ? u.value : null),
        r && r.trim().length > 0
          ? c.logger.debug(
              `[ContentExtractionService] Extracted plain text via JS: ${r.length} chars`,
            )
          : (r = null));
    } catch (l) {
      (c.logger.warn(
        "[ContentExtractionService] JS extraction failed, trying direct fetch:",
        l,
      ),
        (r = null));
    }
    if (!r)
      try {
        c.logger.debug(
          "[ContentExtractionService] Fetching plain text directly from:",
          { url: S.getSafeUrlLogDetail(e.url) },
        );
        const l = await fe({
          url: e.url,
          session: this.getTabSession(e),
          logPrefix: "[ContentExtractionService]",
        });
        ((r = l.text),
          (o = l.authenticated),
          c.logger.debug(
            `[ContentExtractionService] Direct fetch successful: ${r.length} chars, authenticated: ${o}`,
          ));
      } catch (l) {
        return (
          c.logger.error(
            "[ContentExtractionService] Direct fetch also failed:",
            l,
          ),
          this.extractWebContent(e, t)
        );
      }
    const a = Le.sanitizeUnpairedSurrogates(r || ""),
      i = he(a, t),
      s = me(i, e.url);
    c.logger.debug(
      `[ContentExtractionService] Extracted plain text content: ${i.length} chars, type: ${e.contentType}`,
    );
    const d = new URL(e.url).pathname;
    return {
      sourceType: "tab",
      sourceId: e.id,
      handlerType: "tab_web",
      markdown: s,
      title: e.title || d.split("/").pop() || "Plain Text",
      url: e.url,
      mimeType: e.contentType,
      extractedAt: Date.now(),
    };
  }
  async captureScreenshot(e) {
    try {
      const t = await c.safeWithLayerWebContentsAsync(e.layer, async (a) => {
        if (
          e.tabSurfaceIntent === "background-extraction" &&
          !e.layer.isAttached()
        ) {
          const i = await c.withTimeout(
              a.debugger.sendCommand("Page.captureScreenshot", {
                format: "png",
                fromSurface: !0,
                captureBeyondViewport: !1,
              }),
              15e3,
              "Detached extraction screenshot timed out",
            ),
            { data: s } = v.parse(v.object({ data: v.string() }), i);
          return se.nativeImage.createFromBuffer(Buffer.from(s, "base64"));
        }
        return c.withTimeout(
          a.capturePage(),
          15e3,
          "Extraction screenshot timed out",
        );
      });
      if (!t.ok) return;
      const r = t.value;
      return (await c.rustImageWorkerManager.processScreenshot(r))?.dataUrl;
    } catch (t) {
      c.logger.warn(
        "[ContentExtractionService] Failed to capture screenshot:",
        t,
      );
      return;
    }
  }
  getMimeTypeForExtension(e) {
    return _.mimeFromExt(e) || "application/octet-stream";
  }
  getFromCache(e) {
    const t = this.cache.get(e);
    return t && t.expiresAt > Date.now()
      ? t.content
      : (t && this.cache.delete(e), null);
  }
  setCache(e, t) {
    const r =
      t.screenshot || t.pdfBase64 || t.audioBase64
        ? { ...t, screenshot: void 0, pdfBase64: void 0, audioBase64: void 0 }
        : t;
    this.cache.set(e, {
      content: r,
      expiresAt: Date.now() + L.DEFAULT_CACHE_TTL,
    });
  }
}
const Je = Object.freeze(
  Object.defineProperty(
    { __proto__: null, ContentExtractionService: L },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
exports.ContentExtractionService = L;
exports.ContentExtractionService$1 = Je;
exports.PDFContextStrategy = ge;
exports.PageReadinessWaiter = M;
exports.YouTubeTranscriptService = I;
exports.determineAttachmentSource = Ke;
exports.fetchWithSessionCookies = fe;
exports.filenameFromContentDisposition = ye;
exports.filenameFromUrl = be;
exports.getLinkedInUrl = N;
exports.inferMimeFromUrl = Y;
exports.isPlainTextContent = ue;
exports.isPlainTextContentType = K;
exports.isPlainTextUrl = X;
exports.mimeFromContentTypeHeader = we;
exports.truncateWithMessage = he;
exports.userCookieFetch = Re;
exports.wrapInCodeBlock = me;
