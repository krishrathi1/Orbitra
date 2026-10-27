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
      (r._sentryDebugIds[i] = "a0aaa67e-0f81-47a9-af90-a4355dc30b6e"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-a0aaa67e-0f81-47a9-af90-a4355dc30b6e"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const u = a;
function a(
  r,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: m,
    rootData: f = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let s = null,
    o = 0;
  const n = a.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.query === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (s === null ? (s = [e]) : s.push(e), o++);
    }
    for (const e in r)
      if (
        !(e === "query" || e === "limit" || e === "cursor" || e === "account")
      ) {
        const t = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), o++);
      }
    if (r.query !== void 0 && typeof r.query != "string") {
      const e = {
        instancePath: i + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), o++);
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
        (s === null ? (s = [t]) : s.push(t), o++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), o++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), o++);
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
      (s === null ? (s = [e]) : s.push(e), o++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const e = {
        instancePath: i + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), o++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), o++);
  }
  return ((a.errors = s), o === 0);
}
a.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const l = { microsoft_lists_search_sites: u };
exports.NATIVE_TOOL_VALIDATORS = l;
exports.validate_microsoft_lists_search_sites = u;
