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
      (r._sentryDebugIds[i] = "fe600d02-7d74-4c90-a997-564ceeedbabf"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-fe600d02-7d74-4c90-a997-564ceeedbabf"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const v = d;
function d(
  r,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: o,
    rootData: l = r,
    dynamicAnchors: m = {},
  } = {},
) {
  let s = null,
    t = 0;
  const a = d.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.candidateId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "candidateId" },
        message: "must have required property 'candidateId'",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.filename === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "filename" },
        message: "must have required property 'filename'",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    for (const e in r)
      if (
        !(
          e === "candidateId" ||
          e === "filepath" ||
          e === "url" ||
          e === "base64Content" ||
          e === "filename"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
    if (r.candidateId !== void 0 && typeof r.candidateId != "string") {
      const e = {
        instancePath: i + "/candidateId",
        schemaPath: "#/properties/candidateId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.filepath !== void 0 && typeof r.filepath != "string") {
      const e = {
        instancePath: i + "/filepath",
        schemaPath: "#/properties/filepath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.url !== void 0 && typeof r.url != "string") {
      const e = {
        instancePath: i + "/url",
        schemaPath: "#/properties/url/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.base64Content !== void 0 && typeof r.base64Content != "string") {
      const e = {
        instancePath: i + "/base64Content",
        schemaPath: "#/properties/base64Content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.filename !== void 0 && typeof r.filename != "string") {
      const e = {
        instancePath: i + "/filename",
        schemaPath: "#/properties/filename/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), t++);
  }
  return ((d.errors = s), t === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const I = u;
function u(
  r,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: o,
    rootData: l = r,
    dynamicAnchors: m = {},
  } = {},
) {
  let s = null,
    t = 0;
  const a = u.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.candidateId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "candidateId" },
        message: "must have required property 'candidateId'",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.jobId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "jobId" },
        message: "must have required property 'jobId'",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    for (const e in r)
      if (
        !(
          e === "candidateId" ||
          e === "jobId" ||
          e === "sourceId" ||
          e === "interviewPlanId"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
    if (r.candidateId !== void 0 && typeof r.candidateId != "string") {
      const e = {
        instancePath: i + "/candidateId",
        schemaPath: "#/properties/candidateId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.jobId !== void 0 && typeof r.jobId != "string") {
      const e = {
        instancePath: i + "/jobId",
        schemaPath: "#/properties/jobId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.sourceId !== void 0 && typeof r.sourceId != "string") {
      const e = {
        instancePath: i + "/sourceId",
        schemaPath: "#/properties/sourceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.interviewPlanId !== void 0 && typeof r.interviewPlanId != "string") {
      const e = {
        instancePath: i + "/interviewPlanId",
        schemaPath: "#/properties/interviewPlanId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), t++);
  }
  return ((u.errors = s), t === 0);
}
u.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const k = y;
function y(
  r,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: o,
    rootData: l = r,
    dynamicAnchors: m = {},
  } = {},
) {
  let s = null,
    t = 0;
  const a = y.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.name === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    for (const e in r)
      if (
        !(
          e === "name" ||
          e === "email" ||
          e === "phoneNumber" ||
          e === "linkedInUrl" ||
          e === "githubUrl" ||
          e === "websiteUrl" ||
          e === "location" ||
          e === "sourceId"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
    if (r.name !== void 0 && typeof r.name != "string") {
      const e = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.email !== void 0 && typeof r.email != "string") {
      const e = {
        instancePath: i + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.phoneNumber !== void 0 && typeof r.phoneNumber != "string") {
      const e = {
        instancePath: i + "/phoneNumber",
        schemaPath: "#/properties/phoneNumber/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.linkedInUrl !== void 0 && typeof r.linkedInUrl != "string") {
      const e = {
        instancePath: i + "/linkedInUrl",
        schemaPath: "#/properties/linkedInUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.githubUrl !== void 0 && typeof r.githubUrl != "string") {
      const e = {
        instancePath: i + "/githubUrl",
        schemaPath: "#/properties/githubUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.websiteUrl !== void 0 && typeof r.websiteUrl != "string") {
      const e = {
        instancePath: i + "/websiteUrl",
        schemaPath: "#/properties/websiteUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.location !== void 0 && typeof r.location != "string") {
      const e = {
        instancePath: i + "/location",
        schemaPath: "#/properties/location/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.sourceId !== void 0 && typeof r.sourceId != "string") {
      const e = {
        instancePath: i + "/sourceId",
        schemaPath: "#/properties/sourceId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), t++);
  }
  return ((y.errors = s), t === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _ = f;
function f(
  r,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: o,
    rootData: l = r,
    dynamicAnchors: m = {},
  } = {},
) {
  let s = null,
    t = 0;
  const a = f.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.interviewPlanId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "interviewPlanId" },
        message: "must have required property 'interviewPlanId'",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    for (const e in r)
      if (e !== "interviewPlanId") {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
    if (r.interviewPlanId !== void 0 && typeof r.interviewPlanId != "string") {
      const e = {
        instancePath: i + "/interviewPlanId",
        schemaPath: "#/properties/interviewPlanId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), t++);
  }
  return ((f.errors = s), t === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = c,
  T = {
    properties: { status: { enum: ["Open", "Closed", "Draft", "Archived"] } },
  };
function c(
  r,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: o,
    rootData: l = r,
    dynamicAnchors: m = {},
  } = {},
) {
  let s = null,
    t = 0;
  const a = c.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const e in r)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "limit" ||
          e === "status"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
    if (r.start !== void 0) {
      let e = r.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const n = {
          instancePath: i + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const n = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [n]) : s.push(n), t++);
        }
        if (e < 1 || isNaN(e)) {
          const n = {
            instancePath: i + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [n]) : s.push(n), t++);
        }
      }
    }
    if (r.end !== void 0) {
      let e = r.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const n = {
          instancePath: i + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const n = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [n]) : s.push(n), t++);
        }
        if (e < 1 || isNaN(e)) {
          const n = {
            instancePath: i + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [n]) : s.push(n), t++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const e = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.limit !== void 0 && typeof r.limit != "number") {
      const e = {
        instancePath: i + "/limit",
        schemaPath: "#/properties/limit/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.status !== void 0) {
      let e = r.status;
      if (typeof e != "string") {
        const n = {
          instancePath: i + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
      if (
        !(e === "Open" || e === "Closed" || e === "Draft" || e === "Archived")
      ) {
        const n = {
          instancePath: i + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: T.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
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
    (s === null ? (s = [e]) : s.push(e), t++);
  }
  return ((c.errors = s), t === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const N = h;
function h(
  r,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: o,
    rootData: l = r,
    dynamicAnchors: m = {},
  } = {},
) {
  let s = null,
    t = 0;
  const a = h.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  )
    for (const e in r) {
      const n = {
        instancePath: i,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e },
        message: "must NOT have additional properties",
      };
      (s === null ? (s = [n]) : s.push(n), t++);
    }
  else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), t++);
  }
  return ((h.errors = s), t === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const A = g;
function g(
  r,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: o,
    rootData: l = r,
    dynamicAnchors: m = {},
  } = {},
) {
  let s = null,
    t = 0;
  const a = g.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.applicationId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "applicationId" },
        message: "must have required property 'applicationId'",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.interviewStageId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "interviewStageId" },
        message: "must have required property 'interviewStageId'",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    for (const e in r)
      if (!(e === "applicationId" || e === "interviewStageId")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
    if (r.applicationId !== void 0 && typeof r.applicationId != "string") {
      const e = {
        instancePath: i + "/applicationId",
        schemaPath: "#/properties/applicationId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (
      r.interviewStageId !== void 0 &&
      typeof r.interviewStageId != "string"
    ) {
      const e = {
        instancePath: i + "/interviewStageId",
        schemaPath: "#/properties/interviewStageId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), t++);
  }
  return ((g.errors = s), t === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const D = b;
function b(
  r,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: o,
    rootData: l = r,
    dynamicAnchors: m = {},
  } = {},
) {
  let s = null,
    t = 0;
  const a = b.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const e in r)
      if (!(e === "limit" || e === "cursor" || e === "name" || e === "email")) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
    if (r.limit !== void 0) {
      let e = r.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const n = {
          instancePath: i + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [n]) : s.push(n), t++);
        }
        if (e < 1 || isNaN(e)) {
          const n = {
            instancePath: i + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [n]) : s.push(n), t++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const e = {
        instancePath: i + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const e = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.email !== void 0 && typeof r.email != "string") {
      const e = {
        instancePath: i + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), t++);
  }
  return ((b.errors = s), t === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const q = P;
function P(
  r,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: o,
    rootData: l = r,
    dynamicAnchors: m = {},
  } = {},
) {
  let s = null,
    t = 0;
  const a = P.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.candidateId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "candidateId" },
        message: "must have required property 'candidateId'",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    for (const e in r)
      if (
        !(
          e === "candidateId" ||
          e === "name" ||
          e === "email" ||
          e === "phoneNumber" ||
          e === "linkedInUrl" ||
          e === "githubUrl" ||
          e === "websiteUrl" ||
          e === "location"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
    if (r.candidateId !== void 0 && typeof r.candidateId != "string") {
      const e = {
        instancePath: i + "/candidateId",
        schemaPath: "#/properties/candidateId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.name !== void 0 && typeof r.name != "string") {
      const e = {
        instancePath: i + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.email !== void 0 && typeof r.email != "string") {
      const e = {
        instancePath: i + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.phoneNumber !== void 0 && typeof r.phoneNumber != "string") {
      const e = {
        instancePath: i + "/phoneNumber",
        schemaPath: "#/properties/phoneNumber/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.linkedInUrl !== void 0 && typeof r.linkedInUrl != "string") {
      const e = {
        instancePath: i + "/linkedInUrl",
        schemaPath: "#/properties/linkedInUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.githubUrl !== void 0 && typeof r.githubUrl != "string") {
      const e = {
        instancePath: i + "/githubUrl",
        schemaPath: "#/properties/githubUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.websiteUrl !== void 0 && typeof r.websiteUrl != "string") {
      const e = {
        instancePath: i + "/websiteUrl",
        schemaPath: "#/properties/websiteUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.location !== void 0 && typeof r.location != "string") {
      const e = {
        instancePath: i + "/location",
        schemaPath: "#/properties/location/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), t++);
  }
  return ((P.errors = s), t === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const U = w;
function w(
  r,
  {
    instancePath: i = "",
    parentData: p,
    parentDataProperty: o,
    rootData: l = r,
    dynamicAnchors: m = {},
  } = {},
) {
  let s = null,
    t = 0;
  const a = w.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.candidateId === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "candidateId" },
        message: "must have required property 'candidateId'",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.filename === void 0) {
      const e = {
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "filename" },
        message: "must have required property 'filename'",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    for (const e in r)
      if (
        !(
          e === "candidateId" ||
          e === "filepath" ||
          e === "url" ||
          e === "base64Content" ||
          e === "filename"
        )
      ) {
        const n = {
          instancePath: i,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [n]) : s.push(n), t++);
      }
    if (r.candidateId !== void 0 && typeof r.candidateId != "string") {
      const e = {
        instancePath: i + "/candidateId",
        schemaPath: "#/properties/candidateId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.filepath !== void 0 && typeof r.filepath != "string") {
      const e = {
        instancePath: i + "/filepath",
        schemaPath: "#/properties/filepath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.url !== void 0 && typeof r.url != "string") {
      const e = {
        instancePath: i + "/url",
        schemaPath: "#/properties/url/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.base64Content !== void 0 && typeof r.base64Content != "string") {
      const e = {
        instancePath: i + "/base64Content",
        schemaPath: "#/properties/base64Content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
    if (r.filename !== void 0 && typeof r.filename != "string") {
      const e = {
        instancePath: i + "/filename",
        schemaPath: "#/properties/filename/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), t++);
    }
  } else {
    const e = {
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (s === null ? (s = [e]) : s.push(e), t++);
  }
  return ((w.errors = s), t === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const O = {
  ashby_add_attachment: v,
  ashby_create_application: I,
  ashby_create_candidate: k,
  ashby_list_interview_stages: _,
  ashby_list_jobs: j,
  ashby_list_sources: N,
  ashby_move_stage: A,
  ashby_search_candidates: D,
  ashby_update_candidate: q,
  ashby_upload_resume: U,
};
exports.NATIVE_TOOL_VALIDATORS = O;
exports.validate_ashby_add_attachment = v;
exports.validate_ashby_create_application = I;
exports.validate_ashby_create_candidate = k;
exports.validate_ashby_list_interview_stages = _;
exports.validate_ashby_list_jobs = j;
exports.validate_ashby_list_sources = N;
exports.validate_ashby_move_stage = A;
exports.validate_ashby_search_candidates = D;
exports.validate_ashby_update_candidate = q;
exports.validate_ashby_upload_resume = U;
