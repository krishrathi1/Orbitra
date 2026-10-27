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
      (r._sentryDebugIds[n] = "2dbe320c-735c-49b5-8349-5dcc49972a9d"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-2dbe320c-735c-49b5-8349-5dcc49972a9d"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const J = b;
function b(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = b.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
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
  return ((b.errors = e), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const K = P,
  F = {
    properties: {
      limit: { type: "integer", minimum: 1, maximum: 250 },
      status: { enum: ["active", "archived", "draft"], type: "string" },
      title: { type: "string" },
      vendor: { type: "string" },
      handle: { type: "string" },
      productType: { type: "string" },
      collectionId: { anyOf: [{ type: "string" }, { type: "number" }] },
      pageInfo: { type: "string" },
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
    },
  },
  L = Object.prototype.hasOwnProperty;
function P(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    for (const t in r)
      if (!L.call(F.properties, t)) {
        const a = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), i++);
      }
    if (r.limit !== void 0) {
      let t = r.limit;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const a = {
          instancePath: n + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), i++);
      }
      if (typeof t == "number") {
        if (t > 250 || isNaN(t)) {
          const a = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 250 },
            message: "must be <= 250",
          };
          (e === null ? (e = [a]) : e.push(a), i++);
        }
        if (t < 1 || isNaN(t)) {
          const a = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [a]) : e.push(a), i++);
        }
      }
    }
    if (r.status !== void 0) {
      let t = r.status;
      if (typeof t != "string") {
        const a = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [a]) : e.push(a), i++);
      }
      if (!(t === "active" || t === "archived" || t === "draft")) {
        const a = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: F.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [a]) : e.push(a), i++);
      }
    }
    if (r.title !== void 0 && typeof r.title != "string") {
      const t = {
        instancePath: n + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.vendor !== void 0 && typeof r.vendor != "string") {
      const t = {
        instancePath: n + "/vendor",
        schemaPath: "#/properties/vendor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.handle !== void 0 && typeof r.handle != "string") {
      const t = {
        instancePath: n + "/handle",
        schemaPath: "#/properties/handle/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.productType !== void 0 && typeof r.productType != "string") {
      const t = {
        instancePath: n + "/productType",
        schemaPath: "#/properties/productType/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.collectionId !== void 0) {
      let t = r.collectionId;
      const a = i;
      let o = !1;
      const m = i;
      if (typeof t != "string") {
        const h = {
          instancePath: n + "/collectionId",
          schemaPath: "#/properties/collectionId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [h]) : e.push(h), i++);
      }
      var s = m === i;
      o = o || s;
      const u = i;
      if (typeof t != "number") {
        const h = {
          instancePath: n + "/collectionId",
          schemaPath: "#/properties/collectionId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [h]) : e.push(h), i++);
      }
      var s = u === i;
      if (((o = o || s), o))
        ((i = a), e !== null && (a ? (e.length = a) : (e = null)));
      else {
        const h = {
          instancePath: n + "/collectionId",
          schemaPath: "#/properties/collectionId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [h]) : e.push(h), i++);
      }
    }
    if (r.pageInfo !== void 0 && typeof r.pageInfo != "string") {
      const t = {
        instancePath: n + "/pageInfo",
        schemaPath: "#/properties/pageInfo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.start !== void 0) {
      let t = r.start;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const a = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), i++);
      }
      if (typeof t == "number") {
        if (t > 9007199254740991 || isNaN(t)) {
          const a = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), i++);
        }
        if (t < 1 || isNaN(t)) {
          const a = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [a]) : e.push(a), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let t = r.end;
      if (!(typeof t == "number" && !(t % 1) && !isNaN(t))) {
        const a = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [a]) : e.push(a), i++);
      }
      if (typeof t == "number") {
        if (t > 9007199254740991 || isNaN(t)) {
          const a = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [a]) : e.push(a), i++);
        }
        if (t < 1 || isNaN(t)) {
          const a = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [a]) : e.push(a), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const t = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  } else {
    const t = {
      instancePath: n,
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
const Q = v;
function v(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    if (r.productId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "productId" },
        message: "must have required property 'productId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "productId") {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.productId !== void 0 && typeof r.productId != "string") {
      const s = {
        instancePath: n + "/productId",
        schemaPath: "#/properties/productId/type",
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
  return ((v.errors = e), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const W = w;
function w(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    if (r.title === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "title" ||
          s === "bodyHtml" ||
          s === "vendor" ||
          s === "productType" ||
          s === "variants"
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
    if (r.title !== void 0 && typeof r.title != "string") {
      const s = {
        instancePath: n + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.bodyHtml !== void 0 && typeof r.bodyHtml != "string") {
      const s = {
        instancePath: n + "/bodyHtml",
        schemaPath: "#/properties/bodyHtml/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.vendor !== void 0 && typeof r.vendor != "string") {
      const s = {
        instancePath: n + "/vendor",
        schemaPath: "#/properties/vendor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.productType !== void 0 && typeof r.productType != "string") {
      const s = {
        instancePath: n + "/productType",
        schemaPath: "#/properties/productType/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.variants !== void 0) {
      let s = r.variants;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let a = 0; a < t; a++) {
          let o = s[a];
          if (o && typeof o == "object" && !Array.isArray(o)) {
            if (o.price === void 0) {
              const m = {
                instancePath: n + "/variants/" + a,
                schemaPath: "#/properties/variants/items/required",
                keyword: "required",
                params: { missingProperty: "price" },
                message: "must have required property 'price'",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (o.price !== void 0 && typeof o.price != "string") {
              const m = {
                instancePath: n + "/variants/" + a + "/price",
                schemaPath: "#/properties/variants/items/properties/price/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (o.sku !== void 0 && typeof o.sku != "string") {
              const m = {
                instancePath: n + "/variants/" + a + "/sku",
                schemaPath: "#/properties/variants/items/properties/sku/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (o.inventory_quantity !== void 0) {
              let m = o.inventory_quantity;
              if (!(typeof m == "number" && !(m % 1) && !isNaN(m))) {
                const u = {
                  instancePath: n + "/variants/" + a + "/inventory_quantity",
                  schemaPath:
                    "#/properties/variants/items/properties/inventory_quantity/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                };
                (e === null ? (e = [u]) : e.push(u), i++);
              }
              if (typeof m == "number") {
                if (m > 9007199254740991 || isNaN(m)) {
                  const u = {
                    instancePath: n + "/variants/" + a + "/inventory_quantity",
                    schemaPath:
                      "#/properties/variants/items/properties/inventory_quantity/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 9007199254740991 },
                    message: "must be <= 9007199254740991",
                  };
                  (e === null ? (e = [u]) : e.push(u), i++);
                }
                if (m < -9007199254740991 || isNaN(m)) {
                  const u = {
                    instancePath: n + "/variants/" + a + "/inventory_quantity",
                    schemaPath:
                      "#/properties/variants/items/properties/inventory_quantity/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: -9007199254740991 },
                    message: "must be >= -9007199254740991",
                  };
                  (e === null ? (e = [u]) : e.push(u), i++);
                }
              }
            }
          } else {
            const m = {
              instancePath: n + "/variants/" + a,
              schemaPath: "#/properties/variants/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
        }
      } else {
        const t = {
          instancePath: n + "/variants",
          schemaPath: "#/properties/variants/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
  return ((w.errors = e), i === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const X = k,
  Pe = { properties: { status: { enum: ["active", "archived", "draft"] } } };
function k(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    if (r.productId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "productId" },
        message: "must have required property 'productId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "productId" ||
          s === "title" ||
          s === "bodyHtml" ||
          s === "vendor" ||
          s === "productType" ||
          s === "status"
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
    if (r.productId !== void 0 && typeof r.productId != "string") {
      const s = {
        instancePath: n + "/productId",
        schemaPath: "#/properties/productId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.title !== void 0 && typeof r.title != "string") {
      const s = {
        instancePath: n + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.bodyHtml !== void 0 && typeof r.bodyHtml != "string") {
      const s = {
        instancePath: n + "/bodyHtml",
        schemaPath: "#/properties/bodyHtml/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.vendor !== void 0 && typeof r.vendor != "string") {
      const s = {
        instancePath: n + "/vendor",
        schemaPath: "#/properties/vendor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.productType !== void 0 && typeof r.productType != "string") {
      const s = {
        instancePath: n + "/productType",
        schemaPath: "#/properties/productType/type",
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
          instancePath: n + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "active" || s === "archived" || s === "draft")) {
        const t = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: Pe.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
  return ((k.errors = e), i === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ee = I,
  Y = {
    properties: {
      productId: { type: "string" },
      option1: { type: "string" },
      option2: { type: "string" },
      option3: { type: "string" },
      price: { type: "string" },
      sku: { type: "string" },
      barcode: { type: "string" },
      inventoryManagement: { type: "string" },
      inventoryPolicy: { enum: ["deny", "continue"], type: "string" },
      fulfillmentService: { type: "string" },
      taxable: { type: "boolean" },
      weight: { type: "number" },
      weightUnit: { enum: ["g", "kg", "oz", "lb"], type: "string" },
    },
  };
function I(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    if (r.productId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "productId" },
        message: "must have required property 'productId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!L.call(Y.properties, s)) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.productId !== void 0 && typeof r.productId != "string") {
      const s = {
        instancePath: n + "/productId",
        schemaPath: "#/properties/productId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.option1 !== void 0 && typeof r.option1 != "string") {
      const s = {
        instancePath: n + "/option1",
        schemaPath: "#/properties/option1/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.option2 !== void 0 && typeof r.option2 != "string") {
      const s = {
        instancePath: n + "/option2",
        schemaPath: "#/properties/option2/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.option3 !== void 0 && typeof r.option3 != "string") {
      const s = {
        instancePath: n + "/option3",
        schemaPath: "#/properties/option3/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.price !== void 0 && typeof r.price != "string") {
      const s = {
        instancePath: n + "/price",
        schemaPath: "#/properties/price/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.sku !== void 0 && typeof r.sku != "string") {
      const s = {
        instancePath: n + "/sku",
        schemaPath: "#/properties/sku/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.barcode !== void 0 && typeof r.barcode != "string") {
      const s = {
        instancePath: n + "/barcode",
        schemaPath: "#/properties/barcode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.inventoryManagement !== void 0 &&
      typeof r.inventoryManagement != "string"
    ) {
      const s = {
        instancePath: n + "/inventoryManagement",
        schemaPath: "#/properties/inventoryManagement/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.inventoryPolicy !== void 0) {
      let s = r.inventoryPolicy;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/inventoryPolicy",
          schemaPath: "#/properties/inventoryPolicy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "deny" || s === "continue")) {
        const t = {
          instancePath: n + "/inventoryPolicy",
          schemaPath: "#/properties/inventoryPolicy/enum",
          keyword: "enum",
          params: { allowedValues: Y.properties.inventoryPolicy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (
      r.fulfillmentService !== void 0 &&
      typeof r.fulfillmentService != "string"
    ) {
      const s = {
        instancePath: n + "/fulfillmentService",
        schemaPath: "#/properties/fulfillmentService/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.taxable !== void 0 && typeof r.taxable != "boolean") {
      const s = {
        instancePath: n + "/taxable",
        schemaPath: "#/properties/taxable/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.weight !== void 0 && typeof r.weight != "number") {
      const s = {
        instancePath: n + "/weight",
        schemaPath: "#/properties/weight/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.weightUnit !== void 0) {
      let s = r.weightUnit;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/weightUnit",
          schemaPath: "#/properties/weightUnit/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "g" || s === "kg" || s === "oz" || s === "lb")) {
        const t = {
          instancePath: n + "/weightUnit",
          schemaPath: "#/properties/weightUnit/enum",
          keyword: "enum",
          params: { allowedValues: Y.properties.weightUnit.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const se = _,
  B = {
    properties: {
      variantId: { type: "string" },
      option1: { type: "string" },
      option2: { type: "string" },
      option3: { type: "string" },
      price: { type: "string" },
      compareAtPrice: { type: "string" },
      sku: { type: "string" },
      barcode: { type: "string" },
      inventoryPolicy: { enum: ["deny", "continue"], type: "string" },
      taxable: { type: "boolean" },
      weight: { type: "number" },
      weightUnit: { enum: ["g", "kg", "oz", "lb"], type: "string" },
    },
  };
function _(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    if (r.variantId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "variantId" },
        message: "must have required property 'variantId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!L.call(B.properties, s)) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.variantId !== void 0 && typeof r.variantId != "string") {
      const s = {
        instancePath: n + "/variantId",
        schemaPath: "#/properties/variantId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.option1 !== void 0 && typeof r.option1 != "string") {
      const s = {
        instancePath: n + "/option1",
        schemaPath: "#/properties/option1/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.option2 !== void 0 && typeof r.option2 != "string") {
      const s = {
        instancePath: n + "/option2",
        schemaPath: "#/properties/option2/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.option3 !== void 0 && typeof r.option3 != "string") {
      const s = {
        instancePath: n + "/option3",
        schemaPath: "#/properties/option3/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.price !== void 0 && typeof r.price != "string") {
      const s = {
        instancePath: n + "/price",
        schemaPath: "#/properties/price/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.compareAtPrice !== void 0 && typeof r.compareAtPrice != "string") {
      const s = {
        instancePath: n + "/compareAtPrice",
        schemaPath: "#/properties/compareAtPrice/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.sku !== void 0 && typeof r.sku != "string") {
      const s = {
        instancePath: n + "/sku",
        schemaPath: "#/properties/sku/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.barcode !== void 0 && typeof r.barcode != "string") {
      const s = {
        instancePath: n + "/barcode",
        schemaPath: "#/properties/barcode/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.inventoryPolicy !== void 0) {
      let s = r.inventoryPolicy;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/inventoryPolicy",
          schemaPath: "#/properties/inventoryPolicy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "deny" || s === "continue")) {
        const t = {
          instancePath: n + "/inventoryPolicy",
          schemaPath: "#/properties/inventoryPolicy/enum",
          keyword: "enum",
          params: { allowedValues: B.properties.inventoryPolicy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.taxable !== void 0 && typeof r.taxable != "boolean") {
      const s = {
        instancePath: n + "/taxable",
        schemaPath: "#/properties/taxable/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.weight !== void 0 && typeof r.weight != "number") {
      const s = {
        instancePath: n + "/weight",
        schemaPath: "#/properties/weight/type",
        keyword: "type",
        params: { type: "number" },
        message: "must be number",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.weightUnit !== void 0) {
      let s = r.weightUnit;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/weightUnit",
          schemaPath: "#/properties/weightUnit/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "g" || s === "kg" || s === "oz" || s === "lb")) {
        const t = {
          instancePath: n + "/weightUnit",
          schemaPath: "#/properties/weightUnit/enum",
          keyword: "enum",
          params: { allowedValues: B.properties.weightUnit.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
  return ((_.errors = e), i === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const re = N;
function N(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    if (r.productId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "productId" },
        message: "must have required property 'productId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.variantId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "variantId" },
        message: "must have required property 'variantId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "productId" || s === "variantId")) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.productId !== void 0 && typeof r.productId != "string") {
      const s = {
        instancePath: n + "/productId",
        schemaPath: "#/properties/productId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.variantId !== void 0 && typeof r.variantId != "string") {
      const s = {
        instancePath: n + "/variantId",
        schemaPath: "#/properties/variantId/type",
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
  return ((N.errors = e), i === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const te = A,
  ve = {
    properties: { status: { enum: ["open", "closed", "cancelled", "any"] } },
  };
function A(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = A.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "status" ||
          s === "limit" ||
          s === "createdAtMin" ||
          s === "pageInfo" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
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
    if (r.status !== void 0) {
      let s = r.status;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(s === "open" || s === "closed" || s === "cancelled" || s === "any")
      ) {
        const t = {
          instancePath: n + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: ve.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
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
        if (s > 250 || isNaN(s)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 250 },
            message: "must be <= 250",
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
    if (r.createdAtMin !== void 0 && typeof r.createdAtMin != "string") {
      const s = {
        instancePath: n + "/createdAtMin",
        schemaPath: "#/properties/createdAtMin/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.pageInfo !== void 0 && typeof r.pageInfo != "string") {
      const s = {
        instancePath: n + "/pageInfo",
        schemaPath: "#/properties/pageInfo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
  return ((A.errors = e), i === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ie = q;
function q(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    if (r.orderId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orderId" },
        message: "must have required property 'orderId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "orderId") {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.orderId !== void 0 && typeof r.orderId != "string") {
      const s = {
        instancePath: n + "/orderId",
        schemaPath: "#/properties/orderId/type",
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
  return ((q.errors = e), i === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ne = j;
function j(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
      if (
        !(
          s === "limit" ||
          s === "pageInfo" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
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
        if (s > 250 || isNaN(s)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 250 },
            message: "must be <= 250",
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
    if (r.pageInfo !== void 0 && typeof r.pageInfo != "string") {
      const s = {
        instancePath: n + "/pageInfo",
        schemaPath: "#/properties/pageInfo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
  return ((j.errors = e), i === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ae = D;
function D(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    if (r.customerId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "customerId" },
        message: "must have required property 'customerId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (s !== "customerId") {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.customerId !== void 0 && typeof r.customerId != "string") {
      const s = {
        instancePath: n + "/customerId",
        schemaPath: "#/properties/customerId/type",
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
  return ((D.errors = e), i === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const pe = x;
function x(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    if (r.query === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(s === "query" || s === "pageInfo" || s === "limit" || s === "cursor")
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
    if (r.query !== void 0 && typeof r.query != "string") {
      const s = {
        instancePath: n + "/query",
        schemaPath: "#/properties/query/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.pageInfo !== void 0 && typeof r.pageInfo != "string") {
      const s = {
        instancePath: n + "/pageInfo",
        schemaPath: "#/properties/pageInfo/type",
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
  return ((x.errors = e), i === 0);
}
x.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const oe = O;
function O(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    if (r.customer === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "customer" },
        message: "must have required property 'customer'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (t !== "customer") {
        const a = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), i++);
      }
    if (r.customer !== void 0) {
      let t = r.customer;
      if (t && typeof t == "object" && !Array.isArray(t))
        for (const a in t) {
          const o = i;
          if (typeof a != "string") {
            const m = {
              instancePath: n + "/customer",
              schemaPath: "#/properties/customer/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: a,
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
          var s = o === i;
          if (!s) {
            const m = {
              instancePath: n + "/customer",
              schemaPath: "#/properties/customer/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: a },
              message: "property name must be valid",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
        }
      else {
        const a = {
          instancePath: n + "/customer",
          schemaPath: "#/properties/customer/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [a]) : e.push(a), i++);
      }
    }
  } else {
    const t = {
      instancePath: n,
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
const me = T,
  we = new RegExp(
    "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
    "u",
  );
function T(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    if (r.customerId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "customerId" },
        message: "must have required property 'customerId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "customerId" ||
          s === "email" ||
          s === "firstName" ||
          s === "lastName" ||
          s === "phone" ||
          s === "tags" ||
          s === "note" ||
          s === "acceptsMarketing"
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
    if (r.customerId !== void 0 && typeof r.customerId != "string") {
      const s = {
        instancePath: n + "/customerId",
        schemaPath: "#/properties/customerId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.email !== void 0) {
      let s = r.email;
      if (typeof s == "string") {
        if (!we.test(s)) {
          const t = {
            instancePath: n + "/email",
            schemaPath: "#/properties/email/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
            },
            message: `must match pattern "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$"`,
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/email",
          schemaPath: "#/properties/email/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.firstName !== void 0 && typeof r.firstName != "string") {
      const s = {
        instancePath: n + "/firstName",
        schemaPath: "#/properties/firstName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.lastName !== void 0 && typeof r.lastName != "string") {
      const s = {
        instancePath: n + "/lastName",
        schemaPath: "#/properties/lastName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.phone !== void 0 && typeof r.phone != "string") {
      const s = {
        instancePath: n + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.tags !== void 0 && typeof r.tags != "string") {
      const s = {
        instancePath: n + "/tags",
        schemaPath: "#/properties/tags/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.note !== void 0 && typeof r.note != "string") {
      const s = {
        instancePath: n + "/note",
        schemaPath: "#/properties/note/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.acceptsMarketing !== void 0 &&
      typeof r.acceptsMarketing != "boolean"
    ) {
      const s = {
        instancePath: n + "/acceptsMarketing",
        schemaPath: "#/properties/acceptsMarketing/type",
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
  return ((T.errors = e), i === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const le = E,
  ke = {
    properties: {
      financialStatus: {
        enum: [
          "pending",
          "authorized",
          "partially_paid",
          "paid",
          "partially_refunded",
          "refunded",
          "voided",
        ],
      },
    },
  };
function E(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = E.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.lineItems === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "lineItems" },
        message: "must have required property 'lineItems'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "lineItems" ||
          s === "customer" ||
          s === "email" ||
          s === "financialStatus" ||
          s === "sendReceipt" ||
          s === "tags"
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
    if (r.lineItems !== void 0) {
      let s = r.lineItems;
      if (Array.isArray(s)) {
        if (s.length < 1) {
          const a = {
            instancePath: n + "/lineItems",
            schemaPath: "#/properties/lineItems/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [a]) : e.push(a), i++);
        }
        const t = s.length;
        for (let a = 0; a < t; a++) {
          let o = s[a];
          if (o && typeof o == "object" && !Array.isArray(o)) {
            if (o.quantity === void 0) {
              const m = {
                instancePath: n + "/lineItems/" + a,
                schemaPath: "#/properties/lineItems/items/required",
                keyword: "required",
                params: { missingProperty: "quantity" },
                message: "must have required property 'quantity'",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (o.variant_id !== void 0 && typeof o.variant_id != "number") {
              const m = {
                instancePath: n + "/lineItems/" + a + "/variant_id",
                schemaPath:
                  "#/properties/lineItems/items/properties/variant_id/type",
                keyword: "type",
                params: { type: "number" },
                message: "must be number",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (o.title !== void 0 && typeof o.title != "string") {
              const m = {
                instancePath: n + "/lineItems/" + a + "/title",
                schemaPath:
                  "#/properties/lineItems/items/properties/title/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (o.quantity !== void 0) {
              let m = o.quantity;
              if (!(typeof m == "number" && !(m % 1) && !isNaN(m))) {
                const u = {
                  instancePath: n + "/lineItems/" + a + "/quantity",
                  schemaPath:
                    "#/properties/lineItems/items/properties/quantity/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                };
                (e === null ? (e = [u]) : e.push(u), i++);
              }
              if (typeof m == "number") {
                if (m > 9007199254740991 || isNaN(m)) {
                  const u = {
                    instancePath: n + "/lineItems/" + a + "/quantity",
                    schemaPath:
                      "#/properties/lineItems/items/properties/quantity/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 9007199254740991 },
                    message: "must be <= 9007199254740991",
                  };
                  (e === null ? (e = [u]) : e.push(u), i++);
                }
                if (m < 1 || isNaN(m)) {
                  const u = {
                    instancePath: n + "/lineItems/" + a + "/quantity",
                    schemaPath:
                      "#/properties/lineItems/items/properties/quantity/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: 1 },
                    message: "must be >= 1",
                  };
                  (e === null ? (e = [u]) : e.push(u), i++);
                }
              }
            }
            if (o.price !== void 0 && typeof o.price != "string") {
              const m = {
                instancePath: n + "/lineItems/" + a + "/price",
                schemaPath:
                  "#/properties/lineItems/items/properties/price/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
          } else {
            const m = {
              instancePath: n + "/lineItems/" + a,
              schemaPath: "#/properties/lineItems/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
        }
      } else {
        const t = {
          instancePath: n + "/lineItems",
          schemaPath: "#/properties/lineItems/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.customer !== void 0) {
      let s = r.customer;
      if (s && typeof s == "object" && !Array.isArray(s)) {
        if (s.id !== void 0 && typeof s.id != "number") {
          const t = {
            instancePath: n + "/customer/id",
            schemaPath: "#/properties/customer/properties/id/type",
            keyword: "type",
            params: { type: "number" },
            message: "must be number",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s.first_name !== void 0 && typeof s.first_name != "string") {
          const t = {
            instancePath: n + "/customer/first_name",
            schemaPath: "#/properties/customer/properties/first_name/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s.last_name !== void 0 && typeof s.last_name != "string") {
          const t = {
            instancePath: n + "/customer/last_name",
            schemaPath: "#/properties/customer/properties/last_name/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s.email !== void 0 && typeof s.email != "string") {
          const t = {
            instancePath: n + "/customer/email",
            schemaPath: "#/properties/customer/properties/email/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/customer",
          schemaPath: "#/properties/customer/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.email !== void 0 && typeof r.email != "string") {
      const s = {
        instancePath: n + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.financialStatus !== void 0) {
      let s = r.financialStatus;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/financialStatus",
          schemaPath: "#/properties/financialStatus/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "pending" ||
          s === "authorized" ||
          s === "partially_paid" ||
          s === "paid" ||
          s === "partially_refunded" ||
          s === "refunded" ||
          s === "voided"
        )
      ) {
        const t = {
          instancePath: n + "/financialStatus",
          schemaPath: "#/properties/financialStatus/enum",
          keyword: "enum",
          params: { allowedValues: ke.properties.financialStatus.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.sendReceipt !== void 0 && typeof r.sendReceipt != "boolean") {
      const s = {
        instancePath: n + "/sendReceipt",
        schemaPath: "#/properties/sendReceipt/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.tags !== void 0 && typeof r.tags != "string") {
      const s = {
        instancePath: n + "/tags",
        schemaPath: "#/properties/tags/type",
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
  return ((E.errors = e), i === 0);
}
E.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ue = R;
function R(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = R.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.orderId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orderId" },
        message: "must have required property 'orderId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "orderId" ||
          s === "email" ||
          s === "note" ||
          s === "tags" ||
          s === "phone" ||
          s === "buyerAcceptsMarketing"
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
    if (r.orderId !== void 0 && typeof r.orderId != "string") {
      const s = {
        instancePath: n + "/orderId",
        schemaPath: "#/properties/orderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.email !== void 0 && typeof r.email != "string") {
      const s = {
        instancePath: n + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.note !== void 0 && typeof r.note != "string") {
      const s = {
        instancePath: n + "/note",
        schemaPath: "#/properties/note/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.tags !== void 0 && typeof r.tags != "string") {
      const s = {
        instancePath: n + "/tags",
        schemaPath: "#/properties/tags/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.phone !== void 0 && typeof r.phone != "string") {
      const s = {
        instancePath: n + "/phone",
        schemaPath: "#/properties/phone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.buyerAcceptsMarketing !== void 0 &&
      typeof r.buyerAcceptsMarketing != "boolean"
    ) {
      const s = {
        instancePath: n + "/buyerAcceptsMarketing",
        schemaPath: "#/properties/buyerAcceptsMarketing/type",
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
  return ((R.errors = e), i === 0);
}
R.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ye = S;
function S(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = S.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.orderId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "orderId" },
        message: "must have required property 'orderId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "orderId" ||
          s === "limit" ||
          s === "pageInfo" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
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
    if (r.orderId !== void 0 && typeof r.orderId != "string") {
      const s = {
        instancePath: n + "/orderId",
        schemaPath: "#/properties/orderId/type",
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
          instancePath: n + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 250 || isNaN(s)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 250 },
            message: "must be <= 250",
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
    if (r.pageInfo !== void 0 && typeof r.pageInfo != "string") {
      const s = {
        instancePath: n + "/pageInfo",
        schemaPath: "#/properties/pageInfo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
  return ((S.errors = e), i === 0);
}
S.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const fe = z;
function z(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = z.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "limit" ||
          s === "title" ||
          s === "handle" ||
          s === "pageInfo" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
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
        if (s > 250 || isNaN(s)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 250 },
            message: "must be <= 250",
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
    if (r.title !== void 0 && typeof r.title != "string") {
      const s = {
        instancePath: n + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.handle !== void 0 && typeof r.handle != "string") {
      const s = {
        instancePath: n + "/handle",
        schemaPath: "#/properties/handle/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.pageInfo !== void 0 && typeof r.pageInfo != "string") {
      const s = {
        instancePath: n + "/pageInfo",
        schemaPath: "#/properties/pageInfo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
  return ((z.errors = e), i === 0);
}
z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const de = M;
function M(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = M.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (
        !(
          s === "limit" ||
          s === "pageInfo" ||
          s === "start" ||
          s === "end" ||
          s === "cursor"
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
        if (s > 250 || isNaN(s)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 250 },
            message: "must be <= 250",
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
    if (r.pageInfo !== void 0 && typeof r.pageInfo != "string") {
      const s = {
        instancePath: n + "/pageInfo",
        schemaPath: "#/properties/pageInfo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
  return ((M.errors = e), i === 0);
}
M.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ce = U;
function U(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
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
    for (const a in r)
      if (
        !(
          a === "inventoryItemIds" ||
          a === "locationIds" ||
          a === "limit" ||
          a === "pageInfo" ||
          a === "start" ||
          a === "end" ||
          a === "cursor"
        )
      ) {
        const o = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: a },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    if (r.inventoryItemIds !== void 0) {
      let a = r.inventoryItemIds;
      if (Array.isArray(a)) {
        const o = a.length;
        for (let m = 0; m < o; m++) {
          let u = a[m];
          const h = i;
          let l = !1;
          const $ = i;
          if (typeof u != "string") {
            const g = {
              instancePath: n + "/inventoryItemIds/" + m,
              schemaPath: "#/properties/inventoryItemIds/items/anyOf/0/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [g]) : e.push(g), i++);
          }
          var s = $ === i;
          l = l || s;
          const C = i;
          if (typeof u != "number") {
            const g = {
              instancePath: n + "/inventoryItemIds/" + m,
              schemaPath: "#/properties/inventoryItemIds/items/anyOf/1/type",
              keyword: "type",
              params: { type: "number" },
              message: "must be number",
            };
            (e === null ? (e = [g]) : e.push(g), i++);
          }
          var s = C === i;
          if (((l = l || s), l))
            ((i = h), e !== null && (h ? (e.length = h) : (e = null)));
          else {
            const g = {
              instancePath: n + "/inventoryItemIds/" + m,
              schemaPath: "#/properties/inventoryItemIds/items/anyOf",
              keyword: "anyOf",
              params: {},
              message: "must match a schema in anyOf",
            };
            (e === null ? (e = [g]) : e.push(g), i++);
          }
        }
      } else {
        const o = {
          instancePath: n + "/inventoryItemIds",
          schemaPath: "#/properties/inventoryItemIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (r.locationIds !== void 0) {
      let a = r.locationIds;
      if (Array.isArray(a)) {
        const o = a.length;
        for (let m = 0; m < o; m++) {
          let u = a[m];
          const h = i;
          let l = !1;
          const $ = i;
          if (typeof u != "string") {
            const g = {
              instancePath: n + "/locationIds/" + m,
              schemaPath: "#/properties/locationIds/items/anyOf/0/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [g]) : e.push(g), i++);
          }
          var t = $ === i;
          l = l || t;
          const C = i;
          if (typeof u != "number") {
            const g = {
              instancePath: n + "/locationIds/" + m,
              schemaPath: "#/properties/locationIds/items/anyOf/1/type",
              keyword: "type",
              params: { type: "number" },
              message: "must be number",
            };
            (e === null ? (e = [g]) : e.push(g), i++);
          }
          var t = C === i;
          if (((l = l || t), l))
            ((i = h), e !== null && (h ? (e.length = h) : (e = null)));
          else {
            const g = {
              instancePath: n + "/locationIds/" + m,
              schemaPath: "#/properties/locationIds/items/anyOf",
              keyword: "anyOf",
              params: {},
              message: "must match a schema in anyOf",
            };
            (e === null ? (e = [g]) : e.push(g), i++);
          }
        }
      } else {
        const o = {
          instancePath: n + "/locationIds",
          schemaPath: "#/properties/locationIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    }
    if (r.limit !== void 0) {
      let a = r.limit;
      if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
        const o = {
          instancePath: n + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      if (typeof a == "number") {
        if (a > 250 || isNaN(a)) {
          const o = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 250 },
            message: "must be <= 250",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        if (a < 1 || isNaN(a)) {
          const o = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
      }
    }
    if (r.pageInfo !== void 0 && typeof r.pageInfo != "string") {
      const a = {
        instancePath: n + "/pageInfo",
        schemaPath: "#/properties/pageInfo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), i++);
    }
    if (r.start !== void 0) {
      let a = r.start;
      if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
        const o = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      if (typeof a == "number") {
        if (a > 9007199254740991 || isNaN(a)) {
          const o = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        if (a < 1 || isNaN(a)) {
          const o = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
      }
    }
    if (r.end !== void 0) {
      let a = r.end;
      if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
        const o = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      if (typeof a == "number") {
        if (a > 9007199254740991 || isNaN(a)) {
          const o = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        if (a < 1 || isNaN(a)) {
          const o = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
      }
    }
    if (r.cursor !== void 0 && typeof r.cursor != "string") {
      const a = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), i++);
    }
  } else {
    const a = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [a]) : e.push(a), i++);
  }
  return ((U.errors = e), i === 0);
}
U.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const he = Z;
function Z(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = Z.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.inventoryItemId === void 0) {
      const a = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "inventoryItemId" },
        message: "must have required property 'inventoryItemId'",
      };
      (e === null ? (e = [a]) : e.push(a), i++);
    }
    if (r.locationId === void 0) {
      const a = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "locationId" },
        message: "must have required property 'locationId'",
      };
      (e === null ? (e = [a]) : e.push(a), i++);
    }
    if (r.availableAdjustment === void 0) {
      const a = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "availableAdjustment" },
        message: "must have required property 'availableAdjustment'",
      };
      (e === null ? (e = [a]) : e.push(a), i++);
    }
    for (const a in r)
      if (
        !(
          a === "inventoryItemId" ||
          a === "locationId" ||
          a === "availableAdjustment"
        )
      ) {
        const o = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: a },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
    if (r.inventoryItemId !== void 0) {
      let a = r.inventoryItemId;
      const o = i;
      let m = !1;
      const u = i;
      if (typeof a != "string") {
        const l = {
          instancePath: n + "/inventoryItemId",
          schemaPath: "#/properties/inventoryItemId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var s = u === i;
      m = m || s;
      const h = i;
      if (typeof a != "number") {
        const l = {
          instancePath: n + "/inventoryItemId",
          schemaPath: "#/properties/inventoryItemId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var s = h === i;
      if (((m = m || s), m))
        ((i = o), e !== null && (o ? (e.length = o) : (e = null)));
      else {
        const l = {
          instancePath: n + "/inventoryItemId",
          schemaPath: "#/properties/inventoryItemId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
    if (r.locationId !== void 0) {
      let a = r.locationId;
      const o = i;
      let m = !1;
      const u = i;
      if (typeof a != "string") {
        const l = {
          instancePath: n + "/locationId",
          schemaPath: "#/properties/locationId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var t = u === i;
      m = m || t;
      const h = i;
      if (typeof a != "number") {
        const l = {
          instancePath: n + "/locationId",
          schemaPath: "#/properties/locationId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var t = h === i;
      if (((m = m || t), m))
        ((i = o), e !== null && (o ? (e.length = o) : (e = null)));
      else {
        const l = {
          instancePath: n + "/locationId",
          schemaPath: "#/properties/locationId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
    if (r.availableAdjustment !== void 0) {
      let a = r.availableAdjustment;
      if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
        const o = {
          instancePath: n + "/availableAdjustment",
          schemaPath: "#/properties/availableAdjustment/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), i++);
      }
      if (typeof a == "number") {
        if (a > 9007199254740991 || isNaN(a)) {
          const o = {
            instancePath: n + "/availableAdjustment",
            schemaPath: "#/properties/availableAdjustment/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
        if (a < -9007199254740991 || isNaN(a)) {
          const o = {
            instancePath: n + "/availableAdjustment",
            schemaPath: "#/properties/availableAdjustment/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), i++);
        }
      }
    }
  } else {
    const a = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [a]) : e.push(a), i++);
  }
  return ((Z.errors = e), i === 0);
}
Z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ge = V,
  G = {
    properties: {
      ownerResource: {
        enum: ["product", "variant", "customer", "order"],
        type: "string",
      },
      ownerId: { type: "string" },
      namespace: { type: "string" },
      key: { type: "string" },
      limit: { type: "integer", minimum: 1, maximum: 250 },
      pageInfo: { type: "string" },
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
    },
  };
function V(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = V.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    for (const s in r)
      if (!L.call(G.properties, s)) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.ownerResource !== void 0) {
      let s = r.ownerResource;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/ownerResource",
          schemaPath: "#/properties/ownerResource/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "product" ||
          s === "variant" ||
          s === "customer" ||
          s === "order"
        )
      ) {
        const t = {
          instancePath: n + "/ownerResource",
          schemaPath: "#/properties/ownerResource/enum",
          keyword: "enum",
          params: { allowedValues: G.properties.ownerResource.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.ownerId !== void 0 && typeof r.ownerId != "string") {
      const s = {
        instancePath: n + "/ownerId",
        schemaPath: "#/properties/ownerId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.namespace !== void 0 && typeof r.namespace != "string") {
      const s = {
        instancePath: n + "/namespace",
        schemaPath: "#/properties/namespace/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.key !== void 0 && typeof r.key != "string") {
      const s = {
        instancePath: n + "/key",
        schemaPath: "#/properties/key/type",
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
          instancePath: n + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 250 || isNaN(s)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 250 },
            message: "must be <= 250",
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
    if (r.pageInfo !== void 0 && typeof r.pageInfo != "string") {
      const s = {
        instancePath: n + "/pageInfo",
        schemaPath: "#/properties/pageInfo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
  return ((V.errors = e), i === 0);
}
V.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const be = H,
  Ie = {
    properties: {
      ownerResource: { enum: ["product", "variant", "customer", "order"] },
    },
  };
function H(
  r,
  {
    instancePath: n = "",
    parentData: y,
    parentDataProperty: f,
    rootData: d = r,
    dynamicAnchors: c = {},
  } = {},
) {
  let e = null,
    i = 0;
  const p = H.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    r && typeof r == "object" && !Array.isArray(r))
  ) {
    if (r.namespace === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "namespace" },
        message: "must have required property 'namespace'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.key === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "key" },
        message: "must have required property 'key'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.value === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "value" },
        message: "must have required property 'value'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.type === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "type" },
        message: "must have required property 'type'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in r)
      if (
        !(
          t === "metafieldId" ||
          t === "ownerResource" ||
          t === "ownerId" ||
          t === "namespace" ||
          t === "key" ||
          t === "value" ||
          t === "type"
        )
      ) {
        const a = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: t },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [a]) : e.push(a), i++);
      }
    if (r.metafieldId !== void 0 && typeof r.metafieldId != "string") {
      const t = {
        instancePath: n + "/metafieldId",
        schemaPath: "#/properties/metafieldId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.ownerResource !== void 0) {
      let t = r.ownerResource;
      if (typeof t != "string") {
        const a = {
          instancePath: n + "/ownerResource",
          schemaPath: "#/properties/ownerResource/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [a]) : e.push(a), i++);
      }
      if (
        !(
          t === "product" ||
          t === "variant" ||
          t === "customer" ||
          t === "order"
        )
      ) {
        const a = {
          instancePath: n + "/ownerResource",
          schemaPath: "#/properties/ownerResource/enum",
          keyword: "enum",
          params: { allowedValues: Ie.properties.ownerResource.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [a]) : e.push(a), i++);
      }
    }
    if (r.ownerId !== void 0 && typeof r.ownerId != "string") {
      const t = {
        instancePath: n + "/ownerId",
        schemaPath: "#/properties/ownerId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.namespace !== void 0 && typeof r.namespace != "string") {
      const t = {
        instancePath: n + "/namespace",
        schemaPath: "#/properties/namespace/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.key !== void 0 && typeof r.key != "string") {
      const t = {
        instancePath: n + "/key",
        schemaPath: "#/properties/key/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (r.value !== void 0) {
      let t = r.value;
      const a = i;
      let o = !1;
      const m = i;
      if (typeof t != "string") {
        const l = {
          instancePath: n + "/value",
          schemaPath: "#/properties/value/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var s = m === i;
      o = o || s;
      const u = i;
      if (typeof t != "number") {
        const l = {
          instancePath: n + "/value",
          schemaPath: "#/properties/value/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var s = u === i;
      o = o || s;
      const h = i;
      if (typeof t != "boolean") {
        const l = {
          instancePath: n + "/value",
          schemaPath: "#/properties/value/anyOf/2/type",
          keyword: "type",
          params: { type: "boolean" },
          message: "must be boolean",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var s = h === i;
      if (((o = o || s), o))
        ((i = a), e !== null && (a ? (e.length = a) : (e = null)));
      else {
        const l = {
          instancePath: n + "/value",
          schemaPath: "#/properties/value/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
    if (r.type !== void 0 && typeof r.type != "string") {
      const t = {
        instancePath: n + "/type",
        schemaPath: "#/properties/type/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
  } else {
    const t = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [t]) : e.push(t), i++);
  }
  return ((H.errors = e), i === 0);
}
H.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _e = {
  shopify_get_shop: J,
  shopify_list_products: K,
  shopify_get_product: Q,
  shopify_create_product: W,
  shopify_update_product: X,
  shopify_create_variant: ee,
  shopify_update_variant: se,
  shopify_delete_variant: re,
  shopify_list_orders: te,
  shopify_get_order: ie,
  shopify_list_customers: ne,
  shopify_get_customer: ae,
  shopify_search_customers: pe,
  shopify_create_customer: oe,
  shopify_update_customer: me,
  shopify_create_order: le,
  shopify_update_order: ue,
  shopify_list_fulfillments: ye,
  shopify_list_collections: fe,
  shopify_list_locations: de,
  shopify_get_inventory_levels: ce,
  shopify_adjust_inventory: he,
  shopify_get_metafields: ge,
  shopify_set_metafield: be,
};
exports.NATIVE_TOOL_VALIDATORS = _e;
exports.validate_shopify_adjust_inventory = he;
exports.validate_shopify_create_customer = oe;
exports.validate_shopify_create_order = le;
exports.validate_shopify_create_product = W;
exports.validate_shopify_create_variant = ee;
exports.validate_shopify_delete_variant = re;
exports.validate_shopify_get_customer = ae;
exports.validate_shopify_get_inventory_levels = ce;
exports.validate_shopify_get_metafields = ge;
exports.validate_shopify_get_order = ie;
exports.validate_shopify_get_product = Q;
exports.validate_shopify_get_shop = J;
exports.validate_shopify_list_collections = fe;
exports.validate_shopify_list_customers = ne;
exports.validate_shopify_list_fulfillments = ye;
exports.validate_shopify_list_locations = de;
exports.validate_shopify_list_orders = te;
exports.validate_shopify_list_products = K;
exports.validate_shopify_search_customers = pe;
exports.validate_shopify_set_metafield = be;
exports.validate_shopify_update_customer = me;
exports.validate_shopify_update_order = ue;
exports.validate_shopify_update_product = X;
exports.validate_shopify_update_variant = se;
