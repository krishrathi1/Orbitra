import {
  l as p,
  a1 as n,
  h as m,
  i as d,
  at as f,
  c as g,
  o as u,
  g as l,
  e as c,
} from "../chunks/BY3kRY6U.js";
import { p as e } from "../chunks/DxrGW2WR.js";
import { R as _ } from "../chunks/B8fT0JZL.js";
function k(t, r) {
  (p(r, !1), n());
  var a = m(),
    s = d(a);
  (f(
    s,
    () => e.params.id,
    (i) => {
      {
        let o = c(() => e.params.id ?? "");
        _(i, {
          get routineId() {
            return l(o);
          },
          editing: !0,
        });
      }
    },
  ),
    g(t, a),
    u());
}
export { k as component };
