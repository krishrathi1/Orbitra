"use strict";
(function () {
  try {
    var n =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    n.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new n.Error().stack;
    e &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[e] = "b94ff69b-25f7-40d0-9768-a1b1e0dc1d69"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-b94ff69b-25f7-40d0-9768-a1b1e0dc1d69"));
  })();
} catch {}
class s extends Error {
  constructor(e, r) {
    (super(`OptMem ${e === "lane" ? "sync" : "discovery"} unavailable (${r})`),
      (this.stage = e),
      (this.reason = r),
      (this.name = "OptMemRefreshError"));
  }
}
function l(n) {
  const e = n.split(":", 1)[0];
  return e && /^(0|[1-9]\d*)$/.test(e) ? e : null;
}
class d {
  constructor(e, r) {
    ((this.replica = e), (this.client = r));
  }
  async syncToStableHead() {
    let e;
    try {
      e = await this.replica.getCursor();
    } catch {
      return { kind: "unavailable", reason: "storage", cursor: null };
    }
    let r = null,
      a = null;
    for (;;) {
      let i;
      try {
        i = await this.client.loadPage({ cursor: e, capturedHeadRevision: r });
      } catch {
        return { kind: "unavailable", reason: "network", cursor: e };
      }
      if (i.kind === "unavailable") return { ...i, cursor: e };
      const t = i.page;
      if (
        (r !== null && t.capturedHeadRevision !== r) ||
        !/^(0|[1-9]\d*)$/.test(t.capturedHeadRevision)
      )
        return { kind: "unavailable", reason: "protocol", cursor: e };
      const o = e;
      try {
        (await this.replica.applyPage(t), (e = await this.replica.getCursor()));
      } catch {
        return { kind: "unavailable", reason: "storage", cursor: o };
      }
      if (t.hasMore) {
        if (e === o)
          return { kind: "unavailable", reason: "protocol", cursor: e };
        r = t.capturedHeadRevision;
        continue;
      }
      if (l(e) !== t.capturedHeadRevision)
        return { kind: "unavailable", reason: "protocol", cursor: e };
      if (a === t.capturedHeadRevision)
        return {
          kind: "synced",
          cursor: e,
          headRevision: t.capturedHeadRevision,
        };
      ((a = t.capturedHeadRevision), (r = null));
    }
  }
}
exports.OptMemRefreshError = s;
exports.OptMemSyncRunner = d;
