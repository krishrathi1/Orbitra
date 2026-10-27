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
      (t._sentryDebugIds[a] = "92e74740-8276-45ff-ac79-e49906e7fba4"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-92e74740-8276-45ff-ac79-e49906e7fba4"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const P = y,
  I = {
    properties: {
      invites: {
        items: { properties: { role: { enum: ["admin", "member"] } } },
      },
    },
  };
function y(
  t,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: u,
    rootData: d = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = y.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.teamName === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "teamName" },
        message: "must have required property 'teamName'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "teamName" ||
          s === "customerOwnerEmail" ||
          s === "companyUrl" ||
          s === "invites"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.teamName !== void 0 && typeof t.teamName != "string") {
      const s = {
        instancePath: a + "/teamName",
        schemaPath: "#/properties/teamName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      t.customerOwnerEmail !== void 0 &&
      typeof t.customerOwnerEmail != "string"
    ) {
      const s = {
        instancePath: a + "/customerOwnerEmail",
        schemaPath: "#/properties/customerOwnerEmail/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.companyUrl !== void 0 && typeof t.companyUrl != "string") {
      const s = {
        instancePath: a + "/companyUrl",
        schemaPath: "#/properties/companyUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.invites !== void 0) {
      let s = t.invites;
      if (Array.isArray(s)) {
        if (s.length > 50) {
          const m = {
            instancePath: a + "/invites",
            schemaPath: "#/properties/invites/maxItems",
            keyword: "maxItems",
            params: { limit: 50 },
            message: "must NOT have more than 50 items",
          };
          (e === null ? (e = [m]) : e.push(m), i++);
        }
        const r = s.length;
        for (let m = 0; m < r; m++) {
          let f = s[m];
          if (f && typeof f == "object" && !Array.isArray(f)) {
            if (f.email === void 0) {
              const n = {
                instancePath: a + "/invites/" + m,
                schemaPath: "#/properties/invites/items/required",
                keyword: "required",
                params: { missingProperty: "email" },
                message: "must have required property 'email'",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
            if (f.email !== void 0 && typeof f.email != "string") {
              const n = {
                instancePath: a + "/invites/" + m + "/email",
                schemaPath: "#/properties/invites/items/properties/email/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
            if (f.role !== void 0) {
              let n = f.role;
              if (typeof n != "string") {
                const p = {
                  instancePath: a + "/invites/" + m + "/role",
                  schemaPath: "#/properties/invites/items/properties/role/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
              if (!(n === "admin" || n === "member")) {
                const p = {
                  instancePath: a + "/invites/" + m + "/role",
                  schemaPath: "#/properties/invites/items/properties/role/enum",
                  keyword: "enum",
                  params: {
                    allowedValues:
                      I.properties.invites.items.properties.role.enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
            }
          } else {
            const n = {
              instancePath: a + "/invites/" + m,
              schemaPath: "#/properties/invites/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
        }
      } else {
        const r = {
          instancePath: a + "/invites",
          schemaPath: "#/properties/invites/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((y.errors = e), i === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const w = h,
  F = {
    properties: {
      invites: {
        items: { properties: { role: { enum: ["admin", "member"] } } },
      },
    },
  },
  E = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
  q = require("ajv/dist/runtime/ucs2length").default;
function h(
  t,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: u,
    rootData: d = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = h.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.teamName === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "teamName" },
        message: "must have required property 'teamName'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.ownerEmail === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "ownerEmail" },
        message: "must have required property 'ownerEmail'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (
        !(
          s === "teamName" ||
          s === "ownerEmail" ||
          s === "invites" ||
          s === "starterCompanionId" ||
          s === "sourceFolderPath" ||
          s === "companyUrl" ||
          s === "sendNow"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.teamName !== void 0 && typeof t.teamName != "string") {
      const s = {
        instancePath: a + "/teamName",
        schemaPath: "#/properties/teamName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.ownerEmail !== void 0 && typeof t.ownerEmail != "string") {
      const s = {
        instancePath: a + "/ownerEmail",
        schemaPath: "#/properties/ownerEmail/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.invites !== void 0) {
      let s = t.invites;
      if (Array.isArray(s)) {
        if (s.length > 50) {
          const m = {
            instancePath: a + "/invites",
            schemaPath: "#/properties/invites/maxItems",
            keyword: "maxItems",
            params: { limit: 50 },
            message: "must NOT have more than 50 items",
          };
          (e === null ? (e = [m]) : e.push(m), i++);
        }
        const r = s.length;
        for (let m = 0; m < r; m++) {
          let f = s[m];
          if (f && typeof f == "object" && !Array.isArray(f)) {
            if (f.email === void 0) {
              const n = {
                instancePath: a + "/invites/" + m,
                schemaPath: "#/properties/invites/items/required",
                keyword: "required",
                params: { missingProperty: "email" },
                message: "must have required property 'email'",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
            if (f.email !== void 0 && typeof f.email != "string") {
              const n = {
                instancePath: a + "/invites/" + m + "/email",
                schemaPath: "#/properties/invites/items/properties/email/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
            if (f.role !== void 0) {
              let n = f.role;
              if (typeof n != "string") {
                const p = {
                  instancePath: a + "/invites/" + m + "/role",
                  schemaPath: "#/properties/invites/items/properties/role/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
              if (!(n === "admin" || n === "member")) {
                const p = {
                  instancePath: a + "/invites/" + m + "/role",
                  schemaPath: "#/properties/invites/items/properties/role/enum",
                  keyword: "enum",
                  params: {
                    allowedValues:
                      F.properties.invites.items.properties.role.enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
            }
          } else {
            const n = {
              instancePath: a + "/invites/" + m,
              schemaPath: "#/properties/invites/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
        }
      } else {
        const r = {
          instancePath: a + "/invites",
          schemaPath: "#/properties/invites/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.starterCompanionId !== void 0) {
      let s = t.starterCompanionId;
      if (typeof s == "string") {
        if (!E.test(s)) {
          const r = {
            instancePath: a + "/starterCompanionId",
            schemaPath: "#/properties/starterCompanionId/format",
            keyword: "format",
            params: { format: "uuid" },
            message: 'must match format "uuid"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/starterCompanionId",
          schemaPath: "#/properties/starterCompanionId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.sourceFolderPath !== void 0) {
      let s = t.sourceFolderPath;
      if (typeof s == "string") {
        if (q(s) < 1) {
          const r = {
            instancePath: a + "/sourceFolderPath",
            schemaPath: "#/properties/sourceFolderPath/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/sourceFolderPath",
          schemaPath: "#/properties/sourceFolderPath/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    }
    if (t.companyUrl !== void 0 && typeof t.companyUrl != "string") {
      const s = {
        instancePath: a + "/companyUrl",
        schemaPath: "#/properties/companyUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (t.sendNow !== void 0 && typeof t.sendNow != "boolean") {
      const s = {
        instancePath: a + "/sendNow",
        schemaPath: "#/properties/sendNow/type",
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
  return ((h.errors = e), i === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _ = g;
function g(
  t,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: u,
    rootData: d = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = g.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(
          s === "limit" ||
          s === "offset" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
        )
      ) {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.limit !== void 0) {
      let s = t.limit;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 100 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.offset !== void 0) {
      let s = t.offset;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/offset",
          schemaPath: "#/properties/offset/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 0 || isNaN(s)) {
          const r = {
            instancePath: a + "/offset",
            schemaPath: "#/properties/offset/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.start !== void 0) {
      let s = t.start;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.end !== void 0) {
      let s = t.end;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const r = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const r = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
        if (s < 1 || isNaN(s)) {
          const r = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
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
  return ((g.errors = e), i === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const k = b,
  A = new RegExp(
    "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
    "u",
  );
function b(
  t,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: u,
    rootData: d = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = b.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.issuanceId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issuanceId" },
        message: "must have required property 'issuanceId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "issuanceId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.issuanceId !== void 0) {
      let s = t.issuanceId;
      if (typeof s == "string") {
        if (!A.test(s)) {
          const r = {
            instancePath: a + "/issuanceId",
            schemaPath: "#/properties/issuanceId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/issuanceId",
          schemaPath: "#/properties/issuanceId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
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
  return ((b.errors = e), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const N = v;
function v(
  t,
  {
    instancePath: a = "",
    parentData: l,
    parentDataProperty: u,
    rootData: d = t,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = v.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.issuanceId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "issuanceId" },
        message: "must have required property 'issuanceId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in t)
      if (s !== "issuanceId") {
        const r = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
      }
    if (t.issuanceId !== void 0) {
      let s = t.issuanceId;
      if (typeof s == "string") {
        if (!A.test(s)) {
          const r = {
            instancePath: a + "/issuanceId",
            schemaPath: "#/properties/issuanceId/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
            },
            message:
              'must match pattern "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"',
          };
          (e === null ? (e = [r]) : e.push(r), i++);
        }
      } else {
        const r = {
          instancePath: a + "/issuanceId",
          schemaPath: "#/properties/issuanceId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [r]) : e.push(r), i++);
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
const j = {
  team_creator_create_managed_team: P,
  team_creator_create_issuance: w,
  team_creator_list_issuances: _,
  team_creator_get_issuance: k,
  team_creator_resend_issuance: N,
};
exports.NATIVE_TOOL_VALIDATORS = j;
exports.validate_team_creator_create_issuance = w;
exports.validate_team_creator_create_managed_team = P;
exports.validate_team_creator_get_issuance = k;
exports.validate_team_creator_list_issuances = _;
exports.validate_team_creator_resend_issuance = N;
