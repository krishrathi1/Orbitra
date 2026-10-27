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
      (r._sentryDebugIds[e] = "4b8a2dae-6d59-4c40-af02-dd237bf18bc0"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-4b8a2dae-6d59-4c40-af02-dd237bf18bc0"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const me = require("crypto"),
  he = require("fs/promises"),
  fe = require("node:v8"),
  we = require("path"),
  O = require("./ids-B2sWlG17.js"),
  H = require("./protocol-BGN1BQCi.js"),
  P = require("electron"),
  ge = require("valibot"),
  p = require("../main-app.js"),
  re = require("./sandbox-tooling-singleton-DYdbpKPS.js"),
  ye = require("./profileLayoutLifecycle-BDYjrhKu.js");
require("node:crypto");
require("node:fs/promises");
require("node:path");
require("@electron-toolkit/utils");
const be = require("node:inspector"),
  Ce = require("node:perf_hooks");
require("os");
require("node:events");
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
require("tokenx");
require("marked");
require("lodash/debounce");
require("./worker-protocol-CcOBX8D2.js");
require("node:zlib");
require("node:diagnostics_channel");
require("worker_threads");
require("diagnostics_channel");
require("./singleInstance-CuMDgUKt.js");
require("./commitRecord-DR9i1ecT.js");
function Q(r) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (r) {
    for (const t in r)
      if (t !== "default") {
        const n = Object.getOwnPropertyDescriptor(r, t);
        Object.defineProperty(
          e,
          t,
          n.get ? n : { enumerable: !0, get: () => r[t] },
        );
      }
  }
  return ((e.default = r), Object.freeze(e));
}
const h = Q(he),
  f = Q(we),
  Se = Q(ge);
async function Pe(r, e) {
  const t = new be.Session();
  t.connect();
  try {
    (await J(t, "Profiler.enable"), await J(t, "Profiler.start"));
  } catch (n) {
    throw (await Me(t), n);
  }
  return {
    target: r,
    processType: "main",
    label: e,
    startedAt: Date.now(),
    timestamp: new Date().toISOString(),
    stop: async () => {
      try {
        return (await J(t, "Profiler.stop")).profile;
      } finally {
        t.disconnect();
      }
    },
  };
}
async function ve(r, e, t, n, s) {
  const a = p.safeWithWebContents(t, (l) => l.debugger);
  if (!a.ok)
    throw new Error(
      `Cannot start renderer CPU profiler because webContents is ${a.error}`,
    );
  const o = a.value,
    i = o.isAttached();
  i || o.attach("1.3");
  try {
    (await _(t, "Profiler.enable"), await _(t, "Profiler.start"));
  } catch (l) {
    throw (await ne(t, i), l);
  }
  return {
    target: r,
    processType: "renderer",
    label: e,
    startedAt: Date.now(),
    timestamp: new Date().toISOString(),
    participantRole: s,
    webContents: n,
    stop: async () => {
      try {
        return (await _(t, "Profiler.stop")).profile;
      } finally {
        await ne(t, i);
      }
    },
  };
}
function Te(r) {
  return {
    nodeCount: r.nodes.length,
    sampleCount: r.samples?.length ?? 0,
    durationMs: $e((r.endTime - r.startTime) / 1e3),
  };
}
async function J(r, e, t = {}) {
  return new Promise((n, s) => {
    r.post(e, t, (a, o) => {
      if (a) {
        s(a);
        return;
      }
      n(o);
    });
  });
}
async function _(r, e, t) {
  const n = p.safeWithWebContents(r, (o) => o.debugger);
  if (!n.ok)
    throw new Error(
      `Cannot send debugger command because webContents is ${n.error}`,
    );
  const s = n.value;
  return t === void 0 ? await s.sendCommand(e) : await s.sendCommand(e, t);
}
async function Me(r) {
  try {
    await J(r, "Profiler.disable");
  } catch (e) {
    const t = e instanceof Error ? e.message : String(e);
    console.warn(`[CpuProfiler] Failed to disable main profiler: ${t}`);
  }
  try {
    r.disconnect();
  } catch (e) {
    const t = e instanceof Error ? e.message : String(e);
    console.warn(`[CpuProfiler] Failed to disconnect main profiler: ${t}`);
  }
}
async function ne(r, e) {
  try {
    r.isDestroyed() || (await _(r, "Profiler.disable"));
  } catch (t) {
    const n = t instanceof Error ? t.message : String(t);
    console.warn(`[CpuProfiler] Failed to disable renderer profiler: ${n}`);
  }
  if (!e)
    try {
      p.safeWithWebContents(r, (t) => {
        t.debugger.isAttached() && t.debugger.detach();
      });
    } catch (t) {
      const n = t instanceof Error ? t.message : String(t);
      console.warn(`[CpuProfiler] Failed to detach renderer debugger: ${n}`);
    }
}
function $e(r) {
  return Math.round(r * 100) / 100;
}
const Ie = Object.freeze([
  "toplevel",
  "blink.user_timing",
  "benchmark",
  "disabled-by-default-display.framedisplayed",
]);
async function Ae(r) {
  if (!r.requested)
    return {
      requested: !1,
      mainProcessRan: !1,
      rendererCollectionRan: r.rendererTargets.map(() => !1),
    };
  const e = r.collectMain(),
    t = await Promise.all(r.rendererTargets.map((n) => r.collectRenderer(n)));
  return (
    await r.settle(100),
    { requested: !0, mainProcessRan: e, rendererCollectionRan: t }
  );
}
function M(r) {
  return Math.round((r / 1024 / 1024) * 100) / 100;
}
function se(r) {
  return Math.round((r / 1024) * 100) / 100;
}
class Re {
  constructor(e) {
    this.sampleIntervalMs = e;
  }
  samples = [];
  interval = null;
  eventLoopDelay = Ce.monitorEventLoopDelay({ resolution: 20 });
  startedAt = 0;
  lastSampleAt = 0;
  start() {
    this.interval ||
      ((this.startedAt = Date.now()),
      (this.lastSampleAt = this.startedAt),
      this.eventLoopDelay.enable(),
      this.collect(),
      (this.interval = setInterval(
        () => this.collect(),
        this.sampleIntervalMs,
      )),
      this.interval.unref?.());
  }
  stop() {
    return (
      this.interval && (clearInterval(this.interval), (this.interval = null)),
      this.collect(),
      this.eventLoopDelay.disable(),
      this.samples
    );
  }
  getSamples() {
    return this.samples;
  }
  collect() {
    const e = Date.now(),
      t = this.samples.length === 0 ? 0 : e - this.lastSampleAt;
    this.lastSampleAt = e;
    const n = this.collectWebContents(),
      s = Ee(n),
      a = P.app
        .getAppMetrics()
        .map((o) => {
          const i = s.get(o.pid);
          return {
            pid: o.pid,
            type: o.type,
            serviceName: o.serviceName,
            cpuPercent: D(o.cpu.percentCPUUsage),
            idleWakeupsPerSecond: D(o.cpu.idleWakeupsPerSecond),
            memoryMB: se(o.memory.workingSetSize),
            peakMemoryMB: se(o.memory.peakWorkingSetSize),
            ...(i ? { webContents: i } : {}),
          };
        })
        .sort((o, i) => i.memoryMB - o.memoryMB);
    (this.samples.push({
      type: "sample",
      timestamp: new Date().toISOString(),
      elapsedMs: Date.now() - this.startedAt,
      mainProcess: z(),
      mainEventLoop: {
        sampleGapMs: t,
        timerDelayMs: D(Math.max(0, t - this.sampleIntervalMs)),
        meanMs: G(this.eventLoopDelay.mean),
        maxMs: G(this.eventLoopDelay.max),
        p95Ms: G(this.eventLoopDelay.percentile(95)),
      },
      conduits: { data: ae("data"), control: ae("control") },
      totals: {
        cpuPercent: D(a.reduce((o, i) => o + i.cpuPercent, 0)),
        memoryMB: D(a.reduce((o, i) => o + i.memoryMB, 0)),
        processCount: a.length,
        webContentsCount: P.webContents.getAllWebContents().length,
        windows: p.managedWindows.all().length,
        initializedTabs: p.managedWindows
          .all()
          .reduce((o, i) => o + i.pages().length, 0),
      },
      eventManager: p.eventManager.getDiagnostics(),
      rustImageWorker: p.rustImageWorkerManager.getDiagnostics(),
      processes: a,
      webContents: n,
    }),
      this.eventLoopDelay.reset());
  }
  collectWebContents() {
    const e = [],
      t = new Set();
    for (const n of p.managedWindows.all())
      for (const { page: s } of n.pages()) {
        const a = s.getLayer();
        if (!a.hasWebContents()) continue;
        const o = a.getWebContents();
        o.isDestroyed() ||
          (t.add(o.id),
          e.push({
            id: o.id,
            pid: o.getOSProcessId(),
            type: o.getType(),
            url: o.getURL(),
            title: o.getTitle(),
            windowId: n.id,
            layerId: a.id,
            layerType: a.layerType,
            attached: a.isAttached(),
            tabId: s.id,
            tabTitle: s.title,
            tabUrl: s.url,
            tabIsActive: s.isActive(),
            tabIsDormant: s.isDormant,
          }));
      }
    for (const n of P.webContents.getAllWebContents())
      n.isDestroyed() ||
        t.has(n.id) ||
        e.push({
          id: n.id,
          pid: n.getOSProcessId(),
          type: n.getType(),
          url: n.getURL(),
          title: n.getTitle(),
        });
    return e.sort((n, s) => n.id - s.id);
  }
}
function ae(r) {
  const e = p.getConduitClient(r);
  if (!e)
    return {
      available: !1,
      connected: !1,
      subscriptionCount: 0,
      subscriptionsWithCursor: 0,
      droppedSubscriptionCount: 0,
    };
  const t = e.getInspectorSnapshot();
  return {
    available: !0,
    connected: t.connected,
    subscriptionCount: t.subscriptions.length,
    subscriptionsWithCursor: t.subscriptions.filter((n) => n.cursor !== null)
      .length,
    droppedSubscriptionCount: t.subscriptions.filter((n) => n.dropped).length,
  };
}
function z() {
  const r = process.memoryUsage(),
    e = fe.getHeapStatistics();
  return {
    rssMB: M(r.rss),
    heapUsedMB: M(r.heapUsed),
    heapTotalMB: M(r.heapTotal),
    externalMB: M(r.external),
    arrayBuffersMB: M(r.arrayBuffers),
    v8UsedHeapMB: M(e.used_heap_size),
    v8TotalHeapMB: M(e.total_heap_size),
    v8ExternalMB: M(e.external_memory),
  };
}
function D(r) {
  return Math.round(r * 100) / 100;
}
function G(r) {
  return Number.isFinite(r) ? D(r / 1e6) : 0;
}
function Ee(r) {
  const e = new Map();
  for (const t of r) {
    const n = e.get(t.pid) ?? [];
    (n.push(t), e.set(t.pid, n));
  }
  return e;
}
class oe {
  static async createRunPaths(e, t) {
    const n = new Date().toISOString().replace(/[:.]/g, "-"),
      s = qe(t),
      a = f.join(e, `${n}_${s}`),
      o = f.join(a, "resource-timing"),
      i = f.join(a, "heap"),
      l = f.join(a, "cpu"),
      c = f.join(a, "svelte");
    return (
      await Promise.all([
        h.mkdir(o, { recursive: !0 }),
        h.mkdir(i, { recursive: !0 }),
        h.mkdir(l, { recursive: !0 }),
        h.mkdir(c, { recursive: !0 }),
      ]),
      {
        runDir: a,
        summaryJson: f.join(a, "summary.json"),
        summaryMarkdown: f.join(a, "summary.md"),
        samplesJsonl: f.join(a, "samples.jsonl"),
        processCsv: f.join(a, "process-timeseries.csv"),
        actionsJsonl: f.join(a, "actions.jsonl"),
        measurementsJsonl: f.join(a, "measurements.jsonl"),
        ipcJsonl: f.join(a, "ipc-events.jsonl"),
        ipcPayloadsJsonl: f.join(a, "ipc-payloads.jsonl"),
        heapSnapshotsJsonl: f.join(a, "heap-snapshots.jsonl"),
        heapSnapshotDir: i,
        cpuProfilesJsonl: f.join(a, "cpu-profiles.jsonl"),
        cpuProfileDir: l,
        svelteProfilesJsonl: f.join(a, "svelte-profiles.jsonl"),
        svelteProfileDir: c,
        resourceTimingDir: o,
        memoryAttributionJsonl: f.join(a, "memory-attribution.jsonl"),
        memoryAttributionMarkdown: f.join(a, "memory-attribution.md"),
        runtimeDensityJsonl: f.join(a, "runtime-density.jsonl"),
        runtimeDensityMarkdown: f.join(a, "runtime-density.md"),
        layerTreeJsonl: f.join(a, "layer-tree.jsonl"),
        layerTreeMarkdown: f.join(a, "layer-tree.md"),
        layerPaintsJsonl: f.join(a, "layer-paints.jsonl"),
        layerPaintsMarkdown: f.join(a, "layer-paints.md"),
        startupTimingsJsonl: f.join(a, "startup-timings.jsonl"),
        startupTimingsMarkdown: f.join(a, "startup-timings.md"),
      }
    );
  }
  static async write(e) {
    (await h.mkdir(e.paths.runDir, { recursive: !0 }),
      await Promise.all([
        h.writeFile(e.paths.samplesJsonl, E(e.samples)),
        h.writeFile(e.paths.actionsJsonl, E(e.actions)),
        h.writeFile(e.paths.measurementsJsonl, E(e.measurements)),
        h.writeFile(e.paths.heapSnapshotsJsonl, E(e.heapSnapshots)),
        h.writeFile(e.paths.cpuProfilesJsonl, E(e.cpuProfiles)),
        h.writeFile(e.paths.svelteProfilesJsonl, E(e.svelteProfiles)),
        h.writeFile(e.paths.processCsv, Le(e.samples)),
        ke(e.paths.resourceTimingDir, e.pageTimings),
      ]));
    const t = Fe(e);
    (await h.writeFile(e.paths.summaryJson, JSON.stringify(t, null, 2)),
      await h.writeFile(e.paths.summaryMarkdown, _e(t)));
  }
}
function De(r, e) {
  return r.map((t) => {
    const n = Array.from(
        new Set(e.filter((a) => a.target === t).map((a) => a.webContentsId)),
      ).sort((a, o) => a - o),
      s = n.map((a) => ({
        role:
          e.find((i) => i.target === t && i.webContentsId === a)
            ?.participantRole ?? "unscoped-renderer",
        webContentsId: a,
      }));
    return {
      target: t,
      resolvedRendererCount: n.length,
      resolvedWebContentsIds: n,
      resolvedParticipants: s,
    };
  });
}
function We(r) {
  const e = [
    "### Requested Target Coverage",
    "",
    "| Target | Renderers | WebContents IDs |",
    "| --- | ---: | --- |",
  ];
  for (const t of r)
    e.push(
      `| ${t.target} | ${t.resolvedRendererCount} | ${t.resolvedWebContentsIds.join(", ")} |`,
    );
  return e;
}
function qe(r) {
  return (
    r.replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "") || "perf-run"
  );
}
function E(r) {
  return r.length === 0
    ? ""
    : `${r.map((e) => JSON.stringify(e)).join(`
`)}
`;
}
function Le(r) {
  const e = [
    [
      "timestamp",
      "elapsedMs",
      "pid",
      "type",
      "serviceName",
      "cpuPercent",
      "memoryMB",
      "peakMemoryMB",
      "totalCpuPercent",
      "totalMemoryMB",
      "webContentsCount",
      "initializedTabs",
    ].join(","),
  ];
  for (const t of r)
    for (const n of t.processes)
      e.push(
        [
          t.timestamp,
          String(t.elapsedMs),
          String(n.pid),
          ie(n.type),
          ie(n.serviceName ?? ""),
          String(n.cpuPercent),
          String(n.memoryMB),
          String(n.peakMemoryMB),
          String(t.totals.cpuPercent),
          String(t.totals.memoryMB),
          String(t.totals.webContentsCount),
          String(t.totals.initializedTabs),
        ].join(","),
      );
  return `${e.join(`
`)}
`;
}
function ie(r) {
  return `"${r.replace(/"/g, '""')}"`;
}
async function ke(r, e) {
  (await h.mkdir(r, { recursive: !0 }),
    await Promise.all(
      e.map((t, n) =>
        h.writeFile(
          f.join(r, `page-${String(n + 1).padStart(3, "0")}.json`),
          JSON.stringify(t, null, 2),
        ),
      ),
    ));
}
function Fe(r) {
  const e = r.samples.map((d) => d.mainProcess.rssMB),
    t = r.samples.map((d) => d.totals.cpuPercent),
    n = r.samples.map((d) => d.totals.memoryMB),
    s = r.samples.map((d) => d.mainEventLoop.p95Ms),
    a = r.samples.map((d) => d.mainEventLoop.maxMs),
    o = r.samples.map((d) => d.mainEventLoop.timerDelayMs),
    i = r.samples.map((d) => d.conduits.data.subscriptionCount),
    l = r.samples.map((d) => d.conduits.control.subscriptionCount),
    c = r.samples.map((d) => d.conduits.data.droppedSubscriptionCount),
    u = xe(r.measurements),
    m = Be(r.pageTimings),
    w = r.actions.filter((d) => d.status === "failed");
  return {
    runName: r.runName,
    startedAt: r.startedAt,
    completedAt: r.completedAt,
    durationMs: r.durationMs,
    measurementScope: r.measurementScope,
    measurementStartedAt: r.measurementStartedAt,
    measurementCompletedAt: r.measurementCompletedAt,
    measurementDurationMs: r.measurementDurationMs,
    artifacts: r.paths,
    tracePath: r.tracePath,
    sampleCount: r.samples.length,
    seededSessionCount: r.seededSessionIds.length,
    failedActions: w,
    resourceTimingCount: r.pageTimings.length,
    heapSnapshots: r.heapSnapshots,
    cpuProfiles: r.cpuProfiles,
    svelteProfiles: r.svelteProfiles,
    process: {
      mainRssMB: b(e),
      totalCpuPercent: b(t),
      totalMemoryMB: b(n),
      mainEventLoopP95Ms: b(s),
      mainEventLoopMaxMs: b(a),
      mainTimerDelayMs: b(o),
      dataConduitSubscriptions: b(i),
      controlConduitSubscriptions: b(l),
      droppedDataConduitSubscriptions: b(c),
      dataConduitDisconnectedSamples: r.samples.filter(
        (d) => d.conduits.data.available && !d.conduits.data.connected,
      ).length,
      controlConduitDisconnectedSamples: r.samples.filter(
        (d) => d.conduits.control.available && !d.conduits.control.connected,
      ).length,
      memoryGrowthMBPerMinute: Je(
        r.samples.map((d) => [d.elapsedMs, d.totals.memoryMB]),
      ),
    },
    webContentsAttribution: Oe(r.samples.at(-1)),
    pageTiming: {
      paints: Object.fromEntries(
        Array.from(m.entries()).map(([d, g]) => [d, b(g)]),
      ),
      slowResources: Ne(r.pageTimings),
    },
    measurements: Object.fromEntries(
      Array.from(u.entries()).map(([d, g]) => [d, b(g)]),
    ),
  };
}
function xe(r) {
  const e = new Map();
  for (const t of r) {
    const n = e.get(t.name) ?? [];
    (n.push(t.durationMs), e.set(t.name, n));
  }
  return e;
}
function Be(r) {
  const e = new Map();
  for (const t of r)
    for (const n of t.paints) {
      const s = e.get(n.name) ?? [];
      (s.push(n.startTime), e.set(n.name, s));
    }
  return e;
}
function Ne(r) {
  return r
    .flatMap((e) =>
      e.resources.map((t) => ({
        pageUrl: e.url,
        name: t.name,
        initiatorType: t.initiatorType,
        durationMs: $(t.duration),
        transferSize: t.transferSize,
        encodedBodySize: t.encodedBodySize,
        decodedBodySize: t.decodedBodySize,
      })),
    )
    .sort((e, t) => t.durationMs - e.durationMs)
    .slice(0, 20);
}
function Oe(r) {
  return r
    ? r.processes
        .slice()
        .sort((e, t) => t.memoryMB - e.memoryMB)
        .slice(0, 12)
        .map((e) => ({
          pid: e.pid,
          memoryMB: e.memoryMB,
          cpuPercent: e.cpuPercent,
          process: [e.type, e.serviceName].filter(Boolean).join(":"),
          owners: je(e.webContents),
        }))
    : [];
}
function je(r) {
  return !r || r.length === 0
    ? "unattributed"
    : r
        .slice(0, 4)
        .map((e) => {
          const t = e.layerType
              ? `${e.layerType}:${e.layerId ?? e.id}`
              : e.type,
            n = e.tabTitle || e.title || e.tabUrl || e.url,
            s = e.attached === !1 ? "hidden" : "attached";
          return `${t} ${s} ${n}`.trim();
        })
        .join("; ");
}
function b(r) {
  if (r.length === 0)
    return { count: 0, min: 0, avg: 0, p50: 0, p95: 0, max: 0 };
  const e = r.slice().sort((n, s) => n - s),
    t = e.reduce((n, s) => n + s, 0);
  return {
    count: e.length,
    min: $(e[0]),
    avg: $(t / e.length),
    p50: $(le(e, 0.5)),
    p95: $(le(e, 0.95)),
    max: $(e[e.length - 1]),
  };
}
function le(r, e) {
  if (r.length === 1) return r[0];
  const t = Math.ceil(r.length * e) - 1;
  return r[Math.min(r.length - 1, Math.max(0, t))];
}
function Je(r) {
  if (r.length < 2) return 0;
  const e = r[0],
    t = r[r.length - 1],
    n = (t[0] - e[0]) / 6e4;
  return n <= 0 ? 0 : $((t[1] - e[1]) / n);
}
function $(r) {
  return Math.round(r * 100) / 100;
}
function _e(r) {
  const e = [
    `# ${r.runName}`,
    "",
    `Started: ${r.startedAt}`,
    `Completed: ${r.completedAt}`,
    `Duration: ${(r.durationMs / 1e3).toFixed(1)}s`,
    `Measured: ${(r.measurementDurationMs / 1e3).toFixed(1)}s (${r.measurementScope})`,
    `Samples: ${r.sampleCount}`,
    `Seeded chats: ${r.seededSessionCount}`,
    "",
    "## Process",
    "",
    v("Main RSS MB", r.process.mainRssMB),
    v("Total CPU %", r.process.totalCpuPercent),
    v("Total memory MB", r.process.totalMemoryMB),
    v("Main event-loop interval P95 ms", r.process.mainEventLoopP95Ms),
    v("Main event-loop interval max ms", r.process.mainEventLoopMaxMs),
    v("Main timer delay ms", r.process.mainTimerDelayMs),
    v("Data Conduit subscriptions", r.process.dataConduitSubscriptions),
    v("Control Conduit subscriptions", r.process.controlConduitSubscriptions),
    v(
      "Dropped data Conduit subscriptions",
      r.process.droppedDataConduitSubscriptions,
    ),
    `Data Conduit disconnected samples: ${r.process.dataConduitDisconnectedSamples}`,
    `Control Conduit disconnected samples: ${r.process.controlConduitDisconnectedSamples}`,
    `Memory growth: ${r.process.memoryGrowthMBPerMinute} MB/min`,
    "",
    "## WebContents Attribution",
    "",
  ];
  if (r.webContentsAttribution.length === 0)
    e.push("No WebContents attribution recorded.");
  else {
    (e.push("| Memory MB | CPU % | Process | Owners |"),
      e.push("| ---: | ---: | --- | --- |"));
    for (const s of r.webContentsAttribution)
      e.push(
        `| ${s.memoryMB} | ${s.cpuPercent} | ${y(s.process)} | ${y(s.owners)} |`,
      );
  }
  e.push("", "## Measurements", "");
  const t = Object.entries(r.measurements);
  if (t.length === 0) e.push("No named measurements recorded.");
  else {
    (e.push("| Name | Count | Avg ms | P50 ms | P95 ms | Max ms |"),
      e.push("| --- | ---: | ---: | ---: | ---: | ---: |"));
    for (const [s, a] of t)
      e.push(
        `| ${s} | ${a.count} | ${a.avg} | ${a.p50} | ${a.p95} | ${a.max} |`,
      );
  }
  e.push("", "## Page Timing", "");
  const n = Object.entries(r.pageTiming.paints);
  if (n.length === 0) e.push("No paint timings recorded.");
  else {
    (e.push("| Paint | Count | Avg ms | P50 ms | P95 ms | Max ms |"),
      e.push("| --- | ---: | ---: | ---: | ---: | ---: |"));
    for (const [s, a] of n)
      e.push(
        `| ${s} | ${a.count} | ${a.avg} | ${a.p50} | ${a.p95} | ${a.max} |`,
      );
  }
  if (r.pageTiming.slowResources.length > 0) {
    (e.push("", "### Slow Resources", ""),
      e.push("| Duration ms | Type | Resource |"),
      e.push("| ---: | --- | --- |"));
    for (const s of r.pageTiming.slowResources.slice(0, 10))
      e.push(`| ${s.durationMs} | ${s.initiatorType} | ${y(s.name)} |`);
  }
  if ((e.push("", "## Main Heap Snapshots", ""), r.heapSnapshots.length === 0))
    e.push("No main heap snapshots recorded.");
  else {
    (e.push(
      "| Name | Duration ms | File MB | Heap used before MB | Heap used after MB | GC | Snapshot |",
    ),
      e.push("| --- | ---: | ---: | ---: | ---: | --- | --- |"));
    for (const s of r.heapSnapshots) {
      const a = ze(s);
      e.push(
        `| ${y(s.name)} | ${s.durationMs} | ${ue(s.heapSnapshotBytes)} | ${s.beforeMainProcess.heapUsedMB} | ${s.afterMainProcess.heapUsedMB} | ${a} | ${y(s.heapSnapshotPath)} |`,
      );
    }
    e.push(
      "",
      "Analyze a snapshot with:",
      "",
      "```bash",
      "pnpm --filter orbitra analyze:main-heap -- --snapshot <path-to.heapsnapshot>",
      "```",
    );
  }
  if ((e.push("", "## CPU Profiles", ""), r.cpuProfiles.length === 0))
    e.push("No CPU profiles recorded.");
  else {
    (e.push(
      "| Name | Target | Process | Duration ms | Samples | Nodes | File MB | Profile |",
    ),
      e.push("| --- | --- | --- | ---: | ---: | ---: | ---: | --- |"));
    for (const s of r.cpuProfiles) {
      const a = Ue(s);
      e.push(
        `| ${y(s.name)} | ${y(a)} | ${s.processType} | ${s.durationMs} | ${s.sampleCount} | ${s.nodeCount} | ${ue(s.cpuProfileBytes)} | ${y(s.cpuProfilePath)} |`,
      );
    }
    e.push(
      "",
      "Analyze CPU profiles with:",
      "",
      "```bash",
      `pnpm --filter orbitra analyze:cpu-profile -- --run ${r.artifacts.runDir}`,
      "```",
    );
  }
  if (
    (e.push("", "## Svelte Renderer Profiles", ""),
    r.svelteProfiles.length === 0)
  )
    e.push("No Svelte renderer profiles recorded.");
  else {
    (e.push(
      "| Name | Target | Enabled | Entries | Calls | Total ms | Profile |",
    ),
      e.push("| --- | --- | --- | ---: | ---: | ---: | --- |"));
    for (const a of r.svelteProfiles)
      e.push(
        `| ${y(a.name)} | ${y(ce(a))} | ${a.enabled ? "yes" : "no"} | ${a.entryCount} | ${a.totalCount} | ${a.totalMs} | ${y(a.svelteProfilePath)} |`,
      );
    const s = r.svelteProfiles.flatMap((a) =>
      a.topByTotalMs
        .slice(0, 10)
        .map((o) => ({ profileName: a.name, target: ce(a), ...o })),
    );
    if (s.length > 0) {
      (e.push("", "### Top Svelte Work By Total Time", ""),
        e.push(
          "| Total ms | Calls | Avg ms | Max ms | Kind | Source | Profile |",
        ),
        e.push("| ---: | ---: | ---: | ---: | --- | --- | --- |"));
      for (const a of s.sort((o, i) => i.totalMs - o.totalMs).slice(0, 20))
        e.push(
          `| ${a.totalMs} | ${a.count} | ${a.avgMs} | ${a.maxMs} | ${y(a.kind)} | ${y(He(a))} | ${y(a.profileName)} |`,
        );
    }
  }
  if ((e.push("", "## Failures", ""), r.failedActions.length === 0))
    e.push("No failed actions.");
  else
    for (const s of r.failedActions)
      e.push(`- ${s.name}: ${s.error ?? "failed"}`);
  return (
    e.push("", "## Artifacts", ""),
    e.push(`- JSON summary: ${r.artifacts.summaryJson}`),
    e.push(`- Samples: ${r.artifacts.samplesJsonl}`),
    e.push(`- Process CSV: ${r.artifacts.processCsv}`),
    e.push(`- Actions: ${r.artifacts.actionsJsonl}`),
    e.push(`- Measurements: ${r.artifacts.measurementsJsonl}`),
    e.push(`- IPC summaries: ${r.artifacts.ipcJsonl}`),
    e.push(`- IPC payloads: ${r.artifacts.ipcPayloadsJsonl}`),
    e.push(`- Heap snapshots: ${r.artifacts.heapSnapshotsJsonl}`),
    e.push(`- CPU profiles: ${r.artifacts.cpuProfilesJsonl}`),
    e.push(`- Svelte profiles: ${r.artifacts.svelteProfilesJsonl}`),
    e.push(`- Memory attribution: ${r.artifacts.memoryAttributionMarkdown}`),
    e.push(`- Runtime density: ${r.artifacts.runtimeDensityMarkdown}`),
    e.push(`- Layer tree: ${r.artifacts.layerTreeMarkdown}`),
    e.push(`- Layer paints: ${r.artifacts.layerPaintsMarkdown}`),
    e.push(`- Startup timings: ${r.artifacts.startupTimingsMarkdown}`),
    r.tracePath && e.push(`- Trace: ${r.tracePath}`),
    `${e.join(`
`)}
`
  );
}
function v(r, e) {
  return `${r}: avg=${e.avg}, p50=${e.p50}, p95=${e.p95}, max=${e.max}`;
}
function y(r) {
  return r.replace(/\|/g, "\\|");
}
function ue(r) {
  return $(r / 1024 / 1024);
}
function ze(r) {
  return r.garbageCollectionRan
    ? "ran"
    : r.garbageCollectionRequested
      ? "unavailable"
      : "no";
}
function Ue(r) {
  if (r.participantRole) {
    if (r.participantRole === "main-process") return "main";
    const a = r.webContents?.id,
      o = a === void 0 ? r.participantRole : `${r.participantRole}:${a}`;
    return `${r.target}: ${o}`;
  }
  if (!r.webContents) return r.target;
  const e = [];
  r.webContents.layerType &&
    e.push(
      `${r.webContents.layerType}:${r.webContents.layerId ?? r.webContents.id}`,
    );
  const t = r.webContents.tabTitle || r.webContents.title;
  t && e.push(t);
  const n = r.webContents.tabUrl || r.webContents.url;
  n && e.push(n);
  const s = e.length > 0 ? e.join(" ") : `webContents ${r.webContents.id}`;
  return `${r.target}: ${s}`;
}
function ce(r) {
  const e = [];
  r.webContents.layerType &&
    e.push(
      `${r.webContents.layerType}:${r.webContents.layerId ?? r.webContents.id}`,
    );
  const t = r.webContents.tabTitle || r.webContents.title;
  t && e.push(t);
  const n = r.webContents.tabUrl || r.webContents.url;
  n && e.push(n);
  const s = e.length > 0 ? e.join(" ") : `webContents ${r.webContents.id}`;
  return `${r.target}: ${s}`;
}
function He(r) {
  const e = [];
  if (r.file) {
    let t = r.file;
    (r.line !== null &&
      ((t += `:${r.line}`), r.column !== null && (t += `:${r.column}`)),
      e.push(t));
  } else r.stackLocation ? e.push(r.stackLocation) : e.push(r.label);
  return (
    r.type && e.push(`type=${r.type}`),
    r.componentTag && e.push(`component=${r.componentTag}`),
    r.signalLabel && e.push(`label=${r.signalLabel}`),
    e.join(" ")
  );
}
function Ge(r) {
  if (r === void 0 || r === "all") return "all";
  if (r === "actions") return "actions";
  throw new Error("Performance measurement scope is invalid");
}
async function Ve(r, e, t) {
  if (!e.startsWith("setup."))
    throw new Error("waitForSandboxTooling can only run during setup");
  if (!r) throw new Error("Sandbox tooling manager is unavailable");
  (await r.ensureStaged(), await t);
}
function Ke(r, e, t, n) {
  const s = { name: "setup", actions: e },
    a = { name: "actions", actions: t },
    o = { name: "teardown", actions: n };
  return r === "actions"
    ? {
        beforeInstrumentation: [s],
        duringInstrumentation: [a],
        afterInstrumentation: [o],
      }
    : {
        beforeInstrumentation: [],
        duringInstrumentation: [s, a, o],
        afterInstrumentation: [],
      };
}
async function Ye(r, e, t) {
  let n = null,
    s = null;
  try {
    for (const i of r.beforeInstrumentation) await e(i);
    n = {
      value: await t(async () => {
        for (const i of r.duringInstrumentation) await e(i);
      }),
    };
  } catch (o) {
    s = o instanceof Error ? o : new Error(String(o));
  }
  const a = [];
  for (const o of r.afterInstrumentation)
    try {
      await e(o);
    } catch (i) {
      a.push(i instanceof Error ? i : new Error(String(i)));
    }
  if (s && a.length > 0)
    throw new AggregateError(
      [s, ...a],
      "Performance measurement failed and post-instrumentation cleanup also failed",
    );
  if (s) throw s;
  if (a.length === 1) throw a[0];
  if (a.length > 1)
    throw new AggregateError(
      a,
      "Performance post-instrumentation cleanup failed",
    );
  if (!n) throw new Error("Performance measurement completed without a result");
  return n.value;
}
async function Xe(r, e, t) {
  let n = null,
    s = !1,
    a = null,
    o = null,
    i = null;
  try {
    (await r.installIpcOutputPaths(),
      r.startTracing && ((i = r.stopTracing), await r.startTracing()),
      (s = !0),
      r.startCollector(),
      await e());
  } catch (c) {
    n = c instanceof Error ? c : new Error(String(c));
  }
  const l = [];
  if (
    (s &&
      (await V(() => {
        a = r.stopCollector();
      }, l)),
    i &&
      (await V(async () => {
        o = (await i()) ?? null;
      }, l)),
    await V(() => r.flushAndClearIpcProfiler(), l),
    Ze(n, l),
    !a)
  )
    throw new Error("Performance metrics collector completed without samples");
  await t({ samples: a, traceArtifact: o });
}
async function V(r, e) {
  try {
    await r();
  } catch (t) {
    e.push(t instanceof Error ? t : new Error(String(t)));
  }
}
function Ze(r, e) {
  if (r && e.length === 0) throw r;
  if (!r && e.length === 1) throw e[0];
  if (r)
    throw new AggregateError(
      [r, ...e],
      "Performance run failed and instrumentation cleanup also failed",
    );
  if (e.length > 1)
    throw new AggregateError(e, "Performance instrumentation cleanup failed");
}
function Qe(r, e) {
  return r.role !== "assistant"
    ? !1
    : typeof r.content == "string"
      ? r.content.includes(e)
      : Array.isArray(r.content)
        ? r.content.some(
            (t) =>
              "text" in t && typeof t.text == "string" && t.text.includes(e),
          )
        : !1;
}
const et = Reflect.get(P.webContents, "getAllWebContents").bind(P.webContents);
class ee {
  isRunning = !1;
  windowManager = null;
  profileManager = null;
  actions = [];
  measurements = [];
  marks = [];
  pageTimings = [];
  heapSnapshots = [];
  cpuProfiles = [];
  svelteProfiles = [];
  seededSessionIds = [];
  pendingPromptSessionIds = [];
  runPaths = null;
  runStartedAt = 0;
  static isPerfMode() {
    return (
      process.env.PERF_MODE === "true" ||
      !!process.env.PERF_SCENARIO_FILE ||
      !!process.env.PERF_SCRIPT_FILE ||
      !!process.env.PERF_TABS_FILE ||
      !!process.env.PERF_CHATS_FILE
    );
  }
  start(e, t) {
    ee.isPerfMode() &&
      (this.isRunning ||
        (p.recordStartupTiming("perf.runner.start"),
        (this.windowManager = e),
        (this.profileManager = t),
        (this.isRunning = !0),
        this.runAfterInitialWindowsReady().catch(async (n) => {
          const s = n instanceof Error ? n.message : String(n);
          (console.error("[PerformanceScenarioRunner] Fatal error:", n),
            await pe({ success: !1, error: s }),
            process.env.PERF_EXIT === "true" && P.app.exit(1));
        })));
  }
  async runAfterInitialWindowsReady() {
    (await this.waitForInitialWindowsReady(), await this.run());
  }
  async waitForInitialWindowsReady() {
    const e = this.requireWindowManager().getOpenedWindowsForAllProfiles();
    e.length !== 0 &&
      (p.recordStartupTiming("perf.runner.wait-for-windows-ready.begin", {
        windowCount: e.length,
      }),
      await Promise.all(e.map((t) => this.waitForWindowReady(t))),
      p.recordStartupTiming("perf.runner.wait-for-windows-ready.end", {
        windowCount: e.length,
      }));
  }
  waitForWindowReady(e) {
    return e.whenChatReady().then(() => {});
  }
  async run() {
    p.recordStartupTiming("perf.runner.run.begin");
    const e = new Date().toISOString();
    this.runStartedAt = Date.now();
    const t = await this.loadConfig(),
      n = process.env.PERF_OUT_DIR
        ? f.resolve(process.env.PERF_OUT_DIR)
        : f.resolve(process.cwd(), "perf-runs"),
      s = await oe.createRunPaths(n, t.runName);
    ((this.runPaths = s),
      (this.actions = []),
      (this.measurements = []),
      (this.marks = []),
      (this.pageTimings = []),
      (this.heapSnapshots = []),
      (this.cpuProfiles = []),
      (this.svelteProfiles = []),
      (this.seededSessionIds = []),
      (this.pendingPromptSessionIds = []),
      console.log(
        `[PerformanceScenarioRunner] Writing artifacts to ${s.runDir}`,
      ));
    const a = new Re(t.sampleIntervalMs);
    try {
      const o = Ke(t.measurementScope, t.setup, t.actions, t.teardown),
        i = t.trace
          ? {
              startTracing: async () => {
                await P.contentTracing.startRecording({
                  included_categories: [...Ie],
                });
              },
              stopTracing: async () => {
                const d = f.join(s.runDir, "trace.json"),
                  g = await P.contentTracing.stopRecording();
                return g ? (await h.rename(g, d), d) : null;
              },
            }
          : {};
      let l = "",
        c = "",
        u = 0;
      const m = await Ye(
          o,
          async (d) => this.executeActions([...d.actions], d.name),
          async (d) => {
            const g = { value: null };
            if (
              (await Xe(
                {
                  installIpcOutputPaths: () => {
                    (p.ipcProfiler.setOutputPath(s.ipcJsonl),
                      p.ipcProfiler.setPayloadOutputPath(s.ipcPayloadsJsonl));
                  },
                  ...i,
                  startCollector: () => a.start(),
                  stopCollector: () => a.stop(),
                  flushAndClearIpcProfiler: () =>
                    p.ipcProfiler.flushAndClearOutputPaths(),
                },
                async () => {
                  const N = Date.now();
                  ((l = new Date(N).toISOString()), await d());
                  const te = Date.now();
                  ((c = new Date(te).toISOString()), (u = te - N));
                },
                async (N) => {
                  g.value = N;
                },
              ),
              !g.value)
            )
              throw new Error(
                "Performance instrumentation completed without a result",
              );
            return g.value;
          },
        ),
        w = m.traceArtifact ?? void 0;
      (await oe.write({
        runName: t.runName,
        startedAt: e,
        completedAt: new Date().toISOString(),
        durationMs: Date.now() - this.runStartedAt,
        measurementScope: t.measurementScope,
        measurementStartedAt: l,
        measurementCompletedAt: c,
        measurementDurationMs: u,
        paths: { ...s, traceJson: w },
        samples: m.samples,
        actions: this.actions,
        measurements: this.measurements,
        marks: this.marks,
        pageTimings: this.pageTimings,
        heapSnapshots: this.heapSnapshots,
        cpuProfiles: this.cpuProfiles,
        svelteProfiles: this.svelteProfiles,
        seededSessionIds: this.seededSessionIds,
        tracePath: w,
      }),
        this.logConsoleSummary(m.samples, s.summaryMarkdown),
        await pe({
          success: !0,
          summaryMarkdown: s.summaryMarkdown,
          runDir: s.runDir,
        }),
        process.env.PERF_EXIT === "true" &&
          setTimeout(() => P.app.exit(0), 500));
    } finally {
      this.runPaths = null;
    }
  }
  async loadConfig() {
    const e = process.env.PERF_SCENARIO_FILE,
      t = process.env.PERF_SCRIPT_FILE,
      n = e ? await A(e) : {},
      s = t ? await A(t) : {},
      a = [],
      o = e ? f.dirname(e) : process.cwd(),
      i = t ? f.dirname(t) : process.cwd();
    (a.push(...this.actionsForProfiles(wt(n.profiles ?? [], o))),
      a.push(...this.actionsForWindows(gt(n.windows ?? [], o))));
    const l = await this.loadTabsConfig(n.tabs, o);
    l && a.push(...this.actionsForTabs(l));
    const c = await this.loadChatsConfig(n.chats, o);
    if (c) {
      a.push({ type: "seedChats", ...c });
      const d = c.openSessions ?? 0;
      for (let g = 0; g < d; g++)
        a.push({ type: "openChatSession", seededIndex: g });
    }
    (a.push(...C(n.setup ?? [], o)), a.push(...C(s.setup ?? [], i)));
    const u = [...C(n.actions ?? [], o), ...C(s.actions ?? [], i)],
      m = K(process.env.PERF_DURATION_MS);
    u.length === 0 && m && u.push({ type: "waitForIdle", durationMs: m });
    const w = [...C(s.teardown ?? [], i), ...C(n.teardown ?? [], o)];
    return {
      runName:
        process.env.PERF_RUN_NAME ??
        n.name ??
        s.name ??
        f.basename(e ?? t ?? "perf-run", f.extname(e ?? t ?? "")),
      setup: a,
      actions: u,
      teardown: w,
      sampleIntervalMs:
        n.measure?.sampleIntervalMs ??
        K(process.env.PERF_SAMPLE_INTERVAL_MS) ??
        1e3,
      trace: process.env.PERF_TRACE === "true" || n.measure?.trace === !0,
      measurementScope: Ge(n.measure?.scope),
    };
  }
  async loadTabsConfig(e, t) {
    const n = process.env.PERF_TABS_FILE;
    if (!n && !e) return null;
    if (n) {
      const s = await A(n);
      return Array.isArray(s) ? { open: s } : B(s, f.dirname(n));
    }
    return e ? B(e, t) : null;
  }
  async loadChatsConfig(e, t) {
    const n = process.env.PERF_CHATS_FILE;
    if (!n && !e) return null;
    if (n) {
      const s = await A(n);
      return this.expandChatsConfig(s, f.dirname(n));
    }
    return e ? this.expandChatsConfig(e, t) : null;
  }
  async expandChatsConfig(e, t) {
    const n = ht(e, t);
    if (!n.from) return n;
    const s = await A(n.from);
    return {
      ...s,
      sessions: n.sessions ?? s.sessions,
      messagesPerSession: n.messagesPerSession ?? s.messagesPerSession,
      openSessions: n.openSessions ?? s.openSessions,
    };
  }
  actionsForProfiles(e) {
    const t = [];
    for (const n of e) {
      const s = n.windows ?? 1;
      s <= 0 ||
        t.push({
          type: "openWindow",
          profileId: n.profileId ?? n.id,
          profileName: n.profileName ?? n.name,
          profileIndex: n.profileIndex,
          createProfile: n.createIfMissing ?? !!(n.name ?? n.profileName),
          count: s,
          tabs: n.tabs,
          dimensions: n.dimensions,
        });
    }
    return t;
  }
  actionsForWindows(e) {
    return e.map((t) => ({ type: "openWindow", ...t }));
  }
  actionsForTabs(e) {
    const t = [],
      n = e.windows ?? [e];
    for (const s of n)
      (t.push({
        type: "openTabs",
        open: s.open,
        from: s.from,
        repeatTo: s.repeatTo,
        active: s.active,
        waitForReady: s.waitForReady,
        windowIndex: s.windowIndex,
        profileId: s.profileId,
        profileName: s.profileName,
        profileIndex: s.profileIndex,
      }),
        s.switchEveryMs &&
          t.push({
            type: "forDuration",
            durationMs: K(process.env.PERF_DURATION_MS) ?? 3e4,
            actions: [
              {
                type: "switchTab",
                mode: "next",
                windowIndex: s.windowIndex,
                profileId: s.profileId,
                profileName: s.profileName,
                profileIndex: s.profileIndex,
              },
              { type: "wait", durationMs: s.switchEveryMs },
            ],
          }));
    return t;
  }
  async executeActions(e, t) {
    for (let n = 0; n < e.length; n++)
      await this.executeAction(e[n], `${t}.${n + 1}`);
  }
  async executeAction(e, t) {
    const n = Date.now();
    this.recordAction({ name: t, actionType: e.type, status: "started" });
    try {
      switch (e.type) {
        case "openWindow":
          await this.openWindow(e);
          break;
        case "focusWindow":
          this.focusWindow(this.requireWindow(e));
          break;
        case "closeWindow":
          await this.closeWindow(e);
          break;
        case "openTabs":
          await this.openTabs(e);
          break;
        case "setTabOrientation":
          await this.setTabOrientation(e);
          break;
        case "openNewTab":
          await this.openNewTab(e);
          break;
        case "closeActiveTab":
          await this.requireWindow(e).commands.closeActiveTab();
          break;
        case "closeExtraTabs":
          await this.closeExtraTabs(e.keep ?? 1, e);
          break;
        case "switchTab":
          this.switchTab(e);
          break;
        case "navigateActiveTab":
          await this.requireWindow(e).commands.openUrl({
            url: e.url,
            source: "utility",
            disposition: "current",
            visitType: H.VisitType.TYPED,
          });
          break;
        case "wait":
        case "waitForIdle":
          await T(e.durationMs);
          break;
        case "waitForSandboxTooling":
          await Ve(
            re.getSandboxToolingManager(),
            t,
            re.getSandboxToolingStartupReadiness(),
          );
          break;
        case "flushProfiles":
          await this.requireProfileManager().flushAllPendingSaves();
          break;
        case "waitForLoad":
          await this.waitForActiveTabReady(e.timeoutMs ?? 3e4, e);
          break;
        case "waitForNewTabReady":
          await this.waitForActiveNewTabReady(
            this.requireWindow(e),
            e.timeoutMs ?? 3e4,
          );
          break;
        case "seedChats":
          await this.seedChats(e);
          break;
        case "openChatSession":
          await this.openChatSession(e);
          break;
        case "runChatPrompt":
          await this.runChatPrompt(e);
          break;
        case "runChatPrompts":
          await this.runChatPrompts(e);
          break;
        case "waitForChatSessionsSettled":
          await this.waitForChatSessionsSettled(e);
          break;
        case "recoverConduit":
          await this.recoverConduit(e);
          break;
        case "stressIpc":
          this.stressIpc(e.count ?? 100, e.payloadSize ?? 1024);
          break;
        case "captureMainHeapSnapshot":
          await this.captureMainHeapSnapshot(e);
          break;
        case "captureCpuProfile":
          await this.captureCpuProfile(e);
          break;
        case "captureSvelteProfile":
          await this.captureSvelteProfile(e);
          break;
        case "captureMemoryAttribution":
          await this.captureMemoryAttribution(e);
          break;
        case "captureRuntimeDensity":
          await this.captureRuntimeDensity(e);
          break;
        case "captureLayerTree":
          await this.captureLayerTree(e);
          break;
        case "recordLayerPaints":
          await this.recordLayerPaints(e, t);
          break;
        case "captureStartupTimings":
          await this.captureStartupTimings(e);
          break;
        case "profile":
          await this.profileAction(e.name, e.action, e, t);
          break;
        case "measure":
          await this.measure(e.name, e.action, t);
          break;
        case "mark":
          this.marks.push({
            type: "mark",
            name: e.name,
            timestamp: new Date().toISOString(),
            elapsedMs: Date.now() - this.runStartedAt,
          });
          break;
        case "parallel":
          await Promise.all(
            e.actions.map((s, a) =>
              this.executeAction(s, `${t}.parallel.${a + 1}`),
            ),
          );
          break;
        case "repeat":
          for (let s = 0; s < e.count; s++)
            await this.executeActions(e.actions, `${t}.repeat.${s + 1}`);
          break;
        case "forDuration": {
          const s = Date.now() + e.durationMs;
          let a = 1;
          for (; Date.now() < s; )
            (await this.executeActions(e.actions, `${t}.duration.${a}`),
              (a += 1));
          break;
        }
      }
      this.recordAction({
        name: t,
        actionType: e.type,
        status: "completed",
        durationMs: Date.now() - n,
      });
    } catch (s) {
      const a = s instanceof Error ? s.message : String(s);
      throw (
        this.recordAction({
          name: t,
          actionType: e.type,
          status: "failed",
          durationMs: Date.now() - n,
          error: a,
        }),
        s
      );
    }
  }
  async measure(e, t, n) {
    const s = Date.now();
    await this.executeAction(t, `${n}.${e}`);
    const a = Date.now() - s;
    this.measurements.push({
      type: "measurement",
      name: e,
      actionType: t.type,
      timestamp: new Date().toISOString(),
      durationMs: a,
    });
    const o = this.requireWindow(Ct(t)).permissionOwner()?.page;
    if (o?.isInitialized) {
      const i = await this.captureActiveTabTiming(o);
      i && this.pageTimings.push(i);
    }
  }
  async profileAction(e, t, n, s) {
    if (n.startDelayMs && n.startDelayMs > 0) {
      await this.profileActionWithDelayedStart(e, t, n, s);
      return;
    }
    const a = await this.startCpuProfilers(e, n, n.targets, n.maxWebContents);
    let o = null;
    try {
      await this.executeAction(t, `${s}.${e}`);
    } catch (i) {
      o = i instanceof Error ? i : new Error(String(i));
    } finally {
      await this.stopCpuProfilers(e, a);
    }
    if (o) throw o;
  }
  async profileActionWithDelayedStart(e, t, n, s) {
    let a = null,
      o = null,
      i = !1,
      l = [];
    const c = this.executeAction(t, `${s}.${e}`)
      .catch((u) => {
        a = u instanceof Error ? u : new Error(String(u));
      })
      .finally(() => {
        i = !0;
      });
    if ((await T(n.startDelayMs ?? 0), !i))
      try {
        l = await this.startCpuProfilers(e, n, n.targets, n.maxWebContents);
      } catch (u) {
        o = u instanceof Error ? u : new Error(String(u));
      }
    try {
      await c;
    } finally {
      l.length > 0 && (await this.stopCpuProfilers(e, l));
    }
    if (a) throw a;
    if (o) throw o;
    if (l.length === 0)
      throw new Error(
        `Profile action "${e}" completed before startDelayMs elapsed`,
      );
  }
  async openWindow(e) {
    const t = e.count ?? 1,
      n = await this.resolveTabInputs({
        open: e.tabs?.open,
        urls: e.urls,
        from: e.tabs?.from ?? e.from,
        repeatTo: e.tabs?.repeatTo ?? e.repeatTo,
      }),
      s = X(n, e.tabs?.repeatTo ?? e.repeatTo);
    for (let a = 0; a < t; a++) {
      const o = await this.resolveProfileForWindow(e),
        i = s.length > 0 ? s.map((u) => Z(u.url)) : Z(e.url ?? "newtab"),
        l = await this.requireWindowManager().createWindow(
          o,
          !1,
          i,
          !1,
          e.dimensions,
        ),
        c = await p.managedWindows.whenRegistered(l, 3e4);
      (c.focus(), await c.whenChatReady());
    }
  }
  async closeWindow(e) {
    const t = this.requireWindow(e),
      n = t.id;
    (await t.close(),
      await j(() => {
        const s = this.requireWindowManager().getWindowById(n);
        return !s || !s.isAlive();
      }, 1e4));
  }
  async openTabs(e) {
    const t = this.requireWindow(e),
      n = await this.resolveTabInputs(e),
      s = X(n, e.repeatTo);
    await (async () => {
      for (let o = 0; o < s.length; o++) {
        const i = s[o],
          l = i.url,
          c = i.active ?? e.active ?? o === 0,
          u = await t.commands.openUrl({
            url: Z(l),
            source: "utility",
            disposition: c ? "foreground-new" : "background-new",
            tabType: i.tabType ?? bt(l),
            visitType:
              i.openedByHuman === !1 ? H.VisitType.IGNORE : H.VisitType.TYPED,
            createOptions: { openedByHuman: i.openedByHuman ?? !0 },
          });
        if ((i.waitForReady ?? e.waitForReady ?? !0) && u.tabId) {
          const w = await t.whenPageReady(u.tabId);
          w && (await this.waitForTabReady(w.page, 3e4));
        }
      }
    })();
  }
  async setTabOrientation(e) {
    const t = this.requireWindow(e);
    (this.focusWindow(t),
      await this.requireWindowManager().toggleTabBarOrientation(e.orientation),
      await T(e.settleMs ?? 250));
  }
  async resolveTabInputs(e) {
    const t = [
      ...(e.open ?? []).map(Y),
      ...(e.urls ?? []).map((a) => ({ url: a })),
    ];
    if (!e.from) return t;
    const n = await A(e.from);
    if (Array.isArray(n)) return [...t, ...n.map(Y)];
    const s = (n.open ?? []).map(Y);
    return [...t, ...X(s, n.repeatTo)];
  }
  async openNewTab(e) {
    const t = e.source ?? "menu";
    if (t === "ui")
      throw new Error(
        'openNewTab source "ui" requires the Playwright perf runner',
      );
    const n = this.requireWindow(e);
    this.focusWindow(n);
    const { runtime: s, windowId: a } = this.requireLayoutContext(n),
      o = O.activeEntry(s.store.state.data, a)?.id;
    (t === "menu"
      ? await this.requireWindowManager().createTabInFocusedWindow("/newtab")
      : await n.commands.openUrl({
          url: p.buildAppUrl("/newtab"),
          source: "utility",
          disposition: "foreground-new",
          tabType: "app",
        }),
      await this.waitForActiveNewTabReady(n, 3e4, o));
  }
  async closeExtraTabs(e, t) {
    const n = this.requireWindow(t);
    for (; n.pages().length > e; ) {
      const s = n.pages().at(-1)?.page.id;
      if (!s || !(await n.commands.closePage(s))) break;
    }
  }
  switchTab(e) {
    const t = this.requireWindow(e);
    if (typeof e.index == "number") {
      t.commands.selectTabByIndex(e.index);
      return;
    }
    const n = t.pages().map((l) => l.page.id);
    if (n.length === 0) return;
    const s = t.permissionOwner()?.page.id,
      a = s ? n.indexOf(s) : -1,
      o =
        e.mode === "random"
          ? Math.floor(Math.random() * n.length)
          : (Math.max(a, 0) + 1) % n.length,
      i = n[o];
    i && t.commands.activatePage(i);
  }
  async seedChats(e) {
    const t = e.from ? await A(e.from) : e,
      n = t.sessions ?? 10,
      s = t.messagesPerSession ?? 20,
      a = await this.requireChatService(e);
    for (let o = 0; o < n; o++) {
      const i = St(s, o),
        l = await a.createNewSession(i, `Perf seeded chat ${o + 1}`);
      this.seededSessionIds.push(l.id);
    }
  }
  async openChatSession(e) {
    const t = e.sessionId ?? this.seededSessionIds[e.seededIndex ?? 0];
    if (!t) throw new Error("No chat session id available for openChatSession");
    (await this.requireWindow(e).commands.openUrl({
      url: `orbitra://chat/${t}`,
      source: "utility",
      disposition: "foreground-new",
      tabType: "app",
    }),
      await this.waitForActiveTabReady(3e4, e));
  }
  async runChatPrompt(e) {
    const t = await this.requireChatService(e),
      n = e.sessionId ?? this.seededSessionIds[e.seededIndex ?? -1],
      s = n
        ? await t.chatSessionManager.getSession(n)
        : (await t.createNewSessionAndCoordinator()).chatSession;
    if (!s) throw new Error(`Chat session disappeared: ${n}`);
    e.openSession === !0 &&
      (await this.requireWindow(e).commands.openUrl({
        url: `orbitra://chat/${s.id}`,
        source: "utility",
        disposition: "foreground-new",
        tabType: "app",
      }),
      await this.waitForActiveTabReady(3e4, e));
    const a =
        e.companionId ?? t.companionManager.getCurrentSidebarCompanion().id,
      o = {
        message: e.prompt,
        companionId: a,
        attachmentContext: [],
        attachedTabs: [],
        attachedWindows: [],
        selections: [],
        startTime: Date.now(),
        projectFolders: e.projectFolders,
      };
    (await t.handleChatCompletion(o, s.id, Date.now()),
      this.seededSessionIds.includes(s.id) || this.seededSessionIds.push(s.id),
      this.pendingPromptSessionIds.includes(s.id) ||
        this.pendingPromptSessionIds.push(s.id));
  }
  async waitForChatSessionsSettled(e) {
    if (this.seededSessionIds.length === 0)
      throw new Error("No chat sessions are available to wait for");
    const t = await this.requireChatService(e),
      n = e.timeoutMs ?? 10 * 6e4,
      s = Date.now() + n,
      a = e.expectedAssistantText;
    for (; Date.now() < s; ) {
      const i = await Promise.all(
          this.seededSessionIds.map((c) => t.chatSessionManager.getSession(c)),
        ),
        l = i.findIndex((c) => !c);
      if (l >= 0)
        throw new Error(
          `Chat session disappeared: ${this.seededSessionIds[l]}`,
        );
      if (i.every((c) => c && !p.isUnsettledTurn(c.getTurnPhase()))) {
        if (a) {
          if (this.pendingPromptSessionIds.length === 0)
            throw new Error(
              "No prompted chat sessions are available to verify",
            );
          const c = new Map(this.seededSessionIds.map((m, w) => [m, i[w]])),
            u = this.pendingPromptSessionIds.filter(
              (m) =>
                !c
                  .get(m)
                  ?.getMessages()
                  .some((d) => Qe(d, a)),
            );
          if (u.length > 0)
            throw new Error(
              `${u.length} of ${this.pendingPromptSessionIds.length} prompted chat session(s) settled without the expected assistant output`,
            );
        }
        this.pendingPromptSessionIds = [];
        return;
      }
      await T(250);
    }
    const o = [];
    for (const i of this.seededSessionIds) {
      const l = await t.chatSessionManager.getSession(i);
      l && p.isUnsettledTurn(l.getTurnPhase()) && o.push(i);
    }
    throw new Error(
      `Timed out waiting for ${o.length} chat session(s) to settle after ${n}ms`,
    );
  }
  async runChatPrompts(e) {
    if (!Number.isSafeInteger(e.count) || e.count < 1 || e.count > 128)
      throw new Error(
        "runChatPrompts count must be an integer from 1 through 128",
      );
    const t = e.concurrency ?? Math.min(e.count, 16);
    if (!Number.isSafeInteger(t) || t < 1 || t > 64)
      throw new Error(
        "runChatPrompts concurrency must be an integer from 1 through 64",
      );
    for (let n = 0; n < e.count; n += t) {
      const s = Math.min(t, e.count - n),
        o = (
          await Promise.all(
            Array.from({ length: s }, async () => {
              try {
                return (
                  await this.runChatPrompt({ ...e, type: "runChatPrompt" }),
                  null
                );
              } catch (i) {
                return i instanceof Error ? i : new Error(String(i));
              }
            }),
          )
        ).find((i) => i !== null);
      if (o) throw o;
    }
  }
  async recoverConduit(e) {
    const t = e.lane === "both" ? ["data", "control"] : [e.lane ?? "data"],
      n = e.timeoutMs ?? 6e4;
    await Promise.all(
      t.map(async (s) => {
        const a = p.getConduitClient(s);
        if (!a) throw new Error(`The ${s} Conduit client is unavailable`);
        await new Promise((o, i) => {
          let l = !a.isConnected();
          const c = setTimeout(() => {
              (u(),
                i(
                  new Error(`The ${s} Conduit did not reconnect within ${n}ms`),
                ));
            }, n),
            u = a.onConnectionStateChange((m) => {
              if (!m) {
                l = !0;
                return;
              }
              l && (clearTimeout(c), u(), o());
            });
          a.recoverConnection("network_online");
        });
      }),
    );
  }
  stressIpc(e, t) {
    const n = "x".repeat(t);
    for (let s = 0; s < e; s++)
      p.eventManager.publishGlobal("ipc:signal", {
        signal: {
          domain: "utility",
          type: "perfStress",
          payload: { payload: n, index: s },
        },
      });
  }
  async captureMainHeapSnapshot(e) {
    const t = this.requireRunPaths();
    await h.mkdir(t.heapSnapshotDir, { recursive: !0 });
    const n = e.name ?? `main-${this.heapSnapshots.length + 1}`,
      s = `${String(this.heapSnapshots.length + 1).padStart(2, "0")}-${F(n)}.heapsnapshot`,
      a = f.join(t.heapSnapshotDir, s),
      o = e.collectGarbage === !0;
    let i = !1;
    o &&
      typeof global.gc == "function" &&
      (global.gc(), (i = !0), await T(100));
    const l = z(),
      c = Date.now(),
      u = fe.writeHeapSnapshot(a),
      m = Date.now() - c,
      w = z(),
      d = await h.stat(u);
    (this.heapSnapshots.push({
      type: "heapSnapshot",
      name: n,
      timestamp: new Date().toISOString(),
      elapsedMs: Date.now() - this.runStartedAt,
      durationMs: m,
      heapSnapshotPath: u,
      heapSnapshotBytes: d.size,
      garbageCollectionRequested: o,
      garbageCollectionRan: i,
      beforeMainProcess: l,
      afterMainProcess: w,
    }),
      console.log(`[PerformanceScenarioRunner] Main heap snapshot: ${u}`));
  }
  async captureCpuProfile(e) {
    const t = e.name ?? `cpu-${this.cpuProfiles.length + 1}`,
      n = await this.startCpuProfilers(t, e, e.targets, e.maxWebContents);
    try {
      await T(e.durationMs);
    } finally {
      await this.stopCpuProfilers(t, n);
    }
  }
  async startCpuProfilers(e, t, n, s) {
    const a = this.resolveCpuProfileTargets(t, n, s),
      o = [];
    for (const i of a)
      try {
        if (i.processType === "main") {
          o.push(await Pe(i.target, i.label));
          continue;
        }
        const { webContents: l, webContentsInfo: c } = i;
        l && c && o.push(await ve(i.target, i.label, l, c, i.participantRole));
      } catch (l) {
        const c = l instanceof Error ? l.message : String(l);
        console.warn(
          `[PerformanceScenarioRunner] Failed to start CPU profile ${e} for ${i.label}: ${c}`,
        );
      }
    if (o.length === 0)
      throw new Error(`No CPU profile target could be started for "${e}"`);
    return o;
  }
  async stopCpuProfilers(e, t) {
    const n = this.requireRunPaths();
    await h.mkdir(n.cpuProfileDir, { recursive: !0 });
    for (const s of t)
      try {
        const a = await s.stop(),
          o = this.cpuProfiles.length + 1,
          i = `${String(o).padStart(2, "0")}-${F(e)}-${F(s.label)}.cpuprofile`,
          l = f.join(n.cpuProfileDir, i);
        await h.writeFile(l, JSON.stringify(a));
        const c = await h.stat(l),
          u = Te(a),
          m =
            s.participantRole === "unscoped-renderer"
              ? void 0
              : s.participantRole;
        (this.cpuProfiles.push({
          type: "cpuProfile",
          name: e,
          target: s.target,
          processType: s.processType,
          timestamp: s.timestamp,
          elapsedMs: Date.now() - this.runStartedAt,
          durationMs: u.durationMs,
          cpuProfilePath: l,
          cpuProfileBytes: c.size,
          nodeCount: u.nodeCount,
          sampleCount: u.sampleCount,
          ...(m ? { participantRole: m } : {}),
          ...(s.webContents ? { webContents: s.webContents } : {}),
        }),
          console.log(`[PerformanceScenarioRunner] CPU profile: ${l}`));
      } catch (a) {
        const o = a instanceof Error ? a.message : String(a);
        console.warn(
          `[PerformanceScenarioRunner] Failed to stop CPU profile ${e} for ${s.label}: ${o}`,
        );
      }
  }
  async captureSvelteProfile(e) {
    const t = this.requireRunPaths();
    await h.mkdir(t.svelteProfileDir, { recursive: !0 });
    const n = e.name ?? `svelte-${this.svelteProfiles.length + 1}`,
      s = this.resolveCpuProfileTargets(
        e,
        e.targets && e.targets.length > 0 ? e.targets : ["uiLayer"],
        e.maxWebContents,
      ).filter((a) => {
        const { processType: o, webContents: i, webContentsInfo: l } = a;
        return o === "renderer" && !!(i && l);
      });
    if (s.length === 0)
      throw new Error(
        `No renderer Svelte profile target could be resolved for "${n}"`,
      );
    for (const a of s) {
      const { webContents: o, webContentsInfo: i } = a,
        l = await this.readSvelteProfileSnapshot(o, e.reset === !0, e.topLimit),
        c = this.svelteProfiles.length + 1,
        u = `${String(c).padStart(2, "0")}-${F(n)}-${F(a.label)}.json`,
        m = f.join(t.svelteProfileDir, u);
      await h.writeFile(m, JSON.stringify(l, null, 2));
      const w = await h.stat(m);
      (this.svelteProfiles.push({
        type: "svelteProfile",
        name: n,
        target: a.target,
        timestamp: new Date().toISOString(),
        elapsedMs: Date.now() - this.runStartedAt,
        svelteProfilePath: m,
        svelteProfileBytes: w.size,
        enabled: l.enabled,
        entryCount: l.entryCount,
        totalCount: l.totalCount,
        totalMs: l.totalMs,
        webContents: i,
        byKind: l.byKind,
        topByTotalMs: l.topByTotalMs.slice(0, 20),
      }),
        console.log(`[PerformanceScenarioRunner] Svelte profile: ${m}`));
    }
  }
  async readSvelteProfileSnapshot(e, t, n) {
    try {
      const s = n && n > 0 ? Math.min(n, 1e3) : 200,
        a = await p.safeExecuteJavaScriptInWebContents(
          e,
          `
        (() => {
          const profiler = globalThis.__ORBITRA_SVELTE_EFFECT_PROFILER__;
          if (!profiler || typeof profiler.snapshot !== 'function') {
            return JSON.stringify({
              enabled: false,
              createdAt: new Date().toISOString(),
              elapsedMs: 0,
              entryCount: 0,
              totalCount: 0,
              totalMs: 0,
              byKind: [],
              topByTotalMs: [],
              topByMaxMs: [],
              topByCount: []
            });
          }
          return JSON.stringify(profiler.snapshot({
            reset: ${t ? "true" : "false"},
            topLimit: ${s}
          }));
        })()
      `,
        );
      if (!a.ok) return de();
      const o = a.value;
      return yt(JSON.parse(String(o)));
    } catch (s) {
      const a = s instanceof Error ? s.message : String(s);
      return (
        console.warn(
          `[PerformanceScenarioRunner] Failed to capture Svelte profile: ${a}`,
        ),
        de()
      );
    }
  }
  async captureMemoryAttribution(e) {
    const t = this.requireRunPaths(),
      n = e.name ?? `memory-${Date.now()}`,
      s = e.targets && e.targets.length > 0 ? e.targets : ["allLayers"],
      a = this.resolveRendererTargetsForDiagnostics(e, s, e.maxWebContents),
      o = De(
        s,
        a.map((u) => ({
          target: u.target,
          webContentsId: u.webContentsInfo.id,
          participantRole: u.participantRole,
        })),
      ),
      i = await Ae({
        requested: e.collectGarbage === !0,
        rendererTargets: a,
        collectMain: () =>
          typeof global.gc != "function" ? !1 : (global.gc(), !0),
        collectRenderer: (u) => this.collectRendererGarbage(u.webContents),
        settle: T,
      }),
      l = [];
    for (let u = 0; u < a.length; u++) {
      const m = a[u],
        { webContents: w, webContentsInfo: d } = m;
      l.push(
        await this.captureRendererMemory(w, d, i.rendererCollectionRan[u]),
      );
    }
    const c = {
      type: "memoryAttribution",
      name: n,
      timestamp: new Date().toISOString(),
      elapsedMs: Date.now() - this.runStartedAt,
      garbageCollectionRequested: i.requested,
      mainGarbageCollectionRan: i.mainProcessRan,
      requestedTargetCoverage: o,
      mainProcess: z(),
      processes: P.app
        .getAppMetrics()
        .map((u) => ({
          pid: u.pid,
          type: u.type,
          serviceName: u.serviceName,
          cpuPercent: S(u.cpu.percentCPUUsage),
          memoryMB: S(u.memory.workingSetSize / 1024),
          peakMemoryMB: S(u.memory.peakWorkingSetSize / 1024),
          owners: this.describeProcessOwners(u.pid),
        })),
      renderers: l,
    };
    (await q(t.memoryAttributionJsonl, c),
      await L(t.memoryAttributionMarkdown, "Memory Attribution", lt(c)));
  }
  async captureRendererMemory(e, t, n) {
    const s = await this.captureCdpCounters(e),
      a = await this.readRendererProcessRuntime(e);
    return { webContents: I(t), garbageCollectionRan: n, cdp: s, runtime: a };
  }
  async collectRendererGarbage(e) {
    if (e.isDestroyed()) return !1;
    try {
      return (
        await this.withDebugger(e, async () => {
          await this.sendDebuggerCommand(e, "HeapProfiler.collectGarbage");
        }),
        !0
      );
    } catch {
      return !1;
    }
  }
  async captureRuntimeDensity(e) {
    const t = this.requireRunPaths(),
      n = e.name ?? `runtime-density-${Date.now()}`,
      s = this.resolveRendererTargetsForDiagnostics(
        e,
        e.targets,
        e.maxWebContents,
      ),
      a = [];
    for (const i of s) {
      const { webContents: l, webContentsInfo: c } = i,
        u = await this.captureCdpCounters(l),
        m = await this.readRendererDomDensity(l);
      a.push({ webContents: I(c), cdp: u, dom: m });
    }
    const o = {
      type: "runtimeDensity",
      name: n,
      timestamp: new Date().toISOString(),
      elapsedMs: Date.now() - this.runStartedAt,
      renderers: a,
    };
    (await q(t.runtimeDensityJsonl, o),
      await L(t.runtimeDensityMarkdown, "Runtime Density", ut(o)));
  }
  async captureLayerTree(e) {
    const t = this.requireRunPaths(),
      n = e.name ?? `layer-tree-${Date.now()}`,
      s = this.resolveRendererTargetsForDiagnostics(
        e,
        e.targets,
        e.maxWebContents,
      ),
      a = e.settleMs ?? 500,
      o = [];
    for (const l of s) o.push(await this.captureLayerTreeForTarget(l, a));
    const i = {
      type: "layerTree",
      name: n,
      timestamp: new Date().toISOString(),
      elapsedMs: Date.now() - this.runStartedAt,
      settleMs: a,
      renderers: o,
    };
    (await q(t.layerTreeJsonl, i),
      await L(t.layerTreeMarkdown, "Layer Tree", ct(i)));
  }
  async recordLayerPaints(e, t) {
    const n = this.requireRunPaths(),
      s = this.resolveRendererTargetsForDiagnostics(
        e,
        e.targets,
        e.maxWebContents,
      ),
      a = await Promise.all(s.map((u) => this.startLayerPaintRecorder(u)));
    let o = null;
    const i = Date.now();
    try {
      await this.executeAction(e.action, `${t}.${e.name}`);
    } catch (u) {
      o = u instanceof Error ? u : new Error(String(u));
    }
    const l = [];
    for (const u of a) l.push(await u.stop());
    const c = {
      type: "layerPaints",
      name: e.name,
      timestamp: new Date().toISOString(),
      elapsedMs: Date.now() - this.runStartedAt,
      durationMs: Date.now() - i,
      renderers: l,
    };
    if (
      (await q(n.layerPaintsJsonl, c),
      await L(n.layerPaintsMarkdown, "Layer Paints", dt(c)),
      o)
    )
      throw o;
  }
  async captureStartupTimings(e) {
    const t = this.requireRunPaths(),
      n = e.name ?? `startup-${Date.now()}`,
      s = this.resolveRendererTargetsForDiagnostics(
        e,
        e.targets,
        e.maxWebContents,
      ),
      a = [];
    for (const i of s) {
      const { webContents: l, webContentsInfo: c } = i;
      a.push({
        webContents: I(c),
        timing: await this.readRendererStartupTiming(l),
      });
    }
    const o = {
      type: "startupTimings",
      name: n,
      timestamp: new Date().toISOString(),
      elapsedMs: Date.now() - this.runStartedAt,
      startupEvents: p.getStartupTimingEvents(),
      renderers: a,
    };
    (await q(t.startupTimingsJsonl, o),
      await L(t.startupTimingsMarkdown, "Startup Timings", pt(o)));
  }
  resolveRendererTargetsForDiagnostics(e, t, n) {
    const s = t && t.length > 0 ? t : ["allLayers"];
    return this.resolveCpuProfileTargets(e, s, n ?? 24).filter((a) => {
      const { processType: o, webContents: i, webContentsInfo: l } = a;
      return o === "renderer" && !!(i && l);
    });
  }
  async captureCdpCounters(e) {
    if (e.isDestroyed()) return { available: !1, error: "destroyed" };
    try {
      return await this.withDebugger(e, async () => {
        await this.sendDebuggerCommand(e, "Performance.enable");
        const t = await this.sendDebuggerCommand(e, "Performance.getMetrics"),
          n = await this.sendDebuggerCommand(e, "Memory.getDOMCounters"),
          s = {};
        for (const a of t.metrics) s[a.name] = S(a.value);
        return { available: !0, domCounters: n, performanceMetrics: s };
      });
    } catch (t) {
      return {
        available: !1,
        error: t instanceof Error ? t.message : String(t),
      };
    }
  }
  async readRendererProcessRuntime(e) {
    if (e.isDestroyed()) return { available: !1, error: "destroyed" };
    try {
      const t = await p.safeExecuteJavaScriptInWebContents(
        e,
        `
        (async () => {
          const processObject = typeof process === 'object' ? process : null;
          const heap = processObject && typeof processObject.getHeapStatistics === 'function'
            ? processObject.getHeapStatistics()
            : null;
          const blink = processObject && typeof processObject.getBlinkMemoryInfo === 'function'
            ? processObject.getBlinkMemoryInfo()
            : null;
          const memory = processObject && typeof processObject.getProcessMemoryInfo === 'function'
            ? await processObject.getProcessMemoryInfo()
            : null;
          return JSON.stringify({
            available: Boolean(processObject),
            heap,
            blink,
            memory,
            visibilityState: typeof document === 'object' ? document.visibilityState : null,
            wasDiscarded: typeof document === 'object' ? Boolean(document.wasDiscarded) : false
          });
        })()
      `,
      );
      if (!t.ok) return { available: !1, error: t.error };
      const n = t.value;
      return JSON.parse(String(n));
    } catch (t) {
      return {
        available: !1,
        error: t instanceof Error ? t.message : String(t),
      };
    }
  }
  async readRendererDomDensity(e) {
    if (e.isDestroyed()) return { available: !1, error: "destroyed" };
    try {
      const t = await p.safeExecuteJavaScriptInWebContents(
        e,
        `
        (() => {
          const allElements = typeof document === 'object'
            ? document.querySelectorAll('*').length
            : 0;
          const iframes = typeof document === 'object'
            ? document.getElementsByTagName('iframe').length
            : 0;
          const scripts = typeof document === 'object'
            ? document.getElementsByTagName('script').length
            : 0;
          const stylesheets = typeof document === 'object'
            ? document.styleSheets.length
            : 0;
          return JSON.stringify({
            available: true,
            allElements,
            iframes,
            scripts,
            stylesheets,
            readyState: typeof document === 'object' ? document.readyState : null,
            visibilityState: typeof document === 'object' ? document.visibilityState : null,
            routeClass: typeof location === 'object' ? location.protocol + '//' + location.host + location.pathname : null
          });
        })()
      `,
      );
      if (!t.ok) return { available: !1, error: t.error };
      const n = t.value;
      return JSON.parse(String(n));
    } catch (t) {
      return {
        available: !1,
        error: t instanceof Error ? t.message : String(t),
      };
    }
  }
  async captureLayerTreeForTarget(e, t) {
    const { webContents: n, webContentsInfo: s } = e,
      a = [];
    try {
      let o = 0;
      return (
        await this.withDebugger(n, async () => {
          const i = (l, c, u) => {
            if (c !== "LayerTree.layerTreeDidChange") return;
            const m = u;
            a.splice(0, a.length, ...(m.layers ?? []));
          };
          this.addDebuggerMessageListener(n, i);
          try {
            const l = await this.sendDebuggerCommand(
              n,
              "Page.getLayoutMetrics",
            );
            ((o = nt(l.cssLayoutViewport)),
              await this.sendDebuggerCommand(n, "LayerTree.enable"),
              await T(t));
          } finally {
            (this.removeDebuggerMessageListener(n, i),
              await this.safeDebuggerCommand(n, "LayerTree.disable"));
          }
        }),
        {
          webContents: I(s),
          available: !0,
          viewportArea: o,
          layerCount: a.length,
          drawsContentCount: a.filter((i) => i.drawsContent === !0).length,
          totalArea: rt(a),
          totalPaintCount: a.reduce((i, l) => i + (l.paintCount ?? 0), 0),
          slowScrollRectCount: a.reduce(
            (i, l) => i + (l.scrollRects?.length ?? 0),
            0,
          ),
          layers: a.map(tt),
        }
      );
    } catch (o) {
      return {
        webContents: I(s),
        available: !1,
        error: o instanceof Error ? o.message : String(o),
        viewportArea: 0,
        layerCount: 0,
        drawsContentCount: 0,
        totalArea: 0,
        totalPaintCount: 0,
        slowScrollRectCount: 0,
        layers: [],
      };
    }
  }
  async startLayerPaintRecorder(e) {
    const { webContents: t, webContentsInfo: n } = e,
      s = [];
    let a = !1;
    const o = (i, l, c) => {
      if (l !== "LayerTree.layerPainted") return;
      const u = c;
      s.push(u);
    };
    try {
      ((a = await this.attachDebuggerIfNeeded(t)),
        this.addDebuggerMessageListener(t, o),
        await this.sendDebuggerCommand(t, "LayerTree.enable"));
    } catch (i) {
      return {
        stop: async () => ({
          webContents: I(n),
          available: !1,
          error: i instanceof Error ? i.message : String(i),
          paintCount: 0,
          totalPaintArea: 0,
          maxPaintArea: 0,
          layers: [],
        }),
      };
    }
    return {
      stop: async () => {
        try {
          (this.removeDebuggerMessageListener(t, o),
            await this.safeDebuggerCommand(t, "LayerTree.disable"));
        } finally {
          a && this.detachDebugger(t);
        }
        const i = st(s);
        return {
          webContents: I(n),
          available: !0,
          paintCount: s.length,
          totalPaintArea: i.reduce((l, c) => l + c.totalArea, 0),
          maxPaintArea: Math.max(...i.map((l) => l.maxArea), 0),
          layers: i,
        };
      },
    };
  }
  async readRendererStartupTiming(e) {
    if (e.isDestroyed()) return { available: !1, error: "destroyed" };
    try {
      const t = await p.safeExecuteJavaScriptInWebContents(
        e,
        `
        (() => {
          const navigation = performance.getEntriesByType('navigation')[0];
          const paints = performance.getEntriesByType('paint').map((entry) => ({
            name: entry.name,
            startTime: Math.round(entry.startTime * 100) / 100
          }));
          const resources = performance.getEntriesByType('resource').map((entry) => ({
            name: entry.name,
            initiatorType: entry.initiatorType,
            startTime: Math.round(entry.startTime * 100) / 100,
            duration: Math.round(entry.duration * 100) / 100,
            transferSize: entry.transferSize || 0,
            encodedBodySize: entry.encodedBodySize || 0,
            decodedBodySize: entry.decodedBodySize || 0
          }));
          const electronApi = window.electronAPI;
          const vitals = electronApi && typeof electronApi.getPerfVitals === 'function'
            ? electronApi.getPerfVitals()
            : null;
          return JSON.stringify({
            available: true,
            url: location.href,
            title: document.title,
            readyState: document.readyState,
            visibilityState: document.visibilityState,
            navigation: navigation ? {
              startTime: navigation.startTime,
              duration: Math.round(navigation.duration * 100) / 100,
              domContentLoadedEventEnd: Math.round(navigation.domContentLoadedEventEnd * 100) / 100,
              loadEventEnd: Math.round(navigation.loadEventEnd * 100) / 100,
              responseEnd: Math.round(navigation.responseEnd * 100) / 100,
              transferSize: navigation.transferSize || 0,
              encodedBodySize: navigation.encodedBodySize || 0,
              decodedBodySize: navigation.decodedBodySize || 0
            } : null,
            paints,
            resources,
            vitals
          });
        })()
      `,
      );
      if (!t.ok) return { available: !1, error: t.error };
      const n = t.value,
        s = JSON.parse(String(n));
      return it(s);
    } catch (t) {
      return {
        available: !1,
        error: t instanceof Error ? t.message : String(t),
      };
    }
  }
  async withDebugger(e, t) {
    const n = await this.attachDebuggerIfNeeded(e);
    try {
      return await t();
    } finally {
      n && this.detachDebugger(e);
    }
  }
  async attachDebuggerIfNeeded(e) {
    const t = p.safeWithWebContents(e, (n) =>
      n.debugger.isAttached() ? !1 : (n.debugger.attach("1.3"), !0),
    );
    if (!t.ok) throw new Error(`WebContents is ${t.error}`);
    return t.value;
  }
  detachDebugger(e) {
    try {
      p.safeWithWebContents(e, (t) => {
        t.debugger.isAttached() && t.debugger.detach();
      });
    } catch (t) {
      const n = t instanceof Error ? t.message : String(t);
      console.warn(
        `[PerformanceScenarioRunner] Failed to detach debugger: ${n}`,
      );
    }
  }
  addDebuggerMessageListener(e, t) {
    p.safeWithWebContents(e, (n) => {
      n.debugger.on("message", t);
    });
  }
  removeDebuggerMessageListener(e, t) {
    p.safeWithWebContents(e, (n) => {
      n.debugger.off("message", t);
    });
  }
  async sendDebuggerCommand(e, t, n) {
    const s = await p.safeWithWebContentsAsync(
      e,
      async (a) =>
        await (n === void 0
          ? a.debugger.sendCommand(t)
          : a.debugger.sendCommand(t, n)),
    );
    if (!s.ok) throw new Error(`WebContents is ${s.error}`);
    return s.value;
  }
  async safeDebuggerCommand(e, t) {
    try {
      const n = p.safeWithWebContents(e, (s) => s.debugger.isAttached());
      n.ok && n.value && (await this.sendDebuggerCommand(e, t));
    } catch {}
  }
  resolveCpuProfileTargets(e, t, n) {
    const s = t && t.length > 0 ? t : ["main"],
      a = [],
      o = new Set(),
      i = s.includes("main"),
      l = n ?? 8;
    i && a.push({ target: "main", processType: "main", label: "main" });
    for (const c of s)
      if (c !== "main") {
        if (c === "activeTab") {
          const u = this.resolveWindow(e)?.permissionOwner()?.page,
            m = p.safeWithLayerWebContents(u?.layer, (w) => ({
              contents: w,
              info: this.buildTabWebContentsInfo(w, e, u?.id ?? ""),
            }));
          m.ok &&
            u &&
            this.addRendererCpuTarget(a, o, c, m.value.contents, m.value.info);
          continue;
        }
        if (c === "allTabs") {
          this.addLayerCpuTargets(a, o, c, l, (u) => u.isTab());
          continue;
        }
        if (c === "uiLayer") {
          this.addLayerCpuTargets(a, o, c, l, (u) => u.isUI());
          continue;
        }
        if (c === "componentLayers") {
          this.addLayerCpuTargets(a, o, c, l, (u) => u.isComponent());
          continue;
        }
        if (c === "uiTabLayers") {
          this.addLayerCpuTargets(a, o, c, l, (u) => u.layerType === "ui-tab");
          continue;
        }
        if (c === "webTabLayers") {
          this.addLayerCpuTargets(a, o, c, l, (u) => u.layerType === "web-tab");
          continue;
        }
        if (c === "allLayers") {
          this.addLayerCpuTargets(a, o, c, l, () => !0);
          continue;
        }
        if (c === "allWebContents") {
          for (const u of et())
            if (
              !u.isDestroyed() &&
              (this.addRendererCpuTarget(
                a,
                o,
                c,
                u,
                this.buildWebContentsInfo(u),
              ),
              o.size >= l)
            )
              break;
          continue;
        }
      }
    return a;
  }
  addLayerCpuTargets(e, t, n, s, a) {
    for (const o of this.requireWindowManager().getOpenedWindowsForAllProfiles())
      for (const i of o.rendererLayers()) {
        if (!a(i) || !i.hasWebContents()) continue;
        let l;
        try {
          l = i.getWebContents();
        } catch {
          continue;
        }
        const c = p.safeGetWebContentsId(l);
        if (!c.ok) continue;
        const u = o.rendererFor(c.value)?.page;
        if (
          (this.addRendererCpuTarget(
            e,
            t,
            n,
            l,
            this.buildWebContentsInfo(l, {
              windowId: o.id,
              layerId: i.id,
              layerType: i.layerType,
              tabId: u?.id,
              tabTitle: u?.title,
              tabUrl: u?.url,
            }),
          ),
          t.size >= s)
        )
          return;
      }
  }
  addRendererCpuTarget(e, t, n, s, a, o) {
    if (s.isDestroyed()) return !1;
    const i = p.safeWithWebContents(s, (l) => l.id);
    return !i.ok || t.has(i.value)
      ? !1
      : (t.add(i.value),
        e.push({
          target: n,
          processType: "renderer",
          label: this.buildRendererCpuLabel(n, a),
          webContents: s,
          webContentsInfo: a,
          participantRole: o,
        }),
        !0);
  }
  buildRendererCpuLabel(e, t) {
    return t.layerType
      ? `${e}-${t.layerType}-${t.layerId ?? t.id}-${t.id}`
      : `${e}-webcontents-${t.id}`;
  }
  buildTabWebContentsInfo(e, t, n) {
    const s = this.resolveWindow(t),
      a = s?.pages().find((o) => o.page.id === n)?.page;
    return this.buildWebContentsInfo(e, {
      windowId: s?.id,
      layerId: a?.layer?.id,
      layerType: a?.layer?.layerType,
      tabId: n,
      tabTitle: a?.title,
      tabUrl: a?.url,
    });
  }
  buildWebContentsInfo(e, t = {}) {
    const n = p.safeWithWebContents(e, (s) => ({
      id: s.id,
      pid: s.getOSProcessId(),
      type: s.getType(),
      url: s.getURL(),
      title: s.getTitle(),
    }));
    return n.ok
      ? { ...n.value, ...t }
      : { id: -1, pid: -1, type: n.error, url: "", title: "", ...t };
  }
  describeProcessOwners(e) {
    const t = [];
    for (const n of this.requireWindowManager().getOpenedWindowsForAllProfiles())
      for (const s of n.rendererLayers()) {
        if (!s.hasWebContents()) continue;
        let a;
        try {
          a = s.getWebContents();
        } catch {
          continue;
        }
        const o = p.safeGetWebContentsId(a);
        if (!o.ok) continue;
        const i = n.rendererFor(o.value)?.page,
          l = p.safeWithWebContents(a, (c) =>
            c.getOSProcessId() !== e
              ? null
              : {
                  id: c.id,
                  layerType: s.layerType,
                  layerId: s.id,
                  tabId: i?.id,
                  tabUrlClass: W(i?.url ?? c.getURL()),
                  titleClass: U(i?.title ?? c.getTitle()),
                },
          );
        l.ok && l.value && t.push(l.value);
      }
    return t;
  }
  async waitForActiveTabReady(e, t) {
    const n = this.requireWindow(t).permissionOwner()?.page;
    if (!n) throw new Error("No active tab");
    await this.waitForTabReady(n, e);
  }
  requireLayoutContext(e) {
    if (!e.layoutRuntimeId) throw new Error("The window has no layout runtime");
    const t = ye.layoutRuntimes.serving(e.layoutRuntimeId);
    if (!t) throw new Error("The window layout runtime is unavailable");
    return { runtime: t, windowId: Se.parse(O.WindowId, e.id) };
  }
  async waitForActiveNewTabReady(e, t, n) {
    const { runtime: s, windowId: a } = this.requireLayoutContext(e);
    await j(async () => {
      const o = O.activeEntry(s.store.state.data, a);
      if (!o || o.id === n || !O.isTab(o) || o.root.kind !== "newTab")
        return !1;
      const i = e.layerFor(p.targetKey({ kind: "newTab", entryId: o.id }));
      if (!i) return !1;
      const l = await p.safeExecuteJavaScriptInLayer(
        i,
        `Boolean(document.querySelector('[data-testid="newtab-content"]'))`,
      );
      return l.ok && l.value;
    }, t);
  }
  async waitForWindowTabsReady(e, t) {
    await j(() => e.pages().length > 0, t);
    const n = e.pages().map((s) => s.page);
    await Promise.all(n.map((s) => this.waitForTabReady(s, t)));
  }
  async waitForTabReady(e, t) {
    await j(
      () => (e.isInitialized ? e.document.load.finished || !e.isLoading : !1),
      t,
    );
  }
  async captureActiveTabTiming(e) {
    if (!e.layer?.hasWebContents()) return null;
    try {
      const t = await p.safeExecuteJavaScriptInLayer(
        e.layer,
        `
        (() => ({
          url: location.href,
          title: document.title,
          readyState: document.readyState,
          paints: performance.getEntriesByType('paint').map((entry) => ({
            name: entry.name,
            startTime: entry.startTime
          })),
          resources: performance.getEntriesByType('resource').map((entry) => ({
            name: entry.name,
            initiatorType: entry.initiatorType,
            startTime: entry.startTime,
            duration: entry.duration,
            transferSize: entry.transferSize || 0,
            encodedBodySize: entry.encodedBodySize || 0,
            decodedBodySize: entry.decodedBodySize || 0
          }))
        }))()
      `,
      );
      if (!t.ok) return null;
      const n = t.value;
      return {
        tabId: e.id,
        url: String(n.url ?? e.url),
        title: String(n.title ?? e.title),
        readyState: String(n.readyState ?? ""),
        paints: Array.isArray(n.paints) ? n.paints : [],
        resources: Array.isArray(n.resources) ? n.resources : [],
      };
    } catch {
      return null;
    }
  }
  recordAction(e) {
    this.actions.push({
      type: "action",
      timestamp: new Date().toISOString(),
      ...e,
    });
  }
  requireWindowManager() {
    if (!this.windowManager) throw new Error("WindowManager not initialized");
    return this.windowManager;
  }
  requireProfileManager() {
    if (!this.profileManager) throw new Error("ProfileManager not initialized");
    return this.profileManager;
  }
  requireRunPaths() {
    if (!this.runPaths)
      throw new Error("Performance run paths are not initialized");
    return this.runPaths;
  }
  requireWindow(e) {
    const t = this.resolveWindow(e);
    if (!t) throw new Error("No browser window is available");
    return t;
  }
  resolveWindow(e) {
    const t = this.requireWindowManager(),
      n = this.resolveProfileIdFromTarget(e),
      s = n ? t.getOpenedWindows(n) : t.getOpenedWindowsForAllProfiles();
    return typeof e?.windowIndex == "number"
      ? (s[e.windowIndex] ?? null)
      : n
        ? (s.find((a) => a.isFocused()) ?? s[0] ?? null)
        : (t.getLastFocusedManagedWindow() ?? null);
  }
  focusWindow(e) {
    if (!e.isAlive()) throw new Error(`Cannot focus destroyed window ${e.id}`);
    e.focus();
  }
  async resolveProfileForWindow(e) {
    const t = this.requireProfileManager(),
      n = this.resolveProfileIdFromTarget(e);
    if (n) {
      const a = await t.loadProfile(n);
      if (!a) throw new Error(`Failed to load profile ${n}`);
      return a;
    }
    if (e.profileName && e.createProfile === !0)
      return t.createProfile(e.profileName);
    if (e.profileName)
      throw new Error(`Profile "${e.profileName}" was not found`);
    if (e.profileId) throw new Error(`Profile "${e.profileId}" was not found`);
    if (typeof e.profileIndex == "number")
      throw new Error(`Profile index ${e.profileIndex} was not found`);
    const s = this.resolveWindow();
    if (s) {
      const a = await t.loadProfile(s.profileId);
      if (a) return a;
    }
    return t.getLatestUsedProfile();
  }
  resolveProfileIdFromTarget(e) {
    if (!e) return null;
    const t = this.requireProfileManager().getAllProfileData();
    return e.profileId
      ? (t.find((s) => s.id === e.profileId)?.id ?? e.profileId)
      : e.profileName
        ? (t.find((s) => s.name === e.profileName || s.id === e.profileName)
            ?.id ?? null)
        : typeof e.profileIndex == "number"
          ? (t[e.profileIndex]?.id ?? null)
          : null;
  }
  async requireChatService(e) {
    const t =
      this.resolveProfileIdFromTarget(e) ?? this.requireWindow(e).profileId;
    if (!(await this.requireProfileManager().loadProfile(t)))
      throw new Error(`Failed to load profile ${t}`);
    const s = p.chatServiceRegistry.get(t);
    if (!s) throw new Error(`ChatService not registered for profile ${t}`);
    return s;
  }
  logConsoleSummary(e, t) {
    const n = e[e.length - 1];
    (console.log("[PerformanceScenarioRunner] Run complete"),
      console.log(`[PerformanceScenarioRunner] Summary: ${t}`),
      n &&
        console.log(
          `[PerformanceScenarioRunner] Final total memory=${n.totals.memoryMB}MB cpu=${n.totals.cpuPercent}% tabs=${n.totals.initializedTabs}`,
        ));
  }
}
function I(r) {
  return {
    id: r.id,
    pid: r.pid,
    type: r.type,
    urlClass: W(r.url),
    url: x(r.url),
    titleClass: U(r.title),
    windowId: r.windowId,
    layerId: r.layerId,
    layerType: r.layerType,
    tabId: r.tabId,
    tabTitleClass: r.tabTitle ? U(r.tabTitle) : void 0,
    tabUrlClass: r.tabUrl ? W(r.tabUrl) : void 0,
  };
}
function W(r) {
  return r
    ? r.startsWith("orbitra://newtab")
      ? "orbitra-newtab"
      : r.startsWith("orbitra://chat")
        ? "orbitra-chat"
        : r.startsWith("orbitra://")
          ? "orbitra-app"
          : r.startsWith("http://localhost") ||
              r.startsWith("https://localhost")
            ? "local-dev"
            : r.startsWith("http://") || r.startsWith("https://")
              ? "web-origin"
              : r.startsWith("chrome-extension://") || r.startsWith("crx://")
                ? "extension"
                : r.startsWith("devtools://")
                  ? "devtools"
                  : r.startsWith("file://")
                    ? "file"
                    : "other"
    : "empty";
}
function x(r) {
  if (!r) return "";
  try {
    const e = new URL(r);
    return e.protocol === "http:" || e.protocol === "https:"
      ? `${e.origin}${e.pathname}`
      : e.protocol === "orbitra:"
        ? `${e.protocol}//${e.hostname}${e.pathname}`
        : `${e.protocol}//${e.hostname}${e.pathname}`;
  } catch {
    return W(r);
  }
}
function U(r) {
  return r ? `present:${Math.min(r.length, 120)}` : "empty";
}
function tt(r) {
  const e = r.width ?? 0,
    t = r.height ?? 0;
  return {
    layerId: r.layerId,
    parentLayerId: r.parentLayerId,
    backendNodeId: r.backendNodeId,
    width: S(e),
    height: S(t),
    area: S(e * t),
    paintCount: r.paintCount ?? 0,
    drawsContent: r.drawsContent === !0,
    invisible: r.invisible === !0,
    scrollRectCount: r.scrollRects?.length ?? 0,
    scrollRectTypes: Array.from(
      new Set((r.scrollRects ?? []).map((n) => n.type ?? "")),
    )
      .filter(Boolean)
      .sort(),
  };
}
function rt(r) {
  return S(r.reduce((e, t) => e + (t.width ?? 0) * (t.height ?? 0), 0));
}
function nt(r) {
  const e = r?.clientWidth,
    t = r?.clientHeight;
  if (typeof e != "number" || !Number.isFinite(e) || e <= 0)
    throw new Error("Page layout viewport width is unavailable");
  if (typeof t != "number" || !Number.isFinite(t) || t <= 0)
    throw new Error("Page layout viewport height is unavailable");
  return S(e * t);
}
function st(r) {
  const e = new Map();
  for (const t of r) {
    const n = e.get(t.layerId) ?? [];
    (n.push(S(at(t.clip))), e.set(t.layerId, n));
  }
  return Array.from(e.entries())
    .map(([t, n]) => {
      const s = S(n.reduce((a, o) => a + o, 0));
      return {
        layerId: t,
        count: n.length,
        totalArea: s,
        maxArea: Math.max(...n, 0),
        areas: n,
      };
    })
    .sort((t, n) => n.totalArea - t.totalArea);
}
function at(r) {
  const e = r?.width,
    t = r?.height;
  if (
    typeof e != "number" ||
    !Number.isFinite(e) ||
    e <= 0 ||
    typeof t != "number" ||
    !Number.isFinite(t) ||
    t <= 0
  )
    throw new Error("Layer paint clip dimensions are invalid");
  return e * t;
}
function ot(r) {
  return r
    ? {
        ...r,
        url: x(r.url),
        paints: r.paints.map((e) => ({ name: e.name, startTime: e.startTime })),
        largestContentfulPaint: r.largestContentfulPaint
          ? {
              ...r.largestContentfulPaint,
              url: r.largestContentfulPaint.url
                ? x(r.largestContentfulPaint.url)
                : void 0,
            }
          : null,
        layoutShifts: r.layoutShifts
          .slice(0, 200)
          .map((e) => ({
            ...e,
            sources: e.sources.slice(0, 5).map((t) => ({ ...t })),
          })),
        marks: r.marks.slice(0, 200).map((e) => ({ ...e })),
        unsupportedEntryTypes: [...new Set(r.unsupportedEntryTypes)],
      }
    : null;
}
function it(r) {
  return {
    available: r.available,
    urlClass: W(r.url ?? ""),
    url: x(r.url ?? ""),
    titleClass: U(r.title ?? ""),
    readyState: r.readyState ?? "",
    visibilityState: r.visibilityState ?? "",
    navigation: r.navigation ?? null,
    paints: r.paints ?? [],
    resources: (r.resources ?? [])
      .map((e) => ({ ...e, name: x(e.name), urlClass: W(e.name) }))
      .sort((e, t) => t.duration - e.duration)
      .slice(0, 50),
    vitals: ot(r.vitals),
  };
}
async function q(r, e) {
  (await h.mkdir(f.dirname(r), { recursive: !0 }),
    await h.appendFile(
      r,
      `${JSON.stringify(e)}
`,
    ));
}
async function L(r, e, t) {
  await h.mkdir(f.dirname(r), { recursive: !0 });
  let n = "";
  try {
    await h.access(r);
  } catch {
    n = `# ${e}

`;
  }
  await h.appendFile(
    r,
    `${n}${t.join(`
`)}

`,
  );
}
function lt(r) {
  const e = [`## ${r.name}`, "", `Elapsed: ${r.elapsedMs}ms`, ""];
  (e.push(...We(r.requestedTargetCoverage), ""),
    e.push("### Top Processes", ""),
    e.push("| MB | CPU % | PID | Type | Service |"),
    e.push("| ---: | ---: | ---: | --- | --- |"));
  for (const t of r.processes
    .slice()
    .sort((n, s) => s.memoryMB - n.memoryMB)
    .slice(0, 12))
    e.push(
      `| ${t.memoryMB} | ${t.cpuPercent} | ${t.pid} | ${t.type} | ${t.serviceName ?? ""} |`,
    );
  (e.push("", "### Renderer Counters", ""),
    e.push("| Nodes | Listeners | Docs | Layer | URL class | URL |"),
    e.push("| ---: | ---: | ---: | --- | --- | --- |"));
  for (const t of r.renderers.slice(0, 24)) {
    const n = t.cdp.domCounters;
    e.push(
      `| ${n?.nodes ?? 0} | ${n?.jsEventListeners ?? 0} | ${n?.documents ?? 0} | ${t.webContents.layerType ?? ""} | ${t.webContents.urlClass} | ${t.webContents.url} |`,
    );
  }
  return e;
}
function ut(r) {
  const e = [`## ${r.name}`, "", `Elapsed: ${r.elapsedMs}ms`, ""];
  (e.push("| Nodes | Listeners | Docs | Layer | URL class |"),
    e.push("| ---: | ---: | ---: | --- | --- |"));
  for (const t of r.renderers.slice(0, 30)) {
    const n = t.cdp.domCounters;
    e.push(
      `| ${n?.nodes ?? 0} | ${n?.jsEventListeners ?? 0} | ${n?.documents ?? 0} | ${t.webContents.layerType ?? ""} | ${t.webContents.urlClass} |`,
    );
  }
  return e;
}
function ct(r) {
  const e = [`## ${r.name}`, "", `Elapsed: ${r.elapsedMs}ms`, ""];
  (e.push(
    "| Layers | Draws content | Paint count | Layer area | Viewport area | Slow scroll rects | Layer | URL class |",
  ),
    e.push("| ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |"));
  for (const t of r.renderers.slice(0, 30))
    e.push(
      `| ${t.layerCount} | ${t.drawsContentCount} | ${t.totalPaintCount} | ${t.totalArea} | ${t.viewportArea} | ${t.slowScrollRectCount} | ${t.webContents.layerType ?? ""} | ${t.webContents.urlClass} |`,
    );
  return e;
}
function dt(r) {
  const e = [
    `## ${r.name}`,
    "",
    `Elapsed: ${r.elapsedMs}ms`,
    `Duration: ${r.durationMs}ms`,
    "",
  ];
  (e.push("| Paints | Total area | Max area | Layer | URL class |"),
    e.push("| ---: | ---: | ---: | --- | --- |"));
  for (const t of r.renderers.slice(0, 30))
    e.push(
      `| ${t.paintCount ?? 0} | ${t.totalPaintArea ?? 0} | ${t.maxPaintArea ?? 0} | ${t.webContents?.layerType ?? ""} | ${t.webContents?.urlClass ?? ""} |`,
    );
  return e;
}
function pt(r) {
  const e = [`## ${r.name}`, "", `Elapsed: ${r.elapsedMs}ms`, ""];
  if (r.startupEvents && r.startupEvents.length > 0) {
    (e.push("### Main Process Timeline", ""),
      e.push("| Elapsed ms | Delta ms | Label | Metadata |"),
      e.push("| ---: | ---: | --- | --- |"));
    for (const s of r.startupEvents)
      e.push(
        `| ${s.elapsedMs} | ${s.sincePreviousMs} | ${k(s.label)} | ${k(ft(s.metadata))} |`,
      );
    e.push("");
  }
  (e.push("### Renderer Navigation Timing", ""),
    e.push(
      "| DCL ms | Load ms | FP ms | FCP ms | LCP ms | CLS | Shifts | Resources | Layer | URL class |",
    ),
    e.push(
      "| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |",
    ));
  for (const s of r.renderers.slice(0, 30)) {
    const a = s.timing.vitals?.paints ?? s.timing.paints ?? [],
      o = a.find((u) => u.name === "first-paint"),
      i = a.find((u) => u.name === "first-contentful-paint"),
      l = s.timing.vitals?.largestContentfulPaint,
      c = s.timing.vitals?.layoutShifts ?? [];
    e.push(
      `| ${s.timing.navigation?.domContentLoadedEventEnd ?? 0} | ${s.timing.navigation?.loadEventEnd ?? 0} | ${o?.startTime ?? 0} | ${i?.startTime ?? 0} | ${l?.startTime ?? 0} | ${s.timing.vitals?.cumulativeLayoutShift ?? 0} | ${c.length} | ${s.timing.resources?.length ?? 0} | ${s.webContents.layerType ?? ""} | ${s.webContents.urlClass} |`,
    );
  }
  const t = r.renderers
    .flatMap((s) =>
      (s.timing.vitals?.layoutShifts ?? []).map((a) => ({
        renderer: s,
        shift: a,
      })),
    )
    .filter(({ shift: s }) => s.value > 0)
    .sort((s, a) => a.shift.value - s.shift.value)
    .slice(0, 12);
  if (t.length > 0) {
    (e.push("", "### Top Layout Shifts", ""),
      e.push("| Value | Time ms | Layer | URL class | Sources |"),
      e.push("| ---: | ---: | --- | --- | --- |"));
    for (const { renderer: s, shift: a } of t) {
      const o = a.sources
        .map((i) => i.node ?? "unknown")
        .filter(Boolean)
        .slice(0, 4)
        .join(", ");
      e.push(
        `| ${a.value} | ${a.startTime} | ${s.webContents.layerType ?? ""} | ${s.webContents.urlClass} | ${k(o)} |`,
      );
    }
  }
  const n = r.renderers
    .flatMap((s) =>
      (s.timing.vitals?.marks ?? []).map((a) => ({ renderer: s, mark: a })),
    )
    .sort((s, a) => s.mark.startTime - a.mark.startTime)
    .slice(0, 20);
  if (n.length > 0) {
    (e.push("", "### Renderer Perf Marks", ""),
      e.push("| Time ms | Layer | URL class | Mark | Metadata |"),
      e.push("| ---: | --- | --- | --- | --- |"));
    for (const { renderer: s, mark: a } of n)
      e.push(
        `| ${a.startTime} | ${s.webContents.layerType ?? ""} | ${s.webContents.urlClass} | ${k(a.name)} | ${k(a.metadata ? JSON.stringify(a.metadata) : "")} |`,
      );
  }
  return e;
}
function ft(r) {
  return r ? JSON.stringify(r) : "";
}
function k(r) {
  return r.replace(/\|/g, "\\|");
}
function S(r) {
  return Math.round(r * 100) / 100;
}
function C(r, e) {
  return r.map((t) =>
    t.type === "openWindow"
      ? {
          ...t,
          from: t.from ? R(e, t.from) : t.from,
          tabs: t.tabs ? B(t.tabs, e) : t.tabs,
        }
      : t.type === "openTabs" && t.from
        ? { ...t, from: R(e, t.from) }
        : t.type === "seedChats" && t.from
          ? { ...t, from: R(e, t.from) }
          : t.type === "measure"
            ? { ...t, action: C([t.action], e)[0] }
            : t.type === "profile"
              ? { ...t, action: C([t.action], e)[0] }
              : t.type === "recordLayerPaints"
                ? { ...t, action: C([t.action], e)[0] }
                : t.type === "repeat"
                  ? { ...t, actions: C(t.actions, e) }
                  : t.type === "forDuration"
                    ? { ...t, actions: C(t.actions, e) }
                    : t,
  );
}
function B(r, e) {
  return {
    ...r,
    from: r.from ? R(e, r.from) : r.from,
    windows: r.windows?.map((t) => mt(t, e)),
  };
}
function mt(r, e) {
  return { ...r, from: r.from ? R(e, r.from) : r.from };
}
function ht(r, e) {
  return r.from ? { ...r, from: R(e, r.from) } : r;
}
function wt(r, e) {
  return r.map((t) => ({ ...t, tabs: t.tabs ? B(t.tabs, e) : t.tabs }));
}
function gt(r, e) {
  return r.map((t) => ({
    ...t,
    from: t.from ? R(e, t.from) : t.from,
    tabs: t.tabs ? B(t.tabs, e) : t.tabs,
  }));
}
function R(r, e) {
  return f.isAbsolute(e) ? e : f.resolve(r, e);
}
function F(r) {
  return (
    r.replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "") ||
    "heap-snapshot"
  );
}
async function A(r) {
  const e = await h.readFile(r, "utf-8");
  return JSON.parse(e);
}
function yt(r) {
  return {
    enabled: r.enabled === !0,
    createdAt:
      typeof r.createdAt == "string" ? r.createdAt : new Date().toISOString(),
    elapsedMs: typeof r.elapsedMs == "number" ? r.elapsedMs : 0,
    entryCount: typeof r.entryCount == "number" ? r.entryCount : 0,
    totalCount: typeof r.totalCount == "number" ? r.totalCount : 0,
    totalMs: typeof r.totalMs == "number" ? r.totalMs : 0,
    byKind: Array.isArray(r.byKind) ? r.byKind : [],
    topByTotalMs: Array.isArray(r.topByTotalMs) ? r.topByTotalMs : [],
    topByMaxMs: Array.isArray(r.topByMaxMs) ? r.topByMaxMs : [],
    topByCount: Array.isArray(r.topByCount) ? r.topByCount : [],
  };
}
function de() {
  return {
    enabled: !1,
    createdAt: new Date().toISOString(),
    elapsedMs: 0,
    entryCount: 0,
    totalCount: 0,
    totalMs: 0,
    byKind: [],
    topByTotalMs: [],
    topByMaxMs: [],
    topByCount: [],
  };
}
async function pe(r) {
  const e = process.env.PERF_DONE_FILE;
  e &&
    (await h.mkdir(f.dirname(e), { recursive: !0 }),
    await h.writeFile(e, JSON.stringify(r, null, 2)));
}
function K(r) {
  if (!r) return null;
  const e = Number(r);
  return !Number.isFinite(e) || e <= 0 ? null : Math.floor(e);
}
function Y(r) {
  return typeof r == "string" ? { url: r } : r;
}
function X(r, e) {
  if (!e || r.length === 0 || r.length >= e) return r;
  const t = [];
  for (let n = 0; n < e; n++) t.push(r[n % r.length]);
  return t;
}
function bt(r) {
  return r.startsWith("orbitra://") ? "app" : "website";
}
function Z(r) {
  if (!r.startsWith("orbitra://")) return r;
  const e = new URL(r);
  return p.buildAppUrl(`/${e.hostname}${e.pathname}${e.search}`);
}
function Ct(r) {
  const e = {};
  return (
    "windowIndex" in r &&
      typeof r.windowIndex == "number" &&
      (e.windowIndex = r.windowIndex),
    "profileId" in r &&
      typeof r.profileId == "string" &&
      (e.profileId = r.profileId),
    "profileName" in r &&
      typeof r.profileName == "string" &&
      (e.profileName = r.profileName),
    "profileIndex" in r &&
      typeof r.profileIndex == "number" &&
      (e.profileIndex = r.profileIndex),
    e
  );
}
function St(r, e) {
  const t = [];
  for (let n = 0; n < r; n++) {
    const s = n % 2 === 0 ? "user" : "assistant";
    t.push({
      id: `perf-${e + 1}-${n + 1}-${me.randomUUID()}`,
      role: s,
      content:
        `${s} message ${n + 1} in seeded performance chat ${e + 1}. `.repeat(8),
      timestamp: Date.now() - (r - n) * 1e3,
      collapseState: { isFullyCollapsed: !1, wasAutoCollapsed: !1 },
    });
  }
  return t;
}
function T(r) {
  return new Promise((e) => setTimeout(e, r));
}
async function j(r, e) {
  const t = Date.now() + e;
  for (; Date.now() < t; ) {
    if (await r()) return;
    await T(10);
  }
  throw new Error(`Timed out after ${e}ms`);
}
const Pt = new ee();
exports.performanceScenarioRunner = Pt;
