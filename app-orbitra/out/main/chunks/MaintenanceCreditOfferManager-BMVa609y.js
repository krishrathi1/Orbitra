"use strict";
(function () {
  try {
    var a =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    a.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var a =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      i = new a.Error().stack;
    i &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[i] = "babf8b0c-79e7-469d-befc-0b308f6a1cee"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-babf8b0c-79e7-469d-befc-0b308f6a1cee"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const n = require("../main-app.js"),
  s = require("valibot");
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
function o(a) {
  const i = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (a) {
    for (const r in a)
      if (r !== "default") {
        const t = Object.getOwnPropertyDescriptor(a, r);
        Object.defineProperty(
          i,
          r,
          t.get ? t : { enumerable: !0, get: () => a[r] },
        );
      }
  }
  return ((i.default = a), Object.freeze(i));
}
const e = o(s),
  u = e.pipe(e.string(), e.minLength(1)),
  l = e.pipe(e.string(), e.isoTimestamp()),
  f = e.object({
    offerId: u,
    credits: e.pipe(e.number(), e.finite(), e.minValue(0)),
    expiresAt: l,
  }),
  c = e.variant("status", [
    e.object({ status: e.literal("available"), offer: f }),
    e.object({
      status: e.literal("unavailable"),
      reason: e.picklist(["not_eligible", "already_claimed", "expired"]),
    }),
  ]),
  q = e.union([
    e.object({
      ok: e.literal(!0),
      alreadyClaimed: e.boolean(),
      creditsGranted: e.pipe(e.number(), e.finite(), e.minValue(0)),
      offerId: u,
    }),
    e.object({
      ok: e.literal(!1),
      reason: e.picklist(["not_eligible", "expired", "claim_failed"]),
    }),
  ]);
class d extends n.BaseManager {
  claiming = new Set();
  initialize(i) {
    (i.layers.handleInvoke(
      "offers:maintenance-credit:eligibility",
      async () =>
        await this.fetchEligibility(
          n.authManager.forProfile(i.layers.getProfileId()).accountId ?? null,
        ),
    ),
      i.layers.handleInvoke(
        "offers:maintenance-credit:claim",
        async () =>
          await this.claim(
            n.authManager.forProfile(i.layers.getProfileId()).accountId ?? null,
          ),
      ));
  }
  async fetchEligibility(i) {
    return Promise.try(async () => {
      const r = await n.authFetch(
        `${n.config.app.apiUrl}/api/account/offers/maintenance-credit/eligibility`,
        { accountId: i, method: "GET" },
      );
      if (!r.ok)
        return (
          n.logger.warn("[MaintenanceCreditOffer] eligibility request failed", {
            status: r.status,
          }),
          { shouldShow: !1, reason: null, error: `http_${r.status}` }
        );
      const t = e.parse(c, await r.json());
      return t.status === "unavailable"
        ? { shouldShow: !1, reason: t.reason, error: null }
        : {
            shouldShow: !0,
            offerId: t.offer.offerId,
            credits: t.offer.credits,
            expiresAt: t.offer.expiresAt,
            error: null,
          };
    }).catch(
      (r) => (
        n.logger.warn("[MaintenanceCreditOffer] eligibility request threw", {
          error: r instanceof Error ? r.message : "unknown_error",
        }),
        {
          shouldShow: !1,
          reason: null,
          error: r instanceof Error ? r.message : "unknown_error",
        }
      ),
    );
  }
  async claim(i) {
    return this.claiming.has(i)
      ? { ok: !1, error: "already_in_flight" }
      : (this.claiming.add(i),
        Promise.try(async () => {
          const r = await n.authFetch(
              `${n.config.app.apiUrl}/api/account/offers/maintenance-credit/claim`,
              {
                accountId: i,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: "{}",
              },
            ),
            t = e.parse(q, await r.json());
          return t.ok
            ? r.ok
              ? (n.authManager
                  .forAccount(i)
                  .publishEvent("ipc:signal", {
                    signal: {
                      domain: "offers",
                      type: "maintenanceCreditClaimed",
                      payload: {
                        offerId: t.offerId,
                        creditsGranted: t.creditsGranted,
                      },
                    },
                  }),
                { ok: !0, creditsGranted: t.creditsGranted })
              : (n.logger.warn(
                  "[MaintenanceCreditOffer] claim request failed",
                  { status: r.status },
                ),
                { ok: !1, error: `http_${r.status}` })
            : (n.logger.warn(
                "[MaintenanceCreditOffer] claim request rejected",
                { status: r.status, reason: t.reason },
              ),
              { ok: !1, error: t.reason });
        })
          .catch(
            (r) => (
              n.logger.warn("[MaintenanceCreditOffer] claim request threw", {
                error: r instanceof Error ? r.message : "unknown_error",
              }),
              {
                ok: !1,
                error: r instanceof Error ? r.message : "unknown_error",
              }
            ),
          )
          .finally(() => {
            this.claiming.delete(i);
          }));
  }
}
const g = new d();
exports.maintenanceCreditOfferManager = g;
