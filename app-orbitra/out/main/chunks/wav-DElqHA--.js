"use strict";
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
      n = new t.Error().stack;
    n &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[n] = "618b1492-7797-42cb-a032-959ac5c0dd7a"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-618b1492-7797-42cb-a032-959ac5c0dd7a"));
  })();
} catch {}
const r = 4294967295;
function o(t, n = 48e3, i = 1, d = 16) {
  const f = d / 8,
    e = Buffer.alloc(44);
  return (
    e.write("RIFF", 0),
    e.writeUInt32LE(Math.min(36 + t, r), 4),
    e.write("WAVE", 8),
    e.write("fmt ", 12),
    e.writeUInt32LE(16, 16),
    e.writeUInt16LE(1, 20),
    e.writeUInt16LE(i, 22),
    e.writeUInt32LE(n, 24),
    e.writeUInt32LE(n * i * f, 28),
    e.writeUInt16LE(i * f, 32),
    e.writeUInt16LE(d, 34),
    e.write("data", 36),
    e.writeUInt32LE(Math.min(t, r), 40),
    e
  );
}
exports.WAV_UNKNOWN_SIZE = r;
exports.createWavHeader = o;
