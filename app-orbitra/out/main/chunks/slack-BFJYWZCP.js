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
      a = new t.Error().stack;
    a &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[a] = "646bb5ce-4ac5-4b3c-827f-9884969bdad5"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-646bb5ce-4ac5-4b3c-827f-9884969bdad5"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const A = y;
function y(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = y.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.fileId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fileId" },
        message: "must have required property 'fileId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "fileId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.fileId !== void 0 && typeof t.fileId != "string") {
      const s = {
        instancePath: a + "/fileId",
        schemaPath: "#/properties/fileId/type",
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
  return ((y.errors = e), i === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = h,
  u = require("ajv/dist/runtime/ucs2length").default,
  Z = new RegExp("^[A-Za-z0-9_+-]+$", "u");
function h(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = h.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.channel === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "channel" },
        message: "must have required property 'channel'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.messageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.emoji === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "emoji" },
        message: "must have required property 'emoji'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "channel" || s === "messageId" || s === "emoji")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.channel !== void 0 && typeof t.channel != "string") {
      const s = {
        instancePath: a + "/channel",
        schemaPath: "#/properties/channel/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.messageId !== void 0 && typeof t.messageId != "string") {
      const s = {
        instancePath: a + "/messageId",
        schemaPath: "#/properties/messageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.emoji !== void 0) {
      let s = t.emoji;
      if (typeof s == "string") {
        if (u(s) > 100) {
          const r = {
            instancePath: a + "/emoji",
            schemaPath: "#/properties/emoji/maxLength",
            keyword: "maxLength",
            params: { limit: 100 },
            message: "must NOT have more than 100 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (u(s) < 1) {
          const r = {
            instancePath: a + "/emoji",
            schemaPath: "#/properties/emoji/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (!Z.test(s)) {
          const r = {
            instancePath: a + "/emoji",
            schemaPath: "#/properties/emoji/pattern",
            keyword: "pattern",
            params: { pattern: "^[A-Za-z0-9_+-]+$" },
            message: 'must match pattern "^[A-Za-z0-9_+-]+$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/emoji",
          schemaPath: "#/properties/emoji/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
  return ((h.errors = e), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const D = g;
function g(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = g.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.title === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.content === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "content" },
        message: "must have required property 'content'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "title" || s === "content" || s === "channel")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.title !== void 0) {
      let s = t.title;
      if (typeof s == "string") {
        if (u(s) > 255) {
          const r = {
            instancePath: a + "/title",
            schemaPath: "#/properties/title/maxLength",
            keyword: "maxLength",
            params: { limit: 255 },
            message: "must NOT have more than 255 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (u(s) < 1) {
          const r = {
            instancePath: a + "/title",
            schemaPath: "#/properties/title/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/title",
          schemaPath: "#/properties/title/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.content !== void 0) {
      let s = t.content;
      if (typeof s == "string") {
        if (u(s) > 1e5) {
          const r = {
            instancePath: a + "/content",
            schemaPath: "#/properties/content/maxLength",
            keyword: "maxLength",
            params: { limit: 1e5 },
            message: "must NOT have more than 100000 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (u(s) < 1) {
          const r = {
            instancePath: a + "/content",
            schemaPath: "#/properties/content/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/content",
          schemaPath: "#/properties/content/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.channel !== void 0 && typeof t.channel != "string") {
      const s = {
        instancePath: a + "/channel",
        schemaPath: "#/properties/channel/type",
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
  return ((g.errors = e), i === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const x = k;
function k(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = k.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.channel === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "channel" },
        message: "must have required property 'channel'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.messageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "channel" || s === "messageId")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.channel !== void 0 && typeof t.channel != "string") {
      const s = {
        instancePath: a + "/channel",
        schemaPath: "#/properties/channel/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.messageId !== void 0 && typeof t.messageId != "string") {
      const s = {
        instancePath: a + "/messageId",
        schemaPath: "#/properties/messageId/type",
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
const T = b;
function b(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = b.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.channel === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "channel" },
        message: "must have required property 'channel'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.messageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "channel" || s === "messageId")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.channel !== void 0 && typeof t.channel != "string") {
      const s = {
        instancePath: a + "/channel",
        schemaPath: "#/properties/channel/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.messageId !== void 0 && typeof t.messageId != "string") {
      const s = {
        instancePath: a + "/messageId",
        schemaPath: "#/properties/messageId/type",
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
  return ((b.errors = e), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const O = P;
function P(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = P.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.query === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "query" ||
          s === "maxResults" ||
          s === "lookbackDays" ||
          s === "limit" ||
          s === "cursor"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.query !== void 0 && typeof t.query != "string") {
      const s = {
        instancePath: a + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.maxResults !== void 0) {
      let s = t.maxResults;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 20 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 20 },
            message: "must be <= 20",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.lookbackDays !== void 0) {
      let s = t.lookbackDays;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/lookbackDays",
          schemaPath: "#/properties/lookbackDays/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/lookbackDays",
            schemaPath: "#/properties/lookbackDays/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/lookbackDays",
            schemaPath: "#/properties/lookbackDays/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
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
const L = v;
function v(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = v.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!(s === "query" || s === "limit" || s === "cursor")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.query !== void 0 && typeof t.query != "string") {
      const s = {
        instancePath: a + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
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
  return ((v.errors = e), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = w,
  $ = {
    properties: { types: { items: { enum: ["channel", "dm", "group_dm"] } } },
  };
function w(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = w.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "query" ||
          s === "types" ||
          s === "excludeArchived" ||
          s === "limit" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.query !== void 0 && typeof t.query != "string") {
      const s = {
        instancePath: a + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.types !== void 0) {
      let s = t.types;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let c = 0; c < r; c++) {
          let f = s[c];
          if (typeof f != "string") {
            const d = {
              instancePath: a + "/types/" + c,
              schemaPath: "#/properties/types/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), i++);
          }
          if (!(f === "channel" || f === "dm" || f === "group_dm")) {
            const d = {
              instancePath: a + "/types/" + c,
              schemaPath: "#/properties/types/items/enum",
              keyword: "enum",
              params: { allowedValues: $.properties.types.items.enum },
              message: "must be equal to one of the allowed values",
            };
            (e === null ? (e = [d]) : e.push(d), i++);
          }
        }
      } else {
        const r = {
          instancePath: a + "/types",
          schemaPath: "#/properties/types/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.excludeArchived !== void 0 && typeof t.excludeArchived != "boolean") {
      const s = {
        instancePath: a + "/excludeArchived",
        schemaPath: "#/properties/excludeArchived/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 999 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 999 },
            message: "must be <= 999",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.start !== void 0) {
      let s = t.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.end !== void 0) {
      let s = t.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
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
  return ((w.errors = e), i === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = _;
function _(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = _.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.channel === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "channel" },
        message: "must have required property 'channel'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "channel" ||
          s === "limit" ||
          s === "oldest" ||
          s === "latest" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.channel !== void 0 && typeof t.channel != "string") {
      const s = {
        instancePath: a + "/channel",
        schemaPath: "#/properties/channel/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.oldest !== void 0 && typeof t.oldest != "string") {
      const s = {
        instancePath: a + "/oldest",
        schemaPath: "#/properties/oldest/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.latest !== void 0 && typeof t.latest != "string") {
      const s = {
        instancePath: a + "/latest",
        schemaPath: "#/properties/latest/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.start !== void 0) {
      let s = t.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.end !== void 0) {
      let s = t.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
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
  return ((_.errors = e), i === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = N;
function N(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = N.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.channel === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "channel" },
        message: "must have required property 'channel'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.threadId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "threadId" },
        message: "must have required property 'threadId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "limit" ||
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "channel" ||
          s === "threadId"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.start !== void 0) {
      let s = t.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.end !== void 0) {
      let s = t.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.channel !== void 0 && typeof t.channel != "string") {
      const s = {
        instancePath: a + "/channel",
        schemaPath: "#/properties/channel/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.threadId !== void 0 && typeof t.threadId != "string") {
      const s = {
        instancePath: a + "/threadId",
        schemaPath: "#/properties/threadId/type",
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
  return ((N.errors = e), i === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = I;
function I(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = I.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!(s === "userId" || s === "includeLocale")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.userId !== void 0 && typeof t.userId != "string") {
      const s = {
        instancePath: a + "/userId",
        schemaPath: "#/properties/userId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.includeLocale !== void 0 && typeof t.includeLocale != "boolean") {
      const s = {
        instancePath: a + "/includeLocale",
        schemaPath: "#/properties/includeLocale/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
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
const z = q,
  M = { properties: { action: { enum: ["append", "prepend", "replace"] } } };
function q(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = q.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.canvasId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "canvasId" },
        message: "must have required property 'canvasId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.action === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "action" },
        message: "must have required property 'action'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.content === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "content" },
        message: "must have required property 'content'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "canvasId" ||
          s === "action" ||
          s === "content" ||
          s === "sectionId"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.canvasId !== void 0 && typeof t.canvasId != "string") {
      const s = {
        instancePath: a + "/canvasId",
        schemaPath: "#/properties/canvasId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.action !== void 0) {
      let s = t.action;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (!(s === "append" || s === "prepend" || s === "replace")) {
        const r = {
          instancePath: a + "/action",
          schemaPath: "#/properties/action/enum",
          keyword: "enum",
          params: { allowedValues: M.properties.action.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.content !== void 0) {
      let s = t.content;
      if (typeof s == "string") {
        if (u(s) > 1e5) {
          const r = {
            instancePath: a + "/content",
            schemaPath: "#/properties/content/maxLength",
            keyword: "maxLength",
            params: { limit: 1e5 },
            message: "must NOT have more than 100000 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (u(s) < 1) {
          const r = {
            instancePath: a + "/content",
            schemaPath: "#/properties/content/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/content",
          schemaPath: "#/properties/content/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.sectionId !== void 0 && typeof t.sectionId != "string") {
      const s = {
        instancePath: a + "/sectionId",
        schemaPath: "#/properties/sectionId/type",
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
  return ((q.errors = e), i === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = {
  slack_download_file: A,
  slack_add_reaction: j,
  slack_create_canvas: D,
  slack_delete_message: x,
  slack_get_reactions: T,
  slack_search_messages: O,
  slack_search_users: L,
  slack_list_channels: E,
  slack_read_channel: R,
  slack_read_thread: S,
  slack_read_user_profile: V,
  slack_update_canvas: z,
};
exports.NATIVE_TOOL_VALIDATORS = Y;
exports.validate_slack_add_reaction = j;
exports.validate_slack_create_canvas = D;
exports.validate_slack_delete_message = x;
exports.validate_slack_download_file = A;
exports.validate_slack_get_reactions = T;
exports.validate_slack_list_channels = E;
exports.validate_slack_read_channel = R;
exports.validate_slack_read_thread = S;
exports.validate_slack_read_user_profile = V;
exports.validate_slack_search_messages = O;
exports.validate_slack_search_users = L;
exports.validate_slack_update_canvas = z;
