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
      (s._sentryDebugIds[a] = "fa829215-b34c-49bc-9020-e259eb4d27f0"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-fa829215-b34c-49bc-9020-e259eb4d27f0"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const F = I;
function I(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = I.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.sourcePath === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sourcePath" },
        message: "must have required property 'sourcePath'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.destinationPath === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "destinationPath" },
        message: "must have required property 'destinationPath'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "sourcePath" ||
          r === "destinationPath" ||
          r === "newName" ||
          r === "driveId" ||
          r === "waitForCompletion" ||
          r === "timeoutSeconds" ||
          r === "account"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.sourcePath !== void 0 && typeof s.sourcePath != "string") {
      const r = {
        instancePath: a + "/sourcePath",
        schemaPath: "#/properties/sourcePath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.destinationPath !== void 0 && typeof s.destinationPath != "string") {
      const r = {
        instancePath: a + "/destinationPath",
        schemaPath: "#/properties/destinationPath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.newName !== void 0 && typeof s.newName != "string") {
      const r = {
        instancePath: a + "/newName",
        schemaPath: "#/properties/newName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (
      s.waitForCompletion !== void 0 &&
      typeof s.waitForCompletion != "boolean"
    ) {
      const r = {
        instancePath: a + "/waitForCompletion",
        schemaPath: "#/properties/waitForCompletion/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.timeoutSeconds !== void 0) {
      let r = s.timeoutSeconds;
      if (typeof r == "number") {
        if (r > 300 || isNaN(r)) {
          const t = {
            instancePath: a + "/timeoutSeconds",
            schemaPath: "#/properties/timeoutSeconds/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 300 },
            message: "must be <= 300",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: a + "/timeoutSeconds",
            schemaPath: "#/properties/timeoutSeconds/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: a + "/timeoutSeconds",
          schemaPath: "#/properties/timeoutSeconds/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = N;
function N(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = N.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.data === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "data" },
        message: "must have required property 'data'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in s)
      if (
        !(
          t === "path" ||
          t === "sheetName" ||
          t === "data" ||
          t === "driveId" ||
          t === "overwrite" ||
          t === "account"
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
    if (s.path !== void 0 && typeof s.path != "string") {
      const t = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.sheetName !== void 0 && typeof s.sheetName != "string") {
      const t = {
        instancePath: a + "/sheetName",
        schemaPath: "#/properties/sheetName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.data !== void 0) {
      let t = s.data;
      if (Array.isArray(t)) {
        const l = t.length;
        for (let p = 0; p < l; p++) {
          let P = t[p];
          if (Array.isArray(P)) {
            const y = P.length;
            for (let m = 0; m < y; m++) {
              let d = P[m];
              const v = i;
              let u = !1;
              const b = i;
              if (typeof d != "string") {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf/0/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
              var r = b === i;
              u = u || r;
              const w = i;
              if (typeof d != "number") {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf/1/type",
                  keyword: "type",
                  params: { type: "number" },
                  message: "must be number",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
              var r = w === i;
              u = u || r;
              const k = i;
              if (typeof d != "boolean") {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf/2/type",
                  keyword: "type",
                  params: { type: "boolean" },
                  message: "must be boolean",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
              var r = k === i;
              u = u || r;
              const _ = i;
              if (d !== null) {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf/3/type",
                  keyword: "type",
                  params: { type: "null" },
                  message: "must be null",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
              var r = _ === i;
              if (((u = u || r), u))
                ((i = v), e !== null && (v ? (e.length = v) : (e = null)));
              else {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf",
                  keyword: "anyOf",
                  params: {},
                  message: "must match a schema in anyOf",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
            }
          } else {
            const y = {
              instancePath: a + "/data/" + p,
              schemaPath: "#/properties/data/items/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            (e === null ? (e = [y]) : e.push(y), i++);
          }
        }
      } else {
        const l = {
          instancePath: a + "/data",
          schemaPath: "#/properties/data/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const t = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.overwrite !== void 0 && typeof s.overwrite != "boolean") {
      const t = {
        instancePath: a + "/overwrite",
        schemaPath: "#/properties/overwrite/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
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
  return ((N.errors = e), i === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const z = q;
function q(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = q.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.paths === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "paths" },
        message: "must have required property 'paths'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in s)
      if (
        !(
          t === "paths" ||
          t === "driveId" ||
          t === "ifMatch" ||
          t === "account"
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
    if (s.paths !== void 0) {
      let t = s.paths;
      const l = i;
      let p = !1;
      const P = i;
      if (typeof t != "string") {
        const m = {
          instancePath: a + "/paths",
          schemaPath: "#/properties/paths/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [m]) : e.push(m), i++);
      }
      var r = P === i;
      p = p || r;
      const y = i;
      if (Array.isArray(t)) {
        const m = t.length;
        for (let d = 0; d < m; d++)
          if (typeof t[d] != "string") {
            const v = {
              instancePath: a + "/paths/" + d,
              schemaPath: "#/properties/paths/anyOf/1/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [v]) : e.push(v), i++);
          }
      } else {
        const m = {
          instancePath: a + "/paths",
          schemaPath: "#/properties/paths/anyOf/1/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [m]) : e.push(m), i++);
      }
      var r = y === i;
      if (((p = p || r), p))
        ((i = l), e !== null && (l ? (e.length = l) : (e = null)));
      else {
        const m = {
          instancePath: a + "/paths",
          schemaPath: "#/properties/paths/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [m]) : e.push(m), i++);
      }
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const t = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.ifMatch !== void 0 && typeof s.ifMatch != "string") {
      const t = {
        instancePath: a + "/ifMatch",
        schemaPath: "#/properties/ifMatch/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
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
  return ((q.errors = e), i === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = A;
function A(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = A.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.sheetName === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sheetName" },
        message: "must have required property 'sheetName'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in s)
      if (
        !(
          t === "path" ||
          t === "sheetName" ||
          t === "data" ||
          t === "driveId" ||
          t === "account"
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
    if (s.path !== void 0 && typeof s.path != "string") {
      const t = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.sheetName !== void 0 && typeof s.sheetName != "string") {
      const t = {
        instancePath: a + "/sheetName",
        schemaPath: "#/properties/sheetName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.data !== void 0) {
      let t = s.data;
      if (Array.isArray(t)) {
        const l = t.length;
        for (let p = 0; p < l; p++) {
          let P = t[p];
          if (Array.isArray(P)) {
            const y = P.length;
            for (let m = 0; m < y; m++) {
              let d = P[m];
              const v = i;
              let u = !1;
              const b = i;
              if (typeof d != "string") {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf/0/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
              var r = b === i;
              u = u || r;
              const w = i;
              if (typeof d != "number") {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf/1/type",
                  keyword: "type",
                  params: { type: "number" },
                  message: "must be number",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
              var r = w === i;
              u = u || r;
              const k = i;
              if (typeof d != "boolean") {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf/2/type",
                  keyword: "type",
                  params: { type: "boolean" },
                  message: "must be boolean",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
              var r = k === i;
              u = u || r;
              const _ = i;
              if (d !== null) {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf/3/type",
                  keyword: "type",
                  params: { type: "null" },
                  message: "must be null",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
              var r = _ === i;
              if (((u = u || r), u))
                ((i = v), e !== null && (v ? (e.length = v) : (e = null)));
              else {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf",
                  keyword: "anyOf",
                  params: {},
                  message: "must match a schema in anyOf",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
            }
          } else {
            const y = {
              instancePath: a + "/data/" + p,
              schemaPath: "#/properties/data/items/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            (e === null ? (e = [y]) : e.push(y), i++);
          }
        }
      } else {
        const l = {
          instancePath: a + "/data",
          schemaPath: "#/properties/data/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const t = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
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
  return ((A.errors = e), i === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = O;
function O(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = O.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "path" ||
          r === "sheetName" ||
          r === "driveId" ||
          r === "account"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.sheetName !== void 0 && typeof s.sheetName != "string") {
      const r = {
        instancePath: a + "/sheetName",
        schemaPath: "#/properties/sheetName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((O.errors = e), i === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const H = D;
function D(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = D.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "path" ||
          r === "sheetName" ||
          r === "range" ||
          r === "driveId" ||
          r === "account"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.sheetName !== void 0 && typeof s.sheetName != "string") {
      const r = {
        instancePath: a + "/sheetName",
        schemaPath: "#/properties/sheetName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.range !== void 0 && typeof s.range != "string") {
      const r = {
        instancePath: a + "/range",
        schemaPath: "#/properties/range/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((D.errors = e), i === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const J = j;
function j(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = j.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.startCell === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "startCell" },
        message: "must have required property 'startCell'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.data === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "data" },
        message: "must have required property 'data'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in s)
      if (
        !(
          t === "path" ||
          t === "sheetName" ||
          t === "startCell" ||
          t === "data" ||
          t === "overwrite" ||
          t === "driveId" ||
          t === "account"
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
    if (s.path !== void 0 && typeof s.path != "string") {
      const t = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.sheetName !== void 0 && typeof s.sheetName != "string") {
      const t = {
        instancePath: a + "/sheetName",
        schemaPath: "#/properties/sheetName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.startCell !== void 0 && typeof s.startCell != "string") {
      const t = {
        instancePath: a + "/startCell",
        schemaPath: "#/properties/startCell/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.data !== void 0) {
      let t = s.data;
      if (Array.isArray(t)) {
        const l = t.length;
        for (let p = 0; p < l; p++) {
          let P = t[p];
          if (Array.isArray(P)) {
            const y = P.length;
            for (let m = 0; m < y; m++) {
              let d = P[m];
              const v = i;
              let u = !1;
              const b = i;
              if (typeof d != "string") {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf/0/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
              var r = b === i;
              u = u || r;
              const w = i;
              if (typeof d != "number") {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf/1/type",
                  keyword: "type",
                  params: { type: "number" },
                  message: "must be number",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
              var r = w === i;
              u = u || r;
              const k = i;
              if (typeof d != "boolean") {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf/2/type",
                  keyword: "type",
                  params: { type: "boolean" },
                  message: "must be boolean",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
              var r = k === i;
              u = u || r;
              const _ = i;
              if (d !== null) {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf/3/type",
                  keyword: "type",
                  params: { type: "null" },
                  message: "must be null",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
              var r = _ === i;
              if (((u = u || r), u))
                ((i = v), e !== null && (v ? (e.length = v) : (e = null)));
              else {
                const o = {
                  instancePath: a + "/data/" + p + "/" + m,
                  schemaPath: "#/properties/data/items/items/anyOf",
                  keyword: "anyOf",
                  params: {},
                  message: "must match a schema in anyOf",
                };
                (e === null ? (e = [o]) : e.push(o), i++);
              }
            }
          } else {
            const y = {
              instancePath: a + "/data/" + p,
              schemaPath: "#/properties/data/items/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            (e === null ? (e = [y]) : e.push(y), i++);
          }
        }
      } else {
        const l = {
          instancePath: a + "/data",
          schemaPath: "#/properties/data/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
    if (s.overwrite !== void 0 && typeof s.overwrite != "boolean") {
      const t = {
        instancePath: a + "/overwrite",
        schemaPath: "#/properties/overwrite/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const t = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const t = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
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
  return ((j.errors = e), i === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const K = T;
function T(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = T.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "path" || r === "driveId" || r === "account")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((T.errors = e), i === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Q = x,
  R = {
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
      path: { type: "string" },
      driveId: { type: "string" },
      orderBy: {
        enum: ["name", "lastModifiedDateTime", "size"],
        type: "string",
      },
      sortOrder: { enum: ["asc", "desc"], type: "string" },
      limit: { type: "integer", minimum: 1, maximum: 100 },
      account: { type: "string" },
    },
  },
  re = Object.prototype.hasOwnProperty;
function x(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = x.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (!re.call(R.properties, r)) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.orderBy !== void 0) {
      let r = s.orderBy;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/orderBy",
          schemaPath: "#/properties/orderBy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "name" || r === "lastModifiedDateTime" || r === "size")) {
        const t = {
          instancePath: a + "/orderBy",
          schemaPath: "#/properties/orderBy/enum",
          keyword: "enum",
          params: { allowedValues: R.properties.orderBy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.sortOrder !== void 0) {
      let r = s.sortOrder;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/sortOrder",
          schemaPath: "#/properties/sortOrder/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "asc" || r === "desc")) {
        const t = {
          instancePath: a + "/sortOrder",
          schemaPath: "#/properties/sortOrder/enum",
          keyword: "enum",
          params: { allowedValues: R.properties.sortOrder.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.limit !== void 0) {
      let r = s.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((x.errors = e), i === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const U = E;
function E(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = E.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(r === "start" || r === "end" || r === "cursor" || r === "account")
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.start !== void 0) {
      let r = s.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((E.errors = e), i === 0);
}
E.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = C,
  se = {
    properties: { conflictBehavior: { enum: ["fail", "replace", "rename"] } },
  };
function C(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = C.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.sourcePath === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sourcePath" },
        message: "must have required property 'sourcePath'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "sourcePath" ||
          r === "destinationPath" ||
          r === "newName" ||
          r === "driveId" ||
          r === "conflictBehavior" ||
          r === "ifMatch" ||
          r === "account"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.sourcePath !== void 0 && typeof s.sourcePath != "string") {
      const r = {
        instancePath: a + "/sourcePath",
        schemaPath: "#/properties/sourcePath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.destinationPath !== void 0 && typeof s.destinationPath != "string") {
      const r = {
        instancePath: a + "/destinationPath",
        schemaPath: "#/properties/destinationPath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.newName !== void 0 && typeof s.newName != "string") {
      const r = {
        instancePath: a + "/newName",
        schemaPath: "#/properties/newName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.conflictBehavior !== void 0) {
      let r = s.conflictBehavior;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/conflictBehavior",
          schemaPath: "#/properties/conflictBehavior/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "fail" || r === "replace" || r === "rename")) {
        const t = {
          instancePath: a + "/conflictBehavior",
          schemaPath: "#/properties/conflictBehavior/enum",
          keyword: "enum",
          params: { allowedValues: se.properties.conflictBehavior.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.ifMatch !== void 0 && typeof s.ifMatch != "string") {
      const r = {
        instancePath: a + "/ifMatch",
        schemaPath: "#/properties/ifMatch/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((C.errors = e), i === 0);
}
C.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = B,
  te = { properties: { destination: { enum: ["inline", "disk"] } } };
function B(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = B.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "path" ||
          r === "driveId" ||
          r === "destination" ||
          r === "account"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.destination !== void 0) {
      let r = s.destination;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/destination",
          schemaPath: "#/properties/destination/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "inline" || r === "disk")) {
        const t = {
          instancePath: a + "/destination",
          schemaPath: "#/properties/destination/enum",
          keyword: "enum",
          params: { allowedValues: te.properties.destination.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((B.errors = e), i === 0);
}
B.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Z = S;
function S(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = S.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.query === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "limit" ||
          r === "cursor" ||
          r === "query" ||
          r === "searchContent" ||
          r === "driveId" ||
          r === "fileTypes" ||
          r === "account"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.limit !== void 0) {
      let r = s.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.query !== void 0 && typeof s.query != "string") {
      const r = {
        instancePath: a + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.searchContent !== void 0 && typeof s.searchContent != "boolean") {
      const r = {
        instancePath: a + "/searchContent",
        schemaPath: "#/properties/searchContent/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.fileTypes !== void 0) {
      let r = s.fileTypes;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let l = 0; l < t; l++)
          if (typeof r[l] != "string") {
            const p = {
              instancePath: a + "/fileTypes/" + l,
              schemaPath: "#/properties/fileTypes/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const t = {
          instancePath: a + "/fileTypes",
          schemaPath: "#/properties/fileTypes/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((S.errors = e), i === 0);
}
S.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const $ = M;
function M(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = M.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.sourcePath === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sourcePath" },
        message: "must have required property 'sourcePath'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.destinationPath === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "destinationPath" },
        message: "must have required property 'destinationPath'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "sourcePath" ||
          r === "destinationPath" ||
          r === "driveId" ||
          r === "overwrite" ||
          r === "account"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.sourcePath !== void 0 && typeof s.sourcePath != "string") {
      const r = {
        instancePath: a + "/sourcePath",
        schemaPath: "#/properties/sourcePath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.destinationPath !== void 0 && typeof s.destinationPath != "string") {
      const r = {
        instancePath: a + "/destinationPath",
        schemaPath: "#/properties/destinationPath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.overwrite !== void 0 && typeof s.overwrite != "boolean") {
      const r = {
        instancePath: a + "/overwrite",
        schemaPath: "#/properties/overwrite/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((M.errors = e), i === 0);
}
M.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ee = V;
function V(
  s,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: c,
    rootData: h = s,
    dynamicAnchors: g = {},
  } = {},
) {
  let e = null,
    i = 0;
  const n = V.evaluated;
  if (
    (n.dynamicProps && (n.props = void 0),
    n.dynamicItems && (n.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.markdown === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "markdown" },
        message: "must have required property 'markdown'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "path" ||
          r === "markdown" ||
          r === "driveId" ||
          r === "overwrite" ||
          r === "account"
        )
      ) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.path !== void 0 && typeof s.path != "string") {
      const r = {
        instancePath: a + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.markdown !== void 0 && typeof s.markdown != "string") {
      const r = {
        instancePath: a + "/markdown",
        schemaPath: "#/properties/markdown/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const r = {
        instancePath: a + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.overwrite !== void 0 && typeof s.overwrite != "boolean") {
      const r = {
        instancePath: a + "/overwrite",
        schemaPath: "#/properties/overwrite/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((V.errors = e), i === 0);
}
V.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ie = {
  onedrive_copy: F,
  onedrive_excel_create: L,
  onedrive_delete: z,
  onedrive_excel_add_sheet: Y,
  onedrive_excel_peek: G,
  onedrive_excel_read: H,
  onedrive_excel_update: J,
  onedrive_folder: K,
  onedrive_list: Q,
  onedrive_list_drives: U,
  onedrive_move: W,
  onedrive_read: X,
  onedrive_search: Z,
  onedrive_upload: $,
  onedrive_word_create: ee,
};
exports.NATIVE_TOOL_VALIDATORS = ie;
exports.validate_onedrive_copy = F;
exports.validate_onedrive_delete = z;
exports.validate_onedrive_excel_add_sheet = Y;
exports.validate_onedrive_excel_create = L;
exports.validate_onedrive_excel_peek = G;
exports.validate_onedrive_excel_read = H;
exports.validate_onedrive_excel_update = J;
exports.validate_onedrive_folder = K;
exports.validate_onedrive_list = Q;
exports.validate_onedrive_list_drives = U;
exports.validate_onedrive_move = W;
exports.validate_onedrive_read = X;
exports.validate_onedrive_search = Z;
exports.validate_onedrive_upload = $;
exports.validate_onedrive_word_create = ee;
