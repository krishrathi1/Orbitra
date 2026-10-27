"use strict";
(function () {
  try {
    var r =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    r.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var r =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      i = new r.Error().stack;
    i &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[i] = "20129ab1-2393-4c96-940b-032d41acee44"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-20129ab1-2393-4c96-940b-032d41acee44"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const o = require("node:crypto"),
  f = require("valibot"),
  s = require("./ids-B2sWlG17.js"),
  b = require("./commitRecord-DR9i1ecT.js"),
  y = require("./index-DqqmkDVg.js"),
  l = require("./profileLayoutLifecycle-BDYjrhKu.js");
require("node:fs/promises");
require("electron");
require("../main-app.js");
require("node:path");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
require("node:os");
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
function w(r) {
  const i = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (r) {
    for (const t in r)
      if (t !== "default") {
        const n = Object.getOwnPropertyDescriptor(r, t);
        Object.defineProperty(
          i,
          t,
          n.get ? n : { enumerable: !0, get: () => r[t] },
        );
      }
  }
  return ((i.default = r), Object.freeze(i));
}
const q = w(f);
function p(r, i, t, n) {
  const d = r.windows.find((e) => !t.has(e.id)),
    u = new Map(
      (i.tabGroups ?? []).map((e) => [
        e.id,
        q.parse(s.GroupId, o.randomUUID()),
      ]),
    ),
    a = [
      ...(i.pinnedTabList ?? []).map((e) => ({
        ...e.tab,
        pinnedId: o.randomUUID(),
      })),
      ...(i.migratedTabs ?? []).map((e) => ({
        ...e,
        pinnedId: e.isPinned ? o.randomUUID() : void 0,
      })),
    ];
  return {
    kind: "importBrowserTabs",
    args: {
      windowId: d?.id ?? q.parse(s.WindowId, o.randomUUID()),
      bounds:
        d?.bounds ??
        q.parse(b.WindowBounds, { x: 0, y: 0, width: 1280, height: 800 }),
      tabs: a.map((e) => ({
        entryId: q.parse(s.EntryId, o.randomUUID()),
        pageId: q.parse(s.PageId, o.randomUUID()),
        ...(e.isPinned ? { pinnedId: e.pinnedId ?? o.randomUUID() } : {}),
        ...(e.groupId && u.has(e.groupId) ? { groupId: u.get(e.groupId) } : {}),
        page: {
          detail: {
            url: e.url,
            title: e.title,
            faviconUrl: e.faviconUrl,
            openedAt: n,
            lastShownAt: 0,
            lastActivityAt: n,
          },
          initialEntry: { url: e.url, title: e.title },
        },
      })),
      groups: (i.tabGroups ?? []).flatMap((e) => {
        const c = u.get(e.id);
        return c
          ? [{ groupId: c, label: e.title ?? "", collapsed: e.collapsed }]
          : [];
      }),
    },
  };
}
async function g(r, i, t, n, d) {
  if (!i.migratedTabs?.length && !i.pinnedTabList?.length) return;
  let u;
  try {
    let a = d;
    if (!a) {
      if (
        ((u = await y.openLayoutPersistence(l.layoutDatabasePath(r.path), {
          initialLayout: () => l.prepareInitialLayout(r, t),
          completionFact: l.completionFactFor(r.path),
        })),
        u.lifecycle.kind === "blocked")
      )
        throw new Error(
          `Browser tabs could not be imported: ${u.lifecycle.reason}`,
        );
      a = new l.LayoutStore(u);
    }
    const e = await a.dispatch(p(a.state.data, i, n, Date.now()));
    if (!e.ok)
      throw new Error(`Browser tabs could not be imported: ${e.reason}`);
  } finally {
    await u?.persistence.close();
  }
}
exports.browserTabsCommand = p;
exports.writeBrowserTabs = g;
