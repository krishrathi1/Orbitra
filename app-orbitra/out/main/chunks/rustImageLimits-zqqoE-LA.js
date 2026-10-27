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
      (e._sentryDebugIds[n] = "cf566f3e-7656-4ea8-9e01-c7b82ad40162"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-cf566f3e-7656-4ea8-9e01-c7b82ad40162"));
  })();
} catch {}
const _ = 3e3,
  d = 1024 * 1024,
  f = 256 * 1024,
  o = 64;
exports.MAX_FAVICON_OUTPUT_BYTES = f;
exports.MAX_FAVICON_SOURCE_BYTES = d;
exports.NORMALIZED_FAVICON_SIZE = o;
exports.PROVIDER_IMAGE_MAX_LONG_EDGE_PX = _;
