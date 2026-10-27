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
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "859c6ef1-2508-46e0-bd8b-3d359807224d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-859c6ef1-2508-46e0-bd8b-3d359807224d"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const y = require("node:crypto"),
  o = require("node:fs/promises"),
  q = require("node:path"),
  i = require("../main-app.js"),
  v = require("./appPaths-eBQvtv9Z.js");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("node:util");
require("node:worker_threads");
require("node:os");
require("valibot");
require("node:fs");
require("node:http");
require("node:https");
require("./protocol-BGN1BQCi.js");
require("events");
require("child_process");
require("util");
require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("@reflect/auth/workos-session");
require("crypto");
require("./errors-DsbnElf-.js");
require("./savedCertificateBlocklist-BUtmL3xA.js");
require("node:tls");
require("./appDataPath-20zIIRaW.js");
require("@reflect/auth/device-policy");
require("node:process");
require("node:assert");
require("node:stream");
require("./_commonjsHelpers-DJP3_Dvh.js");
require("./index-CSlo9i6Z.js");
require("tty");
require("node-machine-id");
require("fs/promises");
require("node:timers/promises");
require("./config-CdpnFYk6.js");
require("./contracts-rChhtF3C.js");
require("@reflect/auth/desktop");
require("./worker-protocol-CFgWGf-A.js");
require("./unicode-CSAGP0Z8.js");
require("fs");
require("better-sqlite3");
require("node:child_process");
require("url");
require("stream");
require("zlib");
require("electron-updater");
require("@reflect/auth/last-login-method");
require("@reflect/auth/oauth-state");
require("@reflect/auth/session-identity");
require("./settled-read-r0Yf0ORp.js");
require("module");
require("./fs-native-KvxiM8hl.js");
require("node:module");
require("tldts");
require("node:buffer");
require("./rustImageLimits-zqqoE-LA.js");
require("mime-types");
require("./resourcePolicy-DcbBChq3.js");
require("./resourcePolicy-BX-8H2Pm.js");
require("http");
require("@ghostery/adblocker-electron");
require("./wav-DElqHA--.js");
require("js-yaml");
require("stream/promises");
require("https");
require("net");
require("tls");
require("buffer");
require("electron-chrome-web-store");
require("./ids-B2sWlG17.js");
require("@modelcontextprotocol/sdk/client/auth.js");
require("@modelcontextprotocol/sdk/client/index.js");
require("@modelcontextprotocol/sdk/client/sse.js");
require("@modelcontextprotocol/sdk/client/streamableHttp.js");
require("@modelcontextprotocol/sdk/client/stdio.js");
require("@modelcontextprotocol/sdk/shared/stdio.js");
require("./process-tree-DTtONxmb.js");
require("cross-spawn");
require("piscina");
require("@modelcontextprotocol/sdk/shared/auth-utils.js");
require("@modelcontextprotocol/sdk/server/auth/errors.js");
require("@modelcontextprotocol/sdk/shared/auth.js");
require("node:readline");
require("async-mutex");
require("node:net");
require("electron-dl");
require("tar");
require("node:inspector/promises");
require("node:v8");
require("tokenx");
require("marked");
require("lodash/debounce");
require("./worker-protocol-CcOBX8D2.js");
require("node:zlib");
require("node:diagnostics_channel");
require("worker_threads");
require("diagnostics_channel");
require("./singleInstance-CuMDgUKt.js");
const _ = new Set([".mp4", ".webm", ".mov"]),
  x = new Set([".mp3", ".wav", ".m4a", ".aac", ".ogg", ".flac"]),
  A = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".avif",
    ".bmp",
    ".heic",
    ".heif",
    ".svg",
  ]);
function P(e) {
  const r = e.lastIndexOf("."),
    t = r >= 0 ? e.slice(r).toLowerCase() : "";
  return t === ".glb"
    ? "models/3d"
    : _.has(t)
      ? "media/videos"
      : x.has(t)
        ? "media/audio"
        : A.has(t)
          ? "media/images"
          : "media/files";
}
async function F(e, r) {
  if (!r || !(await i.loadPersistedSession(r)))
    throw new Error("Sign in to view this file");
  const t = i.captureAuthSessionSnapshot(r),
    p = y.createHash("sha256").update(r).digest("hex"),
    w = `${P(e)}/${p}`,
    S = q.extname(e).toLowerCase(),
    l = q.join(v.getAppDataPath(), w),
    c = e.replace(/[^a-zA-Z0-9.-]/g, "_"),
    b = S ? c : `${c}.glb`,
    a = q.join(l, b),
    { fileManager: d } = await Promise.resolve()
      .then(() => require("../main-app.js"))
      .then((n) => n.FileManager);
  if ((await d.init(), !d.getPort()))
    throw new Error("File server not running");
  const { fileServer: E } = await Promise.resolve()
      .then(() => require("../main-app.js"))
      .then((n) => n.FileServer),
    f = () => {
      if (!i.isAuthSessionSnapshotCurrent(t))
        throw new Error("Sign in to view this file");
      return { filePath: a, localUrl: E.getStorageFileUrl(a, r) };
    };
  if (
    await o.access(a).then(
      () => !0,
      () => !1,
    )
  )
    return f();
  const m = e.startsWith(i.CHAT_MEDIA_EPHEMERAL_PREFIX)
      ? "/api/chat-media/presigned-url/get"
      : "/api/storage/presigned-url/get",
    g = new URL(`${i.config.app.apiUrl}${m}`);
  g.searchParams.append("objectKey", e);
  const u = await i.authFetch(g.toString(), { method: "GET", accountId: r });
  if (!u.ok)
    throw (
      i.logger.error("[storage:cache-object] Failed to get download URL", {
        status: u.status,
        statusText: u.statusText,
      }),
      new Error(`Failed to get presigned URL: ${u.statusText}`)
    );
  const T = await u.json(),
    s = await fetch(T.presignedUrl);
  if (!s.ok)
    throw (
      i.logger.error("[storage:cache-object] Failed to download file", {
        status: s.status,
        statusText: s.statusText,
      }),
      new Error(`Failed to download file: ${s.statusText}`)
    );
  const h = Buffer.from(await s.arrayBuffer());
  return (
    await o.mkdir(l, { recursive: !0 }),
    await o.writeFile(a, h),
    i.logger.info("[storage:cache-object] Cached file", { bytes: h.length }),
    f()
  );
}
exports.cacheStorageObject = F;
