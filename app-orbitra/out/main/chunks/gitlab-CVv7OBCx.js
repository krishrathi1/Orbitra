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
      p = new s.Error().stack;
    p &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[p] = "45e526a3-f7b8-4f03-96a7-98f72b496867"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-45e526a3-f7b8-4f03-96a7-98f72b496867"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const se = f;
function f(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = f.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mrIid" },
        message: "must have required property 'mrIid'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "projectId" || r === "mrIid")) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid !== void 0 && typeof s.mrIid != "number") {
      const r = {
        instancePath: p + "/mrIid",
        schemaPath: "#/properties/mrIid/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const te = g;
function g(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = g.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.branch === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "branch" },
        message: "must have required property 'branch'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.ref === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "ref" },
        message: "must have required property 'ref'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "projectId" ||
          r === "branch" ||
          r === "ref"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.branch !== void 0 && typeof s.branch != "string") {
      const r = {
        instancePath: p + "/branch",
        schemaPath: "#/properties/branch/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.ref !== void 0 && typeof s.ref != "string") {
      const r = {
        instancePath: p + "/ref",
        schemaPath: "#/properties/ref/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const ie = h;
function h(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = h.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.title === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "projectId" ||
          r === "title" ||
          r === "description" ||
          r === "labels" ||
          r === "assigneeIds"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.title !== void 0 && typeof s.title != "string") {
      const r = {
        instancePath: p + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.description !== void 0 && typeof s.description != "string") {
      const r = {
        instancePath: p + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.labels !== void 0 && typeof s.labels != "string") {
      const r = {
        instancePath: p + "/labels",
        schemaPath: "#/properties/labels/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.assigneeIds !== void 0) {
      let r = s.assigneeIds;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let l = 0; l < t; l++)
          if (typeof r[l] != "number") {
            const c = {
              instancePath: p + "/assigneeIds/" + l,
              schemaPath: "#/properties/assigneeIds/items/type",
              keyword: "type",
              params: { type: "number" },
              message: "must be number",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const t = {
          instancePath: p + "/assigneeIds",
          schemaPath: "#/properties/assigneeIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
  } else {
    const r = {
      instancePath: p,
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
const pe = b;
function b(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = b.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.issueIid === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueIid" },
        message: "must have required property 'issueIid'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.body === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "body" },
        message: "must have required property 'body'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "projectId" ||
          r === "issueIid" ||
          r === "body"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.issueIid !== void 0 && typeof s.issueIid != "number") {
      const r = {
        instancePath: p + "/issueIid",
        schemaPath: "#/properties/issueIid/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.body !== void 0 && typeof s.body != "string") {
      const r = {
        instancePath: p + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const ae = P,
  Le = {
    properties: {
      accountId: { type: "string" },
      projectId: { type: "string" },
      sourceBranch: { type: "string" },
      targetBranch: { type: "string" },
      title: { type: "string" },
      description: { type: "string" },
      assigneeIds: { type: "array", items: { type: "number" } },
      labels: { type: "string" },
      removeSourceBranch: { type: "boolean" },
    },
  },
  d = Object.prototype.hasOwnProperty;
function P(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = P.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.sourceBranch === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sourceBranch" },
        message: "must have required property 'sourceBranch'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.targetBranch === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "targetBranch" },
        message: "must have required property 'targetBranch'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.title === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!d.call(Le.properties, r)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.sourceBranch !== void 0 && typeof s.sourceBranch != "string") {
      const r = {
        instancePath: p + "/sourceBranch",
        schemaPath: "#/properties/sourceBranch/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.targetBranch !== void 0 && typeof s.targetBranch != "string") {
      const r = {
        instancePath: p + "/targetBranch",
        schemaPath: "#/properties/targetBranch/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.title !== void 0 && typeof s.title != "string") {
      const r = {
        instancePath: p + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.description !== void 0 && typeof s.description != "string") {
      const r = {
        instancePath: p + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.assigneeIds !== void 0) {
      let r = s.assigneeIds;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let l = 0; l < t; l++)
          if (typeof r[l] != "number") {
            const c = {
              instancePath: p + "/assigneeIds/" + l,
              schemaPath: "#/properties/assigneeIds/items/type",
              keyword: "type",
              params: { type: "number" },
              message: "must be number",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const t = {
          instancePath: p + "/assigneeIds",
          schemaPath: "#/properties/assigneeIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.labels !== void 0 && typeof s.labels != "string") {
      const r = {
        instancePath: p + "/labels",
        schemaPath: "#/properties/labels/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (
      s.removeSourceBranch !== void 0 &&
      typeof s.removeSourceBranch != "boolean"
    ) {
      const r = {
        instancePath: p + "/removeSourceBranch",
        schemaPath: "#/properties/removeSourceBranch/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const ne = I;
function I(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = I.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mrIid" },
        message: "must have required property 'mrIid'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.body === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "body" },
        message: "must have required property 'body'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "projectId" ||
          r === "mrIid" ||
          r === "body"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid !== void 0 && typeof s.mrIid != "number") {
      const r = {
        instancePath: p + "/mrIid",
        schemaPath: "#/properties/mrIid/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.body !== void 0 && typeof s.body != "string") {
      const r = {
        instancePath: p + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const oe = k,
  Ye = { properties: { encoding: { enum: ["text", "base64"] } } };
function k(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = k.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.filePath === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "filePath" },
        message: "must have required property 'filePath'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.branch === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "branch" },
        message: "must have required property 'branch'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.content === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "content" },
        message: "must have required property 'content'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.commitMessage === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "commitMessage" },
        message: "must have required property 'commitMessage'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "projectId" ||
          r === "filePath" ||
          r === "branch" ||
          r === "content" ||
          r === "commitMessage" ||
          r === "encoding"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.filePath !== void 0 && typeof s.filePath != "string") {
      const r = {
        instancePath: p + "/filePath",
        schemaPath: "#/properties/filePath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.branch !== void 0 && typeof s.branch != "string") {
      const r = {
        instancePath: p + "/branch",
        schemaPath: "#/properties/branch/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const r = {
        instancePath: p + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.commitMessage !== void 0 && typeof s.commitMessage != "string") {
      const r = {
        instancePath: p + "/commitMessage",
        schemaPath: "#/properties/commitMessage/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.encoding !== void 0) {
      let r = s.encoding;
      if (typeof r != "string") {
        const t = {
          instancePath: p + "/encoding",
          schemaPath: "#/properties/encoding/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "text" || r === "base64")) {
        const t = {
          instancePath: p + "/encoding",
          schemaPath: "#/properties/encoding/enum",
          keyword: "enum",
          params: { allowedValues: Ye.properties.encoding.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
  } else {
    const r = {
      instancePath: p,
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
const me = w,
  ze = {
    properties: { visibility: { enum: ["private", "internal", "public"] } },
  };
function w(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = w.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.name === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "name" ||
          r === "description" ||
          r === "visibility" ||
          r === "namespaceId"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const r = {
        instancePath: p + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.description !== void 0 && typeof s.description != "string") {
      const r = {
        instancePath: p + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.visibility !== void 0) {
      let r = s.visibility;
      if (typeof r != "string") {
        const t = {
          instancePath: p + "/visibility",
          schemaPath: "#/properties/visibility/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "private" || r === "internal" || r === "public")) {
        const t = {
          instancePath: p + "/visibility",
          schemaPath: "#/properties/visibility/enum",
          keyword: "enum",
          params: { allowedValues: ze.properties.visibility.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.namespaceId !== void 0 && typeof s.namespaceId != "number") {
      const r = {
        instancePath: p + "/namespaceId",
        schemaPath: "#/properties/namespaceId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const ue = v;
function v(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = v.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tagName === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tagName" },
        message: "must have required property 'tagName'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.ref === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "ref" },
        message: "must have required property 'ref'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "projectId" ||
          r === "tagName" ||
          r === "ref" ||
          r === "message"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tagName !== void 0 && typeof s.tagName != "string") {
      const r = {
        instancePath: p + "/tagName",
        schemaPath: "#/properties/tagName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.ref !== void 0 && typeof s.ref != "string") {
      const r = {
        instancePath: p + "/ref",
        schemaPath: "#/properties/ref/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.message !== void 0 && typeof s.message != "string") {
      const r = {
        instancePath: p + "/message",
        schemaPath: "#/properties/message/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const le = N;
function N(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = N.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.branch === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "branch" },
        message: "must have required property 'branch'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "projectId" || r === "branch")) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.branch !== void 0 && typeof s.branch != "string") {
      const r = {
        instancePath: p + "/branch",
        schemaPath: "#/properties/branch/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const ce = j;
function j(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = j.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.issueIid === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueIid" },
        message: "must have required property 'issueIid'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "projectId" || r === "issueIid")) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.issueIid !== void 0 && typeof s.issueIid != "number") {
      const r = {
        instancePath: p + "/issueIid",
        schemaPath: "#/properties/issueIid/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const de = _;
function _(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = _.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "projectId")) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const ye = q;
function q(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = q.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.sha === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sha" },
        message: "must have required property 'sha'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "projectId" || r === "sha")) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.sha !== void 0 && typeof s.sha != "string") {
      const r = {
        instancePath: p + "/sha",
        schemaPath: "#/properties/sha/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const fe = x;
function x(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = x.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (r !== "accountId") {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((x.errors = e), i === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ge = A;
function A(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = A.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.filePath === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "filePath" },
        message: "must have required property 'filePath'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.ref === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "ref" },
        message: "must have required property 'ref'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "projectId" ||
          r === "filePath" ||
          r === "ref"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.filePath !== void 0 && typeof s.filePath != "string") {
      const r = {
        instancePath: p + "/filePath",
        schemaPath: "#/properties/filePath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.ref !== void 0 && typeof s.ref != "string") {
      const r = {
        instancePath: p + "/ref",
        schemaPath: "#/properties/ref/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const he = T;
function T(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = T.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.issueIid === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueIid" },
        message: "must have required property 'issueIid'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "projectId" || r === "issueIid")) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.issueIid !== void 0 && typeof s.issueIid != "number") {
      const r = {
        instancePath: p + "/issueIid",
        schemaPath: "#/properties/issueIid/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const be = D;
function D(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = D.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mrIid" },
        message: "must have required property 'mrIid'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "projectId" || r === "mrIid")) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid !== void 0 && typeof s.mrIid != "number") {
      const r = {
        instancePath: p + "/mrIid",
        schemaPath: "#/properties/mrIid/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const Pe = E;
function E(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = E.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mrIid" },
        message: "must have required property 'mrIid'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "projectId" || r === "mrIid")) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid !== void 0 && typeof s.mrIid != "number") {
      const r = {
        instancePath: p + "/mrIid",
        schemaPath: "#/properties/mrIid/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((E.errors = e), i === 0);
}
E.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ie = O;
function O(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = O.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "accountId" || r === "projectId")) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const ke = R,
  Fe = {
    properties: {
      accountId: { type: "string" },
      projectId: { type: "string" },
      search: { type: "string" },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 100 },
      pageToken: { type: "string" },
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
  };
function R(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = R.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!d.call(Fe.properties, r)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.search !== void 0 && typeof s.search != "string") {
      const r = {
        instancePath: p + "/search",
        schemaPath: "#/properties/search/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((R.errors = e), i === 0);
}
R.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const we = S,
  Ge = {
    properties: {
      accountId: { type: "string" },
      projectId: { type: "string" },
      ref: { type: "string" },
      path: { type: "string" },
      since: { type: "string" },
      until: { type: "string" },
      page: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      perPage: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      pageToken: { type: "string" },
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
  };
function S(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = S.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!d.call(Ge.properties, r)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.ref !== void 0 && typeof s.ref != "string") {
      const r = {
        instancePath: p + "/ref",
        schemaPath: "#/properties/ref/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: p + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.since !== void 0 && typeof s.since != "string") {
      const r = {
        instancePath: p + "/since",
        schemaPath: "#/properties/since/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.until !== void 0 && typeof s.until != "string") {
      const r = {
        instancePath: p + "/until",
        schemaPath: "#/properties/until/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((S.errors = e), i === 0);
}
S.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ve = B,
  He = {
    properties: {
      accountId: { type: "string" },
      projectId: { type: "string" },
      issueIid: { type: "number" },
      page: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      perPage: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      excludeSystemNotes: { type: "boolean" },
      pageToken: { type: "string" },
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
  };
function B(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = B.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.issueIid === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueIid" },
        message: "must have required property 'issueIid'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!d.call(He.properties, r)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.issueIid !== void 0 && typeof s.issueIid != "number") {
      const r = {
        instancePath: p + "/issueIid",
        schemaPath: "#/properties/issueIid/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (
      s.excludeSystemNotes !== void 0 &&
      typeof s.excludeSystemNotes != "boolean"
    ) {
      const r = {
        instancePath: p + "/excludeSystemNotes",
        schemaPath: "#/properties/excludeSystemNotes/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((B.errors = e), i === 0);
}
B.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ne = C,
  $ = {
    properties: {
      accountId: { type: "string" },
      projectId: { type: "string" },
      state: { enum: ["opened", "closed", "all"], type: "string" },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 100 },
      pageToken: { type: "string" },
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
  };
function C(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = C.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!d.call($.properties, r)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.state !== void 0) {
      let r = s.state;
      if (typeof r != "string") {
        const t = {
          instancePath: p + "/state",
          schemaPath: "#/properties/state/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "opened" || r === "closed" || r === "all")) {
        const t = {
          instancePath: p + "/state",
          schemaPath: "#/properties/state/enum",
          keyword: "enum",
          params: { allowedValues: $.properties.state.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((C.errors = e), i === 0);
}
C.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const je = M;
function M(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = M.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "projectId" ||
          r === "page" ||
          r === "perPage" ||
          r === "pageToken" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((M.errors = e), i === 0);
}
M.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _e = V,
  ee = {
    properties: {
      accountId: { type: "string" },
      projectId: { type: "string" },
      state: { enum: ["opened", "closed", "merged", "all"], type: "string" },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 100 },
      pageToken: { type: "string" },
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
  };
function V(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = V.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!d.call(ee.properties, r)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.state !== void 0) {
      let r = s.state;
      if (typeof r != "string") {
        const t = {
          instancePath: p + "/state",
          schemaPath: "#/properties/state/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(r === "opened" || r === "closed" || r === "merged" || r === "all")
      ) {
        const t = {
          instancePath: p + "/state",
          schemaPath: "#/properties/state/enum",
          keyword: "enum",
          params: { allowedValues: ee.properties.state.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((V.errors = e), i === 0);
}
V.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const qe = L,
  Je = {
    properties: {
      accountId: { type: "string" },
      projectId: { type: "string" },
      mrIid: { type: "number" },
      page: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      perPage: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      excludeSystemNotes: { type: "boolean" },
      pageToken: { type: "string" },
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
  };
function L(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = L.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mrIid" },
        message: "must have required property 'mrIid'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!d.call(Je.properties, r)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid !== void 0 && typeof s.mrIid != "number") {
      const r = {
        instancePath: p + "/mrIid",
        schemaPath: "#/properties/mrIid/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (
      s.excludeSystemNotes !== void 0 &&
      typeof s.excludeSystemNotes != "boolean"
    ) {
      const r = {
        instancePath: p + "/excludeSystemNotes",
        schemaPath: "#/properties/excludeSystemNotes/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((L.errors = e), i === 0);
}
L.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const xe = Y;
function Y(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = Y.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "search" ||
          r === "page" ||
          r === "perPage" ||
          r === "pageToken" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.search !== void 0 && typeof s.search != "string") {
      const r = {
        instancePath: p + "/search",
        schemaPath: "#/properties/search/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((Y.errors = e), i === 0);
}
Y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ae = z;
function z(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = z.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "projectId" ||
          r === "page" ||
          r === "perPage" ||
          r === "pageToken" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((z.errors = e), i === 0);
}
z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Te = F,
  Ke = {
    properties: {
      accountId: { type: "string" },
      projectId: { type: "string" },
      query: { type: "string" },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 100 },
      pageToken: { type: "string" },
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
  };
function F(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = F.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!d.call(Ke.properties, r)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.query !== void 0 && typeof s.query != "string") {
      const r = {
        instancePath: p + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
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
const De = G;
function G(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = G.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "page" ||
          r === "perPage" ||
          r === "pageToken" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((G.errors = e), i === 0);
}
G.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ee = H,
  Qe = {
    properties: {
      accountId: { type: "string" },
      projectId: { type: "string" },
      path: { type: "string" },
      ref: { type: "string" },
      recursive: { type: "boolean" },
      page: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      perPage: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      pageToken: { type: "string" },
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
  };
function H(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = H.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!d.call(Qe.properties, r)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: p + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.ref !== void 0 && typeof s.ref != "string") {
      const r = {
        instancePath: p + "/ref",
        schemaPath: "#/properties/ref/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.recursive !== void 0 && typeof s.recursive != "boolean") {
      const r = {
        instancePath: p + "/recursive",
        schemaPath: "#/properties/recursive/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((H.errors = e), i === 0);
}
H.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Oe = J;
function J(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = J.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "page" ||
          r === "perPage" ||
          r === "pageToken" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((J.errors = e), i === 0);
}
J.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Re = K,
  Ue = {
    properties: {
      accountId: { type: "string" },
      projectId: { type: "string" },
      search: { type: "string" },
      page: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      perPage: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      pageToken: { type: "string" },
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
  };
function K(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = K.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!d.call(Ue.properties, r)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.search !== void 0 && typeof s.search != "string") {
      const r = {
        instancePath: p + "/search",
        schemaPath: "#/properties/search/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/start",
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
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/start",
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
          instancePath: p + "/end",
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
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/end",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((K.errors = e), i === 0);
}
K.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Se = Q;
function Q(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = Q.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mrIid" },
        message: "must have required property 'mrIid'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "projectId" ||
          r === "mrIid" ||
          r === "mergeCommitMessage" ||
          r === "shouldRemoveSourceBranch"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid !== void 0 && typeof s.mrIid != "number") {
      const r = {
        instancePath: p + "/mrIid",
        schemaPath: "#/properties/mrIid/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (
      s.mergeCommitMessage !== void 0 &&
      typeof s.mergeCommitMessage != "string"
    ) {
      const r = {
        instancePath: p + "/mergeCommitMessage",
        schemaPath: "#/properties/mergeCommitMessage/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (
      s.shouldRemoveSourceBranch !== void 0 &&
      typeof s.shouldRemoveSourceBranch != "boolean"
    ) {
      const r = {
        instancePath: p + "/shouldRemoveSourceBranch",
        schemaPath: "#/properties/shouldRemoveSourceBranch/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((Q.errors = e), i === 0);
}
Q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Be = U;
function U(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = U.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.query === void 0) {
      const r = {
        instancePath: p,
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
          r === "accountId" ||
          r === "query" ||
          r === "projectId" ||
          r === "page" ||
          r === "perPage" ||
          r === "pageToken" ||
          r === "limit" ||
          r === "cursor"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.query !== void 0 && typeof s.query != "string") {
      const r = {
        instancePath: p + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const r = {
        instancePath: p + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
          instancePath: p + "/limit",
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
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: p + "/limit",
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
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((U.errors = e), i === 0);
}
U.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ce = W;
function W(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = W.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const t = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.ref === void 0) {
      const t = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "ref" },
        message: "must have required property 'ref'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in s)
      if (
        !(
          t === "accountId" ||
          t === "projectId" ||
          t === "ref" ||
          t === "variables"
        )
      ) {
        const l = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const t = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const t = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.ref !== void 0 && typeof s.ref != "string") {
      const t = {
        instancePath: p + "/ref",
        schemaPath: "#/properties/ref/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.variables !== void 0) {
      let t = s.variables;
      if (t && typeof t == "object" && !Array.isArray(t)) {
        for (const l in t) {
          const c = i;
          if (typeof l != "string") {
            const y = {
              instancePath: p + "/variables",
              schemaPath: "#/properties/variables/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: l,
            };
            (e === null ? (e = [y]) : e.push(y), i++);
          }
          var r = c === i;
          if (!r) {
            const y = {
              instancePath: p + "/variables",
              schemaPath: "#/properties/variables/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: l },
              message: "property name must be valid",
            };
            (e === null ? (e = [y]) : e.push(y), i++);
          }
        }
        for (const l in t)
          if (typeof t[l] != "string") {
            const c = {
              instancePath:
                p + "/variables/" + l.replace(/~/g, "~0").replace(/\//g, "~1"),
              schemaPath: "#/properties/variables/additionalProperties/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const l = {
          instancePath: p + "/variables",
          schemaPath: "#/properties/variables/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
  } else {
    const t = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), i++);
  }
  return ((W.errors = e), i === 0);
}
W.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Me = X,
  We = { properties: { stateEvent: { enum: ["close", "reopen"] } } };
function X(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = X.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.issueIid === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issueIid" },
        message: "must have required property 'issueIid'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "accountId" ||
          r === "projectId" ||
          r === "issueIid" ||
          r === "title" ||
          r === "description" ||
          r === "labels" ||
          r === "stateEvent" ||
          r === "assigneeIds"
        )
      ) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.issueIid !== void 0 && typeof s.issueIid != "number") {
      const r = {
        instancePath: p + "/issueIid",
        schemaPath: "#/properties/issueIid/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.title !== void 0 && typeof s.title != "string") {
      const r = {
        instancePath: p + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.description !== void 0 && typeof s.description != "string") {
      const r = {
        instancePath: p + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.labels !== void 0 && typeof s.labels != "string") {
      const r = {
        instancePath: p + "/labels",
        schemaPath: "#/properties/labels/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.stateEvent !== void 0) {
      let r = s.stateEvent;
      if (typeof r != "string") {
        const t = {
          instancePath: p + "/stateEvent",
          schemaPath: "#/properties/stateEvent/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "close" || r === "reopen")) {
        const t = {
          instancePath: p + "/stateEvent",
          schemaPath: "#/properties/stateEvent/enum",
          keyword: "enum",
          params: { allowedValues: We.properties.stateEvent.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.assigneeIds !== void 0) {
      let r = s.assigneeIds;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let l = 0; l < t; l++)
          if (typeof r[l] != "number") {
            const c = {
              instancePath: p + "/assigneeIds/" + l,
              schemaPath: "#/properties/assigneeIds/items/type",
              keyword: "type",
              params: { type: "number" },
              message: "must be number",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const t = {
          instancePath: p + "/assigneeIds",
          schemaPath: "#/properties/assigneeIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((X.errors = e), i === 0);
}
X.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ve = Z,
  re = {
    properties: {
      accountId: { type: "string" },
      projectId: { type: "string" },
      mrIid: { type: "number" },
      title: { type: "string" },
      description: { type: "string" },
      stateEvent: { enum: ["close", "reopen"], type: "string" },
      labels: { type: "string" },
      assigneeIds: { type: "array", items: { type: "number" } },
      targetBranch: { type: "string" },
    },
  };
function Z(
  s,
  {
    instancePath: p = "",
    parentData: n,
    parentDataProperty: o,
    rootData: m = s,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const a = Z.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.projectId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectId" },
        message: "must have required property 'projectId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "mrIid" },
        message: "must have required property 'mrIid'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!d.call(re.properties, r)) {
        const t = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.accountId !== void 0 && typeof s.accountId != "string") {
      const r = {
        instancePath: p + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.projectId !== void 0 && typeof s.projectId != "string") {
      const r = {
        instancePath: p + "/projectId",
        schemaPath: "#/properties/projectId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mrIid !== void 0 && typeof s.mrIid != "number") {
      const r = {
        instancePath: p + "/mrIid",
        schemaPath: "#/properties/mrIid/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.title !== void 0 && typeof s.title != "string") {
      const r = {
        instancePath: p + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.description !== void 0 && typeof s.description != "string") {
      const r = {
        instancePath: p + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.stateEvent !== void 0) {
      let r = s.stateEvent;
      if (typeof r != "string") {
        const t = {
          instancePath: p + "/stateEvent",
          schemaPath: "#/properties/stateEvent/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "close" || r === "reopen")) {
        const t = {
          instancePath: p + "/stateEvent",
          schemaPath: "#/properties/stateEvent/enum",
          keyword: "enum",
          params: { allowedValues: re.properties.stateEvent.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.labels !== void 0 && typeof s.labels != "string") {
      const r = {
        instancePath: p + "/labels",
        schemaPath: "#/properties/labels/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.assigneeIds !== void 0) {
      let r = s.assigneeIds;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let l = 0; l < t; l++)
          if (typeof r[l] != "number") {
            const c = {
              instancePath: p + "/assigneeIds/" + l,
              schemaPath: "#/properties/assigneeIds/items/type",
              keyword: "type",
              params: { type: "number" },
              message: "must be number",
            };
            (e === null ? (e = [c]) : e.push(c), i++);
          }
      } else {
        const t = {
          instancePath: p + "/assigneeIds",
          schemaPath: "#/properties/assigneeIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.targetBranch !== void 0 && typeof s.targetBranch != "string") {
      const r = {
        instancePath: p + "/targetBranch",
        schemaPath: "#/properties/targetBranch/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((Z.errors = e), i === 0);
}
Z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Xe = {
  gitlab_approve_merge_request: se,
  gitlab_create_branch: te,
  gitlab_create_issue: ie,
  gitlab_create_issue_note: pe,
  gitlab_create_merge_request: ae,
  gitlab_create_mr_note: ne,
  gitlab_create_or_update_file: oe,
  gitlab_create_project: me,
  gitlab_create_tag: ue,
  gitlab_delete_branch: le,
  gitlab_delete_issue: ce,
  gitlab_delete_project: de,
  gitlab_get_commit: ye,
  gitlab_get_current_user: fe,
  gitlab_get_file: ge,
  gitlab_get_issue: he,
  gitlab_get_merge_request: be,
  gitlab_get_mr_diff: Pe,
  gitlab_get_project: Ie,
  gitlab_list_branches: ke,
  gitlab_list_commits: we,
  gitlab_list_issue_notes: ve,
  gitlab_list_issues: Ne,
  gitlab_list_labels: je,
  gitlab_list_merge_requests: _e,
  gitlab_list_mr_notes: qe,
  gitlab_list_namespaces: xe,
  gitlab_list_pipelines: Ae,
  gitlab_list_project_members: Te,
  gitlab_list_projects: De,
  gitlab_list_repository_tree: Ee,
  gitlab_list_runners: Oe,
  gitlab_list_tags: Re,
  gitlab_merge_merge_request: Se,
  gitlab_search_users: Be,
  gitlab_trigger_pipeline: Ce,
  gitlab_update_issue: Me,
  gitlab_update_merge_request: Ve,
};
exports.NATIVE_TOOL_VALIDATORS = Xe;
exports.validate_gitlab_approve_merge_request = se;
exports.validate_gitlab_create_branch = te;
exports.validate_gitlab_create_issue = ie;
exports.validate_gitlab_create_issue_note = pe;
exports.validate_gitlab_create_merge_request = ae;
exports.validate_gitlab_create_mr_note = ne;
exports.validate_gitlab_create_or_update_file = oe;
exports.validate_gitlab_create_project = me;
exports.validate_gitlab_create_tag = ue;
exports.validate_gitlab_delete_branch = le;
exports.validate_gitlab_delete_issue = ce;
exports.validate_gitlab_delete_project = de;
exports.validate_gitlab_get_commit = ye;
exports.validate_gitlab_get_current_user = fe;
exports.validate_gitlab_get_file = ge;
exports.validate_gitlab_get_issue = he;
exports.validate_gitlab_get_merge_request = be;
exports.validate_gitlab_get_mr_diff = Pe;
exports.validate_gitlab_get_project = Ie;
exports.validate_gitlab_list_branches = ke;
exports.validate_gitlab_list_commits = we;
exports.validate_gitlab_list_issue_notes = ve;
exports.validate_gitlab_list_issues = Ne;
exports.validate_gitlab_list_labels = je;
exports.validate_gitlab_list_merge_requests = _e;
exports.validate_gitlab_list_mr_notes = qe;
exports.validate_gitlab_list_namespaces = xe;
exports.validate_gitlab_list_pipelines = Ae;
exports.validate_gitlab_list_project_members = Te;
exports.validate_gitlab_list_projects = De;
exports.validate_gitlab_list_repository_tree = Ee;
exports.validate_gitlab_list_runners = Oe;
exports.validate_gitlab_list_tags = Re;
exports.validate_gitlab_merge_merge_request = Se;
exports.validate_gitlab_search_users = Be;
exports.validate_gitlab_trigger_pipeline = Ce;
exports.validate_gitlab_update_issue = Me;
exports.validate_gitlab_update_merge_request = Ve;
