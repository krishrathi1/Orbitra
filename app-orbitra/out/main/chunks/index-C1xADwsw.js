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
      o = new n.Error().stack;
    o &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[o] = "042b8e6b-f447-49bc-8690-ce466f4dbb12"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-042b8e6b-f447-49bc-8690-ce466f4dbb12"));
  })();
} catch {}
const z = require("valibot"),
  t = require("./base-B19nE_Cx.js");
function V(n) {
  const o = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (n) {
    for (const r in n)
      if (r !== "default") {
        const _ = Object.getOwnPropertyDescriptor(n, r);
        Object.defineProperty(
          o,
          r,
          _.get ? _ : { enumerable: !0, get: () => n[r] },
        );
      }
  }
  return ((o.default = n), Object.freeze(o));
}
const e = V(z),
  W = {
    connection: "disconnected",
    history: "waiting",
    message_count: 0,
    history_complete: !1,
  },
  M = [
    "time_budget",
    "response_size",
    "rate_limit",
    "provider_error",
    "provider_result_cap",
  ];
function l() {
  return e.pipe(e.number(), e.safeInteger(), e.minValue(1));
}
function f() {
  return e.optional(e.pipe(e.string(), e.title("ReadPaginationCursor")));
}
function N() {
  return {
    limit: e.optional(e.pipe(l(), e.title("ReadPaginationLimit"))),
    cursor: f(),
  };
}
function U(n) {
  return {
    start: e.optional(e.pipe(n, e.title("ReadPaginationStart"))),
    end: e.optional(e.pipe(l(), e.title("ReadPaginationEnd"))),
    cursor: f(),
  };
}
function d(n) {
  const o = l();
  return U(o);
}
function u() {
  return {
    nextCursor: e.optional(e.string()),
    partial: e.optional(
      e.pipe(
        e.object({
          reason: e.picklist(M),
          retryAfterMs: e.optional(
            e.pipe(e.number(), e.safeInteger(), e.minValue(0)),
          ),
        }),
        e.title("ReadPaginationPartial"),
      ),
    ),
  };
}
const a = e.pipe(e.string(), e.minLength(1), e.maxLength(256)),
  h = e.optional(
    e.pipe(e.number(), e.integer(), e.minValue(1), e.maxValue(100)),
    30,
  ),
  m = e.optional(e.pipe(e.string(), e.maxLength(200))),
  i = e.pipe(
    e.number(),
    e.safeInteger(),
    e.minValue(0),
    e.description("Unix timestamp in seconds."),
  ),
  s = e.pipe(
    e.string(),
    e.minLength(8),
    e.maxLength(128),
    e.description(
      "Unique ID for this intended action. Reuse after a timeout; never change it just to retry.",
    ),
  ),
  p = e.pipe(e.string(), e.minLength(1), e.maxLength(4096)),
  y = e.pipe(
    e.string(),
    e.minLength(1),
    e.maxLength(4096),
    e.description(
      "File path under the active profile in $ORBITRA/. No URLs or host paths.",
    ),
  ),
  w = {
    query: m,
    direction: e.optional(e.picklist(["all", "incoming", "outgoing"]), "all"),
    senderId: e.optional(a),
    after: e.optional(i),
    before: e.optional(i),
  },
  Y = { chatId: a, requestId: s, replyTo: e.optional(a) },
  S = t.valibotStrictObject({}),
  v = t.valibotStrictObject({
    query: m,
    limit: h,
    unreadOnly: e.optional(e.boolean(), !1),
    ...d(),
  }),
  I = t.valibotStrictObject({ query: m, limit: h, ...d() }),
  j = t.valibotStrictObject({ chatId: a, ...w, limit: h, ...d() }),
  O = t.valibotStrictObject({ ...w, chatId: e.optional(a), ...N() }),
  x = t.valibotStrictObject({ messageId: a }),
  k = t.valibotStrictObject({ chatId: a }),
  T = t.valibotStrictObject({
    phoneNumber: e.pipe(
      e.string(),
      e.regex(/^\+[1-9][0-9]{6,14}$/),
      e.title("E164Phone"),
    ),
  }),
  $ = t.valibotStrictObject({
    file_path: y,
    kind: e.optional(
      e.picklist(["auto", "document", "image", "video", "audio", "sticker"]),
      "auto",
    ),
    file_name: e.optional(e.pipe(e.string(), e.minLength(1), e.maxLength(240))),
    voice_note: e.optional(e.boolean(), !1),
  }),
  R = t.valibotStrictObject({
    ...Y,
    message: e.optional(p),
    text: e.optional(
      e.pipe(
        p,
        e.description(
          "Legacy alias for message. Supply one of message or text, not both.",
        ),
      ),
    ),
    attachments: e.optional(e.pipe(e.array($), e.maxLength(10)), []),
  }),
  A = t.valibotStrictObject({ requestId: s }),
  q = t.valibotStrictObject({ messageId: a, destination: y }),
  L = t.valibotStrictObject({
    messageId: a,
    reaction: e.pipe(
      e.string(),
      e.maxLength(32),
      e.description("Emoji reaction, or empty string to remove your reaction."),
    ),
    requestId: s,
  }),
  C = t.valibotStrictObject({ messageId: a, text: p, requestId: s }),
  D = t.valibotStrictObject({ messageId: a, requestId: s }),
  E = t.valibotStrictObject({
    chatId: a,
    beforeMessageId: a,
    count: e.optional(
      e.pipe(e.number(), e.integer(), e.minValue(1), e.maxValue(100)),
      50,
    ),
  }),
  B = e.object({
    connection: e.picklist([
      "disconnected",
      "connecting",
      "pairing",
      "connected",
      "reconnecting",
      "error",
    ]),
    history: e.pipe(
      e.picklist(["waiting", "syncing", "available", "paused"]),
      e.description(
        "Current transfer activity, not a guarantee of full phone history.",
      ),
    ),
    message_count: e.number(),
    history_complete: e.pipe(
      e.literal(!1),
      e.description(
        "Full phone history is never guaranteed. Always false; use history for transfer activity.",
      ),
    ),
    last_history_at: e.optional(e.nullable(i)),
    oldest_message_at: e.optional(e.nullable(i)),
    newest_message_at: e.optional(e.nullable(i)),
    pending_messages: e.optional(e.number()),
    excluded_messages: e.optional(e.number()),
    unsupported_messages: e.optional(e.number()),
    legacy_exclusions: e.optional(e.number()),
  }),
  c = e.object({
    chat_id: e.string(),
    name: e.string(),
    is_group: e.boolean(),
    last_message_at: e.number(),
    latest_readable_at: e.optional(e.nullable(i)),
    unread_count: e.optional(e.number(), 0),
    marked_unread: e.optional(e.boolean(), !1),
  }),
  P = e.object({
    contact_id: a,
    chat_id: e.nullable(a),
    name: e.string(),
    phone_number: e.nullable(e.string()),
  }),
  G = e.object({
    type: e.picklist(["image", "video", "audio", "document", "sticker"]),
    mime_type: e.string(),
    file_name: e.nullable(e.string()),
    size_bytes: e.nullable(e.number()),
    downloadable: e.boolean(),
    voice_note: e.optional(e.boolean()),
  }),
  g = e.pipe(
    e.object({
      message_id: e.string(),
      chat_id: e.string(),
      sender: e.string(),
      from_me: e.boolean(),
      timestamp: i,
      text: e.string(),
      kind: e.picklist(["text", "attachment", "location", "contact", "poll"]),
      sender_id: e.optional(a),
      reply_to: e.optional(e.nullable(a)),
      delivery: e.optional(
        e.picklist([
          "unknown",
          "pending",
          "sent",
          "delivered",
          "read",
          "played",
          "failed",
        ]),
        "unknown",
      ),
      attachment: e.optional(G),
      reactions: e.optional(
        e.array(
          e.object({ sender_id: a, text: e.string(), from_me: e.boolean() }),
        ),
        [],
      ),
      edited: e.optional(e.boolean(), !1),
      edited_at: e.optional(e.nullable(i), null),
      read_by_me: e.optional(e.nullable(e.boolean()), null),
      receipts: e.optional(
        e.array(
          e.object({
            recipient_id: a,
            delivered_at: e.nullable(i),
            read_at: e.nullable(i),
            played_at: e.nullable(i),
          }),
        ),
        [],
      ),
    }),
    e.title("WhatsAppMessage"),
  ),
  H = e.object({
    chats: e.array(c),
    next_cursor: e.nullable(e.string()),
    ...u(),
  }),
  J = e.object({
    contacts: e.array(P),
    next_cursor: e.nullable(e.string()),
    ...u(),
  }),
  F = e.object({
    messages: e.array(g),
    next_cursor: e.nullable(e.string()),
    ...u(),
  }),
  K = e.object({
    message_id: e.string(),
    message_ids: e.optional(e.array(e.string())),
    status: e.literal("sent"),
  }),
  Q = e.object({
    status: e.picklist(["not_found", "sent", "partial", "uncertain", "failed"]),
    message_ids: e.array(e.string()),
  }),
  b = e.object({ message_id: e.string(), status: e.literal("accepted") }),
  X = e.object({
    file_path: e.string(),
    mime_type: e.string(),
    size_bytes: e.number(),
  }),
  Z = e.object({
    ...c.entries,
    description: e.optional(e.string()),
    participants: e.optional(
      e.array(
        e.object({
          contact_id: a,
          name: e.string(),
          role: e.picklist(["member", "admin", "owner"]),
        }),
      ),
    ),
  }),
  ee = e.object({ exists: e.boolean(), chat: e.nullable(c) }),
  te = e.object({ status: e.literal("requested"), request_id: e.string() });
t.defineIntegrationTool({
  description:
    "Check the local connection, history transfer activity, retained date range and pending/excluded counts. history_complete is always false, not evidence of ongoing sync.",
  inputSchema: S,
  outputSchema: B,
});
const ae = t.defineIntegrationTool({
    description:
      "List synchronized chats newest first, optionally filtering by name, phone number, or unread status. last_message_at includes unreadable activity; latest_readable_at is the newest retained message.",
    inputSchema: v,
    outputSchema: H,
    pagination: {
      kind: "list",
      legacyFields: ["limit", "cursor"],
      defaultCount: 30,
    },
  }),
  ne = t.defineIntegrationTool({
    description:
      "Find synchronized contacts by name or phone number, including contacts with no conversation. Use resolve_recipient to verify a phone number before starting a new chat.",
    inputSchema: I,
    outputSchema: J,
    pagination: {
      kind: "list",
      legacyFields: ["limit", "cursor"],
      defaultCount: 30,
    },
  });
t.defineIntegrationTool({
  description:
    "Verify a user-supplied international phone number on WhatsApp and return a chat_id usable for sending, including a new conversation. Does not send a message.",
  inputSchema: T,
  outputSchema: ee,
});
const ie = t.defineIntegrationTool({
  description:
    "Read one synchronized chat newest first, with optional text, direction, sender, and exclusive date filters. Restricted, disappearing, and view-once content is excluded.",
  inputSchema: j,
  outputSchema: F,
  pagination: {
    kind: "list",
    legacyFields: ["limit", "cursor"],
    defaultCount: 30,
  },
});
t.defineIntegrationTool({
  description:
    "Search synchronized messages newest first. For the latest received message use direction incoming and limit 1. Date coverage is limited to history supplied to this device.",
  inputSchema: O,
  outputSchema: F,
  pagination: {
    kind: "search",
    legacyFields: ["limit", "cursor"],
    defaultCount: 30,
  },
});
t.defineIntegrationTool({
  description:
    "Read one synchronized message, its attachment metadata, reply reference, reactions and delivery state. sent means accepted by WhatsApp; delivered/read/played reflect provider receipts, not guaranteed attention.",
  inputSchema: x,
  outputSchema: g,
});
t.defineIntegrationTool({
  description:
    "Read a chat and, for a group, fetch its current description and participants.",
  inputSchema: k,
  outputSchema: Z,
});
t.defineIntegrationTool({
  description:
    "Send a message and/or attachments to a chat selected with list_chats or resolve_recipient. Send up to 10 attachments per request. Attachments are workspace files with automatic type detection; use kind document for the original file, or voice_note for Ogg Opus audio. The message is a caption on the first image/video/document, otherwise a separate text. Optionally reply to a message in the same chat. Reuse request_id for the same intended send; get_send_status reports partial or uncertain sends.",
  inputSchema: R,
  outputSchema: K,
});
t.defineIntegrationTool({
  description:
    "Check a send or message action by request_id without repeating it. sent requires WhatsApp server acceptance, not delivery. failed means WhatsApp rejected a message; do not retry automatically. Message IDs can include an unconfirmed or rejected part. Older receipts without server acknowledgement are uncertain. Inspect the chat before proposing a new send.",
  inputSchema: A,
  outputSchema: Q,
});
t.defineIntegrationTool({
  description:
    "Download a synchronized message attachment into a new file at destination under your active Orbitra profile. Existing files are never overwritten. View-once, disappearing and restricted content cannot be downloaded. Older media may require the phone online.",
  inputSchema: q,
  outputSchema: X,
});
t.defineIntegrationTool({
  description:
    "Add, replace or remove your reaction to a message. Reuse request_id for the same intended action.",
  inputSchema: L,
  outputSchema: b,
});
t.defineIntegrationTool({
  description:
    "Edit text you sent. WhatsApp enforces its edit window. Reuse request_id for this edit.",
  inputSchema: C,
  outputSchema: b,
});
t.defineIntegrationTool({
  description:
    "Delete a message you sent for everyone, subject to WhatsApp limits. Reuse request_id for this deletion.",
  inputSchema: D,
  outputSchema: b,
});
t.defineIntegrationTool({
  description:
    "Ask the phone for up to 100 older messages before a known message in a chat. Asynchronous: inspect get_status and list_messages afterward. The phone must be reachable; full history is not guaranteed.",
  inputSchema: E,
  outputSchema: te,
});
const oe = e.variant("action", [
  e.object({ action: e.literal("whatsapp_get_status"), params: S }),
  e.object({ action: e.literal("whatsapp_list_chats"), params: v }),
  e.object({ action: e.literal("whatsapp_list_contacts"), params: I }),
  e.object({ action: e.literal("whatsapp_resolve_recipient"), params: T }),
  e.object({ action: e.literal("whatsapp_list_messages"), params: j }),
  e.object({ action: e.literal("whatsapp_search_messages"), params: O }),
  e.object({ action: e.literal("whatsapp_get_message"), params: x }),
  e.object({ action: e.literal("whatsapp_get_chat"), params: k }),
  e.object({ action: e.literal("whatsapp_send_message"), params: R }),
  e.object({ action: e.literal("whatsapp_get_send_status"), params: A }),
  e.object({ action: e.literal("whatsapp_download_attachment"), params: q }),
  e.object({ action: e.literal("whatsapp_react"), params: L }),
  e.object({ action: e.literal("whatsapp_edit_message"), params: C }),
  e.object({ action: e.literal("whatsapp_delete_message"), params: D }),
  e.object({ action: e.literal("whatsapp_request_history"), params: E }),
]);
exports.initialWhatsAppStatus = W;
exports.whatsappChatSchema = c;
exports.whatsappContactSchema = P;
exports.whatsappMessageSchema = g;
exports.whatsappRequestSchema = oe;
exports.whatsapp_list_chats = ae;
exports.whatsapp_list_contacts = ne;
exports.whatsapp_list_messages = ie;
