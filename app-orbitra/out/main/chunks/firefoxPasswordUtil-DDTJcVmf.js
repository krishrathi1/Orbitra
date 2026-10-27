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
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "9637a865-9763-4cbb-9e9f-7c6510576cea"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-9637a865-9763-4cbb-9e9f-7c6510576cea"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const f = require("crypto"),
  U = require("fs/promises"),
  w = require("path"),
  y = require("./sourceTypes-BtnpKV6Z.js"),
  N = require("asn1js"),
  L = require("better-sqlite3");
require("node:async_hooks");
require("node:fs/promises");
require("node:os");
require("node:path");
function V(t) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (t) {
    for (const r in t)
      if (r !== "default") {
        const o = Object.getOwnPropertyDescriptor(t, r);
        Object.defineProperty(
          e,
          r,
          o.get ? o : { enumerable: !0, get: () => t[r] },
        );
      }
  }
  return ((e.default = t), Object.freeze(e));
}
const g = V(N),
  P = Buffer.from([248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]),
  $ = "v10",
  k = 12,
  K = "1.2.840.113549.1.5.13",
  W = "1.2.840.113549.1.12.5.1.3",
  E = "1.2.840.113549.3.7",
  z = "2.16.840.1.101.3.4.1.2",
  G = "2.16.840.1.101.3.4.1.22",
  D = "2.16.840.1.101.3.4.1.42";
async function A(t) {
  const e = w.join(t, "logins.json");
  if (!(await y.fileExists(e)))
    throw new Error("Firefox logins.json file not found");
  const r = await U.readFile(e, "utf8"),
    o = JSON.parse(r);
  if (!o.logins || !Array.isArray(o.logins))
    throw new Error("Firefox logins.json has invalid structure");
  return o.logins;
}
async function R(t, e) {
  if (!(await y.fileExists(t)))
    throw new Error("Firefox key4.db file not found");
  const r = await y.copySourceDatabase(t);
  let o = null;
  try {
    o = new L(r, { readonly: !0 });
    const a = o
      .prepare("SELECT item1, item2 FROM metadata WHERE id = 'password'")
      .get();
    if (!a) throw new Error("Firefox metadata not found");
    const l = Buffer.from(a.item1),
      s = Buffer.from(a.item2),
      n = S(s, l, e),
      c = Buffer.from("password-check", "utf8");
    if (!n.equals(c))
      throw new Error(
        "FIREFOX_PRIMARY_PASSWORD_REQUIRED: Password validation failed. Primary Password may be required.",
      );
    const u = o
      .prepare("SELECT a11 FROM nssPrivate WHERE a11 IS NOT NULL AND a102 = ?")
      .all(P);
    if (u.length === 0)
      throw new Error("Private key not found in NSS database");
    const i = u.map((h) => S(Buffer.from(h.a11), l, e)),
      d = Math.min(...i.map((h) => h.length));
    if (d < 24) throw new Error(`Master key too short: ${d} bytes`);
    return i;
  } finally {
    o?.close();
    try {
      await y.removeSourceDatabase(r);
    } catch {}
  }
}
function S(t, e, r) {
  const o = new Uint8Array(t.length);
  o.set(t);
  const a = g.fromBER(o.buffer);
  if (a.offset === -1) throw new Error("Failed to parse ASN.1");
  const l = a.result,
    s = l.valueBlock.value[0],
    n = s.valueBlock.value[0],
    c = x(n.valueBlock.value.map((h) => h.valueDec)).join("."),
    u = l.valueBlock.value[1],
    i = Buffer.from(new Uint8Array(u.valueBlock.valueHexView)),
    d = Buffer.from(r || "", "utf8");
  if (c === K) {
    const h = s.valueBlock.value[1],
      p = h.valueBlock.value[0].valueBlock.value[1],
      C = Buffer.from(
        new Uint8Array(p.valueBlock.value[0].valueBlock.valueHexView),
      ),
      O = p.valueBlock.value[1].valueBlock.valueDec;
    let B = 32;
    if (p.valueBlock.value.length > 2) {
      const m = p.valueBlock.value[2];
      m instanceof g.Integer && (B = m.valueBlock.valueDec);
    }
    const j = h.valueBlock.value[1],
      v = Buffer.from(
        new Uint8Array(j.valueBlock.value[1].valueBlock.valueHexView),
      ),
      T = f.createHash("sha1").update(e).update(d).digest(),
      H = f.pbkdf2Sync(T, C, O, B, "sha256"),
      M = v.length === 14 ? Buffer.concat([Buffer.from([4, 14]), v]) : v,
      b = f.createDecipheriv("aes-256-cbc", H, M);
    return Buffer.concat([b.update(i), b.final()]);
  }
  if (c === W) {
    const h = s.valueBlock.value[1],
      p = Buffer.from(
        new Uint8Array(h.valueBlock.value[0].valueBlock.valueHexView),
      );
    return Y(e, d, p, i);
  }
  throw new Error(`Unsupported encryption algorithm: ${c}`);
}
function Y(t, e, r, o) {
  const a = f.createHash("sha1").update(t).update(e).digest(),
    l = Buffer.concat([r, Buffer.alloc(20 - r.length)]),
    s = f.createHash("sha1").update(a).update(r).digest(),
    n = f
      .createHmac("sha1", s)
      .update(Buffer.concat([l, r]))
      .digest(),
    c = f.createHmac("sha1", s).update(l).digest(),
    u = f
      .createHmac("sha1", s)
      .update(Buffer.concat([c, r]))
      .digest(),
    i = Buffer.concat([n, u]),
    d = f.createDecipheriv("des-ede3-cbc", i.subarray(0, 24), i.subarray(-8));
  return Buffer.concat([d.update(o), d.final()]);
}
function I(t) {
  const e = Buffer.from(t, "base64");
  if (e.length >= 3 && e.subarray(0, 3).toString() === $) {
    if (e.length < 31) throw new Error("Invalid new format data length");
    return {
      keyID: e.subarray(3, 19),
      iv: e.subarray(19, 31),
      ciphertext: e.subarray(31),
      algorithmOid: "aes-256-gcm",
    };
  }
  const r = new Uint8Array(e.length);
  r.set(e);
  const o = g.fromBER(r.buffer);
  if (o.offset === -1) throw new Error("Failed to parse ASN.1 structure");
  const a = o.result;
  if (a.valueBlock.value.length < 3)
    throw new Error("Invalid ASN.1 login structure");
  const l = Buffer.from(a.valueBlock.value[0].valueBlock.valueHexView),
    s = a.valueBlock.value[1];
  let n;
  if (s.valueBlock.value[0] instanceof g.ObjectIdentifier) {
    const i = s.valueBlock.value[0].valueBlock.value.map((d) => d.valueDec);
    n = x(i).join(".");
  }
  const c = Buffer.from(s.valueBlock.value[1].valueBlock.valueHexView),
    u = Buffer.from(a.valueBlock.value[2].valueBlock.valueHexView);
  return { keyID: l, iv: c, ciphertext: u, algorithmOid: n };
}
function _(t, e, r, o, a) {
  if (!t.equals(P)) throw new Error("Key ID mismatch");
  const l =
      a === "aes-256-gcm" ||
      a === D ||
      (a !== void 0 && a !== E && e.length === k),
    s =
      o.find((n) => n.length === (l ? 32 : 24)) ??
      o.find((n) => n.length >= (l ? 32 : 24)) ??
      o[0];
  if (a === "aes-256-gcm") {
    const n = s.subarray(0, 32),
      c = r.subarray(0, -16),
      u = r.subarray(-16),
      i = f.createDecipheriv("aes-256-gcm", n, e);
    return (
      i.setAuthTag(u),
      Buffer.concat([i.update(c), i.final()]).toString("utf8")
    );
  }
  if (a === D && e.length === 16 && s.length >= 32) {
    const n = f.createDecipheriv("aes-256-cbc", s.subarray(0, 32), e);
    return Buffer.concat([n.update(r), n.final()]).toString("utf8");
  }
  if (a === G && e.length === 16 && s.length >= 24) {
    const n = f.createDecipheriv("aes-192-cbc", s.subarray(0, 24), e);
    return Buffer.concat([n.update(r), n.final()]).toString("utf8");
  }
  if (a === z && e.length === 16) {
    const n = f.createDecipheriv("aes-128-cbc", s.subarray(0, 16), e);
    return Buffer.concat([n.update(r), n.final()]).toString("utf8");
  }
  if (!a || a === E || e.length === 8) {
    const n = s.subarray(0, 24),
      c = e.length > 8 ? e.subarray(0, 8) : e,
      u = f.createDecipheriv("des-ede3-cbc", n, c);
    return Buffer.concat([u.update(r), u.final()]).toString("utf8");
  }
  if (e.length === k && s.length >= 32) {
    const n = s.subarray(0, 32),
      c = r.subarray(0, -16),
      u = r.subarray(-16),
      i = f.createDecipheriv("aes-256-gcm", n, e);
    return (
      i.setAuthTag(u),
      Buffer.concat([i.update(c), i.final()]).toString("utf8")
    );
  }
  throw new Error(
    `Unable to decrypt: unsupported algorithm ${a} with IV length ${e.length}`,
  );
}
async function F(t, e) {
  const r = I(t.encryptedUsername),
    o = _(r.keyID, r.iv, r.ciphertext, e, r.algorithmOid),
    a = I(t.encryptedPassword),
    l = _(a.keyID, a.iv, a.ciphertext, e, a.algorithmOid);
  return {
    originUrl: t.hostname,
    username: o,
    password: l,
    dateCreated: new Date(t.timeCreated),
  };
}
function x(t) {
  if (!t || t.length === 0) return t;
  const e = t[0];
  return e === 0 || e === 1 || e === 2
    ? t
    : [Math.min(2, Math.floor(e / 40)), e % 40, ...t.slice(1)];
}
async function q(t) {
  const e = w.join(t, "key4.db");
  if (!(await y.fileExists(e))) return !1;
  try {
    const r = await R(e, void 0),
      o = w.join(t, "logins.json");
    if (await y.fileExists(o)) {
      const a = await A(t);
      if (a.length > 0)
        try {
          return (await F(a[0], r), !1);
        } catch {
          return !0;
        }
    }
    return !1;
  } catch {
    return !0;
  }
}
async function Q(t, e) {
  const r = await A(t.path);
  if (r.length === 0) return [];
  if (!r.some((c) => c.encryptedPassword?.length > 0)) return [];
  const a = w.join(t.path, "key4.db"),
    l = await R(a, e),
    s = [],
    n = [];
  for (const c of r)
    try {
      const u = await F(c, l);
      u.username && u.password && s.push(u);
    } catch (u) {
      n.push(`${c.hostname}: ${u}`);
    }
  if (n.length > 0 && s.length === 0)
    throw (await q(t.path)) && !e
      ? new Error(
          "FIREFOX_PRIMARY_PASSWORD_REQUIRED: Firefox has a Primary Password set. Password import requires the Primary Password.",
        )
      : new Error(`Failed to decrypt Firefox passwords. First error: ${n[0]}`);
  return s;
}
exports.getAllFirefoxPasswords = Q;
exports.isFirefoxPrimaryPasswordRequired = q;
