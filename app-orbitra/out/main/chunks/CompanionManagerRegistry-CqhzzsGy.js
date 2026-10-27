"use strict";
(function () {
  try {
    var s =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    s.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var s =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new s.Error().stack;
    e &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[e] = "1507fdb1-fe50-4b33-ad4c-110528c252e3"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-1507fdb1-fe50-4b33-ad4c-110528c252e3"));
  })();
} catch {}
const Ae = require("events"),
  I = require("fs/promises"),
  Y = require("node:fs"),
  Ee = require("node:os"),
  f = require("node:path"),
  a = require("../main-app.js"),
  se = require("./config-CdpnFYk6.js"),
  Z = require("./settled-read-r0Yf0ORp.js"),
  Le = require("valibot"),
  L = require("fs"),
  W = require("path"),
  z = require("electron"),
  P = require("./errors-DsbnElf-.js"),
  ce = require("./appPaths-eBQvtv9Z.js"),
  We = require("./onboarding-BugjMquY.js"),
  O = require("./CompanionFolderStore-BW078c_O.js");
function Ie(s) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (s) {
    for (const o in s)
      if (o !== "default") {
        const n = Object.getOwnPropertyDescriptor(s, o);
        Object.defineProperty(
          e,
          o,
          n.get ? n : { enumerable: !0, get: () => s[o] },
        );
      }
  }
  return ((e.default = s), Object.freeze(e));
}
const p = Ie(Le),
  _e = Ie(z),
  Ne = [
    "consulting-cora",
    "developer-dana",
    "executive-ellis",
    "marketing-martin",
    "operations-olivia",
    "research-rosa",
    "sales-sally",
    "support-sofia",
    "talent-theo",
  ];
p.strictObject({
  name: p.pipe(p.string(), p.minLength(1)),
  prompt: p.pipe(p.string(), p.minLength(1)),
  trigger: p.strictObject({
    type: p.literal("cron"),
    expression: p.pipe(p.string(), p.minLength(1)),
  }),
});
const $e = p.picklist(Ne);
function xe(s) {
  const e = p.safeParse($e, s);
  return e.success ? e.output : null;
}
const Ue = "mouth_0",
  Be = "mouth_1",
  F = {
    rotation: { min: -180, max: 180 },
    turn: { min: -55, max: 55 },
    scale: { min: 0.5, max: 1.6 },
    offset: { min: -0.5, max: 0.5 },
    gaze: { min: 0, max: 1 },
  },
  ee = {
    background: null,
    rotation: 0,
    turn: 0,
    scale: 1,
    x: 0,
    y: 0,
    mouth: "own",
    gazeX: 0.9,
    gazeY: 0.3,
  },
  je = "installation",
  A = 512,
  N = 2.5,
  He = 490,
  ze = 263,
  oe = /^#[0-9a-f]{6}$/i;
function qe(s, e) {
  return Math.round(s / e) * e;
}
function T(s, e, o) {
  return p.fallback(
    p.pipe(
      p.number(),
      p.finite(),
      p.transform((n) =>
        Number(qe(Math.min(s.max, Math.max(s.min, n)), e).toFixed(4)),
      ),
    ),
    o,
  );
}
const Ke = p.pipe(
    p.string(),
    p.regex(oe),
    p.transform((s) => s.toUpperCase()),
  ),
  M = ee,
  Ye = p.object({
    background: p.fallback(p.nullable(Ke), null),
    rotation: T(F.rotation, 1, M.rotation),
    turn: T(F.turn, 1, M.turn),
    scale: T(F.scale, 0.01, M.scale),
    x: T(F.offset, 0.001, M.x),
    y: T(F.offset, 0.001, M.y),
    mouth: p.fallback(p.picklist(["own", "smile", "neutral"]), M.mouth),
    gazeX: T(F.gaze, 0.01, M.gazeX),
    gazeY: T(F.gaze, 0.01, M.gazeY),
  });
function Ge(s) {
  const e = p.safeParse(Ye, s ?? {});
  return e.success ? e.output : { ...ee };
}
function Xe(s, e = A, o = N) {
  const n = e / A;
  return {
    size: He * s.scale * o * n,
    centerX: (A / 2 + s.x * A) * n,
    centerY: (ze + s.y * A) * n,
    rotation: (s.rotation * Math.PI) / 180,
  };
}
function Ve(s, e) {
  return e === "smile" ? Ue : e === "neutral" ? Be : s.mouth.type;
}
function Je(s, e) {
  const o = Ve(s, e.mouth);
  return {
    ...s,
    mouth: o === s.mouth.type ? s.mouth : { ...s.mouth, type: o },
    pupil: { ...s.pupil, x: e.gazeX, z: e.gazeY },
  };
}
const Ze = 2;
function Qe(s, e, o) {
  const n = a.companionScreenshotCacheKey(Je(e, o), "modular");
  return `${s}|${n}|turn:${o.turn}|view:${N}|rev:${Ze}`;
}
function G(s) {
  const e = s / 255;
  return e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function eo(s) {
  return (
    (s <= 0.0031308 ? s * 12.92 : 1.055 * s ** 0.4166666666666667 - 0.055) * 255
  );
}
function oo(s) {
  const e = G(Number.parseInt(s.slice(1, 3), 16)),
    o = G(Number.parseInt(s.slice(3, 5), 16)),
    n = G(Number.parseInt(s.slice(5, 7), 16)),
    t = Math.cbrt(0.4122214708 * e + 0.5363325363 * o + 0.0514459929 * n),
    i = Math.cbrt(0.2119034982 * e + 0.6806995451 * o + 0.1073969566 * n),
    r = Math.cbrt(0.0883024619 * e + 0.2817188376 * o + 0.6299787005 * n),
    c = 0.2104542553 * t + 0.793617785 * i - 0.0040720468 * r,
    l = 1.9779984951 * t - 2.428592205 * i + 0.4505937099 * r,
    h = 0.0259040371 * t + 0.7827717662 * i - 0.808675766 * r;
  return { l: c, c: Math.hypot(l, h), h: Math.atan2(h, l) };
}
function le(s, e, o) {
  const n = e * Math.cos(o),
    t = e * Math.sin(o),
    i = (s + 0.3963377774 * n + 0.2158037573 * t) ** 3,
    r = (s - 0.1055613458 * n - 0.0638541728 * t) ** 3,
    c = (s - 0.0894841775 * n - 1.291485548 * t) ** 3,
    l = [
      4.0767416621 * i - 3.3077115913 * r + 0.2309699292 * c,
      -1.2684380046 * i + 2.6097574011 * r - 0.3413193965 * c,
      -0.0041960863 * i - 0.7034186147 * r + 1.707614701 * c,
    ];
  return l.some((h) => h < -1e-4 || h > 1.0001)
    ? null
    : l.map((h) => eo(Math.min(1, Math.max(0, h))));
}
function he([s, e, o]) {
  const n = (t) =>
    Math.round(Math.min(255, Math.max(0, t)))
      .toString(16)
      .padStart(2, "0");
  return `#${n(s)}${n(e)}${n(o)}`.toUpperCase();
}
function no(s, e, o) {
  const n = oo(oe.test(s) ? s : "#FFFFFF");
  let t = Math.min(n.c, o);
  for (let i = 0; i < 20; i += 1) {
    const r = le(e, t, n.h);
    if (r) return he(r);
    t *= 0.85;
  }
  return he(le(e, 0, 0) ?? [255, 255, 255]);
}
function to(s) {
  return no(s.color.head, 0.95, 0.045);
}
function io(s, e) {
  return s.background ?? to(e);
}
function ao(s) {
  const e = oe.test(s) ? s : "#FFFFFF";
  return [
    Number.parseInt(e.slice(1, 3), 16),
    Number.parseInt(e.slice(3, 5), 16),
    Number.parseInt(e.slice(5, 7), 16),
  ];
}
const ro = "dock-icon-portrait.png",
  so = "dock-icon-portrait.json",
  co = p.object({
    key: p.string(),
    companionId: p.string(),
    appearanceKey: p.string(),
    viewScale: p.literal(N),
  });
let Q = null;
function j() {
  return W.join(z.app.getPath("userData"), ro);
}
function ve() {
  return W.join(z.app.getPath("userData"), so);
}
function ne() {
  return Ge(a.globalSettings.get("dockIconDesign"));
}
function te(s) {
  return a.getFeatureFlags(s).companionIconDesignerEnabled;
}
function ie(s) {
  const e = a.resolveCompanionAppearance(s.appearance, s.visualsSeed, s.id);
  return a.companionScreenshotCacheKey(e, "modular");
}
function q(s, e = ne()) {
  const o = a.resolveCompanionAppearance(s.appearance, s.visualsSeed, s.id);
  return {
    companionId: s.id,
    key: Qe(s.id, o, e),
    mouth: e.mouth,
    gazeX: e.gazeX,
    gazeY: e.gazeY,
    turn: e.turn,
  };
}
function ae() {
  return (
    (Q ??= (async () => {
      try {
        const s = p.safeParse(
          co,
          JSON.parse(await L.promises.readFile(ve(), "utf8")),
        );
        if (!s.success) return null;
        await L.promises.access(j());
        const { key: e, companionId: o, appearanceKey: n } = s.output;
        return { path: j(), key: e, companionId: o, appearanceKey: n };
      } catch {
        return null;
      }
    })()),
    Q
  );
}
async function Pe(s, e) {
  const o = a.globalSettings.get("dockIconCompanionId");
  if (!o || !te(e)) return null;
  const n = s.find(({ id: r }) => r === o);
  if (!n) return null;
  const t = q(n);
  return (await ae())?.key === t.key ? null : t;
}
async function lo(s, e, o) {
  if (a.globalSettings.get("dockIconCompanionId") !== s.id)
    return { success: !1, error: "stale-design" };
  if (q(s).key !== e) return { success: !1, error: "stale-design" };
  const n = z.nativeImage.createFromDataURL(o);
  if (n.isEmpty()) return { success: !1, error: "invalid-image" };
  const t = { key: e, companionId: s.id, appearanceKey: ie(s) };
  return (
    await L.promises.writeFile(j(), n.toPNG()),
    await L.promises.writeFile(ve(), JSON.stringify({ ...t, viewScale: N })),
    (Q = Promise.resolve({ path: j(), ...t })),
    a.dockIconSettingsEmitter.emit(a.DOCK_ICON_SETTINGS_CHANGED),
    { success: !0 }
  );
}
const ho = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      companionAppearanceKey: ie,
      currentDockIconDesign: ne,
      dockIconPortraitFor: q,
      iconDesignerAvailable: te,
      pendingDockIconPortrait: Pe,
      readStoredDockIconPortrait: ae,
      saveDockIconPortrait: lo,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
class po {
  constructor(e, o) {
    ((this.mgr = e), (this.profileId = o));
  }
  inFlightFetchPromise = null;
  pendingReviews = new Map();
  async previewSharedCompanion(e) {
    try {
      const o = await a.authFetch(
        a.config.app.apiUrl + "/api/companions/shared",
        {
          accountId: a.authManager.forProfile(this.profileId).accountId,
          method: "POST",
          body: JSON.stringify({ companionDatabaseId: e }),
        },
      );
      if (!o.ok) return null;
      const n = p.safeParse(
        p.object({
          companion: p.object({
            name: p.optional(p.string()),
            instructions: p.optional(p.string()),
            skills: p.optional(
              p.array(
                p.object({
                  name: p.optional(p.string()),
                  instructions: p.optional(p.string()),
                }),
              ),
            ),
          }),
        }),
        await o.clone().json(),
      );
      if (!n.success) return null;
      const t = Date.now();
      for (const [r, c] of this.pendingReviews)
        t - c.issuedAt > 10 * 6e4 && this.pendingReviews.delete(r);
      if (this.pendingReviews.size >= 10) {
        const r = this.pendingReviews.keys().next().value;
        r && this.pendingReviews.delete(r);
      }
      const i = a.v4();
      return (
        this.pendingReviews.set(i, { response: o, issuedAt: t }),
        {
          reviewId: i,
          name: n.output.companion.name || "Unnamed Companion",
          instructions: n.output.companion.instructions || "",
          skills: (n.output.companion.skills ?? []).map((r) => ({
            name: r.name || "Unnamed skill",
            instructions: r.instructions || "",
          })),
        }
      );
    } catch {
      return null;
    }
  }
  async downloadSharedCompanion(e) {
    try {
      const o = this.pendingReviews.get(e);
      if (
        (this.pendingReviews.delete(e),
        !o || Date.now() - o.issuedAt > 10 * 6e4)
      )
        return { success: !1 };
      const t = (await o.response.json()).companion,
        i = new Set();
      if (t.skills && Array.isArray(t.skills))
        for (const h of t.skills)
          try {
            if (!h.id || !h.name || !h.instructions) {
              console.warn(
                "[SharedCompanionsService] Skipping invalid shared skill",
              );
              continue;
            }
            const d = {
              id: a.v4(),
              name: h.name,
              description: "",
              entryUrl: "",
              instructions: h.instructions || "",
              toolSlugs: [],
              isDraft: !1,
              isOfficial: !1,
            };
            (this.mgr.skillService.upsertSkill(d), i.add(d.id));
          } catch (d) {
            console.error(
              "[SharedCompanionsService] Error processing skill:",
              d,
            );
          }
      const r = a.v4(),
        c = p.safeParse(a.CompanionAppearanceSchema, t.appearance),
        l = {
          id: r,
          name: t.name || "Unnamed Companion",
          description: "",
          systemPrompt: t.instructions || "",
          temperature: 0.7,
          memories: "",
          skillIds: i,
          appearance: a.resolveCompanionAppearance(
            c.success ? c.output : void 0,
            t.visual_seed || void 0,
            r,
          ),
          visualsSeed: t.visual_seed || a.v4(),
          provider: a.DEFAULT_MODEL_ID,
          isChartsEnabled: t.is_charts_enabled || !1,
          isTemporary: !1,
          isDraft: !1,
          databaseId: t.id,
          companionImage: void 0,
          effort: "high",
          purpose: "shared-import",
        };
      return (
        this.mgr.storeOwnedCompanion(l),
        await this.mgr.saveCompanions(),
        this.mgr.notifyCompanionsChanged(),
        console.log("[SharedCompanionsService] Shared companion saved", {
          companionLocalId: r,
        }),
        { success: !0, companionLocalId: r }
      );
    } catch (o) {
      return (
        console.error(
          "[SharedCompanionsService] Error downloading shared companion:",
          o,
        ),
        { success: !1 }
      );
    }
  }
  async uploadSharedCompanion(e, o, n) {
    const t = this.mgr.getOwnedCompanionById(e);
    if (!t)
      return (
        console.error(`[CompanionManager] Companion ${e} not found`),
        { success: !1 }
      );
    try {
      const i = Array.from(t.skillIds || []);
      let r = [];
      if (i.length > 0) {
        const v = this.mgr.skillService.getSkills(i);
        if (n.length === 0) r = [];
        else {
          const D = new Set(n);
          r = v.filter((K) => D.has(K.id));
        }
      }
      const c = {
          clientId: t.id,
          name: t.name,
          instructions: t.systemPrompt || "",
          memories: (o && t.memories) || "",
          appearance: a.resolveCompanionAppearance(
            t.appearance,
            t.visualsSeed,
            t.id,
          ),
          isChartsEnabled: t.isChartsEnabled || !1,
          skills: r,
          tags: [],
          isPublic: !0,
        },
        l = JSON.stringify(c),
        h = Buffer.byteLength(l, "utf8"),
        d = h / (1024 * 1024);
      a.logger.info(
        `[SharedCompanionsService] Companion size: ${d.toFixed(2)} MB (${h} bytes)`,
      );
      const u = 1 * 1024 * 1024;
      let g;
      if (h > u) {
        a.logger.info(
          `[SharedCompanionsService] Companion exceeds ${u / (1024 * 1024)}MB limit, uploading to S3/R2`,
        );
        const v = await a.authFetch(
          a.config.app.apiUrl + "/api/chat/upload-presigned-url",
          {
            accountId: a.authManager.forProfile(this.profileId).accountId,
            method: "POST",
          },
        );
        if (!v.ok)
          return (
            a.logger.error(
              "[SharedCompanionsService] Failed to get presigned URL:",
              v.statusText,
            ),
            { success: !1 }
          );
        const { presignedUrl: D, storageUrl: K } = await v.json(),
          re = await fetch(D, {
            method: "PUT",
            body: l,
            headers: { "Content-Type": "application/json" },
          });
        if (!re.ok)
          return (
            a.logger.error(
              "[SharedCompanionsService] Failed to upload companion to S3/R2:",
              re.statusText,
            ),
            { success: !1 }
          );
        ((g = K),
          a.logger.info(
            "[SharedCompanionsService] Successfully uploaded companion to S3/R2",
          ));
      }
      const S = {};
      g ? (S.storageUrl = g) : (S.companion = c);
      const w = a.config.app.apiUrl + "/api/companions/shared/upload",
        C = await a.authFetch(w, {
          accountId: a.authManager.forProfile(this.profileId).accountId,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(S),
        });
      if (!C.ok) {
        const v = await C.text();
        return (
          a.logger.error(
            `[SharedCompanionsService] Failed to upload shared companion: ${C.status} - ${v}`,
          ),
          { success: !1 }
        );
      }
      const y = (await C.json()).sharedCompanionId;
      return y
        ? (a.logger.info(
            `[SharedCompanionsService] Successfully uploaded shared companion with ID: ${y}`,
          ),
          { success: !0, sharedCompanionId: y })
        : (a.logger.error(
            "[SharedCompanionsService] No sharedCompanionId in response",
          ),
          { success: !1 });
    } catch (i) {
      return (
        a.logger.error(
          "[SharedCompanionsService] Error uploading shared companion:",
          i,
        ),
        { success: !1 }
      );
    }
  }
  async adoptSharedCompanion(e) {
    const o = this.mgr.findSharedCompanionByDatabaseId(e);
    if (!o)
      return (
        console.error(`[CompanionManager] Shared companion ${e} not found`),
        null
      );
    const n = o.id;
    return (
      o.skillIds?.forEach((t) => {
        this.mgr.skillService.adoptSharedSkillById(t);
      }),
      (o.isTemporary = !1),
      this.mgr.moveSharedCompanionToOwned(n),
      await this.mgr.saveCompanions(),
      (this.mgr.currentCompanion = o),
      this.mgr.notifyCompanionsChanged(),
      console.log(
        `[CompanionManager] Successfully adopted shared companion: ${o.name} (${this.mgr.currentCompanion.id})`,
      ),
      this.mgr.currentCompanion.id
    );
  }
  async setCompanionTemporary(e, o) {
    try {
      const n = this.mgr.getOwnedCompanionById(e);
      return n
        ? ((n.isTemporary = o),
          await this.mgr.saveCompanions(),
          this.mgr.notifyCompanionsChanged(),
          !0)
        : (console.error(`[CompanionManager] Companion ${e} not found`), !1);
    } catch (n) {
      return (
        console.error(
          `[CompanionManager] Error setting companion temporary: ${n}`,
        ),
        !1
      );
    }
  }
}
const mo = [
  "Alba",
  "Alix",
  "Amari",
  "Ari",
  "Avery",
  "Billie",
  "Bowie",
  "Cleo",
  "Coco",
  "Dara",
  "Eden",
  "Ember",
  "Finn",
  "Indie",
  "Ira",
  "Jules",
  "June",
  "Kai",
  "Kit",
  "Lena",
  "Lora",
  "Lou",
  "Lumi",
  "Marlowe",
  "Maya",
  "Mika",
  "Milo",
  "Miro",
  "Nico",
  "Noa",
  "Nova",
  "Ollie",
  "Paz",
  "Pip",
  "Quinn",
  "Ren",
  "Remy",
  "Riley",
  "Rio",
  "Robin",
  "Rumi",
  "Sage",
  "Sasha",
  "Sol",
  "Tali",
  "Theo",
  "Vega",
  "Violet",
];
function uo(s, e) {
  let o = 0;
  for (const r of s) o = (o * 31 + r.charCodeAt(0)) >>> 0;
  const n = [...mo];
  let t = o || 1;
  for (let r = n.length - 1; r > 0; r -= 1) {
    t = (t * 1664525 + 1013904223) >>> 0;
    const c = t % (r + 1),
      l = n[r];
    ((n[r] = n[c]), (n[c] = l));
  }
  return n.slice(0, 4);
}
function fo(s) {
  const [e = "Alba"] = uo(s);
  return e;
}
class go {
  constructor(e, o) {
    ((this.db = e), (this.libraryRoot = W.join(o, "library")));
  }
  libraryRoot;
  async removeCompanionData(e) {
    const o = W.join(this.libraryRoot, "companions", e);
    try {
      await I.rm(o, { recursive: !0, force: !0 });
    } catch (n) {
      a.logger.warn(
        `[LibraryStore] Failed to delete companion library directory: ${o}`,
        n,
      );
    }
    (this.db.deleteLibraryFilesByCompanion(e),
      this.db.deleteLibraryAgentSkillsByCompanion(e),
      a.logger.info(`[LibraryStore] Removed library data for companion ${e}`));
  }
}
const Co = "full-body",
  wo = "full-body-blink",
  be = "face-portrait",
  So = `${be}.png`;
function de(s, e) {
  const o = s.replace(/\\/g, "/"),
    n = o.lastIndexOf("/");
  if (n !== -1) return `${o.slice(0, n + 1)}${e}`;
}
function yo(s, e) {
  if (s && !(s.startsWith("data:") || s.startsWith("https://"))) {
    if (s.startsWith("http://"))
      try {
        const o = new URL(s);
        if (o.hostname !== "localhost" && o.hostname !== "127.0.0.1") return;
        const n = de(o.pathname, e);
        return n ? ((o.pathname = n), (o.search = ""), o.toString()) : void 0;
      } catch {
        return;
      }
    return de(s, e);
  }
}
function ke(s) {
  return yo(s, So);
}
function Io(s, e) {
  return s.some((o) => {
    const n = o.companionImage?.trim();
    if (!n) return !0;
    if (n.startsWith("data:") || n.startsWith("https://")) return !1;
    const t = n.replace(/\\/g, "/"),
      i = a.resolveCompanionAppearance(o.appearance, o.visualsSeed, o.id);
    return !t.includes(a.companionScreenshotPathMarker(i, e));
  });
}
async function vo(s) {
  return (
    await Promise.all(
      s.map(async (o) => {
        const n = o.companionImage?.trim();
        if (!n || !W.isAbsolute(n)) return null;
        const t = ke(n);
        if (!t) return null;
        try {
          return (await L.promises.access(t), null);
        } catch {
          return o.id;
        }
      }),
    )
  ).filter((o) => o !== null);
}
const Po = 1e3,
  bo = 3e4,
  ko = 5,
  pe = { width: 512, height: 512 },
  Ro = "[OffscreenDiagnostics]",
  Mo = 1e3,
  B = new Set();
function Fo({ id: s, profileId: e, eventName: o, payload: n }) {
  for (const t of B)
    t.options.id !== s ||
      t.options.profileId !== e ||
      t.window.isDestroyed() ||
      a.safeSendToWebContents(t.window.webContents, String(o), n);
}
class To {
  constructor(e) {
    this.layers = e;
  }
  entries = new Map();
  ensureOffscreenRenderer(e) {
    if (!this.isOffscreenRoute(e.route)) {
      a.layersLogger.warn(
        "[OffscreenRendererHost] Refusing non-offscreen route",
        { id: e.id, route: e.route },
      );
      return;
    }
    const o = this.entries.get(e.id);
    (o && !o.window.isDestroyed()) ||
      this.createRenderer(this.withDefaults(e), o?.retryCount ?? 0);
  }
  cleanup() {
    for (const e of this.entries.keys()) this.destroyRenderer(e);
  }
  withDefaults(e) {
    return {
      ...e,
      layerId: e.layerId ?? `offscreen-${e.id}`,
      layerType: e.layerType ?? "offscreen",
      allowedInvocations: e.allowedInvocations ?? [],
    };
  }
  createRenderer(e, o) {
    const n = this.getInitialResolvedTheme(),
      t = a.fileManager.getPort(),
      i = new _e.BrowserWindow(this.getBrowserWindowOptions(e, n)),
      r = i.webContents,
      c = a.safeGetWebContentsId(r);
    if (!c.ok) {
      i.destroy();
      return;
    }
    a.setPreloadContext(c.value, {
      windowId: e.windowId,
      profileId: e.profileId,
      layerId: e.layerId,
      layerType: e.layerType,
      initialTheme: n,
      initialThemeHue: 266,
      initialThemeChroma: 0.025,
      assetServerPort: t ?? null,
      offscreen: { allowedInvocations: e.allowedInvocations.map(String) },
    });
    const l = {
      options: e,
      window: i,
      retryCount: o,
      retryTimer: null,
      isDestroying: !1,
    };
    (this.entries.set(e.id, l),
      B.add(l),
      this.installNavigationGuard(l),
      this.installLifecycleHandlers(l),
      i.loadURL(a.getRendererURL(e.route)).catch((h) => {
        this.handleLoadFailure(l, h);
      }));
  }
  getBrowserWindowOptions(e, o) {
    const n = a.fileManager.getPort();
    return {
      show: !1,
      paintWhenInitiallyHidden: !0,
      width: pe.width,
      height: pe.height,
      transparent: !0,
      webPreferences: {
        partition: "persist:ui-partition-ui",
        transparent: !0,
        backgroundThrottling: !1,
        nodeIntegration: !1,
        contextIsolation: !0,
        preload: a.getPreloadPath("offscreenPreload"),
        additionalArguments: [
          `--window-id=${e.windowId}`,
          `--profile-id=${e.profileId}`,
          `--layer-id=${e.layerId}`,
          `--layer-type=${e.layerType}`,
          `--initial-theme=${o}`,
          `--offscreen-allowed-invocations=${encodeURIComponent(e.allowedInvocations.map(String).join(","))}`,
          ...(n ? [`--asset-server-port=${n}`] : []),
        ],
      },
    };
  }
  installNavigationGuard(e) {
    const { window: o, options: n } = e;
    a.safeWithWebContents(o.webContents, (t) => {
      (t.on("will-navigate", (i, r) => {
        this.isAllowedRendererRoute(r, n.route) ||
          (i.preventDefault(),
          a.layersLogger.warn(
            "[OffscreenRendererHost] Blocked offscreen navigation",
            { targetOrigin: this.getUrlOriginForLog(r) },
          ));
      }),
        t.on("did-navigate-in-page", (i, r, c) => {
          !c ||
            this.isAllowedRendererRoute(r, n.route) ||
            (a.layersLogger.warn(
              "[OffscreenRendererHost] Reset offscreen in-page navigation",
              { targetOrigin: this.getUrlOriginForLog(r) },
            ),
            o.loadURL(a.getRendererURL(n.route)).catch((l) => {
              this.handleLoadFailure(e, l);
            }));
        }),
        t.setWindowOpenHandler(
          ({ url: i }) => (
            a.layersLogger.warn(
              "[OffscreenRendererHost] Blocked offscreen window.open",
              { targetOrigin: this.getUrlOriginForLog(i) },
            ),
            { action: "deny" }
          ),
        ));
    });
  }
  installLifecycleHandlers(e) {
    a.safeWithWebContents(e.window.webContents, (o) => {
      const n = o.id,
        t = a.eventManager.registerStandaloneRenderer({
          windowId: e.options.windowId,
          layerId: e.options.layerId,
          webContents: o,
        });
      (o.once("destroyed", t),
        o.on("console-message", (i) => {
          const r = i.message;
          if (!r.startsWith(Ro)) return;
          const c = r.slice(0, Mo),
            l = `[OffscreenRendererHost:${e.options.id}] ${c}`;
          i.level === "error"
            ? a.layersLogger.error(l)
            : i.level === "warning"
              ? a.layersLogger.warn(l)
              : a.layersLogger.info(l);
        }),
        o.on("did-finish-load", () => {
          e.retryCount = 0;
        }),
        o.on("render-process-gone", (i, r) => {
          e.isDestroying ||
            (a.layersLogger.warn(
              "[OffscreenRendererHost] Renderer process gone",
              { id: e.options.id, reason: r.reason },
            ),
            this.scheduleRetry(e));
        }),
        e.window.on("closed", () => {
          (t(),
            a.clearPreloadContext(n),
            B.delete(e),
            this.entries.get(e.options.id) === e &&
              this.entries.delete(e.options.id));
        }));
    });
  }
  handleLoadFailure(e, o) {
    e.isDestroying ||
      e.window.isDestroyed() ||
      (a.layersLogger.warn(
        "[OffscreenRendererHost] Failed to load offscreen renderer",
        { id: e.options.id, error: o instanceof Error ? o.message : String(o) },
      ),
      this.scheduleRetry(e));
  }
  scheduleRetry(e) {
    const o = e.retryCount + 1,
      n = Math.min(Po * Math.pow(2, e.retryCount), bo),
      t = e.options;
    if ((this.destroyRenderer(e.options.id), e.retryCount >= ko)) {
      a.layersLogger.error(
        "[OffscreenRendererHost] Renderer keeps failing; not retrying",
        { id: t.id, attempts: o },
      );
      return;
    }
    const i = setTimeout(() => {
      this.createRenderer(t, o);
    }, n);
    (i.unref?.(),
      this.entries.set(t.id, {
        options: t,
        window: e.window,
        retryCount: o,
        retryTimer: i,
        isDestroying: !0,
      }));
  }
  destroyRenderer(e) {
    const o = this.entries.get(e);
    if (
      o &&
      ((o.isDestroying = !0),
      o.retryTimer && clearTimeout(o.retryTimer),
      B.delete(o),
      this.entries.delete(e),
      !o.window.isDestroyed())
    ) {
      const n = a.safeGetWebContentsId(o.window.webContents);
      (n.ok && a.clearPreloadContext(n.value), o.window.close());
    }
  }
  getInitialResolvedTheme() {
    const e = this.layers.getProfileTheme();
    return !e || e === "system"
      ? a.getSystemShouldUseDarkColors()
        ? "dark"
        : "light"
      : e;
  }
  isOffscreenRoute(e) {
    return this.normalizeRoute(e).startsWith("/ui/offscreen/");
  }
  isAllowedRendererRoute(e, o) {
    if (!e) return !1;
    try {
      const n = new URL(e),
        t = new URL(a.getRendererURL(o));
      return (
        n.protocol === t.protocol &&
        n.host === t.host &&
        this.normalizeRoute(n.pathname) === this.normalizeRoute(o) &&
        n.search === "" &&
        n.hash === ""
      );
    } catch {
      return !1;
    }
  }
  normalizeRoute(e) {
    const o = e.startsWith("/") ? e : `/${e}`;
    return o.length > 1 && o.endsWith("/") ? o.slice(0, -1) : o;
  }
  getUrlOriginForLog(e) {
    try {
      const o = new URL(e);
      return `${o.protocol}//${o.host}`;
    } catch {
      return "invalid-url";
    }
  }
}
const me = "companion-model-defaults-0.1.33";
function Do(s) {
  return s.agentSmartModel === void 0 &&
    s.agentFastModel === void 0 &&
    s.imageModel === void 0
    ? s
    : {
        ...s,
        agentSmartModel: void 0,
        agentFastModel: void 0,
        imageModel: void 0,
      };
}
const X = a.SANDBOX_ACTIVE_COMPANION_DIR;
function Oo(s) {
  return s === "/" ? s : s.replace(/\/+$/, "");
}
function k(s, e) {
  const o = e.split("/").filter(Boolean).join("/");
  return o ? `${s}/${o}` : s;
}
function b(s, e) {
  const o = f.resolve(s),
    n = f.resolve(o, ...e.split("/").filter(Boolean));
  return n !== o && !n.startsWith(o + f.sep) ? null : n;
}
function Re(s) {
  let e = Oo(s.trim().replace(/\\/g, "/"));
  if (e === X) return "/companion";
  if (e.startsWith(`${X}/`)) return `/companion/${e.slice(X.length + 1)}`;
  const o = "/mnt/orbitra";
  return (e.startsWith(`${o}/`) && (e = e.slice(o.length)), e);
}
function Ao(s, e) {
  const o = Re(e);
  if (o === "/companion") return s.rootHostPath;
  if (o === "/memories" || o.startsWith("/memories/"))
    return b(s.memoriesHostPath, o.slice(9));
  if (o === "/companion/memories" || o.startsWith("/companion/memories/"))
    return b(s.memoriesHostPath, o.slice(19));
  if (o === "/companion/memory" || o.startsWith("/companion/memory/"))
    return b(f.join(s.rootHostPath, "memory"), o.slice(17));
  if (o === "/skills" || o.startsWith("/skills/"))
    return b(s.skillsHostPath, o.slice(7));
  if (o === "/companion/skills" || o.startsWith("/companion/skills/"))
    return b(s.skillsHostPath, o.slice(17));
  if (o.startsWith("/companion/")) return b(s.rootHostPath, o.slice(10));
  if (o.startsWith("/companions/")) {
    const n = o.slice(12),
      t = n.indexOf("/"),
      i = t === -1 ? n : n.slice(0, t),
      r = t === -1 ? "" : n.slice(t);
    return i !== s.companionId
      ? null
      : r
        ? r === "/memories" || r.startsWith("/memories/")
          ? b(s.memoriesHostPath, r.slice(9))
          : r === "/memory" || r.startsWith("/memory/")
            ? b(f.join(s.rootHostPath, "memory"), r.slice(7))
            : r === "/skills" || r.startsWith("/skills/")
              ? b(s.skillsHostPath, r.slice(7))
              : b(s.rootHostPath, r)
        : s.rootHostPath;
  }
  if (f.isAbsolute(e)) {
    const n = f.resolve(s.rootHostPath),
      t = f.resolve(e);
    if (t === n || t.startsWith(n + f.sep)) return t;
  }
  return null;
}
function Eo(s, e) {
  if (s.permission !== "readwrite") return null;
  const o = Re(e);
  if (o.split("/").includes("..")) return null;
  const n = s.sourceKind === "owned" ? "owned" : "shared";
  if (o === "/companion")
    return {
      workspaceRelativePath: s.rootWorkspacePath,
      workspaceKind: n,
      workspaceId: s.workspaceId,
    };
  if (o === "/memories" || o.startsWith("/memories/"))
    return {
      workspaceRelativePath: k(s.memoriesWorkspacePath, o.slice(9)),
      workspaceKind: n,
      workspaceId: s.workspaceId,
    };
  if (o === "/companion/memories" || o.startsWith("/companion/memories/"))
    return {
      workspaceRelativePath: k(s.memoriesWorkspacePath, o.slice(19)),
      workspaceKind: n,
      workspaceId: s.workspaceId,
    };
  if (o === "/skills" || o.startsWith("/skills/"))
    return {
      workspaceRelativePath: k(s.skillsWorkspacePath, o.slice(7)),
      workspaceKind: n,
      workspaceId: s.workspaceId,
    };
  if (o === "/companion/skills" || o.startsWith("/companion/skills/"))
    return {
      workspaceRelativePath: k(s.skillsWorkspacePath, o.slice(17)),
      workspaceKind: n,
      workspaceId: s.workspaceId,
    };
  if (o.startsWith("/companion/"))
    return {
      workspaceRelativePath: k(s.rootWorkspacePath, o.slice(10)),
      workspaceKind: n,
      workspaceId: s.workspaceId,
    };
  if (o.startsWith("/companions/")) {
    const t = o.slice(12),
      i = t.indexOf("/"),
      r = i === -1 ? t : t.slice(0, i),
      c = i === -1 ? "" : t.slice(i);
    return r !== s.companionId
      ? null
      : c
        ? c === "/memories" || c.startsWith("/memories/")
          ? {
              workspaceRelativePath: k(s.memoriesWorkspacePath, c.slice(9)),
              workspaceKind: n,
              workspaceId: s.workspaceId,
            }
          : c === "/skills" || c.startsWith("/skills/")
            ? {
                workspaceRelativePath: k(s.skillsWorkspacePath, c.slice(7)),
                workspaceKind: n,
                workspaceId: s.workspaceId,
              }
            : {
                workspaceRelativePath: k(s.rootWorkspacePath, c),
                workspaceKind: n,
                workspaceId: s.workspaceId,
              }
        : {
            workspaceRelativePath: s.rootWorkspacePath,
            workspaceKind: n,
            workspaceId: s.workspaceId,
          };
  }
  if (f.isAbsolute(e)) {
    const t = f.resolve(e),
      i = f.resolve(s.rootHostPath);
    if (t === i || t.startsWith(i + f.sep))
      return {
        workspaceRelativePath: k(
          s.rootWorkspacePath,
          f.relative(i, t).split(f.sep).join("/"),
        ),
        workspaceKind: n,
        workspaceId: s.workspaceId,
      };
  }
  return null;
}
function Lo(s) {
  return {
    ...s,
    sandboxRootPath: a.SANDBOX_ACTIVE_COMPANION_DIR,
    sandboxByIdPath: `${a.SANDBOX_COMPANIONS_DIR}/${s.companionId}`,
    sandboxMemoriesPath: `${a.SANDBOX_ACTIVE_COMPANION_DIR}/memories`,
    sandboxSkillsPath: `${a.SANDBOX_ACTIVE_COMPANION_DIR}/skills`,
  };
}
function E(s) {
  return s.replace(/^\/+|\/+$/g, "");
}
function ue(s, e, o, n) {
  return s.find(
    (t) =>
      t.targetWorkspaceId === e &&
      E(t.targetPath) === E(o) &&
      E(t.sourcePath) === `companions/${n}`,
  );
}
function _(s) {
  const e = E(s),
    o = e.match(/(?:^|\/)companions\/([^/]+)(?:\/|$)/);
  if (!o?.[1]) return null;
  const n = `companions/${o[1]}`,
    t = e.indexOf(n);
  return t < 0
    ? null
    : { companionId: o[1], rootPath: e.slice(0, t + n.length) };
}
function Wo(s) {
  const e = new Set();
  for (const o of s) {
    const n = _(o.sourcePath),
      t = _(o.targetPath);
    !n || !t || (n.companionId === t.companionId && e.add(t.rootPath));
  }
  return e;
}
function _o(s) {
  if (!s.ownedCompanionIds.has(s.companionId)) return !1;
  const e = E(s.workspaceRelativeRoot);
  return s.outgoingCompanionTargetRoots.has(e)
    ? !0
    : e === `companions/${s.companionId}`;
}
const $ = {
    retriedForMs: p.optional(p.number()),
    retriedAtMs: p.optional(p.number()),
  },
  No = p.variant("kind", [
    p.object({ kind: p.literal("memory"), profileId: p.string(), ...$ }),
    p.object({ kind: p.literal("routines"), ...$ }),
    p.object({ kind: p.literal("publication"), profileId: p.string(), ...$ }),
    p.object({ kind: p.literal("shares"), ...$ }),
  ]),
  $o = p.object({
    id: p.string(),
    accountId: p.string(),
    companionId: p.string(),
    storageProfileId: p.string(),
    sourceWorkspaceId: p.nullable(p.string()),
    steps: p.array(No),
  }),
  xo = p.array($o),
  Uo = p.object({ error: p.string() }),
  Bo = /^[a-z][a-z0-9_-]{0,63}$/,
  jo = /^API \S+ failed: (\d{3})\b/,
  Ho = /^[A-Za-z][A-Za-z0-9_]{0,63}$/,
  zo = 3e4,
  Me = 60 * 6e4,
  qo = 720 * 60 * 6e4,
  x = 360 * 6e4;
function H(s, e = null) {
  if (s === null)
    return {
      outcome: "waiting",
      reason: e && Ho.test(e) ? `no_answer:${e}` : "no_answer",
    };
  if (s >= 200 && s <= 299) return { outcome: "done" };
  const o = e && Bo.test(e) ? `http_${s}:${e}` : `http_${s}`;
  return s === 401 || s === 408 || s === 429 || s >= 500
    ? { outcome: "retry", reason: o }
    : { outcome: "failed", reason: o };
}
async function fe(s) {
  if (s.ok) return { outcome: "done" };
  const e = p.safeParse(Uo, await s.json().catch(() => null));
  return H(s.status, e.success ? e.output.error : null);
}
function Fe(s) {
  const e = Te(s);
  return e !== null ? H(e) : H(null, s instanceof Error ? s.name : null);
}
function Ko(s) {
  const e = s.map((o) =>
    o.status === "fulfilled"
      ? o.value.ok
        ? { outcome: "done" }
        : { outcome: "retry", reason: "share_revoke_failed" }
      : Te(o.reason) === 404
        ? { outcome: "done" }
        : Fe(o.reason),
  );
  return (
    e.find(({ outcome: o }) => o === "retry") ??
    e.find(({ outcome: o }) => o === "waiting") ??
    e.find(({ outcome: o }) => o === "failed") ?? { outcome: "done" }
  );
}
function Te(s) {
  if (s instanceof Z.FSForbiddenError) return 403;
  const e = s instanceof Error ? jo.exec(s.message)?.[1] : void 0;
  return e ? Number(e) : null;
}
function ge(s) {
  return s.map(({ step: e, reason: o }) => `${e.kind}:${o}`).join(",");
}
function Yo(s) {
  return Math.min(zo * 2 ** Math.max(0, s - 1), Me);
}
class Go {
  constructor(e) {
    this.deps = e;
  }
  unsavedChanges = [];
  retryTimer = null;
  retryRound = 0;
  sending = new Set();
  sendAgain = !1;
  stopped = !1;
  save(e) {
    this.change((o) => (o.some(({ id: n }) => n === e.id) ? o : [...o, e]));
  }
  async send() {
    const e = this.deps.accountId();
    if (this.stopped || !e) return;
    const o = this.known().filter((t) => t.accountId === e),
      n = o.filter((t) => !this.sending.has(t.id));
    if ((n.length < o.length && (this.sendAgain = !0), n.length === 0)) {
      o.length === 0 && this.scheduleRetry(e);
      return;
    }
    if (
      (await Promise.all(n.map((t) => this.sendCleanup(t))),
      this.sendAgain && this.sending.size === 0)
    ) {
      ((this.sendAgain = !1), await this.send());
      return;
    }
    this.scheduleRetry(e);
  }
  stop() {
    ((this.stopped = !0),
      this.retryTimer && clearTimeout(this.retryTimer),
      (this.retryTimer = null));
  }
  async sendCleanup(e) {
    this.sending.add(e.id);
    try {
      const o =
          e.sourceWorkspaceId ??
          this.deps.workspaceIdForProfile(e.storageProfileId),
        n = await Promise.all(
          e.steps.map(async (h) => ({
            step: h,
            result: await this.deps.sendStep(e, h, o).catch(Fe),
          })),
        );
      if (this.stopped) return;
      const t = Date.now(),
        i = [],
        r = [],
        c = [];
      for (const { step: h, result: d } of n)
        if (d.outcome !== "done")
          if (d.outcome === "failed") r.push({ step: h, reason: d.reason });
          else if (d.outcome === "waiting")
            i.push({ step: h, reason: d.reason });
          else {
            const u = h.retriedAtMs === void 0 ? 0 : t - h.retriedAtMs,
              g = (h.retriedForMs ?? 0) + Math.min(Math.max(0, u), 2 * Me);
            g > qo
              ? c.push({ step: h, reason: d.reason })
              : i.push({
                  step: { ...h, retriedForMs: g, retriedAtMs: t },
                  reason: d.reason,
                });
          }
      (r.length > 0 && this.reportFailed(e, r, "rejected"),
        c.length > 0 && this.reportFailed(e, c, "expired"));
      const l = i.map(({ step: h }) => h);
      (l.length > 0 &&
        a.logThrottled(this.logKey(e.id), x, (h) =>
          a.logger.warn(
            "[DeletedCompanionCleanup] Will retry a deleted companion cleanup",
            {
              userId: e.accountId,
              profileId: this.deps.profileId,
              companionId: e.companionId,
              steps: ge(i),
              outcome: "degraded",
              reason: i[0]?.reason,
              suppressed: h,
            },
          ),
        ),
        this.change((h) =>
          h.flatMap((d) =>
            d.id !== e.id
              ? [d]
              : l.length === 0
                ? []
                : [{ ...d, sourceWorkspaceId: o, steps: l }],
          ),
        ));
    } catch (o) {
      a.logger.warn(
        "[DeletedCompanionCleanup] Could not send a deleted companion cleanup",
        {
          userId: e.accountId,
          profileId: this.deps.profileId,
          companionId: e.companionId,
          outcome: "degraded",
          reason: "send_failed",
          errorName: o instanceof Error ? o.name : "error",
        },
      );
    } finally {
      this.sending.delete(e.id);
    }
  }
  reportFailed(e, o, n) {
    a.logger.error(
      "[DeletedCompanionCleanup] Gave up a deleted companion cleanup",
      {
        userId: e.accountId,
        profileId: this.deps.profileId,
        companionId: e.companionId,
        steps: ge(o),
        outcome: "failed",
        reason: n,
      },
    );
  }
  scheduleRetry(e) {
    if (
      (this.retryTimer && clearTimeout(this.retryTimer),
      (this.retryTimer = null),
      this.stopped)
    )
      return;
    const o = this.read();
    if (
      !(o === null || this.withUnsavedChanges(o).some((t) => t.accountId === e))
    ) {
      this.retryRound = 0;
      return;
    }
    ((this.retryRound += 1),
      (this.retryTimer = setTimeout(() => {
        ((this.retryTimer = null), this.send());
      }, Yo(this.retryRound))),
      this.retryTimer.unref());
  }
  logKey(e) {
    return `deleted-companion-cleanup:${this.deps.profileId}:${e}`;
  }
  known() {
    return this.withUnsavedChanges(this.read() ?? []);
  }
  withUnsavedChanges(e) {
    return this.unsavedChanges.reduce((o, n) => n(o), e);
  }
  read() {
    let e;
    try {
      e = this.deps.load();
    } catch (o) {
      return (
        a.logThrottled(this.logKey("load"), x, (n) =>
          a.logger.warn(
            "[DeletedCompanionCleanup] Could not read saved companion cleanups",
            {
              userId: this.deps.accountId(),
              profileId: this.deps.profileId,
              outcome: "degraded",
              reason: "load_failed",
              errorName: o instanceof Error ? o.name : "error",
              suppressed: n,
            },
          ),
        ),
        null
      );
    }
    if (!e) return [];
    try {
      const o = p.safeParse(xo, JSON.parse(e));
      if (o.success) return o.output;
    } catch {}
    return (
      a.logThrottled(this.logKey("invalid"), x, (o) =>
        a.logger.warn(
          "[DeletedCompanionCleanup] Ignoring unreadable saved companion cleanups",
          {
            userId: this.deps.accountId(),
            profileId: this.deps.profileId,
            outcome: "degraded",
            reason: "invalid_saved_cleanups",
            suppressed: o,
          },
        ),
      ),
      []
    );
  }
  change(e) {
    this.unsavedChanges.push(e);
    const o = this.read();
    if (o !== null) {
      try {
        this.deps.save(JSON.stringify(this.withUnsavedChanges(o)));
      } catch (n) {
        a.logThrottled(this.logKey("save"), x, (t) =>
          a.logger.error(
            "[DeletedCompanionCleanup] Could not save deleted companion cleanups",
            {
              userId: this.deps.accountId(),
              profileId: this.deps.profileId,
              outcome: "degraded",
              reason: "save_failed",
              errorName: n instanceof Error ? n.name : "error",
              suppressed: t,
            },
          ),
        );
        return;
      }
      this.unsavedChanges = [];
    }
  }
}
function R(s, e) {
  s &&
    a.eventManager.publishIPCSignal(
      {
        domain: "chat",
        type: "sidebarCompanionChanged",
        payload: { companion: e },
      },
      s,
    );
}
let Ce = null,
  we = null;
function Xo() {
  return (
    (we ??= Promise.resolve().then(() =>
      require("./delete-hosted-scope-CW4r9yK2.js"),
    )),
    we
  );
}
function De() {
  return (
    (Ce ??= Promise.resolve()
      .then(() => require("./official-companions.generated-ET-7I1tD.js"))
      .then((s) => s.officialCompanions)),
    Ce
  );
}
async function Se(s) {
  const e = xe(s),
    o = e ? (await De()).find((n) => n.id === e) : void 0;
  if (!o)
    throw new Error(
      "This companion is not available in this version of Orbitra. Update and try again.",
    );
  return o;
}
function V(s) {
  return `companion-folder:${s}`;
}
function J(s, e) {
  const o = f.relative(s, e);
  return (
    o === "" || (o !== ".." && !o.startsWith(`..${f.sep}`) && !f.isAbsolute(o))
  );
}
const Vo = 3e4;
function ye(s) {
  return new Promise((e) => setTimeout(e, s));
}
function Jo(s) {
  return Array.from(s ?? []).sort();
}
async function U(s, e) {
  const o = await s.json().catch(() => null);
  return typeof o?.error == "string"
    ? o.error
    : o?.error?.message
      ? o.error.message
      : e;
}
function Zo(s) {
  return JSON.stringify(
    Object.keys(s)
      .sort()
      .map((e) => {
        const o = s[e];
        return {
          companionId: e,
          isIncoming: o.isIncoming,
          isOutgoing: o.isOutgoing,
          incomingPermission: o.incomingPermission ?? null,
          outgoingShareCount: o.outgoingShareCount,
          outgoingShareIds: Jo(o.outgoingShareIds),
          outgoingTeamShares: [...(o.outgoingTeamShares ?? [])].sort((n, t) =>
            n.shareId.localeCompare(t.shareId),
          ),
          outgoingRecipients: [...(o.outgoingRecipients ?? [])].sort((n, t) =>
            n.shareId.localeCompare(t.shareId),
          ),
          isTeamShare: o.isTeamShare === !0,
          canRemoveIncomingShare: o.canRemoveIncomingShare === !0,
        };
      }),
  );
}
const Qo = 5e3,
  en = 6e4,
  on = new Set([".png", ".jpg", ".jpeg", ".webp"]),
  nn = /(?:^|\/)companions\/([^/]+)\/skills\/[^/]+(?:\/SKILL\.md)?$/;
class tn extends Ae.EventEmitter {
  constructor(e, o, n, t = !1, i) {
    (super(),
      (this.profileId = e),
      (this.skillService = o),
      (this.isIncognito = t),
      (this.profileManager = i),
      (this.profile = i?.getLoadedProfile(e) ?? null),
      (this.db = n),
      console.log("[CompanionManager] Using ProfileDataDatabase"),
      (this.sharedCompanionsService = new po(this, this.profileId)),
      (this.initComplete = this.init()));
  }
  authFetch = (e, o = {}) =>
    a.authFetch(e, { ...o, accountId: this.accountId });
  currentCompanion = null;
  companions = new Map();
  sharedCompanions = new Map();
  chatCompanions = new Map();
  changedChatCompanions = new Set();
  companionsBeingRemoved = new Set();
  deletedCompanionCleanup = null;
  stopDeletedCompanionCleanupRetries = null;
  removedCompanionIds = [];
  accountCompanionRefresh = null;
  unsubscribeAccountCompanions = null;
  accountCompanionRefreshTimer = null;
  accountCompanionRevision = 0;
  accountCompanionWatchAccountId;
  companionLocations = new Map();
  transientFallback = null;
  companionImageCache = new Map();
  db;
  sharedCompanionsService;
  inFlightDownloadPromise = null;
  shareInfoCache = null;
  shareInfoFetchPromise = null;
  shareInfoFetchIsForced = !1;
  shareInfoCacheGeneration = 0;
  lastPublishedCompanionsSignature = null;
  lastPublishedInviteSourcesSignature = null;
  lastSentAvatarCaptureSignature = null;
  offscreenCaptureStateRevision = 0;
  lastPublishedShareInfoSignature = null;
  initComplete;
  ensureFilesPromise = null;
  companionFolderStore = null;
  companionFolderStoreRoot = null;
  unsubscribeCompanionPrefixWatch = null;
  unsubscribeSharedWithMePrefixWatch = null;
  teamSharedPrefixWatches = new Map();
  companionWatchDebounceTimer = null;
  companionWatchRetryTimer = null;
  companionSkillRefreshTimer = null;
  pendingCompanionSkillRefreshes = new Set();
  sidebarCompanionSelectionVersion = 0;
  sharedWithMeWatchDebounceTimer = null;
  sharedWithMeWatchRetryTimer = null;
  newSharedCompanionsByShareId = new Map();
  incomingSharedCompanionScanPromise = null;
  lastCompletedIncomingSharedCompanionScanAt = null;
  targetedIncomingSharedCompanionMisses = new Map();
  targetedIncomingSharedCompanionHydrations = new Map();
  defaultCompanionLocationPrewarmPromise = null;
  notificationState = null;
  disposed = !1;
  profile;
  get syncedRegistry() {
    if (this.disposed) throw new Error("Companion services are closed");
    if (this.profile)
      return a.syncedFSManagerRegistry.forAccount(this.profile.accountId);
    const e = this.profileId;
    return e
      ? a.syncedFSManagerRegistry.forProfile(e)
      : a.syncedFSManagerRegistry.forAccount(null);
  }
  async dispose() {
    ((this.disposed = !0),
      this.stopDeletedCompanionCleanupRetries?.(),
      this.deletedCompanionCleanup?.stop());
    for (const e of [
      "companions.list",
      "companions.inviteSources",
      "companions.shareInfo",
    ])
      a.ipcStateRegistry.invalidate(
        "ipc:state",
        a.toIPCStateSubscriptionKey(e, this.profileId),
      );
    (this.unsubscribeCompanionPrefixWatch?.(),
      this.unsubscribeAccountCompanions?.(),
      this.unsubscribeSharedWithMePrefixWatch?.());
    for (const { unsubscribe: e } of this.teamSharedPrefixWatches.values()) e();
    this.teamSharedPrefixWatches.clear();
    for (const e of [
      this.companionWatchDebounceTimer,
      this.companionWatchRetryTimer,
      this.companionSkillRefreshTimer,
      this.sharedWithMeWatchDebounceTimer,
      this.sharedWithMeWatchRetryTimer,
      this.accountCompanionRefreshTimer,
    ])
      e && clearTimeout(e);
    (this.removeAllListeners(),
      await Promise.allSettled([
        this.initComplete,
        this.ensureFilesPromise,
        this.defaultCompanionLocationPrewarmPromise,
        this.incomingSharedCompanionScanPromise,
        this.inFlightDownloadPromise,
        this.accountCompanionRefresh,
        ...this.targetedIncomingSharedCompanionHydrations.values(),
      ]));
  }
  get accountId() {
    return this.syncedRegistry.accountId ?? null;
  }
  getProfileDataDb() {
    return this.db;
  }
  async waitForReady() {
    await this.initComplete;
  }
  prewarmDefaultCompanionLocation() {
    return this.isIncognito
      ? Promise.resolve()
      : (this.defaultCompanionLocationPrewarmPromise ||
          (this.defaultCompanionLocationPrewarmPromise =
            this.runDefaultCompanionLocationPrewarm()),
        this.defaultCompanionLocationPrewarmPromise);
  }
  async runDefaultCompanionLocationPrewarm() {
    await this.waitForReady();
    const e = this.getDefaultCompanionForNewChat();
    this.hasCompanion(e.id) && (await this.ensureCompanionLocation(e.id));
  }
  async waitForChatCompanion(e, o = {}) {
    const n = this.normalizeChatCompanionRequest(e),
      t = o.timeoutMs ?? Vo,
      i = o.allowFallback ?? !0,
      r = o.allowDraft ?? !0,
      c = this.resolveRequestedChatCompanion(n, r);
    if (c) return c;
    await this.waitForReady();
    const l = this.resolveRequestedChatCompanion(n, r);
    if (l) return l;
    const h = Date.now() + t;
    for (; Date.now() < h; ) {
      await this.waitForNextCompanionUpdate(h - Date.now());
      const d = this.resolveRequestedChatCompanion(n, r);
      if (d) return d;
    }
    return (
      n &&
        a.logger.warn(
          `[CompanionManager] Companion ${n} did not resolve before chat start`,
          { timeoutMs: t, allowFallback: i, allowDraft: r },
        ),
      i ? this.resolveRequestedChatCompanion(null, r) : null
    );
  }
  normalizeChatCompanionRequest(e) {
    const o = e?.trim();
    return !o || this.transientFallback?.id === o ? null : o;
  }
  resolveRequestedChatCompanion(e, o) {
    const n = e
      ? (this.resolveCompanionByLocation(e) ?? null)
      : (this.currentCompanion ?? this.getFirstCompanion());
    return !o && n?.isDraft ? null : n;
  }
  waitForNextCompanionUpdate(e) {
    return e <= 0
      ? Promise.resolve()
      : new Promise((o) => {
          let n = null;
          const t = () => {
            (n && (clearTimeout(n), (n = null)),
              this.off("companions-updated", t),
              o());
          };
          ((n = setTimeout(t, e)), this.once("companions-updated", t));
        });
  }
  async init() {
    (await this.db.waitForReady(),
      await this.loadCompanions(),
      this.startDeletedCompanionCleanup());
  }
  startDeletedCompanionCleanup() {
    if (this.disposed || this.isIncognito) return;
    const e = () => void this.getDeletedCompanionCleanup().send();
    (a.networkManager.on("online", e),
      (this.stopDeletedCompanionCleanupRetries = () =>
        a.networkManager.off("online", e)),
      e());
  }
  getDeletedCompanionCleanup() {
    return (
      (this.deletedCompanionCleanup ??= new Go({
        profileId: this.profileId,
        load: () => this.db.getDeletedCompanionCleanups(),
        save: (e) => this.db.setDeletedCompanionCleanups(e),
        accountId: () => (this.disposed ? null : this.accountId),
        workspaceIdForProfile: (e) =>
          this.disposed
            ? null
            : (this.syncedRegistry.getWorkspaceIdForProfile(e) ?? null),
        sendStep: (e, o, n) => this.sendCompanionCleanupStep(e, o, n),
      })),
      this.deletedCompanionCleanup
    );
  }
  async setupCompanionFiles() {
    const e = this.profile,
      o = e ? a.getProfileAccountDataPath(e) : void 0;
    if (!o || !e) {
      a.logger.warn(
        "[CompanionManager] Profile path not available — companion files will be created on next load",
      );
      return;
    }
    const n = P.getFilePaths(e.syncedRoot, o),
      t = a.selectedLegacyMemorySystem(
        a.getFeatureFlags(this.accountId).memorySystem,
      );
    t &&
      (await Promise.all(
        Array.from(this.companions.values())
          .filter((i) => !this.companionsBeingRemoved.has(i.id))
          .map((i) =>
            t.bootstrap
              .ensure({ syncRoot: n.synced.root, companionId: i.id })
              .catch((r) =>
                a.logger.warn(
                  `[CompanionManager] memory bootstrap failed for ${i.id}:`,
                  r,
                ),
              ),
          ),
      ));
  }
  getCompanionFolderStore(e) {
    if (this.isIncognito) return null;
    if (e && this.chatCompanions.has(e)) {
      const i = this.getCompanionStorageProfileId(e),
        r = this.syncedRegistry
          .getProfileWorkspaceRoots()
          .find((c) => c.profileId === i);
      return r
        ? new O.CompanionFolderStore(P.getSyncedFilePaths(r.rootDir))
        : null;
    }
    const o = this.profile,
      n =
        this.syncedRegistry.getProfileRootDir(this.profileId) ?? o?.syncedRoot;
    if (!n) return null;
    const t = P.getSyncedFilePaths(n);
    return this.companionFolderStore && this.companionFolderStoreRoot === t.root
      ? this.companionFolderStore
      : ((this.companionFolderStore = new O.CompanionFolderStore(t)),
        (this.companionFolderStoreRoot = t.root),
        this.companionFolderStore);
  }
  getCompanionStorageProfileId(e) {
    const o = this.companionLocations.get(e);
    return o?.kind === "owned"
      ? (o.sourceProfileId ?? this.profileId)
      : this.profileId;
  }
  getCompanionPublicationProfileId(e) {
    const o = this.getCompanionStorageProfileId(e);
    return this.syncedRegistry.get(o)?.workspaceProfileId ?? o;
  }
  async updateCompanionDatabase(e, o) {
    await this.updateProfileDatabase(this.getCompanionStorageProfileId(e), o);
  }
  async updateProfileDatabase(e, o) {
    if (e === this.profileId) {
      await o(
        this.db,
        this.profile ? a.getProfileAccountDataPath(this.profile) : null,
      );
      return;
    }
    const n = this.syncedRegistry;
    if (!n.getProfileWorkspaceRoots().some((h) => h.profileId === e))
      throw new Error("The companion storage is no longer available.");
    const t = this.profileManager?.getProfileDataById(e);
    if (
      !t ||
      (this.accountId && !t.accounts?.linkedAccountIds.includes(this.accountId))
    )
      return;
    const i = a.getProfileAccountDataPath({
        path: ce.getProfilePath(e),
        accounts: t.accounts
          ? { ...t.accounts, selectedAccountId: this.accountId }
          : void 0,
      }),
      r = this.profileManager?.getLoadedProfile(e);
    if (r?.accountId === this.accountId && r.profileDataDb) {
      const h = r.profileDataDb;
      if (
        (await h.waitForReady(),
        this.disposed ||
          this.syncedRegistry !== n ||
          r.accountId !== this.accountId ||
          r.profileDataDb !== h)
      )
        throw new Error("The companion account changed.");
      await o(h, i);
      return;
    }
    const { ProfileDataDatabase: c } = await Promise.resolve()
        .then(() => require("../main-app.js"))
        .then((h) => h.ProfileDataDatabase),
      l = new c(i, !1);
    try {
      if ((await l.waitForReady(), this.disposed || this.syncedRegistry !== n))
        throw new Error("The companion account changed.");
      await o(l, i);
    } finally {
      l.close();
    }
  }
  async saveCompanionToDatabase(e) {
    await this.updateCompanionDatabase(e.id, (o) => {
      if (!this.chatCompanions.has(e.id)) {
        o.upsertCompanion(e);
        return;
      }
      const n = o.getCompanion(e.id);
      o.upsertCompanion({
        ...e,
        databaseId: n?.databaseId,
        latestUsage: n?.latestUsage,
        latestUsageDate: n?.latestUsageDate,
      });
    });
  }
  getManagerForCompanionLocation(e) {
    return e.kind === "owned"
      ? ((e.workspaceId
          ? this.getSyncedManagerByWorkspaceId(e.workspaceId)
          : this.syncedRegistry.get(e.sourceProfileId ?? this.profileId)) ??
          null)
      : (this.getSyncedManagerByWorkspaceId(e.workspaceId) ??
          this.syncedRegistry.getRootManager() ??
          null);
  }
  getSyncedManagerByWorkspaceId(e) {
    const o = this.syncedRegistry.getRootManager();
    if (o?.workspaceId === e) return o;
    for (const n of this.syncedRegistry.getAllManagers().values())
      if (n.workspaceId === e) return n;
    return null;
  }
  getTeamOrganizationIdsByWorkspaceId() {
    const e = new Map();
    for (const [o] of this.syncedRegistry.getOrgPrefixes()) {
      const n = this.syncedRegistry.getOrg(o);
      n && e.set(n.workspaceId, o);
    }
    return e;
  }
  getNotificationStatePath() {
    const e = this.profile;
    return e?.path
      ? f.join(
          a.getProfileAccountDataPath(e),
          "shared-companion-notifications.json",
        )
      : null;
  }
  async loadNotificationState() {
    if (this.notificationState) return this.notificationState;
    const e = this.getNotificationStatePath();
    if (!e)
      return (
        (this.notificationState = { initialized: !1, seenShareIds: [] }),
        this.notificationState
      );
    try {
      const o = await I.readFile(e, "utf-8"),
        n = JSON.parse(o);
      this.notificationState = {
        initialized: n.initialized === !0,
        seenShareIds: Array.isArray(n.seenShareIds) ? n.seenShareIds : [],
      };
    } catch (o) {
      ((o instanceof Error && "code" in o ? o.code : void 0) !== "ENOENT" &&
        a.logger.warn(
          "[CompanionManager] Failed to read shared companion notification state",
          { statePath: e, error: o },
        ),
        (this.notificationState = { initialized: !1, seenShareIds: [] }));
    }
    return this.notificationState;
  }
  async saveNotificationState() {
    const e = this.getNotificationStatePath();
    if (!e || !this.notificationState) return;
    await I.mkdir(f.dirname(e), { recursive: !0 });
    const o = `${e}.${process.pid}.${Date.now()}.tmp`;
    (await I.writeFile(
      o,
      `${JSON.stringify(this.notificationState, null, 2)}
`,
      "utf-8",
    ),
      await I.rename(o, e));
  }
  async ensureCompanionFiles() {
    if (this.ensureFilesPromise) {
      await this.ensureFilesPromise;
      return;
    }
    ((this.ensureFilesPromise = this.setupCompanionFiles().finally(() => {
      this.ensureFilesPromise = null;
    })),
      await this.ensureFilesPromise);
  }
  async fetchSharedCompanions() {}
  async uploadSharedCompanion(e, o, n) {
    return this.sharedCompanionsService.uploadSharedCompanion(e, o, n);
  }
  ownedPersistentCompanion(e) {
    const o = this.getOwnedCompanionById(e);
    if (!o || o.isTemporary)
      throw new Error("Only persistent companions can have a public profile.");
    return o;
  }
  portableRuntime(e) {
    return {
      name: e.name,
      visualsSeed: e.visualsSeed,
      description: e.description,
      appearance: a.resolveCompanionAppearance(
        e.appearance,
        e.visualsSeed,
        e.id,
      ),
      temperature: e.temperature,
      maxOutputTokens: e.maxOutputTokens,
      isChartsEnabled: e.isChartsEnabled,
      defaultChatMode: e.defaultChatMode,
    };
  }
  async publicProfileAvatarDataUrl(e, o) {
    let n = e.companionImage?.trim();
    if (!n && o) {
      this.sendOffscreenCompanionCaptureState();
      for (let l = 0; l < 20 && !n; l += 1)
        (await new Promise((h) => setTimeout(h, 500)),
          (n = this.getOwnedCompanionById(e.id)?.companionImage?.trim()));
    }
    if (!n) {
      if (o)
        throw new Error(
          "The companion avatar is still rendering. Try publishing again shortly.",
        );
      return;
    }
    if (n.startsWith("data:image/")) {
      const l = /^data:image\/(?:jpeg|png|webp);base64,/.test(n);
      if (l && n.length <= a.COMPANION_PROFILE_MAX_AVATAR_DATA_URL_LENGTH)
        return n;
      if (o)
        throw new Error(
          l
            ? "The companion avatar is too large to publish."
            : "The companion avatar uses an unsupported image format.",
        );
      return;
    }
    const t = f.extname(new URL(n, "file://").pathname).toLowerCase();
    let i;
    t === ".webp"
      ? (i = "image/webp")
      : t === ".jpg" || t === ".jpeg"
        ? (i = "image/jpeg")
        : (i = "image/png");
    let r;
    try {
      if (n.startsWith("http://") || n.startsWith("https://")) {
        const l = new URL(n);
        if (
          l.protocol !== "http:" ||
          (l.hostname !== "localhost" && l.hostname !== "127.0.0.1")
        )
          throw new Error("Unsupported companion avatar URL");
        const h = await fetch(l);
        if (!h.ok) throw new Error(`Companion avatar returned ${h.status}`);
        r = Buffer.from(await h.arrayBuffer());
      } else r = await I.readFile(n.startsWith("file://") ? new URL(n) : n);
    } catch (l) {
      if (o)
        throw new Error(
          "The companion avatar could not be prepared for publishing.",
          { cause: l },
        );
      return;
    }
    const c = `data:${i};base64,${r.toString("base64")}`;
    if (c.length <= a.COMPANION_PROFILE_MAX_AVATAR_DATA_URL_LENGTH) return c;
    if (o) throw new Error("The companion avatar is too large to publish.");
  }
  async buildProfilePublication(e, o, n = !1) {
    const t = this.ownedPersistentCompanion(e),
      i = this.getCompanionFolderStore(e);
    if (!i) throw new Error("Public profiles are unavailable in this profile.");
    const r = await i.readPublicProfile(e);
    if (r.status !== "valid")
      throw new Error("Fix the local profile before publishing.");
    const c = a.parsePublicCompanionProfile(r.profile),
      l = c ? a.publicProfileSnapshot(c) : null;
    if (!l) throw new Error("Complete the profile before publishing.");
    if (t.purpose === "invite-source") {
      const g = a.parseFriendPublicCompanionProfile(r.profile);
      if (!g)
        throw new Error(
          "Finish the friend profile research before publishing.",
        );
      const S = await i.readProfileBuilderContext(e);
      if (!S)
        throw new Error("The private research context is missing or invalid.");
      const w = S.recipient.fullName.trim().replace(/\s+/g, " ");
      if (
        w.includes(" ") &&
        [
          g.madeFor?.firstName,
          g.about,
          g.summary,
          ...(g.templateSkills ?? []).flatMap((m) =>
            m.kind === "custom"
              ? [m.id, m.name, m.description, m.instructions]
              : [],
          ),
          g.templateInstructions,
          ...g.posts.map((m) => m.text),
          ...g.featuredSkills.flatMap((m) =>
            m.kind === "custom" ? [m.name, m.description] : [],
          ),
        ]
          .join(
            `
`,
          )
          .replace(/\s+/g, " ")
          .toLocaleLowerCase()
          .includes(w.toLocaleLowerCase())
      )
        throw new Error(
          "The public profile includes the recipient's full name. Keep their first name only.",
        );
    }
    const h = a.publicProfileRuntime(this.portableRuntime(t), l),
      d = await this.publicProfileAvatarDataUrl(t, n),
      u = await a.computeCompanionProfileContentHash({
        creatorCredit: o,
        avatarDataUrl: d,
        profile: l,
        runtime: h,
        files: [],
      });
    return {
      companion: t,
      profile: l,
      runtime: h,
      avatarDataUrl: d,
      contentHash: u,
      warnings: a.publicProfileWarnings(l),
    };
  }
  async getProfileManageState(e) {
    try {
      const o = await this.authFetch(
        `${a.config.app.apiUrl}/api/companion-profiles/${e}/manage?profileId=${encodeURIComponent(this.getCompanionPublicationProfileId(e))}`,
      );
      if (!o.ok) throw new Error("Profile publication status is unavailable");
      return { available: !0, ...(await o.json()) };
    } catch {
      return {
        available: !1,
        published: !1,
        activeContentHash: null,
        generation: 0,
        publishedAt: null,
        creatorCredit: !0,
      };
    }
  }
  async getCompanionProfileState(e) {
    const o = this.ownedPersistentCompanion(e),
      n = this.getCompanionFolderStore(e);
    if (!n) throw new Error("Public profiles are unavailable in this profile.");
    const [t, i, r, c] = await Promise.all([
      n.readPublicProfile(e),
      this.getProfileManageState(e),
      this.getCompanionLocalSkills(e),
      o.purpose === "invite-source"
        ? n.readProfileBuilderContext(e)
        : Promise.resolve(null),
    ]);
    let l = null,
      h = [];
    if (t.status === "valid" && a.parsePublicCompanionProfile(t.profile))
      try {
        const u = await this.buildProfilePublication(e, i.creatorCredit);
        ((l = u.contentHash), (h = u.warnings));
      } catch (u) {
        h = [
          u instanceof Error
            ? u.message
            : "Selected content cannot be published.",
        ];
      }
    return {
      companion: o,
      friendRecipientFullName: c?.recipient.fullName ?? null,
      availableSkills: r
        .filter(
          (d) => o.skillIds?.has(d.id) === !0 && !a.isOfficialSkillId(d.id),
        )
        .map((d) => ({
          id: d.id,
          name: d.name,
          ...(d.description ? { description: d.description } : {}),
        })),
      config: t,
      publication: {
        ...i,
        localContentHash: l,
        outOfSync: !!(i.published && i.activeContentHash !== l),
      },
      warnings: h,
    };
  }
  async listCompanionProfileFiles(e, o) {
    this.ownedPersistentCompanion(e);
    const n = this.getCompanionFolderStore(e);
    if (!n) throw new Error("Public profiles are unavailable in this profile.");
    return n.listPublicProfileEntries(e, o);
  }
  async saveCompanionProfile(e, o) {
    this.ownedPersistentCompanion(e);
    const n = this.getCompanionFolderStore(e);
    if (!n) throw new Error("Public profiles are unavailable in this profile.");
    return (await n.writePublicProfile(e, o), this.getCompanionProfileState(e));
  }
  async publishCompanionProfile(e, o) {
    let n = "sync";
    try {
      const t = await this.resolveProfileManagerForShare(e);
      if (!t)
        throw new Error("File sync is still starting. Try again in a moment.");
      (await this.saveCompanions(),
        await this.flushCompanionBeforeShare(e, t),
        (n = "prepare"));
      const i = await this.buildProfilePublication(e, o, !0);
      if (!a.isPublicProfileComplete(i.profile))
        throw new Error(
          "Finish the introduction, posts, skills, and template instructions before publishing.",
        );
      if (i.warnings.length > 0) throw new Error(i.warnings.join(" "));
      n = "start";
      const r = await this.authFetch(
        `${a.config.app.apiUrl}/api/companion-profiles/${e}/publish/start`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            profileId: this.getCompanionPublicationProfileId(e),
            workspaceId: t.workspaceId,
            profile: i.profile,
            runtime: i.runtime,
            creatorCredit: o,
            avatarDataUrl: i.avatarDataUrl,
            files: [],
          }),
        },
      );
      if (!r.ok) throw new Error(await U(r, "Could not start publishing."));
      const c = p.safeParse(
        a.companionProfilePublishStartResponseSchema,
        await r.json(),
      );
      if (!c.success || c.output.contentHash !== i.contentHash)
        throw new Error("The publication service returned an invalid upload.");
      n = "commit";
      const l = await this.authFetch(
        `${a.config.app.apiUrl}/api/companion-profiles/${e}/publish/commit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            profileId: this.getCompanionPublicationProfileId(e),
            uploadId: c.output.uploadId,
            contentHash: c.output.contentHash,
          }),
        },
      );
      if (!l.ok) throw new Error(await U(l, "Could not finish publishing."));
      n = "verify";
      const h = await this.authFetch(
          `${a.config.app.apiUrl}/api/companion-profiles/${e}`,
        ),
        d = a.parsePublicCompanionProfileResponse(
          await h.json().catch(() => null),
        );
      if (!h.ok || !d)
        throw new Error(
          "The profile was published, but its public page is not ready yet.",
        );
      return d;
    } catch (t) {
      throw (
        a.logger.error("[CompanionManager] Profile publication failed", {
          companionId: e,
          stage: n,
          error: a.sanitizeErrorMessage(a.getErrorMessage(t)),
        }),
        t
      );
    }
  }
  async removePublishedCompanionProfile(e) {
    this.ownedPersistentCompanion(e);
    const o = await this.deletePublishedProfile(
      e,
      this.getCompanionPublicationProfileId(e),
    );
    if (!o.ok)
      throw new Error(await U(o, "Could not remove the published profile."));
  }
  deletePublishedProfile(e, o) {
    return this.authFetch(
      `${a.config.app.apiUrl}/api/companion-profiles/${e}?profileId=${encodeURIComponent(o)}`,
      { method: "DELETE" },
    );
  }
  async createFriendCompanionRecipientLink(e) {
    if (this.ownedPersistentCompanion(e).purpose !== "invite-source")
      throw new Error(
        "Recipient links are only available for friend profiles.",
      );
    const n = await this.authFetch(
        `${a.config.app.apiUrl}/api/companion-profiles/${e}/friend-link?profileId=${encodeURIComponent(this.getCompanionPublicationProfileId(e))}`,
        { method: "POST" },
      ),
      t = await n.json().catch(() => null);
    if (!n.ok || !t?.url)
      throw new Error(t?.error ?? "Could not create the recipient link.");
    return t.url;
  }
  async getPublishedCompanionProfile(e) {
    const o = await this.authFetch(
        `${a.config.app.apiUrl}/api/companion-profiles/${encodeURIComponent(e)}`,
        { signal: AbortSignal.timeout(15e3) },
      ),
      n = a.parsePublicCompanionProfileResponse(
        await o.json().catch(() => null),
      );
    if (!o.ok || !n)
      throw new Error("This companion profile is no longer available.");
    return {
      ...n,
      profile: a.publicProfileSnapshot(n.profile),
      runtime: a.publicProfileRuntime(n.runtime, n.profile),
      files: [],
    };
  }
  async getCompanionHireReview(e, o) {
    if ((await this.waitForReady(), o === "shared-live")) {
      const i = await this.authFetch(
          `${a.config.app.apiUrl}/api/companion-profiles/${encodeURIComponent(e)}/private-view`,
          { method: "POST", signal: AbortSignal.timeout(15e3) },
        ),
        r = a.parseCompanionProfilePageResponse(
          await i.json().catch(() => null),
        );
      if (!i.ok || r?.mode !== "private-full")
        throw new Error("This companion is not available to this account.");
      const c = await a.computeCompanionProfileContentHash({
          ...r,
          creatorCredit: !1,
          files: [],
        }),
        l = await this.resolveCompanionHire(e, c, {
          expectedMode: o,
          accept: !1,
        });
      return {
        profile: {
          companionId: e,
          contentHash: c,
          profile: r.profile,
          runtime: r.runtime,
          ...(r.recipientIntro
            ? { creator: { name: r.recipientIntro.creatorName } }
            : {}),
        },
        mode: l.mode,
      };
    }
    const n = await this.getPublishedCompanionProfile(e),
      t = await this.resolveCompanionHire(e, n.contentHash, {
        expectedMode: o,
        accept: !1,
      });
    return { profile: n, mode: t.mode };
  }
  async resolveCompanionHire(e, o, { expectedMode: n, accept: t }) {
    const i = await this.authFetch(
      `${a.config.app.apiUrl}/api/companion-profiles/${encodeURIComponent(e)}/hire`,
      {
        method: "POST",
        signal: AbortSignal.timeout(15e3),
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentHash: o,
          ...(n ? { expectedMode: n } : {}),
          ...(t ? { accept: !0 } : {}),
        }),
      },
    );
    if (i.status === 409)
      throw new Error(
        "This profile changed. Refresh and review it again before hiring.",
      );
    const r = p.safeParse(
      a.companionProfileHireResponseSchema,
      await i.json().catch(() => null),
    );
    if (!i.ok || !r.success)
      throw new Error(await U(i, "This companion could not be hired."));
    const c = r.output;
    if (c.mode === "snapshot")
      return {
        ...c,
        profile: a.publicProfileSnapshot(c.profile),
        runtime: a.publicProfileRuntime(c.runtime, c.profile),
        files: [],
      };
    if (c.mode !== "owned-live") return c;
    (await this.refreshSharedCompanionSourcesNow(),
      await this.ensureCompanionLocation(c.companionId));
    const l = this.getOwnedCompanionById(c.companionId);
    if (!l)
      throw new Error(
        "The owned companion is not available on this device yet.",
      );
    if (a.isDiscoverableCompanion(l)) return c;
    const h = await this.getPublishedCompanionProfile(e);
    if (h.contentHash !== o)
      throw new Error(
        "This profile changed. Refresh and review it again before hiring.",
      );
    return {
      mode: "snapshot",
      companionId: h.companionId,
      contentHash: h.contentHash,
      profile: h.profile,
      runtime: h.runtime,
      files: h.files,
    };
  }
  async prepareSharedOnboardingCompanion(e) {
    (await this.waitForReady(),
      await this.refreshSharedCompanionSourcesNow(),
      await this.ensureCompanionLocation(e));
    const o = this.sharedCompanions.get(e);
    if (!o || this.getOwnedCompanionById(e))
      throw new Error(
        "The shared companion is no longer available to this account.",
      );
    return o;
  }
  async hirePublishedCompanion(e, o, n = {}) {
    if ((await this.waitForReady(), n.acquisitionId)) {
      const i = a.getPendingAcquisition(this.accountId);
      if (
        i?.id !== n.acquisitionId ||
        !("companionId" in i) ||
        i.companionId !== e
      )
        throw new Error(
          "A newer companion was downloaded. Review it before continuing.",
        );
    }
    const t = await this.resolveCompanionHire(e, o, {
      expectedMode: n.expectedMode,
      accept: !0,
    });
    if (n.expectedMode && t.mode !== n.expectedMode)
      throw new Error(
        "Your access to this companion changed. Review it again before continuing.",
      );
    if (t.mode === "owned-live")
      return (
        n.forOnboarding &&
          (a.globalSettings.set("onboardingCompanionSelection", {
            accountId: this.accountId ?? void 0,
            acquisitionId: n.acquisitionId,
            kind: "claimed-owned",
            companionId: t.companionId,
          }),
          a.globalSettings.set("onboardingCompanionId", t.companionId)),
        { mode: "owned-live", installedCompanionId: t.companionId }
      );
    if (t.mode === "shared-live") {
      if (this.getOwnedCompanionById(t.companionId))
        throw new Error(
          "The shared companion conflicts with an existing owned companion.",
        );
      if (
        (await this.refreshSharedCompanionSourcesNow(),
        await this.ensureCompanionLocation(t.companionId),
        !this.sharedCompanions.has(t.companionId))
      )
        throw new Error(
          "The shared companion is not available in this profile yet.",
        );
      return (
        n.forOnboarding &&
          (a.globalSettings.set("onboardingCompanionSelection", {
            accountId: this.accountId ?? void 0,
            acquisitionId: n.acquisitionId,
            kind: "claimed-shared",
            companionId: t.companionId,
          }),
          a.globalSettings.set("onboardingCompanionId", t.companionId)),
        { mode: "shared-live", installedCompanionId: t.companionId }
      );
    }
    return {
      mode: "snapshot",
      installedCompanionId: await this.installPublishedCompanionSnapshot(t, n),
    };
  }
  async listOfficialCompanions() {
    return (await De()).map((e) => ({
      id: e.id,
      name: e.runtime.name,
      summary: e.profile.summary ?? e.runtime.description ?? "",
      appearance: e.runtime.appearance,
      visualsSeed: e.runtime.visualsSeed ?? e.id,
    }));
  }
  async getOfficialCompanionHireReview(e) {
    const o = await Se(e);
    return {
      profile: {
        companionId: o.id,
        contentHash: o.contentHash,
        profile: o.profile,
        runtime: o.runtime,
        creator: { name: "Orbitra" },
        officialFiles: o.files,
      },
      mode: "snapshot",
    };
  }
  async hireOfficialCompanion(e, o = {}) {
    const n = Date.now();
    await this.waitForReady();
    const t = await Se(e);
    if (o.acquisitionId) {
      const r = a.getPendingAcquisition(this.accountId);
      if (
        r?.id !== o.acquisitionId ||
        !("officialCompanionId" in r) ||
        r.officialCompanionId !== t.id
      )
        throw new Error(
          "A newer companion was downloaded. Review it before continuing.",
        );
    }
    const i = await this.installPublishedCompanionSnapshot(
      {
        mode: "snapshot",
        companionId: t.id,
        contentHash: t.contentHash,
        profile: t.profile,
        runtime: t.runtime,
        files: [],
      },
      o,
      t.files,
    );
    return (
      a.logger.info("[companion-hire] Installed an official companion", {
        officialCompanionId: t.id,
        forOnboarding: o.forOnboarding === !0,
        durationMs: Date.now() - n,
      }),
      { mode: "snapshot", installedCompanionId: i }
    );
  }
  async installPublishedCompanionSnapshot(e, o, n = []) {
    const t = this.getCompanionFolderStore();
    if (!t) throw new Error("Companion storage is unavailable.");
    const i = o.forOnboarding ? a.getOnboardingSelection(this.accountId) : null,
      r = i?.acquisitionId && i.acquisitionId !== o.acquisitionId ? null : i;
    if (r?.kind === "claimed-copy") {
      if (
        r.sourceCompanionId !== e.companionId ||
        r.contentHash !== e.contentHash
      )
        throw new Error(
          "The unfinished companion install does not match the reviewed profile.",
        );
      const d = this.companions.get(r.companionId);
      if (d && (await t.verifyCompanionDirectory(d.id))) {
        if (!this.db.getCompanion(d.id) && !this.db.insertCompanionIfAbsent(d))
          throw new Error(
            "The recovered companion could not be attached to local storage.",
          );
        return (
          await this.ensureMemoryFileForCompanion(d.id),
          await this.setCurrentSidebarCompanion(d.id),
          d.id
        );
      }
    }
    let c = r?.kind === "claimed-copy" ? r.companionId : a.v4();
    for (; this.db.getCompanion(c) || (await t.companionRootExists(c)); )
      c = a.v4();
    o.forOnboarding &&
      (a.globalSettings.set("onboardingCompanionSelection", {
        accountId: this.accountId ?? void 0,
        acquisitionId: o.acquisitionId,
        kind: "claimed-copy",
        companionId: c,
        sourceCompanionId: e.companionId,
        contentHash: e.contentHash,
      }),
      a.globalSettings.set("onboardingCompanionId", c));
    const l = await I.mkdtemp(f.join(Ee.tmpdir(), "orbitra-hire-"));
    let h = !1;
    try {
      const d = a.publicTemplateInstallPlan(e.profile);
      d.files.push(...n, {
        path: a.RECEIVED_COMPANION_PROFILE_FILE,
        content: JSON.stringify(
          {
            sourceCompanionId: e.companionId,
            contentHash: e.contentHash,
            profile: a.publicProfileSnapshot(e.profile),
          },
          null,
          2,
        ),
      });
      for (const g of d.files) {
        const S = f.join(l, g.path);
        (await I.mkdir(f.dirname(S), { recursive: !0 }),
          await I.writeFile(S, g.content, "utf-8"));
      }
      const u = {
        id: c,
        name: a.normalizeCompanionName(e.runtime.name),
        description: e.profile.summary ?? e.profile.about,
        systemPrompt: e.profile.templateInstructions ?? "",
        provider: a.DEFAULT_MODEL_ID,
        memories: "",
        appearance: e.runtime.appearance,
        visualsSeed: e.runtime.visualsSeed ?? e.companionId,
        ...(e.runtime.defaultChatMode
          ? { defaultChatMode: e.runtime.defaultChatMode }
          : {}),
        skillIds: new Set(d.skillIds),
        purpose: "standard",
        isDraft: o.forOnboarding === !0,
        latestUsageDate: Date.now(),
        effort: "high",
      };
      if (
        (await t.publishNewCompanion({
          companion: u,
          publicProfile: a.createEmptyPublicCompanionProfile(),
          filesRoot: l,
          filePaths: d.files.map((g) => g.path),
        }),
        (h = !0),
        this.companions.set(c, u),
        this.refreshOwnedCompanionLocations(),
        !this.db.insertCompanionIfAbsent(u))
      )
        throw new Error(
          "The companion destination became unavailable during installation.",
        );
      return (
        await this.ensureMemoryFileForCompanion(c),
        await this.setCurrentSidebarCompanion(c),
        this.notifyCompanionsChanged(),
        c
      );
    } catch (d) {
      if (o.forOnboarding && !h) {
        const u = a.getOnboardingSelection(this.accountId);
        u?.kind === "claimed-copy" &&
          u.companionId === c &&
          (a.globalSettings.set("onboardingCompanionSelection", null),
          a.globalSettings.set("onboardingCompanionId", null));
      }
      throw d;
    } finally {
      await I.rm(l, { recursive: !0, force: !0 });
    }
  }
  async createCompanionForFriend(e) {
    const o = e.fullName.trim(),
      n = e.company?.trim();
    if (!o || o.length > 160) throw new Error("Enter your friend's full name.");
    if (n && n.length > 160) throw new Error("Enter a shorter company name.");
    const t = e.description?.trim();
    if (t && t.length > 4e3)
      throw new Error("Enter a shorter description of the help they want.");
    const i = a.v4(),
      r = a.normalizeCompanionName(fo(i));
    await this.addCompanion({
      id: i,
      name: r,
      description: "A companion made for a friend or colleague.",
      prompt:
        "You are a companion being customized for a friend or colleague. Your private profile-builder.json identifies the recipient and contains the builder's starting context. Start by reading the brief and the context already provided in this conversation. Ask one or two focused questions only if important context is missing. When the brief is sufficient, research and write your public profile without repeating questions already answered. Set madeFor.firstName in public-profile.json to the recipient's first name. Keep your identity distinct from theirs and keep private research details out of public-profile.json.",
      skills: [],
      purpose: "invite-source",
    });
    const c = this.getCompanionFolderStore();
    if (!c) throw new Error("Could not create the companion profile.");
    return (
      await c.writeProfileBuilderContext(i, {
        schemaVersion: 1,
        recipient: { fullName: o, ...(n ? { company: n } : {}) },
        roles: [],
        ...(t ? { brief: t } : {}),
      }),
      await c.writePublicProfile(i, a.createEmptyPublicCompanionProfile()),
      i
    );
  }
  async shareCompanionFolder(e, o, n = "readwrite") {
    if (!this.getOwnedCompanionById(e))
      return {
        success: !1,
        shareIds: [],
        failedEmails: o,
        error: "Companion not found",
      };
    const i = await this.resolveProfileManagerForShare(e);
    if (!i)
      return {
        success: !1,
        shareIds: [],
        failedEmails: o,
        error: "File sync is still starting. Try again in a moment.",
      };
    const r = Array.from(new Set(o.map((d) => d.trim()).filter(Boolean)));
    if (r.length === 0)
      return {
        success: !1,
        shareIds: [],
        failedEmails: [],
        error: "No recipients selected",
      };
    try {
      (await this.saveCompanions(), await this.flushCompanionBeforeShare(e, i));
    } catch (d) {
      return (
        a.logger.warn(
          "[CompanionManager] Failed to sync latest companion files before sharing",
          { companionId: e, error: d },
        ),
        {
          success: !1,
          shareIds: [],
          failedEmails: r,
          error:
            "Could not sync the latest companion changes before sharing. Try again in a moment.",
        }
      );
    }
    const c = [],
      l = [],
      h = [];
    for (const d of r)
      try {
        const u = await i.getControlPlane().sharePath(`companions/${e}`, d, n),
          g = u.share?.id ?? u.invitation?.id;
        u.ok && g
          ? (c.push(g),
            u.invitation?.landingUrl &&
              h.push({ email: d, url: u.invitation.landingUrl }))
          : l.push(d);
      } catch (u) {
        (a.logger.warn(
          "[CompanionManager] Failed to share companion with recipient",
          { companionId: e, error: u },
        ),
          l.push(d));
      }
    return c.length === 0
      ? {
          success: !1,
          shareIds: c,
          failedEmails: l,
          error:
            l.length === 1
              ? "Could not share with that recipient"
              : "Could not share with any recipients",
        }
      : (this.invalidateShareInfoCache(),
        this.notifyCompanionsChanged(),
        {
          success: !0,
          shareIds: c,
          failedEmails: l,
          ...(h.length > 0 ? { recipientLinks: h } : {}),
        });
  }
  async shareCompanionFolderWithTeam(e, o) {
    if (!this.getOwnedCompanionById(e))
      return { success: !1, error: "Companion not found" };
    const t = await this.resolveProfileManagerForShare(e);
    if (!t)
      return {
        success: !1,
        error: "File sync is still starting. Try again in a moment.",
      };
    const i = await a.accountManager.forAccount(this.accountId).getAccount(),
      r =
        i?.teams?.find((c) => c.id === o) ??
        (i?.team?.info?.id === o ? i.team.info : null);
    if (!r) return { success: !1, error: "Could not resolve your team." };
    try {
      (await this.syncedRegistry.getOrCreateOrg(r.id, r.name),
        await this.saveCompanions(),
        await this.flushCompanionBeforeShare(e, t));
    } catch (c) {
      return (
        a.logger.warn(
          "[CompanionManager] Failed to sync latest companion files before team share",
          { companionId: e, targetOrganizationId: o, error: c },
        ),
        {
          success: !1,
          error:
            "Could not sync the latest companion changes before sharing. Try again in a moment.",
        }
      );
    }
    try {
      const c = await t
        .getControlPlane()
        .sharePathWithOrganization(`companions/${e}`, o, "readwrite");
      return !c.ok || !c.share
        ? { success: !1, error: c.error ?? "Could not share with the team" }
        : (this.invalidateShareInfoCache(),
          this.refreshSharedCompanionSources(),
          this.notifyCompanionsChanged(),
          { success: !0, shareId: c.share.id });
    } catch (c) {
      return (
        a.logger.warn(
          "[CompanionManager] Failed to share companion with team",
          { companionId: e, targetOrganizationId: o, error: c },
        ),
        { success: !1, error: "Could not share with the team" }
      );
    }
  }
  async resolveProfileManagerForShare(e) {
    const o = this.getCompanionStorageProfileId(e),
      n = this.syncedRegistry.get(o);
    if (n) return n;
    if (o !== this.profileId) {
      const i = this.syncedRegistry
        .getProfileWorkspaceRoots()
        .find((r) => r.profileId === o);
      if (!i) return null;
      try {
        return await this.syncedRegistry.getOrCreate(
          o,
          f.basename(i.rootDir),
          this.profileManager?.getProfileDataById(o)?.name,
        );
      } catch (r) {
        return (
          a.logger.warn(
            "[CompanionManager] Failed to start companion storage sync",
            { error: r },
          ),
          null
        );
      }
    }
    const t = this.profile;
    if (!t)
      return (
        a.logger.warn(
          "[CompanionManager] Cannot self-heal profile sync manager for share: profile missing",
        ),
        null
      );
    try {
      a.logger.info(
        "[CompanionManager] Profile sync manager missing during share — recreating",
      );
      const i = await this.syncedRegistry.getOrCreate(
        this.profileId,
        t.syncedDirName,
        t.name,
      );
      return (
        this.refreshOwnedCompanionLocations(),
        a.logger.info(
          "[CompanionManager] Profile sync manager recreated for share",
        ),
        i
      );
    } catch (i) {
      return (
        a.logger.warn(
          "[CompanionManager] Failed to recreate profile sync manager for share",
          { error: i },
        ),
        null
      );
    }
  }
  async flushCompanionBeforeShare(e, o) {
    const n = `companions/${e}/companion.json`,
      t = await o.getLocalAdapter().readFile(n);
    if (!t) throw new Error(`Companion manifest is missing for ${e}`);
    if (!(await this.serverHasCompanionManifest(n, t, o))) {
      try {
        await o.syncEngine.flushLocalPathForPublish(n, {
          expectedContentHash: Z.sha256(t),
        });
      } catch (i) {
        a.logger.warn("[CompanionManager] Pre-share flush did not complete", {
          companionId: e,
          error: i,
        });
      }
      if (!(await this.serverHasCompanionManifest(n, t, o)))
        throw new Error(`Could not upload latest companion manifest for ${e}`);
    }
  }
  async serverHasCompanionManifest(e, o, n) {
    const t = Z.sha256(o);
    try {
      return (
        (await n.getControlPlane().listFiles(e)).find((c) => c.path === e)
          ?.contentHash === t
      );
    } catch (i) {
      return (
        a.logger.warn(
          "[CompanionManager] Could not check the companion manifest on the server",
          { manifestPath: e, error: i },
        ),
        !1
      );
    }
  }
  previewSharedCompanion(e) {
    return this.sharedCompanionsService.previewSharedCompanion(e);
  }
  async downloadSharedCompanion(e) {
    return this.inFlightDownloadPromise
      ? this.inFlightDownloadPromise
      : ((this.inFlightDownloadPromise = this.sharedCompanionsService
          .downloadSharedCompanion(e)
          .finally(() => {
            this.inFlightDownloadPromise = null;
          })),
        this.inFlightDownloadPromise);
  }
  findCompanionIdByDatabaseId(e) {
    for (const [o, n] of this.companions)
      if (n.databaseId && n.databaseId.toString() === e) return o;
    return null;
  }
  convertCompanionToStored(e) {
    return { ...e, skillIds: Array.from(e.skillIds || []) };
  }
  async loadCompanions() {
    try {
      console.log("[CompanionManager] Loading companions");
      const e = this.removedCompanionIds.length,
        o = this.accountId,
        n = this.getCompanionFolderStore(),
        t = n ? await n.scanCompanions() : [],
        i = this.db.getCompanions(),
        r = new Map(i.map((C) => [C.id, C])),
        c = n ? await this.mergeCompanionFoldersWithSqlite(n, t, r) : i,
        l = this.db.getCurrentCompanionId();
      if (
        (this.startWatchingAccountCompanions(),
        await this.refreshAccountCompanions(),
        o !== this.accountId)
      )
        return;
      const h = await this.checkCreateFirstCompanion([
        ...c,
        ...this.chatCompanions.values(),
      ]);
      h && c.push(h);
      const d = new Map();
      let u = !1,
        g = 0;
      for (const C of c)
        try {
          if (C.companionImage && typeof C.companionImage == "string")
            try {
              await I.access(C.companionImage);
            } catch (m) {
              (a.logger.log(
                `[CompanionManager] Image file does not exist, clearing: ${C.companionImage}`,
                m,
              ),
                (C.companionImage = void 0),
                (u = !0));
            }
          if (!C.companionImage) {
            const m = await this.findCapturedCompanionImage(C);
            m && ((C.companionImage = m), (u = !0), g++);
          }
          d.set(C.id, C);
        } catch (m) {
          console.error(
            `[CompanionManager] Failed to load companion ${C.id}:`,
            m,
          );
        }
      g > 0 &&
        a.logger.info(
          `[CompanionManager] Restored ${g} companion image(s) from disk`,
        );
      for (const C of this.removedCompanionIds.slice(e)) d.delete(C);
      this.companions = d;
      for (const C of d.keys())
        (this.chatCompanions.delete(C), this.changedChatCompanions.delete(C));
      (this.refreshOwnedCompanionLocations(),
        await this.migrateCompanionsToDefaultModels());
      const S = this.getFirstCompanion(),
        w = l ? this.resolveCompanionById(l) : null;
      if (
        (w && a.isDiscoverableCompanion(w)
          ? (this.currentCompanion = w)
          : (l
              ? console.warn(
                  `[CompanionManager] Current companion ID ${l} is not available for global selection, falling back to first companion`,
                )
              : S &&
                console.log(
                  `[CompanionManager] No current companion ID set, using first companion: ${S.name} (${S.id})`,
                ),
            (this.currentCompanion = S)),
        u)
      )
        for (const C of this.companions.values()) this.db.upsertCompanion(C);
      (this.disposed || R(this.profileId, this.getCurrentSidebarCompanion()),
        this.notifyCompanionsChanged(),
        await this.ensureCompanionFiles(),
        this.startWatchingCompanionDir(),
        this.fetchSharedCompanions(),
        this.refreshSharedCompanionSources());
    } catch (e) {
      console.error("[CompanionManager] Error loading companions:", e);
    }
  }
  async migrateCompanionsToDefaultModels() {
    if (this.isIncognito || this.db.getMigrationFlag(me)) return;
    const e = [];
    for (const [o, n] of this.companions) {
      const t = Do(n);
      t !== n && (this.companions.set(o, t), e.push(t));
    }
    try {
      const o = Array.from(this.companions.values()).filter(
          (t) => !t.isTemporary,
        ),
        n = this.getCompanionFolderStore();
      if (o.length > 0 && !n)
        throw new Error("Companion folder store is unavailable");
      if (n) for (const t of o) await n.writeCompanion(t);
      for (const t of this.companions.values()) this.db.upsertCompanion(t);
      (this.db.setMigrationFlag(me, !0),
        a.logger.info(
          "[CompanionManager] Applied companion model defaults migration",
          {
            companionCount: this.companions.size,
            migratedCompanionCount: e.length,
          },
        ));
    } catch (o) {
      a.logger.warn(
        "[CompanionManager] Companion model defaults migration will retry",
        { errorType: o instanceof Error ? o.name : "unknown_error" },
      );
    }
  }
  findCapturedCompanionImage(e) {
    const o = a.resolveCompanionAppearance(e.appearance, e.visualsSeed, e.id);
    return this.findLatestCompanionImageForKey(
      a.companionScreenshotCacheKey(o, "modular"),
    );
  }
  async findLatestCompanionImageForKey(e) {
    const o = f.resolve(
        ce.getAppDataPath(),
        "images",
        "uni-agent",
        "companions",
      ),
      n = f.resolve(o, e),
      t = f.relative(o, n);
    if (!t || t.startsWith("..") || f.isAbsolute(t)) {
      a.logger.warn(
        "[CompanionManager] Refusing companion image restore outside image directory",
        { cacheKey: e },
      );
      return;
    }
    let i;
    try {
      const c = await I.readdir(n, { withFileTypes: !0 });
      i = await Promise.all(
        c
          .filter((l) =>
            !l.isFile() || !l.name.startsWith("screenshot-")
              ? !1
              : on.has(f.extname(l.name).toLowerCase()),
          )
          .map(async (l) => {
            const h = f.join(n, l.name),
              d = await I.stat(h);
            return { name: l.name, mtimeMs: d.mtimeMs };
          }),
      );
    } catch (c) {
      (c instanceof Error && "code" in c ? c.code : void 0) !== "ENOENT" &&
        a.logger.warn(
          "[CompanionManager] Failed to inspect companion image directory",
          { cacheKey: e, error: c },
        );
      return;
    }
    const r = i.sort((c, l) => l.mtimeMs - c.mtimeMs)[0];
    return r ? f.join(n, r.name) : void 0;
  }
  refreshOwnedCompanionLocations() {
    const e = this.profile,
      o =
        this.syncedRegistry.getProfileRootDir(this.profileId) ?? e?.syncedRoot;
    if (!o) return;
    const n = this.syncedRegistry.getWorkspaceIdForProfile(this.profileId);
    if (!n && this.isIncognito) return;
    for (const [i, r] of this.companionLocations)
      r.kind === "owned" &&
        !this.companions.has(i) &&
        !this.chatCompanions.has(i) &&
        this.companionLocations.delete(i);
    const t = P.getSyncedFilePaths(o);
    for (const i of this.companions.values()) {
      const r = this.companionLocations.get(i.id);
      if (r?.kind === "shared") continue;
      let c = n;
      !c && r?.kind === "owned" && (c = r.workspaceId);
      const l = `companions/${i.id}`,
        h = `${l}/memories`,
        d = `${l}/skills`,
        u = t.companion(i.id);
      this.companionLocations.set(i.id, {
        kind: "owned",
        rootPath: u,
        memoriesPath: t.companionMemories(i.id),
        skillsPath: t.companionSkills?.(i.id) ?? f.join(u, "skills"),
        ...(c ? { workspaceId: c } : {}),
        workspaceRelativeRoot: l,
        workspaceRelativeMemoriesPath: h,
        workspaceRelativeSkillsPath: d,
        permission: "readwrite",
      });
    }
  }
  async mergeCompanionFoldersWithSqlite(e, o, n) {
    const t = new Map(),
      i = async (l) => {
        if (
          !(
            this.companionsBeingRemoved.has(l.id) ||
            this.removedCompanionIds.includes(l.id)
          )
        )
          try {
            (await e.writeCompanion(l), await e.copySelectedUserSkills(l));
          } catch (h) {
            a.logger.error(
              `[CompanionManager] Failed to write companion folder for ${l.id}; keeping companion loaded`,
              h,
            );
          }
      };
    for (const l of o) {
      this.db.getMigrationFlag(V(l.id)) ||
        this.db.setMigrationFlag(V(l.id), !0);
      const h = n.get(l.id),
        d = this.mergeLocalCompanionFields(l, h);
      (t.set(l.id, d),
        h?.skillIds &&
          !this.haveSameSkillIds(l.skillIds, d.skillIds) &&
          (await i(d)));
    }
    const r =
        this.syncedRegistry.getProfileRootDir(this.profileId) ??
        this.profile?.syncedRoot,
      c = r
        ? await I.access(r).then(
            () => !0,
            () => !1,
          )
        : !1;
    for (const l of n.values())
      if (!t.has(l.id)) {
        if (
          !l.isTemporary &&
          ((c && this.db.getMigrationFlag(V(l.id))) ||
            (await this.companionFolderExistsInOtherProfile(l.id)))
        ) {
          try {
            (this.db.releaseCompanion(l.id),
              a.logger.info(
                "[CompanionManager] Released cached companion without a folder here",
                { profileId: this.profileId, companionId: l.id },
              ));
          } catch (h) {
            a.logger.warn(
              "[CompanionManager] Could not release cached companion",
              { profileId: this.profileId, companionId: l.id, error: h },
            );
          }
          continue;
        }
        (t.set(l.id, l), l.isTemporary || (await i(l)));
      }
    return Array.from(t.values());
  }
  haveSameSkillIds(e, o) {
    const n = e ?? new Set(),
      t = o ?? new Set();
    if (n.size !== t.size) return !1;
    for (const i of n) if (!t.has(i)) return !1;
    return !0;
  }
  mergeSkillIds(e, o) {
    if (!(!e && !o))
      return new Set([...Array.from(e ?? []), ...Array.from(o ?? [])]);
  }
  mergeLocalCompanionFields(e, o) {
    return o
      ? {
          ...e,
          companionImage: o.companionImage,
          databaseId: o.databaseId,
          isTemporary: o.isTemporary,
          latestUsage: o.latestUsage,
          latestUsageDate: o.latestUsageDate,
          defaultChatMode: o.defaultChatMode ?? e.defaultChatMode,
          skillIds: this.mergeSkillIds(e.skillIds, o.skillIds),
        }
      : e;
  }
  async saveCompanions() {
    if (this.isIncognito) {
      this.notifyCompanionsChanged();
      return;
    }
    try {
      const e = this.getCompanionFolderStore();
      if (e) {
        const o = Array.from(this.companions.values()).filter(
          (n) => !n.isTemporary && !this.companionsBeingRemoved.has(n.id),
        );
        await e.writeCompanions(o);
        for (const n of this.changedChatCompanions) {
          const t = this.chatCompanions.get(n),
            i = this.getCompanionLocation(n);
          !t ||
            i?.kind !== "owned" ||
            this.companionsBeingRemoved.has(n) ||
            (await this.saveCompanionToDatabase(t),
            await e.writeCompanionAt(i.rootPath, t),
            await e.copySelectedUserSkillsAt(i.rootPath, t, {
              overwriteExisting: !1,
            }),
            this.chatCompanions.get(n) === t &&
              this.changedChatCompanions.delete(n));
        }
        for (const n of this.sharedCompanions.values()) {
          const t = this.getCompanionLocation(n.id);
          t?.kind === "shared" &&
            t.permission === "readwrite" &&
            (await e.writeSharedCompanionAt(t.rootPath, n),
            await e.copySelectedUserSkillsAt(t.rootPath, n, {
              overwriteExisting: !1,
            }));
        }
      }
      this.refreshOwnedCompanionLocations();
      for (const o of this.companions.values())
        this.companionsBeingRemoved.has(o.id) || this.db.upsertCompanion(o);
      (this.currentCompanion &&
        this.db.setCurrentCompanionId(this.currentCompanion.id),
        this.notifyCompanionsChanged(),
        console.log("[CompanionManager] Save complete"));
    } catch (e) {
      throw (
        console.error("[CompanionManager] Error saving companions:", e),
        e
      );
    }
  }
  async saveOwnedCompanion(e) {
    const o = this.getOwnedCompanionById(e);
    if (!o || o.isTemporary || this.companionsBeingRemoved.has(e))
      throw new Error(`Owned companion is unavailable: ${e}`);
    if (this.isIncognito) {
      this.notifyCompanionsChanged();
      return;
    }
    const n = this.getCompanionFolderStore(e);
    if (!n) throw new Error("Companion storage is unavailable.");
    (await this.saveCompanionToDatabase(o),
      await n.writeCompanionManifestOnly(o),
      this.chatCompanions.get(e) === o && this.changedChatCompanions.delete(e),
      this.refreshOwnedCompanionLocations(),
      this.notifyCompanionsChanged());
  }
  startWatchingCompanionDir(e = 0) {
    if (
      this.disposed ||
      this.isIncognito ||
      this.unsubscribeCompanionPrefixWatch
    )
      return;
    const o = this.syncedRegistry.get(this.profileId);
    if (!o) {
      if (e < 10) {
        const n = Math.min(2e3 * Math.pow(1.5, e), 3e4);
        this.companionWatchRetryTimer = setTimeout(() => {
          ((this.companionWatchRetryTimer = null),
            this.startWatchingCompanionDir(e + 1));
        }, n);
      } else
        a.logger.warn(
          "[CompanionManager] SyncedFSManager not available after retries, companion folder watch disabled",
        );
      return;
    }
    ((this.unsubscribeCompanionPrefixWatch = o.onPrefixChanged(
      "companions/",
      (n) => {
        (this.notifyCompanionMemoryFileChanged(n),
          this.publishPublicProfilePathChanged(n),
          this.scheduleCompanionReload());
      },
    )),
      a.logger.info(
        "[CompanionManager] Subscribed to synced-fs companions/ prefix watcher",
      ));
  }
  scheduleCompanionReload() {
    this.disposed ||
      (this.companionWatchDebounceTimer &&
        clearTimeout(this.companionWatchDebounceTimer),
      (this.companionWatchDebounceTimer = setTimeout(() => {
        ((this.companionWatchDebounceTimer = null),
          !this.disposed &&
            this.loadCompanions().catch((e) => {
              a.logger.error(
                "[CompanionManager] Failed to reload companions after folder change:",
                e,
              );
            }));
      }, 300)));
  }
  scheduleCompanionSkillRefresh(e) {
    this.disposed ||
      (this.pendingCompanionSkillRefreshes.add(e),
      this.companionSkillRefreshTimer &&
        clearTimeout(this.companionSkillRefreshTimer),
      (this.companionSkillRefreshTimer = setTimeout(() => {
        this.companionSkillRefreshTimer = null;
        const o = Array.from(this.pendingCompanionSkillRefreshes);
        (this.pendingCompanionSkillRefreshes.clear(),
          this.refreshCompanionFolderSkills(o).catch((n) => {
            a.logger.error(
              "[CompanionManager] Failed to refresh companion folder skills:",
              n,
            );
          }));
      }, 300)));
  }
  async refreshCompanionFolderSkills(e) {
    const o = this.getCompanionFolderStore();
    if (o)
      for (const n of e) {
        const t = this.getCompanionLocation(n);
        if (!t) continue;
        const i = await o.listCompanionSkillIdsAt(t.rootPath);
        if (this.disposed) return;
        const r = this.resolveCompanionById(n);
        if (!r) continue;
        const c = i.filter((l) => !r.skillIds?.has(l));
        (c.length > 0 &&
          this.updateCompanion(n, {
            skillIds: new Set([...(r.skillIds ?? []), ...c]),
          }),
          a.eventManager.publishIPCSignal(
            {
              domain: "companions",
              type: "skillFilesChanged",
              payload: { companionId: n },
            },
            this.profileId,
          ));
      }
  }
  startWatchingSharedWithMeDir(e = 0) {
    if (
      this.disposed ||
      this.isIncognito ||
      this.unsubscribeSharedWithMePrefixWatch
    )
      return;
    const o = this.syncedRegistry.getRootManager();
    if (!o) {
      if (e < 10) {
        const n = Math.min(2e3 * Math.pow(1.5, e), 3e4);
        this.sharedWithMeWatchRetryTimer = setTimeout(() => {
          ((this.sharedWithMeWatchRetryTimer = null),
            this.startWatchingSharedWithMeDir(e + 1));
        }, n);
      } else
        a.logger.warn(
          "[CompanionManager] Root SyncedFSManager not available after retries, incoming companion watch disabled",
        );
      return;
    }
    ((this.unsubscribeSharedWithMePrefixWatch = o.onPrefixChanged(
      "shared-with-me/",
      (n) => {
        (this.notifyCompanionMemoryFileChanged(n),
          this.sharedWithMeWatchDebounceTimer &&
            clearTimeout(this.sharedWithMeWatchDebounceTimer),
          (this.sharedWithMeWatchDebounceTimer = setTimeout(() => {
            ((this.sharedWithMeWatchDebounceTimer = null),
              this.scheduleIncomingSharedCompanionScan(!0).catch((t) => {
                a.logger.error(
                  "[CompanionManager] Failed to reload incoming shared companions:",
                  t,
                );
              }));
          }, 300)));
      },
    )),
      a.logger.info(
        "[CompanionManager] Subscribed to synced-fs shared-with-me/ prefix watcher",
      ),
      this.scheduleIncomingSharedCompanionScan().catch((n) => {
        a.logger.error(
          "[CompanionManager] Failed initial incoming shared companion scan:",
          n,
        );
      }));
  }
  refreshSharedCompanionSources() {
    (this.startWatchingAccountCompanions(),
      this.refreshAccountCompanions().catch((e) => {
        a.logger.error(
          "[CompanionManager] Failed to refresh account companions",
          e,
        );
      }),
      this.startWatchingSharedWithMeDir(),
      this.startWatchingTeamSharedCompanionDirs(),
      this.scheduleIncomingSharedCompanionScan().catch((e) => {
        a.logger.error(
          "[CompanionManager] Failed to refresh shared companion sources:",
          e,
        );
      }));
  }
  async refreshSharedCompanionSourcesNow() {
    (this.startWatchingAccountCompanions(),
      await this.refreshAccountCompanions(),
      this.startWatchingSharedWithMeDir(),
      this.startWatchingTeamSharedCompanionDirs(),
      await this.scheduleIncomingSharedCompanionScan());
  }
  startWatchingTeamSharedCompanionDirs() {
    if (!(this.disposed || this.isIncognito)) {
      for (const [e, o] of this.teamSharedPrefixWatches)
        this.syncedRegistry.getOrg(e) !== o.manager &&
          (o.unsubscribe(), this.teamSharedPrefixWatches.delete(e));
      for (const [e] of this.syncedRegistry.getOrgPrefixes()) {
        if (this.teamSharedPrefixWatches.has(e)) continue;
        const o = this.syncedRegistry.getOrg(e);
        if (!o) continue;
        const n = (c) => {
            (this.notifyCompanionMemoryFileChanged(c),
              this.sharedWithMeWatchDebounceTimer &&
                clearTimeout(this.sharedWithMeWatchDebounceTimer),
              (this.sharedWithMeWatchDebounceTimer = setTimeout(() => {
                ((this.sharedWithMeWatchDebounceTimer = null),
                  this.scheduleIncomingSharedCompanionScan(!0).catch((l) => {
                    a.logger.error(
                      "[CompanionManager] Failed to reload team shared companions:",
                      l,
                    );
                  }));
              }, 300)));
          },
          t = o.onPrefixChanged("shared-with-me/", n),
          i = o.onPrefixChanged("companions/", n),
          r = () => {
            (t(), i());
          };
        (this.teamSharedPrefixWatches.set(e, { manager: o, unsubscribe: r }),
          a.logger.info(
            "[CompanionManager] Subscribed to team shared companion prefix watcher",
            { orgId: e },
          ));
      }
    }
  }
  notifyCompanionMemoryFileChanged(e) {
    if (this.disposed) return;
    const t = e
      .split(f.sep)
      .join("/")
      .match(
        /(?:^|\/)companions\/([^/]+)\/memories\/companion-memory\.md$/,
      )?.[1];
    t &&
      a.eventManager.sendToRenderer("memory:curated-file-edited", {
        scope: "companion",
        companionId: t,
      });
  }
  publishPublicProfilePathChanged(e) {
    if (this.disposed) return;
    const t = e
      .split(f.sep)
      .join("/")
      .match(
        new RegExp(
          `(?:^|/)companions/([^/]+)/${a.PUBLIC_COMPANION_PROFILE_FILE}$`,
        ),
      )?.[1];
    t && this.publishPublicProfileChanged(t);
  }
  publishPublicProfileChanged(e) {
    this.disposed ||
      a.eventManager.publishIPCSignal(
        {
          domain: "companions",
          type: "profileChanged",
          payload: { companionId: e },
        },
        this.profileId,
      );
  }
  async scheduleIncomingSharedCompanionScan(e = !1) {
    for (; this.incomingSharedCompanionScanPromise; ) {
      if (!e) {
        await this.incomingSharedCompanionScanPromise;
        return;
      }
      await this.incomingSharedCompanionScanPromise.catch(() => {});
    }
    ((this.incomingSharedCompanionScanPromise =
      this.loadIncomingSharedCompanions(e)
        .then(() => {
          ((this.lastCompletedIncomingSharedCompanionScanAt = Date.now()),
            this.targetedIncomingSharedCompanionMisses.clear(),
            this.notifyCompanionsChanged(),
            this.publishShareInfoState());
        })
        .finally(() => {
          this.incomingSharedCompanionScanPromise = null;
        })),
      await this.incomingSharedCompanionScanPromise);
  }
  parseIncomingCompanionShare(e, o) {
    const n = _(e.targetPath);
    return n
      ? {
          source: {
            shareId: e.id,
            workspaceId: e.targetWorkspaceId,
            rootDir: o,
            workspaceRelativeRoot: n.rootPath,
            permission: e.permission,
            sourceWorkspaceId: e.sourceWorkspaceId,
            sourceWorkspaceName: e.sourceWorkspaceName,
            targetPath: e.targetPath,
            isTeamShare: !1,
          },
          companionId: n.companionId,
          companionRootTargetPath: n.rootPath,
          companionRootPath: f.join(o, n.rootPath),
        }
      : null;
  }
  async collectTeamSharedCompanions(e, o) {
    const n = [];
    for (const [t] of this.syncedRegistry.getOrgPrefixes()) {
      const i = this.syncedRegistry.getOrg(t);
      if (!i) continue;
      const r = [
          ...(await e.scanCompanionFoldersInTree(
            f.join(i.rootDir, "companions"),
          )),
          ...(await e.scanCompanionFoldersInTree(
            f.join(i.rootDir, "shared-with-me"),
          )),
        ],
        c = new Set();
      for (const l of r) {
        if (c.has(l.rootPath)) continue;
        c.add(l.rootPath);
        const h = f.relative(i.rootDir, l.rootPath).split(f.sep).join("/");
        if (
          _o({
            companionId: l.companion.id,
            workspaceRelativeRoot: h,
            ownedCompanionIds: o.ownedCompanionIds,
            outgoingCompanionTargetRoots: o.outgoingCompanionTargetRoots,
          })
        ) {
          a.logger.info(
            "[CompanionManager] Skipping own outgoing team companion discovery",
            { companionId: l.companion.id, orgId: t, workspaceRelativeRoot: h },
          );
          continue;
        }
        const d = ue(o.teamShares, i.workspaceId, h, l.companion.id),
          u = d?.sourceWorkspaceName ?? h.split("/")[1],
          g = this.syncedRegistry.getOrgDisplayName(t);
        n.push({
          ...l,
          source: {
            shareId: `team:${i.workspaceId}:${h}`,
            workspaceId: i.workspaceId,
            rootDir: i.rootDir,
            workspaceRelativeRoot: h,
            permission: "readwrite",
            sourceWorkspaceId: d?.sourceWorkspaceId ?? "",
            sourceWorkspaceName: u,
            targetPath: h,
            isTeamShare: !0,
            ...(g ? { teamName: g } : {}),
          },
        });
      }
    }
    return n;
  }
  async loadIncomingSharedCompanions(e) {
    const o = this.getCompanionFolderStore(),
      n = this.syncedRegistry.getRootManager();
    if (!o || !n) return;
    const t = await this.getRemoteShareList(e);
    if (!t) return;
    const i = new Set([
        ...this.companions.keys(),
        ...this.chatCompanions.keys(),
      ]),
      r = Wo(t.outgoing),
      c = t.incoming
        .map((m) => this.parseIncomingCompanionShare(m, n.rootDir))
        .filter((m) => m !== null),
      l = await this.loadNotificationState(),
      h = !l.initialized;
    h && (l.initialized = !0);
    const d = [];
    for (const m of c) {
      if (i.has(m.companionId)) continue;
      const y = await o.readCompanionFolderAt(m.companionRootPath);
      y && d.push({ ...y, source: m.source });
    }
    (d.push(
      ...(await this.collectTeamSharedCompanions(o, {
        ownedCompanionIds: i,
        outgoingCompanionTargetRoots: r,
        teamShares: t.team ?? [],
      })),
    ),
      h &&
        ((l.seenShareIds = Array.from(
          new Set([...l.seenShareIds, ...d.map((m) => m.source.shareId)]),
        )),
        await this.saveNotificationState()));
    const u = await Promise.all(
        d.map((m) => this.findCapturedCompanionImage(m.companion)),
      ),
      g = d.map((m, y) =>
        this.preserveLocalSharedCompanionState(m.companion, u[y]),
      );
    this.sharedCompanions = new Map(g.map((m) => [m.id, m]));
    for (const [m, y] of this.companionLocations)
      y.kind === "shared" &&
        !this.sharedCompanions.has(m) &&
        this.companionLocations.delete(m);
    for (const m of d) this.registerSharedCompanionLocation(m, m.source);
    const S = this.db.getCurrentCompanionId(),
      w = S ? this.sharedCompanions.get(S) : void 0;
    w && ((this.currentCompanion = w), this.disposed || R(this.profileId, w));
    const C = new Set(d.map((m) => m.source.shareId));
    for (const m of this.newSharedCompanionsByShareId.keys())
      C.has(m) || this.newSharedCompanionsByShareId.delete(m);
    for (const m of d) {
      if (
        this.companions.has(m.companion.id) ||
        l.seenShareIds.includes(m.source.shareId)
      ) {
        this.newSharedCompanionsByShareId.delete(m.source.shareId);
        continue;
      }
      this.newSharedCompanionsByShareId.set(m.source.shareId, m.companion.id);
    }
  }
  async removeCompanionWithConfirmation(e, o) {
    const n = this.sharedCompanions.get(e),
      t = this.getOwnedCompanionById(e),
      i = n ?? (t && !t.isDraft && !t.isTemporary ? t : void 0);
    if (!i) {
      await this.removeCompanion(e);
      return;
    }
    if (!o) {
      a.logger.warn(
        "[CompanionManager] No window available for remove confirmation",
      );
      return;
    }
    if (n) {
      this.showRemoveSharedCompanionConfirmDialog(n, o);
      return;
    }
    this.showDeleteCompanionConfirmDialog(i, o);
  }
  getCompanionDialogImage(e) {
    return {
      url: this.resolveCompanionImageUrl(e.companionImage),
      companionSeed: e.visualsSeed || e.id,
    };
  }
  resolveCompanionImageUrl(e) {
    if (e) {
      if (
        e.startsWith("http://") ||
        e.startsWith("https://") ||
        e.startsWith("data:")
      )
        return e;
      try {
        return a.fileManager.getLocalhostUrl(e);
      } catch {
        return;
      }
    }
  }
  showDeleteCompanionConfirmDialog(e, o) {
    const n = e.name || "this companion";
    a.dialogManager.showDialog(o.dialogs, {
      title: `Delete ${n}?`,
      description: `This permanently deletes ${n} and cannot be undone.`,
      contentType: "default",
      image: this.getCompanionDialogImage(e),
      buttons: [
        {
          title: "Cancel",
          variant: "outline",
          shortcut: "escape",
          callback: () => {},
        },
        {
          title: "Delete",
          variant: "destructive",
          callback: async () => {
            await this.executeConfirmedCompanionRemoval(e, o, "delete");
          },
        },
      ],
    });
  }
  showRemoveSharedCompanionConfirmDialog(e, o, n) {
    const t = e.name || "this companion";
    a.dialogManager.showDialog(o.dialogs, {
      title: `Remove ${t}?`,
      description: `This removes ${t} from Orbitra and stops future updates. It won't delete the sender's companion.`,
      contentType: "default",
      image: this.getCompanionDialogImage(e),
      buttons: [
        {
          title: "Cancel",
          variant: "outline",
          shortcut: "escape",
          callback: () => {
            n?.onCancel?.();
          },
        },
        {
          title: "Remove",
          variant: "destructive",
          callback: async () => {
            (await this.executeConfirmedCompanionRemoval(e, o, "remove")) &&
              a.eventManager.publishIPCSignalToWindow(
                {
                  domain: "chat",
                  type: "sharedCompanionsUpdated",
                  payload: {
                    sharedCompanions: this.getSharedCompanions(),
                    newSharedCompanionIds: this.getNewSharedCompanionIds(),
                  },
                },
                o.id,
              );
          },
        },
      ],
    });
  }
  async executeConfirmedCompanionRemoval(e, o, n) {
    try {
      return (await this.removeCompanion(e.id), !0);
    } catch (t) {
      a.logger.warn(
        `[CompanionManager] Failed to ${n} companion after confirmation`,
        { companionId: e.id, error: t },
      );
      const i = t instanceof Error ? t.message : void 0;
      return (this.showCompanionRemovalErrorDialog(e, o, n, i), !1);
    }
  }
  showCompanionRemovalErrorDialog(e, o, n, t) {
    const i = e.name || "this companion";
    a.dialogManager.showDialog(o.dialogs, {
      title: `Couldn't ${n} ${i}`,
      description: t || `Orbitra couldn't ${n} ${i}. Try again in a moment.`,
      contentType: "default",
      buttons: [
        {
          title: "OK",
          variant: "secondary",
          shortcut: "enter",
          callback: () => {},
        },
      ],
    });
  }
  getCompanionLocation(e) {
    return this.companionLocations.get(e) ?? null;
  }
  getCompanionMount(e) {
    const o = this.getCompanionPathMount(e);
    if (!o) return null;
    const n = o.sourceKind === "owned" ? "owned" : "shared";
    return {
      companionId: e,
      kind: n,
      rootPath: o.rootHostPath,
      memoriesPath: o.memoriesHostPath,
      skillsPath: o.skillsHostPath,
      workspaceId: o.workspaceId,
      workspaceRelativeRoot: o.rootWorkspacePath,
      workspaceRelativeMemoriesPath: o.memoriesWorkspacePath,
      workspaceRelativeSkillsPath: o.skillsWorkspacePath,
      permission: o.permission,
      pathMount: o,
      ...(o.share
        ? {
            shareId: o.share.shareId,
            sourceWorkspaceId: o.share.sourceWorkspaceId,
            targetPath: o.share.targetPath,
            isTeamShare: o.share.isTeamShare,
          }
        : {}),
    };
  }
  getCompanionPathMount(e) {
    let o = this.getCompanionLocation(e);
    if (
      !o ||
      (o.kind === "owned" &&
        !o.workspaceId &&
        this.syncedRegistry.getWorkspaceIdForProfile(
          this.getCompanionStorageProfileId(e),
        ) &&
        ((o = {
          ...o,
          workspaceId: this.syncedRegistry.getWorkspaceIdForProfile(
            this.getCompanionStorageProfileId(e),
          ),
        }),
        this.companionLocations.set(e, o)),
      !o?.workspaceId)
    )
      return null;
    let n = "owned";
    return (
      o.kind === "shared" &&
        (o.isTeamShare
          ? (n = "team-share")
          : o.shareId.startsWith("local:")
            ? (n = "local-share")
            : (n = "direct-share")),
      Lo({
        companionId: e,
        sourceKind: n,
        permission: o.permission,
        workspaceId: o.workspaceId,
        rootHostPath: o.rootPath,
        memoriesHostPath: o.memoriesPath,
        skillsHostPath: o.skillsPath,
        rootWorkspacePath: o.workspaceRelativeRoot,
        memoriesWorkspacePath: o.workspaceRelativeMemoriesPath,
        skillsWorkspacePath: o.workspaceRelativeSkillsPath,
        ...(o.kind === "shared"
          ? {
              share: {
                shareId: o.shareId,
                targetPath: o.targetPath,
                sourceWorkspaceId: o.sourceWorkspaceId,
                isTeamShare: o.isTeamShare,
              },
            }
          : {}),
      })
    );
  }
  async ensureCompanionLocation(e) {
    if (this.companionLocations.get(e)) {
      this.getCompanionPathMount(e);
      return;
    }
    if (
      !(
        (this.companions.has(e) &&
          (this.refreshOwnedCompanionLocations(),
          this.companionLocations.has(e))) ||
        ((this.isIncognito ||
          this.incomingSharedCompanionScanPromise ||
          this.lastCompletedIncomingSharedCompanionScanAt === null) &&
          (await this.scheduleIncomingSharedCompanionScan()),
        this.companionLocations.get(e))
      ) &&
      !(
        this.companions.has(e) &&
        (this.refreshOwnedCompanionLocations(), this.companionLocations.has(e))
      )
    ) {
      if (this.isIncognito) {
        await this.hydrateIncomingSharedCompanionLocation(e);
        return;
      }
      await this.hydrateIncomingSharedCompanionLocationOnce(e);
    }
  }
  async hydrateIncomingSharedCompanionLocationOnce(e) {
    const o = this.targetedIncomingSharedCompanionHydrations.get(e);
    if (o) {
      await o;
      return;
    }
    const n = this.targetedIncomingSharedCompanionMisses.get(e);
    if (n !== void 0) {
      if (Date.now() - n < en) return;
      this.targetedIncomingSharedCompanionMisses.delete(e);
    }
    const t = this.hydrateIncomingSharedCompanionLocationWithFallback(e);
    this.targetedIncomingSharedCompanionHydrations.set(e, t);
    try {
      await t;
    } finally {
      this.targetedIncomingSharedCompanionHydrations.get(e) === t &&
        this.targetedIncomingSharedCompanionHydrations.delete(e);
    }
  }
  async hydrateIncomingSharedCompanionLocationWithFallback(e) {
    const o = await this.hydrateIncomingSharedCompanionLocation(e);
    this.companionLocations.has(e) ||
      o !== "miss" ||
      (await this.scheduleIncomingSharedCompanionScan(),
      this.companionLocations.has(e) ||
        this.targetedIncomingSharedCompanionMisses.set(e, Date.now()));
  }
  async hydrateIncomingSharedCompanionLocation(e) {
    const o = this.getCompanionFolderStore(),
      n = this.syncedRegistry.getRootManager();
    if (!o || !n) return "transient";
    const t = await this.getRemoteShareList(!0);
    if (!t) return "transient";
    const i = t.incoming
        .map((d) => this.parseIncomingCompanionShare(d, n.rootDir))
        .filter((d) => d !== null),
      r = i.filter((d) => d.companionId === e);
    for (const d of r) {
      const u = await this.readCompanionFolderWhenPresent(
        o,
        d.companionRootPath,
      );
      if (!u) continue;
      const g = await this.findCapturedCompanionImage(u.companion);
      return (
        this.sharedCompanions.set(
          u.companion.id,
          this.preserveLocalSharedCompanionState(u.companion, g),
        ),
        this.registerSharedCompanionLocation(u, d.source),
        this.notifyCompanionsChanged(),
        "found"
      );
    }
    const c = await this.findLocalIncomingSharedCompanionFolder(o, e);
    if (!c) return "miss";
    const l = i.find((d) =>
        this.isSharedCompanionRootForShare(c.rootPath, d, n.rootDir),
      ),
      h = await this.findCapturedCompanionImage(c.companion);
    return (
      this.sharedCompanions.set(
        c.companion.id,
        this.preserveLocalSharedCompanionState(c.companion, h),
      ),
      this.registerSharedCompanionLocation(
        c,
        l?.source ?? this.createLocalOnlyShareSource(c, n.rootDir),
      ),
      this.notifyCompanionsChanged(),
      "found"
    );
  }
  preserveLocalSharedCompanionState(e, o) {
    const n = {
        ...e,
        purpose: "shared-import",
        companionImage: e.companionImage ?? o,
      },
      t = this.sharedCompanions.get(e.id),
      i = t ?? this.db.getSharedCompanionLocalState(e.id);
    if (!i) return n;
    const r = !!(
      t &&
      a.companionAppearanceFingerprint(
        a.resolveCompanionAppearance(t.appearance, t.visualsSeed, t.id),
      ) ===
        a.companionAppearanceFingerprint(
          a.resolveCompanionAppearance(e.appearance, e.visualsSeed, e.id),
        )
    );
    return {
      ...n,
      companionImage:
        r && t?.companionImage ? t.companionImage : n.companionImage,
      latestUsage: i.latestUsage ?? e.latestUsage,
      latestUsageDate: i.latestUsageDate ?? e.latestUsageDate,
      defaultChatMode: i.defaultChatMode ?? e.defaultChatMode,
      ...(i.isHidden ? { isHidden: !0 } : {}),
    };
  }
  async readCompanionFolderWhenPresent(e, o) {
    const n = [0, 50, 150, 300, 600];
    for (const t of n) {
      t > 0 && (await ye(t));
      const i = await e.readCompanionFolderAt(o);
      if (i) return i;
    }
    return null;
  }
  async findLocalIncomingSharedCompanionFolder(e, o) {
    const n = this.syncedRegistry.getRootManager();
    if (!n) return null;
    const t = f.join(n.rootDir, "shared-with-me"),
      i = [0, 50, 150, 300, 600];
    for (const r of i) {
      r > 0 && (await ye(r));
      const l = (await e.scanCompanionFoldersInTree(t)).find(
        (h) => h.companion.id === o,
      );
      if (l) return l;
    }
    return null;
  }
  isSharedCompanionRootForShare(e, o, n) {
    return (
      f.relative(n, e).split(f.sep).join("/") === o.companionRootTargetPath
    );
  }
  createLocalOnlyShareSource(e, o) {
    const n = f.relative(o, e.rootPath).split(f.sep).join("/"),
      t = this.syncedRegistry.getRootManager();
    return {
      shareId: `local:${e.companion.id}`,
      workspaceId: t?.workspaceId ?? "",
      rootDir: o,
      workspaceRelativeRoot: n,
      permission: "readwrite",
      sourceWorkspaceId: "",
      targetPath: n,
      isTeamShare: !1,
    };
  }
  registerSharedCompanionLocation(e, o) {
    if ((this.companions.delete(e.companion.id), !this.isIncognito))
      try {
        this.db.deleteCompanion(e.companion.id);
      } catch (c) {
        a.logger.warn(
          "[CompanionManager] Failed to delete stale owned row for shared companion",
          { companionId: e.companion.id, error: c },
        );
      }
    const t =
        f.relative(o.rootDir, e.rootPath).split(f.sep).join("/") ||
        o.workspaceRelativeRoot ||
        o.targetPath.replace(/^\/+|\/+$/g, ""),
      i = `${t}/memories`,
      r = `${t}/skills`;
    this.companionLocations.set(e.companion.id, {
      kind: "shared",
      rootPath: e.rootPath,
      memoriesPath: f.join(e.rootPath, "memories"),
      skillsPath: f.join(e.rootPath, "skills"),
      workspaceId: o.workspaceId,
      workspaceRelativeRoot: t,
      workspaceRelativeMemoriesPath: i,
      workspaceRelativeSkillsPath: r,
      shareId: o.shareId,
      sourceWorkspaceId: o.sourceWorkspaceId,
      targetPath: o.targetPath,
      permission: o.permission,
      isTeamShare: o.isTeamShare,
    });
  }
  canWriteCompanion(e) {
    const o = this.getCompanionLocation(e);
    return !o || o.permission === "readwrite";
  }
  getCompanionRootPath(e) {
    return this.getCompanionLocation(e)?.rootPath ?? null;
  }
  getCompanionMemoriesPath(e) {
    return this.getCompanionLocation(e)?.memoriesPath ?? null;
  }
  async readCompanionSkillFiles(e, o, n = "synced") {
    const t = this.getCompanionLocation(e);
    if (!t) return new Map();
    const i = this.getManagerForCompanionLocation(t),
      r = new Map(),
      c = new Map();
    for (const w of o) {
      if (!a.validateSkillName(w)) continue;
      const C = f.resolve(t.skillsPath),
        m = f.resolve(t.skillsPath, w, "SKILL.md"),
        y = f.relative(C, m);
      if (!y || !J(C, m)) {
        a.logger.warn(
          "[CompanionManager] Refusing companion skill path outside skills directory",
          { companionId: e, skillId: w },
        );
        continue;
      }
      (r.set(`${t.workspaceRelativeSkillsPath}/${w}/SKILL.md`, w),
        c.set(w, f.resolve(t.skillsPath, y)));
    }
    const l = new Map(),
      h = [...r.keys()];
    if (h.length === 0) return l;
    const [d, u] = await Promise.all([
        I.realpath(t.rootPath).catch(() => null),
        I.realpath(t.skillsPath).catch(() => null),
      ]),
      g = await Promise.all(
        h.map(async (w) => {
          const C = r.get(w);
          if (!C) return null;
          const m = c.get(C);
          if (!m) return null;
          let y = null;
          if (u && (!d || !J(d, u)))
            return (
              a.logger.warn(
                "[CompanionManager] Refusing companion skills directory outside companion root",
                { companionId: e, skillId: C },
              ),
              { skillId: C, file: null, blocked: !0 }
            );
          if (d && u) {
            const v = await I.realpath(m).catch(() => null);
            if (v) {
              if (!J(u, v))
                return (
                  a.logger.warn(
                    "[CompanionManager] Refusing companion skill symlink outside skills directory",
                    { companionId: e, skillId: C },
                  ),
                  { skillId: C, file: null, blocked: !0 }
                );
              y = await I.readFile(v).catch(() => null);
            }
          }
          return (
            !y &&
              i &&
              (y = await i
                .getLocalAdapter()
                .readFile(w)
                .catch(() => null)),
            { skillId: C, file: y, blocked: !1 }
          );
        }),
      ),
      S = [];
    for (const [w, C] of h.entries()) {
      const m = g[w],
        y = r.get(C);
      if (m?.blocked) {
        i && S.push(C);
        continue;
      }
      m?.file && y ? l.set(y, m.file) : S.push(C);
    }
    if (!i || n === "local") return l;
    for (let w = 0; w < S.length; w += se.syncedFSConfig.batchReadMaxSize) {
      const C = S.slice(w, w + se.syncedFSConfig.batchReadMaxSize);
      try {
        const m = await i.getControlPlane().readBatch(C);
        for (const [y, v] of m) {
          const D = r.get(y);
          D && l.set(D, v);
        }
      } catch (m) {
        a.logger.warn(
          "[CompanionManager] Failed to batch read companion skills through synced-fs",
          { companionId: e, skillCount: C.length, error: m },
        );
      }
    }
    return l;
  }
  async readCompanionMemoryFile(e) {
    const o = this.getCompanionLocation(e);
    if (!o) return null;
    const n = this.getManagerForCompanionLocation(o);
    if (!n) return null;
    try {
      return await n.fs.readFileOrNull(
        `${o.workspaceRelativeMemoriesPath}/companion-memory.md`,
      );
    } catch (t) {
      return (
        a.logger.warn(
          "[CompanionManager] Failed to read companion memory from synced-fs",
          { companionId: e, error: t },
        ),
        null
      );
    }
  }
  async getCompanionLocalSkills(e) {
    await this.ensureCompanionLocation(e);
    const o = this.getCompanionLocation(e);
    if (!o) return [];
    let n;
    try {
      n = await I.readdir(o.skillsPath, { withFileTypes: !0 });
    } catch (r) {
      return (
        (r instanceof Error && "code" in r ? r.code : void 0) !== "ENOENT" &&
          a.logger.warn(
            "[CompanionManager] Failed to list companion-local skills",
            { companionId: e, skillsPath: o.skillsPath, error: r },
          ),
        []
      );
    }
    const t = [];
    for (const r of n) {
      if (!r.isDirectory() || r.isSymbolicLink()) continue;
      const c = r.name;
      if (!a.validateSkillName(c)) continue;
      const l = f.join(o.skillsPath, c, "SKILL.md");
      try {
        const h = await a.readCompanionSkillFileAsISkill(c, l, {
          repairOnDisk: !0,
        });
        h && t.push(h);
      } catch (h) {
        a.logger.warn(
          "[CompanionManager] Failed to read companion-local skill",
          { companionId: e, skillId: c, skillPath: l, error: h },
        );
      }
    }
    return t.sort((r, c) => r.name.localeCompare(c.name));
  }
  async deleteCompanionLocalSkill(e, o) {
    if (!a.validateSkillName(o)) throw new Error("Invalid skill name");
    await this.ensureCompanionLocation(e);
    const n = this.getCompanionLocation(e);
    if (!n)
      throw new Error(
        "Companion storage is still loading. Try again in a moment.",
      );
    if (n.permission !== "readwrite")
      throw new Error("This companion was shared as read-only.");
    const t = f.join(n.skillsPath, o);
    try {
      await I.rm(t, { recursive: !0 });
    } catch (c) {
      throw (c instanceof Error && "code" in c ? c.code : void 0) === "ENOENT"
        ? new Error("Skill not found")
        : c;
    }
    a.logger.info("[CompanionManager] Deleted companion skill folder", {
      companionId: e,
      skillId: o,
      locationKind: n.kind,
    });
    const i = this.resolveCompanionById(e);
    if (!i?.skillIds?.has(o)) return;
    const r = new Set(i.skillIds);
    (r.delete(o),
      this.updateCompanion(e, { skillIds: r }),
      n.kind === "owned" && (await this.saveCompanions()),
      this.notifyCompanionsChanged());
  }
  resolveSandboxPathForCompanion(e, o, n) {
    const t = P.expandAgentRootPath(e, P.accountRootOfWorkspaceRoot(o)) ?? e;
    if (!n) return a.resolveSandboxPath(t, o, n);
    this.getCompanionLocation(n) ||
      this.findLocalSharedCompanionLocationSync(n);
    const i = this.getCompanionPathMount(n);
    return i
      ? (Ao(i, t) ?? a.resolveSandboxPath(t, o, n))
      : a.resolveSandboxPath(t, o, n);
  }
  getSharedCompanionLocation(e) {
    const o = this.getCompanionLocation(e);
    return o?.kind === "shared" ? o : null;
  }
  findLocalSharedCompanionLocationSync(e) {
    const o = this.syncedRegistry.getRootManager();
    if (o) {
      const n = this.findLocalSharedCompanionLocationInManagerSync(e, o, !1);
      if (n) return n;
    }
    for (const [n] of this.syncedRegistry.getOrgPrefixes()) {
      const t = this.syncedRegistry.getOrg(n);
      if (!t) continue;
      const i = this.findLocalSharedCompanionLocationInManagerSync(e, t, !0);
      if (i) return i;
    }
    return null;
  }
  findLocalSharedCompanionLocationInManagerSync(e, o, n) {
    const t = n ? [`companions/${e}`] : [`shared-with-me/companions/${e}`];
    for (const c of t) {
      const l = f.join(o.rootDir, c);
      if (Y.existsSync(f.join(l, "companion.json")))
        return this.createLocalSharedCompanionLocation(e, o, c, n);
    }
    const i = f.join(o.rootDir, "shared-with-me");
    let r;
    try {
      r = Y.readdirSync(i, { withFileTypes: !0 })
        .filter((c) => c.isDirectory())
        .map((c) => c.name);
    } catch {
      return null;
    }
    for (const c of r) {
      const l = `shared-with-me/${c}/companions/${e}`,
        h = f.join(o.rootDir, l);
      if (Y.existsSync(f.join(h, "companion.json")))
        return this.createLocalSharedCompanionLocation(e, o, l, n);
    }
    return null;
  }
  createLocalSharedCompanionLocation(e, o, n, t) {
    const i = f.join(o.rootDir, n),
      r = `${n}/memories`,
      c = `${n}/skills`,
      l = t
        ? ue(this.shareInfoCache?.shares.team ?? [], o.workspaceId, n, e)
        : void 0,
      h = {
        kind: "shared",
        rootPath: i,
        memoriesPath: f.join(i, "memories"),
        skillsPath: f.join(i, "skills"),
        workspaceId: o.workspaceId,
        workspaceRelativeRoot: n,
        workspaceRelativeMemoriesPath: r,
        workspaceRelativeSkillsPath: c,
        shareId: t ? `team:${o.workspaceId}:${n}` : `local:${e}`,
        sourceWorkspaceId: l?.sourceWorkspaceId ?? "",
        targetPath: n,
        permission: "readwrite",
        isTeamShare: t,
      };
    return (this.companionLocations.set(e, h), this.companions.delete(e), h);
  }
  async setCurrentSidebarCompanion(e, o) {
    const n = ++this.sidebarCompanionSelectionVersion;
    if (this.currentCompanion && this.currentCompanion.id === e) return;
    const t = await this.waitForChatCompanion(e, { allowFallback: !1 });
    if (n === this.sidebarCompanionSelectionVersion && !(o && !o())) {
      if (!t || !this.hasCompanion(e) || !a.isDiscoverableCompanion(t)) {
        console.warn(
          `[CompanionManager] Companion ${e} is not available for global selection`,
        );
        return;
      } else
        (console.log(
          `[CompanionManager] Setting current companion to: ${t.name} (${t.id})`,
        ),
          (this.currentCompanion = t));
      if (!this.isIncognito && this.currentCompanion)
        try {
          this.db.setCurrentCompanionId(this.currentCompanion.id);
        } catch (i) {
          console.error(
            "[CompanionManager] Error setting current companion:",
            i,
          );
        }
      (this.currentCompanion &&
        (this.disposed || R(this.profileId, this.currentCompanion)),
        this.sendOffscreenCompanionCaptureState(),
        this.notifyCompanionsChanged());
    }
  }
  async addCompanion(e) {
    return (await this.waitForReady(), this.addCompanionToStore(e));
  }
  async createOnboardingCompanion(e) {
    await this.waitForReady();
    const o = this.getCompanionFolderStore();
    if (!o) throw new Error("Companion storage is unavailable.");
    if (
      this.companions.has(e.id) ||
      this.db.getCompanion(e.id) ||
      (await o.companionRootExists(e.id)) ||
      (await this.companionFolderExistsInOtherProfile(e.id))
    )
      throw new Error(`Companion destination already exists: ${e.id}`);
    const n = {
      id: e.id,
      name: "Your Assistant",
      description: void 0,
      systemPrompt: "You are a helpful AI companion inside Orbitra Browser.",
      temperature: 0.7,
      maxOutputTokens: 2e3,
      memories: "",
      skillIds: new Set(),
      appearance: a.resolveCompanionAppearance(
        e.appearance,
        e.visualsSeed,
        e.id,
      ),
      visualsSeed: e.visualsSeed,
      provider: a.DEFAULT_MODEL_ID,
      isChartsEnabled: !1,
      isDraft: !0,
      latestUsageDate: Date.now(),
      effort: "high",
      defaultChatMode: a.DEFAULT_COMPANION_CHAT_MODE,
      purpose: "standard",
    };
    if (
      (await o.publishNewCompanion({
        companion: n,
        publicProfile: a.createEmptyPublicCompanionProfile(),
        filePaths: [],
      }),
      this.companions.set(n.id, n),
      this.refreshOwnedCompanionLocations(),
      !this.db.insertCompanionIfAbsent(n))
    )
      throw new Error(
        "The companion destination became unavailable during creation.",
      );
    return (
      await this.ensureMemoryFileForCompanion(n.id),
      this.notifyCompanionsChanged(),
      n
    );
  }
  async addCompanionToStore(e) {
    if (
      e.id &&
      !e.isTemporary &&
      !this.companions.has(e.id) &&
      (this.chatCompanions.has(e.id) ||
        (await this.companionFolderExistsInOtherProfile(e.id)))
    )
      throw new Error(`Companion already exists in another profile: ${e.id}`);
    const o = e.id || a.v4(),
      n = e.visualsSeed || a.v4(),
      t = {
        id: o,
        name: a.normalizeCompanionName(e.name),
        description: e.description,
        systemPrompt: e.prompt,
        temperature: 0.7,
        maxOutputTokens: 2e3,
        memories: "",
        skillIds: new Set(e.skills),
        appearance: a.resolveCompanionAppearance(
          e.appearance,
          e.visualsSeed,
          n,
        ),
        visualsSeed: n,
        provider: a.DEFAULT_MODEL_ID,
        isChartsEnabled: e.isChartsEnabled || !1,
        isTemporary: e.isTemporary || !1,
        isDraft: e.isDraft || !1,
        latestUsageDate: Date.now(),
        effort: "high",
        defaultChatMode: a.DEFAULT_COMPANION_CHAT_MODE,
        purpose: e.purpose ?? "standard",
      };
    if (
      (a.logger.info(
        `[CompanionManager] Adding new companion: ${e.name} (${t.id})${e.isTemporary ? " [TEMPORARY]" : ""}`,
      ),
      this.companions.set(t.id, t),
      !this.isIncognito)
    )
      try {
        this.db.upsertCompanion(t);
        const i = this.getCompanionFolderStore();
        i &&
          !t.isTemporary &&
          (await i.writeCompanion(t), await i.copySelectedUserSkills(t));
      } catch (i) {
        a.logger.error("[CompanionManager] Error saving new companion:", i);
      }
    return (
      await this.ensureMemoryFileForCompanion(t.id),
      a.telemetryManager.sendEvent(
        "total_companions",
        { total_companions: this.companions.size },
        "CompanionManager.ts",
        this.accountId,
      ),
      this.notifyCompanionsChanged(),
      t.id
    );
  }
  async ensureMemoryFileForCompanion(e) {
    const o = this.profile;
    if (!o?.path) return;
    const n = P.getFilePaths(o.syncedRoot, a.getProfileAccountDataPath(o));
    try {
      const t = a.selectedLegacyMemorySystem(
        a.getFeatureFlags(this.accountId).memorySystem,
      );
      if (!t) return;
      await t.bootstrap.ensure({ syncRoot: n.synced.root, companionId: e });
    } catch (t) {
      a.logger.error(
        `[CompanionManager] Failed to ensure memory file for ${e}:`,
        t,
      );
    }
  }
  async removeCompanion(e) {
    this.accountCompanionRevision++;
    const o = this.sharedCompanions.has(e);
    o &&
      !this.getSharedCompanionLocation(e) &&
      (await this.ensureCompanionLocation(e));
    const n = this.getSharedCompanionLocation(e);
    if (n) {
      await this.rejectIncomingCompanionShare(e, n);
      return;
    }
    if (o)
      throw new Error(
        "The received companion share is still loading. Try again in a moment.",
      );
    const t = this.listDiscoverableOwnedCompanions().filter(
      (w) => !w.isTemporary && a.isDiscoverableCompanion(w),
    );
    if (t.length <= 1 && t.some((w) => w.id === e))
      throw (
        console.warn("[CompanionManager] Cannot remove last companion"),
        new Error("Cannot remove the last companion")
      );
    console.log(`[CompanionManager] Removing companion: ${e}`);
    const i = this.currentCompanion?.id === e,
      r = this.getCompanionStorageProfileId(e),
      c = this.getCompanionFolderStore(e),
      l = new Set([
        this.profileId,
        r,
        ...this.syncedRegistry
          .getProfileWorkspaceRoots()
          .map(({ profileId: w }) => w),
      ]);
    (this.companionsBeingRemoved.add(e), this.moveSidebarOffCompanion(e));
    const h = this.currentCompanion?.id;
    this.notifyCompanionsChanged();
    const d = performance.now(),
      u = {},
      g = async (w, C) => {
        const m = performance.now();
        try {
          await C();
        } finally {
          u[w] = Math.round(performance.now() - m);
        }
      };
    let S = !1;
    try {
      this.isIncognito ||
        (await g("locationMs", () => this.ensureCompanionLocation(e)));
      const w = this.planCompanionCleanup(e, r, l);
      if (!this.isIncognito) {
        if (!c) throw new Error("Companion storage is unavailable.");
        await g("localFilesMs", async () => {
          (await this.updateCompanionDatabase(e, (C) => C.deleteCompanion(e)),
            await c.deleteCompanion(e),
            w && this.getDeletedCompanionCleanup().save(w));
          try {
            await this.cleanupCompanionData(e);
          } catch (C) {
            a.logger.error(
              "[CompanionManager] Error cleaning up companion data:",
              C,
            );
          }
        });
      }
      (this.companions.delete(e),
        this.chatCompanions.delete(e),
        this.changedChatCompanions.delete(e),
        this.companionLocations.delete(e),
        this.removedCompanionIds.push(e),
        this.accountCompanionRevision++,
        (S = !0),
        w && this.getDeletedCompanionCleanup().send(),
        a.telemetryManager.sendEvent(
          "total_companions",
          { total_companions: this.companions.size },
          "CompanionManager.ts",
          this.accountId,
        ));
    } finally {
      if ((this.companionsBeingRemoved.delete(e), S))
        this.moveSidebarOffCompanion(e);
      else {
        const w = this.getOwnedCompanionById(e);
        i &&
          w &&
          this.currentCompanion?.id === h &&
          ((this.currentCompanion = w), this.disposed || R(this.profileId, w));
      }
      (this.notifyCompanionsChanged(),
        a.logger.info("[CompanionManager] Companion removal timings", {
          companionId: e,
          outcome: S ? "removed" : "failed",
          totalMs: Math.round(performance.now() - d),
          ...u,
        }));
    }
  }
  moveSidebarOffCompanion(e) {
    if (this.currentCompanion?.id !== e) return;
    const o = this.getFirstCompanion();
    (console.warn(
      `[CompanionManager] Removed active companion ${e}, falling back to: ${o?.name} (${o?.id})`,
    ),
      (this.currentCompanion = o),
      o && !this.disposed && R(this.profileId, o));
  }
  planCompanionCleanup(e, o, n) {
    const t = this.accountId;
    if (this.isIncognito || !t) return null;
    const i = this.getOwnedCompanionById(e),
      r = Array.from(n, (c) => ({ kind: "memory", profileId: c }));
    return (
      i && !i.isTemporary && !i.isDraft && r.push({ kind: "routines" }),
      i &&
        !i.isTemporary &&
        r.push({
          kind: "publication",
          profileId: this.getCompanionPublicationProfileId(e),
        }),
      r.push({ kind: "shares" }),
      {
        id: a.v4(),
        accountId: t,
        companionId: e,
        storageProfileId: o,
        sourceWorkspaceId: a.companionSourceWorkspaceId(this, e),
        steps: r,
      }
    );
  }
  async sendCompanionCleanupStep(e, o, n) {
    const { accountId: t, companionId: i } = e;
    switch (o.kind) {
      case "memory": {
        if (!n) return { outcome: "waiting", reason: "workspace_unknown" };
        const { deleteHostedOptMemScope: r } = await Xo();
        return fe(await r(o.profileId, i, t, n));
      }
      case "routines": {
        if (!n) return { outcome: "waiting", reason: "workspace_unknown" };
        const r = await a.deleteRoutinesByCompanion(t, {
          id: i,
          sourceWorkspaceId: n,
        });
        return r.status === "failed"
          ? H(r.httpStatus, r.error)
          : (a.cleanupManager.addPendingCleanup(
              this.cleanupFormerSourceRoutines(t, i, n).catch((c) => {
                a.logger.warn(
                  "[CompanionManager] Could not check former companion workspaces",
                  {
                    userId: t,
                    companionId: i,
                    outcome: "degraded",
                    errorName: c instanceof Error ? c.name : "error",
                  },
                );
              }),
            ),
            a.getRoutineRunManager(t)?.refreshList(),
            { outcome: "done" });
      }
      case "publication":
        return fe(await this.deletePublishedProfile(i, o.profileId));
      case "shares":
        return this.revokeOutgoingCompanionShares(i);
    }
  }
  async rejectIncomingCompanionShare(e, o) {
    if (o.isTeamShare || o.shareId.startsWith("team:"))
      throw new Error("Team-shared companions cannot be removed individually");
    if (o.shareId.startsWith("local:"))
      throw new Error("This local shared companion has no share to reject");
    const n = this.getShareListManager();
    if (!n)
      throw new Error("File sync is still starting. Try again in a moment.");
    const t = await n.getControlPlane().declineShare(o.shareId);
    if (!t.ok) throw new Error(t.error ?? "Failed to reject companion share");
    const i = this.currentCompanion?.id === e;
    if (
      (this.sharedCompanions.delete(e),
      this.companionLocations.delete(e),
      this.newSharedCompanionsByShareId.delete(o.shareId),
      this.invalidateShareInfoCache(),
      i)
    ) {
      const r = this.getFirstCompanion();
      if (((this.currentCompanion = r), r)) {
        if (!this.isIncognito)
          try {
            this.db.setCurrentCompanionId(r.id);
          } catch (c) {
            a.logger.error(
              "[CompanionManager] Failed to persist fallback after rejecting share",
              { companionId: r.id, error: c },
            );
          }
        this.disposed || R(this.profileId, r);
      }
    }
    (this.notifyCompanionsChanged(),
      await this.publishShareInfoState({ force: !0 }));
  }
  async cleanupCompanionData(e) {
    try {
      const o = this.getCompanionMemoriesPath(e);
      o && (await I.rm(o, { recursive: !0, force: !0 }).catch(() => {}));
    } catch (o) {
      a.logger.error(
        `[CompanionManager] Failed to clean up memory for ${e}:`,
        o,
      );
    }
    try {
      await this.updateCompanionDatabase(e, async (o, n) => {
        n && (await new go(o, n).removeCompanionData(e));
      });
    } catch (o) {
      a.logger.error(
        `[CompanionManager] Failed to clean up library for ${e}:`,
        o,
      );
    }
  }
  async cleanupFormerSourceRoutines(e, o, n) {
    const t = await a.listRoutines(e).catch(() => null);
    if (t?.status !== "ok") {
      a.logger.warn(
        "[CompanionManager] Could not list routines on former companion workspaces",
        { userId: e, companionId: o, outcome: "degraded" },
      );
      return;
    }
    const i = new Set();
    for (const { companion: d } of [...t.value.routines, ...t.value.oneOffs])
      d.id !== o ||
        !d.sourceWorkspaceId ||
        (d.sourceWorkspaceId !== n && i.add(d.sourceWorkspaceId));
    if (i.size === 0) return;
    const r = this.syncedRegistry,
      c = [];
    for (const { profileId: d, rootDir: u } of r.getProfileWorkspaceRoots()) {
      const g = r.getWorkspaceIdForProfile(d);
      !g ||
        !i.has(g) ||
        (await new O.CompanionFolderStore(
          P.getSyncedFilePaths(u),
        ).verifyCompanionDirectory(o)) ||
        c.push(g);
    }
    if (c.length === 0) return;
    const l = await Promise.allSettled(
      c.map((d) =>
        a.deleteRoutinesByCompanion(e, { id: o, sourceWorkspaceId: d }),
      ),
    );
    a.getRoutineRunManager(e)?.refreshList();
    const h = l.filter(
      (d) => d.status === "rejected" || d.value.status === "failed",
    ).length;
    h > 0 &&
      a.logger.warn(
        "[CompanionManager] Could not remove routines from a former companion workspace",
        { userId: e, companionId: o, outcome: "degraded", failedWorkspaces: h },
      );
  }
  getCurrentSidebarCompanion() {
    return this.currentCompanion
      ? this.currentCompanion
      : (this.transientFallback ||
          (this.transientFallback = a.createFallbackCompanion(a.v4(), a.v4())),
        this.transientFallback);
  }
  refreshAccountCompanions() {
    return this.disposed
      ? Promise.resolve()
      : this.accountCompanionRefresh
        ? this.accountCompanionRefresh
        : ((this.accountCompanionRefresh = this.loadAccountCompanions().finally(
            () => {
              this.accountCompanionRefresh = null;
            },
          )),
          this.accountCompanionRefresh);
  }
  async loadAccountCompanions() {
    const e = this.syncedRegistry,
      o = this.accountCompanionRevision,
      n = e
        .getProfileWorkspaceRoots()
        .filter(({ profileId: h }) => h !== this.profileId)
        .sort((h, d) => h.profileId.localeCompare(d.profileId)),
      t = new Map(),
      i = new Set();
    for (const { profileId: h, rootDir: d } of n) {
      const g = await new O.CompanionFolderStore(
        P.getSyncedFilePaths(d),
      ).scanCompanions();
      if (this.disposed || this.syncedRegistry !== e) return;
      for (const S of g) {
        if (this.companions.has(S.id) || t.has(S.id)) {
          i.add(S.id);
          continue;
        }
        t.set(S.id, await this.readAccountCompanion(S, h, d));
      }
    }
    if (this.disposed || this.syncedRegistry !== e) return;
    const r = e
      .getProfileWorkspaceRoots()
      .filter(({ profileId: h }) => h !== this.profileId);
    if (
      o !== this.accountCompanionRevision ||
      r.length !== n.length ||
      n.some(
        (h) =>
          !r.some(
            (d) => d.profileId === h.profileId && d.rootDir === h.rootDir,
          ),
      )
    ) {
      await this.loadAccountCompanions();
      return;
    }
    for (const h of this.chatCompanions.keys())
      (t.has(h) && this.changedChatCompanions.has(h)) ||
        (this.chatCompanions.delete(h),
        this.changedChatCompanions.delete(h),
        this.companionLocations.get(h)?.kind === "owned" &&
          this.companionLocations.delete(h));
    for (const [h, d] of t)
      this.changedChatCompanions.has(h) ||
        (this.chatCompanions.set(h, d.companion),
        this.companionLocations.set(h, d.location));
    const c = this.currentCompanion?.id ?? this.db.getCurrentCompanionId(),
      l = c ? this.resolveCompanionById(c) : null;
    ((this.currentCompanion =
      l && a.isDiscoverableCompanion(l) ? l : this.getFirstCompanion()),
      R(this.profileId, this.getCurrentSidebarCompanion()),
      this.notifyCompanionsChanged(),
      i.size > 0 && this.emit("duplicate-companions-found", [...i]));
  }
  async readAccountCompanion(e, o, n) {
    const t = this.syncedRegistry,
      i = P.getSyncedFilePaths(n);
    e.companionImage = await this.findCapturedCompanionImage(e);
    const r = this.db.getSharedCompanionLocalState(e.id);
    return (
      (e.latestUsage = r?.latestUsage),
      (e.latestUsageDate = r?.latestUsageDate),
      {
        companion: e,
        location: {
          kind: "owned",
          sourceProfileId: o,
          rootPath: i.companion(e.id),
          memoriesPath: i.companionMemories(e.id),
          skillsPath:
            i.companionSkills?.(e.id) ?? f.join(i.companion(e.id), "skills"),
          workspaceId: t.getWorkspaceIdForProfile(o),
          workspaceRelativeRoot: `companions/${e.id}`,
          workspaceRelativeMemoriesPath: `companions/${e.id}/memories`,
          workspaceRelativeSkillsPath: `companions/${e.id}/skills`,
          permission: "readwrite",
        },
      }
    );
  }
  async companionFolderExistsInOtherProfile(e) {
    if (this.isIncognito) return !1;
    for (const {
      profileId: o,
      rootDir: n,
    } of this.syncedRegistry.getProfileWorkspaceRoots()) {
      if (o === this.profileId) continue;
      if (
        await new O.CompanionFolderStore(
          P.getSyncedFilePaths(n),
        ).verifyCompanionDirectory(e)
      )
        return !0;
    }
    return !1;
  }
  releaseOwnedCompanion(e) {
    this.companions.delete(e) &&
      (this.accountCompanionRevision++,
      this.companionLocations.get(e)?.kind === "owned" &&
        this.companionLocations.delete(e));
  }
  startWatchingAccountCompanions() {
    if (this.disposed) return;
    const e = this.accountId;
    if (
      this.unsubscribeAccountCompanions &&
      this.accountCompanionWatchAccountId === e
    )
      return;
    (this.unsubscribeAccountCompanions?.(),
      (this.accountCompanionWatchAccountId = e));
    const o = this.syncedRegistry;
    this.unsubscribeAccountCompanions = o.onFileChanged((n) => {
      if (this.disposed || this.syncedRegistry !== o) return;
      (this.notifyCompanionMemoryFileChanged(n),
        this.publishPublicProfilePathChanged(n));
      const t = n.split(f.sep).join("/").match(nn);
      if (t) {
        this.scheduleCompanionSkillRefresh(t[1]);
        return;
      }
      if (!/(?:^|\/)companions(?:$|\/[^/]+(?:$|\/companion\.json$))/.test(n))
        return;
      const i = o
        .getProfileWorkspaceRoots()
        .find(({ profileId: r }) => r === this.profileId);
      if (i && n.startsWith(`${f.basename(i.rootDir)}/companions`)) {
        this.scheduleCompanionReload();
        return;
      }
      (this.accountCompanionRefreshTimer &&
        clearTimeout(this.accountCompanionRefreshTimer),
        (this.accountCompanionRefreshTimer = setTimeout(() => {
          ((this.accountCompanionRefreshTimer = null),
            (this.accountCompanionRefresh ?? Promise.resolve())
              .then(() => this.refreshAccountCompanions())
              .catch((c) => {
                a.logger.error(
                  "[CompanionManager] Failed to refresh account companions",
                  c,
                );
              }));
        }, 300)));
    });
  }
  async loadCompanionForChat(e, o, n) {
    if (
      (n?.throwIfAborted(),
      !e || this.companions.has(e) || this.sharedCompanions.has(e))
    )
      return;
    const t = this.syncedRegistry,
      i = t.getProfileWorkspaceRoots();
    i.sort((r, c) => +(c.profileId === o) - +(r.profileId === o));
    for (const { profileId: r, rootDir: c } of i) {
      const l = P.getSyncedFilePaths(c),
        h = await new O.CompanionFolderStore(l).readCompanion(e);
      if ((n?.throwIfAborted(), !h)) continue;
      const d = await this.readAccountCompanion(h, r, c);
      if ((n?.throwIfAborted(), this.disposed || this.syncedRegistry !== t))
        throw new Error("Companion services are closed");
      (this.changedChatCompanions.has(e) ||
        this.chatCompanions.set(e, d.companion),
        this.companionLocations.set(e, d.location),
        this.notifyCompanionsChanged());
      return;
    }
    throw (
      this.chatCompanions.delete(e),
      this.changedChatCompanions.delete(e),
      this.companionLocations.delete(e),
      this.notifyCompanionsChanged(),
      new Error(
        "This chat's companion is unavailable. Its files may still be syncing.",
      )
    );
  }
  resolveCompanionById(e) {
    return this.resolveCompanionByLocation(e) ?? null;
  }
  hasCompanion(e) {
    return this.resolveCompanionById(e) !== null;
  }
  getOwnedCompanionById(e) {
    return this.companions.get(e) ?? this.chatCompanions.get(e) ?? null;
  }
  getOwnedCompanionRootPath(e) {
    if (!this.getOwnedCompanionById(e))
      throw new Error(`Owned companion is unavailable: ${e}`);
    const o = this.getCompanionFolderStore(e);
    if (!o) throw new Error("Companion storage is unavailable.");
    return o.getCompanionRootPath(e);
  }
  storeOwnedCompanion(e) {
    this.companions.set(e.id, e);
  }
  findSharedCompanionByDatabaseId(e) {
    return (
      Array.from(this.sharedCompanions.values()).find(
        (o) => o.databaseId === e,
      ) ?? null
    );
  }
  hasSharedCompanion(e) {
    return this.sharedCompanions.has(e);
  }
  moveSharedCompanionToOwned(e) {
    const o = this.sharedCompanions.get(e);
    return o
      ? (this.sharedCompanions.delete(e), this.companions.set(e, o), o)
      : null;
  }
  getDefaultCompanionForNewChat() {
    const e = this.getCurrentSidebarCompanion();
    if (!e.isTemporary && a.isDiscoverableCompanion(e)) return e;
    let o = null,
      n = -1;
    for (const t of this.listDiscoverableCompanions())
      t.isTemporary ||
        t.isHidden ||
        !a.isDiscoverableCompanion(t) ||
        ((t.latestUsageDate ?? 0) > n &&
          ((n = t.latestUsageDate ?? 0), (o = t)));
    return o ?? this.getFirstCompanion() ?? e;
  }
  getFirstCompanion() {
    for (const o of this.listDiscoverableCompanions())
      if (!o.isTemporary && a.isDiscoverableCompanion(o)) return o;
    return (
      Array.from(this.listDiscoverableCompanions()).find(
        a.isDiscoverableCompanion,
      ) ?? null
    );
  }
  async checkCreateFirstCompanion(e) {
    if (e.some(a.isDiscoverableCompanion)) return null;
    if (!this.accountId)
      return (
        a.logger.info(
          "[CompanionManager] Deferring first companion creation until sign-in",
        ),
        null
      );
    if (!a.globalSettings.get("hasCompletedOnboarding"))
      return (
        a.logger.info(
          "[CompanionManager] Deferring first companion creation until onboarding selects one",
        ),
        null
      );
    a.logger.info(
      "[CompanionManager] No companions found, creating first companion via addCompanion",
    );
    const o = a.v4();
    await this.addCompanionToStore({
      id: o,
      name: "Your Assistant",
      prompt: "A helpful AI assistant in Orbitra Browser.",
      skills: [],
      visualsSeed: We.DEFAULT_ONBOARDING_COMPANION_VISUALS_SEED,
    });
    const n = this.companions.get(o) ?? null;
    return (n && (this.currentCompanion = n), n);
  }
  async updateCompanionImage(e, o, n) {
    const t = this.resolveCompanionById(e);
    if (!t) return;
    const i = a.resolveCompanionAppearance(t.appearance, t.visualsSeed, t.id);
    (this.companionImageCache.set(
      `${e}|${a.companionScreenshotCacheKey(i, n)}`,
      o,
    ),
      this.updateCompanion(e, { companionImage: o }));
  }
  invalidateCompanionImage(e, o) {
    const n = this.resolveCompanionById(e);
    if (!n) return;
    const t = a.resolveCompanionAppearance(n.appearance, n.visualsSeed, n.id);
    (this.companionImageCache.delete(
      `${e}|${a.companionScreenshotCacheKey(t, o)}`,
    ),
      this.updateCompanion(e, { companionImage: void 0 }));
  }
  updateCompanion(e, o) {
    this.accountCompanionRevision++;
    const n = this.resolveCompanionByLocation(e);
    if (n) {
      console.log(`[CompanionManager] Updating companion: ${n.name} (${e})`);
      let t;
      const i = o.visualsSeed !== void 0 && o.visualsSeed !== n.visualsSeed,
        r = a.resolveCompanionAppearance(n.appearance, n.visualsSeed, n.id),
        c = i ? void 0 : n.appearance,
        l = a.resolveCompanionAppearance(
          o.appearance ?? c,
          o.visualsSeed ?? n.visualsSeed,
          n.id,
        ),
        h =
          a.companionAppearanceFingerprint(r) !==
          a.companionAppearanceFingerprint(l);
      if (
        ((t = {
          ...n,
          ...o,
          appearance: l,
          ...(o.name !== void 0 && { name: a.normalizeCompanionName(o.name) }),
          provider: o.provider || n.provider || "auto",
        }),
        h)
      ) {
        if (n.companionImage) {
          const S = n.companionImage
            .replace(/\\/g, "/")
            .includes("/companions/modular-")
            ? "modular"
            : "legacy";
          this.companionImageCache.set(
            `${e}|${a.companionScreenshotCacheKey(r, S)}`,
            n.companionImage,
          );
        }
        const g = this.companionImageCache.get(
          `${e}|${a.companionScreenshotCacheKey(l, "modular")}`,
        );
        t = { ...t, companionImage: g ?? void 0 };
      }
      const d = this.companions.has(e);
      if (
        (d
          ? this.companions.set(e, t)
          : this.chatCompanions.has(e)
            ? (this.chatCompanions.set(e, t),
              Object.keys(o).some(
                (u) =>
                  u !== "companionImage" &&
                  u !== "latestUsage" &&
                  u !== "latestUsageDate",
              ) && this.changedChatCompanions.add(e))
            : this.sharedCompanions.set(e, t),
        this.currentCompanion?.id === e &&
          ((this.currentCompanion = t),
          console.log(
            `[CompanionManager] Updated current companion: ${this.currentCompanion.name}`,
          ),
          this.disposed || R(this.profileId, this.currentCompanion)),
        !this.isIncognito && d)
      )
        try {
          this.db.upsertCompanion(t);
        } catch (u) {
          console.error("[CompanionManager] Error updating companion:", u);
        }
      (!this.isIncognito &&
        (this.sharedCompanions.has(e) || this.chatCompanions.has(e)) &&
        this.db.setSharedCompanionLocalState(e, {
          latestUsage: t.latestUsage,
          latestUsageDate: t.latestUsageDate,
          defaultChatMode: t.defaultChatMode,
        }),
        this.notifyCompanionsChanged());
    } else
      console.warn(
        `[CompanionManager] Attempted to update non-existent companion: ${e}`,
      );
  }
  setSharedCompanionHidden(e, o) {
    if (this.getCompanionLocation(e)?.kind !== "shared")
      throw new Error("Only companions shared with you can be hidden");
    (this.isIncognito ||
      this.db.setSharedCompanionLocalState(e, { isHidden: o }),
      this.updateCompanion(e, { isHidden: o ? !0 : void 0 }));
  }
  listDiscoverableCompanions() {
    return Array.from(this.getCompanionsByRuntimeId().values()).filter(
      (e) => a.isDiscoverableCompanion(e) && this.isListedCompanion(e),
    );
  }
  listDiscoverableOwnedCompanions() {
    return [
      ...this.companions.values(),
      ...this.chatCompanions.values(),
    ].filter((e) => a.isDiscoverableCompanion(e) && this.isListedCompanion(e));
  }
  isListedCompanion(e) {
    return !this.companionsBeingRemoved.has(e.id);
  }
  async getCompanionUpdatedAt(e) {
    return (await this.getCompanionFolderStore(e)?.readManifest(e))?.updatedAt;
  }
  listInviteSourceCompanions() {
    return [
      ...this.companions.values(),
      ...this.chatCompanions.values(),
    ].filter((e) => e.purpose === "invite-source" && this.isListedCompanion(e));
  }
  listCompanionsForAvatarCapture() {
    const e = this.getCompanionsByRuntimeId();
    for (const o of this.chatCompanions.values()) e.has(o.id) || e.set(o.id, o);
    return Array.from(e.values());
  }
  listChatCompanions() {
    return Array.from(this.chatCompanions.values())
      .filter((e) => this.isListedCompanion(e))
      .map((e) => {
        const o = this.companionLocations.get(e.id);
        return {
          companion: e,
          sourceProfileId:
            o?.kind === "owned"
              ? (o.sourceProfileId ?? this.profileId)
              : this.profileId,
        };
      });
  }
  listRuntimeCompanionsForStorage() {
    return Array.from(
      new Map([...this.companions, ...this.sharedCompanions]).values(),
    );
  }
  resolveCompanionByLocation(e) {
    return this.getCompanionLocation(e)?.kind === "shared"
      ? (this.sharedCompanions.get(e) ?? this.companions.get(e))
      : (this.companions.get(e) ??
          this.sharedCompanions.get(e) ??
          this.chatCompanions.get(e));
  }
  getCompanionsByRuntimeId() {
    const e = new Map(this.chatCompanions);
    for (const o of this.companions.values()) e.set(o.id, o);
    for (const o of this.sharedCompanions.values())
      e.has(o.id) || e.set(o.id, o);
    return e;
  }
  notifyCompanionsChanged() {
    if (this.disposed) return;
    const e = this.listDiscoverableCompanions(),
      o = this.listChatCompanions(),
      n = JSON.stringify([
        a.getCompanionsSignature(e),
        a.getCompanionsSignature(o.map(({ companion: l }) => l)),
        o.map(({ sourceProfileId: l }) => l),
      ]);
    n !== this.lastPublishedCompanionsSignature &&
      ((this.lastPublishedCompanionsSignature = n),
      a.eventManager.publishIPCState("companions.list", this.profileId, {
        companions: e,
        chatCompanions: o,
      }));
    const t = this.listInviteSourceCompanions(),
      i = a.getCompanionsSignature(t);
    i !== this.lastPublishedInviteSourcesSignature &&
      ((this.lastPublishedInviteSourcesSignature = i),
      a.eventManager.publishIPCState(
        "companions.inviteSources",
        this.profileId,
        { companions: t },
      ));
    const r = this.listCompanionsForAvatarCapture(),
      c = a.getCompanionsSignature(r);
    (c !== this.lastSentAvatarCaptureSignature &&
      ((this.lastSentAvatarCaptureSignature = c),
      this.sendOffscreenCompanionCaptureState(r)),
      this.emit("companions-updated", e));
  }
  async publishShareInfoState(e = {}) {
    const o = await this.getShareInfoMap(e);
    if (this.disposed) return {};
    const n = Zo(o);
    return (
      n === this.lastPublishedShareInfoSignature ||
        ((this.lastPublishedShareInfoSignature = n),
        a.eventManager.publishIPCState("companions.shareInfo", this.profileId, {
          sharesById: o,
        })),
      o
    );
  }
  sendOffscreenCompanionCaptureState(
    e = this.listCompanionsForAvatarCapture(),
  ) {
    if (this.disposed) return;
    const o = ++this.offscreenCaptureStateRevision;
    this.getOffscreenCaptureState(e).then((n) => {
      this.disposed ||
        o !== this.offscreenCaptureStateRevision ||
        Fo({
          id: "companion-capture",
          profileId: this.profileId,
          eventName: "ipc:signal",
          payload: {
            signal: {
              domain: "companions",
              type: "offscreenCaptureState",
              payload: n,
            },
          },
        });
    });
  }
  async getOffscreenCaptureState(e = this.listCompanionsForAvatarCapture()) {
    return {
      companions: e,
      sidebarCompanionId: this.currentCompanion?.id ?? null,
      renderer: "modular",
      facePortraitMissingIds: await vo(e),
      dockIconPortrait: await Pe(e, this.accountId),
    };
  }
  getSharedCompanions() {
    return Array.from(this.sharedCompanions.values());
  }
  getNewSharedCompanionIds() {
    return Array.from(
      new Set(this.newSharedCompanionsByShareId.values()),
    ).filter((e) => this.sharedCompanions.has(e));
  }
  async markSharedCompanionsSeen(e) {
    if (e.length === 0) return;
    const o = new Set(e),
      n = await this.loadNotificationState(),
      t = new Set(n.seenShareIds);
    let i = !1;
    for (const [r, c] of this.newSharedCompanionsByShareId)
      o.has(c) &&
        (t.has(r) || (t.add(r), (i = !0)),
        this.newSharedCompanionsByShareId.delete(r));
    i && ((n.seenShareIds = Array.from(t)), await this.saveNotificationState());
  }
  isCompanionShareSourcePath(e, o) {
    return this.getCompanionIdFromShareSourcePath(e) === o;
  }
  getCompanionIdFromShareSourcePath(e) {
    return _(e)?.companionId;
  }
  async revokeOutgoingCompanionShares(e) {
    const o = this.getShareListManager();
    if (!o) return { outcome: "waiting", reason: "sync_not_started" };
    try {
      const t =
        (await this.getRemoteShareList(!0))?.outgoing
          .filter((r) => this.isCompanionShareSourcePath(r.sourcePath, e))
          .map((r) => r.id) ?? [];
      if (t.length === 0) return { outcome: "done" };
      const i = o.getControlPlane();
      return Ko(await Promise.allSettled(t.map((r) => i.deleteShare(r))));
    } finally {
      this.invalidateShareInfoCache();
    }
  }
  invalidateShareInfoCache() {
    ((this.shareInfoCacheGeneration += 1),
      (this.shareInfoCache = null),
      (this.shareInfoFetchPromise = null),
      (this.shareInfoFetchIsForced = !1));
  }
  getShareListManager() {
    return (
      this.syncedRegistry.getRootManager() ??
      this.syncedRegistry.get(this.profileId) ??
      this.syncedRegistry.getAllManagers().values().next().value
    );
  }
  async getRemoteShareList(e) {
    const o = this.getShareListManager();
    if (!o) return null;
    const n = Date.now();
    if (!e && this.shareInfoCache && n - this.shareInfoCache.fetchedAt < Qo)
      return this.shareInfoCache.shares;
    if (this.shareInfoFetchPromise && (!e || this.shareInfoFetchIsForced))
      return this.shareInfoFetchPromise;
    const t = this.shareInfoCacheGeneration,
      i = o
        .getControlPlane()
        .listShares()
        .then(
          (r) => (
            this.shareInfoFetchPromise === i &&
              t === this.shareInfoCacheGeneration &&
              (this.shareInfoCache = { shares: r, fetchedAt: Date.now() }),
            r
          ),
        )
        .finally(() => {
          this.shareInfoFetchPromise === i &&
            ((this.shareInfoFetchPromise = null),
            (this.shareInfoFetchIsForced = !1));
        });
    return (
      (this.shareInfoFetchPromise = i),
      (this.shareInfoFetchIsForced = e),
      i
    );
  }
  async getShareInfoMap(e = {}) {
    e.force && this.invalidateShareInfoCache();
    const o = {};
    for (const [n, t] of this.companionLocations)
      t.kind === "shared" &&
        (o[n] = {
          isIncoming: !0,
          isOutgoing: !1,
          incomingPermission: t.permission,
          outgoingShareCount: 0,
          outgoingShareIds: [],
          outgoingTeamShares: [],
          outgoingRecipients: [],
          isTeamShare: t.isTeamShare === !0,
          canRemoveIncomingShare:
            t.isTeamShare !== !0 &&
            !t.shareId.startsWith("team:") &&
            !t.shareId.startsWith("local:"),
        });
    try {
      const n = await this.getRemoteShareList(e.force === !0);
      if (n) {
        const t = this.getTeamOrganizationIdsByWorkspaceId();
        for (const i of n.outgoing) {
          const r = this.getCompanionIdFromShareSourcePath(i.sourcePath);
          if (!r) continue;
          const c = o[r],
            l = i.targetOrganizationId?.trim() || t.get(i.targetWorkspaceId),
            h = l
              ? {
                  shareId: i.id,
                  organizationId: l,
                  organizationName: i.targetOrganizationName?.trim() || null,
                }
              : void 0,
            d = h !== void 0,
            u = i.sharedWithUserEmail?.trim().toLowerCase(),
            g = !d && u ? { shareId: i.id, email: u } : void 0;
          c
            ? ((c.isOutgoing = !0),
              (c.outgoingShareCount += 1),
              (c.outgoingShareIds = [...(c.outgoingShareIds ?? []), i.id]),
              h &&
                (c.outgoingTeamShares = [...(c.outgoingTeamShares ?? []), h]),
              g &&
                (c.outgoingRecipients = [...(c.outgoingRecipients ?? []), g]),
              (c.isTeamShare = c.isTeamShare === !0 || d))
            : (o[r] = {
                isIncoming: !1,
                isOutgoing: !0,
                outgoingShareCount: 1,
                outgoingShareIds: [i.id],
                outgoingTeamShares: h ? [h] : [],
                outgoingRecipients: g ? [g] : [],
                isTeamShare: d,
              });
        }
      }
    } catch (n) {
      a.logger.warn(
        "[CompanionManager] Failed to load outgoing shares for share info map",
        { error: n },
      );
    }
    return o;
  }
  async adoptSharedCompanion(e) {
    return this.sharedCompanionsService.adoptSharedCompanion(e);
  }
  async setCompanionTemporary(e, o) {
    return this.sharedCompanionsService.setCompanionTemporary(e, o);
  }
  findMatchingTemporaryCompanion(e, o, n, t, i, r = []) {
    const c = new Set(r);
    for (const l of this.companions.values()) {
      if (!l.isTemporary) continue;
      const h = l.skillIds ?? new Set();
      if (
        !(
          l.name === e &&
          l.systemPrompt === o &&
          l.memories === n &&
          l.provider === t &&
          l.isChartsEnabled === i &&
          h.size === c.size
        )
      )
        continue;
      let u = !0;
      for (const g of c)
        if (!h.has(g)) {
          u = !1;
          break;
        }
      if (u)
        return (
          console.log(
            `[CompanionManager] Found matching temporary companion: ${l.name} (${l.id})`,
          ),
          l.id
        );
    }
    return null;
  }
}
class an extends a.BaseManager {
  companionManagers = new Map();
  companionListeners = new Set();
  onCompanionsChanged(e) {
    return (
      this.companionListeners.add(e),
      () => {
        this.companionListeners.delete(e);
      }
    );
  }
  constructor() {
    super();
  }
  getOrCreateCompanionManager(e, o, n, t, i) {
    const r = t ? `${e}#incognito` : `${e}#default`;
    let c = this.companionManagers.get(r);
    return (
      c ||
        ((c = new tn(e, o, n, t, i)),
        this.companionManagers.set(r, c),
        t ||
          c.on("companions-updated", () => {
            for (const l of this.companionListeners) l(e);
          })),
      c
    );
  }
  async closeProfile(e) {
    for (const o of [`${e}#default`, `${e}#incognito`]) {
      const n = this.companionManagers.get(o);
      (this.companionManagers.delete(o), await n?.dispose());
    }
  }
  getCompanionManager(e, o = !1) {
    const n = o ? `${e}#incognito` : `${e}#default`;
    return this.companionManagers.get(n);
  }
}
const Oe = new an(),
  rn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, companionManagerRegistry: Oe },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
exports.COMPANION_FACE_PORTRAIT_BASENAME = be;
exports.COMPANION_FULL_BODY_BLINK_POSTER_BASENAME = wo;
exports.COMPANION_FULL_BODY_POSTER_BASENAME = Co;
exports.CompanionManagerRegistry = rn;
exports.DEFAULT_DOCK_ICON_DESIGN = ee;
exports.DOCK_ICON_SIZE = A;
exports.DOCK_ICON_STATE_KEY = je;
exports.DOCK_ICON_VIEW_SCALE = N;
exports.OffscreenRendererHost = To;
exports.companionAppearanceKey = ie;
exports.companionManagerRegistry = Oe;
exports.currentDockIconDesign = ne;
exports.dockIconAvatarPlacement = Xe;
exports.dockIconBackground = io;
exports.dockIconPortrait = ho;
exports.dockIconPortraitFor = q;
exports.getCompanionFacePortraitSource = ke;
exports.hexToRgb = ao;
exports.iconDesignerAvailable = te;
exports.needsCompanionOffscreenCapture = Io;
exports.parseCompanionShareRoot = _;
exports.publishSidebarCompanionChanged = R;
exports.readStoredDockIconPortrait = ae;
exports.resolveCompanionMountWorkspaceWritePath = Eo;
