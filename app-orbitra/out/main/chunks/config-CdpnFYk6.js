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
      (e._sentryDebugIds[n] = "9842541a-7e39-4a63-99cb-924defab9549"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-9842541a-7e39-4a63-99cb-924defab9549"));
  })();
} catch {}
const l = /[\u0000-\u001f\u007f]/;
function a(e) {
  return l.test(e);
}
const o = [
    ".pnpm-store",
    ".venv",
    "__pycache__",
    ".mypy_cache",
    ".pytest_cache",
    ".ruff_cache",
  ],
  r = {
    walkIgnore: new Set([".git", "node_modules", ".DS_Store", "Icon\r", ...o]),
    ignoreConfigs: new Set([
      ".gitignore",
      ".orbitraignore",
      ".orbitraIgnore",
    ]),
    folderIdentityFiles: new Set([".project.json", "companion.json"]),
    basePollIntervalMs: 1e4,
    activePollMaxIntervalMs: 3e4,
    pollJitterMs: 2e3,
    maxIdleStreak: 4,
    localSafetyScanIntervalMs: 6e4,
    localSafetyScanBackoffCapMs: 15 * 6e4,
    onBatteryCadenceMultiplier: 4,
    shareStateRefreshIntervalMs: 300 * 1e3,
    recentlyFlushedTtlMs: 5e3,
    flushConcurrency: 4,
    directWriteMaxInFlightBytes: 128 * 1024 * 1024,
    packUploadConcurrency: 4,
    externalEventReadConcurrency: 128,
    localOnlyReadConcurrency: 128,
    outboxReadBatchMaxBytes: 128 * 1024 * 1024,
    outboxPathSnapshotThresholdBytes: 8 * 1024 * 1024,
    largeFileIoConcurrency: 3,
    outboxMaxRetries: 10,
    outboxQuarantineMs: 900 * 1e3,
    readStabilityMaxAttempts: 8,
    readStabilityRetryDelayMs: 250,
    packDownloadConcurrency: 8,
    presignedDownloadConcurrency: 4,
    presignedDownloadStallTimeoutMs: 6e4,
    batchReadMaxSize: 50,
    batchPresignMaxSize: 200,
    batchPresignUrlConcurrency: 8,
    batchConfirmMaxSize: 400,
    packRequestMaxFileCount: 200,
    uploadConcurrency: 12,
    batchDeleteChunkSize: 1e3,
    batchDeleteMaxSize: 1e3,
    batchDeleteServerConcurrency: 50,
    batchMoveChunkSize: 1e3,
    batchMoveMaxSize: 1e3,
    packMagic: new Uint8Array([66, 80, 75, 70]),
    packVersion: 1,
    packHeaderSize: 17,
    packTargetSize: 8 * 1024 * 1024,
    packMaxBytes: 256 * 1024 * 1024,
    packMaxFileCount: 1e5,
    fileR2Prefix: "files/",
    packR2Prefix: "packs/",
    WATCHER_IGNORE_GLOBS: [
      "**/.DS_Store",
      "**/.git/**",
      "**/node_modules/**",
      ...o.map((e) => `**/${e}/**`),
      "**/sessions/*/network",
      "**/sessions/*/network/**",
      "**/sessions/*/data/network",
      "**/sessions/*/data/network/**",
      "**/*.swp",
      "**/*~",
      "**/.#*",
      "**/Icon\r",
      "**/._*",
      "**/tabs/*/network/network.sqlite*",
    ],
  },
  f = [...r.WATCHER_IGNORE_GLOBS, "**/.*"],
  u =
    /\.(incoming|partial|merged)-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  d = new Set([...r.ignoreConfigs].map((e) => e.toLowerCase()));
function y(e) {
  return d.has(e.toLowerCase());
}
function s(e) {
  return r.walkIgnore.has(e) || e.startsWith("._") || e.endsWith(".swp")
    ? !0
    : u.test(e);
}
function i(e) {
  return e
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .split("/")
    .filter((n) => n.length > 0);
}
function S(e) {
  return e.length < 3 || e[0] !== "sessions"
    ? !1
    : e[2] === "network"
      ? !0
      : e.length >= 4 && e[2] === "data" && e[3] === "network";
}
function c(e) {
  const n = i(e);
  return n.length === 0 ? !1 : n.some(s) ? !0 : S(n);
}
function g(e) {
  return e.length === 0 ||
    a(e) ||
    e.includes("\\") ||
    e.split("/").some((t) => t.length === 0 || t === "." || t === "..")
    ? null
    : e;
}
function h(e) {
  const n = i(e);
  return n.length === 0 || n.some((t) => t.startsWith(".")) ? !1 : !c(e);
}
exports.SYNCED_FILE_BROWSER_SEARCH_IGNORE_GLOBS = f;
exports.containsControlChars = a;
exports.isIgnoreConfigName = y;
exports.isSyncIgnoredName = s;
exports.isSyncIgnoredPath = c;
exports.isSyncedFileBrowserVisiblePath = h;
exports.parseRemoteSyncPath = g;
exports.syncedFSConfig = r;
