"use strict";
(function () {
  try {
    var t =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    t.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "c3ef15d9-7903-41d1-8e76-3459c7b56fa0"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-c3ef15d9-7903-41d1-8e76-3459c7b56fa0"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const I = require("fs"),
  d = require("path"),
  s = require("electron"),
  c = require("./CompanionManagerRegistry-CqhzzsGy.js"),
  p = require("../main-app.js"),
  v = require("./sourceTypes-BtnpKV6Z.js"),
  ee = require("crypto"),
  te = require("./fs-native-KvxiM8hl.js"),
  re = require("./appPaths-eBQvtv9Z.js");
require("events");
require("fs/promises");
require("node:fs");
require("node:os");
require("node:path");
require("./config-CdpnFYk6.js");
require("./settled-read-r0Yf0ORp.js");
require("node:crypto");
require("node:fs/promises");
require("valibot");
require("./errors-DsbnElf-.js");
require("./savedCertificateBlocklist-BUtmL3xA.js");
require("node:tls");
require("./appDataPath-20zIIRaW.js");
require("./onboarding-BugjMquY.js");
require("./CompanionFolderStore-BW078c_O.js");
require("os");
require("node:events");
require("@electron-toolkit/utils");
require("node:util");
require("node:worker_threads");
require("node:http");
require("node:https");
require("./protocol-BGN1BQCi.js");
require("child_process");
require("util");
require("node:async_hooks");
require("@reflect/auth/workos-session");
require("@reflect/auth/device-policy");
require("node:process");
require("node:assert");
require("node:stream");
require("./_commonjsHelpers-DJP3_Dvh.js");
require("./index-CSlo9i6Z.js");
require("tty");
require("node-machine-id");
require("node:timers/promises");
require("./contracts-rChhtF3C.js");
require("@reflect/auth/desktop");
require("./worker-protocol-CFgWGf-A.js");
require("./unicode-CSAGP0Z8.js");
require("better-sqlite3");
require("node:child_process");
require("url");
require("stream");
require("zlib");
require("electron-updater");
require("@reflect/auth/last-login-method");
require("@reflect/auth/oauth-state");
require("@reflect/auth/session-identity");
require("module");
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
d.join(__dirname, "./icon-local-BFYQb-1F.png");
const ne = d.join(__dirname, "./icon-Fhkhgjuy.png");
d.join(__dirname, "./dock-icon-app-local-macos26-kUwzqGS1.png");
const oe = d.join(__dirname, "./dock-icon-app-macos26-2dXudhG2.png"),
  ie = d.join(__dirname, "./dock-icon-app-staging-macos26-wIlgwwLL.png"),
  Y = d.join(__dirname, "./dock-icon-base-macos26-BUYu2pDp.png"),
  ae = d.join(__dirname, "./dock-icon-base-hgakOWxZ.png"),
  se = d.join(__dirname, "./dock-icon-dev-badge-DZnr7tKV.png"),
  ce = d.join(__dirname, "./dock-icon-staging-badge-sTNXtWq5.png"),
  R = 6,
  W = 16,
  L = 40;
function ue(t, e) {
  const n = Math.ceil(t / 32) * 4,
    o = t * t * 4,
    r = Buffer.alloc(L + o + n * t);
  (r.writeUInt32LE(L, 0),
    r.writeInt32LE(t, 4),
    r.writeInt32LE(t * 2, 8),
    r.writeUInt16LE(1, 12),
    r.writeUInt16LE(32, 14),
    r.writeUInt32LE(o + n * t, 20));
  for (let i = 0; i < t; i += 1) {
    const a = i * t * 4;
    e.copy(r, L + (t - 1 - i) * t * 4, a, a + t * 4);
  }
  return r;
}
function le(t) {
  const e = Buffer.alloc(R + t.length * W);
  (e.writeUInt16LE(0, 0), e.writeUInt16LE(1, 2), e.writeUInt16LE(t.length, 4));
  const n = t.map((r) => ("png" in r ? r.png : ue(r.size, r.bgra)));
  let o = e.length;
  return (
    t.forEach(({ size: r }, i) => {
      const a = R + i * W,
        h = r >= 256 ? 0 : r;
      (e.writeUInt8(h, a),
        e.writeUInt8(h, a + 1),
        e.writeUInt8(0, a + 2),
        e.writeUInt8(0, a + 3),
        e.writeUInt16LE(1, a + 4),
        e.writeUInt16LE(32, a + 6),
        e.writeUInt32LE(n[i].length, a + 8),
        e.writeUInt32LE(o, a + 12),
        (o += n[i].length));
    }),
    Buffer.concat([e, ...n])
  );
}
const he = [16, 20, 24, 32, 40, 48, 64, 256],
  de = 6e4;
class pe {
  queue = Promise.resolve();
  shellNotify;
  show(e) {
    return (
      (this.queue = this.queue
        .then(() => this.apply(e))
        .catch((n) =>
          p.logger.warn("[DockIcon] Failed to set the taskbar icon:", n),
        )),
      this.queue
    );
  }
  async apply(e) {
    const n = await fe();
    if (n.length === 0) return;
    const o = d.join(d.dirname(process.execPath), "taskbar-icons"),
      r = e ? await we(e, o) : null,
      i = r?.path ?? process.execPath,
      a = n.filter((l) => (e ? !O(l.icon, i) : Z(l.icon, o))),
      h = r?.created ? n.filter((l) => O(l.icon, i)).map((l) => l.path) : [],
      u = [];
    for (const l of a) {
      const w = { target: l.target, icon: i, iconIndex: 0 };
      s.shell.writeShortcutLink(l.path, "update", w)
        ? (u.push(l.icon), (l.icon = i), h.push(l.path))
        : p.logger.warn(
            "[DockIcon] Could not update a Orbitra shortcut with the taskbar icon",
          );
    }
    h.length > 0 && this.loadShellNotify()?.notifyShortcutsChanged(h);
    const f = new Date();
    (await Promise.all(
      u
        .filter((l) => Z(l, o))
        .map((l) => I.promises.utimes(l, f, f).catch(() => {})),
    ),
      await ge(o, [i, ...n.map(({ icon: l }) => l)]));
  }
  loadShellNotify() {
    return (
      this.shellNotify === void 0 &&
        (this.shellNotify = te.loadFsNativeAddon(
          "notifyShortcutsChanged",
          re.getFsNativeAddonPath(),
        )),
      this.shellNotify
    );
  }
}
async function fe() {
  const t = s.app.getPath("appData"),
    e = [
      d.join(t, "Microsoft", "Windows", "Start Menu", "Programs"),
      d.join(
        t,
        "Microsoft",
        "Internet Explorer",
        "Quick Launch",
        "User Pinned",
        "TaskBar",
      ),
    ],
    n = p.processAppUserModelId(),
    o = [];
  for (const r of e) {
    const i = await I.promises.readdir(r).catch(() => []);
    for (const a of i) {
      if (d.extname(a).toLowerCase() !== ".lnk") continue;
      const h = d.join(r, a);
      try {
        const u = s.shell.readShortcutLink(h);
        if (u.appUserModelId !== n || !O(u.target, process.execPath)) continue;
        o.push({ path: h, target: u.target, icon: u.icon ?? "" });
      } catch {}
    }
  }
  return o;
}
function Ie(t) {
  const e = Buffer.from(t.toBitmap());
  for (let n = 0; n < e.length; n += 4) {
    const o = e[n + 3];
    if (!(o === 0 || o === 255))
      for (let r = 0; r < 3; r += 1)
        e[n + r] = Math.min(255, Math.round((e[n + r] * 255) / o));
  }
  return e;
}
async function we(t, e) {
  const n = he.map((u) => {
      const f = t.resize({ width: u, height: u, quality: "best" });
      return u >= 256 ? { size: u, png: f.toPNG() } : { size: u, bgra: Ie(f) };
    }),
    o = le(n);
  await I.promises.mkdir(e, { recursive: !0 });
  const r = `taskbar-${ee.createHash("sha256").update(o).digest("hex").slice(0, 16)}.ico`,
    i = d.join(e, r);
  if (
    await I.promises.access(i).then(
      () => !0,
      () => !1,
    )
  )
    return { path: i, created: !1 };
  const h = `${i}.partial`;
  return (
    await I.promises.writeFile(h, o),
    await I.promises.rename(h, i),
    { path: i, created: !0 }
  );
}
async function ge(t, e) {
  const n = await I.promises.readdir(t).catch(() => []),
    o = Date.now() - de;
  await Promise.all(
    n
      .filter((r) => r.startsWith("taskbar-") && r.endsWith(".ico"))
      .map((r) => d.join(t, r))
      .filter((r) => !e.some((i) => O(i, r)))
      .map(async (r) => {
        const i = await I.promises.stat(r).catch(() => null);
        i && i.mtimeMs < o && (await I.promises.rm(r, { force: !0 }));
      }),
  );
}
function O(t, e) {
  return d.resolve(t).toLowerCase() === d.resolve(e).toLowerCase();
}
function Z(t, e) {
  if (!t) return !1;
  const n = d.relative(e.toLowerCase(), d.resolve(t).toLowerCase());
  return n !== "" && !n.startsWith("..") && !d.isAbsolute(n);
}
const j = new pe(),
  G = 128,
  me = "dock-icon.png",
  qe = 250,
  H = ne;
function X(t, e, n, o, r) {
  const i = (n[o + 3] / 255) * r;
  if (i !== 0)
    for (let a = 0; a < 4; a += 1)
      t[e + a] = Math.round(n[o + a] * r + t[e + a] * (1 - i));
}
function B(t, e) {
  return t[e] * 255 > 200 * t[e + 3] ? t[e + 3] / 255 : 0;
}
function ye(t, e, n, o, r, i) {
  i.fill(0);
  const a = Math.floor(o),
    h = Math.floor(r),
    u = o - a,
    f = r - h;
  for (let l = 0; l < 2; l += 1) {
    const w = h + l;
    if (w < 0 || w >= n) continue;
    const m = l === 0 ? 1 - f : f;
    for (let g = 0; g < 2; g += 1) {
      const q = a + g;
      if (q < 0 || q >= e) continue;
      const C = m * (g === 0 ? 1 - u : u);
      if (C === 0) continue;
      const D = (w * e + q) * 4;
      for (let y = 0; y < 4; y += 1) i[y] += t[D + y] * C;
    }
  }
}
function U() {
  return v.isMac && Number.parseInt(process.getSystemVersion(), 10) >= 26
    ? Y
    : ae;
}
function Q() {
  return s.app.isPackaged
    ? p.isDevelopmentBuildVersion(s.app.getVersion())
      ? ce
      : null
    : se;
}
function ve(t) {
  let e = c.DOCK_ICON_SIZE,
    n = c.DOCK_ICON_SIZE,
    o = -1,
    r = -1;
  for (let i = 0; i < c.DOCK_ICON_SIZE; i += 1)
    for (let a = 0; a < c.DOCK_ICON_SIZE; a += 1)
      B(t, (i * c.DOCK_ICON_SIZE + a) * 4) !== 0 &&
        ((e = Math.min(e, a)),
        (n = Math.min(n, i)),
        (o = Math.max(o, a)),
        (r = Math.max(r, i)));
  return { x: e, y: n, width: o - e + 1, height: r - n + 1 };
}
function $(t, e, n, o) {
  const r = s.nativeImage.createFromPath(U()).toBitmap(),
    i = v.isWindows ? ve(r) : null,
    a = c.dockIconAvatarPlacement(n, c.DOCK_ICON_SIZE, e),
    h = t.getSize().width,
    u = Math.max(1, Math.min(h, Math.round(a.size))),
    f = (
      u < h ? t.resize({ width: u, height: u, quality: "best" }) : t
    ).toBitmap(),
    l = u / a.size,
    w = Math.cos(a.rotation),
    m = Math.sin(a.rotation),
    g = o ? c.hexToRgb(o) : null,
    q = new Float64Array(4),
    C = Buffer.alloc(4);
  for (let k = 0; k < c.DOCK_ICON_SIZE; k += 1)
    for (let S = 0; S < c.DOCK_ICON_SIZE; S += 1) {
      const _ = (k * c.DOCK_ICON_SIZE + S) * 4,
        E = B(r, _);
      if (E === 0) continue;
      g &&
        ((r[_] = Math.round(g[2] * E)),
        (r[_ + 1] = Math.round(g[1] * E)),
        (r[_ + 2] = Math.round(g[0] * E)),
        (r[_ + 3] = Math.round(255 * E)));
      const K = S + 0.5 - a.centerX,
        T = k + 0.5 - a.centerY,
        A = (K * w + T * m) * l + u / 2 - 0.5,
        F = (-K * m + T * w) * l + u / 2 - 0.5;
      if (
        !(A < -1 || F < -1 || A > u || F > u) &&
        (ye(f, u, u, A, F, q), q[3] !== 0)
      ) {
        for (let b = 0; b < 4; b += 1) C[b] = Math.round(q[b]);
        X(r, _, C, 0, E);
      }
    }
  _e(r);
  const D = s.nativeImage.createFromBitmap(r, {
    width: c.DOCK_ICON_SIZE,
    height: c.DOCK_ICON_SIZE,
  });
  if (!i) return D;
  const y = D.crop(i);
  return s.nativeImage.createFromBitmap(y.toBitmap(), y.getSize());
}
function _e(t) {
  const e = Q();
  if (!e) return;
  const n = s.nativeImage.createFromPath(e).toBitmap();
  for (let o = 0; o < t.length; o += 4) X(t, o, n, o, 1);
}
function N() {
  return U() !== Y
    ? H
    : s.app.isPackaged && p.isDevelopmentBuildVersion(s.app.getVersion())
      ? ie
      : oe;
}
function J(t) {
  return t.startsWith("data:image/")
    ? s.nativeImage.createFromDataURL(t)
    : t.startsWith("file://")
      ? s.nativeImage.createFromPath(new URL(t).pathname)
      : d.isAbsolute(t)
        ? s.nativeImage.createFromPath(t)
        : s.nativeImage.createEmpty();
}
async function x(t) {
  const e = t.companionImage?.trim(),
    n = c.getCompanionFacePortraitSource(e);
  if (n && d.isAbsolute(n))
    try {
      return (await I.promises.access(n), n);
    } catch {}
  return e || void 0;
}
async function Ee(t, e) {
  const n = await c.readStoredDockIconPortrait();
  if (n?.companionId === t.id) {
    const r = c.DOCK_ICON_VIEW_SCALE;
    if (n.key === c.dockIconPortraitFor(t, e).key)
      return { path: n.path, version: n.key, exact: !0, viewScale: r };
    if (n.appearanceKey === c.companionAppearanceKey(t))
      return { path: n.path, version: n.key, exact: !1, viewScale: r };
  }
  const o = await x(t);
  return o ? { path: o, version: o, exact: !1, viewScale: 1 } : void 0;
}
async function Pe(t) {
  const e = await x(t);
  return e ? { path: e, version: e, exact: !0, viewScale: 1 } : void 0;
}
function P(t) {
  return t.resize({ width: G, height: G, quality: "best" }).toDataURL();
}
function z(t) {
  return t
    .listDiscoverableCompanions()
    .filter((e) => !e.isTemporary && !e.isDraft);
}
const V = new Map();
async function Ce(t) {
  const e = {};
  for (const n of t) {
    const o = await x(n);
    if (!o) continue;
    let r = V.get(o);
    if (!r) {
      const i = J(o);
      if (i.isEmpty()) continue;
      ((r = P($(i, 1, c.DEFAULT_DOCK_ICON_DESIGN, null))), V.set(o, r));
    }
    e[n.id] = r;
  }
  return { appIcon: P(s.nativeImage.createFromPath(N())), companions: e };
}
let M = null;
function De() {
  if (M) return M;
  const t = s.nativeImage.createFromPath(U()),
    e = Buffer.from(t.toBitmap());
  for (let o = 0; o < e.length; o += 4) {
    const r = Math.round(B(e, o) * 255);
    e.fill(r, o, o + 4);
  }
  const n = Q();
  return (
    (M = {
      tile: t.toDataURL(),
      mask: s.nativeImage
        .createFromBitmap(e, {
          width: c.DOCK_ICON_SIZE,
          height: c.DOCK_ICON_SIZE,
        })
        .toDataURL(),
      badge: n ? s.nativeImage.createFromPath(n).toDataURL() : null,
      appIcon: s.nativeImage
        .createFromPath(N())
        .resize({
          width: c.DOCK_ICON_SIZE,
          height: c.DOCK_ICON_SIZE,
          quality: "best",
        })
        .toDataURL(),
    }),
    M
  );
}
class ke {
  shownKey;
  windowIcon = null;
  refreshTimer = null;
  refreshChain = Promise.resolve();
  shownPreview = null;
  start() {
    if (!(v.isMac && s.app.dock) && !v.isWindows) return;
    if (v.isWindows) {
      const r = (i) => {
        this.windowIcon && i.setIcon(this.windowIcon);
      };
      (s.app.on("browser-window-created", (i, a) => r(a)),
        p.managedWindows.onRegistered(() => {
          for (const i of s.BaseWindow.getAllWindows()) i.isDestroyed() || r(i);
        }));
    }
    const e = s.nativeImage.createFromPath(this.cachePath());
    e.isEmpty()
      ? ((this.shownKey = null),
        this.publish(P(s.nativeImage.createFromPath(N())), !1),
        v.isWindows && j.show(null))
      : (this.applyIcon(e), this.publish(P(e), !1));
    const n = () => this.scheduleRefresh();
    (c.companionManagerRegistry.onCompanionsChanged(n),
      p.dockIconSettingsEmitter.on(p.DOCK_ICON_SETTINGS_CHANGED, n),
      p.featureFlagsEmitter.on("change", n),
      p.featureFlagsEmitter.on("account-change", n));
    const o = (r) => {
      const i = r.onFocusChanged((a) => {
        a && n();
      });
      r.onClosed(i);
    };
    for (const r of p.managedWindows.all()) o(r);
    (p.managedWindows.onRegistered(o), this.scheduleRefresh());
  }
  scheduleRefresh() {
    (this.refreshTimer && clearTimeout(this.refreshTimer),
      (this.refreshTimer = setTimeout(() => {
        ((this.refreshTimer = null),
          (this.refreshChain = this.refreshChain
            .then(() => this.refresh())
            .catch((e) =>
              p.logger.warn("[DockIcon] Failed to update the Dock icon:", e),
            )));
      }, qe)));
  }
  async refresh() {
    const e = p.globalSettings.get("lastActiveProfileId"),
      n = e ? c.companionManagerRegistry.getCompanionManager(e) : void 0;
    if (!n) return;
    await n.waitForReady();
    const o = p.globalSettings.get("dockIconCompanionId"),
      r = o ? z(n).find(({ id: g }) => g === o) : void 0;
    if (!r) {
      await this.showAppIcon();
      return;
    }
    const i = c.iconDesignerAvailable(n.accountId),
      a = i ? c.currentDockIconDesign() : c.DEFAULT_DOCK_ICON_DESIGN,
      h = i ? await Ee(r, a) : await Pe(r);
    if (!h) {
      this.publish(this.shownPreview, !0);
      return;
    }
    const u = p.resolveCompanionAppearance(r.appearance, r.visualsSeed, r.id),
      f = i ? c.dockIconBackground(a, u) : null,
      l = JSON.stringify([r.id, h.version, f, a]);
    if (l === this.shownKey) {
      this.publish(this.shownPreview, !h.exact);
      return;
    }
    const w = J(h.path);
    if (w.isEmpty()) return;
    const m = $(w, h.viewScale, a, f);
    (this.applyIcon(m),
      (this.shownKey = l),
      this.publish(P(m), !h.exact),
      await I.promises.writeFile(this.cachePath(), m.toPNG()));
  }
  async showAppIcon() {
    this.shownKey !== null &&
      (this.applyIcon(null),
      (this.shownKey = null),
      this.publish(P(s.nativeImage.createFromPath(N())), !1),
      await I.promises.rm(this.cachePath(), { force: !0 }));
  }
  publish(e, n) {
    ((this.shownPreview = e),
      p.eventManager.publishIPCState(
        "companions.dockIcon",
        c.DOCK_ICON_STATE_KEY,
        { icon: e, pending: n },
      ));
  }
  applyIcon(e) {
    if (v.isMac) {
      s.app.dock?.setIcon(e ?? s.nativeImage.createEmpty());
      return;
    }
    this.windowIcon = e;
    const n = e ?? s.nativeImage.createFromPath(H);
    for (const o of s.BaseWindow.getAllWindows())
      o.isDestroyed() || o.setIcon(n);
    j.show(e);
  }
  cachePath() {
    return d.join(s.app.getPath("userData"), me);
  }
}
const Se = new ke();
exports.dockIconCompanions = z;
exports.dockIconManager = Se;
exports.getDockIconDesignerAssets = De;
exports.renderDockIconPreviews = Ce;
