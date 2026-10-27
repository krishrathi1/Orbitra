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
      (r._sentryDebugIds[a] = "44ee76c6-3fe4-42cd-ba8c-edb794da7d7e"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-44ee76c6-3fe4-42cd-ba8c-edb794da7d7e"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const W = h,
  De = {
    properties: {
      fromEmail: { type: "string" },
      fromName: { type: "string" },
      to: { type: "array", items: { type: "string" } },
      cc: { type: "array", items: { type: "string" } },
      bcc: { type: "array", items: { type: "string" } },
      replyTo: { type: "string" },
      subject: { type: "string" },
      html: { type: "string" },
      text: { type: "string" },
      templateId: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      params: {
        type: "object",
        propertyNames: { type: "string" },
        additionalProperties: {},
      },
      attachments: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            content: { type: "string" },
            url: { type: "string" },
          },
          required: ["name"],
        },
      },
      accountId: { type: "string" },
    },
  },
  f = Object.prototype.hasOwnProperty;
function h(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = h.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.to === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "to" },
        message: "must have required property 'to'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (!f.call(De.properties, t)) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    if (r.fromEmail !== void 0 && typeof r.fromEmail != "string") {
      const t = {
        instancePath: a + "/fromEmail",
        schemaPath: "#/properties/fromEmail/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.fromName !== void 0 && typeof r.fromName != "string") {
      const t = {
        instancePath: a + "/fromName",
        schemaPath: "#/properties/fromName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.to !== void 0) {
      let t = r.to;
      if (Array.isArray(t)) {
        const p = t.length;
        for (let o = 0; o < p; o++)
          if (typeof t[o] != "string") {
            const n = {
              instancePath: a + "/to/" + o,
              schemaPath: "#/properties/to/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
      } else {
        const p = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.cc !== void 0) {
      let t = r.cc;
      if (Array.isArray(t)) {
        const p = t.length;
        for (let o = 0; o < p; o++)
          if (typeof t[o] != "string") {
            const n = {
              instancePath: a + "/cc/" + o,
              schemaPath: "#/properties/cc/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
      } else {
        const p = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.bcc !== void 0) {
      let t = r.bcc;
      if (Array.isArray(t)) {
        const p = t.length;
        for (let o = 0; o < p; o++)
          if (typeof t[o] != "string") {
            const n = {
              instancePath: a + "/bcc/" + o,
              schemaPath: "#/properties/bcc/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
      } else {
        const p = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.replyTo !== void 0 && typeof r.replyTo != "string") {
      const t = {
        instancePath: a + "/replyTo",
        schemaPath: "#/properties/replyTo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
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
    if (r.html !== void 0 && typeof r.html != "string") {
      const t = {
        instancePath: a + "/html",
        schemaPath: "#/properties/html/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.text !== void 0 && typeof r.text != "string") {
      const t = {
        instancePath: a + "/text",
        schemaPath: "#/properties/text/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.templateId !== void 0) {
      let t = r.templateId;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const p = {
          instancePath: a + "/templateId",
          schemaPath: "#/properties/templateId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
      if (typeof t == "number") {
        if (t > 9007199254740991 || isNaN(t)) {
          const p = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        if (t < -9007199254740991 || isNaN(t)) {
          const p = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
      }
    }
    if (r.params !== void 0) {
      let t = r.params;
      if (t && typeof t == "object" && !Array.isArray(t))
        for (const p in t) {
          const o = i;
          if (typeof p != "string") {
            const n = {
              instancePath: a + "/params",
              schemaPath: "#/properties/params/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: p,
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
          var s = o === i;
          if (!s) {
            const n = {
              instancePath: a + "/params",
              schemaPath: "#/properties/params/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: p },
              message: "property name must be valid",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
        }
      else {
        const p = {
          instancePath: a + "/params",
          schemaPath: "#/properties/params/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.attachments !== void 0) {
      let t = r.attachments;
      if (Array.isArray(t)) {
        const p = t.length;
        for (let o = 0; o < p; o++) {
          let n = t[o];
          if (n && typeof n == "object" && !Array.isArray(n)) {
            if (n.name === void 0) {
              const l = {
                instancePath: a + "/attachments/" + o,
                schemaPath: "#/properties/attachments/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property 'name'",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
            if (n.name !== void 0 && typeof n.name != "string") {
              const l = {
                instancePath: a + "/attachments/" + o + "/name",
                schemaPath:
                  "#/properties/attachments/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
            if (n.content !== void 0 && typeof n.content != "string") {
              const l = {
                instancePath: a + "/attachments/" + o + "/content",
                schemaPath:
                  "#/properties/attachments/items/properties/content/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
            if (n.url !== void 0 && typeof n.url != "string") {
              const l = {
                instancePath: a + "/attachments/" + o + "/url",
                schemaPath:
                  "#/properties/attachments/items/properties/url/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
          } else {
            const l = {
              instancePath: a + "/attachments/" + o,
              schemaPath: "#/properties/attachments/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [l]) : e.push(l), i++);
          }
        }
      } else {
        const p = {
          instancePath: a + "/attachments",
          schemaPath: "#/properties/attachments/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const t = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((h.errors = e), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = g;
function g(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = g.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "limit" ||
          s === "offset" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 50 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.offset !== void 0) {
      let s = r.offset;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
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
const Z = b;
function b(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = b.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.email === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "email" },
        message: "must have required property 'email'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (!(t === "email" || t === "attributes" || t === "listIds")) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    if (r.email !== void 0 && typeof r.email != "string") {
      const t = {
        instancePath: a + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.attributes !== void 0) {
      let t = r.attributes;
      if (t && typeof t == "object" && !Array.isArray(t))
        for (const p in t) {
          const o = i;
          if (typeof p != "string") {
            const n = {
              instancePath: a + "/attributes",
              schemaPath: "#/properties/attributes/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: p,
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
          var s = o === i;
          if (!s) {
            const n = {
              instancePath: a + "/attributes",
              schemaPath: "#/properties/attributes/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: p },
              message: "property name must be valid",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
        }
      else {
        const p = {
          instancePath: a + "/attributes",
          schemaPath: "#/properties/attributes/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.listIds !== void 0) {
      let t = r.listIds;
      if (Array.isArray(t)) {
        const p = t.length;
        for (let o = 0; o < p; o++) {
          let n = t[o];
          if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
            const l = {
              instancePath: a + "/listIds/" + o,
              schemaPath: "#/properties/listIds/items/type",
              keyword: "type",
              params: { type: "integer" },
              message: "must be integer",
            };
            (e === null ? (e = [l]) : e.push(l), i++);
          }
          if (typeof n == "number") {
            if (n > 9007199254740991 || isNaN(n)) {
              const l = {
                instancePath: a + "/listIds/" + o,
                schemaPath: "#/properties/listIds/items/maximum",
                keyword: "maximum",
                params: { comparison: "<=", limit: 9007199254740991 },
                message: "must be <= 9007199254740991",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
            if (n < -9007199254740991 || isNaN(n)) {
              const l = {
                instancePath: a + "/listIds/" + o,
                schemaPath: "#/properties/listIds/items/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: -9007199254740991 },
                message: "must be >= -9007199254740991",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
          }
        }
      } else {
        const p = {
          instancePath: a + "/listIds",
          schemaPath: "#/properties/listIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
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
  return ((b.errors = e), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const $ = P;
function P(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = P.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "status" ||
          s === "limit" ||
          s === "offset" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.status !== void 0 && typeof r.status != "string") {
      const s = {
        instancePath: a + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.offset !== void 0) {
      let s = r.offset;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
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
const ee = k;
function k(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = k.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  )
    for (const s in r) {
      const t = {
        instancePath: a,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: s },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  else {
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
const se = I;
function I(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = I.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.templateId === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "templateId" },
        message: "must have required property 'templateId'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.to === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "to" },
        message: "must have required property 'to'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (
        !(
          t === "templateId" ||
          t === "to" ||
          t === "params" ||
          t === "replyTo" ||
          t === "cc" ||
          t === "bcc" ||
          t === "accountId"
        )
      ) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    if (r.templateId !== void 0) {
      let t = r.templateId;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const p = {
          instancePath: a + "/templateId",
          schemaPath: "#/properties/templateId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
      if (typeof t == "number") {
        if (t > 9007199254740991 || isNaN(t)) {
          const p = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        if (t < -9007199254740991 || isNaN(t)) {
          const p = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
      }
    }
    if (r.to !== void 0) {
      let t = r.to;
      if (Array.isArray(t)) {
        if (t.length < 1) {
          const o = {
            instancePath: a + "/to",
            schemaPath: "#/properties/to/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        const p = t.length;
        for (let o = 0; o < p; o++) {
          let n = t[o];
          if (n && typeof n == "object" && !Array.isArray(n)) {
            if (n.email === void 0) {
              const l = {
                instancePath: a + "/to/" + o,
                schemaPath: "#/properties/to/items/required",
                keyword: "required",
                params: { missingProperty: "email" },
                message: "must have required property 'email'",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
            if (n.email !== void 0 && typeof n.email != "string") {
              const l = {
                instancePath: a + "/to/" + o + "/email",
                schemaPath: "#/properties/to/items/properties/email/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
            if (n.name !== void 0 && typeof n.name != "string") {
              const l = {
                instancePath: a + "/to/" + o + "/name",
                schemaPath: "#/properties/to/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
          } else {
            const l = {
              instancePath: a + "/to/" + o,
              schemaPath: "#/properties/to/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [l]) : e.push(l), i++);
          }
        }
      } else {
        const p = {
          instancePath: a + "/to",
          schemaPath: "#/properties/to/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.params !== void 0) {
      let t = r.params;
      if (t && typeof t == "object" && !Array.isArray(t))
        for (const p in t) {
          const o = i;
          if (typeof p != "string") {
            const n = {
              instancePath: a + "/params",
              schemaPath: "#/properties/params/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: p,
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
          var s = o === i;
          if (!s) {
            const n = {
              instancePath: a + "/params",
              schemaPath: "#/properties/params/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: p },
              message: "property name must be valid",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
        }
      else {
        const p = {
          instancePath: a + "/params",
          schemaPath: "#/properties/params/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.replyTo !== void 0) {
      let t = r.replyTo;
      if (t && typeof t == "object" && !Array.isArray(t)) {
        if (t.email === void 0) {
          const p = {
            instancePath: a + "/replyTo",
            schemaPath: "#/properties/replyTo/required",
            keyword: "required",
            params: { missingProperty: "email" },
            message: "must have required property 'email'",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        if (t.email !== void 0 && typeof t.email != "string") {
          const p = {
            instancePath: a + "/replyTo/email",
            schemaPath: "#/properties/replyTo/properties/email/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        if (t.name !== void 0 && typeof t.name != "string") {
          const p = {
            instancePath: a + "/replyTo/name",
            schemaPath: "#/properties/replyTo/properties/name/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
      } else {
        const p = {
          instancePath: a + "/replyTo",
          schemaPath: "#/properties/replyTo/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.cc !== void 0) {
      let t = r.cc;
      if (Array.isArray(t)) {
        const p = t.length;
        for (let o = 0; o < p; o++) {
          let n = t[o];
          if (n && typeof n == "object" && !Array.isArray(n)) {
            if (n.email === void 0) {
              const l = {
                instancePath: a + "/cc/" + o,
                schemaPath: "#/properties/cc/items/required",
                keyword: "required",
                params: { missingProperty: "email" },
                message: "must have required property 'email'",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
            if (n.email !== void 0 && typeof n.email != "string") {
              const l = {
                instancePath: a + "/cc/" + o + "/email",
                schemaPath: "#/properties/cc/items/properties/email/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
            if (n.name !== void 0 && typeof n.name != "string") {
              const l = {
                instancePath: a + "/cc/" + o + "/name",
                schemaPath: "#/properties/cc/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
          } else {
            const l = {
              instancePath: a + "/cc/" + o,
              schemaPath: "#/properties/cc/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [l]) : e.push(l), i++);
          }
        }
      } else {
        const p = {
          instancePath: a + "/cc",
          schemaPath: "#/properties/cc/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.bcc !== void 0) {
      let t = r.bcc;
      if (Array.isArray(t)) {
        const p = t.length;
        for (let o = 0; o < p; o++) {
          let n = t[o];
          if (n && typeof n == "object" && !Array.isArray(n)) {
            if (n.email === void 0) {
              const l = {
                instancePath: a + "/bcc/" + o,
                schemaPath: "#/properties/bcc/items/required",
                keyword: "required",
                params: { missingProperty: "email" },
                message: "must have required property 'email'",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
            if (n.email !== void 0 && typeof n.email != "string") {
              const l = {
                instancePath: a + "/bcc/" + o + "/email",
                schemaPath: "#/properties/bcc/items/properties/email/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
            if (n.name !== void 0 && typeof n.name != "string") {
              const l = {
                instancePath: a + "/bcc/" + o + "/name",
                schemaPath: "#/properties/bcc/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
          } else {
            const l = {
              instancePath: a + "/bcc/" + o,
              schemaPath: "#/properties/bcc/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [l]) : e.push(l), i++);
          }
        }
      } else {
        const p = {
          instancePath: a + "/bcc",
          schemaPath: "#/properties/bcc/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const t = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const te = w;
function w(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = w.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.identifier === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "identifier" },
        message: "must have required property 'identifier'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "identifier" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.identifier !== void 0 && typeof r.identifier != "string") {
      const s = {
        instancePath: a + "/identifier",
        schemaPath: "#/properties/identifier/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
const re = v;
function v(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = v.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.identifier === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "identifier" },
        message: "must have required property 'identifier'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (
        !(
          t === "identifier" ||
          t === "attributes" ||
          t === "listIds" ||
          t === "unlinkListIds" ||
          t === "emailBlacklisted" ||
          t === "smsBlacklisted" ||
          t === "accountId"
        )
      ) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    if (r.identifier !== void 0 && typeof r.identifier != "string") {
      const t = {
        instancePath: a + "/identifier",
        schemaPath: "#/properties/identifier/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.attributes !== void 0) {
      let t = r.attributes;
      if (t && typeof t == "object" && !Array.isArray(t))
        for (const p in t) {
          const o = i;
          if (typeof p != "string") {
            const n = {
              instancePath: a + "/attributes",
              schemaPath: "#/properties/attributes/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: p,
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
          var s = o === i;
          if (!s) {
            const n = {
              instancePath: a + "/attributes",
              schemaPath: "#/properties/attributes/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: p },
              message: "property name must be valid",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
        }
      else {
        const p = {
          instancePath: a + "/attributes",
          schemaPath: "#/properties/attributes/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.listIds !== void 0) {
      let t = r.listIds;
      if (Array.isArray(t)) {
        const p = t.length;
        for (let o = 0; o < p; o++) {
          let n = t[o];
          if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
            const l = {
              instancePath: a + "/listIds/" + o,
              schemaPath: "#/properties/listIds/items/type",
              keyword: "type",
              params: { type: "integer" },
              message: "must be integer",
            };
            (e === null ? (e = [l]) : e.push(l), i++);
          }
          if (typeof n == "number") {
            if (n > 9007199254740991 || isNaN(n)) {
              const l = {
                instancePath: a + "/listIds/" + o,
                schemaPath: "#/properties/listIds/items/maximum",
                keyword: "maximum",
                params: { comparison: "<=", limit: 9007199254740991 },
                message: "must be <= 9007199254740991",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
            if (n < -9007199254740991 || isNaN(n)) {
              const l = {
                instancePath: a + "/listIds/" + o,
                schemaPath: "#/properties/listIds/items/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: -9007199254740991 },
                message: "must be >= -9007199254740991",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
          }
        }
      } else {
        const p = {
          instancePath: a + "/listIds",
          schemaPath: "#/properties/listIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (r.unlinkListIds !== void 0) {
      let t = r.unlinkListIds;
      if (Array.isArray(t)) {
        const p = t.length;
        for (let o = 0; o < p; o++) {
          let n = t[o];
          if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
            const l = {
              instancePath: a + "/unlinkListIds/" + o,
              schemaPath: "#/properties/unlinkListIds/items/type",
              keyword: "type",
              params: { type: "integer" },
              message: "must be integer",
            };
            (e === null ? (e = [l]) : e.push(l), i++);
          }
          if (typeof n == "number") {
            if (n > 9007199254740991 || isNaN(n)) {
              const l = {
                instancePath: a + "/unlinkListIds/" + o,
                schemaPath: "#/properties/unlinkListIds/items/maximum",
                keyword: "maximum",
                params: { comparison: "<=", limit: 9007199254740991 },
                message: "must be <= 9007199254740991",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
            if (n < -9007199254740991 || isNaN(n)) {
              const l = {
                instancePath: a + "/unlinkListIds/" + o,
                schemaPath: "#/properties/unlinkListIds/items/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: -9007199254740991 },
                message: "must be >= -9007199254740991",
              };
              (e === null ? (e = [l]) : e.push(l), i++);
            }
          }
        }
      } else {
        const p = {
          instancePath: a + "/unlinkListIds",
          schemaPath: "#/properties/unlinkListIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (
      r.emailBlacklisted !== void 0 &&
      typeof r.emailBlacklisted != "boolean"
    ) {
      const t = {
        instancePath: a + "/emailBlacklisted",
        schemaPath: "#/properties/emailBlacklisted/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.smsBlacklisted !== void 0 && typeof r.smsBlacklisted != "boolean") {
      const t = {
        instancePath: a + "/smsBlacklisted",
        schemaPath: "#/properties/smsBlacklisted/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const t = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
const ie = N;
function N(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = N.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.identifier === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "identifier" },
        message: "must have required property 'identifier'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "identifier" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.identifier !== void 0 && typeof r.identifier != "string") {
      const s = {
        instancePath: a + "/identifier",
        schemaPath: "#/properties/identifier/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
const ae = _,
  U = {
    properties: {
      modifiedSince: { type: "string" },
      createdSince: { type: "string" },
      offset: { type: "integer", minimum: 0, maximum: 9007199254740991 },
      sort: { enum: ["asc", "desc"], type: "string" },
      segmentId: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      listId: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      accountId: { type: "string" },
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
    },
  };
function _(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = _.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!f.call(U.properties, s)) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.modifiedSince !== void 0 && typeof r.modifiedSince != "string") {
      const s = {
        instancePath: a + "/modifiedSince",
        schemaPath: "#/properties/modifiedSince/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.createdSince !== void 0 && typeof r.createdSince != "string") {
      const s = {
        instancePath: a + "/createdSince",
        schemaPath: "#/properties/createdSince/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.offset !== void 0) {
      let s = r.offset;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.sort !== void 0) {
      let s = r.sort;
      if (typeof s != "string") {
        const t = {
          instancePath: a + "/sort",
          schemaPath: "#/properties/sort/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "asc" || s === "desc")) {
        const t = {
          instancePath: a + "/sort",
          schemaPath: "#/properties/sort/enum",
          keyword: "enum",
          params: { allowedValues: U.properties.sort.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.segmentId !== void 0) {
      let s = r.segmentId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/segmentId",
          schemaPath: "#/properties/segmentId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/segmentId",
            schemaPath: "#/properties/segmentId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/segmentId",
            schemaPath: "#/properties/segmentId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.listId !== void 0) {
      let s = r.listId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/listId",
          schemaPath: "#/properties/listId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/listId",
            schemaPath: "#/properties/listId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/listId",
            schemaPath: "#/properties/listId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
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
const me = A;
function A(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = A.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (s !== "accountId") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((A.errors = e), i === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const pe = j;
function j(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = j.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "limit" ||
          s === "offset" ||
          s === "accountId" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 50 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.offset !== void 0) {
      let s = r.offset;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
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
  return ((j.errors = e), i === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ne = x;
function x(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = x.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.listId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "listId" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.listId !== void 0) {
      let s = r.listId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/listId",
          schemaPath: "#/properties/listId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/listId",
            schemaPath: "#/properties/listId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/listId",
            schemaPath: "#/properties/listId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
const oe = D;
function D(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = D.evaluated;
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
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "name" || s === "folderId" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.folderId !== void 0) {
      let s = r.folderId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/folderId",
          schemaPath: "#/properties/folderId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/folderId",
            schemaPath: "#/properties/folderId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/folderId",
            schemaPath: "#/properties/folderId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
const le = q;
function q(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = q.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.listId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "listId" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.listId !== void 0) {
      let s = r.listId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/listId",
          schemaPath: "#/properties/listId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/listId",
            schemaPath: "#/properties/listId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/listId",
            schemaPath: "#/properties/listId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
const ue = T;
function T(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = T.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.listId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.emails === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "emails" },
        message: "must have required property 'emails'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "listId" || s === "emails" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.listId !== void 0) {
      let s = r.listId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/listId",
          schemaPath: "#/properties/listId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/listId",
            schemaPath: "#/properties/listId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/listId",
            schemaPath: "#/properties/listId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.emails !== void 0) {
      let s = r.emails;
      if (Array.isArray(s)) {
        if (s.length < 1) {
          const p = {
            instancePath: a + "/emails",
            schemaPath: "#/properties/emails/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        const t = s.length;
        for (let p = 0; p < t; p++)
          if (typeof s[p] != "string") {
            const o = {
              instancePath: a + "/emails/" + p,
              schemaPath: "#/properties/emails/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: a + "/emails",
          schemaPath: "#/properties/emails/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((T.errors = e), i === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ce = E;
function E(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = E.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.listId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.emails === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "emails" },
        message: "must have required property 'emails'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "listId" || s === "emails" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.listId !== void 0) {
      let s = r.listId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/listId",
          schemaPath: "#/properties/listId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/listId",
            schemaPath: "#/properties/listId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/listId",
            schemaPath: "#/properties/listId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.emails !== void 0) {
      let s = r.emails;
      if (Array.isArray(s)) {
        if (s.length < 1) {
          const p = {
            instancePath: a + "/emails",
            schemaPath: "#/properties/emails/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        const t = s.length;
        for (let p = 0; p < t; p++)
          if (typeof s[p] != "string") {
            const o = {
              instancePath: a + "/emails/" + p,
              schemaPath: "#/properties/emails/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: a + "/emails",
          schemaPath: "#/properties/emails/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((E.errors = e), i === 0);
}
E.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const de = O;
function O(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = O.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "limit" ||
          s === "offset" ||
          s === "accountId" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 50 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.offset !== void 0) {
      let s = r.offset;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
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
  return ((O.errors = e), i === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ye = L;
function L(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = L.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.campaignId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "campaignId" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.campaignId !== void 0) {
      let s = r.campaignId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/campaignId",
          schemaPath: "#/properties/campaignId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/campaignId",
            schemaPath: "#/properties/campaignId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/campaignId",
            schemaPath: "#/properties/campaignId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((L.errors = e), i === 0);
}
L.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const fe = S,
  qe = {
    properties: {
      name: { type: "string" },
      subject: { type: "string" },
      sender: {
        type: "object",
        properties: { name: { type: "string" }, email: { type: "string" } },
        required: ["email"],
      },
      htmlContent: { type: "string" },
      templateId: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      recipients: {
        type: "object",
        properties: {
          listIds: {
            type: "array",
            items: {
              type: "integer",
              minimum: -9007199254740991,
              maximum: 9007199254740991,
            },
          },
          segmentIds: {
            type: "array",
            items: {
              type: "integer",
              minimum: -9007199254740991,
              maximum: 9007199254740991,
            },
          },
          excludedListIds: {
            type: "array",
            items: {
              type: "integer",
              minimum: -9007199254740991,
              maximum: 9007199254740991,
            },
          },
        },
      },
      scheduledAt: { type: "string" },
      replyTo: { type: "string" },
      toField: { type: "string" },
      tag: { type: "string" },
      accountId: { type: "string" },
    },
  };
function S(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = S.evaluated;
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
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.subject === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "subject" },
        message: "must have required property 'subject'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.sender === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sender" },
        message: "must have required property 'sender'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.recipients === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "recipients" },
        message: "must have required property 'recipients'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!f.call(qe.properties, s)) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
    if (r.sender !== void 0) {
      let s = r.sender;
      if (s && typeof s == "object" && !Array.isArray(s)) {
        if (s.email === void 0) {
          const t = {
            instancePath: a + "/sender",
            schemaPath: "#/properties/sender/required",
            keyword: "required",
            params: { missingProperty: "email" },
            message: "must have required property 'email'",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s.name !== void 0 && typeof s.name != "string") {
          const t = {
            instancePath: a + "/sender/name",
            schemaPath: "#/properties/sender/properties/name/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s.email !== void 0 && typeof s.email != "string") {
          const t = {
            instancePath: a + "/sender/email",
            schemaPath: "#/properties/sender/properties/email/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/sender",
          schemaPath: "#/properties/sender/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.htmlContent !== void 0 && typeof r.htmlContent != "string") {
      const s = {
        instancePath: a + "/htmlContent",
        schemaPath: "#/properties/htmlContent/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.templateId !== void 0) {
      let s = r.templateId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/templateId",
          schemaPath: "#/properties/templateId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.recipients !== void 0) {
      let s = r.recipients;
      if (s && typeof s == "object" && !Array.isArray(s)) {
        if (s.listIds !== void 0) {
          let t = s.listIds;
          if (Array.isArray(t)) {
            const p = t.length;
            for (let o = 0; o < p; o++) {
              let n = t[o];
              if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
                const l = {
                  instancePath: a + "/recipients/listIds/" + o,
                  schemaPath:
                    "#/properties/recipients/properties/listIds/items/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                };
                (e === null ? (e = [l]) : e.push(l), i++);
              }
              if (typeof n == "number") {
                if (n > 9007199254740991 || isNaN(n)) {
                  const l = {
                    instancePath: a + "/recipients/listIds/" + o,
                    schemaPath:
                      "#/properties/recipients/properties/listIds/items/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 9007199254740991 },
                    message: "must be <= 9007199254740991",
                  };
                  (e === null ? (e = [l]) : e.push(l), i++);
                }
                if (n < -9007199254740991 || isNaN(n)) {
                  const l = {
                    instancePath: a + "/recipients/listIds/" + o,
                    schemaPath:
                      "#/properties/recipients/properties/listIds/items/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: -9007199254740991 },
                    message: "must be >= -9007199254740991",
                  };
                  (e === null ? (e = [l]) : e.push(l), i++);
                }
              }
            }
          } else {
            const p = {
              instancePath: a + "/recipients/listIds",
              schemaPath: "#/properties/recipients/properties/listIds/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
        }
        if (s.segmentIds !== void 0) {
          let t = s.segmentIds;
          if (Array.isArray(t)) {
            const p = t.length;
            for (let o = 0; o < p; o++) {
              let n = t[o];
              if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
                const l = {
                  instancePath: a + "/recipients/segmentIds/" + o,
                  schemaPath:
                    "#/properties/recipients/properties/segmentIds/items/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                };
                (e === null ? (e = [l]) : e.push(l), i++);
              }
              if (typeof n == "number") {
                if (n > 9007199254740991 || isNaN(n)) {
                  const l = {
                    instancePath: a + "/recipients/segmentIds/" + o,
                    schemaPath:
                      "#/properties/recipients/properties/segmentIds/items/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 9007199254740991 },
                    message: "must be <= 9007199254740991",
                  };
                  (e === null ? (e = [l]) : e.push(l), i++);
                }
                if (n < -9007199254740991 || isNaN(n)) {
                  const l = {
                    instancePath: a + "/recipients/segmentIds/" + o,
                    schemaPath:
                      "#/properties/recipients/properties/segmentIds/items/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: -9007199254740991 },
                    message: "must be >= -9007199254740991",
                  };
                  (e === null ? (e = [l]) : e.push(l), i++);
                }
              }
            }
          } else {
            const p = {
              instancePath: a + "/recipients/segmentIds",
              schemaPath: "#/properties/recipients/properties/segmentIds/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
        }
        if (s.excludedListIds !== void 0) {
          let t = s.excludedListIds;
          if (Array.isArray(t)) {
            const p = t.length;
            for (let o = 0; o < p; o++) {
              let n = t[o];
              if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
                const l = {
                  instancePath: a + "/recipients/excludedListIds/" + o,
                  schemaPath:
                    "#/properties/recipients/properties/excludedListIds/items/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                };
                (e === null ? (e = [l]) : e.push(l), i++);
              }
              if (typeof n == "number") {
                if (n > 9007199254740991 || isNaN(n)) {
                  const l = {
                    instancePath: a + "/recipients/excludedListIds/" + o,
                    schemaPath:
                      "#/properties/recipients/properties/excludedListIds/items/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 9007199254740991 },
                    message: "must be <= 9007199254740991",
                  };
                  (e === null ? (e = [l]) : e.push(l), i++);
                }
                if (n < -9007199254740991 || isNaN(n)) {
                  const l = {
                    instancePath: a + "/recipients/excludedListIds/" + o,
                    schemaPath:
                      "#/properties/recipients/properties/excludedListIds/items/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: -9007199254740991 },
                    message: "must be >= -9007199254740991",
                  };
                  (e === null ? (e = [l]) : e.push(l), i++);
                }
              }
            }
          } else {
            const p = {
              instancePath: a + "/recipients/excludedListIds",
              schemaPath:
                "#/properties/recipients/properties/excludedListIds/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
        }
      } else {
        const t = {
          instancePath: a + "/recipients",
          schemaPath: "#/properties/recipients/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.scheduledAt !== void 0 && typeof r.scheduledAt != "string") {
      const s = {
        instancePath: a + "/scheduledAt",
        schemaPath: "#/properties/scheduledAt/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.replyTo !== void 0 && typeof r.replyTo != "string") {
      const s = {
        instancePath: a + "/replyTo",
        schemaPath: "#/properties/replyTo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.toField !== void 0 && typeof r.toField != "string") {
      const s = {
        instancePath: a + "/toField",
        schemaPath: "#/properties/toField/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.tag !== void 0 && typeof r.tag != "string") {
      const s = {
        instancePath: a + "/tag",
        schemaPath: "#/properties/tag/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((S.errors = e), i === 0);
}
S.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const he = C;
function C(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = C.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.campaignId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "confirm" || s === "campaignId" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.confirm !== void 0 && typeof r.confirm != "boolean") {
      const s = {
        instancePath: a + "/confirm",
        schemaPath: "#/properties/confirm/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.campaignId !== void 0) {
      let s = r.campaignId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/campaignId",
          schemaPath: "#/properties/campaignId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/campaignId",
            schemaPath: "#/properties/campaignId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/campaignId",
            schemaPath: "#/properties/campaignId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((C.errors = e), i === 0);
}
C.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ge = F;
function F(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = F.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "templateStatus" ||
          s === "limit" ||
          s === "offset" ||
          s === "accountId" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.templateStatus !== void 0 && typeof r.templateStatus != "boolean") {
      const s = {
        instancePath: a + "/templateStatus",
        schemaPath: "#/properties/templateStatus/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 1e3 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.offset !== void 0) {
      let s = r.offset;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
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
  return ((F.errors = e), i === 0);
}
F.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const be = B;
function B(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = B.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.templateId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "templateId" },
        message: "must have required property 'templateId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "templateId" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.templateId !== void 0) {
      let s = r.templateId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/templateId",
          schemaPath: "#/properties/templateId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((B.errors = e), i === 0);
}
B.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Pe = R,
  Te = {
    properties: {
      templateName: { type: "string" },
      subject: { type: "string" },
      sender: {
        type: "object",
        properties: { name: { type: "string" }, email: { type: "string" } },
        required: ["email"],
      },
      htmlContent: { type: "string" },
      isActive: { type: "boolean" },
      replyTo: { type: "string" },
      toField: { type: "string" },
      tag: { type: "string" },
      accountId: { type: "string" },
    },
  };
function R(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = R.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.templateName === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "templateName" },
        message: "must have required property 'templateName'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.subject === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "subject" },
        message: "must have required property 'subject'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.sender === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sender" },
        message: "must have required property 'sender'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.htmlContent === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "htmlContent" },
        message: "must have required property 'htmlContent'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!f.call(Te.properties, s)) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.templateName !== void 0 && typeof r.templateName != "string") {
      const s = {
        instancePath: a + "/templateName",
        schemaPath: "#/properties/templateName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
    if (r.sender !== void 0) {
      let s = r.sender;
      if (s && typeof s == "object" && !Array.isArray(s)) {
        if (s.email === void 0) {
          const t = {
            instancePath: a + "/sender",
            schemaPath: "#/properties/sender/required",
            keyword: "required",
            params: { missingProperty: "email" },
            message: "must have required property 'email'",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s.name !== void 0 && typeof s.name != "string") {
          const t = {
            instancePath: a + "/sender/name",
            schemaPath: "#/properties/sender/properties/name/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s.email !== void 0 && typeof s.email != "string") {
          const t = {
            instancePath: a + "/sender/email",
            schemaPath: "#/properties/sender/properties/email/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/sender",
          schemaPath: "#/properties/sender/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.htmlContent !== void 0 && typeof r.htmlContent != "string") {
      const s = {
        instancePath: a + "/htmlContent",
        schemaPath: "#/properties/htmlContent/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isActive !== void 0 && typeof r.isActive != "boolean") {
      const s = {
        instancePath: a + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.replyTo !== void 0 && typeof r.replyTo != "string") {
      const s = {
        instancePath: a + "/replyTo",
        schemaPath: "#/properties/replyTo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.toField !== void 0 && typeof r.toField != "string") {
      const s = {
        instancePath: a + "/toField",
        schemaPath: "#/properties/toField/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.tag !== void 0 && typeof r.tag != "string") {
      const s = {
        instancePath: a + "/tag",
        schemaPath: "#/properties/tag/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((R.errors = e), i === 0);
}
R.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ke = V,
  Ee = {
    properties: {
      templateId: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      templateName: { type: "string" },
      subject: { type: "string" },
      sender: {
        type: "object",
        properties: { name: { type: "string" }, email: { type: "string" } },
      },
      htmlContent: { type: "string" },
      isActive: { type: "boolean" },
      replyTo: { type: "string" },
      toField: { type: "string" },
      tag: { type: "string" },
      accountId: { type: "string" },
    },
  };
function V(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = V.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.templateId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "templateId" },
        message: "must have required property 'templateId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!f.call(Ee.properties, s)) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.templateId !== void 0) {
      let s = r.templateId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/templateId",
          schemaPath: "#/properties/templateId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.templateName !== void 0 && typeof r.templateName != "string") {
      const s = {
        instancePath: a + "/templateName",
        schemaPath: "#/properties/templateName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
    if (r.sender !== void 0) {
      let s = r.sender;
      if (s && typeof s == "object" && !Array.isArray(s)) {
        if (s.name !== void 0 && typeof s.name != "string") {
          const t = {
            instancePath: a + "/sender/name",
            schemaPath: "#/properties/sender/properties/name/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s.email !== void 0 && typeof s.email != "string") {
          const t = {
            instancePath: a + "/sender/email",
            schemaPath: "#/properties/sender/properties/email/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/sender",
          schemaPath: "#/properties/sender/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.htmlContent !== void 0 && typeof r.htmlContent != "string") {
      const s = {
        instancePath: a + "/htmlContent",
        schemaPath: "#/properties/htmlContent/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isActive !== void 0 && typeof r.isActive != "boolean") {
      const s = {
        instancePath: a + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.replyTo !== void 0 && typeof r.replyTo != "string") {
      const s = {
        instancePath: a + "/replyTo",
        schemaPath: "#/properties/replyTo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.toField !== void 0 && typeof r.toField != "string") {
      const s = {
        instancePath: a + "/toField",
        schemaPath: "#/properties/toField/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.tag !== void 0 && typeof r.tag != "string") {
      const s = {
        instancePath: a + "/tag",
        schemaPath: "#/properties/tag/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((V.errors = e), i === 0);
}
V.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ie = M;
function M(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = M.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.templateId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "templateId" },
        message: "must have required property 'templateId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "templateId" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.templateId !== void 0) {
      let s = r.templateId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/templateId",
          schemaPath: "#/properties/templateId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((M.errors = e), i === 0);
}
M.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const we = Y,
  Oe = {
    properties: { type: { enum: ["marketing", "transactional", "inbound"] } },
  };
function Y(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = Y.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!(s === "type" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.type !== void 0) {
      let s = r.type;
      if (typeof s != "string") {
        const t = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "marketing" || s === "transactional" || s === "inbound")) {
        const t = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: Oe.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((Y.errors = e), i === 0);
}
Y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ve = z;
function z(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = z.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.webhookId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "webhookId" },
        message: "must have required property 'webhookId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "webhookId" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.webhookId !== void 0) {
      let s = r.webhookId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/webhookId",
          schemaPath: "#/properties/webhookId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/webhookId",
            schemaPath: "#/properties/webhookId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/webhookId",
            schemaPath: "#/properties/webhookId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((z.errors = e), i === 0);
}
z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ne = G,
  Le = {
    properties: { type: { enum: ["marketing", "transactional", "inbound"] } },
  };
function G(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = G.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.url === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "url" },
        message: "must have required property 'url'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.events === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "events" },
        message: "must have required property 'events'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.type === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "type" },
        message: "must have required property 'type'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "url" ||
          s === "description" ||
          s === "events" ||
          s === "type" ||
          s === "accountId"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.url !== void 0 && typeof r.url != "string") {
      const s = {
        instancePath: a + "/url",
        schemaPath: "#/properties/url/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.description !== void 0 && typeof r.description != "string") {
      const s = {
        instancePath: a + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.events !== void 0) {
      let s = r.events;
      if (Array.isArray(s)) {
        if (s.length < 1) {
          const p = {
            instancePath: a + "/events",
            schemaPath: "#/properties/events/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        const t = s.length;
        for (let p = 0; p < t; p++)
          if (typeof s[p] != "string") {
            const o = {
              instancePath: a + "/events/" + p,
              schemaPath: "#/properties/events/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: a + "/events",
          schemaPath: "#/properties/events/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.type !== void 0) {
      let s = r.type;
      if (typeof s != "string") {
        const t = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "marketing" || s === "transactional" || s === "inbound")) {
        const t = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: Le.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((G.errors = e), i === 0);
}
G.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _e = H;
function H(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = H.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.webhookId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "webhookId" },
        message: "must have required property 'webhookId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "webhookId" || s === "accountId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.webhookId !== void 0) {
      let s = r.webhookId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/webhookId",
          schemaPath: "#/properties/webhookId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/webhookId",
            schemaPath: "#/properties/webhookId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/webhookId",
            schemaPath: "#/properties/webhookId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((H.errors = e), i === 0);
}
H.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ae = J;
function J(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = J.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (s !== "accountId") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((J.errors = e), i === 0);
}
J.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const je = K;
function K(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = K.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "startDate" ||
          s === "endDate" ||
          s === "days" ||
          s === "tag" ||
          s === "accountId"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.startDate !== void 0 && typeof r.startDate != "string") {
      const s = {
        instancePath: a + "/startDate",
        schemaPath: "#/properties/startDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.endDate !== void 0 && typeof r.endDate != "string") {
      const s = {
        instancePath: a + "/endDate",
        schemaPath: "#/properties/endDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.days !== void 0) {
      let s = r.days;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/days",
          schemaPath: "#/properties/days/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 90 || isNaN(s)) {
          const t = {
            instancePath: a + "/days",
            schemaPath: "#/properties/days/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 90 },
            message: "must be <= 90",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/days",
            schemaPath: "#/properties/days/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.tag !== void 0 && typeof r.tag != "string") {
      const s = {
        instancePath: a + "/tag",
        schemaPath: "#/properties/tag/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((K.errors = e), i === 0);
}
K.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const xe = Q,
  Se = {
    properties: {
      limit: { type: "integer", minimum: 1, maximum: 100 },
      offset: { type: "integer", minimum: 0, maximum: 9007199254740991 },
      email: { type: "string" },
      messageId: { type: "string" },
      templateId: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      startDate: { type: "string" },
      endDate: { type: "string" },
      accountId: { type: "string" },
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
  };
function Q(
  r,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: c,
    rootData: d = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const m = Q.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!f.call(Se.properties, s)) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.offset !== void 0) {
      let s = r.offset;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.email !== void 0 && typeof r.email != "string") {
      const s = {
        instancePath: a + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
    if (r.templateId !== void 0) {
      let s = r.templateId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/templateId",
          schemaPath: "#/properties/templateId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/templateId",
            schemaPath: "#/properties/templateId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.startDate !== void 0 && typeof r.startDate != "string") {
      const s = {
        instancePath: a + "/startDate",
        schemaPath: "#/properties/startDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.endDate !== void 0 && typeof r.endDate != "string") {
      const s = {
        instancePath: a + "/endDate",
        schemaPath: "#/properties/endDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
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
  return ((Q.errors = e), i === 0);
}
Q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ce = {
  brevo_send_email: W,
  brevo_list_contacts: X,
  brevo_create_contact: Z,
  brevo_list_campaigns: $,
  brevo_get_account: ee,
  brevo_send_template_email: se,
  brevo_get_contact: te,
  brevo_update_contact: re,
  brevo_delete_contact: ie,
  brevo_search_contacts: ae,
  brevo_list_contact_attributes: me,
  brevo_list_lists: pe,
  brevo_get_list: ne,
  brevo_create_list: oe,
  brevo_delete_list: le,
  brevo_add_contact_to_list: ue,
  brevo_remove_contact_from_list: ce,
  brevo_list_folders: de,
  brevo_get_campaign: ye,
  brevo_create_campaign: fe,
  brevo_send_campaign: he,
  brevo_list_email_templates: ge,
  brevo_get_email_template: be,
  brevo_create_email_template: Pe,
  brevo_update_email_template: ke,
  brevo_delete_email_template: Ie,
  brevo_list_webhooks: we,
  brevo_get_webhook: ve,
  brevo_create_webhook: Ne,
  brevo_delete_webhook: _e,
  brevo_list_senders: Ae,
  brevo_get_smtp_report: je,
  brevo_get_transactional_email_logs: xe,
};
exports.NATIVE_TOOL_VALIDATORS = Ce;
exports.validate_brevo_add_contact_to_list = ue;
exports.validate_brevo_create_campaign = fe;
exports.validate_brevo_create_contact = Z;
exports.validate_brevo_create_email_template = Pe;
exports.validate_brevo_create_list = oe;
exports.validate_brevo_create_webhook = Ne;
exports.validate_brevo_delete_contact = ie;
exports.validate_brevo_delete_email_template = Ie;
exports.validate_brevo_delete_list = le;
exports.validate_brevo_delete_webhook = _e;
exports.validate_brevo_get_account = ee;
exports.validate_brevo_get_campaign = ye;
exports.validate_brevo_get_contact = te;
exports.validate_brevo_get_email_template = be;
exports.validate_brevo_get_list = ne;
exports.validate_brevo_get_smtp_report = je;
exports.validate_brevo_get_transactional_email_logs = xe;
exports.validate_brevo_get_webhook = ve;
exports.validate_brevo_list_campaigns = $;
exports.validate_brevo_list_contact_attributes = me;
exports.validate_brevo_list_contacts = X;
exports.validate_brevo_list_email_templates = ge;
exports.validate_brevo_list_folders = de;
exports.validate_brevo_list_lists = pe;
exports.validate_brevo_list_senders = Ae;
exports.validate_brevo_list_webhooks = we;
exports.validate_brevo_remove_contact_from_list = ce;
exports.validate_brevo_search_contacts = ae;
exports.validate_brevo_send_campaign = he;
exports.validate_brevo_send_email = W;
exports.validate_brevo_send_template_email = se;
exports.validate_brevo_update_contact = re;
exports.validate_brevo_update_email_template = ke;
