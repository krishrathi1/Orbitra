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
      i = new r.Error().stack;
    i &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[i] = "6a03cae4-28cc-43b8-b3d6-4c8927050e2d"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-6a03cae4-28cc-43b8-b3d6-4c8927050e2d"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const c = o;
function o(
  r,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: l,
    rootData: f = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let s = null,
    a = 0;
  const n = o.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const e in r)
      if (
        !(
          e === "accountId" ||
          e === "limit" ||
          e === "after" ||
          e === "before" ||
          e === "start" ||
          e === "end" ||
          e === "cursor"
        )
      ) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), a++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const e = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
    if (r.limit !== void 0) {
      let e = r.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), a++);
      }
      if (typeof e == "number") {
        if (e > 100 || isNaN(e)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (s === null ? (s = [t]) : s.push(t), a++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), a++);
        }
      }
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const e = {
        instancePath: i + "/after",
        schemaPath: "#/properties/after/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
    if (r.before !== void 0 && typeof r.before != "string") {
      const e = {
        instancePath: i + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
    if (r.start !== void 0) {
      let e = r.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), a++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), a++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), a++);
        }
      }
    }
    if (r.end !== void 0) {
      let e = r.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), a++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), a++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), a++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const e = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), a++);
  }
  return ((o.errors = s), a === 0);
}
o.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const y = p;
function p(
  r,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: l,
    rootData: f = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let s = null,
    a = 0;
  const n = p.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.pageId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pageId" },
        message: "must have required property 'pageId'",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
    for (const e in r)
      if (!(e === "accountId" || e === "pageId")) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), a++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const e = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
    if (r.pageId !== void 0 && typeof r.pageId != "string") {
      const e = {
        instancePath: i + "/pageId",
        schemaPath: "#/properties/pageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), a++);
  }
  return ((p.errors = s), a === 0);
}
p.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const g = m;
function m(
  r,
  {
    instancePath: i = "",
    parentData: u,
    parentDataProperty: l,
    rootData: f = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let s = null,
    a = 0;
  const n = m.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.pageId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pageId" },
        message: "must have required property 'pageId'",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
    for (const e in r)
      if (
        !(
          e === "accountId" ||
          e === "pageId" ||
          e === "limit" ||
          e === "after" ||
          e === "before" ||
          e === "start" ||
          e === "end" ||
          e === "cursor"
        )
      ) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), a++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const e = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
    if (r.pageId !== void 0 && typeof r.pageId != "string") {
      const e = {
        instancePath: i + "/pageId",
        schemaPath: "#/properties/pageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
    if (r.limit !== void 0) {
      let e = r.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), a++);
      }
      if (typeof e == "number") {
        if (e > 100 || isNaN(e)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (s === null ? (s = [t]) : s.push(t), a++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), a++);
        }
      }
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const e = {
        instancePath: i + "/after",
        schemaPath: "#/properties/after/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
    if (r.before !== void 0 && typeof r.before != "string") {
      const e = {
        instancePath: i + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
    if (r.start !== void 0) {
      let e = r.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), a++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), a++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), a++);
        }
      }
    }
    if (r.end !== void 0) {
      let e = r.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), a++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), a++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), a++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const e = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), a++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), a++);
  }
  return ((m.errors = s), a === 0);
}
m.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const h = {
  facebook_pages_list_pages: c,
  facebook_pages_get_page: y,
  facebook_pages_list_posts: g,
};
exports.NATIVE_TOOL_VALIDATORS = h;
exports.validate_facebook_pages_get_page = y;
exports.validate_facebook_pages_list_pages = c;
exports.validate_facebook_pages_list_posts = g;
