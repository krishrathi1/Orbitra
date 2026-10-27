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
      a = new s.Error().stack;
    a &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[a] = "cfe404c0-a890-4d0e-89d4-d7389cafe5b9"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-cfe404c0-a890-4d0e-89d4-d7389cafe5b9"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const x = u,
  Z = { properties: { filter: { enum: ["mine", "public", "starred"] } } };
function u(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = u.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (!(r === "filter" || r === "start" || r === "end" || r === "cursor")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.filter !== void 0) {
      let r = s.filter;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/filter",
          schemaPath: "#/properties/filter/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "mine" || r === "public" || r === "starred")) {
        const t = {
          instancePath: a + "/filter",
          schemaPath: "#/properties/filter/enum",
          keyword: "enum",
          params: { allowedValues: Z.properties.filter.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
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
  return ((u.errors = e), i === 0);
}
u.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = c;
function c(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = c.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (r !== "boardId") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const r = {
        instancePath: a + "/boardId",
        schemaPath: "#/properties/boardId/type",
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
  return ((c.errors = e), i === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = f;
function f(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = f.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(r === "boardId" || r === "start" || r === "end" || r === "cursor")
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const r = {
        instancePath: a + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
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
const S = y;
function y(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = y.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "boardId" || r === "name")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const r = {
        instancePath: a + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const r = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
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
  return ((y.errors = e), i === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = h,
  $ = { properties: { state: { enum: ["complete", "incomplete"] } } },
  l = require("ajv/dist/runtime/ucs2length").default;
function h(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = h.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cardId" },
        message: "must have required property 'cardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.checkItemId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "checkItemId" },
        message: "must have required property 'checkItemId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.state === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "state" },
        message: "must have required property 'state'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "cardId" ||
          r === "checkItemId" ||
          r === "state" ||
          r === "name"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.cardId !== void 0) {
      let r = s.cardId;
      if (typeof r == "string") {
        if (l(r) < 1) {
          const t = {
            instancePath: a + "/cardId",
            schemaPath: "#/properties/cardId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/cardId",
          schemaPath: "#/properties/cardId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.checkItemId !== void 0) {
      let r = s.checkItemId;
      if (typeof r == "string") {
        if (l(r) < 1) {
          const t = {
            instancePath: a + "/checkItemId",
            schemaPath: "#/properties/checkItemId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/checkItemId",
          schemaPath: "#/properties/checkItemId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.state !== void 0) {
      let r = s.state;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/state",
          schemaPath: "#/properties/state/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "complete" || r === "incomplete")) {
        const t = {
          instancePath: a + "/state",
          schemaPath: "#/properties/state/enum",
          keyword: "enum",
          params: { allowedValues: $.properties.state.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.name !== void 0) {
      let r = s.name;
      if (typeof r == "string") {
        if (l(r) < 1) {
          const t = {
            instancePath: a + "/name",
            schemaPath: "#/properties/name/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/name",
          schemaPath: "#/properties/name/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
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
  return ((h.errors = e), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = g;
function g(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = g.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.checklistId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "checklistId" },
        message: "must have required property 'checklistId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "checklistId" || r === "name" || r === "checked")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.checklistId !== void 0) {
      let r = s.checklistId;
      if (typeof r == "string") {
        if (l(r) < 1) {
          const t = {
            instancePath: a + "/checklistId",
            schemaPath: "#/properties/checklistId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/checklistId",
          schemaPath: "#/properties/checklistId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.name !== void 0) {
      let r = s.name;
      if (typeof r == "string") {
        if (l(r) < 1) {
          const t = {
            instancePath: a + "/name",
            schemaPath: "#/properties/name/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/name",
          schemaPath: "#/properties/name/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.checked !== void 0 && typeof s.checked != "boolean") {
      const r = {
        instancePath: a + "/checked",
        schemaPath: "#/properties/checked/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
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
const M = b;
function b(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = b.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cardId" },
        message: "must have required property 'cardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "cardId" || r === "name")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.cardId !== void 0) {
      let r = s.cardId;
      if (typeof r == "string") {
        if (l(r) < 1) {
          const t = {
            instancePath: a + "/cardId",
            schemaPath: "#/properties/cardId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/cardId",
          schemaPath: "#/properties/cardId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.name !== void 0) {
      let r = s.name;
      if (typeof r == "string") {
        if (l(r) < 1) {
          const t = {
            instancePath: a + "/name",
            schemaPath: "#/properties/name/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/name",
          schemaPath: "#/properties/name/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
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
const Y = P;
function P(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = P.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cardId" },
        message: "must have required property 'cardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "cardId" || r === "start" || r === "end" || r === "cursor")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.cardId !== void 0) {
      let r = s.cardId;
      if (typeof r == "string") {
        if (l(r) < 1) {
          const t = {
            instancePath: a + "/cardId",
            schemaPath: "#/properties/cardId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/cardId",
          schemaPath: "#/properties/cardId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
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
const z = I;
function I(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = I.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.listId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "listId" || r === "name")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.listId !== void 0) {
      let r = s.listId;
      if (typeof r == "string") {
        if (l(r) < 1) {
          const t = {
            instancePath: a + "/listId",
            schemaPath: "#/properties/listId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/listId",
          schemaPath: "#/properties/listId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.name !== void 0) {
      let r = s.name;
      if (typeof r == "string") {
        if (l(r) < 1) {
          const t = {
            instancePath: a + "/name",
            schemaPath: "#/properties/name/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/name",
          schemaPath: "#/properties/name/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
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
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = k;
function k(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = k.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(
          r === "boardId" ||
          r === "listId" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const r = {
        instancePath: a + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.listId !== void 0 && typeof s.listId != "string") {
      const r = {
        instancePath: a + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
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
  return ((k.errors = e), i === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = v;
function v(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = v.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cardId" },
        message: "must have required property 'cardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (r !== "cardId") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.cardId !== void 0 && typeof s.cardId != "string") {
      const r = {
        instancePath: a + "/cardId",
        schemaPath: "#/properties/cardId/type",
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
const F = w;
function w(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = w.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.listId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "listId" || r === "name" || r === "desc" || r === "due")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.listId !== void 0 && typeof s.listId != "string") {
      const r = {
        instancePath: a + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const r = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.desc !== void 0 && typeof s.desc != "string") {
      const r = {
        instancePath: a + "/desc",
        schemaPath: "#/properties/desc/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.due !== void 0 && typeof s.due != "string") {
      const r = {
        instancePath: a + "/due",
        schemaPath: "#/properties/due/type",
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
const G = _;
function _(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = _.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cardId" },
        message: "must have required property 'cardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "cardId" ||
          r === "name" ||
          r === "desc" ||
          r === "due" ||
          r === "idList" ||
          r === "closed"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.cardId !== void 0 && typeof s.cardId != "string") {
      const r = {
        instancePath: a + "/cardId",
        schemaPath: "#/properties/cardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const r = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.desc !== void 0 && typeof s.desc != "string") {
      const r = {
        instancePath: a + "/desc",
        schemaPath: "#/properties/desc/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.due !== void 0 && typeof s.due != "string") {
      const r = {
        instancePath: a + "/due",
        schemaPath: "#/properties/due/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.idList !== void 0 && typeof s.idList != "string") {
      const r = {
        instancePath: a + "/idList",
        schemaPath: "#/properties/idList/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.closed !== void 0 && typeof s.closed != "boolean") {
      const r = {
        instancePath: a + "/closed",
        schemaPath: "#/properties/closed/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
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
const H = N;
function N(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = N.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cardId" },
        message: "must have required property 'cardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (r !== "cardId") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.cardId !== void 0 && typeof s.cardId != "string") {
      const r = {
        instancePath: a + "/cardId",
        schemaPath: "#/properties/cardId/type",
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
  return ((N.errors = e), i === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const J = q;
function q(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = q.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cardId" },
        message: "must have required property 'cardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.text === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "text" },
        message: "must have required property 'text'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "cardId" || r === "text")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.cardId !== void 0 && typeof s.cardId != "string") {
      const r = {
        instancePath: a + "/cardId",
        schemaPath: "#/properties/cardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.text !== void 0 && typeof s.text != "string") {
      const r = {
        instancePath: a + "/text",
        schemaPath: "#/properties/text/type",
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
  return ((q.errors = e), i === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const K = A;
function A(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = A.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cardId" },
        message: "must have required property 'cardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (r !== "cardId") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.cardId !== void 0 && typeof s.cardId != "string") {
      const r = {
        instancePath: a + "/cardId",
        schemaPath: "#/properties/cardId/type",
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
  return ((A.errors = e), i === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Q = D;
function D(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = D.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(r === "boardId" || r === "start" || r === "end" || r === "cursor")
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const r = {
        instancePath: a + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
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
  return ((D.errors = e), i === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const U = j;
function j(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = j.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cardId" },
        message: "must have required property 'cardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.memberId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "memberId" },
        message: "must have required property 'memberId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "cardId" || r === "memberId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.cardId !== void 0 && typeof s.cardId != "string") {
      const r = {
        instancePath: a + "/cardId",
        schemaPath: "#/properties/cardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.memberId !== void 0 && typeof s.memberId != "string") {
      const r = {
        instancePath: a + "/memberId",
        schemaPath: "#/properties/memberId/type",
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
const W = T;
function T(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = T.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(r === "boardId" || r === "start" || r === "end" || r === "cursor")
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const r = {
        instancePath: a + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
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
  return ((T.errors = e), i === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = O;
function O(
  s,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = O.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cardId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cardId" },
        message: "must have required property 'cardId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.url === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "url" },
        message: "must have required property 'url'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "cardId" || r === "url" || r === "name")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.cardId !== void 0 && typeof s.cardId != "string") {
      const r = {
        instancePath: a + "/cardId",
        schemaPath: "#/properties/cardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.url !== void 0 && typeof s.url != "string") {
      const r = {
        instancePath: a + "/url",
        schemaPath: "#/properties/url/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const r = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
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
  return ((O.errors = e), i === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ee = {
  trello_list_boards: x,
  trello_get_board: L,
  trello_list_lists: E,
  trello_create_list: S,
  trello_update_checklist_item: V,
  trello_add_checklist_item: R,
  trello_create_checklist: M,
  trello_list_checklists: Y,
  trello_update_list: z,
  trello_list_cards: B,
  trello_get_card: C,
  trello_create_card: F,
  trello_update_card: G,
  trello_archive_card: H,
  trello_add_comment: J,
  trello_delete_card: K,
  trello_list_members: Q,
  trello_add_member_to_card: U,
  trello_list_labels: W,
  trello_add_attachment: X,
};
exports.NATIVE_TOOL_VALIDATORS = ee;
exports.validate_trello_add_attachment = X;
exports.validate_trello_add_checklist_item = R;
exports.validate_trello_add_comment = J;
exports.validate_trello_add_member_to_card = U;
exports.validate_trello_archive_card = H;
exports.validate_trello_create_card = F;
exports.validate_trello_create_checklist = M;
exports.validate_trello_create_list = S;
exports.validate_trello_delete_card = K;
exports.validate_trello_get_board = L;
exports.validate_trello_get_card = C;
exports.validate_trello_list_boards = x;
exports.validate_trello_list_cards = B;
exports.validate_trello_list_checklists = Y;
exports.validate_trello_list_labels = W;
exports.validate_trello_list_lists = E;
exports.validate_trello_list_members = Q;
exports.validate_trello_update_card = G;
exports.validate_trello_update_checklist_item = V;
exports.validate_trello_update_list = z;
