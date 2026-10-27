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
      i = new t.Error().stack;
    i &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[i] = "1ef7bef5-519c-43ba-8503-0386f4ef8a2d"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-1ef7bef5-519c-43ba-8503-0386f4ef8a2d"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const De = f;
function f(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = f.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.campaignId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.contactId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "contactId" },
        message: "must have required property 'contactId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "campaignId" || s === "contactId" || s === "status")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.campaignId !== void 0 && typeof t.campaignId != "string") {
      const s = {
        instancePath: i + "/campaignId",
        schemaPath: "#/properties/campaignId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.contactId !== void 0 && typeof t.contactId != "string") {
      const s = {
        instancePath: i + "/contactId",
        schemaPath: "#/properties/contactId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.status !== void 0 && typeof t.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((f.errors = e), r === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ne = c;
function c(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = c.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.campaignId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.leadId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "leadId" },
        message: "must have required property 'leadId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "campaignId" || s === "leadId" || s === "status")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.campaignId !== void 0 && typeof t.campaignId != "string") {
      const s = {
        instancePath: i + "/campaignId",
        schemaPath: "#/properties/campaignId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.leadId !== void 0 && typeof t.leadId != "string") {
      const s = {
        instancePath: i + "/leadId",
        schemaPath: "#/properties/leadId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.status !== void 0 && typeof t.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((c.errors = e), r === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ae = g;
function g(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = g.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.opportunityId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "opportunityId" },
        message: "must have required property 'opportunityId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.pricebookEntryId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pricebookEntryId" },
        message: "must have required property 'pricebookEntryId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.quantity === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "quantity" },
        message: "must have required property 'quantity'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (
        !(
          s === "description" ||
          s === "discount" ||
          s === "opportunityId" ||
          s === "pricebookEntryId" ||
          s === "quantity" ||
          s === "serviceDate" ||
          s === "totalPrice" ||
          s === "unitPrice"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.discount !== void 0 && typeof t.discount != "number") {
      const s = {
        instancePath: i + "/discount",
        schemaPath: "#/properties/discount/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.opportunityId !== void 0 && typeof t.opportunityId != "string") {
      const s = {
        instancePath: i + "/opportunityId",
        schemaPath: "#/properties/opportunityId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.pricebookEntryId !== void 0 &&
      typeof t.pricebookEntryId != "string"
    ) {
      const s = {
        instancePath: i + "/pricebookEntryId",
        schemaPath: "#/properties/pricebookEntryId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.quantity !== void 0 && typeof t.quantity != "number") {
      const s = {
        instancePath: i + "/quantity",
        schemaPath: "#/properties/quantity/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.serviceDate !== void 0 && typeof t.serviceDate != "string") {
      const s = {
        instancePath: i + "/serviceDate",
        schemaPath: "#/properties/serviceDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.totalPrice !== void 0 && typeof t.totalPrice != "number") {
      const s = {
        instancePath: i + "/totalPrice",
        schemaPath: "#/properties/totalPrice/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.unitPrice !== void 0 && typeof t.unitPrice != "number") {
      const s = {
        instancePath: i + "/unitPrice",
        schemaPath: "#/properties/unitPrice/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((g.errors = e), r === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const je = h;
function h(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = h.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.leadId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "leadId" },
        message: "must have required property 'leadId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "leadId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.leadId !== void 0 && typeof t.leadId != "string") {
      const s = {
        instancePath: i + "/leadId",
        schemaPath: "#/properties/leadId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((h.errors = e), r === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const qe = b;
function b(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = b.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.account_id === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "account_id" },
        message: "must have required property 'account_id'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.contactId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "contactId" },
        message: "must have required property 'contactId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "account_id" || s === "contactId")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.account_id !== void 0 && typeof t.account_id != "string") {
      const s = {
        instancePath: i + "/account_id",
        schemaPath: "#/properties/account_id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.contactId !== void 0 && typeof t.contactId != "string") {
      const s = {
        instancePath: i + "/contactId",
        schemaPath: "#/properties/contactId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((b.errors = e), r === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Te = P;
function P(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = P.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.opportunityId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "opportunityId" },
        message: "must have required property 'opportunityId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (
        !(
          s === "cloneProducts" ||
          s === "closeDate" ||
          s === "newName" ||
          s === "opportunityId" ||
          s === "stageName"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.cloneProducts !== void 0 && typeof t.cloneProducts != "boolean") {
      const s = {
        instancePath: i + "/cloneProducts",
        schemaPath: "#/properties/cloneProducts/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.closeDate !== void 0 && typeof t.closeDate != "string") {
      const s = {
        instancePath: i + "/closeDate",
        schemaPath: "#/properties/closeDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.newName !== void 0 && typeof t.newName != "string") {
      const s = {
        instancePath: i + "/newName",
        schemaPath: "#/properties/newName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.opportunityId !== void 0 && typeof t.opportunityId != "string") {
      const s = {
        instancePath: i + "/opportunityId",
        schemaPath: "#/properties/opportunityId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.stageName !== void 0 && typeof t.stageName != "string") {
      const s = {
        instancePath: i + "/stageName",
        schemaPath: "#/properties/stageName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((P.errors = e), r === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Se = w;
function w(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = w.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.objectType === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "objectType" },
        message: "must have required property 'objectType'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.recordId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "recordId" },
        message: "must have required property 'recordId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "fieldUpdates" || s === "objectType" || s === "recordId")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.fieldUpdates !== void 0 && typeof t.fieldUpdates != "string") {
      const s = {
        instancePath: i + "/fieldUpdates",
        schemaPath: "#/properties/fieldUpdates/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.objectType !== void 0 && typeof t.objectType != "string") {
      const s = {
        instancePath: i + "/objectType",
        schemaPath: "#/properties/objectType/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.recordId !== void 0 && typeof t.recordId != "string") {
      const s = {
        instancePath: i + "/recordId",
        schemaPath: "#/properties/recordId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((w.errors = e), r === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const xe = k;
function k(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = k.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.taskId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "completionNotes" || s === "taskId")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.completionNotes !== void 0 && typeof t.completionNotes != "string") {
      const s = {
        instancePath: i + "/completionNotes",
        schemaPath: "#/properties/completionNotes/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.taskId !== void 0 && typeof t.taskId != "string") {
      const s = {
        instancePath: i + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((k.errors = e), r === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ce = v,
  Cs = {
    properties: {
      accountSource: { type: "string" },
      annualRevenue: { type: "number" },
      billingCity: { type: "string" },
      billingCountry: { type: "string" },
      billingPostalCode: { type: "string" },
      billingState: { type: "string" },
      billingStreet: { type: "string" },
      description: { type: "string" },
      fax: { type: "string" },
      industry: { type: "string" },
      name: { type: "string" },
      numberOfEmployees: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      parentId: { type: "string" },
      phone: { type: "string" },
      shippingCity: { type: "string" },
      shippingCountry: { type: "string" },
      shippingPostalCode: { type: "string" },
      shippingState: { type: "string" },
      shippingStreet: { type: "string" },
      sicDesc: { type: "string" },
      type: { type: "string" },
      website: { type: "string" },
    },
  },
  u = Object.prototype.hasOwnProperty;
function v(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = v.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.name === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Cs.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.accountSource !== void 0 && typeof t.accountSource != "string") {
      const s = {
        instancePath: i + "/accountSource",
        schemaPath: "#/properties/accountSource/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.annualRevenue !== void 0 && typeof t.annualRevenue != "number") {
      const s = {
        instancePath: i + "/annualRevenue",
        schemaPath: "#/properties/annualRevenue/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.billingCity !== void 0 && typeof t.billingCity != "string") {
      const s = {
        instancePath: i + "/billingCity",
        schemaPath: "#/properties/billingCity/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.billingCountry !== void 0 && typeof t.billingCountry != "string") {
      const s = {
        instancePath: i + "/billingCountry",
        schemaPath: "#/properties/billingCountry/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.billingPostalCode !== void 0 &&
      typeof t.billingPostalCode != "string"
    ) {
      const s = {
        instancePath: i + "/billingPostalCode",
        schemaPath: "#/properties/billingPostalCode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.billingState !== void 0 && typeof t.billingState != "string") {
      const s = {
        instancePath: i + "/billingState",
        schemaPath: "#/properties/billingState/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.billingStreet !== void 0 && typeof t.billingStreet != "string") {
      const s = {
        instancePath: i + "/billingStreet",
        schemaPath: "#/properties/billingStreet/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.fax !== void 0 && typeof t.fax != "string") {
      const s = {
        instancePath: i + "/fax",
        schemaPath: "#/properties/fax/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.industry !== void 0 && typeof t.industry != "string") {
      const s = {
        instancePath: i + "/industry",
        schemaPath: "#/properties/industry/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.numberOfEmployees !== void 0) {
      let s = t.numberOfEmployees;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/numberOfEmployees",
          schemaPath: "#/properties/numberOfEmployees/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/numberOfEmployees",
            schemaPath: "#/properties/numberOfEmployees/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/numberOfEmployees",
            schemaPath: "#/properties/numberOfEmployees/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.parentId !== void 0 && typeof t.parentId != "string") {
      const s = {
        instancePath: i + "/parentId",
        schemaPath: "#/properties/parentId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.phone !== void 0 && typeof t.phone != "string") {
      const s = {
        instancePath: i + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.shippingCity !== void 0 && typeof t.shippingCity != "string") {
      const s = {
        instancePath: i + "/shippingCity",
        schemaPath: "#/properties/shippingCity/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.shippingCountry !== void 0 && typeof t.shippingCountry != "string") {
      const s = {
        instancePath: i + "/shippingCountry",
        schemaPath: "#/properties/shippingCountry/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.shippingPostalCode !== void 0 &&
      typeof t.shippingPostalCode != "string"
    ) {
      const s = {
        instancePath: i + "/shippingPostalCode",
        schemaPath: "#/properties/shippingPostalCode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.shippingState !== void 0 && typeof t.shippingState != "string") {
      const s = {
        instancePath: i + "/shippingState",
        schemaPath: "#/properties/shippingState/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.shippingStreet !== void 0 && typeof t.shippingStreet != "string") {
      const s = {
        instancePath: i + "/shippingStreet",
        schemaPath: "#/properties/shippingStreet/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.sicDesc !== void 0 && typeof t.sicDesc != "string") {
      const s = {
        instancePath: i + "/sicDesc",
        schemaPath: "#/properties/sicDesc/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.type !== void 0 && typeof t.type != "string") {
      const s = {
        instancePath: i + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.website !== void 0 && typeof t.website != "string") {
      const s = {
        instancePath: i + "/website",
        schemaPath: "#/properties/website/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((v.errors = e), r === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ee = _,
  Es = {
    properties: {
      actualCost: { type: "number" },
      budgetedCost: { type: "number" },
      description: { type: "string" },
      endDate: { type: "string" },
      expectedResponse: { type: "number" },
      expectedRevenue: { type: "number" },
      isActive: { type: "boolean" },
      name: { type: "string" },
      numberSent: { type: "number" },
      parentId: { type: "string" },
      startDate: { type: "string" },
      status: { type: "string" },
      type: { type: "string" },
    },
  };
function _(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = _.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.name === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Es.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.actualCost !== void 0 && typeof t.actualCost != "number") {
      const s = {
        instancePath: i + "/actualCost",
        schemaPath: "#/properties/actualCost/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.budgetedCost !== void 0 && typeof t.budgetedCost != "number") {
      const s = {
        instancePath: i + "/budgetedCost",
        schemaPath: "#/properties/budgetedCost/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.endDate !== void 0 && typeof t.endDate != "string") {
      const s = {
        instancePath: i + "/endDate",
        schemaPath: "#/properties/endDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.expectedResponse !== void 0 &&
      typeof t.expectedResponse != "number"
    ) {
      const s = {
        instancePath: i + "/expectedResponse",
        schemaPath: "#/properties/expectedResponse/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.expectedRevenue !== void 0 && typeof t.expectedRevenue != "number") {
      const s = {
        instancePath: i + "/expectedRevenue",
        schemaPath: "#/properties/expectedRevenue/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isActive !== void 0 && typeof t.isActive != "boolean") {
      const s = {
        instancePath: i + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.numberSent !== void 0 && typeof t.numberSent != "number") {
      const s = {
        instancePath: i + "/numberSent",
        schemaPath: "#/properties/numberSent/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.parentId !== void 0 && typeof t.parentId != "string") {
      const s = {
        instancePath: i + "/parentId",
        schemaPath: "#/properties/parentId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.startDate !== void 0 && typeof t.startDate != "string") {
      const s = {
        instancePath: i + "/startDate",
        schemaPath: "#/properties/startDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.status !== void 0 && typeof t.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.type !== void 0 && typeof t.type != "string") {
      const s = {
        instancePath: i + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((_.errors = e), r === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Oe = I,
  Os = {
    properties: {
      account_id: { type: "string" },
      birthdate: { type: "string" },
      department: { type: "string" },
      description: { type: "string" },
      email: { type: "string" },
      firstName: { type: "string" },
      lastName: { type: "string" },
      leadSource: { type: "string" },
      mailingCity: { type: "string" },
      mailingCountry: { type: "string" },
      mailingPostalCode: { type: "string" },
      mailingState: { type: "string" },
      mailingStreet: { type: "string" },
      mobilePhone: { type: "string" },
      phone: { type: "string" },
      title: { type: "string" },
    },
  };
function I(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = I.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.lastName === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "lastName" },
        message: "must have required property 'lastName'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Os.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.account_id !== void 0 && typeof t.account_id != "string") {
      const s = {
        instancePath: i + "/account_id",
        schemaPath: "#/properties/account_id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.birthdate !== void 0 && typeof t.birthdate != "string") {
      const s = {
        instancePath: i + "/birthdate",
        schemaPath: "#/properties/birthdate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.department !== void 0 && typeof t.department != "string") {
      const s = {
        instancePath: i + "/department",
        schemaPath: "#/properties/department/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.email !== void 0 && typeof t.email != "string") {
      const s = {
        instancePath: i + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.firstName !== void 0 && typeof t.firstName != "string") {
      const s = {
        instancePath: i + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.lastName !== void 0 && typeof t.lastName != "string") {
      const s = {
        instancePath: i + "/lastName",
        schemaPath: "#/properties/lastName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.leadSource !== void 0 && typeof t.leadSource != "string") {
      const s = {
        instancePath: i + "/leadSource",
        schemaPath: "#/properties/leadSource/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.mailingCity !== void 0 && typeof t.mailingCity != "string") {
      const s = {
        instancePath: i + "/mailingCity",
        schemaPath: "#/properties/mailingCity/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.mailingCountry !== void 0 && typeof t.mailingCountry != "string") {
      const s = {
        instancePath: i + "/mailingCountry",
        schemaPath: "#/properties/mailingCountry/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.mailingPostalCode !== void 0 &&
      typeof t.mailingPostalCode != "string"
    ) {
      const s = {
        instancePath: i + "/mailingPostalCode",
        schemaPath: "#/properties/mailingPostalCode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.mailingState !== void 0 && typeof t.mailingState != "string") {
      const s = {
        instancePath: i + "/mailingState",
        schemaPath: "#/properties/mailingState/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.mailingStreet !== void 0 && typeof t.mailingStreet != "string") {
      const s = {
        instancePath: i + "/mailingStreet",
        schemaPath: "#/properties/mailingStreet/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.mobilePhone !== void 0 && typeof t.mobilePhone != "string") {
      const s = {
        instancePath: i + "/mobilePhone",
        schemaPath: "#/properties/mobilePhone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.phone !== void 0 && typeof t.phone != "string") {
      const s = {
        instancePath: i + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: i + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((I.errors = e), r === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Re = D,
  Rs = {
    properties: {
      subject: { type: "string" },
      startDateTime: { type: "string" },
      endDateTime: { type: "string" },
      durationInMinutes: {
        type: "integer",
        maximum: 9007199254740991,
        exclusiveMinimum: 0,
      },
      isAllDayEvent: { type: "boolean" },
      whoId: { type: "string" },
      whatId: { type: "string" },
      description: { type: "string" },
      location: { type: "string" },
      ownerId: { type: "string" },
      eventSubtype: { type: "string" },
    },
  };
function D(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = D.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.subject === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "subject" },
        message: "must have required property 'subject'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.startDateTime === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "startDateTime" },
        message: "must have required property 'startDateTime'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Rs.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.subject !== void 0 && typeof t.subject != "string") {
      const s = {
        instancePath: i + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.startDateTime !== void 0 && typeof t.startDateTime != "string") {
      const s = {
        instancePath: i + "/startDateTime",
        schemaPath: "#/properties/startDateTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.endDateTime !== void 0 && typeof t.endDateTime != "string") {
      const s = {
        instancePath: i + "/endDateTime",
        schemaPath: "#/properties/endDateTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.durationInMinutes !== void 0) {
      let s = t.durationInMinutes;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/durationInMinutes",
          schemaPath: "#/properties/durationInMinutes/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/durationInMinutes",
            schemaPath: "#/properties/durationInMinutes/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s <= 0 || isNaN(s)) {
          const n = {
            instancePath: i + "/durationInMinutes",
            schemaPath: "#/properties/durationInMinutes/exclusiveMinimum",
            keyword: "exclusiveMinimum",
            params: { comparison: ">", limit: 0 },
            message: "must be > 0",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.isAllDayEvent !== void 0 && typeof t.isAllDayEvent != "boolean") {
      const s = {
        instancePath: i + "/isAllDayEvent",
        schemaPath: "#/properties/isAllDayEvent/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.whoId !== void 0 && typeof t.whoId != "string") {
      const s = {
        instancePath: i + "/whoId",
        schemaPath: "#/properties/whoId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.whatId !== void 0 && typeof t.whatId != "string") {
      const s = {
        instancePath: i + "/whatId",
        schemaPath: "#/properties/whatId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.location !== void 0 && typeof t.location != "string") {
      const s = {
        instancePath: i + "/location",
        schemaPath: "#/properties/location/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.ownerId !== void 0 && typeof t.ownerId != "string") {
      const s = {
        instancePath: i + "/ownerId",
        schemaPath: "#/properties/ownerId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.eventSubtype !== void 0 && typeof t.eventSubtype != "string") {
      const s = {
        instancePath: i + "/eventSubtype",
        schemaPath: "#/properties/eventSubtype/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((D.errors = e), r === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ue = N,
  Us = {
    properties: {
      annualRevenue: { type: "number" },
      city: { type: "string" },
      company: { type: "string" },
      country: { type: "string" },
      description: { type: "string" },
      email: { type: "string" },
      firstName: { type: "string" },
      industry: { type: "string" },
      lastName: { type: "string" },
      leadSource: { type: "string" },
      numberOfEmployees: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      phone: { type: "string" },
      postalCode: { type: "string" },
      rating: { type: "string" },
      state: { type: "string" },
      status: { type: "string" },
      street: { type: "string" },
      title: { type: "string" },
      website: { type: "string" },
    },
  };
function N(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = N.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.company === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "company" },
        message: "must have required property 'company'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.lastName === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "lastName" },
        message: "must have required property 'lastName'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Us.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.annualRevenue !== void 0 && typeof t.annualRevenue != "number") {
      const s = {
        instancePath: i + "/annualRevenue",
        schemaPath: "#/properties/annualRevenue/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.city !== void 0 && typeof t.city != "string") {
      const s = {
        instancePath: i + "/city",
        schemaPath: "#/properties/city/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.company !== void 0 && typeof t.company != "string") {
      const s = {
        instancePath: i + "/company",
        schemaPath: "#/properties/company/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.country !== void 0 && typeof t.country != "string") {
      const s = {
        instancePath: i + "/country",
        schemaPath: "#/properties/country/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.email !== void 0 && typeof t.email != "string") {
      const s = {
        instancePath: i + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.firstName !== void 0 && typeof t.firstName != "string") {
      const s = {
        instancePath: i + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.industry !== void 0 && typeof t.industry != "string") {
      const s = {
        instancePath: i + "/industry",
        schemaPath: "#/properties/industry/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.lastName !== void 0 && typeof t.lastName != "string") {
      const s = {
        instancePath: i + "/lastName",
        schemaPath: "#/properties/lastName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.leadSource !== void 0 && typeof t.leadSource != "string") {
      const s = {
        instancePath: i + "/leadSource",
        schemaPath: "#/properties/leadSource/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.numberOfEmployees !== void 0) {
      let s = t.numberOfEmployees;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/numberOfEmployees",
          schemaPath: "#/properties/numberOfEmployees/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/numberOfEmployees",
            schemaPath: "#/properties/numberOfEmployees/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/numberOfEmployees",
            schemaPath: "#/properties/numberOfEmployees/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.phone !== void 0 && typeof t.phone != "string") {
      const s = {
        instancePath: i + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.postalCode !== void 0 && typeof t.postalCode != "string") {
      const s = {
        instancePath: i + "/postalCode",
        schemaPath: "#/properties/postalCode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.rating !== void 0 && typeof t.rating != "string") {
      const s = {
        instancePath: i + "/rating",
        schemaPath: "#/properties/rating/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.state !== void 0 && typeof t.state != "string") {
      const s = {
        instancePath: i + "/state",
        schemaPath: "#/properties/state/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.status !== void 0 && typeof t.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.street !== void 0 && typeof t.street != "string") {
      const s = {
        instancePath: i + "/street",
        schemaPath: "#/properties/street/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: i + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.website !== void 0 && typeof t.website != "string") {
      const s = {
        instancePath: i + "/website",
        schemaPath: "#/properties/website/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((N.errors = e), r === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Me = A;
function A(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = A.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.parentId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "parentId" },
        message: "must have required property 'parentId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.title === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (
        !(
          s === "body" ||
          s === "isPrivate" ||
          s === "ownerId" ||
          s === "parentId" ||
          s === "title"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.body !== void 0 && typeof t.body != "string") {
      const s = {
        instancePath: i + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isPrivate !== void 0 && typeof t.isPrivate != "boolean") {
      const s = {
        instancePath: i + "/isPrivate",
        schemaPath: "#/properties/isPrivate/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.ownerId !== void 0 && typeof t.ownerId != "string") {
      const s = {
        instancePath: i + "/ownerId",
        schemaPath: "#/properties/ownerId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.parentId !== void 0 && typeof t.parentId != "string") {
      const s = {
        instancePath: i + "/parentId",
        schemaPath: "#/properties/parentId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: i + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((A.errors = e), r === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const We = j,
  Ms = {
    properties: {
      account_id: { type: "string" },
      amount: { type: "number" },
      closeDate: { type: "string" },
      contactId: { type: "string" },
      description: { type: "string" },
      leadSource: { type: "string" },
      name: { type: "string" },
      nextStep: { type: "string" },
      pricebook2Id: { type: "string" },
      probability: { type: "number" },
      stageName: { type: "string" },
      type: { type: "string" },
    },
  };
function j(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = j.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.closeDate === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "closeDate" },
        message: "must have required property 'closeDate'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.name === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.stageName === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "stageName" },
        message: "must have required property 'stageName'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Ms.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.account_id !== void 0 && typeof t.account_id != "string") {
      const s = {
        instancePath: i + "/account_id",
        schemaPath: "#/properties/account_id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.amount !== void 0 && typeof t.amount != "number") {
      const s = {
        instancePath: i + "/amount",
        schemaPath: "#/properties/amount/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.closeDate !== void 0 && typeof t.closeDate != "string") {
      const s = {
        instancePath: i + "/closeDate",
        schemaPath: "#/properties/closeDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.contactId !== void 0 && typeof t.contactId != "string") {
      const s = {
        instancePath: i + "/contactId",
        schemaPath: "#/properties/contactId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.leadSource !== void 0 && typeof t.leadSource != "string") {
      const s = {
        instancePath: i + "/leadSource",
        schemaPath: "#/properties/leadSource/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.nextStep !== void 0 && typeof t.nextStep != "string") {
      const s = {
        instancePath: i + "/nextStep",
        schemaPath: "#/properties/nextStep/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.pricebook2Id !== void 0 && typeof t.pricebook2Id != "string") {
      const s = {
        instancePath: i + "/pricebook2Id",
        schemaPath: "#/properties/pricebook2Id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.probability !== void 0 && typeof t.probability != "number") {
      const s = {
        instancePath: i + "/probability",
        schemaPath: "#/properties/probability/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.stageName !== void 0 && typeof t.stageName != "string") {
      const s = {
        instancePath: i + "/stageName",
        schemaPath: "#/properties/stageName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.type !== void 0 && typeof t.type != "string") {
      const s = {
        instancePath: i + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((j.errors = e), r === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Be = q,
  Ws = {
    properties: {
      activityDate: { type: "string" },
      description: { type: "string" },
      isReminderSet: { type: "boolean" },
      ownerId: { type: "string" },
      priority: { type: "string" },
      reminderDateTime: { type: "string" },
      status: { type: "string" },
      subject: { type: "string" },
      whatId: { type: "string" },
      whoId: { type: "string" },
    },
  };
function q(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = q.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.subject === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "subject" },
        message: "must have required property 'subject'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Ws.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.activityDate !== void 0 && typeof t.activityDate != "string") {
      const s = {
        instancePath: i + "/activityDate",
        schemaPath: "#/properties/activityDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isReminderSet !== void 0 && typeof t.isReminderSet != "boolean") {
      const s = {
        instancePath: i + "/isReminderSet",
        schemaPath: "#/properties/isReminderSet/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.ownerId !== void 0 && typeof t.ownerId != "string") {
      const s = {
        instancePath: i + "/ownerId",
        schemaPath: "#/properties/ownerId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.priority !== void 0 && typeof t.priority != "string") {
      const s = {
        instancePath: i + "/priority",
        schemaPath: "#/properties/priority/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.reminderDateTime !== void 0 &&
      typeof t.reminderDateTime != "string"
    ) {
      const s = {
        instancePath: i + "/reminderDateTime",
        schemaPath: "#/properties/reminderDateTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.status !== void 0 && typeof t.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.subject !== void 0 && typeof t.subject != "string") {
      const s = {
        instancePath: i + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.whatId !== void 0 && typeof t.whatId != "string") {
      const s = {
        instancePath: i + "/whatId",
        schemaPath: "#/properties/whatId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.whoId !== void 0 && typeof t.whoId != "string") {
      const s = {
        instancePath: i + "/whoId",
        schemaPath: "#/properties/whoId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((q.errors = e), r === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Fe = T;
function T(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = T.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.account_id === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "account_id" },
        message: "must have required property 'account_id'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "account_id") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.account_id !== void 0 && typeof t.account_id != "string") {
      const s = {
        instancePath: i + "/account_id",
        schemaPath: "#/properties/account_id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((T.errors = e), r === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Le = S;
function S(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = S.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.campaignId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "campaignId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.campaignId !== void 0 && typeof t.campaignId != "string") {
      const s = {
        instancePath: i + "/campaignId",
        schemaPath: "#/properties/campaignId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((S.errors = e), r === 0);
}
S.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ve = x;
function x(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = x.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.contactId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "contactId" },
        message: "must have required property 'contactId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "contactId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.contactId !== void 0 && typeof t.contactId != "string") {
      const s = {
        instancePath: i + "/contactId",
        schemaPath: "#/properties/contactId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((x.errors = e), r === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const He = C;
function C(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = C.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.leadId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "leadId" },
        message: "must have required property 'leadId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "leadId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.leadId !== void 0 && typeof t.leadId != "string") {
      const s = {
        instancePath: i + "/leadId",
        schemaPath: "#/properties/leadId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((C.errors = e), r === 0);
}
C.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ze = E;
function E(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = E.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.noteId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "noteId" },
        message: "must have required property 'noteId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "noteId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.noteId !== void 0 && typeof t.noteId != "string") {
      const s = {
        instancePath: i + "/noteId",
        schemaPath: "#/properties/noteId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((E.errors = e), r === 0);
}
E.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ye = O;
function O(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = O.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.opportunityId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "opportunityId" },
        message: "must have required property 'opportunityId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "opportunityId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.opportunityId !== void 0 && typeof t.opportunityId != "string") {
      const s = {
        instancePath: i + "/opportunityId",
        schemaPath: "#/properties/opportunityId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((O.errors = e), r === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ge = R;
function R(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = R.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.account_id === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "account_id" },
        message: "must have required property 'account_id'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "account_id") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.account_id !== void 0 && typeof t.account_id != "string") {
      const s = {
        instancePath: i + "/account_id",
        schemaPath: "#/properties/account_id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((R.errors = e), r === 0);
}
R.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Je = U;
function U(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = U.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.campaignId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "campaignId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.campaignId !== void 0 && typeof t.campaignId != "string") {
      const s = {
        instancePath: i + "/campaignId",
        schemaPath: "#/properties/campaignId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((U.errors = e), r === 0);
}
U.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ke = M;
function M(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = M.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.contactId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "contactId" },
        message: "must have required property 'contactId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "contactId" || s === "fields")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.contactId !== void 0 && typeof t.contactId != "string") {
      const s = {
        instancePath: i + "/contactId",
        schemaPath: "#/properties/contactId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.fields !== void 0 && typeof t.fields != "string") {
      const s = {
        instancePath: i + "/fields",
        schemaPath: "#/properties/fields/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((M.errors = e), r === 0);
}
M.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Qe = W;
function W(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = W.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.dashboardId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "dashboardId" },
        message: "must have required property 'dashboardId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "dashboardId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.dashboardId !== void 0 && typeof t.dashboardId != "string") {
      const s = {
        instancePath: i + "/dashboardId",
        schemaPath: "#/properties/dashboardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((W.errors = e), r === 0);
}
W.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Xe = B;
function B(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = B.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.leadId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "leadId" },
        message: "must have required property 'leadId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "leadId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.leadId !== void 0 && typeof t.leadId != "string") {
      const s = {
        instancePath: i + "/leadId",
        schemaPath: "#/properties/leadId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((B.errors = e), r === 0);
}
B.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ze = F;
function F(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = F.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.noteId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "noteId" },
        message: "must have required property 'noteId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "noteId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.noteId !== void 0 && typeof t.noteId != "string") {
      const s = {
        instancePath: i + "/noteId",
        schemaPath: "#/properties/noteId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((F.errors = e), r === 0);
}
F.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const $e = L;
function L(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = L.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.opportunityId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "opportunityId" },
        message: "must have required property 'opportunityId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "fields" || s === "opportunityId")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.fields !== void 0 && typeof t.fields != "string") {
      const s = {
        instancePath: i + "/fields",
        schemaPath: "#/properties/fields/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.opportunityId !== void 0 && typeof t.opportunityId != "string") {
      const s = {
        instancePath: i + "/opportunityId",
        schemaPath: "#/properties/opportunityId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((L.errors = e), r === 0);
}
L.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const es = V;
function V(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = V.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.reportId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reportId" },
        message: "must have required property 'reportId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "reportId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.reportId !== void 0 && typeof t.reportId != "string") {
      const s = {
        instancePath: i + "/reportId",
        schemaPath: "#/properties/reportId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((V.errors = e), r === 0);
}
V.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ss = H;
function H(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = H.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.instanceId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "instanceId" },
        message: "must have required property 'instanceId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.reportId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reportId" },
        message: "must have required property 'reportId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "instanceId" || s === "reportId")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.instanceId !== void 0 && typeof t.instanceId != "string") {
      const s = {
        instancePath: i + "/instanceId",
        schemaPath: "#/properties/instanceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.reportId !== void 0 && typeof t.reportId != "string") {
      const s = {
        instancePath: i + "/reportId",
        schemaPath: "#/properties/reportId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((H.errors = e), r === 0);
}
H.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ts = z;
function z(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = z.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!(s === "includePermissions" || s === "userId")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (
      t.includePermissions !== void 0 &&
      typeof t.includePermissions != "boolean"
    ) {
      const s = {
        instancePath: i + "/includePermissions",
        schemaPath: "#/properties/includePermissions/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.userId !== void 0 && typeof t.userId != "string") {
      const s = {
        instancePath: i + "/userId",
        schemaPath: "#/properties/userId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((z.errors = e), r === 0);
}
z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const rs = Y;
function Y(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = Y.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  )
    for (const s in t) {
      const n = {
        instancePath: i,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: s },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [n]) : e.push(n), r++);
    }
  else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((Y.errors = e), r === 0);
}
Y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const is = G,
  Bs = {
    properties: {
      folderName: { type: "string" },
      includeBody: { type: "boolean" },
      isActiveOnly: { type: "boolean" },
      limit: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      orderBy: { type: "string" },
      orderDirection: { type: "string" },
      searchTerm: { type: "string" },
      templateType: { type: "string" },
      nextRecordsUrl: { type: "string" },
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
function G(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = G.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!u.call(Bs.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.folderName !== void 0 && typeof t.folderName != "string") {
      const s = {
        instancePath: i + "/folderName",
        schemaPath: "#/properties/folderName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.includeBody !== void 0 && typeof t.includeBody != "boolean") {
      const s = {
        instancePath: i + "/includeBody",
        schemaPath: "#/properties/includeBody/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isActiveOnly !== void 0 && typeof t.isActiveOnly != "boolean") {
      const s = {
        instancePath: i + "/isActiveOnly",
        schemaPath: "#/properties/isActiveOnly/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.orderBy !== void 0 && typeof t.orderBy != "string") {
      const s = {
        instancePath: i + "/orderBy",
        schemaPath: "#/properties/orderBy/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.orderDirection !== void 0 && typeof t.orderDirection != "string") {
      const s = {
        instancePath: i + "/orderDirection",
        schemaPath: "#/properties/orderDirection/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.searchTerm !== void 0 && typeof t.searchTerm != "string") {
      const s = {
        instancePath: i + "/searchTerm",
        schemaPath: "#/properties/searchTerm/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.templateType !== void 0 && typeof t.templateType != "string") {
      const s = {
        instancePath: i + "/templateType",
        schemaPath: "#/properties/templateType/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.nextRecordsUrl !== void 0 && typeof t.nextRecordsUrl != "string") {
      const s = {
        instancePath: i + "/nextRecordsUrl",
        schemaPath: "#/properties/nextRecordsUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.start !== void 0) {
      let s = t.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.end !== void 0) {
      let s = t.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((G.errors = e), r === 0);
}
G.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ns = J;
function J(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = J.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.sObjectType === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sObjectType" },
        message: "must have required property 'sObjectType'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "sObjectType") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.sObjectType !== void 0 && typeof t.sObjectType != "string") {
      const s = {
        instancePath: i + "/sObjectType",
        schemaPath: "#/properties/sObjectType/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((J.errors = e), r === 0);
}
J.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ps = K;
function K(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = K.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  )
    for (const s in t) {
      const n = {
        instancePath: i,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: s },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [n]) : e.push(n), r++);
    }
  else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((K.errors = e), r === 0);
}
K.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const os = Q;
function Q(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = Q.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "callDate" ||
          s === "callDisposition" ||
          s === "callDurationSeconds" ||
          s === "callType" ||
          s === "comments" ||
          s === "subject" ||
          s === "whatId" ||
          s === "whoId"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.callDate !== void 0 && typeof t.callDate != "string") {
      const s = {
        instancePath: i + "/callDate",
        schemaPath: "#/properties/callDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.callDisposition !== void 0 && typeof t.callDisposition != "string") {
      const s = {
        instancePath: i + "/callDisposition",
        schemaPath: "#/properties/callDisposition/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.callDurationSeconds !== void 0) {
      let s = t.callDurationSeconds;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/callDurationSeconds",
          schemaPath: "#/properties/callDurationSeconds/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/callDurationSeconds",
            schemaPath: "#/properties/callDurationSeconds/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/callDurationSeconds",
            schemaPath: "#/properties/callDurationSeconds/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.callType !== void 0 && typeof t.callType != "string") {
      const s = {
        instancePath: i + "/callType",
        schemaPath: "#/properties/callType/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.comments !== void 0 && typeof t.comments != "string") {
      const s = {
        instancePath: i + "/comments",
        schemaPath: "#/properties/comments/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.subject !== void 0 && typeof t.subject != "string") {
      const s = {
        instancePath: i + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.whatId !== void 0 && typeof t.whatId != "string") {
      const s = {
        instancePath: i + "/whatId",
        schemaPath: "#/properties/whatId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.whoId !== void 0 && typeof t.whoId != "string") {
      const s = {
        instancePath: i + "/whoId",
        schemaPath: "#/properties/whoId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((Q.errors = e), r === 0);
}
Q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const as = X,
  Fs = {
    properties: {
      bccAddress: { type: "string" },
      ccAddress: { type: "string" },
      fromAddress: { type: "string" },
      htmlBody: { type: "string" },
      isClientManaged: { type: "boolean" },
      isExternallyVisible: { type: "boolean" },
      isIncoming: { type: "boolean" },
      messageDate: { type: "string" },
      parentId: { type: "string" },
      relatedToId: { type: "string" },
      status: { type: "string" },
      subject: { type: "string" },
      textBody: { type: "string" },
      toAddress: { type: "string" },
    },
  };
function X(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = X.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.fromAddress === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fromAddress" },
        message: "must have required property 'fromAddress'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.relatedToId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "relatedToId" },
        message: "must have required property 'relatedToId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.subject === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "subject" },
        message: "must have required property 'subject'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.toAddress === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "toAddress" },
        message: "must have required property 'toAddress'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Fs.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.bccAddress !== void 0 && typeof t.bccAddress != "string") {
      const s = {
        instancePath: i + "/bccAddress",
        schemaPath: "#/properties/bccAddress/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.ccAddress !== void 0 && typeof t.ccAddress != "string") {
      const s = {
        instancePath: i + "/ccAddress",
        schemaPath: "#/properties/ccAddress/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.fromAddress !== void 0 && typeof t.fromAddress != "string") {
      const s = {
        instancePath: i + "/fromAddress",
        schemaPath: "#/properties/fromAddress/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.htmlBody !== void 0 && typeof t.htmlBody != "string") {
      const s = {
        instancePath: i + "/htmlBody",
        schemaPath: "#/properties/htmlBody/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isClientManaged !== void 0 && typeof t.isClientManaged != "boolean") {
      const s = {
        instancePath: i + "/isClientManaged",
        schemaPath: "#/properties/isClientManaged/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.isExternallyVisible !== void 0 &&
      typeof t.isExternallyVisible != "boolean"
    ) {
      const s = {
        instancePath: i + "/isExternallyVisible",
        schemaPath: "#/properties/isExternallyVisible/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isIncoming !== void 0 && typeof t.isIncoming != "boolean") {
      const s = {
        instancePath: i + "/isIncoming",
        schemaPath: "#/properties/isIncoming/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.messageDate !== void 0 && typeof t.messageDate != "string") {
      const s = {
        instancePath: i + "/messageDate",
        schemaPath: "#/properties/messageDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.parentId !== void 0 && typeof t.parentId != "string") {
      const s = {
        instancePath: i + "/parentId",
        schemaPath: "#/properties/parentId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.relatedToId !== void 0 && typeof t.relatedToId != "string") {
      const s = {
        instancePath: i + "/relatedToId",
        schemaPath: "#/properties/relatedToId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.status !== void 0 && typeof t.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.subject !== void 0 && typeof t.subject != "string") {
      const s = {
        instancePath: i + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.textBody !== void 0 && typeof t.textBody != "string") {
      const s = {
        instancePath: i + "/textBody",
        schemaPath: "#/properties/textBody/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.toAddress !== void 0 && typeof t.toAddress != "string") {
      const s = {
        instancePath: i + "/toAddress",
        schemaPath: "#/properties/toAddress/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((X.errors = e), r === 0);
}
X.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ms = Z;
function Z(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = Z.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.newOwnerId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "newOwnerId" },
        message: "must have required property 'newOwnerId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.objectType === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "objectType" },
        message: "must have required property 'objectType'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.recordIds === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "recordIds" },
        message: "must have required property 'recordIds'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (
        !(
          s === "newOwnerId" ||
          s === "objectType" ||
          s === "recordIds" ||
          s === "sendNotificationEmail"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.newOwnerId !== void 0 && typeof t.newOwnerId != "string") {
      const s = {
        instancePath: i + "/newOwnerId",
        schemaPath: "#/properties/newOwnerId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.objectType !== void 0 && typeof t.objectType != "string") {
      const s = {
        instancePath: i + "/objectType",
        schemaPath: "#/properties/objectType/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.recordIds !== void 0) {
      let s = t.recordIds;
      if (Array.isArray(s)) {
        const n = s.length;
        for (let y = 0; y < n; y++)
          if (typeof s[y] != "string") {
            const d = {
              instancePath: i + "/recordIds/" + y,
              schemaPath: "#/properties/recordIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), r++);
          }
      } else {
        const n = {
          instancePath: i + "/recordIds",
          schemaPath: "#/properties/recordIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    }
    if (
      t.sendNotificationEmail !== void 0 &&
      typeof t.sendNotificationEmail != "boolean"
    ) {
      const s = {
        instancePath: i + "/sendNotificationEmail",
        schemaPath: "#/properties/sendNotificationEmail/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((Z.errors = e), r === 0);
}
Z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ls = $;
function $(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = $.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.campaignId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (
        !(s === "campaignId" || s === "campaignMemberId" || s === "memberId")
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.campaignId !== void 0 && typeof t.campaignId != "string") {
      const s = {
        instancePath: i + "/campaignId",
        schemaPath: "#/properties/campaignId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.campaignMemberId !== void 0 &&
      typeof t.campaignMemberId != "string"
    ) {
      const s = {
        instancePath: i + "/campaignMemberId",
        schemaPath: "#/properties/campaignMemberId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.memberId !== void 0 && typeof t.memberId != "string") {
      const s = {
        instancePath: i + "/memberId",
        schemaPath: "#/properties/memberId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return (($.errors = e), r === 0);
}
$.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const us = ee;
function ee(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = ee.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.id === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "id" },
        message: "must have required property 'id'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "fields" || s === "id")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.fields !== void 0 && typeof t.fields != "string") {
      const s = {
        instancePath: i + "/fields",
        schemaPath: "#/properties/fields/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.id !== void 0 && typeof t.id != "string") {
      const s = {
        instancePath: i + "/id",
        schemaPath: "#/properties/id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((ee.errors = e), r === 0);
}
ee.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ys = se;
function se(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = se.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "nextRecordsUrl" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.nextRecordsUrl !== void 0 && typeof t.nextRecordsUrl != "string") {
      const s = {
        instancePath: i + "/nextRecordsUrl",
        schemaPath: "#/properties/nextRecordsUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.start !== void 0) {
      let s = t.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.end !== void 0) {
      let s = t.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((se.errors = e), r === 0);
}
se.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ds = te;
function te(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = te.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.id === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "id" },
        message: "must have required property 'id'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!(s === "fields" || s === "id")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.fields !== void 0 && typeof t.fields != "string") {
      const s = {
        instancePath: i + "/fields",
        schemaPath: "#/properties/fields/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.id !== void 0 && typeof t.id != "string") {
      const s = {
        instancePath: i + "/id",
        schemaPath: "#/properties/id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((te.errors = e), r === 0);
}
te.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const fs = re;
function re(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = re.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.reportId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reportId" },
        message: "must have required property 'reportId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (s !== "reportId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.reportId !== void 0 && typeof t.reportId != "string") {
      const s = {
        instancePath: i + "/reportId",
        schemaPath: "#/properties/reportId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((re.errors = e), r === 0);
}
re.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const cs = ie;
function ie(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = ie.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "nextRecordsUrl" ||
          s === "query" ||
          s === "limit" ||
          s === "cursor"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.nextRecordsUrl !== void 0 && typeof t.nextRecordsUrl != "string") {
      const s = {
        instancePath: i + "/nextRecordsUrl",
        schemaPath: "#/properties/nextRecordsUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.query !== void 0 && typeof t.query != "string") {
      const s = {
        instancePath: i + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((ie.errors = e), r === 0);
}
ie.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const gs = ne,
  Ls = {
    properties: {
      billingCity: { type: "string" },
      billingCountry: { type: "string" },
      billingState: { type: "string" },
      fields: { type: "string" },
      industry: { type: "string" },
      name: { type: "string" },
      phone: { type: "string" },
      type: { type: "string" },
      website: { type: "string" },
      nextRecordsUrl: { type: "string" },
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
    },
  };
function ne(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = ne.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!u.call(Ls.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.billingCity !== void 0 && typeof t.billingCity != "string") {
      const s = {
        instancePath: i + "/billingCity",
        schemaPath: "#/properties/billingCity/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.billingCountry !== void 0 && typeof t.billingCountry != "string") {
      const s = {
        instancePath: i + "/billingCountry",
        schemaPath: "#/properties/billingCountry/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.billingState !== void 0 && typeof t.billingState != "string") {
      const s = {
        instancePath: i + "/billingState",
        schemaPath: "#/properties/billingState/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.fields !== void 0 && typeof t.fields != "string") {
      const s = {
        instancePath: i + "/fields",
        schemaPath: "#/properties/fields/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.industry !== void 0 && typeof t.industry != "string") {
      const s = {
        instancePath: i + "/industry",
        schemaPath: "#/properties/industry/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.phone !== void 0 && typeof t.phone != "string") {
      const s = {
        instancePath: i + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.type !== void 0 && typeof t.type != "string") {
      const s = {
        instancePath: i + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.website !== void 0 && typeof t.website != "string") {
      const s = {
        instancePath: i + "/website",
        schemaPath: "#/properties/website/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.nextRecordsUrl !== void 0 && typeof t.nextRecordsUrl != "string") {
      const s = {
        instancePath: i + "/nextRecordsUrl",
        schemaPath: "#/properties/nextRecordsUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((ne.errors = e), r === 0);
}
ne.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const hs = pe,
  Vs = {
    properties: {
      fields: { type: "string" },
      isActive: { type: "boolean" },
      name: { type: "string" },
      startDateFrom: { type: "string" },
      startDateTo: { type: "string" },
      status: { type: "string" },
      type: { type: "string" },
      nextRecordsUrl: { type: "string" },
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
    },
  };
function pe(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = pe.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!u.call(Vs.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.fields !== void 0 && typeof t.fields != "string") {
      const s = {
        instancePath: i + "/fields",
        schemaPath: "#/properties/fields/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isActive !== void 0 && typeof t.isActive != "boolean") {
      const s = {
        instancePath: i + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.startDateFrom !== void 0 && typeof t.startDateFrom != "string") {
      const s = {
        instancePath: i + "/startDateFrom",
        schemaPath: "#/properties/startDateFrom/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.startDateTo !== void 0 && typeof t.startDateTo != "string") {
      const s = {
        instancePath: i + "/startDateTo",
        schemaPath: "#/properties/startDateTo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.status !== void 0 && typeof t.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.type !== void 0 && typeof t.type != "string") {
      const s = {
        instancePath: i + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.nextRecordsUrl !== void 0 && typeof t.nextRecordsUrl != "string") {
      const s = {
        instancePath: i + "/nextRecordsUrl",
        schemaPath: "#/properties/nextRecordsUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((pe.errors = e), r === 0);
}
pe.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const bs = oe,
  Hs = {
    properties: {
      accountName: { type: "string" },
      email: { type: "string" },
      fields: { type: "string" },
      name: { type: "string" },
      phone: { type: "string" },
      title: { type: "string" },
      nextRecordsUrl: { type: "string" },
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
    },
  };
function oe(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = oe.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!u.call(Hs.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.accountName !== void 0 && typeof t.accountName != "string") {
      const s = {
        instancePath: i + "/accountName",
        schemaPath: "#/properties/accountName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.email !== void 0 && typeof t.email != "string") {
      const s = {
        instancePath: i + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.fields !== void 0 && typeof t.fields != "string") {
      const s = {
        instancePath: i + "/fields",
        schemaPath: "#/properties/fields/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.phone !== void 0 && typeof t.phone != "string") {
      const s = {
        instancePath: i + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: i + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.nextRecordsUrl !== void 0 && typeof t.nextRecordsUrl != "string") {
      const s = {
        instancePath: i + "/nextRecordsUrl",
        schemaPath: "#/properties/nextRecordsUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((oe.errors = e), r === 0);
}
oe.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ps = ae,
  zs = {
    properties: {
      company: { type: "string" },
      email: { type: "string" },
      fields: { type: "string" },
      leadSource: { type: "string" },
      name: { type: "string" },
      phone: { type: "string" },
      status: { type: "string" },
      title: { type: "string" },
      nextRecordsUrl: { type: "string" },
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
    },
  };
function ae(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = ae.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!u.call(zs.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.company !== void 0 && typeof t.company != "string") {
      const s = {
        instancePath: i + "/company",
        schemaPath: "#/properties/company/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.email !== void 0 && typeof t.email != "string") {
      const s = {
        instancePath: i + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.fields !== void 0 && typeof t.fields != "string") {
      const s = {
        instancePath: i + "/fields",
        schemaPath: "#/properties/fields/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.leadSource !== void 0 && typeof t.leadSource != "string") {
      const s = {
        instancePath: i + "/leadSource",
        schemaPath: "#/properties/leadSource/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.phone !== void 0 && typeof t.phone != "string") {
      const s = {
        instancePath: i + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.status !== void 0 && typeof t.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: i + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.nextRecordsUrl !== void 0 && typeof t.nextRecordsUrl != "string") {
      const s = {
        instancePath: i + "/nextRecordsUrl",
        schemaPath: "#/properties/nextRecordsUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((ae.errors = e), r === 0);
}
ae.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ws = me,
  Ys = {
    properties: {
      body: { type: "string" },
      createdDateFrom: { type: "string" },
      createdDateTo: { type: "string" },
      fields: { type: "string" },
      isPrivate: { type: "boolean" },
      ownerName: { type: "string" },
      parentName: { type: "string" },
      title: { type: "string" },
      nextRecordsUrl: { type: "string" },
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
    },
  };
function me(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = me.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!u.call(Ys.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.body !== void 0 && typeof t.body != "string") {
      const s = {
        instancePath: i + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.createdDateFrom !== void 0 && typeof t.createdDateFrom != "string") {
      const s = {
        instancePath: i + "/createdDateFrom",
        schemaPath: "#/properties/createdDateFrom/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.createdDateTo !== void 0 && typeof t.createdDateTo != "string") {
      const s = {
        instancePath: i + "/createdDateTo",
        schemaPath: "#/properties/createdDateTo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.fields !== void 0 && typeof t.fields != "string") {
      const s = {
        instancePath: i + "/fields",
        schemaPath: "#/properties/fields/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isPrivate !== void 0 && typeof t.isPrivate != "boolean") {
      const s = {
        instancePath: i + "/isPrivate",
        schemaPath: "#/properties/isPrivate/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.ownerName !== void 0 && typeof t.ownerName != "string") {
      const s = {
        instancePath: i + "/ownerName",
        schemaPath: "#/properties/ownerName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.parentName !== void 0 && typeof t.parentName != "string") {
      const s = {
        instancePath: i + "/parentName",
        schemaPath: "#/properties/parentName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: i + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.nextRecordsUrl !== void 0 && typeof t.nextRecordsUrl != "string") {
      const s = {
        instancePath: i + "/nextRecordsUrl",
        schemaPath: "#/properties/nextRecordsUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((me.errors = e), r === 0);
}
me.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ks = le,
  Gs = {
    properties: {
      accountName: { type: "string" },
      amountMax: { type: "number" },
      amountMin: { type: "number" },
      closeDateFrom: { type: "string" },
      closeDateTo: { type: "string" },
      fields: { type: "string" },
      isClosed: { type: "boolean" },
      isWon: { type: "boolean" },
      leadSource: { type: "string" },
      name: { type: "string" },
      stageName: { type: "string" },
      nextRecordsUrl: { type: "string" },
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
    },
  };
function le(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = le.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!u.call(Gs.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.accountName !== void 0 && typeof t.accountName != "string") {
      const s = {
        instancePath: i + "/accountName",
        schemaPath: "#/properties/accountName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.amountMax !== void 0 && typeof t.amountMax != "number") {
      const s = {
        instancePath: i + "/amountMax",
        schemaPath: "#/properties/amountMax/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.amountMin !== void 0 && typeof t.amountMin != "number") {
      const s = {
        instancePath: i + "/amountMin",
        schemaPath: "#/properties/amountMin/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.closeDateFrom !== void 0 && typeof t.closeDateFrom != "string") {
      const s = {
        instancePath: i + "/closeDateFrom",
        schemaPath: "#/properties/closeDateFrom/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.closeDateTo !== void 0 && typeof t.closeDateTo != "string") {
      const s = {
        instancePath: i + "/closeDateTo",
        schemaPath: "#/properties/closeDateTo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.fields !== void 0 && typeof t.fields != "string") {
      const s = {
        instancePath: i + "/fields",
        schemaPath: "#/properties/fields/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isClosed !== void 0 && typeof t.isClosed != "boolean") {
      const s = {
        instancePath: i + "/isClosed",
        schemaPath: "#/properties/isClosed/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isWon !== void 0 && typeof t.isWon != "boolean") {
      const s = {
        instancePath: i + "/isWon",
        schemaPath: "#/properties/isWon/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.leadSource !== void 0 && typeof t.leadSource != "string") {
      const s = {
        instancePath: i + "/leadSource",
        schemaPath: "#/properties/leadSource/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.stageName !== void 0 && typeof t.stageName != "string") {
      const s = {
        instancePath: i + "/stageName",
        schemaPath: "#/properties/stageName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.nextRecordsUrl !== void 0 && typeof t.nextRecordsUrl != "string") {
      const s = {
        instancePath: i + "/nextRecordsUrl",
        schemaPath: "#/properties/nextRecordsUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((le.errors = e), r === 0);
}
le.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const vs = ue,
  Js = {
    properties: {
      accountName: { type: "string" },
      activityDateFrom: { type: "string" },
      activityDateTo: { type: "string" },
      assignedToName: { type: "string" },
      contactName: { type: "string" },
      fields: { type: "string" },
      isClosed: { type: "boolean" },
      priority: { type: "string" },
      status: { type: "string" },
      subject: { type: "string" },
      nextRecordsUrl: { type: "string" },
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
    },
  };
function ue(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = ue.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (!u.call(Js.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.accountName !== void 0 && typeof t.accountName != "string") {
      const s = {
        instancePath: i + "/accountName",
        schemaPath: "#/properties/accountName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.activityDateFrom !== void 0 &&
      typeof t.activityDateFrom != "string"
    ) {
      const s = {
        instancePath: i + "/activityDateFrom",
        schemaPath: "#/properties/activityDateFrom/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.activityDateTo !== void 0 && typeof t.activityDateTo != "string") {
      const s = {
        instancePath: i + "/activityDateTo",
        schemaPath: "#/properties/activityDateTo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.assignedToName !== void 0 && typeof t.assignedToName != "string") {
      const s = {
        instancePath: i + "/assignedToName",
        schemaPath: "#/properties/assignedToName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.contactName !== void 0 && typeof t.contactName != "string") {
      const s = {
        instancePath: i + "/contactName",
        schemaPath: "#/properties/contactName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.fields !== void 0 && typeof t.fields != "string") {
      const s = {
        instancePath: i + "/fields",
        schemaPath: "#/properties/fields/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isClosed !== void 0 && typeof t.isClosed != "boolean") {
      const s = {
        instancePath: i + "/isClosed",
        schemaPath: "#/properties/isClosed/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.priority !== void 0 && typeof t.priority != "string") {
      const s = {
        instancePath: i + "/priority",
        schemaPath: "#/properties/priority/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.status !== void 0 && typeof t.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.subject !== void 0 && typeof t.subject != "string") {
      const s = {
        instancePath: i + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.nextRecordsUrl !== void 0 && typeof t.nextRecordsUrl != "string") {
      const s = {
        instancePath: i + "/nextRecordsUrl",
        schemaPath: "#/properties/nextRecordsUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < 1 || isNaN(s)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((ue.errors = e), r === 0);
}
ue.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _s = ye,
  ve = {
    properties: {
      attachmentIds: { type: "string" },
      bccAddresses: { type: "string" },
      body: { type: "string" },
      ccAddresses: { type: "string" },
      isHtml: { type: "boolean" },
      logEmail: { type: "boolean" },
      orgWideEmailAddressId: { type: "string" },
      recipientId: { type: "string" },
      relatedRecordId: { type: "string" },
      senderAddress: { type: "string" },
      senderType: {
        enum: ["CurrentUser", "DefaultWorkflowUser", "OrgWideEmailAddress"],
        type: "string",
      },
      subject: { type: "string" },
      toAddresses: { type: "string" },
    },
  };
function ye(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = ye.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.body === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "body" },
        message: "must have required property 'body'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.subject === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "subject" },
        message: "must have required property 'subject'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.toAddresses === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "toAddresses" },
        message: "must have required property 'toAddresses'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(ve.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.attachmentIds !== void 0 && typeof t.attachmentIds != "string") {
      const s = {
        instancePath: i + "/attachmentIds",
        schemaPath: "#/properties/attachmentIds/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.bccAddresses !== void 0 && typeof t.bccAddresses != "string") {
      const s = {
        instancePath: i + "/bccAddresses",
        schemaPath: "#/properties/bccAddresses/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.body !== void 0 && typeof t.body != "string") {
      const s = {
        instancePath: i + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.ccAddresses !== void 0 && typeof t.ccAddresses != "string") {
      const s = {
        instancePath: i + "/ccAddresses",
        schemaPath: "#/properties/ccAddresses/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isHtml !== void 0 && typeof t.isHtml != "boolean") {
      const s = {
        instancePath: i + "/isHtml",
        schemaPath: "#/properties/isHtml/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.logEmail !== void 0 && typeof t.logEmail != "boolean") {
      const s = {
        instancePath: i + "/logEmail",
        schemaPath: "#/properties/logEmail/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.orgWideEmailAddressId !== void 0 &&
      typeof t.orgWideEmailAddressId != "string"
    ) {
      const s = {
        instancePath: i + "/orgWideEmailAddressId",
        schemaPath: "#/properties/orgWideEmailAddressId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.recipientId !== void 0 && typeof t.recipientId != "string") {
      const s = {
        instancePath: i + "/recipientId",
        schemaPath: "#/properties/recipientId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.relatedRecordId !== void 0 && typeof t.relatedRecordId != "string") {
      const s = {
        instancePath: i + "/relatedRecordId",
        schemaPath: "#/properties/relatedRecordId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.senderAddress !== void 0 && typeof t.senderAddress != "string") {
      const s = {
        instancePath: i + "/senderAddress",
        schemaPath: "#/properties/senderAddress/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.senderType !== void 0) {
      let s = t.senderType;
      if (typeof s != "string") {
        const n = {
          instancePath: i + "/senderType",
          schemaPath: "#/properties/senderType/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (
        !(
          s === "CurrentUser" ||
          s === "DefaultWorkflowUser" ||
          s === "OrgWideEmailAddress"
        )
      ) {
        const n = {
          instancePath: i + "/senderType",
          schemaPath: "#/properties/senderType/enum",
          keyword: "enum",
          params: { allowedValues: ve.properties.senderType.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    }
    if (t.subject !== void 0 && typeof t.subject != "string") {
      const s = {
        instancePath: i + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.toAddresses !== void 0 && typeof t.toAddresses != "string") {
      const s = {
        instancePath: i + "/toAddresses",
        schemaPath: "#/properties/toAddresses/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((ye.errors = e), r === 0);
}
ye.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Is = de,
  _e = {
    properties: {
      addThreadingTokens: { type: "boolean" },
      additionalToAddresses: { type: "string" },
      attachmentIds: { type: "string" },
      bccAddresses: { type: "string" },
      ccAddresses: { type: "string" },
      logEmail: { type: "boolean" },
      recipientId: { type: "string" },
      relatedRecordId: { type: "string" },
      senderAddress: { type: "string" },
      senderType: {
        enum: ["CurrentUser", "DefaultWorkflowUser", "OrgWideEmailAddress"],
        type: "string",
      },
      templateId: { type: "string" },
    },
  };
function de(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = de.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.recipientId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "recipientId" },
        message: "must have required property 'recipientId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.templateId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "templateId" },
        message: "must have required property 'templateId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(_e.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (
      t.addThreadingTokens !== void 0 &&
      typeof t.addThreadingTokens != "boolean"
    ) {
      const s = {
        instancePath: i + "/addThreadingTokens",
        schemaPath: "#/properties/addThreadingTokens/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.additionalToAddresses !== void 0 &&
      typeof t.additionalToAddresses != "string"
    ) {
      const s = {
        instancePath: i + "/additionalToAddresses",
        schemaPath: "#/properties/additionalToAddresses/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.attachmentIds !== void 0 && typeof t.attachmentIds != "string") {
      const s = {
        instancePath: i + "/attachmentIds",
        schemaPath: "#/properties/attachmentIds/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.bccAddresses !== void 0 && typeof t.bccAddresses != "string") {
      const s = {
        instancePath: i + "/bccAddresses",
        schemaPath: "#/properties/bccAddresses/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.ccAddresses !== void 0 && typeof t.ccAddresses != "string") {
      const s = {
        instancePath: i + "/ccAddresses",
        schemaPath: "#/properties/ccAddresses/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.logEmail !== void 0 && typeof t.logEmail != "boolean") {
      const s = {
        instancePath: i + "/logEmail",
        schemaPath: "#/properties/logEmail/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.recipientId !== void 0 && typeof t.recipientId != "string") {
      const s = {
        instancePath: i + "/recipientId",
        schemaPath: "#/properties/recipientId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.relatedRecordId !== void 0 && typeof t.relatedRecordId != "string") {
      const s = {
        instancePath: i + "/relatedRecordId",
        schemaPath: "#/properties/relatedRecordId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.senderAddress !== void 0 && typeof t.senderAddress != "string") {
      const s = {
        instancePath: i + "/senderAddress",
        schemaPath: "#/properties/senderAddress/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.senderType !== void 0) {
      let s = t.senderType;
      if (typeof s != "string") {
        const n = {
          instancePath: i + "/senderType",
          schemaPath: "#/properties/senderType/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (
        !(
          s === "CurrentUser" ||
          s === "DefaultWorkflowUser" ||
          s === "OrgWideEmailAddress"
        )
      ) {
        const n = {
          instancePath: i + "/senderType",
          schemaPath: "#/properties/senderType/enum",
          keyword: "enum",
          params: { allowedValues: _e.properties.senderType.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    }
    if (t.templateId !== void 0 && typeof t.templateId != "string") {
      const s = {
        instancePath: i + "/templateId",
        schemaPath: "#/properties/templateId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((de.errors = e), r === 0);
}
de.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ds = fe,
  Ie = {
    properties: {
      batchSize: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      body: { type: "string" },
      isHtml: { type: "boolean" },
      logEmails: { type: "boolean" },
      recipientIds: { type: "array", items: { type: "string" } },
      senderAddress: { type: "string" },
      senderType: {
        enum: ["CurrentUser", "DefaultWorkflowUser", "OrgWideEmailAddress"],
        type: "string",
      },
      subject: { type: "string" },
      templateId: { type: "string" },
    },
  };
function fe(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = fe.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.recipientIds === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "recipientIds" },
        message: "must have required property 'recipientIds'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Ie.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.batchSize !== void 0) {
      let s = t.batchSize;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/batchSize",
          schemaPath: "#/properties/batchSize/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/batchSize",
            schemaPath: "#/properties/batchSize/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/batchSize",
            schemaPath: "#/properties/batchSize/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.body !== void 0 && typeof t.body != "string") {
      const s = {
        instancePath: i + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isHtml !== void 0 && typeof t.isHtml != "boolean") {
      const s = {
        instancePath: i + "/isHtml",
        schemaPath: "#/properties/isHtml/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.logEmails !== void 0 && typeof t.logEmails != "boolean") {
      const s = {
        instancePath: i + "/logEmails",
        schemaPath: "#/properties/logEmails/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.recipientIds !== void 0) {
      let s = t.recipientIds;
      if (Array.isArray(s)) {
        const n = s.length;
        for (let y = 0; y < n; y++)
          if (typeof s[y] != "string") {
            const d = {
              instancePath: i + "/recipientIds/" + y,
              schemaPath: "#/properties/recipientIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), r++);
          }
      } else {
        const n = {
          instancePath: i + "/recipientIds",
          schemaPath: "#/properties/recipientIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    }
    if (t.senderAddress !== void 0 && typeof t.senderAddress != "string") {
      const s = {
        instancePath: i + "/senderAddress",
        schemaPath: "#/properties/senderAddress/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.senderType !== void 0) {
      let s = t.senderType;
      if (typeof s != "string") {
        const n = {
          instancePath: i + "/senderType",
          schemaPath: "#/properties/senderType/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (
        !(
          s === "CurrentUser" ||
          s === "DefaultWorkflowUser" ||
          s === "OrgWideEmailAddress"
        )
      ) {
        const n = {
          instancePath: i + "/senderType",
          schemaPath: "#/properties/senderType/enum",
          keyword: "enum",
          params: { allowedValues: Ie.properties.senderType.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    }
    if (t.subject !== void 0 && typeof t.subject != "string") {
      const s = {
        instancePath: i + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.templateId !== void 0 && typeof t.templateId != "string") {
      const s = {
        instancePath: i + "/templateId",
        schemaPath: "#/properties/templateId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((fe.errors = e), r === 0);
}
fe.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ns = ce,
  Ks = {
    properties: {
      account_id: { type: "string" },
      accountSource: { type: "string" },
      annualRevenue: { type: "number" },
      billingCity: { type: "string" },
      billingCountry: { type: "string" },
      billingPostalCode: { type: "string" },
      billingState: { type: "string" },
      billingStreet: { type: "string" },
      description: { type: "string" },
      fax: { type: "string" },
      industry: { type: "string" },
      name: { type: "string" },
      numberOfEmployees: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      parentId: { type: "string" },
      phone: { type: "string" },
      shippingCity: { type: "string" },
      shippingCountry: { type: "string" },
      shippingPostalCode: { type: "string" },
      shippingState: { type: "string" },
      shippingStreet: { type: "string" },
      sicDesc: { type: "string" },
      type: { type: "string" },
      website: { type: "string" },
    },
  };
function ce(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = ce.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.account_id === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "account_id" },
        message: "must have required property 'account_id'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Ks.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.account_id !== void 0 && typeof t.account_id != "string") {
      const s = {
        instancePath: i + "/account_id",
        schemaPath: "#/properties/account_id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.accountSource !== void 0 && typeof t.accountSource != "string") {
      const s = {
        instancePath: i + "/accountSource",
        schemaPath: "#/properties/accountSource/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.annualRevenue !== void 0 && typeof t.annualRevenue != "number") {
      const s = {
        instancePath: i + "/annualRevenue",
        schemaPath: "#/properties/annualRevenue/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.billingCity !== void 0 && typeof t.billingCity != "string") {
      const s = {
        instancePath: i + "/billingCity",
        schemaPath: "#/properties/billingCity/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.billingCountry !== void 0 && typeof t.billingCountry != "string") {
      const s = {
        instancePath: i + "/billingCountry",
        schemaPath: "#/properties/billingCountry/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.billingPostalCode !== void 0 &&
      typeof t.billingPostalCode != "string"
    ) {
      const s = {
        instancePath: i + "/billingPostalCode",
        schemaPath: "#/properties/billingPostalCode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.billingState !== void 0 && typeof t.billingState != "string") {
      const s = {
        instancePath: i + "/billingState",
        schemaPath: "#/properties/billingState/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.billingStreet !== void 0 && typeof t.billingStreet != "string") {
      const s = {
        instancePath: i + "/billingStreet",
        schemaPath: "#/properties/billingStreet/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.fax !== void 0 && typeof t.fax != "string") {
      const s = {
        instancePath: i + "/fax",
        schemaPath: "#/properties/fax/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.industry !== void 0 && typeof t.industry != "string") {
      const s = {
        instancePath: i + "/industry",
        schemaPath: "#/properties/industry/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.numberOfEmployees !== void 0) {
      let s = t.numberOfEmployees;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/numberOfEmployees",
          schemaPath: "#/properties/numberOfEmployees/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/numberOfEmployees",
            schemaPath: "#/properties/numberOfEmployees/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/numberOfEmployees",
            schemaPath: "#/properties/numberOfEmployees/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.parentId !== void 0 && typeof t.parentId != "string") {
      const s = {
        instancePath: i + "/parentId",
        schemaPath: "#/properties/parentId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.phone !== void 0 && typeof t.phone != "string") {
      const s = {
        instancePath: i + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.shippingCity !== void 0 && typeof t.shippingCity != "string") {
      const s = {
        instancePath: i + "/shippingCity",
        schemaPath: "#/properties/shippingCity/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.shippingCountry !== void 0 && typeof t.shippingCountry != "string") {
      const s = {
        instancePath: i + "/shippingCountry",
        schemaPath: "#/properties/shippingCountry/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.shippingPostalCode !== void 0 &&
      typeof t.shippingPostalCode != "string"
    ) {
      const s = {
        instancePath: i + "/shippingPostalCode",
        schemaPath: "#/properties/shippingPostalCode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.shippingState !== void 0 && typeof t.shippingState != "string") {
      const s = {
        instancePath: i + "/shippingState",
        schemaPath: "#/properties/shippingState/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.shippingStreet !== void 0 && typeof t.shippingStreet != "string") {
      const s = {
        instancePath: i + "/shippingStreet",
        schemaPath: "#/properties/shippingStreet/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.sicDesc !== void 0 && typeof t.sicDesc != "string") {
      const s = {
        instancePath: i + "/sicDesc",
        schemaPath: "#/properties/sicDesc/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.type !== void 0 && typeof t.type != "string") {
      const s = {
        instancePath: i + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.website !== void 0 && typeof t.website != "string") {
      const s = {
        instancePath: i + "/website",
        schemaPath: "#/properties/website/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((ce.errors = e), r === 0);
}
ce.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const As = ge,
  Qs = {
    properties: {
      actualCost: { type: "number" },
      budgetedCost: { type: "number" },
      campaignId: { type: "string" },
      description: { type: "string" },
      endDate: { type: "string" },
      expectedResponse: { type: "number" },
      expectedRevenue: { type: "number" },
      isActive: { type: "boolean" },
      name: { type: "string" },
      numberSent: { type: "number" },
      parentId: { type: "string" },
      startDate: { type: "string" },
      status: { type: "string" },
      type: { type: "string" },
    },
  };
function ge(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = ge.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.campaignId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Qs.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.actualCost !== void 0 && typeof t.actualCost != "number") {
      const s = {
        instancePath: i + "/actualCost",
        schemaPath: "#/properties/actualCost/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.budgetedCost !== void 0 && typeof t.budgetedCost != "number") {
      const s = {
        instancePath: i + "/budgetedCost",
        schemaPath: "#/properties/budgetedCost/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.campaignId !== void 0 && typeof t.campaignId != "string") {
      const s = {
        instancePath: i + "/campaignId",
        schemaPath: "#/properties/campaignId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.endDate !== void 0 && typeof t.endDate != "string") {
      const s = {
        instancePath: i + "/endDate",
        schemaPath: "#/properties/endDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.expectedResponse !== void 0 &&
      typeof t.expectedResponse != "number"
    ) {
      const s = {
        instancePath: i + "/expectedResponse",
        schemaPath: "#/properties/expectedResponse/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.expectedRevenue !== void 0 && typeof t.expectedRevenue != "number") {
      const s = {
        instancePath: i + "/expectedRevenue",
        schemaPath: "#/properties/expectedRevenue/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isActive !== void 0 && typeof t.isActive != "boolean") {
      const s = {
        instancePath: i + "/isActive",
        schemaPath: "#/properties/isActive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.numberSent !== void 0 && typeof t.numberSent != "number") {
      const s = {
        instancePath: i + "/numberSent",
        schemaPath: "#/properties/numberSent/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.parentId !== void 0 && typeof t.parentId != "string") {
      const s = {
        instancePath: i + "/parentId",
        schemaPath: "#/properties/parentId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.startDate !== void 0 && typeof t.startDate != "string") {
      const s = {
        instancePath: i + "/startDate",
        schemaPath: "#/properties/startDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.status !== void 0 && typeof t.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.type !== void 0 && typeof t.type != "string") {
      const s = {
        instancePath: i + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((ge.errors = e), r === 0);
}
ge.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const js = he,
  Xs = {
    properties: {
      account_id: { type: "string" },
      birthdate: { type: "string" },
      contactId: { type: "string" },
      department: { type: "string" },
      description: { type: "string" },
      email: { type: "string" },
      firstName: { type: "string" },
      lastName: { type: "string" },
      mailingCity: { type: "string" },
      mailingCountry: { type: "string" },
      mailingPostalCode: { type: "string" },
      mailingState: { type: "string" },
      mailingStreet: { type: "string" },
      mobilePhone: { type: "string" },
      phone: { type: "string" },
      title: { type: "string" },
    },
  };
function he(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = he.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.contactId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "contactId" },
        message: "must have required property 'contactId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Xs.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.account_id !== void 0 && typeof t.account_id != "string") {
      const s = {
        instancePath: i + "/account_id",
        schemaPath: "#/properties/account_id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.birthdate !== void 0 && typeof t.birthdate != "string") {
      const s = {
        instancePath: i + "/birthdate",
        schemaPath: "#/properties/birthdate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.contactId !== void 0 && typeof t.contactId != "string") {
      const s = {
        instancePath: i + "/contactId",
        schemaPath: "#/properties/contactId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.department !== void 0 && typeof t.department != "string") {
      const s = {
        instancePath: i + "/department",
        schemaPath: "#/properties/department/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.email !== void 0 && typeof t.email != "string") {
      const s = {
        instancePath: i + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.firstName !== void 0 && typeof t.firstName != "string") {
      const s = {
        instancePath: i + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.lastName !== void 0 && typeof t.lastName != "string") {
      const s = {
        instancePath: i + "/lastName",
        schemaPath: "#/properties/lastName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.mailingCity !== void 0 && typeof t.mailingCity != "string") {
      const s = {
        instancePath: i + "/mailingCity",
        schemaPath: "#/properties/mailingCity/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.mailingCountry !== void 0 && typeof t.mailingCountry != "string") {
      const s = {
        instancePath: i + "/mailingCountry",
        schemaPath: "#/properties/mailingCountry/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.mailingPostalCode !== void 0 &&
      typeof t.mailingPostalCode != "string"
    ) {
      const s = {
        instancePath: i + "/mailingPostalCode",
        schemaPath: "#/properties/mailingPostalCode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.mailingState !== void 0 && typeof t.mailingState != "string") {
      const s = {
        instancePath: i + "/mailingState",
        schemaPath: "#/properties/mailingState/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.mailingStreet !== void 0 && typeof t.mailingStreet != "string") {
      const s = {
        instancePath: i + "/mailingStreet",
        schemaPath: "#/properties/mailingStreet/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.mobilePhone !== void 0 && typeof t.mobilePhone != "string") {
      const s = {
        instancePath: i + "/mobilePhone",
        schemaPath: "#/properties/mobilePhone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.phone !== void 0 && typeof t.phone != "string") {
      const s = {
        instancePath: i + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: i + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((he.errors = e), r === 0);
}
he.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const qs = be,
  Zs = {
    properties: {
      annualRevenue: { type: "number" },
      city: { type: "string" },
      company: { type: "string" },
      country: { type: "string" },
      description: { type: "string" },
      email: { type: "string" },
      firstName: { type: "string" },
      industry: { type: "string" },
      lastName: { type: "string" },
      leadId: { type: "string" },
      leadSource: { type: "string" },
      numberOfEmployees: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      phone: { type: "string" },
      postalCode: { type: "string" },
      rating: { type: "string" },
      state: { type: "string" },
      status: { type: "string" },
      street: { type: "string" },
      title: { type: "string" },
      website: { type: "string" },
    },
  };
function be(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = be.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.leadId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "leadId" },
        message: "must have required property 'leadId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(Zs.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.annualRevenue !== void 0 && typeof t.annualRevenue != "number") {
      const s = {
        instancePath: i + "/annualRevenue",
        schemaPath: "#/properties/annualRevenue/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.city !== void 0 && typeof t.city != "string") {
      const s = {
        instancePath: i + "/city",
        schemaPath: "#/properties/city/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.company !== void 0 && typeof t.company != "string") {
      const s = {
        instancePath: i + "/company",
        schemaPath: "#/properties/company/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.country !== void 0 && typeof t.country != "string") {
      const s = {
        instancePath: i + "/country",
        schemaPath: "#/properties/country/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.email !== void 0 && typeof t.email != "string") {
      const s = {
        instancePath: i + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.firstName !== void 0 && typeof t.firstName != "string") {
      const s = {
        instancePath: i + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.industry !== void 0 && typeof t.industry != "string") {
      const s = {
        instancePath: i + "/industry",
        schemaPath: "#/properties/industry/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.lastName !== void 0 && typeof t.lastName != "string") {
      const s = {
        instancePath: i + "/lastName",
        schemaPath: "#/properties/lastName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.leadId !== void 0 && typeof t.leadId != "string") {
      const s = {
        instancePath: i + "/leadId",
        schemaPath: "#/properties/leadId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.leadSource !== void 0 && typeof t.leadSource != "string") {
      const s = {
        instancePath: i + "/leadSource",
        schemaPath: "#/properties/leadSource/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.numberOfEmployees !== void 0) {
      let s = t.numberOfEmployees;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const n = {
          instancePath: i + "/numberOfEmployees",
          schemaPath: "#/properties/numberOfEmployees/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/numberOfEmployees",
            schemaPath: "#/properties/numberOfEmployees/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const n = {
            instancePath: i + "/numberOfEmployees",
            schemaPath: "#/properties/numberOfEmployees/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [n]) : e.push(n), r++);
        }
      }
    }
    if (t.phone !== void 0 && typeof t.phone != "string") {
      const s = {
        instancePath: i + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.postalCode !== void 0 && typeof t.postalCode != "string") {
      const s = {
        instancePath: i + "/postalCode",
        schemaPath: "#/properties/postalCode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.rating !== void 0 && typeof t.rating != "string") {
      const s = {
        instancePath: i + "/rating",
        schemaPath: "#/properties/rating/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.state !== void 0 && typeof t.state != "string") {
      const s = {
        instancePath: i + "/state",
        schemaPath: "#/properties/state/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.status !== void 0 && typeof t.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.street !== void 0 && typeof t.street != "string") {
      const s = {
        instancePath: i + "/street",
        schemaPath: "#/properties/street/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: i + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.website !== void 0 && typeof t.website != "string") {
      const s = {
        instancePath: i + "/website",
        schemaPath: "#/properties/website/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((be.errors = e), r === 0);
}
be.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ts = Pe;
function Pe(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = Pe.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.noteId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "noteId" },
        message: "must have required property 'noteId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (
        !(
          s === "body" ||
          s === "isPrivate" ||
          s === "noteId" ||
          s === "ownerId" ||
          s === "title"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.body !== void 0 && typeof t.body != "string") {
      const s = {
        instancePath: i + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isPrivate !== void 0 && typeof t.isPrivate != "boolean") {
      const s = {
        instancePath: i + "/isPrivate",
        schemaPath: "#/properties/isPrivate/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.noteId !== void 0 && typeof t.noteId != "string") {
      const s = {
        instancePath: i + "/noteId",
        schemaPath: "#/properties/noteId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.ownerId !== void 0 && typeof t.ownerId != "string") {
      const s = {
        instancePath: i + "/ownerId",
        schemaPath: "#/properties/ownerId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: i + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((Pe.errors = e), r === 0);
}
Pe.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ss = we,
  $s = {
    properties: {
      account_id: { type: "string" },
      amount: { type: "number" },
      closeDate: { type: "string" },
      contactId: { type: "string" },
      description: { type: "string" },
      leadSource: { type: "string" },
      name: { type: "string" },
      nextStep: { type: "string" },
      opportunityId: { type: "string" },
      probability: { type: "number" },
      stageName: { type: "string" },
      type: { type: "string" },
    },
  };
function we(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = we.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.opportunityId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "opportunityId" },
        message: "must have required property 'opportunityId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call($s.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.account_id !== void 0 && typeof t.account_id != "string") {
      const s = {
        instancePath: i + "/account_id",
        schemaPath: "#/properties/account_id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.amount !== void 0 && typeof t.amount != "number") {
      const s = {
        instancePath: i + "/amount",
        schemaPath: "#/properties/amount/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.closeDate !== void 0 && typeof t.closeDate != "string") {
      const s = {
        instancePath: i + "/closeDate",
        schemaPath: "#/properties/closeDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.contactId !== void 0 && typeof t.contactId != "string") {
      const s = {
        instancePath: i + "/contactId",
        schemaPath: "#/properties/contactId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.leadSource !== void 0 && typeof t.leadSource != "string") {
      const s = {
        instancePath: i + "/leadSource",
        schemaPath: "#/properties/leadSource/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.nextStep !== void 0 && typeof t.nextStep != "string") {
      const s = {
        instancePath: i + "/nextStep",
        schemaPath: "#/properties/nextStep/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.opportunityId !== void 0 && typeof t.opportunityId != "string") {
      const s = {
        instancePath: i + "/opportunityId",
        schemaPath: "#/properties/opportunityId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.probability !== void 0 && typeof t.probability != "number") {
      const s = {
        instancePath: i + "/probability",
        schemaPath: "#/properties/probability/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.stageName !== void 0 && typeof t.stageName != "string") {
      const s = {
        instancePath: i + "/stageName",
        schemaPath: "#/properties/stageName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.type !== void 0 && typeof t.type != "string") {
      const s = {
        instancePath: i + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((we.errors = e), r === 0);
}
we.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const xs = ke,
  et = {
    properties: {
      activityDate: { type: "string" },
      description: { type: "string" },
      isReminderSet: { type: "boolean" },
      priority: { type: "string" },
      reminderDateTime: { type: "string" },
      status: { type: "string" },
      subject: { type: "string" },
      taskId: { type: "string" },
      whatId: { type: "string" },
      whoId: { type: "string" },
    },
  };
function ke(
  t,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = ke.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.taskId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (!u.call(et.properties, s)) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), r++);
      }
    if (t.activityDate !== void 0 && typeof t.activityDate != "string") {
      const s = {
        instancePath: i + "/activityDate",
        schemaPath: "#/properties/activityDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.isReminderSet !== void 0 && typeof t.isReminderSet != "boolean") {
      const s = {
        instancePath: i + "/isReminderSet",
        schemaPath: "#/properties/isReminderSet/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.priority !== void 0 && typeof t.priority != "string") {
      const s = {
        instancePath: i + "/priority",
        schemaPath: "#/properties/priority/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.reminderDateTime !== void 0 &&
      typeof t.reminderDateTime != "string"
    ) {
      const s = {
        instancePath: i + "/reminderDateTime",
        schemaPath: "#/properties/reminderDateTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.status !== void 0 && typeof t.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.subject !== void 0 && typeof t.subject != "string") {
      const s = {
        instancePath: i + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.taskId !== void 0 && typeof t.taskId != "string") {
      const s = {
        instancePath: i + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.whatId !== void 0 && typeof t.whatId != "string") {
      const s = {
        instancePath: i + "/whatId",
        schemaPath: "#/properties/whatId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.whoId !== void 0 && typeof t.whoId != "string") {
      const s = {
        instancePath: i + "/whoId",
        schemaPath: "#/properties/whoId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((ke.errors = e), r === 0);
}
ke.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const st = {
  salesforce_add_contact_to_campaign: De,
  salesforce_add_lead_to_campaign: Ne,
  salesforce_add_opportunity_line_item: Ae,
  salesforce_apply_lead_assignment_rules: je,
  salesforce_associate_contact_to_account: qe,
  salesforce_clone_opportunity_with_products: Te,
  salesforce_clone_record: Se,
  salesforce_complete_task: xe,
  salesforce_create_account: Ce,
  salesforce_create_campaign: Ee,
  salesforce_create_contact: Oe,
  salesforce_create_event: Re,
  salesforce_create_lead: Ue,
  salesforce_create_note: Me,
  salesforce_create_opportunity: We,
  salesforce_create_task: Be,
  salesforce_delete_account: Fe,
  salesforce_delete_campaign: Le,
  salesforce_delete_contact: Ve,
  salesforce_delete_lead: He,
  salesforce_delete_note: ze,
  salesforce_delete_opportunity: Ye,
  salesforce_get_account: Ge,
  salesforce_get_campaign: Je,
  salesforce_get_contact: Ke,
  salesforce_get_dashboard: Qe,
  salesforce_get_lead: Xe,
  salesforce_get_note: Ze,
  salesforce_get_opportunity: $e,
  salesforce_get_report: es,
  salesforce_get_report_instance: ss,
  salesforce_get_user_info: ts,
  salesforce_list_dashboards: rs,
  salesforce_list_email_templates: is,
  salesforce_list_object_properties: ns,
  salesforce_list_reports: ps,
  salesforce_log_call: os,
  salesforce_log_email_activity: as,
  salesforce_mass_transfer_ownership: ms,
  salesforce_remove_from_campaign: ls,
  salesforce_retrieve_lead_by_id: us,
  salesforce_retrieve_opportunities_data: ys,
  salesforce_retrieve_specific_contact_by_id: ds,
  salesforce_run_report: fs,
  salesforce_run_soql_query: cs,
  salesforce_search_accounts: gs,
  salesforce_search_campaigns: hs,
  salesforce_search_contacts: bs,
  salesforce_search_leads: Ps,
  salesforce_search_notes: ws,
  salesforce_search_opportunities: ks,
  salesforce_search_tasks: vs,
  salesforce_send_email: _s,
  salesforce_send_email_from_template: Is,
  salesforce_send_mass_email: Ds,
  salesforce_update_account: Ns,
  salesforce_update_campaign: As,
  salesforce_update_contact: js,
  salesforce_update_lead: qs,
  salesforce_update_note: Ts,
  salesforce_update_opportunity: Ss,
  salesforce_update_task: xs,
};
exports.NATIVE_TOOL_VALIDATORS = st;
exports.validate_salesforce_add_contact_to_campaign = De;
exports.validate_salesforce_add_lead_to_campaign = Ne;
exports.validate_salesforce_add_opportunity_line_item = Ae;
exports.validate_salesforce_apply_lead_assignment_rules = je;
exports.validate_salesforce_associate_contact_to_account = qe;
exports.validate_salesforce_clone_opportunity_with_products = Te;
exports.validate_salesforce_clone_record = Se;
exports.validate_salesforce_complete_task = xe;
exports.validate_salesforce_create_account = Ce;
exports.validate_salesforce_create_campaign = Ee;
exports.validate_salesforce_create_contact = Oe;
exports.validate_salesforce_create_event = Re;
exports.validate_salesforce_create_lead = Ue;
exports.validate_salesforce_create_note = Me;
exports.validate_salesforce_create_opportunity = We;
exports.validate_salesforce_create_task = Be;
exports.validate_salesforce_delete_account = Fe;
exports.validate_salesforce_delete_campaign = Le;
exports.validate_salesforce_delete_contact = Ve;
exports.validate_salesforce_delete_lead = He;
exports.validate_salesforce_delete_note = ze;
exports.validate_salesforce_delete_opportunity = Ye;
exports.validate_salesforce_get_account = Ge;
exports.validate_salesforce_get_campaign = Je;
exports.validate_salesforce_get_contact = Ke;
exports.validate_salesforce_get_dashboard = Qe;
exports.validate_salesforce_get_lead = Xe;
exports.validate_salesforce_get_note = Ze;
exports.validate_salesforce_get_opportunity = $e;
exports.validate_salesforce_get_report = es;
exports.validate_salesforce_get_report_instance = ss;
exports.validate_salesforce_get_user_info = ts;
exports.validate_salesforce_list_dashboards = rs;
exports.validate_salesforce_list_email_templates = is;
exports.validate_salesforce_list_object_properties = ns;
exports.validate_salesforce_list_reports = ps;
exports.validate_salesforce_log_call = os;
exports.validate_salesforce_log_email_activity = as;
exports.validate_salesforce_mass_transfer_ownership = ms;
exports.validate_salesforce_remove_from_campaign = ls;
exports.validate_salesforce_retrieve_lead_by_id = us;
exports.validate_salesforce_retrieve_opportunities_data = ys;
exports.validate_salesforce_retrieve_specific_contact_by_id = ds;
exports.validate_salesforce_run_report = fs;
exports.validate_salesforce_run_soql_query = cs;
exports.validate_salesforce_search_accounts = gs;
exports.validate_salesforce_search_campaigns = hs;
exports.validate_salesforce_search_contacts = bs;
exports.validate_salesforce_search_leads = Ps;
exports.validate_salesforce_search_notes = ws;
exports.validate_salesforce_search_opportunities = ks;
exports.validate_salesforce_search_tasks = vs;
exports.validate_salesforce_send_email = _s;
exports.validate_salesforce_send_email_from_template = Is;
exports.validate_salesforce_send_mass_email = Ds;
exports.validate_salesforce_update_account = Ns;
exports.validate_salesforce_update_campaign = As;
exports.validate_salesforce_update_contact = js;
exports.validate_salesforce_update_lead = qs;
exports.validate_salesforce_update_note = Ts;
exports.validate_salesforce_update_opportunity = Ss;
exports.validate_salesforce_update_task = xs;
