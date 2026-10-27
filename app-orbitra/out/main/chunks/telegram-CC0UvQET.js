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
      i = new t.Error().stack;
    i &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[i] = "e69142b0-5b61-4190-a5b7-c1d024ba8b89"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-e69142b0-5b61-4190-a5b7-c1d024ba8b89"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const M = g,
  R = {
    properties: { parseMode: { enum: ["MarkdownV2", "HTML", "Markdown"] } },
  };
function g(
  t,
  {
    instancePath: i = "",
    parentData: f,
    parentDataProperty: c,
    rootData: y = t,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = g.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.chatId === void 0) {
      const a = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [a]) : e.push(a), r++);
    }
    if (t.text === void 0) {
      const a = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "text" },
        message: "must have required property 'text'",
      };
      (e === null ? (e = [a]) : e.push(a), r++);
    }
    for (const a in t)
      if (
        !(
          a === "chatId" ||
          a === "text" ||
          a === "parseMode" ||
          a === "disableNotification" ||
          a === "replyMarkup" ||
          a === "replyToMessageId"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: a },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.chatId !== void 0) {
      let a = t.chatId;
      const n = r;
      let l = !1;
      const d = r;
      if (typeof a != "string") {
        const u = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [u]) : e.push(u), r++);
      }
      var o = d === r;
      l = l || o;
      const p = r;
      if (typeof a != "number") {
        const u = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [u]) : e.push(u), r++);
      }
      var o = p === r;
      if (((l = l || o), l))
        ((r = n), e !== null && (n ? (e.length = n) : (e = null)));
      else {
        const u = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [u]) : e.push(u), r++);
      }
    }
    if (t.text !== void 0 && typeof t.text != "string") {
      const a = {
        instancePath: i + "/text",
        schemaPath: "#/properties/text/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), r++);
    }
    if (t.parseMode !== void 0) {
      let a = t.parseMode;
      if (typeof a != "string") {
        const n = {
          instancePath: i + "/parseMode",
          schemaPath: "#/properties/parseMode/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (!(a === "MarkdownV2" || a === "HTML" || a === "Markdown")) {
        const n = {
          instancePath: i + "/parseMode",
          schemaPath: "#/properties/parseMode/enum",
          keyword: "enum",
          params: { allowedValues: R.properties.parseMode.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    }
    if (
      t.disableNotification !== void 0 &&
      typeof t.disableNotification != "boolean"
    ) {
      const a = {
        instancePath: i + "/disableNotification",
        schemaPath: "#/properties/disableNotification/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [a]) : e.push(a), r++);
    }
    if (t.replyMarkup !== void 0) {
      let a = t.replyMarkup;
      if (a && typeof a == "object" && !Array.isArray(a))
        for (const n in a) {
          const l = r;
          if (typeof n != "string") {
            const d = {
              instancePath: i + "/replyMarkup",
              schemaPath: "#/properties/replyMarkup/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: n,
            };
            (e === null ? (e = [d]) : e.push(d), r++);
          }
          var s = l === r;
          if (!s) {
            const d = {
              instancePath: i + "/replyMarkup",
              schemaPath: "#/properties/replyMarkup/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: n },
              message: "property name must be valid",
            };
            (e === null ? (e = [d]) : e.push(d), r++);
          }
        }
      else {
        const n = {
          instancePath: i + "/replyMarkup",
          schemaPath: "#/properties/replyMarkup/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    }
    if (t.replyToMessageId !== void 0) {
      let a = t.replyToMessageId;
      if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
        const n = {
          instancePath: i + "/replyToMessageId",
          schemaPath: "#/properties/replyToMessageId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof a == "number") {
        if (a > 9007199254740991 || isNaN(a)) {
          const n = {
            instancePath: i + "/replyToMessageId",
            schemaPath: "#/properties/replyToMessageId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (a < -9007199254740991 || isNaN(a)) {
          const n = {
            instancePath: i + "/replyToMessageId",
            schemaPath: "#/properties/replyToMessageId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
  } else {
    const a = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [a]) : e.push(a), r++);
  }
  return ((g.errors = e), r === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const T = b;
function b(
  t,
  {
    instancePath: i = "",
    parentData: f,
    parentDataProperty: c,
    rootData: y = t,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = b.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.chatId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.document === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "chatId" || s === "document" || s === "caption")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
    if (t.chatId !== void 0) {
      let s = t.chatId;
      const a = r;
      let n = !1;
      const l = r;
      if (typeof s != "string") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = l === r;
      n = n || o;
      const d = r;
      if (typeof s != "number") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = d === r;
      if (((n = n || o), n))
        ((r = a), e !== null && (a ? (e.length = a) : (e = null)));
      else {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
    }
    if (t.document !== void 0 && typeof t.document != "string") {
      const s = {
        instancePath: i + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.caption !== void 0 && typeof t.caption != "string") {
      const s = {
        instancePath: i + "/caption",
        schemaPath: "#/properties/caption/type",
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
const x = I;
function I(
  t,
  {
    instancePath: i = "",
    parentData: f,
    parentDataProperty: c,
    rootData: y = t,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = I.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.chatId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.photo === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "photo" },
        message: "must have required property 'photo'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "chatId" || s === "photo" || s === "caption")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
    if (t.chatId !== void 0) {
      let s = t.chatId;
      const a = r;
      let n = !1;
      const l = r;
      if (typeof s != "string") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = l === r;
      n = n || o;
      const d = r;
      if (typeof s != "number") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = d === r;
      if (((n = n || o), n))
        ((r = a), e !== null && (a ? (e.length = a) : (e = null)));
      else {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
    }
    if (t.photo !== void 0 && typeof t.photo != "string") {
      const s = {
        instancePath: i + "/photo",
        schemaPath: "#/properties/photo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.caption !== void 0 && typeof t.caption != "string") {
      const s = {
        instancePath: i + "/caption",
        schemaPath: "#/properties/caption/type",
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
const D = P,
  z = { properties: { type: { enum: ["regular", "quiz"] } } };
function P(
  t,
  {
    instancePath: i = "",
    parentData: f,
    parentDataProperty: c,
    rootData: y = t,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = P.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.chatId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.question === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "question" },
        message: "must have required property 'question'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.options === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "options" },
        message: "must have required property 'options'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (
        !(
          s === "chatId" ||
          s === "question" ||
          s === "options" ||
          s === "isAnonymous" ||
          s === "allowsMultipleAnswers" ||
          s === "type" ||
          s === "correctOptionId"
        )
      ) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
    if (t.chatId !== void 0) {
      let s = t.chatId;
      const a = r;
      let n = !1;
      const l = r;
      if (typeof s != "string") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = l === r;
      n = n || o;
      const d = r;
      if (typeof s != "number") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = d === r;
      if (((n = n || o), n))
        ((r = a), e !== null && (a ? (e.length = a) : (e = null)));
      else {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
    }
    if (t.question !== void 0 && typeof t.question != "string") {
      const s = {
        instancePath: i + "/question",
        schemaPath: "#/properties/question/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.options !== void 0) {
      let s = t.options;
      if (Array.isArray(s)) {
        if (s.length > 10) {
          const n = {
            instancePath: i + "/options",
            schemaPath: "#/properties/options/maxItems",
            keyword: "maxItems",
            params: { limit: 10 },
            message: "must NOT have more than 10 items",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s.length < 2) {
          const n = {
            instancePath: i + "/options",
            schemaPath: "#/properties/options/minItems",
            keyword: "minItems",
            params: { limit: 2 },
            message: "must NOT have fewer than 2 items",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        const a = s.length;
        for (let n = 0; n < a; n++)
          if (typeof s[n] != "string") {
            const l = {
              instancePath: i + "/options/" + n,
              schemaPath: "#/properties/options/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [l]) : e.push(l), r++);
          }
      } else {
        const a = {
          instancePath: i + "/options",
          schemaPath: "#/properties/options/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
    }
    if (t.isAnonymous !== void 0 && typeof t.isAnonymous != "boolean") {
      const s = {
        instancePath: i + "/isAnonymous",
        schemaPath: "#/properties/isAnonymous/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.allowsMultipleAnswers !== void 0 &&
      typeof t.allowsMultipleAnswers != "boolean"
    ) {
      const s = {
        instancePath: i + "/allowsMultipleAnswers",
        schemaPath: "#/properties/allowsMultipleAnswers/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.type !== void 0) {
      let s = t.type;
      if (typeof s != "string") {
        const a = {
          instancePath: i + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
      if (!(s === "regular" || s === "quiz")) {
        const a = {
          instancePath: i + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: z.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
    }
    if (t.correctOptionId !== void 0) {
      let s = t.correctOptionId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/correctOptionId",
          schemaPath: "#/properties/correctOptionId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/correctOptionId",
            schemaPath: "#/properties/correctOptionId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/correctOptionId",
            schemaPath: "#/properties/correctOptionId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), r++);
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
  return ((P.errors = e), r === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = w;
function w(
  t,
  {
    instancePath: i = "",
    parentData: f,
    parentDataProperty: c,
    rootData: y = t,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = w.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.chatId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "chatId") {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
    if (t.chatId !== void 0) {
      let s = t.chatId;
      const a = r;
      let n = !1;
      const l = r;
      if (typeof s != "string") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = l === r;
      n = n || o;
      const d = r;
      if (typeof s != "number") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = d === r;
      if (((n = n || o), n))
        ((r = a), e !== null && (a ? (e.length = a) : (e = null)));
      else {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
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
  return ((w.errors = e), r === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = k;
function k(
  t,
  {
    instancePath: i = "",
    parentData: f,
    parentDataProperty: c,
    rootData: y = t,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = k.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const o in t)
      if (!(o === "offset" || o === "limit" || o === "timeout")) {
        const s = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: o },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (t.offset !== void 0) {
      let o = t.offset;
      if (!(typeof o == "number" && !(o % 1) && !isNaN(o))) {
        const s = {
          instancePath: i + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (typeof o == "number") {
        if (o > 9007199254740991 || isNaN(o)) {
          const s = {
            instancePath: i + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (o < -9007199254740991 || isNaN(o)) {
          const s = {
            instancePath: i + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      }
    }
    if (t.limit !== void 0) {
      let o = t.limit;
      if (!(typeof o == "number" && !(o % 1) && !isNaN(o))) {
        const s = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (typeof o == "number") {
        if (o > 100 || isNaN(o)) {
          const s = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (o < 1 || isNaN(o)) {
          const s = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      }
    }
    if (t.timeout !== void 0) {
      let o = t.timeout;
      if (!(typeof o == "number" && !(o % 1) && !isNaN(o))) {
        const s = {
          instancePath: i + "/timeout",
          schemaPath: "#/properties/timeout/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (typeof o == "number") {
        if (o > 9007199254740991 || isNaN(o)) {
          const s = {
            instancePath: i + "/timeout",
            schemaPath: "#/properties/timeout/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (o < 0 || isNaN(o)) {
          const s = {
            instancePath: i + "/timeout",
            schemaPath: "#/properties/timeout/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      }
    }
  } else {
    const o = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [o]) : e.push(o), r++);
  }
  return ((k.errors = e), r === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = v,
  Y = {
    properties: { parseMode: { enum: ["MarkdownV2", "HTML", "Markdown"] } },
  };
function v(
  t,
  {
    instancePath: i = "",
    parentData: f,
    parentDataProperty: c,
    rootData: y = t,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = v.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.chatId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.messageId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.text === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "text" },
        message: "must have required property 'text'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (
        !(
          s === "chatId" ||
          s === "messageId" ||
          s === "text" ||
          s === "parseMode"
        )
      ) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
    if (t.chatId !== void 0) {
      let s = t.chatId;
      const a = r;
      let n = !1;
      const l = r;
      if (typeof s != "string") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = l === r;
      n = n || o;
      const d = r;
      if (typeof s != "number") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = d === r;
      if (((n = n || o), n))
        ((r = a), e !== null && (a ? (e.length = a) : (e = null)));
      else {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
    }
    if (t.messageId !== void 0) {
      let s = t.messageId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/messageId",
          schemaPath: "#/properties/messageId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), r++);
        }
      }
    }
    if (t.text !== void 0 && typeof t.text != "string") {
      const s = {
        instancePath: i + "/text",
        schemaPath: "#/properties/text/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.parseMode !== void 0) {
      let s = t.parseMode;
      if (typeof s != "string") {
        const a = {
          instancePath: i + "/parseMode",
          schemaPath: "#/properties/parseMode/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
      if (!(s === "MarkdownV2" || s === "HTML" || s === "Markdown")) {
        const a = {
          instancePath: i + "/parseMode",
          schemaPath: "#/properties/parseMode/enum",
          keyword: "enum",
          params: { allowedValues: Y.properties.parseMode.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
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
const V = _;
function _(
  t,
  {
    instancePath: i = "",
    parentData: f,
    parentDataProperty: c,
    rootData: y = t,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = _.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.chatId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.messageId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "chatId" || s === "messageId")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
    if (t.chatId !== void 0) {
      let s = t.chatId;
      const a = r;
      let n = !1;
      const l = r;
      if (typeof s != "string") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = l === r;
      n = n || o;
      const d = r;
      if (typeof s != "number") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = d === r;
      if (((n = n || o), n))
        ((r = a), e !== null && (a ? (e.length = a) : (e = null)));
      else {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
    }
    if (t.messageId !== void 0) {
      let s = t.messageId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/messageId",
          schemaPath: "#/properties/messageId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), r++);
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
  return ((_.errors = e), r === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = N;
function N(
  t,
  {
    instancePath: i = "",
    parentData: f,
    parentDataProperty: c,
    rootData: y = t,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = N.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.chatId === void 0) {
      const a = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [a]) : e.push(a), r++);
    }
    if (t.fromChatId === void 0) {
      const a = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fromChatId" },
        message: "must have required property 'fromChatId'",
      };
      (e === null ? (e = [a]) : e.push(a), r++);
    }
    if (t.messageId === void 0) {
      const a = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [a]) : e.push(a), r++);
    }
    for (const a in t)
      if (
        !(
          a === "chatId" ||
          a === "fromChatId" ||
          a === "messageId" ||
          a === "disableNotification"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: a },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.chatId !== void 0) {
      let a = t.chatId;
      const n = r;
      let l = !1;
      const d = r;
      if (typeof a != "string") {
        const u = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [u]) : e.push(u), r++);
      }
      var o = d === r;
      l = l || o;
      const p = r;
      if (typeof a != "number") {
        const u = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [u]) : e.push(u), r++);
      }
      var o = p === r;
      if (((l = l || o), l))
        ((r = n), e !== null && (n ? (e.length = n) : (e = null)));
      else {
        const u = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [u]) : e.push(u), r++);
      }
    }
    if (t.fromChatId !== void 0) {
      let a = t.fromChatId;
      const n = r;
      let l = !1;
      const d = r;
      if (typeof a != "string") {
        const u = {
          instancePath: i + "/fromChatId",
          schemaPath: "#/properties/fromChatId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [u]) : e.push(u), r++);
      }
      var s = d === r;
      l = l || s;
      const p = r;
      if (typeof a != "number") {
        const u = {
          instancePath: i + "/fromChatId",
          schemaPath: "#/properties/fromChatId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [u]) : e.push(u), r++);
      }
      var s = p === r;
      if (((l = l || s), l))
        ((r = n), e !== null && (n ? (e.length = n) : (e = null)));
      else {
        const u = {
          instancePath: i + "/fromChatId",
          schemaPath: "#/properties/fromChatId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [u]) : e.push(u), r++);
      }
    }
    if (t.messageId !== void 0) {
      let a = t.messageId;
      if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
        const n = {
          instancePath: i + "/messageId",
          schemaPath: "#/properties/messageId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof a == "number") {
        if (a > 9007199254740991 || isNaN(a)) {
          const n = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (a < -9007199254740991 || isNaN(a)) {
          const n = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (
      t.disableNotification !== void 0 &&
      typeof t.disableNotification != "boolean"
    ) {
      const a = {
        instancePath: i + "/disableNotification",
        schemaPath: "#/properties/disableNotification/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [a]) : e.push(a), r++);
    }
  } else {
    const a = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [a]) : e.push(a), r++);
  }
  return ((N.errors = e), r === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Q = O;
function O(
  t,
  {
    instancePath: i = "",
    parentData: f,
    parentDataProperty: c,
    rootData: y = t,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = O.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  )
    for (const o in t) {
      const s = {
        instancePath: i,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: o },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  else {
    const o = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [o]) : e.push(o), r++);
  }
  return ((O.errors = e), r === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = q;
function q(
  t,
  {
    instancePath: i = "",
    parentData: f,
    parentDataProperty: c,
    rootData: y = t,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = q.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.chatId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chatId" },
        message: "must have required property 'chatId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.messageId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (
        !(s === "chatId" || s === "messageId" || s === "disableNotification")
      ) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
    if (t.chatId !== void 0) {
      let s = t.chatId;
      const a = r;
      let n = !1;
      const l = r;
      if (typeof s != "string") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = l === r;
      n = n || o;
      const d = r;
      if (typeof s != "number") {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
      var o = d === r;
      if (((n = n || o), n))
        ((r = a), e !== null && (a ? (e.length = a) : (e = null)));
      else {
        const p = {
          instancePath: i + "/chatId",
          schemaPath: "#/properties/chatId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [p]) : e.push(p), r++);
      }
    }
    if (t.messageId !== void 0) {
      let s = t.messageId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/messageId",
          schemaPath: "#/properties/messageId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/messageId",
            schemaPath: "#/properties/messageId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), r++);
        }
      }
    }
    if (
      t.disableNotification !== void 0 &&
      typeof t.disableNotification != "boolean"
    ) {
      const s = {
        instancePath: i + "/disableNotification",
        schemaPath: "#/properties/disableNotification/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
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
  return ((q.errors = e), r === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const H = A;
function A(
  t,
  {
    instancePath: i = "",
    parentData: f,
    parentDataProperty: c,
    rootData: y = t,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    r = 0;
  const m = A.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.callbackQueryId === void 0) {
      const o = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "callbackQueryId" },
        message: "must have required property 'callbackQueryId'",
      };
      (e === null ? (e = [o]) : e.push(o), r++);
    }
    for (const o in t)
      if (
        !(
          o === "callbackQueryId" ||
          o === "text" ||
          o === "showAlert" ||
          o === "url" ||
          o === "cacheTime"
        )
      ) {
        const s = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: o },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (t.callbackQueryId !== void 0 && typeof t.callbackQueryId != "string") {
      const o = {
        instancePath: i + "/callbackQueryId",
        schemaPath: "#/properties/callbackQueryId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), r++);
    }
    if (t.text !== void 0 && typeof t.text != "string") {
      const o = {
        instancePath: i + "/text",
        schemaPath: "#/properties/text/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), r++);
    }
    if (t.showAlert !== void 0 && typeof t.showAlert != "boolean") {
      const o = {
        instancePath: i + "/showAlert",
        schemaPath: "#/properties/showAlert/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [o]) : e.push(o), r++);
    }
    if (t.url !== void 0 && typeof t.url != "string") {
      const o = {
        instancePath: i + "/url",
        schemaPath: "#/properties/url/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), r++);
    }
    if (t.cacheTime !== void 0) {
      let o = t.cacheTime;
      if (!(typeof o == "number" && !(o % 1) && !isNaN(o))) {
        const s = {
          instancePath: i + "/cacheTime",
          schemaPath: "#/properties/cacheTime/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (typeof o == "number") {
        if (o > 9007199254740991 || isNaN(o)) {
          const s = {
            instancePath: i + "/cacheTime",
            schemaPath: "#/properties/cacheTime/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (o < -9007199254740991 || isNaN(o)) {
          const s = {
            instancePath: i + "/cacheTime",
            schemaPath: "#/properties/cacheTime/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      }
    }
  } else {
    const o = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [o]) : e.push(o), r++);
  }
  return ((A.errors = e), r === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = {
  telegram_send_message: M,
  telegram_send_document: T,
  telegram_send_photo: x,
  telegram_send_poll: D,
  telegram_get_chat: j,
  telegram_get_updates: E,
  telegram_edit_message: C,
  telegram_delete_message: V,
  telegram_forward_message: L,
  telegram_get_me: Q,
  telegram_pin_message: S,
  telegram_answer_callback_query: H,
};
exports.NATIVE_TOOL_VALIDATORS = B;
exports.validate_telegram_answer_callback_query = H;
exports.validate_telegram_delete_message = V;
exports.validate_telegram_edit_message = C;
exports.validate_telegram_forward_message = L;
exports.validate_telegram_get_chat = j;
exports.validate_telegram_get_me = Q;
exports.validate_telegram_get_updates = E;
exports.validate_telegram_pin_message = S;
exports.validate_telegram_send_document = T;
exports.validate_telegram_send_message = M;
exports.validate_telegram_send_photo = x;
exports.validate_telegram_send_poll = D;
