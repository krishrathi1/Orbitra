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
      f = new e.Error().stack;
    f &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[f] = "94400322-2699-40fa-9e1f-20055673742f"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-94400322-2699-40fa-9e1f-20055673742f"));
  })();
} catch {}
function n(e, f) {
  return f.startsWith("win32-")
    ? [
        "soffice",
        "pdfinfo",
        "pdftoppm",
        "pdftotext",
        "heif-convert",
        "JxrDecApp",
      ].includes(e)
      ? `${e}.cmd`
      : e.toLowerCase().endsWith(".exe")
        ? e
        : `${e}.exe`
    : e;
}
exports.getToolBinaryFileName = n;
