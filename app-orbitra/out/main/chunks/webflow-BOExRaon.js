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
      o = new r.Error().stack;
    o &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[o] = "34fc65b8-f4b6-48b6-8a12-7642b848e304"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-34fc65b8-f4b6-48b6-8a12-7642b848e304"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const w = f;
function f(
  r,
  {
    instancePath: o = "",
    parentData: l,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = f.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (s !== "accountId") {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: o,
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
const I = y;
function y(
  r,
  {
    instancePath: o = "",
    parentData: l,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = y.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.siteId === void 0) {
      const s = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "siteId" },
        message: "must have required property 'siteId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "siteId" || s === "accountId")) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.siteId !== void 0 && typeof r.siteId != "string") {
      const s = {
        instancePath: o + "/siteId",
        schemaPath: "#/properties/siteId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: o,
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
const P = h;
function h(
  r,
  {
    instancePath: o = "",
    parentData: l,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = h.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.collectionId === void 0) {
      const s = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "collectionId" },
        message: "must have required property 'collectionId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "collectionId" ||
          s === "limit" ||
          s === "offset" ||
          s === "accountId"
        )
      ) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: o + "/start",
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
            instancePath: o + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: o + "/start",
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
          instancePath: o + "/end",
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
            instancePath: o + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: o + "/end",
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
        instancePath: o + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.collectionId !== void 0 && typeof r.collectionId != "string") {
      const s = {
        instancePath: o + "/collectionId",
        schemaPath: "#/properties/collectionId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const t = {
            instancePath: o + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: o + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: o + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.offset !== void 0) {
      let s = r.offset;
      if (typeof s == "number") {
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: o + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: o + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: o,
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
const v = b;
function b(
  r,
  {
    instancePath: o = "",
    parentData: l,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = b.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.collectionId === void 0) {
      const t = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "collectionId" },
        message: "must have required property 'collectionId'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.fieldData === void 0) {
      const t = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fieldData" },
        message: "must have required property 'fieldData'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (
        !(
          t === "collectionId" ||
          t === "fieldData" ||
          t === "isDraft" ||
          t === "accountId"
        )
      ) {
        const n = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    if (r.collectionId !== void 0 && typeof r.collectionId != "string") {
      const t = {
        instancePath: o + "/collectionId",
        schemaPath: "#/properties/collectionId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.fieldData !== void 0) {
      let t = r.fieldData;
      if (t && typeof t == "object" && !Array.isArray(t))
        for (const n in t) {
          const c = i;
          if (typeof n != "string") {
            const p = {
              instancePath: o + "/fieldData",
              schemaPath: "#/properties/fieldData/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: n,
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
          var s = c === i;
          if (!s) {
            const p = {
              instancePath: o + "/fieldData",
              schemaPath: "#/properties/fieldData/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: n },
              message: "property name must be valid",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
        }
      else {
        const n = {
          instancePath: o + "/fieldData",
          schemaPath: "#/properties/fieldData/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.isDraft !== void 0 && typeof r.isDraft != "boolean") {
      const t = {
        instancePath: o + "/isDraft",
        schemaPath: "#/properties/isDraft/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const t = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  } else {
    const t = {
      instancePath: o,
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
const _ = g;
function g(
  r,
  {
    instancePath: o = "",
    parentData: l,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = g.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.siteId === void 0) {
      const s = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "siteId" },
        message: "must have required property 'siteId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "siteId" || s === "customDomains" || s === "accountId")) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.siteId !== void 0 && typeof r.siteId != "string") {
      const s = {
        instancePath: o + "/siteId",
        schemaPath: "#/properties/siteId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.customDomains !== void 0) {
      let s = r.customDomains;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let n = 0; n < t; n++)
          if (typeof s[n] != "string") {
            const c = {
              instancePath: o + "/customDomains/" + n,
              schemaPath: "#/properties/customDomains/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const t = {
          instancePath: o + "/customDomains",
          schemaPath: "#/properties/customDomains/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: o,
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
const k = {
  webflow_list_sites: w,
  webflow_list_collections: I,
  webflow_list_items: P,
  webflow_create_item: v,
  webflow_publish_site: _,
};
exports.NATIVE_TOOL_VALIDATORS = k;
exports.validate_webflow_create_item = v;
exports.validate_webflow_list_collections = I;
exports.validate_webflow_list_items = P;
exports.validate_webflow_list_sites = w;
exports.validate_webflow_publish_site = _;
