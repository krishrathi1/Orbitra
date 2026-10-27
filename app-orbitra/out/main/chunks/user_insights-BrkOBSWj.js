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
      (r._sentryDebugIds[a] = "d106f35f-7453-42d3-ac38-475753e86d50"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-d106f35f-7453-42d3-ac38-475753e86d50"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const L = P,
  te = {
    properties: { sentiment: { enum: ["positive", "negative", "neutral"] } },
  },
  c = require("ajv/dist/runtime/ucs2length").default,
  h = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
  g = new RegExp(
    "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
    "u",
  ),
  b = new RegExp(
    "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$",
    "u",
  );
function P(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = P.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.text === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "text" },
        message: "must have required property 'text'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (
        !(
          t === "text" ||
          t === "kind" ||
          t === "sentiment" ||
          t === "subjectUserEmail" ||
          t === "subjectUserId" ||
          t === "tags" ||
          t === "occurredAt" ||
          t === "metadata"
        )
      ) {
        const n = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    if (r.text !== void 0) {
      let t = r.text;
      if (typeof t == "string") {
        if (c(t) < 1) {
          const n = {
            instancePath: a + "/text",
            schemaPath: "#/properties/text/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
      } else {
        const n = {
          instancePath: a + "/text",
          schemaPath: "#/properties/text/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.kind !== void 0 && typeof r.kind != "string") {
      const t = {
        instancePath: a + "/kind",
        schemaPath: "#/properties/kind/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.sentiment !== void 0) {
      let t = r.sentiment;
      if (typeof t != "string") {
        const n = {
          instancePath: a + "/sentiment",
          schemaPath: "#/properties/sentiment/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      if (!(t === "positive" || t === "negative" || t === "neutral")) {
        const n = {
          instancePath: a + "/sentiment",
          schemaPath: "#/properties/sentiment/enum",
          keyword: "enum",
          params: { allowedValues: te.properties.sentiment.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (
      r.subjectUserEmail !== void 0 &&
      typeof r.subjectUserEmail != "string"
    ) {
      const t = {
        instancePath: a + "/subjectUserEmail",
        schemaPath: "#/properties/subjectUserEmail/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.subjectUserId !== void 0) {
      let t = r.subjectUserId;
      if (typeof t == "string") {
        if (!g.test(t)) {
          const n = {
            instancePath: a + "/subjectUserId",
            schemaPath: "#/properties/subjectUserId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        if (!h.test(t)) {
          const n = {
            instancePath: a + "/subjectUserId",
            schemaPath: "#/properties/subjectUserId/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
      } else {
        const n = {
          instancePath: a + "/subjectUserId",
          schemaPath: "#/properties/subjectUserId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.tags !== void 0) {
      let t = r.tags;
      if (Array.isArray(t)) {
        const n = t.length;
        for (let o = 0; o < n; o++)
          if (typeof t[o] != "string") {
            const f = {
              instancePath: a + "/tags/" + o,
              schemaPath: "#/properties/tags/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), i++);
          }
      } else {
        const n = {
          instancePath: a + "/tags",
          schemaPath: "#/properties/tags/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.occurredAt !== void 0) {
      let t = r.occurredAt;
      if (typeof t == "string") {
        if (!b.test(t)) {
          const n = {
            instancePath: a + "/occurredAt",
            schemaPath: "#/properties/occurredAt/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$",
            },
            message:
              'must match pattern "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$"',
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
      } else {
        const n = {
          instancePath: a + "/occurredAt",
          schemaPath: "#/properties/occurredAt/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.metadata !== void 0) {
      let t = r.metadata;
      if (t && typeof t == "object" && !Array.isArray(t))
        for (const n in t) {
          const o = i;
          if (typeof n != "string") {
            const f = {
              instancePath: a + "/metadata",
              schemaPath: "#/properties/metadata/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: n,
            };
            (e === null ? (e = [f]) : e.push(f), i++);
          }
          var s = o === i;
          if (!s) {
            const f = {
              instancePath: a + "/metadata",
              schemaPath: "#/properties/metadata/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: n },
              message: "property name must be valid",
            };
            (e === null ? (e = [f]) : e.push(f), i++);
          }
        }
      else {
        const n = {
          instancePath: a + "/metadata",
          schemaPath: "#/properties/metadata/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
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
  return ((P.errors = e), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = w,
  re = {
    properties: { sentiment: { enum: ["positive", "negative", "neutral"] } },
  };
function w(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = w.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "query" ||
          s === "kind" ||
          s === "sentiment" ||
          s === "tag" ||
          s === "subjectUserId" ||
          s === "since" ||
          s === "until" ||
          s === "limit"
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
    if (r.query !== void 0 && typeof r.query != "string") {
      const s = {
        instancePath: a + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.kind !== void 0 && typeof r.kind != "string") {
      const s = {
        instancePath: a + "/kind",
        schemaPath: "#/properties/kind/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.sentiment !== void 0) {
      let s = r.sentiment;
      if (typeof s != "string") {
        const t = {
          instancePath: a + "/sentiment",
          schemaPath: "#/properties/sentiment/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "positive" || s === "negative" || s === "neutral")) {
        const t = {
          instancePath: a + "/sentiment",
          schemaPath: "#/properties/sentiment/enum",
          keyword: "enum",
          params: { allowedValues: re.properties.sentiment.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.tag !== void 0 && typeof r.tag != "string") {
      const s = {
        instancePath: a + "/tag",
        schemaPath: "#/properties/tag/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.subjectUserId !== void 0) {
      let s = r.subjectUserId;
      if (typeof s == "string") {
        if (!g.test(s)) {
          const t = {
            instancePath: a + "/subjectUserId",
            schemaPath: "#/properties/subjectUserId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (!h.test(s)) {
          const t = {
            instancePath: a + "/subjectUserId",
            schemaPath: "#/properties/subjectUserId/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/subjectUserId",
          schemaPath: "#/properties/subjectUserId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.since !== void 0) {
      let s = r.since;
      if (typeof s == "string") {
        if (!b.test(s)) {
          const t = {
            instancePath: a + "/since",
            schemaPath: "#/properties/since/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$",
            },
            message:
              'must match pattern "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/since",
          schemaPath: "#/properties/since/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.until !== void 0) {
      let s = r.until;
      if (typeof s == "string") {
        if (!b.test(s)) {
          const t = {
            instancePath: a + "/until",
            schemaPath: "#/properties/until/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$",
            },
            message:
              'must match pattern "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/until",
          schemaPath: "#/properties/until/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
        if (s > 200 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 200 },
            message: "must be <= 200",
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
const Z = k;
function k(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = k.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!(s === "limit" || s === "kind" || s === "source")) {
        const t = {
          instancePath: a,
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
    if (r.kind !== void 0 && typeof r.kind != "string") {
      const s = {
        instancePath: a + "/kind",
        schemaPath: "#/properties/kind/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.source !== void 0 && typeof r.source != "string") {
      const s = {
        instancePath: a + "/source",
        schemaPath: "#/properties/source/type",
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
const Q = v;
function v(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = v.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.id === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "id" },
        message: "must have required property 'id'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "id" || s === "addTags" || s === "removeTags")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.id !== void 0) {
      let s = r.id;
      if (typeof s == "string") {
        if (!g.test(s)) {
          const t = {
            instancePath: a + "/id",
            schemaPath: "#/properties/id/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (!h.test(s)) {
          const t = {
            instancePath: a + "/id",
            schemaPath: "#/properties/id/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/id",
          schemaPath: "#/properties/id/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.addTags !== void 0) {
      let s = r.addTags;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let n = 0; n < t; n++)
          if (typeof s[n] != "string") {
            const o = {
              instancePath: a + "/addTags/" + n,
              schemaPath: "#/properties/addTags/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: a + "/addTags",
          schemaPath: "#/properties/addTags/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.removeTags !== void 0) {
      let s = r.removeTags;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let n = 0; n < t; n++)
          if (typeof s[n] != "string") {
            const o = {
              instancePath: a + "/removeTags/" + n,
              schemaPath: "#/properties/removeTags/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: a + "/removeTags",
          schemaPath: "#/properties/removeTags/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
const V = A;
function A(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = A.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  )
    for (const s in r) {
      const t = {
        instancePath: a,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: s },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), i++);
  }
  return ((A.errors = e), i === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = _,
  ie = {
    properties: { sentiment: { enum: ["positive", "negative", "neutral"] } },
  };
function _(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = _.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.query === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "query" ||
          s === "limit" ||
          s === "minImportance" ||
          s === "kind" ||
          s === "sentiment" ||
          s === "since" ||
          s === "until"
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
    if (r.query !== void 0) {
      let s = r.query;
      if (typeof s == "string") {
        if (c(s) < 1) {
          const t = {
            instancePath: a + "/query",
            schemaPath: "#/properties/query/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/query",
          schemaPath: "#/properties/query/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
        if (s > 50 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
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
    if (r.minImportance !== void 0) {
      let s = r.minImportance;
      if (typeof s == "number") {
        if (s > 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/minImportance",
            schemaPath: "#/properties/minImportance/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1 },
            message: "must be <= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: a + "/minImportance",
            schemaPath: "#/properties/minImportance/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/minImportance",
          schemaPath: "#/properties/minImportance/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.kind !== void 0 && typeof r.kind != "string") {
      const s = {
        instancePath: a + "/kind",
        schemaPath: "#/properties/kind/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.sentiment !== void 0) {
      let s = r.sentiment;
      if (typeof s != "string") {
        const t = {
          instancePath: a + "/sentiment",
          schemaPath: "#/properties/sentiment/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "positive" || s === "negative" || s === "neutral")) {
        const t = {
          instancePath: a + "/sentiment",
          schemaPath: "#/properties/sentiment/enum",
          keyword: "enum",
          params: { allowedValues: ie.properties.sentiment.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.since !== void 0) {
      let s = r.since;
      if (typeof s == "string") {
        if (!b.test(s)) {
          const t = {
            instancePath: a + "/since",
            schemaPath: "#/properties/since/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$",
            },
            message:
              'must match pattern "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/since",
          schemaPath: "#/properties/since/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.until !== void 0) {
      let s = r.until;
      if (typeof s == "string") {
        if (!b.test(s)) {
          const t = {
            instancePath: a + "/until",
            schemaPath: "#/properties/until/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$",
            },
            message:
              'must match pattern "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/until",
          schemaPath: "#/properties/until/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
const M = I;
function I(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = I.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (s !== "limit") {
        const t = {
          instancePath: a,
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
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 1e3 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1e3 },
            message: "must be <= 1000",
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
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const H = N,
  $ = {
    properties: {
      channel: { enum: ["email", "slack", "discord", "note"] },
      tone: {
        enum: [
          "apology",
          "acknowledgement",
          "fix_shipped",
          "research_ping",
          "sales",
          "custom",
        ],
      },
    },
  };
function N(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = N.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.insightId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "insightId" },
        message: "must have required property 'insightId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.channel === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "channel" },
        message: "must have required property 'channel'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "insightId" ||
          s === "channel" ||
          s === "tone" ||
          s === "customMessage"
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
    if (r.insightId !== void 0) {
      let s = r.insightId;
      if (typeof s == "string") {
        if (!g.test(s)) {
          const t = {
            instancePath: a + "/insightId",
            schemaPath: "#/properties/insightId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (!h.test(s)) {
          const t = {
            instancePath: a + "/insightId",
            schemaPath: "#/properties/insightId/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/insightId",
          schemaPath: "#/properties/insightId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.channel !== void 0) {
      let s = r.channel;
      if (typeof s != "string") {
        const t = {
          instancePath: a + "/channel",
          schemaPath: "#/properties/channel/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(s === "email" || s === "slack" || s === "discord" || s === "note")
      ) {
        const t = {
          instancePath: a + "/channel",
          schemaPath: "#/properties/channel/enum",
          keyword: "enum",
          params: { allowedValues: $.properties.channel.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.tone !== void 0) {
      let s = r.tone;
      if (typeof s != "string") {
        const t = {
          instancePath: a + "/tone",
          schemaPath: "#/properties/tone/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "apology" ||
          s === "acknowledgement" ||
          s === "fix_shipped" ||
          s === "research_ping" ||
          s === "sales" ||
          s === "custom"
        )
      ) {
        const t = {
          instancePath: a + "/tone",
          schemaPath: "#/properties/tone/enum",
          keyword: "enum",
          params: { allowedValues: $.properties.tone.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.customMessage !== void 0 && typeof r.customMessage != "string") {
      const s = {
        instancePath: a + "/customMessage",
        schemaPath: "#/properties/customMessage/type",
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
const R = j;
function j(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = j.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!(s === "windowHours" || s === "apply" || s === "limit")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.windowHours !== void 0) {
      let s = r.windowHours;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/windowHours",
          schemaPath: "#/properties/windowHours/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 720 || isNaN(s)) {
          const t = {
            instancePath: a + "/windowHours",
            schemaPath: "#/properties/windowHours/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 720 },
            message: "must be <= 720",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/windowHours",
            schemaPath: "#/properties/windowHours/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.apply !== void 0 && typeof r.apply != "boolean") {
      const s = {
        instancePath: a + "/apply",
        schemaPath: "#/properties/apply/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
const Y = F;
function F(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = F.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "event" ||
          s === "distinctId" ||
          s === "hogql" ||
          s === "since" ||
          s === "until" ||
          s === "limit"
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
    if (r.event !== void 0 && typeof r.event != "string") {
      const s = {
        instancePath: a + "/event",
        schemaPath: "#/properties/event/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.distinctId !== void 0 && typeof r.distinctId != "string") {
      const s = {
        instancePath: a + "/distinctId",
        schemaPath: "#/properties/distinctId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.hogql !== void 0 && typeof r.hogql != "string") {
      const s = {
        instancePath: a + "/hogql",
        schemaPath: "#/properties/hogql/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.since !== void 0) {
      let s = r.since;
      if (typeof s == "string") {
        if (!b.test(s)) {
          const t = {
            instancePath: a + "/since",
            schemaPath: "#/properties/since/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$",
            },
            message:
              'must match pattern "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/since",
          schemaPath: "#/properties/since/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.until !== void 0) {
      let s = r.until;
      if (typeof s == "string") {
        if (!b.test(s)) {
          const t = {
            instancePath: a + "/until",
            schemaPath: "#/properties/until/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$",
            },
            message:
              'must match pattern "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/until",
          schemaPath: "#/properties/until/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
        if (s > 500 || isNaN(s)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
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
  return ((F.errors = e), i === 0);
}
F.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = q,
  ae = {
    properties: {
      status: { enum: ["draft", "validated", "production", "deprecated"] },
    },
  };
function q(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = q.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.title === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.description === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "description" },
        message: "must have required property 'description'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "title" ||
          s === "description" ||
          s === "category" ||
          s === "status" ||
          s === "subjectUserEmail" ||
          s === "exampleQueries" ||
          s === "sourceInsightIds" ||
          s === "tags"
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
    if (r.title !== void 0) {
      let s = r.title;
      if (typeof s == "string") {
        if (c(s) < 3) {
          const t = {
            instancePath: a + "/title",
            schemaPath: "#/properties/title/minLength",
            keyword: "minLength",
            params: { limit: 3 },
            message: "must NOT have fewer than 3 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/title",
          schemaPath: "#/properties/title/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.description !== void 0) {
      let s = r.description;
      if (typeof s == "string") {
        if (c(s) < 10) {
          const t = {
            instancePath: a + "/description",
            schemaPath: "#/properties/description/minLength",
            keyword: "minLength",
            params: { limit: 10 },
            message: "must NOT have fewer than 10 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/description",
          schemaPath: "#/properties/description/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.category !== void 0 && typeof r.category != "string") {
      const s = {
        instancePath: a + "/category",
        schemaPath: "#/properties/category/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.status !== void 0) {
      let s = r.status;
      if (typeof s != "string") {
        const t = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "draft" ||
          s === "validated" ||
          s === "production" ||
          s === "deprecated"
        )
      ) {
        const t = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: ae.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (
      r.subjectUserEmail !== void 0 &&
      typeof r.subjectUserEmail != "string"
    ) {
      const s = {
        instancePath: a + "/subjectUserEmail",
        schemaPath: "#/properties/subjectUserEmail/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.exampleQueries !== void 0) {
      let s = r.exampleQueries;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let n = 0; n < t; n++)
          if (typeof s[n] != "string") {
            const o = {
              instancePath: a + "/exampleQueries/" + n,
              schemaPath: "#/properties/exampleQueries/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: a + "/exampleQueries",
          schemaPath: "#/properties/exampleQueries/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.sourceInsightIds !== void 0) {
      let s = r.sourceInsightIds;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let n = 0; n < t; n++) {
          let o = s[n];
          if (typeof o == "string") {
            if (!g.test(o)) {
              const f = {
                instancePath: a + "/sourceInsightIds/" + n,
                schemaPath: "#/properties/sourceInsightIds/items/pattern",
                keyword: "pattern",
                params: {
                  pattern:
                    "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
                },
                message:
                  'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
              };
              (e === null ? (e = [f]) : e.push(f), i++);
            }
            if (!h.test(o)) {
              const f = {
                instancePath: a + "/sourceInsightIds/" + n,
                schemaPath: "#/properties/sourceInsightIds/items/format",
                keyword: "format",
                params: { format: "uuid" },
                message: 'must match format "uuid"',
              };
              (e === null ? (e = [f]) : e.push(f), i++);
            }
          } else {
            const f = {
              instancePath: a + "/sourceInsightIds/" + n,
              schemaPath: "#/properties/sourceInsightIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), i++);
          }
        }
      } else {
        const t = {
          instancePath: a + "/sourceInsightIds",
          schemaPath: "#/properties/sourceInsightIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.tags !== void 0) {
      let s = r.tags;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let n = 0; n < t; n++)
          if (typeof s[n] != "string") {
            const o = {
              instancePath: a + "/tags/" + n,
              schemaPath: "#/properties/tags/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: a + "/tags",
          schemaPath: "#/properties/tags/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
const C = T,
  ne = {
    properties: {
      status: { enum: ["draft", "validated", "production", "deprecated"] },
    },
  };
function T(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = T.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "query" ||
          s === "category" ||
          s === "status" ||
          s === "tag" ||
          s === "limit"
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
    if (r.query !== void 0 && typeof r.query != "string") {
      const s = {
        instancePath: a + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.category !== void 0 && typeof r.category != "string") {
      const s = {
        instancePath: a + "/category",
        schemaPath: "#/properties/category/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.status !== void 0) {
      let s = r.status;
      if (typeof s != "string") {
        const t = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "draft" ||
          s === "validated" ||
          s === "production" ||
          s === "deprecated"
        )
      ) {
        const t = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: ne.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.tag !== void 0 && typeof r.tag != "string") {
      const s = {
        instancePath: a + "/tag",
        schemaPath: "#/properties/tag/type",
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
  return ((T.errors = e), i === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = D,
  B = {
    properties: {
      id: {
        type: "string",
        format: "uuid",
        pattern:
          "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
      },
      title: { type: "string" },
      description: { type: "string" },
      category: { type: "string" },
      status: {
        enum: ["draft", "validated", "production", "deprecated"],
        type: "string",
      },
      addExampleQueries: { type: "array", items: { type: "string" } },
      addSourceInsightIds: {
        type: "array",
        items: {
          type: "string",
          format: "uuid",
          pattern:
            "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
        },
      },
      addTags: { type: "array", items: { type: "string" } },
      removeTags: { type: "array", items: { type: "string" } },
    },
  },
  J = Object.prototype.hasOwnProperty;
function D(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = D.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.id === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "id" },
        message: "must have required property 'id'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!J.call(B.properties, s)) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.id !== void 0) {
      let s = r.id;
      if (typeof s == "string") {
        if (!g.test(s)) {
          const t = {
            instancePath: a + "/id",
            schemaPath: "#/properties/id/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (!h.test(s)) {
          const t = {
            instancePath: a + "/id",
            schemaPath: "#/properties/id/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/id",
          schemaPath: "#/properties/id/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.title !== void 0 && typeof r.title != "string") {
      const s = {
        instancePath: a + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.description !== void 0 && typeof r.description != "string") {
      const s = {
        instancePath: a + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.category !== void 0 && typeof r.category != "string") {
      const s = {
        instancePath: a + "/category",
        schemaPath: "#/properties/category/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.status !== void 0) {
      let s = r.status;
      if (typeof s != "string") {
        const t = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "draft" ||
          s === "validated" ||
          s === "production" ||
          s === "deprecated"
        )
      ) {
        const t = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: B.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.addExampleQueries !== void 0) {
      let s = r.addExampleQueries;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let n = 0; n < t; n++)
          if (typeof s[n] != "string") {
            const o = {
              instancePath: a + "/addExampleQueries/" + n,
              schemaPath: "#/properties/addExampleQueries/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: a + "/addExampleQueries",
          schemaPath: "#/properties/addExampleQueries/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.addSourceInsightIds !== void 0) {
      let s = r.addSourceInsightIds;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let n = 0; n < t; n++) {
          let o = s[n];
          if (typeof o == "string") {
            if (!g.test(o)) {
              const f = {
                instancePath: a + "/addSourceInsightIds/" + n,
                schemaPath: "#/properties/addSourceInsightIds/items/pattern",
                keyword: "pattern",
                params: {
                  pattern:
                    "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
                },
                message:
                  'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
              };
              (e === null ? (e = [f]) : e.push(f), i++);
            }
            if (!h.test(o)) {
              const f = {
                instancePath: a + "/addSourceInsightIds/" + n,
                schemaPath: "#/properties/addSourceInsightIds/items/format",
                keyword: "format",
                params: { format: "uuid" },
                message: 'must match format "uuid"',
              };
              (e === null ? (e = [f]) : e.push(f), i++);
            }
          } else {
            const f = {
              instancePath: a + "/addSourceInsightIds/" + n,
              schemaPath: "#/properties/addSourceInsightIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [f]) : e.push(f), i++);
          }
        }
      } else {
        const t = {
          instancePath: a + "/addSourceInsightIds",
          schemaPath: "#/properties/addSourceInsightIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.addTags !== void 0) {
      let s = r.addTags;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let n = 0; n < t; n++)
          if (typeof s[n] != "string") {
            const o = {
              instancePath: a + "/addTags/" + n,
              schemaPath: "#/properties/addTags/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: a + "/addTags",
          schemaPath: "#/properties/addTags/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.removeTags !== void 0) {
      let s = r.removeTags;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let n = 0; n < t; n++)
          if (typeof s[n] != "string") {
            const o = {
              instancePath: a + "/removeTags/" + n,
              schemaPath: "#/properties/removeTags/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: a + "/removeTags",
          schemaPath: "#/properties/removeTags/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
  return ((D.errors = e), i === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const K = x;
function x(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = x.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.distinctId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "distinctId" },
        message: "must have required property 'distinctId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "distinctId") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.distinctId !== void 0) {
      let s = r.distinctId;
      if (typeof s == "string") {
        if (c(s) < 1) {
          const t = {
            instancePath: a + "/distinctId",
            schemaPath: "#/properties/distinctId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/distinctId",
          schemaPath: "#/properties/distinctId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
  return ((x.errors = e), i === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = U,
  pe = {
    properties: {
      name: { type: "string", minLength: 1 },
      quote: { type: "string", minLength: 5 },
      role: { type: "string" },
      company: { type: "string" },
      companyUrl: { type: "string", format: "uri" },
      avatarUrl: { type: "string", format: "uri" },
      location: { type: "string" },
      rating: { type: "integer", minimum: 1, maximum: 5 },
      source: { type: "string" },
      sourceUrl: { type: "string", format: "uri" },
      consentAt: { type: "string" },
      consentMethod: { type: "string" },
      isPublished: { type: "boolean" },
      featured: { type: "boolean" },
      displayOrder: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      internalNotes: { type: "string" },
      subjectUserEmail: { type: "string" },
    },
  },
  E = require("ajv-formats/dist/formats").fullFormats.uri;
function U(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = U.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
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
    if (r.quote === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "quote" },
        message: "must have required property 'quote'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!J.call(pe.properties, s)) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.name !== void 0) {
      let s = r.name;
      if (typeof s == "string") {
        if (c(s) < 1) {
          const t = {
            instancePath: a + "/name",
            schemaPath: "#/properties/name/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/name",
          schemaPath: "#/properties/name/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.quote !== void 0) {
      let s = r.quote;
      if (typeof s == "string") {
        if (c(s) < 5) {
          const t = {
            instancePath: a + "/quote",
            schemaPath: "#/properties/quote/minLength",
            keyword: "minLength",
            params: { limit: 5 },
            message: "must NOT have fewer than 5 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/quote",
          schemaPath: "#/properties/quote/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.role !== void 0 && typeof r.role != "string") {
      const s = {
        instancePath: a + "/role",
        schemaPath: "#/properties/role/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.company !== void 0 && typeof r.company != "string") {
      const s = {
        instancePath: a + "/company",
        schemaPath: "#/properties/company/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.companyUrl !== void 0) {
      let s = r.companyUrl;
      if (typeof s == "string") {
        if (!E(s)) {
          const t = {
            instancePath: a + "/companyUrl",
            schemaPath: "#/properties/companyUrl/format",
            keyword: "format",
            params: { format: "uri" },
            message: 'must match format "uri"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/companyUrl",
          schemaPath: "#/properties/companyUrl/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.avatarUrl !== void 0) {
      let s = r.avatarUrl;
      if (typeof s == "string") {
        if (!E(s)) {
          const t = {
            instancePath: a + "/avatarUrl",
            schemaPath: "#/properties/avatarUrl/format",
            keyword: "format",
            params: { format: "uri" },
            message: 'must match format "uri"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/avatarUrl",
          schemaPath: "#/properties/avatarUrl/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.location !== void 0 && typeof r.location != "string") {
      const s = {
        instancePath: a + "/location",
        schemaPath: "#/properties/location/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.rating !== void 0) {
      let s = r.rating;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/rating",
          schemaPath: "#/properties/rating/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 5 || isNaN(s)) {
          const t = {
            instancePath: a + "/rating",
            schemaPath: "#/properties/rating/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 5 },
            message: "must be <= 5",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: a + "/rating",
            schemaPath: "#/properties/rating/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.source !== void 0 && typeof r.source != "string") {
      const s = {
        instancePath: a + "/source",
        schemaPath: "#/properties/source/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.sourceUrl !== void 0) {
      let s = r.sourceUrl;
      if (typeof s == "string") {
        if (!E(s)) {
          const t = {
            instancePath: a + "/sourceUrl",
            schemaPath: "#/properties/sourceUrl/format",
            keyword: "format",
            params: { format: "uri" },
            message: 'must match format "uri"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/sourceUrl",
          schemaPath: "#/properties/sourceUrl/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.consentAt !== void 0 && typeof r.consentAt != "string") {
      const s = {
        instancePath: a + "/consentAt",
        schemaPath: "#/properties/consentAt/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.consentMethod !== void 0 && typeof r.consentMethod != "string") {
      const s = {
        instancePath: a + "/consentMethod",
        schemaPath: "#/properties/consentMethod/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.isPublished !== void 0 && typeof r.isPublished != "boolean") {
      const s = {
        instancePath: a + "/isPublished",
        schemaPath: "#/properties/isPublished/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.featured !== void 0 && typeof r.featured != "boolean") {
      const s = {
        instancePath: a + "/featured",
        schemaPath: "#/properties/featured/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.displayOrder !== void 0) {
      let s = r.displayOrder;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: a + "/displayOrder",
          schemaPath: "#/properties/displayOrder/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/displayOrder",
            schemaPath: "#/properties/displayOrder/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const t = {
            instancePath: a + "/displayOrder",
            schemaPath: "#/properties/displayOrder/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.internalNotes !== void 0 && typeof r.internalNotes != "string") {
      const s = {
        instancePath: a + "/internalNotes",
        schemaPath: "#/properties/internalNotes/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.subjectUserEmail !== void 0 &&
      typeof r.subjectUserEmail != "string"
    ) {
      const s = {
        instancePath: a + "/subjectUserEmail",
        schemaPath: "#/properties/subjectUserEmail/type",
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
  return ((U.errors = e), i === 0);
}
U.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ee = O,
  oe = { properties: { sortBy: { enum: ["gross", "net", "mrr"] } } };
function O(
  r,
  {
    instancePath: a = "",
    parentData: m,
    parentDataProperty: l,
    rootData: u = r,
    dynamicAnchors: d = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = O.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const t in r)
      if (
        !(
          t === "limit" ||
          t === "sortBy" ||
          t === "activeWithinDays" ||
          t === "excludeInternalDomains"
        )
      ) {
        const n = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    if (r.limit !== void 0) {
      let t = r.limit;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const n = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      if (typeof t == "number") {
        if (t > 500 || isNaN(t)) {
          const n = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 500 },
            message: "must be <= 500",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
        if (t < 1 || isNaN(t)) {
          const n = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [n]) : e.push(n), i++);
        }
      }
    }
    if (r.sortBy !== void 0) {
      let t = r.sortBy;
      if (typeof t != "string") {
        const n = {
          instancePath: a + "/sortBy",
          schemaPath: "#/properties/sortBy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
      if (!(t === "gross" || t === "net" || t === "mrr")) {
        const n = {
          instancePath: a + "/sortBy",
          schemaPath: "#/properties/sortBy/enum",
          keyword: "enum",
          params: { allowedValues: oe.properties.sortBy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [n]) : e.push(n), i++);
      }
    }
    if (r.activeWithinDays !== void 0) {
      let t = r.activeWithinDays;
      const n = i;
      let o = !1;
      const f = i;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const y = {
          instancePath: a + "/activeWithinDays",
          schemaPath: "#/properties/activeWithinDays/anyOf/0/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [y]) : e.push(y), i++);
      }
      if (typeof t == "number") {
        if (t > 365 || isNaN(t)) {
          const y = {
            instancePath: a + "/activeWithinDays",
            schemaPath: "#/properties/activeWithinDays/anyOf/0/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 365 },
            message: "must be <= 365",
          };
          (e === null ? (e = [y]) : e.push(y), i++);
        }
        if (t < 0 || isNaN(t)) {
          const y = {
            instancePath: a + "/activeWithinDays",
            schemaPath: "#/properties/activeWithinDays/anyOf/0/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [y]) : e.push(y), i++);
        }
      }
      var s = f === i;
      o = o || s;
      const se = i;
      if (t !== null) {
        const y = {
          instancePath: a + "/activeWithinDays",
          schemaPath: "#/properties/activeWithinDays/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [y]) : e.push(y), i++);
      }
      var s = se === i;
      if (((o = o || s), o))
        ((i = n), e !== null && (n ? (e.length = n) : (e = null)));
      else {
        const y = {
          instancePath: a + "/activeWithinDays",
          schemaPath: "#/properties/activeWithinDays/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [y]) : e.push(y), i++);
      }
    }
    if (
      r.excludeInternalDomains !== void 0 &&
      typeof r.excludeInternalDomains != "boolean"
    ) {
      const t = {
        instancePath: a + "/excludeInternalDomains",
        schemaPath: "#/properties/excludeInternalDomains/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
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
  return ((O.errors = e), i === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const fe = {
  user_insights_add: L,
  user_insights_search: S,
  user_insights_recent: Z,
  user_insights_tag: Q,
  user_insights_list_tables: V,
  user_insights_semantic_search: W,
  user_insights_backfill_embeddings: M,
  user_insights_followup: H,
  user_insights_dedup: R,
  user_insights_posthog_query: Y,
  user_insights_use_case_add: z,
  user_insights_use_case_search: C,
  user_insights_use_case_update: G,
  user_insights_posthog_person: K,
  user_insights_testimonial_add: X,
  user_insights_top_payers: ee,
};
exports.NATIVE_TOOL_VALIDATORS = fe;
exports.validate_user_insights_add = L;
exports.validate_user_insights_backfill_embeddings = M;
exports.validate_user_insights_dedup = R;
exports.validate_user_insights_followup = H;
exports.validate_user_insights_list_tables = V;
exports.validate_user_insights_posthog_person = K;
exports.validate_user_insights_posthog_query = Y;
exports.validate_user_insights_recent = Z;
exports.validate_user_insights_search = S;
exports.validate_user_insights_semantic_search = W;
exports.validate_user_insights_tag = Q;
exports.validate_user_insights_testimonial_add = X;
exports.validate_user_insights_top_payers = ee;
exports.validate_user_insights_use_case_add = z;
exports.validate_user_insights_use_case_search = C;
exports.validate_user_insights_use_case_update = G;
