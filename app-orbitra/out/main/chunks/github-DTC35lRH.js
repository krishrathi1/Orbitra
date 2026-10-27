"use strict";
(function () {
  try {
    var i =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    i.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var i =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      p = new i.Error().stack;
    p &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[p] = "86a47978-bbcd-40a5-87fc-7ba169eda273"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-86a47978-bbcd-40a5-87fc-7ba169eda273"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const we = R,
  T = {
    properties: {
      base: { type: "string" },
      direction: { enum: ["asc", "desc"], type: "string" },
      head: { type: "string" },
      owner: { type: "string" },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 100 },
      repo: { type: "string" },
      sort: {
        enum: ["created", "updated", "popularity", "long-running"],
        type: "string",
      },
      state: { enum: ["open", "closed", "all"], type: "string" },
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
  A = Object.prototype.hasOwnProperty;
function R(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = R.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!A.call(T.properties, r)) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.base !== void 0 && typeof i.base != "string") {
      const r = {
        instancePath: p + "/base",
        schemaPath: "#/properties/base/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.direction !== void 0) {
      let r = i.direction;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/direction",
          schemaPath: "#/properties/direction/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (!(r === "asc" || r === "desc")) {
        const s = {
          instancePath: p + "/direction",
          schemaPath: "#/properties/direction/enum",
          keyword: "enum",
          params: { allowedValues: T.properties.direction.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.head !== void 0 && typeof i.head != "string") {
      const r = {
        instancePath: p + "/head",
        schemaPath: "#/properties/head/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.page !== void 0) {
      let r = i.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.perPage !== void 0) {
      let r = i.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.sort !== void 0) {
      let r = i.sort;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/sort",
          schemaPath: "#/properties/sort/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (
        !(
          r === "created" ||
          r === "updated" ||
          r === "popularity" ||
          r === "long-running"
        )
      ) {
        const s = {
          instancePath: p + "/sort",
          schemaPath: "#/properties/sort/enum",
          keyword: "enum",
          params: { allowedValues: T.properties.sort.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.state !== void 0) {
      let r = i.state;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/state",
          schemaPath: "#/properties/state/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (!(r === "open" || r === "closed" || r === "all")) {
        const s = {
          instancePath: p + "/state",
          schemaPath: "#/properties/state/enum",
          keyword: "enum",
          params: { allowedValues: T.properties.state.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.start !== void 0) {
      let r = i.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.end !== void 0) {
      let r = i.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((R.errors = e), t === 0);
}
R.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Pe = S;
function S(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = S.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!(r === "owner" || r === "pullNumber" || r === "repo")) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber !== void 0) {
      let r = i.pullNumber;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((S.errors = e), t === 0);
}
S.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ne = M,
  Ke = {
    properties: {
      base: { type: "string" },
      body: { type: "string" },
      draft: { type: "boolean" },
      head: { type: "string" },
      headRepo: { type: "string" },
      issue: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      maintainerCanModify: { type: "boolean" },
      owner: { type: "string" },
      repo: { type: "string" },
      title: { type: "string" },
    },
  };
function M(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = M.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.base === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "base" },
        message: "must have required property 'base'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.head === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "head" },
        message: "must have required property 'head'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!A.call(Ke.properties, r)) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.base !== void 0 && typeof i.base != "string") {
      const r = {
        instancePath: p + "/base",
        schemaPath: "#/properties/base/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.body !== void 0 && typeof i.body != "string") {
      const r = {
        instancePath: p + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.draft !== void 0 && typeof i.draft != "boolean") {
      const r = {
        instancePath: p + "/draft",
        schemaPath: "#/properties/draft/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.head !== void 0 && typeof i.head != "string") {
      const r = {
        instancePath: p + "/head",
        schemaPath: "#/properties/head/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.headRepo !== void 0 && typeof i.headRepo != "string") {
      const r = {
        instancePath: p + "/headRepo",
        schemaPath: "#/properties/headRepo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.issue !== void 0) {
      let r = i.issue;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/issue",
          schemaPath: "#/properties/issue/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/issue",
            schemaPath: "#/properties/issue/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/issue",
            schemaPath: "#/properties/issue/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (
      i.maintainerCanModify !== void 0 &&
      typeof i.maintainerCanModify != "boolean"
    ) {
      const r = {
        instancePath: p + "/maintainerCanModify",
        schemaPath: "#/properties/maintainerCanModify/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.title !== void 0 && typeof i.title != "string") {
      const r = {
        instancePath: p + "/title",
        schemaPath: "#/properties/title/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((M.errors = e), t === 0);
}
M.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ke = V,
  de = {
    properties: {
      base: { anyOf: [{ type: "string" }, { type: "null" }] },
      body: { anyOf: [{ type: "string" }, { type: "null" }] },
      draft: { anyOf: [{ type: "boolean" }, { type: "null" }] },
      maintainerCanModify: { anyOf: [{ type: "boolean" }, { type: "null" }] },
      owner: { type: "string" },
      pullNumber: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      repo: { type: "string" },
      state: {
        anyOf: [{ enum: ["open", "closed"], type: "string" }, { type: "null" }],
      },
      title: { anyOf: [{ type: "string" }, { type: "null" }] },
    },
  };
function V(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = V.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const u = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [u]) : e.push(u), t++);
    }
    if (i.pullNumber === void 0) {
      const u = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [u]) : e.push(u), t++);
    }
    if (i.repo === void 0) {
      const u = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [u]) : e.push(u), t++);
    }
    for (const u in i)
      if (!A.call(de.properties, u)) {
        const f = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: u },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [f]) : e.push(f), t++);
      }
    if (i.base !== void 0) {
      let u = i.base;
      const f = t;
      let a = !1;
      const c = t;
      if (typeof u != "string") {
        const l = {
          instancePath: p + "/base",
          schemaPath: "#/properties/base/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      var r = c === t;
      a = a || r;
      const g = t;
      if (u !== null) {
        const l = {
          instancePath: p + "/base",
          schemaPath: "#/properties/base/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      var r = g === t;
      if (((a = a || r), a))
        ((t = f), e !== null && (f ? (e.length = f) : (e = null)));
      else {
        const l = {
          instancePath: p + "/base",
          schemaPath: "#/properties/base/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    }
    if (i.body !== void 0) {
      let u = i.body;
      const f = t;
      let a = !1;
      const c = t;
      if (typeof u != "string") {
        const l = {
          instancePath: p + "/body",
          schemaPath: "#/properties/body/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      var s = c === t;
      a = a || s;
      const g = t;
      if (u !== null) {
        const l = {
          instancePath: p + "/body",
          schemaPath: "#/properties/body/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      var s = g === t;
      if (((a = a || s), a))
        ((t = f), e !== null && (f ? (e.length = f) : (e = null)));
      else {
        const l = {
          instancePath: p + "/body",
          schemaPath: "#/properties/body/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    }
    if (i.draft !== void 0) {
      let u = i.draft;
      const f = t;
      let a = !1;
      const c = t;
      if (typeof u != "boolean") {
        const l = {
          instancePath: p + "/draft",
          schemaPath: "#/properties/draft/anyOf/0/type",
          keyword: "type",
          params: { type: "boolean" },
          message: "must be boolean",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      var n = c === t;
      a = a || n;
      const g = t;
      if (u !== null) {
        const l = {
          instancePath: p + "/draft",
          schemaPath: "#/properties/draft/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      var n = g === t;
      if (((a = a || n), a))
        ((t = f), e !== null && (f ? (e.length = f) : (e = null)));
      else {
        const l = {
          instancePath: p + "/draft",
          schemaPath: "#/properties/draft/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    }
    if (i.maintainerCanModify !== void 0) {
      let u = i.maintainerCanModify;
      const f = t;
      let a = !1;
      const c = t;
      if (typeof u != "boolean") {
        const l = {
          instancePath: p + "/maintainerCanModify",
          schemaPath: "#/properties/maintainerCanModify/anyOf/0/type",
          keyword: "type",
          params: { type: "boolean" },
          message: "must be boolean",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      var o = c === t;
      a = a || o;
      const g = t;
      if (u !== null) {
        const l = {
          instancePath: p + "/maintainerCanModify",
          schemaPath: "#/properties/maintainerCanModify/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      var o = g === t;
      if (((a = a || o), a))
        ((t = f), e !== null && (f ? (e.length = f) : (e = null)));
      else {
        const l = {
          instancePath: p + "/maintainerCanModify",
          schemaPath: "#/properties/maintainerCanModify/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const u = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [u]) : e.push(u), t++);
    }
    if (i.pullNumber !== void 0) {
      let u = i.pullNumber;
      if (!(typeof u == "number" && !(u % 1) && !isNaN(u))) {
        const f = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [f]) : e.push(f), t++);
      }
      if (typeof u == "number") {
        if (u > 9007199254740991 || isNaN(u)) {
          const f = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [f]) : e.push(f), t++);
        }
        if (u < -9007199254740991 || isNaN(u)) {
          const f = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [f]) : e.push(f), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const u = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [u]) : e.push(u), t++);
    }
    if (i.state !== void 0) {
      let u = i.state;
      const f = t;
      let a = !1;
      const c = t;
      if (typeof u != "string") {
        const l = {
          instancePath: p + "/state",
          schemaPath: "#/properties/state/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      if (!(u === "open" || u === "closed")) {
        const l = {
          instancePath: p + "/state",
          schemaPath: "#/properties/state/anyOf/0/enum",
          keyword: "enum",
          params: { allowedValues: de.properties.state.anyOf[0].enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      var _ = c === t;
      a = a || _;
      const g = t;
      if (u !== null) {
        const l = {
          instancePath: p + "/state",
          schemaPath: "#/properties/state/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      var _ = g === t;
      if (((a = a || _), a))
        ((t = f), e !== null && (f ? (e.length = f) : (e = null)));
      else {
        const l = {
          instancePath: p + "/state",
          schemaPath: "#/properties/state/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    }
    if (i.title !== void 0) {
      let u = i.title;
      const f = t;
      let a = !1;
      const c = t;
      if (typeof u != "string") {
        const l = {
          instancePath: p + "/title",
          schemaPath: "#/properties/title/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      var x = c === t;
      a = a || x;
      const g = t;
      if (u !== null) {
        const l = {
          instancePath: p + "/title",
          schemaPath: "#/properties/title/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
      var x = g === t;
      if (((a = a || x), a))
        ((t = f), e !== null && (f ? (e.length = f) : (e = null)));
      else {
        const l = {
          instancePath: p + "/title",
          schemaPath: "#/properties/title/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [l]) : e.push(l), t++);
      }
    }
  } else {
    const u = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [u]) : e.push(u), t++);
  }
  return ((V.errors = e), t === 0);
}
V.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ve = C,
  We = { properties: { mergeMethod: { enum: ["merge", "squash", "rebase"] } } };
function C(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = C.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (
        !(
          r === "commitMessage" ||
          r === "commitTitle" ||
          r === "mergeMethod" ||
          r === "owner" ||
          r === "pullNumber" ||
          r === "repo" ||
          r === "sha"
        )
      ) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.commitMessage !== void 0 && typeof i.commitMessage != "string") {
      const r = {
        instancePath: p + "/commitMessage",
        schemaPath: "#/properties/commitMessage/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.commitTitle !== void 0 && typeof i.commitTitle != "string") {
      const r = {
        instancePath: p + "/commitTitle",
        schemaPath: "#/properties/commitTitle/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.mergeMethod !== void 0) {
      let r = i.mergeMethod;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/mergeMethod",
          schemaPath: "#/properties/mergeMethod/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (!(r === "merge" || r === "squash" || r === "rebase")) {
        const s = {
          instancePath: p + "/mergeMethod",
          schemaPath: "#/properties/mergeMethod/enum",
          keyword: "enum",
          params: { allowedValues: We.properties.mergeMethod.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber !== void 0) {
      let r = i.pullNumber;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.sha !== void 0 && typeof i.sha != "string") {
      const r = {
        instancePath: p + "/sha",
        schemaPath: "#/properties/sha/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((C.errors = e), t === 0);
}
C.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const _e = L;
function L(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = L.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (
        !(
          r === "owner" ||
          r === "page" ||
          r === "perPage" ||
          r === "pullNumber" ||
          r === "repo" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.page !== void 0) {
      let r = i.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.perPage !== void 0) {
      let r = i.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.pullNumber !== void 0) {
      let r = i.pullNumber;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.start !== void 0) {
      let r = i.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.end !== void 0) {
      let r = i.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((L.errors = e), t === 0);
}
L.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const qe = G;
function G(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = G.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (
        !(
          r === "owner" ||
          r === "page" ||
          r === "perPage" ||
          r === "pullNumber" ||
          r === "repo" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.page !== void 0) {
      let r = i.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.perPage !== void 0) {
      let r = i.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.pullNumber !== void 0) {
      let r = i.pullNumber;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.start !== void 0) {
      let r = i.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.end !== void 0) {
      let r = i.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((G.errors = e), t === 0);
}
G.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Oe = H,
  ue = {
    properties: {
      comments: {
        anyOf: [
          {
            type: "array",
            items: {
              type: "object",
              properties: {
                body: { type: "string" },
                line: {
                  anyOf: [
                    {
                      type: "integer",
                      minimum: -9007199254740991,
                      maximum: 9007199254740991,
                    },
                    { type: "null" },
                  ],
                },
                path: { type: "string" },
                side: {
                  anyOf: [
                    { enum: ["LEFT", "RIGHT"], type: "string" },
                    { type: "null" },
                  ],
                },
                start_line: {
                  anyOf: [
                    {
                      type: "integer",
                      minimum: -9007199254740991,
                      maximum: 9007199254740991,
                    },
                    { type: "null" },
                  ],
                },
                start_side: {
                  anyOf: [
                    { enum: ["LEFT", "RIGHT"], type: "string" },
                    { type: "null" },
                  ],
                },
              },
              required: ["body", "path"],
            },
          },
          { type: "null" },
        ],
      },
      event: {
        anyOf: [
          { enum: ["APPROVE", "REQUEST_CHANGES", "COMMENT"], type: "string" },
          { type: "null" },
        ],
      },
    },
  };
function H(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = H.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const a = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [a]) : e.push(a), t++);
    }
    if (i.pullNumber === void 0) {
      const a = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [a]) : e.push(a), t++);
    }
    if (i.repo === void 0) {
      const a = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [a]) : e.push(a), t++);
    }
    for (const a in i)
      if (
        !(
          a === "body" ||
          a === "comments" ||
          a === "commitId" ||
          a === "event" ||
          a === "owner" ||
          a === "pullNumber" ||
          a === "repo"
        )
      ) {
        const c = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: a },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [c]) : e.push(c), t++);
      }
    if (i.body !== void 0) {
      let a = i.body;
      const c = t;
      let g = !1;
      const l = t;
      if (typeof a != "string") {
        const h = {
          instancePath: p + "/body",
          schemaPath: "#/properties/body/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
      var r = l === t;
      g = g || r;
      const D = t;
      if (a !== null) {
        const h = {
          instancePath: p + "/body",
          schemaPath: "#/properties/body/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
      var r = D === t;
      if (((g = g || r), g))
        ((t = c), e !== null && (c ? (e.length = c) : (e = null)));
      else {
        const h = {
          instancePath: p + "/body",
          schemaPath: "#/properties/body/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
    }
    if (i.comments !== void 0) {
      let a = i.comments;
      const c = t;
      let g = !1;
      const l = t;
      if (Array.isArray(a)) {
        const h = a.length;
        for (let k = 0; k < h; k++) {
          let q = a[k];
          if (q && typeof q == "object" && !Array.isArray(q)) {
            if (q.body === void 0) {
              const d = {
                instancePath: p + "/comments/" + k,
                schemaPath: "#/properties/comments/anyOf/0/items/required",
                keyword: "required",
                params: { missingProperty: "body" },
                message: "must have required property 'body'",
              };
              (e === null ? (e = [d]) : e.push(d), t++);
            }
            if (q.path === void 0) {
              const d = {
                instancePath: p + "/comments/" + k,
                schemaPath: "#/properties/comments/anyOf/0/items/required",
                keyword: "required",
                params: { missingProperty: "path" },
                message: "must have required property 'path'",
              };
              (e === null ? (e = [d]) : e.push(d), t++);
            }
            if (q.body !== void 0 && typeof q.body != "string") {
              const d = {
                instancePath: p + "/comments/" + k + "/body",
                schemaPath:
                  "#/properties/comments/anyOf/0/items/properties/body/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [d]) : e.push(d), t++);
            }
            if (q.line !== void 0) {
              let d = q.line;
              const O = t;
              let v = !1;
              const I = t;
              if (!(typeof d == "number" && !(d % 1) && !isNaN(d))) {
                const y = {
                  instancePath: p + "/comments/" + k + "/line",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/line/anyOf/0/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
              if (typeof d == "number") {
                if (d > 9007199254740991 || isNaN(d)) {
                  const y = {
                    instancePath: p + "/comments/" + k + "/line",
                    schemaPath:
                      "#/properties/comments/anyOf/0/items/properties/line/anyOf/0/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 9007199254740991 },
                    message: "must be <= 9007199254740991",
                  };
                  (e === null ? (e = [y]) : e.push(y), t++);
                }
                if (d < -9007199254740991 || isNaN(d)) {
                  const y = {
                    instancePath: p + "/comments/" + k + "/line",
                    schemaPath:
                      "#/properties/comments/anyOf/0/items/properties/line/anyOf/0/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: -9007199254740991 },
                    message: "must be >= -9007199254740991",
                  };
                  (e === null ? (e = [y]) : e.push(y), t++);
                }
              }
              var s = I === t;
              v = v || s;
              const j = t;
              if (d !== null) {
                const y = {
                  instancePath: p + "/comments/" + k + "/line",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/line/anyOf/1/type",
                  keyword: "type",
                  params: { type: "null" },
                  message: "must be null",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
              var s = j === t;
              if (((v = v || s), v))
                ((t = O), e !== null && (O ? (e.length = O) : (e = null)));
              else {
                const y = {
                  instancePath: p + "/comments/" + k + "/line",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/line/anyOf",
                  keyword: "anyOf",
                  params: {},
                  message: "must match a schema in anyOf",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
            }
            if (q.path !== void 0 && typeof q.path != "string") {
              const d = {
                instancePath: p + "/comments/" + k + "/path",
                schemaPath:
                  "#/properties/comments/anyOf/0/items/properties/path/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
              };
              (e === null ? (e = [d]) : e.push(d), t++);
            }
            if (q.side !== void 0) {
              let d = q.side;
              const O = t;
              let v = !1;
              const I = t;
              if (typeof d != "string") {
                const y = {
                  instancePath: p + "/comments/" + k + "/side",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/side/anyOf/0/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
              if (!(d === "LEFT" || d === "RIGHT")) {
                const y = {
                  instancePath: p + "/comments/" + k + "/side",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/side/anyOf/0/enum",
                  keyword: "enum",
                  params: {
                    allowedValues:
                      ue.properties.comments.anyOf[0].items.properties.side
                        .anyOf[0].enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
              var n = I === t;
              v = v || n;
              const j = t;
              if (d !== null) {
                const y = {
                  instancePath: p + "/comments/" + k + "/side",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/side/anyOf/1/type",
                  keyword: "type",
                  params: { type: "null" },
                  message: "must be null",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
              var n = j === t;
              if (((v = v || n), v))
                ((t = O), e !== null && (O ? (e.length = O) : (e = null)));
              else {
                const y = {
                  instancePath: p + "/comments/" + k + "/side",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/side/anyOf",
                  keyword: "anyOf",
                  params: {},
                  message: "must match a schema in anyOf",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
            }
            if (q.start_line !== void 0) {
              let d = q.start_line;
              const O = t;
              let v = !1;
              const I = t;
              if (!(typeof d == "number" && !(d % 1) && !isNaN(d))) {
                const y = {
                  instancePath: p + "/comments/" + k + "/start_line",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/start_line/anyOf/0/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
              if (typeof d == "number") {
                if (d > 9007199254740991 || isNaN(d)) {
                  const y = {
                    instancePath: p + "/comments/" + k + "/start_line",
                    schemaPath:
                      "#/properties/comments/anyOf/0/items/properties/start_line/anyOf/0/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 9007199254740991 },
                    message: "must be <= 9007199254740991",
                  };
                  (e === null ? (e = [y]) : e.push(y), t++);
                }
                if (d < -9007199254740991 || isNaN(d)) {
                  const y = {
                    instancePath: p + "/comments/" + k + "/start_line",
                    schemaPath:
                      "#/properties/comments/anyOf/0/items/properties/start_line/anyOf/0/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: -9007199254740991 },
                    message: "must be >= -9007199254740991",
                  };
                  (e === null ? (e = [y]) : e.push(y), t++);
                }
              }
              var o = I === t;
              v = v || o;
              const j = t;
              if (d !== null) {
                const y = {
                  instancePath: p + "/comments/" + k + "/start_line",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/start_line/anyOf/1/type",
                  keyword: "type",
                  params: { type: "null" },
                  message: "must be null",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
              var o = j === t;
              if (((v = v || o), v))
                ((t = O), e !== null && (O ? (e.length = O) : (e = null)));
              else {
                const y = {
                  instancePath: p + "/comments/" + k + "/start_line",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/start_line/anyOf",
                  keyword: "anyOf",
                  params: {},
                  message: "must match a schema in anyOf",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
            }
            if (q.start_side !== void 0) {
              let d = q.start_side;
              const O = t;
              let v = !1;
              const I = t;
              if (typeof d != "string") {
                const y = {
                  instancePath: p + "/comments/" + k + "/start_side",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/start_side/anyOf/0/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
              if (!(d === "LEFT" || d === "RIGHT")) {
                const y = {
                  instancePath: p + "/comments/" + k + "/start_side",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/start_side/anyOf/0/enum",
                  keyword: "enum",
                  params: {
                    allowedValues:
                      ue.properties.comments.anyOf[0].items.properties
                        .start_side.anyOf[0].enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
              var _ = I === t;
              v = v || _;
              const j = t;
              if (d !== null) {
                const y = {
                  instancePath: p + "/comments/" + k + "/start_side",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/start_side/anyOf/1/type",
                  keyword: "type",
                  params: { type: "null" },
                  message: "must be null",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
              var _ = j === t;
              if (((v = v || _), v))
                ((t = O), e !== null && (O ? (e.length = O) : (e = null)));
              else {
                const y = {
                  instancePath: p + "/comments/" + k + "/start_side",
                  schemaPath:
                    "#/properties/comments/anyOf/0/items/properties/start_side/anyOf",
                  keyword: "anyOf",
                  params: {},
                  message: "must match a schema in anyOf",
                };
                (e === null ? (e = [y]) : e.push(y), t++);
              }
            }
          } else {
            const d = {
              instancePath: p + "/comments/" + k,
              schemaPath: "#/properties/comments/anyOf/0/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            (e === null ? (e = [d]) : e.push(d), t++);
          }
        }
      } else {
        const h = {
          instancePath: p + "/comments",
          schemaPath: "#/properties/comments/anyOf/0/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
      var x = l === t;
      g = g || x;
      const D = t;
      if (a !== null) {
        const h = {
          instancePath: p + "/comments",
          schemaPath: "#/properties/comments/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
      var x = D === t;
      if (((g = g || x), g))
        ((t = c), e !== null && (c ? (e.length = c) : (e = null)));
      else {
        const h = {
          instancePath: p + "/comments",
          schemaPath: "#/properties/comments/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
    }
    if (i.commitId !== void 0) {
      let a = i.commitId;
      const c = t;
      let g = !1;
      const l = t;
      if (typeof a != "string") {
        const h = {
          instancePath: p + "/commitId",
          schemaPath: "#/properties/commitId/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
      var u = l === t;
      g = g || u;
      const D = t;
      if (a !== null) {
        const h = {
          instancePath: p + "/commitId",
          schemaPath: "#/properties/commitId/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
      var u = D === t;
      if (((g = g || u), g))
        ((t = c), e !== null && (c ? (e.length = c) : (e = null)));
      else {
        const h = {
          instancePath: p + "/commitId",
          schemaPath: "#/properties/commitId/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
    }
    if (i.event !== void 0) {
      let a = i.event;
      const c = t;
      let g = !1;
      const l = t;
      if (typeof a != "string") {
        const h = {
          instancePath: p + "/event",
          schemaPath: "#/properties/event/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
      if (!(a === "APPROVE" || a === "REQUEST_CHANGES" || a === "COMMENT")) {
        const h = {
          instancePath: p + "/event",
          schemaPath: "#/properties/event/anyOf/0/enum",
          keyword: "enum",
          params: { allowedValues: ue.properties.event.anyOf[0].enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
      var f = l === t;
      g = g || f;
      const D = t;
      if (a !== null) {
        const h = {
          instancePath: p + "/event",
          schemaPath: "#/properties/event/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
      var f = D === t;
      if (((g = g || f), g))
        ((t = c), e !== null && (c ? (e.length = c) : (e = null)));
      else {
        const h = {
          instancePath: p + "/event",
          schemaPath: "#/properties/event/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [h]) : e.push(h), t++);
      }
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const a = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), t++);
    }
    if (i.pullNumber !== void 0) {
      let a = i.pullNumber;
      if (!(typeof a == "number" && !(a % 1) && !isNaN(a))) {
        const c = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [c]) : e.push(c), t++);
      }
      if (typeof a == "number") {
        if (a > 9007199254740991 || isNaN(a)) {
          const c = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [c]) : e.push(c), t++);
        }
        if (a < -9007199254740991 || isNaN(a)) {
          const c = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [c]) : e.push(c), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const a = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [a]) : e.push(a), t++);
    }
  } else {
    const a = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [a]) : e.push(a), t++);
  }
  return ((H.errors = e), t === 0);
}
H.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const xe = F;
function F(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = F.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (
        !(
          r === "owner" ||
          r === "page" ||
          r === "perPage" ||
          r === "pullNumber" ||
          r === "repo" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.page !== void 0) {
      let r = i.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.perPage !== void 0) {
      let r = i.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.pullNumber !== void 0) {
      let r = i.pullNumber;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.start !== void 0) {
      let r = i.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.end !== void 0) {
      let r = i.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((F.errors = e), t === 0);
}
F.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ae = z,
  Xe = {
    properties: { event: { enum: ["APPROVE", "REQUEST_CHANGES", "COMMENT"] } },
  };
function z(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = z.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.event === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "event" },
        message: "must have required property 'event'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.reviewId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "reviewId" },
        message: "must have required property 'reviewId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (
        !(
          r === "body" ||
          r === "event" ||
          r === "owner" ||
          r === "pullNumber" ||
          r === "repo" ||
          r === "reviewId"
        )
      ) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.body !== void 0 && typeof i.body != "string") {
      const r = {
        instancePath: p + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.event !== void 0) {
      let r = i.event;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/event",
          schemaPath: "#/properties/event/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (!(r === "APPROVE" || r === "REQUEST_CHANGES" || r === "COMMENT")) {
        const s = {
          instancePath: p + "/event",
          schemaPath: "#/properties/event/enum",
          keyword: "enum",
          params: { allowedValues: Xe.properties.event.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber !== void 0) {
      let r = i.pullNumber;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.reviewId !== void 0) {
      let r = i.reviewId;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/reviewId",
          schemaPath: "#/properties/reviewId/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/reviewId",
            schemaPath: "#/properties/reviewId/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/reviewId",
            schemaPath: "#/properties/reviewId/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((z.errors = e), t === 0);
}
z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const De = B;
function B(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = B.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (
        !(
          r === "owner" ||
          r === "pullNumber" ||
          r === "repo" ||
          r === "reviewers" ||
          r === "teamReviewers"
        )
      ) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber !== void 0) {
      let r = i.pullNumber;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.reviewers !== void 0) {
      let r = i.reviewers;
      if (Array.isArray(r)) {
        const s = r.length;
        for (let n = 0; n < s; n++)
          if (typeof r[n] != "string") {
            const o = {
              instancePath: p + "/reviewers/" + n,
              schemaPath: "#/properties/reviewers/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), t++);
          }
      } else {
        const s = {
          instancePath: p + "/reviewers",
          schemaPath: "#/properties/reviewers/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.teamReviewers !== void 0) {
      let r = i.teamReviewers;
      if (Array.isArray(r)) {
        const s = r.length;
        for (let n = 0; n < s; n++)
          if (typeof r[n] != "string") {
            const o = {
              instancePath: p + "/teamReviewers/" + n,
              schemaPath: "#/properties/teamReviewers/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            (e === null ? (e = [o]) : e.push(o), t++);
          }
      } else {
        const s = {
          instancePath: p + "/teamReviewers",
          schemaPath: "#/properties/teamReviewers/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((B.errors = e), t === 0);
}
B.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ie = Q;
function Q(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = Q.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!(r === "owner" || r === "pullNumber" || r === "repo")) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber !== void 0) {
      let r = i.pullNumber;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((Q.errors = e), t === 0);
}
Q.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const je = U,
  E = {
    properties: {
      body: { type: "string" },
      commitId: { type: "string" },
      inReplyTo: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      line: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      owner: { type: "string" },
      path: { type: "string" },
      position: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      pullNumber: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      repo: { type: "string" },
      side: { enum: ["LEFT", "RIGHT"], type: "string" },
      startLine: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      startSide: { enum: ["LEFT", "RIGHT"], type: "string" },
      subjectType: { enum: ["line", "file"], type: "string" },
    },
  };
function U(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = U.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.body === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "body" },
        message: "must have required property 'body'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.commitId === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "commitId" },
        message: "must have required property 'commitId'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.path === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!A.call(E.properties, r)) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.body !== void 0 && typeof i.body != "string") {
      const r = {
        instancePath: p + "/body",
        schemaPath: "#/properties/body/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.commitId !== void 0 && typeof i.commitId != "string") {
      const r = {
        instancePath: p + "/commitId",
        schemaPath: "#/properties/commitId/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.inReplyTo !== void 0) {
      let r = i.inReplyTo;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/inReplyTo",
          schemaPath: "#/properties/inReplyTo/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/inReplyTo",
            schemaPath: "#/properties/inReplyTo/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/inReplyTo",
            schemaPath: "#/properties/inReplyTo/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.line !== void 0) {
      let r = i.line;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/line",
          schemaPath: "#/properties/line/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/line",
            schemaPath: "#/properties/line/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/line",
            schemaPath: "#/properties/line/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.path !== void 0 && typeof i.path != "string") {
      const r = {
        instancePath: p + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.position !== void 0) {
      let r = i.position;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/position",
          schemaPath: "#/properties/position/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/position",
            schemaPath: "#/properties/position/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/position",
            schemaPath: "#/properties/position/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.pullNumber !== void 0) {
      let r = i.pullNumber;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.side !== void 0) {
      let r = i.side;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/side",
          schemaPath: "#/properties/side/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (!(r === "LEFT" || r === "RIGHT")) {
        const s = {
          instancePath: p + "/side",
          schemaPath: "#/properties/side/enum",
          keyword: "enum",
          params: { allowedValues: E.properties.side.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.startLine !== void 0) {
      let r = i.startLine;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/startLine",
          schemaPath: "#/properties/startLine/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/startLine",
            schemaPath: "#/properties/startLine/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/startLine",
            schemaPath: "#/properties/startLine/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.startSide !== void 0) {
      let r = i.startSide;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/startSide",
          schemaPath: "#/properties/startSide/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (!(r === "LEFT" || r === "RIGHT")) {
        const s = {
          instancePath: p + "/startSide",
          schemaPath: "#/properties/startSide/enum",
          keyword: "enum",
          params: { allowedValues: E.properties.startSide.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.subjectType !== void 0) {
      let r = i.subjectType;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/subjectType",
          schemaPath: "#/properties/subjectType/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (!(r === "line" || r === "file")) {
        const s = {
          instancePath: p + "/subjectType",
          schemaPath: "#/properties/subjectType/enum",
          keyword: "enum",
          params: { allowedValues: E.properties.subjectType.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((U.errors = e), t === 0);
}
U.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Te = Y,
  le = {
    properties: {
      direction: {
        anyOf: [{ enum: ["asc", "desc"], type: "string" }, { type: "null" }],
      },
      owner: { type: "string" },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 100 },
      pullNumber: {
        type: "integer",
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      },
      repo: { type: "string" },
      since: { anyOf: [{ type: "string" }, { type: "null" }] },
      sort: { enum: ["created", "updated"], type: "string" },
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
function Y(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = Y.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const n = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [n]) : e.push(n), t++);
    }
    if (i.pullNumber === void 0) {
      const n = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [n]) : e.push(n), t++);
    }
    if (i.repo === void 0) {
      const n = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [n]) : e.push(n), t++);
    }
    for (const n in i)
      if (!A.call(le.properties, n)) {
        const o = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: n },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    if (i.direction !== void 0) {
      let n = i.direction;
      const o = t;
      let _ = !1;
      const x = t;
      if (typeof n != "string") {
        const f = {
          instancePath: p + "/direction",
          schemaPath: "#/properties/direction/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [f]) : e.push(f), t++);
      }
      if (!(n === "asc" || n === "desc")) {
        const f = {
          instancePath: p + "/direction",
          schemaPath: "#/properties/direction/anyOf/0/enum",
          keyword: "enum",
          params: { allowedValues: le.properties.direction.anyOf[0].enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [f]) : e.push(f), t++);
      }
      var r = x === t;
      _ = _ || r;
      const u = t;
      if (n !== null) {
        const f = {
          instancePath: p + "/direction",
          schemaPath: "#/properties/direction/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [f]) : e.push(f), t++);
      }
      var r = u === t;
      if (((_ = _ || r), _))
        ((t = o), e !== null && (o ? (e.length = o) : (e = null)));
      else {
        const f = {
          instancePath: p + "/direction",
          schemaPath: "#/properties/direction/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [f]) : e.push(f), t++);
      }
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const n = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [n]) : e.push(n), t++);
    }
    if (i.page !== void 0) {
      let n = i.page;
      if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
        const o = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (typeof n == "number") {
        if (n > 9007199254740991 || isNaN(n)) {
          const o = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
        if (n < 1 || isNaN(n)) {
          const o = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
      }
    }
    if (i.perPage !== void 0) {
      let n = i.perPage;
      if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
        const o = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (typeof n == "number") {
        if (n > 100 || isNaN(n)) {
          const o = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
        if (n < 1 || isNaN(n)) {
          const o = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
      }
    }
    if (i.pullNumber !== void 0) {
      let n = i.pullNumber;
      if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
        const o = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (typeof n == "number") {
        if (n > 9007199254740991 || isNaN(n)) {
          const o = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
        if (n < -9007199254740991 || isNaN(n)) {
          const o = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const n = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [n]) : e.push(n), t++);
    }
    if (i.since !== void 0) {
      let n = i.since;
      const o = t;
      let _ = !1;
      const x = t;
      if (typeof n != "string") {
        const f = {
          instancePath: p + "/since",
          schemaPath: "#/properties/since/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [f]) : e.push(f), t++);
      }
      var s = x === t;
      _ = _ || s;
      const u = t;
      if (n !== null) {
        const f = {
          instancePath: p + "/since",
          schemaPath: "#/properties/since/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [f]) : e.push(f), t++);
      }
      var s = u === t;
      if (((_ = _ || s), _))
        ((t = o), e !== null && (o ? (e.length = o) : (e = null)));
      else {
        const f = {
          instancePath: p + "/since",
          schemaPath: "#/properties/since/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [f]) : e.push(f), t++);
      }
    }
    if (i.sort !== void 0) {
      let n = i.sort;
      if (typeof n != "string") {
        const o = {
          instancePath: p + "/sort",
          schemaPath: "#/properties/sort/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (!(n === "created" || n === "updated")) {
        const o = {
          instancePath: p + "/sort",
          schemaPath: "#/properties/sort/enum",
          keyword: "enum",
          params: { allowedValues: le.properties.sort.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
    }
    if (i.start !== void 0) {
      let n = i.start;
      if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
        const o = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (typeof n == "number") {
        if (n > 9007199254740991 || isNaN(n)) {
          const o = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
        if (n < 1 || isNaN(n)) {
          const o = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
      }
    }
    if (i.end !== void 0) {
      let n = i.end;
      if (!(typeof n == "number" && !(n % 1) && !isNaN(n))) {
        const o = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [o]) : e.push(o), t++);
      }
      if (typeof n == "number") {
        if (n > 9007199254740991 || isNaN(n)) {
          const o = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
        if (n < 1 || isNaN(n)) {
          const o = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [o]) : e.push(o), t++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const n = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [n]) : e.push(n), t++);
    }
  } else {
    const n = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [n]) : e.push(n), t++);
  }
  return ((Y.errors = e), t === 0);
}
Y.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ee = J;
function J(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = J.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "pullNumber" },
        message: "must have required property 'pullNumber'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!(r === "owner" || r === "pullNumber" || r === "repo")) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.pullNumber !== void 0) {
      let r = i.pullNumber;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/pullNumber",
          schemaPath: "#/properties/pullNumber/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < -9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/pullNumber",
            schemaPath: "#/properties/pullNumber/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: -9007199254740991 },
            message: "must be >= -9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((J.errors = e), t === 0);
}
J.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Re = K,
  fe = {
    properties: {
      affiliation: { enum: ["outside", "direct", "all"], type: "string" },
      owner: { type: "string" },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 100 },
      permission: {
        enum: ["pull", "triage", "push", "maintain", "admin"],
        type: "string",
      },
      repo: { type: "string" },
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
function K(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = K.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!A.call(fe.properties, r)) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.affiliation !== void 0) {
      let r = i.affiliation;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/affiliation",
          schemaPath: "#/properties/affiliation/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (!(r === "outside" || r === "direct" || r === "all")) {
        const s = {
          instancePath: p + "/affiliation",
          schemaPath: "#/properties/affiliation/enum",
          keyword: "enum",
          params: { allowedValues: fe.properties.affiliation.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.page !== void 0) {
      let r = i.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.perPage !== void 0) {
      let r = i.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.permission !== void 0) {
      let r = i.permission;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/permission",
          schemaPath: "#/properties/permission/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (
        !(
          r === "pull" ||
          r === "triage" ||
          r === "push" ||
          r === "maintain" ||
          r === "admin"
        )
      ) {
        const s = {
          instancePath: p + "/permission",
          schemaPath: "#/properties/permission/enum",
          keyword: "enum",
          params: { allowedValues: fe.properties.permission.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.start !== void 0) {
      let r = i.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.end !== void 0) {
      let r = i.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((K.errors = e), t === 0);
}
K.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Se = W;
function W(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = W.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.path === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!(r === "owner" || r === "path" || r === "ref" || r === "repo")) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.path !== void 0 && typeof i.path != "string") {
      const r = {
        instancePath: p + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.ref !== void 0 && typeof i.ref != "string") {
      const r = {
        instancePath: p + "/ref",
        schemaPath: "#/properties/ref/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((W.errors = e), t === 0);
}
W.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Me = X,
  Ze = {
    properties: {
      authorDate: { type: "string" },
      authorEmail: { type: "string" },
      authorName: { type: "string" },
      branch: { type: "string" },
      committerDate: { type: "string" },
      committerEmail: { type: "string" },
      committerName: { type: "string" },
      content: { type: "string" },
      message: { type: "string" },
      owner: { type: "string" },
      path: { type: "string" },
      repo: { type: "string" },
      sha: { type: "string" },
    },
  };
function X(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = X.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.content === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "content" },
        message: "must have required property 'content'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.message === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "message" },
        message: "must have required property 'message'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.path === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "path" },
        message: "must have required property 'path'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!A.call(Ze.properties, r)) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.authorDate !== void 0 && typeof i.authorDate != "string") {
      const r = {
        instancePath: p + "/authorDate",
        schemaPath: "#/properties/authorDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.authorEmail !== void 0 && typeof i.authorEmail != "string") {
      const r = {
        instancePath: p + "/authorEmail",
        schemaPath: "#/properties/authorEmail/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.authorName !== void 0 && typeof i.authorName != "string") {
      const r = {
        instancePath: p + "/authorName",
        schemaPath: "#/properties/authorName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.branch !== void 0 && typeof i.branch != "string") {
      const r = {
        instancePath: p + "/branch",
        schemaPath: "#/properties/branch/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.committerDate !== void 0 && typeof i.committerDate != "string") {
      const r = {
        instancePath: p + "/committerDate",
        schemaPath: "#/properties/committerDate/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.committerEmail !== void 0 && typeof i.committerEmail != "string") {
      const r = {
        instancePath: p + "/committerEmail",
        schemaPath: "#/properties/committerEmail/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.committerName !== void 0 && typeof i.committerName != "string") {
      const r = {
        instancePath: p + "/committerName",
        schemaPath: "#/properties/committerName/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.content !== void 0 && typeof i.content != "string") {
      const r = {
        instancePath: p + "/content",
        schemaPath: "#/properties/content/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.message !== void 0 && typeof i.message != "string") {
      const r = {
        instancePath: p + "/message",
        schemaPath: "#/properties/message/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.path !== void 0 && typeof i.path != "string") {
      const r = {
        instancePath: p + "/path",
        schemaPath: "#/properties/path/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.sha !== void 0 && typeof i.sha != "string") {
      const r = {
        instancePath: p + "/sha",
        schemaPath: "#/properties/sha/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((X.errors = e), t === 0);
}
X.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ve = Z;
function Z(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = Z.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (i.repo === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (i.treeSha === void 0) {
      const s = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "treeSha" },
        message: "must have required property 'treeSha'",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    for (const s in i)
      if (
        !(s === "owner" || s === "recursive" || s === "repo" || s === "treeSha")
      ) {
        const n = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: s },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [n]) : e.push(n), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const s = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (i.recursive !== void 0) {
      let s = i.recursive;
      const n = t;
      let o = !1;
      const _ = t;
      if (typeof s != "string") {
        const u = {
          instancePath: p + "/recursive",
          schemaPath: "#/properties/recursive/anyOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [u]) : e.push(u), t++);
      }
      var r = _ === t;
      o = o || r;
      const x = t;
      if (s !== null) {
        const u = {
          instancePath: p + "/recursive",
          schemaPath: "#/properties/recursive/anyOf/1/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
        };
        (e === null ? (e = [u]) : e.push(u), t++);
      }
      var r = x === t;
      if (((o = o || r), o))
        ((t = n), e !== null && (n ? (e.length = n) : (e = null)));
      else {
        const u = {
          instancePath: p + "/recursive",
          schemaPath: "#/properties/recursive/anyOf",
          keyword: "anyOf",
          params: {},
          message: "must match a schema in anyOf",
        };
        (e === null ? (e = [u]) : e.push(u), t++);
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const s = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
    if (i.treeSha !== void 0 && typeof i.treeSha != "string") {
      const s = {
        instancePath: p + "/treeSha",
        schemaPath: "#/properties/treeSha/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [s]) : e.push(s), t++);
    }
  } else {
    const s = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [s]) : e.push(s), t++);
  }
  return ((Z.errors = e), t === 0);
}
Z.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ce = $;
function $(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = $.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!(r === "owner" || r === "repo")) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return (($.errors = e), t === 0);
}
$.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Le = ee;
function ee(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = ee.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!(r === "owner" || r === "ref" || r === "repo")) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.ref !== void 0 && typeof i.ref != "string") {
      const r = {
        instancePath: p + "/ref",
        schemaPath: "#/properties/ref/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((ee.errors = e), t === 0);
}
ee.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ge = re,
  $e = {
    properties: {
      sort: { enum: ["newest", "oldest", "stargazers", "watchers"] },
    },
  };
function re(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = re.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (
        !(
          r === "owner" ||
          r === "page" ||
          r === "perPage" ||
          r === "repo" ||
          r === "sort" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.page !== void 0) {
      let r = i.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.perPage !== void 0) {
      let r = i.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.sort !== void 0) {
      let r = i.sort;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/sort",
          schemaPath: "#/properties/sort/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (
        !(
          r === "newest" ||
          r === "oldest" ||
          r === "stargazers" ||
          r === "watchers"
        )
      ) {
        const s = {
          instancePath: p + "/sort",
          schemaPath: "#/properties/sort/enum",
          keyword: "enum",
          params: { allowedValues: $e.properties.sort.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.start !== void 0) {
      let r = i.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.end !== void 0) {
      let r = i.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((re.errors = e), t === 0);
}
re.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const He = se;
function se(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = se.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (
        !(
          r === "defaultBranchOnly" ||
          r === "name" ||
          r === "organization" ||
          r === "owner" ||
          r === "repo"
        )
      ) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (
      i.defaultBranchOnly !== void 0 &&
      typeof i.defaultBranchOnly != "boolean"
    ) {
      const r = {
        instancePath: p + "/defaultBranchOnly",
        schemaPath: "#/properties/defaultBranchOnly/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.name !== void 0 && typeof i.name != "string") {
      const r = {
        instancePath: p + "/name",
        schemaPath: "#/properties/name/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.organization !== void 0 && typeof i.organization != "string") {
      const r = {
        instancePath: p + "/organization",
        schemaPath: "#/properties/organization/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((se.errors = e), t === 0);
}
se.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Fe = te;
function te(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = te.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.ref === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "ref" },
        message: "must have required property 'ref'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.sha === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "sha" },
        message: "must have required property 'sha'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!(r === "owner" || r === "ref" || r === "repo" || r === "sha")) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.ref !== void 0 && typeof i.ref != "string") {
      const r = {
        instancePath: p + "/ref",
        schemaPath: "#/properties/ref/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.sha !== void 0 && typeof i.sha != "string") {
      const r = {
        instancePath: p + "/sha",
        schemaPath: "#/properties/sha/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((te.errors = e), t === 0);
}
te.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const ze = ie;
function ie(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = ie.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (
        !(
          r === "owner" ||
          r === "page" ||
          r === "perPage" ||
          r === "protected" ||
          r === "repo" ||
          r === "start" ||
          r === "end" ||
          r === "cursor"
        )
      ) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.page !== void 0) {
      let r = i.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.perPage !== void 0) {
      let r = i.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.protected !== void 0 && typeof i.protected != "boolean") {
      const r = {
        instancePath: p + "/protected",
        schemaPath: "#/properties/protected/type",
        keyword: "type",
        params: { type: "boolean" },
        message: "must be boolean",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.start !== void 0) {
      let r = i.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.end !== void 0) {
      let r = i.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((ie.errors = e), t === 0);
}
ie.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Be = pe;
function pe(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = pe.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.branch === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "branch" },
        message: "must have required property 'branch'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!(r === "branch" || r === "owner" || r === "repo")) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.branch !== void 0 && typeof i.branch != "string") {
      const r = {
        instancePath: p + "/branch",
        schemaPath: "#/properties/branch/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((pe.errors = e), t === 0);
}
pe.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Qe = me,
  he = {
    properties: {
      view: { enum: ["commits", "files"], type: "string" },
      basehead: { type: "string" },
      owner: { type: "string" },
      page: { type: "integer", minimum: 1, maximum: 9007199254740991 },
      perPage: { type: "integer", minimum: 1, maximum: 100 },
      repo: { type: "string" },
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
function me(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = me.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.basehead === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "basehead" },
        message: "must have required property 'basehead'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.owner === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "owner" },
        message: "must have required property 'owner'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.repo === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "repo" },
        message: "must have required property 'repo'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (!A.call(he.properties, r)) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.view !== void 0) {
      let r = i.view;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/view",
          schemaPath: "#/properties/view/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (!(r === "commits" || r === "files")) {
        const s = {
          instancePath: p + "/view",
          schemaPath: "#/properties/view/enum",
          keyword: "enum",
          params: { allowedValues: he.properties.view.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.basehead !== void 0 && typeof i.basehead != "string") {
      const r = {
        instancePath: p + "/basehead",
        schemaPath: "#/properties/basehead/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.owner !== void 0 && typeof i.owner != "string") {
      const r = {
        instancePath: p + "/owner",
        schemaPath: "#/properties/owner/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.page !== void 0) {
      let r = i.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.perPage !== void 0) {
      let r = i.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.repo !== void 0 && typeof i.repo != "string") {
      const r = {
        instancePath: p + "/repo",
        schemaPath: "#/properties/repo/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    if (i.start !== void 0) {
      let r = i.start;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/start",
          schemaPath: "#/properties/start/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/start",
            schemaPath: "#/properties/start/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.end !== void 0) {
      let r = i.end;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/end",
          schemaPath: "#/properties/end/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/end",
            schemaPath: "#/properties/end/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((me.errors = e), t === 0);
}
me.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ue = ne,
  ce = {
    properties: {
      sort: { enum: ["indexed"] },
      order: { enum: ["desc", "asc"] },
    },
  },
  ye = new RegExp("\\S", "u");
function ne(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = ne.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.query === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (
        !(
          r === "query" ||
          r === "sort" ||
          r === "order" ||
          r === "page" ||
          r === "perPage" ||
          r === "limit" ||
          r === "cursor"
        )
      ) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.query !== void 0) {
      let r = i.query;
      if (typeof r == "string") {
        if (!ye.test(r)) {
          const s = {
            instancePath: p + "/query",
            schemaPath: "#/properties/query/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      } else {
        const s = {
          instancePath: p + "/query",
          schemaPath: "#/properties/query/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.sort !== void 0) {
      let r = i.sort;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/sort",
          schemaPath: "#/properties/sort/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (r !== "indexed") {
        const s = {
          instancePath: p + "/sort",
          schemaPath: "#/properties/sort/enum",
          keyword: "enum",
          params: { allowedValues: ce.properties.sort.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.order !== void 0) {
      let r = i.order;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/order",
          schemaPath: "#/properties/order/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (!(r === "desc" || r === "asc")) {
        const s = {
          instancePath: p + "/order",
          schemaPath: "#/properties/order/enum",
          keyword: "enum",
          params: { allowedValues: ce.properties.order.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.page !== void 0) {
      let r = i.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.perPage !== void 0) {
      let r = i.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.limit !== void 0) {
      let r = i.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((ne.errors = e), t === 0);
}
ne.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Ye = ae,
  ge = {
    properties: {
      sort: {
        enum: [
          "comments",
          "reactions",
          "reactions-+1",
          "reactions--1",
          "reactions-smile",
          "reactions-thinking_face",
          "reactions-heart",
          "reactions-tada",
          "interactions",
          "created",
          "updated",
        ],
      },
      order: { enum: ["desc", "asc"] },
    },
  };
function ae(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = ae.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.query === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (
        !(
          r === "query" ||
          r === "sort" ||
          r === "order" ||
          r === "page" ||
          r === "perPage" ||
          r === "limit" ||
          r === "cursor"
        )
      ) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.query !== void 0) {
      let r = i.query;
      if (typeof r == "string") {
        if (!ye.test(r)) {
          const s = {
            instancePath: p + "/query",
            schemaPath: "#/properties/query/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      } else {
        const s = {
          instancePath: p + "/query",
          schemaPath: "#/properties/query/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.sort !== void 0) {
      let r = i.sort;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/sort",
          schemaPath: "#/properties/sort/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (
        !(
          r === "comments" ||
          r === "reactions" ||
          r === "reactions-+1" ||
          r === "reactions--1" ||
          r === "reactions-smile" ||
          r === "reactions-thinking_face" ||
          r === "reactions-heart" ||
          r === "reactions-tada" ||
          r === "interactions" ||
          r === "created" ||
          r === "updated"
        )
      ) {
        const s = {
          instancePath: p + "/sort",
          schemaPath: "#/properties/sort/enum",
          keyword: "enum",
          params: { allowedValues: ge.properties.sort.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.order !== void 0) {
      let r = i.order;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/order",
          schemaPath: "#/properties/order/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (!(r === "desc" || r === "asc")) {
        const s = {
          instancePath: p + "/order",
          schemaPath: "#/properties/order/enum",
          keyword: "enum",
          params: { allowedValues: ge.properties.order.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.page !== void 0) {
      let r = i.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.perPage !== void 0) {
      let r = i.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.limit !== void 0) {
      let r = i.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((ae.errors = e), t === 0);
}
ae.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const Je = oe,
  be = {
    properties: {
      sort: { enum: ["stars", "forks", "help-wanted-issues", "updated"] },
      order: { enum: ["desc", "asc"] },
    },
  };
function oe(
  i,
  {
    instancePath: p = "",
    parentData: b,
    parentDataProperty: w,
    rootData: P = i,
    dynamicAnchors: N = {},
  } = {},
) {
  let e = null,
    t = 0;
  const m = oe.evaluated;
  if (
    (m.dynamicProps && (m.props = void 0),
    m.dynamicItems && (m.items = void 0),
    i && typeof i == "object" && !Array.isArray(i))
  ) {
    if (i.query === void 0) {
      const r = {
        instancePath: p,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "query" },
        message: "must have required property 'query'",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
    for (const r in i)
      if (
        !(
          r === "query" ||
          r === "sort" ||
          r === "order" ||
          r === "page" ||
          r === "perPage" ||
          r === "limit" ||
          r === "cursor"
        )
      ) {
        const s = {
          instancePath: p,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: { additionalProperty: r },
          message: "must NOT have additional properties",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    if (i.query !== void 0) {
      let r = i.query;
      if (typeof r == "string") {
        if (!ye.test(r)) {
          const s = {
            instancePath: p + "/query",
            schemaPath: "#/properties/query/pattern",
            keyword: "pattern",
            params: { pattern: "\\S" },
            message: 'must match pattern "\\S"',
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      } else {
        const s = {
          instancePath: p + "/query",
          schemaPath: "#/properties/query/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.sort !== void 0) {
      let r = i.sort;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/sort",
          schemaPath: "#/properties/sort/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (
        !(
          r === "stars" ||
          r === "forks" ||
          r === "help-wanted-issues" ||
          r === "updated"
        )
      ) {
        const s = {
          instancePath: p + "/sort",
          schemaPath: "#/properties/sort/enum",
          keyword: "enum",
          params: { allowedValues: be.properties.sort.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.order !== void 0) {
      let r = i.order;
      if (typeof r != "string") {
        const s = {
          instancePath: p + "/order",
          schemaPath: "#/properties/order/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (!(r === "desc" || r === "asc")) {
        const s = {
          instancePath: p + "/order",
          schemaPath: "#/properties/order/enum",
          keyword: "enum",
          params: { allowedValues: be.properties.order.enum },
          message: "must be equal to one of the allowed values",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
    }
    if (i.page !== void 0) {
      let r = i.page;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/page",
          schemaPath: "#/properties/page/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/page",
            schemaPath: "#/properties/page/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.perPage !== void 0) {
      let r = i.perPage;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/perPage",
          schemaPath: "#/properties/perPage/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 100 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 100 },
            message: "must be <= 100",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/perPage",
            schemaPath: "#/properties/perPage/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.limit !== void 0) {
      let r = i.limit;
      if (!(typeof r == "number" && !(r % 1) && !isNaN(r))) {
        const s = {
          instancePath: p + "/limit",
          schemaPath: "#/properties/limit/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        (e === null ? (e = [s]) : e.push(s), t++);
      }
      if (typeof r == "number") {
        if (r > 9007199254740991 || isNaN(r)) {
          const s = {
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/maximum",
            keyword: "maximum",
            params: { comparison: "<=", limit: 9007199254740991 },
            message: "must be <= 9007199254740991",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
        if (r < 1 || isNaN(r)) {
          const s = {
            instancePath: p + "/limit",
            schemaPath: "#/properties/limit/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 1 },
            message: "must be >= 1",
          };
          (e === null ? (e = [s]) : e.push(s), t++);
        }
      }
    }
    if (i.cursor !== void 0 && typeof i.cursor != "string") {
      const r = {
        instancePath: p + "/cursor",
        schemaPath: "#/properties/cursor/type",
        keyword: "type",
        params: { type: "string" },
        message: "must be string",
      };
      (e === null ? (e = [r]) : e.push(r), t++);
    }
  } else {
    const r = {
      instancePath: p,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    (e === null ? (e = [r]) : e.push(r), t++);
  }
  return ((oe.errors = e), t === 0);
}
oe.evaluated = { props: !0, dynamicProps: !1, dynamicItems: !1 };
const er = {
  github_list_pull_requests: we,
  github_get_a_pull_request: Pe,
  github_create_a_pull_request: Ne,
  github_update_a_pull_request: ke,
  github_merge_pull_request: ve,
  github_list_commits_on_a_pull_request: _e,
  github_list_pull_requests_files: qe,
  github_create_review_for_pull_request: Oe,
  github_list_reviews_for_pull_request: xe,
  github_submit_review_for_pull_request: Ae,
  github_request_reviewers_for_pull_request: De,
  github_get_all_requested_reviewers: Ie,
  github_create_review_comment: je,
  github_list_review_comments: Te,
  github_check_if_pull_request_merged: Ee,
  github_list_repository_collaborators: Re,
  github_get_repository_content: Se,
  github_create_or_update_file_contents: Me,
  github_list_repository_files_and_directories: Ve,
  github_get_community_profile_metrics: Ce,
  github_get_repository_readme: Le,
  github_list_forks: Ge,
  github_create_fork: He,
  github_create_a_reference: Fe,
  github_list_branches: ze,
  github_get_branch: Be,
  github_compare_two_commits: Qe,
  github_search_code: Ue,
  github_search_issues_and_pull_requests: Ye,
  github_search_repositories: Je,
};
exports.NATIVE_TOOL_VALIDATORS = er;
exports.validate_github_check_if_pull_request_merged = Ee;
exports.validate_github_compare_two_commits = Qe;
exports.validate_github_create_a_pull_request = Ne;
exports.validate_github_create_a_reference = Fe;
exports.validate_github_create_fork = He;
exports.validate_github_create_or_update_file_contents = Me;
exports.validate_github_create_review_comment = je;
exports.validate_github_create_review_for_pull_request = Oe;
exports.validate_github_get_a_pull_request = Pe;
exports.validate_github_get_all_requested_reviewers = Ie;
exports.validate_github_get_branch = Be;
exports.validate_github_get_community_profile_metrics = Ce;
exports.validate_github_get_repository_content = Se;
exports.validate_github_get_repository_readme = Le;
exports.validate_github_list_branches = ze;
exports.validate_github_list_commits_on_a_pull_request = _e;
exports.validate_github_list_forks = Ge;
exports.validate_github_list_pull_requests = we;
exports.validate_github_list_pull_requests_files = qe;
exports.validate_github_list_repository_collaborators = Re;
exports.validate_github_list_repository_files_and_directories = Ve;
exports.validate_github_list_review_comments = Te;
exports.validate_github_list_reviews_for_pull_request = xe;
exports.validate_github_merge_pull_request = ve;
exports.validate_github_request_reviewers_for_pull_request = De;
exports.validate_github_search_code = Ue;
exports.validate_github_search_issues_and_pull_requests = Ye;
exports.validate_github_search_repositories = Je;
exports.validate_github_submit_review_for_pull_request = Ae;
exports.validate_github_update_a_pull_request = ke;
