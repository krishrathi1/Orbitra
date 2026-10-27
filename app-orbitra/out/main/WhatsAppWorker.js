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
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "66afd4d1-7cf0-43b5-bc0f-ba64856c949d"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-66afd4d1-7cf0-43b5-bc0f-ba64856c949d"));
  })();
} catch {}
const N = require("node:crypto"),
  I = require("node:fs/promises"),
  x = require("node:path"),
  g = require("@dendrite-systems/baileys"),
  Be = require("qrcode"),
  Je = require("valibot"),
  c = require("./chunks/errors-DsbnElf-.js"),
  M = require("./chunks/unicode-CSAGP0Z8.js"),
  se = require("./chunks/savedCertificateBlocklist-BUtmL3xA.js"),
  z = require("node:fs"),
  Ue = require("node:stream"),
  Ee = require("node:stream/promises"),
  D = require("./chunks/index-C1xADwsw.js"),
  Pe = require("better-sqlite3");
require("node:os");
require("./chunks/appDataPath-20zIIRaW.js");
require("node:tls");
require("./chunks/base-B19nE_Cx.js");
function ze(t) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (t) {
    for (const s in t)
      if (s !== "default") {
        const a = Object.getOwnPropertyDescriptor(t, s);
        Object.defineProperty(
          e,
          s,
          a.get ? a : { enumerable: !0, get: () => t[s] },
        );
      }
  }
  return ((e.default = t), Object.freeze(e));
}
const u = ze(Je);
class qe {
  constructor(e, s) {
    ((this.request = e), (this.lost = s));
  }
  leaseId = N.randomUUID();
  accountId;
  revision = 0;
  keyIndexSecret = "";
  phase = "opening";
  failure;
  deadline = 0;
  heartbeat;
  expiry;
  work = Promise.resolve();
  async open(e, s) {
    const a = e.loadCredentials(),
      i = Date.now(),
      n = await this.request({
        operation: "acquire",
        leaseId: this.leaseId,
        create: s || !!a.me?.id,
      });
    if (n.status === "missing") return null;
    if (n.status === "busy")
      throw new c.WhatsAppCredentialError("credential_busy");
    if (n.status !== "acquired")
      throw new c.WhatsAppOperationError(
        "Unable to load WhatsApp credentials.",
      );
    ((this.accountId = n.accountId),
      (this.revision = n.revision),
      (this.phase = "active"),
      this.renewed(i));
    let o;
    if (n.credentials) {
      try {
        o = JSON.parse(n.credentials.auth, g.BufferJSON.reviver);
      } catch {
        throw (
          this.fail("credential_data_invalid"),
          new c.WhatsAppCredentialError("credential_data_invalid")
        );
      }
      ((this.keyIndexSecret = n.credentials.keyIndexSecret),
        a.me?.id && a.me.id !== o.me?.id && e.clear());
    } else {
      if (
        ((o = a.me?.id ? a : g.initAuthCreds()),
        (this.keyIndexSecret = a.me?.id
          ? e.legacyKeyIndexSecret()
          : N.randomBytes(32).toString("hex")),
        a.me?.id)
      )
        for (const r of e.legacySecretRecords()) await this.writeRecords(r);
      await this.save(o);
    }
    return (e.bindAccount(n.accountId), e.clearLegacySecrets(), o);
  }
  assertActive() {
    if (this.phase !== "active")
      throw new c.WhatsAppCredentialError(
        this.failure ?? "credential_session_closed",
      );
    this.assertLease();
  }
  assertLease() {
    if (
      (this.phase !== "active" && this.phase !== "closing") ||
      Date.now() >= this.deadline
    )
      throw (
        this.fail("credential_lease_expired"),
        new c.WhatsAppCredentialError("credential_lease_expired")
      );
  }
  renewed(e) {
    ((this.deadline = e + c.WHATSAPP_LEASE_MS - 1e4),
      this.expiry && clearTimeout(this.expiry),
      this.heartbeat && clearTimeout(this.heartbeat),
      this.phase === "active" &&
        ((this.expiry = setTimeout(
          () => this.fail("credential_lease_expired"),
          Math.max(0, this.deadline - Date.now()),
        )),
        (this.heartbeat = setTimeout(() => {
          this.enqueue(async () => {
            for (let s = 0; ; s++) {
              if (this.phase !== "active") return;
              const a = Date.now();
              try {
                const i = await this.request({
                  operation: "renew",
                  accountId: this.requireAccount(),
                  leaseId: this.leaseId,
                });
                if ((this.assertLease(), i.status !== "ok"))
                  throw new c.WhatsAppCredentialError("credential_lease_lost");
                this.renewed(a);
                return;
              } catch (i) {
                if (
                  !(i instanceof Error) ||
                  !c.canRetryWhatsAppRenewal(i) ||
                  s >= 2
                )
                  throw i;
                (this.assertLease(),
                  await new Promise((n) => setTimeout(n, 2e3 * 2 ** s)),
                  this.assertLease());
              }
            }
          }).catch(() => {});
        }, 25e3))));
  }
  requireAccount() {
    if ((this.assertLease(), !this.accountId))
      throw new Error("Credential account missing");
    return this.accountId;
  }
  async enqueue(e) {
    this.assertActive();
    const s = this.work
      .then(async () => {
        this.assertLease();
        const a = await e();
        return (this.assertLease(), a);
      })
      .catch((a) => {
        const i =
          a instanceof c.WhatsAppCredentialError
            ? a
            : new c.WhatsAppCredentialError("credential_operation_failed");
        throw (this.fail(i.reason), i);
      });
    return (
      (this.work = s.then(
        () => {},
        () => {},
      )),
      s
    );
  }
  fail(e) {
    this.phase !== "closed" &&
      ((this.phase = "closed"),
      (this.failure = e),
      this.heartbeat && clearTimeout(this.heartbeat),
      this.expiry && clearTimeout(this.expiry),
      this.lost(e));
  }
  async close() {
    (this.phase === "active" && (this.phase = "closing"),
      this.heartbeat && clearTimeout(this.heartbeat),
      this.expiry && clearTimeout(this.expiry),
      await this.work,
      (this.phase = "closed"),
      this.accountId &&
        (await this.request({
          operation: "release",
          accountId: this.accountId,
          leaseId: this.leaseId,
        }).catch(() => {})));
  }
  save(e) {
    const s = e.me?.name || e.me?.id.split(":")[0] || null,
      a = {
        version: 1,
        auth: JSON.stringify(e, g.BufferJSON.replacer),
        keyIndexSecret: this.keyIndexSecret,
        linked: !!e.me?.id,
        displayName: s ? M.sanitizeUnpairedSurrogates(s).slice(0, 512) : null,
      };
    return this.enqueue(() => this.commit([], a));
  }
  async commit(e, s) {
    const a = await this.request({
      operation: "save",
      accountId: this.requireAccount(),
      leaseId: this.leaseId,
      revision: this.revision,
      credentials: s,
      keys: e,
    });
    if (a.status !== "saved")
      throw new c.WhatsAppCredentialError("credential_revision_changed");
    this.revision = a.revision;
  }
  writeRecords(e) {
    return this.enqueue(async () => {
      let s = [],
        a = 0;
      for (const i of e) {
        const n = Buffer.byteLength(JSON.stringify(i));
        (s.length &&
          (s.length >= c.WHATSAPP_KEY_BATCH_SIZE || a + n > 3 * 1024 * 1024) &&
          (await this.commit(s), (s = []), (a = 0)),
          s.push(i),
          (a += n));
      }
      s.length && (await this.commit(s));
    });
  }
  id(e, s) {
    return N.createHmac("sha256", Buffer.from(this.keyIndexSecret, "hex"))
      .update(`${e}:${s}`)
      .digest("hex");
  }
  sendFingerprint(e, s) {
    const a = Buffer.from(this.keyIndexSecret, "hex"),
      i = N.createHmac("sha256", a).update(e).digest("hex");
    return N.createHmac("sha256", a)
      .update(JSON.stringify([i, s]))
      .digest("hex");
  }
  readSend(e) {
    return this.enqueue(async () => {
      const s = this.id("send", e),
        a = await this.request({
          operation: "getKeys",
          accountId: this.requireAccount(),
          leaseId: this.leaseId,
          revision: this.revision,
          ids: [s],
        });
      if (a.status !== "keys")
        throw new c.WhatsAppCredentialError("credential_lease_lost");
      return a.keys.find((i) => i.id === s)?.value;
    });
  }
  saveSend(e, s) {
    return this.enqueue(() =>
      this.commit([{ id: this.id("send", e), value: s }]),
    );
  }
  keys = {
    get: (e, s) =>
      this.enqueue(async () => {
        const a = {};
        for (let i = 0; i < s.length; i += c.WHATSAPP_KEY_BATCH_SIZE) {
          const n = s.slice(i, i + c.WHATSAPP_KEY_BATCH_SIZE),
            o = new Map(n.map((d) => [this.id(e, d), d])),
            r = await this.request({
              operation: "getKeys",
              accountId: this.requireAccount(),
              leaseId: this.leaseId,
              revision: this.revision,
              ids: [...o.keys()],
            });
          if (r.status !== "keys")
            throw new c.WhatsAppCredentialError("credential_lease_lost");
          for (const d of r.keys) {
            const l = o.get(d.id);
            if (l)
              try {
                const p = JSON.parse(d.value, g.BufferJSON.reviver);
                a[l] =
                  e === "app-state-sync-key"
                    ? g.proto.Message.AppStateSyncKeyData.fromObject(p)
                    : p;
              } catch {
                throw new c.WhatsAppCredentialError("credential_data_invalid");
              }
          }
        }
        return a;
      }),
    set: (e) => {
      const s = [];
      for (const [a, i] of Object.entries(e))
        for (const [n, o] of Object.entries(i ?? {}))
          s.push({
            id: this.id(a, n),
            value: o == null ? null : JSON.stringify(o, g.BufferJSON.replacer),
          });
      return this.enqueue(async () => {
        if (
          s.length > c.WHATSAPP_KEY_BATCH_SIZE ||
          Buffer.byteLength(JSON.stringify(s)) > 3 * 1024 * 1024
        )
          throw new c.WhatsAppCredentialError("credential_update_too_large");
        s.length && (await this.commit(s));
      });
    },
  };
}
function ue(t, e, s, a = "snapshot") {
  let i = s?.unread_count ?? 0,
    n = s?.marked_unread ?? !1;
  return (
    t.unreadCount != null
      ? t.unreadCount < 0
        ? (n = !0)
        : ((i =
            a === "update" && t.unreadCount > 0
              ? i + t.unreadCount
              : t.unreadCount),
          (n = !1))
      : t.unreadCount === null && (n = !1),
    t.markedAsUnread != null && (n = t.markedAsUnread),
    {
      ...s,
      chat_id: e,
      jid: t.id,
      name: M.sanitizeUnpairedSurrogates(
        t.name ??
          t.displayName ??
          s?.name ??
          t.id.split("@")[0] ??
          "WhatsApp chat",
      ),
      is_group: t.id.endsWith("@g.us"),
      last_message_at: Math.max(
        Number(t.conversationTimestamp ?? t.lastMessageRecvTimestamp ?? 0),
        s?.last_message_at ?? 0,
      ),
      unread_count: i,
      marked_unread: n,
      restricted: t.limitSharing ?? s?.restricted ?? !1,
      disappearing:
        t.ephemeralExpiration !== void 0 && t.ephemeralExpiration !== null
          ? t.ephemeralExpiration > 0
          : (s?.disappearing ?? !1),
      privacy_pending: a === "update" ? (s?.privacy_pending ?? !0) : !1,
      aliases: s?.aliases ?? [t.id],
    }
  );
}
function ae(t) {
  let e = t;
  for (let s = 0; s < 12; s++) {
    if (!e) return { kind: "pending" };
    if (
      e.ephemeralMessage ||
      e.viewOnceMessage ||
      e.viewOnceMessageV2 ||
      e.viewOnceMessageV2Extension ||
      e.limitSharingMessage ||
      e.messageContextInfo?.limitSharing?.sharingLimited ||
      e.messageContextInfo?.limitSharingV2?.sharingLimited
    )
      return { kind: "private" };
    const a = $(e);
    if (a && "viewOnce" in a.media && a.media.viewOnce)
      return { kind: "private" };
    if (ge(e)?.expiration) return { kind: "private" };
    const n =
      e.deviceSentMessage?.message ??
      e.documentWithCaptionMessage?.message ??
      e.editedMessage?.message;
    if (n) {
      e = n;
      continue;
    }
    return { kind: "readable", content: e };
  }
  return { kind: "unsupported" };
}
function ge(t) {
  return (
    t.extendedTextMessage?.contextInfo ??
    t.imageMessage?.contextInfo ??
    t.videoMessage?.contextInfo ??
    t.ptvMessage?.contextInfo ??
    t.documentMessage?.contextInfo ??
    t.audioMessage?.contextInfo ??
    t.stickerMessage?.contextInfo ??
    t.locationMessage?.contextInfo ??
    t.liveLocationMessage?.contextInfo ??
    t.contactMessage?.contextInfo ??
    t.contactsArrayMessage?.contextInfo ??
    t.pollCreationMessage?.contextInfo ??
    t.pollCreationMessageV2?.contextInfo ??
    t.pollCreationMessageV3?.contextInfo
  );
}
function $(t) {
  return t.imageMessage
    ? { type: "image", media: t.imageMessage }
    : t.videoMessage || t.ptvMessage
      ? { type: "video", media: t.videoMessage ?? t.ptvMessage }
      : t.audioMessage
        ? { type: "audio", media: t.audioMessage }
        : t.documentMessage
          ? { type: "document", media: t.documentMessage }
          : t.stickerMessage
            ? { type: "sticker", media: t.stickerMessage }
            : null;
}
function Ie(t) {
  switch (t) {
    case g.proto.WebMessageInfo.Status.ERROR:
      return "failed";
    case g.proto.WebMessageInfo.Status.PENDING:
      return "pending";
    case g.proto.WebMessageInfo.Status.SERVER_ACK:
      return "sent";
    case g.proto.WebMessageInfo.Status.DELIVERY_ACK:
      return "delivered";
    case g.proto.WebMessageInfo.Status.READ:
      return "read";
    case g.proto.WebMessageInfo.Status.PLAYED:
      return "played";
    default:
      return "unknown";
  }
}
function He(t, e, s) {
  if (e.restricted || e.disappearing) return null;
  const a = ae(t.message);
  if (a.kind !== "readable") return null;
  const i = a.content,
    n = $(i);
  let o = i.conversation ?? i.extendedTextMessage?.text,
    r = "text";
  if (o == null)
    if (n)
      ((r = "attachment"),
        (o =
          i.imageMessage?.caption ??
          i.videoMessage?.caption ??
          i.documentMessage?.caption ??
          "[Attachment]"));
    else if (i.locationMessage || i.liveLocationMessage) {
      const p = i.locationMessage ?? i.liveLocationMessage;
      ((r = "location"),
        (o = [
          i.locationMessage?.name,
          i.locationMessage?.address,
          `Latitude: ${p.degreesLatitude}, longitude: ${p.degreesLongitude}`,
        ].filter(Boolean).join(`
`)));
    } else if (i.contactMessage || i.contactsArrayMessage)
      ((r = "contact"),
        (o = (i.contactsArrayMessage?.contacts ?? [i.contactMessage]).map((h) =>
          [h.displayName, h.vcard].filter(Boolean).join(`
`),
        ).join(`

`)));
    else {
      const p =
        i.pollCreationMessage ??
        i.pollCreationMessageV2 ??
        i.pollCreationMessageV3;
      if (!p) return null;
      ((r = "poll"),
        (o = [p.name, ...(p.options ?? []).map((h) => h.optionName)].filter(
          Boolean,
        ).join(`
`)));
    }
  const d = Number(t.messageTimestamp ?? 0);
  if (!Number.isFinite(d)) return null;
  const l = {
    message_id: s,
    chat_id: e.chat_id,
    sender: M.sanitizeUnpairedSurrogates(
      t.pushName ?? t.key.participant ?? t.key.remoteJid ?? "",
    ),
    from_me: t.key.fromMe === !0,
    timestamp: d,
    text: M.sanitizeUnpairedSurrogates(o),
    kind: r,
    delivery: Ie(t.status),
    reactions: [],
    edited: !1,
    edited_at: null,
    receipts: [],
    read_by_me:
      !t.key.fromMe &&
      t.status != null &&
      t.status >= g.proto.WebMessageInfo.Status.READ
        ? !0
        : null,
  };
  if (n) {
    const p = Number(n.media.fileLength);
    l.attachment = {
      type: n.type,
      mime_type: M.sanitizeUnpairedSurrogates(
        n.media.mimetype ?? "application/octet-stream",
      ),
      file_name: i.documentMessage?.fileName
        ? M.sanitizeUnpairedSurrogates(i.documentMessage.fileName)
        : null,
      size_bytes:
        n.media.fileLength != null && Number.isSafeInteger(p) && p >= 0
          ? p
          : null,
      downloadable: !!(n.media.mediaKey && (n.media.directPath || n.media.url)),
      voice_note: i.audioMessage?.ptt ?? !1,
    };
  }
  return l;
}
function _e(t, e) {
  const s = ae(t.message),
    a = s.kind === "readable" ? s.content : {},
    i = $(a),
    n = ge(a),
    o = n?.stanzaId
      ? {
          stanzaId: n.stanzaId,
          participant: n.participant,
          remoteJid: n.remoteJid,
        }
      : void 0;
  let r = o
    ? { extendedTextMessage: { text: e.text, contextInfo: o } }
    : { conversation: e.text };
  const d = a.locationMessage ?? a.liveLocationMessage,
    l =
      a.contactsArrayMessage?.contacts ??
      (a.contactMessage ? [a.contactMessage] : void 0),
    p =
      a.pollCreationMessage ??
      a.pollCreationMessageV2 ??
      a.pollCreationMessageV3;
  if (
    (d
      ? (r = {
          locationMessage: {
            degreesLatitude: d.degreesLatitude,
            degreesLongitude: d.degreesLongitude,
            name: a.locationMessage?.name
              ? M.sanitizeUnpairedSurrogates(a.locationMessage.name)
              : void 0,
            address: a.locationMessage?.address
              ? M.sanitizeUnpairedSurrogates(a.locationMessage.address)
              : void 0,
            contextInfo: o,
          },
        })
      : l
        ? (r = {
            contactsArrayMessage: {
              contacts: l.map((h) => ({
                displayName: h.displayName
                  ? M.sanitizeUnpairedSurrogates(h.displayName)
                  : void 0,
                vcard: h.vcard ? M.sanitizeUnpairedSurrogates(h.vcard) : void 0,
              })),
              contextInfo: o,
            },
          })
        : p &&
          (r = {
            pollCreationMessage: {
              name: p.name ? M.sanitizeUnpairedSurrogates(p.name) : void 0,
              options: p.options?.map((h) => ({
                optionName: h.optionName
                  ? M.sanitizeUnpairedSurrogates(h.optionName)
                  : void 0,
              })),
              selectableOptionsCount: p.selectableOptionsCount,
              contextInfo: o,
            },
          }),
    i)
  ) {
    const {
        url: h,
        directPath: m,
        mediaKey: y,
        fileSha256: A,
        fileEncSha256: k,
        fileLength: S,
        mimetype: w,
        mediaKeyTimestamp: _,
      } = i.media,
      b = {
        url: h,
        directPath: m,
        mediaKey: y,
        fileSha256: A,
        fileEncSha256: k,
        fileLength: S,
        mimetype: w && M.sanitizeUnpairedSurrogates(w),
        mediaKeyTimestamp: _,
        contextInfo: o,
      };
    switch (i.type) {
      case "image":
        r = {
          imageMessage: {
            ...b,
            caption: e.text,
            width: a.imageMessage?.width,
            height: a.imageMessage?.height,
          },
        };
        break;
      case "video":
        r = {
          videoMessage: {
            ...b,
            caption: e.text,
            seconds: a.videoMessage?.seconds,
          },
        };
        break;
      case "document":
        r = {
          documentMessage: {
            ...b,
            caption: a.documentMessage?.caption
              ? M.sanitizeUnpairedSurrogates(a.documentMessage.caption)
              : void 0,
            fileName: e.attachment?.file_name,
          },
        };
        break;
      case "audio":
        r = {
          audioMessage: {
            ...b,
            seconds: a.audioMessage?.seconds,
            ptt: a.audioMessage?.ptt,
          },
        };
        break;
      case "sticker":
        r = {
          stickerMessage: { ...b, isAnimated: a.stickerMessage?.isAnimated },
        };
        break;
    }
  }
  return {
    key: t.key,
    messageTimestamp: t.messageTimestamp,
    pushName: e.sender,
    status: t.status,
    message: r,
  };
}
function re(t) {
  return `${t.remoteJid ?? ""}:${t.id ?? ""}`;
}
const Ce = 2 * 1024 * 1024 * 1024;
function ce(t, e) {
  const s = x.relative(t, e);
  return (
    s !== "" && s !== ".." && !s.startsWith(".." + x.sep) && !x.isAbsolute(s)
  );
}
async function Oe(t, e) {
  const s = e.startsWith("$ORBITRA/")
    ? c.expandAgentRootPath(e, x.dirname(t))
    : null;
  if (!s || /[\u0000-\u001f]/.test(e) || !ce(t, s))
    throw new c.WhatsAppOperationError(
      "Choose a file inside the active Orbitra profile using its $ORBITRA/ path.",
    );
  const a = await I.realpath(t),
    i = await I.realpath(x.dirname(s));
  if (i !== a && !ce(a, i))
    throw new c.WhatsAppOperationError(
      "The file directory points outside the active Orbitra profile.",
    );
  return x.join(i, x.basename(s));
}
function We(t) {
  let e = 0;
  return {
    stream: new Ue.Transform({
      transform(a, i, n) {
        if (((e += a.length), e > Ce)) {
          n(
            new c.WhatsAppOperationError(
              "WhatsApp attachments must be at most 2 GB.",
            ),
          );
          return;
        }
        (t.update(a), n(null, a));
      },
    }),
    size: () => e,
  };
}
async function Fe(t, e, s, a) {
  a?.throwIfAborted();
  const i = await Oe(t, s.file_path),
    n = await I.open(i, z.constants.O_RDONLY | z.constants.O_NOFOLLOW);
  let o;
  try {
    const r = await n.stat();
    if (!r.isFile() || r.size > Ce)
      throw new c.WhatsAppOperationError(
        "Choose a regular file no larger than 2 GB.",
      );
    const d = await I.realpath(i),
      l = await I.realpath(t);
    if (!ce(l, d))
      throw new c.WhatsAppOperationError(
        "The attachment points outside the active Orbitra profile.",
      );
    (await I.mkdir(e, { recursive: !0, mode: 448 }),
      (o = await I.mkdtemp(x.join(e, "send-"))));
    const p = x.join(o, "content"),
      h = await I.open(p, "wx", 384),
      m = N.createHash("sha256"),
      y = We(m);
    try {
      await Ee.pipeline(
        n.createReadStream({ autoClose: !1 }),
        y.stream,
        h.createWriteStream(),
        { signal: a },
      );
    } finally {
      await h.close();
    }
    const A = await I.open(p, "r"),
      k = Buffer.alloc(Math.min(y.size(), 65536));
    try {
      await A.read(k, 0, k.length, 0);
    } finally {
      await A.close();
    }
    const S = s.file_name ?? x.basename(i);
    if (/[\\/\u0000-\u001f]/.test(S) || S === "." || S === "..")
      throw new c.WhatsAppOperationError(
        "Use a file name without directory separators or control characters.",
      );
    const w = await se.detectMime({ buffer: k, path: S });
    let _ = s.kind;
    if (
      (_ === "auto" &&
        (w.startsWith("image/") && w !== "image/svg+xml"
          ? (_ = "image")
          : w.startsWith("video/")
            ? (_ = "video")
            : w.startsWith("audio/")
              ? (_ = "audio")
              : (_ = "document")),
      s.voice_note &&
        (_ !== "audio" ||
          !k.includes(Buffer.from("OpusHead")) ||
          !k.subarray(0, 4).equals(Buffer.from("OggS"))))
    )
      throw new c.WhatsAppOperationError(
        "Voice notes require an Ogg Opus audio file. Send other audio normally or convert it first.",
      );
    if (_ !== "document" && _ !== "sticker" && !w.startsWith(_ + "/"))
      throw new c.WhatsAppOperationError(
        "The selected attachment type does not match the file. Use document to send the original file.",
      );
    if (_ === "sticker" && w !== "image/webp")
      throw new c.WhatsAppOperationError("Stickers must be WebP files.");
    if ((_ === "audio" || _ === "sticker") && s.caption)
      throw new c.WhatsAppOperationError(
        "Audio and stickers do not support captions. Send the caption as a separate text message.",
      );
    const b = { url: p };
    let v;
    switch (_) {
      case "image":
        v = { image: b, mimetype: w, caption: s.caption, jpegThumbnail: "" };
        break;
      case "video":
        v = { video: b, mimetype: w, caption: s.caption, jpegThumbnail: "" };
        break;
      case "audio":
        v = { audio: b, mimetype: w, ptt: s.voice_note };
        break;
      case "sticker":
        v = { sticker: b, mimetype: w };
        break;
      case "document":
        v = { document: b, mimetype: w, fileName: S, caption: s.caption };
        break;
    }
    const E = o;
    return {
      content: v,
      fingerprint: JSON.stringify({
        hash: m.digest("hex"),
        kind: _,
        mimetype: w,
        fileName: S,
        caption: s.caption ?? null,
        voiceNote: s.voice_note,
      }),
      dispose: () => I.rm(E, { recursive: !0, force: !0 }),
    };
  } catch (r) {
    throw (o && (await I.rm(o, { recursive: !0, force: !0 })), r);
  } finally {
    await n.close();
  }
}
function we(t) {
  const e = $(t.message ?? {});
  if (!e?.media.mediaKey)
    throw new c.WhatsAppOperationError(
      "This attachment was not retained by this app version. Request its history again or ask the sender to resend it.",
    );
  const s = e.media.url;
  if (s) {
    const a = new URL(s);
    if (
      a.protocol !== "https:" ||
      a.username ||
      a.password ||
      a.port ||
      !["whatsapp.net", "whatsapp.com", "fbcdn.net"].some(
        (i) => a.hostname === i || a.hostname.endsWith("." + i),
      )
    )
      throw new c.WhatsAppOperationError(
        "WhatsApp supplied an unsupported attachment address.",
      );
  }
  if (
    !s &&
    (!e.media.directPath?.startsWith("/") ||
      e.media.directPath.startsWith("//"))
  )
    throw new c.WhatsAppOperationError(
      "This attachment has no downloadable address.",
    );
}
async function Ke(t, e, s, a, i) {
  (i?.throwIfAborted(), we(s));
  const n = await Oe(t, e),
    o = await I.open(
      n,
      z.constants.O_WRONLY |
        z.constants.O_CREAT |
        z.constants.O_EXCL |
        z.constants.O_NOFOLLOW,
      384,
    );
  try {
    const r = $(s.message ?? {}),
      d = N.createHash("sha256"),
      l = We(d),
      p = await g.downloadMediaMessage(
        s,
        "stream",
        {
          options: {
            signal: AbortSignal.any([
              AbortSignal.timeout(18e4),
              ...(i ? [i] : []),
            ]),
          },
        },
        {
          logger: {
            level: "silent",
            child() {
              return this;
            },
            trace() {},
            debug() {},
            info() {},
            warn() {},
            error() {},
          },
          reuploadRequest: async (m) => {
            const y = await a.updateMediaMessage(m);
            return (we(y), y);
          },
        },
      );
    await Ee.pipeline(p, l.stream, o.createWriteStream(), { signal: i });
    const h = d.digest();
    if (r.media.fileSha256 && !h.equals(Buffer.from(r.media.fileSha256)))
      throw new c.WhatsAppOperationError(
        "The downloaded attachment failed its integrity check. Try downloading it again.",
      );
    return {
      file_path: e,
      mime_type: r.media.mimetype ?? "application/octet-stream",
      size_bytes: l.size(),
    };
  } catch (r) {
    throw (await o.close(), await I.rm(n, { force: !0 }), r);
  } finally {
    await o.close();
  }
}
async function Ve(t, e, s, a) {
  const i = g.generateMessageIDV2(),
    n = Promise.withResolvers(),
    o = (l) => {
      l.tag === "ack" &&
        l.attrs.class === "message" &&
        l.attrs.id === i &&
        n.resolve(l.attrs.error ? "failed" : "sent");
    },
    r = () => n.resolve("uncertain");
  let d;
  (t.ws.on("CB:ack,class:message", o),
    t.ws.on("close", r),
    t.ws.on("error", r));
  try {
    const l = await t.sendMessage(e, s, { ...a, messageId: i });
    return l?.key.id
      ? ((d = setTimeout(r, 2e4)),
        { message: l, acknowledgement: await n.promise })
      : { message: l, acknowledgement: "uncertain" };
  } finally {
    (d && clearTimeout(d),
      t.ws.off("CB:ack,class:message", o),
      t.ws.off("close", r),
      t.ws.off("error", r));
  }
}
const Te = (t) => /(@s\.whatsapp\.net|@lid|@g\.us)$/.test(t);
function K(t, e, s) {
  if (!e.key.remoteJid || !e.key.id || !Te(e.key.remoteJid)) return;
  const a = t.canonicalJid(g.jidNormalizedUser(e.key.remoteJid));
  let i = t.getChat(t.id(a));
  i ||
    ((i = {
      ...ue({ id: a, name: t.contactName(a) }, t.id(a)),
      privacy_pending: !0,
    }),
    t.saveChat(i));
  const n = t.messageId(e.key);
  if (e.messageStubType === g.proto.WebMessageInfo.StubType.REVOKE) {
    t.removeMessage(n);
    return;
  }
  const o = ae(e.message),
    r = o.kind === "readable" ? o.content.protocolMessage : void 0;
  if (
    (r?.limitSharing?.sharingLimited != null &&
      ((i = { ...i, restricted: r.limitSharing.sharingLimited }),
      t.saveChat(i)),
    r?.ephemeralExpiration != null &&
      ((i = { ...i, disappearing: r.ephemeralExpiration > 0 }), t.saveChat(i)),
    r?.type === g.proto.Message.ProtocolMessage.Type.REVOKE && r.key)
  ) {
    t.removeMessage(t.messageId({ ...r.key, remoteJid: e.key.remoteJid }));
    return;
  }
  if (r) return;
  if (o.kind === "private" || i.restricted || i.disappearing) {
    t.removeMessage(n, "private");
    return;
  }
  if (o.kind === "pending") {
    t.projection(n) ||
      t.write(
        "pending",
        n,
        JSON.stringify({ timestamp: Number(e.messageTimestamp ?? 0) }),
        i.chat_id,
      );
    return;
  }
  const d = t.projection(n),
    l =
      d?.edited &&
      (!s ||
        (d.edited_at != null &&
          (s.timestamp === null || s.timestamp <= d.edited_at)));
  if (l) {
    const A = t.getMessage(n);
    A?.message && (e = { ...e, message: A.message });
  }
  s && (e = { ...e, messageTimestamp: d?.timestamp ?? 0 });
  const p = He(e, i, n);
  if (!p) {
    t.projection(n) || t.write("unsupported", n, "{}", i.chat_id);
    return;
  }
  const h = t.canonicalJid(
    g.jidNormalizedUser(e.key.participant ?? e.key.remoteJid ?? a),
  );
  ((p.sender_id = t.id(e.key.fromMe ? "self" : h)),
    (p.sender = e.key.fromMe
      ? M.sanitizeUnpairedSurrogates(e.pushName ?? "You")
      : (t.contactName(h) ?? p.sender)));
  const m = ae(e.message),
    y = m.kind === "readable" ? ge(m.content) : void 0;
  if (
    ((p.reply_to = y?.stanzaId
      ? t.messageId({ remoteJid: a, id: y.stanzaId })
      : null),
    d &&
      ((p.reactions = d.reactions),
      (p.edited = d.edited),
      (p.edited_at = d.edited_at),
      (p.receipts = d.receipts),
      (p.read_by_me = p.read_by_me ?? d.read_by_me),
      (p.delivery = pe(d.delivery, p.delivery))),
    s && !l && ((p.edited = !0), (p.edited_at = s.timestamp)),
    t.remove("pending", n),
    t.remove("unsupported", n),
    i.privacy_pending)
  ) {
    t.savePending(p, e);
    return;
  }
  (t.saveMessage(p, e),
    e.userReceipt?.length &&
      Ne(t, {
        "message-receipt.update": e.userReceipt.map((A) => ({
          key: e.key,
          receipt: A,
        })),
      }),
    p.timestamp > i.last_message_at &&
      t.saveChat({ ...i, last_message_at: p.timestamp }));
}
const ve = [
  "unknown",
  "pending",
  "failed",
  "sent",
  "delivered",
  "read",
  "played",
];
function pe(t, e) {
  return e === "failed" && !["delivered", "read", "played"].includes(t)
    ? e
    : t === "failed" && ["unknown", "pending", "sent"].includes(e)
      ? t
      : ve.indexOf(e) > ve.indexOf(t)
        ? e
        : t;
}
function Ne(t, e) {
  const s = e["messaging-history.set"];
  for (const o of [
    ...(s?.lidPnMappings ?? []),
    ...(e["lid-mapping.update"] ? [e["lid-mapping.update"]] : []),
  ])
    t.linkAliases(o.pn, o.lid);
  for (const o of [
    ...(s?.contacts ?? []),
    ...(e["contacts.upsert"] ?? []),
    ...(e["contacts.update"] ?? []),
  ]) {
    const r =
        o.phoneNumber ?? (o.id?.endsWith("@s.whatsapp.net") ? o.id : void 0),
      d = o.lid ?? (o.id?.endsWith("@lid") ? o.id : void 0);
    t.saveContact({ ...o, phoneNumber: r, lid: d });
  }
  const a = [...(s?.chats ?? []), ...(e["chats.upsert"] ?? [])],
    i = e["chats.update"] ?? [];
  for (const [o, r] of [
    ["snapshot", a],
    ["update", i],
  ])
    for (const d of r) {
      if (!d.id || !Te(d.id)) continue;
      const l = t.canonicalJid(g.jidNormalizedUser(d.id)),
        p = t.id(l),
        h = ue(
          { ...d, id: l, name: d.name ?? t.contactName(l) },
          p,
          t.getChat(p),
          o,
        );
      if ((t.saveChat(h), !h.privacy_pending))
        for (const m of t.pendingMessages(p))
          m.key && K(t, { ...m, key: m.key });
    }
  for (const o of s?.messages ?? []) K(t, o);
  for (const o of e["messages.upsert"]?.messages ?? []) K(t, o);
  for (const { key: o, update: r } of e["messages.update"] ?? []) {
    const d = t.messageId(o);
    if (
      r.message === null ||
      r.messageStubType === g.proto.WebMessageInfo.StubType.REVOKE
    ) {
      t.removeMessage(d);
      continue;
    }
    if (r.message) {
      const p = t.getMessage(d),
        h = Number(r.messageTimestamp);
      K(
        t,
        { ...p, ...r, key: o },
        { timestamp: Number.isSafeInteger(h) && h > 0 ? h : null },
      );
    }
    const l = t.projection(d);
    l &&
      r.status != null &&
      t.updateMessage({
        ...l,
        delivery: pe(l.delivery, Ie(r.status)),
        read_by_me:
          !l.from_me && r.status >= g.proto.WebMessageInfo.Status.READ
            ? !0
            : l.read_by_me,
      });
  }
  for (const { key: o, receipt: r } of e["message-receipt.update"] ?? []) {
    const d = t.projection(t.messageId(o));
    if (!d) continue;
    let l;
    if (
      (r.playedTimestamp
        ? (l = "played")
        : r.readTimestamp
          ? (l = "read")
          : r.receiptTimestamp
            ? (l = "delivered")
            : (l = "unknown"),
      !r.userJid)
    )
      continue;
    const p = t.id(t.canonicalJid(g.jidNormalizedUser(r.userJid))),
      h = d.receipts.find((k) => k.recipient_id === p),
      m = d.receipts.filter((k) => k.recipient_id !== p),
      y = (k, S) =>
        k && Number.isSafeInteger(k) && k > 0
          ? Math.max(k, S ?? 0)
          : (S ?? null);
    m.push({
      recipient_id: p,
      delivered_at: y(Number(r.receiptTimestamp), h?.delivered_at),
      read_at: y(Number(r.readTimestamp), h?.read_at),
      played_at: y(Number(r.playedTimestamp), h?.played_at),
    });
    const A = t.getChat(d.chat_id);
    t.updateMessage({
      ...d,
      receipts: m,
      delivery: A?.is_group ? d.delivery : pe(d.delivery, l),
    });
  }
  for (const { key: o, reaction: r } of e["messages.reaction"] ?? []) {
    const d = t.projection(t.messageId(o));
    if (!d || !r.key) continue;
    const l = r.key.fromMe
        ? "self"
        : t.canonicalJid(
            g.jidNormalizedUser(r.key.participant ?? r.key.remoteJid ?? ""),
          ),
      p = t.id(l),
      h = d.reactions.filter((m) => m.sender_id !== p);
    (r.text &&
      h.push({
        sender_id: p,
        text: M.sanitizeUnpairedSurrogates(r.text),
        from_me: r.key.fromMe === !0,
      }),
      t.updateMessage({ ...d, reactions: h }));
  }
  const n = e["messages.delete"];
  if (n)
    if ("all" in n)
      t.removeMessages(t.getChat(t.id(n.jid))?.chat_id ?? t.id(n.jid));
    else for (const o of n.keys) t.removeMessage(t.messageId(o));
  for (const o of e["chats.delete"] ?? []) t.removeChat(o);
  s &&
    s.messages.length &&
    t.write("meta", "last-history", String(Math.floor(Date.now() / 1e3)));
}
const xe = u.object({
  fingerprint: u.string(),
  message_id: u.nullable(u.string()),
  intent_fingerprint: u.optional(u.string()),
  message_ids: u.optional(u.array(u.string())),
  part_fingerprints: u.optional(u.array(u.string())),
  state: u.optional(u.picklist(["ready", "uncertain", "sent", "failed"])),
  server_acknowledged: u.optional(u.boolean()),
  is_message: u.optional(u.boolean()),
});
function Re(t, e) {
  const s = t.message_ids ?? (t.message_id ? [t.message_id] : []);
  if (
    t.state === "failed" ||
    (t.is_message !== !1 &&
      s.some((i) => e.projection(i)?.delivery === "failed"))
  )
    return "failed";
  if (t.message_id && t.server_acknowledged) return "sent";
  const a =
    s.length > 0 &&
    t.is_message !== !1 &&
    s.every((i) =>
      ["delivered", "read", "played"].includes(
        e.projection(i)?.delivery ?? "unknown",
      ),
    );
  return t.message_id && a
    ? "sent"
    : t.state === "ready" && (!s.length || t.server_acknowledged)
      ? "partial"
      : "uncertain";
}
function oe(t, e) {
  t.requireMessage(e);
  const s = t.getMessage(e);
  if (!s?.key?.id)
    throw new c.WhatsAppOperationError(
      "The original message is not available. Request its history again.",
    );
  return { ...s, key: s.key };
}
function be(t, e) {
  if (!t[0])
    throw new c.WhatsAppOperationError(
      "WhatsApp has no confirmed message ID for this action.",
    );
  return e
    ? { message_id: t[0], message_ids: t, status: "sent" }
    : { message_id: t[0], status: "accepted" };
}
async function Ye(t, e) {
  const { store: s, credentials: a } = e,
    { signal: i } = e;
  i?.throwIfAborted();
  const { requestId: n } = t.params,
    o = t.action === "whatsapp_send_message";
  let r;
  if (t.action === "whatsapp_send_message") {
    if (t.params.message !== void 0 && t.params.text !== void 0)
      throw new c.WhatsAppOperationError(
        "Supply message or its legacy text alias, not both.",
      );
    if (
      ((r = t.params.message ?? t.params.text),
      !r && !t.params.attachments.length)
    )
      throw new c.WhatsAppOperationError(
        "Supply a message, attachments, or both.",
      );
  }
  let d;
  if (t.action === "whatsapp_send_message")
    d = {
      action: t.action,
      chat_id: t.params.chatId,
      message: r ?? null,
      attachments: t.params.attachments,
      reply_to: t.params.replyTo ?? null,
    };
  else {
    const { requestId: _, messageId: b, ...v } = t.params;
    d = { action: t.action, message_id: b, ...v };
  }
  const l = a.sendFingerprint("whatsapp-action-v2", JSON.stringify(d)),
    p = await a.readSend(n),
    h = p ? u.parse(xe, JSON.parse(p)) : void 0;
  if (h?.intent_fingerprint) {
    if (h.intent_fingerprint !== l)
      throw new c.WhatsAppOperationError(
        "This request_id belongs to a different action or message.",
      );
    const _ = Re(h, s);
    if (h.message_id && _ === "sent")
      return be(h.message_ids ?? [h.message_id], o);
    if (_ === "failed")
      throw new c.WhatsAppOperationError(
        "The previous action was rejected by WhatsApp. Check get_send_status; do not retry automatically.",
      );
    if (h.state !== "ready")
      throw new c.WhatsAppOperationError(
        "The previous action may have reached WhatsApp. Use get_send_status and inspect the chat; do not retry with a new request_id.",
      );
    if (h.message_ids?.length && !h.server_acknowledged)
      throw new c.WhatsAppOperationError(
        "The previous action has no server acknowledgement. Check get_send_status and the chat; do not retry with a new request_id.",
      );
  }
  const m =
      "messageId" in t.params ? s.requireMessage(t.params.messageId) : void 0,
    y = s.requireChat("chatId" in t.params ? t.params.chatId : m.chat_id),
    A =
      t.action === "whatsapp_send_message" &&
      !t.params.replyTo &&
      !t.params.attachments.length
        ? a.sendFingerprint(y.jid, r)
        : l;
  if (h && !h.intent_fingerprint)
    throw h.fingerprint !== A
      ? new c.WhatsAppOperationError(
          "This request_id belongs to a different message.",
        )
      : new c.WhatsAppOperationError(
          "The previous send may have reached WhatsApp. Check the chat before sending again; do not use a new request_id to retry.",
        );
  if (
    (t.action === "whatsapp_edit_message" ||
      t.action === "whatsapp_delete_message") &&
    !m?.from_me
  )
    throw new c.WhatsAppOperationError(
      "You can only edit or delete messages sent by this account.",
    );
  if (t.action === "whatsapp_edit_message" && m?.kind !== "text")
    throw new c.WhatsAppOperationError(
      "Only text messages can be edited with this action.",
    );
  if (!e.socket)
    throw new c.WhatsAppOperationError(
      "WhatsApp is offline. Wait for it to reconnect before sending.",
    );
  let k;
  if ("replyTo" in t.params && t.params.replyTo) {
    const _ = s.requireMessage(t.params.replyTo);
    if (_.chat_id !== y.chat_id)
      throw new c.WhatsAppOperationError(
        "The reply must refer to a message in this chat.",
      );
    k = oe(s, _.message_id);
  }
  const S = [],
    w = [];
  try {
    if (t.action === "whatsapp_send_message") {
      for (const E of t.params.attachments) {
        if (!e.fileRoot)
          throw new c.WhatsAppOperationError(
            "The active Orbitra profile files are not available.",
          );
        S.push(await Fe(e.fileRoot, e.temporaryRoot, E, i));
      }
      const v = S[0];
      r &&
      v &&
      ("image" in v.content || "video" in v.content || "document" in v.content)
        ? (v.content.caption = r)
        : r &&
          w.push({
            content: { text: r, linkPreview: null },
            fingerprint: a.sendFingerprint("text", r),
          });
      for (const E of S)
        w.push({ content: E.content, fingerprint: E.fingerprint });
    } else {
      const v = oe(s, m.message_id);
      let E;
      switch (t.action) {
        case "whatsapp_react":
          E = { react: { text: t.params.reaction, key: v.key } };
          break;
        case "whatsapp_edit_message":
          E = { text: t.params.text, edit: v.key, linkPreview: null };
          break;
        case "whatsapp_delete_message":
          E = { delete: v.key };
          break;
      }
      w.push({ content: E, fingerprint: l });
    }
    const _ = w.map((v) => v.fingerprint);
    if (
      h?.part_fingerprints &&
      JSON.stringify(h.part_fingerprints) !== JSON.stringify(_)
    )
      throw new c.WhatsAppOperationError(
        "An attachment changed since this send began. Inspect get_send_status before creating a new send for the remaining files.",
      );
    const b = [...(h?.message_ids ?? [])];
    for (let v = b.length; v < w.length; v++) {
      (i?.throwIfAborted(), a.assertActive(), s.requireChat(y.chat_id));
      const E = {
        fingerprint: A,
        intent_fingerprint: l,
        is_message: o,
        part_fingerprints: _,
        message_ids: b,
        message_id: null,
      };
      (await a.saveSend(n, JSON.stringify({ ...E, state: "uncertain" })),
        i?.aborted &&
          (await a.saveSend(
            n,
            JSON.stringify({
              ...E,
              state: "ready",
              server_acknowledged: b.length > 0,
            }),
          ),
          i.throwIfAborted()));
      const { message: X, acknowledgement: G } = await Ve(
        e.socket,
        y.jid,
        w[v].content,
        { quoted: k, mediaUploadTimeoutMs: 18e4 },
      );
      if (!X?.key.id)
        throw new c.WhatsAppOperationError(
          "WhatsApp did not confirm this action. Check get_send_status and the chat before trying again.",
        );
      let F = m?.message_id ?? s.messageId(X.key);
      if (o) {
        const U = {
          sent: g.proto.WebMessageInfo.Status.SERVER_ACK,
          failed: g.proto.WebMessageInfo.Status.ERROR,
          uncertain: g.proto.WebMessageInfo.Status.PENDING,
        };
        (K(s, { ...X, status: U[G] }), (F = s.messageId(X.key)));
        const Z = s.projection(F);
        Z &&
          s.updateMessage({
            ...Z,
            reply_to: "replyTo" in t.params ? (t.params.replyTo ?? null) : null,
          });
      }
      if (G !== "sent")
        throw (
          await a.saveSend(
            n,
            JSON.stringify({ ...E, message_ids: [...b, F], state: G }),
          ),
          G === "failed"
            ? new c.WhatsAppOperationError(
                "WhatsApp rejected this action. Earlier parts may already have been sent. Check get_send_status; do not retry automatically.",
              )
            : new c.WhatsAppOperationError(
                "WhatsApp did not acknowledge this action. Its outcome is uncertain. Check get_send_status and the chat; do not retry with a new request_id.",
              )
        );
      if (t.action === "whatsapp_delete_message") s.removeMessage(F);
      else if (m && t.action === "whatsapp_edit_message") {
        const U = oe(s, m.message_id);
        s.saveMessage(
          {
            ...m,
            text: t.params.text,
            edited: !0,
            edited_at: Math.floor(Date.now() / 1e3),
          },
          { ...U, message: { conversation: t.params.text } },
        );
      } else if (m && t.action === "whatsapp_react") {
        const U = m.reactions.filter((Z) => !Z.from_me);
        (t.params.reaction &&
          U.push({
            sender_id: s.id("self"),
            text: t.params.reaction,
            from_me: !0,
          }),
          s.updateMessage({ ...m, reactions: U }));
      }
      b.push(F);
      const ye = v === w.length - 1;
      await a.saveSend(
        n,
        JSON.stringify({
          ...E,
          message_ids: b,
          message_id: ye ? b[0] : null,
          server_acknowledged: !0,
          state: ye ? "sent" : "ready",
        }),
      );
    }
    if (o && b.some((v) => s.projection(v)?.delivery === "failed"))
      throw new c.WhatsAppOperationError(
        "WhatsApp rejected a message. Check get_send_status; do not retry automatically.",
      );
    return be(b, o);
  } finally {
    for (const _ of S) await _.dispose();
  }
}
function Q(t) {
  if ((t.credentials.assertActive(), !t.socket))
    throw new c.WhatsAppOperationError(
      "WhatsApp is offline. Wait for it to reconnect before this action.",
    );
  return t.socket;
}
function $e(t) {
  if (!t.fileRoot)
    throw new c.WhatsAppOperationError(
      "The active Orbitra profile files are not available. Open the profile and try again.",
    );
  return t.fileRoot;
}
function ke(t, e) {
  t.requireMessage(e);
  const s = t.getMessage(e);
  if (!s?.key?.id)
    throw new c.WhatsAppOperationError(
      "The original message is not available. Request its history again.",
    );
  return { ...s, key: s.key };
}
function Xe(t) {
  return t === "superadmin" ? "owner" : t === "admin" ? "admin" : "member";
}
async function Ge(t, e) {
  const { store: s } = e;
  switch (t.action) {
    case "whatsapp_list_chats":
      return s.listChats(t.params);
    case "whatsapp_list_contacts":
      return s.listContacts(t.params);
    case "whatsapp_list_messages":
    case "whatsapp_search_messages":
      return s.listMessages({ ...t.params, limit: t.params.limit ?? 30 });
    case "whatsapp_get_message":
      return s.requireMessage(t.params.messageId);
    case "whatsapp_get_send_status": {
      const a = await e.credentials.readSend(t.params.requestId);
      if (!a) return { status: "not_found", message_ids: [] };
      const i = u.parse(xe, JSON.parse(a));
      return {
        status: Re(i, s),
        message_ids: i.message_ids ?? (i.message_id ? [i.message_id] : []),
      };
    }
    case "whatsapp_resolve_recipient": {
      const a = Q(e),
        i = (await a.onWhatsApp(t.params.phoneNumber))?.find((d) => d.exists);
      if (!i) return { exists: !1, chat: null };
      const n = g.jidNormalizedUser(i.jid),
        o = await a.signalRepository.lidMapping.getLIDForPN(n);
      o && s.linkAliases(n, o);
      let r = s.getChat(s.id(n));
      if (r?.restricted || r?.disappearing)
        throw new c.WhatsAppOperationError(
          "This recipient has a restricted or disappearing chat, which this integration does not retain or send to.",
        );
      if (!r || r.privacy_pending) {
        const d = await a.fetchDisappearingDuration(n),
          l = u.safeParse(
            u.object({
              duration: u.pipe(u.number(), u.finite(), u.minValue(0)),
            }),
            d?.find((p) => g.jidNormalizedUser(p.id) === n)?.disappearing_mode,
          );
        if (!l.success)
          throw new c.WhatsAppOperationError(
            "WhatsApp did not return this recipient's privacy settings. Try resolving the number again.",
          );
        ((r = ue(
          {
            id: n,
            name: s.contactName(n),
            ephemeralExpiration: l.output.duration,
          },
          s.id(n),
          r,
        )),
          s.saveChat(r));
      }
      return (
        s.saveContact({ id: n, phoneNumber: n, lid: o ?? void 0 }),
        { exists: !0, chat: s.publicChat(s.requireChat(r.chat_id)) }
      );
    }
    case "whatsapp_get_chat": {
      const a = s.requireChat(t.params.chatId);
      if (!a.is_group) return s.publicChat(a);
      const i = await Q(e).groupMetadata(a.jid);
      if (i.ephemeralDuration)
        throw (
          s.saveChat({ ...a, disappearing: !0 }),
          new c.WhatsAppOperationError(
            "This group uses disappearing messages and is excluded.",
          )
        );
      return {
        ...s.publicChat(a),
        name: M.sanitizeUnpairedSurrogates(i.subject),
        description: M.sanitizeUnpairedSurrogates(i.desc ?? ""),
        participants: i.participants.map((n) => ({
          contact_id: s.id(s.canonicalJid(n.id)),
          name: M.sanitizeUnpairedSurrogates(
            n.name ??
              n.notify ??
              s.contactName(n.id) ??
              n.id.split("@")[0] ??
              "",
          ),
          role: Xe(n.admin),
        })),
      };
    }
    case "whatsapp_download_attachment": {
      const a = s.requireMessage(t.params.messageId);
      if (!a.attachment?.downloadable)
        throw new c.WhatsAppOperationError(
          "This message has no retained attachment reference. Request older history or ask the sender to resend it.",
        );
      return Ke(
        $e(e),
        t.params.destination,
        ke(s, a.message_id),
        Q(e),
        e.signal,
      );
    }
    case "whatsapp_request_history": {
      const a = s.requireChat(t.params.chatId),
        i = s.requireMessage(t.params.beforeMessageId);
      if (i.chat_id !== a.chat_id)
        throw new c.WhatsAppOperationError(
          "Choose a message from the requested chat.",
        );
      const n = ke(s, i.message_id);
      return {
        status: "requested",
        request_id: await Q(e).fetchMessageHistory(
          t.params.count,
          n.key,
          i.timestamp,
        ),
      };
    }
    default:
      return Ye(t, e);
  }
}
function Se(t) {
  switch (t) {
    case g.proto.HistorySync.HistorySyncType.INITIAL_BOOTSTRAP:
      return "bootstrap";
    case g.proto.HistorySync.HistorySyncType.RECENT:
      return "recent";
    case g.proto.HistorySync.HistorySyncType.FULL:
      return "full";
    case g.proto.HistorySync.HistorySyncType.ON_DEMAND:
      return "on-demand";
    default:
      return null;
  }
}
function Le(t, e, s) {
  const a = { ...t },
    i = e["messaging-history.set"],
    n = Se(i?.syncType);
  if (i && n) {
    const d =
      n === "bootstrap" ||
      i.progress === 100 ||
      (n !== "on-demand" && t[n]?.state === "available");
    a[n] = { state: d ? "available" : "syncing", updatedAt: s };
  }
  const o = e["messaging-history.status"],
    r = Se(o?.syncType);
  return (
    o &&
      r &&
      (a[r] = {
        state: o.status === "complete" && o.explicit ? "available" : "paused",
        updatedAt: s,
      }),
    a
  );
}
function Ze(t, e, s) {
  const a = Object.values(t);
  return a.some((i) => i.state === "syncing" && s - i.updatedAt < 12e4)
    ? "syncing"
    : a.some((i) => i.state === "paused" || i.state === "syncing")
      ? "paused"
      : a.length || e
        ? "available"
        : "waiting";
}
const Me = u.object({
    ...D.whatsappChatSchema.entries,
    jid: u.string(),
    restricted: u.boolean(),
    disappearing: u.boolean(),
    privacy_pending: u.optional(u.boolean(), !1),
    aliases: u.optional(u.array(u.string()), []),
  }),
  ee = u.object({ ...D.whatsappContactSchema.entries, jid: u.string() }),
  Qe = u.object({ timestamp: u.number(), id: u.string() });
class et {
  constructor(e, s) {
    ((this.key = s),
      (this.db = new Pe(e)),
      this.db.pragma("journal_mode = WAL"),
      this.db.pragma("secure_delete = ON"),
      this.db.exec(`
      CREATE TABLE IF NOT EXISTS records (
        kind TEXT NOT NULL, id TEXT NOT NULL, parent TEXT NOT NULL DEFAULT '',
        timestamp INTEGER NOT NULL DEFAULT 0, payload BLOB NOT NULL,
        PRIMARY KEY (kind, id)
      );
      CREATE INDEX IF NOT EXISTS records_page ON records(kind, parent, timestamp DESC, id DESC);
      CREATE INDEX IF NOT EXISTS records_global_page ON records(kind, timestamp DESC, id DESC);
    `));
  }
  db;
  id(e) {
    return N.createHmac("sha256", this.key).update(e).digest("hex");
  }
  encrypt(e, s, a) {
    const i = N.randomBytes(12),
      n = N.createCipheriv("aes-256-gcm", this.key, i);
    n.setAAD(Buffer.from(`${e}:${s}`));
    const o = Buffer.concat([n.update(a, "utf8"), n.final()]);
    return Buffer.concat([i, n.getAuthTag(), o]);
  }
  decrypt(e, s) {
    const a = N.createDecipheriv(
      "aes-256-gcm",
      this.key,
      s.payload.subarray(0, 12),
    );
    return (
      a.setAAD(Buffer.from(`${e}:${s.id}`)),
      a.setAuthTag(s.payload.subarray(12, 28)),
      Buffer.concat([a.update(s.payload.subarray(28)), a.final()]).toString(
        "utf8",
      )
    );
  }
  read(e, s) {
    const a = this.db
      .prepare(
        "SELECT id, payload, timestamp FROM records WHERE kind = ? AND id = ?",
      )
      .get(e, s);
    return a ? this.decrypt(e, a) : void 0;
  }
  write(e, s, a, i = "", n = 0) {
    this.db
      .prepare(
        "INSERT INTO records(kind, id, parent, timestamp, payload) VALUES (?, ?, ?, ?, ?) ON CONFLICT(kind, id) DO UPDATE SET parent=excluded.parent, timestamp=excluded.timestamp, payload=excluded.payload",
      )
      .run(e, s, i, n, this.encrypt(e, s, a));
  }
  remove(e, s) {
    this.db.prepare("DELETE FROM records WHERE kind = ? AND id = ?").run(e, s);
  }
  loadCredentials() {
    const e = this.read("auth", "creds");
    return e ? JSON.parse(e, g.BufferJSON.reviver) : g.initAuthCreds();
  }
  legacyKeyIndexSecret() {
    return this.key.toString("hex");
  }
  *legacySecretRecords() {
    let e = "";
    for (;;) {
      const s = this.db
        .prepare(
          "SELECT kind, id, payload, timestamp FROM records WHERE kind IN ('auth', 'send') AND id != 'creds' AND id > ? ORDER BY id LIMIT 200",
        )
        .all(e);
      if (!s.length) return;
      (yield s.map((a) => ({ id: a.id, value: this.decrypt(a.kind, a) })),
        (e = s[s.length - 1].id));
    }
  }
  clearLegacySecrets() {
    this.db.prepare("DELETE FROM records WHERE kind IN ('auth', 'send')").run();
  }
  bindAccount(e) {
    const s = this.read("meta", "account");
    (s && s !== e && this.clear(), this.write("meta", "account", e));
  }
  clear() {
    this.db.prepare("DELETE FROM records").run();
  }
  getChat(e) {
    e = this.read("alias", e) ?? e;
    const s = this.read("chat", e);
    return s ? u.parse(Me, JSON.parse(s)) : void 0;
  }
  saveChat(e) {
    this.db.transaction(() => {
      (this.write("chat", e.chat_id, JSON.stringify(e), "", e.last_message_at),
        (e.restricted || e.disappearing) &&
          this.removeMessages(e.chat_id, "private"));
    })();
  }
  removeChat(e) {
    const s = this.getChat(this.id(e))?.chat_id ?? this.id(e);
    this.db.transaction(() => {
      (this.removeMessages(s), this.remove("chat", s));
    })();
  }
  removeMessages(e, s = "revoked") {
    this.db.transaction(() => {
      const a = this.db.prepare(
        "SELECT DISTINCT id FROM records WHERE kind IN ('message', 'pending-content', 'pending', 'unsupported') AND parent = ? LIMIT 200",
      );
      for (;;) {
        const i = a.all(e);
        if (i.length === 0) break;
        for (const n of i) this.removeMessage(n.id, s);
      }
    })();
  }
  saveMessage(e, s) {
    this.read("deleted-message", e.message_id) ||
      this.db.transaction(() => {
        this.write(
          "message",
          e.message_id,
          JSON.stringify(e),
          e.chat_id,
          e.timestamp,
        );
        const a = _e(s, e);
        this.write(
          "proto",
          e.message_id,
          Buffer.from(g.proto.WebMessageInfo.encode(a).finish()).toString(
            "base64",
          ),
          e.chat_id,
          e.timestamp,
        );
      })();
  }
  getMessage(e) {
    e = this.resolveMessageId(e);
    const s = this.read("proto", e);
    return s ? g.proto.WebMessageInfo.decode(Buffer.from(s, "base64")) : void 0;
  }
  removeMessage(e, s = "revoked") {
    ((e = this.resolveMessageId(e)),
      this.db.transaction(() => {
        (this.write("deleted-message", e, "{}"),
          this.write("exclusion", e, s),
          this.remove("pending-content", e),
          this.remove("pending", e),
          this.remove("unsupported", e),
          this.remove("message", e),
          this.remove("proto", e));
      })());
  }
  messageCount() {
    return (
      this.db
        .prepare("SELECT COUNT(*) AS count FROM records WHERE kind = 'message'")
        .get()?.count ?? 0
    );
  }
  page(e, s, a) {
    const i = a
      ? u.parse(Qe, JSON.parse(Buffer.from(a, "base64url").toString("utf8")))
      : { timestamp: Number.MAX_SAFE_INTEGER, id: "" };
    return this.db
      .prepare(
        "SELECT id, payload, timestamp FROM records WHERE kind = ? AND (? IS NULL OR parent = ?) AND (timestamp < ? OR (timestamp = ? AND id < ?)) ORDER BY timestamp DESC, id DESC LIMIT 200",
      )
      .all(e, s, s, i.timestamp, i.timestamp, i.id);
  }
  publicChat(e) {
    const s = this.db
      .prepare(
        "SELECT timestamp FROM records WHERE kind = 'message' AND parent = ? ORDER BY timestamp DESC LIMIT 1",
      )
      .get(e.chat_id);
    return {
      chat_id: e.chat_id,
      name: e.name,
      is_group: e.is_group,
      last_message_at: e.last_message_at,
      latest_readable_at: s?.timestamp ?? null,
      unread_count: e.unread_count,
      marked_unread: e.marked_unread,
    };
  }
  requireChat(e) {
    const s = this.getChat(e);
    if (!s || s.restricted || s.disappearing || s.privacy_pending)
      throw new c.WhatsAppOperationError(
        "This chat is unavailable or its privacy settings have not synchronized yet. Find an available chat or resolve its recipient.",
      );
    return s;
  }
  listChats(e) {
    const s = this.page("chat", "", e.cursor),
      a = [];
    let i;
    for (const n of s) {
      i = n;
      const o = u.parse(Me, JSON.parse(this.decrypt("chat", n)));
      if (
        !(
          o.restricted ||
          o.disappearing ||
          o.privacy_pending ||
          (e.unreadOnly && !o.unread_count && !o.marked_unread) ||
          ![
            o.name,
            ...o.aliases
              .filter((d) => d.endsWith("@s.whatsapp.net"))
              .map((d) => d.split("@")[0]),
          ]
            .join(" ")
            .toLowerCase()
            .includes(e.query?.toLowerCase() ?? "")
        ) &&
        (a.push(this.publicChat(o)), a.length === e.limit)
      )
        break;
    }
    return { chats: a, next_cursor: this.nextCursor(s, i) };
  }
  listMessages(e) {
    const s = e.chatId ? this.requireChat(e.chatId) : void 0,
      a = this.page("message", s?.chat_id ?? null, e.cursor),
      i = [];
    let n;
    for (const o of a) {
      n = o;
      const r = u.parse(
          D.whatsappMessageSchema,
          JSON.parse(this.decrypt("message", o)),
        ),
        d = s ?? this.getChat(r.chat_id);
      if (
        !(!d || d.restricted || d.disappearing || d.privacy_pending) &&
        !(
          (e.direction === "incoming" && r.from_me) ||
          (e.direction === "outgoing" && !r.from_me)
        ) &&
        (r.sender_id &&
          (r.sender_id = this.read("alias", r.sender_id) ?? r.sender_id),
        !(
          e.senderId &&
          r.sender_id !== (this.read("alias", e.senderId) ?? e.senderId)
        ) &&
          !(
            (e.after !== void 0 && r.timestamp <= e.after) ||
            (e.before !== void 0 && r.timestamp >= e.before)
          ) &&
          r.text.toLowerCase().includes(e.query?.toLowerCase() ?? "") &&
          (i.push(r), i.length === e.limit))
      )
        break;
    }
    return { messages: i, next_cursor: this.nextCursor(a, n) };
  }
  resolveMessageId(e) {
    for (let s = 0; s < 8; s++) {
      const a = this.read("message-alias", e);
      if (!a || a === e) return e;
      e = a;
    }
    throw new c.WhatsAppOperationError(
      "Message identity could not be resolved.",
    );
  }
  projection(e) {
    e = this.resolveMessageId(e);
    const s = this.read("message", e);
    return s ? u.parse(D.whatsappMessageSchema, JSON.parse(s)) : void 0;
  }
  requireMessage(e) {
    const s = this.projection(e);
    if (!s)
      throw new c.WhatsAppOperationError(
        "This message is not available in synchronized history.",
      );
    return (this.requireChat(s.chat_id), s);
  }
  updateMessage(e) {
    this.read("deleted-message", e.message_id) ||
      this.write(
        "message",
        e.message_id,
        JSON.stringify(e),
        e.chat_id,
        e.timestamp,
      );
  }
  canonicalJid(e) {
    return (
      this.read("address", this.id(e)) ?? this.getChat(this.id(e))?.jid ?? e
    );
  }
  messageId(e) {
    const s = this.getChat(this.id(e.remoteJid ?? "")),
      i = [
        ...new Set(
          [s?.jid, e.remoteJid, ...(s?.aliases ?? [])].filter((n) => !!n),
        ),
      ].map((n) => this.id(re({ ...e, remoteJid: n })));
    return this.resolveMessageId(
      i.find((n) => this.read("deleted-message", n)) ??
        i.find((n) => this.read("message", n)) ??
        i[0] ??
        this.id(re(e)),
    );
  }
  savePending(e, s) {
    this.read("deleted-message", e.message_id) ||
      this.write(
        "pending-content",
        e.message_id,
        Buffer.from(g.proto.WebMessageInfo.encode(_e(s, e)).finish()).toString(
          "base64",
        ),
        e.chat_id,
        e.timestamp,
      );
  }
  *pendingMessages(e) {
    let s;
    for (;;) {
      const a = this.page("pending-content", e, s);
      for (const i of a)
        (yield g.proto.WebMessageInfo.decode(
          Buffer.from(this.decrypt("pending-content", i), "base64"),
        ),
          this.remove("pending-content", i.id));
      if (a.length < 200 || ((s = this.nextCursor(a, a.at(-1)) ?? void 0), !s))
        return;
    }
  }
  historyCoverage() {
    const e = this.db
        .prepare(
          "SELECT MIN(timestamp) oldest, MAX(timestamp) newest FROM records WHERE kind = 'message'",
        )
        .get(),
      s = this.db
        .prepare(
          "SELECT kind, COUNT(*) count FROM records WHERE kind IN ('pending-content', 'pending', 'unsupported', 'exclusion', 'deleted-message') GROUP BY kind",
        )
        .all(),
      a = (n) => s.find((o) => o.kind === n)?.count ?? 0,
      i = this.read("meta", "last-history");
    return {
      oldest_message_at: e?.oldest ?? null,
      newest_message_at: e?.newest ?? null,
      last_history_at: i ? Number(i) : null,
      pending_messages: a("pending") + a("pending-content"),
      unsupported_messages: a("unsupported"),
      excluded_messages: a("exclusion"),
      legacy_exclusions: Math.max(0, a("deleted-message") - a("exclusion")),
    };
  }
  saveContact(e) {
    if (!e.id) return;
    e.lid && e.phoneNumber && this.linkAliases(e.phoneNumber, e.lid);
    const s = this.getChat(this.id(e.id)),
      a = this.canonicalJid(e.phoneNumber ?? e.id),
      i = this.id(a),
      n = this.read("contact", i),
      o = n ? u.parse(ee, JSON.parse(n)) : void 0,
      r = M.sanitizeUnpairedSurrogates(
        e.name ??
          e.notify ??
          e.verifiedName ??
          o?.name ??
          s?.name ??
          a.split("@")[0] ??
          "",
      );
    (this.write(
      "contact",
      i,
      JSON.stringify({
        contact_id: i,
        chat_id: s?.chat_id ?? null,
        jid: a,
        name: r,
        phone_number: a.endsWith("@s.whatsapp.net")
          ? "+" + a.split("@")[0]
          : (o?.phone_number ?? null),
      }),
    ),
      s && this.saveChat({ ...s, name: r }));
  }
  contactName(e) {
    const s = this.canonicalJid(e),
      a = this.read("contact", this.id(s)) ?? this.read("contact", this.id(e));
    return a ? u.parse(ee, JSON.parse(a)).name : void 0;
  }
  listContacts(e) {
    const s = this.page("contact", "", e.cursor),
      a = [];
    let i;
    for (const n of s) {
      i = n;
      const o = u.parse(ee, JSON.parse(this.decrypt("contact", n)));
      if (
        ![o.name, o.phone_number]
          .join(" ")
          .toLowerCase()
          .includes(e.query?.toLowerCase() ?? "")
      )
        continue;
      const r = this.getChat(this.id(o.jid));
      if (
        (a.push({
          contact_id: o.contact_id,
          name: o.name,
          phone_number: o.phone_number,
          chat_id:
            r && !r.privacy_pending && !r.restricted && !r.disappearing
              ? r.chat_id
              : null,
        }),
        a.length === e.limit)
      )
        break;
    }
    return { contacts: a, next_cursor: this.nextCursor(s, i) };
  }
  linkAliases(e, s) {
    if (!/^[0-9]+@s\.whatsapp\.net$/.test(e) || !/^[0-9]+@lid$/.test(s)) return;
    const a = this.id(e),
      i = this.getChat(a),
      n = this.getChat(this.id(s)),
      o = [...new Set([e, s, ...(i?.aliases ?? []), ...(n?.aliases ?? [])])];
    this.db.transaction(() => {
      for (const l of o)
        (this.write("alias", this.id(l), a),
          this.write("address", this.id(l), e));
      const r = i ?? n;
      if (r) {
        const l = {
          ...r,
          jid: e,
          chat_id: a,
          aliases: o,
          restricted: !!(i?.restricted || n?.restricted),
          disappearing: !!(i?.disappearing || n?.disappearing),
          privacy_pending:
            (i?.privacy_pending ?? !0) && (n?.privacy_pending ?? !0),
          unread_count: Math.max(i?.unread_count ?? 0, n?.unread_count ?? 0),
          marked_unread: !!(i?.marked_unread || n?.marked_unread),
          last_message_at: Math.max(
            i?.last_message_at ?? 0,
            n?.last_message_at ?? 0,
          ),
        };
        for (const p of [i, n]) {
          if (!p || p.chat_id === a) continue;
          let h;
          for (;;) {
            const m = this.page("message", p.chat_id, h);
            for (const y of m) {
              const A = u.parse(
                  D.whatsappMessageSchema,
                  JSON.parse(this.decrypt("message", y)),
                ),
                k = this.getMessage(y.id),
                S = k?.key?.id
                  ? this.id(re({ remoteJid: e, id: k.key.id }))
                  : y.id;
              if (S !== y.id && this.read("deleted-message", S)) {
                this.removeMessage(y.id, "private");
                continue;
              }
              const w = S !== y.id ? this.projection(S) : void 0;
              w
                ? (this.remove("message", y.id),
                  this.remove("proto", y.id),
                  this.write("message-alias", y.id, w.message_id))
                : this.updateMessage({ ...A, chat_id: a });
            }
            if (
              m.length < 200 ||
              ((h = this.nextCursor(m, m.at(-1)) ?? void 0), !h)
            )
              break;
          }
          (this.db
            .prepare("UPDATE records SET parent = ? WHERE parent = ?")
            .run(a, p.chat_id),
            this.remove("chat", p.chat_id));
        }
        this.saveChat(l);
      }
      const d = this.read("contact", this.id(s));
      if (d) {
        const l = u.parse(ee, JSON.parse(d));
        (this.read("contact", a) ||
          this.write(
            "contact",
            a,
            JSON.stringify({
              ...l,
              contact_id: a,
              chat_id: r ? a : null,
              jid: e,
              phone_number: "+" + e.split("@")[0],
            }),
          ),
          this.remove("contact", this.id(s)));
      }
    })();
  }
  nextCursor(e, s) {
    return !s || (e.length < 200 && s === e.at(-1))
      ? null
      : Buffer.from(
          JSON.stringify({ timestamp: s.timestamp, id: s.id }),
        ).toString("base64url");
  }
  close() {
    (this.db.close(), this.key.fill(0));
  }
}
se.blockCompromisedKeysInNodeTls();
se.followSavedCertificateBlocklist(
  process.env[se.SAVED_CERTIFICATE_BLOCKLIST_DIR_ENV],
);
const me = process.parentPort;
if (!me) throw new c.WhatsAppOperationError("WhatsApp must run in a worker.");
let C,
  j = "",
  Y,
  W,
  T;
const ie = new Map();
function tt(t) {
  return new Promise((e, s) => {
    const a = N.randomUUID(),
      i = setTimeout(() => {
        (ie.delete(a),
          s(new c.WhatsAppCredentialError("credential_request_timeout")));
      }, 2e4);
    (ie.set(a, { resolve: e, reject: s, timer: i }),
      O({ kind: "auth-request", id: a, request: t }));
  });
}
let le,
  f = { ...D.initialWhatsAppStatus },
  J = {},
  ne = "resume",
  q = null,
  H,
  te = 0,
  P = 0,
  L = !1,
  he = !1,
  V = Promise.resolve(),
  Ae = Promise.resolve();
const de = new Map(),
  De = {
    level: "silent",
    child: () => De,
    trace: () => {},
    debug: () => {},
    info: () => {},
    warn: () => {},
    error: () => {},
  };
function O(t) {
  me?.postMessage(t);
}
function fe() {
  const t = C?.messageCount() ?? 0,
    e = Ze(J, t, Date.now());
  return {
    ...f,
    message_count: t,
    ...C?.historyCoverage(),
    history: e === "syncing" && f.connection !== "connected" ? "paused" : e,
  };
}
function R() {
  f = fe();
  const t = W?.me?.name || W?.me?.id.split(":")[0];
  O({
    kind: "state",
    status: f,
    recovery: ne,
    qrImage: q,
    accountId: T?.accountId ?? null,
    accountName: t ? M.sanitizeUnpairedSurrogates(t) : null,
  });
}
async function st(t) {
  if (!C) return;
  t["creds.update"] && W && (await T?.save(W));
  const e = t["messaging-history.set"];
  if (
    (Ne(C, t), (J = Le(J, t, Date.now())), e || t["messaging-history.status"])
  ) {
    const s = fe();
    O({
      kind: "history-progress",
      syncType: e?.syncType ?? t["messaging-history.status"]?.syncType ?? null,
      progress: e?.progress ?? null,
      receivedMessages: e?.messages.length ?? 0,
      receivedChats: e?.chats.length ?? 0,
      storedMessages: s.message_count,
      history: s.history,
    });
  }
}
function B() {
  (P++,
    H && clearTimeout(H),
    (H = void 0),
    Y?.end(void 0).catch(() => {}),
    (Y = void 0),
    (q = null));
}
function je() {
  if (!C || !W || !T || L) return;
  try {
    T.assertActive();
  } catch {
    return;
  }
  const t = ++P;
  ((J = {}),
    O({ kind: "diagnostic", reason: "socket_start" }),
    (f = { ...f, connection: W.me?.id ? "reconnecting" : "connecting" }),
    R());
  const e = g.makeWASocket({
    auth: { creds: W, keys: T.keys },
    logger: De,
    browser: g.Browsers.appropriate("Chrome"),
    ...(le ? { version: le } : {}),
    markOnlineOnConnect: !1,
    syncFullHistory: !0,
    shouldSyncHistoryMessage: () => !0,
    getMessage: async (s) => C?.getMessage(C.messageId(s))?.message ?? void 0,
  });
  ((Y = e),
    e.ws.on("CB:ack,class:message", (s) => {
      if (P !== t || L || !s.attrs.error) return;
      const a = Number(s.attrs.error);
      O({
        kind: "diagnostic",
        reason: "message_rejected",
        statusCode: Number.isSafeInteger(a) ? a : void 0,
      });
    }),
    e.ws.on("CB:notification,type:companion_reg_refresh", () => {
      P === t &&
        !L &&
        O({ kind: "diagnostic", reason: "registration_refresh" });
    }),
    e.ev.process(
      (s) => (
        (V = V.then(async () => {
          if (P !== t || L) return;
          await st(s);
          const a = s["connection.update"];
          if (
            (a?.isNewLogin &&
              (O({ kind: "diagnostic", reason: "pairing_accepted" }),
              (q = null),
              (f = { ...f, connection: "reconnecting" })),
            a?.qr)
          ) {
            if ((O({ kind: "diagnostic", reason: "qr_ready" }), !he)) {
              (B(), (f = { ...f, connection: "disconnected" }), R());
              return;
            }
            if (
              ((q = await Be.toDataURL(a.qr, {
                width: 256,
                margin: 2,
                errorCorrectionLevel: "M",
              })),
              P !== t || L)
            )
              return;
            f = { ...f, connection: "pairing" };
          }
          if (
            (a?.connection === "open" &&
              (O({ kind: "diagnostic", reason: "connected" }),
              (te = 0),
              (ne = "resume"),
              (he = !1),
              (q = null),
              (f = { ...f, connection: "connected" }),
              W && (await T?.save(W))),
            a?.connection === "close")
          ) {
            q = null;
            const i = u.safeParse(
                u.object({ output: u.object({ statusCode: u.number() }) }),
                a.lastDisconnect?.error,
              ),
              n = i.success ? i.output.output.statusCode : 0;
            (O({
              kind: "diagnostic",
              reason: "connection_closed",
              statusCode: n,
            }),
              n === g.DisconnectReason.loggedOut ||
              n === g.DisconnectReason.badSession ||
              n === g.DisconnectReason.multideviceMismatch
                ? ((ne =
                    n === g.DisconnectReason.loggedOut ? "relink" : "resume"),
                  (f = { ...f, connection: "disconnected" }),
                  B())
                : n === g.DisconnectReason.connectionReplaced || te >= 8
                  ? ((f = { ...f, connection: "error" }), B())
                  : ((f = { ...f, connection: "reconnecting" }),
                    te++,
                    H && clearTimeout(H),
                    (H = setTimeout(
                      je,
                      n === g.DisconnectReason.restartRequired
                        ? 0
                        : Math.min(3e4, 1e3 * 2 ** te),
                    ))));
          }
          R();
        }).catch(() => {
          (O({ kind: "diagnostic", reason: "event_processing_failed" }),
            B(),
            (f = { ...f, connection: "error" }),
            R());
        })),
        V
      ),
    ));
}
async function at(t, e) {
  switch ((e?.throwIfAborted(), t.kind)) {
    case "open": {
      if (C) throw new c.WhatsAppOperationError("WhatsApp is already open.");
      return (
        (C = new et(x.join(t.directory, "messages.db"), Buffer.from(t.key))),
        (j = x.join(t.directory, "transfers")),
        await I.rm(j, { recursive: !0, force: !0 }),
        (T = new qe(tt, (s) => {
          (O({ kind: "diagnostic", reason: s }),
            B(),
            (ne = "reacquire"),
            (f = { ...f, connection: "error" }),
            R());
        })),
        (W = (await T.open(C, t.pair)) ?? void 0),
        (he = t.pair),
        W && (W.me?.id || t.pair)
          ? ((f = {
              ...f,
              connection: W.me?.id ? "reconnecting" : "connecting",
            }),
            R(),
            g
              .fetchLatestWaWebVersion({ signal: AbortSignal.timeout(1e4) })
              .then((s) => {
                L || ((le = s.version), je());
              })
              .catch(() => {
                L ||
                  (O({ kind: "diagnostic", reason: "version_lookup_failed" }),
                  (f = { ...f, connection: "error" }),
                  R());
              }))
          : R(),
        f
      );
    }
    case "execute": {
      if (!C)
        throw new c.WhatsAppOperationError(
          "Connect WhatsApp on this computer first.",
        );
      const { request: s } = t;
      if (s.action === "whatsapp_get_status") return fe();
      if (!T)
        throw new c.WhatsAppOperationError(
          "WhatsApp credentials are unavailable.",
        );
      if ((T.assertActive(), !W?.me?.id))
        throw new c.WhatsAppOperationError(
          "Connect WhatsApp on this computer first.",
        );
      const a = await Ge(s, {
        store: C,
        credentials: T,
        socket: f.connection === "connected" ? Y : void 0,
        fileRoot: t.fileRoot,
        temporaryRoot: j,
        signal: e,
      });
      return (
        s.action === "whatsapp_request_history" &&
          (J = Le(
            J,
            {
              "messaging-history.set": {
                chats: [],
                contacts: [],
                messages: [],
                syncType: g.proto.HistorySync.HistorySyncType.ON_DEMAND,
                progress: 0,
              },
            },
            Date.now(),
          )),
        R(),
        a
      );
    }
    case "shutdown":
      return (
        (L = !0),
        B(),
        await V,
        await T?.close(),
        C?.close(),
        (C = void 0),
        j && (await I.rm(j, { recursive: !0, force: !0 })),
        { ...D.initialWhatsAppStatus }
      );
    case "disconnect":
      L = !0;
      try {
        await Y?.logout("Disconnected by user");
      } catch {}
      return (
        B(),
        await V,
        await T?.close(),
        C?.close(),
        (C = void 0),
        j && (await I.rm(j, { recursive: !0, force: !0 })),
        (f = { ...D.initialWhatsAppStatus }),
        (J = {}),
        R(),
        f
      );
  }
}
me.on("message", ({ data: t }) => {
  if (t.kind === "cancel") {
    de.get(t.id)?.abort();
    return;
  }
  if (t.kind === "auth-result") {
    const s = ie.get(t.id);
    s &&
      (clearTimeout(s.timer),
      ie.delete(t.id),
      t.failure
        ? s.reject(
            new c.WhatsAppCredentialError(
              t.failure.reason,
              t.failure.statusCode,
            ),
          )
        : s.resolve(t.response));
    return;
  }
  const e = t.kind === "execute" ? new AbortController() : void 0;
  (e && de.set(t.id, e),
    (Ae = Ae.then(async () => {
      try {
        O({
          kind: "result",
          id: t.id,
          result: { isError: !1, data: await at(t, e?.signal) },
        });
      } catch (s) {
        let a =
          "WhatsApp could not complete this operation. If this was a send, reuse its request_id to check the outcome.";
        (e?.signal.aborted
          ? (a =
              "WhatsApp action canceled. A file or message already being sent may have arrived. Check get_send_status before sending again.")
          : s instanceof c.WhatsAppOperationError && (a = s.message),
          O({
            kind: "result",
            id: t.id,
            result: {
              isError: !0,
              error: a,
              retryable: !1,
              ...(s instanceof c.WhatsAppCredentialError && {
                kind: s.kind,
                errorCode: s.reason,
              }),
            },
          }));
      } finally {
        de.delete(t.id);
      }
    })));
});
