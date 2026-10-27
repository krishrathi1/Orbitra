"use strict";
var C = Object.create;
var y = Object.defineProperty;
var M = Object.getOwnPropertyDescriptor;
var A = Object.getOwnPropertyNames;
var H = Object.getPrototypeOf,
  R = Object.prototype.hasOwnProperty;
var _ = (t, e, n, i) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let r of A(e))
      !R.call(t, r) &&
        r !== n &&
        y(t, r, {
          get: () => e[r],
          enumerable: !(i = M(e, r)) || i.enumerable,
        });
  return t;
};
var w = (t, e, n) => (
  (n = t != null ? C(H(t)) : {}),
  _(
    e || !t || !t.__esModule
      ? y(n, "default", { value: t, enumerable: !0 })
      : n,
    t,
  )
);
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
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "023ba75f-7129-4219-96d8-7d09b5aed3b7"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-023ba75f-7129-4219-96d8-7d09b5aed3b7"));
  })();
} catch {}
const j = require("turndown");
function V(t, e = 3e3) {
  return t
    .split(
      `
`,
    )
    .map((n) => {
      if (n.length <= e) return n;
      const i = Math.floor((e - 11) / 2),
        r = n.substring(0, i),
        s = n.substring(n.length - i);
      return `${r}[...${n.length - (r.length + s.length)} chars truncated, if you need this information, use an extract function...]${s}`;
    }).join(`
`);
}
function F(t, e, n) {
  const i = process.hrtime.bigint();
  try {
    const r = new j({
      headingStyle: "atx",
      hr: "---",
      bulletListMarker: "-",
      codeBlockStyle: "fenced",
      emDelimiter: "_",
    });
    (r.addRule("links", {
      filter: "a",
      replacement(u, l) {
        if (n) return u;
        const o = l,
          a =
            o.getAttribute("data-absolute-href") ||
            o.getAttribute("href") ||
            "";
        return a ? `[${u}](${a})` : u;
      },
    }),
      r.addRule("inputState", {
        filter: "input",
        replacement(u, l) {
          const o = l,
            a = (o.getAttribute("type") || "text").toLowerCase();
          if (a === "checkbox" || a === "radio")
            return o.hasAttribute("checked") ? "[x] " : "[ ] ";
          const c = o.getAttribute("value") || "";
          return c ? `[input: ${c}]` : "";
        },
      }),
      r.addRule("selectState", {
        filter: "select",
        replacement(u, l) {
          const a = Array.from(l.querySelectorAll("option[selected]"))
            .map((c) => (c.textContent || "").trim())
            .filter((c) => c.length > 0);
          return a.length === 0 ? u : `[selected: ${a.join(", ")}]`;
        },
      }));
    let s = r.turndown(t);
    ((s = s.replace(/^\s*[\r\n]/gm, "").replace(
      /\n\s+\n/g,
      `

`,
    )),
      e && (s = V(s)));
    const d = process.hrtime.bigint(),
      f = Number(d - i) / 1e6;
    return { markdown: s, timing: { durationMs: f } };
  } catch (r) {
    return { markdown: "", error: r.message || "Unknown markdown error" };
  }
}
async function B(t, e) {
  try {
    const i = (await import("cheerio")).load(t),
      r = e.map((s) => (s.startsWith("html >") ? s.slice(7) : s));
    return (i(r.join(",")).remove(), { html: i.html() });
  } catch (n) {
    return { html: t, error: n.message || "Unknown removal error" };
  }
}
function U(t, e) {
  return 1 / 0;
}
function W(t) {
  const e = t.attr("style") || "",
    n = e.includes("display:none") || e.includes("display: none"),
    i = e.includes("visibility:hidden") || e.includes("visibility: hidden"),
    r = e.includes("opacity:0") || e.includes("opacity: 0");
  return !n && !i && !r && !t.attr("hidden");
}
function q(t) {
  const e = t.prop("tagName")?.toLowerCase();
  if (!e) return !1;
  if (["a", "button", "input", "select", "textarea", "label"].includes(e))
    return !0;
  const i = t.attr("role");
  return !!(
    (i &&
      ["button", "link", "menuitem", "tab", "checkbox", "radio"].includes(i)) ||
    t.attr("onclick")
  );
}
function P(t) {
  const e = t.attr("style") || "";
  return (
    e.includes("overflow: auto") ||
    e.includes("overflow: scroll") ||
    e.includes("overflow-y: auto") ||
    e.includes("overflow-y: scroll") ||
    e.includes("overflow-x: auto") ||
    e.includes("overflow-x: scroll")
  );
}
function X(t) {
  const e = t.attr("draggable") === "true",
    n = t.attr("ondrop") || t.attr("ondragover"),
    r =
      t.prop("tagName")?.toLowerCase() === "input" && t.attr("type") === "file";
  return e || !!n || r;
}
function G(t) {
  const e = [];
  let n = t;
  for (; n && n.length && n.prop("tagName") !== "HTML"; ) {
    const r = n.prop("tagName")?.toLowerCase();
    if (!r) break;
    const s = n.parent().children(r),
      d = s.index(n);
    (s.length > 1 ? e.unshift(`${r}[${d + 1}]`) : e.unshift(r),
      (n = n.parent()));
  }
  const i = "/" + e.join("/");
  if (!i || i === "/" || i.trim() === "/") {
    console.warn("Generated empty or invalid XPath, using fallback");
    const r = t.prop("tagName")?.toLowerCase();
    return r ? `/${r}` : "/unknown";
  }
  return i;
}
async function O(t, e) {
  const n = process.hrtime.bigint();
  try {
    const r = (await import("cheerio")).load(t),
      s = [];
    r("*").each((u, l) => {
      const o = r(l),
        a = l.tagName?.toLowerCase() || o.prop("tagName")?.toLowerCase();
      if (!a || a === "script" || a === "style" || a === "meta") return;
      const c = null,
        p = o.text().trim(),
        v = o.html() || "",
        x = o
          .contents()
          .filter(function () {
            return this.type === "text";
          })
          .text()
          .trim(),
        g = {};
      l.attribs &&
        typeof l.attribs == "object" &&
        Object.entries(l.attribs).forEach(([S, $]) => {
          g[S] = String($);
        });
      const T = W(o),
        h = q(o),
        k = P(o),
        m = X(o),
        L = p.length > 0,
        D = o.find("img").length > 0,
        E = o.find("a").length > 0,
        b = ["input", "select", "textarea", "button", "form"].includes(a),
        N = a === "input" && o.attr("type") === "file",
        I = {
          element: {
            tagName: a,
            attributes: g,
            xpath: G(o),
            textContent: p.substring(0, 500),
            innerHTML: v.substring(0, 1e3),
            childText: x.substring(0, 500),
          },
          positioning: {
            bounds: c,
            distanceToViewportBorder: U(c, e),
            viewportBorder: "none",
            isInViewport:
              c && e
                ? c.top >= 0 &&
                  c.bottom <= (e.height || 1080) &&
                  c.left >= 0 &&
                  c.right <= (e.width || 1920)
                : !1,
            isVisible: T,
          },
          interactivity: {
            isClickable: h,
            isScrollable: k,
            isDragDroppable: m,
            isHighlighted: !1,
            highlightIndex: null,
            isTopElement: !1,
            isInteractive: h || m,
          },
          content: {
            hasText: L,
            hasImages: D,
            hasLinks: E,
            isFormElement: b,
            isInput: !1,
            isTextarea: !1,
            isSelect: b && a === "select",
            isFileInput: N,
            inputData: null,
            optionData: null,
          },
        };
      s.push(I);
    });
    const d = process.hrtime.bigint(),
      f = Number(d - n) / 1e6;
    return { metadata: s, timing: { durationMs: f } };
  } catch (i) {
    return {
      metadata: [],
      error: i.message || "Unknown metadata extraction error",
    };
  }
}
async function Y(t) {
  if (t.type === "markdown")
    return F(t.htmlString, t.truncateLongLines, t.simpleImages);
  if (t.type === "removeElements") return await B(t.html, t.elementsToDelete);
  if (t.type === "metadataInteractive" || t.type === "metadataStatic")
    return await O(t.htmlString, t.viewport);
  throw new Error(`unifiedWorker: unknown task type "${t.type}"`);
}
module.exports = Y;
