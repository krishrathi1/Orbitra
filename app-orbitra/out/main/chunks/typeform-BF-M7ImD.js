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
      (s._sentryDebugIds[p] = "97fc9c37-e74a-496e-8550-24c2707e2e48"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-97fc9c37-e74a-496e-8550-24c2707e2e48"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _ = d;
function d(
  s,
  {
    instancePath: p = "",
    parentData: l,
    parentDataProperty: u,
    rootData: f = s,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = d.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "search" ||
          r === "page" ||
          r === "pageSize"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.search !== void 0 && typeof s.search != "string") {
      const r = {
        instancePath: p + "/search",
        schemaPath: "#/properties/search/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageSize !== void 0) {
      let r = s.pageSize;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/pageSize",
          schemaPath: "#/properties/pageSize/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 200 || isNaN(r)) {
          const t = {
            instancePath: p + "/pageSize",
            schemaPath: "#/properties/pageSize/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 200 },
            message: "must be <= 200",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/pageSize",
            schemaPath: "#/properties/pageSize/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
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
  return ((d.errors = e), i === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const N = c;
function c(
  s,
  {
    instancePath: p = "",
    parentData: l,
    parentDataProperty: u,
    rootData: f = s,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = c.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.formId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "formId" },
        message: "must have required property 'formId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (r !== "formId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.formId !== void 0 && typeof s.formId != "string") {
      const r = {
        instancePath: p + "/formId",
        schemaPath: "#/properties/formId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((c.errors = e), i === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const I = h,
  x = {
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
      before: { type: "string" },
      formId: { type: "string" },
      pageSize: { type: "integer", minimum: 1, maximum: 1e3 },
      since: { type: "string" },
      until: { type: "string" },
      query: { type: "string" },
    },
  },
  T = Object.prototype.hasOwnProperty;
function h(
  s,
  {
    instancePath: p = "",
    parentData: l,
    parentDataProperty: u,
    rootData: f = s,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = h.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.formId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "formId" },
        message: "must have required property 'formId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!T.call(x.properties, r)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.before !== void 0 && typeof s.before != "string") {
      const r = {
        instancePath: p + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.formId !== void 0 && typeof s.formId != "string") {
      const r = {
        instancePath: p + "/formId",
        schemaPath: "#/properties/formId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.pageSize !== void 0) {
      let r = s.pageSize;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/pageSize",
          schemaPath: "#/properties/pageSize/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 1e3 || isNaN(r)) {
          const t = {
            instancePath: p + "/pageSize",
            schemaPath: "#/properties/pageSize/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/pageSize",
            schemaPath: "#/properties/pageSize/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.since !== void 0 && typeof s.since != "string") {
      const r = {
        instancePath: p + "/since",
        schemaPath: "#/properties/since/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.until !== void 0 && typeof s.until != "string") {
      const r = {
        instancePath: p + "/until",
        schemaPath: "#/properties/until/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.query !== void 0 && typeof s.query != "string") {
      const r = {
        instancePath: p + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((h.errors = e), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const q = g;
function g(
  s,
  {
    instancePath: p = "",
    parentData: l,
    parentDataProperty: u,
    rootData: f = s,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = g.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "page" ||
          r === "pageSize"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageSize !== void 0) {
      let r = s.pageSize;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/pageSize",
          schemaPath: "#/properties/pageSize/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 200 || isNaN(r)) {
          const t = {
            instancePath: p + "/pageSize",
            schemaPath: "#/properties/pageSize/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 200 },
            message: "must be <= 200",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/pageSize",
            schemaPath: "#/properties/pageSize/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
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
  return ((g.errors = e), i === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const A = b;
function b(
  s,
  {
    instancePath: p = "",
    parentData: l,
    parentDataProperty: u,
    rootData: f = s,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = b.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.title === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "title" || r === "fields")) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.title !== void 0 && typeof s.title != "string") {
      const r = {
        instancePath: p + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.fields !== void 0) {
      let r = s.fields;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let n = 0; n < t; n++) {
          let m = r[n];
          if (m && typeof m == "object" && !Array.isArray(m)) {
            if (m.type === void 0) {
              const o = {
                instancePath: p + "/fields/" + n,
                schemaPath: "#/properties/fields/items/required",
                keyword: "required",
                params: { missingProperty: "type" },
                message: "must have required property 'type'",
              };
              (e === null ? (e = [o]) : e.push(o), i++);
            }
            if (m.title === void 0) {
              const o = {
                instancePath: p + "/fields/" + n,
                schemaPath: "#/properties/fields/items/required",
                keyword: "required",
                params: { missingProperty: "title" },
                message: "must have required property 'title'",
              };
              (e === null ? (e = [o]) : e.push(o), i++);
            }
            if (m.type !== void 0 && typeof m.type != "string") {
              const o = {
                instancePath: p + "/fields/" + n + "/type",
                schemaPath: "#/properties/fields/items/properties/type/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), i++);
            }
            if (m.title !== void 0 && typeof m.title != "string") {
              const o = {
                instancePath: p + "/fields/" + n + "/title",
                schemaPath: "#/properties/fields/items/properties/title/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), i++);
            }
            if (m.required !== void 0 && typeof m.required != "boolean") {
              const o = {
                instancePath: p + "/fields/" + n + "/required",
                schemaPath:
                  "#/properties/fields/items/properties/required/type",
                keyword: "type",
                params: { type: "boolean" },
                message: "must be boolean",
              };
              (e === null ? (e = [o]) : e.push(o), i++);
            }
          } else {
            const o = {
              instancePath: p + "/fields/" + n,
              schemaPath: "#/properties/fields/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
        }
      } else {
        const t = {
          instancePath: p + "/fields",
          schemaPath: "#/properties/fields/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
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
const S = P;
function P(
  s,
  {
    instancePath: p = "",
    parentData: l,
    parentDataProperty: u,
    rootData: f = s,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = P.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.formId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "formId" },
        message: "must have required property 'formId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (r !== "formId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.formId !== void 0 && typeof s.formId != "string") {
      const r = {
        instancePath: p + "/formId",
        schemaPath: "#/properties/formId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((P.errors = e), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = k;
function k(
  s,
  {
    instancePath: p = "",
    parentData: l,
    parentDataProperty: u,
    rootData: f = s,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = k.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.formId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "formId" },
        message: "must have required property 'formId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "formId" || r === "title" || r === "fields")) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.formId !== void 0 && typeof s.formId != "string") {
      const r = {
        instancePath: p + "/formId",
        schemaPath: "#/properties/formId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.title !== void 0 && typeof s.title != "string") {
      const r = {
        instancePath: p + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.fields !== void 0) {
      let r = s.fields;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let n = 0; n < t; n++) {
          let m = r[n];
          if (m && typeof m == "object" && !Array.isArray(m)) {
            if (m.type === void 0) {
              const o = {
                instancePath: p + "/fields/" + n,
                schemaPath: "#/properties/fields/items/required",
                keyword: "required",
                params: { missingProperty: "type" },
                message: "must have required property 'type'",
              };
              (e === null ? (e = [o]) : e.push(o), i++);
            }
            if (m.title === void 0) {
              const o = {
                instancePath: p + "/fields/" + n,
                schemaPath: "#/properties/fields/items/required",
                keyword: "required",
                params: { missingProperty: "title" },
                message: "must have required property 'title'",
              };
              (e === null ? (e = [o]) : e.push(o), i++);
            }
            if (m.type !== void 0 && typeof m.type != "string") {
              const o = {
                instancePath: p + "/fields/" + n + "/type",
                schemaPath: "#/properties/fields/items/properties/type/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), i++);
            }
            if (m.title !== void 0 && typeof m.title != "string") {
              const o = {
                instancePath: p + "/fields/" + n + "/title",
                schemaPath: "#/properties/fields/items/properties/title/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), i++);
            }
            if (m.required !== void 0 && typeof m.required != "boolean") {
              const o = {
                instancePath: p + "/fields/" + n + "/required",
                schemaPath:
                  "#/properties/fields/items/properties/required/type",
                keyword: "type",
                params: { type: "boolean" },
                message: "must be boolean",
              };
              (e === null ? (e = [o]) : e.push(o), i++);
            }
          } else {
            const o = {
              instancePath: p + "/fields/" + n,
              schemaPath: "#/properties/fields/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
        }
      } else {
        const t = {
          instancePath: p + "/fields",
          schemaPath: "#/properties/fields/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
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
  return ((k.errors = e), i === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const D = w;
function w(
  s,
  {
    instancePath: p = "",
    parentData: l,
    parentDataProperty: u,
    rootData: f = s,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = w.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.formId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "formId" },
        message: "must have required property 'formId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tag === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tag" },
        message: "must have required property 'tag'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.url === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "url" },
        message: "must have required property 'url'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "formId" ||
          r === "tag" ||
          r === "url" ||
          r === "enabled" ||
          r === "secret" ||
          r === "verifySsl"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.formId !== void 0 && typeof s.formId != "string") {
      const r = {
        instancePath: p + "/formId",
        schemaPath: "#/properties/formId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tag !== void 0 && typeof s.tag != "string") {
      const r = {
        instancePath: p + "/tag",
        schemaPath: "#/properties/tag/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.url !== void 0 && typeof s.url != "string") {
      const r = {
        instancePath: p + "/url",
        schemaPath: "#/properties/url/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.enabled !== void 0 && typeof s.enabled != "boolean") {
      const r = {
        instancePath: p + "/enabled",
        schemaPath: "#/properties/enabled/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.secret !== void 0 && typeof s.secret != "string") {
      const r = {
        instancePath: p + "/secret",
        schemaPath: "#/properties/secret/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.verifySsl !== void 0 && typeof s.verifySsl != "boolean") {
      const r = {
        instancePath: p + "/verifySsl",
        schemaPath: "#/properties/verifySsl/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((w.errors = e), i === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = v;
function v(
  s,
  {
    instancePath: p = "",
    parentData: l,
    parentDataProperty: u,
    rootData: f = s,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = v.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.formId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "formId" },
        message: "must have required property 'formId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (r !== "formId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.formId !== void 0 && typeof s.formId != "string") {
      const r = {
        instancePath: p + "/formId",
        schemaPath: "#/properties/formId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((v.errors = e), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const O = {
  typeform_list_forms: _,
  typeform_get_form: N,
  typeform_get_responses: I,
  typeform_list_workspaces: q,
  typeform_create_form: A,
  typeform_delete_form: S,
  typeform_update_form: j,
  typeform_create_webhook: D,
  typeform_list_webhooks: z,
};
exports.NATIVE_TOOL_VALIDATORS = O;
exports.validate_typeform_create_form = A;
exports.validate_typeform_create_webhook = D;
exports.validate_typeform_delete_form = S;
exports.validate_typeform_get_form = N;
exports.validate_typeform_get_responses = I;
exports.validate_typeform_list_forms = _;
exports.validate_typeform_list_webhooks = z;
exports.validate_typeform_list_workspaces = q;
exports.validate_typeform_update_form = j;
