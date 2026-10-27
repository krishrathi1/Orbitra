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
      n = new t.Error().stack;
    n &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[n] = "c690921e-e358-4afb-92de-0d169592a2c2"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-c690921e-e358-4afb-92de-0d169592a2c2"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const R = f;
function f(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = f.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.conversationId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "conversationId" },
        message: "must have required property 'conversationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.body === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "body" },
        message: "must have required property 'body'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "conversationId" || s === "body")) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.conversationId !== void 0 && typeof t.conversationId != "string") {
      const s = {
        instancePath: n + "/conversationId",
        schemaPath: "#/properties/conversationId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.body !== void 0 && typeof t.body != "string") {
      const s = {
        instancePath: n + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((f.errors = e), i === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = y;
function y(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = y.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.conversationId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "conversationId" },
        message: "must have required property 'conversationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.tagIds === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tagIds" },
        message: "must have required property 'tagIds'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "conversationId" || s === "tagIds")) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.conversationId !== void 0 && typeof t.conversationId != "string") {
      const s = {
        instancePath: n + "/conversationId",
        schemaPath: "#/properties/conversationId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.tagIds !== void 0) {
      let s = t.tagIds;
      if (Array.isArray(s)) {
        if (s.length < 1) {
          const a = {
            instancePath: n + "/tagIds",
            schemaPath: "#/properties/tagIds/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [a]) : e.push(a), i++);
        }
        const r = s.length;
        for (let a = 0; a < r; a++)
          if (typeof s[a] != "string") {
            const d = {
              instancePath: n + "/tagIds/" + a,
              schemaPath: "#/properties/tagIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), i++);
          }
      } else {
        const r = {
          instancePath: n + "/tagIds",
          schemaPath: "#/properties/tagIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
  } else {
    const s = {
      instancePath: n,
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
const V = c;
function c(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = c.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.conversationId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "conversationId" },
        message: "must have required property 'conversationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "conversationId") {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.conversationId !== void 0 && typeof t.conversationId != "string") {
      const s = {
        instancePath: n + "/conversationId",
        schemaPath: "#/properties/conversationId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((c.errors = e), i === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = h;
function h(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = h.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.conversationId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "conversationId" },
        message: "must have required property 'conversationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.assigneeId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "assigneeId" },
        message: "must have required property 'assigneeId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "conversationId" || s === "assigneeId")) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.conversationId !== void 0 && typeof t.conversationId != "string") {
      const s = {
        instancePath: n + "/conversationId",
        schemaPath: "#/properties/conversationId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.assigneeId !== void 0 && typeof t.assigneeId != "string") {
      const s = {
        instancePath: n + "/assigneeId",
        schemaPath: "#/properties/assigneeId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const H = g,
  E = {
    properties: {
      bodyFormat: { enum: ["text", "html"] },
      mode: { enum: ["send", "draft"] },
    },
  };
function g(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = g.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.channelId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "channelId" },
        message: "must have required property 'channelId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.to === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "to" },
        message: "must have required property 'to'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.body === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "body" },
        message: "must have required property 'body'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "channelId" ||
          s === "to" ||
          s === "subject" ||
          s === "body" ||
          s === "bodyFormat" ||
          s === "cc" ||
          s === "bcc" ||
          s === "mode"
        )
      ) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.channelId !== void 0 && typeof t.channelId != "string") {
      const s = {
        instancePath: n + "/channelId",
        schemaPath: "#/properties/channelId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.to !== void 0) {
      let s = t.to;
      if (Array.isArray(s)) {
        if (s.length < 1) {
          const a = {
            instancePath: n + "/to",
            schemaPath: "#/properties/to/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [a]) : e.push(a), i++);
        }
        const r = s.length;
        for (let a = 0; a < r; a++)
          if (typeof s[a] != "string") {
            const d = {
              instancePath: n + "/to/" + a,
              schemaPath: "#/properties/to/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), i++);
          }
      } else {
        const r = {
          instancePath: n + "/to",
          schemaPath: "#/properties/to/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.subject !== void 0 && typeof t.subject != "string") {
      const s = {
        instancePath: n + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.body !== void 0 && typeof t.body != "string") {
      const s = {
        instancePath: n + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.bodyFormat !== void 0) {
      let s = t.bodyFormat;
      if (typeof s != "string") {
        const r = {
          instancePath: n + "/bodyFormat",
          schemaPath: "#/properties/bodyFormat/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (!(s === "text" || s === "html")) {
        const r = {
          instancePath: n + "/bodyFormat",
          schemaPath: "#/properties/bodyFormat/enum",
          keyword: "enum",
          params: { allowedValues: E.properties.bodyFormat.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.cc !== void 0) {
      let s = t.cc;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let a = 0; a < r; a++)
          if (typeof s[a] != "string") {
            const d = {
              instancePath: n + "/cc/" + a,
              schemaPath: "#/properties/cc/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), i++);
          }
      } else {
        const r = {
          instancePath: n + "/cc",
          schemaPath: "#/properties/cc/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.bcc !== void 0) {
      let s = t.bcc;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let a = 0; a < r; a++)
          if (typeof s[a] != "string") {
            const d = {
              instancePath: n + "/bcc/" + a,
              schemaPath: "#/properties/bcc/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), i++);
          }
      } else {
        const r = {
          instancePath: n + "/bcc",
          schemaPath: "#/properties/bcc/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.mode !== void 0) {
      let s = t.mode;
      if (typeof s != "string") {
        const r = {
          instancePath: n + "/mode",
          schemaPath: "#/properties/mode/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (!(s === "send" || s === "draft")) {
        const r = {
          instancePath: n + "/mode",
          schemaPath: "#/properties/mode/enum",
          keyword: "enum",
          params: { allowedValues: E.properties.mode.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
  } else {
    const s = {
      instancePath: n,
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
const L = b;
function b(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = b.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.contactId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "contactId" },
        message: "must have required property 'contactId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "contactId") {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.contactId !== void 0 && typeof t.contactId != "string") {
      const s = {
        instancePath: n + "/contactId",
        schemaPath: "#/properties/contactId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const C = v;
function v(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = v.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.conversationId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "conversationId" },
        message: "must have required property 'conversationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "conversationId") {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.conversationId !== void 0 && typeof t.conversationId != "string") {
      const s = {
        instancePath: n + "/conversationId",
        schemaPath: "#/properties/conversationId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const M = P;
function P(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = P.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.messageId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "messageId") {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.messageId !== void 0 && typeof t.messageId != "string") {
      const s = {
        instancePath: n + "/messageId",
        schemaPath: "#/properties/messageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const Y = k;
function k(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = k.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(s === "inboxId" || s === "start" || s === "end" || s === "cursor")
      ) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxId !== void 0 && typeof t.inboxId != "string") {
      const s = {
        instancePath: n + "/inboxId",
        schemaPath: "#/properties/inboxId/type",
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
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/start",
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
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/end",
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
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const z = I;
function I(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = I.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "q" ||
          s === "pageToken" ||
          s === "limit" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.q !== void 0 && typeof t.q != "string") {
      const s = {
        instancePath: n + "/q",
        schemaPath: "#/properties/q/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.pageToken !== void 0 && typeof t.pageToken != "string") {
      const s = {
        instancePath: n + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: n + "/limit",
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
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.start !== void 0) {
      let s = t.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/start",
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
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/end",
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
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const G = w;
function w(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = w.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.conversationId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "conversationId" },
        message: "must have required property 'conversationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "conversationId" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.conversationId !== void 0 && typeof t.conversationId != "string") {
      const s = {
        instancePath: n + "/conversationId",
        schemaPath: "#/properties/conversationId/type",
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
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/start",
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
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/end",
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
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const J = _,
  F = {
    properties: {
      inboxId: { type: "string" },
      q: { type: "string" },
      status: { enum: ["open", "archived", "deleted", "spam"], type: "string" },
      assignee: { type: "string" },
      pageToken: { type: "string" },
      limit: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
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
  se = Object.prototype.hasOwnProperty;
function _(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = _.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.inboxId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "inboxId" },
        message: "must have required property 'inboxId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!se.call(F.properties, s)) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxId !== void 0 && typeof t.inboxId != "string") {
      const s = {
        instancePath: n + "/inboxId",
        schemaPath: "#/properties/inboxId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.q !== void 0 && typeof t.q != "string") {
      const s = {
        instancePath: n + "/q",
        schemaPath: "#/properties/q/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.status !== void 0) {
      let s = t.status;
      if (typeof s != "string") {
        const r = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (
        !(s === "open" || s === "archived" || s === "deleted" || s === "spam")
      ) {
        const r = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: F.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.assignee !== void 0 && typeof t.assignee != "string") {
      const s = {
        instancePath: n + "/assignee",
        schemaPath: "#/properties/assignee/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.pageToken !== void 0 && typeof t.pageToken != "string") {
      const s = {
        instancePath: n + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: n + "/limit",
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
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.start !== void 0) {
      let s = t.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/start",
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
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/end",
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
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const K = N;
function N(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = N.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!(s === "start" || s === "end" || s === "cursor")) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.start !== void 0) {
      let s = t.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/start",
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
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/end",
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
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const Q = q;
function q(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = q.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.conversationId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "conversationId" },
        message: "must have required property 'conversationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "conversationId" ||
          s === "pageToken" ||
          s === "limit" ||
          s === "includeHtmlBody" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.conversationId !== void 0 && typeof t.conversationId != "string") {
      const s = {
        instancePath: n + "/conversationId",
        schemaPath: "#/properties/conversationId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.pageToken !== void 0 && typeof t.pageToken != "string") {
      const s = {
        instancePath: n + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: n + "/limit",
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
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.includeHtmlBody !== void 0 && typeof t.includeHtmlBody != "boolean") {
      const s = {
        instancePath: n + "/includeHtmlBody",
        schemaPath: "#/properties/includeHtmlBody/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.start !== void 0) {
      let s = t.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/start",
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
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/end",
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
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const U = A;
function A(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = A.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "limit" ||
          s === "pageToken" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const r = {
          instancePath: n,
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
          instancePath: n + "/limit",
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
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.pageToken !== void 0 && typeof t.pageToken != "string") {
      const s = {
        instancePath: n + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/start",
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
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/end",
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
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((A.errors = e), i === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = j;
function j(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = j.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!(s === "start" || s === "end" || s === "cursor")) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.start !== void 0) {
      let s = t.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/start",
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
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/end",
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
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((j.errors = e), i === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = D;
function D(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = D.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.conversationId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "conversationId" },
        message: "must have required property 'conversationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.tagIds === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tagIds" },
        message: "must have required property 'tagIds'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "conversationId" || s === "tagIds")) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.conversationId !== void 0 && typeof t.conversationId != "string") {
      const s = {
        instancePath: n + "/conversationId",
        schemaPath: "#/properties/conversationId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.tagIds !== void 0) {
      let s = t.tagIds;
      if (Array.isArray(s)) {
        if (s.length < 1) {
          const a = {
            instancePath: n + "/tagIds",
            schemaPath: "#/properties/tagIds/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [a]) : e.push(a), i++);
        }
        const r = s.length;
        for (let a = 0; a < r; a++)
          if (typeof s[a] != "string") {
            const d = {
              instancePath: n + "/tagIds/" + a,
              schemaPath: "#/properties/tagIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), i++);
          }
      } else {
        const r = {
          instancePath: n + "/tagIds",
          schemaPath: "#/properties/tagIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
  } else {
    const s = {
      instancePath: n,
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
const Z = x;
function x(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = x.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.conversationId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "conversationId" },
        message: "must have required property 'conversationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "conversationId") {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.conversationId !== void 0 && typeof t.conversationId != "string") {
      const s = {
        instancePath: n + "/conversationId",
        schemaPath: "#/properties/conversationId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const $ = T;
function T(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = T.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.query === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(s === "query" || s === "pageToken" || s === "limit" || s === "cursor")
      ) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.query !== void 0 && typeof t.query != "string") {
      const s = {
        instancePath: n + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.pageToken !== void 0 && typeof t.pageToken != "string") {
      const s = {
        instancePath: n + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: n + "/limit",
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
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: n + "/limit",
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
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((T.errors = e), i === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ee = O;
function O(
  t,
  {
    instancePath: n = "",
    parentData: m,
    parentDataProperty: p,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = O.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.conversationId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "conversationId" },
        message: "must have required property 'conversationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.body === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "body" },
        message: "must have required property 'body'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "conversationId" || s === "body" || s === "subject")) {
        const r = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.conversationId !== void 0 && typeof t.conversationId != "string") {
      const s = {
        instancePath: n + "/conversationId",
        schemaPath: "#/properties/conversationId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.body !== void 0 && typeof t.body != "string") {
      const s = {
        instancePath: n + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.subject !== void 0 && typeof t.subject != "string") {
      const s = {
        instancePath: n + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((O.errors = e), i === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const re = {
  front_add_comment: R,
  front_add_tag: S,
  front_archive_conversation: V,
  front_assign_conversation: B,
  front_create_conversation: H,
  front_get_contact: L,
  front_get_conversation: C,
  front_get_message: M,
  front_list_channels: Y,
  front_list_contacts: z,
  front_list_conversation_comments: G,
  front_list_conversations: J,
  front_list_inboxes: K,
  front_list_messages: Q,
  front_list_tags: U,
  front_list_teammates: W,
  front_remove_tag: X,
  front_reopen_conversation: Z,
  front_search_conversations: $,
  front_send_message: ee,
};
exports.NATIVE_TOOL_VALIDATORS = re;
exports.validate_front_add_comment = R;
exports.validate_front_add_tag = S;
exports.validate_front_archive_conversation = V;
exports.validate_front_assign_conversation = B;
exports.validate_front_create_conversation = H;
exports.validate_front_get_contact = L;
exports.validate_front_get_conversation = C;
exports.validate_front_get_message = M;
exports.validate_front_list_channels = Y;
exports.validate_front_list_contacts = z;
exports.validate_front_list_conversation_comments = G;
exports.validate_front_list_conversations = J;
exports.validate_front_list_inboxes = K;
exports.validate_front_list_messages = Q;
exports.validate_front_list_tags = U;
exports.validate_front_list_teammates = W;
exports.validate_front_remove_tag = X;
exports.validate_front_reopen_conversation = Z;
exports.validate_front_search_conversations = $;
exports.validate_front_send_message = ee;
