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
      (r._sentryDebugIds[e] = "887d6c14-f245-4a14-81d9-82ea7cd81912"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-887d6c14-f245-4a14-81d9-82ea7cd81912"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class f extends Error {
  constructor() {
    (super("Tool execution profile does not exist on this device"),
      (this.name = "ToolExecutionProfileMissingError"));
  }
}
const p =
  "This tool did not run because the browser profile it was sent to is not on this device. Retrying in this chat will fail the same way; a new chat on this device can run it.";
function u(r, e, t) {
  console.warn("[cloud-loop] refused tool call result was not committed", {
    sessionId: r,
    requestId: e,
    outcome: t,
  });
}
const h = 100,
  g = 200;
class I {
  constructor(e) {
    this.deps = e;
  }
  handlers = new Map();
  pending = new Map();
  subscriptions = [];
  preparingSessions = new Map();
  suspendedProfiles = new Set();
  start() {
    if (this.subscriptions.length > 0) return;
    const e = this.deps.getConduit();
    if (!e) return;
    this.subscriptions.push(
      e.subscribe("chat.tool-exec", { onMessage: (s) => this.route(s) }),
    );
    const t = this.deps.getInvocationConduit?.();
    t &&
      this.subscriptions.push(
        t.subscribe("chat.invocation", {
          onMessage: (s) => {
            s.channel === "chat.tool-exec" && this.route(s.data);
          },
        }),
      );
  }
  stop() {
    for (const e of this.subscriptions) e.unsubscribe();
    ((this.subscriptions = []),
      this.handlers.clear(),
      this.pending.clear(),
      this.preparingSessions.clear());
  }
  async suspendProfile(e) {
    (this.suspendedProfiles.add(e),
      await Promise.all(
        [...this.preparingSessions]
          .filter(([s]) => s.startsWith(`${e}\0`))
          .map(([, s]) => s),
      ));
    const t = [];
    for (const [s, o] of this.handlers) {
      const i = o.get(e);
      i &&
        (o.delete(e),
        o.size === 0 && this.handlers.delete(s),
        i.controls.stopForProfileChange
          ? t.push(i.controls.stopForProfileChange())
          : i.controls.cancelAllTools?.());
    }
    for (const [s, o] of this.pending) {
      for (const [i, n] of o)
        n.type === "tool_execution_request" &&
          (n.executionProfileId ?? n.profileId) === e &&
          o.delete(i);
      o.size === 0 && this.pending.delete(s);
    }
    await Promise.all(t);
  }
  resumeProfile(e) {
    this.suspendedProfiles.delete(e);
  }
  register(e, t, s = {}) {
    const o = this.handlers.get(e) ?? new Map(),
      i = s.profileId ?? "";
    if (this.suspendedProfiles.has(i)) {
      s.stopForProfileChange?.().catch((c) => {
        console.warn(
          "[cloud-loop] failed to stop a superseded profile executor",
          { profileId: i, error: c },
        );
      });
      return;
    }
    const n = o.get(i);
    if (n && n.handler !== t) {
      console.warn(
        "[cloud-loop] tool-exec register conflict; keeping live handler",
        { sessionId: e, profileId: i },
      );
      return;
    }
    (o.set(i, { handler: t, controls: s }), this.handlers.set(e, o));
    const l = this.pending.get(e);
    if (l) {
      for (const [c, d] of l)
        (d.type === "tool_execution_request" &&
          i &&
          (d.executionProfileId ?? d.profileId) !== i) ||
          (l.delete(c), t(d));
      l.size === 0 && this.pending.delete(e);
    }
  }
  unregister(e, t) {
    const s = this.handlers.get(e);
    if (s) {
      for (const [o, i] of s) i.handler === t && s.delete(o);
      s.size === 0 && this.handlers.delete(e);
    }
  }
  hasActiveTools(e) {
    return [...(this.handlers.get(e)?.values() ?? [])].some((t) =>
      t.controls.hasActiveTools?.(),
    );
  }
  hasForegroundTools(e) {
    return [...(this.handlers.get(e)?.values() ?? [])].some(
      ({ controls: t }) =>
        t.hasForegroundTools?.() ?? t.hasActiveTools?.() ?? !1,
    );
  }
  cancelAllTools(e) {
    let t = !1;
    for (const s of this.handlers.get(e)?.values() ?? [])
      s.controls.cancelAllTools?.() && (t = !0);
    return t;
  }
  resolveUserInput(e, t, s) {
    for (const o of this.handlers.get(e)?.values() ?? [])
      if (o.controls.resolveUserInput?.(t, s)) return !0;
    return !1;
  }
  route(e) {
    const t = this.handlers.get(e.sessionId);
    if (e.type === "tool_execution_cancel") {
      t?.size || this.buffer(e);
      for (const i of t?.values() ?? []) i.handler(e);
      return;
    }
    const s = e.executionProfileId ?? e.profileId;
    if (this.suspendedProfiles.has(s)) return;
    const o = t?.get(s) ?? t?.get("");
    if (!o) {
      (this.buffer(e), this.prepare(e));
      return;
    }
    o.handler(e);
  }
  prepare(e) {
    const t = e.executionProfileId ?? e.profileId,
      s = `${t}\0${e.sessionId}`;
    if (this.preparingSessions.has(s)) return;
    const o = this.deps
      .prepareSession(t, e.sessionId)
      .catch((i) => {
        if (i instanceof f && this.deps.sendResult) {
          this.refuse(e.sessionId, t, this.deps.sendResult);
          return;
        }
        console.warn("[cloud-loop] failed to prepare tool-exec session", {
          sessionId: e.sessionId,
          error: i instanceof Error ? i.message : "unknown_error",
        });
      })
      .finally(() => this.preparingSessions.delete(s));
    this.preparingSessions.set(s, o);
  }
  refuse(e, t, s) {
    const o = this.pending.get(e);
    if (o) {
      for (const [i, n] of o)
        n.type !== "tool_execution_request" ||
          (n.executionProfileId ?? n.profileId) !== t ||
          n.attachOnly ||
          n.resume ||
          (o.delete(i),
          console.warn(
            "[cloud-loop] refused a tool call for a profile not on this device",
            {
              sessionId: e,
              profileId: t,
              requestId: n.requestId,
              toolCallId: i,
              outcome: "refused",
              reason: "profile_missing",
            },
          ),
          s(n, {
            type: "tool_execution_result",
            turnId: n.turnId,
            requestId: n.requestId,
            ...(n.dispatchedAtMs === void 0
              ? {}
              : { dispatchedAtMs: n.dispatchedAtMs }),
            clientCompletedAtMs: Date.now(),
            toolCallId: i,
            mode: n.mode,
            output: p,
            isError: !0,
            status: "error",
          }).then(
            ({ terminal: l }) => {
              l !== "accepted" &&
                l !== "accepted_idempotent" &&
                u(e, n.requestId, l);
            },
            (l) =>
              u(
                e,
                n.requestId,
                l instanceof Error ? l.message : "unknown_error",
              ),
          ));
      o.size === 0 && this.pending.delete(e);
    }
  }
  buffer(e) {
    let t = this.pending.get(e.sessionId);
    if (!t) {
      if (this.pending.size >= h) {
        const o = this.pending.keys().next().value;
        typeof o == "string" && this.pending.delete(o);
      }
      ((t = new Map()), this.pending.set(e.sessionId, t));
    }
    if (
      !(
        t.get(e.toolCallId)?.type === "tool_execution_cancel" &&
        e.type === "tool_execution_request"
      )
    ) {
      if (!t.has(e.toolCallId) && t.size >= g) {
        const o = t.keys().next().value;
        typeof o == "string" && t.delete(o);
      }
      t.set(e.toolCallId, e);
    }
  }
}
const a = new Map();
function y(r) {
  return r === null ? null : (a.get(r) ?? null);
}
function x(r, e) {
  r ? a.set(e, r) : a.delete(e);
}
exports.ToolExecutionClient = I;
exports.ToolExecutionProfileMissingError = f;
exports.getToolExecutionClient = y;
exports.setToolExecutionClient = x;
