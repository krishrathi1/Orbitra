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
      (r._sentryDebugIds[n] = "09f50d55-5b1e-4771-a707-b8cfbdd9b86c"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-09f50d55-5b1e-4771-a707-b8cfbdd9b86c"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const k = c;
function c(
  r,
  {
    instancePath: n = "",
    parentData: l,
    parentDataProperty: y,
    rootData: u = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let e = null,
    a = 0;
  const m = c.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "email" ||
          s === "linkedinUrl" ||
          s === "fullName" ||
          s === "firstName" ||
          s === "lastName" ||
          s === "company" ||
          s === "domain"
        )
      ) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    if (r.email !== void 0 && typeof r.email != "string") {
      const s = {
        instancePath: n + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), a++);
    }
    if (r.linkedinUrl !== void 0 && typeof r.linkedinUrl != "string") {
      const s = {
        instancePath: n + "/linkedinUrl",
        schemaPath: "#/properties/linkedinUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), a++);
    }
    if (r.fullName !== void 0 && typeof r.fullName != "string") {
      const s = {
        instancePath: n + "/fullName",
        schemaPath: "#/properties/fullName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), a++);
    }
    if (r.firstName !== void 0 && typeof r.firstName != "string") {
      const s = {
        instancePath: n + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), a++);
    }
    if (r.lastName !== void 0 && typeof r.lastName != "string") {
      const s = {
        instancePath: n + "/lastName",
        schemaPath: "#/properties/lastName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), a++);
    }
    if (r.company !== void 0 && typeof r.company != "string") {
      const s = {
        instancePath: n + "/company",
        schemaPath: "#/properties/company/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), a++);
    }
    if (r.domain !== void 0 && typeof r.domain != "string") {
      const s = {
        instancePath: n + "/domain",
        schemaPath: "#/properties/domain/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), a++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), a++);
  }
  return ((c.errors = e), a === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const w = d;
function d(
  r,
  {
    instancePath: n = "",
    parentData: l,
    parentDataProperty: y,
    rootData: u = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let e = null,
    a = 0;
  const m = d.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!(s === "company" || s === "domain")) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    if (r.company !== void 0 && typeof r.company != "string") {
      const s = {
        instancePath: n + "/company",
        schemaPath: "#/properties/company/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), a++);
    }
    if (r.domain !== void 0 && typeof r.domain != "string") {
      const s = {
        instancePath: n + "/domain",
        schemaPath: "#/properties/domain/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), a++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), a++);
  }
  return ((d.errors = e), a === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const v = h;
function h(
  r,
  {
    instancePath: n = "",
    parentData: l,
    parentDataProperty: y,
    rootData: u = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let e = null,
    a = 0;
  const m = h.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!(s === "contacts" || s === "companies")) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    if (r.contacts !== void 0) {
      let s = r.contacts;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let i = 0; i < t; i++) {
          let p = s[i];
          if (p && typeof p == "object" && !Array.isArray(p)) {
            if (p.contactId !== void 0 && typeof p.contactId != "string") {
              const o = {
                instancePath: n + "/contacts/" + i + "/contactId",
                schemaPath:
                  "#/properties/contacts/items/properties/contactId/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), a++);
            }
            if (p.email !== void 0 && typeof p.email != "string") {
              const o = {
                instancePath: n + "/contacts/" + i + "/email",
                schemaPath: "#/properties/contacts/items/properties/email/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), a++);
            }
            if (p.linkedinUrl !== void 0 && typeof p.linkedinUrl != "string") {
              const o = {
                instancePath: n + "/contacts/" + i + "/linkedinUrl",
                schemaPath:
                  "#/properties/contacts/items/properties/linkedinUrl/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), a++);
            }
            if (p.fullName !== void 0 && typeof p.fullName != "string") {
              const o = {
                instancePath: n + "/contacts/" + i + "/fullName",
                schemaPath:
                  "#/properties/contacts/items/properties/fullName/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), a++);
            }
            if (p.firstName !== void 0 && typeof p.firstName != "string") {
              const o = {
                instancePath: n + "/contacts/" + i + "/firstName",
                schemaPath:
                  "#/properties/contacts/items/properties/firstName/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), a++);
            }
            if (p.lastName !== void 0 && typeof p.lastName != "string") {
              const o = {
                instancePath: n + "/contacts/" + i + "/lastName",
                schemaPath:
                  "#/properties/contacts/items/properties/lastName/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), a++);
            }
            if (p.company !== void 0 && typeof p.company != "string") {
              const o = {
                instancePath: n + "/contacts/" + i + "/company",
                schemaPath:
                  "#/properties/contacts/items/properties/company/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), a++);
            }
            if (p.domain !== void 0 && typeof p.domain != "string") {
              const o = {
                instancePath: n + "/contacts/" + i + "/domain",
                schemaPath:
                  "#/properties/contacts/items/properties/domain/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), a++);
            }
          } else {
            const o = {
              instancePath: n + "/contacts/" + i,
              schemaPath: "#/properties/contacts/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [o]) : e.push(o), a++);
          }
        }
      } else {
        const t = {
          instancePath: n + "/contacts",
          schemaPath: "#/properties/contacts/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
    if (r.companies !== void 0) {
      let s = r.companies;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let i = 0; i < t; i++) {
          let p = s[i];
          if (p && typeof p == "object" && !Array.isArray(p)) {
            if (p.id !== void 0 && typeof p.id != "string") {
              const o = {
                instancePath: n + "/companies/" + i + "/id",
                schemaPath: "#/properties/companies/items/properties/id/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), a++);
            }
            if (p.name !== void 0 && typeof p.name != "string") {
              const o = {
                instancePath: n + "/companies/" + i + "/name",
                schemaPath: "#/properties/companies/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), a++);
            }
            if (p.domain !== void 0 && typeof p.domain != "string") {
              const o = {
                instancePath: n + "/companies/" + i + "/domain",
                schemaPath:
                  "#/properties/companies/items/properties/domain/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), a++);
            }
            if (p.fqdn !== void 0 && typeof p.fqdn != "string") {
              const o = {
                instancePath: n + "/companies/" + i + "/fqdn",
                schemaPath: "#/properties/companies/items/properties/fqdn/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [o]) : e.push(o), a++);
            }
          } else {
            const o = {
              instancePath: n + "/companies/" + i,
              schemaPath: "#/properties/companies/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [o]) : e.push(o), a++);
          }
        }
      } else {
        const t = {
          instancePath: n + "/companies",
          schemaPath: "#/properties/companies/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), a++);
  }
  return ((h.errors = e), a === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _ = g,
  P = {
    properties: {
      titles: { type: "array", items: { type: "string" } },
      departments: { type: "array", items: { type: "string" } },
      seniorities: { type: "array", items: { type: "string" } },
      locations: { type: "array", items: { type: "string" } },
      existingDataPoints: {
        type: "array",
        items: { enum: ["phone", "email", "work_email"], type: "string" },
      },
      names: { type: "array", items: { type: "string" } },
      domains: { type: "array", items: { type: "string" } },
      industries: { type: "array", items: { type: "string" } },
      sizes: { type: "array", items: { type: "string" } },
      revenues: { type: "array", items: { type: "string" } },
      page: { type: "number", minimum: 0 },
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
    },
  },
  N = Object.prototype.hasOwnProperty;
function g(
  r,
  {
    instancePath: n = "",
    parentData: l,
    parentDataProperty: y,
    rootData: u = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let e = null,
    a = 0;
  const m = g.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!N.call(P.properties, s)) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    if (r.titles !== void 0) {
      let s = r.titles;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let i = 0; i < t; i++)
          if (typeof s[i] != "string") {
            const p = {
              instancePath: n + "/titles/" + i,
              schemaPath: "#/properties/titles/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), a++);
          }
      } else {
        const t = {
          instancePath: n + "/titles",
          schemaPath: "#/properties/titles/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
    if (r.departments !== void 0) {
      let s = r.departments;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let i = 0; i < t; i++)
          if (typeof s[i] != "string") {
            const p = {
              instancePath: n + "/departments/" + i,
              schemaPath: "#/properties/departments/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), a++);
          }
      } else {
        const t = {
          instancePath: n + "/departments",
          schemaPath: "#/properties/departments/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
    if (r.seniorities !== void 0) {
      let s = r.seniorities;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let i = 0; i < t; i++)
          if (typeof s[i] != "string") {
            const p = {
              instancePath: n + "/seniorities/" + i,
              schemaPath: "#/properties/seniorities/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), a++);
          }
      } else {
        const t = {
          instancePath: n + "/seniorities",
          schemaPath: "#/properties/seniorities/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
    if (r.locations !== void 0) {
      let s = r.locations;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let i = 0; i < t; i++)
          if (typeof s[i] != "string") {
            const p = {
              instancePath: n + "/locations/" + i,
              schemaPath: "#/properties/locations/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), a++);
          }
      } else {
        const t = {
          instancePath: n + "/locations",
          schemaPath: "#/properties/locations/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
    if (r.existingDataPoints !== void 0) {
      let s = r.existingDataPoints;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let i = 0; i < t; i++) {
          let p = s[i];
          if (typeof p != "string") {
            const o = {
              instancePath: n + "/existingDataPoints/" + i,
              schemaPath: "#/properties/existingDataPoints/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), a++);
          }
          if (!(p === "phone" || p === "email" || p === "work_email")) {
            const o = {
              instancePath: n + "/existingDataPoints/" + i,
              schemaPath: "#/properties/existingDataPoints/items/enum",
              keyword: "enum",
              params: {
                allowedValues: P.properties.existingDataPoints.items.enum,
              },
              message: "must be equal to one of the allowed values",
            };
            (e === null ? (e = [o]) : e.push(o), a++);
          }
        }
      } else {
        const t = {
          instancePath: n + "/existingDataPoints",
          schemaPath: "#/properties/existingDataPoints/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
    if (r.names !== void 0) {
      let s = r.names;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let i = 0; i < t; i++)
          if (typeof s[i] != "string") {
            const p = {
              instancePath: n + "/names/" + i,
              schemaPath: "#/properties/names/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), a++);
          }
      } else {
        const t = {
          instancePath: n + "/names",
          schemaPath: "#/properties/names/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
    if (r.domains !== void 0) {
      let s = r.domains;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let i = 0; i < t; i++)
          if (typeof s[i] != "string") {
            const p = {
              instancePath: n + "/domains/" + i,
              schemaPath: "#/properties/domains/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), a++);
          }
      } else {
        const t = {
          instancePath: n + "/domains",
          schemaPath: "#/properties/domains/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
    if (r.industries !== void 0) {
      let s = r.industries;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let i = 0; i < t; i++)
          if (typeof s[i] != "string") {
            const p = {
              instancePath: n + "/industries/" + i,
              schemaPath: "#/properties/industries/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), a++);
          }
      } else {
        const t = {
          instancePath: n + "/industries",
          schemaPath: "#/properties/industries/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
    if (r.sizes !== void 0) {
      let s = r.sizes;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let i = 0; i < t; i++)
          if (typeof s[i] != "string") {
            const p = {
              instancePath: n + "/sizes/" + i,
              schemaPath: "#/properties/sizes/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), a++);
          }
      } else {
        const t = {
          instancePath: n + "/sizes",
          schemaPath: "#/properties/sizes/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
    if (r.revenues !== void 0) {
      let s = r.revenues;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let i = 0; i < t; i++)
          if (typeof s[i] != "string") {
            const p = {
              instancePath: n + "/revenues/" + i,
              schemaPath: "#/properties/revenues/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), a++);
          }
      } else {
        const t = {
          instancePath: n + "/revenues",
          schemaPath: "#/properties/revenues/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
    if (r.page !== void 0) {
      let s = r.page;
      if (typeof s == "number") {
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: n + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), a++);
        }
      } else {
        const t = {
          instancePath: n + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
    }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: n + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), a++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), a++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), a++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const s = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), a++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), a++);
  }
  return ((g.errors = e), a === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const A = b;
function b(
  r,
  {
    instancePath: n = "",
    parentData: l,
    parentDataProperty: y,
    rootData: u = r,
    dynamicAnchors: f = {},
  } = {},
) {
  let e = null,
    a = 0;
  const m = b.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  )
    for (const s in r) {
      const t = {
        instancePath: n,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: s },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [t]) : e.push(t), a++);
    }
  else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), a++);
  }
  return ((b.errors = e), a === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const D = {
  lusha_enrich_person: k,
  lusha_enrich_company: w,
  lusha_bulk_enrich: v,
  lusha_search_people: _,
  lusha_get_credits: A,
};
exports.NATIVE_TOOL_VALIDATORS = D;
exports.validate_lusha_bulk_enrich = v;
exports.validate_lusha_enrich_company = w;
exports.validate_lusha_enrich_person = k;
exports.validate_lusha_get_credits = A;
exports.validate_lusha_search_people = _;
