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
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "6156f65a-27aa-4a42-93de-0162de28c712"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-6156f65a-27aa-4a42-93de-0162de28c712"));
  })();
} catch {}
const o = require("./process-tree-DTtONxmb.js"),
  d = require("../main-app.js");
function i(t) {
  return Buffer.byteLength(t, "utf8");
}
class a {
  chunks = [];
  bytes = 0;
  cursorCounter = 0;
  maxBytes;
  elideChunkBytes;
  constructor(e) {
    ((this.maxBytes = e.maxBytes),
      (this.elideChunkBytes =
        e.elideChunkBytes ?? Math.floor(e.maxBytes / 10)));
  }
  append(e) {
    for (
      this.chunks.push(e), this.bytes += i(e.data), this.cursorCounter++;
      this.bytes > this.maxBytes && this.chunks.length > 1;

    )
      this.evictOldest();
  }
  evictOldest() {
    let e = 0;
    for (; this.chunks.length > 1 && e < this.elideChunkBytes; ) {
      const r = this.chunks.shift(),
        s = i(r.data);
      ((this.bytes -= s), (e += s));
    }
    const n = { type: "stdout", data: `…[${e} bytes elided]…` };
    (this.chunks.unshift(n), (this.bytes += i(n.data)));
  }
  get totalBytes() {
    return this.bytes;
  }
  get stdout() {
    return this.chunks
      .filter((e) => e.type === "stdout")
      .map((e) => e.data)
      .join("");
  }
  get stderr() {
    return this.chunks
      .filter((e) => e.type === "stderr")
      .map((e) => e.data)
      .join("");
  }
  drainSince(e) {
    if (e >= this.cursorCounter)
      return { stdout: "", stderr: "", cursor: this.cursorCounter };
    const n = this.cursorCounter - e,
      r = this.chunks.slice(Math.max(0, this.chunks.length - n));
    return {
      stdout: r
        .filter((s) => s.type === "stdout")
        .map((s) => s.data)
        .join(""),
      stderr: r
        .filter((s) => s.type === "stderr")
        .map((s) => s.data)
        .join(""),
      cursor: this.cursorCounter,
    };
  }
}
function u(t, e, n) {
  return o.spawnProcessGroup(t, e, n);
}
function l(t) {
  o.killProcessTree(t, (e) => {
    const n = t.pid;
    n != null &&
      d.sandboxLogger.warn(
        `[SandboxHelper] Failed to start Windows process-tree cleanup pid=${n} outcome=failed reason=taskkill-spawn-failed errorCode=${e}`,
      );
  });
}
exports.LiveBuffer = a;
exports.killSandboxHelperTree = l;
exports.spawnSandboxHelper = u;
