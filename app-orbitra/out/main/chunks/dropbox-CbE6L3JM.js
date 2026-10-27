"use strict";
(function () {
  try {
    var s =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    s.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var s =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      i = new s.Error().stack;
    i &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[i] = "aee3b3ce-93af-4223-ab23-cf3e8659bcd6"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-aee3b3ce-93af-4223-ab23-cf3e8659bcd6"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const D = c;
function c(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = c.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.fromPath === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fromPath" },
        message: "must have required property 'fromPath'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.toPath === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "toPath" },
        message: "must have required property 'toPath'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "fromPath" ||
          r === "toPath" ||
          r === "autorename"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.fromPath !== void 0 && typeof s.fromPath != "string") {
      const r = {
        instancePath: i + "/fromPath",
        schemaPath: "#/properties/fromPath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.toPath !== void 0 && typeof s.toPath != "string") {
      const r = {
        instancePath: i + "/toPath",
        schemaPath: "#/properties/toPath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.autorename !== void 0 && typeof s.autorename != "boolean") {
      const r = {
        instancePath: i + "/autorename",
        schemaPath: "#/properties/autorename/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((c.errors = e), t === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = f;
function f(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = f.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "path" || r === "autorename")) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: i + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.autorename !== void 0 && typeof s.autorename != "boolean") {
      const r = {
        instancePath: i + "/autorename",
        schemaPath: "#/properties/autorename/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((f.errors = e), t === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = y;
function y(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = y.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "path")) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: i + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((y.errors = e), t === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const T = h;
function h(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = h.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "path")) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: i + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((h.errors = e), t === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const O = g;
function g(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = g.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (r !== "accountId") {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((g.errors = e), t === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = P;
function P(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = P.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "path")) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: i + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((P.errors = e), t === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const U = b;
function b(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = b.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "path")) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: i + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((b.errors = e), t === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = v;
function v(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = v.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (r !== "accountId") {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((v.errors = e), t === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = k;
function k(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = k.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "path" ||
          r === "recursive" ||
          r === "limit" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: i + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.recursive !== void 0 && typeof s.recursive != "boolean") {
      const r = {
        instancePath: i + "/recursive",
        schemaPath: "#/properties/recursive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.limit !== void 0) {
      let r = s.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const o = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (typeof r == "number") {
        if (r > 2e3 || isNaN(r)) {
          const o = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 2e3 },
            message: "must be <= 2000",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
        if (r < 1 || isNaN(r)) {
          const o = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
      }
    }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const o = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const o = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
        if (r < 1 || isNaN(r)) {
          const o = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const o = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const o = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
        if (r < 1 || isNaN(r)) {
          const o = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((k.errors = e), t === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = _;
function _(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = _.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "accountId" ||
          r === "path"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const o = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const o = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
        if (r < 1 || isNaN(r)) {
          const o = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const o = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const o = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
        if (r < 1 || isNaN(r)) {
          const o = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: i + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((_.errors = e), t === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const M = w;
function w(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = w.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.fromPath === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fromPath" },
        message: "must have required property 'fromPath'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.toPath === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "toPath" },
        message: "must have required property 'toPath'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "fromPath" ||
          r === "toPath" ||
          r === "autorename"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.fromPath !== void 0 && typeof s.fromPath != "string") {
      const r = {
        instancePath: i + "/fromPath",
        schemaPath: "#/properties/fromPath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.toPath !== void 0 && typeof s.toPath != "string") {
      const r = {
        instancePath: i + "/toPath",
        schemaPath: "#/properties/toPath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.autorename !== void 0 && typeof s.autorename != "boolean") {
      const r = {
        instancePath: i + "/autorename",
        schemaPath: "#/properties/autorename/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((w.errors = e), t === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = I;
function I(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = I.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.url === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "url" },
        message: "must have required property 'url'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "url")) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.url !== void 0 && typeof s.url != "string") {
      const r = {
        instancePath: i + "/url",
        schemaPath: "#/properties/url/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((I.errors = e), t === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = x;
function x(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = x.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.query === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (
        !(
          r === "limit" ||
          r === "cursor" ||
          r === "accountId" ||
          r === "query" ||
          r === "path" ||
          r === "fileExtensions"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.limit !== void 0) {
      let r = s.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const o = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const o = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
        if (r < 1 || isNaN(r)) {
          const o = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.query !== void 0 && typeof s.query != "string") {
      const r = {
        instancePath: i + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: i + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.fileExtensions !== void 0) {
      let r = s.fileExtensions;
      if (Array.isArray(r)) {
        const o = r.length;
        for (let u = 0; u < o; u++)
          if (typeof r[u] != "string") {
            const q = {
              instancePath: i + "/fileExtensions/" + u,
              schemaPath: "#/properties/fileExtensions/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [q]) : e.push(q), t++);
          }
      } else {
        const o = {
          instancePath: i + "/fileExtensions",
          schemaPath: "#/properties/fileExtensions/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((x.errors = e), t === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = A,
  d = {
    properties: {
      accessInheritance: { enum: ["inherit", "no_inherit"] },
      aclUpdatePolicy: { enum: ["owner", "editors"] },
      memberPolicy: { enum: ["team", "anyone"] },
      sharedLinkPolicy: { enum: ["anyone", "team", "members"] },
    },
  };
function A(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = A.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "path" ||
          r === "accessInheritance" ||
          r === "aclUpdatePolicy" ||
          r === "forceAsync" ||
          r === "memberPolicy" ||
          r === "sharedLinkPolicy"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: i + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.accessInheritance !== void 0) {
      let r = s.accessInheritance;
      if (typeof r != "string") {
        const o = {
          instancePath: i + "/accessInheritance",
          schemaPath: "#/properties/accessInheritance/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (!(r === "inherit" || r === "no_inherit")) {
        const o = {
          instancePath: i + "/accessInheritance",
          schemaPath: "#/properties/accessInheritance/enum",
          keyword: "enum",
          params: { allowedValues: d.properties.accessInheritance.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    }
    if (s.aclUpdatePolicy !== void 0) {
      let r = s.aclUpdatePolicy;
      if (typeof r != "string") {
        const o = {
          instancePath: i + "/aclUpdatePolicy",
          schemaPath: "#/properties/aclUpdatePolicy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (!(r === "owner" || r === "editors")) {
        const o = {
          instancePath: i + "/aclUpdatePolicy",
          schemaPath: "#/properties/aclUpdatePolicy/enum",
          keyword: "enum",
          params: { allowedValues: d.properties.aclUpdatePolicy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    }
    if (s.forceAsync !== void 0 && typeof s.forceAsync != "boolean") {
      const r = {
        instancePath: i + "/forceAsync",
        schemaPath: "#/properties/forceAsync/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.memberPolicy !== void 0) {
      let r = s.memberPolicy;
      if (typeof r != "string") {
        const o = {
          instancePath: i + "/memberPolicy",
          schemaPath: "#/properties/memberPolicy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (!(r === "team" || r === "anyone")) {
        const o = {
          instancePath: i + "/memberPolicy",
          schemaPath: "#/properties/memberPolicy/enum",
          keyword: "enum",
          params: { allowedValues: d.properties.memberPolicy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    }
    if (s.sharedLinkPolicy !== void 0) {
      let r = s.sharedLinkPolicy;
      if (typeof r != "string") {
        const o = {
          instancePath: i + "/sharedLinkPolicy",
          schemaPath: "#/properties/sharedLinkPolicy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (!(r === "anyone" || r === "team" || r === "members")) {
        const o = {
          instancePath: i + "/sharedLinkPolicy",
          schemaPath: "#/properties/sharedLinkPolicy/enum",
          keyword: "enum",
          params: { allowedValues: d.properties.sharedLinkPolicy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((A.errors = e), t === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = N,
  F = { properties: { mode: { enum: ["add", "overwrite"] } } };
function N(
  s,
  {
    instancePath: i = "",
    parentData: n,
    parentDataProperty: p,
    rootData: l = s,
    dynamicAnchors: m = {},
  } = {},
) {
  let e = null,
    t = 0;
  const a = N.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const r = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (
        !(
          r === "sourcePath" ||
          r === "accountId" ||
          r === "path" ||
          r === "content" ||
          r === "mode" ||
          r === "autorename"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (s.sourcePath !== void 0 && typeof s.sourcePath != "string") {
      const r = {
        instancePath: i + "/sourcePath",
        schemaPath: "#/properties/sourcePath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: i + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const r = {
        instancePath: i + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.mode !== void 0) {
      let r = s.mode;
      if (typeof r != "string") {
        const o = {
          instancePath: i + "/mode",
          schemaPath: "#/properties/mode/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (!(r === "add" || r === "overwrite")) {
        const o = {
          instancePath: i + "/mode",
          schemaPath: "#/properties/mode/enum",
          keyword: "enum",
          params: { allowedValues: F.properties.mode.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    }
    if (s.autorename !== void 0 && typeof s.autorename != "boolean") {
      const r = {
        instancePath: i + "/autorename",
        schemaPath: "#/properties/autorename/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((N.errors = e), t === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = {
  dropbox_copy_file: D,
  dropbox_create_folder: j,
  dropbox_delete_file: E,
  dropbox_download_file: T,
  dropbox_get_account: O,
  dropbox_get_file_link: L,
  dropbox_get_metadata: U,
  dropbox_get_space_usage: V,
  dropbox_list_files: S,
  dropbox_list_shared_links: R,
  dropbox_move_file: M,
  dropbox_revoke_shared_link: Y,
  dropbox_search_files: z,
  dropbox_share_folder: B,
  dropbox_upload_file: C,
};
exports.NATIVE_TOOL_VALIDATORS = G;
exports.validate_dropbox_copy_file = D;
exports.validate_dropbox_create_folder = j;
exports.validate_dropbox_delete_file = E;
exports.validate_dropbox_download_file = T;
exports.validate_dropbox_get_account = O;
exports.validate_dropbox_get_file_link = L;
exports.validate_dropbox_get_metadata = U;
exports.validate_dropbox_get_space_usage = V;
exports.validate_dropbox_list_files = S;
exports.validate_dropbox_list_shared_links = R;
exports.validate_dropbox_move_file = M;
exports.validate_dropbox_revoke_shared_link = Y;
exports.validate_dropbox_search_files = z;
exports.validate_dropbox_share_folder = B;
exports.validate_dropbox_upload_file = C;
