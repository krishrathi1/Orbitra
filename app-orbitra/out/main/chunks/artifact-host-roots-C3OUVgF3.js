"use strict";
(function () {
  try {
    var o =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    o.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var o =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      n = new o.Error().stack;
    n &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[n] = "5b433b87-2f60-4aa8-90bb-b39ad908a674"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-5b433b87-2f60-4aa8-90bb-b39ad908a674"));
  })();
} catch {}
const d = require("../main-app.js"),
  f = require("./errors-DsbnElf-.js");
function c(o) {
  const n = new Set(o.writableRoots),
    e = o.writableRoots.map((s) => ({ hostPath: s, mode: "readwrite" }));
  for (const s of o.readableRoots)
    n.has(s) || e.push({ hostPath: s, mode: "read" });
  return e;
}
function l(o) {
  const {
      userProfileId: n,
      sandboxOwner: e,
      inheritedRootSession: s,
      turnId: r,
    } = o,
    i = s
      ? d.agentPermissionManager.buildSandboxFilesystemSnapshot({
          profileId: n,
          sessionId: s.id,
          sessionPermissionMode: s.permissionMode,
        })
      : null,
    t = d.agentPermissionManager.buildSandboxFilesystemSnapshot({
      profileId: n,
      sessionId: e.id,
      sessionPermissionMode: e.permissionMode,
      turnId: r,
    });
  return {
    grants: d.mergeGrants(i ? c(i) : [], c(t)),
    projectFolders: d
      .mergeProjectFolders(s?.projectFolders, e.projectFolders)
      .map((a) => f.currentSyncedPath(a, e.accountId)),
  };
}
async function u(o) {
  const n = await o.chatSessionManager.resolveRootSessionOrSelf(o.session),
    e = new Set(),
    s = o.session.companionProfileId || n.companionProfileId;
  if (s) {
    const t = o.chatSessionManager.companionManager;
    await t.ensureCompanionLocation(s);
    const a = t.getCompanionPathMount(s);
    a && e.add(a.rootHostPath);
  }
  e.add(f.getSharedWithMeDir(o.chatSessionManager.userProfile.accountId));
  const r = o.session.getUserProfile().id,
    i = r
      ? l({
          userProfileId: r,
          sandboxOwner: o.session,
          inheritedRootSession: n.id === o.session.id ? null : n,
          turnId: void 0,
        })
      : {
          projectFolders: [
            ...(n.projectFolders ?? []),
            ...(o.session.projectFolders ?? []),
          ],
          grants: [],
        };
  for (const t of i.projectFolders) t.trim() && e.add(t);
  for (const t of o.teamWorkspaces) t.hostPath.trim() && e.add(t.hostPath);
  for (const t of i.grants) t.hostPath.trim() && e.add(t.hostPath);
  return [...e];
}
const b = Object.freeze(
  Object.defineProperty(
    { __proto__: null, getArtifactHostRootsForSession: u },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
exports.artifactHostRoots = b;
exports.getArtifactHostRootsForSession = u;
exports.resolveSessionSandboxSources = l;
exports.snapshotToGrants = c;
