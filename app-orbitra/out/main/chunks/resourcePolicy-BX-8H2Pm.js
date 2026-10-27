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
      (e._sentryDebugIds[t] = "831bc899-9778-4401-8bc1-ca5cddd102c9"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-831bc899-9778-4401-8bc1-ca5cddd102c9"));
  })();
} catch {}
const F = [
    "source_open",
    "source_snapshot",
    "source_read",
    "source_close",
    "pdf_parse",
    "pdf_partition",
    "text_index",
    "worker_start",
    "worker_send",
    "worker_exit",
    "worker_response",
    "output_validation",
    "cleanup",
  ],
  M = [
    "operation_failed",
    "source_changed",
    "resource_limit",
    "derived_output_limit",
    "encrypted_pdf",
    "worker_exited",
    "timed_out",
  ],
  P = [
    "EACCES",
    "EPERM",
    "EBUSY",
    "ENOENT",
    "ENOSPC",
    "EMFILE",
    "ENFILE",
    "EIO",
    "ENOTSUP",
    "EINVAL",
  ],
  y = [
    "Error",
    "TypeError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "AggregateError",
    "AbortError",
    "PdfPreprocessorPublicError",
    "unclassified",
  ],
  g = [
    "preprocessPdf.ts",
    "PdfPreprocessorBridge.ts",
    "PdfPreprocessorWorker.ts",
    "PdfPreprocessorBridge.js",
    "PdfPreprocessorWorker.js",
    "failureDiagnostics.ts",
    "resourcePolicy.ts",
    "ownedTemporaryDirectory.ts",
    "utilityProcessExitGate.ts",
    "pdf-lib/cjs/api/PDFDocument.js",
    "pdf-lib/cjs/api/errors.js",
    "pdf-lib/cjs/core/parser/BaseParser.js",
    "pdf-lib/cjs/core/parser/PDFParser.js",
    "pdf-lib/cjs/core/parser/PDFObjectParser.js",
    "pdf-lib/cjs/core/errors.js",
    "pdfjs-dist/legacy/build/pdf.mjs",
    "pdfjs-dist/legacy/build/pdf.worker.mjs",
    "node:internal/fs/promises",
    "node:fs",
  ],
  h = 3,
  D = 8,
  I = 8192;
class S extends Error {
  failure;
  constructor(t, s) {
    const r = s ? m(s) : void 0;
    (super(t, { cause: r }),
      (this.name = "PdfPreprocessorPublicError"),
      (this.failure = r));
  }
}
function m(e) {
  if (!e || typeof e != "object")
    return { stage: "worker_response", reason: "operation_failed" };
  const t = {
      stage: F.find((r) => r === e.stage) ?? "worker_response",
      reason: M.find((r) => r === e.reason) ?? "operation_failed",
    },
    s = P.find((r) => r === e.fileSystemCode);
  (s && (t.fileSystemCode = s),
    typeof e.exitCode == "number" &&
      Number.isSafeInteger(e.exitCode) &&
      (t.exitCode = e.exitCode),
    typeof e.forcedExit == "boolean" && (t.forcedExit = e.forcedExit));
  for (const r of ["elapsedMs", "workerElapsedMs", "processingMs"]) {
    const o = e[r];
    typeof o == "number" && Number.isSafeInteger(o) && o >= 0 && (t[r] = o);
  }
  if (
    (typeof e.attemptCount == "number" &&
      Number.isSafeInteger(e.attemptCount) &&
      e.attemptCount >= 1 &&
      e.attemptCount <= 3 &&
      (t.attemptCount = e.attemptCount),
    Array.isArray(e.causes))
  ) {
    const r = [];
    for (const o of e.causes.slice(0, h)) {
      if (!o || typeof o != "object") continue;
      const i = [];
      if (Array.isArray(o.frames))
        for (const n of o.frames.slice(0, D)) {
          if (!n || typeof n != "object") continue;
          const _ = g.find((f) => f === n.source);
          _ &&
            typeof n.line == "number" &&
            Number.isSafeInteger(n.line) &&
            n.line > 0 &&
            typeof n.column == "number" &&
            Number.isSafeInteger(n.column) &&
            n.column > 0 &&
            i.push({ source: _, line: n.line, column: n.column });
        }
      const c = {
          errorType: y.find((n) => n === o.errorType) ?? "unclassified",
          frames: i,
        },
        d = P.find((n) => n === o.fileSystemCode);
      (d && (c.fileSystemCode = d), r.push(c));
    }
    r.length > 0 && (t.causes = r);
  }
  return t;
}
function N(e) {
  return e.reason === "source_changed"
    ? e.stage === "source_snapshot"
    : e.reason !== "operation_failed" || e.fileSystemCode !== "EBUSY"
      ? !1
      : e.stage === "source_open" || e.stage === "source_snapshot";
}
function w(e, t) {
  if (t instanceof S && t.failure) return m(t.failure);
  const s = { stage: e, reason: "operation_failed" },
    r = [],
    o = new Set();
  let i = t;
  for (; i && r.length < h && !o.has(i); ) {
    o.add(i);
    const c = [];
    if (typeof i.stack == "string")
      for (const f of i.stack
        .slice(0, I)
        .split(
          `
`,
        )
        .slice(1, 33)) {
        const a = f
          .trim()
          .match(/^at (?:[^()\r\n]*\()?(.+):([0-9]+):([0-9]+)\)?$/u);
        if (!a) continue;
        const u = a[1]?.replaceAll("\\", "/"),
          b = g.find((A) => u === A || u?.endsWith(`/${A}`)),
          l = Number(a[2]),
          E = Number(a[3]);
        if (
          b &&
          Number.isSafeInteger(l) &&
          l > 0 &&
          Number.isSafeInteger(E) &&
          E > 0 &&
          (c.push({ source: b, line: l, column: E }), c.length >= D)
        )
          break;
      }
    const d = i.name,
      n = { errorType: y.find((f) => f === d) ?? "unclassified", frames: c };
    if ("code" in i) {
      const f = i.code,
        a = P.find((u) => u === f);
      a && ((n.fileSystemCode = a), (s.fileSystemCode ??= a));
    }
    r.push(n);
    const _ = i.cause;
    i = _ instanceof Error ? _ : void 0;
  }
  return (r.length > 0 && (s.causes = r), s);
}
const T = 128 * 1024 * 1024,
  O = 2e4,
  C = 256 * 1024 * 1024,
  x = 45 * 1024 * 1024,
  X = 250,
  B = 4096,
  R = 8 * 1024 * 1024,
  U = 56 * 1024 * 1024;
function j(e) {
  return Math.min(C, Math.max(16 * 1024 * 1024, e * 2 + R));
}
const Y = 128 * 1024 * 1024,
  L = 16 * 1024 * 1024,
  v = "We couldn't prepare this PDF. The file may be damaged or unsupported.";
function p() {
  const e = new Error("PDF preprocessing was cancelled");
  return ((e.name = "AbortError"), e);
}
class k {
  constructor(t = Y, s = L) {
    ((this.maxBytes = t), (this.minWeight = s));
  }
  activeBytes = 0;
  pending = [];
  acquire(t, s) {
    const r = Math.max(this.minWeight, t);
    if (!Number.isSafeInteger(r) || r <= 0 || r > this.maxBytes)
      throw new S(
        `This PDF is too large to prepare. PDF attachments must be ${T / 1024 / 1024} MB or smaller.`,
        { stage: "source_open", reason: "resource_limit" },
      );
    return s?.aborted
      ? Promise.reject(p())
      : new Promise((o, i) => {
          const c = { weight: r, resolve: o, reject: i, signal: s };
          (s &&
            ((c.abortListener = () => {
              const d = this.pending.indexOf(c);
              d < 0 || (this.pending.splice(d, 1), i(p()), this.drain());
            }),
            s.addEventListener("abort", c.abortListener, { once: !0 })),
            this.pending.push(c),
            this.drain());
        });
  }
  drain() {
    const t = this.pending.findIndex(
      (o) => this.activeBytes + o.weight <= this.maxBytes,
    );
    if (t < 0) return;
    const [s] = this.pending.splice(t, 1);
    if (!s) return;
    if (
      (s.abortListener &&
        s.signal?.removeEventListener("abort", s.abortListener),
      s.signal?.aborted)
    ) {
      (s.reject(p()), this.drain());
      return;
    }
    this.activeBytes += s.weight;
    let r = !1;
    (s.resolve(() => {
      r || ((r = !0), (this.activeBytes -= s.weight), this.drain());
    }),
      this.drain());
  }
}
exports.PDF_DERIVED_OUTPUT_MAX_BYTES = C;
exports.PDF_METADATA_FIELD_MAX_CHARS = B;
exports.PDF_PAGE_COUNT_MAX = O;
exports.PDF_PREPROCESS_GENERIC_ERROR = v;
exports.PDF_QUERY_PART_MAX_BYTES = x;
exports.PDF_QUERY_PART_MAX_PAGES = X;
exports.PDF_SOURCE_MAX_BYTES = T;
exports.PDF_TEXT_INDEX_MAX_COMPRESSED_BYTES = R;
exports.PDF_TEXT_INDEX_MAX_UNCOMPRESSED_BYTES = U;
exports.PdfPreprocessorPublicError = S;
exports.PdfSourceAdmissionController = k;
exports.describePdfPreprocessorFailure = w;
exports.initialPdfDerivedOutputMaxBytes = j;
exports.parsePdfPreprocessorFailure = m;
exports.shouldRetryPdfSourceFailure = N;
