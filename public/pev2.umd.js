var T5 = Object.defineProperty;
var N5 = (Qt, t, cn) =>
  t in Qt ? T5(Qt, t, { enumerable: !0, configurable: !0, writable: !0, value: cn }) : (Qt[t] = cn);
var we = (Qt, t, cn) => (N5(Qt, typeof t != 'symbol' ? t + '' : t, cn), cn);
(function (Qt, t) {
  typeof exports == 'object' && typeof module < 'u'
    ? t(exports, require('vue'))
    : typeof define == 'function' && define.amd
      ? define(['exports', 'vue'], t)
      : ((Qt = typeof globalThis < 'u' ? globalThis : Qt || self), t((Qt.pev2 = {}), Qt.Vue));
})(this, function (Qt, t) {
  var fV,
    uV,
    dV,
    pV,
    hV,
    mV,
    EV,
    _V,
    gV,
    TV,
    NV,
    AV,
    yV,
    SV,
    bV,
    xV,
    OV,
    RV,
    CV,
    IV,
    LV,
    wV,
    vV,
    kV,
    DV,
    VV,
    MV,
    BV,
    PV,
    UV,
    $V,
    HV,
    FV,
    WV,
    zV,
    XV,
    GV,
    YV,
    KV,
    jm;
  ('use strict');
  var cn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {};
  function ua(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
  }
  var da = { exports: {} };
  /**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */ da.exports,
    (function (e, n) {
      (function () {
        var r,
          o = '4.17.21',
          s = 200,
          l = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
          c = 'Expected a function',
          f = 'Invalid `variable` option passed into `_.template`',
          d = '__lodash_hash_undefined__',
          m = 500,
          p = '__lodash_placeholder__',
          T = 1,
          N = 2,
          b = 4,
          R = 1,
          C = 2,
          B = 1,
          S = 2,
          V = 4,
          Y = 8,
          _ = 16,
          k = 32,
          O = 64,
          D = 128,
          L = 256,
          y = 512,
          K = 30,
          M = '...',
          H = 800,
          q = 16,
          U = 1,
          ee = 2,
          I = 3,
          z = 1 / 0,
          Q = 9007199254740991,
          oe = 17976931348623157e292,
          fe = 0 / 0,
          ne = 4294967295,
          te = ne - 1,
          de = ne >>> 1,
          j = [
            ['ary', D],
            ['bind', B],
            ['bindKey', S],
            ['curry', Y],
            ['curryRight', _],
            ['flip', y],
            ['partial', k],
            ['partialRight', O],
            ['rearg', L],
          ],
          X = '[object Arguments]',
          Z = '[object Array]',
          pe = '[object AsyncFunction]',
          le = '[object Boolean]',
          me = '[object Date]',
          ye = '[object DOMException]',
          xe = '[object Error]',
          Be = '[object Function]',
          Fe = '[object GeneratorFunction]',
          We = '[object Map]',
          Tt = '[object Number]',
          Nt = '[object Null]',
          G = '[object Object]',
          _e = '[object Promise]',
          ve = '[object Proxy]',
          Se = '[object RegExp]',
          $e = '[object Set]',
          et = '[object String]',
          ft = '[object Symbol]',
          Ot = '[object Undefined]',
          he = '[object WeakMap]',
          Ne = '[object WeakSet]',
          Le = '[object ArrayBuffer]',
          Pe = '[object DataView]',
          ut = '[object Float32Array]',
          Rt = '[object Float64Array]',
          ur = '[object Int8Array]',
          dr = '[object Int16Array]',
          ui = '[object Int32Array]',
          w = '[object Uint8Array]',
          re = '[object Uint8ClampedArray]',
          ue = '[object Uint16Array]',
          Oe = '[object Uint32Array]',
          ge = /\b__p \+= '';/g,
          Je = /\b(__p \+=) '' \+/g,
          it = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          kt = /&(?:amp|lt|gt|quot|#39);/g,
          vr = /[&<>"']/g,
          Ct = RegExp(kt.source),
          pr = RegExp(vr.source),
          Vn = /<%-([\s\S]+?)%>/g,
          Bt = /<%([\s\S]+?)%>/g,
          Xi = /<%=([\s\S]+?)%>/g,
          hr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          Mn = /^\w*$/,
          jV = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          Af = /[\\^$.*+?()[\]{}|]/g,
          qV = RegExp(Af.source),
          yf = /^\s+/,
          JV = /\s/,
          QV = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          ZV = /\{\n\/\* \[wrapped with (.+)\] \*/,
          eM = /,? & /,
          tM = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          nM = /[()=,{}\[\]\/\s]/,
          rM = /\\(\\)?/g,
          iM = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          qm = /\w*$/,
          oM = /^[-+]0x[0-9a-f]+$/i,
          aM = /^0b[01]+$/i,
          sM = /^\[object .+?Constructor\]$/,
          lM = /^0o[0-7]+$/i,
          cM = /^(?:0|[1-9]\d*)$/,
          fM = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          Cs = /($^)/,
          uM = /['\n\r\u2028\u2029\\]/g,
          Is = '\\ud800-\\udfff',
          dM = '\\u0300-\\u036f',
          pM = '\\ufe20-\\ufe2f',
          hM = '\\u20d0-\\u20ff',
          Jm = dM + pM + hM,
          Qm = '\\u2700-\\u27bf',
          Zm = 'a-z\\xdf-\\xf6\\xf8-\\xff',
          mM = '\\xac\\xb1\\xd7\\xf7',
          EM = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
          _M = '\\u2000-\\u206f',
          gM =
            ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          eE = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
          tE = '\\ufe0e\\ufe0f',
          nE = mM + EM + _M + gM,
          Sf = "['’]",
          TM = '[' + Is + ']',
          rE = '[' + nE + ']',
          Ls = '[' + Jm + ']',
          iE = '\\d+',
          NM = '[' + Qm + ']',
          oE = '[' + Zm + ']',
          aE = '[^' + Is + nE + iE + Qm + Zm + eE + ']',
          bf = '\\ud83c[\\udffb-\\udfff]',
          AM = '(?:' + Ls + '|' + bf + ')',
          sE = '[^' + Is + ']',
          xf = '(?:\\ud83c[\\udde6-\\uddff]){2}',
          Of = '[\\ud800-\\udbff][\\udc00-\\udfff]',
          Gi = '[' + eE + ']',
          lE = '\\u200d',
          cE = '(?:' + oE + '|' + aE + ')',
          yM = '(?:' + Gi + '|' + aE + ')',
          fE = '(?:' + Sf + '(?:d|ll|m|re|s|t|ve))?',
          uE = '(?:' + Sf + '(?:D|LL|M|RE|S|T|VE))?',
          dE = AM + '?',
          pE = '[' + tE + ']?',
          SM = '(?:' + lE + '(?:' + [sE, xf, Of].join('|') + ')' + pE + dE + ')*',
          bM = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
          xM = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
          hE = pE + dE + SM,
          OM = '(?:' + [NM, xf, Of].join('|') + ')' + hE,
          RM = '(?:' + [sE + Ls + '?', Ls, xf, Of, TM].join('|') + ')',
          CM = RegExp(Sf, 'g'),
          IM = RegExp(Ls, 'g'),
          Rf = RegExp(bf + '(?=' + bf + ')|' + RM + hE, 'g'),
          LM = RegExp(
            [
              Gi + '?' + oE + '+' + fE + '(?=' + [rE, Gi, '$'].join('|') + ')',
              yM + '+' + uE + '(?=' + [rE, Gi + cE, '$'].join('|') + ')',
              Gi + '?' + cE + '+' + fE,
              Gi + '+' + uE,
              xM,
              bM,
              iE,
              OM,
            ].join('|'),
            'g',
          ),
          wM = RegExp('[' + lE + Is + Jm + tE + ']'),
          vM = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          kM = [
            'Array',
            'Buffer',
            'DataView',
            'Date',
            'Error',
            'Float32Array',
            'Float64Array',
            'Function',
            'Int8Array',
            'Int16Array',
            'Int32Array',
            'Map',
            'Math',
            'Object',
            'Promise',
            'RegExp',
            'Set',
            'String',
            'Symbol',
            'TypeError',
            'Uint8Array',
            'Uint8ClampedArray',
            'Uint16Array',
            'Uint32Array',
            'WeakMap',
            '_',
            'clearTimeout',
            'isFinite',
            'parseInt',
            'setTimeout',
          ],
          DM = -1,
          ct = {};
        (ct[ut] = ct[Rt] = ct[ur] = ct[dr] = ct[ui] = ct[w] = ct[re] = ct[ue] = ct[Oe] = !0),
          (ct[X] =
            ct[Z] =
            ct[Le] =
            ct[le] =
            ct[Pe] =
            ct[me] =
            ct[xe] =
            ct[Be] =
            ct[We] =
            ct[Tt] =
            ct[G] =
            ct[Se] =
            ct[$e] =
            ct[et] =
            ct[he] =
              !1);
        var at = {};
        (at[X] =
          at[Z] =
          at[Le] =
          at[Pe] =
          at[le] =
          at[me] =
          at[ut] =
          at[Rt] =
          at[ur] =
          at[dr] =
          at[ui] =
          at[We] =
          at[Tt] =
          at[G] =
          at[Se] =
          at[$e] =
          at[et] =
          at[ft] =
          at[w] =
          at[re] =
          at[ue] =
          at[Oe] =
            !0),
          (at[xe] = at[Be] = at[he] = !1);
        var VM = {
            À: 'A',
            Á: 'A',
            Â: 'A',
            Ã: 'A',
            Ä: 'A',
            Å: 'A',
            à: 'a',
            á: 'a',
            â: 'a',
            ã: 'a',
            ä: 'a',
            å: 'a',
            Ç: 'C',
            ç: 'c',
            Ð: 'D',
            ð: 'd',
            È: 'E',
            É: 'E',
            Ê: 'E',
            Ë: 'E',
            è: 'e',
            é: 'e',
            ê: 'e',
            ë: 'e',
            Ì: 'I',
            Í: 'I',
            Î: 'I',
            Ï: 'I',
            ì: 'i',
            í: 'i',
            î: 'i',
            ï: 'i',
            Ñ: 'N',
            ñ: 'n',
            Ò: 'O',
            Ó: 'O',
            Ô: 'O',
            Õ: 'O',
            Ö: 'O',
            Ø: 'O',
            ò: 'o',
            ó: 'o',
            ô: 'o',
            õ: 'o',
            ö: 'o',
            ø: 'o',
            Ù: 'U',
            Ú: 'U',
            Û: 'U',
            Ü: 'U',
            ù: 'u',
            ú: 'u',
            û: 'u',
            ü: 'u',
            Ý: 'Y',
            ý: 'y',
            ÿ: 'y',
            Æ: 'Ae',
            æ: 'ae',
            Þ: 'Th',
            þ: 'th',
            ß: 'ss',
            Ā: 'A',
            Ă: 'A',
            Ą: 'A',
            ā: 'a',
            ă: 'a',
            ą: 'a',
            Ć: 'C',
            Ĉ: 'C',
            Ċ: 'C',
            Č: 'C',
            ć: 'c',
            ĉ: 'c',
            ċ: 'c',
            č: 'c',
            Ď: 'D',
            Đ: 'D',
            ď: 'd',
            đ: 'd',
            Ē: 'E',
            Ĕ: 'E',
            Ė: 'E',
            Ę: 'E',
            Ě: 'E',
            ē: 'e',
            ĕ: 'e',
            ė: 'e',
            ę: 'e',
            ě: 'e',
            Ĝ: 'G',
            Ğ: 'G',
            Ġ: 'G',
            Ģ: 'G',
            ĝ: 'g',
            ğ: 'g',
            ġ: 'g',
            ģ: 'g',
            Ĥ: 'H',
            Ħ: 'H',
            ĥ: 'h',
            ħ: 'h',
            Ĩ: 'I',
            Ī: 'I',
            Ĭ: 'I',
            Į: 'I',
            İ: 'I',
            ĩ: 'i',
            ī: 'i',
            ĭ: 'i',
            į: 'i',
            ı: 'i',
            Ĵ: 'J',
            ĵ: 'j',
            Ķ: 'K',
            ķ: 'k',
            ĸ: 'k',
            Ĺ: 'L',
            Ļ: 'L',
            Ľ: 'L',
            Ŀ: 'L',
            Ł: 'L',
            ĺ: 'l',
            ļ: 'l',
            ľ: 'l',
            ŀ: 'l',
            ł: 'l',
            Ń: 'N',
            Ņ: 'N',
            Ň: 'N',
            Ŋ: 'N',
            ń: 'n',
            ņ: 'n',
            ň: 'n',
            ŋ: 'n',
            Ō: 'O',
            Ŏ: 'O',
            Ő: 'O',
            ō: 'o',
            ŏ: 'o',
            ő: 'o',
            Ŕ: 'R',
            Ŗ: 'R',
            Ř: 'R',
            ŕ: 'r',
            ŗ: 'r',
            ř: 'r',
            Ś: 'S',
            Ŝ: 'S',
            Ş: 'S',
            Š: 'S',
            ś: 's',
            ŝ: 's',
            ş: 's',
            š: 's',
            Ţ: 'T',
            Ť: 'T',
            Ŧ: 'T',
            ţ: 't',
            ť: 't',
            ŧ: 't',
            Ũ: 'U',
            Ū: 'U',
            Ŭ: 'U',
            Ů: 'U',
            Ű: 'U',
            Ų: 'U',
            ũ: 'u',
            ū: 'u',
            ŭ: 'u',
            ů: 'u',
            ű: 'u',
            ų: 'u',
            Ŵ: 'W',
            ŵ: 'w',
            Ŷ: 'Y',
            ŷ: 'y',
            Ÿ: 'Y',
            Ź: 'Z',
            Ż: 'Z',
            Ž: 'Z',
            ź: 'z',
            ż: 'z',
            ž: 'z',
            Ĳ: 'IJ',
            ĳ: 'ij',
            Œ: 'Oe',
            œ: 'oe',
            ŉ: "'n",
            ſ: 's',
          },
          MM = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
          BM = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" },
          PM = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' },
          UM = parseFloat,
          $M = parseInt,
          mE = typeof cn == 'object' && cn && cn.Object === Object && cn,
          HM = typeof self == 'object' && self && self.Object === Object && self,
          It = mE || HM || Function('return this')(),
          Cf = n && !n.nodeType && n,
          di = Cf && !0 && e && !e.nodeType && e,
          EE = di && di.exports === Cf,
          If = EE && mE.process,
          _n = (function () {
            try {
              var F = di && di.require && di.require('util').types;
              return F || (If && If.binding && If.binding('util'));
            } catch {}
          })(),
          _E = _n && _n.isArrayBuffer,
          gE = _n && _n.isDate,
          TE = _n && _n.isMap,
          NE = _n && _n.isRegExp,
          AE = _n && _n.isSet,
          yE = _n && _n.isTypedArray;
        function nn(F, ie, J) {
          switch (J.length) {
            case 0:
              return F.call(ie);
            case 1:
              return F.call(ie, J[0]);
            case 2:
              return F.call(ie, J[0], J[1]);
            case 3:
              return F.call(ie, J[0], J[1], J[2]);
          }
          return F.apply(ie, J);
        }
        function FM(F, ie, J, Ae) {
          for (var Ue = -1, tt = F == null ? 0 : F.length; ++Ue < tt; ) {
            var At = F[Ue];
            ie(Ae, At, J(At), F);
          }
          return Ae;
        }
        function gn(F, ie) {
          for (var J = -1, Ae = F == null ? 0 : F.length; ++J < Ae && ie(F[J], J, F) !== !1; );
          return F;
        }
        function WM(F, ie) {
          for (var J = F == null ? 0 : F.length; J-- && ie(F[J], J, F) !== !1; );
          return F;
        }
        function SE(F, ie) {
          for (var J = -1, Ae = F == null ? 0 : F.length; ++J < Ae; ) if (!ie(F[J], J, F)) return !1;
          return !0;
        }
        function kr(F, ie) {
          for (var J = -1, Ae = F == null ? 0 : F.length, Ue = 0, tt = []; ++J < Ae; ) {
            var At = F[J];
            ie(At, J, F) && (tt[Ue++] = At);
          }
          return tt;
        }
        function ws(F, ie) {
          var J = F == null ? 0 : F.length;
          return !!J && Yi(F, ie, 0) > -1;
        }
        function Lf(F, ie, J) {
          for (var Ae = -1, Ue = F == null ? 0 : F.length; ++Ae < Ue; ) if (J(ie, F[Ae])) return !0;
          return !1;
        }
        function dt(F, ie) {
          for (var J = -1, Ae = F == null ? 0 : F.length, Ue = Array(Ae); ++J < Ae; ) Ue[J] = ie(F[J], J, F);
          return Ue;
        }
        function Dr(F, ie) {
          for (var J = -1, Ae = ie.length, Ue = F.length; ++J < Ae; ) F[Ue + J] = ie[J];
          return F;
        }
        function wf(F, ie, J, Ae) {
          var Ue = -1,
            tt = F == null ? 0 : F.length;
          for (Ae && tt && (J = F[++Ue]); ++Ue < tt; ) J = ie(J, F[Ue], Ue, F);
          return J;
        }
        function zM(F, ie, J, Ae) {
          var Ue = F == null ? 0 : F.length;
          for (Ae && Ue && (J = F[--Ue]); Ue--; ) J = ie(J, F[Ue], Ue, F);
          return J;
        }
        function vf(F, ie) {
          for (var J = -1, Ae = F == null ? 0 : F.length; ++J < Ae; ) if (ie(F[J], J, F)) return !0;
          return !1;
        }
        var XM = kf('length');
        function GM(F) {
          return F.split('');
        }
        function YM(F) {
          return F.match(tM) || [];
        }
        function bE(F, ie, J) {
          var Ae;
          return (
            J(F, function (Ue, tt, At) {
              if (ie(Ue, tt, At)) return (Ae = tt), !1;
            }),
            Ae
          );
        }
        function vs(F, ie, J, Ae) {
          for (var Ue = F.length, tt = J + (Ae ? 1 : -1); Ae ? tt-- : ++tt < Ue; ) if (ie(F[tt], tt, F)) return tt;
          return -1;
        }
        function Yi(F, ie, J) {
          return ie === ie ? oB(F, ie, J) : vs(F, xE, J);
        }
        function KM(F, ie, J, Ae) {
          for (var Ue = J - 1, tt = F.length; ++Ue < tt; ) if (Ae(F[Ue], ie)) return Ue;
          return -1;
        }
        function xE(F) {
          return F !== F;
        }
        function OE(F, ie) {
          var J = F == null ? 0 : F.length;
          return J ? Vf(F, ie) / J : fe;
        }
        function kf(F) {
          return function (ie) {
            return ie == null ? r : ie[F];
          };
        }
        function Df(F) {
          return function (ie) {
            return F == null ? r : F[ie];
          };
        }
        function RE(F, ie, J, Ae, Ue) {
          return (
            Ue(F, function (tt, At, ot) {
              J = Ae ? ((Ae = !1), tt) : ie(J, tt, At, ot);
            }),
            J
          );
        }
        function jM(F, ie) {
          var J = F.length;
          for (F.sort(ie); J--; ) F[J] = F[J].value;
          return F;
        }
        function Vf(F, ie) {
          for (var J, Ae = -1, Ue = F.length; ++Ae < Ue; ) {
            var tt = ie(F[Ae]);
            tt !== r && (J = J === r ? tt : J + tt);
          }
          return J;
        }
        function Mf(F, ie) {
          for (var J = -1, Ae = Array(F); ++J < F; ) Ae[J] = ie(J);
          return Ae;
        }
        function qM(F, ie) {
          return dt(ie, function (J) {
            return [J, F[J]];
          });
        }
        function CE(F) {
          return F && F.slice(0, vE(F) + 1).replace(yf, '');
        }
        function rn(F) {
          return function (ie) {
            return F(ie);
          };
        }
        function Bf(F, ie) {
          return dt(ie, function (J) {
            return F[J];
          });
        }
        function qo(F, ie) {
          return F.has(ie);
        }
        function IE(F, ie) {
          for (var J = -1, Ae = F.length; ++J < Ae && Yi(ie, F[J], 0) > -1; );
          return J;
        }
        function LE(F, ie) {
          for (var J = F.length; J-- && Yi(ie, F[J], 0) > -1; );
          return J;
        }
        function JM(F, ie) {
          for (var J = F.length, Ae = 0; J--; ) F[J] === ie && ++Ae;
          return Ae;
        }
        var QM = Df(VM),
          ZM = Df(MM);
        function eB(F) {
          return '\\' + PM[F];
        }
        function tB(F, ie) {
          return F == null ? r : F[ie];
        }
        function Ki(F) {
          return wM.test(F);
        }
        function nB(F) {
          return vM.test(F);
        }
        function rB(F) {
          for (var ie, J = []; !(ie = F.next()).done; ) J.push(ie.value);
          return J;
        }
        function Pf(F) {
          var ie = -1,
            J = Array(F.size);
          return (
            F.forEach(function (Ae, Ue) {
              J[++ie] = [Ue, Ae];
            }),
            J
          );
        }
        function wE(F, ie) {
          return function (J) {
            return F(ie(J));
          };
        }
        function Vr(F, ie) {
          for (var J = -1, Ae = F.length, Ue = 0, tt = []; ++J < Ae; ) {
            var At = F[J];
            (At === ie || At === p) && ((F[J] = p), (tt[Ue++] = J));
          }
          return tt;
        }
        function ks(F) {
          var ie = -1,
            J = Array(F.size);
          return (
            F.forEach(function (Ae) {
              J[++ie] = Ae;
            }),
            J
          );
        }
        function iB(F) {
          var ie = -1,
            J = Array(F.size);
          return (
            F.forEach(function (Ae) {
              J[++ie] = [Ae, Ae];
            }),
            J
          );
        }
        function oB(F, ie, J) {
          for (var Ae = J - 1, Ue = F.length; ++Ae < Ue; ) if (F[Ae] === ie) return Ae;
          return -1;
        }
        function aB(F, ie, J) {
          for (var Ae = J + 1; Ae--; ) if (F[Ae] === ie) return Ae;
          return Ae;
        }
        function ji(F) {
          return Ki(F) ? lB(F) : XM(F);
        }
        function Bn(F) {
          return Ki(F) ? cB(F) : GM(F);
        }
        function vE(F) {
          for (var ie = F.length; ie-- && JV.test(F.charAt(ie)); );
          return ie;
        }
        var sB = Df(BM);
        function lB(F) {
          for (var ie = (Rf.lastIndex = 0); Rf.test(F); ) ++ie;
          return ie;
        }
        function cB(F) {
          return F.match(Rf) || [];
        }
        function fB(F) {
          return F.match(LM) || [];
        }
        var uB = function F(ie) {
            ie = ie == null ? It : qi.defaults(It.Object(), ie, qi.pick(It, kM));
            var J = ie.Array,
              Ae = ie.Date,
              Ue = ie.Error,
              tt = ie.Function,
              At = ie.Math,
              ot = ie.Object,
              Uf = ie.RegExp,
              dB = ie.String,
              Tn = ie.TypeError,
              Ds = J.prototype,
              pB = tt.prototype,
              Ji = ot.prototype,
              Vs = ie['__core-js_shared__'],
              Ms = pB.toString,
              rt = Ji.hasOwnProperty,
              hB = 0,
              kE = (function () {
                var i = /[^.]+$/.exec((Vs && Vs.keys && Vs.keys.IE_PROTO) || '');
                return i ? 'Symbol(src)_1.' + i : '';
              })(),
              Bs = Ji.toString,
              mB = Ms.call(ot),
              EB = It._,
              _B = Uf(
                '^' +
                  Ms.call(rt)
                    .replace(Af, '\\$&')
                    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                  '$',
              ),
              Ps = EE ? ie.Buffer : r,
              Mr = ie.Symbol,
              Us = ie.Uint8Array,
              DE = Ps ? Ps.allocUnsafe : r,
              $s = wE(ot.getPrototypeOf, ot),
              VE = ot.create,
              ME = Ji.propertyIsEnumerable,
              Hs = Ds.splice,
              BE = Mr ? Mr.isConcatSpreadable : r,
              Jo = Mr ? Mr.iterator : r,
              pi = Mr ? Mr.toStringTag : r,
              Fs = (function () {
                try {
                  var i = gi(ot, 'defineProperty');
                  return i({}, '', {}), i;
                } catch {}
              })(),
              gB = ie.clearTimeout !== It.clearTimeout && ie.clearTimeout,
              TB = Ae && Ae.now !== It.Date.now && Ae.now,
              NB = ie.setTimeout !== It.setTimeout && ie.setTimeout,
              Ws = At.ceil,
              zs = At.floor,
              $f = ot.getOwnPropertySymbols,
              AB = Ps ? Ps.isBuffer : r,
              PE = ie.isFinite,
              yB = Ds.join,
              SB = wE(ot.keys, ot),
              yt = At.max,
              Dt = At.min,
              bB = Ae.now,
              xB = ie.parseInt,
              UE = At.random,
              OB = Ds.reverse,
              Hf = gi(ie, 'DataView'),
              Qo = gi(ie, 'Map'),
              Ff = gi(ie, 'Promise'),
              Qi = gi(ie, 'Set'),
              Zo = gi(ie, 'WeakMap'),
              ea = gi(ot, 'create'),
              Xs = Zo && new Zo(),
              Zi = {},
              RB = Ti(Hf),
              CB = Ti(Qo),
              IB = Ti(Ff),
              LB = Ti(Qi),
              wB = Ti(Zo),
              Gs = Mr ? Mr.prototype : r,
              ta = Gs ? Gs.valueOf : r,
              $E = Gs ? Gs.toString : r;
            function A(i) {
              if (mt(i) && !He(i) && !(i instanceof Ke)) {
                if (i instanceof Nn) return i;
                if (rt.call(i, '__wrapped__')) return H_(i);
              }
              return new Nn(i);
            }
            var eo = (function () {
              function i() {}
              return function (a) {
                if (!pt(a)) return {};
                if (VE) return VE(a);
                i.prototype = a;
                var u = new i();
                return (i.prototype = r), u;
              };
            })();
            function Ys() {}
            function Nn(i, a) {
              (this.__wrapped__ = i),
                (this.__actions__ = []),
                (this.__chain__ = !!a),
                (this.__index__ = 0),
                (this.__values__ = r);
            }
            (A.templateSettings = { escape: Vn, evaluate: Bt, interpolate: Xi, variable: '', imports: { _: A } }),
              (A.prototype = Ys.prototype),
              (A.prototype.constructor = A),
              (Nn.prototype = eo(Ys.prototype)),
              (Nn.prototype.constructor = Nn);
            function Ke(i) {
              (this.__wrapped__ = i),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = ne),
                (this.__views__ = []);
            }
            function vB() {
              var i = new Ke(this.__wrapped__);
              return (
                (i.__actions__ = Kt(this.__actions__)),
                (i.__dir__ = this.__dir__),
                (i.__filtered__ = this.__filtered__),
                (i.__iteratees__ = Kt(this.__iteratees__)),
                (i.__takeCount__ = this.__takeCount__),
                (i.__views__ = Kt(this.__views__)),
                i
              );
            }
            function kB() {
              if (this.__filtered__) {
                var i = new Ke(this);
                (i.__dir__ = -1), (i.__filtered__ = !0);
              } else (i = this.clone()), (i.__dir__ *= -1);
              return i;
            }
            function DB() {
              var i = this.__wrapped__.value(),
                a = this.__dir__,
                u = He(i),
                h = a < 0,
                g = u ? i.length : 0,
                x = GP(0, g, this.__views__),
                v = x.start,
                P = x.end,
                W = P - v,
                ae = h ? P : v - 1,
                se = this.__iteratees__,
                ce = se.length,
                Ee = 0,
                Ce = Dt(W, this.__takeCount__);
              if (!u || (!h && g == W && Ce == W)) return f_(i, this.__actions__);
              var De = [];
              e: for (; W-- && Ee < Ce; ) {
                ae += a;
                for (var Xe = -1, Ve = i[ae]; ++Xe < ce; ) {
                  var Ye = se[Xe],
                    je = Ye.iteratee,
                    sn = Ye.type,
                    $t = je(Ve);
                  if (sn == ee) Ve = $t;
                  else if (!$t) {
                    if (sn == U) continue e;
                    break e;
                  }
                }
                De[Ee++] = Ve;
              }
              return De;
            }
            (Ke.prototype = eo(Ys.prototype)), (Ke.prototype.constructor = Ke);
            function hi(i) {
              var a = -1,
                u = i == null ? 0 : i.length;
              for (this.clear(); ++a < u; ) {
                var h = i[a];
                this.set(h[0], h[1]);
              }
            }
            function VB() {
              (this.__data__ = ea ? ea(null) : {}), (this.size = 0);
            }
            function MB(i) {
              var a = this.has(i) && delete this.__data__[i];
              return (this.size -= a ? 1 : 0), a;
            }
            function BB(i) {
              var a = this.__data__;
              if (ea) {
                var u = a[i];
                return u === d ? r : u;
              }
              return rt.call(a, i) ? a[i] : r;
            }
            function PB(i) {
              var a = this.__data__;
              return ea ? a[i] !== r : rt.call(a, i);
            }
            function UB(i, a) {
              var u = this.__data__;
              return (this.size += this.has(i) ? 0 : 1), (u[i] = ea && a === r ? d : a), this;
            }
            (hi.prototype.clear = VB),
              (hi.prototype.delete = MB),
              (hi.prototype.get = BB),
              (hi.prototype.has = PB),
              (hi.prototype.set = UB);
            function mr(i) {
              var a = -1,
                u = i == null ? 0 : i.length;
              for (this.clear(); ++a < u; ) {
                var h = i[a];
                this.set(h[0], h[1]);
              }
            }
            function $B() {
              (this.__data__ = []), (this.size = 0);
            }
            function HB(i) {
              var a = this.__data__,
                u = Ks(a, i);
              if (u < 0) return !1;
              var h = a.length - 1;
              return u == h ? a.pop() : Hs.call(a, u, 1), --this.size, !0;
            }
            function FB(i) {
              var a = this.__data__,
                u = Ks(a, i);
              return u < 0 ? r : a[u][1];
            }
            function WB(i) {
              return Ks(this.__data__, i) > -1;
            }
            function zB(i, a) {
              var u = this.__data__,
                h = Ks(u, i);
              return h < 0 ? (++this.size, u.push([i, a])) : (u[h][1] = a), this;
            }
            (mr.prototype.clear = $B),
              (mr.prototype.delete = HB),
              (mr.prototype.get = FB),
              (mr.prototype.has = WB),
              (mr.prototype.set = zB);
            function Er(i) {
              var a = -1,
                u = i == null ? 0 : i.length;
              for (this.clear(); ++a < u; ) {
                var h = i[a];
                this.set(h[0], h[1]);
              }
            }
            function XB() {
              (this.size = 0), (this.__data__ = { hash: new hi(), map: new (Qo || mr)(), string: new hi() });
            }
            function GB(i) {
              var a = al(this, i).delete(i);
              return (this.size -= a ? 1 : 0), a;
            }
            function YB(i) {
              return al(this, i).get(i);
            }
            function KB(i) {
              return al(this, i).has(i);
            }
            function jB(i, a) {
              var u = al(this, i),
                h = u.size;
              return u.set(i, a), (this.size += u.size == h ? 0 : 1), this;
            }
            (Er.prototype.clear = XB),
              (Er.prototype.delete = GB),
              (Er.prototype.get = YB),
              (Er.prototype.has = KB),
              (Er.prototype.set = jB);
            function mi(i) {
              var a = -1,
                u = i == null ? 0 : i.length;
              for (this.__data__ = new Er(); ++a < u; ) this.add(i[a]);
            }
            function qB(i) {
              return this.__data__.set(i, d), this;
            }
            function JB(i) {
              return this.__data__.has(i);
            }
            (mi.prototype.add = mi.prototype.push = qB), (mi.prototype.has = JB);
            function Pn(i) {
              var a = (this.__data__ = new mr(i));
              this.size = a.size;
            }
            function QB() {
              (this.__data__ = new mr()), (this.size = 0);
            }
            function ZB(i) {
              var a = this.__data__,
                u = a.delete(i);
              return (this.size = a.size), u;
            }
            function eP(i) {
              return this.__data__.get(i);
            }
            function tP(i) {
              return this.__data__.has(i);
            }
            function nP(i, a) {
              var u = this.__data__;
              if (u instanceof mr) {
                var h = u.__data__;
                if (!Qo || h.length < s - 1) return h.push([i, a]), (this.size = ++u.size), this;
                u = this.__data__ = new Er(h);
              }
              return u.set(i, a), (this.size = u.size), this;
            }
            (Pn.prototype.clear = QB),
              (Pn.prototype.delete = ZB),
              (Pn.prototype.get = eP),
              (Pn.prototype.has = tP),
              (Pn.prototype.set = nP);
            function HE(i, a) {
              var u = He(i),
                h = !u && Ni(i),
                g = !u && !h && Hr(i),
                x = !u && !h && !g && io(i),
                v = u || h || g || x,
                P = v ? Mf(i.length, dB) : [],
                W = P.length;
              for (var ae in i)
                (a || rt.call(i, ae)) &&
                  !(
                    v &&
                    (ae == 'length' ||
                      (g && (ae == 'offset' || ae == 'parent')) ||
                      (x && (ae == 'buffer' || ae == 'byteLength' || ae == 'byteOffset')) ||
                      Nr(ae, W))
                  ) &&
                  P.push(ae);
              return P;
            }
            function FE(i) {
              var a = i.length;
              return a ? i[Zf(0, a - 1)] : r;
            }
            function rP(i, a) {
              return sl(Kt(i), Ei(a, 0, i.length));
            }
            function iP(i) {
              return sl(Kt(i));
            }
            function Wf(i, a, u) {
              ((u !== r && !Un(i[a], u)) || (u === r && !(a in i))) && _r(i, a, u);
            }
            function na(i, a, u) {
              var h = i[a];
              (!(rt.call(i, a) && Un(h, u)) || (u === r && !(a in i))) && _r(i, a, u);
            }
            function Ks(i, a) {
              for (var u = i.length; u--; ) if (Un(i[u][0], a)) return u;
              return -1;
            }
            function oP(i, a, u, h) {
              return (
                Br(i, function (g, x, v) {
                  a(h, g, u(g), v);
                }),
                h
              );
            }
            function WE(i, a) {
              return i && er(a, bt(a), i);
            }
            function aP(i, a) {
              return i && er(a, qt(a), i);
            }
            function _r(i, a, u) {
              a == '__proto__' && Fs
                ? Fs(i, a, { configurable: !0, enumerable: !0, value: u, writable: !0 })
                : (i[a] = u);
            }
            function zf(i, a) {
              for (var u = -1, h = a.length, g = J(h), x = i == null; ++u < h; ) g[u] = x ? r : bu(i, a[u]);
              return g;
            }
            function Ei(i, a, u) {
              return i === i && (u !== r && (i = i <= u ? i : u), a !== r && (i = i >= a ? i : a)), i;
            }
            function An(i, a, u, h, g, x) {
              var v,
                P = a & T,
                W = a & N,
                ae = a & b;
              if ((u && (v = g ? u(i, h, g, x) : u(i)), v !== r)) return v;
              if (!pt(i)) return i;
              var se = He(i);
              if (se) {
                if (((v = KP(i)), !P)) return Kt(i, v);
              } else {
                var ce = Vt(i),
                  Ee = ce == Be || ce == Fe;
                if (Hr(i)) return p_(i, P);
                if (ce == G || ce == X || (Ee && !g)) {
                  if (((v = W || Ee ? {} : v_(i)), !P)) return W ? BP(i, aP(v, i)) : MP(i, WE(v, i));
                } else {
                  if (!at[ce]) return g ? i : {};
                  v = jP(i, ce, P);
                }
              }
              x || (x = new Pn());
              var Ce = x.get(i);
              if (Ce) return Ce;
              x.set(i, v),
                sg(i)
                  ? i.forEach(function (Ve) {
                      v.add(An(Ve, a, u, Ve, i, x));
                    })
                  : og(i) &&
                    i.forEach(function (Ve, Ye) {
                      v.set(Ye, An(Ve, a, u, Ye, i, x));
                    });
              var De = ae ? (W ? fu : cu) : W ? qt : bt,
                Xe = se ? r : De(i);
              return (
                gn(Xe || i, function (Ve, Ye) {
                  Xe && ((Ye = Ve), (Ve = i[Ye])), na(v, Ye, An(Ve, a, u, Ye, i, x));
                }),
                v
              );
            }
            function sP(i) {
              var a = bt(i);
              return function (u) {
                return zE(u, i, a);
              };
            }
            function zE(i, a, u) {
              var h = u.length;
              if (i == null) return !h;
              for (i = ot(i); h--; ) {
                var g = u[h],
                  x = a[g],
                  v = i[g];
                if ((v === r && !(g in i)) || !x(v)) return !1;
              }
              return !0;
            }
            function XE(i, a, u) {
              if (typeof i != 'function') throw new Tn(c);
              return ca(function () {
                i.apply(r, u);
              }, a);
            }
            function ra(i, a, u, h) {
              var g = -1,
                x = ws,
                v = !0,
                P = i.length,
                W = [],
                ae = a.length;
              if (!P) return W;
              u && (a = dt(a, rn(u))),
                h ? ((x = Lf), (v = !1)) : a.length >= s && ((x = qo), (v = !1), (a = new mi(a)));
              e: for (; ++g < P; ) {
                var se = i[g],
                  ce = u == null ? se : u(se);
                if (((se = h || se !== 0 ? se : 0), v && ce === ce)) {
                  for (var Ee = ae; Ee--; ) if (a[Ee] === ce) continue e;
                  W.push(se);
                } else x(a, ce, h) || W.push(se);
              }
              return W;
            }
            var Br = g_(Zn),
              GE = g_(Gf, !0);
            function lP(i, a) {
              var u = !0;
              return (
                Br(i, function (h, g, x) {
                  return (u = !!a(h, g, x)), u;
                }),
                u
              );
            }
            function js(i, a, u) {
              for (var h = -1, g = i.length; ++h < g; ) {
                var x = i[h],
                  v = a(x);
                if (v != null && (P === r ? v === v && !an(v) : u(v, P)))
                  var P = v,
                    W = x;
              }
              return W;
            }
            function cP(i, a, u, h) {
              var g = i.length;
              for (
                u = ze(u),
                  u < 0 && (u = -u > g ? 0 : g + u),
                  h = h === r || h > g ? g : ze(h),
                  h < 0 && (h += g),
                  h = u > h ? 0 : cg(h);
                u < h;

              )
                i[u++] = a;
              return i;
            }
            function YE(i, a) {
              var u = [];
              return (
                Br(i, function (h, g, x) {
                  a(h, g, x) && u.push(h);
                }),
                u
              );
            }
            function Lt(i, a, u, h, g) {
              var x = -1,
                v = i.length;
              for (u || (u = JP), g || (g = []); ++x < v; ) {
                var P = i[x];
                a > 0 && u(P) ? (a > 1 ? Lt(P, a - 1, u, h, g) : Dr(g, P)) : h || (g[g.length] = P);
              }
              return g;
            }
            var Xf = T_(),
              KE = T_(!0);
            function Zn(i, a) {
              return i && Xf(i, a, bt);
            }
            function Gf(i, a) {
              return i && KE(i, a, bt);
            }
            function qs(i, a) {
              return kr(a, function (u) {
                return Ar(i[u]);
              });
            }
            function _i(i, a) {
              a = Ur(a, i);
              for (var u = 0, h = a.length; i != null && u < h; ) i = i[tr(a[u++])];
              return u && u == h ? i : r;
            }
            function jE(i, a, u) {
              var h = a(i);
              return He(i) ? h : Dr(h, u(i));
            }
            function Pt(i) {
              return i == null ? (i === r ? Ot : Nt) : pi && pi in ot(i) ? XP(i) : i3(i);
            }
            function Yf(i, a) {
              return i > a;
            }
            function fP(i, a) {
              return i != null && rt.call(i, a);
            }
            function uP(i, a) {
              return i != null && a in ot(i);
            }
            function dP(i, a, u) {
              return i >= Dt(a, u) && i < yt(a, u);
            }
            function Kf(i, a, u) {
              for (var h = u ? Lf : ws, g = i[0].length, x = i.length, v = x, P = J(x), W = 1 / 0, ae = []; v--; ) {
                var se = i[v];
                v && a && (se = dt(se, rn(a))),
                  (W = Dt(se.length, W)),
                  (P[v] = !u && (a || (g >= 120 && se.length >= 120)) ? new mi(v && se) : r);
              }
              se = i[0];
              var ce = -1,
                Ee = P[0];
              e: for (; ++ce < g && ae.length < W; ) {
                var Ce = se[ce],
                  De = a ? a(Ce) : Ce;
                if (((Ce = u || Ce !== 0 ? Ce : 0), !(Ee ? qo(Ee, De) : h(ae, De, u)))) {
                  for (v = x; --v; ) {
                    var Xe = P[v];
                    if (!(Xe ? qo(Xe, De) : h(i[v], De, u))) continue e;
                  }
                  Ee && Ee.push(De), ae.push(Ce);
                }
              }
              return ae;
            }
            function pP(i, a, u, h) {
              return (
                Zn(i, function (g, x, v) {
                  a(h, u(g), x, v);
                }),
                h
              );
            }
            function ia(i, a, u) {
              (a = Ur(a, i)), (i = M_(i, a));
              var h = i == null ? i : i[tr(Sn(a))];
              return h == null ? r : nn(h, i, u);
            }
            function qE(i) {
              return mt(i) && Pt(i) == X;
            }
            function hP(i) {
              return mt(i) && Pt(i) == Le;
            }
            function mP(i) {
              return mt(i) && Pt(i) == me;
            }
            function oa(i, a, u, h, g) {
              return i === a
                ? !0
                : i == null || a == null || (!mt(i) && !mt(a))
                  ? i !== i && a !== a
                  : EP(i, a, u, h, oa, g);
            }
            function EP(i, a, u, h, g, x) {
              var v = He(i),
                P = He(a),
                W = v ? Z : Vt(i),
                ae = P ? Z : Vt(a);
              (W = W == X ? G : W), (ae = ae == X ? G : ae);
              var se = W == G,
                ce = ae == G,
                Ee = W == ae;
              if (Ee && Hr(i)) {
                if (!Hr(a)) return !1;
                (v = !0), (se = !1);
              }
              if (Ee && !se) return x || (x = new Pn()), v || io(i) ? I_(i, a, u, h, g, x) : WP(i, a, W, u, h, g, x);
              if (!(u & R)) {
                var Ce = se && rt.call(i, '__wrapped__'),
                  De = ce && rt.call(a, '__wrapped__');
                if (Ce || De) {
                  var Xe = Ce ? i.value() : i,
                    Ve = De ? a.value() : a;
                  return x || (x = new Pn()), g(Xe, Ve, u, h, x);
                }
              }
              return Ee ? (x || (x = new Pn()), zP(i, a, u, h, g, x)) : !1;
            }
            function _P(i) {
              return mt(i) && Vt(i) == We;
            }
            function jf(i, a, u, h) {
              var g = u.length,
                x = g,
                v = !h;
              if (i == null) return !x;
              for (i = ot(i); g--; ) {
                var P = u[g];
                if (v && P[2] ? P[1] !== i[P[0]] : !(P[0] in i)) return !1;
              }
              for (; ++g < x; ) {
                P = u[g];
                var W = P[0],
                  ae = i[W],
                  se = P[1];
                if (v && P[2]) {
                  if (ae === r && !(W in i)) return !1;
                } else {
                  var ce = new Pn();
                  if (h) var Ee = h(ae, se, W, i, a, ce);
                  if (!(Ee === r ? oa(se, ae, R | C, h, ce) : Ee)) return !1;
                }
              }
              return !0;
            }
            function JE(i) {
              if (!pt(i) || ZP(i)) return !1;
              var a = Ar(i) ? _B : sM;
              return a.test(Ti(i));
            }
            function gP(i) {
              return mt(i) && Pt(i) == Se;
            }
            function TP(i) {
              return mt(i) && Vt(i) == $e;
            }
            function NP(i) {
              return mt(i) && pl(i.length) && !!ct[Pt(i)];
            }
            function QE(i) {
              return typeof i == 'function'
                ? i
                : i == null
                  ? Jt
                  : typeof i == 'object'
                    ? He(i)
                      ? t_(i[0], i[1])
                      : e_(i)
                    : Ng(i);
            }
            function qf(i) {
              if (!la(i)) return SB(i);
              var a = [];
              for (var u in ot(i)) rt.call(i, u) && u != 'constructor' && a.push(u);
              return a;
            }
            function AP(i) {
              if (!pt(i)) return r3(i);
              var a = la(i),
                u = [];
              for (var h in i) (h == 'constructor' && (a || !rt.call(i, h))) || u.push(h);
              return u;
            }
            function Jf(i, a) {
              return i < a;
            }
            function ZE(i, a) {
              var u = -1,
                h = jt(i) ? J(i.length) : [];
              return (
                Br(i, function (g, x, v) {
                  h[++u] = a(g, x, v);
                }),
                h
              );
            }
            function e_(i) {
              var a = du(i);
              return a.length == 1 && a[0][2]
                ? D_(a[0][0], a[0][1])
                : function (u) {
                    return u === i || jf(u, i, a);
                  };
            }
            function t_(i, a) {
              return hu(i) && k_(a)
                ? D_(tr(i), a)
                : function (u) {
                    var h = bu(u, i);
                    return h === r && h === a ? xu(u, i) : oa(a, h, R | C);
                  };
            }
            function Js(i, a, u, h, g) {
              i !== a &&
                Xf(
                  a,
                  function (x, v) {
                    if ((g || (g = new Pn()), pt(x))) yP(i, a, v, u, Js, h, g);
                    else {
                      var P = h ? h(Eu(i, v), x, v + '', i, a, g) : r;
                      P === r && (P = x), Wf(i, v, P);
                    }
                  },
                  qt,
                );
            }
            function yP(i, a, u, h, g, x, v) {
              var P = Eu(i, u),
                W = Eu(a, u),
                ae = v.get(W);
              if (ae) {
                Wf(i, u, ae);
                return;
              }
              var se = x ? x(P, W, u + '', i, a, v) : r,
                ce = se === r;
              if (ce) {
                var Ee = He(W),
                  Ce = !Ee && Hr(W),
                  De = !Ee && !Ce && io(W);
                (se = W),
                  Ee || Ce || De
                    ? He(P)
                      ? (se = P)
                      : Et(P)
                        ? (se = Kt(P))
                        : Ce
                          ? ((ce = !1), (se = p_(W, !0)))
                          : De
                            ? ((ce = !1), (se = h_(W, !0)))
                            : (se = [])
                    : fa(W) || Ni(W)
                      ? ((se = P), Ni(P) ? (se = fg(P)) : (!pt(P) || Ar(P)) && (se = v_(W)))
                      : (ce = !1);
              }
              ce && (v.set(W, se), g(se, W, h, x, v), v.delete(W)), Wf(i, u, se);
            }
            function n_(i, a) {
              var u = i.length;
              if (u) return (a += a < 0 ? u : 0), Nr(a, u) ? i[a] : r;
            }
            function r_(i, a, u) {
              a.length
                ? (a = dt(a, function (x) {
                    return He(x)
                      ? function (v) {
                          return _i(v, x.length === 1 ? x[0] : x);
                        }
                      : x;
                  }))
                : (a = [Jt]);
              var h = -1;
              a = dt(a, rn(ke()));
              var g = ZE(i, function (x, v, P) {
                var W = dt(a, function (ae) {
                  return ae(x);
                });
                return { criteria: W, index: ++h, value: x };
              });
              return jM(g, function (x, v) {
                return VP(x, v, u);
              });
            }
            function SP(i, a) {
              return i_(i, a, function (u, h) {
                return xu(i, h);
              });
            }
            function i_(i, a, u) {
              for (var h = -1, g = a.length, x = {}; ++h < g; ) {
                var v = a[h],
                  P = _i(i, v);
                u(P, v) && aa(x, Ur(v, i), P);
              }
              return x;
            }
            function bP(i) {
              return function (a) {
                return _i(a, i);
              };
            }
            function Qf(i, a, u, h) {
              var g = h ? KM : Yi,
                x = -1,
                v = a.length,
                P = i;
              for (i === a && (a = Kt(a)), u && (P = dt(i, rn(u))); ++x < v; )
                for (var W = 0, ae = a[x], se = u ? u(ae) : ae; (W = g(P, se, W, h)) > -1; )
                  P !== i && Hs.call(P, W, 1), Hs.call(i, W, 1);
              return i;
            }
            function o_(i, a) {
              for (var u = i ? a.length : 0, h = u - 1; u--; ) {
                var g = a[u];
                if (u == h || g !== x) {
                  var x = g;
                  Nr(g) ? Hs.call(i, g, 1) : nu(i, g);
                }
              }
              return i;
            }
            function Zf(i, a) {
              return i + zs(UE() * (a - i + 1));
            }
            function xP(i, a, u, h) {
              for (var g = -1, x = yt(Ws((a - i) / (u || 1)), 0), v = J(x); x--; ) (v[h ? x : ++g] = i), (i += u);
              return v;
            }
            function eu(i, a) {
              var u = '';
              if (!i || a < 1 || a > Q) return u;
              do a % 2 && (u += i), (a = zs(a / 2)), a && (i += i);
              while (a);
              return u;
            }
            function Ge(i, a) {
              return _u(V_(i, a, Jt), i + '');
            }
            function OP(i) {
              return FE(oo(i));
            }
            function RP(i, a) {
              var u = oo(i);
              return sl(u, Ei(a, 0, u.length));
            }
            function aa(i, a, u, h) {
              if (!pt(i)) return i;
              a = Ur(a, i);
              for (var g = -1, x = a.length, v = x - 1, P = i; P != null && ++g < x; ) {
                var W = tr(a[g]),
                  ae = u;
                if (W === '__proto__' || W === 'constructor' || W === 'prototype') return i;
                if (g != v) {
                  var se = P[W];
                  (ae = h ? h(se, W, P) : r), ae === r && (ae = pt(se) ? se : Nr(a[g + 1]) ? [] : {});
                }
                na(P, W, ae), (P = P[W]);
              }
              return i;
            }
            var a_ = Xs
                ? function (i, a) {
                    return Xs.set(i, a), i;
                  }
                : Jt,
              CP = Fs
                ? function (i, a) {
                    return Fs(i, 'toString', { configurable: !0, enumerable: !1, value: Ru(a), writable: !0 });
                  }
                : Jt;
            function IP(i) {
              return sl(oo(i));
            }
            function yn(i, a, u) {
              var h = -1,
                g = i.length;
              a < 0 && (a = -a > g ? 0 : g + a),
                (u = u > g ? g : u),
                u < 0 && (u += g),
                (g = a > u ? 0 : (u - a) >>> 0),
                (a >>>= 0);
              for (var x = J(g); ++h < g; ) x[h] = i[h + a];
              return x;
            }
            function LP(i, a) {
              var u;
              return (
                Br(i, function (h, g, x) {
                  return (u = a(h, g, x)), !u;
                }),
                !!u
              );
            }
            function Qs(i, a, u) {
              var h = 0,
                g = i == null ? h : i.length;
              if (typeof a == 'number' && a === a && g <= de) {
                for (; h < g; ) {
                  var x = (h + g) >>> 1,
                    v = i[x];
                  v !== null && !an(v) && (u ? v <= a : v < a) ? (h = x + 1) : (g = x);
                }
                return g;
              }
              return tu(i, a, Jt, u);
            }
            function tu(i, a, u, h) {
              var g = 0,
                x = i == null ? 0 : i.length;
              if (x === 0) return 0;
              a = u(a);
              for (var v = a !== a, P = a === null, W = an(a), ae = a === r; g < x; ) {
                var se = zs((g + x) / 2),
                  ce = u(i[se]),
                  Ee = ce !== r,
                  Ce = ce === null,
                  De = ce === ce,
                  Xe = an(ce);
                if (v) var Ve = h || De;
                else
                  ae
                    ? (Ve = De && (h || Ee))
                    : P
                      ? (Ve = De && Ee && (h || !Ce))
                      : W
                        ? (Ve = De && Ee && !Ce && (h || !Xe))
                        : Ce || Xe
                          ? (Ve = !1)
                          : (Ve = h ? ce <= a : ce < a);
                Ve ? (g = se + 1) : (x = se);
              }
              return Dt(x, te);
            }
            function s_(i, a) {
              for (var u = -1, h = i.length, g = 0, x = []; ++u < h; ) {
                var v = i[u],
                  P = a ? a(v) : v;
                if (!u || !Un(P, W)) {
                  var W = P;
                  x[g++] = v === 0 ? 0 : v;
                }
              }
              return x;
            }
            function l_(i) {
              return typeof i == 'number' ? i : an(i) ? fe : +i;
            }
            function on(i) {
              if (typeof i == 'string') return i;
              if (He(i)) return dt(i, on) + '';
              if (an(i)) return $E ? $E.call(i) : '';
              var a = i + '';
              return a == '0' && 1 / i == -z ? '-0' : a;
            }
            function Pr(i, a, u) {
              var h = -1,
                g = ws,
                x = i.length,
                v = !0,
                P = [],
                W = P;
              if (u) (v = !1), (g = Lf);
              else if (x >= s) {
                var ae = a ? null : HP(i);
                if (ae) return ks(ae);
                (v = !1), (g = qo), (W = new mi());
              } else W = a ? [] : P;
              e: for (; ++h < x; ) {
                var se = i[h],
                  ce = a ? a(se) : se;
                if (((se = u || se !== 0 ? se : 0), v && ce === ce)) {
                  for (var Ee = W.length; Ee--; ) if (W[Ee] === ce) continue e;
                  a && W.push(ce), P.push(se);
                } else g(W, ce, u) || (W !== P && W.push(ce), P.push(se));
              }
              return P;
            }
            function nu(i, a) {
              return (a = Ur(a, i)), (i = M_(i, a)), i == null || delete i[tr(Sn(a))];
            }
            function c_(i, a, u, h) {
              return aa(i, a, u(_i(i, a)), h);
            }
            function Zs(i, a, u, h) {
              for (var g = i.length, x = h ? g : -1; (h ? x-- : ++x < g) && a(i[x], x, i); );
              return u ? yn(i, h ? 0 : x, h ? x + 1 : g) : yn(i, h ? x + 1 : 0, h ? g : x);
            }
            function f_(i, a) {
              var u = i;
              return (
                u instanceof Ke && (u = u.value()),
                wf(
                  a,
                  function (h, g) {
                    return g.func.apply(g.thisArg, Dr([h], g.args));
                  },
                  u,
                )
              );
            }
            function ru(i, a, u) {
              var h = i.length;
              if (h < 2) return h ? Pr(i[0]) : [];
              for (var g = -1, x = J(h); ++g < h; )
                for (var v = i[g], P = -1; ++P < h; ) P != g && (x[g] = ra(x[g] || v, i[P], a, u));
              return Pr(Lt(x, 1), a, u);
            }
            function u_(i, a, u) {
              for (var h = -1, g = i.length, x = a.length, v = {}; ++h < g; ) {
                var P = h < x ? a[h] : r;
                u(v, i[h], P);
              }
              return v;
            }
            function iu(i) {
              return Et(i) ? i : [];
            }
            function ou(i) {
              return typeof i == 'function' ? i : Jt;
            }
            function Ur(i, a) {
              return He(i) ? i : hu(i, a) ? [i] : $_(nt(i));
            }
            var wP = Ge;
            function $r(i, a, u) {
              var h = i.length;
              return (u = u === r ? h : u), !a && u >= h ? i : yn(i, a, u);
            }
            var d_ =
              gB ||
              function (i) {
                return It.clearTimeout(i);
              };
            function p_(i, a) {
              if (a) return i.slice();
              var u = i.length,
                h = DE ? DE(u) : new i.constructor(u);
              return i.copy(h), h;
            }
            function au(i) {
              var a = new i.constructor(i.byteLength);
              return new Us(a).set(new Us(i)), a;
            }
            function vP(i, a) {
              var u = a ? au(i.buffer) : i.buffer;
              return new i.constructor(u, i.byteOffset, i.byteLength);
            }
            function kP(i) {
              var a = new i.constructor(i.source, qm.exec(i));
              return (a.lastIndex = i.lastIndex), a;
            }
            function DP(i) {
              return ta ? ot(ta.call(i)) : {};
            }
            function h_(i, a) {
              var u = a ? au(i.buffer) : i.buffer;
              return new i.constructor(u, i.byteOffset, i.length);
            }
            function m_(i, a) {
              if (i !== a) {
                var u = i !== r,
                  h = i === null,
                  g = i === i,
                  x = an(i),
                  v = a !== r,
                  P = a === null,
                  W = a === a,
                  ae = an(a);
                if ((!P && !ae && !x && i > a) || (x && v && W && !P && !ae) || (h && v && W) || (!u && W) || !g)
                  return 1;
                if ((!h && !x && !ae && i < a) || (ae && u && g && !h && !x) || (P && u && g) || (!v && g) || !W)
                  return -1;
              }
              return 0;
            }
            function VP(i, a, u) {
              for (var h = -1, g = i.criteria, x = a.criteria, v = g.length, P = u.length; ++h < v; ) {
                var W = m_(g[h], x[h]);
                if (W) {
                  if (h >= P) return W;
                  var ae = u[h];
                  return W * (ae == 'desc' ? -1 : 1);
                }
              }
              return i.index - a.index;
            }
            function E_(i, a, u, h) {
              for (
                var g = -1,
                  x = i.length,
                  v = u.length,
                  P = -1,
                  W = a.length,
                  ae = yt(x - v, 0),
                  se = J(W + ae),
                  ce = !h;
                ++P < W;

              )
                se[P] = a[P];
              for (; ++g < v; ) (ce || g < x) && (se[u[g]] = i[g]);
              for (; ae--; ) se[P++] = i[g++];
              return se;
            }
            function __(i, a, u, h) {
              for (
                var g = -1,
                  x = i.length,
                  v = -1,
                  P = u.length,
                  W = -1,
                  ae = a.length,
                  se = yt(x - P, 0),
                  ce = J(se + ae),
                  Ee = !h;
                ++g < se;

              )
                ce[g] = i[g];
              for (var Ce = g; ++W < ae; ) ce[Ce + W] = a[W];
              for (; ++v < P; ) (Ee || g < x) && (ce[Ce + u[v]] = i[g++]);
              return ce;
            }
            function Kt(i, a) {
              var u = -1,
                h = i.length;
              for (a || (a = J(h)); ++u < h; ) a[u] = i[u];
              return a;
            }
            function er(i, a, u, h) {
              var g = !u;
              u || (u = {});
              for (var x = -1, v = a.length; ++x < v; ) {
                var P = a[x],
                  W = h ? h(u[P], i[P], P, u, i) : r;
                W === r && (W = i[P]), g ? _r(u, P, W) : na(u, P, W);
              }
              return u;
            }
            function MP(i, a) {
              return er(i, pu(i), a);
            }
            function BP(i, a) {
              return er(i, L_(i), a);
            }
            function el(i, a) {
              return function (u, h) {
                var g = He(u) ? FM : oP,
                  x = a ? a() : {};
                return g(u, i, ke(h, 2), x);
              };
            }
            function to(i) {
              return Ge(function (a, u) {
                var h = -1,
                  g = u.length,
                  x = g > 1 ? u[g - 1] : r,
                  v = g > 2 ? u[2] : r;
                for (
                  x = i.length > 3 && typeof x == 'function' ? (g--, x) : r,
                    v && Ut(u[0], u[1], v) && ((x = g < 3 ? r : x), (g = 1)),
                    a = ot(a);
                  ++h < g;

                ) {
                  var P = u[h];
                  P && i(a, P, h, x);
                }
                return a;
              });
            }
            function g_(i, a) {
              return function (u, h) {
                if (u == null) return u;
                if (!jt(u)) return i(u, h);
                for (var g = u.length, x = a ? g : -1, v = ot(u); (a ? x-- : ++x < g) && h(v[x], x, v) !== !1; );
                return u;
              };
            }
            function T_(i) {
              return function (a, u, h) {
                for (var g = -1, x = ot(a), v = h(a), P = v.length; P--; ) {
                  var W = v[i ? P : ++g];
                  if (u(x[W], W, x) === !1) break;
                }
                return a;
              };
            }
            function PP(i, a, u) {
              var h = a & B,
                g = sa(i);
              function x() {
                var v = this && this !== It && this instanceof x ? g : i;
                return v.apply(h ? u : this, arguments);
              }
              return x;
            }
            function N_(i) {
              return function (a) {
                a = nt(a);
                var u = Ki(a) ? Bn(a) : r,
                  h = u ? u[0] : a.charAt(0),
                  g = u ? $r(u, 1).join('') : a.slice(1);
                return h[i]() + g;
              };
            }
            function no(i) {
              return function (a) {
                return wf(gg(_g(a).replace(CM, '')), i, '');
              };
            }
            function sa(i) {
              return function () {
                var a = arguments;
                switch (a.length) {
                  case 0:
                    return new i();
                  case 1:
                    return new i(a[0]);
                  case 2:
                    return new i(a[0], a[1]);
                  case 3:
                    return new i(a[0], a[1], a[2]);
                  case 4:
                    return new i(a[0], a[1], a[2], a[3]);
                  case 5:
                    return new i(a[0], a[1], a[2], a[3], a[4]);
                  case 6:
                    return new i(a[0], a[1], a[2], a[3], a[4], a[5]);
                  case 7:
                    return new i(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
                }
                var u = eo(i.prototype),
                  h = i.apply(u, a);
                return pt(h) ? h : u;
              };
            }
            function UP(i, a, u) {
              var h = sa(i);
              function g() {
                for (var x = arguments.length, v = J(x), P = x, W = ro(g); P--; ) v[P] = arguments[P];
                var ae = x < 3 && v[0] !== W && v[x - 1] !== W ? [] : Vr(v, W);
                if (((x -= ae.length), x < u)) return x_(i, a, tl, g.placeholder, r, v, ae, r, r, u - x);
                var se = this && this !== It && this instanceof g ? h : i;
                return nn(se, this, v);
              }
              return g;
            }
            function A_(i) {
              return function (a, u, h) {
                var g = ot(a);
                if (!jt(a)) {
                  var x = ke(u, 3);
                  (a = bt(a)),
                    (u = function (P) {
                      return x(g[P], P, g);
                    });
                }
                var v = i(a, u, h);
                return v > -1 ? g[x ? a[v] : v] : r;
              };
            }
            function y_(i) {
              return Tr(function (a) {
                var u = a.length,
                  h = u,
                  g = Nn.prototype.thru;
                for (i && a.reverse(); h--; ) {
                  var x = a[h];
                  if (typeof x != 'function') throw new Tn(c);
                  if (g && !v && ol(x) == 'wrapper') var v = new Nn([], !0);
                }
                for (h = v ? h : u; ++h < u; ) {
                  x = a[h];
                  var P = ol(x),
                    W = P == 'wrapper' ? uu(x) : r;
                  W && mu(W[0]) && W[1] == (D | Y | k | L) && !W[4].length && W[9] == 1
                    ? (v = v[ol(W[0])].apply(v, W[3]))
                    : (v = x.length == 1 && mu(x) ? v[P]() : v.thru(x));
                }
                return function () {
                  var ae = arguments,
                    se = ae[0];
                  if (v && ae.length == 1 && He(se)) return v.plant(se).value();
                  for (var ce = 0, Ee = u ? a[ce].apply(this, ae) : se; ++ce < u; ) Ee = a[ce].call(this, Ee);
                  return Ee;
                };
              });
            }
            function tl(i, a, u, h, g, x, v, P, W, ae) {
              var se = a & D,
                ce = a & B,
                Ee = a & S,
                Ce = a & (Y | _),
                De = a & y,
                Xe = Ee ? r : sa(i);
              function Ve() {
                for (var Ye = arguments.length, je = J(Ye), sn = Ye; sn--; ) je[sn] = arguments[sn];
                if (Ce)
                  var $t = ro(Ve),
                    ln = JM(je, $t);
                if ((h && (je = E_(je, h, g, Ce)), x && (je = __(je, x, v, Ce)), (Ye -= ln), Ce && Ye < ae)) {
                  var _t = Vr(je, $t);
                  return x_(i, a, tl, Ve.placeholder, u, je, _t, P, W, ae - Ye);
                }
                var $n = ce ? u : this,
                  Sr = Ee ? $n[i] : i;
                return (
                  (Ye = je.length),
                  P ? (je = o3(je, P)) : De && Ye > 1 && je.reverse(),
                  se && W < Ye && (je.length = W),
                  this && this !== It && this instanceof Ve && (Sr = Xe || sa(Sr)),
                  Sr.apply($n, je)
                );
              }
              return Ve;
            }
            function S_(i, a) {
              return function (u, h) {
                return pP(u, i, a(h), {});
              };
            }
            function nl(i, a) {
              return function (u, h) {
                var g;
                if (u === r && h === r) return a;
                if ((u !== r && (g = u), h !== r)) {
                  if (g === r) return h;
                  typeof u == 'string' || typeof h == 'string'
                    ? ((u = on(u)), (h = on(h)))
                    : ((u = l_(u)), (h = l_(h))),
                    (g = i(u, h));
                }
                return g;
              };
            }
            function su(i) {
              return Tr(function (a) {
                return (
                  (a = dt(a, rn(ke()))),
                  Ge(function (u) {
                    var h = this;
                    return i(a, function (g) {
                      return nn(g, h, u);
                    });
                  })
                );
              });
            }
            function rl(i, a) {
              a = a === r ? ' ' : on(a);
              var u = a.length;
              if (u < 2) return u ? eu(a, i) : a;
              var h = eu(a, Ws(i / ji(a)));
              return Ki(a) ? $r(Bn(h), 0, i).join('') : h.slice(0, i);
            }
            function $P(i, a, u, h) {
              var g = a & B,
                x = sa(i);
              function v() {
                for (
                  var P = -1,
                    W = arguments.length,
                    ae = -1,
                    se = h.length,
                    ce = J(se + W),
                    Ee = this && this !== It && this instanceof v ? x : i;
                  ++ae < se;

                )
                  ce[ae] = h[ae];
                for (; W--; ) ce[ae++] = arguments[++P];
                return nn(Ee, g ? u : this, ce);
              }
              return v;
            }
            function b_(i) {
              return function (a, u, h) {
                return (
                  h && typeof h != 'number' && Ut(a, u, h) && (u = h = r),
                  (a = yr(a)),
                  u === r ? ((u = a), (a = 0)) : (u = yr(u)),
                  (h = h === r ? (a < u ? 1 : -1) : yr(h)),
                  xP(a, u, h, i)
                );
              };
            }
            function il(i) {
              return function (a, u) {
                return (typeof a == 'string' && typeof u == 'string') || ((a = bn(a)), (u = bn(u))), i(a, u);
              };
            }
            function x_(i, a, u, h, g, x, v, P, W, ae) {
              var se = a & Y,
                ce = se ? v : r,
                Ee = se ? r : v,
                Ce = se ? x : r,
                De = se ? r : x;
              (a |= se ? k : O), (a &= ~(se ? O : k)), a & V || (a &= ~(B | S));
              var Xe = [i, a, g, Ce, ce, De, Ee, P, W, ae],
                Ve = u.apply(r, Xe);
              return mu(i) && B_(Ve, Xe), (Ve.placeholder = h), P_(Ve, i, a);
            }
            function lu(i) {
              var a = At[i];
              return function (u, h) {
                if (((u = bn(u)), (h = h == null ? 0 : Dt(ze(h), 292)), h && PE(u))) {
                  var g = (nt(u) + 'e').split('e'),
                    x = a(g[0] + 'e' + (+g[1] + h));
                  return (g = (nt(x) + 'e').split('e')), +(g[0] + 'e' + (+g[1] - h));
                }
                return a(u);
              };
            }
            var HP =
              Qi && 1 / ks(new Qi([, -0]))[1] == z
                ? function (i) {
                    return new Qi(i);
                  }
                : Lu;
            function O_(i) {
              return function (a) {
                var u = Vt(a);
                return u == We ? Pf(a) : u == $e ? iB(a) : qM(a, i(a));
              };
            }
            function gr(i, a, u, h, g, x, v, P) {
              var W = a & S;
              if (!W && typeof i != 'function') throw new Tn(c);
              var ae = h ? h.length : 0;
              if (
                (ae || ((a &= ~(k | O)), (h = g = r)),
                (v = v === r ? v : yt(ze(v), 0)),
                (P = P === r ? P : ze(P)),
                (ae -= g ? g.length : 0),
                a & O)
              ) {
                var se = h,
                  ce = g;
                h = g = r;
              }
              var Ee = W ? r : uu(i),
                Ce = [i, a, u, h, g, se, ce, x, v, P];
              if (
                (Ee && n3(Ce, Ee),
                (i = Ce[0]),
                (a = Ce[1]),
                (u = Ce[2]),
                (h = Ce[3]),
                (g = Ce[4]),
                (P = Ce[9] = Ce[9] === r ? (W ? 0 : i.length) : yt(Ce[9] - ae, 0)),
                !P && a & (Y | _) && (a &= ~(Y | _)),
                !a || a == B)
              )
                var De = PP(i, a, u);
              else
                a == Y || a == _
                  ? (De = UP(i, a, P))
                  : (a == k || a == (B | k)) && !g.length
                    ? (De = $P(i, a, u, h))
                    : (De = tl.apply(r, Ce));
              var Xe = Ee ? a_ : B_;
              return P_(Xe(De, Ce), i, a);
            }
            function R_(i, a, u, h) {
              return i === r || (Un(i, Ji[u]) && !rt.call(h, u)) ? a : i;
            }
            function C_(i, a, u, h, g, x) {
              return pt(i) && pt(a) && (x.set(a, i), Js(i, a, r, C_, x), x.delete(a)), i;
            }
            function FP(i) {
              return fa(i) ? r : i;
            }
            function I_(i, a, u, h, g, x) {
              var v = u & R,
                P = i.length,
                W = a.length;
              if (P != W && !(v && W > P)) return !1;
              var ae = x.get(i),
                se = x.get(a);
              if (ae && se) return ae == a && se == i;
              var ce = -1,
                Ee = !0,
                Ce = u & C ? new mi() : r;
              for (x.set(i, a), x.set(a, i); ++ce < P; ) {
                var De = i[ce],
                  Xe = a[ce];
                if (h) var Ve = v ? h(Xe, De, ce, a, i, x) : h(De, Xe, ce, i, a, x);
                if (Ve !== r) {
                  if (Ve) continue;
                  Ee = !1;
                  break;
                }
                if (Ce) {
                  if (
                    !vf(a, function (Ye, je) {
                      if (!qo(Ce, je) && (De === Ye || g(De, Ye, u, h, x))) return Ce.push(je);
                    })
                  ) {
                    Ee = !1;
                    break;
                  }
                } else if (!(De === Xe || g(De, Xe, u, h, x))) {
                  Ee = !1;
                  break;
                }
              }
              return x.delete(i), x.delete(a), Ee;
            }
            function WP(i, a, u, h, g, x, v) {
              switch (u) {
                case Pe:
                  if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                  (i = i.buffer), (a = a.buffer);
                case Le:
                  return !(i.byteLength != a.byteLength || !x(new Us(i), new Us(a)));
                case le:
                case me:
                case Tt:
                  return Un(+i, +a);
                case xe:
                  return i.name == a.name && i.message == a.message;
                case Se:
                case et:
                  return i == a + '';
                case We:
                  var P = Pf;
                case $e:
                  var W = h & R;
                  if ((P || (P = ks), i.size != a.size && !W)) return !1;
                  var ae = v.get(i);
                  if (ae) return ae == a;
                  (h |= C), v.set(i, a);
                  var se = I_(P(i), P(a), h, g, x, v);
                  return v.delete(i), se;
                case ft:
                  if (ta) return ta.call(i) == ta.call(a);
              }
              return !1;
            }
            function zP(i, a, u, h, g, x) {
              var v = u & R,
                P = cu(i),
                W = P.length,
                ae = cu(a),
                se = ae.length;
              if (W != se && !v) return !1;
              for (var ce = W; ce--; ) {
                var Ee = P[ce];
                if (!(v ? Ee in a : rt.call(a, Ee))) return !1;
              }
              var Ce = x.get(i),
                De = x.get(a);
              if (Ce && De) return Ce == a && De == i;
              var Xe = !0;
              x.set(i, a), x.set(a, i);
              for (var Ve = v; ++ce < W; ) {
                Ee = P[ce];
                var Ye = i[Ee],
                  je = a[Ee];
                if (h) var sn = v ? h(je, Ye, Ee, a, i, x) : h(Ye, je, Ee, i, a, x);
                if (!(sn === r ? Ye === je || g(Ye, je, u, h, x) : sn)) {
                  Xe = !1;
                  break;
                }
                Ve || (Ve = Ee == 'constructor');
              }
              if (Xe && !Ve) {
                var $t = i.constructor,
                  ln = a.constructor;
                $t != ln &&
                  'constructor' in i &&
                  'constructor' in a &&
                  !(typeof $t == 'function' && $t instanceof $t && typeof ln == 'function' && ln instanceof ln) &&
                  (Xe = !1);
              }
              return x.delete(i), x.delete(a), Xe;
            }
            function Tr(i) {
              return _u(V_(i, r, z_), i + '');
            }
            function cu(i) {
              return jE(i, bt, pu);
            }
            function fu(i) {
              return jE(i, qt, L_);
            }
            var uu = Xs
              ? function (i) {
                  return Xs.get(i);
                }
              : Lu;
            function ol(i) {
              for (var a = i.name + '', u = Zi[a], h = rt.call(Zi, a) ? u.length : 0; h--; ) {
                var g = u[h],
                  x = g.func;
                if (x == null || x == i) return g.name;
              }
              return a;
            }
            function ro(i) {
              var a = rt.call(A, 'placeholder') ? A : i;
              return a.placeholder;
            }
            function ke() {
              var i = A.iteratee || Cu;
              return (i = i === Cu ? QE : i), arguments.length ? i(arguments[0], arguments[1]) : i;
            }
            function al(i, a) {
              var u = i.__data__;
              return QP(a) ? u[typeof a == 'string' ? 'string' : 'hash'] : u.map;
            }
            function du(i) {
              for (var a = bt(i), u = a.length; u--; ) {
                var h = a[u],
                  g = i[h];
                a[u] = [h, g, k_(g)];
              }
              return a;
            }
            function gi(i, a) {
              var u = tB(i, a);
              return JE(u) ? u : r;
            }
            function XP(i) {
              var a = rt.call(i, pi),
                u = i[pi];
              try {
                i[pi] = r;
                var h = !0;
              } catch {}
              var g = Bs.call(i);
              return h && (a ? (i[pi] = u) : delete i[pi]), g;
            }
            var pu = $f
                ? function (i) {
                    return i == null
                      ? []
                      : ((i = ot(i)),
                        kr($f(i), function (a) {
                          return ME.call(i, a);
                        }));
                  }
                : wu,
              L_ = $f
                ? function (i) {
                    for (var a = []; i; ) Dr(a, pu(i)), (i = $s(i));
                    return a;
                  }
                : wu,
              Vt = Pt;
            ((Hf && Vt(new Hf(new ArrayBuffer(1))) != Pe) ||
              (Qo && Vt(new Qo()) != We) ||
              (Ff && Vt(Ff.resolve()) != _e) ||
              (Qi && Vt(new Qi()) != $e) ||
              (Zo && Vt(new Zo()) != he)) &&
              (Vt = function (i) {
                var a = Pt(i),
                  u = a == G ? i.constructor : r,
                  h = u ? Ti(u) : '';
                if (h)
                  switch (h) {
                    case RB:
                      return Pe;
                    case CB:
                      return We;
                    case IB:
                      return _e;
                    case LB:
                      return $e;
                    case wB:
                      return he;
                  }
                return a;
              });
            function GP(i, a, u) {
              for (var h = -1, g = u.length; ++h < g; ) {
                var x = u[h],
                  v = x.size;
                switch (x.type) {
                  case 'drop':
                    i += v;
                    break;
                  case 'dropRight':
                    a -= v;
                    break;
                  case 'take':
                    a = Dt(a, i + v);
                    break;
                  case 'takeRight':
                    i = yt(i, a - v);
                    break;
                }
              }
              return { start: i, end: a };
            }
            function YP(i) {
              var a = i.match(ZV);
              return a ? a[1].split(eM) : [];
            }
            function w_(i, a, u) {
              a = Ur(a, i);
              for (var h = -1, g = a.length, x = !1; ++h < g; ) {
                var v = tr(a[h]);
                if (!(x = i != null && u(i, v))) break;
                i = i[v];
              }
              return x || ++h != g ? x : ((g = i == null ? 0 : i.length), !!g && pl(g) && Nr(v, g) && (He(i) || Ni(i)));
            }
            function KP(i) {
              var a = i.length,
                u = new i.constructor(a);
              return (
                a && typeof i[0] == 'string' && rt.call(i, 'index') && ((u.index = i.index), (u.input = i.input)), u
              );
            }
            function v_(i) {
              return typeof i.constructor == 'function' && !la(i) ? eo($s(i)) : {};
            }
            function jP(i, a, u) {
              var h = i.constructor;
              switch (a) {
                case Le:
                  return au(i);
                case le:
                case me:
                  return new h(+i);
                case Pe:
                  return vP(i, u);
                case ut:
                case Rt:
                case ur:
                case dr:
                case ui:
                case w:
                case re:
                case ue:
                case Oe:
                  return h_(i, u);
                case We:
                  return new h();
                case Tt:
                case et:
                  return new h(i);
                case Se:
                  return kP(i);
                case $e:
                  return new h();
                case ft:
                  return DP(i);
              }
            }
            function qP(i, a) {
              var u = a.length;
              if (!u) return i;
              var h = u - 1;
              return (
                (a[h] = (u > 1 ? '& ' : '') + a[h]),
                (a = a.join(u > 2 ? ', ' : ' ')),
                i.replace(
                  QV,
                  `{
/* [wrapped with ` +
                    a +
                    `] */
`,
                )
              );
            }
            function JP(i) {
              return He(i) || Ni(i) || !!(BE && i && i[BE]);
            }
            function Nr(i, a) {
              var u = typeof i;
              return (
                (a = a ?? Q), !!a && (u == 'number' || (u != 'symbol' && cM.test(i))) && i > -1 && i % 1 == 0 && i < a
              );
            }
            function Ut(i, a, u) {
              if (!pt(u)) return !1;
              var h = typeof a;
              return (h == 'number' ? jt(u) && Nr(a, u.length) : h == 'string' && a in u) ? Un(u[a], i) : !1;
            }
            function hu(i, a) {
              if (He(i)) return !1;
              var u = typeof i;
              return u == 'number' || u == 'symbol' || u == 'boolean' || i == null || an(i)
                ? !0
                : Mn.test(i) || !hr.test(i) || (a != null && i in ot(a));
            }
            function QP(i) {
              var a = typeof i;
              return a == 'string' || a == 'number' || a == 'symbol' || a == 'boolean' ? i !== '__proto__' : i === null;
            }
            function mu(i) {
              var a = ol(i),
                u = A[a];
              if (typeof u != 'function' || !(a in Ke.prototype)) return !1;
              if (i === u) return !0;
              var h = uu(u);
              return !!h && i === h[0];
            }
            function ZP(i) {
              return !!kE && kE in i;
            }
            var e3 = Vs ? Ar : vu;
            function la(i) {
              var a = i && i.constructor,
                u = (typeof a == 'function' && a.prototype) || Ji;
              return i === u;
            }
            function k_(i) {
              return i === i && !pt(i);
            }
            function D_(i, a) {
              return function (u) {
                return u == null ? !1 : u[i] === a && (a !== r || i in ot(u));
              };
            }
            function t3(i) {
              var a = ul(i, function (h) {
                  return u.size === m && u.clear(), h;
                }),
                u = a.cache;
              return a;
            }
            function n3(i, a) {
              var u = i[1],
                h = a[1],
                g = u | h,
                x = g < (B | S | D),
                v =
                  (h == D && u == Y) ||
                  (h == D && u == L && i[7].length <= a[8]) ||
                  (h == (D | L) && a[7].length <= a[8] && u == Y);
              if (!(x || v)) return i;
              h & B && ((i[2] = a[2]), (g |= u & B ? 0 : V));
              var P = a[3];
              if (P) {
                var W = i[3];
                (i[3] = W ? E_(W, P, a[4]) : P), (i[4] = W ? Vr(i[3], p) : a[4]);
              }
              return (
                (P = a[5]),
                P && ((W = i[5]), (i[5] = W ? __(W, P, a[6]) : P), (i[6] = W ? Vr(i[5], p) : a[6])),
                (P = a[7]),
                P && (i[7] = P),
                h & D && (i[8] = i[8] == null ? a[8] : Dt(i[8], a[8])),
                i[9] == null && (i[9] = a[9]),
                (i[0] = a[0]),
                (i[1] = g),
                i
              );
            }
            function r3(i) {
              var a = [];
              if (i != null) for (var u in ot(i)) a.push(u);
              return a;
            }
            function i3(i) {
              return Bs.call(i);
            }
            function V_(i, a, u) {
              return (
                (a = yt(a === r ? i.length - 1 : a, 0)),
                function () {
                  for (var h = arguments, g = -1, x = yt(h.length - a, 0), v = J(x); ++g < x; ) v[g] = h[a + g];
                  g = -1;
                  for (var P = J(a + 1); ++g < a; ) P[g] = h[g];
                  return (P[a] = u(v)), nn(i, this, P);
                }
              );
            }
            function M_(i, a) {
              return a.length < 2 ? i : _i(i, yn(a, 0, -1));
            }
            function o3(i, a) {
              for (var u = i.length, h = Dt(a.length, u), g = Kt(i); h--; ) {
                var x = a[h];
                i[h] = Nr(x, u) ? g[x] : r;
              }
              return i;
            }
            function Eu(i, a) {
              if (!(a === 'constructor' && typeof i[a] == 'function') && a != '__proto__') return i[a];
            }
            var B_ = U_(a_),
              ca =
                NB ||
                function (i, a) {
                  return It.setTimeout(i, a);
                },
              _u = U_(CP);
            function P_(i, a, u) {
              var h = a + '';
              return _u(i, qP(h, a3(YP(h), u)));
            }
            function U_(i) {
              var a = 0,
                u = 0;
              return function () {
                var h = bB(),
                  g = q - (h - u);
                if (((u = h), g > 0)) {
                  if (++a >= H) return arguments[0];
                } else a = 0;
                return i.apply(r, arguments);
              };
            }
            function sl(i, a) {
              var u = -1,
                h = i.length,
                g = h - 1;
              for (a = a === r ? h : a; ++u < a; ) {
                var x = Zf(u, g),
                  v = i[x];
                (i[x] = i[u]), (i[u] = v);
              }
              return (i.length = a), i;
            }
            var $_ = t3(function (i) {
              var a = [];
              return (
                i.charCodeAt(0) === 46 && a.push(''),
                i.replace(jV, function (u, h, g, x) {
                  a.push(g ? x.replace(rM, '$1') : h || u);
                }),
                a
              );
            });
            function tr(i) {
              if (typeof i == 'string' || an(i)) return i;
              var a = i + '';
              return a == '0' && 1 / i == -z ? '-0' : a;
            }
            function Ti(i) {
              if (i != null) {
                try {
                  return Ms.call(i);
                } catch {}
                try {
                  return i + '';
                } catch {}
              }
              return '';
            }
            function a3(i, a) {
              return (
                gn(j, function (u) {
                  var h = '_.' + u[0];
                  a & u[1] && !ws(i, h) && i.push(h);
                }),
                i.sort()
              );
            }
            function H_(i) {
              if (i instanceof Ke) return i.clone();
              var a = new Nn(i.__wrapped__, i.__chain__);
              return (a.__actions__ = Kt(i.__actions__)), (a.__index__ = i.__index__), (a.__values__ = i.__values__), a;
            }
            function s3(i, a, u) {
              (u ? Ut(i, a, u) : a === r) ? (a = 1) : (a = yt(ze(a), 0));
              var h = i == null ? 0 : i.length;
              if (!h || a < 1) return [];
              for (var g = 0, x = 0, v = J(Ws(h / a)); g < h; ) v[x++] = yn(i, g, (g += a));
              return v;
            }
            function l3(i) {
              for (var a = -1, u = i == null ? 0 : i.length, h = 0, g = []; ++a < u; ) {
                var x = i[a];
                x && (g[h++] = x);
              }
              return g;
            }
            function c3() {
              var i = arguments.length;
              if (!i) return [];
              for (var a = J(i - 1), u = arguments[0], h = i; h--; ) a[h - 1] = arguments[h];
              return Dr(He(u) ? Kt(u) : [u], Lt(a, 1));
            }
            var f3 = Ge(function (i, a) {
                return Et(i) ? ra(i, Lt(a, 1, Et, !0)) : [];
              }),
              u3 = Ge(function (i, a) {
                var u = Sn(a);
                return Et(u) && (u = r), Et(i) ? ra(i, Lt(a, 1, Et, !0), ke(u, 2)) : [];
              }),
              d3 = Ge(function (i, a) {
                var u = Sn(a);
                return Et(u) && (u = r), Et(i) ? ra(i, Lt(a, 1, Et, !0), r, u) : [];
              });
            function p3(i, a, u) {
              var h = i == null ? 0 : i.length;
              return h ? ((a = u || a === r ? 1 : ze(a)), yn(i, a < 0 ? 0 : a, h)) : [];
            }
            function h3(i, a, u) {
              var h = i == null ? 0 : i.length;
              return h ? ((a = u || a === r ? 1 : ze(a)), (a = h - a), yn(i, 0, a < 0 ? 0 : a)) : [];
            }
            function m3(i, a) {
              return i && i.length ? Zs(i, ke(a, 3), !0, !0) : [];
            }
            function E3(i, a) {
              return i && i.length ? Zs(i, ke(a, 3), !0) : [];
            }
            function _3(i, a, u, h) {
              var g = i == null ? 0 : i.length;
              return g ? (u && typeof u != 'number' && Ut(i, a, u) && ((u = 0), (h = g)), cP(i, a, u, h)) : [];
            }
            function F_(i, a, u) {
              var h = i == null ? 0 : i.length;
              if (!h) return -1;
              var g = u == null ? 0 : ze(u);
              return g < 0 && (g = yt(h + g, 0)), vs(i, ke(a, 3), g);
            }
            function W_(i, a, u) {
              var h = i == null ? 0 : i.length;
              if (!h) return -1;
              var g = h - 1;
              return u !== r && ((g = ze(u)), (g = u < 0 ? yt(h + g, 0) : Dt(g, h - 1))), vs(i, ke(a, 3), g, !0);
            }
            function z_(i) {
              var a = i == null ? 0 : i.length;
              return a ? Lt(i, 1) : [];
            }
            function g3(i) {
              var a = i == null ? 0 : i.length;
              return a ? Lt(i, z) : [];
            }
            function T3(i, a) {
              var u = i == null ? 0 : i.length;
              return u ? ((a = a === r ? 1 : ze(a)), Lt(i, a)) : [];
            }
            function N3(i) {
              for (var a = -1, u = i == null ? 0 : i.length, h = {}; ++a < u; ) {
                var g = i[a];
                h[g[0]] = g[1];
              }
              return h;
            }
            function X_(i) {
              return i && i.length ? i[0] : r;
            }
            function A3(i, a, u) {
              var h = i == null ? 0 : i.length;
              if (!h) return -1;
              var g = u == null ? 0 : ze(u);
              return g < 0 && (g = yt(h + g, 0)), Yi(i, a, g);
            }
            function y3(i) {
              var a = i == null ? 0 : i.length;
              return a ? yn(i, 0, -1) : [];
            }
            var S3 = Ge(function (i) {
                var a = dt(i, iu);
                return a.length && a[0] === i[0] ? Kf(a) : [];
              }),
              b3 = Ge(function (i) {
                var a = Sn(i),
                  u = dt(i, iu);
                return a === Sn(u) ? (a = r) : u.pop(), u.length && u[0] === i[0] ? Kf(u, ke(a, 2)) : [];
              }),
              x3 = Ge(function (i) {
                var a = Sn(i),
                  u = dt(i, iu);
                return (a = typeof a == 'function' ? a : r), a && u.pop(), u.length && u[0] === i[0] ? Kf(u, r, a) : [];
              });
            function O3(i, a) {
              return i == null ? '' : yB.call(i, a);
            }
            function Sn(i) {
              var a = i == null ? 0 : i.length;
              return a ? i[a - 1] : r;
            }
            function R3(i, a, u) {
              var h = i == null ? 0 : i.length;
              if (!h) return -1;
              var g = h;
              return (
                u !== r && ((g = ze(u)), (g = g < 0 ? yt(h + g, 0) : Dt(g, h - 1))),
                a === a ? aB(i, a, g) : vs(i, xE, g, !0)
              );
            }
            function C3(i, a) {
              return i && i.length ? n_(i, ze(a)) : r;
            }
            var I3 = Ge(G_);
            function G_(i, a) {
              return i && i.length && a && a.length ? Qf(i, a) : i;
            }
            function L3(i, a, u) {
              return i && i.length && a && a.length ? Qf(i, a, ke(u, 2)) : i;
            }
            function w3(i, a, u) {
              return i && i.length && a && a.length ? Qf(i, a, r, u) : i;
            }
            var v3 = Tr(function (i, a) {
              var u = i == null ? 0 : i.length,
                h = zf(i, a);
              return (
                o_(
                  i,
                  dt(a, function (g) {
                    return Nr(g, u) ? +g : g;
                  }).sort(m_),
                ),
                h
              );
            });
            function k3(i, a) {
              var u = [];
              if (!(i && i.length)) return u;
              var h = -1,
                g = [],
                x = i.length;
              for (a = ke(a, 3); ++h < x; ) {
                var v = i[h];
                a(v, h, i) && (u.push(v), g.push(h));
              }
              return o_(i, g), u;
            }
            function gu(i) {
              return i == null ? i : OB.call(i);
            }
            function D3(i, a, u) {
              var h = i == null ? 0 : i.length;
              return h
                ? (u && typeof u != 'number' && Ut(i, a, u)
                    ? ((a = 0), (u = h))
                    : ((a = a == null ? 0 : ze(a)), (u = u === r ? h : ze(u))),
                  yn(i, a, u))
                : [];
            }
            function V3(i, a) {
              return Qs(i, a);
            }
            function M3(i, a, u) {
              return tu(i, a, ke(u, 2));
            }
            function B3(i, a) {
              var u = i == null ? 0 : i.length;
              if (u) {
                var h = Qs(i, a);
                if (h < u && Un(i[h], a)) return h;
              }
              return -1;
            }
            function P3(i, a) {
              return Qs(i, a, !0);
            }
            function U3(i, a, u) {
              return tu(i, a, ke(u, 2), !0);
            }
            function $3(i, a) {
              var u = i == null ? 0 : i.length;
              if (u) {
                var h = Qs(i, a, !0) - 1;
                if (Un(i[h], a)) return h;
              }
              return -1;
            }
            function H3(i) {
              return i && i.length ? s_(i) : [];
            }
            function F3(i, a) {
              return i && i.length ? s_(i, ke(a, 2)) : [];
            }
            function W3(i) {
              var a = i == null ? 0 : i.length;
              return a ? yn(i, 1, a) : [];
            }
            function z3(i, a, u) {
              return i && i.length ? ((a = u || a === r ? 1 : ze(a)), yn(i, 0, a < 0 ? 0 : a)) : [];
            }
            function X3(i, a, u) {
              var h = i == null ? 0 : i.length;
              return h ? ((a = u || a === r ? 1 : ze(a)), (a = h - a), yn(i, a < 0 ? 0 : a, h)) : [];
            }
            function G3(i, a) {
              return i && i.length ? Zs(i, ke(a, 3), !1, !0) : [];
            }
            function Y3(i, a) {
              return i && i.length ? Zs(i, ke(a, 3)) : [];
            }
            var K3 = Ge(function (i) {
                return Pr(Lt(i, 1, Et, !0));
              }),
              j3 = Ge(function (i) {
                var a = Sn(i);
                return Et(a) && (a = r), Pr(Lt(i, 1, Et, !0), ke(a, 2));
              }),
              q3 = Ge(function (i) {
                var a = Sn(i);
                return (a = typeof a == 'function' ? a : r), Pr(Lt(i, 1, Et, !0), r, a);
              });
            function J3(i) {
              return i && i.length ? Pr(i) : [];
            }
            function Q3(i, a) {
              return i && i.length ? Pr(i, ke(a, 2)) : [];
            }
            function Z3(i, a) {
              return (a = typeof a == 'function' ? a : r), i && i.length ? Pr(i, r, a) : [];
            }
            function Tu(i) {
              if (!(i && i.length)) return [];
              var a = 0;
              return (
                (i = kr(i, function (u) {
                  if (Et(u)) return (a = yt(u.length, a)), !0;
                })),
                Mf(a, function (u) {
                  return dt(i, kf(u));
                })
              );
            }
            function Y_(i, a) {
              if (!(i && i.length)) return [];
              var u = Tu(i);
              return a == null
                ? u
                : dt(u, function (h) {
                    return nn(a, r, h);
                  });
            }
            var eU = Ge(function (i, a) {
                return Et(i) ? ra(i, a) : [];
              }),
              tU = Ge(function (i) {
                return ru(kr(i, Et));
              }),
              nU = Ge(function (i) {
                var a = Sn(i);
                return Et(a) && (a = r), ru(kr(i, Et), ke(a, 2));
              }),
              rU = Ge(function (i) {
                var a = Sn(i);
                return (a = typeof a == 'function' ? a : r), ru(kr(i, Et), r, a);
              }),
              iU = Ge(Tu);
            function oU(i, a) {
              return u_(i || [], a || [], na);
            }
            function aU(i, a) {
              return u_(i || [], a || [], aa);
            }
            var sU = Ge(function (i) {
              var a = i.length,
                u = a > 1 ? i[a - 1] : r;
              return (u = typeof u == 'function' ? (i.pop(), u) : r), Y_(i, u);
            });
            function K_(i) {
              var a = A(i);
              return (a.__chain__ = !0), a;
            }
            function lU(i, a) {
              return a(i), i;
            }
            function ll(i, a) {
              return a(i);
            }
            var cU = Tr(function (i) {
              var a = i.length,
                u = a ? i[0] : 0,
                h = this.__wrapped__,
                g = function (x) {
                  return zf(x, i);
                };
              return a > 1 || this.__actions__.length || !(h instanceof Ke) || !Nr(u)
                ? this.thru(g)
                : ((h = h.slice(u, +u + (a ? 1 : 0))),
                  h.__actions__.push({ func: ll, args: [g], thisArg: r }),
                  new Nn(h, this.__chain__).thru(function (x) {
                    return a && !x.length && x.push(r), x;
                  }));
            });
            function fU() {
              return K_(this);
            }
            function uU() {
              return new Nn(this.value(), this.__chain__);
            }
            function dU() {
              this.__values__ === r && (this.__values__ = lg(this.value()));
              var i = this.__index__ >= this.__values__.length,
                a = i ? r : this.__values__[this.__index__++];
              return { done: i, value: a };
            }
            function pU() {
              return this;
            }
            function hU(i) {
              for (var a, u = this; u instanceof Ys; ) {
                var h = H_(u);
                (h.__index__ = 0), (h.__values__ = r), a ? (g.__wrapped__ = h) : (a = h);
                var g = h;
                u = u.__wrapped__;
              }
              return (g.__wrapped__ = i), a;
            }
            function mU() {
              var i = this.__wrapped__;
              if (i instanceof Ke) {
                var a = i;
                return (
                  this.__actions__.length && (a = new Ke(this)),
                  (a = a.reverse()),
                  a.__actions__.push({ func: ll, args: [gu], thisArg: r }),
                  new Nn(a, this.__chain__)
                );
              }
              return this.thru(gu);
            }
            function EU() {
              return f_(this.__wrapped__, this.__actions__);
            }
            var _U = el(function (i, a, u) {
              rt.call(i, u) ? ++i[u] : _r(i, u, 1);
            });
            function gU(i, a, u) {
              var h = He(i) ? SE : lP;
              return u && Ut(i, a, u) && (a = r), h(i, ke(a, 3));
            }
            function TU(i, a) {
              var u = He(i) ? kr : YE;
              return u(i, ke(a, 3));
            }
            var NU = A_(F_),
              AU = A_(W_);
            function yU(i, a) {
              return Lt(cl(i, a), 1);
            }
            function SU(i, a) {
              return Lt(cl(i, a), z);
            }
            function bU(i, a, u) {
              return (u = u === r ? 1 : ze(u)), Lt(cl(i, a), u);
            }
            function j_(i, a) {
              var u = He(i) ? gn : Br;
              return u(i, ke(a, 3));
            }
            function q_(i, a) {
              var u = He(i) ? WM : GE;
              return u(i, ke(a, 3));
            }
            var xU = el(function (i, a, u) {
              rt.call(i, u) ? i[u].push(a) : _r(i, u, [a]);
            });
            function OU(i, a, u, h) {
              (i = jt(i) ? i : oo(i)), (u = u && !h ? ze(u) : 0);
              var g = i.length;
              return u < 0 && (u = yt(g + u, 0)), hl(i) ? u <= g && i.indexOf(a, u) > -1 : !!g && Yi(i, a, u) > -1;
            }
            var RU = Ge(function (i, a, u) {
                var h = -1,
                  g = typeof a == 'function',
                  x = jt(i) ? J(i.length) : [];
                return (
                  Br(i, function (v) {
                    x[++h] = g ? nn(a, v, u) : ia(v, a, u);
                  }),
                  x
                );
              }),
              CU = el(function (i, a, u) {
                _r(i, u, a);
              });
            function cl(i, a) {
              var u = He(i) ? dt : ZE;
              return u(i, ke(a, 3));
            }
            function IU(i, a, u, h) {
              return i == null
                ? []
                : (He(a) || (a = a == null ? [] : [a]),
                  (u = h ? r : u),
                  He(u) || (u = u == null ? [] : [u]),
                  r_(i, a, u));
            }
            var LU = el(
              function (i, a, u) {
                i[u ? 0 : 1].push(a);
              },
              function () {
                return [[], []];
              },
            );
            function wU(i, a, u) {
              var h = He(i) ? wf : RE,
                g = arguments.length < 3;
              return h(i, ke(a, 4), u, g, Br);
            }
            function vU(i, a, u) {
              var h = He(i) ? zM : RE,
                g = arguments.length < 3;
              return h(i, ke(a, 4), u, g, GE);
            }
            function kU(i, a) {
              var u = He(i) ? kr : YE;
              return u(i, dl(ke(a, 3)));
            }
            function DU(i) {
              var a = He(i) ? FE : OP;
              return a(i);
            }
            function VU(i, a, u) {
              (u ? Ut(i, a, u) : a === r) ? (a = 1) : (a = ze(a));
              var h = He(i) ? rP : RP;
              return h(i, a);
            }
            function MU(i) {
              var a = He(i) ? iP : IP;
              return a(i);
            }
            function BU(i) {
              if (i == null) return 0;
              if (jt(i)) return hl(i) ? ji(i) : i.length;
              var a = Vt(i);
              return a == We || a == $e ? i.size : qf(i).length;
            }
            function PU(i, a, u) {
              var h = He(i) ? vf : LP;
              return u && Ut(i, a, u) && (a = r), h(i, ke(a, 3));
            }
            var UU = Ge(function (i, a) {
                if (i == null) return [];
                var u = a.length;
                return (
                  u > 1 && Ut(i, a[0], a[1]) ? (a = []) : u > 2 && Ut(a[0], a[1], a[2]) && (a = [a[0]]),
                  r_(i, Lt(a, 1), [])
                );
              }),
              fl =
                TB ||
                function () {
                  return It.Date.now();
                };
            function $U(i, a) {
              if (typeof a != 'function') throw new Tn(c);
              return (
                (i = ze(i)),
                function () {
                  if (--i < 1) return a.apply(this, arguments);
                }
              );
            }
            function J_(i, a, u) {
              return (a = u ? r : a), (a = i && a == null ? i.length : a), gr(i, D, r, r, r, r, a);
            }
            function Q_(i, a) {
              var u;
              if (typeof a != 'function') throw new Tn(c);
              return (
                (i = ze(i)),
                function () {
                  return --i > 0 && (u = a.apply(this, arguments)), i <= 1 && (a = r), u;
                }
              );
            }
            var Nu = Ge(function (i, a, u) {
                var h = B;
                if (u.length) {
                  var g = Vr(u, ro(Nu));
                  h |= k;
                }
                return gr(i, h, a, u, g);
              }),
              Z_ = Ge(function (i, a, u) {
                var h = B | S;
                if (u.length) {
                  var g = Vr(u, ro(Z_));
                  h |= k;
                }
                return gr(a, h, i, u, g);
              });
            function eg(i, a, u) {
              a = u ? r : a;
              var h = gr(i, Y, r, r, r, r, r, a);
              return (h.placeholder = eg.placeholder), h;
            }
            function tg(i, a, u) {
              a = u ? r : a;
              var h = gr(i, _, r, r, r, r, r, a);
              return (h.placeholder = tg.placeholder), h;
            }
            function ng(i, a, u) {
              var h,
                g,
                x,
                v,
                P,
                W,
                ae = 0,
                se = !1,
                ce = !1,
                Ee = !0;
              if (typeof i != 'function') throw new Tn(c);
              (a = bn(a) || 0),
                pt(u) &&
                  ((se = !!u.leading),
                  (ce = 'maxWait' in u),
                  (x = ce ? yt(bn(u.maxWait) || 0, a) : x),
                  (Ee = 'trailing' in u ? !!u.trailing : Ee));
              function Ce(_t) {
                var $n = h,
                  Sr = g;
                return (h = g = r), (ae = _t), (v = i.apply(Sr, $n)), v;
              }
              function De(_t) {
                return (ae = _t), (P = ca(Ye, a)), se ? Ce(_t) : v;
              }
              function Xe(_t) {
                var $n = _t - W,
                  Sr = _t - ae,
                  Ag = a - $n;
                return ce ? Dt(Ag, x - Sr) : Ag;
              }
              function Ve(_t) {
                var $n = _t - W,
                  Sr = _t - ae;
                return W === r || $n >= a || $n < 0 || (ce && Sr >= x);
              }
              function Ye() {
                var _t = fl();
                if (Ve(_t)) return je(_t);
                P = ca(Ye, Xe(_t));
              }
              function je(_t) {
                return (P = r), Ee && h ? Ce(_t) : ((h = g = r), v);
              }
              function sn() {
                P !== r && d_(P), (ae = 0), (h = W = g = P = r);
              }
              function $t() {
                return P === r ? v : je(fl());
              }
              function ln() {
                var _t = fl(),
                  $n = Ve(_t);
                if (((h = arguments), (g = this), (W = _t), $n)) {
                  if (P === r) return De(W);
                  if (ce) return d_(P), (P = ca(Ye, a)), Ce(W);
                }
                return P === r && (P = ca(Ye, a)), v;
              }
              return (ln.cancel = sn), (ln.flush = $t), ln;
            }
            var HU = Ge(function (i, a) {
                return XE(i, 1, a);
              }),
              FU = Ge(function (i, a, u) {
                return XE(i, bn(a) || 0, u);
              });
            function WU(i) {
              return gr(i, y);
            }
            function ul(i, a) {
              if (typeof i != 'function' || (a != null && typeof a != 'function')) throw new Tn(c);
              var u = function () {
                var h = arguments,
                  g = a ? a.apply(this, h) : h[0],
                  x = u.cache;
                if (x.has(g)) return x.get(g);
                var v = i.apply(this, h);
                return (u.cache = x.set(g, v) || x), v;
              };
              return (u.cache = new (ul.Cache || Er)()), u;
            }
            ul.Cache = Er;
            function dl(i) {
              if (typeof i != 'function') throw new Tn(c);
              return function () {
                var a = arguments;
                switch (a.length) {
                  case 0:
                    return !i.call(this);
                  case 1:
                    return !i.call(this, a[0]);
                  case 2:
                    return !i.call(this, a[0], a[1]);
                  case 3:
                    return !i.call(this, a[0], a[1], a[2]);
                }
                return !i.apply(this, a);
              };
            }
            function zU(i) {
              return Q_(2, i);
            }
            var XU = wP(function (i, a) {
                a = a.length == 1 && He(a[0]) ? dt(a[0], rn(ke())) : dt(Lt(a, 1), rn(ke()));
                var u = a.length;
                return Ge(function (h) {
                  for (var g = -1, x = Dt(h.length, u); ++g < x; ) h[g] = a[g].call(this, h[g]);
                  return nn(i, this, h);
                });
              }),
              Au = Ge(function (i, a) {
                var u = Vr(a, ro(Au));
                return gr(i, k, r, a, u);
              }),
              rg = Ge(function (i, a) {
                var u = Vr(a, ro(rg));
                return gr(i, O, r, a, u);
              }),
              GU = Tr(function (i, a) {
                return gr(i, L, r, r, r, a);
              });
            function YU(i, a) {
              if (typeof i != 'function') throw new Tn(c);
              return (a = a === r ? a : ze(a)), Ge(i, a);
            }
            function KU(i, a) {
              if (typeof i != 'function') throw new Tn(c);
              return (
                (a = a == null ? 0 : yt(ze(a), 0)),
                Ge(function (u) {
                  var h = u[a],
                    g = $r(u, 0, a);
                  return h && Dr(g, h), nn(i, this, g);
                })
              );
            }
            function jU(i, a, u) {
              var h = !0,
                g = !0;
              if (typeof i != 'function') throw new Tn(c);
              return (
                pt(u) && ((h = 'leading' in u ? !!u.leading : h), (g = 'trailing' in u ? !!u.trailing : g)),
                ng(i, a, { leading: h, maxWait: a, trailing: g })
              );
            }
            function qU(i) {
              return J_(i, 1);
            }
            function JU(i, a) {
              return Au(ou(a), i);
            }
            function QU() {
              if (!arguments.length) return [];
              var i = arguments[0];
              return He(i) ? i : [i];
            }
            function ZU(i) {
              return An(i, b);
            }
            function e$(i, a) {
              return (a = typeof a == 'function' ? a : r), An(i, b, a);
            }
            function t$(i) {
              return An(i, T | b);
            }
            function n$(i, a) {
              return (a = typeof a == 'function' ? a : r), An(i, T | b, a);
            }
            function r$(i, a) {
              return a == null || zE(i, a, bt(a));
            }
            function Un(i, a) {
              return i === a || (i !== i && a !== a);
            }
            var i$ = il(Yf),
              o$ = il(function (i, a) {
                return i >= a;
              }),
              Ni = qE(
                (function () {
                  return arguments;
                })(),
              )
                ? qE
                : function (i) {
                    return mt(i) && rt.call(i, 'callee') && !ME.call(i, 'callee');
                  },
              He = J.isArray,
              a$ = _E ? rn(_E) : hP;
            function jt(i) {
              return i != null && pl(i.length) && !Ar(i);
            }
            function Et(i) {
              return mt(i) && jt(i);
            }
            function s$(i) {
              return i === !0 || i === !1 || (mt(i) && Pt(i) == le);
            }
            var Hr = AB || vu,
              l$ = gE ? rn(gE) : mP;
            function c$(i) {
              return mt(i) && i.nodeType === 1 && !fa(i);
            }
            function f$(i) {
              if (i == null) return !0;
              if (jt(i) && (He(i) || typeof i == 'string' || typeof i.splice == 'function' || Hr(i) || io(i) || Ni(i)))
                return !i.length;
              var a = Vt(i);
              if (a == We || a == $e) return !i.size;
              if (la(i)) return !qf(i).length;
              for (var u in i) if (rt.call(i, u)) return !1;
              return !0;
            }
            function u$(i, a) {
              return oa(i, a);
            }
            function d$(i, a, u) {
              u = typeof u == 'function' ? u : r;
              var h = u ? u(i, a) : r;
              return h === r ? oa(i, a, r, u) : !!h;
            }
            function yu(i) {
              if (!mt(i)) return !1;
              var a = Pt(i);
              return a == xe || a == ye || (typeof i.message == 'string' && typeof i.name == 'string' && !fa(i));
            }
            function p$(i) {
              return typeof i == 'number' && PE(i);
            }
            function Ar(i) {
              if (!pt(i)) return !1;
              var a = Pt(i);
              return a == Be || a == Fe || a == pe || a == ve;
            }
            function ig(i) {
              return typeof i == 'number' && i == ze(i);
            }
            function pl(i) {
              return typeof i == 'number' && i > -1 && i % 1 == 0 && i <= Q;
            }
            function pt(i) {
              var a = typeof i;
              return i != null && (a == 'object' || a == 'function');
            }
            function mt(i) {
              return i != null && typeof i == 'object';
            }
            var og = TE ? rn(TE) : _P;
            function h$(i, a) {
              return i === a || jf(i, a, du(a));
            }
            function m$(i, a, u) {
              return (u = typeof u == 'function' ? u : r), jf(i, a, du(a), u);
            }
            function E$(i) {
              return ag(i) && i != +i;
            }
            function _$(i) {
              if (e3(i)) throw new Ue(l);
              return JE(i);
            }
            function g$(i) {
              return i === null;
            }
            function T$(i) {
              return i == null;
            }
            function ag(i) {
              return typeof i == 'number' || (mt(i) && Pt(i) == Tt);
            }
            function fa(i) {
              if (!mt(i) || Pt(i) != G) return !1;
              var a = $s(i);
              if (a === null) return !0;
              var u = rt.call(a, 'constructor') && a.constructor;
              return typeof u == 'function' && u instanceof u && Ms.call(u) == mB;
            }
            var Su = NE ? rn(NE) : gP;
            function N$(i) {
              return ig(i) && i >= -Q && i <= Q;
            }
            var sg = AE ? rn(AE) : TP;
            function hl(i) {
              return typeof i == 'string' || (!He(i) && mt(i) && Pt(i) == et);
            }
            function an(i) {
              return typeof i == 'symbol' || (mt(i) && Pt(i) == ft);
            }
            var io = yE ? rn(yE) : NP;
            function A$(i) {
              return i === r;
            }
            function y$(i) {
              return mt(i) && Vt(i) == he;
            }
            function S$(i) {
              return mt(i) && Pt(i) == Ne;
            }
            var b$ = il(Jf),
              x$ = il(function (i, a) {
                return i <= a;
              });
            function lg(i) {
              if (!i) return [];
              if (jt(i)) return hl(i) ? Bn(i) : Kt(i);
              if (Jo && i[Jo]) return rB(i[Jo]());
              var a = Vt(i),
                u = a == We ? Pf : a == $e ? ks : oo;
              return u(i);
            }
            function yr(i) {
              if (!i) return i === 0 ? i : 0;
              if (((i = bn(i)), i === z || i === -z)) {
                var a = i < 0 ? -1 : 1;
                return a * oe;
              }
              return i === i ? i : 0;
            }
            function ze(i) {
              var a = yr(i),
                u = a % 1;
              return a === a ? (u ? a - u : a) : 0;
            }
            function cg(i) {
              return i ? Ei(ze(i), 0, ne) : 0;
            }
            function bn(i) {
              if (typeof i == 'number') return i;
              if (an(i)) return fe;
              if (pt(i)) {
                var a = typeof i.valueOf == 'function' ? i.valueOf() : i;
                i = pt(a) ? a + '' : a;
              }
              if (typeof i != 'string') return i === 0 ? i : +i;
              i = CE(i);
              var u = aM.test(i);
              return u || lM.test(i) ? $M(i.slice(2), u ? 2 : 8) : oM.test(i) ? fe : +i;
            }
            function fg(i) {
              return er(i, qt(i));
            }
            function O$(i) {
              return i ? Ei(ze(i), -Q, Q) : i === 0 ? i : 0;
            }
            function nt(i) {
              return i == null ? '' : on(i);
            }
            var R$ = to(function (i, a) {
                if (la(a) || jt(a)) {
                  er(a, bt(a), i);
                  return;
                }
                for (var u in a) rt.call(a, u) && na(i, u, a[u]);
              }),
              ug = to(function (i, a) {
                er(a, qt(a), i);
              }),
              ml = to(function (i, a, u, h) {
                er(a, qt(a), i, h);
              }),
              C$ = to(function (i, a, u, h) {
                er(a, bt(a), i, h);
              }),
              I$ = Tr(zf);
            function L$(i, a) {
              var u = eo(i);
              return a == null ? u : WE(u, a);
            }
            var w$ = Ge(function (i, a) {
                i = ot(i);
                var u = -1,
                  h = a.length,
                  g = h > 2 ? a[2] : r;
                for (g && Ut(a[0], a[1], g) && (h = 1); ++u < h; )
                  for (var x = a[u], v = qt(x), P = -1, W = v.length; ++P < W; ) {
                    var ae = v[P],
                      se = i[ae];
                    (se === r || (Un(se, Ji[ae]) && !rt.call(i, ae))) && (i[ae] = x[ae]);
                  }
                return i;
              }),
              v$ = Ge(function (i) {
                return i.push(r, C_), nn(dg, r, i);
              });
            function k$(i, a) {
              return bE(i, ke(a, 3), Zn);
            }
            function D$(i, a) {
              return bE(i, ke(a, 3), Gf);
            }
            function V$(i, a) {
              return i == null ? i : Xf(i, ke(a, 3), qt);
            }
            function M$(i, a) {
              return i == null ? i : KE(i, ke(a, 3), qt);
            }
            function B$(i, a) {
              return i && Zn(i, ke(a, 3));
            }
            function P$(i, a) {
              return i && Gf(i, ke(a, 3));
            }
            function U$(i) {
              return i == null ? [] : qs(i, bt(i));
            }
            function $$(i) {
              return i == null ? [] : qs(i, qt(i));
            }
            function bu(i, a, u) {
              var h = i == null ? r : _i(i, a);
              return h === r ? u : h;
            }
            function H$(i, a) {
              return i != null && w_(i, a, fP);
            }
            function xu(i, a) {
              return i != null && w_(i, a, uP);
            }
            var F$ = S_(function (i, a, u) {
                a != null && typeof a.toString != 'function' && (a = Bs.call(a)), (i[a] = u);
              }, Ru(Jt)),
              W$ = S_(function (i, a, u) {
                a != null && typeof a.toString != 'function' && (a = Bs.call(a)),
                  rt.call(i, a) ? i[a].push(u) : (i[a] = [u]);
              }, ke),
              z$ = Ge(ia);
            function bt(i) {
              return jt(i) ? HE(i) : qf(i);
            }
            function qt(i) {
              return jt(i) ? HE(i, !0) : AP(i);
            }
            function X$(i, a) {
              var u = {};
              return (
                (a = ke(a, 3)),
                Zn(i, function (h, g, x) {
                  _r(u, a(h, g, x), h);
                }),
                u
              );
            }
            function G$(i, a) {
              var u = {};
              return (
                (a = ke(a, 3)),
                Zn(i, function (h, g, x) {
                  _r(u, g, a(h, g, x));
                }),
                u
              );
            }
            var Y$ = to(function (i, a, u) {
                Js(i, a, u);
              }),
              dg = to(function (i, a, u, h) {
                Js(i, a, u, h);
              }),
              K$ = Tr(function (i, a) {
                var u = {};
                if (i == null) return u;
                var h = !1;
                (a = dt(a, function (x) {
                  return (x = Ur(x, i)), h || (h = x.length > 1), x;
                })),
                  er(i, fu(i), u),
                  h && (u = An(u, T | N | b, FP));
                for (var g = a.length; g--; ) nu(u, a[g]);
                return u;
              });
            function j$(i, a) {
              return pg(i, dl(ke(a)));
            }
            var q$ = Tr(function (i, a) {
              return i == null ? {} : SP(i, a);
            });
            function pg(i, a) {
              if (i == null) return {};
              var u = dt(fu(i), function (h) {
                return [h];
              });
              return (
                (a = ke(a)),
                i_(i, u, function (h, g) {
                  return a(h, g[0]);
                })
              );
            }
            function J$(i, a, u) {
              a = Ur(a, i);
              var h = -1,
                g = a.length;
              for (g || ((g = 1), (i = r)); ++h < g; ) {
                var x = i == null ? r : i[tr(a[h])];
                x === r && ((h = g), (x = u)), (i = Ar(x) ? x.call(i) : x);
              }
              return i;
            }
            function Q$(i, a, u) {
              return i == null ? i : aa(i, a, u);
            }
            function Z$(i, a, u, h) {
              return (h = typeof h == 'function' ? h : r), i == null ? i : aa(i, a, u, h);
            }
            var hg = O_(bt),
              mg = O_(qt);
            function e4(i, a, u) {
              var h = He(i),
                g = h || Hr(i) || io(i);
              if (((a = ke(a, 4)), u == null)) {
                var x = i && i.constructor;
                g ? (u = h ? new x() : []) : pt(i) ? (u = Ar(x) ? eo($s(i)) : {}) : (u = {});
              }
              return (
                (g ? gn : Zn)(i, function (v, P, W) {
                  return a(u, v, P, W);
                }),
                u
              );
            }
            function t4(i, a) {
              return i == null ? !0 : nu(i, a);
            }
            function n4(i, a, u) {
              return i == null ? i : c_(i, a, ou(u));
            }
            function r4(i, a, u, h) {
              return (h = typeof h == 'function' ? h : r), i == null ? i : c_(i, a, ou(u), h);
            }
            function oo(i) {
              return i == null ? [] : Bf(i, bt(i));
            }
            function i4(i) {
              return i == null ? [] : Bf(i, qt(i));
            }
            function o4(i, a, u) {
              return (
                u === r && ((u = a), (a = r)),
                u !== r && ((u = bn(u)), (u = u === u ? u : 0)),
                a !== r && ((a = bn(a)), (a = a === a ? a : 0)),
                Ei(bn(i), a, u)
              );
            }
            function a4(i, a, u) {
              return (a = yr(a)), u === r ? ((u = a), (a = 0)) : (u = yr(u)), (i = bn(i)), dP(i, a, u);
            }
            function s4(i, a, u) {
              if (
                (u && typeof u != 'boolean' && Ut(i, a, u) && (a = u = r),
                u === r && (typeof a == 'boolean' ? ((u = a), (a = r)) : typeof i == 'boolean' && ((u = i), (i = r))),
                i === r && a === r ? ((i = 0), (a = 1)) : ((i = yr(i)), a === r ? ((a = i), (i = 0)) : (a = yr(a))),
                i > a)
              ) {
                var h = i;
                (i = a), (a = h);
              }
              if (u || i % 1 || a % 1) {
                var g = UE();
                return Dt(i + g * (a - i + UM('1e-' + ((g + '').length - 1))), a);
              }
              return Zf(i, a);
            }
            var l4 = no(function (i, a, u) {
              return (a = a.toLowerCase()), i + (u ? Eg(a) : a);
            });
            function Eg(i) {
              return Ou(nt(i).toLowerCase());
            }
            function _g(i) {
              return (i = nt(i)), i && i.replace(fM, QM).replace(IM, '');
            }
            function c4(i, a, u) {
              (i = nt(i)), (a = on(a));
              var h = i.length;
              u = u === r ? h : Ei(ze(u), 0, h);
              var g = u;
              return (u -= a.length), u >= 0 && i.slice(u, g) == a;
            }
            function f4(i) {
              return (i = nt(i)), i && pr.test(i) ? i.replace(vr, ZM) : i;
            }
            function u4(i) {
              return (i = nt(i)), i && qV.test(i) ? i.replace(Af, '\\$&') : i;
            }
            var d4 = no(function (i, a, u) {
                return i + (u ? '-' : '') + a.toLowerCase();
              }),
              p4 = no(function (i, a, u) {
                return i + (u ? ' ' : '') + a.toLowerCase();
              }),
              h4 = N_('toLowerCase');
            function m4(i, a, u) {
              (i = nt(i)), (a = ze(a));
              var h = a ? ji(i) : 0;
              if (!a || h >= a) return i;
              var g = (a - h) / 2;
              return rl(zs(g), u) + i + rl(Ws(g), u);
            }
            function E4(i, a, u) {
              (i = nt(i)), (a = ze(a));
              var h = a ? ji(i) : 0;
              return a && h < a ? i + rl(a - h, u) : i;
            }
            function _4(i, a, u) {
              (i = nt(i)), (a = ze(a));
              var h = a ? ji(i) : 0;
              return a && h < a ? rl(a - h, u) + i : i;
            }
            function g4(i, a, u) {
              return u || a == null ? (a = 0) : a && (a = +a), xB(nt(i).replace(yf, ''), a || 0);
            }
            function T4(i, a, u) {
              return (u ? Ut(i, a, u) : a === r) ? (a = 1) : (a = ze(a)), eu(nt(i), a);
            }
            function N4() {
              var i = arguments,
                a = nt(i[0]);
              return i.length < 3 ? a : a.replace(i[1], i[2]);
            }
            var A4 = no(function (i, a, u) {
              return i + (u ? '_' : '') + a.toLowerCase();
            });
            function y4(i, a, u) {
              return (
                u && typeof u != 'number' && Ut(i, a, u) && (a = u = r),
                (u = u === r ? ne : u >>> 0),
                u
                  ? ((i = nt(i)),
                    i && (typeof a == 'string' || (a != null && !Su(a))) && ((a = on(a)), !a && Ki(i))
                      ? $r(Bn(i), 0, u)
                      : i.split(a, u))
                  : []
              );
            }
            var S4 = no(function (i, a, u) {
              return i + (u ? ' ' : '') + Ou(a);
            });
            function b4(i, a, u) {
              return (
                (i = nt(i)), (u = u == null ? 0 : Ei(ze(u), 0, i.length)), (a = on(a)), i.slice(u, u + a.length) == a
              );
            }
            function x4(i, a, u) {
              var h = A.templateSettings;
              u && Ut(i, a, u) && (a = r), (i = nt(i)), (a = ml({}, a, h, R_));
              var g = ml({}, a.imports, h.imports, R_),
                x = bt(g),
                v = Bf(g, x),
                P,
                W,
                ae = 0,
                se = a.interpolate || Cs,
                ce = "__p += '",
                Ee = Uf(
                  (a.escape || Cs).source +
                    '|' +
                    se.source +
                    '|' +
                    (se === Xi ? iM : Cs).source +
                    '|' +
                    (a.evaluate || Cs).source +
                    '|$',
                  'g',
                ),
                Ce =
                  '//# sourceURL=' +
                  (rt.call(a, 'sourceURL')
                    ? (a.sourceURL + '').replace(/\s/g, ' ')
                    : 'lodash.templateSources[' + ++DM + ']') +
                  `
`;
              i.replace(Ee, function (Ve, Ye, je, sn, $t, ln) {
                return (
                  je || (je = sn),
                  (ce += i.slice(ae, ln).replace(uM, eB)),
                  Ye &&
                    ((P = !0),
                    (ce +=
                      `' +
__e(` +
                      Ye +
                      `) +
'`)),
                  $t &&
                    ((W = !0),
                    (ce +=
                      `';
` +
                      $t +
                      `;
__p += '`)),
                  je &&
                    (ce +=
                      `' +
((__t = (` +
                      je +
                      `)) == null ? '' : __t) +
'`),
                  (ae = ln + Ve.length),
                  Ve
                );
              }),
                (ce += `';
`);
              var De = rt.call(a, 'variable') && a.variable;
              if (!De)
                ce =
                  `with (obj) {
` +
                  ce +
                  `
}
`;
              else if (nM.test(De)) throw new Ue(f);
              (ce = (W ? ce.replace(ge, '') : ce).replace(Je, '$1').replace(it, '$1;')),
                (ce =
                  'function(' +
                  (De || 'obj') +
                  `) {
` +
                  (De
                    ? ''
                    : `obj || (obj = {});
`) +
                  "var __t, __p = ''" +
                  (P ? ', __e = _.escape' : '') +
                  (W
                    ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                    : `;
`) +
                  ce +
                  `return __p
}`);
              var Xe = Tg(function () {
                return tt(x, Ce + 'return ' + ce).apply(r, v);
              });
              if (((Xe.source = ce), yu(Xe))) throw Xe;
              return Xe;
            }
            function O4(i) {
              return nt(i).toLowerCase();
            }
            function R4(i) {
              return nt(i).toUpperCase();
            }
            function C4(i, a, u) {
              if (((i = nt(i)), i && (u || a === r))) return CE(i);
              if (!i || !(a = on(a))) return i;
              var h = Bn(i),
                g = Bn(a),
                x = IE(h, g),
                v = LE(h, g) + 1;
              return $r(h, x, v).join('');
            }
            function I4(i, a, u) {
              if (((i = nt(i)), i && (u || a === r))) return i.slice(0, vE(i) + 1);
              if (!i || !(a = on(a))) return i;
              var h = Bn(i),
                g = LE(h, Bn(a)) + 1;
              return $r(h, 0, g).join('');
            }
            function L4(i, a, u) {
              if (((i = nt(i)), i && (u || a === r))) return i.replace(yf, '');
              if (!i || !(a = on(a))) return i;
              var h = Bn(i),
                g = IE(h, Bn(a));
              return $r(h, g).join('');
            }
            function w4(i, a) {
              var u = K,
                h = M;
              if (pt(a)) {
                var g = 'separator' in a ? a.separator : g;
                (u = 'length' in a ? ze(a.length) : u), (h = 'omission' in a ? on(a.omission) : h);
              }
              i = nt(i);
              var x = i.length;
              if (Ki(i)) {
                var v = Bn(i);
                x = v.length;
              }
              if (u >= x) return i;
              var P = u - ji(h);
              if (P < 1) return h;
              var W = v ? $r(v, 0, P).join('') : i.slice(0, P);
              if (g === r) return W + h;
              if ((v && (P += W.length - P), Su(g))) {
                if (i.slice(P).search(g)) {
                  var ae,
                    se = W;
                  for (g.global || (g = Uf(g.source, nt(qm.exec(g)) + 'g')), g.lastIndex = 0; (ae = g.exec(se)); )
                    var ce = ae.index;
                  W = W.slice(0, ce === r ? P : ce);
                }
              } else if (i.indexOf(on(g), P) != P) {
                var Ee = W.lastIndexOf(g);
                Ee > -1 && (W = W.slice(0, Ee));
              }
              return W + h;
            }
            function v4(i) {
              return (i = nt(i)), i && Ct.test(i) ? i.replace(kt, sB) : i;
            }
            var k4 = no(function (i, a, u) {
                return i + (u ? ' ' : '') + a.toUpperCase();
              }),
              Ou = N_('toUpperCase');
            function gg(i, a, u) {
              return (i = nt(i)), (a = u ? r : a), a === r ? (nB(i) ? fB(i) : YM(i)) : i.match(a) || [];
            }
            var Tg = Ge(function (i, a) {
                try {
                  return nn(i, r, a);
                } catch (u) {
                  return yu(u) ? u : new Ue(u);
                }
              }),
              D4 = Tr(function (i, a) {
                return (
                  gn(a, function (u) {
                    (u = tr(u)), _r(i, u, Nu(i[u], i));
                  }),
                  i
                );
              });
            function V4(i) {
              var a = i == null ? 0 : i.length,
                u = ke();
              return (
                (i = a
                  ? dt(i, function (h) {
                      if (typeof h[1] != 'function') throw new Tn(c);
                      return [u(h[0]), h[1]];
                    })
                  : []),
                Ge(function (h) {
                  for (var g = -1; ++g < a; ) {
                    var x = i[g];
                    if (nn(x[0], this, h)) return nn(x[1], this, h);
                  }
                })
              );
            }
            function M4(i) {
              return sP(An(i, T));
            }
            function Ru(i) {
              return function () {
                return i;
              };
            }
            function B4(i, a) {
              return i == null || i !== i ? a : i;
            }
            var P4 = y_(),
              U4 = y_(!0);
            function Jt(i) {
              return i;
            }
            function Cu(i) {
              return QE(typeof i == 'function' ? i : An(i, T));
            }
            function $4(i) {
              return e_(An(i, T));
            }
            function H4(i, a) {
              return t_(i, An(a, T));
            }
            var F4 = Ge(function (i, a) {
                return function (u) {
                  return ia(u, i, a);
                };
              }),
              W4 = Ge(function (i, a) {
                return function (u) {
                  return ia(i, u, a);
                };
              });
            function Iu(i, a, u) {
              var h = bt(a),
                g = qs(a, h);
              u == null && !(pt(a) && (g.length || !h.length)) && ((u = a), (a = i), (i = this), (g = qs(a, bt(a))));
              var x = !(pt(u) && 'chain' in u) || !!u.chain,
                v = Ar(i);
              return (
                gn(g, function (P) {
                  var W = a[P];
                  (i[P] = W),
                    v &&
                      (i.prototype[P] = function () {
                        var ae = this.__chain__;
                        if (x || ae) {
                          var se = i(this.__wrapped__),
                            ce = (se.__actions__ = Kt(this.__actions__));
                          return ce.push({ func: W, args: arguments, thisArg: i }), (se.__chain__ = ae), se;
                        }
                        return W.apply(i, Dr([this.value()], arguments));
                      });
                }),
                i
              );
            }
            function z4() {
              return It._ === this && (It._ = EB), this;
            }
            function Lu() {}
            function X4(i) {
              return (
                (i = ze(i)),
                Ge(function (a) {
                  return n_(a, i);
                })
              );
            }
            var G4 = su(dt),
              Y4 = su(SE),
              K4 = su(vf);
            function Ng(i) {
              return hu(i) ? kf(tr(i)) : bP(i);
            }
            function j4(i) {
              return function (a) {
                return i == null ? r : _i(i, a);
              };
            }
            var q4 = b_(),
              J4 = b_(!0);
            function wu() {
              return [];
            }
            function vu() {
              return !1;
            }
            function Q4() {
              return {};
            }
            function Z4() {
              return '';
            }
            function e5() {
              return !0;
            }
            function t5(i, a) {
              if (((i = ze(i)), i < 1 || i > Q)) return [];
              var u = ne,
                h = Dt(i, ne);
              (a = ke(a)), (i -= ne);
              for (var g = Mf(h, a); ++u < i; ) a(u);
              return g;
            }
            function n5(i) {
              return He(i) ? dt(i, tr) : an(i) ? [i] : Kt($_(nt(i)));
            }
            function r5(i) {
              var a = ++hB;
              return nt(i) + a;
            }
            var i5 = nl(function (i, a) {
                return i + a;
              }, 0),
              o5 = lu('ceil'),
              a5 = nl(function (i, a) {
                return i / a;
              }, 1),
              s5 = lu('floor');
            function l5(i) {
              return i && i.length ? js(i, Jt, Yf) : r;
            }
            function c5(i, a) {
              return i && i.length ? js(i, ke(a, 2), Yf) : r;
            }
            function f5(i) {
              return OE(i, Jt);
            }
            function u5(i, a) {
              return OE(i, ke(a, 2));
            }
            function d5(i) {
              return i && i.length ? js(i, Jt, Jf) : r;
            }
            function p5(i, a) {
              return i && i.length ? js(i, ke(a, 2), Jf) : r;
            }
            var h5 = nl(function (i, a) {
                return i * a;
              }, 1),
              m5 = lu('round'),
              E5 = nl(function (i, a) {
                return i - a;
              }, 0);
            function _5(i) {
              return i && i.length ? Vf(i, Jt) : 0;
            }
            function g5(i, a) {
              return i && i.length ? Vf(i, ke(a, 2)) : 0;
            }
            return (
              (A.after = $U),
              (A.ary = J_),
              (A.assign = R$),
              (A.assignIn = ug),
              (A.assignInWith = ml),
              (A.assignWith = C$),
              (A.at = I$),
              (A.before = Q_),
              (A.bind = Nu),
              (A.bindAll = D4),
              (A.bindKey = Z_),
              (A.castArray = QU),
              (A.chain = K_),
              (A.chunk = s3),
              (A.compact = l3),
              (A.concat = c3),
              (A.cond = V4),
              (A.conforms = M4),
              (A.constant = Ru),
              (A.countBy = _U),
              (A.create = L$),
              (A.curry = eg),
              (A.curryRight = tg),
              (A.debounce = ng),
              (A.defaults = w$),
              (A.defaultsDeep = v$),
              (A.defer = HU),
              (A.delay = FU),
              (A.difference = f3),
              (A.differenceBy = u3),
              (A.differenceWith = d3),
              (A.drop = p3),
              (A.dropRight = h3),
              (A.dropRightWhile = m3),
              (A.dropWhile = E3),
              (A.fill = _3),
              (A.filter = TU),
              (A.flatMap = yU),
              (A.flatMapDeep = SU),
              (A.flatMapDepth = bU),
              (A.flatten = z_),
              (A.flattenDeep = g3),
              (A.flattenDepth = T3),
              (A.flip = WU),
              (A.flow = P4),
              (A.flowRight = U4),
              (A.fromPairs = N3),
              (A.functions = U$),
              (A.functionsIn = $$),
              (A.groupBy = xU),
              (A.initial = y3),
              (A.intersection = S3),
              (A.intersectionBy = b3),
              (A.intersectionWith = x3),
              (A.invert = F$),
              (A.invertBy = W$),
              (A.invokeMap = RU),
              (A.iteratee = Cu),
              (A.keyBy = CU),
              (A.keys = bt),
              (A.keysIn = qt),
              (A.map = cl),
              (A.mapKeys = X$),
              (A.mapValues = G$),
              (A.matches = $4),
              (A.matchesProperty = H4),
              (A.memoize = ul),
              (A.merge = Y$),
              (A.mergeWith = dg),
              (A.method = F4),
              (A.methodOf = W4),
              (A.mixin = Iu),
              (A.negate = dl),
              (A.nthArg = X4),
              (A.omit = K$),
              (A.omitBy = j$),
              (A.once = zU),
              (A.orderBy = IU),
              (A.over = G4),
              (A.overArgs = XU),
              (A.overEvery = Y4),
              (A.overSome = K4),
              (A.partial = Au),
              (A.partialRight = rg),
              (A.partition = LU),
              (A.pick = q$),
              (A.pickBy = pg),
              (A.property = Ng),
              (A.propertyOf = j4),
              (A.pull = I3),
              (A.pullAll = G_),
              (A.pullAllBy = L3),
              (A.pullAllWith = w3),
              (A.pullAt = v3),
              (A.range = q4),
              (A.rangeRight = J4),
              (A.rearg = GU),
              (A.reject = kU),
              (A.remove = k3),
              (A.rest = YU),
              (A.reverse = gu),
              (A.sampleSize = VU),
              (A.set = Q$),
              (A.setWith = Z$),
              (A.shuffle = MU),
              (A.slice = D3),
              (A.sortBy = UU),
              (A.sortedUniq = H3),
              (A.sortedUniqBy = F3),
              (A.split = y4),
              (A.spread = KU),
              (A.tail = W3),
              (A.take = z3),
              (A.takeRight = X3),
              (A.takeRightWhile = G3),
              (A.takeWhile = Y3),
              (A.tap = lU),
              (A.throttle = jU),
              (A.thru = ll),
              (A.toArray = lg),
              (A.toPairs = hg),
              (A.toPairsIn = mg),
              (A.toPath = n5),
              (A.toPlainObject = fg),
              (A.transform = e4),
              (A.unary = qU),
              (A.union = K3),
              (A.unionBy = j3),
              (A.unionWith = q3),
              (A.uniq = J3),
              (A.uniqBy = Q3),
              (A.uniqWith = Z3),
              (A.unset = t4),
              (A.unzip = Tu),
              (A.unzipWith = Y_),
              (A.update = n4),
              (A.updateWith = r4),
              (A.values = oo),
              (A.valuesIn = i4),
              (A.without = eU),
              (A.words = gg),
              (A.wrap = JU),
              (A.xor = tU),
              (A.xorBy = nU),
              (A.xorWith = rU),
              (A.zip = iU),
              (A.zipObject = oU),
              (A.zipObjectDeep = aU),
              (A.zipWith = sU),
              (A.entries = hg),
              (A.entriesIn = mg),
              (A.extend = ug),
              (A.extendWith = ml),
              Iu(A, A),
              (A.add = i5),
              (A.attempt = Tg),
              (A.camelCase = l4),
              (A.capitalize = Eg),
              (A.ceil = o5),
              (A.clamp = o4),
              (A.clone = ZU),
              (A.cloneDeep = t$),
              (A.cloneDeepWith = n$),
              (A.cloneWith = e$),
              (A.conformsTo = r$),
              (A.deburr = _g),
              (A.defaultTo = B4),
              (A.divide = a5),
              (A.endsWith = c4),
              (A.eq = Un),
              (A.escape = f4),
              (A.escapeRegExp = u4),
              (A.every = gU),
              (A.find = NU),
              (A.findIndex = F_),
              (A.findKey = k$),
              (A.findLast = AU),
              (A.findLastIndex = W_),
              (A.findLastKey = D$),
              (A.floor = s5),
              (A.forEach = j_),
              (A.forEachRight = q_),
              (A.forIn = V$),
              (A.forInRight = M$),
              (A.forOwn = B$),
              (A.forOwnRight = P$),
              (A.get = bu),
              (A.gt = i$),
              (A.gte = o$),
              (A.has = H$),
              (A.hasIn = xu),
              (A.head = X_),
              (A.identity = Jt),
              (A.includes = OU),
              (A.indexOf = A3),
              (A.inRange = a4),
              (A.invoke = z$),
              (A.isArguments = Ni),
              (A.isArray = He),
              (A.isArrayBuffer = a$),
              (A.isArrayLike = jt),
              (A.isArrayLikeObject = Et),
              (A.isBoolean = s$),
              (A.isBuffer = Hr),
              (A.isDate = l$),
              (A.isElement = c$),
              (A.isEmpty = f$),
              (A.isEqual = u$),
              (A.isEqualWith = d$),
              (A.isError = yu),
              (A.isFinite = p$),
              (A.isFunction = Ar),
              (A.isInteger = ig),
              (A.isLength = pl),
              (A.isMap = og),
              (A.isMatch = h$),
              (A.isMatchWith = m$),
              (A.isNaN = E$),
              (A.isNative = _$),
              (A.isNil = T$),
              (A.isNull = g$),
              (A.isNumber = ag),
              (A.isObject = pt),
              (A.isObjectLike = mt),
              (A.isPlainObject = fa),
              (A.isRegExp = Su),
              (A.isSafeInteger = N$),
              (A.isSet = sg),
              (A.isString = hl),
              (A.isSymbol = an),
              (A.isTypedArray = io),
              (A.isUndefined = A$),
              (A.isWeakMap = y$),
              (A.isWeakSet = S$),
              (A.join = O3),
              (A.kebabCase = d4),
              (A.last = Sn),
              (A.lastIndexOf = R3),
              (A.lowerCase = p4),
              (A.lowerFirst = h4),
              (A.lt = b$),
              (A.lte = x$),
              (A.max = l5),
              (A.maxBy = c5),
              (A.mean = f5),
              (A.meanBy = u5),
              (A.min = d5),
              (A.minBy = p5),
              (A.stubArray = wu),
              (A.stubFalse = vu),
              (A.stubObject = Q4),
              (A.stubString = Z4),
              (A.stubTrue = e5),
              (A.multiply = h5),
              (A.nth = C3),
              (A.noConflict = z4),
              (A.noop = Lu),
              (A.now = fl),
              (A.pad = m4),
              (A.padEnd = E4),
              (A.padStart = _4),
              (A.parseInt = g4),
              (A.random = s4),
              (A.reduce = wU),
              (A.reduceRight = vU),
              (A.repeat = T4),
              (A.replace = N4),
              (A.result = J$),
              (A.round = m5),
              (A.runInContext = F),
              (A.sample = DU),
              (A.size = BU),
              (A.snakeCase = A4),
              (A.some = PU),
              (A.sortedIndex = V3),
              (A.sortedIndexBy = M3),
              (A.sortedIndexOf = B3),
              (A.sortedLastIndex = P3),
              (A.sortedLastIndexBy = U3),
              (A.sortedLastIndexOf = $3),
              (A.startCase = S4),
              (A.startsWith = b4),
              (A.subtract = E5),
              (A.sum = _5),
              (A.sumBy = g5),
              (A.template = x4),
              (A.times = t5),
              (A.toFinite = yr),
              (A.toInteger = ze),
              (A.toLength = cg),
              (A.toLower = O4),
              (A.toNumber = bn),
              (A.toSafeInteger = O$),
              (A.toString = nt),
              (A.toUpper = R4),
              (A.trim = C4),
              (A.trimEnd = I4),
              (A.trimStart = L4),
              (A.truncate = w4),
              (A.unescape = v4),
              (A.uniqueId = r5),
              (A.upperCase = k4),
              (A.upperFirst = Ou),
              (A.each = j_),
              (A.eachRight = q_),
              (A.first = X_),
              Iu(
                A,
                (function () {
                  var i = {};
                  return (
                    Zn(A, function (a, u) {
                      rt.call(A.prototype, u) || (i[u] = a);
                    }),
                    i
                  );
                })(),
                { chain: !1 },
              ),
              (A.VERSION = o),
              gn(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (i) {
                A[i].placeholder = A;
              }),
              gn(['drop', 'take'], function (i, a) {
                (Ke.prototype[i] = function (u) {
                  u = u === r ? 1 : yt(ze(u), 0);
                  var h = this.__filtered__ && !a ? new Ke(this) : this.clone();
                  return (
                    h.__filtered__
                      ? (h.__takeCount__ = Dt(u, h.__takeCount__))
                      : h.__views__.push({ size: Dt(u, ne), type: i + (h.__dir__ < 0 ? 'Right' : '') }),
                    h
                  );
                }),
                  (Ke.prototype[i + 'Right'] = function (u) {
                    return this.reverse()[i](u).reverse();
                  });
              }),
              gn(['filter', 'map', 'takeWhile'], function (i, a) {
                var u = a + 1,
                  h = u == U || u == I;
                Ke.prototype[i] = function (g) {
                  var x = this.clone();
                  return (
                    x.__iteratees__.push({ iteratee: ke(g, 3), type: u }), (x.__filtered__ = x.__filtered__ || h), x
                  );
                };
              }),
              gn(['head', 'last'], function (i, a) {
                var u = 'take' + (a ? 'Right' : '');
                Ke.prototype[i] = function () {
                  return this[u](1).value()[0];
                };
              }),
              gn(['initial', 'tail'], function (i, a) {
                var u = 'drop' + (a ? '' : 'Right');
                Ke.prototype[i] = function () {
                  return this.__filtered__ ? new Ke(this) : this[u](1);
                };
              }),
              (Ke.prototype.compact = function () {
                return this.filter(Jt);
              }),
              (Ke.prototype.find = function (i) {
                return this.filter(i).head();
              }),
              (Ke.prototype.findLast = function (i) {
                return this.reverse().find(i);
              }),
              (Ke.prototype.invokeMap = Ge(function (i, a) {
                return typeof i == 'function'
                  ? new Ke(this)
                  : this.map(function (u) {
                      return ia(u, i, a);
                    });
              })),
              (Ke.prototype.reject = function (i) {
                return this.filter(dl(ke(i)));
              }),
              (Ke.prototype.slice = function (i, a) {
                i = ze(i);
                var u = this;
                return u.__filtered__ && (i > 0 || a < 0)
                  ? new Ke(u)
                  : (i < 0 ? (u = u.takeRight(-i)) : i && (u = u.drop(i)),
                    a !== r && ((a = ze(a)), (u = a < 0 ? u.dropRight(-a) : u.take(a - i))),
                    u);
              }),
              (Ke.prototype.takeRightWhile = function (i) {
                return this.reverse().takeWhile(i).reverse();
              }),
              (Ke.prototype.toArray = function () {
                return this.take(ne);
              }),
              Zn(Ke.prototype, function (i, a) {
                var u = /^(?:filter|find|map|reject)|While$/.test(a),
                  h = /^(?:head|last)$/.test(a),
                  g = A[h ? 'take' + (a == 'last' ? 'Right' : '') : a],
                  x = h || /^find/.test(a);
                g &&
                  (A.prototype[a] = function () {
                    var v = this.__wrapped__,
                      P = h ? [1] : arguments,
                      W = v instanceof Ke,
                      ae = P[0],
                      se = W || He(v),
                      ce = function (Ye) {
                        var je = g.apply(A, Dr([Ye], P));
                        return h && Ee ? je[0] : je;
                      };
                    se && u && typeof ae == 'function' && ae.length != 1 && (W = se = !1);
                    var Ee = this.__chain__,
                      Ce = !!this.__actions__.length,
                      De = x && !Ee,
                      Xe = W && !Ce;
                    if (!x && se) {
                      v = Xe ? v : new Ke(this);
                      var Ve = i.apply(v, P);
                      return Ve.__actions__.push({ func: ll, args: [ce], thisArg: r }), new Nn(Ve, Ee);
                    }
                    return De && Xe
                      ? i.apply(this, P)
                      : ((Ve = this.thru(ce)), De ? (h ? Ve.value()[0] : Ve.value()) : Ve);
                  });
              }),
              gn(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (i) {
                var a = Ds[i],
                  u = /^(?:push|sort|unshift)$/.test(i) ? 'tap' : 'thru',
                  h = /^(?:pop|shift)$/.test(i);
                A.prototype[i] = function () {
                  var g = arguments;
                  if (h && !this.__chain__) {
                    var x = this.value();
                    return a.apply(He(x) ? x : [], g);
                  }
                  return this[u](function (v) {
                    return a.apply(He(v) ? v : [], g);
                  });
                };
              }),
              Zn(Ke.prototype, function (i, a) {
                var u = A[a];
                if (u) {
                  var h = u.name + '';
                  rt.call(Zi, h) || (Zi[h] = []), Zi[h].push({ name: a, func: u });
                }
              }),
              (Zi[tl(r, S).name] = [{ name: 'wrapper', func: r }]),
              (Ke.prototype.clone = vB),
              (Ke.prototype.reverse = kB),
              (Ke.prototype.value = DB),
              (A.prototype.at = cU),
              (A.prototype.chain = fU),
              (A.prototype.commit = uU),
              (A.prototype.next = dU),
              (A.prototype.plant = hU),
              (A.prototype.reverse = mU),
              (A.prototype.toJSON = A.prototype.valueOf = A.prototype.value = EU),
              (A.prototype.first = A.prototype.head),
              Jo && (A.prototype[Jo] = pU),
              A
            );
          },
          qi = uB();
        di ? (((di.exports = qi)._ = qi), (Cf._ = qi)) : (It._ = qi);
      }).call(cn);
    })(da, da.exports);
  var Sg = da.exports;
  const $ = ua(Sg),
    bg = {
      name: 'splitpanes',
      emits: ['ready', 'resize', 'resized', 'pane-click', 'pane-maximize', 'pane-add', 'pane-remove', 'splitter-click'],
      props: {
        horizontal: { type: Boolean },
        pushOtherPanes: { type: Boolean, default: !0 },
        dblClickSplitter: { type: Boolean, default: !0 },
        rtl: { type: Boolean, default: !1 },
        firstSplitter: { type: Boolean },
      },
      provide() {
        return {
          requestUpdate: this.requestUpdate,
          onPaneAdd: this.onPaneAdd,
          onPaneRemove: this.onPaneRemove,
          onPaneClick: this.onPaneClick,
        };
      },
      data: () => ({
        container: null,
        ready: !1,
        panes: [],
        touch: { mouseDown: !1, dragging: !1, activeSplitter: null },
        splitterTaps: { splitter: null, timeoutId: null },
      }),
      computed: {
        panesCount() {
          return this.panes.length;
        },
        indexedPanes() {
          return this.panes.reduce((e, n) => (e[n.id] = n) && e, {});
        },
      },
      methods: {
        updatePaneComponents() {
          this.panes.forEach(e => {
            e.update && e.update({ [this.horizontal ? 'height' : 'width']: `${this.indexedPanes[e.id].size}%` });
          });
        },
        bindEvents() {
          document.addEventListener('mousemove', this.onMouseMove, { passive: !1 }),
            document.addEventListener('mouseup', this.onMouseUp),
            'ontouchstart' in window &&
              (document.addEventListener('touchmove', this.onMouseMove, { passive: !1 }),
              document.addEventListener('touchend', this.onMouseUp));
        },
        unbindEvents() {
          document.removeEventListener('mousemove', this.onMouseMove, { passive: !1 }),
            document.removeEventListener('mouseup', this.onMouseUp),
            'ontouchstart' in window &&
              (document.removeEventListener('touchmove', this.onMouseMove, { passive: !1 }),
              document.removeEventListener('touchend', this.onMouseUp));
        },
        onMouseDown(e, n) {
          this.bindEvents(), (this.touch.mouseDown = !0), (this.touch.activeSplitter = n);
        },
        onMouseMove(e) {
          this.touch.mouseDown &&
            (e.preventDefault(),
            (this.touch.dragging = !0),
            this.calculatePanesSize(this.getCurrentMouseDrag(e)),
            this.$emit(
              'resize',
              this.panes.map(n => ({ min: n.min, max: n.max, size: n.size })),
            ));
        },
        onMouseUp() {
          this.touch.dragging &&
            this.$emit(
              'resized',
              this.panes.map(e => ({ min: e.min, max: e.max, size: e.size })),
            ),
            (this.touch.mouseDown = !1),
            setTimeout(() => {
              (this.touch.dragging = !1), this.unbindEvents();
            }, 100);
        },
        onSplitterClick(e, n) {
          'ontouchstart' in window &&
            (e.preventDefault(),
            this.dblClickSplitter &&
              (this.splitterTaps.splitter === n
                ? (clearTimeout(this.splitterTaps.timeoutId),
                  (this.splitterTaps.timeoutId = null),
                  this.onSplitterDblClick(e, n),
                  (this.splitterTaps.splitter = null))
                : ((this.splitterTaps.splitter = n),
                  (this.splitterTaps.timeoutId = setTimeout(() => {
                    this.splitterTaps.splitter = null;
                  }, 500))))),
            this.touch.dragging || this.$emit('splitter-click', this.panes[n]);
        },
        onSplitterDblClick(e, n) {
          let r = 0;
          (this.panes = this.panes.map((o, s) => ((o.size = s === n ? o.max : o.min), s !== n && (r += o.min), o))),
            (this.panes[n].size -= r),
            this.$emit('pane-maximize', this.panes[n]),
            this.$emit(
              'resized',
              this.panes.map(o => ({ min: o.min, max: o.max, size: o.size })),
            );
        },
        onPaneClick(e, n) {
          this.$emit('pane-click', this.indexedPanes[n]);
        },
        getCurrentMouseDrag(e) {
          const n = this.container.getBoundingClientRect(),
            { clientX: r, clientY: o } = 'ontouchstart' in window && e.touches ? e.touches[0] : e;
          return { x: r - n.left, y: o - n.top };
        },
        getCurrentDragPercentage(e) {
          e = e[this.horizontal ? 'y' : 'x'];
          const n = this.container[this.horizontal ? 'clientHeight' : 'clientWidth'];
          return this.rtl && !this.horizontal && (e = n - e), (e * 100) / n;
        },
        calculatePanesSize(e) {
          const n = this.touch.activeSplitter;
          let r = {
            prevPanesSize: this.sumPrevPanesSize(n),
            nextPanesSize: this.sumNextPanesSize(n),
            prevReachedMinPanes: 0,
            nextReachedMinPanes: 0,
          };
          const o = 0 + (this.pushOtherPanes ? 0 : r.prevPanesSize),
            s = 100 - (this.pushOtherPanes ? 0 : r.nextPanesSize),
            l = Math.max(Math.min(this.getCurrentDragPercentage(e), s), o);
          let c = [n, n + 1],
            f = this.panes[c[0]] || null,
            d = this.panes[c[1]] || null;
          const m = f.max < 100 && l >= f.max + r.prevPanesSize,
            p = d.max < 100 && l <= 100 - (d.max + this.sumNextPanesSize(n + 1));
          if (m || p) {
            m
              ? ((f.size = f.max), (d.size = Math.max(100 - f.max - r.prevPanesSize - r.nextPanesSize, 0)))
              : ((f.size = Math.max(100 - d.max - r.prevPanesSize - this.sumNextPanesSize(n + 1), 0)),
                (d.size = d.max));
            return;
          }
          if (this.pushOtherPanes) {
            const T = this.doPushOtherPanes(r, l);
            if (!T) return;
            ({ sums: r, panesToResize: c } = T), (f = this.panes[c[0]] || null), (d = this.panes[c[1]] || null);
          }
          f !== null && (f.size = Math.min(Math.max(l - r.prevPanesSize - r.prevReachedMinPanes, f.min), f.max)),
            d !== null &&
              (d.size = Math.min(Math.max(100 - l - r.nextPanesSize - r.nextReachedMinPanes, d.min), d.max));
        },
        doPushOtherPanes(e, n) {
          const r = this.touch.activeSplitter,
            o = [r, r + 1];
          return n < e.prevPanesSize + this.panes[o[0]].min &&
            ((o[0] = this.findPrevExpandedPane(r).index),
            (e.prevReachedMinPanes = 0),
            o[0] < r &&
              this.panes.forEach((s, l) => {
                l > o[0] && l <= r && ((s.size = s.min), (e.prevReachedMinPanes += s.min));
              }),
            (e.prevPanesSize = this.sumPrevPanesSize(o[0])),
            o[0] === void 0)
            ? ((e.prevReachedMinPanes = 0),
              (this.panes[0].size = this.panes[0].min),
              this.panes.forEach((s, l) => {
                l > 0 && l <= r && ((s.size = s.min), (e.prevReachedMinPanes += s.min));
              }),
              (this.panes[o[1]].size =
                100 - e.prevReachedMinPanes - this.panes[0].min - e.prevPanesSize - e.nextPanesSize),
              null)
            : n > 100 - e.nextPanesSize - this.panes[o[1]].min &&
                ((o[1] = this.findNextExpandedPane(r).index),
                (e.nextReachedMinPanes = 0),
                o[1] > r + 1 &&
                  this.panes.forEach((s, l) => {
                    l > r && l < o[1] && ((s.size = s.min), (e.nextReachedMinPanes += s.min));
                  }),
                (e.nextPanesSize = this.sumNextPanesSize(o[1] - 1)),
                o[1] === void 0)
              ? ((e.nextReachedMinPanes = 0),
                (this.panes[this.panesCount - 1].size = this.panes[this.panesCount - 1].min),
                this.panes.forEach((s, l) => {
                  l < this.panesCount - 1 && l >= r + 1 && ((s.size = s.min), (e.nextReachedMinPanes += s.min));
                }),
                (this.panes[o[0]].size =
                  100 -
                  e.prevPanesSize -
                  e.nextReachedMinPanes -
                  this.panes[this.panesCount - 1].min -
                  e.nextPanesSize),
                null)
              : { sums: e, panesToResize: o };
        },
        sumPrevPanesSize(e) {
          return this.panes.reduce((n, r, o) => n + (o < e ? r.size : 0), 0);
        },
        sumNextPanesSize(e) {
          return this.panes.reduce((n, r, o) => n + (o > e + 1 ? r.size : 0), 0);
        },
        findPrevExpandedPane(e) {
          return [...this.panes].reverse().find(n => n.index < e && n.size > n.min) || {};
        },
        findNextExpandedPane(e) {
          return this.panes.find(n => n.index > e + 1 && n.size > n.min) || {};
        },
        checkSplitpanesNodes() {
          Array.from(this.container.children).forEach(e => {
            const n = e.classList.contains('splitpanes__pane'),
              r = e.classList.contains('splitpanes__splitter');
            !n &&
              !r &&
              (e.parentNode.removeChild(e),
              console.warn(
                'Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed.',
              ));
          });
        },
        addSplitter(e, n, r = !1) {
          const o = e - 1,
            s = document.createElement('div');
          s.classList.add('splitpanes__splitter'),
            r ||
              ((s.onmousedown = l => this.onMouseDown(l, o)),
              typeof window < 'u' && 'ontouchstart' in window && (s.ontouchstart = l => this.onMouseDown(l, o)),
              (s.onclick = l => this.onSplitterClick(l, o + 1))),
            this.dblClickSplitter && (s.ondblclick = l => this.onSplitterDblClick(l, o + 1)),
            n.parentNode.insertBefore(s, n);
        },
        removeSplitter(e) {
          (e.onmousedown = void 0), (e.onclick = void 0), (e.ondblclick = void 0), e.parentNode.removeChild(e);
        },
        redoSplitters() {
          const e = Array.from(this.container.children);
          e.forEach(r => {
            r.className.includes('splitpanes__splitter') && this.removeSplitter(r);
          });
          let n = 0;
          e.forEach(r => {
            r.className.includes('splitpanes__pane') &&
              (!n && this.firstSplitter ? this.addSplitter(n, r, !0) : n && this.addSplitter(n, r), n++);
          });
        },
        requestUpdate({ target: e, ...n }) {
          const r = this.indexedPanes[e._.uid];
          Object.entries(n).forEach(([o, s]) => (r[o] = s));
        },
        onPaneAdd(e) {
          let n = -1;
          Array.from(e.$el.parentNode.children).some(
            s => (s.className.includes('splitpanes__pane') && n++, s === e.$el),
          );
          const r = parseFloat(e.minSize),
            o = parseFloat(e.maxSize);
          this.panes.splice(n, 0, {
            id: e._.uid,
            index: n,
            min: isNaN(r) ? 0 : r,
            max: isNaN(o) ? 100 : o,
            size: e.size === null ? null : parseFloat(e.size),
            givenSize: e.size,
            update: e.update,
          }),
            this.panes.forEach((s, l) => (s.index = l)),
            this.ready &&
              this.$nextTick(() => {
                this.redoSplitters(),
                  this.resetPaneSizes({ addedPane: this.panes[n] }),
                  this.$emit('pane-add', {
                    index: n,
                    panes: this.panes.map(s => ({ min: s.min, max: s.max, size: s.size })),
                  });
              });
        },
        onPaneRemove(e) {
          const n = this.panes.findIndex(o => o.id === e._.uid),
            r = this.panes.splice(n, 1)[0];
          this.panes.forEach((o, s) => (o.index = s)),
            this.$nextTick(() => {
              this.redoSplitters(),
                this.resetPaneSizes({ removedPane: { ...r, index: n } }),
                this.$emit('pane-remove', {
                  removed: r,
                  panes: this.panes.map(o => ({ min: o.min, max: o.max, size: o.size })),
                });
            });
        },
        resetPaneSizes(e = {}) {
          !e.addedPane && !e.removedPane
            ? this.initialPanesSizing()
            : this.panes.some(n => n.givenSize !== null || n.min || n.max < 100)
              ? this.equalizeAfterAddOrRemove(e)
              : this.equalize(),
            this.ready &&
              this.$emit(
                'resized',
                this.panes.map(n => ({ min: n.min, max: n.max, size: n.size })),
              );
        },
        equalize() {
          const e = 100 / this.panesCount;
          let n = 0;
          const r = [],
            o = [];
          this.panes.forEach(s => {
            (s.size = Math.max(Math.min(e, s.max), s.min)),
              (n -= s.size),
              s.size >= s.max && r.push(s.id),
              s.size <= s.min && o.push(s.id);
          }),
            n > 0.1 && this.readjustSizes(n, r, o);
        },
        initialPanesSizing() {
          let e = 100;
          const n = [],
            r = [];
          let o = 0;
          this.panes.forEach(l => {
            (e -= l.size), l.size !== null && o++, l.size >= l.max && n.push(l.id), l.size <= l.min && r.push(l.id);
          });
          let s = 100;
          e > 0.1 &&
            (this.panes.forEach(l => {
              l.size === null && (l.size = Math.max(Math.min(e / (this.panesCount - o), l.max), l.min)), (s -= l.size);
            }),
            s > 0.1 && this.readjustSizes(e, n, r));
        },
        equalizeAfterAddOrRemove({ addedPane: e, removedPane: n } = {}) {
          let r = 100 / this.panesCount,
            o = 0;
          const s = [],
            l = [];
          e && e.givenSize !== null && (r = (100 - e.givenSize) / (this.panesCount - 1)),
            this.panes.forEach(c => {
              (o -= c.size), c.size >= c.max && s.push(c.id), c.size <= c.min && l.push(c.id);
            }),
            !(Math.abs(o) < 0.1) &&
              (this.panes.forEach(c => {
                (e && e.givenSize !== null && e.id === c.id) || (c.size = Math.max(Math.min(r, c.max), c.min)),
                  (o -= c.size),
                  c.size >= c.max && s.push(c.id),
                  c.size <= c.min && l.push(c.id);
              }),
              o > 0.1 && this.readjustSizes(o, s, l));
        },
        readjustSizes(e, n, r) {
          let o;
          e > 0 ? (o = e / (this.panesCount - n.length)) : (o = e / (this.panesCount - r.length)),
            this.panes.forEach((s, l) => {
              if (e > 0 && !n.includes(s.id)) {
                const c = Math.max(Math.min(s.size + o, s.max), s.min),
                  f = c - s.size;
                (e -= f), (s.size = c);
              } else if (!r.includes(s.id)) {
                const c = Math.max(Math.min(s.size + o, s.max), s.min),
                  f = c - s.size;
                (e -= f), (s.size = c);
              }
              s.update({ [this.horizontal ? 'height' : 'width']: `${this.indexedPanes[s.id].size}%` });
            }),
            Math.abs(e) > 0.1 &&
              this.$nextTick(() => {
                this.ready && console.warn('Splitpanes: Could not resize panes correctly due to their constraints.');
              });
        },
      },
      watch: {
        panes: {
          deep: !0,
          immediate: !1,
          handler() {
            this.updatePaneComponents();
          },
        },
        horizontal() {
          this.updatePaneComponents();
        },
        firstSplitter() {
          this.redoSplitters();
        },
        dblClickSplitter(e) {
          [...this.container.querySelectorAll('.splitpanes__splitter')].forEach((n, r) => {
            n.ondblclick = e ? o => this.onSplitterDblClick(o, r) : void 0;
          });
        },
      },
      beforeUnmount() {
        this.ready = !1;
      },
      mounted() {
        (this.container = this.$refs.container),
          this.checkSplitpanesNodes(),
          this.redoSplitters(),
          this.resetPaneSizes(),
          this.$emit('ready'),
          (this.ready = !0);
      },
      render() {
        return t.h(
          'div',
          {
            ref: 'container',
            class: [
              'splitpanes',
              `splitpanes--${this.horizontal ? 'horizontal' : 'vertical'}`,
              { 'splitpanes--dragging': this.touch.dragging },
            ],
          },
          this.$slots.default(),
        );
      },
    },
    xg = (e, n) => {
      const r = e.__vccOpts || e;
      for (const [o, s] of n) r[o] = s;
      return r;
    },
    Og = {
      name: 'pane',
      inject: ['requestUpdate', 'onPaneAdd', 'onPaneRemove', 'onPaneClick'],
      props: {
        size: { type: [Number, String], default: null },
        minSize: { type: [Number, String], default: 0 },
        maxSize: { type: [Number, String], default: 100 },
      },
      data: () => ({ style: {} }),
      mounted() {
        this.onPaneAdd(this);
      },
      beforeUnmount() {
        this.onPaneRemove(this);
      },
      methods: {
        update(e) {
          this.style = e;
        },
      },
      computed: {
        sizeNumber() {
          return this.size || this.size === 0 ? parseFloat(this.size) : null;
        },
        minSizeNumber() {
          return parseFloat(this.minSize);
        },
        maxSizeNumber() {
          return parseFloat(this.maxSize);
        },
      },
      watch: {
        sizeNumber(e) {
          this.requestUpdate({ target: this, size: e });
        },
        minSizeNumber(e) {
          this.requestUpdate({ target: this, min: e });
        },
        maxSizeNumber(e) {
          this.requestUpdate({ target: this, max: e });
        },
      },
    };
  function Rg(e, n, r, o, s, l) {
    return (
      t.openBlock(),
      t.createElementBlock(
        'div',
        {
          class: 'splitpanes__pane',
          onClick: n[0] || (n[0] = c => l.onPaneClick(c, e._.uid)),
          style: t.normalizeStyle(e.style),
        },
        [t.renderSlot(e.$slots, 'default')],
        4,
      )
    );
  }
  const ku = xg(Og, [['render', Rg]]),
    pa = Symbol('selectedNodeId'),
    ha = Symbol('highlightedNodeId'),
    Fr = Symbol('selectNode'),
    Wr = Symbol('viewOptions'),
    xn = Symbol('plan');
  var Du = { exports: {} };
  /*!
   * clipboard.js v2.0.10
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   */ (function (e, n) {
    (function (o, s) {
      e.exports = s();
    })(cn, function () {
      return (function () {
        var r = {
            686: function (l, c, f) {
              f.d(c, {
                default: function () {
                  return fe;
                },
              });
              var d = f(279),
                m = f.n(d),
                p = f(370),
                T = f.n(p),
                N = f(817),
                b = f.n(N);
              function R(ne) {
                try {
                  return document.execCommand(ne);
                } catch {
                  return !1;
                }
              }
              var C = function (te) {
                  var de = b()(te);
                  return R('cut'), de;
                },
                B = C;
              function S(ne) {
                var te = document.documentElement.getAttribute('dir') === 'rtl',
                  de = document.createElement('textarea');
                (de.style.fontSize = '12pt'),
                  (de.style.border = '0'),
                  (de.style.padding = '0'),
                  (de.style.margin = '0'),
                  (de.style.position = 'absolute'),
                  (de.style[te ? 'right' : 'left'] = '-9999px');
                var j = window.pageYOffset || document.documentElement.scrollTop;
                return (de.style.top = ''.concat(j, 'px')), de.setAttribute('readonly', ''), (de.value = ne), de;
              }
              var V = function (te) {
                  var de =
                      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { container: document.body },
                    j = '';
                  if (typeof te == 'string') {
                    var X = S(te);
                    de.container.appendChild(X), (j = b()(X)), R('copy'), X.remove();
                  } else (j = b()(te)), R('copy');
                  return j;
                },
                Y = V;
              function _(ne) {
                '@babel/helpers - typeof';
                return (
                  typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                    ? (_ = function (de) {
                        return typeof de;
                      })
                    : (_ = function (de) {
                        return de && typeof Symbol == 'function' && de.constructor === Symbol && de !== Symbol.prototype
                          ? 'symbol'
                          : typeof de;
                      }),
                  _(ne)
                );
              }
              var k = function () {
                  var te = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    de = te.action,
                    j = de === void 0 ? 'copy' : de,
                    X = te.container,
                    Z = te.target,
                    pe = te.text;
                  if (j !== 'copy' && j !== 'cut')
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                  if (Z !== void 0)
                    if (Z && _(Z) === 'object' && Z.nodeType === 1) {
                      if (j === 'copy' && Z.hasAttribute('disabled'))
                        throw new Error(
                          'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute',
                        );
                      if (j === 'cut' && (Z.hasAttribute('readonly') || Z.hasAttribute('disabled')))
                        throw new Error(
                          `Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`,
                        );
                    } else throw new Error('Invalid "target" value, use a valid Element');
                  if (pe) return Y(pe, { container: X });
                  if (Z) return j === 'cut' ? B(Z) : Y(Z, { container: X });
                },
                O = k;
              function D(ne) {
                '@babel/helpers - typeof';
                return (
                  typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                    ? (D = function (de) {
                        return typeof de;
                      })
                    : (D = function (de) {
                        return de && typeof Symbol == 'function' && de.constructor === Symbol && de !== Symbol.prototype
                          ? 'symbol'
                          : typeof de;
                      }),
                  D(ne)
                );
              }
              function L(ne, te) {
                if (!(ne instanceof te)) throw new TypeError('Cannot call a class as a function');
              }
              function y(ne, te) {
                for (var de = 0; de < te.length; de++) {
                  var j = te[de];
                  (j.enumerable = j.enumerable || !1),
                    (j.configurable = !0),
                    'value' in j && (j.writable = !0),
                    Object.defineProperty(ne, j.key, j);
                }
              }
              function K(ne, te, de) {
                return te && y(ne.prototype, te), de && y(ne, de), ne;
              }
              function M(ne, te) {
                if (typeof te != 'function' && te !== null)
                  throw new TypeError('Super expression must either be null or a function');
                (ne.prototype = Object.create(te && te.prototype, {
                  constructor: { value: ne, writable: !0, configurable: !0 },
                })),
                  te && H(ne, te);
              }
              function H(ne, te) {
                return (
                  (H =
                    Object.setPrototypeOf ||
                    function (j, X) {
                      return (j.__proto__ = X), j;
                    }),
                  H(ne, te)
                );
              }
              function q(ne) {
                var te = I();
                return function () {
                  var j = z(ne),
                    X;
                  if (te) {
                    var Z = z(this).constructor;
                    X = Reflect.construct(j, arguments, Z);
                  } else X = j.apply(this, arguments);
                  return U(this, X);
                };
              }
              function U(ne, te) {
                return te && (D(te) === 'object' || typeof te == 'function') ? te : ee(ne);
              }
              function ee(ne) {
                if (ne === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return ne;
              }
              function I() {
                if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == 'function') return !0;
                try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch {
                  return !1;
                }
              }
              function z(ne) {
                return (
                  (z = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (de) {
                        return de.__proto__ || Object.getPrototypeOf(de);
                      }),
                  z(ne)
                );
              }
              function Q(ne, te) {
                var de = 'data-clipboard-'.concat(ne);
                if (te.hasAttribute(de)) return te.getAttribute(de);
              }
              var oe = (function (ne) {
                  M(de, ne);
                  var te = q(de);
                  function de(j, X) {
                    var Z;
                    return L(this, de), (Z = te.call(this)), Z.resolveOptions(X), Z.listenClick(j), Z;
                  }
                  return (
                    K(
                      de,
                      [
                        {
                          key: 'resolveOptions',
                          value: function () {
                            var X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                            (this.action = typeof X.action == 'function' ? X.action : this.defaultAction),
                              (this.target = typeof X.target == 'function' ? X.target : this.defaultTarget),
                              (this.text = typeof X.text == 'function' ? X.text : this.defaultText),
                              (this.container = D(X.container) === 'object' ? X.container : document.body);
                          },
                        },
                        {
                          key: 'listenClick',
                          value: function (X) {
                            var Z = this;
                            this.listener = T()(X, 'click', function (pe) {
                              return Z.onClick(pe);
                            });
                          },
                        },
                        {
                          key: 'onClick',
                          value: function (X) {
                            var Z = X.delegateTarget || X.currentTarget,
                              pe = this.action(Z) || 'copy',
                              le = O({
                                action: pe,
                                container: this.container,
                                target: this.target(Z),
                                text: this.text(Z),
                              });
                            this.emit(le ? 'success' : 'error', {
                              action: pe,
                              text: le,
                              trigger: Z,
                              clearSelection: function () {
                                Z && Z.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();
                              },
                            });
                          },
                        },
                        {
                          key: 'defaultAction',
                          value: function (X) {
                            return Q('action', X);
                          },
                        },
                        {
                          key: 'defaultTarget',
                          value: function (X) {
                            var Z = Q('target', X);
                            if (Z) return document.querySelector(Z);
                          },
                        },
                        {
                          key: 'defaultText',
                          value: function (X) {
                            return Q('text', X);
                          },
                        },
                        {
                          key: 'destroy',
                          value: function () {
                            this.listener.destroy();
                          },
                        },
                      ],
                      [
                        {
                          key: 'copy',
                          value: function (X) {
                            var Z =
                              arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : { container: document.body };
                            return Y(X, Z);
                          },
                        },
                        {
                          key: 'cut',
                          value: function (X) {
                            return B(X);
                          },
                        },
                        {
                          key: 'isSupported',
                          value: function () {
                            var X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ['copy', 'cut'],
                              Z = typeof X == 'string' ? [X] : X,
                              pe = !!document.queryCommandSupported;
                            return (
                              Z.forEach(function (le) {
                                pe = pe && !!document.queryCommandSupported(le);
                              }),
                              pe
                            );
                          },
                        },
                      ],
                    ),
                    de
                  );
                })(m()),
                fe = oe;
            },
            828: function (l) {
              var c = 9;
              if (typeof Element < 'u' && !Element.prototype.matches) {
                var f = Element.prototype;
                f.matches =
                  f.matchesSelector ||
                  f.mozMatchesSelector ||
                  f.msMatchesSelector ||
                  f.oMatchesSelector ||
                  f.webkitMatchesSelector;
              }
              function d(m, p) {
                for (; m && m.nodeType !== c; ) {
                  if (typeof m.matches == 'function' && m.matches(p)) return m;
                  m = m.parentNode;
                }
              }
              l.exports = d;
            },
            438: function (l, c, f) {
              var d = f(828);
              function m(N, b, R, C, B) {
                var S = T.apply(this, arguments);
                return (
                  N.addEventListener(R, S, B),
                  {
                    destroy: function () {
                      N.removeEventListener(R, S, B);
                    },
                  }
                );
              }
              function p(N, b, R, C, B) {
                return typeof N.addEventListener == 'function'
                  ? m.apply(null, arguments)
                  : typeof R == 'function'
                    ? m.bind(null, document).apply(null, arguments)
                    : (typeof N == 'string' && (N = document.querySelectorAll(N)),
                      Array.prototype.map.call(N, function (S) {
                        return m(S, b, R, C, B);
                      }));
              }
              function T(N, b, R, C) {
                return function (B) {
                  (B.delegateTarget = d(B.target, b)), B.delegateTarget && C.call(N, B);
                };
              }
              l.exports = p;
            },
            879: function (l, c) {
              (c.node = function (f) {
                return f !== void 0 && f instanceof HTMLElement && f.nodeType === 1;
              }),
                (c.nodeList = function (f) {
                  var d = Object.prototype.toString.call(f);
                  return (
                    f !== void 0 &&
                    (d === '[object NodeList]' || d === '[object HTMLCollection]') &&
                    'length' in f &&
                    (f.length === 0 || c.node(f[0]))
                  );
                }),
                (c.string = function (f) {
                  return typeof f == 'string' || f instanceof String;
                }),
                (c.fn = function (f) {
                  var d = Object.prototype.toString.call(f);
                  return d === '[object Function]';
                });
            },
            370: function (l, c, f) {
              var d = f(879),
                m = f(438);
              function p(R, C, B) {
                if (!R && !C && !B) throw new Error('Missing required arguments');
                if (!d.string(C)) throw new TypeError('Second argument must be a String');
                if (!d.fn(B)) throw new TypeError('Third argument must be a Function');
                if (d.node(R)) return T(R, C, B);
                if (d.nodeList(R)) return N(R, C, B);
                if (d.string(R)) return b(R, C, B);
                throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
              }
              function T(R, C, B) {
                return (
                  R.addEventListener(C, B),
                  {
                    destroy: function () {
                      R.removeEventListener(C, B);
                    },
                  }
                );
              }
              function N(R, C, B) {
                return (
                  Array.prototype.forEach.call(R, function (S) {
                    S.addEventListener(C, B);
                  }),
                  {
                    destroy: function () {
                      Array.prototype.forEach.call(R, function (S) {
                        S.removeEventListener(C, B);
                      });
                    },
                  }
                );
              }
              function b(R, C, B) {
                return m(document.body, R, C, B);
              }
              l.exports = p;
            },
            817: function (l) {
              function c(f) {
                var d;
                if (f.nodeName === 'SELECT') f.focus(), (d = f.value);
                else if (f.nodeName === 'INPUT' || f.nodeName === 'TEXTAREA') {
                  var m = f.hasAttribute('readonly');
                  m || f.setAttribute('readonly', ''),
                    f.select(),
                    f.setSelectionRange(0, f.value.length),
                    m || f.removeAttribute('readonly'),
                    (d = f.value);
                } else {
                  f.hasAttribute('contenteditable') && f.focus();
                  var p = window.getSelection(),
                    T = document.createRange();
                  T.selectNodeContents(f), p.removeAllRanges(), p.addRange(T), (d = p.toString());
                }
                return d;
              }
              l.exports = c;
            },
            279: function (l) {
              function c() {}
              (c.prototype = {
                on: function (f, d, m) {
                  var p = this.e || (this.e = {});
                  return (p[f] || (p[f] = [])).push({ fn: d, ctx: m }), this;
                },
                once: function (f, d, m) {
                  var p = this;
                  function T() {
                    p.off(f, T), d.apply(m, arguments);
                  }
                  return (T._ = d), this.on(f, T, m);
                },
                emit: function (f) {
                  var d = [].slice.call(arguments, 1),
                    m = ((this.e || (this.e = {}))[f] || []).slice(),
                    p = 0,
                    T = m.length;
                  for (p; p < T; p++) m[p].fn.apply(m[p].ctx, d);
                  return this;
                },
                off: function (f, d) {
                  var m = this.e || (this.e = {}),
                    p = m[f],
                    T = [];
                  if (p && d)
                    for (var N = 0, b = p.length; N < b; N++) p[N].fn !== d && p[N].fn._ !== d && T.push(p[N]);
                  return T.length ? (m[f] = T) : delete m[f], this;
                },
              }),
                (l.exports = c),
                (l.exports.TinyEmitter = c);
            },
          },
          o = {};
        function s(l) {
          if (o[l]) return o[l].exports;
          var c = (o[l] = { exports: {} });
          return r[l](c, c.exports, s), c.exports;
        }
        return (
          (function () {
            s.n = function (l) {
              var c =
                l && l.__esModule
                  ? function () {
                      return l.default;
                    }
                  : function () {
                      return l;
                    };
              return s.d(c, { a: c }), c;
            };
          })(),
          (function () {
            s.d = function (l, c) {
              for (var f in c) s.o(c, f) && !s.o(l, f) && Object.defineProperty(l, f, { enumerable: !0, get: c[f] });
            };
          })(),
          (function () {
            s.o = function (l, c) {
              return Object.prototype.hasOwnProperty.call(l, c);
            };
          })(),
          s(686)
        );
      })().default;
    });
  })(Du);
  var Cg = Du.exports;
  const Ig = ua(Cg),
    Lg = e => {
      const n = (e == null ? void 0 : e.appendToBody) === void 0 ? !0 : e.appendToBody;
      return {
        toClipboard(r, o) {
          return new Promise((s, l) => {
            const c = document.createElement('button'),
              f = new Ig(c, { text: () => r, action: () => 'copy', container: o !== void 0 ? o : document.body });
            f.on('success', d => {
              f.destroy(), s(d);
            }),
              f.on('error', d => {
                f.destroy(), l(d);
              }),
              n && document.body.appendChild(c),
              c.click(),
              n && document.body.removeChild(c);
          });
        },
      };
    };
  /*!
   * vue-tippy v6.0.0
   * (c) 2022
   * @license MIT
   */ var Ht = 'top',
    fn = 'bottom',
    un = 'right',
    Ft = 'left',
    El = 'auto',
    ao = [Ht, fn, un, Ft],
    Ai = 'start',
    so = 'end',
    wg = 'clippingParents',
    Vu = 'viewport',
    lo = 'popper',
    vg = 'reference',
    Mu = ao.reduce(function (e, n) {
      return e.concat([n + '-' + Ai, n + '-' + so]);
    }, []),
    Bu = [].concat(ao, [El]).reduce(function (e, n) {
      return e.concat([n, n + '-' + Ai, n + '-' + so]);
    }, []),
    kg = 'beforeRead',
    Dg = 'read',
    Vg = 'afterRead',
    Mg = 'beforeMain',
    Bg = 'main',
    Pg = 'afterMain',
    Ug = 'beforeWrite',
    $g = 'write',
    Hg = 'afterWrite',
    Fg = [kg, Dg, Vg, Mg, Bg, Pg, Ug, $g, Hg];
  function Hn(e) {
    return e ? (e.nodeName || '').toLowerCase() : null;
  }
  function On(e) {
    if (e == null) return window;
    if (e.toString() !== '[object Window]') {
      var n = e.ownerDocument;
      return (n && n.defaultView) || window;
    }
    return e;
  }
  function yi(e) {
    var n = On(e).Element;
    return e instanceof n || e instanceof Element;
  }
  function dn(e) {
    var n = On(e).HTMLElement;
    return e instanceof n || e instanceof HTMLElement;
  }
  function Pu(e) {
    if (typeof ShadowRoot > 'u') return !1;
    var n = On(e).ShadowRoot;
    return e instanceof n || e instanceof ShadowRoot;
  }
  function Wg(e) {
    var n = e.state;
    Object.keys(n.elements).forEach(function (r) {
      var o = n.styles[r] || {},
        s = n.attributes[r] || {},
        l = n.elements[r];
      !dn(l) ||
        !Hn(l) ||
        (Object.assign(l.style, o),
        Object.keys(s).forEach(function (c) {
          var f = s[c];
          f === !1 ? l.removeAttribute(c) : l.setAttribute(c, f === !0 ? '' : f);
        }));
    });
  }
  function zg(e) {
    var n = e.state,
      r = {
        popper: { position: n.options.strategy, left: '0', top: '0', margin: '0' },
        arrow: { position: 'absolute' },
        reference: {},
      };
    return (
      Object.assign(n.elements.popper.style, r.popper),
      (n.styles = r),
      n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow),
      function () {
        Object.keys(n.elements).forEach(function (o) {
          var s = n.elements[o],
            l = n.attributes[o] || {},
            c = Object.keys(n.styles.hasOwnProperty(o) ? n.styles[o] : r[o]),
            f = c.reduce(function (d, m) {
              return (d[m] = ''), d;
            }, {});
          !dn(s) ||
            !Hn(s) ||
            (Object.assign(s.style, f),
            Object.keys(l).forEach(function (d) {
              s.removeAttribute(d);
            }));
        });
      }
    );
  }
  var Uu = { name: 'applyStyles', enabled: !0, phase: 'write', fn: Wg, effect: zg, requires: ['computeStyles'] };
  function Fn(e) {
    return e.split('-')[0];
  }
  var zr = Math.max,
    ma = Math.min,
    Si = Math.round;
  function bi(e, n) {
    n === void 0 && (n = !1);
    var r = e.getBoundingClientRect(),
      o = 1,
      s = 1;
    if (dn(e) && n) {
      var l = e.offsetHeight,
        c = e.offsetWidth;
      c > 0 && (o = Si(r.width) / c || 1), l > 0 && (s = Si(r.height) / l || 1);
    }
    return {
      width: r.width / o,
      height: r.height / s,
      top: r.top / s,
      right: r.right / o,
      bottom: r.bottom / s,
      left: r.left / o,
      x: r.left / o,
      y: r.top / s,
    };
  }
  function _l(e) {
    var n = bi(e),
      r = e.offsetWidth,
      o = e.offsetHeight;
    return (
      Math.abs(n.width - r) <= 1 && (r = n.width),
      Math.abs(n.height - o) <= 1 && (o = n.height),
      { x: e.offsetLeft, y: e.offsetTop, width: r, height: o }
    );
  }
  function $u(e, n) {
    var r = n.getRootNode && n.getRootNode();
    if (e.contains(n)) return !0;
    if (r && Pu(r)) {
      var o = n;
      do {
        if (o && e.isSameNode(o)) return !0;
        o = o.parentNode || o.host;
      } while (o);
    }
    return !1;
  }
  function Wn(e) {
    return On(e).getComputedStyle(e);
  }
  function Xg(e) {
    return ['table', 'td', 'th'].indexOf(Hn(e)) >= 0;
  }
  function br(e) {
    return ((yi(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function Ea(e) {
    return Hn(e) === 'html' ? e : e.assignedSlot || e.parentNode || (Pu(e) ? e.host : null) || br(e);
  }
  function Hu(e) {
    return !dn(e) || Wn(e).position === 'fixed' ? null : e.offsetParent;
  }
  function Gg(e) {
    var n = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
      r = navigator.userAgent.indexOf('Trident') !== -1;
    if (r && dn(e)) {
      var o = Wn(e);
      if (o.position === 'fixed') return null;
    }
    for (var s = Ea(e); dn(s) && ['html', 'body'].indexOf(Hn(s)) < 0; ) {
      var l = Wn(s);
      if (
        l.transform !== 'none' ||
        l.perspective !== 'none' ||
        l.contain === 'paint' ||
        ['transform', 'perspective'].indexOf(l.willChange) !== -1 ||
        (n && l.willChange === 'filter') ||
        (n && l.filter && l.filter !== 'none')
      )
        return s;
      s = s.parentNode;
    }
    return null;
  }
  function co(e) {
    for (var n = On(e), r = Hu(e); r && Xg(r) && Wn(r).position === 'static'; ) r = Hu(r);
    return r && (Hn(r) === 'html' || (Hn(r) === 'body' && Wn(r).position === 'static')) ? n : r || Gg(e) || n;
  }
  function gl(e) {
    return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
  }
  function fo(e, n, r) {
    return zr(e, ma(n, r));
  }
  function Yg(e, n, r) {
    var o = fo(e, n, r);
    return o > r ? r : o;
  }
  function Fu() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function Wu(e) {
    return Object.assign({}, Fu(), e);
  }
  function zu(e, n) {
    return n.reduce(function (r, o) {
      return (r[o] = e), r;
    }, {});
  }
  var Kg = function (n, r) {
    return (
      (n = typeof n == 'function' ? n(Object.assign({}, r.rects, { placement: r.placement })) : n),
      Wu(typeof n != 'number' ? n : zu(n, ao))
    );
  };
  function jg(e) {
    var n,
      r = e.state,
      o = e.name,
      s = e.options,
      l = r.elements.arrow,
      c = r.modifiersData.popperOffsets,
      f = Fn(r.placement),
      d = gl(f),
      m = [Ft, un].indexOf(f) >= 0,
      p = m ? 'height' : 'width';
    if (!(!l || !c)) {
      var T = Kg(s.padding, r),
        N = _l(l),
        b = d === 'y' ? Ht : Ft,
        R = d === 'y' ? fn : un,
        C = r.rects.reference[p] + r.rects.reference[d] - c[d] - r.rects.popper[p],
        B = c[d] - r.rects.reference[d],
        S = co(l),
        V = S ? (d === 'y' ? S.clientHeight || 0 : S.clientWidth || 0) : 0,
        Y = C / 2 - B / 2,
        _ = T[b],
        k = V - N[p] - T[R],
        O = V / 2 - N[p] / 2 + Y,
        D = fo(_, O, k),
        L = d;
      r.modifiersData[o] = ((n = {}), (n[L] = D), (n.centerOffset = D - O), n);
    }
  }
  function qg(e) {
    var n = e.state,
      r = e.options,
      o = r.element,
      s = o === void 0 ? '[data-popper-arrow]' : o;
    s != null &&
      ((typeof s == 'string' && ((s = n.elements.popper.querySelector(s)), !s)) ||
        ($u(n.elements.popper, s) && (n.elements.arrow = s)));
  }
  var Jg = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: jg,
    effect: qg,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
  };
  function xi(e) {
    return e.split('-')[1];
  }
  var Qg = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
  function Zg(e) {
    var n = e.x,
      r = e.y,
      o = window,
      s = o.devicePixelRatio || 1;
    return { x: Si(n * s) / s || 0, y: Si(r * s) / s || 0 };
  }
  function Xu(e) {
    var n,
      r = e.popper,
      o = e.popperRect,
      s = e.placement,
      l = e.variation,
      c = e.offsets,
      f = e.position,
      d = e.gpuAcceleration,
      m = e.adaptive,
      p = e.roundOffsets,
      T = e.isFixed,
      N = p === !0 ? Zg(c) : typeof p == 'function' ? p(c) : c,
      b = N.x,
      R = b === void 0 ? 0 : b,
      C = N.y,
      B = C === void 0 ? 0 : C,
      S = c.hasOwnProperty('x'),
      V = c.hasOwnProperty('y'),
      Y = Ft,
      _ = Ht,
      k = window;
    if (m) {
      var O = co(r),
        D = 'clientHeight',
        L = 'clientWidth';
      if (
        (O === On(r) &&
          ((O = br(r)), Wn(O).position !== 'static' && f === 'absolute' && ((D = 'scrollHeight'), (L = 'scrollWidth'))),
        (O = O),
        s === Ht || ((s === Ft || s === un) && l === so))
      ) {
        _ = fn;
        var y = T && k.visualViewport ? k.visualViewport.height : O[D];
        (B -= y - o.height), (B *= d ? 1 : -1);
      }
      if (s === Ft || ((s === Ht || s === fn) && l === so)) {
        Y = un;
        var K = T && k.visualViewport ? k.visualViewport.width : O[L];
        (R -= K - o.width), (R *= d ? 1 : -1);
      }
    }
    var M = Object.assign({ position: f }, m && Qg);
    if (d) {
      var H;
      return Object.assign(
        {},
        M,
        ((H = {}),
        (H[_] = V ? '0' : ''),
        (H[Y] = S ? '0' : ''),
        (H.transform =
          (k.devicePixelRatio || 1) <= 1
            ? 'translate(' + R + 'px, ' + B + 'px)'
            : 'translate3d(' + R + 'px, ' + B + 'px, 0)'),
        H),
      );
    }
    return Object.assign(
      {},
      M,
      ((n = {}), (n[_] = V ? B + 'px' : ''), (n[Y] = S ? R + 'px' : ''), (n.transform = ''), n),
    );
  }
  function eT(e) {
    var n = e.state,
      r = e.options,
      o = r.gpuAcceleration,
      s = o === void 0 ? !0 : o,
      l = r.adaptive,
      c = l === void 0 ? !0 : l,
      f = r.roundOffsets,
      d = f === void 0 ? !0 : f,
      m = {
        placement: Fn(n.placement),
        variation: xi(n.placement),
        popper: n.elements.popper,
        popperRect: n.rects.popper,
        gpuAcceleration: s,
        isFixed: n.options.strategy === 'fixed',
      };
    n.modifiersData.popperOffsets != null &&
      (n.styles.popper = Object.assign(
        {},
        n.styles.popper,
        Xu(
          Object.assign({}, m, {
            offsets: n.modifiersData.popperOffsets,
            position: n.options.strategy,
            adaptive: c,
            roundOffsets: d,
          }),
        ),
      )),
      n.modifiersData.arrow != null &&
        (n.styles.arrow = Object.assign(
          {},
          n.styles.arrow,
          Xu(
            Object.assign({}, m, {
              offsets: n.modifiersData.arrow,
              position: 'absolute',
              adaptive: !1,
              roundOffsets: d,
            }),
          ),
        )),
      (n.attributes.popper = Object.assign({}, n.attributes.popper, { 'data-popper-placement': n.placement }));
  }
  var tT = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: eT, data: {} },
    _a = { passive: !0 };
  function nT(e) {
    var n = e.state,
      r = e.instance,
      o = e.options,
      s = o.scroll,
      l = s === void 0 ? !0 : s,
      c = o.resize,
      f = c === void 0 ? !0 : c,
      d = On(n.elements.popper),
      m = [].concat(n.scrollParents.reference, n.scrollParents.popper);
    return (
      l &&
        m.forEach(function (p) {
          p.addEventListener('scroll', r.update, _a);
        }),
      f && d.addEventListener('resize', r.update, _a),
      function () {
        l &&
          m.forEach(function (p) {
            p.removeEventListener('scroll', r.update, _a);
          }),
          f && d.removeEventListener('resize', r.update, _a);
      }
    );
  }
  var rT = { name: 'eventListeners', enabled: !0, phase: 'write', fn: function () {}, effect: nT, data: {} },
    iT = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  function ga(e) {
    return e.replace(/left|right|bottom|top/g, function (n) {
      return iT[n];
    });
  }
  var oT = { start: 'end', end: 'start' };
  function Gu(e) {
    return e.replace(/start|end/g, function (n) {
      return oT[n];
    });
  }
  function Tl(e) {
    var n = On(e),
      r = n.pageXOffset,
      o = n.pageYOffset;
    return { scrollLeft: r, scrollTop: o };
  }
  function Nl(e) {
    return bi(br(e)).left + Tl(e).scrollLeft;
  }
  function aT(e) {
    var n = On(e),
      r = br(e),
      o = n.visualViewport,
      s = r.clientWidth,
      l = r.clientHeight,
      c = 0,
      f = 0;
    return (
      o &&
        ((s = o.width),
        (l = o.height),
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((c = o.offsetLeft), (f = o.offsetTop))),
      { width: s, height: l, x: c + Nl(e), y: f }
    );
  }
  function sT(e) {
    var n,
      r = br(e),
      o = Tl(e),
      s = (n = e.ownerDocument) == null ? void 0 : n.body,
      l = zr(r.scrollWidth, r.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
      c = zr(r.scrollHeight, r.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
      f = -o.scrollLeft + Nl(e),
      d = -o.scrollTop;
    return (
      Wn(s || r).direction === 'rtl' && (f += zr(r.clientWidth, s ? s.clientWidth : 0) - l),
      { width: l, height: c, x: f, y: d }
    );
  }
  function Al(e) {
    var n = Wn(e),
      r = n.overflow,
      o = n.overflowX,
      s = n.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + s + o);
  }
  function Yu(e) {
    return ['html', 'body', '#document'].indexOf(Hn(e)) >= 0 ? e.ownerDocument.body : dn(e) && Al(e) ? e : Yu(Ea(e));
  }
  function uo(e, n) {
    var r;
    n === void 0 && (n = []);
    var o = Yu(e),
      s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
      l = On(o),
      c = s ? [l].concat(l.visualViewport || [], Al(o) ? o : []) : o,
      f = n.concat(c);
    return s ? f : f.concat(uo(Ea(c)));
  }
  function yl(e) {
    return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
  }
  function lT(e) {
    var n = bi(e);
    return (
      (n.top = n.top + e.clientTop),
      (n.left = n.left + e.clientLeft),
      (n.bottom = n.top + e.clientHeight),
      (n.right = n.left + e.clientWidth),
      (n.width = e.clientWidth),
      (n.height = e.clientHeight),
      (n.x = n.left),
      (n.y = n.top),
      n
    );
  }
  function Ku(e, n) {
    return n === Vu ? yl(aT(e)) : yi(n) ? lT(n) : yl(sT(br(e)));
  }
  function cT(e) {
    var n = uo(Ea(e)),
      r = ['absolute', 'fixed'].indexOf(Wn(e).position) >= 0,
      o = r && dn(e) ? co(e) : e;
    return yi(o)
      ? n.filter(function (s) {
          return yi(s) && $u(s, o) && Hn(s) !== 'body' && (r ? Wn(s).position !== 'static' : !0);
        })
      : [];
  }
  function fT(e, n, r) {
    var o = n === 'clippingParents' ? cT(e) : [].concat(n),
      s = [].concat(o, [r]),
      l = s[0],
      c = s.reduce(
        function (f, d) {
          var m = Ku(e, d);
          return (
            (f.top = zr(m.top, f.top)),
            (f.right = ma(m.right, f.right)),
            (f.bottom = ma(m.bottom, f.bottom)),
            (f.left = zr(m.left, f.left)),
            f
          );
        },
        Ku(e, l),
      );
    return (c.width = c.right - c.left), (c.height = c.bottom - c.top), (c.x = c.left), (c.y = c.top), c;
  }
  function ju(e) {
    var n = e.reference,
      r = e.element,
      o = e.placement,
      s = o ? Fn(o) : null,
      l = o ? xi(o) : null,
      c = n.x + n.width / 2 - r.width / 2,
      f = n.y + n.height / 2 - r.height / 2,
      d;
    switch (s) {
      case Ht:
        d = { x: c, y: n.y - r.height };
        break;
      case fn:
        d = { x: c, y: n.y + n.height };
        break;
      case un:
        d = { x: n.x + n.width, y: f };
        break;
      case Ft:
        d = { x: n.x - r.width, y: f };
        break;
      default:
        d = { x: n.x, y: n.y };
    }
    var m = s ? gl(s) : null;
    if (m != null) {
      var p = m === 'y' ? 'height' : 'width';
      switch (l) {
        case Ai:
          d[m] = d[m] - (n[p] / 2 - r[p] / 2);
          break;
        case so:
          d[m] = d[m] + (n[p] / 2 - r[p] / 2);
          break;
      }
    }
    return d;
  }
  function po(e, n) {
    n === void 0 && (n = {});
    var r = n,
      o = r.placement,
      s = o === void 0 ? e.placement : o,
      l = r.boundary,
      c = l === void 0 ? wg : l,
      f = r.rootBoundary,
      d = f === void 0 ? Vu : f,
      m = r.elementContext,
      p = m === void 0 ? lo : m,
      T = r.altBoundary,
      N = T === void 0 ? !1 : T,
      b = r.padding,
      R = b === void 0 ? 0 : b,
      C = Wu(typeof R != 'number' ? R : zu(R, ao)),
      B = p === lo ? vg : lo,
      S = e.rects.popper,
      V = e.elements[N ? B : p],
      Y = fT(yi(V) ? V : V.contextElement || br(e.elements.popper), c, d),
      _ = bi(e.elements.reference),
      k = ju({ reference: _, element: S, strategy: 'absolute', placement: s }),
      O = yl(Object.assign({}, S, k)),
      D = p === lo ? O : _,
      L = {
        top: Y.top - D.top + C.top,
        bottom: D.bottom - Y.bottom + C.bottom,
        left: Y.left - D.left + C.left,
        right: D.right - Y.right + C.right,
      },
      y = e.modifiersData.offset;
    if (p === lo && y) {
      var K = y[s];
      Object.keys(L).forEach(function (M) {
        var H = [un, fn].indexOf(M) >= 0 ? 1 : -1,
          q = [Ht, fn].indexOf(M) >= 0 ? 'y' : 'x';
        L[M] += K[q] * H;
      });
    }
    return L;
  }
  function uT(e, n) {
    n === void 0 && (n = {});
    var r = n,
      o = r.placement,
      s = r.boundary,
      l = r.rootBoundary,
      c = r.padding,
      f = r.flipVariations,
      d = r.allowedAutoPlacements,
      m = d === void 0 ? Bu : d,
      p = xi(o),
      T = p
        ? f
          ? Mu
          : Mu.filter(function (R) {
              return xi(R) === p;
            })
        : ao,
      N = T.filter(function (R) {
        return m.indexOf(R) >= 0;
      });
    N.length === 0 && (N = T);
    var b = N.reduce(function (R, C) {
      return (R[C] = po(e, { placement: C, boundary: s, rootBoundary: l, padding: c })[Fn(C)]), R;
    }, {});
    return Object.keys(b).sort(function (R, C) {
      return b[R] - b[C];
    });
  }
  function dT(e) {
    if (Fn(e) === El) return [];
    var n = ga(e);
    return [Gu(e), n, Gu(n)];
  }
  function pT(e) {
    var n = e.state,
      r = e.options,
      o = e.name;
    if (!n.modifiersData[o]._skip) {
      for (
        var s = r.mainAxis,
          l = s === void 0 ? !0 : s,
          c = r.altAxis,
          f = c === void 0 ? !0 : c,
          d = r.fallbackPlacements,
          m = r.padding,
          p = r.boundary,
          T = r.rootBoundary,
          N = r.altBoundary,
          b = r.flipVariations,
          R = b === void 0 ? !0 : b,
          C = r.allowedAutoPlacements,
          B = n.options.placement,
          S = Fn(B),
          V = S === B,
          Y = d || (V || !R ? [ga(B)] : dT(B)),
          _ = [B].concat(Y).reduce(function (j, X) {
            return j.concat(
              Fn(X) === El
                ? uT(n, {
                    placement: X,
                    boundary: p,
                    rootBoundary: T,
                    padding: m,
                    flipVariations: R,
                    allowedAutoPlacements: C,
                  })
                : X,
            );
          }, []),
          k = n.rects.reference,
          O = n.rects.popper,
          D = new Map(),
          L = !0,
          y = _[0],
          K = 0;
        K < _.length;
        K++
      ) {
        var M = _[K],
          H = Fn(M),
          q = xi(M) === Ai,
          U = [Ht, fn].indexOf(H) >= 0,
          ee = U ? 'width' : 'height',
          I = po(n, { placement: M, boundary: p, rootBoundary: T, altBoundary: N, padding: m }),
          z = U ? (q ? un : Ft) : q ? fn : Ht;
        k[ee] > O[ee] && (z = ga(z));
        var Q = ga(z),
          oe = [];
        if (
          (l && oe.push(I[H] <= 0),
          f && oe.push(I[z] <= 0, I[Q] <= 0),
          oe.every(function (j) {
            return j;
          }))
        ) {
          (y = M), (L = !1);
          break;
        }
        D.set(M, oe);
      }
      if (L)
        for (
          var fe = R ? 3 : 1,
            ne = function (X) {
              var Z = _.find(function (pe) {
                var le = D.get(pe);
                if (le)
                  return le.slice(0, X).every(function (me) {
                    return me;
                  });
              });
              if (Z) return (y = Z), 'break';
            },
            te = fe;
          te > 0;
          te--
        ) {
          var de = ne(te);
          if (de === 'break') break;
        }
      n.placement !== y && ((n.modifiersData[o]._skip = !0), (n.placement = y), (n.reset = !0));
    }
  }
  var hT = { name: 'flip', enabled: !0, phase: 'main', fn: pT, requiresIfExists: ['offset'], data: { _skip: !1 } };
  function qu(e, n, r) {
    return (
      r === void 0 && (r = { x: 0, y: 0 }),
      {
        top: e.top - n.height - r.y,
        right: e.right - n.width + r.x,
        bottom: e.bottom - n.height + r.y,
        left: e.left - n.width - r.x,
      }
    );
  }
  function Ju(e) {
    return [Ht, un, fn, Ft].some(function (n) {
      return e[n] >= 0;
    });
  }
  function mT(e) {
    var n = e.state,
      r = e.name,
      o = n.rects.reference,
      s = n.rects.popper,
      l = n.modifiersData.preventOverflow,
      c = po(n, { elementContext: 'reference' }),
      f = po(n, { altBoundary: !0 }),
      d = qu(c, o),
      m = qu(f, s, l),
      p = Ju(d),
      T = Ju(m);
    (n.modifiersData[r] = {
      referenceClippingOffsets: d,
      popperEscapeOffsets: m,
      isReferenceHidden: p,
      hasPopperEscaped: T,
    }),
      (n.attributes.popper = Object.assign({}, n.attributes.popper, {
        'data-popper-reference-hidden': p,
        'data-popper-escaped': T,
      }));
  }
  var ET = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: mT };
  function _T(e, n, r) {
    var o = Fn(e),
      s = [Ft, Ht].indexOf(o) >= 0 ? -1 : 1,
      l = typeof r == 'function' ? r(Object.assign({}, n, { placement: e })) : r,
      c = l[0],
      f = l[1];
    return (c = c || 0), (f = (f || 0) * s), [Ft, un].indexOf(o) >= 0 ? { x: f, y: c } : { x: c, y: f };
  }
  function gT(e) {
    var n = e.state,
      r = e.options,
      o = e.name,
      s = r.offset,
      l = s === void 0 ? [0, 0] : s,
      c = Bu.reduce(function (p, T) {
        return (p[T] = _T(T, n.rects, l)), p;
      }, {}),
      f = c[n.placement],
      d = f.x,
      m = f.y;
    n.modifiersData.popperOffsets != null &&
      ((n.modifiersData.popperOffsets.x += d), (n.modifiersData.popperOffsets.y += m)),
      (n.modifiersData[o] = c);
  }
  var TT = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: gT };
  function NT(e) {
    var n = e.state,
      r = e.name;
    n.modifiersData[r] = ju({
      reference: n.rects.reference,
      element: n.rects.popper,
      strategy: 'absolute',
      placement: n.placement,
    });
  }
  var AT = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: NT, data: {} };
  function yT(e) {
    return e === 'x' ? 'y' : 'x';
  }
  function ST(e) {
    var n = e.state,
      r = e.options,
      o = e.name,
      s = r.mainAxis,
      l = s === void 0 ? !0 : s,
      c = r.altAxis,
      f = c === void 0 ? !1 : c,
      d = r.boundary,
      m = r.rootBoundary,
      p = r.altBoundary,
      T = r.padding,
      N = r.tether,
      b = N === void 0 ? !0 : N,
      R = r.tetherOffset,
      C = R === void 0 ? 0 : R,
      B = po(n, { boundary: d, rootBoundary: m, padding: T, altBoundary: p }),
      S = Fn(n.placement),
      V = xi(n.placement),
      Y = !V,
      _ = gl(S),
      k = yT(_),
      O = n.modifiersData.popperOffsets,
      D = n.rects.reference,
      L = n.rects.popper,
      y = typeof C == 'function' ? C(Object.assign({}, n.rects, { placement: n.placement })) : C,
      K = typeof y == 'number' ? { mainAxis: y, altAxis: y } : Object.assign({ mainAxis: 0, altAxis: 0 }, y),
      M = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null,
      H = { x: 0, y: 0 };
    if (O) {
      if (l) {
        var q,
          U = _ === 'y' ? Ht : Ft,
          ee = _ === 'y' ? fn : un,
          I = _ === 'y' ? 'height' : 'width',
          z = O[_],
          Q = z + B[U],
          oe = z - B[ee],
          fe = b ? -L[I] / 2 : 0,
          ne = V === Ai ? D[I] : L[I],
          te = V === Ai ? -L[I] : -D[I],
          de = n.elements.arrow,
          j = b && de ? _l(de) : { width: 0, height: 0 },
          X = n.modifiersData['arrow#persistent'] ? n.modifiersData['arrow#persistent'].padding : Fu(),
          Z = X[U],
          pe = X[ee],
          le = fo(0, D[I], j[I]),
          me = Y ? D[I] / 2 - fe - le - Z - K.mainAxis : ne - le - Z - K.mainAxis,
          ye = Y ? -D[I] / 2 + fe + le + pe + K.mainAxis : te + le + pe + K.mainAxis,
          xe = n.elements.arrow && co(n.elements.arrow),
          Be = xe ? (_ === 'y' ? xe.clientTop || 0 : xe.clientLeft || 0) : 0,
          Fe = (q = M == null ? void 0 : M[_]) != null ? q : 0,
          We = z + me - Fe - Be,
          Tt = z + ye - Fe,
          Nt = fo(b ? ma(Q, We) : Q, z, b ? zr(oe, Tt) : oe);
        (O[_] = Nt), (H[_] = Nt - z);
      }
      if (f) {
        var G,
          _e = _ === 'x' ? Ht : Ft,
          ve = _ === 'x' ? fn : un,
          Se = O[k],
          $e = k === 'y' ? 'height' : 'width',
          et = Se + B[_e],
          ft = Se - B[ve],
          Ot = [Ht, Ft].indexOf(S) !== -1,
          he = (G = M == null ? void 0 : M[k]) != null ? G : 0,
          Ne = Ot ? et : Se - D[$e] - L[$e] - he + K.altAxis,
          Le = Ot ? Se + D[$e] + L[$e] - he - K.altAxis : ft,
          Pe = b && Ot ? Yg(Ne, Se, Le) : fo(b ? Ne : et, Se, b ? Le : ft);
        (O[k] = Pe), (H[k] = Pe - Se);
      }
      n.modifiersData[o] = H;
    }
  }
  var bT = { name: 'preventOverflow', enabled: !0, phase: 'main', fn: ST, requiresIfExists: ['offset'] };
  function xT(e) {
    return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
  }
  function OT(e) {
    return e === On(e) || !dn(e) ? Tl(e) : xT(e);
  }
  function RT(e) {
    var n = e.getBoundingClientRect(),
      r = Si(n.width) / e.offsetWidth || 1,
      o = Si(n.height) / e.offsetHeight || 1;
    return r !== 1 || o !== 1;
  }
  function CT(e, n, r) {
    r === void 0 && (r = !1);
    var o = dn(n),
      s = dn(n) && RT(n),
      l = br(n),
      c = bi(e, s),
      f = { scrollLeft: 0, scrollTop: 0 },
      d = { x: 0, y: 0 };
    return (
      (o || (!o && !r)) &&
        ((Hn(n) !== 'body' || Al(l)) && (f = OT(n)),
        dn(n) ? ((d = bi(n, !0)), (d.x += n.clientLeft), (d.y += n.clientTop)) : l && (d.x = Nl(l))),
      { x: c.left + f.scrollLeft - d.x, y: c.top + f.scrollTop - d.y, width: c.width, height: c.height }
    );
  }
  function IT(e) {
    var n = new Map(),
      r = new Set(),
      o = [];
    e.forEach(function (l) {
      n.set(l.name, l);
    });
    function s(l) {
      r.add(l.name);
      var c = [].concat(l.requires || [], l.requiresIfExists || []);
      c.forEach(function (f) {
        if (!r.has(f)) {
          var d = n.get(f);
          d && s(d);
        }
      }),
        o.push(l);
    }
    return (
      e.forEach(function (l) {
        r.has(l.name) || s(l);
      }),
      o
    );
  }
  function LT(e) {
    var n = IT(e);
    return Fg.reduce(function (r, o) {
      return r.concat(
        n.filter(function (s) {
          return s.phase === o;
        }),
      );
    }, []);
  }
  function wT(e) {
    var n;
    return function () {
      return (
        n ||
          (n = new Promise(function (r) {
            Promise.resolve().then(function () {
              (n = void 0), r(e());
            });
          })),
        n
      );
    };
  }
  function vT(e) {
    var n = e.reduce(function (r, o) {
      var s = r[o.name];
      return (
        (r[o.name] = s
          ? Object.assign({}, s, o, {
              options: Object.assign({}, s.options, o.options),
              data: Object.assign({}, s.data, o.data),
            })
          : o),
        r
      );
    }, {});
    return Object.keys(n).map(function (r) {
      return n[r];
    });
  }
  var Qu = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
  function Zu() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return !n.some(function (o) {
      return !(o && typeof o.getBoundingClientRect == 'function');
    });
  }
  function kT(e) {
    e === void 0 && (e = {});
    var n = e,
      r = n.defaultModifiers,
      o = r === void 0 ? [] : r,
      s = n.defaultOptions,
      l = s === void 0 ? Qu : s;
    return function (f, d, m) {
      m === void 0 && (m = l);
      var p = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, Qu, l),
          modifiersData: {},
          elements: { reference: f, popper: d },
          attributes: {},
          styles: {},
        },
        T = [],
        N = !1,
        b = {
          state: p,
          setOptions: function (S) {
            var V = typeof S == 'function' ? S(p.options) : S;
            C(),
              (p.options = Object.assign({}, l, p.options, V)),
              (p.scrollParents = {
                reference: yi(f) ? uo(f) : f.contextElement ? uo(f.contextElement) : [],
                popper: uo(d),
              });
            var Y = LT(vT([].concat(o, p.options.modifiers)));
            return (
              (p.orderedModifiers = Y.filter(function (_) {
                return _.enabled;
              })),
              R(),
              b.update()
            );
          },
          forceUpdate: function () {
            if (!N) {
              var S = p.elements,
                V = S.reference,
                Y = S.popper;
              if (Zu(V, Y)) {
                (p.rects = { reference: CT(V, co(Y), p.options.strategy === 'fixed'), popper: _l(Y) }),
                  (p.reset = !1),
                  (p.placement = p.options.placement),
                  p.orderedModifiers.forEach(function (K) {
                    return (p.modifiersData[K.name] = Object.assign({}, K.data));
                  });
                for (var _ = 0; _ < p.orderedModifiers.length; _++) {
                  if (p.reset === !0) {
                    (p.reset = !1), (_ = -1);
                    continue;
                  }
                  var k = p.orderedModifiers[_],
                    O = k.fn,
                    D = k.options,
                    L = D === void 0 ? {} : D,
                    y = k.name;
                  typeof O == 'function' && (p = O({ state: p, options: L, name: y, instance: b }) || p);
                }
              }
            }
          },
          update: wT(function () {
            return new Promise(function (B) {
              b.forceUpdate(), B(p);
            });
          }),
          destroy: function () {
            C(), (N = !0);
          },
        };
      if (!Zu(f, d)) return b;
      b.setOptions(m).then(function (B) {
        !N && m.onFirstUpdate && m.onFirstUpdate(B);
      });
      function R() {
        p.orderedModifiers.forEach(function (B) {
          var S = B.name,
            V = B.options,
            Y = V === void 0 ? {} : V,
            _ = B.effect;
          if (typeof _ == 'function') {
            var k = _({ state: p, name: S, instance: b, options: Y }),
              O = function () {};
            T.push(k || O);
          }
        });
      }
      function C() {
        T.forEach(function (B) {
          return B();
        }),
          (T = []);
      }
      return b;
    };
  }
  var DT = [rT, AT, tT, Uu, TT, hT, bT, Jg, ET],
    VT = kT({ defaultModifiers: DT }),
    MT = 'tippy-box',
    ed = 'tippy-content',
    td = 'tippy-backdrop',
    nd = 'tippy-arrow',
    rd = 'tippy-svg-arrow',
    Xr = { passive: !0, capture: !0 },
    id = function () {
      return document.body;
    };
  function Sl(e, n, r) {
    if (Array.isArray(e)) {
      var o = e[n];
      return o ?? (Array.isArray(r) ? r[n] : r);
    }
    return e;
  }
  function bl(e, n) {
    var r = {}.toString.call(e);
    return r.indexOf('[object') === 0 && r.indexOf(n + ']') > -1;
  }
  function od(e, n) {
    return typeof e == 'function' ? e.apply(void 0, n) : e;
  }
  function ad(e, n) {
    if (n === 0) return e;
    var r;
    return function (o) {
      clearTimeout(r),
        (r = setTimeout(function () {
          e(o);
        }, n));
    };
  }
  function BT(e, n) {
    var r = Object.assign({}, e);
    return (
      n.forEach(function (o) {
        delete r[o];
      }),
      r
    );
  }
  function PT(e) {
    return e.split(/\s+/).filter(Boolean);
  }
  function Gr(e) {
    return [].concat(e);
  }
  function sd(e, n) {
    e.indexOf(n) === -1 && e.push(n);
  }
  function UT(e) {
    return e.filter(function (n, r) {
      return e.indexOf(n) === r;
    });
  }
  function ld(e) {
    return e.split('-')[0];
  }
  function Oi(e) {
    return [].slice.call(e);
  }
  function cd(e) {
    return Object.keys(e).reduce(function (n, r) {
      return e[r] !== void 0 && (n[r] = e[r]), n;
    }, {});
  }
  function Yr() {
    return document.createElement('div');
  }
  function Ta(e) {
    return ['Element', 'Fragment'].some(function (n) {
      return bl(e, n);
    });
  }
  function $T(e) {
    return bl(e, 'NodeList');
  }
  function xl(e) {
    return bl(e, 'MouseEvent');
  }
  function HT(e) {
    return !!(e && e._tippy && e._tippy.reference === e);
  }
  function FT(e) {
    return Ta(e) ? [e] : $T(e) ? Oi(e) : Array.isArray(e) ? e : Oi(document.querySelectorAll(e));
  }
  function Ol(e, n) {
    e.forEach(function (r) {
      r && (r.style.transitionDuration = n + 'ms');
    });
  }
  function ho(e, n) {
    e.forEach(function (r) {
      r && r.setAttribute('data-state', n);
    });
  }
  function fd(e) {
    var n,
      r = Gr(e),
      o = r[0];
    return o != null && (n = o.ownerDocument) != null && n.body ? o.ownerDocument : document;
  }
  function WT(e, n) {
    var r = n.clientX,
      o = n.clientY;
    return e.every(function (s) {
      var l = s.popperRect,
        c = s.popperState,
        f = s.props,
        d = f.interactiveBorder,
        m = ld(c.placement),
        p = c.modifiersData.offset;
      if (!p) return !0;
      var T = m === 'bottom' ? p.top.y : 0,
        N = m === 'top' ? p.bottom.y : 0,
        b = m === 'right' ? p.left.x : 0,
        R = m === 'left' ? p.right.x : 0,
        C = l.top - o + T > d,
        B = o - l.bottom - N > d,
        S = l.left - r + b > d,
        V = r - l.right - R > d;
      return C || B || S || V;
    });
  }
  function Rl(e, n, r) {
    var o = n + 'EventListener';
    ['transitionend', 'webkitTransitionEnd'].forEach(function (s) {
      e[o](s, r);
    });
  }
  function ud(e, n) {
    for (var r = n; r; ) {
      var o;
      if (e.contains(r)) return !0;
      r = r.getRootNode == null || (o = r.getRootNode()) == null ? void 0 : o.host;
    }
    return !1;
  }
  var zn = { isTouch: !1 },
    dd = 0;
  function zT() {
    zn.isTouch || ((zn.isTouch = !0), window.performance && document.addEventListener('mousemove', pd));
  }
  function pd() {
    var e = performance.now();
    e - dd < 20 && ((zn.isTouch = !1), document.removeEventListener('mousemove', pd)), (dd = e);
  }
  function XT() {
    var e = document.activeElement;
    if (HT(e)) {
      var n = e._tippy;
      e.blur && !n.state.isVisible && e.blur();
    }
  }
  function GT() {
    document.addEventListener('touchstart', zT, Xr), window.addEventListener('blur', XT);
  }
  var YT = typeof window < 'u' && typeof document < 'u',
    KT = YT ? !!window.msCrypto : !1,
    jT = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
    qT = {
      allowHTML: !1,
      animation: 'fade',
      arrow: !0,
      content: '',
      inertia: !1,
      maxWidth: 350,
      role: 'tooltip',
      theme: '',
      zIndex: 9999,
    },
    Rn = Object.assign(
      {
        appendTo: id,
        aria: { content: 'auto', expanded: 'auto' },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: '',
        offset: [0, 10],
        onAfterUpdate: function () {},
        onBeforeUpdate: function () {},
        onCreate: function () {},
        onDestroy: function () {},
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        onUntrigger: function () {},
        onClickOutside: function () {},
        placement: 'top',
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: 'mouseenter focus',
        triggerTarget: null,
      },
      jT,
      qT,
    ),
    JT = Object.keys(Rn),
    QT = function (n) {
      var r = Object.keys(n);
      r.forEach(function (o) {
        Rn[o] = n[o];
      });
    };
  function hd(e) {
    var n = e.plugins || [],
      r = n.reduce(function (o, s) {
        var l = s.name,
          c = s.defaultValue;
        if (l) {
          var f;
          o[l] = e[l] !== void 0 ? e[l] : (f = Rn[l]) != null ? f : c;
        }
        return o;
      }, {});
    return Object.assign({}, e, r);
  }
  function ZT(e, n) {
    var r = n ? Object.keys(hd(Object.assign({}, Rn, { plugins: n }))) : JT,
      o = r.reduce(function (s, l) {
        var c = (e.getAttribute('data-tippy-' + l) || '').trim();
        if (!c) return s;
        if (l === 'content') s[l] = c;
        else
          try {
            s[l] = JSON.parse(c);
          } catch {
            s[l] = c;
          }
        return s;
      }, {});
    return o;
  }
  function md(e, n) {
    var r = Object.assign({}, n, { content: od(n.content, [e]) }, n.ignoreAttributes ? {} : ZT(e, n.plugins));
    return (
      (r.aria = Object.assign({}, Rn.aria, r.aria)),
      (r.aria = {
        expanded: r.aria.expanded === 'auto' ? n.interactive : r.aria.expanded,
        content: r.aria.content === 'auto' ? (n.interactive ? null : 'describedby') : r.aria.content,
      }),
      r
    );
  }
  var e0 = function () {
    return 'innerHTML';
  };
  function Cl(e, n) {
    e[e0()] = n;
  }
  function Ed(e) {
    var n = Yr();
    return e === !0 ? (n.className = nd) : ((n.className = rd), Ta(e) ? n.appendChild(e) : Cl(n, e)), n;
  }
  function _d(e, n) {
    Ta(n.content)
      ? (Cl(e, ''), e.appendChild(n.content))
      : typeof n.content != 'function' && (n.allowHTML ? Cl(e, n.content) : (e.textContent = n.content));
  }
  function Na(e) {
    var n = e.firstElementChild,
      r = Oi(n.children);
    return {
      box: n,
      content: r.find(function (o) {
        return o.classList.contains(ed);
      }),
      arrow: r.find(function (o) {
        return o.classList.contains(nd) || o.classList.contains(rd);
      }),
      backdrop: r.find(function (o) {
        return o.classList.contains(td);
      }),
    };
  }
  function gd(e) {
    var n = Yr(),
      r = Yr();
    (r.className = MT), r.setAttribute('data-state', 'hidden'), r.setAttribute('tabindex', '-1');
    var o = Yr();
    (o.className = ed),
      o.setAttribute('data-state', 'hidden'),
      _d(o, e.props),
      n.appendChild(r),
      r.appendChild(o),
      s(e.props, e.props);
    function s(l, c) {
      var f = Na(n),
        d = f.box,
        m = f.content,
        p = f.arrow;
      c.theme ? d.setAttribute('data-theme', c.theme) : d.removeAttribute('data-theme'),
        typeof c.animation == 'string'
          ? d.setAttribute('data-animation', c.animation)
          : d.removeAttribute('data-animation'),
        c.inertia ? d.setAttribute('data-inertia', '') : d.removeAttribute('data-inertia'),
        (d.style.maxWidth = typeof c.maxWidth == 'number' ? c.maxWidth + 'px' : c.maxWidth),
        c.role ? d.setAttribute('role', c.role) : d.removeAttribute('role'),
        (l.content !== c.content || l.allowHTML !== c.allowHTML) && _d(m, e.props),
        c.arrow
          ? p
            ? l.arrow !== c.arrow && (d.removeChild(p), d.appendChild(Ed(c.arrow)))
            : d.appendChild(Ed(c.arrow))
          : p && d.removeChild(p);
    }
    return { popper: n, onUpdate: s };
  }
  gd.$$tippy = !0;
  var t0 = 1,
    Aa = [],
    Il = [];
  function n0(e, n) {
    var r = md(e, Object.assign({}, Rn, hd(cd(n)))),
      o,
      s,
      l,
      c = !1,
      f = !1,
      d = !1,
      m = !1,
      p,
      T,
      N,
      b = [],
      R = ad(We, r.interactiveDebounce),
      C,
      B = t0++,
      S = null,
      V = UT(r.plugins),
      Y = { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
      _ = {
        id: B,
        reference: e,
        popper: Yr(),
        popperInstance: S,
        props: r,
        state: Y,
        plugins: V,
        clearDelayTimeouts: Ne,
        setProps: Le,
        setContent: Pe,
        show: ut,
        hide: Rt,
        hideWithInteractivity: ur,
        enable: Ot,
        disable: he,
        unmount: dr,
        destroy: ui,
      };
    if (!r.render) return _;
    var k = r.render(_),
      O = k.popper,
      D = k.onUpdate;
    O.setAttribute('data-tippy-root', ''), (O.id = 'tippy-' + _.id), (_.popper = O), (e._tippy = _), (O._tippy = _);
    var L = V.map(function (w) {
        return w.fn(_);
      }),
      y = e.hasAttribute('aria-expanded');
    return (
      xe(),
      fe(),
      z(),
      Q('onCreate', [_]),
      r.showOnCreate && et(),
      O.addEventListener('mouseenter', function () {
        _.props.interactive && _.state.isVisible && _.clearDelayTimeouts();
      }),
      O.addEventListener('mouseleave', function () {
        _.props.interactive && _.props.trigger.indexOf('mouseenter') >= 0 && U().addEventListener('mousemove', R);
      }),
      _
    );
    function K() {
      var w = _.props.touch;
      return Array.isArray(w) ? w : [w, 0];
    }
    function M() {
      return K()[0] === 'hold';
    }
    function H() {
      var w;
      return !!((w = _.props.render) != null && w.$$tippy);
    }
    function q() {
      return C || e;
    }
    function U() {
      var w = q().parentNode;
      return w ? fd(w) : document;
    }
    function ee() {
      return Na(O);
    }
    function I(w) {
      return (_.state.isMounted && !_.state.isVisible) || zn.isTouch || (p && p.type === 'focus')
        ? 0
        : Sl(_.props.delay, w ? 0 : 1, Rn.delay);
    }
    function z(w) {
      w === void 0 && (w = !1),
        (O.style.pointerEvents = _.props.interactive && !w ? '' : 'none'),
        (O.style.zIndex = '' + _.props.zIndex);
    }
    function Q(w, re, ue) {
      if (
        (ue === void 0 && (ue = !0),
        L.forEach(function (ge) {
          ge[w] && ge[w].apply(ge, re);
        }),
        ue)
      ) {
        var Oe;
        (Oe = _.props)[w].apply(Oe, re);
      }
    }
    function oe() {
      var w = _.props.aria;
      if (w.content) {
        var re = 'aria-' + w.content,
          ue = O.id,
          Oe = Gr(_.props.triggerTarget || e);
        Oe.forEach(function (ge) {
          var Je = ge.getAttribute(re);
          if (_.state.isVisible) ge.setAttribute(re, Je ? Je + ' ' + ue : ue);
          else {
            var it = Je && Je.replace(ue, '').trim();
            it ? ge.setAttribute(re, it) : ge.removeAttribute(re);
          }
        });
      }
    }
    function fe() {
      if (!(y || !_.props.aria.expanded)) {
        var w = Gr(_.props.triggerTarget || e);
        w.forEach(function (re) {
          _.props.interactive
            ? re.setAttribute('aria-expanded', _.state.isVisible && re === q() ? 'true' : 'false')
            : re.removeAttribute('aria-expanded');
        });
      }
    }
    function ne() {
      U().removeEventListener('mousemove', R),
        (Aa = Aa.filter(function (w) {
          return w !== R;
        }));
    }
    function te(w) {
      if (!(zn.isTouch && (d || w.type === 'mousedown'))) {
        var re = (w.composedPath && w.composedPath()[0]) || w.target;
        if (!(_.props.interactive && ud(O, re))) {
          if (
            Gr(_.props.triggerTarget || e).some(function (ue) {
              return ud(ue, re);
            })
          ) {
            if (zn.isTouch || (_.state.isVisible && _.props.trigger.indexOf('click') >= 0)) return;
          } else Q('onClickOutside', [_, w]);
          _.props.hideOnClick === !0 &&
            (_.clearDelayTimeouts(),
            _.hide(),
            (f = !0),
            setTimeout(function () {
              f = !1;
            }),
            _.state.isMounted || Z());
        }
      }
    }
    function de() {
      d = !0;
    }
    function j() {
      d = !1;
    }
    function X() {
      var w = U();
      w.addEventListener('mousedown', te, !0),
        w.addEventListener('touchend', te, Xr),
        w.addEventListener('touchstart', j, Xr),
        w.addEventListener('touchmove', de, Xr);
    }
    function Z() {
      var w = U();
      w.removeEventListener('mousedown', te, !0),
        w.removeEventListener('touchend', te, Xr),
        w.removeEventListener('touchstart', j, Xr),
        w.removeEventListener('touchmove', de, Xr);
    }
    function pe(w, re) {
      me(w, function () {
        !_.state.isVisible && O.parentNode && O.parentNode.contains(O) && re();
      });
    }
    function le(w, re) {
      me(w, re);
    }
    function me(w, re) {
      var ue = ee().box;
      function Oe(ge) {
        ge.target === ue && (Rl(ue, 'remove', Oe), re());
      }
      if (w === 0) return re();
      Rl(ue, 'remove', T), Rl(ue, 'add', Oe), (T = Oe);
    }
    function ye(w, re, ue) {
      ue === void 0 && (ue = !1);
      var Oe = Gr(_.props.triggerTarget || e);
      Oe.forEach(function (ge) {
        ge.addEventListener(w, re, ue), b.push({ node: ge, eventType: w, handler: re, options: ue });
      });
    }
    function xe() {
      M() && (ye('touchstart', Fe, { passive: !0 }), ye('touchend', Tt, { passive: !0 })),
        PT(_.props.trigger).forEach(function (w) {
          if (w !== 'manual')
            switch ((ye(w, Fe), w)) {
              case 'mouseenter':
                ye('mouseleave', Tt);
                break;
              case 'focus':
                ye(KT ? 'focusout' : 'blur', Nt);
                break;
              case 'focusin':
                ye('focusout', Nt);
                break;
            }
        });
    }
    function Be() {
      b.forEach(function (w) {
        var re = w.node,
          ue = w.eventType,
          Oe = w.handler,
          ge = w.options;
        re.removeEventListener(ue, Oe, ge);
      }),
        (b = []);
    }
    function Fe(w) {
      var re,
        ue = !1;
      if (!(!_.state.isEnabled || G(w) || f)) {
        var Oe = ((re = p) == null ? void 0 : re.type) === 'focus';
        (p = w),
          (C = w.currentTarget),
          fe(),
          !_.state.isVisible &&
            xl(w) &&
            Aa.forEach(function (ge) {
              return ge(w);
            }),
          w.type === 'click' &&
          (_.props.trigger.indexOf('mouseenter') < 0 || c) &&
          _.props.hideOnClick !== !1 &&
          _.state.isVisible
            ? (ue = !0)
            : et(w),
          w.type === 'click' && (c = !ue),
          ue && !Oe && ft(w);
      }
    }
    function We(w) {
      var re = w.target,
        ue = q().contains(re) || O.contains(re);
      if (!(w.type === 'mousemove' && ue)) {
        var Oe = $e()
          .concat(O)
          .map(function (ge) {
            var Je,
              it = ge._tippy,
              kt = (Je = it.popperInstance) == null ? void 0 : Je.state;
            return kt ? { popperRect: ge.getBoundingClientRect(), popperState: kt, props: r } : null;
          })
          .filter(Boolean);
        WT(Oe, w) && (ne(), ft(w));
      }
    }
    function Tt(w) {
      var re = G(w) || (_.props.trigger.indexOf('click') >= 0 && c);
      if (!re) {
        if (_.props.interactive) {
          _.hideWithInteractivity(w);
          return;
        }
        ft(w);
      }
    }
    function Nt(w) {
      (_.props.trigger.indexOf('focusin') < 0 && w.target !== q()) ||
        (_.props.interactive && w.relatedTarget && O.contains(w.relatedTarget)) ||
        ft(w);
    }
    function G(w) {
      return zn.isTouch ? M() !== w.type.indexOf('touch') >= 0 : !1;
    }
    function _e() {
      ve();
      var w = _.props,
        re = w.popperOptions,
        ue = w.placement,
        Oe = w.offset,
        ge = w.getReferenceClientRect,
        Je = w.moveTransition,
        it = H() ? Na(O).arrow : null,
        kt = ge ? { getBoundingClientRect: ge, contextElement: ge.contextElement || q() } : e,
        vr = {
          name: '$$tippy',
          enabled: !0,
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: function (Vn) {
            var Bt = Vn.state;
            if (H()) {
              var Xi = ee(),
                hr = Xi.box;
              ['placement', 'reference-hidden', 'escaped'].forEach(function (Mn) {
                Mn === 'placement'
                  ? hr.setAttribute('data-placement', Bt.placement)
                  : Bt.attributes.popper['data-popper-' + Mn]
                    ? hr.setAttribute('data-' + Mn, '')
                    : hr.removeAttribute('data-' + Mn);
              }),
                (Bt.attributes.popper = {});
            }
          },
        },
        Ct = [
          { name: 'offset', options: { offset: Oe } },
          { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
          { name: 'flip', options: { padding: 5 } },
          { name: 'computeStyles', options: { adaptive: !Je } },
          vr,
        ];
      H() && it && Ct.push({ name: 'arrow', options: { element: it, padding: 3 } }),
        Ct.push.apply(Ct, (re == null ? void 0 : re.modifiers) || []),
        (_.popperInstance = VT(kt, O, Object.assign({}, re, { placement: ue, onFirstUpdate: N, modifiers: Ct })));
    }
    function ve() {
      _.popperInstance && (_.popperInstance.destroy(), (_.popperInstance = null));
    }
    function Se() {
      var w = _.props.appendTo,
        re,
        ue = q();
      (_.props.interactive && w === id) || w === 'parent' ? (re = ue.parentNode) : (re = od(w, [ue])),
        re.contains(O) || re.appendChild(O),
        (_.state.isMounted = !0),
        _e();
    }
    function $e() {
      return Oi(O.querySelectorAll('[data-tippy-root]'));
    }
    function et(w) {
      _.clearDelayTimeouts(), w && Q('onTrigger', [_, w]), X();
      var re = I(!0),
        ue = K(),
        Oe = ue[0],
        ge = ue[1];
      zn.isTouch && Oe === 'hold' && ge && (re = ge),
        re
          ? (o = setTimeout(function () {
              _.show();
            }, re))
          : _.show();
    }
    function ft(w) {
      if ((_.clearDelayTimeouts(), Q('onUntrigger', [_, w]), !_.state.isVisible)) {
        Z();
        return;
      }
      if (
        !(
          _.props.trigger.indexOf('mouseenter') >= 0 &&
          _.props.trigger.indexOf('click') >= 0 &&
          ['mouseleave', 'mousemove'].indexOf(w.type) >= 0 &&
          c
        )
      ) {
        var re = I(!1);
        re
          ? (s = setTimeout(function () {
              _.state.isVisible && _.hide();
            }, re))
          : (l = requestAnimationFrame(function () {
              _.hide();
            }));
      }
    }
    function Ot() {
      _.state.isEnabled = !0;
    }
    function he() {
      _.hide(), (_.state.isEnabled = !1);
    }
    function Ne() {
      clearTimeout(o), clearTimeout(s), cancelAnimationFrame(l);
    }
    function Le(w) {
      if (!_.state.isDestroyed) {
        Q('onBeforeUpdate', [_, w]), Be();
        var re = _.props,
          ue = md(e, Object.assign({}, re, cd(w), { ignoreAttributes: !0 }));
        (_.props = ue),
          xe(),
          re.interactiveDebounce !== ue.interactiveDebounce && (ne(), (R = ad(We, ue.interactiveDebounce))),
          re.triggerTarget && !ue.triggerTarget
            ? Gr(re.triggerTarget).forEach(function (Oe) {
                Oe.removeAttribute('aria-expanded');
              })
            : ue.triggerTarget && e.removeAttribute('aria-expanded'),
          fe(),
          z(),
          D && D(re, ue),
          _.popperInstance &&
            (_e(),
            $e().forEach(function (Oe) {
              requestAnimationFrame(Oe._tippy.popperInstance.forceUpdate);
            })),
          Q('onAfterUpdate', [_, w]);
      }
    }
    function Pe(w) {
      _.setProps({ content: w });
    }
    function ut() {
      var w = _.state.isVisible,
        re = _.state.isDestroyed,
        ue = !_.state.isEnabled,
        Oe = zn.isTouch && !_.props.touch,
        ge = Sl(_.props.duration, 0, Rn.duration);
      if (!(w || re || ue || Oe) && !q().hasAttribute('disabled') && (Q('onShow', [_], !1), _.props.onShow(_) !== !1)) {
        if (
          ((_.state.isVisible = !0),
          H() && (O.style.visibility = 'visible'),
          z(),
          X(),
          _.state.isMounted || (O.style.transition = 'none'),
          H())
        ) {
          var Je = ee(),
            it = Je.box,
            kt = Je.content;
          Ol([it, kt], 0);
        }
        (N = function () {
          var Ct;
          if (!(!_.state.isVisible || m)) {
            if (((m = !0), O.offsetHeight, (O.style.transition = _.props.moveTransition), H() && _.props.animation)) {
              var pr = ee(),
                Vn = pr.box,
                Bt = pr.content;
              Ol([Vn, Bt], ge), ho([Vn, Bt], 'visible');
            }
            oe(),
              fe(),
              sd(Il, _),
              (Ct = _.popperInstance) == null || Ct.forceUpdate(),
              Q('onMount', [_]),
              _.props.animation &&
                H() &&
                le(ge, function () {
                  (_.state.isShown = !0), Q('onShown', [_]);
                });
          }
        }),
          Se();
      }
    }
    function Rt() {
      var w = !_.state.isVisible,
        re = _.state.isDestroyed,
        ue = !_.state.isEnabled,
        Oe = Sl(_.props.duration, 1, Rn.duration);
      if (!(w || re || ue) && (Q('onHide', [_], !1), _.props.onHide(_) !== !1)) {
        if (
          ((_.state.isVisible = !1),
          (_.state.isShown = !1),
          (m = !1),
          (c = !1),
          H() && (O.style.visibility = 'hidden'),
          ne(),
          Z(),
          z(!0),
          H())
        ) {
          var ge = ee(),
            Je = ge.box,
            it = ge.content;
          _.props.animation && (Ol([Je, it], Oe), ho([Je, it], 'hidden'));
        }
        oe(), fe(), _.props.animation ? H() && pe(Oe, _.unmount) : _.unmount();
      }
    }
    function ur(w) {
      U().addEventListener('mousemove', R), sd(Aa, R), R(w);
    }
    function dr() {
      _.state.isVisible && _.hide(),
        _.state.isMounted &&
          (ve(),
          $e().forEach(function (w) {
            w._tippy.unmount();
          }),
          O.parentNode && O.parentNode.removeChild(O),
          (Il = Il.filter(function (w) {
            return w !== _;
          })),
          (_.state.isMounted = !1),
          Q('onHidden', [_]));
    }
    function ui() {
      _.state.isDestroyed ||
        (_.clearDelayTimeouts(), _.unmount(), Be(), delete e._tippy, (_.state.isDestroyed = !0), Q('onDestroy', [_]));
    }
  }
  function Ie(e, n) {
    n === void 0 && (n = {});
    var r = Rn.plugins.concat(n.plugins || []);
    GT();
    var o = Object.assign({}, n, { plugins: r }),
      s = FT(e),
      l = s.reduce(function (c, f) {
        var d = f && n0(f, o);
        return d && c.push(d), c;
      }, []);
    return Ta(e) ? l[0] : l;
  }
  (Ie.defaultProps = Rn), (Ie.setDefaultProps = QT), (Ie.currentInput = zn);
  var r0 = Object.assign({}, Uu, {
      effect: function (n) {
        var r = n.state,
          o = {
            popper: { position: r.options.strategy, left: '0', top: '0', margin: '0' },
            arrow: { position: 'absolute' },
            reference: {},
          };
        Object.assign(r.elements.popper.style, o.popper),
          (r.styles = o),
          r.elements.arrow && Object.assign(r.elements.arrow.style, o.arrow);
      },
    }),
    i0 = function (n, r) {
      var o;
      r === void 0 && (r = {});
      var s = n,
        l = [],
        c = [],
        f,
        d = r.overrides,
        m = [],
        p = !1;
      function T() {
        c = s
          .map(function (_) {
            return Gr(_.props.triggerTarget || _.reference);
          })
          .reduce(function (_, k) {
            return _.concat(k);
          }, []);
      }
      function N() {
        l = s.map(function (_) {
          return _.reference;
        });
      }
      function b(_) {
        s.forEach(function (k) {
          _ ? k.enable() : k.disable();
        });
      }
      function R(_) {
        return s.map(function (k) {
          var O = k.setProps;
          return (
            (k.setProps = function (D) {
              O(D), k.reference === f && _.setProps(D);
            }),
            function () {
              k.setProps = O;
            }
          );
        });
      }
      function C(_, k) {
        var O = c.indexOf(k);
        if (k !== f) {
          f = k;
          var D = (d || []).concat('content').reduce(function (L, y) {
            return (L[y] = s[O].props[y]), L;
          }, {});
          _.setProps(
            Object.assign({}, D, {
              getReferenceClientRect:
                typeof D.getReferenceClientRect == 'function'
                  ? D.getReferenceClientRect
                  : function () {
                      var L;
                      return (L = l[O]) == null ? void 0 : L.getBoundingClientRect();
                    },
            }),
          );
        }
      }
      b(!1), N(), T();
      var B = {
          fn: function () {
            return {
              onDestroy: function () {
                b(!0);
              },
              onHidden: function () {
                f = null;
              },
              onClickOutside: function (O) {
                O.props.showOnCreate && !p && ((p = !0), (f = null));
              },
              onShow: function (O) {
                O.props.showOnCreate && !p && ((p = !0), C(O, l[0]));
              },
              onTrigger: function (O, D) {
                C(O, D.currentTarget);
              },
            };
          },
        },
        S = Ie(
          Yr(),
          Object.assign({}, BT(r, ['overrides']), {
            plugins: [B].concat(r.plugins || []),
            triggerTarget: c,
            popperOptions: Object.assign({}, r.popperOptions, {
              modifiers: [].concat(((o = r.popperOptions) == null ? void 0 : o.modifiers) || [], [r0]),
            }),
          }),
        ),
        V = S.show;
      (S.show = function (_) {
        if ((V(), !f && _ == null)) return C(S, l[0]);
        if (!(f && _ == null)) {
          if (typeof _ == 'number') return l[_] && C(S, l[_]);
          if (s.indexOf(_) >= 0) {
            var k = _.reference;
            return C(S, k);
          }
          if (l.indexOf(_) >= 0) return C(S, _);
        }
      }),
        (S.showNext = function () {
          var _ = l[0];
          if (!f) return S.show(0);
          var k = l.indexOf(f);
          S.show(l[k + 1] || _);
        }),
        (S.showPrevious = function () {
          var _ = l[l.length - 1];
          if (!f) return S.show(_);
          var k = l.indexOf(f),
            O = l[k - 1] || _;
          S.show(O);
        });
      var Y = S.setProps;
      return (
        (S.setProps = function (_) {
          (d = _.overrides || d), Y(_);
        }),
        (S.setInstances = function (_) {
          b(!0),
            m.forEach(function (k) {
              return k();
            }),
            (s = _),
            b(!1),
            N(),
            T(),
            (m = R(S)),
            S.setProps({ triggerTarget: c });
        }),
        (m = R(S)),
        S
      );
    },
    o0 = {
      name: 'animateFill',
      defaultValue: !1,
      fn: function (n) {
        var r;
        if (!((r = n.props.render) != null && r.$$tippy)) return {};
        var o = Na(n.popper),
          s = o.box,
          l = o.content,
          c = n.props.animateFill ? a0() : null;
        return {
          onCreate: function () {
            c &&
              (s.insertBefore(c, s.firstElementChild),
              s.setAttribute('data-animatefill', ''),
              (s.style.overflow = 'hidden'),
              n.setProps({ arrow: !1, animation: 'shift-away' }));
          },
          onMount: function () {
            if (c) {
              var d = s.style.transitionDuration,
                m = Number(d.replace('ms', ''));
              (l.style.transitionDelay = Math.round(m / 10) + 'ms'),
                (c.style.transitionDuration = d),
                ho([c], 'visible');
            }
          },
          onShow: function () {
            c && (c.style.transitionDuration = '0ms');
          },
          onHide: function () {
            c && ho([c], 'hidden');
          },
        };
      },
    };
  function a0() {
    var e = Yr();
    return (e.className = td), ho([e], 'hidden'), e;
  }
  var Ll = { clientX: 0, clientY: 0 },
    ya = [];
  function Td(e) {
    var n = e.clientX,
      r = e.clientY;
    Ll = { clientX: n, clientY: r };
  }
  function s0(e) {
    e.addEventListener('mousemove', Td);
  }
  function l0(e) {
    e.removeEventListener('mousemove', Td);
  }
  var c0 = {
    name: 'followCursor',
    defaultValue: !1,
    fn: function (n) {
      var r = n.reference,
        o = fd(n.props.triggerTarget || r),
        s = !1,
        l = !1,
        c = !0,
        f = n.props;
      function d() {
        return n.props.followCursor === 'initial' && n.state.isVisible;
      }
      function m() {
        o.addEventListener('mousemove', N);
      }
      function p() {
        o.removeEventListener('mousemove', N);
      }
      function T() {
        (s = !0), n.setProps({ getReferenceClientRect: null }), (s = !1);
      }
      function N(C) {
        var B = C.target ? r.contains(C.target) : !0,
          S = n.props.followCursor,
          V = C.clientX,
          Y = C.clientY,
          _ = r.getBoundingClientRect(),
          k = V - _.left,
          O = Y - _.top;
        (B || !n.props.interactive) &&
          n.setProps({
            getReferenceClientRect: function () {
              var L = r.getBoundingClientRect(),
                y = V,
                K = Y;
              S === 'initial' && ((y = L.left + k), (K = L.top + O));
              var M = S === 'horizontal' ? L.top : K,
                H = S === 'vertical' ? L.right : y,
                q = S === 'horizontal' ? L.bottom : K,
                U = S === 'vertical' ? L.left : y;
              return { width: H - U, height: q - M, top: M, right: H, bottom: q, left: U };
            },
          });
      }
      function b() {
        n.props.followCursor && (ya.push({ instance: n, doc: o }), s0(o));
      }
      function R() {
        (ya = ya.filter(function (C) {
          return C.instance !== n;
        })),
          ya.filter(function (C) {
            return C.doc === o;
          }).length === 0 && l0(o);
      }
      return {
        onCreate: b,
        onDestroy: R,
        onBeforeUpdate: function () {
          f = n.props;
        },
        onAfterUpdate: function (B, S) {
          var V = S.followCursor;
          s ||
            (V !== void 0 &&
              f.followCursor !== V &&
              (R(), V ? (b(), n.state.isMounted && !l && !d() && m()) : (p(), T())));
        },
        onMount: function () {
          n.props.followCursor && !l && (c && (N(Ll), (c = !1)), d() || m());
        },
        onTrigger: function (B, S) {
          xl(S) && (Ll = { clientX: S.clientX, clientY: S.clientY }), (l = S.type === 'focus');
        },
        onHidden: function () {
          n.props.followCursor && (T(), p(), (c = !0));
        },
      };
    },
  };
  function f0(e, n) {
    var r;
    return {
      popperOptions: Object.assign({}, e.popperOptions, {
        modifiers: [].concat(
          (((r = e.popperOptions) == null ? void 0 : r.modifiers) || []).filter(function (o) {
            var s = o.name;
            return s !== n.name;
          }),
          [n],
        ),
      }),
    };
  }
  var u0 = {
    name: 'inlinePositioning',
    defaultValue: !1,
    fn: function (n) {
      var r = n.reference;
      function o() {
        return !!n.props.inlinePositioning;
      }
      var s,
        l = -1,
        c = !1,
        f = [],
        d = {
          name: 'tippyInlinePositioning',
          enabled: !0,
          phase: 'afterWrite',
          fn: function (b) {
            var R = b.state;
            o() &&
              (f.indexOf(R.placement) !== -1 && (f = []),
              s !== R.placement &&
                f.indexOf(R.placement) === -1 &&
                (f.push(R.placement),
                n.setProps({
                  getReferenceClientRect: function () {
                    return m(R.placement);
                  },
                })),
              (s = R.placement));
          },
        };
      function m(N) {
        return d0(ld(N), r.getBoundingClientRect(), Oi(r.getClientRects()), l);
      }
      function p(N) {
        (c = !0), n.setProps(N), (c = !1);
      }
      function T() {
        c || p(f0(n.props, d));
      }
      return {
        onCreate: T,
        onAfterUpdate: T,
        onTrigger: function (b, R) {
          if (xl(R)) {
            var C = Oi(n.reference.getClientRects()),
              B = C.find(function (V) {
                return (
                  V.left - 2 <= R.clientX &&
                  V.right + 2 >= R.clientX &&
                  V.top - 2 <= R.clientY &&
                  V.bottom + 2 >= R.clientY
                );
              }),
              S = C.indexOf(B);
            l = S > -1 ? S : l;
          }
        },
        onHidden: function () {
          l = -1;
        },
      };
    },
  };
  function d0(e, n, r, o) {
    if (r.length < 2 || e === null) return n;
    if (r.length === 2 && o >= 0 && r[0].left > r[1].right) return r[o] || n;
    switch (e) {
      case 'top':
      case 'bottom': {
        var s = r[0],
          l = r[r.length - 1],
          c = e === 'top',
          f = s.top,
          d = l.bottom,
          m = c ? s.left : l.left,
          p = c ? s.right : l.right,
          T = p - m,
          N = d - f;
        return { top: f, bottom: d, left: m, right: p, width: T, height: N };
      }
      case 'left':
      case 'right': {
        var b = Math.min.apply(
            Math,
            r.map(function (O) {
              return O.left;
            }),
          ),
          R = Math.max.apply(
            Math,
            r.map(function (O) {
              return O.right;
            }),
          ),
          C = r.filter(function (O) {
            return e === 'left' ? O.left === b : O.right === R;
          }),
          B = C[0].top,
          S = C[C.length - 1].bottom,
          V = b,
          Y = R,
          _ = Y - V,
          k = S - B;
        return { top: B, bottom: S, left: V, right: Y, width: _, height: k };
      }
      default:
        return n;
    }
  }
  var p0 = {
    name: 'sticky',
    defaultValue: !1,
    fn: function (n) {
      var r = n.reference,
        o = n.popper;
      function s() {
        return n.popperInstance ? n.popperInstance.state.elements.reference : r;
      }
      function l(m) {
        return n.props.sticky === !0 || n.props.sticky === m;
      }
      var c = null,
        f = null;
      function d() {
        var m = l('reference') ? s().getBoundingClientRect() : null,
          p = l('popper') ? o.getBoundingClientRect() : null;
        ((m && Nd(c, m)) || (p && Nd(f, p))) && n.popperInstance && n.popperInstance.update(),
          (c = m),
          (f = p),
          n.state.isMounted && requestAnimationFrame(d);
      }
      return {
        onMount: function () {
          n.props.sticky && d();
        },
      };
    },
  };
  function Nd(e, n) {
    return e && n ? e.top !== n.top || e.right !== n.right || e.bottom !== n.bottom || e.left !== n.left : !0;
  }
  Ie.setDefaultProps({ render: gd }),
    Ie.setDefaultProps({
      onShow: e => {
        if (!e.props.content) return !1;
      },
    });
  function Ad(e, n = {}, r = { mount: !0 }) {
    const o = t.getCurrentInstance(),
      s = t.ref(),
      l = t.ref({ isEnabled: !1, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 });
    let c = null;
    const f = () => c || ((c = document.createDocumentFragment()), c),
      d = O => {
        let D,
          L = t.isRef(O) ? O.value : O;
        if (t.isVNode(L)) o && (L.appContext = o.appContext), t.render(L, f()), (D = () => f());
        else if (typeof L == 'object') {
          let y = t.h(L);
          o && (y.appContext = o.appContext), t.render(y, f()), (D = () => f());
        } else D = L;
        return D;
      },
      m = O => {
        let D = {};
        return (
          t.isRef(O) ? (D = O.value || {}) : t.isReactive(O) ? (D = { ...O }) : (D = { ...O }),
          D.content && (D.content = d(D.content)),
          D.triggerTarget && (D.triggerTarget = t.isRef(D.triggerTarget) ? D.triggerTarget.value : D.triggerTarget),
          (!D.plugins || !Array.isArray(D.plugins)) && (D.plugins = []),
          (D.plugins = D.plugins.filter(L => L.name !== 'vueTippyReactiveState')),
          D.plugins.push({
            name: 'vueTippyReactiveState',
            fn: () => ({
              onCreate() {
                l.value.isEnabled = !0;
              },
              onMount() {
                l.value.isMounted = !0;
              },
              onShow() {
                (l.value.isMounted = !0), (l.value.isVisible = !0);
              },
              onShown() {
                l.value.isShown = !0;
              },
              onHide() {
                (l.value.isMounted = !1), (l.value.isVisible = !1);
              },
              onHidden() {
                l.value.isShown = !1;
              },
              onUnmounted() {
                l.value.isMounted = !1;
              },
              onDestroy() {
                l.value.isDestroyed = !0;
              },
            }),
          }),
          D
        );
      },
      p = () => {
        s.value && s.value.setProps(m(n));
      },
      T = () => {
        !s.value || !n.content || s.value.setContent(d(n.content));
      },
      N = O => {
        var D;
        (D = s.value) === null || D === void 0 || D.setContent(d(O));
      },
      b = O => {
        var D;
        (D = s.value) === null || D === void 0 || D.setProps(m(O));
      },
      R = () => {
        s.value && (s.value.destroy(), (s.value = void 0)), (c = null);
      },
      C = () => {
        var O;
        (O = s.value) === null || O === void 0 || O.show();
      },
      B = () => {
        var O;
        (O = s.value) === null || O === void 0 || O.hide();
      },
      S = () => {
        var O;
        (O = s.value) === null || O === void 0 || O.disable(), (l.value.isEnabled = !1);
      },
      V = () => {
        var O;
        (O = s.value) === null || O === void 0 || O.enable(), (l.value.isEnabled = !0);
      },
      Y = () => {
        var O;
        (O = s.value) === null || O === void 0 || O.unmount();
      },
      _ = () => {
        if (!e) return;
        let O = t.isRef(e) ? e.value : e;
        typeof O == 'function' && (O = O()), O && ((s.value = Ie(O, m(n))), (O.$tippy = k));
      },
      k = {
        tippy: s,
        refresh: p,
        refreshContent: T,
        setContent: N,
        setProps: b,
        destroy: R,
        hide: B,
        show: C,
        disable: S,
        enable: V,
        unmount: Y,
        mount: _,
        state: l,
      };
    return (
      r.mount &&
        (o
          ? (o.isMounted ? _() : t.onMounted(_),
            t.onUnmounted(() => {
              R();
            }))
          : _()),
      t.isRef(n) || t.isReactive(n)
        ? t.watch(n, p, { immediate: !1 })
        : t.isRef(n.content) && t.watch(n.content, T, { immediate: !1 }),
      k
    );
  }
  function h0(e, n) {
    const r = t.ref();
    return (
      t.onMounted(() => {
        const s = (Array.isArray(e) ? e.map(l => l.value) : typeof e == 'function' ? e() : e.value)
          .map(l => (l instanceof Element ? l._tippy : l))
          .filter(Boolean);
        r.value = i0(s, n ? { allowHTML: !0, ...n } : { allowHTML: !0 });
      }),
      { singleton: r }
    );
  }
  t.defineComponent({
    props: {
      to: { type: [String, Function] },
      tag: { type: String, default: 'span' },
      contentTag: { type: String, default: 'span' },
      contentClass: { type: String, default: null },
      appendTo: { default: () => Ie.defaultProps.appendTo },
      aria: { default: () => Ie.defaultProps.aria },
      delay: { default: () => Ie.defaultProps.delay },
      duration: { default: () => Ie.defaultProps.duration },
      getReferenceClientRect: { default: () => Ie.defaultProps.getReferenceClientRect },
      hideOnClick: { type: [Boolean, String], default: () => Ie.defaultProps.hideOnClick },
      ignoreAttributes: { type: Boolean, default: () => Ie.defaultProps.ignoreAttributes },
      interactive: { type: Boolean, default: () => Ie.defaultProps.interactive },
      interactiveBorder: { default: () => Ie.defaultProps.interactiveBorder },
      interactiveDebounce: { default: () => Ie.defaultProps.interactiveDebounce },
      moveTransition: { default: () => Ie.defaultProps.moveTransition },
      offset: { default: () => Ie.defaultProps.offset },
      onAfterUpdate: { default: () => Ie.defaultProps.onAfterUpdate },
      onBeforeUpdate: { default: () => Ie.defaultProps.onBeforeUpdate },
      onCreate: { default: () => Ie.defaultProps.onCreate },
      onDestroy: { default: () => Ie.defaultProps.onDestroy },
      onHidden: { default: () => Ie.defaultProps.onHidden },
      onHide: { default: () => Ie.defaultProps.onHide },
      onMount: { default: () => Ie.defaultProps.onMount },
      onShow: { default: () => Ie.defaultProps.onShow },
      onShown: { default: () => Ie.defaultProps.onShown },
      onTrigger: { default: () => Ie.defaultProps.onTrigger },
      onUntrigger: { default: () => Ie.defaultProps.onUntrigger },
      onClickOutside: { default: () => Ie.defaultProps.onClickOutside },
      placement: { default: () => Ie.defaultProps.placement },
      plugins: { default: () => Ie.defaultProps.plugins },
      popperOptions: { default: () => Ie.defaultProps.popperOptions },
      render: { default: () => Ie.defaultProps.render },
      showOnCreate: { type: Boolean, default: () => Ie.defaultProps.showOnCreate },
      touch: { type: [Boolean, String, Array], default: () => Ie.defaultProps.touch },
      trigger: { default: () => Ie.defaultProps.trigger },
      triggerTarget: { default: () => Ie.defaultProps.triggerTarget },
      animateFill: { type: Boolean, default: () => Ie.defaultProps.animateFill },
      followCursor: { type: [Boolean, String], default: () => Ie.defaultProps.followCursor },
      inlinePositioning: { type: Boolean, default: () => Ie.defaultProps.inlinePositioning },
      sticky: { type: [Boolean, String], default: () => Ie.defaultProps.sticky },
      allowHTML: { type: Boolean, default: () => Ie.defaultProps.allowHTML },
      animation: { default: () => Ie.defaultProps.animation },
      arrow: { default: () => Ie.defaultProps.arrow },
      content: { default: () => Ie.defaultProps.content },
      inertia: { default: () => Ie.defaultProps.inertia },
      maxWidth: { default: () => Ie.defaultProps.maxWidth },
      role: { default: () => Ie.defaultProps.role },
      theme: { default: () => Ie.defaultProps.theme },
      zIndex: { default: () => Ie.defaultProps.zIndex },
    },
    emits: ['state'],
    setup(e, { slots: n, emit: r, expose: o }) {
      const s = t.ref(),
        l = t.ref(),
        c = t.ref(!1),
        f = () => {
          let T = { ...e };
          for (const N of ['to', 'tag', 'contentTag', 'contentClass']) T.hasOwnProperty(N) && delete T[N];
          return T;
        };
      let d = s;
      e.to &&
        (typeof Element < 'u' && e.to instanceof Element
          ? (d = () => e.to)
          : (typeof e.to == 'string' || e.to instanceof String) && (d = () => document.querySelector(e.to)));
      const m = Ad(d, f());
      t.onMounted(() => {
        (c.value = !0),
          t.nextTick(() => {
            n.content && m.setContent(() => l.value);
          });
      }),
        t.watch(
          m.state,
          () => {
            r('state', t.unref(m.state));
          },
          { immediate: !0, deep: !0 },
        ),
        t.watch(
          () => e,
          () => {
            m.setProps(f()), n.content && m.setContent(() => l.value);
          },
          { deep: !0 },
        );
      let p = t.reactive({ elem: s, contentElem: l, mounted: c, ...m });
      return (
        o(p),
        () => {
          const T = n.default ? n.default(p) : [];
          return t.h(
            e.tag,
            { ref: s, 'data-v-tippy': '' },
            n.content
              ? [
                  T,
                  t.h(
                    e.contentTag,
                    { ref: l, style: { display: c.value ? 'inherit' : 'none' }, class: e.contentClass },
                    n.content(p),
                  ),
                ]
              : T,
          );
        }
      );
    },
  });
  const m0 = [
    'a11y',
    'allowHTML',
    'arrow',
    'flip',
    'flipOnUpdate',
    'hideOnClick',
    'ignoreAttributes',
    'inertia',
    'interactive',
    'lazy',
    'multiple',
    'showOnInit',
    'touch',
    'touchHold',
  ];
  let wl = {};
  Object.keys(Ie.defaultProps).forEach(e => {
    m0.includes(e)
      ? (wl[e] = {
          type: Boolean,
          default: function () {
            return Ie.defaultProps[e];
          },
        })
      : (wl[e] = {
          default: function () {
            return Ie.defaultProps[e];
          },
        });
  }),
    t.defineComponent({
      props: wl,
      setup(e) {
        const n = t.ref([]),
          { singleton: r } = h0(n, e);
        return { instances: n, singleton: r };
      },
      mounted() {
        var e;
        const r = this.$el.parentElement.querySelectorAll('[data-v-tippy]');
        (this.instances = Array.from(r)
          .map(o => o._tippy)
          .filter(Boolean)),
          (e = this.singleton) === null || e === void 0 || e.setInstances(this.instances);
      },
      render() {
        let e = this.$slots.default ? this.$slots.default() : [];
        return t.h(() => e);
      },
    });
  const Qe = {
      mounted(e, n, r) {
        const o = typeof n.value == 'string' ? { content: n.value } : n.value || {},
          s = Object.keys(n.modifiers || {}),
          l = s.find(f => f !== 'arrow'),
          c = s.findIndex(f => f === 'arrow') !== -1;
        l && (o.placement = o.placement || l),
          c && (o.arrow = o.arrow !== void 0 ? o.arrow : !0),
          r.props &&
            r.props.onTippyShow &&
            (o.onShow = function (...f) {
              var d;
              return (d = r.props) === null || d === void 0 ? void 0 : d.onTippyShow(...f);
            }),
          r.props &&
            r.props.onTippyShown &&
            (o.onShown = function (...f) {
              var d;
              return (d = r.props) === null || d === void 0 ? void 0 : d.onTippyShown(...f);
            }),
          r.props &&
            r.props.onTippyHidden &&
            (o.onHidden = function (...f) {
              var d;
              return (d = r.props) === null || d === void 0 ? void 0 : d.onTippyHidden(...f);
            }),
          r.props &&
            r.props.onTippyHide &&
            (o.onHide = function (...f) {
              var d;
              return (d = r.props) === null || d === void 0 ? void 0 : d.onTippyHide(...f);
            }),
          r.props &&
            r.props.onTippyMount &&
            (o.onMount = function (...f) {
              var d;
              return (d = r.props) === null || d === void 0 ? void 0 : d.onTippyMount(...f);
            }),
          e.getAttribute('title') && !o.content && ((o.content = e.getAttribute('title')), e.removeAttribute('title')),
          e.getAttribute('content') && !o.content && (o.content = e.getAttribute('content')),
          Ad(e, o);
      },
      unmounted(e) {
        e.$tippy ? e.$tippy.destroy() : e._tippy && e._tippy.destroy();
      },
      updated(e, n) {
        const r = typeof n.value == 'string' ? { content: n.value } : n.value || {};
        e.getAttribute('title') && !r.content && ((r.content = e.getAttribute('title')), e.removeAttribute('title')),
          e.getAttribute('content') && !r.content && (r.content = e.getAttribute('content')),
          e.$tippy ? e.$tippy.setProps(r || {}) : e._tippy && e._tippy.setProps(r || {});
      },
    },
    E0 = Ie.setDefaultProps;
  E0({ ignoreAttributes: !0, plugins: [p0, u0, c0, o0] });
  function yd(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n &&
        (o = o.filter(function (s) {
          return Object.getOwnPropertyDescriptor(e, s).enumerable;
        })),
        r.push.apply(r, o);
    }
    return r;
  }
  function Te(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n] != null ? arguments[n] : {};
      n % 2
        ? yd(Object(r), !0).forEach(function (o) {
            gt(e, o, r[o]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : yd(Object(r)).forEach(function (o) {
              Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
            });
    }
    return e;
  }
  function Sa(e) {
    '@babel/helpers - typeof';
    return (
      (Sa =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (n) {
              return typeof n;
            }
          : function (n) {
              return n && typeof Symbol == 'function' && n.constructor === Symbol && n !== Symbol.prototype
                ? 'symbol'
                : typeof n;
            }),
      Sa(e)
    );
  }
  function _0(e, n) {
    if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
  }
  function Sd(e, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        'value' in o && (o.writable = !0),
        Object.defineProperty(e, o.key, o);
    }
  }
  function g0(e, n, r) {
    return n && Sd(e.prototype, n), r && Sd(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
  }
  function gt(e, n, r) {
    return (
      n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e
    );
  }
  function vl(e, n) {
    return N0(e) || y0(e, n) || bd(e, n) || b0();
  }
  function mo(e) {
    return T0(e) || A0(e) || bd(e) || S0();
  }
  function T0(e) {
    if (Array.isArray(e)) return kl(e);
  }
  function N0(e) {
    if (Array.isArray(e)) return e;
  }
  function A0(e) {
    if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
  }
  function y0(e, n) {
    var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
      var o = [],
        s = !0,
        l = !1,
        c,
        f;
      try {
        for (r = r.call(e); !(s = (c = r.next()).done) && (o.push(c.value), !(n && o.length === n)); s = !0);
      } catch (d) {
        (l = !0), (f = d);
      } finally {
        try {
          !s && r.return != null && r.return();
        } finally {
          if (l) throw f;
        }
      }
      return o;
    }
  }
  function bd(e, n) {
    if (e) {
      if (typeof e == 'string') return kl(e, n);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
        return Array.from(e);
      if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return kl(e, n);
    }
  }
  function kl(e, n) {
    (n == null || n > e.length) && (n = e.length);
    for (var r = 0, o = new Array(n); r < n; r++) o[r] = e[r];
    return o;
  }
  function S0() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function b0() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var xd = function () {},
    Dl = {},
    Od = {},
    Rd = null,
    Cd = { mark: xd, measure: xd };
  try {
    typeof window < 'u' && (Dl = window),
      typeof document < 'u' && (Od = document),
      typeof MutationObserver < 'u' && (Rd = MutationObserver),
      typeof performance < 'u' && (Cd = performance);
  } catch {}
  var x0 = Dl.navigator || {},
    Id = x0.userAgent,
    Ld = Id === void 0 ? '' : Id,
    xr = Dl,
    st = Od,
    wd = Rd,
    ba = Cd;
  xr.document;
  var nr =
      !!st.documentElement &&
      !!st.head &&
      typeof st.addEventListener == 'function' &&
      typeof st.createElement == 'function',
    vd = ~Ld.indexOf('MSIE') || ~Ld.indexOf('Trident/'),
    xa,
    Oa,
    Ra,
    Ca,
    Ia,
    rr = '___FONT_AWESOME___',
    Vl = 16,
    kd = 'fa',
    Dd = 'svg-inline--fa',
    Kr = 'data-fa-i2svg',
    Ml = 'data-fa-pseudo-element',
    O0 = 'data-fa-pseudo-element-pending',
    Bl = 'data-prefix',
    Pl = 'data-icon',
    Vd = 'fontawesome-i2svg',
    R0 = 'async',
    C0 = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
    Md = (function () {
      try {
        return !0;
      } catch {
        return !1;
      }
    })(),
    lt = 'classic',
    ht = 'sharp',
    Ul = [lt, ht];
  function Eo(e) {
    return new Proxy(e, {
      get: function (r, o) {
        return o in r ? r[o] : r[lt];
      },
    });
  }
  var _o = Eo(
      ((xa = {}),
      gt(xa, lt, {
        fa: 'solid',
        fas: 'solid',
        'fa-solid': 'solid',
        far: 'regular',
        'fa-regular': 'regular',
        fal: 'light',
        'fa-light': 'light',
        fat: 'thin',
        'fa-thin': 'thin',
        fad: 'duotone',
        'fa-duotone': 'duotone',
        fab: 'brands',
        'fa-brands': 'brands',
        fak: 'kit',
        fakd: 'kit',
        'fa-kit': 'kit',
        'fa-kit-duotone': 'kit',
      }),
      gt(xa, ht, {
        fa: 'solid',
        fass: 'solid',
        'fa-solid': 'solid',
        fasr: 'regular',
        'fa-regular': 'regular',
        fasl: 'light',
        'fa-light': 'light',
        fast: 'thin',
        'fa-thin': 'thin',
      }),
      xa),
    ),
    go = Eo(
      ((Oa = {}),
      gt(Oa, lt, {
        solid: 'fas',
        regular: 'far',
        light: 'fal',
        thin: 'fat',
        duotone: 'fad',
        brands: 'fab',
        kit: 'fak',
      }),
      gt(Oa, ht, { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' }),
      Oa),
    ),
    To = Eo(
      ((Ra = {}),
      gt(Ra, lt, {
        fab: 'fa-brands',
        fad: 'fa-duotone',
        fak: 'fa-kit',
        fal: 'fa-light',
        far: 'fa-regular',
        fas: 'fa-solid',
        fat: 'fa-thin',
      }),
      gt(Ra, ht, { fass: 'fa-solid', fasr: 'fa-regular', fasl: 'fa-light', fast: 'fa-thin' }),
      Ra),
    ),
    I0 = Eo(
      ((Ca = {}),
      gt(Ca, lt, {
        'fa-brands': 'fab',
        'fa-duotone': 'fad',
        'fa-kit': 'fak',
        'fa-light': 'fal',
        'fa-regular': 'far',
        'fa-solid': 'fas',
        'fa-thin': 'fat',
      }),
      gt(Ca, ht, { 'fa-solid': 'fass', 'fa-regular': 'fasr', 'fa-light': 'fasl', 'fa-thin': 'fast' }),
      Ca),
    ),
    L0 = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
    Bd = 'fa-layers-text',
    w0 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
    v0 = Eo(
      ((Ia = {}),
      gt(Ia, lt, { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' }),
      gt(Ia, ht, { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' }),
      Ia),
    ),
    Pd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    k0 = Pd.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    D0 = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
    jr = { GROUP: 'duotone-group', SWAP_OPACITY: 'swap-opacity', PRIMARY: 'primary', SECONDARY: 'secondary' },
    No = new Set();
  Object.keys(go[lt]).map(No.add.bind(No)), Object.keys(go[ht]).map(No.add.bind(No));
  var V0 = []
      .concat(Ul, mo(No), [
        '2xs',
        'xs',
        'sm',
        'lg',
        'xl',
        '2xl',
        'beat',
        'border',
        'fade',
        'beat-fade',
        'bounce',
        'flip-both',
        'flip-horizontal',
        'flip-vertical',
        'flip',
        'fw',
        'inverse',
        'layers-counter',
        'layers-text',
        'layers',
        'li',
        'pull-left',
        'pull-right',
        'pulse',
        'rotate-180',
        'rotate-270',
        'rotate-90',
        'rotate-by',
        'shake',
        'spin-pulse',
        'spin-reverse',
        'spin',
        'stack-1x',
        'stack-2x',
        'stack',
        'ul',
        jr.GROUP,
        jr.SWAP_OPACITY,
        jr.PRIMARY,
        jr.SECONDARY,
      ])
      .concat(
        Pd.map(function (e) {
          return ''.concat(e, 'x');
        }),
      )
      .concat(
        k0.map(function (e) {
          return 'w-'.concat(e);
        }),
      ),
    Ao = xr.FontAwesomeConfig || {};
  function M0(e) {
    var n = st.querySelector('script[' + e + ']');
    if (n) return n.getAttribute(e);
  }
  function B0(e) {
    return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e;
  }
  if (st && typeof st.querySelector == 'function') {
    var P0 = [
      ['data-family-prefix', 'familyPrefix'],
      ['data-css-prefix', 'cssPrefix'],
      ['data-family-default', 'familyDefault'],
      ['data-style-default', 'styleDefault'],
      ['data-replacement-class', 'replacementClass'],
      ['data-auto-replace-svg', 'autoReplaceSvg'],
      ['data-auto-add-css', 'autoAddCss'],
      ['data-auto-a11y', 'autoA11y'],
      ['data-search-pseudo-elements', 'searchPseudoElements'],
      ['data-observe-mutations', 'observeMutations'],
      ['data-mutate-approach', 'mutateApproach'],
      ['data-keep-original-source', 'keepOriginalSource'],
      ['data-measure-performance', 'measurePerformance'],
      ['data-show-missing-icons', 'showMissingIcons'],
    ];
    P0.forEach(function (e) {
      var n = vl(e, 2),
        r = n[0],
        o = n[1],
        s = B0(M0(r));
      s != null && (Ao[o] = s);
    });
  }
  var Ud = {
    styleDefault: 'solid',
    familyDefault: 'classic',
    cssPrefix: kd,
    replacementClass: Dd,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: 'async',
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0,
  };
  Ao.familyPrefix && (Ao.cssPrefix = Ao.familyPrefix);
  var Ri = Te(Te({}, Ud), Ao);
  Ri.autoReplaceSvg || (Ri.observeMutations = !1);
  var Re = {};
  Object.keys(Ud).forEach(function (e) {
    Object.defineProperty(Re, e, {
      enumerable: !0,
      set: function (r) {
        (Ri[e] = r),
          yo.forEach(function (o) {
            return o(Re);
          });
      },
      get: function () {
        return Ri[e];
      },
    });
  }),
    Object.defineProperty(Re, 'familyPrefix', {
      enumerable: !0,
      set: function (n) {
        (Ri.cssPrefix = n),
          yo.forEach(function (r) {
            return r(Re);
          });
      },
      get: function () {
        return Ri.cssPrefix;
      },
    }),
    (xr.FontAwesomeConfig = Re);
  var yo = [];
  function U0(e) {
    return (
      yo.push(e),
      function () {
        yo.splice(yo.indexOf(e), 1);
      }
    );
  }
  var Or = Vl,
    Xn = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
  function $0(e) {
    if (!(!e || !nr)) {
      var n = st.createElement('style');
      n.setAttribute('type', 'text/css'), (n.innerHTML = e);
      for (var r = st.head.childNodes, o = null, s = r.length - 1; s > -1; s--) {
        var l = r[s],
          c = (l.tagName || '').toUpperCase();
        ['STYLE', 'LINK'].indexOf(c) > -1 && (o = l);
      }
      return st.head.insertBefore(n, o), e;
    }
  }
  var H0 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function So() {
    for (var e = 12, n = ''; e-- > 0; ) n += H0[(Math.random() * 62) | 0];
    return n;
  }
  function Ci(e) {
    for (var n = [], r = (e || []).length >>> 0; r--; ) n[r] = e[r];
    return n;
  }
  function $l(e) {
    return e.classList
      ? Ci(e.classList)
      : (e.getAttribute('class') || '').split(' ').filter(function (n) {
          return n;
        });
  }
  function $d(e) {
    return ''
      .concat(e)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  function F0(e) {
    return Object.keys(e || {})
      .reduce(function (n, r) {
        return n + ''.concat(r, '="').concat($d(e[r]), '" ');
      }, '')
      .trim();
  }
  function La(e) {
    return Object.keys(e || {}).reduce(function (n, r) {
      return n + ''.concat(r, ': ').concat(e[r].trim(), ';');
    }, '');
  }
  function Hl(e) {
    return e.size !== Xn.size || e.x !== Xn.x || e.y !== Xn.y || e.rotate !== Xn.rotate || e.flipX || e.flipY;
  }
  function W0(e) {
    var n = e.transform,
      r = e.containerWidth,
      o = e.iconWidth,
      s = { transform: 'translate('.concat(r / 2, ' 256)') },
      l = 'translate('.concat(n.x * 32, ', ').concat(n.y * 32, ') '),
      c = 'scale('.concat((n.size / 16) * (n.flipX ? -1 : 1), ', ').concat((n.size / 16) * (n.flipY ? -1 : 1), ') '),
      f = 'rotate('.concat(n.rotate, ' 0 0)'),
      d = { transform: ''.concat(l, ' ').concat(c, ' ').concat(f) },
      m = { transform: 'translate('.concat((o / 2) * -1, ' -256)') };
    return { outer: s, inner: d, path: m };
  }
  function z0(e) {
    var n = e.transform,
      r = e.width,
      o = r === void 0 ? Vl : r,
      s = e.height,
      l = s === void 0 ? Vl : s,
      c = e.startCentered,
      f = c === void 0 ? !1 : c,
      d = '';
    return (
      f && vd
        ? (d += 'translate('.concat(n.x / Or - o / 2, 'em, ').concat(n.y / Or - l / 2, 'em) '))
        : f
          ? (d += 'translate(calc(-50% + '.concat(n.x / Or, 'em), calc(-50% + ').concat(n.y / Or, 'em)) '))
          : (d += 'translate('.concat(n.x / Or, 'em, ').concat(n.y / Or, 'em) ')),
      (d += 'scale('.concat((n.size / Or) * (n.flipX ? -1 : 1), ', ').concat((n.size / Or) * (n.flipY ? -1 : 1), ') ')),
      (d += 'rotate('.concat(n.rotate, 'deg) ')),
      d
    );
  }
  var X0 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
  function Hd() {
    var e = kd,
      n = Dd,
      r = Re.cssPrefix,
      o = Re.replacementClass,
      s = X0;
    if (r !== e || o !== n) {
      var l = new RegExp('\\.'.concat(e, '\\-'), 'g'),
        c = new RegExp('\\--'.concat(e, '\\-'), 'g'),
        f = new RegExp('\\.'.concat(n), 'g');
      s = s.replace(l, '.'.concat(r, '-')).replace(c, '--'.concat(r, '-')).replace(f, '.'.concat(o));
    }
    return s;
  }
  var Fd = !1;
  function Fl() {
    Re.autoAddCss && !Fd && ($0(Hd()), (Fd = !0));
  }
  var G0 = {
      mixout: function () {
        return { dom: { css: Hd, insertCss: Fl } };
      },
      hooks: function () {
        return {
          beforeDOMElementCreation: function () {
            Fl();
          },
          beforeI2svg: function () {
            Fl();
          },
        };
      },
    },
    ir = xr || {};
  ir[rr] || (ir[rr] = {}),
    ir[rr].styles || (ir[rr].styles = {}),
    ir[rr].hooks || (ir[rr].hooks = {}),
    ir[rr].shims || (ir[rr].shims = []);
  var Cn = ir[rr],
    Wd = [],
    Y0 = function e() {
      st.removeEventListener('DOMContentLoaded', e),
        (wa = 1),
        Wd.map(function (n) {
          return n();
        });
    },
    wa = !1;
  nr &&
    ((wa = (st.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(st.readyState)),
    wa || st.addEventListener('DOMContentLoaded', Y0));
  function K0(e) {
    nr && (wa ? setTimeout(e, 0) : Wd.push(e));
  }
  function bo(e) {
    var n = e.tag,
      r = e.attributes,
      o = r === void 0 ? {} : r,
      s = e.children,
      l = s === void 0 ? [] : s;
    return typeof e == 'string'
      ? $d(e)
      : '<'.concat(n, ' ').concat(F0(o), '>').concat(l.map(bo).join(''), '</').concat(n, '>');
  }
  function zd(e, n, r) {
    if (e && e[n] && e[n][r]) return { prefix: n, iconName: r, icon: e[n][r] };
  }
  var j0 = function (n, r) {
      return function (o, s, l, c) {
        return n.call(r, o, s, l, c);
      };
    },
    Wl = function (n, r, o, s) {
      var l = Object.keys(n),
        c = l.length,
        f = s !== void 0 ? j0(r, s) : r,
        d,
        m,
        p;
      for (o === void 0 ? ((d = 1), (p = n[l[0]])) : ((d = 0), (p = o)); d < c; d++) (m = l[d]), (p = f(p, n[m], m, n));
      return p;
    };
  function q0(e) {
    for (var n = [], r = 0, o = e.length; r < o; ) {
      var s = e.charCodeAt(r++);
      if (s >= 55296 && s <= 56319 && r < o) {
        var l = e.charCodeAt(r++);
        (l & 64512) == 56320 ? n.push(((s & 1023) << 10) + (l & 1023) + 65536) : (n.push(s), r--);
      } else n.push(s);
    }
    return n;
  }
  function zl(e) {
    var n = q0(e);
    return n.length === 1 ? n[0].toString(16) : null;
  }
  function J0(e, n) {
    var r = e.length,
      o = e.charCodeAt(n),
      s;
    return o >= 55296 && o <= 56319 && r > n + 1 && ((s = e.charCodeAt(n + 1)), s >= 56320 && s <= 57343)
      ? (o - 55296) * 1024 + s - 56320 + 65536
      : o;
  }
  function Xd(e) {
    return Object.keys(e).reduce(function (n, r) {
      var o = e[r],
        s = !!o.icon;
      return s ? (n[o.iconName] = o.icon) : (n[r] = o), n;
    }, {});
  }
  function Xl(e, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o = r.skipHooks,
      s = o === void 0 ? !1 : o,
      l = Xd(n);
    typeof Cn.hooks.addPack == 'function' && !s
      ? Cn.hooks.addPack(e, Xd(n))
      : (Cn.styles[e] = Te(Te({}, Cn.styles[e] || {}), l)),
      e === 'fas' && Xl('fa', n);
  }
  var va,
    ka,
    Da,
    Ii = Cn.styles,
    Q0 = Cn.shims,
    Z0 = ((va = {}), gt(va, lt, Object.values(To[lt])), gt(va, ht, Object.values(To[ht])), va),
    Gl = null,
    Gd = {},
    Yd = {},
    Kd = {},
    jd = {},
    qd = {},
    e1 = ((ka = {}), gt(ka, lt, Object.keys(_o[lt])), gt(ka, ht, Object.keys(_o[ht])), ka);
  function t1(e) {
    return ~V0.indexOf(e);
  }
  function n1(e, n) {
    var r = n.split('-'),
      o = r[0],
      s = r.slice(1).join('-');
    return o === e && s !== '' && !t1(s) ? s : null;
  }
  var Jd = function () {
    var n = function (l) {
      return Wl(
        Ii,
        function (c, f, d) {
          return (c[d] = Wl(f, l, {})), c;
        },
        {},
      );
    };
    (Gd = n(function (s, l, c) {
      if ((l[3] && (s[l[3]] = c), l[2])) {
        var f = l[2].filter(function (d) {
          return typeof d == 'number';
        });
        f.forEach(function (d) {
          s[d.toString(16)] = c;
        });
      }
      return s;
    })),
      (Yd = n(function (s, l, c) {
        if (((s[c] = c), l[2])) {
          var f = l[2].filter(function (d) {
            return typeof d == 'string';
          });
          f.forEach(function (d) {
            s[d] = c;
          });
        }
        return s;
      })),
      (qd = n(function (s, l, c) {
        var f = l[2];
        return (
          (s[c] = c),
          f.forEach(function (d) {
            s[d] = c;
          }),
          s
        );
      }));
    var r = 'far' in Ii || Re.autoFetchSvg,
      o = Wl(
        Q0,
        function (s, l) {
          var c = l[0],
            f = l[1],
            d = l[2];
          return (
            f === 'far' && !r && (f = 'fas'),
            typeof c == 'string' && (s.names[c] = { prefix: f, iconName: d }),
            typeof c == 'number' && (s.unicodes[c.toString(16)] = { prefix: f, iconName: d }),
            s
          );
        },
        { names: {}, unicodes: {} },
      );
    (Kd = o.names), (jd = o.unicodes), (Gl = Va(Re.styleDefault, { family: Re.familyDefault }));
  };
  U0(function (e) {
    Gl = Va(e.styleDefault, { family: Re.familyDefault });
  }),
    Jd();
  function Yl(e, n) {
    return (Gd[e] || {})[n];
  }
  function r1(e, n) {
    return (Yd[e] || {})[n];
  }
  function qr(e, n) {
    return (qd[e] || {})[n];
  }
  function Qd(e) {
    return Kd[e] || { prefix: null, iconName: null };
  }
  function i1(e) {
    var n = jd[e],
      r = Yl('fas', e);
    return n || (r ? { prefix: 'fas', iconName: r } : null) || { prefix: null, iconName: null };
  }
  function Rr() {
    return Gl;
  }
  var Kl = function () {
    return { prefix: null, iconName: null, rest: [] };
  };
  function Va(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.family,
      o = r === void 0 ? lt : r,
      s = _o[o][e],
      l = go[o][e] || go[o][s],
      c = e in Cn.styles ? e : null;
    return l || c || null;
  }
  var Zd = ((Da = {}), gt(Da, lt, Object.keys(To[lt])), gt(Da, ht, Object.keys(To[ht])), Da);
  function Ma(e) {
    var n,
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      o = r.skipLookups,
      s = o === void 0 ? !1 : o,
      l =
        ((n = {}),
        gt(n, lt, ''.concat(Re.cssPrefix, '-').concat(lt)),
        gt(n, ht, ''.concat(Re.cssPrefix, '-').concat(ht)),
        n),
      c = null,
      f = lt;
    (e.includes(l[lt]) ||
      e.some(function (m) {
        return Zd[lt].includes(m);
      })) &&
      (f = lt),
      (e.includes(l[ht]) ||
        e.some(function (m) {
          return Zd[ht].includes(m);
        })) &&
        (f = ht);
    var d = e.reduce(function (m, p) {
      var T = n1(Re.cssPrefix, p);
      if (
        (Ii[p]
          ? ((p = Z0[f].includes(p) ? I0[f][p] : p), (c = p), (m.prefix = p))
          : e1[f].indexOf(p) > -1
            ? ((c = p), (m.prefix = Va(p, { family: f })))
            : T
              ? (m.iconName = T)
              : p !== Re.replacementClass && p !== l[lt] && p !== l[ht] && m.rest.push(p),
        !s && m.prefix && m.iconName)
      ) {
        var N = c === 'fa' ? Qd(m.iconName) : {},
          b = qr(m.prefix, m.iconName);
        N.prefix && (c = null),
          (m.iconName = N.iconName || b || m.iconName),
          (m.prefix = N.prefix || m.prefix),
          m.prefix === 'far' && !Ii.far && Ii.fas && !Re.autoFetchSvg && (m.prefix = 'fas');
      }
      return m;
    }, Kl());
    return (
      (e.includes('fa-brands') || e.includes('fab')) && (d.prefix = 'fab'),
      (e.includes('fa-duotone') || e.includes('fad')) && (d.prefix = 'fad'),
      !d.prefix &&
        f === ht &&
        (Ii.fass || Re.autoFetchSvg) &&
        ((d.prefix = 'fass'), (d.iconName = qr(d.prefix, d.iconName) || d.iconName)),
      (d.prefix === 'fa' || c === 'fa') && (d.prefix = Rr() || 'fas'),
      d
    );
  }
  var o1 = (function () {
      function e() {
        _0(this, e), (this.definitions = {});
      }
      return (
        g0(e, [
          {
            key: 'add',
            value: function () {
              for (var r = this, o = arguments.length, s = new Array(o), l = 0; l < o; l++) s[l] = arguments[l];
              var c = s.reduce(this._pullDefinitions, {});
              Object.keys(c).forEach(function (f) {
                (r.definitions[f] = Te(Te({}, r.definitions[f] || {}), c[f])), Xl(f, c[f]);
                var d = To[lt][f];
                d && Xl(d, c[f]), Jd();
              });
            },
          },
          {
            key: 'reset',
            value: function () {
              this.definitions = {};
            },
          },
          {
            key: '_pullDefinitions',
            value: function (r, o) {
              var s = o.prefix && o.iconName && o.icon ? { 0: o } : o;
              return (
                Object.keys(s).map(function (l) {
                  var c = s[l],
                    f = c.prefix,
                    d = c.iconName,
                    m = c.icon,
                    p = m[2];
                  r[f] || (r[f] = {}),
                    p.length > 0 &&
                      p.forEach(function (T) {
                        typeof T == 'string' && (r[f][T] = m);
                      }),
                    (r[f][d] = m);
                }),
                r
              );
            },
          },
        ]),
        e
      );
    })(),
    ep = [],
    Li = {},
    wi = {},
    a1 = Object.keys(wi);
  function s1(e, n) {
    var r = n.mixoutsTo;
    return (
      (ep = e),
      (Li = {}),
      Object.keys(wi).forEach(function (o) {
        a1.indexOf(o) === -1 && delete wi[o];
      }),
      ep.forEach(function (o) {
        var s = o.mixout ? o.mixout() : {};
        if (
          (Object.keys(s).forEach(function (c) {
            typeof s[c] == 'function' && (r[c] = s[c]),
              Sa(s[c]) === 'object' &&
                Object.keys(s[c]).forEach(function (f) {
                  r[c] || (r[c] = {}), (r[c][f] = s[c][f]);
                });
          }),
          o.hooks)
        ) {
          var l = o.hooks();
          Object.keys(l).forEach(function (c) {
            Li[c] || (Li[c] = []), Li[c].push(l[c]);
          });
        }
        o.provides && o.provides(wi);
      }),
      r
    );
  }
  function jl(e, n) {
    for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) o[s - 2] = arguments[s];
    var l = Li[e] || [];
    return (
      l.forEach(function (c) {
        n = c.apply(null, [n].concat(o));
      }),
      n
    );
  }
  function Jr(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
    var s = Li[e] || [];
    s.forEach(function (l) {
      l.apply(null, r);
    });
  }
  function or() {
    var e = arguments[0],
      n = Array.prototype.slice.call(arguments, 1);
    return wi[e] ? wi[e].apply(null, n) : void 0;
  }
  function ql(e) {
    e.prefix === 'fa' && (e.prefix = 'fas');
    var n = e.iconName,
      r = e.prefix || Rr();
    if (n) return (n = qr(r, n) || n), zd(tp.definitions, r, n) || zd(Cn.styles, r, n);
  }
  var tp = new o1(),
    l1 = function () {
      (Re.autoReplaceSvg = !1), (Re.observeMutations = !1), Jr('noAuto');
    },
    c1 = {
      i2svg: function () {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return nr
          ? (Jr('beforeI2svg', n), or('pseudoElements2svg', n), or('i2svg', n))
          : Promise.reject('Operation requires a DOM of some kind.');
      },
      watch: function () {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          r = n.autoReplaceSvgRoot;
        Re.autoReplaceSvg === !1 && (Re.autoReplaceSvg = !0),
          (Re.observeMutations = !0),
          K0(function () {
            u1({ autoReplaceSvgRoot: r }), Jr('watch', n);
          });
      },
    },
    f1 = {
      icon: function (n) {
        if (n === null) return null;
        if (Sa(n) === 'object' && n.prefix && n.iconName)
          return { prefix: n.prefix, iconName: qr(n.prefix, n.iconName) || n.iconName };
        if (Array.isArray(n) && n.length === 2) {
          var r = n[1].indexOf('fa-') === 0 ? n[1].slice(3) : n[1],
            o = Va(n[0]);
          return { prefix: o, iconName: qr(o, r) || r };
        }
        if (typeof n == 'string' && (n.indexOf(''.concat(Re.cssPrefix, '-')) > -1 || n.match(L0))) {
          var s = Ma(n.split(' '), { skipLookups: !0 });
          return { prefix: s.prefix || Rr(), iconName: qr(s.prefix, s.iconName) || s.iconName };
        }
        if (typeof n == 'string') {
          var l = Rr();
          return { prefix: l, iconName: qr(l, n) || n };
        }
      },
    },
    Zt = { noAuto: l1, config: Re, dom: c1, parse: f1, library: tp, findIconDefinition: ql, toHtml: bo },
    u1 = function () {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        r = n.autoReplaceSvgRoot,
        o = r === void 0 ? st : r;
      (Object.keys(Cn.styles).length > 0 || Re.autoFetchSvg) && nr && Re.autoReplaceSvg && Zt.dom.i2svg({ node: o });
    };
  function Ba(e, n) {
    return (
      Object.defineProperty(e, 'abstract', { get: n }),
      Object.defineProperty(e, 'html', {
        get: function () {
          return e.abstract.map(function (o) {
            return bo(o);
          });
        },
      }),
      Object.defineProperty(e, 'node', {
        get: function () {
          if (nr) {
            var o = st.createElement('div');
            return (o.innerHTML = e.html), o.children;
          }
        },
      }),
      e
    );
  }
  function d1(e) {
    var n = e.children,
      r = e.main,
      o = e.mask,
      s = e.attributes,
      l = e.styles,
      c = e.transform;
    if (Hl(c) && r.found && !o.found) {
      var f = r.width,
        d = r.height,
        m = { x: f / d / 2, y: 0.5 };
      s.style = La(
        Te(Te({}, l), {}, { 'transform-origin': ''.concat(m.x + c.x / 16, 'em ').concat(m.y + c.y / 16, 'em') }),
      );
    }
    return [{ tag: 'svg', attributes: s, children: n }];
  }
  function p1(e) {
    var n = e.prefix,
      r = e.iconName,
      o = e.children,
      s = e.attributes,
      l = e.symbol,
      c = l === !0 ? ''.concat(n, '-').concat(Re.cssPrefix, '-').concat(r) : l;
    return [
      {
        tag: 'svg',
        attributes: { style: 'display: none;' },
        children: [{ tag: 'symbol', attributes: Te(Te({}, s), {}, { id: c }), children: o }],
      },
    ];
  }
  function Jl(e) {
    var n = e.icons,
      r = n.main,
      o = n.mask,
      s = e.prefix,
      l = e.iconName,
      c = e.transform,
      f = e.symbol,
      d = e.title,
      m = e.maskId,
      p = e.titleId,
      T = e.extra,
      N = e.watchable,
      b = N === void 0 ? !1 : N,
      R = o.found ? o : r,
      C = R.width,
      B = R.height,
      S = s === 'fak',
      V = [Re.replacementClass, l ? ''.concat(Re.cssPrefix, '-').concat(l) : '']
        .filter(function (y) {
          return T.classes.indexOf(y) === -1;
        })
        .filter(function (y) {
          return y !== '' || !!y;
        })
        .concat(T.classes)
        .join(' '),
      Y = {
        children: [],
        attributes: Te(
          Te({}, T.attributes),
          {},
          {
            'data-prefix': s,
            'data-icon': l,
            class: V,
            role: T.attributes.role || 'img',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 '.concat(C, ' ').concat(B),
          },
        ),
      },
      _ = S && !~T.classes.indexOf('fa-fw') ? { width: ''.concat((C / B) * 16 * 0.0625, 'em') } : {};
    b && (Y.attributes[Kr] = ''),
      d &&
        (Y.children.push({
          tag: 'title',
          attributes: { id: Y.attributes['aria-labelledby'] || 'title-'.concat(p || So()) },
          children: [d],
        }),
        delete Y.attributes.title);
    var k = Te(
        Te({}, Y),
        {},
        {
          prefix: s,
          iconName: l,
          main: r,
          mask: o,
          maskId: m,
          transform: c,
          symbol: f,
          styles: Te(Te({}, _), T.styles),
        },
      ),
      O =
        o.found && r.found
          ? or('generateAbstractMask', k) || { children: [], attributes: {} }
          : or('generateAbstractIcon', k) || { children: [], attributes: {} },
      D = O.children,
      L = O.attributes;
    return (k.children = D), (k.attributes = L), f ? p1(k) : d1(k);
  }
  function np(e) {
    var n = e.content,
      r = e.width,
      o = e.height,
      s = e.transform,
      l = e.title,
      c = e.extra,
      f = e.watchable,
      d = f === void 0 ? !1 : f,
      m = Te(Te(Te({}, c.attributes), l ? { title: l } : {}), {}, { class: c.classes.join(' ') });
    d && (m[Kr] = '');
    var p = Te({}, c.styles);
    Hl(s) &&
      ((p.transform = z0({ transform: s, startCentered: !0, width: r, height: o })),
      (p['-webkit-transform'] = p.transform));
    var T = La(p);
    T.length > 0 && (m.style = T);
    var N = [];
    return (
      N.push({ tag: 'span', attributes: m, children: [n] }),
      l && N.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [l] }),
      N
    );
  }
  function h1(e) {
    var n = e.content,
      r = e.title,
      o = e.extra,
      s = Te(Te(Te({}, o.attributes), r ? { title: r } : {}), {}, { class: o.classes.join(' ') }),
      l = La(o.styles);
    l.length > 0 && (s.style = l);
    var c = [];
    return (
      c.push({ tag: 'span', attributes: s, children: [n] }),
      r && c.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [r] }),
      c
    );
  }
  var Ql = Cn.styles;
  function Zl(e) {
    var n = e[0],
      r = e[1],
      o = e.slice(4),
      s = vl(o, 1),
      l = s[0],
      c = null;
    return (
      Array.isArray(l)
        ? (c = {
            tag: 'g',
            attributes: { class: ''.concat(Re.cssPrefix, '-').concat(jr.GROUP) },
            children: [
              {
                tag: 'path',
                attributes: { class: ''.concat(Re.cssPrefix, '-').concat(jr.SECONDARY), fill: 'currentColor', d: l[0] },
              },
              {
                tag: 'path',
                attributes: { class: ''.concat(Re.cssPrefix, '-').concat(jr.PRIMARY), fill: 'currentColor', d: l[1] },
              },
            ],
          })
        : (c = { tag: 'path', attributes: { fill: 'currentColor', d: l } }),
      { found: !0, width: n, height: r, icon: c }
    );
  }
  var m1 = { found: !1, width: 512, height: 512 };
  function E1(e, n) {
    !Md &&
      !Re.showMissingIcons &&
      e &&
      console.error('Icon with name "'.concat(e, '" and prefix "').concat(n, '" is missing.'));
  }
  function ec(e, n) {
    var r = n;
    return (
      n === 'fa' && Re.styleDefault !== null && (n = Rr()),
      new Promise(function (o, s) {
        if ((or('missingIconAbstract'), r === 'fa')) {
          var l = Qd(e) || {};
          (e = l.iconName || e), (n = l.prefix || n);
        }
        if (e && n && Ql[n] && Ql[n][e]) {
          var c = Ql[n][e];
          return o(Zl(c));
        }
        E1(e, n), o(Te(Te({}, m1), {}, { icon: Re.showMissingIcons && e ? or('missingIconAbstract') || {} : {} }));
      })
    );
  }
  var rp = function () {},
    tc = Re.measurePerformance && ba && ba.mark && ba.measure ? ba : { mark: rp, measure: rp },
    xo = 'FA "6.5.2"',
    _1 = function (n) {
      return (
        tc.mark(''.concat(xo, ' ').concat(n, ' begins')),
        function () {
          return ip(n);
        }
      );
    },
    ip = function (n) {
      tc.mark(''.concat(xo, ' ').concat(n, ' ends')),
        tc.measure(
          ''.concat(xo, ' ').concat(n),
          ''.concat(xo, ' ').concat(n, ' begins'),
          ''.concat(xo, ' ').concat(n, ' ends'),
        );
    },
    nc = { begin: _1, end: ip },
    Pa = function () {};
  function op(e) {
    var n = e.getAttribute ? e.getAttribute(Kr) : null;
    return typeof n == 'string';
  }
  function g1(e) {
    var n = e.getAttribute ? e.getAttribute(Bl) : null,
      r = e.getAttribute ? e.getAttribute(Pl) : null;
    return n && r;
  }
  function T1(e) {
    return e && e.classList && e.classList.contains && e.classList.contains(Re.replacementClass);
  }
  function N1() {
    if (Re.autoReplaceSvg === !0) return Ua.replace;
    var e = Ua[Re.autoReplaceSvg];
    return e || Ua.replace;
  }
  function A1(e) {
    return st.createElementNS('http://www.w3.org/2000/svg', e);
  }
  function y1(e) {
    return st.createElement(e);
  }
  function ap(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.ceFn,
      o = r === void 0 ? (e.tag === 'svg' ? A1 : y1) : r;
    if (typeof e == 'string') return st.createTextNode(e);
    var s = o(e.tag);
    Object.keys(e.attributes || []).forEach(function (c) {
      s.setAttribute(c, e.attributes[c]);
    });
    var l = e.children || [];
    return (
      l.forEach(function (c) {
        s.appendChild(ap(c, { ceFn: o }));
      }),
      s
    );
  }
  function S1(e) {
    var n = ' '.concat(e.outerHTML, ' ');
    return (n = ''.concat(n, 'Font Awesome fontawesome.com ')), n;
  }
  var Ua = {
    replace: function (n) {
      var r = n[0];
      if (r.parentNode)
        if (
          (n[1].forEach(function (s) {
            r.parentNode.insertBefore(ap(s), r);
          }),
          r.getAttribute(Kr) === null && Re.keepOriginalSource)
        ) {
          var o = st.createComment(S1(r));
          r.parentNode.replaceChild(o, r);
        } else r.remove();
    },
    nest: function (n) {
      var r = n[0],
        o = n[1];
      if (~$l(r).indexOf(Re.replacementClass)) return Ua.replace(n);
      var s = new RegExp(''.concat(Re.cssPrefix, '-.*'));
      if ((delete o[0].attributes.id, o[0].attributes.class)) {
        var l = o[0].attributes.class.split(' ').reduce(
          function (f, d) {
            return d === Re.replacementClass || d.match(s) ? f.toSvg.push(d) : f.toNode.push(d), f;
          },
          { toNode: [], toSvg: [] },
        );
        (o[0].attributes.class = l.toSvg.join(' ')),
          l.toNode.length === 0 ? r.removeAttribute('class') : r.setAttribute('class', l.toNode.join(' '));
      }
      var c = o.map(function (f) {
        return bo(f);
      }).join(`
`);
      r.setAttribute(Kr, ''), (r.innerHTML = c);
    },
  };
  function sp(e) {
    e();
  }
  function lp(e, n) {
    var r = typeof n == 'function' ? n : Pa;
    if (e.length === 0) r();
    else {
      var o = sp;
      Re.mutateApproach === R0 && (o = xr.requestAnimationFrame || sp),
        o(function () {
          var s = N1(),
            l = nc.begin('mutate');
          e.map(s), l(), r();
        });
    }
  }
  var rc = !1;
  function cp() {
    rc = !0;
  }
  function ic() {
    rc = !1;
  }
  var $a = null;
  function fp(e) {
    if (wd && Re.observeMutations) {
      var n = e.treeCallback,
        r = n === void 0 ? Pa : n,
        o = e.nodeCallback,
        s = o === void 0 ? Pa : o,
        l = e.pseudoElementsCallback,
        c = l === void 0 ? Pa : l,
        f = e.observeMutationsRoot,
        d = f === void 0 ? st : f;
      ($a = new wd(function (m) {
        if (!rc) {
          var p = Rr();
          Ci(m).forEach(function (T) {
            if (
              (T.type === 'childList' &&
                T.addedNodes.length > 0 &&
                !op(T.addedNodes[0]) &&
                (Re.searchPseudoElements && c(T.target), r(T.target)),
              T.type === 'attributes' && T.target.parentNode && Re.searchPseudoElements && c(T.target.parentNode),
              T.type === 'attributes' && op(T.target) && ~D0.indexOf(T.attributeName))
            )
              if (T.attributeName === 'class' && g1(T.target)) {
                var N = Ma($l(T.target)),
                  b = N.prefix,
                  R = N.iconName;
                T.target.setAttribute(Bl, b || p), R && T.target.setAttribute(Pl, R);
              } else T1(T.target) && s(T.target);
          });
        }
      })),
        nr && $a.observe(d, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
    }
  }
  function b1() {
    $a && $a.disconnect();
  }
  function x1(e) {
    var n = e.getAttribute('style'),
      r = [];
    return (
      n &&
        (r = n.split(';').reduce(function (o, s) {
          var l = s.split(':'),
            c = l[0],
            f = l.slice(1);
          return c && f.length > 0 && (o[c] = f.join(':').trim()), o;
        }, {})),
      r
    );
  }
  function O1(e) {
    var n = e.getAttribute('data-prefix'),
      r = e.getAttribute('data-icon'),
      o = e.innerText !== void 0 ? e.innerText.trim() : '',
      s = Ma($l(e));
    return (
      s.prefix || (s.prefix = Rr()),
      n && r && ((s.prefix = n), (s.iconName = r)),
      (s.iconName && s.prefix) ||
        (s.prefix && o.length > 0 && (s.iconName = r1(s.prefix, e.innerText) || Yl(s.prefix, zl(e.innerText))),
        !s.iconName &&
          Re.autoFetchSvg &&
          e.firstChild &&
          e.firstChild.nodeType === Node.TEXT_NODE &&
          (s.iconName = e.firstChild.data)),
      s
    );
  }
  function R1(e) {
    var n = Ci(e.attributes).reduce(function (s, l) {
        return s.name !== 'class' && s.name !== 'style' && (s[l.name] = l.value), s;
      }, {}),
      r = e.getAttribute('title'),
      o = e.getAttribute('data-fa-title-id');
    return (
      Re.autoA11y &&
        (r
          ? (n['aria-labelledby'] = ''.concat(Re.replacementClass, '-title-').concat(o || So()))
          : ((n['aria-hidden'] = 'true'), (n.focusable = 'false'))),
      n
    );
  }
  function C1() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: Xn,
      symbol: !1,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      extra: { classes: [], styles: {}, attributes: {} },
    };
  }
  function up(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 },
      r = O1(e),
      o = r.iconName,
      s = r.prefix,
      l = r.rest,
      c = R1(e),
      f = jl('parseNodeAttributes', {}, e),
      d = n.styleParser ? x1(e) : [];
    return Te(
      {
        iconName: o,
        title: e.getAttribute('title'),
        titleId: e.getAttribute('data-fa-title-id'),
        prefix: s,
        transform: Xn,
        mask: { iconName: null, prefix: null, rest: [] },
        maskId: null,
        symbol: !1,
        extra: { classes: l, styles: d, attributes: c },
      },
      f,
    );
  }
  var I1 = Cn.styles;
  function dp(e) {
    var n = Re.autoReplaceSvg === 'nest' ? up(e, { styleParser: !1 }) : up(e);
    return ~n.extra.classes.indexOf(Bd) ? or('generateLayersText', e, n) : or('generateSvgReplacementMutation', e, n);
  }
  var Cr = new Set();
  Ul.map(function (e) {
    Cr.add('fa-'.concat(e));
  }),
    Object.keys(_o[lt]).map(Cr.add.bind(Cr)),
    Object.keys(_o[ht]).map(Cr.add.bind(Cr)),
    (Cr = mo(Cr));
  function pp(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!nr) return Promise.resolve();
    var r = st.documentElement.classList,
      o = function (T) {
        return r.add(''.concat(Vd, '-').concat(T));
      },
      s = function (T) {
        return r.remove(''.concat(Vd, '-').concat(T));
      },
      l = Re.autoFetchSvg
        ? Cr
        : Ul.map(function (p) {
            return 'fa-'.concat(p);
          }).concat(Object.keys(I1));
    l.includes('fa') || l.push('fa');
    var c = ['.'.concat(Bd, ':not([').concat(Kr, '])')]
      .concat(
        l.map(function (p) {
          return '.'.concat(p, ':not([').concat(Kr, '])');
        }),
      )
      .join(', ');
    if (c.length === 0) return Promise.resolve();
    var f = [];
    try {
      f = Ci(e.querySelectorAll(c));
    } catch {}
    if (f.length > 0) o('pending'), s('complete');
    else return Promise.resolve();
    var d = nc.begin('onTree'),
      m = f.reduce(function (p, T) {
        try {
          var N = dp(T);
          N && p.push(N);
        } catch (b) {
          Md || (b.name === 'MissingIcon' && console.error(b));
        }
        return p;
      }, []);
    return new Promise(function (p, T) {
      Promise.all(m)
        .then(function (N) {
          lp(N, function () {
            o('active'), o('complete'), s('pending'), typeof n == 'function' && n(), d(), p();
          });
        })
        .catch(function (N) {
          d(), T(N);
        });
    });
  }
  function L1(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    dp(e).then(function (r) {
      r && lp([r], n);
    });
  }
  function w1(e) {
    return function (n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        o = (n || {}).icon ? n : ql(n || {}),
        s = r.mask;
      return s && (s = (s || {}).icon ? s : ql(s || {})), e(o, Te(Te({}, r), {}, { mask: s }));
    };
  }
  var v1 = function (n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        o = r.transform,
        s = o === void 0 ? Xn : o,
        l = r.symbol,
        c = l === void 0 ? !1 : l,
        f = r.mask,
        d = f === void 0 ? null : f,
        m = r.maskId,
        p = m === void 0 ? null : m,
        T = r.title,
        N = T === void 0 ? null : T,
        b = r.titleId,
        R = b === void 0 ? null : b,
        C = r.classes,
        B = C === void 0 ? [] : C,
        S = r.attributes,
        V = S === void 0 ? {} : S,
        Y = r.styles,
        _ = Y === void 0 ? {} : Y;
      if (n) {
        var k = n.prefix,
          O = n.iconName,
          D = n.icon;
        return Ba(Te({ type: 'icon' }, n), function () {
          return (
            Jr('beforeDOMElementCreation', { iconDefinition: n, params: r }),
            Re.autoA11y &&
              (N
                ? (V['aria-labelledby'] = ''.concat(Re.replacementClass, '-title-').concat(R || So()))
                : ((V['aria-hidden'] = 'true'), (V.focusable = 'false'))),
            Jl({
              icons: { main: Zl(D), mask: d ? Zl(d.icon) : { found: !1, width: null, height: null, icon: {} } },
              prefix: k,
              iconName: O,
              transform: Te(Te({}, Xn), s),
              symbol: c,
              title: N,
              maskId: p,
              titleId: R,
              extra: { attributes: V, styles: _, classes: B },
            })
          );
        });
      }
    },
    k1 = {
      mixout: function () {
        return { icon: w1(v1) };
      },
      hooks: function () {
        return {
          mutationObserverCallbacks: function (r) {
            return (r.treeCallback = pp), (r.nodeCallback = L1), r;
          },
        };
      },
      provides: function (n) {
        (n.i2svg = function (r) {
          var o = r.node,
            s = o === void 0 ? st : o,
            l = r.callback,
            c = l === void 0 ? function () {} : l;
          return pp(s, c);
        }),
          (n.generateSvgReplacementMutation = function (r, o) {
            var s = o.iconName,
              l = o.title,
              c = o.titleId,
              f = o.prefix,
              d = o.transform,
              m = o.symbol,
              p = o.mask,
              T = o.maskId,
              N = o.extra;
            return new Promise(function (b, R) {
              Promise.all([
                ec(s, f),
                p.iconName
                  ? ec(p.iconName, p.prefix)
                  : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
              ])
                .then(function (C) {
                  var B = vl(C, 2),
                    S = B[0],
                    V = B[1];
                  b([
                    r,
                    Jl({
                      icons: { main: S, mask: V },
                      prefix: f,
                      iconName: s,
                      transform: d,
                      symbol: m,
                      maskId: T,
                      title: l,
                      titleId: c,
                      extra: N,
                      watchable: !0,
                    }),
                  ]);
                })
                .catch(R);
            });
          }),
          (n.generateAbstractIcon = function (r) {
            var o = r.children,
              s = r.attributes,
              l = r.main,
              c = r.transform,
              f = r.styles,
              d = La(f);
            d.length > 0 && (s.style = d);
            var m;
            return (
              Hl(c) &&
                (m = or('generateAbstractTransformGrouping', {
                  main: l,
                  transform: c,
                  containerWidth: l.width,
                  iconWidth: l.width,
                })),
              o.push(m || l.icon),
              { children: o, attributes: s }
            );
          });
      },
    },
    D1 = {
      mixout: function () {
        return {
          layer: function (r) {
            var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
              s = o.classes,
              l = s === void 0 ? [] : s;
            return Ba({ type: 'layer' }, function () {
              Jr('beforeDOMElementCreation', { assembler: r, params: o });
              var c = [];
              return (
                r(function (f) {
                  Array.isArray(f)
                    ? f.map(function (d) {
                        c = c.concat(d.abstract);
                      })
                    : (c = c.concat(f.abstract));
                }),
                [
                  {
                    tag: 'span',
                    attributes: { class: [''.concat(Re.cssPrefix, '-layers')].concat(mo(l)).join(' ') },
                    children: c,
                  },
                ]
              );
            });
          },
        };
      },
    },
    V1 = {
      mixout: function () {
        return {
          counter: function (r) {
            var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
              s = o.title,
              l = s === void 0 ? null : s,
              c = o.classes,
              f = c === void 0 ? [] : c,
              d = o.attributes,
              m = d === void 0 ? {} : d,
              p = o.styles,
              T = p === void 0 ? {} : p;
            return Ba({ type: 'counter', content: r }, function () {
              return (
                Jr('beforeDOMElementCreation', { content: r, params: o }),
                h1({
                  content: r.toString(),
                  title: l,
                  extra: {
                    attributes: m,
                    styles: T,
                    classes: [''.concat(Re.cssPrefix, '-layers-counter')].concat(mo(f)),
                  },
                })
              );
            });
          },
        };
      },
    },
    M1 = {
      mixout: function () {
        return {
          text: function (r) {
            var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
              s = o.transform,
              l = s === void 0 ? Xn : s,
              c = o.title,
              f = c === void 0 ? null : c,
              d = o.classes,
              m = d === void 0 ? [] : d,
              p = o.attributes,
              T = p === void 0 ? {} : p,
              N = o.styles,
              b = N === void 0 ? {} : N;
            return Ba({ type: 'text', content: r }, function () {
              return (
                Jr('beforeDOMElementCreation', { content: r, params: o }),
                np({
                  content: r,
                  transform: Te(Te({}, Xn), l),
                  title: f,
                  extra: { attributes: T, styles: b, classes: [''.concat(Re.cssPrefix, '-layers-text')].concat(mo(m)) },
                })
              );
            });
          },
        };
      },
      provides: function (n) {
        n.generateLayersText = function (r, o) {
          var s = o.title,
            l = o.transform,
            c = o.extra,
            f = null,
            d = null;
          if (vd) {
            var m = parseInt(getComputedStyle(r).fontSize, 10),
              p = r.getBoundingClientRect();
            (f = p.width / m), (d = p.height / m);
          }
          return (
            Re.autoA11y && !s && (c.attributes['aria-hidden'] = 'true'),
            Promise.resolve([
              r,
              np({ content: r.innerHTML, width: f, height: d, transform: l, title: s, extra: c, watchable: !0 }),
            ])
          );
        };
      },
    },
    B1 = new RegExp('"', 'ug'),
    hp = [1105920, 1112319];
  function P1(e) {
    var n = e.replace(B1, ''),
      r = J0(n, 0),
      o = r >= hp[0] && r <= hp[1],
      s = n.length === 2 ? n[0] === n[1] : !1;
    return { value: zl(s ? n[0] : n), isSecondary: o || s };
  }
  function mp(e, n) {
    var r = ''.concat(O0).concat(n.replace(':', '-'));
    return new Promise(function (o, s) {
      if (e.getAttribute(r) !== null) return o();
      var l = Ci(e.children),
        c = l.filter(function (D) {
          return D.getAttribute(Ml) === n;
        })[0],
        f = xr.getComputedStyle(e, n),
        d = f.getPropertyValue('font-family').match(w0),
        m = f.getPropertyValue('font-weight'),
        p = f.getPropertyValue('content');
      if (c && !d) return e.removeChild(c), o();
      if (d && p !== 'none' && p !== '') {
        var T = f.getPropertyValue('content'),
          N = ~['Sharp'].indexOf(d[2]) ? ht : lt,
          b = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(d[2])
            ? go[N][d[2].toLowerCase()]
            : v0[N][m],
          R = P1(T),
          C = R.value,
          B = R.isSecondary,
          S = d[0].startsWith('FontAwesome'),
          V = Yl(b, C),
          Y = V;
        if (S) {
          var _ = i1(C);
          _.iconName && _.prefix && ((V = _.iconName), (b = _.prefix));
        }
        if (V && !B && (!c || c.getAttribute(Bl) !== b || c.getAttribute(Pl) !== Y)) {
          e.setAttribute(r, Y), c && e.removeChild(c);
          var k = C1(),
            O = k.extra;
          (O.attributes[Ml] = n),
            ec(V, b)
              .then(function (D) {
                var L = Jl(
                    Te(
                      Te({}, k),
                      {},
                      { icons: { main: D, mask: Kl() }, prefix: b, iconName: Y, extra: O, watchable: !0 },
                    ),
                  ),
                  y = st.createElementNS('http://www.w3.org/2000/svg', 'svg');
                n === '::before' ? e.insertBefore(y, e.firstChild) : e.appendChild(y),
                  (y.outerHTML = L.map(function (K) {
                    return bo(K);
                  }).join(`
`)),
                  e.removeAttribute(r),
                  o();
              })
              .catch(s);
        } else o();
      } else o();
    });
  }
  function U1(e) {
    return Promise.all([mp(e, '::before'), mp(e, '::after')]);
  }
  function $1(e) {
    return (
      e.parentNode !== document.head &&
      !~C0.indexOf(e.tagName.toUpperCase()) &&
      !e.getAttribute(Ml) &&
      (!e.parentNode || e.parentNode.tagName !== 'svg')
    );
  }
  function Ep(e) {
    if (nr)
      return new Promise(function (n, r) {
        var o = Ci(e.querySelectorAll('*')).filter($1).map(U1),
          s = nc.begin('searchPseudoElements');
        cp(),
          Promise.all(o)
            .then(function () {
              s(), ic(), n();
            })
            .catch(function () {
              s(), ic(), r();
            });
      });
  }
  var H1 = {
      hooks: function () {
        return {
          mutationObserverCallbacks: function (r) {
            return (r.pseudoElementsCallback = Ep), r;
          },
        };
      },
      provides: function (n) {
        n.pseudoElements2svg = function (r) {
          var o = r.node,
            s = o === void 0 ? st : o;
          Re.searchPseudoElements && Ep(s);
        };
      },
    },
    _p = !1,
    F1 = {
      mixout: function () {
        return {
          dom: {
            unwatch: function () {
              cp(), (_p = !0);
            },
          },
        };
      },
      hooks: function () {
        return {
          bootstrap: function () {
            fp(jl('mutationObserverCallbacks', {}));
          },
          noAuto: function () {
            b1();
          },
          watch: function (r) {
            var o = r.observeMutationsRoot;
            _p ? ic() : fp(jl('mutationObserverCallbacks', { observeMutationsRoot: o }));
          },
        };
      },
    },
    gp = function (n) {
      var r = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
      return n
        .toLowerCase()
        .split(' ')
        .reduce(function (o, s) {
          var l = s.toLowerCase().split('-'),
            c = l[0],
            f = l.slice(1).join('-');
          if (c && f === 'h') return (o.flipX = !0), o;
          if (c && f === 'v') return (o.flipY = !0), o;
          if (((f = parseFloat(f)), isNaN(f))) return o;
          switch (c) {
            case 'grow':
              o.size = o.size + f;
              break;
            case 'shrink':
              o.size = o.size - f;
              break;
            case 'left':
              o.x = o.x - f;
              break;
            case 'right':
              o.x = o.x + f;
              break;
            case 'up':
              o.y = o.y - f;
              break;
            case 'down':
              o.y = o.y + f;
              break;
            case 'rotate':
              o.rotate = o.rotate + f;
              break;
          }
          return o;
        }, r);
    },
    W1 = {
      mixout: function () {
        return {
          parse: {
            transform: function (r) {
              return gp(r);
            },
          },
        };
      },
      hooks: function () {
        return {
          parseNodeAttributes: function (r, o) {
            var s = o.getAttribute('data-fa-transform');
            return s && (r.transform = gp(s)), r;
          },
        };
      },
      provides: function (n) {
        n.generateAbstractTransformGrouping = function (r) {
          var o = r.main,
            s = r.transform,
            l = r.containerWidth,
            c = r.iconWidth,
            f = { transform: 'translate('.concat(l / 2, ' 256)') },
            d = 'translate('.concat(s.x * 32, ', ').concat(s.y * 32, ') '),
            m = 'scale('
              .concat((s.size / 16) * (s.flipX ? -1 : 1), ', ')
              .concat((s.size / 16) * (s.flipY ? -1 : 1), ') '),
            p = 'rotate('.concat(s.rotate, ' 0 0)'),
            T = { transform: ''.concat(d, ' ').concat(m, ' ').concat(p) },
            N = { transform: 'translate('.concat((c / 2) * -1, ' -256)') },
            b = { outer: f, inner: T, path: N };
          return {
            tag: 'g',
            attributes: Te({}, b.outer),
            children: [
              {
                tag: 'g',
                attributes: Te({}, b.inner),
                children: [
                  { tag: o.icon.tag, children: o.icon.children, attributes: Te(Te({}, o.icon.attributes), b.path) },
                ],
              },
            ],
          };
        };
      },
    },
    oc = { x: 0, y: 0, width: '100%', height: '100%' };
  function Tp(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return e.attributes && (e.attributes.fill || n) && (e.attributes.fill = 'black'), e;
  }
  function z1(e) {
    return e.tag === 'g' ? e.children : [e];
  }
  var X1 = {
      hooks: function () {
        return {
          parseNodeAttributes: function (r, o) {
            var s = o.getAttribute('data-fa-mask'),
              l = s
                ? Ma(
                    s.split(' ').map(function (c) {
                      return c.trim();
                    }),
                  )
                : Kl();
            return l.prefix || (l.prefix = Rr()), (r.mask = l), (r.maskId = o.getAttribute('data-fa-mask-id')), r;
          },
        };
      },
      provides: function (n) {
        n.generateAbstractMask = function (r) {
          var o = r.children,
            s = r.attributes,
            l = r.main,
            c = r.mask,
            f = r.maskId,
            d = r.transform,
            m = l.width,
            p = l.icon,
            T = c.width,
            N = c.icon,
            b = W0({ transform: d, containerWidth: T, iconWidth: m }),
            R = { tag: 'rect', attributes: Te(Te({}, oc), {}, { fill: 'white' }) },
            C = p.children ? { children: p.children.map(Tp) } : {},
            B = {
              tag: 'g',
              attributes: Te({}, b.inner),
              children: [Tp(Te({ tag: p.tag, attributes: Te(Te({}, p.attributes), b.path) }, C))],
            },
            S = { tag: 'g', attributes: Te({}, b.outer), children: [B] },
            V = 'mask-'.concat(f || So()),
            Y = 'clip-'.concat(f || So()),
            _ = {
              tag: 'mask',
              attributes: Te(
                Te({}, oc),
                {},
                { id: V, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' },
              ),
              children: [R, S],
            },
            k = { tag: 'defs', children: [{ tag: 'clipPath', attributes: { id: Y }, children: z1(N) }, _] };
          return (
            o.push(k, {
              tag: 'rect',
              attributes: Te(
                { fill: 'currentColor', 'clip-path': 'url(#'.concat(Y, ')'), mask: 'url(#'.concat(V, ')') },
                oc,
              ),
            }),
            { children: o, attributes: s }
          );
        };
      },
    },
    G1 = {
      provides: function (n) {
        var r = !1;
        xr.matchMedia && (r = xr.matchMedia('(prefers-reduced-motion: reduce)').matches),
          (n.missingIconAbstract = function () {
            var o = [],
              s = { fill: 'currentColor' },
              l = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' };
            o.push({
              tag: 'path',
              attributes: Te(
                Te({}, s),
                {},
                {
                  d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
                },
              ),
            });
            var c = Te(Te({}, l), {}, { attributeName: 'opacity' }),
              f = { tag: 'circle', attributes: Te(Te({}, s), {}, { cx: '256', cy: '364', r: '28' }), children: [] };
            return (
              r ||
                f.children.push(
                  {
                    tag: 'animate',
                    attributes: Te(Te({}, l), {}, { attributeName: 'r', values: '28;14;28;28;14;28;' }),
                  },
                  { tag: 'animate', attributes: Te(Te({}, c), {}, { values: '1;0;1;1;0;1;' }) },
                ),
              o.push(f),
              o.push({
                tag: 'path',
                attributes: Te(
                  Te({}, s),
                  {},
                  {
                    opacity: '1',
                    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                  },
                ),
                children: r ? [] : [{ tag: 'animate', attributes: Te(Te({}, c), {}, { values: '1;0;0;0;0;1;' }) }],
              }),
              r ||
                o.push({
                  tag: 'path',
                  attributes: Te(
                    Te({}, s),
                    {},
                    {
                      opacity: '0',
                      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                    },
                  ),
                  children: [{ tag: 'animate', attributes: Te(Te({}, c), {}, { values: '0;0;1;1;0;0;' }) }],
                }),
              { tag: 'g', attributes: { class: 'missing' }, children: o }
            );
          });
      },
    },
    Y1 = {
      hooks: function () {
        return {
          parseNodeAttributes: function (r, o) {
            var s = o.getAttribute('data-fa-symbol'),
              l = s === null ? !1 : s === '' ? !0 : s;
            return (r.symbol = l), r;
          },
        };
      },
    },
    K1 = [G0, k1, D1, V1, M1, H1, F1, W1, X1, G1, Y1];
  s1(K1, { mixoutsTo: Zt }), Zt.noAuto;
  var Np = Zt.config;
  Zt.library, Zt.dom;
  var Ha = Zt.parse;
  Zt.findIconDefinition, Zt.toHtml;
  var j1 = Zt.icon;
  Zt.layer;
  var q1 = Zt.text;
  Zt.counter;
  function Ap(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n &&
        (o = o.filter(function (s) {
          return Object.getOwnPropertyDescriptor(e, s).enumerable;
        })),
        r.push.apply(r, o);
    }
    return r;
  }
  function In(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n] != null ? arguments[n] : {};
      n % 2
        ? Ap(Object(r), !0).forEach(function (o) {
            Wt(e, o, r[o]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Ap(Object(r)).forEach(function (o) {
              Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
            });
    }
    return e;
  }
  function Fa(e) {
    '@babel/helpers - typeof';
    return (
      (Fa =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (n) {
              return typeof n;
            }
          : function (n) {
              return n && typeof Symbol == 'function' && n.constructor === Symbol && n !== Symbol.prototype
                ? 'symbol'
                : typeof n;
            }),
      Fa(e)
    );
  }
  function Wt(e, n, r) {
    return (
      (n = iN(n)),
      n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r),
      e
    );
  }
  function J1(e, n) {
    if (e == null) return {};
    var r = {},
      o = Object.keys(e),
      s,
      l;
    for (l = 0; l < o.length; l++) (s = o[l]), !(n.indexOf(s) >= 0) && (r[s] = e[s]);
    return r;
  }
  function Q1(e, n) {
    if (e == null) return {};
    var r = J1(e, n),
      o,
      s;
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (s = 0; s < l.length; s++)
        (o = l[s]), !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]);
    }
    return r;
  }
  function ac(e) {
    return Z1(e) || eN(e) || tN(e) || nN();
  }
  function Z1(e) {
    if (Array.isArray(e)) return sc(e);
  }
  function eN(e) {
    if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
  }
  function tN(e, n) {
    if (e) {
      if (typeof e == 'string') return sc(e, n);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
        return Array.from(e);
      if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sc(e, n);
    }
  }
  function sc(e, n) {
    (n == null || n > e.length) && (n = e.length);
    for (var r = 0, o = new Array(n); r < n; r++) o[r] = e[r];
    return o;
  }
  function nN() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function rN(e, n) {
    if (typeof e != 'object' || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var o = r.call(e, n || 'default');
      if (typeof o != 'object') return o;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (n === 'string' ? String : Number)(e);
  }
  function iN(e) {
    var n = rN(e, 'string');
    return typeof n == 'symbol' ? n : String(n);
  }
  var oN =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof self < 'u'
              ? self
              : {},
    yp = { exports: {} };
  (function (e) {
    (function (n) {
      var r = function (S, V, Y) {
          if (!m(V) || T(V) || N(V) || b(V) || d(V)) return V;
          var _,
            k = 0,
            O = 0;
          if (p(V)) for (_ = [], O = V.length; k < O; k++) _.push(r(S, V[k], Y));
          else {
            _ = {};
            for (var D in V) Object.prototype.hasOwnProperty.call(V, D) && (_[S(D, Y)] = r(S, V[D], Y));
          }
          return _;
        },
        o = function (S, V) {
          V = V || {};
          var Y = V.separator || '_',
            _ = V.split || /(?=[A-Z])/;
          return S.split(_).join(Y);
        },
        s = function (S) {
          return R(S)
            ? S
            : ((S = S.replace(/[\-_\s]+(.)?/g, function (V, Y) {
                return Y ? Y.toUpperCase() : '';
              })),
              S.substr(0, 1).toLowerCase() + S.substr(1));
        },
        l = function (S) {
          var V = s(S);
          return V.substr(0, 1).toUpperCase() + V.substr(1);
        },
        c = function (S, V) {
          return o(S, V).toLowerCase();
        },
        f = Object.prototype.toString,
        d = function (S) {
          return typeof S == 'function';
        },
        m = function (S) {
          return S === Object(S);
        },
        p = function (S) {
          return f.call(S) == '[object Array]';
        },
        T = function (S) {
          return f.call(S) == '[object Date]';
        },
        N = function (S) {
          return f.call(S) == '[object RegExp]';
        },
        b = function (S) {
          return f.call(S) == '[object Boolean]';
        },
        R = function (S) {
          return (S = S - 0), S === S;
        },
        C = function (S, V) {
          var Y = V && 'process' in V ? V.process : V;
          return typeof Y != 'function'
            ? S
            : function (_, k) {
                return Y(_, S, k);
              };
        },
        B = {
          camelize: s,
          decamelize: c,
          pascalize: l,
          depascalize: c,
          camelizeKeys: function (S, V) {
            return r(C(s, V), S);
          },
          decamelizeKeys: function (S, V) {
            return r(C(c, V), S, V);
          },
          pascalizeKeys: function (S, V) {
            return r(C(l, V), S);
          },
          depascalizeKeys: function () {
            return this.decamelizeKeys.apply(this, arguments);
          },
        };
      e.exports ? (e.exports = B) : (n.humps = B);
    })(oN);
  })(yp);
  var aN = yp.exports,
    sN = ['class', 'style'];
  function lN(e) {
    return e
      .split(';')
      .map(function (n) {
        return n.trim();
      })
      .filter(function (n) {
        return n;
      })
      .reduce(function (n, r) {
        var o = r.indexOf(':'),
          s = aN.camelize(r.slice(0, o)),
          l = r.slice(o + 1).trim();
        return (n[s] = l), n;
      }, {});
  }
  function cN(e) {
    return e.split(/\s+/).reduce(function (n, r) {
      return (n[r] = !0), n;
    }, {});
  }
  function lc(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof e == 'string') return e;
    var o = (e.children || []).map(function (d) {
        return lc(d);
      }),
      s = Object.keys(e.attributes || {}).reduce(
        function (d, m) {
          var p = e.attributes[m];
          switch (m) {
            case 'class':
              d.class = cN(p);
              break;
            case 'style':
              d.style = lN(p);
              break;
            default:
              d.attrs[m] = p;
          }
          return d;
        },
        { attrs: {}, class: {}, style: {} },
      );
    r.class;
    var l = r.style,
      c = l === void 0 ? {} : l,
      f = Q1(r, sN);
    return t.h(e.tag, In(In(In({}, n), {}, { class: s.class, style: In(In({}, s.style), c) }, s.attrs), f), o);
  }
  var Sp = !1;
  try {
    Sp = !0;
  } catch {}
  function fN() {
    if (!Sp && console && typeof console.error == 'function') {
      var e;
      (e = console).error.apply(e, arguments);
    }
  }
  function Oo(e, n) {
    return (Array.isArray(n) && n.length > 0) || (!Array.isArray(n) && n) ? Wt({}, e, n) : {};
  }
  function uN(e) {
    var n,
      r =
        ((n = {
          'fa-spin': e.spin,
          'fa-pulse': e.pulse,
          'fa-fw': e.fixedWidth,
          'fa-border': e.border,
          'fa-li': e.listItem,
          'fa-inverse': e.inverse,
          'fa-flip': e.flip === !0,
          'fa-flip-horizontal': e.flip === 'horizontal' || e.flip === 'both',
          'fa-flip-vertical': e.flip === 'vertical' || e.flip === 'both',
        }),
        Wt(n, 'fa-'.concat(e.size), e.size !== null),
        Wt(n, 'fa-rotate-'.concat(e.rotation), e.rotation !== null),
        Wt(n, 'fa-pull-'.concat(e.pull), e.pull !== null),
        Wt(n, 'fa-swap-opacity', e.swapOpacity),
        Wt(n, 'fa-bounce', e.bounce),
        Wt(n, 'fa-shake', e.shake),
        Wt(n, 'fa-beat', e.beat),
        Wt(n, 'fa-fade', e.fade),
        Wt(n, 'fa-beat-fade', e.beatFade),
        Wt(n, 'fa-flash', e.flash),
        Wt(n, 'fa-spin-pulse', e.spinPulse),
        Wt(n, 'fa-spin-reverse', e.spinReverse),
        n);
    return Object.keys(r)
      .map(function (o) {
        return r[o] ? o : null;
      })
      .filter(function (o) {
        return o;
      });
  }
  function bp(e) {
    if (e && Fa(e) === 'object' && e.prefix && e.iconName && e.icon) return e;
    if (Ha.icon) return Ha.icon(e);
    if (e === null) return null;
    if (Fa(e) === 'object' && e.prefix && e.iconName) return e;
    if (Array.isArray(e) && e.length === 2) return { prefix: e[0], iconName: e[1] };
    if (typeof e == 'string') return { prefix: 'fas', iconName: e };
  }
  var qe = t.defineComponent({
    name: 'FontAwesomeIcon',
    props: {
      border: { type: Boolean, default: !1 },
      fixedWidth: { type: Boolean, default: !1 },
      flip: {
        type: [Boolean, String],
        default: !1,
        validator: function (n) {
          return [!0, !1, 'horizontal', 'vertical', 'both'].indexOf(n) > -1;
        },
      },
      icon: { type: [Object, Array, String], required: !0 },
      mask: { type: [Object, Array, String], default: null },
      maskId: { type: String, default: null },
      listItem: { type: Boolean, default: !1 },
      pull: {
        type: String,
        default: null,
        validator: function (n) {
          return ['right', 'left'].indexOf(n) > -1;
        },
      },
      pulse: { type: Boolean, default: !1 },
      rotation: {
        type: [String, Number],
        default: null,
        validator: function (n) {
          return [90, 180, 270].indexOf(Number.parseInt(n, 10)) > -1;
        },
      },
      swapOpacity: { type: Boolean, default: !1 },
      size: {
        type: String,
        default: null,
        validator: function (n) {
          return (
            ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(
              n,
            ) > -1
          );
        },
      },
      spin: { type: Boolean, default: !1 },
      transform: { type: [String, Object], default: null },
      symbol: { type: [Boolean, String], default: !1 },
      title: { type: String, default: null },
      titleId: { type: String, default: null },
      inverse: { type: Boolean, default: !1 },
      bounce: { type: Boolean, default: !1 },
      shake: { type: Boolean, default: !1 },
      beat: { type: Boolean, default: !1 },
      fade: { type: Boolean, default: !1 },
      beatFade: { type: Boolean, default: !1 },
      flash: { type: Boolean, default: !1 },
      spinPulse: { type: Boolean, default: !1 },
      spinReverse: { type: Boolean, default: !1 },
    },
    setup: function (n, r) {
      var o = r.attrs,
        s = t.computed(function () {
          return bp(n.icon);
        }),
        l = t.computed(function () {
          return Oo('classes', uN(n));
        }),
        c = t.computed(function () {
          return Oo('transform', typeof n.transform == 'string' ? Ha.transform(n.transform) : n.transform);
        }),
        f = t.computed(function () {
          return Oo('mask', bp(n.mask));
        }),
        d = t.computed(function () {
          return j1(
            s.value,
            In(
              In(In(In({}, l.value), c.value), f.value),
              {},
              { symbol: n.symbol, title: n.title, titleId: n.titleId, maskId: n.maskId },
            ),
          );
        });
      t.watch(
        d,
        function (p) {
          if (!p) return fN('Could not find one or more icon(s)', s.value, f.value);
        },
        { immediate: !0 },
      );
      var m = t.computed(function () {
        return d.value ? lc(d.value.abstract[0], {}, o) : null;
      });
      return function () {
        return m.value;
      };
    },
  });
  t.defineComponent({
    name: 'FontAwesomeLayers',
    props: { fixedWidth: { type: Boolean, default: !1 } },
    setup: function (n, r) {
      var o = r.slots,
        s = Np.familyPrefix,
        l = t.computed(function () {
          return [''.concat(s, '-layers')].concat(ac(n.fixedWidth ? [''.concat(s, '-fw')] : []));
        });
      return function () {
        return t.h('div', { class: l.value }, o.default ? o.default() : []);
      };
    },
  }),
    t.defineComponent({
      name: 'FontAwesomeLayersText',
      props: {
        value: { type: [String, Number], default: '' },
        transform: { type: [String, Object], default: null },
        counter: { type: Boolean, default: !1 },
        position: {
          type: String,
          default: null,
          validator: function (n) {
            return ['bottom-left', 'bottom-right', 'top-left', 'top-right'].indexOf(n) > -1;
          },
        },
      },
      setup: function (n, r) {
        var o = r.attrs,
          s = Np.familyPrefix,
          l = t.computed(function () {
            return Oo(
              'classes',
              [].concat(
                ac(n.counter ? [''.concat(s, '-layers-counter')] : []),
                ac(n.position ? [''.concat(s, '-layers-').concat(n.position)] : []),
              ),
            );
          }),
          c = t.computed(function () {
            return Oo('transform', typeof n.transform == 'string' ? Ha.transform(n.transform) : n.transform);
          }),
          f = t.computed(function () {
            var m = q1(n.value.toString(), In(In({}, c.value), l.value)),
              p = m.abstract;
            return n.counter && (p[0].attributes.class = p[0].attributes.class.replace('fa-layers-text', '')), p[0];
          }),
          d = t.computed(function () {
            return lc(f.value, {}, o);
          });
        return function () {
          return d.value;
        };
      },
    });
  var dN = {
      prefix: 'fas',
      iconName: 'chevron-up',
      icon: [
        512,
        512,
        [],
        'f077',
        'M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z',
      ],
    },
    pN = {
      prefix: 'fas',
      iconName: 'align-justify',
      icon: [
        448,
        512,
        [],
        'f039',
        'M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z',
      ],
    },
    hN = {
      prefix: 'fas',
      iconName: 'clipboard',
      icon: [
        384,
        512,
        [128203],
        'f328',
        'M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z',
      ],
    },
    mN = {
      prefix: 'fas',
      iconName: 'arrow-down-wide-short',
      icon: [
        576,
        512,
        ['sort-amount-asc', 'sort-amount-down'],
        'f160',
        'M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320z',
      ],
    },
    cc = {
      prefix: 'fas',
      iconName: 'filter',
      icon: [
        512,
        512,
        [],
        'f0b0',
        'M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z',
      ],
    },
    EN = {
      prefix: 'fas',
      iconName: 'circle-info',
      icon: [
        512,
        512,
        ['info-circle'],
        'f05a',
        'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z',
      ],
    },
    Ro = EN,
    _N = {
      prefix: 'fas',
      iconName: 'arrow-rotate-left',
      icon: [
        512,
        512,
        [8634, 'arrow-left-rotate', 'arrow-rotate-back', 'arrow-rotate-backward', 'undo'],
        'f0e2',
        'M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z',
      ],
    },
    gN = _N,
    xp = {
      prefix: 'fas',
      iconName: 'clock',
      icon: [
        512,
        512,
        [128339, 'clock-four'],
        'f017',
        'M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z',
      ],
    },
    TN = {
      prefix: 'fas',
      iconName: 'caret-down',
      icon: [
        320,
        512,
        [],
        'f0d7',
        'M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z',
      ],
    },
    NN = {
      prefix: 'fas',
      iconName: 'arrow-down-short-wide',
      icon: [
        576,
        512,
        ['sort-amount-desc', 'sort-amount-down-alt'],
        'f884',
        'M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32z',
      ],
    },
    AN = {
      prefix: 'fas',
      iconName: 'thumbs-down',
      icon: [
        512,
        512,
        [128078, 61576],
        'f165',
        'M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z',
      ],
    },
    Op = {
      prefix: 'fas',
      iconName: 'arrow-down',
      icon: [
        384,
        512,
        [8595],
        'f063',
        'M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z',
      ],
    },
    yN = {
      prefix: 'fas',
      iconName: 'magnifying-glass',
      icon: [
        512,
        512,
        [128269, 'search'],
        'f002',
        'M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z',
      ],
    },
    SN = yN,
    Rp = {
      prefix: 'fas',
      iconName: 'chevron-down',
      icon: [
        512,
        512,
        [],
        'f078',
        'M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z',
      ],
    },
    Cp = {
      prefix: 'fas',
      iconName: 'arrow-up',
      icon: [
        384,
        512,
        [8593],
        'f062',
        'M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z',
      ],
    },
    bN = {
      prefix: 'fas',
      iconName: 'chevron-right',
      icon: [
        320,
        512,
        [9002],
        'f054',
        'M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z',
      ],
    },
    xN = {
      prefix: 'fas',
      iconName: 'check',
      icon: [
        448,
        512,
        [10003, 10004],
        'f00c',
        'M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z',
      ],
    },
    ON = {
      prefix: 'fas',
      iconName: 'triangle-exclamation',
      icon: [
        512,
        512,
        [9888, 'exclamation-triangle', 'warning'],
        'f071',
        'M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z',
      ],
    },
    Ip = ON,
    RN = {
      prefix: 'fas',
      iconName: 'right-left',
      icon: [
        512,
        512,
        ['exchange-alt'],
        'f362',
        'M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z',
      ],
    },
    Lp = RN,
    wp = {
      prefix: 'fas',
      iconName: 'dollar-sign',
      icon: [
        320,
        512,
        [128178, 61781, 'dollar', 'usd'],
        '24',
        'M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z',
      ],
    };
  const CN = { class: 'copy position-absolute', style: { top: '0', right: '0' } },
    fc = t.defineComponent({
      __name: 'Copy',
      props: { content: null },
      setup(e) {
        const n = e,
          r = t.ref(!1);
        function o() {
          const { toClipboard: s } = Lg();
          s(n.content),
            (r.value = !0),
            window.setTimeout(() => {
              r.value = !1;
            }, 2e3);
        }
        return (s, l) => (
          t.openBlock(),
          t.createElementBlock('div', CN, [
            t.createElementVNode(
              'button',
              {
                name: 'copyRawButton',
                class: t.normalizeClass([
                  'btn btn-outline-secondary bg-light btn-sm m-2',
                  r.value ? 'd-none' : 'd-block',
                ]),
                onClick: o,
              },
              [t.createVNode(t.unref(qe), { 'fixed-width': '', icon: t.unref(hN) }, null, 8, ['icon'])],
              2,
            ),
            t.createTextVNode(),
            t.withDirectives(
              (t.openBlock(),
              t.createElementBlock(
                'button',
                {
                  class: t.normalizeClass([
                    'btn btn-outline-secondary bg-light btn-sm m-2',
                    r.value ? 'd-block' : 'd-none',
                  ]),
                  onClick: o,
                },
                [
                  t.createVNode(t.unref(qe), { 'fixed-width': '', icon: t.unref(xN), class: 'text-success' }, null, 8, [
                    'icon',
                  ]),
                ],
                2,
              )),
              [[t.unref(Qe), { placement: 'left', arrow: !0, content: 'copied' }]],
            ),
          ])
        );
      },
    });
  var Ze = (e => (
      (e[(e.time = 0)] = 'time'),
      (e[(e.rows = 1)] = 'rows'),
      (e[(e.cost = 2)] = 'cost'),
      (e[(e.buffers = 3)] = 'buffers'),
      (e[(e.estimate_factor = 4)] = 'estimate_factor'),
      (e[(e.io = 5)] = 'io'),
      e
    ))(Ze || {}),
    Me = (e => ((e.shared = 'Shared'), (e.temp = 'Temp'), (e.local = 'Local'), e))(Me || {});
  class xt {}
  we(xt, 'NONE', 'none'), we(xt, 'DURATION', 'duration'), we(xt, 'ROWS', 'rows'), we(xt, 'COST', 'cost');
  var Gn = (e => ((e.asc = 'asc'), (e.desc = 'desc'), e))(Gn || {}),
    St = (e => ((e[(e.over = 1)] = 'over'), (e[(e.under = 2)] = 'under'), (e[(e.none = 3)] = 'none'), e))(St || {}),
    E = (e => (
      (e.NODE_TYPE = 'Node Type'),
      (e.ACTUAL_ROWS = 'Actual Rows'),
      (e.PLAN_ROWS = 'Plan Rows'),
      (e.PLAN_WIDTH = 'Plan Width'),
      (e.ROWS_REMOVED_BY_FILTER = 'Rows Removed by Filter'),
      (e.ROWS_REMOVED_BY_JOIN_FILTER = 'Rows Removed by Join Filter'),
      (e.ACTUAL_STARTUP_TIME = 'Actual Startup Time'),
      (e.ACTUAL_TOTAL_TIME = 'Actual Total Time'),
      (e.ACTUAL_LOOPS = 'Actual Loops'),
      (e.STARTUP_COST = 'Startup Cost'),
      (e.TOTAL_COST = 'Total Cost'),
      (e.PLANS = 'Plans'),
      (e.RELATION_NAME = 'Relation Name'),
      (e.SCHEMA = 'Schema'),
      (e.ALIAS = 'Alias'),
      (e.GROUP_KEY = 'Group Key'),
      (e.SORT_KEY = 'Sort Key'),
      (e.SORT_METHOD = 'Sort Method'),
      (e.SORT_SPACE_TYPE = 'Sort Space Type'),
      (e.SORT_SPACE_USED = 'Sort Space Used'),
      (e.JOIN_TYPE = 'Join Type'),
      (e.INDEX_NAME = 'Index Name'),
      (e.HASH_CONDITION = 'Hash Cond'),
      (e.PARENT_RELATIONSHIP = 'Parent Relationship'),
      (e.SUBPLAN_NAME = 'Subplan Name'),
      (e.PARALLEL_AWARE = 'Parallel Aware'),
      (e.WORKERS = 'Workers'),
      (e.WORKERS_PLANNED = 'Workers Planned'),
      (e.WORKERS_LAUNCHED = 'Workers Launched'),
      (e.SHARED_HIT_BLOCKS = 'Shared Hit Blocks'),
      (e.SHARED_READ_BLOCKS = 'Shared Read Blocks'),
      (e.SHARED_DIRTIED_BLOCKS = 'Shared Dirtied Blocks'),
      (e.SHARED_WRITTEN_BLOCKS = 'Shared Written Blocks'),
      (e.TEMP_READ_BLOCKS = 'Temp Read Blocks'),
      (e.TEMP_WRITTEN_BLOCKS = 'Temp Written Blocks'),
      (e.LOCAL_HIT_BLOCKS = 'Local Hit Blocks'),
      (e.LOCAL_READ_BLOCKS = 'Local Read Blocks'),
      (e.LOCAL_DIRTIED_BLOCKS = 'Local Dirtied Blocks'),
      (e.LOCAL_WRITTEN_BLOCKS = 'Local Written Blocks'),
      (e.IO_READ_TIME = 'I/O Read Time'),
      (e.IO_WRITE_TIME = 'I/O Write Time'),
      (e.OUTPUT = 'Output'),
      (e.HEAP_FETCHES = 'Heap Fetches'),
      (e.WAL_RECORDS = 'WAL Records'),
      (e.WAL_BYTES = 'WAL Bytes'),
      (e.WAL_FPI = 'WAL FPI'),
      (e.FULL_SORT_GROUPS = 'Full-sort Groups'),
      (e.PRE_SORTED_GROUPS = 'Pre-sorted Groups'),
      (e.PRESORTED_KEY = 'Presorted Key'),
      (e.FILTER = 'Filter'),
      (e.STRATEGY = 'Strategy'),
      (e.NODE_ID = 'nodeId'),
      (e.EXCLUSIVE_DURATION = '*Duration (exclusive)'),
      (e.EXCLUSIVE_COST = '*Cost (exclusive)'),
      (e.ACTUAL_ROWS_REVISED = '*Actual Rows Revised'),
      (e.PLAN_ROWS_REVISED = '*Plan Rows Revised'),
      (e.ROWS_REMOVED_BY_FILTER_REVISED = '*Rows Removed by Filter'),
      (e.ROWS_REMOVED_BY_JOIN_FILTER_REVISED = '*Rows Removed by Join Filter'),
      (e.PLANNER_ESTIMATE_FACTOR = '*Planner Row Estimate Factor'),
      (e.PLANNER_ESTIMATE_DIRECTION = '*Planner Row Estimate Direction'),
      (e.EXCLUSIVE_SHARED_HIT_BLOCKS = '*Shared Hit Blocks (exclusive)'),
      (e.EXCLUSIVE_SHARED_READ_BLOCKS = '*Shared Read Blocks (exclusive)'),
      (e.EXCLUSIVE_SHARED_DIRTIED_BLOCKS = '*Shared Dirtied Blocks (exclusive)'),
      (e.EXCLUSIVE_SHARED_WRITTEN_BLOCKS = '*Shared Written Blocks (exclusive)'),
      (e.EXCLUSIVE_TEMP_READ_BLOCKS = '*Temp Read Blocks (exclusive)'),
      (e.EXCLUSIVE_TEMP_WRITTEN_BLOCKS = '*Temp Written Blocks (exclusive)'),
      (e.EXCLUSIVE_LOCAL_HIT_BLOCKS = '*Local Hit Blocks (exclusive)'),
      (e.EXCLUSIVE_LOCAL_READ_BLOCKS = '*Local Read Blocks (exclusive)'),
      (e.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS = '*Local Dirtied Blocks (exclusive)'),
      (e.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS = '*Local Written Blocks (exclusive)'),
      (e.EXCLUSIVE_IO_READ_TIME = '*I/O Read Time (exclusive)'),
      (e.EXCLUSIVE_IO_WRITE_TIME = '*I/O Write Time (exclusive)'),
      (e.AVERAGE_IO_READ_TIME = '*I/O Read Speed (exclusive)'),
      (e.AVERAGE_IO_WRITE_TIME = '*I/O Write Speed (exclusive)'),
      (e.WORKERS_PLANNED_BY_GATHER = '*Workers Planned By Gather'),
      (e.CTE_SCAN = 'CTE Scan'),
      (e.CTE_NAME = 'CTE Name'),
      (e.FUNCTION_NAME = 'Function Name'),
      (e.ARRAY_INDEX_KEY = 'arrayIndex'),
      (e.PEV_PLAN_TAG = 'plan_'),
      e
    ))(E || {}),
    wt = (e => (
      (e[(e.blocks = 0)] = 'blocks'),
      (e[(e.boolean = 1)] = 'boolean'),
      (e[(e.bytes = 2)] = 'bytes'),
      (e[(e.cost = 3)] = 'cost'),
      (e[(e.duration = 4)] = 'duration'),
      (e[(e.estimateDirection = 5)] = 'estimateDirection'),
      (e[(e.factor = 6)] = 'factor'),
      (e[(e.increment = 7)] = 'increment'),
      (e[(e.json = 8)] = 'json'),
      (e[(e.kilobytes = 9)] = 'kilobytes'),
      (e[(e.list = 10)] = 'list'),
      (e[(e.loops = 11)] = 'loops'),
      (e[(e.rows = 12)] = 'rows'),
      (e[(e.sortGroups = 13)] = 'sortGroups'),
      (e[(e.transferRate = 14)] = 'transferRate'),
      e
    ))(wt || {});
  const be = {};
  (be['Actual Rows'] = 12),
    (be['Actual Loops'] = 11),
    (be['Plan Rows'] = 12),
    (be['Plan Width'] = 2),
    (be['*Actual Rows Revised'] = 12),
    (be['*Plan Rows Revised'] = 12),
    (be['Actual Total Time'] = 4),
    (be['Actual Startup Time'] = 4),
    (be['Startup Cost'] = 3),
    (be['Total Cost'] = 3),
    (be['Parallel Aware'] = 1),
    (be.Workers = 8),
    (be['Sort Space Used'] = 9),
    (be['Rows Removed by Filter'] = 12),
    (be['Rows Removed by Join Filter'] = 12),
    (be['*Rows Removed by Filter'] = 12),
    (be['*Rows Removed by Join Filter'] = 12),
    (be['Heap Fetches'] = 12),
    (be.Output = 10),
    (be['Sort Key'] = 10),
    (be['Presorted Key'] = 10),
    (be['WAL Records'] = 12),
    (be['WAL Bytes'] = 2),
    (be['WAL FPI'] = 12),
    (be['*Duration (exclusive)'] = 4),
    (be['*Cost (exclusive)'] = 3),
    (be['*Planner Row Estimate Factor'] = 6),
    (be['*Planner Row Estimate Direction'] = 5),
    (be['I/O Read Time'] = 4),
    (be['I/O Write Time'] = 4),
    (be['*I/O Read Time (exclusive)'] = 4),
    (be['*I/O Write Time (exclusive)'] = 4),
    (be['*I/O Read Speed (exclusive)'] = 14),
    (be['*I/O Write Speed (exclusive)'] = 14),
    (be['*Shared Hit Blocks (exclusive)'] = 0),
    (be['*Shared Read Blocks (exclusive)'] = 0),
    (be['*Shared Dirtied Blocks (exclusive)'] = 0),
    (be['*Shared Written Blocks (exclusive)'] = 0),
    (be['*Temp Read Blocks (exclusive)'] = 0),
    (be['*Temp Written Blocks (exclusive)'] = 0),
    (be['*Local Hit Blocks (exclusive)'] = 0),
    (be['*Local Read Blocks (exclusive)'] = 0),
    (be['*Local Dirtied Blocks (exclusive)'] = 0),
    (be['*Local Written Blocks (exclusive)'] = 0),
    (be['Full-sort Groups'] = 13),
    (be['Pre-sorted Groups'] = 13);
  class Co {}
  we(Co, 'WORKER_NUMBER', 'Worker Number'), (be[Co.WORKER_NUMBER] = 7);
  var Wa = (e => (
      (e.GROUP_COUNT = 'Group Count'),
      (e.SORT_METHODS_USED = 'Sort Methods Used'),
      (e.SORT_SPACE_MEMORY = 'Sort Space Memory'),
      e
    ))(Wa || {}),
    uc = (e => (
      (e.AVERAGE_SORT_SPACE_USED = 'Average Sort Space Used'), (e.PEAK_SORT_SPACE_USED = 'Peak Sort Space Used'), e
    ))(uc || {});
  class Io {
    constructor() {
      we(this, 'nodeId', 0);
    }
    getNodeTypeDescription(n) {
      return IN[n.toUpperCase()];
    }
    getHelpMessage(n) {
      return LN[n.toUpperCase()];
    }
  }
  const IN = {
      LIMIT: 'returns a specified number of rows from a record set.',
      SORT: 'sorts a record set based on the specified sort key.',
      'NESTED LOOP': `merges two record sets by looping through every record in the first set and
   trying to find a match in the second set. All matching records are returned.`,
      'MERGE JOIN': 'merges two record sets by first sorting them on a <strong>join key</strong>.',
      HASH: `generates a hash table from the records in the input recordset. Hash is used by
   <strong>Hash Join</strong>.`,
      'HASH JOIN': 'joins two record sets by hashing one of them (using a <strong>Hash Scan</strong>).',
      AGGREGATE: 'groups records together based on a GROUP BY or aggregate function (like <code>sum()</code>).',
      HASHAGGREGATE: `groups records together based on a GROUP BY or aggregate function (like sum()). Hash Aggregate uses
   a hash to first organize the records by a key.`,
      'SEQ SCAN': `finds relevant records by sequentially scanning the input record set. When reading from a table,
   Seq Scans (unlike Index Scans) perform a single read operation (only the table is read).`,
      'INDEX SCAN': `finds relevant records based on an <strong>Index</strong>.
    Index Scans perform 2 read operations: one to
    read the index and another to read the actual value from the table.`,
      'INDEX ONLY SCAN': `finds relevant records based on an <strong>Index</strong>.
    Index Only Scans perform a single read operation
    from the index and do not read from the corresponding table.`,
      'BITMAP HEAP SCAN': `searches through the pages returned by the <strong>Bitmap Index Scan</strong>
    for relevant rows.`,
      'BITMAP INDEX SCAN': `uses a <strong>Bitmap Index</strong> (index which uses 1 bit per page)
    to find all relevant pages.
    Results of this node are fed to the <strong>Bitmap Heap Scan</strong>.`,
      'CTE SCAN': `performs a sequential scan of <strong>Common Table Expression (CTE) query</strong> results. Note that
    results of a CTE are materialized (calculated and temporarily stored).`,
      MEMOIZE:
        'is used to cache the results of the inner side of a nested loop. It avoids executing underlying nodes when the results for the current parameters are already in the cache.',
      GATHER: 'reads the results of the parallel workers, in an undefined order.',
      'GATHER MERGE': 'reads the results of the parallel workers, preserving any ordering.',
    },
    LN = {
      'MISSING EXECUTION TIME': `Execution time (or Total runtime) not available for this plan. Make sure you
    use EXPLAIN ANALYZE.`,
      'MISSING PLANNING TIME': 'Planning time not available for this plan.',
      'WORKERS PLANNED NOT LAUNCHED': `Less workers than planned were launched.
Consider modifying max_parallel_workers or max_parallel_workers_per_gather.`,
      'WORKERS DETAILED INFO MISSING': 'Consider using EXPLAIN (ANALYZE, VERBOSE)',
      'FUZZY NEEDS VERBOSE': 'Information may not be accurate. Use EXPLAIN VERBOSE mode.',
      'HINT TRACK_IO_TIMING':
        'HINT: activate <em><b>track_io_timing</b></em> to have details on time spent outside the PG cache.',
    };
  function wN(e, n, r, o) {
    if (!n) return;
    const s = e.getBoundingClientRect(),
      l = n.getBoundingClientRect();
    let c = e.scrollLeft;
    const f = l.left >= s.left && l.left <= s.right && l.right <= s.right;
    let d = e.scrollTop;
    const m = l.top >= s.top && l.top <= s.bottom && l.bottom <= s.bottom;
    r || !f || !m
      ? ((c = l.left + e.scrollLeft - s.left - s.width / 2 + l.width / 2),
        (d = l.top + e.scrollTop - s.top - s.height / 2 + l.height / 2),
        vN({ element: e, to: { scrollTop: d, scrollLeft: c }, duration: 400, done: o }))
      : o && o();
  }
  const vp = ({ currentTime: e, start: n, change: r, duration: o }) => {
    let s = e;
    return (s /= o / 2), s < 1 ? (r / 2) * s * s + n : ((s -= 1), (-r / 2) * (s * (s - 2) - 1) + n);
  };
  function vN({ duration: e, element: n, to: r, done: o }) {
    const s = n.scrollTop,
      l = n.scrollLeft,
      c = r.scrollTop - s,
      f = r.scrollLeft - l,
      d = new Date().getTime(),
      m = () => {
        const T = new Date().getTime() - d;
        (n.scrollTop = vp({ currentTime: T, start: s, change: c, duration: e })),
          (n.scrollLeft = vp({ currentTime: T, start: l, change: f, duration: e })),
          T < e ? requestAnimationFrame(m) : ((n.scrollTop = r.scrollTop), (n.scrollLeft = r.scrollLeft), o && o());
      };
    m();
  }
  function kp(e, n) {
    const r = '([\\s\\S]*?)(e)?(?:(o)|(c)|(t)|(sp)|$)'
        .replace('sp', n)
        .replace('o', '[\\(\\{\\[]')
        .replace('c', '[\\)\\}\\]]')
        .replace('t', `['"]`)
        .replace('e', '[\\\\]'),
      o = new RegExp(r, 'gi'),
      s = [];
    let l = [];
    const c = [];
    return (
      e.replace(o, (f, d, m, p, T, N, b) => {
        if (m) return l.push(d, b || p || T || N), '';
        if (p) s.push(p);
        else if (T) s.pop();
        else if (N) s[s.length - 1] !== N ? s.push(N) : s.pop();
        else if (b ? !s.length : !d) return l.push(d), c.push(l.join('')), (l = []), '';
        return l.push(f), '';
      }),
      c
    );
  }
  function kN(e, n) {
    let r;
    const o = e.content.Plan;
    return o.nodeId == n
      ? o
      : (o &&
          o.Plans &&
          (o.Plans.some(function s(l) {
            return l.nodeId === n ? ((r = l), !0) : l.Plans && l.Plans.some(s);
          }),
          !r &&
            e.ctes &&
            $.each(e.ctes, s => {
              if (s.nodeId == n) return (r = s), !1;
              if (
                s.Plans &&
                (s.Plans.some(function l(c) {
                  return c.nodeId === n ? ((r = c), !0) : c.Plans && c.Plans.some(l);
                }),
                r)
              )
                return !1;
            })),
        r);
  }
  function DN(e, n) {
    let r;
    return (
      e.ctes &&
        $.each(e.ctes, o => {
          if (o[E.SUBPLAN_NAME] == 'CTE ' + n) return (r = o), !1;
        }),
      r
    );
  }
  const VN = [
    E.NODE_TYPE,
    E.CTE_NAME,
    E.EXCLUSIVE_DURATION,
    E.EXCLUSIVE_COST,
    E.TOTAL_COST,
    E.PLAN_ROWS,
    E.ACTUAL_ROWS,
    E.ACTUAL_LOOPS,
    E.OUTPUT,
    E.WORKERS,
    E.WORKERS_PLANNED,
    E.WORKERS_LAUNCHED,
    E.EXCLUSIVE_SHARED_HIT_BLOCKS,
    E.EXCLUSIVE_SHARED_READ_BLOCKS,
    E.EXCLUSIVE_SHARED_DIRTIED_BLOCKS,
    E.EXCLUSIVE_SHARED_WRITTEN_BLOCKS,
    E.EXCLUSIVE_TEMP_READ_BLOCKS,
    E.EXCLUSIVE_TEMP_WRITTEN_BLOCKS,
    E.EXCLUSIVE_LOCAL_HIT_BLOCKS,
    E.EXCLUSIVE_LOCAL_READ_BLOCKS,
    E.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS,
    E.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS,
    E.SHARED_HIT_BLOCKS,
    E.SHARED_READ_BLOCKS,
    E.SHARED_DIRTIED_BLOCKS,
    E.SHARED_WRITTEN_BLOCKS,
    E.TEMP_READ_BLOCKS,
    E.TEMP_WRITTEN_BLOCKS,
    E.LOCAL_HIT_BLOCKS,
    E.LOCAL_READ_BLOCKS,
    E.LOCAL_DIRTIED_BLOCKS,
    E.LOCAL_WRITTEN_BLOCKS,
    E.PLANNER_ESTIMATE_FACTOR,
    E.PLANNER_ESTIMATE_DIRECTION,
    E.SUBPLAN_NAME,
    E.GROUP_KEY,
    E.HASH_CONDITION,
    E.JOIN_TYPE,
    E.INDEX_NAME,
    E.HASH_CONDITION,
    E.EXCLUSIVE_IO_READ_TIME,
    E.EXCLUSIVE_IO_WRITE_TIME,
    E.AVERAGE_IO_READ_TIME,
    E.AVERAGE_IO_WRITE_TIME,
    E.IO_READ_TIME,
    E.IO_WRITE_TIME,
    E.HEAP_FETCHES,
    E.WAL_RECORDS,
    E.WAL_BYTES,
    E.WAL_FPI,
    E.NODE_ID,
    E.ROWS_REMOVED_BY_FILTER,
    E.ROWS_REMOVED_BY_JOIN_FILTER,
    E.ACTUAL_ROWS_REVISED,
    E.PLAN_ROWS_REVISED,
    E.ROWS_REMOVED_BY_FILTER_REVISED,
    E.ROWS_REMOVED_BY_JOIN_FILTER_REVISED,
    'size',
    E.RELATION_NAME,
    E.ALIAS,
    E.FUNCTION_NAME,
    E.STRATEGY,
  ];
  function Dp(e, n) {
    return (!!n || be[e] === wt.increment || e === E.ACTUAL_ROWS) && VN.indexOf(e) === -1;
  }
  const MN = { class: 'tree-lines' },
    dc = t.defineComponent({
      __name: 'LevelDivider',
      props: {
        level: null,
        isSubplan: { type: Boolean },
        isNode: { type: Boolean },
        isLastChild: { type: Boolean },
        branches: null,
        index: null,
        dense: { type: Boolean, default: !1 },
      },
      setup(e) {
        const r = e.dense ? '' : ' ';
        return (o, s) => (
          t.openBlock(),
          t.createElementBlock('span', MN, [
            (t.openBlock(!0),
            t.createElementBlock(
              t.Fragment,
              null,
              t.renderList(
                t.unref($).range(e.level),
                l => (
                  t.openBlock(),
                  t.createElementBlock(
                    t.Fragment,
                    null,
                    [
                      t.unref($).indexOf(e.branches, l) != -1
                        ? (t.openBlock(),
                          t.createElementBlock(
                            t.Fragment,
                            { key: 0 },
                            [t.createTextVNode(t.toDisplayString(t.unref(r)) + '│', 1)],
                            64,
                          ))
                        : l !== 0
                          ? (t.openBlock(),
                            t.createElementBlock(
                              t.Fragment,
                              { key: 1 },
                              [t.createTextVNode(t.toDisplayString(t.unref(r)) + ' ', 1)],
                              64,
                            ))
                          : t.createCommentVNode('', !0),
                    ],
                    64,
                  )
                ),
              ),
              256,
            )),
            e.index !== 0
              ? (t.openBlock(),
                t.createElementBlock(
                  t.Fragment,
                  { key: 0 },
                  [
                    e.isSubplan && e.isNode
                      ? (t.openBlock(),
                        t.createElementBlock(
                          t.Fragment,
                          { key: 1 },
                          [
                            e.isLastChild
                              ? (t.openBlock(),
                                t.createElementBlock(
                                  t.Fragment,
                                  { key: 1 },
                                  [t.createTextVNode(t.toDisplayString(t.unref(r)) + ' ', 1)],
                                  64,
                                ))
                              : (t.openBlock(),
                                t.createElementBlock(
                                  t.Fragment,
                                  { key: 0 },
                                  [t.createTextVNode(t.toDisplayString(t.unref(r)) + '│', 1)],
                                  64,
                                )),
                          ],
                          64,
                        ))
                      : (t.openBlock(),
                        t.createElementBlock(
                          t.Fragment,
                          { key: 0 },
                          [
                            t.createTextVNode(
                              t.toDisplayString(t.unref(r)) + t.toDisplayString(e.isLastChild ? '└' : '├'),
                              1,
                            ),
                          ],
                          64,
                        )),
                  ],
                  64,
                ))
              : t.createCommentVNode('', !0),
          ])
        );
      },
    }),
    BN = t.createElementVNode('br', null, null, -1),
    PN = { class: 'table-borderless' },
    UN = { class: 'text-nowrap p-0' },
    $N = { class: 'p-0 ps-1' },
    HN = { class: 'table-borderless' },
    FN = t.createElementVNode('td', { class: 'p-0' }, 'Memory:', -1),
    WN = { class: 'p-0 ps-1' },
    zN = t.createElementVNode('br', null, null, -1),
    XN = t.defineComponent({
      __name: 'SortGroup',
      props: { sortGroup: null },
      setup(e) {
        return (n, r) => (
          t.openBlock(),
          t.createElementBlock('div', null, [
            t.createTextVNode(
              `
    Count: ` +
                t.toDisplayString(e.sortGroup['Group Count']) +
                ' ',
              1,
            ),
            BN,
            t.createTextVNode(),
            t.createElementVNode('table', PN, [
              t.createElementVNode('tr', null, [
                t.createElementVNode('td', UN, [
                  t.createTextVNode(`
          Sort Method`),
                  e.sortGroup['Sort Methods Used'].length > 1
                    ? (t.openBlock(), t.createElementBlock(t.Fragment, { key: 0 }, [t.createTextVNode('s')], 64))
                    : t.createCommentVNode('', !0),
                  t.createTextVNode(`:
        `),
                ]),
                t.createTextVNode(),
                t.createElementVNode('td', $N, t.toDisplayString(t.unref(ar)(e.sortGroup['Sort Methods Used'])), 1),
              ]),
            ]),
            t.createTextVNode(),
            t.createElementVNode('table', HN, [
              t.createElementVNode('tr', null, [
                FN,
                t.createTextVNode(),
                t.createElementVNode('td', WN, [
                  t.createTextVNode(
                    `
          Average:
          ` +
                      t.toDisplayString(t.unref(yc)(e.sortGroup['Sort Space Memory']['Average Sort Space Used'])) +
                      ' ',
                    1,
                  ),
                  zN,
                  t.createTextVNode(
                    `
          Peak:
          ` + t.toDisplayString(t.unref(yc)(e.sortGroup['Sort Space Memory']['Peak Sort Space Used'])),
                    1,
                  ),
                ]),
              ]),
            ]),
          ])
        );
      },
    });
  var pc = { exports: {} };
  function hc(e) {
    return (
      e instanceof Map
        ? (e.clear =
            e.delete =
            e.set =
              function () {
                throw new Error('map is read-only');
              })
        : e instanceof Set &&
          (e.add =
            e.clear =
            e.delete =
              function () {
                throw new Error('set is read-only');
              }),
      Object.freeze(e),
      Object.getOwnPropertyNames(e).forEach(function (n) {
        var r = e[n];
        typeof r == 'object' && !Object.isFrozen(r) && hc(r);
      }),
      e
    );
  }
  (pc.exports = hc), (pc.exports.default = hc);
  class Vp {
    constructor(n) {
      n.data === void 0 && (n.data = {}), (this.data = n.data), (this.isMatchIgnored = !1);
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function Mp(e) {
    return e
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  }
  function Ir(e, ...n) {
    const r = Object.create(null);
    for (const o in e) r[o] = e[o];
    return (
      n.forEach(function (o) {
        for (const s in o) r[s] = o[s];
      }),
      r
    );
  }
  const GN = '</span>',
    Bp = e => !!e.scope || (e.sublanguage && e.language),
    YN = (e, { prefix: n }) => {
      if (e.includes('.')) {
        const r = e.split('.');
        return [`${n}${r.shift()}`, ...r.map((o, s) => `${o}${'_'.repeat(s + 1)}`)].join(' ');
      }
      return `${n}${e}`;
    };
  class KN {
    constructor(n, r) {
      (this.buffer = ''), (this.classPrefix = r.classPrefix), n.walk(this);
    }
    addText(n) {
      this.buffer += Mp(n);
    }
    openNode(n) {
      if (!Bp(n)) return;
      let r = '';
      n.sublanguage ? (r = `language-${n.language}`) : (r = YN(n.scope, { prefix: this.classPrefix })), this.span(r);
    }
    closeNode(n) {
      Bp(n) && (this.buffer += GN);
    }
    value() {
      return this.buffer;
    }
    span(n) {
      this.buffer += `<span class="${n}">`;
    }
  }
  const Pp = (e = {}) => {
    const n = { children: [] };
    return Object.assign(n, e), n;
  };
  class mc {
    constructor() {
      (this.rootNode = Pp()), (this.stack = [this.rootNode]);
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(n) {
      this.top.children.push(n);
    }
    openNode(n) {
      const r = Pp({ scope: n });
      this.add(r), this.stack.push(r);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); );
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(n) {
      return this.constructor._walk(n, this.rootNode);
    }
    static _walk(n, r) {
      return (
        typeof r == 'string'
          ? n.addText(r)
          : r.children && (n.openNode(r), r.children.forEach(o => this._walk(n, o)), n.closeNode(r)),
        n
      );
    }
    static _collapse(n) {
      typeof n != 'string' &&
        n.children &&
        (n.children.every(r => typeof r == 'string')
          ? (n.children = [n.children.join('')])
          : n.children.forEach(r => {
              mc._collapse(r);
            }));
    }
  }
  class jN extends mc {
    constructor(n) {
      super(), (this.options = n);
    }
    addKeyword(n, r) {
      n !== '' && (this.openNode(r), this.addText(n), this.closeNode());
    }
    addText(n) {
      n !== '' && this.add(n);
    }
    addSublanguage(n, r) {
      const o = n.root;
      (o.sublanguage = !0), (o.language = r), this.add(o);
    }
    toHTML() {
      return new KN(this, this.options).value();
    }
    finalize() {
      return !0;
    }
  }
  function Lo(e) {
    return e ? (typeof e == 'string' ? e : e.source) : null;
  }
  function Up(e) {
    return Qr('(?=', e, ')');
  }
  function qN(e) {
    return Qr('(?:', e, ')*');
  }
  function JN(e) {
    return Qr('(?:', e, ')?');
  }
  function Qr(...e) {
    return e.map(r => Lo(r)).join('');
  }
  function QN(e) {
    const n = e[e.length - 1];
    return typeof n == 'object' && n.constructor === Object ? (e.splice(e.length - 1, 1), n) : {};
  }
  function Ec(...e) {
    return '(' + (QN(e).capture ? '' : '?:') + e.map(o => Lo(o)).join('|') + ')';
  }
  function $p(e) {
    return new RegExp(e.toString() + '|').exec('').length - 1;
  }
  function ZN(e, n) {
    const r = e && e.exec(n);
    return r && r.index === 0;
  }
  const eA = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function _c(e, { joinWith: n }) {
    let r = 0;
    return e
      .map(o => {
        r += 1;
        const s = r;
        let l = Lo(o),
          c = '';
        for (; l.length > 0; ) {
          const f = eA.exec(l);
          if (!f) {
            c += l;
            break;
          }
          (c += l.substring(0, f.index)),
            (l = l.substring(f.index + f[0].length)),
            f[0][0] === '\\' && f[1] ? (c += '\\' + String(Number(f[1]) + s)) : ((c += f[0]), f[0] === '(' && r++);
        }
        return c;
      })
      .map(o => `(${o})`)
      .join(n);
  }
  const tA = /\b\B/,
    Hp = '[a-zA-Z]\\w*',
    gc = '[a-zA-Z_]\\w*',
    Fp = '\\b\\d+(\\.\\d+)?',
    Wp = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
    zp = '\\b(0b[01]+)',
    nA =
      '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
    rA = (e = {}) => {
      const n = /^#![ ]*\//;
      return (
        e.binary && (e.begin = Qr(n, /.*\b/, e.binary, /\b.*/)),
        Ir(
          {
            scope: 'meta',
            begin: n,
            end: /$/,
            relevance: 0,
            'on:begin': (r, o) => {
              r.index !== 0 && o.ignoreMatch();
            },
          },
          e,
        )
      );
    },
    wo = { begin: '\\\\[\\s\\S]', relevance: 0 },
    iA = { scope: 'string', begin: "'", end: "'", illegal: '\\n', contains: [wo] },
    oA = { scope: 'string', begin: '"', end: '"', illegal: '\\n', contains: [wo] },
    aA = {
      begin:
        /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    },
    za = function (e, n, r = {}) {
      const o = Ir({ scope: 'comment', begin: e, end: n, contains: [] }, r);
      o.contains.push({
        scope: 'doctag',
        begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: !0,
        relevance: 0,
      });
      const s = Ec(
        'I',
        'a',
        'is',
        'so',
        'us',
        'to',
        'at',
        'if',
        'in',
        'it',
        'on',
        /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
        /[A-Za-z]+[-][a-z]+/,
        /[A-Za-z][a-z]{2,}/,
      );
      return o.contains.push({ begin: Qr(/[ ]+/, '(', s, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), o;
    },
    sA = za('//', '$'),
    lA = za('/\\*', '\\*/'),
    cA = za('#', '$'),
    fA = { scope: 'number', begin: Fp, relevance: 0 },
    uA = { scope: 'number', begin: Wp, relevance: 0 },
    dA = { scope: 'number', begin: zp, relevance: 0 },
    pA = {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [
        {
          scope: 'regexp',
          begin: /\//,
          end: /\/[gimuy]*/,
          illegal: /\n/,
          contains: [wo, { begin: /\[/, end: /\]/, relevance: 0, contains: [wo] }],
        },
      ],
    },
    hA = { scope: 'title', begin: Hp, relevance: 0 },
    mA = { scope: 'title', begin: gc, relevance: 0 },
    EA = { begin: '\\.\\s*' + gc, relevance: 0 };
  var Xa = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: tA,
    IDENT_RE: Hp,
    UNDERSCORE_IDENT_RE: gc,
    NUMBER_RE: Fp,
    C_NUMBER_RE: Wp,
    BINARY_NUMBER_RE: zp,
    RE_STARTERS_RE: nA,
    SHEBANG: rA,
    BACKSLASH_ESCAPE: wo,
    APOS_STRING_MODE: iA,
    QUOTE_STRING_MODE: oA,
    PHRASAL_WORDS_MODE: aA,
    COMMENT: za,
    C_LINE_COMMENT_MODE: sA,
    C_BLOCK_COMMENT_MODE: lA,
    HASH_COMMENT_MODE: cA,
    NUMBER_MODE: fA,
    C_NUMBER_MODE: uA,
    BINARY_NUMBER_MODE: dA,
    REGEXP_MODE: pA,
    TITLE_MODE: hA,
    UNDERSCORE_TITLE_MODE: mA,
    METHOD_GUARD: EA,
    END_SAME_AS_BEGIN: function (e) {
      return Object.assign(e, {
        'on:begin': (n, r) => {
          r.data._beginMatch = n[1];
        },
        'on:end': (n, r) => {
          r.data._beginMatch !== n[1] && r.ignoreMatch();
        },
      });
    },
  });
  function _A(e, n) {
    e.input[e.index - 1] === '.' && n.ignoreMatch();
  }
  function gA(e, n) {
    e.className !== void 0 && ((e.scope = e.className), delete e.className);
  }
  function TA(e, n) {
    n &&
      e.beginKeywords &&
      ((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'),
      (e.__beforeBegin = _A),
      (e.keywords = e.keywords || e.beginKeywords),
      delete e.beginKeywords,
      e.relevance === void 0 && (e.relevance = 0));
  }
  function NA(e, n) {
    Array.isArray(e.illegal) && (e.illegal = Ec(...e.illegal));
  }
  function AA(e, n) {
    if (e.match) {
      if (e.begin || e.end) throw new Error('begin & end are not supported with match');
      (e.begin = e.match), delete e.match;
    }
  }
  function yA(e, n) {
    e.relevance === void 0 && (e.relevance = 1);
  }
  const SA = (e, n) => {
      if (!e.beforeMatch) return;
      if (e.starts) throw new Error('beforeMatch cannot be used with starts');
      const r = Object.assign({}, e);
      Object.keys(e).forEach(o => {
        delete e[o];
      }),
        (e.keywords = r.keywords),
        (e.begin = Qr(r.beforeMatch, Up(r.begin))),
        (e.starts = { relevance: 0, contains: [Object.assign(r, { endsParent: !0 })] }),
        (e.relevance = 0),
        delete r.beforeMatch;
    },
    bA = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'],
    xA = 'keyword';
  function Xp(e, n, r = xA) {
    const o = Object.create(null);
    return (
      typeof e == 'string'
        ? s(r, e.split(' '))
        : Array.isArray(e)
          ? s(r, e)
          : Object.keys(e).forEach(function (l) {
              Object.assign(o, Xp(e[l], n, l));
            }),
      o
    );
    function s(l, c) {
      n && (c = c.map(f => f.toLowerCase())),
        c.forEach(function (f) {
          const d = f.split('|');
          o[d[0]] = [l, OA(d[0], d[1])];
        });
    }
  }
  function OA(e, n) {
    return n ? Number(n) : RA(e) ? 0 : 1;
  }
  function RA(e) {
    return bA.includes(e.toLowerCase());
  }
  const Gp = {},
    Zr = e => {
      console.error(e);
    },
    Yp = (e, ...n) => {
      console.log(`WARN: ${e}`, ...n);
    },
    vi = (e, n) => {
      Gp[`${e}/${n}`] || (console.log(`Deprecated as of ${e}. ${n}`), (Gp[`${e}/${n}`] = !0));
    },
    Ga = new Error();
  function Kp(e, n, { key: r }) {
    let o = 0;
    const s = e[r],
      l = {},
      c = {};
    for (let f = 1; f <= n.length; f++) (c[f + o] = s[f]), (l[f + o] = !0), (o += $p(n[f - 1]));
    (e[r] = c), (e[r]._emit = l), (e[r]._multi = !0);
  }
  function CA(e) {
    if (Array.isArray(e.begin)) {
      if (e.skip || e.excludeBegin || e.returnBegin)
        throw (Zr('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), Ga);
      if (typeof e.beginScope != 'object' || e.beginScope === null) throw (Zr('beginScope must be object'), Ga);
      Kp(e, e.begin, { key: 'beginScope' }), (e.begin = _c(e.begin, { joinWith: '' }));
    }
  }
  function IA(e) {
    if (Array.isArray(e.end)) {
      if (e.skip || e.excludeEnd || e.returnEnd)
        throw (Zr('skip, excludeEnd, returnEnd not compatible with endScope: {}'), Ga);
      if (typeof e.endScope != 'object' || e.endScope === null) throw (Zr('endScope must be object'), Ga);
      Kp(e, e.end, { key: 'endScope' }), (e.end = _c(e.end, { joinWith: '' }));
    }
  }
  function LA(e) {
    e.scope && typeof e.scope == 'object' && e.scope !== null && ((e.beginScope = e.scope), delete e.scope);
  }
  function wA(e) {
    LA(e),
      typeof e.beginScope == 'string' && (e.beginScope = { _wrap: e.beginScope }),
      typeof e.endScope == 'string' && (e.endScope = { _wrap: e.endScope }),
      CA(e),
      IA(e);
  }
  function vA(e) {
    function n(c, f) {
      return new RegExp(Lo(c), 'm' + (e.case_insensitive ? 'i' : '') + (e.unicodeRegex ? 'u' : '') + (f ? 'g' : ''));
    }
    class r {
      constructor() {
        (this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
      }
      addRule(f, d) {
        (d.position = this.position++),
          (this.matchIndexes[this.matchAt] = d),
          this.regexes.push([d, f]),
          (this.matchAt += $p(f) + 1);
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const f = this.regexes.map(d => d[1]);
        (this.matcherRe = n(_c(f, { joinWith: '|' }), !0)), (this.lastIndex = 0);
      }
      exec(f) {
        this.matcherRe.lastIndex = this.lastIndex;
        const d = this.matcherRe.exec(f);
        if (!d) return null;
        const m = d.findIndex((T, N) => N > 0 && T !== void 0),
          p = this.matchIndexes[m];
        return d.splice(0, m), Object.assign(d, p);
      }
    }
    class o {
      constructor() {
        (this.rules = []), (this.multiRegexes = []), (this.count = 0), (this.lastIndex = 0), (this.regexIndex = 0);
      }
      getMatcher(f) {
        if (this.multiRegexes[f]) return this.multiRegexes[f];
        const d = new r();
        return this.rules.slice(f).forEach(([m, p]) => d.addRule(m, p)), d.compile(), (this.multiRegexes[f] = d), d;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(f, d) {
        this.rules.push([f, d]), d.type === 'begin' && this.count++;
      }
      exec(f) {
        const d = this.getMatcher(this.regexIndex);
        d.lastIndex = this.lastIndex;
        let m = d.exec(f);
        if (this.resumingScanAtSamePosition() && !(m && m.index === this.lastIndex)) {
          const p = this.getMatcher(0);
          (p.lastIndex = this.lastIndex + 1), (m = p.exec(f));
        }
        return m && ((this.regexIndex += m.position + 1), this.regexIndex === this.count && this.considerAll()), m;
      }
    }
    function s(c) {
      const f = new o();
      return (
        c.contains.forEach(d => f.addRule(d.begin, { rule: d, type: 'begin' })),
        c.terminatorEnd && f.addRule(c.terminatorEnd, { type: 'end' }),
        c.illegal && f.addRule(c.illegal, { type: 'illegal' }),
        f
      );
    }
    function l(c, f) {
      const d = c;
      if (c.isCompiled) return d;
      [gA, AA, wA, SA].forEach(p => p(c, f)),
        e.compilerExtensions.forEach(p => p(c, f)),
        (c.__beforeBegin = null),
        [TA, NA, yA].forEach(p => p(c, f)),
        (c.isCompiled = !0);
      let m = null;
      return (
        typeof c.keywords == 'object' &&
          c.keywords.$pattern &&
          ((c.keywords = Object.assign({}, c.keywords)), (m = c.keywords.$pattern), delete c.keywords.$pattern),
        (m = m || /\w+/),
        c.keywords && (c.keywords = Xp(c.keywords, e.case_insensitive)),
        (d.keywordPatternRe = n(m, !0)),
        f &&
          (c.begin || (c.begin = /\B|\b/),
          (d.beginRe = n(d.begin)),
          !c.end && !c.endsWithParent && (c.end = /\B|\b/),
          c.end && (d.endRe = n(d.end)),
          (d.terminatorEnd = Lo(d.end) || ''),
          c.endsWithParent && f.terminatorEnd && (d.terminatorEnd += (c.end ? '|' : '') + f.terminatorEnd)),
        c.illegal && (d.illegalRe = n(c.illegal)),
        c.contains || (c.contains = []),
        (c.contains = [].concat(
          ...c.contains.map(function (p) {
            return kA(p === 'self' ? c : p);
          }),
        )),
        c.contains.forEach(function (p) {
          l(p, d);
        }),
        c.starts && l(c.starts, f),
        (d.matcher = s(d)),
        d
      );
    }
    if ((e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes('self')))
      throw new Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.');
    return (e.classNameAliases = Ir(e.classNameAliases || {})), l(e);
  }
  function jp(e) {
    return e ? e.endsWithParent || jp(e.starts) : !1;
  }
  function kA(e) {
    return (
      e.variants &&
        !e.cachedVariants &&
        (e.cachedVariants = e.variants.map(function (n) {
          return Ir(e, { variants: null }, n);
        })),
      e.cachedVariants
        ? e.cachedVariants
        : jp(e)
          ? Ir(e, { starts: e.starts ? Ir(e.starts) : null })
          : Object.isFrozen(e)
            ? Ir(e)
            : e
    );
  }
  var DA = '11.7.0';
  class VA extends Error {
    constructor(n, r) {
      super(n), (this.name = 'HTMLInjectionError'), (this.html = r);
    }
  }
  const Tc = Mp,
    qp = Ir,
    Jp = Symbol('nomatch'),
    MA = 7;
  var vo = (function (e) {
      const n = Object.create(null),
        r = Object.create(null),
        o = [];
      let s = !0;
      const l = "Could not find the language '{}', did you forget to load/include a language module?",
        c = { disableAutodetect: !0, name: 'Plain text', contains: [] };
      let f = {
        ignoreUnescapedHTML: !1,
        throwUnescapedHTML: !1,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: 'hljs-',
        cssSelector: 'pre code',
        languages: null,
        __emitter: jN,
      };
      function d(I) {
        return f.noHighlightRe.test(I);
      }
      function m(I) {
        let z = I.className + ' ';
        z += I.parentNode ? I.parentNode.className : '';
        const Q = f.languageDetectRe.exec(z);
        if (Q) {
          const oe = y(Q[1]);
          return (
            oe || (Yp(l.replace('{}', Q[1])), Yp('Falling back to no-highlight mode for this block.', I)),
            oe ? Q[1] : 'no-highlight'
          );
        }
        return z.split(/\s+/).find(oe => d(oe) || y(oe));
      }
      function p(I, z, Q) {
        let oe = '',
          fe = '';
        typeof z == 'object'
          ? ((oe = I), (Q = z.ignoreIllegals), (fe = z.language))
          : (vi('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'),
            vi(
              '10.7.0',
              `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`,
            ),
            (fe = I),
            (oe = z)),
          Q === void 0 && (Q = !0);
        const ne = { code: oe, language: fe };
        U('before:highlight', ne);
        const te = ne.result ? ne.result : T(ne.language, ne.code, Q);
        return (te.code = ne.code), U('after:highlight', te), te;
      }
      function T(I, z, Q, oe) {
        const fe = Object.create(null);
        function ne(he, Ne) {
          return he.keywords[Ne];
        }
        function te() {
          if (!G.keywords) {
            ve.addText(Se);
            return;
          }
          let he = 0;
          G.keywordPatternRe.lastIndex = 0;
          let Ne = G.keywordPatternRe.exec(Se),
            Le = '';
          for (; Ne; ) {
            Le += Se.substring(he, Ne.index);
            const Pe = We.case_insensitive ? Ne[0].toLowerCase() : Ne[0],
              ut = ne(G, Pe);
            if (ut) {
              const [Rt, ur] = ut;
              if (
                (ve.addText(Le),
                (Le = ''),
                (fe[Pe] = (fe[Pe] || 0) + 1),
                fe[Pe] <= MA && ($e += ur),
                Rt.startsWith('_'))
              )
                Le += Ne[0];
              else {
                const dr = We.classNameAliases[Rt] || Rt;
                ve.addKeyword(Ne[0], dr);
              }
            } else Le += Ne[0];
            (he = G.keywordPatternRe.lastIndex), (Ne = G.keywordPatternRe.exec(Se));
          }
          (Le += Se.substring(he)), ve.addText(Le);
        }
        function de() {
          if (Se === '') return;
          let he = null;
          if (typeof G.subLanguage == 'string') {
            if (!n[G.subLanguage]) {
              ve.addText(Se);
              return;
            }
            (he = T(G.subLanguage, Se, !0, _e[G.subLanguage])), (_e[G.subLanguage] = he._top);
          } else he = b(Se, G.subLanguage.length ? G.subLanguage : null);
          G.relevance > 0 && ($e += he.relevance), ve.addSublanguage(he._emitter, he.language);
        }
        function j() {
          G.subLanguage != null ? de() : te(), (Se = '');
        }
        function X(he, Ne) {
          let Le = 1;
          const Pe = Ne.length - 1;
          for (; Le <= Pe; ) {
            if (!he._emit[Le]) {
              Le++;
              continue;
            }
            const ut = We.classNameAliases[he[Le]] || he[Le],
              Rt = Ne[Le];
            ut ? ve.addKeyword(Rt, ut) : ((Se = Rt), te(), (Se = '')), Le++;
          }
        }
        function Z(he, Ne) {
          return (
            he.scope && typeof he.scope == 'string' && ve.openNode(We.classNameAliases[he.scope] || he.scope),
            he.beginScope &&
              (he.beginScope._wrap
                ? (ve.addKeyword(Se, We.classNameAliases[he.beginScope._wrap] || he.beginScope._wrap), (Se = ''))
                : he.beginScope._multi && (X(he.beginScope, Ne), (Se = ''))),
            (G = Object.create(he, { parent: { value: G } })),
            G
          );
        }
        function pe(he, Ne, Le) {
          let Pe = ZN(he.endRe, Le);
          if (Pe) {
            if (he['on:end']) {
              const ut = new Vp(he);
              he['on:end'](Ne, ut), ut.isMatchIgnored && (Pe = !1);
            }
            if (Pe) {
              for (; he.endsParent && he.parent; ) he = he.parent;
              return he;
            }
          }
          if (he.endsWithParent) return pe(he.parent, Ne, Le);
        }
        function le(he) {
          return G.matcher.regexIndex === 0 ? ((Se += he[0]), 1) : ((Ot = !0), 0);
        }
        function me(he) {
          const Ne = he[0],
            Le = he.rule,
            Pe = new Vp(Le),
            ut = [Le.__beforeBegin, Le['on:begin']];
          for (const Rt of ut) if (Rt && (Rt(he, Pe), Pe.isMatchIgnored)) return le(Ne);
          return (
            Le.skip
              ? (Se += Ne)
              : (Le.excludeBegin && (Se += Ne), j(), !Le.returnBegin && !Le.excludeBegin && (Se = Ne)),
            Z(Le, he),
            Le.returnBegin ? 0 : Ne.length
          );
        }
        function ye(he) {
          const Ne = he[0],
            Le = z.substring(he.index),
            Pe = pe(G, he, Le);
          if (!Pe) return Jp;
          const ut = G;
          G.endScope && G.endScope._wrap
            ? (j(), ve.addKeyword(Ne, G.endScope._wrap))
            : G.endScope && G.endScope._multi
              ? (j(), X(G.endScope, he))
              : ut.skip
                ? (Se += Ne)
                : (ut.returnEnd || ut.excludeEnd || (Se += Ne), j(), ut.excludeEnd && (Se = Ne));
          do G.scope && ve.closeNode(), !G.skip && !G.subLanguage && ($e += G.relevance), (G = G.parent);
          while (G !== Pe.parent);
          return Pe.starts && Z(Pe.starts, he), ut.returnEnd ? 0 : Ne.length;
        }
        function xe() {
          const he = [];
          for (let Ne = G; Ne !== We; Ne = Ne.parent) Ne.scope && he.unshift(Ne.scope);
          he.forEach(Ne => ve.openNode(Ne));
        }
        let Be = {};
        function Fe(he, Ne) {
          const Le = Ne && Ne[0];
          if (((Se += he), Le == null)) return j(), 0;
          if (Be.type === 'begin' && Ne.type === 'end' && Be.index === Ne.index && Le === '') {
            if (((Se += z.slice(Ne.index, Ne.index + 1)), !s)) {
              const Pe = new Error(`0 width match regex (${I})`);
              throw ((Pe.languageName = I), (Pe.badRule = Be.rule), Pe);
            }
            return 1;
          }
          if (((Be = Ne), Ne.type === 'begin')) return me(Ne);
          if (Ne.type === 'illegal' && !Q) {
            const Pe = new Error('Illegal lexeme "' + Le + '" for mode "' + (G.scope || '<unnamed>') + '"');
            throw ((Pe.mode = G), Pe);
          } else if (Ne.type === 'end') {
            const Pe = ye(Ne);
            if (Pe !== Jp) return Pe;
          }
          if (Ne.type === 'illegal' && Le === '') return 1;
          if (ft > 1e5 && ft > Ne.index * 3)
            throw new Error('potential infinite loop, way more iterations than matches');
          return (Se += Le), Le.length;
        }
        const We = y(I);
        if (!We) throw (Zr(l.replace('{}', I)), new Error('Unknown language: "' + I + '"'));
        const Tt = vA(We);
        let Nt = '',
          G = oe || Tt;
        const _e = {},
          ve = new f.__emitter(f);
        xe();
        let Se = '',
          $e = 0,
          et = 0,
          ft = 0,
          Ot = !1;
        try {
          for (G.matcher.considerAll(); ; ) {
            ft++, Ot ? (Ot = !1) : G.matcher.considerAll(), (G.matcher.lastIndex = et);
            const he = G.matcher.exec(z);
            if (!he) break;
            const Ne = z.substring(et, he.index),
              Le = Fe(Ne, he);
            et = he.index + Le;
          }
          return (
            Fe(z.substring(et)),
            ve.closeAllNodes(),
            ve.finalize(),
            (Nt = ve.toHTML()),
            { language: I, value: Nt, relevance: $e, illegal: !1, _emitter: ve, _top: G }
          );
        } catch (he) {
          if (he.message && he.message.includes('Illegal'))
            return {
              language: I,
              value: Tc(z),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: he.message,
                index: et,
                context: z.slice(et - 100, et + 100),
                mode: he.mode,
                resultSoFar: Nt,
              },
              _emitter: ve,
            };
          if (s)
            return { language: I, value: Tc(z), illegal: !1, relevance: 0, errorRaised: he, _emitter: ve, _top: G };
          throw he;
        }
      }
      function N(I) {
        const z = { value: Tc(I), illegal: !1, relevance: 0, _top: c, _emitter: new f.__emitter(f) };
        return z._emitter.addText(I), z;
      }
      function b(I, z) {
        z = z || f.languages || Object.keys(n);
        const Q = N(I),
          oe = z
            .filter(y)
            .filter(M)
            .map(j => T(j, I, !1));
        oe.unshift(Q);
        const fe = oe.sort((j, X) => {
            if (j.relevance !== X.relevance) return X.relevance - j.relevance;
            if (j.language && X.language) {
              if (y(j.language).supersetOf === X.language) return 1;
              if (y(X.language).supersetOf === j.language) return -1;
            }
            return 0;
          }),
          [ne, te] = fe,
          de = ne;
        return (de.secondBest = te), de;
      }
      function R(I, z, Q) {
        const oe = (z && r[z]) || Q;
        I.classList.add('hljs'), I.classList.add(`language-${oe}`);
      }
      function C(I) {
        let z = null;
        const Q = m(I);
        if (d(Q)) return;
        if (
          (U('before:highlightElement', { el: I, language: Q }),
          I.children.length > 0 &&
            (f.ignoreUnescapedHTML ||
              (console.warn(
                'One of your code blocks includes unescaped HTML. This is a potentially serious security risk.',
              ),
              console.warn('https://github.com/highlightjs/highlight.js/wiki/security'),
              console.warn('The element with unescaped HTML:'),
              console.warn(I)),
            f.throwUnescapedHTML))
        )
          throw new VA('One of your code blocks includes unescaped HTML.', I.innerHTML);
        z = I;
        const oe = z.textContent,
          fe = Q ? p(oe, { language: Q, ignoreIllegals: !0 }) : b(oe);
        (I.innerHTML = fe.value),
          R(I, Q, fe.language),
          (I.result = { language: fe.language, re: fe.relevance, relevance: fe.relevance }),
          fe.secondBest && (I.secondBest = { language: fe.secondBest.language, relevance: fe.secondBest.relevance }),
          U('after:highlightElement', { el: I, result: fe, text: oe });
      }
      function B(I) {
        f = qp(f, I);
      }
      const S = () => {
        _(), vi('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
      };
      function V() {
        _(), vi('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
      }
      let Y = !1;
      function _() {
        if (document.readyState === 'loading') {
          Y = !0;
          return;
        }
        document.querySelectorAll(f.cssSelector).forEach(C);
      }
      function k() {
        Y && _();
      }
      typeof window < 'u' && window.addEventListener && window.addEventListener('DOMContentLoaded', k, !1);
      function O(I, z) {
        let Q = null;
        try {
          Q = z(e);
        } catch (oe) {
          if ((Zr("Language definition for '{}' could not be registered.".replace('{}', I)), s)) Zr(oe);
          else throw oe;
          Q = c;
        }
        Q.name || (Q.name = I),
          (n[I] = Q),
          (Q.rawDefinition = z.bind(null, e)),
          Q.aliases && K(Q.aliases, { languageName: I });
      }
      function D(I) {
        delete n[I];
        for (const z of Object.keys(r)) r[z] === I && delete r[z];
      }
      function L() {
        return Object.keys(n);
      }
      function y(I) {
        return (I = (I || '').toLowerCase()), n[I] || n[r[I]];
      }
      function K(I, { languageName: z }) {
        typeof I == 'string' && (I = [I]),
          I.forEach(Q => {
            r[Q.toLowerCase()] = z;
          });
      }
      function M(I) {
        const z = y(I);
        return z && !z.disableAutodetect;
      }
      function H(I) {
        I['before:highlightBlock'] &&
          !I['before:highlightElement'] &&
          (I['before:highlightElement'] = z => {
            I['before:highlightBlock'](Object.assign({ block: z.el }, z));
          }),
          I['after:highlightBlock'] &&
            !I['after:highlightElement'] &&
            (I['after:highlightElement'] = z => {
              I['after:highlightBlock'](Object.assign({ block: z.el }, z));
            });
      }
      function q(I) {
        H(I), o.push(I);
      }
      function U(I, z) {
        const Q = I;
        o.forEach(function (oe) {
          oe[Q] && oe[Q](z);
        });
      }
      function ee(I) {
        return (
          vi('10.7.0', 'highlightBlock will be removed entirely in v12.0'),
          vi('10.7.0', 'Please use highlightElement now.'),
          C(I)
        );
      }
      Object.assign(e, {
        highlight: p,
        highlightAuto: b,
        highlightAll: _,
        highlightElement: C,
        highlightBlock: ee,
        configure: B,
        initHighlighting: S,
        initHighlightingOnLoad: V,
        registerLanguage: O,
        unregisterLanguage: D,
        listLanguages: L,
        getLanguage: y,
        registerAliases: K,
        autoDetection: M,
        inherit: qp,
        addPlugin: q,
      }),
        (e.debugMode = function () {
          s = !1;
        }),
        (e.safeMode = function () {
          s = !0;
        }),
        (e.versionString = DA),
        (e.regex = { concat: Qr, lookahead: Up, either: Ec, optional: JN, anyNumberOfTimes: qN });
      for (const I in Xa) typeof Xa[I] == 'object' && pc.exports(Xa[I]);
      return Object.assign(e, Xa), e;
    })({}),
    BA = vo;
  (vo.HighlightJS = vo), (vo.default = vo);
  const Ya = ua(BA);
  function PA(e) {
    const n = e.COMMENT('--', '$'),
      r = '[a-zA-Z_][a-zA-Z_0-9$]*',
      o = '\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$',
      s = '<<\\s*' + r + '\\s*>>',
      l =
        'ABORT ALTER ANALYZE BEGIN CALL CHECKPOINT|10 CLOSE CLUSTER COMMENT COMMIT COPY CREATE DEALLOCATE DECLARE DELETE DISCARD DO DROP END EXECUTE EXPLAIN FETCH GRANT IMPORT INSERT LISTEN LOAD LOCK MOVE NOTIFY PREPARE REASSIGN|10 REFRESH REINDEX RELEASE RESET REVOKE ROLLBACK SAVEPOINT SECURITY SELECT SET SHOW START TRUNCATE UNLISTEN|10 UPDATE VACUUM|10 VALUES AGGREGATE COLLATION CONVERSION|10 DATABASE DEFAULT PRIVILEGES DOMAIN TRIGGER EXTENSION FOREIGN WRAPPER|10 TABLE FUNCTION GROUP LANGUAGE LARGE OBJECT MATERIALIZED VIEW OPERATOR CLASS FAMILY POLICY PUBLICATION|10 ROLE RULE SCHEMA SEQUENCE SERVER STATISTICS SUBSCRIPTION SYSTEM TABLESPACE CONFIGURATION DICTIONARY PARSER TEMPLATE TYPE USER MAPPING PREPARED ACCESS METHOD CAST AS TRANSFORM TRANSACTION OWNED TO INTO SESSION AUTHORIZATION INDEX PROCEDURE ASSERTION ALL ANALYSE AND ANY ARRAY ASC ASYMMETRIC|10 BOTH CASE CHECK COLLATE COLUMN CONCURRENTLY|10 CONSTRAINT CROSS DEFERRABLE RANGE DESC DISTINCT ELSE EXCEPT FOR FREEZE|10 FROM FULL HAVING ILIKE IN INITIALLY INNER INTERSECT IS ISNULL JOIN LATERAL LEADING LIKE LIMIT NATURAL NOT NOTNULL NULL OFFSET ON ONLY OR ORDER OUTER OVERLAPS PLACING PRIMARY REFERENCES RETURNING SIMILAR SOME SYMMETRIC TABLESAMPLE THEN TRAILING UNION UNIQUE USING VARIADIC|10 VERBOSE WHEN WHERE WINDOW WITH BY RETURNS INOUT OUT SETOF|10 IF STRICT CURRENT CONTINUE OWNER LOCATION OVER PARTITION WITHIN BETWEEN ESCAPE EXTERNAL INVOKER DEFINER WORK RENAME VERSION CONNECTION CONNECT TABLES TEMP TEMPORARY FUNCTIONS SEQUENCES TYPES SCHEMAS OPTION CASCADE RESTRICT ADD ADMIN EXISTS VALID VALIDATE ENABLE DISABLE REPLICA|10 ALWAYS PASSING COLUMNS PATH REF VALUE OVERRIDING IMMUTABLE STABLE VOLATILE BEFORE AFTER EACH ROW PROCEDURAL ROUTINE NO HANDLER VALIDATOR OPTIONS STORAGE OIDS|10 WITHOUT INHERIT DEPENDS CALLED INPUT LEAKPROOF|10 COST ROWS NOWAIT SEARCH UNTIL ENCRYPTED|10 PASSWORD CONFLICT|10 INSTEAD INHERITS CHARACTERISTICS WRITE CURSOR ALSO STATEMENT SHARE EXCLUSIVE INLINE ISOLATION REPEATABLE READ COMMITTED SERIALIZABLE UNCOMMITTED LOCAL GLOBAL SQL PROCEDURES RECURSIVE SNAPSHOT ROLLUP CUBE TRUSTED|10 INCLUDE FOLLOWING PRECEDING UNBOUNDED RANGE GROUPS UNENCRYPTED|10 SYSID FORMAT DELIMITER HEADER QUOTE ENCODING FILTER OFF FORCE_QUOTE FORCE_NOT_NULL FORCE_NULL COSTS BUFFERS TIMING SUMMARY DISABLE_PAGE_SKIPPING RESTART CYCLE GENERATED IDENTITY DEFERRED IMMEDIATE LEVEL LOGGED UNLOGGED OF NOTHING NONE EXCLUDE ATTRIBUTE USAGE ROUTINES TRUE FALSE NAN INFINITY ',
      c =
        'SUPERUSER NOSUPERUSER CREATEDB NOCREATEDB CREATEROLE NOCREATEROLE INHERIT NOINHERIT LOGIN NOLOGIN REPLICATION NOREPLICATION BYPASSRLS NOBYPASSRLS ',
      f =
        'ALIAS BEGIN CONSTANT DECLARE END EXCEPTION RETURN PERFORM|10 RAISE GET DIAGNOSTICS STACKED|10 FOREACH LOOP ELSIF EXIT WHILE REVERSE SLICE DEBUG LOG INFO NOTICE WARNING ASSERT OPEN ',
      d =
        'BIGINT INT8 BIGSERIAL SERIAL8 BIT VARYING VARBIT BOOLEAN BOOL BOX BYTEA CHARACTER CHAR VARCHAR CIDR CIRCLE DATE DOUBLE PRECISION FLOAT8 FLOAT INET INTEGER INT INT4 INTERVAL JSON JSONB LINE LSEG|10 MACADDR MACADDR8 MONEY NUMERIC DEC DECIMAL PATH POINT POLYGON REAL FLOAT4 SMALLINT INT2 SMALLSERIAL|10 SERIAL2|10 SERIAL|10 SERIAL4|10 TEXT TIME ZONE TIMETZ|10 TIMESTAMP TIMESTAMPTZ|10 TSQUERY|10 TSVECTOR|10 TXID_SNAPSHOT|10 UUID XML NATIONAL NCHAR INT4RANGE|10 INT8RANGE|10 NUMRANGE|10 TSRANGE|10 TSTZRANGE|10 DATERANGE|10 ANYELEMENT ANYARRAY ANYNONARRAY ANYENUM ANYRANGE CSTRING INTERNAL RECORD PG_DDL_COMMAND VOID UNKNOWN OPAQUE REFCURSOR NAME OID REGPROC|10 REGPROCEDURE|10 REGOPER|10 REGOPERATOR|10 REGCLASS|10 REGTYPE|10 REGROLE|10 REGNAMESPACE|10 REGCONFIG|10 REGDICTIONARY|10 ',
      m = d
        .trim()
        .split(' ')
        .map(function (C) {
          return C.split('|')[0];
        })
        .join('|'),
      p =
        'CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER CURRENT_CATALOG|10 CURRENT_DATE LOCALTIME LOCALTIMESTAMP CURRENT_ROLE|10 CURRENT_SCHEMA|10 SESSION_USER PUBLIC ',
      T =
        'FOUND NEW OLD TG_NAME|10 TG_WHEN|10 TG_LEVEL|10 TG_OP|10 TG_RELID|10 TG_RELNAME|10 TG_TABLE_NAME|10 TG_TABLE_SCHEMA|10 TG_NARGS|10 TG_ARGV|10 TG_EVENT|10 TG_TAG|10 ROW_COUNT RESULT_OID|10 PG_CONTEXT|10 RETURNED_SQLSTATE COLUMN_NAME CONSTRAINT_NAME PG_DATATYPE_NAME|10 MESSAGE_TEXT TABLE_NAME SCHEMA_NAME PG_EXCEPTION_DETAIL|10 PG_EXCEPTION_HINT|10 PG_EXCEPTION_CONTEXT|10 ',
      N =
        'SQLSTATE SQLERRM|10 SUCCESSFUL_COMPLETION WARNING DYNAMIC_RESULT_SETS_RETURNED IMPLICIT_ZERO_BIT_PADDING NULL_VALUE_ELIMINATED_IN_SET_FUNCTION PRIVILEGE_NOT_GRANTED PRIVILEGE_NOT_REVOKED STRING_DATA_RIGHT_TRUNCATION DEPRECATED_FEATURE NO_DATA NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED SQL_STATEMENT_NOT_YET_COMPLETE CONNECTION_EXCEPTION CONNECTION_DOES_NOT_EXIST CONNECTION_FAILURE SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION TRANSACTION_RESOLUTION_UNKNOWN PROTOCOL_VIOLATION TRIGGERED_ACTION_EXCEPTION FEATURE_NOT_SUPPORTED INVALID_TRANSACTION_INITIATION LOCATOR_EXCEPTION INVALID_LOCATOR_SPECIFICATION INVALID_GRANTOR INVALID_GRANT_OPERATION INVALID_ROLE_SPECIFICATION DIAGNOSTICS_EXCEPTION STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER CASE_NOT_FOUND CARDINALITY_VIOLATION DATA_EXCEPTION ARRAY_SUBSCRIPT_ERROR CHARACTER_NOT_IN_REPERTOIRE DATETIME_FIELD_OVERFLOW DIVISION_BY_ZERO ERROR_IN_ASSIGNMENT ESCAPE_CHARACTER_CONFLICT INDICATOR_OVERFLOW INTERVAL_FIELD_OVERFLOW INVALID_ARGUMENT_FOR_LOGARITHM INVALID_ARGUMENT_FOR_NTILE_FUNCTION INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION INVALID_ARGUMENT_FOR_POWER_FUNCTION INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION INVALID_CHARACTER_VALUE_FOR_CAST INVALID_DATETIME_FORMAT INVALID_ESCAPE_CHARACTER INVALID_ESCAPE_OCTET INVALID_ESCAPE_SEQUENCE NONSTANDARD_USE_OF_ESCAPE_CHARACTER INVALID_INDICATOR_PARAMETER_VALUE INVALID_PARAMETER_VALUE INVALID_REGULAR_EXPRESSION INVALID_ROW_COUNT_IN_LIMIT_CLAUSE INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE INVALID_TABLESAMPLE_ARGUMENT INVALID_TABLESAMPLE_REPEAT INVALID_TIME_ZONE_DISPLACEMENT_VALUE INVALID_USE_OF_ESCAPE_CHARACTER MOST_SPECIFIC_TYPE_MISMATCH NULL_VALUE_NOT_ALLOWED NULL_VALUE_NO_INDICATOR_PARAMETER NUMERIC_VALUE_OUT_OF_RANGE SEQUENCE_GENERATOR_LIMIT_EXCEEDED STRING_DATA_LENGTH_MISMATCH STRING_DATA_RIGHT_TRUNCATION SUBSTRING_ERROR TRIM_ERROR UNTERMINATED_C_STRING ZERO_LENGTH_CHARACTER_STRING FLOATING_POINT_EXCEPTION INVALID_TEXT_REPRESENTATION INVALID_BINARY_REPRESENTATION BAD_COPY_FILE_FORMAT UNTRANSLATABLE_CHARACTER NOT_AN_XML_DOCUMENT INVALID_XML_DOCUMENT INVALID_XML_CONTENT INVALID_XML_COMMENT INVALID_XML_PROCESSING_INSTRUCTION INTEGRITY_CONSTRAINT_VIOLATION RESTRICT_VIOLATION NOT_NULL_VIOLATION FOREIGN_KEY_VIOLATION UNIQUE_VIOLATION CHECK_VIOLATION EXCLUSION_VIOLATION INVALID_CURSOR_STATE INVALID_TRANSACTION_STATE ACTIVE_SQL_TRANSACTION BRANCH_TRANSACTION_ALREADY_ACTIVE HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION READ_ONLY_SQL_TRANSACTION SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED NO_ACTIVE_SQL_TRANSACTION IN_FAILED_SQL_TRANSACTION IDLE_IN_TRANSACTION_SESSION_TIMEOUT INVALID_SQL_STATEMENT_NAME TRIGGERED_DATA_CHANGE_VIOLATION INVALID_AUTHORIZATION_SPECIFICATION INVALID_PASSWORD DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST DEPENDENT_OBJECTS_STILL_EXIST INVALID_TRANSACTION_TERMINATION SQL_ROUTINE_EXCEPTION FUNCTION_EXECUTED_NO_RETURN_STATEMENT MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED INVALID_CURSOR_NAME EXTERNAL_ROUTINE_EXCEPTION CONTAINING_SQL_NOT_PERMITTED MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED EXTERNAL_ROUTINE_INVOCATION_EXCEPTION INVALID_SQLSTATE_RETURNED NULL_VALUE_NOT_ALLOWED TRIGGER_PROTOCOL_VIOLATED SRF_PROTOCOL_VIOLATED EVENT_TRIGGER_PROTOCOL_VIOLATED SAVEPOINT_EXCEPTION INVALID_SAVEPOINT_SPECIFICATION INVALID_CATALOG_NAME INVALID_SCHEMA_NAME TRANSACTION_ROLLBACK TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION SERIALIZATION_FAILURE STATEMENT_COMPLETION_UNKNOWN DEADLOCK_DETECTED SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION SYNTAX_ERROR INSUFFICIENT_PRIVILEGE CANNOT_COERCE GROUPING_ERROR WINDOWING_ERROR INVALID_RECURSION INVALID_FOREIGN_KEY INVALID_NAME NAME_TOO_LONG RESERVED_NAME DATATYPE_MISMATCH INDETERMINATE_DATATYPE COLLATION_MISMATCH INDETERMINATE_COLLATION WRONG_OBJECT_TYPE GENERATED_ALWAYS UNDEFINED_COLUMN UNDEFINED_FUNCTION UNDEFINED_TABLE UNDEFINED_PARAMETER UNDEFINED_OBJECT DUPLICATE_COLUMN DUPLICATE_CURSOR DUPLICATE_DATABASE DUPLICATE_FUNCTION DUPLICATE_PREPARED_STATEMENT DUPLICATE_SCHEMA DUPLICATE_TABLE DUPLICATE_ALIAS DUPLICATE_OBJECT AMBIGUOUS_COLUMN AMBIGUOUS_FUNCTION AMBIGUOUS_PARAMETER AMBIGUOUS_ALIAS INVALID_COLUMN_REFERENCE INVALID_COLUMN_DEFINITION INVALID_CURSOR_DEFINITION INVALID_DATABASE_DEFINITION INVALID_FUNCTION_DEFINITION INVALID_PREPARED_STATEMENT_DEFINITION INVALID_SCHEMA_DEFINITION INVALID_TABLE_DEFINITION INVALID_OBJECT_DEFINITION WITH_CHECK_OPTION_VIOLATION INSUFFICIENT_RESOURCES DISK_FULL OUT_OF_MEMORY TOO_MANY_CONNECTIONS CONFIGURATION_LIMIT_EXCEEDED PROGRAM_LIMIT_EXCEEDED STATEMENT_TOO_COMPLEX TOO_MANY_COLUMNS TOO_MANY_ARGUMENTS OBJECT_NOT_IN_PREREQUISITE_STATE OBJECT_IN_USE CANT_CHANGE_RUNTIME_PARAM LOCK_NOT_AVAILABLE OPERATOR_INTERVENTION QUERY_CANCELED ADMIN_SHUTDOWN CRASH_SHUTDOWN CANNOT_CONNECT_NOW DATABASE_DROPPED SYSTEM_ERROR IO_ERROR UNDEFINED_FILE DUPLICATE_FILE SNAPSHOT_TOO_OLD CONFIG_FILE_ERROR LOCK_FILE_EXISTS FDW_ERROR FDW_COLUMN_NAME_NOT_FOUND FDW_DYNAMIC_PARAMETER_VALUE_NEEDED FDW_FUNCTION_SEQUENCE_ERROR FDW_INCONSISTENT_DESCRIPTOR_INFORMATION FDW_INVALID_ATTRIBUTE_VALUE FDW_INVALID_COLUMN_NAME FDW_INVALID_COLUMN_NUMBER FDW_INVALID_DATA_TYPE FDW_INVALID_DATA_TYPE_DESCRIPTORS FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER FDW_INVALID_HANDLE FDW_INVALID_OPTION_INDEX FDW_INVALID_OPTION_NAME FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH FDW_INVALID_STRING_FORMAT FDW_INVALID_USE_OF_NULL_POINTER FDW_TOO_MANY_HANDLES FDW_OUT_OF_MEMORY FDW_NO_SCHEMAS FDW_OPTION_NAME_NOT_FOUND FDW_REPLY_HANDLE FDW_SCHEMA_NOT_FOUND FDW_TABLE_NOT_FOUND FDW_UNABLE_TO_CREATE_EXECUTION FDW_UNABLE_TO_CREATE_REPLY FDW_UNABLE_TO_ESTABLISH_CONNECTION PLPGSQL_ERROR RAISE_EXCEPTION NO_DATA_FOUND TOO_MANY_ROWS ASSERT_FAILURE INTERNAL_ERROR DATA_CORRUPTED INDEX_CORRUPTED ',
      R =
        'ARRAY_AGG AVG BIT_AND BIT_OR BOOL_AND BOOL_OR COUNT EVERY JSON_AGG JSONB_AGG JSON_OBJECT_AGG JSONB_OBJECT_AGG MAX MIN MODE STRING_AGG SUM XMLAGG CORR COVAR_POP COVAR_SAMP REGR_AVGX REGR_AVGY REGR_COUNT REGR_INTERCEPT REGR_R2 REGR_SLOPE REGR_SXX REGR_SXY REGR_SYY STDDEV STDDEV_POP STDDEV_SAMP VARIANCE VAR_POP VAR_SAMP PERCENTILE_CONT PERCENTILE_DISC ROW_NUMBER RANK DENSE_RANK PERCENT_RANK CUME_DIST NTILE LAG LEAD FIRST_VALUE LAST_VALUE NTH_VALUE NUM_NONNULLS NUM_NULLS ABS CBRT CEIL CEILING DEGREES DIV EXP FLOOR LN LOG MOD PI POWER RADIANS ROUND SCALE SIGN SQRT TRUNC WIDTH_BUCKET RANDOM SETSEED ACOS ACOSD ASIN ASIND ATAN ATAND ATAN2 ATAN2D COS COSD COT COTD SIN SIND TAN TAND BIT_LENGTH CHAR_LENGTH CHARACTER_LENGTH LOWER OCTET_LENGTH OVERLAY POSITION SUBSTRING TREAT TRIM UPPER ASCII BTRIM CHR CONCAT CONCAT_WS CONVERT CONVERT_FROM CONVERT_TO DECODE ENCODE INITCAP LEFT LENGTH LPAD LTRIM MD5 PARSE_IDENT PG_CLIENT_ENCODING QUOTE_IDENT|10 QUOTE_LITERAL|10 QUOTE_NULLABLE|10 REGEXP_MATCH REGEXP_MATCHES REGEXP_REPLACE REGEXP_SPLIT_TO_ARRAY REGEXP_SPLIT_TO_TABLE REPEAT REPLACE REVERSE RIGHT RPAD RTRIM SPLIT_PART STRPOS SUBSTR TO_ASCII TO_HEX TRANSLATE OCTET_LENGTH GET_BIT GET_BYTE SET_BIT SET_BYTE TO_CHAR TO_DATE TO_NUMBER TO_TIMESTAMP AGE CLOCK_TIMESTAMP|10 DATE_PART DATE_TRUNC ISFINITE JUSTIFY_DAYS JUSTIFY_HOURS JUSTIFY_INTERVAL MAKE_DATE MAKE_INTERVAL|10 MAKE_TIME MAKE_TIMESTAMP|10 MAKE_TIMESTAMPTZ|10 NOW STATEMENT_TIMESTAMP|10 TIMEOFDAY TRANSACTION_TIMESTAMP|10 ENUM_FIRST ENUM_LAST ENUM_RANGE AREA CENTER DIAMETER HEIGHT ISCLOSED ISOPEN NPOINTS PCLOSE POPEN RADIUS WIDTH BOX BOUND_BOX CIRCLE LINE LSEG PATH POLYGON ABBREV BROADCAST HOST HOSTMASK MASKLEN NETMASK NETWORK SET_MASKLEN TEXT INET_SAME_FAMILY INET_MERGE MACADDR8_SET7BIT ARRAY_TO_TSVECTOR GET_CURRENT_TS_CONFIG NUMNODE PLAINTO_TSQUERY PHRASETO_TSQUERY WEBSEARCH_TO_TSQUERY QUERYTREE SETWEIGHT STRIP TO_TSQUERY TO_TSVECTOR JSON_TO_TSVECTOR JSONB_TO_TSVECTOR TS_DELETE TS_FILTER TS_HEADLINE TS_RANK TS_RANK_CD TS_REWRITE TSQUERY_PHRASE TSVECTOR_TO_ARRAY TSVECTOR_UPDATE_TRIGGER TSVECTOR_UPDATE_TRIGGER_COLUMN XMLCOMMENT XMLCONCAT XMLELEMENT XMLFOREST XMLPI XMLROOT XMLEXISTS XML_IS_WELL_FORMED XML_IS_WELL_FORMED_DOCUMENT XML_IS_WELL_FORMED_CONTENT XPATH XPATH_EXISTS XMLTABLE XMLNAMESPACES TABLE_TO_XML TABLE_TO_XMLSCHEMA TABLE_TO_XML_AND_XMLSCHEMA QUERY_TO_XML QUERY_TO_XMLSCHEMA QUERY_TO_XML_AND_XMLSCHEMA CURSOR_TO_XML CURSOR_TO_XMLSCHEMA SCHEMA_TO_XML SCHEMA_TO_XMLSCHEMA SCHEMA_TO_XML_AND_XMLSCHEMA DATABASE_TO_XML DATABASE_TO_XMLSCHEMA DATABASE_TO_XML_AND_XMLSCHEMA XMLATTRIBUTES TO_JSON TO_JSONB ARRAY_TO_JSON ROW_TO_JSON JSON_BUILD_ARRAY JSONB_BUILD_ARRAY JSON_BUILD_OBJECT JSONB_BUILD_OBJECT JSON_OBJECT JSONB_OBJECT JSON_ARRAY_LENGTH JSONB_ARRAY_LENGTH JSON_EACH JSONB_EACH JSON_EACH_TEXT JSONB_EACH_TEXT JSON_EXTRACT_PATH JSONB_EXTRACT_PATH JSON_OBJECT_KEYS JSONB_OBJECT_KEYS JSON_POPULATE_RECORD JSONB_POPULATE_RECORD JSON_POPULATE_RECORDSET JSONB_POPULATE_RECORDSET JSON_ARRAY_ELEMENTS JSONB_ARRAY_ELEMENTS JSON_ARRAY_ELEMENTS_TEXT JSONB_ARRAY_ELEMENTS_TEXT JSON_TYPEOF JSONB_TYPEOF JSON_TO_RECORD JSONB_TO_RECORD JSON_TO_RECORDSET JSONB_TO_RECORDSET JSON_STRIP_NULLS JSONB_STRIP_NULLS JSONB_SET JSONB_INSERT JSONB_PRETTY CURRVAL LASTVAL NEXTVAL SETVAL COALESCE NULLIF GREATEST LEAST ARRAY_APPEND ARRAY_CAT ARRAY_NDIMS ARRAY_DIMS ARRAY_FILL ARRAY_LENGTH ARRAY_LOWER ARRAY_POSITION ARRAY_POSITIONS ARRAY_PREPEND ARRAY_REMOVE ARRAY_REPLACE ARRAY_TO_STRING ARRAY_UPPER CARDINALITY STRING_TO_ARRAY UNNEST ISEMPTY LOWER_INC UPPER_INC LOWER_INF UPPER_INF RANGE_MERGE GENERATE_SERIES GENERATE_SUBSCRIPTS CURRENT_DATABASE CURRENT_QUERY CURRENT_SCHEMA|10 CURRENT_SCHEMAS|10 INET_CLIENT_ADDR INET_CLIENT_PORT INET_SERVER_ADDR INET_SERVER_PORT ROW_SECURITY_ACTIVE FORMAT_TYPE TO_REGCLASS TO_REGPROC TO_REGPROCEDURE TO_REGOPER TO_REGOPERATOR TO_REGTYPE TO_REGNAMESPACE TO_REGROLE COL_DESCRIPTION OBJ_DESCRIPTION SHOBJ_DESCRIPTION TXID_CURRENT TXID_CURRENT_IF_ASSIGNED TXID_CURRENT_SNAPSHOT TXID_SNAPSHOT_XIP TXID_SNAPSHOT_XMAX TXID_SNAPSHOT_XMIN TXID_VISIBLE_IN_SNAPSHOT TXID_STATUS CURRENT_SETTING SET_CONFIG BRIN_SUMMARIZE_NEW_VALUES BRIN_SUMMARIZE_RANGE BRIN_DESUMMARIZE_RANGE GIN_CLEAN_PENDING_LIST SUPPRESS_REDUNDANT_UPDATES_TRIGGER LO_FROM_BYTEA LO_PUT LO_GET LO_CREAT LO_CREATE LO_UNLINK LO_IMPORT LO_EXPORT LOREAD LOWRITE GROUPING CAST '
          .trim()
          .split(' ')
          .map(function (C) {
            return C.split('|')[0];
          })
          .join('|');
    return {
      name: 'PostgreSQL',
      aliases: ['postgres', 'postgresql'],
      supersetOf: 'sql',
      case_insensitive: !0,
      keywords: { keyword: l + f + c, built_in: p + T + N },
      illegal: /:==|\W\s*\(\*|(^|\s)\$[a-z]|\{\{|[a-z]:\s*$|\.\.\.|TO:|DO:/,
      contains: [
        {
          className: 'keyword',
          variants: [
            { begin: /\bTEXT\s*SEARCH\b/ },
            { begin: /\b(PRIMARY|FOREIGN|FOR(\s+NO)?)\s+KEY\b/ },
            { begin: /\bPARALLEL\s+(UNSAFE|RESTRICTED|SAFE)\b/ },
            { begin: /\bSTORAGE\s+(PLAIN|EXTERNAL|EXTENDED|MAIN)\b/ },
            { begin: /\bMATCH\s+(FULL|PARTIAL|SIMPLE)\b/ },
            { begin: /\bNULLS\s+(FIRST|LAST)\b/ },
            { begin: /\bEVENT\s+TRIGGER\b/ },
            { begin: /\b(MAPPING|OR)\s+REPLACE\b/ },
            { begin: /\b(FROM|TO)\s+(PROGRAM|STDIN|STDOUT)\b/ },
            { begin: /\b(SHARE|EXCLUSIVE)\s+MODE\b/ },
            { begin: /\b(LEFT|RIGHT)\s+(OUTER\s+)?JOIN\b/ },
            { begin: /\b(FETCH|MOVE)\s+(NEXT|PRIOR|FIRST|LAST|ABSOLUTE|RELATIVE|FORWARD|BACKWARD)\b/ },
            { begin: /\bPRESERVE\s+ROWS\b/ },
            { begin: /\bDISCARD\s+PLANS\b/ },
            { begin: /\bREFERENCING\s+(OLD|NEW)\b/ },
            { begin: /\bSKIP\s+LOCKED\b/ },
            { begin: /\bGROUPING\s+SETS\b/ },
            { begin: /\b(BINARY|INSENSITIVE|SCROLL|NO\s+SCROLL)\s+(CURSOR|FOR)\b/ },
            { begin: /\b(WITH|WITHOUT)\s+HOLD\b/ },
            { begin: /\bWITH\s+(CASCADED|LOCAL)\s+CHECK\s+OPTION\b/ },
            { begin: /\bEXCLUDE\s+(TIES|NO\s+OTHERS)\b/ },
            { begin: /\bFORMAT\s+(TEXT|XML|JSON|YAML)\b/ },
            { begin: /\bSET\s+((SESSION|LOCAL)\s+)?NAMES\b/ },
            { begin: /\bIS\s+(NOT\s+)?UNKNOWN\b/ },
            { begin: /\bSECURITY\s+LABEL\b/ },
            { begin: /\bSTANDALONE\s+(YES|NO|NO\s+VALUE)\b/ },
            { begin: /\bWITH\s+(NO\s+)?DATA\b/ },
            { begin: /\b(FOREIGN|SET)\s+DATA\b/ },
            { begin: /\bSET\s+(CATALOG|CONSTRAINTS)\b/ },
            { begin: /\b(WITH|FOR)\s+ORDINALITY\b/ },
            { begin: /\bIS\s+(NOT\s+)?DOCUMENT\b/ },
            { begin: /\bXML\s+OPTION\s+(DOCUMENT|CONTENT)\b/ },
            { begin: /\b(STRIP|PRESERVE)\s+WHITESPACE\b/ },
            { begin: /\bNO\s+(ACTION|MAXVALUE|MINVALUE)\b/ },
            { begin: /\bPARTITION\s+BY\s+(RANGE|LIST|HASH)\b/ },
            { begin: /\bAT\s+TIME\s+ZONE\b/ },
            { begin: /\bGRANTED\s+BY\b/ },
            { begin: /\bRETURN\s+(QUERY|NEXT)\b/ },
            { begin: /\b(ATTACH|DETACH)\s+PARTITION\b/ },
            { begin: /\bFORCE\s+ROW\s+LEVEL\s+SECURITY\b/ },
            {
              begin:
                /\b(INCLUDING|EXCLUDING)\s+(COMMENTS|CONSTRAINTS|DEFAULTS|IDENTITY|INDEXES|STATISTICS|STORAGE|ALL)\b/,
            },
            { begin: /\bAS\s+(ASSIGNMENT|IMPLICIT|PERMISSIVE|RESTRICTIVE|ENUM|RANGE)\b/ },
          ],
        },
        { begin: /\b(FORMAT|FAMILY|VERSION)\s*\(/ },
        { begin: /\bINCLUDE\s*\(/, keywords: 'INCLUDE' },
        { begin: /\bRANGE(?!\s*(BETWEEN|UNBOUNDED|CURRENT|[-0-9]+))/ },
        {
          begin:
            /\b(VERSION|OWNER|TEMPLATE|TABLESPACE|CONNECTION\s+LIMIT|PROCEDURE|RESTRICT|JOIN|PARSER|COPY|START|END|COLLATION|INPUT|ANALYZE|STORAGE|LIKE|DEFAULT|DELIMITER|ENCODING|COLUMN|CONSTRAINT|TABLE|SCHEMA)\s*=/,
        },
        { begin: /\b(PG_\w+?|HAS_[A-Z_]+_PRIVILEGE)\b/, relevance: 10 },
        {
          begin: /\bEXTRACT\s*\(/,
          end: /\bFROM\b/,
          returnEnd: !0,
          keywords: {
            type: 'CENTURY DAY DECADE DOW DOY EPOCH HOUR ISODOW ISOYEAR MICROSECONDS MILLENNIUM MILLISECONDS MINUTE MONTH QUARTER SECOND TIMEZONE TIMEZONE_HOUR TIMEZONE_MINUTE WEEK YEAR',
          },
        },
        { begin: /\b(XMLELEMENT|XMLPI)\s*\(\s*NAME/, keywords: { keyword: 'NAME' } },
        { begin: /\b(XMLPARSE|XMLSERIALIZE)\s*\(\s*(DOCUMENT|CONTENT)/, keywords: { keyword: 'DOCUMENT CONTENT' } },
        {
          beginKeywords: 'CACHE INCREMENT MAXVALUE MINVALUE',
          end: e.C_NUMBER_RE,
          returnEnd: !0,
          keywords: 'BY CACHE INCREMENT MAXVALUE MINVALUE',
        },
        { className: 'type', begin: /\b(WITH|WITHOUT)\s+TIME\s+ZONE\b/ },
        {
          className: 'type',
          begin: /\bINTERVAL\s+(YEAR|MONTH|DAY|HOUR|MINUTE|SECOND)(\s+TO\s+(MONTH|HOUR|MINUTE|SECOND))?\b/,
        },
        {
          begin: /\bRETURNS\s+(LANGUAGE_HANDLER|TRIGGER|EVENT_TRIGGER|FDW_HANDLER|INDEX_AM_HANDLER|TSM_HANDLER)\b/,
          keywords: {
            keyword: 'RETURNS',
            type: 'LANGUAGE_HANDLER TRIGGER EVENT_TRIGGER FDW_HANDLER INDEX_AM_HANDLER TSM_HANDLER',
          },
        },
        { begin: '\\b(' + R + ')\\s*\\(' },
        { begin: '\\.(' + m + ')\\b' },
        { begin: '\\b(' + m + ')\\s+PATH\\b', keywords: { keyword: 'PATH', type: d.replace('PATH ', '') } },
        { className: 'type', begin: '\\b(' + m + ')\\b' },
        { className: 'string', begin: "'", end: "'", contains: [{ begin: "''" }] },
        { className: 'string', begin: "(e|E|u&|U&)'", end: "'", contains: [{ begin: '\\\\.' }], relevance: 10 },
        e.END_SAME_AS_BEGIN({
          begin: o,
          end: o,
          contains: [
            {
              subLanguage: [
                'pgsql',
                'perl',
                'python',
                'tcl',
                'r',
                'lua',
                'java',
                'php',
                'ruby',
                'bash',
                'scheme',
                'xml',
                'json',
              ],
              endsWithParent: !0,
            },
          ],
        }),
        { begin: '"', end: '"', contains: [{ begin: '""' }] },
        e.C_NUMBER_MODE,
        e.C_BLOCK_COMMENT_MODE,
        n,
        {
          className: 'meta',
          variants: [{ begin: '%(ROW)?TYPE', relevance: 10 }, { begin: '\\$\\d+' }, { begin: '^#\\w', end: '$' }],
        },
        { className: 'symbol', begin: s, relevance: 10 },
      ],
    };
  }
  function UA(e) {
    const n = { className: 'attr', begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/, relevance: 1.01 },
      r = { match: /[{}[\],:]/, className: 'punctuation', relevance: 0 },
      o = ['true', 'false', 'null'],
      s = { scope: 'literal', beginKeywords: o.join(' ') };
    return {
      name: 'JSON',
      keywords: { literal: o },
      contains: [n, r, e.QUOTE_STRING_MODE, s, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
      illegal: '\\S',
    };
  }
  Ya.registerLanguage('pgsql', PA), Ya.registerLanguage('json', UA);
  function zt(e) {
    if (e === void 0) return 'N/A';
    const n = [];
    let r = 1e3 * 60 * 60 * 24;
    const o = Math.floor(e / r);
    o && n.push(o + 'd');
    let s = e % r;
    r /= 24;
    const l = Math.floor(s / r);
    l && n.push(l + 'h'), (s = s % r), (r /= 60);
    const c = Math.floor(s / r);
    c && n.push(c + 'm'), (s = s % r), (r /= 60);
    const f = Math.floor(s / r);
    f && n.push(f + 's'), (s = s % r);
    const d = parseFloat(s.toPrecision(3));
    return n.push(d.toLocaleString() + 'ms'), n.slice(0, 2).join(' ');
  }
  function Nc(e) {
    return e === void 0 ? 'N/A' : ((e = parseFloat(e.toPrecision(3))), e.toLocaleString());
  }
  function ei(e) {
    return e === void 0 ? 'N/A' : e.toLocaleString();
  }
  function $A(e) {
    return e === void 0 ? 'N/A' : e.toLocaleString();
  }
  function Ac(e) {
    const n = parseFloat(e.toPrecision(2)).toLocaleString();
    return $.template('${f}&nbsp;&times;')({ f: n });
  }
  function ar(e) {
    return e instanceof Array || (e = [e]), (e = $.map(e, n => $.escape(n.replace(/(^\(|\)$)/g, '')))), e.join(', ');
  }
  function Qp(e, n) {
    return $.map(e, r => {
      let o = $.escape(r);
      return n && (o += n.indexOf(r) !== -1 ? '&nbsp;<span class="text-secondary">(presort)</span>' : ''), o;
    }).join(', ');
  }
  function yc(e) {
    return Ka(e * 1024);
  }
  function HA(e) {
    return Ka(e);
  }
  function Ka(e, n = 2) {
    const o = n < 0 ? 0 : n,
      s = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      l = Math.floor(Math.log(e) / Math.log(1024)),
      c = $.template('${value} ${unit}'),
      f = parseFloat((e / Math.pow(1024, l)).toPrecision(o)).toLocaleString();
    return c({ value: f, unit: s[l] });
  }
  function Ln(e) {
    return e ? Ka(e * 8 * 1024) : '';
  }
  function vt(e, n = !1) {
    if (((n = !!n), !e)) return '';
    let r = e.toLocaleString();
    return n && (r += `<br><small>${Ln(e)}</small>`), r;
  }
  function Zp(e) {
    return isNaN(e) ? '-' : $.round(e * 100) + '%';
  }
  function FA(e) {
    return (
      typeof e == 'string' && (e = e.split(/\s*,\s*/)),
      '<ul class="list-unstyled mb-0">' +
        $.template('<% _.forEach(lines, function(line) { %><li><%= line %></li><% }); %>')({ lines: e }) +
        '</ul>'
    );
  }
  function WA(e) {
    return t.createApp(XN, { sortGroup: e }).mount(document.createElement('div')).$el.outerHTML;
  }
  function Sc(e) {
    return e ? Ka(e * 8 * 1024) + '/s' : '';
  }
  function Lr(e, n) {
    if ($.has(be, e)) {
      if (be[e] === wt.duration) return zt(n);
      if (be[e] === wt.boolean) return n ? 'yes' : 'no';
      if (be[e] === wt.cost) return Nc(n);
      if (be[e] === wt.rows) return ei(n);
      if (be[e] === wt.loops) return $A(n);
      if (be[e] === wt.factor) return Ac(n);
      if (be[e] === wt.estimateDirection)
        switch (n) {
          case St.over:
            return '<i class="fa fa-arrow-up"></i> over';
          case St.under:
            return '<i class="fa fa-arrow-down"></i> under';
          default:
            return '-';
        }
      else {
        if (be[e] === wt.json) return JSON.stringify(n, null, 2);
        if (be[e] === wt.bytes) return HA(n);
        if (be[e] === wt.kilobytes) return yc(n);
        if (be[e] === wt.blocks) return vt(n, !0);
        if (be[e] === wt.list) return FA(n);
        if (be[e] === wt.sortGroups) return WA(n);
        if (be[e] === wt.transferRate) return Sc(n);
      }
    }
    return $.escape(n);
  }
  function bc(e) {
    let n;
    return e > 90 ? (n = 4) : e > 40 ? (n = 3) : e > 10 && (n = 2), n ? 'c-' + n : '';
  }
  function zA(e) {
    return Ya.highlight(e, { language: 'pgsql' }).value;
  }
  function XA(e) {
    return Ya.highlight(e, { language: 'json' }).value;
  }
  function GA(e, n, r) {
    let o, s, l;
    if (n === 0) o = s = l = r;
    else {
      const c = r < 0.5 ? r * (1 + n) : r + n - r * n,
        f = 2 * r - c;
      (o = xc(f, c, e + 1 / 3)), (s = xc(f, c, e)), (l = xc(f, c, e - 1 / 3));
    }
    return [Math.floor(o * 255), Math.floor(s * 255), Math.floor(l * 255)];
  }
  function YA(e) {
    const n = ((100 - e) * 1.2) / 360,
      r = GA(n, 0.9, 0.4);
    return 'rgb(' + r[0] + ',' + r[1] + ',' + r[2] + ')';
  }
  function xc(e, n, r) {
    return (
      r < 0 && (r += 1),
      r > 1 && (r -= 1),
      r < 1 / 6 ? e + (n - e) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e
    );
  }
  function ki(e, n, r) {
    const o = t.ref(NaN),
      s = t.ref(NaN),
      l = t.ref(0),
      c = t.ref(null),
      f = t.ref(),
      d = t.ref(),
      m = t.ref(NaN),
      p = t.ref(NaN),
      T = t.ref();
    t.onBeforeMount(() => {
      N(), C(), B(), V(), (d.value = n[E.PLANNER_ESTIMATE_DIRECTION]), (f.value = n[E.PLANNER_ESTIMATE_FACTOR]);
    }),
      t.watch(() => r.highlightType, N);
    function N() {
      let G;
      switch (r.highlightType) {
        case xt.DURATION:
          if (((G = n[E.EXCLUSIVE_DURATION]), G === void 0)) {
            c.value = null;
            break;
          }
          (l.value = Math.round((G / e.value.planStats.maxDuration) * 100)), (c.value = zt(G));
          break;
        case xt.ROWS:
          if (((G = n[E.ACTUAL_ROWS_REVISED]), G === void 0)) {
            c.value = null;
            break;
          }
          (l.value = Math.round((G / e.value.planStats.maxRows) * 100) || 0), (c.value = ei(G));
          break;
        case xt.COST:
          if (((G = n[E.EXCLUSIVE_COST]), G === void 0)) {
            c.value = null;
            break;
          }
          (l.value = Math.round((G / e.value.planStats.maxCost) * 100)), (c.value = Nc(G));
          break;
      }
    }
    const b = t.computed(() => YA(l.value)),
      R = t.computed(() => {
        let G = M.value ? 'Parallel ' : '';
        return (G += n[E.NODE_TYPE]), G;
      });
    function C() {
      var ve, Se;
      const G =
          e.value.planStats.executionTime ||
          ((Se = (ve = e.value.content) == null ? void 0 : ve.Plan) == null ? void 0 : Se[E.ACTUAL_TOTAL_TIME]),
        _e = n[E.EXCLUSIVE_DURATION];
      o.value = $.round((_e / G) * 100);
    }
    function B() {
      const G = e.value.content.maxTotalCost,
        _e = n[E.EXCLUSIVE_COST];
      s.value = $.round((_e / G) * 100);
    }
    const S = t.computed(() => {
      const G = Object.keys(n).find(
        _e => _e === E.ROWS_REMOVED_BY_FILTER_REVISED || _e === E.ROWS_REMOVED_BY_JOIN_FILTER_REVISED,
      );
      return Object.keys(E).find(_e => E[_e] === G);
    });
    function V() {
      if (S.value) {
        const G = n[E[S.value]];
        m.value = G;
        const _e = n[E.ACTUAL_ROWS_REVISED];
        (p.value = $.floor((G / (G + _e)) * 100)),
          p.value === 100 ? (T.value = '>99') : p.value === 0 ? (T.value = '<1') : (T.value = p.value.toString());
      }
    }
    const Y = t.computed(() => {
        let G;
        const _e = o.value;
        return _e > 90 ? (G = 4) : _e > 40 ? (G = 3) : _e > 10 && (G = 2), G ? 'c-' + G : !1;
      }),
      _ = t.computed(() => {
        let G;
        const _e = n[E.PLANNER_ESTIMATE_FACTOR];
        return _e > 1e3 ? (G = 4) : _e > 100 ? (G = 3) : _e > 10 && (G = 2), G ? 'c-' + G : !1;
      }),
      k = t.computed(() => {
        let G;
        const _e = s.value;
        return _e > 90 ? (G = 4) : _e > 40 ? (G = 3) : _e > 10 && (G = 2), G ? 'c-' + G : !1;
      }),
      O = t.computed(() => {
        let G;
        const _e = p.value * o.value;
        return _e > 2e3 ? (G = 4) : _e > 500 && (G = 3), G ? 'c-' + G : !1;
      }),
      D = t.computed(() => {
        let G;
        const _e =
          (n[E.HEAP_FETCHES] /
            (n[E.ACTUAL_ROWS] + (n[E.ROWS_REMOVED_BY_FILTER] || 0) + (n[E.ROWS_REMOVED_BY_JOIN_FILTER] || 0))) *
          100;
        return _e > 90 ? (G = 4) : _e > 40 ? (G = 3) : _e > 0 && (G = 2), G ? 'c-' + G : !1;
      }),
      L = t.computed(() => T.value + '% of rows removed by filter'),
      y = t.computed(
        () => `Filter used:<br><pre class="mb-0" style="white-space: pre-wrap;"><code>${n[E.FILTER]}</code></pre>`,
      ),
      K = t.computed(() => !!e.value.planStats.executionTime && !n[E.ACTUAL_LOOPS]),
      M = t.computed(() => n[E.PARALLEL_AWARE]),
      H = t.computed(() => {
        if ((console.warn('Make sure it works for workers that are not array'), n[E.WORKERS_LAUNCHED]))
          return n[E.WORKERS_LAUNCHED];
        const G = n[E.WORKERS];
        return G ? G.length : NaN;
      }),
      q = t.computed(() => n[E.WORKERS_PLANNED_BY_GATHER]),
      U = t.computed(() => {
        const G = n[E.WORKERS_PLANNED_BY_GATHER];
        return [...Array(G).keys()].slice().reverse();
      }),
      ee = t.computed(() => {
        switch (n[E.PLANNER_ESTIMATE_FACTOR]) {
          case 1 / 0:
            return 100;
          case 1:
            return 0;
          default:
            return ((n[E.PLANNER_ESTIMATE_FACTOR] || 0) / e.value.planStats.maxEstimateFactor) * 100;
        }
      }),
      I = t.computed(() => {
        var G;
        return (
          (n[E.EXCLUSIVE_SHARED_HIT_BLOCKS] / ((G = e.value.planStats.maxBlocks) == null ? void 0 : G[Me.shared])) * 100
        );
      }),
      z = t.computed(() => {
        var G;
        return (
          (n[E.EXCLUSIVE_SHARED_READ_BLOCKS] / ((G = e.value.planStats.maxBlocks) == null ? void 0 : G[Me.shared])) *
          100
        );
      }),
      Q = t.computed(() => {
        var G;
        return (
          (n[E.EXCLUSIVE_SHARED_DIRTIED_BLOCKS] / ((G = e.value.planStats.maxBlocks) == null ? void 0 : G[Me.shared])) *
          100
        );
      }),
      oe = t.computed(() => {
        var G;
        return (
          (n[E.EXCLUSIVE_SHARED_WRITTEN_BLOCKS] / ((G = e.value.planStats.maxBlocks) == null ? void 0 : G[Me.shared])) *
          100
        );
      }),
      fe = t.computed(() => {
        var G;
        return (
          (n[E.EXCLUSIVE_TEMP_READ_BLOCKS] / ((G = e.value.planStats.maxBlocks) == null ? void 0 : G[Me.temp])) * 100
        );
      }),
      ne = t.computed(() => {
        var G;
        return (
          (n[E.EXCLUSIVE_TEMP_WRITTEN_BLOCKS] / ((G = e.value.planStats.maxBlocks) == null ? void 0 : G[Me.temp])) * 100
        );
      }),
      te = t.computed(() => {
        var G;
        return (
          (n[E.EXCLUSIVE_LOCAL_HIT_BLOCKS] / ((G = e.value.planStats.maxBlocks) == null ? void 0 : G[Me.local])) * 100
        );
      }),
      de = t.computed(() => {
        var G;
        return (
          (n[E.EXCLUSIVE_LOCAL_READ_BLOCKS] / ((G = e.value.planStats.maxBlocks) == null ? void 0 : G[Me.local])) * 100
        );
      }),
      j = t.computed(() => {
        var G;
        return (
          (n[E.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS] / ((G = e.value.planStats.maxBlocks) == null ? void 0 : G[Me.local])) *
          100
        );
      }),
      X = t.computed(() => {
        var G;
        return (
          (n[E.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS] / ((G = e.value.planStats.maxBlocks) == null ? void 0 : G[Me.local])) *
          100
        );
      }),
      Z = t.computed(() =>
        ['Duration: <br>Exclusive: ', zt(n[E.EXCLUSIVE_DURATION]), ', Total: ', zt(n[E.ACTUAL_TOTAL_TIME])].join(''),
      ),
      pe = t.computed(() => ['Rows: ', ei(n[E.ACTUAL_ROWS_REVISED])].join('')),
      le = t.computed(() => {
        const G = n[E.PLANNER_ESTIMATE_FACTOR],
          _e = n[E.PLANNER_ESTIMATE_DIRECTION];
        let ve = '';
        if (G === void 0 || _e === void 0) return 'N/A';
        switch (_e) {
          case St.over:
            ve += 'Over';
            break;
          case St.under:
            ve += 'Under';
            break;
          default:
            ve += 'Correctly';
        }
        return (
          (ve += ' estimated'),
          (ve += G !== 1 ? ' by <b>' + Ac(G) + '</b>' : ''),
          (ve += '<br>'),
          (ve += `Rows: ${ei(n[E.ACTUAL_ROWS_REVISED])} `),
          (ve += `(${ei(n[E.PLAN_ROWS_REVISED])} planned)`),
          ve
        );
      }),
      me = t.computed(() => ['Cost: ', ei(n[E.EXCLUSIVE_COST])].join('')),
      ye = t.computed(() => ['Rows removed by filter: ', Be.value, ei(m.value)].join('')),
      xe = t.computed(() => n[E.ACTUAL_LOOPS] > 1),
      Be = t.computed(() => (xe.value ? '~' : '')),
      Fe = t.computed(() => G => {
        let _e = '',
          ve,
          Se,
          $e,
          et;
        switch (G) {
          case Me.shared:
            (ve = n[E.EXCLUSIVE_SHARED_HIT_BLOCKS]),
              (Se = n[E.EXCLUSIVE_SHARED_READ_BLOCKS]),
              (et = n[E.EXCLUSIVE_SHARED_DIRTIED_BLOCKS]),
              ($e = n[E.EXCLUSIVE_SHARED_WRITTEN_BLOCKS]);
            break;
          case Me.temp:
            (Se = n[E.EXCLUSIVE_TEMP_READ_BLOCKS]), ($e = n[E.EXCLUSIVE_TEMP_WRITTEN_BLOCKS]);
            break;
          case Me.local:
            (ve = n[E.EXCLUSIVE_LOCAL_HIT_BLOCKS]),
              (Se = n[E.EXCLUSIVE_LOCAL_READ_BLOCKS]),
              (et = n[E.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS]),
              ($e = n[E.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS]);
            break;
        }
        switch (
          ((_e += '<table class="table table-dark table-sm table-borderless mb-0">'),
          (_e += ve ? '<tr><td>Hit:</td><td class="text-end">' + vt(ve, !0) + '</td></tr>' : ''),
          (_e += Se ? '<tr><td>Read:</td><td class="text-end">' + vt(Se, !0) + '</td></tr>' : ''),
          (_e += et ? '<tr><td>Dirtied:</td><td class="text-end">' + vt(et, !0) + '</td></tr>' : ''),
          (_e += $e ? '<tr><td>Written:</td><td class="text-end">' + vt($e, !0) + '</td></tr>' : ''),
          (_e += '</table>'),
          !ve && !Se && !et && !$e && (_e = ' N/A'),
          G)
        ) {
          case Me.shared:
            _e = 'Shared Blocks:' + _e;
            break;
          case Me.temp:
            _e = 'Temp Blocks:' + _e;
            break;
          case Me.local:
            _e = 'Local Blocks:' + _e;
            break;
        }
        return _e;
      }),
      We = t.computed(() => G => {
        let _e = '<table class="table table-dark table-sm table-borderless mb-0">';
        return (_e += `<tr><td>${G}:</td><td class="text-end">`), n[G] && (_e += `${vt(n[G], !0)}</td></tr>`), _e;
      }),
      Tt = t.computed(() => {
        let G = '';
        const _e = n[E.EXCLUSIVE_IO_READ_TIME],
          ve = n[E.AVERAGE_IO_READ_TIME],
          Se = n[E.EXCLUSIVE_IO_WRITE_TIME],
          $e = n[E.AVERAGE_IO_WRITE_TIME];
        return (
          (G += '<table class="table table-dark table-sm table-borderless mb-0">'),
          (G += _e
            ? '<tr><td>Read:</td><td class="text-end">' + zt(_e) + '<br><small>~' + Sc(ve) + '</small></td></tr>'
            : ''),
          (G += Se
            ? '<tr><td>Write:</td><td class="text-end">' + zt(Se) + '<br><small>~' + Sc($e) + '</small></td></tr>'
            : ''),
          'IO ' + G
        );
      }),
      Nt = t.computed(() => {
        var G;
        return `Heap Fetches: ${(G = n[E.HEAP_FETCHES]) == null ? void 0 : G.toLocaleString()}`;
      });
    return {
      barColor: b,
      barWidth: l,
      buffersByLocationTooltip: Fe,
      buffersByMetricTooltip: We,
      costClass: k,
      costTooltip: me,
      durationClass: Y,
      estimateFactorPercent: ee,
      estimateFactorTooltip: le,
      estimationClass: _,
      executionTimePercent: o,
      filterTooltip: L,
      filterDetailTooltip: y,
      heapFetchesClass: D,
      heapFetchesTooltip: Nt,
      highlightValue: c,
      ioTooltip: Tt,
      isNeverExecuted: K,
      isParallelAware: M,
      localDirtiedPercent: j,
      localHitPercent: te,
      localReadPercent: de,
      localWrittenPercent: X,
      nodeName: R,
      plannerRowEstimateDirection: d,
      plannerRowEstimateValue: f,
      rowsRemoved: m,
      rowsRemovedClass: O,
      rowsRemovedPercent: p,
      rowsRemovedPercentString: T,
      rowsRemovedProp: S,
      rowsRemovedTooltip: ye,
      rowsTooltip: pe,
      sharedDirtiedPercent: Q,
      sharedHitPercent: I,
      sharedReadPercent: z,
      sharedWrittenPercent: oe,
      tempReadPercent: fe,
      tempWrittenPercent: ne,
      tilde: Be,
      timeTooltip: Z,
      workersLaunchedCount: H,
      workersPlannedCount: q,
      workersPlannedCountReversed: U,
    };
  }
  const KA = ['data-tippy-content'],
    jA = { class: 'node-index' },
    qA = { class: 'fw-normal small' },
    JA = { class: 'node-type pe-2' },
    QA = { key: 0, class: 'progress rounded-0 align-items-center bg-transparent', style: { height: '5px' } },
    ZA = { key: 1, class: 'progress rounded-0 align-items-center bg-transparent', style: { height: '5px' } },
    ey = {
      key: 2,
      class: 'progress rounded-0 align-items-center bg-transparent justify-content-center',
      style: { height: '10px' },
    },
    ty = { class: 'text-secondary small' },
    ny = { key: 1, class: 'fa fa-fw d-inline-block' },
    ry = t.createElementVNode(
      'div',
      {
        class: 'progress-bar border-start bg-secondary',
        role: 'progressbar',
        style: { width: '1px', height: '5px' },
        'aria-valuenow': '15',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
      },
      null,
      -1,
    ),
    iy = { class: 'text-secondary small' },
    oy = { key: 1, class: 'fa fa-fw d-inline-block' },
    ay = { key: 3, class: 'progress rounded-0 align-items-center bg-transparent', style: { height: '5px' } },
    sy = { key: 4, class: 'progress rounded-0 align-items-center bg-transparent', style: { height: '5px' } },
    ly = { key: 5, class: 'progress rounded-0 align-items-center bg-transparent', style: { height: '5px' } },
    cy = { key: 6, class: 'progress rounded-0 align-items-center bg-transparent', style: { height: '5px' } },
    fy = { key: 7, class: 'progress rounded-0 align-items-center bg-transparent', style: { height: '5px' } },
    uy = t.defineComponent({
      __name: 'DiagramRow',
      props: {
        node: null,
        level: null,
        isSubplan: { type: Boolean },
        isLastChild: { type: Boolean },
        branches: null,
        index: null,
        viewOptions: null,
      },
      setup(e) {
        const n = e,
          r = t.reactive(n.node),
          o = t.reactive(n.viewOptions),
          s = t.ref(null),
          l = t.inject(xn),
          c = t.inject(pa),
          f = t.inject(Fr);
        if (!f) throw new Error(`Could not resolve ${Fr.description}`);
        const d = t.inject(ha),
          m = t.inject(Wr),
          {
            buffersByLocationTooltip: p,
            costTooltip: T,
            estimateFactorPercent: N,
            estimateFactorTooltip: b,
            ioTooltip: R,
            nodeName: C,
            rowsTooltip: B,
            timeTooltip: S,
          } = ki(l, r, m);
        function V(_) {
          let k = '';
          switch (o.metric) {
            case Ze.time:
              k += S.value;
              break;
            case Ze.rows:
              k += B.value;
              break;
            case Ze.estimate_factor:
              k += b.value;
              break;
            case Ze.cost:
              k += T.value;
              break;
            case Ze.buffers:
              k += p.value(o.buffersMetric);
              break;
            case Ze.io:
              k += R.value;
              break;
          }
          return _[E.CTE_NAME] && (k += '<br><em>CTE ' + _[E.CTE_NAME] + '</em>'), k;
        }
        const Y = t.inject('scrollTo');
        return (
          t.watch(
            () => (c == null ? void 0 : c.value),
            _ => {
              _ == r.nodeId && s.value && (Y == null || Y(s.value));
            },
          ),
          (_, k) => {
            var O, D, L, y, K, M, H, q, U, ee, I, z, Q, oe, fe, ne;
            return (
              t.openBlock(),
              t.createElementBlock(
                'tr',
                {
                  class: t.normalizeClass([
                    'no-focus-outline node',
                    { selected: r.nodeId === t.unref(c), highlight: r.nodeId === t.unref(d) },
                  ]),
                  'data-tippy-content': V(r),
                  onMouseenter: k[0] || (k[0] = te => (d.value = r.nodeId)),
                  onMouseleave: k[1] || (k[1] = te => (d.value = void 0)),
                  onClick: k[2] || (k[2] = t.withModifiers(te => t.unref(f)(r.nodeId, !0), ['prevent'])),
                  ref_key: 'rootEl',
                  ref: s,
                },
                [
                  t.createElementVNode('td', jA, [
                    t.createElementVNode('span', qA, '#' + t.toDisplayString(r.nodeId), 1),
                  ]),
                  t.createTextVNode(),
                  t.createElementVNode('td', JA, [
                    t.createVNode(
                      dc,
                      {
                        isSubplan: !!r[t.unref(E).SUBPLAN_NAME],
                        isLastChild: !!e.isLastChild,
                        level: e.level,
                        branches: e.branches,
                        index: e.index,
                        dense: '',
                      },
                      null,
                      8,
                      ['isSubplan', 'isLastChild', 'level', 'branches', 'index'],
                    ),
                    t.createTextVNode(' ' + t.toDisplayString(t.unref(C)), 1),
                  ]),
                  t.createTextVNode(),
                  t.createElementVNode('td', null, [
                    o.metric == t.unref(Ze).time
                      ? (t.openBlock(),
                        t.createElementBlock('div', QA, [
                          t.createElementVNode(
                            'div',
                            {
                              class: t.normalizeClass([
                                'progress-bar border-secondary bg-secondary',
                                { 'border-start': r[t.unref(E).EXCLUSIVE_DURATION] > 0 },
                              ]),
                              role: 'progressbar',
                              style: t.normalizeStyle([
                                { height: '5px' },
                                {
                                  width:
                                    (r[t.unref(E).EXCLUSIVE_DURATION] /
                                      (t.unref(l).planStats.executionTime ||
                                        t.unref(l).content.Plan[t.unref(E).ACTUAL_TOTAL_TIME])) *
                                      100 +
                                    '%',
                                },
                              ]),
                              'aria-valuenow': '15',
                              'aria-valuemin': '0',
                              'aria-valuemax': '100',
                            },
                            null,
                            6,
                          ),
                          t.createTextVNode(),
                          t.createElementVNode(
                            'div',
                            {
                              class: 'progress-bar bg-secondary-light',
                              role: 'progressbar',
                              style: t.normalizeStyle([
                                { height: '5px' },
                                {
                                  width:
                                    ((r[t.unref(E).ACTUAL_TOTAL_TIME] - r[t.unref(E).EXCLUSIVE_DURATION]) /
                                      (t.unref(l).planStats.executionTime ||
                                        t.unref(l).content.Plan[t.unref(E).ACTUAL_TOTAL_TIME])) *
                                      100 +
                                    '%',
                                },
                              ]),
                              'aria-valuenow': '15',
                              'aria-valuemin': '0',
                              'aria-valuemax': '100',
                            },
                            null,
                            4,
                          ),
                        ]))
                      : o.metric == t.unref(Ze).rows
                        ? (t.openBlock(),
                          t.createElementBlock('div', ZA, [
                            t.createElementVNode(
                              'div',
                              {
                                class: 'bg-secondary',
                                role: 'progressbar',
                                style: t.normalizeStyle([
                                  { height: '5px' },
                                  {
                                    width:
                                      Math.round(
                                        (r[t.unref(E).ACTUAL_ROWS_REVISED] / t.unref(l).planStats.maxRows) * 100,
                                      ) + '%',
                                  },
                                ]),
                                'aria-valuenow': '15',
                                'aria-valuemin': '0',
                                'aria-valuemax': '100',
                              },
                              null,
                              4,
                            ),
                          ]))
                        : o.metric == t.unref(Ze).estimate_factor
                          ? (t.openBlock(),
                            t.createElementBlock('div', ey, [
                              t.createElementVNode('span', ty, [
                                r[t.unref(E).PLANNER_ESTIMATE_DIRECTION] === t.unref(St).under
                                  ? (t.openBlock(),
                                    t.createBlock(
                                      t.unref(qe),
                                      { key: 0, 'fixed-width': '', icon: t.unref(Op) },
                                      null,
                                      8,
                                      ['icon'],
                                    ))
                                  : (t.openBlock(), t.createElementBlock('i', ny)),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode(
                                'div',
                                {
                                  class: t.normalizeClass([
                                    'progress-bar',
                                    [
                                      r[t.unref(E).PLANNER_ESTIMATE_DIRECTION] === t.unref(St).under
                                        ? 'bg-secondary'
                                        : 'bg-transparent',
                                    ],
                                  ]),
                                  role: 'progressbar',
                                  style: t.normalizeStyle([{ height: '5px' }, { width: t.unref(N) + '%' }]),
                                  'aria-valuenow': '15',
                                  'aria-valuemin': '0',
                                  'aria-valuemax': '100',
                                },
                                null,
                                6,
                              ),
                              t.createTextVNode(),
                              ry,
                              t.createTextVNode(),
                              t.createElementVNode(
                                'div',
                                {
                                  class: t.normalizeClass([
                                    'progress-bar',
                                    [
                                      r[t.unref(E).PLANNER_ESTIMATE_DIRECTION] === t.unref(St).over
                                        ? 'bg-secondary'
                                        : 'bg-transparent',
                                    ],
                                  ]),
                                  role: 'progressbar',
                                  style: t.normalizeStyle([{ height: '5px' }, { width: t.unref(N) + '%' }]),
                                  'aria-valuenow': '15',
                                  'aria-valuemin': '0',
                                  'aria-valuemax': '100',
                                },
                                null,
                                6,
                              ),
                              t.createTextVNode(),
                              t.createElementVNode('span', iy, [
                                r[t.unref(E).PLANNER_ESTIMATE_DIRECTION] === t.unref(St).over
                                  ? (t.openBlock(),
                                    t.createBlock(
                                      t.unref(qe),
                                      { key: 0, 'fixed-width': '', icon: t.unref(Cp) },
                                      null,
                                      8,
                                      ['icon'],
                                    ))
                                  : (t.openBlock(), t.createElementBlock('i', oy)),
                              ]),
                            ]))
                          : o.metric == t.unref(Ze).cost
                            ? (t.openBlock(),
                              t.createElementBlock('div', ay, [
                                t.createElementVNode(
                                  'div',
                                  {
                                    class: t.normalizeClass([
                                      'bg-secondary',
                                      { 'border-secondary border-start': r[t.unref(E).EXCLUSIVE_COST] > 0 },
                                    ]),
                                    role: 'progressbar',
                                    style: t.normalizeStyle([
                                      { height: '5px' },
                                      {
                                        width:
                                          Math.round(
                                            (r[t.unref(E).EXCLUSIVE_COST] / t.unref(l).planStats.maxCost) * 100,
                                          ) + '%',
                                      },
                                    ]),
                                    'aria-valuenow': '15',
                                    'aria-valuemin': '0',
                                    'aria-valuemax': '100',
                                  },
                                  null,
                                  6,
                                ),
                              ]))
                            : o.metric == t.unref(Ze).buffers &&
                                o.buffersMetric == t.unref(Me).shared &&
                                (O = t.unref(l).planStats.maxBlocks) != null &&
                                O[t.unref(Me).shared]
                              ? (t.openBlock(),
                                t.createElementBlock('div', sy, [
                                  t.createElementVNode(
                                    'div',
                                    {
                                      class: t.normalizeClass([
                                        'bg-hit',
                                        { 'border-start border-hit': r[t.unref(E).EXCLUSIVE_SHARED_HIT_BLOCKS] > 0 },
                                      ]),
                                      role: 'progressbar',
                                      style: t.normalizeStyle([
                                        { height: '5px' },
                                        {
                                          width:
                                            (Math.round(
                                              (r[t.unref(E).EXCLUSIVE_SHARED_HIT_BLOCKS] /
                                                ((D = t.unref(l).planStats.maxBlocks) == null
                                                  ? void 0
                                                  : D[t.unref(Me).shared])) *
                                                100,
                                            ) || 0) + '%',
                                        },
                                      ]),
                                      'aria-valuenow': '15',
                                      'aria-valuemin': '0',
                                      'aria-valuemax': '100',
                                    },
                                    null,
                                    6,
                                  ),
                                  t.createTextVNode(),
                                  t.createElementVNode(
                                    'div',
                                    {
                                      class: t.normalizeClass([
                                        'bg-read',
                                        { 'border-start border-read': r[t.unref(E).EXCLUSIVE_SHARED_READ_BLOCKS] > 0 },
                                      ]),
                                      role: 'progressbar',
                                      style: t.normalizeStyle([
                                        { height: '5px' },
                                        {
                                          width:
                                            (Math.round(
                                              (r[t.unref(E).EXCLUSIVE_SHARED_READ_BLOCKS] /
                                                ((L = t.unref(l).planStats.maxBlocks) == null
                                                  ? void 0
                                                  : L[t.unref(Me).shared])) *
                                                100,
                                            ) || 0) + '%',
                                        },
                                      ]),
                                      'aria-valuenow': '15',
                                      'aria-valuemin': '0',
                                      'aria-valuemax': '100',
                                    },
                                    null,
                                    6,
                                  ),
                                  t.createTextVNode(),
                                  t.createElementVNode(
                                    'div',
                                    {
                                      class: t.normalizeClass([
                                        'bg-dirtied',
                                        {
                                          'border-start border-dirtied':
                                            r[t.unref(E).EXCLUSIVE_SHARED_DIRTIED_BLOCKS] > 0,
                                        },
                                      ]),
                                      role: 'progressbar',
                                      style: t.normalizeStyle([
                                        { height: '5px' },
                                        {
                                          width:
                                            (Math.round(
                                              (r[t.unref(E).EXCLUSIVE_SHARED_DIRTIED_BLOCKS] /
                                                ((y = t.unref(l).planStats.maxBlocks) == null
                                                  ? void 0
                                                  : y[t.unref(Me).shared])) *
                                                100,
                                            ) || 0) + '%',
                                        },
                                      ]),
                                      'aria-valuenow': '15',
                                      'aria-valuemin': '0',
                                      'aria-valuemax': '100',
                                    },
                                    null,
                                    6,
                                  ),
                                  t.createTextVNode(),
                                  t.createElementVNode(
                                    'div',
                                    {
                                      class: t.normalizeClass([
                                        'bg-written',
                                        {
                                          'border-start border-written':
                                            r[t.unref(E).EXCLUSIVE_SHARED_WRITTEN_BLOCKS] > 0,
                                        },
                                      ]),
                                      role: 'progressbar',
                                      style: t.normalizeStyle([
                                        { height: '5px' },
                                        {
                                          width:
                                            (Math.round(
                                              (r[t.unref(E).EXCLUSIVE_SHARED_WRITTEN_BLOCKS] /
                                                ((K = t.unref(l).planStats.maxBlocks) == null
                                                  ? void 0
                                                  : K[t.unref(Me).shared])) *
                                                100,
                                            ) || 0) + '%',
                                        },
                                      ]),
                                      'aria-valuenow': '15',
                                      'aria-valuemin': '0',
                                      'aria-valuemax': '100',
                                    },
                                    null,
                                    6,
                                  ),
                                ]))
                              : o.metric == t.unref(Ze).buffers &&
                                  o.buffersMetric == t.unref(Me).temp &&
                                  (M = t.unref(l).planStats.maxBlocks) != null &&
                                  M[t.unref(Me).temp]
                                ? (t.openBlock(),
                                  t.createElementBlock('div', ly, [
                                    t.createElementVNode(
                                      'div',
                                      {
                                        class: 'bg-read',
                                        role: 'progressbar',
                                        style: t.normalizeStyle([
                                          { height: '5px' },
                                          {
                                            width:
                                              (Math.round(
                                                (r[t.unref(E).EXCLUSIVE_TEMP_READ_BLOCKS] /
                                                  ((H = t.unref(l).planStats.maxBlocks) == null
                                                    ? void 0
                                                    : H[t.unref(Me).temp])) *
                                                  100,
                                              ) || 0) + '%',
                                          },
                                        ]),
                                        'aria-valuenow': '15',
                                        'aria-valuemin': '0',
                                        'aria-valuemax': '100',
                                      },
                                      null,
                                      4,
                                    ),
                                    t.createTextVNode(),
                                    t.createElementVNode(
                                      'div',
                                      {
                                        class: 'bg-written',
                                        role: 'progressbar',
                                        style: t.normalizeStyle([
                                          {
                                            width:
                                              (Math.round(
                                                (r[t.unref(E).EXCLUSIVE_TEMP_WRITTEN_BLOCKS] /
                                                  ((q = t.unref(l).planStats.maxBlocks) == null
                                                    ? void 0
                                                    : q[t.unref(Me).temp])) *
                                                  100,
                                              ) || 0) + '%',
                                          },
                                          { height: '5px' },
                                        ]),
                                        'aria-valuenow': '15',
                                        'aria-valuemin': '0',
                                        'aria-valuemax': '100',
                                      },
                                      null,
                                      4,
                                    ),
                                  ]))
                                : o.metric == t.unref(Ze).buffers &&
                                    o.buffersMetric == t.unref(Me).local &&
                                    (U = t.unref(l).planStats.maxBlocks) != null &&
                                    U[t.unref(Me).local]
                                  ? (t.openBlock(),
                                    t.createElementBlock('div', cy, [
                                      t.createElementVNode(
                                        'div',
                                        {
                                          class: 'bg-hit',
                                          role: 'progressbar',
                                          style: t.normalizeStyle([
                                            { height: '5px' },
                                            {
                                              width:
                                                (Math.round(
                                                  (r[t.unref(E).EXCLUSIVE_LOCAL_HIT_BLOCKS] /
                                                    ((ee = t.unref(l).planStats.maxBlocks) == null
                                                      ? void 0
                                                      : ee[t.unref(Me).local])) *
                                                    100,
                                                ) || 0) + '%',
                                            },
                                          ]),
                                          'aria-valuenow': '15',
                                          'aria-valuemin': '0',
                                          'aria-valuemax': '100',
                                        },
                                        null,
                                        4,
                                      ),
                                      t.createTextVNode(),
                                      t.createElementVNode(
                                        'div',
                                        {
                                          class: 'bg-read',
                                          role: 'progressbar',
                                          style: t.normalizeStyle([
                                            {
                                              width:
                                                (Math.round(
                                                  (r[t.unref(E).EXCLUSIVE_LOCAL_READ_BLOCKS] /
                                                    ((I = t.unref(l).planStats.maxBlocks) == null
                                                      ? void 0
                                                      : I[t.unref(Me).local])) *
                                                    100,
                                                ) || 0) + '%',
                                            },
                                            { height: '5px' },
                                          ]),
                                          'aria-valuenow': '15',
                                          'aria-valuemin': '0',
                                          'aria-valuemax': '100',
                                        },
                                        null,
                                        4,
                                      ),
                                      t.createTextVNode(),
                                      t.createElementVNode(
                                        'div',
                                        {
                                          class: 'bg-dirtied',
                                          role: 'progressbar',
                                          style: t.normalizeStyle([
                                            { height: '5px' },
                                            {
                                              width:
                                                (Math.round(
                                                  (r[t.unref(E).EXCLUSIVE_LOCAL_DIRTIED_BLOCKS] /
                                                    ((z = t.unref(l).planStats.maxBlocks) == null
                                                      ? void 0
                                                      : z[t.unref(Me).local])) *
                                                    100,
                                                ) || 0) + '%',
                                            },
                                          ]),
                                          'aria-valuenow': '15',
                                          'aria-valuemin': '0',
                                          'aria-valuemax': '100',
                                        },
                                        null,
                                        4,
                                      ),
                                      t.createTextVNode(),
                                      t.createElementVNode(
                                        'div',
                                        {
                                          class: 'bg-written',
                                          role: 'progressbar',
                                          style: t.normalizeStyle([
                                            { height: '5px' },
                                            {
                                              width:
                                                (Math.round(
                                                  (r[t.unref(E).EXCLUSIVE_LOCAL_WRITTEN_BLOCKS] /
                                                    ((oe = (Q = t.unref(l).planStats) == null ? void 0 : Q.maxBlocks) ==
                                                    null
                                                      ? void 0
                                                      : oe[t.unref(Me).local])) *
                                                    100,
                                                ) || 0) + '%',
                                            },
                                          ]),
                                          'aria-valuenow': '15',
                                          'aria-valuemin': '0',
                                          'aria-valuemax': '100',
                                        },
                                        null,
                                        4,
                                      ),
                                    ]))
                                  : o.metric == t.unref(Ze).io &&
                                      (t.unref(l).content.Plan[t.unref(E).IO_READ_TIME] ||
                                        t.unref(l).content.Plan[t.unref(E).IO_WRITE_TIME])
                                    ? (t.openBlock(),
                                      t.createElementBlock('div', fy, [
                                        t.createElementVNode(
                                          'div',
                                          {
                                            class: 'bg-read',
                                            role: 'progressbar',
                                            style: t.normalizeStyle([
                                              { height: '5px' },
                                              {
                                                width:
                                                  (Math.round(
                                                    (r[t.unref(E).EXCLUSIVE_IO_READ_TIME] /
                                                      ((fe = t.unref(l).planStats) == null ? void 0 : fe.maxIo)) *
                                                      100,
                                                  ) || 0) + '%',
                                              },
                                            ]),
                                            'aria-valuenow': '15',
                                            'aria-valuemin': '0',
                                            'aria-valuemax': '100',
                                          },
                                          null,
                                          4,
                                        ),
                                        t.createTextVNode(),
                                        t.createElementVNode(
                                          'div',
                                          {
                                            class: 'bg-written',
                                            role: 'progressbar',
                                            style: t.normalizeStyle([
                                              { height: '5px' },
                                              {
                                                width:
                                                  (Math.round(
                                                    (r[t.unref(E).EXCLUSIVE_IO_WRITE_TIME] /
                                                      ((ne = t.unref(l).planStats) == null ? void 0 : ne.maxIo)) *
                                                      100,
                                                  ) || 0) + '%',
                                              },
                                            ]),
                                            'aria-valuenow': '15',
                                            'aria-valuemin': '0',
                                            'aria-valuemax': '100',
                                          },
                                          null,
                                          4,
                                        ),
                                      ]))
                                    : t.createCommentVNode('', !0),
                  ]),
                ],
                42,
                KA,
              )
            );
          }
        );
      },
    });
  var Xt = 'top',
    pn = 'bottom',
    hn = 'right',
    Gt = 'left',
    Oc = 'auto',
    ko = [Xt, pn, hn, Gt],
    Di = 'start',
    Do = 'end',
    dy = 'clippingParents',
    eh = 'viewport',
    Vo = 'popper',
    py = 'reference',
    th = ko.reduce(function (e, n) {
      return e.concat([n + '-' + Di, n + '-' + Do]);
    }, []),
    nh = [].concat(ko, [Oc]).reduce(function (e, n) {
      return e.concat([n, n + '-' + Di, n + '-' + Do]);
    }, []),
    hy = 'beforeRead',
    my = 'read',
    Ey = 'afterRead',
    _y = 'beforeMain',
    gy = 'main',
    Ty = 'afterMain',
    Ny = 'beforeWrite',
    Ay = 'write',
    yy = 'afterWrite',
    Sy = [hy, my, Ey, _y, gy, Ty, Ny, Ay, yy];
  function Yn(e) {
    return e ? (e.nodeName || '').toLowerCase() : null;
  }
  function en(e) {
    if (e == null) return window;
    if (e.toString() !== '[object Window]') {
      var n = e.ownerDocument;
      return (n && n.defaultView) || window;
    }
    return e;
  }
  function ti(e) {
    var n = en(e).Element;
    return e instanceof n || e instanceof Element;
  }
  function mn(e) {
    var n = en(e).HTMLElement;
    return e instanceof n || e instanceof HTMLElement;
  }
  function Rc(e) {
    if (typeof ShadowRoot > 'u') return !1;
    var n = en(e).ShadowRoot;
    return e instanceof n || e instanceof ShadowRoot;
  }
  function by(e) {
    var n = e.state;
    Object.keys(n.elements).forEach(function (r) {
      var o = n.styles[r] || {},
        s = n.attributes[r] || {},
        l = n.elements[r];
      !mn(l) ||
        !Yn(l) ||
        (Object.assign(l.style, o),
        Object.keys(s).forEach(function (c) {
          var f = s[c];
          f === !1 ? l.removeAttribute(c) : l.setAttribute(c, f === !0 ? '' : f);
        }));
    });
  }
  function xy(e) {
    var n = e.state,
      r = {
        popper: { position: n.options.strategy, left: '0', top: '0', margin: '0' },
        arrow: { position: 'absolute' },
        reference: {},
      };
    return (
      Object.assign(n.elements.popper.style, r.popper),
      (n.styles = r),
      n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow),
      function () {
        Object.keys(n.elements).forEach(function (o) {
          var s = n.elements[o],
            l = n.attributes[o] || {},
            c = Object.keys(n.styles.hasOwnProperty(o) ? n.styles[o] : r[o]),
            f = c.reduce(function (d, m) {
              return (d[m] = ''), d;
            }, {});
          !mn(s) ||
            !Yn(s) ||
            (Object.assign(s.style, f),
            Object.keys(l).forEach(function (d) {
              s.removeAttribute(d);
            }));
        });
      }
    );
  }
  const rh = { name: 'applyStyles', enabled: !0, phase: 'write', fn: by, effect: xy, requires: ['computeStyles'] };
  function Kn(e) {
    return e.split('-')[0];
  }
  var ni = Math.max,
    ja = Math.min,
    Vi = Math.round;
  function Cc() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands)
      ? e.brands
          .map(function (n) {
            return n.brand + '/' + n.version;
          })
          .join(' ')
      : navigator.userAgent;
  }
  function ih() {
    return !/^((?!chrome|android).)*safari/i.test(Cc());
  }
  function Mi(e, n, r) {
    n === void 0 && (n = !1), r === void 0 && (r = !1);
    var o = e.getBoundingClientRect(),
      s = 1,
      l = 1;
    n &&
      mn(e) &&
      ((s = (e.offsetWidth > 0 && Vi(o.width) / e.offsetWidth) || 1),
      (l = (e.offsetHeight > 0 && Vi(o.height) / e.offsetHeight) || 1));
    var c = ti(e) ? en(e) : window,
      f = c.visualViewport,
      d = !ih() && r,
      m = (o.left + (d && f ? f.offsetLeft : 0)) / s,
      p = (o.top + (d && f ? f.offsetTop : 0)) / l,
      T = o.width / s,
      N = o.height / l;
    return { width: T, height: N, top: p, right: m + T, bottom: p + N, left: m, x: m, y: p };
  }
  function Ic(e) {
    var n = Mi(e),
      r = e.offsetWidth,
      o = e.offsetHeight;
    return (
      Math.abs(n.width - r) <= 1 && (r = n.width),
      Math.abs(n.height - o) <= 1 && (o = n.height),
      { x: e.offsetLeft, y: e.offsetTop, width: r, height: o }
    );
  }
  function oh(e, n) {
    var r = n.getRootNode && n.getRootNode();
    if (e.contains(n)) return !0;
    if (r && Rc(r)) {
      var o = n;
      do {
        if (o && e.isSameNode(o)) return !0;
        o = o.parentNode || o.host;
      } while (o);
    }
    return !1;
  }
  function sr(e) {
    return en(e).getComputedStyle(e);
  }
  function Oy(e) {
    return ['table', 'td', 'th'].indexOf(Yn(e)) >= 0;
  }
  function wr(e) {
    return ((ti(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function qa(e) {
    return Yn(e) === 'html' ? e : e.assignedSlot || e.parentNode || (Rc(e) ? e.host : null) || wr(e);
  }
  function ah(e) {
    return !mn(e) || sr(e).position === 'fixed' ? null : e.offsetParent;
  }
  function Ry(e) {
    var n = /firefox/i.test(Cc()),
      r = /Trident/i.test(Cc());
    if (r && mn(e)) {
      var o = sr(e);
      if (o.position === 'fixed') return null;
    }
    var s = qa(e);
    for (Rc(s) && (s = s.host); mn(s) && ['html', 'body'].indexOf(Yn(s)) < 0; ) {
      var l = sr(s);
      if (
        l.transform !== 'none' ||
        l.perspective !== 'none' ||
        l.contain === 'paint' ||
        ['transform', 'perspective'].indexOf(l.willChange) !== -1 ||
        (n && l.willChange === 'filter') ||
        (n && l.filter && l.filter !== 'none')
      )
        return s;
      s = s.parentNode;
    }
    return null;
  }
  function Mo(e) {
    for (var n = en(e), r = ah(e); r && Oy(r) && sr(r).position === 'static'; ) r = ah(r);
    return r && (Yn(r) === 'html' || (Yn(r) === 'body' && sr(r).position === 'static')) ? n : r || Ry(e) || n;
  }
  function Lc(e) {
    return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
  }
  function Bo(e, n, r) {
    return ni(e, ja(n, r));
  }
  function Cy(e, n, r) {
    var o = Bo(e, n, r);
    return o > r ? r : o;
  }
  function sh() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function lh(e) {
    return Object.assign({}, sh(), e);
  }
  function ch(e, n) {
    return n.reduce(function (r, o) {
      return (r[o] = e), r;
    }, {});
  }
  var Iy = function (n, r) {
    return (
      (n = typeof n == 'function' ? n(Object.assign({}, r.rects, { placement: r.placement })) : n),
      lh(typeof n != 'number' ? n : ch(n, ko))
    );
  };
  function Ly(e) {
    var n,
      r = e.state,
      o = e.name,
      s = e.options,
      l = r.elements.arrow,
      c = r.modifiersData.popperOffsets,
      f = Kn(r.placement),
      d = Lc(f),
      m = [Gt, hn].indexOf(f) >= 0,
      p = m ? 'height' : 'width';
    if (!(!l || !c)) {
      var T = Iy(s.padding, r),
        N = Ic(l),
        b = d === 'y' ? Xt : Gt,
        R = d === 'y' ? pn : hn,
        C = r.rects.reference[p] + r.rects.reference[d] - c[d] - r.rects.popper[p],
        B = c[d] - r.rects.reference[d],
        S = Mo(l),
        V = S ? (d === 'y' ? S.clientHeight || 0 : S.clientWidth || 0) : 0,
        Y = C / 2 - B / 2,
        _ = T[b],
        k = V - N[p] - T[R],
        O = V / 2 - N[p] / 2 + Y,
        D = Bo(_, O, k),
        L = d;
      r.modifiersData[o] = ((n = {}), (n[L] = D), (n.centerOffset = D - O), n);
    }
  }
  function wy(e) {
    var n = e.state,
      r = e.options,
      o = r.element,
      s = o === void 0 ? '[data-popper-arrow]' : o;
    s != null &&
      ((typeof s == 'string' && ((s = n.elements.popper.querySelector(s)), !s)) ||
        (oh(n.elements.popper, s) && (n.elements.arrow = s)));
  }
  const vy = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: Ly,
    effect: wy,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
  };
  function Bi(e) {
    return e.split('-')[1];
  }
  var ky = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
  function Dy(e, n) {
    var r = e.x,
      o = e.y,
      s = n.devicePixelRatio || 1;
    return { x: Vi(r * s) / s || 0, y: Vi(o * s) / s || 0 };
  }
  function fh(e) {
    var n,
      r = e.popper,
      o = e.popperRect,
      s = e.placement,
      l = e.variation,
      c = e.offsets,
      f = e.position,
      d = e.gpuAcceleration,
      m = e.adaptive,
      p = e.roundOffsets,
      T = e.isFixed,
      N = c.x,
      b = N === void 0 ? 0 : N,
      R = c.y,
      C = R === void 0 ? 0 : R,
      B = typeof p == 'function' ? p({ x: b, y: C }) : { x: b, y: C };
    (b = B.x), (C = B.y);
    var S = c.hasOwnProperty('x'),
      V = c.hasOwnProperty('y'),
      Y = Gt,
      _ = Xt,
      k = window;
    if (m) {
      var O = Mo(r),
        D = 'clientHeight',
        L = 'clientWidth';
      if (
        (O === en(r) &&
          ((O = wr(r)), sr(O).position !== 'static' && f === 'absolute' && ((D = 'scrollHeight'), (L = 'scrollWidth'))),
        (O = O),
        s === Xt || ((s === Gt || s === hn) && l === Do))
      ) {
        _ = pn;
        var y = T && O === k && k.visualViewport ? k.visualViewport.height : O[D];
        (C -= y - o.height), (C *= d ? 1 : -1);
      }
      if (s === Gt || ((s === Xt || s === pn) && l === Do)) {
        Y = hn;
        var K = T && O === k && k.visualViewport ? k.visualViewport.width : O[L];
        (b -= K - o.width), (b *= d ? 1 : -1);
      }
    }
    var M = Object.assign({ position: f }, m && ky),
      H = p === !0 ? Dy({ x: b, y: C }, en(r)) : { x: b, y: C };
    if (((b = H.x), (C = H.y), d)) {
      var q;
      return Object.assign(
        {},
        M,
        ((q = {}),
        (q[_] = V ? '0' : ''),
        (q[Y] = S ? '0' : ''),
        (q.transform =
          (k.devicePixelRatio || 1) <= 1
            ? 'translate(' + b + 'px, ' + C + 'px)'
            : 'translate3d(' + b + 'px, ' + C + 'px, 0)'),
        q),
      );
    }
    return Object.assign(
      {},
      M,
      ((n = {}), (n[_] = V ? C + 'px' : ''), (n[Y] = S ? b + 'px' : ''), (n.transform = ''), n),
    );
  }
  function Vy(e) {
    var n = e.state,
      r = e.options,
      o = r.gpuAcceleration,
      s = o === void 0 ? !0 : o,
      l = r.adaptive,
      c = l === void 0 ? !0 : l,
      f = r.roundOffsets,
      d = f === void 0 ? !0 : f,
      m = {
        placement: Kn(n.placement),
        variation: Bi(n.placement),
        popper: n.elements.popper,
        popperRect: n.rects.popper,
        gpuAcceleration: s,
        isFixed: n.options.strategy === 'fixed',
      };
    n.modifiersData.popperOffsets != null &&
      (n.styles.popper = Object.assign(
        {},
        n.styles.popper,
        fh(
          Object.assign({}, m, {
            offsets: n.modifiersData.popperOffsets,
            position: n.options.strategy,
            adaptive: c,
            roundOffsets: d,
          }),
        ),
      )),
      n.modifiersData.arrow != null &&
        (n.styles.arrow = Object.assign(
          {},
          n.styles.arrow,
          fh(
            Object.assign({}, m, {
              offsets: n.modifiersData.arrow,
              position: 'absolute',
              adaptive: !1,
              roundOffsets: d,
            }),
          ),
        )),
      (n.attributes.popper = Object.assign({}, n.attributes.popper, { 'data-popper-placement': n.placement }));
  }
  const My = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: Vy, data: {} };
  var Ja = { passive: !0 };
  function By(e) {
    var n = e.state,
      r = e.instance,
      o = e.options,
      s = o.scroll,
      l = s === void 0 ? !0 : s,
      c = o.resize,
      f = c === void 0 ? !0 : c,
      d = en(n.elements.popper),
      m = [].concat(n.scrollParents.reference, n.scrollParents.popper);
    return (
      l &&
        m.forEach(function (p) {
          p.addEventListener('scroll', r.update, Ja);
        }),
      f && d.addEventListener('resize', r.update, Ja),
      function () {
        l &&
          m.forEach(function (p) {
            p.removeEventListener('scroll', r.update, Ja);
          }),
          f && d.removeEventListener('resize', r.update, Ja);
      }
    );
  }
  const Py = { name: 'eventListeners', enabled: !0, phase: 'write', fn: function () {}, effect: By, data: {} };
  var Uy = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  function Qa(e) {
    return e.replace(/left|right|bottom|top/g, function (n) {
      return Uy[n];
    });
  }
  var $y = { start: 'end', end: 'start' };
  function uh(e) {
    return e.replace(/start|end/g, function (n) {
      return $y[n];
    });
  }
  function wc(e) {
    var n = en(e),
      r = n.pageXOffset,
      o = n.pageYOffset;
    return { scrollLeft: r, scrollTop: o };
  }
  function vc(e) {
    return Mi(wr(e)).left + wc(e).scrollLeft;
  }
  function Hy(e, n) {
    var r = en(e),
      o = wr(e),
      s = r.visualViewport,
      l = o.clientWidth,
      c = o.clientHeight,
      f = 0,
      d = 0;
    if (s) {
      (l = s.width), (c = s.height);
      var m = ih();
      (m || (!m && n === 'fixed')) && ((f = s.offsetLeft), (d = s.offsetTop));
    }
    return { width: l, height: c, x: f + vc(e), y: d };
  }
  function Fy(e) {
    var n,
      r = wr(e),
      o = wc(e),
      s = (n = e.ownerDocument) == null ? void 0 : n.body,
      l = ni(r.scrollWidth, r.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
      c = ni(r.scrollHeight, r.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
      f = -o.scrollLeft + vc(e),
      d = -o.scrollTop;
    return (
      sr(s || r).direction === 'rtl' && (f += ni(r.clientWidth, s ? s.clientWidth : 0) - l),
      { width: l, height: c, x: f, y: d }
    );
  }
  function kc(e) {
    var n = sr(e),
      r = n.overflow,
      o = n.overflowX,
      s = n.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + s + o);
  }
  function dh(e) {
    return ['html', 'body', '#document'].indexOf(Yn(e)) >= 0 ? e.ownerDocument.body : mn(e) && kc(e) ? e : dh(qa(e));
  }
  function Po(e, n) {
    var r;
    n === void 0 && (n = []);
    var o = dh(e),
      s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
      l = en(o),
      c = s ? [l].concat(l.visualViewport || [], kc(o) ? o : []) : o,
      f = n.concat(c);
    return s ? f : f.concat(Po(qa(c)));
  }
  function Dc(e) {
    return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
  }
  function Wy(e, n) {
    var r = Mi(e, !1, n === 'fixed');
    return (
      (r.top = r.top + e.clientTop),
      (r.left = r.left + e.clientLeft),
      (r.bottom = r.top + e.clientHeight),
      (r.right = r.left + e.clientWidth),
      (r.width = e.clientWidth),
      (r.height = e.clientHeight),
      (r.x = r.left),
      (r.y = r.top),
      r
    );
  }
  function ph(e, n, r) {
    return n === eh ? Dc(Hy(e, r)) : ti(n) ? Wy(n, r) : Dc(Fy(wr(e)));
  }
  function zy(e) {
    var n = Po(qa(e)),
      r = ['absolute', 'fixed'].indexOf(sr(e).position) >= 0,
      o = r && mn(e) ? Mo(e) : e;
    return ti(o)
      ? n.filter(function (s) {
          return ti(s) && oh(s, o) && Yn(s) !== 'body';
        })
      : [];
  }
  function Xy(e, n, r, o) {
    var s = n === 'clippingParents' ? zy(e) : [].concat(n),
      l = [].concat(s, [r]),
      c = l[0],
      f = l.reduce(
        function (d, m) {
          var p = ph(e, m, o);
          return (
            (d.top = ni(p.top, d.top)),
            (d.right = ja(p.right, d.right)),
            (d.bottom = ja(p.bottom, d.bottom)),
            (d.left = ni(p.left, d.left)),
            d
          );
        },
        ph(e, c, o),
      );
    return (f.width = f.right - f.left), (f.height = f.bottom - f.top), (f.x = f.left), (f.y = f.top), f;
  }
  function hh(e) {
    var n = e.reference,
      r = e.element,
      o = e.placement,
      s = o ? Kn(o) : null,
      l = o ? Bi(o) : null,
      c = n.x + n.width / 2 - r.width / 2,
      f = n.y + n.height / 2 - r.height / 2,
      d;
    switch (s) {
      case Xt:
        d = { x: c, y: n.y - r.height };
        break;
      case pn:
        d = { x: c, y: n.y + n.height };
        break;
      case hn:
        d = { x: n.x + n.width, y: f };
        break;
      case Gt:
        d = { x: n.x - r.width, y: f };
        break;
      default:
        d = { x: n.x, y: n.y };
    }
    var m = s ? Lc(s) : null;
    if (m != null) {
      var p = m === 'y' ? 'height' : 'width';
      switch (l) {
        case Di:
          d[m] = d[m] - (n[p] / 2 - r[p] / 2);
          break;
        case Do:
          d[m] = d[m] + (n[p] / 2 - r[p] / 2);
          break;
      }
    }
    return d;
  }
  function Uo(e, n) {
    n === void 0 && (n = {});
    var r = n,
      o = r.placement,
      s = o === void 0 ? e.placement : o,
      l = r.strategy,
      c = l === void 0 ? e.strategy : l,
      f = r.boundary,
      d = f === void 0 ? dy : f,
      m = r.rootBoundary,
      p = m === void 0 ? eh : m,
      T = r.elementContext,
      N = T === void 0 ? Vo : T,
      b = r.altBoundary,
      R = b === void 0 ? !1 : b,
      C = r.padding,
      B = C === void 0 ? 0 : C,
      S = lh(typeof B != 'number' ? B : ch(B, ko)),
      V = N === Vo ? py : Vo,
      Y = e.rects.popper,
      _ = e.elements[R ? V : N],
      k = Xy(ti(_) ? _ : _.contextElement || wr(e.elements.popper), d, p, c),
      O = Mi(e.elements.reference),
      D = hh({ reference: O, element: Y, strategy: 'absolute', placement: s }),
      L = Dc(Object.assign({}, Y, D)),
      y = N === Vo ? L : O,
      K = {
        top: k.top - y.top + S.top,
        bottom: y.bottom - k.bottom + S.bottom,
        left: k.left - y.left + S.left,
        right: y.right - k.right + S.right,
      },
      M = e.modifiersData.offset;
    if (N === Vo && M) {
      var H = M[s];
      Object.keys(K).forEach(function (q) {
        var U = [hn, pn].indexOf(q) >= 0 ? 1 : -1,
          ee = [Xt, pn].indexOf(q) >= 0 ? 'y' : 'x';
        K[q] += H[ee] * U;
      });
    }
    return K;
  }
  function Gy(e, n) {
    n === void 0 && (n = {});
    var r = n,
      o = r.placement,
      s = r.boundary,
      l = r.rootBoundary,
      c = r.padding,
      f = r.flipVariations,
      d = r.allowedAutoPlacements,
      m = d === void 0 ? nh : d,
      p = Bi(o),
      T = p
        ? f
          ? th
          : th.filter(function (R) {
              return Bi(R) === p;
            })
        : ko,
      N = T.filter(function (R) {
        return m.indexOf(R) >= 0;
      });
    N.length === 0 && (N = T);
    var b = N.reduce(function (R, C) {
      return (R[C] = Uo(e, { placement: C, boundary: s, rootBoundary: l, padding: c })[Kn(C)]), R;
    }, {});
    return Object.keys(b).sort(function (R, C) {
      return b[R] - b[C];
    });
  }
  function Yy(e) {
    if (Kn(e) === Oc) return [];
    var n = Qa(e);
    return [uh(e), n, uh(n)];
  }
  function Ky(e) {
    var n = e.state,
      r = e.options,
      o = e.name;
    if (!n.modifiersData[o]._skip) {
      for (
        var s = r.mainAxis,
          l = s === void 0 ? !0 : s,
          c = r.altAxis,
          f = c === void 0 ? !0 : c,
          d = r.fallbackPlacements,
          m = r.padding,
          p = r.boundary,
          T = r.rootBoundary,
          N = r.altBoundary,
          b = r.flipVariations,
          R = b === void 0 ? !0 : b,
          C = r.allowedAutoPlacements,
          B = n.options.placement,
          S = Kn(B),
          V = S === B,
          Y = d || (V || !R ? [Qa(B)] : Yy(B)),
          _ = [B].concat(Y).reduce(function (j, X) {
            return j.concat(
              Kn(X) === Oc
                ? Gy(n, {
                    placement: X,
                    boundary: p,
                    rootBoundary: T,
                    padding: m,
                    flipVariations: R,
                    allowedAutoPlacements: C,
                  })
                : X,
            );
          }, []),
          k = n.rects.reference,
          O = n.rects.popper,
          D = new Map(),
          L = !0,
          y = _[0],
          K = 0;
        K < _.length;
        K++
      ) {
        var M = _[K],
          H = Kn(M),
          q = Bi(M) === Di,
          U = [Xt, pn].indexOf(H) >= 0,
          ee = U ? 'width' : 'height',
          I = Uo(n, { placement: M, boundary: p, rootBoundary: T, altBoundary: N, padding: m }),
          z = U ? (q ? hn : Gt) : q ? pn : Xt;
        k[ee] > O[ee] && (z = Qa(z));
        var Q = Qa(z),
          oe = [];
        if (
          (l && oe.push(I[H] <= 0),
          f && oe.push(I[z] <= 0, I[Q] <= 0),
          oe.every(function (j) {
            return j;
          }))
        ) {
          (y = M), (L = !1);
          break;
        }
        D.set(M, oe);
      }
      if (L)
        for (
          var fe = R ? 3 : 1,
            ne = function (X) {
              var Z = _.find(function (pe) {
                var le = D.get(pe);
                if (le)
                  return le.slice(0, X).every(function (me) {
                    return me;
                  });
              });
              if (Z) return (y = Z), 'break';
            },
            te = fe;
          te > 0;
          te--
        ) {
          var de = ne(te);
          if (de === 'break') break;
        }
      n.placement !== y && ((n.modifiersData[o]._skip = !0), (n.placement = y), (n.reset = !0));
    }
  }
  const jy = { name: 'flip', enabled: !0, phase: 'main', fn: Ky, requiresIfExists: ['offset'], data: { _skip: !1 } };
  function mh(e, n, r) {
    return (
      r === void 0 && (r = { x: 0, y: 0 }),
      {
        top: e.top - n.height - r.y,
        right: e.right - n.width + r.x,
        bottom: e.bottom - n.height + r.y,
        left: e.left - n.width - r.x,
      }
    );
  }
  function Eh(e) {
    return [Xt, hn, pn, Gt].some(function (n) {
      return e[n] >= 0;
    });
  }
  function qy(e) {
    var n = e.state,
      r = e.name,
      o = n.rects.reference,
      s = n.rects.popper,
      l = n.modifiersData.preventOverflow,
      c = Uo(n, { elementContext: 'reference' }),
      f = Uo(n, { altBoundary: !0 }),
      d = mh(c, o),
      m = mh(f, s, l),
      p = Eh(d),
      T = Eh(m);
    (n.modifiersData[r] = {
      referenceClippingOffsets: d,
      popperEscapeOffsets: m,
      isReferenceHidden: p,
      hasPopperEscaped: T,
    }),
      (n.attributes.popper = Object.assign({}, n.attributes.popper, {
        'data-popper-reference-hidden': p,
        'data-popper-escaped': T,
      }));
  }
  const Jy = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: qy };
  function Qy(e, n, r) {
    var o = Kn(e),
      s = [Gt, Xt].indexOf(o) >= 0 ? -1 : 1,
      l = typeof r == 'function' ? r(Object.assign({}, n, { placement: e })) : r,
      c = l[0],
      f = l[1];
    return (c = c || 0), (f = (f || 0) * s), [Gt, hn].indexOf(o) >= 0 ? { x: f, y: c } : { x: c, y: f };
  }
  function Zy(e) {
    var n = e.state,
      r = e.options,
      o = e.name,
      s = r.offset,
      l = s === void 0 ? [0, 0] : s,
      c = nh.reduce(function (p, T) {
        return (p[T] = Qy(T, n.rects, l)), p;
      }, {}),
      f = c[n.placement],
      d = f.x,
      m = f.y;
    n.modifiersData.popperOffsets != null &&
      ((n.modifiersData.popperOffsets.x += d), (n.modifiersData.popperOffsets.y += m)),
      (n.modifiersData[o] = c);
  }
  const eS = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: Zy };
  function tS(e) {
    var n = e.state,
      r = e.name;
    n.modifiersData[r] = hh({
      reference: n.rects.reference,
      element: n.rects.popper,
      strategy: 'absolute',
      placement: n.placement,
    });
  }
  const nS = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: tS, data: {} };
  function rS(e) {
    return e === 'x' ? 'y' : 'x';
  }
  function iS(e) {
    var n = e.state,
      r = e.options,
      o = e.name,
      s = r.mainAxis,
      l = s === void 0 ? !0 : s,
      c = r.altAxis,
      f = c === void 0 ? !1 : c,
      d = r.boundary,
      m = r.rootBoundary,
      p = r.altBoundary,
      T = r.padding,
      N = r.tether,
      b = N === void 0 ? !0 : N,
      R = r.tetherOffset,
      C = R === void 0 ? 0 : R,
      B = Uo(n, { boundary: d, rootBoundary: m, padding: T, altBoundary: p }),
      S = Kn(n.placement),
      V = Bi(n.placement),
      Y = !V,
      _ = Lc(S),
      k = rS(_),
      O = n.modifiersData.popperOffsets,
      D = n.rects.reference,
      L = n.rects.popper,
      y = typeof C == 'function' ? C(Object.assign({}, n.rects, { placement: n.placement })) : C,
      K = typeof y == 'number' ? { mainAxis: y, altAxis: y } : Object.assign({ mainAxis: 0, altAxis: 0 }, y),
      M = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null,
      H = { x: 0, y: 0 };
    if (O) {
      if (l) {
        var q,
          U = _ === 'y' ? Xt : Gt,
          ee = _ === 'y' ? pn : hn,
          I = _ === 'y' ? 'height' : 'width',
          z = O[_],
          Q = z + B[U],
          oe = z - B[ee],
          fe = b ? -L[I] / 2 : 0,
          ne = V === Di ? D[I] : L[I],
          te = V === Di ? -L[I] : -D[I],
          de = n.elements.arrow,
          j = b && de ? Ic(de) : { width: 0, height: 0 },
          X = n.modifiersData['arrow#persistent'] ? n.modifiersData['arrow#persistent'].padding : sh(),
          Z = X[U],
          pe = X[ee],
          le = Bo(0, D[I], j[I]),
          me = Y ? D[I] / 2 - fe - le - Z - K.mainAxis : ne - le - Z - K.mainAxis,
          ye = Y ? -D[I] / 2 + fe + le + pe + K.mainAxis : te + le + pe + K.mainAxis,
          xe = n.elements.arrow && Mo(n.elements.arrow),
          Be = xe ? (_ === 'y' ? xe.clientTop || 0 : xe.clientLeft || 0) : 0,
          Fe = (q = M == null ? void 0 : M[_]) != null ? q : 0,
          We = z + me - Fe - Be,
          Tt = z + ye - Fe,
          Nt = Bo(b ? ja(Q, We) : Q, z, b ? ni(oe, Tt) : oe);
        (O[_] = Nt), (H[_] = Nt - z);
      }
      if (f) {
        var G,
          _e = _ === 'x' ? Xt : Gt,
          ve = _ === 'x' ? pn : hn,
          Se = O[k],
          $e = k === 'y' ? 'height' : 'width',
          et = Se + B[_e],
          ft = Se - B[ve],
          Ot = [Xt, Gt].indexOf(S) !== -1,
          he = (G = M == null ? void 0 : M[k]) != null ? G : 0,
          Ne = Ot ? et : Se - D[$e] - L[$e] - he + K.altAxis,
          Le = Ot ? Se + D[$e] + L[$e] - he - K.altAxis : ft,
          Pe = b && Ot ? Cy(Ne, Se, Le) : Bo(b ? Ne : et, Se, b ? Le : ft);
        (O[k] = Pe), (H[k] = Pe - Se);
      }
      n.modifiersData[o] = H;
    }
  }
  const oS = { name: 'preventOverflow', enabled: !0, phase: 'main', fn: iS, requiresIfExists: ['offset'] };
  function aS(e) {
    return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
  }
  function sS(e) {
    return e === en(e) || !mn(e) ? wc(e) : aS(e);
  }
  function lS(e) {
    var n = e.getBoundingClientRect(),
      r = Vi(n.width) / e.offsetWidth || 1,
      o = Vi(n.height) / e.offsetHeight || 1;
    return r !== 1 || o !== 1;
  }
  function cS(e, n, r) {
    r === void 0 && (r = !1);
    var o = mn(n),
      s = mn(n) && lS(n),
      l = wr(n),
      c = Mi(e, s, r),
      f = { scrollLeft: 0, scrollTop: 0 },
      d = { x: 0, y: 0 };
    return (
      (o || (!o && !r)) &&
        ((Yn(n) !== 'body' || kc(l)) && (f = sS(n)),
        mn(n) ? ((d = Mi(n, !0)), (d.x += n.clientLeft), (d.y += n.clientTop)) : l && (d.x = vc(l))),
      { x: c.left + f.scrollLeft - d.x, y: c.top + f.scrollTop - d.y, width: c.width, height: c.height }
    );
  }
  function fS(e) {
    var n = new Map(),
      r = new Set(),
      o = [];
    e.forEach(function (l) {
      n.set(l.name, l);
    });
    function s(l) {
      r.add(l.name);
      var c = [].concat(l.requires || [], l.requiresIfExists || []);
      c.forEach(function (f) {
        if (!r.has(f)) {
          var d = n.get(f);
          d && s(d);
        }
      }),
        o.push(l);
    }
    return (
      e.forEach(function (l) {
        r.has(l.name) || s(l);
      }),
      o
    );
  }
  function uS(e) {
    var n = fS(e);
    return Sy.reduce(function (r, o) {
      return r.concat(
        n.filter(function (s) {
          return s.phase === o;
        }),
      );
    }, []);
  }
  function dS(e) {
    var n;
    return function () {
      return (
        n ||
          (n = new Promise(function (r) {
            Promise.resolve().then(function () {
              (n = void 0), r(e());
            });
          })),
        n
      );
    };
  }
  function pS(e) {
    var n = e.reduce(function (r, o) {
      var s = r[o.name];
      return (
        (r[o.name] = s
          ? Object.assign({}, s, o, {
              options: Object.assign({}, s.options, o.options),
              data: Object.assign({}, s.data, o.data),
            })
          : o),
        r
      );
    }, {});
    return Object.keys(n).map(function (r) {
      return n[r];
    });
  }
  var _h = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
  function gh() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return !n.some(function (o) {
      return !(o && typeof o.getBoundingClientRect == 'function');
    });
  }
  function hS(e) {
    e === void 0 && (e = {});
    var n = e,
      r = n.defaultModifiers,
      o = r === void 0 ? [] : r,
      s = n.defaultOptions,
      l = s === void 0 ? _h : s;
    return function (f, d, m) {
      m === void 0 && (m = l);
      var p = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, _h, l),
          modifiersData: {},
          elements: { reference: f, popper: d },
          attributes: {},
          styles: {},
        },
        T = [],
        N = !1,
        b = {
          state: p,
          setOptions: function (S) {
            var V = typeof S == 'function' ? S(p.options) : S;
            C(),
              (p.options = Object.assign({}, l, p.options, V)),
              (p.scrollParents = {
                reference: ti(f) ? Po(f) : f.contextElement ? Po(f.contextElement) : [],
                popper: Po(d),
              });
            var Y = uS(pS([].concat(o, p.options.modifiers)));
            return (
              (p.orderedModifiers = Y.filter(function (_) {
                return _.enabled;
              })),
              R(),
              b.update()
            );
          },
          forceUpdate: function () {
            if (!N) {
              var S = p.elements,
                V = S.reference,
                Y = S.popper;
              if (gh(V, Y)) {
                (p.rects = { reference: cS(V, Mo(Y), p.options.strategy === 'fixed'), popper: Ic(Y) }),
                  (p.reset = !1),
                  (p.placement = p.options.placement),
                  p.orderedModifiers.forEach(function (K) {
                    return (p.modifiersData[K.name] = Object.assign({}, K.data));
                  });
                for (var _ = 0; _ < p.orderedModifiers.length; _++) {
                  if (p.reset === !0) {
                    (p.reset = !1), (_ = -1);
                    continue;
                  }
                  var k = p.orderedModifiers[_],
                    O = k.fn,
                    D = k.options,
                    L = D === void 0 ? {} : D,
                    y = k.name;
                  typeof O == 'function' && (p = O({ state: p, options: L, name: y, instance: b }) || p);
                }
              }
            }
          },
          update: dS(function () {
            return new Promise(function (B) {
              b.forceUpdate(), B(p);
            });
          }),
          destroy: function () {
            C(), (N = !0);
          },
        };
      if (!gh(f, d)) return b;
      b.setOptions(m).then(function (B) {
        !N && m.onFirstUpdate && m.onFirstUpdate(B);
      });
      function R() {
        p.orderedModifiers.forEach(function (B) {
          var S = B.name,
            V = B.options,
            Y = V === void 0 ? {} : V,
            _ = B.effect;
          if (typeof _ == 'function') {
            var k = _({ state: p, name: S, instance: b, options: Y }),
              O = function () {};
            T.push(k || O);
          }
        });
      }
      function C() {
        T.forEach(function (B) {
          return B();
        }),
          (T = []);
      }
      return b;
    };
  }
  var mS = [Py, nS, My, rh, eS, jy, oS, vy, Jy],
    ES = hS({ defaultModifiers: mS }),
    _S = 'tippy-box',
    Th = 'tippy-content',
    gS = 'tippy-backdrop',
    Nh = 'tippy-arrow',
    Ah = 'tippy-svg-arrow',
    ri = { passive: !0, capture: !0 },
    yh = function () {
      return document.body;
    };
  function Vc(e, n, r) {
    if (Array.isArray(e)) {
      var o = e[n];
      return o ?? (Array.isArray(r) ? r[n] : r);
    }
    return e;
  }
  function Mc(e, n) {
    var r = {}.toString.call(e);
    return r.indexOf('[object') === 0 && r.indexOf(n + ']') > -1;
  }
  function Sh(e, n) {
    return typeof e == 'function' ? e.apply(void 0, n) : e;
  }
  function bh(e, n) {
    if (n === 0) return e;
    var r;
    return function (o) {
      clearTimeout(r),
        (r = setTimeout(function () {
          e(o);
        }, n));
    };
  }
  function TS(e, n) {
    var r = Object.assign({}, e);
    return (
      n.forEach(function (o) {
        delete r[o];
      }),
      r
    );
  }
  function NS(e) {
    return e.split(/\s+/).filter(Boolean);
  }
  function ii(e) {
    return [].concat(e);
  }
  function xh(e, n) {
    e.indexOf(n) === -1 && e.push(n);
  }
  function AS(e) {
    return e.filter(function (n, r) {
      return e.indexOf(n) === r;
    });
  }
  function yS(e) {
    return e.split('-')[0];
  }
  function Za(e) {
    return [].slice.call(e);
  }
  function Oh(e) {
    return Object.keys(e).reduce(function (n, r) {
      return e[r] !== void 0 && (n[r] = e[r]), n;
    }, {});
  }
  function Pi() {
    return document.createElement('div');
  }
  function es(e) {
    return ['Element', 'Fragment'].some(function (n) {
      return Mc(e, n);
    });
  }
  function SS(e) {
    return Mc(e, 'NodeList');
  }
  function bS(e) {
    return Mc(e, 'MouseEvent');
  }
  function xS(e) {
    return !!(e && e._tippy && e._tippy.reference === e);
  }
  function OS(e) {
    return es(e) ? [e] : SS(e) ? Za(e) : Array.isArray(e) ? e : Za(document.querySelectorAll(e));
  }
  function Bc(e, n) {
    e.forEach(function (r) {
      r && (r.style.transitionDuration = n + 'ms');
    });
  }
  function Rh(e, n) {
    e.forEach(function (r) {
      r && r.setAttribute('data-state', n);
    });
  }
  function RS(e) {
    var n,
      r = ii(e),
      o = r[0];
    return o != null && (n = o.ownerDocument) != null && n.body ? o.ownerDocument : document;
  }
  function CS(e, n) {
    var r = n.clientX,
      o = n.clientY;
    return e.every(function (s) {
      var l = s.popperRect,
        c = s.popperState,
        f = s.props,
        d = f.interactiveBorder,
        m = yS(c.placement),
        p = c.modifiersData.offset;
      if (!p) return !0;
      var T = m === 'bottom' ? p.top.y : 0,
        N = m === 'top' ? p.bottom.y : 0,
        b = m === 'right' ? p.left.x : 0,
        R = m === 'left' ? p.right.x : 0,
        C = l.top - o + T > d,
        B = o - l.bottom - N > d,
        S = l.left - r + b > d,
        V = r - l.right - R > d;
      return C || B || S || V;
    });
  }
  function Pc(e, n, r) {
    var o = n + 'EventListener';
    ['transitionend', 'webkitTransitionEnd'].forEach(function (s) {
      e[o](s, r);
    });
  }
  function Ch(e, n) {
    for (var r = n; r; ) {
      var o;
      if (e.contains(r)) return !0;
      r = r.getRootNode == null || (o = r.getRootNode()) == null ? void 0 : o.host;
    }
    return !1;
  }
  var jn = { isTouch: !1 },
    Ih = 0;
  function IS() {
    jn.isTouch || ((jn.isTouch = !0), window.performance && document.addEventListener('mousemove', Lh));
  }
  function Lh() {
    var e = performance.now();
    e - Ih < 20 && ((jn.isTouch = !1), document.removeEventListener('mousemove', Lh)), (Ih = e);
  }
  function LS() {
    var e = document.activeElement;
    if (xS(e)) {
      var n = e._tippy;
      e.blur && !n.state.isVisible && e.blur();
    }
  }
  function wS() {
    document.addEventListener('touchstart', IS, ri), window.addEventListener('blur', LS);
  }
  var vS = typeof window < 'u' && typeof document < 'u',
    kS = vS ? !!window.msCrypto : !1,
    DS = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
    VS = {
      allowHTML: !1,
      animation: 'fade',
      arrow: !0,
      content: '',
      inertia: !1,
      maxWidth: 350,
      role: 'tooltip',
      theme: '',
      zIndex: 9999,
    },
    wn = Object.assign(
      {
        appendTo: yh,
        aria: { content: 'auto', expanded: 'auto' },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: '',
        offset: [0, 10],
        onAfterUpdate: function () {},
        onBeforeUpdate: function () {},
        onCreate: function () {},
        onDestroy: function () {},
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        onUntrigger: function () {},
        onClickOutside: function () {},
        placement: 'top',
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: 'mouseenter focus',
        triggerTarget: null,
      },
      DS,
      VS,
    ),
    MS = Object.keys(wn),
    BS = function (n) {
      var r = Object.keys(n);
      r.forEach(function (o) {
        wn[o] = n[o];
      });
    };
  function wh(e) {
    var n = e.plugins || [],
      r = n.reduce(function (o, s) {
        var l = s.name,
          c = s.defaultValue;
        if (l) {
          var f;
          o[l] = e[l] !== void 0 ? e[l] : (f = wn[l]) != null ? f : c;
        }
        return o;
      }, {});
    return Object.assign({}, e, r);
  }
  function PS(e, n) {
    var r = n ? Object.keys(wh(Object.assign({}, wn, { plugins: n }))) : MS,
      o = r.reduce(function (s, l) {
        var c = (e.getAttribute('data-tippy-' + l) || '').trim();
        if (!c) return s;
        if (l === 'content') s[l] = c;
        else
          try {
            s[l] = JSON.parse(c);
          } catch {
            s[l] = c;
          }
        return s;
      }, {});
    return o;
  }
  function vh(e, n) {
    var r = Object.assign({}, n, { content: Sh(n.content, [e]) }, n.ignoreAttributes ? {} : PS(e, n.plugins));
    return (
      (r.aria = Object.assign({}, wn.aria, r.aria)),
      (r.aria = {
        expanded: r.aria.expanded === 'auto' ? n.interactive : r.aria.expanded,
        content: r.aria.content === 'auto' ? (n.interactive ? null : 'describedby') : r.aria.content,
      }),
      r
    );
  }
  var US = function () {
    return 'innerHTML';
  };
  function Uc(e, n) {
    e[US()] = n;
  }
  function kh(e) {
    var n = Pi();
    return e === !0 ? (n.className = Nh) : ((n.className = Ah), es(e) ? n.appendChild(e) : Uc(n, e)), n;
  }
  function Dh(e, n) {
    es(n.content)
      ? (Uc(e, ''), e.appendChild(n.content))
      : typeof n.content != 'function' && (n.allowHTML ? Uc(e, n.content) : (e.textContent = n.content));
  }
  function $c(e) {
    var n = e.firstElementChild,
      r = Za(n.children);
    return {
      box: n,
      content: r.find(function (o) {
        return o.classList.contains(Th);
      }),
      arrow: r.find(function (o) {
        return o.classList.contains(Nh) || o.classList.contains(Ah);
      }),
      backdrop: r.find(function (o) {
        return o.classList.contains(gS);
      }),
    };
  }
  function Vh(e) {
    var n = Pi(),
      r = Pi();
    (r.className = _S), r.setAttribute('data-state', 'hidden'), r.setAttribute('tabindex', '-1');
    var o = Pi();
    (o.className = Th),
      o.setAttribute('data-state', 'hidden'),
      Dh(o, e.props),
      n.appendChild(r),
      r.appendChild(o),
      s(e.props, e.props);
    function s(l, c) {
      var f = $c(n),
        d = f.box,
        m = f.content,
        p = f.arrow;
      c.theme ? d.setAttribute('data-theme', c.theme) : d.removeAttribute('data-theme'),
        typeof c.animation == 'string'
          ? d.setAttribute('data-animation', c.animation)
          : d.removeAttribute('data-animation'),
        c.inertia ? d.setAttribute('data-inertia', '') : d.removeAttribute('data-inertia'),
        (d.style.maxWidth = typeof c.maxWidth == 'number' ? c.maxWidth + 'px' : c.maxWidth),
        c.role ? d.setAttribute('role', c.role) : d.removeAttribute('role'),
        (l.content !== c.content || l.allowHTML !== c.allowHTML) && Dh(m, e.props),
        c.arrow
          ? p
            ? l.arrow !== c.arrow && (d.removeChild(p), d.appendChild(kh(c.arrow)))
            : d.appendChild(kh(c.arrow))
          : p && d.removeChild(p);
    }
    return { popper: n, onUpdate: s };
  }
  Vh.$$tippy = !0;
  var $S = 1,
    ts = [],
    Hc = [];
  function HS(e, n) {
    var r = vh(e, Object.assign({}, wn, wh(Oh(n)))),
      o,
      s,
      l,
      c = !1,
      f = !1,
      d = !1,
      m = !1,
      p,
      T,
      N,
      b = [],
      R = bh(We, r.interactiveDebounce),
      C,
      B = $S++,
      S = null,
      V = AS(r.plugins),
      Y = { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
      _ = {
        id: B,
        reference: e,
        popper: Pi(),
        popperInstance: S,
        props: r,
        state: Y,
        plugins: V,
        clearDelayTimeouts: Ne,
        setProps: Le,
        setContent: Pe,
        show: ut,
        hide: Rt,
        hideWithInteractivity: ur,
        enable: Ot,
        disable: he,
        unmount: dr,
        destroy: ui,
      };
    if (!r.render) return _;
    var k = r.render(_),
      O = k.popper,
      D = k.onUpdate;
    O.setAttribute('data-tippy-root', ''), (O.id = 'tippy-' + _.id), (_.popper = O), (e._tippy = _), (O._tippy = _);
    var L = V.map(function (w) {
        return w.fn(_);
      }),
      y = e.hasAttribute('aria-expanded');
    return (
      xe(),
      fe(),
      z(),
      Q('onCreate', [_]),
      r.showOnCreate && et(),
      O.addEventListener('mouseenter', function () {
        _.props.interactive && _.state.isVisible && _.clearDelayTimeouts();
      }),
      O.addEventListener('mouseleave', function () {
        _.props.interactive && _.props.trigger.indexOf('mouseenter') >= 0 && U().addEventListener('mousemove', R);
      }),
      _
    );
    function K() {
      var w = _.props.touch;
      return Array.isArray(w) ? w : [w, 0];
    }
    function M() {
      return K()[0] === 'hold';
    }
    function H() {
      var w;
      return !!((w = _.props.render) != null && w.$$tippy);
    }
    function q() {
      return C || e;
    }
    function U() {
      var w = q().parentNode;
      return w ? RS(w) : document;
    }
    function ee() {
      return $c(O);
    }
    function I(w) {
      return (_.state.isMounted && !_.state.isVisible) || jn.isTouch || (p && p.type === 'focus')
        ? 0
        : Vc(_.props.delay, w ? 0 : 1, wn.delay);
    }
    function z(w) {
      w === void 0 && (w = !1),
        (O.style.pointerEvents = _.props.interactive && !w ? '' : 'none'),
        (O.style.zIndex = '' + _.props.zIndex);
    }
    function Q(w, re, ue) {
      if (
        (ue === void 0 && (ue = !0),
        L.forEach(function (ge) {
          ge[w] && ge[w].apply(ge, re);
        }),
        ue)
      ) {
        var Oe;
        (Oe = _.props)[w].apply(Oe, re);
      }
    }
    function oe() {
      var w = _.props.aria;
      if (w.content) {
        var re = 'aria-' + w.content,
          ue = O.id,
          Oe = ii(_.props.triggerTarget || e);
        Oe.forEach(function (ge) {
          var Je = ge.getAttribute(re);
          if (_.state.isVisible) ge.setAttribute(re, Je ? Je + ' ' + ue : ue);
          else {
            var it = Je && Je.replace(ue, '').trim();
            it ? ge.setAttribute(re, it) : ge.removeAttribute(re);
          }
        });
      }
    }
    function fe() {
      if (!(y || !_.props.aria.expanded)) {
        var w = ii(_.props.triggerTarget || e);
        w.forEach(function (re) {
          _.props.interactive
            ? re.setAttribute('aria-expanded', _.state.isVisible && re === q() ? 'true' : 'false')
            : re.removeAttribute('aria-expanded');
        });
      }
    }
    function ne() {
      U().removeEventListener('mousemove', R),
        (ts = ts.filter(function (w) {
          return w !== R;
        }));
    }
    function te(w) {
      if (!(jn.isTouch && (d || w.type === 'mousedown'))) {
        var re = (w.composedPath && w.composedPath()[0]) || w.target;
        if (!(_.props.interactive && Ch(O, re))) {
          if (
            ii(_.props.triggerTarget || e).some(function (ue) {
              return Ch(ue, re);
            })
          ) {
            if (jn.isTouch || (_.state.isVisible && _.props.trigger.indexOf('click') >= 0)) return;
          } else Q('onClickOutside', [_, w]);
          _.props.hideOnClick === !0 &&
            (_.clearDelayTimeouts(),
            _.hide(),
            (f = !0),
            setTimeout(function () {
              f = !1;
            }),
            _.state.isMounted || Z());
        }
      }
    }
    function de() {
      d = !0;
    }
    function j() {
      d = !1;
    }
    function X() {
      var w = U();
      w.addEventListener('mousedown', te, !0),
        w.addEventListener('touchend', te, ri),
        w.addEventListener('touchstart', j, ri),
        w.addEventListener('touchmove', de, ri);
    }
    function Z() {
      var w = U();
      w.removeEventListener('mousedown', te, !0),
        w.removeEventListener('touchend', te, ri),
        w.removeEventListener('touchstart', j, ri),
        w.removeEventListener('touchmove', de, ri);
    }
    function pe(w, re) {
      me(w, function () {
        !_.state.isVisible && O.parentNode && O.parentNode.contains(O) && re();
      });
    }
    function le(w, re) {
      me(w, re);
    }
    function me(w, re) {
      var ue = ee().box;
      function Oe(ge) {
        ge.target === ue && (Pc(ue, 'remove', Oe), re());
      }
      if (w === 0) return re();
      Pc(ue, 'remove', T), Pc(ue, 'add', Oe), (T = Oe);
    }
    function ye(w, re, ue) {
      ue === void 0 && (ue = !1);
      var Oe = ii(_.props.triggerTarget || e);
      Oe.forEach(function (ge) {
        ge.addEventListener(w, re, ue), b.push({ node: ge, eventType: w, handler: re, options: ue });
      });
    }
    function xe() {
      M() && (ye('touchstart', Fe, { passive: !0 }), ye('touchend', Tt, { passive: !0 })),
        NS(_.props.trigger).forEach(function (w) {
          if (w !== 'manual')
            switch ((ye(w, Fe), w)) {
              case 'mouseenter':
                ye('mouseleave', Tt);
                break;
              case 'focus':
                ye(kS ? 'focusout' : 'blur', Nt);
                break;
              case 'focusin':
                ye('focusout', Nt);
                break;
            }
        });
    }
    function Be() {
      b.forEach(function (w) {
        var re = w.node,
          ue = w.eventType,
          Oe = w.handler,
          ge = w.options;
        re.removeEventListener(ue, Oe, ge);
      }),
        (b = []);
    }
    function Fe(w) {
      var re,
        ue = !1;
      if (!(!_.state.isEnabled || G(w) || f)) {
        var Oe = ((re = p) == null ? void 0 : re.type) === 'focus';
        (p = w),
          (C = w.currentTarget),
          fe(),
          !_.state.isVisible &&
            bS(w) &&
            ts.forEach(function (ge) {
              return ge(w);
            }),
          w.type === 'click' &&
          (_.props.trigger.indexOf('mouseenter') < 0 || c) &&
          _.props.hideOnClick !== !1 &&
          _.state.isVisible
            ? (ue = !0)
            : et(w),
          w.type === 'click' && (c = !ue),
          ue && !Oe && ft(w);
      }
    }
    function We(w) {
      var re = w.target,
        ue = q().contains(re) || O.contains(re);
      if (!(w.type === 'mousemove' && ue)) {
        var Oe = $e()
          .concat(O)
          .map(function (ge) {
            var Je,
              it = ge._tippy,
              kt = (Je = it.popperInstance) == null ? void 0 : Je.state;
            return kt ? { popperRect: ge.getBoundingClientRect(), popperState: kt, props: r } : null;
          })
          .filter(Boolean);
        CS(Oe, w) && (ne(), ft(w));
      }
    }
    function Tt(w) {
      var re = G(w) || (_.props.trigger.indexOf('click') >= 0 && c);
      if (!re) {
        if (_.props.interactive) {
          _.hideWithInteractivity(w);
          return;
        }
        ft(w);
      }
    }
    function Nt(w) {
      (_.props.trigger.indexOf('focusin') < 0 && w.target !== q()) ||
        (_.props.interactive && w.relatedTarget && O.contains(w.relatedTarget)) ||
        ft(w);
    }
    function G(w) {
      return jn.isTouch ? M() !== w.type.indexOf('touch') >= 0 : !1;
    }
    function _e() {
      ve();
      var w = _.props,
        re = w.popperOptions,
        ue = w.placement,
        Oe = w.offset,
        ge = w.getReferenceClientRect,
        Je = w.moveTransition,
        it = H() ? $c(O).arrow : null,
        kt = ge ? { getBoundingClientRect: ge, contextElement: ge.contextElement || q() } : e,
        vr = {
          name: '$$tippy',
          enabled: !0,
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: function (Vn) {
            var Bt = Vn.state;
            if (H()) {
              var Xi = ee(),
                hr = Xi.box;
              ['placement', 'reference-hidden', 'escaped'].forEach(function (Mn) {
                Mn === 'placement'
                  ? hr.setAttribute('data-placement', Bt.placement)
                  : Bt.attributes.popper['data-popper-' + Mn]
                    ? hr.setAttribute('data-' + Mn, '')
                    : hr.removeAttribute('data-' + Mn);
              }),
                (Bt.attributes.popper = {});
            }
          },
        },
        Ct = [
          { name: 'offset', options: { offset: Oe } },
          { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
          { name: 'flip', options: { padding: 5 } },
          { name: 'computeStyles', options: { adaptive: !Je } },
          vr,
        ];
      H() && it && Ct.push({ name: 'arrow', options: { element: it, padding: 3 } }),
        Ct.push.apply(Ct, (re == null ? void 0 : re.modifiers) || []),
        (_.popperInstance = ES(kt, O, Object.assign({}, re, { placement: ue, onFirstUpdate: N, modifiers: Ct })));
    }
    function ve() {
      _.popperInstance && (_.popperInstance.destroy(), (_.popperInstance = null));
    }
    function Se() {
      var w = _.props.appendTo,
        re,
        ue = q();
      (_.props.interactive && w === yh) || w === 'parent' ? (re = ue.parentNode) : (re = Sh(w, [ue])),
        re.contains(O) || re.appendChild(O),
        (_.state.isMounted = !0),
        _e();
    }
    function $e() {
      return Za(O.querySelectorAll('[data-tippy-root]'));
    }
    function et(w) {
      _.clearDelayTimeouts(), w && Q('onTrigger', [_, w]), X();
      var re = I(!0),
        ue = K(),
        Oe = ue[0],
        ge = ue[1];
      jn.isTouch && Oe === 'hold' && ge && (re = ge),
        re
          ? (o = setTimeout(function () {
              _.show();
            }, re))
          : _.show();
    }
    function ft(w) {
      if ((_.clearDelayTimeouts(), Q('onUntrigger', [_, w]), !_.state.isVisible)) {
        Z();
        return;
      }
      if (
        !(
          _.props.trigger.indexOf('mouseenter') >= 0 &&
          _.props.trigger.indexOf('click') >= 0 &&
          ['mouseleave', 'mousemove'].indexOf(w.type) >= 0 &&
          c
        )
      ) {
        var re = I(!1);
        re
          ? (s = setTimeout(function () {
              _.state.isVisible && _.hide();
            }, re))
          : (l = requestAnimationFrame(function () {
              _.hide();
            }));
      }
    }
    function Ot() {
      _.state.isEnabled = !0;
    }
    function he() {
      _.hide(), (_.state.isEnabled = !1);
    }
    function Ne() {
      clearTimeout(o), clearTimeout(s), cancelAnimationFrame(l);
    }
    function Le(w) {
      if (!_.state.isDestroyed) {
        Q('onBeforeUpdate', [_, w]), Be();
        var re = _.props,
          ue = vh(e, Object.assign({}, re, Oh(w), { ignoreAttributes: !0 }));
        (_.props = ue),
          xe(),
          re.interactiveDebounce !== ue.interactiveDebounce && (ne(), (R = bh(We, ue.interactiveDebounce))),
          re.triggerTarget && !ue.triggerTarget
            ? ii(re.triggerTarget).forEach(function (Oe) {
                Oe.removeAttribute('aria-expanded');
              })
            : ue.triggerTarget && e.removeAttribute('aria-expanded'),
          fe(),
          z(),
          D && D(re, ue),
          _.popperInstance &&
            (_e(),
            $e().forEach(function (Oe) {
              requestAnimationFrame(Oe._tippy.popperInstance.forceUpdate);
            })),
          Q('onAfterUpdate', [_, w]);
      }
    }
    function Pe(w) {
      _.setProps({ content: w });
    }
    function ut() {
      var w = _.state.isVisible,
        re = _.state.isDestroyed,
        ue = !_.state.isEnabled,
        Oe = jn.isTouch && !_.props.touch,
        ge = Vc(_.props.duration, 0, wn.duration);
      if (!(w || re || ue || Oe) && !q().hasAttribute('disabled') && (Q('onShow', [_], !1), _.props.onShow(_) !== !1)) {
        if (
          ((_.state.isVisible = !0),
          H() && (O.style.visibility = 'visible'),
          z(),
          X(),
          _.state.isMounted || (O.style.transition = 'none'),
          H())
        ) {
          var Je = ee(),
            it = Je.box,
            kt = Je.content;
          Bc([it, kt], 0);
        }
        (N = function () {
          var Ct;
          if (!(!_.state.isVisible || m)) {
            if (((m = !0), O.offsetHeight, (O.style.transition = _.props.moveTransition), H() && _.props.animation)) {
              var pr = ee(),
                Vn = pr.box,
                Bt = pr.content;
              Bc([Vn, Bt], ge), Rh([Vn, Bt], 'visible');
            }
            oe(),
              fe(),
              xh(Hc, _),
              (Ct = _.popperInstance) == null || Ct.forceUpdate(),
              Q('onMount', [_]),
              _.props.animation &&
                H() &&
                le(ge, function () {
                  (_.state.isShown = !0), Q('onShown', [_]);
                });
          }
        }),
          Se();
      }
    }
    function Rt() {
      var w = !_.state.isVisible,
        re = _.state.isDestroyed,
        ue = !_.state.isEnabled,
        Oe = Vc(_.props.duration, 1, wn.duration);
      if (!(w || re || ue) && (Q('onHide', [_], !1), _.props.onHide(_) !== !1)) {
        if (
          ((_.state.isVisible = !1),
          (_.state.isShown = !1),
          (m = !1),
          (c = !1),
          H() && (O.style.visibility = 'hidden'),
          ne(),
          Z(),
          z(!0),
          H())
        ) {
          var ge = ee(),
            Je = ge.box,
            it = ge.content;
          _.props.animation && (Bc([Je, it], Oe), Rh([Je, it], 'hidden'));
        }
        oe(), fe(), _.props.animation ? H() && pe(Oe, _.unmount) : _.unmount();
      }
    }
    function ur(w) {
      U().addEventListener('mousemove', R), xh(ts, R), R(w);
    }
    function dr() {
      _.state.isVisible && _.hide(),
        _.state.isMounted &&
          (ve(),
          $e().forEach(function (w) {
            w._tippy.unmount();
          }),
          O.parentNode && O.parentNode.removeChild(O),
          (Hc = Hc.filter(function (w) {
            return w !== _;
          })),
          (_.state.isMounted = !1),
          Q('onHidden', [_]));
    }
    function ui() {
      _.state.isDestroyed ||
        (_.clearDelayTimeouts(), _.unmount(), Be(), delete e._tippy, (_.state.isDestroyed = !0), Q('onDestroy', [_]));
    }
  }
  function Ui(e, n) {
    n === void 0 && (n = {});
    var r = wn.plugins.concat(n.plugins || []);
    wS();
    var o = Object.assign({}, n, { plugins: r }),
      s = OS(e),
      l = s.reduce(function (c, f) {
        var d = f && HS(f, o);
        return d && c.push(d), c;
      }, []);
    return es(e) ? l[0] : l;
  }
  (Ui.defaultProps = wn), (Ui.setDefaultProps = BS), (Ui.currentInput = jn);
  var FS = Object.assign({}, rh, {
      effect: function (n) {
        var r = n.state,
          o = {
            popper: { position: r.options.strategy, left: '0', top: '0', margin: '0' },
            arrow: { position: 'absolute' },
            reference: {},
          };
        Object.assign(r.elements.popper.style, o.popper),
          (r.styles = o),
          r.elements.arrow && Object.assign(r.elements.arrow.style, o.arrow);
      },
    }),
    WS = function (n, r) {
      var o;
      r === void 0 && (r = {});
      var s = n,
        l = [],
        c = [],
        f,
        d = r.overrides,
        m = [],
        p = !1;
      function T() {
        c = s
          .map(function (_) {
            return ii(_.props.triggerTarget || _.reference);
          })
          .reduce(function (_, k) {
            return _.concat(k);
          }, []);
      }
      function N() {
        l = s.map(function (_) {
          return _.reference;
        });
      }
      function b(_) {
        s.forEach(function (k) {
          _ ? k.enable() : k.disable();
        });
      }
      function R(_) {
        return s.map(function (k) {
          var O = k.setProps;
          return (
            (k.setProps = function (D) {
              O(D), k.reference === f && _.setProps(D);
            }),
            function () {
              k.setProps = O;
            }
          );
        });
      }
      function C(_, k) {
        var O = c.indexOf(k);
        if (k !== f) {
          f = k;
          var D = (d || []).concat('content').reduce(function (L, y) {
            return (L[y] = s[O].props[y]), L;
          }, {});
          _.setProps(
            Object.assign({}, D, {
              getReferenceClientRect:
                typeof D.getReferenceClientRect == 'function'
                  ? D.getReferenceClientRect
                  : function () {
                      var L;
                      return (L = l[O]) == null ? void 0 : L.getBoundingClientRect();
                    },
            }),
          );
        }
      }
      b(!1), N(), T();
      var B = {
          fn: function () {
            return {
              onDestroy: function () {
                b(!0);
              },
              onHidden: function () {
                f = null;
              },
              onClickOutside: function (O) {
                O.props.showOnCreate && !p && ((p = !0), (f = null));
              },
              onShow: function (O) {
                O.props.showOnCreate && !p && ((p = !0), C(O, l[0]));
              },
              onTrigger: function (O, D) {
                C(O, D.currentTarget);
              },
            };
          },
        },
        S = Ui(
          Pi(),
          Object.assign({}, TS(r, ['overrides']), {
            plugins: [B].concat(r.plugins || []),
            triggerTarget: c,
            popperOptions: Object.assign({}, r.popperOptions, {
              modifiers: [].concat(((o = r.popperOptions) == null ? void 0 : o.modifiers) || [], [FS]),
            }),
          }),
        ),
        V = S.show;
      (S.show = function (_) {
        if ((V(), !f && _ == null)) return C(S, l[0]);
        if (!(f && _ == null)) {
          if (typeof _ == 'number') return l[_] && C(S, l[_]);
          if (s.indexOf(_) >= 0) {
            var k = _.reference;
            return C(S, k);
          }
          if (l.indexOf(_) >= 0) return C(S, _);
        }
      }),
        (S.showNext = function () {
          var _ = l[0];
          if (!f) return S.show(0);
          var k = l.indexOf(f);
          S.show(l[k + 1] || _);
        }),
        (S.showPrevious = function () {
          var _ = l[l.length - 1];
          if (!f) return S.show(_);
          var k = l.indexOf(f),
            O = l[k - 1] || _;
          S.show(O);
        });
      var Y = S.setProps;
      return (
        (S.setProps = function (_) {
          (d = _.overrides || d), Y(_);
        }),
        (S.setInstances = function (_) {
          b(!0),
            m.forEach(function (k) {
              return k();
            }),
            (s = _),
            b(!1),
            N(),
            T(),
            (m = R(S)),
            S.setProps({ triggerTarget: c });
        }),
        (m = R(S)),
        S
      );
    };
  Ui.setDefaultProps({ render: Vh });
  const zS = { class: 'diagram' },
    XS = { class: 'flex-shrink-0' },
    GS = { class: 'text-center my-1' },
    YS = { class: 'btn-group btn-group-xs' },
    KS = { key: 0, class: 'text-center my-1' },
    jS = { class: 'btn-group btn-group-xs' },
    qS = ['disabled'],
    JS = ['disabled'],
    QS = ['disabled'],
    ZS = { class: 'legend text-center' },
    eb = { key: 0, class: 'list-unstyled list-inline mb-0' },
    tb = { key: 0, class: 'list-inline-item' },
    nb = t.createElementVNode('span', { class: 'bg-hit rounded' }, null, -1),
    rb = t.createElementVNode(
      'li',
      { class: 'list-inline-item' },
      [
        t.createElementVNode('span', { class: 'bg-read' }),
        t.createTextVNode(`
            Read
          `),
      ],
      -1,
    ),
    ib = { key: 1, class: 'list-inline-item' },
    ob = t.createElementVNode('span', { class: 'bg-dirtied' }, null, -1),
    ab = t.createElementVNode(
      'li',
      { class: 'list-inline-item' },
      [
        t.createElementVNode('span', { class: 'bg-written' }),
        t.createTextVNode(`
            Written
          `),
      ],
      -1,
    ),
    sb = t.createStaticVNode(
      `<ul class="list-unstyled list-inline mb-0 d-inline-block"><li class="list-inline-item"><span class="bg-read"></span>
              Read
            </li> <li class="list-inline-item"><span class="bg-written"></span>
              Write
            </li></ul>`,
      1,
    ),
    lb = { key: 0 },
    cb = [t.createElementVNode('th', { colspan: '3', class: 'subplan' }, 'Main Query Plan', -1)],
    fb = { key: 0 },
    ub = t.createElementVNode('td', null, null, -1),
    db = ['colspan'],
    pb = { class: 'tree-lines' },
    hb = ['onClick'],
    mb = { key: 1, class: 'p-2 text-center text-secondary' },
    Eb = [t.createElementVNode('em', null, ' No data available ', -1)],
    _b = t.defineComponent({
      __name: 'Diagram',
      setup(e) {
        const r = new Io().getHelpMessage,
          o = t.inject(xn),
          s = t.ref(null),
          l = t.inject(Fr);
        if (!l) throw new Error(`Could not resolve ${Fr.description}`);
        const c = t.inject(ha);
        let f = [[]],
          d = [],
          m;
        const p = t.reactive({ metric: Ze.time, buffersMetric: Me.shared });
        t.onBeforeMount(() => {
          const S = localStorage.getItem('diagramViewOptions');
          S && $.assignIn(p, JSON.parse(S)),
            b(f[0], 0, o.value.content.Plan, !0, []),
            $.each(o.value.ctes, Y => {
              const _ = [];
              b(_, 0, Y, !0, []), f.push(_);
            });
          const V = $.keys(o.value.planStats.maxBlocks);
          $.indexOf(V, p.buffersMetric) === -1 && (p.buffersMetric = $.min(V));
        }),
          t.onMounted(() => {
            N();
          }),
          t.watch(p, T);
        function T() {
          localStorage.setItem('diagramViewOptions', JSON.stringify(p)), t.nextTick(N);
        }
        function N() {
          m && m.destroy(),
            $.each(d, S => {
              S.destroy();
            }),
            (d = Ui('.diagram tr.node')),
            (m = WS(d, { delay: 100, allowHTML: !0 }));
        }
        function b(S, V, Y, _, k) {
          S.push([V, Y, _, $.concat([], k)]),
            _ || k.push(V),
            $.each(Y.Plans, O => {
              b(S, V + 1, O, O === $.last(Y.Plans), k);
            }),
            _ || k.pop();
        }
        const R = t.computed(() => (p.metric === Ze.buffers ? !!p.buffersMetric : !0));
        function C(S) {
          return $.startsWith(S[E.SUBPLAN_NAME], 'CTE');
        }
        function B(S) {
          s.value && wN(s.value, S, !1);
        }
        return (
          t.provide('scrollTo', B),
          (S, V) => {
            var Y, _, k;
            return (
              t.openBlock(),
              t.createElementBlock('div', zS, [
                t.createElementVNode('div', XS, [
                  t.createElementVNode('div', GS, [
                    t.createElementVNode('div', YS, [
                      t.createElementVNode(
                        'button',
                        {
                          class: t.normalizeClass([
                            'btn btn-outline-secondary',
                            { active: p.metric === t.unref(Ze).time },
                          ]),
                          onClick: V[0] || (V[0] = O => (p.metric = t.unref(Ze).time)),
                        },
                        `
            time
          `,
                        2,
                      ),
                      t.createTextVNode(),
                      t.createElementVNode(
                        'button',
                        {
                          class: t.normalizeClass([
                            'btn btn-outline-secondary',
                            { active: p.metric === t.unref(Ze).rows },
                          ]),
                          onClick: V[1] || (V[1] = O => (p.metric = t.unref(Ze).rows)),
                        },
                        `
            rows
          `,
                        2,
                      ),
                      t.createTextVNode(),
                      t.createElementVNode(
                        'button',
                        {
                          class: t.normalizeClass([
                            'btn btn-outline-secondary',
                            { active: p.metric === t.unref(Ze).estimate_factor },
                          ]),
                          onClick: V[2] || (V[2] = O => (p.metric = t.unref(Ze).estimate_factor)),
                        },
                        `
            estimation
          `,
                        2,
                      ),
                      t.createTextVNode(),
                      t.createElementVNode(
                        'button',
                        {
                          class: t.normalizeClass([
                            'btn btn-outline-secondary',
                            { active: p.metric === t.unref(Ze).cost },
                          ]),
                          onClick: V[3] || (V[3] = O => (p.metric = t.unref(Ze).cost)),
                        },
                        `
            cost
          `,
                        2,
                      ),
                      t.createTextVNode(),
                      t.createElementVNode(
                        'button',
                        {
                          class: t.normalizeClass([
                            'btn btn-outline-secondary',
                            { active: p.metric === t.unref(Ze).buffers },
                          ]),
                          onClick: V[4] || (V[4] = O => (p.metric = t.unref(Ze).buffers)),
                        },
                        `
            buffers
          `,
                        2,
                      ),
                      t.createTextVNode(),
                      t.createElementVNode(
                        'button',
                        {
                          class: t.normalizeClass([
                            'btn btn-outline-secondary',
                            { active: p.metric === t.unref(Ze).io },
                          ]),
                          onClick: V[5] || (V[5] = O => (p.metric = t.unref(Ze).io)),
                        },
                        `
            IO
          `,
                        2,
                      ),
                    ]),
                  ]),
                  t.createTextVNode(),
                  p.metric == t.unref(Ze).buffers
                    ? (t.openBlock(),
                      t.createElementBlock('div', KS, [
                        t.createElementVNode('div', jS, [
                          t.createElementVNode(
                            'button',
                            {
                              class: t.normalizeClass([
                                'btn btn-outline-secondary',
                                { active: p.buffersMetric === t.unref(Me).shared },
                              ]),
                              onClick: V[6] || (V[6] = O => (p.buffersMetric = t.unref(Me).shared)),
                              disabled: !((Y = t.unref(o).planStats.maxBlocks) != null && Y[t.unref(Me).shared]),
                            },
                            `
            shared
          `,
                            10,
                            qS,
                          ),
                          t.createTextVNode(),
                          t.createElementVNode(
                            'button',
                            {
                              class: t.normalizeClass([
                                'btn btn-outline-secondary',
                                { active: p.buffersMetric === t.unref(Me).temp },
                              ]),
                              onClick: V[7] || (V[7] = O => (p.buffersMetric = t.unref(Me).temp)),
                              disabled: !((_ = t.unref(o).planStats.maxBlocks) != null && _[t.unref(Me).temp]),
                            },
                            `
            temp
          `,
                            10,
                            JS,
                          ),
                          t.createTextVNode(),
                          t.createElementVNode(
                            'button',
                            {
                              class: t.normalizeClass([
                                'btn btn-outline-secondary',
                                { active: p.buffersMetric === t.unref(Me).local },
                              ]),
                              onClick: V[8] || (V[8] = O => (p.buffersMetric = t.unref(Me).local)),
                              disabled: !((k = t.unref(o).planStats.maxBlocks) != null && k[t.unref(Me).local]),
                            },
                            `
            local
          `,
                            10,
                            QS,
                          ),
                        ]),
                      ]))
                    : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.createElementVNode('div', ZS, [
                    p.metric == t.unref(Ze).buffers
                      ? (t.openBlock(),
                        t.createElementBlock('ul', eb, [
                          p.buffersMetric != t.unref(Me).temp
                            ? (t.openBlock(),
                              t.createElementBlock('li', tb, [
                                nb,
                                t.createTextVNode(`
            Hit
          `),
                              ]))
                            : t.createCommentVNode('', !0),
                          t.createTextVNode(),
                          rb,
                          t.createTextVNode(),
                          p.buffersMetric != t.unref(Me).temp
                            ? (t.openBlock(),
                              t.createElementBlock('li', ib, [
                                ob,
                                t.createTextVNode(`
            Dirtied
          `),
                              ]))
                            : t.createCommentVNode('', !0),
                          t.createTextVNode(),
                          ab,
                        ]))
                      : t.createCommentVNode('', !0),
                    t.createTextVNode(),
                    p.metric == t.unref(Ze).io
                      ? (t.openBlock(),
                        t.createElementBlock(
                          t.Fragment,
                          { key: 1 },
                          [
                            sb,
                            t.createTextVNode(),
                            t.withDirectives(
                              t.createVNode(
                                t.unref(qe),
                                { icon: t.unref(Ro), class: 'cursor-help d-inline-block text-secondary' },
                                null,
                                8,
                                ['icon'],
                              ),
                              [[t.unref(Qe), { content: t.unref(r)('hint track_io_timing'), allowHTML: !0 }]],
                            ),
                          ],
                          64,
                        ))
                      : t.createCommentVNode('', !0),
                  ]),
                ]),
                t.createTextVNode(),
                t.createElementVNode(
                  'div',
                  { class: 'overflow-auto flex-grow-1', ref_key: 'container', ref: s },
                  [
                    t.unref(R)
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'table',
                          { key: 0, class: t.normalizeClass(['m-1', { highlight: !!t.unref(c) }]) },
                          [
                            (t.openBlock(!0),
                            t.createElementBlock(
                              t.Fragment,
                              null,
                              t.renderList(
                                t.unref(f),
                                (O, D) => (
                                  t.openBlock(),
                                  t.createElementBlock('tbody', { key: D }, [
                                    D === 0 && t.unref(f).length > 1
                                      ? (t.openBlock(), t.createElementBlock('tr', lb, cb))
                                      : t.createCommentVNode('', !0),
                                    t.createTextVNode(),
                                    (t.openBlock(!0),
                                    t.createElementBlock(
                                      t.Fragment,
                                      null,
                                      t.renderList(
                                        O,
                                        (L, y) => (
                                          t.openBlock(),
                                          t.createElementBlock(
                                            t.Fragment,
                                            { key: y },
                                            [
                                              L[1][t.unref(E).SUBPLAN_NAME]
                                                ? (t.openBlock(),
                                                  t.createElementBlock('tr', fb, [
                                                    ub,
                                                    t.createTextVNode(),
                                                    t.createElementVNode(
                                                      'td',
                                                      {
                                                        class: t.normalizeClass([
                                                          'subplan pe-2',
                                                          { 'fw-bold': C(L[1]) },
                                                        ]),
                                                        colspan: C(L[1]) ? 3 : 2,
                                                      },
                                                      [
                                                        t.createElementVNode('span', pb, [
                                                          (t.openBlock(!0),
                                                          t.createElementBlock(
                                                            t.Fragment,
                                                            null,
                                                            t.renderList(
                                                              t.unref($).range(L[0]),
                                                              K => (
                                                                t.openBlock(),
                                                                t.createElementBlock(
                                                                  t.Fragment,
                                                                  null,
                                                                  [
                                                                    t.unref($).indexOf(L[3], K) != -1
                                                                      ? (t.openBlock(),
                                                                        t.createElementBlock(
                                                                          t.Fragment,
                                                                          { key: 0 },
                                                                          [t.createTextVNode('│')],
                                                                          64,
                                                                        ))
                                                                      : K !== 0
                                                                        ? (t.openBlock(),
                                                                          t.createElementBlock(
                                                                            t.Fragment,
                                                                            { key: 1 },
                                                                            [t.createTextVNode(' ')],
                                                                            64,
                                                                          ))
                                                                        : t.createCommentVNode('', !0),
                                                                  ],
                                                                  64,
                                                                )
                                                              ),
                                                            ),
                                                            256,
                                                          )),
                                                          y !== 0
                                                            ? (t.openBlock(),
                                                              t.createElementBlock(
                                                                t.Fragment,
                                                                { key: 0 },
                                                                [
                                                                  t.createTextVNode(
                                                                    t.toDisplayString(L[2] ? '└' : '├'),
                                                                    1,
                                                                  ),
                                                                ],
                                                                64,
                                                              ))
                                                            : t.createCommentVNode('', !0),
                                                        ]),
                                                        t.createTextVNode(),
                                                        t.createElementVNode(
                                                          'a',
                                                          {
                                                            class: 'fst-italic text-reset',
                                                            href: '',
                                                            onClick: t.withModifiers(
                                                              K => t.unref(l)(L[1].nodeId, !0),
                                                              ['prevent'],
                                                            ),
                                                          },
                                                          t.toDisplayString(L[1][t.unref(E).SUBPLAN_NAME]),
                                                          9,
                                                          hb,
                                                        ),
                                                      ],
                                                      10,
                                                      db,
                                                    ),
                                                  ]))
                                                : t.createCommentVNode('', !0),
                                              t.createTextVNode(),
                                              t.createVNode(
                                                uy,
                                                {
                                                  node: L[1],
                                                  isSubplan: !!L[1][t.unref(E).SUBPLAN_NAME],
                                                  isLastChild: !!L[2],
                                                  level: L[0],
                                                  branches: L[3],
                                                  index: y,
                                                  viewOptions: p,
                                                },
                                                null,
                                                8,
                                                [
                                                  'node',
                                                  'isSubplan',
                                                  'isLastChild',
                                                  'level',
                                                  'branches',
                                                  'index',
                                                  'viewOptions',
                                                ],
                                              ),
                                            ],
                                            64,
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ])
                                ),
                              ),
                              128,
                            )),
                          ],
                          2,
                        ))
                      : (t.openBlock(), t.createElementBlock('div', mb, Eb)),
                  ],
                  512,
                ),
              ])
            );
          }
        );
      },
    }),
    gb = { class: 'grid-progress progress rounded-0 bg-transparent' },
    Mt = t.defineComponent({
      __name: 'GridProgressBar',
      props: { percentage: null, percentage2: null },
      setup(e) {
        return (n, r) => (
          t.openBlock(),
          t.createElementBlock('div', gb, [
            t.createElementVNode(
              'div',
              {
                class: t.normalizeClass([
                  'bg-secondary border-secondary opacity-50',
                  { 'border-start': e.percentage > 0 },
                ]),
                style: t.normalizeStyle({ width: e.percentage + '%' }),
              },
              null,
              6,
            ),
            t.createTextVNode(),
            e.percentage2
              ? (t.openBlock(),
                t.createElementBlock(
                  'div',
                  {
                    key: 0,
                    class: t.normalizeClass([
                      'bg-secondary border-secondary opacity-20',
                      { 'border-start': e.percentage2 > 0 },
                    ]),
                    style: t.normalizeStyle({ width: e.percentage2 + '%' }),
                  },
                  null,
                  6,
                ))
              : t.createCommentVNode('', !0),
          ])
        );
      },
    }),
    Tb = t.createElementVNode('b', null, 'Workers planned: ', -1),
    Nb = { class: 'px-1' },
    Ab = { key: 0, class: 'text-warning' },
    yb = t.createElementVNode('b', null, 'Workers launched: ', -1),
    Sb = { class: 'px-1' },
    bb = { key: 0, class: 'text-secondary' },
    xb = { class: 'card-header' },
    Ob = { class: 'list-group list-group-flush' },
    Rb = { key: 0, class: 'list-group-item d-flex flex-row' },
    Cb = { class: 'col-6' },
    Ib = ['innerHTML'],
    Mh = t.defineComponent({
      __name: 'WorkersDetail',
      props: { node: null },
      setup(e) {
        const n = e,
          r = t.reactive(n.node),
          o = t.inject(xn),
          s = t.inject(Wr),
          c = new Io().getHelpMessage,
          { workersLaunchedCount: f } = ki(o, r, s);
        return (d, m) => (
          t.openBlock(),
          t.createElementBlock(
            t.Fragment,
            null,
            [
              t.createElementVNode('div', null, [
                Tb,
                t.createTextVNode(),
                t.createElementVNode(
                  'span',
                  Nb,
                  t.toDisplayString(r[t.unref(E).WORKERS_PLANNED] || r[t.unref(E).WORKERS_PLANNED_BY_GATHER]),
                  1,
                ),
                t.createTextVNode(),
                !r[t.unref(E).WORKERS_PLANNED] &&
                !r[t.unref(E).WORKERS] &&
                (!t.unref(o).isVerbose || !t.unref(o).isAnalyze)
                  ? (t.openBlock(),
                    t.createElementBlock('em', Ab, [
                      t.withDirectives(
                        t.createVNode(t.unref(qe), { icon: t.unref(Ip), class: 'cursor-help' }, null, 8, ['icon']),
                        [[t.unref(Qe), t.unref(c)('fuzzy needs verbose')]],
                      ),
                    ]))
                  : t.createCommentVNode('', !0),
              ]),
              t.createTextVNode(),
              t.createElementVNode('div', null, [
                yb,
                t.createTextVNode(),
                t.createElementVNode('span', Sb, t.toDisplayString(t.unref(f)), 1),
              ]),
              t.createTextVNode(),
              !t.unref(f) && r[t.unref(E).WORKERS_PLANNED_BY_GATHER]
                ? (t.openBlock(),
                  t.createElementBlock('div', bb, [
                    t.createElementVNode('em', null, [
                      t.createTextVNode(`
      Detailed information is not available.
      `),
                      t.withDirectives(
                        t.createVNode(t.unref(qe), { icon: t.unref(Ip), class: 'cursor-help' }, null, 8, ['icon']),
                        [[t.unref(Qe), t.unref(c)('workers detailed info missing')]],
                      ),
                    ]),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              t.unref($).isArray(r[t.unref(E).WORKERS])
                ? (t.openBlock(),
                  t.createElementBlock(
                    'div',
                    {
                      key: 1,
                      class: 'overflow-auto',
                      style: { 'max-height': '300px' },
                      onWheel: m[0] || (m[0] = t.withModifiers(() => {}, ['stop'])),
                    },
                    [
                      (t.openBlock(!0),
                      t.createElementBlock(
                        t.Fragment,
                        null,
                        t.renderList(
                          r[t.unref(E).WORKERS],
                          (p, T) => (
                            t.openBlock(),
                            t.createElementBlock('div', { key: T, class: 'card mt-2' }, [
                              t.createElementVNode('div', xb, [
                                t.createElementVNode(
                                  'b',
                                  null,
                                  'Worker ' + t.toDisplayString(p[t.unref(Co).WORKER_NUMBER]),
                                  1,
                                ),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode('ul', Ob, [
                                (t.openBlock(!0),
                                t.createElementBlock(
                                  t.Fragment,
                                  null,
                                  t.renderList(
                                    p,
                                    (N, b) => (
                                      t.openBlock(),
                                      t.createElementBlock(
                                        t.Fragment,
                                        { key: b },
                                        [
                                          t.unref(Dp)(b, N)
                                            ? (t.openBlock(),
                                              t.createElementBlock('li', Rb, [
                                                t.createElementVNode('div', Cb, t.toDisplayString(b), 1),
                                                t.createTextVNode(),
                                                t.createElementVNode(
                                                  'div',
                                                  { class: 'col-6', innerHTML: t.unref(Lr)(b, N) },
                                                  null,
                                                  8,
                                                  Ib,
                                                ),
                                              ]))
                                            : t.createCommentVNode('', !0),
                                        ],
                                        64,
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ],
                    32,
                  ))
                : t.createCommentVNode('', !0),
            ],
            64,
          )
        );
      },
    }),
    Lb = { class: 'table table-sm prop-list mb-0' },
    wb = { key: 0 },
    vb = { width: '40%' },
    kb = ['innerHTML'],
    Db = t.createElementVNode(
      'div',
      { class: 'text-secondary text-end' },
      [t.createElementVNode('em', null, '* Calculated value')],
      -1,
    ),
    Bh = t.defineComponent({
      __name: 'MiscDetail',
      props: { node: null },
      setup(e) {
        const n = e,
          r = t.ref(),
          o = t.reactive(n.node);
        t.onBeforeMount(() => {
          s();
        });
        function s() {
          r.value = $.chain(o)
            .omit(E.PLANS)
            .omit(E.WORKERS)
            .map((l, c) => ({ key: c, value: l }))
            .value();
        }
        return (l, c) => (
          t.openBlock(),
          t.createElementBlock(
            t.Fragment,
            null,
            [
              t.createElementVNode('table', Lb, [
                (t.openBlock(!0),
                t.createElementBlock(
                  t.Fragment,
                  null,
                  t.renderList(
                    r.value,
                    (f, d) => (
                      t.openBlock(),
                      t.createElementBlock(
                        t.Fragment,
                        { key: d },
                        [
                          t.unref(Dp)(f.key, f.value)
                            ? (t.openBlock(),
                              t.createElementBlock('tr', wb, [
                                t.createElementVNode('td', vb, t.toDisplayString(f.key), 1),
                                t.createTextVNode(),
                                t.createElementVNode('td', { innerHTML: t.unref(Lr)(f.key, f.value) }, null, 8, kb),
                              ]))
                            : t.createCommentVNode('', !0),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              t.createTextVNode(),
              Db,
            ],
            64,
          )
        );
      },
    }),
    Vb = { height: '1em', width: '1em', viewBox: '0 0 20 20', class: 'me-1', style: { 'margin-left': '-8px' } },
    $o = t.defineComponent({
      __name: 'SeverityBullet',
      props: ['severity'],
      setup(e) {
        return (n, r) => (
          t.openBlock(),
          t.createElementBlock('svg', Vb, [
            t.createElementVNode(
              'circle',
              { r: '7', cx: '10', cy: '10', class: t.normalizeClass(e.severity), stroke: 'white', 'stroke-width': '1' },
              null,
              2,
            ),
          ])
        );
      },
    }),
    Mb = { class: 'node-index text-secondary' },
    Bb = ['href'],
    Pb = { class: 'font-weight-normal small' },
    Ub = { key: 0, class: 'text-end grid-progress-cell text-nowrap' },
    $b = { class: 'position-relative d-flex' },
    Hb = { class: 'flex-grow-1' },
    Fb = { key: 0, class: 'small text-body-secondary' },
    Wb = t.createElementVNode('br', null, null, -1),
    zb = { key: 1, class: 'text-end grid-progress-cell text-nowrap' },
    Xb = { class: 'position-relative' },
    Gb = { key: 2, class: 'text-end grid-progress-cell text-nowrap' },
    Yb = { key: 0 },
    Kb = { key: 0, class: 'position-relative d-flex' },
    jb = { class: 'flex-grow-1' },
    qb = ['innerHTML'],
    Jb = { key: 0 },
    Qb = { key: 1 },
    Zb = { key: 1, class: 'small text-body-secondary' },
    ex = t.createElementVNode('br', null, null, -1),
    tx = { key: 3, class: 'text-end grid-progress-cell text-nowrap' },
    nx = { class: 'position-relative d-flex' },
    rx = { class: 'flex-grow-1' },
    ix = { key: 4, class: 'text-end text-nowrap' },
    ox = { key: 0 },
    ax = { key: 5, class: 'text-end grid-progress-cell text-nowrap' },
    sx = { class: 'position-relative d-flex' },
    lx = { class: 'flex-grow-1' },
    cx = { key: 0, class: 'small text-body-secondary' },
    fx = { key: 6, class: 'text-end grid-progress-cell text-nowrap' },
    ux = { class: 'position-relative d-flex' },
    dx = { class: 'flex-grow-1' },
    px = { class: 'd-inline' },
    hx = { class: 'border border-secondary px-1 bg-light', style: { '--bs-border-opacity': '0.5' } },
    mx = { class: 'text-body-secondary' },
    Ex = t.createElementVNode('span', { class: 'text-secondary' }, 'on', -1),
    _x = { key: 0 },
    gx = { key: 1 },
    Tx = t.createElementVNode('span', { class: 'text-secondary' }, 'as', -1),
    Nx = t.createElementVNode('span', { class: 'text-secondary' }, 'on', -1),
    Ax = ['innerHTML'],
    yx = t.createElementVNode('span', { class: 'text-secondary' }, 'by', -1),
    Sx = ['innerHTML'],
    bx = t.createElementVNode('span', { class: 'text-secondary' }, 'by', -1),
    xx = ['innerHTML'],
    Ox = t.createElementVNode('span', { class: 'text-secondary' }, 'join', -1),
    Rx = t.createElementVNode('span', { class: 'text-secondary' }, 'using', -1),
    Cx = ['innerHTML'],
    Ix = t.createElementVNode('span', { class: 'text-secondary' }, 'on', -1),
    Lx = ['innerHTML'],
    wx = { key: 7, class: 'text-reset' },
    vx = t.createElementVNode('span', { class: 'text-secondary' }, 'CTE', -1),
    kx = t.createElementVNode('br', null, null, -1),
    Dx = { class: 'text-wrap' },
    Vx = { key: 0, class: 'node-description mt-1' },
    Mx = { class: 'node-type' },
    Bx = ['innerHTML'],
    Px = { class: 'nav nav-tabs mt-1' },
    Ux = { class: 'nav-item' },
    $x = { class: 'nav-item' },
    Hx = { class: 'nav-item' },
    Fx = { class: 'tab-content bg-white' },
    Wx = ['innerHTML'],
    zx = { key: 7, class: 'text-end text-nowrap grid-progress-cell' },
    Xx = { class: 'position-relative' },
    Gx = { key: 0, class: 'small text-body-secondary' },
    Yx = { key: 8, class: 'text-end text-nowrap grid-progress-cell' },
    Kx = { class: 'position-relative' },
    jx = { key: 0, class: 'small text-body-secondary' },
    qx = { key: 9, class: 'text-end text-nowrap grid-progress-cell' },
    Jx = { class: 'position-relative' },
    Qx = { key: 0, class: 'small text-body-secondary' },
    Zx = { key: 10, class: 'text-end text-nowrap grid-progress-cell' },
    eO = { class: 'position-relative' },
    tO = { key: 0, class: 'small text-body-secondary' },
    nO = { key: 11, class: 'text-end text-nowrap grid-progress-cell' },
    rO = { class: 'position-relative' },
    iO = { key: 0, class: 'small text-body-secondary' },
    oO = { key: 12, class: 'text-end text-nowrap grid-progress-cell' },
    aO = { class: 'position-relative' },
    sO = { key: 0, class: 'small text-body-secondary' },
    lO = { key: 13, class: 'text-end text-nowrap grid-progress-cell' },
    cO = { class: 'position-relative' },
    fO = { key: 0, class: 'small text-body-secondary' },
    uO = { key: 14, class: 'text-end text-nowrap grid-progress-cell' },
    dO = { class: 'position-relative' },
    pO = { key: 0, class: 'small text-body-secondary' },
    hO = { key: 15, class: 'text-end text-nowrap grid-progress-cell' },
    mO = { class: 'position-relative' },
    EO = { key: 0, class: 'small text-body-secondary' },
    _O = { key: 16, class: 'text-end text-nowrap grid-progress-cell' },
    gO = { class: 'position-relative' },
    TO = { key: 0, class: 'small text-body-secondary' },
    NO = t.defineComponent({
      __name: 'GridRow',
      props: {
        node: null,
        level: null,
        isSubplan: { type: Boolean },
        isLastChild: { type: Boolean },
        branches: null,
        index: null,
        columns: null,
      },
      setup(e) {
        const n = e,
          o = new Io().getNodeTypeDescription,
          s = t.reactive(n.node),
          l = t.inject(xn),
          c = t.inject(Wr),
          f = t.ref('misc'),
          {
            buffersByMetricTooltip: d,
            costClass: m,
            costTooltip: p,
            durationClass: T,
            estimationClass: N,
            estimateFactorPercent: b,
            estimateFactorTooltip: R,
            executionTimePercent: C,
            heapFetchesClass: B,
            heapFetchesTooltip: S,
            localDirtiedPercent: V,
            localHitPercent: Y,
            localReadPercent: _,
            localWrittenPercent: k,
            nodeName: O,
            rowsRemoved: D,
            rowsRemovedClass: L,
            rowsRemovedPercent: y,
            rowsRemovedPercentString: K,
            rowsRemovedProp: M,
            rowsRemovedTooltip: H,
            rowsTooltip: q,
            sharedDirtiedPercent: U,
            sharedHitPercent: ee,
            sharedReadPercent: I,
            sharedWrittenPercent: z,
            tempReadPercent: Q,
            tempWrittenPercent: oe,
            timeTooltip: fe,
            tilde: ne,
          } = ki(l, s, c),
          te = t.ref(!1);
        function de(j) {
          const X = E[j],
            Z = s[X];
          return Lr(X, Z);
        }
        return (j, X) => {
          var Z, pe, le;
          return (
            t.openBlock(),
            t.createElementBlock('tr', { onClick: X[6] || (X[6] = me => (te.value = !te.value)), class: 'node' }, [
              t.createElementVNode('td', Mb, [
                t.createElementVNode(
                  'a',
                  { href: `#plan/node/${s.nodeId}`, onClick: X[0] || (X[0] = t.withModifiers(() => {}, ['stop'])) },
                  [t.createElementVNode('span', Pb, '#' + t.toDisplayString(s.nodeId), 1)],
                  8,
                  Bb,
                ),
              ]),
              t.createTextVNode(),
              e.columns.includes('time')
                ? (t.openBlock(),
                  t.createElementBlock('td', Ub, [
                    t.createVNode(
                      Mt,
                      {
                        percentage:
                          (s[t.unref(E).EXCLUSIVE_DURATION] /
                            (t.unref(l).planStats.executionTime ||
                              t.unref(l).content.Plan[t.unref(E).ACTUAL_TOTAL_TIME])) *
                          100,
                        percentage2:
                          ((s[t.unref(E).ACTUAL_TOTAL_TIME] - s[t.unref(E).EXCLUSIVE_DURATION]) /
                            (t.unref(l).planStats.executionTime ||
                              t.unref(l).content.Plan[t.unref(E).ACTUAL_TOTAL_TIME])) *
                          100,
                      },
                      null,
                      8,
                      ['percentage', 'percentage2'],
                    ),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', $b, [
                        t.unref(T)
                          ? (t.openBlock(), t.createBlock($o, { key: 0, severity: t.unref(T) }, null, 8, ['severity']))
                          : t.createCommentVNode('', !0),
                        t.createTextVNode(),
                        t.createElementVNode(
                          'span',
                          Hb,
                          t.toDisplayString(Math.round(s[t.unref(E).EXCLUSIVE_DURATION]).toLocaleString()),
                          1,
                        ),
                      ])),
                      [[t.unref(Qe), { content: t.unref(fe), allowHTML: !0 }]],
                    ),
                    t.createTextVNode(),
                    te.value
                      ? (t.openBlock(),
                        t.createElementBlock('div', Fb, [
                          t.createTextVNode(t.toDisplayString(t.unref(zt)(s[t.unref(E).EXCLUSIVE_DURATION])) + ' ', 1),
                          Wb,
                          t.createTextVNode(),
                          t.unref(C) !== 1 / 0
                            ? (t.openBlock(),
                              t.createElementBlock(
                                t.Fragment,
                                { key: 0 },
                                [
                                  t.createTextVNode(
                                    t.toDisplayString(t.unref(C)) +
                                      `%
        `,
                                    1,
                                  ),
                                ],
                                64,
                              ))
                            : t.createCommentVNode('', !0),
                        ]))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('rows')
                ? (t.openBlock(),
                  t.createElementBlock('td', zb, [
                    t.createVNode(
                      Mt,
                      { percentage: (s[t.unref(E).ACTUAL_ROWS_REVISED] / t.unref(l).planStats.maxRows) * 100 },
                      null,
                      8,
                      ['percentage'],
                    ),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', Xb, [
                        t.createTextVNode(
                          t.toDisplayString(
                            t.unref(ne) +
                              ((Z = s[t.unref(E).ACTUAL_ROWS_REVISED]) == null ? void 0 : Z.toLocaleString()),
                          ),
                          1,
                        ),
                      ])),
                      [[t.unref(Qe), { content: t.unref(q), allowHTML: !0 }]],
                    ),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('estimation')
                ? (t.openBlock(),
                  t.createElementBlock('td', Gb, [
                    t.createVNode(Mt, { percentage: t.unref(b) }, null, 8, ['percentage']),
                    t.createTextVNode(),
                    s[t.unref(E).PLANNER_ESTIMATE_FACTOR] != null
                      ? t.withDirectives(
                          (t.openBlock(),
                          t.createElementBlock('div', Yb, [
                            s[t.unref(E).PLANNER_ESTIMATE_FACTOR] != 1
                              ? (t.openBlock(),
                                t.createElementBlock('div', Kb, [
                                  t.unref(N)
                                    ? (t.openBlock(),
                                      t.createBlock($o, { key: 0, severity: t.unref(N) }, null, 8, ['severity']))
                                    : t.createCommentVNode('', !0),
                                  t.createTextVNode(),
                                  t.createElementVNode('span', jb, [
                                    t.createElementVNode(
                                      'span',
                                      { innerHTML: t.unref(Ac)(s[t.unref(E).PLANNER_ESTIMATE_FACTOR] || 0) },
                                      null,
                                      8,
                                      qb,
                                    ),
                                    t.createTextVNode(),
                                    s[t.unref(E).PLANNER_ESTIMATE_DIRECTION] === t.unref(St).under
                                      ? (t.openBlock(),
                                        t.createElementBlock(
                                          'span',
                                          Jb,
                                          `
              ▾
            `,
                                        ))
                                      : t.createCommentVNode('', !0),
                                    t.createTextVNode(),
                                    s[t.unref(E).PLANNER_ESTIMATE_DIRECTION] === t.unref(St).over
                                      ? (t.openBlock(),
                                        t.createElementBlock(
                                          'span',
                                          Qb,
                                          `
              ▴
            `,
                                        ))
                                      : t.createCommentVNode('', !0),
                                  ]),
                                ]))
                              : t.createCommentVNode('', !0),
                            t.createTextVNode(),
                            te.value && s[t.unref(E).PLANNER_ESTIMATE_FACTOR] != 1
                              ? (t.openBlock(),
                                t.createElementBlock('div', Zb, [
                                  t.createTextVNode(`
          Planned:`),
                                  ex,
                                  t.createTextVNode(
                                    ' ' +
                                      t.toDisplayString(
                                        (pe = s[t.unref(E).PLAN_ROWS_REVISED]) == null ? void 0 : pe.toLocaleString(),
                                      ),
                                    1,
                                  ),
                                ]))
                              : t.createCommentVNode('', !0),
                          ])),
                          [[t.unref(Qe), { content: t.unref(R), allowHTML: !0 }]],
                        )
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('cost')
                ? (t.openBlock(),
                  t.createElementBlock('td', tx, [
                    t.createVNode(
                      Mt,
                      { percentage: Math.round((s[t.unref(E).EXCLUSIVE_COST] / t.unref(l).planStats.maxCost) * 100) },
                      null,
                      8,
                      ['percentage'],
                    ),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', nx, [
                        t.unref(m)
                          ? (t.openBlock(), t.createBlock($o, { key: 0, severity: t.unref(m) }, null, 8, ['severity']))
                          : t.createCommentVNode('', !0),
                        t.createTextVNode(),
                        t.createElementVNode(
                          'span',
                          rx,
                          t.toDisplayString(t.unref(Nc)(s[t.unref(E).EXCLUSIVE_COST])),
                          1,
                        ),
                      ])),
                      [[t.unref(Qe), { content: t.unref(p), allowHTML: !0 }]],
                    ),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('loops')
                ? (t.openBlock(),
                  t.createElementBlock('td', ix, [
                    s[t.unref(E).ACTUAL_LOOPS] != 1
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'span',
                          ox,
                          t.toDisplayString(s[t.unref(E).ACTUAL_LOOPS].toLocaleString()),
                          1,
                        ))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('filter')
                ? (t.openBlock(),
                  t.createElementBlock('td', ax, [
                    t.unref(D)
                      ? (t.openBlock(),
                        t.createElementBlock(
                          t.Fragment,
                          { key: 0 },
                          [
                            t.createVNode(Mt, { percentage: t.unref(y) }, null, 8, ['percentage']),
                            t.createTextVNode(),
                            t.withDirectives(
                              (t.openBlock(),
                              t.createElementBlock('div', sx, [
                                t.unref(L)
                                  ? (t.openBlock(),
                                    t.createBlock($o, { key: 0, severity: t.unref(L) }, null, 8, ['severity']))
                                  : t.createCommentVNode('', !0),
                                t.createTextVNode(),
                                t.createElementVNode('span', lx, t.toDisplayString(t.unref(K)) + '% ', 1),
                              ])),
                              [[t.unref(Qe), { content: t.unref(H), allowHTML: !0 }]],
                            ),
                            t.createTextVNode(),
                            te.value
                              ? (t.openBlock(),
                                t.createElementBlock('div', cx, t.toDisplayString(t.unref(ne) + de(t.unref(M))), 1))
                              : t.createCommentVNode('', !0),
                          ],
                          64,
                        ))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('heapfetches')
                ? (t.openBlock(),
                  t.createElementBlock('td', fx, [
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', ux, [
                        t.unref(B)
                          ? (t.openBlock(), t.createBlock($o, { key: 0, severity: t.unref(B) }, null, 8, ['severity']))
                          : t.createCommentVNode('', !0),
                        t.createTextVNode(),
                        t.createElementVNode(
                          'span',
                          dx,
                          t.toDisplayString((le = s[t.unref(E).HEAP_FETCHES]) == null ? void 0 : le.toLocaleString()),
                          1,
                        ),
                      ])),
                      [[t.unref(Qe), { content: t.unref(S), allowHTML: !0 }]],
                    ),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              t.createElementVNode(
                'td',
                {
                  class: t.normalizeClass(['node-type', te.value ? '' : 'text-nowrap text-truncate overflow-hidden']),
                  style: { 'max-width': '0' },
                },
                [
                  t.createVNode(
                    dc,
                    {
                      isSubplan: e.isSubplan,
                      isNode: '',
                      isLastChild: e.isLastChild,
                      level: e.level,
                      branches: e.branches,
                      index: e.index,
                    },
                    null,
                    8,
                    ['isSubplan', 'isLastChild', 'level', 'branches', 'index'],
                  ),
                  t.createTextVNode(),
                  t.createElementVNode('div', px, [
                    t.createElementVNode('b', hx, t.toDisplayString(t.unref(O)), 1),
                    t.createTextVNode(),
                    t.createElementVNode('span', mx, [
                      s[t.unref(E).RELATION_NAME] || s[t.unref(E).FUNCTION_NAME]
                        ? (t.openBlock(),
                          t.createElementBlock(
                            t.Fragment,
                            { key: 0 },
                            [
                              Ex,
                              t.createTextVNode(),
                              s[t.unref(E).SCHEMA]
                                ? (t.openBlock(),
                                  t.createElementBlock('span', _x, t.toDisplayString(s[t.unref(E).SCHEMA]) + '.', 1))
                                : t.createCommentVNode('', !0),
                              t.createTextVNode(
                                t.toDisplayString(s[t.unref(E).RELATION_NAME]) +
                                  t.toDisplayString(s[t.unref(E).FUNCTION_NAME]) +
                                  ' ',
                                1,
                              ),
                              s[t.unref(E).ALIAS]
                                ? (t.openBlock(),
                                  t.createElementBlock('span', gx, [
                                    Tx,
                                    t.createTextVNode(' ' + t.toDisplayString(s[t.unref(E).ALIAS]), 1),
                                  ]))
                                : t.createCommentVNode('', !0),
                            ],
                            64,
                          ))
                        : s[t.unref(E).ALIAS]
                          ? (t.openBlock(),
                            t.createElementBlock(
                              t.Fragment,
                              { key: 1 },
                              [
                                Nx,
                                t.createTextVNode(),
                                t.createElementVNode(
                                  'span',
                                  { innerHTML: t.unref(ar)(s[t.unref(E).ALIAS]) },
                                  null,
                                  8,
                                  Ax,
                                ),
                              ],
                              64,
                            ))
                          : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      s[t.unref(E).GROUP_KEY]
                        ? (t.openBlock(),
                          t.createElementBlock(
                            t.Fragment,
                            { key: 2 },
                            [
                              yx,
                              t.createTextVNode(),
                              t.createElementVNode(
                                'span',
                                { innerHTML: t.unref(ar)(s[t.unref(E).GROUP_KEY]) },
                                null,
                                8,
                                Sx,
                              ),
                            ],
                            64,
                          ))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      s[t.unref(E).SORT_KEY]
                        ? (t.openBlock(),
                          t.createElementBlock(
                            t.Fragment,
                            { key: 3 },
                            [
                              bx,
                              t.createTextVNode(),
                              t.createElementVNode(
                                'span',
                                { innerHTML: t.unref(Qp)(s[t.unref(E).SORT_KEY], s[t.unref(E).PRESORTED_KEY]) },
                                null,
                                8,
                                xx,
                              ),
                            ],
                            64,
                          ))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      s[t.unref(E).JOIN_TYPE]
                        ? (t.openBlock(),
                          t.createElementBlock(
                            t.Fragment,
                            { key: 4 },
                            [t.createTextVNode(t.toDisplayString(s[t.unref(E).JOIN_TYPE]) + ' ', 1), Ox],
                            64,
                          ))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      s[t.unref(E).INDEX_NAME]
                        ? (t.openBlock(),
                          t.createElementBlock(
                            t.Fragment,
                            { key: 5 },
                            [
                              Rx,
                              t.createTextVNode(),
                              t.createElementVNode(
                                'span',
                                { innerHTML: t.unref(ar)(s[t.unref(E).INDEX_NAME]) },
                                null,
                                8,
                                Cx,
                              ),
                            ],
                            64,
                          ))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      s[t.unref(E).HASH_CONDITION]
                        ? (t.openBlock(),
                          t.createElementBlock(
                            t.Fragment,
                            { key: 6 },
                            [
                              Ix,
                              t.createTextVNode(),
                              t.createElementVNode(
                                'span',
                                { innerHTML: t.unref(ar)(s[t.unref(E).HASH_CONDITION]) },
                                null,
                                8,
                                Lx,
                              ),
                            ],
                            64,
                          ))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      s[t.unref(E).CTE_NAME]
                        ? (t.openBlock(),
                          t.createElementBlock('span', wx, [
                            vx,
                            t.createTextVNode(' ' + t.toDisplayString(s[t.unref(E).CTE_NAME]), 1),
                          ]))
                        : t.createCommentVNode('', !0),
                    ]),
                  ]),
                  t.createTextVNode(),
                  kx,
                  t.createTextVNode(),
                  te.value
                    ? (t.openBlock(),
                      t.createElementBlock(
                        'div',
                        {
                          key: 0,
                          class: 'plan-node position-relative detailed',
                          style: { width: '100%' },
                          onClick: X[5] || (X[5] = t.withModifiers(() => {}, ['stop'])),
                        },
                        [
                          t.createElementVNode('div', Dx, [
                            t.unref(o)(s[t.unref(E).NODE_TYPE])
                              ? (t.openBlock(),
                                t.createElementBlock('div', Vx, [
                                  t.createElementVNode(
                                    'span',
                                    Mx,
                                    t.toDisplayString(s[t.unref(E).NODE_TYPE]) + ' Node',
                                    1,
                                  ),
                                  t.createTextVNode(),
                                  t.createElementVNode(
                                    'span',
                                    { innerHTML: t.unref(o)(s[t.unref(E).NODE_TYPE]) },
                                    null,
                                    8,
                                    Bx,
                                  ),
                                ]))
                              : t.createCommentVNode('', !0),
                            t.createTextVNode(),
                            t.createElementVNode('ul', Px, [
                              t.createElementVNode('li', Ux, [
                                t.createElementVNode(
                                  'a',
                                  {
                                    class: t.normalizeClass(['nav-link px-2 py-1', { active: f.value === 'misc' }]),
                                    onClick:
                                      X[1] || (X[1] = t.withModifiers(me => (f.value = 'misc'), ['prevent', 'stop'])),
                                    href: '',
                                  },
                                  'Misc',
                                  2,
                                ),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode('li', $x, [
                                t.createElementVNode(
                                  'a',
                                  {
                                    class: t.normalizeClass([
                                      'nav-link px-2 py-1',
                                      { active: f.value === 'output', disabled: !s[t.unref(E).OUTPUT] },
                                    ]),
                                    onClick:
                                      X[2] || (X[2] = t.withModifiers(me => (f.value = 'output'), ['prevent', 'stop'])),
                                    href: '',
                                  },
                                  'Output',
                                  2,
                                ),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode('li', Hx, [
                                t.createElementVNode(
                                  'a',
                                  {
                                    class: t.normalizeClass([
                                      'nav-link px-2 py-1',
                                      {
                                        active: f.value === 'workers',
                                        disabled: !(
                                          s[t.unref(E).WORKERS_PLANNED] || s[t.unref(E).WORKERS_PLANNED_BY_GATHER]
                                        ),
                                      },
                                    ]),
                                    onClick:
                                      X[3] ||
                                      (X[3] = t.withModifiers(me => (f.value = 'workers'), ['prevent', 'stop'])),
                                    href: '',
                                  },
                                  'Workers',
                                  2,
                                ),
                              ]),
                            ]),
                            t.createTextVNode(),
                            t.createElementVNode('div', Fx, [
                              t.createElementVNode(
                                'div',
                                {
                                  class: t.normalizeClass([
                                    'tab-pane p-1 border border-top-0',
                                    { 'show active': f.value === 'misc' },
                                  ]),
                                },
                                [t.createVNode(Bh, { node: s }, null, 8, ['node'])],
                                2,
                              ),
                              t.createTextVNode(),
                              t.createElementVNode(
                                'div',
                                {
                                  class: t.normalizeClass([
                                    'tab-pane p-1 border border-top-0 overflow-auto font-monospace',
                                    { 'show active': f.value === 'output' },
                                  ]),
                                  innerHTML: de('OUTPUT'),
                                  style: { 'max-height': '200px' },
                                  onMousewheel: X[4] || (X[4] = t.withModifiers(() => {}, ['stop'])),
                                },
                                null,
                                42,
                                Wx,
                              ),
                              t.createTextVNode(),
                              t.createElementVNode(
                                'div',
                                {
                                  class: t.normalizeClass([
                                    'tab-pane p-1 border border-top-0 rounded rounded-top-start-0',
                                    { 'show active': f.value === 'workers' },
                                  ]),
                                },
                                [t.createVNode(Mh, { node: s }, null, 8, ['node'])],
                                2,
                              ),
                            ]),
                          ]),
                        ],
                      ))
                    : t.createCommentVNode('', !0),
                ],
                2,
              ),
              t.createTextVNode(),
              e.columns.includes('shared.hit')
                ? (t.openBlock(),
                  t.createElementBlock('td', zx, [
                    t.createVNode(Mt, { percentage: t.unref(ee) }, null, 8, ['percentage']),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', Xx, [
                        t.createTextVNode(t.toDisplayString(t.unref(vt)(s[t.unref(E).EXCLUSIVE_SHARED_HIT_BLOCKS])), 1),
                      ])),
                      [[t.unref(Qe), { content: t.unref(d)(t.unref(E).EXCLUSIVE_SHARED_HIT_BLOCKS), allowHTML: !0 }]],
                    ),
                    t.createTextVNode(),
                    te.value
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'div',
                          Gx,
                          t.toDisplayString(t.unref(Ln)(s[t.unref(E).EXCLUSIVE_SHARED_HIT_BLOCKS])),
                          1,
                        ))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('shared.read')
                ? (t.openBlock(),
                  t.createElementBlock('td', Yx, [
                    t.createVNode(Mt, { percentage: t.unref(I) }, null, 8, ['percentage']),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', Kx, [
                        t.createTextVNode(
                          t.toDisplayString(t.unref(vt)(s[t.unref(E).EXCLUSIVE_SHARED_READ_BLOCKS])),
                          1,
                        ),
                      ])),
                      [[t.unref(Qe), { content: t.unref(d)(t.unref(E).EXCLUSIVE_SHARED_READ_BLOCKS), allowHTML: !0 }]],
                    ),
                    t.createTextVNode(),
                    te.value
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'div',
                          jx,
                          t.toDisplayString(t.unref(Ln)(s[t.unref(E).EXCLUSIVE_SHARED_READ_BLOCKS])),
                          1,
                        ))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('shared.dirtied')
                ? (t.openBlock(),
                  t.createElementBlock('td', qx, [
                    t.createVNode(Mt, { percentage: t.unref(U) }, null, 8, ['percentage']),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', Jx, [
                        t.createTextVNode(
                          t.toDisplayString(t.unref(vt)(s[t.unref(E).EXCLUSIVE_SHARED_DIRTIED_BLOCKS])),
                          1,
                        ),
                      ])),
                      [
                        [
                          t.unref(Qe),
                          { content: t.unref(d)(t.unref(E).EXCLUSIVE_SHARED_DIRTIED_BLOCKS), allowHTML: !0 },
                        ],
                      ],
                    ),
                    t.createTextVNode(),
                    te.value
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'div',
                          Qx,
                          t.toDisplayString(t.unref(Ln)(s[t.unref(E).EXCLUSIVE_SHARED_DIRTIED_BLOCKS])),
                          1,
                        ))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('shared.written')
                ? (t.openBlock(),
                  t.createElementBlock('td', Zx, [
                    t.createVNode(Mt, { percentage: t.unref(z) }, null, 8, ['percentage']),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', eO, [
                        t.createTextVNode(
                          t.toDisplayString(t.unref(vt)(s[t.unref(E).EXCLUSIVE_SHARED_WRITTEN_BLOCKS])),
                          1,
                        ),
                      ])),
                      [
                        [
                          t.unref(Qe),
                          { content: t.unref(d)(t.unref(E).EXCLUSIVE_SHARED_WRITTEN_BLOCKS), allowHTML: !0 },
                        ],
                      ],
                    ),
                    t.createTextVNode(),
                    te.value
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'div',
                          tO,
                          t.toDisplayString(t.unref(Ln)(s[t.unref(E).EXCLUSIVE_SHARED_WRITTEN_BLOCKS])),
                          1,
                        ))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('temp.read')
                ? (t.openBlock(),
                  t.createElementBlock('td', nO, [
                    t.createVNode(Mt, { percentage: t.unref(Q) }, null, 8, ['percentage']),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', rO, [
                        t.createTextVNode(t.toDisplayString(t.unref(vt)(s[t.unref(E).EXCLUSIVE_TEMP_READ_BLOCKS])), 1),
                      ])),
                      [[t.unref(Qe), { content: t.unref(d)(t.unref(E).EXCLUSIVE_TEMP_READ_BLOCKS), allowHTML: !0 }]],
                    ),
                    t.createTextVNode(),
                    te.value
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'div',
                          iO,
                          t.toDisplayString(t.unref(Ln)(s[t.unref(E).EXCLUSIVE_TEMP_READ_BLOCKS])),
                          1,
                        ))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('temp.written')
                ? (t.openBlock(),
                  t.createElementBlock('td', oO, [
                    t.createVNode(Mt, { percentage: t.unref(oe) }, null, 8, ['percentage']),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', aO, [
                        t.createTextVNode(
                          t.toDisplayString(t.unref(vt)(s[t.unref(E).EXCLUSIVE_TEMP_WRITTEN_BLOCKS])),
                          1,
                        ),
                      ])),
                      [[t.unref(Qe), { content: t.unref(d)(t.unref(E).EXCLUSIVE_TEMP_WRITTEN_BLOCKS), allowHTML: !0 }]],
                    ),
                    t.createTextVNode(),
                    te.value
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'div',
                          sO,
                          t.toDisplayString(t.unref(Ln)(s[t.unref(E).EXCLUSIVE_TEMP_WRITTEN_BLOCKS])),
                          1,
                        ))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('local.hit')
                ? (t.openBlock(),
                  t.createElementBlock('td', lO, [
                    t.createVNode(Mt, { percentage: t.unref(Y) }, null, 8, ['percentage']),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', cO, [
                        t.createTextVNode(t.toDisplayString(t.unref(vt)(s[t.unref(E).EXCLUSIVE_LOCAL_HIT_BLOCKS])), 1),
                      ])),
                      [[t.unref(Qe), { content: t.unref(d)(t.unref(E).EXCLUSIVE_LOCAL_HIT_BLOCKS), allowHTML: !0 }]],
                    ),
                    t.createTextVNode(),
                    te.value
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'div',
                          fO,
                          t.toDisplayString(t.unref(Ln)(s[t.unref(E).EXCLUSIVE_LOCAL_HIT_BLOCKS])),
                          1,
                        ))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('local.read')
                ? (t.openBlock(),
                  t.createElementBlock('td', uO, [
                    t.createVNode(Mt, { percentage: t.unref(_) }, null, 8, ['percentage']),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', dO, [
                        t.createTextVNode(t.toDisplayString(t.unref(vt)(s[t.unref(E).EXCLUSIVE_LOCAL_READ_BLOCKS])), 1),
                      ])),
                      [[t.unref(Qe), { content: t.unref(d)(t.unref(E).EXCLUSIVE_LOCAL_READ_BLOCKS), allowHTML: !0 }]],
                    ),
                    t.createTextVNode(),
                    te.value
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'div',
                          pO,
                          t.toDisplayString(t.unref(Ln)(s[t.unref(E).EXCLUSIVE_LOCAL_READ_BLOCKS])),
                          1,
                        ))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('local.dirtied')
                ? (t.openBlock(),
                  t.createElementBlock('td', hO, [
                    t.createVNode(Mt, { percentage: t.unref(V) }, null, 8, ['percentage']),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', mO, [
                        t.createTextVNode(
                          t.toDisplayString(t.unref(vt)(s[t.unref(E).EXCLUSIVE_LOCAL_DIRTIED_BLOCKS])),
                          1,
                        ),
                      ])),
                      [
                        [
                          t.unref(Qe),
                          { content: t.unref(d)(t.unref(E).EXCLUSIVE_LOCAL_DIRTIED_BLOCKS), allowHTML: !0 },
                        ],
                      ],
                    ),
                    t.createTextVNode(),
                    te.value
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'div',
                          EO,
                          t.toDisplayString(t.unref(Ln)(s[t.unref(E).EXCLUSIVE_LOCAL_DIRTIED_BLOCKS])),
                          1,
                        ))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              e.columns.includes('local.written')
                ? (t.openBlock(),
                  t.createElementBlock('td', _O, [
                    t.createVNode(Mt, { percentage: t.unref(k) }, null, 8, ['percentage']),
                    t.createTextVNode(),
                    t.withDirectives(
                      (t.openBlock(),
                      t.createElementBlock('div', gO, [
                        t.createTextVNode(
                          t.toDisplayString(t.unref(vt)(s[t.unref(E).EXCLUSIVE_LOCAL_WRITTEN_BLOCKS])),
                          1,
                        ),
                      ])),
                      [
                        [
                          t.unref(Qe),
                          { content: t.unref(d)(t.unref(E).EXCLUSIVE_LOCAL_WRITTEN_BLOCKS), allowHTML: !0 },
                        ],
                      ],
                    ),
                    t.createTextVNode(),
                    te.value
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'div',
                          TO,
                          t.toDisplayString(t.unref(Ln)(s[t.unref(E).EXCLUSIVE_LOCAL_WRITTEN_BLOCKS])),
                          1,
                        ))
                      : t.createCommentVNode('', !0),
                  ]))
                : t.createCommentVNode('', !0),
            ])
          );
        };
      },
    }),
    AO = { class: 'table table-sm table-hover' },
    yO = { class: 'table-secondary sticky-top', style: { 'z-index': '2' } },
    SO = { key: 0 },
    bO = ['colspan'],
    xO = ['colspan'],
    OO = ['colspan'],
    RO = ['colspan'],
    CO = t.createElementVNode('th', { class: 'text-center' }, null, -1),
    IO = { key: 0, class: 'text-center' },
    LO = { key: 1, class: 'text-center' },
    wO = { key: 2, class: 'text-center' },
    vO = { key: 3, class: 'text-center' },
    kO = { key: 4, class: 'text-center' },
    DO = { key: 5, class: 'text-center' },
    VO = { key: 6, class: 'text-center' },
    MO = t.createElementVNode('th', { style: { width: '100%' } }, null, -1),
    BO = { key: 7, class: 'text-center' },
    PO = { key: 8, class: 'text-center' },
    UO = { key: 9, class: 'text-center' },
    $O = { key: 10, class: 'text-center' },
    HO = { key: 11, class: 'text-center' },
    FO = { key: 12, class: 'text-center' },
    WO = { key: 13, class: 'text-center' },
    zO = { key: 14, class: 'text-center' },
    XO = { key: 15, class: 'text-center' },
    GO = { key: 16, class: 'text-center' },
    YO = { key: 0 },
    KO = ['colspan'],
    jO = ['colspan'],
    qO = { class: 'fst-italic text-reset' },
    JO = t.defineComponent({
      __name: 'Grid',
      setup(e) {
        const n = t.inject(xn);
        let r = [[]];
        t.onBeforeMount(() => {
          o(r[0], 0, n.value.content.Plan, !0, []),
            $.each(n.value.ctes, H => {
              const q = [];
              o(q, 0, H, !0, []), r.push(q);
            });
        }),
          t.onMounted(() => {
            localStorage.setItem('gridIsNotNew', 'true');
          });
        function o(H, q, U, ee, I) {
          H.push([q, U, ee, $.concat([], I)]),
            ee || I.push(q),
            $.each(U.Plans, z => {
              o(H, q + 1, z, z === $.last(U.Plans), I);
            }),
            ee || I.pop();
        }
        function s(H) {
          return $.startsWith(H[E.SUBPLAN_NAME], 'CTE');
        }
        const l = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.EXCLUSIVE_DURATION] || 0 > 1))),
          c = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.ACTUAL_ROWS_REVISED] || 0 > 1))),
          f = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.PLANNER_ESTIMATE_FACTOR] || 0 > 1))),
          d = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.ACTUAL_LOOPS] > 1))),
          m = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.EXCLUSIVE_COST] > 1))),
          p = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.ROWS_REMOVED_BY_FILTER]))),
          T = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.HEAP_FETCHES]))),
          N = t.computed(() => $.filter([b.value, R.value, C.value, B.value], H => H).length),
          b = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.EXCLUSIVE_SHARED_HIT_BLOCKS]))),
          R = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.EXCLUSIVE_SHARED_READ_BLOCKS]))),
          C = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.EXCLUSIVE_SHARED_DIRTIED_BLOCKS]))),
          B = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.EXCLUSIVE_SHARED_WRITTEN_BLOCKS]))),
          S = t.computed(() => $.filter([V.value, Y.value], H => H).length),
          V = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.EXCLUSIVE_TEMP_READ_BLOCKS]))),
          Y = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.EXCLUSIVE_TEMP_WRITTEN_BLOCKS]))),
          _ = t.computed(() => $.filter([k.value, O.value, D.value, L.value], H => H).length),
          k = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.EXCLUSIVE_LOCAL_HIT_BLOCKS]))),
          O = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.EXCLUSIVE_LOCAL_READ_BLOCKS]))),
          D = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS]))),
          L = t.computed(() => $.some(r, H => $.some(H, q => q[1][E.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS]))),
          y = t.computed(() => {
            const H = [];
            return (
              l.value && H.push('time'),
              c.value && H.push('rows'),
              f.value && H.push('estimation'),
              m.value && H.push('cost'),
              d.value && H.push('loops'),
              p.value && H.push('filter'),
              T.value && H.push('heapfetches'),
              H
            );
          }),
          K = t.computed(() => {
            const H = [];
            return (
              b.value && H.push('shared.hit'),
              R.value && H.push('shared.read'),
              C.value && H.push('shared.dirtied'),
              B.value && H.push('shared.written'),
              V.value && H.push('temp.read'),
              Y.value && H.push('temp.written'),
              k.value && H.push('local.hit'),
              O.value && H.push('local.read'),
              D.value && H.push('local.dirtied'),
              L.value && H.push('local.written'),
              H
            );
          }),
          M = t.computed(() => [].concat(y.value, K.value));
        return (H, q) => (
          t.openBlock(),
          t.createElementBlock('div', null, [
            t.createElementVNode('table', AO, [
              t.createElementVNode('thead', yO, [
                t.unref(K).length > 0
                  ? (t.openBlock(),
                    t.createElementBlock('tr', SO, [
                      t.createElementVNode('th', { colspan: 2 + t.unref(y).length }, null, 8, bO),
                      t.createTextVNode(),
                      t.unref(N) > 0
                        ? (t.openBlock(),
                          t.createElementBlock(
                            'th',
                            { key: 0, class: 'text-center', colspan: t.unref(N) },
                            `
            shared
          `,
                            8,
                            xO,
                          ))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      t.unref(S) > 0
                        ? (t.openBlock(),
                          t.createElementBlock(
                            'th',
                            { key: 1, class: 'text-center', colspan: t.unref(S) },
                            `
            temp
          `,
                            8,
                            OO,
                          ))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      t.unref(_) > 0
                        ? (t.openBlock(),
                          t.createElementBlock(
                            'th',
                            { key: 2, class: 'text-center', colspan: t.unref(_) },
                            `
            local
          `,
                            8,
                            RO,
                          ))
                        : t.createCommentVNode('', !0),
                    ]))
                  : t.createCommentVNode('', !0),
                t.createTextVNode(),
                t.createElementVNode('tr', null, [
                  CO,
                  t.createTextVNode(),
                  t.unref(l) ? (t.openBlock(), t.createElementBlock('th', IO, 'time')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(c) ? (t.openBlock(), t.createElementBlock('th', LO, 'rows')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(f) ? (t.openBlock(), t.createElementBlock('th', wO, 'estim')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(m) ? (t.openBlock(), t.createElementBlock('th', vO, 'cost')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(d) ? (t.openBlock(), t.createElementBlock('th', kO, 'loops')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(p) ? (t.openBlock(), t.createElementBlock('th', DO, 'filter')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(T) ? (t.openBlock(), t.createElementBlock('th', VO, 'heap')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  MO,
                  t.createTextVNode(),
                  t.unref(b) ? (t.openBlock(), t.createElementBlock('th', BO, 'hit')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(R) ? (t.openBlock(), t.createElementBlock('th', PO, 'read')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(C) ? (t.openBlock(), t.createElementBlock('th', UO, 'dirt')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(B) ? (t.openBlock(), t.createElementBlock('th', $O, 'writ')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(V) ? (t.openBlock(), t.createElementBlock('th', HO, 'read')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(Y) ? (t.openBlock(), t.createElementBlock('th', FO, 'writ')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(k) ? (t.openBlock(), t.createElementBlock('th', WO, 'hit')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(O) ? (t.openBlock(), t.createElementBlock('th', zO, 'read')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(D) ? (t.openBlock(), t.createElementBlock('th', XO, 'dirt')) : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(L) ? (t.openBlock(), t.createElementBlock('th', GO, 'writ')) : t.createCommentVNode('', !0),
                ]),
              ]),
              t.createTextVNode(),
              (t.openBlock(!0),
              t.createElementBlock(
                t.Fragment,
                null,
                t.renderList(
                  t.unref(r),
                  (U, ee) => (
                    t.openBlock(),
                    t.createElementBlock('tbody', { key: ee }, [
                      (t.openBlock(!0),
                      t.createElementBlock(
                        t.Fragment,
                        null,
                        t.renderList(
                          U,
                          (I, z) => (
                            t.openBlock(),
                            t.createElementBlock(
                              t.Fragment,
                              { key: z },
                              [
                                I[1][t.unref(E).SUBPLAN_NAME]
                                  ? (t.openBlock(),
                                    t.createElementBlock('tr', YO, [
                                      t.createElementVNode(
                                        'td',
                                        { class: 'bg-light', colspan: 1 + t.unref(y).length },
                                        null,
                                        8,
                                        KO,
                                      ),
                                      t.createTextVNode(),
                                      t.createElementVNode(
                                        'td',
                                        {
                                          class: t.normalizeClass([
                                            'plan pr-2 bg-light',
                                            { 'font-weight-bold': s(I[1]) },
                                          ]),
                                          colspan: t.unref(M).length + t.unref(K).length,
                                        },
                                        [
                                          t.createVNode(
                                            dc,
                                            {
                                              isSubplan: !!I[1][t.unref(E).SUBPLAN_NAME],
                                              isLastChild: !!I[2],
                                              level: I[0],
                                              branches: I[3],
                                              index: z,
                                            },
                                            null,
                                            8,
                                            ['isSubplan', 'isLastChild', 'level', 'branches', 'index'],
                                          ),
                                          t.createTextVNode(),
                                          t.createElementVNode(
                                            'b',
                                            qO,
                                            t.toDisplayString(I[1][t.unref(E).SUBPLAN_NAME]),
                                            1,
                                          ),
                                        ],
                                        10,
                                        jO,
                                      ),
                                    ]))
                                  : t.createCommentVNode('', !0),
                                t.createTextVNode(),
                                t.createVNode(
                                  NO,
                                  {
                                    node: I[1],
                                    isSubplan: !!I[1][t.unref(E).SUBPLAN_NAME],
                                    isLastChild: !!I[2],
                                    level: I[0],
                                    branches: I[3],
                                    index: z,
                                    columns: t.unref(M),
                                  },
                                  null,
                                  8,
                                  ['node', 'isSubplan', 'isLastChild', 'level', 'branches', 'index', 'columns'],
                                ),
                              ],
                              64,
                            )
                          ),
                        ),
                        128,
                      )),
                    ])
                  ),
                ),
                128,
              )),
            ]),
          ])
        );
      },
    }),
    QO = (e, n) => {
      const r = e.__vccOpts || e;
      for (const [o, s] of n) r[o] = s;
      return r;
    },
    ZO = {},
    eR = {
      src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAC1QAAAtUBwMJvJQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAf5SURBVGiB7Zp7UFT3Fcc/v3vv8kaQgA8CEmtE8ZEYiVETjS+UkUcm09FM0rE2iRPttOOjY60WbLwNQoI6I9HONNo2rbZpxmo7RkBH8Z34qJpEx2cdoxHREZ8gu+yyu9xf/4BddoFdFlzTOu33r7vnd37nnO+9v9c5vxUEGfp4PcwWpb1pSDFTQBqAhPNCig3h9fYN+n7dFkx/IpjGFucsz0WKEuB7PlSqEOQXl+X9GYQMhs+gEPhFdkGaQFkNZAbkVHJAKur84rIlpx7W90MR+FmmHhdqClkmpfwpoLrkIWEhjJs2iuEThgLw1b7THNhyFLvN7tndEEJ+oihiUdG2/OquxtAlArPT15niet15S0IhEO82JmDIS2lkz5pEbEI3rz5198xU/PVzju88iZReo6dGwAcWI7pk7Y55DY+cwJLsggwDZbWAIZ7ypP69yZ09mZS0JL/9r1+6ybb1u7h6rqp100VDioUrt+eVdSaegAksyinor0i1EOR0T3m3uCgyfjCWEZnDECIwc1LCmUPn2f7xXu7fqm0d0m4U54Li0nfPBmKrQ4/6dD3KZjX9XEqWAKEuuaqpjMoazpQfjiM0PCSgwFvD0eDgwN+PcmDLERx2p1eTEOK3Ns2+rGSrXtMlArquK9YTphlIVgA9PdvSXuhP7uzJxPWK7VLgrVF7p46dG/fz9b7TeE8P7iF473J4/99s3vxaY3t92yWwKLtorIJcAwzzlPdIjifnnQxSh/ta5h8Ol89UUra+ghuX2yxKJw3EvJXleZ+3bmhDYHF20bsglwGKSxYRHc6kN8YwOud5FMX/qLOabVRfvY3R6lUqQtAzJYHwqDC//aWUfL3vLNs/3oO5xuLZZEjQV5TnF/gksDiraA5CfuT6rWoK6RnPkjlzHJHdIvw6djnf8cd91NdZ222PiA5n6lsTAprsVouN/ZuPcOizYzgdLaNHwJwPyvPXtyGg5+oRVsNUBXQHSElLYtr8bBKSnujQmQt2m51t6yr86rwyZzIhYYFP+ttVd9lcUkblhesuUU2jIyRp1a5FFvAYJjap5bqCj03oxqyC1zsV/KNCQtITzCp4g5h498YYq5kaslw/3ASkVAa4ngePHtCpt/SoERoewuDRqe7fBmKg61lpUTOiXU9hEaH8tyE8smXyC6T7cyjtaj9GCCoB1aShqL5NKqqCatKC6ZKgWlNVhRFTnuXquSoMQ3Lr2h2gaQNUFEHKoCRUPwS7guC+DiA5NZHk1EQMQ/KPtdsBGPPqCx1ugF3FYz8HuvwFzLX1OBocPtul0XKUqLlVi/DzBUJCTUTGdLzTt4cuEThRcYpv2yYkPrF306EOdfoOTiY945lOx9JpAubaer49V4WiKv4PZhIsD+oBms5RfqaA1WzjytlrDBzxdKe/RKcJOJoT86jYSKbMeNmnnuckzvzReL+TeNdfDvLgbh12m73TBP53JrGUEqvZhtXcVFgzGg0stfVoIVqblNJqseG0txyBm/RUr+MAwP1bNVhqrdQ/sNJgtXPz6m1sVjs9+8SjKIG924AIOB1O9m46zIO7dW6ZucbCjj/tA2DQqFQGjewPwOHSE20yqp0b9wPwZL9ejM5JB+DTFVs5dfCcl97pL84DEBkTwcKPfkxEtP/kBwIcQvdv1XoF3xquEomjwdleOujG9W9uupP3iycu+9Sz1NZz8ctLgYQWGAHPNb3d9ub0UUojAFtNOkYHuk5nuzl8Gzz2k/j/BP7TaCEgFXeNr3VVoaMlzbVJBbL0uXT85Q0Amua9QJpr6z2t3Hc/uR6EYrhrkacPXfAi0b1XLPGJcT6D7zfsqSanIRpPDU5ut2wihKDv4GS0kKbAnhk7yOcBL65nDGnNyzI0HUnOHvlXi4JsidVtYe7UNaERqrkSKXsA9OgTz7R52fQZ+KS7n9PubFOw0jS1zdtsdDbS2Oi9yqiqgqqpXjK7zYHV4n3jpGmq13Gi8sJ1tnxY7k6OgOrwCEcffbNu9yIAsCR7+XSJ+JubXXO9P+vtiXTvEcN3iQf3zOxue58gpRCvrSjL2+KOsXXH5urch3hUok2hJl7MfZ5Jr7/0yMstDruTw9uOs3fTIRqsXjc6DQgxt7gs73eewnYHYV524ZBGKAEmecpj4qPJnDmB5yYMIcCrgE7h/LFLlK7bxb3qNhX1PSosKCrPP9O6wW8YzbeOq4F+nvLkAYm8MnsKyQMSHzpogBuXqyldX8GVM5Vecim5JhSWFpflb/TVt8P3ODt9nal77zs/QfIe4C4oCSF4bsIQst6eSFRsZJcCr6+zsufTLzhSdgLD+7hiEYJVYWbHBx3dKwc8EPIyC3s7NXQBs2h1I/ny90cyfvqLaCbVj4UWNDoNjm7/kopPDmKzeN3rSRBbNM1YWPjZ0muB2OrCJd/76RKjBBjjKY9PjCNz5jiGjknz2//SySuUrt9NdeVt7wbJcUUR898vyzvSmXi6PBUX5yzPFVKslZDiKX96WF9y38mgZ0qCl/6d6/co/8Nuzh9rc0y+IeDXYSMcv9d1vePjbCs81Fqi5+oRNsM0V8JSIMolVzWFkVOHM3zi0OYblzP8c8dXNDq94rNKWIOqFa7Ytth3stEBgvNXg6nFSYrqKJJSzAjEphCyzCnkvFWlv7rysL6Dupr/MqtopKHIEiSjfKicNBSxYGVp3oFg+Qz6dqTrulJ/PORVIeWbCAYBIDknkBu+iUzd6uu6tKv4N+243iwIA9v6AAAAAElFTkSuQmCC',
      alt: 'PEV2',
      style: { width: '20px', height: '20px' },
    };
  function tR(e, n) {
    return t.openBlock(), t.createElementBlock('img', eR);
  }
  const Ph = QO(ZO, [['render', tR]]),
    nR = { class: 'card-header border-top' },
    rR = { key: 0, class: 'node-description' },
    iR = { class: 'node-type' },
    oR = ['innerHTML'],
    aR = { class: 'nav nav-tabs card-header-tabs' },
    sR = { class: 'nav-item' },
    lR = { class: 'nav-item' },
    cR = { class: 'nav-item' },
    fR = { class: 'nav-item' },
    uR = { class: 'nav-item' },
    dR = { class: 'card-body tab-content' },
    pR = { key: 0 },
    hR = t.createElementVNode('b', null, 'Timing:', -1),
    mR = ['innerHTML'],
    ER = t.createElementVNode('span', { class: 'text-secondary' }, '%', -1),
    _R = t.createElementVNode('b', null, 'Rows:', -1),
    gR = { class: 'px-1' },
    TR = { key: 0, class: 'text-secondary' },
    NR = { key: 1 },
    AR = { key: 0 },
    yR = { key: 1 },
    SR = { key: 2 },
    bR = ['innerHTML'],
    xR = { key: 1 },
    OR = { class: 'px-1' },
    RR = { key: 2 },
    CR = t.createElementVNode('b', null, 'Heap Fetches:', -1),
    IR = ['innerHTML'],
    LR = { key: 3 },
    wR = t.createElementVNode('b', null, 'Cost:', -1),
    vR = { class: 'text-secondary' },
    kR = { key: 4 },
    DR = t.createElementVNode('b', null, 'Loops:', -1),
    VR = { class: 'px-1' },
    MR = { key: 0, class: 'mb-2 list-inline' },
    BR = t.createElementVNode(
      'dt',
      { class: 'list-inline-item align-top' },
      [t.createElementVNode('b', null, ' I/O Timings: ')],
      -1,
    ),
    PR = { class: 'list-inline-item' },
    UR = { key: 0, class: 'ms-2' },
    $R = t.createElementVNode('b', null, 'Read: ', -1),
    HR = t.createElementVNode('br', null, null, -1),
    FR = { key: 1, class: 'ms-2' },
    WR = t.createElementVNode('b', null, 'Write: ', -1),
    zR = t.createElementVNode('b', null, ' Blocks: ', -1),
    XR = { class: 'table table-sm' },
    GR = t.createElementVNode(
      'tr',
      null,
      [
        t.createElementVNode('td'),
        t.createTextVNode(),
        t.createElementVNode('th', { class: 'text-end', width: '25%' }, 'Hit'),
        t.createTextVNode(),
        t.createElementVNode('th', { class: 'text-end', width: '25%' }, 'Read'),
        t.createTextVNode(),
        t.createElementVNode('th', { class: 'text-end', width: '25%' }, 'Dirtied'),
        t.createTextVNode(),
        t.createElementVNode('th', { class: 'text-end', width: '25%' }, 'Written'),
      ],
      -1,
    ),
    YR = t.createElementVNode('th', null, 'Shared', -1),
    KR = ['innerHTML'],
    jR = ['innerHTML'],
    qR = ['innerHTML'],
    JR = ['innerHTML'],
    QR = t.createElementVNode('th', null, 'Temp', -1),
    ZR = t.createElementVNode('td', { class: 'text-end bg-hatched' }, null, -1),
    eC = ['innerHTML'],
    tC = t.createElementVNode('td', { class: 'text-end bg-hatched' }, null, -1),
    nC = ['innerHTML'],
    rC = t.createElementVNode('th', null, 'Local', -1),
    iC = ['innerHTML'],
    oC = ['innerHTML'],
    aC = ['innerHTML'],
    sC = ['innerHTML'],
    lC = { key: 1, class: 'mb-2' },
    cC = { class: 'more-info' },
    fC = { key: 0 },
    uC = { class: 'more-info' },
    dC = ['innerHTML'],
    pC = t.defineComponent({
      __name: 'PlanNodeDetail',
      props: { node: null },
      setup(e) {
        const n = e,
          r = t.inject(Wr),
          o = t.inject('updateSize'),
          s = t.reactive(n.node),
          l = t.inject(xn),
          c = t.ref(),
          f = t.ref('general'),
          m = new Io().getNodeTypeDescription,
          {
            costClass: p,
            durationClass: T,
            estimationClass: N,
            executionTimePercent: b,
            filterDetailTooltip: R,
            heapFetchesClass: C,
            plannerRowEstimateDirection: B,
            plannerRowEstimateValue: S,
            rowsRemoved: V,
            rowsRemovedClass: Y,
            rowsRemovedPercentString: _,
            rowsRemovedProp: k,
            tilde: O,
          } = ki(l, s, r);
        t.onBeforeMount(() => {
          L();
        });
        const D = t.computed(() => N.value && B.value !== St.none && S.value);
        function L() {
          c.value = $.chain(s)
            .omit(E.PLANS)
            .omit(E.WORKERS)
            .map((M, H) => ({ key: H, value: M }))
            .value();
        }
        const y = t.computed(() => {
          const M = [
              'EXCLUSIVE_SHARED_HIT_BLOCKS',
              'EXCLUSIVE_SHARED_READ_BLOCKS',
              'EXCLUSIVE_SHARED_DIRTIED_BLOCKS',
              'EXCLUSIVE_SHARED_WRITTEN_BLOCKS',
              'EXCLUSIVE_TEMP_READ_BLOCKS',
              'EXCLUSIVE_TEMP_WRITTEN_BLOCKS',
              'EXCLUSIVE_LOCAL_HIT_BLOCKS',
              'EXCLUSIVE_LOCAL_READ_BLOCKS',
              'EXCLUSIVE_LOCAL_DIRTIED_BLOCKS',
              'EXCLUSIVE_LOCAL_WRITTEN_BLOCKS',
              'EXCLUSIVE_IO_READ_TIME',
              'EXCLUSIVE_IO_WRITE_TIME',
            ],
            H = $.map(M, U => {
              const ee = s[E[U]];
              return $.isNaN(ee) ? 0 : ee;
            });
          return $.sum(H) > 0;
        });
        function K(M) {
          const H = E[M],
            q = s[H];
          return Lr(H, q);
        }
        return (
          t.watch(f, () => {
            window.setTimeout(() => o && o(s), 1);
          }),
          (M, H) => (
            t.openBlock(),
            t.createElementBlock(
              t.Fragment,
              null,
              [
                t.createElementVNode('div', nR, [
                  t.unref(m)(s[t.unref(E).NODE_TYPE])
                    ? (t.openBlock(),
                      t.createElementBlock('div', rR, [
                        t.createElementVNode('span', iR, t.toDisplayString(s[t.unref(E).NODE_TYPE]) + ' Node', 1),
                        t.createTextVNode(),
                        t.createElementVNode('span', { innerHTML: t.unref(m)(s[t.unref(E).NODE_TYPE]) }, null, 8, oR),
                      ]))
                    : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.createElementVNode('ul', aR, [
                    t.createElementVNode('li', sR, [
                      t.createElementVNode(
                        'a',
                        {
                          class: t.normalizeClass(['nav-link', { active: f.value === 'general' }]),
                          onClick: H[0] || (H[0] = t.withModifiers(q => (f.value = 'general'), ['prevent', 'stop'])),
                          href: '',
                        },
                        'General',
                        2,
                      ),
                    ]),
                    t.createTextVNode(),
                    t.createElementVNode('li', lR, [
                      t.createElementVNode(
                        'a',
                        {
                          class: t.normalizeClass([
                            'nav-link text-nowrap',
                            { active: f.value === 'iobuffer', disabled: !t.unref(y) },
                          ]),
                          onClick: H[1] || (H[1] = t.withModifiers(q => (f.value = 'iobuffer'), ['prevent', 'stop'])),
                          href: '',
                        },
                        'IO & Buffers',
                        2,
                      ),
                    ]),
                    t.createTextVNode(),
                    t.createElementVNode('li', cR, [
                      t.createElementVNode(
                        'a',
                        {
                          class: t.normalizeClass([
                            'nav-link',
                            { active: f.value === 'output', disabled: !s[t.unref(E).OUTPUT] },
                          ]),
                          onClick: H[2] || (H[2] = t.withModifiers(q => (f.value = 'output'), ['prevent', 'stop'])),
                          href: '',
                        },
                        'Output',
                        2,
                      ),
                    ]),
                    t.createTextVNode(),
                    t.createElementVNode('li', fR, [
                      t.createElementVNode(
                        'a',
                        {
                          class: t.normalizeClass([
                            'nav-link',
                            {
                              active: f.value === 'workers',
                              disabled: !(s[t.unref(E).WORKERS_PLANNED] || s[t.unref(E).WORKERS_PLANNED_BY_GATHER]),
                            },
                          ]),
                          onClick: H[3] || (H[3] = t.withModifiers(q => (f.value = 'workers'), ['prevent', 'stop'])),
                          href: '',
                        },
                        'Workers',
                        2,
                      ),
                    ]),
                    t.createTextVNode(),
                    t.createElementVNode('li', uR, [
                      t.createElementVNode(
                        'a',
                        {
                          class: t.normalizeClass(['nav-link', { active: f.value === 'misc' }]),
                          onClick: H[4] || (H[4] = t.withModifiers(q => (f.value = 'misc'), ['prevent', 'stop'])),
                          href: '',
                        },
                        'Misc',
                        2,
                      ),
                    ]),
                  ]),
                ]),
                t.createTextVNode(),
                t.createElementVNode('div', dR, [
                  t.createElementVNode(
                    'div',
                    { class: t.normalizeClass(['tab-pane', { 'show active': f.value === 'general' }]) },
                    [
                      t.unref(l).isAnalyze
                        ? (t.openBlock(),
                          t.createElementBlock('div', pR, [
                            t.createVNode(
                              t.unref(qe),
                              { 'fixed-width': '', icon: t.unref(xp), class: 'text-secondary' },
                              null,
                              8,
                              ['icon'],
                            ),
                            t.createTextVNode(),
                            hR,
                            t.createTextVNode(),
                            t.createElementVNode(
                              'span',
                              {
                                class: t.normalizeClass(['p-0 px-1 rounded alert', t.unref(T)]),
                                innerHTML: K('EXCLUSIVE_DURATION'),
                              },
                              null,
                              10,
                              mR,
                            ),
                            t.createTextVNode(),
                            t.unref(b) !== 1 / 0
                              ? (t.openBlock(),
                                t.createElementBlock(
                                  t.Fragment,
                                  { key: 0 },
                                  [
                                    t.createTextVNode(`
          |
          `),
                                    t.createElementVNode('strong', null, t.toDisplayString(t.unref(b)), 1),
                                    ER,
                                  ],
                                  64,
                                ))
                              : t.createCommentVNode('', !0),
                          ]))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      t.createElementVNode('div', null, [
                        t.createVNode(
                          t.unref(qe),
                          { 'fixed-width': '', icon: t.unref(pN), class: 'text-secondary' },
                          null,
                          8,
                          ['icon'],
                        ),
                        t.createTextVNode(),
                        _R,
                        t.createTextVNode(),
                        t.createElementVNode('span', gR, t.toDisplayString(t.unref(O) + K('ACTUAL_ROWS_REVISED')), 1),
                        t.createTextVNode(),
                        s[t.unref(E).PLAN_ROWS]
                          ? (t.openBlock(),
                            t.createElementBlock(
                              'span',
                              TR,
                              '(Planned: ' + t.toDisplayString(t.unref(O) + K('PLAN_ROWS_REVISED')) + ')',
                              1,
                            ))
                          : t.createCommentVNode('', !0),
                        t.createTextVNode(),
                        t.unref(B) !== t.unref(St).none && t.unref(D)
                          ? (t.openBlock(),
                            t.createElementBlock('span', NR, [
                              t.createTextVNode(`
          |
          `),
                              t.unref(B) === t.unref(St).over
                                ? (t.openBlock(),
                                  t.createElementBlock('span', AR, [
                                    t.createVNode(t.unref(qe), { icon: t.unref(Cp) }, null, 8, ['icon']),
                                    t.createTextVNode(' over'),
                                  ]))
                                : t.createCommentVNode('', !0),
                              t.createTextVNode(),
                              t.unref(B) === t.unref(St).under
                                ? (t.openBlock(),
                                  t.createElementBlock('span', yR, [
                                    t.createVNode(t.unref(qe), { icon: t.unref(Op) }, null, 8, ['icon']),
                                    t.createTextVNode(' under'),
                                  ]))
                                : t.createCommentVNode('', !0),
                              t.createTextVNode(`
          estimated
          `),
                              t.unref(S) != 1 / 0
                                ? (t.openBlock(),
                                  t.createElementBlock('span', SR, [
                                    t.createTextVNode(`
            by
            `),
                                    t.createElementVNode(
                                      'span',
                                      {
                                        class: t.normalizeClass(['p-0 px-1 alert', t.unref(N)]),
                                        innerHTML: K('PLANNER_ESTIMATE_FACTOR'),
                                      },
                                      null,
                                      10,
                                      bR,
                                    ),
                                  ]))
                                : t.createCommentVNode('', !0),
                            ]))
                          : t.createCommentVNode('', !0),
                      ]),
                      t.createTextVNode(),
                      t.unref(V)
                        ? (t.openBlock(),
                          t.createElementBlock('div', xR, [
                            t.createVNode(
                              t.unref(qe),
                              { 'fixed-width': '', icon: t.unref(cc), class: 'text-secondary' },
                              null,
                              8,
                              ['icon'],
                            ),
                            t.createTextVNode(),
                            t.createElementVNode('b', null, t.toDisplayString(t.unref(E)[t.unref(k)]) + ': ', 1),
                            t.createTextVNode(),
                            t.createElementVNode('span', null, [
                              t.createElementVNode('span', OR, t.toDisplayString(t.unref(O) + K(t.unref(k))), 1),
                              t.createTextVNode(`|
          `),
                              t.createElementVNode(
                                'span',
                                { class: t.normalizeClass(['p-0 px-1 alert', t.unref(Y)]) },
                                t.toDisplayString(t.unref(_)) + '%',
                                3,
                              ),
                            ]),
                            t.createTextVNode(),
                            t.withDirectives(
                              t.createVNode(
                                t.unref(qe),
                                { 'fixed-width': '', icon: t.unref(Ro), class: 'text-muted' },
                                null,
                                8,
                                ['icon'],
                              ),
                              [[t.unref(Qe), { allowHTML: !0, content: t.unref(R) }]],
                            ),
                          ]))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      s[t.unref(E).HEAP_FETCHES]
                        ? (t.openBlock(),
                          t.createElementBlock('div', RR, [
                            t.createVNode(
                              t.unref(qe),
                              { 'fixed-width': '', icon: t.unref(Lp), class: 'text-secondary' },
                              null,
                              8,
                              ['icon'],
                            ),
                            t.createTextVNode(),
                            CR,
                            t.createTextVNode(),
                            t.createElementVNode(
                              'span',
                              {
                                class: t.normalizeClass(['p-0 px-1 rounded alert', t.unref(C)]),
                                innerHTML: K('HEAP_FETCHES'),
                              },
                              null,
                              10,
                              IR,
                            ),
                            t.createTextVNode(),
                            t.unref(C)
                              ? t.withDirectives(
                                  (t.openBlock(),
                                  t.createBlock(
                                    t.unref(qe),
                                    { key: 0, icon: t.unref(Ro), 'fixed-width': '', class: 'text-secondary' },
                                    null,
                                    8,
                                    ['icon'],
                                  )),
                                  [
                                    [
                                      t.unref(Qe),
                                      {
                                        arrow: !0,
                                        content:
                                          'Visibility map may be out-of-date. Consider using VACUUM or change autovacuum settings.',
                                      },
                                    ],
                                  ],
                                )
                              : t.createCommentVNode('', !0),
                          ]))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      s[t.unref(E).EXCLUSIVE_COST]
                        ? (t.openBlock(),
                          t.createElementBlock('div', LR, [
                            t.createVNode(
                              t.unref(qe),
                              { 'fixed-width': '', icon: t.unref(wp), class: 'text-secondary' },
                              null,
                              8,
                              ['icon'],
                            ),
                            t.createTextVNode(),
                            wR,
                            t.createTextVNode(),
                            t.createElementVNode(
                              'span',
                              { class: t.normalizeClass(['p-0 px-1 me-1 alert', t.unref(p)]) },
                              t.toDisplayString(K('EXCLUSIVE_COST')),
                              3,
                            ),
                            t.createTextVNode(),
                            t.createElementVNode('span', vR, '(Total: ' + t.toDisplayString(K('TOTAL_COST')) + ')', 1),
                          ]))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      s[t.unref(E).ACTUAL_LOOPS] > 1
                        ? (t.openBlock(),
                          t.createElementBlock('div', kR, [
                            t.createVNode(
                              t.unref(qe),
                              { 'fixed-width': '', icon: t.unref(gN), class: 'text-secondary' },
                              null,
                              8,
                              ['icon'],
                            ),
                            t.createTextVNode(),
                            DR,
                            t.createTextVNode(),
                            t.createElementVNode('span', VR, t.toDisplayString(K('ACTUAL_LOOPS')), 1),
                          ]))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                    ],
                    2,
                  ),
                  t.createTextVNode(),
                  t.createElementVNode(
                    'div',
                    { class: t.normalizeClass(['tab-pane', { 'show active': f.value === 'iobuffer' }]) },
                    [
                      s[t.unref(E).EXCLUSIVE_IO_READ_TIME] || s[t.unref(E).EXCLUSIVE_IO_WRITE_TIME]
                        ? (t.openBlock(),
                          t.createElementBlock('dl', MR, [
                            BR,
                            t.createTextVNode(),
                            t.createElementVNode('dd', PR, [
                              s[t.unref(E).EXCLUSIVE_IO_READ_TIME]
                                ? (t.openBlock(),
                                  t.createElementBlock('span', UR, [
                                    $R,
                                    t.createTextVNode(' ' + t.toDisplayString(K('EXCLUSIVE_IO_READ_TIME')) + ' ', 1),
                                    t.createElementVNode(
                                      'small',
                                      null,
                                      '~' + t.toDisplayString(K('AVERAGE_IO_READ_TIME')),
                                      1,
                                    ),
                                  ]))
                                : t.createCommentVNode('', !0),
                              t.createTextVNode(),
                              HR,
                              t.createTextVNode(),
                              s[t.unref(E).EXCLUSIVE_IO_WRITE_TIME]
                                ? (t.openBlock(),
                                  t.createElementBlock('span', FR, [
                                    WR,
                                    t.createTextVNode(' ' + t.toDisplayString(K('EXCLUSIVE_IO_WRITE_TIME')) + ' ', 1),
                                    t.createElementVNode(
                                      'small',
                                      null,
                                      '~' + t.toDisplayString(K('AVERAGE_IO_WRITE_TIME')),
                                      1,
                                    ),
                                  ]))
                                : t.createCommentVNode('', !0),
                            ]),
                          ]))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                      zR,
                      t.createTextVNode(),
                      t.createElementVNode('table', XR, [
                        GR,
                        t.createTextVNode(),
                        t.createElementVNode('tr', null, [
                          YR,
                          t.createTextVNode(),
                          t.createElementVNode(
                            'td',
                            { class: 'text-end', innerHTML: K('EXCLUSIVE_SHARED_HIT_BLOCKS') || '-' },
                            null,
                            8,
                            KR,
                          ),
                          t.createTextVNode(),
                          t.createElementVNode(
                            'td',
                            { class: 'text-end', innerHTML: K('EXCLUSIVE_SHARED_READ_BLOCKS') || '-' },
                            null,
                            8,
                            jR,
                          ),
                          t.createTextVNode(),
                          t.createElementVNode(
                            'td',
                            { class: 'text-end', innerHTML: K('EXCLUSIVE_SHARED_DIRTIED_BLOCKS') || '-' },
                            null,
                            8,
                            qR,
                          ),
                          t.createTextVNode(),
                          t.createElementVNode(
                            'td',
                            { class: 'text-end', innerHTML: K('EXCLUSIVE_SHARED_WRITTEN_BLOCKS') || '-' },
                            null,
                            8,
                            JR,
                          ),
                        ]),
                        t.createTextVNode(),
                        t.createElementVNode('tr', null, [
                          QR,
                          t.createTextVNode(),
                          ZR,
                          t.createTextVNode(),
                          t.createElementVNode(
                            'td',
                            { class: 'text-end', innerHTML: K('EXCLUSIVE_TEMP_READ_BLOCKS') || '-' },
                            null,
                            8,
                            eC,
                          ),
                          t.createTextVNode(),
                          tC,
                          t.createTextVNode(),
                          t.createElementVNode(
                            'td',
                            { class: 'text-end', innerHTML: K('EXCLUSIVE_TEMP_WRITTEN_BLOCKS') || '-' },
                            null,
                            8,
                            nC,
                          ),
                        ]),
                        t.createTextVNode(),
                        t.createElementVNode('tr', null, [
                          rC,
                          t.createTextVNode(),
                          t.createElementVNode(
                            'td',
                            { class: 'text-end', innerHTML: K('EXCLUSIVE_LOCAL_HIT_BLOCKS') || '-' },
                            null,
                            8,
                            iC,
                          ),
                          t.createTextVNode(),
                          t.createElementVNode(
                            'td',
                            { class: 'text-end', innerHTML: K('EXCLUSIVE_LOCAL_READ_BLOCKS') || '-' },
                            null,
                            8,
                            oC,
                          ),
                          t.createTextVNode(),
                          t.createElementVNode(
                            'td',
                            { class: 'text-end', innerHTML: K('EXCLUSIVE_LOCAL_DIRTIED_BLOCKS') || '-' },
                            null,
                            8,
                            aC,
                          ),
                          t.createTextVNode(),
                          t.createElementVNode(
                            'td',
                            { class: 'text-end', innerHTML: K('EXCLUSIVE_LOCAL_WRITTEN_BLOCKS') || '-' },
                            null,
                            8,
                            sC,
                          ),
                        ]),
                      ]),
                      t.createTextVNode(),
                      s[t.unref(E).WAL_RECORDS] || s[t.unref(E).WAL_BYTES]
                        ? (t.openBlock(),
                          t.createElementBlock('div', lC, [
                            t.createElementVNode('b', null, [
                              t.withDirectives(
                                (t.openBlock(), t.createElementBlock('span', cC, [t.createTextVNode('WAL')])),
                                [[t.unref(Qe), 'Write-Ahead Logging']],
                              ),
                              t.createTextVNode(`:
        `),
                            ]),
                            t.createTextVNode(
                              ' ' +
                                t.toDisplayString(K('WAL_RECORDS')) +
                                ` records
        `,
                              1,
                            ),
                            t.createElementVNode('small', null, '(' + t.toDisplayString(K('WAL_BYTES')) + ')', 1),
                            t.createTextVNode(),
                            s[t.unref(E).WAL_FPI]
                              ? (t.openBlock(),
                                t.createElementBlock('span', fC, [
                                  t.createTextVNode(`
          -
          `),
                                  t.withDirectives(
                                    (t.openBlock(), t.createElementBlock('span', uC, [t.createTextVNode('FPI')])),
                                    [[t.unref(Qe), 'WAL Full Page Images']],
                                  ),
                                  t.createTextVNode(
                                    `:
          ` + t.toDisplayString(K('WAL_FPI')),
                                    1,
                                  ),
                                ]))
                              : t.createCommentVNode('', !0),
                          ]))
                        : t.createCommentVNode('', !0),
                      t.createTextVNode(),
                    ],
                    2,
                  ),
                  t.createTextVNode(),
                  t.createElementVNode(
                    'div',
                    {
                      class: t.normalizeClass([
                        'tab-pane overflow-auto font-monospace',
                        { 'show active': f.value === 'output' },
                      ]),
                      innerHTML: K('OUTPUT'),
                      style: { 'max-height': '200px' },
                      onMousewheel: H[5] || (H[5] = t.withModifiers(() => {}, ['stop'])),
                    },
                    null,
                    42,
                    dC,
                  ),
                  t.createTextVNode(),
                  s[t.unref(E).WORKERS_PLANNED] || s[t.unref(E).WORKERS_PLANNED_BY_GATHER]
                    ? (t.openBlock(),
                      t.createElementBlock(
                        'div',
                        { key: 0, class: t.normalizeClass(['tab-pane', { 'show active': f.value === 'workers' }]) },
                        [t.createVNode(Mh, { node: s }, null, 8, ['node'])],
                        2,
                      ))
                    : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.createElementVNode(
                    'div',
                    { class: t.normalizeClass(['tab-pane', { 'show active': f.value === 'misc' }]) },
                    [t.createVNode(Bh, { node: s }, null, 8, ['node'])],
                    2,
                  ),
                ]),
              ],
              64,
            )
          )
        );
      },
    }),
    hC = { key: 5, class: 'p-0 d-inline-block mb-0 ms-1 text-nowrap' },
    mC = t.defineComponent({
      __name: 'NodeBadges',
      props: { node: null },
      setup(e) {
        const n = e,
          r = t.reactive(n.node),
          o = t.inject(xn),
          s = t.inject(Wr),
          {
            rowsRemoved: l,
            costClass: c,
            durationClass: f,
            estimationClass: d,
            rowsRemovedClass: m,
            heapFetchesClass: p,
            filterTooltip: T,
          } = ki(o, r, s);
        return (N, b) => (
          t.openBlock(),
          t.createElementBlock(
            t.Fragment,
            null,
            [
              t.unref(f)
                ? t.withDirectives(
                    (t.openBlock(),
                    t.createElementBlock(
                      'span',
                      {
                        key: 0,
                        class: t.normalizeClass('p-0  d-inline-block mb-0 ms-1 text-nowrap alert ' + t.unref(f)),
                      },
                      [t.createVNode(t.unref(qe), { 'fixed-width': '', icon: t.unref(xp) }, null, 8, ['icon'])],
                      2,
                    )),
                    [[t.unref(Qe), 'Slow']],
                  )
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              t.unref(c)
                ? t.withDirectives(
                    (t.openBlock(),
                    t.createElementBlock(
                      'span',
                      {
                        key: 1,
                        class: t.normalizeClass('p-0  d-inline-block mb-0 ms-1 text-nowrap alert ' + t.unref(c)),
                      },
                      [t.createVNode(t.unref(qe), { 'fixed-width': '', icon: t.unref(wp) }, null, 8, ['icon'])],
                      2,
                    )),
                    [[t.unref(Qe), 'Cost is high']],
                  )
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              t.unref(d)
                ? t.withDirectives(
                    (t.openBlock(),
                    t.createElementBlock(
                      'span',
                      {
                        key: 2,
                        class: t.normalizeClass('p-0  d-inline-block mb-0 ms-1 text-nowrap alert ' + t.unref(d)),
                      },
                      [t.createVNode(t.unref(qe), { 'fixed-width': '', icon: t.unref(AN) }, null, 8, ['icon'])],
                      2,
                    )),
                    [[t.unref(Qe), 'Bad estimation for number of rows']],
                  )
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              t.unref(m)
                ? t.withDirectives(
                    (t.openBlock(),
                    t.createElementBlock(
                      'span',
                      {
                        key: 3,
                        class: t.normalizeClass('p-0  d-inline-block mb-0 ms-1 text-nowrap alert ' + t.unref(m)),
                      },
                      [t.createVNode(t.unref(qe), { 'fixed-width': '', icon: t.unref(cc) }, null, 8, ['icon'])],
                      2,
                    )),
                    [[t.unref(Qe), t.unref(T)]],
                  )
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              t.unref(p)
                ? t.withDirectives(
                    (t.openBlock(),
                    t.createElementBlock(
                      'span',
                      {
                        key: 4,
                        class: t.normalizeClass('p-0  d-inline-block mb-0 ms-1 text-nowrap alert ' + t.unref(p)),
                      },
                      [t.createVNode(t.unref(qe), { 'fixed-width': '', icon: t.unref(Lp) }, null, 8, ['icon'])],
                      2,
                    )),
                    [[t.unref(Qe), { arrow: !0, content: 'Heap Fetches number is high' }]],
                  )
                : t.createCommentVNode('', !0),
              t.createTextVNode(),
              t.unref(l) && !t.unref(m)
                ? t.withDirectives(
                    (t.openBlock(),
                    t.createElementBlock('span', hC, [
                      t.createVNode(
                        t.unref(qe),
                        { 'fixed-width': '', icon: t.unref(cc), class: 'text-secondary' },
                        null,
                        8,
                        ['icon'],
                      ),
                    ])),
                    [[t.unref(Qe), t.unref(T)]],
                  )
                : t.createCommentVNode('', !0),
            ],
            64,
          )
        );
      },
    }),
    EC = { key: 0, class: 'fixed-bottom text-center' },
    _C = { class: 'subplan-name fst-italic px-1' },
    gC = { key: 1, class: 'workers text-secondary py-0 px-1' },
    TC = { class: 'card-body header no-focus-outline' },
    NC = { class: 'mb-0 d-flex justify-content-between' },
    AC = { class: 'text-secondary' },
    yC = { class: 'text-nowrap' },
    SC = { class: 'text-start font-monospace' },
    bC = t.createElementVNode('span', { class: 'text-secondary' }, 'on', -1),
    xC = { key: 0 },
    OC = { key: 1 },
    RC = t.createElementVNode('span', { class: 'text-secondary' }, 'as', -1),
    CC = t.createElementVNode('span', { class: 'text-secondary' }, 'on', -1),
    IC = ['innerHTML'],
    LC = t.createElementVNode('span', { class: 'text-secondary' }, 'by', -1),
    wC = ['innerHTML'],
    vC = t.createElementVNode('span', { class: 'text-secondary' }, 'by', -1),
    kC = ['innerHTML'],
    DC = { key: 4 },
    VC = t.createElementVNode('span', { class: 'text-secondary' }, 'join', -1),
    MC = t.createElementVNode('span', { class: 'text-secondary' }, 'using', -1),
    BC = ['innerHTML'],
    PC = t.createElementVNode('span', { class: 'text-secondary' }, 'on', -1),
    UC = ['innerHTML'],
    $C = { key: 7 },
    HC = ['onClick'],
    FC = t.createElementVNode('span', { class: 'text-secondary' }, 'CTE', -1),
    WC = { key: 0 },
    zC = { class: 'progress node-bar-container', style: { height: '5px' } },
    XC = { class: 'node-bar-label' },
    GC = { class: 'text-secondary' },
    YC = ['innerHTML'],
    Uh = t.defineComponent({
      __name: 'PlanNode',
      props: { node: null },
      setup(e) {
        const n = e,
          r = t.ref(null),
          o = t.inject(pa);
        if (!o) throw new Error(`Could not resolve ${pa.description}`);
        const s = t.inject(ha),
          l = t.inject(Fr);
        if (!l) throw new Error(`Could not resolve ${Fr.description}`);
        const c = t.inject(Wr),
          f = t.ref(!1),
          d = t.reactive(n.node),
          m = t.inject(xn),
          p = t.inject('updateNodeSize'),
          {
            nodeName: T,
            barWidth: N,
            barColor: b,
            highlightValue: R,
            isNeverExecuted: C,
            workersLaunchedCount: B,
            workersPlannedCount: S,
            workersPlannedCountReversed: V,
          } = ki(m, d, c);
        t.onMounted(async () => {
          Y(d);
        });
        function Y(k) {
          var D;
          const O = (D = r.value) == null ? void 0 : D.getBoundingClientRect();
          O && (p == null || p(k, [O.width, O.height]));
        }
        t.provide('updateSize', Y),
          t.watch(f, () => {
            window.setTimeout(() => Y(d), 1);
          }),
          t.watch(c, () => {
            t.nextTick(() => {
              Y(d);
            });
          }),
          t.watch(o, () => {
            o.value == d.nodeId && (f.value = !0);
          });
        function _() {
          const k = DN(m.value, d[E.CTE_NAME]);
          k && (l == null || l(k.nodeId, !0));
        }
        return (k, O) => (
          t.openBlock(),
          t.createElementBlock(
            'div',
            { ref_key: 'outerEl', ref: r, onMousedown: O[4] || (O[4] = t.withModifiers(() => {}, ['stop'])) },
            [
              t.createElementVNode(
                'div',
                {
                  class: t.normalizeClass([
                    'text-start plan-node',
                    {
                      detailed: f.value,
                      'never-executed': t.unref(C),
                      parallel: t.unref(S),
                      selected: t.unref(o) == d.nodeId,
                      highlight: t.unref(s) == d.nodeId,
                    },
                  ]),
                },
                [
                  d[t.unref(E).SUBPLAN_NAME]
                    ? (t.openBlock(),
                      t.createElementBlock('div', EC, [
                        t.createElementVNode('b', _C, t.toDisplayString(d[t.unref(E).SUBPLAN_NAME]), 1),
                      ]))
                    : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.unref(S)
                    ? (t.openBlock(),
                      t.createElementBlock('div', gC, [
                        (t.openBlock(!0),
                        t.createElementBlock(
                          t.Fragment,
                          null,
                          t.renderList(
                            t.unref(V),
                            D => (
                              t.openBlock(),
                              t.createElementBlock(
                                'div',
                                {
                                  key: D,
                                  style: t.normalizeStyle({ top: 1 + D * 2 + 'px', left: 1 + (D + 1) * 3 + 'px' }),
                                  class: t.normalizeClass({ 'border-dashed': D >= t.unref(B) }),
                                },
                                t.toDisplayString(D),
                                7,
                              )
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : t.createCommentVNode('', !0),
                  t.createTextVNode(),
                  t.createElementVNode(
                    'div',
                    {
                      class: 'plan-node-body card',
                      onMouseenter: O[2] || (O[2] = D => (s.value = d.nodeId)),
                      onMouseleave: O[3] || (O[3] = D => (s.value = void 0)),
                    },
                    [
                      t.createElementVNode('div', TC, [
                        t.createElementVNode('header', NC, [
                          t.createElementVNode(
                            'h4',
                            {
                              class: 'text-body overflow-hidden btn btn-light text-start py-0 px-1',
                              onClick: O[0] || (O[0] = t.withModifiers(D => (f.value = !f.value), ['prevent', 'stop'])),
                            },
                            [
                              t.createElementVNode('span', AC, [
                                f.value
                                  ? (t.openBlock(),
                                    t.createBlock(
                                      t.unref(qe),
                                      { key: 0, 'fixed-width': '', icon: t.unref(dN) },
                                      null,
                                      8,
                                      ['icon'],
                                    ))
                                  : (t.openBlock(),
                                    t.createBlock(
                                      t.unref(qe),
                                      { key: 1, 'fixed-width': '', icon: t.unref(Rp) },
                                      null,
                                      8,
                                      ['icon'],
                                    )),
                              ]),
                              t.createTextVNode(' ' + t.toDisplayString(t.unref(T)), 1),
                            ],
                          ),
                          t.createTextVNode(),
                          t.createElementVNode('div', yC, [
                            t.createVNode(mC, { node: d }, null, 8, ['node']),
                            t.createTextVNode(),
                            t.createElementVNode(
                              'a',
                              {
                                class: 'fw-normal small ms-1',
                                href: '',
                                onClick:
                                  O[1] || (O[1] = t.withModifiers(D => t.unref(l)(d.nodeId, !0), ['prevent', 'stop'])),
                              },
                              `
                #` + t.toDisplayString(d.nodeId),
                              1,
                            ),
                          ]),
                        ]),
                        t.createTextVNode(),
                        t.createElementVNode('div', SC, [
                          d[t.unref(E).RELATION_NAME] || d[t.unref(E).FUNCTION_NAME]
                            ? (t.openBlock(),
                              t.createElementBlock(
                                'div',
                                { key: 0, class: t.normalizeClass({ 'line-clamp-2': !f.value }) },
                                [
                                  bC,
                                  t.createTextVNode(),
                                  d[t.unref(E).SCHEMA]
                                    ? (t.openBlock(),
                                      t.createElementBlock(
                                        'span',
                                        xC,
                                        t.toDisplayString(d[t.unref(E).SCHEMA]) + '.',
                                        1,
                                      ))
                                    : t.createCommentVNode('', !0),
                                  t.createTextVNode(
                                    t.toDisplayString(d[t.unref(E).RELATION_NAME]) +
                                      ' ' +
                                      t.toDisplayString(d[t.unref(E).FUNCTION_NAME]) +
                                      ' ',
                                    1,
                                  ),
                                  d[t.unref(E).ALIAS]
                                    ? (t.openBlock(),
                                      t.createElementBlock('span', OC, [
                                        RC,
                                        t.createTextVNode(' ' + t.toDisplayString(d[t.unref(E).ALIAS]), 1),
                                      ]))
                                    : t.createCommentVNode('', !0),
                                ],
                                2,
                              ))
                            : d[t.unref(E).ALIAS]
                              ? (t.openBlock(),
                                t.createElementBlock(
                                  'div',
                                  { key: 1, class: t.normalizeClass({ 'line-clamp-2': !f.value }) },
                                  [
                                    CC,
                                    t.createTextVNode(),
                                    t.createElementVNode(
                                      'span',
                                      { innerHTML: t.unref(ar)(d[t.unref(E).ALIAS]) },
                                      null,
                                      8,
                                      IC,
                                    ),
                                  ],
                                  2,
                                ))
                              : t.createCommentVNode('', !0),
                          t.createTextVNode(),
                          d[t.unref(E).GROUP_KEY]
                            ? (t.openBlock(),
                              t.createElementBlock(
                                'div',
                                { key: 2, class: t.normalizeClass({ 'line-clamp-2': !f.value }) },
                                [
                                  LC,
                                  t.createTextVNode(),
                                  t.createElementVNode(
                                    'span',
                                    { innerHTML: t.unref(ar)(d[t.unref(E).GROUP_KEY]) },
                                    null,
                                    8,
                                    wC,
                                  ),
                                ],
                                2,
                              ))
                            : t.createCommentVNode('', !0),
                          t.createTextVNode(),
                          d[t.unref(E).SORT_KEY]
                            ? (t.openBlock(),
                              t.createElementBlock(
                                'div',
                                { key: 3, class: t.normalizeClass({ 'line-clamp-2': !f.value }) },
                                [
                                  vC,
                                  t.createTextVNode(),
                                  t.createElementVNode(
                                    'span',
                                    { innerHTML: t.unref(Qp)(d[t.unref(E).SORT_KEY], d[t.unref(E).PRESORTED_KEY]) },
                                    null,
                                    8,
                                    kC,
                                  ),
                                ],
                                2,
                              ))
                            : t.createCommentVNode('', !0),
                          t.createTextVNode(),
                          d[t.unref(E).JOIN_TYPE]
                            ? (t.openBlock(),
                              t.createElementBlock('div', DC, [
                                t.createTextVNode(t.toDisplayString(d[t.unref(E).JOIN_TYPE]) + ' ', 1),
                                VC,
                              ]))
                            : t.createCommentVNode('', !0),
                          t.createTextVNode(),
                          d[t.unref(E).INDEX_NAME]
                            ? (t.openBlock(),
                              t.createElementBlock(
                                'div',
                                { key: 5, class: t.normalizeClass({ 'line-clamp-2': !f.value }) },
                                [
                                  MC,
                                  t.createTextVNode(),
                                  t.createElementVNode(
                                    'span',
                                    { innerHTML: t.unref(ar)(d[t.unref(E).INDEX_NAME]) },
                                    null,
                                    8,
                                    BC,
                                  ),
                                ],
                                2,
                              ))
                            : t.createCommentVNode('', !0),
                          t.createTextVNode(),
                          d[t.unref(E).HASH_CONDITION]
                            ? (t.openBlock(),
                              t.createElementBlock(
                                'div',
                                { key: 6, class: t.normalizeClass({ 'line-clamp-2': !f.value }) },
                                [
                                  PC,
                                  t.createTextVNode(),
                                  t.createElementVNode(
                                    'span',
                                    { innerHTML: t.unref(ar)(d[t.unref(E).HASH_CONDITION]) },
                                    null,
                                    8,
                                    UC,
                                  ),
                                ],
                                2,
                              ))
                            : t.createCommentVNode('', !0),
                          t.createTextVNode(),
                          d[t.unref(E).CTE_NAME]
                            ? (t.openBlock(),
                              t.createElementBlock('div', $C, [
                                t.createElementVNode(
                                  'a',
                                  { class: 'text-reset', href: '', onClick: t.withModifiers(_, ['prevent', 'stop']) },
                                  [
                                    t.createVNode(
                                      t.unref(qe),
                                      { icon: t.unref(SN), class: 'text-secondary' },
                                      null,
                                      8,
                                      ['icon'],
                                    ),
                                    t.createTextVNode(),
                                    FC,
                                    t.createTextVNode(' ' + t.toDisplayString(d[t.unref(E).CTE_NAME]), 1),
                                  ],
                                  8,
                                  HC,
                                ),
                              ]))
                            : t.createCommentVNode('', !0),
                        ]),
                        t.createTextVNode(),
                        t.unref(c).highlightType !== t.unref(xt).NONE && t.unref(R) !== null
                          ? (t.openBlock(),
                            t.createElementBlock('div', WC, [
                              t.createElementVNode('div', zC, [
                                t.createElementVNode(
                                  'div',
                                  {
                                    class: 'progress-bar',
                                    role: 'progressbar',
                                    style: t.normalizeStyle({
                                      width: t.unref(N) + '%',
                                      'background-color': t.unref(b),
                                    }),
                                    'aria-valuenow': '0',
                                    'aria-valuemin': '0',
                                    'aria-valuemax': '100',
                                  },
                                  null,
                                  4,
                                ),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode('span', XC, [
                                t.createElementVNode('span', GC, t.toDisplayString(t.unref(c).highlightType) + ':', 1),
                                t.createTextVNode(),
                                t.createElementVNode('span', { innerHTML: t.unref(R) }, null, 8, YC),
                              ]),
                            ]))
                          : t.createCommentVNode('', !0),
                      ]),
                      t.createTextVNode(),
                      f.value
                        ? (t.openBlock(), t.createBlock(pC, { key: 0, node: d }, null, 8, ['node']))
                        : t.createCommentVNode('', !0),
                    ],
                    32,
                  ),
                ],
                2,
              ),
            ],
            544,
          )
        );
      },
    }),
    KC = { key: 0, class: 'plan-stats flex-shrink-0 d-flex border-bottom border-top align-items-center' },
    jC = { class: 'd-inline-block px-2' },
    qC = { key: 0, class: 'text-secondary' },
    JC = ['innerHTML'],
    QC = { class: 'd-inline-block border-start px-2' },
    ZC = { key: 0, class: 'text-secondary' },
    eI = { key: 1, class: 'stat-value' },
    tI = ['innerHTML'],
    nI = { key: 0, class: 'd-inline-block border-start px-2' },
    rI = { class: 'stat-value' },
    iI = ['innerHTML'],
    oI = { class: 'd-inline-block border-start px-2 position-relative' },
    aI = t.createElementVNode('span', { class: 'stat-label' }, 'Triggers: ', -1),
    sI = { class: 'stat-value' },
    lI = ['innerHTML'],
    cI = { key: 0, class: 'stat-dropdown-container text-start' },
    fI = t.createElementVNode('h3', null, 'Triggers', -1),
    uI = t.createElementVNode('br', null, null, -1),
    dI = t.createElementVNode('span', { class: 'text-secondary' }, 'Called', -1),
    pI = t.createElementVNode('span', { class: 'text-secondary' }, '×', -1),
    hI = { class: 'float-end' },
    mI = ['innerHTML'],
    EI = t.createElementVNode('span', { class: 'text-secondary' }, '%', -1),
    _I = t.createElementVNode('br', null, null, -1),
    gI = { key: 0, class: 'text-secondary' },
    TI = t.createElementVNode('div', { class: 'clearfix' }, null, -1),
    NI = { key: 1, class: 'my-2' },
    AI = { key: 1, class: 'text-secondary' },
    yI = { key: 1, class: 'd-inline-block border-start px-2 position-relative' },
    SI = { class: 'stat-label' },
    bI = { class: 'badge bg-secondary' },
    xI = { key: 0, class: 'stat-dropdown-container text-start' },
    OI = t.createElementVNode('h3', null, 'PG Settings', -1),
    RI = t.createElementVNode(
      'em',
      { class: 'text-secondary d-block pb-2' },
      `
          Configuration parameters affecting query planning with value different
          from the built-in default value.
        `,
      -1,
    ),
    CI = { class: 'table table-sm table-striped mb-0' },
    II = { key: 2, class: 'd-inline-block border-start px-2 position-relative' },
    LI = ['innerHTML'],
    $h = t.defineComponent({
      __name: 'PlanStats',
      setup(e) {
        const r = new Io().getHelpMessage,
          o = t.inject(xn),
          s = t.ref(!1),
          l = t.ref(!1),
          c = t.computed(() => o.value && o.value.content.Plan),
          f = N => {
            let b = NaN;
            return N > 90 ? (b = 4) : N > 40 ? (b = 3) : N > 10 && (b = 2), b ? 'c-' + b : !1;
          },
          d = t.computed(() => {
            const N = o.value.planStats.executionTime || 0,
              b = p.value || 0;
            return $.round((b / N) * 100);
          });
        function m(N) {
          const b = o.value.planStats.executionTime || 0,
            R = N.Time;
          return $.round((R / b) * 100);
        }
        const p = t.computed(() => $.sumBy(o.value.planStats.triggers, N => N.Time));
        function T(N) {
          const b = N[E.IO_READ_TIME],
            R = N[E.AVERAGE_IO_READ_TIME],
            C = N[E.IO_WRITE_TIME],
            B = N[E.AVERAGE_IO_WRITE_TIME],
            S = [];
          return (
            b &&
              S.push(
                `read=${Lr(E.IO_READ_TIME, b)} <small class="text-body-secondary">~${Lr(E.AVERAGE_IO_READ_TIME, R)}</small>`,
              ),
            C &&
              S.push(
                `write=${Lr(E.IO_WRITE_TIME, C)} <small class="text-body-secondary">~${Lr(E.AVERAGE_IO_WRITE_TIME, B)}</small>`,
              ),
            S.join(', ')
          );
        }
        return (N, b) =>
          t.unref(o)
            ? (t.openBlock(),
              t.createElementBlock('div', KC, [
                t.createElementVNode('div', jC, [
                  t.createTextVNode(`
      Execution time:
      `),
                  t.unref(o).planStats.executionTime
                    ? (t.openBlock(),
                      t.createElementBlock(
                        'span',
                        { key: 1, class: 'stat-value', innerHTML: t.unref(zt)(t.unref(o).planStats.executionTime) },
                        null,
                        8,
                        JC,
                      ))
                    : (t.openBlock(),
                      t.createElementBlock('span', qC, [
                        t.createTextVNode(`
          N/A
          `),
                        t.withDirectives(
                          t.createVNode(t.unref(qe), { icon: t.unref(Ro), class: 'cursor-help' }, null, 8, ['icon']),
                          [[t.unref(Qe), t.unref(r)('missing execution time')]],
                        ),
                      ])),
                ]),
                t.createTextVNode(),
                t.createElementVNode('div', QC, [
                  t.createTextVNode(`
      Planning time:
      `),
                  t.unref(o).planStats.planningTime
                    ? (t.openBlock(),
                      t.createElementBlock('span', eI, [
                        t.createElementVNode(
                          'span',
                          {
                            class: t.normalizeClass(
                              'mb-0 p-0 px-1 alert ' +
                                f((t.unref(o).planStats.planningTime / t.unref(o).planStats.executionTime) * 100),
                            ),
                            innerHTML: t.unref(zt)(t.unref(o).planStats.planningTime),
                          },
                          null,
                          10,
                          tI,
                        ),
                      ]))
                    : (t.openBlock(),
                      t.createElementBlock('span', ZC, [
                        t.createTextVNode(`
          N/A
          `),
                        t.withDirectives(
                          t.createVNode(t.unref(qe), { icon: t.unref(Ro), class: 'cursor-help' }, null, 8, ['icon']),
                          [[t.unref(Qe), t.unref(r)('missing planning time')]],
                        ),
                      ])),
                ]),
                t.createTextVNode(),
                t.unref(o).planStats.jitTime && t.unref(o).planStats.executionTime
                  ? (t.openBlock(),
                    t.createElementBlock('div', nI, [
                      t.createTextVNode(`
      JIT:
      `),
                      t.createElementVNode('span', rI, [
                        t.createElementVNode(
                          'span',
                          {
                            class: t.normalizeClass(
                              'mb-0 p-0 px-1 alert ' +
                                f((t.unref(o).planStats.jitTime / t.unref(o).planStats.executionTime) * 100),
                            ),
                            innerHTML: t.unref(zt)(t.unref(o).planStats.jitTime),
                          },
                          null,
                          10,
                          iI,
                        ),
                      ]),
                    ]))
                  : t.createCommentVNode('', !0),
                t.createTextVNode(),
                t.createElementVNode('div', oI, [
                  aI,
                  t.createTextVNode(),
                  t.unref(o).planStats.triggers && t.unref(o).planStats.triggers.length
                    ? (t.openBlock(),
                      t.createElementBlock(
                        t.Fragment,
                        { key: 0 },
                        [
                          t.createElementVNode('span', sI, [
                            t.createElementVNode(
                              'span',
                              {
                                class: t.normalizeClass('mb-0 p-0 px-1 alert ' + t.unref(bc)(t.unref(d))),
                                innerHTML: t.unref(zt)(t.unref(p)),
                              },
                              null,
                              10,
                              lI,
                            ),
                          ]),
                          t.createTextVNode(),
                          t.createElementVNode(
                            'button',
                            {
                              onClick: b[0] || (b[0] = t.withModifiers(R => (l.value = !l.value), ['prevent'])),
                              class: 'bg-transparent border-0 p-0 m-0 ps-1',
                            },
                            [t.createVNode(t.unref(qe), { icon: 'caret-down', class: 'text-secondary' })],
                          ),
                          t.createTextVNode(),
                          l.value
                            ? (t.openBlock(),
                              t.createElementBlock('div', cI, [
                                t.createElementVNode('button', {
                                  class: 'btn btn-xs btn-close float-end',
                                  onClick: b[1] || (b[1] = R => (l.value = !1)),
                                }),
                                t.createTextVNode(),
                                fI,
                                t.createTextVNode(),
                                (t.openBlock(!0),
                                t.createElementBlock(
                                  t.Fragment,
                                  null,
                                  t.renderList(
                                    t.unref(o).planStats.triggers,
                                    (R, C) => (
                                      t.openBlock(),
                                      t.createElementBlock('div', { key: C }, [
                                        t.createTextVNode(t.toDisplayString(R['Trigger Name']) + ' ', 1),
                                        uI,
                                        t.createTextVNode(),
                                        dI,
                                        t.createTextVNode(' ' + t.toDisplayString(R.Calls), 1),
                                        pI,
                                        t.createTextVNode(),
                                        t.createElementVNode('span', hI, [
                                          t.createElementVNode(
                                            'span',
                                            {
                                              class: t.normalizeClass('p-0 px-1 alert ' + t.unref(bc)(m(R))),
                                              innerHTML: t.unref(zt)(R.Time),
                                            },
                                            null,
                                            10,
                                            mI,
                                          ),
                                          t.createTextVNode(
                                            `
              | ` + t.toDisplayString(m(R)),
                                            1,
                                          ),
                                          EI,
                                        ]),
                                        t.createTextVNode(),
                                        _I,
                                        t.createTextVNode(),
                                        R.Relation
                                          ? (t.openBlock(), t.createElementBlock('span', gI, 'on'))
                                          : t.createCommentVNode('', !0),
                                        t.createTextVNode(' ' + t.toDisplayString(R.Relation) + ' ', 1),
                                        TI,
                                        t.createTextVNode(),
                                        t.unref(o).planStats.triggers && C != t.unref(o).planStats.triggers.length - 1
                                          ? (t.openBlock(), t.createElementBlock('hr', NI))
                                          : t.createCommentVNode('', !0),
                                      ])
                                    ),
                                  ),
                                  128,
                                )),
                              ]))
                            : t.createCommentVNode('', !0),
                        ],
                        64,
                      ))
                    : (t.openBlock(), t.createElementBlock('span', AI, ' N/A ')),
                ]),
                t.createTextVNode(),
                t.unref(o).planStats.settings
                  ? (t.openBlock(),
                    t.createElementBlock('div', yI, [
                      t.createElementVNode('span', SI, [
                        t.createTextVNode(`Settings:
        `),
                        t.createElementVNode(
                          'span',
                          bI,
                          t.toDisplayString(t.unref($).keys(t.unref(o).planStats.settings).length),
                          1,
                        ),
                      ]),
                      t.createTextVNode(),
                      t.createElementVNode(
                        'button',
                        {
                          onClick: b[2] || (b[2] = t.withModifiers(R => (s.value = !s.value), ['prevent'])),
                          class: 'bg-transparent border-0 p-0 m-0 ps-1',
                        },
                        [t.createVNode(t.unref(qe), { icon: t.unref(TN), class: 'text-secondary' }, null, 8, ['icon'])],
                      ),
                      t.createTextVNode(),
                      s.value
                        ? (t.openBlock(),
                          t.createElementBlock('div', xI, [
                            t.createElementVNode('button', {
                              class: 'btn btn-xs btn-close float-end',
                              onClick: b[3] || (b[3] = R => (s.value = !1)),
                            }),
                            t.createTextVNode(),
                            OI,
                            t.createTextVNode(),
                            RI,
                            t.createTextVNode(),
                            t.createElementVNode('table', CI, [
                              t.createElementVNode('tbody', null, [
                                (t.openBlock(!0),
                                t.createElementBlock(
                                  t.Fragment,
                                  null,
                                  t.renderList(
                                    t.unref(o).planStats.settings,
                                    (R, C) => (
                                      t.openBlock(),
                                      t.createElementBlock('tr', { key: C }, [
                                        t.createElementVNode('td', null, t.toDisplayString(C), 1),
                                        t.createTextVNode(),
                                        t.createElementVNode('td', null, t.toDisplayString(R), 1),
                                      ])
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                            ]),
                          ]))
                        : t.createCommentVNode('', !0),
                    ]))
                  : t.createCommentVNode('', !0),
                t.createTextVNode(),
                t.unref(c) &&
                (t.unref(c)[t.unref(E).AVERAGE_IO_READ_TIME] || t.unref(c)[t.unref(E).AVERAGE_IO_WRITE_TIME])
                  ? (t.openBlock(),
                    t.createElementBlock('div', II, [
                      t.createTextVNode(`
      IO: `),
                      t.createElementVNode('span', { innerHTML: T(t.unref(c)) }, null, 8, LI),
                    ]))
                  : t.createCommentVNode('', !0),
              ]))
            : t.createCommentVNode('', !0);
      },
    }),
    wI = { class: 'table' },
    ns = t.defineComponent({
      __name: 'SortedTable',
      props: { values: null, sort: null, dir: null },
      setup(e) {
        const n = e,
          r = t.ref(n.sort),
          o = t.ref(n.dir);
        t.provide('sort', r), t.provide('dir', o), t.provide('sortBy', l);
        const s = t.computed(() => $.orderBy(n.values, r.value, o.value));
        function l(c) {
          c === r.value && (o.value = o.value === Gn.asc ? Gn.desc : Gn.asc), (r.value = c);
        }
        return (c, f) => (
          t.openBlock(),
          t.createElementBlock('table', wI, [
            t.renderSlot(c.$slots, 'default'),
            t.createTextVNode(),
            t.renderSlot(c.$slots, 'head'),
            t.createTextVNode(),
            t.renderSlot(c.$slots, 'body', { values: t.unref(s) }),
            t.createTextVNode(),
            t.renderSlot(c.$slots, 'foot'),
          ])
        );
      },
    }),
    En = t.defineComponent({
      __name: 'SortLink',
      props: { name: null },
      setup(e) {
        const n = t.inject('dir'),
          r = t.inject('sort'),
          o = t.inject('sortBy');
        return (s, l) => (
          t.openBlock(),
          t.createElementBlock(
            'a',
            {
              href: '#',
              onClick: l[0] || (l[0] = t.withModifiers(c => t.unref(o) && t.unref(o)(e.name), ['prevent'])),
            },
            [
              t.renderSlot(s.$slots, 'default', {}, () => [t.createTextVNode(t.toDisplayString(e.name), 1)]),
              t.createTextVNode(),
              t.unref(r) == e.name && t.unref(n) == t.unref(Gn).asc
                ? (t.openBlock(),
                  t.createBlock(t.unref(qe), { key: 0, 'fixed-width': '', icon: t.unref(NN) }, null, 8, ['icon']))
                : t.unref(r) == e.name && t.unref(n) == t.unref(Gn).desc
                  ? (t.openBlock(),
                    t.createBlock(t.unref(qe), { key: 1, 'fixed-width': '', icon: t.unref(mN) }, null, 8, ['icon']))
                  : t.createCommentVNode('', !0),
            ],
          )
        );
      },
    }),
    vI = { class: 'thead-light' },
    kI = { class: 'text-end' },
    DI = { class: 'text-end' },
    VI = { class: 'text-end' },
    MI = { class: 'ps-3' },
    BI = ['href'],
    PI = t.createElementVNode('td', { class: 'text-end' }, null, -1),
    UI = { class: 'text-end' },
    $I = { class: 'px-1' },
    HI = { class: 'text-end' },
    rs = t.defineComponent({
      __name: 'StatsTableItem',
      props: { value: null, executionTime: null },
      setup(e) {
        const n = e,
          r = t.ref(!1);
        function o(s) {
          return s[E.EXCLUSIVE_DURATION] / n.executionTime;
        }
        return (s, l) => (
          t.openBlock(),
          t.createElementBlock(
            t.Fragment,
            null,
            [
              t.createElementVNode('thead', vI, [
                t.createElementVNode(
                  'tr',
                  { onClick: l[0] || (l[0] = t.withModifiers(c => (r.value = !r.value), ['prevent'])), role: 'button' },
                  [
                    t.createElementVNode('th', null, [
                      r.value
                        ? (t.openBlock(),
                          t.createBlock(t.unref(qe), { key: 0, 'fixed-width': '', icon: t.unref(Rp) }, null, 8, [
                            'icon',
                          ]))
                        : (t.openBlock(),
                          t.createBlock(t.unref(qe), { key: 1, 'fixed-width': '', icon: t.unref(bN) }, null, 8, [
                            'icon',
                          ])),
                      t.createTextVNode(' ' + t.toDisplayString(n.value.name), 1),
                    ]),
                    t.createTextVNode(),
                    t.createElementVNode('th', kI, t.toDisplayString(n.value.count), 1),
                    t.createTextVNode(),
                    t.createElementVNode('th', DI, [
                      t.createElementVNode(
                        'span',
                        { class: t.normalizeClass(['alert p-0 px-1', t.unref(bc)(n.value.timePercent * 100)]) },
                        t.toDisplayString(t.unref(zt)(n.value.time)),
                        3,
                      ),
                    ]),
                    t.createTextVNode(),
                    t.createElementVNode('th', VI, t.toDisplayString(t.unref(Zp)(n.value.timePercent)), 1),
                  ],
                ),
              ]),
              t.createTextVNode(),
              t.createElementVNode(
                'tbody',
                { class: t.normalizeClass(r.value ? '' : 'd-none') },
                [
                  (t.openBlock(!0),
                  t.createElementBlock(
                    t.Fragment,
                    null,
                    t.renderList(
                      t.unref($).reverse(t.unref($).sortBy(n.value.nodes, t.unref(E).EXCLUSIVE_DURATION)),
                      c => (
                        t.openBlock(),
                        t.createElementBlock('tr', { key: c.nodeId, style: { 'font-size': 'smaller' } }, [
                          t.createElementVNode('td', MI, [
                            t.createElementVNode(
                              'a',
                              { href: `#plan/node/${c.nodeId}`, class: 'me-1' },
                              '#' + t.toDisplayString(c.nodeId),
                              9,
                              BI,
                            ),
                            t.createTextVNode(' ' + t.toDisplayString(c[t.unref(E).NODE_TYPE]), 1),
                          ]),
                          t.createTextVNode(),
                          PI,
                          t.createTextVNode(),
                          t.createElementVNode('td', UI, [
                            t.createElementVNode(
                              'span',
                              $I,
                              t.toDisplayString(t.unref(zt)(c[t.unref(E).EXCLUSIVE_DURATION])),
                              1,
                            ),
                          ]),
                          t.createTextVNode(),
                          t.createElementVNode('td', HI, t.toDisplayString(t.unref(Zp)(o(c))), 1),
                        ])
                      ),
                    ),
                    128,
                  )),
                ],
                2,
              ),
            ],
            64,
          )
        );
      },
    }),
    FI = { class: 'small stats container-fluid mt-2' },
    WI = { class: 'row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4' },
    zI = { class: 'col' },
    XI = { class: 'card' },
    GI = { class: 'card-body' },
    YI = { class: 'table-secondary' },
    KI = { scope: 'col' },
    jI = { scope: 'col', class: 'text-end' },
    qI = { scope: 'col', colspan: '2', class: 'text-end' },
    JI = { key: 0 },
    QI = [
      t.createElementVNode(
        'tr',
        null,
        [
          t.createElementVNode(
            'td',
            { colspan: '3', class: 'text-center fst-italic' },
            `
                    No tables used
                  `,
          ),
        ],
        -1,
      ),
    ],
    ZI = { class: 'col' },
    eL = { class: 'card' },
    tL = { class: 'card-body' },
    nL = { class: 'table-secondary' },
    rL = { scope: 'col' },
    iL = { scope: 'col', class: 'text-end' },
    oL = { scope: 'col', colspan: '2', class: 'text-end' },
    aL = { key: 0 },
    sL = [
      t.createElementVNode(
        'tr',
        null,
        [
          t.createElementVNode(
            'td',
            { colspan: '3', class: 'text-center fst-italic' },
            `
                    No function used
                  `,
          ),
        ],
        -1,
      ),
    ],
    lL = { class: 'col' },
    cL = { class: 'card' },
    fL = { class: 'card-body' },
    uL = { class: 'table-secondary' },
    dL = { scope: 'col' },
    pL = { scope: 'col', class: 'text-end' },
    hL = { scope: 'col', colspan: '2', class: 'text-end' },
    mL = { class: 'col' },
    EL = { class: 'card' },
    _L = { class: 'card-body' },
    gL = { class: 'table-secondary' },
    TL = { scope: 'col' },
    NL = { scope: 'col', class: 'text-end' },
    AL = { scope: 'col', colspan: '2', class: 'text-end' },
    yL = { key: 0 },
    SL = [
      t.createElementVNode(
        'tr',
        null,
        [
          t.createElementVNode(
            'td',
            { colspan: '3', class: 'text-center fst-italic' },
            `
                    No index used
                  `,
          ),
        ],
        -1,
      ),
    ],
    bL = t.defineComponent({
      __name: 'Stats',
      setup(e) {
        const n = [],
          r = t.ref(0),
          o = t.inject(xn);
        t.onBeforeMount(() => {
          var p;
          (r.value =
            o.value.planStats.executionTime || ((p = o.value.content.Plan) == null ? void 0 : p[E.ACTUAL_TOTAL_TIME])),
            o.value.content.Plan &&
              (s(n, o.value.content.Plan),
              $.each(o.value.ctes, T => {
                s(n, T);
              }));
        });
        function s(p, T) {
          p.push(T),
            $.each(T.Plans, N => {
              s(p, N);
            });
        }
        function l(p) {
          return $.sumBy(p, E.EXCLUSIVE_DURATION) / r.value;
        }
        const c = t.computed(() => {
            const p = $.groupBy(
                $.filter(n, N => N[E.RELATION_NAME] !== void 0),
                E.RELATION_NAME,
              ),
              T = [];
            return (
              $.each(p, (N, b) => {
                T.push({
                  name: b,
                  count: N.length,
                  time: $.sumBy(N, E.EXCLUSIVE_DURATION),
                  timePercent: l(N),
                  nodes: N,
                });
              }),
              T
            );
          }),
          f = t.computed(() => {
            const p = $.groupBy(
                $.filter(n, N => N[E.FUNCTION_NAME] !== void 0),
                E.FUNCTION_NAME,
              ),
              T = [];
            return (
              $.each(p, (N, b) => {
                T.push({
                  name: b,
                  count: N.length,
                  time: $.sumBy(N, E.EXCLUSIVE_DURATION),
                  timePercent: l(N),
                  nodes: N,
                });
              }),
              T
            );
          }),
          d = t.computed(() => {
            const p = $.groupBy(n, E.NODE_TYPE),
              T = [];
            return (
              $.each(p, (N, b) => {
                T.push({
                  name: b,
                  count: N.length,
                  time: $.sumBy(N, E.EXCLUSIVE_DURATION),
                  timePercent: l(N),
                  nodes: N,
                });
              }),
              T
            );
          }),
          m = t.computed(() => {
            const p = $.groupBy(
                $.filter(n, N => N[E.INDEX_NAME] !== void 0),
                E.INDEX_NAME,
              ),
              T = [];
            return (
              $.each(p, (N, b) => {
                T.push({
                  name: b,
                  count: N.length,
                  time: $.sumBy(N, E.EXCLUSIVE_DURATION),
                  timePercent: l(N),
                  nodes: N,
                });
              }),
              T
            );
          });
        return (p, T) => (
          t.openBlock(),
          t.createElementBlock('div', FI, [
            t.createElementVNode('div', WI, [
              t.createElementVNode('div', zI, [
                t.createElementVNode('div', XI, [
                  t.createElementVNode('div', GI, [
                    t.createVNode(
                      ns,
                      { class: 'table table-sm mb-0', values: t.unref(c), sort: 'time', dir: t.unref(Gn).desc },
                      {
                        body: t.withCtx(N => [
                          (t.openBlock(!0),
                          t.createElementBlock(
                            t.Fragment,
                            null,
                            t.renderList(
                              N.values,
                              b => (
                                t.openBlock(),
                                t.createBlock(rs, { key: b, value: b, executionTime: r.value }, null, 8, [
                                  'value',
                                  'executionTime',
                                ])
                              ),
                            ),
                            128,
                          )),
                        ]),
                        default: t.withCtx(() => [
                          t.createElementVNode('thead', YI, [
                            t.createElementVNode('tr', null, [
                              t.createElementVNode('th', KI, [
                                t.createVNode(
                                  En,
                                  { name: 'name' },
                                  { default: t.withCtx(() => [t.createTextVNode('Table')]), _: 1 },
                                ),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode('th', jI, [
                                t.createVNode(
                                  En,
                                  { name: 'count' },
                                  { default: t.withCtx(() => [t.createTextVNode('Count')]), _: 1 },
                                ),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode('th', qI, [
                                t.createVNode(
                                  En,
                                  { name: 'time' },
                                  { default: t.withCtx(() => [t.createTextVNode('Time')]), _: 1 },
                                ),
                              ]),
                            ]),
                          ]),
                          t.createTextVNode(),
                          t.createTextVNode(),
                          t.unref(c).length
                            ? t.createCommentVNode('', !0)
                            : (t.openBlock(), t.createElementBlock('tbody', JI, QI)),
                        ]),
                        _: 1,
                      },
                      8,
                      ['values', 'dir'],
                    ),
                  ]),
                ]),
              ]),
              t.createTextVNode(),
              t.createElementVNode('div', ZI, [
                t.createElementVNode('div', eL, [
                  t.createElementVNode('div', tL, [
                    t.createVNode(
                      ns,
                      { class: 'table table-sm mb-0', values: t.unref(f), sort: 'time', dir: t.unref(Gn).desc },
                      {
                        body: t.withCtx(N => [
                          (t.openBlock(!0),
                          t.createElementBlock(
                            t.Fragment,
                            null,
                            t.renderList(
                              N.values,
                              b => (
                                t.openBlock(),
                                t.createBlock(rs, { key: b, value: b, executionTime: r.value }, null, 8, [
                                  'value',
                                  'executionTime',
                                ])
                              ),
                            ),
                            128,
                          )),
                        ]),
                        default: t.withCtx(() => [
                          t.createElementVNode('thead', nL, [
                            t.createElementVNode('tr', null, [
                              t.createElementVNode('th', rL, [
                                t.createVNode(
                                  En,
                                  { name: 'name' },
                                  { default: t.withCtx(() => [t.createTextVNode('Function')]), _: 1 },
                                ),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode('th', iL, [
                                t.createVNode(
                                  En,
                                  { name: 'count' },
                                  { default: t.withCtx(() => [t.createTextVNode('Count')]), _: 1 },
                                ),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode('th', oL, [
                                t.createVNode(
                                  En,
                                  { name: 'time' },
                                  { default: t.withCtx(() => [t.createTextVNode('Time')]), _: 1 },
                                ),
                              ]),
                            ]),
                          ]),
                          t.createTextVNode(),
                          t.createTextVNode(),
                          t.unref(f).length
                            ? t.createCommentVNode('', !0)
                            : (t.openBlock(), t.createElementBlock('tbody', aL, sL)),
                        ]),
                        _: 1,
                      },
                      8,
                      ['values', 'dir'],
                    ),
                  ]),
                ]),
              ]),
              t.createTextVNode(),
              t.createElementVNode('div', lL, [
                t.createElementVNode('div', cL, [
                  t.createElementVNode('div', fL, [
                    t.createVNode(
                      ns,
                      { class: 'table table-sm mb-0', values: t.unref(d), sort: 'time', dir: t.unref(Gn).desc },
                      {
                        body: t.withCtx(N => [
                          (t.openBlock(!0),
                          t.createElementBlock(
                            t.Fragment,
                            null,
                            t.renderList(
                              N.values,
                              b => (
                                t.openBlock(),
                                t.createBlock(rs, { key: b, value: b, executionTime: r.value }, null, 8, [
                                  'value',
                                  'executionTime',
                                ])
                              ),
                            ),
                            128,
                          )),
                        ]),
                        default: t.withCtx(() => [
                          t.createElementVNode('thead', uL, [
                            t.createElementVNode('tr', null, [
                              t.createElementVNode('th', dL, [
                                t.createVNode(
                                  En,
                                  { name: 'name' },
                                  { default: t.withCtx(() => [t.createTextVNode('Node Type')]), _: 1 },
                                ),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode('th', pL, [
                                t.createVNode(
                                  En,
                                  { name: 'count' },
                                  { default: t.withCtx(() => [t.createTextVNode('Count')]), _: 1 },
                                ),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode('th', hL, [
                                t.createVNode(
                                  En,
                                  { name: 'time' },
                                  { default: t.withCtx(() => [t.createTextVNode('Time')]), _: 1 },
                                ),
                              ]),
                            ]),
                          ]),
                          t.createTextVNode(),
                        ]),
                        _: 1,
                      },
                      8,
                      ['values', 'dir'],
                    ),
                  ]),
                ]),
              ]),
              t.createTextVNode(),
              t.createElementVNode('div', mL, [
                t.createElementVNode('div', EL, [
                  t.createElementVNode('div', _L, [
                    t.createVNode(
                      ns,
                      { class: 'table table-sm mb-0', values: t.unref(m), sort: 'time', dir: t.unref(Gn).desc },
                      {
                        body: t.withCtx(N => [
                          (t.openBlock(!0),
                          t.createElementBlock(
                            t.Fragment,
                            null,
                            t.renderList(
                              N.values,
                              b => (
                                t.openBlock(),
                                t.createBlock(rs, { key: b, value: b, executionTime: r.value }, null, 8, [
                                  'value',
                                  'executionTime',
                                ])
                              ),
                            ),
                            128,
                          )),
                        ]),
                        default: t.withCtx(() => [
                          t.createElementVNode('thead', gL, [
                            t.createElementVNode('tr', null, [
                              t.createElementVNode('th', TL, [
                                t.createVNode(
                                  En,
                                  { name: 'name' },
                                  { default: t.withCtx(() => [t.createTextVNode('Index')]), _: 1 },
                                ),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode('th', NL, [
                                t.createVNode(
                                  En,
                                  { name: 'count' },
                                  { default: t.withCtx(() => [t.createTextVNode('Count')]), _: 1 },
                                ),
                              ]),
                              t.createTextVNode(),
                              t.createElementVNode('th', AL, [
                                t.createVNode(
                                  En,
                                  { name: 'time' },
                                  { default: t.withCtx(() => [t.createTextVNode('Time')]), _: 1 },
                                ),
                              ]),
                            ]),
                          ]),
                          t.createTextVNode(),
                          t.createTextVNode(),
                          t.unref(m).length
                            ? t.createCommentVNode('', !0)
                            : (t.openBlock(), t.createElementBlock('tbody', yL, SL)),
                        ]),
                        _: 1,
                      },
                      8,
                      ['values', 'dir'],
                    ),
                  ]),
                ]),
              ]),
            ]),
          ])
        );
      },
    });
  let xL =
    ((jm = class {
      constructor(n) {
        we(this, 'nodeId');
        we(this, 'size');
        we(this, 'Options');
        we(this, 'Timing');
        we(this, 'Settings');
        we(this, fV);
        we(this, uV);
        we(this, dV);
        we(this, pV);
        we(this, hV);
        we(this, mV);
        we(this, EV);
        we(this, _V);
        we(this, gV);
        we(this, TV);
        we(this, NV);
        we(this, AV);
        we(this, yV);
        we(this, SV);
        we(this, bV);
        we(this, xV);
        we(this, OV);
        we(this, RV);
        we(this, CV);
        we(this, IV);
        we(this, LV);
        we(this, wV);
        we(this, vV);
        we(this, kV);
        we(this, DV);
        we(this, VV);
        we(this, MV);
        we(this, BV);
        we(this, PV);
        we(this, UV);
        we(this, $V);
        we(this, HV);
        we(this, FV);
        we(this, WV);
        we(this, zV);
        we(this, XV);
        we(this, GV);
        we(this, YV);
        we(this, KV);
        if (!n) return;
        this[E.NODE_TYPE] = n;
        const r =
            /^((?:Parallel\s+)?(?:Seq\sScan|Tid.*Scan|Bitmap\s+Heap\s+Scan|(?:Async\s+)?Foreign\s+Scan|Update|Insert|Delete))\son\s(\S+)(?:\s+(\S+))?$/.exec(
              n,
            ),
          o = /^(Bitmap\s+Index\s+Scan)\son\s(\S+)$/.exec(n),
          s = /^((?:Parallel\s+)?Index(?:\sOnly)?\sScan(?:\sBackward)?)\susing\s(\S+)\son\s(\S+)(?:\s+(\S+))?$/.exec(n),
          l = /^(CTE\sScan)\son\s(\S+)(?:\s+(\S+))?$/.exec(n),
          c = /^(Function\sScan)\son\s(\S+)(?:\s+(\S+))?$/.exec(n),
          f = /^(Subquery\sScan)\son\s(.+)$/.exec(n);
        r
          ? ((this[E.NODE_TYPE] = r[1]), (this[E.RELATION_NAME] = r[2]), r[3] && (this[E.ALIAS] = r[3]))
          : o
            ? ((this[E.NODE_TYPE] = o[1]), (this[E.INDEX_NAME] = o[2]))
            : s
              ? ((this[E.NODE_TYPE] = s[1]),
                (this[E.INDEX_NAME] = s[2]),
                (this[E.RELATION_NAME] = s[3]),
                s[4] && (this[E.ALIAS] = s[4]))
              : l
                ? ((this[E.NODE_TYPE] = l[1]), (this[E.CTE_NAME] = l[2]), l[3] && (this[E.ALIAS] = l[3]))
                : c
                  ? ((this[E.NODE_TYPE] = c[1]), (this[E.FUNCTION_NAME] = c[2]), c[3] && (this[E.ALIAS] = c[3]))
                  : f && ((this[E.NODE_TYPE] = f[1]), (this[E.ALIAS] = f[2]));
        const d = /^(Parallel\s+)(.*)/.exec(this[E.NODE_TYPE]);
        d && ((this[E.NODE_TYPE] = d[2]), (this[E.PARALLEL_AWARE] = !0));
        const m = /(.*)\sJoin$/.exec(this[E.NODE_TYPE]),
          p = /(.*)\s+(Full|Left|Right|Anti)/.exec(this[E.NODE_TYPE]);
        m &&
          ((this[E.NODE_TYPE] = m[1]),
          p && ((this[E.NODE_TYPE] = p[1]), (this[E.JOIN_TYPE] = p[2])),
          (this[E.NODE_TYPE] += ' Join'));
      }
    }),
    (fV = E.ACTUAL_LOOPS),
    (uV = E.ACTUAL_ROWS),
    (dV = E.ACTUAL_ROWS_REVISED),
    (pV = E.ACTUAL_STARTUP_TIME),
    (hV = E.ACTUAL_TOTAL_TIME),
    (mV = E.EXCLUSIVE_COST),
    (EV = E.EXCLUSIVE_DURATION),
    (_V = E.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS),
    (gV = E.EXCLUSIVE_LOCAL_HIT_BLOCKS),
    (TV = E.EXCLUSIVE_LOCAL_READ_BLOCKS),
    (NV = E.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS),
    (AV = E.EXCLUSIVE_SHARED_DIRTIED_BLOCKS),
    (yV = E.EXCLUSIVE_SHARED_HIT_BLOCKS),
    (SV = E.EXCLUSIVE_SHARED_READ_BLOCKS),
    (bV = E.EXCLUSIVE_SHARED_WRITTEN_BLOCKS),
    (xV = E.EXCLUSIVE_TEMP_READ_BLOCKS),
    (OV = E.EXCLUSIVE_TEMP_WRITTEN_BLOCKS),
    (RV = E.FILTER),
    (CV = E.PLANNER_ESTIMATE_DIRECTION),
    (IV = E.PLANNER_ESTIMATE_FACTOR),
    (LV = E.INDEX_NAME),
    (wV = E.NODE_TYPE),
    (vV = E.PARALLEL_AWARE),
    (kV = E.PLANS),
    (DV = E.PLAN_ROWS),
    (VV = E.PLAN_ROWS_REVISED),
    (MV = E.ROWS_REMOVED_BY_FILTER_REVISED),
    (BV = E.ROWS_REMOVED_BY_JOIN_FILTER_REVISED),
    (PV = E.SUBPLAN_NAME),
    (UV = E.TOTAL_COST),
    ($V = E.WORKERS),
    (HV = E.WORKERS_LAUNCHED),
    (FV = E.WORKERS_PLANNED),
    (WV = E.WORKERS_PLANNED_BY_GATHER),
    (zV = E.WORKERS_PLANNED_BY_GATHER),
    (XV = E.EXCLUSIVE_IO_READ_TIME),
    (GV = E.EXCLUSIVE_IO_WRITE_TIME),
    (YV = E.AVERAGE_IO_READ_TIME),
    (KV = E.AVERAGE_IO_WRITE_TIME),
    jm);
  class OL {
    constructor(n) {
      this[Co.WORKER_NUMBER] = n;
    }
  }
  var Hh = {},
    Fc,
    Fh;
  function RL() {
    if (Fh) return Fc;
    (Fh = 1), (Fc = e);
    function e(r) {
      if (r) return n(r);
    }
    function n(r) {
      for (var o in e.prototype) r[o] = e.prototype[o];
      return r;
    }
    return (
      (e.prototype.on = e.prototype.addEventListener =
        function (r, o) {
          return (
            (this._callbacks = this._callbacks || {}), (this._callbacks[r] = this._callbacks[r] || []).push(o), this
          );
        }),
      (e.prototype.once = function (r, o) {
        var s = this;
        this._callbacks = this._callbacks || {};
        function l() {
          s.off(r, l), o.apply(this, arguments);
        }
        return (l.fn = o), this.on(r, l), this;
      }),
      (e.prototype.off =
        e.prototype.removeListener =
        e.prototype.removeAllListeners =
        e.prototype.removeEventListener =
          function (r, o) {
            if (((this._callbacks = this._callbacks || {}), arguments.length == 0)) return (this._callbacks = {}), this;
            var s = this._callbacks[r];
            if (!s) return this;
            if (arguments.length == 1) return delete this._callbacks[r], this;
            for (var l, c = 0; c < s.length; c++)
              if (((l = s[c]), l === o || l.fn === o)) {
                s.splice(c, 1);
                break;
              }
            return this;
          }),
      (e.prototype.emit = function (r) {
        this._callbacks = this._callbacks || {};
        var o = [].slice.call(arguments, 1),
          s = this._callbacks[r];
        if (s) {
          s = s.slice(0);
          for (var l = 0, c = s.length; l < c; ++l) s[l].apply(this, o);
        }
        return this;
      }),
      (e.prototype.listeners = function (r) {
        return (this._callbacks = this._callbacks || {}), this._callbacks[r] || [];
      }),
      (e.prototype.hasListeners = function (r) {
        return !!this.listeners(r).length;
      }),
      Fc
    );
  }
  var Wc, Wh;
  function CL() {
    if (Wh) return Wc;
    Wh = 1;
    var e = RL();
    function n() {
      e.call(this);
    }
    return (
      (n.prototype = new e()),
      (Wc = n),
      (n.Stream = n),
      (n.prototype.pipe = function (r, o) {
        var s = this;
        function l(N) {
          r.writable && r.write(N) === !1 && s.pause && s.pause();
        }
        s.on('data', l);
        function c() {
          s.readable && s.resume && s.resume();
        }
        r.on('drain', c), !r._isStdio && (!o || o.end !== !1) && (s.on('end', d), s.on('close', m));
        var f = !1;
        function d() {
          f || ((f = !0), r.end());
        }
        function m() {
          f || ((f = !0), typeof r.destroy == 'function' && r.destroy());
        }
        function p(N) {
          if ((T(), !this.hasListeners('error'))) throw N;
        }
        s.on('error', p), r.on('error', p);
        function T() {
          s.off('data', l),
            r.off('drain', c),
            s.off('end', d),
            s.off('close', m),
            s.off('error', p),
            r.off('error', p),
            s.off('end', T),
            s.off('close', T),
            r.off('end', T),
            r.off('close', T);
        }
        return s.on('end', T), s.on('close', T), r.on('end', T), r.on('close', T), r.emit('pipe', s), r;
      }),
      Wc
    );
  }
  (function (e) {
    (function (n) {
      var r = typeof process == 'object' && process.env ? process.env : self;
      (n.parser = function (L) {
        return new N(L);
      }),
        (n.CParser = N),
        (n.CStream = R),
        (n.createStream = b),
        (n.MAX_BUFFER_LENGTH = 64 * 1024),
        (n.DEBUG = r.CDEBUG === 'debug'),
        (n.INFO = r.CDEBUG === 'debug' || r.CDEBUG === 'info'),
        (n.EVENTS = [
          'value',
          'string',
          'key',
          'openobject',
          'closeobject',
          'openarray',
          'closearray',
          'error',
          'end',
          'ready',
        ]);
      var o = { textNode: void 0, numberNode: '' },
        s = n.EVENTS.filter(function (L) {
          return L !== 'error' && L !== 'end';
        }),
        l = 0,
        c;
      n.STATE = {
        BEGIN: l++,
        VALUE: l++,
        OPEN_OBJECT: l++,
        CLOSE_OBJECT: l++,
        OPEN_ARRAY: l++,
        CLOSE_ARRAY: l++,
        TEXT_ESCAPE: l++,
        STRING: l++,
        BACKSLASH: l++,
        END: l++,
        OPEN_KEY: l++,
        CLOSE_KEY: l++,
        TRUE: l++,
        TRUE2: l++,
        TRUE3: l++,
        FALSE: l++,
        FALSE2: l++,
        FALSE3: l++,
        FALSE4: l++,
        NULL: l++,
        NULL2: l++,
        NULL3: l++,
        NUMBER_DECIMAL_POINT: l++,
        NUMBER_DIGIT: l++,
      };
      for (var f in n.STATE) n.STATE[n.STATE[f]] = f;
      l = n.STATE;
      const d = {
        tab: 9,
        lineFeed: 10,
        carriageReturn: 13,
        space: 32,
        doubleQuote: 34,
        plus: 43,
        comma: 44,
        minus: 45,
        period: 46,
        _0: 48,
        _9: 57,
        colon: 58,
        E: 69,
        openBracket: 91,
        backslash: 92,
        closeBracket: 93,
        a: 97,
        b: 98,
        e: 101,
        f: 102,
        l: 108,
        n: 110,
        r: 114,
        s: 115,
        t: 116,
        u: 117,
        openBrace: 123,
        closeBrace: 125,
      };
      Object.create ||
        (Object.create = function (L) {
          function y() {
            this.__proto__ = L;
          }
          return (y.prototype = L), new y();
        }),
        Object.getPrototypeOf ||
          (Object.getPrototypeOf = function (L) {
            return L.__proto__;
          }),
        Object.keys ||
          (Object.keys = function (L) {
            var y = [];
            for (var K in L) L.hasOwnProperty(K) && y.push(K);
            return y;
          });
      function m(L) {
        var y = Math.max(n.MAX_BUFFER_LENGTH, 10),
          K = 0;
        for (var M in o) {
          var H = L[M] === void 0 ? 0 : L[M].length;
          if (H > y)
            switch (M) {
              case 'text':
                closeText(L);
                break;
              default:
                _(L, 'Max buffer length exceeded: ' + M);
            }
          K = Math.max(K, H);
        }
        L.bufferCheckPosition = n.MAX_BUFFER_LENGTH - K + L.position;
      }
      function p(L) {
        for (var y in o) L[y] = o[y];
      }
      var T = /[\\"\n]/g;
      function N(L) {
        if (!(this instanceof N)) return new N(L);
        var y = this;
        p(y),
          (y.bufferCheckPosition = n.MAX_BUFFER_LENGTH),
          (y.q = y.c = y.p = ''),
          (y.opt = L || {}),
          (y.closed = y.closedRoot = y.sawRoot = !1),
          (y.tag = y.error = null),
          (y.state = l.BEGIN),
          (y.stack = new Array()),
          (y.position = y.column = 0),
          (y.line = 1),
          (y.slashed = !1),
          (y.unicodeI = 0),
          (y.unicodeS = null),
          (y.depth = 0),
          C(y, 'onready');
      }
      N.prototype = {
        end: function () {
          k(this);
        },
        write: D,
        resume: function () {
          return (this.error = null), this;
        },
        close: function () {
          return this.write(null);
        },
      };
      try {
        c = CL().Stream;
      } catch {
        c = function () {};
      }
      function b(L) {
        return new R(L);
      }
      function R(L) {
        if (!(this instanceof R)) return new R(L);
        (this._parser = new N(L)),
          (this.writable = !0),
          (this.readable = !0),
          (this.bytes_remaining = 0),
          (this.bytes_in_sequence = 0),
          (this.temp_buffs = { 2: new Buffer(2), 3: new Buffer(3), 4: new Buffer(4) }),
          (this.string = '');
        var y = this;
        c.apply(y),
          (this._parser.onend = function () {
            y.emit('end');
          }),
          (this._parser.onerror = function (K) {
            y.emit('error', K), (y._parser.error = null);
          }),
          s.forEach(function (K) {
            Object.defineProperty(y, 'on' + K, {
              get: function () {
                return y._parser['on' + K];
              },
              set: function (M) {
                if (!M) return y.removeAllListeners(K), (y._parser['on' + K] = M), M;
                y.on(K, M);
              },
              enumerable: !0,
              configurable: !1,
            });
          });
      }
      (R.prototype = Object.create(c.prototype, { constructor: { value: R } })),
        (R.prototype.write = function (L) {
          L = new Buffer(L);
          for (var y = 0; y < L.length; y++) {
            var K = L[y];
            if (this.bytes_remaining > 0) {
              for (var M = 0; M < this.bytes_remaining; M++)
                this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + M] = L[M];
              (this.string = this.temp_buffs[this.bytes_in_sequence].toString()),
                (this.bytes_in_sequence = this.bytes_remaining = 0),
                (y = y + M - 1),
                this._parser.write(this.string),
                this.emit('data', this.string);
              continue;
            }
            if (this.bytes_remaining === 0 && K >= 128)
              if (
                (K >= 194 && K <= 223 && (this.bytes_in_sequence = 2),
                K >= 224 && K <= 239 && (this.bytes_in_sequence = 3),
                K >= 240 && K <= 244 && (this.bytes_in_sequence = 4),
                this.bytes_in_sequence + y > L.length)
              ) {
                for (var H = 0; H <= L.length - 1 - y; H++) this.temp_buffs[this.bytes_in_sequence][H] = L[y + H];
                return (this.bytes_remaining = y + this.bytes_in_sequence - L.length), !0;
              } else {
                (this.string = L.slice(y, y + this.bytes_in_sequence).toString()),
                  (y = y + this.bytes_in_sequence - 1),
                  this._parser.write(this.string),
                  this.emit('data', this.string);
                continue;
              }
            for (var q = y; q < L.length && !(L[q] >= 128); q++);
            (this.string = L.slice(y, q).toString()),
              this._parser.write(this.string),
              this.emit('data', this.string),
              (y = q - 1);
          }
        }),
        (R.prototype.end = function (L) {
          return L && L.length && this._parser.write(L.toString()), this._parser.end(), !0;
        }),
        (R.prototype.on = function (L, y) {
          var K = this;
          return (
            !K._parser['on' + L] &&
              s.indexOf(L) !== -1 &&
              (K._parser['on' + L] = function () {
                var M = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
                M.splice(0, 0, L), K.emit.apply(K, M);
              }),
            c.prototype.on.call(K, L, y)
          );
        }),
        (R.prototype.destroy = function () {
          p(this._parser), this.emit('close');
        });
      function C(L, y, K) {
        n.INFO && console.log('-- emit', y, K), L[y] && L[y](K);
      }
      function B(L, y, K) {
        S(L), C(L, y, K);
      }
      function S(L, y) {
        (L.textNode = Y(L.opt, L.textNode)),
          L.textNode !== void 0 && C(L, y || 'onvalue', L.textNode),
          (L.textNode = void 0);
      }
      function V(L) {
        L.numberNode && C(L, 'onvalue', parseFloat(L.numberNode)), (L.numberNode = '');
      }
      function Y(L, y) {
        return y === void 0 || (L.trim && (y = y.trim()), L.normalize && (y = y.replace(/\s+/g, ' '))), y;
      }
      function _(L, y) {
        return (
          S(L),
          (y +=
            `
Line: ` +
            L.line +
            `
Column: ` +
            L.column +
            `
Char: ` +
            L.c),
          (y = new Error(y)),
          (L.error = y),
          C(L, 'onerror', y),
          L
        );
      }
      function k(L) {
        return (
          (L.state !== l.VALUE || L.depth !== 0) && _(L, 'Unexpected end'),
          S(L),
          (L.c = ''),
          (L.closed = !0),
          C(L, 'onend'),
          N.call(L, L.opt),
          L
        );
      }
      function O(L) {
        return L === d.carriageReturn || L === d.lineFeed || L === d.space || L === d.tab;
      }
      function D(L) {
        var y = this;
        if (this.error) throw this.error;
        if (y.closed) return _(y, 'Cannot write after close. Assign an onready handler.');
        if (L === null) return k(y);
        var K = 0,
          M = L.charCodeAt(0),
          H = y.p;
        for (
          n.DEBUG && console.log('write -> [' + L + ']');
          M && ((H = M), (y.c = M = L.charCodeAt(K++)), H !== M ? (y.p = H) : (H = y.p), !!M);

        )
          switch (
            (n.DEBUG && console.log(K, M, n.STATE[y.state]),
            y.position++,
            M === d.lineFeed ? (y.line++, (y.column = 0)) : y.column++,
            y.state)
          ) {
            case l.BEGIN:
              M === d.openBrace
                ? (y.state = l.OPEN_OBJECT)
                : M === d.openBracket
                  ? (y.state = l.OPEN_ARRAY)
                  : O(M) || _(y, 'Non-whitespace before {[.');
              continue;
            case l.OPEN_KEY:
            case l.OPEN_OBJECT:
              if (O(M)) continue;
              if (y.state === l.OPEN_KEY) y.stack.push(l.CLOSE_KEY);
              else if (M === d.closeBrace) {
                C(y, 'onopenobject'),
                  this.depth++,
                  C(y, 'oncloseobject'),
                  this.depth--,
                  (y.state = y.stack.pop() || l.VALUE);
                continue;
              } else y.stack.push(l.CLOSE_OBJECT);
              M === d.doubleQuote ? (y.state = l.STRING) : _(y, 'Malformed object key should start with "');
              continue;
            case l.CLOSE_KEY:
            case l.CLOSE_OBJECT:
              if (O(M)) continue;
              y.state,
                l.CLOSE_KEY,
                M === d.colon
                  ? (y.state === l.CLOSE_OBJECT
                      ? (y.stack.push(l.CLOSE_OBJECT), S(y, 'onopenobject'), this.depth++)
                      : S(y, 'onkey'),
                    (y.state = l.VALUE))
                  : M === d.closeBrace
                    ? (B(y, 'oncloseobject'), this.depth--, (y.state = y.stack.pop() || l.VALUE))
                    : M === d.comma
                      ? (y.state === l.CLOSE_OBJECT && y.stack.push(l.CLOSE_OBJECT), S(y), (y.state = l.OPEN_KEY))
                      : _(y, 'Bad object');
              continue;
            case l.OPEN_ARRAY:
            case l.VALUE:
              if (O(M)) continue;
              if (y.state === l.OPEN_ARRAY)
                if ((C(y, 'onopenarray'), this.depth++, (y.state = l.VALUE), M === d.closeBracket)) {
                  C(y, 'onclosearray'), this.depth--, (y.state = y.stack.pop() || l.VALUE);
                  continue;
                } else y.stack.push(l.CLOSE_ARRAY);
              M === d.doubleQuote
                ? (y.state = l.STRING)
                : M === d.openBrace
                  ? (y.state = l.OPEN_OBJECT)
                  : M === d.openBracket
                    ? (y.state = l.OPEN_ARRAY)
                    : M === d.t
                      ? (y.state = l.TRUE)
                      : M === d.f
                        ? (y.state = l.FALSE)
                        : M === d.n
                          ? (y.state = l.NULL)
                          : M === d.minus
                            ? (y.numberNode += '-')
                            : d._0 <= M && M <= d._9
                              ? ((y.numberNode += String.fromCharCode(M)), (y.state = l.NUMBER_DIGIT))
                              : _(y, 'Bad value');
              continue;
            case l.CLOSE_ARRAY:
              if (M === d.comma) y.stack.push(l.CLOSE_ARRAY), S(y, 'onvalue'), (y.state = l.VALUE);
              else if (M === d.closeBracket) B(y, 'onclosearray'), this.depth--, (y.state = y.stack.pop() || l.VALUE);
              else {
                if (O(M)) continue;
                _(y, 'Bad array');
              }
              continue;
            case l.STRING:
              y.textNode === void 0 && (y.textNode = '');
              var q = K - 1,
                U = y.slashed,
                ee = y.unicodeI;
              e: for (;;) {
                for (n.DEBUG && console.log(K, M, n.STATE[y.state], U); ee > 0; )
                  if (
                    ((y.unicodeS += String.fromCharCode(M)),
                    (M = L.charCodeAt(K++)),
                    y.position++,
                    ee === 4
                      ? ((y.textNode += String.fromCharCode(parseInt(y.unicodeS, 16))), (ee = 0), (q = K - 1))
                      : ee++,
                    !M)
                  )
                    break e;
                if (M === d.doubleQuote && !U) {
                  (y.state = y.stack.pop() || l.VALUE),
                    (y.textNode += L.substring(q, K - 1)),
                    (y.position += K - 1 - q);
                  break;
                }
                if (
                  M === d.backslash &&
                  !U &&
                  ((U = !0),
                  (y.textNode += L.substring(q, K - 1)),
                  (y.position += K - 1 - q),
                  (M = L.charCodeAt(K++)),
                  y.position++,
                  !M)
                )
                  break;
                if (U) {
                  if (
                    ((U = !1),
                    M === d.n
                      ? (y.textNode += `
`)
                      : M === d.r
                        ? (y.textNode += '\r')
                        : M === d.t
                          ? (y.textNode += '	')
                          : M === d.f
                            ? (y.textNode += '\f')
                            : M === d.b
                              ? (y.textNode += '\b')
                              : M === d.u
                                ? ((ee = 1), (y.unicodeS = ''))
                                : (y.textNode += String.fromCharCode(M)),
                    (M = L.charCodeAt(K++)),
                    y.position++,
                    (q = K - 1),
                    M)
                  )
                    continue;
                  break;
                }
                T.lastIndex = K;
                var I = T.exec(L);
                if (I === null) {
                  (K = L.length + 1), (y.textNode += L.substring(q, K - 1)), (y.position += K - 1 - q);
                  break;
                }
                if (((K = I.index + 1), (M = L.charCodeAt(I.index)), !M)) {
                  (y.textNode += L.substring(q, K - 1)), (y.position += K - 1 - q);
                  break;
                }
              }
              (y.slashed = U), (y.unicodeI = ee);
              continue;
            case l.TRUE:
              M === d.r ? (y.state = l.TRUE2) : _(y, 'Invalid true started with t' + M);
              continue;
            case l.TRUE2:
              M === d.u ? (y.state = l.TRUE3) : _(y, 'Invalid true started with tr' + M);
              continue;
            case l.TRUE3:
              M === d.e
                ? (C(y, 'onvalue', !0), (y.state = y.stack.pop() || l.VALUE))
                : _(y, 'Invalid true started with tru' + M);
              continue;
            case l.FALSE:
              M === d.a ? (y.state = l.FALSE2) : _(y, 'Invalid false started with f' + M);
              continue;
            case l.FALSE2:
              M === d.l ? (y.state = l.FALSE3) : _(y, 'Invalid false started with fa' + M);
              continue;
            case l.FALSE3:
              M === d.s ? (y.state = l.FALSE4) : _(y, 'Invalid false started with fal' + M);
              continue;
            case l.FALSE4:
              M === d.e
                ? (C(y, 'onvalue', !1), (y.state = y.stack.pop() || l.VALUE))
                : _(y, 'Invalid false started with fals' + M);
              continue;
            case l.NULL:
              M === d.u ? (y.state = l.NULL2) : _(y, 'Invalid null started with n' + M);
              continue;
            case l.NULL2:
              M === d.l ? (y.state = l.NULL3) : _(y, 'Invalid null started with nu' + M);
              continue;
            case l.NULL3:
              M === d.l
                ? (C(y, 'onvalue', null), (y.state = y.stack.pop() || l.VALUE))
                : _(y, 'Invalid null started with nul' + M);
              continue;
            case l.NUMBER_DECIMAL_POINT:
              M === d.period
                ? ((y.numberNode += '.'), (y.state = l.NUMBER_DIGIT))
                : _(y, 'Leading zero not followed by .');
              continue;
            case l.NUMBER_DIGIT:
              d._0 <= M && M <= d._9
                ? (y.numberNode += String.fromCharCode(M))
                : M === d.period
                  ? (y.numberNode.indexOf('.') !== -1 && _(y, 'Invalid number has two dots'), (y.numberNode += '.'))
                  : M === d.e || M === d.E
                    ? ((y.numberNode.indexOf('e') !== -1 || y.numberNode.indexOf('E') !== -1) &&
                        _(y, 'Invalid number has two exponential'),
                      (y.numberNode += 'e'))
                    : M === d.plus || M === d.minus
                      ? (H === d.e || H === d.E || _(y, 'Invalid symbol in number'),
                        (y.numberNode += String.fromCharCode(M)))
                      : (V(y), K--, (y.state = y.stack.pop() || l.VALUE));
              continue;
            default:
              _(y, 'Unknown state: ' + y.state);
          }
        return y.position >= y.bufferCheckPosition && m(y), y;
      }
    })(e);
  })(Hh);
  const IL = ua(Hh);
  class zh {
    constructor() {
      we(this, 'nodeId', 0);
    }
    createPlan(n, r, o) {
      if (((o = o.replace(/(\S)(?!$)(\s{2,})/gm, '$1 ')), !r.Plan)) throw new Error('Invalid plan');
      const s = {
        id: E.PEV_PLAN_TAG + new Date().getTime().toString(),
        name: n || 'plan created on ' + new Date().toDateString(),
        createdOn: new Date(),
        content: r,
        query: o,
        planStats: {},
        ctes: [],
        isAnalyze: $.has(r.Plan, E.ACTUAL_ROWS),
        isVerbose: this.findOutputProperty(r.Plan),
      };
      return (this.nodeId = 1), this.processNode(r.Plan, s), this.calculateMaximums(s), s;
    }
    isCTE(n) {
      return n[E.PARENT_RELATIONSHIP] === 'InitPlan' && $.startsWith(n[E.SUBPLAN_NAME], 'CTE');
    }
    processNode(n, r) {
      (n.nodeId = this.nodeId++),
        this.calculatePlannerEstimate(n),
        $.each(n[E.PLANS], o => {
          !this.isCTE(o) &&
            o[E.PARENT_RELATIONSHIP] !== 'InitPlan' &&
            o[E.PARENT_RELATIONSHIP] !== 'SubPlan' &&
            (o[E.WORKERS_PLANNED_BY_GATHER] = n[E.WORKERS_PLANNED] || n[E.WORKERS_PLANNED_BY_GATHER]),
            this.isCTE(o) && r.ctes.push(o),
            this.processNode(o, r);
        }),
        $.remove(n[E.PLANS], o => this.isCTE(o)),
        this.calculateActuals(n),
        this.calculateExclusives(n),
        this.calculateIoTimingsAverage(n),
        this.convertNodeType(n);
    }
    calculateMaximums(n) {
      function r(S) {
        return $.map(S, V => [V, r(V[E.PLANS])]);
      }
      let o = [];
      (o = o.concat($.flattenDeep(r([n.content.Plan])))),
        $.each(n.ctes, S => {
          o = o.concat($.flattenDeep(r([S])));
        });
      const s = $.maxBy(o, E.ACTUAL_ROWS_REVISED);
      s && (n.content.maxRows = s[E.ACTUAL_ROWS_REVISED]);
      const l = $.maxBy(o, E.EXCLUSIVE_COST);
      l && (n.content.maxCost = l[E.EXCLUSIVE_COST]);
      const c = $.maxBy(o, E.TOTAL_COST);
      c && (n.content.maxTotalCost = c[E.TOTAL_COST]);
      const f = $.maxBy(o, E.EXCLUSIVE_DURATION);
      f && (n.content.maxDuration = f[E.EXCLUSIVE_DURATION]), n.content.maxBlocks || (n.content.maxBlocks = {});
      function d(S) {
        return (
          S[E.EXCLUSIVE_SHARED_HIT_BLOCKS] +
          S[E.EXCLUSIVE_SHARED_READ_BLOCKS] +
          S[E.EXCLUSIVE_SHARED_DIRTIED_BLOCKS] +
          S[E.EXCLUSIVE_SHARED_WRITTEN_BLOCKS]
        );
      }
      const m = $.maxBy(o, S => d(S));
      m && d(m) && (n.content.maxBlocks[Me.shared] = d(m));
      function p(S) {
        return S[E.EXCLUSIVE_TEMP_READ_BLOCKS] + S[E.EXCLUSIVE_TEMP_WRITTEN_BLOCKS];
      }
      const T = $.maxBy(o, S => p(S));
      T && p(T) && (n.content.maxBlocks[Me.temp] = p(T));
      function N(S) {
        return (
          S[E.EXCLUSIVE_LOCAL_HIT_BLOCKS] +
          S[E.EXCLUSIVE_LOCAL_READ_BLOCKS] +
          S[E.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS] +
          S[E.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS]
        );
      }
      const b = $.maxBy(o, S => N(S));
      b && N(b) && (n.content.maxBlocks[Me.local] = N(b)), n.content.maxIo || (n.content.maxIo = 0);
      function R(S) {
        return S[E.EXCLUSIVE_IO_READ_TIME] + S[E.EXCLUSIVE_IO_WRITE_TIME];
      }
      const C = $.maxBy(o, S => R(S));
      C && R(C) && (n.content.maxIo = R(C));
      const B = $.max(
        $.map(o, S => {
          const V = S[E.PLANNER_ESTIMATE_FACTOR];
          if (V !== 1 / 0) return V;
        }),
      );
      n.content.maxEstimateFactor = B * 2 || 1;
    }
    calculateActuals(n) {
      if (!$.isUndefined(n[E.ACTUAL_TOTAL_TIME])) {
        const r = (n[E.WORKERS_PLANNED_BY_GATHER] || 0) + 1;
        (n[E.ACTUAL_TOTAL_TIME] = (n[E.ACTUAL_TOTAL_TIME] * n[E.ACTUAL_LOOPS]) / r),
          (n[E.ACTUAL_STARTUP_TIME] = (n[E.ACTUAL_STARTUP_TIME] * n[E.ACTUAL_LOOPS]) / r),
          (n[E.EXCLUSIVE_DURATION] = n[E.ACTUAL_TOTAL_TIME]);
        const o = n[E.EXCLUSIVE_DURATION] - this.childrenDuration(n, 0);
        n[E.EXCLUSIVE_DURATION] = o > 0 ? o : 0;
      }
      n[E.TOTAL_COST] && (n[E.EXCLUSIVE_COST] = n[E.TOTAL_COST]),
        $.each(n[E.PLANS], r => {
          r[E.PARENT_RELATIONSHIP] !== 'InitPlan' &&
            r[E.TOTAL_COST] &&
            (n[E.EXCLUSIVE_COST] = n[E.EXCLUSIVE_COST] - r[E.TOTAL_COST]);
        }),
        n[E.EXCLUSIVE_COST] < 0 && (n[E.EXCLUSIVE_COST] = 0),
        $.each(['ACTUAL_ROWS', 'PLAN_ROWS', 'ROWS_REMOVED_BY_FILTER', 'ROWS_REMOVED_BY_JOIN_FILTER'], r => {
          if (!$.isUndefined(n[E[r]])) {
            const o = r + '_REVISED',
              s = n[E.ACTUAL_LOOPS] || 1,
              l = n[E[r]] * s;
            n[E[o]] = l;
          }
        });
    }
    childrenDuration(n, r) {
      return (
        $.each(n[E.PLANS], o => {
          o[E.PARENT_RELATIONSHIP] !== 'InitPlan' &&
            ((r += o[E.EXCLUSIVE_DURATION] || 0), (r = this.childrenDuration(o, r)));
        }),
        r
      );
    }
    calculatePlannerEstimate(n) {
      n[E.ACTUAL_ROWS] !== void 0 &&
        n[E.PLAN_ROWS] !== void 0 &&
        ((n[E.PLANNER_ESTIMATE_FACTOR] = n[E.ACTUAL_ROWS] / n[E.PLAN_ROWS]),
        (n[E.PLANNER_ESTIMATE_DIRECTION] = St.none),
        n[E.ACTUAL_ROWS] > n[E.PLAN_ROWS] && (n[E.PLANNER_ESTIMATE_DIRECTION] = St.under),
        n[E.ACTUAL_ROWS] < n[E.PLAN_ROWS] &&
          ((n[E.PLANNER_ESTIMATE_DIRECTION] = St.over),
          (n[E.PLANNER_ESTIMATE_FACTOR] = n[E.PLAN_ROWS] / n[E.ACTUAL_ROWS])));
    }
    cleanupSource(n) {
      return (
        (n = n.replace(
          /^(\||║|│)(.*)\1\r?\n/gm,
          `$2
`,
        )),
        (n = n.replace(
          /(.*)(\||║|│)$\r?\n/gm,
          `$1
`,
        )),
        (n = n.replace(/^\+-+\+\r?\n/gm, '')),
        (n = n.replace(/^(-|─|═)\1+\r?\n/gm, '')),
        (n = n.replace(/^(├|╟|╠|╞)(─|═)\2*(┤|╢|╣|╡)\r?\n/gm, '')),
        (n = n.replace(/^\+-+\+\r?\n/gm, '')),
        (n = n.replace(/^└(─)+┘\r?\n/gm, '')),
        (n = n.replace(/^╚(═)+╝\r?\n/gm, '')),
        (n = n.replace(/^┌(─)+┐\r?\n/gm, '')),
        (n = n.replace(/^╔(═)+╗\r?\n/gm, '')),
        (n = n.replace(/^(["'])(.*)\1\r?/gm, '$2')),
        (n = n.replace(
          /\s*\+\r?\n/g,
          `
`,
        )),
        (n = n.replace(
          /↵\r?/gm,
          `
`,
        )),
        (n = n.replace(/^\s*QUERY PLAN\s*\r?\n/m, '')),
        (n = n.replace(
          /^\(\d+\s+[a-z]*s?\)(\r?\n|$)/gm,
          `
`,
        )),
        n
      );
    }
    fromSource(n) {
      n = this.cleanupSource(n);
      let r = !1;
      try {
        r = JSON.parse(n);
      } catch {}
      return r
        ? this.parseJson(n)
        : /^(\s*)(\[|\{)\s*\n.*?\1(\]|\})\s*/gms.exec(n)
          ? this.fromJson(n)
          : this.fromText(n);
    }
    fromJson(n) {
      const r = n.split(/[\r\n]+/);
      let o = '',
        s = 0;
      $.each(r, (f, d) => {
        const m = /^(\s*)(\[|\{)\s*$/.exec(f);
        if (m) return (o = m[1]), (s = d), !1;
      });
      let l = 0;
      $.each(r, (f, d) => {
        if (new RegExp('^' + o + '(]|})s*$').exec(f)) return (l = d), !1;
      });
      const c = r
        .slice(s, l + 1)
        .join(
          `
`,
        )
        .replace(/""/gm, '"');
      return this.parseJson(c);
    }
    parseJson(n) {
      const r = IL.parser(),
        o = [];
      let s = null,
        l = null;
      return (
        (r.onvalue = c => {
          const f = o[o.length - 1];
          if ($.isArray(f)) f.push(c);
          else {
            const d = Object.keys(f),
              m = d[d.length - 1];
            f[m] = c;
          }
        }),
        (r.onopenobject = c => {
          const f = {};
          (f[c] = null), o.push(f);
        }),
        (r.onkey = c => {
          const f = o[o.length - 1];
          Object.keys(f).indexOf(c) !== -1 ? (l = [o.length - 1, f[c]]) : (f[c] = null);
        }),
        (r.onopenarray = () => {
          o.push([]);
        }),
        (r.oncloseobject = r.onclosearray =
          () => {
            const c = o.pop();
            if (!o.length) s = c;
            else {
              const f = o[o.length - 1];
              if (l && l[0] === o.length - 1) $.merge(l[1], c), (l = null);
              else if ($.isArray(f)) f.push(c);
              else {
                const d = Object.keys(f),
                  m = d[d.length - 1];
                f[m] = c;
              }
            }
          }),
        r.write(n).close(),
        Array.isArray(s) && (s = s[0]),
        s
      );
    }
    splitIntoLines(n) {
      const r = [],
        o = n.split(/\r?\n/),
        s = (f, d) => (f.match(d) || []).length,
        l = f => {
          const d = f.indexOf(')'),
            m = f.indexOf('(');
          return d != -1 && d < m;
        },
        c = (f, d) => f.search(/\S/) == d.search(/\S/);
      return (
        $.each(o, f => {
          s(f, /\)/g) > s(f, /\(/g)
            ? (r[r.length - 1] += f)
            : f.match(/^(?:Total\s+runtime|Planning\s+time|Execution\s+time|Time|Filter|Output|JIT)/i)
              ? r.push(f)
              : f.match(/^\S/) || f.match(/^\s*\(/) || l(f)
                ? 0 < r.length
                  ? (r[r.length - 1] += f)
                  : r.push(f)
                : 0 < r.length && r[r.length - 1].match(/^\s*Output/i) && !c(r[r.length - 1], f)
                  ? (r[r.length - 1] += f)
                  : r.push(f);
        }),
        r
      );
    }
    fromText(n) {
      const r = this.splitIntoLines(n),
        o = {},
        s = [];
      if (
        ($.each(r, l => {
          var fe, ne, te, de, j, X, Z, pe, le, me;
          (l = l.replace(/"\s*$/, '')), (l = l.replace(/^\s*"/, '')), (l = l.replace(/\t/gm, '    '));
          const c = /^\s*/,
            f = l.match(c),
            d = f ? f[0].length : 0;
          l = l.replace(c, '');
          const m = '^s*$',
            p = '^\\s*(QUERY|---|#).*$',
            T = '^(\\s*->\\s*|\\s*)',
            N = '([^\\r\\n\\t\\f\\v\\:\\(]*?)',
            b = '\\(cost=(\\d+\\.\\d+)\\.\\.(\\d+\\.\\d+)\\s+rows=(\\d+)\\s+width=(\\d+)\\)',
            R = '(?:',
            C = ')',
            B = '\\(',
            S = '\\)',
            V =
              '(?:actual\\stime=(\\d+\\.\\d+)\\.\\.(\\d+\\.\\d+)\\srows=(\\d+)\\sloops=(\\d+)|actual\\srows=(\\d+)\\sloops=(\\d+)|(never\\s+executed))',
            Y = '?',
            _ = new RegExp(m).exec(l),
            k = new RegExp(p).exec(l),
            D = new RegExp(
              T +
                N +
                '\\s*' +
                R +
                (R + b + '\\s+' + B + V + S + C) +
                '|' +
                R +
                b +
                C +
                '|' +
                R +
                B +
                V +
                S +
                C +
                C +
                '\\s*$',
              'gm',
            ).exec(l),
            y = /^(\s*)((?:Sub|Init)Plan)\s*(?:\d+\s*)?\s*(?:\(returns.*\)\s*)?$/gm.exec(l),
            M = /^(\s*)CTE\s+(\S+)\s*$/g.exec(l),
            q = /^(\s*)Trigger\s+(.*):\s+time=(\d+\.\d+)\s+calls=(\d+)\s*$/g.exec(l),
            ee = new RegExp(/^(\s*)Worker\s+(\d+):\s+/.source + R + V + C + Y + '(.*)\\s*$', 'g').exec(l),
            z = /^(\s*)JIT:\s*$/g.exec(l),
            oe = /^(\s*)(\S.*\S)\s*$/g.exec(l);
          if (!(_ || k)) {
            if (D && !M && !y) {
              const ye = D[13],
                xe = new xL(D[2]);
              ((D[3] && D[4]) || (D[14] && D[15])) &&
                ((xe[E.STARTUP_COST] = parseFloat(D[3] || D[14])),
                (xe[E.TOTAL_COST] = parseFloat(D[4] || D[15])),
                (xe[E.PLAN_ROWS] = parseInt(D[5] || D[16], 0)),
                (xe[E.PLAN_WIDTH] = parseInt(D[6] || D[17], 0))),
                ((D[7] && D[8]) || (D[18] && D[19])) &&
                  ((xe[E.ACTUAL_STARTUP_TIME] = parseFloat(D[7] || D[18])),
                  (xe[E.ACTUAL_TOTAL_TIME] = parseFloat(D[8] || D[19]))),
                ((D[9] && D[10]) || (D[11] && D[12]) || (D[20] && D[21])) &&
                  ((xe[E.ACTUAL_ROWS] = parseInt(D[9] || D[11] || D[20], 0)),
                  (xe[E.ACTUAL_LOOPS] = parseInt(D[10] || D[12] || D[21], 0))),
                ye && ((xe[E.ACTUAL_LOOPS] = 0), (xe[E.ACTUAL_ROWS] = 0), (xe[E.ACTUAL_TOTAL_TIME] = 0));
              const Be = { node: xe, subelementType: 'subnode' };
              if (s.length === 0) {
                s.push([d, Be]), (o.Plan = xe);
                return;
              }
              $.remove(s, We => We[0] >= d);
              const Fe = (fe = $.last(s)) == null ? void 0 : fe[1];
              if (!Fe) return;
              s.push([d, Be]),
                Fe.node[E.PLANS] || (Fe.node[E.PLANS] = []),
                Fe.subelementType === 'initplan'
                  ? ((xe[E.PARENT_RELATIONSHIP] = 'InitPlan'), (xe[E.SUBPLAN_NAME] = Fe.name))
                  : Fe.subelementType === 'subplan' &&
                    ((xe[E.PARENT_RELATIONSHIP] = 'SubPlan'), (xe[E.SUBPLAN_NAME] = Fe.name)),
                (ne = Fe.node.Plans) == null || ne.push(xe);
            } else if (y) {
              const ye = y[2];
              $.remove(s, Fe => Fe[0] >= d);
              const xe = (te = $.last(s)) == null ? void 0 : te[1],
                Be = { node: xe == null ? void 0 : xe.node, subelementType: ye.toLowerCase(), name: y[0] };
              s.push([d, Be]);
            } else if (M) {
              const ye = M[2];
              $.remove(s, Fe => Fe[0] >= d);
              const xe = (de = $.last(s)) == null ? void 0 : de[1],
                Be = { node: xe == null ? void 0 : xe.node, subelementType: 'initplan', name: 'CTE ' + ye };
              s.push([d, Be]);
            } else if (ee) {
              const ye = parseInt(ee[2], 0),
                xe = (j = $.last(s)) == null ? void 0 : j[1];
              if (!xe) return;
              xe.node[E.WORKERS] || (xe.node[E.WORKERS] = []);
              let Be = this.getWorker(xe.node, ye);
              if (
                (Be || ((Be = new OL(ye)), (X = xe.node[E.WORKERS]) == null || X.push(Be)),
                ee[3] &&
                  ee[4] &&
                  ((Be[E.ACTUAL_STARTUP_TIME] = parseFloat(ee[3])),
                  (Be[E.ACTUAL_TOTAL_TIME] = parseFloat(ee[4])),
                  (Be[E.ACTUAL_ROWS] = parseInt(ee[5], 0)),
                  (Be[E.ACTUAL_LOOPS] = parseInt(ee[6], 0))),
                this.parseSort(ee[10], Be))
              )
                return;
              const Fe = ee[10].split(/: (.+)/).filter(We => We);
              if (ee[10]) {
                if (!Fe[1]) return;
                const We = $.startCase(Fe[0]);
                Be[We] = Fe[1];
              }
            } else if (q)
              $.remove(s, ye => ye[0] >= d),
                (o.Triggers = o.Triggers || []),
                o.Triggers.push({ 'Trigger Name': q[2], Time: this.parseTime(q[3]), Calls: q[4] });
            else if (z) {
              let ye;
              if (s.length === 0) (o.JIT = {}), (ye = { node: o.JIT }), s.push([1, ye]);
              else {
                const xe = (Z = $.last(s)) == null ? void 0 : Z[1];
                if (!xe) return;
                if ($.last((pe = xe.node) == null ? void 0 : pe[E.WORKERS])) {
                  const Be = $.last((le = xe.node) == null ? void 0 : le[E.WORKERS]);
                  (Be.JIT = {}), (ye = { node: Be.JIT }), s.push([d, ye]);
                }
              }
            } else if (oe) {
              $.remove(s, We => We[0] >= d || d == 1);
              let ye;
              if (
                (s.length === 0 ? (ye = o) : (ye = (me = $.last(s)) == null ? void 0 : me[1].node),
                !ye.Plan && ye['Query Text'])
              ) {
                ye['Query Text'] +=
                  `
` + l;
                return;
              }
              const xe = oe[2].split(/: (.+)/).filter(We => We);
              if (
                !xe[1] ||
                !ye ||
                this.parseSort(oe[2], ye) ||
                this.parseBuffers(oe[2], ye) ||
                this.parseWAL(oe[2], ye) ||
                this.parseIOTimings(oe[2], ye) ||
                this.parseOptions(oe[2], ye) ||
                this.parseTiming(oe[2], ye) ||
                this.parseSettings(oe[2], ye) ||
                this.parseSortGroups(oe[2], ye) ||
                this.parseSortKey(oe[2], ye)
              )
                return;
              let Be = xe[1].replace(/(\s*ms)$/, '');
              parseFloat(Be) && (Be = parseFloat(Be));
              let Fe = xe[0];
              (Fe.indexOf(' runtime') !== -1 || Fe.indexOf(' time') !== -1) && (Fe = $.startCase(Fe)), (ye[Fe] = Be);
            }
          }
        }),
        o == null || !o.Plan)
      )
        throw new Error('Unable to parse plan');
      return o;
    }
    parseSortKey(n, r) {
      const s = /^\s*((?:Sort|Presorted) Key):\s+(.*)/g.exec(n);
      return s ? ((r[s[1]] = $.map(kp(s[2], ','), $.trim)), !0) : !1;
    }
    parseSort(n, r) {
      const s = /^(\s*)Sort Method:\s+(.*)\s+(Memory|Disk):\s+(?:(\S*)kB)\s*$/g.exec(n);
      return s
        ? ((r[E.SORT_METHOD] = s[2].trim()), (r[E.SORT_SPACE_USED] = s[4]), (r[E.SORT_SPACE_TYPE] = s[3]), !0)
        : !1;
    }
    parseBuffers(n, r) {
      const s = /Buffers:\s+(.*)\s*$/g.exec(n);
      return s
        ? ($.each(s[1].split(/,\s+/), l => {
            const f = /(shared|temp|local)\s+(.*)$/g.exec(l);
            if (f) {
              const d = f[1];
              $.each(['hit', 'read', 'written', 'dirtied'], m => {
                r[$.map([d, m, 'blocks'], $.capitalize).join(' ')] = 0;
              }),
                $.each(f[2].split(/\s+/), m => {
                  this.parseBuffer(m, d, r);
                });
            }
          }),
          !0)
        : !1;
    }
    parseBuffer(n, r, o) {
      const s = n.split(/=/),
        l = s[0],
        c = parseInt(s[1], 0);
      o[$.map([r, l, 'blocks'], $.capitalize).join(' ')] = c;
    }
    getWorker(n, r) {
      return $.find(n[E.WORKERS], o => o[Co.WORKER_NUMBER] === r);
    }
    parseWAL(n, r) {
      const s = /WAL:\s+(.*)\s*$/g.exec(n);
      return s
        ? ($.each(['Records', 'Bytes', 'FPI'], l => {
            r['WAL ' + l] = 0;
          }),
          $.each(s[1].split(/\s+/), l => {
            const c = l.split(/=/),
              f = c[0],
              d = parseInt(c[1], 0);
            let m;
            switch (f) {
              case 'fpi':
                m = 'FPI';
                break;
              default:
                m = $.capitalize(f);
            }
            r['WAL ' + m] = d;
          }),
          !0)
        : !1;
    }
    parseIOTimings(n, r) {
      const s = /I\/O Timings:\s+(.*)\s*$/g.exec(n);
      return s
        ? ((r[E.IO_READ_TIME] = 0),
          (r[E.IO_WRITE_TIME] = 0),
          $.each(s[1].split(/\s+/), l => {
            const c = l.split(/=/),
              f = c[0],
              d = parseFloat(c[1]),
              m = 'IO_' + $.upperCase(f) + '_TIME',
              p = E[m];
            r[p] = d;
          }),
          !0)
        : !1;
    }
    parseOptions(n, r) {
      const s = /^(\s*)Options:\s+(.*)$/g.exec(n);
      if (s) {
        r.Options = {};
        const l = s[2].split(/\s*,\s*/);
        let c;
        return (
          $.each(l, f => {
            (c = /^(\S*)\s+(.*)$/g.exec(f)), c && r.Options && (r.Options[c[1]] = JSON.parse(c[2]));
          }),
          !0
        );
      }
      return !1;
    }
    parseTiming(n, r) {
      const s = /^(\s*)Timing:\s+(.*)$/g.exec(n);
      if (s) {
        r.Timing = {};
        const l = s[2].split(/\s*,\s*/);
        let c;
        return (
          $.each(l, f => {
            (c = /^(\S*)\s+(.*)$/g.exec(f)), c && r.Timing && (r.Timing[c[1]] = this.parseTime(c[2]));
          }),
          !0
        );
      }
      return !1;
    }
    parseTime(n) {
      return parseFloat(n.replace(/(\s*ms)$/, ''));
    }
    parseSettings(n, r) {
      const s = /^(\s*)Settings:\s*(.*)$/g.exec(n);
      if (s) {
        r.Settings = {};
        const l = kp(s[2], ',');
        let c;
        return (
          $.each(l, f => {
            (c = /^(\S*)\s+=\s+(.*)$/g.exec($.trim(f))), c && r.Settings && (r.Settings[c[1]] = c[2].replace(/'/g, ''));
          }),
          !0
        );
      }
      return !1;
    }
    parseSortGroups(n, r) {
      const s =
        /^\s*(Full-sort|Pre-sorted) Groups:\s+([0-9]*)\s+Sort Method[s]*:\s+(.*)\s+Average Memory:\s+(\S*)kB\s+Peak Memory:\s+(\S*)kB.*$/g.exec(
          n,
        );
      if (s) {
        const l = {
          [Wa.GROUP_COUNT]: parseInt(s[2], 0),
          [Wa.SORT_METHODS_USED]: $.map(s[3].split(','), $.trim),
          [Wa.SORT_SPACE_MEMORY]: {
            [uc.AVERAGE_SORT_SPACE_USED]: parseInt(s[4], 0),
            [uc.PEAK_SORT_SPACE_USED]: parseInt(s[5], 0),
          },
        };
        if (s[1] === 'Full-sort') r[E.FULL_SORT_GROUPS] = l;
        else if (s[1] === 'Pre-sorted') r[E.PRE_SORTED_GROUPS] = l;
        else throw new Error('Unsupported sort groups method');
        return !0;
      }
      return !1;
    }
    calculateExclusives(n) {
      const r = [
        'SHARED_HIT_BLOCKS',
        'SHARED_READ_BLOCKS',
        'SHARED_DIRTIED_BLOCKS',
        'SHARED_WRITTEN_BLOCKS',
        'TEMP_READ_BLOCKS',
        'TEMP_WRITTEN_BLOCKS',
        'LOCAL_HIT_BLOCKS',
        'LOCAL_READ_BLOCKS',
        'LOCAL_DIRTIED_BLOCKS',
        'LOCAL_WRITTEN_BLOCKS',
        'IO_READ_TIME',
        'IO_WRITE_TIME',
      ];
      $.each(r, o => {
        const s = $.sumBy(n[E.PLANS], f => f[E[o]] || 0),
          l = 'EXCLUSIVE_' + o,
          c = E[l];
        n[c] = n[E[o]] - s;
      });
    }
    calculateIoTimingsAverage(n) {
      const r = n[E.IO_READ_TIME] || 0;
      if (r) {
        const s = n[E.SHARED_READ_BLOCKS] || 0,
          l = n[E.LOCAL_READ_BLOCKS] || 0;
        n[E.AVERAGE_IO_READ_TIME] = (s + l) / (r / 1e3);
      }
      const o = n[E.IO_WRITE_TIME] || 0;
      if (o) {
        const s = n[E.SHARED_WRITTEN_BLOCKS] || 0,
          l = n[E.LOCAL_WRITTEN_BLOCKS] || 0;
        n[E.AVERAGE_IO_WRITE_TIME] = (s + l) / (o / 1e3);
      }
    }
    findOutputProperty(n) {
      const r = n.Plans;
      return r ? $.some(r, o => $.has(o, E.OUTPUT) || this.findOutputProperty(o)) : !1;
    }
    convertNodeType(n) {
      if (n[E.NODE_TYPE] == 'Aggregate') {
        let r = '';
        switch (n[E.STRATEGY]) {
          case 'Sorted':
            r = 'Group';
            break;
          case 'Hashed':
            r = 'Hash';
            break;
          case 'Plain':
            r = '';
            break;
          default:
            console.error('Unsupported Aggregate Strategy');
        }
        n[E.NODE_TYPE] = r + 'Aggregate';
      }
    }
  }
  we(zh, 'instance');
  const C5 = '';
  function is(e, n) {
    return e == null || n == null ? NaN : e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
  }
  function LL(e, n) {
    return e == null || n == null ? NaN : n < e ? -1 : n > e ? 1 : n >= e ? 0 : NaN;
  }
  function Xh(e) {
    let n, r, o;
    e.length !== 2
      ? ((n = is), (r = (f, d) => is(e(f), d)), (o = (f, d) => e(f) - d))
      : ((n = e === is || e === LL ? e : wL), (r = e), (o = e));
    function s(f, d, m = 0, p = f.length) {
      if (m < p) {
        if (n(d, d) !== 0) return p;
        do {
          const T = (m + p) >>> 1;
          r(f[T], d) < 0 ? (m = T + 1) : (p = T);
        } while (m < p);
      }
      return m;
    }
    function l(f, d, m = 0, p = f.length) {
      if (m < p) {
        if (n(d, d) !== 0) return p;
        do {
          const T = (m + p) >>> 1;
          r(f[T], d) <= 0 ? (m = T + 1) : (p = T);
        } while (m < p);
      }
      return m;
    }
    function c(f, d, m = 0, p = f.length) {
      const T = s(f, d, m, p - 1);
      return T > m && o(f[T - 1], d) > -o(f[T], d) ? T - 1 : T;
    }
    return { left: s, center: c, right: l };
  }
  function wL() {
    return 0;
  }
  function vL(e) {
    return e === null ? NaN : +e;
  }
  const kL = Xh(is).right;
  Xh(vL).center;
  const DL = kL;
  var zc = Math.sqrt(50),
    Xc = Math.sqrt(10),
    Gc = Math.sqrt(2);
  function VL(e, n, r) {
    var o,
      s = -1,
      l,
      c,
      f;
    if (((n = +n), (e = +e), (r = +r), e === n && r > 0)) return [e];
    if (((o = n < e) && ((l = e), (e = n), (n = l)), (f = Gh(e, n, r)) === 0 || !isFinite(f))) return [];
    if (f > 0) {
      let d = Math.round(e / f),
        m = Math.round(n / f);
      for (d * f < e && ++d, m * f > n && --m, c = new Array((l = m - d + 1)); ++s < l; ) c[s] = (d + s) * f;
    } else {
      f = -f;
      let d = Math.round(e * f),
        m = Math.round(n * f);
      for (d / f < e && ++d, m / f > n && --m, c = new Array((l = m - d + 1)); ++s < l; ) c[s] = (d + s) / f;
    }
    return o && c.reverse(), c;
  }
  function Gh(e, n, r) {
    var o = (n - e) / Math.max(0, r),
      s = Math.floor(Math.log(o) / Math.LN10),
      l = o / Math.pow(10, s);
    return s >= 0
      ? (l >= zc ? 10 : l >= Xc ? 5 : l >= Gc ? 2 : 1) * Math.pow(10, s)
      : -Math.pow(10, -s) / (l >= zc ? 10 : l >= Xc ? 5 : l >= Gc ? 2 : 1);
  }
  function ML(e, n, r) {
    var o = Math.abs(n - e) / Math.max(0, r),
      s = Math.pow(10, Math.floor(Math.log(o) / Math.LN10)),
      l = o / s;
    return l >= zc ? (s *= 10) : l >= Xc ? (s *= 5) : l >= Gc && (s *= 2), n < e ? -s : s;
  }
  var BL = { value: () => {} };
  function Yc() {
    for (var e = 0, n = arguments.length, r = {}, o; e < n; ++e) {
      if (!(o = arguments[e] + '') || o in r || /[\s.]/.test(o)) throw new Error('illegal type: ' + o);
      r[o] = [];
    }
    return new os(r);
  }
  function os(e) {
    this._ = e;
  }
  function PL(e, n) {
    return e
      .trim()
      .split(/^|\s+/)
      .map(function (r) {
        var o = '',
          s = r.indexOf('.');
        if ((s >= 0 && ((o = r.slice(s + 1)), (r = r.slice(0, s))), r && !n.hasOwnProperty(r)))
          throw new Error('unknown type: ' + r);
        return { type: r, name: o };
      });
  }
  os.prototype = Yc.prototype = {
    constructor: os,
    on: function (e, n) {
      var r = this._,
        o = PL(e + '', r),
        s,
        l = -1,
        c = o.length;
      if (arguments.length < 2) {
        for (; ++l < c; ) if ((s = (e = o[l]).type) && (s = UL(r[s], e.name))) return s;
        return;
      }
      if (n != null && typeof n != 'function') throw new Error('invalid callback: ' + n);
      for (; ++l < c; )
        if ((s = (e = o[l]).type)) r[s] = Yh(r[s], e.name, n);
        else if (n == null) for (s in r) r[s] = Yh(r[s], e.name, null);
      return this;
    },
    copy: function () {
      var e = {},
        n = this._;
      for (var r in n) e[r] = n[r].slice();
      return new os(e);
    },
    call: function (e, n) {
      if ((s = arguments.length - 2) > 0) for (var r = new Array(s), o = 0, s, l; o < s; ++o) r[o] = arguments[o + 2];
      if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e);
      for (l = this._[e], o = 0, s = l.length; o < s; ++o) l[o].value.apply(n, r);
    },
    apply: function (e, n, r) {
      if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e);
      for (var o = this._[e], s = 0, l = o.length; s < l; ++s) o[s].value.apply(n, r);
    },
  };
  function UL(e, n) {
    for (var r = 0, o = e.length, s; r < o; ++r) if ((s = e[r]).name === n) return s.value;
  }
  function Yh(e, n, r) {
    for (var o = 0, s = e.length; o < s; ++o)
      if (e[o].name === n) {
        (e[o] = BL), (e = e.slice(0, o).concat(e.slice(o + 1)));
        break;
      }
    return r != null && e.push({ name: n, value: r }), e;
  }
  var Kc = 'http://www.w3.org/1999/xhtml';
  const Kh = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: Kc,
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/',
  };
  function as(e) {
    var n = (e += ''),
      r = n.indexOf(':');
    return (
      r >= 0 && (n = e.slice(0, r)) !== 'xmlns' && (e = e.slice(r + 1)),
      Kh.hasOwnProperty(n) ? { space: Kh[n], local: e } : e
    );
  }
  function $L(e) {
    return function () {
      var n = this.ownerDocument,
        r = this.namespaceURI;
      return r === Kc && n.documentElement.namespaceURI === Kc ? n.createElement(e) : n.createElementNS(r, e);
    };
  }
  function HL(e) {
    return function () {
      return this.ownerDocument.createElementNS(e.space, e.local);
    };
  }
  function jh(e) {
    var n = as(e);
    return (n.local ? HL : $L)(n);
  }
  function FL() {}
  function jc(e) {
    return e == null
      ? FL
      : function () {
          return this.querySelector(e);
        };
  }
  function WL(e) {
    typeof e != 'function' && (e = jc(e));
    for (var n = this._groups, r = n.length, o = new Array(r), s = 0; s < r; ++s)
      for (var l = n[s], c = l.length, f = (o[s] = new Array(c)), d, m, p = 0; p < c; ++p)
        (d = l[p]) && (m = e.call(d, d.__data__, p, l)) && ('__data__' in d && (m.__data__ = d.__data__), (f[p] = m));
    return new tn(o, this._parents);
  }
  function zL(e) {
    return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
  }
  function XL() {
    return [];
  }
  function qh(e) {
    return e == null
      ? XL
      : function () {
          return this.querySelectorAll(e);
        };
  }
  function GL(e) {
    return function () {
      return zL(e.apply(this, arguments));
    };
  }
  function YL(e) {
    typeof e == 'function' ? (e = GL(e)) : (e = qh(e));
    for (var n = this._groups, r = n.length, o = [], s = [], l = 0; l < r; ++l)
      for (var c = n[l], f = c.length, d, m = 0; m < f; ++m)
        (d = c[m]) && (o.push(e.call(d, d.__data__, m, c)), s.push(d));
    return new tn(o, s);
  }
  function Jh(e) {
    return function () {
      return this.matches(e);
    };
  }
  function Qh(e) {
    return function (n) {
      return n.matches(e);
    };
  }
  var KL = Array.prototype.find;
  function jL(e) {
    return function () {
      return KL.call(this.children, e);
    };
  }
  function qL() {
    return this.firstElementChild;
  }
  function JL(e) {
    return this.select(e == null ? qL : jL(typeof e == 'function' ? e : Qh(e)));
  }
  var QL = Array.prototype.filter;
  function ZL() {
    return Array.from(this.children);
  }
  function ew(e) {
    return function () {
      return QL.call(this.children, e);
    };
  }
  function tw(e) {
    return this.selectAll(e == null ? ZL : ew(typeof e == 'function' ? e : Qh(e)));
  }
  function nw(e) {
    typeof e != 'function' && (e = Jh(e));
    for (var n = this._groups, r = n.length, o = new Array(r), s = 0; s < r; ++s)
      for (var l = n[s], c = l.length, f = (o[s] = []), d, m = 0; m < c; ++m)
        (d = l[m]) && e.call(d, d.__data__, m, l) && f.push(d);
    return new tn(o, this._parents);
  }
  function Zh(e) {
    return new Array(e.length);
  }
  function rw() {
    return new tn(this._enter || this._groups.map(Zh), this._parents);
  }
  function ss(e, n) {
    (this.ownerDocument = e.ownerDocument),
      (this.namespaceURI = e.namespaceURI),
      (this._next = null),
      (this._parent = e),
      (this.__data__ = n);
  }
  ss.prototype = {
    constructor: ss,
    appendChild: function (e) {
      return this._parent.insertBefore(e, this._next);
    },
    insertBefore: function (e, n) {
      return this._parent.insertBefore(e, n);
    },
    querySelector: function (e) {
      return this._parent.querySelector(e);
    },
    querySelectorAll: function (e) {
      return this._parent.querySelectorAll(e);
    },
  };
  function iw(e) {
    return function () {
      return e;
    };
  }
  function ow(e, n, r, o, s, l) {
    for (var c = 0, f, d = n.length, m = l.length; c < m; ++c)
      (f = n[c]) ? ((f.__data__ = l[c]), (o[c] = f)) : (r[c] = new ss(e, l[c]));
    for (; c < d; ++c) (f = n[c]) && (s[c] = f);
  }
  function aw(e, n, r, o, s, l, c) {
    var f,
      d,
      m = new Map(),
      p = n.length,
      T = l.length,
      N = new Array(p),
      b;
    for (f = 0; f < p; ++f)
      (d = n[f]) && ((N[f] = b = c.call(d, d.__data__, f, n) + ''), m.has(b) ? (s[f] = d) : m.set(b, d));
    for (f = 0; f < T; ++f)
      (b = c.call(e, l[f], f, l) + ''),
        (d = m.get(b)) ? ((o[f] = d), (d.__data__ = l[f]), m.delete(b)) : (r[f] = new ss(e, l[f]));
    for (f = 0; f < p; ++f) (d = n[f]) && m.get(N[f]) === d && (s[f] = d);
  }
  function sw(e) {
    return e.__data__;
  }
  function lw(e, n) {
    if (!arguments.length) return Array.from(this, sw);
    var r = n ? aw : ow,
      o = this._parents,
      s = this._groups;
    typeof e != 'function' && (e = iw(e));
    for (var l = s.length, c = new Array(l), f = new Array(l), d = new Array(l), m = 0; m < l; ++m) {
      var p = o[m],
        T = s[m],
        N = T.length,
        b = cw(e.call(p, p && p.__data__, m, o)),
        R = b.length,
        C = (f[m] = new Array(R)),
        B = (c[m] = new Array(R)),
        S = (d[m] = new Array(N));
      r(p, T, C, B, S, b, n);
      for (var V = 0, Y = 0, _, k; V < R; ++V)
        if ((_ = C[V])) {
          for (V >= Y && (Y = V + 1); !(k = B[Y]) && ++Y < R; );
          _._next = k || null;
        }
    }
    return (c = new tn(c, o)), (c._enter = f), (c._exit = d), c;
  }
  function cw(e) {
    return typeof e == 'object' && 'length' in e ? e : Array.from(e);
  }
  function fw() {
    return new tn(this._exit || this._groups.map(Zh), this._parents);
  }
  function uw(e, n, r) {
    var o = this.enter(),
      s = this,
      l = this.exit();
    return (
      typeof e == 'function' ? ((o = e(o)), o && (o = o.selection())) : (o = o.append(e + '')),
      n != null && ((s = n(s)), s && (s = s.selection())),
      r == null ? l.remove() : r(l),
      o && s ? o.merge(s).order() : s
    );
  }
  function dw(e) {
    for (
      var n = e.selection ? e.selection() : e,
        r = this._groups,
        o = n._groups,
        s = r.length,
        l = o.length,
        c = Math.min(s, l),
        f = new Array(s),
        d = 0;
      d < c;
      ++d
    )
      for (var m = r[d], p = o[d], T = m.length, N = (f[d] = new Array(T)), b, R = 0; R < T; ++R)
        (b = m[R] || p[R]) && (N[R] = b);
    for (; d < s; ++d) f[d] = r[d];
    return new tn(f, this._parents);
  }
  function pw() {
    for (var e = this._groups, n = -1, r = e.length; ++n < r; )
      for (var o = e[n], s = o.length - 1, l = o[s], c; --s >= 0; )
        (c = o[s]) && (l && c.compareDocumentPosition(l) ^ 4 && l.parentNode.insertBefore(c, l), (l = c));
    return this;
  }
  function hw(e) {
    e || (e = mw);
    function n(T, N) {
      return T && N ? e(T.__data__, N.__data__) : !T - !N;
    }
    for (var r = this._groups, o = r.length, s = new Array(o), l = 0; l < o; ++l) {
      for (var c = r[l], f = c.length, d = (s[l] = new Array(f)), m, p = 0; p < f; ++p) (m = c[p]) && (d[p] = m);
      d.sort(n);
    }
    return new tn(s, this._parents).order();
  }
  function mw(e, n) {
    return e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
  }
  function Ew() {
    var e = arguments[0];
    return (arguments[0] = this), e.apply(null, arguments), this;
  }
  function _w() {
    return Array.from(this);
  }
  function gw() {
    for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
      for (var o = e[n], s = 0, l = o.length; s < l; ++s) {
        var c = o[s];
        if (c) return c;
      }
    return null;
  }
  function Tw() {
    let e = 0;
    for (const n of this) ++e;
    return e;
  }
  function Nw() {
    return !this.node();
  }
  function Aw(e) {
    for (var n = this._groups, r = 0, o = n.length; r < o; ++r)
      for (var s = n[r], l = 0, c = s.length, f; l < c; ++l) (f = s[l]) && e.call(f, f.__data__, l, s);
    return this;
  }
  function yw(e) {
    return function () {
      this.removeAttribute(e);
    };
  }
  function Sw(e) {
    return function () {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function bw(e, n) {
    return function () {
      this.setAttribute(e, n);
    };
  }
  function xw(e, n) {
    return function () {
      this.setAttributeNS(e.space, e.local, n);
    };
  }
  function Ow(e, n) {
    return function () {
      var r = n.apply(this, arguments);
      r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
    };
  }
  function Rw(e, n) {
    return function () {
      var r = n.apply(this, arguments);
      r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
    };
  }
  function Cw(e, n) {
    var r = as(e);
    if (arguments.length < 2) {
      var o = this.node();
      return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r);
    }
    return this.each(
      (n == null ? (r.local ? Sw : yw) : typeof n == 'function' ? (r.local ? Rw : Ow) : r.local ? xw : bw)(r, n),
    );
  }
  function em(e) {
    return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView;
  }
  function Iw(e) {
    return function () {
      this.style.removeProperty(e);
    };
  }
  function Lw(e, n, r) {
    return function () {
      this.style.setProperty(e, n, r);
    };
  }
  function ww(e, n, r) {
    return function () {
      var o = n.apply(this, arguments);
      o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, r);
    };
  }
  function vw(e, n, r) {
    return arguments.length > 1
      ? this.each((n == null ? Iw : typeof n == 'function' ? ww : Lw)(e, n, r ?? ''))
      : $i(this.node(), e);
  }
  function $i(e, n) {
    return e.style.getPropertyValue(n) || em(e).getComputedStyle(e, null).getPropertyValue(n);
  }
  function kw(e) {
    return function () {
      delete this[e];
    };
  }
  function Dw(e, n) {
    return function () {
      this[e] = n;
    };
  }
  function Vw(e, n) {
    return function () {
      var r = n.apply(this, arguments);
      r == null ? delete this[e] : (this[e] = r);
    };
  }
  function Mw(e, n) {
    return arguments.length > 1 ? this.each((n == null ? kw : typeof n == 'function' ? Vw : Dw)(e, n)) : this.node()[e];
  }
  function tm(e) {
    return e.trim().split(/^|\s+/);
  }
  function qc(e) {
    return e.classList || new nm(e);
  }
  function nm(e) {
    (this._node = e), (this._names = tm(e.getAttribute('class') || ''));
  }
  nm.prototype = {
    add: function (e) {
      var n = this._names.indexOf(e);
      n < 0 && (this._names.push(e), this._node.setAttribute('class', this._names.join(' ')));
    },
    remove: function (e) {
      var n = this._names.indexOf(e);
      n >= 0 && (this._names.splice(n, 1), this._node.setAttribute('class', this._names.join(' ')));
    },
    contains: function (e) {
      return this._names.indexOf(e) >= 0;
    },
  };
  function rm(e, n) {
    for (var r = qc(e), o = -1, s = n.length; ++o < s; ) r.add(n[o]);
  }
  function im(e, n) {
    for (var r = qc(e), o = -1, s = n.length; ++o < s; ) r.remove(n[o]);
  }
  function Bw(e) {
    return function () {
      rm(this, e);
    };
  }
  function Pw(e) {
    return function () {
      im(this, e);
    };
  }
  function Uw(e, n) {
    return function () {
      (n.apply(this, arguments) ? rm : im)(this, e);
    };
  }
  function $w(e, n) {
    var r = tm(e + '');
    if (arguments.length < 2) {
      for (var o = qc(this.node()), s = -1, l = r.length; ++s < l; ) if (!o.contains(r[s])) return !1;
      return !0;
    }
    return this.each((typeof n == 'function' ? Uw : n ? Bw : Pw)(r, n));
  }
  function Hw() {
    this.textContent = '';
  }
  function Fw(e) {
    return function () {
      this.textContent = e;
    };
  }
  function Ww(e) {
    return function () {
      var n = e.apply(this, arguments);
      this.textContent = n ?? '';
    };
  }
  function zw(e) {
    return arguments.length
      ? this.each(e == null ? Hw : (typeof e == 'function' ? Ww : Fw)(e))
      : this.node().textContent;
  }
  function Xw() {
    this.innerHTML = '';
  }
  function Gw(e) {
    return function () {
      this.innerHTML = e;
    };
  }
  function Yw(e) {
    return function () {
      var n = e.apply(this, arguments);
      this.innerHTML = n ?? '';
    };
  }
  function Kw(e) {
    return arguments.length ? this.each(e == null ? Xw : (typeof e == 'function' ? Yw : Gw)(e)) : this.node().innerHTML;
  }
  function jw() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function qw() {
    return this.each(jw);
  }
  function Jw() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function Qw() {
    return this.each(Jw);
  }
  function Zw(e) {
    var n = typeof e == 'function' ? e : jh(e);
    return this.select(function () {
      return this.appendChild(n.apply(this, arguments));
    });
  }
  function e2() {
    return null;
  }
  function t2(e, n) {
    var r = typeof e == 'function' ? e : jh(e),
      o = n == null ? e2 : typeof n == 'function' ? n : jc(n);
    return this.select(function () {
      return this.insertBefore(r.apply(this, arguments), o.apply(this, arguments) || null);
    });
  }
  function n2() {
    var e = this.parentNode;
    e && e.removeChild(this);
  }
  function r2() {
    return this.each(n2);
  }
  function i2() {
    var e = this.cloneNode(!1),
      n = this.parentNode;
    return n ? n.insertBefore(e, this.nextSibling) : e;
  }
  function o2() {
    var e = this.cloneNode(!0),
      n = this.parentNode;
    return n ? n.insertBefore(e, this.nextSibling) : e;
  }
  function a2(e) {
    return this.select(e ? o2 : i2);
  }
  function s2(e) {
    return arguments.length ? this.property('__data__', e) : this.node().__data__;
  }
  function l2(e) {
    return function (n) {
      e.call(this, n, this.__data__);
    };
  }
  function c2(e) {
    return e
      .trim()
      .split(/^|\s+/)
      .map(function (n) {
        var r = '',
          o = n.indexOf('.');
        return o >= 0 && ((r = n.slice(o + 1)), (n = n.slice(0, o))), { type: n, name: r };
      });
  }
  function f2(e) {
    return function () {
      var n = this.__on;
      if (n) {
        for (var r = 0, o = -1, s = n.length, l; r < s; ++r)
          (l = n[r]),
            (!e.type || l.type === e.type) && l.name === e.name
              ? this.removeEventListener(l.type, l.listener, l.options)
              : (n[++o] = l);
        ++o ? (n.length = o) : delete this.__on;
      }
    };
  }
  function u2(e, n, r) {
    return function () {
      var o = this.__on,
        s,
        l = l2(n);
      if (o) {
        for (var c = 0, f = o.length; c < f; ++c)
          if ((s = o[c]).type === e.type && s.name === e.name) {
            this.removeEventListener(s.type, s.listener, s.options),
              this.addEventListener(s.type, (s.listener = l), (s.options = r)),
              (s.value = n);
            return;
          }
      }
      this.addEventListener(e.type, l, r),
        (s = { type: e.type, name: e.name, value: n, listener: l, options: r }),
        o ? o.push(s) : (this.__on = [s]);
    };
  }
  function d2(e, n, r) {
    var o = c2(e + ''),
      s,
      l = o.length,
      c;
    if (arguments.length < 2) {
      var f = this.node().__on;
      if (f) {
        for (var d = 0, m = f.length, p; d < m; ++d)
          for (s = 0, p = f[d]; s < l; ++s) if ((c = o[s]).type === p.type && c.name === p.name) return p.value;
      }
      return;
    }
    for (f = n ? u2 : f2, s = 0; s < l; ++s) this.each(f(o[s], n, r));
    return this;
  }
  function om(e, n, r) {
    var o = em(e),
      s = o.CustomEvent;
    typeof s == 'function'
      ? (s = new s(n, r))
      : ((s = o.document.createEvent('Event')),
        r ? (s.initEvent(n, r.bubbles, r.cancelable), (s.detail = r.detail)) : s.initEvent(n, !1, !1)),
      e.dispatchEvent(s);
  }
  function p2(e, n) {
    return function () {
      return om(this, e, n);
    };
  }
  function h2(e, n) {
    return function () {
      return om(this, e, n.apply(this, arguments));
    };
  }
  function m2(e, n) {
    return this.each((typeof n == 'function' ? h2 : p2)(e, n));
  }
  function* E2() {
    for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
      for (var o = e[n], s = 0, l = o.length, c; s < l; ++s) (c = o[s]) && (yield c);
  }
  var am = [null];
  function tn(e, n) {
    (this._groups = e), (this._parents = n);
  }
  function Ho() {
    return new tn([[document.documentElement]], am);
  }
  function _2() {
    return this;
  }
  tn.prototype = Ho.prototype = {
    constructor: tn,
    select: WL,
    selectAll: YL,
    selectChild: JL,
    selectChildren: tw,
    filter: nw,
    data: lw,
    enter: rw,
    exit: fw,
    join: uw,
    merge: dw,
    selection: _2,
    order: pw,
    sort: hw,
    call: Ew,
    nodes: _w,
    node: gw,
    size: Tw,
    empty: Nw,
    each: Aw,
    attr: Cw,
    style: vw,
    property: Mw,
    classed: $w,
    text: zw,
    html: Kw,
    raise: qw,
    lower: Qw,
    append: Zw,
    insert: t2,
    remove: r2,
    clone: a2,
    datum: s2,
    on: d2,
    dispatch: m2,
    [Symbol.iterator]: E2,
  };
  function qn(e) {
    return typeof e == 'string' ? new tn([[document.querySelector(e)]], [document.documentElement]) : new tn([[e]], am);
  }
  function g2(e) {
    let n;
    for (; (n = e.sourceEvent); ) e = n;
    return e;
  }
  function oi(e, n) {
    if (((e = g2(e)), n === void 0 && (n = e.currentTarget), n)) {
      var r = n.ownerSVGElement || n;
      if (r.createSVGPoint) {
        var o = r.createSVGPoint();
        return (o.x = e.clientX), (o.y = e.clientY), (o = o.matrixTransform(n.getScreenCTM().inverse())), [o.x, o.y];
      }
      if (n.getBoundingClientRect) {
        var s = n.getBoundingClientRect();
        return [e.clientX - s.left - n.clientLeft, e.clientY - s.top - n.clientTop];
      }
    }
    return [e.pageX, e.pageY];
  }
  const Jc = { capture: !0, passive: !1 };
  function Qc(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function T2(e) {
    var n = e.document.documentElement,
      r = qn(e).on('dragstart.drag', Qc, Jc);
    'onselectstart' in n
      ? r.on('selectstart.drag', Qc, Jc)
      : ((n.__noselect = n.style.MozUserSelect), (n.style.MozUserSelect = 'none'));
  }
  function N2(e, n) {
    var r = e.document.documentElement,
      o = qn(e).on('dragstart.drag', null);
    n &&
      (o.on('click.drag', Qc, Jc),
      setTimeout(function () {
        o.on('click.drag', null);
      }, 0)),
      'onselectstart' in r
        ? o.on('selectstart.drag', null)
        : ((r.style.MozUserSelect = r.__noselect), delete r.__noselect);
  }
  function Zc(e, n, r) {
    (e.prototype = n.prototype = r), (r.constructor = e);
  }
  function sm(e, n) {
    var r = Object.create(e.prototype);
    for (var o in n) r[o] = n[o];
    return r;
  }
  function Fo() {}
  var Wo = 0.7,
    ls = 1 / Wo,
    Hi = '\\s*([+-]?\\d+)\\s*',
    zo = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
    Jn = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
    A2 = /^#([0-9a-f]{3,8})$/,
    y2 = new RegExp(`^rgb\\(${Hi},${Hi},${Hi}\\)$`),
    S2 = new RegExp(`^rgb\\(${Jn},${Jn},${Jn}\\)$`),
    b2 = new RegExp(`^rgba\\(${Hi},${Hi},${Hi},${zo}\\)$`),
    x2 = new RegExp(`^rgba\\(${Jn},${Jn},${Jn},${zo}\\)$`),
    O2 = new RegExp(`^hsl\\(${zo},${Jn},${Jn}\\)$`),
    R2 = new RegExp(`^hsla\\(${zo},${Jn},${Jn},${zo}\\)$`),
    lm = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    };
  Zc(Fo, ai, {
    copy(e) {
      return Object.assign(new this.constructor(), this, e);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: cm,
    formatHex: cm,
    formatHex8: C2,
    formatHsl: I2,
    formatRgb: fm,
    toString: fm,
  });
  function cm() {
    return this.rgb().formatHex();
  }
  function C2() {
    return this.rgb().formatHex8();
  }
  function I2() {
    return mm(this).formatHsl();
  }
  function fm() {
    return this.rgb().formatRgb();
  }
  function ai(e) {
    var n, r;
    return (
      (e = (e + '').trim().toLowerCase()),
      (n = A2.exec(e))
        ? ((r = n[1].length),
          (n = parseInt(n[1], 16)),
          r === 6
            ? um(n)
            : r === 3
              ? new Yt(((n >> 8) & 15) | ((n >> 4) & 240), ((n >> 4) & 15) | (n & 240), ((n & 15) << 4) | (n & 15), 1)
              : r === 8
                ? cs((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (n & 255) / 255)
                : r === 4
                  ? cs(
                      ((n >> 12) & 15) | ((n >> 8) & 240),
                      ((n >> 8) & 15) | ((n >> 4) & 240),
                      ((n >> 4) & 15) | (n & 240),
                      (((n & 15) << 4) | (n & 15)) / 255,
                    )
                  : null)
        : (n = y2.exec(e))
          ? new Yt(n[1], n[2], n[3], 1)
          : (n = S2.exec(e))
            ? new Yt((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
            : (n = b2.exec(e))
              ? cs(n[1], n[2], n[3], n[4])
              : (n = x2.exec(e))
                ? cs((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
                : (n = O2.exec(e))
                  ? hm(n[1], n[2] / 100, n[3] / 100, 1)
                  : (n = R2.exec(e))
                    ? hm(n[1], n[2] / 100, n[3] / 100, n[4])
                    : lm.hasOwnProperty(e)
                      ? um(lm[e])
                      : e === 'transparent'
                        ? new Yt(NaN, NaN, NaN, 0)
                        : null
    );
  }
  function um(e) {
    return new Yt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
  }
  function cs(e, n, r, o) {
    return o <= 0 && (e = n = r = NaN), new Yt(e, n, r, o);
  }
  function L2(e) {
    return e instanceof Fo || (e = ai(e)), e ? ((e = e.rgb()), new Yt(e.r, e.g, e.b, e.opacity)) : new Yt();
  }
  function ef(e, n, r, o) {
    return arguments.length === 1 ? L2(e) : new Yt(e, n, r, o ?? 1);
  }
  function Yt(e, n, r, o) {
    (this.r = +e), (this.g = +n), (this.b = +r), (this.opacity = +o);
  }
  Zc(
    Yt,
    ef,
    sm(Fo, {
      brighter(e) {
        return (e = e == null ? ls : Math.pow(ls, e)), new Yt(this.r * e, this.g * e, this.b * e, this.opacity);
      },
      darker(e) {
        return (e = e == null ? Wo : Math.pow(Wo, e)), new Yt(this.r * e, this.g * e, this.b * e, this.opacity);
      },
      rgb() {
        return this;
      },
      clamp() {
        return new Yt(si(this.r), si(this.g), si(this.b), fs(this.opacity));
      },
      displayable() {
        return (
          -0.5 <= this.r &&
          this.r < 255.5 &&
          -0.5 <= this.g &&
          this.g < 255.5 &&
          -0.5 <= this.b &&
          this.b < 255.5 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      hex: dm,
      formatHex: dm,
      formatHex8: w2,
      formatRgb: pm,
      toString: pm,
    }),
  );
  function dm() {
    return `#${li(this.r)}${li(this.g)}${li(this.b)}`;
  }
  function w2() {
    return `#${li(this.r)}${li(this.g)}${li(this.b)}${li((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function pm() {
    const e = fs(this.opacity);
    return `${e === 1 ? 'rgb(' : 'rgba('}${si(this.r)}, ${si(this.g)}, ${si(this.b)}${e === 1 ? ')' : `, ${e})`}`;
  }
  function fs(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
  }
  function si(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0));
  }
  function li(e) {
    return (e = si(e)), (e < 16 ? '0' : '') + e.toString(16);
  }
  function hm(e, n, r, o) {
    return o <= 0 ? (e = n = r = NaN) : r <= 0 || r >= 1 ? (e = n = NaN) : n <= 0 && (e = NaN), new vn(e, n, r, o);
  }
  function mm(e) {
    if (e instanceof vn) return new vn(e.h, e.s, e.l, e.opacity);
    if ((e instanceof Fo || (e = ai(e)), !e)) return new vn();
    if (e instanceof vn) return e;
    e = e.rgb();
    var n = e.r / 255,
      r = e.g / 255,
      o = e.b / 255,
      s = Math.min(n, r, o),
      l = Math.max(n, r, o),
      c = NaN,
      f = l - s,
      d = (l + s) / 2;
    return (
      f
        ? (n === l ? (c = (r - o) / f + (r < o) * 6) : r === l ? (c = (o - n) / f + 2) : (c = (n - r) / f + 4),
          (f /= d < 0.5 ? l + s : 2 - l - s),
          (c *= 60))
        : (f = d > 0 && d < 1 ? 0 : c),
      new vn(c, f, d, e.opacity)
    );
  }
  function v2(e, n, r, o) {
    return arguments.length === 1 ? mm(e) : new vn(e, n, r, o ?? 1);
  }
  function vn(e, n, r, o) {
    (this.h = +e), (this.s = +n), (this.l = +r), (this.opacity = +o);
  }
  Zc(
    vn,
    v2,
    sm(Fo, {
      brighter(e) {
        return (e = e == null ? ls : Math.pow(ls, e)), new vn(this.h, this.s, this.l * e, this.opacity);
      },
      darker(e) {
        return (e = e == null ? Wo : Math.pow(Wo, e)), new vn(this.h, this.s, this.l * e, this.opacity);
      },
      rgb() {
        var e = (this.h % 360) + (this.h < 0) * 360,
          n = isNaN(e) || isNaN(this.s) ? 0 : this.s,
          r = this.l,
          o = r + (r < 0.5 ? r : 1 - r) * n,
          s = 2 * r - o;
        return new Yt(
          tf(e >= 240 ? e - 240 : e + 120, s, o),
          tf(e, s, o),
          tf(e < 120 ? e + 240 : e - 120, s, o),
          this.opacity,
        );
      },
      clamp() {
        return new vn(Em(this.h), us(this.s), us(this.l), fs(this.opacity));
      },
      displayable() {
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      formatHsl() {
        const e = fs(this.opacity);
        return `${e === 1 ? 'hsl(' : 'hsla('}${Em(this.h)}, ${us(this.s) * 100}%, ${us(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`;
      },
    }),
  );
  function Em(e) {
    return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
  }
  function us(e) {
    return Math.max(0, Math.min(1, e || 0));
  }
  function tf(e, n, r) {
    return (e < 60 ? n + ((r - n) * e) / 60 : e < 180 ? r : e < 240 ? n + ((r - n) * (240 - e)) / 60 : n) * 255;
  }
  const nf = e => () => e;
  function k2(e, n) {
    return function (r) {
      return e + r * n;
    };
  }
  function D2(e, n, r) {
    return (
      (e = Math.pow(e, r)),
      (n = Math.pow(n, r) - e),
      (r = 1 / r),
      function (o) {
        return Math.pow(e + o * n, r);
      }
    );
  }
  function V2(e) {
    return (e = +e) == 1
      ? _m
      : function (n, r) {
          return r - n ? D2(n, r, e) : nf(isNaN(n) ? r : n);
        };
  }
  function _m(e, n) {
    var r = n - e;
    return r ? k2(e, r) : nf(isNaN(e) ? n : e);
  }
  const ds = (function e(n) {
    var r = V2(n);
    function o(s, l) {
      var c = r((s = ef(s)).r, (l = ef(l)).r),
        f = r(s.g, l.g),
        d = r(s.b, l.b),
        m = _m(s.opacity, l.opacity);
      return function (p) {
        return (s.r = c(p)), (s.g = f(p)), (s.b = d(p)), (s.opacity = m(p)), s + '';
      };
    }
    return (o.gamma = e), o;
  })(1);
  function M2(e, n) {
    n || (n = []);
    var r = e ? Math.min(n.length, e.length) : 0,
      o = n.slice(),
      s;
    return function (l) {
      for (s = 0; s < r; ++s) o[s] = e[s] * (1 - l) + n[s] * l;
      return o;
    };
  }
  function B2(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
  }
  function P2(e, n) {
    var r = n ? n.length : 0,
      o = e ? Math.min(r, e.length) : 0,
      s = new Array(o),
      l = new Array(r),
      c;
    for (c = 0; c < o; ++c) s[c] = af(e[c], n[c]);
    for (; c < r; ++c) l[c] = n[c];
    return function (f) {
      for (c = 0; c < o; ++c) l[c] = s[c](f);
      return l;
    };
  }
  function U2(e, n) {
    var r = new Date();
    return (
      (e = +e),
      (n = +n),
      function (o) {
        return r.setTime(e * (1 - o) + n * o), r;
      }
    );
  }
  function kn(e, n) {
    return (
      (e = +e),
      (n = +n),
      function (r) {
        return e * (1 - r) + n * r;
      }
    );
  }
  function $2(e, n) {
    var r = {},
      o = {},
      s;
    (e === null || typeof e != 'object') && (e = {}), (n === null || typeof n != 'object') && (n = {});
    for (s in n) s in e ? (r[s] = af(e[s], n[s])) : (o[s] = n[s]);
    return function (l) {
      for (s in r) o[s] = r[s](l);
      return o;
    };
  }
  var rf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    of = new RegExp(rf.source, 'g');
  function H2(e) {
    return function () {
      return e;
    };
  }
  function F2(e) {
    return function (n) {
      return e(n) + '';
    };
  }
  function gm(e, n) {
    var r = (rf.lastIndex = of.lastIndex = 0),
      o,
      s,
      l,
      c = -1,
      f = [],
      d = [];
    for (e = e + '', n = n + ''; (o = rf.exec(e)) && (s = of.exec(n)); )
      (l = s.index) > r && ((l = n.slice(r, l)), f[c] ? (f[c] += l) : (f[++c] = l)),
        (o = o[0]) === (s = s[0])
          ? f[c]
            ? (f[c] += s)
            : (f[++c] = s)
          : ((f[++c] = null), d.push({ i: c, x: kn(o, s) })),
        (r = of.lastIndex);
    return (
      r < n.length && ((l = n.slice(r)), f[c] ? (f[c] += l) : (f[++c] = l)),
      f.length < 2
        ? d[0]
          ? F2(d[0].x)
          : H2(n)
        : ((n = d.length),
          function (m) {
            for (var p = 0, T; p < n; ++p) f[(T = d[p]).i] = T.x(m);
            return f.join('');
          })
    );
  }
  function af(e, n) {
    var r = typeof n,
      o;
    return n == null || r === 'boolean'
      ? nf(n)
      : (r === 'number'
          ? kn
          : r === 'string'
            ? (o = ai(n))
              ? ((n = o), ds)
              : gm
            : n instanceof ai
              ? ds
              : n instanceof Date
                ? U2
                : B2(n)
                  ? M2
                  : Array.isArray(n)
                    ? P2
                    : (typeof n.valueOf != 'function' && typeof n.toString != 'function') || isNaN(n)
                      ? $2
                      : kn)(e, n);
  }
  function W2(e, n) {
    return (
      (e = +e),
      (n = +n),
      function (r) {
        return Math.round(e * (1 - r) + n * r);
      }
    );
  }
  var Tm = 180 / Math.PI,
    sf = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
  function Nm(e, n, r, o, s, l) {
    var c, f, d;
    return (
      (c = Math.sqrt(e * e + n * n)) && ((e /= c), (n /= c)),
      (d = e * r + n * o) && ((r -= e * d), (o -= n * d)),
      (f = Math.sqrt(r * r + o * o)) && ((r /= f), (o /= f), (d /= f)),
      e * o < n * r && ((e = -e), (n = -n), (d = -d), (c = -c)),
      { translateX: s, translateY: l, rotate: Math.atan2(n, e) * Tm, skewX: Math.atan(d) * Tm, scaleX: c, scaleY: f }
    );
  }
  var ps;
  function z2(e) {
    const n = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(e + '');
    return n.isIdentity ? sf : Nm(n.a, n.b, n.c, n.d, n.e, n.f);
  }
  function X2(e) {
    return e == null ||
      (ps || (ps = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
      ps.setAttribute('transform', e),
      !(e = ps.transform.baseVal.consolidate()))
      ? sf
      : ((e = e.matrix), Nm(e.a, e.b, e.c, e.d, e.e, e.f));
  }
  function Am(e, n, r, o) {
    function s(m) {
      return m.length ? m.pop() + ' ' : '';
    }
    function l(m, p, T, N, b, R) {
      if (m !== T || p !== N) {
        var C = b.push('translate(', null, n, null, r);
        R.push({ i: C - 4, x: kn(m, T) }, { i: C - 2, x: kn(p, N) });
      } else (T || N) && b.push('translate(' + T + n + N + r);
    }
    function c(m, p, T, N) {
      m !== p
        ? (m - p > 180 ? (p += 360) : p - m > 180 && (m += 360),
          N.push({ i: T.push(s(T) + 'rotate(', null, o) - 2, x: kn(m, p) }))
        : p && T.push(s(T) + 'rotate(' + p + o);
    }
    function f(m, p, T, N) {
      m !== p ? N.push({ i: T.push(s(T) + 'skewX(', null, o) - 2, x: kn(m, p) }) : p && T.push(s(T) + 'skewX(' + p + o);
    }
    function d(m, p, T, N, b, R) {
      if (m !== T || p !== N) {
        var C = b.push(s(b) + 'scale(', null, ',', null, ')');
        R.push({ i: C - 4, x: kn(m, T) }, { i: C - 2, x: kn(p, N) });
      } else (T !== 1 || N !== 1) && b.push(s(b) + 'scale(' + T + ',' + N + ')');
    }
    return function (m, p) {
      var T = [],
        N = [];
      return (
        (m = e(m)),
        (p = e(p)),
        l(m.translateX, m.translateY, p.translateX, p.translateY, T, N),
        c(m.rotate, p.rotate, T, N),
        f(m.skewX, p.skewX, T, N),
        d(m.scaleX, m.scaleY, p.scaleX, p.scaleY, T, N),
        (m = p = null),
        function (b) {
          for (var R = -1, C = N.length, B; ++R < C; ) T[(B = N[R]).i] = B.x(b);
          return T.join('');
        }
      );
    };
  }
  var G2 = Am(z2, 'px, ', 'px)', 'deg)'),
    Y2 = Am(X2, ', ', ')', ')'),
    K2 = 1e-12;
  function ym(e) {
    return ((e = Math.exp(e)) + 1 / e) / 2;
  }
  function j2(e) {
    return ((e = Math.exp(e)) - 1 / e) / 2;
  }
  function q2(e) {
    return ((e = Math.exp(2 * e)) - 1) / (e + 1);
  }
  const J2 = (function e(n, r, o) {
    function s(l, c) {
      var f = l[0],
        d = l[1],
        m = l[2],
        p = c[0],
        T = c[1],
        N = c[2],
        b = p - f,
        R = T - d,
        C = b * b + R * R,
        B,
        S;
      if (C < K2)
        (S = Math.log(N / m) / n),
          (B = function (D) {
            return [f + D * b, d + D * R, m * Math.exp(n * D * S)];
          });
      else {
        var V = Math.sqrt(C),
          Y = (N * N - m * m + o * C) / (2 * m * r * V),
          _ = (N * N - m * m - o * C) / (2 * N * r * V),
          k = Math.log(Math.sqrt(Y * Y + 1) - Y),
          O = Math.log(Math.sqrt(_ * _ + 1) - _);
        (S = (O - k) / n),
          (B = function (D) {
            var L = D * S,
              y = ym(k),
              K = (m / (r * V)) * (y * q2(n * L + k) - j2(k));
            return [f + K * b, d + K * R, (m * y) / ym(n * L + k)];
          });
      }
      return (B.duration = (S * 1e3 * n) / Math.SQRT2), B;
    }
    return (
      (s.rho = function (l) {
        var c = Math.max(0.001, +l),
          f = c * c,
          d = f * f;
        return e(c, f, d);
      }),
      s
    );
  })(Math.SQRT2, 2, 4);
  var Fi = 0,
    Xo = 0,
    Go = 0,
    Sm = 1e3,
    hs,
    Yo,
    ms = 0,
    ci = 0,
    Es = 0,
    Ko = typeof performance == 'object' && performance.now ? performance : Date,
    bm =
      typeof window == 'object' && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (e) {
            setTimeout(e, 17);
          };
  function lf() {
    return ci || (bm(Q2), (ci = Ko.now() + Es));
  }
  function Q2() {
    ci = 0;
  }
  function _s() {
    this._call = this._time = this._next = null;
  }
  _s.prototype = xm.prototype = {
    constructor: _s,
    restart: function (e, n, r) {
      if (typeof e != 'function') throw new TypeError('callback is not a function');
      (r = (r == null ? lf() : +r) + (n == null ? 0 : +n)),
        !this._next && Yo !== this && (Yo ? (Yo._next = this) : (hs = this), (Yo = this)),
        (this._call = e),
        (this._time = r),
        cf();
    },
    stop: function () {
      this._call && ((this._call = null), (this._time = 1 / 0), cf());
    },
  };
  function xm(e, n, r) {
    var o = new _s();
    return o.restart(e, n, r), o;
  }
  function Z2() {
    lf(), ++Fi;
    for (var e = hs, n; e; ) (n = ci - e._time) >= 0 && e._call.call(void 0, n), (e = e._next);
    --Fi;
  }
  function Om() {
    (ci = (ms = Ko.now()) + Es), (Fi = Xo = 0);
    try {
      Z2();
    } finally {
      (Fi = 0), tv(), (ci = 0);
    }
  }
  function ev() {
    var e = Ko.now(),
      n = e - ms;
    n > Sm && ((Es -= n), (ms = e));
  }
  function tv() {
    for (var e, n = hs, r, o = 1 / 0; n; )
      n._call
        ? (o > n._time && (o = n._time), (e = n), (n = n._next))
        : ((r = n._next), (n._next = null), (n = e ? (e._next = r) : (hs = r)));
    (Yo = e), cf(o);
  }
  function cf(e) {
    if (!Fi) {
      Xo && (Xo = clearTimeout(Xo));
      var n = e - ci;
      n > 24
        ? (e < 1 / 0 && (Xo = setTimeout(Om, e - Ko.now() - Es)), Go && (Go = clearInterval(Go)))
        : (Go || ((ms = Ko.now()), (Go = setInterval(ev, Sm))), (Fi = 1), bm(Om));
    }
  }
  function Rm(e, n, r) {
    var o = new _s();
    return (
      (n = n == null ? 0 : +n),
      o.restart(
        s => {
          o.stop(), e(s + n);
        },
        n,
        r,
      ),
      o
    );
  }
  var nv = Yc('start', 'end', 'cancel', 'interrupt'),
    rv = [],
    Cm = 0,
    Im = 1,
    ff = 2,
    gs = 3,
    Lm = 4,
    uf = 5,
    Ts = 6;
  function Ns(e, n, r, o, s, l) {
    var c = e.__transition;
    if (!c) e.__transition = {};
    else if (r in c) return;
    iv(e, r, {
      name: n,
      index: o,
      group: s,
      on: nv,
      tween: rv,
      time: l.time,
      delay: l.delay,
      duration: l.duration,
      ease: l.ease,
      timer: null,
      state: Cm,
    });
  }
  function df(e, n) {
    var r = Dn(e, n);
    if (r.state > Cm) throw new Error('too late; already scheduled');
    return r;
  }
  function Qn(e, n) {
    var r = Dn(e, n);
    if (r.state > gs) throw new Error('too late; already running');
    return r;
  }
  function Dn(e, n) {
    var r = e.__transition;
    if (!r || !(r = r[n])) throw new Error('transition not found');
    return r;
  }
  function iv(e, n, r) {
    var o = e.__transition,
      s;
    (o[n] = r), (r.timer = xm(l, 0, r.time));
    function l(m) {
      (r.state = Im), r.timer.restart(c, r.delay, r.time), r.delay <= m && c(m - r.delay);
    }
    function c(m) {
      var p, T, N, b;
      if (r.state !== Im) return d();
      for (p in o)
        if (((b = o[p]), b.name === r.name)) {
          if (b.state === gs) return Rm(c);
          b.state === Lm
            ? ((b.state = Ts), b.timer.stop(), b.on.call('interrupt', e, e.__data__, b.index, b.group), delete o[p])
            : +p < n &&
              ((b.state = Ts), b.timer.stop(), b.on.call('cancel', e, e.__data__, b.index, b.group), delete o[p]);
        }
      if (
        (Rm(function () {
          r.state === gs && ((r.state = Lm), r.timer.restart(f, r.delay, r.time), f(m));
        }),
        (r.state = ff),
        r.on.call('start', e, e.__data__, r.index, r.group),
        r.state === ff)
      ) {
        for (r.state = gs, s = new Array((N = r.tween.length)), p = 0, T = -1; p < N; ++p)
          (b = r.tween[p].value.call(e, e.__data__, r.index, r.group)) && (s[++T] = b);
        s.length = T + 1;
      }
    }
    function f(m) {
      for (
        var p = m < r.duration ? r.ease.call(null, m / r.duration) : (r.timer.restart(d), (r.state = uf), 1),
          T = -1,
          N = s.length;
        ++T < N;

      )
        s[T].call(e, p);
      r.state === uf && (r.on.call('end', e, e.__data__, r.index, r.group), d());
    }
    function d() {
      (r.state = Ts), r.timer.stop(), delete o[n];
      for (var m in o) return;
      delete e.__transition;
    }
  }
  function As(e, n) {
    var r = e.__transition,
      o,
      s,
      l = !0,
      c;
    if (r) {
      n = n == null ? null : n + '';
      for (c in r) {
        if ((o = r[c]).name !== n) {
          l = !1;
          continue;
        }
        (s = o.state > ff && o.state < uf),
          (o.state = Ts),
          o.timer.stop(),
          o.on.call(s ? 'interrupt' : 'cancel', e, e.__data__, o.index, o.group),
          delete r[c];
      }
      l && delete e.__transition;
    }
  }
  function ov(e) {
    return this.each(function () {
      As(this, e);
    });
  }
  function av(e, n) {
    var r, o;
    return function () {
      var s = Qn(this, e),
        l = s.tween;
      if (l !== r) {
        o = r = l;
        for (var c = 0, f = o.length; c < f; ++c)
          if (o[c].name === n) {
            (o = o.slice()), o.splice(c, 1);
            break;
          }
      }
      s.tween = o;
    };
  }
  function sv(e, n, r) {
    var o, s;
    if (typeof r != 'function') throw new Error();
    return function () {
      var l = Qn(this, e),
        c = l.tween;
      if (c !== o) {
        s = (o = c).slice();
        for (var f = { name: n, value: r }, d = 0, m = s.length; d < m; ++d)
          if (s[d].name === n) {
            s[d] = f;
            break;
          }
        d === m && s.push(f);
      }
      l.tween = s;
    };
  }
  function lv(e, n) {
    var r = this._id;
    if (((e += ''), arguments.length < 2)) {
      for (var o = Dn(this.node(), r).tween, s = 0, l = o.length, c; s < l; ++s)
        if ((c = o[s]).name === e) return c.value;
      return null;
    }
    return this.each((n == null ? av : sv)(r, e, n));
  }
  function pf(e, n, r) {
    var o = e._id;
    return (
      e.each(function () {
        var s = Qn(this, o);
        (s.value || (s.value = {}))[n] = r.apply(this, arguments);
      }),
      function (s) {
        return Dn(s, o).value[n];
      }
    );
  }
  function wm(e, n) {
    var r;
    return (typeof n == 'number' ? kn : n instanceof ai ? ds : (r = ai(n)) ? ((n = r), ds) : gm)(e, n);
  }
  function cv(e) {
    return function () {
      this.removeAttribute(e);
    };
  }
  function fv(e) {
    return function () {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function uv(e, n, r) {
    var o,
      s = r + '',
      l;
    return function () {
      var c = this.getAttribute(e);
      return c === s ? null : c === o ? l : (l = n((o = c), r));
    };
  }
  function dv(e, n, r) {
    var o,
      s = r + '',
      l;
    return function () {
      var c = this.getAttributeNS(e.space, e.local);
      return c === s ? null : c === o ? l : (l = n((o = c), r));
    };
  }
  function pv(e, n, r) {
    var o, s, l;
    return function () {
      var c,
        f = r(this),
        d;
      return f == null
        ? void this.removeAttribute(e)
        : ((c = this.getAttribute(e)),
          (d = f + ''),
          c === d ? null : c === o && d === s ? l : ((s = d), (l = n((o = c), f))));
    };
  }
  function hv(e, n, r) {
    var o, s, l;
    return function () {
      var c,
        f = r(this),
        d;
      return f == null
        ? void this.removeAttributeNS(e.space, e.local)
        : ((c = this.getAttributeNS(e.space, e.local)),
          (d = f + ''),
          c === d ? null : c === o && d === s ? l : ((s = d), (l = n((o = c), f))));
    };
  }
  function mv(e, n) {
    var r = as(e),
      o = r === 'transform' ? Y2 : wm;
    return this.attrTween(
      e,
      typeof n == 'function'
        ? (r.local ? hv : pv)(r, o, pf(this, 'attr.' + e, n))
        : n == null
          ? (r.local ? fv : cv)(r)
          : (r.local ? dv : uv)(r, o, n),
    );
  }
  function Ev(e, n) {
    return function (r) {
      this.setAttribute(e, n.call(this, r));
    };
  }
  function _v(e, n) {
    return function (r) {
      this.setAttributeNS(e.space, e.local, n.call(this, r));
    };
  }
  function gv(e, n) {
    var r, o;
    function s() {
      var l = n.apply(this, arguments);
      return l !== o && (r = (o = l) && _v(e, l)), r;
    }
    return (s._value = n), s;
  }
  function Tv(e, n) {
    var r, o;
    function s() {
      var l = n.apply(this, arguments);
      return l !== o && (r = (o = l) && Ev(e, l)), r;
    }
    return (s._value = n), s;
  }
  function Nv(e, n) {
    var r = 'attr.' + e;
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (n == null) return this.tween(r, null);
    if (typeof n != 'function') throw new Error();
    var o = as(e);
    return this.tween(r, (o.local ? gv : Tv)(o, n));
  }
  function Av(e, n) {
    return function () {
      df(this, e).delay = +n.apply(this, arguments);
    };
  }
  function yv(e, n) {
    return (
      (n = +n),
      function () {
        df(this, e).delay = n;
      }
    );
  }
  function Sv(e) {
    var n = this._id;
    return arguments.length ? this.each((typeof e == 'function' ? Av : yv)(n, e)) : Dn(this.node(), n).delay;
  }
  function bv(e, n) {
    return function () {
      Qn(this, e).duration = +n.apply(this, arguments);
    };
  }
  function xv(e, n) {
    return (
      (n = +n),
      function () {
        Qn(this, e).duration = n;
      }
    );
  }
  function Ov(e) {
    var n = this._id;
    return arguments.length ? this.each((typeof e == 'function' ? bv : xv)(n, e)) : Dn(this.node(), n).duration;
  }
  function Rv(e, n) {
    if (typeof n != 'function') throw new Error();
    return function () {
      Qn(this, e).ease = n;
    };
  }
  function Cv(e) {
    var n = this._id;
    return arguments.length ? this.each(Rv(n, e)) : Dn(this.node(), n).ease;
  }
  function Iv(e, n) {
    return function () {
      var r = n.apply(this, arguments);
      if (typeof r != 'function') throw new Error();
      Qn(this, e).ease = r;
    };
  }
  function Lv(e) {
    if (typeof e != 'function') throw new Error();
    return this.each(Iv(this._id, e));
  }
  function wv(e) {
    typeof e != 'function' && (e = Jh(e));
    for (var n = this._groups, r = n.length, o = new Array(r), s = 0; s < r; ++s)
      for (var l = n[s], c = l.length, f = (o[s] = []), d, m = 0; m < c; ++m)
        (d = l[m]) && e.call(d, d.__data__, m, l) && f.push(d);
    return new lr(o, this._parents, this._name, this._id);
  }
  function vv(e) {
    if (e._id !== this._id) throw new Error();
    for (
      var n = this._groups, r = e._groups, o = n.length, s = r.length, l = Math.min(o, s), c = new Array(o), f = 0;
      f < l;
      ++f
    )
      for (var d = n[f], m = r[f], p = d.length, T = (c[f] = new Array(p)), N, b = 0; b < p; ++b)
        (N = d[b] || m[b]) && (T[b] = N);
    for (; f < o; ++f) c[f] = n[f];
    return new lr(c, this._parents, this._name, this._id);
  }
  function kv(e) {
    return (e + '')
      .trim()
      .split(/^|\s+/)
      .every(function (n) {
        var r = n.indexOf('.');
        return r >= 0 && (n = n.slice(0, r)), !n || n === 'start';
      });
  }
  function Dv(e, n, r) {
    var o,
      s,
      l = kv(n) ? df : Qn;
    return function () {
      var c = l(this, e),
        f = c.on;
      f !== o && (s = (o = f).copy()).on(n, r), (c.on = s);
    };
  }
  function Vv(e, n) {
    var r = this._id;
    return arguments.length < 2 ? Dn(this.node(), r).on.on(e) : this.each(Dv(r, e, n));
  }
  function Mv(e) {
    return function () {
      var n = this.parentNode;
      for (var r in this.__transition) if (+r !== e) return;
      n && n.removeChild(this);
    };
  }
  function Bv() {
    return this.on('end.remove', Mv(this._id));
  }
  function Pv(e) {
    var n = this._name,
      r = this._id;
    typeof e != 'function' && (e = jc(e));
    for (var o = this._groups, s = o.length, l = new Array(s), c = 0; c < s; ++c)
      for (var f = o[c], d = f.length, m = (l[c] = new Array(d)), p, T, N = 0; N < d; ++N)
        (p = f[N]) &&
          (T = e.call(p, p.__data__, N, f)) &&
          ('__data__' in p && (T.__data__ = p.__data__), (m[N] = T), Ns(m[N], n, r, N, m, Dn(p, r)));
    return new lr(l, this._parents, n, r);
  }
  function Uv(e) {
    var n = this._name,
      r = this._id;
    typeof e != 'function' && (e = qh(e));
    for (var o = this._groups, s = o.length, l = [], c = [], f = 0; f < s; ++f)
      for (var d = o[f], m = d.length, p, T = 0; T < m; ++T)
        if ((p = d[T])) {
          for (var N = e.call(p, p.__data__, T, d), b, R = Dn(p, r), C = 0, B = N.length; C < B; ++C)
            (b = N[C]) && Ns(b, n, r, C, N, R);
          l.push(N), c.push(p);
        }
    return new lr(l, c, n, r);
  }
  var $v = Ho.prototype.constructor;
  function Hv() {
    return new $v(this._groups, this._parents);
  }
  function Fv(e, n) {
    var r, o, s;
    return function () {
      var l = $i(this, e),
        c = (this.style.removeProperty(e), $i(this, e));
      return l === c ? null : l === r && c === o ? s : (s = n((r = l), (o = c)));
    };
  }
  function vm(e) {
    return function () {
      this.style.removeProperty(e);
    };
  }
  function Wv(e, n, r) {
    var o,
      s = r + '',
      l;
    return function () {
      var c = $i(this, e);
      return c === s ? null : c === o ? l : (l = n((o = c), r));
    };
  }
  function zv(e, n, r) {
    var o, s, l;
    return function () {
      var c = $i(this, e),
        f = r(this),
        d = f + '';
      return (
        f == null && (d = f = (this.style.removeProperty(e), $i(this, e))),
        c === d ? null : c === o && d === s ? l : ((s = d), (l = n((o = c), f)))
      );
    };
  }
  function Xv(e, n) {
    var r,
      o,
      s,
      l = 'style.' + n,
      c = 'end.' + l,
      f;
    return function () {
      var d = Qn(this, e),
        m = d.on,
        p = d.value[l] == null ? f || (f = vm(n)) : void 0;
      (m !== r || s !== p) && (o = (r = m).copy()).on(c, (s = p)), (d.on = o);
    };
  }
  function Gv(e, n, r) {
    var o = (e += '') == 'transform' ? G2 : wm;
    return n == null
      ? this.styleTween(e, Fv(e, o)).on('end.style.' + e, vm(e))
      : typeof n == 'function'
        ? this.styleTween(e, zv(e, o, pf(this, 'style.' + e, n))).each(Xv(this._id, e))
        : this.styleTween(e, Wv(e, o, n), r).on('end.style.' + e, null);
  }
  function Yv(e, n, r) {
    return function (o) {
      this.style.setProperty(e, n.call(this, o), r);
    };
  }
  function Kv(e, n, r) {
    var o, s;
    function l() {
      var c = n.apply(this, arguments);
      return c !== s && (o = (s = c) && Yv(e, c, r)), o;
    }
    return (l._value = n), l;
  }
  function jv(e, n, r) {
    var o = 'style.' + (e += '');
    if (arguments.length < 2) return (o = this.tween(o)) && o._value;
    if (n == null) return this.tween(o, null);
    if (typeof n != 'function') throw new Error();
    return this.tween(o, Kv(e, n, r ?? ''));
  }
  function qv(e) {
    return function () {
      this.textContent = e;
    };
  }
  function Jv(e) {
    return function () {
      var n = e(this);
      this.textContent = n ?? '';
    };
  }
  function Qv(e) {
    return this.tween('text', typeof e == 'function' ? Jv(pf(this, 'text', e)) : qv(e == null ? '' : e + ''));
  }
  function Zv(e) {
    return function (n) {
      this.textContent = e.call(this, n);
    };
  }
  function ek(e) {
    var n, r;
    function o() {
      var s = e.apply(this, arguments);
      return s !== r && (n = (r = s) && Zv(s)), n;
    }
    return (o._value = e), o;
  }
  function tk(e) {
    var n = 'text';
    if (arguments.length < 1) return (n = this.tween(n)) && n._value;
    if (e == null) return this.tween(n, null);
    if (typeof e != 'function') throw new Error();
    return this.tween(n, ek(e));
  }
  function nk() {
    for (var e = this._name, n = this._id, r = km(), o = this._groups, s = o.length, l = 0; l < s; ++l)
      for (var c = o[l], f = c.length, d, m = 0; m < f; ++m)
        if ((d = c[m])) {
          var p = Dn(d, n);
          Ns(d, e, r, m, c, { time: p.time + p.delay + p.duration, delay: 0, duration: p.duration, ease: p.ease });
        }
    return new lr(o, this._parents, e, r);
  }
  function rk() {
    var e,
      n,
      r = this,
      o = r._id,
      s = r.size();
    return new Promise(function (l, c) {
      var f = { value: c },
        d = {
          value: function () {
            --s === 0 && l();
          },
        };
      r.each(function () {
        var m = Qn(this, o),
          p = m.on;
        p !== e && ((n = (e = p).copy()), n._.cancel.push(f), n._.interrupt.push(f), n._.end.push(d)), (m.on = n);
      }),
        s === 0 && l();
    });
  }
  var ik = 0;
  function lr(e, n, r, o) {
    (this._groups = e), (this._parents = n), (this._name = r), (this._id = o);
  }
  function km() {
    return ++ik;
  }
  var cr = Ho.prototype;
  lr.prototype = {
    constructor: lr,
    select: Pv,
    selectAll: Uv,
    selectChild: cr.selectChild,
    selectChildren: cr.selectChildren,
    filter: wv,
    merge: vv,
    selection: Hv,
    transition: nk,
    call: cr.call,
    nodes: cr.nodes,
    node: cr.node,
    size: cr.size,
    empty: cr.empty,
    each: cr.each,
    on: Vv,
    attr: mv,
    attrTween: Nv,
    style: Gv,
    styleTween: jv,
    text: Qv,
    textTween: tk,
    remove: Bv,
    tween: lv,
    delay: Sv,
    duration: Ov,
    ease: Cv,
    easeVarying: Lv,
    end: rk,
    [Symbol.iterator]: cr[Symbol.iterator],
  };
  function ok(e) {
    return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
  }
  var ak = { time: null, delay: 0, duration: 250, ease: ok };
  function sk(e, n) {
    for (var r; !(r = e.__transition) || !(r = r[n]); )
      if (!(e = e.parentNode)) throw new Error(`transition ${n} not found`);
    return r;
  }
  function lk(e) {
    var n, r;
    e instanceof lr
      ? ((n = e._id), (e = e._name))
      : ((n = km()), ((r = ak).time = lf()), (e = e == null ? null : e + ''));
    for (var o = this._groups, s = o.length, l = 0; l < s; ++l)
      for (var c = o[l], f = c.length, d, m = 0; m < f; ++m) (d = c[m]) && Ns(d, e, n, m, c, r || sk(d, n));
    return new lr(o, this._parents, e, n);
  }
  (Ho.prototype.interrupt = ov), (Ho.prototype.transition = lk);
  const hf = Math.PI,
    mf = 2 * hf,
    fi = 1e-6,
    ck = mf - fi;
  function Ef() {
    (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '');
  }
  function Dm() {
    return new Ef();
  }
  Ef.prototype = Dm.prototype = {
    constructor: Ef,
    moveTo: function (e, n) {
      this._ += 'M' + (this._x0 = this._x1 = +e) + ',' + (this._y0 = this._y1 = +n);
    },
    closePath: function () {
      this._x1 !== null && ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'));
    },
    lineTo: function (e, n) {
      this._ += 'L' + (this._x1 = +e) + ',' + (this._y1 = +n);
    },
    quadraticCurveTo: function (e, n, r, o) {
      this._ += 'Q' + +e + ',' + +n + ',' + (this._x1 = +r) + ',' + (this._y1 = +o);
    },
    bezierCurveTo: function (e, n, r, o, s, l) {
      this._ += 'C' + +e + ',' + +n + ',' + +r + ',' + +o + ',' + (this._x1 = +s) + ',' + (this._y1 = +l);
    },
    arcTo: function (e, n, r, o, s) {
      (e = +e), (n = +n), (r = +r), (o = +o), (s = +s);
      var l = this._x1,
        c = this._y1,
        f = r - e,
        d = o - n,
        m = l - e,
        p = c - n,
        T = m * m + p * p;
      if (s < 0) throw new Error('negative radius: ' + s);
      if (this._x1 === null) this._ += 'M' + (this._x1 = e) + ',' + (this._y1 = n);
      else if (T > fi)
        if (!(Math.abs(p * f - d * m) > fi) || !s) this._ += 'L' + (this._x1 = e) + ',' + (this._y1 = n);
        else {
          var N = r - l,
            b = o - c,
            R = f * f + d * d,
            C = N * N + b * b,
            B = Math.sqrt(R),
            S = Math.sqrt(T),
            V = s * Math.tan((hf - Math.acos((R + T - C) / (2 * B * S))) / 2),
            Y = V / S,
            _ = V / B;
          Math.abs(Y - 1) > fi && (this._ += 'L' + (e + Y * m) + ',' + (n + Y * p)),
            (this._ +=
              'A' +
              s +
              ',' +
              s +
              ',0,0,' +
              +(p * N > m * b) +
              ',' +
              (this._x1 = e + _ * f) +
              ',' +
              (this._y1 = n + _ * d));
        }
    },
    arc: function (e, n, r, o, s, l) {
      (e = +e), (n = +n), (r = +r), (l = !!l);
      var c = r * Math.cos(o),
        f = r * Math.sin(o),
        d = e + c,
        m = n + f,
        p = 1 ^ l,
        T = l ? o - s : s - o;
      if (r < 0) throw new Error('negative radius: ' + r);
      this._x1 === null
        ? (this._ += 'M' + d + ',' + m)
        : (Math.abs(this._x1 - d) > fi || Math.abs(this._y1 - m) > fi) && (this._ += 'L' + d + ',' + m),
        r &&
          (T < 0 && (T = (T % mf) + mf),
          T > ck
            ? (this._ +=
                'A' +
                r +
                ',' +
                r +
                ',0,1,' +
                p +
                ',' +
                (e - c) +
                ',' +
                (n - f) +
                'A' +
                r +
                ',' +
                r +
                ',0,1,' +
                p +
                ',' +
                (this._x1 = d) +
                ',' +
                (this._y1 = m))
            : T > fi &&
              (this._ +=
                'A' +
                r +
                ',' +
                r +
                ',0,' +
                +(T >= hf) +
                ',' +
                p +
                ',' +
                (this._x1 = e + r * Math.cos(s)) +
                ',' +
                (this._y1 = n + r * Math.sin(s))));
    },
    rect: function (e, n, r, o) {
      this._ +=
        'M' + (this._x0 = this._x1 = +e) + ',' + (this._y0 = this._y1 = +n) + 'h' + +r + 'v' + +o + 'h' + -r + 'Z';
    },
    toString: function () {
      return this._;
    },
  };
  function fk(e) {
    return Math.abs((e = Math.round(e))) >= 1e21 ? e.toLocaleString('en').replace(/,/g, '') : e.toString(10);
  }
  function ys(e, n) {
    if ((r = (e = n ? e.toExponential(n - 1) : e.toExponential()).indexOf('e')) < 0) return null;
    var r,
      o = e.slice(0, r);
    return [o.length > 1 ? o[0] + o.slice(2) : o, +e.slice(r + 1)];
  }
  function Wi(e) {
    return (e = ys(Math.abs(e))), e ? e[1] : NaN;
  }
  function uk(e, n) {
    return function (r, o) {
      for (
        var s = r.length, l = [], c = 0, f = e[0], d = 0;
        s > 0 &&
        f > 0 &&
        (d + f + 1 > o && (f = Math.max(1, o - d)), l.push(r.substring((s -= f), s + f)), !((d += f + 1) > o));

      )
        f = e[(c = (c + 1) % e.length)];
      return l.reverse().join(n);
    };
  }
  function dk(e) {
    return function (n) {
      return n.replace(/[0-9]/g, function (r) {
        return e[+r];
      });
    };
  }
  var pk = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function Ss(e) {
    if (!(n = pk.exec(e))) throw new Error('invalid format: ' + e);
    var n;
    return new _f({
      fill: n[1],
      align: n[2],
      sign: n[3],
      symbol: n[4],
      zero: n[5],
      width: n[6],
      comma: n[7],
      precision: n[8] && n[8].slice(1),
      trim: n[9],
      type: n[10],
    });
  }
  Ss.prototype = _f.prototype;
  function _f(e) {
    (this.fill = e.fill === void 0 ? ' ' : e.fill + ''),
      (this.align = e.align === void 0 ? '>' : e.align + ''),
      (this.sign = e.sign === void 0 ? '-' : e.sign + ''),
      (this.symbol = e.symbol === void 0 ? '' : e.symbol + ''),
      (this.zero = !!e.zero),
      (this.width = e.width === void 0 ? void 0 : +e.width),
      (this.comma = !!e.comma),
      (this.precision = e.precision === void 0 ? void 0 : +e.precision),
      (this.trim = !!e.trim),
      (this.type = e.type === void 0 ? '' : e.type + '');
  }
  _f.prototype.toString = function () {
    return (
      this.fill +
      this.align +
      this.sign +
      this.symbol +
      (this.zero ? '0' : '') +
      (this.width === void 0 ? '' : Math.max(1, this.width | 0)) +
      (this.comma ? ',' : '') +
      (this.precision === void 0 ? '' : '.' + Math.max(0, this.precision | 0)) +
      (this.trim ? '~' : '') +
      this.type
    );
  };
  function hk(e) {
    e: for (var n = e.length, r = 1, o = -1, s; r < n; ++r)
      switch (e[r]) {
        case '.':
          o = s = r;
          break;
        case '0':
          o === 0 && (o = r), (s = r);
          break;
        default:
          if (!+e[r]) break e;
          o > 0 && (o = 0);
          break;
      }
    return o > 0 ? e.slice(0, o) + e.slice(s + 1) : e;
  }
  var Vm;
  function mk(e, n) {
    var r = ys(e, n);
    if (!r) return e + '';
    var o = r[0],
      s = r[1],
      l = s - (Vm = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1,
      c = o.length;
    return l === c
      ? o
      : l > c
        ? o + new Array(l - c + 1).join('0')
        : l > 0
          ? o.slice(0, l) + '.' + o.slice(l)
          : '0.' + new Array(1 - l).join('0') + ys(e, Math.max(0, n + l - 1))[0];
  }
  function Mm(e, n) {
    var r = ys(e, n);
    if (!r) return e + '';
    var o = r[0],
      s = r[1];
    return s < 0
      ? '0.' + new Array(-s).join('0') + o
      : o.length > s + 1
        ? o.slice(0, s + 1) + '.' + o.slice(s + 1)
        : o + new Array(s - o.length + 2).join('0');
  }
  const Bm = {
    '%': (e, n) => (e * 100).toFixed(n),
    b: e => Math.round(e).toString(2),
    c: e => e + '',
    d: fk,
    e: (e, n) => e.toExponential(n),
    f: (e, n) => e.toFixed(n),
    g: (e, n) => e.toPrecision(n),
    o: e => Math.round(e).toString(8),
    p: (e, n) => Mm(e * 100, n),
    r: Mm,
    s: mk,
    X: e => Math.round(e).toString(16).toUpperCase(),
    x: e => Math.round(e).toString(16),
  };
  function Pm(e) {
    return e;
  }
  var Um = Array.prototype.map,
    $m = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  function Ek(e) {
    var n = e.grouping === void 0 || e.thousands === void 0 ? Pm : uk(Um.call(e.grouping, Number), e.thousands + ''),
      r = e.currency === void 0 ? '' : e.currency[0] + '',
      o = e.currency === void 0 ? '' : e.currency[1] + '',
      s = e.decimal === void 0 ? '.' : e.decimal + '',
      l = e.numerals === void 0 ? Pm : dk(Um.call(e.numerals, String)),
      c = e.percent === void 0 ? '%' : e.percent + '',
      f = e.minus === void 0 ? '−' : e.minus + '',
      d = e.nan === void 0 ? 'NaN' : e.nan + '';
    function m(T) {
      T = Ss(T);
      var N = T.fill,
        b = T.align,
        R = T.sign,
        C = T.symbol,
        B = T.zero,
        S = T.width,
        V = T.comma,
        Y = T.precision,
        _ = T.trim,
        k = T.type;
      k === 'n' ? ((V = !0), (k = 'g')) : Bm[k] || (Y === void 0 && (Y = 12), (_ = !0), (k = 'g')),
        (B || (N === '0' && b === '=')) && ((B = !0), (N = '0'), (b = '='));
      var O = C === '$' ? r : C === '#' && /[boxX]/.test(k) ? '0' + k.toLowerCase() : '',
        D = C === '$' ? o : /[%p]/.test(k) ? c : '',
        L = Bm[k],
        y = /[defgprs%]/.test(k);
      Y = Y === void 0 ? 6 : /[gprs]/.test(k) ? Math.max(1, Math.min(21, Y)) : Math.max(0, Math.min(20, Y));
      function K(M) {
        var H = O,
          q = D,
          U,
          ee,
          I;
        if (k === 'c') (q = L(M) + q), (M = '');
        else {
          M = +M;
          var z = M < 0 || 1 / M < 0;
          if (
            ((M = isNaN(M) ? d : L(Math.abs(M), Y)),
            _ && (M = hk(M)),
            z && +M == 0 && R !== '+' && (z = !1),
            (H = (z ? (R === '(' ? R : f) : R === '-' || R === '(' ? '' : R) + H),
            (q = (k === 's' ? $m[8 + Vm / 3] : '') + q + (z && R === '(' ? ')' : '')),
            y)
          ) {
            for (U = -1, ee = M.length; ++U < ee; )
              if (((I = M.charCodeAt(U)), 48 > I || I > 57)) {
                (q = (I === 46 ? s + M.slice(U + 1) : M.slice(U)) + q), (M = M.slice(0, U));
                break;
              }
          }
        }
        V && !B && (M = n(M, 1 / 0));
        var Q = H.length + M.length + q.length,
          oe = Q < S ? new Array(S - Q + 1).join(N) : '';
        switch ((V && B && ((M = n(oe + M, oe.length ? S - q.length : 1 / 0)), (oe = '')), b)) {
          case '<':
            M = H + M + q + oe;
            break;
          case '=':
            M = H + oe + M + q;
            break;
          case '^':
            M = oe.slice(0, (Q = oe.length >> 1)) + H + M + q + oe.slice(Q);
            break;
          default:
            M = oe + H + M + q;
            break;
        }
        return l(M);
      }
      return (
        (K.toString = function () {
          return T + '';
        }),
        K
      );
    }
    function p(T, N) {
      var b = m(((T = Ss(T)), (T.type = 'f'), T)),
        R = Math.max(-8, Math.min(8, Math.floor(Wi(N) / 3))) * 3,
        C = Math.pow(10, -R),
        B = $m[8 + R / 3];
      return function (S) {
        return b(C * S) + B;
      };
    }
    return { format: m, formatPrefix: p };
  }
  var bs, Hm, Fm;
  _k({ thousands: ',', grouping: [3], currency: ['$', ''] });
  function _k(e) {
    return (bs = Ek(e)), (Hm = bs.format), (Fm = bs.formatPrefix), bs;
  }
  function gk(e) {
    return Math.max(0, -Wi(Math.abs(e)));
  }
  function Tk(e, n) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Wi(n) / 3))) * 3 - Wi(Math.abs(e)));
  }
  function Nk(e, n) {
    return (e = Math.abs(e)), (n = Math.abs(n) - e), Math.max(0, Wi(n) - Wi(e)) + 1;
  }
  function Ak(e, n) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(e);
        break;
      default:
        this.range(n).domain(e);
        break;
    }
    return this;
  }
  function yk(e) {
    return function () {
      return e;
    };
  }
  function Sk(e) {
    return +e;
  }
  var Wm = [0, 1];
  function zi(e) {
    return e;
  }
  function gf(e, n) {
    return (n -= e = +e)
      ? function (r) {
          return (r - e) / n;
        }
      : yk(isNaN(n) ? NaN : 0.5);
  }
  function bk(e, n) {
    var r;
    return (
      e > n && ((r = e), (e = n), (n = r)),
      function (o) {
        return Math.max(e, Math.min(n, o));
      }
    );
  }
  function xk(e, n, r) {
    var o = e[0],
      s = e[1],
      l = n[0],
      c = n[1];
    return (
      s < o ? ((o = gf(s, o)), (l = r(c, l))) : ((o = gf(o, s)), (l = r(l, c))),
      function (f) {
        return l(o(f));
      }
    );
  }
  function Ok(e, n, r) {
    var o = Math.min(e.length, n.length) - 1,
      s = new Array(o),
      l = new Array(o),
      c = -1;
    for (e[o] < e[0] && ((e = e.slice().reverse()), (n = n.slice().reverse())); ++c < o; )
      (s[c] = gf(e[c], e[c + 1])), (l[c] = r(n[c], n[c + 1]));
    return function (f) {
      var d = DL(e, f, 1, o) - 1;
      return l[d](s[d](f));
    };
  }
  function Rk(e, n) {
    return n.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
  }
  function Ck() {
    var e = Wm,
      n = Wm,
      r = af,
      o,
      s,
      l,
      c = zi,
      f,
      d,
      m;
    function p() {
      var N = Math.min(e.length, n.length);
      return c !== zi && (c = bk(e[0], e[N - 1])), (f = N > 2 ? Ok : xk), (d = m = null), T;
    }
    function T(N) {
      return N == null || isNaN((N = +N)) ? l : (d || (d = f(e.map(o), n, r)))(o(c(N)));
    }
    return (
      (T.invert = function (N) {
        return c(s((m || (m = f(n, e.map(o), kn)))(N)));
      }),
      (T.domain = function (N) {
        return arguments.length ? ((e = Array.from(N, Sk)), p()) : e.slice();
      }),
      (T.range = function (N) {
        return arguments.length ? ((n = Array.from(N)), p()) : n.slice();
      }),
      (T.rangeRound = function (N) {
        return (n = Array.from(N)), (r = W2), p();
      }),
      (T.clamp = function (N) {
        return arguments.length ? ((c = N ? !0 : zi), p()) : c !== zi;
      }),
      (T.interpolate = function (N) {
        return arguments.length ? ((r = N), p()) : r;
      }),
      (T.unknown = function (N) {
        return arguments.length ? ((l = N), T) : l;
      }),
      function (N, b) {
        return (o = N), (s = b), p();
      }
    );
  }
  function Ik() {
    return Ck()(zi, zi);
  }
  function Lk(e, n, r, o) {
    var s = ML(e, n, r),
      l;
    switch (((o = Ss(o ?? ',f')), o.type)) {
      case 's': {
        var c = Math.max(Math.abs(e), Math.abs(n));
        return o.precision == null && !isNaN((l = Tk(s, c))) && (o.precision = l), Fm(o, c);
      }
      case '':
      case 'e':
      case 'g':
      case 'p':
      case 'r': {
        o.precision == null &&
          !isNaN((l = Nk(s, Math.max(Math.abs(e), Math.abs(n))))) &&
          (o.precision = l - (o.type === 'e'));
        break;
      }
      case 'f':
      case '%': {
        o.precision == null && !isNaN((l = gk(s))) && (o.precision = l - (o.type === '%') * 2);
        break;
      }
    }
    return Hm(o);
  }
  function wk(e) {
    var n = e.domain;
    return (
      (e.ticks = function (r) {
        var o = n();
        return VL(o[0], o[o.length - 1], r ?? 10);
      }),
      (e.tickFormat = function (r, o) {
        var s = n();
        return Lk(s[0], s[s.length - 1], r ?? 10, o);
      }),
      (e.nice = function (r) {
        r == null && (r = 10);
        var o = n(),
          s = 0,
          l = o.length - 1,
          c = o[s],
          f = o[l],
          d,
          m,
          p = 10;
        for (f < c && ((m = c), (c = f), (f = m), (m = s), (s = l), (l = m)); p-- > 0; ) {
          if (((m = Gh(c, f, r)), m === d)) return (o[s] = c), (o[l] = f), n(o);
          if (m > 0) (c = Math.floor(c / m) * m), (f = Math.ceil(f / m) * m);
          else if (m < 0) (c = Math.ceil(c * m) / m), (f = Math.floor(f * m) / m);
          else break;
          d = m;
        }
        return e;
      }),
      e
    );
  }
  function zm() {
    var e = Ik();
    return (
      (e.copy = function () {
        return Rk(e, zm());
      }),
      Ak.apply(e, arguments),
      wk(e)
    );
  }
  const xs = e => () => e;
  function vk(e, { sourceEvent: n, target: r, transform: o, dispatch: s }) {
    Object.defineProperties(this, {
      type: { value: e, enumerable: !0, configurable: !0 },
      sourceEvent: { value: n, enumerable: !0, configurable: !0 },
      target: { value: r, enumerable: !0, configurable: !0 },
      transform: { value: o, enumerable: !0, configurable: !0 },
      _: { value: s },
    });
  }
  function fr(e, n, r) {
    (this.k = e), (this.x = n), (this.y = r);
  }
  fr.prototype = {
    constructor: fr,
    scale: function (e) {
      return e === 1 ? this : new fr(this.k * e, this.x, this.y);
    },
    translate: function (e, n) {
      return (e === 0) & (n === 0) ? this : new fr(this.k, this.x + this.k * e, this.y + this.k * n);
    },
    apply: function (e) {
      return [e[0] * this.k + this.x, e[1] * this.k + this.y];
    },
    applyX: function (e) {
      return e * this.k + this.x;
    },
    applyY: function (e) {
      return e * this.k + this.y;
    },
    invert: function (e) {
      return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
    },
    invertX: function (e) {
      return (e - this.x) / this.k;
    },
    invertY: function (e) {
      return (e - this.y) / this.k;
    },
    rescaleX: function (e) {
      return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
    },
    rescaleY: function (e) {
      return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
    },
    toString: function () {
      return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
    },
  };
  var Os = new fr(1, 0, 0);
  fr.prototype;
  function Tf(e) {
    e.stopImmediatePropagation();
  }
  function jo(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function kk(e) {
    return (!e.ctrlKey || e.type === 'wheel') && !e.button;
  }
  function Dk() {
    var e = this;
    return e instanceof SVGElement
      ? ((e = e.ownerSVGElement || e),
        e.hasAttribute('viewBox')
          ? ((e = e.viewBox.baseVal),
            [
              [e.x, e.y],
              [e.x + e.width, e.y + e.height],
            ])
          : [
              [0, 0],
              [e.width.baseVal.value, e.height.baseVal.value],
            ])
      : [
          [0, 0],
          [e.clientWidth, e.clientHeight],
        ];
  }
  function Xm() {
    return this.__zoom || Os;
  }
  function Vk(e) {
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * (e.ctrlKey ? 10 : 1);
  }
  function Mk() {
    return navigator.maxTouchPoints || 'ontouchstart' in this;
  }
  function Bk(e, n, r) {
    var o = e.invertX(n[0][0]) - r[0][0],
      s = e.invertX(n[1][0]) - r[1][0],
      l = e.invertY(n[0][1]) - r[0][1],
      c = e.invertY(n[1][1]) - r[1][1];
    return e.translate(
      s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s),
      c > l ? (l + c) / 2 : Math.min(0, l) || Math.max(0, c),
    );
  }
  function Pk() {
    var e = kk,
      n = Dk,
      r = Bk,
      o = Vk,
      s = Mk,
      l = [0, 1 / 0],
      c = [
        [-1 / 0, -1 / 0],
        [1 / 0, 1 / 0],
      ],
      f = 250,
      d = J2,
      m = Yc('start', 'zoom', 'end'),
      p,
      T,
      N,
      b = 500,
      R = 150,
      C = 0,
      B = 10;
    function S(U) {
      U.property('__zoom', Xm)
        .on('wheel.zoom', L, { passive: !1 })
        .on('mousedown.zoom', y)
        .on('dblclick.zoom', K)
        .filter(s)
        .on('touchstart.zoom', M)
        .on('touchmove.zoom', H)
        .on('touchend.zoom touchcancel.zoom', q)
        .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
    }
    (S.transform = function (U, ee, I, z) {
      var Q = U.selection ? U.selection() : U;
      Q.property('__zoom', Xm),
        U !== Q
          ? k(U, ee, I, z)
          : Q.interrupt().each(function () {
              O(this, arguments)
                .event(z)
                .start()
                .zoom(null, typeof ee == 'function' ? ee.apply(this, arguments) : ee)
                .end();
            });
    }),
      (S.scaleBy = function (U, ee, I, z) {
        S.scaleTo(
          U,
          function () {
            var Q = this.__zoom.k,
              oe = typeof ee == 'function' ? ee.apply(this, arguments) : ee;
            return Q * oe;
          },
          I,
          z,
        );
      }),
      (S.scaleTo = function (U, ee, I, z) {
        S.transform(
          U,
          function () {
            var Q = n.apply(this, arguments),
              oe = this.__zoom,
              fe = I == null ? _(Q) : typeof I == 'function' ? I.apply(this, arguments) : I,
              ne = oe.invert(fe),
              te = typeof ee == 'function' ? ee.apply(this, arguments) : ee;
            return r(Y(V(oe, te), fe, ne), Q, c);
          },
          I,
          z,
        );
      }),
      (S.translateBy = function (U, ee, I, z) {
        S.transform(
          U,
          function () {
            return r(
              this.__zoom.translate(
                typeof ee == 'function' ? ee.apply(this, arguments) : ee,
                typeof I == 'function' ? I.apply(this, arguments) : I,
              ),
              n.apply(this, arguments),
              c,
            );
          },
          null,
          z,
        );
      }),
      (S.translateTo = function (U, ee, I, z, Q) {
        S.transform(
          U,
          function () {
            var oe = n.apply(this, arguments),
              fe = this.__zoom,
              ne = z == null ? _(oe) : typeof z == 'function' ? z.apply(this, arguments) : z;
            return r(
              Os.translate(ne[0], ne[1])
                .scale(fe.k)
                .translate(
                  typeof ee == 'function' ? -ee.apply(this, arguments) : -ee,
                  typeof I == 'function' ? -I.apply(this, arguments) : -I,
                ),
              oe,
              c,
            );
          },
          z,
          Q,
        );
      });
    function V(U, ee) {
      return (ee = Math.max(l[0], Math.min(l[1], ee))), ee === U.k ? U : new fr(ee, U.x, U.y);
    }
    function Y(U, ee, I) {
      var z = ee[0] - I[0] * U.k,
        Q = ee[1] - I[1] * U.k;
      return z === U.x && Q === U.y ? U : new fr(U.k, z, Q);
    }
    function _(U) {
      return [(+U[0][0] + +U[1][0]) / 2, (+U[0][1] + +U[1][1]) / 2];
    }
    function k(U, ee, I, z) {
      U.on('start.zoom', function () {
        O(this, arguments).event(z).start();
      })
        .on('interrupt.zoom end.zoom', function () {
          O(this, arguments).event(z).end();
        })
        .tween('zoom', function () {
          var Q = this,
            oe = arguments,
            fe = O(Q, oe).event(z),
            ne = n.apply(Q, oe),
            te = I == null ? _(ne) : typeof I == 'function' ? I.apply(Q, oe) : I,
            de = Math.max(ne[1][0] - ne[0][0], ne[1][1] - ne[0][1]),
            j = Q.__zoom,
            X = typeof ee == 'function' ? ee.apply(Q, oe) : ee,
            Z = d(j.invert(te).concat(de / j.k), X.invert(te).concat(de / X.k));
          return function (pe) {
            if (pe === 1) pe = X;
            else {
              var le = Z(pe),
                me = de / le[2];
              pe = new fr(me, te[0] - le[0] * me, te[1] - le[1] * me);
            }
            fe.zoom(null, pe);
          };
        });
    }
    function O(U, ee, I) {
      return (!I && U.__zooming) || new D(U, ee);
    }
    function D(U, ee) {
      (this.that = U),
        (this.args = ee),
        (this.active = 0),
        (this.sourceEvent = null),
        (this.extent = n.apply(U, ee)),
        (this.taps = 0);
    }
    D.prototype = {
      event: function (U) {
        return U && (this.sourceEvent = U), this;
      },
      start: function () {
        return ++this.active === 1 && ((this.that.__zooming = this), this.emit('start')), this;
      },
      zoom: function (U, ee) {
        return (
          this.mouse && U !== 'mouse' && (this.mouse[1] = ee.invert(this.mouse[0])),
          this.touch0 && U !== 'touch' && (this.touch0[1] = ee.invert(this.touch0[0])),
          this.touch1 && U !== 'touch' && (this.touch1[1] = ee.invert(this.touch1[0])),
          (this.that.__zoom = ee),
          this.emit('zoom'),
          this
        );
      },
      end: function () {
        return --this.active === 0 && (delete this.that.__zooming, this.emit('end')), this;
      },
      emit: function (U) {
        var ee = qn(this.that).datum();
        m.call(
          U,
          this.that,
          new vk(U, { sourceEvent: this.sourceEvent, target: S, type: U, transform: this.that.__zoom, dispatch: m }),
          ee,
        );
      },
    };
    function L(U, ...ee) {
      if (!e.apply(this, arguments)) return;
      var I = O(this, ee).event(U),
        z = this.__zoom,
        Q = Math.max(l[0], Math.min(l[1], z.k * Math.pow(2, o.apply(this, arguments)))),
        oe = oi(U);
      if (I.wheel)
        (I.mouse[0][0] !== oe[0] || I.mouse[0][1] !== oe[1]) && (I.mouse[1] = z.invert((I.mouse[0] = oe))),
          clearTimeout(I.wheel);
      else {
        if (z.k === Q) return;
        (I.mouse = [oe, z.invert(oe)]), As(this), I.start();
      }
      jo(U), (I.wheel = setTimeout(fe, R)), I.zoom('mouse', r(Y(V(z, Q), I.mouse[0], I.mouse[1]), I.extent, c));
      function fe() {
        (I.wheel = null), I.end();
      }
    }
    function y(U, ...ee) {
      if (N || !e.apply(this, arguments)) return;
      var I = U.currentTarget,
        z = O(this, ee, !0).event(U),
        Q = qn(U.view).on('mousemove.zoom', te, !0).on('mouseup.zoom', de, !0),
        oe = oi(U, I),
        fe = U.clientX,
        ne = U.clientY;
      T2(U.view), Tf(U), (z.mouse = [oe, this.__zoom.invert(oe)]), As(this), z.start();
      function te(j) {
        if ((jo(j), !z.moved)) {
          var X = j.clientX - fe,
            Z = j.clientY - ne;
          z.moved = X * X + Z * Z > C;
        }
        z.event(j).zoom('mouse', r(Y(z.that.__zoom, (z.mouse[0] = oi(j, I)), z.mouse[1]), z.extent, c));
      }
      function de(j) {
        Q.on('mousemove.zoom mouseup.zoom', null), N2(j.view, z.moved), jo(j), z.event(j).end();
      }
    }
    function K(U, ...ee) {
      if (e.apply(this, arguments)) {
        var I = this.__zoom,
          z = oi(U.changedTouches ? U.changedTouches[0] : U, this),
          Q = I.invert(z),
          oe = I.k * (U.shiftKey ? 0.5 : 2),
          fe = r(Y(V(I, oe), z, Q), n.apply(this, ee), c);
        jo(U), f > 0 ? qn(this).transition().duration(f).call(k, fe, z, U) : qn(this).call(S.transform, fe, z, U);
      }
    }
    function M(U, ...ee) {
      if (e.apply(this, arguments)) {
        var I = U.touches,
          z = I.length,
          Q = O(this, ee, U.changedTouches.length === z).event(U),
          oe,
          fe,
          ne,
          te;
        for (Tf(U), fe = 0; fe < z; ++fe)
          (ne = I[fe]),
            (te = oi(ne, this)),
            (te = [te, this.__zoom.invert(te), ne.identifier]),
            Q.touch0
              ? !Q.touch1 && Q.touch0[2] !== te[2] && ((Q.touch1 = te), (Q.taps = 0))
              : ((Q.touch0 = te), (oe = !0), (Q.taps = 1 + !!p));
        p && (p = clearTimeout(p)),
          oe &&
            (Q.taps < 2 &&
              ((T = te[0]),
              (p = setTimeout(function () {
                p = null;
              }, b))),
            As(this),
            Q.start());
      }
    }
    function H(U, ...ee) {
      if (this.__zooming) {
        var I = O(this, ee).event(U),
          z = U.changedTouches,
          Q = z.length,
          oe,
          fe,
          ne,
          te;
        for (jo(U), oe = 0; oe < Q; ++oe)
          (fe = z[oe]),
            (ne = oi(fe, this)),
            I.touch0 && I.touch0[2] === fe.identifier
              ? (I.touch0[0] = ne)
              : I.touch1 && I.touch1[2] === fe.identifier && (I.touch1[0] = ne);
        if (((fe = I.that.__zoom), I.touch1)) {
          var de = I.touch0[0],
            j = I.touch0[1],
            X = I.touch1[0],
            Z = I.touch1[1],
            pe = (pe = X[0] - de[0]) * pe + (pe = X[1] - de[1]) * pe,
            le = (le = Z[0] - j[0]) * le + (le = Z[1] - j[1]) * le;
          (fe = V(fe, Math.sqrt(pe / le))),
            (ne = [(de[0] + X[0]) / 2, (de[1] + X[1]) / 2]),
            (te = [(j[0] + Z[0]) / 2, (j[1] + Z[1]) / 2]);
        } else if (I.touch0) (ne = I.touch0[0]), (te = I.touch0[1]);
        else return;
        I.zoom('touch', r(Y(fe, ne, te), I.extent, c));
      }
    }
    function q(U, ...ee) {
      if (this.__zooming) {
        var I = O(this, ee).event(U),
          z = U.changedTouches,
          Q = z.length,
          oe,
          fe;
        for (
          Tf(U),
            N && clearTimeout(N),
            N = setTimeout(function () {
              N = null;
            }, b),
            oe = 0;
          oe < Q;
          ++oe
        )
          (fe = z[oe]),
            I.touch0 && I.touch0[2] === fe.identifier
              ? delete I.touch0
              : I.touch1 && I.touch1[2] === fe.identifier && delete I.touch1;
        if ((I.touch1 && !I.touch0 && ((I.touch0 = I.touch1), delete I.touch1), I.touch0))
          I.touch0[1] = this.__zoom.invert(I.touch0[0]);
        else if ((I.end(), I.taps === 2 && ((fe = oi(fe, this)), Math.hypot(T[0] - fe[0], T[1] - fe[1]) < B))) {
          var ne = qn(this).on('dblclick.zoom');
          ne && ne.apply(this, arguments);
        }
      }
    }
    return (
      (S.wheelDelta = function (U) {
        return arguments.length ? ((o = typeof U == 'function' ? U : xs(+U)), S) : o;
      }),
      (S.filter = function (U) {
        return arguments.length ? ((e = typeof U == 'function' ? U : xs(!!U)), S) : e;
      }),
      (S.touchable = function (U) {
        return arguments.length ? ((s = typeof U == 'function' ? U : xs(!!U)), S) : s;
      }),
      (S.extent = function (U) {
        return arguments.length
          ? ((n =
              typeof U == 'function'
                ? U
                : xs([
                    [+U[0][0], +U[0][1]],
                    [+U[1][0], +U[1][1]],
                  ])),
            S)
          : n;
      }),
      (S.scaleExtent = function (U) {
        return arguments.length ? ((l[0] = +U[0]), (l[1] = +U[1]), S) : [l[0], l[1]];
      }),
      (S.translateExtent = function (U) {
        return arguments.length
          ? ((c[0][0] = +U[0][0]), (c[1][0] = +U[1][0]), (c[0][1] = +U[0][1]), (c[1][1] = +U[1][1]), S)
          : [
              [c[0][0], c[0][1]],
              [c[1][0], c[1][1]],
            ];
      }),
      (S.constrain = function (U) {
        return arguments.length ? ((r = U), S) : r;
      }),
      (S.duration = function (U) {
        return arguments.length ? ((f = +U), S) : f;
      }),
      (S.interpolate = function (U) {
        return arguments.length ? ((d = U), S) : d;
      }),
      (S.on = function () {
        var U = m.on.apply(m, arguments);
        return U === m ? S : U;
      }),
      (S.clickDistance = function (U) {
        return arguments.length ? ((C = (U = +U) * U), S) : Math.sqrt(C);
      }),
      (S.tapDistance = function (U) {
        return arguments.length ? ((B = +U), S) : B;
      }),
      S
    );
  }
  function Uk(e) {
    var n = 0,
      r = e.children,
      o = r && r.length;
    if (!o) n = 1;
    else for (; --o >= 0; ) n += r[o].value;
    e.value = n;
  }
  function $k() {
    return this.eachAfter(Uk);
  }
  function Hk(e) {
    var n = this,
      r,
      o = [n],
      s,
      l,
      c;
    do
      for (r = o.reverse(), o = []; (n = r.pop()); )
        if ((e(n), (s = n.children), s)) for (l = 0, c = s.length; l < c; ++l) o.push(s[l]);
    while (o.length);
    return this;
  }
  function Fk(e) {
    for (var n = this, r = [n], o, s; (n = r.pop()); )
      if ((e(n), (o = n.children), o)) for (s = o.length - 1; s >= 0; --s) r.push(o[s]);
    return this;
  }
  function Wk(e) {
    for (var n = this, r = [n], o = [], s, l, c; (n = r.pop()); )
      if ((o.push(n), (s = n.children), s)) for (l = 0, c = s.length; l < c; ++l) r.push(s[l]);
    for (; (n = o.pop()); ) e(n);
    return this;
  }
  function zk(e) {
    return this.eachAfter(function (n) {
      for (var r = +e(n.data) || 0, o = n.children, s = o && o.length; --s >= 0; ) r += o[s].value;
      n.value = r;
    });
  }
  function Xk(e) {
    return this.eachBefore(function (n) {
      n.children && n.children.sort(e);
    });
  }
  function Gk(e) {
    for (var n = this, r = Yk(n, e), o = [n]; n !== r; ) (n = n.parent), o.push(n);
    for (var s = o.length; e !== r; ) o.splice(s, 0, e), (e = e.parent);
    return o;
  }
  function Yk(e, n) {
    if (e === n) return e;
    var r = e.ancestors(),
      o = n.ancestors(),
      s = null;
    for (e = r.pop(), n = o.pop(); e === n; ) (s = e), (e = r.pop()), (n = o.pop());
    return s;
  }
  function Kk() {
    for (var e = this, n = [e]; (e = e.parent); ) n.push(e);
    return n;
  }
  function jk() {
    var e = [];
    return (
      this.each(function (n) {
        e.push(n);
      }),
      e
    );
  }
  function qk() {
    var e = [];
    return (
      this.eachBefore(function (n) {
        n.children || e.push(n);
      }),
      e
    );
  }
  function Jk() {
    var e = this,
      n = [];
    return (
      e.each(function (r) {
        r !== e && n.push({ source: r.parent, target: r });
      }),
      n
    );
  }
  function Nf(e, n) {
    var r = new Rs(e),
      o = +e.value && (r.value = e.value),
      s,
      l = [r],
      c,
      f,
      d,
      m;
    for (n == null && (n = Zk); (s = l.pop()); )
      if ((o && (s.value = +s.data.value), (f = n(s.data)) && (m = f.length)))
        for (s.children = new Array(m), d = m - 1; d >= 0; --d)
          l.push((c = s.children[d] = new Rs(f[d]))), (c.parent = s), (c.depth = s.depth + 1);
    return r.eachBefore(tD);
  }
  function Qk() {
    return Nf(this).eachBefore(eD);
  }
  function Zk(e) {
    return e.children;
  }
  function eD(e) {
    e.data = e.data.data;
  }
  function tD(e) {
    var n = 0;
    do e.height = n;
    while ((e = e.parent) && e.height < ++n);
  }
  function Rs(e) {
    (this.data = e), (this.depth = this.height = 0), (this.parent = null);
  }
  Rs.prototype = Nf.prototype = {
    constructor: Rs,
    count: $k,
    each: Hk,
    eachAfter: Wk,
    eachBefore: Fk,
    sum: zk,
    sort: Xk,
    path: Gk,
    ancestors: Kk,
    descendants: jk,
    leaves: qk,
    links: Jk,
    copy: Qk,
  };
  const nD = {
      name: 'd3-flextree',
      version: '2.1.2',
      main: 'build/d3-flextree.js',
      module: 'index',
      'jsnext:main': 'index',
      author: { name: 'Chris Maloney', url: 'http://chrismaloney.org' },
      description: 'Flexible tree layout algorithm that allows for variable node sizes.',
      keywords: [
        'd3',
        'd3-module',
        'layout',
        'tree',
        'hierarchy',
        'd3-hierarchy',
        'plugin',
        'd3-plugin',
        'infovis',
        'visualization',
        '2d',
      ],
      homepage: 'https://github.com/klortho/d3-flextree',
      license: 'WTFPL',
      repository: { type: 'git', url: 'https://github.com/klortho/d3-flextree.git' },
      scripts: {
        clean: 'rm -rf build demo test',
        'build:demo': 'rollup -c --environment BUILD:demo',
        'build:dev': 'rollup -c --environment BUILD:dev',
        'build:prod': 'rollup -c --environment BUILD:prod',
        'build:test': 'rollup -c --environment BUILD:test',
        build: 'rollup -c',
        lint: 'eslint index.js src',
        'test:main': 'node test/bundle.js',
        'test:browser': 'node test/browser-tests.js',
        test: 'npm-run-all test:*',
        prepare: 'npm-run-all clean build lint test',
      },
      dependencies: { 'd3-hierarchy': '^1.1.5' },
      devDependencies: {
        'babel-plugin-external-helpers': '^6.22.0',
        'babel-preset-es2015-rollup': '^3.0.0',
        d3: '^4.13.0',
        'd3-selection-multi': '^1.0.1',
        eslint: '^4.19.1',
        jsdom: '^11.6.2',
        'npm-run-all': '^4.1.2',
        rollup: '^0.55.3',
        'rollup-plugin-babel': '^2.7.1',
        'rollup-plugin-commonjs': '^8.0.2',
        'rollup-plugin-copy': '^0.2.3',
        'rollup-plugin-json': '^2.3.0',
        'rollup-plugin-node-resolve': '^3.0.2',
        'rollup-plugin-uglify': '^3.0.0',
        'uglify-es': '^3.3.9',
      },
    },
    { version: rD } = nD,
    iD = Object.freeze({ children: e => e.children, nodeSize: e => e.data.size, spacing: 0 });
  function Gm(e) {
    const n = Object.assign({}, iD, e);
    function r(f) {
      const d = n[f];
      return typeof d == 'function' ? d : () => d;
    }
    function o(f) {
      const d = c(l(), f, m => m.children);
      return d.update(), d.data;
    }
    function s() {
      const f = r('nodeSize'),
        d = r('spacing');
      return class yg extends Nf.prototype.constructor {
        constructor(p) {
          super(p);
        }
        copy() {
          const p = c(this.constructor, this, T => T.children);
          return p.each(T => (T.data = T.data.data)), p;
        }
        get size() {
          return f(this);
        }
        spacing(p) {
          return d(this, p);
        }
        get nodes() {
          return this.descendants();
        }
        get xSize() {
          return this.size[0];
        }
        get ySize() {
          return this.size[1];
        }
        get top() {
          return this.y;
        }
        get bottom() {
          return this.y + this.ySize;
        }
        get left() {
          return this.x - this.xSize / 2;
        }
        get right() {
          return this.x + this.xSize / 2;
        }
        get root() {
          const p = this.ancestors();
          return p[p.length - 1];
        }
        get numChildren() {
          return this.hasChildren ? this.children.length : 0;
        }
        get hasChildren() {
          return !this.noChildren;
        }
        get noChildren() {
          return this.children === null;
        }
        get firstChild() {
          return this.hasChildren ? this.children[0] : null;
        }
        get lastChild() {
          return this.hasChildren ? this.children[this.numChildren - 1] : null;
        }
        get extents() {
          return (this.children || []).reduce((p, T) => yg.maxExtents(p, T.extents), this.nodeExtents);
        }
        get nodeExtents() {
          return { top: this.top, bottom: this.bottom, left: this.left, right: this.right };
        }
        static maxExtents(p, T) {
          return {
            top: Math.min(p.top, T.top),
            bottom: Math.max(p.bottom, T.bottom),
            left: Math.min(p.left, T.left),
            right: Math.max(p.right, T.right),
          };
        }
      };
    }
    function l() {
      const f = s(),
        d = r('nodeSize'),
        m = r('spacing');
      return class extends f {
        constructor(p) {
          super(p),
            Object.assign(this, {
              x: 0,
              y: 0,
              relX: 0,
              prelim: 0,
              shift: 0,
              change: 0,
              lExt: this,
              lExtRelX: 0,
              lThr: null,
              rExt: this,
              rExtRelX: 0,
              rThr: null,
            });
        }
        get size() {
          return d(this.data);
        }
        spacing(p) {
          return m(this.data, p.data);
        }
        get x() {
          return this.data.x;
        }
        set x(p) {
          this.data.x = p;
        }
        get y() {
          return this.data.y;
        }
        set y(p) {
          this.data.y = p;
        }
        update() {
          return Ym(this), Km(this), this;
        }
      };
    }
    function c(f, d, m) {
      const p = (T, N) => {
        const b = new f(T);
        Object.assign(b, { parent: N, depth: N === null ? 0 : N.depth + 1, height: 0, length: 1 });
        const R = m(T) || [];
        return (
          (b.children = R.length === 0 ? null : R.map(C => p(C, b))),
          b.children &&
            Object.assign(
              b,
              b.children.reduce(
                (C, B) => ({ height: Math.max(C.height, B.height + 1), length: C.length + B.length }),
                b,
              ),
            ),
          b
        );
      };
      return p(d, null);
    }
    return (
      Object.assign(o, {
        nodeSize(f) {
          return arguments.length ? ((n.nodeSize = f), o) : n.nodeSize;
        },
        spacing(f) {
          return arguments.length ? ((n.spacing = f), o) : n.spacing;
        },
        children(f) {
          return arguments.length ? ((n.children = f), o) : n.children;
        },
        hierarchy(f, d) {
          const m = typeof d > 'u' ? n.children : d;
          return c(s(), f, m);
        },
        dump(f) {
          const d = r('nodeSize'),
            m = p => T => {
              const N = p + '  ',
                b = p + '    ',
                { x: R, y: C } = T,
                B = d(T),
                S = T.children || [],
                V = S.length === 0 ? ' ' : `,${N}children: [${b}${S.map(m(b)).join(b)}${N}],${p}`;
              return `{ size: [${B.join(', ')}],${N}x: ${R}, y: ${C}${V}},`;
            };
          return m(`
`)(f);
        },
      }),
      o
    );
  }
  Gm.version = rD;
  const Ym = (e, n = 0) => (
      (e.y = n),
      (e.children || []).reduce(
        (r, o) => {
          const [s, l] = r;
          Ym(o, e.y + e.ySize);
          const c = (s === 0 ? o.lExt : o.rExt).bottom;
          s !== 0 && aD(e, s, l);
          const f = hD(c, s, l);
          return [s + 1, f];
        },
        [0, null],
      ),
      oD(e),
      pD(e),
      e
    ),
    Km = (e, n, r) => {
      typeof n > 'u' && ((n = -e.relX - e.prelim), (r = 0));
      const o = n + e.relX;
      return (
        (e.relX = o + e.prelim - r),
        (e.prelim = 0),
        (e.x = r + e.relX),
        (e.children || []).forEach(s => Km(s, o, e.x)),
        e
      );
    },
    oD = e => {
      (e.children || []).reduce(
        (n, r) => {
          const [o, s] = n,
            l = o + r.shift,
            c = s + l + r.change;
          return (r.relX += c), [l, c];
        },
        [0, 0],
      );
    },
    aD = (e, n, r) => {
      const o = e.children[n - 1],
        s = e.children[n];
      let l = o,
        c = o.relX,
        f = s,
        d = s.relX,
        m = !0;
      for (; l && f; ) {
        l.bottom > r.lowY && (r = r.next);
        const p = c + l.prelim - (d + f.prelim) + l.xSize / 2 + f.xSize / 2 + l.spacing(f);
        (p > 0 || (p < 0 && m)) && ((d += p), sD(s, p), lD(e, n, r.index, p)), (m = !1);
        const T = l.bottom,
          N = f.bottom;
        T <= N && ((l = fD(l)), l && (c += l.relX)), T >= N && ((f = cD(f)), f && (d += f.relX));
      }
      !l && f ? uD(e, n, f, d) : l && !f && dD(e, n, l, c);
    },
    sD = (e, n) => {
      (e.relX += n), (e.lExtRelX += n), (e.rExtRelX += n);
    },
    lD = (e, n, r, o) => {
      const s = e.children[n],
        l = n - r;
      if (l > 1) {
        const c = o / l;
        (e.children[r + 1].shift += c), (s.shift -= c), (s.change -= o - c);
      }
    },
    cD = e => (e.hasChildren ? e.firstChild : e.lThr),
    fD = e => (e.hasChildren ? e.lastChild : e.rThr),
    uD = (e, n, r, o) => {
      const s = e.firstChild,
        l = s.lExt,
        c = e.children[n];
      l.lThr = r;
      const f = o - r.relX - s.lExtRelX;
      (l.relX += f), (l.prelim -= f), (s.lExt = c.lExt), (s.lExtRelX = c.lExtRelX);
    },
    dD = (e, n, r, o) => {
      const s = e.children[n],
        l = s.rExt,
        c = e.children[n - 1];
      l.rThr = r;
      const f = o - r.relX - s.rExtRelX;
      (l.relX += f), (l.prelim -= f), (s.rExt = c.rExt), (s.rExtRelX = c.rExtRelX);
    },
    pD = e => {
      if (e.hasChildren) {
        const n = e.firstChild,
          r = e.lastChild,
          o = (n.prelim + n.relX - n.xSize / 2 + r.relX + r.prelim + r.xSize / 2) / 2;
        Object.assign(e, { prelim: o, lExt: n.lExt, lExtRelX: n.lExtRelX, rExt: r.rExt, rExtRelX: r.rExtRelX });
      }
    },
    hD = (e, n, r) => {
      for (; r !== null && e >= r.lowY; ) r = r.next;
      return { lowY: e, index: n, next: r };
    },
    mD = { key: 0, class: 'flex-grow-1 d-flex justify-content-center' },
    ED = { class: 'card align-self-center border-danger w-50' },
    _D = { class: 'card-body' },
    gD = t.createElementVNode('h5', { class: 'card-title text-danger' }, "Couldn't parse plan", -1),
    TD = t.createElementVNode(
      'h6',
      { class: 'card-subtitle mb-2 text-body-secondary' },
      `
          An error occured while parsing the plan
        `,
      -1,
    ),
    ND = { class: 'overflow-hidden d-flex w-100 h-100 position-relative mb-3' },
    AD = { class: 'overflow-auto flex-grow-1' },
    yD = { class: 'small p-2 mb-0', style: { 'max-height': '200px' } },
    SD = ['innerHTML'],
    bD = t.createElementVNode(
      'p',
      { class: 'card-text text-body-dark' },
      `
          The plan you submited couldn't be parsed. This may be a bug. You can
          help us fix it by opening a new issue.
        `,
      -1,
    ),
    xD = { class: 'd-flex align-items-center' },
    OD = { class: 'text-secondary' },
    RD = t.createElementVNode(
      'a',
      {
        href: 'https://github.com/dalibo/pev2/issues/new?template=parsing_error.md&labels=parsing&title=Failed+to+parse+plan',
        target: '_blank',
        class: 'btn btn-primary ms-auto',
      },
      'Open an issue on Github',
      -1,
    ),
    CD = { class: 'd-flex align-items-center' },
    ID = { class: 'nav nav-pills' },
    LD = { class: 'nav-item p-1' },
    wD = { class: 'nav-item p-1' },
    vD = { key: 0, class: 'badge bg-info', style: { 'font-size': '0.6em' } },
    kD = { class: 'nav-item p-1' },
    DD = { class: 'nav-item p-1' },
    VD = { class: 'nav-item p-1' },
    MD = { class: 'ms-auto me-2 small' },
    BD = { href: 'https://github.com/dalibo/pev2', target: '_blank' },
    PD = { class: 'tab-content flex-grow-1 d-flex overflow-hidden' },
    UD = { class: 'd-flex flex-column flex-grow-1 overflow-hidden' },
    $D = { class: 'flex-grow-1 d-flex overflow-hidden' },
    HD = { class: 'flex-grow-1 overflow-hidden' },
    FD = { key: 0, class: 'position-absolute m-1 p-1 bottom-0 end-0 rounded bg-white d-flex' },
    WD = { class: 'btn-group btn-group-xs' },
    zD = ['disabled'],
    XD = ['disabled'],
    GD = { width: '100%', height: '100%' },
    YD = ['transform'],
    KD = ['d', 'stroke-width'],
    jD = ['d', 'stroke-width'],
    qD = ['x', 'y', 'width'],
    JD = ['x', 'y', 'width', 'height'],
    QD = ['d', 'stroke-width'],
    ZD = ['x', 'y', 'width'],
    eV = { class: 'overflow-hidden d-flex w-100 h-100 flex-column' },
    tV = { class: 'overflow-hidden d-flex w-100 h-100' },
    nV = { class: 'overflow-auto flex-grow-1' },
    rV = { class: 'small p-2 mb-0' },
    iV = ['innerHTML'],
    oV = { class: 'overflow-hidden d-flex w-100 h-100' },
    aV = { class: 'overflow-auto flex-grow-1' },
    sV = { class: 'small p-2 mb-0' },
    lV = ['innerHTML'],
    cV = t.defineComponent({
      __name: 'Plan',
      props: { planSource: null, planQuery: null },
      setup(e) {
        const n = e,
          r = '1.12.1',
          o = t.ref(null),
          s = t.ref(''),
          l = t.ref(''),
          c = t.ref(!1),
          f = t.ref(),
          d = t.ref();
        let m = t.reactive({});
        const p = t.computed(() => f.value && f.value.content.Plan),
          T = t.ref(NaN),
          N = t.ref(void 0),
          b = t.ref(NaN),
          R = localStorage.getItem('gridIsNotNew'),
          C = t.reactive({ showHighlightBar: !1, showPlanStats: !0, highlightType: xt.NONE, diagramWidth: 20 }),
          B = new zh(),
          S = 40,
          V = t.ref(''),
          Y = t.ref(1),
          _ = t.computed(() =>
            zm()
              .domain([0, m.maxRows])
              .range([1, S / 1.5]),
          ),
          k = 0.2,
          O = Pk()
            .scaleExtent([k, 3])
            .on('zoom', function (j) {
              (V.value = j.transform), (Y.value = j.transform.k);
            }),
          D = t.ref(null),
          L = t.ref([]),
          y = t.ref([]),
          K = Gm({
            nodeSize: j => (j.data.size ? [j.data.size[0], j.data.size[1] + S] : [0, 0]),
            spacing: (j, X) => Math.pow(j.path(X).length, 1.5),
          }),
          M = t.ref(K.hierarchy({}));
        t.onBeforeMount(() => {
          var pe;
          const j = localStorage.getItem('viewOptions');
          j && $.assignIn(C, JSON.parse(j));
          let X;
          try {
            (X = B.fromSource(n.planSource)), (c.value = !0), fe('plan');
          } catch {
            (c.value = !1), (f.value = void 0);
            return;
          }
          (l.value = X['Query Text'] || n.planQuery), (f.value = B.createPlan('', X, l.value));
          const Z = f.value.content;
          (m.executionTime = Z['Execution Time'] || Z['Total Runtime'] || NaN),
            (m.planningTime = Z['Planning Time'] || NaN),
            (m.maxRows = Z.maxRows || NaN),
            (m.maxCost = Z.maxCost || NaN),
            (m.maxDuration = Z.maxDuration || NaN),
            (m.maxBlocks = Z.maxBlocks || {}),
            (m.maxIo = Z.maxIo || NaN),
            (m.maxEstimateFactor = Z.maxEstimateFactor || NaN),
            (m.triggers = Z.Triggers || []),
            (m.jitTime = (Z.JIT && Z.JIT.Timing && Z.JIT.Timing.Total) || NaN),
            (m.settings = Z.Settings),
            (f.value.planStats = m),
            t.nextTick(() => {
              I();
            }),
            window.addEventListener('hashchange', I),
            p.value && (M.value = K.hierarchy(p.value, le => le.Plans)),
            (L.value = []),
            $.each((pe = f.value) == null ? void 0 : pe.ctes, le => {
              const me = K.hierarchy(le, ye => ye.Plans);
              L.value.push(me);
            }),
            H();
        });
        function H() {
          D.value = K(M.value);
          const j = ne(D.value),
            X = [j[0], j[3] + S];
          $.each(L.value, Z => {
            const pe = K(Z),
              le = ne(pe),
              me = le[1] - le[0];
            pe.each(ye => {
              (ye.x += X[0] - le[0]), (ye.y += X[1]);
            }),
              (X[0] += me + S * 2);
          }),
            (y.value = []),
            $.each(D.value.descendants(), Z => {
              if ($.has(Z.data, E.CTE_NAME)) {
                const pe = $.find(L.value, le => le.data[E.SUBPLAN_NAME] == 'CTE ' + Z.data[E.CTE_NAME]);
                pe && y.value.push({ source: Z, target: pe });
              }
            }),
            $.each(L.value, Z => {
              $.each(Z.descendants(), pe => {
                if ($.has(pe.data, E.CTE_NAME)) {
                  const le = $.find(L.value, me => me.data[E.SUBPLAN_NAME] == 'CTE ' + pe.data[E.CTE_NAME]);
                  le && y.value.push({ source: pe, target: le });
                }
              });
            });
        }
        t.onMounted(() => {
          d.value &&
            (qn(d.value.$el).call(O),
            t.nextTick(() => {
              if (D.value) {
                const j = ne(D.value),
                  X = j[0],
                  Z = j[2],
                  pe = j[1],
                  le = j[3],
                  me = d.value.$el.getBoundingClientRect();
                qn(d.value.$el)
                  .transition()
                  .call(
                    O.transform,
                    Os.translate(me.width / 2, 10)
                      .scale(Math.min(1, Math.max(k, 0.8 / Math.max((pe - X) / me.width, (le - Z) / me.height))))
                      .translate(-(X + pe) / 2, 10),
                  );
              }
            }));
        }),
          t.onBeforeUnmount(() => {
            window.removeEventListener('hashchange', I);
          }),
          t.watch(C, q);
        function q() {
          localStorage.setItem('viewOptions', JSON.stringify(C));
        }
        t.watch(T, U);
        function U(j) {
          (window.location.hash = j ? 'plan/node/' + j : ''), f.value && j && (N.value = kN(f.value, j));
        }
        const ee = t.computed(
          () =>
            function (j) {
              const X = j.source,
                Z = j.target,
                pe = Math.abs(Z.y - (X.y + X.ySize) - S),
                le = Dm();
              return (
                le.moveTo(X.x, X.y),
                le.lineTo(X.x, X.y + X.ySize - S),
                le.bezierCurveTo(X.x, X.y + X.ySize - S + pe / 2, Z.x, Z.y - pe / 2, Z.x, Z.y),
                le.toString()
              );
            },
        );
        function I() {
          const X = /#([a-zA-Z]*)(\/node\/([0-9]*))*/.exec(window.location.hash);
          if (X) {
            const Z = X[1] || 'plan';
            fe(Z);
            const pe = parseInt(X[3], 0);
            Z == 'plan' &&
              pe !== void 0 &&
              pe != T.value &&
              setTimeout(() => {
                z(pe, !0);
              }, 1);
          }
        }
        t.provide(pa, T), t.provide(ha, b), t.provide('updateNodeSize', de);
        function z(j, X) {
          (X = !!X), (T.value = j), X && Q(j);
        }
        t.provide(Fr, z), t.provide(Wr, C), t.provide(xn, f);
        function Q(j) {
          const X = d.value.$el.getBoundingClientRect(),
            Z = oe(j);
          if (!Z) return;
          let pe = -Z.x,
            le = -Z.y,
            me = Y.value;
          (pe = pe * me + X.width / 2),
            (le = le * me + X.height / 2),
            qn(d.value.$el).transition().duration(500).call(O.transform, Os.translate(pe, le).scale(me));
        }
        function oe(j) {
          const X = [D.value].concat(L.value);
          let Z;
          return (
            $.each(X, pe => ((Z = $.find(pe == null ? void 0 : pe.descendants(), le => le.data.nodeId == j)), !Z)), Z
          );
        }
        const fe = j => {
          s.value = j;
        };
        function ne(j) {
          const X = $.min($.map(j.descendants(), me => me.x - me.xSize / 2)) || 0,
            Z = $.max($.map(j.descendants(), me => me.x + me.xSize / 2)) || 0,
            pe = $.min($.map(j.descendants(), me => me.y)) || 0,
            le = $.max($.map(j.descendants(), me => me.y + me.ySize)) || 0;
          return [X, Z, pe, le];
        }
        function te(j) {
          return !!m.executionTime && !j[E.ACTUAL_LOOPS];
        }
        t.watch(
          () => {
            const j = [];
            return (
              j.concat(M.value.descendants().map(X => X.data.size)),
              $.each(L.value, X => {
                j.concat(X.descendants().map(Z => Z.data.size));
              }),
              j
            );
          },
          () => {
            H();
          },
        );
        function de(j, X) {
          j.size = [X[0] / Y.value, X[1] / Y.value];
        }
        return (j, X) =>
          c.value
            ? (t.openBlock(),
              t.createElementBlock(
                'div',
                {
                  key: 1,
                  class: 'plan-container d-flex flex-column overflow-hidden flex-grow-1 bg-light',
                  ref_key: 'rootEl',
                  ref: o,
                },
                [
                  t.createElementVNode('div', CD, [
                    t.createElementVNode('ul', ID, [
                      t.createElementVNode('li', LD, [
                        t.createElementVNode(
                          'a',
                          {
                            class: t.normalizeClass(['nav-link px-2 py-0', { active: s.value === 'plan' }]),
                            href: '#plan',
                          },
                          'Plan',
                          2,
                        ),
                      ]),
                      t.createTextVNode(),
                      t.createElementVNode('li', wD, [
                        t.createElementVNode(
                          'a',
                          {
                            class: t.normalizeClass([
                              'nav-link px-2 py-0 position-relative',
                              { active: s.value === 'grid' },
                            ]),
                            href: '#grid',
                          },
                          [
                            t.createTextVNode(`Grid
            `),
                            t.unref(R)
                              ? t.createCommentVNode('', !0)
                              : (t.openBlock(),
                                t.createElementBlock(
                                  'span',
                                  vD,
                                  `
              new
            `,
                                )),
                          ],
                          2,
                        ),
                      ]),
                      t.createTextVNode(),
                      t.createElementVNode('li', kD, [
                        t.createElementVNode(
                          'a',
                          {
                            class: t.normalizeClass(['nav-link px-2 py-0', { active: s.value === 'raw' }]),
                            href: '#raw',
                          },
                          'Raw',
                          2,
                        ),
                      ]),
                      t.createTextVNode(),
                      t.createElementVNode('li', DD, [
                        t.createElementVNode(
                          'a',
                          {
                            class: t.normalizeClass([
                              'nav-link px-2 py-0',
                              { active: s.value === 'query', disabled: !l.value },
                            ]),
                            href: '#query',
                          },
                          'Query',
                          2,
                        ),
                      ]),
                      t.createTextVNode(),
                      t.createElementVNode('li', VD, [
                        t.createElementVNode(
                          'a',
                          {
                            class: t.normalizeClass(['nav-link px-2 py-0', { active: s.value === 'stats' }]),
                            href: '#stats',
                          },
                          'Stats',
                          2,
                        ),
                      ]),
                    ]),
                    t.createTextVNode(),
                    t.createElementVNode('div', MD, [
                      t.createElementVNode('a', BD, [
                        t.createVNode(Ph),
                        t.createTextVNode(' ' + t.toDisplayString(t.unref(r)), 1),
                      ]),
                    ]),
                  ]),
                  t.createTextVNode(),
                  t.createElementVNode('div', PD, [
                    t.createElementVNode(
                      'div',
                      {
                        class: t.normalizeClass([
                          'tab-pane flex-grow-1 overflow-hidden',
                          { 'show active d-flex': s.value === 'plan' },
                        ]),
                      },
                      [
                        t.createElementVNode('div', UD, [
                          t.createVNode($h),
                          t.createTextVNode(),
                          t.createElementVNode('div', $D, [
                            t.createElementVNode('div', HD, [
                              t.createVNode(
                                t.unref(bg),
                                {
                                  class: 'default-theme',
                                  onResize: X[4] || (X[4] = Z => (C.diagramWidth = Z[0].size)),
                                },
                                {
                                  default: t.withCtx(() => [
                                    f.value
                                      ? (t.openBlock(),
                                        t.createBlock(
                                          t.unref(ku),
                                          { key: 0, size: C.diagramWidth, class: 'd-flex flex-column' },
                                          {
                                            default: t.withCtx(() => [
                                              t.createVNode(
                                                _b,
                                                {
                                                  ref: 'diagram',
                                                  class: 'd-flex flex-column flex-grow-1 overflow-hidden plan-diagram',
                                                },
                                                null,
                                                512,
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ['size'],
                                        ))
                                      : t.createCommentVNode('', !0),
                                    t.createTextVNode(),
                                    t.createVNode(
                                      t.unref(ku),
                                      { ref_key: 'planEl', ref: d, class: 'plan grab-bing position-relative' },
                                      {
                                        default: t.withCtx(() => {
                                          var Z, pe;
                                          return [
                                            f.value
                                              ? (t.openBlock(),
                                                t.createElementBlock('div', FD, [
                                                  t.createElementVNode('div', WD, [
                                                    t.createElementVNode(
                                                      'button',
                                                      {
                                                        class: t.normalizeClass([
                                                          'btn btn-outline-secondary',
                                                          { active: C.highlightType === t.unref(xt).NONE },
                                                        ]),
                                                        onClick:
                                                          X[0] || (X[0] = le => (C.highlightType = t.unref(xt).NONE)),
                                                      },
                                                      `
                        none
                      `,
                                                      2,
                                                    ),
                                                    t.createTextVNode(),
                                                    t.createElementVNode(
                                                      'button',
                                                      {
                                                        class: t.normalizeClass([
                                                          'btn btn-outline-secondary',
                                                          { active: C.highlightType === t.unref(xt).DURATION },
                                                        ]),
                                                        onClick:
                                                          X[1] ||
                                                          (X[1] = le => (C.highlightType = t.unref(xt).DURATION)),
                                                        disabled: !f.value.isAnalyze,
                                                      },
                                                      `
                        duration
                      `,
                                                      10,
                                                      zD,
                                                    ),
                                                    t.createTextVNode(),
                                                    t.createElementVNode(
                                                      'button',
                                                      {
                                                        class: t.normalizeClass([
                                                          'btn btn-outline-secondary',
                                                          { active: C.highlightType === t.unref(xt).ROWS },
                                                        ]),
                                                        onClick:
                                                          X[2] || (X[2] = le => (C.highlightType = t.unref(xt).ROWS)),
                                                        disabled:
                                                          !t.unref(p) || t.unref(p)[t.unref(E).ACTUAL_ROWS] === void 0,
                                                      },
                                                      `
                        rows
                      `,
                                                      10,
                                                      XD,
                                                    ),
                                                    t.createTextVNode(),
                                                    t.createElementVNode(
                                                      'button',
                                                      {
                                                        class: t.normalizeClass([
                                                          'btn btn-outline-secondary',
                                                          { active: C.highlightType === t.unref(xt).COST },
                                                        ]),
                                                        onClick:
                                                          X[3] || (X[3] = le => (C.highlightType = t.unref(xt).COST)),
                                                      },
                                                      `
                        cost
                      `,
                                                      2,
                                                    ),
                                                  ]),
                                                ]))
                                              : t.createCommentVNode('', !0),
                                            t.createTextVNode(),
                                            (t.openBlock(),
                                            t.createElementBlock('svg', GD, [
                                              t.createElementVNode(
                                                'g',
                                                { transform: V.value },
                                                [
                                                  (t.openBlock(!0),
                                                  t.createElementBlock(
                                                    t.Fragment,
                                                    null,
                                                    t.renderList(
                                                      y.value,
                                                      (le, me) => (
                                                        t.openBlock(),
                                                        t.createElementBlock(
                                                          'path',
                                                          {
                                                            key: `linkcte${me}`,
                                                            d: t.unref(ee)(le),
                                                            stroke: '#B3D7D7',
                                                            'stroke-width': t.unref(_)(
                                                              le.target.data[t.unref(E).ACTUAL_ROWS_REVISED],
                                                            ),
                                                            fill: 'none',
                                                          },
                                                          null,
                                                          8,
                                                          KD,
                                                        )
                                                      ),
                                                    ),
                                                    128,
                                                  )),
                                                  t.createTextVNode(),
                                                  (t.openBlock(!0),
                                                  t.createElementBlock(
                                                    t.Fragment,
                                                    null,
                                                    t.renderList(
                                                      (Z = D.value) == null ? void 0 : Z.links(),
                                                      (le, me) => (
                                                        t.openBlock(),
                                                        t.createElementBlock(
                                                          'path',
                                                          {
                                                            key: `link${me}`,
                                                            d: t.unref(ee)(le),
                                                            class: t.normalizeClass({
                                                              'never-executed': te(le.target.data),
                                                            }),
                                                            stroke: 'grey',
                                                            'stroke-width': t.unref(_)(
                                                              le.target.data[t.unref(E).ACTUAL_ROWS_REVISED],
                                                            ),
                                                            'stroke-linecap': 'square',
                                                            fill: 'none',
                                                          },
                                                          null,
                                                          10,
                                                          jD,
                                                        )
                                                      ),
                                                    ),
                                                    128,
                                                  )),
                                                  t.createTextVNode(),
                                                  (t.openBlock(!0),
                                                  t.createElementBlock(
                                                    t.Fragment,
                                                    null,
                                                    t.renderList(
                                                      (pe = D.value) == null ? void 0 : pe.descendants(),
                                                      (le, me) => (
                                                        t.openBlock(),
                                                        t.createElementBlock(
                                                          'foreignObject',
                                                          {
                                                            key: me,
                                                            x: le.x - le.xSize / 2,
                                                            y: le.y,
                                                            width: le.xSize,
                                                            height: '1',
                                                            ref_for: !0,
                                                            ref: 'root',
                                                          },
                                                          [
                                                            t.createVNode(
                                                              Uh,
                                                              {
                                                                node: le.data,
                                                                class: 'd-flex justify-content-center position-fixed',
                                                              },
                                                              null,
                                                              8,
                                                              ['node'],
                                                            ),
                                                          ],
                                                          8,
                                                          qD,
                                                        )
                                                      ),
                                                    ),
                                                    128,
                                                  )),
                                                  t.createTextVNode(),
                                                  (t.openBlock(!0),
                                                  t.createElementBlock(
                                                    t.Fragment,
                                                    null,
                                                    t.renderList(
                                                      L.value,
                                                      le => (
                                                        t.openBlock(),
                                                        t.createElementBlock('g', { key: le.data.nodeId }, [
                                                          t.createElementVNode(
                                                            'rect',
                                                            {
                                                              x: ne(le)[0] - S / 4,
                                                              y: ne(le)[2] - S / 2,
                                                              width: ne(le)[1] - ne(le)[0] + S / 2,
                                                              height: ne(le)[3] - ne(le)[2],
                                                              stroke: '#cfcfcf',
                                                              'stroke-width': '2',
                                                              fill: '#cfcfcf',
                                                              'fill-opacity': '10%',
                                                              rx: '5',
                                                              ry: '5',
                                                            },
                                                            null,
                                                            8,
                                                            JD,
                                                          ),
                                                          t.createTextVNode(),
                                                          (t.openBlock(!0),
                                                          t.createElementBlock(
                                                            t.Fragment,
                                                            null,
                                                            t.renderList(
                                                              le.links(),
                                                              (me, ye) => (
                                                                t.openBlock(),
                                                                t.createElementBlock(
                                                                  'path',
                                                                  {
                                                                    key: `link${ye}`,
                                                                    d: t.unref(ee)(me),
                                                                    stroke: 'grey',
                                                                    'stroke-width': t.unref(_)(
                                                                      me.target.data[t.unref(E).ACTUAL_ROWS_REVISED],
                                                                    ),
                                                                    'stroke-linecap': 'square',
                                                                    fill: 'none',
                                                                  },
                                                                  null,
                                                                  8,
                                                                  QD,
                                                                )
                                                              ),
                                                            ),
                                                            128,
                                                          )),
                                                          t.createTextVNode(),
                                                          (t.openBlock(!0),
                                                          t.createElementBlock(
                                                            t.Fragment,
                                                            null,
                                                            t.renderList(
                                                              le.descendants(),
                                                              (me, ye) => (
                                                                t.openBlock(),
                                                                t.createElementBlock(
                                                                  'foreignObject',
                                                                  {
                                                                    key: ye,
                                                                    x: me.x - me.xSize / 2,
                                                                    y: me.y,
                                                                    width: me.xSize,
                                                                    height: '1',
                                                                    ref_for: !0,
                                                                    ref: 'root',
                                                                  },
                                                                  [
                                                                    t.createVNode(
                                                                      Uh,
                                                                      {
                                                                        node: me.data,
                                                                        class:
                                                                          'd-flex justify-content-center position-fixed',
                                                                      },
                                                                      null,
                                                                      8,
                                                                      ['node'],
                                                                    ),
                                                                  ],
                                                                  8,
                                                                  ZD,
                                                                )
                                                              ),
                                                            ),
                                                            128,
                                                          )),
                                                        ])
                                                      ),
                                                    ),
                                                    128,
                                                  )),
                                                ],
                                                8,
                                                YD,
                                              ),
                                            ])),
                                          ];
                                        }),
                                        _: 1,
                                      },
                                      512,
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                          ]),
                          t.createTextVNode(),
                        ]),
                      ],
                      2,
                    ),
                    t.createTextVNode(),
                    s.value === 'grid'
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'div',
                          {
                            key: 0,
                            class: t.normalizeClass([
                              'tab-pane flex-grow-1 overflow-hidden position-relative',
                              { 'show active': s.value === 'grid' },
                            ]),
                          },
                          [
                            t.createElementVNode('div', eV, [
                              t.createVNode($h),
                              t.createTextVNode(),
                              t.createVNode(JO, { class: 'flex-grow-1 overflow-auto plan-grid' }),
                            ]),
                          ],
                          2,
                        ))
                      : t.createCommentVNode('', !0),
                    t.createTextVNode(),
                    t.createElementVNode(
                      'div',
                      {
                        class: t.normalizeClass([
                          'tab-pane flex-grow-1 overflow-hidden position-relative',
                          { 'show active': s.value === 'raw' },
                        ]),
                      },
                      [
                        t.createElementVNode('div', tV, [
                          t.createElementVNode('div', nV, [
                            t.createElementVNode('pre', rV, [
                              t.createElementVNode('code', { innerHTML: t.unref(XA)(e.planSource) }, null, 8, iV),
                            ]),
                          ]),
                          t.createTextVNode(),
                          t.createVNode(fc, { content: e.planSource }, null, 8, ['content']),
                        ]),
                      ],
                      2,
                    ),
                    t.createTextVNode(),
                    l.value
                      ? (t.openBlock(),
                        t.createElementBlock(
                          'div',
                          {
                            key: 1,
                            class: t.normalizeClass([
                              'tab-pane flex-grow-1 overflow-hidden position-relative',
                              { 'show active': s.value === 'query' },
                            ]),
                          },
                          [
                            t.createElementVNode('div', oV, [
                              t.createElementVNode('div', aV, [
                                t.createElementVNode('pre', sV, [
                                  t.createElementVNode('code', { innerHTML: t.unref(zA)(l.value) }, null, 8, lV),
                                ]),
                              ]),
                            ]),
                            t.createTextVNode(),
                            t.createVNode(fc, { content: l.value }, null, 8, ['content']),
                          ],
                          2,
                        ))
                      : t.createCommentVNode('', !0),
                    t.createTextVNode(),
                    t.createElementVNode(
                      'div',
                      {
                        class: t.normalizeClass([
                          'tab-pane flex-grow-1 overflow-auto',
                          { 'show active': s.value === 'stats' },
                        ]),
                      },
                      [f.value ? (t.openBlock(), t.createBlock(bL, { key: 0 })) : t.createCommentVNode('', !0)],
                      2,
                    ),
                  ]),
                ],
                512,
              ))
            : (t.openBlock(),
              t.createElementBlock('div', mD, [
                t.createElementVNode('div', ED, [
                  t.createElementVNode('div', _D, [
                    gD,
                    t.createTextVNode(),
                    TD,
                    t.createTextVNode(),
                    t.createElementVNode('div', ND, [
                      t.createElementVNode('div', AD, [
                        t.createElementVNode('pre', yD, [
                          t.createElementVNode('code', { innerHTML: e.planSource }, null, 8, SD),
                        ]),
                      ]),
                      t.createTextVNode(),
                      t.createVNode(fc, { content: e.planSource }, null, 8, ['content']),
                    ]),
                    t.createTextVNode(),
                    bD,
                    t.createTextVNode(),
                    t.createElementVNode('div', xD, [
                      t.createElementVNode('span', OD, [
                        t.createVNode(Ph),
                        t.createTextVNode(`
            PEV2 `),
                        t.createElementVNode('i', null, 'version ' + t.toDisplayString(t.unref(r)), 1),
                      ]),
                      t.createTextVNode(),
                      RD,
                    ]),
                  ]),
                ]),
              ]));
      },
    }),
    W5 = '';
  (Qt.Plan = cV), Object.defineProperty(Qt, Symbol.toStringTag, { value: 'Module' });
});
