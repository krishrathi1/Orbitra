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
      (r._sentryDebugIds[a] = "f9e4ba6f-4b49-4f07-89aa-05a989497665"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-f9e4ba6f-4b49-4f07-89aa-05a989497665"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const V = b;
function b(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = b.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.adSetId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "adSetId" },
        message: "must have required property 'adSetId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "adSetId") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.adSetId !== void 0 && typeof r.adSetId != "string") {
      const s = {
        instancePath: a + "/adSetId",
        schemaPath: "#/properties/adSetId/type",
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
  return ((b.errors = e), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = P,
  S = {
    properties: {
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
      adAccountId: { type: "string" },
      datePreset: {
        enum: [
          "today",
          "yesterday",
          "this_month",
          "last_month",
          "this_quarter",
          "maximum",
          "last_3d",
          "last_7d",
          "last_14d",
          "last_28d",
          "last_30d",
          "last_90d",
          "last_week_mon_sun",
          "last_week_sun_sat",
          "last_quarter",
          "last_year",
          "this_week_mon_today",
          "this_week_sun_today",
          "this_year",
        ],
        type: "string",
      },
      level: { enum: ["account", "campaign", "adset", "ad"], type: "string" },
      fields: { type: "array", items: { type: "string" } },
      breakdowns: { type: "array", items: { type: "string" } },
      timeRange: {
        type: "object",
        properties: { since: { type: "string" }, until: { type: "string" } },
        required: ["since", "until"],
      },
      filtering: {
        type: "array",
        items: {
          type: "object",
          propertyNames: { type: "string" },
          additionalProperties: {},
        },
      },
      actionAttributionWindows: { type: "array", items: { type: "string" } },
      before: { type: "string" },
      after: { type: "string" },
      timeIncrement: {
        anyOf: [
          { type: "integer", minimum: 1, maximum: 90 },
          { const: "all_days" },
        ],
      },
    },
  },
  Z = Object.prototype.hasOwnProperty;
function P(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = P.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.adAccountId === void 0) {
      const m = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "adAccountId" },
        message: "must have required property 'adAccountId'",
      };
      (e === null ? (e = [m]) : e.push(m), i++);
    }
    for (const m in r)
      if (!Z.call(S.properties, m)) {
        const o = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: m },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    if (r.limit !== void 0) {
      let m = r.limit;
      if (!(typeof m == "number" && !(m % 1) && !isNaN(m))) {
        const o = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      if (typeof m == "number") {
        if (m > 9007199254740991 || isNaN(m)) {
          const o = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        if (m < 1 || isNaN(m)) {
          const o = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const m = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [m]) : e.push(m), i++);
    }
    if (r.adAccountId !== void 0 && typeof r.adAccountId != "string") {
      const m = {
        instancePath: a + "/adAccountId",
        schemaPath: "#/properties/adAccountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [m]) : e.push(m), i++);
    }
    if (r.datePreset !== void 0) {
      let m = r.datePreset;
      if (typeof m != "string") {
        const o = {
          instancePath: a + "/datePreset",
          schemaPath: "#/properties/datePreset/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      if (
        !(
          m === "today" ||
          m === "yesterday" ||
          m === "this_month" ||
          m === "last_month" ||
          m === "this_quarter" ||
          m === "maximum" ||
          m === "last_3d" ||
          m === "last_7d" ||
          m === "last_14d" ||
          m === "last_28d" ||
          m === "last_30d" ||
          m === "last_90d" ||
          m === "last_week_mon_sun" ||
          m === "last_week_sun_sat" ||
          m === "last_quarter" ||
          m === "last_year" ||
          m === "this_week_mon_today" ||
          m === "this_week_sun_today" ||
          m === "this_year"
        )
      ) {
        const o = {
          instancePath: a + "/datePreset",
          schemaPath: "#/properties/datePreset/enum",
          keyword: "enum",
          params: { allowedValues: S.properties.datePreset.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (r.level !== void 0) {
      let m = r.level;
      if (typeof m != "string") {
        const o = {
          instancePath: a + "/level",
          schemaPath: "#/properties/level/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      if (
        !(m === "account" || m === "campaign" || m === "adset" || m === "ad")
      ) {
        const o = {
          instancePath: a + "/level",
          schemaPath: "#/properties/level/enum",
          keyword: "enum",
          params: { allowedValues: S.properties.level.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (r.fields !== void 0) {
      let m = r.fields;
      if (Array.isArray(m)) {
        const o = m.length;
        for (let p = 0; p < o; p++)
          if (typeof m[p] != "string") {
            const y = {
              instancePath: a + "/fields/" + p,
              schemaPath: "#/properties/fields/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [y]) : e.push(y), i++);
          }
      } else {
        const o = {
          instancePath: a + "/fields",
          schemaPath: "#/properties/fields/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (r.breakdowns !== void 0) {
      let m = r.breakdowns;
      if (Array.isArray(m)) {
        const o = m.length;
        for (let p = 0; p < o; p++)
          if (typeof m[p] != "string") {
            const y = {
              instancePath: a + "/breakdowns/" + p,
              schemaPath: "#/properties/breakdowns/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [y]) : e.push(y), i++);
          }
      } else {
        const o = {
          instancePath: a + "/breakdowns",
          schemaPath: "#/properties/breakdowns/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (r.timeRange !== void 0) {
      let m = r.timeRange;
      if (m && typeof m == "object" && !Array.isArray(m)) {
        if (m.since === void 0) {
          const o = {
            instancePath: a + "/timeRange",
            schemaPath: "#/properties/timeRange/required",
            keyword: "required",
            params: { missingProperty: "since" },
            message: "must have required property 'since'",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        if (m.until === void 0) {
          const o = {
            instancePath: a + "/timeRange",
            schemaPath: "#/properties/timeRange/required",
            keyword: "required",
            params: { missingProperty: "until" },
            message: "must have required property 'until'",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        if (m.since !== void 0 && typeof m.since != "string") {
          const o = {
            instancePath: a + "/timeRange/since",
            schemaPath: "#/properties/timeRange/properties/since/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        if (m.until !== void 0 && typeof m.until != "string") {
          const o = {
            instancePath: a + "/timeRange/until",
            schemaPath: "#/properties/timeRange/properties/until/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
      } else {
        const o = {
          instancePath: a + "/timeRange",
          schemaPath: "#/properties/timeRange/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (r.filtering !== void 0) {
      let m = r.filtering;
      if (Array.isArray(m)) {
        const o = m.length;
        for (let p = 0; p < o; p++) {
          let y = m[p];
          if (y && typeof y == "object" && !Array.isArray(y))
            for (const h in y) {
              const u = i;
              if (typeof h != "string") {
                const g = {
                  instancePath: a + "/filtering/" + p,
                  schemaPath: "#/properties/filtering/items/propertyNames/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  propertyName: h,
                };
                (e === null ? (e = [g]) : e.push(g), i++);
              }
              var s = u === i;
              if (!s) {
                const g = {
                  instancePath: a + "/filtering/" + p,
                  schemaPath: "#/properties/filtering/items/propertyNames",
                  keyword: "propertyNames",
                  params: { propertyName: h },
                  message: "property name must be valid",
                };
                (e === null ? (e = [g]) : e.push(g), i++);
              }
            }
          else {
            const h = {
              instancePath: a + "/filtering/" + p,
              schemaPath: "#/properties/filtering/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [h]) : e.push(h), i++);
          }
        }
      } else {
        const o = {
          instancePath: a + "/filtering",
          schemaPath: "#/properties/filtering/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (r.actionAttributionWindows !== void 0) {
      let m = r.actionAttributionWindows;
      if (Array.isArray(m)) {
        const o = m.length;
        for (let p = 0; p < o; p++)
          if (typeof m[p] != "string") {
            const y = {
              instancePath: a + "/actionAttributionWindows/" + p,
              schemaPath: "#/properties/actionAttributionWindows/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [y]) : e.push(y), i++);
          }
      } else {
        const o = {
          instancePath: a + "/actionAttributionWindows",
          schemaPath: "#/properties/actionAttributionWindows/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (r.before !== void 0 && typeof r.before != "string") {
      const m = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [m]) : e.push(m), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const m = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [m]) : e.push(m), i++);
    }
    if (r.timeIncrement !== void 0) {
      let m = r.timeIncrement;
      const o = i;
      let p = !1;
      const y = i;
      if (!(typeof m == "number" && !(m % 1) && !isNaN(m))) {
        const u = {
          instancePath: a + "/timeIncrement",
          schemaPath: "#/properties/timeIncrement/anyOf/0/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [u]) : e.push(u), i++);
      }
      if (typeof m == "number") {
        if (m > 90 || isNaN(m)) {
          const u = {
            instancePath: a + "/timeIncrement",
            schemaPath: "#/properties/timeIncrement/anyOf/0/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 90 },
            message: "must be <= 90",
          };
          (e === null ? (e = [u]) : e.push(u), i++);
        }
        if (m < 1 || isNaN(m)) {
          const u = {
            instancePath: a + "/timeIncrement",
            schemaPath: "#/properties/timeIncrement/anyOf/0/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [u]) : e.push(u), i++);
        }
      }
      var t = y === i;
      p = p || t;
      const h = i;
      if (m !== "all_days") {
        const u = {
          instancePath: a + "/timeIncrement",
          schemaPath: "#/properties/timeIncrement/anyOf/1/const",
          keyword: "const",
          params: { allowedValue: "all_days" },
          message: "must be equal to constant",
        };
        (e === null ? (e = [u]) : e.push(u), i++);
      }
      var t = h === i;
      if (((p = p || t), p))
        ((i = o), e !== null && (o ? (e.length = o) : (e = null)));
      else {
        const u = {
          instancePath: a + "/timeIncrement",
          schemaPath: "#/properties/timeIncrement/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [u]) : e.push(u), i++);
      }
    }
  } else {
    const m = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [m]) : e.push(m), i++);
  }
  return ((P.errors = e), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = w;
function w(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = w.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.adAccountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "adAccountId" },
        message: "must have required property 'adAccountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "adAccountId" ||
          s === "limit" ||
          s === "before" ||
          s === "after"
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
    if (r.adAccountId !== void 0 && typeof r.adAccountId != "string") {
      const s = {
        instancePath: a + "/adAccountId",
        schemaPath: "#/properties/adAccountId/type",
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
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
const F = k;
function k(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = k.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "limit" ||
          s === "before" ||
          s === "after"
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
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
  return ((k.errors = e), i === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = N;
function N(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = N.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.adAccountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "adAccountId" },
        message: "must have required property 'adAccountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "adAccountId" ||
          s === "limit" ||
          s === "before" ||
          s === "after"
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
    if (r.adAccountId !== void 0 && typeof r.adAccountId != "string") {
      const s = {
        instancePath: a + "/adAccountId",
        schemaPath: "#/properties/adAccountId/type",
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
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
const M = _;
function _(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = _.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.adAccountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "adAccountId" },
        message: "must have required property 'adAccountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "adAccountId" ||
          s === "limit" ||
          s === "before" ||
          s === "after"
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
    if (r.adAccountId !== void 0 && typeof r.adAccountId != "string") {
      const s = {
        instancePath: a + "/adAccountId",
        schemaPath: "#/properties/adAccountId/type",
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
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
const Y = v;
function v(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = v.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.adAccountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "adAccountId" },
        message: "must have required property 'adAccountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "adAccountId" ||
          s === "limit" ||
          s === "before" ||
          s === "after"
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
    if (r.adAccountId !== void 0 && typeof r.adAccountId != "string") {
      const s = {
        instancePath: a + "/adAccountId",
        schemaPath: "#/properties/adAccountId/type",
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
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
  return ((v.errors = e), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = I;
function I(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = I.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.adAccountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "adAccountId" },
        message: "must have required property 'adAccountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "adAccountId" ||
          s === "limit" ||
          s === "effectiveStatus" ||
          s === "before" ||
          s === "after"
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
    if (r.adAccountId !== void 0 && typeof r.adAccountId != "string") {
      const s = {
        instancePath: a + "/adAccountId",
        schemaPath: "#/properties/adAccountId/type",
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
    if (r.effectiveStatus !== void 0) {
      let s = r.effectiveStatus;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let m = 0; m < t; m++)
          if (typeof s[m] != "string") {
            const o = {
              instancePath: a + "/effectiveStatus/" + m,
              schemaPath: "#/properties/effectiveStatus/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: a + "/effectiveStatus",
          schemaPath: "#/properties/effectiveStatus/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
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
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = A;
function A(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = A.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.businessId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "businessId" },
        message: "must have required property 'businessId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "businessId" ||
          s === "limit" ||
          s === "before" ||
          s === "after"
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
    if (r.businessId !== void 0 && typeof r.businessId != "string") {
      const s = {
        instancePath: a + "/businessId",
        schemaPath: "#/properties/businessId/type",
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
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
const G = x;
function x(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = x.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.adAccountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "adAccountId" },
        message: "must have required property 'adAccountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "adAccountId" ||
          s === "limit" ||
          s === "before" ||
          s === "after"
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
    if (r.adAccountId !== void 0 && typeof r.adAccountId != "string") {
      const s = {
        instancePath: a + "/adAccountId",
        schemaPath: "#/properties/adAccountId/type",
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
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
const H = q;
function q(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = q.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.adAccountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "adAccountId" },
        message: "must have required property 'adAccountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "adAccountId" ||
          s === "limit" ||
          s === "before" ||
          s === "after"
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
    if (r.adAccountId !== void 0 && typeof r.adAccountId != "string") {
      const s = {
        instancePath: a + "/adAccountId",
        schemaPath: "#/properties/adAccountId/type",
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
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
const J = j;
function j(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = j.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "limit" ||
          s === "before" ||
          s === "after"
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
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
const K = D;
function D(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = D.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.adAccountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "adAccountId" },
        message: "must have required property 'adAccountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "adAccountId" ||
          s === "limit" ||
          s === "before" ||
          s === "after"
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
    if (r.adAccountId !== void 0 && typeof r.adAccountId != "string") {
      const s = {
        instancePath: a + "/adAccountId",
        schemaPath: "#/properties/adAccountId/type",
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
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
const Q = O;
function O(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = O.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.catalogId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "catalogId" },
        message: "must have required property 'catalogId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "catalogId" ||
          s === "limit" ||
          s === "before" ||
          s === "after"
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
    if (r.catalogId !== void 0 && typeof r.catalogId != "string") {
      const s = {
        instancePath: a + "/catalogId",
        schemaPath: "#/properties/catalogId/type",
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
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
const U = T;
function T(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = T.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.adId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "adId" },
        message: "must have required property 'adId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "adId" || s === "adFormat")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.adId !== void 0 && typeof r.adId != "string") {
      const s = {
        instancePath: a + "/adId",
        schemaPath: "#/properties/adId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.adFormat !== void 0 && typeof r.adFormat != "string") {
      const s = {
        instancePath: a + "/adFormat",
        schemaPath: "#/properties/adFormat/type",
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
const X = E,
  R = {
    properties: {
      type: {
        enum: [
          "adinterest",
          "adgeolocation",
          "adlocale",
          "adeducationschool",
          "adeducationmajor",
          "adworkemployer",
          "adworkposition",
          "adTargetingCategory",
        ],
      },
      class: {
        enum: [
          "interests",
          "behaviors",
          "demographics",
          "life_events",
          "industries",
          "income",
          "family_statuses",
          "user_device",
          "user_os",
        ],
      },
    },
  };
function E(
  r,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = E.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
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
          s === "limit" ||
          s === "cursor" ||
          s === "type" ||
          s === "q" ||
          s === "class" ||
          s === "after" ||
          s === "before"
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
      if (
        !(
          s === "adinterest" ||
          s === "adgeolocation" ||
          s === "adlocale" ||
          s === "adeducationschool" ||
          s === "adeducationmajor" ||
          s === "adworkemployer" ||
          s === "adworkposition" ||
          s === "adTargetingCategory"
        )
      ) {
        const t = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: R.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.q !== void 0 && typeof r.q != "string") {
      const s = {
        instancePath: a + "/q",
        schemaPath: "#/properties/q/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.class !== void 0) {
      let s = r.class;
      if (typeof s != "string") {
        const t = {
          instancePath: a + "/class",
          schemaPath: "#/properties/class/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "interests" ||
          s === "behaviors" ||
          s === "demographics" ||
          s === "life_events" ||
          s === "industries" ||
          s === "income" ||
          s === "family_statuses" ||
          s === "user_device" ||
          s === "user_os"
        )
      ) {
        const t = {
          instancePath: a + "/class",
          schemaPath: "#/properties/class/enum",
          keyword: "enum",
          params: { allowedValues: R.properties.class.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.after !== void 0 && typeof r.after != "string") {
      const s = {
        instancePath: a + "/after",
        schemaPath: "#/properties/after/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.before !== void 0 && typeof r.before != "string") {
      const s = {
        instancePath: a + "/before",
        schemaPath: "#/properties/before/type",
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
const $ = {
  metaads_get_ad_set: V,
  metaads_get_insights: W,
  metaads_list_activities: L,
  metaads_list_ad_accounts: F,
  metaads_list_ad_rules: C,
  metaads_list_ad_sets: M,
  metaads_list_ads: Y,
  metaads_list_campaigns: z,
  metaads_list_catalogs: B,
  metaads_list_creatives: G,
  metaads_list_custom_audiences: H,
  metaads_list_pages: J,
  metaads_list_pixels: K,
  metaads_list_product_sets: Q,
  metaads_preview_ad: U,
  metaads_search_targeting: X,
};
exports.NATIVE_TOOL_VALIDATORS = $;
exports.validate_metaads_get_ad_set = V;
exports.validate_metaads_get_insights = W;
exports.validate_metaads_list_activities = L;
exports.validate_metaads_list_ad_accounts = F;
exports.validate_metaads_list_ad_rules = C;
exports.validate_metaads_list_ad_sets = M;
exports.validate_metaads_list_ads = Y;
exports.validate_metaads_list_campaigns = z;
exports.validate_metaads_list_catalogs = B;
exports.validate_metaads_list_creatives = G;
exports.validate_metaads_list_custom_audiences = H;
exports.validate_metaads_list_pages = J;
exports.validate_metaads_list_pixels = K;
exports.validate_metaads_list_product_sets = Q;
exports.validate_metaads_preview_ad = U;
exports.validate_metaads_search_targeting = X;
