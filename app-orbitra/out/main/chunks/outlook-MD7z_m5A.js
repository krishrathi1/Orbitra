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
      a = new r.Error().stack;
    a &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[a] = "1f111bac-03ca-4eb2-af95-45a663a626c1"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-1f111bac-03ca-4eb2-af95-45a663a626c1"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const S = P,
  T = {
    properties: {
      start: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationStart",
      },
      end: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationEnd",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
      action: { enum: ["list", "download"], type: "string" },
      messageId: { type: "string" },
      attachmentIds: {
        anyOf: [
          { type: "string" },
          { type: "array", items: { type: "string" } },
        ],
      },
      destination: { enum: ["disk", "inline"], type: "string" },
      account: { type: "string" },
      mailbox: { type: "string" },
    },
  },
  b = Object.prototype.hasOwnProperty;
function P(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = P.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.action === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "action" },
        message: "must have required property 'action'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.messageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!b.call(T.properties, s)) {
        const n = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.action !== void 0) {
      let s = r.action;
      if (typeof s != "string") {
        const n = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      if (!(s === "list" || s === "download")) {
        const n = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/enum",
          keyword: "enum",
          params: { allowedValues: T.properties.action.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.messageId !== void 0 && typeof r.messageId != "string") {
      const s = {
        instancePath: a + "/messageId",
        schemaPath: "#/properties/messageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.attachmentIds !== void 0) {
      let s = r.attachmentIds;
      const n = i;
      let o = !1;
      const m = i;
      if (typeof s != "string") {
        const l = {
          instancePath: a + "/attachmentIds",
          schemaPath: "#/properties/attachmentIds/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var t = m === i;
      o = o || t;
      const u = i;
      if (Array.isArray(s)) {
        const l = s.length;
        for (let y = 0; y < l; y++)
          if (typeof s[y] != "string") {
            const c = {
              instancePath: a + "/attachmentIds/" + y,
              schemaPath: "#/properties/attachmentIds/anyOf/1/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const l = {
          instancePath: a + "/attachmentIds",
          schemaPath: "#/properties/attachmentIds/anyOf/1/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var t = u === i;
      if (((o = o || t), o))
        ((i = n), e !== null && (n ? (e.length = n) : (e = null)));
      else {
        const l = {
          instancePath: a + "/attachmentIds",
          schemaPath: "#/properties/attachmentIds/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
    if (r.destination !== void 0) {
      let s = r.destination;
      if (typeof s != "string") {
        const n = {
          instancePath: a + "/destination",
          schemaPath: "#/properties/destination/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      if (!(s === "disk" || s === "inline")) {
        const n = {
          instancePath: a + "/destination",
          schemaPath: "#/properties/destination/enum",
          keyword: "enum",
          params: { allowedValues: T.properties.destination.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const s = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((P.errors = e), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const M = k,
  E = {
    properties: {
      start: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationStart",
      },
      end: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationEnd",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
      action: { enum: ["list", "create", "assign", "delete"], type: "string" },
      messageIds: {
        anyOf: [
          { type: "string" },
          { type: "array", items: { type: "string" } },
        ],
      },
      categories: { type: "array", items: { type: "string" } },
      categoryId: { type: "string" },
      displayName: { type: "string" },
      color: {
        enum: [
          "preset0",
          "preset1",
          "preset2",
          "preset3",
          "preset4",
          "preset5",
          "preset6",
          "preset7",
          "preset8",
          "preset9",
          "preset10",
          "preset11",
          "preset12",
          "preset13",
          "preset14",
          "preset15",
          "preset16",
          "preset17",
          "preset18",
          "preset19",
          "preset20",
          "preset21",
          "preset22",
          "preset23",
          "preset24",
        ],
        type: "string",
      },
      account: { type: "string" },
      mailbox: { type: "string" },
    },
  };
function k(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = k.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.action === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "action" },
        message: "must have required property 'action'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!b.call(E.properties, s)) {
        const n = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.action !== void 0) {
      let s = r.action;
      if (typeof s != "string") {
        const n = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      if (
        !(s === "list" || s === "create" || s === "assign" || s === "delete")
      ) {
        const n = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/enum",
          keyword: "enum",
          params: { allowedValues: E.properties.action.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.messageIds !== void 0) {
      let s = r.messageIds;
      const n = i;
      let o = !1;
      const m = i;
      if (typeof s != "string") {
        const l = {
          instancePath: a + "/messageIds",
          schemaPath: "#/properties/messageIds/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var t = m === i;
      o = o || t;
      const u = i;
      if (Array.isArray(s)) {
        const l = s.length;
        for (let y = 0; y < l; y++)
          if (typeof s[y] != "string") {
            const c = {
              instancePath: a + "/messageIds/" + y,
              schemaPath: "#/properties/messageIds/anyOf/1/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const l = {
          instancePath: a + "/messageIds",
          schemaPath: "#/properties/messageIds/anyOf/1/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var t = u === i;
      if (((o = o || t), o))
        ((i = n), e !== null && (n ? (e.length = n) : (e = null)));
      else {
        const l = {
          instancePath: a + "/messageIds",
          schemaPath: "#/properties/messageIds/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
    if (r.categories !== void 0) {
      let s = r.categories;
      if (Array.isArray(s)) {
        const n = s.length;
        for (let o = 0; o < n; o++)
          if (typeof s[o] != "string") {
            const m = {
              instancePath: a + "/categories/" + o,
              schemaPath: "#/properties/categories/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
      } else {
        const n = {
          instancePath: a + "/categories",
          schemaPath: "#/properties/categories/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.categoryId !== void 0 && typeof r.categoryId != "string") {
      const s = {
        instancePath: a + "/categoryId",
        schemaPath: "#/properties/categoryId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.displayName !== void 0 && typeof r.displayName != "string") {
      const s = {
        instancePath: a + "/displayName",
        schemaPath: "#/properties/displayName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.color !== void 0) {
      let s = r.color;
      if (typeof s != "string") {
        const n = {
          instancePath: a + "/color",
          schemaPath: "#/properties/color/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      if (
        !(
          s === "preset0" ||
          s === "preset1" ||
          s === "preset2" ||
          s === "preset3" ||
          s === "preset4" ||
          s === "preset5" ||
          s === "preset6" ||
          s === "preset7" ||
          s === "preset8" ||
          s === "preset9" ||
          s === "preset10" ||
          s === "preset11" ||
          s === "preset12" ||
          s === "preset13" ||
          s === "preset14" ||
          s === "preset15" ||
          s === "preset16" ||
          s === "preset17" ||
          s === "preset18" ||
          s === "preset19" ||
          s === "preset20" ||
          s === "preset21" ||
          s === "preset22" ||
          s === "preset23" ||
          s === "preset24"
        )
      ) {
        const n = {
          instancePath: a + "/color",
          schemaPath: "#/properties/color/enum",
          keyword: "enum",
          params: { allowedValues: E.properties.color.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const s = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((k.errors = e), i === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const F = w,
  R = {
    properties: {
      action: {
        enum: [
          "send",
          "schedule",
          "reply",
          "reply_all",
          "forward",
          "save_draft",
          "save_reply_draft",
          "save_forward_draft",
          "send_draft",
        ],
        type: "string",
      },
      sendAt: {
        type: "string",
        pattern:
          "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d))$",
        title: "ISODateTime",
      },
      sourceMessageId: { type: "string" },
      to: { type: "array", items: { type: "string" } },
      cc: { type: "array", items: { type: "string" } },
      bcc: { type: "array", items: { type: "string" } },
      subject: { type: "string" },
      body: { type: "string" },
      attachments: {
        type: "array",
        items: {
          type: "object",
          properties: {
            content: { type: "string" },
            name: { type: "string" },
            contentType: { type: "string" },
          },
          required: ["content", "name"],
        },
      },
      account: { type: "string" },
      mailbox: { type: "string" },
    },
  },
  Q = new RegExp(
    "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d))$",
    "u",
  );
function w(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = w.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.action === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "action" },
        message: "must have required property 'action'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (!b.call(R.properties, t)) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (r.action !== void 0) {
      let t = r.action;
      if (typeof t != "string") {
        const s = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (
        !(
          t === "send" ||
          t === "schedule" ||
          t === "reply" ||
          t === "reply_all" ||
          t === "forward" ||
          t === "save_draft" ||
          t === "save_reply_draft" ||
          t === "save_forward_draft" ||
          t === "send_draft"
        )
      ) {
        const s = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/enum",
          keyword: "enum",
          params: { allowedValues: R.properties.action.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (r.sendAt !== void 0) {
      let t = r.sendAt;
      if (typeof t == "string") {
        if (!Q.test(t)) {
          const s = {
            instancePath: a + "/sendAt",
            schemaPath: "#/properties/sendAt/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d))$",
            },
            message:
              'must match pattern "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d))$"',
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      } else {
        const s = {
          instancePath: a + "/sendAt",
          schemaPath: "#/properties/sendAt/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (r.sourceMessageId !== void 0 && typeof r.sourceMessageId != "string") {
      const t = {
        instancePath: a + "/sourceMessageId",
        schemaPath: "#/properties/sourceMessageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.to !== void 0) {
      let t = r.to;
      if (Array.isArray(t)) {
        const s = t.length;
        for (let n = 0; n < s; n++)
          if (typeof t[n] != "string") {
            const o = {
              instancePath: a + "/to/" + n,
              schemaPath: "#/properties/to/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const s = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (r.cc !== void 0) {
      let t = r.cc;
      if (Array.isArray(t)) {
        const s = t.length;
        for (let n = 0; n < s; n++)
          if (typeof t[n] != "string") {
            const o = {
              instancePath: a + "/cc/" + n,
              schemaPath: "#/properties/cc/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const s = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (r.bcc !== void 0) {
      let t = r.bcc;
      if (Array.isArray(t)) {
        const s = t.length;
        for (let n = 0; n < s; n++)
          if (typeof t[n] != "string") {
            const o = {
              instancePath: a + "/bcc/" + n,
              schemaPath: "#/properties/bcc/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const s = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (r.subject !== void 0 && typeof r.subject != "string") {
      const t = {
        instancePath: a + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.body !== void 0 && typeof r.body != "string") {
      const t = {
        instancePath: a + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.attachments !== void 0) {
      let t = r.attachments;
      if (Array.isArray(t)) {
        const s = t.length;
        for (let n = 0; n < s; n++) {
          let o = t[n];
          if (o && typeof o == "object" && !Array.isArray(o)) {
            if (o.content === void 0) {
              const m = {
                instancePath: a + "/attachments/" + n,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "content" },
                message: "must have required property 'content'",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (o.name === void 0) {
              const m = {
                instancePath: a + "/attachments/" + n,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property 'name'",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (o.content !== void 0 && typeof o.content != "string") {
              const m = {
                instancePath: a + "/attachments/" + n + "/content",
                schemaPath:
                  "#/properties/attachments/items/properties/content/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (o.name !== void 0 && typeof o.name != "string") {
              const m = {
                instancePath: a + "/attachments/" + n + "/name",
                schemaPath:
                  "#/properties/attachments/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (o.contentType !== void 0 && typeof o.contentType != "string") {
              const m = {
                instancePath: a + "/attachments/" + n + "/contentType",
                schemaPath:
                  "#/properties/attachments/items/properties/contentType/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
          } else {
            const m = {
              instancePath: a + "/attachments/" + n,
              schemaPath: "#/properties/attachments/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
        }
      } else {
        const s = {
          instancePath: a + "/attachments",
          schemaPath: "#/properties/attachments/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const t = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  } else {
    const t = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), i++);
  }
  return ((w.errors = e), i === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = v,
  V = {
    properties: {
      action: { enum: ["create", "update", "delete"], type: "string" },
      contactId: { type: "string" },
      displayName: { type: "string" },
      givenName: { type: "string" },
      surname: { type: "string" },
      emailAddresses: {
        type: "array",
        items: {
          type: "object",
          properties: { address: { type: "string" }, name: { type: "string" } },
          required: ["address"],
        },
      },
      phoneNumbers: {
        type: "object",
        properties: {
          business: { type: "string" },
          mobile: { type: "string" },
          home: { type: "string" },
        },
      },
      company: { type: "string" },
      jobTitle: { type: "string" },
      notes: { type: "string" },
      account: { type: "string" },
      mailbox: { type: "string" },
    },
  };
function v(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = v.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.action === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "action" },
        message: "must have required property 'action'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (!b.call(V.properties, t)) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (r.action !== void 0) {
      let t = r.action;
      if (typeof t != "string") {
        const s = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (!(t === "create" || t === "update" || t === "delete")) {
        const s = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/enum",
          keyword: "enum",
          params: { allowedValues: V.properties.action.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (r.contactId !== void 0 && typeof r.contactId != "string") {
      const t = {
        instancePath: a + "/contactId",
        schemaPath: "#/properties/contactId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.displayName !== void 0 && typeof r.displayName != "string") {
      const t = {
        instancePath: a + "/displayName",
        schemaPath: "#/properties/displayName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.givenName !== void 0 && typeof r.givenName != "string") {
      const t = {
        instancePath: a + "/givenName",
        schemaPath: "#/properties/givenName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.surname !== void 0 && typeof r.surname != "string") {
      const t = {
        instancePath: a + "/surname",
        schemaPath: "#/properties/surname/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.emailAddresses !== void 0) {
      let t = r.emailAddresses;
      if (Array.isArray(t)) {
        const s = t.length;
        for (let n = 0; n < s; n++) {
          let o = t[n];
          if (o && typeof o == "object" && !Array.isArray(o)) {
            if (o.address === void 0) {
              const m = {
                instancePath: a + "/emailAddresses/" + n,
                schemaPath: "#/properties/emailAddresses/items/required",
                keyword: "required",
                params: { missingProperty: "address" },
                message: "must have required property 'address'",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (o.address !== void 0 && typeof o.address != "string") {
              const m = {
                instancePath: a + "/emailAddresses/" + n + "/address",
                schemaPath:
                  "#/properties/emailAddresses/items/properties/address/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (o.name !== void 0 && typeof o.name != "string") {
              const m = {
                instancePath: a + "/emailAddresses/" + n + "/name",
                schemaPath:
                  "#/properties/emailAddresses/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
          } else {
            const m = {
              instancePath: a + "/emailAddresses/" + n,
              schemaPath: "#/properties/emailAddresses/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
        }
      } else {
        const s = {
          instancePath: a + "/emailAddresses",
          schemaPath: "#/properties/emailAddresses/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (r.phoneNumbers !== void 0) {
      let t = r.phoneNumbers;
      if (t && typeof t == "object" && !Array.isArray(t)) {
        if (t.business !== void 0 && typeof t.business != "string") {
          const s = {
            instancePath: a + "/phoneNumbers/business",
            schemaPath: "#/properties/phoneNumbers/properties/business/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (t.mobile !== void 0 && typeof t.mobile != "string") {
          const s = {
            instancePath: a + "/phoneNumbers/mobile",
            schemaPath: "#/properties/phoneNumbers/properties/mobile/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (t.home !== void 0 && typeof t.home != "string") {
          const s = {
            instancePath: a + "/phoneNumbers/home",
            schemaPath: "#/properties/phoneNumbers/properties/home/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      } else {
        const s = {
          instancePath: a + "/phoneNumbers",
          schemaPath: "#/properties/phoneNumbers/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (r.company !== void 0 && typeof r.company != "string") {
      const t = {
        instancePath: a + "/company",
        schemaPath: "#/properties/company/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.jobTitle !== void 0 && typeof r.jobTitle != "string") {
      const t = {
        instancePath: a + "/jobTitle",
        schemaPath: "#/properties/jobTitle/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const t = {
        instancePath: a + "/notes",
        schemaPath: "#/properties/notes/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const t = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  } else {
    const t = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), i++);
  }
  return ((v.errors = e), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Z = I;
function I(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = I.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.messageIds === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageIds" },
        message: "must have required property 'messageIds'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "messageIds" || s === "account" || s === "mailbox")) {
        const n = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    if (r.messageIds !== void 0) {
      let s = r.messageIds;
      const n = i;
      let o = !1;
      const m = i;
      if (typeof s != "string") {
        const l = {
          instancePath: a + "/messageIds",
          schemaPath: "#/properties/messageIds/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var t = m === i;
      o = o || t;
      const u = i;
      if (Array.isArray(s)) {
        const l = s.length;
        for (let y = 0; y < l; y++)
          if (typeof s[y] != "string") {
            const c = {
              instancePath: a + "/messageIds/" + y,
              schemaPath: "#/properties/messageIds/anyOf/1/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const l = {
          instancePath: a + "/messageIds",
          schemaPath: "#/properties/messageIds/anyOf/1/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var t = u === i;
      if (((o = o || t), o))
        ((i = n), e !== null && (n ? (e.length = n) : (e = null)));
      else {
        const l = {
          instancePath: a + "/messageIds",
          schemaPath: "#/properties/messageIds/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const s = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const $ = _,
  U = {
    properties: { action: { enum: ["list", "find", "create", "delete"] } },
  };
function _(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = _.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.action === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "action" },
        message: "must have required property 'action'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (
        !(
          t === "start" ||
          t === "end" ||
          t === "cursor" ||
          t === "action" ||
          t === "path" ||
          t === "includeHidden" ||
          t === "account" ||
          t === "mailbox"
        )
      ) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (r.start !== void 0) {
      let t = r.start;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const s = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof t == "number") {
        if (t > 9007199254740991 || isNaN(t)) {
          const s = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (t < 1 || isNaN(t)) {
          const s = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let t = r.end;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const s = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof t == "number") {
        if (t > 9007199254740991 || isNaN(t)) {
          const s = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (t < 1 || isNaN(t)) {
          const s = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const t = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.action !== void 0) {
      let t = r.action;
      if (typeof t != "string") {
        const s = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (!(t === "list" || t === "find" || t === "create" || t === "delete")) {
        const s = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/enum",
          keyword: "enum",
          params: { allowedValues: U.properties.action.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (r.path !== void 0 && typeof r.path != "string") {
      const t = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.includeHidden !== void 0 && typeof r.includeHidden != "boolean") {
      const t = {
        instancePath: a + "/includeHidden",
        schemaPath: "#/properties/includeHidden/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const t = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  } else {
    const t = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), i++);
  }
  return ((_.errors = e), i === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = A;
function A(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = A.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const t in r)
      if (
        !(
          t === "start" ||
          t === "end" ||
          t === "cursor" ||
          t === "includeHidden" ||
          t === "account" ||
          t === "mailbox"
        )
      ) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (r.start !== void 0) {
      let t = r.start;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const s = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof t == "number") {
        if (t > 9007199254740991 || isNaN(t)) {
          const s = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (t < 1 || isNaN(t)) {
          const s = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let t = r.end;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const s = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof t == "number") {
        if (t > 9007199254740991 || isNaN(t)) {
          const s = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (t < 1 || isNaN(t)) {
          const s = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const t = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.includeHidden !== void 0 && typeof r.includeHidden != "boolean") {
      const t = {
        instancePath: a + "/includeHidden",
        schemaPath: "#/properties/includeHidden/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const t = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  } else {
    const t = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), i++);
  }
  return ((A.errors = e), i === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = N;
function N(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = N.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const t in r)
      if (!(t === "account" || t === "mailbox")) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (r.account !== void 0 && typeof r.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const t = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  } else {
    const t = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), i++);
  }
  return ((N.errors = e), i === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = x;
function x(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = x.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.messageIds === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageIds" },
        message: "must have required property 'messageIds'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "messageIds" || s === "account" || s === "mailbox")) {
        const n = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    if (r.messageIds !== void 0) {
      let s = r.messageIds;
      const n = i;
      let o = !1;
      const m = i;
      if (typeof s != "string") {
        const l = {
          instancePath: a + "/messageIds",
          schemaPath: "#/properties/messageIds/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var t = m === i;
      o = o || t;
      const u = i;
      if (Array.isArray(s)) {
        const l = s.length;
        for (let y = 0; y < l; y++)
          if (typeof s[y] != "string") {
            const c = {
              instancePath: a + "/messageIds/" + y,
              schemaPath: "#/properties/messageIds/anyOf/1/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const l = {
          instancePath: a + "/messageIds",
          schemaPath: "#/properties/messageIds/anyOf/1/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var t = u === i;
      if (((o = o || t), o))
        ((i = n), e !== null && (n ? (e.length = n) : (e = null)));
      else {
        const l = {
          instancePath: a + "/messageIds",
          schemaPath: "#/properties/messageIds/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const s = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((x.errors = e), i === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = j;
function j(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = j.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const t in r)
      if (
        !(
          t === "limit" ||
          t === "cursor" ||
          t === "kql" ||
          t === "folder" ||
          t === "conversationId" ||
          t === "account" ||
          t === "mailbox"
        )
      ) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (r.limit !== void 0) {
      let t = r.limit;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const s = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof t == "number") {
        if (t > 9007199254740991 || isNaN(t)) {
          const s = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (t < 1 || isNaN(t)) {
          const s = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const t = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.kql !== void 0 && typeof r.kql != "string") {
      const t = {
        instancePath: a + "/kql",
        schemaPath: "#/properties/kql/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.folder !== void 0 && typeof r.folder != "string") {
      const t = {
        instancePath: a + "/folder",
        schemaPath: "#/properties/folder/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.conversationId !== void 0 && typeof r.conversationId != "string") {
      const t = {
        instancePath: a + "/conversationId",
        schemaPath: "#/properties/conversationId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const t = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  } else {
    const t = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), i++);
  }
  return ((j.errors = e), i === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = q;
function q(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = q.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const t in r)
      if (
        !(
          t === "limit" ||
          t === "cursor" ||
          t === "query" ||
          t === "account" ||
          t === "mailbox"
        )
      ) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (r.limit !== void 0) {
      let t = r.limit;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const s = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof t == "number") {
        if (t > 9007199254740991 || isNaN(t)) {
          const s = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (t < 1 || isNaN(t)) {
          const s = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const t = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.query !== void 0 && typeof r.query != "string") {
      const t = {
        instancePath: a + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const t = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  } else {
    const t = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), i++);
  }
  return ((q.errors = e), i === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const J = O,
  W = { properties: { action: { enum: ["inspect", "send_mailto"] } } };
function O(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = O.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.action === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "action" },
        message: "must have required property 'action'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.messageId === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (
        !(
          t === "action" ||
          t === "messageId" ||
          t === "account" ||
          t === "mailbox"
        )
      ) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (r.action !== void 0) {
      let t = r.action;
      if (typeof t != "string") {
        const s = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (!(t === "inspect" || t === "send_mailto")) {
        const s = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/enum",
          keyword: "enum",
          params: { allowedValues: W.properties.action.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (r.messageId !== void 0 && typeof r.messageId != "string") {
      const t = {
        instancePath: a + "/messageId",
        schemaPath: "#/properties/messageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const t = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  } else {
    const t = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), i++);
  }
  return ((O.errors = e), i === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const K = D,
  H = {
    properties: {
      messageIds: {
        anyOf: [
          { type: "string" },
          { type: "array", items: { type: "string" } },
        ],
      },
      isRead: { type: "boolean" },
      folder: { type: "string" },
      isFlagged: { type: "boolean" },
      importance: { enum: ["low", "normal", "high"], type: "string" },
      subject: { type: "string" },
      body: { type: "string" },
      to: { type: "array", items: { type: "string" } },
      cc: { type: "array", items: { type: "string" } },
      bcc: { type: "array", items: { type: "string" } },
      attachments: {
        type: "array",
        items: {
          type: "object",
          properties: {
            content: { type: "string" },
            name: { type: "string" },
            contentType: { type: "string" },
          },
          required: ["content", "name"],
        },
      },
      account: { type: "string" },
      mailbox: { type: "string" },
    },
  };
function D(
  r,
  {
    instancePath: a = "",
    parentData: d,
    parentDataProperty: f,
    rootData: h = r,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = D.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.messageIds === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageIds" },
        message: "must have required property 'messageIds'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!b.call(H.properties, s)) {
        const n = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    if (r.messageIds !== void 0) {
      let s = r.messageIds;
      const n = i;
      let o = !1;
      const m = i;
      if (typeof s != "string") {
        const l = {
          instancePath: a + "/messageIds",
          schemaPath: "#/properties/messageIds/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var t = m === i;
      o = o || t;
      const u = i;
      if (Array.isArray(s)) {
        const l = s.length;
        for (let y = 0; y < l; y++)
          if (typeof s[y] != "string") {
            const c = {
              instancePath: a + "/messageIds/" + y,
              schemaPath: "#/properties/messageIds/anyOf/1/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const l = {
          instancePath: a + "/messageIds",
          schemaPath: "#/properties/messageIds/anyOf/1/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var t = u === i;
      if (((o = o || t), o))
        ((i = n), e !== null && (n ? (e.length = n) : (e = null)));
      else {
        const l = {
          instancePath: a + "/messageIds",
          schemaPath: "#/properties/messageIds/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
    if (r.isRead !== void 0 && typeof r.isRead != "boolean") {
      const s = {
        instancePath: a + "/isRead",
        schemaPath: "#/properties/isRead/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.folder !== void 0 && typeof r.folder != "string") {
      const s = {
        instancePath: a + "/folder",
        schemaPath: "#/properties/folder/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isFlagged !== void 0 && typeof r.isFlagged != "boolean") {
      const s = {
        instancePath: a + "/isFlagged",
        schemaPath: "#/properties/isFlagged/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.importance !== void 0) {
      let s = r.importance;
      if (typeof s != "string") {
        const n = {
          instancePath: a + "/importance",
          schemaPath: "#/properties/importance/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      if (!(s === "low" || s === "normal" || s === "high")) {
        const n = {
          instancePath: a + "/importance",
          schemaPath: "#/properties/importance/enum",
          keyword: "enum",
          params: { allowedValues: H.properties.importance.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.subject !== void 0 && typeof r.subject != "string") {
      const s = {
        instancePath: a + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.body !== void 0 && typeof r.body != "string") {
      const s = {
        instancePath: a + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.to !== void 0) {
      let s = r.to;
      if (Array.isArray(s)) {
        const n = s.length;
        for (let o = 0; o < n; o++)
          if (typeof s[o] != "string") {
            const m = {
              instancePath: a + "/to/" + o,
              schemaPath: "#/properties/to/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
      } else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.cc !== void 0) {
      let s = r.cc;
      if (Array.isArray(s)) {
        const n = s.length;
        for (let o = 0; o < n; o++)
          if (typeof s[o] != "string") {
            const m = {
              instancePath: a + "/cc/" + o,
              schemaPath: "#/properties/cc/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
      } else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.bcc !== void 0) {
      let s = r.bcc;
      if (Array.isArray(s)) {
        const n = s.length;
        for (let o = 0; o < n; o++)
          if (typeof s[o] != "string") {
            const m = {
              instancePath: a + "/bcc/" + o,
              schemaPath: "#/properties/bcc/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
      } else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.attachments !== void 0) {
      let s = r.attachments;
      if (Array.isArray(s)) {
        const n = s.length;
        for (let o = 0; o < n; o++) {
          let m = s[o];
          if (m && typeof m == "object" && !Array.isArray(m)) {
            if (m.content === void 0) {
              const u = {
                instancePath: a + "/attachments/" + o,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "content" },
                message: "must have required property 'content'",
              };
              (e === null ? (e = [u]) : e.push(u), i++);
            }
            if (m.name === void 0) {
              const u = {
                instancePath: a + "/attachments/" + o,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property 'name'",
              };
              (e === null ? (e = [u]) : e.push(u), i++);
            }
            if (m.content !== void 0 && typeof m.content != "string") {
              const u = {
                instancePath: a + "/attachments/" + o + "/content",
                schemaPath:
                  "#/properties/attachments/items/properties/content/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [u]) : e.push(u), i++);
            }
            if (m.name !== void 0 && typeof m.name != "string") {
              const u = {
                instancePath: a + "/attachments/" + o + "/name",
                schemaPath:
                  "#/properties/attachments/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [u]) : e.push(u), i++);
            }
            if (m.contentType !== void 0 && typeof m.contentType != "string") {
              const u = {
                instancePath: a + "/attachments/" + o + "/contentType",
                schemaPath:
                  "#/properties/attachments/items/properties/contentType/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [u]) : e.push(u), i++);
            }
          } else {
            const u = {
              instancePath: a + "/attachments/" + o,
              schemaPath: "#/properties/attachments/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [u]) : e.push(u), i++);
          }
        }
      } else {
        const n = {
          instancePath: a + "/attachments",
          schemaPath: "#/properties/attachments/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.mailbox !== void 0 && typeof r.mailbox != "string") {
      const s = {
        instancePath: a + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((D.errors = e), i === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = {
  outlook_attachment: S,
  outlook_categories: M,
  outlook_compose: F,
  outlook_contact: L,
  outlook_delete: Z,
  outlook_folder: $,
  outlook_list_folders: C,
  outlook_profile: Y,
  outlook_read: z,
  outlook_search: B,
  outlook_search_contacts: G,
  outlook_unsubscribe: J,
  outlook_update: K,
};
exports.NATIVE_TOOL_VALIDATORS = X;
exports.validate_outlook_attachment = S;
exports.validate_outlook_categories = M;
exports.validate_outlook_compose = F;
exports.validate_outlook_contact = L;
exports.validate_outlook_delete = Z;
exports.validate_outlook_folder = $;
exports.validate_outlook_list_folders = C;
exports.validate_outlook_profile = Y;
exports.validate_outlook_read = z;
exports.validate_outlook_search = B;
exports.validate_outlook_search_contacts = G;
exports.validate_outlook_unsubscribe = J;
exports.validate_outlook_update = K;
