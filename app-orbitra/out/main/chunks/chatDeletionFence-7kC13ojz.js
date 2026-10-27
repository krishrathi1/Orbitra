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
      (e._sentryDebugIds[t] = "81b50c03-532f-49e0-b970-e9545e8ec6ec"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-81b50c03-532f-49e0-b970-e9545e8ec6ec"));
  })();
} catch {}
const o = require("../main-app.js"),
  n = new Map();
function l(e) {
  return n.has(e);
}
async function a(e, t) {
  n.set(e, (n.get(e) ?? 0) + 1);
  try {
    return (await t(), o.markAttachmentSessionDeleting(e));
  } finally {
    const i = (n.get(e) ?? 1) - 1;
    i === 0 ? n.delete(e) : n.set(e, i);
  }
}
exports.closeChatLayoutForDeletion = a;
exports.isChatDeletionPending = l;
