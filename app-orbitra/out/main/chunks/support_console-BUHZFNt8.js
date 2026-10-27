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
      a = new t.Error().stack;
    a &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[a] = "1b55a55f-f091-48db-9f7f-722f09659af4"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-1b55a55f-f091-48db-9f7f-722f09659af4"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ue = I,
  pe = {
    properties: {
      status: { enum: ["new", "sent", "dismissed", "forwarded", "all"] },
      source: { enum: ["discord", "slack", "email", "supabase_forms"] },
      sort: { enum: ["newest_first", "oldest_first"] },
    },
  };
function I(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = I.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "status" ||
          s === "source" ||
          s === "escalationReason" ||
          s === "sort" ||
          s === "limit" ||
          s === "offset"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.status !== void 0) {
      let s = t.status;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (
        !(
          s === "new" ||
          s === "sent" ||
          s === "dismissed" ||
          s === "forwarded" ||
          s === "all"
        )
      ) {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: pe.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.source !== void 0) {
      let s = t.source;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/source",
          schemaPath: "#/properties/source/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (
        !(
          s === "discord" ||
          s === "slack" ||
          s === "email" ||
          s === "supabase_forms"
        )
      ) {
        const r = {
          instancePath: a + "/source",
          schemaPath: "#/properties/source/enum",
          keyword: "enum",
          params: { allowedValues: pe.properties.source.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (
      t.escalationReason !== void 0 &&
      typeof t.escalationReason != "string"
    ) {
      const s = {
        instancePath: a + "/escalationReason",
        schemaPath: "#/properties/escalationReason/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.sort !== void 0) {
      let s = t.sort;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/sort",
          schemaPath: "#/properties/sort/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (!(s === "newest_first" || s === "oldest_first")) {
        const r = {
          instancePath: a + "/sort",
          schemaPath: "#/properties/sort/enum",
          keyword: "enum",
          params: { allowedValues: pe.properties.sort.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 200 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 200 },
            message: "must be <= 200",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.offset !== void 0) {
      let s = t.offset;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 0 || isNaN(s)) {
          const r = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const le = P,
  Qe = {
    properties: {
      status: {
        enum: [
          "issued",
          "redeeming",
          "active",
          "ending",
          "expired",
          "revoked",
          "converted",
        ],
      },
    },
  },
  b = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
  Xe = require("ajv-formats/dist/formats").fullFormats["date-time"],
  d = require("ajv/dist/runtime/ucs2length").default;
function P(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = P.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "limit" ||
          s === "cursor" ||
          s === "recipientUserId" ||
          s === "search" ||
          s === "status" ||
          s === "endingBefore"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.cursor !== void 0) {
      let s = t.cursor;
      if (typeof s == "string") {
        if (!b.test(s)) {
          const r = {
            instancePath: a + "/cursor",
            schemaPath: "#/properties/cursor/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/cursor",
          schemaPath: "#/properties/cursor/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.recipientUserId !== void 0) {
      let s = t.recipientUserId;
      if (typeof s == "string") {
        if (!b.test(s)) {
          const r = {
            instancePath: a + "/recipientUserId",
            schemaPath: "#/properties/recipientUserId/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/recipientUserId",
          schemaPath: "#/properties/recipientUserId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.search !== void 0) {
      let s = t.search;
      if (typeof s == "string") {
        if (d(s) > 254) {
          const r = {
            instancePath: a + "/search",
            schemaPath: "#/properties/search/maxLength",
            keyword: "maxLength",
            params: { limit: 254 },
            message: "must NOT have more than 254 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/search",
          schemaPath: "#/properties/search/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.status !== void 0) {
      let s = t.status;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (
        !(
          s === "issued" ||
          s === "redeeming" ||
          s === "active" ||
          s === "ending" ||
          s === "expired" ||
          s === "revoked" ||
          s === "converted"
        )
      ) {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: Qe.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.endingBefore !== void 0) {
      let s = t.endingBefore;
      if (typeof s == "string") {
        if (!Xe.validate(s)) {
          const r = {
            instancePath: a + "/endingBefore",
            schemaPath: "#/properties/endingBefore/format",
            keyword: "format",
            params: { format: "date-time" },
            message: 'must match format "date-time"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/endingBefore",
          schemaPath: "#/properties/endingBefore/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const de = v;
function v(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = v.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.id === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "id" },
        message: "must have required property 'id'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "id") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.id !== void 0) {
      let s = t.id;
      if (typeof s == "string") {
        if (!b.test(s)) {
          const r = {
            instancePath: a + "/id",
            schemaPath: "#/properties/id/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/id",
          schemaPath: "#/properties/id/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
  return ((v.errors = e), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ce = k,
  es = {
    properties: { plan: { enum: ["freelance", "part_time", "full_time"] } },
  },
  ss =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
function k(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = k.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.reason === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.recipientEmail === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "recipientEmail" },
        message: "must have required property 'recipientEmail'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.plan === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "plan" },
        message: "must have required property 'plan'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.duration === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "duration" },
        message: "must have required property 'duration'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (
        !(
          r === "reason" ||
          r === "recipientEmail" ||
          r === "plan" ||
          r === "duration"
        )
      ) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    if (t.reason !== void 0) {
      let r = t.reason;
      if (typeof r == "string") {
        if (d(r) > 1e3) {
          const p = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/maxLength",
            keyword: "maxLength",
            params: { limit: 1e3 },
            message: "must NOT have more than 1000 characters",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        if (d(r) < 1) {
          const p = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
      } else {
        const p = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (t.recipientEmail !== void 0) {
      let r = t.recipientEmail;
      if (typeof r == "string") {
        if (d(r) > 254) {
          const p = {
            instancePath: a + "/recipientEmail",
            schemaPath: "#/properties/recipientEmail/maxLength",
            keyword: "maxLength",
            params: { limit: 254 },
            message: "must NOT have more than 254 characters",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        if (!ss.test(r)) {
          const p = {
            instancePath: a + "/recipientEmail",
            schemaPath: "#/properties/recipientEmail/format",
            keyword: "format",
            params: { format: "email" },
            message: 'must match format "email"',
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
      } else {
        const p = {
          instancePath: a + "/recipientEmail",
          schemaPath: "#/properties/recipientEmail/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (t.plan !== void 0) {
      let r = t.plan;
      if (typeof r != "string") {
        const p = {
          instancePath: a + "/plan",
          schemaPath: "#/properties/plan/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
      if (!(r === "freelance" || r === "part_time" || r === "full_time")) {
        const p = {
          instancePath: a + "/plan",
          schemaPath: "#/properties/plan/enum",
          keyword: "enum",
          params: { allowedValues: es.properties.plan.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (t.duration !== void 0) {
      let r = t.duration;
      const p = i;
      let h = !1,
        g = null;
      const oe = i;
      if (r && typeof r == "object" && !Array.isArray(r)) {
        if (r.kind === void 0) {
          const n = {
            instancePath: a + "/duration",
            schemaPath: "#/properties/duration/oneOf/0/required",
            keyword: "required",
            params: { missingProperty: "kind" },
            message: "must have required property 'kind'",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        if (r.months === void 0) {
          const n = {
            instancePath: a + "/duration",
            schemaPath: "#/properties/duration/oneOf/0/required",
            keyword: "required",
            params: { missingProperty: "months" },
            message: "must have required property 'months'",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        for (const n in r)
          if (!(n === "kind" || n === "months")) {
            const c = {
              instancePath: a + "/duration",
              schemaPath: "#/properties/duration/oneOf/0/additionalProperties",
              keyword: "additionalProperties",
              params: { additionalProperty: n },
              message: "must NOT have additional properties",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
        if (r.kind !== void 0 && r.kind !== "months") {
          const n = {
            instancePath: a + "/duration/kind",
            schemaPath: "#/properties/duration/oneOf/0/properties/kind/const",
            keyword: "const",
            params: { allowedValue: "months" },
            message: "must be equal to constant",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        if (r.months !== void 0) {
          let n = r.months;
          if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
            const c = {
              instancePath: a + "/duration/months",
              schemaPath:
                "#/properties/duration/oneOf/0/properties/months/type",
              keyword: "type",
              params: { type: "integer" },
              message: "must be integer",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
          if (typeof n == "number") {
            if (n > 9007199254740991 || isNaN(n)) {
              const c = {
                instancePath: a + "/duration/months",
                schemaPath:
                  "#/properties/duration/oneOf/0/properties/months/maximum",
                keyword: "maximum",
                params: { comparison: "<=", limit: 9007199254740991 },
                message: "must be <= 9007199254740991",
              };
              (e === null ? (e = [c]) : e.push(c), i++);
            }
            if (n < 1 || isNaN(n)) {
              const c = {
                instancePath: a + "/duration/months",
                schemaPath:
                  "#/properties/duration/oneOf/0/properties/months/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: 1 },
                message: "must be >= 1",
              };
              (e === null ? (e = [c]) : e.push(c), i++);
            }
          }
        }
      } else {
        const n = {
          instancePath: a + "/duration",
          schemaPath: "#/properties/duration/oneOf/0/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      var s = oe === i;
      s && ((h = !0), (g = 0));
      const ne = i;
      if (r && typeof r == "object" && !Array.isArray(r)) {
        if (r.kind === void 0) {
          const n = {
            instancePath: a + "/duration",
            schemaPath: "#/properties/duration/oneOf/1/required",
            keyword: "required",
            params: { missingProperty: "kind" },
            message: "must have required property 'kind'",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        for (const n in r)
          if (n !== "kind") {
            const c = {
              instancePath: a + "/duration",
              schemaPath: "#/properties/duration/oneOf/1/additionalProperties",
              keyword: "additionalProperties",
              params: { additionalProperty: n },
              message: "must NOT have additional properties",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
        if (r.kind !== void 0 && r.kind !== "until_revoked") {
          const n = {
            instancePath: a + "/duration/kind",
            schemaPath: "#/properties/duration/oneOf/1/properties/kind/const",
            keyword: "const",
            params: { allowedValue: "until_revoked" },
            message: "must be equal to constant",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
      } else {
        const n = {
          instancePath: a + "/duration",
          schemaPath: "#/properties/duration/oneOf/1/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      var s = ne === i;
      if ((s && h ? ((h = !1), (g = [g, 1])) : s && ((h = !0), (g = 1)), h))
        ((i = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const n = {
          instancePath: a + "/duration",
          schemaPath: "#/properties/duration/oneOf",
          keyword: "oneOf",
          params: { passingSchemas: g },
          message: "must match exactly one schema in oneOf",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
  } else {
    const r = {
      instancePath: a,
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
const ye = w;
function w(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = w.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.id === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "id" },
        message: "must have required property 'id'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.version === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "version" },
        message: "must have required property 'version'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "reason" || s === "id" || s === "version")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) > 1e3) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/maxLength",
            keyword: "maxLength",
            params: { limit: 1e3 },
            message: "must NOT have more than 1000 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.id !== void 0) {
      let s = t.id;
      if (typeof s == "string") {
        if (!b.test(s)) {
          const r = {
            instancePath: a + "/id",
            schemaPath: "#/properties/id/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/id",
          schemaPath: "#/properties/id/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.version !== void 0) {
      let s = t.version;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/version",
          schemaPath: "#/properties/version/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/version",
            schemaPath: "#/properties/version/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/version",
            schemaPath: "#/properties/version/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
const he = _;
function _(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = _.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.reason === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.id === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "id" },
        message: "must have required property 'id'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.version === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "version" },
        message: "must have required property 'version'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.duration === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "duration" },
        message: "must have required property 'duration'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (
        !(r === "reason" || r === "id" || r === "version" || r === "duration")
      ) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    if (t.reason !== void 0) {
      let r = t.reason;
      if (typeof r == "string") {
        if (d(r) > 1e3) {
          const p = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/maxLength",
            keyword: "maxLength",
            params: { limit: 1e3 },
            message: "must NOT have more than 1000 characters",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        if (d(r) < 1) {
          const p = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
      } else {
        const p = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (t.id !== void 0) {
      let r = t.id;
      if (typeof r == "string") {
        if (!b.test(r)) {
          const p = {
            instancePath: a + "/id",
            schemaPath: "#/properties/id/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
      } else {
        const p = {
          instancePath: a + "/id",
          schemaPath: "#/properties/id/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (t.version !== void 0) {
      let r = t.version;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const p = {
          instancePath: a + "/version",
          schemaPath: "#/properties/version/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const p = {
            instancePath: a + "/version",
            schemaPath: "#/properties/version/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        if (r < 1 || isNaN(r)) {
          const p = {
            instancePath: a + "/version",
            schemaPath: "#/properties/version/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
      }
    }
    if (t.duration !== void 0) {
      let r = t.duration;
      const p = i;
      let h = !1,
        g = null;
      const oe = i;
      if (r && typeof r == "object" && !Array.isArray(r)) {
        if (r.kind === void 0) {
          const n = {
            instancePath: a + "/duration",
            schemaPath: "#/properties/duration/oneOf/0/required",
            keyword: "required",
            params: { missingProperty: "kind" },
            message: "must have required property 'kind'",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        if (r.months === void 0) {
          const n = {
            instancePath: a + "/duration",
            schemaPath: "#/properties/duration/oneOf/0/required",
            keyword: "required",
            params: { missingProperty: "months" },
            message: "must have required property 'months'",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        for (const n in r)
          if (!(n === "kind" || n === "months")) {
            const c = {
              instancePath: a + "/duration",
              schemaPath: "#/properties/duration/oneOf/0/additionalProperties",
              keyword: "additionalProperties",
              params: { additionalProperty: n },
              message: "must NOT have additional properties",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
        if (r.kind !== void 0 && r.kind !== "months") {
          const n = {
            instancePath: a + "/duration/kind",
            schemaPath: "#/properties/duration/oneOf/0/properties/kind/const",
            keyword: "const",
            params: { allowedValue: "months" },
            message: "must be equal to constant",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        if (r.months !== void 0) {
          let n = r.months;
          if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
            const c = {
              instancePath: a + "/duration/months",
              schemaPath:
                "#/properties/duration/oneOf/0/properties/months/type",
              keyword: "type",
              params: { type: "integer" },
              message: "must be integer",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
          if (typeof n == "number") {
            if (n > 9007199254740991 || isNaN(n)) {
              const c = {
                instancePath: a + "/duration/months",
                schemaPath:
                  "#/properties/duration/oneOf/0/properties/months/maximum",
                keyword: "maximum",
                params: { comparison: "<=", limit: 9007199254740991 },
                message: "must be <= 9007199254740991",
              };
              (e === null ? (e = [c]) : e.push(c), i++);
            }
            if (n < 1 || isNaN(n)) {
              const c = {
                instancePath: a + "/duration/months",
                schemaPath:
                  "#/properties/duration/oneOf/0/properties/months/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: 1 },
                message: "must be >= 1",
              };
              (e === null ? (e = [c]) : e.push(c), i++);
            }
          }
        }
      } else {
        const n = {
          instancePath: a + "/duration",
          schemaPath: "#/properties/duration/oneOf/0/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      var s = oe === i;
      s && ((h = !0), (g = 0));
      const ne = i;
      if (r && typeof r == "object" && !Array.isArray(r)) {
        if (r.kind === void 0) {
          const n = {
            instancePath: a + "/duration",
            schemaPath: "#/properties/duration/oneOf/1/required",
            keyword: "required",
            params: { missingProperty: "kind" },
            message: "must have required property 'kind'",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        for (const n in r)
          if (n !== "kind") {
            const c = {
              instancePath: a + "/duration",
              schemaPath: "#/properties/duration/oneOf/1/additionalProperties",
              keyword: "additionalProperties",
              params: { additionalProperty: n },
              message: "must NOT have additional properties",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
        if (r.kind !== void 0 && r.kind !== "until_revoked") {
          const n = {
            instancePath: a + "/duration/kind",
            schemaPath: "#/properties/duration/oneOf/1/properties/kind/const",
            keyword: "const",
            params: { allowedValue: "until_revoked" },
            message: "must be equal to constant",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
      } else {
        const n = {
          instancePath: a + "/duration",
          schemaPath: "#/properties/duration/oneOf/1/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      var s = ne === i;
      if ((s && h ? ((h = !1), (g = [g, 1])) : s && ((h = !0), (g = 1)), h))
        ((i = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const n = {
          instancePath: a + "/duration",
          schemaPath: "#/properties/duration/oneOf",
          keyword: "oneOf",
          params: { passingSchemas: g },
          message: "must match exactly one schema in oneOf",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((_.errors = e), i === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ge = N;
function N(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = N.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.id === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "id" },
        message: "must have required property 'id'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.version === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "version" },
        message: "must have required property 'version'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "reason" || s === "id" || s === "version")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) > 1e3) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/maxLength",
            keyword: "maxLength",
            params: { limit: 1e3 },
            message: "must NOT have more than 1000 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.id !== void 0) {
      let s = t.id;
      if (typeof s == "string") {
        if (!b.test(s)) {
          const r = {
            instancePath: a + "/id",
            schemaPath: "#/properties/id/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/id",
          schemaPath: "#/properties/id/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.version !== void 0) {
      let s = t.version;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/version",
          schemaPath: "#/properties/version/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/version",
            schemaPath: "#/properties/version/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/version",
            schemaPath: "#/properties/version/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
const be = A;
function A(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = A.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.inboxItemId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "inboxItemId" },
        message: "must have required property 'inboxItemId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "inboxItemId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
const Ie = x;
function x(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = x.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.query === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "query") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.query !== void 0 && typeof t.query != "string") {
      const s = {
        instancePath: a + "/query",
        schemaPath: "#/properties/query/type",
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
const Pe = q,
  rs = {
    properties: {
      kind: { enum: ["problem", "request", "question", "praise"] },
    },
  };
function q(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = q.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!(s === "kind" || s === "limit")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.kind !== void 0) {
      let s = t.kind;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/kind",
          schemaPath: "#/properties/kind/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (
        !(
          s === "problem" ||
          s === "request" ||
          s === "question" ||
          s === "praise"
        )
      ) {
        const r = {
          instancePath: a + "/kind",
          schemaPath: "#/properties/kind/enum",
          keyword: "enum",
          params: { allowedValues: rs.properties.kind.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 50 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
const ve = F;
function F(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = F.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  )
    for (const s in t) {
      const r = {
        instancePath: a,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: s },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((F.errors = e), i === 0);
}
F.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ke = D,
  y = new RegExp(
    "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
    "u",
  );
function D(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = D.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.userId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "userId" },
        message: "must have required property 'userId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "userId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.userId !== void 0) {
      let s = t.userId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/userId",
            schemaPath: "#/properties/userId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/userId",
          schemaPath: "#/properties/userId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const we = j;
function j(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = j.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.inboxItemId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "inboxItemId" },
        message: "must have required property 'inboxItemId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.draft === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "draft" },
        message: "must have required property 'draft'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "inboxItemId" || s === "draft")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.draft !== void 0) {
      let s = t.draft;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/draft",
            schemaPath: "#/properties/draft/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/draft",
          schemaPath: "#/properties/draft/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const _e = O,
  ts = { properties: { mode: { enum: ["grant", "clawback"] } } };
function O(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = O.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.userId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "userId" },
        message: "must have required property 'userId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.credits === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "credits" },
        message: "must have required property 'credits'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "inboxItemId" ||
          s === "userId" ||
          s === "credits" ||
          s === "mode" ||
          s === "reason"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.userId !== void 0) {
      let s = t.userId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/userId",
            schemaPath: "#/properties/userId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/userId",
          schemaPath: "#/properties/userId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.credits !== void 0) {
      let s = t.credits;
      if (typeof s == "number") {
        if (s < 5e-324 || isNaN(s)) {
          const r = {
            instancePath: a + "/credits",
            schemaPath: "#/properties/credits/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 5e-324 },
            message: "must be >= 5e-324",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/credits",
          schemaPath: "#/properties/credits/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.mode !== void 0) {
      let s = t.mode;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/mode",
          schemaPath: "#/properties/mode/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (!(s === "grant" || s === "clawback")) {
        const r = {
          instancePath: a + "/mode",
          schemaPath: "#/properties/mode/enum",
          keyword: "enum",
          params: { allowedValues: ts.properties.mode.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const Ne = T,
  is = { properties: { mode: { enum: ["grant", "clawback"] } } };
function T(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = T.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.organizationId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "organizationId" },
        message: "must have required property 'organizationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.totalCredits === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "totalCredits" },
        message: "must have required property 'totalCredits'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "inboxItemId" ||
          s === "organizationId" ||
          s === "totalCredits" ||
          s === "mode" ||
          s === "reason"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.organizationId !== void 0) {
      let s = t.organizationId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/organizationId",
            schemaPath: "#/properties/organizationId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/organizationId",
          schemaPath: "#/properties/organizationId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.totalCredits !== void 0) {
      let s = t.totalCredits;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/totalCredits",
          schemaPath: "#/properties/totalCredits/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/totalCredits",
            schemaPath: "#/properties/totalCredits/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 5e-324 || isNaN(s)) {
          const r = {
            instancePath: a + "/totalCredits",
            schemaPath: "#/properties/totalCredits/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 5e-324 },
            message: "must be >= 5e-324",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.mode !== void 0) {
      let s = t.mode;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/mode",
          schemaPath: "#/properties/mode/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (!(s === "grant" || s === "clawback")) {
        const r = {
          instancePath: a + "/mode",
          schemaPath: "#/properties/mode/enum",
          keyword: "enum",
          params: { allowedValues: is.properties.mode.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const Ae = E,
  as = new RegExp("^(ch_|py_)", "u");
function E(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = E.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.userId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "userId" },
        message: "must have required property 'userId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.chargeId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chargeId" },
        message: "must have required property 'chargeId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.amountCents === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "amountCents" },
        message: "must have required property 'amountCents'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "inboxItemId" ||
          s === "userId" ||
          s === "chargeId" ||
          s === "amountCents" ||
          s === "reason"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.userId !== void 0) {
      let s = t.userId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/userId",
            schemaPath: "#/properties/userId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/userId",
          schemaPath: "#/properties/userId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.chargeId !== void 0) {
      let s = t.chargeId;
      if (typeof s == "string") {
        if (!as.test(s)) {
          const r = {
            instancePath: a + "/chargeId",
            schemaPath: "#/properties/chargeId/pattern",
            keyword: "pattern",
            params: { pattern: "^(ch_|py_)" },
            message: 'must match pattern "^(ch_|py_)"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/chargeId",
          schemaPath: "#/properties/chargeId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.amountCents !== void 0) {
      let s = t.amountCents;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/amountCents",
          schemaPath: "#/properties/amountCents/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/amountCents",
            schemaPath: "#/properties/amountCents/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 5e-324 || isNaN(s)) {
          const r = {
            instancePath: a + "/amountCents",
            schemaPath: "#/properties/amountCents/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 5e-324 },
            message: "must be >= 5e-324",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const xe = L,
  me = new RegExp("^sub_", "u");
function L(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = L.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.userId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "userId" },
        message: "must have required property 'userId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.subscriptionId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "subscriptionId" },
        message: "must have required property 'subscriptionId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "inboxItemId" ||
          s === "userId" ||
          s === "subscriptionId" ||
          s === "cancelImmediately" ||
          s === "reason"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.userId !== void 0) {
      let s = t.userId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/userId",
            schemaPath: "#/properties/userId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/userId",
          schemaPath: "#/properties/userId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.subscriptionId !== void 0) {
      let s = t.subscriptionId;
      if (typeof s == "string") {
        if (!me.test(s)) {
          const r = {
            instancePath: a + "/subscriptionId",
            schemaPath: "#/properties/subscriptionId/pattern",
            keyword: "pattern",
            params: { pattern: "^sub_" },
            message: 'must match pattern "^sub_"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/subscriptionId",
          schemaPath: "#/properties/subscriptionId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (
      t.cancelImmediately !== void 0 &&
      typeof t.cancelImmediately != "boolean"
    ) {
      const s = {
        instancePath: a + "/cancelImmediately",
        schemaPath: "#/properties/cancelImmediately/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const qe = B;
function B(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = B.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.userId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "userId" },
        message: "must have required property 'userId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.subscriptionId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "subscriptionId" },
        message: "must have required property 'subscriptionId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "inboxItemId" ||
          s === "userId" ||
          s === "subscriptionId" ||
          s === "reason"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.userId !== void 0) {
      let s = t.userId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/userId",
            schemaPath: "#/properties/userId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/userId",
          schemaPath: "#/properties/userId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.subscriptionId !== void 0) {
      let s = t.subscriptionId;
      if (typeof s == "string") {
        if (!me.test(s)) {
          const r = {
            instancePath: a + "/subscriptionId",
            schemaPath: "#/properties/subscriptionId/pattern",
            keyword: "pattern",
            params: { pattern: "^sub_" },
            message: 'must match pattern "^sub_"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/subscriptionId",
          schemaPath: "#/properties/subscriptionId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const Fe = z,
  os = {
    properties: {
      prorationBehavior: {
        enum: ["create_prorations", "none", "always_invoice"],
      },
    },
  },
  ns = new RegExp("^price_", "u");
function z(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = z.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.userId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "userId" },
        message: "must have required property 'userId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.subscriptionId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "subscriptionId" },
        message: "must have required property 'subscriptionId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.newPriceId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "newPriceId" },
        message: "must have required property 'newPriceId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "inboxItemId" ||
          s === "userId" ||
          s === "subscriptionId" ||
          s === "newPriceId" ||
          s === "prorationBehavior" ||
          s === "reason"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.userId !== void 0) {
      let s = t.userId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/userId",
            schemaPath: "#/properties/userId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/userId",
          schemaPath: "#/properties/userId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.subscriptionId !== void 0) {
      let s = t.subscriptionId;
      if (typeof s == "string") {
        if (!me.test(s)) {
          const r = {
            instancePath: a + "/subscriptionId",
            schemaPath: "#/properties/subscriptionId/pattern",
            keyword: "pattern",
            params: { pattern: "^sub_" },
            message: 'must match pattern "^sub_"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/subscriptionId",
          schemaPath: "#/properties/subscriptionId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.newPriceId !== void 0) {
      let s = t.newPriceId;
      if (typeof s == "string") {
        if (!ns.test(s)) {
          const r = {
            instancePath: a + "/newPriceId",
            schemaPath: "#/properties/newPriceId/pattern",
            keyword: "pattern",
            params: { pattern: "^price_" },
            message: 'must match pattern "^price_"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/newPriceId",
          schemaPath: "#/properties/newPriceId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.prorationBehavior !== void 0) {
      let s = t.prorationBehavior;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/prorationBehavior",
          schemaPath: "#/properties/prorationBehavior/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (
        !(s === "create_prorations" || s === "none" || s === "always_invoice")
      ) {
        const r = {
          instancePath: a + "/prorationBehavior",
          schemaPath: "#/properties/prorationBehavior/enum",
          keyword: "enum",
          params: { allowedValues: os.properties.prorationBehavior.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const De = U;
function U(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = U.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.inboxItemId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "inboxItemId" },
        message: "must have required property 'inboxItemId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.draft === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "draft" },
        message: "must have required property 'draft'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.expectedUpdatedAt === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "expectedUpdatedAt" },
        message: "must have required property 'expectedUpdatedAt'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(s === "inboxItemId" || s === "draft" || s === "expectedUpdatedAt")
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.draft !== void 0) {
      let s = t.draft;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/draft",
            schemaPath: "#/properties/draft/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/draft",
          schemaPath: "#/properties/draft/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (
      t.expectedUpdatedAt !== void 0 &&
      typeof t.expectedUpdatedAt != "string"
    ) {
      const s = {
        instancePath: a + "/expectedUpdatedAt",
        schemaPath: "#/properties/expectedUpdatedAt/type",
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
  return ((U.errors = e), i === 0);
}
U.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const je = $,
  ps = new RegExp("^ch_", "u"),
  ms = new RegExp(
    "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
    "u",
  );
function $(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = $.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.chargeId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "chargeId" },
        message: "must have required property 'chargeId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.email === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "email" },
        message: "must have required property 'email'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "chargeId" || s === "email")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.chargeId !== void 0) {
      let s = t.chargeId;
      if (typeof s == "string") {
        if (!ps.test(s)) {
          const r = {
            instancePath: a + "/chargeId",
            schemaPath: "#/properties/chargeId/pattern",
            keyword: "pattern",
            params: { pattern: "^ch_" },
            message: 'must match pattern "^ch_"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/chargeId",
          schemaPath: "#/properties/chargeId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.email !== void 0) {
      let s = t.email;
      if (typeof s == "string") {
        if (!ms.test(s)) {
          const r = {
            instancePath: a + "/email",
            schemaPath: "#/properties/email/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
            },
            message: `must match pattern "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$"`,
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/email",
          schemaPath: "#/properties/email/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
  return (($.errors = e), i === 0);
}
$.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Oe = S,
  fs = new RegExp("^in_", "u");
function S(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = S.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.invoiceId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "invoiceId" },
        message: "must have required property 'invoiceId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "invoiceId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.invoiceId !== void 0) {
      let s = t.invoiceId;
      if (typeof s == "string") {
        if (!fs.test(s)) {
          const r = {
            instancePath: a + "/invoiceId",
            schemaPath: "#/properties/invoiceId/pattern",
            keyword: "pattern",
            params: { pattern: "^in_" },
            message: 'must match pattern "^in_"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/invoiceId",
          schemaPath: "#/properties/invoiceId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const Te = C;
function C(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = C.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.inboxItemId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "inboxItemId" },
        message: "must have required property 'inboxItemId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "inboxItemId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
const Ee = R;
function R(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = R.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.inboxItemId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "inboxItemId" },
        message: "must have required property 'inboxItemId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "inboxItemId" || s === "notes")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.notes !== void 0 && typeof t.notes != "string") {
      const s = {
        instancePath: a + "/notes",
        schemaPath: "#/properties/notes/type",
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
const Le = V;
function V(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = V.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.inboxItemId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "inboxItemId" },
        message: "must have required property 'inboxItemId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "inboxItemId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
const Be = Z;
function Z(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = Z.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.actionId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "actionId" },
        message: "must have required property 'actionId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "actionId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.actionId !== void 0) {
      let s = t.actionId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/actionId",
          schemaPath: "#/properties/actionId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/actionId",
            schemaPath: "#/properties/actionId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/actionId",
            schemaPath: "#/properties/actionId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
  return ((Z.errors = e), i === 0);
}
Z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ze = W;
function W(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = W.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "inboxItemId" ||
          s === "referrerUserId" ||
          s === "maxUses" ||
          s === "referrerBonus" ||
          s === "inviteeBonus" ||
          s === "expiresAt" ||
          s === "reason"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.referrerUserId !== void 0) {
      let s = t.referrerUserId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/referrerUserId",
            schemaPath: "#/properties/referrerUserId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/referrerUserId",
          schemaPath: "#/properties/referrerUserId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.maxUses !== void 0) {
      let s = t.maxUses;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/maxUses",
          schemaPath: "#/properties/maxUses/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxUses",
            schemaPath: "#/properties/maxUses/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxUses",
            schemaPath: "#/properties/maxUses/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.referrerBonus !== void 0) {
      let s = t.referrerBonus;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/referrerBonus",
          schemaPath: "#/properties/referrerBonus/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 1e5 || isNaN(s)) {
          const r = {
            instancePath: a + "/referrerBonus",
            schemaPath: "#/properties/referrerBonus/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e5 },
            message: "must be <= 100000",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 0 || isNaN(s)) {
          const r = {
            instancePath: a + "/referrerBonus",
            schemaPath: "#/properties/referrerBonus/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.inviteeBonus !== void 0) {
      let s = t.inviteeBonus;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inviteeBonus",
          schemaPath: "#/properties/inviteeBonus/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 1e5 || isNaN(s)) {
          const r = {
            instancePath: a + "/inviteeBonus",
            schemaPath: "#/properties/inviteeBonus/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e5 },
            message: "must be <= 100000",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 0 || isNaN(s)) {
          const r = {
            instancePath: a + "/inviteeBonus",
            schemaPath: "#/properties/inviteeBonus/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.expiresAt !== void 0 && typeof t.expiresAt != "string") {
      const s = {
        instancePath: a + "/expiresAt",
        schemaPath: "#/properties/expiresAt/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
  return ((W.errors = e), i === 0);
}
W.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ue = H;
function H(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = H.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.code === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "code" },
        message: "must have required property 'code'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "inboxItemId" || s === "code" || s === "reason")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.code !== void 0) {
      let s = t.code;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/code",
            schemaPath: "#/properties/code/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const $e = M,
  fe = {
    properties: {
      role: { enum: ["member", "admin"] },
      seatStatus: { enum: ["free", "paid"] },
    },
  };
function M(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = M.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.organizationId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "organizationId" },
        message: "must have required property 'organizationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.userId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "userId" },
        message: "must have required property 'userId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "inboxItemId" ||
          s === "organizationId" ||
          s === "userId" ||
          s === "role" ||
          s === "seatStatus" ||
          s === "reason"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.organizationId !== void 0) {
      let s = t.organizationId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/organizationId",
            schemaPath: "#/properties/organizationId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/organizationId",
          schemaPath: "#/properties/organizationId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.userId !== void 0) {
      let s = t.userId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/userId",
            schemaPath: "#/properties/userId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/userId",
          schemaPath: "#/properties/userId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.role !== void 0) {
      let s = t.role;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/role",
          schemaPath: "#/properties/role/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (!(s === "member" || s === "admin")) {
        const r = {
          instancePath: a + "/role",
          schemaPath: "#/properties/role/enum",
          keyword: "enum",
          params: { allowedValues: fe.properties.role.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.seatStatus !== void 0) {
      let s = t.seatStatus;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/seatStatus",
          schemaPath: "#/properties/seatStatus/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (!(s === "free" || s === "paid")) {
        const r = {
          instancePath: a + "/seatStatus",
          schemaPath: "#/properties/seatStatus/enum",
          keyword: "enum",
          params: { allowedValues: fe.properties.seatStatus.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const Se = Y;
function Y(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = Y.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.organizationId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "organizationId" },
        message: "must have required property 'organizationId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.userId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "userId" },
        message: "must have required property 'userId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "inboxItemId" ||
          s === "organizationId" ||
          s === "userId" ||
          s === "reason"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.inboxItemId !== void 0) {
      let s = t.inboxItemId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/inboxItemId",
          schemaPath: "#/properties/inboxItemId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/inboxItemId",
            schemaPath: "#/properties/inboxItemId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.organizationId !== void 0) {
      let s = t.organizationId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/organizationId",
            schemaPath: "#/properties/organizationId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/organizationId",
          schemaPath: "#/properties/organizationId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.userId !== void 0) {
      let s = t.userId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/userId",
            schemaPath: "#/properties/userId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/userId",
          schemaPath: "#/properties/userId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const Ce = G;
function G(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = G.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.mountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mountId" },
        message: "must have required property 'mountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(s === "mountId" || s === "path" || s === "cursor" || s === "limit")
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.mountId !== void 0) {
      let s = t.mountId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/mountId",
          schemaPath: "#/properties/mountId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.path !== void 0 && typeof t.path != "string") {
      const s = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 200 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 200 },
            message: "must be <= 200",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
const Re = J;
function J(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = J.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.targetUserId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "targetUserId" },
        message: "must have required property 'targetUserId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "targetUserId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.targetUserId !== void 0) {
      let s = t.targetUserId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/targetUserId",
            schemaPath: "#/properties/targetUserId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/targetUserId",
          schemaPath: "#/properties/targetUserId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const Ve = K;
function K(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = K.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.targetUserId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "targetUserId" },
        message: "must have required property 'targetUserId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.sourceWorkspaceId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sourceWorkspaceId" },
        message: "must have required property 'sourceWorkspaceId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "targetUserId" ||
          s === "sourceWorkspaceId" ||
          s === "path" ||
          s === "reason"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.targetUserId !== void 0) {
      let s = t.targetUserId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/targetUserId",
            schemaPath: "#/properties/targetUserId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/targetUserId",
          schemaPath: "#/properties/targetUserId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.sourceWorkspaceId !== void 0) {
      let s = t.sourceWorkspaceId;
      if (typeof s == "string") {
        if (!y.test(s)) {
          const r = {
            instancePath: a + "/sourceWorkspaceId",
            schemaPath: "#/properties/sourceWorkspaceId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/sourceWorkspaceId",
          schemaPath: "#/properties/sourceWorkspaceId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.path !== void 0) {
      let s = t.path;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/path",
            schemaPath: "#/properties/path/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/path",
          schemaPath: "#/properties/path/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const Ze = Q;
function Q(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = Q.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.mountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mountId" },
        message: "must have required property 'mountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.path === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "mountId" || s === "path")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.mountId !== void 0) {
      let s = t.mountId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/mountId",
          schemaPath: "#/properties/mountId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.path !== void 0) {
      let s = t.path;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/path",
            schemaPath: "#/properties/path/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/path",
          schemaPath: "#/properties/path/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
const We = X;
function X(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = X.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.mountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mountId" },
        message: "must have required property 'mountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.path === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.version === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "version" },
        message: "must have required property 'version'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "mountId" || s === "path" || s === "version")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.mountId !== void 0) {
      let s = t.mountId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/mountId",
          schemaPath: "#/properties/mountId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.path !== void 0) {
      let s = t.path;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/path",
            schemaPath: "#/properties/path/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/path",
          schemaPath: "#/properties/path/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.version !== void 0) {
      let s = t.version;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/version",
          schemaPath: "#/properties/version/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/version",
            schemaPath: "#/properties/version/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/version",
            schemaPath: "#/properties/version/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
  return ((X.errors = e), i === 0);
}
X.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const He = ee;
function ee(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = ee.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.mountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mountId" },
        message: "must have required property 'mountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "mountId" ||
          s === "path" ||
          s === "cursor" ||
          s === "limit" ||
          s === "windowDays" ||
          s === "includeHidden" ||
          s === "dryRun" ||
          s === "reason"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.mountId !== void 0) {
      let s = t.mountId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/mountId",
          schemaPath: "#/properties/mountId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.path !== void 0 && typeof t.path != "string") {
      const s = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 200 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 200 },
            message: "must be <= 200",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.windowDays !== void 0) {
      let s = t.windowDays;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/windowDays",
          schemaPath: "#/properties/windowDays/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 30 || isNaN(s)) {
          const r = {
            instancePath: a + "/windowDays",
            schemaPath: "#/properties/windowDays/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 30 },
            message: "must be <= 30",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/windowDays",
            schemaPath: "#/properties/windowDays/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.includeHidden !== void 0 && typeof t.includeHidden != "boolean") {
      const s = {
        instancePath: a + "/includeHidden",
        schemaPath: "#/properties/includeHidden/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.dryRun !== void 0 && typeof t.dryRun != "boolean") {
      const s = {
        instancePath: a + "/dryRun",
        schemaPath: "#/properties/dryRun/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
  return ((ee.errors = e), i === 0);
}
ee.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Me = se;
function se(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = se.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.mountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mountId" },
        message: "must have required property 'mountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.path === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.version === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "version" },
        message: "must have required property 'version'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(s === "mountId" || s === "path" || s === "version" || s === "reason")
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.mountId !== void 0) {
      let s = t.mountId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/mountId",
          schemaPath: "#/properties/mountId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.path !== void 0) {
      let s = t.path;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/path",
            schemaPath: "#/properties/path/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/path",
          schemaPath: "#/properties/path/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.version !== void 0) {
      let s = t.version;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/version",
          schemaPath: "#/properties/version/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/version",
            schemaPath: "#/properties/version/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/version",
            schemaPath: "#/properties/version/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
  return ((se.errors = e), i === 0);
}
se.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ye = re;
function re(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = re.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.mountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mountId" },
        message: "must have required property 'mountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "mountId" || s === "path")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.mountId !== void 0) {
      let s = t.mountId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/mountId",
          schemaPath: "#/properties/mountId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.path !== void 0 && typeof t.path != "string") {
      const s = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
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
  return ((re.errors = e), i === 0);
}
re.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ge = te;
function te(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = te.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.mountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mountId" },
        message: "must have required property 'mountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "mountId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.mountId !== void 0) {
      let s = t.mountId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/mountId",
          schemaPath: "#/properties/mountId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
  return ((te.errors = e), i === 0);
}
te.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Je = ie;
function ie(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = ie.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.mountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mountId" },
        message: "must have required property 'mountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.reason === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reason" },
        message: "must have required property 'reason'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "mountId" || s === "reason")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.mountId !== void 0) {
      let s = t.mountId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/mountId",
          schemaPath: "#/properties/mountId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.reason !== void 0) {
      let s = t.reason;
      if (typeof s == "string") {
        if (d(s) < 1) {
          const r = {
            instancePath: a + "/reason",
            schemaPath: "#/properties/reason/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/reason",
          schemaPath: "#/properties/reason/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
  return ((ie.errors = e), i === 0);
}
ie.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ke = ae;
function ae(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: f,
    rootData: u = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = ae.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.mountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mountId" },
        message: "must have required property 'mountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "mountId" || s === "timeoutSeconds")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.mountId !== void 0) {
      let s = t.mountId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/mountId",
          schemaPath: "#/properties/mountId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/mountId",
            schemaPath: "#/properties/mountId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.timeoutSeconds !== void 0) {
      let s = t.timeoutSeconds;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/timeoutSeconds",
          schemaPath: "#/properties/timeoutSeconds/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 300 || isNaN(s)) {
          const r = {
            instancePath: a + "/timeoutSeconds",
            schemaPath: "#/properties/timeoutSeconds/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 300 },
            message: "must be <= 300",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/timeoutSeconds",
            schemaPath: "#/properties/timeoutSeconds/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
  return ((ae.errors = e), i === 0);
}
ae.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const us = {
  support_console_inbox_list: ue,
  support_console_list_vouchers: le,
  support_console_get_voucher: de,
  support_console_issue_voucher: ce,
  support_console_replace_voucher_link: ye,
  support_console_set_voucher_duration: he,
  support_console_revoke_voucher: ge,
  support_console_inbox_get: be,
  support_console_search_customer: Ie,
  support_console_clusters_list: Pe,
  support_console_dashboard_stats: ve,
  support_console_get_user_credits: ke,
  support_console_save_draft: we,
  support_console_propose_credit_grant: _e,
  support_console_propose_org_credit_grant: Ne,
  support_console_propose_refund: Ae,
  support_console_propose_cancel_subscription: xe,
  support_console_propose_resume_subscription: qe,
  support_console_propose_change_plan: Fe,
  support_console_send_reply: De,
  support_console_resend_receipt: je,
  support_console_send_invoice: Oe,
  support_console_dismiss: Te,
  support_console_forward: Ee,
  support_console_restore: Le,
  support_console_approve_action: Be,
  support_console_issue_invite_code: ze,
  support_console_revoke_invite_code: Ue,
  support_console_add_org_member: $e,
  support_console_remove_org_member: Se,
  support_console_synced_fs_history: Ce,
  support_console_synced_fs_list: Re,
  support_console_synced_fs_mount: Ve,
  support_console_synced_fs_read: Ze,
  support_console_synced_fs_read_version: We,
  support_console_synced_fs_restore_deleted: He,
  support_console_synced_fs_restore_version: Me,
  support_console_synced_fs_stat: Ye,
  support_console_synced_fs_status: Ge,
  support_console_synced_fs_unmount: Je,
  support_console_synced_fs_wait: Ke,
};
exports.NATIVE_TOOL_VALIDATORS = us;
exports.validate_support_console_add_org_member = $e;
exports.validate_support_console_approve_action = Be;
exports.validate_support_console_clusters_list = Pe;
exports.validate_support_console_dashboard_stats = ve;
exports.validate_support_console_dismiss = Te;
exports.validate_support_console_forward = Ee;
exports.validate_support_console_get_user_credits = ke;
exports.validate_support_console_get_voucher = de;
exports.validate_support_console_inbox_get = be;
exports.validate_support_console_inbox_list = ue;
exports.validate_support_console_issue_invite_code = ze;
exports.validate_support_console_issue_voucher = ce;
exports.validate_support_console_list_vouchers = le;
exports.validate_support_console_propose_cancel_subscription = xe;
exports.validate_support_console_propose_change_plan = Fe;
exports.validate_support_console_propose_credit_grant = _e;
exports.validate_support_console_propose_org_credit_grant = Ne;
exports.validate_support_console_propose_refund = Ae;
exports.validate_support_console_propose_resume_subscription = qe;
exports.validate_support_console_remove_org_member = Se;
exports.validate_support_console_replace_voucher_link = ye;
exports.validate_support_console_resend_receipt = je;
exports.validate_support_console_restore = Le;
exports.validate_support_console_revoke_invite_code = Ue;
exports.validate_support_console_revoke_voucher = ge;
exports.validate_support_console_save_draft = we;
exports.validate_support_console_search_customer = Ie;
exports.validate_support_console_send_invoice = Oe;
exports.validate_support_console_send_reply = De;
exports.validate_support_console_set_voucher_duration = he;
exports.validate_support_console_synced_fs_history = Ce;
exports.validate_support_console_synced_fs_list = Re;
exports.validate_support_console_synced_fs_mount = Ve;
exports.validate_support_console_synced_fs_read = Ze;
exports.validate_support_console_synced_fs_read_version = We;
exports.validate_support_console_synced_fs_restore_deleted = He;
exports.validate_support_console_synced_fs_restore_version = Me;
exports.validate_support_console_synced_fs_stat = Ye;
exports.validate_support_console_synced_fs_status = Ge;
exports.validate_support_console_synced_fs_unmount = Je;
exports.validate_support_console_synced_fs_wait = Ke;
