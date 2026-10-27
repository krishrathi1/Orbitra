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
      (t._sentryDebugIds[a] = "c697c057-9572-4157-98dc-a9b17177e162"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-c697c057-9572-4157-98dc-a9b17177e162"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const L = d;
function d(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = d.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.issueKey === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueKey" },
        message: "must have required property 'issueKey'",
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
      if (!(s === "issueKey" || s === "body")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.issueKey !== void 0 && typeof t.issueKey != "string") {
      const s = {
        instancePath: a + "/issueKey",
        schemaPath: "#/properties/issueKey/type",
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
  return ((d.errors = e), i === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = f,
  V = require("ajv/dist/runtime/ucs2length").default;
function f(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
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
    if (t.issueKey === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueKey" },
        message: "must have required property 'issueKey'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.sourcePath === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sourcePath" },
        message: "must have required property 'sourcePath'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.filename === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "filename" },
        message: "must have required property 'filename'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "issueKey" || s === "sourcePath" || s === "filename")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.issueKey !== void 0) {
      let s = t.issueKey;
      if (typeof s == "string") {
        if (V(s) < 1) {
          const r = {
            instancePath: a + "/issueKey",
            schemaPath: "#/properties/issueKey/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/issueKey",
          schemaPath: "#/properties/issueKey/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.sourcePath !== void 0) {
      let s = t.sourcePath;
      if (typeof s == "string") {
        if (V(s) < 1) {
          const r = {
            instancePath: a + "/sourcePath",
            schemaPath: "#/properties/sourcePath/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/sourcePath",
          schemaPath: "#/properties/sourcePath/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.filename !== void 0) {
      let s = t.filename;
      if (typeof s == "string") {
        if (V(s) < 1) {
          const r = {
            instancePath: a + "/filename",
            schemaPath: "#/properties/filename/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/filename",
          schemaPath: "#/properties/filename/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((f.errors = e), i === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = h,
  oe = {
    properties: {
      projectKey: { type: "string" },
      summary: { type: "string" },
      issueType: { type: "string" },
      description: { type: "string" },
      assigneeAccountId: { type: "string" },
      priority: { type: "string" },
      parentKey: { type: "string" },
      labels: { type: "array", items: { type: "string" } },
      customFields: {
        type: "object",
        propertyNames: { type: "string" },
        additionalProperties: {},
      },
    },
  },
  M = Object.prototype.hasOwnProperty;
function h(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
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
    if (t.projectKey === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectKey" },
        message: "must have required property 'projectKey'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.summary === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "summary" },
        message: "must have required property 'summary'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (!M.call(oe.properties, r)) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    if (t.projectKey !== void 0 && typeof t.projectKey != "string") {
      const r = {
        instancePath: a + "/projectKey",
        schemaPath: "#/properties/projectKey/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.summary !== void 0 && typeof t.summary != "string") {
      const r = {
        instancePath: a + "/summary",
        schemaPath: "#/properties/summary/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.issueType !== void 0 && typeof t.issueType != "string") {
      const r = {
        instancePath: a + "/issueType",
        schemaPath: "#/properties/issueType/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const r = {
        instancePath: a + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (
      t.assigneeAccountId !== void 0 &&
      typeof t.assigneeAccountId != "string"
    ) {
      const r = {
        instancePath: a + "/assigneeAccountId",
        schemaPath: "#/properties/assigneeAccountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.priority !== void 0 && typeof t.priority != "string") {
      const r = {
        instancePath: a + "/priority",
        schemaPath: "#/properties/priority/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.parentKey !== void 0 && typeof t.parentKey != "string") {
      const r = {
        instancePath: a + "/parentKey",
        schemaPath: "#/properties/parentKey/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.labels !== void 0) {
      let r = t.labels;
      if (Array.isArray(r)) {
        const p = r.length;
        for (let o = 0; o < p; o++)
          if (typeof r[o] != "string") {
            const m = {
              instancePath: a + "/labels/" + o,
              schemaPath: "#/properties/labels/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
      } else {
        const p = {
          instancePath: a + "/labels",
          schemaPath: "#/properties/labels/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (t.customFields !== void 0) {
      let r = t.customFields;
      if (r && typeof r == "object" && !Array.isArray(r))
        for (const p in r) {
          const o = i;
          if (typeof p != "string") {
            const m = {
              instancePath: a + "/customFields",
              schemaPath: "#/properties/customFields/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: p,
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
          var s = o === i;
          if (!s) {
            const m = {
              instancePath: a + "/customFields",
              schemaPath: "#/properties/customFields/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: p },
              message: "property name must be valid",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
        }
      else {
        const p = {
          instancePath: a + "/customFields",
          schemaPath: "#/properties/customFields/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
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
const Y = g;
function g(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
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
    if (t.key === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "key" },
        message: "must have required property 'key'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.name === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.leadAccountId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "leadAccountId" },
        message: "must have required property 'leadAccountId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "accountId" ||
          s === "key" ||
          s === "name" ||
          s === "leadAccountId" ||
          s === "projectTypeKey" ||
          s === "projectTemplateKey"
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
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.key !== void 0 && typeof t.key != "string") {
      const s = {
        instancePath: a + "/key",
        schemaPath: "#/properties/key/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.leadAccountId !== void 0 && typeof t.leadAccountId != "string") {
      const s = {
        instancePath: a + "/leadAccountId",
        schemaPath: "#/properties/leadAccountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.projectTypeKey !== void 0 && typeof t.projectTypeKey != "string") {
      const s = {
        instancePath: a + "/projectTypeKey",
        schemaPath: "#/properties/projectTypeKey/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      t.projectTemplateKey !== void 0 &&
      typeof t.projectTemplateKey != "string"
    ) {
      const s = {
        instancePath: a + "/projectTemplateKey",
        schemaPath: "#/properties/projectTemplateKey/type",
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
const z = b;
function b(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
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
    if (t.name === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.originBoardId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "originBoardId" },
        message: "must have required property 'originBoardId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "accountId" ||
          s === "name" ||
          s === "originBoardId" ||
          s === "startDate" ||
          s === "endDate" ||
          s === "goal"
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
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.originBoardId !== void 0 && typeof t.originBoardId != "number") {
      const s = {
        instancePath: a + "/originBoardId",
        schemaPath: "#/properties/originBoardId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.startDate !== void 0 && typeof t.startDate != "string") {
      const s = {
        instancePath: a + "/startDate",
        schemaPath: "#/properties/startDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.endDate !== void 0 && typeof t.endDate != "string") {
      const s = {
        instancePath: a + "/endDate",
        schemaPath: "#/properties/endDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.goal !== void 0 && typeof t.goal != "string") {
      const s = {
        instancePath: a + "/goal",
        schemaPath: "#/properties/goal/type",
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
const C = P;
function P(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
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
    if (t.name === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "accountId" ||
          s === "projectKey" ||
          s === "projectId" ||
          s === "name" ||
          s === "description"
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
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.projectKey !== void 0 && typeof t.projectKey != "string") {
      const s = {
        instancePath: a + "/projectKey",
        schemaPath: "#/properties/projectKey/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.projectId !== void 0 && typeof t.projectId != "string") {
      const s = {
        instancePath: a + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const s = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: a + "/description",
        schemaPath: "#/properties/description/type",
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
  return ((P.errors = e), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = k;
function k(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
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
    if (t.issueKey === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueKey" },
        message: "must have required property 'issueKey'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.commentId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "commentId" },
        message: "must have required property 'commentId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "accountId" || s === "issueKey" || s === "commentId")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.issueKey !== void 0 && typeof t.issueKey != "string") {
      const s = {
        instancePath: a + "/issueKey",
        schemaPath: "#/properties/issueKey/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.commentId !== void 0 && typeof t.commentId != "string") {
      const s = {
        instancePath: a + "/commentId",
        schemaPath: "#/properties/commentId/type",
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
  return ((k.errors = e), i === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const H = w;
function w(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
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
    if (t.issueKey === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueKey" },
        message: "must have required property 'issueKey'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "accountId" || s === "issueKey")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.issueKey !== void 0 && typeof t.issueKey != "string") {
      const s = {
        instancePath: a + "/issueKey",
        schemaPath: "#/properties/issueKey/type",
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
const J = v;
function v(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = v.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  )
    for (const s in t) {
      const r = {
        instancePath: a,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: s },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  else {
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
const Q = j;
function j(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
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
    if (t.issueKey === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueKey" },
        message: "must have required property 'issueKey'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "issueKey") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.issueKey !== void 0 && typeof t.issueKey != "string") {
      const s = {
        instancePath: a + "/issueKey",
        schemaPath: "#/properties/issueKey/type",
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
  return ((j.errors = e), i === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const U = _;
function _(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
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
    if (t.projectKey === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectKey" },
        message: "must have required property 'projectKey'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (!(s === "accountId" || s === "projectKey")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.projectKey !== void 0 && typeof t.projectKey != "string") {
      const s = {
        instancePath: a + "/projectKey",
        schemaPath: "#/properties/projectKey/type",
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
  return ((_.errors = e), i === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = I;
function I(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
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
    for (const s in t)
      if (s !== "accountId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = N;
function N(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
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
    for (const s in t)
      if (
        !(
          s === "startAt" ||
          s === "maxResults" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
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
    if (t.startAt !== void 0) {
      let s = t.startAt;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/startAt",
          schemaPath: "#/properties/startAt/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/startAt",
            schemaPath: "#/properties/startAt/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 0 || isNaN(s)) {
          const r = {
            instancePath: a + "/startAt",
            schemaPath: "#/properties/startAt/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.maxResults !== void 0) {
      let s = t.maxResults;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 50 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
const Z = A;
function A(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = A.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.inwardKey === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "inwardKey" },
        message: "must have required property 'inwardKey'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.outwardKey === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "outwardKey" },
        message: "must have required property 'outwardKey'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.linkType === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "linkType" },
        message: "must have required property 'linkType'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "accountId" ||
          s === "inwardKey" ||
          s === "outwardKey" ||
          s === "linkType"
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
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.inwardKey !== void 0 && typeof t.inwardKey != "string") {
      const s = {
        instancePath: a + "/inwardKey",
        schemaPath: "#/properties/inwardKey/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.outwardKey !== void 0 && typeof t.outwardKey != "string") {
      const s = {
        instancePath: a + "/outwardKey",
        schemaPath: "#/properties/outwardKey/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.linkType !== void 0 && typeof t.linkType != "string") {
      const s = {
        instancePath: a + "/linkType",
        schemaPath: "#/properties/linkType/type",
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
  return ((A.errors = e), i === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const $ = K,
  me = { properties: { type: { enum: ["scrum", "kanban", "simple"] } } };
function K(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = K.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "accountId" ||
          s === "projectKeyOrId" ||
          s === "type" ||
          s === "maxResults" ||
          s === "startAt" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
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
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.projectKeyOrId !== void 0 && typeof t.projectKeyOrId != "string") {
      const s = {
        instancePath: a + "/projectKeyOrId",
        schemaPath: "#/properties/projectKeyOrId/type",
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
      if (!(s === "scrum" || s === "kanban" || s === "simple")) {
        const r = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: me.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.maxResults !== void 0) {
      let s = t.maxResults;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.startAt !== void 0) {
      let s = t.startAt;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/startAt",
          schemaPath: "#/properties/startAt/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/startAt",
            schemaPath: "#/properties/startAt/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 0 || isNaN(s)) {
          const r = {
            instancePath: a + "/startAt",
            schemaPath: "#/properties/startAt/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
  return ((K.errors = e), i === 0);
}
K.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ee = x;
function x(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = x.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.issueKey === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueKey" },
        message: "must have required property 'issueKey'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "maxResults" ||
          s === "startAt" ||
          s === "issueKey" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
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
    if (t.maxResults !== void 0) {
      let s = t.maxResults;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.startAt !== void 0) {
      let s = t.startAt;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/startAt",
          schemaPath: "#/properties/startAt/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/startAt",
            schemaPath: "#/properties/startAt/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 0 || isNaN(s)) {
          const r = {
            instancePath: a + "/startAt",
            schemaPath: "#/properties/startAt/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.issueKey !== void 0 && typeof t.issueKey != "string") {
      const s = {
        instancePath: a + "/issueKey",
        schemaPath: "#/properties/issueKey/type",
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
  return ((x.errors = e), i === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const se = q;
function q(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = q.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.boardId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "boardId" },
        message: "must have required property 'boardId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "accountId" ||
          s === "boardId" ||
          s === "state" ||
          s === "maxResults" ||
          s === "startAt" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
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
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.boardId !== void 0 && typeof t.boardId != "number") {
      const s = {
        instancePath: a + "/boardId",
        schemaPath: "#/properties/boardId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.state !== void 0 && typeof t.state != "string") {
      const s = {
        instancePath: a + "/state",
        schemaPath: "#/properties/state/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.maxResults !== void 0) {
      let s = t.maxResults;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.startAt !== void 0) {
      let s = t.startAt;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/startAt",
          schemaPath: "#/properties/startAt/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/startAt",
            schemaPath: "#/properties/startAt/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 0 || isNaN(s)) {
          const r = {
            instancePath: a + "/startAt",
            schemaPath: "#/properties/startAt/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
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
  return ((q.errors = e), i === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const re = D;
function D(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = D.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.issueKey === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueKey" },
        message: "must have required property 'issueKey'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "issueKey") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.issueKey !== void 0 && typeof t.issueKey != "string") {
      const s = {
        instancePath: a + "/issueKey",
        schemaPath: "#/properties/issueKey/type",
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
  return ((D.errors = e), i === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const te = T,
  ue = { properties: { userType: { enum: ["human", "app", "all"] } } };
function T(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = T.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "accountId" ||
          s === "maxResults" ||
          s === "startAt" ||
          s === "userType" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
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
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.maxResults !== void 0 && typeof t.maxResults != "number") {
      const s = {
        instancePath: a + "/maxResults",
        schemaPath: "#/properties/maxResults/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.startAt !== void 0 && typeof t.startAt != "number") {
      const s = {
        instancePath: a + "/startAt",
        schemaPath: "#/properties/startAt/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.userType !== void 0) {
      let s = t.userType;
      if (typeof s != "string") {
        const r = {
          instancePath: a + "/userType",
          schemaPath: "#/properties/userType/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (!(s === "human" || s === "app" || s === "all")) {
        const r = {
          instancePath: a + "/userType",
          schemaPath: "#/properties/userType/enum",
          keyword: "enum",
          params: { allowedValues: ue.properties.userType.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
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
  return ((T.errors = e), i === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ie = R;
function R(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = R.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.jql === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "jql" },
        message: "must have required property 'jql'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "jql" ||
          s === "maxResults" ||
          s === "fields" ||
          s === "nextPageToken" ||
          s === "limit" ||
          s === "cursor"
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
    if (t.jql !== void 0 && typeof t.jql != "string") {
      const s = {
        instancePath: a + "/jql",
        schemaPath: "#/properties/jql/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.maxResults !== void 0) {
      let s = t.maxResults;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 50 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.fields !== void 0) {
      let s = t.fields;
      if (Array.isArray(s)) {
        const r = s.length;
        for (let p = 0; p < r; p++)
          if (typeof s[p] != "string") {
            const o = {
              instancePath: a + "/fields/" + p,
              schemaPath: "#/properties/fields/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const r = {
          instancePath: a + "/fields",
          schemaPath: "#/properties/fields/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.nextPageToken !== void 0 && typeof t.nextPageToken != "string") {
      const s = {
        instancePath: a + "/nextPageToken",
        schemaPath: "#/properties/nextPageToken/type",
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
  return ((R.errors = e), i === 0);
}
R.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ae = O;
function O(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = O.evaluated;
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
        !(
          s === "accountId" ||
          s === "query" ||
          s === "maxResults" ||
          s === "startAt" ||
          s === "limit" ||
          s === "cursor"
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
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
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
    if (t.maxResults !== void 0) {
      let s = t.maxResults;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/maxResults",
            schemaPath: "#/properties/maxResults/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.startAt !== void 0) {
      let s = t.startAt;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/startAt",
          schemaPath: "#/properties/startAt/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/startAt",
            schemaPath: "#/properties/startAt/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 0 || isNaN(s)) {
          const r = {
            instancePath: a + "/startAt",
            schemaPath: "#/properties/startAt/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
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
  return ((O.errors = e), i === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ne = E;
function E(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = E.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.issueKey === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueKey" },
        message: "must have required property 'issueKey'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.commentId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "commentId" },
        message: "must have required property 'commentId'",
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
          s === "accountId" ||
          s === "issueKey" ||
          s === "commentId" ||
          s === "body"
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
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const s = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.issueKey !== void 0 && typeof t.issueKey != "string") {
      const s = {
        instancePath: a + "/issueKey",
        schemaPath: "#/properties/issueKey/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.commentId !== void 0 && typeof t.commentId != "string") {
      const s = {
        instancePath: a + "/commentId",
        schemaPath: "#/properties/commentId/type",
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
  return ((E.errors = e), i === 0);
}
E.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const pe = F,
  le = {
    properties: {
      issueKey: { type: "string" },
      summary: { type: "string" },
      description: { type: "string" },
      assigneeAccountId: { type: "string" },
      priority: { type: "string" },
      labels: { type: "array", items: { type: "string" } },
      dueDate: { type: "string" },
      components: { type: "array", items: { type: "string" } },
      fixVersions: { type: "array", items: { type: "string" } },
      parentKey: { type: "string" },
      customFields: {
        type: "object",
        propertyNames: { type: "string" },
        additionalProperties: {},
      },
    },
  };
function F(
  t,
  {
    instancePath: a = "",
    parentData: u,
    parentDataProperty: l,
    rootData: y = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = F.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.issueKey === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueKey" },
        message: "must have required property 'issueKey'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in t)
      if (!M.call(le.properties, r)) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    if (t.issueKey !== void 0 && typeof t.issueKey != "string") {
      const r = {
        instancePath: a + "/issueKey",
        schemaPath: "#/properties/issueKey/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.summary !== void 0 && typeof t.summary != "string") {
      const r = {
        instancePath: a + "/summary",
        schemaPath: "#/properties/summary/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const r = {
        instancePath: a + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (
      t.assigneeAccountId !== void 0 &&
      typeof t.assigneeAccountId != "string"
    ) {
      const r = {
        instancePath: a + "/assigneeAccountId",
        schemaPath: "#/properties/assigneeAccountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.priority !== void 0 && typeof t.priority != "string") {
      const r = {
        instancePath: a + "/priority",
        schemaPath: "#/properties/priority/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.labels !== void 0) {
      let r = t.labels;
      if (Array.isArray(r)) {
        const p = r.length;
        for (let o = 0; o < p; o++)
          if (typeof r[o] != "string") {
            const m = {
              instancePath: a + "/labels/" + o,
              schemaPath: "#/properties/labels/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
      } else {
        const p = {
          instancePath: a + "/labels",
          schemaPath: "#/properties/labels/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (t.dueDate !== void 0 && typeof t.dueDate != "string") {
      const r = {
        instancePath: a + "/dueDate",
        schemaPath: "#/properties/dueDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.components !== void 0) {
      let r = t.components;
      if (Array.isArray(r)) {
        const p = r.length;
        for (let o = 0; o < p; o++)
          if (typeof r[o] != "string") {
            const m = {
              instancePath: a + "/components/" + o,
              schemaPath: "#/properties/components/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
      } else {
        const p = {
          instancePath: a + "/components",
          schemaPath: "#/properties/components/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (t.fixVersions !== void 0) {
      let r = t.fixVersions;
      if (Array.isArray(r)) {
        const p = r.length;
        for (let o = 0; o < p; o++)
          if (typeof r[o] != "string") {
            const m = {
              instancePath: a + "/fixVersions/" + o,
              schemaPath: "#/properties/fixVersions/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
      } else {
        const p = {
          instancePath: a + "/fixVersions",
          schemaPath: "#/properties/fixVersions/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (t.parentKey !== void 0 && typeof t.parentKey != "string") {
      const r = {
        instancePath: a + "/parentKey",
        schemaPath: "#/properties/parentKey/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (t.customFields !== void 0) {
      let r = t.customFields;
      if (r && typeof r == "object" && !Array.isArray(r))
        for (const p in r) {
          const o = i;
          if (typeof p != "string") {
            const m = {
              instancePath: a + "/customFields",
              schemaPath: "#/properties/customFields/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: p,
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
          var s = o === i;
          if (!s) {
            const m = {
              instancePath: a + "/customFields",
              schemaPath: "#/properties/customFields/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: p },
              message: "property name must be valid",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
        }
      else {
        const p = {
          instancePath: a + "/customFields",
          schemaPath: "#/properties/customFields/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
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
  return ((F.errors = e), i === 0);
}
F.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ye = {
  jira_add_comment: L,
  jira_add_attachment: B,
  jira_create_issue: S,
  jira_create_project: Y,
  jira_create_sprint: z,
  jira_create_version: C,
  jira_delete_comment: G,
  jira_delete_issue: H,
  jira_get_current_user: J,
  jira_get_issue: Q,
  jira_get_issue_types: U,
  jira_get_priorities: W,
  jira_get_projects: X,
  jira_link_issues: Z,
  jira_list_boards: $,
  jira_list_comments: ee,
  jira_list_sprints: se,
  jira_list_transitions: re,
  jira_list_users: te,
  jira_search_issues: ie,
  jira_search_users: ae,
  jira_update_comment: ne,
  jira_update_issue: pe,
};
exports.NATIVE_TOOL_VALIDATORS = ye;
exports.validate_jira_add_attachment = B;
exports.validate_jira_add_comment = L;
exports.validate_jira_create_issue = S;
exports.validate_jira_create_project = Y;
exports.validate_jira_create_sprint = z;
exports.validate_jira_create_version = C;
exports.validate_jira_delete_comment = G;
exports.validate_jira_delete_issue = H;
exports.validate_jira_get_current_user = J;
exports.validate_jira_get_issue = Q;
exports.validate_jira_get_issue_types = U;
exports.validate_jira_get_priorities = W;
exports.validate_jira_get_projects = X;
exports.validate_jira_link_issues = Z;
exports.validate_jira_list_boards = $;
exports.validate_jira_list_comments = ee;
exports.validate_jira_list_sprints = se;
exports.validate_jira_list_transitions = re;
exports.validate_jira_list_users = te;
exports.validate_jira_search_issues = ie;
exports.validate_jira_search_users = ae;
exports.validate_jira_update_comment = ne;
exports.validate_jira_update_issue = pe;
