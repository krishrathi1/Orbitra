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
      (r._sentryDebugIds[n] = "cc6d3978-1144-4e1c-85d9-7b29d7014a54"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-cc6d3978-1144-4e1c-85d9-7b29d7014a54"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const A = v;
function v(
  r,
  {
    instancePath: n = "",
    parentData: d,
    parentDataProperty: y,
    rootData: f = r,
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
    if (r.eventIds === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "eventIds" },
        message: "must have required property 'eventIds'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "calendarId" || s === "eventIds")) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.calendarId !== void 0 && typeof r.calendarId != "string") {
      const s = {
        instancePath: n + "/calendarId",
        schemaPath: "#/properties/calendarId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.eventIds !== void 0) {
      let s = r.eventIds;
      if (Array.isArray(s)) {
        if (s.length > 100) {
          const a = {
            instancePath: n + "/eventIds",
            schemaPath: "#/properties/eventIds/maxItems",
            keyword: "maxItems",
            params: { limit: 100 },
            message: "must NOT have more than 100 items",
          };
          (e === null ? (e = [a]) : e.push(a), i++);
        }
        if (s.length < 1) {
          const a = {
            instancePath: n + "/eventIds",
            schemaPath: "#/properties/eventIds/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items",
          };
          (e === null ? (e = [a]) : e.push(a), i++);
        }
        const t = s.length;
        for (let a = 0; a < t; a++)
          if (typeof s[a] != "string") {
            const o = {
              instancePath: n + "/eventIds/" + a,
              schemaPath: "#/properties/eventIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: n + "/eventIds",
          schemaPath: "#/properties/eventIds/type",
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
  return ((v.errors = e), i === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const q = b;
function b(
  r,
  {
    instancePath: n = "",
    parentData: d,
    parentDataProperty: y,
    rootData: f = r,
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
  ) {
    for (const s in r)
      if (
        !(
          s === "maxResults" ||
          s === "pageToken" ||
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
    if (r.maxResults !== void 0) {
      let s = r.maxResults;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: n + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 250 || isNaN(s)) {
          const t = {
            instancePath: n + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 250 },
            message: "must be <= 250",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: n + "/maxResults",
            schemaPath: "#/properties/maxResults/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: n + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
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
  return ((b.errors = e), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const x = P,
  M = {
    properties: {
      calendarId: { type: "string" },
      eventTypes: {
        type: "array",
        items: {
          enum: [
            "birthday",
            "default",
            "focusTime",
            "outOfOffice",
            "workingLocation",
          ],
          type: "string",
        },
      },
      maxResults: { type: "integer", minimum: 1, maximum: 2500 },
      orderBy: { enum: ["startTime", "updated"], type: "string" },
      pageToken: { type: "string" },
      query: { type: "string" },
      showDeleted: { type: "boolean" },
      singleEvents: { type: "boolean" },
      timeMax: { type: "string" },
      timeMin: { type: "string" },
      updatedMin: { type: "string" },
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
  T = Object.prototype.hasOwnProperty;
function P(
  r,
  {
    instancePath: n = "",
    parentData: d,
    parentDataProperty: y,
    rootData: f = r,
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
    for (const s in r)
      if (!T.call(M.properties, s)) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.calendarId !== void 0 && typeof r.calendarId != "string") {
      const s = {
        instancePath: n + "/calendarId",
        schemaPath: "#/properties/calendarId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.eventTypes !== void 0) {
      let s = r.eventTypes;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let a = 0; a < t; a++) {
          let o = s[a];
          if (typeof o != "string") {
            const u = {
              instancePath: n + "/eventTypes/" + a,
              schemaPath: "#/properties/eventTypes/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [u]) : e.push(u), i++);
          }
          if (
            !(
              o === "birthday" ||
              o === "default" ||
              o === "focusTime" ||
              o === "outOfOffice" ||
              o === "workingLocation"
            )
          ) {
            const u = {
              instancePath: n + "/eventTypes/" + a,
              schemaPath: "#/properties/eventTypes/items/enum",
              keyword: "enum",
              params: { allowedValues: M.properties.eventTypes.items.enum },
              message: "must be equal to one of the allowed values",
            };
            (e === null ? (e = [u]) : e.push(u), i++);
          }
        }
      } else {
        const t = {
          instancePath: n + "/eventTypes",
          schemaPath: "#/properties/eventTypes/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.maxResults !== void 0) {
      let s = r.maxResults;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: n + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 2500 || isNaN(s)) {
          const t = {
            instancePath: n + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 2500 },
            message: "must be <= 2500",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 1 || isNaN(s)) {
          const t = {
            instancePath: n + "/maxResults",
            schemaPath: "#/properties/maxResults/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.orderBy !== void 0) {
      let s = r.orderBy;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/orderBy",
          schemaPath: "#/properties/orderBy/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "startTime" || s === "updated")) {
        const t = {
          instancePath: n + "/orderBy",
          schemaPath: "#/properties/orderBy/enum",
          keyword: "enum",
          params: { allowedValues: M.properties.orderBy.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.pageToken !== void 0 && typeof r.pageToken != "string") {
      const s = {
        instancePath: n + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
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
    if (r.showDeleted !== void 0 && typeof r.showDeleted != "boolean") {
      const s = {
        instancePath: n + "/showDeleted",
        schemaPath: "#/properties/showDeleted/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.singleEvents !== void 0 && typeof r.singleEvents != "boolean") {
      const s = {
        instancePath: n + "/singleEvents",
        schemaPath: "#/properties/singleEvents/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.timeMax !== void 0 && typeof r.timeMax != "string") {
      const s = {
        instancePath: n + "/timeMax",
        schemaPath: "#/properties/timeMax/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.timeMin !== void 0 && typeof r.timeMin != "string") {
      const s = {
        instancePath: n + "/timeMin",
        schemaPath: "#/properties/timeMin/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.updatedMin !== void 0 && typeof r.updatedMin != "string") {
      const s = {
        instancePath: n + "/updatedMin",
        schemaPath: "#/properties/updatedMin/type",
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
  return ((P.errors = e), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const O = w,
  S = require("ajv/dist/runtime/ucs2length").default;
function w(
  r,
  {
    instancePath: n = "",
    parentData: d,
    parentDataProperty: y,
    rootData: f = r,
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
    if (r.eventId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "eventId" },
        message: "must have required property 'eventId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "calendarId" || s === "eventId")) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.calendarId !== void 0 && typeof r.calendarId != "string") {
      const s = {
        instancePath: n + "/calendarId",
        schemaPath: "#/properties/calendarId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.eventId !== void 0) {
      let s = r.eventId;
      if (typeof s == "string") {
        if (S(s) < 1) {
          const t = {
            instancePath: n + "/eventId",
            schemaPath: "#/properties/eventId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/eventId",
          schemaPath: "#/properties/eventId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
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
const j = k,
  h = {
    properties: {
      calendarId: { type: "string" },
      summary: { type: "string" },
      description: { type: "string" },
      location: { type: "string" },
      startDatetime: { type: "string" },
      endDatetime: { type: "string" },
      eventDurationHour: { type: "integer", minimum: 0, maximum: 24 },
      eventDurationMinutes: { type: "integer", minimum: 0, maximum: 59 },
      timezone: { type: "string" },
      attendees: { type: "array", items: { type: "string" } },
      recurrence: { type: "array", items: { type: "string" } },
      visibility: {
        enum: ["default", "public", "private", "confidential"],
        type: "string",
      },
      transparency: { enum: ["opaque", "transparent"], type: "string" },
      sendUpdates: { type: "boolean" },
      guestsCanModify: { type: "boolean" },
      guestsCanInviteOthers: { type: "boolean" },
      guestsCanSeeOtherGuests: { type: "boolean" },
      addGoogleMeet: { type: "boolean" },
      colorId: { type: "string" },
      reminders: {
        type: "object",
        properties: {
          useDefault: { type: "boolean" },
          overrides: {
            type: "array",
            items: {
              type: "object",
              properties: {
                method: { enum: ["email", "popup"], type: "string" },
                minutes: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
              },
              required: ["method", "minutes"],
            },
          },
        },
        required: ["useDefault"],
      },
      eventType: {
        enum: ["default", "focusTime", "outOfOffice"],
        type: "string",
      },
      autoDeclineMode: {
        enum: [
          "declineNone",
          "declineAllConflictingInvitations",
          "declineOnlyNewConflictingInvitations",
        ],
        type: "string",
      },
      declineMessage: { type: "string" },
      chatStatus: { const: "doNotDisturb" },
    },
  };
function k(
  r,
  {
    instancePath: n = "",
    parentData: d,
    parentDataProperty: y,
    rootData: f = r,
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
    if (r.startDatetime === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "startDatetime" },
        message: "must have required property 'startDatetime'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!T.call(h.properties, s)) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.calendarId !== void 0 && typeof r.calendarId != "string") {
      const s = {
        instancePath: n + "/calendarId",
        schemaPath: "#/properties/calendarId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.summary !== void 0 && typeof r.summary != "string") {
      const s = {
        instancePath: n + "/summary",
        schemaPath: "#/properties/summary/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.description !== void 0 && typeof r.description != "string") {
      const s = {
        instancePath: n + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.location !== void 0 && typeof r.location != "string") {
      const s = {
        instancePath: n + "/location",
        schemaPath: "#/properties/location/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.startDatetime !== void 0 && typeof r.startDatetime != "string") {
      const s = {
        instancePath: n + "/startDatetime",
        schemaPath: "#/properties/startDatetime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.endDatetime !== void 0 && typeof r.endDatetime != "string") {
      const s = {
        instancePath: n + "/endDatetime",
        schemaPath: "#/properties/endDatetime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.eventDurationHour !== void 0) {
      let s = r.eventDurationHour;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: n + "/eventDurationHour",
          schemaPath: "#/properties/eventDurationHour/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 24 || isNaN(s)) {
          const t = {
            instancePath: n + "/eventDurationHour",
            schemaPath: "#/properties/eventDurationHour/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 24 },
            message: "must be <= 24",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: n + "/eventDurationHour",
            schemaPath: "#/properties/eventDurationHour/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.eventDurationMinutes !== void 0) {
      let s = r.eventDurationMinutes;
      if (!(typeof s == "number" && !(s % 1) && !isNaN(s))) {
        const t = {
          instancePath: n + "/eventDurationMinutes",
          schemaPath: "#/properties/eventDurationMinutes/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof s == "number") {
        if (s > 59 || isNaN(s)) {
          const t = {
            instancePath: n + "/eventDurationMinutes",
            schemaPath: "#/properties/eventDurationMinutes/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 59 },
            message: "must be <= 59",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s < 0 || isNaN(s)) {
          const t = {
            instancePath: n + "/eventDurationMinutes",
            schemaPath: "#/properties/eventDurationMinutes/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (r.timezone !== void 0 && typeof r.timezone != "string") {
      const s = {
        instancePath: n + "/timezone",
        schemaPath: "#/properties/timezone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.attendees !== void 0) {
      let s = r.attendees;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let a = 0; a < t; a++)
          if (typeof s[a] != "string") {
            const o = {
              instancePath: n + "/attendees/" + a,
              schemaPath: "#/properties/attendees/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: n + "/attendees",
          schemaPath: "#/properties/attendees/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.recurrence !== void 0) {
      let s = r.recurrence;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let a = 0; a < t; a++)
          if (typeof s[a] != "string") {
            const o = {
              instancePath: n + "/recurrence/" + a,
              schemaPath: "#/properties/recurrence/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: n + "/recurrence",
          schemaPath: "#/properties/recurrence/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.visibility !== void 0) {
      let s = r.visibility;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/visibility",
          schemaPath: "#/properties/visibility/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "default" ||
          s === "public" ||
          s === "private" ||
          s === "confidential"
        )
      ) {
        const t = {
          instancePath: n + "/visibility",
          schemaPath: "#/properties/visibility/enum",
          keyword: "enum",
          params: { allowedValues: h.properties.visibility.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.transparency !== void 0) {
      let s = r.transparency;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/transparency",
          schemaPath: "#/properties/transparency/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "opaque" || s === "transparent")) {
        const t = {
          instancePath: n + "/transparency",
          schemaPath: "#/properties/transparency/enum",
          keyword: "enum",
          params: { allowedValues: h.properties.transparency.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.sendUpdates !== void 0 && typeof r.sendUpdates != "boolean") {
      const s = {
        instancePath: n + "/sendUpdates",
        schemaPath: "#/properties/sendUpdates/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.guestsCanModify !== void 0 && typeof r.guestsCanModify != "boolean") {
      const s = {
        instancePath: n + "/guestsCanModify",
        schemaPath: "#/properties/guestsCanModify/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.guestsCanInviteOthers !== void 0 &&
      typeof r.guestsCanInviteOthers != "boolean"
    ) {
      const s = {
        instancePath: n + "/guestsCanInviteOthers",
        schemaPath: "#/properties/guestsCanInviteOthers/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.guestsCanSeeOtherGuests !== void 0 &&
      typeof r.guestsCanSeeOtherGuests != "boolean"
    ) {
      const s = {
        instancePath: n + "/guestsCanSeeOtherGuests",
        schemaPath: "#/properties/guestsCanSeeOtherGuests/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.addGoogleMeet !== void 0 && typeof r.addGoogleMeet != "boolean") {
      const s = {
        instancePath: n + "/addGoogleMeet",
        schemaPath: "#/properties/addGoogleMeet/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.colorId !== void 0 && typeof r.colorId != "string") {
      const s = {
        instancePath: n + "/colorId",
        schemaPath: "#/properties/colorId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.reminders !== void 0) {
      let s = r.reminders;
      if (s && typeof s == "object" && !Array.isArray(s)) {
        if (s.useDefault === void 0) {
          const t = {
            instancePath: n + "/reminders",
            schemaPath: "#/properties/reminders/required",
            keyword: "required",
            params: { missingProperty: "useDefault" },
            message: "must have required property 'useDefault'",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s.useDefault !== void 0 && typeof s.useDefault != "boolean") {
          const t = {
            instancePath: n + "/reminders/useDefault",
            schemaPath: "#/properties/reminders/properties/useDefault/type",
            keyword: "type",
            params: { type: "boolean" },
            message: "must be boolean",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s.overrides !== void 0) {
          let t = s.overrides;
          if (Array.isArray(t)) {
            const a = t.length;
            for (let o = 0; o < a; o++) {
              let u = t[o];
              if (u && typeof u == "object" && !Array.isArray(u)) {
                if (u.method === void 0) {
                  const m = {
                    instancePath: n + "/reminders/overrides/" + o,
                    schemaPath:
                      "#/properties/reminders/properties/overrides/items/required",
                    keyword: "required",
                    params: { missingProperty: "method" },
                    message: "must have required property 'method'",
                  };
                  (e === null ? (e = [m]) : e.push(m), i++);
                }
                if (u.minutes === void 0) {
                  const m = {
                    instancePath: n + "/reminders/overrides/" + o,
                    schemaPath:
                      "#/properties/reminders/properties/overrides/items/required",
                    keyword: "required",
                    params: { missingProperty: "minutes" },
                    message: "must have required property 'minutes'",
                  };
                  (e === null ? (e = [m]) : e.push(m), i++);
                }
                if (u.method !== void 0) {
                  let m = u.method;
                  if (typeof m != "string") {
                    const l = {
                      instancePath: n + "/reminders/overrides/" + o + "/method",
                      schemaPath:
                        "#/properties/reminders/properties/overrides/items/properties/method/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                    };
                    (e === null ? (e = [l]) : e.push(l), i++);
                  }
                  if (!(m === "email" || m === "popup")) {
                    const l = {
                      instancePath: n + "/reminders/overrides/" + o + "/method",
                      schemaPath:
                        "#/properties/reminders/properties/overrides/items/properties/method/enum",
                      keyword: "enum",
                      params: {
                        allowedValues:
                          h.properties.reminders.properties.overrides.items
                            .properties.method.enum,
                      },
                      message: "must be equal to one of the allowed values",
                    };
                    (e === null ? (e = [l]) : e.push(l), i++);
                  }
                }
                if (u.minutes !== void 0) {
                  let m = u.minutes;
                  if (!(typeof m == "number" && !(m % 1) && !isNaN(m))) {
                    const l = {
                      instancePath:
                        n + "/reminders/overrides/" + o + "/minutes",
                      schemaPath:
                        "#/properties/reminders/properties/overrides/items/properties/minutes/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer",
                    };
                    (e === null ? (e = [l]) : e.push(l), i++);
                  }
                  if (typeof m == "number") {
                    if (m > 9007199254740991 || isNaN(m)) {
                      const l = {
                        instancePath:
                          n + "/reminders/overrides/" + o + "/minutes",
                        schemaPath:
                          "#/properties/reminders/properties/overrides/items/properties/minutes/maximum",
                        keyword: "maximum",
                        params: { comparison: "<=", limit: 9007199254740991 },
                        message: "must be <= 9007199254740991",
                      };
                      (e === null ? (e = [l]) : e.push(l), i++);
                    }
                    if (m < -9007199254740991 || isNaN(m)) {
                      const l = {
                        instancePath:
                          n + "/reminders/overrides/" + o + "/minutes",
                        schemaPath:
                          "#/properties/reminders/properties/overrides/items/properties/minutes/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: -9007199254740991 },
                        message: "must be >= -9007199254740991",
                      };
                      (e === null ? (e = [l]) : e.push(l), i++);
                    }
                  }
                }
              } else {
                const m = {
                  instancePath: n + "/reminders/overrides/" + o,
                  schemaPath:
                    "#/properties/reminders/properties/overrides/items/type",
                  keyword: "type",
                  params: { type: "object" },
                  message: "must be object",
                };
                (e === null ? (e = [m]) : e.push(m), i++);
              }
            }
          } else {
            const a = {
              instancePath: n + "/reminders/overrides",
              schemaPath: "#/properties/reminders/properties/overrides/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            (e === null ? (e = [a]) : e.push(a), i++);
          }
        }
      } else {
        const t = {
          instancePath: n + "/reminders",
          schemaPath: "#/properties/reminders/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.eventType !== void 0) {
      let s = r.eventType;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/eventType",
          schemaPath: "#/properties/eventType/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "default" || s === "focusTime" || s === "outOfOffice")) {
        const t = {
          instancePath: n + "/eventType",
          schemaPath: "#/properties/eventType/enum",
          keyword: "enum",
          params: { allowedValues: h.properties.eventType.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.autoDeclineMode !== void 0) {
      let s = r.autoDeclineMode;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/autoDeclineMode",
          schemaPath: "#/properties/autoDeclineMode/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "declineNone" ||
          s === "declineAllConflictingInvitations" ||
          s === "declineOnlyNewConflictingInvitations"
        )
      ) {
        const t = {
          instancePath: n + "/autoDeclineMode",
          schemaPath: "#/properties/autoDeclineMode/enum",
          keyword: "enum",
          params: { allowedValues: h.properties.autoDeclineMode.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.declineMessage !== void 0 && typeof r.declineMessage != "string") {
      const s = {
        instancePath: n + "/declineMessage",
        schemaPath: "#/properties/declineMessage/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.chatStatus !== void 0 && r.chatStatus !== "doNotDisturb") {
      const s = {
        instancePath: n + "/chatStatus",
        schemaPath: "#/properties/chatStatus/const",
        keyword: "const",
        params: { allowedValue: "doNotDisturb" },
        message: "must be equal to constant",
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
  return ((k.errors = e), i === 0);
}
k.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const C = I,
  g = {
    properties: {
      calendarId: { type: "string" },
      eventId: { type: "string" },
      summary: { type: "string" },
      description: { type: "string" },
      location: { type: "string" },
      startDatetime: { type: "string" },
      endDatetime: { type: "string" },
      timezone: { type: "string" },
      attendees: { type: "array", items: { type: "string" } },
      attendeesToAdd: { type: "array", items: { type: "string" } },
      attendeesToRemove: { type: "array", items: { type: "string" } },
      recurrence: { type: "array", items: { type: "string" } },
      visibility: {
        enum: ["default", "public", "private", "confidential"],
        type: "string",
      },
      transparency: { enum: ["opaque", "transparent"], type: "string" },
      sendUpdates: { type: "boolean" },
      guestsCanModify: { type: "boolean" },
      guestsCanInviteOthers: { type: "boolean" },
      guestsCanSeeOtherGuests: { type: "boolean" },
      colorId: { type: "string" },
      reminders: {
        type: "object",
        properties: {
          useDefault: { type: "boolean" },
          overrides: {
            type: "array",
            items: {
              type: "object",
              properties: {
                method: { enum: ["email", "popup"], type: "string" },
                minutes: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
              },
              required: ["method", "minutes"],
            },
          },
        },
        required: ["useDefault"],
      },
      addGoogleMeet: { type: "boolean" },
      updateScope: {
        enum: ["this_instance", "entire_series", "this_and_following"],
        type: "string",
      },
      autoDeclineMode: {
        enum: [
          "declineNone",
          "declineAllConflictingInvitations",
          "declineOnlyNewConflictingInvitations",
        ],
        type: "string",
      },
      declineMessage: { type: "string" },
      chatStatus: { const: "doNotDisturb" },
    },
  };
function I(
  r,
  {
    instancePath: n = "",
    parentData: d,
    parentDataProperty: y,
    rootData: f = r,
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
    if (r.eventId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "eventId" },
        message: "must have required property 'eventId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!T.call(g.properties, s)) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.calendarId !== void 0 && typeof r.calendarId != "string") {
      const s = {
        instancePath: n + "/calendarId",
        schemaPath: "#/properties/calendarId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.eventId !== void 0 && typeof r.eventId != "string") {
      const s = {
        instancePath: n + "/eventId",
        schemaPath: "#/properties/eventId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.summary !== void 0 && typeof r.summary != "string") {
      const s = {
        instancePath: n + "/summary",
        schemaPath: "#/properties/summary/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.description !== void 0 && typeof r.description != "string") {
      const s = {
        instancePath: n + "/description",
        schemaPath: "#/properties/description/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.location !== void 0 && typeof r.location != "string") {
      const s = {
        instancePath: n + "/location",
        schemaPath: "#/properties/location/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.startDatetime !== void 0 && typeof r.startDatetime != "string") {
      const s = {
        instancePath: n + "/startDatetime",
        schemaPath: "#/properties/startDatetime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.endDatetime !== void 0 && typeof r.endDatetime != "string") {
      const s = {
        instancePath: n + "/endDatetime",
        schemaPath: "#/properties/endDatetime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.timezone !== void 0 && typeof r.timezone != "string") {
      const s = {
        instancePath: n + "/timezone",
        schemaPath: "#/properties/timezone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.attendees !== void 0) {
      let s = r.attendees;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let a = 0; a < t; a++)
          if (typeof s[a] != "string") {
            const o = {
              instancePath: n + "/attendees/" + a,
              schemaPath: "#/properties/attendees/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: n + "/attendees",
          schemaPath: "#/properties/attendees/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.attendeesToAdd !== void 0) {
      let s = r.attendeesToAdd;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let a = 0; a < t; a++)
          if (typeof s[a] != "string") {
            const o = {
              instancePath: n + "/attendeesToAdd/" + a,
              schemaPath: "#/properties/attendeesToAdd/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: n + "/attendeesToAdd",
          schemaPath: "#/properties/attendeesToAdd/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.attendeesToRemove !== void 0) {
      let s = r.attendeesToRemove;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let a = 0; a < t; a++)
          if (typeof s[a] != "string") {
            const o = {
              instancePath: n + "/attendeesToRemove/" + a,
              schemaPath: "#/properties/attendeesToRemove/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: n + "/attendeesToRemove",
          schemaPath: "#/properties/attendeesToRemove/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.recurrence !== void 0) {
      let s = r.recurrence;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let a = 0; a < t; a++)
          if (typeof s[a] != "string") {
            const o = {
              instancePath: n + "/recurrence/" + a,
              schemaPath: "#/properties/recurrence/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: n + "/recurrence",
          schemaPath: "#/properties/recurrence/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.visibility !== void 0) {
      let s = r.visibility;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/visibility",
          schemaPath: "#/properties/visibility/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "default" ||
          s === "public" ||
          s === "private" ||
          s === "confidential"
        )
      ) {
        const t = {
          instancePath: n + "/visibility",
          schemaPath: "#/properties/visibility/enum",
          keyword: "enum",
          params: { allowedValues: g.properties.visibility.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.transparency !== void 0) {
      let s = r.transparency;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/transparency",
          schemaPath: "#/properties/transparency/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "opaque" || s === "transparent")) {
        const t = {
          instancePath: n + "/transparency",
          schemaPath: "#/properties/transparency/enum",
          keyword: "enum",
          params: { allowedValues: g.properties.transparency.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.sendUpdates !== void 0 && typeof r.sendUpdates != "boolean") {
      const s = {
        instancePath: n + "/sendUpdates",
        schemaPath: "#/properties/sendUpdates/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.guestsCanModify !== void 0 && typeof r.guestsCanModify != "boolean") {
      const s = {
        instancePath: n + "/guestsCanModify",
        schemaPath: "#/properties/guestsCanModify/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.guestsCanInviteOthers !== void 0 &&
      typeof r.guestsCanInviteOthers != "boolean"
    ) {
      const s = {
        instancePath: n + "/guestsCanInviteOthers",
        schemaPath: "#/properties/guestsCanInviteOthers/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (
      r.guestsCanSeeOtherGuests !== void 0 &&
      typeof r.guestsCanSeeOtherGuests != "boolean"
    ) {
      const s = {
        instancePath: n + "/guestsCanSeeOtherGuests",
        schemaPath: "#/properties/guestsCanSeeOtherGuests/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.colorId !== void 0 && typeof r.colorId != "string") {
      const s = {
        instancePath: n + "/colorId",
        schemaPath: "#/properties/colorId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.reminders !== void 0) {
      let s = r.reminders;
      if (s && typeof s == "object" && !Array.isArray(s)) {
        if (s.useDefault === void 0) {
          const t = {
            instancePath: n + "/reminders",
            schemaPath: "#/properties/reminders/required",
            keyword: "required",
            params: { missingProperty: "useDefault" },
            message: "must have required property 'useDefault'",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s.useDefault !== void 0 && typeof s.useDefault != "boolean") {
          const t = {
            instancePath: n + "/reminders/useDefault",
            schemaPath: "#/properties/reminders/properties/useDefault/type",
            keyword: "type",
            params: { type: "boolean" },
            message: "must be boolean",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (s.overrides !== void 0) {
          let t = s.overrides;
          if (Array.isArray(t)) {
            const a = t.length;
            for (let o = 0; o < a; o++) {
              let u = t[o];
              if (u && typeof u == "object" && !Array.isArray(u)) {
                if (u.method === void 0) {
                  const m = {
                    instancePath: n + "/reminders/overrides/" + o,
                    schemaPath:
                      "#/properties/reminders/properties/overrides/items/required",
                    keyword: "required",
                    params: { missingProperty: "method" },
                    message: "must have required property 'method'",
                  };
                  (e === null ? (e = [m]) : e.push(m), i++);
                }
                if (u.minutes === void 0) {
                  const m = {
                    instancePath: n + "/reminders/overrides/" + o,
                    schemaPath:
                      "#/properties/reminders/properties/overrides/items/required",
                    keyword: "required",
                    params: { missingProperty: "minutes" },
                    message: "must have required property 'minutes'",
                  };
                  (e === null ? (e = [m]) : e.push(m), i++);
                }
                if (u.method !== void 0) {
                  let m = u.method;
                  if (typeof m != "string") {
                    const l = {
                      instancePath: n + "/reminders/overrides/" + o + "/method",
                      schemaPath:
                        "#/properties/reminders/properties/overrides/items/properties/method/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                    };
                    (e === null ? (e = [l]) : e.push(l), i++);
                  }
                  if (!(m === "email" || m === "popup")) {
                    const l = {
                      instancePath: n + "/reminders/overrides/" + o + "/method",
                      schemaPath:
                        "#/properties/reminders/properties/overrides/items/properties/method/enum",
                      keyword: "enum",
                      params: {
                        allowedValues:
                          g.properties.reminders.properties.overrides.items
                            .properties.method.enum,
                      },
                      message: "must be equal to one of the allowed values",
                    };
                    (e === null ? (e = [l]) : e.push(l), i++);
                  }
                }
                if (u.minutes !== void 0) {
                  let m = u.minutes;
                  if (!(typeof m == "number" && !(m % 1) && !isNaN(m))) {
                    const l = {
                      instancePath:
                        n + "/reminders/overrides/" + o + "/minutes",
                      schemaPath:
                        "#/properties/reminders/properties/overrides/items/properties/minutes/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer",
                    };
                    (e === null ? (e = [l]) : e.push(l), i++);
                  }
                  if (typeof m == "number") {
                    if (m > 9007199254740991 || isNaN(m)) {
                      const l = {
                        instancePath:
                          n + "/reminders/overrides/" + o + "/minutes",
                        schemaPath:
                          "#/properties/reminders/properties/overrides/items/properties/minutes/maximum",
                        keyword: "maximum",
                        params: { comparison: "<=", limit: 9007199254740991 },
                        message: "must be <= 9007199254740991",
                      };
                      (e === null ? (e = [l]) : e.push(l), i++);
                    }
                    if (m < -9007199254740991 || isNaN(m)) {
                      const l = {
                        instancePath:
                          n + "/reminders/overrides/" + o + "/minutes",
                        schemaPath:
                          "#/properties/reminders/properties/overrides/items/properties/minutes/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: -9007199254740991 },
                        message: "must be >= -9007199254740991",
                      };
                      (e === null ? (e = [l]) : e.push(l), i++);
                    }
                  }
                }
              } else {
                const m = {
                  instancePath: n + "/reminders/overrides/" + o,
                  schemaPath:
                    "#/properties/reminders/properties/overrides/items/type",
                  keyword: "type",
                  params: { type: "object" },
                  message: "must be object",
                };
                (e === null ? (e = [m]) : e.push(m), i++);
              }
            }
          } else {
            const a = {
              instancePath: n + "/reminders/overrides",
              schemaPath: "#/properties/reminders/properties/overrides/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            (e === null ? (e = [a]) : e.push(a), i++);
          }
        }
      } else {
        const t = {
          instancePath: n + "/reminders",
          schemaPath: "#/properties/reminders/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.addGoogleMeet !== void 0 && typeof r.addGoogleMeet != "boolean") {
      const s = {
        instancePath: n + "/addGoogleMeet",
        schemaPath: "#/properties/addGoogleMeet/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.updateScope !== void 0) {
      let s = r.updateScope;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/updateScope",
          schemaPath: "#/properties/updateScope/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "this_instance" ||
          s === "entire_series" ||
          s === "this_and_following"
        )
      ) {
        const t = {
          instancePath: n + "/updateScope",
          schemaPath: "#/properties/updateScope/enum",
          keyword: "enum",
          params: { allowedValues: g.properties.updateScope.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.autoDeclineMode !== void 0) {
      let s = r.autoDeclineMode;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/autoDeclineMode",
          schemaPath: "#/properties/autoDeclineMode/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          s === "declineNone" ||
          s === "declineAllConflictingInvitations" ||
          s === "declineOnlyNewConflictingInvitations"
        )
      ) {
        const t = {
          instancePath: n + "/autoDeclineMode",
          schemaPath: "#/properties/autoDeclineMode/enum",
          keyword: "enum",
          params: { allowedValues: g.properties.autoDeclineMode.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.declineMessage !== void 0 && typeof r.declineMessage != "string") {
      const s = {
        instancePath: n + "/declineMessage",
        schemaPath: "#/properties/declineMessage/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.chatStatus !== void 0 && r.chatStatus !== "doNotDisturb") {
      const s = {
        instancePath: n + "/chatStatus",
        schemaPath: "#/properties/chatStatus/const",
        keyword: "const",
        params: { allowedValue: "doNotDisturb" },
        message: "must be equal to constant",
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
  return ((I.errors = e), i === 0);
}
I.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = _,
  U = {
    properties: {
      responseStatus: { enum: ["accepted", "declined", "tentative"] },
    },
  };
function _(
  r,
  {
    instancePath: n = "",
    parentData: d,
    parentDataProperty: y,
    rootData: f = r,
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
    if (r.eventId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "eventId" },
        message: "must have required property 'eventId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.responseStatus === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "responseStatus" },
        message: "must have required property 'responseStatus'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "calendarId" ||
          s === "eventId" ||
          s === "responseStatus" ||
          s === "sendUpdates"
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
    if (r.calendarId !== void 0 && typeof r.calendarId != "string") {
      const s = {
        instancePath: n + "/calendarId",
        schemaPath: "#/properties/calendarId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.eventId !== void 0) {
      let s = r.eventId;
      if (typeof s == "string") {
        if (S(s) < 1) {
          const t = {
            instancePath: n + "/eventId",
            schemaPath: "#/properties/eventId/minLength",
            keyword: "minLength",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 characters",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/eventId",
          schemaPath: "#/properties/eventId/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.responseStatus !== void 0) {
      let s = r.responseStatus;
      if (typeof s != "string") {
        const t = {
          instancePath: n + "/responseStatus",
          schemaPath: "#/properties/responseStatus/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(s === "accepted" || s === "declined" || s === "tentative")) {
        const t = {
          instancePath: n + "/responseStatus",
          schemaPath: "#/properties/responseStatus/enum",
          keyword: "enum",
          params: { allowedValues: U.properties.responseStatus.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (r.sendUpdates !== void 0 && typeof r.sendUpdates != "boolean") {
      const s = {
        instancePath: n + "/sendUpdates",
        schemaPath: "#/properties/sendUpdates/type",
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
  return ((_.errors = e), i === 0);
}
_.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = D;
function D(
  r,
  {
    instancePath: n = "",
    parentData: d,
    parentDataProperty: y,
    rootData: f = r,
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
    if (r.eventId === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "eventId" },
        message: "must have required property 'eventId'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (!(s === "calendarId" || s === "eventId" || s === "sendUpdates")) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (r.calendarId !== void 0 && typeof r.calendarId != "string") {
      const s = {
        instancePath: n + "/calendarId",
        schemaPath: "#/properties/calendarId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.eventId !== void 0 && typeof r.eventId != "string") {
      const s = {
        instancePath: n + "/eventId",
        schemaPath: "#/properties/eventId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.sendUpdates !== void 0 && typeof r.sendUpdates != "boolean") {
      const s = {
        instancePath: n + "/sendUpdates",
        schemaPath: "#/properties/sendUpdates/type",
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
  return ((D.errors = e), i === 0);
}
D.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const G = N;
function N(
  r,
  {
    instancePath: n = "",
    parentData: d,
    parentDataProperty: y,
    rootData: f = r,
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
    if (r.timeMin === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "timeMin" },
        message: "must have required property 'timeMin'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.timeMax === void 0) {
      const s = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "timeMax" },
        message: "must have required property 'timeMax'",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    for (const s in r)
      if (
        !(
          s === "timeMin" ||
          s === "timeMax" ||
          s === "calendarIds" ||
          s === "responseTimezone"
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
    if (r.timeMin !== void 0 && typeof r.timeMin != "string") {
      const s = {
        instancePath: n + "/timeMin",
        schemaPath: "#/properties/timeMin/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.timeMax !== void 0 && typeof r.timeMax != "string") {
      const s = {
        instancePath: n + "/timeMax",
        schemaPath: "#/properties/timeMax/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), i++);
    }
    if (r.calendarIds !== void 0) {
      let s = r.calendarIds;
      if (Array.isArray(s)) {
        const t = s.length;
        for (let a = 0; a < t; a++)
          if (typeof s[a] != "string") {
            const o = {
              instancePath: n + "/calendarIds/" + a,
              schemaPath: "#/properties/calendarIds/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), i++);
          }
      } else {
        const t = {
          instancePath: n + "/calendarIds",
          schemaPath: "#/properties/calendarIds/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (
      r.responseTimezone !== void 0 &&
      typeof r.responseTimezone != "string"
    ) {
      const s = {
        instancePath: n + "/responseTimezone",
        schemaPath: "#/properties/responseTimezone/type",
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
const V = {
  native_calendar_batch_get_events: A,
  native_calendar_list_calendars: q,
  native_calendar_list_events: x,
  native_calendar_get_event: O,
  native_calendar_create_event: j,
  native_calendar_update_event: C,
  native_calendar_respond_event: R,
  native_calendar_delete_event: E,
  native_calendar_find_free_slots: G,
};
exports.NATIVE_TOOL_VALIDATORS = V;
exports.validate_native_calendar_batch_get_events = A;
exports.validate_native_calendar_create_event = j;
exports.validate_native_calendar_delete_event = E;
exports.validate_native_calendar_find_free_slots = G;
exports.validate_native_calendar_get_event = O;
exports.validate_native_calendar_list_calendars = q;
exports.validate_native_calendar_list_events = x;
exports.validate_native_calendar_respond_event = R;
exports.validate_native_calendar_update_event = C;
