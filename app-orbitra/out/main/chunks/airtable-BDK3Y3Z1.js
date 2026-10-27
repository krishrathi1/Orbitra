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
      (s._sentryDebugIds[a] = "ece67ee3-dd91-4be1-bb50-910167c4904c"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-ece67ee3-dd91-4be1-bb50-910167c4904c"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const K = I,
  me = {
    properties: {
      tables: {
        items: {
          properties: {
            fields: {
              items: {
                properties: {
                  description: { type: "string" },
                  name: { type: "string" },
                  options: {},
                  type: {
                    enum: [
                      "aiText",
                      "attachment",
                      "autoNumber",
                      "barcode",
                      "button",
                      "checkbox",
                      "singleCollaborator",
                      "count",
                      "createdBy",
                      "createdTime",
                      "currency",
                      "date",
                      "dateTime",
                      "duration",
                      "email",
                      "formula",
                      "lastModifiedBy",
                      "lastModifiedTime",
                      "multipleRecordLinks",
                      "multilineText",
                      "multipleLookupValues",
                      "multipleCollaborators",
                      "multipleSelects",
                      "number",
                      "percent",
                      "phoneNumber",
                      "rating",
                      "richText",
                      "rollup",
                      "singleLineText",
                      "singleSelect",
                      "externalSyncSource",
                      "url",
                    ],
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  };
function I(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = I.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.name === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tables === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tables" },
        message: "must have required property 'tables'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.workspaceId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "workspaceId" },
        message: "must have required property 'workspaceId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "name" || r === "tables" || r === "workspaceId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.name !== void 0 && typeof s.name != "string") {
      const r = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tables !== void 0) {
      let r = s.tables;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let o = 0; o < t; o++) {
          let p = r[o];
          if (p && typeof p == "object" && !Array.isArray(p)) {
            if (p.fields === void 0) {
              const n = {
                instancePath: a + "/tables/" + o,
                schemaPath: "#/properties/tables/items/required",
                keyword: "required",
                params: { missingProperty: "fields" },
                message: "must have required property 'fields'",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
            if (p.name === void 0) {
              const n = {
                instancePath: a + "/tables/" + o,
                schemaPath: "#/properties/tables/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property 'name'",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
            if (p.description !== void 0 && typeof p.description != "string") {
              const n = {
                instancePath: a + "/tables/" + o + "/description",
                schemaPath:
                  "#/properties/tables/items/properties/description/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
            if (p.fields !== void 0) {
              let n = p.fields;
              if (Array.isArray(n)) {
                const m = n.length;
                for (let u = 0; u < m; u++) {
                  let c = n[u];
                  if (c && typeof c == "object" && !Array.isArray(c)) {
                    if (c.name === void 0) {
                      const d = {
                        instancePath: a + "/tables/" + o + "/fields/" + u,
                        schemaPath:
                          "#/properties/tables/items/properties/fields/items/required",
                        keyword: "required",
                        params: { missingProperty: "name" },
                        message: "must have required property 'name'",
                      };
                      (e === null ? (e = [d]) : e.push(d), i++);
                    }
                    if (c.type === void 0) {
                      const d = {
                        instancePath: a + "/tables/" + o + "/fields/" + u,
                        schemaPath:
                          "#/properties/tables/items/properties/fields/items/required",
                        keyword: "required",
                        params: { missingProperty: "type" },
                        message: "must have required property 'type'",
                      };
                      (e === null ? (e = [d]) : e.push(d), i++);
                    }
                    if (
                      c.description !== void 0 &&
                      typeof c.description != "string"
                    ) {
                      const d = {
                        instancePath:
                          a + "/tables/" + o + "/fields/" + u + "/description",
                        schemaPath:
                          "#/properties/tables/items/properties/fields/items/properties/description/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string",
                      };
                      (e === null ? (e = [d]) : e.push(d), i++);
                    }
                    if (c.name !== void 0 && typeof c.name != "string") {
                      const d = {
                        instancePath:
                          a + "/tables/" + o + "/fields/" + u + "/name",
                        schemaPath:
                          "#/properties/tables/items/properties/fields/items/properties/name/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string",
                      };
                      (e === null ? (e = [d]) : e.push(d), i++);
                    }
                    if (c.type !== void 0) {
                      let d = c.type;
                      if (typeof d != "string") {
                        const g = {
                          instancePath:
                            a + "/tables/" + o + "/fields/" + u + "/type",
                          schemaPath:
                            "#/properties/tables/items/properties/fields/items/properties/type/type",
                          keyword: "type",
                          params: { type: "string" },
                          message: "must be string",
                        };
                        (e === null ? (e = [g]) : e.push(g), i++);
                      }
                      if (
                        !(
                          d === "aiText" ||
                          d === "attachment" ||
                          d === "autoNumber" ||
                          d === "barcode" ||
                          d === "button" ||
                          d === "checkbox" ||
                          d === "singleCollaborator" ||
                          d === "count" ||
                          d === "createdBy" ||
                          d === "createdTime" ||
                          d === "currency" ||
                          d === "date" ||
                          d === "dateTime" ||
                          d === "duration" ||
                          d === "email" ||
                          d === "formula" ||
                          d === "lastModifiedBy" ||
                          d === "lastModifiedTime" ||
                          d === "multipleRecordLinks" ||
                          d === "multilineText" ||
                          d === "multipleLookupValues" ||
                          d === "multipleCollaborators" ||
                          d === "multipleSelects" ||
                          d === "number" ||
                          d === "percent" ||
                          d === "phoneNumber" ||
                          d === "rating" ||
                          d === "richText" ||
                          d === "rollup" ||
                          d === "singleLineText" ||
                          d === "singleSelect" ||
                          d === "externalSyncSource" ||
                          d === "url"
                        )
                      ) {
                        const g = {
                          instancePath:
                            a + "/tables/" + o + "/fields/" + u + "/type",
                          schemaPath:
                            "#/properties/tables/items/properties/fields/items/properties/type/enum",
                          keyword: "enum",
                          params: {
                            allowedValues:
                              me.properties.tables.items.properties.fields.items
                                .properties.type.enum,
                          },
                          message: "must be equal to one of the allowed values",
                        };
                        (e === null ? (e = [g]) : e.push(g), i++);
                      }
                    }
                  } else {
                    const d = {
                      instancePath: a + "/tables/" + o + "/fields/" + u,
                      schemaPath:
                        "#/properties/tables/items/properties/fields/items/type",
                      keyword: "type",
                      params: { type: "object" },
                      message: "must be object",
                    };
                    (e === null ? (e = [d]) : e.push(d), i++);
                  }
                }
              } else {
                const m = {
                  instancePath: a + "/tables/" + o + "/fields",
                  schemaPath:
                    "#/properties/tables/items/properties/fields/type",
                  keyword: "type",
                  params: { type: "array" },
                  message: "must be array",
                };
                (e === null ? (e = [m]) : e.push(m), i++);
              }
            }
            if (p.name !== void 0 && typeof p.name != "string") {
              const n = {
                instancePath: a + "/tables/" + o + "/name",
                schemaPath: "#/properties/tables/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
          } else {
            const n = {
              instancePath: a + "/tables/" + o,
              schemaPath: "#/properties/tables/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
        }
      } else {
        const t = {
          instancePath: a + "/tables",
          schemaPath: "#/properties/tables/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.workspaceId !== void 0 && typeof s.workspaceId != "string") {
      const r = {
        instancePath: a + "/workspaceId",
        schemaPath: "#/properties/workspaceId/type",
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
const z = k,
  de = {
    properties: {
      fields: {
        items: {
          properties: {
            type: {
              enum: [
                "barcode",
                "checkbox",
                "singleCollaborator",
                "currency",
                "date",
                "dateTime",
                "duration",
                "email",
                "multipleRecordLinks",
                "multilineText",
                "multipleCollaborators",
                "multipleSelects",
                "number",
                "percent",
                "phoneNumber",
                "rating",
                "richText",
                "singleLineText",
                "singleSelect",
                "url",
              ],
            },
          },
        },
      },
    },
  };
function k(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = k.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.fields === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fields" },
        message: "must have required property 'fields'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "baseId" ||
          r === "description" ||
          r === "fields" ||
          r === "name"
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
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.description !== void 0 && typeof s.description != "string") {
      const r = {
        instancePath: a + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.fields !== void 0) {
      let r = s.fields;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let o = 0; o < t; o++) {
          let p = r[o];
          if (p && typeof p == "object" && !Array.isArray(p)) {
            if (p.name === void 0) {
              const n = {
                instancePath: a + "/fields/" + o,
                schemaPath: "#/properties/fields/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property 'name'",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
            if (p.type === void 0) {
              const n = {
                instancePath: a + "/fields/" + o,
                schemaPath: "#/properties/fields/items/required",
                keyword: "required",
                params: { missingProperty: "type" },
                message: "must have required property 'type'",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
            if (p.description !== void 0 && typeof p.description != "string") {
              const n = {
                instancePath: a + "/fields/" + o + "/description",
                schemaPath:
                  "#/properties/fields/items/properties/description/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
            if (p.name !== void 0 && typeof p.name != "string") {
              const n = {
                instancePath: a + "/fields/" + o + "/name",
                schemaPath: "#/properties/fields/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
            if (p.type !== void 0) {
              let n = p.type;
              if (typeof n != "string") {
                const m = {
                  instancePath: a + "/fields/" + o + "/type",
                  schemaPath: "#/properties/fields/items/properties/type/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [m]) : e.push(m), i++);
              }
              if (
                !(
                  n === "barcode" ||
                  n === "checkbox" ||
                  n === "singleCollaborator" ||
                  n === "currency" ||
                  n === "date" ||
                  n === "dateTime" ||
                  n === "duration" ||
                  n === "email" ||
                  n === "multipleRecordLinks" ||
                  n === "multilineText" ||
                  n === "multipleCollaborators" ||
                  n === "multipleSelects" ||
                  n === "number" ||
                  n === "percent" ||
                  n === "phoneNumber" ||
                  n === "rating" ||
                  n === "richText" ||
                  n === "singleLineText" ||
                  n === "singleSelect" ||
                  n === "url"
                )
              ) {
                const m = {
                  instancePath: a + "/fields/" + o + "/type",
                  schemaPath: "#/properties/fields/items/properties/type/enum",
                  keyword: "enum",
                  params: {
                    allowedValues:
                      de.properties.fields.items.properties.type.enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                (e === null ? (e = [m]) : e.push(m), i++);
              }
            }
          } else {
            const n = {
              instancePath: a + "/fields/" + o,
              schemaPath: "#/properties/fields/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
        }
      } else {
        const t = {
          instancePath: a + "/fields",
          schemaPath: "#/properties/fields/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const r = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
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
  return ((k.errors = e), i === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = w;
function w(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = w.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tableId" },
        message: "must have required property 'tableId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "baseId" ||
          r === "description" ||
          r === "name" ||
          r === "options" ||
          r === "tableId" ||
          r === "type"
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
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.description !== void 0 && typeof s.description != "string") {
      const r = {
        instancePath: a + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const r = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableId !== void 0 && typeof s.tableId != "string") {
      const r = {
        instancePath: a + "/tableId",
        schemaPath: "#/properties/tableId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.type !== void 0 && typeof s.type != "string") {
      const r = {
        instancePath: a + "/type",
        schemaPath: "#/properties/type/type",
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
  return ((w.errors = e), i === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const U = v;
function v(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = v.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.records === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "records" },
        message: "must have required property 'records'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableIdOrName === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tableIdOrName" },
        message: "must have required property 'tableIdOrName'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "baseId" || r === "records" || r === "tableIdOrName")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.records !== void 0) {
      let r = s.records;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let o = 0; o < t; o++) {
          let p = r[o];
          if (!(p && typeof p == "object" && !Array.isArray(p))) {
            const n = {
              instancePath: a + "/records/" + o,
              schemaPath: "#/properties/records/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
        }
      } else {
        const t = {
          instancePath: a + "/records",
          schemaPath: "#/properties/records/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.tableIdOrName !== void 0 && typeof s.tableIdOrName != "string") {
      const r = {
        instancePath: a + "/tableIdOrName",
        schemaPath: "#/properties/tableIdOrName/type",
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
  return ((v.errors = e), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const H = _,
  P = {
    properties: {
      baseId: { type: "string" },
      notificationUrl: { type: "string", format: "uri" },
      recordChangeScope: { type: "string" },
      dataTypes: {
        type: "array",
        items: {
          enum: ["tableData", "tableFields", "tableMetadata"],
          type: "string",
        },
      },
      changeTypes: {
        type: "array",
        items: { enum: ["add", "remove", "update"], type: "string" },
      },
      fromSources: {
        type: "array",
        items: {
          enum: [
            "client",
            "publicApi",
            "formSubmission",
            "formPageSubmission",
            "automation",
            "system",
            "sync",
            "anonymousUser",
            "unknown",
          ],
          type: "string",
        },
      },
      watchDataInFieldIds: { type: "array", items: { type: "string" } },
      watchSchemasOfFieldIds: { type: "array", items: { type: "string" } },
      includeCellValuesInFieldIds: {
        anyOf: [{ type: "array", items: { type: "string" } }, { const: "all" }],
      },
      includePreviousCellValues: { type: "boolean" },
      includePreviousFieldDefinitions: { type: "boolean" },
      specification: {
        type: "object",
        propertyNames: { type: "string" },
        additionalProperties: {},
      },
    },
  },
  Z = Object.prototype.hasOwnProperty,
  ue = require("ajv-formats/dist/formats").fullFormats.uri;
function _(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = _.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const o = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [o]) : e.push(o), i++);
    }
    for (const o in s)
      if (!Z.call(P.properties, o)) {
        const p = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: o },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const o = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), i++);
    }
    if (s.notificationUrl !== void 0) {
      let o = s.notificationUrl;
      if (typeof o == "string") {
        if (!ue(o)) {
          const p = {
            instancePath: a + "/notificationUrl",
            schemaPath: "#/properties/notificationUrl/format",
            keyword: "format",
            params: { format: "uri" },
            message: 'must match format "uri"',
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
      } else {
        const p = {
          instancePath: a + "/notificationUrl",
          schemaPath: "#/properties/notificationUrl/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (
      s.recordChangeScope !== void 0 &&
      typeof s.recordChangeScope != "string"
    ) {
      const o = {
        instancePath: a + "/recordChangeScope",
        schemaPath: "#/properties/recordChangeScope/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [o]) : e.push(o), i++);
    }
    if (s.dataTypes !== void 0) {
      let o = s.dataTypes;
      if (Array.isArray(o)) {
        const p = o.length;
        for (let n = 0; n < p; n++) {
          let m = o[n];
          if (typeof m != "string") {
            const u = {
              instancePath: a + "/dataTypes/" + n,
              schemaPath: "#/properties/dataTypes/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [u]) : e.push(u), i++);
          }
          if (
            !(m === "tableData" || m === "tableFields" || m === "tableMetadata")
          ) {
            const u = {
              instancePath: a + "/dataTypes/" + n,
              schemaPath: "#/properties/dataTypes/items/enum",
              keyword: "enum",
              params: { allowedValues: P.properties.dataTypes.items.enum },
              message: "must be equal to one of the allowed values",
            };
            (e === null ? (e = [u]) : e.push(u), i++);
          }
        }
      } else {
        const p = {
          instancePath: a + "/dataTypes",
          schemaPath: "#/properties/dataTypes/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (s.changeTypes !== void 0) {
      let o = s.changeTypes;
      if (Array.isArray(o)) {
        const p = o.length;
        for (let n = 0; n < p; n++) {
          let m = o[n];
          if (typeof m != "string") {
            const u = {
              instancePath: a + "/changeTypes/" + n,
              schemaPath: "#/properties/changeTypes/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [u]) : e.push(u), i++);
          }
          if (!(m === "add" || m === "remove" || m === "update")) {
            const u = {
              instancePath: a + "/changeTypes/" + n,
              schemaPath: "#/properties/changeTypes/items/enum",
              keyword: "enum",
              params: { allowedValues: P.properties.changeTypes.items.enum },
              message: "must be equal to one of the allowed values",
            };
            (e === null ? (e = [u]) : e.push(u), i++);
          }
        }
      } else {
        const p = {
          instancePath: a + "/changeTypes",
          schemaPath: "#/properties/changeTypes/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (s.fromSources !== void 0) {
      let o = s.fromSources;
      if (Array.isArray(o)) {
        const p = o.length;
        for (let n = 0; n < p; n++) {
          let m = o[n];
          if (typeof m != "string") {
            const u = {
              instancePath: a + "/fromSources/" + n,
              schemaPath: "#/properties/fromSources/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [u]) : e.push(u), i++);
          }
          if (
            !(
              m === "client" ||
              m === "publicApi" ||
              m === "formSubmission" ||
              m === "formPageSubmission" ||
              m === "automation" ||
              m === "system" ||
              m === "sync" ||
              m === "anonymousUser" ||
              m === "unknown"
            )
          ) {
            const u = {
              instancePath: a + "/fromSources/" + n,
              schemaPath: "#/properties/fromSources/items/enum",
              keyword: "enum",
              params: { allowedValues: P.properties.fromSources.items.enum },
              message: "must be equal to one of the allowed values",
            };
            (e === null ? (e = [u]) : e.push(u), i++);
          }
        }
      } else {
        const p = {
          instancePath: a + "/fromSources",
          schemaPath: "#/properties/fromSources/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (s.watchDataInFieldIds !== void 0) {
      let o = s.watchDataInFieldIds;
      if (Array.isArray(o)) {
        const p = o.length;
        for (let n = 0; n < p; n++)
          if (typeof o[n] != "string") {
            const m = {
              instancePath: a + "/watchDataInFieldIds/" + n,
              schemaPath: "#/properties/watchDataInFieldIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
      } else {
        const p = {
          instancePath: a + "/watchDataInFieldIds",
          schemaPath: "#/properties/watchDataInFieldIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (s.watchSchemasOfFieldIds !== void 0) {
      let o = s.watchSchemasOfFieldIds;
      if (Array.isArray(o)) {
        const p = o.length;
        for (let n = 0; n < p; n++)
          if (typeof o[n] != "string") {
            const m = {
              instancePath: a + "/watchSchemasOfFieldIds/" + n,
              schemaPath: "#/properties/watchSchemasOfFieldIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
      } else {
        const p = {
          instancePath: a + "/watchSchemasOfFieldIds",
          schemaPath: "#/properties/watchSchemasOfFieldIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
      }
    }
    if (s.includeCellValuesInFieldIds !== void 0) {
      let o = s.includeCellValuesInFieldIds;
      const p = i;
      let n = !1;
      const m = i;
      if (Array.isArray(o)) {
        const c = o.length;
        for (let d = 0; d < c; d++)
          if (typeof o[d] != "string") {
            const g = {
              instancePath: a + "/includeCellValuesInFieldIds/" + d,
              schemaPath:
                "#/properties/includeCellValuesInFieldIds/anyOf/0/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [g]) : e.push(g), i++);
          }
      } else {
        const c = {
          instancePath: a + "/includeCellValuesInFieldIds",
          schemaPath: "#/properties/includeCellValuesInFieldIds/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [c]) : e.push(c), i++);
      }
      var r = m === i;
      n = n || r;
      const u = i;
      if (o !== "all") {
        const c = {
          instancePath: a + "/includeCellValuesInFieldIds",
          schemaPath: "#/properties/includeCellValuesInFieldIds/anyOf/1/const",
          keyword: "const",
          params: { allowedValue: "all" },
          message: "must be equal to constant",
        };
        (e === null ? (e = [c]) : e.push(c), i++);
      }
      var r = u === i;
      if (((n = n || r), n))
        ((i = p), e !== null && (p ? (e.length = p) : (e = null)));
      else {
        const c = {
          instancePath: a + "/includeCellValuesInFieldIds",
          schemaPath: "#/properties/includeCellValuesInFieldIds/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [c]) : e.push(c), i++);
      }
    }
    if (
      s.includePreviousCellValues !== void 0 &&
      typeof s.includePreviousCellValues != "boolean"
    ) {
      const o = {
        instancePath: a + "/includePreviousCellValues",
        schemaPath: "#/properties/includePreviousCellValues/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [o]) : e.push(o), i++);
    }
    if (
      s.includePreviousFieldDefinitions !== void 0 &&
      typeof s.includePreviousFieldDefinitions != "boolean"
    ) {
      const o = {
        instancePath: a + "/includePreviousFieldDefinitions",
        schemaPath: "#/properties/includePreviousFieldDefinitions/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [o]) : e.push(o), i++);
    }
    if (s.specification !== void 0) {
      let o = s.specification;
      if (o && typeof o == "object" && !Array.isArray(o))
        for (const p in o) {
          const n = i;
          if (typeof p != "string") {
            const m = {
              instancePath: a + "/specification",
              schemaPath: "#/properties/specification/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: p,
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
          var t = n === i;
          if (!t) {
            const m = {
              instancePath: a + "/specification",
              schemaPath: "#/properties/specification/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: p },
              message: "property name must be valid",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
        }
      else {
        const p = {
          instancePath: a + "/specification",
          schemaPath: "#/properties/specification/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [p]) : e.push(p), i++);
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
    (e === null ? (e = [o]) : e.push(o), i++);
  }
  return ((_.errors = e), i === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const J = q;
function q(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = q.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tableId" },
        message: "must have required property 'tableId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.fieldId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fieldId" },
        message: "must have required property 'fieldId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "baseId" || r === "tableId" || r === "fieldId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableId !== void 0 && typeof s.tableId != "string") {
      const r = {
        instancePath: a + "/tableId",
        schemaPath: "#/properties/tableId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.fieldId !== void 0 && typeof s.fieldId != "string") {
      const r = {
        instancePath: a + "/fieldId",
        schemaPath: "#/properties/fieldId/type",
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
  return ((q.errors = e), i === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = N;
function N(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = N.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tableId" },
        message: "must have required property 'tableId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "baseId" || r === "tableId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableId !== void 0 && typeof s.tableId != "string") {
      const r = {
        instancePath: a + "/tableId",
        schemaPath: "#/properties/tableId/type",
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
  return ((N.errors = e), i === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = T;
function T(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = T.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.webhookId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "webhookId" },
        message: "must have required property 'webhookId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "baseId" || r === "webhookId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.webhookId !== void 0 && typeof s.webhookId != "string") {
      const r = {
        instancePath: a + "/webhookId",
        schemaPath: "#/properties/webhookId/type",
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
const Q = j;
function j(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = j.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (r !== "baseId") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
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
  return ((j.errors = e), i === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = O;
function O(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = O.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableIdOrName === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tableIdOrName" },
        message: "must have required property 'tableIdOrName'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.recordId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "recordId" },
        message: "must have required property 'recordId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "baseId" || r === "tableIdOrName" || r === "recordId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableIdOrName !== void 0 && typeof s.tableIdOrName != "string") {
      const r = {
        instancePath: a + "/tableIdOrName",
        schemaPath: "#/properties/tableIdOrName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.recordId !== void 0 && typeof s.recordId != "string") {
      const r = {
        instancePath: a + "/recordId",
        schemaPath: "#/properties/recordId/type",
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
const $ = D;
function D(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = D.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (!(r === "start" || r === "end" || r === "cursor" || r === "offset")) {
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
    if (s.offset !== void 0 && typeof s.offset != "string") {
      const r = {
        instancePath: a + "/offset",
        schemaPath: "#/properties/offset/type",
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
const ee = E,
  A = {
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
      baseId: { type: "string" },
      cellFormat: { enum: ["json", "string"], type: "string" },
      fields: { type: "array", items: { type: "string" } },
      filterByFormula: { type: "string" },
      maxRecords: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      offset: { type: "string" },
      pageSize: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      recordMetadata: { type: "array", items: { type: "string" } },
      returnFieldsByFieldId: { type: "boolean" },
      sort: {
        type: "array",
        items: {
          type: "object",
          properties: {
            direction: { enum: ["asc", "desc"], type: "string" },
            field: { type: "string" },
          },
          required: ["field"],
        },
      },
      tableIdOrName: { type: "string" },
      timeZone: {
        enum: [
          "utc",
          "client",
          "Africa/Abidjan",
          "Africa/Accra",
          "Africa/Addis_Ababa",
          "Africa/Algiers",
          "Africa/Asmara",
          "Africa/Bamako",
          "Africa/Bangui",
          "Africa/Banjul",
          "Africa/Bissau",
          "Africa/Blantyre",
          "Africa/Brazzaville",
          "Africa/Bujumbura",
          "Africa/Cairo",
          "Africa/Casablanca",
          "Africa/Ceuta",
          "Africa/Conakry",
          "Africa/Dakar",
          "Africa/Dar_es_Salaam",
          "Africa/Djibouti",
          "Africa/Douala",
          "Africa/El_Aaiun",
          "Africa/Freetown",
          "Africa/Gaborone",
          "Africa/Harare",
          "Africa/Johannesburg",
          "Africa/Juba",
          "Africa/Kampala",
          "Africa/Khartoum",
          "Africa/Kigali",
          "Africa/Kinshasa",
          "Africa/Lagos",
          "Africa/Libreville",
          "Africa/Lome",
          "Africa/Luanda",
          "Africa/Lubumbashi",
          "Africa/Lusaka",
          "Africa/Malabo",
          "Africa/Maputo",
          "Africa/Maseru",
          "Africa/Mbabane",
          "Africa/Mogadishu",
          "Africa/Monrovia",
          "Africa/Nairobi",
          "Africa/Ndjamena",
          "Africa/Niamey",
          "Africa/Nouakchott",
          "Africa/Ouagadougou",
          "Africa/Porto-Novo",
          "Africa/Sao_Tome",
          "Africa/Tripoli",
          "Africa/Tunis",
          "Africa/Windhoek",
          "America/Adak",
          "America/Anchorage",
          "America/Anguilla",
          "America/Antigua",
          "America/Araguaina",
          "America/Argentina/Buenos_Aires",
          "America/Argentina/Catamarca",
          "America/Argentina/Cordoba",
          "America/Argentina/Jujuy",
          "America/Argentina/La_Rioja",
          "America/Argentina/Mendoza",
          "America/Argentina/Rio_Gallegos",
          "America/Argentina/Salta",
          "America/Argentina/San_Juan",
          "America/Argentina/San_Luis",
          "America/Argentina/Tucuman",
          "America/Argentina/Ushuaia",
          "America/Aruba",
          "America/Asuncion",
          "America/Atikokan",
          "America/Bahia",
          "America/Bahia_Banderas",
          "America/Barbados",
          "America/Belem",
          "America/Belize",
          "America/Blanc-Sablon",
          "America/Boa_Vista",
          "America/Bogota",
          "America/Boise",
          "America/Cambridge_Bay",
          "America/Campo_Grande",
          "America/Cancun",
          "America/Caracas",
          "America/Cayenne",
          "America/Cayman",
          "America/Chicago",
          "America/Chihuahua",
          "America/Costa_Rica",
          "America/Creston",
          "America/Cuiaba",
          "America/Curacao",
          "America/Danmarkshavn",
          "America/Dawson",
          "America/Dawson_Creek",
          "America/Denver",
          "America/Detroit",
          "America/Dominica",
          "America/Edmonton",
          "America/Eirunepe",
          "America/El_Salvador",
          "America/Fort_Nelson",
          "America/Fortaleza",
          "America/Glace_Bay",
          "America/Godthab",
          "America/Goose_Bay",
          "America/Grand_Turk",
          "America/Grenada",
          "America/Guadeloupe",
          "America/Guatemala",
          "America/Guayaquil",
          "America/Guyana",
          "America/Halifax",
          "America/Havana",
          "America/Hermosillo",
          "America/Indiana/Indianapolis",
          "America/Indiana/Knox",
          "America/Indiana/Marengo",
          "America/Indiana/Petersburg",
          "America/Indiana/Tell_City",
          "America/Indiana/Vevay",
          "America/Indiana/Vincennes",
          "America/Indiana/Winamac",
          "America/Inuvik",
          "America/Iqaluit",
          "America/Jamaica",
          "America/Juneau",
          "America/Kentucky/Louisville",
          "America/Kentucky/Monticello",
          "America/Kralendijk",
          "America/La_Paz",
          "America/Lima",
          "America/Los_Angeles",
          "America/Lower_Princes",
          "America/Maceio",
          "America/Managua",
          "America/Manaus",
          "America/Marigot",
          "America/Martinique",
          "America/Matamoros",
          "America/Mazatlan",
          "America/Menominee",
          "America/Merida",
          "America/Metlakatla",
          "America/Mexico_City",
          "America/Miquelon",
          "America/Moncton",
          "America/Monterrey",
          "America/Montevideo",
          "America/Montserrat",
          "America/Nassau",
          "America/New_York",
          "America/Nipigon",
          "America/Nome",
          "America/Noronha",
          "America/North_Dakota/Beulah",
          "America/North_Dakota/Center",
          "America/North_Dakota/New_Salem",
          "America/Nuuk",
          "America/Ojinaga",
          "America/Panama",
          "America/Pangnirtung",
          "America/Paramaribo",
          "America/Phoenix",
          "America/Port-au-Prince",
          "America/Port_of_Spain",
          "America/Porto_Velho",
          "America/Puerto_Rico",
          "America/Punta_Arenas",
          "America/Rainy_River",
          "America/Rankin_Inlet",
          "America/Recife",
          "America/Regina",
          "America/Resolute",
          "America/Rio_Branco",
          "America/Santarem",
          "America/Santiago",
          "America/Santo_Domingo",
          "America/Sao_Paulo",
          "America/Scoresbysund",
          "America/Sitka",
          "America/St_Barthelemy",
          "America/St_Johns",
          "America/St_Kitts",
          "America/St_Lucia",
          "America/St_Thomas",
          "America/St_Vincent",
          "America/Swift_Current",
          "America/Tegucigalpa",
          "America/Thule",
          "America/Thunder_Bay",
          "America/Tijuana",
          "America/Toronto",
          "America/Tortola",
          "America/Vancouver",
          "America/Whitehorse",
          "America/Winnipeg",
          "America/Yakutat",
          "America/Yellowknife",
          "Antarctica/Casey",
          "Antarctica/Davis",
          "Antarctica/DumontDUrville",
          "Antarctica/Macquarie",
          "Antarctica/Mawson",
          "Antarctica/McMurdo",
          "Antarctica/Palmer",
          "Antarctica/Rothera",
          "Antarctica/Syowa",
          "Antarctica/Troll",
          "Antarctica/Vostok",
          "Arctic/Longyearbyen",
          "Asia/Aden",
          "Asia/Almaty",
          "Asia/Amman",
          "Asia/Anadyr",
          "Asia/Aqtau",
          "Asia/Aqtobe",
          "Asia/Ashgabat",
          "Asia/Atyrau",
          "Asia/Baghdad",
          "Asia/Bahrain",
          "Asia/Baku",
          "Asia/Bangkok",
          "Asia/Barnaul",
          "Asia/Beirut",
          "Asia/Bishkek",
          "Asia/Brunei",
          "Asia/Chita",
          "Asia/Choibalsan",
          "Asia/Colombo",
          "Asia/Damascus",
          "Asia/Dhaka",
          "Asia/Dili",
          "Asia/Dubai",
          "Asia/Dushanbe",
          "Asia/Famagusta",
          "Asia/Gaza",
          "Asia/Hebron",
          "Asia/Ho_Chi_Minh",
          "Asia/Hong_Kong",
          "Asia/Hovd",
          "Asia/Irkutsk",
          "Asia/Istanbul",
          "Asia/Jakarta",
          "Asia/Jayapura",
          "Asia/Jerusalem",
          "Asia/Kabul",
          "Asia/Kamchatka",
          "Asia/Karachi",
          "Asia/Kathmandu",
          "Asia/Khandyga",
          "Asia/Kolkata",
          "Asia/Krasnoyarsk",
          "Asia/Kuala_Lumpur",
          "Asia/Kuching",
          "Asia/Kuwait",
          "Asia/Macau",
          "Asia/Magadan",
          "Asia/Makassar",
          "Asia/Manila",
          "Asia/Muscat",
          "Asia/Nicosia",
          "Asia/Novokuznetsk",
          "Asia/Novosibirsk",
          "Asia/Omsk",
          "Asia/Oral",
          "Asia/Phnom_Penh",
          "Asia/Pontianak",
          "Asia/Pyongyang",
          "Asia/Qatar",
          "Asia/Qostanay",
          "Asia/Qyzylorda",
          "Asia/Rangoon",
          "Asia/Riyadh",
          "Asia/Sakhalin",
          "Asia/Samarkand",
          "Asia/Seoul",
          "Asia/Shanghai",
          "Asia/Singapore",
          "Asia/Srednekolymsk",
          "Asia/Taipei",
          "Asia/Tashkent",
          "Asia/Tbilisi",
          "Asia/Tehran",
          "Asia/Thimphu",
          "Asia/Tokyo",
          "Asia/Tomsk",
          "Asia/Ulaanbaatar",
          "Asia/Urumqi",
          "Asia/Ust-Nera",
          "Asia/Vientiane",
          "Asia/Vladivostok",
          "Asia/Yakutsk",
          "Asia/Yangon",
          "Asia/Yekaterinburg",
          "Asia/Yerevan",
          "Atlantic/Azores",
          "Atlantic/Bermuda",
          "Atlantic/Canary",
          "Atlantic/Cape_Verde",
          "Atlantic/Faroe",
          "Atlantic/Madeira",
          "Atlantic/Reykjavik",
          "Atlantic/South_Georgia",
          "Atlantic/St_Helena",
          "Atlantic/Stanley",
          "Australia/Adelaide",
          "Australia/Brisbane",
          "Australia/Broken_Hill",
          "Australia/Currie",
          "Australia/Darwin",
          "Australia/Eucla",
          "Australia/Hobart",
          "Australia/Lindeman",
          "Australia/Lord_Howe",
          "Australia/Melbourne",
          "Australia/Perth",
          "Australia/Sydney",
          "Europe/Amsterdam",
          "Europe/Andorra",
          "Europe/Astrakhan",
          "Europe/Athens",
          "Europe/Belgrade",
          "Europe/Berlin",
          "Europe/Bratislava",
          "Europe/Brussels",
          "Europe/Bucharest",
          "Europe/Budapest",
          "Europe/Busingen",
          "Europe/Chisinau",
          "Europe/Copenhagen",
          "Europe/Dublin",
          "Europe/Gibraltar",
          "Europe/Guernsey",
          "Europe/Helsinki",
          "Europe/Isle_of_Man",
          "Europe/Istanbul",
          "Europe/Jersey",
          "Europe/Kaliningrad",
          "Europe/Kiev",
          "Europe/Kirov",
          "Europe/Lisbon",
          "Europe/Ljubljana",
          "Europe/London",
          "Europe/Luxembourg",
          "Europe/Madrid",
          "Europe/Malta",
          "Europe/Mariehamn",
          "Europe/Minsk",
          "Europe/Monaco",
          "Europe/Moscow",
          "Europe/Nicosia",
          "Europe/Oslo",
          "Europe/Paris",
          "Europe/Podgorica",
          "Europe/Prague",
          "Europe/Riga",
          "Europe/Rome",
          "Europe/Samara",
          "Europe/San_Marino",
          "Europe/Sarajevo",
          "Europe/Saratov",
          "Europe/Simferopol",
          "Europe/Skopje",
          "Europe/Sofia",
          "Europe/Stockholm",
          "Europe/Tallinn",
          "Europe/Tirane",
          "Europe/Ulyanovsk",
          "Europe/Uzhgorod",
          "Europe/Vaduz",
          "Europe/Vatican",
          "Europe/Vienna",
          "Europe/Vilnius",
          "Europe/Volgograd",
          "Europe/Warsaw",
          "Europe/Zagreb",
          "Europe/Zaporozhye",
          "Europe/Zurich",
          "Indian/Antananarivo",
          "Indian/Chagos",
          "Indian/Christmas",
          "Indian/Cocos",
          "Indian/Comoro",
          "Indian/Kerguelen",
          "Indian/Mahe",
          "Indian/Maldives",
          "Indian/Mauritius",
          "Indian/Mayotte",
          "Indian/Reunion",
          "Pacific/Apia",
          "Pacific/Auckland",
          "Pacific/Bougainville",
          "Pacific/Chatham",
          "Pacific/Chuuk",
          "Pacific/Easter",
          "Pacific/Efate",
          "Pacific/Enderbury",
          "Pacific/Fakaofo",
          "Pacific/Fiji",
          "Pacific/Funafuti",
          "Pacific/Galapagos",
          "Pacific/Gambier",
          "Pacific/Guadalcanal",
          "Pacific/Guam",
          "Pacific/Honolulu",
          "Pacific/Kanton",
          "Pacific/Kiritimati",
          "Pacific/Kosrae",
          "Pacific/Kwajalein",
          "Pacific/Majuro",
          "Pacific/Marquesas",
          "Pacific/Midway",
          "Pacific/Nauru",
          "Pacific/Niue",
          "Pacific/Norfolk",
          "Pacific/Noumea",
          "Pacific/Pago_Pago",
          "Pacific/Palau",
          "Pacific/Pitcairn",
          "Pacific/Pohnpei",
          "Pacific/Port_Moresby",
          "Pacific/Rarotonga",
          "Pacific/Saipan",
          "Pacific/Tahiti",
          "Pacific/Tarawa",
          "Pacific/Tongatapu",
          "Pacific/Wake",
          "Pacific/Wallis",
        ],
        type: "string",
        title: "AirtableTimeZone",
      },
      userLocale: { type: "string" },
      view: { type: "string" },
    },
  },
  ce = require("ajv/dist/runtime/equal").default;
function E(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = E.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableIdOrName === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tableIdOrName" },
        message: "must have required property 'tableIdOrName'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!Z.call(A.properties, r)) {
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
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.cellFormat !== void 0) {
      let r = s.cellFormat;
      if (typeof r != "string") {
        const t = {
          instancePath: a + "/cellFormat",
          schemaPath: "#/properties/cellFormat/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "json" || r === "string")) {
        const t = {
          instancePath: a + "/cellFormat",
          schemaPath: "#/properties/cellFormat/enum",
          keyword: "enum",
          params: { allowedValues: A.properties.cellFormat.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.fields !== void 0) {
      let r = s.fields;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let o = 0; o < t; o++)
          if (typeof r[o] != "string") {
            const p = {
              instancePath: a + "/fields/" + o,
              schemaPath: "#/properties/fields/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const t = {
          instancePath: a + "/fields",
          schemaPath: "#/properties/fields/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.filterByFormula !== void 0 && typeof s.filterByFormula != "string") {
      const r = {
        instancePath: a + "/filterByFormula",
        schemaPath: "#/properties/filterByFormula/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.maxRecords !== void 0) {
      let r = s.maxRecords;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/maxRecords",
          schemaPath: "#/properties/maxRecords/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/maxRecords",
            schemaPath: "#/properties/maxRecords/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/maxRecords",
            schemaPath: "#/properties/maxRecords/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.offset !== void 0 && typeof s.offset != "string") {
      const r = {
        instancePath: a + "/offset",
        schemaPath: "#/properties/offset/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.pageSize !== void 0) {
      let r = s.pageSize;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/pageSize",
          schemaPath: "#/properties/pageSize/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/pageSize",
            schemaPath: "#/properties/pageSize/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/pageSize",
            schemaPath: "#/properties/pageSize/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.recordMetadata !== void 0) {
      let r = s.recordMetadata;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let o = 0; o < t; o++)
          if (typeof r[o] != "string") {
            const p = {
              instancePath: a + "/recordMetadata/" + o,
              schemaPath: "#/properties/recordMetadata/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const t = {
          instancePath: a + "/recordMetadata",
          schemaPath: "#/properties/recordMetadata/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (
      s.returnFieldsByFieldId !== void 0 &&
      typeof s.returnFieldsByFieldId != "boolean"
    ) {
      const r = {
        instancePath: a + "/returnFieldsByFieldId",
        schemaPath: "#/properties/returnFieldsByFieldId/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.sort !== void 0) {
      let r = s.sort;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let o = 0; o < t; o++) {
          let p = r[o];
          if (p && typeof p == "object" && !Array.isArray(p)) {
            if (p.field === void 0) {
              const n = {
                instancePath: a + "/sort/" + o,
                schemaPath: "#/properties/sort/items/required",
                keyword: "required",
                params: { missingProperty: "field" },
                message: "must have required property 'field'",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
            if (p.direction !== void 0) {
              let n = p.direction;
              if (typeof n != "string") {
                const m = {
                  instancePath: a + "/sort/" + o + "/direction",
                  schemaPath:
                    "#/properties/sort/items/properties/direction/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [m]) : e.push(m), i++);
              }
              if (!(n === "asc" || n === "desc")) {
                const m = {
                  instancePath: a + "/sort/" + o + "/direction",
                  schemaPath:
                    "#/properties/sort/items/properties/direction/enum",
                  keyword: "enum",
                  params: {
                    allowedValues:
                      A.properties.sort.items.properties.direction.enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                (e === null ? (e = [m]) : e.push(m), i++);
              }
            }
            if (p.field !== void 0 && typeof p.field != "string") {
              const n = {
                instancePath: a + "/sort/" + o + "/field",
                schemaPath: "#/properties/sort/items/properties/field/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [n]) : e.push(n), i++);
            }
          } else {
            const n = {
              instancePath: a + "/sort/" + o,
              schemaPath: "#/properties/sort/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
        }
      } else {
        const t = {
          instancePath: a + "/sort",
          schemaPath: "#/properties/sort/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.tableIdOrName !== void 0 && typeof s.tableIdOrName != "string") {
      const r = {
        instancePath: a + "/tableIdOrName",
        schemaPath: "#/properties/tableIdOrName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.timeZone !== void 0) {
      let r = s.timeZone;
      if (typeof r != "string") {
        const o = {
          instancePath: a + "/timeZone",
          schemaPath: "#/properties/timeZone/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      let t;
      t = !1;
      for (const o of A.properties.timeZone.enum)
        if (ce(r, o)) {
          t = !0;
          break;
        }
      if (!t) {
        const o = {
          instancePath: a + "/timeZone",
          schemaPath: "#/properties/timeZone/enum",
          keyword: "enum",
          params: { allowedValues: A.properties.timeZone.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (s.userLocale !== void 0 && typeof s.userLocale != "string") {
      const r = {
        instancePath: a + "/userLocale",
        schemaPath: "#/properties/userLocale/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.view !== void 0 && typeof s.view != "string") {
      const r = {
        instancePath: a + "/view",
        schemaPath: "#/properties/view/type",
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
const re = S;
function S(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = S.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.webhookId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "webhookId" },
        message: "must have required property 'webhookId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "baseId" ||
          r === "webhookId" ||
          r === "cursor" ||
          r === "limit"
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
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.webhookId !== void 0 && typeof s.webhookId != "string") {
      const r = {
        instancePath: a + "/webhookId",
        schemaPath: "#/properties/webhookId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.cursor !== void 0) {
      let r = s.cursor;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: a + "/cursor",
          schemaPath: "#/properties/cursor/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const t = {
            instancePath: a + "/cursor",
            schemaPath: "#/properties/cursor/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: a + "/cursor",
            schemaPath: "#/properties/cursor/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
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
        if (r > 50 || isNaN(r)) {
          const t = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 50 },
            message: "must be <= 50",
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
const se = M;
function M(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = M.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (r !== "baseId") {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
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
const ie = F;
function F(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = F.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  )
    for (const r in s) {
      const t = {
        instancePath: a,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: r },
        message: "must NOT have additional properties",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  else {
    const r = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((F.errors = e), i === 0);
}
F.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ae = C;
function C(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = C.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.webhookId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "webhookId" },
        message: "must have required property 'webhookId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "baseId" || r === "webhookId")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.webhookId !== void 0 && typeof s.webhookId != "string") {
      const r = {
        instancePath: a + "/webhookId",
        schemaPath: "#/properties/webhookId/type",
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
const te = B;
function B(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = B.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tableId" },
        message: "must have required property 'tableId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.fieldId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fieldId" },
        message: "must have required property 'fieldId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "baseId" ||
          r === "tableId" ||
          r === "fieldId" ||
          r === "name" ||
          r === "description"
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
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableId !== void 0 && typeof s.tableId != "string") {
      const r = {
        instancePath: a + "/tableId",
        schemaPath: "#/properties/tableId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.fieldId !== void 0 && typeof s.fieldId != "string") {
      const r = {
        instancePath: a + "/fieldId",
        schemaPath: "#/properties/fieldId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const r = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.description !== void 0 && typeof s.description != "string") {
      const r = {
        instancePath: a + "/description",
        schemaPath: "#/properties/description/type",
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
const oe = x;
function x(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = x.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.records === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "records" },
        message: "must have required property 'records'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.tableIdOrName === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tableIdOrName" },
        message: "must have required property 'tableIdOrName'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in s)
      if (!(t === "baseId" || t === "records" || t === "tableIdOrName")) {
        const o = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const t = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.records !== void 0) {
      let t = s.records;
      if (Array.isArray(t)) {
        const o = t.length;
        for (let p = 0; p < o; p++) {
          let n = t[p];
          if (n && typeof n == "object" && !Array.isArray(n)) {
            if (n.fields === void 0) {
              const m = {
                instancePath: a + "/records/" + p,
                schemaPath: "#/properties/records/items/required",
                keyword: "required",
                params: { missingProperty: "fields" },
                message: "must have required property 'fields'",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (n.id === void 0) {
              const m = {
                instancePath: a + "/records/" + p,
                schemaPath: "#/properties/records/items/required",
                keyword: "required",
                params: { missingProperty: "id" },
                message: "must have required property 'id'",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (n.fields !== void 0) {
              let m = n.fields;
              if (m && typeof m == "object" && !Array.isArray(m))
                for (const u in m) {
                  const c = i;
                  if (typeof u != "string") {
                    const d = {
                      instancePath: a + "/records/" + p + "/fields",
                      schemaPath:
                        "#/properties/records/items/properties/fields/propertyNames/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                      propertyName: u,
                    };
                    (e === null ? (e = [d]) : e.push(d), i++);
                  }
                  var r = c === i;
                  if (!r) {
                    const d = {
                      instancePath: a + "/records/" + p + "/fields",
                      schemaPath:
                        "#/properties/records/items/properties/fields/propertyNames",
                      keyword: "propertyNames",
                      params: { propertyName: u },
                      message: "property name must be valid",
                    };
                    (e === null ? (e = [d]) : e.push(d), i++);
                  }
                }
              else {
                const u = {
                  instancePath: a + "/records/" + p + "/fields",
                  schemaPath:
                    "#/properties/records/items/properties/fields/type",
                  keyword: "type",
                  params: { type: "object" },
                  message: "must be object",
                };
                (e === null ? (e = [u]) : e.push(u), i++);
              }
            }
            if (n.id !== void 0 && typeof n.id != "string") {
              const m = {
                instancePath: a + "/records/" + p + "/id",
                schemaPath: "#/properties/records/items/properties/id/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
          } else {
            const m = {
              instancePath: a + "/records/" + p,
              schemaPath: "#/properties/records/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
        }
      } else {
        const o = {
          instancePath: a + "/records",
          schemaPath: "#/properties/records/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (s.tableIdOrName !== void 0 && typeof s.tableIdOrName != "string") {
      const t = {
        instancePath: a + "/tableIdOrName",
        schemaPath: "#/properties/tableIdOrName/type",
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
  return ((x.errors = e), i === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ne = V;
function V(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = V.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tableId" },
        message: "must have required property 'tableId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (
        !(
          r === "baseId" ||
          r === "tableId" ||
          r === "name" ||
          r === "description"
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
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableId !== void 0 && typeof s.tableId != "string") {
      const r = {
        instancePath: a + "/tableId",
        schemaPath: "#/properties/tableId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.name !== void 0 && typeof s.name != "string") {
      const r = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.description !== void 0 && typeof s.description != "string") {
      const r = {
        instancePath: a + "/description",
        schemaPath: "#/properties/description/type",
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
const pe = L;
function L(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = L.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.tableIdOrName === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tableIdOrName" },
        message: "must have required property 'tableIdOrName'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.fieldsToMergeOn === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fieldsToMergeOn" },
        message: "must have required property 'fieldsToMergeOn'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.records === void 0) {
      const t = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "records" },
        message: "must have required property 'records'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in s)
      if (
        !(
          t === "baseId" ||
          t === "tableIdOrName" ||
          t === "fieldsToMergeOn" ||
          t === "records" ||
          t === "typecast" ||
          t === "returnFieldsByFieldId"
        )
      ) {
        const o = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const t = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.tableIdOrName !== void 0 && typeof s.tableIdOrName != "string") {
      const t = {
        instancePath: a + "/tableIdOrName",
        schemaPath: "#/properties/tableIdOrName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.fieldsToMergeOn !== void 0) {
      let t = s.fieldsToMergeOn;
      if (Array.isArray(t)) {
        if (t.length > 3) {
          const p = {
            instancePath: a + "/fieldsToMergeOn",
            schemaPath: "#/properties/fieldsToMergeOn/maxItems",
            keyword: "maxItems",
            params: { limit: 3 },
            message: "must NOT have more than 3 items",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        if (t.length < 1) {
          const p = {
            instancePath: a + "/fieldsToMergeOn",
            schemaPath: "#/properties/fieldsToMergeOn/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        const o = t.length;
        for (let p = 0; p < o; p++)
          if (typeof t[p] != "string") {
            const n = {
              instancePath: a + "/fieldsToMergeOn/" + p,
              schemaPath: "#/properties/fieldsToMergeOn/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [n]) : e.push(n), i++);
          }
      } else {
        const o = {
          instancePath: a + "/fieldsToMergeOn",
          schemaPath: "#/properties/fieldsToMergeOn/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (s.records !== void 0) {
      let t = s.records;
      if (Array.isArray(t)) {
        if (t.length > 10) {
          const p = {
            instancePath: a + "/records",
            schemaPath: "#/properties/records/maxItems",
            keyword: "maxItems",
            params: { limit: 10 },
            message: "must NOT have more than 10 items",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        if (t.length < 1) {
          const p = {
            instancePath: a + "/records",
            schemaPath: "#/properties/records/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [p]) : e.push(p), i++);
        }
        const o = t.length;
        for (let p = 0; p < o; p++) {
          let n = t[p];
          if (n && typeof n == "object" && !Array.isArray(n)) {
            if (n.fields === void 0) {
              const m = {
                instancePath: a + "/records/" + p,
                schemaPath: "#/properties/records/items/required",
                keyword: "required",
                params: { missingProperty: "fields" },
                message: "must have required property 'fields'",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (n.id !== void 0 && typeof n.id != "string") {
              const m = {
                instancePath: a + "/records/" + p + "/id",
                schemaPath: "#/properties/records/items/properties/id/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (n.fields !== void 0) {
              let m = n.fields;
              if (m && typeof m == "object" && !Array.isArray(m))
                for (const u in m) {
                  const c = i;
                  if (typeof u != "string") {
                    const d = {
                      instancePath: a + "/records/" + p + "/fields",
                      schemaPath:
                        "#/properties/records/items/properties/fields/propertyNames/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                      propertyName: u,
                    };
                    (e === null ? (e = [d]) : e.push(d), i++);
                  }
                  var r = c === i;
                  if (!r) {
                    const d = {
                      instancePath: a + "/records/" + p + "/fields",
                      schemaPath:
                        "#/properties/records/items/properties/fields/propertyNames",
                      keyword: "propertyNames",
                      params: { propertyName: u },
                      message: "property name must be valid",
                    };
                    (e === null ? (e = [d]) : e.push(d), i++);
                  }
                }
              else {
                const u = {
                  instancePath: a + "/records/" + p + "/fields",
                  schemaPath:
                    "#/properties/records/items/properties/fields/type",
                  keyword: "type",
                  params: { type: "object" },
                  message: "must be object",
                };
                (e === null ? (e = [u]) : e.push(u), i++);
              }
            }
          } else {
            const m = {
              instancePath: a + "/records/" + p,
              schemaPath: "#/properties/records/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
        }
      } else {
        const o = {
          instancePath: a + "/records",
          schemaPath: "#/properties/records/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (s.typecast !== void 0 && typeof s.typecast != "boolean") {
      const t = {
        instancePath: a + "/typecast",
        schemaPath: "#/properties/typecast/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (
      s.returnFieldsByFieldId !== void 0 &&
      typeof s.returnFieldsByFieldId != "boolean"
    ) {
      const t = {
        instancePath: a + "/returnFieldsByFieldId",
        schemaPath: "#/properties/returnFieldsByFieldId/type",
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
  return ((L.errors = e), i === 0);
}
L.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const le = R;
function R(
  s,
  {
    instancePath: a = "",
    parentData: y,
    parentDataProperty: f,
    rootData: h = s,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    i = 0;
  const l = R.evaluated;
  if (
    (l.dynamicProps && (l.props = void 0),
    l.dynamicItems && (l.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.baseId === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "baseId" },
        message: "must have required property 'baseId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.recordIds === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "recordIds" },
        message: "must have required property 'recordIds'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.tableIdOrName === void 0) {
      const r = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "tableIdOrName" },
        message: "must have required property 'tableIdOrName'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!(r === "baseId" || r === "recordIds" || r === "tableIdOrName")) {
        const t = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.baseId !== void 0 && typeof s.baseId != "string") {
      const r = {
        instancePath: a + "/baseId",
        schemaPath: "#/properties/baseId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.recordIds !== void 0) {
      let r = s.recordIds;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let o = 0; o < t; o++)
          if (typeof r[o] != "string") {
            const p = {
              instancePath: a + "/recordIds/" + o,
              schemaPath: "#/properties/recordIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const t = {
          instancePath: a + "/recordIds",
          schemaPath: "#/properties/recordIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.tableIdOrName !== void 0 && typeof s.tableIdOrName != "string") {
      const r = {
        instancePath: a + "/tableIdOrName",
        schemaPath: "#/properties/tableIdOrName/type",
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
  return ((R.errors = e), i === 0);
}
R.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ye = {
  airtable_create_base: K,
  airtable_create_table: z,
  airtable_create_field: G,
  airtable_create_multiple_records: U,
  airtable_create_webhook: H,
  airtable_delete_field: J,
  airtable_delete_table: Y,
  airtable_delete_webhook: W,
  airtable_get_base_schema: Q,
  airtable_get_record: X,
  airtable_list_bases: $,
  airtable_list_records: ee,
  airtable_list_webhook_payloads: re,
  airtable_list_webhooks: se,
  airtable_list_workspaces: ie,
  airtable_refresh_webhook: ae,
  airtable_update_field: te,
  airtable_update_multiple_records: oe,
  airtable_update_table: ne,
  airtable_upsert_multiple_records: pe,
  airtable_delete_multiple_records: le,
};
exports.NATIVE_TOOL_VALIDATORS = ye;
exports.validate_airtable_create_base = K;
exports.validate_airtable_create_field = G;
exports.validate_airtable_create_multiple_records = U;
exports.validate_airtable_create_table = z;
exports.validate_airtable_create_webhook = H;
exports.validate_airtable_delete_field = J;
exports.validate_airtable_delete_multiple_records = le;
exports.validate_airtable_delete_table = Y;
exports.validate_airtable_delete_webhook = W;
exports.validate_airtable_get_base_schema = Q;
exports.validate_airtable_get_record = X;
exports.validate_airtable_list_bases = $;
exports.validate_airtable_list_records = ee;
exports.validate_airtable_list_webhook_payloads = re;
exports.validate_airtable_list_webhooks = se;
exports.validate_airtable_list_workspaces = ie;
exports.validate_airtable_refresh_webhook = ae;
exports.validate_airtable_update_field = te;
exports.validate_airtable_update_multiple_records = oe;
exports.validate_airtable_update_table = ne;
exports.validate_airtable_upsert_multiple_records = pe;
