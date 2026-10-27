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
      i = new e.Error().stack;
    i &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[i] = "200a44eb-3881-45dd-b944-6b27c1ae782f"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-200a44eb-3881-45dd-b944-6b27c1ae782f"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const q = require("../main-app.js");
require("node:crypto");
require("node:path");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
require("node:fs/promises");
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
async function c(e, i) {
  await d(f(e), i);
}
async function d(e, i) {
  for (const r of e) {
    if (Array.isArray(r.content))
      for (let t = 0; t < r.content.length; t += 1) {
        const u = r.content[t],
          n = q.readChatMediaRef(u);
        if (!n) continue;
        if (u.type !== "file" && u.type !== "image")
          throw new Error("Unsupported shared media part");
        const s = await i(n.objectKey),
          { mediaRef: b, ...a } = { ...u, mediaRef: n };
        r.content[t] =
          u.type === "file"
            ? { ...a, type: "file", mediaType: u.mediaType, data: s.base64 }
            : { ...a, type: "image", image: s.base64 };
      }
    r.context &&
      (await o(r.context.attachedTabs, i),
      await o(r.context.attachedWindows, i));
  }
}
function* f(e) {
  if ((yield* e.messages, q.hasSharedSubAgentSessions(e)))
    for (const i of e.subAgentSessions ?? []) yield* i.messages;
}
function y(e) {
  const i = new Set();
  for (const r of f(e)) {
    if (Array.isArray(r.content))
      for (const t of r.content) {
        const u = q.readChatMediaRef(t);
        u && i.add(u.objectKey);
      }
    for (const t of [
      ...(r.context?.attachedTabs ?? []),
      ...(r.context?.attachedWindows ?? []),
    ])
      t.screenshotRef && i.add(t.screenshotRef.objectKey);
  }
  return [...i];
}
async function o(e, i) {
  for (const r of e ?? []) {
    if (!r.screenshotRef) continue;
    const t = await i(r.screenshotRef.objectKey);
    ((r.screenshot = `data:${t.mediaType};base64,${t.base64}`),
      delete r.screenshotRef,
      delete r.screenshotUrl);
  }
}
exports.restoreChatMessageMedia = d;
exports.restoreSharedChatMedia = c;
exports.sharedChatMediaObjectKeys = y;
