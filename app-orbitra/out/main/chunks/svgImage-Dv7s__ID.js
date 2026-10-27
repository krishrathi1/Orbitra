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
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "b505cf46-fa78-48c1-802b-c2e05c21c830"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-b505cf46-fa78-48c1-802b-c2e05c21c830"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const V = require("@napi-rs/image"),
  b = require("@resvg/resvg-js"),
  h = require("fast-xml-parser");
function I(e, r, w, f) {
  const l = new TextDecoder("utf-8", { fatal: !0 }).decode(e);
  if (/<!DOCTYPE/i.test(l))
    throw new Error("SVG document types are not supported");
  const c = [],
    m = new h.XMLParser({
      preserveOrder: !0,
      ignoreAttributes: !1,
      parseTagValue: !1,
      trimValues: !1,
      parseAttributeValue: !1,
      updateTag: (t, p, s) => {
        if (t.split(":").pop() === "a") return t;
        for (const [M, d] of Object.entries(s))
          if (
            M.replace(/^@_/, "").split(":").pop() === "href" &&
            !(d.startsWith("#") && t.split(":").pop() !== "image")
          ) {
            if (!/^data:image\/(?:png|jpeg|gif|webp);base64,/i.test(d))
              throw new Error(
                "SVG external or nested vector resources are not supported",
              );
            c.push(d);
          }
        return t;
      },
    }),
    u = new h.XMLBuilder({ preserveOrder: !0, ignoreAttributes: !1 }).build(
      m.parse(l, !0),
    );
  let i = 0;
  for (const t of c) {
    const p = Buffer.from(t.slice(t.indexOf(",") + 1), "base64"),
      s = new V.Transformer(p).metadataSync(!1);
    if (((i += s.width * s.height), !Number.isSafeInteger(i) || i > f))
      throw new Error("SVG embedded images exceed the source-pixel limit");
  }
  const y = { font: { loadSystemFonts: !1 }, logLevel: "off" },
    v = new b.Resvg(u, y),
    { width: n, height: o } = v;
  if (!Number.isFinite(n) || !Number.isFinite(o) || n <= 0 || o <= 0)
    throw new Error("Invalid SVG dimensions");
  const a = Math.min(n, o) / Math.max(n, o),
    E = 512 * Math.sqrt(w / (85 * a)),
    S = Math.sqrt(f / a),
    g = Math.floor(Math.min(r, E, S));
  if (Math.floor(g * a) < 1) throw new Error("SVG aspect ratio is too large");
  const T = n >= o ? "width" : "height";
  return new b.Resvg(u, {
    logLevel: "off",
    font: { loadSystemFonts: !0 },
    fitTo: { mode: T, value: g },
  })
    .render()
    .asPng();
}
exports.renderSvgForVision = I;
