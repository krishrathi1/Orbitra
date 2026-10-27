"use strict";
(function () {
  try {
    var i =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    i.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var i =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      n = new i.Error().stack;
    n &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[n] = "ad521ba4-8c64-433f-ad3f-f24d2e8cf414"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-ad521ba4-8c64-433f-ad3f-f24d2e8cf414"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const F = require("node:crypto"),
  c = require("../main-app.js"),
  D = require("./unicode-CSAGP0Z8.js");
require("node:path");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
require("node:fs/promises");
require("node:os");
require("valibot");
require("node:fs");
require("node:http");
require("node:https");
require("./protocol-BGN1BQCi.js");
require("events");
require("child_process");
require("util");
require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("@reflect/auth/workos-session");
require("crypto");
require("./errors-DsbnElf-.js");
require("./savedCertificateBlocklist-BUtmL3xA.js");
require("node:tls");
require("@reflect/auth/device-policy");
require("node:process");
require("node:assert");
require("node:stream");
require("./_commonjsHelpers-DJP3_Dvh.js");
require("./index-CSlo9i6Z.js");
require("tty");
require("node-machine-id");
require("fs/promises");
require("node:timers/promises");
require("./config-CdpnFYk6.js");
require("./contracts-rChhtF3C.js");
require("@reflect/auth/desktop");
require("./worker-protocol-CFgWGf-A.js");
require("fs");
require("better-sqlite3");
require("node:child_process");
require("url");
require("stream");
require("zlib");
require("electron-updater");
require("@reflect/auth/last-login-method");
require("@reflect/auth/oauth-state");
require("@reflect/auth/session-identity");
require("./settled-read-r0Yf0ORp.js");
require("module");
require("./fs-native-KvxiM8hl.js");
require("node:module");
require("tldts");
require("node:buffer");
require("./rustImageLimits-zqqoE-LA.js");
require("mime-types");
require("./resourcePolicy-DcbBChq3.js");
require("./resourcePolicy-BX-8H2Pm.js");
require("http");
require("@ghostery/adblocker-electron");
require("./wav-DElqHA--.js");
require("js-yaml");
require("stream/promises");
require("https");
require("net");
require("tls");
require("buffer");
require("electron-chrome-web-store");
require("./ids-B2sWlG17.js");
require("@modelcontextprotocol/sdk/client/auth.js");
require("@modelcontextprotocol/sdk/client/index.js");
require("@modelcontextprotocol/sdk/client/sse.js");
require("@modelcontextprotocol/sdk/client/streamableHttp.js");
require("@modelcontextprotocol/sdk/client/stdio.js");
require("@modelcontextprotocol/sdk/shared/stdio.js");
require("./process-tree-DTtONxmb.js");
require("cross-spawn");
require("piscina");
require("@modelcontextprotocol/sdk/shared/auth-utils.js");
require("@modelcontextprotocol/sdk/server/auth/errors.js");
require("@modelcontextprotocol/sdk/shared/auth.js");
require("node:readline");
require("async-mutex");
require("node:net");
require("electron-dl");
require("tar");
require("node:inspector/promises");
require("node:v8");
require("tokenx");
require("marked");
require("lodash/debounce");
require("./worker-protocol-CcOBX8D2.js");
require("node:zlib");
require("node:diagnostics_channel");
require("worker_threads");
require("diagnostics_channel");
require("./singleInstance-CuMDgUKt.js");
const E = "The tab is no longer available. Read the tab again.";
function N(i, n) {
  const u = window;
  let s = document.activeElement;
  for (; s?.shadowRoot?.activeElement; ) s = s.shadowRoot.activeElement;
  let e = n ? u.__strwElementMap?.[n]?.deref() : s;
  const o =
      e?.namespaceURI === "http://www.w3.org/1999/xhtml" &&
      e.matches("input, textarea")
        ? e
        : null,
    y = o
      ? !o.disabled &&
        !o.readOnly &&
        [
          "textarea",
          "text",
          "search",
          "email",
          "password",
          "url",
          "tel",
          "number",
        ].includes(o.type)
      : !!e && "isContentEditable" in e && e.isContentEditable === !0,
    b = !!e && y && e === s && e.isConnected && e.ownerDocument === document;
  b || (e = null);
  const f = (u.__strwTextInputGuards ??= Object.create(null));
  let m = "waiting",
    k = null,
    p = "",
    x = null,
    I = !1;
  function g() {
    let t = document.activeElement;
    for (; t?.shadowRoot?.activeElement; ) t = t.shadowRoot.activeElement;
    return !!e && e.isConnected && e.ownerDocument === document && t === e;
  }
  function v(t) {
    ((k = t),
      (m !== "armed" || !g() || t.composedPath()[0] !== e) &&
        ((m = "blocked"), t.preventDefault(), t.stopImmediatePropagation()));
  }
  function T() {
    ((m = "blocked"), k?.preventDefault());
  }
  function l(t) {
    !t.isTrusted ||
      t.composedPath()[0] !== e ||
      !("data" in t) ||
      !("inputType" in t) ||
      ((I = !0),
      typeof t.data == "string"
        ? (p += t.data)
        : t.inputType === "insertText" &&
          (p += `
`),
      (k = null));
  }
  function w() {
    (clearTimeout(A),
      document.removeEventListener("beforeinput", v, !0),
      document.removeEventListener("keydown", v, !0),
      document.removeEventListener("keyup", v, !0),
      document.removeEventListener("input", l, !0),
      e?.removeEventListener("blur", T, !0),
      delete f[i],
      Object.keys(f).length === 0 && delete u.__strwTextInputGuards);
  }
  let q = "",
    S = !1;
  ((f[i] = {
    prepare(t, r) {
      if (m === "blocked" || !g()) return !1;
      if (((m = "armed"), (q = r), (S = t), o)) {
        const a = o.selectionStart,
          d = o.selectionEnd;
        t
          ? (x = r)
          : a !== null &&
            d !== null &&
            (x = o.value.slice(0, a) + r + o.value.slice(d));
      }
      return g();
    },
    ready() {
      if (m !== "armed" || !g()) return !1;
      if (!S) return !0;
      if (o) {
        const $ = o.selectionStart;
        return $ === null || ($ === 0 && o.selectionEnd === o.value.length);
      }
      if (!e) return !1;
      const t = document.getSelection();
      if (!t) return !1;
      const r = e.getRootNode(),
        a = t.getComposedRanges({
          shadowRoots: r.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? [r] : [],
        }),
        d = a[0];
      if (
        a.length !== 1 ||
        !e.contains(d.startContainer) ||
        !e.contains(d.endContainer)
      )
        return !1;
      const h = document.createRange();
      return (
        h.setStart(d.startContainer, d.startOffset),
        h.setEnd(d.endContainer, d.endOffset),
        h.toString() === e.textContent
      );
    },
    complete() {
      let t = "detached";
      return (
        e?.isConnected &&
          e.ownerDocument === document &&
          (t = g() ? "focused" : "unfocused"),
        I && p === q
          ? { delivery: "confirmed", target: t }
          : m === "blocked" || t === "detached"
            ? { delivery: "unverified", target: t }
            : S && (o ? o.value === q : e?.textContent === q)
              ? { delivery: "confirmed", target: t }
              : I && o && x !== null && o.value === x
                ? { delivery: "confirmed", target: t }
                : { delivery: "unverified", target: t }
      );
    },
    dispose: w,
  }),
    document.addEventListener("beforeinput", v, !0),
    document.addEventListener("keydown", v, !0),
    document.addEventListener("keyup", v, !0),
    document.addEventListener("input", l, !0),
    e?.addEventListener("blur", T, !0));
  const A = setTimeout(w, 1e4);
  return b ? (document.hasFocus() ? "focused" : "retained") : "other";
}
function O() {
  const i = window;
  let n = document.activeElement;
  for (; n?.shadowRoot?.activeElement; ) n = n.shadowRoot.activeElement;
  if (!n || n === document.body)
    return { hasFocus: document.hasFocus(), active: null };
  const s =
      (n.namespaceURI === "http://www.w3.org/1999/xhtml" &&
        n.matches("input, textarea")) ||
      ("isContentEditable" in n && n.isContentEditable === !0),
    e =
      ["button", "a", "summary", "option"].includes(n.tagName.toLowerCase()) ||
      [
        "button",
        "link",
        "tab",
        "menuitem",
        "option",
        "checkbox",
        "radio",
      ].includes(n.getAttribute("role") ?? ""),
    o = (
      n.getAttribute("aria-label") ??
      n.getAttribute("placeholder") ??
      n.getAttribute("title") ??
      (e ? n.innerText : "") ??
      ""
    )
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 60),
    y = i.__strwElementMap ?? {},
    b = Object.keys(y).find((f) => y[f].deref() === n) ?? null;
  return {
    hasFocus: document.hasFocus(),
    active: {
      tag: n.tagName.toLowerCase(),
      role: n.getAttribute("role"),
      name: o,
      editable: s,
      strwId: b,
    },
  };
}
function R(i) {
  if (!i) return "the focused element could not be determined";
  const n = i.hasFocus ? "" : " and the page does not have keyboard focus",
    u = i.active;
  if (!u) return `the page body (no control is focused)${n}`;
  const s = u.role ? ` role=${u.role}` : "",
    e = u.name ? ` "${u.name}"` : "",
    o = u.strwId ? ` (${u.strwId})` : "",
    y = u.editable ? "" : ", which is not a text field";
  return `<${u.tag}${s}${e}>${o}${y}${n}`;
}
async function W(i) {
  let n = null;
  for (const u of i)
    if (!(u.detached || u.isDestroyed()))
      try {
        const s = await u.executeJavaScript(`(${O.toString()})()`);
        if (s?.active) return s;
        n ??= s;
      } catch {}
  return n;
}
const _ = new WeakSet();
async function J(i, n, u, s, e, o, y) {
  if ((c.throwIfAborted(e), _.has(i)))
    throw new Error(
      "Another typing operation is in progress in this tab. Read the tab again.",
    );
  const b = [],
    f = F.randomUUID(),
    m = [];
  let k = !1,
    p;
  const x = c.safeWithWebContents(i, (l) => l.mainFrame.framesInSubtree);
  if (!x.ok) throw new Error(E);
  const I = x.value,
    g = s ? `element '${s}'` : "the focused element",
    v = s
      ? "Read the tab again."
      : "Read the tab again, then type into the intended field with tab.type(handle, text).",
    T = async (l) => {
      const w = await W(m),
        q = !s && w?.active?.editable ? "focus moved before typing started" : l;
      return `Typing into ${g} stopped before text insertion: ${q}; focus is on ${R(w)}. ${v}`;
    };
  _.add(i);
  try {
    for (const r of I) {
      (c.throwIfAborted(e), m.push(r));
      let a;
      try {
        a = await r.executeJavaScript(
          `(${N.toString()})(${JSON.stringify(f)}, ${JSON.stringify(s ?? null)})`,
        );
      } catch (d) {
        if (
          (c.throwIfAborted(e),
          d === "Script not run" ||
            (d instanceof Error && d.message === "Script not run"))
        ) {
          const h = c.safeWithWebContents(i, ($) => {
            const C = $.focusedFrame;
            return r === $.mainFrame || C === null
              ? null
              : r !== C
                ? "unrelated"
                : r === y
                  ? "native"
                  : null;
          });
          if (!h.ok) throw new Error(E);
          if (h.value) {
            ((k = !0), h.value === "native" && (p = r));
            continue;
          }
        }
        throw d;
      }
      if (a === "focused" || a === "retained") b.push({ frame: r, focus: a });
      else if (a !== "other")
        throw new Error(await T("the guard could not be installed"));
    }
    c.throwIfAborted(e);
    let l = b;
    if (!s) {
      const r = b.filter((a) => a.focus === "focused");
      if (r.length > 0) l = r;
      else {
        const a = c.safeWithWebContents(i, (h) => h.focusedFrame);
        if (!a.ok) throw new Error(E);
        const d = b.find((h) => h.frame === a.value);
        d && (l = [d]);
      }
    }
    if (!p && l.length !== 1) {
      let r;
      throw (
        l.length === 0
          ? (r = s
              ? "it is not the focused element"
              : "nothing editable is focused")
          : (r = "more than one frame reports a focused text field"),
        new Error(await T(r))
      );
    }
    const w = p ?? l[0].frame,
      q = () => {
        if ((c.throwIfAborted(e), !k)) return;
        const r = c.safeWithWebContents(i, (a) => a.focusedFrame);
        if (!r.ok) throw new Error(E);
        if (r.value !== w)
          throw new Error(
            `Typing into ${g} stopped because focus left the selected frame. Inspect the field before retrying; some text may already be present.`,
          );
      },
      S = D.sanitizeUnpairedSurrogates(n);
    if (
      !p &&
      (await w.executeJavaScript(
        `window.__strwTextInputGuards?.[${JSON.stringify(f)}]?.prepare(${u}, ${JSON.stringify(S)}) ?? false`,
      )) !== !0
    )
      throw new Error(await T("the target lost focus before typing started"));
    if (
      (c.throwIfAborted(e),
      !c.safeWithWebContents(i, (r) => {
        r.debugger.isAttached() || r.debugger.attach("1.3");
      }).ok)
    )
      throw new Error(E);
    if (u) {
      q();
      const r = process.platform === "darwin" ? 4 : 2;
      if (
        !(
          await c.safeSendWebContentsDebuggerCommand(
            i,
            "Input.dispatchKeyEvent",
            {
              type: "keyDown",
              key: "a",
              code: "KeyA",
              windowsVirtualKeyCode: 65,
              modifiers: r,
              commands: ["selectAll"],
            },
          )
        ).ok
      )
        throw new Error(E);
      if (
        !(
          await c.safeSendWebContentsDebuggerCommand(
            i,
            "Input.dispatchKeyEvent",
            {
              type: "keyUp",
              key: "a",
              code: "KeyA",
              windowsVirtualKeyCode: 65,
              modifiers: r,
            },
          )
        ).ok
      )
        throw new Error(E);
    }
    if (
      (c.throwIfAborted(e),
      !p &&
        (await w.executeJavaScript(
          `window.__strwTextInputGuards?.[${JSON.stringify(f)}]?.ready() ?? false`,
        )) !== !0)
    )
      throw new Error(await T("the replacement selection was not ready"));
    if ((c.throwIfAborted(e), o)) await o(S, q, p !== void 0);
    else if (
      (q(),
      !(
        await c.safeSendWebContentsDebuggerCommand(i, "Input.insertText", {
          text: S,
        })
      ).ok)
    )
      throw new Error(E);
    if ((c.throwIfAborted(e), p))
      return {
        delivery: "unverified",
        target: "unknown",
        guardUnavailable: !0,
      };
    const t = await w.executeJavaScript(
      `window.__strwTextInputGuards?.[${JSON.stringify(f)}]?.complete() ?? null`,
    );
    if (t && typeof t == "object" && "delivery" in t && "target" in t) {
      const { delivery: r, target: a } = t;
      if (
        (r === "confirmed" || r === "unverified") &&
        (a === "focused" || a === "unfocused" || a === "detached")
      )
        return { delivery: r, target: a };
    }
    throw new Error(
      `Text insertion into ${g} was dispatched, but its result is unavailable. Read the tab before retrying.`,
    );
  } finally {
    (await Promise.allSettled(
      m.map((l) =>
        l.detached || l.isDestroyed()
          ? Promise.resolve()
          : l.executeJavaScript(
              `window.__strwTextInputGuards?.[${JSON.stringify(f)}]?.dispose()`,
            ),
      ),
    ),
      _.delete(i));
  }
}
exports.formatFocusSummary = R;
exports.insertGuardedText = J;
