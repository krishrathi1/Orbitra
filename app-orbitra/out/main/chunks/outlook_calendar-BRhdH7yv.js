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
      n = new s.Error().stack;
    n &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[n] = "ed3fea16-cbdc-4a76-a872-bdc44b637d70"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-ed3fea16-cbdc-4a76-a872-bdc44b637d70"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const A = b,
  y = {
    properties: {
      action: {
        enum: ["create", "update", "delete", "cancel", "respond"],
        type: "string",
      },
      eventId: { type: "string" },
      calendarId: { type: "string" },
      response: { enum: ["accept", "tentative", "decline"], type: "string" },
      sendResponse: { type: "boolean" },
      comment: { type: "string" },
      proposedNewTime: {
        type: "object",
        properties: {
          start: { type: "string" },
          end: { type: "string" },
          timeZone: { type: "string" },
        },
        required: ["start", "end"],
      },
      updateScope: {
        enum: ["this_instance", "entire_series", "this_and_following"],
        type: "string",
      },
      subject: { type: "string" },
      body: { type: "string" },
      start: { type: "string" },
      end: { type: "string" },
      timeZone: { type: "string" },
      isAllDay: { type: "boolean" },
      location: { type: "string" },
      attendees: {
        type: "array",
        items: {
          type: "object",
          properties: {
            email: { type: "string" },
            name: { type: "string" },
            type: { enum: ["required", "optional"], type: "string" },
          },
          required: ["email"],
        },
      },
      isOnlineMeeting: { type: "boolean" },
      onlineMeetingProvider: {
        enum: ["teamsForBusiness", "skypeForBusiness"],
        type: "string",
      },
      recurrence: {
        type: "object",
        properties: {
          pattern: {
            type: "object",
            properties: {
              type: {
                enum: [
                  "daily",
                  "weekly",
                  "absoluteMonthly",
                  "relativeMonthly",
                  "absoluteYearly",
                  "relativeYearly",
                ],
                type: "string",
              },
              interval: { type: "integer", minimum: 1, maximum: 99 },
              daysOfWeek: {
                type: "array",
                items: {
                  enum: [
                    "sunday",
                    "monday",
                    "tuesday",
                    "wednesday",
                    "thursday",
                    "friday",
                    "saturday",
                  ],
                  type: "string",
                },
              },
              dayOfMonth: { type: "integer", minimum: 1, maximum: 31 },
              firstDayOfWeek: {
                enum: [
                  "sunday",
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday",
                  "saturday",
                ],
                type: "string",
              },
              index: {
                enum: ["first", "second", "third", "fourth", "last"],
                type: "string",
              },
              month: { type: "integer", minimum: 1, maximum: 12 },
            },
            required: ["type", "interval"],
          },
          range: {
            type: "object",
            properties: {
              type: { enum: ["endDate", "noEnd", "numbered"], type: "string" },
              startDate: { type: "string" },
              endDate: { type: "string" },
              numberOfOccurrences: {
                type: "integer",
                minimum: 1,
                maximum: 9007199254740991,
              },
              recurrenceTimeZone: { type: "string" },
            },
            required: ["type", "startDate"],
          },
        },
        required: ["pattern", "range"],
      },
      isReminderOn: { type: "boolean" },
      reminderMinutesBeforeStart: {
        type: "integer",
        minimum: 0,
        maximum: 40320,
      },
      showAs: {
        enum: [
          "free",
          "tentative",
          "busy",
          "oof",
          "workingElsewhere",
          "unknown",
        ],
        type: "string",
      },
      account: { type: "string" },
      mailbox: { type: "string" },
    },
  },
  _ = Object.prototype.hasOwnProperty;
function b(
  s,
  {
    instancePath: n = "",
    parentData: c,
    parentDataProperty: f,
    rootData: d = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = b.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.action === void 0) {
      const r = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "action" },
        message: "must have required property 'action'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!_.call(y.properties, r)) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.action !== void 0) {
      let r = s.action;
      if (typeof r != "string") {
        const t = {
          instancePath: n + "/action",
          schemaPath: "#/properties/action/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          r === "create" ||
          r === "update" ||
          r === "delete" ||
          r === "cancel" ||
          r === "respond"
        )
      ) {
        const t = {
          instancePath: n + "/action",
          schemaPath: "#/properties/action/enum",
          keyword: "enum",
          params: { allowedValues: y.properties.action.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.eventId !== void 0 && typeof s.eventId != "string") {
      const r = {
        instancePath: n + "/eventId",
        schemaPath: "#/properties/eventId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.calendarId !== void 0 && typeof s.calendarId != "string") {
      const r = {
        instancePath: n + "/calendarId",
        schemaPath: "#/properties/calendarId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.response !== void 0) {
      let r = s.response;
      if (typeof r != "string") {
        const t = {
          instancePath: n + "/response",
          schemaPath: "#/properties/response/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "accept" || r === "tentative" || r === "decline")) {
        const t = {
          instancePath: n + "/response",
          schemaPath: "#/properties/response/enum",
          keyword: "enum",
          params: { allowedValues: y.properties.response.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.sendResponse !== void 0 && typeof s.sendResponse != "boolean") {
      const r = {
        instancePath: n + "/sendResponse",
        schemaPath: "#/properties/sendResponse/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.comment !== void 0 && typeof s.comment != "string") {
      const r = {
        instancePath: n + "/comment",
        schemaPath: "#/properties/comment/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.proposedNewTime !== void 0) {
      let r = s.proposedNewTime;
      if (r && typeof r == "object" && !Array.isArray(r)) {
        if (r.start === void 0) {
          const t = {
            instancePath: n + "/proposedNewTime",
            schemaPath: "#/properties/proposedNewTime/required",
            keyword: "required",
            params: { missingProperty: "start" },
            message: "must have required property 'start'",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r.end === void 0) {
          const t = {
            instancePath: n + "/proposedNewTime",
            schemaPath: "#/properties/proposedNewTime/required",
            keyword: "required",
            params: { missingProperty: "end" },
            message: "must have required property 'end'",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r.start !== void 0 && typeof r.start != "string") {
          const t = {
            instancePath: n + "/proposedNewTime/start",
            schemaPath: "#/properties/proposedNewTime/properties/start/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r.end !== void 0 && typeof r.end != "string") {
          const t = {
            instancePath: n + "/proposedNewTime/end",
            schemaPath: "#/properties/proposedNewTime/properties/end/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r.timeZone !== void 0 && typeof r.timeZone != "string") {
          const t = {
            instancePath: n + "/proposedNewTime/timeZone",
            schemaPath: "#/properties/proposedNewTime/properties/timeZone/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/proposedNewTime",
          schemaPath: "#/properties/proposedNewTime/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.updateScope !== void 0) {
      let r = s.updateScope;
      if (typeof r != "string") {
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
          r === "this_instance" ||
          r === "entire_series" ||
          r === "this_and_following"
        )
      ) {
        const t = {
          instancePath: n + "/updateScope",
          schemaPath: "#/properties/updateScope/enum",
          keyword: "enum",
          params: { allowedValues: y.properties.updateScope.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.subject !== void 0 && typeof s.subject != "string") {
      const r = {
        instancePath: n + "/subject",
        schemaPath: "#/properties/subject/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.body !== void 0 && typeof s.body != "string") {
      const r = {
        instancePath: n + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.start !== void 0 && typeof s.start != "string") {
      const r = {
        instancePath: n + "/start",
        schemaPath: "#/properties/start/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.end !== void 0 && typeof s.end != "string") {
      const r = {
        instancePath: n + "/end",
        schemaPath: "#/properties/end/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.timeZone !== void 0 && typeof s.timeZone != "string") {
      const r = {
        instancePath: n + "/timeZone",
        schemaPath: "#/properties/timeZone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.isAllDay !== void 0 && typeof s.isAllDay != "boolean") {
      const r = {
        instancePath: n + "/isAllDay",
        schemaPath: "#/properties/isAllDay/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.location !== void 0 && typeof s.location != "string") {
      const r = {
        instancePath: n + "/location",
        schemaPath: "#/properties/location/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.attendees !== void 0) {
      let r = s.attendees;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let a = 0; a < t; a++) {
          let p = r[a];
          if (p && typeof p == "object" && !Array.isArray(p)) {
            if (p.email === void 0) {
              const m = {
                instancePath: n + "/attendees/" + a,
                schemaPath: "#/properties/attendees/items/required",
                keyword: "required",
                params: { missingProperty: "email" },
                message: "must have required property 'email'",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (p.email !== void 0 && typeof p.email != "string") {
              const m = {
                instancePath: n + "/attendees/" + a + "/email",
                schemaPath:
                  "#/properties/attendees/items/properties/email/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (p.name !== void 0 && typeof p.name != "string") {
              const m = {
                instancePath: n + "/attendees/" + a + "/name",
                schemaPath: "#/properties/attendees/items/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [m]) : e.push(m), i++);
            }
            if (p.type !== void 0) {
              let m = p.type;
              if (typeof m != "string") {
                const u = {
                  instancePath: n + "/attendees/" + a + "/type",
                  schemaPath:
                    "#/properties/attendees/items/properties/type/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [u]) : e.push(u), i++);
              }
              if (!(m === "required" || m === "optional")) {
                const u = {
                  instancePath: n + "/attendees/" + a + "/type",
                  schemaPath:
                    "#/properties/attendees/items/properties/type/enum",
                  keyword: "enum",
                  params: {
                    allowedValues:
                      y.properties.attendees.items.properties.type.enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                (e === null ? (e = [u]) : e.push(u), i++);
              }
            }
          } else {
            const m = {
              instancePath: n + "/attendees/" + a,
              schemaPath: "#/properties/attendees/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [m]) : e.push(m), i++);
          }
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
    if (s.isOnlineMeeting !== void 0 && typeof s.isOnlineMeeting != "boolean") {
      const r = {
        instancePath: n + "/isOnlineMeeting",
        schemaPath: "#/properties/isOnlineMeeting/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.onlineMeetingProvider !== void 0) {
      let r = s.onlineMeetingProvider;
      if (typeof r != "string") {
        const t = {
          instancePath: n + "/onlineMeetingProvider",
          schemaPath: "#/properties/onlineMeetingProvider/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "teamsForBusiness" || r === "skypeForBusiness")) {
        const t = {
          instancePath: n + "/onlineMeetingProvider",
          schemaPath: "#/properties/onlineMeetingProvider/enum",
          keyword: "enum",
          params: { allowedValues: y.properties.onlineMeetingProvider.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.recurrence !== void 0) {
      let r = s.recurrence;
      if (r && typeof r == "object" && !Array.isArray(r)) {
        if (r.pattern === void 0) {
          const t = {
            instancePath: n + "/recurrence",
            schemaPath: "#/properties/recurrence/required",
            keyword: "required",
            params: { missingProperty: "pattern" },
            message: "must have required property 'pattern'",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r.range === void 0) {
          const t = {
            instancePath: n + "/recurrence",
            schemaPath: "#/properties/recurrence/required",
            keyword: "required",
            params: { missingProperty: "range" },
            message: "must have required property 'range'",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r.pattern !== void 0) {
          let t = r.pattern;
          if (t && typeof t == "object" && !Array.isArray(t)) {
            if (t.type === void 0) {
              const a = {
                instancePath: n + "/recurrence/pattern",
                schemaPath:
                  "#/properties/recurrence/properties/pattern/required",
                keyword: "required",
                params: { missingProperty: "type" },
                message: "must have required property 'type'",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (t.interval === void 0) {
              const a = {
                instancePath: n + "/recurrence/pattern",
                schemaPath:
                  "#/properties/recurrence/properties/pattern/required",
                keyword: "required",
                params: { missingProperty: "interval" },
                message: "must have required property 'interval'",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (t.type !== void 0) {
              let a = t.type;
              if (typeof a != "string") {
                const p = {
                  instancePath: n + "/recurrence/pattern/type",
                  schemaPath:
                    "#/properties/recurrence/properties/pattern/properties/type/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
              if (
                !(
                  a === "daily" ||
                  a === "weekly" ||
                  a === "absoluteMonthly" ||
                  a === "relativeMonthly" ||
                  a === "absoluteYearly" ||
                  a === "relativeYearly"
                )
              ) {
                const p = {
                  instancePath: n + "/recurrence/pattern/type",
                  schemaPath:
                    "#/properties/recurrence/properties/pattern/properties/type/enum",
                  keyword: "enum",
                  params: {
                    allowedValues:
                      y.properties.recurrence.properties.pattern.properties.type
                        .enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
            }
            if (t.interval !== void 0) {
              let a = t.interval;
              if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
                const p = {
                  instancePath: n + "/recurrence/pattern/interval",
                  schemaPath:
                    "#/properties/recurrence/properties/pattern/properties/interval/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
              if (typeof a == "number") {
                if (a > 99 || isNaN(a)) {
                  const p = {
                    instancePath: n + "/recurrence/pattern/interval",
                    schemaPath:
                      "#/properties/recurrence/properties/pattern/properties/interval/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 99 },
                    message: "must be <= 99",
                  };
                  (e === null ? (e = [p]) : e.push(p), i++);
                }
                if (a < 1 || isNaN(a)) {
                  const p = {
                    instancePath: n + "/recurrence/pattern/interval",
                    schemaPath:
                      "#/properties/recurrence/properties/pattern/properties/interval/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: 1 },
                    message: "must be >= 1",
                  };
                  (e === null ? (e = [p]) : e.push(p), i++);
                }
              }
            }
            if (t.daysOfWeek !== void 0) {
              let a = t.daysOfWeek;
              if (Array.isArray(a)) {
                const p = a.length;
                for (let m = 0; m < p; m++) {
                  let u = a[m];
                  if (typeof u != "string") {
                    const l = {
                      instancePath: n + "/recurrence/pattern/daysOfWeek/" + m,
                      schemaPath:
                        "#/properties/recurrence/properties/pattern/properties/daysOfWeek/items/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                    };
                    (e === null ? (e = [l]) : e.push(l), i++);
                  }
                  if (
                    !(
                      u === "sunday" ||
                      u === "monday" ||
                      u === "tuesday" ||
                      u === "wednesday" ||
                      u === "thursday" ||
                      u === "friday" ||
                      u === "saturday"
                    )
                  ) {
                    const l = {
                      instancePath: n + "/recurrence/pattern/daysOfWeek/" + m,
                      schemaPath:
                        "#/properties/recurrence/properties/pattern/properties/daysOfWeek/items/enum",
                      keyword: "enum",
                      params: {
                        allowedValues:
                          y.properties.recurrence.properties.pattern.properties
                            .daysOfWeek.items.enum,
                      },
                      message: "must be equal to one of the allowed values",
                    };
                    (e === null ? (e = [l]) : e.push(l), i++);
                  }
                }
              } else {
                const p = {
                  instancePath: n + "/recurrence/pattern/daysOfWeek",
                  schemaPath:
                    "#/properties/recurrence/properties/pattern/properties/daysOfWeek/type",
                  keyword: "type",
                  params: { type: "array" },
                  message: "must be array",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
            }
            if (t.dayOfMonth !== void 0) {
              let a = t.dayOfMonth;
              if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
                const p = {
                  instancePath: n + "/recurrence/pattern/dayOfMonth",
                  schemaPath:
                    "#/properties/recurrence/properties/pattern/properties/dayOfMonth/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
              if (typeof a == "number") {
                if (a > 31 || isNaN(a)) {
                  const p = {
                    instancePath: n + "/recurrence/pattern/dayOfMonth",
                    schemaPath:
                      "#/properties/recurrence/properties/pattern/properties/dayOfMonth/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 31 },
                    message: "must be <= 31",
                  };
                  (e === null ? (e = [p]) : e.push(p), i++);
                }
                if (a < 1 || isNaN(a)) {
                  const p = {
                    instancePath: n + "/recurrence/pattern/dayOfMonth",
                    schemaPath:
                      "#/properties/recurrence/properties/pattern/properties/dayOfMonth/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: 1 },
                    message: "must be >= 1",
                  };
                  (e === null ? (e = [p]) : e.push(p), i++);
                }
              }
            }
            if (t.firstDayOfWeek !== void 0) {
              let a = t.firstDayOfWeek;
              if (typeof a != "string") {
                const p = {
                  instancePath: n + "/recurrence/pattern/firstDayOfWeek",
                  schemaPath:
                    "#/properties/recurrence/properties/pattern/properties/firstDayOfWeek/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
              if (
                !(
                  a === "sunday" ||
                  a === "monday" ||
                  a === "tuesday" ||
                  a === "wednesday" ||
                  a === "thursday" ||
                  a === "friday" ||
                  a === "saturday"
                )
              ) {
                const p = {
                  instancePath: n + "/recurrence/pattern/firstDayOfWeek",
                  schemaPath:
                    "#/properties/recurrence/properties/pattern/properties/firstDayOfWeek/enum",
                  keyword: "enum",
                  params: {
                    allowedValues:
                      y.properties.recurrence.properties.pattern.properties
                        .firstDayOfWeek.enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
            }
            if (t.index !== void 0) {
              let a = t.index;
              if (typeof a != "string") {
                const p = {
                  instancePath: n + "/recurrence/pattern/index",
                  schemaPath:
                    "#/properties/recurrence/properties/pattern/properties/index/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
              if (
                !(
                  a === "first" ||
                  a === "second" ||
                  a === "third" ||
                  a === "fourth" ||
                  a === "last"
                )
              ) {
                const p = {
                  instancePath: n + "/recurrence/pattern/index",
                  schemaPath:
                    "#/properties/recurrence/properties/pattern/properties/index/enum",
                  keyword: "enum",
                  params: {
                    allowedValues:
                      y.properties.recurrence.properties.pattern.properties
                        .index.enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
            }
            if (t.month !== void 0) {
              let a = t.month;
              if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
                const p = {
                  instancePath: n + "/recurrence/pattern/month",
                  schemaPath:
                    "#/properties/recurrence/properties/pattern/properties/month/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
              if (typeof a == "number") {
                if (a > 12 || isNaN(a)) {
                  const p = {
                    instancePath: n + "/recurrence/pattern/month",
                    schemaPath:
                      "#/properties/recurrence/properties/pattern/properties/month/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 12 },
                    message: "must be <= 12",
                  };
                  (e === null ? (e = [p]) : e.push(p), i++);
                }
                if (a < 1 || isNaN(a)) {
                  const p = {
                    instancePath: n + "/recurrence/pattern/month",
                    schemaPath:
                      "#/properties/recurrence/properties/pattern/properties/month/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: 1 },
                    message: "must be >= 1",
                  };
                  (e === null ? (e = [p]) : e.push(p), i++);
                }
              }
            }
          } else {
            const a = {
              instancePath: n + "/recurrence/pattern",
              schemaPath: "#/properties/recurrence/properties/pattern/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [a]) : e.push(a), i++);
          }
        }
        if (r.range !== void 0) {
          let t = r.range;
          if (t && typeof t == "object" && !Array.isArray(t)) {
            if (t.type === void 0) {
              const a = {
                instancePath: n + "/recurrence/range",
                schemaPath: "#/properties/recurrence/properties/range/required",
                keyword: "required",
                params: { missingProperty: "type" },
                message: "must have required property 'type'",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (t.startDate === void 0) {
              const a = {
                instancePath: n + "/recurrence/range",
                schemaPath: "#/properties/recurrence/properties/range/required",
                keyword: "required",
                params: { missingProperty: "startDate" },
                message: "must have required property 'startDate'",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (t.type !== void 0) {
              let a = t.type;
              if (typeof a != "string") {
                const p = {
                  instancePath: n + "/recurrence/range/type",
                  schemaPath:
                    "#/properties/recurrence/properties/range/properties/type/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
              if (!(a === "endDate" || a === "noEnd" || a === "numbered")) {
                const p = {
                  instancePath: n + "/recurrence/range/type",
                  schemaPath:
                    "#/properties/recurrence/properties/range/properties/type/enum",
                  keyword: "enum",
                  params: {
                    allowedValues:
                      y.properties.recurrence.properties.range.properties.type
                        .enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
            }
            if (t.startDate !== void 0 && typeof t.startDate != "string") {
              const a = {
                instancePath: n + "/recurrence/range/startDate",
                schemaPath:
                  "#/properties/recurrence/properties/range/properties/startDate/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (t.endDate !== void 0 && typeof t.endDate != "string") {
              const a = {
                instancePath: n + "/recurrence/range/endDate",
                schemaPath:
                  "#/properties/recurrence/properties/range/properties/endDate/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
            if (t.numberOfOccurrences !== void 0) {
              let a = t.numberOfOccurrences;
              if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
                const p = {
                  instancePath: n + "/recurrence/range/numberOfOccurrences",
                  schemaPath:
                    "#/properties/recurrence/properties/range/properties/numberOfOccurrences/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                };
                (e === null ? (e = [p]) : e.push(p), i++);
              }
              if (typeof a == "number") {
                if (a > 9007199254740991 || isNaN(a)) {
                  const p = {
                    instancePath: n + "/recurrence/range/numberOfOccurrences",
                    schemaPath:
                      "#/properties/recurrence/properties/range/properties/numberOfOccurrences/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 9007199254740991 },
                    message: "must be <= 9007199254740991",
                  };
                  (e === null ? (e = [p]) : e.push(p), i++);
                }
                if (a < 1 || isNaN(a)) {
                  const p = {
                    instancePath: n + "/recurrence/range/numberOfOccurrences",
                    schemaPath:
                      "#/properties/recurrence/properties/range/properties/numberOfOccurrences/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: 1 },
                    message: "must be >= 1",
                  };
                  (e === null ? (e = [p]) : e.push(p), i++);
                }
              }
            }
            if (
              t.recurrenceTimeZone !== void 0 &&
              typeof t.recurrenceTimeZone != "string"
            ) {
              const a = {
                instancePath: n + "/recurrence/range/recurrenceTimeZone",
                schemaPath:
                  "#/properties/recurrence/properties/range/properties/recurrenceTimeZone/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [a]) : e.push(a), i++);
            }
          } else {
            const a = {
              instancePath: n + "/recurrence/range",
              schemaPath: "#/properties/recurrence/properties/range/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [a]) : e.push(a), i++);
          }
        }
      } else {
        const t = {
          instancePath: n + "/recurrence",
          schemaPath: "#/properties/recurrence/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.isReminderOn !== void 0 && typeof s.isReminderOn != "boolean") {
      const r = {
        instancePath: n + "/isReminderOn",
        schemaPath: "#/properties/isReminderOn/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.reminderMinutesBeforeStart !== void 0) {
      let r = s.reminderMinutesBeforeStart;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: n + "/reminderMinutesBeforeStart",
          schemaPath: "#/properties/reminderMinutesBeforeStart/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 40320 || isNaN(r)) {
          const t = {
            instancePath: n + "/reminderMinutesBeforeStart",
            schemaPath: "#/properties/reminderMinutesBeforeStart/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 40320 },
            message: "must be <= 40320",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 0 || isNaN(r)) {
          const t = {
            instancePath: n + "/reminderMinutesBeforeStart",
            schemaPath: "#/properties/reminderMinutesBeforeStart/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.showAs !== void 0) {
      let r = s.showAs;
      if (typeof r != "string") {
        const t = {
          instancePath: n + "/showAs",
          schemaPath: "#/properties/showAs/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (
        !(
          r === "free" ||
          r === "tentative" ||
          r === "busy" ||
          r === "oof" ||
          r === "workingElsewhere" ||
          r === "unknown"
        )
      ) {
        const t = {
          instancePath: n + "/showAs",
          schemaPath: "#/properties/showAs/enum",
          keyword: "enum",
          params: { allowedValues: y.properties.showAs.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mailbox !== void 0 && typeof s.mailbox != "string") {
      const r = {
        instancePath: n + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((b.errors = e), i === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const M = w,
  q = {
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
      action: { enum: ["list", "add", "download"], type: "string" },
      eventId: { type: "string" },
      calendarId: { type: "string" },
      attachmentId: { type: "string" },
      attachment: {
        type: "object",
        properties: {
          content: { type: "string" },
          name: { type: "string" },
          contentType: { type: "string" },
        },
        required: ["content", "name"],
      },
      account: { type: "string" },
      mailbox: { type: "string" },
    },
  };
function w(
  s,
  {
    instancePath: n = "",
    parentData: c,
    parentDataProperty: f,
    rootData: d = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = w.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.action === void 0) {
      const r = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "action" },
        message: "must have required property 'action'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.eventId === void 0) {
      const r = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "eventId" },
        message: "must have required property 'eventId'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!_.call(q.properties, r)) {
        const t = {
          instancePath: n,
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
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.action !== void 0) {
      let r = s.action;
      if (typeof r != "string") {
        const t = {
          instancePath: n + "/action",
          schemaPath: "#/properties/action/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "list" || r === "add" || r === "download")) {
        const t = {
          instancePath: n + "/action",
          schemaPath: "#/properties/action/enum",
          keyword: "enum",
          params: { allowedValues: q.properties.action.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.eventId !== void 0 && typeof s.eventId != "string") {
      const r = {
        instancePath: n + "/eventId",
        schemaPath: "#/properties/eventId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.calendarId !== void 0 && typeof s.calendarId != "string") {
      const r = {
        instancePath: n + "/calendarId",
        schemaPath: "#/properties/calendarId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.attachmentId !== void 0 && typeof s.attachmentId != "string") {
      const r = {
        instancePath: n + "/attachmentId",
        schemaPath: "#/properties/attachmentId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.attachment !== void 0) {
      let r = s.attachment;
      if (r && typeof r == "object" && !Array.isArray(r)) {
        if (r.content === void 0) {
          const t = {
            instancePath: n + "/attachment",
            schemaPath: "#/properties/attachment/required",
            keyword: "required",
            params: { missingProperty: "content" },
            message: "must have required property 'content'",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r.name === void 0) {
          const t = {
            instancePath: n + "/attachment",
            schemaPath: "#/properties/attachment/required",
            keyword: "required",
            params: { missingProperty: "name" },
            message: "must have required property 'name'",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r.content !== void 0 && typeof r.content != "string") {
          const t = {
            instancePath: n + "/attachment/content",
            schemaPath: "#/properties/attachment/properties/content/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r.name !== void 0 && typeof r.name != "string") {
          const t = {
            instancePath: n + "/attachment/name",
            schemaPath: "#/properties/attachment/properties/name/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r.contentType !== void 0 && typeof r.contentType != "string") {
          const t = {
            instancePath: n + "/attachment/contentType",
            schemaPath: "#/properties/attachment/properties/contentType/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/attachment",
          schemaPath: "#/properties/attachment/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mailbox !== void 0 && typeof s.mailbox != "string") {
      const r = {
        instancePath: n + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: n,
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
const j = P,
  W = {
    properties: {
      schedules: { type: "array", items: { type: "string" } },
      startTime: { type: "string" },
      endTime: { type: "string" },
      availabilityViewInterval: { type: "integer", minimum: 5, maximum: 1440 },
      timezone: { type: "string" },
      durationMinutes: { type: "integer", minimum: 1, maximum: 1440 },
      bufferBeforeMinutes: { type: "integer", minimum: 0, maximum: 1440 },
      bufferAfterMinutes: { type: "integer", minimum: 0, maximum: 1440 },
      maxResults: { type: "integer", minimum: 1, maximum: 100 },
      account: { type: "string" },
      mailbox: { type: "string" },
    },
  };
function P(
  s,
  {
    instancePath: n = "",
    parentData: c,
    parentDataProperty: f,
    rootData: d = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = P.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.schedules === void 0) {
      const r = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "schedules" },
        message: "must have required property 'schedules'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.startTime === void 0) {
      const r = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "startTime" },
        message: "must have required property 'startTime'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.endTime === void 0) {
      const r = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "endTime" },
        message: "must have required property 'endTime'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!_.call(W.properties, r)) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.schedules !== void 0) {
      let r = s.schedules;
      if (Array.isArray(r)) {
        const t = r.length;
        for (let a = 0; a < t; a++)
          if (typeof r[a] != "string") {
            const p = {
              instancePath: n + "/schedules/" + a,
              schemaPath: "#/properties/schedules/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [p]) : e.push(p), i++);
          }
      } else {
        const t = {
          instancePath: n + "/schedules",
          schemaPath: "#/properties/schedules/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.startTime !== void 0 && typeof s.startTime != "string") {
      const r = {
        instancePath: n + "/startTime",
        schemaPath: "#/properties/startTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.endTime !== void 0 && typeof s.endTime != "string") {
      const r = {
        instancePath: n + "/endTime",
        schemaPath: "#/properties/endTime/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.availabilityViewInterval !== void 0) {
      let r = s.availabilityViewInterval;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: n + "/availabilityViewInterval",
          schemaPath: "#/properties/availabilityViewInterval/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 1440 || isNaN(r)) {
          const t = {
            instancePath: n + "/availabilityViewInterval",
            schemaPath: "#/properties/availabilityViewInterval/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1440 },
            message: "must be <= 1440",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 5 || isNaN(r)) {
          const t = {
            instancePath: n + "/availabilityViewInterval",
            schemaPath: "#/properties/availabilityViewInterval/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 5 },
            message: "must be >= 5",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.timezone !== void 0 && typeof s.timezone != "string") {
      const r = {
        instancePath: n + "/timezone",
        schemaPath: "#/properties/timezone/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.durationMinutes !== void 0) {
      let r = s.durationMinutes;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: n + "/durationMinutes",
          schemaPath: "#/properties/durationMinutes/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 1440 || isNaN(r)) {
          const t = {
            instancePath: n + "/durationMinutes",
            schemaPath: "#/properties/durationMinutes/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1440 },
            message: "must be <= 1440",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: n + "/durationMinutes",
            schemaPath: "#/properties/durationMinutes/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.bufferBeforeMinutes !== void 0) {
      let r = s.bufferBeforeMinutes;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: n + "/bufferBeforeMinutes",
          schemaPath: "#/properties/bufferBeforeMinutes/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 1440 || isNaN(r)) {
          const t = {
            instancePath: n + "/bufferBeforeMinutes",
            schemaPath: "#/properties/bufferBeforeMinutes/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1440 },
            message: "must be <= 1440",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 0 || isNaN(r)) {
          const t = {
            instancePath: n + "/bufferBeforeMinutes",
            schemaPath: "#/properties/bufferBeforeMinutes/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.bufferAfterMinutes !== void 0) {
      let r = s.bufferAfterMinutes;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: n + "/bufferAfterMinutes",
          schemaPath: "#/properties/bufferAfterMinutes/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 1440 || isNaN(r)) {
          const t = {
            instancePath: n + "/bufferAfterMinutes",
            schemaPath: "#/properties/bufferAfterMinutes/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 1440 },
            message: "must be <= 1440",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 0 || isNaN(r)) {
          const t = {
            instancePath: n + "/bufferAfterMinutes",
            schemaPath: "#/properties/bufferAfterMinutes/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      }
    }
    if (s.maxResults !== void 0) {
      let r = s.maxResults;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: n + "/maxResults",
          schemaPath: "#/properties/maxResults/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: n + "/maxResults",
            schemaPath: "#/properties/maxResults/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mailbox !== void 0 && typeof s.mailbox != "string") {
      const r = {
        instancePath: n + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), i++);
  }
  return ((P.errors = e), i === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const R = k;
function k(
  s,
  {
    instancePath: n = "",
    parentData: c,
    parentDataProperty: f,
    rootData: d = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = k.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(
          r === "start" ||
          r === "end" ||
          r === "cursor" ||
          r === "account" ||
          r === "mailbox"
        )
      ) {
        const t = {
          instancePath: n,
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
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mailbox !== void 0 && typeof s.mailbox != "string") {
      const r = {
        instancePath: n + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: n,
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
const V = v;
function v(
  s,
  {
    instancePath: n = "",
    parentData: c,
    parentDataProperty: f,
    rootData: d = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = v.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (!(r === "account" || r === "mailbox")) {
        const t = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mailbox !== void 0 && typeof s.mailbox != "string") {
      const r = {
        instancePath: n + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: n,
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
const S = N;
function N(
  s,
  {
    instancePath: n = "",
    parentData: c,
    parentDataProperty: f,
    rootData: d = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = N.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.eventIds === void 0) {
      const t = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "eventIds" },
        message: "must have required property 'eventIds'",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    for (const t in s)
      if (
        !(
          t === "eventIds" ||
          t === "calendarId" ||
          t === "account" ||
          t === "mailbox"
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
    if (s.eventIds !== void 0) {
      let t = s.eventIds;
      const a = i;
      let p = !1;
      const m = i;
      if (typeof t != "string") {
        const l = {
          instancePath: n + "/eventIds",
          schemaPath: "#/properties/eventIds/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var r = m === i;
      p = p || r;
      const u = i;
      if (Array.isArray(t)) {
        const l = t.length;
        for (let g = 0; g < l; g++)
          if (typeof t[g] != "string") {
            const D = {
              instancePath: n + "/eventIds/" + g,
              schemaPath: "#/properties/eventIds/anyOf/1/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [D]) : e.push(D), i++);
          }
      } else {
        const l = {
          instancePath: n + "/eventIds",
          schemaPath: "#/properties/eventIds/anyOf/1/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
      var r = u === i;
      if (((p = p || r), p))
        ((i = a), e !== null && (a ? (e.length = a) : (e = null)));
      else {
        const l = {
          instancePath: n + "/eventIds",
          schemaPath: "#/properties/eventIds/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), i++);
      }
    }
    if (s.calendarId !== void 0 && typeof s.calendarId != "string") {
      const t = {
        instancePath: n + "/calendarId",
        schemaPath: "#/properties/calendarId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const t = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [t]) : e.push(t), i++);
    }
    if (s.mailbox !== void 0 && typeof s.mailbox != "string") {
      const t = {
        instancePath: n + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
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
  return ((N.errors = e), i === 0);
}
N.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const B = I,
  O = {
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
      action: { enum: ["list_masters", "list_instances"], type: "string" },
      seriesMasterId: { type: "string" },
      calendarId: { type: "string" },
      startDateTime: { type: "string", format: "date-time" },
      endDateTime: { type: "string", format: "date-time" },
      limit: { type: "number", minimum: 1, maximum: 100 },
      account: { type: "string" },
      mailbox: { type: "string" },
    },
  },
  x = require("ajv-formats/dist/formats").fullFormats["date-time"];
function I(
  s,
  {
    instancePath: n = "",
    parentData: c,
    parentDataProperty: f,
    rootData: d = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = I.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.action === void 0) {
      const r = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "action" },
        message: "must have required property 'action'",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    for (const r in s)
      if (!_.call(O.properties, r)) {
        const t = {
          instancePath: n,
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
          instancePath: n + "/start",
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
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.end !== void 0) {
      let r = s.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const t = {
          instancePath: n + "/end",
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
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.action !== void 0) {
      let r = s.action;
      if (typeof r != "string") {
        const t = {
          instancePath: n + "/action",
          schemaPath: "#/properties/action/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
      if (!(r === "list_masters" || r === "list_instances")) {
        const t = {
          instancePath: n + "/action",
          schemaPath: "#/properties/action/enum",
          keyword: "enum",
          params: { allowedValues: O.properties.action.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.seriesMasterId !== void 0 && typeof s.seriesMasterId != "string") {
      const r = {
        instancePath: n + "/seriesMasterId",
        schemaPath: "#/properties/seriesMasterId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.calendarId !== void 0 && typeof s.calendarId != "string") {
      const r = {
        instancePath: n + "/calendarId",
        schemaPath: "#/properties/calendarId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.startDateTime !== void 0) {
      let r = s.startDateTime;
      if (typeof r == "string") {
        if (!x.validate(r)) {
          const t = {
            instancePath: n + "/startDateTime",
            schemaPath: "#/properties/startDateTime/format",
            keyword: "format",
            params: { format: "date-time" },
            message: 'must match format "date-time"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/startDateTime",
          schemaPath: "#/properties/startDateTime/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.endDateTime !== void 0) {
      let r = s.endDateTime;
      if (typeof r == "string") {
        if (!x.validate(r)) {
          const t = {
            instancePath: n + "/endDateTime",
            schemaPath: "#/properties/endDateTime/format",
            keyword: "format",
            params: { format: "date-time" },
            message: 'must match format "date-time"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/endDateTime",
          schemaPath: "#/properties/endDateTime/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.limit !== void 0) {
      let r = s.limit;
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
          const t = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mailbox !== void 0 && typeof s.mailbox != "string") {
      const r = {
        instancePath: n + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: n,
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
const E = T;
function T(
  s,
  {
    instancePath: n = "",
    parentData: c,
    parentDataProperty: f,
    rootData: d = s,
    dynamicAnchors: h = {},
  } = {},
) {
  let e = null,
    i = 0;
  const o = T.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const r in s)
      if (
        !(
          r === "limit" ||
          r === "cursor" ||
          r === "calendarId" ||
          r === "startDateTime" ||
          r === "endDateTime" ||
          r === "account" ||
          r === "mailbox"
        )
      ) {
        const t = {
          instancePath: n,
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
          instancePath: n + "/limit",
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
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
        if (r < 1 || isNaN(r)) {
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
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const r = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.calendarId !== void 0 && typeof s.calendarId != "string") {
      const r = {
        instancePath: n + "/calendarId",
        schemaPath: "#/properties/calendarId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.startDateTime !== void 0) {
      let r = s.startDateTime;
      if (typeof r == "string") {
        if (!x.validate(r)) {
          const t = {
            instancePath: n + "/startDateTime",
            schemaPath: "#/properties/startDateTime/format",
            keyword: "format",
            params: { format: "date-time" },
            message: 'must match format "date-time"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/startDateTime",
          schemaPath: "#/properties/startDateTime/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.endDateTime !== void 0) {
      let r = s.endDateTime;
      if (typeof r == "string") {
        if (!x.validate(r)) {
          const t = {
            instancePath: n + "/endDateTime",
            schemaPath: "#/properties/endDateTime/format",
            keyword: "format",
            params: { format: "date-time" },
            message: 'must match format "date-time"',
          };
          (e === null ? (e = [t]) : e.push(t), i++);
        }
      } else {
        const t = {
          instancePath: n + "/endDateTime",
          schemaPath: "#/properties/endDateTime/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [t]) : e.push(t), i++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const r = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
    if (s.mailbox !== void 0 && typeof s.mailbox != "string") {
      const r = {
        instancePath: n + "/mailbox",
        schemaPath: "#/properties/mailbox/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), i++);
    }
  } else {
    const r = {
      instancePath: n,
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
const Z = {
  outlook_event: A,
  outlook_event_attachment: M,
  outlook_find_free_slots: j,
  outlook_list_calendars: R,
  outlook_mailbox_settings: V,
  outlook_read_events: S,
  outlook_recurring_events: B,
  outlook_search_events: E,
};
exports.NATIVE_TOOL_VALIDATORS = Z;
exports.validate_outlook_event = A;
exports.validate_outlook_event_attachment = M;
exports.validate_outlook_find_free_slots = j;
exports.validate_outlook_list_calendars = R;
exports.validate_outlook_mailbox_settings = V;
exports.validate_outlook_read_events = S;
exports.validate_outlook_recurring_events = B;
exports.validate_outlook_search_events = E;
