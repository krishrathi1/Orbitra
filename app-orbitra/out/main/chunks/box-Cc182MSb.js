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
      o = new s.Error().stack;
    o &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[o] = "27819e01-58a4-4883-9a88-82c8979bebef"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-27819e01-58a4-4883-9a88-82c8979bebef"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const v = u,
  k = {
    properties: {
      itemType: { enum: ["file", "folder"] },
      role: {
        enum: [
          "editor",
          "viewer",
          "previewer",
          "uploader",
          "previewer uploader",
          "viewer uploader",
          "co-owner",
        ],
      },
    },
  };
function u(
  s,
  {
    instancePath: o = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    i = 0;
  const n = u.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.itemId === void 0) {
      const e = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "itemId" },
        message: "must have required property 'itemId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.itemType === void 0) {
      const e = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "itemType" },
        message: "must have required property 'itemType'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.role === void 0) {
      const e = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "role" },
        message: "must have required property 'role'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (
        !(
          e === "accountId" ||
          e === "itemId" ||
          e === "itemType" ||
          e === "userId" ||
          e === "email" ||
          e === "role"
        )
      ) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const e = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.itemId !== void 0 && typeof s.itemId != "string") {
      const e = {
        instancePath: o + "/itemId",
        schemaPath: "#/properties/itemId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.itemType !== void 0) {
      let e = s.itemType;
      if (typeof e != "string") {
        const t = {
          instancePath: o + "/itemType",
          schemaPath: "#/properties/itemType/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (!(e === "file" || e === "folder")) {
        const t = {
          instancePath: o + "/itemType",
          schemaPath: "#/properties/itemType/enum",
          keyword: "enum",
          params: { allowedValues: k.properties.itemType.enum },
          message: "must be equal to one of the allowed values",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    }
    if (s.userId !== void 0 && typeof s.userId != "string") {
      const e = {
        instancePath: o + "/userId",
        schemaPath: "#/properties/userId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.email !== void 0 && typeof s.email != "string") {
      const e = {
        instancePath: o + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.role !== void 0) {
      let e = s.role;
      if (typeof e != "string") {
        const t = {
          instancePath: o + "/role",
          schemaPath: "#/properties/role/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (
        !(
          e === "editor" ||
          e === "viewer" ||
          e === "previewer" ||
          e === "uploader" ||
          e === "previewer uploader" ||
          e === "viewer uploader" ||
          e === "co-owner"
        )
      ) {
        const t = {
          instancePath: o + "/role",
          schemaPath: "#/properties/role/enum",
          keyword: "enum",
          params: { allowedValues: k.properties.role.enum },
          message: "must be equal to one of the allowed values",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    }
  } else {
    const e = {
      instancePath: o,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((u.errors = r), i === 0);
}
u.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _ = d;
function d(
  s,
  {
    instancePath: o = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    i = 0;
  const n = d.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.name === void 0) {
      const e = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (!(e === "accountId" || e === "name" || e === "parentFolderId")) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const e = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const e = {
        instancePath: o + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.parentFolderId !== void 0 && typeof s.parentFolderId != "string") {
      const e = {
        instancePath: o + "/parentFolderId",
        schemaPath: "#/properties/parentFolderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: o,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((d.errors = r), i === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const N = f;
function f(
  s,
  {
    instancePath: o = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    i = 0;
  const n = f.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.fileId === void 0) {
      const e = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fileId" },
        message: "must have required property 'fileId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (!(e === "accountId" || e === "fileId")) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const e = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.fileId !== void 0 && typeof s.fileId != "string") {
      const e = {
        instancePath: o + "/fileId",
        schemaPath: "#/properties/fileId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: o,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((f.errors = r), i === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const x = c;
function c(
  s,
  {
    instancePath: o = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    i = 0;
  const n = c.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.fileId === void 0) {
      const e = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fileId" },
        message: "must have required property 'fileId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (!(e === "accountId" || e === "fileId")) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const e = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.fileId !== void 0 && typeof s.fileId != "string") {
      const e = {
        instancePath: o + "/fileId",
        schemaPath: "#/properties/fileId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: o,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((c.errors = r), i === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const q = y,
  F = require("ajv/dist/runtime/ucs2length").default;
function y(
  s,
  {
    instancePath: o = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    i = 0;
  const n = y.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.fileId === void 0) {
      const e = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fileId" },
        message: "must have required property 'fileId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (!(e === "fileId" || e === "accountId")) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.fileId !== void 0) {
      let e = s.fileId;
      if (typeof e == "string") {
        if (F(e) < 1) {
          const t = {
            instancePath: o + "/fileId",
            schemaPath: "#/properties/fileId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      } else {
        const t = {
          instancePath: o + "/fileId",
          schemaPath: "#/properties/fileId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const e = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: o,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((y.errors = r), i === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const A = h;
function h(
  s,
  {
    instancePath: o = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    i = 0;
  const n = h.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const e in s)
      if (e !== "accountId") {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const e = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: o,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((h.errors = r), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const D = g;
function g(
  s,
  {
    instancePath: o = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    i = 0;
  const n = g.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.folderId === void 0) {
      const e = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "folderId" },
        message: "must have required property 'folderId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (
        !(
          e === "accountId" ||
          e === "folderId" ||
          e === "limit" ||
          e === "marker" ||
          e === "start" ||
          e === "end" ||
          e === "cursor"
        )
      ) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const e = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.folderId !== void 0 && typeof s.folderId != "string") {
      const e = {
        instancePath: o + "/folderId",
        schemaPath: "#/properties/folderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.limit !== void 0) {
      let e = s.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: o + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 1e3 || isNaN(e)) {
          const t = {
            instancePath: o + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: o + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.marker !== void 0 && typeof s.marker != "string") {
      const e = {
        instancePath: o + "/marker",
        schemaPath: "#/properties/marker/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: o + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: o + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: o + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: o + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: o + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: o + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: o + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: o,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((g.errors = r), i === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const T = b;
function b(
  s,
  {
    instancePath: o = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    i = 0;
  const n = b.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const e in s)
      if (
        !(
          e === "limit" ||
          e === "marker" ||
          e === "accountId" ||
          e === "folderId" ||
          e === "start" ||
          e === "end" ||
          e === "cursor"
        )
      ) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.limit !== void 0) {
      let e = s.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: o + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 1e3 || isNaN(e)) {
          const t = {
            instancePath: o + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: o + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.marker !== void 0 && typeof s.marker != "string") {
      const e = {
        instancePath: o + "/marker",
        schemaPath: "#/properties/marker/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const e = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.folderId !== void 0 && typeof s.folderId != "string") {
      const e = {
        instancePath: o + "/folderId",
        schemaPath: "#/properties/folderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: o + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: o + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: o + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: o + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: o + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: o + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: o + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: o,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((b.errors = r), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = P;
function P(
  s,
  {
    instancePath: o = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    i = 0;
  const n = P.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.fileId === void 0) {
      const e = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fileId" },
        message: "must have required property 'fileId'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (
        !(
          e === "accountId" ||
          e === "fileId" ||
          e === "newParentFolderId" ||
          e === "newName"
        )
      ) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const e = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.fileId !== void 0 && typeof s.fileId != "string") {
      const e = {
        instancePath: o + "/fileId",
        schemaPath: "#/properties/fileId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (
      s.newParentFolderId !== void 0 &&
      typeof s.newParentFolderId != "string"
    ) {
      const e = {
        instancePath: o + "/newParentFolderId",
        schemaPath: "#/properties/newParentFolderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.newName !== void 0 && typeof s.newName != "string") {
      const e = {
        instancePath: o + "/newName",
        schemaPath: "#/properties/newName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: o,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((P.errors = r), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const O = I;
function I(
  s,
  {
    instancePath: o = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    i = 0;
  const n = I.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.query === void 0) {
      const e = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (
        !(
          e === "offset" ||
          e === "accountId" ||
          e === "query" ||
          e === "limit" ||
          e === "cursor"
        )
      ) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.offset !== void 0) {
      let e = s.offset;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: o + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9999 || isNaN(e)) {
          const t = {
            instancePath: o + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9999 },
            message: "must be <= 9999",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 0 || isNaN(e)) {
          const t = {
            instancePath: o + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const e = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.query !== void 0 && typeof s.query != "string") {
      const e = {
        instancePath: o + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.limit !== void 0) {
      let e = s.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: o + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: o + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: o + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [t]) : r.push(t), i++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: o + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: o,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((I.errors = r), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = w;
function w(
  s,
  {
    instancePath: o = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    i = 0;
  const n = w.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.filename === void 0) {
      const e = {
        instancePath: o,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "filename" },
        message: "must have required property 'filename'",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    for (const e in s)
      if (
        !(
          e === "sourcePath" ||
          e === "accountId" ||
          e === "sourceUrl" ||
          e === "filename" ||
          e === "folderId"
        )
      ) {
        const t = {
          instancePath: o,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [t]) : r.push(t), i++);
      }
    if (s.sourcePath !== void 0 && typeof s.sourcePath != "string") {
      const e = {
        instancePath: o + "/sourcePath",
        schemaPath: "#/properties/sourcePath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const e = {
        instancePath: o + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.sourceUrl !== void 0 && typeof s.sourceUrl != "string") {
      const e = {
        instancePath: o + "/sourceUrl",
        schemaPath: "#/properties/sourceUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.filename !== void 0 && typeof s.filename != "string") {
      const e = {
        instancePath: o + "/filename",
        schemaPath: "#/properties/filename/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
    if (s.folderId !== void 0 && typeof s.folderId != "string") {
      const e = {
        instancePath: o + "/folderId",
        schemaPath: "#/properties/folderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), i++);
    }
  } else {
    const e = {
      instancePath: o,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), i++);
  }
  return ((w.errors = r), i === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = {
  box_add_collaboration: v,
  box_create_folder: _,
  box_delete_file: N,
  box_get_file: x,
  box_download_file: q,
  box_get_user: A,
  box_list_collaborations: D,
  box_list_folder: T,
  box_move_file: j,
  box_search_files: O,
  box_upload_file: E,
};
exports.NATIVE_TOOL_VALIDATORS = L;
exports.validate_box_add_collaboration = v;
exports.validate_box_create_folder = _;
exports.validate_box_delete_file = N;
exports.validate_box_download_file = q;
exports.validate_box_get_file = x;
exports.validate_box_get_user = A;
exports.validate_box_list_collaborations = D;
exports.validate_box_list_folder = T;
exports.validate_box_move_file = j;
exports.validate_box_search_files = O;
exports.validate_box_upload_file = E;
