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
      (s._sentryDebugIds[a] = "d768b6f3-3dcb-48ff-bb43-49ef2e33d572"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-d768b6f3-3dcb-48ff-bb43-49ef2e33d572"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const B = h,
  J = {
    properties: { conflictBehavior: { enum: ["fail", "rename", "replace"] } },
  };
function h(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    if (s.driveId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "driveId" },
        message: "must have required property 'driveId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.folders === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "folders" },
        message: "must have required property 'folders'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "driveId" ||
          r === "folders" ||
          r === "conflictBehavior" ||
          r === "continueOnError" ||
          r === "account"
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
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.folders !== void 0) {
      let r = s.folders;
      if (Array.isArray(r)) {
        if (r.length > 100) {
          const o = {
            instancePath: a + "/folders",
            schemaPath: "#/properties/folders/maxItems",
            keyword: "maxItems",
            params: { limit: 100 },
            message: "must NOT have more than 100 items",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        if (r.length < 1) {
          const o = {
            instancePath: a + "/folders",
            schemaPath: "#/properties/folders/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        const t = r.length;
        for (let o = 0; o < t; o++) {
          let p = r[o];
          if (p && typeof p == "object" && !Array.isArray(p)) {
            if (p.path === void 0) {
              const f = {
                instancePath: a + "/folders/" + o,
                schemaPath: "#/properties/folders/items/required",
                keyword: "required",
                params: { missingProperty: "path" },
                message: "must have required property 'path'",
              };
              (e === null ? (e = [f]) : e.push(f), i++);
            }
            if (p.path !== void 0 && typeof p.path != "string") {
              const f = {
                instancePath: a + "/folders/" + o + "/path",
                schemaPath: "#/properties/folders/items/properties/path/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [f]) : e.push(f), i++);
            }
          } else {
            const f = {
              instancePath: a + "/folders/" + o,
              schemaPath: "#/properties/folders/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [f]) : e.push(f), i++);
          }
        }
      } else {
        const t = {
          instancePath: a + "/folders",
          schemaPath: "#/properties/folders/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.conflictBehavior !== void 0) {
      let r = s.conflictBehavior;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/conflictBehavior",
          schemaPath: "#/properties/conflictBehavior/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "fail" || r === "rename" || r === "replace")) {
        const t = {
          instancePath: a + "/conflictBehavior",
          schemaPath: "#/properties/conflictBehavior/enum",
          keyword: "enum",
          params: { allowedValues: J.properties.conflictBehavior.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.continueOnError !== void 0 && typeof s.continueOnError != "boolean") {
      const r = {
        instancePath: a + "/continueOnError",
        schemaPath: "#/properties/continueOnError/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
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
const x = g,
  O = {
    properties: {
      linkType: { enum: ["view", "edit", "embed"] },
      scope: { enum: ["organization", "users", "anonymous"] },
    },
  };
function g(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    if (s.driveId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "driveId" },
        message: "must have required property 'driveId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.path === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "driveId" ||
          r === "path" ||
          r === "linkType" ||
          r === "scope" ||
          r === "account"
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
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.linkType !== void 0) {
      let r = s.linkType;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/linkType",
          schemaPath: "#/properties/linkType/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "view" || r === "edit" || r === "embed")) {
        const t = {
          instancePath: a + "/linkType",
          schemaPath: "#/properties/linkType/enum",
          keyword: "enum",
          params: { allowedValues: O.properties.linkType.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.scope !== void 0) {
      let r = s.scope;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/scope",
          schemaPath: "#/properties/scope/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "organization" || r === "users" || r === "anonymous")) {
        const t = {
          instancePath: a + "/scope",
          schemaPath: "#/properties/scope/enum",
          keyword: "enum",
          params: { allowedValues: O.properties.scope.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
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
const E = v;
function v(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    if (s.driveId === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "driveId" },
        message: "must have required property 'driveId'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.paths === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "paths" },
        message: "must have required property 'paths'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in s)
      if (
        !(
          t === "driveId" ||
          t === "paths" ||
          t === "ifMatch" ||
          t === "account"
        )
      ) {
        const o = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const t = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.paths !== void 0) {
      let t = s.paths;
      const o = i;
      let p = !1;
      const f = i;
      if (typeof t != "string") {
        const c = {
          instancePath: a + "/paths",
          schemaPath: "#/properties/paths/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [c]) : e.push(c), i++);
      }
      var r = f === i;
      p = p || r;
      const H = i;
      if (Array.isArray(t)) {
        const c = t.length;
        for (let y = 0; y < c; y++)
          if (typeof t[y] != "string") {
            const j = {
              instancePath: a + "/paths/" + y,
              schemaPath: "#/properties/paths/anyOf/1/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [j]) : e.push(j), i++);
          }
      } else {
        const c = {
          instancePath: a + "/paths",
          schemaPath: "#/properties/paths/anyOf/1/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [c]) : e.push(c), i++);
      }
      var r = H === i;
      if (((p = p || r), p))
        ((i = o), e !== null && (o ? (e.length = o) : (e = null)));
      else {
        const c = {
          instancePath: a + "/paths",
          schemaPath: "#/properties/paths/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [c]) : e.push(c), i++);
      }
    }
    if (s.ifMatch !== void 0 && typeof s.ifMatch != "string") {
      const t = {
        instancePath: a + "/ifMatch",
        schemaPath: "#/properties/ifMatch/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  } else {
    const t = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), i++);
  }
  return ((v.errors = e), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = P,
  K = {
    properties: { conflictBehavior: { enum: ["fail", "rename", "replace"] } },
  };
function P(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    if (s.driveId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "driveId" },
        message: "must have required property 'driveId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.path === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "driveId" ||
          r === "path" ||
          r === "conflictBehavior" ||
          r === "account"
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
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.conflictBehavior !== void 0) {
      let r = s.conflictBehavior;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/conflictBehavior",
          schemaPath: "#/properties/conflictBehavior/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "fail" || r === "rename" || r === "replace")) {
        const t = {
          instancePath: a + "/conflictBehavior",
          schemaPath: "#/properties/conflictBehavior/enum",
          keyword: "enum",
          params: { allowedValues: K.properties.conflictBehavior.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
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
  return ((P.errors = e), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const M = b;
function b(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    for (const r in s)
      if (r !== "account") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.account !== void 0 && typeof s.account != "string") {
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
  return ((b.errors = e), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = w,
  D = {
    properties: {
      driveId: { type: "string" },
      path: { type: "string" },
      orderBy: {
        enum: ["name", "lastModifiedDateTime", "size"],
        type: "string",
      },
      sortOrder: { enum: ["asc", "desc"], type: "string" },
      limit: { type: "number", minimum: 1, maximum: 100 },
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
      account: { type: "string" },
    },
  },
  Q = Object.prototype.hasOwnProperty;
function w(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    if (s.driveId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "driveId" },
        message: "must have required property 'driveId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!Q.call(D.properties, r)) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.orderBy !== void 0) {
      let r = s.orderBy;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/orderBy",
          schemaPath: "#/properties/orderBy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "name" || r === "lastModifiedDateTime" || r === "size")) {
        const t = {
          instancePath: a + "/orderBy",
          schemaPath: "#/properties/orderBy/enum",
          keyword: "enum",
          params: { allowedValues: D.properties.orderBy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.sortOrder !== void 0) {
      let r = s.sortOrder;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/sortOrder",
          schemaPath: "#/properties/sortOrder/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "asc" || r === "desc")) {
        const t = {
          instancePath: a + "/sortOrder",
          schemaPath: "#/properties/sortOrder/enum",
          keyword: "enum",
          params: { allowedValues: D.properties.sortOrder.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.limit !== void 0) {
      let r = s.limit;
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
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
    if (s.account !== void 0 && typeof s.account != "string") {
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
  return ((w.errors = e), i === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = k;
function k(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    if (s.siteId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "siteId" },
        message: "must have required property 'siteId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "siteId" ||
          r === "limit" ||
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "account"
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
    if (s.siteId !== void 0 && typeof s.siteId != "string") {
      const r = {
        instancePath: a + "/siteId",
        schemaPath: "#/properties/siteId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.limit !== void 0) {
      let r = s.limit;
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
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
    if (s.account !== void 0 && typeof s.account != "string") {
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
  return ((k.errors = e), i === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = _;
function _(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    for (const r in s)
      if (!(r === "limit" || r === "account")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.limit !== void 0) {
      let r = s.limit;
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
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
  return ((_.errors = e), i === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = I;
function I(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    for (const r in s)
      if (
        !(r === "account" || r === "start" || r === "end" || r === "cursor")
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
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
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
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = q,
  U = require("ajv/dist/runtime/ucs2length").default;
function q(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    if (s.driveId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "driveId" },
        message: "must have required property 'driveId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.query === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "driveId" ||
          r === "query" ||
          r === "fileTypes" ||
          r === "limit" ||
          r === "cursor" ||
          r === "account"
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
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.query !== void 0) {
      let r = s.query;
      if (typeof r == "string") {
        if (U(r) < 1) {
          const t = {
            instancePath: a + "/query",
            schemaPath: "#/properties/query/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/query",
          schemaPath: "#/properties/query/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.fileTypes !== void 0) {
      let r = s.fileTypes;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let o = 0; o < t; o++)
          if (typeof r[o] != "string") {
            const p = {
              instancePath: a + "/fileTypes/" + o,
              schemaPath: "#/properties/fileTypes/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const t = {
          instancePath: a + "/fileTypes",
          schemaPath: "#/properties/fileTypes/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.limit !== void 0) {
      let r = s.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
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
    if (s.account !== void 0 && typeof s.account != "string") {
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
  return ((q.errors = e), i === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = N;
function N(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    if (s.query === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(r === "query" || r === "limit" || r === "cursor" || r === "account")
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
    if (s.query !== void 0 && typeof s.query != "string") {
      const r = {
        instancePath: a + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.limit !== void 0) {
      let r = s.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
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
    if (s.account !== void 0 && typeof s.account != "string") {
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
  return ((N.errors = e), i === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const F = A;
function A(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    if (s.driveId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "driveId" },
        message: "must have required property 'driveId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.path === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.sourcePath === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sourcePath" },
        message: "must have required property 'sourcePath'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "driveId" ||
          r === "path" ||
          r === "sourcePath" ||
          r === "mimeType" ||
          r === "account"
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
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.sourcePath !== void 0 && typeof s.sourcePath != "string") {
      const r = {
        instancePath: a + "/sourcePath",
        schemaPath: "#/properties/sourcePath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mimeType !== void 0 && typeof s.mimeType != "string") {
      const r = {
        instancePath: a + "/mimeType",
        schemaPath: "#/properties/mimeType/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
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
  return ((A.errors = e), i === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = T,
  W = {
    properties: { conflictBehavior: { enum: ["fail", "rename", "replace"] } },
  };
function T(
  s,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: u,
    rootData: l = s,
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
    if (s.driveId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "driveId" },
        message: "must have required property 'driveId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.sourcePath === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sourcePath" },
        message: "must have required property 'sourcePath'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.destinationPath === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "destinationPath" },
        message: "must have required property 'destinationPath'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "driveId" ||
          r === "sourcePath" ||
          r === "destinationPath" ||
          r === "overwrite" ||
          r === "conflictBehavior" ||
          r === "account"
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
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.sourcePath !== void 0 && typeof s.sourcePath != "string") {
      const r = {
        instancePath: a + "/sourcePath",
        schemaPath: "#/properties/sourcePath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.destinationPath !== void 0 && typeof s.destinationPath != "string") {
      const r = {
        instancePath: a + "/destinationPath",
        schemaPath: "#/properties/destinationPath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.overwrite !== void 0 && typeof s.overwrite != "boolean") {
      const r = {
        instancePath: a + "/overwrite",
        schemaPath: "#/properties/overwrite/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.conflictBehavior !== void 0) {
      let r = s.conflictBehavior;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/conflictBehavior",
          schemaPath: "#/properties/conflictBehavior/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "fail" || r === "rename" || r === "replace")) {
        const t = {
          instancePath: a + "/conflictBehavior",
          schemaPath: "#/properties/conflictBehavior/enum",
          keyword: "enum",
          params: { allowedValues: W.properties.conflictBehavior.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
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
  return ((T.errors = e), i === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = {
  sharepoint_create_folders_bulk: B,
  sharepoint_create_sharing_link: x,
  sharepoint_delete: E,
  sharepoint_folder: V,
  sharepoint_get_profile: M,
  sharepoint_list: L,
  sharepoint_list_drives: R,
  sharepoint_list_recent_documents: S,
  sharepoint_list_user_drives: z,
  sharepoint_search: C,
  sharepoint_search_sites: Y,
  sharepoint_update_file: F,
  sharepoint_upload: G,
};
exports.NATIVE_TOOL_VALIDATORS = X;
exports.validate_sharepoint_create_folders_bulk = B;
exports.validate_sharepoint_create_sharing_link = x;
exports.validate_sharepoint_delete = E;
exports.validate_sharepoint_folder = V;
exports.validate_sharepoint_get_profile = M;
exports.validate_sharepoint_list = L;
exports.validate_sharepoint_list_drives = R;
exports.validate_sharepoint_list_recent_documents = S;
exports.validate_sharepoint_list_user_drives = z;
exports.validate_sharepoint_search = C;
exports.validate_sharepoint_search_sites = Y;
exports.validate_sharepoint_update_file = F;
exports.validate_sharepoint_upload = G;
