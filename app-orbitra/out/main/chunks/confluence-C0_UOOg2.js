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
      (t._sentryDebugIds[a] = "64b57574-5efb-4560-87d5-58fc150f28cb"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-64b57574-5efb-4560-87d5-58fc150f28cb"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _ = y;
function y(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: f = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = y.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.pageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pageId" },
        message: "must have required property 'pageId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.body === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "body" },
        message: "must have required property 'body'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "pageId" || s === "body" || s === "account")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.pageId !== void 0 && typeof t.pageId != "string") {
      const s = {
        instancePath: a + "/pageId",
        schemaPath: "#/properties/pageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.body !== void 0 && typeof t.body != "string") {
      const s = {
        instancePath: a + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
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
  return ((y.errors = e), i === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const I = c;
function c(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: f = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = c.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.title === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.body === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "body" },
        message: "must have required property 'body'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "spaceId" ||
          s === "spaceKey" ||
          s === "title" ||
          s === "body" ||
          s === "parentPageId"
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
    if (t.spaceId !== void 0 && typeof t.spaceId != "string") {
      const s = {
        instancePath: a + "/spaceId",
        schemaPath: "#/properties/spaceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.spaceKey !== void 0 && typeof t.spaceKey != "string") {
      const s = {
        instancePath: a + "/spaceKey",
        schemaPath: "#/properties/spaceKey/type",
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
    if (t.body !== void 0 && typeof t.body != "string") {
      const s = {
        instancePath: a + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.parentPageId !== void 0 && typeof t.parentPageId != "string") {
      const s = {
        instancePath: a + "/parentPageId",
        schemaPath: "#/properties/parentPageId/type",
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
  return ((c.errors = e), i === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const q = h;
function h(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: f = {},
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
    if (t.pageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pageId" },
        message: "must have required property 'pageId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "pageId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.pageId !== void 0 && typeof t.pageId != "string") {
      const s = {
        instancePath: a + "/pageId",
        schemaPath: "#/properties/pageId/type",
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
const A = g;
function g(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: f = {},
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
    if (t.pageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pageId" },
        message: "must have required property 'pageId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "pageId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.pageId !== void 0 && typeof t.pageId != "string") {
      const s = {
        instancePath: a + "/pageId",
        schemaPath: "#/properties/pageId/type",
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
  return ((g.errors = e), i === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const D = b;
function b(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: f = {},
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
    if (t.pageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pageId" },
        message: "must have required property 'pageId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "pageId" ||
          s === "limit" ||
          s === "account"
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
    if (t.pageId !== void 0 && typeof t.pageId != "string") {
      const s = {
        instancePath: a + "/pageId",
        schemaPath: "#/properties/pageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
        if (s < -9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
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
const j = P;
function P(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: f = {},
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
    for (const r in t)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "spaceId" ||
          r === "spaceKey" ||
          r === "title" ||
          r === "limit"
        )
      ) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    if (t.start !== void 0) {
      let r = t.start;
      const p = i;
      let d = !1;
      const K = i;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const o = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/anyOf/0/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const o = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/anyOf/0/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        if (r < 1 || isNaN(r)) {
          const o = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/anyOf/0/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
      }
      var s = K === i;
      d = d || s;
      const S = i;
      if (r !== 0) {
        const o = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/anyOf/1/const",
          keyword: "const",
          params: { allowedValue: 0 },
          message: "must be equal to constant",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      var s = S === i;
      if (((d = d || s), d))
        ((i = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const o = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (t.end !== void 0) {
      let r = t.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const p = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const p = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        if (r < 1 || isNaN(r)) {
          const p = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
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
    if (t.spaceId !== void 0 && typeof t.spaceId != "string") {
      const r = {
        instancePath: a + "/spaceId",
        schemaPath: "#/properties/spaceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.spaceKey !== void 0 && typeof t.spaceKey != "string") {
      const r = {
        instancePath: a + "/spaceKey",
        schemaPath: "#/properties/spaceKey/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const r = {
        instancePath: a + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.limit !== void 0) {
      let r = t.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const p = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
      if (typeof r == "number") {
        if (r > 50 || isNaN(r)) {
          const p = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        if (r < 1 || isNaN(r)) {
          const p = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
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
  return ((P.errors = e), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const x = w;
function w(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: f = {},
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
    if (t.pageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pageId" },
        message: "must have required property 'pageId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "limit" ||
          s === "pageId"
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
        if (s > 250 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 250 },
            message: "must be <= 250",
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
    if (t.pageId !== void 0 && typeof t.pageId != "string") {
      const s = {
        instancePath: a + "/pageId",
        schemaPath: "#/properties/pageId/type",
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
const O = k,
  V = { properties: { type: { enum: ["global", "personal"] } } };
function k(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: f = {},
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
    for (const s in t)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "type" ||
          s === "limit"
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
      if (!(s === "global" || s === "personal")) {
        const r = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: V.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
        if (s > 250 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 250 },
            message: "must be <= 250",
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
const T = v;
function v(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: f = {},
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
    if (t.query === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(s === "limit" || s === "cursor" || s === "query" || s === "start")
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
    if (t.query !== void 0 && typeof t.query != "string") {
      const s = {
        instancePath: a + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
        if (s < 0 || isNaN(s)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
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
  return ((v.errors = e), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = N;
function N(
  t,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = t,
    dynamicAnchors: f = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = N.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.pageId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pageId" },
        message: "must have required property 'pageId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.title === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.body === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "body" },
        message: "must have required property 'body'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.version === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "version" },
        message: "must have required property 'version'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(s === "pageId" || s === "title" || s === "body" || s === "version")
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
    if (t.pageId !== void 0 && typeof t.pageId != "string") {
      const s = {
        instancePath: a + "/pageId",
        schemaPath: "#/properties/pageId/type",
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
    if (t.body !== void 0 && typeof t.body != "string") {
      const s = {
        instancePath: a + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.version !== void 0) {
      let s = t.version;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/version",
          schemaPath: "#/properties/version/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/version",
            schemaPath: "#/properties/version/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/version",
            schemaPath: "#/properties/version/minimum",
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
  return ((N.errors = e), i === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = {
  confluence_add_comment: _,
  confluence_create_page: I,
  confluence_delete_page: q,
  confluence_get_page: A,
  confluence_get_page_children: D,
  confluence_get_space_pages: j,
  confluence_list_comments: x,
  confluence_list_spaces: O,
  confluence_search_content: T,
  confluence_update_page: E,
};
exports.NATIVE_TOOL_VALIDATORS = L;
exports.validate_confluence_add_comment = _;
exports.validate_confluence_create_page = I;
exports.validate_confluence_delete_page = q;
exports.validate_confluence_get_page = A;
exports.validate_confluence_get_page_children = D;
exports.validate_confluence_get_space_pages = j;
exports.validate_confluence_list_comments = x;
exports.validate_confluence_list_spaces = O;
exports.validate_confluence_search_content = T;
exports.validate_confluence_update_page = E;
