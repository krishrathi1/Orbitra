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
      p = new r.Error().stack;
    p &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[p] = "56bb9a9f-276b-47fe-8085-74ffa98af801"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-56bb9a9f-276b-47fe-8085-74ffa98af801"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ee = h;
function h(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = h.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.name === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "name" ||
          s === "isActive" ||
          s === "address" ||
          s === "currency"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: p + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isActive !== void 0 && typeof r.isActive != "boolean") {
      const s = {
        instancePath: p + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.address !== void 0 && typeof r.address != "string") {
      const s = {
        instancePath: p + "/address",
        schemaPath: "#/properties/address/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.currency !== void 0 && typeof r.currency != "string") {
      const s = {
        instancePath: p + "/currency",
        schemaPath: "#/properties/currency/type",
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
const se = g;
function g(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = g.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.projectId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.expenseCategoryId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "expenseCategoryId" },
        message: "must have required property 'expenseCategoryId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.spentDate === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "spentDate" },
        message: "must have required property 'spentDate'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "projectId" ||
          s === "expenseCategoryId" ||
          s === "spentDate" ||
          s === "totalCost" ||
          s === "units" ||
          s === "notes" ||
          s === "billable" ||
          s === "userId"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.projectId !== void 0 && typeof r.projectId != "number") {
      const s = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.expenseCategoryId !== void 0 &&
      typeof r.expenseCategoryId != "number"
    ) {
      const s = {
        instancePath: p + "/expenseCategoryId",
        schemaPath: "#/properties/expenseCategoryId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.spentDate !== void 0 && typeof r.spentDate != "string") {
      const s = {
        instancePath: p + "/spentDate",
        schemaPath: "#/properties/spentDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.totalCost !== void 0 && typeof r.totalCost != "number") {
      const s = {
        instancePath: p + "/totalCost",
        schemaPath: "#/properties/totalCost/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.units !== void 0 && typeof r.units != "number") {
      const s = {
        instancePath: p + "/units",
        schemaPath: "#/properties/units/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const s = {
        instancePath: p + "/notes",
        schemaPath: "#/properties/notes/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.billable !== void 0 && typeof r.billable != "boolean") {
      const s = {
        instancePath: p + "/billable",
        schemaPath: "#/properties/billable/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.userId !== void 0 && typeof r.userId != "number") {
      const s = {
        instancePath: p + "/userId",
        schemaPath: "#/properties/userId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
const re = b;
function b(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    if (r.clientId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "clientId" },
        message: "must have required property 'clientId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "clientId" ||
          s === "subject" ||
          s === "notes" ||
          s === "currency" ||
          s === "issueDate" ||
          s === "dueDate" ||
          s === "lineItems"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.clientId !== void 0) {
      let s = r.clientId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/clientId",
          schemaPath: "#/properties/clientId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/clientId",
            schemaPath: "#/properties/clientId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/clientId",
            schemaPath: "#/properties/clientId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.subject !== void 0 && typeof r.subject != "string") {
      const s = {
        instancePath: p + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const s = {
        instancePath: p + "/notes",
        schemaPath: "#/properties/notes/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.currency !== void 0 && typeof r.currency != "string") {
      const s = {
        instancePath: p + "/currency",
        schemaPath: "#/properties/currency/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.issueDate !== void 0 && typeof r.issueDate != "string") {
      const s = {
        instancePath: p + "/issueDate",
        schemaPath: "#/properties/issueDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.dueDate !== void 0 && typeof r.dueDate != "string") {
      const s = {
        instancePath: p + "/dueDate",
        schemaPath: "#/properties/dueDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.lineItems !== void 0) {
      let s = r.lineItems;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let y = 0; y < t; y++) {
          let f = s[y];
          if (f && typeof f == "object" && !Array.isArray(f)) {
            if (f.kind === void 0) {
              const a = {
                instancePath: p + "/lineItems/" + y,
                schemaPath: "#/properties/lineItems/items/required",
                keyword: "required",
                params: { missingProperty: "kind" },
                message: "must have required property 'kind'",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (f.kind !== void 0 && typeof f.kind != "string") {
              const a = {
                instancePath: p + "/lineItems/" + y + "/kind",
                schemaPath: "#/properties/lineItems/items/properties/kind/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (f.description !== void 0 && typeof f.description != "string") {
              const a = {
                instancePath: p + "/lineItems/" + y + "/description",
                schemaPath:
                  "#/properties/lineItems/items/properties/description/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (f.quantity !== void 0 && typeof f.quantity != "number") {
              const a = {
                instancePath: p + "/lineItems/" + y + "/quantity",
                schemaPath:
                  "#/properties/lineItems/items/properties/quantity/type",
                keyword: "type",
                params: { type: "number" },
                message: "must be number",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (f.unit_price !== void 0 && typeof f.unit_price != "number") {
              const a = {
                instancePath: p + "/lineItems/" + y + "/unit_price",
                schemaPath:
                  "#/properties/lineItems/items/properties/unit_price/type",
                keyword: "type",
                params: { type: "number" },
                message: "must be number",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (f.project_id !== void 0) {
              let a = f.project_id;
              if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
                const d = {
                  instancePath: p + "/lineItems/" + y + "/project_id",
                  schemaPath:
                    "#/properties/lineItems/items/properties/project_id/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                };
                (e === null ? (e = [d]) : e.push(d), i++);
              }
              if (typeof a == "number") {
                if (a > 9007199254740991 || isNaN(a)) {
                  const d = {
                    instancePath: p + "/lineItems/" + y + "/project_id",
                    schemaPath:
                      "#/properties/lineItems/items/properties/project_id/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 9007199254740991 },
                    message: "must be <= 9007199254740991",
                  };
                  (e === null ? (e = [d]) : e.push(d), i++);
                }
                if (a < -9007199254740991 || isNaN(a)) {
                  const d = {
                    instancePath: p + "/lineItems/" + y + "/project_id",
                    schemaPath:
                      "#/properties/lineItems/items/properties/project_id/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: -9007199254740991 },
                    message: "must be >= -9007199254740991",
                  };
                  (e === null ? (e = [d]) : e.push(d), i++);
                }
              }
            }
          } else {
            const a = {
              instancePath: p + "/lineItems/" + y,
              schemaPath: "#/properties/lineItems/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [a]) : e.push(a), i++);
          }
        }
      } else {
        const t = {
          instancePath: p + "/lineItems",
          schemaPath: "#/properties/lineItems/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
  return ((b.errors = e), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const te = P,
  U = {
    properties: {
      clientId: { type: "number" },
      name: { type: "string" },
      isBillable: { type: "boolean" },
      billBy: { enum: ["Project", "Tasks", "People", "none"], type: "string" },
      budgetBy: {
        enum: [
          "project",
          "project_cost",
          "task",
          "task_fees",
          "person",
          "none",
        ],
        type: "string",
      },
      hourlyRate: { type: "number" },
      budget: { type: "number" },
      code: { type: "string" },
      notes: { type: "string" },
      isActive: { type: "boolean" },
      startsOn: { type: "string" },
      endsOn: { type: "string" },
    },
  },
  c = Object.prototype.hasOwnProperty;
function P(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    if (r.clientId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "clientId" },
        message: "must have required property 'clientId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.name === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isBillable === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "isBillable" },
        message: "must have required property 'isBillable'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.billBy === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "billBy" },
        message: "must have required property 'billBy'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!c.call(U.properties, s)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.clientId !== void 0 && typeof r.clientId != "number") {
      const s = {
        instancePath: p + "/clientId",
        schemaPath: "#/properties/clientId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: p + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isBillable !== void 0 && typeof r.isBillable != "boolean") {
      const s = {
        instancePath: p + "/isBillable",
        schemaPath: "#/properties/isBillable/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.billBy !== void 0) {
      let s = r.billBy;
      if (typeof s != "string") {
        const t = {
          instancePath: p + "/billBy",
          schemaPath: "#/properties/billBy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(s === "Project" || s === "Tasks" || s === "People" || s === "none")
      ) {
        const t = {
          instancePath: p + "/billBy",
          schemaPath: "#/properties/billBy/enum",
          keyword: "enum",
          params: { allowedValues: U.properties.billBy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.budgetBy !== void 0) {
      let s = r.budgetBy;
      if (typeof s != "string") {
        const t = {
          instancePath: p + "/budgetBy",
          schemaPath: "#/properties/budgetBy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "project" ||
          s === "project_cost" ||
          s === "task" ||
          s === "task_fees" ||
          s === "person" ||
          s === "none"
        )
      ) {
        const t = {
          instancePath: p + "/budgetBy",
          schemaPath: "#/properties/budgetBy/enum",
          keyword: "enum",
          params: { allowedValues: U.properties.budgetBy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.hourlyRate !== void 0 && typeof r.hourlyRate != "number") {
      const s = {
        instancePath: p + "/hourlyRate",
        schemaPath: "#/properties/hourlyRate/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.budget !== void 0 && typeof r.budget != "number") {
      const s = {
        instancePath: p + "/budget",
        schemaPath: "#/properties/budget/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.code !== void 0 && typeof r.code != "string") {
      const s = {
        instancePath: p + "/code",
        schemaPath: "#/properties/code/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const s = {
        instancePath: p + "/notes",
        schemaPath: "#/properties/notes/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isActive !== void 0 && typeof r.isActive != "boolean") {
      const s = {
        instancePath: p + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.startsOn !== void 0 && typeof r.startsOn != "string") {
      const s = {
        instancePath: p + "/startsOn",
        schemaPath: "#/properties/startsOn/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.endsOn !== void 0 && typeof r.endsOn != "string") {
      const s = {
        instancePath: p + "/endsOn",
        schemaPath: "#/properties/endsOn/type",
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
const ie = k;
function k(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    if (r.name === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "name" ||
          s === "billableByDefault" ||
          s === "defaultHourlyRate" ||
          s === "isDefault" ||
          s === "isActive"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: p + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.billableByDefault !== void 0 &&
      typeof r.billableByDefault != "boolean"
    ) {
      const s = {
        instancePath: p + "/billableByDefault",
        schemaPath: "#/properties/billableByDefault/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.defaultHourlyRate !== void 0 &&
      typeof r.defaultHourlyRate != "number"
    ) {
      const s = {
        instancePath: p + "/defaultHourlyRate",
        schemaPath: "#/properties/defaultHourlyRate/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isDefault !== void 0 && typeof r.isDefault != "boolean") {
      const s = {
        instancePath: p + "/isDefault",
        schemaPath: "#/properties/isDefault/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isActive !== void 0 && typeof r.isActive != "boolean") {
      const s = {
        instancePath: p + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
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
const pe = v;
function v(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    if (r.projectId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.taskId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.spentDate === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "spentDate" },
        message: "must have required property 'spentDate'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "projectId" ||
          s === "taskId" ||
          s === "spentDate" ||
          s === "hours" ||
          s === "startedTime" ||
          s === "endedTime" ||
          s === "notes" ||
          s === "userId"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.projectId !== void 0 && typeof r.projectId != "number") {
      const s = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.taskId !== void 0 && typeof r.taskId != "number") {
      const s = {
        instancePath: p + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.spentDate !== void 0 && typeof r.spentDate != "string") {
      const s = {
        instancePath: p + "/spentDate",
        schemaPath: "#/properties/spentDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.hours !== void 0 && typeof r.hours != "number") {
      const s = {
        instancePath: p + "/hours",
        schemaPath: "#/properties/hours/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.startedTime !== void 0 && typeof r.startedTime != "string") {
      const s = {
        instancePath: p + "/startedTime",
        schemaPath: "#/properties/startedTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.endedTime !== void 0 && typeof r.endedTime != "string") {
      const s = {
        instancePath: p + "/endedTime",
        schemaPath: "#/properties/endedTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const s = {
        instancePath: p + "/notes",
        schemaPath: "#/properties/notes/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.userId !== void 0 && typeof r.userId != "number") {
      const s = {
        instancePath: p + "/userId",
        schemaPath: "#/properties/userId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
const ne = w;
function w(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    if (r.clientId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "clientId" },
        message: "must have required property 'clientId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "clientId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.clientId !== void 0 && typeof r.clientId != "number") {
      const s = {
        instancePath: p + "/clientId",
        schemaPath: "#/properties/clientId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
const ae = I;
function I(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    if (r.expenseId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "expenseId" },
        message: "must have required property 'expenseId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "expenseId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.expenseId !== void 0 && typeof r.expenseId != "number") {
      const s = {
        instancePath: p + "/expenseId",
        schemaPath: "#/properties/expenseId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const oe = _;
function _(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    if (r.invoiceId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "invoiceId" },
        message: "must have required property 'invoiceId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "invoiceId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.invoiceId !== void 0 && typeof r.invoiceId != "number") {
      const s = {
        instancePath: p + "/invoiceId",
        schemaPath: "#/properties/invoiceId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
const me = N;
function N(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    if (r.projectId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "projectId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.projectId !== void 0 && typeof r.projectId != "number") {
      const s = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
const ue = j;
function j(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    if (r.taskId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "taskId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.taskId !== void 0 && typeof r.taskId != "number") {
      const s = {
        instancePath: p + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
  return ((j.errors = e), i === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const le = A;
function A(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    if (r.timeEntryId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "timeEntryId" },
        message: "must have required property 'timeEntryId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "timeEntryId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.timeEntryId !== void 0 && typeof r.timeEntryId != "number") {
      const s = {
        instancePath: p + "/timeEntryId",
        schemaPath: "#/properties/timeEntryId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
  return ((A.errors = e), i === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ye = D;
function D(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    if (r.invoiceId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "invoiceId" },
        message: "must have required property 'invoiceId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "invoiceId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.invoiceId !== void 0 && typeof r.invoiceId != "number") {
      const s = {
        instancePath: p + "/invoiceId",
        schemaPath: "#/properties/invoiceId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
  return ((D.errors = e), i === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const fe = x;
function x(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = x.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  )
    for (const s in r) {
      const t = {
        instancePath: p,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: s },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  else {
    const s = {
      instancePath: p,
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
const de = q;
function q(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    if (r.projectId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "projectId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.projectId !== void 0 && typeof r.projectId != "number") {
      const s = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
  return ((q.errors = e), i === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ce = T;
function T(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    for (const s in r)
      if (
        !(
          s === "page" ||
          s === "perPage" ||
          s === "pageToken" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.page !== void 0) {
      let s = r.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.perPage !== void 0) {
      let s = r.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 2e3 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 2e3 },
            message: "must be <= 2000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
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
  return ((T.errors = e), i === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const he = E;
function E(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    for (const s in r)
      if (
        !(
          s === "isActive" ||
          s === "page" ||
          s === "perPage" ||
          s === "pageToken" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.isActive !== void 0 && typeof r.isActive != "boolean") {
      const s = {
        instancePath: p + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.page !== void 0) {
      let s = r.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.perPage !== void 0) {
      let s = r.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 2e3 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 2e3 },
            message: "must be <= 2000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
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
  return ((E.errors = e), i === 0);
}
E.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ge = B,
  Ce = {
    properties: {
      from: { type: "string" },
      to: { type: "string" },
      userId: { type: "number" },
      projectId: { type: "number" },
      clientId: { type: "number" },
      isBilled: { type: "boolean" },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 2e3 },
      pageToken: { type: "string" },
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
    },
  };
function B(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = B.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!c.call(Ce.properties, s)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.from !== void 0 && typeof r.from != "string") {
      const s = {
        instancePath: p + "/from",
        schemaPath: "#/properties/from/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.to !== void 0 && typeof r.to != "string") {
      const s = {
        instancePath: p + "/to",
        schemaPath: "#/properties/to/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.userId !== void 0 && typeof r.userId != "number") {
      const s = {
        instancePath: p + "/userId",
        schemaPath: "#/properties/userId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.projectId !== void 0 && typeof r.projectId != "number") {
      const s = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.clientId !== void 0 && typeof r.clientId != "number") {
      const s = {
        instancePath: p + "/clientId",
        schemaPath: "#/properties/clientId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isBilled !== void 0 && typeof r.isBilled != "boolean") {
      const s = {
        instancePath: p + "/isBilled",
        schemaPath: "#/properties/isBilled/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.page !== void 0) {
      let s = r.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.perPage !== void 0) {
      let s = r.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 2e3 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 2e3 },
            message: "must be <= 2000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
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
  return ((B.errors = e), i === 0);
}
B.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const be = O,
  X = {
    properties: {
      clientId: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      projectId: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      state: { enum: ["draft", "open", "paid", "closed"], type: "string" },
      from: { type: "string" },
      to: { type: "string" },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 2e3 },
      pageToken: { type: "string" },
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
    },
  };
function O(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
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
    for (const s in r)
      if (!c.call(X.properties, s)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.clientId !== void 0) {
      let s = r.clientId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/clientId",
          schemaPath: "#/properties/clientId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/clientId",
            schemaPath: "#/properties/clientId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/clientId",
            schemaPath: "#/properties/clientId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.projectId !== void 0) {
      let s = r.projectId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/projectId",
          schemaPath: "#/properties/projectId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/projectId",
            schemaPath: "#/properties/projectId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/projectId",
            schemaPath: "#/properties/projectId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.state !== void 0) {
      let s = r.state;
      if (typeof s != "string") {
        const t = {
          instancePath: p + "/state",
          schemaPath: "#/properties/state/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "draft" || s === "open" || s === "paid" || s === "closed")) {
        const t = {
          instancePath: p + "/state",
          schemaPath: "#/properties/state/enum",
          keyword: "enum",
          params: { allowedValues: X.properties.state.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.from !== void 0 && typeof r.from != "string") {
      const s = {
        instancePath: p + "/from",
        schemaPath: "#/properties/from/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.to !== void 0 && typeof r.to != "string") {
      const s = {
        instancePath: p + "/to",
        schemaPath: "#/properties/to/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.page !== void 0) {
      let s = r.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.perPage !== void 0) {
      let s = r.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 2e3 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 2e3 },
            message: "must be <= 2000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
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
  return ((O.errors = e), i === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Pe = C;
function C(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = C.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.projectId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "projectId" ||
          s === "isActive" ||
          s === "page" ||
          s === "perPage" ||
          s === "pageToken" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.projectId !== void 0 && typeof r.projectId != "number") {
      const s = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isActive !== void 0 && typeof r.isActive != "boolean") {
      const s = {
        instancePath: p + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.page !== void 0) {
      let s = r.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.perPage !== void 0) {
      let s = r.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 2e3 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 2e3 },
            message: "must be <= 2000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
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
  return ((C.errors = e), i === 0);
}
C.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ke = R;
function R(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = R.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "isActive" ||
          s === "page" ||
          s === "perPage" ||
          s === "pageToken" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.isActive !== void 0 && typeof r.isActive != "boolean") {
      const s = {
        instancePath: p + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.page !== void 0) {
      let s = r.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.perPage !== void 0) {
      let s = r.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 2e3 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 2e3 },
            message: "must be <= 2000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
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
  return ((R.errors = e), i === 0);
}
R.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ve = z;
function z(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = z.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "projectId" ||
          s === "page" ||
          s === "perPage" ||
          s === "pageToken" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.projectId !== void 0 && typeof r.projectId != "number") {
      const s = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.page !== void 0) {
      let s = r.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.perPage !== void 0) {
      let s = r.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 2e3 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 2e3 },
            message: "must be <= 2000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
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
  return ((z.errors = e), i === 0);
}
z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const we = Z,
  Re = {
    properties: {
      from: { type: "string" },
      to: { type: "string" },
      userId: { type: "number" },
      projectId: { type: "number" },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 2e3 },
      pageToken: { type: "string" },
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
    },
  };
function Z(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = Z.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!c.call(Re.properties, s)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.from !== void 0 && typeof r.from != "string") {
      const s = {
        instancePath: p + "/from",
        schemaPath: "#/properties/from/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.to !== void 0 && typeof r.to != "string") {
      const s = {
        instancePath: p + "/to",
        schemaPath: "#/properties/to/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.userId !== void 0 && typeof r.userId != "number") {
      const s = {
        instancePath: p + "/userId",
        schemaPath: "#/properties/userId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.projectId !== void 0 && typeof r.projectId != "number") {
      const s = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.page !== void 0) {
      let s = r.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.perPage !== void 0) {
      let s = r.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 2e3 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 2e3 },
            message: "must be <= 2000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
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
  return ((Z.errors = e), i === 0);
}
Z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ie = F;
function F(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = F.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "isActive" ||
          s === "page" ||
          s === "perPage" ||
          s === "pageToken" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.isActive !== void 0 && typeof r.isActive != "boolean") {
      const s = {
        instancePath: p + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.page !== void 0) {
      let s = r.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.perPage !== void 0) {
      let s = r.perPage;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 2e3 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 2e3 },
            message: "must be <= 2000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
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
  return ((F.errors = e), i === 0);
}
F.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _e = H;
function H(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = H.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.invoiceId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "invoiceId" },
        message: "must have required property 'invoiceId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "invoiceId" ||
          s === "amount" ||
          s === "paidDate" ||
          s === "paidAt" ||
          s === "notes"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.invoiceId !== void 0 && typeof r.invoiceId != "number") {
      const s = {
        instancePath: p + "/invoiceId",
        schemaPath: "#/properties/invoiceId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.amount !== void 0 && typeof r.amount != "number") {
      const s = {
        instancePath: p + "/amount",
        schemaPath: "#/properties/amount/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.paidDate !== void 0 && typeof r.paidDate != "string") {
      const s = {
        instancePath: p + "/paidDate",
        schemaPath: "#/properties/paidDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.paidAt !== void 0 && typeof r.paidAt != "string") {
      const s = {
        instancePath: p + "/paidAt",
        schemaPath: "#/properties/paidAt/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const s = {
        instancePath: p + "/notes",
        schemaPath: "#/properties/notes/type",
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
  return ((H.errors = e), i === 0);
}
H.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ne = L;
function L(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = L.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.timeEntryId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "timeEntryId" },
        message: "must have required property 'timeEntryId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "timeEntryId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.timeEntryId !== void 0 && typeof r.timeEntryId != "number") {
      const s = {
        instancePath: p + "/timeEntryId",
        schemaPath: "#/properties/timeEntryId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
  return ((L.errors = e), i === 0);
}
L.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const je = V,
  ze = new RegExp(
    "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
    "u",
  );
function V(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = V.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.invoiceId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "invoiceId" },
        message: "must have required property 'invoiceId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.recipients === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "recipients" },
        message: "must have required property 'recipients'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "invoiceId" ||
          s === "subject" ||
          s === "body" ||
          s === "recipients" ||
          s === "includeLinkToClientInvoice" ||
          s === "attachPdf" ||
          s === "sendMeACopy"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.invoiceId !== void 0 && typeof r.invoiceId != "number") {
      const s = {
        instancePath: p + "/invoiceId",
        schemaPath: "#/properties/invoiceId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.subject !== void 0 && typeof r.subject != "string") {
      const s = {
        instancePath: p + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.body !== void 0 && typeof r.body != "string") {
      const s = {
        instancePath: p + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.recipients !== void 0) {
      let s = r.recipients;
      if (Array.isArray(s)) {
        if (s.length < 1) {
          const y = {
            instancePath: p + "/recipients",
            schemaPath: "#/properties/recipients/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [y]) : e.push(y), i++);
        }
        const t = s.length;
        for (let y = 0; y < t; y++) {
          let f = s[y];
          if (f && typeof f == "object" && !Array.isArray(f)) {
            if (f.email === void 0) {
              const a = {
                instancePath: p + "/recipients/" + y,
                schemaPath: "#/properties/recipients/items/required",
                keyword: "required",
                params: { missingProperty: "email" },
                message: "must have required property 'email'",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (f.name !== void 0 && typeof f.name != "string") {
              const a = {
                instancePath: p + "/recipients/" + y + "/name",
                schemaPath:
                  "#/properties/recipients/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (f.email !== void 0) {
              let a = f.email;
              if (typeof a == "string") {
                if (!ze.test(a)) {
                  const d = {
                    instancePath: p + "/recipients/" + y + "/email",
                    schemaPath:
                      "#/properties/recipients/items/properties/email/pattern",
                    keyword: "pattern",
                    params: {
                      pattern:
                        "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
                    },
                    message: `must match pattern "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$"`,
                  };
                  (e === null ? (e = [d]) : e.push(d), i++);
                }
              } else {
                const d = {
                  instancePath: p + "/recipients/" + y + "/email",
                  schemaPath:
                    "#/properties/recipients/items/properties/email/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [d]) : e.push(d), i++);
              }
            }
          } else {
            const a = {
              instancePath: p + "/recipients/" + y,
              schemaPath: "#/properties/recipients/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [a]) : e.push(a), i++);
          }
        }
      } else {
        const t = {
          instancePath: p + "/recipients",
          schemaPath: "#/properties/recipients/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (
      r.includeLinkToClientInvoice !== void 0 &&
      typeof r.includeLinkToClientInvoice != "boolean"
    ) {
      const s = {
        instancePath: p + "/includeLinkToClientInvoice",
        schemaPath: "#/properties/includeLinkToClientInvoice/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.attachPdf !== void 0 && typeof r.attachPdf != "boolean") {
      const s = {
        instancePath: p + "/attachPdf",
        schemaPath: "#/properties/attachPdf/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.sendMeACopy !== void 0 && typeof r.sendMeACopy != "boolean") {
      const s = {
        instancePath: p + "/sendMeACopy",
        schemaPath: "#/properties/sendMeACopy/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
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
  return ((V.errors = e), i === 0);
}
V.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ae = S;
function S(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = S.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.timeEntryId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "timeEntryId" },
        message: "must have required property 'timeEntryId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "timeEntryId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.timeEntryId !== void 0 && typeof r.timeEntryId != "number") {
      const s = {
        instancePath: p + "/timeEntryId",
        schemaPath: "#/properties/timeEntryId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
const De = M,
  Ze = {
    properties: { groupBy: { enum: ["projects", "clients", "tasks", "team"] } },
  };
function M(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = M.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.groupBy === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "groupBy" },
        message: "must have required property 'groupBy'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.from === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "from" },
        message: "must have required property 'from'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.to === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "to" },
        message: "must have required property 'to'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "groupBy" ||
          s === "from" ||
          s === "to" ||
          s === "includeFixedFee"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.groupBy !== void 0) {
      let s = r.groupBy;
      if (typeof s != "string") {
        const t = {
          instancePath: p + "/groupBy",
          schemaPath: "#/properties/groupBy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(s === "projects" || s === "clients" || s === "tasks" || s === "team")
      ) {
        const t = {
          instancePath: p + "/groupBy",
          schemaPath: "#/properties/groupBy/enum",
          keyword: "enum",
          params: { allowedValues: Ze.properties.groupBy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.from !== void 0 && typeof r.from != "string") {
      const s = {
        instancePath: p + "/from",
        schemaPath: "#/properties/from/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.to !== void 0 && typeof r.to != "string") {
      const s = {
        instancePath: p + "/to",
        schemaPath: "#/properties/to/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.includeFixedFee !== void 0 && typeof r.includeFixedFee != "boolean") {
      const s = {
        instancePath: p + "/includeFixedFee",
        schemaPath: "#/properties/includeFixedFee/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
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
  return ((M.errors = e), i === 0);
}
M.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const xe = $;
function $(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = $.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.clientId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "clientId" },
        message: "must have required property 'clientId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "clientId" ||
          s === "name" ||
          s === "isActive" ||
          s === "address" ||
          s === "currency"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.clientId !== void 0 && typeof r.clientId != "number") {
      const s = {
        instancePath: p + "/clientId",
        schemaPath: "#/properties/clientId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: p + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isActive !== void 0 && typeof r.isActive != "boolean") {
      const s = {
        instancePath: p + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.address !== void 0 && typeof r.address != "string") {
      const s = {
        instancePath: p + "/address",
        schemaPath: "#/properties/address/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.currency !== void 0 && typeof r.currency != "string") {
      const s = {
        instancePath: p + "/currency",
        schemaPath: "#/properties/currency/type",
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
  return (($.errors = e), i === 0);
}
$.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const qe = Y;
function Y(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = Y.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.expenseId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "expenseId" },
        message: "must have required property 'expenseId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "expenseId" ||
          s === "projectId" ||
          s === "expenseCategoryId" ||
          s === "spentDate" ||
          s === "totalCost" ||
          s === "units" ||
          s === "notes" ||
          s === "billable"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.expenseId !== void 0 && typeof r.expenseId != "number") {
      const s = {
        instancePath: p + "/expenseId",
        schemaPath: "#/properties/expenseId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.projectId !== void 0 && typeof r.projectId != "number") {
      const s = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.expenseCategoryId !== void 0 &&
      typeof r.expenseCategoryId != "number"
    ) {
      const s = {
        instancePath: p + "/expenseCategoryId",
        schemaPath: "#/properties/expenseCategoryId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.spentDate !== void 0 && typeof r.spentDate != "string") {
      const s = {
        instancePath: p + "/spentDate",
        schemaPath: "#/properties/spentDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.totalCost !== void 0 && typeof r.totalCost != "number") {
      const s = {
        instancePath: p + "/totalCost",
        schemaPath: "#/properties/totalCost/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.units !== void 0 && typeof r.units != "number") {
      const s = {
        instancePath: p + "/units",
        schemaPath: "#/properties/units/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const s = {
        instancePath: p + "/notes",
        schemaPath: "#/properties/notes/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.billable !== void 0 && typeof r.billable != "boolean") {
      const s = {
        instancePath: p + "/billable",
        schemaPath: "#/properties/billable/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
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
  return ((Y.errors = e), i === 0);
}
Y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Te = G;
function G(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = G.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.invoiceId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "invoiceId" },
        message: "must have required property 'invoiceId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "invoiceId" ||
          s === "subject" ||
          s === "notes" ||
          s === "purchaseOrder" ||
          s === "currency" ||
          s === "issueDate" ||
          s === "dueDate" ||
          s === "paymentTerm"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.invoiceId !== void 0 && typeof r.invoiceId != "number") {
      const s = {
        instancePath: p + "/invoiceId",
        schemaPath: "#/properties/invoiceId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.subject !== void 0 && typeof r.subject != "string") {
      const s = {
        instancePath: p + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const s = {
        instancePath: p + "/notes",
        schemaPath: "#/properties/notes/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.purchaseOrder !== void 0 && typeof r.purchaseOrder != "string") {
      const s = {
        instancePath: p + "/purchaseOrder",
        schemaPath: "#/properties/purchaseOrder/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.currency !== void 0 && typeof r.currency != "string") {
      const s = {
        instancePath: p + "/currency",
        schemaPath: "#/properties/currency/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.issueDate !== void 0 && typeof r.issueDate != "string") {
      const s = {
        instancePath: p + "/issueDate",
        schemaPath: "#/properties/issueDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.dueDate !== void 0 && typeof r.dueDate != "string") {
      const s = {
        instancePath: p + "/dueDate",
        schemaPath: "#/properties/dueDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.paymentTerm !== void 0 && typeof r.paymentTerm != "string") {
      const s = {
        instancePath: p + "/paymentTerm",
        schemaPath: "#/properties/paymentTerm/type",
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
  return ((G.errors = e), i === 0);
}
G.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ee = J,
  W = {
    properties: {
      projectId: { type: "number" },
      name: { type: "string" },
      clientId: { type: "number" },
      isActive: { type: "boolean" },
      isBillable: { type: "boolean" },
      billBy: { enum: ["Project", "Tasks", "People", "none"], type: "string" },
      budgetBy: {
        enum: [
          "project",
          "project_cost",
          "task",
          "task_fees",
          "person",
          "none",
        ],
        type: "string",
      },
      hourlyRate: { type: "number" },
      budget: { type: "number" },
      code: { type: "string" },
      notes: { type: "string" },
      startsOn: { type: "string" },
      endsOn: { type: "string" },
    },
  };
function J(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = J.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.projectId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!c.call(W.properties, s)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.projectId !== void 0 && typeof r.projectId != "number") {
      const s = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: p + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.clientId !== void 0 && typeof r.clientId != "number") {
      const s = {
        instancePath: p + "/clientId",
        schemaPath: "#/properties/clientId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isActive !== void 0 && typeof r.isActive != "boolean") {
      const s = {
        instancePath: p + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isBillable !== void 0 && typeof r.isBillable != "boolean") {
      const s = {
        instancePath: p + "/isBillable",
        schemaPath: "#/properties/isBillable/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.billBy !== void 0) {
      let s = r.billBy;
      if (typeof s != "string") {
        const t = {
          instancePath: p + "/billBy",
          schemaPath: "#/properties/billBy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(s === "Project" || s === "Tasks" || s === "People" || s === "none")
      ) {
        const t = {
          instancePath: p + "/billBy",
          schemaPath: "#/properties/billBy/enum",
          keyword: "enum",
          params: { allowedValues: W.properties.billBy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.budgetBy !== void 0) {
      let s = r.budgetBy;
      if (typeof s != "string") {
        const t = {
          instancePath: p + "/budgetBy",
          schemaPath: "#/properties/budgetBy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "project" ||
          s === "project_cost" ||
          s === "task" ||
          s === "task_fees" ||
          s === "person" ||
          s === "none"
        )
      ) {
        const t = {
          instancePath: p + "/budgetBy",
          schemaPath: "#/properties/budgetBy/enum",
          keyword: "enum",
          params: { allowedValues: W.properties.budgetBy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.hourlyRate !== void 0 && typeof r.hourlyRate != "number") {
      const s = {
        instancePath: p + "/hourlyRate",
        schemaPath: "#/properties/hourlyRate/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.budget !== void 0 && typeof r.budget != "number") {
      const s = {
        instancePath: p + "/budget",
        schemaPath: "#/properties/budget/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.code !== void 0 && typeof r.code != "string") {
      const s = {
        instancePath: p + "/code",
        schemaPath: "#/properties/code/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const s = {
        instancePath: p + "/notes",
        schemaPath: "#/properties/notes/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.startsOn !== void 0 && typeof r.startsOn != "string") {
      const s = {
        instancePath: p + "/startsOn",
        schemaPath: "#/properties/startsOn/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.endsOn !== void 0 && typeof r.endsOn != "string") {
      const s = {
        instancePath: p + "/endsOn",
        schemaPath: "#/properties/endsOn/type",
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
  return ((J.errors = e), i === 0);
}
J.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Be = K;
function K(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = K.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.taskId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "taskId" ||
          s === "name" ||
          s === "billableByDefault" ||
          s === "defaultHourlyRate" ||
          s === "isDefault" ||
          s === "isActive"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.taskId !== void 0 && typeof r.taskId != "number") {
      const s = {
        instancePath: p + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: p + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.billableByDefault !== void 0 &&
      typeof r.billableByDefault != "boolean"
    ) {
      const s = {
        instancePath: p + "/billableByDefault",
        schemaPath: "#/properties/billableByDefault/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.defaultHourlyRate !== void 0 &&
      typeof r.defaultHourlyRate != "number"
    ) {
      const s = {
        instancePath: p + "/defaultHourlyRate",
        schemaPath: "#/properties/defaultHourlyRate/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isDefault !== void 0 && typeof r.isDefault != "boolean") {
      const s = {
        instancePath: p + "/isDefault",
        schemaPath: "#/properties/isDefault/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isActive !== void 0 && typeof r.isActive != "boolean") {
      const s = {
        instancePath: p + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
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
  return ((K.errors = e), i === 0);
}
K.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Oe = Q;
function Q(
  r,
  {
    instancePath: p = "",
    parentData: o,
    parentDataProperty: m,
    rootData: u = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = Q.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.timeEntryId === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "timeEntryId" },
        message: "must have required property 'timeEntryId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "timeEntryId" ||
          s === "projectId" ||
          s === "taskId" ||
          s === "spentDate" ||
          s === "hours" ||
          s === "notes"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.timeEntryId !== void 0 && typeof r.timeEntryId != "number") {
      const s = {
        instancePath: p + "/timeEntryId",
        schemaPath: "#/properties/timeEntryId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.projectId !== void 0 && typeof r.projectId != "number") {
      const s = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.taskId !== void 0 && typeof r.taskId != "number") {
      const s = {
        instancePath: p + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.spentDate !== void 0 && typeof r.spentDate != "string") {
      const s = {
        instancePath: p + "/spentDate",
        schemaPath: "#/properties/spentDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.hours !== void 0 && typeof r.hours != "number") {
      const s = {
        instancePath: p + "/hours",
        schemaPath: "#/properties/hours/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const s = {
        instancePath: p + "/notes",
        schemaPath: "#/properties/notes/type",
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
  return ((Q.errors = e), i === 0);
}
Q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Fe = {
  harvest_create_client: ee,
  harvest_create_expense: se,
  harvest_create_invoice: re,
  harvest_create_project: te,
  harvest_create_task: ie,
  harvest_create_time_entry: pe,
  harvest_delete_client: ne,
  harvest_delete_expense: ae,
  harvest_delete_invoice: oe,
  harvest_delete_project: me,
  harvest_delete_task: ue,
  harvest_delete_time_entry: le,
  harvest_get_invoice: ye,
  harvest_get_me: fe,
  harvest_get_project: de,
  harvest_list_clients: ce,
  harvest_list_expense_categories: he,
  harvest_list_expenses: ge,
  harvest_list_invoices: be,
  harvest_list_project_task_assignments: Pe,
  harvest_list_projects: ke,
  harvest_list_tasks: ve,
  harvest_list_time_entries: we,
  harvest_list_users: Ie,
  harvest_mark_invoice_paid: _e,
  harvest_restart_time_entry: Ne,
  harvest_send_invoice: je,
  harvest_stop_time_entry: Ae,
  harvest_time_report: De,
  harvest_update_client: xe,
  harvest_update_expense: qe,
  harvest_update_invoice: Te,
  harvest_update_project: Ee,
  harvest_update_task: Be,
  harvest_update_time_entry: Oe,
};
exports.NATIVE_TOOL_VALIDATORS = Fe;
exports.validate_harvest_create_client = ee;
exports.validate_harvest_create_expense = se;
exports.validate_harvest_create_invoice = re;
exports.validate_harvest_create_project = te;
exports.validate_harvest_create_task = ie;
exports.validate_harvest_create_time_entry = pe;
exports.validate_harvest_delete_client = ne;
exports.validate_harvest_delete_expense = ae;
exports.validate_harvest_delete_invoice = oe;
exports.validate_harvest_delete_project = me;
exports.validate_harvest_delete_task = ue;
exports.validate_harvest_delete_time_entry = le;
exports.validate_harvest_get_invoice = ye;
exports.validate_harvest_get_me = fe;
exports.validate_harvest_get_project = de;
exports.validate_harvest_list_clients = ce;
exports.validate_harvest_list_expense_categories = he;
exports.validate_harvest_list_expenses = ge;
exports.validate_harvest_list_invoices = be;
exports.validate_harvest_list_project_task_assignments = Pe;
exports.validate_harvest_list_projects = ke;
exports.validate_harvest_list_tasks = ve;
exports.validate_harvest_list_time_entries = we;
exports.validate_harvest_list_users = Ie;
exports.validate_harvest_mark_invoice_paid = _e;
exports.validate_harvest_restart_time_entry = Ne;
exports.validate_harvest_send_invoice = je;
exports.validate_harvest_stop_time_entry = Ae;
exports.validate_harvest_time_report = De;
exports.validate_harvest_update_client = xe;
exports.validate_harvest_update_expense = qe;
exports.validate_harvest_update_invoice = Te;
exports.validate_harvest_update_project = Ee;
exports.validate_harvest_update_task = Be;
exports.validate_harvest_update_time_entry = Oe;
