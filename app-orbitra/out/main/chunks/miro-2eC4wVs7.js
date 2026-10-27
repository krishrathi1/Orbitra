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
      (s._sentryDebugIds[i] = "5c6366ca-0cba-4b8b-b7a3-ff95750c7b5b"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-5c6366ca-0cba-4b8b-b7a3-ff95750c7b5b"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const E = d;
function d(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = d.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.name === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (!(e === "name" || e === "description")) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.name !== void 0 && typeof s.name != "string") {
      const e = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.description !== void 0 && typeof s.description != "string") {
      const e = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((d.errors = r), t === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const F = l,
  Z = { properties: { shape: { enum: ["straight", "elbowed", "curved"] } } };
function l(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = l.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.startItemId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "startItemId" },
        message: "must have required property 'startItemId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.endItemId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "endItemId" },
        message: "must have required property 'endItemId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (
        !(
          e === "boardId" ||
          e === "startItemId" ||
          e === "endItemId" ||
          e === "caption" ||
          e === "shape"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.startItemId !== void 0 && typeof s.startItemId != "string") {
      const e = {
        instancePath: i + "/startItemId",
        schemaPath: "#/properties/startItemId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.endItemId !== void 0 && typeof s.endItemId != "string") {
      const e = {
        instancePath: i + "/endItemId",
        schemaPath: "#/properties/endItemId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.caption !== void 0 && typeof s.caption != "string") {
      const e = {
        instancePath: i + "/caption",
        schemaPath: "#/properties/caption/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.shape !== void 0) {
      let e = s.shape;
      if (typeof e != "string") {
        const o = {
          instancePath: i + "/shape",
          schemaPath: "#/properties/shape/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (!(e === "straight" || e === "elbowed" || e === "curved")) {
        const o = {
          instancePath: i + "/shape",
          schemaPath: "#/properties/shape/enum",
          keyword: "enum",
          params: { allowedValues: Z.properties.shape.enum },
          message: "must be equal to one of the allowed values",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((l.errors = r), t === 0);
}
l.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = y;
function y(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = y.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.title === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (
        !(
          e === "boardId" ||
          e === "title" ||
          e === "x" ||
          e === "y" ||
          e === "width" ||
          e === "height"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.title !== void 0 && typeof s.title != "string") {
      const e = {
        instancePath: i + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.x !== void 0 && typeof s.x != "number") {
      const e = {
        instancePath: i + "/x",
        schemaPath: "#/properties/x/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.y !== void 0 && typeof s.y != "number") {
      const e = {
        instancePath: i + "/y",
        schemaPath: "#/properties/y/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.width !== void 0 && typeof s.width != "number") {
      const e = {
        instancePath: i + "/width",
        schemaPath: "#/properties/width/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.height !== void 0 && typeof s.height != "number") {
      const e = {
        instancePath: i + "/height",
        schemaPath: "#/properties/height/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((y.errors = r), t === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = f,
  $ = {
    properties: {
      boardId: { type: "string" },
      shape: { type: "string" },
      content: { type: "string" },
      x: { type: "number" },
      y: { type: "number" },
      width: { type: "number" },
      height: { type: "number" },
      fillColor: { type: "string" },
      borderColor: { type: "string" },
      parentFrameId: { type: "string" },
    },
  },
  j = Object.prototype.hasOwnProperty;
function f(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = f.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.shape === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "shape" },
        message: "must have required property 'shape'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (!j.call($.properties, e)) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.shape !== void 0 && typeof s.shape != "string") {
      const e = {
        instancePath: i + "/shape",
        schemaPath: "#/properties/shape/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const e = {
        instancePath: i + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.x !== void 0 && typeof s.x != "number") {
      const e = {
        instancePath: i + "/x",
        schemaPath: "#/properties/x/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.y !== void 0 && typeof s.y != "number") {
      const e = {
        instancePath: i + "/y",
        schemaPath: "#/properties/y/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.width !== void 0 && typeof s.width != "number") {
      const e = {
        instancePath: i + "/width",
        schemaPath: "#/properties/width/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.height !== void 0 && typeof s.height != "number") {
      const e = {
        instancePath: i + "/height",
        schemaPath: "#/properties/height/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.fillColor !== void 0 && typeof s.fillColor != "string") {
      const e = {
        instancePath: i + "/fillColor",
        schemaPath: "#/properties/fillColor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.borderColor !== void 0 && typeof s.borderColor != "string") {
      const e = {
        instancePath: i + "/borderColor",
        schemaPath: "#/properties/borderColor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.parentFrameId !== void 0 && typeof s.parentFrameId != "string") {
      const e = {
        instancePath: i + "/parentFrameId",
        schemaPath: "#/properties/parentFrameId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((f.errors = r), t === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = c,
  ee = { properties: { shape: { enum: ["square", "rectangle"] } } };
function c(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = c.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.content === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "content" },
        message: "must have required property 'content'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (
        !(
          e === "boardId" ||
          e === "content" ||
          e === "x" ||
          e === "y" ||
          e === "width" ||
          e === "color" ||
          e === "shape" ||
          e === "parentFrameId"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const e = {
        instancePath: i + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.x !== void 0 && typeof s.x != "number") {
      const e = {
        instancePath: i + "/x",
        schemaPath: "#/properties/x/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.y !== void 0 && typeof s.y != "number") {
      const e = {
        instancePath: i + "/y",
        schemaPath: "#/properties/y/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.width !== void 0 && typeof s.width != "number") {
      const e = {
        instancePath: i + "/width",
        schemaPath: "#/properties/width/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.color !== void 0 && typeof s.color != "string") {
      const e = {
        instancePath: i + "/color",
        schemaPath: "#/properties/color/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.shape !== void 0) {
      let e = s.shape;
      if (typeof e != "string") {
        const o = {
          instancePath: i + "/shape",
          schemaPath: "#/properties/shape/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (!(e === "square" || e === "rectangle")) {
        const o = {
          instancePath: i + "/shape",
          schemaPath: "#/properties/shape/enum",
          keyword: "enum",
          params: { allowedValues: ee.properties.shape.enum },
          message: "must be equal to one of the allowed values",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    }
    if (s.parentFrameId !== void 0 && typeof s.parentFrameId != "string") {
      const e = {
        instancePath: i + "/parentFrameId",
        schemaPath: "#/properties/parentFrameId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((c.errors = r), t === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = h,
  T = {
    properties: {
      boardId: { type: "string" },
      content: { type: "string" },
      x: { type: "number" },
      y: { type: "number" },
      width: { type: "number" },
      fontSize: { type: "number" },
      fontFamily: { type: "string" },
      color: { type: "string" },
      textAlign: { enum: ["left", "center", "right"], type: "string" },
      parentFrameId: { type: "string" },
    },
  };
function h(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = h.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.content === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "content" },
        message: "must have required property 'content'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (!j.call(T.properties, e)) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const e = {
        instancePath: i + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.x !== void 0 && typeof s.x != "number") {
      const e = {
        instancePath: i + "/x",
        schemaPath: "#/properties/x/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.y !== void 0 && typeof s.y != "number") {
      const e = {
        instancePath: i + "/y",
        schemaPath: "#/properties/y/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.width !== void 0 && typeof s.width != "number") {
      const e = {
        instancePath: i + "/width",
        schemaPath: "#/properties/width/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.fontSize !== void 0 && typeof s.fontSize != "number") {
      const e = {
        instancePath: i + "/fontSize",
        schemaPath: "#/properties/fontSize/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.fontFamily !== void 0 && typeof s.fontFamily != "string") {
      const e = {
        instancePath: i + "/fontFamily",
        schemaPath: "#/properties/fontFamily/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.color !== void 0 && typeof s.color != "string") {
      const e = {
        instancePath: i + "/color",
        schemaPath: "#/properties/color/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.textAlign !== void 0) {
      let e = s.textAlign;
      if (typeof e != "string") {
        const o = {
          instancePath: i + "/textAlign",
          schemaPath: "#/properties/textAlign/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (!(e === "left" || e === "center" || e === "right")) {
        const o = {
          instancePath: i + "/textAlign",
          schemaPath: "#/properties/textAlign/enum",
          keyword: "enum",
          params: { allowedValues: T.properties.textAlign.enum },
          message: "must be equal to one of the allowed values",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    }
    if (s.parentFrameId !== void 0 && typeof s.parentFrameId != "string") {
      const e = {
        instancePath: i + "/parentFrameId",
        schemaPath: "#/properties/parentFrameId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((h.errors = r), t === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = b;
function b(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = b.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (e !== "boardId") {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((b.errors = r), t === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = g;
function g(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = g.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.itemId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "itemId" },
        message: "must have required property 'itemId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (!(e === "boardId" || e === "itemId")) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.itemId !== void 0 && typeof s.itemId != "string") {
      const e = {
        instancePath: i + "/itemId",
        schemaPath: "#/properties/itemId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((g.errors = r), t === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const M = P;
function P(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = P.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (e !== "boardId") {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((P.errors = r), t === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = I;
function I(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = I.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (
        !(e === "start" || e === "end" || e === "cursor" || e === "boardId")
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const o = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const o = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
        if (e < 1 || isNaN(e)) {
          const o = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const o = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const o = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
        if (e < 1 || isNaN(e)) {
          const o = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((I.errors = r), t === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = w;
function w(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = w.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.itemId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "itemId" },
        message: "must have required property 'itemId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (!(e === "boardId" || e === "itemId")) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.itemId !== void 0 && typeof s.itemId != "string") {
      const e = {
        instancePath: i + "/itemId",
        schemaPath: "#/properties/itemId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((w.errors = r), t === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = k;
function k(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = k.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const e in s)
      if (!(e === "start" || e === "end" || e === "cursor")) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const o = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const o = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
        if (e < 1 || isNaN(e)) {
          const o = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const o = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const o = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
        if (e < 1 || isNaN(e)) {
          const o = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((k.errors = r), t === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const H = v;
function v(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = v.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "boardId" ||
          e === "limit"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const o = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const o = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
        if (e < 1 || isNaN(e)) {
          const o = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const o = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const o = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
        if (e < 1 || isNaN(e)) {
          const o = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.limit !== void 0) {
      let e = s.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const o = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (typeof e == "number") {
        if (e > 50 || isNaN(e)) {
          const o = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
        if (e < 1 || isNaN(e)) {
          const o = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
      }
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((v.errors = r), t === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const J = _;
function _(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = _.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "boardId" ||
          e === "type" ||
          e === "limit"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const o = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const o = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
        if (e < 1 || isNaN(e)) {
          const o = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const o = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const o = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
        if (e < 1 || isNaN(e)) {
          const o = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.type !== void 0 && typeof s.type != "string") {
      const e = {
        instancePath: i + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.limit !== void 0) {
      let e = s.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const o = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (typeof e == "number") {
        if (e > 50 || isNaN(e)) {
          const o = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
        if (e < 1 || isNaN(e)) {
          const o = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
      }
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((_.errors = r), t === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const K = q;
function q(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = q.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.query === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (!(e === "limit" || e === "cursor" || e === "query")) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.limit !== void 0) {
      let e = s.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const o = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const o = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
        if (e < 1 || isNaN(e)) {
          const o = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [o]) : r.push(o), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.query !== void 0 && typeof s.query != "string") {
      const e = {
        instancePath: i + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((q.errors = r), t === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Q = N;
function N(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = N.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (!(e === "boardId" || e === "name" || e === "description")) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const e = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.description !== void 0 && typeof s.description != "string") {
      const e = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((N.errors = r), t === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const U = A;
function A(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = A.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.itemId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "itemId" },
        message: "must have required property 'itemId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (
        !(
          e === "boardId" ||
          e === "itemId" ||
          e === "title" ||
          e === "x" ||
          e === "y" ||
          e === "width" ||
          e === "height"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.itemId !== void 0 && typeof s.itemId != "string") {
      const e = {
        instancePath: i + "/itemId",
        schemaPath: "#/properties/itemId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.title !== void 0 && typeof s.title != "string") {
      const e = {
        instancePath: i + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.x !== void 0 && typeof s.x != "number") {
      const e = {
        instancePath: i + "/x",
        schemaPath: "#/properties/x/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.y !== void 0 && typeof s.y != "number") {
      const e = {
        instancePath: i + "/y",
        schemaPath: "#/properties/y/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.width !== void 0 && typeof s.width != "number") {
      const e = {
        instancePath: i + "/width",
        schemaPath: "#/properties/width/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.height !== void 0 && typeof s.height != "number") {
      const e = {
        instancePath: i + "/height",
        schemaPath: "#/properties/height/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((A.errors = r), t === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = x,
  re = { properties: { shape: { enum: ["square", "rectangle"] } } };
function x(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = x.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.itemId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "itemId" },
        message: "must have required property 'itemId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (
        !(
          e === "boardId" ||
          e === "itemId" ||
          e === "content" ||
          e === "x" ||
          e === "y" ||
          e === "width" ||
          e === "color" ||
          e === "shape"
        )
      ) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.itemId !== void 0 && typeof s.itemId != "string") {
      const e = {
        instancePath: i + "/itemId",
        schemaPath: "#/properties/itemId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const e = {
        instancePath: i + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.x !== void 0 && typeof s.x != "number") {
      const e = {
        instancePath: i + "/x",
        schemaPath: "#/properties/x/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.y !== void 0 && typeof s.y != "number") {
      const e = {
        instancePath: i + "/y",
        schemaPath: "#/properties/y/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.width !== void 0 && typeof s.width != "number") {
      const e = {
        instancePath: i + "/width",
        schemaPath: "#/properties/width/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.color !== void 0 && typeof s.color != "string") {
      const e = {
        instancePath: i + "/color",
        schemaPath: "#/properties/color/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.shape !== void 0) {
      let e = s.shape;
      if (typeof e != "string") {
        const o = {
          instancePath: i + "/shape",
          schemaPath: "#/properties/shape/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (!(e === "square" || e === "rectangle")) {
        const o = {
          instancePath: i + "/shape",
          schemaPath: "#/properties/shape/enum",
          keyword: "enum",
          params: { allowedValues: re.properties.shape.enum },
          message: "must be equal to one of the allowed values",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((x.errors = r), t === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = D,
  O = {
    properties: {
      boardId: { type: "string" },
      itemId: { type: "string" },
      content: { type: "string" },
      x: { type: "number" },
      y: { type: "number" },
      width: { type: "number" },
      fontSize: { type: "number" },
      color: { type: "string" },
      textAlign: { enum: ["left", "center", "right"], type: "string" },
    },
  };
function D(
  s,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let r = null,
    t = 0;
  const n = D.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.boardId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.itemId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "itemId" },
        message: "must have required property 'itemId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (!j.call(O.properties, e)) {
        const o = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    if (s.boardId !== void 0 && typeof s.boardId != "string") {
      const e = {
        instancePath: i + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.itemId !== void 0 && typeof s.itemId != "string") {
      const e = {
        instancePath: i + "/itemId",
        schemaPath: "#/properties/itemId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const e = {
        instancePath: i + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.x !== void 0 && typeof s.x != "number") {
      const e = {
        instancePath: i + "/x",
        schemaPath: "#/properties/x/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.y !== void 0 && typeof s.y != "number") {
      const e = {
        instancePath: i + "/y",
        schemaPath: "#/properties/y/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.width !== void 0 && typeof s.width != "number") {
      const e = {
        instancePath: i + "/width",
        schemaPath: "#/properties/width/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.fontSize !== void 0 && typeof s.fontSize != "number") {
      const e = {
        instancePath: i + "/fontSize",
        schemaPath: "#/properties/fontSize/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.color !== void 0 && typeof s.color != "string") {
      const e = {
        instancePath: i + "/color",
        schemaPath: "#/properties/color/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.textAlign !== void 0) {
      let e = s.textAlign;
      if (typeof e != "string") {
        const o = {
          instancePath: i + "/textAlign",
          schemaPath: "#/properties/textAlign/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
      if (!(e === "left" || e === "center" || e === "right")) {
        const o = {
          instancePath: i + "/textAlign",
          schemaPath: "#/properties/textAlign/enum",
          keyword: "enum",
          params: { allowedValues: O.properties.textAlign.enum },
          message: "must be equal to one of the allowed values",
        };
        (r === null ? (r = [o]) : r.push(o), t++);
      }
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((D.errors = r), t === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const se = {
  miro_create_board: E,
  miro_create_connector: F,
  miro_create_frame: S,
  miro_create_shape: z,
  miro_create_sticky_note: C,
  miro_create_text: V,
  miro_delete_board: L,
  miro_delete_item: R,
  miro_get_board: M,
  miro_get_board_members: Y,
  miro_get_item: B,
  miro_list_boards: G,
  miro_list_connectors: H,
  miro_list_items: J,
  miro_search_boards: K,
  miro_update_board: Q,
  miro_update_frame: U,
  miro_update_sticky_note: W,
  miro_update_text: X,
};
exports.NATIVE_TOOL_VALIDATORS = se;
exports.validate_miro_create_board = E;
exports.validate_miro_create_connector = F;
exports.validate_miro_create_frame = S;
exports.validate_miro_create_shape = z;
exports.validate_miro_create_sticky_note = C;
exports.validate_miro_create_text = V;
exports.validate_miro_delete_board = L;
exports.validate_miro_delete_item = R;
exports.validate_miro_get_board = M;
exports.validate_miro_get_board_members = Y;
exports.validate_miro_get_item = B;
exports.validate_miro_list_boards = G;
exports.validate_miro_list_connectors = H;
exports.validate_miro_list_items = J;
exports.validate_miro_search_boards = K;
exports.validate_miro_update_board = Q;
exports.validate_miro_update_frame = U;
exports.validate_miro_update_sticky_note = W;
exports.validate_miro_update_text = X;
