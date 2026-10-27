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
      p = new t.Error().stack;
    p &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[p] = "3db30e7d-785a-4e77-af2d-4438b4f363e1"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-3db30e7d-785a-4e77-af2d-4438b4f363e1"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const I = g;
function g(
  t,
  {
    instancePath: p = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: y = {},
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
    for (const s in t)
      if (
        !(s === "perPage" || s === "start" || s === "end" || s === "cursor")
      ) {
        const r = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.perPage !== void 0) {
      let s = t.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: p,
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
const q = c;
function c(
  t,
  {
    instancePath: p = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = c.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.orgSlug === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orgSlug" },
        message: "must have required property 'orgSlug'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "orgSlug" ||
          s === "perPage" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const r = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.orgSlug !== void 0 && typeof t.orgSlug != "string") {
      const s = {
        instancePath: p + "/orgSlug",
        schemaPath: "#/properties/orgSlug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.perPage !== void 0) {
      let s = t.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: p,
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
const j = h;
function h(
  t,
  {
    instancePath: p = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: y = {},
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
    if (t.orgSlug === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orgSlug" },
        message: "must have required property 'orgSlug'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.projectSlug === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectSlug" },
        message: "must have required property 'projectSlug'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "orgSlug" ||
          s === "projectSlug" ||
          s === "query" ||
          s === "perPage" ||
          s === "limit" ||
          s === "cursor"
        )
      ) {
        const r = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.orgSlug !== void 0 && typeof t.orgSlug != "string") {
      const s = {
        instancePath: p + "/orgSlug",
        schemaPath: "#/properties/orgSlug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.projectSlug !== void 0 && typeof t.projectSlug != "string") {
      const s = {
        instancePath: p + "/projectSlug",
        schemaPath: "#/properties/projectSlug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.query !== void 0 && typeof t.query != "string") {
      const s = {
        instancePath: p + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.perPage !== void 0) {
      let s = t.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
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
          instancePath: p + "/limit",
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
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/limit",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: p,
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
const A = P;
function P(
  t,
  {
    instancePath: p = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: y = {},
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
    if (t.orgSlug === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orgSlug" },
        message: "must have required property 'orgSlug'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.issueId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueId" },
        message: "must have required property 'issueId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "orgSlug" || s === "issueId")) {
        const r = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.orgSlug !== void 0 && typeof t.orgSlug != "string") {
      const s = {
        instancePath: p + "/orgSlug",
        schemaPath: "#/properties/orgSlug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.issueId !== void 0 && typeof t.issueId != "string") {
      const s = {
        instancePath: p + "/issueId",
        schemaPath: "#/properties/issueId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: p,
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
const D = b,
  C = {
    properties: {
      orgSlug: { type: "string" },
      traceId: { type: "string" },
      eventId: { type: "string" },
      limit: { type: "integer", minimum: 1, maximum: 1e4 },
      query: { type: "string" },
      projectIds: { type: "array", items: { type: "string" } },
      start: { type: "string" },
      end: { type: "string" },
      statsPeriod: { type: "string" },
      detailed: { type: "boolean" },
      timestamp: { anyOf: [{ type: "string" }, { type: "number" }] },
    },
  },
  x = Object.prototype.hasOwnProperty;
function b(
  t,
  {
    instancePath: p = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: y = {},
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
    if (t.orgSlug === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orgSlug" },
        message: "must have required property 'orgSlug'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.traceId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "traceId" },
        message: "must have required property 'traceId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (!x.call(C.properties, r)) {
        const o = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    if (t.orgSlug !== void 0 && typeof t.orgSlug != "string") {
      const r = {
        instancePath: p + "/orgSlug",
        schemaPath: "#/properties/orgSlug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.traceId !== void 0 && typeof t.traceId != "string") {
      const r = {
        instancePath: p + "/traceId",
        schemaPath: "#/properties/traceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.eventId !== void 0 && typeof t.eventId != "string") {
      const r = {
        instancePath: p + "/eventId",
        schemaPath: "#/properties/eventId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.limit !== void 0) {
      let r = t.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const o = {
          instancePath: p + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      if (typeof r == "number") {
        if (r > 1e4 || isNaN(r)) {
          const o = {
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e4 },
            message: "must be <= 10000",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        if (r < 1 || isNaN(r)) {
          const o = {
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
      }
    }
    if (t.query !== void 0 && typeof t.query != "string") {
      const r = {
        instancePath: p + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.projectIds !== void 0) {
      let r = t.projectIds;
      if (Array.isArray(r)) {
        const o = r.length;
        for (let a = 0; a < o; a++)
          if (typeof r[a] != "string") {
            const d = {
              instancePath: p + "/projectIds/" + a,
              schemaPath: "#/properties/projectIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), i++);
          }
      } else {
        const o = {
          instancePath: p + "/projectIds",
          schemaPath: "#/properties/projectIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (t.start !== void 0 && typeof t.start != "string") {
      const r = {
        instancePath: p + "/start",
        schemaPath: "#/properties/start/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.end !== void 0 && typeof t.end != "string") {
      const r = {
        instancePath: p + "/end",
        schemaPath: "#/properties/end/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.statsPeriod !== void 0 && typeof t.statsPeriod != "string") {
      const r = {
        instancePath: p + "/statsPeriod",
        schemaPath: "#/properties/statsPeriod/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.detailed !== void 0 && typeof t.detailed != "boolean") {
      const r = {
        instancePath: p + "/detailed",
        schemaPath: "#/properties/detailed/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.timestamp !== void 0) {
      let r = t.timestamp;
      const o = i;
      let a = !1;
      const d = i;
      if (typeof r != "string") {
        const f = {
          instancePath: p + "/timestamp",
          schemaPath: "#/properties/timestamp/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [f]) : e.push(f), i++);
      }
      var s = d === i;
      a = a || s;
      const z = i;
      if (typeof r != "number") {
        const f = {
          instancePath: p + "/timestamp",
          schemaPath: "#/properties/timestamp/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [f]) : e.push(f), i++);
      }
      var s = z === i;
      if (((a = a || s), a))
        ((i = o), e !== null && (o ? (e.length = o) : (e = null)));
      else {
        const f = {
          instancePath: p + "/timestamp",
          schemaPath: "#/properties/timestamp/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [f]) : e.push(f), i++);
      }
    }
  } else {
    const r = {
      instancePath: p,
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
const T = k,
  M = {
    properties: { status: { enum: ["resolved", "unresolved", "ignored"] } },
  };
function k(
  t,
  {
    instancePath: p = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: y = {},
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
    if (t.orgSlug === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orgSlug" },
        message: "must have required property 'orgSlug'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.issueId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueId" },
        message: "must have required property 'issueId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "orgSlug" ||
          s === "issueId" ||
          s === "status" ||
          s === "assignedTo"
        )
      ) {
        const r = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.orgSlug !== void 0 && typeof t.orgSlug != "string") {
      const s = {
        instancePath: p + "/orgSlug",
        schemaPath: "#/properties/orgSlug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.issueId !== void 0 && typeof t.issueId != "string") {
      const s = {
        instancePath: p + "/issueId",
        schemaPath: "#/properties/issueId/type",
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
          instancePath: p + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (!(s === "resolved" || s === "unresolved" || s === "ignored")) {
        const r = {
          instancePath: p + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: M.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.assignedTo !== void 0 && typeof t.assignedTo != "string") {
      const s = {
        instancePath: p + "/assignedTo",
        schemaPath: "#/properties/assignedTo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: p,
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
const O = w,
  Y = {
    properties: {
      orgSlug: { type: "string" },
      issueId: { type: "string" },
      query: { type: "string" },
      environment: { type: "array", items: { type: "string" } },
      start: { type: "string" },
      end: { type: "string" },
      statsPeriod: { type: "string" },
      full: { type: "boolean" },
      sample: { type: "boolean" },
      perPage: { type: "integer", minimum: 1, maximum: 100 },
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
    },
  };
function w(
  t,
  {
    instancePath: p = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: y = {},
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
    if (t.orgSlug === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orgSlug" },
        message: "must have required property 'orgSlug'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.issueId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueId" },
        message: "must have required property 'issueId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!x.call(Y.properties, s)) {
        const r = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.orgSlug !== void 0 && typeof t.orgSlug != "string") {
      const s = {
        instancePath: p + "/orgSlug",
        schemaPath: "#/properties/orgSlug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.issueId !== void 0 && typeof t.issueId != "string") {
      const s = {
        instancePath: p + "/issueId",
        schemaPath: "#/properties/issueId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.query !== void 0 && typeof t.query != "string") {
      const s = {
        instancePath: p + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.environment !== void 0) {
      let s = t.environment;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let o = 0; o < r; o++)
          if (typeof s[o] != "string") {
            const a = {
              instancePath: p + "/environment/" + o,
              schemaPath: "#/properties/environment/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [a]) : e.push(a), i++);
          }
      } else {
        const r = {
          instancePath: p + "/environment",
          schemaPath: "#/properties/environment/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.start !== void 0 && typeof t.start != "string") {
      const s = {
        instancePath: p + "/start",
        schemaPath: "#/properties/start/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.end !== void 0 && typeof t.end != "string") {
      const s = {
        instancePath: p + "/end",
        schemaPath: "#/properties/end/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.statsPeriod !== void 0 && typeof t.statsPeriod != "string") {
      const s = {
        instancePath: p + "/statsPeriod",
        schemaPath: "#/properties/statsPeriod/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.full !== void 0 && typeof t.full != "boolean") {
      const s = {
        instancePath: p + "/full",
        schemaPath: "#/properties/full/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.sample !== void 0 && typeof t.sample != "boolean") {
      const s = {
        instancePath: p + "/sample",
        schemaPath: "#/properties/sample/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.perPage !== void 0) {
      let s = t.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
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
          instancePath: p + "/limit",
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
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/limit",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: p,
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
const E = v;
function v(
  t,
  {
    instancePath: p = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: y = {},
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
    if (t.orgSlug === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orgSlug" },
        message: "must have required property 'orgSlug'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.issueId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueId" },
        message: "must have required property 'issueId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "orgSlug" || s === "issueId")) {
        const r = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.orgSlug !== void 0 && typeof t.orgSlug != "string") {
      const s = {
        instancePath: p + "/orgSlug",
        schemaPath: "#/properties/orgSlug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.issueId !== void 0 && typeof t.issueId != "string") {
      const s = {
        instancePath: p + "/issueId",
        schemaPath: "#/properties/issueId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: p,
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
const L = N;
function N(
  t,
  {
    instancePath: p = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: y = {},
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
    if (t.orgSlug === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orgSlug" },
        message: "must have required property 'orgSlug'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "orgSlug" ||
          s === "query" ||
          s === "perPage" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const r = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.orgSlug !== void 0 && typeof t.orgSlug != "string") {
      const s = {
        instancePath: p + "/orgSlug",
        schemaPath: "#/properties/orgSlug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.query !== void 0 && typeof t.query != "string") {
      const s = {
        instancePath: p + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.perPage !== void 0) {
      let s = t.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: p,
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
const R = S;
function S(
  t,
  {
    instancePath: p = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = S.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.orgSlug === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orgSlug" },
        message: "must have required property 'orgSlug'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.projectSlug === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectSlug" },
        message: "must have required property 'projectSlug'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.eventId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "eventId" },
        message: "must have required property 'eventId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "orgSlug" || s === "projectSlug" || s === "eventId")) {
        const r = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.orgSlug !== void 0 && typeof t.orgSlug != "string") {
      const s = {
        instancePath: p + "/orgSlug",
        schemaPath: "#/properties/orgSlug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.projectSlug !== void 0 && typeof t.projectSlug != "string") {
      const s = {
        instancePath: p + "/projectSlug",
        schemaPath: "#/properties/projectSlug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.eventId !== void 0 && typeof t.eventId != "string") {
      const s = {
        instancePath: p + "/eventId",
        schemaPath: "#/properties/eventId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: p,
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
const V = _;
function _(
  t,
  {
    instancePath: p = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: y = {},
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
    if (t.orgSlug === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orgSlug" },
        message: "must have required property 'orgSlug'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "orgSlug" ||
          s === "perPage" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const r = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.orgSlug !== void 0 && typeof t.orgSlug != "string") {
      const s = {
        instancePath: p + "/orgSlug",
        schemaPath: "#/properties/orgSlug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.perPage !== void 0) {
      let s = t.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: p,
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
const B = {
  sentry_list_organizations: I,
  sentry_list_projects: q,
  sentry_list_issues: j,
  sentry_get_issue: A,
  sentry_get_trace: D,
  sentry_update_issue: T,
  sentry_list_events: O,
  sentry_resolve_issue: E,
  sentry_list_releases: L,
  sentry_get_event: R,
  sentry_list_teams: V,
};
exports.NATIVE_TOOL_VALIDATORS = B;
exports.validate_sentry_get_event = R;
exports.validate_sentry_get_issue = A;
exports.validate_sentry_get_trace = D;
exports.validate_sentry_list_events = O;
exports.validate_sentry_list_issues = j;
exports.validate_sentry_list_organizations = I;
exports.validate_sentry_list_projects = q;
exports.validate_sentry_list_releases = L;
exports.validate_sentry_list_teams = V;
exports.validate_sentry_resolve_issue = E;
exports.validate_sentry_update_issue = T;
