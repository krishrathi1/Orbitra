import { l as n, B as s, o as c } from "./BY3kRY6U.js";
import { S as i } from "./lgeKxDDN.js";
import { e as o } from "./IjCjKoYp.js";
import { T as u } from "./C---Np_B.js";
function m(r, e) {
  n(e, !0);
  let a = s(e, "density", 3, "default");
  function t() {
    o.send("component:preload-hint", { componentName: "universal_search" });
  }
  (u(r, {
    get Icon() {
      return i;
    },
    class: "group/tab-search",
    iconClass:
      "!size-4 text-muted-foreground group-hover/tab-search:text-foreground",
    onclick: () => o.send("universal-search:toggle", { show: !0 }),
    onmouseenter: t,
    onfocus: t,
    ariaLabel: "Search tabs and chats",
    tooltip: "Search tabs and chats",
    tooltipShortcut: "CommandOrControl+Shift+A",
    testId: "tab-sidebar-search",
    hoverTone: "primary",
    get density() {
      return a();
    },
  }),
    c());
}
export { m as U };
