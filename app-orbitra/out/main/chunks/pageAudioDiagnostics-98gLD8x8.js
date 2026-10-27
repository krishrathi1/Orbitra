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
      s = new t.Error().stack;
    s &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[s] = "27c98f62-cf71-412a-a1d3-e5490b25de1f"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-27c98f62-cf71-412a-a1d3-e5490b25de1f"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const x = require("node:timers/promises"),
  B = require("valibot");
function L(t) {
  const s = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (t) {
    for (const l in t)
      if (l !== "default") {
        const u = Object.getOwnPropertyDescriptor(t, l);
        Object.defineProperty(
          s,
          l,
          u.get ? u : { enumerable: !0, get: () => t[l] },
        );
      }
  }
  return ((s.default = t), Object.freeze(s));
}
const e = L(B),
  f = e.optional(e.number()),
  M = e.object({
    elapsedMs: e.number(),
    visibility: e.picklist(["visible", "hidden"]),
    userActivation: e.object({
      hasBeenActive: e.boolean(),
      isActive: e.boolean(),
    }),
    connections: e.pipe(
      e.array(
        e.object({
          index: e.number(),
          connectionState: e.picklist([
            "new",
            "connecting",
            "connected",
            "disconnected",
            "failed",
            "closed",
          ]),
          statsStatus: e.picklist(["collected", "unavailable"]),
          inboundAudio: e.pipe(
            e.array(
              e.object({
                index: e.number(),
                bytesReceived: f,
                packetsReceived: f,
                packetsLost: f,
                totalAudioEnergy: f,
                totalSamplesDuration: f,
                jitter: f,
                jitterBufferDelay: f,
                jitterBufferEmittedCount: f,
                concealedSamples: f,
              }),
            ),
            e.maxLength(32),
          ),
        }),
      ),
      e.maxLength(8),
    ),
    audioContexts: e.pipe(
      e.array(
        e.object({
          state: e.picklist(["suspended", "running", "closed", "interrupted"]),
          currentTime: e.number(),
        }),
      ),
      e.maxLength(16),
    ),
    mediaElements: e.pipe(
      e.array(
        e.object({
          tag: e.picklist(["AUDIO", "VIDEO"]),
          paused: e.boolean(),
          muted: e.boolean(),
          volume: e.number(),
          readyState: e.number(),
          currentTime: e.number(),
          ended: e.boolean(),
          errorCode: e.nullable(e.number()),
          sinkKind: e.picklist(["default", "nondefault"]),
          audioTracks: e.pipe(
            e.array(
              e.object({
                enabled: e.boolean(),
                muted: e.boolean(),
                readyState: e.picklist(["live", "ended"]),
              }),
            ),
            e.maxLength(8),
          ),
        }),
      ),
      e.maxLength(32),
    ),
    truncated: e.boolean(),
  }),
  P = e.pick(M, [
    "elapsedMs",
    "visibility",
    "userActivation",
    "mediaElements",
    "truncated",
  ]),
  _ = e.object({ result: e.object({ value: M }) }),
  F = e.object({ result: e.object({ value: P }) });
function G() {
  const t = new WeakMap();
  function s(u) {
    const y = u.slice(0, 32);
    let p = u.length > 32;
    const b = y.map((n) => {
      const g =
        n.srcObject instanceof MediaStream ? n.srcObject.getAudioTracks() : [];
      return (
        g.length > 8 && (p = !0),
        {
          tag: n instanceof HTMLAudioElement ? "AUDIO" : "VIDEO",
          paused: n.paused,
          muted: n.muted,
          volume: n.volume,
          readyState: n.readyState,
          currentTime: n.currentTime,
          ended: n.ended,
          errorCode: n.error?.code ?? null,
          sinkKind:
            !n.sinkId || n.sinkId === "default" ? "default" : "nondefault",
          audioTracks: g
            .slice(0, 8)
            .map((c) => ({
              enabled: c.enabled,
              muted: c.muted,
              readyState: c.readyState,
            })),
        }
      );
    });
    return {
      elapsedMs: performance.now(),
      visibility: document.visibilityState,
      userActivation: {
        hasBeenActive: navigator.userActivation.hasBeenActive,
        isActive: navigator.userActivation.isActive,
      },
      mediaElements: b,
      truncated: p,
    };
  }
  async function l(u, y, p, b) {
    const n = u.slice(0, 8),
      g = s([...p, ...b]);
    let c = g.truncated || u.length > 8 || y.length > 16;
    const A = await Promise.all(
      n.map(async (a, v) => {
        const m = {
          index: v,
          connectionState: a.connectionState,
          statsStatus: "unavailable",
          inboundAudio: [],
        };
        let h;
        try {
          const j = await Promise.race([
            a.getStats(),
            new Promise((o, r) => {
              h = setTimeout(() => r(new Error("stats-timeout")), 400);
            }),
          ]);
          for (const o of j.values()) {
            if (o.type !== "inbound-rtp" || o.kind !== "audio") continue;
            if (m.inboundAudio.length === 32) {
              c = !0;
              break;
            }
            let r = t.get(a);
            (r || ((r = new Map()), t.set(a, r)),
              r.has(o.id) || r.set(o.id, r.size),
              m.inboundAudio.push({
                index: r.get(o.id),
                bytesReceived: o.bytesReceived,
                packetsReceived: o.packetsReceived,
                packetsLost: o.packetsLost,
                totalAudioEnergy: o.totalAudioEnergy,
                totalSamplesDuration: o.totalSamplesDuration,
                jitter: o.jitter,
                jitterBufferDelay: o.jitterBufferDelay,
                jitterBufferEmittedCount: o.jitterBufferEmittedCount,
                concealedSamples: o.concealedSamples,
              }));
          }
          m.statsStatus = "collected";
        } catch {
        } finally {
          clearTimeout(h);
        }
        return m;
      }),
    );
    return {
      ...g,
      connections: A,
      audioContexts: y
        .slice(0, 16)
        .map((a) => ({ state: a.state, currentTime: a.currentTime })),
      truncated: c,
    };
  }
  return { playback: s, sample: l };
}
const C = e.object({ result: e.object({ objectId: e.string() }) }),
  U = e.object({ objects: e.object({ objectId: e.string() }) });
async function q(t) {
  const s = new Date().toISOString(),
    l = (i) => ({ capturedAt: s, status: "unavailable", reason: i });
  if (t.isDestroyed()) return l("renderer-unavailable");
  const u = {
    webContentsId: t.id,
    audioMuted: t.isAudioMuted(),
    currentlyAudible: t.isCurrentlyAudible(),
    backgroundThrottling: t.getBackgroundThrottling(),
  };
  if (!t.debugger.isAttached())
    return { ...l("debugger-not-attached"), native: u };
  const y = t.mainFrame.frameToken,
    p = t.mainFrame.url;
  if (new URL(p).hostname !== "meet.google.com")
    return { capturedAt: s, status: "skipped", reason: "not-meet", native: u };
  const b = `report-audio-${crypto.randomUUID()}`,
    n = performance.now(),
    g = n + 3500,
    c = new AbortController(),
    A = [];
  let a = "read-failed",
    v = null,
    m = null,
    h = null;
  function j() {
    !t.isDestroyed() &&
      t.debugger.isAttached() &&
      t.debugger
        .sendCommand("Runtime.releaseObjectGroup", { objectGroup: b })
        .catch(() => {});
  }
  function o() {
    if (t.isDestroyed()) throw ((a = "renderer-unavailable"), new Error(a));
    if (t.mainFrame.frameToken !== y || t.mainFrame.url !== p)
      throw ((a = "document-changed"), new Error(a));
  }
  async function r(i, k) {
    const S = performance.now(),
      d = {
        stage: i,
        startedMs: Math.round(S - n),
        elapsedMs: 0,
        outcome: "failed",
      };
    A.push(d);
    let T;
    try {
      o();
      const w = g - performance.now();
      if (w <= 0) throw ((a = "timeout"), new Error(a));
      const I = k();
      I.then(
        () => {
          c.signal.aborted && j();
        },
        () => {
          c.signal.aborted && j();
        },
      );
      const O = await Promise.race([
        I,
        new Promise((V, R) => {
          T = setTimeout(() => {
            ((a = "timeout"), R(new Error(a)));
          }, w);
        }),
      ]);
      return (o(), (d.outcome = "completed"), O);
    } catch (w) {
      throw ((d.outcome = a === "timeout" ? "timeout" : "failed"), w);
    } finally {
      (clearTimeout(T), (d.elapsedMs = Math.round(performance.now() - S)));
    }
  }
  function D(i) {
    if (
      Buffer.byteLength(
        JSON.stringify({ initial: v, before: m, sample: i }, null, 2),
        "utf8",
      ) >
      64 * 1024
    )
      throw ((a = "payload-too-large"), new Error(a));
    return i;
  }
  function E() {
    let i;
    return (
      h ? (i = "collected") : v || m ? (i = "partial") : (i = "unavailable"),
      {
        capturedAt: s,
        status: i,
        ...(i === "collected" ? {} : { reason: a }),
        scope: "main-frame",
        native: u,
        elapsedMs: Math.round(performance.now() - n),
        timings: A,
        initial: v,
        before: m,
        after: h,
      }
    );
  }
  try {
    const i = await r(
      "create-sampler",
      async () =>
        e.parse(
          C,
          await t.debugger.sendCommand("Runtime.evaluate", {
            expression: `(${G.toString()})()`,
            objectGroup: b,
            userGesture: !1,
            timeout: 500,
          }),
        ).result.objectId,
    );
    v = await r("initial-playback", async () =>
      D(
        e.parse(
          F,
          await t.debugger.sendCommand("Runtime.callFunctionOn", {
            objectId: i,
            functionDeclaration:
              'function() { return this.playback(Array.from(document.querySelectorAll("audio, video"))); }',
            returnByValue: !0,
            userGesture: !1,
          }),
        ).result.value,
      ),
    );
    const k = [];
    for (const d of [
      "RTCPeerConnection",
      "AudioContext",
      "HTMLAudioElement",
      "HTMLVideoElement",
    ]) {
      const T = await r(`prototype:${d}`, async () =>
          e.parse(
            C,
            await t.debugger.sendCommand("Runtime.evaluate", {
              expression: `${d}.prototype`,
              objectGroup: b,
              userGesture: !1,
              timeout: 500,
            }),
          ),
        ),
        w = await r(`objects:${d}`, async () =>
          e.parse(
            U,
            await t.debugger.sendCommand("Runtime.queryObjects", {
              prototypeObjectId: T.result.objectId,
              objectGroup: b,
            }),
          ),
        );
      k.push(w.objects.objectId);
    }
    const S = async () =>
      D(
        e.parse(
          _,
          await t.debugger.sendCommand("Runtime.callFunctionOn", {
            objectId: i,
            functionDeclaration:
              "function(peers, contexts, audio, video) { return this.sample(peers, contexts, audio, video); }",
            arguments: k.map((d) => ({ objectId: d })),
            awaitPromise: !0,
            returnByValue: !0,
            userGesture: !1,
          }),
        ).result.value,
      );
    return (
      (m = await r("sample-before", S)),
      await r("sample-interval", () =>
        x.setTimeout(1e3, void 0, { signal: c.signal }),
      ),
      (h = await r("sample-after", S)),
      E()
    );
  } catch {
    return E();
  } finally {
    (c.abort(), j());
  }
}
exports.collectPageAudioDiagnostics = q;
