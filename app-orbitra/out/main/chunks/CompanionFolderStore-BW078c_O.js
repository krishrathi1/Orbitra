"use strict";
(function () {
  try {
    var u =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    u.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var u =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new u.Error().stack;
    e &&
      ((u._sentryDebugIds = u._sentryDebugIds || {}),
      (u._sentryDebugIds[e] = "3a62857c-7060-4b41-a379-b49275c08018"),
      (u._sentryDebugIdIdentifier =
        "sentry-dbid-3a62857c-7060-4b41-a379-b49275c08018"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const n = require("fs/promises"),
  P = require("node:crypto"),
  v = require("node:fs"),
  a = require("node:path"),
  s = require("../main-app.js"),
  E = require("valibot");
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
function b(u) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (u) {
    for (const i in u)
      if (i !== "default") {
        const t = Object.getOwnPropertyDescriptor(u, i);
        Object.defineProperty(
          e,
          i,
          t.get ? t : { enumerable: !0, get: () => u[i] },
        );
      }
  }
  return ((e.default = u), Object.freeze(e));
}
const C = b(E),
  F = "companions",
  g = "companion.json",
  q = "SKILL.md";
function m(u) {
  if ("code" in u) return typeof u.code == "string" ? u.code : void 0;
}
async function h(u) {
  try {
    return (await n.access(u), !0);
  } catch {
    return !1;
  }
}
class k {
  constructor(e) {
    this.synced = e;
  }
  scratchRoot(e, i) {
    return a.join(
      a.dirname(this.companionRoot(e)),
      `._${e}.${process.pid}.${P.randomUUID()}.${i}`,
    );
  }
  companionRoot(e) {
    return this.synced.companionRoot?.(e) ?? a.join(this.synced.root, F, e);
  }
  companionManifest(e) {
    return (
      this.synced.companionManifest?.(e) ?? a.join(this.companionRoot(e), g)
    );
  }
  getCompanionRootPath(e) {
    return this.companionRoot(e);
  }
  async companionRootExists(e) {
    return h(this.companionRoot(e));
  }
  async verifyCompanionDirectory(e) {
    return (
      (
        await this.readManifestFromPath(this.companionManifest(e), {
          companionId: e,
        })
      ).manifest?.id === e
    );
  }
  async companionDirectoryMatchesSource(e, i) {
    const t = this.companionRoot(i);
    if (
      !(await this.verifyCompanionDirectory(i)) ||
      !(await this.verifyCompanionRoot(e, i))
    )
      return !1;
    if (a.resolve(e) === a.resolve(t)) return !0;
    try {
      return await this.directoryContentsMatch(e, t);
    } catch {
      return !1;
    }
  }
  getPublicProfilePath(e) {
    return a.join(this.companionRoot(e), s.PUBLIC_COMPANION_PROFILE_FILE);
  }
  async writeProfileBuilderContext(e, i) {
    const t = C.parse(s.companionProfileBuilderContextSchema, i),
      r = a.join(this.companionRoot(e), s.COMPANION_PROFILE_BUILDER_FILE),
      o = `${r}.${process.pid}.${Date.now()}.tmp`;
    try {
      (await n.mkdir(a.dirname(r), { recursive: !0 }),
        await n.writeFile(
          o,
          `${JSON.stringify(t, null, 2)}
`,
          "utf-8",
        ),
        await n.rename(o, r));
    } catch (c) {
      throw (await n.rm(o, { force: !0 }).catch(() => {}), c);
    }
  }
  async readProfileBuilderContext(e) {
    const i = a.join(this.companionRoot(e), s.COMPANION_PROFILE_BUILDER_FILE);
    try {
      return s.parseCompanionProfileBuilderContext(
        JSON.parse(await n.readFile(i, "utf-8")),
      );
    } catch {
      return null;
    }
  }
  async listPublicProfileEntries(e, i = "") {
    const t = await n.realpath(this.companionRoot(e)),
      r = i ? s.normalizeCompanionProfilePath(i) : "";
    if (r === null || (i && r !== i))
      throw new Error("The selected folder is invalid.");
    if (r === "skills" || r.startsWith(`skills${a.posix.sep}`))
      throw new Error("Skills are selected separately from files.");
    const o = a.resolve(t, r),
      c = a.relative(t, o);
    if (c === ".." || c.startsWith(`..${a.sep}`) || a.isAbsolute(c))
      throw new Error("The selected folder leaves the companion folder.");
    const l = await n.lstat(o);
    if (l.isSymbolicLink() || !l.isDirectory())
      throw new Error("The selected folder is unavailable.");
    const f = await n.readdir(o, { withFileTypes: !0 });
    return (
      await Promise.all(
        f.map(async (d) => {
          if (
            d.name.startsWith(".") ||
            s.PUBLIC_COMPANION_RESERVED_FILES.has(d.name) ||
            (!r && d.name === "skills")
          )
            return null;
          const p = r ? `${r}/${d.name}` : d.name,
            y = a.join(o, d.name),
            S = await n.lstat(y);
          return S.isSymbolicLink()
            ? null
            : S.isDirectory()
              ? { path: p, name: d.name, type: "directory" }
              : S.isFile()
                ? { path: p, name: d.name, type: "file", sizeBytes: S.size }
                : null;
        }),
      )
    )
      .filter((d) => d !== null)
      .sort((d, p) =>
        d.type !== p.type
          ? d.type === "directory"
            ? -1
            : 1
          : d.name.localeCompare(p.name),
      );
  }
  async readPublicProfile(e) {
    const i = this.getPublicProfilePath(e);
    try {
      const t = await n.readFile(i, "utf-8"),
        r = s.parsePublicCompanionProfileDraft(JSON.parse(t));
      return r.status === "invalid"
        ? (s.logger.warn("[CompanionFolderStore] Invalid public profile", {
            companionId: e,
            issues: r.issues,
          }),
          r)
        : { status: "valid", profile: r.profile };
    } catch (t) {
      return (t instanceof Error ? m(t) : void 0) === "ENOENT"
        ? { status: "missing" }
        : (s.logger.warn(
            "[CompanionFolderStore] Failed to read public profile",
            { companionId: e, error: t },
          ),
          {
            status: "invalid",
            issues: [{ path: "(root)", code: "invalid_json" }],
          });
    }
  }
  async writePublicProfile(e, i) {
    return this.writePublicProfileAt(this.getPublicProfilePath(e), i);
  }
  async writePublicProfileAt(e, i) {
    const t = s.parsePublicCompanionProfileDraft(i);
    if (t.status === "invalid")
      throw new Error("The public profile contains invalid fields");
    const r = `${e}.${process.pid}.${Date.now()}.tmp`;
    try {
      return (
        await n.mkdir(a.dirname(e), { recursive: !0 }),
        await n.writeFile(
          r,
          `${JSON.stringify(t.profile, null, 2)}
`,
          "utf-8",
        ),
        await n.rename(r, e),
        t.profile
      );
    } catch (o) {
      throw (await n.rm(r, { force: !0 }).catch(() => {}), o);
    }
  }
  async ensurePublicProfile(e) {
    e.isTemporary ||
      (await this.readPublicProfile(e.id)).status !== "missing" ||
      (await this.writePublicProfile(
        e.id,
        s.createEmptyPublicCompanionProfile(e.description),
      ));
  }
  companionSkillFile(e, i) {
    return (
      this.synced.companionSkillFile?.(e, i) ??
      a.join(this.companionRoot(e), "skills", i, q)
    );
  }
  async readManifest(e) {
    const i = this.companionManifest(e);
    return (
      await this.readManifestFromPath(i, {
        companionId: e,
        repairModelFields: !0,
      })
    ).manifest;
  }
  async readManifestFromPath(e, i = {}) {
    try {
      const t = await n.readFile(e, "utf-8"),
        r = JSON.parse(t),
        o = s.parseCompanionFolderManifest(r);
      return o.manifest
        ? (o.modelRepairs.length > 0 &&
            (s.logger.warn(
              "[CompanionFolderStore] Repaired legacy companion model names",
              {
                companionId: i.companionId ?? o.manifest.id,
                manifestPath: e,
                repairedFields: o.modelRepairs.map((c) => c.field),
              },
            ),
            i.repairModelFields === !0 &&
              (await this.rewriteParsedManifest(e, o.manifest))),
          {
            manifest: o.manifest,
            content: t,
            exists: !0,
            valid: !0,
            repaired: o.modelRepairs.length > 0,
          })
        : (s.logger.warn("[CompanionFolderStore] Invalid companion manifest", {
            companionId: i.companionId,
            manifestPath: e,
            issues: o.issues.map((c) => ({
              path: C.getDotPath(c) ?? "(root)",
              code: c.type,
            })),
          }),
          { manifest: null, exists: !0, valid: !1, repaired: !1 });
    } catch (t) {
      return (t instanceof Error ? m(t) : void 0) !== "ENOENT"
        ? (s.logger.warn(
            "[CompanionFolderStore] Failed to read companion manifest",
            { companionId: i.companionId, manifestPath: e, error: t },
          ),
          { manifest: null, exists: !0, valid: !1, repaired: !1 })
        : { manifest: null, exists: !1, valid: !1, repaired: !1 };
    }
  }
  async rewriteParsedManifest(e, i) {
    const t = Date.now(),
      r = `${e}.${process.pid}.${t}.tmp`;
    try {
      (await n.writeFile(
        r,
        `${JSON.stringify(i, null, 2)}
`,
        "utf-8",
      ),
        await n.rename(r, e));
    } catch (o) {
      (await n.rm(r, { force: !0 }).catch(() => {}),
        s.logger.warn(
          "[CompanionFolderStore] Failed to persist repaired companion manifest",
          { companionId: i.id, manifestPath: e, error: o },
        ));
    }
  }
  async readCompanion(e) {
    const i = await this.readManifest(e);
    return i && i.id !== e
      ? (s.logger.warn(
          "[CompanionFolderStore] Companion manifest id does not match folder name",
          { companionId: e, manifestId: i.id },
        ),
        null)
      : i
        ? this.hydrateCompanionFromFolder(
            this.companionRoot(e),
            s.folderManifestToCompanionData(i),
          )
        : null;
  }
  async scanCompanions() {
    const e = a.join(this.synced.root, F);
    return this.scanCompanionDirectory(e);
  }
  async listCompanionCopies() {
    const e = a.join(this.synced.root, F);
    let i;
    try {
      i = await n.readdir(e, { withFileTypes: !0 });
    } catch (r) {
      if ((r instanceof Error ? m(r) : void 0) === "ENOENT") return [];
      throw r;
    }
    const t = [];
    for (const r of i) {
      if (!r.isDirectory() || r.name.startsWith(".")) continue;
      const o = await this.readManifestFromPath(
        this.companionManifest(r.name),
        { companionId: r.name },
      );
      o.manifest?.id === r.name &&
        t.push({
          companionId: r.name,
          createdAt: o.manifest.createdAt,
          updatedAt: o.manifest.updatedAt,
        });
    }
    return t;
  }
  async scanCompanionsInTree(e) {
    return (await this.scanCompanionFoldersInTree(e)).map((t) => t.companion);
  }
  async scanCompanionFoldersInTree(e) {
    const i = [];
    return (await this.walkForCompanionManifests(e, i), i);
  }
  async readCompanionFolderAt(e) {
    const i = a.join(e, g),
      r = (await this.readManifestFromPath(i)).manifest;
    return r
      ? {
          companion: await this.hydrateCompanionFromFolder(
            e,
            s.folderManifestToCompanionData(r),
          ),
          rootPath: e,
          manifestPath: i,
        }
      : null;
  }
  async scanCompanionDirectory(e) {
    let i;
    try {
      i = await n.readdir(e, { withFileTypes: !0 });
    } catch (r) {
      return (
        (r instanceof Error ? m(r) : void 0) !== "ENOENT" &&
          s.logger.warn(
            "[CompanionFolderStore] Failed to scan companions root",
            { companionsRoot: e, error: r },
          ),
        []
      );
    }
    const t = [];
    for (const r of i) {
      if (!r.isDirectory()) continue;
      const o = await this.readCompanion(r.name);
      o && t.push(o);
    }
    return t;
  }
  async walkForCompanionManifests(e, i) {
    let t;
    try {
      t = await n.readdir(e, { withFileTypes: !0 });
    } catch (r) {
      (r instanceof Error ? m(r) : void 0) !== "ENOENT" &&
        s.logger.warn("[CompanionFolderStore] Failed to scan companion tree", {
          rootDir: e,
          error: r,
        });
      return;
    }
    for (const r of t) {
      const o = a.join(e, r.name);
      if (r.isDirectory()) {
        await this.walkForCompanionManifests(o, i);
        continue;
      }
      if (!r.isFile() || r.name !== g) continue;
      const l = (await this.readManifestFromPath(o)).manifest;
      if (l) {
        const f = a.dirname(o),
          w = await this.hydrateCompanionFromFolder(
            f,
            s.folderManifestToCompanionData(l),
          );
        i.push({ companion: w, rootPath: f, manifestPath: o });
      }
    }
  }
  async writeCompanion(e) {
    const i = this.companionManifest(e.id);
    (await this.writeCompanionManifest(e, i),
      await this.ensurePublicProfile(e));
  }
  async writeCompanionManifestOnly(e) {
    await this.writeCompanionManifest(e, this.companionManifest(e.id));
  }
  async writeCompanionAt(e, i) {
    (await this.writeCompanionManifest(i, a.join(e, g)),
      !i.isTemporary &&
        e === this.companionRoot(i.id) &&
        (await this.ensurePublicProfile(i)));
  }
  async writeSharedCompanionAt(e, i) {
    await this.writeCompanionManifest(i, a.join(e, g), {
      keepExistingPurpose: !0,
    });
  }
  async publishNewCompanion(e) {
    const i = this.companionRoot(e.companion.id),
      t = a.dirname(i),
      r = a.join(
        t,
        `.${e.companion.id}.${process.pid}.${P.randomUUID()}.install`,
      );
    let o = !1;
    if ((await n.mkdir(t, { recursive: !0 }), await h(i)))
      throw new Error(
        `Companion destination already exists: ${e.companion.id}`,
      );
    try {
      await n.mkdir(r);
      for (const c of e.filePaths) {
        if (!e.filesRoot)
          throw new Error("The published profile files are unavailable.");
        const l = s.normalizeCompanionProfilePath(c);
        if (!l || l !== c)
          throw new Error(
            "The published profile contains an invalid file path.",
          );
        const f = a.resolve(e.filesRoot, ...l.split("/")),
          w = a.resolve(r, ...l.split("/")),
          d = a.relative(e.filesRoot, f),
          p = a.relative(r, w);
        if (
          d.startsWith(`..${a.sep}`) ||
          a.isAbsolute(d) ||
          p.startsWith(`..${a.sep}`) ||
          a.isAbsolute(p)
        )
          throw new Error(
            "The published profile contains an invalid file path.",
          );
        (await n.mkdir(a.dirname(w), { recursive: !0 }),
          await n.copyFile(f, w, v.constants.COPYFILE_EXCL));
      }
      if (
        (await this.writeCompanionAt(r, e.companion),
        await this.writePublicProfileAt(
          a.join(r, s.PUBLIC_COMPANION_PROFILE_FILE),
          e.publicProfile,
        ),
        await h(i))
      )
        throw new Error(
          `Companion destination already exists: ${e.companion.id}`,
        );
      return (await n.rename(r, i), (o = !0), i);
    } finally {
      o || (await n.rm(r, { recursive: !0, force: !0 }).catch(() => {}));
    }
  }
  async copyNewCompanionDirectory(e, i) {
    const t = this.companionRoot(i);
    if ((await n.mkdir(a.dirname(t), { recursive: !0 }), await h(t)))
      throw new Error(`Companion destination already exists: ${i}`);
    const r = await this.stageCompanionCopy(e, i);
    let o = !1;
    try {
      if (await h(t))
        throw new Error(`Companion destination already exists: ${i}`);
      return (await n.rename(r, t), (o = !0), t);
    } finally {
      o || (await n.rm(r, { recursive: !0, force: !0 }).catch(() => {}));
    }
  }
  async replaceCompanionDirectory(e, i) {
    const t = this.companionRoot(i),
      r = await this.stageCompanionCopy(e, i),
      o = this.scratchRoot(i, "replaced");
    let c = !1;
    try {
      await n.rename(t, o);
      try {
        (await n.rename(r, t), (c = !0));
      } catch (l) {
        throw (await n.rename(o, t), l);
      }
      return (await n.rm(o, { recursive: !0, force: !0 }).catch(() => {}), t);
    } finally {
      c || (await n.rm(r, { recursive: !0, force: !0 }).catch(() => {}));
    }
  }
  async stageCompanionCopy(e, i) {
    const t = this.scratchRoot(i, "attach");
    await n.mkdir(a.dirname(t), { recursive: !0 });
    try {
      if (
        (await n.cp(e, t, {
          recursive: !0,
          force: !1,
          errorOnExist: !0,
          verbatimSymlinks: !0,
        }),
        (await this.readManifestFromPath(a.join(t, g), { companionId: i }))
          .manifest?.id !== i)
      )
        throw new Error(
          "The companion copy does not contain the expected manifest.",
        );
      return t;
    } catch (r) {
      throw (await n.rm(t, { recursive: !0, force: !0 }).catch(() => {}), r);
    }
  }
  async verifyCompanionRoot(e, i) {
    return (
      (await this.readManifestFromPath(a.join(e, g), { companionId: i }))
        .manifest?.id === i
    );
  }
  async directoryContentsMatch(e, i) {
    const [t, r] = await Promise.all([n.lstat(e), n.lstat(i)]);
    if (
      t.isDirectory() !== r.isDirectory() ||
      t.isFile() !== r.isFile() ||
      t.isSymbolicLink() !== r.isSymbolicLink()
    )
      return !1;
    if (t.isSymbolicLink()) {
      const [l, f] = await Promise.all([n.readlink(e), n.readlink(i)]);
      return l === f;
    }
    if (t.isFile()) {
      if (t.size !== r.size) return !1;
      const [l, f] = await Promise.all([n.readFile(e), n.readFile(i)]);
      return l.equals(f);
    }
    if (!t.isDirectory()) return !1;
    const [o, c] = await Promise.all([n.readdir(e), n.readdir(i)]);
    if (
      (o.sort(),
      c.sort(),
      o.length !== c.length || o.some((l, f) => l !== c[f]))
    )
      return !1;
    for (const l of o)
      if (!(await this.directoryContentsMatch(a.join(e, l), a.join(i, l))))
        return !1;
    return !0;
  }
  async writeCompanionManifest(e, i, t = {}) {
    const r = await this.readManifestFromPath(i, { companionId: e.id }),
      o = Date.now(),
      c = t.keepExistingPurpose
        ? (r.manifest?.purpose ?? "standard")
        : e.purpose,
      l = s.companionDataToFolderManifest(
        { ...e, purpose: c },
        {
          createdAt: r.manifest?.createdAt ?? o,
          updatedAt: r.manifest?.updatedAt ?? o,
        },
      ),
      f = C.safeParse(s.CompanionFolderManifestSchema, l);
    if (!f.success) {
      s.logger.warn(
        "[CompanionFolderStore] Generated companion manifest failed validation",
        {
          companionId: e.id,
          manifestPath: i,
          issues: f.issues.map((y) => ({
            path: C.getDotPath(y) ?? "(root)",
            code: y.type,
          })),
        },
      );
      const p = f.issues
        .map((y) => `${C.getDotPath(y) ?? "(root)"}: ${y.type}`)
        .join(", ");
      throw new Error(
        `[CompanionFolderStore] Refusing to write invalid companion manifest for ${e.id} (${p})`,
      );
    }
    if (
      r.content ===
      `${JSON.stringify(f.output, null, 2)}
`
    ) {
      await this.writeModeSettings(a.dirname(i), e);
      return;
    }
    const w = { ...f.output, updatedAt: o },
      d = `${i}.${process.pid}.${o}.tmp`;
    try {
      (await n.mkdir(a.dirname(i), { recursive: !0 }),
        r.exists && !r.valid && (await this.backupInvalidManifest(i, o)),
        await n.writeFile(
          d,
          `${JSON.stringify(w, null, 2)}
`,
          "utf-8",
        ),
        await n.rename(d, i));
    } catch (p) {
      throw (await n.rm(d, { force: !0 }).catch(() => {}), p);
    }
    await this.writeModeSettings(a.dirname(i), e);
  }
  async writeModeSettings(e, i) {
    const t = a.join(e, s.COMPANION_MODE_SETTINGS_FILE),
      r = s.companionModeSettings(i);
    if (!r) {
      await n.rm(t, { force: !0 });
      return;
    }
    const o = `${JSON.stringify(r, null, 2)}
`;
    if ((await n.readFile(t, "utf-8").catch(() => null)) === o) return;
    const c = `${t}.${process.pid}.${Date.now()}.tmp`;
    try {
      (await n.writeFile(c, o, "utf-8"), await n.rename(c, t));
    } catch (l) {
      throw (await n.rm(c, { force: !0 }).catch(() => {}), l);
    }
  }
  async readModeSettings(e) {
    const i = a.join(e, s.COMPANION_MODE_SETTINGS_FILE);
    try {
      const t = await n.readFile(i, "utf-8"),
        r = C.safeParse(s.CompanionModeSettingsSchema, JSON.parse(t));
      return r.success
        ? r.output
        : (s.logger.warn(
            "[CompanionFolderStore] Invalid companion mode settings",
            { settingsPath: i },
          ),
          null);
    } catch (t) {
      return (
        (t instanceof Error ? m(t) : void 0) !== "ENOENT" &&
          s.logger.warn(
            "[CompanionFolderStore] Failed to read companion mode settings",
            { settingsPath: i, error: t },
          ),
        null
      );
    }
  }
  async writeCompanions(e) {
    for (const i of e)
      (await this.writeCompanion(i), await this.copySelectedUserSkills(i));
  }
  async deleteCompanion(e) {
    const i = this.scratchRoot(e, "removed");
    try {
      await n.rename(this.companionRoot(e), i);
    } catch (t) {
      if (t instanceof Error && m(t) === "ENOENT") return;
      throw t;
    }
    await n.rm(i, { recursive: !0, force: !0 }).catch(() => {});
  }
  async copySelectedUserSkills(e) {
    await this.copySelectedUserSkillsAt(this.companionRoot(e.id), e, {
      overwriteExisting: !1,
    });
  }
  async copySelectedUserSkillsAt(e, i, t = {}) {
    const r = new Set();
    for (const o of i.skillIds ?? [])
      if (!s.isOfficialSkillId(o)) {
        if (!s.validateSkillName(o)) {
          s.logger.warn(
            "[CompanionFolderStore] Skipping unsafe companion skill id",
            { companionId: i.id, skillId: o },
          );
          continue;
        }
        r.add(o);
      }
    for (const o of r)
      await this.copyProfileSkillIntoCompanion(e, i.id, o, {
        overwriteExisting: t.overwriteExisting ?? !0,
      });
  }
  async copyProfileSkillIntoCompanion(e, i, t, r) {
    const o = this.synced.skill(t),
      c =
        e === this.companionRoot(i)
          ? a.dirname(this.companionSkillFile(i, t))
          : a.join(e, "skills", t);
    if (!(await h(a.join(o, q)))) {
      s.logger.warn(
        "[CompanionFolderStore] Selected skill file missing during companion migration",
        { companionId: i, skillId: t, sourcePath: a.join(o, q) },
      );
      return;
    }
    (!r.overwriteExisting && (await h(c))) ||
      (await this.replaceDirectoryWithSafeCopy(o, c));
  }
  async listCompanionSkillIdsAt(e) {
    const i = a.join(e, "skills");
    let t;
    try {
      t = await n.readdir(i, { withFileTypes: !0 });
    } catch (o) {
      return (
        (o instanceof Error ? m(o) : void 0) !== "ENOENT" &&
          s.logger.warn(
            "[CompanionFolderStore] Failed to list companion skill folders",
            { skillsRoot: i, error: o },
          ),
        []
      );
    }
    const r = [];
    for (const o of t)
      if (o.isDirectory() && !o.isSymbolicLink()) {
        if (!s.validateSkillName(o.name)) {
          s.logger.warn(
            "[CompanionFolderStore] Skipping unsafe companion skill folder",
            { skillsRoot: i, skillId: o.name },
          );
          continue;
        }
        (await h(a.join(i, o.name, q))) && r.push(o.name);
      }
    return r.sort();
  }
  async hydrateCompanionFromFolder(e, i) {
    const [t, r] = await Promise.all([
        this.listCompanionSkillIdsAt(e),
        this.readModeSettings(e),
      ]),
      o = r ? { ...i, ...r } : i;
    return t.length === 0
      ? o
      : { ...o, skillIds: new Set([...Array.from(i.skillIds ?? []), ...t]) };
  }
  async replaceDirectoryWithSafeCopy(e, i) {
    const t = a.dirname(i),
      r = a.join(t, `.${a.basename(i)}.${process.pid}.${Date.now()}.tmp`);
    await n.rm(r, { recursive: !0, force: !0 });
    try {
      (await this.copyDirectorySafe(e, r),
        await n.rm(i, { recursive: !0, force: !0 }),
        await n.rename(r, i));
    } catch (o) {
      throw (await n.rm(r, { recursive: !0, force: !0 }).catch(() => {}), o);
    }
  }
  async copyDirectorySafe(e, i) {
    await n.mkdir(i, { recursive: !0 });
    const t = await n.readdir(e, { withFileTypes: !0 });
    for (const r of t) {
      const o = a.join(e, r.name),
        c = a.join(i, r.name);
      if (r.isSymbolicLink()) {
        s.logger.warn(
          "[CompanionFolderStore] Skipping symlink inside skill folder",
          { sourcePath: o },
        );
        continue;
      }
      if (r.isDirectory()) {
        await this.copyDirectorySafe(o, c);
        continue;
      }
      if (r.isFile()) {
        await n.copyFile(o, c);
        continue;
      }
      s.logger.warn(
        "[CompanionFolderStore] Skipping unsupported skill folder entry",
        { sourcePath: o },
      );
    }
  }
  async backupInvalidManifest(e, i) {
    const t = `${e}.invalid-${i}`;
    try {
      await n.copyFile(e, t, v.constants.COPYFILE_EXCL);
    } catch (r) {
      const o = r instanceof Error ? m(r) : void 0;
      if (o === "ENOENT" || o === "EEXIST") return;
      s.logger.warn(
        "[CompanionFolderStore] Failed to back up invalid companion manifest",
        { manifestPath: e, backupPath: t, error: r },
      );
    }
  }
}
exports.CompanionFolderStore = k;
