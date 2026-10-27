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
      (t._sentryDebugIds[a] = "ceeaaa0b-0180-470b-87fd-657d7d7ea20d"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-ceeaaa0b-0180-470b-87fd-657d7d7ea20d"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const b = l;
function l(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const n = l.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const e in t)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "pageSize" ||
          e === "nextPageToken" ||
          e === "account"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.start !== void 0) {
      let e = t.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 1 || isNaN(e)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
    }
    if (t.end !== void 0) {
      let e = t.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const r = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 1 || isNaN(e)) {
          const r = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const e = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.pageSize !== void 0) {
      let e = t.pageSize;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/pageSize",
          schemaPath: "#/properties/pageSize/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 1e3 || isNaN(e)) {
          const r = {
            instancePath: a + "/pageSize",
            schemaPath: "#/properties/pageSize/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 1 || isNaN(e)) {
          const r = {
            instancePath: a + "/pageSize",
            schemaPath: "#/properties/pageSize/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
    }
    if (t.nextPageToken !== void 0 && typeof t.nextPageToken != "string") {
      const e = {
        instancePath: a + "/nextPageToken",
        schemaPath: "#/properties/nextPageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const e = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((l.errors = s), i === 0);
}
l.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const v = d,
  T = {
    properties: {
      status: { enum: ["Active", "Completed", "Deferred", "Cancelled"] },
    },
  };
function d(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const n = d.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const e in t)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "nextPageToken" ||
          e === "folderId" ||
          e === "status" ||
          e === "limit" ||
          e === "account"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.start !== void 0) {
      let e = t.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 1 || isNaN(e)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
    }
    if (t.end !== void 0) {
      let e = t.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const r = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 1 || isNaN(e)) {
          const r = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const e = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.nextPageToken !== void 0 && typeof t.nextPageToken != "string") {
      const e = {
        instancePath: a + "/nextPageToken",
        schemaPath: "#/properties/nextPageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.folderId !== void 0 && typeof t.folderId != "string") {
      const e = {
        instancePath: a + "/folderId",
        schemaPath: "#/properties/folderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.status !== void 0) {
      let e = t.status;
      if (typeof e != "string") {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (
        !(
          e === "Active" ||
          e === "Completed" ||
          e === "Deferred" ||
          e === "Cancelled"
        )
      ) {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: T.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    }
    if (t.limit !== void 0) {
      let e = t.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 100 || isNaN(e)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 1 || isNaN(e)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const e = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((d.errors = s), i === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const I = f;
function f(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const n = f.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.taskId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (!(e === "taskId" || e === "account")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.taskId !== void 0 && typeof t.taskId != "string") {
      const e = {
        instancePath: a + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const e = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((f.errors = s), i === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _ = c,
  P = {
    properties: {
      status: { enum: ["Active", "Completed", "Deferred", "Cancelled"] },
      importance: { enum: ["High", "Normal", "Low"] },
    },
  };
function c(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const n = c.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.folderId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "folderId" },
        message: "must have required property 'folderId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.title === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (
        !(
          e === "folderId" ||
          e === "title" ||
          e === "description" ||
          e === "status" ||
          e === "importance" ||
          e === "dueDate" ||
          e === "account"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.folderId !== void 0 && typeof t.folderId != "string") {
      const e = {
        instancePath: a + "/folderId",
        schemaPath: "#/properties/folderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const e = {
        instancePath: a + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const e = {
        instancePath: a + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.status !== void 0) {
      let e = t.status;
      if (typeof e != "string") {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (
        !(
          e === "Active" ||
          e === "Completed" ||
          e === "Deferred" ||
          e === "Cancelled"
        )
      ) {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: P.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    }
    if (t.importance !== void 0) {
      let e = t.importance;
      if (typeof e != "string") {
        const r = {
          instancePath: a + "/importance",
          schemaPath: "#/properties/importance/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (!(e === "High" || e === "Normal" || e === "Low")) {
        const r = {
          instancePath: a + "/importance",
          schemaPath: "#/properties/importance/enum",
          keyword: "enum",
          params: { allowedValues: P.properties.importance.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    }
    if (t.dueDate !== void 0 && typeof t.dueDate != "string") {
      const e = {
        instancePath: a + "/dueDate",
        schemaPath: "#/properties/dueDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const e = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((c.errors = s), i === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const N = y,
  w = {
    properties: {
      status: { enum: ["Active", "Completed", "Deferred", "Cancelled"] },
      importance: { enum: ["High", "Normal", "Low"] },
    },
  };
function y(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const n = y.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.taskId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (
        !(
          e === "taskId" ||
          e === "title" ||
          e === "status" ||
          e === "importance" ||
          e === "dueDate" ||
          e === "account"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.taskId !== void 0 && typeof t.taskId != "string") {
      const e = {
        instancePath: a + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const e = {
        instancePath: a + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.status !== void 0) {
      let e = t.status;
      if (typeof e != "string") {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (
        !(
          e === "Active" ||
          e === "Completed" ||
          e === "Deferred" ||
          e === "Cancelled"
        )
      ) {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: w.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    }
    if (t.importance !== void 0) {
      let e = t.importance;
      if (typeof e != "string") {
        const r = {
          instancePath: a + "/importance",
          schemaPath: "#/properties/importance/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (!(e === "High" || e === "Normal" || e === "Low")) {
        const r = {
          instancePath: a + "/importance",
          schemaPath: "#/properties/importance/enum",
          keyword: "enum",
          params: { allowedValues: w.properties.importance.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    }
    if (t.dueDate !== void 0 && typeof t.dueDate != "string") {
      const e = {
        instancePath: a + "/dueDate",
        schemaPath: "#/properties/dueDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const e = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((y.errors = s), i === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const D = h;
function h(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const n = h.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.taskId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (e !== "taskId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.taskId !== void 0 && typeof t.taskId != "string") {
      const e = {
        instancePath: a + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((h.errors = s), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const A = g;
function g(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const n = g.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.taskId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (e !== "taskId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.taskId !== void 0 && typeof t.taskId != "string") {
      const e = {
        instancePath: a + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((g.errors = s), i === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const x = k;
function k(
  t,
  {
    instancePath: a = "",
    parentData: o,
    parentDataProperty: p,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const n = k.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.taskId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "taskId" },
        message: "must have required property 'taskId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.text === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "text" },
        message: "must have required property 'text'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (!(e === "taskId" || e === "text")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.taskId !== void 0 && typeof t.taskId != "string") {
      const e = {
        instancePath: a + "/taskId",
        schemaPath: "#/properties/taskId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.text !== void 0 && typeof t.text != "string") {
      const e = {
        instancePath: a + "/text",
        schemaPath: "#/properties/text/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), i++);
  }
  return ((k.errors = s), i === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const q = {
  wrike_list_folders: b,
  wrike_list_tasks: v,
  wrike_get_task: I,
  wrike_create_task: _,
  wrike_update_task: N,
  wrike_delete_task: D,
  wrike_list_comments: A,
  wrike_create_comment: x,
};
exports.NATIVE_TOOL_VALIDATORS = q;
exports.validate_wrike_create_comment = x;
exports.validate_wrike_create_task = _;
exports.validate_wrike_delete_task = D;
exports.validate_wrike_get_task = I;
exports.validate_wrike_list_comments = A;
exports.validate_wrike_list_folders = b;
exports.validate_wrike_list_tasks = v;
exports.validate_wrike_update_task = N;
