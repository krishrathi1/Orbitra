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
      (r._sentryDebugIds[e] = "9f8f685f-3578-4685-b081-c943bdfefa2e"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-9f8f685f-3578-4685-b081-c943bdfefa2e"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const m = require("node:child_process"),
  d = require("node:fs/promises"),
  h = require("node:os"),
  o = require("node:path"),
  p = require("../main-app.js"),
  l = require("./path-utils-C0Z_XuIf.js");
require("node:crypto");
require("electron");
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
const c = 2,
  f = ["pdf-lib@1.17.1", "unpdf@1.6.2"];
class g {
  bundledNodePath;
  bundledNpmCliPath;
  pkgCacheDir;
  constructor(e) {
    ((this.bundledNodePath = e.bundledNodePath),
      (this.bundledNpmCliPath = e.bundledNpmCliPath),
      (this.pkgCacheDir = e.pkgCacheDir));
  }
  async ensurePrewarmed() {
    try {
      const e = this.sentinelPath();
      if (await l.pathExists(e)) return;
      if (
        !(await l.pathExists(this.bundledNodePath)) ||
        !(await l.pathExists(this.bundledNpmCliPath))
      ) {
        p.logger.info(
          "SandboxNpmPrewarmer: bundled node or npm-cli.js not staged; skipping prewarm",
          {
            bundledNodePath: this.bundledNodePath,
            bundledNpmCliPath: this.bundledNpmCliPath,
          },
        );
        return;
      }
      (await p.prewarmExecutable(this.bundledNodePath, "bundled Node"),
        await d.mkdir(this.pkgCacheDir, { recursive: !0 }));
      const i = await d.mkdtemp(o.join(h.tmpdir(), "sandbox-npm-prewarm-"));
      try {
        (await this.runNpmInstall(i),
          await this.runPdfSmokeTest(i),
          await d.writeFile(
            e,
            JSON.stringify({
              version: c,
              packages: f,
              stagedAt: new Date().toISOString(),
            }),
          ),
          p.logger.info(
            "SandboxNpmPrewarmer: npm cache populated and smoke-tested",
            { packages: f, version: c },
          ));
      } finally {
        await d.rm(i, { recursive: !0, force: !0 });
      }
    } catch (e) {
      p.logger.error("SandboxNpmPrewarmer: prewarm failed (non-fatal)", {
        err: e.message,
      });
    }
  }
  sentinelPath() {
    return o.join(this.pkgCacheDir, `.npm-prewarm-v${c}`);
  }
  runNpmInstall(e) {
    return new Promise((i, s) => {
      const q = [
          this.bundledNpmCliPath,
          "install",
          "--prefix",
          e,
          "--cache",
          o.join(this.pkgCacheDir, "npm"),
          "--no-audit",
          "--no-fund",
          "--loglevel=error",
          ...f,
        ],
        t = m.spawn(this.bundledNodePath, q, {
          env: {
            ...process.env,
            npm_config_cache: o.join(this.pkgCacheDir, "npm"),
            npm_config_update_notifier: "false",
            NO_UPDATE_NOTIFIER: "1",
          },
          stdio: ["ignore", "pipe", "pipe"],
        });
      let u = "";
      (t.stderr?.on("data", (n) => {
        u = (u + n.toString()).slice(-2e3);
      }),
        t.on("error", s),
        t.on("exit", (n) => {
          if (n === 0) {
            i();
            return;
          }
          s(new Error(`npm install exited ${n ?? "?"}: ${u}`));
        }));
    });
  }
  async runPdfSmokeTest(e) {
    const i = o.join(e, "pdf-prewarm-smoke-test.mjs");
    return (
      await d.writeFile(
        i,
        `import { PDFDocument, StandardFonts } from 'pdf-lib'
import { extractText, getDocumentProxy } from 'unpdf'

const marker = 'Orbitra PDF prewarm smoke test'
const pdfDoc = await PDFDocument.create()
const page = pdfDoc.addPage([400, 200])
const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
page.drawText(marker, { x: 50, y: 100, size: 18, font })
const bytes = await pdfDoc.save()

const pdf = await getDocumentProxy(new Uint8Array(bytes))
const { text } = await extractText(pdf, { mergePages: true })
if (!text.includes(marker)) {
  throw new Error('unpdf did not extract expected text from pdf-lib output')
}
`,
      ),
      new Promise((s, q) => {
        const t = m.spawn(this.bundledNodePath, [i], {
          cwd: e,
          env: {
            ...process.env,
            npm_config_cache: o.join(this.pkgCacheDir, "npm"),
            npm_config_update_notifier: "false",
            NO_UPDATE_NOTIFIER: "1",
          },
          stdio: ["ignore", "pipe", "pipe"],
        });
        let u = "",
          n = "";
        (t.stdout?.on("data", (a) => {
          u = (u + a.toString()).slice(-2e3);
        }),
          t.stderr?.on("data", (a) => {
            n = (n + a.toString()).slice(-2e3);
          }),
          t.on("error", q),
          t.on("exit", (a) => {
            if (a === 0) {
              s();
              return;
            }
            q(
              new Error(
                `pdf smoke test exited ${a ?? "?"}: stdout=${u} stderr=${n}`,
              ),
            );
          }));
      })
    );
  }
}
exports.SandboxNpmPrewarmer = g;
