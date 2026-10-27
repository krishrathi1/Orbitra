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
      d = new e.Error().stack;
    d &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[d] = "b3b1b498-2b4b-43e6-8da0-1238cdb57e82"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-b3b1b498-2b4b-43e6-8da0-1238cdb57e82"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const n = require("./ids-B2sWlG17.js");
require("valibot");
exports.chat = n.chat;
exports.entry = n.entry;
exports.profile = n.profile;
exports.window = n.window;
