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
      (a._sentryDebugIds[i] = "e065ae71-e4dc-4738-895f-c604c79eca8b"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-e065ae71-e4dc-4738-895f-c604c79eca8b"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const D = y;
function y(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = y.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  )
    for (const s in a) {
      const t = {
        instancePath: i,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: s },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
  else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((y.errors = e), r === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = g,
  n = require("ajv/dist/runtime/ucs2length").default;
function g(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = g.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    for (const s in a)
      if (
        !(
          s === "query" ||
          s === "limit" ||
          s === "unreadOnly" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.query !== void 0) {
      let s = a.query;
      if (typeof s == "string") {
        if (n(s) > 200) {
          const t = {
            instancePath: i + "/query",
            schemaPath: "#/properties/query/maxLength",
            keyword: "maxLength",
            params: { limit: 200 },
            message: "must NOT have more than 200 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/query",
          schemaPath: "#/properties/query/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.limit !== void 0) {
      let s = a.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.unreadOnly !== void 0 && typeof a.unreadOnly != "boolean") {
      const s = {
        instancePath: i + "/unreadOnly",
        schemaPath: "#/properties/unreadOnly/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.start !== void 0) {
      let s = a.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.end !== void 0) {
      let s = a.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.cursor !== void 0 && typeof a.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((g.errors = e), r === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = w;
function w(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = w.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    for (const s in a)
      if (
        !(
          s === "query" ||
          s === "limit" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.query !== void 0) {
      let s = a.query;
      if (typeof s == "string") {
        if (n(s) > 200) {
          const t = {
            instancePath: i + "/query",
            schemaPath: "#/properties/query/maxLength",
            keyword: "maxLength",
            params: { limit: 200 },
            message: "must NOT have more than 200 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/query",
          schemaPath: "#/properties/query/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.limit !== void 0) {
      let s = a.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.start !== void 0) {
      let s = a.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.end !== void 0) {
      let s = a.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.cursor !== void 0 && typeof a.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((w.errors = e), r === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const M = P,
  J = new RegExp("^\\+[1-9][0-9]{6,14}$", "u");
function P(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = P.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.phoneNumber === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "phoneNumber" },
        message: "must have required property 'phoneNumber'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (s !== "phoneNumber") {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.phoneNumber !== void 0) {
      let s = a.phoneNumber;
      if (typeof s == "string") {
        if (!J.test(s)) {
          const t = {
            instancePath: i + "/phoneNumber",
            schemaPath: "#/properties/phoneNumber/pattern",
            keyword: "pattern",
            params: { pattern: "^\\+[1-9][0-9]{6,14}$" },
            message: 'must match pattern "^\\+[1-9][0-9]{6,14}$"',
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/phoneNumber",
          schemaPath: "#/properties/phoneNumber/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((P.errors = e), r === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = I,
  A = {
    properties: {
      chatId: { type: "string", minLength: 1, maxLength: 256 },
      query: { type: "string", maxLength: 200 },
      direction: { enum: ["all", "incoming", "outgoing"], type: "string" },
      senderId: { type: "string", minLength: 1, maxLength: 256 },
      after: { type: "integer", minimum: 0, maximum: 9007199254740991 },
      before: { type: "integer", minimum: 0, maximum: 9007199254740991 },
      limit: { type: "integer", minimum: 1, maximum: 100 },
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
    },
  },
  K = Object.prototype.hasOwnProperty;
function I(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = I.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.chatId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (!K.call(A.properties, s)) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.chatId !== void 0) {
      let s = a.chatId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/chatId",
            schemaPath: "#/properties/chatId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/chatId",
            schemaPath: "#/properties/chatId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.query !== void 0) {
      let s = a.query;
      if (typeof s == "string") {
        if (n(s) > 200) {
          const t = {
            instancePath: i + "/query",
            schemaPath: "#/properties/query/maxLength",
            keyword: "maxLength",
            params: { limit: 200 },
            message: "must NOT have more than 200 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/query",
          schemaPath: "#/properties/query/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.direction !== void 0) {
      let s = a.direction;
      if (typeof s != "string") {
        const t = {
          instancePath: i + "/direction",
          schemaPath: "#/properties/direction/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (!(s === "all" || s === "incoming" || s === "outgoing")) {
        const t = {
          instancePath: i + "/direction",
          schemaPath: "#/properties/direction/enum",
          keyword: "enum",
          params: { allowedValues: A.properties.direction.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.senderId !== void 0) {
      let s = a.senderId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/senderId",
            schemaPath: "#/properties/senderId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/senderId",
            schemaPath: "#/properties/senderId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/senderId",
          schemaPath: "#/properties/senderId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.after !== void 0) {
      let s = a.after;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/after",
          schemaPath: "#/properties/after/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: i + "/after",
            schemaPath: "#/properties/after/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: i + "/after",
            schemaPath: "#/properties/after/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.before !== void 0) {
      let s = a.before;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/before",
          schemaPath: "#/properties/before/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: i + "/before",
            schemaPath: "#/properties/before/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: i + "/before",
            schemaPath: "#/properties/before/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.limit !== void 0) {
      let s = a.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.start !== void 0) {
      let s = a.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.end !== void 0) {
      let s = a.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.cursor !== void 0 && typeof a.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((I.errors = e), r === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = b,
  Q = { properties: { direction: { enum: ["all", "incoming", "outgoing"] } } };
function b(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = b.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    for (const s in a)
      if (
        !(
          s === "query" ||
          s === "direction" ||
          s === "senderId" ||
          s === "after" ||
          s === "before" ||
          s === "chatId" ||
          s === "limit" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.query !== void 0) {
      let s = a.query;
      if (typeof s == "string") {
        if (n(s) > 200) {
          const t = {
            instancePath: i + "/query",
            schemaPath: "#/properties/query/maxLength",
            keyword: "maxLength",
            params: { limit: 200 },
            message: "must NOT have more than 200 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/query",
          schemaPath: "#/properties/query/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.direction !== void 0) {
      let s = a.direction;
      if (typeof s != "string") {
        const t = {
          instancePath: i + "/direction",
          schemaPath: "#/properties/direction/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (!(s === "all" || s === "incoming" || s === "outgoing")) {
        const t = {
          instancePath: i + "/direction",
          schemaPath: "#/properties/direction/enum",
          keyword: "enum",
          params: { allowedValues: Q.properties.direction.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.senderId !== void 0) {
      let s = a.senderId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/senderId",
            schemaPath: "#/properties/senderId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/senderId",
            schemaPath: "#/properties/senderId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/senderId",
          schemaPath: "#/properties/senderId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.after !== void 0) {
      let s = a.after;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/after",
          schemaPath: "#/properties/after/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: i + "/after",
            schemaPath: "#/properties/after/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: i + "/after",
            schemaPath: "#/properties/after/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.before !== void 0) {
      let s = a.before;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/before",
          schemaPath: "#/properties/before/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: i + "/before",
            schemaPath: "#/properties/before/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: i + "/before",
            schemaPath: "#/properties/before/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.chatId !== void 0) {
      let s = a.chatId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/chatId",
            schemaPath: "#/properties/chatId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/chatId",
            schemaPath: "#/properties/chatId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.limit !== void 0) {
      let s = a.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
    if (a.cursor !== void 0 && typeof a.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((b.errors = e), r === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = k;
function k(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = k.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.messageId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (s !== "messageId") {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.messageId !== void 0) {
      let s = a.messageId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/messageId",
          schemaPath: "#/properties/messageId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((k.errors = e), r === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const $ = v;
function v(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = v.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.chatId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (s !== "chatId") {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.chatId !== void 0) {
      let s = a.chatId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/chatId",
            schemaPath: "#/properties/chatId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/chatId",
            schemaPath: "#/properties/chatId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((v.errors = e), r === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = N,
  U = {
    properties: {
      attachments: {
        items: {
          properties: {
            kind: {
              enum: ["auto", "document", "image", "video", "audio", "sticker"],
            },
          },
        },
      },
    },
  };
function N(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = N.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.chatId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.requestId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "requestId" },
        message: "must have required property 'requestId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (
        !(
          s === "chatId" ||
          s === "requestId" ||
          s === "replyTo" ||
          s === "message" ||
          s === "text" ||
          s === "attachments"
        )
      ) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.chatId !== void 0) {
      let s = a.chatId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/chatId",
            schemaPath: "#/properties/chatId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/chatId",
            schemaPath: "#/properties/chatId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.requestId !== void 0) {
      let s = a.requestId;
      if (typeof s == "string") {
        if (n(s) > 128) {
          const t = {
            instancePath: i + "/requestId",
            schemaPath: "#/properties/requestId/maxLength",
            keyword: "maxLength",
            params: { limit: 128 },
            message: "must NOT have more than 128 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 8) {
          const t = {
            instancePath: i + "/requestId",
            schemaPath: "#/properties/requestId/minLength",
            keyword: "minLength",
            params: { limit: 8 },
            message: "must NOT have fewer than 8 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/requestId",
          schemaPath: "#/properties/requestId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.replyTo !== void 0) {
      let s = a.replyTo;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/replyTo",
            schemaPath: "#/properties/replyTo/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/replyTo",
            schemaPath: "#/properties/replyTo/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/replyTo",
          schemaPath: "#/properties/replyTo/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.message !== void 0) {
      let s = a.message;
      if (typeof s == "string") {
        if (n(s) > 4096) {
          const t = {
            instancePath: i + "/message",
            schemaPath: "#/properties/message/maxLength",
            keyword: "maxLength",
            params: { limit: 4096 },
            message: "must NOT have more than 4096 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/message",
            schemaPath: "#/properties/message/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/message",
          schemaPath: "#/properties/message/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.text !== void 0) {
      let s = a.text;
      if (typeof s == "string") {
        if (n(s) > 4096) {
          const t = {
            instancePath: i + "/text",
            schemaPath: "#/properties/text/maxLength",
            keyword: "maxLength",
            params: { limit: 4096 },
            message: "must NOT have more than 4096 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/text",
            schemaPath: "#/properties/text/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/text",
          schemaPath: "#/properties/text/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.attachments !== void 0) {
      let s = a.attachments;
      if (Array.isArray(s)) {
        if (s.length > 10) {
          const l = {
            instancePath: i + "/attachments",
            schemaPath: "#/properties/attachments/maxItems",
            keyword: "maxItems",
            params: { limit: 10 },
            message: "must NOT have more than 10 items",
          };
          (e === null ? (e = [l]) : e.push(l), r++);
        }
        const t = s.length;
        for (let l = 0; l < t; l++) {
          let f = s[l];
          if (f && typeof f == "object" && !Array.isArray(f)) {
            if (f.file_path === void 0) {
              const p = {
                instancePath: i + "/attachments/" + l,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "file_path" },
                message: "must have required property 'file_path'",
              };
              (e === null ? (e = [p]) : e.push(p), r++);
            }
            for (const p in f)
              if (
                !(
                  p === "file_path" ||
                  p === "kind" ||
                  p === "file_name" ||
                  p === "voice_note"
                )
              ) {
                const o = {
                  instancePath: i + "/attachments/" + l,
                  schemaPath:
                    "#/properties/attachments/items/additionalProperties",
                  keyword: "additionalProperties",
                  params: { additionalProperty: p },
                  message: "must NOT have additional properties",
                };
                (e === null ? (e = [o]) : e.push(o), r++);
              }
            if (f.file_path !== void 0) {
              let p = f.file_path;
              if (typeof p == "string") {
                if (n(p) > 4096) {
                  const o = {
                    instancePath: i + "/attachments/" + l + "/file_path",
                    schemaPath:
                      "#/properties/attachments/items/properties/file_path/maxLength",
                    keyword: "maxLength",
                    params: { limit: 4096 },
                    message: "must NOT have more than 4096 characters",
                  };
                  (e === null ? (e = [o]) : e.push(o), r++);
                }
                if (n(p) < 1) {
                  const o = {
                    instancePath: i + "/attachments/" + l + "/file_path",
                    schemaPath:
                      "#/properties/attachments/items/properties/file_path/minLength",
                    keyword: "minLength",
                    params: { limit: 1 },
                    message: "must NOT have fewer than 1 characters",
                  };
                  (e === null ? (e = [o]) : e.push(o), r++);
                }
              } else {
                const o = {
                  instancePath: i + "/attachments/" + l + "/file_path",
                  schemaPath:
                    "#/properties/attachments/items/properties/file_path/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [o]) : e.push(o), r++);
              }
            }
            if (f.kind !== void 0) {
              let p = f.kind;
              if (typeof p != "string") {
                const o = {
                  instancePath: i + "/attachments/" + l + "/kind",
                  schemaPath:
                    "#/properties/attachments/items/properties/kind/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [o]) : e.push(o), r++);
              }
              if (
                !(
                  p === "auto" ||
                  p === "document" ||
                  p === "image" ||
                  p === "video" ||
                  p === "audio" ||
                  p === "sticker"
                )
              ) {
                const o = {
                  instancePath: i + "/attachments/" + l + "/kind",
                  schemaPath:
                    "#/properties/attachments/items/properties/kind/enum",
                  keyword: "enum",
                  params: {
                    allowedValues:
                      U.properties.attachments.items.properties.kind.enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                (e === null ? (e = [o]) : e.push(o), r++);
              }
            }
            if (f.file_name !== void 0) {
              let p = f.file_name;
              if (typeof p == "string") {
                if (n(p) > 240) {
                  const o = {
                    instancePath: i + "/attachments/" + l + "/file_name",
                    schemaPath:
                      "#/properties/attachments/items/properties/file_name/maxLength",
                    keyword: "maxLength",
                    params: { limit: 240 },
                    message: "must NOT have more than 240 characters",
                  };
                  (e === null ? (e = [o]) : e.push(o), r++);
                }
                if (n(p) < 1) {
                  const o = {
                    instancePath: i + "/attachments/" + l + "/file_name",
                    schemaPath:
                      "#/properties/attachments/items/properties/file_name/minLength",
                    keyword: "minLength",
                    params: { limit: 1 },
                    message: "must NOT have fewer than 1 characters",
                  };
                  (e === null ? (e = [o]) : e.push(o), r++);
                }
              } else {
                const o = {
                  instancePath: i + "/attachments/" + l + "/file_name",
                  schemaPath:
                    "#/properties/attachments/items/properties/file_name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [o]) : e.push(o), r++);
              }
            }
            if (f.voice_note !== void 0 && typeof f.voice_note != "boolean") {
              const p = {
                instancePath: i + "/attachments/" + l + "/voice_note",
                schemaPath:
                  "#/properties/attachments/items/properties/voice_note/type",
                keyword: "type",
                params: { type: "boolean" },
                message: "must be boolean",
              };
              (e === null ? (e = [p]) : e.push(p), r++);
            }
          } else {
            const p = {
              instancePath: i + "/attachments/" + l,
              schemaPath: "#/properties/attachments/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [p]) : e.push(p), r++);
          }
        }
      } else {
        const t = {
          instancePath: i + "/attachments",
          schemaPath: "#/properties/attachments/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((N.errors = e), r === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = q;
function q(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = q.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.requestId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "requestId" },
        message: "must have required property 'requestId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (s !== "requestId") {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.requestId !== void 0) {
      let s = a.requestId;
      if (typeof s == "string") {
        if (n(s) > 128) {
          const t = {
            instancePath: i + "/requestId",
            schemaPath: "#/properties/requestId/maxLength",
            keyword: "maxLength",
            params: { limit: 128 },
            message: "must NOT have more than 128 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 8) {
          const t = {
            instancePath: i + "/requestId",
            schemaPath: "#/properties/requestId/minLength",
            keyword: "minLength",
            params: { limit: 8 },
            message: "must NOT have fewer than 8 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/requestId",
          schemaPath: "#/properties/requestId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((q.errors = e), r === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = _;
function _(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = _.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.messageId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.destination === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "destination" },
        message: "must have required property 'destination'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (!(s === "messageId" || s === "destination")) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.messageId !== void 0) {
      let s = a.messageId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/messageId",
          schemaPath: "#/properties/messageId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.destination !== void 0) {
      let s = a.destination;
      if (typeof s == "string") {
        if (n(s) > 4096) {
          const t = {
            instancePath: i + "/destination",
            schemaPath: "#/properties/destination/maxLength",
            keyword: "maxLength",
            params: { limit: 4096 },
            message: "must NOT have more than 4096 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/destination",
            schemaPath: "#/properties/destination/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/destination",
          schemaPath: "#/properties/destination/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((_.errors = e), r === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = x;
function x(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = x.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.messageId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.reaction === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reaction" },
        message: "must have required property 'reaction'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.requestId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "requestId" },
        message: "must have required property 'requestId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (!(s === "messageId" || s === "reaction" || s === "requestId")) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.messageId !== void 0) {
      let s = a.messageId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/messageId",
          schemaPath: "#/properties/messageId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.reaction !== void 0) {
      let s = a.reaction;
      if (typeof s == "string") {
        if (n(s) > 32) {
          const t = {
            instancePath: i + "/reaction",
            schemaPath: "#/properties/reaction/maxLength",
            keyword: "maxLength",
            params: { limit: 32 },
            message: "must NOT have more than 32 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/reaction",
          schemaPath: "#/properties/reaction/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.requestId !== void 0) {
      let s = a.requestId;
      if (typeof s == "string") {
        if (n(s) > 128) {
          const t = {
            instancePath: i + "/requestId",
            schemaPath: "#/properties/requestId/maxLength",
            keyword: "maxLength",
            params: { limit: 128 },
            message: "must NOT have more than 128 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 8) {
          const t = {
            instancePath: i + "/requestId",
            schemaPath: "#/properties/requestId/minLength",
            keyword: "minLength",
            params: { limit: 8 },
            message: "must NOT have fewer than 8 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/requestId",
          schemaPath: "#/properties/requestId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((x.errors = e), r === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const F = L;
function L(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = L.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.messageId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.text === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "text" },
        message: "must have required property 'text'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.requestId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "requestId" },
        message: "must have required property 'requestId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (!(s === "messageId" || s === "text" || s === "requestId")) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.messageId !== void 0) {
      let s = a.messageId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/messageId",
          schemaPath: "#/properties/messageId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.text !== void 0) {
      let s = a.text;
      if (typeof s == "string") {
        if (n(s) > 4096) {
          const t = {
            instancePath: i + "/text",
            schemaPath: "#/properties/text/maxLength",
            keyword: "maxLength",
            params: { limit: 4096 },
            message: "must NOT have more than 4096 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/text",
            schemaPath: "#/properties/text/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/text",
          schemaPath: "#/properties/text/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.requestId !== void 0) {
      let s = a.requestId;
      if (typeof s == "string") {
        if (n(s) > 128) {
          const t = {
            instancePath: i + "/requestId",
            schemaPath: "#/properties/requestId/maxLength",
            keyword: "maxLength",
            params: { limit: 128 },
            message: "must NOT have more than 128 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 8) {
          const t = {
            instancePath: i + "/requestId",
            schemaPath: "#/properties/requestId/minLength",
            keyword: "minLength",
            params: { limit: 8 },
            message: "must NOT have fewer than 8 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/requestId",
          schemaPath: "#/properties/requestId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((L.errors = e), r === 0);
}
L.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = T;
function T(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = T.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.messageId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.requestId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "requestId" },
        message: "must have required property 'requestId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (!(s === "messageId" || s === "requestId")) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.messageId !== void 0) {
      let s = a.messageId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/messageId",
          schemaPath: "#/properties/messageId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.requestId !== void 0) {
      let s = a.requestId;
      if (typeof s == "string") {
        if (n(s) > 128) {
          const t = {
            instancePath: i + "/requestId",
            schemaPath: "#/properties/requestId/maxLength",
            keyword: "maxLength",
            params: { limit: 128 },
            message: "must NOT have more than 128 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 8) {
          const t = {
            instancePath: i + "/requestId",
            schemaPath: "#/properties/requestId/minLength",
            keyword: "minLength",
            params: { limit: 8 },
            message: "must NOT have fewer than 8 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/requestId",
          schemaPath: "#/properties/requestId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((T.errors = e), r === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const H = O;
function O(
  a,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: h,
    rootData: d = a,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = O.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.chatId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.beforeMessageId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "beforeMessageId" },
        message: "must have required property 'beforeMessageId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (!(s === "chatId" || s === "beforeMessageId" || s === "count")) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    if (a.chatId !== void 0) {
      let s = a.chatId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/chatId",
            schemaPath: "#/properties/chatId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/chatId",
            schemaPath: "#/properties/chatId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.beforeMessageId !== void 0) {
      let s = a.beforeMessageId;
      if (typeof s == "string") {
        if (n(s) > 256) {
          const t = {
            instancePath: i + "/beforeMessageId",
            schemaPath: "#/properties/beforeMessageId/maxLength",
            keyword: "maxLength",
            params: { limit: 256 },
            message: "must NOT have more than 256 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (n(s) < 1) {
          const t = {
            instancePath: i + "/beforeMessageId",
            schemaPath: "#/properties/beforeMessageId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      } else {
        const t = {
          instancePath: i + "/beforeMessageId",
          schemaPath: "#/properties/beforeMessageId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
    }
    if (a.count !== void 0) {
      let s = a.count;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: i + "/count",
          schemaPath: "#/properties/count/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), r++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const t = {
            instancePath: i + "/count",
            schemaPath: "#/properties/count/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: i + "/count",
            schemaPath: "#/properties/count/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), r++);
        }
      }
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((O.errors = e), r === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = {
  whatsapp_get_status: D,
  whatsapp_list_chats: j,
  whatsapp_list_contacts: E,
  whatsapp_resolve_recipient: M,
  whatsapp_list_messages: R,
  whatsapp_search_messages: S,
  whatsapp_get_message: V,
  whatsapp_get_chat: $,
  whatsapp_send_message: C,
  whatsapp_get_send_status: Y,
  whatsapp_download_attachment: z,
  whatsapp_react: B,
  whatsapp_edit_message: F,
  whatsapp_delete_message: G,
  whatsapp_request_history: H,
};
exports.NATIVE_TOOL_VALIDATORS = W;
exports.validate_whatsapp_delete_message = G;
exports.validate_whatsapp_download_attachment = z;
exports.validate_whatsapp_edit_message = F;
exports.validate_whatsapp_get_chat = $;
exports.validate_whatsapp_get_message = V;
exports.validate_whatsapp_get_send_status = Y;
exports.validate_whatsapp_get_status = D;
exports.validate_whatsapp_list_chats = j;
exports.validate_whatsapp_list_contacts = E;
exports.validate_whatsapp_list_messages = R;
exports.validate_whatsapp_react = B;
exports.validate_whatsapp_request_history = H;
exports.validate_whatsapp_resolve_recipient = M;
exports.validate_whatsapp_search_messages = S;
exports.validate_whatsapp_send_message = C;
