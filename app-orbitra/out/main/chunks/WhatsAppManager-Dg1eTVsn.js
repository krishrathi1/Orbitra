"use strict";
(function () {
  try {
    var s =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    s.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var s =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new s.Error().stack;
    e &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[e] = "bdae4cc4-0887-4fa5-9430-96d2b8991b4e"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-bdae4cc4-0887-4fa5-9430-96d2b8991b4e"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const I = require("node:crypto"),
  A = require("node:fs/promises"),
  R = require("node:path"),
  E = require("electron"),
  z = require("valibot"),
  w = require("../main-app.js"),
  _ = require("./errors-DsbnElf-.js"),
  W = require("./index-C1xADwsw.js"),
  B = require("./appPaths-eBQvtv9Z.js");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("node:util");
require("node:worker_threads");
require("node:os");
require("node:fs");
require("node:http");
require("node:https");
require("./protocol-BGN1BQCi.js");
require("events");
require("child_process");
require("util");
require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("@reflect/auth/workos-session");
require("crypto");
require("./appDataPath-20zIIRaW.js");
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
require("node:tls");
require("tldts");
require("node:buffer");
require("./savedCertificateBlocklist-BUtmL3xA.js");
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
require("./ids-B2sWlG17.js");
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
require("./base-B19nE_Cx.js");
function J(s) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (s) {
    for (const t in s)
      if (t !== "default") {
        const r = Object.getOwnPropertyDescriptor(s, t);
        Object.defineProperty(
          e,
          t,
          r.get ? r : { enumerable: !0, get: () => s[t] },
        );
      }
  }
  return ((e.default = s), Object.freeze(e));
}
const h = J(z);
function $(s) {
  switch (s) {
    case "whatsapp_get_status":
    case "whatsapp_list_chats":
    case "whatsapp_list_contacts":
    case "whatsapp_list_messages":
    case "whatsapp_search_messages":
    case "whatsapp_get_message":
    case "whatsapp_get_chat":
    case "whatsapp_get_send_status":
      return !1;
    default:
      return !0;
  }
}
function H(s, e) {
  return s !== "error" && s !== "disconnected"
    ? "keep"
    : e === "relink"
      ? "relink"
      : "restart";
}
class v extends Error {
  code;
  constructor(e, t) {
    (super(t), (this.code = e), (this.name = "ReadPaginationError"));
  }
}
function F(s) {
  return s.kind === "search" ? ["limit", "cursor"] : ["start", "end", "cursor"];
}
function V(s, e, t) {
  const r = F(s),
    n = (l) => Reflect.get(e, l) !== void 0,
    i = Reflect.get(e, "cursor"),
    a =
      s.legacyFields.some((l) => !r.includes(l) && n(l)) ||
      (typeof i == "string" && !t && s.legacyFields.includes("cursor")),
    d = Reflect.get(e, "start"),
    p =
      s.kind === "list" &&
      s.legacyFields.includes("start") &&
      d !== void 0 &&
      (d === 0 || typeof d == "string" || a),
    g = a || p,
    f = Y(s, e, t);
  if (g && f)
    throw new v(
      "mixed_pagination_controls",
      "Use either the public pagination controls or legacy page controls, without mixing them.",
    );
  return g ? "legacy" : "collect";
}
function Y(s, e, t) {
  return (
    t ||
    F(s).some(
      (r) => !s.legacyFields.includes(r) && Reflect.get(e, r) !== void 0,
    )
  );
}
function O(s, e) {
  const t = Reflect.get(s, e);
  if (t === void 0 || typeof t == "number") return t;
  throw new v(
    "invalid_window",
    "Pagination bounds must be positive whole numbers.",
  );
}
function M(s, e) {
  if (s === void 0) return e;
  if (typeof s != "number" || !Number.isSafeInteger(s) || s < 1)
    throw new v(
      "invalid_window",
      "Pagination bounds must be positive whole numbers.",
    );
  return s;
}
function K(s, e, t) {
  const r = t?.nextIndex ?? 1,
    n = t?.unfinished;
  if (s.kind === "search") {
    const f = O(e, "limit"),
      l = M(f, n ? n.end - r + 1 : s.defaultCount),
      o =
        f === void 0 ? Math.min(Number.MAX_SAFE_INTEGER, r + l - 1) : r + l - 1;
    if (!Number.isSafeInteger(o))
      throw new v("invalid_window", "The requested count is too large.");
    return { start: r, end: o };
  }
  const i = O(e, "start"),
    a = O(e, "end"),
    d = Math.max(r, n?.start ?? r);
  if (i === void 0 && a === void 0 && n) return { start: d, end: n.end };
  let p = M(i, d);
  const g = M(a, Math.min(Number.MAX_SAFE_INTEGER, p + s.defaultCount - 1));
  if (
    (n && p === n.start && g === n.end && (p = d),
    p < r || g < p || !Number.isSafeInteger(g))
  )
    throw new v(
      "invalid_window",
      "Use an inclusive window at or after the continuation position.",
    );
  return { start: p, end: g };
}
async function X(s, e) {
  const t = new TextEncoder().encode(JSON.stringify(s.map(e))),
    r = await crypto.subtle.digest("SHA-256", t);
  return Array.from(new Uint8Array(r), (n) =>
    n.toString(16).padStart(2, "0"),
  ).join("");
}
async function G(s) {
  const { request: e, budget: t, signal: r } = s;
  if (
    !Number.isSafeInteger(e.start) ||
    !Number.isSafeInteger(e.end) ||
    e.start < 1 ||
    e.end < e.start
  )
    throw new v("invalid_window", "Use a positive inclusive record window.");
  const n = performance.now();
  let i = { ...s.checkpoint },
    a;
  const d = [];
  let p = 0,
    g = 0,
    f = 0;
  const l = new Set();
  function o(u, q = !1) {
    if (!a)
      throw new Error("Pagination stopped before reading its first page.");
    const { unfinished: c, ...y } = i;
    return {
      firstPage: a.data,
      items: d,
      ...(q
        ? {}
        : {
            checkpoint: {
              ...y,
              ...(u && i.nextIndex <= e.end ? { unfinished: e } : {}),
            },
          }),
      ...(u ? { partial: u } : {}),
    };
  }
  for (;;) {
    if (
      (r?.throwIfAborted(),
      a &&
        (p >= t.maxPages ||
          g >= t.maxWorkUnits ||
          performance.now() - n >= t.maxElapsedMs))
    )
      return o({ reason: "time_budget" });
    s.pageSizeMode === "remaining" &&
      i.offset === 0 &&
      (i.pageSize = Math.min(i.pageSize, e.end - i.nextIndex + 1));
    let u, q, c;
    const y = JSON.stringify(i.position) ?? "first";
    if (l.has(y)) return o({ reason: "provider_error" });
    l.add(y);
    try {
      ((u = await s.fetchPage(i.position, i.pageSize, i.resumeArgs ?? {})),
        (q = await X(u.items, s.identity)),
        (c = a ? a.data : u.data),
        a && s.mergePageMetadata && (c = s.mergePageMetadata(a.data, u.data)));
    } catch (b) {
      if ((r?.throwIfAborted(), !(b instanceof Error))) throw b;
      const k = s.classifyError(b);
      if (!a || !k) throw b;
      return o(k);
    }
    if (
      (r?.throwIfAborted(),
      (a = { data: c }),
      u.providerResultCap && (i.providerResultCap = !0),
      u.resumeArgs)
    ) {
      for (const [b, k] of Object.entries(u.resumeArgs)) {
        const S = i.resumeArgs?.[b];
        if (S !== void 0 && S !== k)
          throw new v(
            "cursor_stale",
            "The resolved read scope changed. Restart without its cursor.",
          );
      }
      i.resumeArgs = { ...i.resumeArgs, ...u.resumeArgs };
    }
    const m = u.workUnits ?? 1;
    if (
      ((p += 1),
      (g += Number.isSafeInteger(m) && m > 0 ? m : 1),
      i.offset > u.items.length || (i.offset > 0 && i.fingerprint !== q))
    )
      throw new v(
        "cursor_stale",
        "The saved page changed. Restart this read without its cursor.",
      );
    for (let b = i.offset; b < u.items.length; b += 1) {
      if ((r?.throwIfAborted(), performance.now() - n >= t.maxElapsedMs))
        return (
          (i = { ...i, offset: b, fingerprint: q }),
          o({ reason: "time_budget" })
        );
      const k = u.items[b];
      if (i.nextIndex >= e.start) {
        const S = new TextEncoder().encode(
          JSON.stringify(k) ?? "null",
        ).byteLength;
        if (d.length > 0 && f + S > t.maxOutputBytes)
          return (
            (i = { ...i, offset: b, fingerprint: q }),
            o({ reason: "response_size" })
          );
        (d.push(k), (f += S));
      }
      if (
        ((i.nextIndex += 1),
        (i.offset = b + 1),
        (i.fingerprint = q),
        i.nextIndex > e.end)
      ) {
        const S = i.offset === u.items.length && u.nextPosition === void 0;
        return (
          i.offset === u.items.length &&
            u.nextPosition !== void 0 &&
            (i = {
              ...i,
              position: u.nextPosition,
              offset: 0,
              fingerprint: void 0,
            }),
          o(void 0, S)
        );
      }
      if (f >= t.maxOutputBytes) {
        if (i.offset === u.items.length && u.nextPosition === void 0)
          return o(
            i.providerResultCap ? { reason: "provider_result_cap" } : void 0,
            !0,
          );
        if (i.offset === u.items.length) {
          if (u.nextPosition === i.position)
            return o({ reason: "provider_error" });
          i = {
            ...i,
            position: u.nextPosition,
            offset: 0,
            fingerprint: void 0,
          };
        }
        return o({ reason: "response_size" });
      }
    }
    if (u.nextPosition === void 0)
      return o(
        i.providerResultCap ? { reason: "provider_result_cap" } : void 0,
        !0,
      );
    if (u.nextPosition === i.position) return o({ reason: "provider_error" });
    const x =
      s.pageSizeMode === "remaining"
        ? Math.min(s.checkpoint.pageSize, e.end - i.nextIndex + 1)
        : i.pageSize;
    i = {
      ...i,
      position: u.nextPosition,
      pageSize: x,
      offset: 0,
      fingerprint: void 0,
    };
  }
}
const C = "wpr1:",
  L = 16384,
  P = h.pipe(h.number(), h.safeInteger(), h.minValue(1)),
  j = h.strictObject({
    purpose: h.literal("whatsapp-read-pagination"),
    version: h.literal(1),
    expiresAt: P,
    scope: h.pipe(h.string(), h.regex(/^[a-f0-9]{64}$/)),
    checkpoint: h.strictObject({
      position: h.optional(h.pipe(h.string(), h.maxLength(2048))),
      pageSize: h.pipe(P, h.maxValue(100)),
      offset: h.pipe(
        h.number(),
        h.safeInteger(),
        h.minValue(0),
        h.maxValue(100),
      ),
      fingerprint: h.optional(h.pipe(h.string(), h.regex(/^[a-f0-9]{64}$/))),
      nextIndex: P,
      unfinished: h.optional(h.strictObject({ start: P, end: P })),
    }),
  });
class T extends Error {
  constructor(e) {
    (super("A synchronized WhatsApp page could not be read."),
      (this.response = e));
  }
}
class D extends Error {
  code = "invalid_cursor";
}
class N extends Error {
  code = "invalid_provider_page";
}
function Z(s) {
  return (
    s.action === "whatsapp_list_chats" ||
    s.action === "whatsapp_list_contacts" ||
    s.action === "whatsapp_list_messages" ||
    s.action === "whatsapp_search_messages"
  );
}
function Q(s, e) {
  try {
    if (
      !s.startsWith(C) ||
      s.length > L ||
      !/^[A-Za-z0-9_-]+$/.test(s.slice(C.length))
    )
      throw new Error("Invalid cursor encoding.");
    const t = h.parse(
        j,
        JSON.parse(
          E.safeStorage.decryptString(
            Buffer.from(s.slice(C.length), "base64url"),
          ),
        ),
      ),
      r = t.checkpoint;
    if (
      t.scope !== e ||
      t.expiresAt <= Date.now() ||
      (r.offset > 0 && !r.fingerprint) ||
      (r.unfinished && r.unfinished.end < r.unfinished.start)
    )
      throw new Error("The continuation scope or checkpoint is invalid.");
    return r;
  } catch {
    throw new D(
      "This continuation is invalid, expired, or belongs to a different account, profile, action, or filter. Restart without its cursor.",
    );
  }
}
function ee(s, e) {
  const t = h.parse(j, {
      purpose: "whatsapp-read-pagination",
      version: 1,
      expiresAt: Date.now() + 864e5,
      scope: s,
      checkpoint: e,
    }),
    r =
      C + E.safeStorage.encryptString(JSON.stringify(t)).toString("base64url");
  if (r.length > L)
    throw new D("The continuation is too large. Restart this read.");
  return r;
}
function te(s, e, t) {
  const r = typeof e == "string" ? e : void 0;
  if (s.action === "whatsapp_list_chats") {
    const { start: n, end: i, ...a } = s.params;
    return { action: s.action, params: { ...a, cursor: r, limit: t } };
  }
  if (s.action === "whatsapp_list_contacts") {
    const { start: n, end: i, ...a } = s.params;
    return { action: s.action, params: { ...a, cursor: r, limit: t } };
  }
  if (s.action === "whatsapp_list_messages") {
    const { start: n, end: i, ...a } = s.params;
    return { action: s.action, params: { ...a, cursor: r, limit: t } };
  }
  return { action: s.action, params: { ...s.params, cursor: r, limit: t } };
}
function re(s) {
  return "chats" in s ? s.chats : "contacts" in s ? s.contacts : s.messages;
}
function se(s) {
  return "message_id" in s
    ? s.message_id
    : "contact_id" in s
      ? s.contact_id
      : s.chat_id;
}
function ne(s, e) {
  if (s === "whatsapp_list_chats") {
    const t = h.safeParse(W.whatsapp_list_chats.dataOutputSchema, e);
    if (t.success) return t.output;
  } else if (s === "whatsapp_list_contacts") {
    const t = h.safeParse(W.whatsapp_list_contacts.dataOutputSchema, e);
    if (t.success) return t.output;
  } else {
    const t = h.safeParse(W.whatsapp_list_messages.dataOutputSchema, e);
    if (t.success) return t.output;
  }
  throw new N(
    "WhatsApp returned an invalid collection page. Restart this read.",
  );
}
async function ie(s) {
  const { request: e } = s,
    t = {
      kind: e.action === "whatsapp_search_messages" ? "search" : "list",
      legacyFields: ["limit", "cursor"],
      defaultCount: 30,
    };
  try {
    const r = Object.fromEntries(
        Object.entries(e.params).filter(
          ([o]) =>
            Object.hasOwn(s.suppliedParams, o) &&
            Reflect.get(s.suppliedParams, o) !== void 0,
        ),
      ),
      n = typeof r.cursor == "string" && r.cursor.startsWith(C);
    if (V(t, r, n) === "legacy") return await s.executePage(e);
    const i = Object.fromEntries(
        Object.entries(e.params)
          .filter(
            ([o, u]) =>
              !["cursor", "limit", "start", "end"].includes(o) && u !== void 0,
          )
          .sort(([o], [u]) => o.localeCompare(u)),
      ),
      a = I.createHash("sha256")
        .update(JSON.stringify({ ...s.scope, action: e.action, filters: i }))
        .digest("hex"),
      d = typeof r.cursor == "string" ? Q(r.cursor, a) : void 0,
      p = await G({
        request: K(t, r, d),
        checkpoint: d ?? { pageSize: 100, offset: 0, nextIndex: 1 },
        budget: {
          maxPages: 10,
          maxWorkUnits: 10,
          maxElapsedMs: 2e4,
          maxOutputBytes: 512 * 1024,
        },
        signal: s.signal,
        identity: se,
        classifyError: (o) => {
          if (o instanceof N) return { reason: "provider_error" };
          if (!(o instanceof T)) return;
          const u = o.response;
          if (
            !(
              u.notConnectedToIntegration ||
              u.kind === "auth_expired" ||
              u.kind === "not_connected" ||
              _.parseWhatsAppCredentialFailure(u.errorCode) ||
              [
                "whatsapp_worker_stopped",
                "whatsapp_worker_timeout",
                "whatsapp_connection_unavailable",
              ].includes(u.errorCode ?? "")
            )
          )
            return {
              reason:
                u.kind === "rate_limited" ? "rate_limit" : "provider_error",
              ...(u.retryAfterMs !== void 0
                ? { retryAfterMs: u.retryAfterMs }
                : {}),
            };
        },
        fetchPage: async (o, u) => {
          const q = await s.executePage(te(e, o, u));
          if (q.isError) throw new T(q);
          const c = ne(e.action, q.data);
          return {
            data: c,
            items: re(c),
            nextPosition: c.next_cursor ?? void 0,
          };
        },
      }),
      g = {
        ...(p.checkpoint ? { nextCursor: ee(a, p.checkpoint) } : {}),
        ...(p.partial ? { partial: p.partial } : {}),
      },
      f = { next_cursor: g.nextCursor ?? null, ...g },
      l = p.firstPage;
    return "chats" in l
      ? {
          isError: !1,
          data: { ...l, chats: p.items.filter((o) => "is_group" in o), ...f },
        }
      : "contacts" in l
        ? {
            isError: !1,
            data: {
              ...l,
              contacts: p.items.filter((o) => "contact_id" in o),
              ...f,
            },
          }
        : {
            isError: !1,
            data: {
              ...l,
              messages: p.items.filter((o) => "message_id" in o),
              ...f,
            },
          };
  } catch (r) {
    if (r instanceof T) return r.response;
    if (r instanceof D || r instanceof N || r instanceof v)
      return { isError: !0, error: r.message, errorCode: r.code };
    throw r;
  }
}
const U = 3e4;
class ae {
  constructor(e, t, r, n = () => {}) {
    ((this.changed = e),
      (this.statusChanged = t),
      (this.legacyProfiles = r),
      (this.profileFileRoot = n));
  }
  connectMode = "qrCode";
  sessions = new Map();
  attempts = new Map();
  operations = new Map();
  revisions = new Map();
  owners = new Map();
  failedWorkers = new Set();
  recoveryAfter = new Map();
  owner(e) {
    const t = w.authManager.forProfile(e).accountId;
    if (!t || !w.cachedSessionUserId(t))
      throw new Error("Sign in to Orbitra before connecting WhatsApp.");
    return t;
  }
  directory(e, t) {
    const r = I.createHash("sha256")
      .update(JSON.stringify(t ? [e, t] : [e]))
      .digest("hex");
    return R.join(B.getAppDataPath(), "whatsapp", r);
  }
  revision(e) {
    return this.revisions.get(e) ?? 0;
  }
  run(e, t) {
    const r = this.revision(e),
      n = this.owner(e),
      i = { owner: n, profileId: e, revision: r };
    this.owners.set(e, n);
    const a = (this.operations.get(n) ?? Promise.resolve()).then(async () => {
        this.assertScope(i);
        const p = await t(i);
        return (this.assertScope(i), p);
      }),
      d = a.then(
        () => {},
        () => {},
      );
    return (
      this.operations.set(n, d),
      d.then(() => {
        this.operations.get(n) === d && this.operations.delete(n);
      }),
      a
    );
  }
  assertScope(e) {
    if (
      e.revision !== this.revision(e.profileId) ||
      this.owner(e.profileId) !== e.owner
    )
      throw new Error("The WhatsApp connection closed.");
  }
  assertOwner(e) {
    if (
      ![...this.owners].some(
        ([r, n]) =>
          n === e.owner && w.authManager.forProfile(r).accountId === n,
      ) ||
      this.sessions.get(e.owner) !== e
    )
      throw new Error("The WhatsApp account is no longer available.");
  }
  notify(e) {
    for (const [t, r] of this.owners) {
      if (r !== e.owner || w.authManager.forProfile(t).accountId !== r)
        continue;
      const n = this.attempts.get(t);
      (n?.session === e && this.statusChanged(t, n.id),
        this.changed(t).catch(() => {}));
    }
  }
  async open(e, t) {
    this.assertScope(e);
    const r = this.sessions.get(e.owner);
    if (this.failedWorkers.has(e.owner)) return r ?? null;
    if (r) {
      if ((this.assertOwner(r), r.closed)) await r.closed;
      else if (r.alive) return (await r.ready, r);
      await this.closeSession(r);
    }
    try {
      return await this.createSession(e, t);
    } catch (n) {
      throw (
        n instanceof _.WhatsAppCredentialError
          ? this.recoveryAfter.set(e.owner, Date.now() + U)
          : this.failedWorkers.add(e.owner),
        w.logger.warn("[WhatsApp] Automatic worker restart paused", {
          userId: w.cachedSessionUserId(e.owner),
          profileId: e.profileId,
          outcome: "paused",
          reason:
            n instanceof _.WhatsAppCredentialError
              ? n.reason
              : "startup-failed",
        }),
        n
      );
    }
  }
  async openForExecution(e) {
    const t = this.sessions.get(e.owner);
    if (!t || (t.alive && t.state.recovery === "reacquire")) {
      if (Date.now() < (this.recoveryAfter.get(e.owner) ?? 0))
        throw new _.WhatsAppCredentialError("credential_recovery_backoff");
      t &&
        (this.recoveryAfter.set(e.owner, Date.now() + U),
        w.logger.info("[WhatsApp] Resuming saved connection", {
          userId: w.cachedSessionUserId(e.owner),
          profileId: e.profileId,
          reason: "credential_session_closed",
        }),
        await this.closeSession(t));
    }
    return this.open(e, !1);
  }
  async waitForConnection(e, t) {
    (t?.throwIfAborted(),
      e.state.status.connection !== "connected" &&
        (await new Promise((r, n) => {
          const i = (f) => {
              (clearTimeout(g),
                e.worker.removeListener("message", p),
                e.worker.removeListener("exit", a),
                e.worker.removeListener("error", a),
                t?.removeEventListener("abort", d),
                f ? n(f) : r());
            },
            a = () =>
              i(
                new _.WhatsAppOperationError(
                  "WhatsApp stopped. Choose Reconnect before continuing.",
                ),
              ),
            d = () =>
              i(new DOMException("WhatsApp action canceled.", "AbortError")),
            p = () => {
              const f = e.state.status.connection;
              f === "connected"
                ? i()
                : f !== "connecting" &&
                  f !== "reconnecting" &&
                  i(
                    new _.WhatsAppOperationError(
                      "WhatsApp is unavailable. Stop the remaining WhatsApp calls in this batch and choose Reconnect in Settings > Integrations.",
                    ),
                  );
            },
            g = setTimeout(
              () =>
                i(
                  new _.WhatsAppOperationError(
                    "WhatsApp is still reconnecting. Stop the remaining WhatsApp calls in this batch and try again later. Keep the original request_id for an interrupted send.",
                  ),
                ),
              2e4,
            );
          (e.worker.on("message", p),
            e.worker.once("exit", a),
            e.worker.once("error", a),
            t?.addEventListener("abort", d, { once: !0 }),
            p());
        })));
  }
  async createSession(e, t) {
    this.assertScope(e);
    const { profileId: r, owner: n, revision: i } = e,
      a = this.directory(n);
    if (
      !(await A.access(a).then(
        () => !0,
        () => !1,
      ))
    ) {
      const c = [];
      for (const y of new Set([r, ...this.legacyProfiles(n)])) {
        const m = this.directory(n, y);
        (await A.access(R.join(m, "messages.db")).then(
          () => !0,
          () => !1,
        )) && c.push(m);
      }
      if (c.length > 1)
        throw new Error(
          "Several local WhatsApp connections exist. Keep the one you want before moving to account-wide storage.",
        );
      c[0] && (await A.rename(c[0], a));
    }
    const p = R.join(a, "key");
    (await E.app.whenReady(),
      w.requireSecureStorage(),
      await A.mkdir(a, { recursive: !0, mode: 448 }));
    const g = await A.readFile(p).catch((c) => {
        if (c.code === "ENOENT") return null;
        throw c;
      }),
      f = g
        ? Buffer.from(E.safeStorage.decryptString(g), "base64")
        : I.randomBytes(32);
    if (f.length !== 32)
      throw new Error(
        "The WhatsApp encryption key is invalid. Disconnect and link the account again.",
      );
    if (!g) {
      const c = `${p}.${I.randomUUID()}.tmp`;
      (await A.writeFile(c, E.safeStorage.encryptString(f.toString("base64")), {
        mode: 384,
        flag: "wx",
      }),
        await A.rename(c, p));
    }
    if (i !== this.revision(r) || this.owner(r) !== n)
      throw (f.fill(0), new Error("The Orbitra account changed."));
    const l = E.utilityProcess.fork(w.getMainBundlePath("WhatsAppWorker"), [], {
      stdio: "pipe",
      serviceName: "WhatsApp",
    });
    (l.stdout?.resume(), l.stderr?.resume());
    const o = {
      owner: n,
      profileId: r,
      worker: l,
      revision: i,
      alive: !0,
      pending: new Map(),
      ready: Promise.resolve(),
      exited: new Promise((c) => l.once("exit", () => c())),
      state: {
        kind: "state",
        status: { ...W.initialWhatsAppStatus },
        recovery: "resume",
        qrImage: null,
        accountName: null,
        accountId: null,
      },
    };
    let u = !0;
    (this.sessions.set(n, o),
      l.on("spawn", () => {
        o.alive || l.kill();
      }),
      l.on("message", (c) => {
        if (c.kind === "result") {
          const m = o.pending.get(c.id);
          m &&
            (clearTimeout(m.timer),
            o.pending.delete(c.id),
            m.resolve(c.result));
          return;
        }
        if (this.sessions.get(n) !== o) return;
        if (c.kind === "auth-request") {
          Promise.resolve()
            .then(async () => {
              this.assertOwner(o);
              const m = await w.whatsappSessionRequest(n, c.request);
              return (
                this.assertOwner(o),
                { kind: "auth-result", id: c.id, response: m }
              );
            })
            .catch((m) => {
              const x =
                m instanceof _.WhatsAppCredentialError
                  ? m
                  : new _.WhatsAppCredentialError("credential_session_closed");
              return (
                w.logger.warn("[WhatsApp] Credential request failed", {
                  userId: w.cachedSessionUserId(n),
                  profileId: r,
                  operation: c.request.operation,
                  reason: x.reason,
                  statusCode: x.statusCode,
                }),
                {
                  kind: "auth-result",
                  id: c.id,
                  failure: { reason: x.reason, statusCode: x.statusCode },
                }
              );
            })
            .then((m) => {
              o.alive && l.postMessage(m);
            });
          return;
        }
        if (c.kind === "diagnostic") {
          w.logger.info("[WhatsApp] Connection diagnostic", {
            profileId: r,
            reason: c.reason,
            statusCode: c.statusCode,
          });
          return;
        }
        if (c.kind === "history-progress") {
          w.logger.info("[WhatsApp] History progress", { profileId: r, ...c });
          return;
        }
        const y = o.state;
        ((o.state = c),
          (y.qrImage !== c.qrImage ||
            y.accountName !== c.accountName ||
            y.status.connection !== c.status.connection) &&
            this.publishPairing(o),
          !u &&
            (y.status.connection !== c.status.connection ||
              y.accountName !== c.accountName) &&
            this.notify(o));
      }));
    const q = (c, y) => {
      if (o.alive) {
        (w.logger.warn("[WhatsApp] Worker stopped", {
          profileId: r,
          reason: c,
          exitCode: y,
          initializing: u,
        }),
          (o.alive = !1),
          o.closed || this.failedWorkers.add(n),
          (o.state = {
            ...o.state,
            qrImage: null,
            status: { ...o.state.status, connection: "error" },
          }));
        for (const m of o.pending.values())
          (clearTimeout(m.timer),
            m.resolve({
              isError: !0,
              error:
                "The WhatsApp connection stopped. A pending send may have completed; check the chat before sending again.",
              kind: "network",
              errorCode: "whatsapp_worker_stopped",
              retryable: !1,
            }));
        (o.pending.clear(),
          this.sessions.get(n) === o &&
            (this.publishPairing(o), u || this.notify(o)));
      }
    };
    (l.on("error", () => q("worker-error")),
      l.on("exit", (c) => q("worker-exit", c)),
      (o.ready = this.request(o, {
        kind: "open",
        directory: a,
        key: f,
        pair: t,
      })
        .then((c) => {
          if (c.isError) {
            const y = _.parseWhatsAppCredentialFailure(c.errorCode);
            throw y
              ? new _.WhatsAppCredentialError(y)
              : new _.WhatsAppOperationError(c.error);
          }
        })
        .finally(() => f.fill(0))));
    try {
      return (await o.ready, o);
    } catch (c) {
      throw (await this.closeSession(o), c);
    } finally {
      u = !1;
    }
  }
  async request(e, t, r) {
    if ((r?.throwIfAborted(), this.assertOwner(e), !e.alive))
      return {
        isError: !0,
        error:
          "WhatsApp stopped. Try connecting again. Your saved connection is kept.",
        kind: "network",
        errorCode: "whatsapp_worker_stopped",
        retryable: !1,
      };
    let n = 45e3;
    t.kind === "execute" &&
      (t.request.action === "whatsapp_download_attachment" && (n = 24e4),
      t.request.action === "whatsapp_send_message" &&
        t.request.params.attachments.length &&
        (n = 6e4 + t.request.params.attachments.length * 36e4));
    const i = I.randomUUID(),
      a = () => {
        e.alive && e.worker.postMessage({ kind: "cancel", id: i });
      };
    r?.addEventListener("abort", a, { once: !0 });
    try {
      return await new Promise((d) => {
        const p = setTimeout(() => {
          (e.pending.delete(i),
            e.worker.kill(),
            d({
              isError: !0,
              error:
                "WhatsApp did not respond in time. A send may have completed; reuse its request_id to check it.",
              kind: "timeout",
              errorCode: "whatsapp_worker_timeout",
              retryable: !1,
            }));
        }, n);
        (e.pending.set(i, { resolve: d, timer: p }),
          e.worker.postMessage({ ...t, id: i }));
      });
    } finally {
      r?.removeEventListener("abort", a);
    }
  }
  async start(e) {
    return this.run(e.profileId, async (t) => {
      (this.failedWorkers.delete(t.owner), this.recoveryAfter.delete(t.owner));
      const r = await this.open(t, !1).catch((a) => {
        if (a instanceof _.WhatsAppCredentialError) throw a;
        return null;
      });
      if (r?.state.status.connection === "connected")
        return {
          success: !0,
          alreadyConnected: !0,
          sessionId: I.randomUUID(),
          result: { connectionId: r.state.accountId ?? "whatsapp-local" },
        };
      if (r) {
        const a = H(r.state.status.connection, r.state.recovery);
        a === "relink"
          ? await this.disconnectLocal(t)
          : a === "restart" && (await this.closeSession(r));
      }
      const n = await this.open(t, !0);
      if (!n) throw new Error("Unable to start WhatsApp.");
      if (
        [...this.attempts].some(
          ([a, d]) =>
            a !== e.profileId && d.session === n && d.expiresAt > Date.now(),
        )
      )
        throw new Error(
          "Finish connecting WhatsApp in the other profile first.",
        );
      const i = {
        id: I.randomUUID(),
        session: n,
        mode: n.state.accountName ? "resume" : "link",
        expiresAt: Date.now() + 5 * 6e4,
      };
      return (
        this.attempts.set(e.profileId, i),
        this.publishPairing(n),
        {
          success: !0,
          sessionId: i.id,
          connectMode: "qrCode",
          expiresAt: i.expiresAt,
          display: { name: "WhatsApp" },
        }
      );
    });
  }
  async getStatus(e) {
    const t = this.attempts.get(e.profileId);
    if (!t || t.id !== e.sessionId) return { phase: "cancelled" };
    switch ((this.assertOwner(t.session), t.session.state.status.connection)) {
      case "connected":
        return {
          phase: "success",
          result: {
            connectionId: t.session.state.accountId ?? "whatsapp-local",
          },
        };
      case "error":
      case "disconnected":
        return {
          phase: "error",
          error: {
            message:
              t.session.state.recovery === "relink"
                ? "WhatsApp no longer accepts this linked device. Connect again to link your phone."
                : "WhatsApp could not reconnect. Your saved connection is kept. Try again.",
          },
        };
      default:
        return {
          phase: t.session.state.accountName ? "verifying" : "awaiting-user",
        };
    }
  }
  publishPairing(e) {
    for (const [t, r] of this.attempts)
      r.session === e &&
        w.authManager.forProfile(t).accountId === e.owner &&
        this.publishAttempt(t, r);
  }
  publishAttempt(e, t) {
    const r = t.session,
      { status: n, qrImage: i, accountName: a } = r.state;
    if (
      Date.now() > t.expiresAt ||
      ["connected", "disconnected", "error"].includes(n.connection)
    ) {
      this.clearPairing(e);
      return;
    }
    w.eventManager.publishIPCState("integrations.whatsappPairing", e, {
      pairing: i
        ? { sessionId: t.id, phase: "scan", qrImage: i }
        : {
            sessionId: t.id,
            phase: a ? "linking" : "preparing",
            qrImage: null,
          },
    });
  }
  clearPairing(e) {
    (w.eventManager.publishIPCState("integrations.whatsappPairing", e, {
      pairing: null,
    }),
      w.ipcStateRegistry.invalidate(
        "ipc:state",
        w.toIPCStateSubscriptionKey("integrations.whatsappPairing", e),
      ));
  }
  async cancel(e) {
    (await this.run(e.profileId, async (t) => {
      const r = this.attempts.get(e.profileId);
      if (!(!r || r.id !== e.sessionId)) {
        if (r.session.state.status.connection === "connected")
          throw new Error("WhatsApp has already connected.");
        if (r.mode === "resume") {
          (this.attempts.delete(e.profileId), this.clearPairing(e.profileId));
          return;
        }
        await this.disconnectLocal(t);
      }
    }),
      await this.changed(e.profileId));
  }
  async complete(e) {
    (this.attempts.get(e.profileId)?.id === e.sessionId &&
      (this.attempts.delete(e.profileId), this.clearPairing(e.profileId)),
      await this.changed(e.profileId));
  }
  async connection(e) {
    const t = this.owner(e);
    this.owners.set(e, t);
    const r = this.sessions.get(t),
      n = r?.state.accountName
        ? null
        : await w.readWhatsAppSummary(t).catch(() => null);
    if (this.owner(e) !== t) throw new Error("The Orbitra account changed.");
    return w.whatsappConnection(
      n,
      r
        ? {
            accountName: r.state.accountName,
            accountId: r.state.accountId,
            connection: r.state.status.connection,
          }
        : void 0,
      this.failedWorkers.has(t),
    );
  }
  async execute(e, t, r, n, i) {
    i?.throwIfAborted();
    const a = h.safeParse(W.whatsappRequestSchema, { action: t, params: r });
    return a.success
      ? this.run(e, async (d) => {
          i?.throwIfAborted();
          const p = await this.openForExecution(d);
          if (!p)
            return {
              isError: !0,
              error: "Connect WhatsApp on this computer first.",
              notConnectedToIntegration: !0,
            };
          if (
            n &&
            n !== "account-1" &&
            n !== p.state.accountId &&
            n !== "whatsapp-local"
          )
            return {
              isError: !0,
              error: "Select the connected WhatsApp account.",
            };
          i?.throwIfAborted();
          let g;
          if (
            ((a.output.action === "whatsapp_send_message" &&
              a.output.params.attachments.length > 0) ||
              a.output.action === "whatsapp_download_attachment") &&
            ((g = this.profileFileRoot(e)),
            !g || R.dirname(g) !== _.getSyncedLayout(d.owner).accountRoot)
          )
            return {
              isError: !0,
              error: "The active Orbitra profile files are not available.",
            };
          ($(a.output.action) && (await this.waitForConnection(p, i)),
            i?.throwIfAborted());
          const f = async (l) => {
            (i?.throwIfAborted(), this.assertOwner(p));
            const o = await this.request(
              p,
              { kind: "execute", request: l, fileRoot: g },
              i,
            );
            return (this.assertOwner(p), o);
          };
          return Z(a.output)
            ? await ie({
                request: a.output,
                suppliedParams: r,
                scope: {
                  owner: d.owner,
                  profileId: e,
                  accountId: p.state.accountId ?? "whatsapp-local",
                },
                executePage: f,
                signal: i,
              })
            : await f(a.output);
        }).catch(
          (d) => (
            i?.throwIfAborted(),
            d instanceof _.WhatsAppCredentialError
              ? {
                  isError: !0,
                  error: d.message,
                  kind: d.kind,
                  errorCode: d.reason,
                  retryable: !1,
                }
              : {
                  isError: !0,
                  error:
                    d instanceof _.WhatsAppOperationError
                      ? d.message
                      : "The local WhatsApp connection is unavailable. Choose Reconnect in Settings > Integrations before continuing.",
                  kind: "network",
                  errorCode: "whatsapp_connection_unavailable",
                  retryable: !1,
                }
          ),
        )
      : {
          isError: !0,
          error:
            "Invalid WhatsApp action or parameters. Load the action schema and try again.",
        };
  }
  async disconnect(e) {
    (await this.run(e, (t) => this.disconnectLocal(t)), await this.changed(e));
  }
  async disconnectLocal(e) {
    this.assertScope(e);
    const { profileId: t, owner: r } = e,
      n = this.sessions.get(r),
      i = await w.whatsappSessionRequest(r, { operation: "summary" });
    for (const [a, d] of this.attempts)
      d.session.owner === r && (this.attempts.delete(a), this.clearPairing(a));
    if (
      (n &&
        (await this.request(n, { kind: "disconnect" }),
        await this.closeSession(n)),
      i.status === "summary")
    ) {
      const a = await w.whatsappSessionRequest(r, {
        operation: "disconnect",
        accountId: i.accountId,
      });
      if (a.status !== "ok" && a.status !== "missing")
        throw new Error("Unable to remove WhatsApp credentials.");
    }
    (await A.rm(this.directory(r), { recursive: !0, force: !0 }),
      await A.rm(this.directory(r, t), { recursive: !0, force: !0 }),
      this.failedWorkers.delete(r));
  }
  closeSession(e) {
    return ((e.closed ??= this.stopSession(e)), e.closed);
  }
  async stopSession(e) {
    (e.alive && (await this.request(e, { kind: "shutdown" }).catch(() => {})),
      this.sessions.get(e.owner) === e && this.sessions.delete(e.owner),
      (e.alive = !1),
      e.worker.pid !== void 0 && (e.worker.kill(), await e.exited));
    for (const t of e.pending.values())
      (clearTimeout(t.timer),
        t.resolve({
          isError: !0,
          error: "The WhatsApp connection closed.",
          retryable: !1,
        }));
    e.pending.clear();
  }
  async closeProfile(e) {
    (this.revisions.set(e, this.revision(e) + 1),
      this.attempts.delete(e),
      this.clearPairing(e));
    const t = this.owners.get(e);
    if (!t) return;
    const r = [...this.owners].some(
      ([n, i]) =>
        n !== e && i === t && w.authManager.forProfile(n).accountId === t,
    );
    if (!r) {
      const n = this.sessions.get(t);
      n && (await this.closeSession(n));
    }
    (await this.operations.get(t),
      this.owners.delete(e),
      r || (this.failedWorkers.delete(t), this.recoveryAfter.delete(t)));
  }
  async closeAccount(e) {
    w.invalidateWhatsAppSummary(e);
    const t = [...this.owners].filter(([, n]) => n === e).map(([n]) => n);
    for (const n of t)
      (this.revisions.set(n, this.revision(n) + 1),
        this.attempts.delete(n),
        this.clearPairing(n));
    const r = this.sessions.get(e);
    (r && (await this.closeSession(r)), await this.operations.get(e));
    for (const n of t) this.owners.delete(n);
    (this.failedWorkers.delete(e), this.recoveryAfter.delete(e));
  }
  async deleteProfileData(e, t) {
    (await this.closeProfile(e),
      await A.rm(this.directory(t, e), { recursive: !0, force: !0 }));
  }
  async close() {
    await Promise.all(
      [...new Set(this.owners.values())].map((e) => this.closeAccount(e)),
    );
  }
}
exports.WhatsAppManager = ae;
