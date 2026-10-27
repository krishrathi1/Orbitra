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
      (r._sentryDebugIds[n] = "75d46066-80e9-4584-991b-79d43bd3035c"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-75d46066-80e9-4584-991b-79d43bd3035c"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const g = l;
function l(
  r,
  {
    instancePath: n = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = l.evaluated;
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
          e === "page" ||
          e === "account"
        )
      ) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.start !== void 0) {
      let e = r.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let e = r.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const e = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.limit !== void 0) {
      let e = r.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 1e3 || isNaN(e)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.page !== void 0) {
      let e = r.page;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 5e-324 || isNaN(e)) {
          const t = {
            instancePath: n + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 5e-324 },
            message: "must be >= 5e-324",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: n,
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
const v = y;
function y(
  r,
  {
    instancePath: n = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = y.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.surveyId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "surveyId" },
        message: "must have required property 'surveyId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in r)
      if (!(e === "surveyId" || e === "account")) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.surveyId !== void 0 && typeof r.surveyId != "string") {
      const e = {
        instancePath: n + "/surveyId",
        schemaPath: "#/properties/surveyId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: n,
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
const b = d;
function d(
  r,
  {
    instancePath: n = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = d.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.surveyId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "surveyId" },
        message: "must have required property 'surveyId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in r)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "surveyId" ||
          e === "limit" ||
          e === "page" ||
          e === "account"
        )
      ) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.start !== void 0) {
      let e = r.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let e = r.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const e = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.surveyId !== void 0 && typeof r.surveyId != "string") {
      const e = {
        instancePath: n + "/surveyId",
        schemaPath: "#/properties/surveyId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.limit !== void 0) {
      let e = r.limit;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 100 || isNaN(e)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 1 || isNaN(e)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.page !== void 0) {
      let e = r.page;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const t = {
          instancePath: n + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const t = {
            instancePath: n + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
        if (e < 5e-324 || isNaN(e)) {
          const t = {
            instancePath: n + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 5e-324 },
            message: "must be >= 5e-324",
          };
          (s === null ? (s = [t]) : s.push(t), i++);
        }
      }
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: n,
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
const P = f;
function f(
  r,
  {
    instancePath: n = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = f.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.title === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in r)
      if (!(e === "title" || e === "nickname" || e === "account")) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.title !== void 0 && typeof r.title != "string") {
      const e = {
        instancePath: n + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.nickname !== void 0 && typeof r.nickname != "string") {
      const e = {
        instancePath: n + "/nickname",
        schemaPath: "#/properties/nickname/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.account !== void 0 && typeof r.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: n,
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
const k = c;
function c(
  r,
  {
    instancePath: n = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = c.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.id === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "id" },
        message: "must have required property 'id'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in r)
      if (!(e === "id" || e === "title" || e === "language")) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.id !== void 0 && typeof r.id != "string") {
      const e = {
        instancePath: n + "/id",
        schemaPath: "#/properties/id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.title !== void 0 && typeof r.title != "string") {
      const e = {
        instancePath: n + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (r.language !== void 0 && typeof r.language != "string") {
      const e = {
        instancePath: n + "/language",
        schemaPath: "#/properties/language/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: n,
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
const w = h;
function h(
  r,
  {
    instancePath: n = "",
    parentData: o,
    parentDataProperty: m,
    rootData: p = r,
    dynamicAnchors: u = {},
  } = {},
) {
  let s = null,
    i = 0;
  const a = h.evaluated;
  if (
    (a.dynamicProps && (a.props = void 0),
    a.dynamicItems && (a.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.id === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "id" },
        message: "must have required property 'id'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in r)
      if (e !== "id") {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [t]) : s.push(t), i++);
      }
    if (r.id !== void 0 && typeof r.id != "string") {
      const e = {
        instancePath: n + "/id",
        schemaPath: "#/properties/id/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
  } else {
    const e = {
      instancePath: n,
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
const _ = {
  surveymonkey_list_surveys: g,
  surveymonkey_get_survey: v,
  surveymonkey_get_survey_responses: b,
  surveymonkey_create_survey: P,
  surveymonkey_update_survey: k,
  surveymonkey_delete_survey: w,
};
exports.NATIVE_TOOL_VALIDATORS = _;
exports.validate_surveymonkey_create_survey = P;
exports.validate_surveymonkey_delete_survey = w;
exports.validate_surveymonkey_get_survey = v;
exports.validate_surveymonkey_get_survey_responses = b;
exports.validate_surveymonkey_list_surveys = g;
exports.validate_surveymonkey_update_survey = k;
