import {
  l as b,
  h as k,
  i as x,
  v as I,
  c as e,
  o as w,
  x as $,
  g as r,
  u as m,
  A as C,
  d as N,
  r as P,
  f as n,
} from "../chunks/BY3kRY6U.js";
import { p as T } from "../chunks/BliTgmCH.js";
import { C as y } from "../chunks/BUTM_K_D.js";
import "../chunks/8W1_ar5h.js";
import "../chunks/IjCjKoYp.js";
import "../chunks/CWSW0W-m.js";
import "../chunks/B9-A4Jjy.js";
import "../chunks/CUeK7E67.js";
import "../chunks/sHOvZt7D.js";
import "../chunks/BS68Zk7W.js";
import "../chunks/B0XwC4Ot.js";
import "../chunks/Ca0mN6H4.js";
import "../chunks/DqJPjc6u.js";
import "../chunks/CwrPAAC1.js";
import "../chunks/BrMZyMOp.js";
import "../chunks/C5uYYPC3.js";
import "../chunks/UtFdZ35K.js";
import "../chunks/C2ZPEHK5.js";
import "../chunks/NpqY7Io5.js";
import "../chunks/C-5zpRmV.js";
import "../chunks/BP8SnMME.js";
/* empty css                */ /* empty css                */ import "../chunks/DcWRnrNo.js";
import "../chunks/COtD_KUW.js";
import "../chunks/CE1xI8_R.js";
import "../chunks/CKoRKPj5.js";
import "../chunks/CaswuNLv.js";
import "../chunks/ChiU5U9Q.js";
import "../chunks/DA_wUNbm.js";
import "../chunks/CdC4y0c8.js";
import "../chunks/B0SyI5Yt.js";
import "../chunks/Rr_EUpG-.js";
import "../chunks/CqAq5OSY.js";
import "../chunks/Cct3JpWK.js";
import "../chunks/IluHLmfX.js";
import "../chunks/xYp5iVH5.js";
import "../chunks/DknrPO_j.js";
import "../chunks/B4H25SMz.js";
import "../chunks/DAvA2Uaa.js";
import "../chunks/DzpAcQ79.js";
import "../chunks/DRLWuC-J.js";
var E = n('<div class="w-full h-full overflow-auto bg-background"><!></div>'),
  j = n(
    '<div class="w-full h-full flex items-center justify-center bg-background"><p class="text-sm text-muted-foreground">No companion selected.</p></div>',
  );
function xo(c, l) {
  b(l, !0);
  const p = () => C(T, "$page", d),
    [d, u] = $(),
    f = [
      "general",
      "knowledge",
      "skills",
      "triggers",
      "channels",
      "memory",
      "advanced",
    ],
    a = m(() => p().url.searchParams.get("companionId") ?? void 0),
    i = m(() => p().url.searchParams.get("section")),
    g = m(() => {
      if (r(i)) return f.includes(r(i)) ? r(i) : void 0;
    });
  var s = k(),
    v = x(s);
  {
    var h = (o) => {
        var t = E(),
          S = N(t);
        (y(S, {
          mode: "page",
          get companionId() {
            return r(a);
          },
          get initialSection() {
            return r(g);
          },
        }),
          P(t),
          e(o, t));
      },
      _ = (o) => {
        var t = j();
        e(o, t);
      };
    I(v, (o) => {
      r(a) ? o(h) : o(_, -1);
    });
  }
  (e(c, s), w(), u());
}
export { xo as component };
