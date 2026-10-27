"use strict";
(function () {
  try {
    var o =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    o.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var o =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      u = new o.Error().stack;
    u &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[u] = "b61bfd05-d25f-45c0-8122-e120bceb6790"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-b61bfd05-d25f-45c0-8122-e120bceb6790"));
  })();
} catch {}
const Z = require("./_commonjsHelpers-DJP3_Dvh.js");
var I = { exports: {} },
  P;
function ee() {
  return (
    P ||
      ((P = 1),
      (function (o) {
        function u(t) {
          return Array.isArray(t) ? t : [t];
        }
        const T = void 0,
          h = "",
          b = " ",
          R = "\\",
          G = /^\s+$/,
          D = /(?:[^\\]|^)\\$/,
          w = /^\\!/,
          k = /^\\#/,
          m = /\r?\n/g,
          v = /^\.{0,2}\/|^\.{1,2}$/,
          O = /\/$/,
          _ = "/";
        let C = "node-ignore";
        typeof Symbol < "u" && (C = Symbol.for("node-ignore"));
        const y = C,
          f = (t, e, r) => (Object.defineProperty(t, e, { value: r }), r),
          X = /([0-z])-([0-z])/g,
          x = () => !1,
          F = (t) =>
            t.replace(X, (e, r, s) =>
              r.charCodeAt(0) <= s.charCodeAt(0) ? e : h,
            ),
          H = (t) => {
            const { length: e } = t;
            return t.slice(0, e - (e % 2));
          },
          B = [
            [/^\uFEFF/, () => h],
            [
              /((?:\\\\)*?)(\\?\s+)$/,
              (t, e, r) => e + (r.indexOf("\\") === 0 ? b : h),
            ],
            [
              /(\\+?)\s/g,
              (t, e) => {
                const { length: r } = e;
                return e.slice(0, r - (r % 2)) + b;
              },
            ],
            [/[\\$.|*+(){^]/g, (t) => `\\${t}`],
            [/(?!\\)\?/g, () => "[^/]"],
            [/^\//, () => "^"],
            [/\//g, () => "\\/"],
            [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"],
            [
              /^(?=[^^])/,
              function () {
                return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
              },
            ],
            [
              /\\\/\\\*\\\*(?=\\\/|$)/g,
              (t, e, r) => (e + 6 < r.length ? "(?:\\/[^\\/]+)*" : "\\/.+"),
            ],
            [
              /(^|[^\\]+)(\\\*)+(?=.+)/g,
              (t, e, r) => {
                const s = r.replace(/\\\*/g, "[^\\/]*");
                return e + s;
              },
            ],
            [/\\\\\\(?=[$.|*+(){^])/g, () => R],
            [/\\\\/g, () => R],
            [
              /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
              (t, e, r, s, n) =>
                e === R
                  ? `\\[${r}${H(s)}${n}`
                  : n === "]" && s.length % 2 === 0
                    ? `[${F(r)}${s}]`
                    : "[]",
            ],
            [/(?:[^*])$/, (t) => (/\/$/.test(t) ? `${t}$` : `${t}(?=$|\\/$)`)],
          ],
          M = /(^|\\\/)?\\\*$/,
          l = "regex",
          E = "checkRegex",
          p = "_",
          W = {
            [l](t, e) {
              return `${e ? `${e}[^/]+` : "[^/]*"}(?=$|\\/$)`;
            },
            [E](t, e) {
              return `${e ? `${e}[^/]*` : "[^/]*"}(?=$|\\/$)`;
            },
          },
          j = (t) => B.reduce((e, [r, s]) => e.replace(r, s.bind(t)), t),
          g = (t) => typeof t == "string",
          K = (t) =>
            t && g(t) && !G.test(t) && !D.test(t) && t.indexOf("#") !== 0,
          z = (t) => t.split(m).filter(Boolean);
        class V {
          constructor(e, r, s, n, i, d) {
            ((this.pattern = e),
              (this.mark = r),
              (this.negative = i),
              f(this, "body", s),
              f(this, "ignoreCase", n),
              f(this, "regexPrefix", d));
          }
          get regex() {
            const e = p + l;
            return this[e] ? this[e] : this._make(l, e);
          }
          get checkRegex() {
            const e = p + E;
            return this[e] ? this[e] : this._make(E, e);
          }
          _make(e, r) {
            const s = this.regexPrefix.replace(M, W[e]),
              n = this.ignoreCase ? new RegExp(s, "i") : new RegExp(s);
            return f(this, r, n);
          }
        }
        const Y = ({ pattern: t, mark: e }, r) => {
          let s = !1,
            n = t;
          (n.indexOf("!") === 0 && ((s = !0), (n = n.substr(1))),
            (n = n.replace(w, "!").replace(k, "#")));
          const i = j(n);
          return new V(t, e, n, r, s, i);
        };
        class q {
          constructor(e) {
            ((this._ignoreCase = e), (this._rules = []));
          }
          _add(e) {
            if (e && e[y]) {
              ((this._rules = this._rules.concat(e._rules._rules)),
                (this._added = !0));
              return;
            }
            if ((g(e) && (e = { pattern: e }), K(e.pattern))) {
              const r = Y(e, this._ignoreCase);
              ((this._added = !0), this._rules.push(r));
            }
          }
          add(e) {
            return (
              (this._added = !1),
              u(g(e) ? z(e) : e).forEach(this._add, this),
              this._added
            );
          }
          test(e, r, s) {
            let n = !1,
              i = !1,
              d;
            this._rules.forEach(($) => {
              const { negative: a } = $;
              (i === a && n !== i) ||
                (a && !n && !i && !r) ||
                !$[s].test(e) ||
                ((n = !a), (i = a), (d = a ? T : $));
            });
            const N = { ignored: n, unignored: i };
            return (d && (N.rule = d), N);
          }
        }
        const U = (t, e) => {
            throw new e(t);
          },
          c = (t, e, r) =>
            g(t)
              ? t
                ? c.isNotRelative(t)
                  ? r(
                      `path should be a \`path.relative()\`d string, but got "${e}"`,
                      RangeError,
                    )
                  : !0
                : r("path must not be empty", TypeError)
              : r(`path must be a string, but got \`${e}\``, TypeError),
          L = (t) => v.test(t);
        ((c.isNotRelative = L), (c.convert = (t) => t));
        class J {
          constructor({
            ignorecase: e = !0,
            ignoreCase: r = e,
            allowRelativePaths: s = !1,
          } = {}) {
            (f(this, y, !0),
              (this._rules = new q(r)),
              (this._strictPathCheck = !s),
              this._initCache());
          }
          _initCache() {
            ((this._ignoreCache = Object.create(null)),
              (this._testCache = Object.create(null)));
          }
          add(e) {
            return (this._rules.add(e) && this._initCache(), this);
          }
          addPattern(e) {
            return this.add(e);
          }
          _test(e, r, s, n) {
            const i = e && c.convert(e);
            return (
              c(i, e, this._strictPathCheck ? U : x),
              this._t(i, r, s, n)
            );
          }
          checkIgnore(e) {
            if (!O.test(e)) return this.test(e);
            const r = e.split(_).filter(Boolean);
            if ((r.pop(), r.length)) {
              const s = this._t(r.join(_) + _, this._testCache, !0, r);
              if (s.ignored) return s;
            }
            return this._rules.test(e, !1, E);
          }
          _t(e, r, s, n) {
            if (e in r) return r[e];
            if ((n || (n = e.split(_).filter(Boolean)), n.pop(), !n.length))
              return (r[e] = this._rules.test(e, s, l));
            const i = this._t(n.join(_) + _, r, s, n);
            return (r[e] = i.ignored ? i : this._rules.test(e, s, l));
          }
          ignores(e) {
            return this._test(e, this._ignoreCache, !1).ignored;
          }
          createFilter() {
            return (e) => !this.ignores(e);
          }
          filter(e) {
            return u(e).filter(this.createFilter());
          }
          test(e) {
            return this._test(e, this._testCache, !0);
          }
        }
        const A = (t) => new J(t),
          Q = (t) => c(t && c.convert(t), t, x),
          S = () => {
            const t = (r) =>
              /^\\\\\?\\/.test(r) || /["<>|\u0000-\u001F]+/u.test(r)
                ? r
                : r.replace(/\\/g, "/");
            c.convert = t;
            const e = /^[a-z]:\//i;
            c.isNotRelative = (r) => e.test(r) || L(r);
          };
        (typeof process < "u" && process.platform === "win32" && S(),
          (o.exports = A),
          (A.default = A),
          (o.exports.isPathValid = Q),
          f(o.exports, Symbol.for("setupWindows"), S));
      })(I)),
    I.exports
  );
}
var te = ee();
const re = Z.getDefaultExportFromCjs(te);
exports.ignore = re;
