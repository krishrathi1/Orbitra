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
      a = new r.Error().stack;
    a &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[a] = "825c2433-816b-4d34-9221-c3827b23c0cd"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-825c2433-816b-4d34-9221-c3827b23c0cd"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const A = f;
function f(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = f.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.sectionGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sectionGid" },
        message: "must have required property 'sectionGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.taskGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskGid" },
        message: "must have required property 'taskGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "sectionGid" || s === "taskGid")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.sectionGid !== void 0 && typeof r.sectionGid != "string") {
      const s = {
        instancePath: a + "/sectionGid",
        schemaPath: "#/properties/sectionGid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.taskGid !== void 0 && typeof r.taskGid != "string") {
      const s = {
        instancePath: a + "/taskGid",
        schemaPath: "#/properties/taskGid/type",
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
  return ((f.errors = e), i === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const D = y;
function y(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = y.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.name === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.workspaceGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "workspaceGid" },
        message: "must have required property 'workspaceGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "name" || s === "workspaceGid" || s === "notes")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.workspaceGid !== void 0 && typeof r.workspaceGid != "string") {
      const s = {
        instancePath: a + "/workspaceGid",
        schemaPath: "#/properties/workspaceGid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const s = {
        instancePath: a + "/notes",
        schemaPath: "#/properties/notes/type",
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
const x = c;
function c(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = c.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.taskGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskGid" },
        message: "must have required property 'taskGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.text === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "text" },
        message: "must have required property 'text'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "taskGid" || s === "text")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.taskGid !== void 0 && typeof r.taskGid != "string") {
      const s = {
        instancePath: a + "/taskGid",
        schemaPath: "#/properties/taskGid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.text !== void 0 && typeof r.text != "string") {
      const s = {
        instancePath: a + "/text",
        schemaPath: "#/properties/text/type",
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
const I = h;
function h(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = h.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.name === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.projectGid === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectGid" },
        message: "must have required property 'projectGid'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (
        !(
          t === "name" ||
          t === "projectGid" ||
          t === "notes" ||
          t === "assigneeGid" ||
          t === "dueOn" ||
          t === "customFields"
        )
      ) {
        const l = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    if (r.name !== void 0 && typeof r.name != "string") {
      const t = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.projectGid !== void 0 && typeof r.projectGid != "string") {
      const t = {
        instancePath: a + "/projectGid",
        schemaPath: "#/properties/projectGid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const t = {
        instancePath: a + "/notes",
        schemaPath: "#/properties/notes/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.assigneeGid !== void 0 && typeof r.assigneeGid != "string") {
      const t = {
        instancePath: a + "/assigneeGid",
        schemaPath: "#/properties/assigneeGid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.dueOn !== void 0 && typeof r.dueOn != "string") {
      const t = {
        instancePath: a + "/dueOn",
        schemaPath: "#/properties/dueOn/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.customFields !== void 0) {
      let t = r.customFields;
      if (t && typeof t == "object" && !Array.isArray(t))
        for (const l in t) {
          const B = i;
          if (typeof l != "string") {
            const d = {
              instancePath: a + "/customFields",
              schemaPath: "#/properties/customFields/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: l,
            };
            (e === null ? (e = [d]) : e.push(d), i++);
          }
          var s = B === i;
          if (!s) {
            const d = {
              instancePath: a + "/customFields",
              schemaPath: "#/properties/customFields/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: l },
              message: "property name must be valid",
            };
            (e === null ? (e = [d]) : e.push(d), i++);
          }
        }
      else {
        const l = {
          instancePath: a + "/customFields",
          schemaPath: "#/properties/customFields/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
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
  return ((h.errors = e), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const O = g;
function g(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = g.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.projectGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectGid" },
        message: "must have required property 'projectGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "projectGid") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.projectGid !== void 0 && typeof r.projectGid != "string") {
      const s = {
        instancePath: a + "/projectGid",
        schemaPath: "#/properties/projectGid/type",
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
const T = k;
function k(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = k.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.taskGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskGid" },
        message: "must have required property 'taskGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "taskGid") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.taskGid !== void 0 && typeof r.taskGid != "string") {
      const s = {
        instancePath: a + "/taskGid",
        schemaPath: "#/properties/taskGid/type",
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
const E = P;
function P(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = P.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.taskGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskGid" },
        message: "must have required property 'taskGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "taskGid") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.taskGid !== void 0 && typeof r.taskGid != "string") {
      const s = {
        instancePath: a + "/taskGid",
        schemaPath: "#/properties/taskGid/type",
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
const S = b;
function b(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = b.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "limit" ||
          s === "offset" ||
          s === "workspaceGid"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.offset !== void 0 && typeof r.offset != "string") {
      const s = {
        instancePath: a + "/offset",
        schemaPath: "#/properties/offset/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.workspaceGid !== void 0 && typeof r.workspaceGid != "string") {
      const s = {
        instancePath: a + "/workspaceGid",
        schemaPath: "#/properties/workspaceGid/type",
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
const F = w;
function w(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = w.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.projectGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectGid" },
        message: "must have required property 'projectGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(s === "start" || s === "end" || s === "cursor" || s === "projectGid")
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.projectGid !== void 0 && typeof r.projectGid != "string") {
      const s = {
        instancePath: a + "/projectGid",
        schemaPath: "#/properties/projectGid/type",
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
const L = v;
function v(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = v.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.taskGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskGid" },
        message: "must have required property 'taskGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(s === "start" || s === "end" || s === "cursor" || s === "taskGid")
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.taskGid !== void 0 && typeof r.taskGid != "string") {
      const s = {
        instancePath: a + "/taskGid",
        schemaPath: "#/properties/taskGid/type",
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
  return ((v.errors = e), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = _;
function _(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = _.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.projectGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectGid" },
        message: "must have required property 'projectGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "limit" ||
          s === "offset" ||
          s === "projectGid" ||
          s === "assignee" ||
          s === "completedSince"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.offset !== void 0 && typeof r.offset != "string") {
      const s = {
        instancePath: a + "/offset",
        schemaPath: "#/properties/offset/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.projectGid !== void 0 && typeof r.projectGid != "string") {
      const s = {
        instancePath: a + "/projectGid",
        schemaPath: "#/properties/projectGid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.assignee !== void 0 && typeof r.assignee != "string") {
      const s = {
        instancePath: a + "/assignee",
        schemaPath: "#/properties/assignee/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.completedSince !== void 0 && typeof r.completedSince != "string") {
      const s = {
        instancePath: a + "/completedSince",
        schemaPath: "#/properties/completedSince/type",
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
const V = G;
function G(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = G.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.workspaceGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "workspaceGid" },
        message: "must have required property 'workspaceGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "workspaceGid"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const s = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.workspaceGid !== void 0 && typeof r.workspaceGid != "string") {
      const s = {
        instancePath: a + "/workspaceGid",
        schemaPath: "#/properties/workspaceGid/type",
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
  return ((G.errors = e), i === 0);
}
G.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const M = N;
function N(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = N.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!(s === "start" || s === "end" || s === "cursor")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.start !== void 0) {
      let s = r.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.end !== void 0) {
      let s = r.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
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
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
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
const Y = j;
function j(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = j.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.workspaceGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "workspaceGid" },
        message: "must have required property 'workspaceGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.text === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "text" },
        message: "must have required property 'text'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "workspaceGid" ||
          s === "text" ||
          s === "assignee" ||
          s === "completed"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.workspaceGid !== void 0 && typeof r.workspaceGid != "string") {
      const s = {
        instancePath: a + "/workspaceGid",
        schemaPath: "#/properties/workspaceGid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.text !== void 0 && typeof r.text != "string") {
      const s = {
        instancePath: a + "/text",
        schemaPath: "#/properties/text/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.assignee !== void 0 && typeof r.assignee != "string") {
      const s = {
        instancePath: a + "/assignee",
        schemaPath: "#/properties/assignee/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.completed !== void 0 && typeof r.completed != "boolean") {
      const s = {
        instancePath: a + "/completed",
        schemaPath: "#/properties/completed/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
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
const z = q;
function q(
  r,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = q.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.taskGid === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskGid" },
        message: "must have required property 'taskGid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "taskGid" ||
          s === "name" ||
          s === "notes" ||
          s === "completed" ||
          s === "dueOn" ||
          s === "assignee"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.taskGid !== void 0 && typeof r.taskGid != "string") {
      const s = {
        instancePath: a + "/taskGid",
        schemaPath: "#/properties/taskGid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const s = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.notes !== void 0 && typeof r.notes != "string") {
      const s = {
        instancePath: a + "/notes",
        schemaPath: "#/properties/notes/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.completed !== void 0 && typeof r.completed != "boolean") {
      const s = {
        instancePath: a + "/completed",
        schemaPath: "#/properties/completed/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.dueOn !== void 0 && typeof r.dueOn != "string") {
      const s = {
        instancePath: a + "/dueOn",
        schemaPath: "#/properties/dueOn/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.assignee !== void 0 && typeof r.assignee != "string") {
      const s = {
        instancePath: a + "/assignee",
        schemaPath: "#/properties/assignee/type",
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
const C = {
  asana_add_task_to_section: A,
  asana_create_project: D,
  asana_create_story: x,
  asana_create_task: I,
  asana_delete_project: O,
  asana_delete_task: T,
  asana_get_task: E,
  asana_list_projects: S,
  asana_list_sections: F,
  asana_list_stories: L,
  asana_list_tasks: R,
  asana_list_users: V,
  asana_list_workspaces: M,
  asana_search_tasks: Y,
  asana_update_task: z,
};
exports.NATIVE_TOOL_VALIDATORS = C;
exports.validate_asana_add_task_to_section = A;
exports.validate_asana_create_project = D;
exports.validate_asana_create_story = x;
exports.validate_asana_create_task = I;
exports.validate_asana_delete_project = O;
exports.validate_asana_delete_task = T;
exports.validate_asana_get_task = E;
exports.validate_asana_list_projects = S;
exports.validate_asana_list_sections = F;
exports.validate_asana_list_stories = L;
exports.validate_asana_list_tasks = R;
exports.validate_asana_list_users = V;
exports.validate_asana_list_workspaces = M;
exports.validate_asana_search_tasks = Y;
exports.validate_asana_update_task = z;
