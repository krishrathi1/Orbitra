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
      (r._sentryDebugIds[n] = "a6192c87-13e8-466a-97d3-6bfb5982d3fb"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-a6192c87-13e8-466a-97d3-6bfb5982d3fb"));
  })();
} catch {}
const j = require("tty"),
  Y = require("util"),
  H = require("os"),
  J = Object.prototype.toString,
  W = "[object Uint8Array]",
  Z = "[object ArrayBuffer]";
function N(r, n, u) {
  return r ? (r.constructor === n ? !0 : J.call(r) === u) : !1;
}
function k(r) {
  return N(r, Uint8Array, W);
}
function K(r) {
  return N(r, ArrayBuffer, Z);
}
function Q(r) {
  return k(r) || K(r);
}
function X(r) {
  if (!k(r))
    throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof r}\``);
}
function $(r) {
  if (!Q(r))
    throw new TypeError(
      `Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof r}\``,
    );
}
function ee(r, n) {
  if (r.length === 0) return new Uint8Array(0);
  n ??= r.reduce((f, g) => f + g.length, 0);
  const u = new Uint8Array(n);
  let e = 0;
  for (const f of r) (X(f), u.set(f, e), (e += f.length));
  return u;
}
const S = { utf8: new globalThis.TextDecoder("utf8") };
function re(r, n = "utf8") {
  return ($(r), (S[n] ??= new globalThis.TextDecoder(n)), S[n].decode(r));
}
function te(r) {
  if (typeof r != "string")
    throw new TypeError(`Expected \`string\`, got \`${typeof r}\``);
}
const ne = new globalThis.TextEncoder();
function oe(r) {
  return (te(r), ne.encode(r));
}
Array.from({ length: 256 }, (r, n) => n.toString(16).padStart(2, "0"));
function se(r) {
  const { byteLength: n } = r;
  if (n === 6) return r.getUint16(0) * 2 ** 32 + r.getUint32(2);
  if (n === 5) return r.getUint8(0) * 2 ** 32 + r.getUint32(1);
  if (n === 4) return r.getUint32(0);
  if (n === 3) return r.getUint8(0) * 2 ** 16 + r.getUint16(1);
  if (n === 2) return r.getUint16(0);
  if (n === 1) return r.getUint8(0);
}
var w = { exports: {} },
  O = { exports: {} },
  v,
  _;
function ie() {
  if (_) return v;
  _ = 1;
  var r = 1e3,
    n = r * 60,
    u = n * 60,
    e = u * 24,
    f = e * 7,
    g = e * 365.25;
  v = function (i, o) {
    o = o || {};
    var t = typeof i;
    if (t === "string" && i.length > 0) return h(i);
    if (t === "number" && isFinite(i)) return o.long ? s(i) : y(i);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(i),
    );
  };
  function h(i) {
    if (((i = String(i)), !(i.length > 100))) {
      var o =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          i,
        );
      if (o) {
        var t = parseFloat(o[1]),
          c = (o[2] || "ms").toLowerCase();
        switch (c) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return t * g;
          case "weeks":
          case "week":
          case "w":
            return t * f;
          case "days":
          case "day":
          case "d":
            return t * e;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return t * u;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return t * n;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return t * r;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return t;
          default:
            return;
        }
      }
    }
  }
  function y(i) {
    var o = Math.abs(i);
    return o >= e
      ? Math.round(i / e) + "d"
      : o >= u
        ? Math.round(i / u) + "h"
        : o >= n
          ? Math.round(i / n) + "m"
          : o >= r
            ? Math.round(i / r) + "s"
            : i + "ms";
  }
  function s(i) {
    var o = Math.abs(i);
    return o >= e
      ? d(i, o, e, "day")
      : o >= u
        ? d(i, o, u, "hour")
        : o >= n
          ? d(i, o, n, "minute")
          : o >= r
            ? d(i, o, r, "second")
            : i + " ms";
  }
  function d(i, o, t, c) {
    var a = o >= t * 1.5;
    return Math.round(i / t) + " " + c + (a ? "s" : "");
  }
  return v;
}
var T, B;
function G() {
  if (B) return T;
  B = 1;
  function r(n) {
    ((e.debug = e),
      (e.default = e),
      (e.coerce = d),
      (e.disable = y),
      (e.enable = g),
      (e.enabled = s),
      (e.humanize = ie()),
      (e.destroy = i),
      Object.keys(n).forEach((o) => {
        e[o] = n[o];
      }),
      (e.names = []),
      (e.skips = []),
      (e.formatters = {}));
    function u(o) {
      let t = 0;
      for (let c = 0; c < o.length; c++)
        ((t = (t << 5) - t + o.charCodeAt(c)), (t |= 0));
      return e.colors[Math.abs(t) % e.colors.length];
    }
    e.selectColor = u;
    function e(o) {
      let t,
        c = null,
        a,
        l;
      function C(...p) {
        if (!C.enabled) return;
        const m = C,
          F = Number(new Date()),
          P = F - (t || F);
        ((m.diff = P),
          (m.prev = t),
          (m.curr = F),
          (t = F),
          (p[0] = e.coerce(p[0])),
          typeof p[0] != "string" && p.unshift("%O"));
        let b = 0;
        ((p[0] = p[0].replace(/%([a-zA-Z%])/g, (E, z) => {
          if (E === "%%") return "%";
          b++;
          const U = e.formatters[z];
          if (typeof U == "function") {
            const V = p[b];
            ((E = U.call(m, V)), p.splice(b, 1), b--);
          }
          return E;
        })),
          e.formatArgs.call(m, p),
          (m.log || e.log).apply(m, p));
      }
      return (
        (C.namespace = o),
        (C.useColors = e.useColors()),
        (C.color = e.selectColor(o)),
        (C.extend = f),
        (C.destroy = e.destroy),
        Object.defineProperty(C, "enabled", {
          enumerable: !0,
          configurable: !1,
          get: () =>
            c !== null
              ? c
              : (a !== e.namespaces && ((a = e.namespaces), (l = e.enabled(o))),
                l),
          set: (p) => {
            c = p;
          },
        }),
        typeof e.init == "function" && e.init(C),
        C
      );
    }
    function f(o, t) {
      const c = e(this.namespace + (typeof t > "u" ? ":" : t) + o);
      return ((c.log = this.log), c);
    }
    function g(o) {
      (e.save(o), (e.namespaces = o), (e.names = []), (e.skips = []));
      const t = (typeof o == "string" ? o : "")
        .trim()
        .replace(/\s+/g, ",")
        .split(",")
        .filter(Boolean);
      for (const c of t)
        c[0] === "-" ? e.skips.push(c.slice(1)) : e.names.push(c);
    }
    function h(o, t) {
      let c = 0,
        a = 0,
        l = -1,
        C = 0;
      for (; c < o.length; )
        if (a < t.length && (t[a] === o[c] || t[a] === "*"))
          t[a] === "*" ? ((l = a), (C = c), a++) : (c++, a++);
        else if (l !== -1) ((a = l + 1), C++, (c = C));
        else return !1;
      for (; a < t.length && t[a] === "*"; ) a++;
      return a === t.length;
    }
    function y() {
      const o = [...e.names, ...e.skips.map((t) => "-" + t)].join(",");
      return (e.enable(""), o);
    }
    function s(o) {
      for (const t of e.skips) if (h(o, t)) return !1;
      for (const t of e.names) if (h(o, t)) return !0;
      return !1;
    }
    function d(o) {
      return o instanceof Error ? o.stack || o.message : o;
    }
    function i() {
      console.warn(
        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
      );
    }
    return (e.enable(e.load()), e);
  }
  return ((T = r), T);
}
var M;
function ce() {
  return (
    M ||
      ((M = 1),
      (function (r, n) {
        ((n.formatArgs = e),
          (n.save = f),
          (n.load = g),
          (n.useColors = u),
          (n.storage = h()),
          (n.destroy = (() => {
            let s = !1;
            return () => {
              s ||
                ((s = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
                ));
            };
          })()),
          (n.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]));
        function u() {
          if (
            typeof window < "u" &&
            window.process &&
            (window.process.type === "renderer" || window.process.__nwjs)
          )
            return !0;
          if (
            typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          let s;
          return (
            (typeof document < "u" &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            (typeof window < "u" &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            (typeof navigator < "u" &&
              navigator.userAgent &&
              (s = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
              parseInt(s[1], 10) >= 31) ||
            (typeof navigator < "u" &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }
        function e(s) {
          if (
            ((s[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              s[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              r.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const d = "color: " + this.color;
          s.splice(1, 0, d, "color: inherit");
          let i = 0,
            o = 0;
          (s[0].replace(/%[a-zA-Z%]/g, (t) => {
            t !== "%%" && (i++, t === "%c" && (o = i));
          }),
            s.splice(o, 0, d));
        }
        n.log = console.debug || console.log || (() => {});
        function f(s) {
          try {
            s ? n.storage.setItem("debug", s) : n.storage.removeItem("debug");
          } catch {}
        }
        function g() {
          let s;
          try {
            s = n.storage.getItem("debug") || n.storage.getItem("DEBUG");
          } catch {}
          return (
            !s &&
              typeof process < "u" &&
              "env" in process &&
              (s = process.env.DEBUG),
            s
          );
        }
        function h() {
          try {
            return localStorage;
          } catch {}
        }
        r.exports = G()(n);
        const { formatters: y } = r.exports;
        y.j = function (s) {
          try {
            return JSON.stringify(s);
          } catch (d) {
            return "[UnexpectedJSONParseError]: " + d.message;
          }
        };
      })(O, O.exports)),
    O.exports
  );
}
var A = { exports: {} },
  R,
  x;
function ue() {
  return (
    x ||
      ((x = 1),
      (R = (r, n = process.argv) => {
        const u = r.startsWith("-") ? "" : r.length === 1 ? "-" : "--",
          e = n.indexOf(u + r),
          f = n.indexOf("--");
        return e !== -1 && (f === -1 || e < f);
      })),
    R
  );
}
var I, q;
function ae() {
  if (q) return I;
  q = 1;
  const r = H,
    n = j,
    u = ue(),
    { env: e } = process;
  let f;
  (u("no-color") || u("no-colors") || u("color=false") || u("color=never")
    ? (f = 0)
    : (u("color") || u("colors") || u("color=true") || u("color=always")) &&
      (f = 1),
    "FORCE_COLOR" in e &&
      (e.FORCE_COLOR === "true"
        ? (f = 1)
        : e.FORCE_COLOR === "false"
          ? (f = 0)
          : (f =
              e.FORCE_COLOR.length === 0
                ? 1
                : Math.min(parseInt(e.FORCE_COLOR, 10), 3))));
  function g(s) {
    return s === 0
      ? !1
      : { level: s, hasBasic: !0, has256: s >= 2, has16m: s >= 3 };
  }
  function h(s, d) {
    if (f === 0) return 0;
    if (u("color=16m") || u("color=full") || u("color=truecolor")) return 3;
    if (u("color=256")) return 2;
    if (s && !d && f === void 0) return 0;
    const i = f || 0;
    if (e.TERM === "dumb") return i;
    if (process.platform === "win32") {
      const o = r.release().split(".");
      return Number(o[0]) >= 10 && Number(o[2]) >= 10586
        ? Number(o[2]) >= 14931
          ? 3
          : 2
        : 1;
    }
    if ("CI" in e)
      return [
        "TRAVIS",
        "CIRCLECI",
        "APPVEYOR",
        "GITLAB_CI",
        "GITHUB_ACTIONS",
        "BUILDKITE",
      ].some((o) => o in e) || e.CI_NAME === "codeship"
        ? 1
        : i;
    if ("TEAMCITY_VERSION" in e)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(e.TEAMCITY_VERSION) ? 1 : 0;
    if (e.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in e) {
      const o = parseInt((e.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (e.TERM_PROGRAM) {
        case "iTerm.app":
          return o >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(e.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
            e.TERM,
          ) || "COLORTERM" in e
        ? 1
        : i;
  }
  function y(s) {
    const d = h(s, s && s.isTTY);
    return g(d);
  }
  return (
    (I = {
      supportsColor: y,
      stdout: g(h(!0, n.isatty(1))),
      stderr: g(h(!0, n.isatty(2))),
    }),
    I
  );
}
var D;
function fe() {
  return (
    D ||
      ((D = 1),
      (function (r, n) {
        const u = j,
          e = Y;
        ((n.init = i),
          (n.log = y),
          (n.formatArgs = g),
          (n.save = s),
          (n.load = d),
          (n.useColors = f),
          (n.destroy = e.deprecate(
            () => {},
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
          )),
          (n.colors = [6, 2, 3, 4, 5, 1]));
        try {
          const t = ae();
          t &&
            (t.stderr || t).level >= 2 &&
            (n.colors = [
              20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57,
              62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99,
              112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164,
              165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185,
              196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
              209, 214, 215, 220, 221,
            ]);
        } catch {}
        n.inspectOpts = Object.keys(process.env)
          .filter((t) => /^debug_/i.test(t))
          .reduce((t, c) => {
            const a = c
              .substring(6)
              .toLowerCase()
              .replace(/_([a-z])/g, (C, p) => p.toUpperCase());
            let l = process.env[c];
            return (
              /^(yes|on|true|enabled)$/i.test(l)
                ? (l = !0)
                : /^(no|off|false|disabled)$/i.test(l)
                  ? (l = !1)
                  : l === "null"
                    ? (l = null)
                    : (l = Number(l)),
              (t[a] = l),
              t
            );
          }, {});
        function f() {
          return "colors" in n.inspectOpts
            ? !!n.inspectOpts.colors
            : u.isatty(process.stderr.fd);
        }
        function g(t) {
          const { namespace: c, useColors: a } = this;
          if (a) {
            const l = this.color,
              C = "\x1B[3" + (l < 8 ? l : "8;5;" + l),
              p = `  ${C};1m${c} \x1B[0m`;
            ((t[0] =
              p +
              t[0]
                .split(
                  `
`,
                )
                .join(
                  `
` + p,
                )),
              t.push(C + "m+" + r.exports.humanize(this.diff) + "\x1B[0m"));
          } else t[0] = h() + c + " " + t[0];
        }
        function h() {
          return n.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
        }
        function y(...t) {
          return process.stderr.write(
            e.formatWithOptions(n.inspectOpts, ...t) +
              `
`,
          );
        }
        function s(t) {
          t ? (process.env.DEBUG = t) : delete process.env.DEBUG;
        }
        function d() {
          return process.env.DEBUG;
        }
        function i(t) {
          t.inspectOpts = {};
          const c = Object.keys(n.inspectOpts);
          for (let a = 0; a < c.length; a++)
            t.inspectOpts[c[a]] = n.inspectOpts[c[a]];
        }
        r.exports = G()(n);
        const { formatters: o } = r.exports;
        ((o.o = function (t) {
          return (
            (this.inspectOpts.colors = this.useColors),
            e
              .inspect(t, this.inspectOpts)
              .split(
                `
`,
              )
              .map((c) => c.trim())
              .join(" ")
          );
        }),
          (o.O = function (t) {
            return (
              (this.inspectOpts.colors = this.useColors),
              e.inspect(t, this.inspectOpts)
            );
          }));
      })(A, A.exports)),
    A.exports
  );
}
var L;
function le() {
  return (
    L ||
      ((L = 1),
      typeof process > "u" ||
      process.type === "renderer" ||
      process.browser === !0 ||
      process.__nwjs
        ? (w.exports = ce())
        : (w.exports = fe())),
    w.exports
  );
}
exports.concatUint8Arrays = ee;
exports.getUintBE = se;
exports.requireSrc = le;
exports.stringToUint8Array = oe;
exports.uint8ArrayToString = re;
