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
      (t._sentryDebugIds[a] = "7e18b9de-1a9b-4918-b4e7-0d0ced1b3b32"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-7e18b9de-1a9b-4918-b4e7-0d0ced1b3b32"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const q = f;
function f(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: o,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = f.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const r in t)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "until" ||
          r === "limit" ||
          r === "account"
        )
      ) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.start !== void 0) {
      let r = t.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.end !== void 0) {
      let r = t.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.until !== void 0 && typeof t.until != "number") {
      const r = {
        instancePath: a + "/until",
        schemaPath: "#/properties/until/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.limit !== void 0) {
      let r = t.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((f.errors = e), i === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const A = h;
function h(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: o,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = h.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.projectId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (!(r === "projectId" || r === "account")) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.projectId !== void 0 && typeof t.projectId != "string") {
      const r = {
        instancePath: a + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((h.errors = e), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const D = g;
function g(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: o,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = g.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const r in t)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "until" ||
          r === "projectId" ||
          r === "limit" ||
          r === "account"
        )
      ) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.start !== void 0) {
      let r = t.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.end !== void 0) {
      let r = t.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.until !== void 0 && typeof t.until != "number") {
      const r = {
        instancePath: a + "/until",
        schemaPath: "#/properties/until/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.projectId !== void 0 && typeof t.projectId != "string") {
      const r = {
        instancePath: a + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.limit !== void 0) {
      let r = t.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((g.errors = e), i === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const T = v;
function v(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: o,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = v.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.deploymentId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "deploymentId" },
        message: "must have required property 'deploymentId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (!(r === "deploymentId" || r === "account")) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.deploymentId !== void 0 && typeof t.deploymentId != "string") {
      const r = {
        instancePath: a + "/deploymentId",
        schemaPath: "#/properties/deploymentId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((v.errors = e), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const O = P;
function P(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: o,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = P.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.projectId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (!(r === "teamId" || r === "projectId")) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.teamId !== void 0 && typeof t.teamId != "string") {
      const r = {
        instancePath: a + "/teamId",
        schemaPath: "#/properties/teamId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.projectId !== void 0 && typeof t.projectId != "string") {
      const r = {
        instancePath: a + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((P.errors = e), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = b,
  u = require("ajv/dist/runtime/ucs2length").default;
function b(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: o,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = b.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.projectId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.envVarId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "envVarId" },
        message: "must have required property 'envVarId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (!(r === "projectId" || r === "teamId" || r === "envVarId")) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.projectId !== void 0) {
      let r = t.projectId;
      if (typeof r == "string") {
        if (u(r) < 1) {
          const s = {
            instancePath: a + "/projectId",
            schemaPath: "#/properties/projectId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      } else {
        const s = {
          instancePath: a + "/projectId",
          schemaPath: "#/properties/projectId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (t.teamId !== void 0) {
      let r = t.teamId;
      if (typeof r == "string") {
        if (u(r) < 1) {
          const s = {
            instancePath: a + "/teamId",
            schemaPath: "#/properties/teamId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      } else {
        const s = {
          instancePath: a + "/teamId",
          schemaPath: "#/properties/teamId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (t.envVarId !== void 0) {
      let r = t.envVarId;
      if (typeof r == "string") {
        if (u(r) < 1) {
          const s = {
            instancePath: a + "/envVarId",
            schemaPath: "#/properties/envVarId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      } else {
        const s = {
          instancePath: a + "/envVarId",
          schemaPath: "#/properties/envVarId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
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
  return ((b.errors = e), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = I;
function I(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: o,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = I.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.projectId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.envVarId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "envVarId" },
        message: "must have required property 'envVarId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.value === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "value" },
        message: "must have required property 'value'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (
        !(
          r === "projectId" ||
          r === "teamId" ||
          r === "envVarId" ||
          r === "value"
        )
      ) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.projectId !== void 0) {
      let r = t.projectId;
      if (typeof r == "string") {
        if (u(r) < 1) {
          const s = {
            instancePath: a + "/projectId",
            schemaPath: "#/properties/projectId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      } else {
        const s = {
          instancePath: a + "/projectId",
          schemaPath: "#/properties/projectId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (t.teamId !== void 0) {
      let r = t.teamId;
      if (typeof r == "string") {
        if (u(r) < 1) {
          const s = {
            instancePath: a + "/teamId",
            schemaPath: "#/properties/teamId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      } else {
        const s = {
          instancePath: a + "/teamId",
          schemaPath: "#/properties/teamId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (t.envVarId !== void 0) {
      let r = t.envVarId;
      if (typeof r == "string") {
        if (u(r) < 1) {
          const s = {
            instancePath: a + "/envVarId",
            schemaPath: "#/properties/envVarId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      } else {
        const s = {
          instancePath: a + "/envVarId",
          schemaPath: "#/properties/envVarId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (t.value !== void 0 && typeof t.value != "string") {
      const r = {
        instancePath: a + "/value",
        schemaPath: "#/properties/value/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const x = w,
  N = {
    properties: {
      target: { items: { enum: ["production", "preview", "development"] } },
      type: { enum: ["encrypted", "plain", "sensitive"] },
    },
  };
function w(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: o,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = w.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.projectId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.key === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "key" },
        message: "must have required property 'key'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.value === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "value" },
        message: "must have required property 'value'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.target === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "target" },
        message: "must have required property 'target'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (
        !(
          r === "projectId" ||
          r === "teamId" ||
          r === "key" ||
          r === "value" ||
          r === "target" ||
          r === "type" ||
          r === "gitBranch"
        )
      ) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.projectId !== void 0) {
      let r = t.projectId;
      if (typeof r == "string") {
        if (u(r) < 1) {
          const s = {
            instancePath: a + "/projectId",
            schemaPath: "#/properties/projectId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      } else {
        const s = {
          instancePath: a + "/projectId",
          schemaPath: "#/properties/projectId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (t.teamId !== void 0) {
      let r = t.teamId;
      if (typeof r == "string") {
        if (u(r) < 1) {
          const s = {
            instancePath: a + "/teamId",
            schemaPath: "#/properties/teamId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      } else {
        const s = {
          instancePath: a + "/teamId",
          schemaPath: "#/properties/teamId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (t.key !== void 0) {
      let r = t.key;
      if (typeof r == "string") {
        if (u(r) < 1) {
          const s = {
            instancePath: a + "/key",
            schemaPath: "#/properties/key/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      } else {
        const s = {
          instancePath: a + "/key",
          schemaPath: "#/properties/key/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (t.value !== void 0 && typeof t.value != "string") {
      const r = {
        instancePath: a + "/value",
        schemaPath: "#/properties/value/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.target !== void 0) {
      let r = t.target;
      if (Array.isArray(r)) {
        if (r.length < 1) {
          const d = {
            instancePath: a + "/target",
            schemaPath: "#/properties/target/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [d]) : e.push(d), i++);
        }
        const s = r.length;
        for (let d = 0; d < s; d++) {
          let y = r[d];
          if (typeof y != "string") {
            const c = {
              instancePath: a + "/target/" + d,
              schemaPath: "#/properties/target/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
          if (!(y === "production" || y === "preview" || y === "development")) {
            const c = {
              instancePath: a + "/target/" + d,
              schemaPath: "#/properties/target/items/enum",
              keyword: "enum",
              params: { allowedValues: N.properties.target.items.enum },
              message: "must be equal to one of the allowed values",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
        }
      } else {
        const s = {
          instancePath: a + "/target",
          schemaPath: "#/properties/target/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (t.type !== void 0) {
      let r = t.type;
      if (typeof r != "string") {
        const s = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (!(r === "encrypted" || r === "plain" || r === "sensitive")) {
        const s = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: N.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    }
    if (t.gitBranch !== void 0 && typeof t.gitBranch != "string") {
      const r = {
        instancePath: a + "/gitBranch",
        schemaPath: "#/properties/gitBranch/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((w.errors = e), i === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = k;
function k(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: o,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = k.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const r in t)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "limit" ||
          r === "until"
        )
      ) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.start !== void 0) {
      let r = t.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.end !== void 0) {
      let r = t.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.limit !== void 0) {
      let r = t.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), i++);
        }
      }
    }
    if (t.until !== void 0 && typeof t.until != "number") {
      const r = {
        instancePath: a + "/until",
        schemaPath: "#/properties/until/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
const S = _;
function _(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: o,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = _.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.teamId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "teamId" },
        message: "must have required property 'teamId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (r !== "teamId") {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.teamId !== void 0 && typeof t.teamId != "string") {
      const r = {
        instancePath: a + "/teamId",
        schemaPath: "#/properties/teamId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
const B = j;
function j(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: o,
    rootData: m = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = j.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.deploymentId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "deploymentId" },
        message: "must have required property 'deploymentId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (r !== "deploymentId") {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), i++);
      }
    if (t.deploymentId !== void 0 && typeof t.deploymentId != "string") {
      const r = {
        instancePath: a + "/deploymentId",
        schemaPath: "#/properties/deploymentId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((j.errors = e), i === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = {
  vercel_list_projects: q,
  vercel_get_project: A,
  vercel_list_deployments: D,
  vercel_get_deployment: T,
  vercel_list_env_vars: O,
  vercel_delete_env_var: V,
  vercel_update_env_var: L,
  vercel_create_env_var: x,
  vercel_list_domains: E,
  vercel_get_team: S,
  vercel_cancel_deployment: B,
};
exports.NATIVE_TOOL_VALIDATORS = R;
exports.validate_vercel_cancel_deployment = B;
exports.validate_vercel_create_env_var = x;
exports.validate_vercel_delete_env_var = V;
exports.validate_vercel_get_deployment = T;
exports.validate_vercel_get_project = A;
exports.validate_vercel_get_team = S;
exports.validate_vercel_list_deployments = D;
exports.validate_vercel_list_domains = E;
exports.validate_vercel_list_env_vars = O;
exports.validate_vercel_list_projects = q;
exports.validate_vercel_update_env_var = L;
