"use strict";
(function () {
  try {
    var i =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    i.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var i =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      t = new i.Error().stack;
    t &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[t] = "adff55d4-81fc-417c-aeff-fd81261474ab"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-adff55d4-81fc-417c-aeff-fd81261474ab"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const M = _;
function _(
  i,
  {
    instancePath: t = "",
    parentData: d,
    parentDataProperty: h,
    rootData: g = i,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    s = 0;
  const c = _.evaluated;
  if (
    (c.dynamicProps && (c.props = void 0),
    c.dynamicItems && (c.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  )
    for (const r in i) {
      const n = {
        instancePath: t,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: r },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [n]) : e.push(n), s++);
    }
  else {
    const r = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), s++);
  }
  return ((_.errors = e), s === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const T = A;
function A(
  i,
  {
    instancePath: t = "",
    parentData: d,
    parentDataProperty: h,
    rootData: g = i,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    s = 0;
  const c = A.evaluated;
  if (
    (c.dynamicProps && (c.props = void 0),
    c.dynamicItems && (c.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    for (const r in i)
      if (r !== "includeInactive") {
        const n = {
          instancePath: t,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
    if (i.includeInactive !== void 0 && typeof i.includeInactive != "boolean") {
      const r = {
        instancePath: t + "/includeInactive",
        schemaPath: "#/properties/includeInactive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), s++);
    }
  } else {
    const r = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), s++);
  }
  return ((A.errors = e), s === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = v,
  D = {
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
      partnerId: {
        type: "string",
        format: "uuid",
        pattern:
          "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
      },
      partnerCode: { type: "string" },
      status: {
        enum: [
          "scheduled",
          "pending",
          "eligible",
          "paid",
          "clawed_back",
          "void",
        ],
        type: "string",
      },
      stripeCustomerId: { type: "string" },
      limit: { type: "integer", minimum: 1, maximum: 500 },
      offset: { type: "integer", minimum: 0, maximum: 9007199254740991 },
    },
  },
  j = Object.prototype.hasOwnProperty,
  w = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
  P = new RegExp(
    "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
    "u",
  );
function v(
  i,
  {
    instancePath: t = "",
    parentData: d,
    parentDataProperty: h,
    rootData: g = i,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    s = 0;
  const c = v.evaluated;
  if (
    (c.dynamicProps && (c.props = void 0),
    c.dynamicItems && (c.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    for (const r in i)
      if (!j.call(D.properties, r)) {
        const n = {
          instancePath: t,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
    if (i.start !== void 0) {
      let r = i.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const n = {
          instancePath: t + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const n = {
            instancePath: t + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
        if (r < 1 || isNaN(r)) {
          const n = {
            instancePath: t + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
      }
    }
    if (i.end !== void 0) {
      let r = i.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const n = {
          instancePath: t + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const n = {
            instancePath: t + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
        if (r < 1 || isNaN(r)) {
          const n = {
            instancePath: t + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: t + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), s++);
    }
    if (i.partnerId !== void 0) {
      let r = i.partnerId;
      if (typeof r == "string") {
        if (!P.test(r)) {
          const n = {
            instancePath: t + "/partnerId",
            schemaPath: "#/properties/partnerId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
        if (!w.test(r)) {
          const n = {
            instancePath: t + "/partnerId",
            schemaPath: "#/properties/partnerId/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
      } else {
        const n = {
          instancePath: t + "/partnerId",
          schemaPath: "#/properties/partnerId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
    }
    if (i.partnerCode !== void 0 && typeof i.partnerCode != "string") {
      const r = {
        instancePath: t + "/partnerCode",
        schemaPath: "#/properties/partnerCode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), s++);
    }
    if (i.status !== void 0) {
      let r = i.status;
      if (typeof r != "string") {
        const n = {
          instancePath: t + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
      if (
        !(
          r === "scheduled" ||
          r === "pending" ||
          r === "eligible" ||
          r === "paid" ||
          r === "clawed_back" ||
          r === "void"
        )
      ) {
        const n = {
          instancePath: t + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: D.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
    }
    if (
      i.stripeCustomerId !== void 0 &&
      typeof i.stripeCustomerId != "string"
    ) {
      const r = {
        instancePath: t + "/stripeCustomerId",
        schemaPath: "#/properties/stripeCustomerId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), s++);
    }
    if (i.limit !== void 0) {
      let r = i.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const n = {
          instancePath: t + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
      if (typeof r == "number") {
        if (r > 500 || isNaN(r)) {
          const n = {
            instancePath: t + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
        if (r < 1 || isNaN(r)) {
          const n = {
            instancePath: t + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
      }
    }
    if (i.offset !== void 0) {
      let r = i.offset;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const n = {
          instancePath: t + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const n = {
            instancePath: t + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
        if (r < 0 || isNaN(r)) {
          const n = {
            instancePath: t + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
      }
    }
  } else {
    const r = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), s++);
  }
  return ((v.errors = e), s === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = N;
function N(
  i,
  {
    instancePath: t = "",
    parentData: d,
    parentDataProperty: h,
    rootData: g = i,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    s = 0;
  const c = N.evaluated;
  if (
    (c.dynamicProps && (c.props = void 0),
    c.dynamicItems && (c.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    for (const r in i)
      if (!(r === "partnerId" || r === "partnerCode")) {
        const n = {
          instancePath: t,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
    if (i.partnerId !== void 0) {
      let r = i.partnerId;
      if (typeof r == "string") {
        if (!P.test(r)) {
          const n = {
            instancePath: t + "/partnerId",
            schemaPath: "#/properties/partnerId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
        if (!w.test(r)) {
          const n = {
            instancePath: t + "/partnerId",
            schemaPath: "#/properties/partnerId/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
      } else {
        const n = {
          instancePath: t + "/partnerId",
          schemaPath: "#/properties/partnerId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
    }
    if (i.partnerCode !== void 0 && typeof i.partnerCode != "string") {
      const r = {
        instancePath: t + "/partnerCode",
        schemaPath: "#/properties/partnerCode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), s++);
    }
  } else {
    const r = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), s++);
  }
  return ((N.errors = e), s === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const $ = R;
function R(
  i,
  {
    instancePath: t = "",
    parentData: d,
    parentDataProperty: h,
    rootData: g = i,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    s = 0;
  const c = R.evaluated;
  if (
    (c.dynamicProps && (c.props = void 0),
    c.dynamicItems && (c.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    for (const r in i)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "partnerId" ||
          r === "partnerCode" ||
          r === "offset" ||
          r === "limit"
        )
      ) {
        const n = {
          instancePath: t,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
    if (i.start !== void 0) {
      let r = i.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const n = {
          instancePath: t + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const n = {
            instancePath: t + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
        if (r < 1 || isNaN(r)) {
          const n = {
            instancePath: t + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
      }
    }
    if (i.end !== void 0) {
      let r = i.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const n = {
          instancePath: t + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const n = {
            instancePath: t + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
        if (r < 1 || isNaN(r)) {
          const n = {
            instancePath: t + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: t + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), s++);
    }
    if (i.partnerId !== void 0) {
      let r = i.partnerId;
      if (typeof r == "string") {
        if (!P.test(r)) {
          const n = {
            instancePath: t + "/partnerId",
            schemaPath: "#/properties/partnerId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
        if (!w.test(r)) {
          const n = {
            instancePath: t + "/partnerId",
            schemaPath: "#/properties/partnerId/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
      } else {
        const n = {
          instancePath: t + "/partnerId",
          schemaPath: "#/properties/partnerId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
    }
    if (i.partnerCode !== void 0 && typeof i.partnerCode != "string") {
      const r = {
        instancePath: t + "/partnerCode",
        schemaPath: "#/properties/partnerCode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), s++);
    }
    if (i.offset !== void 0) {
      let r = i.offset;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const n = {
          instancePath: t + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const n = {
            instancePath: t + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
        if (r < 0 || isNaN(r)) {
          const n = {
            instancePath: t + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
      }
    }
    if (i.limit !== void 0) {
      let r = i.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const n = {
          instancePath: t + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
      if (typeof r == "number") {
        if (r > 200 || isNaN(r)) {
          const n = {
            instancePath: t + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 200 },
            message: "must be <= 200",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
        if (r < 1 || isNaN(r)) {
          const n = {
            instancePath: t + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
      }
    }
  } else {
    const r = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), s++);
  }
  return ((R.errors = e), s === 0);
}
R.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = I,
  C = {
    properties: {
      name: { type: "string" },
      email: { type: "string" },
      code: { type: "string" },
      notes: { anyOf: [{ type: "string" }, { type: "null" }] },
      defaultCommissionRate: { type: "number", minimum: 0, maximum: 1 },
      rateRules: {
        type: "array",
        items: {
          type: "object",
          properties: {
            conditions: {
              type: "object",
              properties: {
                plan_key: { type: "string" },
                billing_interval: { enum: ["month", "year"], type: "string" },
                seat_count: {
                  type: "object",
                  properties: {
                    min: {
                      type: "integer",
                      minimum: -9007199254740991,
                      maximum: 9007199254740991,
                    },
                    max: {
                      type: "integer",
                      minimum: -9007199254740991,
                      maximum: 9007199254740991,
                    },
                  },
                },
                customer_country: { type: "array", items: { type: "string" } },
              },
            },
            rate: { type: "number", minimum: 0, maximum: 1 },
          },
          required: ["conditions", "rate"],
        },
      },
      attributionMonths: {
        anyOf: [
          {
            type: "integer",
            minimum: -9007199254740991,
            maximum: 9007199254740991,
            exclusiveMinimum: 0,
          },
          { type: "null" },
        ],
      },
      payoutCurrency: { type: "string" },
      clawbackWindowDays: {
        type: "integer",
        minimum: 0,
        maximum: 9007199254740991,
      },
    },
  };
function I(
  i,
  {
    instancePath: t = "",
    parentData: d,
    parentDataProperty: h,
    rootData: g = i,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    s = 0;
  const c = I.evaluated;
  if (
    (c.dynamicProps && (c.props = void 0),
    c.dynamicItems && (c.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.name === void 0) {
      const a = {
        instancePath: t,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.email === void 0) {
      const a = {
        instancePath: t,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "email" },
        message: "must have required property 'email'",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.code === void 0) {
      const a = {
        instancePath: t,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "code" },
        message: "must have required property 'code'",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    for (const a in i)
      if (!j.call(C.properties, a)) {
        const p = {
          instancePath: t,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: a },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), s++);
      }
    if (i.name !== void 0 && typeof i.name != "string") {
      const a = {
        instancePath: t + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.email !== void 0 && typeof i.email != "string") {
      const a = {
        instancePath: t + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.code !== void 0 && typeof i.code != "string") {
      const a = {
        instancePath: t + "/code",
        schemaPath: "#/properties/code/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.notes !== void 0) {
      let a = i.notes;
      const p = s;
      let m = !1;
      const y = s;
      if (typeof a != "string") {
        const o = {
          instancePath: t + "/notes",
          schemaPath: "#/properties/notes/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
      var r = y === s;
      m = m || r;
      const f = s;
      if (a !== null) {
        const o = {
          instancePath: t + "/notes",
          schemaPath: "#/properties/notes/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
      var r = f === s;
      if (((m = m || r), m))
        ((s = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const o = {
          instancePath: t + "/notes",
          schemaPath: "#/properties/notes/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
    }
    if (i.defaultCommissionRate !== void 0) {
      let a = i.defaultCommissionRate;
      if (typeof a == "number") {
        if (a > 1 || isNaN(a)) {
          const p = {
            instancePath: t + "/defaultCommissionRate",
            schemaPath: "#/properties/defaultCommissionRate/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1 },
            message: "must be <= 1",
          };
          (e === null ? (e = [p]) : e.push(p), s++);
        }
        if (a < 0 || isNaN(a)) {
          const p = {
            instancePath: t + "/defaultCommissionRate",
            schemaPath: "#/properties/defaultCommissionRate/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [p]) : e.push(p), s++);
        }
      } else {
        const p = {
          instancePath: t + "/defaultCommissionRate",
          schemaPath: "#/properties/defaultCommissionRate/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [p]) : e.push(p), s++);
      }
    }
    if (i.rateRules !== void 0) {
      let a = i.rateRules;
      if (Array.isArray(a)) {
        const p = a.length;
        for (let m = 0; m < p; m++) {
          let y = a[m];
          if (y && typeof y == "object" && !Array.isArray(y)) {
            if (y.conditions === void 0) {
              const f = {
                instancePath: t + "/rateRules/" + m,
                schemaPath: "#/properties/rateRules/items/required",
                keyword: "required",
                params: { missingProperty: "conditions" },
                message: "must have required property 'conditions'",
              };
              (e === null ? (e = [f]) : e.push(f), s++);
            }
            if (y.rate === void 0) {
              const f = {
                instancePath: t + "/rateRules/" + m,
                schemaPath: "#/properties/rateRules/items/required",
                keyword: "required",
                params: { missingProperty: "rate" },
                message: "must have required property 'rate'",
              };
              (e === null ? (e = [f]) : e.push(f), s++);
            }
            if (y.conditions !== void 0) {
              let f = y.conditions;
              if (f && typeof f == "object" && !Array.isArray(f)) {
                if (f.plan_key !== void 0 && typeof f.plan_key != "string") {
                  const o = {
                    instancePath:
                      t + "/rateRules/" + m + "/conditions/plan_key",
                    schemaPath:
                      "#/properties/rateRules/items/properties/conditions/properties/plan_key/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                  };
                  (e === null ? (e = [o]) : e.push(o), s++);
                }
                if (f.billing_interval !== void 0) {
                  let o = f.billing_interval;
                  if (typeof o != "string") {
                    const u = {
                      instancePath:
                        t + "/rateRules/" + m + "/conditions/billing_interval",
                      schemaPath:
                        "#/properties/rateRules/items/properties/conditions/properties/billing_interval/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                    };
                    (e === null ? (e = [u]) : e.push(u), s++);
                  }
                  if (!(o === "month" || o === "year")) {
                    const u = {
                      instancePath:
                        t + "/rateRules/" + m + "/conditions/billing_interval",
                      schemaPath:
                        "#/properties/rateRules/items/properties/conditions/properties/billing_interval/enum",
                      keyword: "enum",
                      params: {
                        allowedValues:
                          C.properties.rateRules.items.properties.conditions
                            .properties.billing_interval.enum,
                      },
                      message: "must be equal to one of the allowed values",
                    };
                    (e === null ? (e = [u]) : e.push(u), s++);
                  }
                }
                if (f.seat_count !== void 0) {
                  let o = f.seat_count;
                  if (o && typeof o == "object" && !Array.isArray(o)) {
                    if (o.min !== void 0) {
                      let u = o.min;
                      if (!(typeof u == "number" && !(u % 1) && !isNaN(u))) {
                        const l = {
                          instancePath:
                            t +
                            "/rateRules/" +
                            m +
                            "/conditions/seat_count/min",
                          schemaPath:
                            "#/properties/rateRules/items/properties/conditions/properties/seat_count/properties/min/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer",
                        };
                        (e === null ? (e = [l]) : e.push(l), s++);
                      }
                      if (typeof u == "number") {
                        if (u > 9007199254740991 || isNaN(u)) {
                          const l = {
                            instancePath:
                              t +
                              "/rateRules/" +
                              m +
                              "/conditions/seat_count/min",
                            schemaPath:
                              "#/properties/rateRules/items/properties/conditions/properties/seat_count/properties/min/maximum",
                            keyword: "maximum",
                            params: {
                              comparison: "<=",
                              limit: 9007199254740991,
                            },
                            message: "must be <= 9007199254740991",
                          };
                          (e === null ? (e = [l]) : e.push(l), s++);
                        }
                        if (u < -9007199254740991 || isNaN(u)) {
                          const l = {
                            instancePath:
                              t +
                              "/rateRules/" +
                              m +
                              "/conditions/seat_count/min",
                            schemaPath:
                              "#/properties/rateRules/items/properties/conditions/properties/seat_count/properties/min/minimum",
                            keyword: "minimum",
                            params: {
                              comparison: ">=",
                              limit: -9007199254740991,
                            },
                            message: "must be >= -9007199254740991",
                          };
                          (e === null ? (e = [l]) : e.push(l), s++);
                        }
                      }
                    }
                    if (o.max !== void 0) {
                      let u = o.max;
                      if (!(typeof u == "number" && !(u % 1) && !isNaN(u))) {
                        const l = {
                          instancePath:
                            t +
                            "/rateRules/" +
                            m +
                            "/conditions/seat_count/max",
                          schemaPath:
                            "#/properties/rateRules/items/properties/conditions/properties/seat_count/properties/max/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer",
                        };
                        (e === null ? (e = [l]) : e.push(l), s++);
                      }
                      if (typeof u == "number") {
                        if (u > 9007199254740991 || isNaN(u)) {
                          const l = {
                            instancePath:
                              t +
                              "/rateRules/" +
                              m +
                              "/conditions/seat_count/max",
                            schemaPath:
                              "#/properties/rateRules/items/properties/conditions/properties/seat_count/properties/max/maximum",
                            keyword: "maximum",
                            params: {
                              comparison: "<=",
                              limit: 9007199254740991,
                            },
                            message: "must be <= 9007199254740991",
                          };
                          (e === null ? (e = [l]) : e.push(l), s++);
                        }
                        if (u < -9007199254740991 || isNaN(u)) {
                          const l = {
                            instancePath:
                              t +
                              "/rateRules/" +
                              m +
                              "/conditions/seat_count/max",
                            schemaPath:
                              "#/properties/rateRules/items/properties/conditions/properties/seat_count/properties/max/minimum",
                            keyword: "minimum",
                            params: {
                              comparison: ">=",
                              limit: -9007199254740991,
                            },
                            message: "must be >= -9007199254740991",
                          };
                          (e === null ? (e = [l]) : e.push(l), s++);
                        }
                      }
                    }
                  } else {
                    const u = {
                      instancePath:
                        t + "/rateRules/" + m + "/conditions/seat_count",
                      schemaPath:
                        "#/properties/rateRules/items/properties/conditions/properties/seat_count/type",
                      keyword: "type",
                      params: { type: "object" },
                      message: "must be object",
                    };
                    (e === null ? (e = [u]) : e.push(u), s++);
                  }
                }
                if (f.customer_country !== void 0) {
                  let o = f.customer_country;
                  if (Array.isArray(o)) {
                    const u = o.length;
                    for (let l = 0; l < u; l++)
                      if (typeof o[l] != "string") {
                        const k = {
                          instancePath:
                            t +
                            "/rateRules/" +
                            m +
                            "/conditions/customer_country/" +
                            l,
                          schemaPath:
                            "#/properties/rateRules/items/properties/conditions/properties/customer_country/items/type",
                          keyword: "type",
                          params: { type: "string" },
                          message: "must be string",
                        };
                        (e === null ? (e = [k]) : e.push(k), s++);
                      }
                  } else {
                    const u = {
                      instancePath:
                        t + "/rateRules/" + m + "/conditions/customer_country",
                      schemaPath:
                        "#/properties/rateRules/items/properties/conditions/properties/customer_country/type",
                      keyword: "type",
                      params: { type: "array" },
                      message: "must be array",
                    };
                    (e === null ? (e = [u]) : e.push(u), s++);
                  }
                }
              } else {
                const o = {
                  instancePath: t + "/rateRules/" + m + "/conditions",
                  schemaPath:
                    "#/properties/rateRules/items/properties/conditions/type",
                  keyword: "type",
                  params: { type: "object" },
                  message: "must be object",
                };
                (e === null ? (e = [o]) : e.push(o), s++);
              }
            }
            if (y.rate !== void 0) {
              let f = y.rate;
              if (typeof f == "number") {
                if (f > 1 || isNaN(f)) {
                  const o = {
                    instancePath: t + "/rateRules/" + m + "/rate",
                    schemaPath:
                      "#/properties/rateRules/items/properties/rate/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 1 },
                    message: "must be <= 1",
                  };
                  (e === null ? (e = [o]) : e.push(o), s++);
                }
                if (f < 0 || isNaN(f)) {
                  const o = {
                    instancePath: t + "/rateRules/" + m + "/rate",
                    schemaPath:
                      "#/properties/rateRules/items/properties/rate/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: 0 },
                    message: "must be >= 0",
                  };
                  (e === null ? (e = [o]) : e.push(o), s++);
                }
              } else {
                const o = {
                  instancePath: t + "/rateRules/" + m + "/rate",
                  schemaPath:
                    "#/properties/rateRules/items/properties/rate/type",
                  keyword: "type",
                  params: { type: "number" },
                  message: "must be number",
                };
                (e === null ? (e = [o]) : e.push(o), s++);
              }
            }
          } else {
            const f = {
              instancePath: t + "/rateRules/" + m,
              schemaPath: "#/properties/rateRules/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [f]) : e.push(f), s++);
          }
        }
      } else {
        const p = {
          instancePath: t + "/rateRules",
          schemaPath: "#/properties/rateRules/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), s++);
      }
    }
    if (i.attributionMonths !== void 0) {
      let a = i.attributionMonths;
      const p = s;
      let m = !1;
      const y = s;
      if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
        const o = {
          instancePath: t + "/attributionMonths",
          schemaPath: "#/properties/attributionMonths/anyOf/0/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
      if (typeof a == "number") {
        if (a > 9007199254740991 || isNaN(a)) {
          const o = {
            instancePath: t + "/attributionMonths",
            schemaPath: "#/properties/attributionMonths/anyOf/0/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), s++);
        }
        if (a < -9007199254740991 || isNaN(a)) {
          const o = {
            instancePath: t + "/attributionMonths",
            schemaPath: "#/properties/attributionMonths/anyOf/0/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), s++);
        }
        if (a <= 0 || isNaN(a)) {
          const o = {
            instancePath: t + "/attributionMonths",
            schemaPath:
              "#/properties/attributionMonths/anyOf/0/exclusiveMinimum",
            keyword: "exclusiveMinimum",
            params: { comparison: ">", limit: 0 },
            message: "must be > 0",
          };
          (e === null ? (e = [o]) : e.push(o), s++);
        }
      }
      var n = y === s;
      m = m || n;
      const f = s;
      if (a !== null) {
        const o = {
          instancePath: t + "/attributionMonths",
          schemaPath: "#/properties/attributionMonths/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
      var n = f === s;
      if (((m = m || n), m))
        ((s = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const o = {
          instancePath: t + "/attributionMonths",
          schemaPath: "#/properties/attributionMonths/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
    }
    if (i.payoutCurrency !== void 0 && typeof i.payoutCurrency != "string") {
      const a = {
        instancePath: t + "/payoutCurrency",
        schemaPath: "#/properties/payoutCurrency/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.clawbackWindowDays !== void 0) {
      let a = i.clawbackWindowDays;
      if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
        const p = {
          instancePath: t + "/clawbackWindowDays",
          schemaPath: "#/properties/clawbackWindowDays/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), s++);
      }
      if (typeof a == "number") {
        if (a > 9007199254740991 || isNaN(a)) {
          const p = {
            instancePath: t + "/clawbackWindowDays",
            schemaPath: "#/properties/clawbackWindowDays/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), s++);
        }
        if (a < 0 || isNaN(a)) {
          const p = {
            instancePath: t + "/clawbackWindowDays",
            schemaPath: "#/properties/clawbackWindowDays/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [p]) : e.push(p), s++);
        }
      }
    }
  } else {
    const a = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [a]) : e.push(a), s++);
  }
  return ((I.errors = e), s === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = x,
  q = {
    properties: {
      partnerId: {
        type: "string",
        format: "uuid",
        pattern:
          "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
      },
      name: { type: "string" },
      email: { type: "string" },
      code: { type: "string" },
      notes: { anyOf: [{ type: "string" }, { type: "null" }] },
      defaultCommissionRate: { type: "number", minimum: 0, maximum: 1 },
      rateRules: {
        type: "array",
        items: {
          type: "object",
          properties: {
            conditions: {
              type: "object",
              properties: {
                plan_key: { type: "string" },
                billing_interval: { enum: ["month", "year"], type: "string" },
                seat_count: {
                  type: "object",
                  properties: {
                    min: {
                      type: "integer",
                      minimum: -9007199254740991,
                      maximum: 9007199254740991,
                    },
                    max: {
                      type: "integer",
                      minimum: -9007199254740991,
                      maximum: 9007199254740991,
                    },
                  },
                },
                customer_country: { type: "array", items: { type: "string" } },
              },
            },
            rate: { type: "number", minimum: 0, maximum: 1 },
          },
          required: ["conditions", "rate"],
        },
      },
      attributionMonths: {
        anyOf: [
          {
            type: "integer",
            minimum: -9007199254740991,
            maximum: 9007199254740991,
            exclusiveMinimum: 0,
          },
          { type: "null" },
        ],
      },
      payoutCurrency: { type: "string" },
      clawbackWindowDays: {
        type: "integer",
        minimum: 0,
        maximum: 9007199254740991,
      },
    },
  };
function x(
  i,
  {
    instancePath: t = "",
    parentData: d,
    parentDataProperty: h,
    rootData: g = i,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    s = 0;
  const c = x.evaluated;
  if (
    (c.dynamicProps && (c.props = void 0),
    c.dynamicItems && (c.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.partnerId === void 0) {
      const a = {
        instancePath: t,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "partnerId" },
        message: "must have required property 'partnerId'",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    for (const a in i)
      if (!j.call(q.properties, a)) {
        const p = {
          instancePath: t,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: a },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), s++);
      }
    if (i.partnerId !== void 0) {
      let a = i.partnerId;
      if (typeof a == "string") {
        if (!P.test(a)) {
          const p = {
            instancePath: t + "/partnerId",
            schemaPath: "#/properties/partnerId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [p]) : e.push(p), s++);
        }
        if (!w.test(a)) {
          const p = {
            instancePath: t + "/partnerId",
            schemaPath: "#/properties/partnerId/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [p]) : e.push(p), s++);
        }
      } else {
        const p = {
          instancePath: t + "/partnerId",
          schemaPath: "#/properties/partnerId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), s++);
      }
    }
    if (i.name !== void 0 && typeof i.name != "string") {
      const a = {
        instancePath: t + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.email !== void 0 && typeof i.email != "string") {
      const a = {
        instancePath: t + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.code !== void 0 && typeof i.code != "string") {
      const a = {
        instancePath: t + "/code",
        schemaPath: "#/properties/code/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.notes !== void 0) {
      let a = i.notes;
      const p = s;
      let m = !1;
      const y = s;
      if (typeof a != "string") {
        const o = {
          instancePath: t + "/notes",
          schemaPath: "#/properties/notes/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
      var r = y === s;
      m = m || r;
      const f = s;
      if (a !== null) {
        const o = {
          instancePath: t + "/notes",
          schemaPath: "#/properties/notes/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
      var r = f === s;
      if (((m = m || r), m))
        ((s = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const o = {
          instancePath: t + "/notes",
          schemaPath: "#/properties/notes/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
    }
    if (i.defaultCommissionRate !== void 0) {
      let a = i.defaultCommissionRate;
      if (typeof a == "number") {
        if (a > 1 || isNaN(a)) {
          const p = {
            instancePath: t + "/defaultCommissionRate",
            schemaPath: "#/properties/defaultCommissionRate/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1 },
            message: "must be <= 1",
          };
          (e === null ? (e = [p]) : e.push(p), s++);
        }
        if (a < 0 || isNaN(a)) {
          const p = {
            instancePath: t + "/defaultCommissionRate",
            schemaPath: "#/properties/defaultCommissionRate/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [p]) : e.push(p), s++);
        }
      } else {
        const p = {
          instancePath: t + "/defaultCommissionRate",
          schemaPath: "#/properties/defaultCommissionRate/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [p]) : e.push(p), s++);
      }
    }
    if (i.rateRules !== void 0) {
      let a = i.rateRules;
      if (Array.isArray(a)) {
        const p = a.length;
        for (let m = 0; m < p; m++) {
          let y = a[m];
          if (y && typeof y == "object" && !Array.isArray(y)) {
            if (y.conditions === void 0) {
              const f = {
                instancePath: t + "/rateRules/" + m,
                schemaPath: "#/properties/rateRules/items/required",
                keyword: "required",
                params: { missingProperty: "conditions" },
                message: "must have required property 'conditions'",
              };
              (e === null ? (e = [f]) : e.push(f), s++);
            }
            if (y.rate === void 0) {
              const f = {
                instancePath: t + "/rateRules/" + m,
                schemaPath: "#/properties/rateRules/items/required",
                keyword: "required",
                params: { missingProperty: "rate" },
                message: "must have required property 'rate'",
              };
              (e === null ? (e = [f]) : e.push(f), s++);
            }
            if (y.conditions !== void 0) {
              let f = y.conditions;
              if (f && typeof f == "object" && !Array.isArray(f)) {
                if (f.plan_key !== void 0 && typeof f.plan_key != "string") {
                  const o = {
                    instancePath:
                      t + "/rateRules/" + m + "/conditions/plan_key",
                    schemaPath:
                      "#/properties/rateRules/items/properties/conditions/properties/plan_key/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                  };
                  (e === null ? (e = [o]) : e.push(o), s++);
                }
                if (f.billing_interval !== void 0) {
                  let o = f.billing_interval;
                  if (typeof o != "string") {
                    const u = {
                      instancePath:
                        t + "/rateRules/" + m + "/conditions/billing_interval",
                      schemaPath:
                        "#/properties/rateRules/items/properties/conditions/properties/billing_interval/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                    };
                    (e === null ? (e = [u]) : e.push(u), s++);
                  }
                  if (!(o === "month" || o === "year")) {
                    const u = {
                      instancePath:
                        t + "/rateRules/" + m + "/conditions/billing_interval",
                      schemaPath:
                        "#/properties/rateRules/items/properties/conditions/properties/billing_interval/enum",
                      keyword: "enum",
                      params: {
                        allowedValues:
                          q.properties.rateRules.items.properties.conditions
                            .properties.billing_interval.enum,
                      },
                      message: "must be equal to one of the allowed values",
                    };
                    (e === null ? (e = [u]) : e.push(u), s++);
                  }
                }
                if (f.seat_count !== void 0) {
                  let o = f.seat_count;
                  if (o && typeof o == "object" && !Array.isArray(o)) {
                    if (o.min !== void 0) {
                      let u = o.min;
                      if (!(typeof u == "number" && !(u % 1) && !isNaN(u))) {
                        const l = {
                          instancePath:
                            t +
                            "/rateRules/" +
                            m +
                            "/conditions/seat_count/min",
                          schemaPath:
                            "#/properties/rateRules/items/properties/conditions/properties/seat_count/properties/min/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer",
                        };
                        (e === null ? (e = [l]) : e.push(l), s++);
                      }
                      if (typeof u == "number") {
                        if (u > 9007199254740991 || isNaN(u)) {
                          const l = {
                            instancePath:
                              t +
                              "/rateRules/" +
                              m +
                              "/conditions/seat_count/min",
                            schemaPath:
                              "#/properties/rateRules/items/properties/conditions/properties/seat_count/properties/min/maximum",
                            keyword: "maximum",
                            params: {
                              comparison: "<=",
                              limit: 9007199254740991,
                            },
                            message: "must be <= 9007199254740991",
                          };
                          (e === null ? (e = [l]) : e.push(l), s++);
                        }
                        if (u < -9007199254740991 || isNaN(u)) {
                          const l = {
                            instancePath:
                              t +
                              "/rateRules/" +
                              m +
                              "/conditions/seat_count/min",
                            schemaPath:
                              "#/properties/rateRules/items/properties/conditions/properties/seat_count/properties/min/minimum",
                            keyword: "minimum",
                            params: {
                              comparison: ">=",
                              limit: -9007199254740991,
                            },
                            message: "must be >= -9007199254740991",
                          };
                          (e === null ? (e = [l]) : e.push(l), s++);
                        }
                      }
                    }
                    if (o.max !== void 0) {
                      let u = o.max;
                      if (!(typeof u == "number" && !(u % 1) && !isNaN(u))) {
                        const l = {
                          instancePath:
                            t +
                            "/rateRules/" +
                            m +
                            "/conditions/seat_count/max",
                          schemaPath:
                            "#/properties/rateRules/items/properties/conditions/properties/seat_count/properties/max/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer",
                        };
                        (e === null ? (e = [l]) : e.push(l), s++);
                      }
                      if (typeof u == "number") {
                        if (u > 9007199254740991 || isNaN(u)) {
                          const l = {
                            instancePath:
                              t +
                              "/rateRules/" +
                              m +
                              "/conditions/seat_count/max",
                            schemaPath:
                              "#/properties/rateRules/items/properties/conditions/properties/seat_count/properties/max/maximum",
                            keyword: "maximum",
                            params: {
                              comparison: "<=",
                              limit: 9007199254740991,
                            },
                            message: "must be <= 9007199254740991",
                          };
                          (e === null ? (e = [l]) : e.push(l), s++);
                        }
                        if (u < -9007199254740991 || isNaN(u)) {
                          const l = {
                            instancePath:
                              t +
                              "/rateRules/" +
                              m +
                              "/conditions/seat_count/max",
                            schemaPath:
                              "#/properties/rateRules/items/properties/conditions/properties/seat_count/properties/max/minimum",
                            keyword: "minimum",
                            params: {
                              comparison: ">=",
                              limit: -9007199254740991,
                            },
                            message: "must be >= -9007199254740991",
                          };
                          (e === null ? (e = [l]) : e.push(l), s++);
                        }
                      }
                    }
                  } else {
                    const u = {
                      instancePath:
                        t + "/rateRules/" + m + "/conditions/seat_count",
                      schemaPath:
                        "#/properties/rateRules/items/properties/conditions/properties/seat_count/type",
                      keyword: "type",
                      params: { type: "object" },
                      message: "must be object",
                    };
                    (e === null ? (e = [u]) : e.push(u), s++);
                  }
                }
                if (f.customer_country !== void 0) {
                  let o = f.customer_country;
                  if (Array.isArray(o)) {
                    const u = o.length;
                    for (let l = 0; l < u; l++)
                      if (typeof o[l] != "string") {
                        const k = {
                          instancePath:
                            t +
                            "/rateRules/" +
                            m +
                            "/conditions/customer_country/" +
                            l,
                          schemaPath:
                            "#/properties/rateRules/items/properties/conditions/properties/customer_country/items/type",
                          keyword: "type",
                          params: { type: "string" },
                          message: "must be string",
                        };
                        (e === null ? (e = [k]) : e.push(k), s++);
                      }
                  } else {
                    const u = {
                      instancePath:
                        t + "/rateRules/" + m + "/conditions/customer_country",
                      schemaPath:
                        "#/properties/rateRules/items/properties/conditions/properties/customer_country/type",
                      keyword: "type",
                      params: { type: "array" },
                      message: "must be array",
                    };
                    (e === null ? (e = [u]) : e.push(u), s++);
                  }
                }
              } else {
                const o = {
                  instancePath: t + "/rateRules/" + m + "/conditions",
                  schemaPath:
                    "#/properties/rateRules/items/properties/conditions/type",
                  keyword: "type",
                  params: { type: "object" },
                  message: "must be object",
                };
                (e === null ? (e = [o]) : e.push(o), s++);
              }
            }
            if (y.rate !== void 0) {
              let f = y.rate;
              if (typeof f == "number") {
                if (f > 1 || isNaN(f)) {
                  const o = {
                    instancePath: t + "/rateRules/" + m + "/rate",
                    schemaPath:
                      "#/properties/rateRules/items/properties/rate/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 1 },
                    message: "must be <= 1",
                  };
                  (e === null ? (e = [o]) : e.push(o), s++);
                }
                if (f < 0 || isNaN(f)) {
                  const o = {
                    instancePath: t + "/rateRules/" + m + "/rate",
                    schemaPath:
                      "#/properties/rateRules/items/properties/rate/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: 0 },
                    message: "must be >= 0",
                  };
                  (e === null ? (e = [o]) : e.push(o), s++);
                }
              } else {
                const o = {
                  instancePath: t + "/rateRules/" + m + "/rate",
                  schemaPath:
                    "#/properties/rateRules/items/properties/rate/type",
                  keyword: "type",
                  params: { type: "number" },
                  message: "must be number",
                };
                (e === null ? (e = [o]) : e.push(o), s++);
              }
            }
          } else {
            const f = {
              instancePath: t + "/rateRules/" + m,
              schemaPath: "#/properties/rateRules/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [f]) : e.push(f), s++);
          }
        }
      } else {
        const p = {
          instancePath: t + "/rateRules",
          schemaPath: "#/properties/rateRules/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), s++);
      }
    }
    if (i.attributionMonths !== void 0) {
      let a = i.attributionMonths;
      const p = s;
      let m = !1;
      const y = s;
      if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
        const o = {
          instancePath: t + "/attributionMonths",
          schemaPath: "#/properties/attributionMonths/anyOf/0/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
      if (typeof a == "number") {
        if (a > 9007199254740991 || isNaN(a)) {
          const o = {
            instancePath: t + "/attributionMonths",
            schemaPath: "#/properties/attributionMonths/anyOf/0/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), s++);
        }
        if (a < -9007199254740991 || isNaN(a)) {
          const o = {
            instancePath: t + "/attributionMonths",
            schemaPath: "#/properties/attributionMonths/anyOf/0/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), s++);
        }
        if (a <= 0 || isNaN(a)) {
          const o = {
            instancePath: t + "/attributionMonths",
            schemaPath:
              "#/properties/attributionMonths/anyOf/0/exclusiveMinimum",
            keyword: "exclusiveMinimum",
            params: { comparison: ">", limit: 0 },
            message: "must be > 0",
          };
          (e === null ? (e = [o]) : e.push(o), s++);
        }
      }
      var n = y === s;
      m = m || n;
      const f = s;
      if (a !== null) {
        const o = {
          instancePath: t + "/attributionMonths",
          schemaPath: "#/properties/attributionMonths/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
      var n = f === s;
      if (((m = m || n), m))
        ((s = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const o = {
          instancePath: t + "/attributionMonths",
          schemaPath: "#/properties/attributionMonths/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
    }
    if (i.payoutCurrency !== void 0 && typeof i.payoutCurrency != "string") {
      const a = {
        instancePath: t + "/payoutCurrency",
        schemaPath: "#/properties/payoutCurrency/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.clawbackWindowDays !== void 0) {
      let a = i.clawbackWindowDays;
      if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
        const p = {
          instancePath: t + "/clawbackWindowDays",
          schemaPath: "#/properties/clawbackWindowDays/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), s++);
      }
      if (typeof a == "number") {
        if (a > 9007199254740991 || isNaN(a)) {
          const p = {
            instancePath: t + "/clawbackWindowDays",
            schemaPath: "#/properties/clawbackWindowDays/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), s++);
        }
        if (a < 0 || isNaN(a)) {
          const p = {
            instancePath: t + "/clawbackWindowDays",
            schemaPath: "#/properties/clawbackWindowDays/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [p]) : e.push(p), s++);
        }
      }
    }
  } else {
    const a = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [a]) : e.push(a), s++);
  }
  return ((x.errors = e), s === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = F;
function F(
  i,
  {
    instancePath: t = "",
    parentData: d,
    parentDataProperty: h,
    rootData: g = i,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    s = 0;
  const c = F.evaluated;
  if (
    (c.dynamicProps && (c.props = void 0),
    c.dynamicItems && (c.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.partnerId === void 0) {
      const r = {
        instancePath: t,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "partnerId" },
        message: "must have required property 'partnerId'",
      };
      (e === null ? (e = [r]) : e.push(r), s++);
    }
    if (i.active === void 0) {
      const r = {
        instancePath: t,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "active" },
        message: "must have required property 'active'",
      };
      (e === null ? (e = [r]) : e.push(r), s++);
    }
    for (const r in i)
      if (!(r === "partnerId" || r === "active")) {
        const n = {
          instancePath: t,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
    if (i.partnerId !== void 0) {
      let r = i.partnerId;
      if (typeof r == "string") {
        if (!P.test(r)) {
          const n = {
            instancePath: t + "/partnerId",
            schemaPath: "#/properties/partnerId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
        if (!w.test(r)) {
          const n = {
            instancePath: t + "/partnerId",
            schemaPath: "#/properties/partnerId/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [n]) : e.push(n), s++);
        }
      } else {
        const n = {
          instancePath: t + "/partnerId",
          schemaPath: "#/properties/partnerId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), s++);
      }
    }
    if (i.active !== void 0 && typeof i.active != "boolean") {
      const r = {
        instancePath: t + "/active",
        schemaPath: "#/properties/active/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), s++);
    }
  } else {
    const r = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), s++);
  }
  return ((F.errors = e), s === 0);
}
F.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = O;
function O(
  i,
  {
    instancePath: t = "",
    parentData: d,
    parentDataProperty: h,
    rootData: g = i,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    s = 0;
  const c = O.evaluated;
  if (
    (c.dynamicProps && (c.props = void 0),
    c.dynamicItems && (c.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.partnerId === void 0) {
      const a = {
        instancePath: t,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "partnerId" },
        message: "must have required property 'partnerId'",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.currency === void 0) {
      const a = {
        instancePath: t,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "currency" },
        message: "must have required property 'currency'",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.commissionIds === void 0) {
      const a = {
        instancePath: t,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "commissionIds" },
        message: "must have required property 'commissionIds'",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    for (const a in i)
      if (
        !(
          a === "partnerId" ||
          a === "currency" ||
          a === "externalReference" ||
          a === "notes" ||
          a === "commissionIds"
        )
      ) {
        const p = {
          instancePath: t,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: a },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), s++);
      }
    if (i.partnerId !== void 0) {
      let a = i.partnerId;
      if (typeof a == "string") {
        if (!P.test(a)) {
          const p = {
            instancePath: t + "/partnerId",
            schemaPath: "#/properties/partnerId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [p]) : e.push(p), s++);
        }
        if (!w.test(a)) {
          const p = {
            instancePath: t + "/partnerId",
            schemaPath: "#/properties/partnerId/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [p]) : e.push(p), s++);
        }
      } else {
        const p = {
          instancePath: t + "/partnerId",
          schemaPath: "#/properties/partnerId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), s++);
      }
    }
    if (i.currency !== void 0 && typeof i.currency != "string") {
      const a = {
        instancePath: t + "/currency",
        schemaPath: "#/properties/currency/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
    if (i.externalReference !== void 0) {
      let a = i.externalReference;
      const p = s;
      let m = !1;
      const y = s;
      if (typeof a != "string") {
        const o = {
          instancePath: t + "/externalReference",
          schemaPath: "#/properties/externalReference/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
      var r = y === s;
      m = m || r;
      const f = s;
      if (a !== null) {
        const o = {
          instancePath: t + "/externalReference",
          schemaPath: "#/properties/externalReference/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
      var r = f === s;
      if (((m = m || r), m))
        ((s = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const o = {
          instancePath: t + "/externalReference",
          schemaPath: "#/properties/externalReference/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
    }
    if (i.notes !== void 0) {
      let a = i.notes;
      const p = s;
      let m = !1;
      const y = s;
      if (typeof a != "string") {
        const o = {
          instancePath: t + "/notes",
          schemaPath: "#/properties/notes/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
      var n = y === s;
      m = m || n;
      const f = s;
      if (a !== null) {
        const o = {
          instancePath: t + "/notes",
          schemaPath: "#/properties/notes/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
      var n = f === s;
      if (((m = m || n), m))
        ((s = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const o = {
          instancePath: t + "/notes",
          schemaPath: "#/properties/notes/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [o]) : e.push(o), s++);
      }
    }
    if (i.commissionIds !== void 0) {
      let a = i.commissionIds;
      if (Array.isArray(a)) {
        if (a.length < 1) {
          const m = {
            instancePath: t + "/commissionIds",
            schemaPath: "#/properties/commissionIds/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [m]) : e.push(m), s++);
        }
        const p = a.length;
        for (let m = 0; m < p; m++) {
          let y = a[m];
          if (typeof y == "string") {
            if (!P.test(y)) {
              const f = {
                instancePath: t + "/commissionIds/" + m,
                schemaPath: "#/properties/commissionIds/items/pattern",
                keyword: "pattern",
                params: {
                  pattern:
                    "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
                },
                message:
                  'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
              };
              (e === null ? (e = [f]) : e.push(f), s++);
            }
            if (!w.test(y)) {
              const f = {
                instancePath: t + "/commissionIds/" + m,
                schemaPath: "#/properties/commissionIds/items/format",
                keyword: "format",
                params: { format: "uuid" },
                message: 'must match format "uuid"',
              };
              (e === null ? (e = [f]) : e.push(f), s++);
            }
          } else {
            const f = {
              instancePath: t + "/commissionIds/" + m,
              schemaPath: "#/properties/commissionIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), s++);
          }
        }
      } else {
        const p = {
          instancePath: t + "/commissionIds",
          schemaPath: "#/properties/commissionIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), s++);
      }
    }
  } else {
    const a = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [a]) : e.push(a), s++);
  }
  return ((O.errors = e), s === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = {
  affiliates_summary: M,
  affiliates_list_partners: T,
  affiliates_list_commissions: E,
  affiliates_eligible_for_payout: W,
  affiliates_list_payouts: $,
  affiliates_create_partner: B,
  affiliates_update_partner: S,
  affiliates_set_partner_active: V,
  affiliates_record_payout: L,
};
exports.NATIVE_TOOL_VALIDATORS = Y;
exports.validate_affiliates_create_partner = B;
exports.validate_affiliates_eligible_for_payout = W;
exports.validate_affiliates_list_commissions = E;
exports.validate_affiliates_list_partners = T;
exports.validate_affiliates_list_payouts = $;
exports.validate_affiliates_record_payout = L;
exports.validate_affiliates_set_partner_active = V;
exports.validate_affiliates_summary = M;
exports.validate_affiliates_update_partner = S;
