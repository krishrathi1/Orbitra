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
      a = new s.Error().stack;
    a &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[a] = "955ebca7-91af-43c1-b2de-4aee2c83d18d"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-955ebca7-91af-43c1-b2de-4aee2c83d18d"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const L = N;
function N(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = N.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "perPage" ||
          r === "page"
        )
      ) {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 50 || isNaN(r)) {
          const i = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
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
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((N.errors = e), t === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = v,
  te = {
    properties: {
      status: {
        enum: [
          "active",
          "pending",
          "initializing",
          "moved",
          "deleted",
          "deactivated",
        ],
      },
    },
  };
function v(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = v.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "name" ||
          r === "status" ||
          r === "perPage" ||
          r === "page"
        )
      ) {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const r = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.status !== void 0) {
      let r = s.status;
      if (typeof r != "string") {
        const i = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (
        !(
          r === "active" ||
          r === "pending" ||
          r === "initializing" ||
          r === "moved" ||
          r === "deleted" ||
          r === "deactivated"
        )
      ) {
        const i = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: te.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 50 || isNaN(r)) {
          const i = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 5 || isNaN(r)) {
          const i = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 5 },
            message: "must be >= 5",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
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
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((v.errors = e), t === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const F = _;
function _(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = _.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.zoneId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "zoneId" },
        message: "must have required property 'zoneId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (r !== "zoneId") {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (s.zoneId !== void 0 && typeof s.zoneId != "string") {
      const r = {
        instancePath: a + "/zoneId",
        schemaPath: "#/properties/zoneId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((_.errors = e), t === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const M = I;
function I(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = I.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.zoneId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "zoneId" },
        message: "must have required property 'zoneId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (r !== "zoneId") {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (s.zoneId !== void 0 && typeof s.zoneId != "string") {
      const r = {
        instancePath: a + "/zoneId",
        schemaPath: "#/properties/zoneId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((I.errors = e), t === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = A;
function A(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = A.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.zoneId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "zoneId" },
        message: "must have required property 'zoneId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.settingId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "settingId" },
        message: "must have required property 'settingId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (!(r === "zoneId" || r === "settingId")) {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (s.zoneId !== void 0 && typeof s.zoneId != "string") {
      const r = {
        instancePath: a + "/zoneId",
        schemaPath: "#/properties/zoneId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.settingId !== void 0 && typeof s.settingId != "string") {
      const r = {
        instancePath: a + "/settingId",
        schemaPath: "#/properties/settingId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((A.errors = e), t === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = j;
function j(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = j.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.zoneId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "zoneId" },
        message: "must have required property 'zoneId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "zoneId" ||
          r === "type" ||
          r === "name" ||
          r === "perPage" ||
          r === "page"
        )
      ) {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.zoneId !== void 0 && typeof s.zoneId != "string") {
      const r = {
        instancePath: a + "/zoneId",
        schemaPath: "#/properties/zoneId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.type !== void 0 && typeof s.type != "string") {
      const r = {
        instancePath: a + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const r = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const i = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 5 || isNaN(r)) {
          const i = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 5 },
            message: "must be >= 5",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
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
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((j.errors = e), t === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = z,
  ie = {
    properties: {
      confirm: { const: !0 },
      zoneId: { type: "string" },
      type: { type: "string" },
      name: { type: "string" },
      content: { type: "string" },
      ttl: {
        anyOf: [{ const: 1 }, { type: "integer", minimum: 60, maximum: 86400 }],
      },
      proxied: { type: "boolean" },
      priority: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      comment: { type: "string" },
      tags: { type: "array", items: { type: "string" } },
      settings: {
        type: "object",
        propertyNames: { type: "string" },
        additionalProperties: {},
      },
      data: {
        type: "object",
        propertyNames: { type: "string" },
        additionalProperties: {},
      },
    },
  },
  H = Object.prototype.hasOwnProperty;
function z(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = z.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.zoneId === void 0) {
      const o = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "zoneId" },
        message: "must have required property 'zoneId'",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.type === void 0) {
      const o = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "type" },
        message: "must have required property 'type'",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.name === void 0) {
      const o = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.content === void 0) {
      const o = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "content" },
        message: "must have required property 'content'",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    for (const o in s)
      if (!H.call(ie.properties, o)) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: o },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (s.confirm !== void 0 && s.confirm !== !0) {
      const o = {
        instancePath: a + "/confirm",
        schemaPath: "#/properties/confirm/const",
        keyword: "const",
        params: { allowedValue: !0 },
        message: "must be equal to constant",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.zoneId !== void 0 && typeof s.zoneId != "string") {
      const o = {
        instancePath: a + "/zoneId",
        schemaPath: "#/properties/zoneId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.type !== void 0 && typeof s.type != "string") {
      const o = {
        instancePath: a + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const o = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const o = {
        instancePath: a + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.ttl !== void 0) {
      let o = s.ttl;
      const p = t;
      let m = !1;
      const l = t;
      if (o !== 1) {
        const u = {
          instancePath: a + "/ttl",
          schemaPath: "#/properties/ttl/anyOf/0/const",
          keyword: "const",
          params: { allowedValue: 1 },
          message: "must be equal to constant",
        };
        (e === null ? (e = [u]) : e.push(u), t++);
      }
      var r = l === t;
      m = m || r;
      const P = t;
      if (!(typeof o == "number" && !(o % 1) && !isNaN(o))) {
        const u = {
          instancePath: a + "/ttl",
          schemaPath: "#/properties/ttl/anyOf/1/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [u]) : e.push(u), t++);
      }
      if (typeof o == "number") {
        if (o > 86400 || isNaN(o)) {
          const u = {
            instancePath: a + "/ttl",
            schemaPath: "#/properties/ttl/anyOf/1/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 86400 },
            message: "must be <= 86400",
          };
          (e === null ? (e = [u]) : e.push(u), t++);
        }
        if (o < 60 || isNaN(o)) {
          const u = {
            instancePath: a + "/ttl",
            schemaPath: "#/properties/ttl/anyOf/1/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 60 },
            message: "must be >= 60",
          };
          (e === null ? (e = [u]) : e.push(u), t++);
        }
      }
      var r = P === t;
      if (((m = m || r), m))
        ((t = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const u = {
          instancePath: a + "/ttl",
          schemaPath: "#/properties/ttl/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [u]) : e.push(u), t++);
      }
    }
    if (s.proxied !== void 0 && typeof s.proxied != "boolean") {
      const o = {
        instancePath: a + "/proxied",
        schemaPath: "#/properties/proxied/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.priority !== void 0) {
      let o = s.priority;
      if (!(typeof o == "number" && !(o % 1) && !isNaN(o))) {
        const p = {
          instancePath: a + "/priority",
          schemaPath: "#/properties/priority/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
      if (typeof o == "number") {
        if (o > 9007199254740991 || isNaN(o)) {
          const p = {
            instancePath: a + "/priority",
            schemaPath: "#/properties/priority/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
        if (o < -9007199254740991 || isNaN(o)) {
          const p = {
            instancePath: a + "/priority",
            schemaPath: "#/properties/priority/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
      }
    }
    if (s.comment !== void 0 && typeof s.comment != "string") {
      const o = {
        instancePath: a + "/comment",
        schemaPath: "#/properties/comment/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.tags !== void 0) {
      let o = s.tags;
      if (Array.isArray(o)) {
        const p = o.length;
        for (let m = 0; m < p; m++)
          if (typeof o[m] != "string") {
            const l = {
              instancePath: a + "/tags/" + m,
              schemaPath: "#/properties/tags/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
      } else {
        const p = {
          instancePath: a + "/tags",
          schemaPath: "#/properties/tags/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
    if (s.settings !== void 0) {
      let o = s.settings;
      if (o && typeof o == "object" && !Array.isArray(o))
        for (const p in o) {
          const m = t;
          if (typeof p != "string") {
            const l = {
              instancePath: a + "/settings",
              schemaPath: "#/properties/settings/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: p,
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
          var i = m === t;
          if (!i) {
            const l = {
              instancePath: a + "/settings",
              schemaPath: "#/properties/settings/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: p },
              message: "property name must be valid",
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
        }
      else {
        const p = {
          instancePath: a + "/settings",
          schemaPath: "#/properties/settings/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
    if (s.data !== void 0) {
      let o = s.data;
      if (o && typeof o == "object" && !Array.isArray(o))
        for (const p in o) {
          const m = t;
          if (typeof p != "string") {
            const l = {
              instancePath: a + "/data",
              schemaPath: "#/properties/data/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: p,
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
          var b = m === t;
          if (!b) {
            const l = {
              instancePath: a + "/data",
              schemaPath: "#/properties/data/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: p },
              message: "property name must be valid",
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
        }
      else {
        const p = {
          instancePath: a + "/data",
          schemaPath: "#/properties/data/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
  } else {
    const o = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [o]) : e.push(o), t++);
  }
  return ((z.errors = e), t === 0);
}
z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const J = q,
  ae = {
    properties: {
      confirm: { const: !0 },
      zoneId: { type: "string" },
      recordId: { type: "string" },
      type: { type: "string" },
      name: { type: "string" },
      content: { type: "string" },
      ttl: {
        anyOf: [{ const: 1 }, { type: "integer", minimum: 60, maximum: 86400 }],
      },
      proxied: { type: "boolean" },
      priority: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      comment: { type: "string" },
      tags: { type: "array", items: { type: "string" } },
      settings: {
        type: "object",
        propertyNames: { type: "string" },
        additionalProperties: {},
      },
      data: {
        type: "object",
        propertyNames: { type: "string" },
        additionalProperties: {},
      },
    },
  };
function q(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = q.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.zoneId === void 0) {
      const o = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "zoneId" },
        message: "must have required property 'zoneId'",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.recordId === void 0) {
      const o = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "recordId" },
        message: "must have required property 'recordId'",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    for (const o in s)
      if (!H.call(ae.properties, o)) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: o },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (s.confirm !== void 0 && s.confirm !== !0) {
      const o = {
        instancePath: a + "/confirm",
        schemaPath: "#/properties/confirm/const",
        keyword: "const",
        params: { allowedValue: !0 },
        message: "must be equal to constant",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.zoneId !== void 0 && typeof s.zoneId != "string") {
      const o = {
        instancePath: a + "/zoneId",
        schemaPath: "#/properties/zoneId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.recordId !== void 0 && typeof s.recordId != "string") {
      const o = {
        instancePath: a + "/recordId",
        schemaPath: "#/properties/recordId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.type !== void 0 && typeof s.type != "string") {
      const o = {
        instancePath: a + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const o = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.content !== void 0 && typeof s.content != "string") {
      const o = {
        instancePath: a + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.ttl !== void 0) {
      let o = s.ttl;
      const p = t;
      let m = !1;
      const l = t;
      if (o !== 1) {
        const u = {
          instancePath: a + "/ttl",
          schemaPath: "#/properties/ttl/anyOf/0/const",
          keyword: "const",
          params: { allowedValue: 1 },
          message: "must be equal to constant",
        };
        (e === null ? (e = [u]) : e.push(u), t++);
      }
      var r = l === t;
      m = m || r;
      const P = t;
      if (!(typeof o == "number" && !(o % 1) && !isNaN(o))) {
        const u = {
          instancePath: a + "/ttl",
          schemaPath: "#/properties/ttl/anyOf/1/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [u]) : e.push(u), t++);
      }
      if (typeof o == "number") {
        if (o > 86400 || isNaN(o)) {
          const u = {
            instancePath: a + "/ttl",
            schemaPath: "#/properties/ttl/anyOf/1/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 86400 },
            message: "must be <= 86400",
          };
          (e === null ? (e = [u]) : e.push(u), t++);
        }
        if (o < 60 || isNaN(o)) {
          const u = {
            instancePath: a + "/ttl",
            schemaPath: "#/properties/ttl/anyOf/1/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 60 },
            message: "must be >= 60",
          };
          (e === null ? (e = [u]) : e.push(u), t++);
        }
      }
      var r = P === t;
      if (((m = m || r), m))
        ((t = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const u = {
          instancePath: a + "/ttl",
          schemaPath: "#/properties/ttl/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [u]) : e.push(u), t++);
      }
    }
    if (s.proxied !== void 0 && typeof s.proxied != "boolean") {
      const o = {
        instancePath: a + "/proxied",
        schemaPath: "#/properties/proxied/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.priority !== void 0) {
      let o = s.priority;
      if (!(typeof o == "number" && !(o % 1) && !isNaN(o))) {
        const p = {
          instancePath: a + "/priority",
          schemaPath: "#/properties/priority/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
      if (typeof o == "number") {
        if (o > 9007199254740991 || isNaN(o)) {
          const p = {
            instancePath: a + "/priority",
            schemaPath: "#/properties/priority/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
        if (o < -9007199254740991 || isNaN(o)) {
          const p = {
            instancePath: a + "/priority",
            schemaPath: "#/properties/priority/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [p]) : e.push(p), t++);
        }
      }
    }
    if (s.comment !== void 0 && typeof s.comment != "string") {
      const o = {
        instancePath: a + "/comment",
        schemaPath: "#/properties/comment/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.tags !== void 0) {
      let o = s.tags;
      if (Array.isArray(o)) {
        const p = o.length;
        for (let m = 0; m < p; m++)
          if (typeof o[m] != "string") {
            const l = {
              instancePath: a + "/tags/" + m,
              schemaPath: "#/properties/tags/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
      } else {
        const p = {
          instancePath: a + "/tags",
          schemaPath: "#/properties/tags/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
    if (s.settings !== void 0) {
      let o = s.settings;
      if (o && typeof o == "object" && !Array.isArray(o))
        for (const p in o) {
          const m = t;
          if (typeof p != "string") {
            const l = {
              instancePath: a + "/settings",
              schemaPath: "#/properties/settings/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: p,
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
          var i = m === t;
          if (!i) {
            const l = {
              instancePath: a + "/settings",
              schemaPath: "#/properties/settings/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: p },
              message: "property name must be valid",
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
        }
      else {
        const p = {
          instancePath: a + "/settings",
          schemaPath: "#/properties/settings/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
    if (s.data !== void 0) {
      let o = s.data;
      if (o && typeof o == "object" && !Array.isArray(o))
        for (const p in o) {
          const m = t;
          if (typeof p != "string") {
            const l = {
              instancePath: a + "/data",
              schemaPath: "#/properties/data/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: p,
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
          var b = m === t;
          if (!b) {
            const l = {
              instancePath: a + "/data",
              schemaPath: "#/properties/data/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: p },
              message: "property name must be valid",
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
        }
      else {
        const p = {
          instancePath: a + "/data",
          schemaPath: "#/properties/data/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
  } else {
    const o = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [o]) : e.push(o), t++);
  }
  return ((q.errors = e), t === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const K = x;
function x(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = x.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.zoneId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "zoneId" },
        message: "must have required property 'zoneId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.recordId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "recordId" },
        message: "must have required property 'recordId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (!(r === "confirm" || r === "zoneId" || r === "recordId")) {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (s.confirm !== void 0 && s.confirm !== !0) {
      const r = {
        instancePath: a + "/confirm",
        schemaPath: "#/properties/confirm/const",
        keyword: "const",
        params: { allowedValue: !0 },
        message: "must be equal to constant",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.zoneId !== void 0 && typeof s.zoneId != "string") {
      const r = {
        instancePath: a + "/zoneId",
        schemaPath: "#/properties/zoneId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.recordId !== void 0 && typeof s.recordId != "string") {
      const r = {
        instancePath: a + "/recordId",
        schemaPath: "#/properties/recordId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((x.errors = e), t === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Q = D;
function D(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = D.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cloudflareAccountId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cloudflareAccountId" },
        message: "must have required property 'cloudflareAccountId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (r !== "cloudflareAccountId") {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (
      s.cloudflareAccountId !== void 0 &&
      typeof s.cloudflareAccountId != "string"
    ) {
      const r = {
        instancePath: a + "/cloudflareAccountId",
        schemaPath: "#/properties/cloudflareAccountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((D.errors = e), t === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const U = O;
function O(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = O.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cloudflareAccountId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cloudflareAccountId" },
        message: "must have required property 'cloudflareAccountId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.scriptName === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "scriptName" },
        message: "must have required property 'scriptName'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (!(r === "cloudflareAccountId" || r === "scriptName")) {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (
      s.cloudflareAccountId !== void 0 &&
      typeof s.cloudflareAccountId != "string"
    ) {
      const r = {
        instancePath: a + "/cloudflareAccountId",
        schemaPath: "#/properties/cloudflareAccountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.scriptName !== void 0 && typeof s.scriptName != "string") {
      const r = {
        instancePath: a + "/scriptName",
        schemaPath: "#/properties/scriptName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((O.errors = e), t === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = E;
function E(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = E.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cloudflareAccountId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cloudflareAccountId" },
        message: "must have required property 'cloudflareAccountId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "cloudflareAccountId" ||
          r === "perPage" ||
          r === "page"
        )
      ) {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (
      s.cloudflareAccountId !== void 0 &&
      typeof s.cloudflareAccountId != "string"
    ) {
      const r = {
        instancePath: a + "/cloudflareAccountId",
        schemaPath: "#/properties/cloudflareAccountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const i = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
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
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((E.errors = e), t === 0);
}
E.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = T;
function T(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = T.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cloudflareAccountId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cloudflareAccountId" },
        message: "must have required property 'cloudflareAccountId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.projectName === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "projectName" },
        message: "must have required property 'projectName'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (!(r === "cloudflareAccountId" || r === "projectName")) {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (
      s.cloudflareAccountId !== void 0 &&
      typeof s.cloudflareAccountId != "string"
    ) {
      const r = {
        instancePath: a + "/cloudflareAccountId",
        schemaPath: "#/properties/cloudflareAccountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.projectName !== void 0 && typeof s.projectName != "string") {
      const r = {
        instancePath: a + "/projectName",
        schemaPath: "#/properties/projectName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((T.errors = e), t === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Z = V;
function V(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = V.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cloudflareAccountId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cloudflareAccountId" },
        message: "must have required property 'cloudflareAccountId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "cloudflareAccountId" ||
          r === "perPage" ||
          r === "page"
        )
      ) {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (
      s.cloudflareAccountId !== void 0 &&
      typeof s.cloudflareAccountId != "string"
    ) {
      const r = {
        instancePath: a + "/cloudflareAccountId",
        schemaPath: "#/properties/cloudflareAccountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const i = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.page !== void 0) {
      let r = s.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
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
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((V.errors = e), t === 0);
}
V.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const $ = S;
function S(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = S.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.cloudflareAccountId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "cloudflareAccountId" },
        message: "must have required property 'cloudflareAccountId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in s)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "cloudflareAccountId" ||
          r === "perPage" ||
          r === "nameContains"
        )
      ) {
        const i = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const i = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (
      s.cloudflareAccountId !== void 0 &&
      typeof s.cloudflareAccountId != "string"
    ) {
      const r = {
        instancePath: a + "/cloudflareAccountId",
        schemaPath: "#/properties/cloudflareAccountId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (s.perPage !== void 0) {
      let r = s.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const i = {
          instancePath: a + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [i]) : e.push(i), t++);
      }
      if (typeof r == "number") {
        if (r > 1e3 || isNaN(r)) {
          const i = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
        if (r < 1 || isNaN(r)) {
          const i = {
            instancePath: a + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [i]) : e.push(i), t++);
        }
      }
    }
    if (s.nameContains !== void 0 && typeof s.nameContains != "string") {
      const r = {
        instancePath: a + "/nameContains",
        schemaPath: "#/properties/nameContains/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((S.errors = e), t === 0);
}
S.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ee = C,
  oe = require("ajv-formats/dist/formats").fullFormats.uri;
function C(
  s,
  {
    instancePath: a = "",
    parentData: c,
    parentDataProperty: d,
    rootData: y = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    t = 0;
  const n = C.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.zoneId === void 0) {
      const o = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "zoneId" },
        message: "must have required property 'zoneId'",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    for (const o in s)
      if (
        !(
          o === "confirm" ||
          o === "zoneId" ||
          o === "purgeEverything" ||
          o === "files" ||
          o === "tags" ||
          o === "hosts" ||
          o === "prefixes"
        )
      ) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: o },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    if (s.confirm !== void 0 && s.confirm !== !0) {
      const o = {
        instancePath: a + "/confirm",
        schemaPath: "#/properties/confirm/const",
        keyword: "const",
        params: { allowedValue: !0 },
        message: "must be equal to constant",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.zoneId !== void 0 && typeof s.zoneId != "string") {
      const o = {
        instancePath: a + "/zoneId",
        schemaPath: "#/properties/zoneId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.purgeEverything !== void 0 && typeof s.purgeEverything != "boolean") {
      const o = {
        instancePath: a + "/purgeEverything",
        schemaPath: "#/properties/purgeEverything/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [o]) : e.push(o), t++);
    }
    if (s.files !== void 0) {
      let o = s.files;
      if (Array.isArray(o)) {
        const p = o.length;
        for (let m = 0; m < p; m++) {
          let l = o[m];
          const P = t;
          let u = !1;
          const re = t;
          if (typeof l != "string") {
            const f = {
              instancePath: a + "/files/" + m,
              schemaPath: "#/properties/files/items/anyOf/0/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
          var i = re === t;
          u = u || i;
          const se = t;
          if (l && typeof l == "object" && !Array.isArray(l)) {
            if (l.url === void 0) {
              const f = {
                instancePath: a + "/files/" + m,
                schemaPath: "#/properties/files/items/anyOf/1/required",
                keyword: "required",
                params: { missingProperty: "url" },
                message: "must have required property 'url'",
              };
              (e === null ? (e = [f]) : e.push(f), t++);
            }
            if (l.url !== void 0) {
              let f = l.url;
              if (typeof f == "string") {
                if (!oe(f)) {
                  const g = {
                    instancePath: a + "/files/" + m + "/url",
                    schemaPath:
                      "#/properties/files/items/anyOf/1/properties/url/format",
                    keyword: "format",
                    params: { format: "uri" },
                    message: 'must match format "uri"',
                  };
                  (e === null ? (e = [g]) : e.push(g), t++);
                }
              } else {
                const g = {
                  instancePath: a + "/files/" + m + "/url",
                  schemaPath:
                    "#/properties/files/items/anyOf/1/properties/url/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [g]) : e.push(g), t++);
              }
            }
            if (l.headers !== void 0) {
              let f = l.headers;
              if (f && typeof f == "object" && !Array.isArray(f)) {
                for (const g in f) {
                  const w = t;
                  if (typeof g != "string") {
                    const k = {
                      instancePath: a + "/files/" + m + "/headers",
                      schemaPath:
                        "#/properties/files/items/anyOf/1/properties/headers/propertyNames/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                      propertyName: g,
                    };
                    (e === null ? (e = [k]) : e.push(k), t++);
                  }
                  var r = w === t;
                  if (!r) {
                    const k = {
                      instancePath: a + "/files/" + m + "/headers",
                      schemaPath:
                        "#/properties/files/items/anyOf/1/properties/headers/propertyNames",
                      keyword: "propertyNames",
                      params: { propertyName: g },
                      message: "property name must be valid",
                    };
                    (e === null ? (e = [k]) : e.push(k), t++);
                  }
                }
                for (const g in f)
                  if (typeof f[g] != "string") {
                    const w = {
                      instancePath:
                        a +
                        "/files/" +
                        m +
                        "/headers/" +
                        g.replace(/~/g, "~0").replace(/\//g, "~1"),
                      schemaPath:
                        "#/properties/files/items/anyOf/1/properties/headers/additionalProperties/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                    };
                    (e === null ? (e = [w]) : e.push(w), t++);
                  }
              } else {
                const g = {
                  instancePath: a + "/files/" + m + "/headers",
                  schemaPath:
                    "#/properties/files/items/anyOf/1/properties/headers/type",
                  keyword: "type",
                  params: { type: "object" },
                  message: "must be object",
                };
                (e === null ? (e = [g]) : e.push(g), t++);
              }
            }
          } else {
            const f = {
              instancePath: a + "/files/" + m,
              schemaPath: "#/properties/files/items/anyOf/1/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
          var i = se === t;
          if (((u = u || i), i)) {
            var b = {};
            ((b.url = !0), (b.headers = !0));
          }
          if (u) ((t = P), e !== null && (P ? (e.length = P) : (e = null)));
          else {
            const f = {
              instancePath: a + "/files/" + m,
              schemaPath: "#/properties/files/items/anyOf",
              keyword: "anyOf",
              params: {},
              message: "must match a schema in anyOf",
            };
            (e === null ? (e = [f]) : e.push(f), t++);
          }
        }
      } else {
        const p = {
          instancePath: a + "/files",
          schemaPath: "#/properties/files/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
    if (s.tags !== void 0) {
      let o = s.tags;
      if (Array.isArray(o)) {
        const p = o.length;
        for (let m = 0; m < p; m++)
          if (typeof o[m] != "string") {
            const l = {
              instancePath: a + "/tags/" + m,
              schemaPath: "#/properties/tags/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
      } else {
        const p = {
          instancePath: a + "/tags",
          schemaPath: "#/properties/tags/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
    if (s.hosts !== void 0) {
      let o = s.hosts;
      if (Array.isArray(o)) {
        const p = o.length;
        for (let m = 0; m < p; m++)
          if (typeof o[m] != "string") {
            const l = {
              instancePath: a + "/hosts/" + m,
              schemaPath: "#/properties/hosts/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
      } else {
        const p = {
          instancePath: a + "/hosts",
          schemaPath: "#/properties/hosts/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
    if (s.prefixes !== void 0) {
      let o = s.prefixes;
      if (Array.isArray(o)) {
        const p = o.length;
        for (let m = 0; m < p; m++)
          if (typeof o[m] != "string") {
            const l = {
              instancePath: a + "/prefixes/" + m,
              schemaPath: "#/properties/prefixes/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [l]) : e.push(l), t++);
          }
      } else {
        const p = {
          instancePath: a + "/prefixes",
          schemaPath: "#/properties/prefixes/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), t++);
      }
    }
  } else {
    const o = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [o]) : e.push(o), t++);
  }
  return ((C.errors = e), t === 0);
}
C.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const pe = {
  cloudflare_list_accounts: L,
  cloudflare_list_zones: R,
  cloudflare_get_zone: F,
  cloudflare_get_zone_settings: M,
  cloudflare_get_zone_setting: Y,
  cloudflare_list_dns_records: B,
  cloudflare_create_dns_record: G,
  cloudflare_update_dns_record: J,
  cloudflare_delete_dns_record: K,
  cloudflare_list_workers: Q,
  cloudflare_get_worker: U,
  cloudflare_list_pages_projects: W,
  cloudflare_get_pages_project: X,
  cloudflare_list_kv_namespaces: Z,
  cloudflare_list_r2_buckets: $,
  cloudflare_purge_cache: ee,
};
exports.NATIVE_TOOL_VALIDATORS = pe;
exports.validate_cloudflare_create_dns_record = G;
exports.validate_cloudflare_delete_dns_record = K;
exports.validate_cloudflare_get_pages_project = X;
exports.validate_cloudflare_get_worker = U;
exports.validate_cloudflare_get_zone = F;
exports.validate_cloudflare_get_zone_setting = Y;
exports.validate_cloudflare_get_zone_settings = M;
exports.validate_cloudflare_list_accounts = L;
exports.validate_cloudflare_list_dns_records = B;
exports.validate_cloudflare_list_kv_namespaces = Z;
exports.validate_cloudflare_list_pages_projects = W;
exports.validate_cloudflare_list_r2_buckets = $;
exports.validate_cloudflare_list_workers = Q;
exports.validate_cloudflare_list_zones = R;
exports.validate_cloudflare_purge_cache = ee;
exports.validate_cloudflare_update_dns_record = J;
