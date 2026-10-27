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
      (r._sentryDebugIds[a] = "80fec926-293e-4306-87be-6eec555ee56e"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-80fec926-293e-4306-87be-6eec555ee56e"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const F = _;
function _(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = _.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.messageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "messageId" || s === "account")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.messageId !== void 0 && typeof r.messageId != "string") {
      const s = {
        instancePath: a + "/messageId",
        schemaPath: "#/properties/messageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((_.errors = e), t === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const J = I,
  v = require("ajv/dist/runtime/ucs2length").default;
function I(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = I.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.query === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.labelName === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "labelName" },
        message: "must have required property 'labelName'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (
        !(
          s === "query" ||
          s === "labelName" ||
          s === "archive" ||
          s === "createLabelIfMissing" ||
          s === "maxMessages" ||
          s === "account"
        )
      ) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.query !== void 0) {
      let s = r.query;
      if (typeof s == "string") {
        if (v(s) < 1) {
          const p = {
            instancePath: a + "/query",
            schemaPath: "#/properties/query/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
      } else {
        const p = {
          instancePath: a + "/query",
          schemaPath: "#/properties/query/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
    if (r.labelName !== void 0) {
      let s = r.labelName;
      if (typeof s == "string") {
        if (v(s) < 1) {
          const p = {
            instancePath: a + "/labelName",
            schemaPath: "#/properties/labelName/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
      } else {
        const p = {
          instancePath: a + "/labelName",
          schemaPath: "#/properties/labelName/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
    if (r.archive !== void 0 && typeof r.archive != "boolean") {
      const s = {
        instancePath: a + "/archive",
        schemaPath: "#/properties/archive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (
      r.createLabelIfMissing !== void 0 &&
      typeof r.createLabelIfMissing != "boolean"
    ) {
      const s = {
        instancePath: a + "/createLabelIfMissing",
        schemaPath: "#/properties/createLabelIfMissing/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.maxMessages !== void 0) {
      let s = r.maxMessages;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const p = {
          instancePath: a + "/maxMessages",
          schemaPath: "#/properties/maxMessages/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
      if (typeof s == "number") {
        if (s > 1e3 || isNaN(s)) {
          const p = {
            instancePath: a + "/maxMessages",
            schemaPath: "#/properties/maxMessages/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
        if (s < 1 || isNaN(s)) {
          const p = {
            instancePath: a + "/maxMessages",
            schemaPath: "#/properties/maxMessages/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
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
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((I.errors = e), t === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const K = O,
  Y = {
    properties: {
      labelListVisibility: {
        enum: ["labelShow", "labelShowIfUnread", "labelHide"],
      },
      messageListVisibility: { enum: ["show", "hide"] },
    },
  };
function O(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = O.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.name === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (
        !(
          s === "name" ||
          s === "labelListVisibility" ||
          s === "messageListVisibility" ||
          s === "account"
        )
      ) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.name !== void 0) {
      let s = r.name;
      if (typeof s == "string") {
        if (v(s) < 1) {
          const p = {
            instancePath: a + "/name",
            schemaPath: "#/properties/name/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
      } else {
        const p = {
          instancePath: a + "/name",
          schemaPath: "#/properties/name/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
    if (r.labelListVisibility !== void 0) {
      let s = r.labelListVisibility;
      if (typeof s != "string") {
        const p = {
          instancePath: a + "/labelListVisibility",
          schemaPath: "#/properties/labelListVisibility/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
      if (
        !(s === "labelShow" || s === "labelShowIfUnread" || s === "labelHide")
      ) {
        const p = {
          instancePath: a + "/labelListVisibility",
          schemaPath: "#/properties/labelListVisibility/enum",
          keyword: "enum",
          params: { allowedValues: Y.properties.labelListVisibility.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
    if (r.messageListVisibility !== void 0) {
      let s = r.messageListVisibility;
      if (typeof s != "string") {
        const p = {
          instancePath: a + "/messageListVisibility",
          schemaPath: "#/properties/messageListVisibility/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
      if (!(s === "show" || s === "hide")) {
        const p = {
          instancePath: a + "/messageListVisibility",
          schemaPath: "#/properties/messageListVisibility/enum",
          keyword: "enum",
          params: { allowedValues: Y.properties.messageListVisibility.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
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
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((O.errors = e), t === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Q = A,
  Pe = {
    properties: {
      to: {
        anyOf: [
          { type: "array", items: { type: "string" } },
          { type: "string", pattern: "\\S" },
        ],
      },
      cc: {
        anyOf: [
          { type: "array", items: { type: "string", pattern: "\\S" } },
          { type: "string", pattern: "\\S" },
        ],
      },
      bcc: {
        anyOf: [
          { type: "array", items: { type: "string", pattern: "\\S" } },
          { type: "string", pattern: "\\S" },
        ],
      },
      subject: { type: "string" },
      body: { type: "string" },
      threadId: { type: "string" },
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
          title: "GmailAttachment",
        },
      },
      account: { type: "string" },
      includeSignature: { type: "boolean" },
    },
  },
  W = Object.prototype.hasOwnProperty,
  h = new RegExp("\\S", "u");
function A(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = A.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const i in r)
      if (!W.call(Pe.properties, i)) {
        const l = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    if (r.to !== void 0) {
      let i = r.to;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++)
          if (typeof i[u] != "string") {
            const d = {
              instancePath: a + "/to/" + u,
              schemaPath: "#/properties/to/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), t++);
          }
      } else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var s = y === t;
      o = o || s;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/to",
            schemaPath: "#/properties/to/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var s = c === t;
      if (((o = o || s), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.cc !== void 0) {
      let i = r.cc;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++) {
          let d = i[u];
          if (typeof d == "string") {
            if (!h.test(d)) {
              const f = {
                instancePath: a + "/cc/" + u,
                schemaPath: "#/properties/cc/anyOf/0/items/pattern",
                keyword: "pattern",
                params: { pattern: "\\S" },
                message: 'must match pattern "\\S"',
              };
              (e === null ? (e = [f]) : e.push(f), t++);
            }
          } else {
            const f = {
              instancePath: a + "/cc/" + u,
              schemaPath: "#/properties/cc/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
        }
      } else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var p = y === t;
      o = o || p;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/cc",
            schemaPath: "#/properties/cc/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var p = c === t;
      if (((o = o || p), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.bcc !== void 0) {
      let i = r.bcc;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++) {
          let d = i[u];
          if (typeof d == "string") {
            if (!h.test(d)) {
              const f = {
                instancePath: a + "/bcc/" + u,
                schemaPath: "#/properties/bcc/anyOf/0/items/pattern",
                keyword: "pattern",
                params: { pattern: "\\S" },
                message: 'must match pattern "\\S"',
              };
              (e === null ? (e = [f]) : e.push(f), t++);
            }
          } else {
            const f = {
              instancePath: a + "/bcc/" + u,
              schemaPath: "#/properties/bcc/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
        }
      } else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var w = y === t;
      o = o || w;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/bcc",
            schemaPath: "#/properties/bcc/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var w = c === t;
      if (((o = o || w), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.subject !== void 0 && typeof r.subject != "string") {
      const i = {
        instancePath: a + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.body !== void 0 && typeof r.body != "string") {
      const i = {
        instancePath: a + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.threadId !== void 0 && typeof r.threadId != "string") {
      const i = {
        instancePath: a + "/threadId",
        schemaPath: "#/properties/threadId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.attachments !== void 0) {
      let i = r.attachments;
      if (Array.isArray(i)) {
        const l = i.length;
        for (let o = 0; o < l; o++) {
          let y = i[o];
          if (y && typeof y == "object" && !Array.isArray(y)) {
            if (y.content === void 0) {
              const c = {
                instancePath: a + "/attachments/" + o,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "content" },
                message: "must have required property 'content'",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.name === void 0) {
              const c = {
                instancePath: a + "/attachments/" + o,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property 'name'",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.content !== void 0 && typeof y.content != "string") {
              const c = {
                instancePath: a + "/attachments/" + o + "/content",
                schemaPath:
                  "#/properties/attachments/items/properties/content/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.name !== void 0 && typeof y.name != "string") {
              const c = {
                instancePath: a + "/attachments/" + o + "/name",
                schemaPath:
                  "#/properties/attachments/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.contentType !== void 0 && typeof y.contentType != "string") {
              const c = {
                instancePath: a + "/attachments/" + o + "/contentType",
                schemaPath:
                  "#/properties/attachments/items/properties/contentType/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
          } else {
            const c = {
              instancePath: a + "/attachments/" + o,
              schemaPath: "#/properties/attachments/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [c]) : e.push(c), t++);
          }
        }
      } else {
        const l = {
          instancePath: a + "/attachments",
          schemaPath: "#/properties/attachments/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (
      r.includeSignature !== void 0 &&
      typeof r.includeSignature != "boolean"
    ) {
      const i = {
        instancePath: a + "/includeSignature",
        schemaPath: "#/properties/includeSignature/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), t++);
  }
  return ((A.errors = e), t === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = q;
function q(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = q.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.draftId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "draftId" },
        message: "must have required property 'draftId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "draftId" || s === "account")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.draftId !== void 0 && typeof r.draftId != "string") {
      const s = {
        instancePath: a + "/draftId",
        schemaPath: "#/properties/draftId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((q.errors = e), t === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ee = N,
  ke = { properties: { sourceType: { enum: ["message", "thread"] } } };
function N(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = N.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.sourceType === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sourceType" },
        message: "must have required property 'sourceType'",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.sourceId === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sourceId" },
        message: "must have required property 'sourceId'",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.to === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "to" },
        message: "must have required property 'to'",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    for (const i in r)
      if (
        !(
          i === "sourceType" ||
          i === "sourceId" ||
          i === "to" ||
          i === "cc" ||
          i === "bcc" ||
          i === "note" ||
          i === "account"
        )
      ) {
        const l = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    if (r.sourceType !== void 0) {
      let i = r.sourceType;
      if (typeof i != "string") {
        const l = {
          instancePath: a + "/sourceType",
          schemaPath: "#/properties/sourceType/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      if (!(i === "message" || i === "thread")) {
        const l = {
          instancePath: a + "/sourceType",
          schemaPath: "#/properties/sourceType/enum",
          keyword: "enum",
          params: { allowedValues: ke.properties.sourceType.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    }
    if (r.sourceId !== void 0 && typeof r.sourceId != "string") {
      const i = {
        instancePath: a + "/sourceId",
        schemaPath: "#/properties/sourceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.to !== void 0) {
      let i = r.to;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        if (i.length < 1) {
          const u = {
            instancePath: a + "/to",
            schemaPath: "#/properties/to/anyOf/0/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [u]) : e.push(u), t++);
        }
        const n = i.length;
        for (let u = 0; u < n; u++)
          if (typeof i[u] != "string") {
            const d = {
              instancePath: a + "/to/" + u,
              schemaPath: "#/properties/to/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), t++);
          }
      } else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var s = y === t;
      o = o || s;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/to",
            schemaPath: "#/properties/to/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var s = c === t;
      if (((o = o || s), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.cc !== void 0) {
      let i = r.cc;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++) {
          let d = i[u];
          if (typeof d == "string") {
            if (!h.test(d)) {
              const f = {
                instancePath: a + "/cc/" + u,
                schemaPath: "#/properties/cc/anyOf/0/items/pattern",
                keyword: "pattern",
                params: { pattern: "\\S" },
                message: 'must match pattern "\\S"',
              };
              (e === null ? (e = [f]) : e.push(f), t++);
            }
          } else {
            const f = {
              instancePath: a + "/cc/" + u,
              schemaPath: "#/properties/cc/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
        }
      } else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var p = y === t;
      o = o || p;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/cc",
            schemaPath: "#/properties/cc/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var p = c === t;
      if (((o = o || p), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.bcc !== void 0) {
      let i = r.bcc;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++) {
          let d = i[u];
          if (typeof d == "string") {
            if (!h.test(d)) {
              const f = {
                instancePath: a + "/bcc/" + u,
                schemaPath: "#/properties/bcc/anyOf/0/items/pattern",
                keyword: "pattern",
                params: { pattern: "\\S" },
                message: 'must match pattern "\\S"',
              };
              (e === null ? (e = [f]) : e.push(f), t++);
            }
          } else {
            const f = {
              instancePath: a + "/bcc/" + u,
              schemaPath: "#/properties/bcc/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
        }
      } else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var w = y === t;
      o = o || w;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/bcc",
            schemaPath: "#/properties/bcc/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var w = c === t;
      if (((o = o || w), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.note !== void 0 && typeof r.note != "string") {
      const i = {
        instancePath: a + "/note",
        schemaPath: "#/properties/note/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), t++);
  }
  return ((N.errors = e), t === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const se = j;
function j(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = j.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.messageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.attachmentIndex === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "attachmentIndex" },
        message: "must have required property 'attachmentIndex'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "messageId" || s === "attachmentIndex" || s === "account")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.messageId !== void 0 && typeof r.messageId != "string") {
      const s = {
        instancePath: a + "/messageId",
        schemaPath: "#/properties/messageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.attachmentIndex !== void 0 && typeof r.attachmentIndex != "string") {
      const s = {
        instancePath: a + "/attachmentIndex",
        schemaPath: "#/properties/attachmentIndex/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((j.errors = e), t === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const te = T;
function T(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = T.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.threadId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "threadId" },
        message: "must have required property 'threadId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "threadId" || s === "account")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.threadId !== void 0 && typeof r.threadId != "string") {
      const s = {
        instancePath: a + "/threadId",
        schemaPath: "#/properties/threadId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((T.errors = e), t === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const re = S,
  ae = new RegExp("^[A-Za-z0-9_-]+$", "u");
function S(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = S.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.messageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "messageId" || s === "account")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.messageId !== void 0) {
      let s = r.messageId;
      if (typeof s == "string") {
        if (v(s) < 1) {
          const p = {
            instancePath: a + "/messageId",
            schemaPath: "#/properties/messageId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
        if (!ae.test(s)) {
          const p = {
            instancePath: a + "/messageId",
            schemaPath: "#/properties/messageId/pattern",
            keyword: "pattern",
            params: { pattern: "^[A-Za-z0-9_-]+$" },
            message: 'must match pattern "^[A-Za-z0-9_-]+$"',
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
      } else {
        const p = {
          instancePath: a + "/messageId",
          schemaPath: "#/properties/messageId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
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
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((S.errors = e), t === 0);
}
S.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ie = D;
function D(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = D.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.draftId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "draftId" },
        message: "must have required property 'draftId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "draftId" || s === "account")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.draftId !== void 0 && typeof r.draftId != "string") {
      const s = {
        instancePath: a + "/draftId",
        schemaPath: "#/properties/draftId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((D.errors = e), t === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ne = x;
function x(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = x.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "query" ||
          s === "maxResults" ||
          s === "pageToken" ||
          s === "account" ||
          s === "limit" ||
          s === "cursor"
        )
      ) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.query !== void 0 && typeof r.query != "string") {
      const s = {
        instancePath: a + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.maxResults !== void 0) {
      let s = r.maxResults;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const p = {
          instancePath: a + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
      if (typeof s == "number") {
        if (s > 500 || isNaN(s)) {
          const p = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
        if (s < 1 || isNaN(s)) {
          const p = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: a + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const p = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const p = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
        if (s < 1 || isNaN(s)) {
          const p = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
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
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((x.errors = e), t === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const pe = L;
function L(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = L.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.messageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.labelName === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "labelName" },
        message: "must have required property 'labelName'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "messageId" || s === "labelName" || s === "account")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.messageId !== void 0 && typeof r.messageId != "string") {
      const s = {
        instancePath: a + "/messageId",
        schemaPath: "#/properties/messageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.labelName !== void 0 && typeof r.labelName != "string") {
      const s = {
        instancePath: a + "/labelName",
        schemaPath: "#/properties/labelName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((L.errors = e), t === 0);
}
L.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const oe = R;
function R(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = R.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "includeBody" ||
          s === "maxResults" ||
          s === "pageToken" ||
          s === "account" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.includeBody !== void 0 && typeof r.includeBody != "boolean") {
      const s = {
        instancePath: a + "/includeBody",
        schemaPath: "#/properties/includeBody/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.maxResults !== void 0) {
      let s = r.maxResults;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const p = {
          instancePath: a + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
      if (typeof s == "number") {
        if (s > 500 || isNaN(s)) {
          const p = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
        if (s < 1 || isNaN(s)) {
          const p = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: a + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const p = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const p = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
        if (s < 1 || isNaN(s)) {
          const p = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
      }
    }
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const p = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const p = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
        if (s < 1 || isNaN(s)) {
          const p = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
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
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((R.errors = e), t === 0);
}
R.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const me = E;
function E(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = E.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (s !== "account") {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((E.errors = e), t === 0);
}
E.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const le = V;
function V(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = V.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.messageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "messageId" || s === "account")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.messageId !== void 0 && typeof r.messageId != "string") {
      const s = {
        instancePath: a + "/messageId",
        schemaPath: "#/properties/messageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((V.errors = e), t === 0);
}
V.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ce = M;
function M(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = M.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.messageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.labelName === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "labelName" },
        message: "must have required property 'labelName'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "messageId" || s === "labelName" || s === "account")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.messageId !== void 0 && typeof r.messageId != "string") {
      const s = {
        instancePath: a + "/messageId",
        schemaPath: "#/properties/messageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.labelName !== void 0 && typeof r.labelName != "string") {
      const s = {
        instancePath: a + "/labelName",
        schemaPath: "#/properties/labelName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((M.errors = e), t === 0);
}
M.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ue = B;
function B(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = B.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.threadId === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "threadId" },
        message: "must have required property 'threadId'",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.body === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "body" },
        message: "must have required property 'body'",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    for (const i in r)
      if (
        !(
          i === "threadId" ||
          i === "body" ||
          i === "to" ||
          i === "cc" ||
          i === "bcc" ||
          i === "attachments" ||
          i === "account" ||
          i === "includeSignature"
        )
      ) {
        const l = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    if (r.threadId !== void 0 && typeof r.threadId != "string") {
      const i = {
        instancePath: a + "/threadId",
        schemaPath: "#/properties/threadId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.body !== void 0 && typeof r.body != "string") {
      const i = {
        instancePath: a + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.to !== void 0) {
      let i = r.to;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++)
          if (typeof i[u] != "string") {
            const d = {
              instancePath: a + "/to/" + u,
              schemaPath: "#/properties/to/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), t++);
          }
      } else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var s = y === t;
      o = o || s;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/to",
            schemaPath: "#/properties/to/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var s = c === t;
      if (((o = o || s), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.cc !== void 0) {
      let i = r.cc;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++) {
          let d = i[u];
          if (typeof d == "string") {
            if (!h.test(d)) {
              const f = {
                instancePath: a + "/cc/" + u,
                schemaPath: "#/properties/cc/anyOf/0/items/pattern",
                keyword: "pattern",
                params: { pattern: "\\S" },
                message: 'must match pattern "\\S"',
              };
              (e === null ? (e = [f]) : e.push(f), t++);
            }
          } else {
            const f = {
              instancePath: a + "/cc/" + u,
              schemaPath: "#/properties/cc/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
        }
      } else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var p = y === t;
      o = o || p;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/cc",
            schemaPath: "#/properties/cc/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var p = c === t;
      if (((o = o || p), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.bcc !== void 0) {
      let i = r.bcc;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++) {
          let d = i[u];
          if (typeof d == "string") {
            if (!h.test(d)) {
              const f = {
                instancePath: a + "/bcc/" + u,
                schemaPath: "#/properties/bcc/anyOf/0/items/pattern",
                keyword: "pattern",
                params: { pattern: "\\S" },
                message: 'must match pattern "\\S"',
              };
              (e === null ? (e = [f]) : e.push(f), t++);
            }
          } else {
            const f = {
              instancePath: a + "/bcc/" + u,
              schemaPath: "#/properties/bcc/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
        }
      } else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var w = y === t;
      o = o || w;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/bcc",
            schemaPath: "#/properties/bcc/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var w = c === t;
      if (((o = o || w), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.attachments !== void 0) {
      let i = r.attachments;
      if (Array.isArray(i)) {
        const l = i.length;
        for (let o = 0; o < l; o++) {
          let y = i[o];
          if (y && typeof y == "object" && !Array.isArray(y)) {
            if (y.content === void 0) {
              const c = {
                instancePath: a + "/attachments/" + o,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "content" },
                message: "must have required property 'content'",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.name === void 0) {
              const c = {
                instancePath: a + "/attachments/" + o,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property 'name'",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.content !== void 0 && typeof y.content != "string") {
              const c = {
                instancePath: a + "/attachments/" + o + "/content",
                schemaPath:
                  "#/properties/attachments/items/properties/content/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.name !== void 0 && typeof y.name != "string") {
              const c = {
                instancePath: a + "/attachments/" + o + "/name",
                schemaPath:
                  "#/properties/attachments/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.contentType !== void 0 && typeof y.contentType != "string") {
              const c = {
                instancePath: a + "/attachments/" + o + "/contentType",
                schemaPath:
                  "#/properties/attachments/items/properties/contentType/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
          } else {
            const c = {
              instancePath: a + "/attachments/" + o,
              schemaPath: "#/properties/attachments/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [c]) : e.push(c), t++);
          }
        }
      } else {
        const l = {
          instancePath: a + "/attachments",
          schemaPath: "#/properties/attachments/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (
      r.includeSignature !== void 0 &&
      typeof r.includeSignature != "boolean"
    ) {
      const i = {
        instancePath: a + "/includeSignature",
        schemaPath: "#/properties/includeSignature/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), t++);
  }
  return ((B.errors = e), t === 0);
}
B.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ye = z;
function z(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = z.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "query" ||
          s === "maxResults" ||
          s === "pageToken" ||
          s === "account" ||
          s === "limit" ||
          s === "cursor"
        )
      ) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.query !== void 0 && typeof r.query != "string") {
      const s = {
        instancePath: a + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.maxResults !== void 0) {
      let s = r.maxResults;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const p = {
          instancePath: a + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
      if (typeof s == "number") {
        if (s > 500 || isNaN(s)) {
          const p = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
        if (s < 1 || isNaN(s)) {
          const p = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: a + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const p = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const p = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
        if (s < 1 || isNaN(s)) {
          const p = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
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
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((z.errors = e), t === 0);
}
z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const fe = Z;
function Z(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = Z.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.to === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "to" },
        message: "must have required property 'to'",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    for (const i in r)
      if (
        !(
          i === "to" ||
          i === "cc" ||
          i === "bcc" ||
          i === "subject" ||
          i === "body" ||
          i === "attachments" ||
          i === "account" ||
          i === "includeSignature"
        )
      ) {
        const l = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    if (r.to !== void 0) {
      let i = r.to;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        if (i.length < 1) {
          const u = {
            instancePath: a + "/to",
            schemaPath: "#/properties/to/anyOf/0/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [u]) : e.push(u), t++);
        }
        const n = i.length;
        for (let u = 0; u < n; u++)
          if (typeof i[u] != "string") {
            const d = {
              instancePath: a + "/to/" + u,
              schemaPath: "#/properties/to/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), t++);
          }
      } else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var s = y === t;
      o = o || s;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/to",
            schemaPath: "#/properties/to/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var s = c === t;
      if (((o = o || s), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.cc !== void 0) {
      let i = r.cc;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++) {
          let d = i[u];
          if (typeof d == "string") {
            if (!h.test(d)) {
              const f = {
                instancePath: a + "/cc/" + u,
                schemaPath: "#/properties/cc/anyOf/0/items/pattern",
                keyword: "pattern",
                params: { pattern: "\\S" },
                message: 'must match pattern "\\S"',
              };
              (e === null ? (e = [f]) : e.push(f), t++);
            }
          } else {
            const f = {
              instancePath: a + "/cc/" + u,
              schemaPath: "#/properties/cc/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
        }
      } else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var p = y === t;
      o = o || p;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/cc",
            schemaPath: "#/properties/cc/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var p = c === t;
      if (((o = o || p), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.bcc !== void 0) {
      let i = r.bcc;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++) {
          let d = i[u];
          if (typeof d == "string") {
            if (!h.test(d)) {
              const f = {
                instancePath: a + "/bcc/" + u,
                schemaPath: "#/properties/bcc/anyOf/0/items/pattern",
                keyword: "pattern",
                params: { pattern: "\\S" },
                message: 'must match pattern "\\S"',
              };
              (e === null ? (e = [f]) : e.push(f), t++);
            }
          } else {
            const f = {
              instancePath: a + "/bcc/" + u,
              schemaPath: "#/properties/bcc/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
        }
      } else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var w = y === t;
      o = o || w;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/bcc",
            schemaPath: "#/properties/bcc/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var w = c === t;
      if (((o = o || w), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.subject !== void 0 && typeof r.subject != "string") {
      const i = {
        instancePath: a + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.body !== void 0 && typeof r.body != "string") {
      const i = {
        instancePath: a + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.attachments !== void 0) {
      let i = r.attachments;
      if (Array.isArray(i)) {
        const l = i.length;
        for (let o = 0; o < l; o++) {
          let y = i[o];
          if (y && typeof y == "object" && !Array.isArray(y)) {
            if (y.content === void 0) {
              const c = {
                instancePath: a + "/attachments/" + o,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "content" },
                message: "must have required property 'content'",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.name === void 0) {
              const c = {
                instancePath: a + "/attachments/" + o,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property 'name'",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.content !== void 0 && typeof y.content != "string") {
              const c = {
                instancePath: a + "/attachments/" + o + "/content",
                schemaPath:
                  "#/properties/attachments/items/properties/content/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.name !== void 0 && typeof y.name != "string") {
              const c = {
                instancePath: a + "/attachments/" + o + "/name",
                schemaPath:
                  "#/properties/attachments/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.contentType !== void 0 && typeof y.contentType != "string") {
              const c = {
                instancePath: a + "/attachments/" + o + "/contentType",
                schemaPath:
                  "#/properties/attachments/items/properties/contentType/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
          } else {
            const c = {
              instancePath: a + "/attachments/" + o,
              schemaPath: "#/properties/attachments/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [c]) : e.push(c), t++);
          }
        }
      } else {
        const l = {
          instancePath: a + "/attachments",
          schemaPath: "#/properties/attachments/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (
      r.includeSignature !== void 0 &&
      typeof r.includeSignature != "boolean"
    ) {
      const i = {
        instancePath: a + "/includeSignature",
        schemaPath: "#/properties/includeSignature/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), t++);
  }
  return ((Z.errors = e), t === 0);
}
Z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const de = $;
function $(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = $.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.draftId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "draftId" },
        message: "must have required property 'draftId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "draftId" || s === "account")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.draftId !== void 0 && typeof r.draftId != "string") {
      const s = {
        instancePath: a + "/draftId",
        schemaPath: "#/properties/draftId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return (($.errors = e), t === 0);
}
$.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const he = H;
function H(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = H.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.messageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageId" },
        message: "must have required property 'messageId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "messageId" || s === "account")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.messageId !== void 0 && typeof r.messageId != "string") {
      const s = {
        instancePath: a + "/messageId",
        schemaPath: "#/properties/messageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((H.errors = e), t === 0);
}
H.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ge = U;
function U(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = U.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.threadId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "threadId" },
        message: "must have required property 'threadId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "threadId" || s === "account")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (r.threadId !== void 0) {
      let s = r.threadId;
      if (typeof s == "string") {
        if (v(s) < 1) {
          const p = {
            instancePath: a + "/threadId",
            schemaPath: "#/properties/threadId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
        if (!ae.test(s)) {
          const p = {
            instancePath: a + "/threadId",
            schemaPath: "#/properties/threadId/pattern",
            keyword: "pattern",
            params: { pattern: "^[A-Za-z0-9_-]+$" },
            message: 'must match pattern "^[A-Za-z0-9_-]+$"',
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
      } else {
        const p = {
          instancePath: a + "/threadId",
          schemaPath: "#/properties/threadId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
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
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((U.errors = e), t === 0);
}
U.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const be = G,
  C = {
    properties: {
      draftId: { type: "string" },
      to: {
        anyOf: [
          { type: "array", items: { type: "string" } },
          { type: "string", pattern: "\\S" },
        ],
      },
      cc: {
        anyOf: [
          { type: "array", items: { type: "string", pattern: "\\S" } },
          { type: "string", pattern: "\\S" },
        ],
      },
      bcc: {
        anyOf: [
          { type: "array", items: { type: "string", pattern: "\\S" } },
          { type: "string", pattern: "\\S" },
        ],
      },
      subject: { type: "string" },
      body: { type: "string" },
      htmlBody: { type: "string" },
      contentType: {
        enum: ["text/markdown", "text/html", "text/plain"],
        type: "string",
      },
      replyMessageId: { type: "string" },
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
    },
  };
function G(
  r,
  {
    instancePath: a = "",
    parentData: g,
    parentDataProperty: b,
    rootData: P = r,
    dynamicAnchors: k = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = G.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.draftId === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "draftId" },
        message: "must have required property 'draftId'",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    for (const i in r)
      if (!W.call(C.properties, i)) {
        const l = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    if (r.draftId !== void 0 && typeof r.draftId != "string") {
      const i = {
        instancePath: a + "/draftId",
        schemaPath: "#/properties/draftId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.to !== void 0) {
      let i = r.to;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++)
          if (typeof i[u] != "string") {
            const d = {
              instancePath: a + "/to/" + u,
              schemaPath: "#/properties/to/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), t++);
          }
      } else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var s = y === t;
      o = o || s;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/to",
            schemaPath: "#/properties/to/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var s = c === t;
      if (((o = o || s), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.cc !== void 0) {
      let i = r.cc;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++) {
          let d = i[u];
          if (typeof d == "string") {
            if (!h.test(d)) {
              const f = {
                instancePath: a + "/cc/" + u,
                schemaPath: "#/properties/cc/anyOf/0/items/pattern",
                keyword: "pattern",
                params: { pattern: "\\S" },
                message: 'must match pattern "\\S"',
              };
              (e === null ? (e = [f]) : e.push(f), t++);
            }
          } else {
            const f = {
              instancePath: a + "/cc/" + u,
              schemaPath: "#/properties/cc/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
        }
      } else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var p = y === t;
      o = o || p;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/cc",
            schemaPath: "#/properties/cc/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var p = c === t;
      if (((o = o || p), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.bcc !== void 0) {
      let i = r.bcc;
      const l = t;
      let o = !1;
      const y = t;
      if (Array.isArray(i)) {
        const n = i.length;
        for (let u = 0; u < n; u++) {
          let d = i[u];
          if (typeof d == "string") {
            if (!h.test(d)) {
              const f = {
                instancePath: a + "/bcc/" + u,
                schemaPath: "#/properties/bcc/anyOf/0/items/pattern",
                keyword: "pattern",
                params: { pattern: "\\S" },
                message: 'must match pattern "\\S"',
              };
              (e === null ? (e = [f]) : e.push(f), t++);
            }
          } else {
            const f = {
              instancePath: a + "/bcc/" + u,
              schemaPath: "#/properties/bcc/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
        }
      } else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var w = y === t;
      o = o || w;
      const c = t;
      if (typeof i == "string") {
        if (!h.test(i)) {
          const n = {
            instancePath: a + "/bcc",
            schemaPath: "#/properties/bcc/anyOf/1/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [n]) : e.push(n), t++);
        }
      } else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf/1/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
      var w = c === t;
      if (((o = o || w), o))
        ((t = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const n = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    }
    if (r.subject !== void 0 && typeof r.subject != "string") {
      const i = {
        instancePath: a + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.body !== void 0 && typeof r.body != "string") {
      const i = {
        instancePath: a + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.htmlBody !== void 0 && typeof r.htmlBody != "string") {
      const i = {
        instancePath: a + "/htmlBody",
        schemaPath: "#/properties/htmlBody/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.contentType !== void 0) {
      let i = r.contentType;
      if (typeof i != "string") {
        const l = {
          instancePath: a + "/contentType",
          schemaPath: "#/properties/contentType/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      if (!(i === "text/markdown" || i === "text/html" || i === "text/plain")) {
        const l = {
          instancePath: a + "/contentType",
          schemaPath: "#/properties/contentType/enum",
          keyword: "enum",
          params: { allowedValues: C.properties.contentType.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    }
    if (r.replyMessageId !== void 0 && typeof r.replyMessageId != "string") {
      const i = {
        instancePath: a + "/replyMessageId",
        schemaPath: "#/properties/replyMessageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
    if (r.attachments !== void 0) {
      let i = r.attachments;
      if (Array.isArray(i)) {
        const l = i.length;
        for (let o = 0; o < l; o++) {
          let y = i[o];
          if (y && typeof y == "object" && !Array.isArray(y)) {
            if (y.content === void 0) {
              const c = {
                instancePath: a + "/attachments/" + o,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "content" },
                message: "must have required property 'content'",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.name === void 0) {
              const c = {
                instancePath: a + "/attachments/" + o,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property 'name'",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.content !== void 0 && typeof y.content != "string") {
              const c = {
                instancePath: a + "/attachments/" + o + "/content",
                schemaPath:
                  "#/properties/attachments/items/properties/content/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.name !== void 0 && typeof y.name != "string") {
              const c = {
                instancePath: a + "/attachments/" + o + "/name",
                schemaPath:
                  "#/properties/attachments/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
            if (y.contentType !== void 0 && typeof y.contentType != "string") {
              const c = {
                instancePath: a + "/attachments/" + o + "/contentType",
                schemaPath:
                  "#/properties/attachments/items/properties/contentType/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [c]) : e.push(c), t++);
            }
          } else {
            const c = {
              instancePath: a + "/attachments/" + o,
              schemaPath: "#/properties/attachments/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [c]) : e.push(c), t++);
          }
        }
      } else {
        const l = {
          instancePath: a + "/attachments",
          schemaPath: "#/properties/attachments/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), t++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), t++);
  }
  return ((G.errors = e), t === 0);
}
G.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const we = {
  gmail_archive: F,
  gmail_bulk_label: J,
  gmail_create_label: K,
  gmail_create_draft: Q,
  gmail_delete_draft: X,
  gmail_forward: ee,
  gmail_get_attachment: se,
  gmail_get_thread: te,
  gmail_get_message: re,
  gmail_get_draft: ie,
  gmail_search_messages: ne,
  gmail_label: pe,
  gmail_list_drafts: oe,
  gmail_list_labels: me,
  gmail_mark_as_read: le,
  gmail_remove_label: ce,
  gmail_reply: ue,
  gmail_search: ye,
  gmail_send: fe,
  gmail_send_draft: de,
  gmail_trash: he,
  gmail_threads_trash: ge,
  gmail_update_draft: be,
};
exports.NATIVE_TOOL_VALIDATORS = we;
exports.validate_gmail_archive = F;
exports.validate_gmail_bulk_label = J;
exports.validate_gmail_create_draft = Q;
exports.validate_gmail_create_label = K;
exports.validate_gmail_delete_draft = X;
exports.validate_gmail_forward = ee;
exports.validate_gmail_get_attachment = se;
exports.validate_gmail_get_draft = ie;
exports.validate_gmail_get_message = re;
exports.validate_gmail_get_thread = te;
exports.validate_gmail_label = pe;
exports.validate_gmail_list_drafts = oe;
exports.validate_gmail_list_labels = me;
exports.validate_gmail_mark_as_read = le;
exports.validate_gmail_remove_label = ce;
exports.validate_gmail_reply = ue;
exports.validate_gmail_search = ye;
exports.validate_gmail_search_messages = ne;
exports.validate_gmail_send = fe;
exports.validate_gmail_send_draft = de;
exports.validate_gmail_threads_trash = ge;
exports.validate_gmail_trash = he;
exports.validate_gmail_update_draft = be;
