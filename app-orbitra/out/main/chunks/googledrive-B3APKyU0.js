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
      (s._sentryDebugIds[n] = "8e1d92ea-5a8f-4574-ab7e-3c48e35bf2e2"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-8e1d92ea-5a8f-4574-ab7e-3c48e35bf2e2"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const k = d;
function d(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    t = 0;
  const o = d.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const e in s)
      if (
        !(
          e === "pageSize" ||
          e === "pageToken" ||
          e === "account" ||
          e === "start" ||
          e === "end" ||
          e === "cursor"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    if (s.pageSize !== void 0) {
      let e = s.pageSize;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/pageSize",
          schemaPath: "#/properties/pageSize/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
      if (typeof e == "number") {
        if (e > 100 || isNaN(e)) {
          const i = {
            instancePath: n + "/pageSize",
            schemaPath: "#/properties/pageSize/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (r === null ? (r = [i]) : r.push(i), t++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/pageSize",
            schemaPath: "#/properties/pageSize/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [i]) : r.push(i), t++);
        }
      }
    }
    if (s.pageToken !== void 0 && typeof s.pageToken != "string") {
      const e = {
        instancePath: n + "/pageToken",
        schemaPath: "#/properties/pageToken/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const i = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [i]) : r.push(i), t++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [i]) : r.push(i), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const i = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [i]) : r.push(i), t++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [i]) : r.push(i), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((d.errors = r), t === 0);
}
d.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const I = f,
  w = {
    properties: {
      folderId: { type: "string" },
      driveId: { type: "string" },
      corpora: {
        enum: ["user", "drive", "domain", "allDrives"],
        type: "string",
      },
      orderBy: { type: "string" },
      limit: { type: "number", minimum: 1, maximum: 100 },
      account: { type: "string" },
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
  N = Object.prototype.hasOwnProperty;
function f(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    t = 0;
  const o = f.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const e in s)
      if (!N.call(w.properties, e)) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    if (s.folderId !== void 0 && typeof s.folderId != "string") {
      const e = {
        instancePath: n + "/folderId",
        schemaPath: "#/properties/folderId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const e = {
        instancePath: n + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.corpora !== void 0) {
      let e = s.corpora;
      if (typeof e != "string") {
        const i = {
          instancePath: n + "/corpora",
          schemaPath: "#/properties/corpora/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
      if (
        !(e === "user" || e === "drive" || e === "domain" || e === "allDrives")
      ) {
        const i = {
          instancePath: n + "/corpora",
          schemaPath: "#/properties/corpora/enum",
          keyword: "enum",
          params: { allowedValues: w.properties.corpora.enum },
          message: "must be equal to one of the allowed values",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    }
    if (s.orderBy !== void 0 && typeof s.orderBy != "string") {
      const e = {
        instancePath: n + "/orderBy",
        schemaPath: "#/properties/orderBy/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.limit !== void 0) {
      let e = s.limit;
      if (typeof e == "number") {
        if (e > 100 || isNaN(e)) {
          const i = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (r === null ? (r = [i]) : r.push(i), t++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [i]) : r.push(i), t++);
        }
      } else {
        const i = {
          instancePath: n + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.start !== void 0) {
      let e = s.start;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const i = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [i]) : r.push(i), t++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [i]) : r.push(i), t++);
        }
      }
    }
    if (s.end !== void 0) {
      let e = s.end;
      if (!(typeof e == "number" && !(e % 1) && !isNaN(e))) {
        const i = {
          instancePath: n + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
      if (typeof e == "number") {
        if (e > 9007199254740991 || isNaN(e)) {
          const i = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (r === null ? (r = [i]) : r.push(i), t++);
        }
        if (e < 1 || isNaN(e)) {
          const i = {
            instancePath: n + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (r === null ? (r = [i]) : r.push(i), t++);
        }
      }
    }
    if (s.cursor !== void 0 && typeof s.cursor != "string") {
      const e = {
        instancePath: n + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((f.errors = r), t === 0);
}
f.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _ = y,
  O = { properties: { destination: { enum: ["inline", "disk"] } } };
function y(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    t = 0;
  const o = y.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.fileId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fileId" },
        message: "must have required property 'fileId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (
        !(
          e === "fileId" ||
          e === "exportFormat" ||
          e === "destination" ||
          e === "account"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    if (s.fileId !== void 0 && typeof s.fileId != "string") {
      const e = {
        instancePath: n + "/fileId",
        schemaPath: "#/properties/fileId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.exportFormat !== void 0 && typeof s.exportFormat != "string") {
      const e = {
        instancePath: n + "/exportFormat",
        schemaPath: "#/properties/exportFormat/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.destination !== void 0) {
      let e = s.destination;
      if (typeof e != "string") {
        const i = {
          instancePath: n + "/destination",
          schemaPath: "#/properties/destination/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
      if (!(e === "inline" || e === "disk")) {
        const i = {
          instancePath: n + "/destination",
          schemaPath: "#/properties/destination/enum",
          keyword: "enum",
          params: { allowedValues: O.properties.destination.enum },
          message: "must be equal to one of the allowed values",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((y.errors = r), t === 0);
}
y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const D = c;
function c(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    t = 0;
  const o = c.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    for (const e in s)
      if (
        !(
          e === "sourcePath" ||
          e === "sourceUrl" ||
          e === "destinationPath" ||
          e === "convertToGoogleFormat" ||
          e === "driveId" ||
          e === "root" ||
          e === "account"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    if (s.sourcePath !== void 0 && typeof s.sourcePath != "string") {
      const e = {
        instancePath: n + "/sourcePath",
        schemaPath: "#/properties/sourcePath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.sourceUrl !== void 0 && typeof s.sourceUrl != "string") {
      const e = {
        instancePath: n + "/sourceUrl",
        schemaPath: "#/properties/sourceUrl/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.destinationPath !== void 0 && typeof s.destinationPath != "string") {
      const e = {
        instancePath: n + "/destinationPath",
        schemaPath: "#/properties/destinationPath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (
      s.convertToGoogleFormat !== void 0 &&
      typeof s.convertToGoogleFormat != "boolean"
    ) {
      const e = {
        instancePath: n + "/convertToGoogleFormat",
        schemaPath: "#/properties/convertToGoogleFormat/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const e = {
        instancePath: n + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.root !== void 0 && typeof s.root != "string") {
      const e = {
        instancePath: n + "/root",
        schemaPath: "#/properties/root/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((c.errors = r), t === 0);
}
c.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const A = h;
function h(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    t = 0;
  const o = h.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.path === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (
        !(e === "path" || e === "driveId" || e === "root" || e === "account")
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    if (s.path !== void 0 && typeof s.path != "string") {
      const e = {
        instancePath: n + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const e = {
        instancePath: n + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.root !== void 0 && typeof s.root != "string") {
      const e = {
        instancePath: n + "/root",
        schemaPath: "#/properties/root/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((h.errors = r), t === 0);
}
h.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const T = g;
function g(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    t = 0;
  const o = g.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.fileId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fileId" },
        message: "must have required property 'fileId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (
        !(
          e === "fileId" ||
          e === "destinationPath" ||
          e === "newName" ||
          e === "driveId" ||
          e === "root" ||
          e === "account"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    if (s.fileId !== void 0 && typeof s.fileId != "string") {
      const e = {
        instancePath: n + "/fileId",
        schemaPath: "#/properties/fileId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.destinationPath !== void 0 && typeof s.destinationPath != "string") {
      const e = {
        instancePath: n + "/destinationPath",
        schemaPath: "#/properties/destinationPath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.newName !== void 0 && typeof s.newName != "string") {
      const e = {
        instancePath: n + "/newName",
        schemaPath: "#/properties/newName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const e = {
        instancePath: n + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.root !== void 0 && typeof s.root != "string") {
      const e = {
        instancePath: n + "/root",
        schemaPath: "#/properties/root/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((g.errors = r), t === 0);
}
g.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const j = P;
function P(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    t = 0;
  const o = P.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.fileId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fileId" },
        message: "must have required property 'fileId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (
        !(
          e === "fileId" ||
          e === "destinationPath" ||
          e === "newName" ||
          e === "driveId" ||
          e === "root" ||
          e === "account"
        )
      ) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    if (s.fileId !== void 0 && typeof s.fileId != "string") {
      const e = {
        instancePath: n + "/fileId",
        schemaPath: "#/properties/fileId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.destinationPath !== void 0 && typeof s.destinationPath != "string") {
      const e = {
        instancePath: n + "/destinationPath",
        schemaPath: "#/properties/destinationPath/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.newName !== void 0 && typeof s.newName != "string") {
      const e = {
        instancePath: n + "/newName",
        schemaPath: "#/properties/newName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.driveId !== void 0 && typeof s.driveId != "string") {
      const e = {
        instancePath: n + "/driveId",
        schemaPath: "#/properties/driveId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.root !== void 0 && typeof s.root != "string") {
      const e = {
        instancePath: n + "/root",
        schemaPath: "#/properties/root/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((P.errors = r), t === 0);
}
P.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const q = v;
function v(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    t = 0;
  const o = v.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.fileId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fileId" },
        message: "must have required property 'fileId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (!(e === "fileId" || e === "account")) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    if (s.fileId !== void 0 && typeof s.fileId != "string") {
      const e = {
        instancePath: n + "/fileId",
        schemaPath: "#/properties/fileId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((v.errors = r), t === 0);
}
v.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const x = b,
  u = {
    properties: {
      fileId: { type: "string" },
      action: { enum: ["add", "update", "remove"], type: "string" },
      type: { enum: ["user", "group", "domain", "anyone"], type: "string" },
      role: {
        enum: [
          "owner",
          "organizer",
          "fileOrganizer",
          "writer",
          "commenter",
          "reader",
        ],
        type: "string",
      },
      email: { type: "string" },
      domain: { type: "string" },
      permissionId: { type: "string" },
      sendNotification: { type: "boolean" },
      message: { type: "string" },
      account: { type: "string" },
    },
  };
function b(
  s,
  {
    instancePath: n = "",
    parentData: p,
    parentDataProperty: a,
    rootData: m = s,
    dynamicAnchors: l = {},
  } = {},
) {
  let r = null,
    t = 0;
  const o = b.evaluated;
  if (
    (o.dynamicProps && (o.props = void 0),
    o.dynamicItems && (o.items = void 0),
    s && typeof s == "object" && !Array.isArray(s))
  ) {
    if (s.fileId === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "fileId" },
        message: "must have required property 'fileId'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.action === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "action" },
        message: "must have required property 'action'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.type === void 0) {
      const e = {
        instancePath: n,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "type" },
        message: "must have required property 'type'",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    for (const e in s)
      if (!N.call(u.properties, e)) {
        const i = {
          instancePath: n,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: e },
          message: "must NOT have additional properties",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    if (s.fileId !== void 0 && typeof s.fileId != "string") {
      const e = {
        instancePath: n + "/fileId",
        schemaPath: "#/properties/fileId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.action !== void 0) {
      let e = s.action;
      if (typeof e != "string") {
        const i = {
          instancePath: n + "/action",
          schemaPath: "#/properties/action/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
      if (!(e === "add" || e === "update" || e === "remove")) {
        const i = {
          instancePath: n + "/action",
          schemaPath: "#/properties/action/enum",
          keyword: "enum",
          params: { allowedValues: u.properties.action.enum },
          message: "must be equal to one of the allowed values",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    }
    if (s.type !== void 0) {
      let e = s.type;
      if (typeof e != "string") {
        const i = {
          instancePath: n + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
      if (
        !(e === "user" || e === "group" || e === "domain" || e === "anyone")
      ) {
        const i = {
          instancePath: n + "/type",
          schemaPath: "#/properties/type/enum",
          keyword: "enum",
          params: { allowedValues: u.properties.type.enum },
          message: "must be equal to one of the allowed values",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    }
    if (s.role !== void 0) {
      let e = s.role;
      if (typeof e != "string") {
        const i = {
          instancePath: n + "/role",
          schemaPath: "#/properties/role/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
      if (
        !(
          e === "owner" ||
          e === "organizer" ||
          e === "fileOrganizer" ||
          e === "writer" ||
          e === "commenter" ||
          e === "reader"
        )
      ) {
        const i = {
          instancePath: n + "/role",
          schemaPath: "#/properties/role/enum",
          keyword: "enum",
          params: { allowedValues: u.properties.role.enum },
          message: "must be equal to one of the allowed values",
        };
        (r === null ? (r = [i]) : r.push(i), t++);
      }
    }
    if (s.email !== void 0 && typeof s.email != "string") {
      const e = {
        instancePath: n + "/email",
        schemaPath: "#/properties/email/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.domain !== void 0 && typeof s.domain != "string") {
      const e = {
        instancePath: n + "/domain",
        schemaPath: "#/properties/domain/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.permissionId !== void 0 && typeof s.permissionId != "string") {
      const e = {
        instancePath: n + "/permissionId",
        schemaPath: "#/properties/permissionId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (
      s.sendNotification !== void 0 &&
      typeof s.sendNotification != "boolean"
    ) {
      const e = {
        instancePath: n + "/sendNotification",
        schemaPath: "#/properties/sendNotification/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.message !== void 0 && typeof s.message != "string") {
      const e = {
        instancePath: n + "/message",
        schemaPath: "#/properties/message/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
    if (s.account !== void 0 && typeof s.account != "string") {
      const e = {
        instancePath: n + "/account",
        schemaPath: "#/properties/account/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (r === null ? (r = [e]) : r.push(e), t++);
    }
  } else {
    const e = {
      instancePath: n,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (r === null ? (r = [e]) : r.push(e), t++);
  }
  return ((b.errors = r), t === 0);
}
b.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const E = {
  gdrive_list_drives: k,
  gdrive_list: I,
  gdrive_read: _,
  gdrive_upload: D,
  gdrive_folder: A,
  gdrive_move: T,
  gdrive_copy: j,
  gdrive_delete: q,
  gdrive_share: x,
};
exports.NATIVE_TOOL_VALIDATORS = E;
exports.validate_gdrive_copy = j;
exports.validate_gdrive_delete = q;
exports.validate_gdrive_folder = A;
exports.validate_gdrive_list = I;
exports.validate_gdrive_list_drives = k;
exports.validate_gdrive_move = T;
exports.validate_gdrive_read = _;
exports.validate_gdrive_share = x;
exports.validate_gdrive_upload = D;
