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
      (e._sentryDebugIds[n] = "780ed146-56fd-4421-9fc3-55225a29b8cf"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-780ed146-56fd-4421-9fc3-55225a29b8cf"));
  })();
} catch {}
const o = require("node:child_process"),
  s = require("cross-spawn");
function l(e, n, r) {
  const t = {
    stdio: ["pipe", "pipe", "pipe"],
    shell: !1,
    detached: process.platform !== "win32",
    windowsHide: !0,
    ...(r?.env ? { env: r.env } : {}),
    ...(r?.cwd ? { cwd: r.cwd } : {}),
  };
  if (process.platform === "win32" && /\.(cmd|bat)$/i.test(e)) {
    if (n.some((i) => i.includes('"')))
      throw new Error(
        "Arguments for a Windows .cmd or .bat launcher cannot contain double quotes",
      );
    return s(e, n, t);
  }
  return o.spawn(e, n, t);
}
function d(e, n) {
  const r = e.pid;
  if (r != null) {
    if (process.platform === "win32") {
      if (e.exitCode != null || e.signalCode != null) return;
      try {
        o.execFile("taskkill", ["/pid", String(r), "/t", "/f"], (t) => {
          t &&
            e.exitCode == null &&
            e.signalCode == null &&
            n?.(String(t.code ?? "unavailable"));
        });
      } catch (t) {
        const i =
          t instanceof Error && "code" in t ? String(t.code) : "unavailable";
        n?.(i);
      }
      return;
    }
    try {
      process.kill(-r, "SIGKILL");
    } catch {
      try {
        e.kill("SIGKILL");
      } catch {}
    }
  }
}
exports.killProcessTree = d;
exports.spawnProcessGroup = l;
