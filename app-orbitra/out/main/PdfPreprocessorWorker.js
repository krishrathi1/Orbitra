"use strict";
var C = Object.create;
var w = Object.defineProperty;
var X = Object.getOwnPropertyDescriptor;
var I = Object.getOwnPropertyNames;
var O = Object.getPrototypeOf,
  L = Object.prototype.hasOwnProperty;
var U = (e, t, a, o) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let r of I(t))
      !L.call(e, r) &&
        r !== a &&
        w(e, r, {
          get: () => t[r],
          enumerable: !(o = X(t, r)) || o.enumerable,
        });
  return e;
};
var Y = (e, t, a) => (
  (a = e != null ? C(O(e)) : {}),
  U(
    t || !e || !e.__esModule
      ? w(a, "default", { value: e, enumerable: !0 })
      : a,
    e,
  )
);
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
      (e._sentryDebugIds[t] = "573c2235-5665-4bf9-975d-117fe947bf2a"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-573c2235-5665-4bf9-975d-117fe947bf2a"));
  })();
} catch {}
const s = require("./chunks/resourcePolicy-BX-8H2Pm.js"),
  m = require("node:crypto"),
  N = require("node:fs"),
  f = require("node:fs/promises"),
  S = require("node:path"),
  A = require("node:stream"),
  G = require("node:stream/promises"),
  q = require("node:zlib"),
  E = require("pdf-lib"),
  z = 4096,
  H = "text-index.txt.gz",
  Q = /\s/u;
class $ {
  constructor(t) {
    this.maxBytes = t;
  }
  retainedBytes = 0;
  availableBytes() {
    return this.maxBytes - this.retainedBytes;
  }
  retain(t) {
    if (t > this.availableBytes())
      throw new s.PdfPreprocessorPublicError(
        "This PDF needs too much temporary storage to prepare safely.",
        { stage: "pdf_partition", reason: "derived_output_limit" },
      );
    this.retainedBytes += t;
  }
  release(t) {
    this.retainedBytes = Math.max(0, this.retainedBytes - t);
  }
}
class b extends A.Transform {
  constructor(t, a = "resource_limit") {
    (super(), (this.maxBytes = t), (this.reason = a));
  }
  writtenBytes = 0;
  _transform(t, a, o) {
    if (this.writtenBytes + t.byteLength > this.maxBytes) {
      o(
        new s.PdfPreprocessorPublicError(
          "This PDF needs too much temporary storage to prepare safely.",
          { stage: "text_index", reason: this.reason },
        ),
      );
      return;
    }
    ((this.writtenBytes += t.byteLength), o(null, t));
  }
}
async function k(e, t) {
  const a = await f.open(e, "r");
  try {
    const o = m.createHash("sha256"),
      r = Buffer.allocUnsafe(256 * 1024);
    let n = 0;
    for (; n < t; ) {
      const i = await a.read(r, 0, Math.min(r.byteLength, t - n), n);
      if (i.bytesRead === 0)
        throw new Error("PDF index changed while it was being hashed.");
      (o.update(r.subarray(0, i.bytesRead)), (n += i.bytesRead));
    }
    return o.digest("hex");
  } finally {
    await a.close();
  }
}
function j(e) {
  const t = (a, o, r) => {
    const n = a ?? o;
    if (!Number.isSafeInteger(n) || n <= 0)
      throw new s.PdfPreprocessorPublicError(s.PDF_PREPROCESS_GENERIC_ERROR);
    return Math.min(n, r);
  };
  return {
    maxBytes: t(
      e.maxBytes,
      s.PDF_QUERY_PART_MAX_BYTES,
      s.PDF_QUERY_PART_MAX_BYTES,
    ),
    maxPagesPerPart: t(
      e.maxPagesPerPart,
      s.PDF_QUERY_PART_MAX_PAGES,
      s.PDF_QUERY_PART_MAX_PAGES,
    ),
    partitionAbovePages: t(
      e.partitionAbovePages,
      s.PDF_QUERY_PART_MAX_PAGES,
      s.PDF_QUERY_PART_MAX_PAGES,
    ),
    maxSourceBytes: t(
      e.maxSourceBytes,
      s.PDF_SOURCE_MAX_BYTES,
      s.PDF_SOURCE_MAX_BYTES,
    ),
    maxPages: t(e.maxPages, s.PDF_PAGE_COUNT_MAX, s.PDF_PAGE_COUNT_MAX),
    maxDerivedBytes: t(
      e.maxDerivedBytes,
      s.PDF_DERIVED_OUTPUT_MAX_BYTES,
      s.PDF_DERIVED_OUTPUT_MAX_BYTES,
    ),
  };
}
function R(e) {
  const t = Math.floor(e / 1024 / 1024);
  return new s.PdfPreprocessorPublicError(
    `This PDF is too large to prepare. PDF attachments must be ${t} MB or smaller.`,
    { stage: "source_read", reason: "resource_limit" },
  );
}
async function W(e, t) {
  let a, o;
  try {
    a = await f.open(e, "r");
    const r = await a.stat();
    if (!r.isFile())
      throw new s.PdfPreprocessorPublicError(s.PDF_PREPROCESS_GENERIC_ERROR);
    if (r.size > t) throw R(t);
    o = Buffer.allocUnsafe(r.size);
    let n = 0;
    for (; n < o.byteLength; ) {
      const c = await a.read(o, n, o.byteLength - n, n);
      if (c.bytesRead === 0) break;
      n += c.bytesRead;
    }
    const i = await a.stat();
    if (i.size > t) throw R(t);
    if (i.size !== r.size || n !== r.size)
      throw new s.PdfPreprocessorPublicError(s.PDF_PREPROCESS_GENERIC_ERROR, {
        stage: "source_read",
        reason: "source_changed",
      });
  } catch (r) {
    if (a)
      try {
        await a.close();
      } catch (n) {
        console.warn(
          "[PdfPreprocessorWorker] Source cleanup failed after preparation failure",
          {
            pdfFailure: s.describePdfPreprocessorFailure(
              "source_close",
              n instanceof Error ? n : void 0,
            ),
          },
        );
      }
    throw new s.PdfPreprocessorPublicError(
      r instanceof s.PdfPreprocessorPublicError
        ? r.message
        : s.PDF_PREPROCESS_GENERIC_ERROR,
      s.describePdfPreprocessorFailure(
        "source_read",
        r instanceof Error ? r : void 0,
      ),
    );
  }
  try {
    await a.close();
  } catch (r) {
    throw new s.PdfPreprocessorPublicError(
      s.PDF_PREPROCESS_GENERIC_ERROR,
      s.describePdfPreprocessorFailure(
        "source_close",
        r instanceof Error ? r : void 0,
      ),
    );
  }
  return o;
}
function u(e) {
  try {
    const t = e()?.trim();
    return t ? t.slice(0, s.PDF_METADATA_FIELD_MAX_CHARS) : void 0;
  } catch {
    return;
  }
}
function D(e) {
  try {
    const t = e();
    return t && !Number.isNaN(t.getTime()) ? t.toISOString() : void 0;
  } catch {
    return;
  }
}
function x(e) {
  const t = {
    title: u(() => e.getTitle()),
    author: u(() => e.getAuthor()),
    subject: u(() => e.getSubject()),
    creator: u(() => e.getCreator()),
    producer: u(() => e.getProducer()),
    createdAt: D(() => e.getCreationDate()),
    modifiedAt: D(() => e.getModificationDate()),
  };
  return Object.values(t).some((a) => a !== void 0) ? t : void 0;
}
function V(e, t, a) {
  if (e <= 0) return [];
  const o = Math.max(1, Math.floor((e * a.maxBytes * 0.8) / Math.max(t, 1))),
    r = Math.max(1, Math.min(a.maxPagesPerPart, o)),
    n = [];
  for (let i = 1; i <= e; i += r)
    n.push({ startPage: i, endPage: Math.min(e, i + r - 1) });
  return n;
}
async function J(e) {
  const t = await E.PDFDocument.create(),
    a = Array.from(
      { length: e.range.endPage - e.range.startPage + 1 },
      (c, d) => e.range.startPage - 1 + d,
    ),
    o = await t.copyPages(e.source, a);
  for (const c of o) t.addPage(c);
  const r = await t.save({ useObjectStreams: !0 }),
    n = `part-${String(e.sequence).padStart(4, "0")}.pdf`,
    i = S.join(e.outputDirectory, n);
  (e.budget.retain(r.byteLength), e.generatedPaths.add(i));
  try {
    await f.writeFile(i, r, { flag: "wx", mode: 384 });
  } catch (c) {
    throw (e.budget.release(r.byteLength), c);
  }
  return {
    filePath: i,
    startPage: e.range.startPage,
    endPage: e.range.endPage,
    size: r.byteLength,
    sha256: m.createHash("sha256").update(r).digest("hex"),
  };
}
async function y(e) {
  const t = await J({
    source: e.source,
    range: e.range,
    outputDirectory: e.outputDirectory,
    sequence: e.nextSequence(),
    budget: e.budget,
    generatedPaths: e.generatedPaths,
  });
  if (t.size <= e.limits.maxBytes) return [t];
  if (
    (await f.unlink(t.filePath),
    e.budget.release(t.size),
    e.range.startPage === e.range.endPage)
  )
    throw new Error(
      `PDF page ${e.range.startPage} is too large to query safely (${t.size} bytes).`,
    );
  const a = Math.floor((e.range.startPage + e.range.endPage) / 2),
    o = await y({ ...e, range: { startPage: e.range.startPage, endPage: a } }),
    r = await y({
      ...e,
      range: { startPage: a + 1, endPage: e.range.endPage },
    });
  return [...o, ...r];
}
function K(e) {
  const t = m.createHash("sha256");
  let a = "",
    o = !1,
    r = !1;
  for (const n of e)
    if (
      "str" in n &&
      (t.update(n.str.length.toString()),
      t.update(":"),
      t.update(n.str),
      t.update(";"),
      !r)
    ) {
      for (let i = 0; i < n.str.length; ) {
        const c = n.str.codePointAt(i);
        if (c === void 0) break;
        const d = String.fromCodePoint(c);
        if (((i += d.length), Q.test(d))) {
          o = a.length > 0;
          continue;
        }
        const P = o && a.length > 0 ? 1 : 0;
        if (a.length + P + d.length > z) {
          r = !0;
          break;
        }
        (P > 0 && (a += " "), (o = !1), (a += d));
      }
      a.length > 0 && (o = !0);
    }
  return { identityHash: t.digest("hex"), text: a };
}
function Z(e, t, a) {
  const o = e.findIndex((n) => n.startPage <= t && n.endPage >= t);
  if (o < 0) return;
  let r = o;
  for (; r < e.length && e[r].endPage < a; ) r += 1;
  if (!(r >= e.length)) return { start: o + 1, end: r + 1 };
}
function h(e, t) {
  const a = Z(t, e.startPage, e.endPage);
  if (a)
    return `[PDF_INDEX pages=${e.startPage}-${e.endPage} parts=${a.start}-${a.end}] ${e.text}
`;
}
async function* ee(e, t) {
  const { getDocument: a } = await import("pdfjs-dist/legacy/build/pdf.mjs"),
    o = new Uint8Array(
      e.sourceBytes.buffer,
      e.sourceBytes.byteOffset,
      e.sourceBytes.byteLength,
    ),
    r = a({
      data: o,
      useWorkerFetch: !1,
      useWasm: !1,
      disableFontFace: !0,
      useSystemFonts: !1,
      isImageDecoderSupported: !1,
      isOffscreenCanvasSupported: !1,
      verbosity: 0,
    });
  try {
    const n = await r.promise;
    let i;
    if (n.numPages > e.maxPages)
      throw new s.PdfPreprocessorPublicError(
        `This PDF has too many pages to prepare. PDF attachments must have ${e.maxPages.toLocaleString("en-US")} pages or fewer.`,
        { stage: "text_index", reason: "resource_limit" },
      );
    for (let c = 1; c <= n.numPages; c += 1) {
      const d = await n.getPage(c),
        P = await d.getTextContent(),
        l = K(P.items);
      if ((d.cleanup(), !l.text)) {
        if (i) {
          const g = h(i, e.queryParts);
          (g && (yield g), (i = void 0));
        }
        continue;
      }
      if (
        ((t.indexedPageCount += 1),
        i?.identityHash === l.identityHash && i.endPage + 1 === c)
      ) {
        i.endPage = c;
        continue;
      }
      if (i) {
        const g = h(i, e.queryParts);
        g && (yield g);
      }
      i = {
        startPage: c,
        endPage: c,
        text: l.text,
        identityHash: l.identityHash,
      };
    }
    if (i) {
      const c = h(i, e.queryParts);
      c && (yield c);
    }
  } finally {
    await r.destroy();
  }
}
async function te(e) {
  const t = S.join(e.outputDirectory, H),
    a = { indexedPageCount: 0 };
  e.generatedPaths.add(t);
  try {
    const r = ee(e, a);
    await G.pipeline(
      A.Readable.from(r, { objectMode: !1 }),
      new b(s.PDF_TEXT_INDEX_MAX_UNCOMPRESSED_BYTES),
      q.createGzip(),
      new b(
        Math.min(
          e.budget.availableBytes(),
          s.PDF_TEXT_INDEX_MAX_COMPRESSED_BYTES,
        ),
        e.budget.availableBytes() < s.PDF_TEXT_INDEX_MAX_COMPRESSED_BYTES
          ? "derived_output_limit"
          : "resource_limit",
      ),
      N.createWriteStream(t, { flags: "wx", mode: 384 }),
    );
  } catch (r) {
    if (
      (await f.rm(t, { force: !0 }), r instanceof s.PdfPreprocessorPublicError)
    )
      throw r;
    return;
  }
  if (a.indexedPageCount === 0) {
    await f.rm(t, { force: !0 });
    return;
  }
  const o = await f.stat(t);
  return (
    e.budget.retain(o.size),
    {
      filePath: t,
      mediaType: "application/gzip",
      size: o.size,
      sha256: await k(t, o.size),
      indexedPageCount: a.indexedPageCount,
    }
  );
}
async function re(
  e,
  t,
  a = {
    maxBytes: s.PDF_QUERY_PART_MAX_BYTES,
    maxPagesPerPart: s.PDF_QUERY_PART_MAX_PAGES,
    partitionAbovePages: s.PDF_QUERY_PART_MAX_PAGES,
  },
) {
  const o = performance.now(),
    r = j(a),
    n = new Set();
  let i = "source_read";
  try {
    const c = await W(e, r.maxSourceBytes);
    i = "pdf_parse";
    const d = await E.PDFDocument.load(c, { updateMetadata: !1 }),
      P = d.getPageCount();
    if (P === 0)
      throw new s.PdfPreprocessorPublicError("The PDF contains no pages.");
    if (P > r.maxPages)
      throw new s.PdfPreprocessorPublicError(
        `This PDF has too many pages to prepare. PDF attachments must have ${r.maxPages.toLocaleString("en-US")} pages or fewer.`,
        { stage: "pdf_parse", reason: "resource_limit" },
      );
    if (!(c.byteLength > r.maxBytes || P > r.partitionAbovePages))
      return {
        outputDirectory: t,
        pageCount: P,
        pdfMetadata: x(d),
        queryParts: [],
      };
    ((i = "pdf_partition"), await f.mkdir(t, { recursive: !0 }));
    let g = 0;
    const T = () => ((g += 1), g),
      p = new $(r.maxDerivedBytes),
      _ = [],
      F = V(P, c.byteLength, r);
    for (const B of F) {
      const v = await y({
        source: d,
        range: B,
        outputDirectory: t,
        limits: r,
        nextSequence: T,
        budget: p,
        generatedPaths: n,
      });
      _.push(...v);
    }
    i = "text_index";
    const M = await te({
      sourceBytes: c,
      outputDirectory: t,
      queryParts: _,
      maxPages: r.maxPages,
      budget: p,
      generatedPaths: n,
    });
    return {
      outputDirectory: t,
      pageCount: P,
      pdfMetadata: x(d),
      queryParts: _,
      textIndex: M,
    };
  } catch (c) {
    const d = Math.max(0, Math.round(performance.now() - o));
    await Promise.allSettled([...n].map((l) => f.rm(l, { force: !0 })));
    const P = s.describePdfPreprocessorFailure(
      i,
      c instanceof Error ? c : void 0,
    );
    throw (
      c instanceof Error &&
        c.message === new E.EncryptedPDFError().message &&
        (P.reason = "encrypted_pdf"),
      (P.processingMs = d),
      new s.PdfPreprocessorPublicError(
        c instanceof s.PdfPreprocessorPublicError
          ? c.message
          : s.PDF_PREPROCESS_GENERIC_ERROR,
        P,
      )
    );
  }
}
if (!process.parentPort)
  throw new Error(
    "PdfPreprocessorWorker must run in an Electron utility process.",
  );
process.parentPort.once("message", (e) => {
  (async () => {
    let a;
    try {
      a = {
        success: !0,
        result: await re(e.data.sourcePath, e.data.outputDirectory, {
          maxBytes: s.PDF_QUERY_PART_MAX_BYTES,
          maxPagesPerPart: s.PDF_QUERY_PART_MAX_PAGES,
          partitionAbovePages: s.PDF_QUERY_PART_MAX_PAGES,
          maxDerivedBytes: e.data.maxDerivedBytes,
        }),
      };
    } catch (o) {
      a = {
        success: !1,
        failure: s.describePdfPreprocessorFailure(
          "worker_response",
          o instanceof Error ? o : void 0,
        ),
      };
    }
    process.parentPort?.postMessage(a);
  })();
});
