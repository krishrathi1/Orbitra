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
      n = new s.Error().stack;
    n &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[n] = "e6e156f4-8243-4b21-a595-ab6c921dc520"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-e6e156f4-8243-4b21-a595-ab6c921dc520"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const I = c;
function c(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = c.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.title === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (!(e === "title" || e === "content" || e === "account")) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.title !== void 0 && typeof s.title != "string") {
      const e = {
        instancePath: n + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const e = {
        instancePath: n + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((c.errors = t), r === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const q = d;
function d(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = d.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.document === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (!(e === "document" || e === "account")) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.document !== void 0 && typeof s.document != "string") {
      const e = {
        instancePath: n + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((d.errors = t), r === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const N = l,
  F = {
    properties: {
      suggestionsViewMode: {
        enum: [
          "DEFAULT_FOR_CURRENT_ACCESS",
          "SUGGESTIONS_INLINE",
          "PREVIEW_SUGGESTIONS_ACCEPTED",
          "PREVIEW_WITHOUT_SUGGESTIONS",
        ],
      },
    },
  };
function l(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = l.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.document === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (
        !(
          e === "document" ||
          e === "account" ||
          e === "fields" ||
          e === "suggestionsViewMode"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.document !== void 0 && typeof s.document != "string") {
      const e = {
        instancePath: n + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.fields !== void 0 && typeof s.fields != "string") {
      const e = {
        instancePath: n + "/fields",
        schemaPath: "#/properties/fields/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.suggestionsViewMode !== void 0) {
      let e = s.suggestionsViewMode;
      if (typeof e != "string") {
        const i = {
          instancePath: n + "/suggestionsViewMode",
          schemaPath: "#/properties/suggestionsViewMode/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
      if (
        !(
          e === "DEFAULT_FOR_CURRENT_ACCESS" ||
          e === "SUGGESTIONS_INLINE" ||
          e === "PREVIEW_SUGGESTIONS_ACCEPTED" ||
          e === "PREVIEW_WITHOUT_SUGGESTIONS"
        )
      ) {
        const i = {
          instancePath: n + "/suggestionsViewMode",
          schemaPath: "#/properties/suggestionsViewMode/enum",
          keyword: "enum",
          params: { allowedValues: F.properties.suggestionsViewMode.enum },
          message: "must be equal to one of the allowed values",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
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
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((l.errors = t), r === 0);
}
l.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const x = y;
function y(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = y.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.document === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (!(e === "document" || e === "account" || e === "tabId")) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.document !== void 0 && typeof s.document != "string") {
      const e = {
        instancePath: n + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.tabId !== void 0 && typeof s.tabId != "string") {
      const e = {
        instancePath: n + "/tabId",
        schemaPath: "#/properties/tabId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((y.errors = t), r === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const A = f,
  L = {
    properties: {
      segmentType: { enum: ["body", "header", "footer", "footnote"] },
    },
  },
  D = require("ajv/dist/runtime/ucs2length").default;
function f(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = f.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.document === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.textToFind === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "textToFind" },
        message: "must have required property 'textToFind'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (
        !(
          e === "document" ||
          e === "textToFind" ||
          e === "account" ||
          e === "instance" ||
          e === "tabId" ||
          e === "segmentType" ||
          e === "segmentId" ||
          e === "matchCase"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.document !== void 0 && typeof s.document != "string") {
      const e = {
        instancePath: n + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.textToFind !== void 0) {
      let e = s.textToFind;
      if (typeof e == "string") {
        if (D(e) < 1) {
          const i = {
            instancePath: n + "/textToFind",
            schemaPath: "#/properties/textToFind/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
      } else {
        const i = {
          instancePath: n + "/textToFind",
          schemaPath: "#/properties/textToFind/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.instance !== void 0) {
      let e = s.instance;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/instance",
          schemaPath: "#/properties/instance/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const i = {
            instancePath: n + "/instance",
            schemaPath: "#/properties/instance/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/instance",
            schemaPath: "#/properties/instance/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
      }
    }
    if (s.tabId !== void 0 && typeof s.tabId != "string") {
      const e = {
        instancePath: n + "/tabId",
        schemaPath: "#/properties/tabId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.segmentType !== void 0) {
      let e = s.segmentType;
      if (typeof e != "string") {
        const i = {
          instancePath: n + "/segmentType",
          schemaPath: "#/properties/segmentType/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
      if (
        !(e === "body" || e === "header" || e === "footer" || e === "footnote")
      ) {
        const i = {
          instancePath: n + "/segmentType",
          schemaPath: "#/properties/segmentType/enum",
          keyword: "enum",
          params: { allowedValues: L.properties.segmentType.enum },
          message: "must be equal to one of the allowed values",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    }
    if (s.segmentId !== void 0 && typeof s.segmentId != "string") {
      const e = {
        instancePath: n + "/segmentId",
        schemaPath: "#/properties/segmentId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.matchCase !== void 0 && typeof s.matchCase != "boolean") {
      const e = {
        instancePath: n + "/matchCase",
        schemaPath: "#/properties/matchCase/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((f.errors = t), r === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = g,
  G = {
    properties: {
      segmentType: { enum: ["body", "header", "footer", "footnote"] },
    },
  };
function g(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = g.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.document === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.indexWithin === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "indexWithin" },
        message: "must have required property 'indexWithin'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (
        !(
          e === "document" ||
          e === "indexWithin" ||
          e === "account" ||
          e === "tabId" ||
          e === "segmentType" ||
          e === "segmentId"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.document !== void 0 && typeof s.document != "string") {
      const e = {
        instancePath: n + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.indexWithin !== void 0) {
      let e = s.indexWithin;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/indexWithin",
          schemaPath: "#/properties/indexWithin/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const i = {
            instancePath: n + "/indexWithin",
            schemaPath: "#/properties/indexWithin/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
        if (e < 0 || isNaN(e)) {
          const i = {
            instancePath: n + "/indexWithin",
            schemaPath: "#/properties/indexWithin/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.tabId !== void 0 && typeof s.tabId != "string") {
      const e = {
        instancePath: n + "/tabId",
        schemaPath: "#/properties/tabId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.segmentType !== void 0) {
      let e = s.segmentType;
      if (typeof e != "string") {
        const i = {
          instancePath: n + "/segmentType",
          schemaPath: "#/properties/segmentType/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
      if (
        !(e === "body" || e === "header" || e === "footer" || e === "footnote")
      ) {
        const i = {
          instancePath: n + "/segmentType",
          schemaPath: "#/properties/segmentType/enum",
          keyword: "enum",
          params: { allowedValues: G.properties.segmentType.enum },
          message: "must be equal to one of the allowed values",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    }
    if (s.segmentId !== void 0 && typeof s.segmentId != "string") {
      const e = {
        instancePath: n + "/segmentId",
        schemaPath: "#/properties/segmentId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((g.errors = t), r === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = h;
function h(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = h.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.document === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (!(e === "document" || e === "account" || e === "tabId")) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.document !== void 0 && typeof s.document != "string") {
      const e = {
        instancePath: n + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.tabId !== void 0 && typeof s.tabId != "string") {
      const e = {
        instancePath: n + "/tabId",
        schemaPath: "#/properties/tabId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((h.errors = t), r === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = b;
function b(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = b.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.document === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (
        !(
          e === "document" ||
          e === "account" ||
          e === "newName" ||
          e === "destinationPath" ||
          e === "root"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.document !== void 0 && typeof s.document != "string") {
      const e = {
        instancePath: n + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.newName !== void 0 && typeof s.newName != "string") {
      const e = {
        instancePath: n + "/newName",
        schemaPath: "#/properties/newName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.destinationPath !== void 0 && typeof s.destinationPath != "string") {
      const e = {
        instancePath: n + "/destinationPath",
        schemaPath: "#/properties/destinationPath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.root !== void 0 && typeof s.root != "string") {
      const e = {
        instancePath: n + "/root",
        schemaPath: "#/properties/root/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((b.errors = t), r === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const O = P,
  U = {
    properties: {
      document: { type: "string" },
      account: { type: "string" },
      pageSize: { type: "integer", minimum: 1, maximum: 100 },
      pageToken: { type: "string" },
      includeDeleted: { type: "boolean" },
      startModifiedTime: { type: "string" },
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
  },
  C = Object.prototype.hasOwnProperty;
function P(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = P.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.document === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (!C.call(U.properties, e)) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.document !== void 0 && typeof s.document != "string") {
      const e = {
        instancePath: n + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.pageSize !== void 0) {
      let e = s.pageSize;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/pageSize",
          schemaPath: "#/properties/pageSize/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
      if (typeof e == "number") {
        if (e > 100 || isNaN(e)) {
          const i = {
            instancePath: n + "/pageSize",
            schemaPath: "#/properties/pageSize/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/pageSize",
            schemaPath: "#/properties/pageSize/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const e = {
        instancePath: n + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.includeDeleted !== void 0 && typeof s.includeDeleted != "boolean") {
      const e = {
        instancePath: n + "/includeDeleted",
        schemaPath: "#/properties/includeDeleted/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (
      s.startModifiedTime !== void 0 &&
      typeof s.startModifiedTime != "string"
    ) {
      const e = {
        instancePath: n + "/startModifiedTime",
        schemaPath: "#/properties/startModifiedTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const i = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const i = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((P.errors = t), r === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = w;
function w(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = w.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.document === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.content === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "content" },
        message: "must have required property 'content'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (
        !(
          e === "document" ||
          e === "content" ||
          e === "replaceExistingContent" ||
          e === "account"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.document !== void 0 && typeof s.document != "string") {
      const e = {
        instancePath: n + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const e = {
        instancePath: n + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (
      s.replaceExistingContent !== void 0 &&
      typeof s.replaceExistingContent != "boolean"
    ) {
      const e = {
        instancePath: n + "/replaceExistingContent",
        schemaPath: "#/properties/replaceExistingContent/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((w.errors = t), r === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = k;
function k(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = k.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.document === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.content === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "content" },
        message: "must have required property 'content'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (!(e === "document" || e === "content" || e === "account")) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.document !== void 0 && typeof s.document != "string") {
      const e = {
        instancePath: n + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const e = {
        instancePath: n + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((k.errors = t), r === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = v;
function v(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = v.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.document === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.find === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "find" },
        message: "must have required property 'find'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.replace === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "replace" },
        message: "must have required property 'replace'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (
        !(
          e === "document" ||
          e === "find" ||
          e === "replace" ||
          e === "matchCase" ||
          e === "account"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.document !== void 0 && typeof s.document != "string") {
      const e = {
        instancePath: n + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.find !== void 0 && typeof s.find != "string") {
      const e = {
        instancePath: n + "/find",
        schemaPath: "#/properties/find/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.replace !== void 0 && typeof s.replace != "string") {
      const e = {
        instancePath: n + "/replace",
        schemaPath: "#/properties/replace/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.matchCase !== void 0 && typeof s.matchCase != "boolean") {
      const e = {
        instancePath: n + "/matchCase",
        schemaPath: "#/properties/matchCase/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((v.errors = t), r === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const M = _,
  T = {
    properties: {
      document: { type: "string" },
      action: {
        enum: ["insert_after", "insert_before", "replace"],
        type: "string",
      },
      anchorText: { type: "string", minLength: 1 },
      content: { type: "string" },
      account: { type: "string" },
      endAnchorText: { type: "string" },
      instance: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      tabId: { type: "string" },
      matchCase: { type: "boolean" },
    },
  };
function _(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let t = null,
    r = 0;
  const o = _.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.document === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "document" },
        message: "must have required property 'document'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.action === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "action" },
        message: "must have required property 'action'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.anchorText === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "anchorText" },
        message: "must have required property 'anchorText'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.content === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "content" },
        message: "must have required property 'content'",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    for (const e in s)
      if (!C.call(T.properties, e)) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    if (s.document !== void 0 && typeof s.document != "string") {
      const e = {
        instancePath: n + "/document",
        schemaPath: "#/properties/document/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.action !== void 0) {
      let e = s.action;
      if (typeof e != "string") {
        const i = {
          instancePath: n + "/action",
          schemaPath: "#/properties/action/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
      if (!(e === "insert_after" || e === "insert_before" || e === "replace")) {
        const i = {
          instancePath: n + "/action",
          schemaPath: "#/properties/action/enum",
          keyword: "enum",
          params: { allowedValues: T.properties.action.enum },
          message: "must be equal to one of the allowed values",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    }
    if (s.anchorText !== void 0) {
      let e = s.anchorText;
      if (typeof e == "string") {
        if (D(e) < 1) {
          const i = {
            instancePath: n + "/anchorText",
            schemaPath: "#/properties/anchorText/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
      } else {
        const i = {
          instancePath: n + "/anchorText",
          schemaPath: "#/properties/anchorText/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const e = {
        instancePath: n + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.endAnchorText !== void 0 && typeof s.endAnchorText != "string") {
      const e = {
        instancePath: n + "/endAnchorText",
        schemaPath: "#/properties/endAnchorText/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.instance !== void 0) {
      let e = s.instance;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/instance",
          schemaPath: "#/properties/instance/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (t === null ? (t = [i]) : t.push(i), r++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const i = {
            instancePath: n + "/instance",
            schemaPath: "#/properties/instance/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/instance",
            schemaPath: "#/properties/instance/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (t === null ? (t = [i]) : t.push(i), r++);
        }
      }
    }
    if (s.tabId !== void 0 && typeof s.tabId != "string") {
      const e = {
        instancePath: n + "/tabId",
        schemaPath: "#/properties/tabId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
    if (s.matchCase !== void 0 && typeof s.matchCase != "boolean") {
      const e = {
        instancePath: n + "/matchCase",
        schemaPath: "#/properties/matchCase/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (t === null ? (t = [e]) : t.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (t === null ? (t = [e]) : t.push(e), r++);
  }
  return ((_.errors = t), r === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = {
  gdocs_create: I,
  gdocs_read: q,
  gdocs_get_document: N,
  gdocs_get_text: x,
  gdocs_find_text_range: A,
  gdocs_get_paragraph_range: E,
  gdocs_get_tables: j,
  gdocs_copy: S,
  gdocs_get_comments: O,
  gdocs_write: V,
  gdocs_append: W,
  gdocs_find_replace: R,
  gdocs_edit_paragraphs: M,
};
exports.NATIVE_TOOL_VALIDATORS = z;
exports.validate_gdocs_append = W;
exports.validate_gdocs_copy = S;
exports.validate_gdocs_create = I;
exports.validate_gdocs_edit_paragraphs = M;
exports.validate_gdocs_find_replace = R;
exports.validate_gdocs_find_text_range = A;
exports.validate_gdocs_get_comments = O;
exports.validate_gdocs_get_document = N;
exports.validate_gdocs_get_paragraph_range = E;
exports.validate_gdocs_get_tables = j;
exports.validate_gdocs_get_text = x;
exports.validate_gdocs_read = q;
exports.validate_gdocs_write = V;
