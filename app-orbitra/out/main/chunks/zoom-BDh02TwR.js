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
      n = new t.Error().stack;
    n &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[n] = "1e6e9c08-a299-4efd-8a65-fce809bd4a95"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-1e6e9c08-a299-4efd-8a65-fce809bd4a95"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const w = l;
function l(
  t,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    r = 0;
  const o = l.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.topic === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "topic" },
        message: "must have required property 'topic'",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.type === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "type" },
        message: "must have required property 'type'",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    for (const e in t)
      if (
        !(
          e === "accountId" ||
          e === "topic" ||
          e === "type" ||
          e === "startTime" ||
          e === "duration" ||
          e === "timezone" ||
          e === "agenda" ||
          e === "password"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const e = {
        instancePath: n + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.topic !== void 0 && typeof t.topic != "string") {
      const e = {
        instancePath: n + "/topic",
        schemaPath: "#/properties/topic/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.type !== void 0 && typeof t.type != "number") {
      const e = {
        instancePath: n + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.startTime !== void 0 && typeof t.startTime != "string") {
      const e = {
        instancePath: n + "/startTime",
        schemaPath: "#/properties/startTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.duration !== void 0 && typeof t.duration != "number") {
      const e = {
        instancePath: n + "/duration",
        schemaPath: "#/properties/duration/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.timezone !== void 0 && typeof t.timezone != "string") {
      const e = {
        instancePath: n + "/timezone",
        schemaPath: "#/properties/timezone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.agenda !== void 0 && typeof t.agenda != "string") {
      const e = {
        instancePath: n + "/agenda",
        schemaPath: "#/properties/agenda/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.password !== void 0 && typeof t.password != "string") {
      const e = {
        instancePath: n + "/password",
        schemaPath: "#/properties/password/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), r++);
  }
  return ((l.errors = s), r === 0);
}
l.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const k = d;
function d(
  t,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    r = 0;
  const o = d.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.topic === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "topic" },
        message: "must have required property 'topic'",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    for (const e in t)
      if (
        !(
          e === "accountId" ||
          e === "topic" ||
          e === "type" ||
          e === "startTime" ||
          e === "duration" ||
          e === "agenda" ||
          e === "password" ||
          e === "timezone"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const e = {
        instancePath: n + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.topic !== void 0 && typeof t.topic != "string") {
      const e = {
        instancePath: n + "/topic",
        schemaPath: "#/properties/topic/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.type !== void 0 && typeof t.type != "number") {
      const e = {
        instancePath: n + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.startTime !== void 0 && typeof t.startTime != "string") {
      const e = {
        instancePath: n + "/startTime",
        schemaPath: "#/properties/startTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.duration !== void 0 && typeof t.duration != "number") {
      const e = {
        instancePath: n + "/duration",
        schemaPath: "#/properties/duration/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.agenda !== void 0 && typeof t.agenda != "string") {
      const e = {
        instancePath: n + "/agenda",
        schemaPath: "#/properties/agenda/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.password !== void 0 && typeof t.password != "string") {
      const e = {
        instancePath: n + "/password",
        schemaPath: "#/properties/password/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.timezone !== void 0 && typeof t.timezone != "string") {
      const e = {
        instancePath: n + "/timezone",
        schemaPath: "#/properties/timezone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), r++);
  }
  return ((d.errors = s), r === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const I = y;
function y(
  t,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    r = 0;
  const o = y.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.meetingId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "meetingId" },
        message: "must have required property 'meetingId'",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    for (const e in t)
      if (!(e === "accountId" || e === "meetingId")) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const e = {
        instancePath: n + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.meetingId !== void 0 && typeof t.meetingId != "string") {
      const e = {
        instancePath: n + "/meetingId",
        schemaPath: "#/properties/meetingId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), r++);
  }
  return ((y.errors = s), r === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const v = f;
function f(
  t,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    r = 0;
  const o = f.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.meetingId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "meetingId" },
        message: "must have required property 'meetingId'",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    for (const e in t)
      if (!(e === "accountId" || e === "meetingId")) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const e = {
        instancePath: n + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.meetingId !== void 0 && typeof t.meetingId != "string") {
      const e = {
        instancePath: n + "/meetingId",
        schemaPath: "#/properties/meetingId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), r++);
  }
  return ((f.errors = s), r === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _ = c,
  A = {
    properties: {
      type: {
        enum: [
          "scheduled",
          "live",
          "upcoming",
          "upcoming_meetings",
          "previous_meetings",
        ],
      },
    },
  };
function c(
  t,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    r = 0;
  const o = c.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const e in t)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "accountId" ||
          e === "type" ||
          e === "pageSize" ||
          e === "nextPageToken"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
    if (t.start !== void 0) {
      let e = t.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
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
          (s === null ? (s = [i]) : s.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [i]) : s.push(i), r++);
        }
      }
    }
    if (t.end !== void 0) {
      let e = t.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
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
          (s === null ? (s = [i]) : s.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [i]) : s.push(i), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const e = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const e = {
        instancePath: n + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.type !== void 0) {
      let e = t.type;
      if (typeof e != "string") {
        const i = {
          instancePath: n + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
      if (
        !(
          e === "scheduled" ||
          e === "live" ||
          e === "upcoming" ||
          e === "upcoming_meetings" ||
          e === "previous_meetings"
        )
      ) {
        const i = {
          instancePath: n + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: A.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
    }
    if (t.pageSize !== void 0 && typeof t.pageSize != "number") {
      const e = {
        instancePath: n + "/pageSize",
        schemaPath: "#/properties/pageSize/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.nextPageToken !== void 0 && typeof t.nextPageToken != "string") {
      const e = {
        instancePath: n + "/nextPageToken",
        schemaPath: "#/properties/nextPageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), r++);
  }
  return ((c.errors = s), r === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const N = g;
function g(
  t,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    r = 0;
  const o = g.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const e in t)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "nextPageToken" ||
          e === "accountId" ||
          e === "from" ||
          e === "to" ||
          e === "pageSize"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
    if (t.start !== void 0) {
      let e = t.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
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
          (s === null ? (s = [i]) : s.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [i]) : s.push(i), r++);
        }
      }
    }
    if (t.end !== void 0) {
      let e = t.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
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
          (s === null ? (s = [i]) : s.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [i]) : s.push(i), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const e = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.nextPageToken !== void 0 && typeof t.nextPageToken != "string") {
      const e = {
        instancePath: n + "/nextPageToken",
        schemaPath: "#/properties/nextPageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const e = {
        instancePath: n + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.from !== void 0 && typeof t.from != "string") {
      const e = {
        instancePath: n + "/from",
        schemaPath: "#/properties/from/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.to !== void 0 && typeof t.to != "string") {
      const e = {
        instancePath: n + "/to",
        schemaPath: "#/properties/to/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.pageSize !== void 0 && typeof t.pageSize != "number") {
      const e = {
        instancePath: n + "/pageSize",
        schemaPath: "#/properties/pageSize/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), r++);
  }
  return ((g.errors = s), r === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = h,
  D = { properties: { status: { enum: ["active", "inactive", "pending"] } } };
function h(
  t,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    r = 0;
  const o = h.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const e in t)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "accountId" ||
          e === "status" ||
          e === "pageSize" ||
          e === "nextPageToken"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
    if (t.start !== void 0) {
      let e = t.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
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
          (s === null ? (s = [i]) : s.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [i]) : s.push(i), r++);
        }
      }
    }
    if (t.end !== void 0) {
      let e = t.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
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
          (s === null ? (s = [i]) : s.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [i]) : s.push(i), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const e = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const e = {
        instancePath: n + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.status !== void 0) {
      let e = t.status;
      if (typeof e != "string") {
        const i = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
      if (!(e === "active" || e === "inactive" || e === "pending")) {
        const i = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: D.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
    }
    if (t.pageSize !== void 0 && typeof t.pageSize != "number") {
      const e = {
        instancePath: n + "/pageSize",
        schemaPath: "#/properties/pageSize/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.nextPageToken !== void 0 && typeof t.nextPageToken != "string") {
      const e = {
        instancePath: n + "/nextPageToken",
        schemaPath: "#/properties/nextPageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), r++);
  }
  return ((h.errors = s), r === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const T = b;
function b(
  t,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    r = 0;
  const o = b.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const e in t)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "accountId" ||
          e === "pageSize" ||
          e === "nextPageToken"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
    if (t.start !== void 0) {
      let e = t.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
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
          (s === null ? (s = [i]) : s.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [i]) : s.push(i), r++);
        }
      }
    }
    if (t.end !== void 0) {
      let e = t.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
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
          (s === null ? (s = [i]) : s.push(i), r++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [i]) : s.push(i), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const e = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const e = {
        instancePath: n + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.pageSize !== void 0 && typeof t.pageSize != "number") {
      const e = {
        instancePath: n + "/pageSize",
        schemaPath: "#/properties/pageSize/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.nextPageToken !== void 0 && typeof t.nextPageToken != "string") {
      const e = {
        instancePath: n + "/nextPageToken",
        schemaPath: "#/properties/nextPageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), r++);
  }
  return ((b.errors = s), r === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const x = P;
function P(
  t,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = t,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    r = 0;
  const o = P.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.meetingId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "meetingId" },
        message: "must have required property 'meetingId'",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    for (const e in t)
      if (
        !(
          e === "accountId" ||
          e === "meetingId" ||
          e === "topic" ||
          e === "startTime" ||
          e === "duration" ||
          e === "agenda" ||
          e === "password"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [i]) : s.push(i), r++);
      }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const e = {
        instancePath: n + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.meetingId !== void 0 && typeof t.meetingId != "string") {
      const e = {
        instancePath: n + "/meetingId",
        schemaPath: "#/properties/meetingId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.topic !== void 0 && typeof t.topic != "string") {
      const e = {
        instancePath: n + "/topic",
        schemaPath: "#/properties/topic/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.startTime !== void 0 && typeof t.startTime != "string") {
      const e = {
        instancePath: n + "/startTime",
        schemaPath: "#/properties/startTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.duration !== void 0 && typeof t.duration != "number") {
      const e = {
        instancePath: n + "/duration",
        schemaPath: "#/properties/duration/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.agenda !== void 0 && typeof t.agenda != "string") {
      const e = {
        instancePath: n + "/agenda",
        schemaPath: "#/properties/agenda/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
    if (t.password !== void 0 && typeof t.password != "string") {
      const e = {
        instancePath: n + "/password",
        schemaPath: "#/properties/password/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), r++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), r++);
  }
  return ((P.errors = s), r === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = {
  zoom_create_meeting: w,
  zoom_create_webinar: k,
  zoom_delete_meeting: I,
  zoom_get_meeting: v,
  zoom_list_meetings: _,
  zoom_list_recordings: N,
  zoom_list_users: z,
  zoom_list_webinars: T,
  zoom_update_meeting: x,
};
exports.NATIVE_TOOL_VALIDATORS = j;
exports.validate_zoom_create_meeting = w;
exports.validate_zoom_create_webinar = k;
exports.validate_zoom_delete_meeting = I;
exports.validate_zoom_get_meeting = v;
exports.validate_zoom_list_meetings = _;
exports.validate_zoom_list_recordings = N;
exports.validate_zoom_list_users = z;
exports.validate_zoom_list_webinars = T;
exports.validate_zoom_update_meeting = x;
