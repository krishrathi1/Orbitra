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
      (t._sentryDebugIds[n] = "e2fbf4a3-8ee6-4516-a32e-00cf371f4cc7"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-e2fbf4a3-8ee6-4516-a32e-00cf371f4cc7"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const N = h;
function h(
  t,
  {
    instancePath: n = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = h.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.from === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "from" },
        message: "must have required property 'from'",
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
    if (t.subject === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "subject" },
        message: "must have required property 'subject'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "from" ||
          s === "to" ||
          s === "subject" ||
          s === "html" ||
          s === "text"
        )
      ) {
        const p = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    if (t.from !== void 0 && typeof t.from != "string") {
      const s = {
        instancePath: n + "/from",
        schemaPath: "#/properties/from/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.to !== void 0) {
      let s = t.to;
      const p = i;
      let m = !1;
      const v = i;
      if (typeof s != "string") {
        const o = {
          instancePath: n + "/to",
          schemaPath: "#/properties/to/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      var r = v === i;
      m = m || r;
      const _ = i;
      if (Array.isArray(s)) {
        const o = s.length;
        for (let u = 0; u < o; u++)
          if (typeof s[u] != "string") {
            const c = {
              instancePath: n + "/to/" + u,
              schemaPath: "#/properties/to/anyOf/1/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const o = {
          instancePath: n + "/to",
          schemaPath: "#/properties/to/anyOf/1/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      var r = _ === i;
      if (((m = m || r), m))
        ((i = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const o = {
          instancePath: n + "/to",
          schemaPath: "#/properties/to/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
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
    if (t.html !== void 0 && typeof t.html != "string") {
      const s = {
        instancePath: n + "/html",
        schemaPath: "#/properties/html/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.text !== void 0 && typeof t.text != "string") {
      const s = {
        instancePath: n + "/text",
        schemaPath: "#/properties/text/type",
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
const A = g;
function g(
  t,
  {
    instancePath: n = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = g.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.id === void 0) {
      const r = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "id" },
        message: "must have required property 'id'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (r !== "id") {
        const s = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.id !== void 0 && typeof t.id != "string") {
      const r = {
        instancePath: n + "/id",
        schemaPath: "#/properties/id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((g.errors = e), i === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = b;
function b(
  t,
  {
    instancePath: n = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = b.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const r in t)
      if (
        !(
          r === "limit" ||
          r === "after" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const s = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.limit !== void 0 && typeof t.limit != "number") {
      const r = {
        instancePath: n + "/limit",
        schemaPath: "#/properties/limit/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.after !== void 0 && typeof t.after != "string") {
      const r = {
        instancePath: n + "/after",
        schemaPath: "#/properties/after/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.start !== void 0) {
      let r = t.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.end !== void 0) {
      let r = t.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const r = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((b.errors = e), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const q = P;
function P(
  t,
  {
    instancePath: n = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = P.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.from === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "from" },
        message: "must have required property 'from'",
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
    if (t.subject === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "subject" },
        message: "must have required property 'subject'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.scheduledAt === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "scheduledAt" },
        message: "must have required property 'scheduledAt'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "from" ||
          s === "to" ||
          s === "subject" ||
          s === "html" ||
          s === "text" ||
          s === "scheduledAt"
        )
      ) {
        const p = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    if (t.from !== void 0 && typeof t.from != "string") {
      const s = {
        instancePath: n + "/from",
        schemaPath: "#/properties/from/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.to !== void 0) {
      let s = t.to;
      const p = i;
      let m = !1;
      const v = i;
      if (typeof s != "string") {
        const o = {
          instancePath: n + "/to",
          schemaPath: "#/properties/to/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      var r = v === i;
      m = m || r;
      const _ = i;
      if (Array.isArray(s)) {
        const o = s.length;
        for (let u = 0; u < o; u++)
          if (typeof s[u] != "string") {
            const c = {
              instancePath: n + "/to/" + u,
              schemaPath: "#/properties/to/anyOf/1/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const o = {
          instancePath: n + "/to",
          schemaPath: "#/properties/to/anyOf/1/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      var r = _ === i;
      if (((m = m || r), m))
        ((i = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const o = {
          instancePath: n + "/to",
          schemaPath: "#/properties/to/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
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
    if (t.html !== void 0 && typeof t.html != "string") {
      const s = {
        instancePath: n + "/html",
        schemaPath: "#/properties/html/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.text !== void 0 && typeof t.text != "string") {
      const s = {
        instancePath: n + "/text",
        schemaPath: "#/properties/text/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.scheduledAt !== void 0 && typeof t.scheduledAt != "string") {
      const s = {
        instancePath: n + "/scheduledAt",
        schemaPath: "#/properties/scheduledAt/type",
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
const I = w;
function w(
  t,
  {
    instancePath: n = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = w.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.audienceId === void 0) {
      const r = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "audienceId" },
        message: "must have required property 'audienceId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.email === void 0) {
      const r = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "email" },
        message: "must have required property 'email'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (
        !(
          r === "audienceId" ||
          r === "email" ||
          r === "firstName" ||
          r === "lastName" ||
          r === "unsubscribed"
        )
      ) {
        const s = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.audienceId !== void 0 && typeof t.audienceId != "string") {
      const r = {
        instancePath: n + "/audienceId",
        schemaPath: "#/properties/audienceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.email !== void 0 && typeof t.email != "string") {
      const r = {
        instancePath: n + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.firstName !== void 0 && typeof t.firstName != "string") {
      const r = {
        instancePath: n + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.lastName !== void 0 && typeof t.lastName != "string") {
      const r = {
        instancePath: n + "/lastName",
        schemaPath: "#/properties/lastName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.unsubscribed !== void 0 && typeof t.unsubscribed != "boolean") {
      const r = {
        instancePath: n + "/unsubscribed",
        schemaPath: "#/properties/unsubscribed/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((w.errors = e), i === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const O = k;
function k(
  t,
  {
    instancePath: n = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = k.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const r in t)
      if (
        !(
          r === "limit" ||
          r === "after" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const s = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.limit !== void 0 && typeof t.limit != "number") {
      const r = {
        instancePath: n + "/limit",
        schemaPath: "#/properties/limit/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.after !== void 0 && typeof t.after != "string") {
      const r = {
        instancePath: n + "/after",
        schemaPath: "#/properties/after/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.start !== void 0) {
      let r = t.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.end !== void 0) {
      let r = t.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const r = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((k.errors = e), i === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const D = {
  resend_send_email: N,
  resend_get_email: A,
  resend_list_domains: j,
  resend_schedule_email: q,
  resend_create_contact: I,
  resend_list_audiences: O,
};
exports.NATIVE_TOOL_VALIDATORS = D;
exports.validate_resend_create_contact = I;
exports.validate_resend_get_email = A;
exports.validate_resend_list_audiences = O;
exports.validate_resend_list_domains = j;
exports.validate_resend_schedule_email = q;
exports.validate_resend_send_email = N;
