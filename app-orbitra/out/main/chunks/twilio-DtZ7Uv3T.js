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
      n = new r.Error().stack;
    n &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[n] = "8e139467-7758-4eb8-a15f-cb91b699285c"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-8e139467-7758-4eb8-a15f-cb91b699285c"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const v = u;
function u(
  r,
  {
    instancePath: n = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = u.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.phoneNumber === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "phoneNumber" },
        message: "must have required property 'phoneNumber'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "phoneNumber" ||
          s === "friendlyName" ||
          s === "smsUrl" ||
          s === "voiceUrl"
        )
      ) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.phoneNumber !== void 0 && typeof r.phoneNumber != "string") {
      const s = {
        instancePath: n + "/phoneNumber",
        schemaPath: "#/properties/phoneNumber/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.friendlyName !== void 0 && typeof r.friendlyName != "string") {
      const s = {
        instancePath: n + "/friendlyName",
        schemaPath: "#/properties/friendlyName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.smsUrl !== void 0 && typeof r.smsUrl != "string") {
      const s = {
        instancePath: n + "/smsUrl",
        schemaPath: "#/properties/smsUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.voiceUrl !== void 0 && typeof r.voiceUrl != "string") {
      const s = {
        instancePath: n + "/voiceUrl",
        schemaPath: "#/properties/voiceUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((u.errors = e), i === 0);
}
u.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _ = y;
function y(
  r,
  {
    instancePath: n = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = y.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.friendlyName === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "friendlyName" },
        message: "must have required property 'friendlyName'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "friendlyName" ||
          s === "inboundRequestUrl" ||
          s === "statusCallback" ||
          s === "useInboundWebhookOnNumber"
        )
      ) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.friendlyName !== void 0 && typeof r.friendlyName != "string") {
      const s = {
        instancePath: n + "/friendlyName",
        schemaPath: "#/properties/friendlyName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.inboundRequestUrl !== void 0 &&
      typeof r.inboundRequestUrl != "string"
    ) {
      const s = {
        instancePath: n + "/inboundRequestUrl",
        schemaPath: "#/properties/inboundRequestUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.statusCallback !== void 0 && typeof r.statusCallback != "string") {
      const s = {
        instancePath: n + "/statusCallback",
        schemaPath: "#/properties/statusCallback/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.useInboundWebhookOnNumber !== void 0 &&
      typeof r.useInboundWebhookOnNumber != "boolean"
    ) {
      const s = {
        instancePath: n + "/useInboundWebhookOnNumber",
        schemaPath: "#/properties/useInboundWebhookOnNumber/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const N = f;
function f(
  r,
  {
    instancePath: n = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = f.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  )
    for (const s in r) {
      const t = {
        instancePath: n,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: s },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  else {
    const s = {
      instancePath: n,
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
const S = d;
function d(
  r,
  {
    instancePath: n = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = d.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.messageSid === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "messageSid" },
        message: "must have required property 'messageSid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "messageSid") {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.messageSid !== void 0 && typeof r.messageSid != "string") {
      const s = {
        instancePath: n + "/messageSid",
        schemaPath: "#/properties/messageSid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const A = c,
  j = {
    properties: {
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
      to: { type: "string" },
      from: { type: "string" },
      dateSent: { type: "string" },
      dateSentAfter: { type: "string" },
      dateSentBefore: { type: "string" },
      pageSize: { type: "integer", minimum: 1, maximum: 1e3 },
      pageToken: { type: "string" },
    },
  },
  T = Object.prototype.hasOwnProperty;
function c(
  r,
  {
    instancePath: n = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = c.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!T.call(j.properties, s)) {
        const t = {
          instancePath: n,
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
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: n + "/start",
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
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: n + "/end",
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
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.to !== void 0 && typeof r.to != "string") {
      const s = {
        instancePath: n + "/to",
        schemaPath: "#/properties/to/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.from !== void 0 && typeof r.from != "string") {
      const s = {
        instancePath: n + "/from",
        schemaPath: "#/properties/from/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.dateSent !== void 0 && typeof r.dateSent != "string") {
      const s = {
        instancePath: n + "/dateSent",
        schemaPath: "#/properties/dateSent/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.dateSentAfter !== void 0 && typeof r.dateSentAfter != "string") {
      const s = {
        instancePath: n + "/dateSentAfter",
        schemaPath: "#/properties/dateSentAfter/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.dateSentBefore !== void 0 && typeof r.dateSentBefore != "string") {
      const s = {
        instancePath: n + "/dateSentBefore",
        schemaPath: "#/properties/dateSentBefore/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.pageSize !== void 0) {
      let s = r.pageSize;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: n + "/pageSize",
          schemaPath: "#/properties/pageSize/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 1e3 || isNaN(s)) {
          const t = {
            instancePath: n + "/pageSize",
            schemaPath: "#/properties/pageSize/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: n + "/pageSize",
            schemaPath: "#/properties/pageSize/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: n + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const D = h;
function h(
  r,
  {
    instancePath: n = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = h.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "start" ||
          s === "end" ||
          s === "cursor" ||
          s === "pageSize" ||
          s === "pageToken"
        )
      ) {
        const t = {
          instancePath: n,
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
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: n + "/start",
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
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: n + "/end",
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
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.pageSize !== void 0) {
      let s = r.pageSize;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: n + "/pageSize",
          schemaPath: "#/properties/pageSize/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 1e3 || isNaN(s)) {
          const t = {
            instancePath: n + "/pageSize",
            schemaPath: "#/properties/pageSize/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: n + "/pageSize",
            schemaPath: "#/properties/pageSize/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: n + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((h.errors = e), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = g;
function g(
  r,
  {
    instancePath: n = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = g.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.phoneNumberSid === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "phoneNumberSid" },
        message: "must have required property 'phoneNumberSid'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "phoneNumberSid") {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.phoneNumberSid !== void 0 && typeof r.phoneNumberSid != "string") {
      const s = {
        instancePath: n + "/phoneNumberSid",
        schemaPath: "#/properties/phoneNumberSid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const I = b,
  w = {
    properties: {
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 9007199254740991,
        title: "ReadPaginationLimit",
      },
      cursor: { type: "string", title: "ReadPaginationCursor" },
      pageToken: { type: "string" },
      country: { type: "string", minLength: 2, maxLength: 2 },
      type: { enum: ["local", "tollfree", "mobile"], type: "string" },
      areaCode: { type: "string" },
      contains: { type: "string" },
      smsEnabled: { type: "boolean" },
      mmsEnabled: { type: "boolean" },
      voiceEnabled: { type: "boolean" },
    },
  },
  k = require("ajv/dist/runtime/ucs2length").default;
function b(
  r,
  {
    instancePath: n = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = b.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.country === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "country" },
        message: "must have required property 'country'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!T.call(w.properties, s)) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.limit !== void 0) {
      let s = r.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: n + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/minimum",
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
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: n + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.country !== void 0) {
      let s = r.country;
      if (typeof s == "string") {
        if (k(s) > 2) {
          const t = {
            instancePath: n + "/country",
            schemaPath: "#/properties/country/maxLength",
            keyword: "maxLength",
            params: { limit: 2 },
            message: "must NOT have more than 2 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (k(s) < 2) {
          const t = {
            instancePath: n + "/country",
            schemaPath: "#/properties/country/minLength",
            keyword: "minLength",
            params: { limit: 2 },
            message: "must NOT have fewer than 2 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/country",
          schemaPath: "#/properties/country/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.type !== void 0) {
      let s = r.type;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "local" || s === "tollfree" || s === "mobile")) {
        const t = {
          instancePath: n + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: w.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.areaCode !== void 0 && typeof r.areaCode != "string") {
      const s = {
        instancePath: n + "/areaCode",
        schemaPath: "#/properties/areaCode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.contains !== void 0 && typeof r.contains != "string") {
      const s = {
        instancePath: n + "/contains",
        schemaPath: "#/properties/contains/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.smsEnabled !== void 0 && typeof r.smsEnabled != "boolean") {
      const s = {
        instancePath: n + "/smsEnabled",
        schemaPath: "#/properties/smsEnabled/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.mmsEnabled !== void 0 && typeof r.mmsEnabled != "boolean") {
      const s = {
        instancePath: n + "/mmsEnabled",
        schemaPath: "#/properties/mmsEnabled/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.voiceEnabled !== void 0 && typeof r.voiceEnabled != "boolean") {
      const s = {
        instancePath: n + "/voiceEnabled",
        schemaPath: "#/properties/voiceEnabled/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const q = P;
function P(
  r,
  {
    instancePath: n = "",
    parentData: a,
    parentDataProperty: p,
    rootData: m = r,
    dynamicAnchors: l = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = P.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.from === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "from" },
        message: "must have required property 'from'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.to === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "to" },
        message: "must have required property 'to'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.body === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "body" },
        message: "must have required property 'body'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "from" || s === "to" || s === "body")) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.from !== void 0 && typeof r.from != "string") {
      const s = {
        instancePath: n + "/from",
        schemaPath: "#/properties/from/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.to !== void 0 && typeof r.to != "string") {
      const s = {
        instancePath: n + "/to",
        schemaPath: "#/properties/to/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.body !== void 0 && typeof r.body != "string") {
      const s = {
        instancePath: n + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
  } else {
    const s = {
      instancePath: n,
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
const O = {
  twilio_buy_phone_number: v,
  twilio_create_messaging_service: _,
  twilio_get_account: N,
  twilio_get_message: S,
  twilio_list_messages: A,
  twilio_list_phone_numbers: D,
  twilio_release_phone_number: E,
  twilio_search_available_numbers: I,
  twilio_send_sms: q,
};
exports.NATIVE_TOOL_VALIDATORS = O;
exports.validate_twilio_buy_phone_number = v;
exports.validate_twilio_create_messaging_service = _;
exports.validate_twilio_get_account = N;
exports.validate_twilio_get_message = S;
exports.validate_twilio_list_messages = A;
exports.validate_twilio_list_phone_numbers = D;
exports.validate_twilio_release_phone_number = E;
exports.validate_twilio_search_available_numbers = I;
exports.validate_twilio_send_sms = q;
