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
      E = new e.Error().stack;
    E &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[E] = "5979f3cd-a1c6-4469-8271-2af437315fc3"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-5979f3cd-a1c6-4469-8271-2af437315fc3"));
  })();
} catch {}
const n = require("./rustImageLimits-zqqoE-LA.js"),
  r = 5 * 1024 * 1024,
  t = n.PROVIDER_IMAGE_MAX_LONG_EDGE_PX,
  o = 1600,
  s = 300 * 1024,
  i = 720,
  d = 400,
  _ = "We couldn't prepare this image. The file may be damaged or unsupported.";
class a extends Error {
  constructor(E = _) {
    (super(E), (this.name = "ImagePreprocessorPublicError"));
  }
}
function c(e, E) {
  return !Number.isSafeInteger(e) || e <= 0 ? !1 : Math.ceil(e / 3) * 4 <= E;
}
function u(e) {
  return Math.floor(e / 4) * 3;
}
exports.IMAGE_MODEL_MAX_BASE64_BYTES = r;
exports.IMAGE_MODEL_MAX_LONG_EDGE_PX = t;
exports.IMAGE_MODEL_MAX_TOKENS = o;
exports.IMAGE_PREPROCESS_GENERIC_ERROR = _;
exports.IMAGE_PREVIEW_MAX_BASE64_BYTES = s;
exports.IMAGE_PREVIEW_MAX_LONG_EDGE_PX = i;
exports.IMAGE_PREVIEW_MAX_TOKENS = d;
exports.ImagePreprocessorPublicError = a;
exports.encodedBytesWithinBase64Budget = c;
exports.maximumEncodedBytesForBase64Budget = u;
