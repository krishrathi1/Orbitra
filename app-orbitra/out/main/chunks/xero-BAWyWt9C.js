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
      n = new r.Error().stack;
    n &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[n] = "a9bb89b5-694c-438a-8d3e-1c1cd2051837"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-a9bb89b5-694c-438a-8d3e-1c1cd2051837"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const T = d;
function d(
  r,
  {
    instancePath: n = "",
    parentData: u,
    parentDataProperty: l,
    rootData: c = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = d.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const e in r)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "searchTerm" ||
          e === "isCustomer" ||
          e === "isSupplier" ||
          e === "page" ||
          e === "pageSize"
        )
      ) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.start !== void 0) {
      let e = r.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let e = r.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const e = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.searchTerm !== void 0 && typeof r.searchTerm != "string") {
      const e = {
        instancePath: n + "/searchTerm",
        schemaPath: "#/properties/searchTerm/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.isCustomer !== void 0 && typeof r.isCustomer != "boolean") {
      const e = {
        instancePath: n + "/isCustomer",
        schemaPath: "#/properties/isCustomer/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.isSupplier !== void 0 && typeof r.isSupplier != "boolean") {
      const e = {
        instancePath: n + "/isSupplier",
        schemaPath: "#/properties/isSupplier/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.page !== void 0) {
      let e = r.page;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.pageSize !== void 0) {
      let e = r.pageSize;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/pageSize",
          schemaPath: "#/properties/pageSize/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 100 || isNaN(e)) {
          const t = {
            instancePath: n + "/pageSize",
            schemaPath: "#/properties/pageSize/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/pageSize",
            schemaPath: "#/properties/pageSize/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((d.errors = s), i === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = h,
  L = new RegExp(
    "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
    "u",
  );
function h(
  r,
  {
    instancePath: n = "",
    parentData: u,
    parentDataProperty: l,
    rootData: c = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = h.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.name === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in r)
      if (
        !(
          e === "name" ||
          e === "emailAddress" ||
          e === "firstName" ||
          e === "lastName" ||
          e === "phone" ||
          e === "isCustomer" ||
          e === "isSupplier" ||
          e === "confirm"
        )
      ) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.name !== void 0 && typeof r.name != "string") {
      const e = {
        instancePath: n + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.emailAddress !== void 0) {
      let e = r.emailAddress;
      if (typeof e == "string") {
        if (!L.test(e)) {
          const t = {
            instancePath: n + "/emailAddress",
            schemaPath: "#/properties/emailAddress/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
            },
            message: `must match pattern "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$"`,
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/emailAddress",
          schemaPath: "#/properties/emailAddress/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    }
    if (r.firstName !== void 0 && typeof r.firstName != "string") {
      const e = {
        instancePath: n + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.lastName !== void 0 && typeof r.lastName != "string") {
      const e = {
        instancePath: n + "/lastName",
        schemaPath: "#/properties/lastName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.phone !== void 0 && typeof r.phone != "string") {
      const e = {
        instancePath: n + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.isCustomer !== void 0 && typeof r.isCustomer != "boolean") {
      const e = {
        instancePath: n + "/isCustomer",
        schemaPath: "#/properties/isCustomer/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.isSupplier !== void 0 && typeof r.isSupplier != "boolean") {
      const e = {
        instancePath: n + "/isSupplier",
        schemaPath: "#/properties/isSupplier/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.confirm !== void 0 && r.confirm !== !0) {
      const e = {
        instancePath: n + "/confirm",
        schemaPath: "#/properties/confirm/const",
        keyword: "const",
        params: { allowedValue: !0 },
        message: "must be equal to constant",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((h.errors = s), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const x = g,
  _ = {
    properties: {
      status: { enum: ["DRAFT", "SUBMITTED", "AUTHORISED", "PAID", "VOIDED"] },
      type: { enum: ["ACCREC", "ACCPAY"] },
    },
  };
function g(
  r,
  {
    instancePath: n = "",
    parentData: u,
    parentDataProperty: l,
    rootData: c = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = g.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const e in r)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "status" ||
          e === "type" ||
          e === "contactId" ||
          e === "page" ||
          e === "pageSize"
        )
      ) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.start !== void 0) {
      let e = r.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let e = r.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const e = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.status !== void 0) {
      let e = r.status;
      if (typeof e != "string") {
        const t = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (
        !(
          e === "DRAFT" ||
          e === "SUBMITTED" ||
          e === "AUTHORISED" ||
          e === "PAID" ||
          e === "VOIDED"
        )
      ) {
        const t = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: _.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    }
    if (r.type !== void 0) {
      let e = r.type;
      if (typeof e != "string") {
        const t = {
          instancePath: n + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (!(e === "ACCREC" || e === "ACCPAY")) {
        const t = {
          instancePath: n + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: _.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    }
    if (r.contactId !== void 0 && typeof r.contactId != "string") {
      const e = {
        instancePath: n + "/contactId",
        schemaPath: "#/properties/contactId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.page !== void 0) {
      let e = r.page;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.pageSize !== void 0) {
      let e = r.pageSize;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/pageSize",
          schemaPath: "#/properties/pageSize/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 100 || isNaN(e)) {
          const t = {
            instancePath: n + "/pageSize",
            schemaPath: "#/properties/pageSize/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/pageSize",
            schemaPath: "#/properties/pageSize/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((g.errors = s), i === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = b;
function b(
  r,
  {
    instancePath: n = "",
    parentData: u,
    parentDataProperty: l,
    rootData: c = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = b.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.invoiceId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "invoiceId" },
        message: "must have required property 'invoiceId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in r)
      if (e !== "invoiceId") {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.invoiceId !== void 0 && typeof r.invoiceId != "string") {
      const e = {
        instancePath: n + "/invoiceId",
        schemaPath: "#/properties/invoiceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((b.errors = s), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = P,
  D = {
    properties: {
      type: { enum: ["ACCREC", "ACCPAY"] },
      status: { enum: ["DRAFT", "SUBMITTED", "AUTHORISED"] },
    },
  };
function P(
  r,
  {
    instancePath: n = "",
    parentData: u,
    parentDataProperty: l,
    rootData: c = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = P.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.type === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "type" },
        message: "must have required property 'type'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.contactId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "contactId" },
        message: "must have required property 'contactId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.lineItems === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "lineItems" },
        message: "must have required property 'lineItems'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in r)
      if (
        !(
          e === "type" ||
          e === "contactId" ||
          e === "lineItems" ||
          e === "dueDate" ||
          e === "invoiceNumber" ||
          e === "reference" ||
          e === "status" ||
          e === "confirm"
        )
      ) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.type !== void 0) {
      let e = r.type;
      if (typeof e != "string") {
        const t = {
          instancePath: n + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (!(e === "ACCREC" || e === "ACCPAY")) {
        const t = {
          instancePath: n + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: D.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    }
    if (r.contactId !== void 0 && typeof r.contactId != "string") {
      const e = {
        instancePath: n + "/contactId",
        schemaPath: "#/properties/contactId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.lineItems !== void 0) {
      let e = r.lineItems;
      if (Array.isArray(e)) {
        if (e.length < 1) {
          const p = {
            instancePath: n + "/lineItems",
            schemaPath: "#/properties/lineItems/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (s === null ? (s = [p]) : s.push(p), i++);
        }
        const t = e.length;
        for (let p = 0; p < t; p++) {
          let m = e[p];
          if (m && typeof m == "object" && !Array.isArray(m)) {
            if (m.description === void 0) {
              const o = {
                instancePath: n + "/lineItems/" + p,
                schemaPath: "#/properties/lineItems/items/required",
                keyword: "required",
                params: { missingProperty: "description" },
                message: "must have required property 'description'",
              };
              (s === null ? (s = [o]) : s.push(o), i++);
            }
            if (m.unitAmount === void 0) {
              const o = {
                instancePath: n + "/lineItems/" + p,
                schemaPath: "#/properties/lineItems/items/required",
                keyword: "required",
                params: { missingProperty: "unitAmount" },
                message: "must have required property 'unitAmount'",
              };
              (s === null ? (s = [o]) : s.push(o), i++);
            }
            if (m.description !== void 0 && typeof m.description != "string") {
              const o = {
                instancePath: n + "/lineItems/" + p + "/description",
                schemaPath:
                  "#/properties/lineItems/items/properties/description/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (s === null ? (s = [o]) : s.push(o), i++);
            }
            if (m.quantity !== void 0) {
              let o = m.quantity;
              if (typeof o == "number") {
                if (o < 5e-324 || isNaN(o)) {
                  const y = {
                    instancePath: n + "/lineItems/" + p + "/quantity",
                    schemaPath:
                      "#/properties/lineItems/items/properties/quantity/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: 5e-324 },
                    message: "must be >= 5e-324",
                  };
                  (s === null ? (s = [y]) : s.push(y), i++);
                }
              } else {
                const y = {
                  instancePath: n + "/lineItems/" + p + "/quantity",
                  schemaPath:
                    "#/properties/lineItems/items/properties/quantity/type",
                  keyword: "type",
                  params: { type: "number" },
                  message: "must be number",
                };
                (s === null ? (s = [y]) : s.push(y), i++);
              }
            }
            if (m.unitAmount !== void 0 && typeof m.unitAmount != "number") {
              const o = {
                instancePath: n + "/lineItems/" + p + "/unitAmount",
                schemaPath:
                  "#/properties/lineItems/items/properties/unitAmount/type",
                keyword: "type",
                params: { type: "number" },
                message: "must be number",
              };
              (s === null ? (s = [o]) : s.push(o), i++);
            }
            if (m.accountCode !== void 0 && typeof m.accountCode != "string") {
              const o = {
                instancePath: n + "/lineItems/" + p + "/accountCode",
                schemaPath:
                  "#/properties/lineItems/items/properties/accountCode/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (s === null ? (s = [o]) : s.push(o), i++);
            }
          } else {
            const o = {
              instancePath: n + "/lineItems/" + p,
              schemaPath: "#/properties/lineItems/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (s === null ? (s = [o]) : s.push(o), i++);
          }
        }
      } else {
        const t = {
          instancePath: n + "/lineItems",
          schemaPath: "#/properties/lineItems/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    }
    if (r.dueDate !== void 0 && typeof r.dueDate != "string") {
      const e = {
        instancePath: n + "/dueDate",
        schemaPath: "#/properties/dueDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.invoiceNumber !== void 0 && typeof r.invoiceNumber != "string") {
      const e = {
        instancePath: n + "/invoiceNumber",
        schemaPath: "#/properties/invoiceNumber/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.reference !== void 0 && typeof r.reference != "string") {
      const e = {
        instancePath: n + "/reference",
        schemaPath: "#/properties/reference/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.status !== void 0) {
      let e = r.status;
      if (typeof e != "string") {
        const t = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (!(e === "DRAFT" || e === "SUBMITTED" || e === "AUTHORISED")) {
        const t = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: D.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    }
    if (r.confirm !== void 0 && r.confirm !== !0) {
      const e = {
        instancePath: n + "/confirm",
        schemaPath: "#/properties/confirm/const",
        keyword: "const",
        params: { allowedValue: !0 },
        message: "must be equal to constant",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((P.errors = s), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const q = v,
  E = {
    properties: {
      type: {
        enum: [
          "BANK",
          "CURRENT",
          "CURRLIAB",
          "DEPRECIATN",
          "DIRECTCOSTS",
          "EQUITY",
          "EXPENSE",
          "FIXED",
          "INVENTORY",
          "LIABILITY",
          "NONCURRENT",
          "OTHERINCOME",
          "OVERHEADS",
          "PREPAYMENT",
          "REVENUE",
          "SALES",
          "TERMLIAB",
          "PAYGLIABILITY",
        ],
      },
      status: { enum: ["ACTIVE", "ARCHIVED"] },
    },
  };
function v(
  r,
  {
    instancePath: n = "",
    parentData: u,
    parentDataProperty: l,
    rootData: c = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = v.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const e in r)
      if (!(e === "type" || e === "status")) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.type !== void 0) {
      let e = r.type;
      if (typeof e != "string") {
        const t = {
          instancePath: n + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (
        !(
          e === "BANK" ||
          e === "CURRENT" ||
          e === "CURRLIAB" ||
          e === "DEPRECIATN" ||
          e === "DIRECTCOSTS" ||
          e === "EQUITY" ||
          e === "EXPENSE" ||
          e === "FIXED" ||
          e === "INVENTORY" ||
          e === "LIABILITY" ||
          e === "NONCURRENT" ||
          e === "OTHERINCOME" ||
          e === "OVERHEADS" ||
          e === "PREPAYMENT" ||
          e === "REVENUE" ||
          e === "SALES" ||
          e === "TERMLIAB" ||
          e === "PAYGLIABILITY"
        )
      ) {
        const t = {
          instancePath: n + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: E.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    }
    if (r.status !== void 0) {
      let e = r.status;
      if (typeof e != "string") {
        const t = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (!(e === "ACTIVE" || e === "ARCHIVED")) {
        const t = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: E.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((v.errors = s), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const O = I;
function I(
  r,
  {
    instancePath: n = "",
    parentData: u,
    parentDataProperty: l,
    rootData: c = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = I.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  )
    for (const e in r) {
      const t = {
        instancePath: n,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e },
        message: "must NOT have additional properties",
      };
      (s === null ? (s = [t]) : s.push(t), i++);
    }
  else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((I.errors = s), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = w,
  Y = {
    properties: {
      status: {
        enum: ["DRAFT", "SUBMITTED", "AUTHORISED", "DELETED", "VOIDED", "PAID"],
      },
    },
  };
function w(
  r,
  {
    instancePath: n = "",
    parentData: u,
    parentDataProperty: l,
    rootData: c = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = w.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.invoiceId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "invoiceId" },
        message: "must have required property 'invoiceId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in r)
      if (
        !(
          e === "invoiceId" ||
          e === "status" ||
          e === "reference" ||
          e === "dueDate" ||
          e === "invoiceNumber" ||
          e === "confirm"
        )
      ) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.invoiceId !== void 0 && typeof r.invoiceId != "string") {
      const e = {
        instancePath: n + "/invoiceId",
        schemaPath: "#/properties/invoiceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.status !== void 0) {
      let e = r.status;
      if (typeof e != "string") {
        const t = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (
        !(
          e === "DRAFT" ||
          e === "SUBMITTED" ||
          e === "AUTHORISED" ||
          e === "DELETED" ||
          e === "VOIDED" ||
          e === "PAID"
        )
      ) {
        const t = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: Y.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    }
    if (r.reference !== void 0 && typeof r.reference != "string") {
      const e = {
        instancePath: n + "/reference",
        schemaPath: "#/properties/reference/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.dueDate !== void 0 && typeof r.dueDate != "string") {
      const e = {
        instancePath: n + "/dueDate",
        schemaPath: "#/properties/dueDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.invoiceNumber !== void 0 && typeof r.invoiceNumber != "string") {
      const e = {
        instancePath: n + "/invoiceNumber",
        schemaPath: "#/properties/invoiceNumber/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.confirm !== void 0 && r.confirm !== !0) {
      const e = {
        instancePath: n + "/confirm",
        schemaPath: "#/properties/confirm/const",
        keyword: "const",
        params: { allowedValue: !0 },
        message: "must be equal to constant",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((w.errors = s), i === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = k;
function k(
  r,
  {
    instancePath: n = "",
    parentData: u,
    parentDataProperty: l,
    rootData: c = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = k.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  )
    for (const e in r) {
      const t = {
        instancePath: n,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e },
        message: "must NOT have additional properties",
      };
      (s === null ? (s = [t]) : s.push(t), i++);
    }
  else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((k.errors = s), i === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = A;
function A(
  r,
  {
    instancePath: n = "",
    parentData: u,
    parentDataProperty: l,
    rootData: c = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = A.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.invoiceId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "invoiceId" },
        message: "must have required property 'invoiceId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.accountId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "accountId" },
        message: "must have required property 'accountId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.amount === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "amount" },
        message: "must have required property 'amount'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in r)
      if (
        !(
          e === "invoiceId" ||
          e === "accountId" ||
          e === "amount" ||
          e === "date" ||
          e === "reference" ||
          e === "confirm"
        )
      ) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.invoiceId !== void 0 && typeof r.invoiceId != "string") {
      const e = {
        instancePath: n + "/invoiceId",
        schemaPath: "#/properties/invoiceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const e = {
        instancePath: n + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.amount !== void 0 && typeof r.amount != "number") {
      const e = {
        instancePath: n + "/amount",
        schemaPath: "#/properties/amount/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.date !== void 0 && typeof r.date != "string") {
      const e = {
        instancePath: n + "/date",
        schemaPath: "#/properties/date/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.reference !== void 0 && typeof r.reference != "string") {
      const e = {
        instancePath: n + "/reference",
        schemaPath: "#/properties/reference/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.confirm !== void 0 && r.confirm !== !0) {
      const e = {
        instancePath: n + "/confirm",
        schemaPath: "#/properties/confirm/const",
        keyword: "const",
        params: { allowedValue: !0 },
        message: "must be equal to constant",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((A.errors = s), i === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const U = N;
function N(
  r,
  {
    instancePath: n = "",
    parentData: u,
    parentDataProperty: l,
    rootData: c = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = N.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const e in r)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "page" ||
          e === "pageSize"
        )
      ) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.start !== void 0) {
      let e = r.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let e = r.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const e = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.page !== void 0 && typeof r.page != "number") {
      const e = {
        instancePath: n + "/page",
        schemaPath: "#/properties/page/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.pageSize !== void 0 && typeof r.pageSize != "number") {
      const e = {
        instancePath: n + "/pageSize",
        schemaPath: "#/properties/pageSize/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((N.errors = s), i === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = {
  xero_list_contacts: T,
  xero_create_contact: S,
  xero_list_invoices: x,
  xero_get_invoice: C,
  xero_create_invoice: R,
  xero_list_accounts: q,
  xero_get_organisation: O,
  xero_update_invoice: z,
  xero_list_items: j,
  xero_create_payment: V,
  xero_list_bank_transactions: U,
};
exports.NATIVE_TOOL_VALIDATORS = B;
exports.validate_xero_create_contact = S;
exports.validate_xero_create_invoice = R;
exports.validate_xero_create_payment = V;
exports.validate_xero_get_invoice = C;
exports.validate_xero_get_organisation = O;
exports.validate_xero_list_accounts = q;
exports.validate_xero_list_bank_transactions = U;
exports.validate_xero_list_contacts = T;
exports.validate_xero_list_invoices = x;
exports.validate_xero_list_items = j;
exports.validate_xero_update_invoice = z;
