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
      (e._sentryDebugIds[n] = "fcd432b3-f8bc-4877-991d-da2fd9a9608c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-fcd432b3-f8bc-4877-991d-da2fd9a9608c"));
  })();
} catch {}
const y = require("@napi-rs/image"),
  ee = require("heic-decode"),
  I = require("./rustImageLimits-zqqoE-LA.js"),
  te = { r: 147, g: 51, b: 234 },
  ne = { r: 255, g: 255, b: 255 },
  Y = { x: 5.5, y: 3 },
  ie = [
    { x: 5.5, y: 3 },
    { x: 5.5, y: 21.5 },
    { x: 11.2, y: 15.8 },
    { x: 18.8, y: 15.8 },
    { x: 6.2, y: 2.6 },
  ],
  re = [
    { x: 7.5, y: 7 },
    { x: 7.5, y: 16.8 },
    { x: 10.4, y: 13.9 },
    { x: 12, y: 13.9 },
    { x: 15.8, y: 14 },
    { x: 7.5, y: 6.2 },
  ],
  se = 22,
  oe = 22;
function D(e, n, i) {
  let t = !1,
    r = i.length - 1;
  for (let s = 0; s < i.length; s++) {
    const o = i[s],
      c = i[r];
    if (o.y > n != c.y > n) {
      const a = ((c.x - o.x) * (n - o.y)) / (c.y - o.y) + o.x;
      e < a && (t = !t);
    }
    r = s;
  }
  return t;
}
function G(e, n, i, t, r, s) {
  if (t < 0 || r < 0 || t >= n || r >= i) return;
  const o = (r * n + t) * 4;
  ((e[o] = s.r), (e[o + 1] = s.g), (e[o + 2] = s.b), (e[o + 3] = 255));
}
function ae(e, n, i, t) {
  if (
    n <= 0 ||
    i <= 0 ||
    e.length < n * i * 4 ||
    !Number.isFinite(t.x) ||
    !Number.isFinite(t.y)
  )
    return;
  const r = Math.round(t.x - Y.x),
    s = Math.round(t.y - Y.y),
    o = t.color ?? te;
  for (let c = 0; c < oe; c++)
    for (let u = 0; u < se; u++) {
      const l = u + 0.5,
        a = c + 0.5,
        f = r + u,
        S = s + c;
      (D(l, a, ie) && G(e, n, i, f, S, ne), D(l, a, re) && G(e, n, i, f, S, o));
    }
}
const X = 5 * 1024 * 1024,
  H = 1600,
  q = 512,
  ce = 85,
  fe = 80,
  le = 40,
  ue = 10,
  me = 92,
  ge = 30,
  ye = 10,
  he = new Set(["image/heic", "image/heif"]),
  de = 16777216,
  pe = 128 * 1024 * 1024,
  Ie = 32 * 1024 * 1024,
  Z = 8 * 1024 * 1024,
  v = 32e6;
function B(e) {
  return Math.ceil(e.length / 3) * 4;
}
function Se(e, n) {
  const i = e / q,
    t = n / q;
  return i * t * ce;
}
function $(e) {
  return he.has(e.toLowerCase());
}
function N(e, n, i) {
  const t = e ?? n;
  if (!Number.isSafeInteger(t) || t <= 0)
    throw new Error("Image resource limits must be positive integers");
  return Math.min(t, i);
}
function j(e) {
  return e.split(";", 1)[0].trim().toLowerCase() === "image/svg+xml"
    ? Z
    : $(e)
      ? Ie
      : pe;
}
function F(e, n, i) {
  if (!Number.isSafeInteger(e) || !Number.isSafeInteger(n) || e <= 0 || n <= 0)
    throw new Error("Invalid image dimensions");
  const t = e * n;
  if (!Number.isSafeInteger(t))
    throw new Error("Image dimensions exceed the safe integer range");
  if (t > i) throw new Error(`Image exceeds the ${i} source-pixel limit`);
}
function W(e, n) {
  if (n.split(";", 1)[0].trim().toLowerCase() === "image/svg+xml") return !0;
  const i = Buffer.from(e.subarray(0, 1024))
    .toString("utf8")
    .replace(/^\uFEFF/, "")
    .trimStart();
  return /^(?:<\?xml[^>]*>\s*)?(?:<!--[\s\S]*?-->\s*)*<svg(?:\s|>)/i.test(i);
}
function Ee(e, n, i) {
  const t = e.rawPixelsSync(),
    r = n * i,
    s = t.length / r;
  if (!Number.isSafeInteger(s) || s < 1 || s > 4) return !1;
  let o;
  if ((s === 4 ? (o = 3) : s === 2 ? (o = 1) : (o = null), o === null))
    return s === 1 || s === 3;
  let c = n,
    u = i,
    l = -1,
    a = -1;
  for (let h = 0; h < r; h += 1) {
    if (t[h * s + o] <= 8) continue;
    const p = h % n,
      b = Math.floor(h / n);
    ((c = Math.min(c, p)),
      (u = Math.min(u, b)),
      (l = Math.max(l, p)),
      (a = Math.max(a, b)));
  }
  if (l < 0 || a < 0) return !1;
  const f = l - c + 1,
    S = a - u + 1;
  return (
    f >= I.NORMALIZED_FAVICON_SIZE / 8 || S >= I.NORMALIZED_FAVICON_SIZE / 8
  );
}
async function _e(e) {
  try {
    if (e.buffer.byteLength === 0) throw new Error("Favicon is empty");
    if (e.buffer.byteLength > I.MAX_FAVICON_SOURCE_BYTES)
      throw new Error(
        `Favicon exceeds the ${I.MAX_FAVICON_SOURCE_BYTES} source-byte limit`,
      );
    let n = W(e.buffer, e.mimeType)
      ? y.Transformer.fromSvg(e.buffer)
      : new y.Transformer(e.buffer);
    const i = n.metadataSync(!1);
    (F(i.width, i.height, de),
      (n = n.resize(I.NORMALIZED_FAVICON_SIZE, I.NORMALIZED_FAVICON_SIZE)));
    const t = n.metadataSync(!1);
    if (
      (F(
        t.width,
        t.height,
        I.NORMALIZED_FAVICON_SIZE * I.NORMALIZED_FAVICON_SIZE,
      ),
      !Ee(n, t.width, t.height))
    )
      throw new Error("Favicon has no useful visible pixels");
    const r = n.pngSync();
    if (r.length === 0 || r.length > I.MAX_FAVICON_OUTPUT_BYTES)
      throw new Error("Normalized favicon has an invalid size");
    return {
      taskType: "processFavicon",
      buffer: r,
      width: t.width,
      height: t.height,
    };
  } catch (n) {
    return {
      taskType: "processFavicon",
      buffer: null,
      error: n instanceof Error ? n.message : String(n),
    };
  }
}
async function be(e, n) {
  const i = await ee.all({ buffer: e });
  try {
    const t = i[0];
    if (!t) throw new Error("HEIF image not found");
    F(t.width, t.height, n);
    const r = await t.decode();
    if ((F(r.width, r.height, n), r.width !== t.width || r.height !== t.height))
      throw new Error("HEIF dimensions changed during decode");
    const s = r.width * r.height * 4;
    if (!Number.isSafeInteger(s) || r.data.byteLength !== s)
      throw new Error("HEIF decoder returned an invalid pixel buffer");
    const o = new Uint8Array(
      r.data.buffer,
      r.data.byteOffset,
      r.data.byteLength,
    );
    return {
      transformer: y.Transformer.fromRgbaPixels(o, r.width, r.height),
      width: r.width,
      height: r.height,
    };
  } finally {
    i.dispose();
  }
}
const we = new Set(["image/png", "image/gif", "image/webp"]),
  Te = new Set([
    y.JsColorType.La8,
    y.JsColorType.Rgba8,
    y.JsColorType.La16,
    y.JsColorType.Rgba16,
    y.JsColorType.Rgba32F,
  ]);
function J(e, n, i) {
  return Math.min(i, Math.max(n, e));
}
function K(e) {
  const n = J(Math.round(e.initialQuality), 1, 100),
    i = J(Math.round(e.minQuality), 1, n),
    t = Math.max(1, Math.round(e.step));
  return { initialQuality: n, minQuality: i, step: t };
}
async function Me(e) {
  const n = performance.now();
  try {
    const {
      buffer: i,
      width: t,
      height: r,
      maxDimension: s,
      maxSizeBytes: o,
    } = e;
    for (let g = 0; g < i.length; g += 4) {
      const E = i[g];
      ((i[g] = i[g + 2]), (i[g + 2] = E));
    }
    e.cursor && ae(i, t, r, e.cursor);
    let c = y.Transformer.fromRgbaPixels(i, t, r);
    const u = performance.now(),
      l = t > s || r > s;
    let a = t,
      f = r;
    if (l) {
      const g = Math.min(s / t, s / r);
      ((a = Math.round(t * g)),
        (f = Math.round(r * g)),
        (c = c.fastResize({
          width: a,
          height: f,
          filter: y.FastResizeFilter.Bilinear,
        })));
    }
    const S = performance.now() - u,
      h = performance.now();
    if (e.format === "png") {
      let g = 1,
        E = c.pngSync(),
        _ = 100;
      E.length > o &&
        ((g = 2),
        (E = y.pngQuantizeSync(E, {
          minQuality: 40,
          maxQuality: 80,
          speed: 5,
        })),
        (_ = 80));
      const T = performance.now() - h,
        M = performance.now() - n;
      return {
        taskType: "processScreenshot",
        base64: `data:image/png;base64,${E.toString("base64")}`,
        width: a,
        height: f,
        metrics: {
          resizeMs: S,
          encodeMs: T,
          totalMs: M,
          finalQuality: _,
          finalSizeBytes: E.length,
          iterations: g,
        },
      };
    }
    const p = K({ initialQuality: me, minQuality: ge, step: ye });
    let b = p.initialQuality,
      O = 0,
      w;
    do {
      if ((O++, (w = c.jpegSync(b)), w.length <= o)) break;
      b -= p.step;
    } while (b >= p.minQuality);
    const C = performance.now() - h,
      A = performance.now() - n;
    return {
      taskType: "processScreenshot",
      base64: `data:image/jpeg;base64,${w.toString("base64")}`,
      width: a,
      height: f,
      metrics: {
        resizeMs: S,
        encodeMs: C,
        totalMs: A,
        finalQuality: Math.max(b, p.minQuality),
        finalSizeBytes: w.length,
        iterations: O,
      },
    };
  } catch (i) {
    const t = performance.now() - n;
    return {
      taskType: "processScreenshot",
      base64: null,
      width: 0,
      height: 0,
      error: i instanceof Error ? i.message : String(i),
      metrics: {
        resizeMs: 0,
        encodeMs: 0,
        totalMs: t,
        finalQuality: 0,
        finalSizeBytes: 0,
        iterations: 0,
      },
    };
  }
}
async function k(e) {
  const n = performance.now();
  try {
    const i = j(e.mimeType),
      t = N(e.maxBase64Bytes, X, X),
      r = N(
        e.maxLongEdgePx,
        I.PROVIDER_IMAGE_MAX_LONG_EDGE_PX,
        I.PROVIDER_IMAGE_MAX_LONG_EDGE_PX,
      ),
      s = N(e.maxImageTokens, H, H),
      o = N(e.maxSourceBytes, i, i),
      c = N(e.maxSourcePixels, v, v);
    if (e.buffer.byteLength > o)
      throw new Error(`Image exceeds the ${o} source-byte limit`);
    const u = K({
      initialQuality: e.initialJpegQuality ?? fe,
      minQuality: e.minJpegQuality ?? le,
      step: e.jpegQualityStep ?? ue,
    });
    let l,
      a,
      f,
      S = !1,
      h;
    const p = W(e.buffer, e.mimeType);
    if (p && e.buffer.byteLength > Z)
      throw new Error("SVG exceeds the source-byte limit");
    if ($(e.mimeType)) {
      const m = await be(e.buffer, c);
      ((l = m.transformer), (a = m.width), (f = m.height));
    } else {
      let m = e.buffer;
      if (p) {
        const { renderSvgForVision: x } = await Promise.resolve().then(() =>
          require("./svgImage-Dv7s__ID.js"),
        );
        m = x(e.buffer, r, s, c);
      }
      l = new y.Transformer(m);
      const d = l.metadataSync(!1);
      ((a = d.width),
        (f = d.height),
        (S = Te.has(d.colorType)),
        !p &&
          (d.format === "png" || d.format === "jpeg") &&
          (h = `image/${d.format}`));
    }
    F(a, f, c);
    const b = performance.now(),
      O = Math.max(a, f),
      w = Se(a, f),
      C = O > r || w > s;
    let A = !1;
    if (!C && h && B(e.buffer) <= t)
      return {
        taskType: "processImageForVision",
        buffer: e.buffer,
        mediaType: h,
        width: a,
        height: f,
        resized: !1,
        quality: h === "image/png" ? 100 : void 0,
        metrics: {
          resizeMs: 0,
          encodeMs: 0,
          totalMs: performance.now() - n,
          finalQuality: 100,
          finalSizeBytes: e.buffer.byteLength,
          iterations: 0,
        },
      };
    if (C) {
      const m = r / O,
        d = Math.sqrt(s / w),
        x = Math.min(1, m, d),
        L = Math.max(1, Math.floor(a * x)),
        V = Math.max(1, Math.floor(f * x));
      ((l = l.fastResize({
        width: L,
        height: V,
        filter: y.FastResizeFilter.Bilinear,
      })),
        (a = L),
        (f = V),
        (A = !0));
    }
    const R = performance.now() - b,
      g = p || (we.has(e.mimeType.toLowerCase()) && S),
      E = performance.now();
    let _ = 0;
    if (g) {
      _ = 1;
      let m = l.pngSync(),
        d = 100;
      B(m) > t &&
        ((_ = 2),
        (m = y.pngQuantizeSync(m, {
          minQuality: 40,
          maxQuality: 80,
          speed: 5,
        })),
        (d = 80));
      const x = performance.now() - E,
        L = performance.now() - n;
      return B(m) <= t
        ? {
            taskType: "processImageForVision",
            buffer: m,
            mediaType: "image/png",
            width: a,
            height: f,
            resized: A,
            quality: d,
            metrics: {
              resizeMs: R,
              encodeMs: x,
              totalMs: L,
              finalQuality: d,
              finalSizeBytes: m.length,
              iterations: _,
            },
          }
        : {
            taskType: "processImageForVision",
            buffer: null,
            error: `PNG exceeds ${t} base64-byte budget after resize and quantization`,
            metrics: {
              resizeMs: R,
              encodeMs: x,
              totalMs: L,
              finalQuality: d,
              finalSizeBytes: m.length,
              iterations: _,
            },
          };
    }
    let T = u.initialQuality,
      M = Buffer.alloc(0),
      P = !1;
    do {
      if ((_++, (M = l.jpegSync(T)), B(M) <= t)) {
        P = !0;
        break;
      }
      T -= u.step;
    } while (T >= u.minQuality);
    const U = performance.now() - E,
      z = performance.now() - n,
      Q = P ? T : Math.max(T + u.step, u.minQuality);
    return P
      ? {
          taskType: "processImageForVision",
          buffer: M,
          mediaType: "image/jpeg",
          width: a,
          height: f,
          resized: A,
          quality: Q,
          metrics: {
            resizeMs: R,
            encodeMs: U,
            totalMs: z,
            finalQuality: Q,
            finalSizeBytes: M.length,
            iterations: _,
          },
        }
      : {
          taskType: "processImageForVision",
          buffer: null,
          error: `Image exceeds ${t} base64-byte budget after compression`,
          metrics: {
            resizeMs: R,
            encodeMs: U,
            totalMs: z,
            finalQuality: Q,
            finalSizeBytes: M.length,
            iterations: _,
          },
        };
  } catch (i) {
    const t = performance.now() - n;
    return {
      taskType: "processImageForVision",
      buffer: null,
      error: i instanceof Error ? i.message : String(i),
      metrics: {
        resizeMs: 0,
        encodeMs: 0,
        totalMs: t,
        finalQuality: 0,
        finalSizeBytes: 0,
        iterations: 0,
      },
    };
  }
}
async function xe(e) {
  switch (e.type) {
    case "processScreenshot":
      return Me(e);
    case "processImageForVision":
      return k(e);
    case "processFavicon":
      return _e(e);
  }
}
exports.DEFAULT_VISION_IMAGE_SOURCE_PIXELS = v;
exports.maxVisionSourceBytesForMediaType = j;
exports.processImageForVisionTask = k;
exports.processImageTask = xe;
