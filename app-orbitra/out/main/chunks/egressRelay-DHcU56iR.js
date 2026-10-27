"use strict";
(function () {
  try {
    var r =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    r.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var r =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new r.Error().stack;
    e &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[e] = "89d60f94-6867-48c1-b14f-019961c529f2"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-89d60f94-6867-48c1-b14f-019961c529f2"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const y = require("node:http"),
  w = require("node:https"),
  b = require("node:timers/promises"),
  i = require("../main-app.js"),
  A = require("valibot");
require("node:crypto");
require("node:path");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
require("node:fs/promises");
require("node:os");
require("node:fs");
require("./protocol-BGN1BQCi.js");
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
function R(r) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (r) {
    for (const t in r)
      if (t !== "default") {
        const a = Object.getOwnPropertyDescriptor(r, t);
        Object.defineProperty(
          e,
          t,
          a.get ? a : { enumerable: !0, get: () => r[t] },
        );
      }
  }
  return ((e.default = r), Object.freeze(e));
}
const g = R(A),
  k = new Set([
    "accept-encoding",
    "connection",
    "content-length",
    "cookie",
    "host",
    "transfer-encoding",
  ]),
  C = new Set([
    "connection",
    "content-encoding",
    "content-length",
    "set-cookie",
    "transfer-encoding",
  ]),
  _ = 256 * 1024,
  h = 1e4,
  O = 3,
  D = 1e3,
  G = 3e4,
  v = g.pipe(g.string(), g.parseJson(), i.ChatGPTPlanEgressRequestSchema),
  I = 4001;
async function T(r, e, t) {
  const a = new AbortController(),
    o = setTimeout(
      () => a.abort(new DOMException("No response in time", "TimeoutError")),
      e,
    );
  try {
    return await t(AbortSignal.any([r, a.signal]));
  } finally {
    clearTimeout(o);
  }
}
function S(r) {
  const e = new i.WebSocket(r.url, {
      agent: r.url.startsWith("wss:") ? w.globalAgent : y.globalAgent,
      handshakeTimeout: G,
      headers: { Authorization: `Bearer ${r.token}` },
    }),
    t = () => (r.signal.aborted ? { outcome: "stopped" } : null),
    a = new Promise((u) => {
      (e.on("error", () =>
        u(t() ?? { outcome: "failed", reason: "socket_error" }),
      ),
        e.on("close", (s) => {
          u(
            s === 1e3
              ? { outcome: "delivered" }
              : s === I
                ? { outcome: "stopped" }
                : (t() ?? { outcome: "failed", reason: `close_${s}` }),
          );
        }));
    }),
    o = new Promise((u) => {
      (e.once("open", () => u(null)),
        e.once("unexpected-response", (s, q) => {
          (q.resume(),
            e.terminate(),
            u({ outcome: "failed", reason: `http_${q.statusCode ?? 0}` }));
        }),
        a.then(u));
    }),
    c = () => {
      if (e.readyState !== i.WebSocket.OPEN) {
        e.terminate();
        return;
      }
      (e.close(
        i.CHATGPT_PLAN_EGRESS_DESKTOP_STOPPED_CLOSE_CODE,
        "Desktop stopped",
      ),
        setTimeout(() => e.terminate(), h).unref());
    };
  return (
    r.signal.addEventListener("abort", c, { once: !0 }),
    a.then(() => r.signal.removeEventListener("abort", c)),
    { socket: e, opened: o, closed: a }
  );
}
function N(r) {
  const e = /^http_(\d+)$/.exec(r);
  if (!e) return !0;
  const t = Number(e[1]);
  return t === 0 || t === 409 || t === 429 || t >= 500;
}
function M(r) {
  let e = S(r);
  const t = Promise.withResolvers(),
    a = (async () => {
      for (let o = 1; ; o += 1) {
        const c =
          (await e.opened) ?? (await Promise.race([t.promise, e.closed]));
        if (!c) return e;
        if (c.outcome !== "failed" || !N(c.reason) || o >= O) return c;
        r.onReplaced(c.reason, o);
        try {
          await b.setTimeout(D * o, void 0, { signal: r.signal });
        } catch {
          return { outcome: "stopped" };
        }
        e = S(r);
      }
    })();
  return {
    deliver: async (o, c) => {
      t.resolve(null);
      const u = await a;
      if (!("socket" in u)) return (c?.cancel(), u);
      const { socket: s, closed: q } = u,
        m = (n) => new Promise((l, d) => s.send(n, (E) => (E ? d(E) : l()))),
        f = c?.getReader();
      q.then(() => f?.cancel());
      try {
        if ((await m(JSON.stringify(o)), f))
          for (;;) {
            const { done: n, value: l } = await f.read();
            if (n) break;
            for (let d = 0; d < l.byteLength; d += _)
              await m(l.subarray(d, d + _));
          }
        s.close(1e3);
      } catch {
        s.close(4002, "Response ended early");
      }
      return (setTimeout(() => s.terminate(), h).unref(), q);
    },
    dispose: () => e.socket.terminate(),
  };
}
async function L(r, e, t, a) {
  const o = new AbortController();
  try {
    await $(r, e, t, AbortSignal.any([a, o.signal]));
  } finally {
    o.abort();
  }
}
async function $(r, e, t, a) {
  const o = { userId: r, sessionId: e.sessionId, egressId: e.egressId },
    c = `/api/chatgpt-plan/sessions/${encodeURIComponent(e.sessionId)}/egress/${e.egressId}`,
    u = `?profileId=${encodeURIComponent(e.profileId)}`;
  let s;
  try {
    s = await T(a, i.CHATGPT_PLAN_EGRESS_CLAIM_TIMEOUT_MS, (n) =>
      i.authFetch(`${i.config.app.apiUrl}${c}/claim${u}`, {
        method: "POST",
        accountId: r,
        signal: n,
      }),
    );
  } catch (n) {
    i.logger.warn("[ChatGPTPlan] Desktop request could not be claimed", {
      ...o,
      outcome: "failed",
      reason: "claim_failed",
      errorName: n instanceof Error ? n.name : "error",
    });
    return;
  }
  if (!s.ok) {
    i.logger.info("[ChatGPTPlan] Desktop request not claimed", {
      ...o,
      outcome: "skipped",
      reason: `http_${s.status}`,
    });
    return;
  }
  const q = await t(),
    m = q
      ? M({
          url: `${i.config.app.apiUrl.replace(/^http/, "ws")}${c}/respond${u}`,
          token: q,
          signal: a,
          onReplaced: (n, l) =>
            i.logger.info(
              "[ChatGPTPlan] Desktop request answer connection replaced",
              { ...o, outcome: "retrying", reason: n, attempt: l },
            ),
        })
      : null,
    f = (n, l) =>
      m
        ? m.deliver(n, l)
        : (l?.cancel(),
          Promise.resolve({
            outcome: "failed",
            reason: "authentication_unavailable",
          }));
  try {
    const n = g.safeParse(
      v,
      s.headers.get(i.CHATGPT_PLAN_EGRESS_REQUEST_HEADER),
    );
    if (!n.success || n.output.url !== i.CHATGPT_PLAN_EGRESS_TARGET) {
      (i.logger.warn("[ChatGPTPlan] Desktop request refused", {
        ...o,
        outcome: "denied",
        reason: n.success ? "unexpected_target" : "invalid_request",
      }),
        await s.body?.cancel(),
        await f({ outcome: "refused" }, null));
      return;
    }
    const l = n.output.headers.filter(([p]) => !k.has(p));
    let d;
    try {
      d = await T(a, i.CHATGPT_PLAN_EGRESS_RESPONSE_TIMEOUT_MS, (p) => {
        const P = {
          method: "POST",
          headers: l,
          body: s.body,
          duplex: "half",
          redirect: "manual",
          signal: p,
        };
        return fetch(i.CHATGPT_PLAN_EGRESS_TARGET, P);
      });
    } catch (p) {
      (i.logger.warn("[ChatGPTPlan] Desktop request could not reach OpenAI", {
        ...o,
        outcome: "failed",
        reason: "openai_unreachable",
        errorName: p instanceof Error ? p.name : "error",
      }),
        await f({ outcome: "network_error" }, null));
      return;
    }
    const E = await f(
      {
        outcome: "response",
        status: d.status,
        headers: [...d.headers.entries()]
          .filter(([p]) => !C.has(p))
          .slice(0, 64),
      },
      d.body,
    );
    E.outcome === "failed" &&
      i.logger.warn("[ChatGPTPlan] Desktop request response not delivered", {
        ...o,
        outcome: "failed",
        reason: E.reason,
      });
  } catch (n) {
    (i.logger.warn("[ChatGPTPlan] Desktop request relay failed", {
      ...o,
      outcome: "failed",
      reason: "relay_error",
      errorName: n instanceof Error ? n.name : "error",
    }),
      await f({ outcome: "network_error" }, null).catch(() => {}));
  } finally {
    m?.dispose();
  }
}
exports.relayChatGPTPlanRequest = L;
