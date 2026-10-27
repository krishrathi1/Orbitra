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
      (t._sentryDebugIds[a] = "b51ac9e5-60cd-45af-805f-301fb84e3df1"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-b51ac9e5-60cd-45af-805f-301fb84e3df1"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const x = k;
function k(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = k.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const s in t)
      if (
        !(s === "uid" || s === "bookingId" || s === "reason" || s === "account")
      ) {
        const m = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [m]) : e.push(m), r++);
      }
    if (t.uid !== void 0 && typeof t.uid != "string") {
      const s = {
        instancePath: a + "/uid",
        schemaPath: "#/properties/uid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.bookingId !== void 0) {
      let s = t.bookingId;
      const m = r;
      let c = !1;
      const n = r;
      if (typeof s != "string") {
        const l = {
          instancePath: a + "/bookingId",
          schemaPath: "#/properties/bookingId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), r++);
      }
      var i = n === r;
      c = c || i;
      const o = r;
      if (typeof s != "number") {
        const l = {
          instancePath: a + "/bookingId",
          schemaPath: "#/properties/bookingId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [l]) : e.push(l), r++);
      }
      var i = o === r;
      if (((c = c || i), c))
        ((r = m), e !== null && (m ? (e.length = m) : (e = null)));
      else {
        const l = {
          instancePath: a + "/bookingId",
          schemaPath: "#/properties/bookingId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), r++);
      }
    }
    if (t.reason !== void 0 && typeof t.reason != "string") {
      const s = {
        instancePath: a + "/reason",
        schemaPath: "#/properties/reason/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((k.errors = e), r === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const M = v,
  W = {
    properties: {
      bookingFieldsResponses: {
        type: "object",
        propertyNames: { type: "string" },
        additionalProperties: {
          anyOf: [
            { type: "string" },
            { type: "number" },
            { type: "boolean" },
            { type: "array", items: { type: "string" } },
          ],
        },
      },
      guests: {
        type: "array",
        items: {
          type: "string",
          pattern:
            "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
        },
      },
      location: {
        type: "object",
        propertyNames: { type: "string" },
        additionalProperties: { type: "string" },
      },
      metadata: {
        type: "object",
        propertyNames: { type: "string" },
        additionalProperties: { type: "string" },
      },
      eventTypeId: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      startTime: { type: "string" },
      name: { type: "string" },
      email: {
        type: "string",
        pattern:
          "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
      },
      timeZone: { type: "string" },
      language: { type: "string" },
      account: { type: "string" },
    },
  },
  X = Object.prototype.hasOwnProperty,
  R = new RegExp(
    "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
    "u",
  );
function v(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = v.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.eventTypeId === void 0) {
      const n = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "eventTypeId" },
        message: "must have required property 'eventTypeId'",
      };
      (e === null ? (e = [n]) : e.push(n), r++);
    }
    if (t.startTime === void 0) {
      const n = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "startTime" },
        message: "must have required property 'startTime'",
      };
      (e === null ? (e = [n]) : e.push(n), r++);
    }
    if (t.name === void 0) {
      const n = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property 'name'",
      };
      (e === null ? (e = [n]) : e.push(n), r++);
    }
    if (t.email === void 0) {
      const n = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "email" },
        message: "must have required property 'email'",
      };
      (e === null ? (e = [n]) : e.push(n), r++);
    }
    for (const n in t)
      if (!X.call(W.properties, n)) {
        const o = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: n },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), r++);
      }
    if (t.bookingFieldsResponses !== void 0) {
      let n = t.bookingFieldsResponses;
      if (n && typeof n == "object" && !Array.isArray(n)) {
        for (const o in n) {
          const l = r;
          if (typeof o != "string") {
            const u = {
              instancePath: a + "/bookingFieldsResponses",
              schemaPath:
                "#/properties/bookingFieldsResponses/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: o,
            };
            (e === null ? (e = [u]) : e.push(u), r++);
          }
          var i = l === r;
          if (!i) {
            const u = {
              instancePath: a + "/bookingFieldsResponses",
              schemaPath: "#/properties/bookingFieldsResponses/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: o },
              message: "property name must be valid",
            };
            (e === null ? (e = [u]) : e.push(u), r++);
          }
        }
        for (const o in n) {
          let l = n[o];
          const u = r;
          let d = !1;
          const J = r;
          if (typeof l != "string") {
            const y = {
              instancePath:
                a +
                "/bookingFieldsResponses/" +
                o.replace(/~/g, "~0").replace(/\//g, "~1"),
              schemaPath:
                "#/properties/bookingFieldsResponses/additionalProperties/anyOf/0/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [y]) : e.push(y), r++);
          }
          var s = J === r;
          d = d || s;
          const K = r;
          if (typeof l != "number") {
            const y = {
              instancePath:
                a +
                "/bookingFieldsResponses/" +
                o.replace(/~/g, "~0").replace(/\//g, "~1"),
              schemaPath:
                "#/properties/bookingFieldsResponses/additionalProperties/anyOf/1/type",
              keyword: "type",
              params: { type: "number" },
              message: "must be number",
            };
            (e === null ? (e = [y]) : e.push(y), r++);
          }
          var s = K === r;
          d = d || s;
          const Q = r;
          if (typeof l != "boolean") {
            const y = {
              instancePath:
                a +
                "/bookingFieldsResponses/" +
                o.replace(/~/g, "~0").replace(/\//g, "~1"),
              schemaPath:
                "#/properties/bookingFieldsResponses/additionalProperties/anyOf/2/type",
              keyword: "type",
              params: { type: "boolean" },
              message: "must be boolean",
            };
            (e === null ? (e = [y]) : e.push(y), r++);
          }
          var s = Q === r;
          d = d || s;
          const U = r;
          if (Array.isArray(l)) {
            const y = l.length;
            for (let P = 0; P < y; P++)
              if (typeof l[P] != "string") {
                const z = {
                  instancePath:
                    a +
                    "/bookingFieldsResponses/" +
                    o.replace(/~/g, "~0").replace(/\//g, "~1") +
                    "/" +
                    P,
                  schemaPath:
                    "#/properties/bookingFieldsResponses/additionalProperties/anyOf/3/items/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [z]) : e.push(z), r++);
              }
          } else {
            const y = {
              instancePath:
                a +
                "/bookingFieldsResponses/" +
                o.replace(/~/g, "~0").replace(/\//g, "~1"),
              schemaPath:
                "#/properties/bookingFieldsResponses/additionalProperties/anyOf/3/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            (e === null ? (e = [y]) : e.push(y), r++);
          }
          var s = U === r;
          if (((d = d || s), d))
            ((r = u), e !== null && (u ? (e.length = u) : (e = null)));
          else {
            const y = {
              instancePath:
                a +
                "/bookingFieldsResponses/" +
                o.replace(/~/g, "~0").replace(/\//g, "~1"),
              schemaPath:
                "#/properties/bookingFieldsResponses/additionalProperties/anyOf",
              keyword: "anyOf",
              params: {},
              message: "must match a schema in anyOf",
            };
            (e === null ? (e = [y]) : e.push(y), r++);
          }
        }
      } else {
        const o = {
          instancePath: a + "/bookingFieldsResponses",
          schemaPath: "#/properties/bookingFieldsResponses/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [o]) : e.push(o), r++);
      }
    }
    if (t.guests !== void 0) {
      let n = t.guests;
      if (Array.isArray(n)) {
        const o = n.length;
        for (let l = 0; l < o; l++) {
          let u = n[l];
          if (typeof u == "string") {
            if (!R.test(u)) {
              const d = {
                instancePath: a + "/guests/" + l,
                schemaPath: "#/properties/guests/items/pattern",
                keyword: "pattern",
                params: {
                  pattern:
                    "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
                },
                message: `must match pattern "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$"`,
              };
              (e === null ? (e = [d]) : e.push(d), r++);
            }
          } else {
            const d = {
              instancePath: a + "/guests/" + l,
              schemaPath: "#/properties/guests/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [d]) : e.push(d), r++);
          }
        }
      } else {
        const o = {
          instancePath: a + "/guests",
          schemaPath: "#/properties/guests/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [o]) : e.push(o), r++);
      }
    }
    if (t.location !== void 0) {
      let n = t.location;
      if (n && typeof n == "object" && !Array.isArray(n)) {
        for (const o in n) {
          const l = r;
          if (typeof o != "string") {
            const u = {
              instancePath: a + "/location",
              schemaPath: "#/properties/location/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: o,
            };
            (e === null ? (e = [u]) : e.push(u), r++);
          }
          var m = l === r;
          if (!m) {
            const u = {
              instancePath: a + "/location",
              schemaPath: "#/properties/location/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: o },
              message: "property name must be valid",
            };
            (e === null ? (e = [u]) : e.push(u), r++);
          }
        }
        for (const o in n)
          if (typeof n[o] != "string") {
            const l = {
              instancePath:
                a + "/location/" + o.replace(/~/g, "~0").replace(/\//g, "~1"),
              schemaPath: "#/properties/location/additionalProperties/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [l]) : e.push(l), r++);
          }
      } else {
        const o = {
          instancePath: a + "/location",
          schemaPath: "#/properties/location/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [o]) : e.push(o), r++);
      }
    }
    if (t.metadata !== void 0) {
      let n = t.metadata;
      if (n && typeof n == "object" && !Array.isArray(n)) {
        for (const o in n) {
          const l = r;
          if (typeof o != "string") {
            const u = {
              instancePath: a + "/metadata",
              schemaPath: "#/properties/metadata/propertyNames/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
              propertyName: o,
            };
            (e === null ? (e = [u]) : e.push(u), r++);
          }
          var c = l === r;
          if (!c) {
            const u = {
              instancePath: a + "/metadata",
              schemaPath: "#/properties/metadata/propertyNames",
              keyword: "propertyNames",
              params: { propertyName: o },
              message: "property name must be valid",
            };
            (e === null ? (e = [u]) : e.push(u), r++);
          }
        }
        for (const o in n)
          if (typeof n[o] != "string") {
            const l = {
              instancePath:
                a + "/metadata/" + o.replace(/~/g, "~0").replace(/\//g, "~1"),
              schemaPath: "#/properties/metadata/additionalProperties/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [l]) : e.push(l), r++);
          }
      } else {
        const o = {
          instancePath: a + "/metadata",
          schemaPath: "#/properties/metadata/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [o]) : e.push(o), r++);
      }
    }
    if (t.eventTypeId !== void 0) {
      let n = t.eventTypeId;
      if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
        const o = {
          instancePath: a + "/eventTypeId",
          schemaPath: "#/properties/eventTypeId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), r++);
      }
      if (typeof n == "number") {
        if (n > 9007199254740991 || isNaN(n)) {
          const o = {
            instancePath: a + "/eventTypeId",
            schemaPath: "#/properties/eventTypeId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), r++);
        }
        if (n < -9007199254740991 || isNaN(n)) {
          const o = {
            instancePath: a + "/eventTypeId",
            schemaPath: "#/properties/eventTypeId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), r++);
        }
      }
    }
    if (t.startTime !== void 0 && typeof t.startTime != "string") {
      const n = {
        instancePath: a + "/startTime",
        schemaPath: "#/properties/startTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [n]) : e.push(n), r++);
    }
    if (t.name !== void 0 && typeof t.name != "string") {
      const n = {
        instancePath: a + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [n]) : e.push(n), r++);
    }
    if (t.email !== void 0) {
      let n = t.email;
      if (typeof n == "string") {
        if (!R.test(n)) {
          const o = {
            instancePath: a + "/email",
            schemaPath: "#/properties/email/pattern",
            keyword: "pattern",
            params: {
              pattern:
                "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$",
            },
            message: `must match pattern "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}$"`,
          };
          (e === null ? (e = [o]) : e.push(o), r++);
        }
      } else {
        const o = {
          instancePath: a + "/email",
          schemaPath: "#/properties/email/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), r++);
      }
    }
    if (t.timeZone !== void 0 && typeof t.timeZone != "string") {
      const n = {
        instancePath: a + "/timeZone",
        schemaPath: "#/properties/timeZone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [n]) : e.push(n), r++);
    }
    if (t.language !== void 0 && typeof t.language != "string") {
      const n = {
        instancePath: a + "/language",
        schemaPath: "#/properties/language/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [n]) : e.push(n), r++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const n = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [n]) : e.push(n), r++);
    }
  } else {
    const n = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [n]) : e.push(n), r++);
  }
  return ((v.errors = e), r === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = w;
function w(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = w.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.title === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property 'title'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.slug === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "slug" },
        message: "must have required property 'slug'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.lengthInMinutes === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "lengthInMinutes" },
        message: "must have required property 'lengthInMinutes'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (
        !(
          s === "title" ||
          s === "slug" ||
          s === "lengthInMinutes" ||
          s === "description" ||
          s === "locations" ||
          s === "account"
        )
      ) {
        const m = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [m]) : e.push(m), r++);
      }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: a + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.slug !== void 0 && typeof t.slug != "string") {
      const s = {
        instancePath: a + "/slug",
        schemaPath: "#/properties/slug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.lengthInMinutes !== void 0) {
      let s = t.lengthInMinutes;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const m = {
          instancePath: a + "/lengthInMinutes",
          schemaPath: "#/properties/lengthInMinutes/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [m]) : e.push(m), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const m = {
            instancePath: a + "/lengthInMinutes",
            schemaPath: "#/properties/lengthInMinutes/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [m]) : e.push(m), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const m = {
            instancePath: a + "/lengthInMinutes",
            schemaPath: "#/properties/lengthInMinutes/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [m]) : e.push(m), r++);
        }
      }
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: a + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.locations !== void 0) {
      let s = t.locations;
      if (Array.isArray(s)) {
        const m = s.length;
        for (let c = 0; c < m; c++) {
          let n = s[c];
          if (n && typeof n == "object" && !Array.isArray(n))
            for (const o in n) {
              const l = r;
              if (typeof o != "string") {
                const u = {
                  instancePath: a + "/locations/" + c,
                  schemaPath: "#/properties/locations/items/propertyNames/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  propertyName: o,
                };
                (e === null ? (e = [u]) : e.push(u), r++);
              }
              var i = l === r;
              if (!i) {
                const u = {
                  instancePath: a + "/locations/" + c,
                  schemaPath: "#/properties/locations/items/propertyNames",
                  keyword: "propertyNames",
                  params: { propertyName: o },
                  message: "property name must be valid",
                };
                (e === null ? (e = [u]) : e.push(u), r++);
              }
            }
          else {
            const o = {
              instancePath: a + "/locations/" + c,
              schemaPath: "#/properties/locations/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [o]) : e.push(o), r++);
          }
        }
      } else {
        const m = {
          instancePath: a + "/locations",
          schemaPath: "#/properties/locations/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [m]) : e.push(m), r++);
      }
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((w.errors = e), r === 0);
}
w.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const F = _;
function _(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = _.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.eventTypeId === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "eventTypeId" },
        message: "must have required property 'eventTypeId'",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
    for (const i in t)
      if (!(i === "eventTypeId" || i === "account")) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (t.eventTypeId !== void 0) {
      let i = t.eventTypeId;
      if (!(typeof i == "number" && !(i % 1) && !isNaN(i))) {
        const s = {
          instancePath: a + "/eventTypeId",
          schemaPath: "#/properties/eventTypeId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (typeof i == "number") {
        if (i > 9007199254740991 || isNaN(i)) {
          const s = {
            instancePath: a + "/eventTypeId",
            schemaPath: "#/properties/eventTypeId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (i < -9007199254740991 || isNaN(i)) {
          const s = {
            instancePath: a + "/eventTypeId",
            schemaPath: "#/properties/eventTypeId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      }
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), r++);
  }
  return ((_.errors = e), r === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const $ = I;
function I(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = I.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.eventTypeId === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "eventTypeId" },
        message: "must have required property 'eventTypeId'",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
    if (t.start === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "start" },
        message: "must have required property 'start'",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
    if (t.end === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "end" },
        message: "must have required property 'end'",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
    for (const i in t)
      if (
        !(
          i === "eventTypeId" ||
          i === "start" ||
          i === "end" ||
          i === "account"
        )
      ) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (t.eventTypeId !== void 0) {
      let i = t.eventTypeId;
      if (!(typeof i == "number" && !(i % 1) && !isNaN(i))) {
        const s = {
          instancePath: a + "/eventTypeId",
          schemaPath: "#/properties/eventTypeId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (typeof i == "number") {
        if (i > 9007199254740991 || isNaN(i)) {
          const s = {
            instancePath: a + "/eventTypeId",
            schemaPath: "#/properties/eventTypeId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (i < -9007199254740991 || isNaN(i)) {
          const s = {
            instancePath: a + "/eventTypeId",
            schemaPath: "#/properties/eventTypeId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      }
    }
    if (t.start !== void 0 && typeof t.start != "string") {
      const i = {
        instancePath: a + "/start",
        schemaPath: "#/properties/start/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
    if (t.end !== void 0 && typeof t.end != "string") {
      const i = {
        instancePath: a + "/end",
        schemaPath: "#/properties/end/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), r++);
  }
  return ((I.errors = e), r === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const S = N;
function N(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = N.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.uid === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "uid" },
        message: "must have required property 'uid'",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
    for (const i in t)
      if (!(i === "uid" || i === "account")) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (t.uid !== void 0 && typeof t.uid != "string") {
      const i = {
        instancePath: a + "/uid",
        schemaPath: "#/properties/uid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), r++);
  }
  return ((N.errors = e), r === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = A;
function A(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = A.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const i in t)
      if (i !== "account") {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (t.account !== void 0 && typeof t.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), r++);
  }
  return ((A.errors = e), r === 0);
}
A.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const L = T;
function T(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = T.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.scheduleId === void 0) {
      const i = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "scheduleId" },
        message: "must have required property 'scheduleId'",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
    for (const i in t)
      if (!(i === "scheduleId" || i === "account")) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (t.scheduleId !== void 0) {
      let i = t.scheduleId;
      if (!(typeof i == "number" && !(i % 1) && !isNaN(i))) {
        const s = {
          instancePath: a + "/scheduleId",
          schemaPath: "#/properties/scheduleId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (typeof i == "number") {
        if (i > 9007199254740991 || isNaN(i)) {
          const s = {
            instancePath: a + "/scheduleId",
            schemaPath: "#/properties/scheduleId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (i < -9007199254740991 || isNaN(i)) {
          const s = {
            instancePath: a + "/scheduleId",
            schemaPath: "#/properties/scheduleId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      }
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), r++);
  }
  return ((T.errors = e), r === 0);
}
T.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const V = j,
  ee = {
    properties: {
      status: {
        enum: ["upcoming", "recurring", "past", "cancelled", "unconfirmed"],
      },
    },
  };
function j(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = j.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const i in t)
      if (
        !(
          i === "start" ||
          i === "end" ||
          i === "cursor" ||
          i === "status" ||
          i === "limit" ||
          i === "page" ||
          i === "afterCursor" ||
          i === "account"
        )
      ) {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (t.start !== void 0) {
      let i = t.start;
      if (!(typeof i == "number" && !(i % 1) && !isNaN(i))) {
        const s = {
          instancePath: a + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (typeof i == "number") {
        if (i > 9007199254740991 || isNaN(i)) {
          const s = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (i < 1 || isNaN(i)) {
          const s = {
            instancePath: a + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      }
    }
    if (t.end !== void 0) {
      let i = t.end;
      if (!(typeof i == "number" && !(i % 1) && !isNaN(i))) {
        const s = {
          instancePath: a + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (typeof i == "number") {
        if (i > 9007199254740991 || isNaN(i)) {
          const s = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (i < 1 || isNaN(i)) {
          const s = {
            instancePath: a + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      }
    }
    if (t.cursor !== void 0 && typeof t.cursor != "string") {
      const i = {
        instancePath: a + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
    if (t.status !== void 0) {
      let i = t.status;
      if (typeof i != "string") {
        const s = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (
        !(
          i === "upcoming" ||
          i === "recurring" ||
          i === "past" ||
          i === "cancelled" ||
          i === "unconfirmed"
        )
      ) {
        const s = {
          instancePath: a + "/status",
          schemaPath: "#/properties/status/enum",
          keyword: "enum",
          params: { allowedValues: ee.properties.status.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    }
    if (t.limit !== void 0) {
      let i = t.limit;
      if (!(typeof i == "number" && !(i % 1) && !isNaN(i))) {
        const s = {
          instancePath: a + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (typeof i == "number") {
        if (i > 100 || isNaN(i)) {
          const s = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (i < 1 || isNaN(i)) {
          const s = {
            instancePath: a + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      }
    }
    if (t.page !== void 0) {
      let i = t.page;
      if (!(typeof i == "number" && !(i % 1) && !isNaN(i))) {
        const s = {
          instancePath: a + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
      if (typeof i == "number") {
        if (i > 9007199254740991 || isNaN(i)) {
          const s = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
        if (i < -9007199254740991 || isNaN(i)) {
          const s = {
            instancePath: a + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), r++);
        }
      }
    }
    if (t.afterCursor !== void 0 && typeof t.afterCursor != "string") {
      const i = {
        instancePath: a + "/afterCursor",
        schemaPath: "#/properties/afterCursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), r++);
  }
  return ((j.errors = e), r === 0);
}
j.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Y = q;
function q(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = q.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const i in t)
      if (i !== "account") {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (t.account !== void 0 && typeof t.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), r++);
  }
  return ((q.errors = e), r === 0);
}
q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = D;
function D(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = D.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    for (const i in t)
      if (i !== "account") {
        const s = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: i },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), r++);
      }
    if (t.account !== void 0 && typeof t.account != "string") {
      const i = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [i]) : e.push(i), r++);
    }
  } else {
    const i = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [i]) : e.push(i), r++);
  }
  return ((D.errors = e), r === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = O;
function O(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = O.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.start === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "start" },
        message: "must have required property 'start'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (
        !(
          s === "uid" ||
          s === "bookingId" ||
          s === "start" ||
          s === "reschedulingReason" ||
          s === "account"
        )
      ) {
        const m = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [m]) : e.push(m), r++);
      }
    if (t.uid !== void 0 && typeof t.uid != "string") {
      const s = {
        instancePath: a + "/uid",
        schemaPath: "#/properties/uid/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.bookingId !== void 0) {
      let s = t.bookingId;
      const m = r;
      let c = !1;
      const n = r;
      if (typeof s != "string") {
        const l = {
          instancePath: a + "/bookingId",
          schemaPath: "#/properties/bookingId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), r++);
      }
      var i = n === r;
      c = c || i;
      const o = r;
      if (typeof s != "number") {
        const l = {
          instancePath: a + "/bookingId",
          schemaPath: "#/properties/bookingId/anyOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [l]) : e.push(l), r++);
      }
      var i = o === r;
      if (((c = c || i), c))
        ((r = m), e !== null && (m ? (e.length = m) : (e = null)));
      else {
        const l = {
          instancePath: a + "/bookingId",
          schemaPath: "#/properties/bookingId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), r++);
      }
    }
    if (t.start !== void 0 && typeof t.start != "string") {
      const s = {
        instancePath: a + "/start",
        schemaPath: "#/properties/start/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (
      t.reschedulingReason !== void 0 &&
      typeof t.reschedulingReason != "string"
    ) {
      const s = {
        instancePath: a + "/reschedulingReason",
        schemaPath: "#/properties/reschedulingReason/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((O.errors = e), r === 0);
}
O.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const H = Z;
function Z(
  t,
  {
    instancePath: a = "",
    parentData: f,
    parentDataProperty: h,
    rootData: g = t,
    dynamicAnchors: b = {},
  } = {},
) {
  let e = null,
    r = 0;
  const p = Z.evaluated;
  if (
    (p.dynamicProps && (p.props = void 0),
    p.dynamicItems && (p.items = void 0),
    t && typeof t == "object" && !Array.isArray(t))
  ) {
    if (t.eventTypeId === void 0) {
      const s = {
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "eventTypeId" },
        message: "must have required property 'eventTypeId'",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    for (const s in t)
      if (
        !(
          s === "eventTypeId" ||
          s === "title" ||
          s === "slug" ||
          s === "lengthInMinutes" ||
          s === "description" ||
          s === "locations" ||
          s === "account"
        )
      ) {
        const m = {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [m]) : e.push(m), r++);
      }
    if (t.eventTypeId !== void 0) {
      let s = t.eventTypeId;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const m = {
          instancePath: a + "/eventTypeId",
          schemaPath: "#/properties/eventTypeId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [m]) : e.push(m), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const m = {
            instancePath: a + "/eventTypeId",
            schemaPath: "#/properties/eventTypeId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [m]) : e.push(m), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const m = {
            instancePath: a + "/eventTypeId",
            schemaPath: "#/properties/eventTypeId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [m]) : e.push(m), r++);
        }
      }
    }
    if (t.title !== void 0 && typeof t.title != "string") {
      const s = {
        instancePath: a + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.slug !== void 0 && typeof t.slug != "string") {
      const s = {
        instancePath: a + "/slug",
        schemaPath: "#/properties/slug/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.lengthInMinutes !== void 0) {
      let s = t.lengthInMinutes;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const m = {
          instancePath: a + "/lengthInMinutes",
          schemaPath: "#/properties/lengthInMinutes/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [m]) : e.push(m), r++);
      }
      if (typeof s == "number") {
        if (s > 9007199254740991 || isNaN(s)) {
          const m = {
            instancePath: a + "/lengthInMinutes",
            schemaPath: "#/properties/lengthInMinutes/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [m]) : e.push(m), r++);
        }
        if (s < -9007199254740991 || isNaN(s)) {
          const m = {
            instancePath: a + "/lengthInMinutes",
            schemaPath: "#/properties/lengthInMinutes/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [m]) : e.push(m), r++);
        }
      }
    }
    if (t.description !== void 0 && typeof t.description != "string") {
      const s = {
        instancePath: a + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
    if (t.locations !== void 0) {
      let s = t.locations;
      if (Array.isArray(s)) {
        const m = s.length;
        for (let c = 0; c < m; c++) {
          let n = s[c];
          if (n && typeof n == "object" && !Array.isArray(n))
            for (const o in n) {
              const l = r;
              if (typeof o != "string") {
                const u = {
                  instancePath: a + "/locations/" + c,
                  schemaPath: "#/properties/locations/items/propertyNames/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  propertyName: o,
                };
                (e === null ? (e = [u]) : e.push(u), r++);
              }
              var i = l === r;
              if (!i) {
                const u = {
                  instancePath: a + "/locations/" + c,
                  schemaPath: "#/properties/locations/items/propertyNames",
                  keyword: "propertyNames",
                  params: { propertyName: o },
                  message: "property name must be valid",
                };
                (e === null ? (e = [u]) : e.push(u), r++);
              }
            }
          else {
            const o = {
              instancePath: a + "/locations/" + c,
              schemaPath: "#/properties/locations/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [o]) : e.push(o), r++);
          }
        }
      } else {
        const m = {
          instancePath: a + "/locations",
          schemaPath: "#/properties/locations/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [m]) : e.push(m), r++);
      }
    }
    if (t.account !== void 0 && typeof t.account != "string") {
      const s = {
        instancePath: a + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), r++);
    }
  } else {
    const s = {
      instancePath: a,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), r++);
  }
  return ((Z.errors = e), r === 0);
}
Z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const se = {
  calcom_cancel_booking: x,
  calcom_create_booking: M,
  calcom_create_event_type: E,
  calcom_delete_event_type: F,
  calcom_get_availability: $,
  calcom_get_booking: S,
  calcom_get_me: C,
  calcom_get_schedule: L,
  calcom_list_bookings: V,
  calcom_list_event_types: Y,
  calcom_list_schedules: B,
  calcom_reschedule_booking: G,
  calcom_update_event_type: H,
};
exports.NATIVE_TOOL_VALIDATORS = se;
exports.validate_calcom_cancel_booking = x;
exports.validate_calcom_create_booking = M;
exports.validate_calcom_create_event_type = E;
exports.validate_calcom_delete_event_type = F;
exports.validate_calcom_get_availability = $;
exports.validate_calcom_get_booking = S;
exports.validate_calcom_get_me = C;
exports.validate_calcom_get_schedule = L;
exports.validate_calcom_list_bookings = V;
exports.validate_calcom_list_event_types = Y;
exports.validate_calcom_list_schedules = B;
exports.validate_calcom_reschedule_booking = G;
exports.validate_calcom_update_event_type = H;
