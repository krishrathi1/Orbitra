"use strict";
(function () {
  try {
    var a =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    a.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var a =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      n = new a.Error().stack;
    n &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[n] = "33cf0823-06fd-4995-95f9-91fe943c9b4b"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-33cf0823-06fd-4995-95f9-91fe943c9b4b"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const L = q,
  c = require("ajv/dist/runtime/ucs2length").default,
  k = new RegExp("\\S", "u");
function q(
  a,
  {
    instancePath: n = "",
    parentData: g,
    parentDataProperty: P,
    rootData: b = a,
    dynamicAnchors: w = {},
  } = {},
) {
  let e = null,
    r = 0;
  const o = q.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.spreadsheet === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "spreadsheet" },
        message: "must have required property 'spreadsheet'",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    for (const t in a)
      if (!(t === "spreadsheet" || t === "sheetName" || t === "account")) {
        const s = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (a.spreadsheet !== void 0) {
      let t = a.spreadsheet;
      if (typeof t == "string") {
        if (c(t) < 1) {
          const s = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (!k.test(t)) {
          const s = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      } else {
        const s = {
          instancePath: n + "/spreadsheet",
          schemaPath: "#/properties/spreadsheet/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    }
    if (a.sheetName !== void 0 && typeof a.sheetName != "string") {
      const t = {
        instancePath: n + "/sheetName",
        schemaPath: "#/properties/sheetName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    if (a.account !== void 0 && typeof a.account != "string") {
      const t = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
  } else {
    const t = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), r++);
  }
  return ((q.errors = e), r === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = A,
  M = {
    properties: { include: { items: { enum: ["color", "note", "link"] } } },
  };
function A(
  a,
  {
    instancePath: n = "",
    parentData: g,
    parentDataProperty: P,
    rootData: b = a,
    dynamicAnchors: w = {},
  } = {},
) {
  let e = null,
    r = 0;
  const o = A.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.spreadsheet === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "spreadsheet" },
        message: "must have required property 'spreadsheet'",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    for (const t in a)
      if (
        !(
          t === "spreadsheet" ||
          t === "sheetName" ||
          t === "range" ||
          t === "include" ||
          t === "account"
        )
      ) {
        const s = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (a.spreadsheet !== void 0) {
      let t = a.spreadsheet;
      if (typeof t == "string") {
        if (c(t) < 1) {
          const s = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (!k.test(t)) {
          const s = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      } else {
        const s = {
          instancePath: n + "/spreadsheet",
          schemaPath: "#/properties/spreadsheet/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    }
    if (a.sheetName !== void 0 && typeof a.sheetName != "string") {
      const t = {
        instancePath: n + "/sheetName",
        schemaPath: "#/properties/sheetName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    if (a.range !== void 0 && typeof a.range != "string") {
      const t = {
        instancePath: n + "/range",
        schemaPath: "#/properties/range/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    if (a.include !== void 0) {
      let t = a.include;
      if (Array.isArray(t)) {
        const s = t.length;
        for (let i = 0; i < s; i++) {
          let l = t[i];
          if (typeof l != "string") {
            const h = {
              instancePath: n + "/include/" + i,
              schemaPath: "#/properties/include/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [h]) : e.push(h), r++);
          }
          if (!(l === "color" || l === "note" || l === "link")) {
            const h = {
              instancePath: n + "/include/" + i,
              schemaPath: "#/properties/include/items/enum",
              keyword: "enum",
              params: { allowedValues: M.properties.include.items.enum },
              message: "must be equal to one of the allowed values",
            };
            (e === null ? (e = [h]) : e.push(h), r++);
          }
        }
      } else {
        const s = {
          instancePath: n + "/include",
          schemaPath: "#/properties/include/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    }
    if (a.account !== void 0 && typeof a.account != "string") {
      const t = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
  } else {
    const t = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), r++);
  }
  return ((A.errors = e), r === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = I,
  $ = { properties: { valueInputOption: { enum: ["RAW", "USER_ENTERED"] } } };
function I(
  a,
  {
    instancePath: n = "",
    parentData: g,
    parentDataProperty: P,
    rootData: b = a,
    dynamicAnchors: w = {},
  } = {},
) {
  let e = null,
    r = 0;
  const o = I.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.spreadsheet === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "spreadsheet" },
        message: "must have required property 'spreadsheet'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.startCell === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "startCell" },
        message: "must have required property 'startCell'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.data === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "data" },
        message: "must have required property 'data'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (
        !(
          s === "spreadsheet" ||
          s === "startCell" ||
          s === "data" ||
          s === "sheetName" ||
          s === "overwrite" ||
          s === "extendFormatting" ||
          s === "valueInputOption" ||
          s === "account"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), r++);
      }
    if (a.spreadsheet !== void 0) {
      let s = a.spreadsheet;
      if (typeof s == "string") {
        if (c(s) < 1) {
          const i = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [i]) : e.push(i), r++);
        }
        if (!k.test(s)) {
          const i = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [i]) : e.push(i), r++);
        }
      } else {
        const i = {
          instancePath: n + "/spreadsheet",
          schemaPath: "#/properties/spreadsheet/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [i]) : e.push(i), r++);
      }
    }
    if (a.startCell !== void 0 && typeof a.startCell != "string") {
      const s = {
        instancePath: n + "/startCell",
        schemaPath: "#/properties/startCell/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.data !== void 0) {
      let s = a.data;
      if (Array.isArray(s)) {
        const i = s.length;
        for (let l = 0; l < i; l++) {
          let h = s[l];
          if (Array.isArray(h)) {
            const d = h.length;
            for (let u = 0; u < d; u++) {
              let f = h[u];
              const y = r;
              let m = !1;
              const v = r;
              if (typeof f != "string") {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf/0/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
              var t = v === r;
              m = m || t;
              const _ = r;
              if (typeof f != "number") {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf/1/type",
                  keyword: "type",
                  params: { type: "number" },
                  message: "must be number",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
              var t = _ === r;
              m = m || t;
              const N = r;
              if (typeof f != "boolean") {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf/2/type",
                  keyword: "type",
                  params: { type: "boolean" },
                  message: "must be boolean",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
              var t = N === r;
              m = m || t;
              const O = r;
              if (f !== null) {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf/3/type",
                  keyword: "type",
                  params: { type: "null" },
                  message: "must be null",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
              var t = O === r;
              if (((m = m || t), m))
                ((r = y), e !== null && (y ? (e.length = y) : (e = null)));
              else {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf",
                  keyword: "anyOf",
                  params: {},
                  message: "must match a schema in anyOf",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
            }
          } else {
            const d = {
              instancePath: n + "/data/" + l,
              schemaPath: "#/properties/data/items/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            (e === null ? (e = [d]) : e.push(d), r++);
          }
        }
      } else {
        const i = {
          instancePath: n + "/data",
          schemaPath: "#/properties/data/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [i]) : e.push(i), r++);
      }
    }
    if (a.sheetName !== void 0 && typeof a.sheetName != "string") {
      const s = {
        instancePath: n + "/sheetName",
        schemaPath: "#/properties/sheetName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.overwrite !== void 0 && typeof a.overwrite != "boolean") {
      const s = {
        instancePath: n + "/overwrite",
        schemaPath: "#/properties/overwrite/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      a.extendFormatting !== void 0 &&
      typeof a.extendFormatting != "boolean"
    ) {
      const s = {
        instancePath: n + "/extendFormatting",
        schemaPath: "#/properties/extendFormatting/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.valueInputOption !== void 0) {
      let s = a.valueInputOption;
      if (typeof s != "string") {
        const i = {
          instancePath: n + "/valueInputOption",
          schemaPath: "#/properties/valueInputOption/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [i]) : e.push(i), r++);
      }
      if (!(s === "RAW" || s === "USER_ENTERED")) {
        const i = {
          instancePath: n + "/valueInputOption",
          schemaPath: "#/properties/valueInputOption/enum",
          keyword: "enum",
          params: { allowedValues: $.properties.valueInputOption.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [i]) : e.push(i), r++);
      }
    }
    if (a.account !== void 0 && typeof a.account != "string") {
      const s = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((I.errors = e), r === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const F = D,
  Y = { properties: { shiftDimension: { enum: ["ROWS", "COLUMNS"] } } };
function D(
  a,
  {
    instancePath: n = "",
    parentData: g,
    parentDataProperty: P,
    rootData: b = a,
    dynamicAnchors: w = {},
  } = {},
) {
  let e = null,
    r = 0;
  const o = D.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.spreadsheet === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "spreadsheet" },
        message: "must have required property 'spreadsheet'",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    if (a.range === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "range" },
        message: "must have required property 'range'",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    for (const t in a)
      if (
        !(
          t === "spreadsheet" ||
          t === "range" ||
          t === "sheetName" ||
          t === "shiftDimension" ||
          t === "account"
        )
      ) {
        const s = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (a.spreadsheet !== void 0) {
      let t = a.spreadsheet;
      if (typeof t == "string") {
        if (c(t) < 1) {
          const s = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (!k.test(t)) {
          const s = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      } else {
        const s = {
          instancePath: n + "/spreadsheet",
          schemaPath: "#/properties/spreadsheet/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    }
    if (a.range !== void 0 && typeof a.range != "string") {
      const t = {
        instancePath: n + "/range",
        schemaPath: "#/properties/range/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    if (a.sheetName !== void 0 && typeof a.sheetName != "string") {
      const t = {
        instancePath: n + "/sheetName",
        schemaPath: "#/properties/sheetName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    if (a.shiftDimension !== void 0) {
      let t = a.shiftDimension;
      if (typeof t != "string") {
        const s = {
          instancePath: n + "/shiftDimension",
          schemaPath: "#/properties/shiftDimension/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (!(t === "ROWS" || t === "COLUMNS")) {
        const s = {
          instancePath: n + "/shiftDimension",
          schemaPath: "#/properties/shiftDimension/enum",
          keyword: "enum",
          params: { allowedValues: Y.properties.shiftDimension.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    }
    if (a.account !== void 0 && typeof a.account != "string") {
      const t = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
  } else {
    const t = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), r++);
  }
  return ((D.errors = e), r === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const x = T;
function T(
  a,
  {
    instancePath: n = "",
    parentData: g,
    parentDataProperty: P,
    rootData: b = a,
    dynamicAnchors: w = {},
  } = {},
) {
  let e = null,
    r = 0;
  const o = T.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.title === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (
        !(
          s === "title" ||
          s === "sheetName" ||
          s === "data" ||
          s === "folderId" ||
          s === "account"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), r++);
      }
    if (a.title !== void 0 && typeof a.title != "string") {
      const s = {
        instancePath: n + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.sheetName !== void 0 && typeof a.sheetName != "string") {
      const s = {
        instancePath: n + "/sheetName",
        schemaPath: "#/properties/sheetName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.data !== void 0) {
      let s = a.data;
      if (Array.isArray(s)) {
        const i = s.length;
        for (let l = 0; l < i; l++) {
          let h = s[l];
          if (Array.isArray(h)) {
            const d = h.length;
            for (let u = 0; u < d; u++) {
              let f = h[u];
              const y = r;
              let m = !1;
              const v = r;
              if (typeof f != "string") {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf/0/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
              var t = v === r;
              m = m || t;
              const _ = r;
              if (typeof f != "number") {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf/1/type",
                  keyword: "type",
                  params: { type: "number" },
                  message: "must be number",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
              var t = _ === r;
              m = m || t;
              const N = r;
              if (typeof f != "boolean") {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf/2/type",
                  keyword: "type",
                  params: { type: "boolean" },
                  message: "must be boolean",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
              var t = N === r;
              m = m || t;
              const O = r;
              if (f !== null) {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf/3/type",
                  keyword: "type",
                  params: { type: "null" },
                  message: "must be null",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
              var t = O === r;
              if (((m = m || t), m))
                ((r = y), e !== null && (y ? (e.length = y) : (e = null)));
              else {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf",
                  keyword: "anyOf",
                  params: {},
                  message: "must match a schema in anyOf",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
            }
          } else {
            const d = {
              instancePath: n + "/data/" + l,
              schemaPath: "#/properties/data/items/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            (e === null ? (e = [d]) : e.push(d), r++);
          }
        }
      } else {
        const i = {
          instancePath: n + "/data",
          schemaPath: "#/properties/data/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [i]) : e.push(i), r++);
      }
    }
    if (a.folderId !== void 0 && typeof a.folderId != "string") {
      const s = {
        instancePath: n + "/folderId",
        schemaPath: "#/properties/folderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.account !== void 0 && typeof a.account != "string") {
      const s = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((T.errors = e), r === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = S;
function S(
  a,
  {
    instancePath: n = "",
    parentData: g,
    parentDataProperty: P,
    rootData: b = a,
    dynamicAnchors: w = {},
  } = {},
) {
  let e = null,
    r = 0;
  const o = S.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.spreadsheet === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "spreadsheet" },
        message: "must have required property 'spreadsheet'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.sheetName === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sheetName" },
        message: "must have required property 'sheetName'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in a)
      if (
        !(
          s === "spreadsheet" ||
          s === "sheetName" ||
          s === "data" ||
          s === "account"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [i]) : e.push(i), r++);
      }
    if (a.spreadsheet !== void 0) {
      let s = a.spreadsheet;
      if (typeof s == "string") {
        if (c(s) < 1) {
          const i = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [i]) : e.push(i), r++);
        }
        if (!k.test(s)) {
          const i = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [i]) : e.push(i), r++);
        }
      } else {
        const i = {
          instancePath: n + "/spreadsheet",
          schemaPath: "#/properties/spreadsheet/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [i]) : e.push(i), r++);
      }
    }
    if (a.sheetName !== void 0 && typeof a.sheetName != "string") {
      const s = {
        instancePath: n + "/sheetName",
        schemaPath: "#/properties/sheetName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (a.data !== void 0) {
      let s = a.data;
      if (Array.isArray(s)) {
        const i = s.length;
        for (let l = 0; l < i; l++) {
          let h = s[l];
          if (Array.isArray(h)) {
            const d = h.length;
            for (let u = 0; u < d; u++) {
              let f = h[u];
              const y = r;
              let m = !1;
              const v = r;
              if (typeof f != "string") {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf/0/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
              var t = v === r;
              m = m || t;
              const _ = r;
              if (typeof f != "number") {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf/1/type",
                  keyword: "type",
                  params: { type: "number" },
                  message: "must be number",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
              var t = _ === r;
              m = m || t;
              const N = r;
              if (typeof f != "boolean") {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf/2/type",
                  keyword: "type",
                  params: { type: "boolean" },
                  message: "must be boolean",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
              var t = N === r;
              m = m || t;
              const O = r;
              if (f !== null) {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf/3/type",
                  keyword: "type",
                  params: { type: "null" },
                  message: "must be null",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
              var t = O === r;
              if (((m = m || t), m))
                ((r = y), e !== null && (y ? (e.length = y) : (e = null)));
              else {
                const p = {
                  instancePath: n + "/data/" + l + "/" + u,
                  schemaPath: "#/properties/data/items/items/anyOf",
                  keyword: "anyOf",
                  params: {},
                  message: "must match a schema in anyOf",
                };
                (e === null ? (e = [p]) : e.push(p), r++);
              }
            }
          } else {
            const d = {
              instancePath: n + "/data/" + l,
              schemaPath: "#/properties/data/items/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            (e === null ? (e = [d]) : e.push(d), r++);
          }
        }
      } else {
        const i = {
          instancePath: n + "/data",
          schemaPath: "#/properties/data/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [i]) : e.push(i), r++);
      }
    }
    if (a.account !== void 0 && typeof a.account != "string") {
      const s = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((S.errors = e), r === 0);
}
S.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const U = j;
function j(
  a,
  {
    instancePath: n = "",
    parentData: g,
    parentDataProperty: P,
    rootData: b = a,
    dynamicAnchors: w = {},
  } = {},
) {
  let e = null,
    r = 0;
  const o = j.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.spreadsheet === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "spreadsheet" },
        message: "must have required property 'spreadsheet'",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    if (a.sheetId === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sheetId" },
        message: "must have required property 'sheetId'",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    for (const t in a)
      if (!(t === "spreadsheet" || t === "sheetId" || t === "account")) {
        const s = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (a.spreadsheet !== void 0) {
      let t = a.spreadsheet;
      if (typeof t == "string") {
        if (c(t) < 1) {
          const s = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (!k.test(t)) {
          const s = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      } else {
        const s = {
          instancePath: n + "/spreadsheet",
          schemaPath: "#/properties/spreadsheet/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    }
    if (a.sheetId !== void 0) {
      let t = a.sheetId;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const s = {
          instancePath: n + "/sheetId",
          schemaPath: "#/properties/sheetId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (typeof t == "number" && (t < 0 || isNaN(t))) {
        const s = {
          instancePath: n + "/sheetId",
          schemaPath: "#/properties/sheetId/minimum",
          keyword: "minimum",
          params: { comparison: ">=", limit: 0 },
          message: "must be >= 0",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    }
    if (a.account !== void 0 && typeof a.account != "string") {
      const t = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
  } else {
    const t = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), r++);
  }
  return ((j.errors = e), r === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = E,
  z = new RegExp("^#[0-9a-fA-F]{6}$", "u");
function E(
  a,
  {
    instancePath: n = "",
    parentData: g,
    parentDataProperty: P,
    rootData: b = a,
    dynamicAnchors: w = {},
  } = {},
) {
  let e = null,
    r = 0;
  const o = E.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    a && typeof a == "object" && !Array.isArray(a))
  ) {
    if (a.spreadsheet === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "spreadsheet" },
        message: "must have required property 'spreadsheet'",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    if (a.sheetName === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sheetName" },
        message: "must have required property 'sheetName'",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    if (a.range === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "range" },
        message: "must have required property 'range'",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    if (a.backgroundColor === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "backgroundColor" },
        message: "must have required property 'backgroundColor'",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
    for (const t in a)
      if (
        !(
          t === "spreadsheet" ||
          t === "sheetName" ||
          t === "range" ||
          t === "backgroundColor" ||
          t === "account"
        )
      ) {
        const s = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (a.spreadsheet !== void 0) {
      let t = a.spreadsheet;
      if (typeof t == "string") {
        if (c(t) < 1) {
          const s = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (!k.test(t)) {
          const s = {
            instancePath: n + "/spreadsheet",
            schemaPath: "#/properties/spreadsheet/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      } else {
        const s = {
          instancePath: n + "/spreadsheet",
          schemaPath: "#/properties/spreadsheet/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    }
    if (a.sheetName !== void 0) {
      let t = a.sheetName;
      if (typeof t == "string") {
        if (c(t) < 1) {
          const s = {
            instancePath: n + "/sheetName",
            schemaPath: "#/properties/sheetName/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      } else {
        const s = {
          instancePath: n + "/sheetName",
          schemaPath: "#/properties/sheetName/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    }
    if (a.range !== void 0) {
      let t = a.range;
      if (typeof t == "string") {
        if (c(t) < 1) {
          const s = {
            instancePath: n + "/range",
            schemaPath: "#/properties/range/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      } else {
        const s = {
          instancePath: n + "/range",
          schemaPath: "#/properties/range/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    }
    if (a.backgroundColor !== void 0) {
      let t = a.backgroundColor;
      if (typeof t == "string") {
        if (!z.test(t)) {
          const s = {
            instancePath: n + "/backgroundColor",
            schemaPath: "#/properties/backgroundColor/pattern",
            keyword: "pattern",
            params: { pattern: "^#[0-9a-fA-F]{6}$" },
            message: 'must match pattern "^#[0-9a-fA-F]{6}$"',
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      } else {
        const s = {
          instancePath: n + "/backgroundColor",
          schemaPath: "#/properties/backgroundColor/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    }
    if (a.account !== void 0 && typeof a.account != "string") {
      const t = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), r++);
    }
  } else {
    const t = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), r++);
  }
  return ((E.errors = e), r === 0);
}
E.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = {
  gsheets_peek: L,
  gsheets_read: C,
  gsheets_update: R,
  gsheets_delete_range: F,
  gsheets_create: x,
  gsheets_add_sheet: V,
  gsheets_delete_sheet: U,
  gsheets_format_range: W,
};
exports.NATIVE_TOOL_VALIDATORS = B;
exports.validate_gsheets_add_sheet = V;
exports.validate_gsheets_create = x;
exports.validate_gsheets_delete_range = F;
exports.validate_gsheets_delete_sheet = U;
exports.validate_gsheets_format_range = W;
exports.validate_gsheets_peek = L;
exports.validate_gsheets_read = C;
exports.validate_gsheets_update = R;
