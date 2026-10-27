"use strict";
(function () {
  try {
    var r =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    r.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var r =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      i = new r.Error().stack;
    i &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[i] = "1f2ffda6-24f9-459e-b6ad-3dc17743051b"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-1f2ffda6-24f9-459e-b6ad-3dc17743051b"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const C = c;
function c(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = c.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.checklistId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "checklistId" },
        message: "must have required property 'checklistId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.name === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (
        !(
          s === "checklistId" ||
          s === "name" ||
          s === "assignee" ||
          s === "account"
        )
      ) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.checklistId !== void 0 && typeof r.checklistId != "string") {
      const s = {
        instancePath: i + "/checklistId",
        schemaPath: "#/properties/checklistId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.assignee !== void 0) {
      let s = r.assignee;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/assignee",
          schemaPath: "#/properties/assignee/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/assignee",
            schemaPath: "#/properties/assignee/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/assignee",
            schemaPath: "#/properties/assignee/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: i + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((c.errors = e), t === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = y;
function y(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = y.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.taskId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.name === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "accountId" || s === "taskId" || s === "name")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.taskId !== void 0 && typeof r.taskId != "string") {
      const s = {
        instancePath: i + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((y.errors = e), t === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = f;
function f(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = f.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.taskId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.commentText === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "commentText" },
        message: "must have required property 'commentText'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "taskId" || s === "commentText")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.taskId !== void 0 && typeof r.taskId != "string") {
      const s = {
        instancePath: i + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.commentText !== void 0 && typeof r.commentText != "string") {
      const s = {
        instancePath: i + "/commentText",
        schemaPath: "#/properties/commentText/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((f.errors = e), t === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = h;
function h(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = h.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.spaceId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "spaceId" },
        message: "must have required property 'spaceId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.name === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "accountId" || s === "spaceId" || s === "name")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.spaceId !== void 0 && typeof r.spaceId != "string") {
      const s = {
        instancePath: i + "/spaceId",
        schemaPath: "#/properties/spaceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((h.errors = e), t === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const M = g;
function g(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = g.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.name === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (
        !(
          s === "accountId" ||
          s === "name" ||
          s === "spaceId" ||
          s === "folderId"
        )
      ) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.spaceId !== void 0 && typeof r.spaceId != "string") {
      const s = {
        instancePath: i + "/spaceId",
        schemaPath: "#/properties/spaceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.folderId !== void 0 && typeof r.folderId != "string") {
      const s = {
        instancePath: i + "/folderId",
        schemaPath: "#/properties/folderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((g.errors = e), t === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = k;
function k(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = k.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.listId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.name === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (
        !(
          s === "listId" ||
          s === "name" ||
          s === "description" ||
          s === "assignees" ||
          s === "status" ||
          s === "priority" ||
          s === "dueDate"
        )
      ) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.listId !== void 0 && typeof r.listId != "string") {
      const s = {
        instancePath: i + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.description !== void 0 && typeof r.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.assignees !== void 0) {
      let s = r.assignees;
      if (Array.isArray(s)) {
        const a = s.length;
        for (let p = 0; p < a; p++)
          if (typeof s[p] != "number") {
            const d = {
              instancePath: i + "/assignees/" + p,
              schemaPath: "#/properties/assignees/items/type",
              keyword: "type",
              params: { type: "number" },
              message: "must be number",
            };
            (e === null ? (e = [d]) : e.push(d), t++);
          }
      } else {
        const a = {
          instancePath: i + "/assignees",
          schemaPath: "#/properties/assignees/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    }
    if (r.status !== void 0 && typeof r.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.priority !== void 0) {
      let s = r.priority;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/priority",
          schemaPath: "#/properties/priority/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
      if (typeof s == "number") {
        if (s > 4 || isNaN(s)) {
          const a = {
            instancePath: i + "/priority",
            schemaPath: "#/properties/priority/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 4 },
            message: "must be <= 4",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
        if (s < 1 || isNaN(s)) {
          const a = {
            instancePath: i + "/priority",
            schemaPath: "#/properties/priority/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
      }
    }
    if (r.dueDate !== void 0 && typeof r.dueDate != "number") {
      const s = {
        instancePath: i + "/dueDate",
        schemaPath: "#/properties/dueDate/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((k.errors = e), t === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = I;
function I(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = I.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.folderId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "folderId" },
        message: "must have required property 'folderId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "folderId" || s === "account")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.folderId !== void 0 && typeof r.folderId != "string") {
      const s = {
        instancePath: i + "/folderId",
        schemaPath: "#/properties/folderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: i + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((I.errors = e), t === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = P;
function P(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = P.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.listId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "accountId" || s === "listId")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.listId !== void 0 && typeof r.listId != "string") {
      const s = {
        instancePath: i + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((P.errors = e), t === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const F = b;
function b(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = b.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.taskId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "accountId" || s === "taskId")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.taskId !== void 0 && typeof r.taskId != "string") {
      const s = {
        instancePath: i + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((b.errors = e), t === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = v;
function v(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = v.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.taskId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "startId" ||
          s === "accountId" ||
          s === "taskId"
        )
      ) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
        if (s < 0 || isNaN(s)) {
          const a = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
      }
    }
    if (r.startId !== void 0 && typeof r.startId != "string") {
      const s = {
        instancePath: i + "/startId",
        schemaPath: "#/properties/startId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.taskId !== void 0 && typeof r.taskId != "string") {
      const s = {
        instancePath: i + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((v.errors = e), t === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const H = _;
function _(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = _.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.taskId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (s !== "taskId") {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.taskId !== void 0 && typeof r.taskId != "string") {
      const s = {
        instancePath: i + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((_.errors = e), t === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const J = w;
function w(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = w.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  )
    for (const s in r) {
      const a = {
        instancePath: i,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: s },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [a]) : e.push(a), t++);
    }
  else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((w.errors = e), t === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const K = q;
function q(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = q.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.listId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "accountId" || s === "listId")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.listId !== void 0 && typeof r.listId != "string") {
      const s = {
        instancePath: i + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((q.errors = e), t === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Q = A;
function A(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = A.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.spaceId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "spaceId" },
        message: "must have required property 'spaceId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "accountId" || s === "spaceId")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.spaceId !== void 0 && typeof r.spaceId != "string") {
      const s = {
        instancePath: i + "/spaceId",
        schemaPath: "#/properties/spaceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((A.errors = e), t === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const U = N;
function N(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = N.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!(s === "spaceId" || s === "folderId")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.spaceId !== void 0 && typeof r.spaceId != "string") {
      const s = {
        instancePath: i + "/spaceId",
        schemaPath: "#/properties/spaceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.folderId !== void 0 && typeof r.folderId != "string") {
      const s = {
        instancePath: i + "/folderId",
        schemaPath: "#/properties/folderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((N.errors = e), t === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = D;
function D(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = D.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!(s === "accountId" || s === "taskId" || s === "listId")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.taskId !== void 0 && typeof r.taskId != "string") {
      const s = {
        instancePath: i + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.listId !== void 0 && typeof r.listId != "string") {
      const s = {
        instancePath: i + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((D.errors = e), t === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = j;
function j(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = j.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.teamId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "teamId" },
        message: "must have required property 'teamId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (s !== "teamId") {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.teamId !== void 0 && typeof r.teamId != "string") {
      const s = {
        instancePath: i + "/teamId",
        schemaPath: "#/properties/teamId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((j.errors = e), t === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Z = T;
function T(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = T.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.listId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!(s === "accountId" || s === "listId")) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.listId !== void 0 && typeof r.listId != "string") {
      const s = {
        instancePath: i + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((T.errors = e), t === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const $ = O;
function O(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = O.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.listId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "listId" ||
          s === "page" ||
          s === "assignees" ||
          s === "statuses" ||
          s === "includeSubtasks"
        )
      ) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
        if (s < 1 || isNaN(s)) {
          const a = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
      }
    }
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
        if (s < 1 || isNaN(s)) {
          const a = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.listId !== void 0 && typeof r.listId != "string") {
      const s = {
        instancePath: i + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.page !== void 0) {
      let s = r.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
        if (s < 0 || isNaN(s)) {
          const a = {
            instancePath: i + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
      }
    }
    if (r.assignees !== void 0) {
      let s = r.assignees;
      if (Array.isArray(s)) {
        const a = s.length;
        for (let p = 0; p < a; p++)
          if (typeof s[p] != "string") {
            const d = {
              instancePath: i + "/assignees/" + p,
              schemaPath: "#/properties/assignees/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), t++);
          }
      } else {
        const a = {
          instancePath: i + "/assignees",
          schemaPath: "#/properties/assignees/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    }
    if (r.statuses !== void 0) {
      let s = r.statuses;
      if (Array.isArray(s)) {
        const a = s.length;
        for (let p = 0; p < a; p++)
          if (typeof s[p] != "string") {
            const d = {
              instancePath: i + "/statuses/" + p,
              schemaPath: "#/properties/statuses/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), t++);
          }
      } else {
        const a = {
          instancePath: i + "/statuses",
          schemaPath: "#/properties/statuses/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    }
    if (r.includeSubtasks !== void 0 && typeof r.includeSubtasks != "boolean") {
      const s = {
        instancePath: i + "/includeSubtasks",
        schemaPath: "#/properties/includeSubtasks/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((O.errors = e), t === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ee = x,
  te = {
    properties: {
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
      page: { type: "integer", minimum: 0, maximum: 9007199254740991 },
      listIds: { type: "array", items: { type: "string" } },
      statuses: { type: "array", items: { type: "string" } },
      assignees: { type: "array", items: { type: "string" } },
      includeClosed: { type: "boolean" },
      accountId: { type: "string" },
      teamId: { type: "string" },
      query: { type: "string" },
    },
  },
  ie = Object.prototype.hasOwnProperty;
function x(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = x.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.teamId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "teamId" },
        message: "must have required property 'teamId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.query === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (!ie.call(te.properties, s)) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
        if (s < 1 || isNaN(s)) {
          const a = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const s = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.page !== void 0) {
      let s = r.page;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
        if (s < 0 || isNaN(s)) {
          const a = {
            instancePath: i + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
      }
    }
    if (r.listIds !== void 0) {
      let s = r.listIds;
      if (Array.isArray(s)) {
        const a = s.length;
        for (let p = 0; p < a; p++)
          if (typeof s[p] != "string") {
            const d = {
              instancePath: i + "/listIds/" + p,
              schemaPath: "#/properties/listIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), t++);
          }
      } else {
        const a = {
          instancePath: i + "/listIds",
          schemaPath: "#/properties/listIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    }
    if (r.statuses !== void 0) {
      let s = r.statuses;
      if (Array.isArray(s)) {
        const a = s.length;
        for (let p = 0; p < a; p++)
          if (typeof s[p] != "string") {
            const d = {
              instancePath: i + "/statuses/" + p,
              schemaPath: "#/properties/statuses/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), t++);
          }
      } else {
        const a = {
          instancePath: i + "/statuses",
          schemaPath: "#/properties/statuses/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    }
    if (r.assignees !== void 0) {
      let s = r.assignees;
      if (Array.isArray(s)) {
        const a = s.length;
        for (let p = 0; p < a; p++)
          if (typeof s[p] != "string") {
            const d = {
              instancePath: i + "/assignees/" + p,
              schemaPath: "#/properties/assignees/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), t++);
          }
      } else {
        const a = {
          instancePath: i + "/assignees",
          schemaPath: "#/properties/assignees/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    }
    if (r.includeClosed !== void 0 && typeof r.includeClosed != "boolean") {
      const s = {
        instancePath: i + "/includeClosed",
        schemaPath: "#/properties/includeClosed/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.accountId !== void 0 && typeof r.accountId != "string") {
      const s = {
        instancePath: i + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.teamId !== void 0 && typeof r.teamId != "string") {
      const s = {
        instancePath: i + "/teamId",
        schemaPath: "#/properties/teamId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.query !== void 0 && typeof r.query != "string") {
      const s = {
        instancePath: i + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((x.errors = e), t === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const se = E;
function E(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = E.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.checklistId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "checklistId" },
        message: "must have required property 'checklistId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.checklistItemId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "checklistItemId" },
        message: "must have required property 'checklistItemId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (
        !(
          s === "checklistId" ||
          s === "checklistItemId" ||
          s === "name" ||
          s === "resolved" ||
          s === "assignee" ||
          s === "account"
        )
      ) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.checklistId !== void 0 && typeof r.checklistId != "string") {
      const s = {
        instancePath: i + "/checklistId",
        schemaPath: "#/properties/checklistId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.checklistItemId !== void 0 && typeof r.checklistItemId != "string") {
      const s = {
        instancePath: i + "/checklistItemId",
        schemaPath: "#/properties/checklistItemId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.resolved !== void 0 && typeof r.resolved != "boolean") {
      const s = {
        instancePath: i + "/resolved",
        schemaPath: "#/properties/resolved/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.assignee !== void 0) {
      let s = r.assignee;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/assignee",
          schemaPath: "#/properties/assignee/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/assignee",
            schemaPath: "#/properties/assignee/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const a = {
            instancePath: i + "/assignee",
            schemaPath: "#/properties/assignee/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const s = {
        instancePath: i + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((E.errors = e), t === 0);
}
E.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const re = S;
function S(
  r,
  {
    instancePath: i = "",
    parentData: o,
    parentDataProperty: l,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = S.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.taskId === void 0) {
      const s = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in r)
      if (
        !(
          s === "taskId" ||
          s === "name" ||
          s === "description" ||
          s === "status" ||
          s === "priority"
        )
      ) {
        const a = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
    if (r.taskId !== void 0 && typeof r.taskId != "string") {
      const s = {
        instancePath: i + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.description !== void 0 && typeof r.description != "string") {
      const s = {
        instancePath: i + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.status !== void 0 && typeof r.status != "string") {
      const s = {
        instancePath: i + "/status",
        schemaPath: "#/properties/status/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (r.priority !== void 0) {
      let s = r.priority;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const a = {
          instancePath: i + "/priority",
          schemaPath: "#/properties/priority/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), t++);
      }
      if (typeof s == "number") {
        if (s > 4 || isNaN(s)) {
          const a = {
            instancePath: i + "/priority",
            schemaPath: "#/properties/priority/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 4 },
            message: "must be <= 4",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
        if (s < 1 || isNaN(s)) {
          const a = {
            instancePath: i + "/priority",
            schemaPath: "#/properties/priority/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [a]) : e.push(a), t++);
        }
      }
    }
  } else {
    const s = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((S.errors = e), t === 0);
}
S.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ae = {
  clickup_add_checklist_item: C,
  clickup_create_checklist: L,
  clickup_create_comment: R,
  clickup_create_folder: V,
  clickup_create_list: M,
  clickup_create_task: Y,
  clickup_delete_folder: z,
  clickup_delete_list: B,
  clickup_delete_task: F,
  clickup_get_comments: G,
  clickup_get_task: H,
  clickup_get_teams: J,
  clickup_list_custom_fields: K,
  clickup_list_folders: Q,
  clickup_list_lists: U,
  clickup_list_members: W,
  clickup_list_spaces: X,
  clickup_list_statuses: Z,
  clickup_list_tasks: $,
  clickup_search_tasks: ee,
  clickup_update_checklist_item: se,
  clickup_update_task: re,
};
exports.NATIVE_TOOL_VALIDATORS = ae;
exports.validate_clickup_add_checklist_item = C;
exports.validate_clickup_create_checklist = L;
exports.validate_clickup_create_comment = R;
exports.validate_clickup_create_folder = V;
exports.validate_clickup_create_list = M;
exports.validate_clickup_create_task = Y;
exports.validate_clickup_delete_folder = z;
exports.validate_clickup_delete_list = B;
exports.validate_clickup_delete_task = F;
exports.validate_clickup_get_comments = G;
exports.validate_clickup_get_task = H;
exports.validate_clickup_get_teams = J;
exports.validate_clickup_list_custom_fields = K;
exports.validate_clickup_list_folders = Q;
exports.validate_clickup_list_lists = U;
exports.validate_clickup_list_members = W;
exports.validate_clickup_list_spaces = X;
exports.validate_clickup_list_statuses = Z;
exports.validate_clickup_list_tasks = $;
exports.validate_clickup_search_tasks = ee;
exports.validate_clickup_update_checklist_item = se;
exports.validate_clickup_update_task = re;
