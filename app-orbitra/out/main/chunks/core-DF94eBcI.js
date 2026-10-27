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
      e = new i.Error().stack;
    e &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[e] = "eadc4efc-1af7-46ee-ad11-229766dfe900"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-eadc4efc-1af7-46ee-ad11-229766dfe900"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ue = require("./_commonjsHelpers-DJP3_Dvh.js"),
  q = require("./index-CSlo9i6Z.js");
require("tty");
require("util");
require("os");
var M = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var $;
function he() {
  return (
    $ ||
      (($ = 1),
      (M.read = function (i, e, t, n, r) {
        var a,
          s,
          o = r * 8 - n - 1,
          m = (1 << o) - 1,
          c = m >> 1,
          f = -7,
          p = t ? r - 1 : 0,
          k = t ? -1 : 1,
          w = i[e + p];
        for (
          p += k, a = w & ((1 << -f) - 1), w >>= -f, f += o;
          f > 0;
          a = a * 256 + i[e + p], p += k, f -= 8
        );
        for (
          s = a & ((1 << -f) - 1), a >>= -f, f += n;
          f > 0;
          s = s * 256 + i[e + p], p += k, f -= 8
        );
        if (a === 0) a = 1 - c;
        else {
          if (a === m) return s ? NaN : (w ? -1 : 1) * (1 / 0);
          ((s = s + Math.pow(2, n)), (a = a - c));
        }
        return (w ? -1 : 1) * s * Math.pow(2, a - n);
      }),
      (M.write = function (i, e, t, n, r, a) {
        var s,
          o,
          m,
          c = a * 8 - r - 1,
          f = (1 << c) - 1,
          p = f >> 1,
          k = r === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          w = n ? 0 : a - 1,
          U = n ? 1 : -1,
          xe = e < 0 || (e === 0 && 1 / e < 0) ? 1 : 0;
        for (
          e = Math.abs(e),
            isNaN(e) || e === 1 / 0
              ? ((o = isNaN(e) ? 1 : 0), (s = f))
              : ((s = Math.floor(Math.log(e) / Math.LN2)),
                e * (m = Math.pow(2, -s)) < 1 && (s--, (m *= 2)),
                s + p >= 1 ? (e += k / m) : (e += k * Math.pow(2, 1 - p)),
                e * m >= 2 && (s++, (m /= 2)),
                s + p >= f
                  ? ((o = 0), (s = f))
                  : s + p >= 1
                    ? ((o = (e * m - 1) * Math.pow(2, r)), (s = s + p))
                    : ((o = e * Math.pow(2, p - 1) * Math.pow(2, r)), (s = 0)));
          r >= 8;
          i[t + w] = o & 255, w += U, o /= 256, r -= 8
        );
        for (
          s = (s << r) | o, c += r;
          c > 0;
          i[t + w] = s & 255, w += U, s /= 256, c -= 8
        );
        i[t + w - U] |= xe * 128;
      })),
    M
  );
}
he();
const oe = {
  128: "€",
  130: "‚",
  131: "ƒ",
  132: "„",
  133: "…",
  134: "†",
  135: "‡",
  136: "ˆ",
  137: "‰",
  138: "Š",
  139: "‹",
  140: "Œ",
  142: "Ž",
  145: "‘",
  146: "’",
  147: "“",
  148: "”",
  149: "•",
  150: "–",
  151: "—",
  152: "˜",
  153: "™",
  154: "š",
  155: "›",
  156: "œ",
  158: "ž",
  159: "Ÿ",
};
for (const [i, e] of Object.entries(oe));
let R;
function le() {
  if (!(typeof globalThis.TextDecoder > "u"))
    return R ?? (R = new globalThis.TextDecoder("utf-8"));
}
const D = 32 * 1024;
function de(i, e = "utf-8") {
  switch (e.toLowerCase()) {
    case "utf-8":
    case "utf8": {
      const t = le();
      return t ? t.decode(i) : ge(i);
    }
    case "utf-16le":
      return we(i);
    case "us-ascii":
    case "ascii":
      return ke(i);
    case "latin1":
    case "iso-8859-1":
      return ye(i);
    case "windows-1252":
      return be(i);
    default:
      throw new RangeError(`Encoding '${e}' not supported`);
  }
}
function ge(i) {
  const e = [];
  let t = "",
    n = 0;
  for (; n < i.length; ) {
    const r = i[n++];
    if (r < 128) t += String.fromCharCode(r);
    else if (r < 224) {
      const a = i[n++] & 63;
      t += String.fromCharCode(((r & 31) << 6) | a);
    } else if (r < 240) {
      const a = i[n++] & 63,
        s = i[n++] & 63;
      t += String.fromCharCode(((r & 15) << 12) | (a << 6) | s);
    } else {
      const a = i[n++] & 63,
        s = i[n++] & 63,
        o = i[n++] & 63;
      let m = ((r & 7) << 18) | (a << 12) | (s << 6) | o;
      ((m -= 65536),
        (t += String.fromCharCode(
          55296 + ((m >> 10) & 1023),
          56320 + (m & 1023),
        )));
    }
    t.length >= D && (e.push(t), (t = ""));
  }
  return (t && e.push(t), e.join(""));
}
function we(i) {
  const e = i.length & -2;
  if (e === 0) return "";
  const t = [],
    n = D;
  for (let r = 0; r < e; ) {
    const a = Math.min(n, (e - r) >> 1),
      s = new Array(a);
    for (let o = 0; o < a; o++, r += 2) s[o] = i[r] | (i[r + 1] << 8);
    t.push(String.fromCharCode.apply(null, s));
  }
  return t.join("");
}
function ke(i) {
  const e = [];
  for (let t = 0; t < i.length; t += D) {
    const n = Math.min(i.length, t + D),
      r = new Array(n - t);
    for (let a = t, s = 0; a < n; a++, s++) r[s] = i[a] & 127;
    e.push(String.fromCharCode.apply(null, r));
  }
  return e.join("");
}
function ye(i) {
  const e = [];
  for (let t = 0; t < i.length; t += D) {
    const n = Math.min(i.length, t + D),
      r = new Array(n - t);
    for (let a = t, s = 0; a < n; a++, s++) r[s] = i[a];
    e.push(String.fromCharCode.apply(null, r));
  }
  return e.join("");
}
function be(i) {
  const e = [];
  let t = "";
  for (let n = 0; n < i.length; n++) {
    const r = i[n],
      a = r >= 128 && r <= 159 ? oe[r] : void 0;
    ((t += a ?? String.fromCharCode(r)),
      t.length >= D && (e.push(t), (t = "")));
  }
  return (t && e.push(t), e.join(""));
}
function d(i) {
  return new DataView(i.buffer, i.byteOffset);
}
const Se = {
    len: 1,
    get(i, e) {
      return d(i).getUint8(e);
    },
    put(i, e, t) {
      return (d(i).setUint8(e, t), e + 1);
    },
  },
  x = {
    len: 2,
    get(i, e) {
      return d(i).getUint16(e, !0);
    },
    put(i, e, t) {
      return (d(i).setUint16(e, t, !0), e + 2);
    },
  },
  T = {
    len: 2,
    get(i, e) {
      return d(i).getUint16(e);
    },
    put(i, e, t) {
      return (d(i).setUint16(e, t), e + 2);
    },
  },
  u = {
    len: 4,
    get(i, e) {
      return d(i).getUint32(e, !0);
    },
    put(i, e, t) {
      return (d(i).setUint32(e, t, !0), e + 4);
    },
  },
  V = {
    len: 4,
    get(i, e) {
      return d(i).getUint32(e);
    },
    put(i, e, t) {
      return (d(i).setUint32(e, t), e + 4);
    },
  },
  ve = {
    len: 4,
    get(i, e) {
      return d(i).getInt32(e);
    },
    put(i, e, t) {
      return (d(i).setInt32(e, t), e + 4);
    },
  },
  Fe = {
    len: 8,
    get(i, e) {
      return d(i).getBigUint64(e, !0);
    },
    put(i, e, t) {
      return (d(i).setBigUint64(e, t, !0), e + 8);
    },
  };
class v {
  constructor(e, t) {
    ((this.len = e), (this.encoding = t));
  }
  get(e, t = 0) {
    const n = e.subarray(t, t + this.len);
    return de(n, this.encoding);
  }
}
const Be = "End-Of-Stream";
class h extends Error {
  constructor() {
    (super(Be), (this.name = "EndOfStreamError"));
  }
}
class Ee extends Error {
  constructor(e = "The operation was aborted") {
    (super(e), (this.name = "AbortError"));
  }
}
class ce {
  constructor() {
    ((this.endOfStream = !1), (this.interrupted = !1), (this.peekQueue = []));
  }
  async peek(e, t = !1) {
    const n = await this.read(e, t);
    return (this.peekQueue.push(e.subarray(0, n)), n);
  }
  async read(e, t = !1) {
    if (e.length === 0) return 0;
    let n = this.readFromPeekBuffer(e);
    if (
      (this.endOfStream ||
        (n += await this.readRemainderFromStream(e.subarray(n), t)),
      n === 0 && !t)
    )
      throw new h();
    return n;
  }
  readFromPeekBuffer(e) {
    let t = e.length,
      n = 0;
    for (; this.peekQueue.length > 0 && t > 0; ) {
      const r = this.peekQueue.pop();
      if (!r) throw new Error("peekData should be defined");
      const a = Math.min(r.length, t);
      (e.set(r.subarray(0, a), n),
        (n += a),
        (t -= a),
        a < r.length && this.peekQueue.push(r.subarray(a)));
    }
    return n;
  }
  async readRemainderFromStream(e, t) {
    let n = 0;
    for (; n < e.length && !this.endOfStream; ) {
      if (this.interrupted) throw new Ee();
      const r = await this.readFromStream(e.subarray(n), t);
      if (r === 0) break;
      n += r;
    }
    if (!t && n < e.length) throw new h();
    return n;
  }
}
class De extends ce {
  constructor(e) {
    (super(), (this.reader = e));
  }
  async abort() {
    return this.close();
  }
  async close() {
    this.reader.releaseLock();
  }
}
class Te extends De {
  async readFromStream(e, t) {
    if (e.length === 0) return 0;
    const n = await this.reader.read(new Uint8Array(e.length), {
      min: t ? void 0 : e.length,
    });
    return (
      n.done && (this.endOfStream = n.done),
      n.value ? (e.set(n.value), n.value.length) : 0
    );
  }
}
class G extends ce {
  constructor(e) {
    (super(), (this.reader = e), (this.buffer = null));
  }
  writeChunk(e, t) {
    const n = Math.min(t.length, e.length);
    return (
      e.set(t.subarray(0, n)),
      n < t.length ? (this.buffer = t.subarray(n)) : (this.buffer = null),
      n
    );
  }
  async readFromStream(e, t) {
    if (e.length === 0) return 0;
    let n = 0;
    for (
      this.buffer && (n += this.writeChunk(e, this.buffer));
      n < e.length && !this.endOfStream;

    ) {
      const r = await this.reader.read();
      if (r.done) {
        this.endOfStream = !0;
        break;
      }
      r.value && (n += this.writeChunk(e.subarray(n), r.value));
    }
    if (!t && n === 0 && this.endOfStream) throw new h();
    return n;
  }
  abort() {
    return ((this.interrupted = !0), this.reader.cancel());
  }
  async close() {
    (await this.abort(), this.reader.releaseLock());
  }
}
function Ce(i) {
  try {
    const e = i.getReader({ mode: "byob" });
    return e instanceof ReadableStreamDefaultReader ? new G(e) : new Te(e);
  } catch (e) {
    if (e instanceof TypeError) return new G(i.getReader());
    throw e;
  }
}
class _ {
  constructor(e) {
    ((this.numBuffer = new Uint8Array(8)),
      (this.position = 0),
      (this.onClose = e?.onClose),
      e?.abortSignal &&
        e.abortSignal.addEventListener("abort", () => {
          this.abort();
        }));
  }
  async readToken(e, t = this.position) {
    const n = new Uint8Array(e.len);
    if ((await this.readBuffer(n, { position: t })) < e.len) throw new h();
    return e.get(n, 0);
  }
  async peekToken(e, t = this.position) {
    const n = new Uint8Array(e.len);
    if ((await this.peekBuffer(n, { position: t })) < e.len) throw new h();
    return e.get(n, 0);
  }
  async readNumber(e) {
    if ((await this.readBuffer(this.numBuffer, { length: e.len })) < e.len)
      throw new h();
    return e.get(this.numBuffer, 0);
  }
  async peekNumber(e) {
    if ((await this.peekBuffer(this.numBuffer, { length: e.len })) < e.len)
      throw new h();
    return e.get(this.numBuffer, 0);
  }
  async ignore(e) {
    if (this.fileInfo.size !== void 0) {
      const t = this.fileInfo.size - this.position;
      if (e > t) return ((this.position += t), t);
    }
    return ((this.position += e), e);
  }
  async close() {
    (await this.abort(), await this.onClose?.());
  }
  normalizeOptions(e, t) {
    if (
      !this.supportsRandomAccess() &&
      t &&
      t.position !== void 0 &&
      t.position < this.position
    )
      throw new Error(
        "`options.position` must be equal or greater than `tokenizer.position`",
      );
    return {
      mayBeLess: !1,
      offset: 0,
      length: e.length,
      position: this.position,
      ...t,
    };
  }
  abort() {
    return Promise.resolve();
  }
}
const ze = 256e3;
class Ae extends _ {
  constructor(e, t) {
    (super(t), (this.streamReader = e), (this.fileInfo = t?.fileInfo ?? {}));
  }
  async readBuffer(e, t) {
    const n = this.normalizeOptions(e, t),
      r = n.position - this.position;
    if (r > 0) return (await this.ignore(r), this.readBuffer(e, t));
    if (r < 0)
      throw new Error(
        "`options.position` must be equal or greater than `tokenizer.position`",
      );
    if (n.length === 0) return 0;
    const a = await this.streamReader.read(
      e.subarray(0, n.length),
      n.mayBeLess,
    );
    if (((this.position += a), (!t || !t.mayBeLess) && a < n.length))
      throw new h();
    return a;
  }
  async peekBuffer(e, t) {
    const n = this.normalizeOptions(e, t);
    let r = 0;
    if (n.position) {
      const a = n.position - this.position;
      if (a > 0) {
        const s = new Uint8Array(n.length + a);
        return (
          (r = await this.peekBuffer(s, { mayBeLess: n.mayBeLess })),
          e.set(s.subarray(a)),
          r - a
        );
      }
      if (a < 0)
        throw new Error("Cannot peek from a negative offset in a stream");
    }
    if (n.length > 0) {
      try {
        r = await this.streamReader.peek(e.subarray(0, n.length), n.mayBeLess);
      } catch (a) {
        if (t?.mayBeLess && a instanceof h) return 0;
        throw a;
      }
      if (!n.mayBeLess && r < n.length) throw new h();
    }
    return r;
  }
  async ignore(e) {
    const t = Math.min(ze, e),
      n = new Uint8Array(t);
    let r = 0;
    for (; r < e; ) {
      const a = e - r,
        s = await this.readBuffer(n, { length: Math.min(t, a) });
      if (s < 0) return s;
      r += s;
    }
    return r;
  }
  abort() {
    return this.streamReader.abort();
  }
  async close() {
    return this.streamReader.close();
  }
  supportsRandomAccess() {
    return !1;
  }
}
class Ie extends _ {
  constructor(e, t) {
    (super(t),
      (this.uint8Array = e),
      (this.fileInfo = { ...(t?.fileInfo ?? {}), size: e.length }));
  }
  async readBuffer(e, t) {
    t?.position && (this.position = t.position);
    const n = await this.peekBuffer(e, t);
    return ((this.position += n), n);
  }
  async peekBuffer(e, t) {
    const n = this.normalizeOptions(e, t),
      r = Math.min(this.uint8Array.length - n.position, n.length);
    if (!n.mayBeLess && r < n.length) throw new h();
    return (e.set(this.uint8Array.subarray(n.position, n.position + r)), r);
  }
  close() {
    return super.close();
  }
  supportsRandomAccess() {
    return !0;
  }
  setPosition(e) {
    this.position = e;
  }
}
class Me extends _ {
  constructor(e, t) {
    (super(t),
      (this.blob = e),
      (this.fileInfo = {
        ...(t?.fileInfo ?? {}),
        size: e.size,
        mimeType: e.type,
      }));
  }
  async readBuffer(e, t) {
    t?.position && (this.position = t.position);
    const n = await this.peekBuffer(e, t);
    return ((this.position += n), n);
  }
  async peekBuffer(e, t) {
    const n = this.normalizeOptions(e, t),
      r = Math.min(this.blob.size - n.position, n.length);
    if (!n.mayBeLess && r < n.length) throw new h();
    const a = await this.blob.slice(n.position, n.position + r).arrayBuffer();
    return (e.set(new Uint8Array(a)), r);
  }
  close() {
    return super.close();
  }
  supportsRandomAccess() {
    return !0;
  }
  setPosition(e) {
    this.position = e;
  }
}
function Re(i, e) {
  const t = Ce(i),
    n = e ?? {},
    r = n.onClose;
  return (
    (n.onClose = async () => {
      if ((await t.close(), r)) return r();
    }),
    new Ae(t, n)
  );
}
function Le(i, e) {
  return new Ie(i, e);
}
function Oe(i, e) {
  return new Me(i, e);
}
var Pe = q.requireSrc();
const Ue = ue.getDefaultExportFromCjs(Pe),
  C = {
    LocalFileHeader: 67324752,
    DataDescriptor: 134695760,
    CentralFileHeader: 33639248,
    EndOfCentralDirectory: 101010256,
  },
  H = {
    get(i) {
      return {
        signature: u.get(i, 0),
        compressedSize: u.get(i, 8),
        uncompressedSize: u.get(i, 12),
      };
    },
    len: 16,
  },
  je = {
    get(i) {
      const e = x.get(i, 6);
      return {
        signature: u.get(i, 0),
        minVersion: x.get(i, 4),
        dataDescriptor: !!(e & 8),
        compressedMethod: x.get(i, 8),
        compressedSize: u.get(i, 18),
        uncompressedSize: u.get(i, 22),
        filenameLength: x.get(i, 26),
        extraFieldLength: x.get(i, 28),
        filename: null,
      };
    },
    len: 30,
  },
  Ne = {
    get(i) {
      return {
        signature: u.get(i, 0),
        nrOfThisDisk: x.get(i, 4),
        nrOfThisDiskWithTheStart: x.get(i, 6),
        nrOfEntriesOnThisDisk: x.get(i, 8),
        nrOfEntriesOfSize: x.get(i, 10),
        sizeOfCd: u.get(i, 12),
        offsetOfStartOfCd: u.get(i, 16),
        zipFileCommentLength: x.get(i, 20),
      };
    },
    len: 22,
  },
  Ze = {
    get(i) {
      const e = x.get(i, 8);
      return {
        signature: u.get(i, 0),
        minVersion: x.get(i, 6),
        dataDescriptor: !!(e & 8),
        compressedMethod: x.get(i, 10),
        compressedSize: u.get(i, 20),
        uncompressedSize: u.get(i, 24),
        filenameLength: x.get(i, 28),
        extraFieldLength: x.get(i, 30),
        fileCommentLength: x.get(i, 32),
        relativeOffsetOfLocalHeader: u.get(i, 42),
        filename: null,
      };
    },
    len: 46,
  };
function fe(i) {
  const e = new Uint8Array(u.len);
  return (u.put(e, 0, i), e);
}
const y = Ue("tokenizer:inflate"),
  j = 256 * 1024,
  qe = fe(C.DataDescriptor),
  L = fe(C.EndOfCentralDirectory);
class I {
  constructor(e) {
    ((this.tokenizer = e), (this.syncBuffer = new Uint8Array(j)));
  }
  async isZip() {
    return (await this.peekSignature()) === C.LocalFileHeader;
  }
  peekSignature() {
    return this.tokenizer.peekToken(u);
  }
  async findEndOfCentralDirectoryLocator() {
    const e = this.tokenizer,
      t = Math.min(16 * 1024, e.fileInfo.size),
      n = this.syncBuffer.subarray(0, t);
    await this.tokenizer.readBuffer(n, { position: e.fileInfo.size - t });
    for (let r = n.length - 4; r >= 0; r--)
      if (
        n[r] === L[0] &&
        n[r + 1] === L[1] &&
        n[r + 2] === L[2] &&
        n[r + 3] === L[3]
      )
        return e.fileInfo.size - t + r;
    return -1;
  }
  async readCentralDirectory() {
    if (!this.tokenizer.supportsRandomAccess()) {
      y("Cannot reading central-directory without random-read support");
      return;
    }
    y("Reading central-directory...");
    const e = this.tokenizer.position,
      t = await this.findEndOfCentralDirectoryLocator();
    if (t > 0) {
      y("Central-directory 32-bit signature found");
      const n = await this.tokenizer.readToken(Ne, t),
        r = [];
      this.tokenizer.setPosition(n.offsetOfStartOfCd);
      for (let a = 0; a < n.nrOfEntriesOfSize; ++a) {
        const s = await this.tokenizer.readToken(Ze);
        if (s.signature !== C.CentralFileHeader)
          throw new Error("Expected Central-File-Header signature");
        ((s.filename = await this.tokenizer.readToken(
          new v(s.filenameLength, "utf-8"),
        )),
          await this.tokenizer.ignore(s.extraFieldLength),
          await this.tokenizer.ignore(s.fileCommentLength),
          r.push(s),
          y(
            `Add central-directory file-entry: n=${a + 1}/${r.length}: filename=${r[a].filename}`,
          ));
      }
      return (this.tokenizer.setPosition(e), r);
    }
    this.tokenizer.setPosition(e);
  }
  async unzip(e) {
    const t = await this.readCentralDirectory();
    if (t) return this.iterateOverCentralDirectory(t, e);
    let n = !1;
    do {
      const r = await this.readLocalFileHeader();
      if (!r) break;
      const a = e(r);
      n = !!a.stop;
      let s;
      if (
        (await this.tokenizer.ignore(r.extraFieldLength),
        r.dataDescriptor && r.compressedSize === 0)
      ) {
        const o = [];
        let m = j;
        y(
          "Compressed-file-size unknown, scanning for next data-descriptor-signature....",
        );
        let c = -1;
        for (; c < 0 && m === j; ) {
          ((m = await this.tokenizer.peekBuffer(this.syncBuffer, {
            mayBeLess: !0,
          })),
            (c = _e(this.syncBuffer.subarray(0, m), qe)));
          const f = c >= 0 ? c : m;
          if (a.handler) {
            const p = new Uint8Array(f);
            (await this.tokenizer.readBuffer(p), o.push(p));
          } else await this.tokenizer.ignore(f);
        }
        (y(`Found data-descriptor-signature at pos=${this.tokenizer.position}`),
          a.handler && (await this.inflate(r, We(o), a.handler)));
      } else
        a.handler
          ? (y(`Reading compressed-file-data: ${r.compressedSize} bytes`),
            (s = new Uint8Array(r.compressedSize)),
            await this.tokenizer.readBuffer(s),
            await this.inflate(r, s, a.handler))
          : (y(`Ignoring compressed-file-data: ${r.compressedSize} bytes`),
            await this.tokenizer.ignore(r.compressedSize));
      if (
        (y(`Reading data-descriptor at pos=${this.tokenizer.position}`),
        r.dataDescriptor &&
          (await this.tokenizer.readToken(H)).signature !== 134695760)
      )
        throw new Error(
          `Expected data-descriptor-signature at position ${this.tokenizer.position - H.len}`,
        );
    } while (!n);
  }
  async iterateOverCentralDirectory(e, t) {
    for (const n of e) {
      const r = t(n);
      if (r.handler) {
        this.tokenizer.setPosition(n.relativeOffsetOfLocalHeader);
        const a = await this.readLocalFileHeader();
        if (a) {
          await this.tokenizer.ignore(a.extraFieldLength);
          const s = new Uint8Array(n.compressedSize);
          (await this.tokenizer.readBuffer(s),
            await this.inflate(a, s, r.handler));
        }
      }
      if (r.stop) break;
    }
  }
  async inflate(e, t, n) {
    if (e.compressedMethod === 0) return n(t);
    if (e.compressedMethod !== 8)
      throw new Error(
        `Unsupported ZIP compression method: ${e.compressedMethod}`,
      );
    y(`Decompress filename=${e.filename}, compressed-size=${t.length}`);
    const r = await I.decompressDeflateRaw(t);
    return n(r);
  }
  static async decompressDeflateRaw(e) {
    const t = new ReadableStream({
        start(a) {
          (a.enqueue(e), a.close());
        },
      }),
      n = new DecompressionStream("deflate-raw"),
      r = t.pipeThrough(n);
    try {
      const s = await new Response(r).arrayBuffer();
      return new Uint8Array(s);
    } catch (a) {
      const s =
        a instanceof Error
          ? `Failed to deflate ZIP entry: ${a.message}`
          : "Unknown decompression error in ZIP entry";
      throw new TypeError(s);
    }
  }
  async readLocalFileHeader() {
    const e = await this.tokenizer.peekToken(u);
    if (e === C.LocalFileHeader) {
      const t = await this.tokenizer.readToken(je);
      return (
        (t.filename = await this.tokenizer.readToken(
          new v(t.filenameLength, "utf-8"),
        )),
        t
      );
    }
    if (e === C.CentralFileHeader) return !1;
    throw e === 3759263696
      ? new Error("Encrypted ZIP")
      : new Error("Unexpected signature");
  }
}
function _e(i, e) {
  const t = i.length,
    n = e.length;
  if (n > t) return -1;
  for (let r = 0; r <= t - n; r++) {
    let a = !0;
    for (let s = 0; s < n; s++)
      if (i[r + s] !== e[s]) {
        a = !1;
        break;
      }
    if (a) return r;
  }
  return -1;
}
function We(i) {
  const e = i.reduce((r, a) => r + a.length, 0),
    t = new Uint8Array(e);
  let n = 0;
  for (const r of i) (t.set(r, n), (n += r.length));
  return t;
}
class $e {
  constructor(e) {
    this.tokenizer = e;
  }
  inflate() {
    const e = this.tokenizer;
    return new ReadableStream({
      async pull(t) {
        const n = new Uint8Array(1024),
          r = await e.readBuffer(n, { mayBeLess: !0 });
        if (r === 0) {
          t.close();
          return;
        }
        t.enqueue(n.subarray(0, r));
      },
    }).pipeThrough(new DecompressionStream("gzip"));
  }
}
function Ve(i, e) {
  if (e === "utf-16le") {
    const t = [];
    for (let n = 0; n < i.length; n++) {
      const r = i.charCodeAt(n);
      t.push(r & 255, (r >> 8) & 255);
    }
    return t;
  }
  if (e === "utf-16be") {
    const t = [];
    for (let n = 0; n < i.length; n++) {
      const r = i.charCodeAt(n);
      t.push((r >> 8) & 255, r & 255);
    }
    return t;
  }
  return [...i].map((t) => t.charCodeAt(0));
}
function Ge(i, e = 0) {
  const t = Number.parseInt(
    new v(6).get(i, 148).replace(/\0.*$/, "").trim(),
    8,
  );
  if (Number.isNaN(t)) return !1;
  let n = 256;
  for (let r = e; r < e + 148; r++) n += i[r];
  for (let r = e + 156; r < e + 512; r++) n += i[r];
  return t === n;
}
const He = {
    get: (i, e) =>
      (i[e + 3] & 127) | (i[e + 2] << 7) | (i[e + 1] << 14) | (i[e] << 21),
    len: 4,
  },
  Qe = [
    "jpg",
    "png",
    "apng",
    "gif",
    "webp",
    "flif",
    "xcf",
    "cr2",
    "cr3",
    "orf",
    "arw",
    "dng",
    "nef",
    "rw2",
    "raf",
    "tif",
    "bmp",
    "icns",
    "jxr",
    "psd",
    "indd",
    "zip",
    "tar",
    "rar",
    "gz",
    "bz2",
    "7z",
    "dmg",
    "mp4",
    "mid",
    "mkv",
    "webm",
    "mov",
    "avi",
    "mpg",
    "mp2",
    "mp3",
    "m4a",
    "oga",
    "ogg",
    "ogv",
    "opus",
    "flac",
    "wav",
    "spx",
    "amr",
    "pdf",
    "epub",
    "elf",
    "macho",
    "exe",
    "swf",
    "rtf",
    "wasm",
    "woff",
    "woff2",
    "eot",
    "ttf",
    "otf",
    "ttc",
    "ico",
    "flv",
    "ps",
    "xz",
    "sqlite",
    "nes",
    "crx",
    "xpi",
    "cab",
    "deb",
    "ar",
    "rpm",
    "Z",
    "lz",
    "cfb",
    "mxf",
    "mts",
    "blend",
    "bpg",
    "docx",
    "pptx",
    "xlsx",
    "3gp",
    "3g2",
    "j2c",
    "jp2",
    "jpm",
    "jpx",
    "mj2",
    "aif",
    "qcp",
    "odt",
    "ods",
    "odp",
    "xml",
    "mobi",
    "heic",
    "cur",
    "ktx",
    "ape",
    "wv",
    "dcm",
    "ics",
    "glb",
    "pcap",
    "dsf",
    "lnk",
    "alias",
    "voc",
    "ac3",
    "m4v",
    "m4p",
    "m4b",
    "f4v",
    "f4p",
    "f4b",
    "f4a",
    "mie",
    "asf",
    "ogm",
    "ogx",
    "mpc",
    "arrow",
    "shp",
    "aac",
    "mp1",
    "it",
    "s3m",
    "xm",
    "skp",
    "avif",
    "eps",
    "lzh",
    "pgp",
    "asar",
    "stl",
    "chm",
    "3mf",
    "zst",
    "jxl",
    "vcf",
    "jls",
    "pst",
    "dwg",
    "parquet",
    "class",
    "arj",
    "cpio",
    "ace",
    "avro",
    "icc",
    "fbx",
    "vsdx",
    "vtt",
    "apk",
    "drc",
    "lz4",
    "potx",
    "xltx",
    "dotx",
    "xltm",
    "ott",
    "ots",
    "otp",
    "odg",
    "otg",
    "xlsm",
    "docm",
    "dotm",
    "potm",
    "pptm",
    "jar",
    "jmp",
    "rm",
    "sav",
    "ppsm",
    "ppsx",
    "tar.gz",
    "reg",
    "dat",
  ],
  Ke = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/flif",
    "image/x-xcf",
    "image/x-canon-cr2",
    "image/x-canon-cr3",
    "image/tiff",
    "image/bmp",
    "image/vnd.ms-photo",
    "image/vnd.adobe.photoshop",
    "application/x-indesign",
    "application/epub+zip",
    "application/x-xpinstall",
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
    "application/vnd.oasis.opendocument.text",
    "application/vnd.oasis.opendocument.spreadsheet",
    "application/vnd.oasis.opendocument.presentation",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
    "application/zip",
    "application/x-tar",
    "application/x-rar-compressed",
    "application/gzip",
    "application/x-bzip2",
    "application/x-7z-compressed",
    "application/x-apple-diskimage",
    "application/vnd.apache.arrow.file",
    "video/mp4",
    "audio/midi",
    "video/matroska",
    "video/webm",
    "video/quicktime",
    "video/vnd.avi",
    "audio/wav",
    "audio/qcelp",
    "audio/x-ms-asf",
    "video/x-ms-asf",
    "application/vnd.ms-asf",
    "video/mpeg",
    "video/3gpp",
    "audio/mpeg",
    "audio/mp4",
    "video/ogg",
    "audio/ogg",
    "audio/ogg; codecs=opus",
    "application/ogg",
    "audio/flac",
    "audio/ape",
    "audio/wavpack",
    "audio/amr",
    "application/pdf",
    "application/x-elf",
    "application/x-mach-binary",
    "application/x-msdownload",
    "application/x-shockwave-flash",
    "application/rtf",
    "application/wasm",
    "font/woff",
    "font/woff2",
    "application/vnd.ms-fontobject",
    "font/ttf",
    "font/otf",
    "font/collection",
    "image/x-icon",
    "video/x-flv",
    "application/postscript",
    "application/eps",
    "application/x-xz",
    "application/x-sqlite3",
    "application/x-nintendo-nes-rom",
    "application/x-google-chrome-extension",
    "application/vnd.ms-cab-compressed",
    "application/x-deb",
    "application/x-unix-archive",
    "application/x-rpm",
    "application/x-compress",
    "application/x-lzip",
    "application/x-cfb",
    "application/x-mie",
    "application/mxf",
    "video/mp2t",
    "application/x-blender",
    "image/bpg",
    "image/j2c",
    "image/jp2",
    "image/jpx",
    "image/jpm",
    "image/mj2",
    "audio/aiff",
    "application/xml",
    "application/x-mobipocket-ebook",
    "image/heif",
    "image/heif-sequence",
    "image/heic",
    "image/heic-sequence",
    "image/icns",
    "image/ktx",
    "application/dicom",
    "audio/x-musepack",
    "text/calendar",
    "text/vcard",
    "text/vtt",
    "model/gltf-binary",
    "application/vnd.tcpdump.pcap",
    "audio/x-dsf",
    "application/x.ms.shortcut",
    "application/x.apple.alias",
    "audio/x-voc",
    "audio/vnd.dolby.dd-raw",
    "audio/x-m4a",
    "image/apng",
    "image/x-olympus-orf",
    "image/x-sony-arw",
    "image/x-adobe-dng",
    "image/x-nikon-nef",
    "image/x-panasonic-rw2",
    "image/x-fujifilm-raf",
    "video/x-m4v",
    "video/3gpp2",
    "application/x-esri-shape",
    "audio/aac",
    "audio/x-it",
    "audio/x-s3m",
    "audio/x-xm",
    "video/MP1S",
    "video/MP2P",
    "application/vnd.sketchup.skp",
    "image/avif",
    "application/x-lzh-compressed",
    "application/pgp-encrypted",
    "application/x-asar",
    "model/stl",
    "application/vnd.ms-htmlhelp",
    "model/3mf",
    "image/jxl",
    "application/zstd",
    "image/jls",
    "application/vnd.ms-outlook",
    "image/vnd.dwg",
    "application/vnd.apache.parquet",
    "application/java-vm",
    "application/x-arj",
    "application/x-cpio",
    "application/x-ace-compressed",
    "application/avro",
    "application/vnd.iccprofile",
    "application/x.autodesk.fbx",
    "application/vnd.visio",
    "application/vnd.android.package-archive",
    "application/vnd.google.draco",
    "application/x-lz4",
    "application/vnd.openxmlformats-officedocument.presentationml.template",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    "application/vnd.ms-excel.template.macroenabled.12",
    "application/vnd.oasis.opendocument.text-template",
    "application/vnd.oasis.opendocument.spreadsheet-template",
    "application/vnd.oasis.opendocument.presentation-template",
    "application/vnd.oasis.opendocument.graphics",
    "application/vnd.oasis.opendocument.graphics-template",
    "application/vnd.ms-excel.sheet.macroenabled.12",
    "application/vnd.ms-word.document.macroenabled.12",
    "application/vnd.ms-word.template.macroenabled.12",
    "application/vnd.ms-powerpoint.template.macroenabled.12",
    "application/vnd.ms-powerpoint.presentation.macroenabled.12",
    "application/java-archive",
    "application/vnd.rn-realmedia",
    "application/x-spss-sav",
    "application/x-ms-regedit",
    "application/x-ft-windows-registry-hive",
    "application/x-jmp-data",
  ],
  z = 4100,
  Xe = z - 2,
  S = 1024 * 1024,
  Q = 1024,
  Je = 2 ** 31 - 1,
  g = 16 * 1024 * 1024,
  P = S,
  K = S,
  Ye = g,
  et = 1,
  X = 100,
  N = g,
  J = 64,
  Y = P,
  tt = 256,
  it = 512,
  nt = g,
  rt = 512,
  at = 512,
  ee = 256,
  te = P,
  ie = P,
  st = P,
  ne = g,
  ot = new Set([
    "Unexpected signature",
    "Encrypted ZIP",
    "Expected Central-File-Header signature",
  ]),
  ct = [
    "ZIP entry count exceeds ",
    "Unsupported ZIP compression method:",
    "ZIP entry compressed data exceeds ",
    "ZIP entry decompressed data exceeds ",
    "Expected data-descriptor-signature at position ",
  ],
  ft = new Set(["Z_BUF_ERROR", "Z_DATA_ERROR", "ERR_INVALID_STATE"]);
class E extends Error {}
function mt(i) {
  const e = i?.streamReader;
  if (e?.constructor?.name !== "WebStreamByobReader") return i;
  const { reader: t } = e,
    n = async () => {
      (await t.cancel(), t.releaseLock());
    };
  return (
    (e.close = n),
    (e.abort = async () => {
      ((e.interrupted = !0), await n());
    }),
    i
  );
}
function W(i, e, t) {
  if (!Number.isFinite(i) || i < 0 || i > e)
    throw new E(`${t} has invalid size ${i} (maximum ${e} bytes)`);
  return i;
}
async function F(i, e, { maximumLength: t = g, reason: n = "skip" } = {}) {
  const r = W(e, t, n);
  await i.ignore(r);
}
async function Z(
  i,
  e,
  t,
  { maximumLength: n = e.length, reason: r = "read" } = {},
) {
  const a = e.length,
    s = W(a, n, r);
  return i.readBuffer(e, { ...t, length: s });
}
async function pt(i, { maximumLength: e = S } = {}) {
  const r = new ReadableStream({
      start(c) {
        (c.enqueue(i), c.close());
      },
    })
      .pipeThrough(new DecompressionStream("deflate-raw"))
      .getReader(),
    a = [];
  let s = 0;
  try {
    for (;;) {
      const { done: c, value: f } = await r.read();
      if (c) break;
      if (((s += f.length), s > e))
        throw (
          await r.cancel(),
          new Error(`ZIP entry decompressed data exceeds ${e} bytes`)
        );
      a.push(f);
    }
  } finally {
    r.releaseLock();
  }
  const o = new Uint8Array(s);
  let m = 0;
  for (const c of a) (o.set(c, m), (m += c.length));
  return o;
}
const me = 134695760,
  O = 16,
  xt = O - 1;
function ut(i, e) {
  if (i.length < O) return -1;
  const t = i.length - O;
  for (let n = 0; n <= t; n++)
    if (u.get(i, n) === me && u.get(i, n + 8) === e + n) return n;
  return -1;
}
function ht(i) {
  return (i.codePointAt(0) & 32) !== 0;
}
function lt(i, e) {
  const t = new Uint8Array(e);
  let n = 0;
  for (const r of i) (t.set(r, n), (n += r.length));
  return t;
}
async function dt(i, { shouldBuffer: e, maximumLength: t = S } = {}) {
  const { syncBuffer: n } = i,
    { length: r } = n,
    a = [];
  let s = 0;
  for (;;) {
    const o = await i.tokenizer.peekBuffer(n, { mayBeLess: !0 }),
      m = ut(n.subarray(0, o), s),
      c = m >= 0 ? 0 : o === r ? Math.min(xt, o - 1) : 0,
      f = m >= 0 ? m : o - c;
    if (f === 0) break;
    if (((s += f), s > t))
      throw new Error(`ZIP entry compressed data exceeds ${t} bytes`);
    if (e) {
      const p = new Uint8Array(f);
      (await i.tokenizer.readBuffer(p), a.push(p));
    } else await i.tokenizer.ignore(f);
    if (m >= 0) break;
  }
  if ((l(i.tokenizer) || (i.knownSizeDescriptorScannedBytes += s), !!e))
    return lt(a, s);
}
function gt(i, e) {
  return l(i.tokenizer)
    ? Math.max(0, g - (i.tokenizer.position - e))
    : Math.max(0, S - i.knownSizeDescriptorScannedBytes);
}
async function wt(
  i,
  e,
  { shouldBuffer: t, maximumDescriptorLength: n = S } = {},
) {
  if (e.dataDescriptor && e.compressedSize === 0)
    return dt(i, { shouldBuffer: t, maximumLength: n });
  if (!t) {
    await F(i.tokenizer, e.compressedSize, {
      maximumLength: l(i.tokenizer) ? S : i.tokenizer.fileInfo.size,
      reason: "ZIP entry compressed data",
    });
    return;
  }
  const r = Et(i.tokenizer);
  if (
    !Number.isFinite(e.compressedSize) ||
    e.compressedSize < 0 ||
    e.compressedSize > r
  )
    throw new Error(`ZIP entry compressed data exceeds ${r} bytes`);
  const a = new Uint8Array(e.compressedSize);
  return (await i.tokenizer.readBuffer(a), a);
}
I.prototype.inflate = async function (i, e, t) {
  if (i.compressedMethod === 0) return t(e);
  if (i.compressedMethod !== 8)
    throw new Error(
      `Unsupported ZIP compression method: ${i.compressedMethod}`,
    );
  const n = await pt(e, { maximumLength: S });
  return t(n);
};
I.prototype.unzip = async function (i) {
  let e = !1,
    t = 0;
  const n = this.tokenizer.position;
  this.knownSizeDescriptorScannedBytes = 0;
  do {
    if (A(this.tokenizer, n, g))
      throw new E(`ZIP stream probing exceeds ${g} bytes`);
    const r = await this.readLocalFileHeader();
    if (!r) break;
    if ((t++, t > Q)) throw new Error(`ZIP entry count exceeds ${Q}`);
    const a = i(r);
    ((e = !!a.stop), await this.tokenizer.ignore(r.extraFieldLength));
    const s = await wt(this, r, {
      shouldBuffer: !!a.handler,
      maximumDescriptorLength: Math.min(S, gt(this, n)),
    });
    if (
      (a.handler && (await this.inflate(r, s, a.handler)), r.dataDescriptor)
    ) {
      const o = new Uint8Array(O);
      if ((await this.tokenizer.readBuffer(o), u.get(o, 0) !== me))
        throw new Error(
          `Expected data-descriptor-signature at position ${this.tokenizer.position - o.length}`,
        );
    }
    if (A(this.tokenizer, n, g))
      throw new E(`ZIP stream probing exceeds ${g} bytes`);
  } while (!e);
};
function kt(i, e) {
  const t = i.getReader();
  let n = 0,
    r = !1,
    a = !1;
  const s = async (o) => {
    r || a || ((a = !0), await t.cancel(o));
  };
  return new ReadableStream({
    async pull(o) {
      if (n >= e) {
        (o.close(), await s());
        return;
      }
      const { done: m, value: c } = await t.read();
      if (m || !c) {
        ((r = !0), o.close());
        return;
      }
      const f = e - n;
      if (c.length > f) {
        (o.enqueue(c.subarray(0, f)), (n += f), o.close(), await s());
        return;
      }
      (o.enqueue(c), (n += c.length));
    },
    async cancel(o) {
      await s(o);
    },
  });
}
async function yt(i, e) {
  return new B(e).fromStream(i);
}
async function bt(i, e) {
  return new B(e).fromBuffer(i);
}
async function St(i, e) {
  return new B(e).fromBlob(i);
}
function re(i) {
  switch (((i = i.toLowerCase()), i)) {
    case "application/epub+zip":
      return { ext: "epub", mime: i };
    case "application/vnd.oasis.opendocument.text":
      return { ext: "odt", mime: i };
    case "application/vnd.oasis.opendocument.text-template":
      return { ext: "ott", mime: i };
    case "application/vnd.oasis.opendocument.spreadsheet":
      return { ext: "ods", mime: i };
    case "application/vnd.oasis.opendocument.spreadsheet-template":
      return { ext: "ots", mime: i };
    case "application/vnd.oasis.opendocument.presentation":
      return { ext: "odp", mime: i };
    case "application/vnd.oasis.opendocument.presentation-template":
      return { ext: "otp", mime: i };
    case "application/vnd.oasis.opendocument.graphics":
      return { ext: "odg", mime: i };
    case "application/vnd.oasis.opendocument.graphics-template":
      return { ext: "otg", mime: i };
    case "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
      return { ext: "ppsx", mime: i };
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return { ext: "xlsx", mime: i };
    case "application/vnd.ms-excel.sheet.macroenabled":
      return {
        ext: "xlsm",
        mime: "application/vnd.ms-excel.sheet.macroenabled.12",
      };
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.template":
      return { ext: "xltx", mime: i };
    case "application/vnd.ms-excel.template.macroenabled":
      return {
        ext: "xltm",
        mime: "application/vnd.ms-excel.template.macroenabled.12",
      };
    case "application/vnd.ms-powerpoint.slideshow.macroenabled":
      return {
        ext: "ppsm",
        mime: "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
      };
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return { ext: "docx", mime: i };
    case "application/vnd.ms-word.document.macroenabled":
      return {
        ext: "docm",
        mime: "application/vnd.ms-word.document.macroenabled.12",
      };
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
      return { ext: "dotx", mime: i };
    case "application/vnd.ms-word.template.macroenabledtemplate":
      return {
        ext: "dotm",
        mime: "application/vnd.ms-word.template.macroenabled.12",
      };
    case "application/vnd.openxmlformats-officedocument.presentationml.template":
      return { ext: "potx", mime: i };
    case "application/vnd.ms-powerpoint.template.macroenabled":
      return {
        ext: "potm",
        mime: "application/vnd.ms-powerpoint.template.macroenabled.12",
      };
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return { ext: "pptx", mime: i };
    case "application/vnd.ms-powerpoint.presentation.macroenabled":
      return {
        ext: "pptm",
        mime: "application/vnd.ms-powerpoint.presentation.macroenabled.12",
      };
    case "application/vnd.ms-visio.drawing":
      return { ext: "vsdx", mime: "application/vnd.visio" };
    case "application/vnd.ms-package.3dmanufacturing-3dmodel+xml":
      return { ext: "3mf", mime: "model/3mf" };
  }
}
function b(i, e, t) {
  t = { offset: 0, ...t };
  for (const [n, r] of e.entries())
    if (t.mask) {
      if (r !== (t.mask[n] & i[n + t.offset])) return !1;
    } else if (r !== i[n + t.offset]) return !1;
  return !0;
}
function pe(i) {
  return Number.isFinite(i) ? Math.max(1, Math.trunc(i)) : z;
}
function vt(i, e, t) {
  return t === void 0
    ? i.read(e)
    : (t.throwIfAborted(),
      new Promise((n, r) => {
        const a = () => {
            t.removeEventListener("abort", s);
          },
          s = () => {
            const o = t.reason;
            (a(),
              (async () => {
                try {
                  await i.cancel(o);
                } catch {}
              })(),
              r(o));
          };
        (t.addEventListener("abort", s, { once: !0 }),
          (async () => {
            try {
              const o = await i.read(e);
              (a(), n(o));
            } catch (o) {
              (a(), r(o));
            }
          })());
      }));
}
function Ft(i) {
  return Number.isFinite(i) ? Math.max(0, Math.min(Xe, Math.trunc(i))) : 0;
}
function Bt(i) {
  return Number.isFinite(i) ? Math.max(0, i) : Number.MAX_SAFE_INTEGER;
}
function l(i) {
  const e = i.fileInfo.size;
  return !Number.isFinite(e) || e === Number.MAX_SAFE_INTEGER;
}
function A(i, e, t) {
  return l(i) && i.position - e > t;
}
function Et(i) {
  const e = i.fileInfo.size,
    t = Number.isFinite(e)
      ? Math.max(0, e - i.position)
      : Number.MAX_SAFE_INTEGER;
  return Math.min(t, Je);
}
function Dt(i) {
  if (i instanceof h || i instanceof E) return !0;
  if (!(i instanceof Error)) return !1;
  if (ot.has(i.message) || ft.has(i.code)) return !0;
  for (const e of ct) if (i.message.startsWith(e)) return !0;
  return !1;
}
function ae(i, e = S) {
  const t = [i.compressedSize, i.uncompressedSize];
  for (const n of t) if (!Number.isFinite(n) || n < 0 || n > e) return !1;
  return !0;
}
function Tt() {
  return {
    hasContentTypesEntry: !1,
    hasParsedContentTypesEntry: !1,
    isParsingContentTypes: !1,
    hasUnparseableContentTypes: !1,
    hasWordDirectory: !1,
    hasPresentationDirectory: !1,
    hasSpreadsheetDirectory: !1,
    hasThreeDimensionalModelEntry: !1,
  };
}
function Ct(i, e) {
  (e.startsWith("word/") && (i.hasWordDirectory = !0),
    e.startsWith("ppt/") && (i.hasPresentationDirectory = !0),
    e.startsWith("xl/") && (i.hasSpreadsheetDirectory = !0),
    e.startsWith("3D/") &&
      e.endsWith(".model") &&
      (i.hasThreeDimensionalModelEntry = !0));
}
function se(i) {
  if (
    !(
      !i.hasContentTypesEntry ||
      i.hasUnparseableContentTypes ||
      i.isParsingContentTypes ||
      i.hasParsedContentTypesEntry
    )
  ) {
    if (i.hasWordDirectory)
      return {
        ext: "docx",
        mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      };
    if (i.hasPresentationDirectory)
      return {
        ext: "pptx",
        mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      };
    if (i.hasSpreadsheetDirectory)
      return {
        ext: "xlsx",
        mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      };
    if (i.hasThreeDimensionalModelEntry)
      return { ext: "3mf", mime: "model/3mf" };
  }
}
function zt(i) {
  const e = i.indexOf('.main+xml"');
  if (e === -1) {
    const r = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml";
    return i.includes(`ContentType="${r}"`) ? r : void 0;
  }
  const t = i.slice(0, e),
    n = t.lastIndexOf('"');
  return t.slice(n + 1);
}
async function At(i, e) {
  return new B(e).fromTokenizer(i);
}
async function It(i, e) {
  return new B(e).toDetectionStream(i, e);
}
class B {
  constructor(e) {
    const t = Ft(e?.mpegOffsetTolerance);
    ((this.options = { ...e, mpegOffsetTolerance: t }),
      (this.detectors = [
        ...(this.options.customDetectors ?? []),
        { id: "core", detect: this.detectConfident },
        { id: "core.imprecise", detect: this.detectImprecise },
      ]),
      (this.tokenizerOptions = { abortSignal: this.options.signal }),
      (this.gzipProbeDepth = 0));
  }
  getTokenizerOptions() {
    return { ...this.tokenizerOptions };
  }
  createTokenizerFromWebStream(e) {
    return mt(Re(e, this.getTokenizerOptions()));
  }
  async parseTokenizer(e, t = 0) {
    this.detectionReentryCount = t;
    const n = e.position;
    for (const r of this.detectors) {
      let a;
      try {
        a = await r.detect(e);
      } catch (s) {
        if (s instanceof h || s instanceof E) return;
        throw s;
      }
      if (a) return a;
      if (n !== e.position) return;
    }
  }
  async fromTokenizer(e) {
    try {
      return await this.parseTokenizer(e);
    } finally {
      await e.close();
    }
  }
  async fromBuffer(e) {
    if (!(e instanceof Uint8Array || e instanceof ArrayBuffer))
      throw new TypeError(
        `Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e}\``,
      );
    const t = e instanceof Uint8Array ? e : new Uint8Array(e);
    if (t?.length > 1)
      return this.fromTokenizer(Le(t, this.getTokenizerOptions()));
  }
  async fromBlob(e) {
    this.options.signal?.throwIfAborted();
    const t = Oe(e, this.getTokenizerOptions());
    return this.fromTokenizer(t);
  }
  async fromStream(e) {
    this.options.signal?.throwIfAborted();
    const t = this.createTokenizerFromWebStream(e);
    return this.fromTokenizer(t);
  }
  async toDetectionStream(e, t) {
    const n = pe(t?.sampleSize ?? z);
    let r, a;
    const s = e.getReader({ mode: "byob" });
    try {
      const { value: c, done: f } = await vt(
        s,
        new Uint8Array(n),
        this.options.signal,
      );
      if (((a = c), !f && c))
        try {
          r = await this.fromBuffer(c.subarray(0, n));
        } catch (p) {
          if (!(p instanceof h)) throw p;
          r = void 0;
        }
      a = c;
    } finally {
      s.releaseLock();
    }
    const o = new TransformStream({
        async start(c) {
          c.enqueue(a);
        },
        transform(c, f) {
          f.enqueue(c);
        },
      }),
      m = e.pipeThrough(o);
    return ((m.fileType = r), m);
  }
  async detectGzip(e) {
    if (this.gzipProbeDepth >= et)
      return { ext: "gz", mime: "application/gzip" };
    const t = new $e(e),
      n = kt(t.inflate(), Ye),
      r = l(e);
    let a, s, o, m;
    if (r) {
      const c = new AbortController();
      ((a = setTimeout(() => {
        c.abort(
          new DOMException(`Operation timed out after ${X} ms`, "TimeoutError"),
        );
      }, X)),
        (s =
          this.options.signal === void 0
            ? c.signal
            : AbortSignal.any([this.options.signal, c.signal])),
        (o = new B({ ...this.options, signal: s })),
        (o.gzipProbeDepth = this.gzipProbeDepth + 1));
    } else this.gzipProbeDepth++;
    try {
      m = await (o ?? this).fromStream(n);
    } catch (c) {
      if (c?.name === "AbortError" && s?.reason?.name !== "TimeoutError")
        throw c;
    } finally {
      (clearTimeout(a), r || this.gzipProbeDepth--);
    }
    return m?.ext === "tar"
      ? { ext: "tar.gz", mime: "application/gzip" }
      : { ext: "gz", mime: "application/gzip" };
  }
  check(e, t) {
    return b(this.buffer, e, t);
  }
  checkString(e, t) {
    return this.check(Ve(e, t?.encoding), t);
  }
  detectConfident = async (e) => {
    if (
      ((this.buffer = new Uint8Array(z)),
      e.fileInfo.size === void 0 && (e.fileInfo.size = Number.MAX_SAFE_INTEGER),
      (this.tokenizer = e),
      l(e) &&
        (await e.peekBuffer(this.buffer, { length: 3, mayBeLess: !0 }),
        this.check([31, 139, 8])))
    )
      return this.detectGzip(e);
    if (
      (await e.peekBuffer(this.buffer, { length: 32, mayBeLess: !0 }),
      this.check([66, 77]))
    )
      return { ext: "bmp", mime: "image/bmp" };
    if (this.check([11, 119]))
      return { ext: "ac3", mime: "audio/vnd.dolby.dd-raw" };
    if (this.check([120, 1]))
      return { ext: "dmg", mime: "application/x-apple-diskimage" };
    if (this.check([77, 90]))
      return { ext: "exe", mime: "application/x-msdownload" };
    if (this.check([37, 33]))
      return (
        await e.peekBuffer(this.buffer, { length: 24, mayBeLess: !0 }),
        this.checkString("PS-Adobe-", { offset: 2 }) &&
        this.checkString(" EPSF-", { offset: 14 })
          ? { ext: "eps", mime: "application/eps" }
          : { ext: "ps", mime: "application/postscript" }
      );
    if (this.check([31, 160]) || this.check([31, 157]))
      return { ext: "Z", mime: "application/x-compress" };
    if (this.check([199, 113]))
      return { ext: "cpio", mime: "application/x-cpio" };
    if (this.check([96, 234])) return { ext: "arj", mime: "application/x-arj" };
    if (this.check([239, 187, 191]))
      return this.detectionReentryCount >= ee
        ? void 0
        : (this.detectionReentryCount++,
          await this.tokenizer.ignore(3),
          this.detectConfident(e));
    if (this.check([71, 73, 70])) return { ext: "gif", mime: "image/gif" };
    if (this.check([73, 73, 188]))
      return { ext: "jxr", mime: "image/vnd.ms-photo" };
    if (this.check([31, 139, 8])) return this.detectGzip(e);
    if (this.check([66, 90, 104]))
      return { ext: "bz2", mime: "application/x-bzip2" };
    if (this.checkString("ID3")) {
      await F(e, 6, { maximumLength: 6, reason: "ID3 header prefix" });
      const t = await e.readToken(He),
        n = l(e);
      if (!Number.isFinite(t) || t < 0 || (n && (t > N || e.position + t > N)))
        return;
      if (e.position + t > e.fileInfo.size)
        return n ? void 0 : { ext: "mp3", mime: "audio/mpeg" };
      try {
        await F(e, t, {
          maximumLength: n ? N : e.fileInfo.size,
          reason: "ID3 payload",
        });
      } catch (r) {
        if (r instanceof h) return;
        throw r;
      }
      return this.detectionReentryCount >= ee
        ? void 0
        : (this.detectionReentryCount++,
          this.parseTokenizer(e, this.detectionReentryCount));
    }
    if (this.checkString("MP+"))
      return { ext: "mpc", mime: "audio/x-musepack" };
    if (
      (this.buffer[0] === 67 || this.buffer[0] === 70) &&
      this.check([87, 83], { offset: 1 })
    )
      return { ext: "swf", mime: "application/x-shockwave-flash" };
    if (this.check([255, 216, 255]))
      return this.check([247], { offset: 3 })
        ? { ext: "jls", mime: "image/jls" }
        : { ext: "jpg", mime: "image/jpeg" };
    if (this.check([79, 98, 106, 1]))
      return { ext: "avro", mime: "application/avro" };
    if (this.checkString("FLIF")) return { ext: "flif", mime: "image/flif" };
    if (this.checkString("8BPS"))
      return { ext: "psd", mime: "image/vnd.adobe.photoshop" };
    if (this.checkString("MPCK"))
      return { ext: "mpc", mime: "audio/x-musepack" };
    if (this.checkString("FORM")) return { ext: "aif", mime: "audio/aiff" };
    if (this.checkString("icns", { offset: 0 }))
      return { ext: "icns", mime: "image/icns" };
    if (this.check([80, 75, 3, 4])) {
      let t;
      const n = Tt();
      try {
        await new I(e).unzip((r) => {
          Ct(n, r.filename);
          const a = r.filename === "[Content_Types].xml",
            s = se(n);
          if (!a && s) return ((t = s), { stop: !0 });
          switch (r.filename) {
            case "META-INF/mozilla.rsa":
              return (
                (t = { ext: "xpi", mime: "application/x-xpinstall" }),
                { stop: !0 }
              );
            case "META-INF/MANIFEST.MF":
              return (
                (t = { ext: "jar", mime: "application/java-archive" }),
                { stop: !0 }
              );
            case "mimetype":
              return ae(r, K)
                ? {
                    async handler(o) {
                      const m = new TextDecoder("utf-8").decode(o).trim();
                      t = re(m);
                    },
                    stop: !0,
                  }
                : {};
            case "[Content_Types].xml":
              return (
                (n.hasContentTypesEntry = !0),
                ae(r, K)
                  ? ((n.isParsingContentTypes = !0),
                    {
                      async handler(o) {
                        const m = new TextDecoder("utf-8").decode(o),
                          c = zt(m);
                        (c && (t = re(c)),
                          (n.hasParsedContentTypesEntry = !0),
                          (n.isParsingContentTypes = !1));
                      },
                      stop: !0,
                    })
                  : ((n.hasUnparseableContentTypes = !0), {})
              );
            default:
              return /classes\d*\.dex/.test(r.filename)
                ? ((t = {
                    ext: "apk",
                    mime: "application/vnd.android.package-archive",
                  }),
                  { stop: !0 })
                : {};
          }
        });
      } catch (r) {
        if (!Dt(r)) throw r;
        n.isParsingContentTypes &&
          ((n.isParsingContentTypes = !1), (n.hasUnparseableContentTypes = !0));
      }
      return t ?? se(n) ?? { ext: "zip", mime: "application/zip" };
    }
    if (this.checkString("OggS")) {
      await e.ignore(28);
      const t = new Uint8Array(8);
      return (
        await e.readBuffer(t),
        b(t, [79, 112, 117, 115, 72, 101, 97, 100])
          ? { ext: "opus", mime: "audio/ogg; codecs=opus" }
          : b(t, [128, 116, 104, 101, 111, 114, 97])
            ? { ext: "ogv", mime: "video/ogg" }
            : b(t, [1, 118, 105, 100, 101, 111, 0])
              ? { ext: "ogm", mime: "video/ogg" }
              : b(t, [127, 70, 76, 65, 67])
                ? { ext: "oga", mime: "audio/ogg" }
                : b(t, [83, 112, 101, 101, 120, 32, 32])
                  ? { ext: "spx", mime: "audio/ogg" }
                  : b(t, [1, 118, 111, 114, 98, 105, 115])
                    ? { ext: "ogg", mime: "audio/ogg" }
                    : { ext: "ogx", mime: "application/ogg" }
      );
    }
    if (
      this.check([80, 75]) &&
      (this.buffer[2] === 3 || this.buffer[2] === 5 || this.buffer[2] === 7) &&
      (this.buffer[3] === 4 || this.buffer[3] === 6 || this.buffer[3] === 8)
    )
      return { ext: "zip", mime: "application/zip" };
    if (this.checkString("MThd")) return { ext: "mid", mime: "audio/midi" };
    if (
      this.checkString("wOFF") &&
      (this.check([0, 1, 0, 0], { offset: 4 }) ||
        this.checkString("OTTO", { offset: 4 }))
    )
      return { ext: "woff", mime: "font/woff" };
    if (
      this.checkString("wOF2") &&
      (this.check([0, 1, 0, 0], { offset: 4 }) ||
        this.checkString("OTTO", { offset: 4 }))
    )
      return { ext: "woff2", mime: "font/woff2" };
    if (this.check([212, 195, 178, 161]) || this.check([161, 178, 195, 212]))
      return { ext: "pcap", mime: "application/vnd.tcpdump.pcap" };
    if (this.checkString("DSD ")) return { ext: "dsf", mime: "audio/x-dsf" };
    if (this.checkString("LZIP"))
      return { ext: "lz", mime: "application/x-lzip" };
    if (this.checkString("fLaC")) return { ext: "flac", mime: "audio/flac" };
    if (this.check([66, 80, 71, 251])) return { ext: "bpg", mime: "image/bpg" };
    if (this.checkString("wvpk")) return { ext: "wv", mime: "audio/wavpack" };
    if (this.checkString("%PDF"))
      return { ext: "pdf", mime: "application/pdf" };
    if (this.check([0, 97, 115, 109]))
      return { ext: "wasm", mime: "application/wasm" };
    if (this.check([73, 73])) {
      const t = await this.readTiffHeader(!1);
      if (t) return t;
    }
    if (this.check([77, 77])) {
      const t = await this.readTiffHeader(!0);
      if (t) return t;
    }
    if (this.checkString("MAC ")) return { ext: "ape", mime: "audio/ape" };
    if (this.check([26, 69, 223, 163])) {
      async function t() {
        const m = await e.peekNumber(Se);
        let c = 128,
          f = 0;
        for (; (m & c) === 0 && c !== 0; ) (++f, (c >>= 1));
        const p = new Uint8Array(f + 1);
        return (
          await Z(e, p, void 0, {
            maximumLength: p.length,
            reason: "EBML field",
          }),
          p
        );
      }
      async function n() {
        const m = await t(),
          c = await t();
        c[0] ^= 128 >> (c.length - 1);
        const f = Math.min(6, c.length),
          p = new DataView(m.buffer),
          k = new DataView(c.buffer, c.length - f, f);
        return { id: q.getUintBE(p), len: q.getUintBE(k) };
      }
      async function r(m) {
        let c = 0;
        for (; m > 0; ) {
          if ((c++, c > tt || A(e, s, g))) return;
          const f = e.position,
            p = await n();
          if (p.id === 17026) {
            if (p.len > J) return;
            const k = W(p.len, J, "EBML DocType");
            return (await e.readToken(new v(k))).replaceAll(/\00.*$/g, "");
          }
          if (
            (l(e) && (!Number.isFinite(p.len) || p.len < 0 || p.len > Y)) ||
            (await F(e, p.len, {
              maximumLength: l(e) ? Y : e.fileInfo.size,
              reason: "EBML payload",
            }),
            --m,
            e.position <= f)
          )
            return;
        }
      }
      const a = await n(),
        s = e.position;
      switch (await r(a.len)) {
        case "webm":
          return { ext: "webm", mime: "video/webm" };
        case "matroska":
          return { ext: "mkv", mime: "video/matroska" };
        default:
          return;
      }
    }
    if (this.checkString("SQLi"))
      return { ext: "sqlite", mime: "application/x-sqlite3" };
    if (this.check([78, 69, 83, 26]))
      return { ext: "nes", mime: "application/x-nintendo-nes-rom" };
    if (this.checkString("Cr24"))
      return { ext: "crx", mime: "application/x-google-chrome-extension" };
    if (this.checkString("MSCF") || this.checkString("ISc("))
      return { ext: "cab", mime: "application/vnd.ms-cab-compressed" };
    if (this.check([237, 171, 238, 219]))
      return { ext: "rpm", mime: "application/x-rpm" };
    if (this.check([197, 208, 211, 198]))
      return { ext: "eps", mime: "application/eps" };
    if (this.check([40, 181, 47, 253]))
      return { ext: "zst", mime: "application/zstd" };
    if (this.check([127, 69, 76, 70]))
      return { ext: "elf", mime: "application/x-elf" };
    if (this.check([33, 66, 68, 78]))
      return { ext: "pst", mime: "application/vnd.ms-outlook" };
    if (this.checkString("PAR1") || this.checkString("PARE"))
      return { ext: "parquet", mime: "application/vnd.apache.parquet" };
    if (this.checkString("ttcf"))
      return { ext: "ttc", mime: "font/collection" };
    if (
      this.check([254, 237, 250, 206]) ||
      this.check([254, 237, 250, 207]) ||
      this.check([206, 250, 237, 254]) ||
      this.check([207, 250, 237, 254])
    )
      return { ext: "macho", mime: "application/x-mach-binary" };
    if (this.check([4, 34, 77, 24]))
      return { ext: "lz4", mime: "application/x-lz4" };
    if (this.checkString("regf"))
      return { ext: "dat", mime: "application/x-ft-windows-registry-hive" };
    if (this.checkString("$FL2") || this.checkString("$FL3"))
      return { ext: "sav", mime: "application/x-spss-sav" };
    if (this.check([79, 84, 84, 79, 0]))
      return { ext: "otf", mime: "font/otf" };
    if (this.checkString("#!AMR")) return { ext: "amr", mime: "audio/amr" };
    if (this.checkString("{\\rtf"))
      return { ext: "rtf", mime: "application/rtf" };
    if (this.check([70, 76, 86, 1])) return { ext: "flv", mime: "video/x-flv" };
    if (this.checkString("IMPM")) return { ext: "it", mime: "audio/x-it" };
    if (
      this.checkString("-lh0-", { offset: 2 }) ||
      this.checkString("-lh1-", { offset: 2 }) ||
      this.checkString("-lh2-", { offset: 2 }) ||
      this.checkString("-lh3-", { offset: 2 }) ||
      this.checkString("-lh4-", { offset: 2 }) ||
      this.checkString("-lh5-", { offset: 2 }) ||
      this.checkString("-lh6-", { offset: 2 }) ||
      this.checkString("-lh7-", { offset: 2 }) ||
      this.checkString("-lzs-", { offset: 2 }) ||
      this.checkString("-lz4-", { offset: 2 }) ||
      this.checkString("-lz5-", { offset: 2 }) ||
      this.checkString("-lhd-", { offset: 2 })
    )
      return { ext: "lzh", mime: "application/x-lzh-compressed" };
    if (this.check([0, 0, 1, 186])) {
      if (this.check([33], { offset: 4, mask: [241] }))
        return { ext: "mpg", mime: "video/MP1S" };
      if (this.check([68], { offset: 4, mask: [196] }))
        return { ext: "mpg", mime: "video/MP2P" };
    }
    if (this.checkString("ITSF"))
      return { ext: "chm", mime: "application/vnd.ms-htmlhelp" };
    if (this.check([202, 254, 186, 190])) {
      const t = V.get(this.buffer, 4),
        n = T.get(this.buffer, 6);
      if (t > 0 && t <= 30)
        return { ext: "macho", mime: "application/x-mach-binary" };
      if (n > 30) return { ext: "class", mime: "application/java-vm" };
    }
    if (this.checkString(".RMF"))
      return { ext: "rm", mime: "application/vnd.rn-realmedia" };
    if (this.checkString("DRACO"))
      return { ext: "drc", mime: "application/vnd.google.draco" };
    if (this.check([253, 55, 122, 88, 90, 0]))
      return { ext: "xz", mime: "application/x-xz" };
    if (this.checkString("<?xml "))
      return { ext: "xml", mime: "application/xml" };
    if (this.check([55, 122, 188, 175, 39, 28]))
      return { ext: "7z", mime: "application/x-7z-compressed" };
    if (
      this.check([82, 97, 114, 33, 26, 7]) &&
      (this.buffer[6] === 0 || this.buffer[6] === 1)
    )
      return { ext: "rar", mime: "application/x-rar-compressed" };
    if (this.checkString("solid ")) return { ext: "stl", mime: "model/stl" };
    if (this.checkString("AC")) {
      const t = new v(4, "latin1").get(this.buffer, 2);
      if (t.match("^d*") && t >= 1e3 && t <= 1050)
        return { ext: "dwg", mime: "image/vnd.dwg" };
    }
    if (this.checkString("070707"))
      return { ext: "cpio", mime: "application/x-cpio" };
    if (this.checkString("BLENDER"))
      return { ext: "blend", mime: "application/x-blender" };
    if (this.checkString("!<arch>"))
      return (
        await e.ignore(8),
        (await e.readToken(new v(13, "ascii"))) === "debian-binary"
          ? { ext: "deb", mime: "application/x-deb" }
          : { ext: "ar", mime: "application/x-unix-archive" }
      );
    if (
      this.checkString("WEBVTT") &&
      [
        `
`,
        "\r",
        "	",
        " ",
        "\0",
      ].some((t) => this.checkString(t, { offset: 6 }))
    )
      return { ext: "vtt", mime: "text/vtt" };
    if (this.check([137, 80, 78, 71, 13, 10, 26, 10])) {
      const t = { ext: "png", mime: "image/png" },
        n = { ext: "apng", mime: "image/apng" };
      await e.ignore(8);
      async function r() {
        return {
          length: await e.readToken(ve),
          type: await e.readToken(new v(4, "latin1")),
        };
      }
      const a = l(e),
        s = e.position;
      let o = 0,
        m = !1;
      do {
        if ((o++, o > it || A(e, s, nt))) break;
        const c = e.position,
          f = await r();
        if (f.length < 0) return;
        if (f.type === "IHDR") {
          if (f.length !== 13) return;
          m = !0;
        }
        switch (f.type) {
          case "IDAT":
            return t;
          case "acTL":
            return n;
          default:
            if (!m && f.type !== "CgBI") return;
            if (a && f.length > te) return m && ht(f.type) ? t : void 0;
            try {
              await F(e, f.length + 4, {
                maximumLength: a ? te + 4 : e.fileInfo.size,
                reason: "PNG chunk payload",
              });
            } catch (p) {
              if (!a && (p instanceof E || p instanceof h)) return t;
              throw p;
            }
        }
        if (e.position <= c) break;
      } while (e.position + 8 < e.fileInfo.size);
      return t;
    }
    if (this.check([65, 82, 82, 79, 87, 49, 0, 0]))
      return { ext: "arrow", mime: "application/vnd.apache.arrow.file" };
    if (this.check([103, 108, 84, 70, 2, 0, 0, 0]))
      return { ext: "glb", mime: "model/gltf-binary" };
    if (
      this.check([102, 114, 101, 101], { offset: 4 }) ||
      this.check([109, 100, 97, 116], { offset: 4 }) ||
      this.check([109, 111, 111, 118], { offset: 4 }) ||
      this.check([119, 105, 100, 101], { offset: 4 })
    )
      return { ext: "mov", mime: "video/quicktime" };
    if (this.check([73, 73, 82, 79, 8, 0, 0, 0, 24]))
      return { ext: "orf", mime: "image/x-olympus-orf" };
    if (this.checkString("gimp xcf "))
      return { ext: "xcf", mime: "image/x-xcf" };
    if (
      this.checkString("ftyp", { offset: 4 }) &&
      (this.buffer[8] & 96) !== 0
    ) {
      const t = new v(4, "latin1")
        .get(this.buffer, 8)
        .replace("\0", " ")
        .trim();
      switch (t) {
        case "avif":
        case "avis":
          return { ext: "avif", mime: "image/avif" };
        case "mif1":
          return { ext: "heic", mime: "image/heif" };
        case "msf1":
          return { ext: "heic", mime: "image/heif-sequence" };
        case "heic":
        case "heix":
          return { ext: "heic", mime: "image/heic" };
        case "hevc":
        case "hevx":
          return { ext: "heic", mime: "image/heic-sequence" };
        case "qt":
          return { ext: "mov", mime: "video/quicktime" };
        case "M4V":
        case "M4VH":
        case "M4VP":
          return { ext: "m4v", mime: "video/x-m4v" };
        case "M4P":
          return { ext: "m4p", mime: "video/mp4" };
        case "M4B":
          return { ext: "m4b", mime: "audio/mp4" };
        case "M4A":
          return { ext: "m4a", mime: "audio/x-m4a" };
        case "F4V":
          return { ext: "f4v", mime: "video/mp4" };
        case "F4P":
          return { ext: "f4p", mime: "video/mp4" };
        case "F4A":
          return { ext: "f4a", mime: "audio/mp4" };
        case "F4B":
          return { ext: "f4b", mime: "audio/mp4" };
        case "crx":
          return { ext: "cr3", mime: "image/x-canon-cr3" };
        default:
          return t.startsWith("3g")
            ? t.startsWith("3g2")
              ? { ext: "3g2", mime: "video/3gpp2" }
              : { ext: "3gp", mime: "video/3gpp" }
            : { ext: "mp4", mime: "video/mp4" };
      }
    }
    if (
      this.checkString(`REGEDIT4\r
`)
    )
      return { ext: "reg", mime: "application/x-ms-regedit" };
    if (this.check([82, 73, 70, 70])) {
      if (this.checkString("WEBP", { offset: 8 }))
        return { ext: "webp", mime: "image/webp" };
      if (this.check([65, 86, 73], { offset: 8 }))
        return { ext: "avi", mime: "video/vnd.avi" };
      if (this.check([87, 65, 86, 69], { offset: 8 }))
        return { ext: "wav", mime: "audio/wav" };
      if (this.check([81, 76, 67, 77], { offset: 8 }))
        return { ext: "qcp", mime: "audio/qcelp" };
    }
    if (this.check([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216]))
      return { ext: "rw2", mime: "image/x-panasonic-rw2" };
    if (this.check([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
      let t = !1;
      try {
        async function n() {
          const o = new Uint8Array(16);
          return (
            await Z(e, o, void 0, {
              maximumLength: o.length,
              reason: "ASF header GUID",
            }),
            { id: o, size: Number(await e.readToken(Fe)) }
          );
        }
        await F(e, 30, { maximumLength: 30, reason: "ASF header prelude" });
        const r = l(e),
          a = e.position;
        let s = 0;
        for (
          ;
          e.position + 24 < e.fileInfo.size && (s++, !(s > rt || A(e, a, g)));

        ) {
          const o = e.position,
            m = await n();
          let c = m.size - 24;
          if (!Number.isFinite(c) || c < 0) {
            t = !0;
            break;
          }
          if (
            b(
              m.id,
              [
                145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32,
                83, 101,
              ],
            )
          ) {
            const f = new Uint8Array(16);
            if (
              ((c -= await Z(e, f, void 0, {
                maximumLength: f.length,
                reason: "ASF stream type GUID",
              })),
              b(
                f,
                [
                  64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92,
                  68, 43,
                ],
              ))
            )
              return { ext: "asf", mime: "audio/x-ms-asf" };
            if (
              b(
                f,
                [
                  192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92,
                  68, 43,
                ],
              )
            )
              return { ext: "asf", mime: "video/x-ms-asf" };
            break;
          }
          if (r && c > ie) {
            t = !0;
            break;
          }
          if (
            (await F(e, c, {
              maximumLength: r ? ie : e.fileInfo.size,
              reason: "ASF header payload",
            }),
            e.position <= o)
          ) {
            t = !0;
            break;
          }
        }
      } catch (n) {
        if (n instanceof h || n instanceof E) l(e) && (t = !0);
        else throw n;
      }
      return t ? void 0 : { ext: "asf", mime: "application/vnd.ms-asf" };
    }
    if (this.check([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]))
      return { ext: "ktx", mime: "image/ktx" };
    if (
      (this.check([126, 16, 4]) || this.check([126, 24, 4])) &&
      this.check([48, 77, 73, 69], { offset: 4 })
    )
      return { ext: "mie", mime: "application/x-mie" };
    if (this.check([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 }))
      return { ext: "shp", mime: "application/x-esri-shape" };
    if (this.check([255, 79, 255, 81]))
      return { ext: "j2c", mime: "image/j2c" };
    if (this.check([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10]))
      switch ((await e.ignore(20), await e.readToken(new v(4, "ascii")))) {
        case "jp2 ":
          return { ext: "jp2", mime: "image/jp2" };
        case "jpx ":
          return { ext: "jpx", mime: "image/jpx" };
        case "jpm ":
          return { ext: "jpm", mime: "image/jpm" };
        case "mjp2":
          return { ext: "mj2", mime: "image/mj2" };
        default:
          return;
      }
    if (
      this.check([255, 10]) ||
      this.check([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10])
    )
      return { ext: "jxl", mime: "image/jxl" };
    if (this.check([254, 255]))
      return this.checkString("<?xml ", { offset: 2, encoding: "utf-16be" })
        ? { ext: "xml", mime: "application/xml" }
        : void 0;
    if (this.check([208, 207, 17, 224, 161, 177, 26, 225]))
      return { ext: "cfb", mime: "application/x-cfb" };
    if (
      (await e.peekBuffer(this.buffer, {
        length: Math.min(256, e.fileInfo.size),
        mayBeLess: !0,
      }),
      this.check([97, 99, 115, 112], { offset: 36 }))
    )
      return { ext: "icc", mime: "application/vnd.iccprofile" };
    if (
      this.checkString("**ACE", { offset: 7 }) &&
      this.checkString("**", { offset: 12 })
    )
      return { ext: "ace", mime: "application/x-ace-compressed" };
    if (this.checkString("BEGIN:")) {
      if (this.checkString("VCARD", { offset: 6 }))
        return { ext: "vcf", mime: "text/vcard" };
      if (this.checkString("VCALENDAR", { offset: 6 }))
        return { ext: "ics", mime: "text/calendar" };
    }
    if (this.checkString("FUJIFILMCCD-RAW"))
      return { ext: "raf", mime: "image/x-fujifilm-raf" };
    if (this.checkString("Extended Module:"))
      return { ext: "xm", mime: "audio/x-xm" };
    if (this.checkString("Creative Voice File"))
      return { ext: "voc", mime: "audio/x-voc" };
    if (this.check([4, 0, 0, 0]) && this.buffer.length >= 16) {
      const t = new DataView(this.buffer.buffer).getUint32(12, !0);
      if (t > 12 && this.buffer.length >= t + 16)
        try {
          const n = new TextDecoder().decode(this.buffer.subarray(16, t + 16));
          if (JSON.parse(n).files)
            return { ext: "asar", mime: "application/x-asar" };
        } catch {}
    }
    if (this.check([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2]))
      return { ext: "mxf", mime: "application/mxf" };
    if (this.checkString("SCRM", { offset: 44 }))
      return { ext: "s3m", mime: "audio/x-s3m" };
    if (this.check([71]) && this.check([71], { offset: 188 }))
      return { ext: "mts", mime: "video/mp2t" };
    if (this.check([71], { offset: 4 }) && this.check([71], { offset: 196 }))
      return { ext: "mts", mime: "video/mp2t" };
    if (this.check([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 }))
      return { ext: "mobi", mime: "application/x-mobipocket-ebook" };
    if (this.check([68, 73, 67, 77], { offset: 128 }))
      return { ext: "dcm", mime: "application/dicom" };
    if (
      this.check([
        76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70,
      ])
    )
      return { ext: "lnk", mime: "application/x.ms.shortcut" };
    if (
      this.check([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0])
    )
      return { ext: "alias", mime: "application/x.apple.alias" };
    if (this.checkString("Kaydara FBX Binary  \0"))
      return { ext: "fbx", mime: "application/x.autodesk.fbx" };
    if (
      this.check([76, 80], { offset: 34 }) &&
      (this.check([0, 0, 1], { offset: 8 }) ||
        this.check([1, 0, 2], { offset: 8 }) ||
        this.check([2, 0, 2], { offset: 8 }))
    )
      return { ext: "eot", mime: "application/vnd.ms-fontobject" };
    if (
      this.check([
        6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29,
      ])
    )
      return { ext: "indd", mime: "application/x-indesign" };
    if (
      this.check([255, 255, 0, 0, 7, 0, 0, 0, 4, 0, 0, 0, 1, 0, 1, 0]) ||
      this.check([0, 0, 255, 255, 0, 0, 0, 7, 0, 0, 0, 4, 0, 1, 0, 1])
    )
      return { ext: "jmp", mime: "application/x-jmp-data" };
    if (
      (await e.peekBuffer(this.buffer, {
        length: Math.min(512, e.fileInfo.size),
        mayBeLess: !0,
      }),
      (this.checkString("ustar", { offset: 257 }) &&
        (this.checkString("\0", { offset: 262 }) ||
          this.checkString(" ", { offset: 262 }))) ||
        (this.check([0, 0, 0, 0, 0, 0], { offset: 257 }) && Ge(this.buffer)))
    )
      return { ext: "tar", mime: "application/x-tar" };
    if (this.check([255, 254])) {
      const t = "utf-16le";
      return this.checkString("<?xml ", { offset: 2, encoding: t })
        ? { ext: "xml", mime: "application/xml" }
        : this.check([255, 14], { offset: 2 }) &&
            this.checkString("SketchUp Model", { offset: 4, encoding: t })
          ? { ext: "skp", mime: "application/vnd.sketchup.skp" }
          : this.checkString(
                `Windows Registry Editor Version 5.00\r
`,
                { offset: 2, encoding: t },
              )
            ? { ext: "reg", mime: "application/x-ms-regedit" }
            : void 0;
    }
    if (this.checkString("-----BEGIN PGP MESSAGE-----"))
      return { ext: "pgp", mime: "application/pgp-encrypted" };
  };
  detectImprecise = async (e) => {
    this.buffer = new Uint8Array(z);
    const t = Bt(e.fileInfo.size);
    if (
      (await e.peekBuffer(this.buffer, {
        length: Math.min(8, t),
        mayBeLess: !0,
      }),
      this.check([0, 0, 1, 186]) || this.check([0, 0, 1, 179]))
    )
      return { ext: "mpg", mime: "video/mpeg" };
    if (this.check([0, 1, 0, 0, 0])) return { ext: "ttf", mime: "font/ttf" };
    if (this.check([0, 0, 1, 0])) return { ext: "ico", mime: "image/x-icon" };
    if (this.check([0, 0, 2, 0])) return { ext: "cur", mime: "image/x-icon" };
    if (
      (await e.peekBuffer(this.buffer, {
        length: Math.min(2 + this.options.mpegOffsetTolerance, t),
        mayBeLess: !0,
      }),
      this.buffer.length >= 2 + this.options.mpegOffsetTolerance)
    )
      for (let n = 0; n <= this.options.mpegOffsetTolerance; ++n) {
        const r = this.scanMpeg(n);
        if (r) return r;
      }
  };
  async readTiffTag(e) {
    const t = await this.tokenizer.readToken(e ? T : x);
    switch ((await this.tokenizer.ignore(10), t)) {
      case 50341:
        return { ext: "arw", mime: "image/x-sony-arw" };
      case 50706:
        return { ext: "dng", mime: "image/x-adobe-dng" };
    }
  }
  async readTiffIFD(e) {
    const t = await this.tokenizer.readToken(e ? T : x);
    if (!(t > at) && !(l(this.tokenizer) && 2 + t * 12 > ne))
      for (let n = 0; n < t; ++n) {
        const r = await this.readTiffTag(e);
        if (r) return r;
      }
  }
  async readTiffHeader(e) {
    const t = { ext: "tif", mime: "image/tiff" },
      n = (e ? T : x).get(this.buffer, 2),
      r = (e ? V : u).get(this.buffer, 4);
    if (n === 42) {
      if (r >= 6) {
        if (this.checkString("CR", { offset: 8 }))
          return { ext: "cr2", mime: "image/x-canon-cr2" };
        if (r >= 8) {
          const o = (e ? T : x).get(this.buffer, 8),
            m = (e ? T : x).get(this.buffer, 10);
          if ((o === 28 && m === 254) || (o === 31 && m === 11))
            return { ext: "nef", mime: "image/x-nikon-nef" };
        }
      }
      if (l(this.tokenizer) && r > st) return t;
      const a = l(this.tokenizer) ? ne : this.tokenizer.fileInfo.size;
      try {
        await F(this.tokenizer, r, {
          maximumLength: a,
          reason: "TIFF IFD offset",
        });
      } catch (o) {
        if (o instanceof h) return;
        throw o;
      }
      let s;
      try {
        s = await this.readTiffIFD(e);
      } catch (o) {
        if (o instanceof h) return;
        throw o;
      }
      return s ?? t;
    }
    if (n === 43) return t;
  }
  scanMpeg(e) {
    if (this.check([255, 224], { offset: e, mask: [255, 224] })) {
      if (this.check([16], { offset: e + 1, mask: [22] }))
        return this.check([8], { offset: e + 1, mask: [8] })
          ? { ext: "aac", mime: "audio/aac" }
          : { ext: "aac", mime: "audio/aac" };
      if (this.check([2], { offset: e + 1, mask: [6] }))
        return { ext: "mp3", mime: "audio/mpeg" };
      if (this.check([4], { offset: e + 1, mask: [6] }))
        return { ext: "mp2", mime: "audio/mpeg" };
      if (this.check([6], { offset: e + 1, mask: [6] }))
        return { ext: "mp1", mime: "audio/mpeg" };
    }
  }
}
const Mt = new Set(Qe),
  Rt = new Set(Ke);
exports.FileTypeParser = B;
exports.fileTypeFromBlob = St;
exports.fileTypeFromBuffer = bt;
exports.fileTypeFromStream = yt;
exports.fileTypeFromTokenizer = At;
exports.fileTypeStream = It;
exports.normalizeSampleSize = pe;
exports.reasonableDetectionSizeInBytes = z;
exports.supportedExtensions = Mt;
exports.supportedMimeTypes = Rt;
