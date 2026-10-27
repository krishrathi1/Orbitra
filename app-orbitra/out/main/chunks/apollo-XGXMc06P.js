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
      (t._sentryDebugIds[a] = "f6661a4a-4e60-4755-9b16-84bd8c25a09a"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-f6661a4a-4e60-4755-9b16-84bd8c25a09a"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const D = d,
  O = {
    properties: {
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
      qKeywords: { type: "string" },
      personTitles: { type: "array", items: { type: "string" } },
      personSeniorities: {
        type: "array",
        items: {
          enum: [
            "owner",
            "founder",
            "c_suite",
            "partner",
            "vp",
            "head",
            "director",
            "manager",
            "senior",
            "entry",
            "intern",
          ],
          type: "string",
        },
      },
      personLocations: { type: "array", items: { type: "string" } },
      organizationLocations: { type: "array", items: { type: "string" } },
      organizationIds: { type: "array", items: { type: "string" } },
      organizationNumEmployeesRanges: {
        type: "array",
        items: { type: "string" },
      },
      organizationIndustryTagIds: { type: "array", items: { type: "string" } },
      qOrganizationKeywordTags: { type: "array", items: { type: "string" } },
      currentlyUsingAnyOfTechnologyUids: {
        type: "array",
        items: { type: "string" },
      },
      organizationLatestFundingStageCd: {
        type: "array",
        items: { type: "string" },
      },
      revenueRange: {
        type: "object",
        properties: { min: { type: "number" }, max: { type: "number" } },
      },
      contactEmailStatus: {
        type: "array",
        items: {
          enum: ["verified", "unverified", "likely to engage", "unavailable"],
          type: "string",
        },
      },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 100 },
    },
  },
  S = Object.prototype.hasOwnProperty;
function d(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = d.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!S.call(O.properties, s)) {
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
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
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
    if (t.qKeywords !== void 0 && typeof t.qKeywords != "string") {
      const s = {
        instancePath: a + "/qKeywords",
        schemaPath: "#/properties/qKeywords/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.personTitles !== void 0) {
      let s = t.personTitles;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/personTitles/" + n,
              schemaPath: "#/properties/personTitles/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/personTitles",
          schemaPath: "#/properties/personTitles/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.personSeniorities !== void 0) {
      let s = t.personSeniorities;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++) {
          let p = s[n];
          if (typeof p != "string") {
            const c = {
              instancePath: a + "/personSeniorities/" + n,
              schemaPath: "#/properties/personSeniorities/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
          if (
            !(
              p === "owner" ||
              p === "founder" ||
              p === "c_suite" ||
              p === "partner" ||
              p === "vp" ||
              p === "head" ||
              p === "director" ||
              p === "manager" ||
              p === "senior" ||
              p === "entry" ||
              p === "intern"
            )
          ) {
            const c = {
              instancePath: a + "/personSeniorities/" + n,
              schemaPath: "#/properties/personSeniorities/items/enum",
              keyword: "enum",
              params: {
                allowedValues: O.properties.personSeniorities.items.enum,
              },
              message: "must be equal to one of the allowed values",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
        }
      } else {
        const r = {
          instancePath: a + "/personSeniorities",
          schemaPath: "#/properties/personSeniorities/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.personLocations !== void 0) {
      let s = t.personLocations;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/personLocations/" + n,
              schemaPath: "#/properties/personLocations/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/personLocations",
          schemaPath: "#/properties/personLocations/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.organizationLocations !== void 0) {
      let s = t.organizationLocations;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/organizationLocations/" + n,
              schemaPath: "#/properties/organizationLocations/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/organizationLocations",
          schemaPath: "#/properties/organizationLocations/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.organizationIds !== void 0) {
      let s = t.organizationIds;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/organizationIds/" + n,
              schemaPath: "#/properties/organizationIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/organizationIds",
          schemaPath: "#/properties/organizationIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.organizationNumEmployeesRanges !== void 0) {
      let s = t.organizationNumEmployeesRanges;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/organizationNumEmployeesRanges/" + n,
              schemaPath:
                "#/properties/organizationNumEmployeesRanges/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/organizationNumEmployeesRanges",
          schemaPath: "#/properties/organizationNumEmployeesRanges/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.organizationIndustryTagIds !== void 0) {
      let s = t.organizationIndustryTagIds;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/organizationIndustryTagIds/" + n,
              schemaPath: "#/properties/organizationIndustryTagIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/organizationIndustryTagIds",
          schemaPath: "#/properties/organizationIndustryTagIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.qOrganizationKeywordTags !== void 0) {
      let s = t.qOrganizationKeywordTags;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/qOrganizationKeywordTags/" + n,
              schemaPath: "#/properties/qOrganizationKeywordTags/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/qOrganizationKeywordTags",
          schemaPath: "#/properties/qOrganizationKeywordTags/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.currentlyUsingAnyOfTechnologyUids !== void 0) {
      let s = t.currentlyUsingAnyOfTechnologyUids;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/currentlyUsingAnyOfTechnologyUids/" + n,
              schemaPath:
                "#/properties/currentlyUsingAnyOfTechnologyUids/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/currentlyUsingAnyOfTechnologyUids",
          schemaPath: "#/properties/currentlyUsingAnyOfTechnologyUids/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.organizationLatestFundingStageCd !== void 0) {
      let s = t.organizationLatestFundingStageCd;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/organizationLatestFundingStageCd/" + n,
              schemaPath:
                "#/properties/organizationLatestFundingStageCd/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/organizationLatestFundingStageCd",
          schemaPath: "#/properties/organizationLatestFundingStageCd/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.revenueRange !== void 0) {
      let s = t.revenueRange;
      if (s && typeof s == "object" && !Array.isArray(s)) {
        if (s.min !== void 0 && typeof s.min != "number") {
          const r = {
            instancePath: a + "/revenueRange/min",
            schemaPath: "#/properties/revenueRange/properties/min/type",
            keyword: "type",
            params: { type: "number" },
            message: "must be number",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s.max !== void 0 && typeof s.max != "number") {
          const r = {
            instancePath: a + "/revenueRange/max",
            schemaPath: "#/properties/revenueRange/properties/max/type",
            keyword: "type",
            params: { type: "number" },
            message: "must be number",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/revenueRange",
          schemaPath: "#/properties/revenueRange/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.contactEmailStatus !== void 0) {
      let s = t.contactEmailStatus;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++) {
          let p = s[n];
          if (typeof p != "string") {
            const c = {
              instancePath: a + "/contactEmailStatus/" + n,
              schemaPath: "#/properties/contactEmailStatus/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
          if (
            !(
              p === "verified" ||
              p === "unverified" ||
              p === "likely to engage" ||
              p === "unavailable"
            )
          ) {
            const c = {
              instancePath: a + "/contactEmailStatus/" + n,
              schemaPath: "#/properties/contactEmailStatus/items/enum",
              keyword: "enum",
              params: {
                allowedValues: O.properties.contactEmailStatus.items.enum,
              },
              message: "must be equal to one of the allowed values",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
        }
      } else {
        const r = {
          instancePath: a + "/contactEmailStatus",
          schemaPath: "#/properties/contactEmailStatus/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.page !== void 0) {
      let s = t.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.perPage !== void 0) {
      let s = t.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/perPage",
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
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
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
  return ((d.errors = e), i === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = f,
  X = {
    properties: {
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
      qOrganizationName: { type: "string" },
      organizationLocations: { type: "array", items: { type: "string" } },
      organizationNumEmployeesRanges: {
        type: "array",
        items: { type: "string" },
      },
      organizationIndustryTagIds: { type: "array", items: { type: "string" } },
      qOrganizationKeywordTags: { type: "array", items: { type: "string" } },
      currentlyUsingAnyOfTechnologyUids: {
        type: "array",
        items: { type: "string" },
      },
      organizationLatestFundingStageCd: {
        type: "array",
        items: { type: "string" },
      },
      revenueRange: {
        type: "object",
        properties: { min: { type: "number" }, max: { type: "number" } },
      },
      organizationGrowthSignals: { type: "array", items: { type: "string" } },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 100 },
    },
  };
function f(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = f.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!S.call(X.properties, s)) {
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
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
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
    if (
      t.qOrganizationName !== void 0 &&
      typeof t.qOrganizationName != "string"
    ) {
      const s = {
        instancePath: a + "/qOrganizationName",
        schemaPath: "#/properties/qOrganizationName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.organizationLocations !== void 0) {
      let s = t.organizationLocations;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/organizationLocations/" + n,
              schemaPath: "#/properties/organizationLocations/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/organizationLocations",
          schemaPath: "#/properties/organizationLocations/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.organizationNumEmployeesRanges !== void 0) {
      let s = t.organizationNumEmployeesRanges;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/organizationNumEmployeesRanges/" + n,
              schemaPath:
                "#/properties/organizationNumEmployeesRanges/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/organizationNumEmployeesRanges",
          schemaPath: "#/properties/organizationNumEmployeesRanges/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.organizationIndustryTagIds !== void 0) {
      let s = t.organizationIndustryTagIds;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/organizationIndustryTagIds/" + n,
              schemaPath: "#/properties/organizationIndustryTagIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/organizationIndustryTagIds",
          schemaPath: "#/properties/organizationIndustryTagIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.qOrganizationKeywordTags !== void 0) {
      let s = t.qOrganizationKeywordTags;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/qOrganizationKeywordTags/" + n,
              schemaPath: "#/properties/qOrganizationKeywordTags/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/qOrganizationKeywordTags",
          schemaPath: "#/properties/qOrganizationKeywordTags/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.currentlyUsingAnyOfTechnologyUids !== void 0) {
      let s = t.currentlyUsingAnyOfTechnologyUids;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/currentlyUsingAnyOfTechnologyUids/" + n,
              schemaPath:
                "#/properties/currentlyUsingAnyOfTechnologyUids/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/currentlyUsingAnyOfTechnologyUids",
          schemaPath: "#/properties/currentlyUsingAnyOfTechnologyUids/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.organizationLatestFundingStageCd !== void 0) {
      let s = t.organizationLatestFundingStageCd;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/organizationLatestFundingStageCd/" + n,
              schemaPath:
                "#/properties/organizationLatestFundingStageCd/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/organizationLatestFundingStageCd",
          schemaPath: "#/properties/organizationLatestFundingStageCd/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.revenueRange !== void 0) {
      let s = t.revenueRange;
      if (s && typeof s == "object" && !Array.isArray(s)) {
        if (s.min !== void 0 && typeof s.min != "number") {
          const r = {
            instancePath: a + "/revenueRange/min",
            schemaPath: "#/properties/revenueRange/properties/min/type",
            keyword: "type",
            params: { type: "number" },
            message: "must be number",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s.max !== void 0 && typeof s.max != "number") {
          const r = {
            instancePath: a + "/revenueRange/max",
            schemaPath: "#/properties/revenueRange/properties/max/type",
            keyword: "type",
            params: { type: "number" },
            message: "must be number",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/revenueRange",
          schemaPath: "#/properties/revenueRange/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.organizationGrowthSignals !== void 0) {
      let s = t.organizationGrowthSignals;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/organizationGrowthSignals/" + n,
              schemaPath: "#/properties/organizationGrowthSignals/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/organizationGrowthSignals",
          schemaPath: "#/properties/organizationGrowthSignals/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.page !== void 0) {
      let s = t.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.perPage !== void 0) {
      let s = t.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/perPage",
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
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
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
  return ((f.errors = e), i === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const x = g;
function g(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = g.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "email" ||
          s === "firstName" ||
          s === "lastName" ||
          s === "organizationName" ||
          s === "domain" ||
          s === "linkedinUrl" ||
          s === "revealPersonalEmails"
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
    if (t.email !== void 0 && typeof t.email != "string") {
      const s = {
        instancePath: a + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.firstName !== void 0 && typeof t.firstName != "string") {
      const s = {
        instancePath: a + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.lastName !== void 0 && typeof t.lastName != "string") {
      const s = {
        instancePath: a + "/lastName",
        schemaPath: "#/properties/lastName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      t.organizationName !== void 0 &&
      typeof t.organizationName != "string"
    ) {
      const s = {
        instancePath: a + "/organizationName",
        schemaPath: "#/properties/organizationName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.domain !== void 0 && typeof t.domain != "string") {
      const s = {
        instancePath: a + "/domain",
        schemaPath: "#/properties/domain/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.linkedinUrl !== void 0 && typeof t.linkedinUrl != "string") {
      const s = {
        instancePath: a + "/linkedinUrl",
        schemaPath: "#/properties/linkedinUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      t.revealPersonalEmails !== void 0 &&
      typeof t.revealPersonalEmails != "boolean"
    ) {
      const s = {
        instancePath: a + "/revealPersonalEmails",
        schemaPath: "#/properties/revealPersonalEmails/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
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
  return ((g.errors = e), i === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = h;
function h(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = h.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.firstName === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "firstName" },
        message: "must have required property 'firstName'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.lastName === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "lastName" },
        message: "must have required property 'lastName'",
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
      if (
        !(
          s === "firstName" ||
          s === "lastName" ||
          s === "email" ||
          s === "title" ||
          s === "presentRawAddress" ||
          s === "directPhone"
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
    if (t.firstName !== void 0 && typeof t.firstName != "string") {
      const s = {
        instancePath: a + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.lastName !== void 0 && typeof t.lastName != "string") {
      const s = {
        instancePath: a + "/lastName",
        schemaPath: "#/properties/lastName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.email !== void 0 && typeof t.email != "string") {
      const s = {
        instancePath: a + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: a + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      t.presentRawAddress !== void 0 &&
      typeof t.presentRawAddress != "string"
    ) {
      const s = {
        instancePath: a + "/presentRawAddress",
        schemaPath: "#/properties/presentRawAddress/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.directPhone !== void 0 && typeof t.directPhone != "string") {
      const s = {
        instancePath: a + "/directPhone",
        schemaPath: "#/properties/directPhone/type",
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
  return ((h.errors = e), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const U = P;
function P(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
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
    if (t.sequenceId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sequenceId" },
        message: "must have required property 'sequenceId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.contactIds === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "contactIds" },
        message: "must have required property 'contactIds'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.sendEmailFromEmailAccountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sendEmailFromEmailAccountId" },
        message: "must have required property 'sendEmailFromEmailAccountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "sequenceId" ||
          s === "contactIds" ||
          s === "sendEmailFromEmailAccountId"
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
    if (t.sequenceId !== void 0 && typeof t.sequenceId != "string") {
      const s = {
        instancePath: a + "/sequenceId",
        schemaPath: "#/properties/sequenceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.contactIds !== void 0) {
      let s = t.contactIds;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/contactIds/" + n,
              schemaPath: "#/properties/contactIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/contactIds",
          schemaPath: "#/properties/contactIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (
      t.sendEmailFromEmailAccountId !== void 0 &&
      typeof t.sendEmailFromEmailAccountId != "string"
    ) {
      const s = {
        instancePath: a + "/sendEmailFromEmailAccountId",
        schemaPath: "#/properties/sendEmailFromEmailAccountId/type",
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
  return ((P.errors = e), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const F = b;
function b(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = b.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "page" ||
          s === "perPage"
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
    if (t.start !== void 0) {
      let s = t.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/start",
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
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/start",
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
          instancePath: a + "/end",
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
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/end",
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
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.page !== void 0) {
      let s = t.page;
      if (typeof s == "number") {
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.perPage !== void 0) {
      let s = t.perPage;
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
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
  return ((b.errors = e), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const K = w;
function w(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = w.evaluated;
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
  return ((w.errors = e), i === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = k;
function k(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
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
    if (t.id !== void 0 && typeof t.id != "string") {
      const s = {
        instancePath: a + "/id",
        schemaPath: "#/properties/id/type",
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
const V = v;
function v(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
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
    for (const s in t)
      if (
        !(
          s === "limit" ||
          s === "cursor" ||
          s === "qKeywords" ||
          s === "contactStageIds" ||
          s === "page" ||
          s === "perPage"
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
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
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
    if (t.qKeywords !== void 0 && typeof t.qKeywords != "string") {
      const s = {
        instancePath: a + "/qKeywords",
        schemaPath: "#/properties/qKeywords/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.contactStageIds !== void 0) {
      let s = t.contactStageIds;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/contactStageIds/" + n,
              schemaPath: "#/properties/contactStageIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/contactStageIds",
          schemaPath: "#/properties/contactStageIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.page !== void 0) {
      let s = t.page;
      if (typeof s == "number") {
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.perPage !== void 0) {
      let s = t.perPage;
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
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
const G = N,
  Z = {
    properties: {
      id: { type: "string" },
      firstName: { type: "string" },
      lastName: { type: "string" },
      email: { type: "string" },
      title: { type: "string" },
      presentRawAddress: { type: "string" },
      directPhone: { type: "string" },
      mobilePhone: { type: "string" },
      corporatePhone: { type: "string" },
      homePhone: { type: "string" },
    },
  };
function N(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
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
      if (!S.call(Z.properties, s)) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.id !== void 0 && typeof t.id != "string") {
      const s = {
        instancePath: a + "/id",
        schemaPath: "#/properties/id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.firstName !== void 0 && typeof t.firstName != "string") {
      const s = {
        instancePath: a + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.lastName !== void 0 && typeof t.lastName != "string") {
      const s = {
        instancePath: a + "/lastName",
        schemaPath: "#/properties/lastName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.email !== void 0 && typeof t.email != "string") {
      const s = {
        instancePath: a + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: a + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      t.presentRawAddress !== void 0 &&
      typeof t.presentRawAddress != "string"
    ) {
      const s = {
        instancePath: a + "/presentRawAddress",
        schemaPath: "#/properties/presentRawAddress/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.directPhone !== void 0 && typeof t.directPhone != "string") {
      const s = {
        instancePath: a + "/directPhone",
        schemaPath: "#/properties/directPhone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.mobilePhone !== void 0 && typeof t.mobilePhone != "string") {
      const s = {
        instancePath: a + "/mobilePhone",
        schemaPath: "#/properties/mobilePhone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.corporatePhone !== void 0 && typeof t.corporatePhone != "string") {
      const s = {
        instancePath: a + "/corporatePhone",
        schemaPath: "#/properties/corporatePhone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.homePhone !== void 0 && typeof t.homePhone != "string") {
      const s = {
        instancePath: a + "/homePhone",
        schemaPath: "#/properties/homePhone/type",
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
const B = _;
function _(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
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
    if (t.id !== void 0 && typeof t.id != "string") {
      const s = {
        instancePath: a + "/id",
        schemaPath: "#/properties/id/type",
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
const M = A;
function A(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = A.evaluated;
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
  return ((A.errors = e), i === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = I;
function I(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
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
    if (t.contactIds === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "contactIds" },
        message: "must have required property 'contactIds'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.contactStageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "contactStageId" },
        message: "must have required property 'contactStageId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "contactIds" || s === "contactStageId")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.contactIds !== void 0) {
      let s = t.contactIds;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/contactIds/" + n,
              schemaPath: "#/properties/contactIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/contactIds",
          schemaPath: "#/properties/contactIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.contactStageId !== void 0 && typeof t.contactStageId != "string") {
      const s = {
        instancePath: a + "/contactStageId",
        schemaPath: "#/properties/contactStageId/type",
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
const H = z;
function z(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = z.evaluated;
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
  return ((z.errors = e), i === 0);
}
z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const J = q,
  j = {
    properties: {
      priority: { enum: ["low", "medium", "high"] },
      type: { enum: ["call", "email", "linkedin", "in_person", "other"] },
    },
  };
function q(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
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
    if (t.contactIds === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "contactIds" },
        message: "must have required property 'contactIds'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.note === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "note" },
        message: "must have required property 'note'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "contactIds" ||
          s === "note" ||
          s === "dueAt" ||
          s === "priority" ||
          s === "type"
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
    if (t.contactIds !== void 0) {
      let s = t.contactIds;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let n = 0; n < r; n++)
          if (typeof s[n] != "string") {
            const p = {
              instancePath: a + "/contactIds/" + n,
              schemaPath: "#/properties/contactIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const r = {
          instancePath: a + "/contactIds",
          schemaPath: "#/properties/contactIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.note !== void 0 && typeof t.note != "string") {
      const s = {
        instancePath: a + "/note",
        schemaPath: "#/properties/note/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.dueAt !== void 0 && typeof t.dueAt != "string") {
      const s = {
        instancePath: a + "/dueAt",
        schemaPath: "#/properties/dueAt/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.priority !== void 0) {
      let s = t.priority;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/priority",
          schemaPath: "#/properties/priority/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (!(s === "low" || s === "medium" || s === "high")) {
        const r = {
          instancePath: a + "/priority",
          schemaPath: "#/properties/priority/enum",
          keyword: "enum",
          params: { allowedValues: j.properties.priority.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.type !== void 0) {
      let s = t.type;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (
        !(
          s === "call" ||
          s === "email" ||
          s === "linkedin" ||
          s === "in_person" ||
          s === "other"
        )
      ) {
        const r = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: j.properties.type.enum },
          message: "must be equal to one of the allowed values",
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
  return ((q.errors = e), i === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Q = T;
function T(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
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
    if (t.name === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "name" ||
          s === "domain" ||
          s === "phone" ||
          s === "rawAddress" ||
          s === "ownerId"
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
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.domain !== void 0 && typeof t.domain != "string") {
      const s = {
        instancePath: a + "/domain",
        schemaPath: "#/properties/domain/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.phone !== void 0 && typeof t.phone != "string") {
      const s = {
        instancePath: a + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.rawAddress !== void 0 && typeof t.rawAddress != "string") {
      const s = {
        instancePath: a + "/rawAddress",
        schemaPath: "#/properties/rawAddress/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.ownerId !== void 0 && typeof t.ownerId != "string") {
      const s = {
        instancePath: a + "/ownerId",
        schemaPath: "#/properties/ownerId/type",
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
const W = E;
function E(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = t,
    dynamicAnchors: y = {},
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
    for (const s in t)
      if (
        !(
          s === "limit" ||
          s === "cursor" ||
          s === "qOrganizationName" ||
          s === "sortByField" ||
          s === "page" ||
          s === "perPage"
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
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
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
    if (
      t.qOrganizationName !== void 0 &&
      typeof t.qOrganizationName != "string"
    ) {
      const s = {
        instancePath: a + "/qOrganizationName",
        schemaPath: "#/properties/qOrganizationName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.sortByField !== void 0 && typeof t.sortByField != "string") {
      const s = {
        instancePath: a + "/sortByField",
        schemaPath: "#/properties/sortByField/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.page !== void 0) {
      let s = t.page;
      if (typeof s == "number") {
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.perPage !== void 0) {
      let s = t.perPage;
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
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
const $ = {
  apollo_search_people: D,
  apollo_search_companies: R,
  apollo_enrich_person: x,
  apollo_create_contact: L,
  apollo_add_to_sequence: U,
  apollo_list_sequences: F,
  apollo_list_email_accounts: K,
  apollo_get_contact: C,
  apollo_search_contacts: V,
  apollo_update_contact: G,
  apollo_delete_contact: B,
  apollo_list_contact_stages: M,
  apollo_update_contact_stage: Y,
  apollo_list_labels: H,
  apollo_create_task: J,
  apollo_create_account: Q,
  apollo_search_accounts: W,
};
exports.NATIVE_TOOL_VALIDATORS = $;
exports.validate_apollo_add_to_sequence = U;
exports.validate_apollo_create_account = Q;
exports.validate_apollo_create_contact = L;
exports.validate_apollo_create_task = J;
exports.validate_apollo_delete_contact = B;
exports.validate_apollo_enrich_person = x;
exports.validate_apollo_get_contact = C;
exports.validate_apollo_list_contact_stages = M;
exports.validate_apollo_list_email_accounts = K;
exports.validate_apollo_list_labels = H;
exports.validate_apollo_list_sequences = F;
exports.validate_apollo_search_accounts = W;
exports.validate_apollo_search_companies = R;
exports.validate_apollo_search_contacts = V;
exports.validate_apollo_search_people = D;
exports.validate_apollo_update_contact = G;
exports.validate_apollo_update_contact_stage = Y;
