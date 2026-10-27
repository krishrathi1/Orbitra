"use strict";
(function () {
  try {
    var a =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    a.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var a =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      n = new a.Error().stack;
    n &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[n] = "5b9bd1d5-c1d0-432a-8695-64e98608fa8b"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-5b9bd1d5-c1d0-432a-8695-64e98608fa8b"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const m = require("./unicode-CSAGP0Z8.js");
function E(a) {
  function n(e) {
    return a((e ?? "").replace(/\s+/g, " ").trim().slice(0, 160));
  }
  function y(e) {
    const t = e.getRootNode();
    if (
      t.nodeType === Node.DOCUMENT_NODE ||
      t.nodeType === Node.DOCUMENT_FRAGMENT_NODE
    ) {
      const d = t,
        s = (e.getAttribute("aria-labelledby") ?? "")
          .split(/\s+/)
          .slice(0, 3)
          .map((f) => d.getElementById(f)?.textContent ?? "")
          .join(" ");
      if (n(s)) return n(s);
    }
    const r = n(e.getAttribute("aria-label"));
    if (r) return r;
    if (
      e.namespaceURI === "http://www.w3.org/1999/xhtml" &&
      e.matches("input, textarea, select")
    ) {
      const s = Array.from(e.labels ?? [])
        .slice(0, 3)
        .map((f) => f.textContent ?? "")
        .join(" ");
      return n(s)
        ? n(s)
        : n(e.getAttribute("placeholder") || e.getAttribute("title"));
    }
    return e.matches('button, a, [role="button"], [role="link"]')
      ? n(e.textContent)
      : n(e.getAttribute("title"));
  }
  function b(e) {
    const t = n(e.getAttribute("role")),
      r = y(e);
    return {
      tag: n(e.localName),
      ...(t ? { role: t } : {}),
      ...(r ? { label: r } : {}),
    };
  }
  function g(e) {
    if (e.assignedSlot) return e.assignedSlot;
    if (e.parentElement) return e.parentElement;
    const t = e.getRootNode();
    return t.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? t.host : null;
  }
  const c = document.hasFocus();
  let o = document.activeElement;
  for (; o?.shadowRoot?.activeElement; ) o = o.shadowRoot.activeElement;
  if (!o || o === document.body || o === document.documentElement)
    return { status: "none", pageHasFocus: c };
  if (o.matches("iframe, frame"))
    return { status: "unavailable", pageHasFocus: c };
  let h = null,
    u = o,
    i = g(o);
  for (
    let e = 0;
    i && e < 16 && !(i === document.body || i === document.documentElement);
    e++
  ) {
    const t = i.querySelector(
        'h1, h2, h3, h4, h5, h6, [role="heading"], legend',
      ),
      r =
        t &&
        !u.contains(t) &&
        t.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_FOLLOWING &&
        !t.closest('[hidden], [aria-hidden="true"]') &&
        t.getClientRects().length > 0
          ? n(t.textContent)
          : "",
      d = b(i);
    if (d.label || r) {
      h = { ...d, ...(r ? { heading: r } : {}) };
      break;
    }
    ((u = i), (i = g(i)));
  }
  const l =
    o.namespaceURI === "http://www.w3.org/1999/xhtml" &&
    o.matches("input, textarea")
      ? o
      : null;
  let p = "isContentEditable" in o && o.isContentEditable === !0;
  return (
    l &&
      (p =
        [
          "textarea",
          "text",
          "search",
          "email",
          "password",
          "url",
          "tel",
          "number",
        ].includes(l.type) &&
        !l.readOnly &&
        !l.disabled),
    {
      status: "focused",
      pageHasFocus: c,
      element: {
        ...b(o),
        ...(l?.localName === "input" ? { type: l.type } : {}),
        editable: p,
      },
      context: h,
    }
  );
}
function w() {
  return `(${E.toString()})(${m.sanitizeUnpairedSurrogates.toString()})`;
}
exports.formatReadFocusedElementCall = w;
