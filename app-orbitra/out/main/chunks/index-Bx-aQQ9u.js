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
      e = new r.Error().stack;
    e &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[e] = "b8d792f6-29d3-4e6b-978b-e609c1a873bd"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-b8d792f6-29d3-4e6b-978b-e609c1a873bd"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const d = require("./protocol-BGN1BQCi.js"),
  l = require("electron"),
  q = require("valibot"),
  t = require("../main-app.js");
require("node:crypto");
require("node:path");
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
require("node:fs");
require("node:http");
require("node:https");
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
function c(r) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (r) {
    for (const i in r)
      if (i !== "default") {
        const s = Object.getOwnPropertyDescriptor(r, i);
        Object.defineProperty(
          e,
          i,
          s.get ? s : { enumerable: !0, get: () => r[i] },
        );
      }
  }
  return ((e.default = r), Object.freeze(e));
}
const u = c(q);
function p(r, e, i) {
  return r === "same-version" || i(e)
    ? "none"
    : r === "updated"
      ? "open"
      : "record";
}
class a {
  constructor(e) {
    this.deps = e;
  }
  stopWaiting = null;
  disposed = !1;
  start() {
    this.run();
  }
  dispose() {
    ((this.disposed = !0), this.stopWaiting?.(), (this.stopWaiting = null));
  }
  async run() {
    if (this.deps.isSuppressed()) return;
    const e = await this.deps.launch();
    if (this.disposed || e === "same-version") return;
    const i = await this.deps.fetchLatestSlug();
    if (this.disposed || i === null) return;
    const s = p(e, i, (n) => this.deps.hasSeen(n));
    if ((s === "record" && this.deps.recordSeen(i), s !== "open")) return;
    const o = this.windowFor();
    if (o) {
      await this.openIn(o, i);
      return;
    }
    this.stopWaiting = this.deps.windows.onRegistered((n) => {
      this.isEligible(n) &&
        (this.stopWaiting?.(), (this.stopWaiting = null), this.openIn(n, i));
    });
  }
  async openIn(e, i) {
    if (this.disposed) return;
    (await this.deps.open(e, i).catch(() => !1)) && this.deps.recordSeen(i);
  }
  isEligible(e) {
    return e.surface === "browser" && !e.isIncognito && e.isAlive();
  }
  windowFor() {
    const e = this.deps.windows.getAll().filter((i) => this.isEligible(i));
    return e.find((i) => i.isFocused()) ?? e.find((i) => i.isShowing()) ?? e[0];
  }
}
const f = u.object({
  slug: u.pipe(u.string(), u.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)),
});
async function g() {
  try {
    const r = await fetch(`${t.config.app.webBaseUrl}/updates/latest.json`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(1e4),
    });
    if (!r.ok)
      return (
        t.logger.warn(
          `[ReleaseNotes] Latest release notes returned ${r.status}`,
        ),
        null
      );
    const e = u.safeParse(f, await r.json());
    return e.success
      ? e.output.slug
      : (t.logger.warn(
          "[ReleaseNotes] Latest release notes response is malformed",
        ),
        null);
  } catch (r) {
    return (
      t.logger.warn(
        "[ReleaseNotes] Failed to fetch latest release notes:",
        r instanceof Error ? r.message : r,
      ),
      null
    );
  }
}
function h(r) {
  return new a({
    windows: {
      getAll: () => [...r.getManagedWindows()],
      onRegistered: (e) => r.onManagedWindowRegistered(e),
    },
    isSuppressed: () =>
      t.getAutomationLaunchPolicy({ isPackaged: l.app.isPackaged })
        .suppressReleaseNotes,
    launch: async () =>
      (await t.updateManager.getPreviousVersion()) === null
        ? "first-launch"
        : t.updateManager.didUpdate()
          ? "updated"
          : "same-version",
    fetchLatestSlug: g,
    hasSeen: t.hasSeenReleaseNotes,
    recordSeen: t.recordSeenReleaseNotes,
    open: async (e, i) =>
      (
        await e.commands.openUrl({
          url: `${t.config.app.webBaseUrl}/updates/${i}`,
          source: "utility",
          disposition: "foreground-new",
          tabType: "website",
          visitType: d.VisitType.IGNORE,
        })
      ).tabId !== null,
  });
}
exports.ReleaseNotesManager = a;
exports.createReleaseNotesManager = h;
