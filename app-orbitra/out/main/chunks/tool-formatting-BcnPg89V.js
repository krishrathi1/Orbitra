"use strict";
(function () {
  try {
    var e =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    e.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "e2527d7d-6a27-42b0-a82b-0746d8e3689c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-e2527d7d-6a27-42b0-a82b-0746d8e3689c"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const h = require("../main-app.js");
require("node:crypto");
require("node:path");
require("electron");
require("os");
require("path");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
require("node:fs/promises");
require("node:os");
require("valibot");
require("node:fs");
require("node:http");
require("node:https");
require("./protocol-BGN1BQCi.js");
require("events");
require("child_process");
require("util");
require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("@reflect/auth/workos-session");
require("crypto");
require("./errors-DsbnElf-.js");
require("./savedCertificateBlocklist-BUtmL3xA.js");
require("node:tls");
require("@reflect/auth/device-policy");
require("node:process");
require("node:assert");
require("node:stream");
require("./_commonjsHelpers-DJP3_Dvh.js");
require("./index-CSlo9i6Z.js");
require("tty");
require("node-machine-id");
require("fs/promises");
require("node:timers/promises");
require("./config-CdpnFYk6.js");
require("./contracts-rChhtF3C.js");
require("@reflect/auth/desktop");
require("./worker-protocol-CFgWGf-A.js");
require("./unicode-CSAGP0Z8.js");
require("fs");
require("better-sqlite3");
require("node:child_process");
require("url");
require("stream");
require("zlib");
require("electron-updater");
require("@reflect/auth/last-login-method");
require("@reflect/auth/oauth-state");
require("@reflect/auth/session-identity");
require("./settled-read-r0Yf0ORp.js");
require("module");
require("./fs-native-KvxiM8hl.js");
require("node:module");
require("tldts");
require("node:buffer");
require("./rustImageLimits-zqqoE-LA.js");
require("mime-types");
require("./resourcePolicy-DcbBChq3.js");
require("./resourcePolicy-BX-8H2Pm.js");
require("http");
require("@ghostery/adblocker-electron");
require("./wav-DElqHA--.js");
require("js-yaml");
require("stream/promises");
require("https");
require("net");
require("tls");
require("buffer");
require("electron-chrome-web-store");
require("./ids-B2sWlG17.js");
require("@modelcontextprotocol/sdk/client/auth.js");
require("@modelcontextprotocol/sdk/client/index.js");
require("@modelcontextprotocol/sdk/client/sse.js");
require("@modelcontextprotocol/sdk/client/streamableHttp.js");
require("@modelcontextprotocol/sdk/client/stdio.js");
require("@modelcontextprotocol/sdk/shared/stdio.js");
require("./process-tree-DTtONxmb.js");
require("cross-spawn");
require("piscina");
require("@modelcontextprotocol/sdk/shared/auth-utils.js");
require("@modelcontextprotocol/sdk/server/auth/errors.js");
require("@modelcontextprotocol/sdk/shared/auth.js");
require("node:readline");
require("async-mutex");
require("node:net");
require("electron-dl");
require("tar");
require("node:inspector/promises");
require("node:v8");
require("tokenx");
require("marked");
require("lodash/debounce");
require("./worker-protocol-CcOBX8D2.js");
require("node:zlib");
require("node:diagnostics_channel");
require("worker_threads");
require("diagnostics_channel");
require("./singleInstance-CuMDgUKt.js");
const _ =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
  E = new Set([
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/
      .source,
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/
      .source,
  ]),
  W = new Set([
    "\\S",
    "^[^/?#]+$",
    "^[A-Za-z0-9_-]+$",
    "^[A-Za-z_][A-Za-z0-9_]*$",
  ]),
  j = /^#[0-9a-fA-F]{6}$/,
  C = /^\+[1-9][0-9]{6,14}$/,
  P = {
    integer: `// Whole number.
type integer = number`,
    UUID: `// UUID string.
type UUID = string`,
    Email: `// Email address.
type Email = string`,
    NonEmptyString: `// At least one character.
type NonEmptyString = string`,
    NonBlankString: `// Contains a non-whitespace character.
type NonBlankString = string`,
    ISODateTime: `// ISO 8601 timestamp with Z or a UTC offset.
type ISODateTime = string`,
    UTCDateTime: `// ISO 8601 UTC timestamp ending in Z.
type UTCDateTime = string`,
    URI: `// Absolute URI.
type URI = string`,
    HexColor: `// Hex color #RRGGBB.
type HexColor = string`,
    E164Phone: `// International phone number: + followed by 7-15 digits, no spaces.
type E164Phone = string`,
    GraphResourceId: `// Copy the Microsoft resource ID from a result. Max 512 characters; no /, ? or #.
type GraphResourceId = string`,
    AirtableTimeZone: `// Airtable-supported IANA zone (e.g. Europe/Stockholm), or utc/client.
type AirtableTimeZone = string`,
  };
function O(e) {
  if (e.type === "integer" && !e.enum && e.const === void 0) return "integer";
  if (e.type === "string") {
    if (e.title === "AirtableTimeZone" && e.enum) return "AirtableTimeZone";
    if (!(e.enum || e.const !== void 0)) {
      if (e.title === "GraphResourceId") return "GraphResourceId";
      if (e.title === "HexColor" || e.pattern === j.source) return "HexColor";
      if (e.title === "E164Phone" || e.pattern === C.source) return "E164Phone";
      if (e.title === "UTCDateTime") return "UTCDateTime";
      if (e.title === "ISODateTime" || e.format === "date-time")
        return "ISODateTime";
      if (e.format === "uuid" || e.pattern === _.source) return "UUID";
      if (e.format === "email" || E.has(e.pattern ?? "")) return "Email";
      if (e.format === "uri") return "URI";
      if (e.pattern === "\\S") return "NonBlankString";
      if (e.minLength === 1) return "NonEmptyString";
    }
  }
}
function R(e) {
  switch (e.title) {
    case "ReadPaginationStart":
    case "ReadPaginationEnd":
      return "list";
    case "ReadPaginationLimit":
      return "search";
    case "ReadPaginationCursor":
      return "cursor";
    default:
      return;
  }
}
function I(e, t, n) {
  const r = O(e);
  return r === "integer" &&
    ((t === "minimum" && n === Number.MIN_SAFE_INTEGER) ||
      (t === "maximum" && n === Number.MAX_SAFE_INTEGER))
    ? !0
    : t === "format"
      ? (n === "uuid" && r === "UUID") ||
        (n === "email" && r === "Email") ||
        (n === "uri" && r === "URI") ||
        (n === "date-time" && (r === "ISODateTime" || r === "UTCDateTime"))
      : t === "pattern"
        ? (r === "UUID" && e.pattern === _.source) ||
          (r === "Email" && E.has(e.pattern ?? "")) ||
          r === "NonBlankString" ||
          (r === "ISODateTime" && e.title === "ISODateTime") ||
          (r === "UTCDateTime" && e.title === "UTCDateTime") ||
          (r === "HexColor" && e.pattern === j.source) ||
          (r === "E164Phone" && e.pattern === C.source) ||
          (r === "GraphResourceId" && e.pattern === "^[^/?#]+$")
        : t === "minLength" && n === 1
          ? r === "UUID" ||
            r === "Email" ||
            r === "ISODateTime" ||
            r === "UTCDateTime" ||
            r === "URI" ||
            r === "HexColor" ||
            r === "E164Phone" ||
            r === "GraphResourceId" ||
            r === "NonEmptyString" ||
            r === "NonBlankString" ||
            W.has(e.pattern ?? "")
          : !!(
              (t === "maxLength" && n === 512 && r === "GraphResourceId") ||
              (R(e) &&
                ((t === "minimum" && n === 1) ||
                  (t === "default" &&
                    n === 1 &&
                    e.title === "ReadPaginationStart")))
            );
}
function J(e, t) {
  return (
    JSON.stringify(e) ===
    JSON.stringify({
      anyOf: [
        { type: "string" },
        { type: "number" },
        { type: "boolean" },
        { type: "null" },
        { type: "array", items: { $ref: t } },
        {
          type: "object",
          propertyNames: { type: "string" },
          additionalProperties: { $ref: t },
        },
      ],
    })
  );
}
function Y(e) {
  const t = e.additionalProperties;
  if (
    !t ||
    typeof t != "object" ||
    !e.properties ||
    (t.anyOf && Object.keys(t).some((i) => i !== "anyOf"))
  )
    return !1;
  const n = t.anyOf ?? [t];
  if (
    !n.every(
      (i) =>
        typeof i == "object" &&
        Object.keys(i).length === 1 &&
        ["string", "number", "integer", "boolean", "null"].includes(
          String(i.type),
        ),
    )
  )
    return !1;
  const r = new Set(n.map((i) => (typeof i == "object" ? i.type : void 0)));
  return Object.values(e.properties).every((i) => {
    if (typeof i != "object" || typeof i.type != "string") return !1;
    const o = i.type === "integer" && r.has("number") ? "number" : i.type;
    return r.has(o) && (!i.nullable || r.has("null"));
  });
}
const A = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/,
  U = new Set(["account", "accountId", "connectedAccountId"]);
function T(e) {
  return A.test(e) ? e : JSON.stringify(e);
}
function $(e, t) {
  if (!e) return [];
  const n = e.trim();
  return n
    ? n.split(/\r\n|[\n\r\u2028\u2029]/).map((r) => `${t}//${r ? ` ${r}` : ""}`)
    : [];
}
function L(e = !0) {
  return {
    names: new Set([
      "ConnectedAccountId",
      "WithAdditionalProperties",
      "Array",
      "Record",
      "Promise",
      ...(e ? [...Object.keys(P), "JsonValue", "JsonObject"] : []),
    ]),
    compact: e,
    displayTypes: new Set(),
    pagination: new Set(),
    needsAdditionalProperties: !1,
    titled: new Map(),
  };
}
function k(e) {
  const t = [];
  for (const r of e.titled.values()) {
    t.push(
      ...$(
        S(r.schema, void 0, e.compact, r.context.root, r.context.direction),
        "",
      ),
    );
    const i = m({ ...r.schema, title: void 0 }, "", {
      includeJsDoc: !0,
      context: r.context,
    });
    t.push(`type ${r.name} = ${i}`);
  }
  e.needsAdditionalProperties &&
    t.unshift(
      "type WithAdditionalProperties<T, V> = T & Record<string, V | T[keyof T]>",
    );
  const n = [...e.displayTypes].map((r) => P[r]);
  return (
    e.pagination.has("list") &&
      n.push(
        "// List start/end are 1-based inclusive positions; start defaults to 1; end >= start.",
      ),
    e.pagination.has("search") &&
      n.push(
        "// Search limit is a positive total result count; provider pages are fetched internally.",
      ),
    e.pagination.has("cursor") &&
      n.push(
        "// To continue, pass nextCursor as cursor with the same scope, filters and ordering.",
      ),
    [...n, ...t]
  );
}
function X(e, t) {
  const n = t.split("/").at(-1) || "Root";
  return `${e}_${n.replace(/[^a-zA-Z0-9_$]/g, "_")}`;
}
function z(e, t) {
  if (t === "#") return e;
  if (!t.startsWith("#/")) return;
  let n;
  try {
    n = decodeURIComponent(t.slice(2));
  } catch {
    return;
  }
  const r = n.split("/").map((o) => o.replace(/~1/g, "/").replace(/~0/g, "~"));
  let i = e;
  for (const o of r) {
    if (i === null || typeof i != "object" || !Object.hasOwn(i, o)) return;
    if (Array.isArray(i)) {
      if (!/^(?:0|[1-9]\d*)$/.test(o)) return;
      i = i[Number(o)];
    } else i = i[o];
  }
  if (typeof i == "boolean") return i;
  if (!(i === null || typeof i != "object" || Array.isArray(i))) return i;
}
const Q = new Set([
  "type",
  "title",
  "description",
  "enum",
  "const",
  "nullable",
  "properties",
  "required",
  "anyOf",
  "oneOf",
  "allOf",
  "items",
  "prefixItems",
  "additionalItems",
  "$ref",
  "$defs",
  "definitions",
]);
function Z(e, t = !0, n, r = "input") {
  const i = [],
    { minimum: o, maximum: c } = e,
    a =
      typeof o == "number" &&
      typeof c == "number" &&
      o !== Number.MIN_VALUE &&
      e.exclusiveMinimum === void 0 &&
      e.exclusiveMaximum === void 0 &&
      (!t || (!I(e, "minimum", o) && !I(e, "maximum", c)));
  for (const [u, f] of Object.entries(e))
    if (!(f === void 0 || Q.has(u)) && u !== "default" && !(t && I(e, u, f))) {
      if (a && (u === "minimum" || u === "maximum")) {
        u === "minimum" && i.push(`${o}-${c}`);
        continue;
      }
      if (
        !(
          t &&
          r === "output" &&
          e.type === "integer" &&
          u === "minimum" &&
          f === 0
        )
      ) {
        if (t && u === "minimum" && f === Number.MIN_VALUE) {
          i.push("exclusiveMinimum 0");
          continue;
        }
        if (
          !(u === "propertyNames" && JSON.stringify(f) === '{"type":"string"}')
        ) {
          if (u === "additionalProperties") {
            if (
              !e.properties ||
              Object.keys(e.properties).length === 0 ||
              typeof f != "object" ||
              (t && Y(e))
            )
              continue;
            if (t && n && f && typeof f == "object" && !Array.isArray(f)) {
              const d = f.$ref;
              if (typeof d == "string" && Object.keys(f).length === 1) {
                const p = z(n, d);
                if (p !== void 0 && J(p, d)) continue;
              }
            }
          }
          i.push(`${u} ${JSON.stringify(f)}`);
        }
      }
    }
  const s = Array.isArray(e.type) ? e.type : [e.type];
  !t && s.includes("integer") && i.push("integer");
  const l = e.required?.filter((u) => !Object.hasOwn(e.properties ?? {}, u));
  return (
    l?.length && i.push(`required ${JSON.stringify(l)}`),
    e.oneOf?.length && i.push("oneOf"),
    e.default !== void 0 &&
      (!t || !I(e, "default", e.default)) &&
      i.push(`default ${JSON.stringify(e.default)}`),
    i
  );
}
function S(e, t = e.description, n = !0, r, i = "input") {
  return [t, Z(e, n, r, i).join("; ")].filter(Boolean).join(" ");
}
function ee(e) {
  if (!e || typeof e != "object") return !1;
  const t = e,
    n = t.properties ?? {},
    r = new Set(t.required ?? []);
  return Object.keys(n).some(
    (i) =>
      U.has(i) &&
      (!r.has(i) || /connected-account alias/i.test(n[i]?.description ?? "")),
  );
}
function ne(e, t) {
  return t
    ? e
        .split(". ")
        .filter((n) => {
          const r = /\b(account|send-as)\b/i.test(n),
            i =
              /\b(email|alias|accountId|account parameter|multiple connected)\b/i.test(
                n,
              );
          return !(r && i);
        })
        .join(". ")
    : e;
}
function M(e, t, n) {
  const r = (t || "").replace(/^\((?:required|optional)\)\s*/i, "");
  return !U.has(e) || n || r
    ? r
    : "Opaque connected-account alias from orbitra.help(appId). Choose the account that fits the request and pass its alias on every call.";
}
function m(e, t, n) {
  if (typeof e == "boolean") return e ? "unknown" : "never";
  if (n.context?.registry.compact) {
    const o = R(e);
    o && n.context.registry.pagination.add(o);
  }
  if (
    e.type === "object" &&
    e.title &&
    /^[A-Z][A-Za-z0-9_$]*$/.test(e.title) &&
    n.context
  ) {
    const o = JSON.stringify([n.context.direction, e]);
    if (!/"\$(?:ref|dynamicRef|recursiveRef)"\s*:/.test(o)) {
      const c = n.context.registry;
      let a = c.titled.get(o);
      if (!a) {
        let s = e.title,
          l = 2;
        for (; c.names.has(s); ) s = `${e.title}_${l++}`;
        (c.names.add(s),
          (a = { name: s, schema: e, context: n.context }),
          c.titled.set(o, a));
      }
      return a.name;
    }
  }
  const r = q(e, t, n),
    i =
      n.includeJsDoc && n.inlineConstraints
        ? S(
            e,
            void 0,
            n.context?.registry.compact,
            n.context?.root,
            n.context?.direction,
          )
        : "";
  return i
    ? `/* ${i.replace(/\r?\n/g, "; ").replace(/\*\//g, "* /")} */ ${r}`
    : r;
}
function q(e, t, n) {
  if (e.$ref && n.context) {
    const i = z(n.context.root, e.$ref);
    if (i !== void 0) {
      let s = "JsonValue";
      if (!n.context.registry.compact || !J(i, e.$ref)) {
        let d = n.context.references.get(e.$ref);
        if (!d) {
          const p = X(n.context.prefix, e.$ref);
          s = p;
          let y = 2;
          for (; n.context.registry.names.has(s); ) s = `${p}_${y++}`;
          (n.context.registry.names.add(s),
            (d = { name: s, schema: i }),
            n.context.references.set(e.$ref, d));
        }
        s = d.name;
      }
      const { $ref: l, ...u } = e,
        f = q(u, t, n);
      return f === "unknown" ? s : `${s} & (${f})`;
    }
    const { $ref: o, ...c } = e;
    return `${q(c, t, n)} /* ref ${JSON.stringify(o).replace(/\*\//g, "* /")} */`;
  }
  if (e.nullable) return `${m({ ...e, nullable: !1 }, t, n)} | null`;
  if (e.const !== void 0) return JSON.stringify(e.const);
  if (e.enum)
    return n.context?.registry.compact && O(e) === "AirtableTimeZone"
      ? (n.context.registry.displayTypes.add("AirtableTimeZone"),
        "AirtableTimeZone")
      : e.enum.map((i) => JSON.stringify(i)).join(" | ") || "never";
  if (e.anyOf?.length || e.oneOf?.length || e.allOf?.length) {
    const { anyOf: i, oneOf: o, allOf: c, ...a } = e,
      s = [],
      l = q(a, t, n);
    l !== "unknown" && s.push(l);
    for (const u of [i, o])
      u?.length &&
        s.push(
          u.map((f) => m(f, t, { ...n, inlineConstraints: !0 })).join(" | "),
        );
    for (const u of c ?? []) s.push(m(u, t, { ...n, inlineConstraints: !0 }));
    return s.length === 1 ? s[0] : s.map((u) => `(${u})`).join(" & ");
  }
  if (Array.isArray(e.type))
    return e.type.map((i) => m({ ...e, type: i }, t, n)).join(" | ");
  if (n.context?.registry.compact) {
    const i = O(e);
    if (i) return (n.context.registry.displayTypes.add(i), i);
  }
  const r = typeof e.type == "string" ? e.type.toLowerCase() : void 0;
  if (r === "array of strings") return "string[]";
  if (r === "array of numbers") return "number[]";
  if (r === "array of booleans") return "boolean[]";
  if (r === "array of objects")
    return `Array<${e.properties ? D(e, t, n) : "unknown"}>`;
  if (r === "array") {
    const i = e.prefixItems ?? (Array.isArray(e.items) ? e.items : void 0);
    if (i) {
      const o = i.map((a, s) => {
          const l = m(a, t, { ...n, inlineConstraints: !0 });
          return s < (e.minItems ?? 0) ? l : `(${l})?`;
        }),
        c = e.prefixItems ? e.items : e.additionalItems;
      if (c !== !1) {
        const a =
          c && !Array.isArray(c)
            ? m(c, t, { ...n, inlineConstraints: !0 })
            : "unknown";
        o.push(`...Array<${a}>`);
      }
      return `[${o.join(", ")}]`;
    }
    if (e.items === !1) return "never[]";
    if (e.items && !Array.isArray(e.items)) {
      const o = m(e.items, t, { ...n, inlineConstraints: !0 });
      return /[\s|{]/.test(o) ? `Array<${o}>` : `${o}[]`;
    }
    return "unknown[]";
  }
  return r === "object" || e.properties || e.additionalProperties !== void 0
    ? D(e, t, n)
    : r === "integer"
      ? "number"
      : r === "string" || r === "number" || r === "boolean" || r === "null"
        ? r
        : "unknown";
}
function D(e, t, n) {
  const r = e.properties ?? {},
    i = new Set(e.required ?? []),
    o = Object.keys(r).sort((u, f) => Number(i.has(f)) - Number(i.has(u))),
    c = e.additionalProperties;
  if (o.length === 0) {
    if (c === !1) return "{}";
    const u =
      typeof c == "object"
        ? m(c, t, { ...n, inlineConstraints: !0 })
        : "unknown";
    return n.context?.registry.compact && u === "JsonValue"
      ? "JsonObject"
      : `Record<string, ${u}>`;
  }
  const a = t + "  ",
    s = ["{"];
  for (const u of o) {
    const f = r[u];
    if (f === void 0) continue;
    const d = n.topLevelPropertyTypes?.[u];
    if (n.includeJsDoc && !d && typeof f == "object") {
      const K = M(u, f.description, i.has(u));
      s.push(
        ...$(
          S(
            f,
            K,
            n.context?.registry.compact,
            n.context?.root,
            n.context?.direction,
          ),
          a,
        ),
      );
    }
    const p = i.has(u) ? "" : "?",
      y = { includeJsDoc: n.includeJsDoc, context: n.context },
      g = d ?? m(f, a, y);
    s.push(`${a}${T(u)}${p}: ${g}`);
  }
  s.push(`${t}}`);
  const l = s.join(`
`);
  if (typeof c == "object") {
    const u = m(c, t, { ...n, inlineConstraints: !0 });
    return (
      n.context && (n.context.registry.needsAdditionalProperties = !0),
      `WithAdditionalProperties<${l}, ${u}>`
    );
  }
  return c === !0 ? `${l} & Record<string, unknown>` : l;
}
function v(e, t) {
  const n = [];
  for (const r of e.references.values())
    (t &&
      typeof r.schema == "object" &&
      n.push(
        ...$(S(r.schema, void 0, e.registry.compact, e.root, e.direction), ""),
      ),
      n.push(
        `type ${r.name} = ${m(r.schema, "", { includeJsDoc: t, context: e })}`,
      ));
  return n;
}
const x = { allow: "allowed", prompt: "approval_required", deny: "denied" };
function B(e) {
  const t = ne(e.description, ee(e.parameters)).trim();
  if (!e.permission) return t;
  const n = [t];
  if (e.permission.actions) {
    n.push("Permission in this chat by action/mode:");
    for (const [r, i] of Object.entries(e.permission.actions))
      n.push(`  ${r}: ${x[i]}.`);
    n.push(`  If omitted: ${x[e.permission.decision]}.`);
  } else n.push(`Permission in this chat: ${x[e.permission.decision]}.`);
  return n.join(`
`);
}
function b(e, t) {
  if (e.callName !== void 0) return e.callName;
  if (h.isMcpProviderAppId(t) || h.isCodeIntegrationAppId(t)) return e.toolSlug;
  const n = e.toolSlug,
    r = `${t}_`;
  return n.startsWith(r) ? n.slice(r.length) : n;
}
function F(e, t, n, r) {
  const i = [],
    o = b(e, t),
    c = e.toolSlug.replace(/[^a-zA-Z0-9_$]/g, "_"),
    a = e.parameters ?? {
      type: "object",
      properties: {},
      additionalProperties: !1,
    },
    s = {
      root: a,
      direction: "input",
      prefix: `${c}_Input`,
      references: new Map(),
      registry: r.registry,
    },
    l = {
      includeJsDoc: r.includeJsDoc,
      topLevelPropertyTypes: r.inputPropertyTypes,
      context: s,
    };
  if (r.includeJsDoc) {
    const d = [B(e), ...Z(a, r.registry.compact, a)].filter(Boolean).join(`
`);
    i.push(...$(d, n));
  }
  const u = m(a, n, l);
  r.references.push(...v(s, r.includeJsDoc));
  let f = "unknown";
  if (r.includeOutputSchemas && e.outputParameters) {
    const d = {
      root: e.outputParameters,
      direction: "output",
      prefix: `${c}_Output`,
      references: new Map(),
      registry: r.registry,
    };
    ((f = m(e.outputParameters, n, {
      includeJsDoc: r.includeJsDoc,
      context: d,
      inlineConstraints: !0,
    })),
      r.references.push(...v(d, r.includeJsDoc)));
  }
  return (i.push(`${n}${T(o)}(params: ${u}): Promise<${f}>`), i);
}
function te(e) {
  return e.replace(/[\u0000-\u001f\u007f-\u009f\u2028\u2029]+/g, " ").trim();
}
function N(e) {
  return e.map((t) => (t ? `// ${t}` : "//"));
}
function w(e) {
  const t = [`${e.appName} (id: "${e.appId}")`],
    n = h.isMcpProviderAppId(e.appId),
    r = h.isCodeIntegrationAppId(e.appId),
    i = e.connectedAccounts ?? [];
  return (
    i.length > 0
      ? (t.push(""),
        t.push("Connected account aliases:"),
        i.forEach((a) => {
          const s = a.isDefault === !0 ? " (default)" : "",
            l = a.accountName ?? a.label,
            u = l ? ` — ${te(l)}` : "",
            f = a.healthKind === "needs-reconnect" ? " (needs reconnect)" : "",
            d = a.needsAuthorization ? ` (needs ${e.appName} access)` : "";
          t.push(`  ${a.alias}${u}${s}${f}${d}`);
        }),
        i.some((a) => a.healthKind === "needs-reconnect") &&
          (t.push(
            "Do not use an account marked needs reconnect until the user reconnects it.",
          ),
          t.push(
            `Call manage_apps({ action: "connect", appId: "${e.appId}", reconnect: true }) to reconnect. If the failing action named an account alias, pass it as accountId.`,
          )),
        i.some((a) => a.needsAuthorization) &&
          t.push(
            `Grant ${e.appName} access to an existing account with manage_apps({ action: "connect", appId: "${e.appId}", reconnect: true, accountId: "account-N", reason: "..." }).`,
          ),
        t.push(
          "Choose the account that fits the request and conversation, and pass its alias on every call. Use account names to understand the user; pass the alias, never the name.",
          "A marked default is a saved preference. You still choose and pass the account. For an existing message, thread, or other resource, keep using its originating account.",
          "For searches without a clear account, search the relevant connected accounts within the requested scope and keep each result with its account alias. Ask only when context cannot resolve a consequential ambiguity.",
        ),
        n ||
          t.push(
            `To connect an additional account: manage_apps({ action: "connect", appId: "${e.appId}", addAccount: true, reason: "..." })`,
          ))
      : !n &&
        !r &&
        (t.push(""),
        t.push(
          `No accounts connected. If the advertised actions support your task and connections are available, request one with manage_apps({ action: "connect", appId: "${e.appId}", reason: "..." }). If connecting is unavailable or fails, or no action supports your task, continue on the website without asking permission to switch.`,
        )),
    n &&
      (t.push(""),
      t.push(
        "Use the exact action call and argument names shown in help. Do not invent or duplicate app prefixes. Refresh help after an unknown-tool error.",
      ),
      t.push(
        "For paginated list/search calls, follow the advertised continuation fields and end condition. Track requested cursors/offsets and stop if a continuation repeats or cycles. An echoed nonzero offset is not proof of another page. Keep collected results and report incomplete coverage if progress stops; an empty page alone is not a universal end condition.",
      )),
    e.note && (t.push(""), t.push(`Note: ${e.note}`)),
    e.tools.some((o) => o.permission) &&
      (t.push(""),
      t.push(
        "Permission in this chat: allowed = no action approval needed; approval_required = pauses for user approval; denied = do not invoke. Rules are checked again at execution. Account authorization and connection prerequisites still apply.",
      )),
    t
  );
}
function H(e) {
  const t = [];
  if (e.available_triggers) {
    const n = ["Available webhook events:"];
    (Array.isArray(e.available_triggers) && e.available_triggers.length > 0
      ? e.available_triggers.forEach((r, i) =>
          n.push(`  ${i + 1}. ${r.description} (id: ${r.id})`),
        )
      : typeof e.available_triggers == "string"
        ? n.push(e.available_triggers)
        : n.push("  (none)"),
      t.push(n));
  }
  if (e.active_triggers) {
    const n = ["Active routines:"];
    (Array.isArray(e.active_triggers) && e.active_triggers.length > 0
      ? e.active_triggers.forEach((r, i) => {
          (n.push(`  ${i + 1}. ${r.name} (event: ${r.eventId})`),
            r.prompt && n.push(`     prompt: ${r.prompt}`));
        })
      : typeof e.active_triggers == "string"
        ? n.push(e.active_triggers)
        : n.push("  (none)"),
      t.push(n));
  }
  return t;
}
function G(e, t) {
  if (h.isCodeIntegrationAppId(e.appId)) return re(e, t);
  const n = [],
    r = [],
    i = L(
      !h.isMcpProviderAppId(e.appId) &&
        e.tools.every((p) => p.callName === void 0),
    ),
    o = T(e.appId),
    a = !A.test(e.appId) ? `[${JSON.stringify(e.appId)}]` : `.${e.appId}`,
    s = e.connectedAccounts?.map((p) => p.alias) ?? [],
    l = new Set(
      e.tools.filter((p) => {
        const y = p.parameters?.properties?.account;
        return !y ||
          typeof y != "object" ||
          y.type !== "string" ||
          p.parameters?.required?.includes("account") ||
          !y.enum ||
          y.enum.length !== s.length ||
          !y.enum.every((g) => typeof g == "string" && s.includes(g)) ||
          !s.every((g) => y.enum?.includes(g))
          ? !1
          : Object.keys(y).every((g) =>
              ["type", "enum", "description"].includes(g),
            );
      }),
    ),
    u = l.values().next().value?.parameters?.properties?.account,
    f = typeof u == "object" ? u.description : void 0;
  for (const p of l) {
    const y = p.parameters?.properties?.account;
    (typeof y != "object" || y.description !== f) && l.delete(p);
  }
  const d = l.size > 1 && s.length > 0;
  if (
    (d &&
      (n.push(...$(M("account", f, !1), "")),
      n.push(
        `type ConnectedAccountId = ${s.map((p) => JSON.stringify(p)).join(" | ")}`,
      ),
      n.push("")),
    n.push("declare const orbitra: {"),
    n.push(`  ${o}: {`),
    e.tools && e.tools.length > 0
      ? e.tools.forEach((p, y) => {
          (y > 0 && t.includeJsDoc && n.push(""),
            n.push(
              ...F(p, e.appId, "    ", {
                ...t,
                inputPropertyTypes:
                  d && l.has(p) ? { account: "ConnectedAccountId" } : void 0,
                references: r,
                registry: i,
              }),
            ));
        })
      : n.push("    // (no actions available)"),
    n.push("  }"),
    n.push("}"),
    e.tools && e.tools.length > 0)
  ) {
    const p = e.tools[0],
      y = b(p, e.appId),
      g = A.test(y) ? `.${y}` : `[${JSON.stringify(y)}]`;
    (n.push(""), n.push(`// Example: await orbitra${a}${g}({...})`));
  }
  return [
    ...k(i),
    ...r,
    ...(r.length > 0 || i.needsAdditionalProperties ? [""] : []),
    ...n,
  ];
}
function re(e, t) {
  const n = [],
    r = [],
    i = L(!1),
    o = h.parseCodeIntegrationSlug(e.appId) ?? e.appId,
    c = T(o),
    a = A.test(o) ? `.${o}` : `[${JSON.stringify(o)}]`;
  if (
    (n.push("declare const orbitra: {"),
    n.push("  integration: {"),
    n.push(`    ${c}: {`),
    e.tools && e.tools.length > 0
      ? e.tools.forEach((s, l) => {
          (l > 0 && t.includeJsDoc && n.push(""),
            n.push(
              ...F(s, e.appId, "      ", { ...t, references: r, registry: i }),
            ));
        })
      : n.push("      // (no actions available)"),
    n.push("    }"),
    n.push("  }"),
    n.push("}"),
    e.tools && e.tools.length > 0)
  ) {
    const s = e.tools[0],
      l = b(s, e.appId),
      u = A.test(l) ? `.${l}` : `[${JSON.stringify(l)}]`;
    (n.push(""),
      n.push(`// Example: await orbitra.integration${a}${u}({...})`));
  }
  return [
    ...k(i),
    ...r,
    ...(r.length > 0 || i.needsAdditionalProperties ? [""] : []),
    ...n,
  ];
}
function ie(e, t) {
  return e.tools.find((n) => n.toolSlug === t || b(n, e.appId) === t);
}
function oe(e, t) {
  if (t.length === 0)
    throw new Error("actions must contain at least one action name.");
  const n = new Set();
  for (const r of t) {
    const i = ie(e, r);
    if (!i) {
      const o = e.tools.map((c) => b(c, e.appId)).join(", ");
      throw new Error(
        `Unknown action "${r}" for app "${e.appId}". Available actions: ${o}`,
      );
    }
    n.add(i.toolSlug);
  }
  return e.tools.filter((r) => n.has(r.toolSlug));
}
function se(e) {
  if (e.tools.length === 0) return [["Actions: (no actions available)"]];
  const t = ["Actions:"];
  for (const r of e.tools) {
    const i = b(r, e.appId),
      [o, ...c] = B(r).split(`
`);
    t.push(o ? `- ${i}: ${o}` : `- ${i}`);
    for (const a of c) t.push(a.trim() ? `    ${a}` : "");
  }
  const n = b(e.tools[0], e.appId);
  return [
    t,
    [
      `Load the input and output schemas of the actions you will call: await orbitra.help(${JSON.stringify(e.appId)}, { actions: [${JSON.stringify(n)}] })`,
    ],
  ];
}
function V(e, t = !0) {
  const n = { ...e, appId: h.toPipedreamAppId(e.appId) ?? e.appId },
    r = [];
  return (
    r.push(N(w(n))),
    e.instructions && r.push([e.instructions]),
    r.push(G(n, { includeJsDoc: !0, includeOutputSchemas: t })),
    r.push(...H(n).map(N)),
    r.map((i) =>
      i.join(`
`),
    ).join(`

`)
  );
}
function ue(e, t = !0, n = {}, r = "full") {
  const i = { ...e, appId: h.toPipedreamAppId(e.appId) ?? e.appId };
  if (n.actions !== void 0) {
    const c = { ...i, tools: oe(i, n.actions) };
    return [N(w(c)), G(c, { includeJsDoc: !0, includeOutputSchemas: t })].map(
      (s) =>
        s.join(`
`),
    ).join(`

`);
  }
  if (r === "full") return V(i, !0);
  const o = [w(i)];
  return (
    i.instructions && o.push([i.instructions]),
    o.push(...se(i), ...H(i)),
    o.map((c) =>
      c.join(`
`),
    ).join(`

`)
  );
}
exports.formatAppHelpForLLM = ue;
exports.formatAppToolsForLLM = V;
