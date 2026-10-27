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
      (t._sentryDebugIds[a] = "bcb4456d-2957-470a-999d-6258559ec3e0"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-bcb4456d-2957-470a-999d-6258559ec3e0"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const A = u,
  R = { properties: { status: { enum: ["subscribed", "pending"] } } },
  I = new RegExp(
    "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
    "u",
  );
function u(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = u.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.listId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.email === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "email" },
        message: "must have required property 'email'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.status === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "status" },
        message: "must have required property 'status'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (
        !(
          e === "listId" ||
          e === "email" ||
          e === "status" ||
          e === "firstName" ||
          e === "lastName"
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
    if (t.listId !== void 0 && typeof t.listId != "string") {
      const e = {
        instancePath: a + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.email !== void 0) {
      let e = t.email;
      if (typeof e == "string") {
        if (!I.test(e)) {
          const r = {
            instancePath: a + "/email",
            schemaPath: "#/properties/email/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
            },
            message: `must match pattern "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$"`,
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/email",
          schemaPath: "#/properties/email/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
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
      if (!(e === "subscribed" || e === "pending")) {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: R.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    }
    if (t.firstName !== void 0 && typeof t.firstName != "string") {
      const e = {
        instancePath: a + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.lastName !== void 0 && typeof t.lastName != "string") {
      const e = {
        instancePath: a + "/lastName",
        schemaPath: "#/properties/lastName/type",
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
  return ((u.errors = s), i === 0);
}
u.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const q = f,
  M = {
    properties: {
      type: { enum: ["regular", "plaintext", "absplit", "rss", "variate"] },
    },
  };
function f(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = f.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.listId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.subjectLine === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "subjectLine" },
        message: "must have required property 'subjectLine'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.fromName === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fromName" },
        message: "must have required property 'fromName'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.replyTo === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "replyTo" },
        message: "must have required property 'replyTo'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (
        !(
          e === "type" ||
          e === "listId" ||
          e === "subjectLine" ||
          e === "fromName" ||
          e === "replyTo" ||
          e === "title" ||
          e === "previewText" ||
          e === "toName"
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
    if (t.type !== void 0) {
      let e = t.type;
      if (typeof e != "string") {
        const r = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (
        !(
          e === "regular" ||
          e === "plaintext" ||
          e === "absplit" ||
          e === "rss" ||
          e === "variate"
        )
      ) {
        const r = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: M.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    }
    if (t.listId !== void 0 && typeof t.listId != "string") {
      const e = {
        instancePath: a + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.subjectLine !== void 0 && typeof t.subjectLine != "string") {
      const e = {
        instancePath: a + "/subjectLine",
        schemaPath: "#/properties/subjectLine/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.fromName !== void 0 && typeof t.fromName != "string") {
      const e = {
        instancePath: a + "/fromName",
        schemaPath: "#/properties/fromName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.replyTo !== void 0 && typeof t.replyTo != "string") {
      const e = {
        instancePath: a + "/replyTo",
        schemaPath: "#/properties/replyTo/type",
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
    if (t.previewText !== void 0 && typeof t.previewText != "string") {
      const e = {
        instancePath: a + "/previewText",
        schemaPath: "#/properties/previewText/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.toName !== void 0 && typeof t.toName != "string") {
      const e = {
        instancePath: a + "/toName",
        schemaPath: "#/properties/toName/type",
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
const j = d;
function d(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = d.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.campaignId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (e !== "campaignId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.campaignId !== void 0 && typeof t.campaignId != "string") {
      const e = {
        instancePath: a + "/campaignId",
        schemaPath: "#/properties/campaignId/type",
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
const D = c;
function c(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = c.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.campaignId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (e !== "campaignId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.campaignId !== void 0 && typeof t.campaignId != "string") {
      const e = {
        instancePath: a + "/campaignId",
        schemaPath: "#/properties/campaignId/type",
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
const x = y;
function y(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = y.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.listId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.email === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "email" },
        message: "must have required property 'email'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (!(e === "listId" || e === "email")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.listId !== void 0 && typeof t.listId != "string") {
      const e = {
        instancePath: a + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.email !== void 0) {
      let e = t.email;
      if (typeof e == "string") {
        if (!I.test(e)) {
          const r = {
            instancePath: a + "/email",
            schemaPath: "#/properties/email/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
            },
            message: `must match pattern "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$"`,
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/email",
          schemaPath: "#/properties/email/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
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
const z = h;
function h(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = h.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.campaignId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (e !== "campaignId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.campaignId !== void 0 && typeof t.campaignId != "string") {
      const e = {
        instancePath: a + "/campaignId",
        schemaPath: "#/properties/campaignId/type",
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
const Z = g;
function g(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = g.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const e in t)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "offset" ||
          e === "count"
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
    if (t.offset !== void 0) {
      let e = t.offset;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const r = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 0 || isNaN(e)) {
          const r = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
    }
    if (t.count !== void 0) {
      let e = t.count;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/count",
          schemaPath: "#/properties/count/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 1e3 || isNaN(e)) {
          const r = {
            instancePath: a + "/count",
            schemaPath: "#/properties/count/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 1 || isNaN(e)) {
          const r = {
            instancePath: a + "/count",
            schemaPath: "#/properties/count/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
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
const T = b,
  Y = {
    properties: {
      status: { enum: ["save", "paused", "schedule", "sending", "sent"] },
    },
  };
function b(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = b.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const e in t)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "offset" ||
          e === "count" ||
          e === "status"
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
    if (t.offset !== void 0) {
      let e = t.offset;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const r = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 0 || isNaN(e)) {
          const r = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
    }
    if (t.count !== void 0) {
      let e = t.count;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/count",
          schemaPath: "#/properties/count/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 1e3 || isNaN(e)) {
          const r = {
            instancePath: a + "/count",
            schemaPath: "#/properties/count/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 1 || isNaN(e)) {
          const r = {
            instancePath: a + "/count",
            schemaPath: "#/properties/count/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
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
          e === "save" ||
          e === "paused" ||
          e === "schedule" ||
          e === "sending" ||
          e === "sent"
        )
      ) {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: Y.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
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
  return ((b.errors = s), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = P,
  B = {
    properties: {
      status: {
        enum: [
          "subscribed",
          "unsubscribed",
          "cleaned",
          "pending",
          "transactional",
        ],
      },
    },
  };
function P(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = P.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.listId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "offset" ||
          e === "listId" ||
          e === "count" ||
          e === "status"
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
    if (t.offset !== void 0) {
      let e = t.offset;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const r = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 0 || isNaN(e)) {
          const r = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
    }
    if (t.listId !== void 0 && typeof t.listId != "string") {
      const e = {
        instancePath: a + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.count !== void 0) {
      let e = t.count;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/count",
          schemaPath: "#/properties/count/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 1e3 || isNaN(e)) {
          const r = {
            instancePath: a + "/count",
            schemaPath: "#/properties/count/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 1 || isNaN(e)) {
          const r = {
            instancePath: a + "/count",
            schemaPath: "#/properties/count/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
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
          e === "subscribed" ||
          e === "unsubscribed" ||
          e === "cleaned" ||
          e === "pending" ||
          e === "transactional"
        )
      ) {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: B.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
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
  return ((P.errors = s), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const O = w,
  C = {
    properties: {
      type: { enum: ["regular", "plaintext", "absplit", "rss", "variate"] },
    },
  };
function w(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = w.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const e in t)
      if (
        !(
          e === "start" ||
          e === "end" ||
          e === "cursor" ||
          e === "offset" ||
          e === "count" ||
          e === "type"
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
    if (t.offset !== void 0) {
      let e = t.offset;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const r = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 0 || isNaN(e)) {
          const r = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
    }
    if (t.count !== void 0) {
      let e = t.count;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const r = {
          instancePath: a + "/count",
          schemaPath: "#/properties/count/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (typeof e == "number") {
        if (e > 1e3 || isNaN(e)) {
          const r = {
            instancePath: a + "/count",
            schemaPath: "#/properties/count/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
        if (e < 1 || isNaN(e)) {
          const r = {
            instancePath: a + "/count",
            schemaPath: "#/properties/count/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      }
    }
    if (t.type !== void 0) {
      let e = t.type;
      if (typeof e != "string") {
        const r = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
      if (
        !(
          e === "regular" ||
          e === "plaintext" ||
          e === "absplit" ||
          e === "rss" ||
          e === "variate"
        )
      ) {
        const r = {
          instancePath: a + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: C.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
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
  return ((w.errors = s), i === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = k;
function k(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = k.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.listId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.email === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "email" },
        message: "must have required property 'email'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (!(e === "accountId" || e === "listId" || e === "email")) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.accountId !== void 0 && typeof t.accountId != "string") {
      const e = {
        instancePath: a + "/accountId",
        schemaPath: "#/properties/accountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.listId !== void 0 && typeof t.listId != "string") {
      const e = {
        instancePath: a + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.email !== void 0) {
      let e = t.email;
      if (typeof e == "string") {
        if (!I.test(e)) {
          const r = {
            instancePath: a + "/email",
            schemaPath: "#/properties/email/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
            },
            message: `must match pattern "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$"`,
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/email",
          schemaPath: "#/properties/email/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
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
const V = v;
function v(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = v.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.campaignId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (e !== "campaignId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    if (t.campaignId !== void 0 && typeof t.campaignId != "string") {
      const e = {
        instancePath: a + "/campaignId",
        schemaPath: "#/properties/campaignId/type",
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
  return ((v.errors = s), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const $ = N;
function N(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = N.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.campaignId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "campaignId" },
        message: "must have required property 'campaignId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (
        !(
          e === "campaignId" ||
          e === "html" ||
          e === "plainText" ||
          e === "templateId"
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
    if (t.campaignId !== void 0 && typeof t.campaignId != "string") {
      const e = {
        instancePath: a + "/campaignId",
        schemaPath: "#/properties/campaignId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.html !== void 0 && typeof t.html != "string") {
      const e = {
        instancePath: a + "/html",
        schemaPath: "#/properties/html/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.plainText !== void 0 && typeof t.plainText != "string") {
      const e = {
        instancePath: a + "/plainText",
        schemaPath: "#/properties/plainText/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.templateId !== void 0 && typeof t.templateId != "number") {
      const e = {
        instancePath: a + "/templateId",
        schemaPath: "#/properties/templateId/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
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
  return ((N.errors = s), i === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = _,
  F = {
    properties: {
      status: { enum: ["subscribed", "unsubscribed", "cleaned", "pending"] },
    },
  };
function _(
  t,
  {
    instancePath: a = "",
    parentData: p,
    parentDataProperty: n,
    rootData: o = t,
    dynamicAnchors: l = {},
  } = {},
) {
  let s = null,
    i = 0;
  const m = _.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.listId === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "listId" },
        message: "must have required property 'listId'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.email === void 0) {
      const e = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "email" },
        message: "must have required property 'email'",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    for (const e in t)
      if (
        !(
          e === "listId" ||
          e === "email" ||
          e === "status" ||
          e === "firstName" ||
          e === "lastName"
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
    if (t.listId !== void 0 && typeof t.listId != "string") {
      const e = {
        instancePath: a + "/listId",
        schemaPath: "#/properties/listId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.email !== void 0) {
      let e = t.email;
      if (typeof e == "string") {
        if (!I.test(e)) {
          const r = {
            instancePath: a + "/email",
            schemaPath: "#/properties/email/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
            },
            message: `must match pattern "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$"`,
          };
          (s === null ? (s = [r]) : s.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/email",
          schemaPath: "#/properties/email/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
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
          e === "subscribed" ||
          e === "unsubscribed" ||
          e === "cleaned" ||
          e === "pending"
        )
      ) {
        const r = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: F.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (s === null ? (s = [r]) : s.push(r), i++);
      }
    }
    if (t.firstName !== void 0 && typeof t.firstName != "string") {
      const e = {
        instancePath: a + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (s === null ? (s = [e]) : s.push(e), i++);
    }
    if (t.lastName !== void 0 && typeof t.lastName != "string") {
      const e = {
        instancePath: a + "/lastName",
        schemaPath: "#/properties/lastName/type",
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
  return ((_.errors = s), i === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = {
  mailchimp_add_member: A,
  mailchimp_create_campaign: q,
  mailchimp_delete_campaign: j,
  mailchimp_get_campaign: D,
  mailchimp_get_member: x,
  mailchimp_get_report: z,
  mailchimp_list_audiences: Z,
  mailchimp_list_campaigns: T,
  mailchimp_list_members: E,
  mailchimp_list_reports: O,
  mailchimp_remove_member: L,
  mailchimp_send_campaign: V,
  mailchimp_set_campaign_content: $,
  mailchimp_update_member: S,
};
exports.NATIVE_TOOL_VALIDATORS = G;
exports.validate_mailchimp_add_member = A;
exports.validate_mailchimp_create_campaign = q;
exports.validate_mailchimp_delete_campaign = j;
exports.validate_mailchimp_get_campaign = D;
exports.validate_mailchimp_get_member = x;
exports.validate_mailchimp_get_report = z;
exports.validate_mailchimp_list_audiences = Z;
exports.validate_mailchimp_list_campaigns = T;
exports.validate_mailchimp_list_members = E;
exports.validate_mailchimp_list_reports = O;
exports.validate_mailchimp_remove_member = L;
exports.validate_mailchimp_send_campaign = V;
exports.validate_mailchimp_set_campaign_content = $;
exports.validate_mailchimp_update_member = S;
