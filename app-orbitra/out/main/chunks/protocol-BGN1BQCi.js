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
      (e._sentryDebugIds[o] = "c1e6b474-9528-4186-9d8a-169e9fc43620"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c1e6b474-9528-4186-9d8a-169e9fc43620"));
  })();
} catch {}
const E = new Set(["http", "https", "ws", "wss", "ftp"]),
  g = new Map([
    ["orbitra", /^[a-z0-9-]{1,64}$/],
    ["chrome-extension", /^[a-p]{32}$/],
  ]),
  u = new Set([
    "about",
    "blob",
    "chrome",
    "chrome-error",
    "data",
    "devtools",
    "file",
    "javascript",
    "mailto",
    "view-source",
  ]),
  i = new Set([...E, "file"]),
  m = new Set([
    "asp",
    "aspx",
    "htm",
    "html",
    "jsp",
    "php",
    "xhtml",
    "csv",
    "json",
    "jsonl",
    "log",
    "markdown",
    "md",
    "ndjson",
    "tsv",
    "txt",
    "xml",
    "yaml",
    "yml",
    "doc",
    "docx",
    "epub",
    "odp",
    "ods",
    "odt",
    "pdf",
    "ppt",
    "pptx",
    "rtf",
    "xls",
    "xlsx",
    "gif",
    "jpeg",
    "jpg",
    "m4a",
    "mp3",
    "mp4",
    "png",
    "svg",
    "wav",
    "webp",
    "zip",
  ]),
  f = Object.freeze({
    scheme: null,
    hostname: null,
    port: null,
    pathExtension: null,
    hasQuery: !1,
  });
function h(e) {
  const o = e.slice(e.lastIndexOf("/") + 1),
    t = o.lastIndexOf(".");
  if (t <= 0 || t === o.length - 1) return null;
  const n = o.slice(t + 1).toLowerCase();
  return m.has(n) ? n : "other";
}
function c(e) {
  if (typeof e != "string") return f;
  let o;
  try {
    o = new URL(e);
  } catch {
    return f;
  }
  const t = o.protocol.replace(/:$/, "").toLowerCase(),
    n = o.hostname.toLowerCase(),
    s = o.search !== "",
    r = i.has(t) ? h(o.pathname) : null;
  if (E.has(t))
    return {
      scheme: t,
      hostname: n || null,
      port: o.port || null,
      pathExtension: r,
      hasQuery: s,
    };
  const l = g.get(t);
  return l
    ? {
        scheme: t,
        hostname: l.test(n) ? n : null,
        port: null,
        pathExtension: r,
        hasQuery: s,
      }
    : {
        scheme: u.has(t) ? t : "other",
        hostname: null,
        port: null,
        pathExtension: r,
        hasQuery: s,
      };
}
function R(e) {
  const { scheme: o, hostname: t } = c(e);
  return { scheme: o, hostname: t };
}
function p(e) {
  const { scheme: o, hostname: t, port: n } = c(e);
  return o === null
    ? "<invalid-url>"
    : t === null
      ? `${o}:`
      : `${o}://${t}${n === null ? "" : `:${n}`}`;
}
exports.VisitType = void 0;
(function (e) {
  ((e[(e.LINK = 1)] = "LINK"),
    (e[(e.TYPED = 2)] = "TYPED"),
    (e[(e.BOOKMARK = 3)] = "BOOKMARK"),
    (e[(e.EMBED = 4)] = "EMBED"),
    (e[(e.REDIRECT_PERMANENT = 5)] = "REDIRECT_PERMANENT"),
    (e[(e.REDIRECT_TEMPORARY = 6)] = "REDIRECT_TEMPORARY"),
    (e[(e.DOWNLOAD = 7)] = "DOWNLOAD"),
    (e[(e.FRAMED_LINK = 8)] = "FRAMED_LINK"),
    (e[(e.RELOAD = 9)] = "RELOAD"),
    (e[(e.IGNORE = 10)] = "IGNORE"),
    (e[(e.SEARCHED = 11)] = "SEARCHED"));
})(exports.VisitType || (exports.VisitType = {}));
const d = /^[A-Za-z][A-Za-z0-9_]{0,63}$/;
function O(e) {
  if (!(e instanceof Error)) return { errorName: "NonError", errorCode: null };
  const o = "code" in e ? e.code : void 0,
    t = e.name;
  return {
    errorName: typeof t == "string" && d.test(t) ? t : "Error",
    errorCode: typeof o == "string" && d.test(o) ? o : null,
  };
}
const A = "HistoryImportAborted";
function L(e) {
  if (!(e instanceof Error)) return e;
  const o = "code" in e ? e.code : void 0;
  return {
    loggedError: { name: e.name, message: e.message, stack: e.stack, code: o },
  };
}
function S(e) {
  if (!a(e) || !a(e.loggedError)) return e;
  const { name: o, message: t, stack: n, code: s } = e.loggedError,
    r = new Error(typeof t == "string" ? t : "");
  return (
    typeof o == "string" && (r.name = o),
    typeof n == "string" && (r.stack = n),
    s !== void 0 && Object.assign(r, { code: s }),
    r
  );
}
function a(e) {
  return typeof e == "object" && e !== null;
}
function I(e) {
  return a(e) && a(e.log) && typeof e.log.message == "string";
}
exports.HISTORY_IMPORT_ABORTED = A;
exports.decodeLogArg = S;
exports.encodeLogArg = L;
exports.formatUrlForLog = p;
exports.getSafeErrorLogMetadata = O;
exports.getSafeUrlLogDetail = c;
exports.getSafeUrlLogMetadata = R;
exports.isHistoryLogLine = I;
