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
      (e._sentryDebugIds[r] = "a09cb8f2-afee-4618-924e-524c5989e2b7"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-a09cb8f2-afee-4618-924e-524c5989e2b7"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const b = require("node:fs/promises"),
  g = require("node:os"),
  q = require("node:path"),
  u = require("../main-app.js"),
  d = require("electron");
require("node:crypto");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
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
async function p(e, r) {
  if (process.platform !== "darwin")
    return { success: !1, error: "unavailable" };
  const o = d.BaseWindow.fromId(e);
  if (!o || o.isDestroyed()) return { success: !1, error: "unavailable" };
  const i = q.join(g.homedir(), "Library", "Safari");
  try {
    const a = await d.dialog.showOpenDialog(o, {
      title: "Import from Safari",
      message:
        "Choose the Safari folder shown to bring over your bookmarks and main profile's browsing history. Passwords and signed-in accounts aren't included.",
      buttonLabel: "Allow import",
      defaultPath: i,
      properties: ["openDirectory", "dontAddToRecent"],
    });
    if (a.canceled || !a.filePaths.length)
      return { success: !0, status: "cancelled" };
    if (q.resolve(a.filePaths[0]) !== i)
      return (
        u.logger.warn("Safari folder import unavailable", {
          profileId: r,
          reason: "wrong-folder",
        }),
        { success: !1, error: "wrong-folder" }
      );
    let s = 0,
      n = 0;
    for (const l of ["Bookmarks.plist", "History.db"])
      try {
        (await (await b.open(q.join(i, l), "r")).close(), s++);
      } catch (c) {
        const t = c.code;
        if (t === "ENOENT") continue;
        n++;
        const f =
          t === "EPERM" || t === "EACCES" ? "access-denied" : "read-failed";
        u.logger.warn("Safari import file unavailable", {
          profileId: r,
          type: l,
          reason: f,
        });
      }
    return !s && n
      ? { success: !1, error: "access-denied" }
      : (u.logger.info("Safari folder selected for import", {
          profileId: r,
          readableFiles: s,
          deniedFiles: n,
        }),
        {
          success: !0,
          status: "granted",
          profile: {
            browser: "safari",
            name: "Personal",
            path: i,
            lastModified: new Date(),
          },
        });
  } catch {
    return (
      u.logger.warn("Safari folder import unavailable", {
        profileId: r,
        reason: "folder-picker-failed",
      }),
      { success: !1, error: "unavailable" }
    );
  }
}
exports.requestSafariImportAccess = p;
