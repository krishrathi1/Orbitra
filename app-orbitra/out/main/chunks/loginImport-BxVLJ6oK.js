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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "01d9601c-29bc-4640-ba14-f531e241bb42"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-01d9601c-29bc-4640-ba14-f531e241bb42"));
  })();
} catch {}
const o = "browserLoginImport",
  i = { width: 360, height: 252 },
  t = "orbitra://settings/profiles?import=browser&target=current";
function r(e) {
  return e ? `${t}&browser=${e}` : t;
}
exports.LOGIN_IMPORT_CARD_LAYOUT = i;
exports.LOGIN_IMPORT_PROMPT_KEY = o;
exports.loginImportSettingsUrl = r;
