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
      (e._sentryDebugIds[o] = "1276f2ac-742a-4d3d-a089-242ed8a68470"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-1276f2ac-742a-4d3d-a089-242ed8a68470"));
  })();
} catch {}
const w = require("node:crypto"),
  d = require("node:fs/promises"),
  g = require("node:path"),
  y = require("./chunks/rustImageWorker-B3ny-C4r.js"),
  n = require("./chunks/resourcePolicy-DcbBChq3.js");
require("@napi-rs/image");
require("heic-decode");
require("./chunks/rustImageLimits-zqqoE-LA.js");
const u = y.DEFAULT_VISION_IMAGE_SOURCE_PIXELS;
function m(e) {
  return e === "image/png" ? "png" : "jpg";
}
function E(e) {
  return w.createHash("sha256").update(e).digest("hex");
}
async function l(e, o) {
  const r = await d.open(e, "r");
  try {
    const i = await r.stat();
    if (!i.isFile()) throw new Error("Image source is not a file");
    if (i.size > o) throw new Error(`Image exceeds the ${o} source-byte limit`);
    const a = Buffer.allocUnsafe(i.size);
    let s = 0;
    for (; s < a.byteLength; ) {
      const f = await r.read(a, s, a.byteLength - s, s);
      if (f.bytesRead === 0)
        throw new Error("Image source changed while it was being read");
      s += f.bytesRead;
    }
    const t = Buffer.allocUnsafe(1);
    if ((await r.read(t, 0, 1, s)).bytesRead !== 0)
      throw new Error("Image source changed while it was being read");
    return a;
  } finally {
    await r.close();
  }
}
async function h(e) {
  if (!n.encodedBytesWithinBase64Budget(e.bytes.byteLength, e.maxBase64Bytes))
    throw new Error("Prepared image exceeds its encoded-byte budget");
  const o = m(e.mediaType),
    r = g.join(e.outputDirectory, `${e.basename}.${o}`);
  try {
    return (
      await d.writeFile(r, e.bytes, { flag: "wx", mode: 384 }),
      {
        filePath: r,
        mediaType: e.mediaType,
        size: e.bytes.byteLength,
        sha256: E(e.bytes),
        width: e.width,
        height: e.height,
      }
    );
  } catch (i) {
    throw (await d.rm(r, { force: !0 }), i);
  }
}
async function p(e, o, r) {
  const i = new Set();
  try {
    const a = y.maxVisionSourceBytesForMediaType(o);
    let s = await l(e, a);
    const t = await y.processImageForVisionTask({
      type: "processImageForVision",
      buffer: s,
      mimeType: o,
      maxBase64Bytes: n.IMAGE_MODEL_MAX_BASE64_BYTES,
      maxLongEdgePx: n.IMAGE_MODEL_MAX_LONG_EDGE_PX,
      maxImageTokens: n.IMAGE_MODEL_MAX_TOKENS,
      maxSourceBytes: a,
      maxSourcePixels: u,
    });
    if (
      ((s = new Uint8Array(0)),
      !t.buffer || !t.mediaType || !t.width || !t.height)
    )
      throw new Error(t.error ?? "Image model derivative could not be created");
    const c = await h({
      outputDirectory: r,
      basename: "model",
      bytes: t.buffer,
      mediaType: t.mediaType,
      width: t.width,
      height: t.height,
      maxBase64Bytes: n.IMAGE_MODEL_MAX_BASE64_BYTES,
    });
    return (i.add(c.filePath), { outputDirectory: r, artifact: c });
  } catch (a) {
    throw (
      await Promise.allSettled([...i].map((s) => d.rm(s, { force: !0 }))),
      a
    );
  }
}
async function _(e, o, r) {
  const i = new Set();
  try {
    const a = n.maximumEncodedBytesForBase64Budget(
        n.IMAGE_MODEL_MAX_BASE64_BYTES,
      ),
      s = await l(e, a),
      t = await y.processImageForVisionTask({
        type: "processImageForVision",
        buffer: s,
        mimeType: o,
        maxBase64Bytes: n.IMAGE_PREVIEW_MAX_BASE64_BYTES,
        maxLongEdgePx: n.IMAGE_PREVIEW_MAX_LONG_EDGE_PX,
        maxImageTokens: n.IMAGE_PREVIEW_MAX_TOKENS,
        maxSourceBytes: a,
        maxSourcePixels: u,
      });
    if (!t.buffer || !t.mediaType || !t.width || !t.height)
      throw new Error(
        t.error ?? "Image preview derivative could not be created",
      );
    const c = await h({
      outputDirectory: r,
      basename: "preview",
      bytes: t.buffer,
      mediaType: t.mediaType,
      width: t.width,
      height: t.height,
      maxBase64Bytes: n.IMAGE_PREVIEW_MAX_BASE64_BYTES,
    });
    return (i.add(c.filePath), { outputDirectory: r, artifact: c });
  } catch (a) {
    throw (
      await Promise.allSettled([...i].map((s) => d.rm(s, { force: !0 }))),
      a
    );
  }
}
if (!process.parentPort)
  throw new Error(
    "ImagePreprocessorWorker must run in an Electron utility process.",
  );
process.parentPort.once("message", (e) => {
  (async () => {
    let r;
    try {
      const a = await (e.data.task === "model" ? p : _)(
        e.data.sourcePath,
        e.data.sourceMediaType,
        e.data.outputDirectory,
      );
      r = { success: !0, task: e.data.task, result: a };
    } catch {
      r = { success: !1 };
    }
    process.parentPort?.postMessage(r);
  })();
});
