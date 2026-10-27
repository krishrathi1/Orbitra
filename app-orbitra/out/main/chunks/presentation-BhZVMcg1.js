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
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "2d013083-ed3a-4ba4-89bf-0a951ca43d0e"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-2d013083-ed3a-4ba4-89bf-0a951ca43d0e"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const T = require("tldts"),
  l = require("../main-app.js"),
  g = require("./loginImport-BxVLJ6oK.js"),
  Y = require("valibot"),
  F = require("./cookieDomains-BgGsnrv8.js"),
  R = require("./automaticBrowserData-BRsdnHnQ.js");
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
require("./automaticBrowserAccess-jJ30EWyw.js");
function W(e) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const r in e)
      if (r !== "default") {
        const n = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(
          t,
          r,
          n.get ? n : { enumerable: !0, get: () => e[r] },
        );
      }
  }
  return ((t.default = e), Object.freeze(t));
}
const s = W(Y),
  K = s.object({
    name: s.pipe(s.string(), s.minLength(1), s.maxLength(200)),
    expiresInDays: s.nullable(s.pipe(s.number(), s.integer(), s.minValue(0))),
    httpOnly: s.boolean(),
  }),
  B = 80,
  L = s.pipe(s.array(K), s.maxLength(B));
s.object({
  onlyInOtherBrowser: s.pipe(L, s.minLength(1)),
  inBothBrowsers: L,
  onlyInThisBrowser: L,
});
const G = s.variant("status", [
    s.object({
      status: s.literal("ready"),
      probability: s.pipe(s.number(), s.finite(), s.minValue(0), s.maxValue(1)),
    }),
    s.object({ status: s.literal("unavailable") }),
  ]),
  N = {
    "chatgpt.com": { name: "__Secure-next-auth.session-token", prefix: !0 },
    "github.com": { name: "user_session" },
    "linkedin.com": { name: "li_at" },
    "live.com": { name: "__Host-MSAAUTHP" },
    "microsoftonline.com": { name: "ESTSAUTHPERSISTENT" },
    "notion.com": { name: "token_v2" },
    "slack.com": { name: "d" },
    "x.com": { name: "auth_token" },
  };
function _(e, t) {
  const r = N[e];
  return r
    ? t.some(({ name: n }) => (r.prefix ? n.startsWith(r.name) : n === r.name))
    : !1;
}
function j(e, t, r) {
  return N[e]
    ? _(e, t) && !_(e, r)
      ? "other-only"
      : "not-other-only"
    : "unknown-site";
}
function C(e, t) {
  return e.filter(({ expiresAt: r }) => r === null || r > t);
}
const z = 1440 * 6e4;
function $(e, t, r) {
  const n = E(e),
    o = E(t),
    i = [...n.values()].filter(({ name: a }) => !o.has(a));
  if (!i.some(({ httpOnly: a }) => a)) return null;
  const u = (a) =>
    a
      .toSorted((f, c) => Number(c.httpOnly) - Number(f.httpOnly))
      .slice(0, B)
      .map(({ name: f, httpOnly: c, expiresAt: h }) => ({
        name: f.slice(0, 200),
        httpOnly: c,
        expiresInDays: h === null ? null : Math.max(0, Math.round((h - r) / z)),
      }));
  return {
    onlyInOtherBrowser: u(i),
    inBothBrowsers: u([...n.values()].filter(({ name: a }) => o.has(a))),
    onlyInThisBrowser: u([...o.values()].filter(({ name: a }) => !n.has(a))),
  };
}
function E(e) {
  const t = new Map();
  for (const r of e) {
    if (!r.name) continue;
    const n = t.get(r.name);
    (!n || (r.httpOnly && !n.httpOnly)) && t.set(r.name, r);
  }
  return t;
}
const H = [
    "arc",
    "brave",
    "chrome",
    "comet",
    "dia",
    "edge",
    "firefox",
    "orbitra",
    "zen",
  ],
  Q = 15 * 6e4;
let O;
async function V(e) {
  (!O || Date.now() - O.loadedAt > Q) &&
    (O = {
      loadedAt: Date.now(),
      profiles: R.discoverAutomaticBrowserProfiles().catch(() => []),
      sources: new Map(),
    });
  const t = O,
    r = l.getDefaultBrowserAppName()?.toLowerCase().split(/\s+/) ?? [],
    n = (await t.profiles)
      .filter(({ browser: o }) => H.includes(o))
      .toSorted(
        (o, i) =>
          Number(r.includes(i.browser)) - Number(r.includes(o.browser)) ||
          new Date(i.lastModified).getTime() -
            new Date(o.lastModified).getTime(),
      );
  for (const o of n) {
    const i = `${o.browser}:${o.path}`;
    let u = t.sources.get(i);
    u || ((u = J(o).catch(() => null)), t.sources.set(i, u));
    const a = await u;
    if (!a) continue;
    const f = C(a.cookiesFor(e), Date.now());
    if (f.length === 0) continue;
    const c = j(e, f, []);
    if (c === "other-only" || c === "unknown-site") return a;
  }
  return null;
}
async function J(e) {
  const t = new Map();
  for (const {
    host: r,
    name: n,
    httpOnly: o,
    expiresAt: i,
  } of await R.getAutomaticCookieNames(e)) {
    const u = T.getDomain(r.replace(/^\./, ""));
    if (!u) continue;
    const a = t.get(u);
    a
      ? a.push({ name: n, httpOnly: o, expiresAt: i })
      : t.set(u, [{ name: n, httpOnly: o, expiresAt: i }]);
  }
  return { browser: e.browser, cookiesFor: (r) => t.get(r) ?? [] };
}
const X = 2880 * 6e4,
  Z = 0.6;
async function ee(e) {
  const t = Date.now();
  if (!e.setupCompleted) return { status: "none" };
  if (e.dismissed || e.setupCompletedAt === null || t - e.setupCompletedAt >= X)
    return { status: "ended" };
  if (!/^https?:\/\//.test(e.url)) return { status: "none" };
  const r = T.getDomain(e.url);
  if (!r) return { status: "none" };
  if (F.shouldIgnoreDomain(`.${r}`)) return { status: "none" };
  const n = C(await e.readCookies(r), t);
  if (_(r, n)) return { status: "none" };
  const o = await V(r);
  if (!o) return { status: "none" };
  const i = C(o.cookiesFor(r), t);
  if (i.length === 0) return { status: "none" };
  const u = j(r, i, n);
  if (u === "other-only") return { status: "offer", browser: o.browser };
  if (u === "not-other-only") return { status: "none" };
  const a = $(i, n, t);
  if (!a) return { status: "none" };
  const f = await re(a);
  return f !== null && f >= Z
    ? { status: "offer", browser: o.browser }
    : { status: "none" };
}
const S = new Map();
async function re(e) {
  const t = (i) =>
      i.map(({ name: u }) => u).toSorted().join(`
`),
    r = [t(e.onlyInOtherBrowser), t(e.inBothBrowsers), t(e.onlyInThisBrowser)]
      .join(`

`),
    n = S.get(r);
  if (n !== void 0) return n;
  let o = null;
  try {
    const i = await l.authFetch(
      `${l.config.app.apiUrl}/api/onboarding/login-import`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(7e3),
        body: JSON.stringify(e),
      },
    );
    if (!i.ok) return null;
    const u = s.parse(G, await i.json());
    if (u.status !== "ready") return null;
    o = u.probability;
  } catch {
    return null;
  }
  return (S.size >= 200 && S.clear(), S.set(r, o), o);
}
class te extends l.UIComponent {
  constructor(t, r) {
    (super(
      "login_import",
      {
        position: {
          top: 4,
          right: 0,
          minLeft: 0,
          minBottom: 4,
          relativeTo: "tab",
        },
        size: {
          width: g.LOGIN_IMPORT_CARD_LAYOUT.width,
          height: g.LOGIN_IMPORT_CARD_LAYOUT.height,
        },
        outsidePressPolicy: { kind: "ignore" },
        workspaceTransitionPolicy: { kind: "dismissOnTransition" },
      },
      t,
      r.getLayer(),
    ),
      this.detach());
  }
}
function ne(e) {
  const t = e.layers.getWindowId();
  let r = null,
    n = 0,
    o = () => {},
    i;
  function u() {
    (r?.close(), (r = null));
  }
  async function a(c) {
    const h = ++n;
    (u(), o(), i && clearTimeout(i));
    const p = e.getActivePage();
    if (e.isIncognito || !p || p.url !== c || !/^https?:\/\//.test(c))
      return !1;
    const y = T.getDomain(c),
      P = p.getLayer();
    if (!y || !P.hasWebContents()) return !1;
    const w = P.getWebContents().session.cookies,
      b = () => h === n && e.getActivePage()?.id === p.id && p.url === c,
      A = async () =>
        (await Promise.all([w.get({ url: c }), w.get({ domain: y })]))
          .flat()
          .map(({ name: m, httpOnly: k, session: U, expirationDate: v }) => ({
            name: m,
            httpOnly: k === !0,
            expiresAt: U || v === void 0 ? null : v * 1e3,
          })),
      M = (q, m) => {
        !m.httpOnly ||
          T.getDomain(m.domain?.replace(/^\./, "") ?? "") !== y ||
          (n++,
          u(),
          i && clearTimeout(i),
          (i = setTimeout(() => void a(c).catch(() => {}), 150)));
      };
    (w.on("changed", M), (o = () => w.off("changed", M)));
    const I = await ee({
      url: c,
      setupCompleted: l.globalSettings.get("hasCompletedOnboarding"),
      setupCompletedAt: l.globalSettings.get("onboardingCompletedAt"),
      dismissed:
        (l.globalSettings.get("dismissedPrompts")[g.LOGIN_IMPORT_PROMPT_KEY]
          ?.dismissCount ?? 0) > 0,
      readCookies: A,
    });
    if (
      (I.status === "ended" && b() && o(),
      I.status !== "offer" || !b() || _(y, C(await A(), Date.now())) || !b())
    )
      return !1;
    const d = new te(e.layers, p),
      D = { windowId: t, layerId: d.getLayer().id },
      x = [
        l.eventManager.handleIPCQuery(
          "profile",
          "getLoginImportCard",
          async () => ({ success: !0, browser: I.browser }),
          D,
        ),
        l.eventManager.onIPCCommand(
          "profile",
          "respondToLoginImportOffer",
          ({ command: q }) => {
            if (!(!b() || r !== d)) {
              if (q.payload.response === "dismiss") {
                const m = l.globalSettings.get("dismissedPrompts"),
                  k = m[g.LOGIN_IMPORT_PROMPT_KEY];
                l.globalSettings.set("dismissedPrompts", {
                  ...m,
                  [g.LOGIN_IMPORT_PROMPT_KEY]: {
                    dismissedAt: new Date().toISOString(),
                    dismissCount: (k?.dismissCount ?? 0) + 1,
                    dontShowAgain: !0,
                  },
                });
              } else
                l.eventManager.publishIPCSignalToLayer(
                  {
                    domain: "profile",
                    type: "openLoginImport",
                    payload: { url: g.loginImportSettingsUrl(I.browser) },
                  },
                  t,
                  "UI-LAYER",
                );
              (n++, o(), i && clearTimeout(i), u());
            }
          },
          D,
        ),
      ];
    return (
      d.once("closed", () => {
        (x.forEach((q) => q()), r === d && (r = null));
      }),
      (r = d),
      d.attach(),
      d.getIsAttached()
    );
  }
  const f = l.eventManager.handleIPCQuery(
    "profile",
    "refreshLoginImportOffer",
    async ({ query: c }) => ({ success: !0, shown: await a(c.payload.url) }),
    { windowId: t, layerId: "UI-LAYER" },
  );
  return () => {
    (n++, f(), o(), i && clearTimeout(i), u());
  };
}
exports.connectLoginImportOffers = ne;
