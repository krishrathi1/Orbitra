import {
  l as J,
  B as r,
  v as b,
  t as V,
  w as _,
  c as v,
  o as Q,
  d as Z,
  a7 as d,
  r as g,
  aa as e,
  g as m,
  E as X,
  C as Y,
  u as $,
  a2 as S,
  D as B,
  i as H,
  ae as j,
  h as a2,
} from "./BY3kRY6U.js";
var e2 = d('<path class="mark-piece svelte-k7gc8h"></path>'),
  r2 = d('<g class="seed-mark svelte-k7gc8h"></g>'),
  l2 = d(
    '<clipPath clipPathUnits="userSpaceOnUse"><rect y="-3" height="30"></rect></clipPath>',
  ),
  t2 = d(
    '<g class="wordmark-letter svelte-k7gc8h"><g><use href="#orbitra-wordmark-shape" fill="currentColor"></use></g></g>',
  ),
  v2 = d('<use href="#orbitra-wordmark-shape" fill="currentColor"></use>'),
  s2 = d(
    '<defs><text id="orbitra-wordmark-shape" x="28" y="19" font-family="Georgia,serif" font-size="20">Orbitra</text><!></defs><!>',
    1,
  ),
  i2 = d('<svg fill="none" xmlns="http://www.w3.org/2000/svg"><!><!></svg>');
function d2(K, a) {
  J(a, !0);
  let O = r(a, "width", 3, 101),
    T = r(a, "height", 3, 24),
    U = r(a, "class", 3, ""),
    f = r(a, "mode", 3, "full"),
    p = r(a, "dissolve", 3, !1),
    x = r(a, "wordmarkDissolve", 3, !1),
    w = r(a, "inlineReveal", 3, !1),
    C = r(a, "revealStartDelayMs", 3, 0),
    W = r(a, "revealPlaying", 3, !0);
  const I = $(() =>
      f() === "mark"
        ? "0 0 24 24"
        : f() === "wordmark"
          ? "28 0 73 24"
          : "0 0 101 24",
    ),
    L = [
      { fill: "#D6C530", d: "M14.122 0H9.199v5.087h4.923V0Z" },
      {
        fill: "#ED5A31",
        d: "M11.66 24a2.73 2.73 0 0 0 2.72-2.74 2.73 2.73 0 0 0-2.72-2.738 2.73 2.73 0 0 0-2.72 2.739A2.73 2.73 0 0 0 11.66 24Z",
      },
      {
        fill: "#ED5A31",
        d: "M16.195 19.435c1.502 0 2.72-1.197 2.72-2.674 0-1.477-1.218-2.674-2.72-2.674-1.503 0-2.721 1.197-2.721 2.674 0 1.477 1.218 2.674 2.72 2.674Z",
      },
      {
        fill: "#ED5A31",
        d: "M7.19 19.435a2.665 2.665 0 0 0 2.656-2.674 2.665 2.665 0 0 0-2.656-2.674 2.665 2.665 0 0 0-2.656 2.674 2.665 2.665 0 0 0 2.656 2.674Z",
      },
      {
        fill: "#ED5A31",
        d: "M20.6 14.87c1.502 0 2.72-1.197 2.72-2.674 0-1.477-1.218-2.674-2.72-2.674-1.503 0-2.721 1.197-2.721 2.674 0 1.476 1.218 2.674 2.72 2.674Z",
      },
      {
        fill: "#ED5A31",
        d: "M2.72 14.87c1.503 0 2.721-1.197 2.721-2.674 0-1.477-1.218-2.674-2.72-2.674C1.218 9.522 0 10.719 0 12.196c0 1.476 1.218 2.674 2.72 2.674Z",
      },
      {
        fill: "#ED5A31",
        d: "M7.19 10.304c1.467 0 2.656-1.226 2.656-2.739S8.657 4.826 7.19 4.826c-1.466 0-2.656 1.226-2.656 2.74 0 1.512 1.19 2.738 2.656 2.738Z",
      },
      {
        fill: "#ED5A31",
        d: "M16.195 10.304a2.73 2.73 0 0 0 2.72-2.739 2.73 2.73 0 0 0-2.72-2.739 2.73 2.73 0 0 0-2.721 2.74 2.73 2.73 0 0 0 2.72 2.738Z",
      },
      { fill: "#ED5A31", d: "M14.122 9.652H9.199v4.957h4.923V9.652Z" },
    ],
    P = [
      { x: 28, width: 17 },
      { x: 45, width: 8 },
      { x: 53, width: 13 },
      { x: 66, width: 6 },
      { x: 72, width: 8 },
      { x: 80, width: 8 },
      { x: 88, width: 13 },
    ];
  var l = i2(),
    R = Z(l);
  {
    var N = (s) => {
      var h = r2();
      (S(
        h,
        23,
        () => L,
        (i) => i.d,
        (i, k, y) => {
          var o = e2();
          (_(
            (M) => {
              (e(o, "fill", a.markColor ?? m(k).fill),
                e(o, "d", m(k).d),
                B(o, M));
            },
            [
              () =>
                [
                  w() ? `--inline-reveal-delay: ${C()}ms` : void 0,
                  p() ? `--mark-dissolve-delay: ${m(y) * 34}ms` : void 0,
                ]
                  .filter(Boolean)
                  .join("; "),
            ],
          ),
            v(i, o));
        },
      ),
        g(h),
        v(s, h));
    };
    b(R, (s) => {
      f() !== "wordmark" && s(N);
    });
  }
  var q = V(R);
  {
    var z = (s) => {
      var h = s2(),
        i = H(h),
        k = V(Z(i));
      (S(
        k,
        17,
        () => P,
        j,
        (t, c, D) => {
          var n = l2();
          e(n, "id", `orbitra-wordmark-letter-${D}`);
          var E = Z(n);
          (g(n),
            _(() => {
              (e(E, "x", m(c).x), e(E, "width", m(c).width));
            }),
            v(t, n));
        },
      ),
        g(i));
      var y = V(i);
      {
        var o = (t) => {
            var c = a2(),
              D = H(c);
            (S(
              D,
              17,
              () => P,
              j,
              (n, E, A) => {
                var u = t2(),
                  F = Z(u);
                (e(F, "clip-path", `url(#orbitra-wordmark-letter-${A})`),
                  g(u),
                  _(
                    (G) => B(u, G),
                    [
                      () =>
                        [
                          w()
                            ? `--inline-reveal-delay: ${C() + (A + 1) * 14}ms`
                            : void 0,
                          x()
                            ? `--wordmark-dissolve-delay: ${A * 44}ms`
                            : void 0,
                        ]
                          .filter(Boolean)
                          .join("; "),
                    ],
                  ),
                  v(n, u));
              },
            ),
              v(t, c));
          },
          M = (t) => {
            var c = v2();
            v(t, c);
          };
        b(y, (t) => {
          w() || x() ? t(o) : t(M, -1);
        });
      }
      v(s, h);
    };
    b(q, (s) => {
      f() !== "mark" && s(z);
    });
  }
  (g(l),
    _(() => {
      (e(l, "viewBox", m(I)),
        e(l, "width", O()),
        e(l, "height", T()),
        X(
          l,
          0,
          Y([
            "orbitra-wordmark",
            p() && "mark-dissolving",
            x() && "wordmark-dissolving",
            w() && "inline-reveal",
            w() && W() && "reveal-playing",
            U(),
          ]),
          "svelte-k7gc8h",
        ),
        e(l, "data-logo-mode", f()));
    }),
    v(K, l),
    Q());
}
export { d2 as S };
