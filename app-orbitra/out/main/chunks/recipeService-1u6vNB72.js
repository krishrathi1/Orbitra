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
      n = new t.Error().stack;
    n &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[n] = "97ec50ba-abdc-4bd2-a964-9ac5af9e25b7"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-97ec50ba-abdc-4bd2-a964-9ac5af9e25b7"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const a = [
  {
    hosts: ["github.com"],
    usernameSelector: "#login_field",
    passwordSelector: "#password",
    pathRegex: "^/login|^/session",
    description: "GitHub uses non-standard field names",
  },
  {
    hosts: ["www.facebook.com"],
    notUsernameSelector: "#password_strength",
    description: "Password strength meter incorrectly detected as username",
  },
  {
    hosts: ["www.dmv.ca.gov"],
    notPasswordSelector:
      "#bankRoutingNo, #validateBankRoutingNo, #bankAcctNo, #validateBankAcctNo",
    description: "Bank routing/account fields use type=password",
  },
  {
    hosts: ["buy.gogoinflight.com"],
    notPasswordSelector: "#cardNumber",
    description: "Credit card field uses type=password alongside login",
  },
  {
    hosts: ["www.aliexpress.com"],
    usernameSelector: "#fm-login-id",
    description:
      "Hidden email subscription field incorrectly picked as username",
  },
  {
    hosts: ["www.united.com"],
    notPasswordSelector: "input[type='password']",
    pathRegex: "^\\/travel\\/checkin\\/changefqtv\\.aspx",
    description: "Non-login password fields on check-in page",
  },
];
async function r() {
  return a;
}
function c(t, n) {
  let o, s;
  try {
    const e = new URL(n);
    ((o = e.hostname.toLowerCase()), (s = e.pathname));
  } catch {
    return null;
  }
  for (const e of t)
    if (e.hosts.some((i) => o === i.toLowerCase())) {
      if (e.pathRegex) {
        if (
          e.pathRegex.length > 200 ||
          /(\+|\*|\{)\s*(\+|\*|\{)/.test(e.pathRegex)
        )
          continue;
        try {
          if (!new RegExp(e.pathRegex).test(s)) continue;
        } catch {
          continue;
        }
      }
      if (
        e.usernameSelector ||
        e.passwordSelector ||
        e.notUsernameSelector ||
        e.notPasswordSelector
      )
        return e;
    }
  return null;
}
function d(t) {
  return `var __authfill_recipes__ = ${JSON.stringify(t)};`;
}
exports.generateInlineRecipes = d;
exports.getRecipes = r;
exports.matchRecipe = c;
