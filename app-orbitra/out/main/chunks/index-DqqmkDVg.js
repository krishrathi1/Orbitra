"use strict";
var Z = Object.create;
var x = Object.defineProperty;
var ee = Object.getOwnPropertyDescriptor;
var te = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf,
  ie = Object.prototype.hasOwnProperty;
var ne = (e, r, t, n) => {
  if ((r && typeof r == "object") || typeof r == "function")
    for (let i of te(r))
      !ie.call(e, i) &&
        i !== t &&
        x(e, i, {
          get: () => r[i],
          enumerable: !(n = ee(r, i)) || n.enumerable,
        });
  return e;
};
var se = (e, r, t) => (
  (t = e != null ? Z(re(e)) : {}),
  ne(
    r || !e || !e.__esModule
      ? x(t, "default", { value: e, enumerable: !0 })
      : t,
    e,
  )
);
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
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "e1c63468-71cd-4fa9-8101-6d015f7a041c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-e1c63468-71cd-4fa9-8101-6d015f7a041c"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const k = require("./profileLayoutLifecycle-BDYjrhKu.js"),
  oe = require("node:fs/promises"),
  ae = require("electron"),
  $ = require("../main-app.js"),
  U = require("node:path"),
  ue = require("node:crypto"),
  ce = require("valibot"),
  v = require("./commitRecord-DR9i1ecT.js"),
  de = require("./ids-B2sWlG17.js");
require("./protocol-BGN1BQCi.js");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
require("node:os");
require("node:fs");
require("node:http");
require("node:https");
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
require("tldts");
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
function fe(e) {
  const r = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const t in e)
      if (t !== "default") {
        const n = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(
          r,
          t,
          n.get ? n : { enumerable: !0, get: () => e[t] },
        );
      }
  }
  return ((r.default = e), Object.freeze(r));
}
const S = fe(ce),
  le = 3e4;
function pe(e) {
  const r = $.createWorkerChannel(e);
  return {
    async send(t) {
      const n = await r.send({ request: t }, le);
      switch (n.status) {
        case "gone":
          return { ok: !1, failure: "worker-gone" };
        case "timeout":
          return { ok: !1, failure: "timeout" };
        case "answered": {
          const { answer: i } = n;
          return i.ok
            ? { ok: !0, response: i.response }
            : { ok: !1, failure: i.failure, sqliteCode: i.sqliteCode };
        }
      }
    },
    onRestart: (t) => r.onRestart(t),
    stop: () => r.stop(),
  };
}
async function ke(e) {
  const r = "LayoutStorageWorker.js",
    t = [
      U.join(e.appPath, "out", "main", r),
      U.join(e.moduleDir, r),
      U.join(e.moduleDir, "..", r),
    ];
  for (const n of t) if (await e.exists(n)) return n;
  return t[0];
}
async function ve() {
  const e = await ke({
    appPath: ae.app.getAppPath(),
    moduleDir: __dirname,
    exists: async (r) => {
      try {
        return (await oe.access(r), !0);
      } catch {
        return !1;
      }
    },
  });
  return pe(() => $.forkWorker(e, "LayoutStorageWorker"));
}
function y(e, r) {
  return e.kind === r;
}
const Y = 750,
  ye = 5e3,
  me = 3e4,
  j = 8,
  we = 900 * 1e3,
  O = 1;
function F(e) {
  return e === "worker-gone" || e === "timeout"
    ? "worker-unavailable"
    : "database-error";
}
function ge(e) {
  return e.ok
    ? e.response.kind
    : e.sqliteCode
      ? `${e.failure} (${e.sqliteCode})`
      : e.failure;
}
function qe(e) {
  const r = {
    id: e.id,
    url: e.url,
    title: e.title,
    openedAt: e.openedAt,
    lastShownAt: e.lastShownAt,
    lastActivityAt: e.lastActivityAt,
  };
  (e.faviconUrl !== null && (r.faviconUrl = e.faviconUrl),
    e.origin !== null && (r.origin = e.origin));
  const t = S.safeParse(v.PageSummary, r);
  return t.success ? t.output : void 0;
}
function Ae(e) {
  let r;
  try {
    r = JSON.parse(e);
  } catch {
    return;
  }
  const t = S.safeParse(S.array(v.PageSummary), r);
  return t.success ? t.output : void 0;
}
function Re(e) {
  const r = [];
  let t = 0;
  for (const n of e) {
    const i = be(n.recordJson);
    (i.kind === "invalid" && (t += 1),
      i.kind === "fragment" && r.push(i.fragment));
  }
  return { fragments: r, invalid: t };
}
function be(e) {
  let r;
  try {
    r = JSON.parse(e);
  } catch {
    return { kind: "invalid" };
  }
  return v.parseClosedFragment(r);
}
function Se(e, r) {
  const t = [];
  for (const n of r) {
    const i = S.safeParse(de.PageId, n);
    i.success && e.read.hasPage(i.output) && t.push(i.output);
  }
  return t;
}
function he(e, r) {
  const t = new Map();
  for (const [n, i] of e) t.set(n, r.get(n) ?? i);
  return t;
}
function C(e, r, t) {
  return { revision: e, quarantined: r, settled: !1, stop: t };
}
function X(e) {
  const r = {
    ok: !1,
    cause: { kind: "unsupported-format", storedVersion: e.formatVersion },
  };
  if (e.formatVersion > v.LAYOUT_JOURNAL_FORMAT_VERSION) {
    if (!e.snapshot) return r;
    const n = B(e, { kind: "newer" });
    return n.ok ? n : r;
  }
  if (!v.isReadableLayoutJournalFormat(e.formatVersion)) return r;
  if (e.snapshot && e.snapshot.formatVersion !== e.formatVersion)
    return {
      ok: !1,
      cause: {
        kind: "unsupported-format",
        storedVersion: e.snapshot.formatVersion,
      },
    };
  const t = e.commits.find((n) => n.formatVersion !== e.formatVersion);
  return t
    ? {
        ok: !1,
        cause: { kind: "unsupported-format", storedVersion: t.formatVersion },
      }
    : B(e, { kind: "replay", formatVersion: e.formatVersion });
}
function B(e, r) {
  const t = [];
  for (const A of e.pages) {
    const g = qe(A);
    g && t.push(g);
  }
  const n = new Map(t.map((A) => [A.id, A])),
    i = Re(e.recentlyClosed),
    o = Oe(e.pages.length - t.length, i.invalid);
  let d = k.LayoutState.empty(),
    a = 0,
    l = new v.RetiredChatEntryReplay(),
    f = new v.RetiredNewTabRailReplay();
  if (e.snapshot) {
    const A = Ae(e.snapshot.pageIndexJson);
    if (!A)
      return { ok: !1, cause: { kind: "invalid-snapshot", issueCount: 0 } };
    let g;
    try {
      g = JSON.parse(e.snapshot.treeJson);
    } catch {
      return { ok: !1, cause: { kind: "invalid-snapshot", issueCount: 0 } };
    }
    const b = k.LayoutState.parse(g, new Map(A.map((q) => [q.id, q])));
    if (!b.ok)
      return {
        ok: !1,
        cause: { kind: "invalid-snapshot", issueCount: b.issues.length },
      };
    ((d = b.state),
      (a = e.snapshot.revision),
      r.kind === "replay" &&
        r.formatVersion !== v.LAYOUT_JOURNAL_FORMAT_VERSION &&
        e.commits.length > 0 &&
        ((l = new v.RetiredChatEntryReplay(g)),
        (f = new v.RetiredNewTabRailReplay(g))));
  }
  let m;
  if (r.kind === "newer")
    e.commits.length > 0 &&
      (m = C(a, e.commits.length, { kind: "newer-format" }));
  else
    for (const [A, g] of e.commits.entries()) {
      const b = e.commits.length - A;
      let L;
      try {
        L = JSON.parse(g.recordJson);
      } catch {
        m = C(a, b, { kind: "unreadable-record" });
        break;
      }
      let q;
      try {
        q = v.replayStoredRecordValue({
          state: d,
          rawValue: L,
          ...r,
          expectedBaseRevision: a,
          retiredChatEntries: l,
          retiredNewTabRails: f,
        });
      } catch (T) {
        const N = T instanceof v.LayoutInternalDefectError ? T.paths : [];
        m = C(a, b, { kind: "settle-threw", paths: N });
        break;
      }
      if ("unsupportedFormatVersion" in q)
        return {
          ok: !1,
          cause: {
            kind: "unsupported-format",
            storedVersion: q.unsupportedFormatVersion,
          },
        };
      if (!q.ok) {
        m = C(a, b, Le(q.stop));
        break;
      }
      ((d = q.state), (a = q.revision));
    }
  const w = k.LayoutState.parse(d.data, he(d.read.pages(), n));
  if (!w.ok)
    return {
      ok: !1,
      cause: { kind: "proof-failed", issueCount: w.issues.length },
    };
  const E =
    e.headRevision === 0 &&
    e.snapshot === null &&
    e.commits.length === 0 &&
    e.pages.length === 0;
  return {
    ok: !0,
    state: w.state,
    revision: a,
    stored: E ? "untouched" : "written",
    importFingerprint: e.importFingerprint ?? void 0,
    formatVersion: e.formatVersion,
    recentlyClosed: i.fragments,
    snapshotRevision: e.snapshot?.revision ?? 0,
    userMutedPageIds: Se(w.state, e.userMutedPageIds),
    dropped: o,
    stop: m,
  };
}
function Oe(e, r) {
  const t = [];
  return (
    e > 0 && t.push({ kind: "invalid-page-rows", count: e }),
    r > 0 && t.push({ kind: "invalid-recently-closed", count: r }),
    t
  );
}
function Le(e) {
  return e.kind === "revision-gap"
    ? { kind: "revision-gap", expected: e.expected, found: e.found }
    : e.kind === "rejected"
      ? { kind: "rejected", rejection: e.rejection.kind }
      : { kind: "invalid-record", paths: e.issues.map((r) => r.path) };
}
function _(e, r) {
  return {
    revision: r,
    treeJson: JSON.stringify(e.data),
    pageIndexJson: JSON.stringify([...e.read.pages().values()]),
  };
}
async function Me(e, r, t = {}) {
  const n = t.callbacks ?? {},
    i = await G(t.completionFact);
  if (!i.ok)
    return p(e, k.LayoutState.empty(), 0, "completion-fact-unreadable");
  let o = await h(e, { kind: "open", dbPath: r });
  o.ok &&
    o.stored === "untouched" &&
    i.fingerprint !== void 0 &&
    (o = { ok: !1, cause: { kind: "no-durable-layout" } });
  const d = H(o);
  if (d) return W(e, r, t, d);
  if (o.ok) return M(e, r, o, t);
  if (
    o.cause.kind === "load-failed" &&
    o.cause.failure === "worker-unavailable"
  )
    return p(e, k.LayoutState.empty(), 0, "worker-unavailable");
  if (o.cause.kind === "unsupported-format") {
    if (i.fingerprint !== void 0)
      return (
        n.onRecovery?.({ step: "blocked", cause: o.cause }),
        p(e, k.LayoutState.empty(), 0, "storage-unusable")
      );
    if (
      (n.onRecovery?.({ step: "kept-stale-format", cause: o.cause }),
      !(await Ee(t.completionFact)))
    )
      return p(e, k.LayoutState.empty(), 0, "completion-fact-write-failed");
    const m = await h(e, { kind: "resetAside", keptAs: "stale" });
    return m.ok ? M(e, r, m, t) : p(e, k.LayoutState.empty(), 0, I(m.cause));
  }
  const a = await h(e, { kind: "recoverFromBackup" }),
    l = H(a);
  if (l) return W(e, r, t, l);
  if (a.ok)
    return (
      n.onRecovery?.({ step: "used-backup", cause: o.cause }),
      M(e, r, a, t)
    );
  if (i.fingerprint !== void 0)
    return o.cause.kind === "no-durable-layout"
      ? (n.onRecovery?.({ step: "blocked", cause: o.cause }),
        p(e, k.LayoutState.empty(), 0, "completion-fact-mismatch"))
      : (n.onRecovery?.({ step: "recovery-failed", cause: o.cause }),
        p(e, k.LayoutState.empty(), 0, I(o.cause)));
  const f = await h(e, { kind: "resetAside", keptAs: "corrupt" });
  return (
    n.onRecovery?.({ step: "recovery-failed", cause: o.cause }),
    f.ok ? M(e, r, f, t) : p(e, k.LayoutState.empty(), 0, I(f.cause))
  );
}
function H(e) {
  if (e.ok)
    return e.formatVersion > v.LAYOUT_JOURNAL_FORMAT_VERSION
      ? { kind: "unsupported-format", storedVersion: e.formatVersion }
      : void 0;
  const { cause: r } = e;
  if (
    r.kind === "unsupported-schema-version" ||
    (r.kind === "unsupported-format" &&
      r.storedVersion > v.LAYOUT_JOURNAL_FORMAT_VERSION)
  )
    return r;
}
async function W(e, r, t, n) {
  return (await t.confirmBackwardsCompatibility?.())
    ? Ie(e, r, t)
    : (t.callbacks?.onRecovery?.({ step: "blocked", cause: n }),
      p(e, k.LayoutState.empty(), 0, "newer-layout-version"));
}
async function Ie(e, r, t) {
  const n = k.compatibilityDatabasePath(r, v.LAYOUT_SCHEMA_VERSION);
  let i = await h(e, { kind: "open", dbPath: n });
  if (
    (!i.ok &&
      (i.cause.kind === "unsupported-schema-version" ||
        i.cause.kind === "unsupported-format") &&
      (i = await h(e, { kind: "resetAside", keptAs: "stale" })),
    !i.ok &&
      I(i.cause) !== "worker-unavailable" &&
      (i = await h(e, { kind: "recoverFromBackup" })),
    !i.ok)
  )
    return p(e, k.LayoutState.empty(), 0, I(i.cause));
  if (i.stored === "untouched") {
    const d = k.LayoutState.empty(),
      a = D(d),
      l = await e.send({
        kind: "importInitial",
        snapshot: _(d, O),
        pages: [],
        fingerprint: a,
      });
    if (!l.ok || !y(l.response, "commit") || !l.response.outcome.ok)
      return p(e, d, 0, "import-write-failed");
    i = {
      ...i,
      state: d,
      revision: O,
      stored: "written",
      importFingerprint: a,
    };
  }
  const o = await M(e, n, i, {
    callbacks: t.callbacks,
    backupIntervalMs: t.backupIntervalMs,
  });
  return o.storage === "usable" ? { ...o, storage: "compatibility" } : o;
}
async function h(e, r) {
  const t = await e.send(r);
  if (!t.ok)
    return { ok: !1, cause: { kind: "load-failed", failure: F(t.failure) } };
  if (!y(t.response, "open"))
    return {
      ok: !1,
      cause: { kind: "load-failed", failure: "database-error" },
    };
  if (!t.response.outcome.ok)
    return t.response.outcome.failure.kind === "unsupported-schema-version"
      ? {
          ok: !1,
          cause: {
            kind: "unsupported-schema-version",
            storedVersion: t.response.outcome.failure.storedVersion,
          },
        }
      : {
          ok: !1,
          cause: {
            kind: "open-failed",
            failure: t.response.outcome.failure.kind,
          },
        };
  const n = await e.send({ kind: "load" });
  return n.ok
    ? y(n.response, "load")
      ? X(n.response.outcome)
      : { ok: !1, cause: { kind: "load-failed", failure: "database-error" } }
    : { ok: !1, cause: { kind: "load-failed", failure: F(n.failure) } };
}
const _e = /^[a-f0-9]{64}$/;
function D(e) {
  const r = [...e.read.pages().values()].sort((t, n) =>
    t.id.localeCompare(n.id),
  );
  return ue
    .createHash("sha256")
    .update(JSON.stringify({ tree: e.data, pages: r }))
    .digest("hex");
}
async function G(e) {
  if (!e) return { ok: !0, fingerprint: void 0 };
  try {
    const r = await e.read();
    return r !== void 0 && !_e.test(r)
      ? { ok: !1 }
      : { ok: !0, fingerprint: r };
  } catch {
    return { ok: !1 };
  }
}
async function Ee(e) {
  if (!e) return !0;
  try {
    return (await e.clear(), !0);
  } catch {
    return !1;
  }
}
async function P(e, r = !1) {
  const t = await e.send({ kind: "backup", preserveExisting: r });
  return t.ok && y(t.response, "ack");
}
async function z(e, r) {
  if (!e) return !0;
  try {
    return (await e.write(r), !0);
  } catch {
    return !1;
  }
}
function I(e) {
  return e.kind === "load-failed" && e.failure === "worker-unavailable"
    ? "worker-unavailable"
    : "storage-unusable";
}
function p(e, r, t, n) {
  return {
    state: r,
    revision: t,
    storage: "unusable",
    lifecycle: { kind: "blocked", reason: n },
    persistence: {
      commit: async () => ({ ok: !1, reason: "worker-failed" }),
      reconcile: async () => {},
      updatePageMetadata: () => {},
      loadNavigationHistory: async () => {},
      rotate: async () => ({ ok: !1, reason: "worker-failed" }),
      flush: async () => {},
      accountRevision: async () => {},
      markAccountRevision: async () => {},
      close: () => e.stop(),
    },
  };
}
async function Te(e, r, t, n) {
  if (t.stored !== "untouched" || !n.initialLayout) return;
  let i;
  try {
    i = await n.initialLayout();
  } catch {
    return p(e, t.state, t.revision, "initial-layout-unavailable");
  }
  if (i.state.data.windows.length === 0)
    return p(e, t.state, t.revision, "initial-layout-unavailable");
  const o = D(i.state),
    d = i.pages.map((f) => ({
      id: f.id,
      url: f.url,
      title: f.title,
      faviconUrl: f.faviconUrl ?? null,
      origin: f.origin ?? null,
      openedAt: f.openedAt,
      lastShownAt: f.lastShownAt,
      lastActivityAt: f.lastActivityAt,
      navigationHistory: f.navigationHistory,
    })),
    a = await e.send({
      kind: "importInitial",
      snapshot: _(i.state, O),
      pages: d,
      fingerprint: o,
    });
  return !(a.ok && y(a.response, "commit") && a.response.outcome.ok) ||
    !(await P(e))
    ? (n.callbacks?.onLegacyImport?.({ step: "write-failed", pages: d.length }),
      p(e, t.state, t.revision, "import-write-failed"))
    : (await z(n.completionFact, o))
      ? (n.callbacks?.onLegacyImport?.({
          step: "imported",
          candidate: 0,
          pages: d.length,
          windows: i.state.data.windows.length,
        }),
        {
          state: i.state,
          revision: O,
          storage: "usable",
          lifecycle: { kind: "declarative", fingerprint: o },
          persistence: J(e, r, O, n),
          recentlyClosed: [],
        })
      : p(e, i.state, O, "completion-fact-write-failed");
}
async function M(e, r, t, n) {
  const i = n.callbacks ?? {};
  K(t, i);
  const o = await G(n.completionFact);
  if (!o.ok) return p(e, t.state, t.revision, "completion-fact-unreadable");
  if (t.stored === "untouched") {
    if (o.fingerprint !== void 0)
      return (
        i.onRecovery?.({
          step: "blocked",
          cause: { kind: "no-durable-layout" },
        }),
        p(e, t.state, t.revision, "completion-fact-mismatch")
      );
    const a = await Te(e, r, t, n);
    return (
      a || {
        state: t.state,
        revision: t.revision,
        storage: "usable",
        lifecycle: { kind: "old" },
        persistence: J(e, r, t.revision, n),
        recentlyClosed: t.recentlyClosed,
        userMutedPageIds: t.userMutedPageIds,
      }
    );
  }
  let d = t.importFingerprint;
  if (o.fingerprint !== void 0 && d !== void 0 && o.fingerprint !== d)
    return (
      i.onRecovery?.({
        step: "blocked",
        cause: { kind: "fingerprint-differs" },
      }),
      p(e, t.state, t.revision, "completion-fact-mismatch")
    );
  if (t.formatVersion !== v.LAYOUT_JOURNAL_FORMAT_VERSION && !(await P(e, !0)))
    return p(e, t.state, t.revision, "storage-unusable");
  if (
    (t.stop &&
      (t.stop.settled ? i.onReplayStop?.(t.stop) : await Q(e, t, t.stop, i)),
    t.formatVersion !== v.LAYOUT_JOURNAL_FORMAT_VERSION)
  ) {
    const a = await e.send({
      kind: "rotate",
      snapshot: _(t.state, t.revision),
    });
    if (!(a.ok && y(a.response, "commit") && a.response.outcome.ok))
      return p(e, t.state, t.revision, "storage-unusable");
    t.formatVersion > v.LAYOUT_JOURNAL_FORMAT_VERSION &&
      i.onRecovery?.({
        step: "used-newer-snapshot",
        cause: { kind: "unsupported-format", storedVersion: t.formatVersion },
      });
  }
  if (d === void 0) {
    d = o.fingerprint ?? D(t.state);
    const a = await e.send({
      kind: "adoptDeclarative",
      expectedHeadRevision: t.revision,
      fingerprint: d,
    });
    if (
      !(a.ok && y(a.response, "commit") && a.response.outcome.ok) ||
      !(await P(e))
    ) {
      const f = !a.ok && F(a.failure) === "worker-unavailable";
      return p(
        e,
        t.state,
        t.revision,
        f ? "worker-unavailable" : "storage-unusable",
      );
    }
  }
  return o.fingerprint === void 0 && !(await z(n.completionFact, d))
    ? p(e, t.state, t.revision, "completion-fact-write-failed")
    : {
        state: t.state,
        revision: t.revision,
        storage: "usable",
        lifecycle: { kind: "declarative", fingerprint: d },
        persistence: J(e, r, t.revision, n),
        recentlyClosed: t.recentlyClosed,
        snapshotRevision: t.snapshotRevision,
        userMutedPageIds: t.userMutedPageIds,
      };
}
function K(e, r) {
  for (const t of e.dropped)
    r.onRecovery?.({ step: "dropped-invalid-rows", cause: t });
}
async function Q(e, r, t, n) {
  const i = await e.send({
      kind: "settleAt",
      snapshot: _(r.state, r.revision),
    }),
    o = i.ok && y(i.response, "commit") && i.response.outcome.ok;
  n.onReplayStop?.({ ...t, settled: o });
}
function J(e, r, t, n) {
  const i = n.callbacks ?? {},
    o = new Map();
  let d = t,
    a = !1,
    l,
    f,
    m = Promise.resolve(),
    w;
  const E = setInterval(() => {
    e.send({ kind: "backup" });
  }, n.backupIntervalMs ?? we);
  (E.unref?.(),
    e.onRestart(() => {
      A();
    }));
  async function A() {
    if (a) return;
    const u = await e.send({ kind: "open", dbPath: r });
    if (!u.ok || !y(u.response, "open") || !u.response.outcome.ok) {
      i.onReconcile?.({ expected: d, found: void 0 });
      return;
    }
    const s = await e.send({ kind: "head" }),
      c = s.ok && y(s.response, "head") ? s.response.revision : void 0;
    i.onReconcile?.({ expected: d, found: c });
  }
  function g() {
    (l && clearTimeout(l), (l = void 0), (f = void 0));
  }
  function b(u) {
    (l && clearTimeout(l),
      (l = setTimeout(() => {
        ((l = void 0), (f = void 0), V());
      }, u)),
      l.unref?.());
  }
  function L() {
    if (w && (l !== void 0 || w.attempts < j)) return;
    const u = Date.now();
    (f === void 0 && (f = u + ye), b(Math.max(0, Math.min(Y, f - u))));
  }
  function q(u) {
    (w ||
      ((w = { attempts: 0 }), i.onMetadataWriteFailure?.({ updateCount: u })),
      !(a || w.attempts >= j) &&
        ((w.attempts += 1), b(Math.min(me, Y * 2 ** (w.attempts - 1)))));
  }
  function T() {
    const u = [];
    for (const [s, c] of o) {
      const R = { pageId: s };
      (c.url !== void 0 && (R.url = c.url),
        c.title !== void 0 && (R.title = c.title),
        c.faviconUrl !== void 0 && (R.faviconUrl = c.faviconUrl),
        c.lastShownAt !== void 0 && (R.lastShownAt = c.lastShownAt),
        c.lastActivityAt !== void 0 && (R.lastActivityAt = c.lastActivityAt),
        c.navEntries.length > 0 && (R.navEntries = c.navEntries),
        c.userMuted !== void 0 && (R.userMuted = c.userMuted),
        u.push(R));
    }
    return (o.clear(), u);
  }
  function N(u) {
    for (const s of u) {
      const c = o.get(s.pageId) ?? { navEntries: [] };
      o.set(s.pageId, {
        url: c.url ?? s.url,
        title: c.title ?? s.title,
        faviconUrl: c.faviconUrl ?? s.faviconUrl,
        lastShownAt: c.lastShownAt ?? s.lastShownAt,
        lastActivityAt: c.lastActivityAt ?? s.lastActivityAt,
        navEntries: [...(s.navEntries ?? []), ...c.navEntries],
        userMuted: c.userMuted ?? s.userMuted,
      });
    }
  }
  function V() {
    return (
      (m = m.then(async () => {
        const u = T();
        if (u.length === 0) return;
        const s = await e.send({ kind: "updatePageMetadata", updates: u });
        if (s.ok && y(s.response, "ack")) {
          w = void 0;
          return;
        }
        (N(u), q(u.length));
      })),
      m
    );
  }
  return {
    async commit(u) {
      if (a) return { ok: !1, reason: "closed" };
      const s = await k.logWhenSlow(
        "layout commit",
        e.send({ kind: "commit", record: u }),
      );
      return !s.ok || !y(s.response, "commit")
        ? (k.logLayout(`layout commit failed: ${ge(s)}`),
          { ok: !1, reason: "worker-failed" })
        : s.response.outcome.ok
          ? ((d = u.revision), { ok: !0 })
          : (k.logLayout("layout commit conflicted with a newer revision"),
            { ok: !1, reason: "revision-conflict" });
    },
    async reconcile() {
      if (a) return;
      (g(), await V());
      const u = await e.send({ kind: "load" });
      if (!u.ok || !y(u.response, "load")) return;
      const s = X(u.response.outcome);
      if (s.ok)
        return (
          K(s, i),
          s.stop && (await Q(e, s, s.stop, i)),
          (d = s.revision),
          { state: s.state, revision: s.revision }
        );
    },
    updatePageMetadata(u) {
      if (!(a || u.length === 0)) {
        for (const s of u) {
          const c = o.get(s.pageId) ?? { navEntries: [] };
          (s.url !== void 0 && (c.url = s.url),
            s.title !== void 0 && (c.title = s.title),
            s.faviconUrl !== void 0 && (c.faviconUrl = s.faviconUrl),
            s.lastShownAt !== void 0 && (c.lastShownAt = s.lastShownAt),
            s.lastActivityAt !== void 0 &&
              (c.lastActivityAt = s.lastActivityAt),
            s.navEntry && c.navEntries.push(s.navEntry),
            s.userMuted !== void 0 && (c.userMuted = s.userMuted),
            o.set(s.pageId, c));
        }
        L();
      }
    },
    async loadNavigationHistory(u) {
      if (a) return;
      const s = await e.send({ kind: "loadNavigationHistory", pageId: u });
      if (
        !s.ok ||
        !y(s.response, "navigationHistory") ||
        s.response.entriesJson === null
      )
        return;
      let c;
      try {
        c = JSON.parse(s.response.entriesJson);
      } catch {
        return;
      }
      const R = S.safeParse(
        S.array(S.object({ url: S.string(), title: S.string() })),
        c,
      );
      return R.success ? R.output : void 0;
    },
    async rotate(u, s) {
      if (a) return { ok: !1, reason: "closed" };
      if (s !== d) return { ok: !1, reason: "stale-rotate" };
      const c = await e.send({ kind: "rotate", snapshot: _(u, s) });
      return !c.ok || !y(c.response, "commit")
        ? { ok: !1, reason: "worker-failed" }
        : c.response.outcome.ok
          ? { ok: !0 }
          : { ok: !1, reason: "revision-conflict" };
    },
    async flush() {
      (g(), await V());
    },
    async accountRevision() {
      const u = await e.send({ kind: "accountRevision" });
      if (!u.ok || !y(u.response, "accountRevision"))
        throw new Error("layout account revision is unreadable");
      return u.response.revision ?? void 0;
    },
    async markAccountRevision(u) {
      const s = await e.send({ kind: "markAccountRevision", revision: u });
      if (!s.ok || !y(s.response, "ack"))
        throw new Error("layout account revision was not saved");
    },
    async close() {
      a ||
        (g(),
        await V(),
        (a = !0),
        clearInterval(E),
        await e.send({ kind: "close" }),
        await e.stop());
    },
  };
}
async function Ve(e, r = {}) {
  return (
    await k
      .windowlessFactFor(e)
      .clear()
      .catch(() => {}),
    Me(await ve(), e, { ...r, confirmBackwardsCompatibility: Ce })
  );
}
async function Ce() {
  const { dialog: e } = await import("electron");
  return (
    (
      await e.showMessageBox({
        type: "warning",
        title: "Older version detected",
        message: "Older version detected",
        detail:
          "Proceeding will park your current data until you upgrade. You will be able to use Orbitra like normal.",
        buttons: ["Proceed", "Cancel"],
        defaultId: 0,
        cancelId: 1,
        noLink: !0,
      })
    ).response === 0
  );
}
exports.openLayoutPersistence = Ve;
