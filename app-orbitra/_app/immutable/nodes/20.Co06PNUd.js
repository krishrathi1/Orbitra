const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "/_app/immutable/chunks/kITZxlyy.js",
      "/_app/immutable/chunks/Ct5FWWRu.js",
      "/_app/immutable/chunks/BY3kRY6U.js",
      "/_app/immutable/chunks/CcM0Gbd1.js",
      "/_app/immutable/chunks/B26qZVl3.js",
      "/_app/immutable/chunks/C67WW66Z.js",
      "/_app/immutable/chunks/B-dksMZM.js",
      "/_app/immutable/chunks/CSELFE3-.js",
      "/_app/immutable/chunks/CMWLj2Ff.js",
      "/_app/immutable/chunks/hwDNRw8M.js",
    ]),
) => i.map((i) => d[i]);
import {
  l as pe,
  d as i,
  D as se,
  t as k,
  at as Ee,
  g as e,
  u as n,
  r as s,
  w as Z,
  E as ae,
  C as ie,
  c,
  o as ve,
  f as P,
  a0 as Ze,
  v as z,
  i as ee,
  z as me,
  a3 as Ae,
  s as oe,
  p as Cn,
  a as E,
  h as ye,
  F as Fe,
  as as nt,
  a4 as de,
  B as pt,
  j as xt,
  a9 as $t,
  an as Ut,
  aa as be,
  y as Ce,
  a8 as gt,
  J as Ke,
  G as Pe,
  k as ze,
} from "../chunks/BY3kRY6U.js";
import { o as Me } from "../chunks/CcfIpG3j.js";
import { g as On } from "../chunks/7XMPI6NB.js";
import { p as ot } from "../chunks/DxrGW2WR.js";
import Tn from "../chunks/Q0iVeaFG.js";
import { _ as jt } from "../chunks/Ct5FWWRu.js";
import { a as Re } from "../chunks/D2R-gXPi.js";
import {
  o as t,
  F as ft,
  f as bt,
  u as Wt,
  C as Xe,
  g as ht,
  h as In,
  j as Mn,
  p as En,
} from "../chunks/wSDfmzcY.js";
import { A as Pt } from "../chunks/BP8SnMME.js";
import { a as An } from "../chunks/CTcbhTPi.js";
import { r as Pn } from "../chunks/CiH_9U7y.js";
import { r as Rn } from "../chunks/DTXohiFx.js";
import { S as at } from "../chunks/8W1_ar5h.js";
import { X as Dn } from "../chunks/3LFeAx5G.js";
import { B as ke } from "../chunks/C2ZPEHK5.js";
import { a as zn, C as Nn } from "../chunks/C5uYYPC3.js";
import { D as Ht } from "../chunks/CBb6kVvd.js";
import { O as Yt } from "../chunks/B8fDtvnO.js";
import { loadOnboardingCompanionEditorCatalog as Rt } from "../chunks/UtFdZ35K.js";
import { O as qt } from "../chunks/BfaXfOe2.js";
import { O as Ln } from "../chunks/IEgNKiFF.js";
import {
  a as Vt,
  S as Kt,
  d as _t,
  j as Bn,
  O as Ge,
  s as Ne,
  k as yt,
  h as Fn,
  g as Gn,
  b as $n,
} from "../chunks/xNTfkUKT.js";
import { S as Un } from "../chunks/B42q0E2v.js";
import { c as tt } from "../chunks/9k9xcff1.js";
import { c as jn, R as Wn } from "../chunks/BeZwvZyk.js";
import { D as Hn } from "../chunks/CesPjx-n.js";
import { D as Yn } from "../chunks/BzCrd6V1.js";
import { D as qn } from "../chunks/BAD5s9c_.js";
import { a as Ve } from "../chunks/cQfgFqsf.js";
import { e as Vn } from "../chunks/IjCjKoYp.js";
var Kn = P(
  '<div class="pointer-events-none absolute inset-0 bg-white" aria-hidden="true"><div><div class="absolute inset-0"></div> <div class="content-pattern absolute inset-0 overflow-hidden svelte-ru7fao"><!></div></div> <div><div class="absolute inset-0"></div> <div class="absolute inset-x-0 bottom-0 h-[82%] overflow-hidden"><!></div></div> <div></div></div>',
);
function Xn(G, a) {
  pe(a, !0);
  const O = 900,
    w = n(
      () =>
        t.onboardingCompanionVisualsSeed ||
        t.onboardingCompanionId ||
        "default",
    ),
    g = n(() => t.companionColors.tint),
    v = n(
      () =>
        `radial-gradient(ellipse at 42% 42%, color-mix(in srgb, ${e(g)} 16%, white) 0%, color-mix(in srgb, ${e(g)} 10%, white) 58%, color-mix(in srgb, ${e(g)} 5%, white) 100%)`,
    ),
    y = [{ color: "rgba(255, 255, 255, 0.82)", weight: 100 }],
    p = [{ color: "rgba(255, 255, 255, 0.7)", weight: 100 }],
    l = n(() => t.step.phase === "story" || t.isCenteredSetup),
    f = n(() => e(l)),
    M = n(() => !e(l)),
    B = O;
  var U = Kn(),
    j = i(U);
  se(j, "", {}, { "transition-duration": `${B}ms` });
  var N = i(j);
  let d;
  var m = k(N, 2),
    D = i(m);
  (Ee(
    D,
    () => `content-${e(w)}`,
    (R) => {
      {
        let H = n(() => !e(M));
        Pt(R, {
          animationType: "wave",
          density: 32,
          get isPaused() {
            return e(H);
          },
          get colors() {
            return p;
          },
          maxDevicePixelRatio: 1.5,
          className: "h-full w-full",
        });
      }
    },
  ),
    s(m),
    s(j));
  var h = k(j, 2);
  se(h, "", {}, { "transition-duration": `${B}ms` });
  var _ = i(h);
  let W;
  var T = k(_, 2),
    b = i(T);
  (Ee(
    b,
    () => e(w),
    (R) => {
      {
        let H = n(() => !e(f));
        Pt(R, {
          animationType: "wave",
          density: 28,
          get isPaused() {
            return e(H);
          },
          get colors() {
            return y;
          },
          maxDevicePixelRatio: 1.5,
          fadeInFromTop: 0.22,
          className: "h-full w-full",
        });
      }
    },
  ),
    s(T),
    s(h));
  var C = k(h, 2);
  (se(
    C,
    "",
    {},
    {
      background: `linear-gradient(to top, rgba(255,255,255,.72), rgba(255,255,255,.22) 58%,
    transparent)`,
      "transition-duration": `${B}ms`,
    },
  ),
    s(U),
    Z(() => {
      (ae(
        j,
        1,
        ie([
          "content-background absolute inset-0",
          e(M) ? "opacity-100" : "opacity-0",
        ]),
        "svelte-ru7fao",
      ),
        (d = se(N, "", d, { background: e(v) })),
        ae(
          h,
          1,
          ie([
            "story-background absolute inset-0",
            e(f) ? "opacity-100" : "opacity-0",
          ]),
          "svelte-ru7fao",
        ),
        (W = se(_, "", W, { background: e(v) })),
        ae(
          C,
          1,
          ie([
            "story-bottom-gradient absolute inset-x-0 bottom-0 h-[52%]",
            e(f) ? "opacity-100" : "opacity-0",
          ]),
          "svelte-ru7fao",
        ));
    }),
    c(G, U),
    ve());
}
var Zn = P(
    '<div class="pointer-events-none absolute left-[23%] z-20 -translate-x-1/2 -translate-y-1/2" data-testid="onboarding-customization-companion"><!></div>',
  ),
  Jn = P("<!> Save Appearance <!>", 1),
  Qn = P(
    '<button type="button" class="font-medium underline underline-offset-4">Try again</button>',
  ),
  eo = P(
    '<div class="pointer-events-auto absolute bottom-[92px] right-8 z-[60] flex items-center gap-3 rounded-full border border-red-500/20 bg-red-50/95 px-4 py-2 text-sm text-red-700 shadow-sm backdrop-blur-xl" role="alert"><span> </span> <!></div>',
  ),
  to = P(
    '<div class="pointer-events-none absolute inset-0 z-50 overflow-hidden text-zinc-950 app-region-no-drag" data-testid="onboarding-modular-companion-editor"><!> <!> <div class="pointer-events-auto absolute bottom-[88px] left-[23%] z-30 -translate-x-1/2"><!></div> <section class="pointer-events-auto absolute bottom-[104px] right-[clamp(72px,10vw,168px)] top-[144px] flex w-[min(42vw,520px)] min-w-[440px] flex-col overflow-hidden" aria-label="Customize your companion"><!></section> <div class="pointer-events-auto fixed bottom-6 right-8 z-[70] flex items-center gap-2"><!></div> <!></div>',
  );
function no(G, a) {
  pe(a, !0);
  const O = 840,
    w = 1.25;
  Me(() => {
    a.onOpen();
  });
  var g = to(),
    v = i(g);
  ke(v, {
    type: "button",
    variant: "outline",
    size: "icon",
    tabindex: 0,
    class:
      "onboarding-primary-action pointer-events-auto absolute right-8 top-6 z-[70] size-10 rounded-full border-0 bg-white adaptive-border hover:bg-white",
    "aria-label": "Save and close appearance editor",
    get onclick() {
      return a.onSave;
    },
    get disabled() {
      return a.saving;
    },
    "data-testid": "onboarding-companion-editor-close",
    children: (m, D) => {
      Dn(m, { class: "size-5", "aria-hidden": "true" });
    },
    $$slots: { default: !0 },
  });
  var y = k(v, 2);
  {
    var p = (m) => {
      var D = Zn();
      let h;
      var _ = i(D);
      (Ht(_, {
        get seed() {
          return a.seed;
        },
        get appearance() {
          return a.appearance;
        },
        size: O,
        maxDevicePixelRatio: w,
        framing: "full-body",
        cameraZoom: 23,
        cameraPosition: [-10, 15, 30],
        cameraLookAt: [0, 12, 0],
        animation: "idle",
        get rendererOffsetY() {
          return ft;
        },
        force3D: !0,
        isWithShadowPlane: !0,
        noCrop: !0,
        isMovingHeadByCursorWhenIdle: !0,
        headTrackingIntensity: 0.45,
        forceRenderOnReady: !0,
      }),
        s(D),
        Z(
          () =>
            (h = se(D, "", h, { top: bt, width: `${O}px`, height: `${O}px` })),
        ),
        c(m, D));
    };
    z(y, (m) => {
      a.seed && m(p);
    });
  }
  var l = k(y, 2),
    f = i(l);
  (zn(f, {
    get activePersonality() {
      return a.activePersonality;
    },
    get loadingPersonality() {
      return a.loadingPersonality;
    },
    get saving() {
      return a.saving;
    },
    get canUndo() {
      return a.canGoBack;
    },
    get canRedo() {
      return a.canGoForward;
    },
    get onUndo() {
      return a.onGoBack;
    },
    get onRedo() {
      return a.onGoForward;
    },
    get onPersonalitySelect() {
      return a.onPersonalitySelect;
    },
  }),
    s(l));
  var M = k(l, 2),
    B = i(M);
  (Nn(B, {
    get appearance() {
      return a.appearance;
    },
    get onAppearanceChange() {
      return a.onAppearanceChange;
    },
    get onCatalogLoaded() {
      return a.onCatalogLoaded;
    },
  }),
    s(M));
  var U = k(M, 2),
    j = i(U);
  (ke(j, {
    type: "button",
    class:
      "onboarding-primary-action h-11 min-w-[168px] gap-1.5 rounded-full bg-black px-[22px] text-base font-medium text-white hover:bg-black hover:brightness-95 active:brightness-90",
    get onclick() {
      return a.onSave;
    },
    get disabled() {
      return a.saving;
    },
    "data-testid": "onboarding-companion-editor-save",
    children: (m, D) => {
      var h = Jn(),
        _ = ee(h);
      {
        var W = (b) => {
          at(b, { class: "size-[18px]" });
        };
        z(_, (b) => {
          a.saving && b(W);
        });
      }
      var T = k(_, 2);
      (Yt(T, { class: "size-[18px]" }), c(m, h));
    },
    $$slots: { default: !0 },
  }),
    s(U));
  var N = k(U, 2);
  {
    var d = (m) => {
      var D = eo(),
        h = i(D),
        _ = i(h, !0);
      s(h);
      var W = k(h, 2);
      {
        var T = (b) => {
          var C = Qn();
          (Ae("click", C, function (...R) {
            a.onRetry?.apply(this, R);
          }),
            c(b, C));
        };
        z(W, (b) => {
          a.onRetry && b(T);
        });
      }
      (s(D), Z(() => me(_, a.errorMessage)), c(m, D));
    };
    z(N, (m) => {
      a.errorMessage && m(d);
    });
  }
  (s(g), c(G, g), ve());
}
Ze(["click"]);
var oo = P(
  '<div data-testid="onboarding-companion-customization-dialog" class="pointer-events-none absolute inset-0 z-50"><!></div>',
);
function ao(G, a) {
  pe(a, !0);
  const O = 50,
    w = 200,
    g = 180;
  let v = oe(!1),
    y = oe(void 0),
    p = oe(Cn([])),
    l = oe(0),
    f = oe(null),
    M = oe(null);
  const B = n(
      () => t.onboardingCompanionVisualsSeed || t.onboardingCompanionId,
    ),
    U = n(() => t.companionPersonality ?? "normal"),
    j = n(() =>
      Pn(
        t.onboardingCompanionAppearance ?? void 0,
        e(B),
        t.onboardingCompanionId ?? e(B) ?? "default",
      ),
    ),
    N = n(() => e(l) > 0 && !e(v)),
    d = n(() => e(l) < e(p).length - 1 && !e(v)),
    m = n(() => t.onboardingCompanionId === null);
  function D() {
    window.setTimeout(() => {
      const u = document.querySelector(
        '[data-testid="onboarding-continue-btn"]:not(:disabled)',
      );
      if (u) {
        u.focus();
        return;
      }
      document
        .querySelector('[data-testid="onboarding-companion-name-input"]')
        ?.focus();
    });
  }
  function h() {
    e(B) &&
      (E(
        p,
        [
          {
            seed: e(B),
            appearance: e(j),
            personality: t.companionPersonality ?? "normal",
          },
        ],
        !0,
      ),
      E(l, 0),
      E(y, void 0));
  }
  function _() {
    e(p).length > 0 || h();
  }
  async function W(u) {
    (t.previewCompanionVisuals(u.seed),
      t.previewCompanionAppearance(u.appearance),
      E(v, !0),
      E(y, void 0));
    const S = e(m)
      ? await t.saveCompanionPreview()
      : await t.persistCompanionAppearance(u.appearance, u.seed);
    return (E(v, !1), S || F(), S);
  }
  function T(u) {
    (t.previewCompanionVisuals(u.seed),
      t.previewCompanionAppearance(u.appearance),
      u.personality && t.selectCompanionPersonality(u.personality));
  }
  function b(u) {
    _();
    const S = e(p)[e(l)];
    if (!S) return;
    const A = [...e(p).slice(0, e(l) + 1), { ...S, appearance: u }];
    for (; A.length > O; ) A.shift();
    (E(p, A, !0), E(l, A.length - 1), t.previewCompanionAppearance(u));
  }
  async function C(u) {
    _();
    const S = e(p)[e(l)];
    if (!S) return !1;
    const A = e(f) ?? (await Rt().catch(() => null));
    if (!A) return (F(), !1);
    E(f, A, !0);
    const $ = u ?? "normal",
      I = {
        seed: crypto.randomUUID(),
        appearance: Rn(S.appearance, A, $),
        personality: $,
      };
    return (
      E(p, [...e(p).slice(0, e(l) + 1), I], !0),
      E(l, e(p).length - 1),
      T(I),
      !0
    );
  }
  async function R(u) {
    if (!(e(M) !== null || e(v))) {
      E(M, u, !0);
      try {
        await C(u);
      } finally {
        E(M, null);
      }
    }
  }
  function H() {
    if (!e(N)) return;
    const u = e(l) - 1,
      S = e(p)[u];
    S && (E(l, u), T(S));
  }
  function r() {
    if (!e(d)) return;
    const u = e(l) + 1,
      S = e(p)[u];
    S && (E(l, u), T(S));
  }
  async function o() {
    if (e(v)) return;
    const u = e(p)[e(l)];
    !u || !(await W(u)) || (t.closeCustomization(), D());
  }
  function F() {
    E(y, "Your changes could not be saved.");
  }
  async function X() {
    (E(y, void 0), await o());
  }
  function K(u) {
    u.key !== "Escape" || !t.customizationOpen || (u.preventDefault(), o());
  }
  Me(() => {
    let u = !0;
    return (
      Rt()
        .then((S) => {
          u && E(f, S, !0);
        })
        .catch(() => {}),
      () => {
        u = !1;
      }
    );
  });
  var V = ye();
  Fe("keydown", nt, K);
  var Y = ee(V);
  {
    var Q = (u) => {
      var S = oo(),
        A = i(S);
      {
        let $ = n(() => e(v) || e(M) !== null);
        no(A, {
          get seed() {
            return e(B);
          },
          get appearance() {
            return e(j);
          },
          get saving() {
            return e($);
          },
          get activePersonality() {
            return e(U);
          },
          get loadingPersonality() {
            return e(M);
          },
          get canGoBack() {
            return e(N);
          },
          get canGoForward() {
            return e(d);
          },
          get errorMessage() {
            return e(y);
          },
          onAppearanceChange: b,
          onCatalogLoaded: (I) => E(f, I, !0),
          onGoBack: H,
          onGoForward: r,
          onPersonalitySelect: R,
          onOpen: h,
          onSave: o,
          onRetry: X,
        });
      }
      (s(S),
        de(
          1,
          S,
          () => Re,
          () => ({ duration: g, delay: w }),
        ),
        de(
          6,
          S,
          () => Re,
          () => ({ duration: w }),
        ),
        c(u, S));
    };
    z(Y, (u) => {
      t.customizationOpen && u(Q);
    });
  }
  (c(G, V), ve());
}
var Dt = P('<div class="[grid-area:1/1]"><!></div>'),
  ro = P(
    '<div class="flex items-start gap-2"><div class="grid" aria-live="polite"><!></div> <!></div>',
  );
function io(G, a) {
  pe(a, !0);
  const O = 6e3,
    w = Vt + Kt + 120;
  let g = pt(a, "animate", 3, !0),
    v = pt(a, "onSpeakingChange", 3, () => {}),
    y = pt(a, "onEntered", 3, () => {}),
    p = oe(0);
  const l = n(() => (g() ? e(p) : Math.max(0, a.messages.length - 1)));
  let f,
    M,
    B = oe(!1),
    U = !1;
  function j() {
    e(B) ||
      (E(B, !0), M !== void 0 && (window.clearTimeout(M), (M = void 0)), y()());
  }
  function N() {
    const b = a.messages[e(p)];
    if (!b) {
      v()(!1);
      return;
    }
    v()(!0);
    const C = a.messages.length > 1 ? _t(b) : Math.max(O, Bn(b));
    f = window.setTimeout(() => {
      if (U) {
        if (e(p) < a.messages.length - 1) {
          (E(p, e(p) + 1), N());
          return;
        }
        v()(!1);
      }
    }, C);
  }
  Me(
    () => (
      (U = !0),
      (M = window.setTimeout(j, w)),
      g() && N(),
      () => {
        ((U = !1),
          g() && v()(!1),
          f !== void 0 && window.clearTimeout(f),
          M !== void 0 && window.clearTimeout(M));
      }
    ),
  );
  var d = ro(),
    m = i(d),
    D = i(m);
  {
    var h = (b) => {
        var C = ye(),
          R = ee(C);
        (Ee(
          R,
          () => e(p),
          (H) => {
            var r = Dt(),
              o = i(r);
            {
              let F = n(() => a.messages[e(l)] ?? "");
              Ge(o, {
                get message() {
                  return e(F);
                },
                size: "guide",
                testId: "onboarding-guide-message",
                fitContent: !0,
                get leadingIcon() {
                  return a.leadingIcon;
                },
              });
            }
            (s(r),
              Fe("introend", r, j),
              de(5, r, () => Ne),
              de(6, r, () => yt),
              c(H, r));
          },
        ),
          c(b, C));
      },
      _ = (b) => {
        var C = Dt(),
          R = i(C);
        {
          let H = n(() => a.messages[e(l)] ?? "");
          Ge(R, {
            get message() {
              return e(H);
            },
            size: "guide",
            testId: "onboarding-guide-message",
            fitContent: !0,
            get leadingIcon() {
              return a.leadingIcon;
            },
          });
        }
        (s(C),
          Fe("introend", C, j),
          de(5, C, () => Ne),
          de(6, C, () => yt),
          c(b, C));
      };
    z(D, (b) => {
      g() ? b(h) : b(_, -1);
    });
  }
  s(m);
  var W = k(m, 2);
  {
    var T = (b) => {
      var C = ye(),
        R = ee(C);
      (xt(R, () => a.afterEntered ?? $t), c(b, C));
    };
    z(W, (b) => {
      e(B) && b(T);
    });
  }
  (s(d), c(G, d), ve());
}
const so = 2e3,
  Xt = 4200,
  Zt = 1800,
  Jt = Xt + Zt,
  lo = 400,
  Qt = 500,
  co = 3e3,
  en = Qt + co,
  uo = 1500,
  tn = en + uo,
  nn = 1e3,
  mo = tn + nn / 2,
  vt = {
    logo: { path: "sounds/onboarding/logo-shimmer.mp3", gain: 0.8 },
    spotlight: { path: "sounds/onboarding/spotlight-on.mp3", gain: 0.7 },
    spotlightHum: { path: "sounds/onboarding/spotlight-hum.mp3", gain: 0.8 },
    lightUp: { path: "sounds/onboarding/light-up.mp3", gain: 0.45 },
  },
  zt = 0.4;
function po() {
  const G = new AudioContext(),
    a = G.createGain();
  a.connect(G.destination);
  let O = !1;
  const w = new Map();
  for (const [g, { path: v }] of Object.entries(vt))
    w.set(
      g,
      fetch(`/${v}`, { cache: "force-cache" })
        .then((y) => (y.ok ? y.arrayBuffer() : null))
        .then((y) => (y ? G.decodeAudioData(y) : null))
        .catch(() => null),
    );
  return {
    play(g, v = 0) {
      if (O) return;
      G.state === "suspended" && G.resume().catch(() => {});
      const y = G.currentTime;
      w.get(g)?.then((p) => {
        const l = G.currentTime - y;
        if (O || !p || l >= p.duration) return;
        const f = G.createGain(),
          M = v - l;
        if (M > 0) {
          const j = Float32Array.from(
            { length: 32 },
            (N, d) => vt[g].gain * (d / 31) ** 2,
          );
          f.gain.setValueCurveAtTime(j, G.currentTime, M);
        } else f.gain.value = vt[g].gain;
        f.connect(a);
        const B = G.createBufferSource();
        ((B.buffer = p), B.connect(f), B.start(0, l));
      });
    },
    stop() {
      O ||
        ((O = !0),
        a.gain.setTargetAtTime(0, G.currentTime, zt / 3),
        window.setTimeout(
          () => void G.close().catch(() => {}),
          zt * 1e3 + 600,
        ));
    },
  };
}
var vo = P(
  '<div class="absolute inset-0 grid place-items-center"><div class="title-logo svelte-1red5zf"><!></div></div>',
);
function go(G, a) {
  function O(p) {
    const l = Math.min(1, Math.max(0, p));
    return l * l * (3 - 2 * l);
  }
  function w(p, l) {
    let f = 0,
      M = null;
    function B(j) {
      M ??= j;
      const N = j - M,
        d = O(N / so),
        m = O((N - Xt) / Zt);
      ((p.style.opacity = String(d * (1 - m))),
        N < Jt && (f = requestAnimationFrame(B)));
    }
    function U(j) {
      !j || f !== 0 || (f = requestAnimationFrame(B));
    }
    return (U(l), { update: U, destroy: () => cancelAnimationFrame(f) });
  }
  var g = vo(),
    v = i(g),
    y = i(v);
  (Un(y, { width: 380, height: 73, markColor: "#fff" }),
    s(v),
    Ut(
      v,
      (p, l) => w?.(p, l),
      () => a.running,
    ),
    s(g),
    c(G, g));
}
var fo = P(
    '<div class="spotlight-backdrop absolute inset-0 svelte-9xxaip"></div> <!> <div><div class="spotlight-lamp svelte-9xxaip"></div> <div class="spotlight-cone svelte-9xxaip"><div class="spotlight-cone-shape svelte-9xxaip"></div></div> <div class="spotlight-cone spotlight-haze svelte-9xxaip"><div class="spotlight-cone-shape spotlight-haze-shape svelte-9xxaip"><span class="spotlight-fog spotlight-fog-a svelte-9xxaip"></span> <span class="spotlight-fog spotlight-fog-b svelte-9xxaip"></span></div></div> <div class="spotlight-floor svelte-9xxaip"></div></div> <div class="spotlight-bloom svelte-9xxaip"></div>',
    1,
  ),
  bo = P(
    '<div><div class="spotlight-cone spotlight-haze spotlight-floor-mist svelte-9xxaip"><div class="spotlight-cone-shape spotlight-haze-shape svelte-9xxaip"><span class="spotlight-fog spotlight-fog-c svelte-9xxaip"></span></div></div> <canvas class="spotlight-dust absolute inset-0 size-full svelte-9xxaip"></canvas></div>',
  ),
  ho = P('<div aria-hidden="true"><!></div>');
function Nt(G, a) {
  pe(a, !0);
  const O = 35,
    w = "255 230 160";
  let g = oe(void 0);
  const v = n(() => a.phase === "lit" || a.phase === "fading"),
    y = n(() => a.companionSize * 0.1),
    p = n(() => a.companionSize * 0.66);
  function l(d) {
    const m = d.getContext("2d");
    if (!m) return () => {};
    const D = Array.from({ length: O }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: 1.2 + Math.random() * 2.2,
      outline: Array.from(
        { length: 5 + Math.floor(Math.random() * 3) },
        () => 0.45 + Math.random() * 0.55,
      ),
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 1.2,
      driftX: 0.01 + Math.random() * 0.012,
      driftY: -0.002 - Math.random() * 0.006,
      phase: Math.random() * Math.PI * 2,
      twinkle: 0.6 + Math.random() * 1.6,
    }));
    let h = 0,
      _ = performance.now();
    function W(T) {
      if (!m) return;
      const b = Math.min(0.05, (T - _) / 1e3);
      _ = T;
      const C = window.devicePixelRatio || 1,
        R = d.clientWidth,
        H = d.clientHeight;
      ((d.width !== Math.round(R * C) || d.height !== Math.round(H * C)) &&
        ((d.width = Math.round(R * C)), (d.height = Math.round(H * C))),
        m.setTransform(C, 0, 0, C, 0, 0),
        m.clearRect(0, 0, R, H),
        (m.globalCompositeOperation = "lighter"));
      const r = R / 2;
      for (const o of D) {
        ((o.phase += b * o.twinkle),
          (o.angle += b * o.spin),
          (o.x += (o.driftX + Math.sin(o.phase * 0.7) * 0.0012) * b),
          (o.y += o.driftY * b),
          o.y < 0 && (o.y += 1),
          o.x < 0 && (o.x += 1),
          o.x > 1 && (o.x -= 1));
        const F = o.y * a.floorY,
          X = F / a.floorY,
          K = (e(y) + (e(p) - e(y)) * X) / 2,
          V = r + (o.x - 0.5) * 2 * K * 1.15,
          Y = 1 - Math.min(1, Math.abs(V - r) / K),
          u =
            Math.max(0, Y) ** 0.8 *
            (0.35 + 0.65 * Math.sin(Math.PI * X)) *
            (0.62 + 0.3 * Math.sin(o.phase));
        u <= 0.01 ||
          (m.beginPath(),
          (m.fillStyle = `rgb(${w.replaceAll(" ", ", ")}, ${u})`),
          o.outline.forEach((S, A) => {
            const $ = o.angle + (A / o.outline.length) * Math.PI * 2,
              I = V + Math.cos($) * o.radius * S,
              q = F + Math.sin($) * o.radius * S * 0.7;
            A === 0 ? m.moveTo(I, q) : m.lineTo(I, q);
          }),
          m.closePath(),
          m.fill());
      }
      h = requestAnimationFrame(W);
    }
    return ((h = requestAnimationFrame(W)), () => cancelAnimationFrame(h));
  }
  Me(() => {
    if (e(g)) return l(e(g));
  });
  var f = ho();
  let M, B;
  var U = i(f);
  {
    var j = (d) => {
        var m = fo(),
          D = k(ee(m), 2);
        {
          var h = (W) => {
            {
              let T = n(() => a.phase !== "waiting");
              go(W, {
                get running() {
                  return e(T);
                },
              });
            }
          };
          z(D, (W) => {
            (a.phase === "waiting" ||
              a.phase === "logo" ||
              a.phase === "dark" ||
              a.phase === "anticipation") &&
              W(h);
          });
        }
        var _ = k(D, 2);
        (Ce(2),
          Z(() =>
            ae(
              _,
              1,
              ie([
                "spotlight-light absolute inset-0",
                e(v) && "spotlight-light-on",
              ]),
              "svelte-9xxaip",
            ),
          ),
          c(d, m));
      },
      N = (d) => {
        var m = bo(),
          D = k(i(m), 2);
        (gt(
          D,
          (h) => E(g, h),
          () => e(g),
        ),
          s(m),
          Z(() =>
            ae(
              m,
              1,
              ie([
                "spotlight-light absolute inset-0",
                e(v) && "spotlight-light-on",
              ]),
              "svelte-9xxaip",
            ),
          ),
          c(d, m));
      };
    z(U, (d) => {
      a.layer === "back" ? d(j) : d(N, -1);
    });
  }
  (s(f),
    Z(() => {
      ((M = ae(
        f,
        1,
        ie([
          "spotlight-stage pointer-events-none absolute inset-0",
          `spotlight-stage-${a.layer}`,
        ]),
        "svelte-9xxaip",
        M,
        {
          "spotlight-stage-fading":
            a.phase === "fading" || a.phase === "complete",
        },
      )),
        be(
          f,
          "data-testid",
          a.layer === "back" ? "onboarding-spotlight-stage" : void 0,
        ),
        be(f, "data-spotlight-phase", a.layer === "back" ? a.phase : void 0),
        (B = se(f, "", B, {
          "--light-rgb": w,
          "--floor-y": `${a.floorY}px`,
          "--companion-size": `${a.companionSize}px`,
          "--cone-top-width": `${e(y)}px`,
          "--cone-bottom-width": `${e(p)}px`,
          "--fade-to-light-ms": `${nn}ms`,
        })));
    }),
    c(G, f),
    ve());
}
var Lt = P('<div class="absolute inset-0 svelte-178sktm"><!></div>'),
  _o = P("<span><!></span>"),
  yo = P(
    '<div class="intro-greeting absolute svelte-178sktm"><div class="svelte-178sktm"><div class="svelte-178sktm"><!></div></div></div>',
  ),
  xo = P(
    '<div class="pointer-events-auto absolute inset-x-8 top-1/2 z-10 mx-auto max-w-sm rounded-3xl bg-white p-6 text-center shadow-sm svelte-178sktm" role="alert"><p class="svelte-178sktm"> </p> <button class="mt-4 rounded-full bg-black px-5 py-2 text-white svelte-178sktm">Try again</button> <!></div>',
  ),
  wo = P('<div class="svelte-178sktm"><!></div>'),
  So = P(
    '<aside data-testid="onboarding-companion-guide" class="pointer-events-none absolute top-[88px] transition-[left] duration-[2400ms] ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transition-none app-region-no-drag svelte-178sktm" aria-live="polite"><div><!></div></aside>',
  ),
  ko = P(
    '<div class="pointer-events-none absolute inset-0 z-20 overflow-hidden svelte-178sktm"><!> <button type="button" data-testid="onboarding-customize-companion" data-preserve-opacity="" aria-label="Customize your companion"><span><span class="absolute inset-0 block opacity-100 transition-opacity duration-[220ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:opacity-50 motion-reduce:transition-none svelte-178sktm"><span data-companion-motion-layer=""><span data-testid="onboarding-intro-lockup"><!></span></span></span></span></button> <!> <!> <!> <!></div> <!>',
    1,
  );
function Co(G, a) {
  pe(a, !0);
  const O = 104,
    w = 0.288,
    g = 3e4,
    v = 4e3,
    y = 3,
    p = 30,
    l = 700,
    f = "hsl(44, 18%, 34%)",
    M = 1.25,
    B = [
      "models/asset-manifest.json",
      "models/3D/3d-config-data.json",
      "models/3D/animation-events.json",
      "models/hat-config.json",
      "models/3D/bodies/body_0.glb",
    ],
    U = 0.45,
    j = Wt();
  let N = oe(void 0),
    d = oe(820),
    m = oe(1),
    D = oe(0),
    h,
    _ = oe("waiting"),
    W = oe(!1),
    T = oe(void 0),
    b = oe(!1),
    C = !1,
    R = oe("intro"),
    H = 0,
    r = [],
    o = null;
  const F = n(() => t.companionPlacement === "center"),
    X = n(() => t.companionPlacement === "story"),
    K = n(() => t.companionVisible),
    V = n(
      () =>
        t.companionPlacement === "guide" &&
        t.companionVisible &&
        !t.customizationOpen &&
        !t.receivedSharedCompanion &&
        !t.isNavigating,
    ),
    Y = n(() => t.onboardingCompanionVisualsSeed || t.onboardingCompanionId),
    Q = n(() => t.receptionOpen || t.customizationOpen),
    u = n(() => t.step.id === "welcome" && !t.companionIntroComplete),
    S = n(() =>
      e(u) && e(_) !== "complete"
        ? e(R)
        : (t.step.id === "welcome" && t.welcomeCompanionThumbsUpPlaying) ||
            t.reactionThumbsUpPlaying
          ? "yes_sir"
          : t.waitingForResearch
            ? "thinking"
            : "idle",
    ),
    A = n(() => e(_) === "lit" || e(_) === "fading"),
    $ = n(() => e(u) && (e(_) === "anticipation" || e(_) === "lit")),
    I = n(() => (e(u) && e(R) === "intro") || !e(K) || e(Q)),
    q = n(() => !e(u) || e(A)),
    J = n(() => t.step.id === "welcome" && !t.companionIntroComplete),
    re = n(() => e(D) * 0.49 + e(d) * w + ft),
    ce = n(() => e(u) || !e(J) || e(b)),
    te = n(() => O / e(d));
  Ke(() => {
    const x = e(te);
    if ((E(m, 1), t.companionPlacement !== "guide")) return;
    const L = window.setTimeout(() => {
      E(m, x * 1.4);
    }, Xe);
    return () => window.clearTimeout(L);
  });
  const he = n(() => 7.5 / e(te)),
    _e = n(() => (t.guideCompanionExpanded ? 164 : 144)),
    xe = n(() => t.step.id === "launch" && e(F)),
    we = n(() =>
      e(J)
        ? {
            left: "50%",
            top: bt,
            transform: "translate(-50%, -50%)",
            transformOrigin: "center",
          }
        : e(F) || e(X)
          ? {
              left: "23%",
              top: bt,
              transform: "translate(-50%, -50%) translate3d(0, 0, 0) scale(1)",
              transformOrigin: "center",
            }
          : {
              left: "32px",
              top: "60px",
              transform: `scale(${e(te)})`,
              transformOrigin: "top left",
            },
    ),
    Se = n(() => e(X) || e(F)),
    ge = n(() => (e(Se) ? ft : 0)),
    De = n(() =>
      e(xe)
        ? { transform: "translate3d(46px, 0, 0) scale(1)", blur: "8px" }
        : e(F)
          ? {
              transform: "translate3d(14px, 12px, 0) scale(0.97)",
              blur: "10px",
            }
          : e(X)
            ? {
                transform: "translate3d(12px, 14px, 0) scale(0.99)",
                blur: "3px",
              }
            : {
                transform: `translate3d(${-14 / e(te)}px, ${16 / e(te)}px, 0) scale(0.95)`,
                blur: "16px",
              },
    ),
    fe = [-10, 15, 30],
    Le = n(() => (e(Se) ? [0, 12, 0] : [0, 18, 0])),
    $e = n(() => (e(Se) ? 23 : e(he))),
    Ue = n(() =>
      e(J)
        ? "translate3d(0, 0, 0) scale(1)"
        : e(K)
          ? `translate3d(0, 0, 0) scale(${t.guideCompanionExpanded && !e(X) && !e(F) ? 1.4 : 1})`
          : e(De).transform,
    ),
    rt = n(() => (t.companionPlacement === "guide" ? "top left" : "center")),
    it = n(() =>
      e(J) || t.companionMotionPaused
        ? "transition-none"
        : e(K)
          ? e(xe)
            ? "onboarding-launch-companion-entrance"
            : t.companionPlacement === "guide"
              ? t.guideCompanionScaleTransitionEnabled
                ? "transition-[opacity,filter,transform] duration-[2400ms] ease-[cubic-bezier(.16,1,.3,1)]"
                : "transition-[opacity,filter] duration-[720ms] ease-[cubic-bezier(.22,1,.36,1)]"
              : "transition-[opacity,filter,transform] duration-[720ms] ease-[cubic-bezier(.22,1,.36,1)]"
          : "transition-[opacity,filter,transform] duration-[180ms] ease-out",
    );
  function wt() {
    e(N) &&
      (E(D, e(N).clientHeight, !0),
      E(d, Math.min(840, Math.max(700, e(N).clientHeight * 1.24)), !0));
  }
  function on(x, L) {
    if (
      (t.setGuideMessageSpeaking(x, L),
      h !== void 0 && (window.clearTimeout(h), (h = void 0)),
      L)
    ) {
      t.enableGuideCompanionScaleTransition(x);
      return;
    }
    h = window.setTimeout(() => {
      (t.collapseGuideCompanion(x), (h = void 0));
    }, Fn);
  }
  function St() {
    for (const x of r) window.clearTimeout(x);
    r = [];
  }
  function Be(x, L) {
    r.push(window.setTimeout(L, x));
  }
  function Je() {
    if (e(_) === "complete") return;
    (St(),
      E(_, "complete"),
      e(W) && an(),
      performance.mark("onboarding-intro-complete"));
    const x = o;
    (x && window.setTimeout(() => x.stop(), v),
      t.notifyCompanionIntroComplete());
  }
  async function an() {
    const x = performance.now(),
      L = e(T)?.querySelector('[data-testid="onboarding-spotlight-greeting"]'),
      ne = await sn();
    if (e(T) && L && ne) {
      const le = L.getBoundingClientRect(),
        ue = rn(ne),
        Te = Math.max(0, Xe - (performance.now() - x));
      await e(T)
        .animate(
          [
            { transform: "translate3d(0, 0, 0)" },
            {
              transform: `translate3d(${ue.left - le.left}px, ${ue.top - le.top}px, 0)`,
            },
          ],
          { duration: Te, easing: ht, fill: "forwards" },
        )
        .finished.catch(() => {});
    }
    (t.landWelcomeGreeting(), E(W, !1));
  }
  function rn(x) {
    const L = x.getBoundingClientRect(),
      ne = x.closest("[data-welcome-stage-reveal]");
    if (!ne) return L;
    const { m41: le, m42: ue } = new DOMMatrix(getComputedStyle(ne).transform);
    return { left: L.left - le, top: L.top - ue };
  }
  async function sn() {
    for (let x = 0; x < p; x++) {
      const L = document.querySelector(
        '[data-testid="onboarding-story-message-welcome"]',
      );
      if (L) return L;
      await new Promise((ne) => requestAnimationFrame(ne));
    }
    return null;
  }
  function dn() {
    C ||
      ((C = !0),
      (o = po()),
      E(_, "logo"),
      performance.mark("onboarding-intro-start"),
      o.play("logo", y),
      Be(Jt, () => {
        (E(_, "dark"), st());
      }));
  }
  function st() {
    if (e(_) !== "dark" || !e(b) || !t.companionRendererReady) return;
    E(_, "anticipation");
    const x = l - (performance.now() - H);
    Be(Math.max(lo, x), ln);
  }
  function ln() {
    (E(_, "lit"),
      o?.play("spotlight"),
      o?.play("spotlightHum"),
      performance.mark("onboarding-companion-reveal"),
      Be(Qt, () => {
        E(R, "bow");
      }),
      Be(en, () => {
        (E(R, "idle"), E(W, !0), t.carryWelcomeGreeting());
      }),
      Be(tn, () => {
        (E(_, "fading"), o?.play("lightUp"));
      }),
      Be(mo, Je));
  }
  function cn() {
    (E(b, !0),
      e(R) === "intro" && (E(R, "idle"), (H = performance.now())),
      st());
  }
  function un() {
    if ((t.notifyCompanionReady(), !e(u))) {
      Je();
      return;
    }
    st();
  }
  function mn() {
    e(S) !== "intro" &&
      e(S) === "yes_sir" &&
      (t.finishWelcomeCompanionThumbsUp(), t.finishReactionThumbsUp());
  }
  function pn() {
    !e(u) ||
      !e(Y) ||
      e(A) ||
      e(_) === "complete" ||
      (console.error(
        `[Onboarding] Companion intro was not ready within ${g}ms; continuing onboarding`,
      ),
      E(b, !0),
      t.notifyCompanionReady(),
      Je());
  }
  (Ke(() => {
    if (!e(u) || !e(Y) || e(A) || e(_) === "complete") return;
    const x = window.setTimeout(pn, g);
    return () => window.clearTimeout(x);
  }),
    Ke(() => {
      if (!(!e(u) || C)) {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          ((C = !0), Je());
          return;
        }
        jt(
          () => import("../chunks/kITZxlyy.js"),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
          import.meta.url,
        );
        for (const x of B)
          fetch(An(x), { cache: "force-cache" }).catch(() => {});
        dn();
      }
    }),
    Me(() => {
      wt();
      const x = new ResizeObserver(wt);
      return (
        e(N) && x.observe(e(N)),
        () => {
          (x.disconnect(),
            h !== void 0 && window.clearTimeout(h),
            St(),
            E(_, "complete"),
            o?.stop());
        }
      );
    }));
  var kt = ko(),
    Qe = ee(kt),
    Ct = i(Qe);
  {
    var vn = (x) => {
      var L = Lt(),
        ne = i(L);
      (Nt(ne, {
        layer: "back",
        get phase() {
          return e(_);
        },
        get companionSize() {
          return e(d);
        },
        get floorY() {
          return e(re);
        },
      }),
        s(L),
        de(
          2,
          L,
          () => Re,
          () => ({ duration: 500 }),
        ),
        c(x, L));
    };
    z(Ct, (x) => {
      e(J) && x(vn);
    });
  }
  var Oe = k(Ct, 2);
  let Ot;
  var dt = i(Oe),
    Tt = i(dt),
    je = i(Tt);
  let It;
  var We = i(je),
    gn = i(We);
  {
    var fn = (x) => {
      var L = _o(),
        ne = i(L);
      (Ee(
        ne,
        () => t.onboardingCompanionId ?? e(Y),
        (le) => {
          {
            let ue = n(() => t.onboardingCompanionAppearance ?? void 0),
              Te = n(() => M * e(m)),
              Ie = n(() => (e(Se) ? "full-body" : "bust")),
              He = n(() => (e(S) === "yes_sir" ? 0.85 : 1)),
              lt = n(() => (e($) ? f : void 0)),
              ct = n(() => (e($) ? "spotlight" : "studio")),
              Ye = n(() => (e(u) && e(J) ? "modular" : void 0)),
              et = n(() => !e(J)),
              ut = n(() => t.step.id === "welcome" && e(_) !== "complete");
            Ht(le, {
              get seed() {
                return e(Y);
              },
              get appearance() {
                return e(ue);
              },
              get size() {
                return e(d);
              },
              get maxDevicePixelRatio() {
                return e(Te);
              },
              get framing() {
                return e(Ie);
              },
              get cameraZoom() {
                return e($e);
              },
              get cameraPosition() {
                return fe;
              },
              get cameraLookAt() {
                return e(Le);
              },
              get animation() {
                return e(S);
              },
              get animationSpeed() {
                return e(He);
              },
              get rendererOffsetY() {
                return e(ge);
              },
              force3D: !0,
              get isWithShadowPlane() {
                return e(Se);
              },
              get shadowColor() {
                return e(lt);
              },
              get lighting() {
                return e(ct);
              },
              get renderer() {
                return e(Ye);
              },
              get noCrop() {
                return e(Se);
              },
              get isPaused() {
                return e(I);
              },
              get isMovingHeadByCursorWhenIdle() {
                return e(et);
              },
              get forceForwardGaze() {
                return e(ut);
              },
              headTrackingIntensity: U,
              onReady: un,
              onIntroFrameReady: cn,
              onAnimationFinished: mn,
              forceRenderOnReady: !0,
            });
          }
        },
      ),
        s(L),
        Z(() =>
          ae(
            L,
            1,
            ie([
              "intro-companion-stage absolute inset-0 block will-change-[opacity]",
              e(q) ? "intro-companion-visible" : void 0,
              e(u) && e(A) ? "intro-companion-spotlit" : void 0,
              e($) ? "intro-companion-warm" : void 0,
            ]),
            "svelte-178sktm",
          ),
        ),
        c(x, L));
    };
    z(gn, (x) => {
      e(Y) && (e(u) || t.onboardingCompanionAppearance) && x(fn);
    });
  }
  (s(We), s(je), s(Tt), s(dt), s(Oe));
  var Mt = k(Oe, 2);
  {
    var bn = (x) => {
      var L = Lt(),
        ne = i(L);
      (Nt(ne, {
        layer: "front",
        get phase() {
          return e(_);
        },
        get companionSize() {
          return e(d);
        },
        get floorY() {
          return e(re);
        },
      }),
        s(L),
        de(
          2,
          L,
          () => Re,
          () => ({ duration: 500 }),
        ),
        c(x, L));
    };
    z(Mt, (x) => {
      e(J) && x(bn);
    });
  }
  var Et = k(Mt, 2);
  {
    var hn = (x) => {
      var L = yo();
      let ne;
      var le = i(L),
        ue = i(le),
        Te = i(ue);
      (Ge(Te, {
        message: "Welcome to Orbitra",
        testId: "onboarding-spotlight-greeting",
        fitContent: !0,
        tailSide: "left",
        nowrap: !0,
        showOrbitraWordmark: !0,
      }),
        s(ue),
        gt(
          ue,
          (Ie) => E(T, Ie),
          () => e(T),
        ),
        s(le),
        s(L),
        Z(
          () =>
            (ne = se(L, "", ne, {
              left: `calc(50% + ${e(d) * 0.16}px)`,
              top: `${e(re) - e(d) * 0.56}px`,
            })),
        ),
        de(5, le, () => Ne),
        c(x, L));
    };
    z(Et, (x) => {
      e(W) && x(hn);
    });
  }
  var At = k(Et, 2);
  {
    var _n = (x) => {
      var L = xo(),
        ne = i(L),
        le = i(ne, !0);
      s(ne);
      var ue = k(ne, 2),
        Te = k(ue, 2);
      (qt(Te, { class: "mt-3 block w-full text-sm text-muted-foreground" }),
        s(L),
        Z(() => me(le, t.companionPreviewError)),
        Ae("click", ue, () => void t.prepareCompanionPreview().catch(() => {})),
        c(x, L));
    };
    z(At, (x) => {
      t.companionPreviewError && !t.restoredAccount && x(_n);
    });
  }
  var yn = k(At, 2);
  {
    var xn = (x) => {
      var L = So();
      let ne;
      var le = i(L),
        ue = i(le);
      (Ee(
        ue,
        () => t.step.id,
        (Te) => {
          const Ie = n(() => t.step.id),
            He = n(() => j.forStep(e(Ie))?.info);
          {
            const lt = (Ye) => {
              var et = ye(),
                ut = ee(et);
              {
                var Sn = (mt) => {
                  var qe = wo(),
                    kn = i(qe);
                  (Ln(kn, {
                    label: "View more",
                    get testId() {
                      return e(He).testId;
                    },
                    get onclick() {
                      return e(He).handler;
                    },
                  }),
                    s(qe),
                    de(
                      5,
                      qe,
                      () => Ne,
                      () => ({ from: "bottom" }),
                    ),
                    de(6, qe, () => yt),
                    c(mt, qe));
                };
                z(ut, (mt) => {
                  e(He) && mt(Sn);
                });
              }
              c(Ye, et);
            };
            let ct = n(() =>
              e(Ie) === "browser-import" ? "shield-check" : void 0,
            );
            io(Te, {
              get messages() {
                return t.guideMessages;
              },
              get animate() {
                return t.guideMessageShouldAnimate;
              },
              get leadingIcon() {
                return e(ct);
              },
              onSpeakingChange: (Ye) => on(e(Ie), Ye),
              onEntered: () => t.revealGuideContent(e(Ie)),
              afterEntered: lt,
              $$slots: { afterEntered: !0 },
            });
          }
        },
      ),
        s(le),
        s(L),
        Z(() => {
          ((ne = se(L, "", ne, { left: `${e(_e)}px` })),
            ae(
              le,
              1,
              ie([
                "transition-opacity duration-[160ms] ease-out motion-reduce:transition-none",
                t.customizationOpen ? "opacity-0" : "opacity-100 delay-[200ms]",
              ]),
              "svelte-178sktm",
            ),
            be(le, "aria-hidden", t.customizationOpen));
        }),
        c(x, L));
    };
    z(yn, (x) => {
      t.companionPlacement === "guide" &&
        e(K) &&
        !t.guidePageExiting &&
        t.guideMessageShouldPlay &&
        t.guideMessages.length > 0 &&
        x(xn);
    });
  }
  (s(Qe),
    gt(
      Qe,
      (x) => E(N, x),
      () => e(N),
    ));
  var wn = k(Qe, 2);
  (Ee(
    wn,
    () => t.onboardingCompanionId,
    (x) => {
      ao(x, {});
    },
  ),
    Z(() => {
      (ae(
        Oe,
        1,
        ie([
          "group absolute m-0 border-0 bg-transparent p-0 motion-reduce:transition-none",
          "will-change-transform",
          e(J) || t.companionMotionPaused
            ? "companion-placement-static"
            : "companion-placement-motion",
          e(V)
            ? "pointer-events-auto rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            : "pointer-events-none",
        ]),
        "svelte-178sktm",
      ),
        (Oe.disabled = !e(V)),
        be(Oe, "tabindex", e(V) ? 0 : -1),
        be(Oe, "aria-hidden", !e(V)),
        (Ot = se(Oe, "", Ot, {
          width: `${e(d)}px`,
          height: `${e(d)}px`,
          left: e(we).left,
          top: e(we).top,
          transform: e(we).transform,
          "transform-origin": e(we).transformOrigin,
          "--companion-story-move-easing": ht,
          "--companion-story-move-ms": `${Xe}ms`,
        })),
        ae(
          dt,
          1,
          ie([
            "absolute inset-0 block will-change-[opacity] transition-opacity duration-[160ms] ease-out motion-reduce:transition-none",
            e(Q) ? "opacity-0" : "opacity-100",
          ]),
          "svelte-178sktm",
        ),
        ae(
          je,
          1,
          ie([
            "absolute inset-0 block will-change-[opacity,filter,transform] motion-reduce:transition-none",
            e(it),
            e(K) ? "opacity-100" : "opacity-0",
          ]),
          "svelte-178sktm",
        ),
        be(je, "data-companion-intro-phase", e(_)),
        (It = se(je, "", It, {
          transform: e(Ue),
          "transform-origin": e(rt),
          filter: e(K) ? "blur(0)" : `blur(${e(De).blur})`,
        })),
        be(We, "data-intro-frame-ready", e(b)),
        be(We, "data-intro-reveal-pending", e(J)),
        ae(
          We,
          1,
          ie([
            "absolute inset-0 block will-change-[opacity] motion-reduce:transition-none",
            e(u)
              ? "transition-none"
              : "transition-opacity duration-500 ease-out",
            e(ce) ? "opacity-100" : "opacity-0",
          ]),
          "svelte-178sktm",
        ));
    }),
    Ae("click", Oe, () => t.openCustomization()),
    c(G, kt),
    ve());
}
Ze(["click"]);
const Bt = (G, a = $t) => {
  var O = To(),
    w = i(O);
  let g;
  var v = i(w);
  (Yt(v, { class: "size-[18px]" }), s(w));
  var y = k(w, 2);
  {
    var p = (l) => {
      var f = Oo(),
        M = i(f);
      (at(M, { class: "size-[18px]" }), s(f), c(l, f));
    };
    z(y, (l) => {
      a() && l(p);
    });
  }
  (s(O),
    Z(
      () =>
        (g = ae(w, 1, "absolute inset-0 svelte-rqxlrj", null, g, {
          "onboarding-continue-arrow-loading": a(),
        })),
    ),
    c(G, O));
};
var Oo = P(
    '<span class="onboarding-continue-loader absolute inset-0 svelte-rqxlrj"><!></span>',
  ),
  To = P(
    '<span class="relative inline-flex size-[18px] shrink-0 svelte-rqxlrj" aria-hidden="true"><span><!></span> <!></span>',
  ),
  Ft = P("<!> ", 1),
  Gt = P(" <!>", 1),
  Io = P(
    '<p role="status" data-testid="onboarding-handoff-wait-message" class="onboarding-handoff-wait-message absolute top-full left-1/2 mt-1 -translate-x-1/2 whitespace-nowrap text-xs text-muted-foreground svelte-rqxlrj">Still setting up...</p>',
  ),
  Mo = P('<div class="relative flex svelte-rqxlrj"><!> <!></div>'),
  Eo = P(
    '<div class="ml-auto flex items-center gap-2 svelte-rqxlrj"><!> <!></div>',
  ),
  Ao = P("<!> <!>", 1),
  Po = P(
    '<!> <div class="ml-auto flex items-center gap-2 svelte-rqxlrj"><!> <!></div>',
    1,
  ),
  Ro = P(
    '<footer data-testid="onboarding-footer"><div class="absolute inset-x-8 bottom-6 flex items-center gap-2 svelte-rqxlrj"><!></div></footer>',
  );
function Do(G, a) {
  pe(a, !0);
  const O = Wt(),
    w = n(() => O.forStep(t.step.id)),
    g = n(() => t.step.phase === "story"),
    v = n(() => e(g) && t.step.id !== "welcome"),
    y = n(() => (e(g) ? e(w)?.back : void 0)),
    p = n(() => (e(g) ? e(w)?.primary : void 0)),
    l = n(() => (e(g) ? e(w)?.secondary : void 0)),
    f = n(
      () =>
        !!e(p) ||
        (!e(w) &&
          !["authentication", "team", "companion-import"].includes(t.step.id)),
    ),
    M = n(() => e(p)?.label() ?? "Continue"),
    B = n(() => e(p)?.loading?.() ?? !1),
    U = n(
      () =>
        t.isNavigating ||
        (e(p) ? (e(p).disabled?.() ?? !1) || e(B) : !t.storyContinueReady),
    ),
    j =
      "onboarding-primary-action h-11 min-w-[116px] gap-1.5 rounded-full bg-black px-[22px] text-base font-medium text-white hover:bg-black hover:brightness-95 active:brightness-90";
  function N() {
    if (!(!e(f) || e(U))) {
      if (e(p)) {
        e(p).handler();
        return;
      }
      t.next();
    }
  }
  function d(r) {
    return r instanceof Element
      ? !!r.closest(
          'input:not([type="radio"]):not([type="checkbox"]), textarea, select, [contenteditable]:not([contenteditable="false"]), [role="dialog"], [role="alertdialog"], [role="menu"], [role="listbox"], [role="combobox"]',
        )
      : !1;
  }
  function m(r) {
    if (
      r.detail === 0 ||
      !(r.target instanceof Element) ||
      r.target.closest('[role="dialog"], [role="alertdialog"]')
    )
      return;
    const o = r.target.closest(
      'button, a, summary, input[type="radio"], input[type="checkbox"], [role="button"]',
    );
    o && document.activeElement === o && o.blur();
  }
  function D() {
    if (t.customizationOpen || t.isNavigating) return !1;
    if (e(g)) {
      const o = e(w)?.primary;
      return o
        ? o.disabled?.() || o.loading?.()
          ? !1
          : (o.handler(), !0)
        : !e(f) || !t.storyContinueReady
          ? !1
          : (t.next(), !0);
    }
    const r = e(w)?.primary;
    return r ? (r.disabled?.() || r.loading?.() ? !1 : (r.handler(), !0)) : !1;
  }
  function h(r) {
    r.key !== "Enter" ||
      r.defaultPrevented ||
      r.isComposing ||
      r.metaKey ||
      r.ctrlKey ||
      r.altKey ||
      r.shiftKey ||
      t.customizationOpen ||
      d(r.target) ||
      (r.preventDefault(), r.repeat || D());
  }
  Me(
    () => (
      window.addEventListener("keydown", h),
      window.addEventListener("click", m),
      () => {
        (window.removeEventListener("keydown", h),
          window.removeEventListener("click", m));
      }
    ),
  );
  var _ = Ro();
  let W, T;
  var b = i(_),
    C = i(b);
  {
    var R = (r) => {
        var o = Ao(),
          F = ee(o);
        {
          var X = (Y) => {
            {
              let Q = n(() => e(y)?.testId ?? "onboarding-back-btn"),
                u = n(() => e(y)?.handler ?? (() => t.back())),
                S = n(() => t.isNavigating || (e(w)?.back?.disabled?.() ?? !1));
              ke(Y, {
                get "data-testid"() {
                  return e(Q);
                },
                variant: "ghost",
                get onclick() {
                  return e(u);
                },
                get disabled() {
                  return e(S);
                },
                class:
                  "onboarding-primary-action h-11 rounded-full bg-transparent px-[18px] text-base font-medium hover:bg-transparent",
                children: (A, $) => {
                  Ce();
                  var I = Pe();
                  (Z((q) => me(I, q), [() => e(y)?.label() ?? "Back"]),
                    c(A, I));
                },
                $$slots: { default: !0 },
              });
            }
          };
          z(F, (Y) => {
            e(v) && Y(X);
          });
        }
        var K = k(F, 2);
        {
          var V = (Y) => {
            var Q = Eo(),
              u = i(Q);
            {
              var S = (I) => {
                const q = n(() => e(l).icon);
                {
                  let J = n(() => e(l).testId ?? "onboarding-secondary-btn"),
                    re = n(
                      () =>
                        t.isNavigating ||
                        (e(l).disabled?.() ?? !1) ||
                        (e(l).loading?.() ?? !1),
                    ),
                    ce = n(() =>
                      tt(
                        "onboarding-primary-action h-11 rounded-full border-0 bg-background/80 px-[20px] text-base font-medium adaptive-border hover:bg-background",
                        e(l).className?.(),
                      ),
                    );
                  ke(I, {
                    get "data-testid"() {
                      return e(J);
                    },
                    variant: "outline",
                    get onclick() {
                      return e(l).handler;
                    },
                    get disabled() {
                      return e(re);
                    },
                    get class() {
                      return e(ce);
                    },
                    children: (te, he) => {
                      var _e = Ft(),
                        xe = ee(_e);
                      {
                        var we = (fe) => {
                            at(fe, { class: "size-[18px]" });
                          },
                          Se = n(() => e(l).loading?.()),
                          ge = (fe) => {
                            var Le = ye(),
                              $e = ee(Le);
                            {
                              let Ue = n(() =>
                                tt("size-[18px]", e(l).iconClass?.()),
                              );
                              ze(
                                $e,
                                () => e(q),
                                (rt, it) => {
                                  it(rt, {
                                    get class() {
                                      return e(Ue);
                                    },
                                    "aria-hidden": "true",
                                  });
                                },
                              );
                            }
                            c(fe, Le);
                          };
                        z(xe, (fe) => {
                          e(Se) ? fe(we) : e(q) && fe(ge, 1);
                        });
                      }
                      var De = k(xe);
                      (Z((fe) => me(De, ` ${fe ?? ""}`), [() => e(l).label()]),
                        c(te, _e));
                    },
                    $$slots: { default: !0 },
                  });
                }
              };
              z(u, (I) => {
                e(l) && I(S);
              });
            }
            var A = k(u, 2);
            {
              var $ = (I) => {
                var q = Mo(),
                  J = i(q);
                ke(J, {
                  "data-testid": "onboarding-continue-btn",
                  onclick: N,
                  get disabled() {
                    return e(U);
                  },
                  get "aria-busy"() {
                    return e(B);
                  },
                  class: j,
                  children: (te, he) => {
                    Ce();
                    var _e = Gt(),
                      xe = ee(_e),
                      we = k(xe);
                    (Bt(we, () => e(B)),
                      Z(() => me(xe, `${e(M) ?? ""} `)),
                      c(te, _e));
                  },
                  $$slots: { default: !0 },
                });
                var re = k(J, 2);
                {
                  var ce = (te) => {
                    var he = Io();
                    c(te, he);
                  };
                  z(re, (te) => {
                    t.step.id === "launch" && e(B) && te(ce);
                  });
                }
                (s(q), c(I, q));
              };
              z(A, (I) => {
                e(f) && I($);
              });
            }
            (s(Q), c(Y, Q));
          };
          z(K, (Y) => {
            (e(f) || e(l)) && Y(V);
          });
        }
        c(r, o);
      },
      H = (r) => {
        var o = Po(),
          F = ee(o);
        {
          var X = (S) => {
            const A = n(() => e(w).back);
            {
              let $ = n(() => e(A).testId ?? "onboarding-back-btn"),
                I = n(() => t.isNavigating || (e(A).disabled?.() ?? !1));
              ke(S, {
                get "data-testid"() {
                  return e($);
                },
                variant: "ghost",
                get onclick() {
                  return e(A).handler;
                },
                get disabled() {
                  return e(I);
                },
                class:
                  "onboarding-primary-action h-11 rounded-full bg-transparent px-[18px] text-base font-medium hover:bg-transparent",
                children: (q, J) => {
                  Ce();
                  var re = Pe();
                  (Z((ce) => me(re, ce), [() => e(A).label()]), c(q, re));
                },
                $$slots: { default: !0 },
              });
            }
          };
          z(F, (S) => {
            e(w).back && S(X);
          });
        }
        var K = k(F, 2),
          V = i(K);
        {
          var Y = (S) => {
            const A = n(() => e(w).secondary),
              $ = n(() => e(A).icon);
            {
              let I = n(() => e(A).testId ?? "onboarding-secondary-btn"),
                q = n(
                  () =>
                    t.isNavigating ||
                    (e(A).disabled?.() ?? !1) ||
                    (e(A).loading?.() ?? !1),
                ),
                J = n(() =>
                  tt(
                    "onboarding-primary-action h-11 rounded-full border-0 px-[20px] text-base font-medium adaptive-border",
                    e(A).className?.(),
                  ),
                );
              ke(S, {
                get "data-testid"() {
                  return e(I);
                },
                variant: "outline",
                get onclick() {
                  return e(A).handler;
                },
                get disabled() {
                  return e(q);
                },
                get class() {
                  return e(J);
                },
                children: (re, ce) => {
                  var te = Ft(),
                    he = ee(te);
                  {
                    var _e = (ge) => {
                        at(ge, { class: "size-[18px]" });
                      },
                      xe = n(() => e(A).loading?.()),
                      we = (ge) => {
                        var De = ye(),
                          fe = ee(De);
                        {
                          let Le = n(() =>
                            tt("size-[18px]", e(A).iconClass?.()),
                          );
                          ze(
                            fe,
                            () => e($),
                            ($e, Ue) => {
                              Ue($e, {
                                get class() {
                                  return e(Le);
                                },
                                "aria-hidden": "true",
                              });
                            },
                          );
                        }
                        c(ge, De);
                      };
                    z(he, (ge) => {
                      e(xe) ? ge(_e) : e($) && ge(we, 1);
                    });
                  }
                  var Se = k(he);
                  (Z((ge) => me(Se, ` ${ge ?? ""}`), [() => e(A).label()]),
                    c(re, te));
                },
                $$slots: { default: !0 },
              });
            }
          };
          z(V, (S) => {
            e(w).secondary && S(Y);
          });
        }
        var Q = k(V, 2);
        {
          var u = (S) => {
            const A = n(() => e(w).primary),
              $ = n(() => e(A).label()),
              I = n(() => e(A).loading?.() ?? !1);
            {
              let q = n(() => e(A).testId ?? "onboarding-continue-btn"),
                J = n(
                  () => t.isNavigating || (e(A).disabled?.() ?? !1) || e(I),
                );
              ke(S, {
                get "data-testid"() {
                  return e(q);
                },
                get onclick() {
                  return e(A).handler;
                },
                get disabled() {
                  return e(J);
                },
                get "aria-busy"() {
                  return e(I);
                },
                class:
                  "onboarding-primary-action h-11 min-w-[116px] gap-1.5 rounded-full px-[22px] text-base font-medium",
                children: (re, ce) => {
                  Ce();
                  var te = Gt(),
                    he = ee(te),
                    _e = k(he);
                  (Bt(_e, () => e(I)),
                    Z(() => me(he, `${e($) ?? ""} `)),
                    c(re, te));
                },
                $$slots: { default: !0 },
              });
            }
          };
          z(Q, (S) => {
            e(w).primary && S(u);
          });
        }
        (s(K), c(r, o));
      };
    z(C, (r) => {
      e(g) ? r(R) : e(w) && r(H, 1);
    });
  }
  (s(b),
    s(_),
    Z(() => {
      ((W = ae(
        _,
        1,
        "relative z-10 h-[76px] shrink-0 transition-opacity duration-200 motion-reduce:transition-none app-region-no-drag svelte-rqxlrj",
        null,
        W,
        {
          "onboarding-team-footer": t.step.id === "team",
          "pointer-events-none": t.customizationOpen,
          "opacity-0": t.customizationOpen,
        },
      )),
        (T = se(_, "", T, {
          "transition-delay": t.customizationOpen ? "0ms" : "200ms",
        })));
    }),
    c(G, _),
    ve());
}
var zo = P("<!> <!>", 1),
  No = P(
    '<!> <p class="py-2 text-sm leading-relaxed text-muted-foreground"> </p> <!>',
    1,
  ),
  Lo = P(
    '<button type="button" class="h-8 shrink-0 rounded-full px-3 text-sm font-medium text-muted-foreground hover:bg-black/5 hover:text-foreground disabled:pointer-events-none" data-testid="onboarding-skip-all">Skip all</button> <!>',
    1,
  );
function Bo(G, a) {
  pe(a, !0);
  let O = oe(!1);
  const w = n(() => t.companionName?.trim() || "your companion");
  function g(l) {
    l !== e(O) && (E(O, l, !0), t.trackSkipAll(l ? "opened" : "cancelled"));
  }
  var v = Lo(),
    y = ee(v),
    p = k(y, 2);
  (ze(
    p,
    () => Wn,
    (l, f) => {
      f(l, {
        get open() {
          return e(O);
        },
        onOpenChange: g,
        children: (M, B) => {
          var U = ye(),
            j = ee(U);
          (ze(
            j,
            () => Hn,
            (N, d) => {
              d(N, {
                theme: "light",
                contentFadeDuration: 120,
                class:
                  "max-w-md rounded-3xl p-6 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] sm:rounded-3xl",
                overlayClass: "bg-background/60 backdrop-blur-sm",
                closeClass:
                  "right-6 top-6 inline-flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground opacity-100 transition-none hover:bg-muted-foreground/15 hover:text-foreground",
                "data-testid": "onboarding-skip-all-dialog",
                children: (m, D) => {
                  var h = No(),
                    _ = ee(h);
                  ze(
                    _,
                    () => Yn,
                    (C, R) => {
                      R(C, {
                        class: "pb-2 pr-9 text-left",
                        children: (H, r) => {
                          var o = ye(),
                            F = ee(o);
                          (ze(
                            F,
                            () => jn,
                            (X, K) => {
                              K(X, {
                                children: (V, Y) => {
                                  Ce();
                                  var Q = Pe("Skip the rest of setup?");
                                  c(V, Q);
                                },
                                $$slots: { default: !0 },
                              });
                            },
                          ),
                            c(H, o));
                        },
                        $$slots: { default: !0 },
                      });
                    },
                  );
                  var W = k(_, 2),
                    T = i(W);
                  s(W);
                  var b = k(W, 2);
                  (ze(
                    b,
                    () => qn,
                    (C, R) => {
                      R(C, {
                        class: "flex-row items-center justify-end gap-2 pt-2",
                        children: (H, r) => {
                          var o = zo(),
                            F = ee(o);
                          ke(F, {
                            variant: "outline",
                            class:
                              "rounded-full border-0 adaptive-border hover:bg-muted/50",
                            onclick: () => {
                              (E(O, !1), t.skipRemainingSetup());
                            },
                            "data-testid": "onboarding-skip-all-confirm",
                            children: (K, V) => {
                              Ce();
                              var Y = Pe("Skip setup");
                              c(K, Y);
                            },
                            $$slots: { default: !0 },
                          });
                          var X = k(F, 2);
                          (ke(X, {
                            class: "rounded-full",
                            onclick: () => g(!1),
                            "data-testid": "onboarding-skip-all-cancel",
                            children: (K, V) => {
                              Ce();
                              var Y = Pe("Continue setup");
                              c(K, Y);
                            },
                            $$slots: { default: !0 },
                          }),
                            c(H, o));
                        },
                        $$slots: { default: !0 },
                      });
                    },
                  ),
                    Z(() =>
                      me(
                        T,
                        `Answering a few more questions makes ${e(w) ?? ""} a lot more helpful from day one. It only takes
      about 5 minutes.`,
                      ),
                    ),
                    c(m, h));
                },
                $$slots: { default: !0 },
              });
            },
          ),
            c(M, U));
        },
        $$slots: { default: !0 },
      });
    },
  ),
    Z(() => (y.disabled = t.skippingRemainingSetup)),
    Ae("click", y, () => g(!0)),
    c(G, v),
    ve());
}
Ze(["click"]);
var Fo = P(
  '<div class="flex h-8 w-full items-center"><div class="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-white shadow-[inset_0_1px_2px_rgb(0_0_0/0.06)]" aria-label="Onboarding progress" aria-valuemin="0" aria-valuemax="100" role="progressbar" data-testid="onboarding-progress"><div class="h-full rounded-full transition-[width] duration-500 ease-out motion-reduce:transition-none"></div></div></div>',
);
function Go(G, a) {
  pe(a, !0);
  const O = n(() => t.companionColors.tint);
  var w = Fo(),
    g = i(w),
    v = i(g);
  let y;
  (s(g),
    s(w),
    Z(
      (p) => {
        (be(g, "aria-valuenow", p),
          (y = se(v, "", y, {
            width: `${t.progress.value}%`,
            "background-color": e(O),
          })));
      },
      [() => Math.round(t.progress.value)],
    ),
    c(G, w),
    ve());
}
var $o = P("<div><!></div>"),
  Uo = P(
    '<div class="absolute left-0 top-[calc(100%+12px)] flex w-max max-w-[700px] flex-col items-start gap-3"><div><!></div> <!></div>',
  ),
  jo = P(
    '<div class="absolute inset-y-0 right-0 grid w-[min(58vw,780px)] -translate-x-4 grid-rows-[190px_250px] content-center gap-6 pb-3 pr-[clamp(20px,4vw,60px)]"><div class="relative h-[190px] w-full"><div class="absolute inset-0 flex items-center"><div><div><!> <!></div></div></div></div> <div class="relative h-[250px] w-full" aria-hidden="true"></div></div>',
  ),
  Wo = P(
    '<div class="pointer-events-none absolute inset-0 z-10" aria-live="polite"><!></div>',
  );
function Ho(G, a) {
  pe(a, !0);
  const O = "Welcome to Orbitra",
    w = `I'm your personal companion.
My life's mission is to work alongside you
and help you achieve your biggest goals.`,
    g = "Let's get you signed in!",
    v = 250,
    y = _t(O) - v,
    p = 800,
    l = 700,
    f = 700,
    M = Vt + Kt / 2;
  let B = oe(!1),
    U = oe(1),
    j = oe(!1);
  const N = n(() => t.step.id),
    d = n(() => `color-mix(in srgb, ${t.companionColors.tint} 82%, black)`);
  function m(T) {
    return t.welcomeGreetingCarried ? { duration: 0 } : Ne();
  }
  function D(T) {
    const b = Ne(T, { from: "bottom" });
    return { ...b, duration: b.duration === 0 ? 0 : l };
  }
  Me(() => {
    let T = !1,
      b,
      C,
      R,
      H;
    function r() {
      T ||
        e(N) !== "welcome" ||
        (E(j, !0),
        E(U, 3),
        (H = window.setTimeout(
          () => {
            T ||
              e(N) !== "welcome" ||
              (t.requestWelcomeCompanionThumbsUp(),
              t.setStoryContinueReady(!0));
          },
          Math.max(Gn(g), p, l),
        )));
    }
    function o() {
      T ||
        e(N) !== "welcome" ||
        (E(U, 2), (R = window.setTimeout(r, _t(w) - v)));
    }
    t.setStoryContinueReady(!1);
    function F() {
      T ||
        (b = window.requestAnimationFrame(() => {
          T || e(N) !== "welcome" || (E(B, !0), (R = window.setTimeout(o, y)));
        }));
    }
    return (
      (async () => {
        if (
          T ||
          (e(N) === "welcome" &&
            (await t.waitForCompanionRenderer(),
            await t.waitForCompanionIntro()),
          T)
        )
          return;
        if (e(N) === "welcome" && t.welcomeGreetingCarried) {
          (E(B, !0), (R = window.setTimeout(o, Xe * 0.6)));
          return;
        }
        const K = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (e(N) === "welcome" && !K) {
          C = window.setTimeout(F, f);
          return;
        }
        F();
      })(),
      () => {
        ((T = !0),
          b !== void 0 && window.cancelAnimationFrame(b),
          C !== void 0 && window.clearTimeout(C),
          R !== void 0 && window.clearTimeout(R),
          H !== void 0 && window.clearTimeout(H));
      }
    );
  });
  var h = Wo(),
    _ = i(h);
  {
    var W = (T) => {
      var b = jo(),
        C = i(b),
        R = i(C),
        H = i(R);
      let r;
      var o = i(H),
        F = i(o);
      {
        let V = n(() => e(U) === 1);
        Ge(F, {
          message: O,
          testId: "onboarding-story-message-welcome",
          fitContent: !0,
          tailSide: "left",
          nowrap: !0,
          get tailVisible() {
            return e(V);
          },
          showOrbitraWordmark: !0,
        });
      }
      var X = k(F, 2);
      {
        var K = (V) => {
          var Y = Uo(),
            Q = i(Y),
            u = i(Q);
          {
            let $ = n(() => e(U) === 2);
            Ge(u, {
              message: w,
              testId: "onboarding-story-message-welcome-introduction",
              fitContent: !0,
              tailSide: "left",
              get tailVisible() {
                return e($);
              },
              accentPhrase: "companion",
              get accentColor() {
                return e(d);
              },
              accentIcon: "people",
            });
          }
          s(Q);
          var S = k(Q, 2);
          {
            var A = ($) => {
              var I = $o(),
                q = i(I);
              (Ge(q, {
                message: g,
                testId: "onboarding-story-message-welcome-sign-in",
                fitContent: !0,
                tailSide: "left",
                get textRevealStartDelayMs() {
                  return M;
                },
              }),
                s(I),
                de(5, I, () => D),
                c($, I));
            };
            z(S, ($) => {
              e(U) >= 3 && $(A);
            });
          }
          (s(Y), de(5, Q, () => Ne), c(V, Y));
        };
        z(X, (V) => {
          e(U) >= 2 && V(K);
        });
      }
      (s(o),
        s(H),
        s(R),
        s(C),
        Ce(2),
        s(b),
        Z(() => {
          ((r = ae(H, 1, "relative w-fit max-w-full", null, r, {
            "opacity-0": t.welcomeGreetingCarried && !t.welcomeGreetingLanded,
          })),
            ae(
              o,
              1,
              ie([
                "welcome-message-stack relative w-fit max-w-full",
                e(j) && "welcome-message-stack-promoted",
              ]),
              "svelte-1tk4kue",
            ));
        }),
        de(5, H, () => m),
        de(6, H, () => $n),
        c(T, b));
    };
    z(_, (T) => {
      e(B) && e(N) === "welcome" && T(W);
    });
  }
  (s(h), c(G, h), ve());
}
var Yo = P(
    '<div class="absolute inset-x-0 top-5 z-40 flex items-center gap-4 px-6 app-region-no-drag"><div class="min-w-0 flex-1"><!></div> <!></div>',
  ),
  qo = P("<div><!></div>"),
  Vo = P(
    '<div data-testid="onboarding-frame"><div class="onboarding-background-layer pointer-events-none absolute inset-0 bg-white"><div aria-hidden="true"><!></div></div> <div class="account-content-layer relative flex h-full min-h-0 w-full flex-col"><!> <!> <main data-testid="onboarding-scroll-region" data-welcome-stage-reveal=""><div><!> <!></div></main> <div><div class="absolute inset-0"><!></div></div></div></div>',
  );
function Ko(G, a) {
  pe(a, !0);
  const O = 180,
    w = 340,
    g = 100,
    v = n(() => t.step),
    y = n(() => e(v).id !== "welcome" || t.companionIntroComplete),
    p = n(() => e(v).contentLayout === "story"),
    l = n(() => e(v).contentLayout === "centered"),
    f = n(() => e(p) || e(l)),
    M = n(() => e(v).id === "browser-import"),
    B = In("browser-import"),
    U = n(() => t.stepIndex > B && e(v).id !== "launch"),
    j = n(() => e(v).phase !== "story" && e(v).id !== "authentication"),
    N = n(
      () =>
        ot.url.pathname === `/onboarding/${e(v).id}` &&
        t.guideContentPendingStepId !== e(v).id,
    ),
    d = n(() => e(N) && !t.guidePageExiting),
    m = n(() => (e(v).contentLayout === "wide" ? "max-w-[800px]" : "max-w-lg"));
  function D($, I) {
    let q;
    function J(re) {
      if ((q !== void 0 && window.clearTimeout(q), !re.ready)) return;
      const ce = re.directional ? w : O;
      q = window.setTimeout(() => {
        t.step.id === re.stepId && t.finishNavigation();
      }, ce + g);
    }
    return (
      J(I),
      {
        update: J,
        destroy: () => {
          q !== void 0 && window.clearTimeout(q);
        },
      }
    );
  }
  Me(() => {
    jt(
      () => import("../chunks/kITZxlyy.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      import.meta.url,
    );
  });
  var h = Vo();
  ae(
    h,
    1,
    ie([
      "onboarding-frame relative isolate flex h-full min-h-0 w-full flex-col overflow-hidden bg-transparent antialiased",
    ]),
    "svelte-156jjk9",
  );
  let _;
  var W = i(h),
    T = i(W),
    b = i(T);
  {
    var C = ($) => {
      Xn($, {});
    };
    z(b, ($) => {
      e(y) && $(C);
    });
  }
  (s(T), s(W));
  var R = k(W, 2),
    H = i(R);
  Co(H, {});
  var r = k(H, 2);
  {
    var o = ($) => {
      var I = Yo(),
        q = i(I),
        J = i(q);
      (Go(J, {}), s(q));
      var re = k(q, 2);
      {
        var ce = (te) => {
          Bo(te, {});
        };
        z(re, (te) => {
          e(U) && te(ce);
        });
      }
      (s(I),
        de(
          1,
          I,
          () => Re,
          () => ({ duration: 220 }),
        ),
        c($, I));
    };
    z(r, ($) => {
      e(v).id !== "welcome" &&
        e(v).id !== "authentication" &&
        e(y) &&
        !t.isLoading &&
        !t.customizationOpen &&
        $(o);
    });
  }
  var F = k(r, 2),
    X = i(F);
  let K;
  var V = i(X);
  {
    var Y = ($) => {
      var I = ye(),
        q = ee(I);
      (Ee(
        q,
        () => e(v).id,
        (J) => {
          Ho(J, {});
        },
      ),
        c($, I));
    };
    z(V, ($) => {
      e(p) && $(Y);
    });
  }
  var Q = k(V, 2);
  (Ee(
    Q,
    () => ot.url.pathname,
    ($) => {
      var I = qo();
      let q;
      var J = i(I);
      (xt(J, () => a.children),
        s(I),
        Ut(
          I,
          (re, ce) => D?.(re, ce),
          () => ({ stepId: e(v).id, ready: e(d), directional: e(j) }),
        ),
        Z(() => {
          (be(I, "data-testid", `onboarding-content-${e(v).id}`),
            be(I, "aria-hidden", !e(d)),
            ae(
              I,
              1,
              ie([
                "onboarding-content-frame min-w-0",
                e(j)
                  ? "onboarding-content-frame-directional"
                  : "onboarding-content-frame-fade",
                e(j) && t.direction === "backward"
                  ? "onboarding-content-frame-backward"
                  : "",
                e(d) ? "onboarding-content-frame-ready" : "",
                t.guidePageExiting
                  ? "onboarding-content-frame-guide-exiting"
                  : "",
                e(f) ? "absolute inset-0 h-full w-full" : "w-full",
                e(M) ? "h-full min-h-0" : "",
              ]),
              "svelte-156jjk9",
            ),
            (q = se(I, "", q, {
              "grid-area": e(f) ? void 0 : "1 / 1",
              "align-self": e(f) ? void 0 : "safe center",
            })));
        }),
        c($, I));
    },
  ),
    s(X),
    s(F));
  var u = k(F, 2),
    S = i(u),
    A = i(S);
  (Do(A, {}),
    s(S),
    s(u),
    s(R),
    s(h),
    Z(() => {
      (be(h, "aria-busy", t.isLoading),
        (_ = se(h, "", _, {
          "--companion-story-move-distance": `${Mn}vw`,
          "--companion-story-move-easing": ht,
          "--companion-story-move-ms": `${Xe}ms`,
        })),
        ae(
          T,
          1,
          ie([
            "welcome-stage-background-reveal absolute inset-0",
            e(y) ? "welcome-stage-background-reveal-ready" : void 0,
          ]),
          "svelte-156jjk9",
        ),
        ae(
          F,
          1,
          ie([
            "welcome-stage-reveal relative min-h-0 flex-1 overscroll-contain transition-opacity duration-200 motion-reduce:transition-none",
            e(y) ? "welcome-stage-reveal-ready" : "pointer-events-none",
            t.customizationOpen ? "pointer-events-none" : void 0,
            e(f)
              ? "z-30 flex overflow-hidden px-8 pb-8 pt-12"
              : "z-10 flex px-8 pb-8 pt-20",
            !e(f) && (e(M) ? "overflow-hidden" : "overflow-y-auto"),
          ]),
          "svelte-156jjk9",
        ),
        ae(
          X,
          1,
          ie([
            "mx-auto my-auto w-full transition-opacity duration-[160ms] ease-out motion-reduce:transition-none",
            t.customizationOpen ? "opacity-0" : "opacity-100 delay-[200ms]",
            e(f) ? "relative h-full max-w-none" : `grid min-w-0 ${e(m)}`,
            !e(f) && (e(M) ? "h-full min-h-0" : "min-h-full"),
          ]),
          "svelte-156jjk9",
        ),
        (K = se(X, "", K, {
          "grid-template": e(f) ? void 0 : "minmax(0, 1fr) / 1fr",
        })),
        ae(
          u,
          1,
          ie([
            "welcome-stage-reveal relative z-30 h-[76px] shrink-0",
            e(y) ? "welcome-stage-reveal-ready" : "pointer-events-none",
          ]),
          "svelte-156jjk9",
        ));
    }),
    de(
      1,
      X,
      () => Re,
      () => ({ duration: 300 }),
    ),
    de(
      1,
      S,
      () => Re,
      () => ({ duration: 300 }),
    ),
    c(G, h),
    ve());
}
var Xo = P(
    '<p class="mt-2 text-sm text-muted-foreground">Try again to continue with your saved progress.</p>',
  ),
  Zo = P(
    '<button type="button" class="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90" data-testid="onboarding-access-contact-support">Contact support</button>',
  ),
  Jo = P(
    '<button type="button" class="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground" data-testid="onboarding-exit-setup">Skip setup and open Orbitra</button>',
  ),
  Qo = P('<p class="text-sm text-destructive"> </p>'),
  ea = P(
    '<section class="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto bg-background px-8 py-12 app-region-no-drag" role="alert" data-testid="onboarding-setup-failure"><div class="w-full max-w-md text-center"><h1 class="text-2xl font-medium text-balance" data-testid="onboarding-setup-failure-title"> </h1> <p class="mt-4 text-sm leading-relaxed text-muted-foreground"> </p> <!> <div class="mt-8 flex flex-col items-center gap-4"><!> <button type="button" data-testid="onboarding-retry-research"><!></button> <!> <!></div></div></section>',
  );
function ta(G, a) {
  pe(a, !0);
  const O = n(() => t.backgroundAccessDenied),
    w = n(() =>
      e(O)?.code === "DEVICE_BANNED"
        ? "Access from this device is suspended"
        : e(O)?.code === "ACCOUNT_DELETING"
          ? "This account is being deleted"
          : e(O)
            ? "This account cannot continue setup"
            : "Your setup could not load",
    );
  let g = oe(null);
  async function v() {
    E(g, null);
    try {
      await Ve.openExternalUrl("https://orbitrabrowser.com/contact");
    } catch {
      E(g, "You can reach us at orbitrabrowser.com/contact.");
    }
  }
  var y = ea(),
    p = i(y),
    l = i(p),
    f = i(l, !0);
  s(l);
  var M = k(l, 2),
    B = i(M, !0);
  s(M);
  var U = k(M, 2);
  {
    var j = (r) => {
      var o = Xo();
      c(r, o);
    };
    z(U, (r) => {
      e(O) || r(j);
    });
  }
  var N = k(U, 2),
    d = i(N);
  {
    var m = (r) => {
      var o = Zo();
      (Ae("click", o, v), c(r, o));
    };
    z(d, (r) => {
      e(O) && r(m);
    });
  }
  var D = k(d, 2),
    h = i(D);
  {
    var _ = (r) => {
        var o = Pe("Checking...");
        c(r, o);
      },
      W = (r) => {
        var o = Pe("Check access again");
        c(r, o);
      },
      T = (r) => {
        var o = Pe(`Try
          again`);
        c(r, o);
      };
    z(h, (r) => {
      t.isLoading ? r(_) : e(O) ? r(W, 1) : r(T, -1);
    });
  }
  s(D);
  var b = k(D, 2);
  {
    var C = (r) => {
      var o = Jo();
      (Ae("click", o, () => t.exitSetup()), c(r, o));
    };
    z(b, (r) => {
      e(O) || r(C);
    });
  }
  var R = k(b, 2);
  {
    var H = (r) => {
      var o = Qo(),
        F = i(o, !0);
      (s(o), Z(() => me(F, e(g))), c(r, o));
    };
    z(R, (r) => {
      e(g) && r(H);
    });
  }
  (s(N),
    s(p),
    s(y),
    Z(() => {
      (me(f, e(w)),
        me(B, e(O)?.message ?? t.backgroundError),
        ae(
          D,
          1,
          ie([
            "text-sm disabled:opacity-60",
            e(O)
              ? "underline underline-offset-4 hover:text-muted-foreground"
              : "rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90",
          ]),
        ),
        (D.disabled = t.isLoading || !t.canRetryBackground));
    }),
    Ae("click", D, function (...r) {
      a.onRetry?.apply(this, r);
    }),
    c(G, y),
    ve());
}
Ze(["click"]);
var na = P(
    '<button class="underline hover:text-foreground" data-testid="onboarding-retry-research">Retry</button>',
  ),
  oa = P(
    '<div class="absolute inset-x-8 bottom-24 z-50 text-center text-sm text-destructive" role="alert" data-testid="onboarding-background-error"><p> </p> <div class="mt-2 flex justify-center gap-4"><!> <!></div></div>',
  ),
  aa = P(
    '<div class="relative h-full w-full overflow-hidden"><div class="relative h-full w-full overflow-hidden app-region-no-drag"><!> <!> <!> <div data-testid="onboarding-window-drag-region" class="absolute inset-x-0 top-0 z-[60] h-5 app-region-drag" aria-hidden="true"></div></div></div>',
  ),
  ra = P(
    '<div class="h-full w-full overflow-hidden bg-background"><!></div> <!>',
    1,
  );
function Na(G, a) {
  (pe(a, !0), En());
  const O = n(
    () =>
      t.backgroundAccessDenied !== null ||
      (t.backgroundError !== null && t.step.id === "authentication"),
  );
  async function w() {
    const d = Ve.isAuthenticated ? Ve.user?.id : void 0;
    d && t.canRetryBackground && !t.completed && (await t.resumeBackground(d));
  }
  (Ke(() => {
    const d = Ve.isAuthenticated ? Ve.user?.id : void 0;
    d && t.resumeBackground(d);
  }),
    Ke(() => {
      if (!t.setupReady || t.isLoading) return;
      const d = `/onboarding/${t.step.id}`;
      ot.url.pathname !== d &&
        On(d, { replaceState: !0, noScroll: !0, keepFocus: !0 });
    }),
    Me(() => {
      const d = document.documentElement,
        m = () => {
          d.classList.contains("dark") && d.classList.remove("dark");
        },
        D = new MutationObserver(m);
      return (
        m(),
        D.observe(d, { attributes: !0, attributeFilter: ["class"] }),
        () => D.disconnect()
      );
    }));
  const g = n(() => t.companionColors.tint),
    v = n(() =>
      t.step.id === "welcome" && !t.companionIntroComplete
        ? "#000"
        : `radial-gradient(ellipse at 42% 42%, color-mix(in srgb, ${e(g)} 16%, white) 0%, color-mix(in srgb, ${e(g)} 10%, white) 58%, color-mix(in srgb, ${e(g)} 5%, white) 100%)`,
    ),
    y = "bypass onboarding";
  let p = 0;
  function l(d) {
    if (d.key === "Shift" || d.key === "CapsLock") return;
    const m = d.key.toLowerCase();
    if (m !== y[p]) {
      p = m === y[0] ? 1 : 0;
      return;
    }
    ++p === y.length &&
      ((p = 0),
      Vn.command({ domain: "onboarding", action: "complete", payload: {} }));
  }
  var f = ra();
  (Fe("keydown", nt, l, !0),
    Fe("blur", nt, () => (p = 0)),
    Fe("online", nt, () => {
      t.backgroundAccessDenied || w();
    }));
  var M = ee(f);
  let B;
  var U = i(M);
  {
    var j = (d) => {
      var m = aa();
      let D;
      var h = i(m);
      let _;
      {
        const r = (o) => {
          var F = ye(),
            X = ee(F);
          {
            var K = (V) => {
              var Y = ye(),
                Q = ee(Y);
              (xt(Q, () => a.children), c(V, Y));
            };
            z(X, (V) => {
              ot.url.pathname === `/onboarding/${t.step.id}` && V(K);
            });
          }
          c(o, F);
        };
        var W = i(h);
        {
          var T = (o) => {
              ta(o, { onRetry: w });
            },
            b = (o) => {
              Ko(o, {
                get children() {
                  return r;
                },
              });
            };
          z(W, (o) => {
            e(O) ? o(T) : t.setupReady && o(b, 1);
          });
        }
        var C = k(W, 2);
        z(C, (o) => {});
        var R = k(C, 2);
        {
          var H = (o) => {
            var F = oa(),
              X = i(F),
              K = i(X, !0);
            s(X);
            var V = k(X, 2),
              Y = i(V);
            {
              var Q = (S) => {
                var A = na();
                (Ae("click", A, w), c(S, A));
              };
              z(Y, (S) => {
                t.canRetryBackground && S(Q);
              });
            }
            var u = k(Y, 2);
            (qt(u, { always: !0 }),
              s(V),
              s(F),
              Z(() => me(K, t.backgroundError)),
              c(o, F));
          };
          z(R, (o) => {
            t.backgroundError && !e(O) && o(H);
          });
        }
        (Ce(2), s(h));
      }
      (s(m),
        Z(() => {
          ((D = se(m, "", D, { background: e(v) })),
            (_ = se(h, "", _, { background: e(v) })));
        }),
        de(
          1,
          m,
          () => Re,
          () => ({ duration: 300 }),
        ),
        c(d, m));
    };
    z(U, (d) => {
      t.completed || d(j);
    });
  }
  s(M);
  var N = k(M, 2);
  (Tn(N, {}), Z(() => (B = se(M, "", B, { background: e(v) }))), c(G, f), ve());
}
Ze(["click"]);
export { Na as component };
