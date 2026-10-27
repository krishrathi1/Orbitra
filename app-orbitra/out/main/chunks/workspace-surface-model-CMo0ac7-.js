"use strict";
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
      (n._sentryDebugIds[e] = "2fb458fd-fe7c-49c7-9f52-03c1a2da40f7"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-2fb458fd-fe7c-49c7-9f52-03c1a2da40f7"));
  })();
} catch {}
function a(n) {
  if (n === "") return { kind: "newTab", url: "orbitra://newtab" };
  if (!n) return null;
  let e;
  try {
    e = new URL(n);
  } catch {
    return null;
  }
  if (e.protocol !== "orbitra:" || e.username || e.password || e.port)
    return null;
  if (e.hostname === "newtab" && (e.pathname === "" || e.pathname === "/"))
    return { kind: "newTab", url: n };
  if (e.hostname === "chat") {
    const t = e.pathname.split("/").filter(Boolean);
    if (t.length === 0) return { kind: "newTab", url: "orbitra://newtab" };
    const r = t[0];
    return t.length !== 1 || !r ? null : { kind: "chat", sessionId: r, url: n };
  }
  return e.hostname === "library"
    ? { kind: "library", url: n }
    : e.hostname === "routines"
      ? { kind: "routines", url: n }
      : e.pathname === "" || e.pathname === "/"
        ? e.hostname === "companions"
          ? { kind: "newTab", url: "orbitra://newtab" }
          : e.hostname === "chat-history"
            ? { kind: "chatHistory", url: n }
            : e.hostname === "databases"
              ? { kind: "databases", url: n }
              : e.hostname === "timeline"
                ? { kind: "timeline", url: n }
                : null
        : null;
}
function i(n) {
  return a(n) === null;
}
exports.classifyWorkspaceRootSurfaceUrl = a;
exports.isWorkspaceChildPageUrl = i;
