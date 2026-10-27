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
      t = new r.Error().stack;
    t &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[t] = "7c8e907d-03e3-47b0-95e5-11b030482913"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-7c8e907d-03e3-47b0-95e5-11b030482913"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const c = o;
function o(
  r,
  {
    instancePath: t = "",
    parentData: u,
    parentDataProperty: m,
    rootData: f = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    s = 0;
  const n = o.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.email === void 0) {
      const i = {
        instancePath: t,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "email" },
        message: "must have required property 'email'",
      };
      (e === null ? (e = [i]) : e.push(i), s++);
    }
    for (const i in r)
      if (i !== "email") {
        const a = {
          instancePath: t,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), s++);
      }
    if (r.email !== void 0 && typeof r.email != "string") {
      const i = {
        instancePath: t + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), s++);
    }
  } else {
    const i = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), s++);
  }
  return ((o.errors = e), s === 0);
}
o.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const h = l;
function l(
  r,
  {
    instancePath: t = "",
    parentData: u,
    parentDataProperty: m,
    rootData: f = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    s = 0;
  const n = l.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const i in r)
      if (!(i === "email" || i === "linkedinHandle")) {
        const a = {
          instancePath: t,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), s++);
      }
    if (r.email !== void 0 && typeof r.email != "string") {
      const i = {
        instancePath: t + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), s++);
    }
    if (r.linkedinHandle !== void 0 && typeof r.linkedinHandle != "string") {
      const i = {
        instancePath: t + "/linkedinHandle",
        schemaPath: "#/properties/linkedinHandle/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), s++);
    }
  } else {
    const i = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), s++);
  }
  return ((l.errors = e), s === 0);
}
l.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const g = d;
function d(
  r,
  {
    instancePath: t = "",
    parentData: u,
    parentDataProperty: m,
    rootData: f = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    s = 0;
  const n = d.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.domain === void 0) {
      const i = {
        instancePath: t,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "domain" },
        message: "must have required property 'domain'",
      };
      (e === null ? (e = [i]) : e.push(i), s++);
    }
    for (const i in r)
      if (i !== "domain") {
        const a = {
          instancePath: t,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), s++);
      }
    if (r.domain !== void 0 && typeof r.domain != "string") {
      const i = {
        instancePath: t + "/domain",
        schemaPath: "#/properties/domain/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), s++);
    }
  } else {
    const i = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), s++);
  }
  return ((d.errors = e), s === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const v = p;
function p(
  r,
  {
    instancePath: t = "",
    parentData: u,
    parentDataProperty: m,
    rootData: f = r,
    dynamicAnchors: y = {},
  } = {},
) {
  let e = null,
    s = 0;
  const n = p.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  )
    for (const i in r) {
      const a = {
        instancePath: t,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: i },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [a]) : e.push(a), s++);
    }
  else {
    const i = {
      instancePath: t,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), s++);
  }
  return ((p.errors = e), s === 0);
}
p.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const b = {
  hunter_email_verifier: c,
  hunter_people_find: h,
  hunter_companies_find: g,
  hunter_account: v,
};
exports.NATIVE_TOOL_VALIDATORS = b;
exports.validate_hunter_account = v;
exports.validate_hunter_companies_find = g;
exports.validate_hunter_email_verifier = c;
exports.validate_hunter_people_find = h;
