"use strict";
(function () {
  try {
    var s =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    s.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var s =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      p = new s.Error().stack;
    p &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[p] = "e9ea2d32-cfb3-4ee2-b65e-3239d6c3c128"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-e9ea2d32-cfb3-4ee2-b65e-3239d6c3c128"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const P = l;
function l(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    i = 0;
  const o = l.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const e = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (
        !(
          e === "projectId" ||
          e === "event" ||
          e === "pageUrl" ||
          e === "limit" ||
          e === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const e = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.event !== void 0 && typeof s.event != "string") {
      const e = {
        instancePath: p + "/event",
        schemaPath: "#/properties/event/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.pageUrl !== void 0 && typeof s.pageUrl != "string") {
      const e = {
        instancePath: p + "/pageUrl",
        schemaPath: "#/properties/pageUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.limit !== void 0) {
      let e = s.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: p + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((l.errors = r), i === 0);
}
l.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const k = f;
function f(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    i = 0;
  const o = f.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const e = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (
        !(
          e === "projectId" ||
          e === "limit" ||
          e === "pageUrl" ||
          e === "start" ||
          e === "end" ||
          e === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const e = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.limit !== void 0 && typeof s.limit != "number") {
      const e = {
        instancePath: p + "/limit",
        schemaPath: "#/properties/limit/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.pageUrl !== void 0 && typeof s.pageUrl != "string") {
      const e = {
        instancePath: p + "/pageUrl",
        schemaPath: "#/properties/pageUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((f.errors = r), i === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const w = y;
function y(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    i = 0;
  const o = y.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const e = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (
        !(
          e === "projectId" ||
          e === "limit" ||
          e === "pageUrl" ||
          e === "start" ||
          e === "end" ||
          e === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const e = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.limit !== void 0 && typeof s.limit != "number") {
      const e = {
        instancePath: p + "/limit",
        schemaPath: "#/properties/limit/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.pageUrl !== void 0 && typeof s.pageUrl != "string") {
      const e = {
        instancePath: p + "/pageUrl",
        schemaPath: "#/properties/pageUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((y.errors = r), i === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const v = d;
function d(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    i = 0;
  const o = d.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const e = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.query === void 0) {
      const e = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (!(e === "projectId" || e === "query")) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const e = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.query !== void 0 && typeof s.query != "string") {
      const e = {
        instancePath: p + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((d.errors = r), i === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = c;
function c(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    i = 0;
  const o = c.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const e = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.key === void 0) {
      const e = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "key" },
        message: "must have required property 'key'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.name === void 0) {
      const e = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (
        !(e === "projectId" || e === "key" || e === "name" || e === "active")
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const e = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.key !== void 0 && typeof s.key != "string") {
      const e = {
        instancePath: p + "/key",
        schemaPath: "#/properties/key/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const e = {
        instancePath: p + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.active !== void 0 && typeof s.active != "boolean") {
      const e = {
        instancePath: p + "/active",
        schemaPath: "#/properties/active/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((c.errors = r), i === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _ = h;
function h(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    i = 0;
  const o = h.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const e = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.id === void 0) {
      const e = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "id" },
        message: "must have required property 'id'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (
        !(
          e === "projectId" ||
          e === "id" ||
          e === "active" ||
          e === "rolloutPercentage" ||
          e === "name"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const e = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.id !== void 0 && typeof s.id != "string") {
      const e = {
        instancePath: p + "/id",
        schemaPath: "#/properties/id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.active !== void 0 && typeof s.active != "boolean") {
      const e = {
        instancePath: p + "/active",
        schemaPath: "#/properties/active/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.rolloutPercentage !== void 0) {
      let e = s.rolloutPercentage;
      if (typeof e == "number") {
        if (e > 100 || isNaN(e)) {
          const t = {
            instancePath: p + "/rolloutPercentage",
            schemaPath: "#/properties/rolloutPercentage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 0 || isNaN(e)) {
          const t = {
            instancePath: p + "/rolloutPercentage",
            schemaPath: "#/properties/rolloutPercentage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      } else {
        const t = {
          instancePath: p + "/rolloutPercentage",
          schemaPath: "#/properties/rolloutPercentage/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const e = {
        instancePath: p + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((h.errors = r), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const I = g;
function g(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    i = 0;
  const o = g.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const e = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (
        !(
          e === "projectId" ||
          e === "query" ||
          e === "limit" ||
          e === "pageUrl" ||
          e === "start" ||
          e === "end" ||
          e === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const e = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.query !== void 0 && typeof s.query != "string") {
      const e = {
        instancePath: p + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.limit !== void 0) {
      let e = s.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: p + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 200 || isNaN(e)) {
          const t = {
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 200 },
            message: "must be <= 200",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.pageUrl !== void 0 && typeof s.pageUrl != "string") {
      const e = {
        instancePath: p + "/pageUrl",
        schemaPath: "#/properties/pageUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((g.errors = r), i === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const N = b;
function b(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    i = 0;
  const o = b.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const e in s)
      if (
        !(
          e === "limit" ||
          e === "pageUrl" ||
          e === "start" ||
          e === "end" ||
          e === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.limit !== void 0 && typeof s.limit != "number") {
      const e = {
        instancePath: p + "/limit",
        schemaPath: "#/properties/limit/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.pageUrl !== void 0 && typeof s.pageUrl != "string") {
      const e = {
        instancePath: p + "/pageUrl",
        schemaPath: "#/properties/pageUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((b.errors = r), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const q = {
  posthog_query_events: P,
  posthog_list_insights: k,
  posthog_list_feature_flags: w,
  posthog_run_hogql: v,
  posthog_create_feature_flag: j,
  posthog_update_feature_flag: _,
  posthog_list_persons: I,
  posthog_list_projects: N,
};
exports.NATIVE_TOOL_VALIDATORS = q;
exports.validate_posthog_create_feature_flag = j;
exports.validate_posthog_list_feature_flags = w;
exports.validate_posthog_list_insights = k;
exports.validate_posthog_list_persons = I;
exports.validate_posthog_list_projects = N;
exports.validate_posthog_query_events = P;
exports.validate_posthog_run_hogql = v;
exports.validate_posthog_update_feature_flag = _;
